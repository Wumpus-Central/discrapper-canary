n.d(t, { A: () => ea });
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
    j = n(657679),
    T = n(932482),
    N = n(404192),
    I = n(608523),
    S = n(717612),
    y = n(748113),
    k = n(458739),
    E = n(325272),
    w = n(688927),
    R = n(796071),
    M = n(132318),
    L = n(985879),
    O = n(117056),
    G = n(66535),
    D = n(12613),
    U = n(842012),
    P = n(666580),
    B = n(588684),
    H = n(316862),
    V = n(563218),
    F = n(617071),
    W = n(883471),
    z = n(943071),
    K = n(216033),
    $ = n(908675),
    Q = n(503985),
    q = n(145996),
    Y = n(964448),
    Z = n(652215),
    J = n(985018),
    X = n(641131),
    ee = n(212335);
let et = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function en(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function el(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let ea = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: ea,
            history: er,
            onSelectChild: ei,
            onModalClose: es,
            onSubmit: ed,
            onNavigateToNode: eo,
            multiSelect: ec,
            reportId: eu,
            textInput: e_,
            initialErrorMessage: em,
        } = e,
        ex = en(t, "checkbox"),
        ep = en(t, "text_line_resource"),
        eh = el(t, "external_link"),
        eg = el(t, "free_text"),
        eA = el(t, "dropdown"),
        ev = en(t, "country_select"),
        ef = en(t, "inline_notice"),
        eb = en(t, "radio_group"),
        eC = en(t, "text"),
        ej = en(t, "content_url_input"),
        eT = r.x.REPORT_TO_MOD.has(n.name),
        eN = n.name === _.tY.MEDIA_TAKEDOWN,
        [eI, eS] = a.useState(!1),
        [ey, ek] = a.useState(!1),
        [eE, ew] = a.useState(em ?? ""),
        [eR, eM] = a.useState(() => ({})),
        [eL, eO] = a.useState(() => ({})),
        eG = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eD = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != eg || null != eA || null != ev || null != eb || null != ej ? eL : void 0,
                multiSelect: null != ex ? { name: ex.name, state: eR } : void 0,
            }),
            [t, eg, eA, ev, eb, ej, ex, eR, eL],
        ),
        eU = a.useMemo(
            () =>
                (0, m.ks)(
                    {
                        freeTextElements: eg,
                        dropdownElements: eA,
                        countrySelectElement: ev,
                        radioGroupElement: eb,
                        multiSelectElement: ex,
                        contentUrlInputElement: ej,
                    },
                    { textInput: eL, multiSelect: eR },
                ),
            [eg, eA, ev, eb, ex, ej, eL, eR],
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
                    r = { ...eL };
                (r[e] = { value: t, isValid: n }),
                    null != l && (null != a && "" !== a ? (r[l] = { value: a, isValid: n }) : delete r[l]),
                    eO(r);
            },
            [eL],
        ),
        eH = a.useCallback(
            (e) => {
                ei(eD(e));
            },
            [ei, eD],
        );
    a.useEffect(() => {
        null != ec && eM(ec), null != e_ && eO(e_);
    }, [ec, e_]),
        a.useEffect(() => {
            null != em && ew(em);
        }, [em]),
        a.useEffect(() => {
            if (null != ex) {
                let e = ex.data;
                if (null != e) for (let [t, n, l, a] of e) a && eM((e) => ({ ...e, [t]: n }));
            }
        }, [ex]);
    let eV = a.useCallback(
            (e) => {
                switch (e) {
                    case Z.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = J.intl.string(J.t["2EPoxE"]);
                        ew(e), eo?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case Z.t02.INVALID_SIGNATURE_MISMATCH:
                        ew(J.intl.string(J.t.kXrnQM));
                        break;
                    case Z.t02.INVALID_FORM_BODY:
                        ew(J.intl.string(J.t.VjAAuP));
                        break;
                    default:
                        eT ? ew(J.intl.string(X.default.psKFdJ)) : ew(J.intl.string(J.t.h6D8Vy));
                }
            },
            [eT, eo],
        ),
        eF = a.useCallback(() => {
            let t = ["", e.successNodeId];
            ed(eD(t))
                .then(() => {
                    ew(""), eH(t);
                })
                .catch((e) => {
                    eV(e.body?.code);
                })
                .finally(() => {
                    eS(!1);
                });
        }, [e.successNodeId, eD, ed, eH, eV]),
        eW = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        es();
                        break;
                    case "next":
                        eH(["", e.target]);
                        break;
                    case "submit":
                        eS(!0), eF();
                }
            },
            [es, eH, eF],
        ),
        ez = a.useCallback(
            (e) => {
                "Enter" !== e.key || eU || eI || null == t.button || (e.preventDefault(), eW(t.button));
            },
            [eU, eI, t.button, eW],
        );
    a.useEffect(() => {
        t.is_auto_submit && !ey && (ek(!0), ed(eD(["", t.id])));
    }, [t.is_auto_submit, ey, ed, eD, t.id]);
    let eK = (0, u.fY)(ea),
        e$ = null != en(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eQ = (0, c.Z)(),
        eq = (0, o.GR)(),
        eY = eQ && eq.length > 0 && null != en(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: ee.kL,
        onKeyDown: ez,
        children: [
            (0, l.jsx)("div", {
                className: ee.U1,
                children:
                    null != t.header && "" !== t.header
                        ? (0, l.jsx)(s.Heading, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: t.header,
                          })
                        : null,
            }),
            (0, l.jsx)("div", { className: ee.b, children: (0, l.jsx)(i.JnF, { onClick: es }) }),
            (0, l.jsxs)(s.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                direction: d.A.Direction.VERTICAL,
                className: ee.wx,
                children: [
                    (0, l.jsx)(z.A, { element: en(t, "success") }),
                    (0, l.jsx)(w.A, { node: t, isModeratorReport: eT, isTidaReport: eN, hideTitle: !0 }),
                    (0, l.jsx)(M.A, { node: t }),
                ],
            }),
            (0, l.jsxs)(s.$mQ, {
                "data-migration-pending": !0,
                className: ee.rf,
                children: [
                    null != ep && (0, l.jsx)($.A, { element: ep }),
                    null != eC && (0, l.jsx)(K.A, { element: eC }),
                    null != en(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(G.A, { message: n.record }),
                    null != en(t, "user_preview") && "user" === n.name ? (0, l.jsx)(Q.A, { user: n.record }) : null,
                    null != en(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)(q.A, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != en(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(k.A, { guild: n.record }) : null,
                    null != en(t, "breadcrumbs") && (0, l.jsx)(g.A, { isModeratorReport: eT, history: er }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return Y.T.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(B.A, {
                            children: [
                                e$ &&
                                    (0, l.jsx)(R.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: eu,
                                    }),
                                eY && (0, l.jsx)(F.A, { parents: eq }),
                                null != en(t, "block_users") &&
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
                                        reportId: eu,
                                        reportType: n,
                                    }),
                                !e$ &&
                                    null != en(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(U.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eG,
                                        reportId: eu,
                                    }),
                                null != en(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(C.A, { message: n.record, reportId: eu }),
                                null != en(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(O.A, { guildId: n.record.id, reportId: eu }),
                                null != en(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(b.A, { application: n.record, reportId: eu }),
                                null != en(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(H.A, { application: n.record, reportId: eu }),
                            ],
                        }),
                    null != en(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eK &&
                        (0, l.jsx)(V.A, {
                            settingsUpsells: eK,
                            channelId: n.record.channel_id,
                            onModalClose: es,
                            reportId: eu,
                            reportType: n,
                            reportSubType: ea,
                        }),
                    null != en(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, l.jsx)(W.A, { stageInstance: n.record }),
                    null != en(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, l.jsx)(E.A, { event: n.record }),
                    null != en(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, l.jsx)(S.A, { entry: n.record }),
                    null != en(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, l.jsx)(y.A, { entry: n.record }),
                    null != en(t, "app_preview") && "application" === n.name && (0, l.jsx)(p.A, { entry: n.record }),
                    null != ex && (0, l.jsx)(D.A, { element: ex, onChange: eP, state: eR }),
                    et.includes(n.name) && null != ej && (0, l.jsx)(v.A, { element: ej, onChange: eB, state: eL }),
                    et.includes(n.name) &&
                        null != eA &&
                        eA.length > 0 &&
                        (0, l.jsx)("div", {
                            className: null != ex ? ee.yF : void 0,
                            children: (0, l.jsx)(j.A, { elements: eA, onChange: eB, state: eL }),
                        }),
                    null != eb &&
                        (0, l.jsx)("div", {
                            className: null != ex ? ee.yF : void 0,
                            children: (0, l.jsx)(P.A, { element: eb, onChange: eB, state: eL }),
                        }),
                    null != ef &&
                        (function (e, t, n) {
                            let { visible_when: l } = e.data;
                            if (null == l) return !0;
                            let a = en(t, l.element_type);
                            return null != a && n?.[a.name]?.value === l.value;
                        })(ef, t, eL) &&
                        (0, l.jsx)(L.A, { element: ef }),
                    null != ev && (0, l.jsx)(f.A, { element: ev, onChange: eB, state: eL }),
                    et.includes(n.name) &&
                        null != eg &&
                        eg.length > 0 &&
                        (0, l.jsx)(I.A, { elements: eg, onChange: eB, state: eL }),
                    ((null != t.children && t.children.length > 0) || (null != eh && eh.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: ee.qI,
                            children: [
                                (0, l.jsx)(A.A, { node: t, onSelectChild: eH, nodeMap: e.nodeMap }),
                                null != eh && eh.length > 0 ? (0, l.jsx)(N.A, { elements: eh }) : null,
                            ],
                        }),
                    (0, l.jsx)(T.A, {
                        errorMessage: eE,
                        onClose: () => {
                            ew("");
                        },
                    }),
                ],
            }),
            (0, l.jsx)(x.A, {
                button: t.button,
                submitting: eI,
                disableNext: eU,
                isModeratorReport: eT,
                onClick: eW,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: er.length > 0,
                className: ee.qr,
            }),
        ],
    });
};
