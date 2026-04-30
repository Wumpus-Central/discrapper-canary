s.r(t), s.d(t, { default: () => sD }), s(323874), s(14289), s(35956);
var l = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(873263),
    c = s(132500),
    o = s(110259),
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
    S = s(693477),
    T = s(726249),
    O = s(607470),
    A = s(826673),
    R = s(840251),
    L = s(688151);
let y = new R.E([], L.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var H = s(711111),
    I = s(701508),
    Q = s(979590),
    M = s(749638),
    U = s(783531),
    F = s(334465),
    k = s(318346),
    w = s(270051),
    P = s(70926),
    D = s(531685),
    q = s(954571),
    B = s(676279),
    V = s(975571),
    W = s(240248),
    G = s(507107),
    z = s(631001),
    $ = s(87549),
    Y = s(890687),
    K = s(590202);
s(321073);
var J = s(228366),
    Z = s(829219),
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
    ec = s(985018);
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
    ex = s(692798),
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
var eN = s(761508),
    eb = s(797788);
let eC = () => (0, l.jsx)("div", { className: eb.y });
var eS = s(834615),
    eT = s(332544);
let eO = function (e) {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: eT.x3,
        children: (0, l.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, l.jsx)(f.D, {
                    className: eT.R_,
                    variant: "heading-md/semibold",
                    children: ec.intl.string(ec.t.L2mlUb),
                }),
                (0, l.jsx)(eS.A, { quest: t }),
            ],
        }),
    });
};
var eA = s(241124),
    eR = s(28082),
    eL = s(717695),
    ey = s(763578),
    eH = s(111113);
let eI = function (e) {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: eT.x3,
        children: (0, l.jsxs)("div", {
            className: ey.wp,
            children: [
                (0, l.jsx)(f.D, {
                    className: ey.Oo,
                    variant: "heading-md/semibold",
                    children: ec.intl.string(ec.t.rjVPdM),
                }),
                (0, l.jsx)("div", {
                    className: ey.RE,
                    children: (0, l.jsx)("div", {
                        className: ey.Z,
                        children: (0, l.jsx)("div", {
                            className: eH.C3,
                            children: (0, l.jsx)(eL.A, {
                                children: (0, l.jsx)(eA.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, l.jsx)(eR.Y, { quest: t }),
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
let eM = (e) => {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: eT.x3,
        children: (0, l.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, l.jsx)(f.D, {
                    className: eT.R_,
                    variant: "heading-md/semibold",
                    children: ec.intl.string(ec.t.gWinpQ),
                }),
                (0, l.jsx)("div", {
                    className: eT.YT,
                    children: (0, l.jsx)(eQ.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eU = s(711038),
    eF = s(330034);
let ek = function (e) {
    let { questId: t } = e;
    return (0, l.jsx)("div", {
        className: eT.x3,
        children: (0, l.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, l.jsx)(f.D, { variant: "heading-md/semibold", children: ec.intl.string(ec.t.IcljUu) }),
                (0, l.jsx)("div", {
                    className: eF.wu,
                    children: (0, l.jsx)("span", { className: eF.cy, children: ec.intl.string(ec.t.q97mEu) }),
                }),
                (0, l.jsx)("div", {
                    className: eF.oU,
                    children: (0, l.jsx)("div", {
                        className: eF.zx,
                        children: (0, l.jsx)("div", {
                            className: eF.Lj,
                            children: (0, l.jsx)("div", {
                                className: eF.n0,
                                children: (0, l.jsx)(eU.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ew = s(291922);
let eP = (e) => {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: eT.x3,
        children: (0, l.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, l.jsx)(f.D, {
                    className: eT.R_,
                    variant: "heading-md/semibold",
                    children: ec.intl.string(ec.t["5wnpF3"]),
                }),
                (0, l.jsx)(ew.A, {
                    className: eT.d,
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
    eB = s(778712),
    eV = s(87664),
    eW = s(287809),
    eG = s(427262),
    ez = s(198525),
    e$ = s(66176);
let eY = function (e) {
        let { quest: t } = e,
            [s, a] = n.useState(!1),
            i = n.useRef(null),
            c = (0, u.bG)([eW.default], () => eW.default.getCurrentUser()),
            o = eG.Ay.useName(c),
            d = (0, eV.A)(c?.id),
            m = n.useCallback(
                (e) =>
                    (0, l.jsx)(ez.A, {
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
            className: eT.x3,
            children: (0, l.jsxs)("div", {
                className: eT.B0,
                children: [
                    (0, l.jsx)(f.D, {
                        className: e$.R_,
                        variant: "heading-md/semibold",
                        children: ec.intl.string(ec.t.jY7Zxg),
                    }),
                    (0, l.jsx)("div", { className: e$.$Q, children: ec.intl.string(ec.t.q3hbne) }),
                    (0, l.jsx)("div", {
                        className: e$.k0,
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
                                    className: r()(e$.Tn, { [e$.wH]: s }),
                                    children: (0, l.jsx)(eD.D, {
                                        onClick: () => a(!s),
                                        tabIndex: 0,
                                        children: (0, l.jsxs)("div", {
                                            className: e$.lm,
                                            children: [
                                                (0, l.jsx)(eq.eu, {
                                                    size: eB._3.SIZE_32,
                                                    src: c?.getAvatarURL(void 0, 32),
                                                    status: ef.clD.ONLINE,
                                                    "aria-label": c?.username,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e$.Fj,
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
    eK = (e) => {
        let { questId: t, selectedSections: s } = e,
            n = (0, u.bG)([X.A], () => X.A.getQuest(t));
        if (null != (0, u.bG)([X.A], () => X.A.getFetchQuestPreviewError(t)) || null == n) return null;
        let a = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                a("quest_bar") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eI, { quest: n }), (0, l.jsx)(eC, {})] }),
                a("home_card") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eP, { quest: n }), (0, l.jsx)(eC, {})] }),
                a("share_embed") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(ek, { questId: n.id }), (0, l.jsx)(eC, {})] }),
                a("channel_call_header") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eM, { quest: n }), (0, l.jsx)(eC, {})] }),
                a("members_list") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eY, { quest: n }), (0, l.jsx)(eC, {})] }),
                a("activity_panel") &&
                    (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(eO, { quest: n }), (0, l.jsx)(eC, {})] }),
            ],
        });
    };
var eJ = s(497275);
function eZ(e) {
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
    return (0, l.jsxs)("div", {
        className: eJ.kL,
        children: [
            (0, l.jsx)(f.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: ec.intl.string(ec.t.BDUDau),
            }),
            (0, l.jsx)("div", { className: eJ.pf, children: r }),
            (0, l.jsxs)(eN.V, {
                type: "top",
                look: "brand",
                selectedItem: o,
                onItemSelect: (e) => {
                    a?.(e);
                },
                children: [
                    (0, l.jsx)(eN.V.Item, { id: "all", children: ec.intl.string(ec.t.Y9DnPa) }),
                    i.map((e) => (0, l.jsx)(eN.V.Item, { id: e.value, children: e.label }, e.value)),
                ],
            }),
            (0, l.jsx)("div", { className: eJ.tZ, children: (0, l.jsx)("div", { className: eJ.Qs, children: t }) }),
        ],
    });
}
function eX(e) {
    return new URLSearchParams(e).get(Y.L1.QUEST_ID);
}
let e0 = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: a } = (function (e) {
            let t = (0, i.W6)(),
                [s, l] = n.useState(e),
                { search: a } = (0, i.zy)();
            return (
                n.useEffect(() => {
                    let t = eX(a);
                    null != t ? l(t) : null != e && l(e);
                }, [e, a]),
                n.useEffect(() => {
                    if (null == s || eX(a) === s) return;
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
    return (0, l.jsx)(eZ, {
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
        children: c?.id != null ? (0, l.jsx)(eK, { questId: c?.id, selectedSections: o }) : null,
    });
};
var e1 = s(545986),
    e8 = s(203879),
    e3 = s(403362),
    e2 = s(167417),
    e7 = s(783977),
    e5 = s(651892),
    e4 = s(305866),
    e6 = s(915089),
    e9 = s(332733);
function te(e) {
    let { children: t, id: s } = e;
    return (0, l.jsx)(g.E, { className: e9.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let tt = function (e) {
    let { children: t, renderPopout: s } = e,
        a = (0, e6.GV)(),
        r = n.useRef(null);
    return (0, l.jsx)(el.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, l.jsx)(e4.l, { className: e9.S, "aria-labelledby": a, children: s(e, a) }),
        scrollBehavior: "close",
        targetElementRef: r,
        children: (e) => t(e, r),
    });
};
var ts = s(612539);
let tl = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        a = (0, Y.Nb)(),
        r = n.useCallback(
            (e) => (l) => {
                let n = e.filter((e) => l.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...n]);
            },
            [s, t],
        );
    return (0, l.jsx)(tt, {
        renderPopout: (e, i) => {
            let { closePopout: c } = e;
            return (0, l.jsxs)("div", {
                children: [
                    a.map((e, t) => {
                        let a = e.options.map((e) => ({ label: (0, e5.up)(e.filter), value: e.filter })),
                            c = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, l.jsxs)(
                            n.Fragment,
                            {
                                children: [
                                    t > 0 && (0, l.jsx)("hr", { className: ts.B }),
                                    (0, l.jsx)(te, { id: i, children: e.heading }),
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
                    (0, l.jsx)("hr", { className: ts.B }),
                    (0, l.jsx)("div", {
                        className: ts.W,
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
                icon: e7.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tn = s(144228),
    ta = s(715482);
let tr = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: a } = e,
        r = n.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, Y.XD)(),
        c = n.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, l.jsx)(tt, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(te, { id: t, children: ec.intl.string(ec.t.tZXJIS) }),
                    (0, l.jsx)(tn.z, {
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
                text: (0, e5.Js)(a),
                icon: ta.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var ti = s(785651),
    tc = s(535185),
    to = s(717421),
    tu = s(927813),
    td = s(710969),
    tm = s(121480);
let th = 4 * tu.A.Millis.SECOND;
function tx(e) {
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
        (0, tc.g)(s, i, [], { fireOnMount: !0 }),
        (0, l.jsx)("div", {
            className: tm.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== a && t(a),
        })
    );
}
let tE = n.forwardRef(function (e, t) {
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
        [{ highlightAnimationProgress: _ }, p] = (0, to.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: th },
        })),
        N = n.useCallback(
            (e) => {
                let t = (0, td.vc)(e, s, a);
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
        ? (0, l.jsx)(ea.y, { className: tm.u1 })
        : 0 === s.length
          ? (0, l.jsxs)("div", {
                className: tm.y7,
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
          : (0, l.jsx)(tx, {
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            a = x === t.id,
                            i = null != x && !a;
                        return (0, l.jsxs)(
                            ti.animated.div,
                            {
                                className: r()({ [tm.XB]: a }),
                                style: a
                                    ? {
                                          boxShadow: (0, ti.to)(
                                              [_.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                                              (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                                          ),
                                      }
                                    : i
                                      ? {
                                            opacity: (0, ti.to)(
                                                [_.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })],
                                                (e) => e,
                                            ),
                                        }
                                      : void 0,
                                children: [
                                    a && (0, l.jsx)("div", { className: tm.E4 }, j),
                                    (0, l.jsx)(ew.A, {
                                        quest: t,
                                        questContent: G.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: n,
                                        className: tm.d,
                                        sourceQuestContent: G.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var tf = s(458518),
    tg = s(654487),
    tj = s(65990);
let tv = [],
    t_ = Y.L1.SORT,
    tp = Y.L1.FILTER,
    tN = n.forwardRef(function (e, t) {
        let s,
            a,
            r,
            c,
            o = n.useRef(null),
            [u, d] =
                ((s = (0, tf.o)()),
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
                    (e = u.get(t_)),
                    ((0, W.uJ)(e) ? null : (Object.values(tg.kL).find((t) => t === e) ?? null)) ?? tg.kL.SUGGESTED
                );
            }, [u]),
            h = n.useMemo(
                () =>
                    (function (e) {
                        if ((0, W.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tg.WQ)(e))
                            .filter(e3.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(tp)) ?? tv,
                [u],
            ),
            x = n.useCallback(
                (e) => {
                    d({ [t_]: e });
                },
                [d],
            ),
            E = n.useCallback(
                (e) => {
                    d({
                        [tp]:
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
                E(tv);
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
                        p(), x(tg.kL.SUGGESTED);
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
                        className: tj.Mj,
                        children: [
                            (0, l.jsx)(f.D, { variant: "heading-lg/medium", children: ec.intl.string(ec.t.giYD00) }),
                            (0, l.jsxs)("div", {
                                className: tj.Nf,
                                children: [
                                    (0, l.jsx)(tr, { onChange: x, optionClassName: tj.Uq, selectedSortMethod: m }),
                                    (0, l.jsx)(tl, { onChange: E, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(tE, {
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
var tb = s(575593),
    tC = s(440703),
    tS = s(462887),
    tT = s(187322),
    tO = s(765671),
    tA = s(736653),
    tR = s(162232),
    tL = s(859387),
    ty = s(734736),
    tH = s(303136),
    tI = s(265234),
    tQ = s(181713);
let tM = (e) => {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        a = s ? tQ.A : tQ.A + "?format=webp";
    return (0, l.jsx)("div", {
        className: r()(tI.k, t),
        children: s
            ? (0, l.jsx)(tH.A, {
                  preload: "auto",
                  className: tI.L,
                  children: (0, l.jsx)("source", { src: a, type: "video/webm" }),
              })
            : (0, l.jsx)("img", { className: tI.L, src: a, alt: n }),
    });
};
var tU = s(57718),
    tF = s(659249);
let tk = (0, n.memo)(function (e) {
    let { quest: t } = e,
        [s, a] = (0, n.useState)(!1),
        [i, c] = (0, n.useState)(24),
        [o, d] = (0, n.useState)(!1),
        m = (0, n.useRef)(null),
        h = (0, n.useRef)(null),
        x = (0, n.useRef)(null),
        E = (0, u.bG)([eW.default], () => eW.default.getCurrentUser()),
        { ref: j, height: v = 0 } = (0, tO.Ay)(),
        _ = (0, tA.Ay)(),
        p = (0, Y.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        N = t.userStatus?.claimedTier ?? 0,
        b = t.config.rewards[N],
        C = b?.type === tC.l.FRACTIONAL_PREMIUM,
        S = b?.type === tC.l.COLLECTIBLE,
        T = b?.type === tC.l.VIRTUAL_CURRENCY,
        A = b?.collectibleProduct?.items?.[0],
        R = A?.type === tb.R.AVATAR_DECORATION ? A : null,
        L = n.useMemo(
            () =>
                null == b
                    ? null
                    : !0 === T && t.userStatus?.orbQuantityClaimed != null
                      ? ec.intl.format(ec.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : b.name,
            [b, T, t],
        );
    (0, tO.i4)(m, (e) => {
        let { height: t } = e;
        if (!S || null == t || null == h.current || null == m.current || null == x.current) return;
        let s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect(),
            n = x.current.getBoundingClientRect();
        c((l.top - s.top - n.height) / 2);
    });
    let y = (0, tS.M)(_),
        H = n.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        I = n.useMemo(() => (0, tL.tW)(t, tL.fY.REWARD), [t]),
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
        : (0, l.jsx)(tT.vN, {
              children: (0, l.jsxs)("div", {
                  ref: m,
                  tabIndex: 0,
                  onFocus: k,
                  onBlur: w,
                  onMouseEnter: k,
                  onMouseLeave: w,
                  className: r()(tF.kL, { [tF.yo]: s }),
                  children: [
                      null != E &&
                          S &&
                          null != R &&
                          (0, l.jsx)("div", {
                              ref: x,
                              className: tF.FX,
                              style: { top: i },
                              children: (0, l.jsx)(tR.A, {
                                  avatarDecorationOverride: R,
                                  user: E,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      C
                          ? (0, l.jsx)(ty.A, { className: tF.Sl })
                          : T
                            ? (0, l.jsx)(tM, {
                                  className: tF.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : I.isAnimated
                              ? (0, l.jsx)(O.A, {
                                    className: tF.JU,
                                    autoPlay: !1,
                                    children: (0, l.jsx)("source", {
                                        src: I.url,
                                        type: I.mimetype ?? void 0,
                                        onError: () => P(I.url),
                                    }),
                                })
                              : (0, l.jsx)("img", {
                                    className: tF.Sl,
                                    src: I.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(I.url),
                                }),
                      (0, l.jsx)("div", { className: r()(tF.Lw, { [tF.en]: y, [tF.So]: !y }) }),
                      (0, l.jsx)("div", {
                          ref: h,
                          className: tF.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, l.jsx)(tU.Ay, {
                              logotypeClassName: r()(tF.wm, { [tF.A0]: H }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, l.jsxs)("div", {
                          ref: j,
                          className: tF.zH,
                          children: [
                              (0, l.jsx)(f.D, {
                                  className: tF.DD,
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
var tw = s(396478);
function tP(e) {
    let { onClick: t } = e,
        n = (0, tA.Ay)();
    return (0, l.jsxs)(tw.pp, {
        theme: n,
        children: [
            (0, l.jsx)(tw.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, l.jsx)(tw.SG, { note: ec.intl.format(ec.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var tD = s(975424);
function tq(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: n } = (0, Y.Iq)();
    return n && 0 === s.length
        ? (0, l.jsx)(ea.y, { className: tD.u })
        : 0 === s.length
          ? (0, l.jsx)(tP, { onClick: () => t(Y.NC.ALL) })
          : (0, l.jsx)("div", {
                className: tD.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, l.jsx)(tk, { quest: e }, e.id)),
            });
}
var tB = s(353640),
    tV = s(121894),
    tW = s(851936);
let tG = (0, tB.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, tW.L)({ location: tg.rE.QUEST_HOME_DESKTOP });
        if (s.info === ev.tE || t().elapsed >= 6e4) return;
        let l = performance.now() - t().startTime;
        l > 6e4 && (l = 6e4);
        let n = { elapsed: l };
        l - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${l}ms`), (n.lastOutputLogTime = l)),
            null == t().logger && (n.logger = s),
            (0, tV.r)(() => e(n));
    },
}));
var tz = s(516226),
    t$ = s(323889),
    tY = s(331322),
    tK = s(561844),
    tJ = s(901406),
    tZ = s(415441),
    tX = s(73473),
    t0 = s(139384),
    t1 = s(43990),
    t8 = s(770178),
    t3 = s(14233);
function t2(e, t) {
    let { row_index: s, ...l } = (0, K.fF)(G.uF.QUEST_HOME_HERO);
    (0, tK.Qg)({
        adContentId: e,
        adCreativeType: t$.p.QUEST_HOME_HERO,
        event: t,
        properties: l,
        sourceQuestContent: G.uF.QUEST_HOME_HERO,
    });
}
let t7 = n.forwardRef(function (e, t) {
    let { adContentId: s, topContent: a, title: i, subtitle: c, buttons: o, background: u, className: d } = e,
        [m, h] = n.useState("display-lg"),
        x = n.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        E = (0, t8.w)(x, [], { fireOnMount: !0 }),
        j = n.useCallback(() => t2(s, ef.HAw.QUEST_HOVER), [s]),
        v = n.useCallback(() => t2(s, ef.HAw.QUEST_HOVER_OFF), [s]);
    return (0, l.jsx)(t1.N, {
        theme: ef.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, l.jsx)("div", {
                className: r()(t3.iE, e, d),
                onMouseEnter: j,
                onMouseLeave: v,
                ref: (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, l.jsxs)("div", {
                    className: t3.FG,
                    children: [
                        (0, l.jsxs)(tY.B, {
                            className: t3.Qs,
                            direction: "vertical",
                            justify: null != a ? "space-between" : "end",
                            children: [
                                a,
                                (0, l.jsxs)(tY.B, {
                                    className: t3.yp,
                                    gap: 16,
                                    children: [
                                        (0, l.jsxs)(tY.B, {
                                            gap: 8,
                                            children: [
                                                (0, l.jsx)(f.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: t3.DD,
                                                    children: i,
                                                }),
                                                (0, l.jsx)(g.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: t3.VA,
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
var t5 = s(194526),
    t4 = s(548411),
    t6 = s(554830),
    t9 = s(689175),
    se = s(522403);
function st(e) {
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
        (0, tc.g)(d, g, [], { fireOnMount: !0 }),
        (0, l.jsxs)("div", {
            className: r()(s, se.m7),
            ref: d,
            style: { "--custom-scroller-mask-width": `${c}px` },
            children: [
                (0, l.jsx)(eD.D, {
                    "aria-label": ec.intl.string(ec.t.vgfxaA),
                    className: r()(se.k9, se.RW, { [se.Q2]: m }),
                    onClick: v,
                    tabIndex: m ? 0 : -1,
                    "aria-hidden": !m,
                    children: (0, l.jsx)(t4.Z, { color: eu.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
                }),
                (0, l.jsx)(eD.D, {
                    "aria-label": ec.intl.string(ec.t.XiOHRX),
                    className: r()(se.k9, se.K3, { [se.Q2]: x }),
                    onClick: p,
                    tabIndex: x ? 0 : -1,
                    "aria-hidden": !x,
                    children: (0, l.jsx)(t6.K, { color: eu.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
                }),
                (0, l.jsx)("div", {
                    className: r()(se.$u, { [se.sF]: m, [se.RC]: x }),
                    children: (0, l.jsx)(t9.zC, {
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
var ss = s(731355),
    sl = s(621466),
    sn = s(508770),
    sa = s(406810),
    sr = s(628284),
    si = s(65154),
    sc = s(687966),
    so = s(496431),
    su = s(975807),
    sd = s(58703),
    sm = s(18437),
    sh = s(801365),
    sx = s(814793),
    sE = s(453384),
    sf = s(646764),
    sg = s(398025),
    sj = s(691464);
function sv(e) {
    let [t, s] = n.useState(!1),
        l = n.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        a = n.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: l, onMouseLeave: a, onFocus: l, onBlur: a } };
}
function s_(e) {
    let { hero: t, contentPosition: s } = e,
        a = n.useRef(null),
        { isHovering: i, hoverProps: c } = sv(
            n.useCallback(
                (e) => {
                    (0, tK.Qg)({
                        adContentId: t.id,
                        adCreativeType: t$.p.QUEST_HOME_HERO,
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
        (0, sl.vq)(e, HTMLVideoElement) && (i ? ((e.currentTime = 0), e.play().catch(ev.tE)) : e.pause());
    }, [i]);
    let { hoverSpring: o } = (0, to.z)({ hoverSpring: +!!i, config: ti.config.gentle });
    return (0, l.jsxs)("div", {
        className: r()(sj.FW, sj.Bm),
        ...c,
        children: [
            (0, l.jsx)("div", {
                className: sj.Ve,
                children: (0, l.jsx)(tZ.N, {
                    showVideo: !0,
                    assetRef: a,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: r()(sj.pv, sj.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: r()(sj.pv, sj.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, l.jsx)(ti.animated.div, {
                className: sj.hn,
                style: { transform: o.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, l.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, su.A)(t.cta.url),
                            (0, tK.vK)({
                                adContentId: t.id,
                                adCreativeType: t$.p.QUEST_HOME_HERO,
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
function sp(e) {
    let { quest: t, onQuestCtaClick: s, contentPosition: a } = e,
        i = (0, tA.Ay)(),
        c = n.useMemo(() => (0, tL.tW)(t, tL.fY.LOGO_TYPE, (0, tS.M)(i) ? ef.NJ8.DARK : ef.NJ8.LIGHT).url, [t, i]),
        o = n.useMemo(() => new Date(t.config.expiresAt), [t.config.expiresAt]),
        { days: u, hours: d, minutes: m, seconds: h } = (0, so.A)(o, tu.A.Millis.MINUTE),
        E = n.useMemo(
            () =>
                (0, sd.uN)(
                    { days: u, hours: d, minutes: m, seconds: h },
                    { days: ec.t["Ux/De1"], hours: ec.t.Lzd5Ie, minutes: ec.t.odmpbP },
                ),
            [u, d, m, h],
        ),
        f = n.useMemo(() => (0, sh.mq)(t.config), [t.config]),
        j = n.useMemo(
            () =>
                (function (e) {
                    switch ((0, e5.xv)(e).type) {
                        case tC.l.IN_GAME:
                            return ec.intl.string(ec.t["O/J2kr"]);
                        case tC.l.COLLECTIBLE:
                            return ec.intl.string(ec.t.Jg17Ut);
                        case tC.l.VIRTUAL_CURRENCY:
                            return ec.intl.string(ec.t.ElYQFS);
                        default:
                            return (0, sh.mq)(e);
                    }
                })(t.config),
            [t.config],
        ),
        { completedRatio: v, completedRatioDisplay: _ } = (0, Y.O9)(t),
        p = n.useMemo(() => (0, sh._Z)(t.config), [t.config]),
        N = (0, sm.Ut)(),
        b = (0, sm.u0)(),
        { isHovering: C, hoverProps: S } = sv(
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
        { hoverSpring: T } = (0, to.z)({ hoverSpring: +!!C, config: ti.config.gentle });
    return (0, l.jsxs)("div", {
        className: r()(sj.FW, sj.$R),
        ...S,
        children: [
            (0, l.jsxs)(tY.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, l.jsx)(sn.E, { type: { text: j }, variant: "expressive" }),
                    (0, l.jsx)(ti.animated.div, {
                        style: { opacity: (0, sg.a)(T.to([0, 1], [1, 0])) },
                        children: (0, l.jsx)(sn.E, { type: { text: E }, icon: sa.O }),
                    }),
                ],
            }),
            (0, l.jsx)(ti.animated.div, {
                className: sj.Tr,
                style: { transform: T.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, l.jsx)(sE.A, {
                    percentComplete: v,
                    overlayText: C && null != p ? `${p}` : void 0,
                    size: 100,
                    children: (0, l.jsx)(sf.A, {
                        quest: t,
                        questContent: G.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: C,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, l.jsx)(ti.animated.div, {
                className: sj.tw,
                style: {
                    opacity: (0, sg.a)(T.to([0, 1], [1, 0])),
                    transform: T.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, l.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)("div", {
                            className: sj.aP,
                            children: (0, l.jsx)("img", { src: c, alt: t.config.messages.gameTitle, className: sj.rC }),
                        }),
                        (0, l.jsxs)(tY.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(g.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    className: sj.Ht,
                                    children: f,
                                }),
                                (0, l.jsxs)(tY.B, {
                                    align: "start",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, l.jsxs)(tY.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, l.jsx)(sr.y, { size: "xs", color: eu.A.colors.ICON_MUTED.css }),
                                                (0, l.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.config.messages.gamePublisher,
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)(tY.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, sx.pv)(t.config) === ss.Z.VIDEO
                                                    ? (0, l.jsx)(si.S, {
                                                          size: "xs",
                                                          color: eu.A.colors.ICON_MUTED.css,
                                                      })
                                                    : (0, l.jsx)(sc._, {
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
            (0, l.jsx)(ti.animated.div, {
                className: sj.um,
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
var sN = s(648731);
function sb(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e;
    return (0, l.jsx)(st, {
        className: sN.v,
        scrollIncrement: 320,
        children: (0, l.jsxs)(tY.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, l.jsx)(tX.R, {
                    adContentId: t.id,
                    adCreativeType: t$.p.QUEST_HOME_HERO,
                    questContent: G.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, l.jsx)(s_, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, t) =>
                    (0, l.jsx)(
                        tX.R,
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
                                    children: (0, l.jsx)(sp, { quest: e, onQuestCtaClick: n, contentPosition: t + 1 }),
                                }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
}
var sC = s(95115);
function sS() {
    return (0, l.jsx)("div", { className: sC.Np });
}
function sT(e) {
    let { heroImage: t, heroVideo: s } = e,
        a = n.useRef(null);
    (0, t0.A)(a, tg.rE.QUEST_HOME_DESKTOP);
    let i = n.useMemo(() => (null != s ? (0, tL.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, l.jsxs)("div", {
              className: sC.Tv,
              children: [
                  (0, l.jsx)(sS, {}),
                  (0, l.jsx)("div", {
                      className: sC.LO,
                      children: (0, l.jsx)("img", { className: sC.LY, src: t, alt: "" }),
                  }),
                  (0, l.jsx)("div", {
                      className: r()(sC.LO, sC.jx, sC.hw),
                      children: (0, l.jsx)("img", { className: sC.LY, src: t, alt: "" }),
                  }),
                  (0, l.jsx)("div", {
                      className: r()(sC.LO, sC.jx, sC.Co),
                      children: (0, l.jsx)("img", { className: sC.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: sC.Tv,
              children: [
                  (0, l.jsx)(sS, {}),
                  (0, l.jsx)("div", {
                      className: sC.LO,
                      children: (0, l.jsx)(tZ.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: a,
                          imageAsset: {
                              alt: "",
                              className: sC.LY,
                              asset: { url: i, mimetype: (0, tL.vm)(i), isAnimated: !1 },
                              assetId: i,
                          },
                          videoAsset: {
                              alt: "",
                              className: sC.LY,
                              asset: { url: s, mimetype: (0, tL.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function sO(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        a = (0, u.bG)([X.A], () => X.A.quests),
        { shelfQuests: r, isShelfEnabled: i } = (0, Y.t9)(t),
        { dismissQuestHomeHeroContent: c } = (0, t5.I)();
    n.useEffect(() => {
        c();
    }, [c]);
    let o = n.useMemo(() => t.questIds?.find((e) => a.has(e)), [a, t.questIds]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tX.R, {
                adContentId: t.id,
                adCreativeType: t$.p.QUEST_HOME_HERO,
                questContent: G.uF.QUEST_HOME_HERO,
                sourceQuestContent: G.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, l.jsx)(t7, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, l.jsxs)(tY.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, l.jsx)("img", { src: t.sponsorImage, alt: "", className: sC.wm }),
                                (0, l.jsx)(g.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: sC.yu,
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
                                        (0, tJ._Q)(
                                            { adContentId: t.id, adCreativeType: t$.p.QUEST_HOME_HERO, cta: t.cta },
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
                                                (0, tK.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: t$.p.QUEST_HOME_HERO,
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
                            null != t.heroImage && (0, l.jsx)(sT, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, l.jsx)(sb, { hero: t, shelfQuests: r, onQuestCtaClick: s }),
        ],
    });
}
function sA() {
    return (0, l.jsx)("div", { className: r()(t3.iE, t3.FG, t3.B3), children: (0, l.jsx)(ea.y, {}) });
}
var sR = s(321503),
    sL = s(758836),
    sy = s(613057),
    sH = s(935824);
let sI = n.createContext({});
function sQ(e) {
    let { banner: t, children: s, header: a, withFullBleedBanner: r = !1 } = e,
        { onScroll: i, scrollerRef: c } = n.useContext(sI);
    return (0, l.jsxs)(sR.X.Provider, {
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
function sM(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: a } = e;
    return (0, l.jsx)(M.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: a, icon: m.r });
}
function sU(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: a } = (0, w.Z)({ location: tg.rE.QUEST_HOME_DESKTOP }),
        r = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        i = (0, u.bG)([D.A], () => D.A.isFocused()),
        { ref: c, inViewport: o } = (0, e8.p)(),
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
function sF(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, w.Z)({ location: tg.rE.QUEST_HOME_DESKTOP });
    return (0, l.jsxs)("div", {
        className: r()(sH.Tv, { [sH.lJ]: s }),
        children: [
            (0, l.jsx)(sS, {}),
            (0, l.jsx)("div", { className: r()(sH.nz, { [sH.ZZ]: s }) }),
            (0, l.jsx)(sU, { onLoadComplete: t, className: r()(sH.Fe, { [sH.H4]: s, [sH.Q8]: !s }) }),
        ],
    });
}
function sk(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, w.Z)({ location: tg.rE.QUEST_HOME_DESKTOP }),
        a = n.useCallback(() => {
            s ? window.open(ef.X7G.PAID_TERMS_ORBS) : window.open(V.A.getArticleURL(ef.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, l.jsx)(t7, {
        adContentId: s ? tg.yr : tg.uz,
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
                                  tab: sL.G2.ORBS,
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
        background: (0, l.jsx)(sF, { onAssetLoad: t }),
    });
}
function sw(e) {
    let { onAssetLoad: t, onQuestCtaClick: s } = e,
        { questHomeHero: n, isLoading: a } = (0, Y.lg)();
    return a
        ? (0, l.jsx)(sA, {})
        : null != n
          ? (0, l.jsx)(sO, { hero: n, onQuestCtaClick: s })
          : (0, l.jsx)(sk, { onAssetLoad: t });
}
function sP(e) {
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
let sD = function (e) {
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
                        ].filter(e3.Vq),
                    [t, a],
                ),
                selectedTab: s,
                onSelectTab: r,
            };
        })({ withClaimedQuestsTab: !m });
    n.useLayoutEffect(() => {
        m && E === Y.NC.CLAIMED && z.A.setState({ tab: Y.NC.ALL });
    }, [m, E]);
    let { onScroll: R } = (0, H.G)(),
        L = $.A.getState().getUtmCurrentContext(),
        Q = tG((e) => e.registerAssetLoad),
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
    let { enabled: U } = (0, w.Z)({ location: tg.rE.QUEST_HOME_DESKTOP });
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
                (0, S.Cz)({ tab: sL.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.ORBS_BALANCE_MENU });
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
                    type: sy.XK.QUEST_PREVIEW_TOOL,
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
                    type: sy.XK.QUEST_HOME,
                    params: { questId: (0, W.uJ)(t) ? void 0 : t, sort: n, filter: a, tab: l },
                });
            }
        }, [s.search, h, a.action, s.hash, t]),
        n.useEffect(() => {
            t && (0, A.Dr)(d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let Z = n.useCallback(() => {
            (0, e1.navigateToQuestHome)({ fromContent: G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
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
    return (0, l.jsx)(tz.M.Provider, {
        value: { onAssetLoadComplete: Q },
        children: (0, l.jsx)(sI.Provider, {
            value: n.useMemo(() => ({ onScroll: R, scrollerRef: D }), [R, D]),
            children: (0, l.jsx)("div", {
                className: r()(sH.kL, { [sH.KY]: !t }),
                children: m
                    ? (0, l.jsx)(sQ, {
                          withFullBleedBanner: !0,
                          header: (0, l.jsx)(sM, { selectedTab: E, onSelectTab: X, tabs: O }),
                          banner: (0, l.jsx)(I.A, {
                              title: ec.intl.string(ec.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, l.jsx)(x.$, {
                                  variant: "overlay-primary",
                                  text: ec.intl.string(ec.t.GURBQl),
                                  onClick: Z,
                              }),
                              className: sH.Gj,
                              children: (0, l.jsx)(sP, { onLoadComplete: Q }),
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
                    : (0, l.jsx)(sQ, {
                          header: (0, l.jsx)(sM, {
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
                          banner: E === Y.NC.ALL && (0, l.jsx)(sw, { onAssetLoad: Q, onQuestCtaClick: V }),
                          children:
                              E === Y.NC.CLAIMED
                                  ? (0, l.jsx)(tq, { onSelectTab: X })
                                  : E === Y.NC.PREVIEW_TOOL
                                    ? (0, l.jsx)(e0, {})
                                    : (0, l.jsx)(tN, { ref: B }),
                      }),
            }),
        }),
    });
};
