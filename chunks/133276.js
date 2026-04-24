s.r(t), s.d(t, { default: () => sD }), s(323874), s(14289), s(35956);
var n = s(627968),
    r = s(64700),
    a = s(503698),
    l = s.n(a),
    i = s(873263),
    o = s(132500),
    c = s(110259),
    d = s(17928),
    u = s(554146),
    _ = s(577473),
    m = s(825484),
    h = s(821609),
    f = s(509434),
    p = s(534514),
    b = s(834730),
    x = s(123292),
    g = s(944791),
    E = s(775602),
    C = s(793574),
    j = s(139286),
    v = s(197111),
    S = s(10088),
    N = s(693477),
    A = s(726249),
    T = s(607470),
    O = s(826673),
    R = s(840251),
    L = s(688151);
let y = new R.E([], L.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var I = s(711111),
    H = s(701508),
    Q = s(979590),
    w = s(749638),
    M = s(783531),
    U = s(334465),
    k = s(318346),
    F = s(270051),
    B = s(70926),
    D = s(531685),
    q = s(954571),
    P = s(676279),
    W = s(975571),
    V = s(240248),
    G = s(507107),
    $ = s(631001),
    z = s(87549),
    K = s(890687),
    Y = s(590202);
s(321073);
var Z = s(228366),
    J = s(829219),
    X = s(859703);
s(667532);
var ee = s(783878),
    et = s(408278),
    es = s(663417),
    en = s(922016),
    er = s(624479),
    ea = s(289873),
    el = s(416052),
    ei = s(417098),
    eo = s(985018);
let ec = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, n.jsx)(ei.$T, {
        color: ei.Hv.DANGER,
        children: (0, n.jsx)("div", { children: null != s ? s : eo.intl.string(eo.t.ZErSg5) }),
    });
};
var ed = s(661531),
    eu = s(602853),
    e_ = s(817281),
    em = s(688810),
    eh = s(692798),
    ef = s(363195),
    ep = s(652215),
    eb = s(398876);
let ex = function () {
    let { analyticsLocations: e } = (0, em.Ay)(),
        t = (0, d.bG)([ef.A], () => ef.A.theme),
        s = r.useRef(null);
    r.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let a = (0, eu.r)(ed.A.colors.BACKGROUND_BASE_LOW, ep.NJ8.LIGHT),
        l = (0, eu.r)(ed.A.colors.BACKGROUND_BASE_LOW, ep.NJ8.DARKER),
        i = (0, eu.r)(ed.A.colors.BACKGROUND_BASE_LOW, ep.NJ8.MIDNIGHT),
        o = r.useMemo(
            () => [
                { theme: ep.NJ8.LIGHT, label: eo.t.K2sFfo, color: a.hex() },
                { theme: ep.NJ8.DARKER, label: eo.t.b8Cei3, color: l.hex() },
                { theme: ep.NJ8.MIDNIGHT, label: eo.t.Do4ZJx, color: i.hex() },
            ],
            [a, l, i],
        ),
        c = r.useCallback(
            (t) => {
                (0, eh.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, e_.u_)({ theme: t });
            },
            [e],
        ),
        u = r.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, n.jsx)("div", {
        className: eb.N,
        children: (0, n.jsxs)("div", {
            className: eb.t7,
            children: [
                o.map((e) =>
                    (0, n.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: eb.Du,
                            onClick: () => c(e.theme),
                            "aria-label": eo.intl.string(e.label),
                            children: [
                                (0, n.jsx)("div", {
                                    className: `${eb.WT} ${t === e.theme ? eb.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, n.jsx)("span", { className: eb.i, children: eo.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, n.jsx)(et.K, {
                    onClick: u,
                    "aria-label": eo.intl.string(eo.t.yBZMsQ),
                    icon: es.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eg = s(818348),
    eE = s(60857);
let eC = function (e) {
    let { questId: t, setQuestId: s, quest: a, refreshQuest: l } = e,
        [i, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        _ = r.useRef(null),
        f = (0, K.pT)(),
        p = (0, d.bG)([X.A], () => (null != t ? X.A.getFetchQuestPreviewError(t) : null), [t]),
        b = (0, d.bG)([X.A], () => null != t && X.A.isFetchingQuestPreview(t), [t]),
        x = r.useMemo(() => {
            let e = f.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [f, t]),
        g = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, J.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        E = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, J.UZ)(t);
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
                    await (0, J.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        j = r.useCallback(
            (e) => {
                (0, V.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, n.jsxs)("div", {
        className: eE.Fr,
        children: [
            (0, n.jsx)("div", {
                children: (0, n.jsx)("div", {
                    className: eE.Br,
                    children: (0, n.jsxs)("div", {
                        className: eE.bo,
                        children: [
                            (0, n.jsx)(ex, {}),
                            (0, n.jsxs)("div", {
                                className: eE.b8,
                                children: [
                                    (0, n.jsx)(
                                        ee.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: x,
                                            value: t,
                                            onSelectionChange: j,
                                            placeholder: eo.intl.string(eo.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, V.uJ)(t?.trim())) return e;
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
                                        `${t}-${a?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, n.jsx)(et.K, {
                                        onClick: l,
                                        "aria-label": eo.intl.string(eo.t.wzzjk9),
                                        icon: es.f,
                                        loading: b,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != a &&
                (0, n.jsx)("div", {
                    className: eE.in,
                    children: (0, n.jsxs)(m.e, {
                        className: eE.xv,
                        children: [
                            (0, n.jsx)(h.$, {
                                onClick: g,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.jQEfRT),
                            }),
                            (0, n.jsx)(h.$, {
                                onClick: E,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.taqkwK),
                            }),
                            (0, n.jsx)(h.$, {
                                onClick: C,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.cKSLr4),
                            }),
                            (0, n.jsx)(en.Y, {
                                targetElementRef: _,
                                shouldShow: c,
                                onRequestClose: () => u(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, n.jsx)("div", {
                                        className: eE.PP,
                                        children: (0, n.jsx)("div", {
                                            className: eE.sH,
                                            children: (0, n.jsx)(el.A, {
                                                value: eg.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eo.intl.string(eo.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, n.jsx)(et.K, {
                                        buttonRef: _,
                                        onClick: () => u(!c),
                                        "aria-label": eo.intl.string(eo.t.rNGQfD),
                                        icon: er.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != p ? (0, n.jsx)(ec, { error: p }) : null,
            b ? (0, n.jsx)(ea.y, {}) : null,
        ],
    });
};
var ej = s(761508),
    ev = s(797788);
let eS = () => (0, n.jsx)("div", { className: ev.y });
var eN = s(834615),
    eA = s(332544);
let eT = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eA.x3,
        children: (0, n.jsxs)("div", {
            className: eA.B0,
            children: [
                (0, n.jsx)(p.D, {
                    className: eA.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.L2mlUb),
                }),
                (0, n.jsx)(eN.A, { quest: t }),
            ],
        }),
    });
};
var eO = s(241124),
    eR = s(28082),
    eL = s(717695),
    ey = s(763578),
    eI = s(111113);
let eH = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eA.x3,
        children: (0, n.jsxs)("div", {
            className: ey.wp,
            children: [
                (0, n.jsx)(p.D, {
                    className: ey.Oo,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.rjVPdM),
                }),
                (0, n.jsx)("div", {
                    className: ey.RE,
                    children: (0, n.jsx)("div", {
                        className: ey.Z,
                        children: (0, n.jsx)("div", {
                            className: eI.C3,
                            children: (0, n.jsx)(eL.A, {
                                children: (0, n.jsx)(eO.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, n.jsx)(eR.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eQ = s(59350);
let ew = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eA.x3,
        children: (0, n.jsxs)("div", {
            className: eA.B0,
            children: [
                (0, n.jsx)(p.D, {
                    className: eA.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.gWinpQ),
                }),
                (0, n.jsx)("div", {
                    className: eA.YT,
                    children: (0, n.jsx)(eQ.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eM = s(160778),
    eU = s(330034);
let ek = function (e) {
    let { questId: t } = e;
    return (0, n.jsx)("div", {
        className: eA.x3,
        children: (0, n.jsxs)("div", {
            className: eA.B0,
            children: [
                (0, n.jsx)(p.D, { variant: "heading-md/semibold", children: eo.intl.string(eo.t.IcljUu) }),
                (0, n.jsx)("div", {
                    className: eU.wu,
                    children: (0, n.jsx)("span", { className: eU.cy, children: eo.intl.string(eo.t.q97mEu) }),
                }),
                (0, n.jsx)("div", {
                    className: eU.oU,
                    children: (0, n.jsx)("div", {
                        className: eU.zx,
                        children: (0, n.jsx)("div", {
                            className: eU.Lj,
                            children: (0, n.jsx)("div", {
                                className: eU.n0,
                                children: (0, n.jsx)(eM.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eF = s(291922);
let eB = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eA.x3,
        children: (0, n.jsxs)("div", {
            className: eA.B0,
            children: [
                (0, n.jsx)(p.D, {
                    className: eA.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t["5wnpF3"]),
                }),
                (0, n.jsx)(eF.A, {
                    className: eA.d,
                    quest: t,
                    questContent: G.uF.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: G.uF.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
var eD = s(939249),
    eq = s(97808),
    eP = s(778712),
    eW = s(87664),
    eV = s(287809),
    eG = s(427262),
    e$ = s(198525),
    ez = s(66176);
let eK = function (e) {
        let { quest: t } = e,
            [s, a] = r.useState(!1),
            i = r.useRef(null),
            o = (0, d.bG)([eV.default], () => eV.default.getCurrentUser()),
            c = eG.Ay.useName(o),
            u = (0, eW.A)(o?.id),
            _ = r.useCallback(
                (e) =>
                    (0, n.jsx)(e$.A, {
                        name: c,
                        quest: t,
                        memberListItemRef: i,
                        applicationStream: u,
                        ...e,
                        closePopout: () => {
                            a(!1);
                        },
                    }),
                [t, u, c],
            );
        return (0, n.jsx)("div", {
            className: eA.x3,
            children: (0, n.jsxs)("div", {
                className: eA.B0,
                children: [
                    (0, n.jsx)(p.D, {
                        className: ez.R_,
                        variant: "heading-md/semibold",
                        children: eo.intl.string(eo.t.jY7Zxg),
                    }),
                    (0, n.jsx)("div", { className: ez.$Q, children: eo.intl.string(eo.t.q3hbne) }),
                    (0, n.jsx)("div", {
                        className: ez.k0,
                        children: (0, n.jsx)(en.Y, {
                            targetElementRef: i,
                            renderPopout: _,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => a(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: en.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, n.jsx)("div", {
                                    ref: i,
                                    className: l()(ez.Tn, { [ez.wH]: s }),
                                    children: (0, n.jsx)(eD.D, {
                                        onClick: () => a(!s),
                                        tabIndex: 0,
                                        children: (0, n.jsxs)("div", {
                                            className: ez.lm,
                                            children: [
                                                (0, n.jsx)(eq.eu, {
                                                    size: eP._3.SIZE_32,
                                                    src: o?.getAvatarURL(void 0, 32),
                                                    status: ep.clD.ONLINE,
                                                    "aria-label": o?.username,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: ez.Fj,
                                                    children: [
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: eo.intl.string(eo.t.b9w3bO),
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
    eY = (e) => {
        let { questId: t, selectedSections: s } = e,
            r = (0, d.bG)([X.A], () => X.A.getQuest(t));
        if (null != (0, d.bG)([X.A], () => X.A.getFetchQuestPreviewError(t)) || null == r) return null;
        let a = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                a("quest_bar") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eH, { quest: r }), (0, n.jsx)(eS, {})] }),
                a("home_card") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eB, { quest: r }), (0, n.jsx)(eS, {})] }),
                a("share_embed") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ek, { questId: r.id }), (0, n.jsx)(eS, {})] }),
                a("channel_call_header") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ew, { quest: r }), (0, n.jsx)(eS, {})] }),
                a("members_list") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eK, { quest: r }), (0, n.jsx)(eS, {})] }),
                a("activity_panel") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eT, { quest: r }), (0, n.jsx)(eS, {})] }),
            ],
        });
    };
var eZ = s(497275);
function eJ(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: a, controls: l } = e,
        i = [
            { value: "quest_bar", label: eo.intl.string(eo.t.rjVPdM) },
            { value: "share_embed", label: eo.intl.string(eo.t["D/gSWS"]) },
            { value: "home_card", label: eo.intl.string(eo.t["5wnpF3"]) },
            { value: "channel_call_header", label: eo.intl.string(eo.t.gWinpQ) },
            { value: "members_list", label: eo.intl.string(eo.t.wpYima) },
            { value: "activity_panel", label: eo.intl.string(eo.t.L2mlUb) },
        ],
        o = 0 === s.length || s.length === i.length,
        c = r.useMemo(() => (o ? "all" : 1 === s.length ? s[0] : "all"), [s, o]);
    return (0, n.jsxs)("div", {
        className: eZ.kL,
        children: [
            (0, n.jsx)(p.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: eo.intl.string(eo.t.BDUDau),
            }),
            (0, n.jsx)("div", { className: eZ.pf, children: l }),
            (0, n.jsxs)(ej.V, {
                type: "top",
                look: "brand",
                selectedItem: c,
                onItemSelect: (e) => {
                    a?.(e);
                },
                children: [
                    (0, n.jsx)(ej.V.Item, { id: "all", children: eo.intl.string(eo.t.Y9DnPa) }),
                    i.map((e) => (0, n.jsx)(ej.V.Item, { id: e.value, children: e.label }, e.value)),
                ],
            }),
            (0, n.jsx)("div", { className: eZ.tZ, children: (0, n.jsx)("div", { className: eZ.Qs, children: t }) }),
        ],
    });
}
function eX(e) {
    return new URLSearchParams(e).get(K.L1.QUEST_ID);
}
let e0 = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: a } = (function (e) {
            let t = (0, i.W6)(),
                [s, n] = r.useState(e),
                { search: a } = (0, i.zy)();
            return (
                r.useEffect(() => {
                    let t = eX(a);
                    null != t ? n(t) : null != e && n(e);
                }, [e, a]),
                r.useEffect(() => {
                    if (null == s || eX(a) === s) return;
                    let e = new URLSearchParams();
                    e.set(K.L1.TAB, K.NC.PREVIEW_TOOL),
                        e.set(K.L1.QUEST_ID, s),
                        t.push(`${ep.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, a]),
                { questId: s, setQuestId: n }
            );
        })(t),
        l = (0, d.bG)([X.A], () => (null != s ? X.A.getQuest(s) : void 0), [s]),
        o = (0, d.bG)([X.A], () => (null != s ? X.A.getQuestLoadedViaPreview(s) : null), [s]);
    r.useEffect(() => {
        null != s &&
            (0, J.dQ)(s).then(() => {
                (0, J.Gt)(s);
            });
    }, [s]),
        r.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === s && (0, J.dQ)(s);
            };
            return (
                Z.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    Z.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]);
    let [c, u] = r.useState([]);
    return (0, n.jsx)(eJ, {
        controls: (0, n.jsx)(eC, {
            questId: s,
            setQuestId: a,
            quest: l,
            refreshQuest: () => {
                null != s && (0, J.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? u([]) : u([e]);
        },
        children: o?.id != null ? (0, n.jsx)(eY, { questId: o?.id, selectedSections: c }) : null,
    });
};
var e1 = s(545986),
    e5 = s(203879),
    e6 = s(403362),
    e7 = s(167417),
    e9 = s(783977),
    e2 = s(651892),
    e8 = s(305866),
    e4 = s(915089),
    e3 = s(332733);
function te(e) {
    let { children: t, id: s } = e;
    return (0, n.jsx)(b.E, { className: e3.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let tt = function (e) {
    let { children: t, renderPopout: s } = e,
        a = (0, e4.GV)(),
        l = r.useRef(null);
    return (0, n.jsx)(en.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, n.jsx)(e8.l, { className: e3.S, "aria-labelledby": a, children: s(e, a) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var ts = s(612539);
let tn = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        a = (0, K.Nb)(),
        l = r.useCallback(
            (e) => (n) => {
                let r = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...r]);
            },
            [s, t],
        );
    return (0, n.jsx)(tt, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, n.jsxs)("div", {
                children: [
                    a.map((e, t) => {
                        let a = e.options.map((e) => ({ label: (0, e2.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, n.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, n.jsx)("hr", { className: ts.B }),
                                    (0, n.jsx)(te, { id: i, children: e.heading }),
                                    (0, n.jsx)(e7.$, {
                                        "aria-labelledby": i,
                                        options: a,
                                        selectedValues: o,
                                        onChange: l(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, n.jsx)("hr", { className: ts.B }),
                    (0, n.jsx)("div", {
                        className: ts.W,
                        children: (0, n.jsx)(h.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eo.intl.string(eo.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(h.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eo.intl.formatToPlainString(eo.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: e9.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tr = s(144228),
    ta = s(715482);
let tl = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: a } = e,
        l = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, K.XD)(),
        o = r.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, n.jsx)(tt, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(te, { id: t, children: eo.intl.string(eo.t.tZXJIS) }),
                    (0, n.jsx)(tr.z, {
                        options: o,
                        onChange: (e) => {
                            s(), l(e);
                        },
                        value: a,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(h.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, e2.Js)(a),
                icon: ta.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var ti = s(419354),
    to = s(535185),
    tc = s(717421),
    td = s(927813),
    tu = s(710969),
    t_ = s(121480);
let tm = 4 * td.A.Millis.SECOND;
function th(e) {
    let { children: t } = e,
        s = r.useRef(null),
        [a, l] = r.useState(null),
        i = r.useCallback(() => {
            l(
                (function (e) {
                    if (null == e) return 1;
                    let t = Math.floor((e.clientWidth + 24) / 360);
                    return t > 0 ? t : 1;
                })(s.current),
            );
        }, [l]);
    return (
        (0, to.g)(s, i, [], { fireOnMount: !0 }),
        (0, n.jsx)("div", {
            className: t_.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== a && t(a),
        })
    );
}
let tf = r.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: a,
            isFetching: o,
            hasFetched: c,
            hasFiltersApplied: d = !1,
            onClearFilters: u,
        } = e,
        _ = (0, i.zy)(),
        m = r.useRef(""),
        [h, f] = r.useState(null),
        [x, g] = r.useState(0),
        [{ highlightAnimationProgress: E }, C] = (0, tc.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: tm },
        })),
        j = r.useCallback(
            (e) => {
                let t = (0, tu.vc)(e, s, a);
                return null != t && (f(t.id), g((e) => e + 1), !0);
            },
            [s, a],
        );
    return (r.useImperativeHandle(t, () => ({ scrollToQuest: j }), [j]),
    r.useLayoutEffect(() => {
        if (0 === _.hash.length) {
            m.current = "";
            return;
        }
        o || !c || (_.hash !== m.current && j(_.hash.slice(1)) && (m.current = _.hash));
    }, [_.hash, o, c, j]),
    r.useLayoutEffect(() => {
        if (null == h) return;
        let e = document.getElementById(`quest-tile-${h}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            C({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || f(null);
                },
            }));
    }, [h, x, C]),
    o && 0 === s.length)
        ? (0, n.jsx)(ea.y, { className: t_.u1 })
        : 0 === s.length
          ? (0, n.jsxs)("div", {
                className: t_.y7,
                children: [
                    (0, n.jsx)(p.D, {
                        variant: "heading-xl/semibold",
                        children: eo.intl.string(d ? eo.t.PBfFnx : eo.t.NqFP6z),
                    }),
                    (0, n.jsx)(b.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: d ? eo.intl.format(eo.t.LdYS1H, { onClick: u }) : eo.intl.string(eo.t.LhD4yH),
                    }),
                ],
            })
          : (0, n.jsx)(th, {
                children: (e) =>
                    s.map((t, s) => {
                        let r = Math.floor(s / e),
                            a = h === t.id,
                            i = null != h && !a;
                        return (0, n.jsxs)(
                            ti.animated.div,
                            {
                                className: l()({ [t_.XB]: a }),
                                style: a
                                    ? {
                                          boxShadow: (0, ti.to)(
                                              [E.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                                              (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                                          ),
                                      }
                                    : i
                                      ? {
                                            opacity: (0, ti.to)(
                                                [E.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })],
                                                (e) => e,
                                            ),
                                        }
                                      : void 0,
                                children: [
                                    a && (0, n.jsx)("div", { className: t_.E4 }, x),
                                    (0, n.jsx)(eF.A, {
                                        quest: t,
                                        questContent: G.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: r,
                                        className: t_.d,
                                        sourceQuestContent: G.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var tp = s(458518),
    tb = s(654487),
    tx = s(65990);
let tg = [],
    tE = K.L1.SORT,
    tC = K.L1.FILTER,
    tj = r.forwardRef(function (e, t) {
        let s,
            a,
            l,
            o,
            c = r.useRef(null),
            [d, u] =
                ((s = (0, tp.o)()),
                (a = (0, i.W6)()),
                (l = r.useRef(null)),
                (o = r.useCallback(
                    (e) => {
                        let t = new URLSearchParams(l.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        (l.current = t),
                            a.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                l.current = null;
                            });
                    },
                    [s, a],
                )),
                [s, o]),
            _ = r.useMemo(() => {
                var e;
                return (
                    (e = d.get(tE)),
                    ((0, V.uJ)(e) ? null : (Object.values(tb.kL).find((t) => t === e) ?? null)) ?? tb.kL.SUGGESTED
                );
            }, [d]),
            m = r.useMemo(
                () =>
                    (function (e) {
                        if ((0, V.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tb.WQ)(e))
                            .filter(e6.Vq);
                        return t.length > 0 ? t : null;
                    })(d.get(tC)) ?? tg,
                [d],
            ),
            h = r.useCallback(
                (e) => {
                    u({ [tE]: e });
                },
                [u],
            ),
            f = r.useCallback(
                (e) => {
                    u({
                        [tC]:
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
                [u],
            ),
            {
                quests: b,
                excludedQuests: x,
                isFetchingCurrentQuests: g,
                hasFetched: E,
            } = (0, K.Qh)(
                K.NC.ALL,
                r.useMemo(() => ({ sortMethod: _, filters: m }), [_, m]),
            ),
            C = r.useCallback(() => {
                f(tg);
            }, [f]),
            j = r.useRef(null),
            v = r.useRef(null),
            S = (0, i.zy)(),
            N = (0, i.W6)();
        return (
            r.useEffect(() => {
                "" !== S.hash &&
                    null != j.current &&
                    null != v.current &&
                    (_ !== j.current || m !== v.current) &&
                    N.replace({ ...S, hash: void 0 });
            }, [_, m, S, N]),
            r.useEffect(() => {
                j.current = _;
            }, [_]),
            r.useEffect(() => {
                v.current = m;
            }, [m]),
            (0, K.$P)({ selectedSortMethod: _, selectedFilters: m, numQuestsVisible: b.length }),
            r.useImperativeHandle(
                t,
                () => ({
                    resetSortingFiltering: () => {
                        C(), h(tb.kL.SUGGESTED);
                    },
                    scrollToQuest: (e) => {
                        c.current?.scrollToQuest(e);
                    },
                }),
                [C, h],
            ),
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("div", {
                        className: tx.Mj,
                        children: [
                            (0, n.jsx)(p.D, { variant: "heading-lg/medium", children: eo.intl.string(eo.t.giYD00) }),
                            (0, n.jsxs)("div", {
                                className: tx.Nf,
                                children: [
                                    (0, n.jsx)(tl, { onChange: h, optionClassName: tx.Uq, selectedSortMethod: _ }),
                                    (0, n.jsx)(tn, { onChange: f, selectedFilters: m }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(tf, {
                        ref: c,
                        quests: b,
                        excludedQuests: x,
                        isFetching: g,
                        hasFetched: E,
                        hasFiltersApplied: m.length > 0,
                        onClearFilters: C,
                    }),
                ],
            })
        );
    });
var tv = s(575593),
    tS = s(440703),
    tN = s(462887),
    tA = s(187322),
    tT = s(765671),
    tO = s(736653),
    tR = s(162232),
    tL = s(859387),
    ty = s(734736),
    tI = s(303136),
    tH = s(265234),
    tQ = s(181713);
let tw = (e) => {
    let { className: t, isAnimated: s = !1, questName: r } = e,
        a = s ? tQ.A : tQ.A + "?format=webp";
    return (0, n.jsx)("div", {
        className: l()(tH.k, t),
        children: s
            ? (0, n.jsx)(tI.A, {
                  preload: "auto",
                  className: tH.L,
                  children: (0, n.jsx)("source", { src: a, type: "video/webm" }),
              })
            : (0, n.jsx)("img", { className: tH.L, src: a, alt: r }),
    });
};
var tM = s(57718),
    tU = s(659249);
let tk = (0, r.memo)(function (e) {
    let { quest: t } = e,
        [s, a] = (0, r.useState)(!1),
        [i, o] = (0, r.useState)(24),
        [c, u] = (0, r.useState)(!1),
        _ = (0, r.useRef)(null),
        m = (0, r.useRef)(null),
        h = (0, r.useRef)(null),
        f = (0, d.bG)([eV.default], () => eV.default.getCurrentUser()),
        { ref: x, height: g = 0 } = (0, tT.Ay)(),
        E = (0, tO.Ay)(),
        C = (0, K.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        j = t.userStatus?.claimedTier ?? 0,
        v = t.config.rewards[j],
        S = v?.type === tS.l.FRACTIONAL_PREMIUM,
        N = v?.type === tS.l.COLLECTIBLE,
        A = v?.type === tS.l.VIRTUAL_CURRENCY,
        O = v?.collectibleProduct?.items?.[0],
        R = O?.type === tv.R.AVATAR_DECORATION ? O : null,
        L = r.useMemo(
            () =>
                null == v
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? eo.intl.format(eo.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : v.name,
            [v, A, t],
        );
    (0, tT.i4)(_, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == _.current || null == h.current) return;
        let s = _.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            r = h.current.getBoundingClientRect();
        o((n.top - s.top - r.height) / 2);
    });
    let y = (0, tN.M)(E),
        I = r.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        H = r.useMemo(() => (0, tL.tW)(t, tL.fY.REWARD), [t]),
        Q = s ? g + 8 : 0,
        { content_position: w, row_index: M, ...U } = (0, Y.fF)(G.uF.TROPHY_CASE_CARD),
        k = () => {
            a(!0), q.default.track(ep.HAw.QUEST_HOVER, { quest_id: t.id, ...U });
        },
        F = () => {
            a(!1);
        },
        B = (e) => {
            u(!0), q.default.track(ep.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == v || c
        ? null
        : (0, n.jsx)(tA.vN, {
              children: (0, n.jsxs)("div", {
                  ref: _,
                  tabIndex: 0,
                  onFocus: k,
                  onBlur: F,
                  onMouseEnter: k,
                  onMouseLeave: F,
                  className: l()(tU.kL, { [tU.yo]: s }),
                  children: [
                      null != f &&
                          N &&
                          null != R &&
                          (0, n.jsx)("div", {
                              ref: h,
                              className: tU.FX,
                              style: { top: i },
                              children: (0, n.jsx)(tR.A, {
                                  avatarDecorationOverride: R,
                                  user: f,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      S
                          ? (0, n.jsx)(ty.A, { className: tU.Sl })
                          : A
                            ? (0, n.jsx)(tw, {
                                  className: tU.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : H.isAnimated
                              ? (0, n.jsx)(T.A, {
                                    className: tU.JU,
                                    autoPlay: !1,
                                    children: (0, n.jsx)("source", {
                                        src: H.url,
                                        type: H.mimetype ?? void 0,
                                        onError: () => B(H.url),
                                    }),
                                })
                              : (0, n.jsx)("img", {
                                    className: tU.Sl,
                                    src: H.url,
                                    alt: t.config.messages.questName,
                                    onError: () => B(H.url),
                                }),
                      (0, n.jsx)("div", { className: l()(tU.Lw, { [tU.en]: y, [tU.So]: !y }) }),
                      (0, n.jsx)("div", {
                          ref: m,
                          className: tU.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, n.jsx)(tM.Ay, {
                              logotypeClassName: l()(tU.wm, { [tU.A0]: I }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          ref: x,
                          className: tU.zH,
                          children: [
                              (0, n.jsx)(p.D, {
                                  className: tU.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eo.intl.format(eo.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, n.jsx)(b.E, {
                                  variant: "text-sm/medium",
                                  color: y ? "text-muted" : "always-white",
                                  style: { opacity: y ? 1 : 0.75 },
                                  children: eo.intl.format(eo.t["kXVcV+"], { reward: L, claimedDate: C }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var tF = s(396478);
function tB(e) {
    let { onClick: t } = e,
        r = (0, tO.Ay)();
    return (0, n.jsxs)(tF.pp, {
        theme: r,
        children: [
            (0, n.jsx)(tF.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, n.jsx)(tF.SG, { note: eo.intl.format(eo.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var tD = s(975424);
function tq(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: r } = (0, K.Iq)();
    return r && 0 === s.length
        ? (0, n.jsx)(ea.y, { className: tD.u })
        : 0 === s.length
          ? (0, n.jsx)(tB, { onClick: () => t(K.NC.ALL) })
          : (0, n.jsx)("div", {
                className: tD.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, n.jsx)(tk, { quest: e }, e.id)),
            });
}
var tP = s(353640),
    tW = s(121894),
    tV = s(851936);
let tG = (0, tP.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, tV.L)({ location: tb.rE.QUEST_HOME_DESKTOP });
        if (s.info === eg.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let r = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (r.lastOutputLogTime = n)),
            null == t().logger && (r.logger = s),
            (0, tW.r)(() => e(r));
    },
}));
var t$ = s(516226),
    tz = s(323889),
    tK = s(331322),
    tY = s(561844),
    tZ = s(901406),
    tJ = s(415441),
    tX = s(73473),
    t0 = s(139384),
    t1 = s(43990),
    t5 = s(770178),
    t6 = s(14233);
function t7(e, t) {
    let { row_index: s, ...n } = (0, Y.fF)(G.uF.QUEST_HOME_HERO);
    (0, tY.Qg)({
        adContentId: e,
        adCreativeType: tz.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: G.uF.QUEST_HOME_HERO,
    });
}
let t9 = r.forwardRef(function (e, t) {
    let { adContentId: s, topContent: a, title: i, subtitle: o, buttons: c, background: d, className: u } = e,
        [_, m] = r.useState("display-lg"),
        h = r.useCallback((e) => {
            m(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        f = (0, t5.w)(h, [], { fireOnMount: !0 }),
        x = r.useCallback(() => t7(s, ep.HAw.QUEST_HOVER), [s]),
        g = r.useCallback(() => t7(s, ep.HAw.QUEST_HOVER_OFF), [s]);
    return (0, n.jsx)(t1.N, {
        theme: ep.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, n.jsx)("div", {
                className: l()(t6.iE, e, u),
                onMouseEnter: x,
                onMouseLeave: g,
                ref: (e) => {
                    (f.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, n.jsxs)("div", {
                    className: t6.FG,
                    children: [
                        (0, n.jsxs)(tK.B, {
                            className: t6.Qs,
                            direction: "vertical",
                            justify: null != a ? "space-between" : "end",
                            children: [
                                a,
                                (0, n.jsxs)(tK.B, {
                                    className: t6.yp,
                                    gap: 16,
                                    children: [
                                        (0, n.jsxs)(tK.B, {
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(p.D, {
                                                    color: "text-strong",
                                                    variant: _,
                                                    className: t6.DD,
                                                    children: i,
                                                }),
                                                (0, n.jsx)(b.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: t6.VA,
                                                    children: o,
                                                }),
                                            ],
                                        }),
                                        c,
                                    ],
                                }),
                            ],
                        }),
                        d,
                    ],
                }),
            }),
    });
});
var t2 = s(194526),
    t8 = s(548411),
    t4 = s(554830),
    t3 = s(689175),
    se = s(522403);
function st(e) {
    let {
            children: t,
            className: s,
            scrollIncrement: a,
            itemSelector: i = "[data-scroll-target]",
            maskWidth: o = 48,
        } = e,
        c = r.useRef(null),
        u = r.useRef(null),
        [_, m] = r.useState(!1),
        [h, f] = r.useState(!1),
        p = (0, d.bG)([E.A], () => E.A.useReducedMotion) ? "auto" : "smooth",
        b = r.useCallback(() => {
            let e = c.current?.getScrollerNode();
            null != e && (m(e.scrollLeft > 0), f(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []),
        x = r.useCallback(() => {
            b();
        }, [b]),
        g = r.useCallback(() => {
            let e = c.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollLeft - a,
                s = t < a ? 0 : t;
            e.scrollTo({ left: s, behavior: p });
        }, [a, p]),
        C = r.useCallback(() => {
            let e = c.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollWidth - e.clientWidth,
                s = e.scrollLeft + a,
                n = s > t - a ? t : s;
            e.scrollTo({ left: n, behavior: p });
        }, [a, p]),
        j = r.useCallback(
            (e) => {
                let t = c.current?.getScrollerNode();
                if (null == t) return;
                let s = e.target.closest(i);
                if (null == s) return;
                let n = s.offsetLeft - o,
                    r = s.offsetLeft + s.offsetWidth + o,
                    a = t.scrollLeft,
                    l = a + t.clientWidth;
                n < a
                    ? t.scrollTo({ left: n, behavior: p })
                    : r > l && t.scrollTo({ left: r - t.clientWidth, behavior: p });
            },
            [i, o, p],
        );
    return (
        (0, to.g)(u, b, [], { fireOnMount: !0 }),
        (0, n.jsxs)("div", {
            className: l()(s, se.m7),
            ref: u,
            style: { "--custom-scroller-mask-width": `${o}px` },
            children: [
                (0, n.jsx)(eD.D, {
                    "aria-label": eo.intl.string(eo.t.vgfxaA),
                    className: l()(se.k9, se.RW, { [se.Q2]: _ }),
                    onClick: g,
                    tabIndex: _ ? 0 : -1,
                    "aria-hidden": !_,
                    children: (0, n.jsx)(t8.Z, { color: ed.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
                }),
                (0, n.jsx)(eD.D, {
                    "aria-label": eo.intl.string(eo.t.XiOHRX),
                    className: l()(se.k9, se.K3, { [se.Q2]: h }),
                    onClick: C,
                    tabIndex: h ? 0 : -1,
                    "aria-hidden": !h,
                    children: (0, n.jsx)(t4.K, { color: ed.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
                }),
                (0, n.jsx)("div", {
                    className: l()(se.$u, { [se.sF]: _, [se.RC]: h }),
                    children: (0, n.jsx)(t3.zC, {
                        ref: c,
                        orientation: "horizontal",
                        onScroll: x,
                        onFocusCapture: j,
                        children: t,
                    }),
                }),
            ],
        })
    );
}
var ss = s(731355),
    sn = s(621466),
    sr = s(508770),
    sa = s(406810),
    sl = s(628284),
    si = s(65154),
    so = s(687966),
    sc = s(496431),
    sd = s(975807),
    su = s(58703),
    s_ = s(18437),
    sm = s(801365),
    sh = s(814793),
    sf = s(453384),
    sp = s(646764),
    sb = s(398025),
    sx = s(469083);
function sg(e) {
    let [t, s] = r.useState(!1),
        n = r.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        a = r.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: a, onFocus: n, onBlur: a } };
}
function sE(e) {
    let { hero: t, contentPosition: s } = e,
        a = r.useRef(null),
        { isHovering: i, hoverProps: o } = sg(
            r.useCallback(
                (e) => {
                    (0, tY.Qg)({
                        adContentId: t.id,
                        adCreativeType: tz.p.QUEST_HOME_HERO,
                        event: e ? ep.HAw.QUEST_HOVER : ep.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: G.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, Y.jO)(G.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    r.useEffect(() => {
        let e = a.current;
        (0, sn.vq)(e, HTMLVideoElement) && (i ? ((e.currentTime = 0), e.play().catch(eg.tE)) : e.pause());
    }, [i]);
    let { hoverSpring: c } = (0, tc.z)({ hoverSpring: +!!i, config: ti.config.gentle });
    return (0, n.jsxs)("div", {
        className: l()(sx.FW, sx.Bm),
        ...o,
        children: [
            (0, n.jsx)("div", {
                className: sx.Ve,
                children: (0, n.jsx)(tJ.N, {
                    showVideo: !0,
                    assetRef: a,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: l()(sx.pv, sx.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: l()(sx.pv, sx.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sx.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(h.$, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, sd.A)(t.cta.url),
                            (0, tY.vK)({
                                adContentId: t.id,
                                adCreativeType: tz.p.QUEST_HOME_HERO,
                                questContent: G.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: Y.Cy.OPEN_GAME_LINK,
                                questContentPosition: s,
                                sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function sC(e) {
    let { quest: t, onQuestCtaClick: s, contentPosition: a } = e,
        i = (0, tO.Ay)(),
        o = r.useMemo(() => (0, tL.tW)(t, tL.fY.LOGO_TYPE, (0, tN.M)(i) ? ep.NJ8.DARK : ep.NJ8.LIGHT).url, [t, i]),
        c = r.useMemo(() => new Date(t.config.expiresAt), [t.config.expiresAt]),
        { days: d, hours: u, minutes: _, seconds: m } = (0, sc.A)(c, td.A.Millis.MINUTE),
        f = r.useMemo(
            () =>
                (0, su.uN)(
                    { days: d, hours: u, minutes: _, seconds: m },
                    { days: eo.t["Ux/De1"], hours: eo.t.Lzd5Ie, minutes: eo.t.odmpbP },
                ),
            [d, u, _, m],
        ),
        p = r.useMemo(() => (0, sm.mq)(t.config), [t.config]),
        x = r.useMemo(
            () =>
                (function (e) {
                    switch ((0, e2.xv)(e).type) {
                        case tS.l.IN_GAME:
                            return eo.intl.string(eo.t["O/J2kr"]);
                        case tS.l.COLLECTIBLE:
                            return eo.intl.string(eo.t.Jg17Ut);
                        case tS.l.VIRTUAL_CURRENCY:
                            return eo.intl.string(eo.t.ElYQFS);
                        default:
                            return (0, sm.mq)(e);
                    }
                })(t.config),
            [t.config],
        ),
        { completedRatio: g, completedRatioDisplay: E } = (0, K.O9)(t),
        C = r.useMemo(() => (0, sm._Z)(t.config), [t.config]),
        j = (0, s_.Ut)(),
        v = (0, s_.u0)(),
        { isHovering: S, hoverProps: N } = sg(
            r.useCallback(
                (e) => {
                    v({
                        questId: t.id,
                        event: e ? ep.HAw.QUEST_HOVER : ep.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: G.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, Y.jO)(G.uF.QUEST_HOME_HERO_SHELF),
                            content_position: a,
                        },
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [v, t.id, a],
            ),
        ),
        { hoverSpring: A } = (0, tc.z)({ hoverSpring: +!!S, config: ti.config.gentle });
    return (0, n.jsxs)("div", {
        className: l()(sx.FW, sx.$R),
        ...N,
        children: [
            (0, n.jsxs)(tK.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, n.jsx)(sr.E, { type: { text: x }, variant: "expressive" }),
                    (0, n.jsx)(ti.animated.div, {
                        style: { opacity: (0, sb.a)(A.to([0, 1], [1, 0])) },
                        children: (0, n.jsx)(sr.E, { type: { text: f }, icon: sa.O }),
                    }),
                ],
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sx.Tr,
                style: { transform: A.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, n.jsx)(sf.A, {
                    percentComplete: g,
                    overlayText: S && null != C ? `${C}` : void 0,
                    size: 100,
                    children: (0, n.jsx)(sp.A, {
                        quest: t,
                        questContent: G.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: S,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sx.tw,
                style: {
                    opacity: (0, sb.a)(A.to([0, 1], [1, 0])),
                    transform: A.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, n.jsxs)(tK.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)("div", {
                            className: sx.aP,
                            children: (0, n.jsx)("img", { src: o, alt: t.config.messages.gameTitle, className: sx.rC }),
                        }),
                        (0, n.jsxs)(tK.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(b.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    className: sx.Ht,
                                    children: p,
                                }),
                                (0, n.jsxs)(tK.B, {
                                    align: "start",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, n.jsxs)(tK.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, n.jsx)(sl.y, { size: "xs", color: ed.A.colors.ICON_MUTED.css }),
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.config.messages.gamePublisher,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(tK.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, sh.pv)(t.config) === ss.Z.VIDEO
                                                    ? (0, n.jsx)(si.S, {
                                                          size: "xs",
                                                          color: ed.A.colors.ICON_MUTED.css,
                                                      })
                                                    : (0, n.jsx)(so._, {
                                                          size: "xs",
                                                          color: ed.A.colors.ICON_MUTED.css,
                                                      }),
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: E,
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
            (0, n.jsx)(ti.animated.div, {
                className: sx.um,
                style: { transform: A.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(h.$, {
                    fullWidth: !0,
                    onClick: () => {
                        s(t.id),
                            j({
                                questId: t.id,
                                questContent: G.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: Y.Cy.VIEW_QUESTS,
                                questContentPosition: a,
                                sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: eo.intl.string(eo.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var sj = s(648731);
function sv(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: r } = e;
    return (0, n.jsx)(st, {
        className: sj.v,
        scrollIncrement: 320,
        children: (0, n.jsxs)(tK.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, n.jsx)(tX.R, {
                    adContentId: t.id,
                    adCreativeType: tz.p.QUEST_HOME_HERO,
                    questContent: G.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, n.jsx)(sE, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, t) =>
                    (0, n.jsx)(
                        tX.R,
                        {
                            questOrQuests: e,
                            questContent: G.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: t + 1,
                            sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                            children: (s) =>
                                (0, n.jsx)("div", {
                                    ref: (e) => {
                                        s.current = e;
                                    },
                                    children: (0, n.jsx)(sC, { quest: e, onQuestCtaClick: r, contentPosition: t + 1 }),
                                }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
}
var sS = s(95115);
function sN() {
    return (0, n.jsx)("div", { className: sS.Np });
}
function sA(e) {
    let { heroImage: t, heroVideo: s } = e,
        a = r.useRef(null);
    (0, t0.A)(a, tb.rE.QUEST_HOME_DESKTOP);
    let i = r.useMemo(() => (null != s ? (0, tL.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, n.jsxs)("div", {
              className: sS.Tv,
              children: [
                  (0, n.jsx)(sN, {}),
                  (0, n.jsx)("div", {
                      className: sS.LO,
                      children: (0, n.jsx)("img", { className: sS.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: l()(sS.LO, sS.jx, sS.hw),
                      children: (0, n.jsx)("img", { className: sS.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: l()(sS.LO, sS.jx, sS.Co),
                      children: (0, n.jsx)("img", { className: sS.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: sS.Tv,
              children: [
                  (0, n.jsx)(sN, {}),
                  (0, n.jsx)("div", {
                      className: sS.LO,
                      children: (0, n.jsx)(tJ.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: a,
                          imageAsset: {
                              alt: "",
                              className: sS.LY,
                              asset: { url: i, mimetype: (0, tL.vm)(i), isAnimated: !1 },
                              assetId: i,
                          },
                          videoAsset: {
                              alt: "",
                              className: sS.LY,
                              asset: { url: s, mimetype: (0, tL.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function sT(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        a = (0, d.bG)([X.A], () => X.A.quests),
        { shelfQuests: l, isShelfEnabled: i } = (0, K.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, t2.I)();
    r.useEffect(() => {
        o();
    }, [o]);
    let c = r.useMemo(() => t.questIds?.find((e) => a.has(e)), [a, t.questIds]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tX.R, {
                adContentId: t.id,
                adCreativeType: tz.p.QUEST_HOME_HERO,
                questContent: G.uF.QUEST_HOME_HERO,
                sourceQuestContent: G.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, n.jsx)(t9, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, n.jsxs)(tK.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, n.jsx)("img", { src: t.sponsorImage, alt: "", className: sS.wm }),
                                (0, n.jsx)(b.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: sS.yu,
                                    children: eo.intl.string(eo.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, n.jsxs)(m.e, {
                            children: [
                                (0, n.jsx)(h.$, {
                                    onClick: () => {
                                        (0, tZ._Q)(
                                            { adContentId: t.id, adCreativeType: tz.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: G.uF.QUEST_HOME_HERO,
                                                ctaContent: Y.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: G.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != c &&
                                    (0, n.jsx)(h.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, tY.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: tz.p.QUEST_HOME_HERO,
                                                    questContent: G.uF.QUEST_HOME_HERO,
                                                    questContentCTA: Y.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: G.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: eo.intl.string(eo.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, n.jsx)(sA, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, n.jsx)(sv, { hero: t, shelfQuests: l, onQuestCtaClick: s }),
        ],
    });
}
function sO() {
    return (0, n.jsx)("div", { className: l()(t6.iE, t6.FG, t6.B3), children: (0, n.jsx)(ea.y, {}) });
}
var sR = s(321503),
    sL = s(758836),
    sy = s(613057),
    sI = s(935824);
let sH = r.createContext({});
function sQ(e) {
    let { banner: t, children: s, header: a, withFullBleedBanner: l = !1 } = e,
        { onScroll: i, scrollerRef: o } = r.useContext(sH);
    return (0, n.jsxs)(sR.X.Provider, {
        value: o,
        children: [
            a,
            (0, n.jsxs)(M.A, {
                onScroll: i,
                ref: o,
                children: [
                    l && t,
                    (0, n.jsxs)(Q.A, { className: sI.Jo, innerClassName: sI.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function sw(e) {
    let { selectedTab: t, onSelectTab: s, tabs: r, endContent: a } = e;
    return (0, n.jsx)(w.S, { selectedTabId: t, handleTransition: s, tabs: r, endContent: a, icon: _.r });
}
function sM(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: a } = (0, F.Z)({ location: tb.rE.QUEST_HOME_DESKTOP }),
        l = (0, d.bG)([E.A], () => E.A.useReducedMotion),
        i = (0, d.bG)([D.A], () => D.A.isFocused()),
        { ref: o, inViewport: c } = (0, e5.p)(),
        u = r.useRef(null);
    if (
        (r.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (i && c && !l)
                    ? u.current.paused && !l && c && i && u.current.play()
                    : u.current.pause());
        }, [l, c, i]),
        a)
    ) {
        let e = (0, P.TM)();
        return (0, n.jsx)(T.A, {
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
function sU(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, F.Z)({ location: tb.rE.QUEST_HOME_DESKTOP });
    return (0, n.jsxs)("div", {
        className: l()(sI.Tv, { [sI.lJ]: s }),
        children: [
            (0, n.jsx)(sN, {}),
            (0, n.jsx)("div", { className: l()(sI.nz, { [sI.ZZ]: s }) }),
            (0, n.jsx)(sM, { onLoadComplete: t, className: l()(sI.Fe, { [sI.H4]: s, [sI.Q8]: !s }) }),
        ],
    });
}
function sk(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, F.Z)({ location: tb.rE.QUEST_HOME_DESKTOP }),
        a = r.useCallback(() => {
            s ? window.open(ep.X7G.PAID_TERMS_ORBS) : window.open(W.A.getArticleURL(ep.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, n.jsx)(t9, {
        adContentId: s ? tb.yr : tb.uz,
        title: s ? eo.intl.format(eo.t.BCBIlp, {}) : eo.intl.format(eo.t.lmMBfy, {}),
        subtitle: s ? eo.intl.format(eo.t.U9FY0J, {}) : eo.intl.string(eo.t.oWCrBq),
        buttons: s
            ? (0, n.jsxs)(m.e, {
                  children: [
                      (0, n.jsx)(h.$, {
                          variant: "overlay-primary",
                          text: eo.intl.string(eo.t["1Wm127"]),
                          onClick: () =>
                              (0, N.Cz)({
                                  tab: sL.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: C.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, n.jsx)(h.$, {
                          variant: "overlay-secondary",
                          text: eo.intl.string(eo.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, n.jsx)(h.$, {
                  variant: "overlay-primary",
                  text: eo.intl.string(eo.t.hvVgAZ),
                  onClick: a,
                  icon: f.I,
                  iconPosition: "end",
              }),
        background: (0, n.jsx)(sU, { onAssetLoad: t }),
    });
}
function sF(e) {
    let { onAssetLoad: t, onQuestCtaClick: s } = e,
        { questHomeHero: r, isLoading: a } = (0, K.lg)();
    return a
        ? (0, n.jsx)(sO, {})
        : null != r
          ? (0, n.jsx)(sT, { hero: r, onQuestCtaClick: s })
          : (0, n.jsx)(sk, { onAssetLoad: t });
}
function sB(e) {
    let { onLoadComplete: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: l()(sI.BW, sI.rZ),
                alt: "",
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: l()(sI.BW, sI.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: l()(sI.BW, sI.rZ),
                alt: "",
            }),
        ],
    });
}
let sD = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, i.zy)(),
        a = (0, i.W6)(),
        _ = r.useMemo(() => (0, U.B)(s.pathname, ep.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        m = (0, d.bG)([S.A], () => S.A.getState("quests")),
        {
            selectedTab: f,
            onSelectTab: E,
            tabs: T,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = $.A.useField("tab"),
                n = (0, i.zy)(),
                a = (0, K.p5)();
            r.useEffect(() => {
                $.A.getState().initializeFromUrl(n.search, a);
            }, [n.search, a]);
            let l = r.useCallback((e) => {
                $.A.getState().setTab(e);
            }, []);
            return {
                tabs: r.useMemo(
                    () =>
                        [
                            { id: K.NC.ALL, label: eo.intl.string(eo.t["0SzXmi"]) },
                            t ? { id: K.NC.CLAIMED, label: eo.intl.string(eo.t.zyNYNB) } : null,
                            t && a ? { id: K.NC.PREVIEW_TOOL, label: eo.intl.string(eo.t.BDUDau) } : null,
                        ].filter(e6.Vq),
                    [t, a],
                ),
                selectedTab: s,
                onSelectTab: l,
            };
        })({ withClaimedQuestsTab: !_ });
    r.useLayoutEffect(() => {
        _ && f === K.NC.CLAIMED && $.A.setState({ tab: K.NC.ALL });
    }, [_, f]);
    let { onScroll: R } = (0, I.G)(),
        L = z.A.getState().getUtmCurrentContext(),
        Q = tG((e) => e.registerAssetLoad),
        w = r.useRef(L);
    r.useEffect(() => {
        w.current = L;
    }),
        r.useEffect(() => {
            let { current: e } = w;
            (0, j.x)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: f,
                },
            });
        }, [f]);
    let { enabled: M } = (0, F.Z)({ location: tb.rE.QUEST_HOME_DESKTOP });
    (0, A.HU)({ location: eo.intl.string(eo.t.JALI2K) });
    let D = r.useRef(null),
        P = r.useRef(null),
        W = r.useCallback((e) => {
            P.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    P.current?.scrollToQuest(e);
                });
        }, []),
        Z = r.useCallback(() => {
            (0, k.Y)({
                pageType: ep.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ep.JJy.ORBS_BALANCE_MENU,
                ctaObject: ep.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, N.Cz)({ tab: sL.G2.ORBS, analyticsLocations: [], analyticsSource: C.A.ORBS_BALANCE_MENU });
        }, []);
    r.useEffect(() => {
        (0, g.I)(ep.BVt.QUEST_HOME);
    }, []),
        r.useEffect(() => {
            y.trigger();
        }, []),
        r.useEffect(() => {
            if (null != m) return;
            let e = new URLSearchParams(s.search),
                n = e.get(K.L1.TAB);
            if (n === K.NC.PREVIEW_TOOL) {
                let t = e.get(K.L1.QUEST_ID);
                v.A.openNativeAppModal("quests", ep.e$_.DEEP_LINK, {
                    type: sy.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: n },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === a.action && r?.type === "navigate" && t && n !== K.NC.PREVIEW_TOOL) {
                let t = (0, V.uJ)(s.hash) ? null : s.hash.substring(1),
                    r = e.get(K.L1.SORT),
                    a = e.get(K.L1.FILTER);
                v.A.openNativeAppModal("quests", ep.e$_.DEEP_LINK, {
                    type: sy.XK.QUEST_HOME,
                    params: { questId: (0, V.uJ)(t) ? void 0 : t, sort: r, filter: a, tab: n },
                });
            }
        }, [s.search, m, a.action, s.hash, t]),
        r.useEffect(() => {
            t && (0, O.Dr)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let J = r.useCallback(() => {
            (0, e1.navigateToQuestHome)({ fromContent: G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                q.default.track(ep.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: Y.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, Y.fF)(G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        X = r.useCallback(
            (e) => {
                a.replace({ ...a.location, hash: void 0 }), D.current?.scrollToTop({ animate: !1 }), E(e);
            },
            [a, E],
        );
    return (0, n.jsx)(t$.M.Provider, {
        value: { onAssetLoadComplete: Q },
        children: (0, n.jsx)(sH.Provider, {
            value: r.useMemo(() => ({ onScroll: R, scrollerRef: D }), [R, D]),
            children: (0, n.jsx)("div", {
                className: l()(sI.kL, { [sI.KY]: !t }),
                children: _
                    ? (0, n.jsx)(sQ, {
                          withFullBleedBanner: !0,
                          header: (0, n.jsx)(sw, { selectedTab: f, onSelectTab: X, tabs: T }),
                          banner: (0, n.jsx)(H.A, {
                              title: eo.intl.string(eo.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, n.jsx)(h.$, {
                                  variant: "overlay-primary",
                                  text: eo.intl.string(eo.t.GURBQl),
                                  onClick: J,
                              }),
                              className: sI.Gj,
                              children: (0, n.jsx)(sB, { onLoadComplete: Q }),
                          }),
                          children: (0, n.jsxs)("div", {
                              className: sI.kj,
                              children: [
                                  (0, n.jsx)(p.D, {
                                      variant: "heading-xl/semibold",
                                      children: eo.intl.string(eo.t.z8YP2A),
                                  }),
                                  (0, n.jsx)(b.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: eo.intl.string(eo.t.HdKh65),
                                  }),
                                  (0, n.jsx)(x.Q, {
                                      text: eo.intl.string(eo.t["1CdL8d"]),
                                      onClick: J,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, n.jsx)(sQ, {
                          header: (0, n.jsx)(sw, {
                              selectedTab: f,
                              onSelectTab: X,
                              tabs: T,
                              endContent:
                                  M &&
                                  (0, n.jsx)(B.SS, {
                                      analyticsPage: ep.liQ.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: B.cP.END,
                                      ctaText: eo.intl.string(eo.t["J+vlIR"]),
                                      ctaOnClick: Z,
                                  }),
                          }),
                          banner: f === K.NC.ALL && (0, n.jsx)(sF, { onAssetLoad: Q, onQuestCtaClick: W }),
                          children:
                              f === K.NC.CLAIMED
                                  ? (0, n.jsx)(tq, { onSelectTab: X })
                                  : f === K.NC.PREVIEW_TOOL
                                    ? (0, n.jsx)(e0, {})
                                    : (0, n.jsx)(tj, { ref: P }),
                      }),
            }),
        }),
    });
};
