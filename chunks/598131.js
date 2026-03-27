n.d(t, { A: () => el });
var l = n(627968),
    a = n(64700),
    r = n(2110),
    i = n(158954),
    s = n(397927),
    d = n(235986),
    o = n(834981),
    c = n(840387),
    u = n(319582),
    _ = n(17372),
    m = n(369053),
    x = n(482578),
    p = n(248492),
    h = n(133134),
    g = n(374966),
    A = n(803957),
    v = n(905074),
    f = n(384826),
    b = n(80718),
    C = n(676978),
    T = n(657679),
    j = n(404192),
    N = n(608523),
    I = n(717612),
    S = n(748113),
    y = n(458739),
    E = n(325272),
    k = n(688927),
    w = n(796071),
    R = n(132318),
    M = n(985879),
    L = n(117056),
    O = n(66535),
    G = n(12613),
    D = n(842012),
    P = n(666580),
    B = n(588684),
    U = n(316862),
    H = n(563218),
    V = n(617071),
    F = n(883471),
    W = n(943071),
    z = n(216033),
    K = n(908675),
    $ = n(503985),
    Q = n(145996),
    q = n(964448),
    Y = n(652215),
    Z = n(985018),
    J = n(641131),
    X = n(687404);
let ee = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function et(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function en(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let el = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: el,
            history: ea,
            onSelectChild: er,
            onModalClose: ei,
            onSubmit: es,
            onNavigateToNode: ed,
            multiSelect: eo,
            reportId: ec,
            textInput: eu,
            initialErrorMessage: e_,
        } = e,
        em = et(t, "checkbox"),
        ex = et(t, "text_line_resource"),
        ep = en(t, "external_link"),
        eh = en(t, "free_text"),
        eg = en(t, "dropdown"),
        eA = et(t, "country_select"),
        ev = et(t, "inline_notice"),
        ef = en(t, "radio_group"),
        eb = et(t, "text"),
        eC = et(t, "content_url_input"),
        eT = r.x.REPORT_TO_MOD.has(n.name),
        ej = n.name === _.tY.MEDIA_TAKEDOWN,
        [eN, eI] = a.useState(!1),
        [eS, ey] = a.useState(!1),
        [eE, ek] = a.useState(e_ ?? ""),
        [ew, eR] = a.useState(() => ({})),
        [eM, eL] = a.useState(() => ({})),
        eO = a.useRef(null),
        eG = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eD = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != eh || null != eg || null != eA || ef.length > 0 || null != eC ? eM : void 0,
                multiSelect: null != em ? { name: em.name, state: ew } : void 0,
            }),
            [t, eh, eg, eA, ef, eC, em, ew, eM],
        ),
        eP = a.useMemo(
            () =>
                (0, m.ks)(
                    {
                        freeTextElements: eh,
                        dropdownElements: eg,
                        countrySelectElement: eA,
                        radioGroupElements: ef,
                        multiSelectElement: em,
                        contentUrlInputElement: eC,
                    },
                    { textInput: eM, multiSelect: ew },
                ),
            [eh, eg, eA, ef, em, eC, eM, ew],
        ),
        eB = a.useCallback(
            (e, t) => {
                let n = { ...ew };
                e in ew ? delete n[e] : (n[e] = t), eR(n);
            },
            [ew],
        ),
        eU = a.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    r = { ...eM };
                (r[e] = { value: t, isValid: n }),
                    null != l && (null != a && "" !== a ? (r[l] = { value: a, isValid: n }) : delete r[l]),
                    eL(r);
            },
            [eM],
        ),
        eH = a.useCallback(
            (e) => {
                er(eD(e));
            },
            [er, eD],
        );
    a.useEffect(() => {
        null != eo && eR(eo), null != eu && eL(eu);
    }, [eo, eu]),
        a.useEffect(() => {
            null != e_ && ek(e_);
        }, [e_]),
        a.useEffect(() => {
            if ("" !== eE) {
                let e = setTimeout(() => {
                    let e = eO.current?.parentElement;
                    null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
                }, 50);
                return () => clearTimeout(e);
            }
        }, [eE]),
        a.useEffect(() => {
            if (null != em) {
                let e = em.data;
                if (null != e) for (let [t, n, l, a] of e) a && eR((e) => ({ ...e, [t]: n }));
            }
        }, [em]);
    let eV = a.useCallback(
            (e) => {
                switch (e) {
                    case Y.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = Z.intl.string(Z.t["2EPoxE"]);
                        ek(e), ed?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case Y.t02.INVALID_SIGNATURE_MISMATCH:
                        ek(Z.intl.string(Z.t.kXrnQM));
                        break;
                    case Y.t02.INVALID_FORM_BODY:
                        ek(Z.intl.string(Z.t.VjAAuP));
                        break;
                    default:
                        eT ? ek(Z.intl.string(J.default.psKFdJ)) : ek(Z.intl.string(Z.t.h6D8Vy));
                }
            },
            [eT, ed],
        ),
        eF = a.useCallback(() => {
            let t = ["", e.successNodeId];
            es(eD(t))
                .then(() => {
                    ek(""), eH(t);
                })
                .catch((e) => {
                    eV(e.body?.code);
                })
                .finally(() => {
                    eI(!1);
                });
        }, [e.successNodeId, eD, es, eH, eV]),
        eW = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        ei();
                        break;
                    case "next":
                        eH(["", e.target]);
                        break;
                    case "submit":
                        eI(!0), eF();
                }
            },
            [ei, eH, eF],
        ),
        ez = a.useCallback(
            (e) => {
                "Enter" !== e.key || eP || eN || null == t.button || (e.preventDefault(), eW(t.button));
            },
            [eP, eN, t.button, eW],
        );
    a.useEffect(() => {
        t.is_auto_submit && !eS && (ey(!0), es(eD(["", t.id])));
    }, [t.is_auto_submit, eS, es, eD, t.id]);
    let eK = (0, u.fY)(el),
        e$ = null != et(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eQ = (0, c.Z)(),
        eq = (0, o.GR)(),
        eY = eQ && eq.length > 0 && null != et(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: X.kL,
        onKeyDown: ez,
        children: [
            (0, l.jsx)("div", {
                className: X.U1,
                children:
                    null != t.header && "" !== t.header
                        ? (0, l.jsx)(s.Heading, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: t.header,
                          })
                        : null,
            }),
            (0, l.jsx)("div", { className: X.b, children: (0, l.jsx)(i.JnF, { onClick: ei }) }),
            (0, l.jsxs)(s.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                direction: d.A.Direction.VERTICAL,
                className: X.wx,
                children: [
                    (0, l.jsx)(W.A, { element: et(t, "success") }),
                    (0, l.jsx)(k.A, { node: t, isModeratorReport: eT, isTidaReport: ej, hideTitle: !0 }),
                    (0, l.jsx)(R.A, { node: t }),
                ],
            }),
            (0, l.jsxs)(s.$mQ, {
                "data-migration-pending": !0,
                className: X.rf,
                children: [
                    null != ex && (0, l.jsx)(K.A, { element: ex }),
                    null != eb && (0, l.jsx)(z.A, { element: eb }),
                    null != et(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(O.A, { message: n.record }),
                    null != et(t, "user_preview") && "user" === n.name ? (0, l.jsx)($.A, { user: n.record }) : null,
                    null != et(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)(Q.A, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != et(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(y.A, { guild: n.record }) : null,
                    null != et(t, "breadcrumbs") && (0, l.jsx)(g.A, { isModeratorReport: eT, history: ea }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return q.T.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(B.A, {
                            children: [
                                e$ &&
                                    (0, l.jsx)(w.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: ec,
                                    }),
                                eY && (0, l.jsx)(V.A, { parents: eq }),
                                null != et(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, l.jsx)(h.A, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: eG,
                                        reportId: ec,
                                        reportType: n,
                                    }),
                                !e$ &&
                                    null != et(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(D.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: ec,
                                    }),
                                null != et(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(C.A, { message: n.record, reportId: ec }),
                                null != et(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(L.A, { guildId: n.record.id, reportId: ec }),
                                null != et(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(b.A, { application: n.record, reportId: ec }),
                                null != et(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(U.A, { application: n.record, reportId: ec }),
                            ],
                        }),
                    null != et(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eK &&
                        (0, l.jsx)(H.A, {
                            settingsUpsells: eK,
                            channelId: n.record.channel_id,
                            onModalClose: ei,
                            reportId: ec,
                            reportType: n,
                            reportSubType: el,
                        }),
                    null != et(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, l.jsx)(F.A, { stageInstance: n.record }),
                    null != et(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, l.jsx)(E.A, { event: n.record }),
                    null != et(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, l.jsx)(I.A, { entry: n.record }),
                    null != et(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, l.jsx)(S.A, { entry: n.record }),
                    null != et(t, "app_preview") && "application" === n.name && (0, l.jsx)(p.A, { entry: n.record }),
                    null != em && (0, l.jsx)(G.A, { element: em, onChange: eB, state: ew }),
                    ee.includes(n.name) && null != eC && (0, l.jsx)(v.A, { element: eC, onChange: eU, state: eM }),
                    ee.includes(n.name) &&
                        null != eg &&
                        eg.length > 0 &&
                        (0, l.jsx)("div", { children: (0, l.jsx)(T.A, { elements: eg, onChange: eU, state: eM }) }),
                    ef.map((e) => (0, l.jsx)(P.A, { element: e, onChange: eU, state: eM }, e.name)),
                    null != ev &&
                        (function (e, t, n) {
                            let { visible_when: l } = e.data;
                            if (null == l) return !0;
                            let a =
                                null != l.element_name
                                    ? t.elements.find((e) => {
                                          let { name: t } = e;
                                          return t === l.element_name;
                                      })
                                    : et(t, l.element_type);
                            return null != a && n?.[a.name]?.value === l.value;
                        })(ev, t, eM) &&
                        (0, l.jsx)(M.A, { element: ev }),
                    null != eA && (0, l.jsx)(f.A, { element: eA, onChange: eU, state: eM }),
                    ee.includes(n.name) &&
                        null != eh &&
                        eh.length > 0 &&
                        (0, l.jsx)(N.A, { elements: eh, onChange: eU, state: eM }),
                    ((null != t.children && t.children.length > 0) || (null != ep && ep.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: X.qI,
                            children: [
                                (0, l.jsx)(A.A, { node: t, onSelectChild: eH, nodeMap: e.nodeMap }),
                                null != ep && ep.length > 0 ? (0, l.jsx)(j.A, { elements: ep }) : null,
                            ],
                        }),
                    "" !== eE
                        ? (0, l.jsx)("div", {
                              ref: eO,
                              children: (0, l.jsx)(s.wx6, { type: "critical", children: eE }),
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(x.A, {
                button: t.button,
                submitting: eN,
                disableNext: eP,
                isModeratorReport: eT,
                onClick: eW,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: ea.length > 0,
                className: X.qr,
            }),
        ],
    });
};
