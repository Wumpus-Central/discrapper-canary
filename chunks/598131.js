n.d(t, { A: () => ee });
var l = n(627968),
    a = n(64700),
    i = n(2110),
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
    w = n(12613),
    O = n(842012),
    G = n(588684),
    D = n(316862),
    U = n(563218),
    B = n(617071),
    P = n(883471),
    H = n(943071),
    V = n(216033),
    F = n(908675),
    W = n(503985),
    z = n(145996),
    $ = n(964448),
    K = n(652215),
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
            onSubmit: ea,
            multiSelect: ei,
            reportId: er,
            textInput: es,
        } = e,
        ed = J(t, "checkbox"),
        eo = J(t, "text_line_resource"),
        eu = X(t, "external_link"),
        ec = X(t, "free_text"),
        em = X(t, "dropdown"),
        e_ = J(t, "text"),
        ex = J(t, "content_url_input"),
        eg = i.x.REPORT_TO_MOD.has(n.name),
        [eh, ep] = a.useState(!1),
        [eA, eb] = a.useState(!1),
        [ev, ef] = a.useState(""),
        [ej, eT] = a.useState(() => ({})),
        [eN, eS] = a.useState(() => ({})),
        ek = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eC = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != ec || null != em || null != ex ? eN : void 0,
                multiSelect: null != ed ? { name: ed.name, state: ej } : void 0,
            }),
            [t, ec, em, ex, ed, ej, eN],
        ),
        eI = a.useMemo(
            () =>
                (0, m.ks)(
                    { freeTextElements: ec, dropdownElements: em, multiSelectElement: ed, contentUrlInputElement: ex },
                    { textInput: eN, multiSelect: ej },
                ),
            [ec, em, ed, ex, eN, ej],
        ),
        eE = a.useCallback(
            (e, t) => {
                let n = { ...ej };
                e in ej ? delete n[e] : (n[e] = t), eT(n);
            },
            [ej],
        ),
        ey = a.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = { ...eN };
                (i[e] = { value: t, isValid: n }),
                    null != l && (null != a && "" !== a ? (i[l] = { value: a, isValid: n }) : delete i[l]),
                    eS(i);
            },
            [eN],
        ),
        eM = a.useCallback(
            (e) => {
                en(eC(e));
            },
            [en, eC],
        );
    a.useEffect(() => {
        null != ei && eT(ei), null != es && eS(es);
    }, [ei, es]),
        a.useEffect(() => {
            if (null != ed) {
                let e = ed.data;
                if (null != e) for (let [t, n, l, a] of e) a && eT((e) => ({ ...e, [t]: n }));
            }
        }, [ed]);
    let eR = a.useCallback(
            (e) => {
                e === K.t02.INVALID_FORM_BODY
                    ? ef(Q.intl.string(Q.t.VjAAuP))
                    : eg
                      ? ef(Q.intl.string(Y.default.psKFdJ))
                      : ef(Q.intl.string(Q.t.h6D8Vy));
            },
            [eg],
        ),
        eL = a.useCallback(() => {
            let t = ["", e.successNodeId];
            ea(eC(t))
                .then(() => {
                    ef(""), eM(t);
                })
                .catch((e) => {
                    eR(e.body?.code);
                })
                .finally(() => {
                    ep(!1);
                });
        }, [e.successNodeId, eC, ea, eM, eR]),
        ew = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        el();
                        break;
                    case "next":
                        eM(["", e.target]);
                        break;
                    case "submit":
                        ep(!0), eL();
                }
            },
            [el, eM, eL],
        ),
        eO = a.useCallback(
            (e) => {
                "Enter" !== e.key || eI || eh || null == t.button || (e.preventDefault(), ew(t.button));
            },
            [eI, eh, t.button, ew],
        );
    a.useEffect(() => {
        t.is_auto_submit && !eA && (eb(!0), ea(eC(["", t.id])));
    }, [t.is_auto_submit, eA, ea, eC, t.id]);
    let eG = (0, u.fY)(ee),
        eD = null != J(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eU = (0, o.Z)(),
        eB = (0, d.GR)(),
        eP = eU && eB.length > 0 && null != J(t, "share_with_parents"),
        eH = n.name === c.tY.MEDIA_TAKEDOWN;
    return (0, l.jsxs)("div", {
        className: q.kL,
        onKeyDown: eO,
        children: [
            (0, l.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                direction: s.A.Direction.VERTICAL,
                className: q.wx,
                children: [
                    (0, l.jsx)(H.A, { element: J(t, "success") }),
                    (0, l.jsx)(E.A, { node: t, isModeratorReport: eg, isTidaReport: eH }),
                    (0, l.jsx)(M.A, { node: t }),
                ],
            }),
            (0, l.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: q.rf,
                children: [
                    null != eo && (0, l.jsx)(F.A, { element: eo }),
                    null != e_ && (0, l.jsx)(V.A, { element: e_ }),
                    null != J(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(L.A, { message: n.record }),
                    null != J(t, "user_preview") && "user" === n.name ? (0, l.jsx)(W.A, { user: n.record }) : null,
                    null != J(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)(z.A, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != J(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(C.A, { guild: n.record }) : null,
                    null != J(t, "breadcrumbs") && (0, l.jsx)(h.A, { isModeratorReport: eg, history: et }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return $.T.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(G.A, {
                            children: [
                                eD &&
                                    (0, l.jsx)(y.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: ek,
                                        reportId: er,
                                    }),
                                eP && (0, l.jsx)(B.A, { parents: eB }),
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
                                        channelId: ek,
                                        reportId: er,
                                        reportType: n,
                                    }),
                                !eD &&
                                    null != J(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(O.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: ek,
                                        reportId: er,
                                    }),
                                null != J(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(v.A, { message: n.record, reportId: er }),
                                null != J(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(R.A, { guildId: n.record.id, reportId: er }),
                                null != J(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(b.A, { application: n.record, reportId: er }),
                                null != J(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(D.A, { application: n.record, reportId: er }),
                            ],
                        }),
                    null != J(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != eG &&
                        (0, l.jsx)(U.A, {
                            settingsUpsells: eG,
                            channelId: n.record.channel_id,
                            onModalClose: el,
                            reportId: er,
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
                    null != ed && (0, l.jsx)(w.A, { element: ed, onChange: eE, state: ej }),
                    Z.includes(n.name) && null != ex && (0, l.jsx)(A.A, { element: ex, onChange: ey, state: eN }),
                    Z.includes(n.name) &&
                        null != em &&
                        em.length > 0 &&
                        (0, l.jsx)(f.A, { elements: em, onChange: ey, state: eN }),
                    Z.includes(n.name) &&
                        null != ec &&
                        ec.length > 0 &&
                        (0, l.jsx)(N.A, { elements: ec, onChange: ey, state: eN }),
                    ((null != t.children && t.children.length > 0) || (null != eu && eu.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: q.qI,
                            children: [
                                (0, l.jsx)(p.A, { node: t, onSelectChild: eM, nodeMap: e.nodeMap }),
                                null != eu && eu.length > 0 ? (0, l.jsx)(T.A, { elements: eu }) : null,
                            ],
                        }),
                    (0, l.jsx)(j.A, {
                        errorMessage: ev,
                        onClose: () => {
                            ef("");
                        },
                    }),
                ],
            }),
            (0, l.jsx)(_.A, {
                button: t.button,
                submitting: eh,
                disableNext: eI,
                isModeratorReport: eg,
                onClick: ew,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: et.length > 0,
            }),
            (0, l.jsx)(r.s_y, { "data-migration-pending": !0, className: q.b, onClick: el }),
        ],
    });
};
