n.d(t, { Z: () => et }), n(388685), n(457542);
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
    b = n(76264),
    h = n(805746),
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
    P = n(497954),
    N = n(449413),
    E = n(266080),
    k = n(316617),
    w = n(15682),
    R = n(189472),
    D = n(749534),
    M = n(157759),
    A = n(521332),
    B = n(680050),
    L = n(905434),
    U = n(196627),
    G = n(289809),
    W = n(739319),
    z = n(842401),
    F = n(229916),
    q = n(375790),
    V = n(981631),
    X = n(292352),
    H = n(388032),
    Q = n(764295),
    K = n(520310);
function J(e) {
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
let Y = ["user_urf", "message_urf", "guild_urf"];
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
            onModalClose: ei,
            onSubmit: el,
            multiSelect: ea,
            reportId: eo,
            textInput: es,
        } = e,
        ec = $(t, "checkbox"),
        ed = $(t, "text_line_resource"),
        eu = ee(t, "external_link"),
        e_ = ee(t, "free_text"),
        em = ee(t, "dropdown"),
        ep = $(t, "text"),
        eg = l.s.REPORT_TO_MOD.has(n.name),
        [ef, eb] = i.useState(!1),
        [eh, ex] = i.useState(!1),
        [ev, ej] = i.useState(""),
        [ey, eO] = i.useState(() => ({})),
        [eC, eI] = i.useState(() => ({})),
        eZ = i.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eS = i.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != e_ || null != em ? eC : void 0,
                multiSelect:
                    null != ec
                        ? {
                              name: ec.name,
                              state: ey,
                          }
                        : void 0,
            }),
            [t, e_, em, ec, ey, eC],
        ),
        eT = i.useMemo(() => (0, _.VP)(e_, em, ec, eC, ey), [e_, em, ec, eC, ey]),
        eP = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = J({}, eC);
            (r[e] = {
                value: t,
                isValid: n,
            }),
                eI(r);
        },
        eN = (e) => {
            er(eS(e));
        };
    i.useEffect(() => {
        null != ea && eO(ea), null != es && eI(es);
    }, [ea, es]),
        i.useEffect(() => {
            if (null != ec) {
                let e = ec.data;
                if (null != e)
                    for (let [t, n, r, i] of e)
                        i &&
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
                                })(J({}, e), { [t]: n }),
                            );
            }
        }, [ec]),
        i.useEffect(() => {
            t.is_auto_submit && !eh && (ex(!0), el(eS(["", t.id])));
        }, [t.is_auto_submit, eh, el, eS, t.id]);
    let eE = (0, u.fW)(et),
        ek = null != $(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        ew = (0, d.U)(),
        eR = (0, s.PO)("share_with_parent_element"),
        eD = (0, c.mq)(X.ne.ACTIVE),
        eM = ew && eD.length > 0 && eR && null != $(t, "share_with_parents");
    return (0, r.jsxs)("div", {
        className: K.container,
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                direction: o.Z.Direction.VERTICAL,
                className: K.header,
                children: [
                    (0, r.jsx)(U.Z, { element: $(t, "success") }),
                    (0, r.jsx)(T.Z, {
                        node: t,
                        isModeratorReport: eg,
                    }),
                    (0, r.jsx)(N.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: K.body,
                children: [
                    null != ed && (0, r.jsx)(W.Z, { element: ed }),
                    null != ep && (0, r.jsx)(G.Z, { element: ep }),
                    null != $(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(k.Z, { message: n.record }),
                    null != $(t, "user_preview") && "user" === n.name ? (0, r.jsx)(z.Z, { user: n.record }) : null,
                    null != $(t, "widget_preview") && "widget" === n.name
                        ? (0, r.jsx)(F.Z, {
                              widget: n.widget,
                              userId: n.user_id,
                          })
                        : null,
                    null != $(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(Z.Z, { guild: n.record }) : null,
                    null != $(t, "breadcrumbs") &&
                        (0, r.jsx)(f.Z, {
                            isModeratorReport: eg,
                            history: en,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return q.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(D.Z, {
                            children: [
                                ek &&
                                    (0, r.jsx)(P.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eZ,
                                        reportId: eo,
                                    }),
                                eM && (0, r.jsx)(B.Z, { parents: eD }),
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
                                        channelId: eZ,
                                        reportId: eo,
                                        reportType: n,
                                    }),
                                !ek &&
                                    null != $(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(R.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eZ,
                                        reportId: eo,
                                    }),
                                null != $(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(x.Z, {
                                        message: n.record,
                                        reportId: eo,
                                    }),
                                null != $(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, r.jsx)(E.Z, {
                                        guildId: n.record.id,
                                        reportId: eo,
                                    }),
                                null != $(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(h.Z, {
                                        application: n.record,
                                        reportId: eo,
                                    }),
                                null != $(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(M.Z, {
                                        application: n.record,
                                        reportId: eo,
                                    }),
                            ],
                        }),
                    null != $(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eE &&
                        (0, r.jsx)(A.Z, {
                            settingsUpsells: eE,
                            channelId: n.record.channel_id,
                            onModalClose: ei,
                            reportId: eo,
                            reportType: n,
                            reportSubType: et,
                        }),
                    null != $(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, r.jsx)(L.Z, { stageInstance: n.record }),
                    null != $(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, r.jsx)(S.Z, { event: n.record }),
                    null != $(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, r.jsx)(C.Z, { entry: n.record }),
                    null != $(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, r.jsx)(I.Z, { entry: n.record }),
                    null != $(t, "app_preview") && "application" === n.name && (0, r.jsx)(p.Z, { entry: n.record }),
                    null != ec &&
                        (0, r.jsx)(w.Z, {
                            element: ec,
                            onChange: (e, t) => {
                                let n = J({}, ey);
                                e in ey ? delete n[e] : (n[e] = t), eO(n);
                            },
                            state: ey,
                        }),
                    Y.includes(n.name) &&
                        null != em &&
                        em.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            elements: em,
                            onChange: eP,
                            state: eC,
                        }),
                    Y.includes(n.name) &&
                        null != e_ &&
                        e_.length > 0 &&
                        (0, r.jsx)(O.Z, {
                            elements: e_,
                            onChange: eP,
                            state: eC,
                        }),
                    (0, r.jsxs)("div", {
                        className: K.listContainer,
                        children: [
                            (0, r.jsx)(b.Z, {
                                node: t,
                                onSelectChild: eN,
                                nodeMap: e.nodeMap,
                            }),
                            null != eu && eu.length > 0 ? (0, r.jsx)(y.Z, { elements: eu }) : null,
                        ],
                    }),
                    (0, r.jsx)(j.Z, {
                        errorMessage: ev,
                        onClose: () => {
                            ej("");
                        },
                    }),
                ],
            }),
            (0, r.jsx)(m.Z, {
                button: t.button,
                submitting: ef,
                disableNext: eT,
                isModeratorReport: eg,
                onClick: (t) => {
                    switch (t.type) {
                        case "done":
                        case "cancel":
                            ei();
                            break;
                        case "next":
                            eN(["", t.target]);
                            break;
                        case "submit":
                            eb(!0);
                            let n = ["", e.successNodeId];
                            el(eS(n))
                                .then(() => {
                                    ej(""), eN(n);
                                })
                                .catch((e) => {
                                    var t;
                                    (null == (t = e.body) ? void 0 : t.code) === V.evJ.INVALID_FORM_BODY
                                        ? ej(H.intl.string(H.t.VjAAuL))
                                        : eg
                                          ? ej(H.intl.string(Q.default.psKFdH))
                                          : ej(H.intl.string(H.t.h6D8V1));
                                })
                                .finally(() => {
                                    eb(!1);
                                });
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: en.length > 0,
            }),
            (0, r.jsx)(a.olH, {
                "data-migration-pending": !0,
                className: K.closeButton,
                onClick: ei,
            }),
        ],
    });
};
