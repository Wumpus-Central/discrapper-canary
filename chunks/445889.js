let n;
s.r(t), s.d(t, { default: () => lf }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    i = s(64700),
    a = s(503698),
    o = s.n(a),
    u = s(873263),
    c = s(835245),
    d = s(562708),
    m = s(607399),
    E = s(17928),
    h = s(554146),
    x = s(577473),
    f = s(825484),
    g = s(821609),
    j = s(509434),
    C = s(534514),
    S = s(834730),
    v = s(123292),
    _ = s(331322),
    N = s(892547),
    p = s(944791),
    T = s(775602),
    A = s(274670),
    O = s(144779),
    b = s(793574),
    I = s(139286),
    R = s(197111),
    M = s(10088),
    L = s(564064),
    Q = s(726249),
    y = s(607470),
    U = s(826673),
    H = s(840251),
    D = s(688151);
let F = new H.E([], D.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var q = s(711111),
    w = s(701508),
    P = s(979590),
    k = s(749638),
    V = s(783531),
    B = s(334465),
    W = s(318346),
    G = s(371446),
    K = s(70926),
    z = s(531685),
    $ = s(174459),
    Y = s(676279),
    J = s(975571),
    X = s(240248),
    Z = s(507107),
    ee = s(631001),
    et = s(87549),
    es = s(192444),
    en = s(104886);
let el = (0, s(945810).mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var er = s(347135),
    ei = s(590202),
    ea = s(371912);
s(321073);
var eo = s(228366),
    eu = s(340124),
    ec = s(859703);
s(667532);
var ed = s(783878),
    em = s(408278),
    eE = s(663417),
    eh = s(922016),
    ex = s(624479),
    ef = s(289873),
    eg = s(416052),
    ej = s(417098),
    eC = s(375708);
function eS(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(ej.$T, {
        color: ej.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : eC.intl.string(eC.t.ZErSg5) }),
    });
}
var ev = s(661531),
    e_ = s(602853),
    eN = s(939249),
    ep = s(817281),
    eT = s(688810),
    eA = s(487245),
    eO = s(363195),
    eb = s(652215),
    eI = s(398876);
let eR = function () {
    let { analyticsLocations: e } = (0, eT.Ay)(),
        t = (0, E.bG)([eO.A], () => eO.A.theme),
        s = i.useRef(null);
    i.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, e_.r)(ev.A.colors.BACKGROUND_BASE_LOW, eb.NJ8.LIGHT),
        l = (0, e_.r)(ev.A.colors.BACKGROUND_BASE_LOW, eb.NJ8.DARKER),
        a = (0, e_.r)(ev.A.colors.BACKGROUND_BASE_LOW, eb.NJ8.MIDNIGHT),
        o = i.useMemo(
            () => [
                { theme: eb.NJ8.LIGHT, label: eC.t.K2sFfo, color: n.hex() },
                { theme: eb.NJ8.DARKER, label: eC.t.b8Cei3, color: l.hex() },
                { theme: eb.NJ8.MIDNIGHT, label: eC.t.Do4ZJx, color: a.hex() },
            ],
            [n, l, a],
        ),
        u = i.useCallback(
            (t) => {
                (0, eA.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, ep.u_)({ theme: t });
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: eI.N,
        children: (0, r.jsxs)("div", {
            className: eI.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        eN.D,
                        {
                            tag: "div",
                            className: eI.Du,
                            onClick: () => u(e.theme),
                            "aria-label": eC.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${eI.WT} ${t === e.theme ? eI.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: eI.i, children: eC.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(em.K, {
                    onClick: c,
                    "aria-label": eC.intl.string(eC.t.yBZMsQ),
                    icon: eE.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eM = s(818348),
    eL = s(60857);
let eQ = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, er.pT)(),
        h = (0, E.bG)([ec.A], () => (null != t ? ec.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, E.bG)([ec.A], () => null != t && ec.A.isFetchingQuestPreview(t), [t]),
        j = i.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [m, t]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, eu.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, eu.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        v = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, eu.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = i.useCallback(
            (e) => {
                (0, X.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: eL.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: eL.Br,
                    children: (0, r.jsxs)("div", {
                        className: eL.bo,
                        children: [
                            (0, r.jsx)(eR, {}),
                            (0, r.jsxs)("div", {
                                className: eL.b8,
                                children: [
                                    (0, r.jsx)(
                                        ed.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: _,
                                            placeholder: eC.intl.string(eC.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, X.uJ)(t?.trim())) return e;
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
                                    (0, r.jsx)(em.K, {
                                        onClick: l,
                                        "aria-label": eC.intl.string(eC.t.wzzjk9),
                                        icon: eE.f,
                                        loading: x,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != n &&
                (0, r.jsx)("div", {
                    className: eL.in,
                    children: (0, r.jsxs)(f.e, {
                        className: eL.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eC.intl.string(eC.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eC.intl.string(eC.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: v,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eC.intl.string(eC.t.cKSLr4),
                            }),
                            (0, r.jsx)(eh.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: eL.PP,
                                        children: (0, r.jsx)("div", {
                                            className: eL.sH,
                                            children: (0, r.jsx)(eg.A, {
                                                value: eM.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eC.intl.string(eC.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(em.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": eC.intl.string(eC.t.rNGQfD),
                                        icon: ex.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(eS, { error: h }) : null,
            x ? (0, r.jsx)(ef.y, {}) : null,
        ],
    });
};
var ey = s(364522),
    eU = s(761508),
    eH = s(797788);
function eD() {
    return (0, r.jsx)("div", { className: eH.y });
}
var eF = s(834615),
    eq = s(332544);
let ew = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eq.B0,
            children: [
                (0, r.jsx)(C.D, {
                    className: eq.R_,
                    variant: "heading-md/semibold",
                    children: eC.intl.string(eC.t.L2mlUb),
                }),
                (0, r.jsx)(eF.A, { quest: t }),
            ],
        }),
    });
};
var eP = s(241124),
    ek = s(242939),
    eV = s(717695),
    eB = s(763578),
    eW = s(111113);
let eG = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eB.wp,
            children: [
                (0, r.jsx)(C.D, {
                    className: eB.Oo,
                    variant: "heading-md/semibold",
                    children: eC.intl.string(eC.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eB.RE,
                    children: (0, r.jsx)("div", {
                        className: eB.Z,
                        children: (0, r.jsx)("div", {
                            className: eW.C3,
                            children: (0, r.jsx)(eV.A, {
                                children: (0, r.jsx)(eP.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, r.jsx)(ek.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eK = s(961974);
function ez(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eq.B0,
            children: [
                (0, r.jsx)(C.D, {
                    className: eq.R_,
                    variant: "heading-md/semibold",
                    children: eC.intl.string(eC.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: eq.YT,
                    children: (0, r.jsx)(eK.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var e$ = s(711038),
    eY = s(330034);
let eJ = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eq.B0,
            children: [
                (0, r.jsx)(C.D, { variant: "heading-md/semibold", children: eC.intl.string(eC.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: eY.wu,
                    children: (0, r.jsx)("span", { className: eY.cy, children: eC.intl.string(eC.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: eY.oU,
                    children: (0, r.jsx)("div", {
                        className: eY.zx,
                        children: (0, r.jsx)("div", {
                            className: eY.Lj,
                            children: (0, r.jsx)("div", {
                                className: eY.n0,
                                children: (0, r.jsx)(e$.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eX = s(19809),
    eZ = s(173936),
    e0 = s(365199),
    e1 = s(743674),
    e2 = s(551875),
    e7 = s(971649),
    e3 = s(814793),
    e4 = s(415441),
    e8 = s(73473),
    e5 = s(270045),
    e6 = s(79545),
    e9 = s(321503),
    te = s(720875),
    tt = s(687966),
    ts = s(782134),
    tn = s(271536),
    tl = s(768622),
    tr = s(793934),
    ti = s(662940),
    ta = s(496431),
    to = s(927813);
let tu = 2 * to.A.Millis.DAY;
var tc = s(719021);
function td(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, e6.Pd)(t),
        l = (0, er.fc)(t),
        a = (0, er.I3)(t),
        u = i.useMemo(() => (0, ti.Dd)(t.config, n), [t.config, n]),
        c = i.useMemo(() => (0, ti.CK)(n, l, a), [n, l, a]),
        d = (function (e) {
            let t = (0, e6.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case e6.UA.UNENROLLED:
                            case e6.UA.ENROLLED:
                            case e6.UA.INCOMPLETE:
                                return !0;
                            case e6.UA.COMPLETED:
                            case e6.UA.CLAIMED:
                            case e6.UA.EXPIRED:
                            case e6.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < tu &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, ta.A)(n, to.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        m = null != d ? d : u;
    return (0, r.jsxs)("div", {
        className: o()(tc.fC, { [tc.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: tc.qS,
                children: [
                    null != m &&
                        (0, r.jsx)(S.E, {
                            variant: "text-xs/semibold",
                            className: tc.SJ,
                            color: "always-white",
                            children: m,
                        }),
                    null != m &&
                        null != c &&
                        (0, r.jsx)(S.E, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            className: tc.If,
                            children: "\u2022",
                        }),
                    null != c &&
                        (0, r.jsxs)("span", {
                            className: tc.BA,
                            children: [
                                (function (e) {
                                    let t = { size: "xxs", className: tc.rF, color: "currentColor" };
                                    switch ((0, ti.pv)(e)) {
                                        case ti.UK.PLAY:
                                            return (0, r.jsx)(tt._, { ...t });
                                        case ti.UK.WATCH:
                                            return (0, r.jsx)(ts.u, { ...t });
                                        case ti.UK.ACTIVITY:
                                            return (0, r.jsx)(tn.q, { ...t });
                                        case ti.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(tl.g, { ...t });
                                        case ti.UK.ARENA:
                                            return (0, r.jsx)(tr.q, { ...t });
                                    }
                                })(t),
                                (0, r.jsx)(S.E, {
                                    variant: "text-xs/semibold",
                                    tag: "span",
                                    color: "always-white",
                                    children: c,
                                }),
                            ],
                        }),
                ],
            }),
            t.preview &&
                (0, r.jsx)("div", {
                    className: o()(tc.qS, tc.WZ),
                    children: (0, r.jsx)(S.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: eC.intl.string(eC.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var tm = s(409626),
    tE = s(3738),
    th = s(646917),
    tx = s(990078),
    tf = s(43990),
    tg = s(743368),
    tj = s(792620),
    tC = s(368715),
    tS = s(190107),
    tv = s(919500);
function t_(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, e6.Pd)(t),
        { ctaOnHover: u } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        c = a === e6.UA.EXPIRED || (a === e6.UA.CLAIMED && (0, tj.GL)(t)),
        d = (0, er.do)({ quest: t, content: s, ctaContent: ei.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tv.lO, { [tv.Fq]: l || !u }),
        children: (0, r.jsx)("div", {
            className: tv.mv,
            children: (0, r.jsx)(tf.N, {
                theme: eb.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: e,
                        children: (0, r.jsxs)(f.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                c || i
                                    ? (0, r.jsx)(g.$, {
                                          variant: "secondary",
                                          text: t.config.ctaConfig.buttonLabel,
                                          onClick: d,
                                      })
                                    : (0, r.jsx)(tx.m, {
                                          text: eC.intl.string(eC.t.LLLLPD),
                                          position: "top",
                                          align: "center",
                                          ariaHidden: !0,
                                          children: (0, r.jsx)(em.K, {
                                              variant: "secondary",
                                              icon: tg.W,
                                              "aria-label": eC.intl.string(eC.t.LLLLPD),
                                              onClick: d,
                                          }),
                                      }),
                                !c &&
                                    (0, r.jsx)(tC.A, {
                                        quest: t,
                                        surface: e6.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
var tN = s(403581),
    tp = s(576761),
    tT = s(617986),
    tA = s(646440);
function tO(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, er.ZP)(s),
        i = (0, tp.B9)(n);
    if (null == l) return null;
    let a = i
        ? eC.intl.formatToPlainString(eC.t.l2UfLG, { bonusOrbMultiplier: l })
        : eC.intl.formatToPlainString(eC.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(eN.D, {
        onClick: () => {
            (0, tT.gC)(l, n), t?.();
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: tA.k,
            children: [
                (0, r.jsx)(tN.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(S.E, { variant: "text-sm/normal", color: "currentColor", className: tA.Q, children: a }),
            ],
        }),
    });
}
var tb = s(947641),
    tI = s(194261),
    tR = s(106799),
    tM = s(287809),
    tL = s(710969),
    tQ = s(801365),
    ty = s(453384),
    tU = s(646764),
    tH = s(269999);
function tD(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, E.bG)([tM.default], () => tM.default.getCurrentUser()),
        a = (0, tQ.mq)(t.config, i),
        o = (0, tQ.ks)(t.config),
        u = (0, tQ.wo)(t.config, i),
        c = (0, tQ.l0)(t.config, i),
        d =
            null != u
                ? u > 700 * c
                    ? e2.i2.TIER_4
                    : u > 200 * c
                      ? e2.i2.TIER_3
                      : u > 100 * c
                        ? e2.i2.TIER_2
                        : e2.i2.TIER_1
                : void 0,
        { completedRatio: m } = (0, er.O9)(t),
        h = t.userStatus?.claimedAt != null,
        x = (0, tL.Ic)(t),
        f = t.userStatus?.enrolledAt == null,
        g = h ? "completed" : x ? "expired" : null,
        j = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tU.A, {
                    quest: t,
                    orbTier: d,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: tH.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === g &&
                    (0, r.jsx)("div", {
                        className: tH.EY,
                        children: (0, r.jsx)(tb.r, { className: tH.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === g &&
                    (0, r.jsx)("div", {
                        className: tH.EY,
                        children: (0, r.jsx)(tI.X, { size: "sm", className: tH.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: tH.CZ,
        children: [
            (0, r.jsx)("div", {
                className: tH.tE,
                children: f
                    ? (0, r.jsx)("div", { className: tH.fm, children: j })
                    : (0, r.jsx)(ty.A, {
                          size: 74,
                          percentComplete: m,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: tH.n5, children: j }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: tH.FS,
                children: [
                    (0, r.jsx)(S.E, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        className: tH.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: tH.oV,
                        children: [
                            o && (0, r.jsx)(tR.A, { className: tH.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                S.E,
                                {
                                    variant: "text-lg/medium",
                                    className: tH.zN,
                                    color: "always-white",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: o ? u : a,
                                },
                                `${t.id}_reward`,
                            ),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tF = s(315767);
function tq(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, tE.A9)(t, a, tS.rE.QUEST_HOME_DESKTOP, tm.Ob.QuestHome, u),
        d = (0, th.z)(),
        m = (0, er.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: tF.qr,
        children: [
            (0, r.jsx)(tD, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n }),
            (0, r.jsxs)("div", {
                className: tF.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: tF.Wi,
                        children: [
                            (0, r.jsx)(S.E, {
                                variant: "text-sm/normal",
                                className: o()(tF.Wj, tF.h_, { [tF.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(S.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(tF.Wj, tF.XV, { [tF.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tF.Gv,
                        children: [
                            (0, r.jsx)(S.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: eC.intl.string(eC.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(S.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(tO, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(t_, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var tw = s(688755),
    tP = s(831368),
    tk = s(547032);
function tV(e) {
    let {
            sectionIdentifier: t,
            quest: s,
            questContent: n,
            isInFeaturedSection: l,
            className: a,
            contentPosition: u,
            rowIndex: c,
            eagerLoadAssets: d,
            impressionRef: m,
            sourceQuestContent: E,
        } = e,
        h = i.useMemo(() => (0, e2.tW)(s, e2.fY.QUEST_BAR_HERO_IMAGE), [s]),
        x = i.useMemo(() => (0, e2.tW)(s, e2.fY.QUEST_BAR_HERO_VIDEO), [s]),
        f = i.useMemo(() => (null != h ? (0, e2.UX)(h.url, { format: "webp", width: 32, height: 32 }) : null), [h]),
        g = (0, e1.S)(f),
        j = i.useMemo(() => (null != g ? { "--quest-scrim-color": g } : void 0), [g]),
        {
            isActive: C,
            shouldRender: S,
            hoverHandlers: v,
            handleMenuOpen: _,
            handleMenuClose: N,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400,
                [t, s] = i.useState(!1),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(!1),
                o = i.useRef(!1),
                u = i.useRef(!1),
                c = i.useRef(null),
                d = i.useRef(null);
            function m() {
                null != c.current && (cancelAnimationFrame(c.current), (c.current = null));
            }
            function E() {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            }
            let h = i.useCallback(() => {
                    E(),
                        l(!0),
                        m(),
                        (c.current = requestAnimationFrame(() => {
                            c.current = requestAnimationFrame(() => {
                                (c.current = null), s(!0);
                            });
                        }));
                }, []),
                x = i.useCallback(() => {
                    m(),
                        s(!1),
                        E(),
                        (d.current = setTimeout(() => {
                            (d.current = null), l(!1);
                        }, e));
                }, [e]),
                f = i.useCallback(() => a(!0), []),
                g = i.useCallback(() => {
                    a(!1), o.current || u.current || x();
                }, [x]),
                j = i.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            (o.current = !0), h();
                        },
                        onMouseLeave: () => {
                            (o.current = !1), r || x();
                        },
                        onFocus: () => {
                            (u.current = !0), h();
                        },
                        onBlur: () => {
                            (u.current = !1), r || x();
                        },
                    }),
                    [h, x, r],
                );
            return (
                i.useEffect(
                    () => () => {
                        m(), E();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: j, handleMenuOpen: f, handleMenuClose: g }
            );
        })(),
        p = (0, e6.Pd)(s),
        T = (0, e7.go)(),
        A = (0, e3.E0)(s.config),
        O = i.useContext(e9.X),
        { visibilityElementRef: b, almostVisibleInViewport: I } = (0, tP.I)(
            O?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: R,
            handleHoverEnd: M,
            isEventWithinParent: L,
        } = (0, tw.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: E }),
        Q = (0, ea.Lk)({
            isShareable: A,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: ei.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: T,
                    sourceQuestContent: E,
                }),
                [n, E, T],
            ),
        });
    return (0, r.jsxs)("article", {
        id: (0, eX.sT)(s.id, t),
        ref: (e) => {
            (m.current = e), (b.current = e);
        },
        "aria-label": eC.intl.formatToPlainString(eC.t.EAYZAr, { questName: s.config.messages.questName }),
        className: o()(tk.kL, { [tk.iR]: l, [tk.DM]: C }, a),
        style: j,
        onMouseEnter: () => {
            v.onMouseEnter(), R();
        },
        onMouseLeave: () => {
            v.onMouseLeave(), M();
        },
        onFocus: (e) => {
            L(e) || (v.onFocus(), R());
        },
        onBlur: (e) => {
            L(e) || (v.onBlur(), M());
        },
        children: [
            (0, r.jsx)(te.A, {
                showPlaceholder: !I,
                width: 600,
                height: 450,
                className: tk.Tv,
                children: (0, r.jsx)(e4.N, {
                    imageAsset:
                        null != h
                            ? { asset: h, assetId: "QuestTileV2", alt: eC.intl.string(eC.t.jnijWz), className: tk.Tv }
                            : void 0,
                    videoAsset:
                        null != x
                            ? {
                                  asset: x,
                                  assetId: "QuestTileV2_heroAnimated",
                                  className: o()(tk.Tv, tk.gJ, { [tk.C7]: C }),
                              }
                            : void 0,
                    imageSize: { width: 600, height: 450 },
                    showVideo: S,
                }),
            }),
            (0, r.jsx)("div", { className: o()(tk.sL, { [tk.Mq]: p === e6.UA.EXPIRED }) }),
            (0, r.jsx)("div", { className: o()(tk.f5, tk.Cm) }),
            (0, r.jsx)("div", { className: o()(tk.f5, tk.sr) }),
            (0, r.jsxs)("div", {
                className: tk.wx,
                children: [
                    (0, r.jsx)(td, { quest: s, isHovering: C }),
                    (0, r.jsxs)("div", {
                        className: o()(tk.$s, { [tk.rk]: C }),
                        children: [
                            l &&
                                A &&
                                (0, r.jsx)(eN.D, {
                                    tag: "div",
                                    className: tk.E9,
                                    onClick: Q,
                                    "aria-label": eC.intl.string(eC.t.WqhZss),
                                    children: (0, r.jsx)(eZ.q, { size: "sm", color: "currentColor" }),
                                }),
                            (0, r.jsx)(e5.C, {
                                questContent: n,
                                quest: s,
                                hideLearnMore: !0,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                sourceQuestContent: E,
                                onOpen: _,
                                onClose: N,
                                children: (e) =>
                                    (0, r.jsx)(eN.D, {
                                        ...e,
                                        tag: "div",
                                        className: tk.E9,
                                        "aria-label": eC.intl.string(eC.t.DEoVWZ),
                                        children: (0, r.jsx)(e0.j, { size: "sm", color: "currentColor" }),
                                    }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tq, { quest: s, questContent: n, isInFeaturedSection: l, isHovering: C, sourceQuestContent: E }),
        ],
    });
}
let tB = i.memo(function (e) {
    let t = (0, E.bG)([ec.A], () => (null != e.questId ? ec.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(e8.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === Z.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(tV, { ...e, quest: s, impressionRef: t }),
          });
});
function tW(e) {
    let { quest: t } = e,
        { useNewTile: s } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eq.B0,
            children: [
                (0, r.jsx)(C.D, {
                    className: eq.R_,
                    variant: "heading-md/semibold",
                    children: eC.intl.string(eC.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(tB, {
                          className: eq.d,
                          quest: t,
                          questContent: Z.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: Z.uF.INTERNAL_PREVIEW_TOOL,
                      })
                    : (0, r.jsx)(eX.Ay, {
                          className: eq.d,
                          quest: t,
                          questContent: Z.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: Z.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var tG = s(97808),
    tK = s(778712),
    tz = s(87664),
    t$ = s(427262),
    tY = s(198525),
    tJ = s(66176);
let tX = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([tM.default], () => tM.default.getCurrentUser()),
        u = t$.Ay.useName(a),
        c = (0, tz.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(tY.A, {
                    name: u,
                    quest: t,
                    memberListItemRef: l,
                    applicationStream: c,
                    ...e,
                    closePopout: () => {
                        n(!1);
                    },
                }),
            [t, c, u],
        );
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eq.B0,
            children: [
                (0, r.jsx)(C.D, {
                    className: tJ.R_,
                    variant: "heading-md/semibold",
                    children: eC.intl.string(eC.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: tJ.$Q, children: eC.intl.string(eC.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: tJ.k0,
                    children: (0, r.jsx)(eh.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => n(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: eh.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(tJ.Tn, { [tJ.wH]: s }),
                                children: (0, r.jsx)(eN.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: tJ.lm,
                                        children: [
                                            (0, r.jsx)(tG.eu, {
                                                size: tK._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: eb.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: tJ.Fj,
                                                children: [
                                                    (0, r.jsx)(S.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(S.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: eC.intl.string(eC.t.b9w3bO),
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
};
function tZ(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, E.bG)([ec.A], () => ec.A.getQuest(t));
    if (null != (0, E.bG)([ec.A], () => ec.A.getFetchQuestPreviewError(t)) || null == n) return null;
    let l = (e) => null == s || 0 === s.length || s.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eG, { quest: n }), (0, r.jsx)(eD, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tW, { quest: n }), (0, r.jsx)(eD, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eJ, { questId: n.id }), (0, r.jsx)(eD, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ez, { quest: n }), (0, r.jsx)(eD, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tX, { quest: n }), (0, r.jsx)(eD, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ew, { quest: n }), (0, r.jsx)(eD, {})] }),
        ],
    });
}
var t0 = s(497275);
function t1(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: a } = e,
        u = [
            { value: "quest_bar", label: eC.intl.string(eC.t.rjVPdM) },
            { value: "share_embed", label: eC.intl.string(eC.t["D/gSWS"]) },
            { value: "home_card", label: eC.intl.string(eC.t["5wnpF3"]) },
            { value: "channel_call_header", label: eC.intl.string(eC.t.gWinpQ) },
            { value: "members_list", label: eC.intl.string(eC.t.wpYima) },
            { value: "activity_panel", label: eC.intl.string(eC.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(ey.Ip, {
        className: o()(t0.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: t0.qE,
            children: [
                (0, r.jsx)(C.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eC.intl.string(eC.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: t0.pf, children: l }),
                (0, r.jsxs)(eU.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(eU.V.Item, { id: "all", children: eC.intl.string(eC.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(eU.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: t0.tZ, children: (0, r.jsx)("div", { className: t0.Qs, children: t }) }),
            ],
        }),
    });
}
let t2 = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: s } = (0, u.zy)(),
                n = i.useMemo(() => new URLSearchParams(s).get(er.L1.QUEST_ID) ?? e, [s, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        s.set(er.L1.TAB, er.NC.PREVIEW_TOOL),
                            s.set(er.L1.QUEST_ID, e),
                            t.push(`${eb.BVt.QUEST_HOME}?${s.toString()}`);
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        a = (0, E.bG)([ec.A], () => (null != n ? ec.A.getQuest(n) : void 0), [n]),
        o = (0, E.bG)([ec.A], () => (null != n ? ec.A.getQuestLoadedViaPreview(n) : null), [n]);
    i.useEffect(() => {
        null != n &&
            (0, eu.dQ)(n).then(() => {
                (0, eu.Gt)(n);
            });
    }, [n]),
        i.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, eu.dQ)(n);
            };
            return (
                eo.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    eo.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = i.useState([]);
    return (0, r.jsx)(t1, {
        className: s,
        controls: (0, r.jsx)(eQ, {
            questId: n,
            setQuestId: l,
            quest: a,
            refreshQuest: () => {
                null != n && (0, eu.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(tZ, { questId: o?.id, selectedSections: c }) : null,
    });
};
var t7 = s(203879),
    t3 = s(403362),
    t4 = s(167417),
    t8 = s(783977),
    t5 = s(651892),
    t6 = s(305866),
    t9 = s(915089),
    se = s(332733);
function st(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(S.E, { className: se.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let ss = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, t9.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(eh.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(t6.l, { className: se.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var sn = s(612539);
let sl = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, er.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(ss, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, t5.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: sn.B }),
                                    (0, r.jsx)(st, { id: a, children: e.heading }),
                                    (0, r.jsx)(t4.$, {
                                        "aria-labelledby": a,
                                        options: n,
                                        selectedValues: o,
                                        onChange: l(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, r.jsx)("hr", { className: sn.B }),
                    (0, r.jsx)("div", {
                        className: sn.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eC.intl.string(eC.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eC.intl.formatToPlainString(eC.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: t8.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sr = s(773812),
    si = s(715482);
let sa = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([T.Ay], () => T.Ay.keyboardModeEnabled),
        o = (0, er.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(ss, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(st, { id: t, children: eC.intl.string(eC.t.tZXJIS) }),
                    (0, r.jsx)(sr.z, {
                        options: u,
                        onChange: (e) => {
                            l(e), a || s();
                        },
                        value: n,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                "aria-label": eC.intl.formatToPlainString(eC.t.lPlIMo, { selected: (0, t5.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, t5.Js)(n),
                icon: si.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var so = s(308186),
    su = s(717421);
function sc(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, so.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, so.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var sd = s(691540),
    sm = s(857250),
    sE = s(97483);
function sh() {
    let { enabled: e } = es.jm.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        t = i.useRef(null);
    return {
        showToast: i.useCallback(
            (s) => {
                t.current !== s &&
                    e &&
                    ((0, sd.P0)((0, sm.o)(eC.intl.string(eC.t["5ABf1w"]), sE.Ck.FAILURE)),
                    $.default.track(eb.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: s }),
                    (t.current = s));
            },
            [e],
        ),
    };
}
var sx = s(535185);
function sf(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function sg(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(sf(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sx.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var sj = s(121480);
let sC = 4 * to.A.Millis.SECOND;
function sS(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = sg(l, s, n);
    return (0, r.jsx)("div", {
        className: sj.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let sv = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = sh(),
        h = i.useRef(""),
        [x, f] = i.useState(null),
        [g, j] = i.useState(0),
        { useNewTile: v } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: _ }, N] = (0, su.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sC },
        })),
        p = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, tL.vc)(e, s, n);
                return null == t ? (E(e), !1) : (f(t.id), j((e) => e + 1), !0);
            },
            [s, n, l, E, a],
        );
    return (i.useImperativeHandle(t, () => ({ scrollToQuest: p }), [p]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        l || !a || (m.hash !== h.current && p(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, l, a, p]),
    i.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            N({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || f(null);
                },
            }));
    }, [x, g, N]),
    l && 0 === s.length)
        ? (0, r.jsx)(ef.y, { className: sj.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sj.y7,
                children: [
                    (0, r.jsx)(C.D, {
                        variant: "heading-xl/semibold",
                        children: eC.intl.string(c ? eC.t.PBfFnx : eC.t.NqFP6z),
                    }),
                    (0, r.jsx)(S.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? eC.intl.format(eC.t.LdYS1H, { onClick: d }) : eC.intl.string(eC.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(sS, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            so.animated.div,
                            {
                                className: o()({ [sj.XB]: l }),
                                style: sc(l, i, _),
                                children: [
                                    l && (0, r.jsx)("div", { className: sj.E4 }, g),
                                    v
                                        ? (0, r.jsx)(tB, {
                                              quest: t,
                                              questContent: Z.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sj.d,
                                              sourceQuestContent: Z.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eX.Ay, {
                                              quest: t,
                                              questContent: Z.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sj.d,
                                              sourceQuestContent: Z.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var s_ = s(458518),
    sN = s(65990);
let sp = [],
    sT = er.L1.SORT,
    sA = er.L1.FILTER,
    sO = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, s_.o)()),
                (n = (0, u.W6)()),
                (l = i.useRef(null)),
                (a = i.useCallback(
                    (e) => {
                        let t = new URLSearchParams(l.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        (l.current = t),
                            n.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                l.current = null;
                            });
                    },
                    [s, n],
                )),
                [s, a]),
            m = i.useMemo(() => {
                var e;
                return (
                    (e = c.get(sT)),
                    ((0, X.uJ)(e) ? null : (Object.values(tS.kL).find((t) => t === e) ?? null)) ?? tS.kL.SUGGESTED
                );
            }, [c]),
            E = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, X.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tS.WQ)(e))
                            .filter(t3.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(sA)) ?? sp,
                [c],
            ),
            h = i.useCallback(
                (e) => {
                    d({ [sT]: e });
                },
                [d],
            ),
            x = i.useCallback(
                (e) => {
                    d({
                        [sA]:
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
            { enabled: f } = es.jm.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
            {
                quests: g,
                excludedQuests: j,
                isFetchingCurrentQuests: S,
                hasFetched: v,
            } = (0, er.Qh)(
                er.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: E, removeExpiredQuests: f }), [m, E, f]),
            ),
            _ = i.useCallback(() => {
                x(sp);
            }, [x]),
            N = i.useRef(null),
            p = i.useRef(null),
            T = (0, u.zy)(),
            A = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== T.hash &&
                    null != N.current &&
                    null != p.current &&
                    (m !== N.current || E !== p.current) &&
                    A.replace({ ...T, hash: void 0 });
            }, [m, E, T, A]),
            i.useEffect(() => {
                N.current = m;
            }, [m]),
            i.useEffect(() => {
                p.current = E;
            }, [E]),
            (0, er.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: g.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        _(),
                            h(tS.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [_, h],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: sN.Mj,
                        children: [
                            (0, r.jsx)(C.D, { variant: "heading-lg/medium", children: eC.intl.string(eC.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sN.Nf,
                                children: [
                                    (0, r.jsx)(sa, { onChange: h, optionClassName: sN.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(sl, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sv, {
                        ref: o,
                        quests: g,
                        excludedQuests: j,
                        isFetching: S,
                        hasFetched: v,
                        hasFiltersApplied: E.length > 0,
                        onClearFilters: _,
                    }),
                ],
            })
        );
    });
var sb = s(575593),
    sI = s(440703),
    sR = s(462887),
    sM = s(187322),
    sL = s(765671),
    sQ = s(736653),
    sy = s(162232),
    sU = s(734736),
    sH = s(303136),
    sD = s(265234),
    sF = s(181713);
let sq = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sF.A : sF.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sD.k, t),
        children: s
            ? (0, r.jsx)(sH.A, {
                  preload: "auto",
                  className: sD.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sD.L, src: l, alt: n }),
    });
};
var sw = s(57718),
    sP = s(659249);
let sk = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        x = (0, E.bG)([tM.default], () => tM.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, sL.Ay)(),
        j = (0, sQ.Ay)(),
        v = (0, er.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        _ = t.userStatus?.claimedTier ?? 0,
        N = t.config.rewards[_],
        p = N?.type === sI.l.FRACTIONAL_PREMIUM,
        T = N?.type === sI.l.COLLECTIBLE,
        A = N?.type === sI.l.VIRTUAL_CURRENCY,
        O = N?.collectibleProduct?.items?.[0],
        b = O?.type === sb.R.AVATAR_DECORATION ? O : null,
        I = i.useMemo(
            () =>
                null == N
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? eC.intl.format(eC.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : N.name,
            [N, A, t],
        );
    (0, sL.i4)(d, (e) => {
        let { height: t } = e;
        if (!T || null == t || null == m.current || null == d.current || null == h.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let R = (0, sR.M)(j),
        M = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        L = i.useMemo(() => (0, e2.tW)(t, e2.fY.REWARD), [t]),
        Q = s ? g + 8 : 0,
        { content_position: U, row_index: H, ...D } = (0, ei.fF)(Z.uF.TROPHY_CASE_CARD);
    function F() {
        n(!0), $.default.track(eb.HAw.QUEST_HOVER, { quest_id: t.id, ...D });
    }
    function q() {
        n(!1);
    }
    function w(e) {
        c(!0), $.default.track(eb.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == N || u
        ? null
        : (0, r.jsx)(sM.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: F,
                  onBlur: q,
                  onMouseEnter: F,
                  onMouseLeave: q,
                  className: o()(sP.kL, { [sP.yo]: s }),
                  children: [
                      null != x &&
                          T &&
                          null != b &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: sP.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sy.A, {
                                  avatarDecorationOverride: b,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      p
                          ? (0, r.jsx)(sU.A, { className: sP.Sl })
                          : A
                            ? (0, r.jsx)(sq, {
                                  className: sP.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : L.isAnimated
                              ? (0, r.jsx)(y.A, {
                                    className: sP.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: L.url,
                                        type: L.mimetype ?? void 0,
                                        onError: () => w(L.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sP.Sl,
                                    src: L.url,
                                    alt: t.config.messages.questName,
                                    onError: () => w(L.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sP.Lw, { [sP.en]: R, [sP.So]: !R }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sP.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sw.Ay, {
                              logotypeClassName: o()(sP.wm, { [sP.A0]: M }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: sP.zH,
                          children: [
                              (0, r.jsx)(C.D, {
                                  className: sP.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eC.intl.format(eC.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(S.E, {
                                  variant: "text-sm/medium",
                                  color: R ? "text-muted" : "always-white",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: eC.intl.format(eC.t["kXVcV+"], { reward: I, claimedDate: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sV = s(396478);
function sB(e) {
    let { onClick: t } = e,
        n = (0, sQ.Ay)();
    return (0, r.jsxs)(sV.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sV.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sV.SG, { note: eC.intl.format(eC.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sW = s(975424);
function sG(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, er.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(ef.y, { className: sW.u })
        : 0 === n.length
          ? (0, r.jsx)(sB, { onClick: () => t(er.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sW.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sk, { quest: e }, e.id)),
            });
}
var sK = s(548411),
    sz = s(554830),
    s$ = s(689175),
    sY =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        l);
let sJ = [
    { type: "featured-quests", identifier: "featured", title: eC.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: eC.t.PRg3qh },
    { type: "quests", identifier: "orb", title: eC.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: eC.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: eC.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: eC.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: eC.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function sX(e) {
    return ev.A.space.SPACE_XL.resolve({ density: e });
}
let sZ = (e, t) => (1220 - 2 * sX(e) * (t ? 2 : 0.75)) / 3;
var s0 = s(522403);
let s1 = "data-scroll-target",
    s2 = `[${s1}]`,
    s7 = { anchors: [], pageSize: 1 },
    s3 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function s4(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let s8 = i.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = s2,
                maskWidth: l = 24,
                overflowAmount: a = 0,
                maskMarginMultiplier: u = 1,
                onScrollEnd: c,
            } = e,
            d = i.useRef(null),
            m = i.useRef(null),
            h = i.useRef(0),
            x = i.useRef(null),
            [f, g] = i.useState(!1),
            [j, C] = i.useState(!1),
            [S, v] = i.useState(!0),
            [_, N] = i.useState([]),
            [p, A] = i.useState(1),
            O = (0, E.bG)([T.Ay], () => T.Ay.useReducedMotion) ? "auto" : "smooth",
            b = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (g(e.scrollLeft > 0), C(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
            }, []),
            I = i.useCallback(() => {
                let { anchors: e, pageSize: t } = (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return s7;
                    let i = Array.from(r.querySelectorAll(s));
                    if (0 === i.length) return s7;
                    let a = i[0].offsetWidth,
                        o = i.length > 1 ? i[1].offsetLeft - i[0].offsetLeft - a : 0,
                        u = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (a + o))),
                        c = i.length - u + 1;
                    return c <= 1
                        ? s7
                        : {
                              anchors: [
                                  0,
                                  ...i.slice(1, c - 1).map((e, t) => {
                                      let s = i[t + u];
                                      return (e.offsetLeft + s.offsetLeft + s.offsetWidth) / 2;
                                  }),
                                  r.scrollWidth,
                              ],
                              pageSize: u,
                          };
                })({ scrollerRef: d, itemSelector: n, maskWidth: l, maskMarginMultiplier: u });
                A(t), N((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e));
            }, [l, n, u, N]),
            R = i.useCallback(() => {
                if (null == x.current || x.current?.clientWidth === 0) return v(!0);
                v(x.current?.clientWidth >= 1260);
            }, [x]),
            M = i.useCallback(
                (e) => {
                    let t = d.current?.getScrollerNode();
                    if (null == t || _.length < 2) return;
                    let { currentIndex: s, scrollLefts: n } = s4(t, _),
                        l = Math.max(0, Math.min(_.length - 1, s + e * p));
                    (m.current = ei.pk.ARROW), t.scrollTo({ left: n[l], behavior: O });
                },
                [O, _, p],
            ),
            L = i.useCallback((e, t) => {
                let s = d.current?.getScrollerNode();
                if (null == s || null == e || !s.contains(e)) return;
                let n = s.getBoundingClientRect(),
                    l = e.getBoundingClientRect(),
                    r = n.left - l.left,
                    i = l.right - n.right;
                (0 !== r || 0 !== i) &&
                    ((m.current = ei.pk.MANUAL),
                    r > 0
                        ? s.scrollTo({ left: s.scrollLeft - r, behavior: t })
                        : i > 0 && s.scrollTo({ left: s.scrollLeft + i, behavior: t }));
            }, []),
            Q = i.useCallback(
                (e) => {
                    let t = e.target.closest(n);
                    null != t && L(t, O);
                },
                [n, L, O],
            ),
            y = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                if (null == e) return;
                let { currentIndex: t } = s4(e, _),
                    s = m.current ?? ei.pk.MANUAL;
                m.current = null;
                let n = h.current;
                h.current = e.scrollLeft;
                let l = e.scrollLeft > n ? ei.VU.RIGHT : ei.VU.LEFT;
                c?.({
                    scrollingType: s,
                    scrollWindowStartIndex: t,
                    scrollWindowEndIndex: t + p - 1,
                    scrollWindowSize: p,
                    scrollingDirection: l,
                });
            }, [c, _, p]),
            U = i.useCallback(
                (e) => {
                    let t = "ArrowLeft" === e.key ? -1 : +("ArrowRight" === e.key);
                    if (0 === t) return;
                    e.preventDefault();
                    let s = d.current?.getScrollerNode();
                    if (null == s) return;
                    let l = Array.from(s.querySelectorAll(n)),
                        r = e.target.closest(n),
                        i = null == r ? -1 : l.indexOf(r),
                        a = l[i + t],
                        o = null == a ? null : a.matches(s3) ? a : a.querySelector(s3);
                    null != o && (o.focus({ preventScroll: !0 }), e.repeat && L(a, "instant"));
                },
                [n, L],
            ),
            H = i.useCallback(() => {
                b(), I(), R();
            }, [b, I, R]);
        (0, sx.g)(x, H, [], { fireOnMount: !0 });
        let D = a > 0,
            F = i.useMemo(
                () => ({
                    "--custom-scroller-mask-width": `${l}px`,
                    "--custom-scroller-overflow-amount": `${a}px`,
                    "--custom-scroller-scroll-behavior": O,
                }),
                [l, a, O],
            );
        return (0, r.jsxs)("div", {
            className: o()(s, s0.m7),
            ref: x,
            style: F,
            children: [
                (0, r.jsx)("div", {
                    className: o()(s0.k9, s0.RW, { [s0.Q2]: f }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(em.K, {
                        icon: sK.Z,
                        variant: "overlay-secondary",
                        onClick: () => M(-1),
                        disabled: !f,
                        "aria-label": eC.intl.string(eC.t.vgfxaA),
                        tabIndex: -1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(s0.k9, s0.K3, { [s0.Q2]: j }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(em.K, {
                        icon: sz.K,
                        variant: "overlay-secondary",
                        onClick: () => M(1),
                        disabled: !j,
                        tabIndex: -1,
                        "aria-label": eC.intl.string(eC.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [s0.sF]: f && S, [s0.RC]: j && S, [s0.Ni]: D && !f, [s0.GA]: D && !j }),
                    children: (0, r.jsx)(s$.zC, {
                        ref: d,
                        orientation: "horizontal",
                        onScroll: b,
                        onScrollEnd: y,
                        onFocusCapture: Q,
                        onKeyDown: U,
                        className: o()({ [s0.x2]: D }, s0.XG),
                        children: (0, r.jsxs)(e9.X.Provider, {
                            value: d,
                            children: [
                                t,
                                _.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: s0.fw, style: { insetInlineStart: `${e}px` } },
                                        t,
                                    ),
                                ),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    s5 = i.createContext({
        targetQuestId: null,
        targetSectionIdentifier: null,
        highlightCount: null,
        highlightAnimationProgress: null,
    });
var s6 = s(76060);
function s9(e) {
    let { children: t, sectionIdentifier: s, questId: n, featuredSection: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: o,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(s5),
        d = a === n && o === s,
        m = null != a && (a !== n || o !== s),
        { useNewTile: E } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        h = l ? "var(--radius-lg)" : "var(--radius-sm)",
        x = i.useMemo(() => ({ ...sc(d, m, c), borderRadius: E ? h : "10px" }), [d, m, c, E, h]);
    return (0, r.jsxs)(so.animated.div, {
        [s1]: "",
        className: d ? s6.X : void 0,
        style: x,
        children: [d && (0, r.jsx)("div", { className: s6.E }, u), t],
    });
}
var ne = s(474646);
function nt(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : sf(t, 345, 20, 2)), [t]);
    return (
        i.useEffect(() => {
            null !== o && l(Math.ceil(s.length / o) - 1);
        }, [s.length, o, l]),
        (0, r.jsx)("div", {
            className: ne.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != o &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        s9,
                        {
                            featuredSection: !0,
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      tB,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      eX.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  ),
                        },
                        `animated-wrapper-${e}-${n}`,
                    ),
                ),
        })
    );
}
var ns = s(344236);
function nn(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(ns.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: ns.Gf, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: ns.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(ns.Nr, ns.Vr) }, t),
                ),
            }),
        ],
    });
}
var nl = s(418842),
    nr = s(561844),
    ni = s(548636);
function na(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(s5),
        { useNewTile: o } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = es.Mk.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        c = (0, nl.C)(),
        d = a === l,
        m = i.useCallback(
            (e) => {
                let {
                    scrollingType: n,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    scrollingDirection: a,
                } = e;
                (0, nr.kO)({
                    scrollingType: d ? ei.pk.AUTO : n,
                    scrollingDirection: a,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    questContent: t,
                    carouselSize: s.length,
                });
            },
            [t, s.length, d],
        ),
        E = u === es.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(s8, {
        maskWidth: sX(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${sZ(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: ni.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        s9,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(tB, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: ni.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(eX.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === sY.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: ni.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: ni.fu }),
            ],
        }),
    });
}
var no = s(958538);
let nu = to.A.Millis.WEEK;
function nc() {
    let e = ec.A.quests;
    if (0 === ec.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tL.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class nd extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(ec.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - nu;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([ec.A], nc), t;
    }
    getState() {
        let e = {};
        for (let [t, s] of n) e[t] = s;
        return { discoveredAtByQuestId: e };
    }
    getDiscoveredAtByQuestId() {
        return n;
    }
}
let nm = new nd(eo.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            if (null == ec.A.getQuest(e.questId)) return !1;
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    nE = 2 * to.A.Millis.DAY,
    nh = new Map(sJ.map((e) => [e.identifier, e])),
    nx = {
        [sY.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nf(e, t) {
    let s = nh.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
function ng(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
var nj = s(32304);
let nC = {
        [sY.FEATURED]: Z.uF.QUEST_HOME_FEATURED_SECTION,
        [sY.IN_PROGRESS]: Z.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [sY.ENDING_SOON]: Z.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [sY.ORB]: Z.uF.QUEST_HOME_ORB_SECTION,
        [sY.DISCOVERED]: Z.uF.QUEST_HOME_DISCOVERED_SECTION,
        [sY.EXPIRED]: Z.uF.QUEST_HOME_EXPIRED_SECTION,
        [sY.PREVIEW]: Z.uF.QUEST_HOME_PREVIEW_SECTION,
    },
    nS = 4 * to.A.Millis.SECOND,
    nv = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: a = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
            {
                sections: d,
                isFetchingCurrentQuests: m,
                getSectionIdentifierForTargetedQuest: h,
            } = (() => {
                let e = (0, t$.Gn)(),
                    t = (0, er.Cv)(),
                    s = (0, E.bG)([ec.A], () => ec.A.lastFetchedCurrentQuests > 0),
                    { quests: n, isFetchingCurrentQuests: l } = (0, er.Qh)(er.NC.ALL, {
                        sortMethod: tS.kL.SUGGESTED,
                        filters: [],
                        removeExpiredQuests: !e,
                    }),
                    r = (0, no.A)(
                        () =>
                            n.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        n.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        ng,
                    ),
                    a = (0, ea.T2)(),
                    o = (0, E.bG)([nm], () => nm.getDiscoveredAtByQuestId(), []),
                    u = i.useMemo(() => (l || !s) && 0 === r.length, [l, s, r.length]),
                    c = i.useMemo(
                        () =>
                            u
                                ? []
                                : (function (e) {
                                      let {
                                              allQuestIds: t,
                                              hero: s,
                                              discoveredAtByQuestId: n,
                                              isStaff: l,
                                              isPreviewerOnAnyQuest: r,
                                          } = e,
                                          i = new Map(),
                                          a = new Set();
                                      function o(e) {
                                          if (a.has(e)) return;
                                          let t = ec.A.getQuestConfig(e);
                                          if (null == t) return;
                                          let o = (function (e) {
                                              let {
                                                      quest: t,
                                                      hero: s,
                                                      discoveredAtByQuestId: n,
                                                      questIdsBySectionIdentifier: l,
                                                      isStaff: r,
                                                      isPreviewerOnAnyQuest: i,
                                                  } = e,
                                                  { userStatus: a, preview: o } = ec.A.getQuest(t.id) ?? {},
                                                  u = [],
                                                  c =
                                                      null != a &&
                                                      null != a.enrolledAt &&
                                                      null != a.completedAt &&
                                                      null == a.claimedAt;
                                              return (0, tL.kd)(t) && !c
                                                  ? r
                                                      ? [sY.EXPIRED]
                                                      : null
                                                  : (n.has(t.id) && u.push(sY.DISCOVERED),
                                                      i && !0 === o && u.push(sY.PREVIEW),
                                                      null != a && null != a.enrolledAt && null == a.claimedAt)
                                                    ? [...u, sY.IN_PROGRESS]
                                                    : null != s && (0, e3.I0)(s, t.id) && nf(sY.FEATURED, l)
                                                      ? [...u, sY.FEATURED]
                                                      : new Date(t.expiresAt).valueOf() <= Date.now() + nE
                                                        ? [...u, sY.ENDING_SOON]
                                                        : nf(sY.FEATURED, l)
                                                          ? [...u, sY.FEATURED]
                                                          : (0, tQ.ks)(t)
                                                            ? [...u, sY.ORB]
                                                            : 0 !== u.length
                                                              ? u
                                                              : null;
                                          })({
                                              quest: t,
                                              hero: s,
                                              discoveredAtByQuestId: n,
                                              questIdsBySectionIdentifier: i,
                                              isStaff: l,
                                              isPreviewerOnAnyQuest: r,
                                          });
                                          null != o &&
                                              (o.forEach((t) => {
                                                  i.set(t, [...(i.get(t) ?? []), e]);
                                              }),
                                              a.add(e));
                                      }
                                      return (
                                          s?.questIds?.forEach((e) => o(e)),
                                          t.forEach((e) => o(e)),
                                          sJ
                                              .map((e) => {
                                                  let t = nx?.[e.identifier];
                                                  if (null != e.shouldShowFn && !e.shouldShowFn(l, r))
                                                      return { ...e, questIds: [] };
                                                  let s =
                                                      null != t
                                                          ? t(i.get(e.identifier) ?? [], { discoveredAtByQuestId: n })
                                                          : (i.get(e.identifier) ?? []);
                                                  return { ...e, questIds: s };
                                              })
                                              .filter((e) => {
                                                  let { questIds: t } = e;
                                                  return t.length > 0;
                                              })
                                      );
                                  })({
                                      allQuestIds: r,
                                      hero: a,
                                      discoveredAtByQuestId: o,
                                      isStaff: e,
                                      isPreviewerOnAnyQuest: t,
                                  }),
                        [r, a, o, u, e, t],
                    ),
                    d = i.useCallback((e) => c.find((t) => t.questIds.includes(e))?.identifier ?? null, [c]);
                return { sections: c, isFetchingCurrentQuests: u, getSectionIdentifierForTargetedQuest: d };
            })(),
            x = i.useRef(null),
            { showToast: f } = sh(),
            [g, j] = i.useState(null),
            [v, _] = i.useState(null),
            [N, p] = i.useState(0),
            [T, A] = i.useState(null),
            [O, b] = i.useState(0),
            I = i.useRef(null),
            R = i.useCallback(
                (e) => {
                    A(e.contentRect.width);
                },
                [A],
            );
        (0, sx.g)(x, R, [R], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: M }, L] = (0, su.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nS },
            })),
            Q = i.useCallback(
                (e, t) => {
                    if (null == e || null == T || m || n) return !1;
                    t && (0, eu.sB)(e);
                    let s = h(e),
                        l = !0 === t ? sY.DISCOVERED : s;
                    if (null == s) return f(e), !1;
                    let r = document.getElementById((0, eX.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (j(e),
                        _(l),
                        p((e) => e + 1),
                        r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        L({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || (j(null), _(null));
                            },
                        }),
                        !0)
                    );
                },
                [j, p, L, m, n, f, T, h],
            );
        i.useImperativeHandle(t, () => ({ scrollToQuest: Q }), [Q]),
            i.useLayoutEffect(() => {
                if (null == s) {
                    I.current = null;
                    return;
                }
                I.current !== s && Q(s, !0) && (I.current = s);
            }, [s, Q]);
        let y = i.useMemo(
                () => ({
                    targetQuestId: g,
                    targetSectionIdentifier: v,
                    highlightCount: N,
                    highlightAnimationProgress: M,
                }),
                [g, v, N, M],
            ),
            U = i.useMemo(
                () =>
                    d.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sY.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(s5.Provider, {
            value: y,
            children: (0, r.jsx)("div", {
                className: o()(nj.kL, l, { [nj.Sy]: !a }),
                ref: x,
                children: m
                    ? (0, r.jsx)(nn, { role: "status", "aria-label": eC.intl.string(eC.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: nj.p9,
                                    children: [
                                        (0, r.jsx)(C.D, {
                                            variant: "heading-lg/semibold",
                                            className: nj.Gf,
                                            children: eC.intl.string(l),
                                        }),
                                        s === sY.FEATURED && u && c
                                            ? (0, r.jsx)(nt, {
                                                  questIds: n,
                                                  setMaxRowIndex: b,
                                                  containerWidth: T,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(na, {
                                                  questIds: n,
                                                  rowIndex: t < U ? t : t + O,
                                                  sectionIdentifier: s,
                                                  questContent: nC[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: nj.y7,
                            children: [
                                (0, r.jsx)(C.D, {
                                    variant: "heading-xl/semibold",
                                    children: eC.intl.string(eC.t.NqFP6z),
                                }),
                                (0, r.jsx)(S.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: eC.intl.string(eC.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var n_ = s(353640),
    nN = s(121894),
    np = s(851936);
let nT = (0, n_.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, np.L)({ location: tS.rE.QUEST_HOME_DESKTOP });
        if (s.info === eM.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, nN.r)(() => e(l));
    },
}));
var nA = s(516226),
    nO = s(323889),
    nb = s(901406),
    nI = s(139384),
    nR = s(770178),
    nM = s(14233);
function nL(e, t) {
    let { row_index: s, ...n } = (0, ei.fF)(Z.uF.QUEST_HOME_HERO);
    (0, nr.Qg)({
        adContentId: e,
        adCreativeType: nO.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: Z.uF.QUEST_HOME_HERO,
    });
}
let nQ = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, E] = i.useState("display-lg"),
        h = i.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, nR.w)(h, [], { fireOnMount: !0 }),
        f = i.useCallback(() => nL(s, eb.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => nL(s, eb.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(tf.N, {
        theme: eb.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(nM.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: g,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nM.FG,
                    children: [
                        (0, r.jsxs)(_.B, {
                            className: nM.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(_.B, {
                                    className: nM.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(_.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(C.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nM.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(S.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nM.VA,
                                                    children: a,
                                                }),
                                            ],
                                        }),
                                        u,
                                    ],
                                }),
                            ],
                        }),
                        c,
                    ],
                }),
            }),
    });
});
var ny = s(194526),
    nU = s(731355),
    nH = s(621466),
    nD = s(508770),
    nF = s(406810),
    nq = s(628284),
    nw = s(65154),
    nP = s(975807),
    nk = s(58703),
    nV = s(18437),
    nB = s(398025),
    nW = s(691464);
function nG(e) {
    let [t, s] = i.useState(!1),
        n = i.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nK(e) {
    let { hero: t, contentPosition: s } = e,
        n = i.useRef(null),
        { isHovering: l, hoverProps: a } = nG(
            i.useCallback(
                (e) => {
                    (0, nr.Qg)({
                        adContentId: t.id,
                        adCreativeType: nO.p.QUEST_HOME_HERO,
                        event: e ? eb.HAw.QUEST_HOVER : eb.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(Z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = n.current;
        (0, nH.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eM.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: u } = (0, su.z)({ hoverSpring: +!!l, config: so.config.gentle }),
        c = i.useCallback(() => {
            (0, nP.A)(t.cta.url),
                (0, nr.vK)({
                    adContentId: t.id,
                    adCreativeType: nO.p.QUEST_HOME_HERO,
                    questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: ei.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(eN.D, {
        tag: "div",
        className: o()(nW.FW, nW.Bm),
        onClick: c,
        "aria-label": t.cta.buttonLabel,
        [s1]: !0,
        ...a,
        children: [
            (0, r.jsx)("div", {
                className: nW.Ve,
                children: (0, r.jsx)(e4.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(nW.pv, nW.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(nW.pv, nW.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(so.animated.div, {
                className: nW.hn,
                style: { transform: u.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), c();
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function nz(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: m } = (0, ta.A)(a, to.A.Millis.MINUTE),
        h = i.useMemo(
            () =>
                (0, nk.uN)(
                    { days: u, hours: c, minutes: d, seconds: m },
                    { days: eC.t["Ux/De1"], hours: eC.t.Lzd5Ie, minutes: eC.t.odmpbP },
                ),
            [u, c, d, m],
        ),
        x = (0, E.bG)([tM.default], () => tM.default.getCurrentUser()),
        f = i.useMemo(() => (0, tQ.mq)(s.config, x), [s.config, x]),
        j = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, t5.xv)(e).type) {
                        case sI.l.IN_GAME:
                            return eC.intl.string(eC.t["O/J2kr"]);
                        case sI.l.COLLECTIBLE:
                            return eC.intl.string(eC.t.Jg17Ut);
                        case sI.l.VIRTUAL_CURRENCY:
                            return eC.intl.string(eC.t.ElYQFS);
                        default:
                            return (0, tQ.mq)(e, t);
                    }
                })(s.config, x),
            [s.config, x],
        ),
        { completedRatio: C, completedRatioDisplay: v } = (0, er.O9)(s),
        N = i.useMemo(() => (0, tQ.wo)(s.config, x), [s.config, x]),
        p = (0, nV.tG)(),
        T = (0, nV.WS)(),
        b = (0, e7.go)(),
        { isHovering: I, hoverProps: R } = nG(
            i.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: nO.p.QUEST_HOME_HERO,
                        event: e ? eb.HAw.QUEST_HOVER : eb.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(Z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: M } = (0, su.z)({ hoverSpring: +!!I, config: so.config.gentle }),
        L = i.useCallback(() => {
            n(s.id),
                (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, A.r)({
                          type: O.F.CLICK_INTERNAL,
                          adCreativeType: nO.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: ei.Cy.VIEW_QUESTS,
                          surfaceId: Z.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: b,
                      })
                    : p({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: nO.p.QUEST_HOME_HERO,
                          questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: ei.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, p, l, b]);
    return (0, r.jsxs)(eN.D, {
        tag: "div",
        className: o()(nW.FW, nW.$R),
        onClick: L,
        "aria-label": eC.intl.string(eC.t["th2+0j"]),
        [s1]: !0,
        ...R,
        children: [
            (0, r.jsxs)(_.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nD.E, { type: { text: j } }),
                    (0, r.jsx)(so.animated.div, {
                        style: { opacity: (0, nB.a)(M.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nD.E, { type: { text: h }, icon: nF.O }),
                    }),
                ],
            }),
            (0, r.jsx)(so.animated.div, {
                className: nW.Tr,
                style: { transform: M.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(ty.A, {
                    percentComplete: C,
                    overlayText: I && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tU.A, {
                        quest: s,
                        questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: I,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(so.animated.div, {
                className: nW.tw,
                style: {
                    opacity: (0, nB.a)(M.to([0, 1], [1, 0])),
                    transform: M.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(_.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(S.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nW.Ht,
                            children: f,
                        }),
                        (0, r.jsxs)(_.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(_.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(nq.y, { size: "xs", color: ev.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(S.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(_.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, e3.pv)(s.config) === nU.Z.VIDEO
                                            ? (0, r.jsx)(nw.S, { size: "xs", color: ev.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(tt._, { size: "xs", color: ev.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(S.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: v,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(so.animated.div, {
                className: nW.um,
                style: { transform: M.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), L();
                    },
                    text: eC.intl.string(eC.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var n$ = s(648731);
function nY(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e,
        l = (0, nl.C)();
    return (0, r.jsx)(s8, {
        className: n$.v,
        overflowAmount: 25,
        maskWidth: sX(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsxs)(_.B, {
            className: n$.I,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            children: [
                (0, r.jsx)(e8.R, {
                    adContentId: t.id,
                    adCreativeType: nO.p.QUEST_HOME_HERO,
                    questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nK, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, s) =>
                    (0, r.jsx)(
                        e8.R,
                        {
                            adContentId: t.id,
                            adCreativeType: nO.p.QUEST_HOME_HERO,
                            questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: s + 1,
                            sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                            children: (l) =>
                                (0, r.jsx)("div", {
                                    ref: (e) => {
                                        l.current = e;
                                    },
                                    children: (0, r.jsx)(nz, {
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
var nJ = s(95115);
function nX() {
    return (0, r.jsx)("div", { className: nJ.Np });
}
function nZ(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, nI.A)(n, tS.rE.QUEST_HOME_DESKTOP);
    let l = i.useMemo(() => (null != s ? (0, e2.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, r.jsxs)("div", {
              className: nJ.Tv,
              children: [
                  (0, r.jsx)(nX, {}),
                  (0, r.jsx)("div", {
                      className: nJ.LO,
                      children: (0, r.jsx)("img", { className: nJ.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nJ.LO, nJ.jx, nJ.hw),
                      children: (0, r.jsx)("img", { className: nJ.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nJ.LO, nJ.jx, nJ.Co),
                      children: (0, r.jsx)("img", { className: nJ.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: nJ.Tv,
              children: [
                  (0, r.jsx)(nX, {}),
                  (0, r.jsx)("div", {
                      className: nJ.LO,
                      children: (0, r.jsx)(e4.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: n,
                          imageAsset: {
                              alt: "",
                              className: nJ.LY,
                              asset: { url: l, mimetype: (0, e2.vm)(l), isAnimated: !1 },
                              assetId: l,
                          },
                          videoAsset: {
                              alt: "",
                              className: nJ.LY,
                              asset: { url: s, mimetype: (0, e2.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function n0(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        n = (0, E.bG)([ec.A], () => ec.A.quests),
        { shelfQuests: l, isShelfEnabled: a } = (0, er.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, ny.I)();
    i.useEffect(() => {
        o();
    }, [o]);
    let u = i.useMemo(() => t.questIds?.find((e) => n.has(e)), [n, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e8.R, {
                adContentId: t.id,
                adCreativeType: nO.p.QUEST_HOME_HERO,
                questContent: Z.uF.QUEST_HOME_HERO,
                sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(nQ, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, r.jsxs)(_.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, r.jsx)("img", { src: t.sponsorImage, alt: "", className: nJ.wm }),
                                (0, r.jsx)(S.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nJ.yu,
                                    children: eC.intl.string(eC.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, r.jsxs)(f.e, {
                            children: [
                                (0, r.jsx)(g.$, {
                                    onClick: () => {
                                        (0, nb._Q)(
                                            { adContentId: t.id, adCreativeType: nO.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: Z.uF.QUEST_HOME_HERO,
                                                ctaContent: ei.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !a &&
                                    null != u &&
                                    (0, r.jsx)(g.$, {
                                        onClick: () => {
                                            s(u),
                                                (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                    ? (0, A.r)({
                                                          type: O.F.CLICK_INTERNAL,
                                                          adCreativeType: nO.p.QUEST_HOME_HERO,
                                                          adCreativeId: t.id,
                                                          questContentCTA: ei.Cy.VIEW_QUESTS,
                                                          surfaceId: Z.uF.QUEST_HOME_HERO,
                                                          sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                                      })
                                                    : (0, nr.vK)({
                                                          adContentId: t.id,
                                                          adCreativeType: nO.p.QUEST_HOME_HERO,
                                                          questContent: Z.uF.QUEST_HOME_HERO,
                                                          questContentCTA: ei.Cy.VIEW_QUESTS,
                                                          sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                                      });
                                        },
                                        size: "md",
                                        text: eC.intl.string(eC.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, r.jsx)(nZ, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            a && (0, r.jsx)(nY, { hero: t, shelfQuests: l, onQuestCtaClick: s }),
        ],
    });
}
function n1() {
    return (0, r.jsx)("div", { className: o()(nM.iE, nM.FG, nM.B3), children: (0, r.jsx)(ef.y, {}) });
}
var n2 = s(740879),
    n7 = s(604880),
    n3 = s(318808);
function n4(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, tT.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: n2.MY,
        children: [
            (0, r.jsx)("img", { className: n2.Bg, src: n3.Ay, alt: "" }),
            (0, r.jsx)("div", { className: n2.r$, children: (0, r.jsx)("img", { src: n7, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: n2.Nr,
                children: [
                    (0, r.jsx)(C.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: n2.ky,
                        children: eC.intl.string(eC.t.GXmn57),
                    }),
                    (0, r.jsx)(S.E, {
                        variant: "text-md/normal",
                        className: n2.G3,
                        children: eC.intl.string(eC.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: eC.intl.string(eC.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function n8(e) {
    let { alt: t, ariaLabel: s, ariaHidden: n, role: l, width: i = 288, height: a = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: i, height: a },
        src: "https://cdn.discordapp.com/assets/content/bcf3b3d09bc5184860051e378d0e0d815edeaffb108593db1d2bb64ae405927f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": n,
        role: l ?? "img",
    });
}
var n5 = s(298537);
let n6 = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, nl.C)(),
        { useNewTile: n } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = es.Mk.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        o = l === es.d.LARGE_MASK_MARGIN,
        u = sg(a, sZ(s, o), 20, 3);
    return (0, r.jsxs)(_.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: n5.kL,
        ref: a,
        children: [
            (0, r.jsxs)(C.D, {
                variant: "heading-lg/medium",
                children: [eC.intl.string(eC.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(_.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: n5.y7,
                      children: [
                          (0, r.jsx)(n8, { alt: eC.intl.string(eC.t["Xe+fJM"]) }),
                          (0, r.jsxs)(_.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(C.D, {
                                      variant: "heading-lg/medium",
                                      children: eC.intl.string(eC.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(C.D, {
                                      variant: "heading-sm/medium",
                                      children: eC.intl.string(eC.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: n5.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${sZ(s, o)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== u &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        tB,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n5.d,
                                            sourceQuestContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        eX.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n5.d,
                                            sourceQuestContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var n9 = s(111956),
    le = s.n(n9),
    lt = s(379078),
    ls = s(704554),
    ln = s(823784);
let ll = {
    searchType: lt.n.FUZZY,
    searchStringGenerator: function (e) {
        return [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(t3.Vq);
    },
    sortType: lt.r.JARO_WINKLER,
    throttleMs: 200,
};
var lr = s(758836),
    li = s(613057),
    la = s(935824);
let lo = i.createContext({});
function lu(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lo);
    return (0, r.jsxs)(e9.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(V.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(P.A, { className: la.Jo, innerClassName: la.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lc(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(k.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function ld(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, E.bG)([T.Ay], () => T.Ay.useReducedMotion),
        a = (0, E.bG)([z.A], () => z.A.isFocused()),
        { ref: o, inViewport: u } = (0, t7.p)(),
        c = i.useRef(null);
    if (
        (i.useEffect(() => {
            c?.current != null &&
                (c.current.paused || (a && u && !l)
                    ? c.current.paused && !l && u && a && c.current.play()
                    : c.current.pause());
        }, [l, u, a]),
        n)
    ) {
        let e = (0, Y.TM)();
        return (0, r.jsx)(y.A, {
            ref: (e) => {
                (c.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: s,
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e
                    ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                    : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
        className: s,
        alt: "",
        onLoad: t,
    });
}
function lm(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(la.Tv, { [la.lJ]: s }),
        children: [
            (0, r.jsx)(nX, {}),
            (0, r.jsx)("div", { className: o()(la.nz, { [la.ZZ]: s }) }),
            (0, r.jsx)(ld, {
                onLoadComplete: t,
                className: o()(la.Fe, { [la.H4]: s, [la.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function lE(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, G.Z)({ location: tS.rE.QUEST_HOME_DESKTOP }),
        { enabled: n } = el.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        l = s && !n,
        a = i.useCallback(() => {
            l ? window.open(eb.X7G.PAID_TERMS_ORBS) : window.open(J.A.getArticleURL(eb.MVz.QUESTS_LEARN_MORE));
        }, [l]);
    return (0, r.jsx)(nQ, {
        adContentId: l ? tS.yr : tS.uz,
        title: l ? eC.intl.format(eC.t.BCBIlp, {}) : eC.intl.format(eC.t.lmMBfy, {}),
        subtitle: l ? eC.intl.format(eC.t.U9FY0J, {}) : eC.intl.string(eC.t.oWCrBq),
        buttons: l
            ? (0, r.jsxs)(f.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: eC.intl.string(eC.t["1Wm127"]),
                          onClick: () =>
                              (0, L.Cz)({
                                  tab: lr.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: b.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: eC.intl.string(eC.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: eC.intl.string(eC.t.hvVgAZ),
                  onClick: a,
                  icon: j.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lm, { onAssetLoad: t, isVirtualCurrencyEnabled: l }),
    });
}
function lh(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e;
    return (0, r.jsx)("div", {
        className: o()(la.iS, { [la.R]: i }),
        children: l
            ? (0, r.jsx)(n1, {})
            : null != n
              ? (0, r.jsx)(n0, { hero: n, onQuestCtaClick: s })
              : (0, r.jsx)(lE, { onAssetLoad: t }),
    });
}
function lx(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: o()(la.BW, la.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: o()(la.BW, la.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: o()(la.BW, la.rZ),
                alt: "",
            }),
        ],
    });
}
let lf = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => (0, B.B)(s.pathname, eb.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        a = i.useMemo(() => new URLSearchParams(s.search).getAll(er.L1.AD_CREATIVE_IDS), [s.search]),
        x = (m.Fr || m.v1) && a.length > 0,
        f = (0, E.bG)([M.A], () => M.A.getState("quests")),
        {
            selectedTab: j,
            onSelectTab: T,
            tabs: y,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = ee.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, er.p5)(),
                { enabled: r } = es.A8.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                ee.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                ee.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: er.NC.ALL, label: o ? eC.intl.string(eC.t.Jt6u7B) : eC.intl.string(eC.t["0SzXmi"]) },
                            t
                                ? {
                                      id: er.NC.CLAIMED,
                                      label: o ? eC.intl.string(eC.t["3TVY/R"]) : eC.intl.string(eC.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: er.NC.PREVIEW_TOOL, label: eC.intl.string(eC.t.BDUDau) } : null,
                        ].filter(t3.Vq),
                    [t, l, o],
                ),
                selectedTab: s,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !l }),
        {
            query: H,
            setQuery: D,
            matchingQuestIds: P,
            onSearchClose: k,
        } = (() => {
            let [e, t] = i.useState(""),
                [s, n] = i.useState(null),
                l = (0, E.yK)([ec.A], () =>
                    (0, er.mn)(Array.from(ec.A.quests.values()), { sortMethod: tS.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                a = "" !== r,
                o = i.useMemo(() => le()(nr.gr, 1e3), []),
                u = i.useCallback(() => {
                    o.cancel();
                    let e = (0, ln.tv)();
                    null != e &&
                        (0, nr.XH)({
                            searchSessionId: e.uuid,
                            searchSessionDurationMs: Date.now() - e.createdAtTimestamp,
                        }),
                        (0, ln.l6)();
                }, [o]),
                c = i.useCallback(() => {
                    u(), t("");
                }, [u]);
            i.useEffect(
                () => () => {
                    u();
                },
                [u],
            );
            let d = i.useCallback(
                (e) => {
                    if (
                        (n(
                            a
                                ? e
                                      .map((e) => {
                                          let { id: t } = e;
                                          return t;
                                      })
                                      .filter(t3.Vq)
                                : null,
                        ),
                        a)
                    ) {
                        let { searchSession: t, isNew: s } = (0, ln.$N)();
                        s && (0, nr.OQ)({ searchSessionId: t.uuid }),
                            o({
                                searchSessionId: t.uuid,
                                searchQuery: r,
                                searchQueryLength: r.length,
                                resultsCount: e.length,
                                hasResults: e.length > 0,
                            });
                    } else c();
                },
                [a, r, o, c],
            );
            return (0, ls.RT)(r, l, d, ll), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c };
        })();
    i.useLayoutEffect(() => {
        l && j === er.NC.CLAIMED && ee.A.setState({ tab: er.NC.ALL });
    }, [l, j]);
    let { onScroll: V } = (0, q.G)(),
        z = et.A.getState().getUtmCurrentContext(),
        Y = nT((e) => e.registerAssetLoad),
        J = i.useRef(z);
    i.useEffect(() => {
        J.current = z;
    }),
        i.useEffect(() => {
            let { current: e } = J;
            (0, I.x)({
                name: d.ImpressionNames.QUEST_HOME,
                type: d.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: j,
                },
            });
        }, [j]);
    let { enabled: el } = (0, G.Z)({ location: tS.rE.QUEST_HOME_DESKTOP });
    (0, Q.HU)({ location: eC.intl.string(eC.t.JALI2K) });
    let eo = i.useRef(null),
        { enabled: eu, variant: ed } = es.A8.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: em } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        eE = eu || em,
        eh = (eu && ed === es.zY.NEW_LAYOUT_WITH_SEARCH) || em,
        ex = i.useRef(null),
        ef = i.useCallback((e) => {
            ex.current?.scrollToQuest(e);
        }, []),
        eg = i.useMemo(() => ((0, X.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: ej, isLoading: eS } = (0, ea.lg)(a[0] ?? null),
        ev = i.useCallback(() => {
            (0, W.Y)({
                pageType: eb.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eb.JJy.ORBS_BALANCE_MENU,
                ctaObject: eb.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, L.Cz)({ tab: lr.G2.ORBS, analyticsLocations: [], analyticsSource: b.A.ORBS_BALANCE_MENU });
        }, []);
    i.useEffect(() => {
        (0, p.I)(eb.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            F.trigger();
        }, []),
        i.useEffect(() => {
            if (x || null != f) return;
            let e = new URLSearchParams(s.search),
                l = e.get(er.L1.TAB);
            if (l === er.NC.PREVIEW_TOOL) {
                let t = e.get(er.L1.QUEST_ID);
                R.A.openNativeAppModal("quests", eb.e$_.DEEP_LINK, {
                    type: li.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== er.NC.PREVIEW_TOOL) {
                let t = (0, X.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(er.L1.SORT),
                    r = e.get(er.L1.FILTER),
                    i = e.get(er.L1.AD_CREATIVE_IDS);
                R.A.openNativeAppModal("quests", eb.e$_.DEEP_LINK, {
                    type: li.XK.QUEST_HOME,
                    params: { questId: (0, X.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, f, n.action, s.hash, t, x]),
        i.useEffect(() => {
            t && (0, U.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let e_ = i.useCallback(() => {
            (0, tT.navigateToQuestHome)({ fromContent: Z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_page")
                    ? (0, A.r)({
                          type: O.F.CLICK_INTERNAL,
                          questContentCTA: ei.Cy.VIEW_QUESTS,
                          surfaceId: Z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER,
                          sourceQuestContent: Z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER,
                          isTargeted: !1,
                      })
                    : $.default.track(eb.HAw.QUEST_CONTENT_CLICKED, {
                          cta_name: ei.Cy.VIEW_QUESTS,
                          click_id: (0, c.A)(),
                          is_targeted: !1,
                          ...(0, ei.fF)(Z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                      });
        }, []),
        eN = i.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), eo.current?.scrollToTop({ animate: !1 }), T(e), k();
            },
            [n, T, k],
        ),
        ep = i.useMemo(() => null != P && eh, [P, eh]),
        eT = i.useMemo(() => ({ onAssetLoadComplete: Y }), [Y]),
        eA = i.useMemo(() => ({ onScroll: V, scrollerRef: eo }), [V, eo]),
        eO = (0, es.Qj)() && 0 === a.length;
    return x
        ? (0, r.jsx)(n4, { adCreativeIds: a })
        : (0, r.jsx)(nA.M.Provider, {
              value: eT,
              children: (0, r.jsx)(lo.Provider, {
                  value: eA,
                  children: (0, r.jsx)("div", {
                      className: o()(la.kL, { [la.KY]: !t }),
                      children: l
                          ? (0, r.jsx)(lu, {
                                withFullBleedBanner: !0,
                                header: (0, r.jsx)(lc, { selectedTab: j, onSelectTab: eN, tabs: y }),
                                banner: (0, r.jsx)(w.A, {
                                    title: eC.intl.string(eC.t.z8YP2A),
                                    titleColor: "always-white",
                                    button: (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: eC.intl.string(eC.t.GURBQl),
                                        onClick: e_,
                                    }),
                                    className: la.Gj,
                                    children: (0, r.jsx)(lx, { onLoadComplete: Y }),
                                }),
                                children: (0, r.jsxs)("div", {
                                    className: la.kj,
                                    children: [
                                        (0, r.jsx)(C.D, {
                                            variant: "heading-xl/semibold",
                                            children: eC.intl.string(eC.t.z8YP2A),
                                        }),
                                        (0, r.jsx)(S.E, {
                                            color: "text-subtle",
                                            variant: "text-md/normal",
                                            children: eC.intl.string(eC.t.HdKh65),
                                        }),
                                        (0, r.jsx)(v.Q, {
                                            text: eC.intl.string(eC.t["1CdL8d"]),
                                            onClick: e_,
                                            textVariant: "text-md/normal",
                                            variant: "primary",
                                        }),
                                    ],
                                }),
                            })
                          : (0, r.jsxs)(lu, {
                                header: (0, r.jsx)(lc, {
                                    selectedTab: j,
                                    onSelectTab: eN,
                                    tabs: y,
                                    endContent: (0, r.jsxs)(_.B, {
                                        gap: 8,
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "end",
                                        children: [
                                            eh &&
                                                (0, r.jsx)(N.I, {
                                                    query: H,
                                                    onChange: D,
                                                    placeholder: eC.intl.string(eC.t.y10TI2),
                                                    onClear: k,
                                                    size: "sm",
                                                }),
                                            el &&
                                                (0, r.jsx)(K.SS, {
                                                    analyticsPage: eb.liQ.GLOBAL_DISCOVERY_QUESTS,
                                                    cardAlignment: K.cP.END,
                                                    ctaText: eC.intl.string(eC.t["J+vlIR"]),
                                                    ctaOnClick: ev,
                                                }),
                                        ],
                                    }),
                                }),
                                banner:
                                    j === er.NC.ALL &&
                                    !eO &&
                                    (0, r.jsx)(lh, {
                                        onAssetLoad: Y,
                                        onQuestCtaClick: ef,
                                        hasSearchResults: ep,
                                        questHomeHero: ej,
                                        isLoadingQuestHomeHero: eS,
                                    }),
                                children: [
                                    ep && null != P && (0, r.jsx)(n6, { matchingQuestIds: P }),
                                    j === er.NC.CLAIMED
                                        ? (0, r.jsx)(sG, { onSelectTab: eN, className: ep ? la.R : void 0 })
                                        : j === er.NC.PREVIEW_TOOL
                                          ? (0, r.jsx)(t2, { className: ep ? la.R : void 0 })
                                          : eE
                                            ? (0, r.jsx)(nv, {
                                                  className: ep ? la.R : void 0,
                                                  ref: ex,
                                                  deepLinkedQuestId: eg,
                                                  isLoadingQuestHomeHero: !eO && eS,
                                                  withQuestHomeHero: !eO,
                                              })
                                            : (0, r.jsx)(sO, { ref: ex }),
                                ],
                            }),
                  }),
              }),
          });
};
