n.d(t, { A: () => el });
var l = n(627968),
    a = n(64700),
    i = n(2110),
    r = n(158954),
    s = n(397927),
    d = n(235986),
    o = n(834981),
    c = n(840387),
    u = n(319582),
    _ = n(17372),
    m = n(369053),
    p = n(482578),
    g = n(26111),
    x = n(133134),
    h = n(374966),
    A = n(803957),
    v = n(905074),
    b = n(384826),
    f = n(80718),
    T = n(676978),
    E = n(657679),
    S = n(404192),
    I = n(608523),
    C = n(717612),
    N = n(748113),
    y = n(458739),
    j = n(325272),
    k = n(688927),
    R = n(796071),
    M = n(132318),
    O = n(985879),
    D = n(117056),
    L = n(66535),
    G = n(12613),
    U = n(842012),
    w = n(666580),
    P = n(588684),
    B = n(316862),
    H = n(563218),
    F = n(617071),
    V = n(883471),
    W = n(943071),
    z = n(216033),
    K = n(908675),
    $ = n(503985),
    Q = n(145996),
    Y = n(964448),
    q = n(652215),
    Z = n(985018),
    J = n(733045),
    X = n(859117);
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
            reportId: ec,
            textInput: eu,
            initialErrorMessage: e_,
        } = e,
        em = et(t, "checkbox"),
        ep = et(t, "text_line_resource"),
        eg = en(t, "external_link"),
        ex = en(t, "free_text"),
        eh = en(t, "dropdown"),
        eA = et(t, "country_select"),
        ev = et(t, "inline_notice"),
        eb = en(t, "radio_group"),
        ef = et(t, "text"),
        eT = et(t, "content_url_input"),
        eE = i.x.REPORT_TO_MOD.has(n.name),
        eS = n.name === _.tY.MEDIA_TAKEDOWN,
        [eI, eC] = a.useState(!1),
        [eN, ey] = a.useState(!1),
        [ej, ek] = a.useState(e_ ?? ""),
        [eR, eM] = a.useState(() => ({})),
        [eO, eD] = a.useState(() => ({})),
        eL = a.useRef(null),
        eG = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eU = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != ex || null != eh || null != eA || eb.length > 0 || null != eT ? eO : void 0,
                multiSelect: null != em ? { name: em.name, state: eR } : void 0,
            }),
            [t, ex, eh, eA, eb, eT, em, eR, eO],
        ),
        ew = a.useMemo(
            () =>
                (0, m.ks)(
                    {
                        freeTextElements: ex,
                        dropdownElements: eh,
                        countrySelectElement: eA,
                        radioGroupElements: eb,
                        multiSelectElement: em,
                        contentUrlInputElement: eT,
                    },
                    { textInput: eO, multiSelect: eR },
                ),
            [ex, eh, eA, eb, em, eT, eO, eR],
        ),
        eP = a.useCallback(
            (e, t) => {
                let n = { ...eR };
                e in eR ? delete n[e] : (n[e] = t), eM(n);
            },
            [eR],
        ),
        eB = a.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = { ...eO };
                (i[e] = { value: t, isValid: n }),
                    null != l && (null != a && "" !== a ? (i[l] = { value: a, isValid: n }) : delete i[l]),
                    eD(i);
            },
            [eO],
        ),
        eH = a.useCallback(
            (e) => {
                ei(eU(e));
            },
            [ei, eU],
        );
    a.useEffect(() => {
        null != eo && eM(eo), null != eu && eD(eu);
    }, [eo, eu]),
        a.useEffect(() => {
            null != e_ && ek(e_);
        }, [e_]),
        a.useEffect(() => {
            if ("" !== ej) {
                let e = setTimeout(() => {
                    let e = eL.current?.parentElement;
                    null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
                }, 50);
                return () => clearTimeout(e);
            }
        }, [ej]),
        a.useEffect(() => {
            if (null != em) {
                let e = em.data;
                if (null != e) for (let [t, n, l, a] of e) a && eM((e) => ({ ...e, [t]: n }));
            }
        }, [em]);
    let eF = a.useCallback(
            (e) => {
                switch (e) {
                    case q.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = Z.intl.string(Z.t["2EPoxE"]);
                        ek(e), ed?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case q.t02.INVALID_SIGNATURE_MISMATCH:
                        ek(Z.intl.string(Z.t.kXrnQM));
                        break;
                    case q.t02.INVALID_FORM_BODY:
                        ek(Z.intl.string(Z.t.VjAAuP));
                        break;
                    default:
                        eE ? ek(Z.intl.string(J.default.psKFdJ)) : ek(Z.intl.string(Z.t.h6D8Vy));
                }
            },
            [eE, ed],
        ),
        eV = a.useCallback(() => {
            let t = ["", e.successNodeId];
            es(eU(t))
                .then(() => {
                    ek(""), eH(t);
                })
                .catch((e) => {
                    eF(e.body?.code);
                })
                .finally(() => {
                    eC(!1);
                });
        }, [e.successNodeId, eU, es, eH, eF]),
        eW = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        er();
                        break;
                    case "next":
                        eH(["", e.target]);
                        break;
                    case "submit":
                        eC(!0), eV();
                }
            },
            [er, eH, eV],
        ),
        ez = a.useCallback(
            (e) => {
                "Enter" !== e.key || ew || eI || null == t.button || (e.preventDefault(), eW(t.button));
            },
            [ew, eI, t.button, eW],
        );
    a.useEffect(() => {
        t.is_auto_submit && !eN && (ey(!0), es(eU(["", t.id])));
    }, [t.is_auto_submit, eN, es, eU, t.id]);
    let eK = (0, u.fY)(el),
        e$ = null != et(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eQ = (0, c.Z)(),
        eY = (0, o.GR)(),
        eq = eQ && eY.length > 0 && null != et(t, "share_with_parents");
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
            (0, l.jsx)("div", { className: X.b, children: (0, l.jsx)(r.JnF, { onClick: er }) }),
            (0, l.jsxs)(s.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                direction: d.A.Direction.VERTICAL,
                className: X.wx,
                children: [
                    (0, l.jsx)(W.A, { element: et(t, "success") }),
                    (0, l.jsx)(k.A, { node: t, isModeratorReport: eE, isTidaReport: eS, hideTitle: !0 }),
                    (0, l.jsx)(M.A, { node: t }),
                ],
            }),
            (0, l.jsxs)(s.$mQ, {
                "data-migration-pending": !0,
                className: X.rf,
                children: [
                    null != ep && (0, l.jsx)(K.A, { element: ep }),
                    null != ef && (0, l.jsx)(z.A, { element: ef }),
                    null != et(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(L.A, { message: n.record }),
                    null != et(t, "user_preview") && "user" === n.name ? (0, l.jsx)($.A, { user: n.record }) : null,
                    null != et(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)(Q.A, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != et(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(y.A, { guild: n.record }) : null,
                    null != et(t, "breadcrumbs") && (0, l.jsx)(h.A, { isModeratorReport: eE, history: ea }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return Y.T.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(P.A, {
                            children: [
                                e$ &&
                                    (0, l.jsx)(R.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: ec,
                                    }),
                                eq && (0, l.jsx)(F.A, { parents: eY }),
                                null != et(t, "block_users") &&
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
                                    (0, l.jsx)(U.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: ec,
                                    }),
                                null != et(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(T.A, { message: n.record, reportId: ec }),
                                null != et(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(D.A, { guildId: n.record.id, reportId: ec }),
                                null != et(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(f.A, { application: n.record, reportId: ec }),
                                null != et(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(B.A, { application: n.record, reportId: ec }),
                            ],
                        }),
                    null != et(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eK &&
                        (0, l.jsx)(H.A, {
                            settingsUpsells: eK,
                            channelId: n.record.channel_id,
                            onModalClose: er,
                            reportId: ec,
                            reportType: n,
                            reportSubType: el,
                        }),
                    null != et(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, l.jsx)(V.A, { stageInstance: n.record }),
                    null != et(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, l.jsx)(j.A, { event: n.record }),
                    null != et(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, l.jsx)(C.A, { entry: n.record }),
                    null != et(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, l.jsx)(N.A, { entry: n.record }),
                    null != et(t, "app_preview") && "application" === n.name && (0, l.jsx)(g.A, { entry: n.record }),
                    null != em && (0, l.jsx)(G.A, { element: em, onChange: eP, state: eR }),
                    ee.includes(n.name) && null != eT && (0, l.jsx)(v.A, { element: eT, onChange: eB, state: eO }),
                    ee.includes(n.name) &&
                        null != eh &&
                        eh.length > 0 &&
                        (0, l.jsx)("div", { children: (0, l.jsx)(E.A, { elements: eh, onChange: eB, state: eO }) }),
                    eb.map((e) => (0, l.jsx)(w.A, { element: e, onChange: eB, state: eO }, e.name)),
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
                        })(ev, t, eO) &&
                        (0, l.jsx)(O.A, { element: ev }),
                    null != eA && (0, l.jsx)(b.A, { element: eA, onChange: eB, state: eO }),
                    ee.includes(n.name) &&
                        null != ex &&
                        ex.length > 0 &&
                        (0, l.jsx)(I.A, { elements: ex, onChange: eB, state: eO }),
                    ((null != t.children && t.children.length > 0) || (null != eg && eg.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: X.qI,
                            children: [
                                (0, l.jsx)(A.A, { node: t, onSelectChild: eH, nodeMap: e.nodeMap }),
                                null != eg && eg.length > 0 ? (0, l.jsx)(S.A, { elements: eg }) : null,
                            ],
                        }),
                    "" !== ej
                        ? (0, l.jsx)("div", {
                              ref: eL,
                              children: (0, l.jsx)(s.wx6, { type: "critical", children: ej }),
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(p.A, {
                button: t.button,
                submitting: eI,
                disableNext: ew,
                isModeratorReport: eE,
                onClick: eW,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: ea.length > 0,
                className: X.qr,
            }),
        ],
    });
};
