n.d(t, { Z: () => ee }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(741086),
    a = n(481060),
    s = n(600164),
    o = n(631885),
    d = n(981312),
    c = n(155647),
    u = n(82554),
    m = n(185625),
    b = n(273389),
    p = n(778231),
    g = n(816342),
    f = n(15667),
    x = n(76264),
    h = n(805746),
    v = n(822686),
    j = n(356110),
    _ = n(730719),
    y = n(996701),
    O = n(238122),
    Z = n(273514),
    I = n(995712),
    C = n(763431),
    S = n(234937),
    N = n(473121),
    T = n(497954),
    P = n(449413),
    k = n(266080),
    E = n(316617),
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
    J = n(792389),
    K = n(467171);
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
let q = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
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
        eb = X(t, "text"),
        ep = i.s.REPORT_TO_MOD.has(n.name),
        [eg, ef] = l.useState(!1),
        [ex, eh] = l.useState(!1),
        [ev, ej] = l.useState(""),
        [e_, ey] = l.useState(() => ({})),
        [eO, eZ] = l.useState(() => ({})),
        eI = l.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eC = l.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != eu || null != em ? eO : void 0,
                multiSelect:
                    null != eo
                        ? {
                              name: eo.name,
                              state: e_,
                          }
                        : void 0,
            }),
            [t, eu, em, eo, e_, eO],
        ),
        eS = l.useMemo(() => (0, m.VP)(eu, em, eo, eO, e_), [eu, em, eo, eO, e_]),
        eN = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = Y({}, eO);
            (r[e] = {
                value: t,
                isValid: n,
            }),
                eZ(r);
        },
        eT = l.useCallback(
            (e) => {
                en(eC(e));
            },
            [en, eC],
        );
    l.useEffect(() => {
        null != ei && ey(ei), null != es && eZ(es);
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
        }, [eo]);
    let eP = l.useCallback(
            (e) => {
                e === V.evJ.INVALID_FORM_BODY
                    ? ej(Q.intl.string(Q.t.VjAAuP))
                    : ep
                      ? ej(Q.intl.string(J.default.psKFdJ))
                      : ej(Q.intl.string(Q.t.h6D8Vy));
            },
            [ep],
        ),
        ek = l.useCallback(() => {
            let t = ["", e.successNodeId];
            el(eC(t))
                .then(() => {
                    ej(""), eT(t);
                })
                .catch((e) => {
                    var t;
                    eP(null == (t = e.body) ? void 0 : t.code);
                })
                .finally(() => {
                    ef(!1);
                });
        }, [e.successNodeId, eC, el, eT, eP]),
        eE = l.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        er();
                        break;
                    case "next":
                        eT(["", e.target]);
                        break;
                    case "submit":
                        ef(!0), ek();
                }
            },
            [er, eT, ek],
        ),
        ew = l.useCallback(
            (e) => {
                "Enter" !== e.key || eS || eg || null == t.button || (e.preventDefault(), eE(t.button));
            },
            [eS, eg, t.button, eE],
        );
    l.useEffect(() => {
        t.is_auto_submit && !ex && (eh(!0), el(eC(["", t.id])));
    }, [t.is_auto_submit, ex, el, eC, t.id]);
    let eM = (0, c.fW)(ee),
        eD = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eR = (0, d.U)(),
        eA = (0, o.zu)(),
        eB = eR && eA.length > 0 && null != X(t, "share_with_parents"),
        eU = n.name === u.BM.MEDIA_TAKEDOWN;
    return (0, r.jsxs)("div", {
        className: K.container,
        onKeyDown: ew,
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
                        isModeratorReport: ep,
                        isTidaReport: eU,
                    }),
                    (0, r.jsx)(P.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: K.body,
                children: [
                    null != ed && (0, r.jsx)(H.Z, { element: ed }),
                    null != eb && (0, r.jsx)(G.Z, { element: eb }),
                    null != X(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(E.Z, { message: n.record }),
                    null != X(t, "user_preview") && "user" === n.name ? (0, r.jsx)(W.Z, { user: n.record }) : null,
                    null != X(t, "widget_preview") && "widget" === n.name
                        ? (0, r.jsx)(F.Z, {
                              widget: n.widget,
                              userId: n.user_id,
                          })
                        : null,
                    null != X(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(C.Z, { guild: n.record }) : null,
                    null != X(t, "breadcrumbs") &&
                        (0, r.jsx)(f.Z, {
                            isModeratorReport: ep,
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
                                eD &&
                                    (0, r.jsx)(T.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eI,
                                        reportId: ea,
                                    }),
                                eB && (0, r.jsx)(B.Z, { parents: eA }),
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
                                !eD &&
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
                                    (0, r.jsx)(v.Z, {
                                        message: n.record,
                                        reportId: ea,
                                    }),
                                null != X(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, r.jsx)(k.Z, {
                                        guildId: n.record.id,
                                        reportId: ea,
                                    }),
                                null != X(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(h.Z, {
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
                        null != eM &&
                        (0, r.jsx)(A.Z, {
                            settingsUpsells: eM,
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
                        (0, r.jsx)(Z.Z, { entry: n.record }),
                    null != X(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, r.jsx)(I.Z, { entry: n.record }),
                    null != X(t, "app_preview") && "application" === n.name && (0, r.jsx)(p.Z, { entry: n.record }),
                    null != eo &&
                        (0, r.jsx)(w.Z, {
                            element: eo,
                            onChange: (e, t) => {
                                let n = Y({}, e_);
                                e in e_ ? delete n[e] : (n[e] = t), ey(n);
                            },
                            state: e_,
                        }),
                    q.includes(n.name) &&
                        null != em &&
                        em.length > 0 &&
                        (0, r.jsx)(j.Z, {
                            elements: em,
                            onChange: eN,
                            state: eO,
                        }),
                    q.includes(n.name) &&
                        null != eu &&
                        eu.length > 0 &&
                        (0, r.jsx)(O.Z, {
                            elements: eu,
                            onChange: eN,
                            state: eO,
                        }),
                    ((null != t.children && t.children.length > 0) || (null != ec && ec.length > 0)) &&
                        (0, r.jsxs)("div", {
                            className: K.listContainer,
                            children: [
                                (0, r.jsx)(x.Z, {
                                    node: t,
                                    onSelectChild: eT,
                                    nodeMap: e.nodeMap,
                                }),
                                null != ec && ec.length > 0 ? (0, r.jsx)(y.Z, { elements: ec }) : null,
                            ],
                        }),
                    (0, r.jsx)(_.Z, {
                        errorMessage: ev,
                        onClose: () => {
                            ej("");
                        },
                    }),
                ],
            }),
            (0, r.jsx)(b.Z, {
                button: t.button,
                submitting: eg,
                disableNext: eS,
                isModeratorReport: ep,
                onClick: eE,
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
