"use strict";
n.d(t, { A: () => er });
var a = n(627968),
    i = n(64700),
    r = n(2110),
    l = n(815021),
    s = n(534514),
    d = n(935462),
    o = n(683071),
    c = n(235986),
    u = n(834981),
    _ = n(840387),
    m = n(319582),
    p = n(17372),
    h = n(369053),
    g = n(482578),
    f = n(248492),
    b = n(133134),
    A = n(374966),
    x = n(803957),
    v = n(905074),
    E = n(384826),
    I = n(80718),
    T = n(676978),
    S = n(657679),
    N = n(404192),
    C = n(608523),
    y = n(717612),
    j = n(748113),
    w = n(458739),
    R = n(325272),
    L = n(688927),
    M = n(796071),
    O = n(132318),
    P = n(985879),
    k = n(117056),
    D = n(66535),
    U = n(12613),
    G = n(842012),
    B = n(666580),
    H = n(588684),
    F = n(316862),
    V = n(563218),
    W = n(617071),
    Z = n(883471),
    z = n(943071),
    Y = n(216033),
    $ = n(908675),
    K = n(503985),
    J = n(145996),
    Q = n(964448),
    q = n(652215),
    X = n(985018),
    ee = n(221314),
    et = n(777148);
let en = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function ea(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function ei(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let er = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: er,
            history: el,
            onSelectChild: es,
            onModalClose: ed,
            onSubmit: eo,
            onNavigateToNode: ec,
            multiSelect: eu,
            reportId: e_,
            textInput: em,
            initialErrorMessage: ep,
        } = e,
        eh = ea(t, "checkbox"),
        eg = ea(t, "text_line_resource"),
        ef = ei(t, "external_link"),
        eb = ei(t, "free_text"),
        eA = ei(t, "dropdown"),
        ex = ea(t, "country_select"),
        ev = ea(t, "inline_notice"),
        eE = ei(t, "radio_group"),
        eI = ea(t, "text"),
        eT = ea(t, "content_url_input"),
        eS = r.x.REPORT_TO_MOD.has(n.name),
        eN = n.name === p.tY.MEDIA_TAKEDOWN,
        [eC, ey] = i.useState(!1),
        [ej, ew] = i.useState(!1),
        [eR, eL] = i.useState(ep ?? ""),
        [eM, eO] = i.useState(() => ({})),
        [eP, ek] = i.useState(() => ({})),
        eD = i.useRef(null),
        eU = i.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        eG = i.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != eb || null != eA || null != ex || eE.length > 0 || null != eT ? eP : void 0,
                multiSelect: null != eh ? { name: eh.name, state: eM } : void 0,
            }),
            [t, eb, eA, ex, eE, eT, eh, eM, eP],
        ),
        eB = i.useMemo(
            () =>
                (0, h.ks)(
                    {
                        freeTextElements: eb,
                        dropdownElements: eA,
                        countrySelectElement: ex,
                        radioGroupElements: eE,
                        multiSelectElement: eh,
                        contentUrlInputElement: eT,
                    },
                    { textInput: eP, multiSelect: eM },
                ),
            [eb, eA, ex, eE, eh, eT, eP, eM],
        ),
        eH = i.useCallback(
            (e, t) => {
                let n = { ...eM };
                e in eM ? delete n[e] : (n[e] = t), eO(n);
            },
            [eM],
        ),
        eF = i.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    r = { ...eP };
                (r[e] = { value: t, isValid: n }),
                    null != a && (null != i && "" !== i ? (r[a] = { value: i, isValid: n }) : delete r[a]),
                    ek(r);
            },
            [eP],
        ),
        eV = i.useCallback(
            (e) => {
                es(eG(e));
            },
            [es, eG],
        );
    i.useEffect(() => {
        null != eu && eO(eu), null != em && ek(em);
    }, [eu, em]),
        i.useEffect(() => {
            null != ep && eL(ep);
        }, [ep]),
        i.useEffect(() => {
            if ("" !== eR) {
                let e = setTimeout(() => {
                    let e = eD.current?.parentElement;
                    null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
                }, 50);
                return () => clearTimeout(e);
            }
        }, [eR]),
        i.useEffect(() => {
            if (null != eh) {
                let e = eh.data;
                if (null != e) for (let [t, n, a, i] of e) i && eO((e) => ({ ...e, [t]: n }));
            }
        }, [eh]);
    let eW = i.useCallback(
            (e) => {
                switch (e) {
                    case q.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = X.intl.string(X.t["2EPoxE"]);
                        eL(e), ec?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case q.t02.INVALID_SIGNATURE_MISMATCH:
                        eL(X.intl.string(X.t.kXrnQM));
                        break;
                    case q.t02.INVALID_FORM_BODY:
                        eL(X.intl.string(X.t.VjAAuP));
                        break;
                    default:
                        eS ? eL(X.intl.string(ee.default.psKFdJ)) : eL(X.intl.string(X.t.h6D8Vy));
                }
            },
            [eS, ec],
        ),
        eZ = i.useCallback(() => {
            let t = ["", e.successNodeId];
            eo(eG(t))
                .then(() => {
                    eL(""), eV(t);
                })
                .catch((e) => {
                    eW(e.body?.code);
                })
                .finally(() => {
                    ey(!1);
                });
        }, [e.successNodeId, eG, eo, eV, eW]),
        ez = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        ed();
                        break;
                    case "next":
                        eV(["", e.target]);
                        break;
                    case "submit":
                        ey(!0), eZ();
                }
            },
            [ed, eV, eZ],
        ),
        eY = i.useCallback(
            (e) => {
                if ("Enter" === e.key && !eB && !eC && null != t.button) {
                    let n = e.target;
                    "BUTTON" !== n.tagName &&
                        "A" !== n.tagName &&
                        "button" !== n.getAttribute("role") &&
                        (e.preventDefault(), ez(t.button));
                }
            },
            [eB, eC, t.button, ez],
        );
    i.useEffect(() => {
        t.is_auto_submit && !ej && (ew(!0), eo(eG(["", t.id])));
    }, [t.is_auto_submit, ej, eo, eG, t.id]);
    let e$ = (0, m.fY)(er),
        eK = null != ea(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eJ = (0, _.Z)(),
        eQ = (0, u.GR)(),
        eq = eJ && eQ.length > 0 && null != ea(t, "share_with_parents");
    return (0, a.jsxs)("div", {
        className: et.kL,
        onKeyDown: eY,
        children: [
            (0, a.jsx)("div", {
                className: et.U1,
                children:
                    null != t.header && "" !== t.header
                        ? (0, a.jsx)(s.D, { variant: "heading-lg/semibold", color: "text-strong", children: t.header })
                        : null,
            }),
            (0, a.jsx)("div", { className: et.b, children: (0, a.jsx)(l.J, { onClick: ed }) }),
            (0, a.jsxs)(d.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                direction: c.A.Direction.VERTICAL,
                className: et.wx,
                children: [
                    (0, a.jsx)(z.A, { element: ea(t, "success") }),
                    (0, a.jsx)(L.A, { node: t, isModeratorReport: eS, isTidaReport: eN, hideTitle: !0 }),
                    (0, a.jsx)(O.A, { node: t }),
                ],
            }),
            (0, a.jsxs)(d.$m, {
                "data-migration-pending": !0,
                className: et.rf,
                children: [
                    null != eg && (0, a.jsx)($.A, { element: eg }),
                    null != eI && (0, a.jsx)(Y.A, { element: eI }),
                    null != ea(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, a.jsx)(D.A, { message: n.record }),
                    null != ea(t, "user_preview") && "user" === n.name ? (0, a.jsx)(K.A, { user: n.record }) : null,
                    null != ea(t, "widget_preview") && "widget" === n.name
                        ? (0, a.jsx)(J.A, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != ea(t, "guild_preview") && "guild" === n.name ? (0, a.jsx)(w.A, { guild: n.record }) : null,
                    null != ea(t, "breadcrumbs") && (0, a.jsx)(A.A, { isModeratorReport: eS, history: el }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return Q.T.includes(t);
                        });
                    })(t) &&
                        (0, a.jsxs)(H.A, {
                            children: [
                                eK &&
                                    (0, a.jsx)(M.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eU,
                                        reportId: e_,
                                    }),
                                eq && (0, a.jsx)(W.A, { parents: eQ }),
                                null != ea(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, a.jsx)(b.A, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: eU,
                                        reportId: e_,
                                        reportType: n,
                                    }),
                                !eK &&
                                    null != ea(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, a.jsx)(G.A, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: eU,
                                        reportId: e_,
                                    }),
                                null != ea(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, a.jsx)(T.A, { message: n.record, reportId: e_ }),
                                null != ea(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, a.jsx)(k.A, { guildId: n.record.id, reportId: e_ }),
                                null != ea(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, a.jsx)(I.A, { application: n.record, reportId: e_ }),
                                null != ea(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, a.jsx)(F.A, { application: n.record, reportId: e_ }),
                            ],
                        }),
                    null != ea(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != e$ &&
                        (0, a.jsx)(V.A, {
                            settingsUpsells: e$,
                            channelId: n.record.channel_id,
                            onModalClose: ed,
                            reportId: e_,
                            reportType: n,
                            reportSubType: er,
                        }),
                    null != ea(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, a.jsx)(Z.A, { stageInstance: n.record }),
                    null != ea(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, a.jsx)(R.A, { event: n.record }),
                    null != ea(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, a.jsx)(y.A, { entry: n.record }),
                    null != ea(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, a.jsx)(j.A, { entry: n.record }),
                    null != ea(t, "app_preview") && "application" === n.name && (0, a.jsx)(f.A, { entry: n.record }),
                    null != eh && (0, a.jsx)(U.A, { element: eh, onChange: eH, state: eM }),
                    en.includes(n.name) && null != eT && (0, a.jsx)(v.A, { element: eT, onChange: eF, state: eP }),
                    en.includes(n.name) &&
                        null != eA &&
                        eA.length > 0 &&
                        (0, a.jsx)("div", { children: (0, a.jsx)(S.A, { elements: eA, onChange: eF, state: eP }) }),
                    eE.map((e) => (0, a.jsx)(B.A, { element: e, onChange: eF, state: eP }, e.name)),
                    null != ev &&
                        (function (e, t, n) {
                            let { visible_when: a } = e.data;
                            if (null == a) return !0;
                            let i =
                                null != a.element_name
                                    ? t.elements.find((e) => {
                                          let { name: t } = e;
                                          return t === a.element_name;
                                      })
                                    : ea(t, a.element_type);
                            return null != i && n?.[i.name]?.value === a.value;
                        })(ev, t, eP) &&
                        (0, a.jsx)(P.A, { element: ev }),
                    null != ex && (0, a.jsx)(E.A, { element: ex, onChange: eF, state: eP }),
                    en.includes(n.name) &&
                        null != eb &&
                        eb.length > 0 &&
                        (0, a.jsx)(C.A, { elements: eb, onChange: eF, state: eP }),
                    ((null != t.children && t.children.length > 0) || (null != ef && ef.length > 0)) &&
                        (0, a.jsxs)("div", {
                            className: et.qI,
                            children: [
                                (0, a.jsx)(x.A, { node: t, onSelectChild: eV, nodeMap: e.nodeMap }),
                                null != ef && ef.length > 0 ? (0, a.jsx)(N.A, { elements: ef }) : null,
                            ],
                        }),
                    "" !== eR
                        ? (0, a.jsx)("div", { ref: eD, children: (0, a.jsx)(o.w, { type: "critical", children: eR }) })
                        : null,
                ],
            }),
            (0, a.jsx)(g.A, {
                button: t.button,
                submitting: eC,
                disableNext: eB,
                isModeratorReport: eS,
                onClick: ez,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: el.length > 0,
                className: et.qr,
            }),
        ],
    });
};
