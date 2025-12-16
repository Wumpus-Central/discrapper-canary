n.d(t, { Z: () => et }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(741086),
    a = n(481060),
    s = n(600164),
    o = n(631885),
    c = n(981312),
    d = n(155647),
    u = n(82554),
    m = n(185625),
    b = n(273389),
    p = n(778231),
    g = n(816342),
    f = n(15667),
    x = n(76264),
    h = n(636319),
    v = n(805746),
    j = n(822686),
    _ = n(356110),
    y = n(730719),
    O = n(996701),
    Z = n(238122),
    C = n(273514),
    I = n(995712),
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
    V = n(739319),
    W = n(842401),
    F = n(229916),
    z = n(375790),
    Q = n(981631),
    K = n(388032),
    q = n(792389),
    J = n(467171);
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
        ec = $(t, "checkbox"),
        ed = $(t, "text_line_resource"),
        eu = ee(t, "external_link"),
        em = ee(t, "free_text"),
        eb = ee(t, "dropdown"),
        ep = $(t, "text"),
        eg = $(t, "content_url_input"),
        ef = i.s.REPORT_TO_MOD.has(n.name),
        [ex, eh] = l.useState(!1),
        [ev, ej] = l.useState(!1),
        [e_, ey] = l.useState(""),
        [eO, eZ] = l.useState(() => ({})),
        [eC, eI] = l.useState(() => ({})),
        eS = l.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eN = l.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != em || null != eb || null != eg ? eC : void 0,
                multiSelect:
                    null != ec
                        ? {
                              name: ec.name,
                              state: eO,
                          }
                        : void 0,
            }),
            [t, em, eb, eg, ec, eO, eC],
        ),
        eP = l.useMemo(
            () =>
                (0, m.VP)(
                    {
                        freeTextElements: em,
                        dropdownElements: eb,
                        multiSelectElement: ec,
                        contentUrlInputElement: eg,
                    },
                    {
                        textInput: eC,
                        multiSelect: eO,
                    },
                ),
            [em, eb, ec, eg, eC, eO],
        ),
        eT = l.useCallback(
            (e, t) => {
                let n = Y({}, eO);
                e in eO ? delete n[e] : (n[e] = t), eZ(n);
            },
            [eO],
        ),
        ek = l.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    l = arguments.length > 4 ? arguments[4] : void 0,
                    i = Y({}, eC);
                (i[e] = {
                    value: t,
                    isValid: n,
                }),
                    null != r &&
                        (null != l && "" !== l
                            ? (i[r] = {
                                  value: l,
                                  isValid: n,
                              })
                            : delete i[r]),
                    eI(i);
            },
            [eC],
        ),
        eE = l.useCallback(
            (e) => {
                er(eN(e));
            },
            [er, eN],
        );
    l.useEffect(() => {
        null != ea && eZ(ea), null != eo && eI(eo);
    }, [ea, eo]),
        l.useEffect(() => {
            if (null != ec) {
                let e = ec.data;
                if (null != e)
                    for (let [t, n, r, l] of e)
                        l &&
                            eZ((e) =>
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
        }, [ec]);
    let ew = l.useCallback(
            (e) => {
                e === Q.evJ.INVALID_FORM_BODY
                    ? ey(K.intl.string(K.t.VjAAuP))
                    : ef
                      ? ey(K.intl.string(q.default.psKFdJ))
                      : ey(K.intl.string(K.t.h6D8Vy));
            },
            [ef],
        ),
        eM = l.useCallback(() => {
            let t = ["", e.successNodeId];
            ei(eN(t))
                .then(() => {
                    ey(""), eE(t);
                })
                .catch((e) => {
                    var t;
                    ew(null == (t = e.body) ? void 0 : t.code);
                })
                .finally(() => {
                    eh(!1);
                });
        }, [e.successNodeId, eN, ei, eE, ew]),
        eD = l.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        el();
                        break;
                    case "next":
                        eE(["", e.target]);
                        break;
                    case "submit":
                        eh(!0), eM();
                }
            },
            [el, eE, eM],
        ),
        eR = l.useCallback(
            (e) => {
                "Enter" !== e.key || eP || ex || null == t.button || (e.preventDefault(), eD(t.button));
            },
            [eP, ex, t.button, eD],
        );
    l.useEffect(() => {
        t.is_auto_submit && !ev && (ej(!0), ei(eN(["", t.id])));
    }, [t.is_auto_submit, ev, ei, eN, t.id]);
    let eA = (0, d.fW)(et),
        eB = null != $(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eU = (0, c.U)(),
        eL = (0, o.zu)(),
        eG = eU && eL.length > 0 && null != $(t, "share_with_parents"),
        eH = n.name === u.BM.MEDIA_TAKEDOWN;
    return (0, r.jsxs)("div", {
        className: J.container,
        onKeyDown: eR,
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: J.header,
                children: [
                    (0, r.jsx)(G.Z, { element: $(t, "success") }),
                    (0, r.jsx)(P.Z, {
                        node: t,
                        isModeratorReport: ef,
                        isTidaReport: eH,
                    }),
                    (0, r.jsx)(k.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: J.body,
                children: [
                    null != ed && (0, r.jsx)(V.Z, { element: ed }),
                    null != ep && (0, r.jsx)(H.Z, { element: ep }),
                    null != $(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(w.Z, { message: n.record }),
                    null != $(t, "user_preview") && "user" === n.name ? (0, r.jsx)(W.Z, { user: n.record }) : null,
                    null != $(t, "widget_preview") && "widget" === n.name
                        ? (0, r.jsx)(F.Z, {
                              widget: n.widget,
                              userId: n.user_id,
                          })
                        : null,
                    null != $(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(S.Z, { guild: n.record }) : null,
                    null != $(t, "breadcrumbs") &&
                        (0, r.jsx)(f.Z, {
                            isModeratorReport: ef,
                            history: en,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return z.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(R.Z, {
                            children: [
                                eB &&
                                    (0, r.jsx)(T.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eS,
                                        reportId: es,
                                    }),
                                eG && (0, r.jsx)(U.Z, { parents: eL }),
                                null != $(t, "block_users") &&
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
                                        channelId: eS,
                                        reportId: es,
                                        reportType: n,
                                    }),
                                !eB &&
                                    null != $(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(D.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eS,
                                        reportId: es,
                                    }),
                                null != $(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(j.Z, {
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
                        null != eA &&
                        (0, r.jsx)(B.Z, {
                            settingsUpsells: eA,
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
                        (0, r.jsx)(C.Z, { entry: n.record }),
                    null != $(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, r.jsx)(I.Z, { entry: n.record }),
                    null != $(t, "app_preview") && "application" === n.name && (0, r.jsx)(p.Z, { entry: n.record }),
                    null != ec &&
                        (0, r.jsx)(M.Z, {
                            element: ec,
                            onChange: eT,
                            state: eO,
                        }),
                    X.includes(n.name) &&
                        null != eg &&
                        (0, r.jsx)(h.Z, {
                            element: eg,
                            onChange: ek,
                            state: eC,
                        }),
                    X.includes(n.name) &&
                        null != eb &&
                        eb.length > 0 &&
                        (0, r.jsx)(_.Z, {
                            elements: eb,
                            onChange: ek,
                            state: eC,
                        }),
                    X.includes(n.name) &&
                        null != em &&
                        em.length > 0 &&
                        (0, r.jsx)(Z.Z, {
                            elements: em,
                            onChange: ek,
                            state: eC,
                        }),
                    ((null != t.children && t.children.length > 0) || (null != eu && eu.length > 0)) &&
                        (0, r.jsxs)("div", {
                            className: J.listContainer,
                            children: [
                                (0, r.jsx)(x.Z, {
                                    node: t,
                                    onSelectChild: eE,
                                    nodeMap: e.nodeMap,
                                }),
                                null != eu && eu.length > 0 ? (0, r.jsx)(O.Z, { elements: eu }) : null,
                            ],
                        }),
                    (0, r.jsx)(y.Z, {
                        errorMessage: e_,
                        onClose: () => {
                            ey("");
                        },
                    }),
                ],
            }),
            (0, r.jsx)(b.Z, {
                button: t.button,
                submitting: ex,
                disableNext: eP,
                isModeratorReport: ef,
                onClick: eD,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: en.length > 0,
            }),
            (0, r.jsx)(a.olH, {
                "data-migration-pending": !0,
                className: J.closeButton,
                onClick: el,
            }),
        ],
    });
};
