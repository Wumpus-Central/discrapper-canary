n.d(t, { Z: () => J }), n(388685), n(457542);
var r = n(951288),
    a = n(647438),
    i = n(741086),
    o = n(481060),
    l = n(600164),
    s = n(155647),
    c = n(185625),
    d = n(273389),
    u = n(778231),
    _ = n(816342),
    m = n(15667),
    p = n(76264),
    g = n(805746),
    f = n(822686),
    b = n(356110),
    h = n(730719),
    x = n(996701),
    v = n(238122),
    j = n(273514),
    y = n(995712),
    C = n(763431),
    O = n(234937),
    I = n(473121),
    Z = n(497954),
    T = n(449413),
    S = n(266080),
    N = n(316617),
    P = n(15682),
    k = n(189472),
    w = n(749534),
    E = n(157759),
    M = n(521332),
    B = n(905434),
    A = n(196627),
    D = n(289809),
    R = n(739319),
    L = n(842401),
    G = n(229916),
    U = n(375790),
    F = n(981631),
    W = n(388032),
    z = n(764295),
    V = n(520310);
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
let q = ["user_urf", "message_urf", "guild_urf"];
function X(e, t) {
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
            history: Y,
            onSelectChild: K,
            onModalClose: $,
            onSubmit: ee,
            multiSelect: et,
            reportId: en,
            textInput: er,
        } = e,
        ea = X(t, "checkbox"),
        ei = X(t, "text_line_resource"),
        eo = Q(t, "external_link"),
        el = Q(t, "free_text"),
        es = Q(t, "dropdown"),
        ec = X(t, "text"),
        ed = i.s.REPORT_TO_MOD.has(n.name),
        [eu, e_] = a.useState(!1),
        [em, ep] = a.useState(!1),
        [eg, ef] = a.useState(""),
        [eb, eh] = a.useState(() => ({})),
        [ex, ev] = a.useState(() => ({})),
        ej = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        ey = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != el || null != es ? ex : void 0,
                multiSelect:
                    null != ea
                        ? {
                              name: ea.name,
                              state: eb,
                          }
                        : void 0,
            }),
            [t, el, es, ea, eb, ex],
        ),
        eC = a.useMemo(() => (0, c.VP)(el, es, ea, ex, eb), [el, es, ea, ex, eb]),
        eO = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = H({}, ex);
            (r[e] = {
                value: t,
                isValid: n,
            }),
                ev(r);
        },
        eI = (e) => {
            K(ey(e));
        };
    a.useEffect(() => {
        null != et && eh(et), null != er && ev(er);
    }, [et, er]),
        a.useEffect(() => {
            if (null != ea) {
                let e = ea.data;
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
        }, [ea]),
        a.useEffect(() => {
            t.is_auto_submit && !em && (ep(!0), ee(ey(["", t.id])));
        }, [t.is_auto_submit, em, ee, ey, t.id]);
    let eZ = (0, s.fW)(J),
        eT = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name);
    return (0, r.jsxs)("div", {
        className: V.container,
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                direction: l.Z.Direction.VERTICAL,
                className: V.header,
                children: [
                    (0, r.jsx)(A.Z, { element: X(t, "success") }),
                    (0, r.jsx)(I.Z, {
                        node: t,
                        isModeratorReport: ed,
                    }),
                    (0, r.jsx)(T.Z, { node: t }),
                ],
            }),
            (0, r.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: V.body,
                children: [
                    null != ei && (0, r.jsx)(R.Z, { element: ei }),
                    null != ec && (0, r.jsx)(D.Z, { element: ec }),
                    null != X(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, r.jsx)(N.Z, { message: n.record }),
                    null != X(t, "user_preview") && "user" === n.name ? (0, r.jsx)(L.Z, { user: n.record }) : null,
                    null != X(t, "widget_preview") && "widget" === n.name
                        ? (0, r.jsx)(G.Z, {
                              widget: n.widget,
                              userId: n.user_id,
                          })
                        : null,
                    null != X(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(C.Z, { guild: n.record }) : null,
                    null != X(t, "breadcrumbs") &&
                        (0, r.jsx)(m.Z, {
                            isModeratorReport: ed,
                            history: Y,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return U.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(w.Z, {
                            children: [
                                eT &&
                                    (0, r.jsx)(Z.Z, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: ej,
                                        reportId: en,
                                    }),
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
                                        channelId: ej,
                                        reportId: en,
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
                                        channelId: ej,
                                        reportId: en,
                                    }),
                                null != X(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, r.jsx)(f.Z, {
                                        message: n.record,
                                        reportId: en,
                                    }),
                                null != X(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, r.jsx)(S.Z, {
                                        guildId: n.record.id,
                                        reportId: en,
                                    }),
                                null != X(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(g.Z, {
                                        application: n.record,
                                        reportId: en,
                                    }),
                                null != X(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, r.jsx)(E.Z, {
                                        application: n.record,
                                        reportId: en,
                                    }),
                            ],
                        }),
                    null != X(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eZ &&
                        (0, r.jsx)(M.Z, {
                            settingsUpsells: eZ,
                            channelId: n.record.channel_id,
                            onModalClose: $,
                            reportId: en,
                            reportType: n,
                            reportSubType: J,
                        }),
                    null != X(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, r.jsx)(B.Z, { stageInstance: n.record }),
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
                    null != ea &&
                        (0, r.jsx)(P.Z, {
                            element: ea,
                            onChange: (e, t) => {
                                let n = H({}, eb);
                                e in eb ? delete n[e] : (n[e] = t), eh(n);
                            },
                            state: eb,
                        }),
                    q.includes(n.name) &&
                        null != es &&
                        es.length > 0 &&
                        (0, r.jsx)(b.Z, {
                            elements: es,
                            onChange: eO,
                            state: ex,
                        }),
                    q.includes(n.name) &&
                        null != el &&
                        el.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            elements: el,
                            onChange: eO,
                            state: ex,
                        }),
                    (0, r.jsxs)("div", {
                        className: V.listContainer,
                        children: [
                            (0, r.jsx)(p.Z, {
                                node: t,
                                onSelectChild: eI,
                            }),
                            null != eo && eo.length > 0 ? (0, r.jsx)(x.Z, { elements: eo }) : null,
                        ],
                    }),
                    (0, r.jsx)(h.Z, {
                        errorMessage: eg,
                        onClose: () => {
                            ef("");
                        },
                    }),
                ],
            }),
            (0, r.jsx)(d.Z, {
                button: t.button,
                submitting: eu,
                disableNext: eC,
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
                            e_(!0);
                            let n = ["", e.successNodeId];
                            ee(ey(n))
                                .then(() => {
                                    ef(""), eI(n);
                                })
                                .catch((e) => {
                                    var t;
                                    (null == (t = e.body) ? void 0 : t.code) === F.evJ.INVALID_FORM_BODY
                                        ? ef(W.intl.string(W.t.VjAAuL))
                                        : ed
                                          ? ef(W.intl.string(z.default.psKFdH))
                                          : ef(W.intl.string(W.t.h6D8V1));
                                })
                                .finally(() => {
                                    e_(!1);
                                });
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: Y.length > 0,
            }),
            (0, r.jsx)(o.olH, {
                "data-migration-pending": !0,
                className: V.closeButton,
                onClick: $,
            }),
        ],
    });
};
