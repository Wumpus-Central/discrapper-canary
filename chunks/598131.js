n.d(t, { A: () => et }), n(896048), n(492834);
var l = n(627968),
    r = n(64700),
    a = n(2110),
    i = n(397927),
    s = n(235986),
    o = n(834981),
    c = n(840387),
    d = n(319582),
    u = n(17372),
    m = n(369053),
    b = n(482578),
    p = n(248492),
    x = n(133134),
    g = n(374966),
    f = n(803957),
    v = n(905074),
    h = n(80718),
    j = n(676978),
    _ = n(657679),
    A = n(932482),
    y = n(404192),
    O = n(608523),
    S = n(717612),
    T = n(748113),
    N = n(458739),
    w = n(325272),
    k = n(688927),
    P = n(796071),
    C = n(132318),
    E = n(117056),
    I = n(66535),
    D = n(12613),
    M = n(842012),
    R = n(588684),
    L = n(316862),
    G = n(563218),
    U = n(617071),
    B = n(883471),
    H = n(943071),
    V = n(216033),
    F = n(908675),
    W = n(503985),
    z = n(145996),
    K = n(964448),
    Q = n(652215),
    Y = n(985018),
    $ = n(641131),
    q = n(212335);
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let Z = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function X(e, t) {
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
            onSelectChild: el,
            onModalClose: er,
            onSubmit: ea,
            multiSelect: ei,
            reportId: es,
            textInput: eo,
        } = e,
        ec = X(t, "checkbox"),
        ed = X(t, "text_line_resource"),
        eu = ee(t, "external_link"),
        em = ee(t, "free_text"),
        eb = ee(t, "dropdown"),
        ep = X(t, "text"),
        ex = X(t, "content_url_input"),
        eg = a.x.REPORT_TO_MOD.has(n.name),
        [ef, ev] = r.useState(!1),
        [eh, ej] = r.useState(!1),
        [e_, eA] = r.useState(""),
        [ey, eO] = r.useState(() => ({})),
        [eS, eT] = r.useState(() => ({})),
        eN = r.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        ew = r.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != em || null != eb || null != ex ? eS : void 0,
                multiSelect:
                    null != ec
                        ? {
                              name: ec.name,
                              state: ey,
                          }
                        : void 0,
            }),
            [t, em, eb, ex, ec, ey, eS],
        ),
        ek = r.useMemo(
            () =>
                (0, m.ks)(
                    {
                        freeTextElements: em,
                        dropdownElements: eb,
                        multiSelectElement: ec,
                        contentUrlInputElement: ex,
                    },
                    {
                        textInput: eS,
                        multiSelect: ey,
                    },
                ),
            [em, eb, ec, ex, eS, ey],
        ),
        eP = r.useCallback(
            (e, t) => {
                let n = J({}, ey);
                e in ey ? delete n[e] : (n[e] = t), eO(n);
            },
            [ey],
        ),
        eC = r.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    a = J({}, eS);
                (a[e] = {
                    value: t,
                    isValid: n,
                }),
                    null != l &&
                        (null != r && "" !== r
                            ? (a[l] = {
                                  value: r,
                                  isValid: n,
                              })
                            : delete a[l]),
                    eT(a);
            },
            [eS],
        ),
        eE = r.useCallback(
            (e) => {
                el(ew(e));
            },
            [el, ew],
        );
    r.useEffect(() => {
        null != ei && eO(ei), null != eo && eT(eo);
    }, [ei, eo]),
        r.useEffect(() => {
            if (null != ec) {
                let e = ec.data;
                if (null != e)
                    for (let [t, n, l, r] of e)
                        r &&
                            eO((e) =>
                                (function (e, t) {
                                    return (
                                        (t = null != t ? t : {}),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var l = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, l);
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
        }, [ec]);
    let eI = r.useCallback(
            (e) => {
                e === Q.t02.INVALID_FORM_BODY
                    ? eA(Y.intl.string(Y.t.VjAAuP))
                    : eg
                      ? eA(Y.intl.string($.default.psKFdJ))
                      : eA(Y.intl.string(Y.t.h6D8Vy));
            },
            [eg],
        ),
        eD = r.useCallback(() => {
            let t = ["", e.successNodeId];
            ea(ew(t))
                .then(() => {
                    eA(""), eE(t);
                })
                .catch((e) => {
                    var t;
                    eI(null == (t = e.body) ? void 0 : t.code);
                })
                .finally(() => {
                    ev(!1);
                });
        }, [e.successNodeId, ew, ea, eE, eI]),
        eM = r.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        er();
                        break;
                    case "next":
                        eE(["", e.target]);
                        break;
                    case "submit":
                        ev(!0), eD();
                }
            },
            [er, eE, eD],
        ),
        eR = r.useCallback(
            (e) => {
                "Enter" !== e.key || ek || ef || null == t.button || (e.preventDefault(), eM(t.button));
            },
            [ek, ef, t.button, eM],
        );
    r.useEffect(() => {
        t.is_auto_submit && !eh && (ej(!0), ea(ew(["", t.id])));
    }, [t.is_auto_submit, eh, ea, ew, t.id]);
    let eL = (0, d.fY)(et),
        eG = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eU = (0, c.Z)(),
        eB = (0, o.GR)(),
        eH = eU && eB.length > 0 && null != X(t, "share_with_parents"),
        eV = n.name === u.tY.MEDIA_TAKEDOWN;
    return (0, l.jsxs)("div", {
        className: q.kL,
        onKeyDown: eR,
        children: [
            (0, l.jsxs)(i.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.A.Direction.VERTICAL,
                className: q.wx,
                children: [
                    (0, l.jsx)(H.A, { element: X(t, "success") }),
                    (0, l.jsx)(k.A, {
                        node: t,
                        isModeratorReport: eg,
                        isTidaReport: eV,
                    }),
                    (0, l.jsx)(C.A, { node: t }),
                ],
            }),
            (0, l.jsxs)(i.$mQ, {
                "data-migration-pending": !0,
                className: q.rf,
                children: [
                    null != ed && (0, l.jsx)(F.A, { element: ed }),
                    null != ep && (0, l.jsx)(V.A, { element: ep }),
                    null != X(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(I.A, { message: n.record }),
                    null != X(t, "user_preview") && "user" === n.name ? (0, l.jsx)(W.A, { user: n.record }) : null,
                    null != X(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)(z.A, {
                              widget: n.widget,
                              userId: n.user_id,
                          })
                        : null,
                    null != X(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(N.A, { guild: n.record }) : null,
                    null != X(t, "breadcrumbs") &&
                        (0, l.jsx)(g.A, {
                            isModeratorReport: eg,
                            history: en,
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return K.T.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(R.A, {
                            children: [
                                eG &&
                                    (0, l.jsx)(P.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eN,
                                        reportId: es,
                                    }),
                                eH && (0, l.jsx)(U.A, { parents: eB }),
                                null != X(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, l.jsx)(x.A, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: eN,
                                        reportId: es,
                                        reportType: n,
                                    }),
                                !eG &&
                                    null != X(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(M.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eN,
                                        reportId: es,
                                    }),
                                null != X(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(j.A, {
                                        message: n.record,
                                        reportId: es,
                                    }),
                                null != X(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(E.A, {
                                        guildId: n.record.id,
                                        reportId: es,
                                    }),
                                null != X(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(h.A, {
                                        application: n.record,
                                        reportId: es,
                                    }),
                                null != X(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(L.A, {
                                        application: n.record,
                                        reportId: es,
                                    }),
                            ],
                        }),
                    null != X(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eL &&
                        (0, l.jsx)(G.A, {
                            settingsUpsells: eL,
                            channelId: n.record.channel_id,
                            onModalClose: er,
                            reportId: es,
                            reportType: n,
                            reportSubType: et,
                        }),
                    null != X(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, l.jsx)(B.A, { stageInstance: n.record }),
                    null != X(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, l.jsx)(w.A, { event: n.record }),
                    null != X(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, l.jsx)(S.A, { entry: n.record }),
                    null != X(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, l.jsx)(T.A, { entry: n.record }),
                    null != X(t, "app_preview") && "application" === n.name && (0, l.jsx)(p.A, { entry: n.record }),
                    null != ec &&
                        (0, l.jsx)(D.A, {
                            element: ec,
                            onChange: eP,
                            state: ey,
                        }),
                    Z.includes(n.name) &&
                        null != ex &&
                        (0, l.jsx)(v.A, {
                            element: ex,
                            onChange: eC,
                            state: eS,
                        }),
                    Z.includes(n.name) &&
                        null != eb &&
                        eb.length > 0 &&
                        (0, l.jsx)(_.A, {
                            elements: eb,
                            onChange: eC,
                            state: eS,
                        }),
                    Z.includes(n.name) &&
                        null != em &&
                        em.length > 0 &&
                        (0, l.jsx)(O.A, {
                            elements: em,
                            onChange: eC,
                            state: eS,
                        }),
                    ((null != t.children && t.children.length > 0) || (null != eu && eu.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: q.qI,
                            children: [
                                (0, l.jsx)(f.A, {
                                    node: t,
                                    onSelectChild: eE,
                                    nodeMap: e.nodeMap,
                                }),
                                null != eu && eu.length > 0 ? (0, l.jsx)(y.A, { elements: eu }) : null,
                            ],
                        }),
                    (0, l.jsx)(A.A, {
                        errorMessage: e_,
                        onClose: () => {
                            eA("");
                        },
                    }),
                ],
            }),
            (0, l.jsx)(b.A, {
                button: t.button,
                submitting: ef,
                disableNext: ek,
                isModeratorReport: eg,
                onClick: eM,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: en.length > 0,
            }),
            (0, l.jsx)(i.s_y, {
                "data-migration-pending": !0,
                className: q.b,
                onClick: er,
            }),
        ],
    });
};
