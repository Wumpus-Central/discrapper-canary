n.d(t, { Z: () => et }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(741086),
    a = n(481060),
    s = n(600164),
    o = n(277537),
    d = n(631885),
    c = n(981312),
    u = n(155647),
    m = n(82554),
    b = n(185625),
    p = n(273389),
    g = n(778231),
    f = n(816342),
    h = n(15667),
    x = n(76264),
    v = n(805746),
    _ = n(822686),
    j = n(356110),
    y = n(730719),
    O = n(996701),
    Z = n(238122),
    I = n(273514),
    C = n(995712),
    S = n(763431),
    N = n(234937),
    P = n(473121),
    T = n(497954),
    k = n(449413),
    E = n(266080),
    w = n(316617),
    M = n(15682),
    D = n(189472),
    R = n(749534),
    A = n(157759),
    B = n(521332),
    U = n(680050),
    L = n(905434),
    G = n(196627),
    H = n(289809),
    W = n(739319),
    F = n(842401),
    z = n(229916),
    V = n(375790),
    Q = n(981631),
    K = n(388032),
    J = n(162085),
    Y = n(467171);
function q(e) {
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
let X = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function $(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function ee(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let et = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: et,
            history: en,
            onSelectChild: er,
            onModalClose: el,
            onSubmit: ei,
            multiSelect: ea,
            reportId: es,
            textInput: eo,
        } = e,
        ed = $(t, "checkbox"),
        ec = $(t, "text_line_resource"),
        eu = ee(t, "external_link"),
        em = ee(t, "free_text"),
        eb = ee(t, "dropdown"),
        ep = $(t, "text"),
        eg = i.s.REPORT_TO_MOD.has(n.name),
        [ef, eh] = l.useState(!1),
        [ex, ev] = l.useState(!1),
        [e_, ej] = l.useState(""),
        [ey, eO] = l.useState(() => ({})),
        [eZ, eI] = l.useState(() => ({})),
        eC = l.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eS = l.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != em || null != eb ? eZ : void 0,
                multiSelect:
                    null != ed
                        ? {
                              name: ed.name,
                              state: ey,
                          }
                        : void 0,
            }),
            [t, em, eb, ed, ey, eZ],
        ),
        eN = l.useMemo(() => (0, b.VP)(em, eb, ed, eZ, ey), [em, eb, ed, eZ, ey]),
        eP = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = q({}, eZ);
            (r[e] = {
                value: t,
                isValid: n,
            }),
                eI(r);
        },
        eT = l.useCallback(
            (e) => {
                er(eS(e));
            },
            [er, eS],
        );
    l.useEffect(() => {
        null != ea && eO(ea), null != eo && eI(eo);
    }, [ea, eo]),
        l.useEffect(() => {
            if (null != ed) {
                let e = ed.data;
                if (null != e)
                    for (let [t, n, r, l] of e)
                        l &&
                            eO((e) =>
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
                                })(q({}, e), { [t]: n }),
                            );
            }
        }, [ed]);
    let ek = l.useCallback(
            (e) => {
                e === Q.evJ.INVALID_FORM_BODY
                    ? ej(K.intl.string(K.t.VjAAuP))
                    : eg
                      ? ej(K.intl.string(J.default.psKFdJ))
                      : ej(K.intl.string(K.t.h6D8Vy));
            },
            [eg],
        ),
        eE = l.useCallback(() => {
            let t = ["", e.successNodeId];
            ei(eS(t))
                .then(() => {
                    ej(""), eT(t);
                })
                .catch((e) => {
                    var t;
                    ek(null == (t = e.body) ? void 0 : t.code);
                })
                .finally(() => {
                    eh(!1);
                });
        }, [e.successNodeId, eS, ei, eT, ek]),
        ew = l.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        el();
                        break;
                    case "next":
                        eT(["", e.target]);
                        break;
                    case "submit":
                        eh(!0), eE();
                }
            },
            [el, eT, eE],
        ),
        eM = l.useCallback(
            (e) => {
                "Enter" !== e.key || eN || ef || null == t.button || (e.preventDefault(), ew(t.button));
            },
            [eN, ef, t.button, ew],
        );
    l.useEffect(() => {
        t.is_auto_submit && !ex && (ev(!0), ei(eS(["", t.id])));
    }, [t.is_auto_submit, ex, ei, eS, t.id]);
    let eD = (0, u.fW)(et),
        eR = null != $(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eA = (0, c.U)(),
        eB = (0, o.PO)("share_with_parent_element"),
        eU = (0, d.zu)(),
        eL = eA && eU.length > 0 && eB && null != $(t, "share_with_parents"),
        eG = n.name === m.BM.MEDIA_TAKEDOWN;
    return (0, r.jsxs)("div", {
        className: Y.container,
        onKeyDown: eM,
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: Y.header,
                children: [
                    (0, r.jsx)(G.Z, { element: $(t, "success") }),
                    (0, r.jsx)(P.Z, {
                        node: t,
                        isModeratorReport: eg,
                        isTidaReport: eG,
                    }),
                    (0, r.jsx)(k.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: Y.body,
                children: [
                    null != ec && (0, r.jsx)(W.Z, { element: ec }),
                    null != ep && (0, r.jsx)(H.Z, { element: ep }),
                    null != $(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(w.Z, { message: n.record }),
                    null != $(t, "user_preview") && "user" === n.name ? (0, r.jsx)(F.Z, { user: n.record }) : null,
                    null != $(t, "widget_preview") && "widget" === n.name
                        ? (0, r.jsx)(z.Z, {
                              widget: n.widget,
                              userId: n.user_id,
                          })
                        : null,
                    null != $(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(S.Z, { guild: n.record }) : null,
                    null != $(t, "breadcrumbs") &&
                        (0, r.jsx)(h.Z, {
                            isModeratorReport: eg,
                            history: en,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return V.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(R.Z, {
                            children: [
                                eR &&
                                    (0, r.jsx)(T.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eC,
                                        reportId: es,
                                    }),
                                eL && (0, r.jsx)(U.Z, { parents: eU }),
                                null != $(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, r.jsx)(f.Z, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: eC,
                                        reportId: es,
                                        reportType: n,
                                    }),
                                !eR &&
                                    null != $(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(D.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eC,
                                        reportId: es,
                                    }),
                                null != $(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(_.Z, {
                                        message: n.record,
                                        reportId: es,
                                    }),
                                null != $(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, r.jsx)(E.Z, {
                                        guildId: n.record.id,
                                        reportId: es,
                                    }),
                                null != $(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(v.Z, {
                                        application: n.record,
                                        reportId: es,
                                    }),
                                null != $(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(A.Z, {
                                        application: n.record,
                                        reportId: es,
                                    }),
                            ],
                        }),
                    null != $(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eD &&
                        (0, r.jsx)(B.Z, {
                            settingsUpsells: eD,
                            channelId: n.record.channel_id,
                            onModalClose: el,
                            reportId: es,
                            reportType: n,
                            reportSubType: et,
                        }),
                    null != $(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, r.jsx)(L.Z, { stageInstance: n.record }),
                    null != $(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, r.jsx)(N.Z, { event: n.record }),
                    null != $(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, r.jsx)(I.Z, { entry: n.record }),
                    null != $(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, r.jsx)(C.Z, { entry: n.record }),
                    null != $(t, "app_preview") && "application" === n.name && (0, r.jsx)(g.Z, { entry: n.record }),
                    null != ed &&
                        (0, r.jsx)(M.Z, {
                            element: ed,
                            onChange: (e, t) => {
                                let n = q({}, ey);
                                e in ey ? delete n[e] : (n[e] = t), eO(n);
                            },
                            state: ey,
                        }),
                    X.includes(n.name) &&
                        null != eb &&
                        eb.length > 0 &&
                        (0, r.jsx)(j.Z, {
                            elements: eb,
                            onChange: eP,
                            state: eZ,
                        }),
                    X.includes(n.name) &&
                        null != em &&
                        em.length > 0 &&
                        (0, r.jsx)(Z.Z, {
                            elements: em,
                            onChange: eP,
                            state: eZ,
                        }),
                    ((null != t.children && t.children.length > 0) || (null != eu && eu.length > 0)) &&
                        (0, r.jsxs)("div", {
                            className: Y.listContainer,
                            children: [
                                (0, r.jsx)(x.Z, {
                                    node: t,
                                    onSelectChild: eT,
                                    nodeMap: e.nodeMap,
                                }),
                                null != eu && eu.length > 0 ? (0, r.jsx)(O.Z, { elements: eu }) : null,
                            ],
                        }),
                    (0, r.jsx)(y.Z, {
                        errorMessage: e_,
                        onClose: () => {
                            ej("");
                        },
                    }),
                ],
            }),
            (0, r.jsx)(p.Z, {
                button: t.button,
                submitting: ef,
                disableNext: eN,
                isModeratorReport: eg,
                onClick: ew,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: en.length > 0,
            }),
            (0, r.jsx)(a.olH, {
                "data-migration-pending": !0,
                className: Y.closeButton,
                onClick: el,
            }),
        ],
    });
};
