s.r(t), s.d(t, { default: () => sq }), s(323874), s(14289), s(35956);
var l = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(873263),
    c = s(835245),
    o = s(562708),
    u = s(17928),
    d = s(554146),
    m = s(577473),
    h = s(825484),
    x = s(821609),
    E = s(509434),
    f = s(534514),
    g = s(834730),
    j = s(123292),
    v = s(944791),
    _ = s(775602),
    p = s(793574),
    N = s(139286),
    b = s(197111),
    C = s(10088),
    S = s(859040),
    T = s(726249),
    O = s(607470),
    A = s(826673),
    R = s(840251),
    L = s(688151);
let y = new R.E([], L.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var I = s(711111),
    H = s(701508),
    Q = s(979590),
    M = s(749638),
    U = s(783531),
    F = s(334465),
    k = s(318346),
    w = s(371446),
    P = s(70926),
    D = s(531685),
    q = s(174459),
    B = s(676279),
    V = s(975571),
    W = s(240248),
    G = s(507107),
    z = s(631001),
    $ = s(87549),
    Y = s(124366),
    K = s(590202);
s(321073);
var J = s(228366),
    Z = s(340124),
    X = s(859703);
s(667532);
var ee = s(783878),
    et = s(408278),
    es = s(663417),
    el = s(922016),
    en = s(624479),
    ea = s(289873),
    er = s(416052),
    ei = s(417098),
    ec = s(375708);
let eo = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, l.jsx)(ei.$T, {
        color: ei.Hv.DANGER,
        children: (0, l.jsx)("div", { children: null != s ? s : ec.intl.string(ec.t.ZErSg5) }),
    });
};
var eu = s(661531),
    ed = s(602853),
    em = s(817281),
    eh = s(688810),
    ex = s(487245),
    eE = s(363195),
    ef = s(652215),
    eg = s(398876);
let ej = function () {
    let { analyticsLocations: e } = (0, eh.Ay)(),
        t = (0, u.bG)([eE.A], () => eE.A.theme),
        s = n.useRef(null);
    n.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let a = (0, ed.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.LIGHT),
        r = (0, ed.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.DARKER),
        i = (0, ed.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.MIDNIGHT),
        c = n.useMemo(
            () => [
                { theme: ef.NJ8.LIGHT, label: ec.t.K2sFfo, color: a.hex() },
                { theme: ef.NJ8.DARKER, label: ec.t.b8Cei3, color: r.hex() },
                { theme: ef.NJ8.MIDNIGHT, label: ec.t.Do4ZJx, color: i.hex() },
            ],
            [a, r, i],
        ),
        o = n.useCallback(
            (t) => {
                (0, ex.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, em.u_)({ theme: t });
            },
            [e],
        ),
        d = n.useCallback(() => {
            null != s.current && o(s.current);
        }, [o]);
    return (0, l.jsx)("div", {
        className: eg.N,
        children: (0, l.jsxs)("div", {
            className: eg.t7,
            children: [
                c.map((e) =>
                    (0, l.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: eg.Du,
                            onClick: () => o(e.theme),
                            "aria-label": ec.intl.string(e.label),
                            children: [
                                (0, l.jsx)("div", {
                                    className: `${eg.WT} ${t === e.theme ? eg.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, l.jsx)("span", { className: eg.i, children: ec.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, l.jsx)(et.K, {
                    onClick: d,
                    "aria-label": ec.intl.string(ec.t.yBZMsQ),
                    icon: es.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var ev = s(818348),
    e_ = s(60857);
let ep = function (e) {
    let { questId: t, setQuestId: s, quest: a, refreshQuest: r } = e,
        [i, c] = n.useState(!1),
        [o, d] = n.useState(!1),
        m = n.useRef(null),
        E = (0, Y.pT)(),
        f = (0, u.bG)([X.A], () => (null != t ? X.A.getFetchQuestPreviewError(t) : null), [t]),
        g = (0, u.bG)([X.A], () => null != t && X.A.isFetchingQuestPreview(t), [t]),
        j = n.useMemo(() => {
            let e = E.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [E, t]),
        v = n.useCallback(async () => {
            if (null != t) {
                c(!0);
                try {
                    await (0, Z.Yb)(t, 1);
                } finally {
                    c(!1);
                }
            }
        }, [t, c]),
        _ = n.useCallback(async () => {
            if (null != t) {
                c(!0);
                try {
                    await (0, Z.UZ)(t);
                } finally {
                    c(!1);
                }
            }
        }, [t, c]),
        p = n.useCallback(async () => {
            if (null != t) {
                c(!0);
                try {
                    let e = Math.random();
                    await (0, Z.Yb)(t, e);
                } finally {
                    c(!1);
                }
            }
        }, [t, c]),
        N = n.useCallback(
            (e) => {
                (0, W.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, l.jsxs)("div", {
        className: e_.Fr,
        children: [
            (0, l.jsx)("div", {
                children: (0, l.jsx)("div", {
                    className: e_.Br,
                    children: (0, l.jsxs)("div", {
                        className: e_.bo,
                        children: [
                            (0, l.jsx)(ej, {}),
                            (0, l.jsxs)("div", {
                                className: e_.b8,
                                children: [
                                    (0, l.jsx)(
                                        ee.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: N,
                                            placeholder: ec.intl.string(ec.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, W.uJ)(t?.trim())) return e;
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
                                    (0, l.jsx)(et.K, {
                                        onClick: r,
                                        "aria-label": ec.intl.string(ec.t.wzzjk9),
                                        icon: es.f,
                                        loading: g,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != a &&
                (0, l.jsx)("div", {
                    className: e_.in,
                    children: (0, l.jsxs)(h.e, {
                        className: e_.xv,
                        children: [
                            (0, l.jsx)(x.$, {
                                onClick: v,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: ec.intl.string(ec.t.jQEfRT),
                            }),
                            (0, l.jsx)(x.$, {
                                onClick: _,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: ec.intl.string(ec.t.taqkwK),
                            }),
                            (0, l.jsx)(x.$, {
                                onClick: p,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: ec.intl.string(ec.t.cKSLr4),
                            }),
                            (0, l.jsx)(el.Y, {
                                targetElementRef: m,
                                shouldShow: o,
                                onRequestClose: () => d(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, l.jsx)("div", {
                                        className: e_.PP,
                                        children: (0, l.jsx)("div", {
                                            className: e_.sH,
                                            children: (0, l.jsx)(er.A, {
                                                value: ev.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: ec.intl.string(ec.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, l.jsx)(et.K, {
                                        buttonRef: m,
                                        onClick: () => d(!o),
                                        "aria-label": ec.intl.string(ec.t.rNGQfD),
                                        icon: en.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != f ? (0, l.jsx)(eo, { error: f }) : null,
            g ? (0, l.jsx)(ea.y, {}) : null,
        ],
    });
};
var eN = s(364522),
    eb = s(761508),
    eC = s(797788);
let eS = () => (0, l.jsx)("div", { className: eC.y });
var eT = s(834615),
    eO = s(332544);
let eA = function (e) {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: eO.x3,
        children: (0, l.jsxs)("div", {
            className: eO.B0,
            children: [
                (0, l.jsx)(f.D, {
                    className: eO.R_,
                    variant: "heading-md/semibold",
                    children: ec.intl.string(ec.t.L2mlUb),
                }),
                (0, l.jsx)(eT.A, { quest: t }),
            ],
        }),
    });
};
var eR = s(241124),
    eL = s(28082),
    ey = s(717695),
    eI = s(763578),
    eH = s(111113);
let eQ = function (e) {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: eO.x3,
        children: (0, l.jsxs)("div", {
            className: eI.wp,
            children: [
                (0, l.jsx)(f.D, {
                    className: eI.Oo,
                    variant: "heading-md/semibold",
                    children: ec.intl.string(ec.t.rjVPdM),
                }),
                (0, l.jsx)("div", {
                    className: eI.RE,
                    children: (0, l.jsx)("div", {
                        className: eI.Z,
                        children: (0, l.jsx)("div", {
                            className: eH.C3,
                            children: (0, l.jsx)(ey.A, {
                                children: (0, l.jsx)(eR.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, l.jsx)(eL.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eM = s(59350);
let eU = (e) => {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: eO.x3,
        children: (0, l.jsxs)("div", {
            className: eO.B0,
            children: [
                (0, l.jsx)(f.D, {
                    className: eO.R_,
                    variant: "heading-md/semibold",
                    children: ec.intl.string(ec.t.gWinpQ),
                }),
                (0, l.jsx)("div", {
                    className: eO.YT,
                    children: (0, l.jsx)(eM.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eF = s(711038),
    ek = s(330034);
let ew = function (e) {
    let { questId: t } = e;
    return (0, l.jsx)("div", {
        className: eO.x3,
        children: (0, l.jsxs)("div", {
            className: eO.B0,
            children: [
                (0, l.jsx)(f.D, { variant: "heading-md/semibold", children: ec.intl.string(ec.t.IcljUu) }),
                (0, l.jsx)("div", {
                    className: ek.wu,
                    children: (0, l.jsx)("span", { className: ek.cy, children: ec.intl.string(ec.t.q97mEu) }),
                }),
                (0, l.jsx)("div", {
                    className: ek.oU,
                    children: (0, l.jsx)("div", {
                        className: ek.zx,
                        children: (0, l.jsx)("div", {
                            className: ek.Lj,
                            children: (0, l.jsx)("div", {
                                className: ek.n0,
                                children: (0, l.jsx)(eF.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eP = s(291922);
let eD = (e) => {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: eO.x3,
        children: (0, l.jsxs)("div", {
            className: eO.B0,
            children: [
                (0, l.jsx)(f.D, {
                    className: eO.R_,
                    variant: "heading-md/semibold",
                    children: ec.intl.string(ec.t["5wnpF3"]),
                }),
                (0, l.jsx)(eP.A, {
                    className: eO.d,
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
var eq = s(939249),
    eB = s(97808),
    eV = s(778712),
    eW = s(87664),
    eG = s(287809),
    ez = s(427262),
    e$ = s(198525),
    eY = s(66176);
let eK = function (e) {
        let { quest: t } = e,
            [s, a] = n.useState(!1),
            i = n.useRef(null),
            c = (0, u.bG)([eG.default], () => eG.default.getCurrentUser()),
            o = ez.Ay.useName(c),
            d = (0, eW.A)(c?.id),
            m = n.useCallback(
                (e) =>
                    (0, l.jsx)(e$.A, {
                        name: o,
                        quest: t,
                        memberListItemRef: i,
                        applicationStream: d,
                        ...e,
                        closePopout: () => {
                            a(!1);
                        },
                    }),
                [t, d, o],
            );
        return (0, l.jsx)("div", {
            className: eO.x3,
            children: (0, l.jsxs)("div", {
                className: eO.B0,
                children: [
                    (0, l.jsx)(f.D, {
                        className: eY.R_,
                        variant: "heading-md/semibold",
                        children: ec.intl.string(ec.t.jY7Zxg),
                    }),
                    (0, l.jsx)("div", { className: eY.$Q, children: ec.intl.string(ec.t.q3hbne) }),
                    (0, l.jsx)("div", {
                        className: eY.k0,
                        children: (0, l.jsx)(el.Y, {
                            targetElementRef: i,
                            renderPopout: m,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => a(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: el.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, l.jsx)("div", {
                                    ref: i,
                                    className: r()(eY.Tn, { [eY.wH]: s }),
                                    children: (0, l.jsx)(eq.D, {
                                        onClick: () => a(!s),
                                        tabIndex: 0,
                                        children: (0, l.jsxs)("div", {
                                            className: eY.lm,
                                            children: [
                                                (0, l.jsx)(eB.eu, {
                                                    size: eV._3.SIZE_32,
                                                    src: c?.getAvatarURL(void 0, 32),
                                                    status: ef.clD.ONLINE,
                                                    "aria-label": c?.username,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: eY.Fj,
                                                    children: [
                                                        (0, l.jsx)(g.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: o,
                                                        }),
                                                        (0, l.jsx)(g.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: ec.intl.string(ec.t.b9w3bO),
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
    eJ = (e) => {
        let { questId: t, selectedSections: s } = e,
            n = (0, u.bG)([X.A], () => X.A.getQuest(t));
        if (null != (0, u.bG)([X.A], () => X.A.getFetchQuestPreviewError(t)) || null == n) return null;
        let a = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                a("quest_bar") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eQ, { quest: n }), (0, l.jsx)(eS, {})] }),
                a("home_card") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eD, { quest: n }), (0, l.jsx)(eS, {})] }),
                a("share_embed") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(ew, { questId: n.id }), (0, l.jsx)(eS, {})] }),
                a("channel_call_header") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eU, { quest: n }), (0, l.jsx)(eS, {})] }),
                a("members_list") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eK, { quest: n }), (0, l.jsx)(eS, {})] }),
                a("activity_panel") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eA, { quest: n }), (0, l.jsx)(eS, {})] }),
            ],
        });
    };
var eZ = s(497275);
function eX(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: a, controls: r } = e,
        i = [
            { value: "quest_bar", label: ec.intl.string(ec.t.rjVPdM) },
            { value: "share_embed", label: ec.intl.string(ec.t["D/gSWS"]) },
            { value: "home_card", label: ec.intl.string(ec.t["5wnpF3"]) },
            { value: "channel_call_header", label: ec.intl.string(ec.t.gWinpQ) },
            { value: "members_list", label: ec.intl.string(ec.t.wpYima) },
            { value: "activity_panel", label: ec.intl.string(ec.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === i.length,
        o = n.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, l.jsx)(eN.Ip, {
        className: eZ.kL,
        orientation: "auto",
        children: (0, l.jsxs)("div", {
            className: eZ.qE,
            children: [
                (0, l.jsx)(f.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ec.intl.string(ec.t.BDUDau),
                }),
                (0, l.jsx)("div", { className: eZ.pf, children: r }),
                (0, l.jsxs)(eb.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: o,
                    onItemSelect: (e) => {
                        a?.(e);
                    },
                    children: [
                        (0, l.jsx)(eb.V.Item, { id: "all", children: ec.intl.string(ec.t.Y9DnPa) }),
                        i.map((e) => (0, l.jsx)(eb.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, l.jsx)("div", { className: eZ.tZ, children: (0, l.jsx)("div", { className: eZ.Qs, children: t }) }),
            ],
        }),
    });
}
function e0(e) {
    return new URLSearchParams(e).get(Y.L1.QUEST_ID);
}
let e1 = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: a } = (function (e) {
            let t = (0, i.W6)(),
                [s, l] = n.useState(e),
                { search: a } = (0, i.zy)();
            return (
                n.useEffect(() => {
                    let t = e0(a);
                    null != t ? l(t) : null != e && l(e);
                }, [e, a]),
                n.useEffect(() => {
                    if (null == s || e0(a) === s) return;
                    let e = new URLSearchParams();
                    e.set(Y.L1.TAB, Y.NC.PREVIEW_TOOL),
                        e.set(Y.L1.QUEST_ID, s),
                        t.push(`${ef.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, a]),
                { questId: s, setQuestId: l }
            );
        })(t),
        r = (0, u.bG)([X.A], () => (null != s ? X.A.getQuest(s) : void 0), [s]),
        c = (0, u.bG)([X.A], () => (null != s ? X.A.getQuestLoadedViaPreview(s) : null), [s]);
    n.useEffect(() => {
        null != s &&
            (0, Z.dQ)(s).then(() => {
                (0, Z.Gt)(s);
            });
    }, [s]),
        n.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === s && (0, Z.dQ)(s);
            };
            return (
                J.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    J.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]);
    let [o, d] = n.useState([]);
    return (0, l.jsx)(eX, {
        controls: (0, l.jsx)(ep, {
            questId: s,
            setQuestId: a,
            quest: r,
            refreshQuest: () => {
                null != s && (0, Z.dQ)(s);
            },
        }),
        selectedSections: o,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: c?.id != null ? (0, l.jsx)(eJ, { questId: c?.id, selectedSections: o }) : null,
    });
};
var e8 = s(617986),
    e3 = s(203879),
    e7 = s(403362),
    e2 = s(167417),
    e5 = s(783977),
    e4 = s(651892),
    e6 = s(305866),
    e9 = s(915089),
    te = s(332733);
function tt(e) {
    let { children: t, id: s } = e;
    return (0, l.jsx)(g.E, { className: te.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let ts = function (e) {
    let { children: t, renderPopout: s } = e,
        a = (0, e9.GV)(),
        r = n.useRef(null);
    return (0, l.jsx)(el.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, l.jsx)(e6.l, { className: te.S, "aria-labelledby": a, children: s(e, a) }),
        scrollBehavior: "close",
        targetElementRef: r,
        children: (e) => t(e, r),
    });
};
var tl = s(612539);
let tn = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        a = (0, Y.Nb)(),
        r = n.useCallback(
            (e) => (l) => {
                let n = e.filter((e) => l.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...n]);
            },
            [s, t],
        );
    return (0, l.jsx)(ts, {
        renderPopout: (e, i) => {
            let { closePopout: c } = e;
            return (0, l.jsxs)("div", {
                children: [
                    a.map((e, t) => {
                        let a = e.options.map((e) => ({ label: (0, e4.up)(e.filter), value: e.filter })),
                            c = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, l.jsxs)(
                            n.Fragment,
                            {
                                children: [
                                    t > 0 && (0, l.jsx)("hr", { className: tl.B }),
                                    (0, l.jsx)(tt, { id: i, children: e.heading }),
                                    (0, l.jsx)(e2.$, {
                                        "aria-labelledby": i,
                                        options: a,
                                        selectedValues: c,
                                        onChange: r(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, l.jsx)("hr", { className: tl.B }),
                    (0, l.jsx)("div", {
                        className: tl.W,
                        children: (0, l.jsx)(x.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), c();
                            },
                            size: "sm",
                            text: ec.intl.string(ec.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, l.jsx)(x.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: ec.intl.formatToPlainString(ec.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: e5.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var ta = s(773812),
    tr = s(715482);
let ti = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: a } = e,
        r = n.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, Y.XD)(),
        c = n.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, l.jsx)(ts, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(tt, { id: t, children: ec.intl.string(ec.t.tZXJIS) }),
                    (0, l.jsx)(ta.z, {
                        options: c,
                        onChange: (e) => {
                            s(), r(e);
                        },
                        value: a,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, l.jsx)(x.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, e4.Js)(a),
                icon: tr.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tc = s(873174),
    to = s(535185),
    tu = s(717421),
    td = s(927813),
    tm = s(710969),
    th = s(121480);
let tx = 4 * td.A.Millis.SECOND;
function tE(e) {
    let { children: t } = e,
        s = n.useRef(null),
        [a, r] = n.useState(null),
        i = n.useCallback(() => {
            r(
                (function (e) {
                    if (null == e) return 1;
                    let t = Math.floor((e.clientWidth + 24) / 360);
                    return t > 0 ? t : 1;
                })(s.current),
            );
        }, [r]);
    return (
        (0, to.g)(s, i, [], { fireOnMount: !0 }),
        (0, l.jsx)("div", {
            className: th.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== a && t(a),
        })
    );
}
let tf = n.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: a,
            isFetching: c,
            hasFetched: o,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        m = (0, i.zy)(),
        h = n.useRef(""),
        [x, E] = n.useState(null),
        [j, v] = n.useState(0),
        [{ highlightAnimationProgress: _ }, p] = (0, tu.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: tx },
        })),
        N = n.useCallback(
            (e) => {
                let t = (0, tm.vc)(e, s, a);
                return null != t && (E(t.id), v((e) => e + 1), !0);
            },
            [s, a],
        );
    return (n.useImperativeHandle(t, () => ({ scrollToQuest: N }), [N]),
    n.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        c || !o || (m.hash !== h.current && N(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, c, o, N]),
    n.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            p({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || E(null);
                },
            }));
    }, [x, j, p]),
    c && 0 === s.length)
        ? (0, l.jsx)(ea.y, { className: th.u1 })
        : 0 === s.length
          ? (0, l.jsxs)("div", {
                className: th.y7,
                children: [
                    (0, l.jsx)(f.D, {
                        variant: "heading-xl/semibold",
                        children: ec.intl.string(u ? ec.t.PBfFnx : ec.t.NqFP6z),
                    }),
                    (0, l.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? ec.intl.format(ec.t.LdYS1H, { onClick: d }) : ec.intl.string(ec.t.LhD4yH),
                    }),
                ],
            })
          : (0, l.jsx)(tE, {
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            a = x === t.id,
                            i = null != x && !a;
                        return (0, l.jsxs)(
                            tc.animated.div,
                            {
                                className: r()({ [th.XB]: a }),
                                style: a
                                    ? {
                                          boxShadow: (0, tc.to)(
                                              [_.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                                              (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                                          ),
                                      }
                                    : i
                                      ? {
                                            opacity: (0, tc.to)(
                                                [_.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })],
                                                (e) => e,
                                            ),
                                        }
                                      : void 0,
                                children: [
                                    a && (0, l.jsx)("div", { className: th.E4 }, j),
                                    (0, l.jsx)(eP.A, {
                                        quest: t,
                                        questContent: G.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: n,
                                        className: th.d,
                                        sourceQuestContent: G.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var tg = s(458518),
    tj = s(190107),
    tv = s(65990);
let t_ = [],
    tp = Y.L1.SORT,
    tN = Y.L1.FILTER,
    tb = n.forwardRef(function (e, t) {
        let s,
            a,
            r,
            c,
            o = n.useRef(null),
            [u, d] =
                ((s = (0, tg.o)()),
                (a = (0, i.W6)()),
                (r = n.useRef(null)),
                (c = n.useCallback(
                    (e) => {
                        let t = new URLSearchParams(r.current ?? s);
                        for (let [s, l] of Object.entries(e)) null == l ? t.delete(s) : t.set(s, l);
                        (r.current = t),
                            a.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                r.current = null;
                            });
                    },
                    [s, a],
                )),
                [s, c]),
            m = n.useMemo(() => {
                var e;
                return (
                    (e = u.get(tp)),
                    ((0, W.uJ)(e) ? null : (Object.values(tj.kL).find((t) => t === e) ?? null)) ?? tj.kL.SUGGESTED
                );
            }, [u]),
            h = n.useMemo(
                () =>
                    (function (e) {
                        if ((0, W.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tj.WQ)(e))
                            .filter(e7.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(tN)) ?? t_,
                [u],
            ),
            x = n.useCallback(
                (e) => {
                    d({ [tp]: e });
                },
                [d],
            ),
            E = n.useCallback(
                (e) => {
                    d({
                        [tN]:
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
                hasFetched: _,
            } = (0, Y.Qh)(
                Y.NC.ALL,
                n.useMemo(() => ({ sortMethod: m, filters: h }), [m, h]),
            ),
            p = n.useCallback(() => {
                E(t_);
            }, [E]),
            N = n.useRef(null),
            b = n.useRef(null),
            C = (0, i.zy)(),
            S = (0, i.W6)();
        return (
            n.useEffect(() => {
                "" !== C.hash &&
                    null != N.current &&
                    null != b.current &&
                    (m !== N.current || h !== b.current) &&
                    S.replace({ ...C, hash: void 0 });
            }, [m, h, C, S]),
            n.useEffect(() => {
                N.current = m;
            }, [m]),
            n.useEffect(() => {
                b.current = h;
            }, [h]),
            (0, Y.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: g.length }),
            n.useImperativeHandle(
                t,
                () => ({
                    resetSortingFiltering: () => {
                        p(), x(tj.kL.SUGGESTED);
                    },
                    scrollToQuest: (e) => {
                        o.current?.scrollToQuest(e);
                    },
                }),
                [p, x],
            ),
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: tv.Mj,
                        children: [
                            (0, l.jsx)(f.D, { variant: "heading-lg/medium", children: ec.intl.string(ec.t.giYD00) }),
                            (0, l.jsxs)("div", {
                                className: tv.Nf,
                                children: [
                                    (0, l.jsx)(ti, { onChange: x, optionClassName: tv.Uq, selectedSortMethod: m }),
                                    (0, l.jsx)(tn, { onChange: E, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(tf, {
                        ref: o,
                        quests: g,
                        excludedQuests: j,
                        isFetching: v,
                        hasFetched: _,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: p,
                    }),
                ],
            })
        );
    });
var tC = s(575593),
    tS = s(440703),
    tT = s(462887),
    tO = s(187322),
    tA = s(765671),
    tR = s(736653),
    tL = s(162232),
    ty = s(859387),
    tI = s(734736),
    tH = s(303136),
    tQ = s(265234),
    tM = s(181713);
let tU = (e) => {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        a = s ? tM.A : tM.A + "?format=webp";
    return (0, l.jsx)("div", {
        className: r()(tQ.k, t),
        children: s
            ? (0, l.jsx)(tH.A, {
                  preload: "auto",
                  className: tQ.L,
                  children: (0, l.jsx)("source", { src: a, type: "video/webm" }),
              })
            : (0, l.jsx)("img", { className: tQ.L, src: a, alt: n }),
    });
};
var tF = s(57718),
    tk = s(659249);
let tw = (0, n.memo)(function (e) {
    let { quest: t } = e,
        [s, a] = (0, n.useState)(!1),
        [i, c] = (0, n.useState)(24),
        [o, d] = (0, n.useState)(!1),
        m = (0, n.useRef)(null),
        h = (0, n.useRef)(null),
        x = (0, n.useRef)(null),
        E = (0, u.bG)([eG.default], () => eG.default.getCurrentUser()),
        { ref: j, height: v = 0 } = (0, tA.Ay)(),
        _ = (0, tR.Ay)(),
        p = (0, Y.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        N = t.userStatus?.claimedTier ?? 0,
        b = t.config.rewards[N],
        C = b?.type === tS.l.FRACTIONAL_PREMIUM,
        S = b?.type === tS.l.COLLECTIBLE,
        T = b?.type === tS.l.VIRTUAL_CURRENCY,
        A = b?.collectibleProduct?.items?.[0],
        R = A?.type === tC.R.AVATAR_DECORATION ? A : null,
        L = n.useMemo(
            () =>
                null == b
                    ? null
                    : !0 === T && t.userStatus?.orbQuantityClaimed != null
                      ? ec.intl.format(ec.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : b.name,
            [b, T, t],
        );
    (0, tA.i4)(m, (e) => {
        let { height: t } = e;
        if (!S || null == t || null == h.current || null == m.current || null == x.current) return;
        let s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect(),
            n = x.current.getBoundingClientRect();
        c((l.top - s.top - n.height) / 2);
    });
    let y = (0, tT.M)(_),
        I = n.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        H = n.useMemo(() => (0, ty.tW)(t, ty.fY.REWARD), [t]),
        Q = s ? v + 8 : 0,
        { content_position: M, row_index: U, ...F } = (0, K.fF)(G.uF.TROPHY_CASE_CARD),
        k = () => {
            a(!0), q.default.track(ef.HAw.QUEST_HOVER, { quest_id: t.id, ...F });
        },
        w = () => {
            a(!1);
        },
        P = (e) => {
            d(!0), q.default.track(ef.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == b || o
        ? null
        : (0, l.jsx)(tO.vN, {
              children: (0, l.jsxs)("div", {
                  ref: m,
                  tabIndex: 0,
                  onFocus: k,
                  onBlur: w,
                  onMouseEnter: k,
                  onMouseLeave: w,
                  className: r()(tk.kL, { [tk.yo]: s }),
                  children: [
                      null != E &&
                          S &&
                          null != R &&
                          (0, l.jsx)("div", {
                              ref: x,
                              className: tk.FX,
                              style: { top: i },
                              children: (0, l.jsx)(tL.A, {
                                  avatarDecorationOverride: R,
                                  user: E,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      C
                          ? (0, l.jsx)(tI.A, { className: tk.Sl })
                          : T
                            ? (0, l.jsx)(tU, {
                                  className: tk.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : H.isAnimated
                              ? (0, l.jsx)(O.A, {
                                    className: tk.JU,
                                    autoPlay: !1,
                                    children: (0, l.jsx)("source", {
                                        src: H.url,
                                        type: H.mimetype ?? void 0,
                                        onError: () => P(H.url),
                                    }),
                                })
                              : (0, l.jsx)("img", {
                                    className: tk.Sl,
                                    src: H.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(H.url),
                                }),
                      (0, l.jsx)("div", { className: r()(tk.Lw, { [tk.en]: y, [tk.So]: !y }) }),
                      (0, l.jsx)("div", {
                          ref: h,
                          className: tk.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, l.jsx)(tF.Ay, {
                              logotypeClassName: r()(tk.wm, { [tk.A0]: I }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, l.jsxs)("div", {
                          ref: j,
                          className: tk.zH,
                          children: [
                              (0, l.jsx)(f.D, {
                                  className: tk.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: ec.intl.format(ec.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, l.jsx)(g.E, {
                                  variant: "text-sm/medium",
                                  color: y ? "text-muted" : "always-white",
                                  style: { opacity: y ? 1 : 0.75 },
                                  children: ec.intl.format(ec.t["kXVcV+"], { reward: L, claimedDate: p }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var tP = s(396478);
function tD(e) {
    let { onClick: t } = e,
        n = (0, tR.Ay)();
    return (0, l.jsxs)(tP.pp, {
        theme: n,
        children: [
            (0, l.jsx)(tP.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, l.jsx)(tP.SG, { note: ec.intl.format(ec.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var tq = s(975424);
function tB(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: n } = (0, Y.Iq)();
    return n && 0 === s.length
        ? (0, l.jsx)(ea.y, { className: tq.u })
        : 0 === s.length
          ? (0, l.jsx)(tD, { onClick: () => t(Y.NC.ALL) })
          : (0, l.jsx)("div", {
                className: tq.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, l.jsx)(tw, { quest: e }, e.id)),
            });
}
var tV = s(353640),
    tW = s(121894),
    tG = s(851936);
let tz = (0, tV.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, tG.L)({ location: tj.rE.QUEST_HOME_DESKTOP });
        if (s.info === ev.tE || t().elapsed >= 6e4) return;
        let l = performance.now() - t().startTime;
        l > 6e4 && (l = 6e4);
        let n = { elapsed: l };
        l - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${l}ms`), (n.lastOutputLogTime = l)),
            null == t().logger && (n.logger = s),
            (0, tW.r)(() => e(n));
    },
}));
var t$ = s(516226),
    tY = s(323889),
    tK = s(331322),
    tJ = s(561844),
    tZ = s(901406),
    tX = s(415441),
    t0 = s(73473),
    t1 = s(139384),
    t8 = s(43990),
    t3 = s(770178),
    t7 = s(14233);
function t2(e, t) {
    let { row_index: s, ...l } = (0, K.fF)(G.uF.QUEST_HOME_HERO);
    (0, tJ.Qg)({
        adContentId: e,
        adCreativeType: tY.p.QUEST_HOME_HERO,
        event: t,
        properties: l,
        sourceQuestContent: G.uF.QUEST_HOME_HERO,
    });
}
let t5 = n.forwardRef(function (e, t) {
    let { adContentId: s, topContent: a, title: i, subtitle: c, buttons: o, background: u, className: d } = e,
        [m, h] = n.useState("display-lg"),
        x = n.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        E = (0, t3.w)(x, [], { fireOnMount: !0 }),
        j = n.useCallback(() => t2(s, ef.HAw.QUEST_HOVER), [s]),
        v = n.useCallback(() => t2(s, ef.HAw.QUEST_HOVER_OFF), [s]);
    return (0, l.jsx)(t8.N, {
        theme: ef.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, l.jsx)("div", {
                className: r()(t7.iE, e, d),
                onMouseEnter: j,
                onMouseLeave: v,
                ref: (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, l.jsxs)("div", {
                    className: t7.FG,
                    children: [
                        (0, l.jsxs)(tK.B, {
                            className: t7.Qs,
                            direction: "vertical",
                            justify: null != a ? "space-between" : "end",
                            children: [
                                a,
                                (0, l.jsxs)(tK.B, {
                                    className: t7.yp,
                                    gap: 16,
                                    children: [
                                        (0, l.jsxs)(tK.B, {
                                            gap: 8,
                                            children: [
                                                (0, l.jsx)(f.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: t7.DD,
                                                    children: i,
                                                }),
                                                (0, l.jsx)(g.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: t7.VA,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        o,
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
var t4 = s(194526),
    t6 = s(548411),
    t9 = s(554830),
    se = s(689175),
    st = s(522403);
function ss(e) {
    let {
            children: t,
            className: s,
            scrollIncrement: a,
            itemSelector: i = "[data-scroll-target]",
            maskWidth: c = 48,
        } = e,
        o = n.useRef(null),
        d = n.useRef(null),
        [m, h] = n.useState(!1),
        [x, E] = n.useState(!1),
        f = (0, u.bG)([_.A], () => _.A.useReducedMotion) ? "auto" : "smooth",
        g = n.useCallback(() => {
            let e = o.current?.getScrollerNode();
            null != e && (h(e.scrollLeft > 0), E(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []),
        j = n.useCallback(() => {
            g();
        }, [g]),
        v = n.useCallback(() => {
            let e = o.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollLeft - a,
                s = t < a ? 0 : t;
            e.scrollTo({ left: s, behavior: f });
        }, [a, f]),
        p = n.useCallback(() => {
            let e = o.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollWidth - e.clientWidth,
                s = e.scrollLeft + a,
                l = s > t - a ? t : s;
            e.scrollTo({ left: l, behavior: f });
        }, [a, f]),
        N = n.useCallback(
            (e) => {
                let t = o.current?.getScrollerNode();
                if (null == t) return;
                let s = e.target.closest(i);
                if (null == s) return;
                let l = s.offsetLeft - c,
                    n = s.offsetLeft + s.offsetWidth + c,
                    a = t.scrollLeft,
                    r = a + t.clientWidth;
                l < a
                    ? t.scrollTo({ left: l, behavior: f })
                    : n > r && t.scrollTo({ left: n - t.clientWidth, behavior: f });
            },
            [i, c, f],
        );
    return (
        (0, to.g)(d, g, [], { fireOnMount: !0 }),
        (0, l.jsxs)("div", {
            className: r()(s, st.m7),
            ref: d,
            style: { "--custom-scroller-mask-width": `${c}px` },
            children: [
                (0, l.jsx)(eq.D, {
                    "aria-label": ec.intl.string(ec.t.vgfxaA),
                    className: r()(st.k9, st.RW, { [st.Q2]: m }),
                    onClick: v,
                    tabIndex: m ? 0 : -1,
                    "aria-hidden": !m,
                    children: (0, l.jsx)(t6.Z, { color: eu.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
                }),
                (0, l.jsx)(eq.D, {
                    "aria-label": ec.intl.string(ec.t.XiOHRX),
                    className: r()(st.k9, st.K3, { [st.Q2]: x }),
                    onClick: p,
                    tabIndex: x ? 0 : -1,
                    "aria-hidden": !x,
                    children: (0, l.jsx)(t9.K, { color: eu.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
                }),
                (0, l.jsx)("div", {
                    className: r()(st.$u, { [st.sF]: m, [st.RC]: x }),
                    children: (0, l.jsx)(se.zC, {
                        ref: o,
                        orientation: "horizontal",
                        onScroll: j,
                        onFocusCapture: N,
                        children: t,
                    }),
                }),
            ],
        })
    );
}
var sl = s(731355),
    sn = s(621466),
    sa = s(508770),
    sr = s(406810),
    si = s(628284),
    sc = s(65154),
    so = s(687966),
    su = s(496431),
    sd = s(975807),
    sm = s(58703),
    sh = s(18437),
    sx = s(801365),
    sE = s(814793),
    sf = s(453384),
    sg = s(646764),
    sj = s(398025),
    sv = s(691464);
function s_(e) {
    let [t, s] = n.useState(!1),
        l = n.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        a = n.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: l, onMouseLeave: a, onFocus: l, onBlur: a } };
}
function sp(e) {
    let { hero: t, contentPosition: s } = e,
        a = n.useRef(null),
        { isHovering: i, hoverProps: c } = s_(
            n.useCallback(
                (e) => {
                    (0, tJ.Qg)({
                        adContentId: t.id,
                        adCreativeType: tY.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: G.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, K.jO)(G.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    n.useEffect(() => {
        let e = a.current;
        (0, sn.vq)(e, HTMLVideoElement) && (i ? ((e.currentTime = 0), e.play().catch(ev.tE)) : e.pause());
    }, [i]);
    let { hoverSpring: o } = (0, tu.z)({ hoverSpring: +!!i, config: tc.config.gentle });
    return (0, l.jsxs)("div", {
        className: r()(sv.FW, sv.Bm),
        ...c,
        children: [
            (0, l.jsx)("div", {
                className: sv.Ve,
                children: (0, l.jsx)(tX.N, {
                    showVideo: !0,
                    assetRef: a,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: r()(sv.pv, sv.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: r()(sv.pv, sv.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, l.jsx)(tc.animated.div, {
                className: sv.hn,
                style: { transform: o.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, l.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, sd.A)(t.cta.url),
                            (0, tJ.vK)({
                                adContentId: t.id,
                                adCreativeType: tY.p.QUEST_HOME_HERO,
                                questContent: G.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: K.Cy.OPEN_GAME_LINK,
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
function sN(e) {
    let { quest: t, onQuestCtaClick: s, contentPosition: a } = e,
        i = (0, tR.Ay)(),
        c = n.useMemo(() => (0, ty.tW)(t, ty.fY.LOGO_TYPE, (0, tT.M)(i) ? ef.NJ8.DARK : ef.NJ8.LIGHT).url, [t, i]),
        o = n.useMemo(() => new Date(t.config.expiresAt), [t.config.expiresAt]),
        { days: u, hours: d, minutes: m, seconds: h } = (0, su.A)(o, td.A.Millis.MINUTE),
        E = n.useMemo(
            () =>
                (0, sm.uN)(
                    { days: u, hours: d, minutes: m, seconds: h },
                    { days: ec.t["Ux/De1"], hours: ec.t.Lzd5Ie, minutes: ec.t.odmpbP },
                ),
            [u, d, m, h],
        ),
        f = n.useMemo(() => (0, sx.mq)(t.config), [t.config]),
        j = n.useMemo(
            () =>
                (function (e) {
                    switch ((0, e4.xv)(e).type) {
                        case tS.l.IN_GAME:
                            return ec.intl.string(ec.t["O/J2kr"]);
                        case tS.l.COLLECTIBLE:
                            return ec.intl.string(ec.t.Jg17Ut);
                        case tS.l.VIRTUAL_CURRENCY:
                            return ec.intl.string(ec.t.ElYQFS);
                        default:
                            return (0, sx.mq)(e);
                    }
                })(t.config),
            [t.config],
        ),
        { completedRatio: v, completedRatioDisplay: _ } = (0, Y.O9)(t),
        p = n.useMemo(() => (0, sx._Z)(t.config), [t.config]),
        N = (0, sh.Ut)(),
        b = (0, sh.u0)(),
        { isHovering: C, hoverProps: S } = s_(
            n.useCallback(
                (e) => {
                    b({
                        questId: t.id,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: G.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, K.jO)(G.uF.QUEST_HOME_HERO_SHELF),
                            content_position: a,
                        },
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [b, t.id, a],
            ),
        ),
        { hoverSpring: T } = (0, tu.z)({ hoverSpring: +!!C, config: tc.config.gentle });
    return (0, l.jsxs)("div", {
        className: r()(sv.FW, sv.$R),
        ...S,
        children: [
            (0, l.jsxs)(tK.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, l.jsx)(sa.E, { type: { text: j }, variant: "expressive" }),
                    (0, l.jsx)(tc.animated.div, {
                        style: { opacity: (0, sj.a)(T.to([0, 1], [1, 0])) },
                        children: (0, l.jsx)(sa.E, { type: { text: E }, icon: sr.O }),
                    }),
                ],
            }),
            (0, l.jsx)(tc.animated.div, {
                className: sv.Tr,
                style: { transform: T.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, l.jsx)(sf.A, {
                    percentComplete: v,
                    overlayText: C && null != p ? `${p}` : void 0,
                    size: 100,
                    children: (0, l.jsx)(sg.A, {
                        quest: t,
                        questContent: G.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: C,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, l.jsx)(tc.animated.div, {
                className: sv.tw,
                style: {
                    opacity: (0, sj.a)(T.to([0, 1], [1, 0])),
                    transform: T.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, l.jsxs)(tK.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)("div", {
                            className: sv.aP,
                            children: (0, l.jsx)("img", { src: c, alt: t.config.messages.gameTitle, className: sv.rC }),
                        }),
                        (0, l.jsxs)(tK.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(g.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    className: sv.Ht,
                                    children: f,
                                }),
                                (0, l.jsxs)(tK.B, {
                                    align: "start",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, l.jsxs)(tK.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, l.jsx)(si.y, { size: "xs", color: eu.A.colors.ICON_MUTED.css }),
                                                (0, l.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.config.messages.gamePublisher,
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)(tK.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, sE.pv)(t.config) === sl.Z.VIDEO
                                                    ? (0, l.jsx)(sc.S, {
                                                          size: "xs",
                                                          color: eu.A.colors.ICON_MUTED.css,
                                                      })
                                                    : (0, l.jsx)(so._, {
                                                          size: "xs",
                                                          color: eu.A.colors.ICON_MUTED.css,
                                                      }),
                                                (0, l.jsx)(g.E, {
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
            (0, l.jsx)(tc.animated.div, {
                className: sv.um,
                style: { transform: T.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, l.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: () => {
                        s(t.id),
                            N({
                                questId: t.id,
                                questContent: G.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: K.Cy.VIEW_QUESTS,
                                questContentPosition: a,
                                sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: ec.intl.string(ec.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var sb = s(648731);
function sC(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e;
    return (0, l.jsx)(ss, {
        className: sb.v,
        scrollIncrement: 320,
        children: (0, l.jsxs)(tK.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, l.jsx)(t0.R, {
                    adContentId: t.id,
                    adCreativeType: tY.p.QUEST_HOME_HERO,
                    questContent: G.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, l.jsx)(sp, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, t) =>
                    (0, l.jsx)(
                        t0.R,
                        {
                            questOrQuests: e,
                            questContent: G.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: t + 1,
                            sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                            children: (s) =>
                                (0, l.jsx)("div", {
                                    ref: (e) => {
                                        s.current = e;
                                    },
                                    children: (0, l.jsx)(sN, { quest: e, onQuestCtaClick: n, contentPosition: t + 1 }),
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
function sT() {
    return (0, l.jsx)("div", { className: sS.Np });
}
function sO(e) {
    let { heroImage: t, heroVideo: s } = e,
        a = n.useRef(null);
    (0, t1.A)(a, tj.rE.QUEST_HOME_DESKTOP);
    let i = n.useMemo(() => (null != s ? (0, ty.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, l.jsxs)("div", {
              className: sS.Tv,
              children: [
                  (0, l.jsx)(sT, {}),
                  (0, l.jsx)("div", {
                      className: sS.LO,
                      children: (0, l.jsx)("img", { className: sS.LY, src: t, alt: "" }),
                  }),
                  (0, l.jsx)("div", {
                      className: r()(sS.LO, sS.jx, sS.hw),
                      children: (0, l.jsx)("img", { className: sS.LY, src: t, alt: "" }),
                  }),
                  (0, l.jsx)("div", {
                      className: r()(sS.LO, sS.jx, sS.Co),
                      children: (0, l.jsx)("img", { className: sS.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: sS.Tv,
              children: [
                  (0, l.jsx)(sT, {}),
                  (0, l.jsx)("div", {
                      className: sS.LO,
                      children: (0, l.jsx)(tX.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: a,
                          imageAsset: {
                              alt: "",
                              className: sS.LY,
                              asset: { url: i, mimetype: (0, ty.vm)(i), isAnimated: !1 },
                              assetId: i,
                          },
                          videoAsset: {
                              alt: "",
                              className: sS.LY,
                              asset: { url: s, mimetype: (0, ty.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function sA(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        a = (0, u.bG)([X.A], () => X.A.quests),
        { shelfQuests: r, isShelfEnabled: i } = (0, Y.t9)(t),
        { dismissQuestHomeHeroContent: c } = (0, t4.I)();
    n.useEffect(() => {
        c();
    }, [c]);
    let o = n.useMemo(() => t.questIds?.find((e) => a.has(e)), [a, t.questIds]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(t0.R, {
                adContentId: t.id,
                adCreativeType: tY.p.QUEST_HOME_HERO,
                questContent: G.uF.QUEST_HOME_HERO,
                sourceQuestContent: G.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, l.jsx)(t5, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, l.jsxs)(tK.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, l.jsx)("img", { src: t.sponsorImage, alt: "", className: sS.wm }),
                                (0, l.jsx)(g.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: sS.yu,
                                    children: ec.intl.string(ec.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, l.jsxs)(h.e, {
                            children: [
                                (0, l.jsx)(x.$, {
                                    onClick: () => {
                                        (0, tZ._Q)(
                                            { adContentId: t.id, adCreativeType: tY.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: G.uF.QUEST_HOME_HERO,
                                                ctaContent: K.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: G.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != o &&
                                    (0, l.jsx)(x.$, {
                                        onClick: () => {
                                            s(o),
                                                (0, tJ.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: tY.p.QUEST_HOME_HERO,
                                                    questContent: G.uF.QUEST_HOME_HERO,
                                                    questContentCTA: K.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: G.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: ec.intl.string(ec.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, l.jsx)(sO, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, l.jsx)(sC, { hero: t, shelfQuests: r, onQuestCtaClick: s }),
        ],
    });
}
function sR() {
    return (0, l.jsx)("div", { className: r()(t7.iE, t7.FG, t7.B3), children: (0, l.jsx)(ea.y, {}) });
}
var sL = s(321503),
    sy = s(758836),
    sI = s(613057),
    sH = s(935824);
let sQ = n.createContext({});
function sM(e) {
    let { banner: t, children: s, header: a, withFullBleedBanner: r = !1 } = e,
        { onScroll: i, scrollerRef: c } = n.useContext(sQ);
    return (0, l.jsxs)(sL.X.Provider, {
        value: c,
        children: [
            a,
            (0, l.jsxs)(U.A, {
                onScroll: i,
                ref: c,
                children: [
                    r && t,
                    (0, l.jsxs)(Q.A, { className: sH.Jo, innerClassName: sH.FG, children: [!r && t, s] }),
                ],
            }),
        ],
    });
}
function sU(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: a } = e;
    return (0, l.jsx)(M.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: a, icon: m.r });
}
function sF(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: a } = (0, w.Z)({ location: tj.rE.QUEST_HOME_DESKTOP }),
        r = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        i = (0, u.bG)([D.A], () => D.A.isFocused()),
        { ref: c, inViewport: o } = (0, e3.p)(),
        d = n.useRef(null);
    if (
        (n.useEffect(() => {
            d?.current != null &&
                (d.current.paused || (i && o && !r)
                    ? d.current.paused && !r && o && i && d.current.play()
                    : d.current.pause());
        }, [r, o, i]),
        a)
    ) {
        let e = (0, B.TM)();
        return (0, l.jsx)(O.A, {
            ref: (e) => {
                (d.current = e), (c.current = e);
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
function sk(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, w.Z)({ location: tj.rE.QUEST_HOME_DESKTOP });
    return (0, l.jsxs)("div", {
        className: r()(sH.Tv, { [sH.lJ]: s }),
        children: [
            (0, l.jsx)(sT, {}),
            (0, l.jsx)("div", { className: r()(sH.nz, { [sH.ZZ]: s }) }),
            (0, l.jsx)(sF, { onLoadComplete: t, className: r()(sH.Fe, { [sH.H4]: s, [sH.Q8]: !s }) }),
        ],
    });
}
function sw(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, w.Z)({ location: tj.rE.QUEST_HOME_DESKTOP }),
        a = n.useCallback(() => {
            s ? window.open(ef.X7G.PAID_TERMS_ORBS) : window.open(V.A.getArticleURL(ef.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, l.jsx)(t5, {
        adContentId: s ? tj.yr : tj.uz,
        title: s ? ec.intl.format(ec.t.BCBIlp, {}) : ec.intl.format(ec.t.lmMBfy, {}),
        subtitle: s ? ec.intl.format(ec.t.U9FY0J, {}) : ec.intl.string(ec.t.oWCrBq),
        buttons: s
            ? (0, l.jsxs)(h.e, {
                  children: [
                      (0, l.jsx)(x.$, {
                          variant: "overlay-primary",
                          text: ec.intl.string(ec.t["1Wm127"]),
                          onClick: () =>
                              (0, S.Cz)({
                                  tab: sy.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: p.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, l.jsx)(x.$, {
                          variant: "overlay-secondary",
                          text: ec.intl.string(ec.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, l.jsx)(x.$, {
                  variant: "overlay-primary",
                  text: ec.intl.string(ec.t.hvVgAZ),
                  onClick: a,
                  icon: E.I,
                  iconPosition: "end",
              }),
        background: (0, l.jsx)(sk, { onAssetLoad: t }),
    });
}
function sP(e) {
    let { onAssetLoad: t, onQuestCtaClick: s } = e,
        { questHomeHero: n, isLoading: a } = (0, Y.lg)();
    return (0, l.jsx)("div", {
        className: sH.iS,
        children: a
            ? (0, l.jsx)(sR, {})
            : null != n
              ? (0, l.jsx)(sA, { hero: n, onQuestCtaClick: s })
              : (0, l.jsx)(sw, { onAssetLoad: t }),
    });
}
function sD(e) {
    let { onLoadComplete: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: r()(sH.BW, sH.rZ),
                alt: "",
            }),
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: r()(sH.BW, sH.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: r()(sH.BW, sH.rZ),
                alt: "",
            }),
        ],
    });
}
let sq = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, i.zy)(),
        a = (0, i.W6)(),
        m = n.useMemo(() => (0, F.B)(s.pathname, ef.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        h = (0, u.bG)([C.A], () => C.A.getState("quests")),
        {
            selectedTab: E,
            onSelectTab: _,
            tabs: O,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = z.A.useField("tab"),
                l = (0, i.zy)(),
                a = (0, Y.p5)();
            n.useEffect(() => {
                z.A.getState().initializeFromUrl(l.search, a);
            }, [l.search, a]);
            let r = n.useCallback((e) => {
                z.A.getState().setTab(e);
            }, []);
            return {
                tabs: n.useMemo(
                    () =>
                        [
                            { id: Y.NC.ALL, label: ec.intl.string(ec.t["0SzXmi"]) },
                            t ? { id: Y.NC.CLAIMED, label: ec.intl.string(ec.t.zyNYNB) } : null,
                            t && a ? { id: Y.NC.PREVIEW_TOOL, label: ec.intl.string(ec.t.BDUDau) } : null,
                        ].filter(e7.Vq),
                    [t, a],
                ),
                selectedTab: s,
                onSelectTab: r,
            };
        })({ withClaimedQuestsTab: !m });
    n.useLayoutEffect(() => {
        m && E === Y.NC.CLAIMED && z.A.setState({ tab: Y.NC.ALL });
    }, [m, E]);
    let { onScroll: R } = (0, I.G)(),
        L = $.A.getState().getUtmCurrentContext(),
        Q = tz((e) => e.registerAssetLoad),
        M = n.useRef(L);
    n.useEffect(() => {
        M.current = L;
    }),
        n.useEffect(() => {
            let { current: e } = M;
            (0, N.x)({
                name: o.ImpressionNames.QUEST_HOME,
                type: o.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: E,
                },
            });
        }, [E]);
    let { enabled: U } = (0, w.Z)({ location: tj.rE.QUEST_HOME_DESKTOP });
    (0, T.HU)({ location: ec.intl.string(ec.t.JALI2K) });
    let D = n.useRef(null),
        B = n.useRef(null),
        V = n.useCallback((e) => {
            B.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    B.current?.scrollToQuest(e);
                });
        }, []),
        J = n.useCallback(() => {
            (0, k.Y)({
                pageType: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ef.JJy.ORBS_BALANCE_MENU,
                ctaObject: ef.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, S.Cz)({ tab: sy.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.ORBS_BALANCE_MENU });
        }, []);
    n.useEffect(() => {
        (0, v.I)(ef.BVt.QUEST_HOME);
    }, []),
        n.useEffect(() => {
            y.trigger();
        }, []),
        n.useEffect(() => {
            if (null != h) return;
            let e = new URLSearchParams(s.search),
                l = e.get(Y.L1.TAB);
            if (l === Y.NC.PREVIEW_TOOL) {
                let t = e.get(Y.L1.QUEST_ID);
                b.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: sI.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let n = performance.getEntriesByType("navigation")[0];
            if ("POP" === a.action && n?.type === "navigate" && t && l !== Y.NC.PREVIEW_TOOL) {
                let t = (0, W.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(Y.L1.SORT),
                    a = e.get(Y.L1.FILTER);
                b.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: sI.XK.QUEST_HOME,
                    params: { questId: (0, W.uJ)(t) ? void 0 : t, sort: n, filter: a, tab: l },
                });
            }
        }, [s.search, h, a.action, s.hash, t]),
        n.useEffect(() => {
            t && (0, A.Dr)(d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let Z = n.useCallback(() => {
            (0, e8.navigateToQuestHome)({ fromContent: G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                q.default.track(ef.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: K.Cy.VIEW_QUESTS,
                    click_id: (0, c.A)(),
                    is_targeted: !1,
                    ...(0, K.fF)(G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        X = n.useCallback(
            (e) => {
                a.replace({ ...a.location, hash: void 0 }), D.current?.scrollToTop({ animate: !1 }), _(e);
            },
            [a, _],
        );
    return (0, l.jsx)(t$.M.Provider, {
        value: { onAssetLoadComplete: Q },
        children: (0, l.jsx)(sQ.Provider, {
            value: n.useMemo(() => ({ onScroll: R, scrollerRef: D }), [R, D]),
            children: (0, l.jsx)("div", {
                className: r()(sH.kL, { [sH.KY]: !t }),
                children: m
                    ? (0, l.jsx)(sM, {
                          withFullBleedBanner: !0,
                          header: (0, l.jsx)(sU, { selectedTab: E, onSelectTab: X, tabs: O }),
                          banner: (0, l.jsx)(H.A, {
                              title: ec.intl.string(ec.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, l.jsx)(x.$, {
                                  variant: "overlay-primary",
                                  text: ec.intl.string(ec.t.GURBQl),
                                  onClick: Z,
                              }),
                              className: sH.Gj,
                              children: (0, l.jsx)(sD, { onLoadComplete: Q }),
                          }),
                          children: (0, l.jsxs)("div", {
                              className: sH.kj,
                              children: [
                                  (0, l.jsx)(f.D, {
                                      variant: "heading-xl/semibold",
                                      children: ec.intl.string(ec.t.z8YP2A),
                                  }),
                                  (0, l.jsx)(g.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: ec.intl.string(ec.t.HdKh65),
                                  }),
                                  (0, l.jsx)(j.Q, {
                                      text: ec.intl.string(ec.t["1CdL8d"]),
                                      onClick: Z,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, l.jsx)(sM, {
                          header: (0, l.jsx)(sU, {
                              selectedTab: E,
                              onSelectTab: X,
                              tabs: O,
                              endContent:
                                  U &&
                                  (0, l.jsx)(P.SS, {
                                      analyticsPage: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: P.cP.END,
                                      ctaText: ec.intl.string(ec.t["J+vlIR"]),
                                      ctaOnClick: J,
                                  }),
                          }),
                          banner: E === Y.NC.ALL && (0, l.jsx)(sP, { onAssetLoad: Q, onQuestCtaClick: V }),
                          children:
                              E === Y.NC.CLAIMED
                                  ? (0, l.jsx)(tB, { onSelectTab: X })
                                  : E === Y.NC.PREVIEW_TOOL
                                    ? (0, l.jsx)(e1, {})
                                    : (0, l.jsx)(tb, { ref: B }),
                      }),
            }),
        }),
    });
};
