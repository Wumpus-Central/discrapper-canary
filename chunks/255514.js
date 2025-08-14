n.d(t, { Z: () => Q }), n(388685), n(457542);
var r = n(255367),
    i = n(73800),
    l = n(741086),
    a = n(481060),
    s = n(600164),
    o = n(155647),
    c = n(185625),
    d = n(273389),
    u = n(778231),
    m = n(816342),
    p = n(15667),
    g = n(76264),
    _ = n(805746),
    b = n(822686),
    h = n(356110),
    x = n(730719),
    f = n(996701),
    v = n(238122),
    j = n(273514),
    y = n(995712),
    O = n(763431),
    Z = n(234937),
    I = n(473121),
    S = n(497954),
    C = n(449413),
    N = n(266080),
    T = n(316617),
    P = n(15682),
    E = n(189472),
    k = n(749534),
    R = n(157759),
    w = n(521332),
    D = n(905434),
    M = n(196627),
    A = n(289809),
    B = n(739319),
    U = n(842401),
    L = n(375790),
    G = n(981631),
    W = n(388032),
    F = n(764295),
    z = n(520310);
function V(e) {
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
let X = ["user_urf", "message_urf", "guild_urf"];
function q(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function H(e, t) {
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
        er = q(t, "checkbox"),
        ei = q(t, "text_line_resource"),
        el = H(t, "external_link"),
        ea = H(t, "free_text"),
        es = H(t, "dropdown"),
        eo = q(t, "text"),
        ec = l.s.REPORT_TO_MOD.has(n.name),
        [ed, eu] = i.useState(!1),
        [em, ep] = i.useState(!1),
        [eg, e_] = i.useState(""),
        [eb, eh] = i.useState(() => ({})),
        [ex, ef] = i.useState(() => ({})),
        ev = i.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        ej = i.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != ea || null != es ? ex : void 0,
                multiSelect:
                    null != er
                        ? {
                              name: er.name,
                              state: eb,
                          }
                        : void 0,
            }),
            [t, ea, es, er, eb, ex],
        ),
        ey = i.useMemo(() => (0, c.VP)(ea, es, er, ex, eb), [ea, es, er, ex, eb]),
        eO = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = V({}, ex);
            (r[e] = {
                value: t,
                isValid: n,
            }),
                ef(r);
        },
        eZ = (e) => {
            K(ej(e));
        };
    i.useEffect(() => {
        null != ee && eh(ee), null != en && ef(en);
    }, [ee, en]),
        i.useEffect(() => {
            if (null != er) {
                let e = er.data;
                if (null != e)
                    for (let [t, n, r, i] of e)
                        i &&
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
                                })(V({}, e), { [t]: n }),
                            );
            }
        }, [er]),
        i.useEffect(() => {
            t.is_auto_submit && !em && (ep(!0), $(ej(["", t.id])));
        }, [t.is_auto_submit, em, $, ej, t.id]);
    let eI = (0, o.fW)(Q),
        eS = null != q(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name);
    return (0, r.jsxs)("div", {
        className: z.container,
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: z.header,
                children: [
                    (0, r.jsx)(M.Z, { element: q(t, "success") }),
                    (0, r.jsx)(I.Z, {
                        node: t,
                        isModeratorReport: ec,
                    }),
                    (0, r.jsx)(C.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: z.body,
                children: [
                    null != ei && (0, r.jsx)(B.Z, { element: ei }),
                    null != eo && (0, r.jsx)(A.Z, { element: eo }),
                    null != q(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(T.Z, { message: n.record }),
                    null != q(t, "user_preview") && "user" === n.name ? (0, r.jsx)(U.Z, { user: n.record }) : null,
                    null != q(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(O.Z, { guild: n.record }) : null,
                    null != q(t, "breadcrumbs") &&
                        (0, r.jsx)(p.Z, {
                            isModeratorReport: ec,
                            history: J,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return L.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(k.Z, {
                            children: [
                                eS &&
                                    (0, r.jsx)(S.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: ev,
                                        reportId: et,
                                    }),
                                null != q(t, "block_users") &&
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
                                !eS &&
                                    null != q(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(E.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: ev,
                                        reportId: et,
                                    }),
                                null != q(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(b.Z, {
                                        message: n.record,
                                        reportId: et,
                                    }),
                                null != q(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, r.jsx)(N.Z, {
                                        guildId: n.record.id,
                                        reportId: et,
                                    }),
                                null != q(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(_.Z, {
                                        application: n.record,
                                        reportId: et,
                                    }),
                                null != q(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(R.Z, {
                                        application: n.record,
                                        reportId: et,
                                    }),
                            ],
                        }),
                    null != q(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eI &&
                        (0, r.jsx)(w.Z, {
                            settingsUpsells: eI,
                            channelId: n.record.channel_id,
                            onModalClose: Y,
                            reportId: et,
                            reportType: n,
                            reportSubType: Q,
                        }),
                    null != q(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, r.jsx)(D.Z, { stageInstance: n.record }),
                    null != q(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, r.jsx)(Z.Z, { event: n.record }),
                    null != q(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, r.jsx)(j.Z, { entry: n.record }),
                    null != q(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, r.jsx)(y.Z, { entry: n.record }),
                    null != q(t, "app_preview") && "application" === n.name && (0, r.jsx)(u.Z, { entry: n.record }),
                    null != er &&
                        (0, r.jsx)(P.Z, {
                            element: er,
                            onChange: (e, t) => {
                                let n = V({}, eb);
                                e in eb ? delete n[e] : (n[e] = t), eh(n);
                            },
                            state: eb,
                        }),
                    X.includes(n.name) &&
                        null != es &&
                        es.length > 0 &&
                        (0, r.jsx)(h.Z, {
                            elements: es,
                            onChange: eO,
                            state: ex,
                        }),
                    X.includes(n.name) &&
                        null != ea &&
                        ea.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            elements: ea,
                            onChange: eO,
                            state: ex,
                        }),
                    (0, r.jsxs)("div", {
                        className: z.listContainer,
                        children: [
                            (0, r.jsx)(g.Z, {
                                node: t,
                                onSelectChild: eZ,
                            }),
                            null != el && el.length > 0 ? (0, r.jsx)(f.Z, { elements: el }) : null,
                        ],
                    }),
                    (0, r.jsx)(x.Z, {
                        errorMessage: eg,
                        onClose: () => {
                            e_("");
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
                            eZ(["", t.target]);
                            break;
                        case "submit":
                            eu(!0);
                            let n = ["", e.successNodeId];
                            $(ej(n))
                                .then(() => {
                                    e_(""), eZ(n);
                                })
                                .catch((e) => {
                                    var t;
                                    (null == (t = e.body) ? void 0 : t.code) === G.evJ.INVALID_FORM_BODY
                                        ? e_(W.intl.string(W.t.VjAAuL))
                                        : ec
                                          ? e_(W.intl.string(F.default.psKFdH))
                                          : e_(W.intl.string(W.t.h6D8V1));
                                })
                                .finally(() => {
                                    eu(!1);
                                });
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: J.length > 0,
            }),
            (0, r.jsx)(a.olH, {
                "data-migration-pending": !0,
                className: z.closeButton,
                onClick: Y,
            }),
        ],
    });
};
