s.r(t), s.d(t, { default: () => nA }), s(323874), s(14289), s(35956);
var n,
    l = s(627968),
    r = s(64700),
    a = s(503698),
    i = s.n(a),
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
    C = s(892547),
    _ = s(944791),
    S = s(775602),
    N = s(793574),
    b = s(139286),
    A = s(197111),
    O = s(10088),
    T = s(859040),
    R = s(726249),
    L = s(607470),
    I = s(826673),
    y = s(840251),
    M = s(688151);
let Q = new y.E([], M.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var U = s(711111),
    H = s(701508),
    D = s(979590),
    w = s(749638),
    F = s(783531),
    q = s(334465),
    P = s(318346),
    k = s(371446),
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
    en = s(859703);
s(667532);
var el = s(783878),
    er = s(408278),
    ea = s(663417),
    ei = s(922016),
    eo = s(624479),
    ec = s(289873),
    eu = s(416052),
    ed = s(417098),
    em = s(375708);
let eh = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, l.jsx)(ed.$T, {
        color: ed.Hv.DANGER,
        children: (0, l.jsx)("div", { children: null != s ? s : em.intl.string(em.t.ZErSg5) }),
    });
};
var ex = s(661531),
    eE = s(602853),
    eg = s(939249),
    ef = s(817281),
    ej = s(688810),
    ev = s(487245),
    ep = s(363195),
    eC = s(652215),
    e_ = s(398876);
let eS = function () {
    let { analyticsLocations: e } = (0, ej.Ay)(),
        t = (0, d.bG)([ep.A], () => ep.A.theme),
        s = r.useRef(null);
    r.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, eE.r)(ex.A.colors.BACKGROUND_BASE_LOW, eC.NJ8.LIGHT),
        a = (0, eE.r)(ex.A.colors.BACKGROUND_BASE_LOW, eC.NJ8.DARKER),
        i = (0, eE.r)(ex.A.colors.BACKGROUND_BASE_LOW, eC.NJ8.MIDNIGHT),
        o = r.useMemo(
            () => [
                { theme: eC.NJ8.LIGHT, label: em.t.K2sFfo, color: n.hex() },
                { theme: eC.NJ8.DARKER, label: em.t.b8Cei3, color: a.hex() },
                { theme: eC.NJ8.MIDNIGHT, label: em.t.Do4ZJx, color: i.hex() },
            ],
            [n, a, i],
        ),
        c = r.useCallback(
            (t) => {
                (0, ev.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, ef.u_)({ theme: t });
            },
            [e],
        ),
        u = r.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, l.jsx)("div", {
        className: e_.N,
        children: (0, l.jsxs)("div", {
            className: e_.t7,
            children: [
                o.map((e) =>
                    (0, l.jsxs)(
                        eg.D,
                        {
                            tag: "div",
                            className: e_.Du,
                            onClick: () => c(e.theme),
                            "aria-label": em.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, l.jsx)("div", {
                                    className: `${e_.WT} ${t === e.theme ? e_.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, l.jsx)("span", { className: e_.i, children: em.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, l.jsx)(er.K, {
                    onClick: u,
                    "aria-label": em.intl.string(em.t.yBZMsQ),
                    icon: ea.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eN = s(818348),
    eb = s(60857);
let eA = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: a } = e,
        [i, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        m = r.useRef(null),
        h = (0, X.pT)(),
        g = (0, d.bG)([en.A], () => (null != t ? en.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, d.bG)([en.A], () => null != t && en.A.isFetchingQuestPreview(t), [t]),
        j = r.useMemo(() => {
            let e = h.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [h, t]),
        v = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, es.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        p = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, es.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = r.useCallback(async () => {
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
        _ = r.useCallback(
            (e) => {
                (0, $.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, l.jsxs)("div", {
        className: eb.Fr,
        children: [
            (0, l.jsx)("div", {
                children: (0, l.jsx)("div", {
                    className: eb.Br,
                    children: (0, l.jsxs)("div", {
                        className: eb.bo,
                        children: [
                            (0, l.jsx)(eS, {}),
                            (0, l.jsxs)("div", {
                                className: eb.b8,
                                children: [
                                    (0, l.jsx)(
                                        el.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: _,
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
                                        `${t}-${n?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, l.jsx)(er.K, {
                                        onClick: a,
                                        "aria-label": em.intl.string(em.t.wzzjk9),
                                        icon: ea.f,
                                        loading: f,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != n &&
                (0, l.jsx)("div", {
                    className: eb.in,
                    children: (0, l.jsxs)(x.e, {
                        className: eb.xv,
                        children: [
                            (0, l.jsx)(E.$, {
                                onClick: v,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: em.intl.string(em.t.jQEfRT),
                            }),
                            (0, l.jsx)(E.$, {
                                onClick: p,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: em.intl.string(em.t.taqkwK),
                            }),
                            (0, l.jsx)(E.$, {
                                onClick: C,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: em.intl.string(em.t.cKSLr4),
                            }),
                            (0, l.jsx)(ei.Y, {
                                targetElementRef: m,
                                shouldShow: c,
                                onRequestClose: () => u(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, l.jsx)("div", {
                                        className: eb.PP,
                                        children: (0, l.jsx)("div", {
                                            className: eb.sH,
                                            children: (0, l.jsx)(eu.A, {
                                                value: eN.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: em.intl.string(em.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, l.jsx)(er.K, {
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
            null != g ? (0, l.jsx)(eh, { error: g }) : null,
            f ? (0, l.jsx)(ec.y, {}) : null,
        ],
    });
};
var eO = s(364522),
    eT = s(761508),
    eR = s(797788);
let eL = () => (0, l.jsx)("div", { className: eR.y });
var eI = s(834615),
    ey = s(332544);
let eM = function (e) {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: ey.x3,
        children: (0, l.jsxs)("div", {
            className: ey.B0,
            children: [
                (0, l.jsx)(f.D, {
                    className: ey.R_,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t.L2mlUb),
                }),
                (0, l.jsx)(eI.A, { quest: t }),
            ],
        }),
    });
};
var eQ = s(241124),
    eU = s(28082),
    eH = s(717695),
    eD = s(763578),
    ew = s(111113);
let eF = function (e) {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: ey.x3,
        children: (0, l.jsxs)("div", {
            className: eD.wp,
            children: [
                (0, l.jsx)(f.D, {
                    className: eD.Oo,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t.rjVPdM),
                }),
                (0, l.jsx)("div", {
                    className: eD.RE,
                    children: (0, l.jsx)("div", {
                        className: eD.Z,
                        children: (0, l.jsx)("div", {
                            className: ew.C3,
                            children: (0, l.jsx)(eH.A, {
                                children: (0, l.jsx)(eQ.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, l.jsx)(eU.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eq = s(961974);
let eP = (e) => {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: ey.x3,
        children: (0, l.jsxs)("div", {
            className: ey.B0,
            children: [
                (0, l.jsx)(f.D, {
                    className: ey.R_,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t.gWinpQ),
                }),
                (0, l.jsx)("div", {
                    className: ey.YT,
                    children: (0, l.jsx)(eq.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var ek = s(711038),
    eB = s(330034);
let eV = function (e) {
    let { questId: t } = e;
    return (0, l.jsx)("div", {
        className: ey.x3,
        children: (0, l.jsxs)("div", {
            className: ey.B0,
            children: [
                (0, l.jsx)(f.D, { variant: "heading-md/semibold", children: em.intl.string(em.t.IcljUu) }),
                (0, l.jsx)("div", {
                    className: eB.wu,
                    children: (0, l.jsx)("span", { className: eB.cy, children: em.intl.string(em.t.q97mEu) }),
                }),
                (0, l.jsx)("div", {
                    className: eB.oU,
                    children: (0, l.jsx)("div", {
                        className: eB.zx,
                        children: (0, l.jsx)("div", {
                            className: eB.Lj,
                            children: (0, l.jsx)("div", {
                                className: eB.n0,
                                children: (0, l.jsx)(ek.A, { questId: t }),
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
    return (0, l.jsx)("div", {
        className: ey.x3,
        children: (0, l.jsxs)("div", {
            className: ey.B0,
            children: [
                (0, l.jsx)(f.D, {
                    className: ey.R_,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t["5wnpF3"]),
                }),
                (0, l.jsx)(eG.Ay, {
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
            [s, n] = r.useState(!1),
            a = r.useRef(null),
            o = (0, d.bG)([eY.default], () => eY.default.getCurrentUser()),
            c = eJ.Ay.useName(o),
            u = (0, eK.A)(o?.id),
            m = r.useCallback(
                (e) =>
                    (0, l.jsx)(eZ.A, {
                        name: c,
                        quest: t,
                        memberListItemRef: a,
                        applicationStream: u,
                        ...e,
                        closePopout: () => {
                            n(!1);
                        },
                    }),
                [t, u, c],
            );
        return (0, l.jsx)("div", {
            className: ey.x3,
            children: (0, l.jsxs)("div", {
                className: ey.B0,
                children: [
                    (0, l.jsx)(f.D, {
                        className: eX.R_,
                        variant: "heading-md/semibold",
                        children: em.intl.string(em.t.jY7Zxg),
                    }),
                    (0, l.jsx)("div", { className: eX.$Q, children: em.intl.string(em.t.q3hbne) }),
                    (0, l.jsx)("div", {
                        className: eX.k0,
                        children: (0, l.jsx)(ei.Y, {
                            targetElementRef: a,
                            renderPopout: m,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => n(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: ei.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, l.jsx)("div", {
                                    ref: a,
                                    className: i()(eX.Tn, { [eX.wH]: s }),
                                    children: (0, l.jsx)(eg.D, {
                                        onClick: () => n(!s),
                                        tabIndex: 0,
                                        children: (0, l.jsxs)("div", {
                                            className: eX.lm,
                                            children: [
                                                (0, l.jsx)(ez.eu, {
                                                    size: e$._3.SIZE_32,
                                                    src: o?.getAvatarURL(void 0, 32),
                                                    status: eC.clD.ONLINE,
                                                    "aria-label": o?.username,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: eX.Fj,
                                                    children: [
                                                        (0, l.jsx)(j.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, l.jsx)(j.E, {
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
            n = (0, d.bG)([en.A], () => en.A.getQuest(t));
        if (null != (0, d.bG)([en.A], () => en.A.getFetchQuestPreviewError(t)) || null == n) return null;
        let r = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                r("quest_bar") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eF, { quest: n }), (0, l.jsx)(eL, {})] }),
                r("home_card") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eW, { quest: n }), (0, l.jsx)(eL, {})] }),
                r("share_embed") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eV, { questId: n.id }), (0, l.jsx)(eL, {})] }),
                r("channel_call_header") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eP, { quest: n }), (0, l.jsx)(eL, {})] }),
                r("members_list") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(e0, { quest: n }), (0, l.jsx)(eL, {})] }),
                r("activity_panel") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eM, { quest: n }), (0, l.jsx)(eL, {})] }),
            ],
        });
    };
var e2 = s(497275);
function e8(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: a } = e,
        i = [
            { value: "quest_bar", label: em.intl.string(em.t.rjVPdM) },
            { value: "share_embed", label: em.intl.string(em.t["D/gSWS"]) },
            { value: "home_card", label: em.intl.string(em.t["5wnpF3"]) },
            { value: "channel_call_header", label: em.intl.string(em.t.gWinpQ) },
            { value: "members_list", label: em.intl.string(em.t.wpYima) },
            { value: "activity_panel", label: em.intl.string(em.t.L2mlUb) },
        ],
        o = 0 === s.length || s.length === i.length,
        c = r.useMemo(() => (o ? "all" : 1 === s.length ? s[0] : "all"), [s, o]);
    return (0, l.jsx)(eO.Ip, {
        className: e2.kL,
        orientation: "auto",
        children: (0, l.jsxs)("div", {
            className: e2.qE,
            children: [
                (0, l.jsx)(f.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: em.intl.string(em.t.BDUDau),
                }),
                (0, l.jsx)("div", { className: e2.pf, children: a }),
                (0, l.jsxs)(eT.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: c,
                    onItemSelect: (e) => {
                        n?.(e);
                    },
                    children: [
                        (0, l.jsx)(eT.V.Item, { id: "all", children: em.intl.string(em.t.Y9DnPa) }),
                        i.map((e) => (0, l.jsx)(eT.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, l.jsx)("div", { className: e2.tZ, children: (0, l.jsx)("div", { className: e2.Qs, children: t }) }),
            ],
        }),
    });
}
function e7(e) {
    return new URLSearchParams(e).get(X.L1.QUEST_ID);
}
let e6 = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: n } = (function (e) {
            let t = (0, o.W6)(),
                [s, n] = r.useState(e),
                { search: l } = (0, o.zy)();
            return (
                r.useEffect(() => {
                    let t = e7(l);
                    null != t ? n(t) : null != e && n(e);
                }, [e, l]),
                r.useEffect(() => {
                    if (null == s || e7(l) === s) return;
                    let e = new URLSearchParams();
                    e.set(X.L1.TAB, X.NC.PREVIEW_TOOL),
                        e.set(X.L1.QUEST_ID, s),
                        t.push(`${eC.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, l]),
                { questId: s, setQuestId: n }
            );
        })(t),
        a = (0, d.bG)([en.A], () => (null != s ? en.A.getQuest(s) : void 0), [s]),
        i = (0, d.bG)([en.A], () => (null != s ? en.A.getQuestLoadedViaPreview(s) : null), [s]);
    r.useEffect(() => {
        null != s &&
            (0, es.dQ)(s).then(() => {
                (0, es.Gt)(s);
            });
    }, [s]),
        r.useEffect(() => {
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
    let [c, u] = r.useState([]);
    return (0, l.jsx)(e8, {
        controls: (0, l.jsx)(eA, {
            questId: s,
            setQuestId: n,
            quest: a,
            refreshQuest: () => {
                null != s && (0, es.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? u([]) : u([e]);
        },
        children: i?.id != null ? (0, l.jsx)(e1, { questId: i?.id, selectedSections: c }) : null,
    });
};
var e3 = s(617986),
    e4 = s(203879),
    e5 = s(403362),
    e9 = s(167417),
    te = s(783977),
    tt = s(651892),
    ts = s(305866),
    tn = s(915089),
    tl = s(332733);
function tr(e) {
    let { children: t, id: s } = e;
    return (0, l.jsx)(j.E, { className: tl.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let ta = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, tn.GV)(),
        a = r.useRef(null);
    return (0, l.jsx)(ei.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, l.jsx)(ts.l, { className: tl.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: a,
        children: (e) => t(e, a),
    });
};
var ti = s(612539);
let to = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, X.Nb)(),
        a = r.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, l.jsx)(ta, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, l.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, tt.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, l.jsx)("hr", { className: ti.B }),
                                    (0, l.jsx)(tr, { id: i, children: e.heading }),
                                    (0, l.jsx)(e9.$, {
                                        "aria-labelledby": i,
                                        options: n,
                                        selectedValues: o,
                                        onChange: a(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, l.jsx)("hr", { className: ti.B }),
                    (0, l.jsx)("div", {
                        className: ti.W,
                        children: (0, l.jsx)(E.$, {
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
            (0, l.jsx)(E.$, {
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
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        a = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, X.XD)(),
        o = r.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, l.jsx)(ta, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(tr, { id: t, children: em.intl.string(em.t.tZXJIS) }),
                    (0, l.jsx)(tc.z, {
                        options: o,
                        onChange: (e) => {
                            s(), a(e);
                        },
                        value: n,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, l.jsx)(E.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, tt.Js)(n),
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
var tj = s(365199),
    tv = s(859387),
    tp = s(415441),
    tC = s(73473),
    t_ = s(270045),
    tS = s(902173),
    tN = s(785866),
    tb = s(687966),
    tA = s(782134),
    tO = s(768622),
    tT = s(138134),
    tR = s(792620),
    tL = s(814793),
    tI = s(79545),
    ty = s(719021);
function tM(e) {
    var t;
    let s,
        { quest: n } = e,
        a = (0, tI.Pd)(n),
        i = (0, X.fc)(n),
        o = (0, X.I3)(n),
        c = r.useMemo(
            () =>
                (function (e, t) {
                    let s = new Date(e.startsAt).getTime(),
                        n = Date.now(),
                        l = s <= n && n - s < tE.A.Millis.DAY;
                    switch (t) {
                        case tI.UA.UNENROLLED:
                            if (l) return em.intl.string(em.t.X6ziWN);
                            return null;
                        case tI.UA.COMPLETED:
                        case tI.UA.EXPIRED_CLAIMABLE:
                            return em.intl.string(em.t.Zq6s9k);
                        case tI.UA.CLAIMED:
                            return em.intl.string(em.t.uOGFB6);
                        case tI.UA.EXPIRED:
                            return em.intl.string(em.t["zX/gnV"]);
                        default:
                            return null;
                    }
                })(n.config, a),
            [n.config, a],
        ),
        u = r.useMemo(
            () =>
                (function (e, t, s) {
                    switch (e) {
                        case tI.UA.UNENROLLED:
                        case tI.UA.ENROLLED:
                        case tI.UA.INCOMPLETE:
                            if (null != s) {
                                if (e === tI.UA.UNENROLLED) return String(s.target);
                                return `${s.progress}/${s.target}`;
                            }
                            return (0, tR.xm)(t);
                        case tI.UA.COMPLETED:
                        case tI.UA.CLAIMED:
                        case tI.UA.EXPIRED:
                        case tI.UA.EXPIRED_CLAIMABLE:
                            return null;
                    }
                })(a, i, o),
            [a, i, o],
        );
    return (0, l.jsxs)("div", {
        className: ty.qS,
        children: [
            null != c && (0, l.jsx)(j.E, { variant: "text-xs/bold", color: "always-white", children: c }),
            null != c &&
                null != u &&
                (0, l.jsx)(j.E, { variant: "text-xs/bold", color: "always-white", children: "\u2022" }),
            null != u &&
                (0, l.jsxs)("span", {
                    className: ty.BA,
                    children: [
                        ((t = n),
                        (s = { size: "xs", className: ty.rF, color: "currentColor" }),
                        (0, tR.GL)(t)
                            ? (0, tL.ui)(t)
                                ? (0, l.jsx)(tN._, { ...s })
                                : (0, l.jsx)(tb._, { ...s })
                            : (0, tR.vv)(t)
                              ? (0, l.jsx)(tA.u, { ...s })
                              : (0, tR.Ki)(t)
                                ? t.config.features.includes(tS.L.CLOUD_GAMING_ACTIVITY)
                                    ? (0, l.jsx)(tO.g, { ...s })
                                    : (0, l.jsx)(tT.i, { ...s })
                                : (0, l.jsx)(tb._, { ...s })),
                        (0, l.jsx)(j.E, { variant: "text-xs/bold", tag: "span", color: "always-white", children: u }),
                    ],
                }),
        ],
    });
}
var tQ = s(409626),
    tU = s(838077),
    tH = s(743368),
    tD = s(919500);
function tw(e) {
    let { isHovering: t } = e;
    return (0, l.jsx)("div", {
        className: i()(tD.lO, { [tD.Fq]: t }),
        children: (0, l.jsx)("div", {
            className: tD.mv,
            children: (0, l.jsxs)(x.e, {
                direction: "horizontal",
                fullWidth: !0,
                wrap: !1,
                size: "sm",
                children: [
                    (0, l.jsx)(er.K, {
                        variant: "overlay-secondary",
                        icon: tH.W,
                        "aria-label": em.intl.string(em.t.LLLLPD),
                    }),
                    (0, l.jsx)(E.$, { variant: "overlay-primary", text: em.intl.string(em.t.RscU7I) }),
                ],
            }),
        }),
    });
}
var tF = s(106799),
    tq = s(801365),
    tP = s(453384),
    tk = s(646764),
    tB = s(269999);
function tV(e) {
    let { quest: t, questContent: s, sourceQuestContent: n } = e,
        a = (0, d.bG)([eY.default], () => eY.default.getCurrentUser()),
        i = (0, tq.mq)(t.config, a),
        o = (0, tq.ks)(t.config),
        c = (0, tq._Z)(t.config),
        u = r.useMemo(
            () =>
                o
                    ? em.intl.format(em.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, l.jsxs)(l.Fragment, {
                                  children: [(0, l.jsx)(tF.A, { className: tB.Kq, customSize: 14 }), c],
                              }),
                      })
                    : i,
            [i, o, c],
        );
    return (0, l.jsxs)("div", {
        className: tB.CZ,
        children: [
            (0, l.jsx)("div", {
                className: tB.tE,
                children: (0, l.jsx)(tP.A, {
                    style: "small",
                    size: 50,
                    percentComplete: 0.1,
                    children: (0, l.jsx)(tk.A, {
                        quest: t,
                        questContent: s,
                        autoplay: !1,
                        lazyLoad: !0,
                        fullWidth: !0,
                        sourceQuestContent: n,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "always-white",
                        className: tB.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, l.jsx)(
                        j.E,
                        { variant: "text-md/semibold", color: "always-white", tag: "span", children: u },
                        `${t.id}_reward`,
                    ),
                ],
            }),
        ],
    });
}
var tG = s(190107),
    tW = s(315767);
function tz(e) {
    let { quest: t, questContent: s, isHovering: n, sourceQuestContent: a } = e,
        i = r.useRef(null),
        o = (0, tU.A9)(t, a, tG.rE.QUEST_HOME_DESKTOP, s, tQ.Ob.QuestHome, i);
    return (0, l.jsxs)("div", {
        ref: i,
        children: [
            (0, l.jsx)(tV, { quest: t, questContent: s, sourceQuestContent: a }),
            (0, l.jsxs)("div", {
                className: tW.y,
                children: [
                    (0, l.jsx)(j.E, {
                        style: { opacity: n ? 1 : 0.8 },
                        variant: "text-sm/medium",
                        className: tW.W,
                        lineClamp: n ? void 0 : 1,
                        children: o,
                    }),
                    (0, l.jsx)(j.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.string(em.t.o6FLcF),
                    }),
                ],
            }),
            (0, l.jsx)(tw, { isHovering: n }),
        ],
    });
}
var t$ = s(547032);
function tK(e) {
    let { quest: t, questContent: s, className: n, impressionRef: a, sourceQuestContent: o } = e,
        c = r.useMemo(() => (0, tv.tW)(t, tv.fY.QUEST_BAR_HERO_IMAGE), [t]),
        u = r.useMemo(() => (0, tv.tW)(t, tv.fY.QUEST_BAR_HERO_VIDEO), [t]),
        {
            isActive: d,
            shouldRender: m,
            hoverHandlers: h,
            handleMenuOpen: x,
            handleMenuClose: E,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400,
                [t, s] = r.useState(!1),
                [n, l] = r.useState(!1),
                [a, i] = r.useState(!1),
                o = r.useRef(!1),
                c = r.useRef(!1),
                u = r.useRef(null),
                d = r.useRef(null),
                m = () => {
                    null != u.current && (cancelAnimationFrame(u.current), (u.current = null));
                },
                h = () => {
                    null != d.current && (clearTimeout(d.current), (d.current = null));
                },
                x = r.useCallback(() => {
                    h(),
                        l(!0),
                        m(),
                        (u.current = requestAnimationFrame(() => {
                            u.current = requestAnimationFrame(() => {
                                (u.current = null), s(!0);
                            });
                        }));
                }, []),
                E = r.useCallback(() => {
                    m(),
                        s(!1),
                        h(),
                        (d.current = setTimeout(() => {
                            (d.current = null), l(!1);
                        }, e));
                }, [e]),
                g = r.useCallback(() => i(!0), []),
                f = r.useCallback(() => {
                    i(!1), o.current || c.current || E();
                }, [E]),
                j = r.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            (o.current = !0), x();
                        },
                        onMouseLeave: () => {
                            (o.current = !1), a || E();
                        },
                        onFocus: () => {
                            (c.current = !0), x();
                        },
                        onBlur: () => {
                            (c.current = !1), a || E();
                        },
                    }),
                    [x, E, a],
                );
            return (
                r.useEffect(
                    () => () => {
                        m(), h();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: E, hoverHandlers: j, handleMenuOpen: g, handleMenuClose: f }
            );
        })();
    return (0, l.jsxs)("div", {
        id: `quest-tile-${t.id}`,
        ref: (e) => {
            a.current = e;
        },
        className: i()(t$.kL, n),
        ...h,
        children: [
            (0, l.jsx)(tp.N, {
                imageAsset:
                    null != c
                        ? { asset: c, assetId: "QuestTileV2", alt: em.intl.string(em.t.jnijWz), className: t$.Tv }
                        : void 0,
                videoAsset:
                    null != u
                        ? {
                              asset: u,
                              assetId: "QuestTileV2_heroAnimated",
                              className: i()(t$.Tv, t$.gJ, { [t$.C7]: d }),
                          }
                        : void 0,
                imageSize: { width: 600, height: 450 },
                showVideo: m,
            }),
            (0, l.jsx)("div", { className: i()(t$.f5, { [t$.Hk]: d }) }),
            (0, l.jsxs)("div", {
                className: t$.wx,
                children: [
                    (0, l.jsx)(tM, { quest: t }),
                    (0, l.jsx)(t_.C, {
                        questContent: s,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: o,
                        onOpen: x,
                        onClose: E,
                        children: (e) =>
                            (0, l.jsx)(eg.D, {
                                ...e,
                                tag: "div",
                                className: i()(t$.E9, { [t$.CJ]: d }),
                                "aria-label": em.intl.string(em.t.DEoVWZ),
                                children: (0, l.jsx)(tj.j, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, l.jsx)(tz, { quest: t, questContent: s, isHovering: d, sourceQuestContent: o }),
        ],
    });
}
let tY = r.memo(function (e) {
    let t = (0, d.bG)([en.A], () => (null != e.questId ? en.A.getQuest(e.questId) : void 0), [e.questId]),
        s = r.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, l.jsx)(tC.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === K.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, l.jsx)(tK, { ...e, quest: s, impressionRef: t }),
          });
});
var tJ = s(121480);
let tZ = 4 * tE.A.Millis.SECOND;
function tX(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        a = r.useRef(null),
        [i, o] = r.useState(null),
        c = r.useCallback(() => {
            o(
                (function (e, t, s) {
                    if (null == e) return 1;
                    let n = Math.floor((e.clientWidth + s) / (t + s));
                    return n > 0 ? n : 1;
                })(a.current, s, n),
            );
        }, [o, s, n]);
    return (
        (0, th.g)(a, c, [s, n], { fireOnMount: !0 }),
        (0, l.jsx)("div", {
            className: tJ.kL,
            ref: a,
            style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
            children: null !== i && t(i),
        })
    );
}
let t0 = r.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: a,
            hasFetched: c,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        m = (0, o.zy)(),
        h = r.useRef(""),
        [x, E] = r.useState(null),
        [g, v] = r.useState(0),
        { enabled: p } = Z.aD.useConfig({ location: tG.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: C }, _] = (0, tx.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: tZ },
        })),
        S = r.useCallback(
            (e) => {
                let t = (0, tg.vc)(e, s, n);
                return null != t && (E(t.id), v((e) => e + 1), !0);
            },
            [s, n],
        );
    return (r.useImperativeHandle(t, () => ({ scrollToQuest: S }), [S]),
    r.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        a || !c || (m.hash !== h.current && S(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, a, c, S]),
    r.useLayoutEffect(() => {
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
    a && 0 === s.length)
        ? (0, l.jsx)(ec.y, { className: tJ.u1 })
        : 0 === s.length
          ? (0, l.jsxs)("div", {
                className: tJ.y7,
                children: [
                    (0, l.jsx)(f.D, {
                        variant: "heading-xl/semibold",
                        children: em.intl.string(u ? em.t.PBfFnx : em.t.NqFP6z),
                    }),
                    (0, l.jsx)(j.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? em.intl.format(em.t.LdYS1H, { onClick: d }) : em.intl.string(em.t.LhD4yH),
                    }),
                ],
            })
          : (0, l.jsx)(tX, {
                tileMinWidth: p ? 291 : 336,
                gridGap: p ? 20 : 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            r = x === t.id,
                            a = null != x && !r;
                        return (0, l.jsxs)(
                            tm.animated.div,
                            {
                                className: i()({ [tJ.XB]: r }),
                                style: tf(r, a, C),
                                children: [
                                    r && (0, l.jsx)("div", { className: tJ.E4 }, g),
                                    p
                                        ? (0, l.jsx)(tY, {
                                              quest: t,
                                              questContent: K.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: tJ.d,
                                              sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, l.jsx)(eG.Ay, {
                                              quest: t,
                                              questContent: K.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: tJ.d,
                                              sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var t1 = s(458518),
    t2 = s(65990);
let t8 = [],
    t7 = X.L1.SORT,
    t6 = X.L1.FILTER,
    t3 = r.forwardRef(function (e, t) {
        let s,
            n,
            a,
            i,
            c = r.useRef(null),
            [u, d] =
                ((s = (0, t1.o)()),
                (n = (0, o.W6)()),
                (a = r.useRef(null)),
                (i = r.useCallback(
                    (e) => {
                        let t = new URLSearchParams(a.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        (a.current = t),
                            n.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                a.current = null;
                            });
                    },
                    [s, n],
                )),
                [s, i]),
            m = r.useMemo(() => {
                var e;
                return (
                    (e = u.get(t7)),
                    ((0, $.uJ)(e) ? null : (Object.values(tG.kL).find((t) => t === e) ?? null)) ?? tG.kL.SUGGESTED
                );
            }, [u]),
            h = r.useMemo(
                () =>
                    (function (e) {
                        if ((0, $.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tG.WQ)(e))
                            .filter(e5.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(t6)) ?? t8,
                [u],
            ),
            x = r.useCallback(
                (e) => {
                    d({ [t7]: e });
                },
                [d],
            ),
            E = r.useCallback(
                (e) => {
                    d({
                        [t6]:
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
                r.useMemo(() => ({ sortMethod: m, filters: h }), [m, h]),
            ),
            C = r.useCallback(() => {
                E(t8);
            }, [E]),
            _ = r.useRef(null),
            S = r.useRef(null),
            N = (0, o.zy)(),
            b = (0, o.W6)();
        return (
            r.useEffect(() => {
                "" !== N.hash &&
                    null != _.current &&
                    null != S.current &&
                    (m !== _.current || h !== S.current) &&
                    b.replace({ ...N, hash: void 0 });
            }, [m, h, N, b]),
            r.useEffect(() => {
                _.current = m;
            }, [m]),
            r.useEffect(() => {
                S.current = h;
            }, [h]),
            (0, X.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: g.length }),
            r.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        C(),
                            x(tG.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                c.current?.scrollToQuest(e);
                            });
                    },
                }),
                [C, x],
            ),
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: t2.Mj,
                        children: [
                            (0, l.jsx)(f.D, { variant: "heading-lg/medium", children: em.intl.string(em.t.giYD00) }),
                            (0, l.jsxs)("div", {
                                className: t2.Nf,
                                children: [
                                    (0, l.jsx)(td, { onChange: x, optionClassName: t2.Uq, selectedSortMethod: m }),
                                    (0, l.jsx)(to, { onChange: E, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(t0, {
                        ref: c,
                        quests: g,
                        excludedQuests: j,
                        isFetching: v,
                        hasFetched: p,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: C,
                    }),
                ],
            })
        );
    });
var t4 = s(575593),
    t5 = s(440703),
    t9 = s(462887),
    se = s(187322),
    st = s(765671),
    ss = s(736653),
    sn = s(162232),
    sl = s(734736),
    sr = s(303136),
    sa = s(265234),
    si = s(181713);
let so = (e) => {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        r = s ? si.A : si.A + "?format=webp";
    return (0, l.jsx)("div", {
        className: i()(sa.k, t),
        children: s
            ? (0, l.jsx)(sr.A, {
                  preload: "auto",
                  className: sa.L,
                  children: (0, l.jsx)("source", { src: r, type: "video/webm" }),
              })
            : (0, l.jsx)("img", { className: sa.L, src: r, alt: n }),
    });
};
var sc = s(57718),
    su = s(659249);
let sd = (0, r.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, r.useState)(!1),
        [a, o] = (0, r.useState)(24),
        [c, u] = (0, r.useState)(!1),
        m = (0, r.useRef)(null),
        h = (0, r.useRef)(null),
        x = (0, r.useRef)(null),
        E = (0, d.bG)([eY.default], () => eY.default.getCurrentUser()),
        { ref: g, height: v = 0 } = (0, st.Ay)(),
        p = (0, ss.Ay)(),
        C = (0, X.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        _ = t.userStatus?.claimedTier ?? 0,
        S = t.config.rewards[_],
        N = S?.type === t5.l.FRACTIONAL_PREMIUM,
        b = S?.type === t5.l.COLLECTIBLE,
        A = S?.type === t5.l.VIRTUAL_CURRENCY,
        O = S?.collectibleProduct?.items?.[0],
        T = O?.type === t4.R.AVATAR_DECORATION ? O : null,
        R = r.useMemo(
            () =>
                null == S
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? em.intl.format(em.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : S.name,
            [S, A, t],
        );
    (0, st.i4)(m, (e) => {
        let { height: t } = e;
        if (!b || null == t || null == h.current || null == m.current || null == x.current) return;
        let s = m.current.getBoundingClientRect(),
            n = h.current.getBoundingClientRect(),
            l = x.current.getBoundingClientRect();
        o((n.top - s.top - l.height) / 2);
    });
    let I = (0, t9.M)(p),
        y = r.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = r.useMemo(() => (0, tv.tW)(t, tv.fY.REWARD), [t]),
        Q = s ? v + 8 : 0,
        { content_position: U, row_index: H, ...D } = (0, ee.fF)(K.uF.TROPHY_CASE_CARD),
        w = () => {
            n(!0), G.default.track(eC.HAw.QUEST_HOVER, { quest_id: t.id, ...D });
        },
        F = () => {
            n(!1);
        },
        q = (e) => {
            u(!0), G.default.track(eC.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == S || c
        ? null
        : (0, l.jsx)(se.vN, {
              children: (0, l.jsxs)("div", {
                  ref: m,
                  tabIndex: 0,
                  onFocus: w,
                  onBlur: F,
                  onMouseEnter: w,
                  onMouseLeave: F,
                  className: i()(su.kL, { [su.yo]: s }),
                  children: [
                      null != E &&
                          b &&
                          null != T &&
                          (0, l.jsx)("div", {
                              ref: x,
                              className: su.FX,
                              style: { top: a },
                              children: (0, l.jsx)(sn.A, {
                                  avatarDecorationOverride: T,
                                  user: E,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      N
                          ? (0, l.jsx)(sl.A, { className: su.Sl })
                          : A
                            ? (0, l.jsx)(so, {
                                  className: su.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, l.jsx)(L.A, {
                                    className: su.JU,
                                    autoPlay: !1,
                                    children: (0, l.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => q(M.url),
                                    }),
                                })
                              : (0, l.jsx)("img", {
                                    className: su.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => q(M.url),
                                }),
                      (0, l.jsx)("div", { className: i()(su.Lw, { [su.en]: I, [su.So]: !I }) }),
                      (0, l.jsx)("div", {
                          ref: h,
                          className: su.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, l.jsx)(sc.Ay, {
                              logotypeClassName: i()(su.wm, { [su.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, l.jsxs)("div", {
                          ref: g,
                          className: su.zH,
                          children: [
                              (0, l.jsx)(f.D, {
                                  className: su.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: em.intl.format(em.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, l.jsx)(j.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "always-white",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: em.intl.format(em.t["kXVcV+"], { reward: R, claimedDate: C }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sm = s(396478);
function sh(e) {
    let { onClick: t } = e,
        n = (0, ss.Ay)();
    return (0, l.jsxs)(sm.pp, {
        theme: n,
        children: [
            (0, l.jsx)(sm.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, l.jsx)(sm.SG, { note: em.intl.format(em.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sx = s(975424);
function sE(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: n } = (0, X.Iq)();
    return n && 0 === s.length
        ? (0, l.jsx)(ec.y, { className: sx.u })
        : 0 === s.length
          ? (0, l.jsx)(sh, { onClick: () => t(X.NC.ALL) })
          : (0, l.jsx)("div", {
                className: sx.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, l.jsx)(sd, { quest: e }, e.id)),
            });
}
let sg = r.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var sf = s(868714),
    sj = s(548411),
    sv = s(554830),
    sp = s(689175),
    sC = s(321503),
    s_ = s(522403);
let sS = "data-scroll-target",
    sN = `[${sS}]`,
    sb = { anchors: [], pageSize: 1 };
function sA(e) {
    let {
            children: t,
            className: s,
            itemSelector: n = sN,
            maskWidth: a = 48,
            overflowAmount: o = 0,
            maskMarginMultiplier: c = 1,
        } = e,
        u = r.useRef(null),
        m = r.useRef(null),
        [h, x] = r.useState(!1),
        [E, g] = r.useState(!1),
        [{ anchors: f, pageSize: j }, v] = r.useState(sb),
        p = (0, d.bG)([S.A], () => S.A.useReducedMotion) ? "auto" : "smooth",
        C = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (x(e.scrollLeft > 0), g(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        _ = r.useCallback(() => {
            v(
                (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return sb;
                    let a = Array.from(r.querySelectorAll(s));
                    if (0 === a.length) return sb;
                    let i = a[0].offsetWidth,
                        o = a.length > 1 ? a[1].offsetLeft - a[0].offsetLeft - i : 0,
                        c = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (i + o))),
                        u = a.length - c + 1;
                    return u <= 1
                        ? sb
                        : {
                              anchors: [
                                  0,
                                  ...a.slice(1, u - 1).map((e, t) => {
                                      let s = a[t + c];
                                      return (e.offsetLeft + s.offsetLeft + s.offsetWidth) / 2;
                                  }),
                                  r.scrollWidth,
                              ],
                              pageSize: c,
                          };
                })({ scrollerRef: u, itemSelector: n, maskWidth: a, maskMarginMultiplier: c }),
            );
        }, [a, n, c]),
        N = r.useCallback(
            (e) => {
                let t = u.current?.getScrollerNode();
                if (null == t || f.length < 2) return;
                let s = f.length - 1,
                    n = Math.max(0, t.scrollWidth - t.clientWidth),
                    l = f.map((e, l) => (0 === l ? 0 : l === s ? n : e - t.clientWidth / 2)),
                    r = (e) => Math.abs(e - t.scrollLeft),
                    a = Math.max(0, Math.min(s, l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0) + e * j));
                t.scrollTo({ left: l[a], behavior: p });
            },
            [p, f, j],
        ),
        b = r.useCallback(
            (e) => {
                let t = u.current?.getScrollerNode();
                if (null == t) return;
                let s = e.target.closest(n);
                if (null == s || !t.contains(s)) return;
                let l = t.getBoundingClientRect(),
                    r = s.getBoundingClientRect(),
                    i = l.left + a - r.left,
                    o = r.right - (l.right - a);
                i > 0 ? t.scrollBy({ left: -i, behavior: p }) : o > 0 && t.scrollBy({ left: o, behavior: p });
            },
            [n, a, p],
        ),
        A = r.useCallback(() => {
            C(), _();
        }, [C, _]);
    (0, th.g)(m, A, [], { fireOnMount: !0 });
    let O = o > 0,
        T = (0, sf.A)(f);
    return (0, l.jsxs)("div", {
        className: i()(s, s_.m7),
        ref: m,
        style: {
            "--custom-scroller-mask-width": `${a}px`,
            "--custom-scroller-overflow-amount": `${o}px`,
            "--custom-scroller-scroll-behavior": p,
        },
        children: [
            (0, l.jsx)(eg.D, {
                "aria-label": em.intl.string(em.t.vgfxaA),
                className: i()(s_.k9, s_.RW, { [s_.Q2]: h }),
                onClick: () => N(-1),
                tabIndex: h ? 0 : -1,
                "aria-hidden": !h,
                children: (0, l.jsx)(sj.Z, { color: ex.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, l.jsx)(eg.D, {
                "aria-label": em.intl.string(em.t.XiOHRX),
                className: i()(s_.k9, s_.K3, { [s_.Q2]: E }),
                onClick: () => N(1),
                tabIndex: E ? 0 : -1,
                "aria-hidden": !E,
                children: (0, l.jsx)(sv.K, { color: ex.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, l.jsx)("div", {
                className: i()(s_.$u, { [s_.sF]: h, [s_.RC]: E, [s_.Ni]: O && !h, [s_.GA]: O && !E }),
                children: (0, l.jsx)(sp.zC, {
                    ref: u,
                    orientation: "horizontal",
                    onScroll: C,
                    onFocusCapture: b,
                    className: i()({ [s_.x2]: O }, s_.XG),
                    children: (0, l.jsxs)(sC.X.Provider, {
                        value: u,
                        children: [
                            t,
                            T.map((e, t) =>
                                (0, l.jsx)(
                                    "div",
                                    { "aria-hidden": !0, className: s_.fw, style: { insetInlineStart: `${e}px` } },
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
var sO =
    (((n = {}).FEATURED = "featured"),
    (n.IN_PROGRESS = "in-progress"),
    (n.ENDING_SOON = "ending-soon"),
    (n.ORB = "orb"),
    (n.DISCOVERED = "discovered"),
    n);
let sT = [
    { type: "featured-quests", identifier: "featured", title: em.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "in-progress", title: em.t.CHJy6z },
    { type: "quests", identifier: "ending-soon", title: em.t.PRg3qh },
    { type: "quests", identifier: "orb", title: em.t["0Uc94A"] },
    { type: "quests", identifier: "discovered", title: em.t["u9Ug++"] },
];
var sR = s(548636);
function sL(e) {
    let { questIds: t, rowIndex: s, sectionIdentifier: n } = e,
        { targetQuestId: a, highlightCount: i, highlightAnimationProgress: o } = r.useContext(sg),
        c = null != a,
        { enabled: u } = Z.aD.useConfig({ location: tG.rE.QUEST_HOME_DESKTOP });
    return (0, l.jsx)(sA, {
        maskWidth: 48,
        overflowAmount: 25,
        maskMarginMultiplier: 0.75,
        children: (0, l.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${u ? 282 : 382.6666666666667}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
            },
            className: sR.FO,
            children: [
                t.map((e, t) => {
                    let r = a === e,
                        d = c && !r;
                    return (0, l.jsxs)(
                        tm.animated.div,
                        {
                            [sS]: "",
                            className: r ? sR.XB : void 0,
                            style: tf(r, d, o),
                            children: [
                                r && (0, l.jsx)("div", { className: sR.E4 }, i),
                                u
                                    ? (0, l.jsx)(tY, {
                                          questId: e,
                                          questContent: K.uF.QUEST_HOME_DESKTOP,
                                          contentPosition: t,
                                          rowIndex: s,
                                          className: sR.d,
                                          sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                                      })
                                    : (0, l.jsx)(eG.Ay, {
                                          questId: e,
                                          isInFeaturedSection: n === sO.FEATURED,
                                          questContent: K.uF.QUEST_HOME_DESKTOP,
                                          contentPosition: t,
                                          rowIndex: s,
                                          className: sR.d,
                                          sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                                      }),
                            ],
                        },
                        `animated-wrapper-${e}`,
                    );
                }),
                (0, l.jsx)("div", { className: sR.fu }),
            ],
        }),
    });
}
let sI = 2 * tE.A.Millis.DAY,
    sy = new Map(sT.map((e) => [e.identifier, e]));
var sM = s(32304);
let sQ = 4 * tE.A.Millis.SECOND,
    sU = r.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, hasSearchResults: n } = e,
            { sections: a } = ((e) => {
                let { sharedQuestId: t } = e,
                    {
                        quests: s,
                        isFetchingCurrentQuests: n,
                        hasFetched: l,
                    } = (0, X.Qh)(X.NC.ALL, { sortMethod: tG.kL.SUGGESTED, filters: [] }),
                    a = (0, X.T2)(),
                    i = (0, d.bG)([en.A], () => en.A.isFetchingQuestHomeHero()),
                    o = r.useRef([]),
                    c = r.useMemo(
                        () =>
                            i
                                ? []
                                : (function (e) {
                                      let { prevSections: t, quests: s, hero: n, sharedQuestId: l } = e,
                                          r = new Set(
                                              s.map((e) => {
                                                  let { id: t } = e;
                                                  return t;
                                              }),
                                          ),
                                          a = new Map(),
                                          i = new Set(),
                                          o = sT.map((e) => {
                                              let s = t?.find((t) => {
                                                      let { identifier: s } = t;
                                                      return s === e.identifier;
                                                  }),
                                                  n = [];
                                              return (
                                                  null != s && n.push(...s?.questIds.filter((e) => r.has(e))),
                                                  a.set(e.identifier, n.length),
                                                  n.forEach((e) => i.add(e)),
                                                  { ...e, questIds: n }
                                              );
                                          });
                                      for (let e of s) {
                                          if (i.has(e.id)) continue;
                                          let t = (function (e) {
                                              var t;
                                              let s,
                                                  { quest: n, hero: l, sharedQuestId: r, sectionCounts: a } = e;
                                              return (0, tg.Ic)(n)
                                                  ? null
                                                  : r === n.id
                                                    ? sO.DISCOVERED
                                                    : n.userStatus?.enrolledAt != null &&
                                                        n.userStatus?.claimedAt == null
                                                      ? sO.IN_PROGRESS
                                                      : null != l && (0, tL.I0)(l, n.id)
                                                        ? sO.FEATURED
                                                        : new Date(n.config.expiresAt).valueOf() <= Date.now() + sI
                                                          ? sO.ENDING_SOON
                                                          : ((t = sO.FEATURED),
                                                              null == (s = sy.get(t)?.maxItems) || (a.get(t) ?? 0) < s)
                                                            ? sO.FEATURED
                                                            : (0, tq.ks)(n.config)
                                                              ? sO.ORB
                                                              : null;
                                          })({ quest: e, hero: n, sharedQuestId: l, sectionCounts: a });
                                          if (null == t) continue;
                                          let s = o.find((e) => {
                                              let { identifier: s } = e;
                                              return s === t;
                                          });
                                          null != s &&
                                              (s.questIds.push(e.id), i.add(e.id), a.set(t, (a.get(t) ?? 0) + 1));
                                      }
                                      return o.filter((e) => e.questIds.length > 0);
                                  })({ prevSections: o.current, quests: s, hero: a, sharedQuestId: t }),
                        [s, a, t, i],
                    );
                return (
                    r.useEffect(() => {
                        o.current = c;
                    }, [c]),
                    { sections: c, hasFetched: l, isFetchingCurrentQuests: n || i }
                );
            })({ sharedQuestId: s }),
            [o, c] = r.useState(null),
            [u, m] = r.useState(0),
            h = r.useRef(null),
            [{ highlightAnimationProgress: x }, E] = (0, tx.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: sQ },
            })),
            g = r.useCallback(
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
        r.useImperativeHandle(t, () => ({ scrollToQuest: g }), [g]),
            r.useLayoutEffect(() => {
                if (null == s) {
                    h.current = null;
                    return;
                }
                h.current !== s && g(s) && (h.current = s);
            }, [s, g, a]);
        let j = r.useMemo(() => ({ targetQuestId: o, highlightCount: u, highlightAnimationProgress: x }), [o, u, x]);
        return (0, l.jsx)(sg.Provider, {
            value: j,
            children: (0, l.jsx)("div", {
                className: i()(sM.kL, { [sM.R]: n }),
                children: a.map((e, t) => {
                    let { identifier: s, questIds: n, title: r } = e;
                    return (0, l.jsxs)(
                        "div",
                        {
                            className: sM.p9,
                            children: [
                                (0, l.jsx)(f.D, { variant: "heading-lg/medium", children: em.intl.string(r) }),
                                (0, l.jsx)(sL, { questIds: n, rowIndex: t, sectionIdentifier: s }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        });
    });
var sH = s(353640),
    sD = s(121894),
    sw = s(851936);
let sF = (0, sH.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, sw.L)({ location: tG.rE.QUEST_HOME_DESKTOP });
        if (s.info === eN.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, sD.r)(() => e(l));
    },
}));
var sq = s(516226),
    sP = s(323889),
    sk = s(561844),
    sB = s(901406),
    sV = s(139384),
    sG = s(43990),
    sW = s(770178),
    sz = s(14233);
function s$(e, t) {
    let { row_index: s, ...n } = (0, ee.fF)(K.uF.QUEST_HOME_HERO);
    (0, sk.Qg)({
        adContentId: e,
        adCreativeType: sP.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: K.uF.QUEST_HOME_HERO,
    });
}
let sK = r.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: a, subtitle: o, buttons: c, background: u, className: d } = e,
        [m, h] = r.useState("display-lg"),
        x = r.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        E = (0, sW.w)(x, [], { fireOnMount: !0 }),
        g = r.useCallback(() => s$(s, eC.HAw.QUEST_HOVER), [s]),
        v = r.useCallback(() => s$(s, eC.HAw.QUEST_HOVER_OFF), [s]);
    return (0, l.jsx)(sG.N, {
        theme: eC.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, l.jsx)("div", {
                className: i()(sz.iE, e, d),
                onMouseEnter: g,
                onMouseLeave: v,
                ref: (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, l.jsxs)("div", {
                    className: sz.FG,
                    children: [
                        (0, l.jsxs)(p.B, {
                            className: sz.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, l.jsxs)(p.B, {
                                    className: sz.yp,
                                    gap: 16,
                                    children: [
                                        (0, l.jsxs)(p.B, {
                                            gap: 8,
                                            children: [
                                                (0, l.jsx)(f.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: sz.DD,
                                                    children: a,
                                                }),
                                                (0, l.jsx)(j.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: sz.VA,
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
var sY = s(194526),
    sJ = s(731355),
    sZ = s(621466),
    sX = s(508770),
    s0 = s(406810),
    s1 = s(628284),
    s2 = s(65154),
    s8 = s(496431),
    s7 = s(975807),
    s6 = s(58703),
    s3 = s(18437),
    s4 = s(398025),
    s5 = s(691464);
function s9(e) {
    let [t, s] = r.useState(!1),
        n = r.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = r.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function ne(e) {
    let { hero: t, contentPosition: s } = e,
        n = r.useRef(null),
        { isHovering: a, hoverProps: o } = s9(
            r.useCallback(
                (e) => {
                    (0, sk.Qg)({
                        adContentId: t.id,
                        adCreativeType: sP.p.QUEST_HOME_HERO,
                        event: e ? eC.HAw.QUEST_HOVER : eC.HAw.QUEST_HOVER_OFF,
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
    r.useEffect(() => {
        let e = n.current;
        (0, sZ.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(eN.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, tx.z)({ hoverSpring: +!!a, config: tm.config.gentle }),
        u = r.useCallback(() => {
            (0, s7.A)(t.cta.url),
                (0, sk.vK)({
                    adContentId: t.id,
                    adCreativeType: sP.p.QUEST_HOME_HERO,
                    questContent: K.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: ee.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, l.jsxs)(eg.D, {
        tag: "div",
        className: i()(s5.FW, s5.Bm),
        onClick: u,
        "aria-label": t.cta.buttonLabel,
        [sS]: !0,
        ...o,
        children: [
            (0, l.jsx)("div", {
                className: s5.Ve,
                children: (0, l.jsx)(tp.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: i()(s5.pv, s5.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: i()(s5.pv, s5.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, l.jsx)(tm.animated.div, {
                className: s5.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, l.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function nt(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: a } = e,
        o = r.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: c, hours: u, minutes: m, seconds: h } = (0, s8.A)(o, tE.A.Millis.MINUTE),
        x = r.useMemo(
            () =>
                (0, s6.uN)(
                    { days: c, hours: u, minutes: m, seconds: h },
                    { days: em.t["Ux/De1"], hours: em.t.Lzd5Ie, minutes: em.t.odmpbP },
                ),
            [c, u, m, h],
        ),
        g = (0, d.bG)([eY.default], () => eY.default.getCurrentUser()),
        f = r.useMemo(() => (0, tq.mq)(s.config, g), [s.config, g]),
        v = r.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, tt.xv)(e).type) {
                        case t5.l.IN_GAME:
                            return em.intl.string(em.t["O/J2kr"]);
                        case t5.l.COLLECTIBLE:
                            return em.intl.string(em.t.Jg17Ut);
                        case t5.l.VIRTUAL_CURRENCY:
                            return em.intl.string(em.t.ElYQFS);
                        default:
                            return (0, tq.mq)(e, t);
                    }
                })(s.config, g),
            [s.config, g],
        ),
        { completedRatio: C, completedRatioDisplay: _ } = (0, X.O9)(s),
        S = r.useMemo(() => (0, tq.wo)(s.config, g), [s.config, g]),
        N = (0, s3.tG)(),
        b = (0, s3.WS)(),
        { isHovering: A, hoverProps: O } = s9(
            r.useCallback(
                (e) => {
                    b({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: sP.p.QUEST_HOME_HERO,
                        event: e ? eC.HAw.QUEST_HOVER : eC.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: K.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ee.jO)(K.uF.QUEST_HOME_HERO_SHELF),
                            content_position: a,
                        },
                        sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, b, a, s.id],
            ),
        ),
        { hoverSpring: T } = (0, tx.z)({ hoverSpring: +!!A, config: tm.config.gentle }),
        R = r.useCallback(() => {
            n(s.id),
                N({
                    adContentId: t,
                    relatedQuestId: s.id,
                    adCreativeType: sP.p.QUEST_HOME_HERO,
                    questContent: K.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: ee.Cy.VIEW_QUESTS,
                    questContentPosition: a,
                    sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [n, t, s.id, N, a]);
    return (0, l.jsxs)(eg.D, {
        tag: "div",
        className: i()(s5.FW, s5.$R),
        onClick: R,
        "aria-label": em.intl.string(em.t["th2+0j"]),
        [sS]: !0,
        ...O,
        children: [
            (0, l.jsxs)(p.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, l.jsx)(sX.E, { type: { text: v } }),
                    (0, l.jsx)(tm.animated.div, {
                        style: { opacity: (0, s4.a)(T.to([0, 1], [1, 0])) },
                        children: (0, l.jsx)(sX.E, { type: { text: x }, icon: s0.O }),
                    }),
                ],
            }),
            (0, l.jsx)(tm.animated.div, {
                className: s5.Tr,
                style: { transform: T.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, l.jsx)(tP.A, {
                    percentComplete: C,
                    overlayText: A && null != S ? `${S}` : void 0,
                    size: 120,
                    children: (0, l.jsx)(tk.A, {
                        quest: s,
                        questContent: K.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: A,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, l.jsx)(tm.animated.div, {
                className: s5.tw,
                style: {
                    opacity: (0, s4.a)(T.to([0, 1], [1, 0])),
                    transform: T.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, l.jsxs)(p.B, {
                    gap: 4,
                    children: [
                        (0, l.jsx)(j.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: s5.Ht,
                            children: f,
                        }),
                        (0, l.jsxs)(p.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, l.jsxs)(p.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, l.jsx)(s1.y, { size: "xs", color: ex.A.colors.ICON_MUTED.css }),
                                        (0, l.jsx)(j.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)(p.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, tL.pv)(s.config) === sJ.Z.VIDEO
                                            ? (0, l.jsx)(s2.S, { size: "xs", color: ex.A.colors.ICON_MUTED.css })
                                            : (0, l.jsx)(tb._, { size: "xs", color: ex.A.colors.ICON_MUTED.css }),
                                        (0, l.jsx)(j.E, {
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
            }),
            (0, l.jsx)(tm.animated.div, {
                className: s5.um,
                style: { transform: T.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, l.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), R();
                    },
                    text: em.intl.string(em.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var ns = s(648731);
function nn(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e;
    return (0, l.jsx)(sA, {
        className: ns.v,
        children: (0, l.jsxs)(p.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, l.jsx)(tC.R, {
                    adContentId: t.id,
                    adCreativeType: sP.p.QUEST_HOME_HERO,
                    questContent: K.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, l.jsx)(ne, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, s) =>
                    (0, l.jsx)(
                        tC.R,
                        {
                            adContentId: t.id,
                            adCreativeType: sP.p.QUEST_HOME_HERO,
                            questContent: K.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: s + 1,
                            sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                            children: (r) =>
                                (0, l.jsx)("div", {
                                    ref: (e) => {
                                        r.current = e;
                                    },
                                    children: (0, l.jsx)(nt, {
                                        heroId: t.id,
                                        quest: e,
                                        onQuestCtaClick: n,
                                        contentPosition: s + 1,
                                    }),
                                }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
}
var nl = s(95115);
function nr() {
    return (0, l.jsx)("div", { className: nl.Np });
}
function na(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = r.useRef(null);
    (0, sV.A)(n, tG.rE.QUEST_HOME_DESKTOP);
    let a = r.useMemo(() => (null != s ? (0, tv.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, l.jsxs)("div", {
              className: nl.Tv,
              children: [
                  (0, l.jsx)(nr, {}),
                  (0, l.jsx)("div", {
                      className: nl.LO,
                      children: (0, l.jsx)("img", { className: nl.LY, src: t, alt: "" }),
                  }),
                  (0, l.jsx)("div", {
                      className: i()(nl.LO, nl.jx, nl.hw),
                      children: (0, l.jsx)("img", { className: nl.LY, src: t, alt: "" }),
                  }),
                  (0, l.jsx)("div", {
                      className: i()(nl.LO, nl.jx, nl.Co),
                      children: (0, l.jsx)("img", { className: nl.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: nl.Tv,
              children: [
                  (0, l.jsx)(nr, {}),
                  (0, l.jsx)("div", {
                      className: nl.LO,
                      children: (0, l.jsx)(tp.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: n,
                          imageAsset: {
                              alt: "",
                              className: nl.LY,
                              asset: { url: a, mimetype: (0, tv.vm)(a), isAnimated: !1 },
                              assetId: a,
                          },
                          videoAsset: {
                              alt: "",
                              className: nl.LY,
                              asset: { url: s, mimetype: (0, tv.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function ni(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        n = (0, d.bG)([en.A], () => en.A.quests),
        { shelfQuests: a, isShelfEnabled: i } = (0, X.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, sY.I)();
    r.useEffect(() => {
        o();
    }, [o]);
    let c = r.useMemo(() => t.questIds?.find((e) => n.has(e)), [n, t.questIds]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tC.R, {
                adContentId: t.id,
                adCreativeType: sP.p.QUEST_HOME_HERO,
                questContent: K.uF.QUEST_HOME_HERO,
                sourceQuestContent: K.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, l.jsx)(sK, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, l.jsxs)(p.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, l.jsx)("img", { src: t.sponsorImage, alt: "", className: nl.wm }),
                                (0, l.jsx)(j.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nl.yu,
                                    children: em.intl.string(em.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, l.jsxs)(x.e, {
                            children: [
                                (0, l.jsx)(E.$, {
                                    onClick: () => {
                                        (0, sB._Q)(
                                            { adContentId: t.id, adCreativeType: sP.p.QUEST_HOME_HERO, cta: t.cta },
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
                                    (0, l.jsx)(E.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, sk.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: sP.p.QUEST_HOME_HERO,
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
                            null != t.heroImage && (0, l.jsx)(na, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, l.jsx)(nn, { hero: t, shelfQuests: a, onQuestCtaClick: s }),
        ],
    });
}
function no() {
    return (0, l.jsx)("div", { className: i()(sz.iE, sz.FG, sz.B3), children: (0, l.jsx)(ec.y, {}) });
}
function nc(e) {
    let { alt: t, ariaLabel: s, ariaHidden: n, role: r, width: a = 288, height: i = 192 } = e;
    return (0, l.jsx)("img", {
        style: { width: a, height: i },
        src: "https://cdn.discordapp.com/assets/content/f7e308880e4b4db999ae2e2c43f12f7882f717158ce2520aa36a9d60fb68c367.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var nu = s(298537);
let nd = function (e) {
    let { matchingQuestIds: t } = e;
    return (0, l.jsxs)(p.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: nu.kL,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-lg/medium",
                children: [em.intl.string(em.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, l.jsxs)(p.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: nu.y7,
                      children: [
                          (0, l.jsx)(nc, { alt: em.intl.string(em.t["Xe+fJM"]) }),
                          (0, l.jsxs)(p.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, l.jsx)(f.D, {
                                      variant: "heading-lg/medium",
                                      children: em.intl.string(em.t["Xe+fJM"]),
                                  }),
                                  (0, l.jsx)(f.D, {
                                      variant: "heading-sm/medium",
                                      children: em.intl.string(em.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)("div", {
                      className: nu.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": "382.6666666666667px",
                          "--custom-quest-grid-gap": "20px",
                      },
                      children: t.map((e, t) =>
                          (0, l.jsx)(
                              eG.Ay,
                              {
                                  eagerLoadAssets: !0,
                                  questId: e,
                                  questContent: K.uF.QUEST_HOME_DESKTOP,
                                  contentPosition: t,
                                  rowIndex: Math.floor(t / 3),
                                  className: nu.d,
                                  sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                              },
                              e,
                          ),
                      ),
                  }),
        ],
    });
};
var nm = s(379078),
    nh = s(704554);
let nx = {
    searchType: nm.n.FUZZY,
    searchStringGenerator: (e) =>
        [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(e5.Vq),
    sortType: nm.r.JARO_WINKLER,
    throttleMs: 200,
};
var nE = s(758836),
    ng = s(613057),
    nf = s(935824);
let nj = r.createContext({});
function nv(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: a = !1 } = e,
        { onScroll: i, scrollerRef: o } = r.useContext(nj);
    return (0, l.jsxs)(sC.X.Provider, {
        value: o,
        children: [
            n,
            (0, l.jsxs)(F.A, {
                onScroll: i,
                ref: o,
                children: [
                    a && t,
                    (0, l.jsxs)(D.A, { className: nf.Jo, innerClassName: nf.FG, children: [!a && t, s] }),
                ],
            }),
        ],
    });
}
function np(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: r } = e;
    return (0, l.jsx)(w.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: r, icon: h.r });
}
function nC(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: n } = (0, k.Z)({ location: tG.rE.QUEST_HOME_DESKTOP }),
        a = (0, d.bG)([S.A], () => S.A.useReducedMotion),
        i = (0, d.bG)([V.A], () => V.A.isFocused()),
        { ref: o, inViewport: c } = (0, e4.p)(),
        u = r.useRef(null);
    if (
        (r.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (i && c && !a)
                    ? u.current.paused && !a && c && i && u.current.play()
                    : u.current.pause());
        }, [a, c, i]),
        n)
    ) {
        let e = (0, W.TM)();
        return (0, l.jsx)(L.A, {
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
            children: (0, l.jsx)("source", {
                src: e
                    ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                    : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, l.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
        className: s,
        alt: "",
        onLoad: t,
    });
}
function n_(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, k.Z)({ location: tG.rE.QUEST_HOME_DESKTOP });
    return (0, l.jsxs)("div", {
        className: i()(nf.Tv, { [nf.lJ]: s }),
        children: [
            (0, l.jsx)(nr, {}),
            (0, l.jsx)("div", { className: i()(nf.nz, { [nf.ZZ]: s }) }),
            (0, l.jsx)(nC, { onLoadComplete: t, className: i()(nf.Fe, { [nf.H4]: s, [nf.Q8]: !s }) }),
        ],
    });
}
function nS(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, k.Z)({ location: tG.rE.QUEST_HOME_DESKTOP }),
        n = r.useCallback(() => {
            s ? window.open(eC.X7G.PAID_TERMS_ORBS) : window.open(z.A.getArticleURL(eC.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, l.jsx)(sK, {
        adContentId: s ? tG.yr : tG.uz,
        title: s ? em.intl.format(em.t.BCBIlp, {}) : em.intl.format(em.t.lmMBfy, {}),
        subtitle: s ? em.intl.format(em.t.U9FY0J, {}) : em.intl.string(em.t.oWCrBq),
        buttons: s
            ? (0, l.jsxs)(x.e, {
                  children: [
                      (0, l.jsx)(E.$, {
                          variant: "overlay-primary",
                          text: em.intl.string(em.t["1Wm127"]),
                          onClick: () =>
                              (0, T.Cz)({
                                  tab: nE.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: N.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, l.jsx)(E.$, {
                          variant: "overlay-secondary",
                          text: em.intl.string(em.t["7kTAgJ"]),
                          onClick: n,
                      }),
                  ],
              })
            : (0, l.jsx)(E.$, {
                  variant: "overlay-primary",
                  text: em.intl.string(em.t.hvVgAZ),
                  onClick: n,
                  icon: g.I,
                  iconPosition: "end",
              }),
        background: (0, l.jsx)(n_, { onAssetLoad: t }),
    });
}
function nN(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, previewAdCreativeId: n, hasSearchResults: r } = e,
        { questHomeHero: a, isLoading: o } = (0, X.lg)(n);
    return (0, l.jsx)("div", {
        className: i()(nf.iS, { [nf.R]: r }),
        children: o
            ? (0, l.jsx)(no, {})
            : null != a
              ? (0, l.jsx)(ni, { hero: a, onQuestCtaClick: s })
              : (0, l.jsx)(nS, { onAssetLoad: t }),
    });
}
function nb(e) {
    let { onLoadComplete: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: i()(nf.BW, nf.rZ),
                alt: "",
            }),
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: i()(nf.BW, nf.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: i()(nf.BW, nf.rZ),
                alt: "",
            }),
        ],
    });
}
let nA = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, o.zy)(),
        n = (0, o.W6)(),
        a = r.useMemo(() => (0, q.B)(s.pathname, eC.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        h = r.useMemo(() => new URLSearchParams(s.search).get(X.L1.AD_CREATIVE_IDS), [s.search]),
        x = (0, d.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: g,
            onSelectTab: S,
            tabs: L,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = Y.A.useField("tab"),
                n = (0, o.zy)(),
                l = (0, X.p5)(),
                { enabled: a } = Z.A8.useConfig({ location: tG.rE.QUEST_HOME_DESKTOP });
            r.useEffect(() => {
                Y.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let i = r.useCallback((e) => {
                Y.A.getState().setTab(e);
            }, []);
            return {
                tabs: r.useMemo(
                    () =>
                        [
                            { id: X.NC.ALL, label: a ? em.intl.string(em.t.Jt6u7B) : em.intl.string(em.t["0SzXmi"]) },
                            t
                                ? {
                                      id: X.NC.CLAIMED,
                                      label: a ? em.intl.string(em.t["3TVY/R"]) : em.intl.string(em.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: X.NC.PREVIEW_TOOL, label: em.intl.string(em.t.BDUDau) } : null,
                        ].filter(e5.Vq),
                    [t, l, a],
                ),
                selectedTab: s,
                onSelectTab: i,
            };
        })({ withClaimedQuestsTab: !a }),
        {
            query: y,
            setQuery: M,
            matchingQuestIds: D,
        } = (() => {
            let [e, t] = r.useState(""),
                [s, n] = r.useState(null),
                l = (0, d.yK)([en.A], () =>
                    (0, X.mn)(Array.from(en.A.quests.values()), { sortMethod: tG.kL.SUGGESTED }).map((e) => e.config),
                ),
                a = e.trim().toLowerCase(),
                i = "" !== a,
                o = r.useCallback(
                    (e) => {
                        n(
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
            return (0, nh.RT)(a, l, o, nx), { matchingQuestIds: s, query: e, setQuery: t };
        })();
    r.useLayoutEffect(() => {
        a && g === X.NC.CLAIMED && Y.A.setState({ tab: X.NC.ALL });
    }, [a, g]);
    let { onScroll: w } = (0, U.G)(),
        F = J.A.getState().getUtmCurrentContext(),
        V = sF((e) => e.registerAssetLoad),
        W = r.useRef(F);
    r.useEffect(() => {
        W.current = F;
    }),
        r.useEffect(() => {
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
    let { enabled: z } = (0, k.Z)({ location: tG.rE.QUEST_HOME_DESKTOP });
    (0, R.HU)({ location: em.intl.string(em.t.JALI2K) });
    let et = r.useRef(null),
        { enabled: es } = Z.A8.useConfig({ location: tG.rE.QUEST_HOME_DESKTOP }),
        el = r.useRef(null),
        er = r.useCallback((e) => {
            el.current?.scrollToQuest(e);
        }, []),
        ea = r.useMemo(() => ((0, $.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        ei = r.useCallback(() => {
            (0, P.Y)({
                pageType: eC.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eC.JJy.ORBS_BALANCE_MENU,
                ctaObject: eC.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, T.Cz)({ tab: nE.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU });
        }, []);
    r.useEffect(() => {
        (0, _.I)(eC.BVt.QUEST_HOME);
    }, []),
        r.useEffect(() => {
            Q.trigger();
        }, []),
        r.useEffect(() => {
            if (null != x) return;
            let e = new URLSearchParams(s.search),
                l = e.get(X.L1.TAB);
            if (l === X.NC.PREVIEW_TOOL) {
                let t = e.get(X.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", eC.e$_.DEEP_LINK, {
                    type: ng.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== X.NC.PREVIEW_TOOL) {
                let t = (0, $.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(X.L1.SORT),
                    r = e.get(X.L1.FILTER),
                    a = e.get(X.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", eC.e$_.DEEP_LINK, {
                    type: ng.XK.QUEST_HOME,
                    params: { questId: (0, $.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: a },
                });
            }
        }, [s.search, x, n.action, s.hash, t]),
        r.useEffect(() => {
            t && (0, I.Dr)(m.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eo = r.useCallback(() => {
            (0, e3.navigateToQuestHome)({ fromContent: K.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                G.default.track(eC.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: ee.Cy.VIEW_QUESTS,
                    click_id: (0, c.A)(),
                    is_targeted: !1,
                    ...(0, ee.fF)(K.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        ec = r.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), et.current?.scrollToTop({ animate: !1 }), S(e);
            },
            [n, S],
        ),
        eu = r.useCallback(() => {
            M("");
        }, [M]);
    return (0, l.jsx)(sq.M.Provider, {
        value: r.useMemo(() => ({ onAssetLoadComplete: V }), [V]),
        children: (0, l.jsx)(nj.Provider, {
            value: r.useMemo(() => ({ onScroll: w, scrollerRef: et }), [w, et]),
            children: (0, l.jsx)("div", {
                className: i()(nf.kL, { [nf.KY]: !t }),
                children: a
                    ? (0, l.jsx)(nv, {
                          withFullBleedBanner: !0,
                          header: (0, l.jsx)(np, { selectedTab: g, onSelectTab: ec, tabs: L }),
                          banner: (0, l.jsx)(H.A, {
                              title: em.intl.string(em.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, l.jsx)(E.$, {
                                  variant: "overlay-primary",
                                  text: em.intl.string(em.t.GURBQl),
                                  onClick: eo,
                              }),
                              className: nf.Gj,
                              children: (0, l.jsx)(nb, { onLoadComplete: V }),
                          }),
                          children: (0, l.jsxs)("div", {
                              className: nf.kj,
                              children: [
                                  (0, l.jsx)(f.D, {
                                      variant: "heading-xl/semibold",
                                      children: em.intl.string(em.t.z8YP2A),
                                  }),
                                  (0, l.jsx)(j.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: em.intl.string(em.t.HdKh65),
                                  }),
                                  (0, l.jsx)(v.Q, {
                                      text: em.intl.string(em.t["1CdL8d"]),
                                      onClick: eo,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, l.jsx)(nv, {
                          header: (0, l.jsx)(np, {
                              selectedTab: g,
                              onSelectTab: ec,
                              tabs: L,
                              endContent: (0, l.jsxs)(p.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      es &&
                                          (0, l.jsx)(C.I, {
                                              query: y,
                                              onChange: M,
                                              placeholder: em.intl.string(em.t.y10TI2),
                                              onClear: eu,
                                              size: "sm",
                                          }),
                                      z &&
                                          (0, l.jsx)(B.SS, {
                                              analyticsPage: eC.liQ.GLOBAL_DISCOVERY_QUESTS,
                                              cardAlignment: B.cP.END,
                                              ctaText: em.intl.string(em.t["J+vlIR"]),
                                              ctaOnClick: ei,
                                          }),
                                  ],
                              }),
                          }),
                          banner:
                              g === X.NC.ALL &&
                              (0, l.jsx)(nN, {
                                  onAssetLoad: V,
                                  onQuestCtaClick: er,
                                  hasSearchResults: null != D,
                                  previewAdCreativeId: h,
                              }),
                          children:
                              g === X.NC.CLAIMED
                                  ? (0, l.jsx)(sE, { onSelectTab: ec })
                                  : g === X.NC.PREVIEW_TOOL
                                    ? (0, l.jsx)(e6, {})
                                    : es
                                      ? (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                (0, l.jsx)(sU, {
                                                    ref: el,
                                                    deepLinkedQuestId: ea,
                                                    hasSearchResults: null != D,
                                                }),
                                                null != D && (0, l.jsx)(nd, { matchingQuestIds: D }),
                                            ],
                                        })
                                      : (0, l.jsx)(t3, { ref: el }),
                      }),
            }),
        }),
    });
};
