n.d(t, { A: () => ei });
var l = n(627968),
    a = n(64700),
    i = n(2110),
    r = n(815021),
    s = n(534514),
    d = n(935462),
    o = n(683071),
    c = n(235986),
    u = n(834981),
    _ = n(840387),
    m = n(319582),
    h = n(17372),
    g = n(369053),
    p = n(482578),
    x = n(248492),
    A = n(133134),
    f = n(374966),
    v = n(803957),
    b = n(905074),
    N = n(384826),
    E = n(80718),
    S = n(676978),
    T = n(657679),
    j = n(404192),
    C = n(608523),
    I = n(717612),
    y = n(748113),
    k = n(458739),
    w = n(325272),
    L = n(688927),
    D = n(796071),
    R = n(132318),
    M = n(985879),
    O = n(117056),
    P = n(66535),
    G = n(12613),
    U = n(842012),
    B = n(666580),
    H = n(588684),
    V = n(316862),
    F = n(563218),
    W = n(617071),
    z = n(883471),
    Q = n(943071),
    Y = n(216033),
    q = n(908675),
    K = n(503985),
    $ = n(145996),
    Z = n(964448),
    X = n(652215),
    J = n(985018),
    ee = n(221314),
    et = n(777148);
let en = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function el(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function ea(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let ei = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: ei,
            history: er,
            onSelectChild: es,
            onModalClose: ed,
            onSubmit: eo,
            onNavigateToNode: ec,
            multiSelect: eu,
            reportId: e_,
            textInput: em,
            initialErrorMessage: eh,
        } = e,
        eg = el(t, "checkbox"),
        ep = el(t, "text_line_resource"),
        ex = ea(t, "external_link"),
        eA = ea(t, "free_text"),
        ef = ea(t, "dropdown"),
        ev = el(t, "country_select"),
        eb = el(t, "inline_notice"),
        eN = ea(t, "radio_group"),
        eE = el(t, "text"),
        eS = el(t, "content_url_input"),
        eT = i.x.REPORT_TO_MOD.has(n.name),
        ej = n.name === h.tY.MEDIA_TAKEDOWN,
        [eC, eI] = a.useState(!1),
        [ey, ek] = a.useState(!1),
        [ew, eL] = a.useState(eh ?? ""),
        [eD, eR] = a.useState(() => ({})),
        [eM, eO] = a.useState(() => ({})),
        eP = a.useRef(null),
        eG = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eU = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != eA || null != ef || null != ev || eN.length > 0 || null != eS ? eM : void 0,
                multiSelect: null != eg ? { name: eg.name, state: eD } : void 0,
            }),
            [t, eA, ef, ev, eN, eS, eg, eD, eM],
        ),
        eB = a.useMemo(
            () =>
                (0, g.ks)(
                    {
                        freeTextElements: eA,
                        dropdownElements: ef,
                        countrySelectElement: ev,
                        radioGroupElements: eN,
                        multiSelectElement: eg,
                        contentUrlInputElement: eS,
                    },
                    { textInput: eM, multiSelect: eD },
                ),
            [eA, ef, ev, eN, eg, eS, eM, eD],
        ),
        eH = a.useCallback(
            (e, t) => {
                let n = { ...eD };
                e in eD ? delete n[e] : (n[e] = t), eR(n);
            },
            [eD],
        ),
        eV = a.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = { ...eM };
                (i[e] = { value: t, isValid: n }),
                    null != l && (null != a && "" !== a ? (i[l] = { value: a, isValid: n }) : delete i[l]),
                    eO(i);
            },
            [eM],
        ),
        eF = a.useCallback(
            (e) => {
                es(eU(e));
            },
            [es, eU],
        );
    a.useEffect(() => {
        null != eu && eR(eu), null != em && eO(em);
    }, [eu, em]),
        a.useEffect(() => {
            null != eh && eL(eh);
        }, [eh]),
        a.useEffect(() => {
            if ("" !== ew) {
                let e = setTimeout(() => {
                    let e = eP.current?.parentElement;
                    null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
                }, 50);
                return () => clearTimeout(e);
            }
        }, [ew]),
        a.useEffect(() => {
            if (null != eg) {
                let e = eg.data;
                if (null != e) for (let [t, n, l, a] of e) a && eR((e) => ({ ...e, [t]: n }));
            }
        }, [eg]);
    let eW = a.useCallback(
            (e) => {
                switch (e) {
                    case X.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = J.intl.string(J.t["2EPoxE"]);
                        eL(e), ec?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case X.t02.INVALID_SIGNATURE_MISMATCH:
                        eL(J.intl.string(J.t.kXrnQM));
                        break;
                    case X.t02.INVALID_FORM_BODY:
                        eL(J.intl.string(J.t.VjAAuP));
                        break;
                    default:
                        eT ? eL(J.intl.string(ee.default.psKFdJ)) : eL(J.intl.string(J.t.h6D8Vy));
                }
            },
            [eT, ec],
        ),
        ez = a.useCallback(() => {
            let t = ["", e.successNodeId];
            eo(eU(t))
                .then(() => {
                    eL(""), eF(t);
                })
                .catch((e) => {
                    eW(e.body?.code);
                })
                .finally(() => {
                    eI(!1);
                });
        }, [e.successNodeId, eU, eo, eF, eW]),
        eQ = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        ed();
                        break;
                    case "next":
                        eF(["", e.target]);
                        break;
                    case "submit":
                        eI(!0), ez();
                }
            },
            [ed, eF, ez],
        ),
        eY = a.useCallback(
            (e) => {
                if ("Enter" === e.key && !eB && !eC && null != t.button) {
                    let n = e.target;
                    "BUTTON" !== n.tagName &&
                        "A" !== n.tagName &&
                        "button" !== n.getAttribute("role") &&
                        (e.preventDefault(), eQ(t.button));
                }
            },
            [eB, eC, t.button, eQ],
        );
    a.useEffect(() => {
        t.is_auto_submit && !ey && (ek(!0), eo(eU(["", t.id])));
    }, [t.is_auto_submit, ey, eo, eU, t.id]);
    let eq = (0, m.fY)(ei),
        eK = null != el(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        e$ = (0, _.Z)(),
        eZ = (0, u.GR)(),
        eX = e$ && eZ.length > 0 && null != el(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: et.kL,
        onKeyDown: eY,
        children: [
            (0, l.jsx)("div", {
                className: et.U1,
                children:
                    null != t.header && "" !== t.header
                        ? (0, l.jsx)(s.D, { variant: "heading-lg/semibold", color: "text-strong", children: t.header })
                        : null,
            }),
            (0, l.jsx)("div", { className: et.b, children: (0, l.jsx)(r.J, { onClick: ed }) }),
            (0, l.jsxs)(d.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                direction: c.A.Direction.VERTICAL,
                className: et.wx,
                children: [
                    (0, l.jsx)(Q.A, { element: el(t, "success") }),
                    (0, l.jsx)(L.A, { node: t, isModeratorReport: eT, isTidaReport: ej, hideTitle: !0 }),
                    (0, l.jsx)(R.A, { node: t }),
                ],
            }),
            (0, l.jsxs)(d.$m, {
                "data-migration-pending": !0,
                className: et.rf,
                children: [
                    null != ep && (0, l.jsx)(q.A, { element: ep }),
                    null != eE && (0, l.jsx)(Y.A, { element: eE }),
                    null != el(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(P.A, { message: n.record }),
                    null != el(t, "user_preview") && "user" === n.name ? (0, l.jsx)(K.A, { user: n.record }) : null,
                    null != el(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)($.A, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != el(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(k.A, { guild: n.record }) : null,
                    null != el(t, "breadcrumbs") && (0, l.jsx)(f.A, { isModeratorReport: eT, history: er }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return Z.T.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(H.A, {
                            children: [
                                eK &&
                                    (0, l.jsx)(D.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: e_,
                                    }),
                                eX && (0, l.jsx)(W.A, { parents: eZ }),
                                null != el(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, l.jsx)(A.A, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: eG,
                                        reportId: e_,
                                        reportType: n,
                                    }),
                                !eK &&
                                    null != el(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(U.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: e_,
                                    }),
                                null != el(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(S.A, { message: n.record, reportId: e_ }),
                                null != el(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(O.A, { guildId: n.record.id, reportId: e_ }),
                                null != el(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(E.A, { application: n.record, reportId: e_ }),
                                null != el(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(V.A, { application: n.record, reportId: e_ }),
                            ],
                        }),
                    null != el(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eq &&
                        (0, l.jsx)(F.A, {
                            settingsUpsells: eq,
                            channelId: n.record.channel_id,
                            onModalClose: ed,
                            reportId: e_,
                            reportType: n,
                            reportSubType: ei,
                        }),
                    null != el(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, l.jsx)(z.A, { stageInstance: n.record }),
                    null != el(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, l.jsx)(w.A, { event: n.record }),
                    null != el(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, l.jsx)(I.A, { entry: n.record }),
                    null != el(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, l.jsx)(y.A, { entry: n.record }),
                    null != el(t, "app_preview") && "application" === n.name && (0, l.jsx)(x.A, { entry: n.record }),
                    null != eg && (0, l.jsx)(G.A, { element: eg, onChange: eH, state: eD }),
                    en.includes(n.name) && null != eS && (0, l.jsx)(b.A, { element: eS, onChange: eV, state: eM }),
                    en.includes(n.name) &&
                        null != ef &&
                        ef.length > 0 &&
                        (0, l.jsx)("div", { children: (0, l.jsx)(T.A, { elements: ef, onChange: eV, state: eM }) }),
                    eN.map((e) => (0, l.jsx)(B.A, { element: e, onChange: eV, state: eM }, e.name)),
                    null != eb &&
                        (function (e, t, n) {
                            let { visible_when: l } = e.data;
                            if (null == l) return !0;
                            let a =
                                null != l.element_name
                                    ? t.elements.find((e) => {
                                          let { name: t } = e;
                                          return t === l.element_name;
                                      })
                                    : el(t, l.element_type);
                            return null != a && n?.[a.name]?.value === l.value;
                        })(eb, t, eM) &&
                        (0, l.jsx)(M.A, { element: eb }),
                    null != ev && (0, l.jsx)(N.A, { element: ev, onChange: eV, state: eM }),
                    en.includes(n.name) &&
                        null != eA &&
                        eA.length > 0 &&
                        (0, l.jsx)(C.A, { elements: eA, onChange: eV, state: eM }),
                    ((null != t.children && t.children.length > 0) || (null != ex && ex.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: et.qI,
                            children: [
                                (0, l.jsx)(v.A, { node: t, onSelectChild: eF, nodeMap: e.nodeMap }),
                                null != ex && ex.length > 0 ? (0, l.jsx)(j.A, { elements: ex }) : null,
                            ],
                        }),
                    "" !== ew
                        ? (0, l.jsx)("div", { ref: eP, children: (0, l.jsx)(o.w, { type: "critical", children: ew }) })
                        : null,
                ],
            }),
            (0, l.jsx)(p.A, {
                button: t.button,
                submitting: eC,
                disableNext: eB,
                isModeratorReport: eT,
                onClick: eQ,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: er.length > 0,
                className: et.qr,
            }),
        ],
    });
};
