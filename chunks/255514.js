n.d(t, { Z: () => ee }), n(388685), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(741086),
    a = n(481060),
    o = n(600164),
    s = n(277537),
    c = n(631885),
    d = n(981312),
    u = n(155647),
    _ = n(185625),
    m = n(273389),
    p = n(778231),
    g = n(816342),
    f = n(15667),
    h = n(76264),
    b = n(805746),
    x = n(822686),
    v = n(356110),
    j = n(730719),
    y = n(996701),
    O = n(238122),
    C = n(273514),
    I = n(995712),
    Z = n(763431),
    S = n(234937),
    T = n(473121),
    N = n(497954),
    P = n(449413),
    E = n(266080),
    k = n(316617),
    w = n(15682),
    D = n(189472),
    R = n(749534),
    M = n(157759),
    A = n(521332),
    B = n(680050),
    L = n(905434),
    U = n(196627),
    G = n(289809),
    H = n(739319),
    W = n(842401),
    z = n(229916),
    F = n(375790),
    V = n(981631),
    Q = n(388032),
    K = n(764295),
    J = n(520310);
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
            onSubmit: ei,
            multiSelect: el,
            reportId: ea,
            textInput: eo,
        } = e,
        es = X(t, "checkbox"),
        ec = X(t, "text_line_resource"),
        ed = $(t, "external_link"),
        eu = $(t, "free_text"),
        e_ = $(t, "dropdown"),
        em = X(t, "text"),
        ep = l.s.REPORT_TO_MOD.has(n.name),
        [eg, ef] = i.useState(!1),
        [eh, eb] = i.useState(!1),
        [ex, ev] = i.useState(""),
        [ej, ey] = i.useState(() => ({})),
        [eO, eC] = i.useState(() => ({})),
        eI = i.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eZ = i.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != eu || null != e_ ? eO : void 0,
                multiSelect:
                    null != es
                        ? {
                              name: es.name,
                              state: ej,
                          }
                        : void 0,
            }),
            [t, eu, e_, es, ej, eO],
        ),
        eS = i.useMemo(() => (0, _.VP)(eu, e_, es, eO, ej), [eu, e_, es, eO, ej]),
        eT = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = Y({}, eO);
            (r[e] = {
                value: t,
                isValid: n,
            }),
                eC(r);
        },
        eN = (e) => {
            en(eZ(e));
        };
    i.useEffect(() => {
        null != el && ey(el), null != eo && eC(eo);
    }, [el, eo]),
        i.useEffect(() => {
            if (null != es) {
                let e = es.data;
                if (null != e)
                    for (let [t, n, r, i] of e)
                        i &&
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
        }, [es]),
        i.useEffect(() => {
            t.is_auto_submit && !eh && (eb(!0), ei(eZ(["", t.id])));
        }, [t.is_auto_submit, eh, ei, eZ, t.id]);
    let eP = (0, u.fW)(ee),
        eE = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        ek = (0, d.U)(),
        ew = (0, s.PO)("share_with_parent_element"),
        eD = (0, c.zu)(),
        eR = ek && eD.length > 0 && ew && null != X(t, "share_with_parents");
    return (0, r.jsxs)("div", {
        className: J.container,
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                direction: o.Z.Direction.VERTICAL,
                className: J.header,
                children: [
                    (0, r.jsx)(U.Z, { element: X(t, "success") }),
                    (0, r.jsx)(T.Z, {
                        node: t,
                        isModeratorReport: ep,
                    }),
                    (0, r.jsx)(P.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: J.body,
                children: [
                    null != ec && (0, r.jsx)(H.Z, { element: ec }),
                    null != em && (0, r.jsx)(G.Z, { element: em }),
                    null != X(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(k.Z, { message: n.record }),
                    null != X(t, "user_preview") && "user" === n.name ? (0, r.jsx)(W.Z, { user: n.record }) : null,
                    null != X(t, "widget_preview") && "widget" === n.name
                        ? (0, r.jsx)(z.Z, {
                              widget: n.widget,
                              userId: n.user_id,
                          })
                        : null,
                    null != X(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(Z.Z, { guild: n.record }) : null,
                    null != X(t, "breadcrumbs") &&
                        (0, r.jsx)(f.Z, {
                            isModeratorReport: ep,
                            history: et,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return F.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(R.Z, {
                            children: [
                                eE &&
                                    (0, r.jsx)(N.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eI,
                                        reportId: ea,
                                    }),
                                eR && (0, r.jsx)(B.Z, { parents: eD }),
                                null != X(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, r.jsx)(g.Z, {
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
                                    (0, r.jsx)(D.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eI,
                                        reportId: ea,
                                    }),
                                null != X(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(x.Z, {
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
                                    (0, r.jsx)(M.Z, {
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
                        (0, r.jsx)(L.Z, { stageInstance: n.record }),
                    null != X(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, r.jsx)(S.Z, { event: n.record }),
                    null != X(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, r.jsx)(C.Z, { entry: n.record }),
                    null != X(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, r.jsx)(I.Z, { entry: n.record }),
                    null != X(t, "app_preview") && "application" === n.name && (0, r.jsx)(p.Z, { entry: n.record }),
                    null != es &&
                        (0, r.jsx)(w.Z, {
                            element: es,
                            onChange: (e, t) => {
                                let n = Y({}, ej);
                                e in ej ? delete n[e] : (n[e] = t), ey(n);
                            },
                            state: ej,
                        }),
                    q.includes(n.name) &&
                        null != e_ &&
                        e_.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            elements: e_,
                            onChange: eT,
                            state: eO,
                        }),
                    q.includes(n.name) &&
                        null != eu &&
                        eu.length > 0 &&
                        (0, r.jsx)(O.Z, {
                            elements: eu,
                            onChange: eT,
                            state: eO,
                        }),
                    (0, r.jsxs)("div", {
                        className: J.listContainer,
                        children: [
                            (0, r.jsx)(h.Z, {
                                node: t,
                                onSelectChild: eN,
                                nodeMap: e.nodeMap,
                            }),
                            null != ed && ed.length > 0 ? (0, r.jsx)(y.Z, { elements: ed }) : null,
                        ],
                    }),
                    (0, r.jsx)(j.Z, {
                        errorMessage: ex,
                        onClose: () => {
                            ev("");
                        },
                    }),
                ],
            }),
            (0, r.jsx)(m.Z, {
                button: t.button,
                submitting: eg,
                disableNext: eS,
                isModeratorReport: ep,
                onClick: (t) => {
                    switch (t.type) {
                        case "done":
                        case "cancel":
                            er();
                            break;
                        case "next":
                            eN(["", t.target]);
                            break;
                        case "submit":
                            ef(!0);
                            let n = ["", e.successNodeId];
                            ei(eZ(n))
                                .then(() => {
                                    ev(""), eN(n);
                                })
                                .catch((e) => {
                                    var t;
                                    (null == (t = e.body) ? void 0 : t.code) === V.evJ.INVALID_FORM_BODY
                                        ? ev(Q.intl.string(Q.t.VjAAuL))
                                        : ep
                                          ? ev(Q.intl.string(K.default.psKFdH))
                                          : ev(Q.intl.string(Q.t.h6D8V1));
                                })
                                .finally(() => {
                                    ef(!1);
                                });
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: et.length > 0,
            }),
            (0, r.jsx)(a.olH, {
                "data-migration-pending": !0,
                className: J.closeButton,
                onClick: er,
            }),
        ],
    });
};
