n.d(t, { Z: () => Q }), n(388685), n(457542);
var r = n(255367),
    a = n(73800),
    i = n(741086),
    l = n(481060),
    o = n(600164),
    s = n(155647),
    c = n(185625),
    d = n(273389),
    u = n(778231),
    m = n(816342),
    p = n(15667),
    _ = n(76264),
    g = n(805746),
    b = n(822686),
    h = n(356110),
    x = n(730719),
    f = n(996701),
    v = n(238122),
    j = n(273514),
    y = n(995712),
    C = n(763431),
    O = n(234937),
    I = n(473121),
    T = n(497954),
    Z = n(449413),
    S = n(266080),
    N = n(316617),
    P = n(15682),
    k = n(189472),
    E = n(749534),
    w = n(157759),
    M = n(521332),
    A = n(905434),
    R = n(196627),
    D = n(289809),
    B = n(739319),
    L = n(842401),
    U = n(375790),
    G = n(981631),
    z = n(388032),
    W = n(764295),
    F = n(520310);
function H(e) {
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
let V = ["user_urf", "message_urf", "guild_urf"];
function X(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function q(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let Q = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: Q,
            history: J,
            onSelectChild: K,
            onModalClose: Y,
            onSubmit: $,
            multiSelect: ee,
            reportId: et,
            textInput: en,
        } = e,
        er = X(t, "checkbox"),
        ea = X(t, "text_line_resource"),
        ei = q(t, "external_link"),
        el = q(t, "free_text"),
        eo = q(t, "dropdown"),
        es = X(t, "text"),
        ec = i.s.REPORT_TO_MOD.has(n.name),
        [ed, eu] = a.useState(!1),
        [em, ep] = a.useState(!1),
        [e_, eg] = a.useState(""),
        [eb, eh] = a.useState(() => ({})),
        [ex, ef] = a.useState(() => ({})),
        ev = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        ej = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != el || null != eo ? ex : void 0,
                multiSelect:
                    null != er
                        ? {
                              name: er.name,
                              state: eb,
                          }
                        : void 0,
            }),
            [t, el, eo, er, eb, ex],
        ),
        ey = a.useMemo(() => (0, c.VP)(el, eo, er, ex, eb), [el, eo, er, ex, eb]),
        eC = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = H({}, ex);
            (r[e] = {
                value: t,
                isValid: n,
            }),
                ef(r);
        },
        eO = (e) => {
            K(ej(e));
        };
    a.useEffect(() => {
        null != ee && eh(ee), null != en && ef(en);
    }, [ee, en]),
        a.useEffect(() => {
            if (null != er) {
                let e = er.data;
                if (null != e)
                    for (let [t, n, r, a] of e)
                        a &&
                            eh((e) =>
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
                                })(H({}, e), { [t]: n }),
                            );
            }
        }, [er]),
        a.useEffect(() => {
            t.is_auto_submit && !em && (ep(!0), $(ej(["", t.id])));
        }, [t.is_auto_submit, em, $, ej, t.id]);
    let eI = (0, s.fW)(Q),
        eT = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name);
    return (0, r.jsxs)("div", {
        className: F.container,
        children: [
            (0, r.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                direction: o.Z.Direction.VERTICAL,
                className: F.header,
                children: [
                    (0, r.jsx)(R.Z, { element: X(t, "success") }),
                    (0, r.jsx)(I.Z, {
                        node: t,
                        isModeratorReport: ec,
                    }),
                    (0, r.jsx)(Z.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: F.body,
                children: [
                    null != ea && (0, r.jsx)(B.Z, { element: ea }),
                    null != es && (0, r.jsx)(D.Z, { element: es }),
                    null != X(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(N.Z, { message: n.record }),
                    null != X(t, "user_preview") && "user" === n.name ? (0, r.jsx)(L.Z, { user: n.record }) : null,
                    null != X(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(C.Z, { guild: n.record }) : null,
                    null != X(t, "breadcrumbs") &&
                        (0, r.jsx)(p.Z, {
                            isModeratorReport: ec,
                            history: J,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return U.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(E.Z, {
                            children: [
                                eT &&
                                    (0, r.jsx)(T.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: ev,
                                        reportId: et,
                                    }),
                                null != X(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, r.jsx)(m.Z, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: ev,
                                        reportId: et,
                                        reportType: n,
                                    }),
                                !eT &&
                                    null != X(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(k.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: ev,
                                        reportId: et,
                                    }),
                                null != X(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(b.Z, {
                                        message: n.record,
                                        reportId: et,
                                    }),
                                null != X(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, r.jsx)(S.Z, {
                                        guildId: n.record.id,
                                        reportId: et,
                                    }),
                                null != X(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(g.Z, {
                                        application: n.record,
                                        reportId: et,
                                    }),
                                null != X(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(w.Z, {
                                        application: n.record,
                                        reportId: et,
                                    }),
                            ],
                        }),
                    null != X(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eI &&
                        (0, r.jsx)(M.Z, {
                            settingsUpsells: eI,
                            channelId: n.record.channel_id,
                            onModalClose: Y,
                            reportId: et,
                            reportType: n,
                            reportSubType: Q,
                        }),
                    null != X(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, r.jsx)(A.Z, { stageInstance: n.record }),
                    null != X(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, r.jsx)(O.Z, { event: n.record }),
                    null != X(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, r.jsx)(j.Z, { entry: n.record }),
                    null != X(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, r.jsx)(y.Z, { entry: n.record }),
                    null != X(t, "app_preview") && "application" === n.name && (0, r.jsx)(u.Z, { entry: n.record }),
                    null != er &&
                        (0, r.jsx)(P.Z, {
                            element: er,
                            onChange: (e, t) => {
                                let n = H({}, eb);
                                e in eb ? delete n[e] : (n[e] = t), eh(n);
                            },
                            state: eb,
                        }),
                    V.includes(n.name) &&
                        null != eo &&
                        eo.length > 0 &&
                        (0, r.jsx)(h.Z, {
                            elements: eo,
                            onChange: eC,
                            state: ex,
                        }),
                    V.includes(n.name) &&
                        null != el &&
                        el.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            elements: el,
                            onChange: eC,
                            state: ex,
                        }),
                    (0, r.jsxs)("div", {
                        className: F.listContainer,
                        children: [
                            (0, r.jsx)(_.Z, {
                                node: t,
                                onSelectChild: eO,
                            }),
                            null != ei && ei.length > 0 ? (0, r.jsx)(f.Z, { elements: ei }) : null,
                        ],
                    }),
                    (0, r.jsx)(x.Z, {
                        errorMessage: e_,
                        onClose: () => {
                            eg("");
                        },
                    }),
                ],
            }),
            (0, r.jsx)(d.Z, {
                button: t.button,
                submitting: ed,
                disableNext: ey,
                isModeratorReport: ec,
                onClick: (t) => {
                    switch (t.type) {
                        case "done":
                        case "cancel":
                            Y();
                            break;
                        case "next":
                            eO(["", t.target]);
                            break;
                        case "submit":
                            eu(!0);
                            let n = ["", e.successNodeId];
                            $(ej(n))
                                .then(() => {
                                    eg(""), eO(n);
                                })
                                .catch((e) => {
                                    var t;
                                    (null == (t = e.body) ? void 0 : t.code) === G.evJ.INVALID_FORM_BODY
                                        ? eg(z.intl.string(z.t.VjAAuL))
                                        : ec
                                          ? eg(z.intl.string(W.default.psKFdH))
                                          : eg(z.intl.string(z.t.h6D8V1));
                                })
                                .finally(() => {
                                    eu(!1);
                                });
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: J.length > 0,
            }),
            (0, r.jsx)(l.olH, {
                "data-migration-pending": !0,
                className: F.closeButton,
                onClick: Y,
            }),
        ],
    });
};
