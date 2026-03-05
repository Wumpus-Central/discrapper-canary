n.d(t, { A: () => el });
var l = n(627968),
    a = n(64700),
    i = n(2110),
    r = n(397927),
    s = n(235986),
    d = n(834981),
    o = n(840387),
    u = n(319582),
    c = n(17372),
    _ = n(369053),
    m = n(482578),
    x = n(248492),
    p = n(133134),
    g = n(374966),
    h = n(803957),
    A = n(905074),
    b = n(384826),
    v = n(80718),
    f = n(676978),
    T = n(657679),
    C = n(932482),
    j = n(404192),
    I = n(608523),
    N = n(717612),
    S = n(748113),
    y = n(458739),
    k = n(325272),
    E = n(688927),
    M = n(796071),
    R = n(132318),
    O = n(985879),
    w = n(117056),
    G = n(66535),
    L = n(12613),
    D = n(842012),
    U = n(666580),
    B = n(588684),
    P = n(316862),
    H = n(563218),
    V = n(617071),
    F = n(883471),
    W = n(943071),
    z = n(216033),
    K = n(908675),
    $ = n(503985),
    Q = n(145996),
    Y = n(964448),
    q = n(652215),
    Z = n(985018),
    J = n(641131),
    X = n(212335);
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
            onSelectChild: ei,
            onModalClose: er,
            onSubmit: es,
            onNavigateToNode: ed,
            multiSelect: eo,
            reportId: eu,
            textInput: ec,
            initialErrorMessage: e_,
        } = e,
        em = et(t, "checkbox"),
        ex = et(t, "text_line_resource"),
        ep = en(t, "external_link"),
        eg = en(t, "free_text"),
        eh = en(t, "dropdown"),
        eA = et(t, "country_select"),
        eb = et(t, "inline_notice"),
        ev = et(t, "radio_group"),
        ef = et(t, "text"),
        eT = et(t, "content_url_input"),
        eC = i.x.REPORT_TO_MOD.has(n.name),
        ej = n.name === c.tY.MEDIA_TAKEDOWN,
        [eI, eN] = a.useState(!1),
        [eS, ey] = a.useState(!1),
        [ek, eE] = a.useState(e_ ?? ""),
        [eM, eR] = a.useState(() => ({})),
        [eO, ew] = a.useState(() => ({})),
        eG = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eL = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != eg || null != eh || null != eA || null != ev || null != eT ? eO : void 0,
                multiSelect: null != em ? { name: em.name, state: eM } : void 0,
            }),
            [t, eg, eh, eA, ev, eT, em, eM, eO],
        ),
        eD = a.useMemo(
            () =>
                (0, _.ks)(
                    {
                        freeTextElements: eg,
                        dropdownElements: eh,
                        countrySelectElement: eA,
                        radioGroupElement: ev,
                        multiSelectElement: em,
                        contentUrlInputElement: eT,
                    },
                    { textInput: eO, multiSelect: eM },
                ),
            [eg, eh, eA, ev, em, eT, eO, eM],
        ),
        eU = a.useCallback(
            (e, t) => {
                let n = { ...eM };
                e in eM ? delete n[e] : (n[e] = t), eR(n);
            },
            [eM],
        ),
        eB = a.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = { ...eO };
                (i[e] = { value: t, isValid: n }),
                    null != l && (null != a && "" !== a ? (i[l] = { value: a, isValid: n }) : delete i[l]),
                    ew(i);
            },
            [eO],
        ),
        eP = a.useCallback(
            (e) => {
                ei(eL(e));
            },
            [ei, eL],
        );
    a.useEffect(() => {
        null != eo && eR(eo), null != ec && ew(ec);
    }, [eo, ec]),
        a.useEffect(() => {
            null != e_ && eE(e_);
        }, [e_]),
        a.useEffect(() => {
            if (null != em) {
                let e = em.data;
                if (null != e) for (let [t, n, l, a] of e) a && eR((e) => ({ ...e, [t]: n }));
            }
        }, [em]);
    let eH = a.useCallback(
            (e) => {
                switch (e) {
                    case q.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = Z.intl.string(Z.t["2EPoxE"]);
                        eE(e), ed?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case q.t02.INVALID_SIGNATURE_MISMATCH:
                        eE(Z.intl.string(Z.t.kXrnQM));
                        break;
                    case q.t02.INVALID_FORM_BODY:
                        eE(Z.intl.string(Z.t.VjAAuP));
                        break;
                    default:
                        eC ? eE(Z.intl.string(J.default.psKFdJ)) : eE(Z.intl.string(Z.t.h6D8Vy));
                }
            },
            [eC, ed],
        ),
        eV = a.useCallback(() => {
            let t = ["", e.successNodeId];
            es(eL(t))
                .then(() => {
                    eE(""), eP(t);
                })
                .catch((e) => {
                    eH(e.body?.code);
                })
                .finally(() => {
                    eN(!1);
                });
        }, [e.successNodeId, eL, es, eP, eH]),
        eF = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        er();
                        break;
                    case "next":
                        eP(["", e.target]);
                        break;
                    case "submit":
                        eN(!0), eV();
                }
            },
            [er, eP, eV],
        ),
        eW = a.useCallback(
            (e) => {
                "Enter" !== e.key || eD || eI || null == t.button || (e.preventDefault(), eF(t.button));
            },
            [eD, eI, t.button, eF],
        );
    a.useEffect(() => {
        t.is_auto_submit && !eS && (ey(!0), es(eL(["", t.id])));
    }, [t.is_auto_submit, eS, es, eL, t.id]);
    let ez = (0, u.fY)(el),
        eK = null != et(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        e$ = (0, o.Z)(),
        eQ = (0, d.GR)(),
        eY = e$ && eQ.length > 0 && null != et(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: X.kL,
        onKeyDown: eW,
        children: [
            (0, l.jsxs)("div", {
                className: X.U1,
                children: [
                    null != t.header && "" !== t.header
                        ? (0, l.jsx)(r.Heading, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: t.header,
                          })
                        : null,
                    (0, l.jsx)(r.s_y, { "data-migration-pending": !0, className: X.b, onClick: er }),
                ],
            }),
            (0, l.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.A.Direction.VERTICAL,
                className: X.wx,
                children: [
                    (0, l.jsx)(W.A, { element: et(t, "success") }),
                    (0, l.jsx)(E.A, { node: t, isModeratorReport: eC, isTidaReport: ej, hideTitle: !0 }),
                    (0, l.jsx)(R.A, { node: t }),
                ],
            }),
            (0, l.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: X.rf,
                children: [
                    null != ex && (0, l.jsx)(K.A, { element: ex }),
                    null != ef && (0, l.jsx)(z.A, { element: ef }),
                    null != et(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(G.A, { message: n.record }),
                    null != et(t, "user_preview") && "user" === n.name ? (0, l.jsx)($.A, { user: n.record }) : null,
                    null != et(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)(Q.A, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != et(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(y.A, { guild: n.record }) : null,
                    null != et(t, "breadcrumbs") && (0, l.jsx)(g.A, { isModeratorReport: eC, history: ea }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return Y.T.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(B.A, {
                            children: [
                                eK &&
                                    (0, l.jsx)(M.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: eu,
                                    }),
                                eY && (0, l.jsx)(V.A, { parents: eQ }),
                                null != et(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, l.jsx)(p.A, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: eG,
                                        reportId: eu,
                                        reportType: n,
                                    }),
                                !eK &&
                                    null != et(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(D.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: eu,
                                    }),
                                null != et(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(f.A, { message: n.record, reportId: eu }),
                                null != et(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(w.A, { guildId: n.record.id, reportId: eu }),
                                null != et(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(v.A, { application: n.record, reportId: eu }),
                                null != et(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(P.A, { application: n.record, reportId: eu }),
                            ],
                        }),
                    null != et(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != ez &&
                        (0, l.jsx)(H.A, {
                            settingsUpsells: ez,
                            channelId: n.record.channel_id,
                            onModalClose: er,
                            reportId: eu,
                            reportType: n,
                            reportSubType: el,
                        }),
                    null != et(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, l.jsx)(F.A, { stageInstance: n.record }),
                    null != et(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, l.jsx)(k.A, { event: n.record }),
                    null != et(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, l.jsx)(N.A, { entry: n.record }),
                    null != et(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, l.jsx)(S.A, { entry: n.record }),
                    null != et(t, "app_preview") && "application" === n.name && (0, l.jsx)(x.A, { entry: n.record }),
                    null != em &&
                        (0, l.jsx)(L.A, {
                            element: em,
                            title: ee.includes(n.name) ? Z.intl.string(Z.t.fuKUcA) : void 0,
                            onChange: eU,
                            state: eM,
                        }),
                    ee.includes(n.name) && null != eT && (0, l.jsx)(A.A, { element: eT, onChange: eB, state: eO }),
                    ee.includes(n.name) &&
                        null != eh &&
                        eh.length > 0 &&
                        (0, l.jsx)("div", {
                            className: null != em ? X.yF : void 0,
                            children: (0, l.jsx)(T.A, { elements: eh, onChange: eB, state: eO }),
                        }),
                    null != ev &&
                        (0, l.jsx)("div", {
                            className: null != em ? X.yF : void 0,
                            children: (0, l.jsx)(U.A, { element: ev, onChange: eB, state: eO }),
                        }),
                    null != eb &&
                        (function (e, t, n) {
                            let { visible_when: l } = e.data;
                            if (null == l) return !0;
                            let a = et(t, l.element_type);
                            return null != a && n?.[a.name]?.value === l.value;
                        })(eb, t, eO) &&
                        (0, l.jsx)(O.A, { element: eb }),
                    null != eA && (0, l.jsx)(b.A, { element: eA, onChange: eB, state: eO }),
                    ee.includes(n.name) &&
                        null != eg &&
                        eg.length > 0 &&
                        (0, l.jsx)(I.A, { elements: eg, onChange: eB, state: eO }),
                    ((null != t.children && t.children.length > 0) || (null != ep && ep.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: X.qI,
                            children: [
                                (0, l.jsx)(h.A, { node: t, onSelectChild: eP, nodeMap: e.nodeMap }),
                                null != ep && ep.length > 0 ? (0, l.jsx)(j.A, { elements: ep }) : null,
                            ],
                        }),
                    (0, l.jsx)(C.A, {
                        errorMessage: ek,
                        onClose: () => {
                            eE("");
                        },
                    }),
                ],
            }),
            (0, l.jsx)(m.A, {
                button: t.button,
                submitting: eI,
                disableNext: eD,
                isModeratorReport: eC,
                onClick: eF,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: ea.length > 0,
            }),
        ],
    });
};
