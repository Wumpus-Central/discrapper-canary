s.r(t), s.d(t, { default: () => ls }), s(323874), s(14289), s(35956);
var l,
    n = s(627968),
    a = s(64700),
    r = s(503698),
    i = s.n(r),
    o = s(873263),
    c = s(835245),
    u = s(562708),
    d = s(17928),
    m = s(554146),
    h = s(577473),
    x = s(825484),
    E = s(821609),
    g = s(509434),
    f = s(534514),
    j = s(834730),
    v = s(123292),
    p = s(331322),
    _ = s(892547),
    N = s(944791),
    S = s(775602),
    C = s(793574),
    b = s(139286),
    A = s(197111),
    T = s(10088),
    O = s(859040),
    R = s(726249),
    L = s(607470),
    I = s(826673),
    y = s(840251),
    M = s(688151);
let Q = new y.E([], M.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var H = s(711111),
    U = s(701508),
    F = s(979590),
    D = s(749638),
    w = s(783531),
    P = s(334465),
    k = s(318346),
    q = s(371446),
    B = s(70926),
    V = s(531685),
    G = s(174459),
    W = s(676279),
    z = s(975571),
    $ = s(240248),
    K = s(507107),
    Y = s(631001),
    J = s(87549),
    Z = s(192444),
    X = s(31587),
    ee = s(590202);
s(321073);
var et = s(228366),
    es = s(340124),
    el = s(859703);
s(667532);
var en = s(783878),
    ea = s(408278),
    er = s(663417),
    ei = s(922016),
    eo = s(624479),
    ec = s(289873),
    eu = s(416052),
    ed = s(417098),
    em = s(375708);
let eh = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, n.jsx)(ed.$T, {
        color: ed.Hv.DANGER,
        children: (0, n.jsx)("div", { children: null != s ? s : em.intl.string(em.t.ZErSg5) }),
    });
};
var ex = s(661531),
    eE = s(602853),
    eg = s(939249),
    ef = s(817281),
    ej = s(688810),
    ev = s(487245),
    ep = s(363195),
    e_ = s(652215),
    eN = s(398876);
let eS = function () {
    let { analyticsLocations: e } = (0, ej.Ay)(),
        t = (0, d.bG)([ep.A], () => ep.A.theme),
        s = a.useRef(null);
    a.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let l = (0, eE.r)(ex.A.colors.BACKGROUND_BASE_LOW, e_.NJ8.LIGHT),
        r = (0, eE.r)(ex.A.colors.BACKGROUND_BASE_LOW, e_.NJ8.DARKER),
        i = (0, eE.r)(ex.A.colors.BACKGROUND_BASE_LOW, e_.NJ8.MIDNIGHT),
        o = a.useMemo(
            () => [
                { theme: e_.NJ8.LIGHT, label: em.t.K2sFfo, color: l.hex() },
                { theme: e_.NJ8.DARKER, label: em.t.b8Cei3, color: r.hex() },
                { theme: e_.NJ8.MIDNIGHT, label: em.t.Do4ZJx, color: i.hex() },
            ],
            [l, r, i],
        ),
        c = a.useCallback(
            (t) => {
                (0, ev.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, ef.u_)({ theme: t });
            },
            [e],
        ),
        u = a.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, n.jsx)("div", {
        className: eN.N,
        children: (0, n.jsxs)("div", {
            className: eN.t7,
            children: [
                o.map((e) =>
                    (0, n.jsxs)(
                        eg.D,
                        {
                            tag: "div",
                            className: eN.Du,
                            onClick: () => c(e.theme),
                            "aria-label": em.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, n.jsx)("div", {
                                    className: `${eN.WT} ${t === e.theme ? eN.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, n.jsx)("span", { className: eN.i, children: em.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, n.jsx)(ea.K, {
                    onClick: u,
                    "aria-label": em.intl.string(em.t.yBZMsQ),
                    icon: er.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eC = s(818348),
    eb = s(60857);
let eA = function (e) {
    let { questId: t, setQuestId: s, quest: l, refreshQuest: r } = e,
        [i, o] = a.useState(!1),
        [c, u] = a.useState(!1),
        m = a.useRef(null),
        h = (0, X.pT)(),
        g = (0, d.bG)([el.A], () => (null != t ? el.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, d.bG)([el.A], () => null != t && el.A.isFetchingQuestPreview(t), [t]),
        j = a.useMemo(() => {
            let e = h.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [h, t]),
        v = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, es.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        p = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, es.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, es.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        N = a.useCallback(
            (e) => {
                (0, $.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, n.jsxs)("div", {
        className: eb.Fr,
        children: [
            (0, n.jsx)("div", {
                children: (0, n.jsx)("div", {
                    className: eb.Br,
                    children: (0, n.jsxs)("div", {
                        className: eb.bo,
                        children: [
                            (0, n.jsx)(eS, {}),
                            (0, n.jsxs)("div", {
                                className: eb.b8,
                                children: [
                                    (0, n.jsx)(
                                        en.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: N,
                                            placeholder: em.intl.string(em.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, $.uJ)(t?.trim())) return e;
                                                let s = e.filter(
                                                    (e) =>
                                                        e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                        e.value.toLowerCase().includes(t.toLowerCase()),
                                                );
                                                return 0 === s.length && "" !== t.trim()
                                                    ? [{ label: t.trim(), value: t.trim() }]
                                                    : s;
                                            },
                                        },
                                        `${t}-${l?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, n.jsx)(ea.K, {
                                        onClick: r,
                                        "aria-label": em.intl.string(em.t.wzzjk9),
                                        icon: er.f,
                                        loading: f,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != l &&
                (0, n.jsx)("div", {
                    className: eb.in,
                    children: (0, n.jsxs)(x.e, {
                        className: eb.xv,
                        children: [
                            (0, n.jsx)(E.$, {
                                onClick: v,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: em.intl.string(em.t.jQEfRT),
                            }),
                            (0, n.jsx)(E.$, {
                                onClick: p,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: em.intl.string(em.t.taqkwK),
                            }),
                            (0, n.jsx)(E.$, {
                                onClick: _,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: em.intl.string(em.t.cKSLr4),
                            }),
                            (0, n.jsx)(ei.Y, {
                                targetElementRef: m,
                                shouldShow: c,
                                onRequestClose: () => u(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, n.jsx)("div", {
                                        className: eb.PP,
                                        children: (0, n.jsx)("div", {
                                            className: eb.sH,
                                            children: (0, n.jsx)(eu.A, {
                                                value: eC.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: em.intl.string(em.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, n.jsx)(ea.K, {
                                        ...e,
                                        buttonRef: m,
                                        onClick: () => u(!c),
                                        "aria-label": em.intl.string(em.t.rNGQfD),
                                        icon: eo.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != g ? (0, n.jsx)(eh, { error: g }) : null,
            f ? (0, n.jsx)(ec.y, {}) : null,
        ],
    });
};
var eT = s(364522),
    eO = s(761508),
    eR = s(797788);
let eL = () => (0, n.jsx)("div", { className: eR.y });
var eI = s(834615),
    ey = s(332544);
let eM = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: ey.x3,
        children: (0, n.jsxs)("div", {
            className: ey.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: ey.R_,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t.L2mlUb),
                }),
                (0, n.jsx)(eI.A, { quest: t }),
            ],
        }),
    });
};
var eQ = s(241124),
    eH = s(28082),
    eU = s(717695),
    eF = s(763578),
    eD = s(111113);
let ew = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: ey.x3,
        children: (0, n.jsxs)("div", {
            className: eF.wp,
            children: [
                (0, n.jsx)(f.D, {
                    className: eF.Oo,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t.rjVPdM),
                }),
                (0, n.jsx)("div", {
                    className: eF.RE,
                    children: (0, n.jsx)("div", {
                        className: eF.Z,
                        children: (0, n.jsx)("div", {
                            className: eD.C3,
                            children: (0, n.jsx)(eU.A, {
                                children: (0, n.jsx)(eQ.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, n.jsx)(eH.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eP = s(961974);
let ek = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: ey.x3,
        children: (0, n.jsxs)("div", {
            className: ey.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: ey.R_,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t.gWinpQ),
                }),
                (0, n.jsx)("div", {
                    className: ey.YT,
                    children: (0, n.jsx)(eP.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eq = s(711038),
    eB = s(330034);
let eV = function (e) {
    let { questId: t } = e;
    return (0, n.jsx)("div", {
        className: ey.x3,
        children: (0, n.jsxs)("div", {
            className: ey.B0,
            children: [
                (0, n.jsx)(f.D, { variant: "heading-md/semibold", children: em.intl.string(em.t.IcljUu) }),
                (0, n.jsx)("div", {
                    className: eB.wu,
                    children: (0, n.jsx)("span", { className: eB.cy, children: em.intl.string(em.t.q97mEu) }),
                }),
                (0, n.jsx)("div", {
                    className: eB.oU,
                    children: (0, n.jsx)("div", {
                        className: eB.zx,
                        children: (0, n.jsx)("div", {
                            className: eB.Lj,
                            children: (0, n.jsx)("div", {
                                className: eB.n0,
                                children: (0, n.jsx)(eq.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eG = s(291922);
let eW = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: ey.x3,
        children: (0, n.jsxs)("div", {
            className: ey.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: ey.R_,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t["5wnpF3"]),
                }),
                (0, n.jsx)(eG.Ay, {
                    className: ey.d,
                    quest: t,
                    questContent: K.uF.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: K.uF.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
var ez = s(97808),
    e$ = s(778712),
    eK = s(87664),
    eY = s(287809),
    eJ = s(427262),
    eZ = s(198525),
    eX = s(66176);
let e0 = function (e) {
        let { quest: t } = e,
            [s, l] = a.useState(!1),
            r = a.useRef(null),
            o = (0, d.bG)([eY.default], () => eY.default.getCurrentUser()),
            c = eJ.Ay.useName(o),
            u = (0, eK.A)(o?.id),
            m = a.useCallback(
                (e) =>
                    (0, n.jsx)(eZ.A, {
                        name: c,
                        quest: t,
                        memberListItemRef: r,
                        applicationStream: u,
                        ...e,
                        closePopout: () => {
                            l(!1);
                        },
                    }),
                [t, u, c],
            );
        return (0, n.jsx)("div", {
            className: ey.x3,
            children: (0, n.jsxs)("div", {
                className: ey.B0,
                children: [
                    (0, n.jsx)(f.D, {
                        className: eX.R_,
                        variant: "heading-md/semibold",
                        children: em.intl.string(em.t.jY7Zxg),
                    }),
                    (0, n.jsx)("div", { className: eX.$Q, children: em.intl.string(em.t.q3hbne) }),
                    (0, n.jsx)("div", {
                        className: eX.k0,
                        children: (0, n.jsx)(ei.Y, {
                            targetElementRef: r,
                            renderPopout: m,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => l(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: ei.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, n.jsx)("div", {
                                    ref: r,
                                    className: i()(eX.Tn, { [eX.wH]: s }),
                                    children: (0, n.jsx)(eg.D, {
                                        onClick: () => l(!s),
                                        tabIndex: 0,
                                        children: (0, n.jsxs)("div", {
                                            className: eX.lm,
                                            children: [
                                                (0, n.jsx)(ez.eu, {
                                                    size: e$._3.SIZE_32,
                                                    src: o?.getAvatarURL(void 0, 32),
                                                    status: e_.clD.ONLINE,
                                                    "aria-label": o?.username,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: eX.Fj,
                                                    children: [
                                                        (0, n.jsx)(j.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, n.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: em.intl.string(em.t.b9w3bO),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                        }),
                    }),
                ],
            }),
        });
    },
    e1 = (e) => {
        let { questId: t, selectedSections: s } = e,
            l = (0, d.bG)([el.A], () => el.A.getQuest(t));
        if (null != (0, d.bG)([el.A], () => el.A.getFetchQuestPreviewError(t)) || null == l) return null;
        let a = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                a("quest_bar") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ew, { quest: l }), (0, n.jsx)(eL, {})] }),
                a("home_card") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eW, { quest: l }), (0, n.jsx)(eL, {})] }),
                a("share_embed") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eV, { questId: l.id }), (0, n.jsx)(eL, {})] }),
                a("channel_call_header") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ek, { quest: l }), (0, n.jsx)(eL, {})] }),
                a("members_list") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(e0, { quest: l }), (0, n.jsx)(eL, {})] }),
                a("activity_panel") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eM, { quest: l }), (0, n.jsx)(eL, {})] }),
            ],
        });
    };
var e8 = s(497275);
function e7(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: l, controls: r } = e,
        i = [
            { value: "quest_bar", label: em.intl.string(em.t.rjVPdM) },
            { value: "share_embed", label: em.intl.string(em.t["D/gSWS"]) },
            { value: "home_card", label: em.intl.string(em.t["5wnpF3"]) },
            { value: "channel_call_header", label: em.intl.string(em.t.gWinpQ) },
            { value: "members_list", label: em.intl.string(em.t.wpYima) },
            { value: "activity_panel", label: em.intl.string(em.t.L2mlUb) },
        ],
        o = 0 === s.length || s.length === i.length,
        c = a.useMemo(() => (o ? "all" : 1 === s.length ? s[0] : "all"), [s, o]);
    return (0, n.jsx)(eT.Ip, {
        className: e8.kL,
        orientation: "auto",
        children: (0, n.jsxs)("div", {
            className: e8.qE,
            children: [
                (0, n.jsx)(f.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: em.intl.string(em.t.BDUDau),
                }),
                (0, n.jsx)("div", { className: e8.pf, children: r }),
                (0, n.jsxs)(eO.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: c,
                    onItemSelect: (e) => {
                        l?.(e);
                    },
                    children: [
                        (0, n.jsx)(eO.V.Item, { id: "all", children: em.intl.string(em.t.Y9DnPa) }),
                        i.map((e) => (0, n.jsx)(eO.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, n.jsx)("div", { className: e8.tZ, children: (0, n.jsx)("div", { className: e8.Qs, children: t }) }),
            ],
        }),
    });
}
function e2(e) {
    return new URLSearchParams(e).get(X.L1.QUEST_ID);
}
let e3 = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, o.W6)(),
                [s, l] = a.useState(e),
                { search: n } = (0, o.zy)();
            return (
                a.useEffect(() => {
                    let t = e2(n);
                    null != t ? l(t) : null != e && l(e);
                }, [e, n]),
                a.useEffect(() => {
                    if (null == s || e2(n) === s) return;
                    let e = new URLSearchParams();
                    e.set(X.L1.TAB, X.NC.PREVIEW_TOOL),
                        e.set(X.L1.QUEST_ID, s),
                        t.push(`${e_.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, n]),
                { questId: s, setQuestId: l }
            );
        })(t),
        r = (0, d.bG)([el.A], () => (null != s ? el.A.getQuest(s) : void 0), [s]),
        i = (0, d.bG)([el.A], () => (null != s ? el.A.getQuestLoadedViaPreview(s) : null), [s]);
    a.useEffect(() => {
        null != s &&
            (0, es.dQ)(s).then(() => {
                (0, es.Gt)(s);
            });
    }, [s]),
        a.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === s && (0, es.dQ)(s);
            };
            return (
                et.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    et.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]);
    let [c, u] = a.useState([]);
    return (0, n.jsx)(e7, {
        controls: (0, n.jsx)(eA, {
            questId: s,
            setQuestId: l,
            quest: r,
            refreshQuest: () => {
                null != s && (0, es.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? u([]) : u([e]);
        },
        children: i?.id != null ? (0, n.jsx)(e1, { questId: i?.id, selectedSections: c }) : null,
    });
};
var e6 = s(617986),
    e4 = s(203879),
    e5 = s(403362),
    e9 = s(167417),
    te = s(783977),
    tt = s(651892),
    ts = s(305866),
    tl = s(915089),
    tn = s(332733);
function ta(e) {
    let { children: t, id: s } = e;
    return (0, n.jsx)(j.E, { className: tn.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let tr = function (e) {
    let { children: t, renderPopout: s } = e,
        l = (0, tl.GV)(),
        r = a.useRef(null);
    return (0, n.jsx)(ei.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, n.jsx)(ts.l, { className: tn.S, "aria-labelledby": l, children: s(e, l) }),
        scrollBehavior: "close",
        targetElementRef: r,
        children: (e) => t(e, r),
    });
};
var ti = s(612539);
let to = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        l = (0, X.Nb)(),
        r = a.useCallback(
            (e) => (l) => {
                let n = e.filter((e) => l.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...n]);
            },
            [s, t],
        );
    return (0, n.jsx)(tr, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, n.jsxs)("div", {
                children: [
                    l.map((e, t) => {
                        let l = e.options.map((e) => ({ label: (0, tt.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, n.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    t > 0 && (0, n.jsx)("hr", { className: ti.B }),
                                    (0, n.jsx)(ta, { id: i, children: e.heading }),
                                    (0, n.jsx)(e9.$, {
                                        "aria-labelledby": i,
                                        options: l,
                                        selectedValues: o,
                                        onChange: r(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, n.jsx)("hr", { className: ti.B }),
                    (0, n.jsx)("div", {
                        className: ti.W,
                        children: (0, n.jsx)(E.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: em.intl.string(em.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(E.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: em.intl.formatToPlainString(em.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: te.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tc = s(773812),
    tu = s(715482);
let td = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: l } = e,
        r = a.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, X.XD)(),
        o = a.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, n.jsx)(tr, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(ta, { id: t, children: em.intl.string(em.t.tZXJIS) }),
                    (0, n.jsx)(tc.z, {
                        options: o,
                        onChange: (e) => {
                            s(), r(e);
                        },
                        value: l,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(E.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, tt.Js)(l),
                icon: tu.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tm = s(873174),
    th = s(535185),
    tx = s(717421),
    tE = s(927813),
    tg = s(710969);
function tf(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, tm.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, tm.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var tj = s(121480);
let tv = 4 * tE.A.Millis.SECOND;
function tp(e) {
    let { children: t } = e,
        s = a.useRef(null),
        [l, r] = a.useState(null),
        i = a.useCallback(() => {
            r(
                (function (e) {
                    if (null == e) return 1;
                    let t = Math.floor((e.clientWidth + 24) / 360);
                    return t > 0 ? t : 1;
                })(s.current),
            );
        }, [r]);
    return (
        (0, th.g)(s, i, [], { fireOnMount: !0 }),
        (0, n.jsx)("div", {
            className: tj.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== l && t(l),
        })
    );
}
let t_ = a.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: l,
            isFetching: r,
            hasFetched: c,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        m = (0, o.zy)(),
        h = a.useRef(""),
        [x, E] = a.useState(null),
        [g, v] = a.useState(0),
        [{ highlightAnimationProgress: p }, _] = (0, tx.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: tv },
        })),
        N = a.useCallback(
            (e) => {
                let t = (0, tg.vc)(e, s, l);
                return null != t && (E(t.id), v((e) => e + 1), !0);
            },
            [s, l],
        );
    return (a.useImperativeHandle(t, () => ({ scrollToQuest: N }), [N]),
    a.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        r || !c || (m.hash !== h.current && N(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, r, c, N]),
    a.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            _({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || E(null);
                },
            }));
    }, [x, g, _]),
    r && 0 === s.length)
        ? (0, n.jsx)(ec.y, { className: tj.u1 })
        : 0 === s.length
          ? (0, n.jsxs)("div", {
                className: tj.y7,
                children: [
                    (0, n.jsx)(f.D, {
                        variant: "heading-xl/semibold",
                        children: em.intl.string(u ? em.t.PBfFnx : em.t.NqFP6z),
                    }),
                    (0, n.jsx)(j.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? em.intl.format(em.t.LdYS1H, { onClick: d }) : em.intl.string(em.t.LhD4yH),
                    }),
                ],
            })
          : (0, n.jsx)(tp, {
                children: (e) =>
                    s.map((t, s) => {
                        let l = Math.floor(s / e),
                            a = x === t.id,
                            r = null != x && !a;
                        return (0, n.jsxs)(
                            tm.animated.div,
                            {
                                className: i()({ [tj.XB]: a }),
                                style: tf(a, r, p),
                                children: [
                                    a && (0, n.jsx)("div", { className: tj.E4 }, g),
                                    (0, n.jsx)(eG.Ay, {
                                        quest: t,
                                        questContent: K.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: l,
                                        className: tj.d,
                                        sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var tN = s(458518),
    tS = s(190107),
    tC = s(65990);
let tb = [],
    tA = X.L1.SORT,
    tT = X.L1.FILTER,
    tO = a.forwardRef(function (e, t) {
        let s,
            l,
            r,
            i,
            c = a.useRef(null),
            [u, d] =
                ((s = (0, tN.o)()),
                (l = (0, o.W6)()),
                (r = a.useRef(null)),
                (i = a.useCallback(
                    (e) => {
                        let t = new URLSearchParams(r.current ?? s);
                        for (let [s, l] of Object.entries(e)) null == l ? t.delete(s) : t.set(s, l);
                        (r.current = t),
                            l.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                r.current = null;
                            });
                    },
                    [s, l],
                )),
                [s, i]),
            m = a.useMemo(() => {
                var e;
                return (
                    (e = u.get(tA)),
                    ((0, $.uJ)(e) ? null : (Object.values(tS.kL).find((t) => t === e) ?? null)) ?? tS.kL.SUGGESTED
                );
            }, [u]),
            h = a.useMemo(
                () =>
                    (function (e) {
                        if ((0, $.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tS.WQ)(e))
                            .filter(e5.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(tT)) ?? tb,
                [u],
            ),
            x = a.useCallback(
                (e) => {
                    d({ [tA]: e });
                },
                [d],
            ),
            E = a.useCallback(
                (e) => {
                    d({
                        [tT]:
                            0 === e.length
                                ? null
                                : e
                                      .map((e) => {
                                          let { filter: t } = e;
                                          return t;
                                      })
                                      .join(","),
                    });
                },
                [d],
            ),
            {
                quests: g,
                excludedQuests: j,
                isFetchingCurrentQuests: v,
                hasFetched: p,
            } = (0, X.Qh)(
                X.NC.ALL,
                a.useMemo(() => ({ sortMethod: m, filters: h }), [m, h]),
            ),
            _ = a.useCallback(() => {
                E(tb);
            }, [E]),
            N = a.useRef(null),
            S = a.useRef(null),
            C = (0, o.zy)(),
            b = (0, o.W6)();
        return (
            a.useEffect(() => {
                "" !== C.hash &&
                    null != N.current &&
                    null != S.current &&
                    (m !== N.current || h !== S.current) &&
                    b.replace({ ...C, hash: void 0 });
            }, [m, h, C, b]),
            a.useEffect(() => {
                N.current = m;
            }, [m]),
            a.useEffect(() => {
                S.current = h;
            }, [h]),
            (0, X.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: g.length }),
            a.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        _(),
                            x(tS.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                c.current?.scrollToQuest(e);
                            });
                    },
                }),
                [_, x],
            ),
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("div", {
                        className: tC.Mj,
                        children: [
                            (0, n.jsx)(f.D, { variant: "heading-lg/medium", children: em.intl.string(em.t.giYD00) }),
                            (0, n.jsxs)("div", {
                                className: tC.Nf,
                                children: [
                                    (0, n.jsx)(td, { onChange: x, optionClassName: tC.Uq, selectedSortMethod: m }),
                                    (0, n.jsx)(to, { onChange: E, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(t_, {
                        ref: c,
                        quests: g,
                        excludedQuests: j,
                        isFetching: v,
                        hasFetched: p,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: _,
                    }),
                ],
            })
        );
    });
var tR = s(575593),
    tL = s(440703),
    tI = s(462887),
    ty = s(187322),
    tM = s(765671),
    tQ = s(736653),
    tH = s(162232),
    tU = s(859387),
    tF = s(734736),
    tD = s(303136),
    tw = s(265234),
    tP = s(181713);
let tk = (e) => {
    let { className: t, isAnimated: s = !1, questName: l } = e,
        a = s ? tP.A : tP.A + "?format=webp";
    return (0, n.jsx)("div", {
        className: i()(tw.k, t),
        children: s
            ? (0, n.jsx)(tD.A, {
                  preload: "auto",
                  className: tw.L,
                  children: (0, n.jsx)("source", { src: a, type: "video/webm" }),
              })
            : (0, n.jsx)("img", { className: tw.L, src: a, alt: l }),
    });
};
var tq = s(57718),
    tB = s(659249);
let tV = (0, a.memo)(function (e) {
    let { quest: t } = e,
        [s, l] = (0, a.useState)(!1),
        [r, o] = (0, a.useState)(24),
        [c, u] = (0, a.useState)(!1),
        m = (0, a.useRef)(null),
        h = (0, a.useRef)(null),
        x = (0, a.useRef)(null),
        E = (0, d.bG)([eY.default], () => eY.default.getCurrentUser()),
        { ref: g, height: v = 0 } = (0, tM.Ay)(),
        p = (0, tQ.Ay)(),
        _ = (0, X.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        N = t.userStatus?.claimedTier ?? 0,
        S = t.config.rewards[N],
        C = S?.type === tL.l.FRACTIONAL_PREMIUM,
        b = S?.type === tL.l.COLLECTIBLE,
        A = S?.type === tL.l.VIRTUAL_CURRENCY,
        T = S?.collectibleProduct?.items?.[0],
        O = T?.type === tR.R.AVATAR_DECORATION ? T : null,
        R = a.useMemo(
            () =>
                null == S
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? em.intl.format(em.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : S.name,
            [S, A, t],
        );
    (0, tM.i4)(m, (e) => {
        let { height: t } = e;
        if (!b || null == t || null == h.current || null == m.current || null == x.current) return;
        let s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect(),
            n = x.current.getBoundingClientRect();
        o((l.top - s.top - n.height) / 2);
    });
    let I = (0, tI.M)(p),
        y = a.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = a.useMemo(() => (0, tU.tW)(t, tU.fY.REWARD), [t]),
        Q = s ? v + 8 : 0,
        { content_position: H, row_index: U, ...F } = (0, ee.fF)(K.uF.TROPHY_CASE_CARD),
        D = () => {
            l(!0), G.default.track(e_.HAw.QUEST_HOVER, { quest_id: t.id, ...F });
        },
        w = () => {
            l(!1);
        },
        P = (e) => {
            u(!0), G.default.track(e_.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == S || c
        ? null
        : (0, n.jsx)(ty.vN, {
              children: (0, n.jsxs)("div", {
                  ref: m,
                  tabIndex: 0,
                  onFocus: D,
                  onBlur: w,
                  onMouseEnter: D,
                  onMouseLeave: w,
                  className: i()(tB.kL, { [tB.yo]: s }),
                  children: [
                      null != E &&
                          b &&
                          null != O &&
                          (0, n.jsx)("div", {
                              ref: x,
                              className: tB.FX,
                              style: { top: r },
                              children: (0, n.jsx)(tH.A, {
                                  avatarDecorationOverride: O,
                                  user: E,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      C
                          ? (0, n.jsx)(tF.A, { className: tB.Sl })
                          : A
                            ? (0, n.jsx)(tk, {
                                  className: tB.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, n.jsx)(L.A, {
                                    className: tB.JU,
                                    autoPlay: !1,
                                    children: (0, n.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => P(M.url),
                                    }),
                                })
                              : (0, n.jsx)("img", {
                                    className: tB.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(M.url),
                                }),
                      (0, n.jsx)("div", { className: i()(tB.Lw, { [tB.en]: I, [tB.So]: !I }) }),
                      (0, n.jsx)("div", {
                          ref: h,
                          className: tB.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, n.jsx)(tq.Ay, {
                              logotypeClassName: i()(tB.wm, { [tB.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          ref: g,
                          className: tB.zH,
                          children: [
                              (0, n.jsx)(f.D, {
                                  className: tB.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: em.intl.format(em.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, n.jsx)(j.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "always-white",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: em.intl.format(em.t["kXVcV+"], { reward: R, claimedDate: _ }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var tG = s(396478);
function tW(e) {
    let { onClick: t } = e,
        l = (0, tQ.Ay)();
    return (0, n.jsxs)(tG.pp, {
        theme: l,
        children: [
            (0, n.jsx)(tG.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, n.jsx)(tG.SG, { note: em.intl.format(em.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var tz = s(975424);
function t$(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, X.Iq)();
    return l && 0 === s.length
        ? (0, n.jsx)(ec.y, { className: tz.u })
        : 0 === s.length
          ? (0, n.jsx)(tW, { onClick: () => t(X.NC.ALL) })
          : (0, n.jsx)("div", {
                className: tz.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, n.jsx)(tV, { quest: e }, e.id)),
            });
}
let tK = a.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var tY = s(868714),
    tJ = s(548411),
    tZ = s(554830),
    tX = s(689175),
    t0 = s(321503),
    t1 = s(522403);
let t8 = "data-scroll-target",
    t7 = `[${t8}]`,
    t2 = { anchors: [], pageSize: 1 };
function t3(e) {
    let {
            children: t,
            className: s,
            itemSelector: l = t7,
            maskWidth: r = 48,
            overflowAmount: o = 0,
            maskMarginMultiplier: c = 1,
        } = e,
        u = a.useRef(null),
        m = a.useRef(null),
        [h, x] = a.useState(!1),
        [E, g] = a.useState(!1),
        [{ anchors: f, pageSize: j }, v] = a.useState(t2),
        p = (0, d.bG)([S.A], () => S.A.useReducedMotion) ? "auto" : "smooth",
        _ = a.useCallback(() => {
            let e = u.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (x(e.scrollLeft > 0), g(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        N = a.useCallback(() => {
            v(
                (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: l, maskWidth: n } = e,
                        a = t.current?.getScrollerNode();
                    if (null == a || a.scrollWidth <= a.clientWidth) return t2;
                    let r = Array.from(a.querySelectorAll(s));
                    if (0 === r.length) return t2;
                    let i = r[0].offsetWidth,
                        o = r.length > 1 ? r[1].offsetLeft - r[0].offsetLeft - i : 0,
                        c = Math.max(1, Math.floor((a.clientWidth - 2 * n * l + o) / (i + o))),
                        u = r.length - c + 1;
                    return u <= 1
                        ? t2
                        : {
                              anchors: [
                                  0,
                                  ...r.slice(1, u - 1).map((e, t) => {
                                      let s = r[t + c];
                                      return (e.offsetLeft + s.offsetLeft + s.offsetWidth) / 2;
                                  }),
                                  a.scrollWidth,
                              ],
                              pageSize: c,
                          };
                })({ scrollerRef: u, itemSelector: l, maskWidth: r, maskMarginMultiplier: c }),
            );
        }, [r, l, c]),
        C = a.useCallback(
            (e) => {
                let t = u.current?.getScrollerNode();
                if (null == t || f.length < 2) return;
                let s = f.length - 1,
                    l = Math.max(0, t.scrollWidth - t.clientWidth),
                    n = f.map((e, n) => (0 === n ? 0 : n === s ? l : e - t.clientWidth / 2)),
                    a = (e) => Math.abs(e - t.scrollLeft),
                    r = Math.max(0, Math.min(s, n.reduce((e, t, s) => (a(t) < a(n[e]) ? s : e), 0) + e * j));
                t.scrollTo({ left: n[r], behavior: p });
            },
            [p, f, j],
        ),
        b = a.useCallback(
            (e) => {
                let t = u.current?.getScrollerNode();
                if (null == t) return;
                let s = e.target.closest(l);
                if (null == s || !t.contains(s)) return;
                let n = t.getBoundingClientRect(),
                    a = s.getBoundingClientRect(),
                    i = n.left + r - a.left,
                    o = a.right - (n.right - r);
                i > 0 ? t.scrollBy({ left: -i, behavior: p }) : o > 0 && t.scrollBy({ left: o, behavior: p });
            },
            [l, r, p],
        ),
        A = a.useCallback(() => {
            _(), N();
        }, [_, N]);
    (0, th.g)(m, A, [], { fireOnMount: !0 });
    let T = o > 0,
        O = (0, tY.A)(f);
    return (0, n.jsxs)("div", {
        className: i()(s, t1.m7),
        ref: m,
        style: {
            "--custom-scroller-mask-width": `${r}px`,
            "--custom-scroller-overflow-amount": `${o}px`,
            "--custom-scroller-scroll-behavior": p,
        },
        children: [
            (0, n.jsx)(eg.D, {
                "aria-label": em.intl.string(em.t.vgfxaA),
                className: i()(t1.k9, t1.RW, { [t1.Q2]: h }),
                onClick: () => C(-1),
                tabIndex: h ? 0 : -1,
                "aria-hidden": !h,
                children: (0, n.jsx)(tJ.Z, { color: ex.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, n.jsx)(eg.D, {
                "aria-label": em.intl.string(em.t.XiOHRX),
                className: i()(t1.k9, t1.K3, { [t1.Q2]: E }),
                onClick: () => C(1),
                tabIndex: E ? 0 : -1,
                "aria-hidden": !E,
                children: (0, n.jsx)(tZ.K, { color: ex.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, n.jsx)("div", {
                className: i()(t1.$u, { [t1.sF]: h, [t1.RC]: E, [t1.Ni]: T && !h, [t1.GA]: T && !E }),
                children: (0, n.jsx)(tX.zC, {
                    ref: u,
                    orientation: "horizontal",
                    onScroll: _,
                    onFocusCapture: b,
                    className: i()({ [t1.x2]: T }, t1.XG),
                    children: (0, n.jsxs)(t0.X.Provider, {
                        value: u,
                        children: [
                            t,
                            O.map((e, t) =>
                                (0, n.jsx)(
                                    "div",
                                    { "aria-hidden": !0, className: t1.fw, style: { insetInlineStart: `${e}px` } },
                                    t,
                                ),
                            ),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var t6 =
    (((l = {}).FEATURED = "featured"),
    (l.IN_PROGRESS = "in-progress"),
    (l.ENDING_SOON = "ending-soon"),
    (l.ORB = "orb"),
    (l.DISCOVERED = "discovered"),
    l);
let t4 = [
    { type: "featured-quests", identifier: "featured", title: em.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "in-progress", title: em.t.CHJy6z },
    { type: "quests", identifier: "ending-soon", title: em.t.PRg3qh },
    { type: "quests", identifier: "orb", title: em.t["0Uc94A"] },
    { type: "quests", identifier: "discovered", title: em.t["u9Ug++"] },
];
var t5 = s(548636);
function t9(e) {
    let { questIds: t, rowIndex: s, sectionIdentifier: l } = e,
        { targetQuestId: r, highlightCount: i, highlightAnimationProgress: o } = a.useContext(tK),
        c = null != r;
    return (0, n.jsx)(t3, {
        maskWidth: 48,
        overflowAmount: 25,
        maskMarginMultiplier: 0.75,
        children: (0, n.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": "382.6666666666667px",
                "--custom-extra-spacing-placeholder-size": "5px",
            },
            className: t5.FO,
            children: [
                t.map((e, t) => {
                    let a = r === e,
                        u = c && !a;
                    return (0, n.jsxs)(
                        tm.animated.div,
                        {
                            [t8]: "",
                            className: a ? t5.XB : void 0,
                            style: tf(a, u, o),
                            children: [
                                a && (0, n.jsx)("div", { className: t5.E4 }, i),
                                (0, n.jsx)(eG.Ay, {
                                    questId: e,
                                    isInFeaturedSection: l === t6.FEATURED,
                                    questContent: K.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: t,
                                    rowIndex: s,
                                    className: t5.d,
                                    sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                                }),
                            ],
                        },
                        `animated-wrapper-${e}`,
                    );
                }),
                (0, n.jsx)("div", { className: t5.fu }),
            ],
        }),
    });
}
var se = s(801365),
    st = s(814793);
let ss = 2 * tE.A.Millis.DAY,
    sl = new Map(t4.map((e) => [e.identifier, e]));
var sn = s(32304);
let sa = 4 * tE.A.Millis.SECOND,
    sr = a.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, hasSearchResults: l } = e,
            { sections: r } = ((e) => {
                let { sharedQuestId: t } = e,
                    {
                        quests: s,
                        isFetchingCurrentQuests: l,
                        hasFetched: n,
                    } = (0, X.Qh)(X.NC.ALL, { sortMethod: tS.kL.SUGGESTED, filters: [] }),
                    r = (0, d.bG)([el.A], () => el.A.getQuestHomeHero()),
                    i = (0, d.bG)([el.A], () => el.A.isFetchingQuestHomeHero()),
                    o = a.useRef([]),
                    c = a.useMemo(
                        () =>
                            i
                                ? []
                                : (function (e) {
                                      let { prevSections: t, quests: s, hero: l, sharedQuestId: n } = e,
                                          a = new Set(
                                              s.map((e) => {
                                                  let { id: t } = e;
                                                  return t;
                                              }),
                                          ),
                                          r = new Map(),
                                          i = new Set(),
                                          o = t4.map((e) => {
                                              let s = t?.find((t) => {
                                                      let { identifier: s } = t;
                                                      return s === e.identifier;
                                                  }),
                                                  l = [];
                                              return (
                                                  null != s && l.push(...s?.questIds.filter((e) => a.has(e))),
                                                  r.set(e.identifier, l.length),
                                                  l.forEach((e) => i.add(e)),
                                                  { ...e, questIds: l }
                                              );
                                          });
                                      for (let e of s) {
                                          if (i.has(e.id)) continue;
                                          let t = (function (e) {
                                              var t;
                                              let s,
                                                  { quest: l, hero: n, sharedQuestId: a, sectionCounts: r } = e;
                                              return (0, tg.Ic)(l)
                                                  ? null
                                                  : a === l.id
                                                    ? t6.DISCOVERED
                                                    : l.userStatus?.enrolledAt != null &&
                                                        l.userStatus?.claimedAt == null
                                                      ? t6.IN_PROGRESS
                                                      : null != n && (0, st.I0)(n, l.id)
                                                        ? t6.FEATURED
                                                        : new Date(l.config.expiresAt).valueOf() <= Date.now() + ss
                                                          ? t6.ENDING_SOON
                                                          : ((t = t6.FEATURED),
                                                              null == (s = sl.get(t)?.maxItems) || (r.get(t) ?? 0) < s)
                                                            ? t6.FEATURED
                                                            : (0, se.ks)(l.config)
                                                              ? t6.ORB
                                                              : null;
                                          })({ quest: e, hero: l, sharedQuestId: n, sectionCounts: r });
                                          if (null == t) continue;
                                          let s = o.find((e) => {
                                              let { identifier: s } = e;
                                              return s === t;
                                          });
                                          null != s &&
                                              (s.questIds.push(e.id), i.add(e.id), r.set(t, (r.get(t) ?? 0) + 1));
                                      }
                                      return o.filter((e) => e.questIds.length > 0);
                                  })({ prevSections: o.current, quests: s, hero: r, sharedQuestId: t }),
                        [s, r, t, i],
                    );
                return (
                    a.useEffect(() => {
                        o.current = c;
                    }, [c]),
                    { sections: c, hasFetched: n, isFetchingCurrentQuests: l || i }
                );
            })({ sharedQuestId: s }),
            [o, c] = a.useState(null),
            [u, m] = a.useState(0),
            h = a.useRef(null),
            [{ highlightAnimationProgress: x }, E] = (0, tx.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: sa },
            })),
            g = a.useCallback(
                (e) => {
                    if (null == e) return !1;
                    let t = document.getElementById((0, eG.sT)(e));
                    return (
                        null != t &&
                        (c(e),
                        m((e) => e + 1),
                        t.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        E({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || c(null);
                            },
                        }),
                        !0)
                    );
                },
                [c, m, E],
            );
        a.useImperativeHandle(t, () => ({ scrollToQuest: g }), [g]),
            a.useLayoutEffect(() => {
                if (null == s) {
                    h.current = null;
                    return;
                }
                h.current !== s && g(s) && (h.current = s);
            }, [s, g, r]);
        let j = a.useMemo(() => ({ targetQuestId: o, highlightCount: u, highlightAnimationProgress: x }), [o, u, x]);
        return (0, n.jsx)(tK.Provider, {
            value: j,
            children: (0, n.jsx)("div", {
                className: i()(sn.kL, { [sn.R]: l }),
                children: r.map((e, t) => {
                    let { identifier: s, questIds: l, title: a } = e;
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: sn.p9,
                            children: [
                                (0, n.jsx)(f.D, { variant: "heading-lg/medium", children: em.intl.string(a) }),
                                (0, n.jsx)(t9, { questIds: l, rowIndex: t, sectionIdentifier: s }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        });
    });
var si = s(353640),
    so = s(121894),
    sc = s(851936);
let su = (0, si.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, sc.L)({ location: tS.rE.QUEST_HOME_DESKTOP });
        if (s.info === eC.tE || t().elapsed >= 6e4) return;
        let l = performance.now() - t().startTime;
        l > 6e4 && (l = 6e4);
        let n = { elapsed: l };
        l - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${l}ms`), (n.lastOutputLogTime = l)),
            null == t().logger && (n.logger = s),
            (0, so.r)(() => e(n));
    },
}));
var sd = s(516226),
    sm = s(323889),
    sh = s(561844),
    sx = s(901406),
    sE = s(415441),
    sg = s(73473),
    sf = s(139384),
    sj = s(43990),
    sv = s(770178),
    sp = s(14233);
function s_(e, t) {
    let { row_index: s, ...l } = (0, ee.fF)(K.uF.QUEST_HOME_HERO);
    (0, sh.Qg)({
        adContentId: e,
        adCreativeType: sm.p.QUEST_HOME_HERO,
        event: t,
        properties: l,
        sourceQuestContent: K.uF.QUEST_HOME_HERO,
    });
}
let sN = a.forwardRef(function (e, t) {
    let { adContentId: s, topContent: l, title: r, subtitle: o, buttons: c, background: u, className: d } = e,
        [m, h] = a.useState("display-lg"),
        x = a.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        E = (0, sv.w)(x, [], { fireOnMount: !0 }),
        g = a.useCallback(() => s_(s, e_.HAw.QUEST_HOVER), [s]),
        v = a.useCallback(() => s_(s, e_.HAw.QUEST_HOVER_OFF), [s]);
    return (0, n.jsx)(sj.N, {
        theme: e_.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, n.jsx)("div", {
                className: i()(sp.iE, e, d),
                onMouseEnter: g,
                onMouseLeave: v,
                ref: (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, n.jsxs)("div", {
                    className: sp.FG,
                    children: [
                        (0, n.jsxs)(p.B, {
                            className: sp.Qs,
                            direction: "vertical",
                            justify: null != l ? "space-between" : "end",
                            children: [
                                l,
                                (0, n.jsxs)(p.B, {
                                    className: sp.yp,
                                    gap: 16,
                                    children: [
                                        (0, n.jsxs)(p.B, {
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(f.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: sp.DD,
                                                    children: r,
                                                }),
                                                (0, n.jsx)(j.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: sp.VA,
                                                    children: o,
                                                }),
                                            ],
                                        }),
                                        c,
                                    ],
                                }),
                            ],
                        }),
                        u,
                    ],
                }),
            }),
    });
});
var sS = s(194526),
    sC = s(731355),
    sb = s(621466),
    sA = s(508770),
    sT = s(406810),
    sO = s(628284),
    sR = s(65154),
    sL = s(687966),
    sI = s(496431),
    sy = s(975807),
    sM = s(58703),
    sQ = s(18437),
    sH = s(453384),
    sU = s(646764),
    sF = s(398025),
    sD = s(691464);
function sw(e) {
    let [t, s] = a.useState(!1),
        l = a.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        n = a.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: l, onMouseLeave: n, onFocus: l, onBlur: n } };
}
function sP(e) {
    let { hero: t, contentPosition: s } = e,
        l = a.useRef(null),
        { isHovering: r, hoverProps: o } = sw(
            a.useCallback(
                (e) => {
                    (0, sh.Qg)({
                        adContentId: t.id,
                        adCreativeType: sm.p.QUEST_HOME_HERO,
                        event: e ? e_.HAw.QUEST_HOVER : e_.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: K.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ee.jO)(K.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    a.useEffect(() => {
        let e = l.current;
        (0, sb.vq)(e, HTMLVideoElement) && (r ? ((e.currentTime = 0), e.play().catch(eC.tE)) : e.pause());
    }, [r]);
    let { hoverSpring: c } = (0, tx.z)({ hoverSpring: +!!r, config: tm.config.gentle });
    return (0, n.jsxs)("div", {
        className: i()(sD.FW, sD.Bm),
        [t8]: !0,
        ...o,
        children: [
            (0, n.jsx)("div", {
                className: sD.Ve,
                children: (0, n.jsx)(sE.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: i()(sD.pv, sD.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: i()(sD.pv, sD.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, n.jsx)(tm.animated.div, {
                className: sD.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, sy.A)(t.cta.url),
                            (0, sh.vK)({
                                adContentId: t.id,
                                adCreativeType: sm.p.QUEST_HOME_HERO,
                                questContent: K.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: ee.Cy.OPEN_GAME_LINK,
                                questContentPosition: s,
                                sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function sk(e) {
    let { quest: t, onQuestCtaClick: s, contentPosition: l } = e,
        r = (0, tQ.Ay)(),
        o = a.useMemo(() => (0, tU.tW)(t, tU.fY.LOGO_TYPE, (0, tI.M)(r) ? e_.NJ8.DARK : e_.NJ8.LIGHT).url, [t, r]),
        c = a.useMemo(() => new Date(t.config.expiresAt), [t.config.expiresAt]),
        { days: u, hours: d, minutes: m, seconds: h } = (0, sI.A)(c, tE.A.Millis.MINUTE),
        x = a.useMemo(
            () =>
                (0, sM.uN)(
                    { days: u, hours: d, minutes: m, seconds: h },
                    { days: em.t["Ux/De1"], hours: em.t.Lzd5Ie, minutes: em.t.odmpbP },
                ),
            [u, d, m, h],
        ),
        g = a.useMemo(() => (0, se.mq)(t.config), [t.config]),
        f = a.useMemo(
            () =>
                (function (e) {
                    switch ((0, tt.xv)(e).type) {
                        case tL.l.IN_GAME:
                            return em.intl.string(em.t["O/J2kr"]);
                        case tL.l.COLLECTIBLE:
                            return em.intl.string(em.t.Jg17Ut);
                        case tL.l.VIRTUAL_CURRENCY:
                            return em.intl.string(em.t.ElYQFS);
                        default:
                            return (0, se.mq)(e);
                    }
                })(t.config),
            [t.config],
        ),
        { completedRatio: v, completedRatioDisplay: _ } = (0, X.O9)(t),
        N = a.useMemo(() => (0, se._Z)(t.config), [t.config]),
        S = (0, sQ.Ut)(),
        C = (0, sQ.u0)(),
        { isHovering: b, hoverProps: A } = sw(
            a.useCallback(
                (e) => {
                    C({
                        questId: t.id,
                        event: e ? e_.HAw.QUEST_HOVER : e_.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: K.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ee.jO)(K.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [C, t.id, l],
            ),
        ),
        { hoverSpring: T } = (0, tx.z)({ hoverSpring: +!!b, config: tm.config.gentle });
    return (0, n.jsxs)("div", {
        className: i()(sD.FW, sD.$R),
        [t8]: !0,
        ...A,
        children: [
            (0, n.jsxs)(p.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, n.jsx)(sA.E, { type: { text: f }, variant: "expressive" }),
                    (0, n.jsx)(tm.animated.div, {
                        style: { opacity: (0, sF.a)(T.to([0, 1], [1, 0])) },
                        children: (0, n.jsx)(sA.E, { type: { text: x }, icon: sT.O }),
                    }),
                ],
            }),
            (0, n.jsx)(tm.animated.div, {
                className: sD.Tr,
                style: { transform: T.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, n.jsx)(sH.A, {
                    percentComplete: v,
                    overlayText: b && null != N ? `${N}` : void 0,
                    size: 100,
                    children: (0, n.jsx)(sU.A, {
                        quest: t,
                        questContent: K.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: b,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, n.jsx)(tm.animated.div, {
                className: sD.tw,
                style: {
                    opacity: (0, sF.a)(T.to([0, 1], [1, 0])),
                    transform: T.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, n.jsxs)(p.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)("div", {
                            className: sD.aP,
                            children: (0, n.jsx)("img", { src: o, alt: t.config.messages.gameTitle, className: sD.rC }),
                        }),
                        (0, n.jsxs)(p.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(j.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    className: sD.Ht,
                                    children: g,
                                }),
                                (0, n.jsxs)(p.B, {
                                    align: "start",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, n.jsxs)(p.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, n.jsx)(sO.y, { size: "xs", color: ex.A.colors.ICON_MUTED.css }),
                                                (0, n.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.config.messages.gamePublisher,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(p.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, st.pv)(t.config) === sC.Z.VIDEO
                                                    ? (0, n.jsx)(sR.S, {
                                                          size: "xs",
                                                          color: ex.A.colors.ICON_MUTED.css,
                                                      })
                                                    : (0, n.jsx)(sL._, {
                                                          size: "xs",
                                                          color: ex.A.colors.ICON_MUTED.css,
                                                      }),
                                                (0, n.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: _,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(tm.animated.div, {
                className: sD.um,
                style: { transform: T.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        s(t.id),
                            S({
                                questId: t.id,
                                questContent: K.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: ee.Cy.VIEW_QUESTS,
                                questContentPosition: l,
                                sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: em.intl.string(em.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var sq = s(648731);
function sB(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: l } = e;
    return (0, n.jsx)(t3, {
        className: sq.v,
        children: (0, n.jsxs)(p.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, n.jsx)(sg.R, {
                    adContentId: t.id,
                    adCreativeType: sm.p.QUEST_HOME_HERO,
                    questContent: K.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, n.jsx)(sP, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, t) =>
                    (0, n.jsx)(
                        sg.R,
                        {
                            questOrQuests: e,
                            questContent: K.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: t + 1,
                            sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                            children: (s) =>
                                (0, n.jsx)("div", {
                                    ref: (e) => {
                                        s.current = e;
                                    },
                                    children: (0, n.jsx)(sk, { quest: e, onQuestCtaClick: l, contentPosition: t + 1 }),
                                }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
}
var sV = s(95115);
function sG() {
    return (0, n.jsx)("div", { className: sV.Np });
}
function sW(e) {
    let { heroImage: t, heroVideo: s } = e,
        l = a.useRef(null);
    (0, sf.A)(l, tS.rE.QUEST_HOME_DESKTOP);
    let r = a.useMemo(() => (null != s ? (0, tU.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, n.jsxs)("div", {
              className: sV.Tv,
              children: [
                  (0, n.jsx)(sG, {}),
                  (0, n.jsx)("div", {
                      className: sV.LO,
                      children: (0, n.jsx)("img", { className: sV.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: i()(sV.LO, sV.jx, sV.hw),
                      children: (0, n.jsx)("img", { className: sV.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: i()(sV.LO, sV.jx, sV.Co),
                      children: (0, n.jsx)("img", { className: sV.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: sV.Tv,
              children: [
                  (0, n.jsx)(sG, {}),
                  (0, n.jsx)("div", {
                      className: sV.LO,
                      children: (0, n.jsx)(sE.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: l,
                          imageAsset: {
                              alt: "",
                              className: sV.LY,
                              asset: { url: r, mimetype: (0, tU.vm)(r), isAnimated: !1 },
                              assetId: r,
                          },
                          videoAsset: {
                              alt: "",
                              className: sV.LY,
                              asset: { url: s, mimetype: (0, tU.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function sz(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        l = (0, d.bG)([el.A], () => el.A.quests),
        { shelfQuests: r, isShelfEnabled: i } = (0, X.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, sS.I)();
    a.useEffect(() => {
        o();
    }, [o]);
    let c = a.useMemo(() => t.questIds?.find((e) => l.has(e)), [l, t.questIds]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(sg.R, {
                adContentId: t.id,
                adCreativeType: sm.p.QUEST_HOME_HERO,
                questContent: K.uF.QUEST_HOME_HERO,
                sourceQuestContent: K.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, n.jsx)(sN, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, n.jsxs)(p.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, n.jsx)("img", { src: t.sponsorImage, alt: "", className: sV.wm }),
                                (0, n.jsx)(j.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: sV.yu,
                                    children: em.intl.string(em.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, n.jsxs)(x.e, {
                            children: [
                                (0, n.jsx)(E.$, {
                                    onClick: () => {
                                        (0, sx._Q)(
                                            { adContentId: t.id, adCreativeType: sm.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: K.uF.QUEST_HOME_HERO,
                                                ctaContent: ee.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: K.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != c &&
                                    (0, n.jsx)(E.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, sh.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: sm.p.QUEST_HOME_HERO,
                                                    questContent: K.uF.QUEST_HOME_HERO,
                                                    questContentCTA: ee.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: K.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: em.intl.string(em.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, n.jsx)(sW, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, n.jsx)(sB, { hero: t, shelfQuests: r, onQuestCtaClick: s }),
        ],
    });
}
function s$() {
    return (0, n.jsx)("div", { className: i()(sp.iE, sp.FG, sp.B3), children: (0, n.jsx)(ec.y, {}) });
}
function sK(e) {
    let { alt: t, ariaLabel: s, ariaHidden: l, role: a, width: r = 288, height: i = 192 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: i },
        src: "https://cdn.discordapp.com/assets/content/f7e308880e4b4db999ae2e2c43f12f7882f717158ce2520aa36a9d60fb68c367.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": l,
        role: a ?? "img",
    });
}
var sY = s(298537);
let sJ = function (e) {
    let { matchingQuestIds: t } = e;
    return (0, n.jsxs)(p.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: sY.kL,
        children: [
            (0, n.jsxs)(f.D, {
                variant: "heading-lg/medium",
                children: [em.intl.string(em.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, n.jsxs)(p.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: sY.y7,
                      children: [
                          (0, n.jsx)(sK, { alt: em.intl.string(em.t["Xe+fJM"]) }),
                          (0, n.jsxs)(p.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-lg/medium",
                                      children: em.intl.string(em.t["Xe+fJM"]),
                                  }),
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-sm/medium",
                                      children: em.intl.string(em.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsx)("div", {
                      className: sY.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": "382.6666666666667px",
                          "--custom-quest-grid-gap": "20px",
                      },
                      children: t.map((e, t) =>
                          (0, n.jsx)(
                              eG.Ay,
                              {
                                  eagerLoadAssets: !0,
                                  questId: e,
                                  questContent: K.uF.QUEST_HOME_DESKTOP,
                                  contentPosition: t,
                                  rowIndex: Math.floor(t / 3),
                                  className: sY.d,
                                  sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                              },
                              e,
                          ),
                      ),
                  }),
        ],
    });
};
var sZ = s(379078),
    sX = s(704554);
let s0 = {
    searchType: sZ.n.FUZZY,
    searchStringGenerator: (e) =>
        [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(e5.Vq),
    sortType: sZ.r.JARO_WINKLER,
    throttleMs: 200,
};
var s1 = s(758836),
    s8 = s(613057),
    s7 = s(935824);
let s2 = a.createContext({});
function s3(e) {
    let { banner: t, children: s, header: l, withFullBleedBanner: r = !1 } = e,
        { onScroll: i, scrollerRef: o } = a.useContext(s2);
    return (0, n.jsxs)(t0.X.Provider, {
        value: o,
        children: [
            l,
            (0, n.jsxs)(w.A, {
                onScroll: i,
                ref: o,
                children: [
                    r && t,
                    (0, n.jsxs)(F.A, { className: s7.Jo, innerClassName: s7.FG, children: [!r && t, s] }),
                ],
            }),
        ],
    });
}
function s6(e) {
    let { selectedTab: t, onSelectTab: s, tabs: l, endContent: a } = e;
    return (0, n.jsx)(D.S, { selectedTabId: t, handleTransition: s, tabs: l, endContent: a, icon: h.r });
}
function s4(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: l } = (0, q.Z)({ location: tS.rE.QUEST_HOME_DESKTOP }),
        r = (0, d.bG)([S.A], () => S.A.useReducedMotion),
        i = (0, d.bG)([V.A], () => V.A.isFocused()),
        { ref: o, inViewport: c } = (0, e4.p)(),
        u = a.useRef(null);
    if (
        (a.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (i && c && !r)
                    ? u.current.paused && !r && c && i && u.current.play()
                    : u.current.pause());
        }, [r, c, i]),
        l)
    ) {
        let e = (0, W.TM)();
        return (0, n.jsx)(L.A, {
            ref: (e) => {
                (u.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: s,
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, n.jsx)("source", {
                src: e
                    ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                    : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, n.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
        className: s,
        alt: "",
        onLoad: t,
    });
}
function s5(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, q.Z)({ location: tS.rE.QUEST_HOME_DESKTOP });
    return (0, n.jsxs)("div", {
        className: i()(s7.Tv, { [s7.lJ]: s }),
        children: [
            (0, n.jsx)(sG, {}),
            (0, n.jsx)("div", { className: i()(s7.nz, { [s7.ZZ]: s }) }),
            (0, n.jsx)(s4, { onLoadComplete: t, className: i()(s7.Fe, { [s7.H4]: s, [s7.Q8]: !s }) }),
        ],
    });
}
function s9(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, q.Z)({ location: tS.rE.QUEST_HOME_DESKTOP }),
        l = a.useCallback(() => {
            s ? window.open(e_.X7G.PAID_TERMS_ORBS) : window.open(z.A.getArticleURL(e_.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, n.jsx)(sN, {
        adContentId: s ? tS.yr : tS.uz,
        title: s ? em.intl.format(em.t.BCBIlp, {}) : em.intl.format(em.t.lmMBfy, {}),
        subtitle: s ? em.intl.format(em.t.U9FY0J, {}) : em.intl.string(em.t.oWCrBq),
        buttons: s
            ? (0, n.jsxs)(x.e, {
                  children: [
                      (0, n.jsx)(E.$, {
                          variant: "overlay-primary",
                          text: em.intl.string(em.t["1Wm127"]),
                          onClick: () =>
                              (0, O.Cz)({
                                  tab: s1.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: C.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, n.jsx)(E.$, {
                          variant: "overlay-secondary",
                          text: em.intl.string(em.t["7kTAgJ"]),
                          onClick: l,
                      }),
                  ],
              })
            : (0, n.jsx)(E.$, {
                  variant: "overlay-primary",
                  text: em.intl.string(em.t.hvVgAZ),
                  onClick: l,
                  icon: g.I,
                  iconPosition: "end",
              }),
        background: (0, n.jsx)(s5, { onAssetLoad: t }),
    });
}
function le(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, previewAdCreativeId: l, hasSearchResults: a } = e,
        { questHomeHero: r, isLoading: o } = (0, X.lg)(l);
    return (0, n.jsx)("div", {
        className: i()(s7.iS, { [s7.R]: a }),
        children: o
            ? (0, n.jsx)(s$, {})
            : null != r
              ? (0, n.jsx)(sz, { hero: r, onQuestCtaClick: s })
              : (0, n.jsx)(s9, { onAssetLoad: t }),
    });
}
function lt(e) {
    let { onLoadComplete: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: i()(s7.BW, s7.rZ),
                alt: "",
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: i()(s7.BW, s7.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: i()(s7.BW, s7.rZ),
                alt: "",
            }),
        ],
    });
}
let ls = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, o.zy)(),
        l = (0, o.W6)(),
        r = a.useMemo(() => (0, P.B)(s.pathname, e_.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        h = a.useMemo(() => new URLSearchParams(s.search).get(X.L1.AD_CREATIVE_IDS), [s.search]),
        x = (0, d.bG)([T.A], () => T.A.getState("quests")),
        {
            selectedTab: g,
            onSelectTab: S,
            tabs: L,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = Y.A.useField("tab"),
                l = (0, o.zy)(),
                n = (0, X.p5)(),
                { enabled: r } = Z.A8.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP });
            a.useEffect(() => {
                Y.A.getState().initializeFromUrl(l.search, n);
            }, [l.search, n]);
            let i = a.useCallback((e) => {
                Y.A.getState().setTab(e);
            }, []);
            return {
                tabs: a.useMemo(
                    () =>
                        [
                            { id: X.NC.ALL, label: r ? em.intl.string(em.t.Jt6u7B) : em.intl.string(em.t["0SzXmi"]) },
                            t
                                ? {
                                      id: X.NC.CLAIMED,
                                      label: r ? em.intl.string(em.t["3TVY/R"]) : em.intl.string(em.t.zyNYNB),
                                  }
                                : null,
                            t && n ? { id: X.NC.PREVIEW_TOOL, label: em.intl.string(em.t.BDUDau) } : null,
                        ].filter(e5.Vq),
                    [t, n, r],
                ),
                selectedTab: s,
                onSelectTab: i,
            };
        })({ withClaimedQuestsTab: !r }),
        {
            query: y,
            setQuery: M,
            matchingQuestIds: F,
        } = (() => {
            let [e, t] = a.useState(""),
                [s, l] = a.useState(null),
                n = (0, d.yK)([el.A], () =>
                    (0, X.mn)(Array.from(el.A.quests.values()), { sortMethod: tS.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                i = "" !== r,
                o = a.useCallback(
                    (e) => {
                        l(
                            i
                                ? e
                                      .map((e) => {
                                          let { id: t } = e;
                                          return t;
                                      })
                                      .filter(e5.Vq)
                                : null,
                        );
                    },
                    [i],
                );
            return (0, sX.RT)(r, n, o, s0), { matchingQuestIds: s, query: e, setQuery: t };
        })();
    a.useLayoutEffect(() => {
        r && g === X.NC.CLAIMED && Y.A.setState({ tab: X.NC.ALL });
    }, [r, g]);
    let { onScroll: D } = (0, H.G)(),
        w = J.A.getState().getUtmCurrentContext(),
        V = su((e) => e.registerAssetLoad),
        W = a.useRef(w);
    a.useEffect(() => {
        W.current = w;
    }),
        a.useEffect(() => {
            let { current: e } = W;
            (0, b.x)({
                name: u.ImpressionNames.QUEST_HOME,
                type: u.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: g,
                },
            });
        }, [g]);
    let { enabled: z } = (0, q.Z)({ location: tS.rE.QUEST_HOME_DESKTOP });
    (0, R.HU)({ location: em.intl.string(em.t.JALI2K) });
    let et = a.useRef(null),
        { enabled: es } = Z.A8.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        en = a.useRef(null),
        ea = a.useCallback((e) => {
            en.current?.scrollToQuest(e);
        }, []),
        er = a.useMemo(() => ((0, $.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        ei = a.useCallback(() => {
            (0, k.Y)({
                pageType: e_.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: e_.JJy.ORBS_BALANCE_MENU,
                ctaObject: e_.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, O.Cz)({ tab: s1.G2.ORBS, analyticsLocations: [], analyticsSource: C.A.ORBS_BALANCE_MENU });
        }, []);
    a.useEffect(() => {
        (0, N.I)(e_.BVt.QUEST_HOME);
    }, []),
        a.useEffect(() => {
            Q.trigger();
        }, []),
        a.useEffect(() => {
            if (null != x) return;
            let e = new URLSearchParams(s.search),
                n = e.get(X.L1.TAB);
            if (n === X.NC.PREVIEW_TOOL) {
                let t = e.get(X.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", e_.e$_.DEEP_LINK, {
                    type: s8.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: n },
                });
                return;
            }
            let a = performance.getEntriesByType("navigation")[0];
            if ("POP" === l.action && a?.type === "navigate" && t && n !== X.NC.PREVIEW_TOOL) {
                let t = (0, $.uJ)(s.hash) ? null : s.hash.substring(1),
                    l = e.get(X.L1.SORT),
                    a = e.get(X.L1.FILTER),
                    r = e.get(X.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", e_.e$_.DEEP_LINK, {
                    type: s8.XK.QUEST_HOME,
                    params: { questId: (0, $.uJ)(t) ? void 0 : t, sort: l, filter: a, tab: n, adCreativeIds: r },
                });
            }
        }, [s.search, x, l.action, s.hash, t]),
        a.useEffect(() => {
            t && (0, I.Dr)(m.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eo = a.useCallback(() => {
            (0, e6.navigateToQuestHome)({ fromContent: K.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                G.default.track(e_.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: ee.Cy.VIEW_QUESTS,
                    click_id: (0, c.A)(),
                    is_targeted: !1,
                    ...(0, ee.fF)(K.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        ec = a.useCallback(
            (e) => {
                l.replace({ ...l.location, hash: void 0 }), et.current?.scrollToTop({ animate: !1 }), S(e);
            },
            [l, S],
        ),
        eu = a.useCallback(() => {
            M("");
        }, [M]);
    return (0, n.jsx)(sd.M.Provider, {
        value: a.useMemo(() => ({ onAssetLoadComplete: V }), [V]),
        children: (0, n.jsx)(s2.Provider, {
            value: a.useMemo(() => ({ onScroll: D, scrollerRef: et }), [D, et]),
            children: (0, n.jsx)("div", {
                className: i()(s7.kL, { [s7.KY]: !t }),
                children: r
                    ? (0, n.jsx)(s3, {
                          withFullBleedBanner: !0,
                          header: (0, n.jsx)(s6, { selectedTab: g, onSelectTab: ec, tabs: L }),
                          banner: (0, n.jsx)(U.A, {
                              title: em.intl.string(em.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, n.jsx)(E.$, {
                                  variant: "overlay-primary",
                                  text: em.intl.string(em.t.GURBQl),
                                  onClick: eo,
                              }),
                              className: s7.Gj,
                              children: (0, n.jsx)(lt, { onLoadComplete: V }),
                          }),
                          children: (0, n.jsxs)("div", {
                              className: s7.kj,
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-xl/semibold",
                                      children: em.intl.string(em.t.z8YP2A),
                                  }),
                                  (0, n.jsx)(j.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: em.intl.string(em.t.HdKh65),
                                  }),
                                  (0, n.jsx)(v.Q, {
                                      text: em.intl.string(em.t["1CdL8d"]),
                                      onClick: eo,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, n.jsx)(s3, {
                          header: (0, n.jsx)(s6, {
                              selectedTab: g,
                              onSelectTab: ec,
                              tabs: L,
                              endContent: (0, n.jsxs)(p.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      es &&
                                          (0, n.jsx)(_.I, {
                                              query: y,
                                              onChange: M,
                                              placeholder: em.intl.string(em.t.y10TI2),
                                              onClear: eu,
                                              size: "sm",
                                          }),
                                      z &&
                                          (0, n.jsx)(B.SS, {
                                              analyticsPage: e_.liQ.GLOBAL_DISCOVERY_QUESTS,
                                              cardAlignment: B.cP.END,
                                              ctaText: em.intl.string(em.t["J+vlIR"]),
                                              ctaOnClick: ei,
                                          }),
                                  ],
                              }),
                          }),
                          banner:
                              g === X.NC.ALL &&
                              (0, n.jsx)(le, {
                                  onAssetLoad: V,
                                  onQuestCtaClick: ea,
                                  hasSearchResults: null != F,
                                  previewAdCreativeId: h,
                              }),
                          children:
                              g === X.NC.CLAIMED
                                  ? (0, n.jsx)(t$, { onSelectTab: ec })
                                  : g === X.NC.PREVIEW_TOOL
                                    ? (0, n.jsx)(e3, {})
                                    : es
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(sr, {
                                                    ref: en,
                                                    deepLinkedQuestId: er,
                                                    hasSearchResults: null != F,
                                                }),
                                                null != F && (0, n.jsx)(sJ, { matchingQuestIds: F }),
                                            ],
                                        })
                                      : (0, n.jsx)(tO, { ref: en }),
                      }),
            }),
        }),
    });
};
