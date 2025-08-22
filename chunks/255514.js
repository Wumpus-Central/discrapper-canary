n.d(t, { Z: () => J }), n(388685), n(457542);
var r = n(951288),
    i = n(647438),
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
    x = n(805746),
    h = n(822686),
    b = n(356110),
    _ = n(730719),
    f = n(996701),
    v = n(238122),
    j = n(273514),
    y = n(995712),
    O = n(763431),
    Z = n(234937),
    I = n(473121),
    N = n(497954),
    S = n(449413),
    C = n(266080),
    T = n(316617),
    P = n(15682),
    E = n(189472),
    k = n(749534),
    w = n(157759),
    R = n(521332),
    D = n(905434),
    M = n(196627),
    A = n(289809),
    B = n(739319),
    U = n(842401),
    L = n(229916),
    G = n(375790),
    W = n(981631),
    F = n(388032),
    z = n(764295),
    X = n(520310);
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
let V = ["user_urf", "message_urf", "guild_urf"];
function H(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function Q(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let J = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: J,
            history: K,
            onSelectChild: Y,
            onModalClose: $,
            onSubmit: ee,
            multiSelect: et,
            reportId: en,
            textInput: er,
        } = e,
        ei = H(t, "checkbox"),
        el = H(t, "text_line_resource"),
        ea = Q(t, "external_link"),
        es = Q(t, "free_text"),
        eo = Q(t, "dropdown"),
        ec = H(t, "text"),
        ed = l.s.REPORT_TO_MOD.has(n.name),
        [eu, em] = i.useState(!1),
        [ep, eg] = i.useState(!1),
        [ex, eh] = i.useState(""),
        [eb, e_] = i.useState(() => ({})),
        [ef, ev] = i.useState(() => ({})),
        ej = i.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        ey = i.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != es || null != eo ? ef : void 0,
                multiSelect:
                    null != ei
                        ? {
                              name: ei.name,
                              state: eb,
                          }
                        : void 0,
            }),
            [t, es, eo, ei, eb, ef],
        ),
        eO = i.useMemo(() => (0, c.VP)(es, eo, ei, ef, eb), [es, eo, ei, ef, eb]),
        eZ = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = q({}, ef);
            (r[e] = {
                value: t,
                isValid: n,
            }),
                ev(r);
        },
        eI = (e) => {
            Y(ey(e));
        };
    i.useEffect(() => {
        null != et && e_(et), null != er && ev(er);
    }, [et, er]),
        i.useEffect(() => {
            if (null != ei) {
                let e = ei.data;
                if (null != e)
                    for (let [t, n, r, i] of e)
                        i &&
                            e_((e) =>
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
        }, [ei]),
        i.useEffect(() => {
            t.is_auto_submit && !ep && (eg(!0), ee(ey(["", t.id])));
        }, [t.is_auto_submit, ep, ee, ey, t.id]);
    let eN = (0, o.fW)(J),
        eS = null != H(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name);
    return (0, r.jsxs)("div", {
        className: X.container,
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: X.header,
                children: [
                    (0, r.jsx)(M.Z, { element: H(t, "success") }),
                    (0, r.jsx)(I.Z, {
                        node: t,
                        isModeratorReport: ed,
                    }),
                    (0, r.jsx)(S.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: X.body,
                children: [
                    null != el && (0, r.jsx)(B.Z, { element: el }),
                    null != ec && (0, r.jsx)(A.Z, { element: ec }),
                    null != H(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(T.Z, { message: n.record }),
                    null != H(t, "user_preview") && "user" === n.name ? (0, r.jsx)(U.Z, { user: n.record }) : null,
                    null != H(t, "widget_preview") && "widget" === n.name
                        ? (0, r.jsx)(L.Z, {
                              widget: n.widget,
                              userId: n.user_id,
                          })
                        : null,
                    null != H(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(O.Z, { guild: n.record }) : null,
                    null != H(t, "breadcrumbs") &&
                        (0, r.jsx)(p.Z, {
                            isModeratorReport: ed,
                            history: K,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return G.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(k.Z, {
                            children: [
                                eS &&
                                    (0, r.jsx)(N.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: ej,
                                        reportId: en,
                                    }),
                                null != H(t, "block_users") &&
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
                                        channelId: ej,
                                        reportId: en,
                                        reportType: n,
                                    }),
                                !eS &&
                                    null != H(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(E.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: ej,
                                        reportId: en,
                                    }),
                                null != H(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(h.Z, {
                                        message: n.record,
                                        reportId: en,
                                    }),
                                null != H(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, r.jsx)(C.Z, {
                                        guildId: n.record.id,
                                        reportId: en,
                                    }),
                                null != H(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(x.Z, {
                                        application: n.record,
                                        reportId: en,
                                    }),
                                null != H(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(w.Z, {
                                        application: n.record,
                                        reportId: en,
                                    }),
                            ],
                        }),
                    null != H(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eN &&
                        (0, r.jsx)(R.Z, {
                            settingsUpsells: eN,
                            channelId: n.record.channel_id,
                            onModalClose: $,
                            reportId: en,
                            reportType: n,
                            reportSubType: J,
                        }),
                    null != H(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, r.jsx)(D.Z, { stageInstance: n.record }),
                    null != H(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, r.jsx)(Z.Z, { event: n.record }),
                    null != H(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, r.jsx)(j.Z, { entry: n.record }),
                    null != H(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, r.jsx)(y.Z, { entry: n.record }),
                    null != H(t, "app_preview") && "application" === n.name && (0, r.jsx)(u.Z, { entry: n.record }),
                    null != ei &&
                        (0, r.jsx)(P.Z, {
                            element: ei,
                            onChange: (e, t) => {
                                let n = q({}, eb);
                                e in eb ? delete n[e] : (n[e] = t), e_(n);
                            },
                            state: eb,
                        }),
                    V.includes(n.name) &&
                        null != eo &&
                        eo.length > 0 &&
                        (0, r.jsx)(b.Z, {
                            elements: eo,
                            onChange: eZ,
                            state: ef,
                        }),
                    V.includes(n.name) &&
                        null != es &&
                        es.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            elements: es,
                            onChange: eZ,
                            state: ef,
                        }),
                    (0, r.jsxs)("div", {
                        className: X.listContainer,
                        children: [
                            (0, r.jsx)(g.Z, {
                                node: t,
                                onSelectChild: eI,
                            }),
                            null != ea && ea.length > 0 ? (0, r.jsx)(f.Z, { elements: ea }) : null,
                        ],
                    }),
                    (0, r.jsx)(_.Z, {
                        errorMessage: ex,
                        onClose: () => {
                            eh("");
                        },
                    }),
                ],
            }),
            (0, r.jsx)(d.Z, {
                button: t.button,
                submitting: eu,
                disableNext: eO,
                isModeratorReport: ed,
                onClick: (t) => {
                    switch (t.type) {
                        case "done":
                        case "cancel":
                            $();
                            break;
                        case "next":
                            eI(["", t.target]);
                            break;
                        case "submit":
                            em(!0);
                            let n = ["", e.successNodeId];
                            ee(ey(n))
                                .then(() => {
                                    eh(""), eI(n);
                                })
                                .catch((e) => {
                                    var t;
                                    (null == (t = e.body) ? void 0 : t.code) === W.evJ.INVALID_FORM_BODY
                                        ? eh(F.intl.string(F.t.VjAAuL))
                                        : ed
                                          ? eh(F.intl.string(z.default.psKFdH))
                                          : eh(F.intl.string(F.t.h6D8V1));
                                })
                                .finally(() => {
                                    em(!1);
                                });
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: K.length > 0,
            }),
            (0, r.jsx)(a.olH, {
                "data-migration-pending": !0,
                className: X.closeButton,
                onClick: $,
            }),
        ],
    });
};
