n.d(t, { A: () => en });
var l = n(627968),
    a = n(64700),
    i = n(2110),
    r = n(397927),
    s = n(235986),
    o = n(834981),
    d = n(840387),
    c = n(319582),
    u = n(17372),
    _ = n(369053),
    m = n(482578),
    x = n(248492),
    p = n(133134),
    g = n(374966),
    A = n(803957),
    h = n(905074),
    b = n(384826),
    v = n(80718),
    f = n(676978),
    C = n(657679),
    T = n(932482),
    I = n(404192),
    j = n(608523),
    S = n(717612),
    N = n(748113),
    k = n(458739),
    y = n(325272),
    E = n(688927),
    M = n(796071),
    O = n(132318),
    R = n(985879),
    w = n(117056),
    G = n(66535),
    L = n(12613),
    D = n(842012),
    U = n(588684),
    B = n(316862),
    P = n(563218),
    H = n(617071),
    V = n(883471),
    F = n(943071),
    W = n(216033),
    z = n(908675),
    K = n(503985),
    $ = n(145996),
    Q = n(964448),
    Y = n(652215),
    q = n(985018),
    Z = n(641131),
    J = n(212335);
let X = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function ee(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function et(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let en = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: en,
            history: el,
            onSelectChild: ea,
            onModalClose: ei,
            onSubmit: er,
            onNavigateToNode: es,
            multiSelect: eo,
            reportId: ed,
            textInput: ec,
            initialErrorMessage: eu,
        } = e,
        e_ = ee(t, "checkbox"),
        em = ee(t, "text_line_resource"),
        ex = et(t, "external_link"),
        ep = et(t, "free_text"),
        eg = et(t, "dropdown"),
        eA = ee(t, "country_select"),
        eh = ee(t, "inline_notice"),
        eb = ee(t, "text"),
        ev = ee(t, "content_url_input"),
        ef = i.x.REPORT_TO_MOD.has(n.name),
        eC = n.name === u.tY.MEDIA_TAKEDOWN,
        [eT, eI] = a.useState(!1),
        [ej, eS] = a.useState(!1),
        [eN, ek] = a.useState(eu ?? ""),
        [ey, eE] = a.useState(() => ({})),
        [eM, eO] = a.useState(() => ({})),
        eR = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        ew = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != ep || null != eg || null != eA || null != ev ? eM : void 0,
                multiSelect: null != e_ ? { name: e_.name, state: ey } : void 0,
            }),
            [t, ep, eg, eA, ev, e_, ey, eM],
        ),
        eG = a.useMemo(
            () =>
                (0, _.ks)(
                    {
                        freeTextElements: ep,
                        dropdownElements: eg,
                        countrySelectElement: eA,
                        multiSelectElement: e_,
                        contentUrlInputElement: ev,
                    },
                    { textInput: eM, multiSelect: ey },
                ),
            [ep, eg, eA, e_, ev, eM, ey],
        ),
        eL = a.useCallback(
            (e, t) => {
                let n = { ...ey };
                e in ey ? delete n[e] : (n[e] = t), eE(n);
            },
            [ey],
        ),
        eD = a.useCallback(
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
        eU = a.useCallback(
            (e) => {
                ea(ew(e));
            },
            [ea, ew],
        );
    a.useEffect(() => {
        null != eo && eE(eo), null != ec && eO(ec);
    }, [eo, ec]),
        a.useEffect(() => {
            null != eu && ek(eu);
        }, [eu]),
        a.useEffect(() => {
            if (null != e_) {
                let e = e_.data;
                if (null != e) for (let [t, n, l, a] of e) a && eE((e) => ({ ...e, [t]: n }));
            }
        }, [e_]);
    let eB = a.useCallback(
            (e) => {
                switch (e) {
                    case Y.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = q.intl.string(q.t["2EPoxE"]);
                        ek(e), es?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case Y.t02.INVALID_SIGNATURE_MISMATCH:
                        ek(q.intl.string(q.t.kXrnQM));
                        break;
                    case Y.t02.INVALID_FORM_BODY:
                        ek(q.intl.string(q.t.VjAAuP));
                        break;
                    default:
                        ef ? ek(q.intl.string(Z.default.psKFdJ)) : ek(q.intl.string(q.t.h6D8Vy));
                }
            },
            [ef, es],
        ),
        eP = a.useCallback(() => {
            let t = ["", e.successNodeId];
            er(ew(t))
                .then(() => {
                    ek(""), eU(t);
                })
                .catch((e) => {
                    eB(e.body?.code);
                })
                .finally(() => {
                    eI(!1);
                });
        }, [e.successNodeId, ew, er, eU, eB]),
        eH = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        ei();
                        break;
                    case "next":
                        eU(["", e.target]);
                        break;
                    case "submit":
                        eI(!0), eP();
                }
            },
            [ei, eU, eP],
        ),
        eV = a.useCallback(
            (e) => {
                "Enter" !== e.key || eG || eT || null == t.button || (e.preventDefault(), eH(t.button));
            },
            [eG, eT, t.button, eH],
        );
    a.useEffect(() => {
        t.is_auto_submit && !ej && (eS(!0), er(ew(["", t.id])));
    }, [t.is_auto_submit, ej, er, ew, t.id]);
    let eF = (0, c.fY)(en),
        eW = null != ee(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        ez = (0, d.Z)(),
        eK = (0, o.GR)(),
        e$ = ez && eK.length > 0 && null != ee(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: J.kL,
        onKeyDown: eV,
        children: [
            (0, l.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.A.Direction.VERTICAL,
                className: J.wx,
                children: [
                    (0, l.jsx)(F.A, { element: ee(t, "success") }),
                    (0, l.jsx)(E.A, { node: t, isModeratorReport: ef, isTidaReport: eC }),
                    (0, l.jsx)(O.A, { node: t }),
                ],
            }),
            (0, l.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: J.rf,
                children: [
                    null != em && (0, l.jsx)(z.A, { element: em }),
                    null != eb && (0, l.jsx)(W.A, { element: eb }),
                    null != ee(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(G.A, { message: n.record }),
                    null != ee(t, "user_preview") && "user" === n.name ? (0, l.jsx)(K.A, { user: n.record }) : null,
                    null != ee(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)($.A, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != ee(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(k.A, { guild: n.record }) : null,
                    null != ee(t, "breadcrumbs") && (0, l.jsx)(g.A, { isModeratorReport: ef, history: el }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return Q.T.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(U.A, {
                            children: [
                                eW &&
                                    (0, l.jsx)(M.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eR,
                                        reportId: ed,
                                    }),
                                e$ && (0, l.jsx)(H.A, { parents: eK }),
                                null != ee(t, "block_users") &&
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
                                        channelId: eR,
                                        reportId: ed,
                                        reportType: n,
                                    }),
                                !eW &&
                                    null != ee(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(D.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eR,
                                        reportId: ed,
                                    }),
                                null != ee(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(f.A, { message: n.record, reportId: ed }),
                                null != ee(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(w.A, { guildId: n.record.id, reportId: ed }),
                                null != ee(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(v.A, { application: n.record, reportId: ed }),
                                null != ee(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(B.A, { application: n.record, reportId: ed }),
                            ],
                        }),
                    null != ee(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eF &&
                        (0, l.jsx)(P.A, {
                            settingsUpsells: eF,
                            channelId: n.record.channel_id,
                            onModalClose: ei,
                            reportId: ed,
                            reportType: n,
                            reportSubType: en,
                        }),
                    null != ee(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, l.jsx)(V.A, { stageInstance: n.record }),
                    null != ee(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, l.jsx)(y.A, { event: n.record }),
                    null != ee(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, l.jsx)(S.A, { entry: n.record }),
                    null != ee(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, l.jsx)(N.A, { entry: n.record }),
                    null != ee(t, "app_preview") && "application" === n.name && (0, l.jsx)(x.A, { entry: n.record }),
                    null != e_ && (0, l.jsx)(L.A, { element: e_, onChange: eL, state: ey }),
                    null != eh && (0, l.jsx)(R.A, { element: eh }),
                    X.includes(n.name) && null != ev && (0, l.jsx)(h.A, { element: ev, onChange: eD, state: eM }),
                    X.includes(n.name) &&
                        null != eg &&
                        eg.length > 0 &&
                        (0, l.jsx)(C.A, { elements: eg, onChange: eD, state: eM }),
                    null != eA && (0, l.jsx)(b.A, { element: eA, onChange: eD, state: eM }),
                    X.includes(n.name) &&
                        null != ep &&
                        ep.length > 0 &&
                        (0, l.jsx)(j.A, { elements: ep, onChange: eD, state: eM }),
                    ((null != t.children && t.children.length > 0) || (null != ex && ex.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: J.qI,
                            children: [
                                (0, l.jsx)(A.A, { node: t, onSelectChild: eU, nodeMap: e.nodeMap }),
                                null != ex && ex.length > 0 ? (0, l.jsx)(I.A, { elements: ex }) : null,
                            ],
                        }),
                    (0, l.jsx)(T.A, {
                        errorMessage: eN,
                        onClose: () => {
                            ek("");
                        },
                    }),
                ],
            }),
            (0, l.jsx)(m.A, {
                button: t.button,
                submitting: eT,
                disableNext: eG,
                isModeratorReport: ef,
                onClick: eH,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: el.length > 0,
            }),
            (0, l.jsx)(r.s_y, { "data-migration-pending": !0, className: J.b, onClick: ei }),
        ],
    });
};
