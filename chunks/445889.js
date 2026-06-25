let n;
s.r(t), s.d(t, { default: () => lg }), s(323874), s(14289), s(35956);
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
    v = s(534514),
    C = s(834730),
    S = s(123292),
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
    L = s(662388),
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
    B = s(783531),
    V = s(334465),
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
    ev = s(375708);
function eC(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(ej.$T, {
        color: ej.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : ev.intl.string(ev.t.ZErSg5) }),
    });
}
var eS = s(661531),
    e_ = s(602853),
    eN = s(939249),
    ep = s(817281),
    eT = s(688810),
    eA = s(487245),
    eO = s(363195),
    eb = s(652215),
    eI = s(692956);
let eR = function () {
    let { analyticsLocations: e } = (0, eT.Ay)(),
        t = (0, E.bG)([eO.A], () => eO.A.theme),
        s = i.useRef(null);
    i.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, e_.r)(eS.A.colors.BACKGROUND_BASE_LOW, eb.NJ8.LIGHT),
        l = (0, e_.r)(eS.A.colors.BACKGROUND_BASE_LOW, eb.NJ8.DARKER),
        a = (0, e_.r)(eS.A.colors.BACKGROUND_BASE_LOW, eb.NJ8.MIDNIGHT),
        o = i.useMemo(
            () => [
                { theme: eb.NJ8.LIGHT, label: ev.t.K2sFfo, color: n.hex() },
                { theme: eb.NJ8.DARKER, label: ev.t.b8Cei3, color: l.hex() },
                { theme: eb.NJ8.MIDNIGHT, label: ev.t.Do4ZJx, color: a.hex() },
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
                            "aria-label": ev.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${eI.WT} ${t === e.theme ? eI.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: eI.i, children: ev.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(em.K, {
                    onClick: c,
                    "aria-label": ev.intl.string(ev.t.yBZMsQ),
                    icon: eE.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eM = s(818348),
    eL = s(118329);
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
        v = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, eu.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, eu.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(async () => {
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
                                            placeholder: ev.intl.string(ev.t.Zw8jxn),
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
                                        "aria-label": ev.intl.string(ev.t.wzzjk9),
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
                                onClick: v,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ev.intl.string(ev.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ev.intl.string(ev.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ev.intl.string(ev.t.cKSLr4),
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
                                                text: ev.intl.string(ev.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(em.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": ev.intl.string(ev.t.rNGQfD),
                                        icon: ex.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(eC, { error: h }) : null,
            x ? (0, r.jsx)(ef.y, {}) : null,
        ],
    });
};
var ey = s(364522),
    eU = s(761508),
    eH = s(170780);
function eD() {
    return (0, r.jsx)("div", { className: eH.y });
}
var eF = s(834615),
    eq = s(438464);
let ew = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eq.B0,
            children: [
                (0, r.jsx)(v.D, {
                    className: eq.R_,
                    variant: "heading-md/semibold",
                    children: ev.intl.string(ev.t.L2mlUb),
                }),
                (0, r.jsx)(eF.A, { quest: t }),
            ],
        }),
    });
};
var eP = s(241124),
    ek = s(242939),
    eB = s(717695),
    eV = s(64634),
    eW = s(924105);
let eG = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eV.wp,
            children: [
                (0, r.jsx)(v.D, {
                    className: eV.Oo,
                    variant: "heading-md/semibold",
                    children: ev.intl.string(ev.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eV.RE,
                    children: (0, r.jsx)("div", {
                        className: eV.Z,
                        children: (0, r.jsx)("div", {
                            className: eW.C3,
                            children: (0, r.jsx)(eB.A, {
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
                (0, r.jsx)(v.D, {
                    className: eq.R_,
                    variant: "heading-md/semibold",
                    children: ev.intl.string(ev.t.gWinpQ),
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
    eY = s(248562);
let eJ = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eq.B0,
            children: [
                (0, r.jsx)(v.D, { variant: "heading-md/semibold", children: ev.intl.string(ev.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: eY.wu,
                    children: (0, r.jsx)("span", { className: eY.cy, children: ev.intl.string(ev.t.q97mEu) }),
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
var eX = s(892955),
    eZ = s(173936),
    e0 = s(365199),
    e1 = s(743674),
    e2 = s(551875),
    e8 = s(971649),
    e7 = s(814793),
    e4 = s(415441),
    e3 = s(73473),
    e6 = s(270045),
    e5 = s(79545),
    e9 = s(321503),
    te = s(720875),
    tt = s(339350),
    ts = s(687966),
    tn = s(782134),
    tl = s(271536),
    tr = s(768622),
    ti = s(793934),
    ta = s(662940),
    to = s(496431),
    tu = s(927813);
let tc = 2 * tu.A.Millis.DAY;
var td = s(840429);
function tm(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, e5.Pd)(t),
        l = (0, E.bG)([ec.A], () => n === e5.UA.UNENROLLED && null != ec.A.questEnrollmentBlockedUntil, [n]),
        a = (0, er.fc)(t),
        u = (0, er.I3)(t),
        c = i.useMemo(() => (0, ta.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, ta.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, e5.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case e5.UA.UNENROLLED:
                            case e5.UA.ENROLLED:
                            case e5.UA.INCOMPLETE:
                                return !0;
                            case e5.UA.COMPLETED:
                            case e5.UA.CLAIMED:
                            case e5.UA.EXPIRED:
                            case e5.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < tc &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, to.A)(n, tu.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(td.fC, { [td.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: td.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(C.E, {
                            variant: "text-xs/semibold",
                            className: td.SJ,
                            color: "always-white",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(C.E, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            className: td.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: td.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: td.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(tt.Q, { ...s });
                                    switch ((0, ta.pv)(e)) {
                                        case ta.UK.PLAY:
                                            return (0, r.jsx)(ts._, { ...s });
                                        case ta.UK.WATCH:
                                            return (0, r.jsx)(tn.u, { ...s });
                                        case ta.UK.ACTIVITY:
                                            return (0, r.jsx)(tl.q, { ...s });
                                        case ta.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(tr.g, { ...s });
                                        case ta.UK.ARENA:
                                            return (0, r.jsx)(ti.q, { ...s });
                                    }
                                })(t, l),
                                (0, r.jsx)(C.E, {
                                    variant: "text-xs/semibold",
                                    tag: "span",
                                    color: "always-white",
                                    children: d,
                                }),
                            ],
                        }),
                ],
            }),
            t.preview &&
                (0, r.jsx)("div", {
                    className: o()(td.qS, td.WZ),
                    children: (0, r.jsx)(C.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: ev.intl.string(ev.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var tE = s(409626),
    th = s(3738),
    tx = s(646917),
    tf = s(990078),
    tg = s(43990),
    tj = s(743368),
    tv = s(792620),
    tC = s(368715),
    tS = s(617986),
    t_ = s(190107),
    tN = s(416780);
function tp(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, e5.Pd)(t),
        { ctaOnHover: u } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        c = (0, E.bG)([ec.A], () => a === e5.UA.UNENROLLED && null != ec.A.questEnrollmentBlockedUntil, [a]),
        d = a === e5.UA.EXPIRED || (a === e5.UA.CLAIMED && (0, tv.GL)(t)),
        m = (0, er.do)({ quest: t, content: s, ctaContent: ei.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tN.lO, { [tN.Fq]: l || !u }),
        children: (0, r.jsx)("div", {
            className: tN.mv,
            children: (0, r.jsx)(tg.N, {
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
                                d || i
                                    ? (0, r.jsx)(g.$, {
                                          variant: "secondary",
                                          text: t.config.ctaConfig.buttonLabel,
                                          onClick: m,
                                      })
                                    : (0, r.jsx)(tf.m, {
                                          text: ev.intl.string(ev.t.LLLLPD),
                                          position: "top",
                                          align: "center",
                                          ariaHidden: !0,
                                          children: (0, r.jsx)(em.K, {
                                              variant: "secondary",
                                              icon: tj.W,
                                              "aria-label": ev.intl.string(ev.t.LLLLPD),
                                              onClick: m,
                                          }),
                                      }),
                                !d &&
                                    !c &&
                                    (0, r.jsx)(tC.A, {
                                        quest: t,
                                        surface: e5.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                c &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: ev.intl.string(ev.t.vY9GgG),
                                        onClick: () => (0, tS.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
var tT = s(403581),
    tA = s(576761),
    tO = s(424168);
function tb(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, er.ZP)(s),
        i = (0, tA.B9)(n);
    if (null == l) return null;
    let a = i
        ? ev.intl.formatToPlainString(ev.t.l2UfLG, { bonusOrbMultiplier: l })
        : ev.intl.formatToPlainString(ev.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(eN.D, {
        onClick: () => {
            (0, tS.gC)(l, n), t?.();
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: tO.k,
            children: [
                (0, r.jsx)(tT.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "currentColor", className: tO.Q, children: a }),
            ],
        }),
    });
}
var tI = s(947641),
    tR = s(194261),
    tM = s(106799),
    tL = s(287809),
    tQ = s(710969),
    ty = s(801365),
    tU = s(453384),
    tH = s(646764),
    tD = s(18223);
function tF(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, E.bG)([tL.default], () => tL.default.getCurrentUser()),
        a = (0, ty.mq)(t.config, i),
        o = (0, ty.ks)(t.config),
        u = (0, ty.wo)(t.config, i),
        c = (0, ty.l0)(t.config, i),
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
        x = (0, tQ.Ic)(t),
        f = t.userStatus?.enrolledAt == null,
        g = h ? "completed" : x ? "expired" : null,
        j = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tH.A, {
                    quest: t,
                    orbTier: d,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: tD.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === g &&
                    (0, r.jsx)("div", {
                        className: tD.EY,
                        children: (0, r.jsx)(tI.r, { className: tD.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === g &&
                    (0, r.jsx)("div", {
                        className: tD.EY,
                        children: (0, r.jsx)(tR.X, { size: "sm", className: tD.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: tD.CZ,
        children: [
            (0, r.jsx)("div", {
                className: tD.tE,
                children: f
                    ? (0, r.jsx)("div", { className: tD.fm, children: j })
                    : (0, r.jsx)(tU.A, {
                          size: 74,
                          percentComplete: m,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: tD.n5, children: j }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: tD.FS,
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        className: tD.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: tD.oV,
                        children: [
                            o && (0, r.jsx)(tM.A, { className: tD.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                C.E,
                                {
                                    variant: "text-lg/medium",
                                    className: tD.zN,
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
var tq = s(547639);
function tw(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, th.A9)(t, a, t_.rE.QUEST_HOME_DESKTOP, tE.Ob.QuestHome, u),
        d = (0, tx.z)(),
        m = (0, er.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: tq.qr,
        children: [
            (0, r.jsx)(tF, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n }),
            (0, r.jsxs)("div", {
                className: tq.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: tq.Wi,
                        children: [
                            (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                className: o()(tq.Wj, tq.h_, { [tq.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(C.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(tq.Wj, tq.XV, { [tq.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tq.Gv,
                        children: [
                            (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: ev.intl.string(ev.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(tb, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tp, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var tP = s(688755),
    tk = s(831368),
    tB = s(804184);
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
            isActive: v,
            shouldRender: C,
            hoverHandlers: S,
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
        p = (0, e5.Pd)(s),
        T = (0, e8.go)(),
        A = (0, e7.E0)(s.config),
        O = i.useContext(e9.X),
        { visibilityElementRef: b, almostVisibleInViewport: I } = (0, tk.I)(
            O?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: R,
            handleHoverEnd: M,
            isEventWithinParent: L,
        } = (0, tP.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: E }),
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
    return (0, r.jsx)("div", {
        className: tB.uW,
        onMouseEnter: () => {
            S.onMouseEnter(), R();
        },
        onMouseLeave: () => {
            S.onMouseLeave(), M();
        },
        onFocus: (e) => {
            L(e) || (S.onFocus(), R());
        },
        onBlur: (e) => {
            L(e) || (S.onBlur(), M());
        },
        children: (0, r.jsxs)("article", {
            id: (0, eX.sT)(s.id, t),
            ref: (e) => {
                (m.current = e), (b.current = e);
            },
            "aria-label": ev.intl.formatToPlainString(ev.t.EAYZAr, { questName: s.config.messages.questName }),
            className: o()(tB.kL, { [tB.iR]: l, [tB.DM]: v }, a),
            style: j,
            children: [
                (0, r.jsx)(te.A, {
                    showPlaceholder: !I,
                    width: 600,
                    height: 450,
                    className: tB.Tv,
                    children: (0, r.jsx)(e4.N, {
                        imageAsset:
                            null != h
                                ? {
                                      asset: h,
                                      assetId: "QuestTileV2",
                                      alt: ev.intl.string(ev.t.jnijWz),
                                      className: tB.Tv,
                                  }
                                : void 0,
                        videoAsset:
                            null != x
                                ? {
                                      asset: x,
                                      assetId: "QuestTileV2_heroAnimated",
                                      className: o()(tB.Tv, tB.gJ, { [tB.C7]: v }),
                                  }
                                : void 0,
                        imageSize: { width: 600, height: 450 },
                        showVideo: C,
                    }),
                }),
                (0, r.jsx)("div", { className: o()(tB.sL, { [tB.Mq]: p === e5.UA.EXPIRED }) }),
                (0, r.jsx)("div", { className: o()(tB.f5, tB.Cm) }),
                (0, r.jsx)("div", { className: o()(tB.f5, tB.sr) }),
                (0, r.jsxs)("div", {
                    className: tB.wx,
                    children: [
                        (0, r.jsx)(tm, { quest: s, isHovering: v }),
                        (0, r.jsxs)("div", {
                            className: o()(tB.$s, { [tB.rk]: v }),
                            children: [
                                l &&
                                    A &&
                                    (0, r.jsx)(eN.D, {
                                        tag: "div",
                                        className: tB.E9,
                                        onClick: Q,
                                        "aria-label": ev.intl.string(ev.t.WqhZss),
                                        children: (0, r.jsx)(eZ.q, { size: "sm", color: "currentColor" }),
                                    }),
                                (0, r.jsx)(e6.C, {
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
                                            className: tB.E9,
                                            "aria-label": ev.intl.string(ev.t.DEoVWZ),
                                            children: (0, r.jsx)(e0.j, { size: "sm", color: "currentColor" }),
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(tw, {
                    quest: s,
                    questContent: n,
                    isInFeaturedSection: l,
                    isHovering: v,
                    sourceQuestContent: E,
                }),
            ],
        }),
    });
}
let tW = i.memo(function (e) {
    let t = (0, E.bG)([ec.A], () => (null != e.questId ? ec.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(e3.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === Z.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(tV, { ...e, quest: s, impressionRef: t }),
          });
});
function tG(e) {
    let { quest: t } = e,
        { useNewTile: s } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: eq.x3,
        children: (0, r.jsxs)("div", {
            className: eq.B0,
            children: [
                (0, r.jsx)(v.D, {
                    className: eq.R_,
                    variant: "heading-md/semibold",
                    children: ev.intl.string(ev.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(tW, {
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
var tK = s(97808),
    tz = s(778712),
    t$ = s(87664),
    tY = s(427262),
    tJ = s(198525),
    tX = s(436352);
let tZ = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([tL.default], () => tL.default.getCurrentUser()),
        u = tY.Ay.useName(a),
        c = (0, t$.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(tJ.A, {
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
                (0, r.jsx)(v.D, {
                    className: tX.R_,
                    variant: "heading-md/semibold",
                    children: ev.intl.string(ev.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: tX.$Q, children: ev.intl.string(ev.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: tX.k0,
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
                                className: o()(tX.Tn, { [tX.wH]: s }),
                                children: (0, r.jsx)(eN.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: tX.lm,
                                        children: [
                                            (0, r.jsx)(tK.eu, {
                                                size: tz._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: eb.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: tX.Fj,
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: ev.intl.string(ev.t.b9w3bO),
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
function t0(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, E.bG)([ec.A], () => ec.A.getQuest(t));
    if (null != (0, E.bG)([ec.A], () => ec.A.getFetchQuestPreviewError(t)) || null == n) return null;
    let l = (e) => null == s || 0 === s.length || s.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eG, { quest: n }), (0, r.jsx)(eD, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tG, { quest: n }), (0, r.jsx)(eD, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eJ, { questId: n.id }), (0, r.jsx)(eD, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ez, { quest: n }), (0, r.jsx)(eD, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tZ, { quest: n }), (0, r.jsx)(eD, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ew, { quest: n }), (0, r.jsx)(eD, {})] }),
        ],
    });
}
var t1 = s(71099);
function t2(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: a } = e,
        u = [
            { value: "quest_bar", label: ev.intl.string(ev.t.rjVPdM) },
            { value: "share_embed", label: ev.intl.string(ev.t["D/gSWS"]) },
            { value: "home_card", label: ev.intl.string(ev.t["5wnpF3"]) },
            { value: "channel_call_header", label: ev.intl.string(ev.t.gWinpQ) },
            { value: "members_list", label: ev.intl.string(ev.t.wpYima) },
            { value: "activity_panel", label: ev.intl.string(ev.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(ey.Ip, {
        className: o()(t1.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: t1.qE,
            children: [
                (0, r.jsx)(v.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ev.intl.string(ev.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: t1.pf, children: l }),
                (0, r.jsxs)(eU.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(eU.V.Item, { id: "all", children: ev.intl.string(ev.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(eU.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: t1.tZ, children: (0, r.jsx)("div", { className: t1.Qs, children: t }) }),
            ],
        }),
    });
}
let t8 = function (e) {
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
    return (0, r.jsx)(t2, {
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
        children: o?.id != null ? (0, r.jsx)(t0, { questId: o?.id, selectedSections: c }) : null,
    });
};
var t7 = s(203879),
    t4 = s(403362),
    t3 = s(167417),
    t6 = s(783977),
    t5 = s(651892),
    t9 = s(305866),
    se = s(915089),
    st = s(144682);
function ss(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(C.E, { className: st.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let sn = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, se.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(eh.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(t9.l, { className: st.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var sl = s(315899);
let sr = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, er.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(sn, {
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
                                    t > 0 && (0, r.jsx)("hr", { className: sl.B }),
                                    (0, r.jsx)(ss, { id: a, children: e.heading }),
                                    (0, r.jsx)(t3.$, {
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
                    (0, r.jsx)("hr", { className: sl.B }),
                    (0, r.jsx)("div", {
                        className: sl.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: ev.intl.string(ev.t.VkKicb),
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
                text: ev.intl.formatToPlainString(ev.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: t6.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var si = s(773812),
    sa = s(715482);
let so = function (e) {
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
    return (0, r.jsx)(sn, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ss, { id: t, children: ev.intl.string(ev.t.tZXJIS) }),
                    (0, r.jsx)(si.z, {
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
                "aria-label": ev.intl.formatToPlainString(ev.t.lPlIMo, { selected: (0, t5.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, t5.Js)(n),
                icon: sa.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var su = s(308186),
    sc = s(717421);
function sd(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, su.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, su.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var sm = s(691540),
    sE = s(857250),
    sh = s(97483);
function sx() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sm.P0)((0, sE.o)(ev.intl.string(ev.t["5ABf1w"]), sh.Ck.FAILURE)),
                $.default.track(eb.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
var sf = s(535185);
function sg(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function sj(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(sg(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sf.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var sv = s(896392);
let sC = 4 * tu.A.Millis.SECOND;
function sS(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = sj(l, s, n);
    return (0, r.jsx)("div", {
        className: sv.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let s_ = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = sx(),
        h = i.useRef(""),
        [x, f] = i.useState(null),
        [g, j] = i.useState(0),
        { useNewTile: S } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: _ }, N] = (0, sc.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sC },
        })),
        p = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, tQ.vc)(e, s, n);
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
        ? (0, r.jsx)(ef.y, { className: sv.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sv.y7,
                children: [
                    (0, r.jsx)(v.D, {
                        variant: "heading-xl/semibold",
                        children: ev.intl.string(c ? ev.t.PBfFnx : ev.t.NqFP6z),
                    }),
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? ev.intl.format(ev.t.LdYS1H, { onClick: d }) : ev.intl.string(ev.t.LhD4yH),
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
                            su.animated.div,
                            {
                                className: o()({ [sv.XB]: l }),
                                style: sd(l, i, _),
                                children: [
                                    l && (0, r.jsx)("div", { className: sv.E4 }, g),
                                    S
                                        ? (0, r.jsx)(tW, {
                                              quest: t,
                                              questContent: Z.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sv.d,
                                              sourceQuestContent: Z.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eX.Ay, {
                                              quest: t,
                                              questContent: Z.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sv.d,
                                              sourceQuestContent: Z.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sN = s(458518),
    sp = s(346054);
let sT = [],
    sA = er.L1.SORT,
    sO = er.L1.FILTER,
    sb = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, sN.o)()),
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
                    (e = c.get(sA)),
                    ((0, X.uJ)(e) ? null : (Object.values(t_.kL).find((t) => t === e) ?? null)) ?? t_.kL.SUGGESTED
                );
            }, [c]),
            E = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, X.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, t_.WQ)(e))
                            .filter(t4.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(sO)) ?? sT,
                [c],
            ),
            h = i.useCallback(
                (e) => {
                    d({ [sA]: e });
                },
                [d],
            ),
            x = i.useCallback(
                (e) => {
                    d({
                        [sO]:
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
                quests: f,
                excludedQuests: g,
                isFetchingCurrentQuests: j,
                hasFetched: C,
            } = (0, er.Qh)(
                er.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: E, removeExpiredQuests: !0 }), [m, E]),
            ),
            S = i.useCallback(() => {
                x(sT);
            }, [x]),
            _ = i.useRef(null),
            N = i.useRef(null),
            p = (0, u.zy)(),
            T = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== p.hash &&
                    null != _.current &&
                    null != N.current &&
                    (m !== _.current || E !== N.current) &&
                    T.replace({ ...p, hash: void 0 });
            }, [m, E, p, T]),
            i.useEffect(() => {
                _.current = m;
            }, [m]),
            i.useEffect(() => {
                N.current = E;
            }, [E]),
            (0, er.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: f.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        S(),
                            h(t_.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [S, h],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: sp.Mj,
                        children: [
                            (0, r.jsx)(v.D, { variant: "heading-lg/medium", children: ev.intl.string(ev.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sp.Nf,
                                children: [
                                    (0, r.jsx)(so, { onChange: h, optionClassName: sp.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(sr, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(s_, {
                        ref: o,
                        quests: f,
                        excludedQuests: g,
                        isFetching: j,
                        hasFetched: C,
                        hasFiltersApplied: E.length > 0,
                        onClearFilters: S,
                    }),
                ],
            })
        );
    });
var sI = s(575593),
    sR = s(440703),
    sM = s(462887),
    sL = s(187322),
    sQ = s(765671),
    sy = s(736653),
    sU = s(162232),
    sH = s(734736),
    sD = s(303136),
    sF = s(243090),
    sq = s(181713);
let sw = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sq.A : sq.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sF.k, t),
        children: s
            ? (0, r.jsx)(sD.A, {
                  preload: "auto",
                  className: sF.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sF.L, src: l, alt: n }),
    });
};
var sP = s(57718),
    sk = s(264305);
let sB = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        x = (0, E.bG)([tL.default], () => tL.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, sQ.Ay)(),
        j = (0, sy.Ay)(),
        S = (0, er.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        _ = t.userStatus?.claimedTier ?? 0,
        N = t.config.rewards[_],
        p = N?.type === sR.l.FRACTIONAL_PREMIUM,
        T = N?.type === sR.l.COLLECTIBLE,
        A = N?.type === sR.l.VIRTUAL_CURRENCY,
        O = N?.collectibleProduct?.items?.[0],
        b = O?.type === sI.R.AVATAR_DECORATION ? O : null,
        I = i.useMemo(
            () =>
                null == N
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? ev.intl.format(ev.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : N.name,
            [N, A, t],
        );
    (0, sQ.i4)(d, (e) => {
        let { height: t } = e;
        if (!T || null == t || null == m.current || null == d.current || null == h.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let R = (0, sM.M)(j),
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
        : (0, r.jsx)(sL.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: F,
                  onBlur: q,
                  onMouseEnter: F,
                  onMouseLeave: q,
                  className: o()(sk.kL, { [sk.yo]: s }),
                  children: [
                      null != x &&
                          T &&
                          null != b &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: sk.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sU.A, {
                                  avatarDecorationOverride: b,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      p
                          ? (0, r.jsx)(sH.A, { className: sk.Sl })
                          : A
                            ? (0, r.jsx)(sw, {
                                  className: sk.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : L.isAnimated
                              ? (0, r.jsx)(y.A, {
                                    className: sk.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: L.url,
                                        type: L.mimetype ?? void 0,
                                        onError: () => w(L.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sk.Sl,
                                    src: L.url,
                                    alt: t.config.messages.questName,
                                    onError: () => w(L.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sk.Lw, { [sk.en]: R, [sk.So]: !R }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sk.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sP.Ay, {
                              logotypeClassName: o()(sk.wm, { [sk.A0]: M }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: sk.zH,
                          children: [
                              (0, r.jsx)(v.D, {
                                  className: sk.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: ev.intl.format(ev.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(C.E, {
                                  variant: "text-sm/medium",
                                  color: R ? "text-muted" : "always-white",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: ev.intl.format(ev.t["kXVcV+"], { reward: I, claimedDate: S }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sV = s(396478);
function sW(e) {
    let { onClick: t } = e,
        n = (0, sy.Ay)();
    return (0, r.jsxs)(sV.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sV.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sV.SG, { note: ev.intl.format(ev.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sG = s(723648);
function sK(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, er.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(ef.y, { className: sG.u })
        : 0 === n.length
          ? (0, r.jsx)(sW, { onClick: () => t(er.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sG.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sB, { quest: e }, e.id)),
            });
}
var sz = s(548411),
    s$ = s(554830),
    sY = s(689175),
    sJ =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        l);
let sX = [
    { type: "featured-quests", identifier: "featured", title: ev.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: ev.t.PRg3qh },
    { type: "quests", identifier: "orb", title: ev.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: ev.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: ev.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: ev.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: ev.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function sZ(e) {
    return eS.A.space.SPACE_XL.resolve({ density: e });
}
let s0 = (e, t) => (1220 - 2 * sZ(e) * (t ? 2 : 0.75)) / 3;
var s1 = s(227171);
let s2 = "data-scroll-target",
    s8 = `[${s2}]`,
    s7 = { anchors: [], pageSize: 1 },
    s4 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function s3(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let s6 = i.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = s8,
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
            [j, v] = i.useState(!1),
            [C, S] = i.useState(!0),
            [_, N] = i.useState([]),
            [p, A] = i.useState(1),
            O = (0, E.bG)([T.Ay], () => T.Ay.useReducedMotion) ? "auto" : "smooth",
            b = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (g(e.scrollLeft > 0), v(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
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
                if (null == x.current || x.current?.clientWidth === 0) return S(!0);
                S(x.current?.clientWidth >= 1260);
            }, [x]),
            M = i.useCallback(
                (e) => {
                    let t = d.current?.getScrollerNode();
                    if (null == t || _.length < 2) return;
                    let { currentIndex: s, scrollLefts: n } = s3(t, _),
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
                let { currentIndex: t } = s3(e, _),
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
                        o = null == a ? null : a.matches(s4) ? a : a.querySelector(s4);
                    null != o && (o.focus({ preventScroll: !0 }), e.repeat && L(a, "instant"));
                },
                [n, L],
            ),
            H = i.useCallback(() => {
                b(), I(), R();
            }, [b, I, R]);
        (0, sf.g)(x, H, [], { fireOnMount: !0 });
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
            className: o()(s, s1.m7),
            ref: x,
            style: F,
            children: [
                (0, r.jsx)("div", {
                    className: o()(s1.k9, s1.RW, { [s1.Q2]: f }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(em.K, {
                        icon: sz.Z,
                        variant: "overlay-secondary",
                        onClick: () => M(-1),
                        disabled: !f,
                        "aria-label": ev.intl.string(ev.t.vgfxaA),
                        tabIndex: -1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(s1.k9, s1.K3, { [s1.Q2]: j }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(em.K, {
                        icon: s$.K,
                        variant: "overlay-secondary",
                        onClick: () => M(1),
                        disabled: !j,
                        tabIndex: -1,
                        "aria-label": ev.intl.string(ev.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [s1.sF]: f && C, [s1.RC]: j && C, [s1.Ni]: D && !f, [s1.GA]: D && !j }),
                    children: (0, r.jsx)(sY.zC, {
                        ref: d,
                        orientation: "horizontal",
                        onScroll: b,
                        onScrollEnd: y,
                        onFocusCapture: Q,
                        onKeyDown: U,
                        className: o()({ [s1.x2]: D }, s1.XG),
                        children: (0, r.jsxs)(e9.X.Provider, {
                            value: d,
                            children: [
                                t,
                                _.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: s1.fw, style: { insetInlineStart: `${e}px` } },
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
var s9 = s(181980);
function ne(e) {
    let { children: t, sectionIdentifier: s, questId: n, featuredSection: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: o,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(s5),
        d = a === n && o === s,
        m = null != a && (a !== n || o !== s),
        { useNewTile: E } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        h = l ? "var(--radius-lg)" : "var(--radius-sm)",
        x = i.useMemo(() => ({ ...sd(d, m, c), borderRadius: E ? h : "10px" }), [d, m, c, E, h]);
    return (0, r.jsxs)(su.animated.div, {
        [s2]: "",
        className: d ? s9.X : void 0,
        style: x,
        children: [d && (0, r.jsx)("div", { className: s9.E }, u), t],
    });
}
var nt = s(768726);
function ns(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : sg(t, 345, 20, 2)), [t]);
    return (
        i.useEffect(() => {
            null !== o && l(Math.ceil(s.length / o) - 1);
        }, [s.length, o, l]),
        (0, r.jsx)("div", {
            className: nt.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != o &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        ne,
                        {
                            featuredSection: !0,
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      tW,
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
var nn = s(638316);
function nl(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(nn.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: nn.Gf, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: nn.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(nn.Nr, nn.Vr) }, t),
                ),
            }),
        ],
    });
}
var nr = s(418842),
    ni = s(561844),
    na = s(670044);
function no(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(s5),
        { useNewTile: o } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = es.Mk.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        c = (0, nr.C)(),
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
                (0, ni.kO)({
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
    return (0, r.jsx)(s6, {
        maskWidth: sZ(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${s0(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: na.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        ne,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(tW, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: na.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(eX.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === sJ.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: na.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: na.fu }),
            ],
        }),
    });
}
var nu = s(958538);
let nc = tu.A.Millis.WEEK;
function nd() {
    let e = ec.A.quests;
    if (0 === ec.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tQ.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class nm extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(ec.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - nc;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([ec.A], nd), t;
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
let nE = new nm(eo.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            if (null == ec.A.getQuest(e.questId)) return !1;
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    nh = 2 * tu.A.Millis.DAY,
    nx = new Map(sX.map((e) => [e.identifier, e])),
    nf = {
        [sJ.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function ng(e, t) {
    let s = nx.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
function nj(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
var nv = s(974064);
let nC = {
        [sJ.FEATURED]: Z.uF.QUEST_HOME_FEATURED_SECTION,
        [sJ.IN_PROGRESS]: Z.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [sJ.ENDING_SOON]: Z.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [sJ.ORB]: Z.uF.QUEST_HOME_ORB_SECTION,
        [sJ.DISCOVERED]: Z.uF.QUEST_HOME_DISCOVERED_SECTION,
        [sJ.EXPIRED]: Z.uF.QUEST_HOME_EXPIRED_SECTION,
        [sJ.PREVIEW]: Z.uF.QUEST_HOME_PREVIEW_SECTION,
    },
    nS = 4 * tu.A.Millis.SECOND,
    n_ = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: a = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
            {
                sections: d,
                isFetchingCurrentQuests: m,
                getSectionIdentifierForTargetedQuest: h,
            } = (() => {
                let e = (0, tY.Gn)(),
                    t = (0, er.Cv)(),
                    s = (0, E.bG)([ec.A], () => ec.A.lastFetchedCurrentQuests > 0),
                    { quests: n, isFetchingCurrentQuests: l } = (0, er.Qh)(er.NC.ALL, {
                        sortMethod: t_.kL.SUGGESTED,
                        filters: [],
                        removeExpiredQuests: !e,
                    }),
                    r = (0, nu.A)(
                        () =>
                            n.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        n.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        nj,
                    ),
                    a = (0, ea.T2)(),
                    o = (0, E.bG)([nE], () => nE.getDiscoveredAtByQuestId(), []),
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
                                              return (0, tQ.kd)(t) && !c
                                                  ? r
                                                      ? [sJ.EXPIRED]
                                                      : null
                                                  : (n.has(t.id) && u.push(sJ.DISCOVERED),
                                                      i && !0 === o && u.push(sJ.PREVIEW),
                                                      null != a && null != a.enrolledAt && null == a.claimedAt)
                                                    ? [...u, sJ.IN_PROGRESS]
                                                    : null != s && (0, e7.I0)(s, t.id) && ng(sJ.FEATURED, l)
                                                      ? [...u, sJ.FEATURED]
                                                      : new Date(t.expiresAt).valueOf() <= Date.now() + nh
                                                        ? [...u, sJ.ENDING_SOON]
                                                        : ng(sJ.FEATURED, l)
                                                          ? [...u, sJ.FEATURED]
                                                          : (0, ty.ks)(t)
                                                            ? [...u, sJ.ORB]
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
                                          sX
                                              .map((e) => {
                                                  let t = nf?.[e.identifier];
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
            { showToast: f } = sx(),
            [g, j] = i.useState(null),
            [S, _] = i.useState(null),
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
        (0, sf.g)(x, R, [R], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: M }, L] = (0, sc.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nS },
            })),
            Q = i.useCallback(
                (e, t) => {
                    if (null == e || null == T || m || n) return !1;
                    t && (0, eu.sB)(e);
                    let s = h(e),
                        l = !0 === t ? sJ.DISCOVERED : s;
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
                    targetSectionIdentifier: S,
                    highlightCount: N,
                    highlightAnimationProgress: M,
                }),
                [g, S, N, M],
            ),
            U = i.useMemo(
                () =>
                    d.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sJ.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(s5.Provider, {
            value: y,
            children: (0, r.jsx)("div", {
                className: o()(nv.kL, l, { [nv.Sy]: !a }),
                ref: x,
                children: m
                    ? (0, r.jsx)(nl, { role: "status", "aria-label": ev.intl.string(ev.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: nv.p9,
                                    children: [
                                        (0, r.jsx)(v.D, {
                                            variant: "heading-lg/semibold",
                                            className: nv.Gf,
                                            children: ev.intl.string(l),
                                        }),
                                        s === sJ.FEATURED && u && c
                                            ? (0, r.jsx)(ns, {
                                                  questIds: n,
                                                  setMaxRowIndex: b,
                                                  containerWidth: T,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(no, {
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
                            className: nv.y7,
                            children: [
                                (0, r.jsx)(v.D, {
                                    variant: "heading-xl/semibold",
                                    children: ev.intl.string(ev.t.NqFP6z),
                                }),
                                (0, r.jsx)(C.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: ev.intl.string(ev.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var nN = s(353640),
    np = s(121894),
    nT = s(851936);
let nA = (0, nN.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, nT.L)({ location: t_.rE.QUEST_HOME_DESKTOP });
        if (s.info === eM.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, np.r)(() => e(l));
    },
}));
var nO = s(516226),
    nb = s(323889),
    nI = s(901406),
    nR = s(139384),
    nM = s(770178),
    nL = s(789145);
function nQ(e, t) {
    let { row_index: s, ...n } = (0, ei.fF)(Z.uF.QUEST_HOME_HERO);
    (0, ni.Qg)({
        adContentId: e,
        adCreativeType: nb.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: Z.uF.QUEST_HOME_HERO,
    });
}
let ny = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, E] = i.useState("display-lg"),
        h = i.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, nM.w)(h, [], { fireOnMount: !0 }),
        f = i.useCallback(() => nQ(s, eb.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => nQ(s, eb.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(tg.N, {
        theme: eb.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(nL.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: g,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nL.FG,
                    children: [
                        (0, r.jsxs)(_.B, {
                            className: nL.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(_.B, {
                                    className: nL.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(_.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(v.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nL.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(C.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nL.VA,
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
var nU = s(194526),
    nH = s(731355),
    nD = s(621466),
    nF = s(508770),
    nq = s(406810),
    nw = s(628284),
    nP = s(65154),
    nk = s(975807),
    nB = s(58703),
    nV = s(18437),
    nW = s(398025),
    nG = s(812104);
function nK(e) {
    let [t, s] = i.useState(!1),
        n = i.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nz(e) {
    let { hero: t, contentPosition: s } = e,
        n = i.useRef(null),
        { isHovering: l, hoverProps: a } = nK(
            i.useCallback(
                (e) => {
                    (0, ni.Qg)({
                        adContentId: t.id,
                        adCreativeType: nb.p.QUEST_HOME_HERO,
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
        (0, nD.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eM.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: u } = (0, sc.z)({ hoverSpring: +!!l, config: su.config.gentle }),
        c = i.useCallback(() => {
            (0, nk.A)(t.cta.url),
                (0, ni.vK)({
                    adContentId: t.id,
                    adCreativeType: nb.p.QUEST_HOME_HERO,
                    questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: ei.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(eN.D, {
        tag: "div",
        className: o()(nG.FW, nG.Bm),
        onClick: c,
        "aria-label": t.cta.buttonLabel,
        [s2]: !0,
        ...a,
        children: [
            (0, r.jsx)("div", {
                className: nG.Ve,
                children: (0, r.jsx)(e4.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(nG.pv, nG.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(nG.pv, nG.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(su.animated.div, {
                className: nG.hn,
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
function n$(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: m } = (0, to.A)(a, tu.A.Millis.MINUTE),
        h = i.useMemo(
            () =>
                (0, nB.uN)(
                    { days: u, hours: c, minutes: d, seconds: m },
                    { days: ev.t["Ux/De1"], hours: ev.t.Lzd5Ie, minutes: ev.t.odmpbP },
                ),
            [u, c, d, m],
        ),
        x = (0, E.bG)([tL.default], () => tL.default.getCurrentUser()),
        f = i.useMemo(() => (0, ty.mq)(s.config, x), [s.config, x]),
        j = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, t5.xv)(e).type) {
                        case sR.l.IN_GAME:
                            return ev.intl.string(ev.t["O/J2kr"]);
                        case sR.l.COLLECTIBLE:
                            return ev.intl.string(ev.t.Jg17Ut);
                        case sR.l.VIRTUAL_CURRENCY:
                            return ev.intl.string(ev.t.ElYQFS);
                        default:
                            return (0, ty.mq)(e, t);
                    }
                })(s.config, x),
            [s.config, x],
        ),
        { completedRatio: v, completedRatioDisplay: S } = (0, er.O9)(s),
        N = i.useMemo(() => (0, ty.wo)(s.config, x), [s.config, x]),
        p = (0, nV.tG)(),
        T = (0, nV.WS)(),
        b = (0, e8.go)(),
        { isHovering: I, hoverProps: R } = nK(
            i.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: nb.p.QUEST_HOME_HERO,
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
        { hoverSpring: M } = (0, sc.z)({ hoverSpring: +!!I, config: su.config.gentle }),
        L = i.useCallback(() => {
            n(s.id),
                (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, A.r)({
                          type: O.F.CLICK_INTERNAL,
                          adCreativeType: nb.p.QUEST_HOME_HERO,
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
                          adCreativeType: nb.p.QUEST_HOME_HERO,
                          questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: ei.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, p, l, b]);
    return (0, r.jsxs)(eN.D, {
        tag: "div",
        className: o()(nG.FW, nG.$R),
        onClick: L,
        "aria-label": ev.intl.string(ev.t["th2+0j"]),
        [s2]: !0,
        ...R,
        children: [
            (0, r.jsxs)(_.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nF.E, { type: { text: j } }),
                    (0, r.jsx)(su.animated.div, {
                        style: { opacity: (0, nW.a)(M.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nF.E, { type: { text: h }, icon: nq.O }),
                    }),
                ],
            }),
            (0, r.jsx)(su.animated.div, {
                className: nG.Tr,
                style: { transform: M.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tU.A, {
                    percentComplete: v,
                    overlayText: I && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tH.A, {
                        quest: s,
                        questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: I,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(su.animated.div, {
                className: nG.tw,
                style: {
                    opacity: (0, nW.a)(M.to([0, 1], [1, 0])),
                    transform: M.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(_.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nG.Ht,
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
                                        (0, r.jsx)(nw.y, { size: "xs", color: eS.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(C.E, {
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
                                        (0, e7.pv)(s.config) === nH.Z.VIDEO
                                            ? (0, r.jsx)(nP.S, { size: "xs", color: eS.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(ts._, { size: "xs", color: eS.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: S,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(su.animated.div, {
                className: nG.um,
                style: { transform: M.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), L();
                    },
                    text: ev.intl.string(ev.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var nY = s(311963);
function nJ(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e,
        l = (0, nr.C)();
    return (0, r.jsx)(s6, {
        className: nY.v,
        overflowAmount: 25,
        maskWidth: sZ(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsxs)(_.B, {
            className: nY.I,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            children: [
                (0, r.jsx)(e3.R, {
                    adContentId: t.id,
                    adCreativeType: nb.p.QUEST_HOME_HERO,
                    questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nz, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, s) =>
                    (0, r.jsx)(
                        e3.R,
                        {
                            adContentId: t.id,
                            adCreativeType: nb.p.QUEST_HOME_HERO,
                            questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: s + 1,
                            sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                            children: (l) =>
                                (0, r.jsx)("div", {
                                    ref: (e) => {
                                        l.current = e;
                                    },
                                    children: (0, r.jsx)(n$, {
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
var nX = s(375179);
function nZ() {
    return (0, r.jsx)("div", { className: nX.Np });
}
function n0(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, nR.A)(n, t_.rE.QUEST_HOME_DESKTOP);
    let l = i.useMemo(() => (null != s ? (0, e2.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, r.jsxs)("div", {
              className: nX.Tv,
              children: [
                  (0, r.jsx)(nZ, {}),
                  (0, r.jsx)("div", {
                      className: nX.LO,
                      children: (0, r.jsx)("img", { className: nX.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nX.LO, nX.jx, nX.hw),
                      children: (0, r.jsx)("img", { className: nX.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nX.LO, nX.jx, nX.Co),
                      children: (0, r.jsx)("img", { className: nX.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: nX.Tv,
              children: [
                  (0, r.jsx)(nZ, {}),
                  (0, r.jsx)("div", {
                      className: nX.LO,
                      children: (0, r.jsx)(e4.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: n,
                          imageAsset: {
                              alt: "",
                              className: nX.LY,
                              asset: { url: l, mimetype: (0, e2.vm)(l), isAnimated: !1 },
                              assetId: l,
                          },
                          videoAsset: {
                              alt: "",
                              className: nX.LY,
                              asset: { url: s, mimetype: (0, e2.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function n1(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        n = (0, E.bG)([ec.A], () => ec.A.quests),
        { shelfQuests: l, isShelfEnabled: a } = (0, er.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, nU.I)();
    i.useEffect(() => {
        o();
    }, [o]);
    let u = i.useMemo(() => t.questIds?.find((e) => n.has(e)), [n, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e3.R, {
                adContentId: t.id,
                adCreativeType: nb.p.QUEST_HOME_HERO,
                questContent: Z.uF.QUEST_HOME_HERO,
                sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(ny, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, r.jsxs)(_.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, r.jsx)("img", { src: t.sponsorImage, alt: "", className: nX.wm }),
                                (0, r.jsx)(C.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nX.yu,
                                    children: ev.intl.string(ev.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, r.jsxs)(f.e, {
                            children: [
                                (0, r.jsx)(g.$, {
                                    onClick: () => {
                                        (0, nI._Q)(
                                            { adContentId: t.id, adCreativeType: nb.p.QUEST_HOME_HERO, cta: t.cta },
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
                                                          adCreativeType: nb.p.QUEST_HOME_HERO,
                                                          adCreativeId: t.id,
                                                          questContentCTA: ei.Cy.VIEW_QUESTS,
                                                          surfaceId: Z.uF.QUEST_HOME_HERO,
                                                          sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                                      })
                                                    : (0, ni.vK)({
                                                          adContentId: t.id,
                                                          adCreativeType: nb.p.QUEST_HOME_HERO,
                                                          questContent: Z.uF.QUEST_HOME_HERO,
                                                          questContentCTA: ei.Cy.VIEW_QUESTS,
                                                          sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                                      });
                                        },
                                        size: "md",
                                        text: ev.intl.string(ev.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, r.jsx)(n0, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            a && (0, r.jsx)(nJ, { hero: t, shelfQuests: l, onQuestCtaClick: s }),
        ],
    });
}
function n2() {
    return (0, r.jsx)("div", { className: o()(nL.iE, nL.FG, nL.B3), children: (0, r.jsx)(ef.y, {}) });
}
var n8 = s(862287),
    n7 = s(604880),
    n4 = s(318808);
function n3(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, tS.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: n8.MY,
        children: [
            (0, r.jsx)("img", { className: n8.Bg, src: n4.Ay, alt: "" }),
            (0, r.jsx)("div", { className: n8.r$, children: (0, r.jsx)("img", { src: n7, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: n8.Nr,
                children: [
                    (0, r.jsx)(v.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: n8.ky,
                        children: ev.intl.string(ev.t.GXmn57),
                    }),
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        className: n8.G3,
                        children: ev.intl.string(ev.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: ev.intl.string(ev.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function n6(e) {
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
var n5 = s(827625);
let n9 = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, nr.C)(),
        { useNewTile: n } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = es.Mk.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        o = l === es.d.LARGE_MASK_MARGIN,
        u = sj(a, s0(s, o), 20, 3);
    return (0, r.jsxs)(_.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: n5.kL,
        ref: a,
        children: [
            (0, r.jsxs)(v.D, {
                variant: "heading-lg/medium",
                children: [ev.intl.string(ev.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(_.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: n5.y7,
                      children: [
                          (0, r.jsx)(n6, { alt: ev.intl.string(ev.t["Xe+fJM"]) }),
                          (0, r.jsxs)(_.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(v.D, {
                                      variant: "heading-lg/medium",
                                      children: ev.intl.string(ev.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(v.D, {
                                      variant: "heading-sm/medium",
                                      children: ev.intl.string(ev.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: n5.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${s0(s, o)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== u &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        tW,
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
var le = s(111956),
    lt = s.n(le),
    ls = s(379078),
    ln = s(704554),
    ll = s(823784);
let lr = {
    searchType: ls.n.FUZZY,
    searchStringGenerator: function (e) {
        return [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(t4.Vq);
    },
    sortType: ls.r.JARO_WINKLER,
    throttleMs: 200,
};
var li = s(758836),
    la = s(613057),
    lo = s(699536);
let lu = i.createContext({});
function lc(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lu);
    return (0, r.jsxs)(e9.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(B.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(P.A, { className: lo.Jo, innerClassName: lo.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function ld(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(k.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function lm(e) {
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
function lE(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(lo.Tv, { [lo.lJ]: s }),
        children: [
            (0, r.jsx)(nZ, {}),
            (0, r.jsx)("div", { className: o()(lo.nz, { [lo.ZZ]: s }) }),
            (0, r.jsx)(lm, {
                onLoadComplete: t,
                className: o()(lo.Fe, { [lo.H4]: s, [lo.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function lh(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, G.Z)({ location: t_.rE.QUEST_HOME_DESKTOP }),
        { enabled: n } = el.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        l = s && !n,
        a = i.useCallback(() => {
            l ? window.open(eb.X7G.PAID_TERMS_ORBS) : window.open(J.A.getArticleURL(eb.MVz.QUESTS_LEARN_MORE));
        }, [l]);
    return (0, r.jsx)(ny, {
        adContentId: l ? t_.yr : t_.uz,
        title: l ? ev.intl.format(ev.t.BCBIlp, {}) : ev.intl.format(ev.t.lmMBfy, {}),
        subtitle: l ? ev.intl.format(ev.t.U9FY0J, {}) : ev.intl.string(ev.t.oWCrBq),
        buttons: l
            ? (0, r.jsxs)(f.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: ev.intl.string(ev.t["1Wm127"]),
                          onClick: () =>
                              (0, L.Cz)({
                                  tab: li.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: b.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: ev.intl.string(ev.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: ev.intl.string(ev.t.hvVgAZ),
                  onClick: a,
                  icon: j.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lE, { onAssetLoad: t, isVirtualCurrencyEnabled: l }),
    });
}
function lx(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e;
    return (0, r.jsx)("div", {
        className: o()(lo.iS, { [lo.R]: i }),
        children: l
            ? (0, r.jsx)(n2, {})
            : null != n
              ? (0, r.jsx)(n1, { hero: n, onQuestCtaClick: s })
              : (0, r.jsx)(lh, { onAssetLoad: t }),
    });
}
function lf(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: o()(lo.BW, lo.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: o()(lo.BW, lo.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: o()(lo.BW, lo.rZ),
                alt: "",
            }),
        ],
    });
}
let lg = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => (0, V.B)(s.pathname, eb.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
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
                { enabled: r } = es.A8.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
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
                            { id: er.NC.ALL, label: o ? ev.intl.string(ev.t.Jt6u7B) : ev.intl.string(ev.t["0SzXmi"]) },
                            t
                                ? {
                                      id: er.NC.CLAIMED,
                                      label: o ? ev.intl.string(ev.t["3TVY/R"]) : ev.intl.string(ev.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: er.NC.PREVIEW_TOOL, label: ev.intl.string(ev.t.BDUDau) } : null,
                        ].filter(t4.Vq),
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
                    (0, er.mn)(Array.from(ec.A.quests.values()), { sortMethod: t_.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                a = "" !== r,
                o = i.useMemo(() => lt()(ni.gr, 1e3), []),
                u = i.useCallback(() => {
                    o.cancel();
                    let e = (0, ll.tv)();
                    null != e &&
                        (0, ni.XH)({
                            searchSessionId: e.uuid,
                            searchSessionDurationMs: Date.now() - e.createdAtTimestamp,
                        }),
                        (0, ll.l6)();
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
                                      .filter(t4.Vq)
                                : null,
                        ),
                        a)
                    ) {
                        let { searchSession: t, isNew: s } = (0, ll.$N)();
                        s && (0, ni.OQ)({ searchSessionId: t.uuid }),
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
            return (0, ln.RT)(r, l, d, lr), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c };
        })();
    i.useLayoutEffect(() => {
        l && j === er.NC.CLAIMED && ee.A.setState({ tab: er.NC.ALL });
    }, [l, j]);
    let { onScroll: B } = (0, q.G)(),
        z = et.A.getState().getUtmCurrentContext(),
        Y = nA((e) => e.registerAssetLoad),
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
    let { enabled: el } = (0, G.Z)({ location: t_.rE.QUEST_HOME_DESKTOP });
    (0, Q.HU)({ location: ev.intl.string(ev.t.JALI2K) });
    let eo = i.useRef(null),
        { enabled: eu, variant: ed } = es.A8.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: em } = es.aD.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        eE = eu || em,
        eh = (eu && ed === es.zY.NEW_LAYOUT_WITH_SEARCH) || em,
        ex = i.useRef(null),
        ef = i.useCallback((e) => {
            ex.current?.scrollToQuest(e);
        }, []),
        eg = i.useMemo(() => ((0, X.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: ej, isLoading: eC } = (0, ea.lg)(a[0] ?? null),
        eS = i.useCallback(() => {
            (0, W.Y)({
                pageType: eb.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eb.JJy.ORBS_BALANCE_MENU,
                ctaObject: eb.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, L.Cz)({ tab: li.G2.ORBS, analyticsLocations: [], analyticsSource: b.A.ORBS_BALANCE_MENU });
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
                    type: la.XK.QUEST_PREVIEW_TOOL,
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
                    type: la.XK.QUEST_HOME,
                    params: { questId: (0, X.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, f, n.action, s.hash, t, x]),
        i.useEffect(() => {
            t && (0, U.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let e_ = i.useCallback(() => {
            (0, tS.navigateToQuestHome)({ fromContent: Z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
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
        eA = i.useMemo(() => ({ onScroll: B, scrollerRef: eo }), [B, eo]),
        eO = (0, es.Qj)() && 0 === a.length;
    return x
        ? (0, r.jsx)(n3, { adCreativeIds: a })
        : (0, r.jsx)(nO.M.Provider, {
              value: eT,
              children: (0, r.jsx)(lu.Provider, {
                  value: eA,
                  children: (0, r.jsx)("div", {
                      className: o()(lo.kL, { [lo.KY]: !t }),
                      children: l
                          ? (0, r.jsx)(lc, {
                                withFullBleedBanner: !0,
                                header: (0, r.jsx)(ld, { selectedTab: j, onSelectTab: eN, tabs: y }),
                                banner: (0, r.jsx)(w.A, {
                                    title: ev.intl.string(ev.t.z8YP2A),
                                    titleColor: "always-white",
                                    button: (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: ev.intl.string(ev.t.GURBQl),
                                        onClick: e_,
                                    }),
                                    className: lo.Gj,
                                    children: (0, r.jsx)(lf, { onLoadComplete: Y }),
                                }),
                                children: (0, r.jsxs)("div", {
                                    className: lo.kj,
                                    children: [
                                        (0, r.jsx)(v.D, {
                                            variant: "heading-xl/semibold",
                                            children: ev.intl.string(ev.t.z8YP2A),
                                        }),
                                        (0, r.jsx)(C.E, {
                                            color: "text-subtle",
                                            variant: "text-md/normal",
                                            children: ev.intl.string(ev.t.HdKh65),
                                        }),
                                        (0, r.jsx)(S.Q, {
                                            text: ev.intl.string(ev.t["1CdL8d"]),
                                            onClick: e_,
                                            textVariant: "text-md/normal",
                                            variant: "primary",
                                        }),
                                    ],
                                }),
                            })
                          : (0, r.jsxs)(lc, {
                                header: (0, r.jsx)(ld, {
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
                                                    placeholder: ev.intl.string(ev.t.y10TI2),
                                                    onClear: k,
                                                    size: "sm",
                                                }),
                                            el &&
                                                (0, r.jsx)(K.SS, {
                                                    analyticsPage: eb.liQ.GLOBAL_DISCOVERY_QUESTS,
                                                    cardAlignment: K.cP.END,
                                                    ctaText: ev.intl.string(ev.t["J+vlIR"]),
                                                    ctaOnClick: eS,
                                                }),
                                        ],
                                    }),
                                }),
                                banner:
                                    j === er.NC.ALL &&
                                    !eO &&
                                    (0, r.jsx)(lx, {
                                        onAssetLoad: Y,
                                        onQuestCtaClick: ef,
                                        hasSearchResults: ep,
                                        questHomeHero: ej,
                                        isLoadingQuestHomeHero: eC,
                                    }),
                                children: [
                                    ep && null != P && (0, r.jsx)(n9, { matchingQuestIds: P }),
                                    j === er.NC.CLAIMED
                                        ? (0, r.jsx)(sK, { onSelectTab: eN, className: ep ? lo.R : void 0 })
                                        : j === er.NC.PREVIEW_TOOL
                                          ? (0, r.jsx)(t8, { className: ep ? lo.R : void 0 })
                                          : eE
                                            ? (0, r.jsx)(n_, {
                                                  className: ep ? lo.R : void 0,
                                                  ref: ex,
                                                  deepLinkedQuestId: eg,
                                                  isLoadingQuestHomeHero: !eO && eC,
                                                  withQuestHomeHero: !eO,
                                              })
                                            : (0, r.jsx)(sb, { ref: ex }),
                                ],
                            }),
                  }),
              }),
          });
};
