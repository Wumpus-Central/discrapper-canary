n.d(t, { Z: () => ee }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(741086),
    a = n(481060),
    s = n(600164),
    o = n(277537),
    d = n(631885),
    c = n(981312),
    u = n(155647),
    m = n(185625),
    p = n(273389),
    g = n(778231),
    _ = n(816342),
    x = n(15667),
    h = n(76264),
    b = n(805746),
    f = n(822686),
    v = n(356110),
    j = n(730719),
    y = n(996701),
    Z = n(238122),
    O = n(273514),
    I = n(995712),
    C = n(763431),
    S = n(234937),
    N = n(473121),
    T = n(497954),
    P = n(449413),
    E = n(266080),
    k = n(316617),
    w = n(15682),
    M = n(189472),
    D = n(749534),
    R = n(157759),
    A = n(521332),
    B = n(680050),
    U = n(905434),
    L = n(196627),
    G = n(289809),
    H = n(739319),
    W = n(842401),
    F = n(229916),
    z = n(375790),
    V = n(981631),
    Q = n(388032),
    J = n(864309),
    K = n(520310);
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let q = ["user_urf", "message_urf", "guild_urf"];
function X(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function $(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let ee = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: ee,
            history: et,
            onSelectChild: en,
            onModalClose: er,
            onSubmit: el,
            multiSelect: ei,
            reportId: ea,
            textInput: es,
        } = e,
        eo = X(t, "checkbox"),
        ed = X(t, "text_line_resource"),
        ec = $(t, "external_link"),
        eu = $(t, "free_text"),
        em = $(t, "dropdown"),
        ep = X(t, "text"),
        eg = i.s.REPORT_TO_MOD.has(n.name),
        [e_, ex] = l.useState(!1),
        [eh, eb] = l.useState(!1),
        [ef, ev] = l.useState(""),
        [ej, ey] = l.useState(() => ({})),
        [eZ, eO] = l.useState(() => ({})),
        eI = l.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eC = l.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != eu || null != em ? eZ : void 0,
                multiSelect:
                    null != eo
                        ? {
                              name: eo.name,
                              state: ej,
                          }
                        : void 0,
            }),
            [t, eu, em, eo, ej, eZ],
        ),
        eS = l.useMemo(() => (0, m.VP)(eu, em, eo, eZ, ej), [eu, em, eo, eZ, ej]),
        eN = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = Y({}, eZ);
            (r[e] = {
                value: t,
                isValid: n,
            }),
                eO(r);
        },
        eT = (e) => {
            en(eC(e));
        };
    l.useEffect(() => {
        null != ei && ey(ei), null != es && eO(es);
    }, [ei, es]),
        l.useEffect(() => {
            if (null != eo) {
                let e = eo.data;
                if (null != e)
                    for (let [t, n, r, l] of e)
                        l &&
                            ey((e) =>
                                (function (e, t) {
                                    return (
                                        (t = null != t ? t : {}),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(t)).forEach(function (n) {
                                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                              }),
                                        e
                                    );
                                })(Y({}, e), { [t]: n }),
                            );
            }
        }, [eo]),
        l.useEffect(() => {
            t.is_auto_submit && !eh && (eb(!0), el(eC(["", t.id])));
        }, [t.is_auto_submit, eh, el, eC, t.id]);
    let eP = (0, u.fW)(ee),
        eE = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        ek = (0, c.U)(),
        ew = (0, o.PO)("share_with_parent_element"),
        eM = (0, d.zu)(),
        eD = ek && eM.length > 0 && ew && null != X(t, "share_with_parents");
    return (0, r.jsxs)("div", {
        className: K.container,
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: K.header,
                children: [
                    (0, r.jsx)(L.Z, { element: X(t, "success") }),
                    (0, r.jsx)(N.Z, {
                        node: t,
                        isModeratorReport: eg,
                    }),
                    (0, r.jsx)(P.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: K.body,
                children: [
                    null != ed && (0, r.jsx)(H.Z, { element: ed }),
                    null != ep && (0, r.jsx)(G.Z, { element: ep }),
                    null != X(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(k.Z, { message: n.record }),
                    null != X(t, "user_preview") && "user" === n.name ? (0, r.jsx)(W.Z, { user: n.record }) : null,
                    null != X(t, "widget_preview") && "widget" === n.name
                        ? (0, r.jsx)(F.Z, {
                              widget: n.widget,
                              userId: n.user_id,
                          })
                        : null,
                    null != X(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(C.Z, { guild: n.record }) : null,
                    null != X(t, "breadcrumbs") &&
                        (0, r.jsx)(x.Z, {
                            isModeratorReport: eg,
                            history: et,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return z.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(D.Z, {
                            children: [
                                eE &&
                                    (0, r.jsx)(T.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eI,
                                        reportId: ea,
                                    }),
                                eD && (0, r.jsx)(B.Z, { parents: eM }),
                                null != X(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, r.jsx)(_.Z, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: eI,
                                        reportId: ea,
                                        reportType: n,
                                    }),
                                !eE &&
                                    null != X(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(M.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eI,
                                        reportId: ea,
                                    }),
                                null != X(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(f.Z, {
                                        message: n.record,
                                        reportId: ea,
                                    }),
                                null != X(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, r.jsx)(E.Z, {
                                        guildId: n.record.id,
                                        reportId: ea,
                                    }),
                                null != X(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(b.Z, {
                                        application: n.record,
                                        reportId: ea,
                                    }),
                                null != X(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(R.Z, {
                                        application: n.record,
                                        reportId: ea,
                                    }),
                            ],
                        }),
                    null != X(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eP &&
                        (0, r.jsx)(A.Z, {
                            settingsUpsells: eP,
                            channelId: n.record.channel_id,
                            onModalClose: er,
                            reportId: ea,
                            reportType: n,
                            reportSubType: ee,
                        }),
                    null != X(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, r.jsx)(U.Z, { stageInstance: n.record }),
                    null != X(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, r.jsx)(S.Z, { event: n.record }),
                    null != X(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, r.jsx)(O.Z, { entry: n.record }),
                    null != X(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, r.jsx)(I.Z, { entry: n.record }),
                    null != X(t, "app_preview") && "application" === n.name && (0, r.jsx)(g.Z, { entry: n.record }),
                    null != eo &&
                        (0, r.jsx)(w.Z, {
                            element: eo,
                            onChange: (e, t) => {
                                let n = Y({}, ej);
                                e in ej ? delete n[e] : (n[e] = t), ey(n);
                            },
                            state: ej,
                        }),
                    q.includes(n.name) &&
                        null != em &&
                        em.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            elements: em,
                            onChange: eN,
                            state: eZ,
                        }),
                    q.includes(n.name) &&
                        null != eu &&
                        eu.length > 0 &&
                        (0, r.jsx)(Z.Z, {
                            elements: eu,
                            onChange: eN,
                            state: eZ,
                        }),
                    (0, r.jsxs)("div", {
                        className: K.listContainer,
                        children: [
                            (0, r.jsx)(h.Z, {
                                node: t,
                                onSelectChild: eT,
                                nodeMap: e.nodeMap,
                            }),
                            null != ec && ec.length > 0 ? (0, r.jsx)(y.Z, { elements: ec }) : null,
                        ],
                    }),
                    (0, r.jsx)(j.Z, {
                        errorMessage: ef,
                        onClose: () => {
                            ev("");
                        },
                    }),
                ],
            }),
            (0, r.jsx)(p.Z, {
                button: t.button,
                submitting: e_,
                disableNext: eS,
                isModeratorReport: eg,
                onClick: (t) => {
                    switch (t.type) {
                        case "done":
                        case "cancel":
                            er();
                            break;
                        case "next":
                            eT(["", t.target]);
                            break;
                        case "submit":
                            ex(!0);
                            let n = ["", e.successNodeId];
                            el(eC(n))
                                .then(() => {
                                    ev(""), eT(n);
                                })
                                .catch((e) => {
                                    var t;
                                    (null == (t = e.body) ? void 0 : t.code) === V.evJ.INVALID_FORM_BODY
                                        ? ev(Q.intl.string(Q.t.VjAAuP))
                                        : eg
                                          ? ev(Q.intl.string(J.default.psKFdJ))
                                          : ev(Q.intl.string(Q.t.h6D8Vy));
                                })
                                .finally(() => {
                                    ex(!1);
                                });
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: et.length > 0,
            }),
            (0, r.jsx)(a.olH, {
                "data-migration-pending": !0,
                className: K.closeButton,
                onClick: er,
            }),
        ],
    });
};
