n.d(t, { A: () => ee });
var l = n(627968),
    i = n(64700),
    a = n(2110),
    r = n(397927),
    s = n(235986),
    d = n(834981),
    o = n(840387),
    u = n(319582),
    c = n(17372),
    m = n(369053),
    _ = n(482578),
    x = n(248492),
    g = n(133134),
    h = n(374966),
    p = n(803957),
    A = n(905074),
    b = n(80718),
    v = n(676978),
    f = n(657679),
    j = n(932482),
    T = n(404192),
    N = n(608523),
    S = n(717612),
    k = n(748113),
    C = n(458739),
    I = n(325272),
    E = n(688927),
    y = n(796071),
    M = n(132318),
    R = n(117056),
    L = n(66535),
    O = n(12613),
    w = n(842012),
    G = n(588684),
    D = n(316862),
    U = n(563218),
    B = n(617071),
    P = n(883471),
    H = n(943071),
    V = n(216033),
    W = n(908675),
    F = n(503985),
    z = n(145996),
    K = n(964448),
    $ = n(652215),
    Q = n(985018),
    Y = n(641131),
    q = n(212335);
let Z = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function J(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function X(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let ee = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: ee,
            history: et,
            onSelectChild: en,
            onModalClose: el,
            onSubmit: ei,
            onNavigateToNode: ea,
            multiSelect: er,
            reportId: es,
            textInput: ed,
            initialErrorMessage: eo,
        } = e,
        eu = J(t, "checkbox"),
        ec = J(t, "text_line_resource"),
        em = X(t, "external_link"),
        e_ = X(t, "free_text"),
        ex = X(t, "dropdown"),
        eg = J(t, "text"),
        eh = J(t, "content_url_input"),
        ep = a.x.REPORT_TO_MOD.has(n.name),
        eA = n.name === c.tY.MEDIA_TAKEDOWN,
        [eb, ev] = i.useState(!1),
        [ef, ej] = i.useState(!1),
        [eT, eN] = i.useState(eo ?? ""),
        [eS, ek] = i.useState(() => ({})),
        [eC, eI] = i.useState(() => ({})),
        eE = i.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        ey = i.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != e_ || null != ex || null != eh ? eC : void 0,
                multiSelect: null != eu ? { name: eu.name, state: eS } : void 0,
            }),
            [t, e_, ex, eh, eu, eS, eC],
        ),
        eM = i.useMemo(
            () =>
                (0, m.ks)(
                    { freeTextElements: e_, dropdownElements: ex, multiSelectElement: eu, contentUrlInputElement: eh },
                    { textInput: eC, multiSelect: eS },
                ),
            [e_, ex, eu, eh, eC, eS],
        ),
        eR = i.useCallback(
            (e, t) => {
                let n = { ...eS };
                e in eS ? delete n[e] : (n[e] = t), ek(n);
            },
            [eS],
        ),
        eL = i.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    a = { ...eC };
                (a[e] = { value: t, isValid: n }),
                    null != l && (null != i && "" !== i ? (a[l] = { value: i, isValid: n }) : delete a[l]),
                    eI(a);
            },
            [eC],
        ),
        eO = i.useCallback(
            (e) => {
                en(ey(e));
            },
            [en, ey],
        );
    i.useEffect(() => {
        null != er && ek(er), null != ed && eI(ed);
    }, [er, ed]),
        i.useEffect(() => {
            null != eo && eN(eo);
        }, [eo]),
        i.useEffect(() => {
            if (null != eu) {
                let e = eu.data;
                if (null != e) for (let [t, n, l, i] of e) i && ek((e) => ({ ...e, [t]: n }));
            }
        }, [eu]);
    let ew = i.useCallback(
            (e) => {
                switch (e) {
                    case $.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = Q.intl.string(Q.t["2EPoxE"]);
                        eN(e), ea?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case $.t02.INVALID_SIGNATURE_MISMATCH:
                        eN(Q.intl.string(Q.t.kXrnQM));
                        break;
                    case $.t02.INVALID_FORM_BODY:
                        eN(Q.intl.string(Q.t.VjAAuP));
                        break;
                    default:
                        ep ? eN(Q.intl.string(Y.default.psKFdJ)) : eN(Q.intl.string(Q.t.h6D8Vy));
                }
            },
            [ep, ea],
        ),
        eG = i.useCallback(() => {
            let t = ["", e.successNodeId];
            ei(ey(t))
                .then(() => {
                    eN(""), eO(t);
                })
                .catch((e) => {
                    ew(e.body?.code);
                })
                .finally(() => {
                    ev(!1);
                });
        }, [e.successNodeId, ey, ei, eO, ew]),
        eD = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        el();
                        break;
                    case "next":
                        eO(["", e.target]);
                        break;
                    case "submit":
                        ev(!0), eG();
                }
            },
            [el, eO, eG],
        ),
        eU = i.useCallback(
            (e) => {
                "Enter" !== e.key || eM || eb || null == t.button || (e.preventDefault(), eD(t.button));
            },
            [eM, eb, t.button, eD],
        );
    i.useEffect(() => {
        t.is_auto_submit && !ef && (ej(!0), ei(ey(["", t.id])));
    }, [t.is_auto_submit, ef, ei, ey, t.id]);
    let eB = (0, u.fY)(ee),
        eP = null != J(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eH = (0, o.Z)(),
        eV = (0, d.GR)(),
        eW = eH && eV.length > 0 && null != J(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: q.kL,
        onKeyDown: eU,
        children: [
            (0, l.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.A.Direction.VERTICAL,
                className: q.wx,
                children: [
                    (0, l.jsx)(H.A, { element: J(t, "success") }),
                    (0, l.jsx)(E.A, { node: t, isModeratorReport: ep, isTidaReport: eA }),
                    (0, l.jsx)(M.A, { node: t }),
                ],
            }),
            (0, l.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: q.rf,
                children: [
                    null != ec && (0, l.jsx)(W.A, { element: ec }),
                    null != eg && (0, l.jsx)(V.A, { element: eg }),
                    null != J(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(L.A, { message: n.record }),
                    null != J(t, "user_preview") && "user" === n.name ? (0, l.jsx)(F.A, { user: n.record }) : null,
                    null != J(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)(z.A, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != J(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(C.A, { guild: n.record }) : null,
                    null != J(t, "breadcrumbs") && (0, l.jsx)(h.A, { isModeratorReport: ep, history: et }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return K.T.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(G.A, {
                            children: [
                                eP &&
                                    (0, l.jsx)(y.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eE,
                                        reportId: es,
                                    }),
                                eW && (0, l.jsx)(B.A, { parents: eV }),
                                null != J(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, l.jsx)(g.A, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: eE,
                                        reportId: es,
                                        reportType: n,
                                    }),
                                !eP &&
                                    null != J(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(w.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eE,
                                        reportId: es,
                                    }),
                                null != J(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(v.A, { message: n.record, reportId: es }),
                                null != J(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(R.A, { guildId: n.record.id, reportId: es }),
                                null != J(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(b.A, { application: n.record, reportId: es }),
                                null != J(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(D.A, { application: n.record, reportId: es }),
                            ],
                        }),
                    null != J(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eB &&
                        (0, l.jsx)(U.A, {
                            settingsUpsells: eB,
                            channelId: n.record.channel_id,
                            onModalClose: el,
                            reportId: es,
                            reportType: n,
                            reportSubType: ee,
                        }),
                    null != J(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, l.jsx)(P.A, { stageInstance: n.record }),
                    null != J(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, l.jsx)(I.A, { event: n.record }),
                    null != J(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, l.jsx)(S.A, { entry: n.record }),
                    null != J(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, l.jsx)(k.A, { entry: n.record }),
                    null != J(t, "app_preview") && "application" === n.name && (0, l.jsx)(x.A, { entry: n.record }),
                    null != eu && (0, l.jsx)(O.A, { element: eu, onChange: eR, state: eS }),
                    Z.includes(n.name) && null != eh && (0, l.jsx)(A.A, { element: eh, onChange: eL, state: eC }),
                    Z.includes(n.name) &&
                        null != ex &&
                        ex.length > 0 &&
                        (0, l.jsx)(f.A, { elements: ex, onChange: eL, state: eC }),
                    Z.includes(n.name) &&
                        null != e_ &&
                        e_.length > 0 &&
                        (0, l.jsx)(N.A, { elements: e_, onChange: eL, state: eC }),
                    ((null != t.children && t.children.length > 0) || (null != em && em.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: q.qI,
                            children: [
                                (0, l.jsx)(p.A, { node: t, onSelectChild: eO, nodeMap: e.nodeMap }),
                                null != em && em.length > 0 ? (0, l.jsx)(T.A, { elements: em }) : null,
                            ],
                        }),
                    (0, l.jsx)(j.A, {
                        errorMessage: eT,
                        onClose: () => {
                            eN("");
                        },
                    }),
                ],
            }),
            (0, l.jsx)(_.A, {
                button: t.button,
                submitting: eb,
                disableNext: eM,
                isModeratorReport: ep,
                onClick: eD,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: et.length > 0,
            }),
            (0, l.jsx)(r.s_y, { "data-migration-pending": !0, className: q.b, onClick: el }),
        ],
    });
};
