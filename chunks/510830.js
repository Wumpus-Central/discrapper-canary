let n;
s.r(t), s.d(t, { default: () => lx }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    i = s(64700),
    a = s(503698),
    o = s.n(a),
    u = s(873263),
    c = s(562708),
    d = s(607399),
    m = s(323889),
    E = s(17928),
    h = s(554146),
    x = s(577473),
    f = s(825484),
    g = s(821609),
    v = s(509434),
    j = s(331322),
    S = s(892547),
    _ = s(944791),
    C = s(775602),
    N = s(793574),
    p = s(139286),
    T = s(197111),
    A = s(10088),
    O = s(662388),
    I = s(726249),
    b = s(607470),
    R = s(826673),
    M = s(840251),
    Q = s(688151);
let L = new M.E([], Q.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var y = s(711111),
    H = s(979590),
    U = s(749638),
    D = s(783531),
    q = s(318346),
    F = s(70926),
    P = s(531685),
    k = s(676279),
    w = s(975571),
    B = s(240248),
    W = s(87549),
    G = s(192444);
let V = (0, s(945810).mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var K = s(347135),
    z = s(557637),
    $ = s(371912);
s(321073);
var Y = s(228366),
    J = s(340124),
    X = s(859703);
s(667532);
var Z = s(783878),
    ee = s(408278),
    et = s(663417),
    es = s(922016),
    en = s(624479),
    el = s(289873),
    er = s(416052),
    ei = s(417098),
    ea = s(375708);
function eo(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(ei.$T, {
        color: ei.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : ea.intl.string(ea.t.ZErSg5) }),
    });
}
var eu = s(661531),
    ec = s(602853),
    ed = s(939249),
    em = s(817281),
    eE = s(688810),
    eh = s(487245),
    ex = s(363195),
    ef = s(652215),
    eg = s(398876);
let ev = function () {
    let { analyticsLocations: e } = (0, eE.Ay)(),
        t = (0, E.bG)([ex.A], () => ex.A.theme),
        s = i.useRef(null);
    i.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, ec.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.LIGHT),
        l = (0, ec.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.DARKER),
        a = (0, ec.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.MIDNIGHT),
        o = i.useMemo(
            () => [
                { theme: ef.NJ8.LIGHT, label: ea.t.K2sFfo, color: n.hex() },
                { theme: ef.NJ8.DARKER, label: ea.t.b8Cei3, color: l.hex() },
                { theme: ef.NJ8.MIDNIGHT, label: ea.t.Do4ZJx, color: a.hex() },
            ],
            [n, l, a],
        ),
        u = i.useCallback(
            (t) => {
                (0, eh.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, em.u_)({ theme: t });
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: eg.N,
        children: (0, r.jsxs)("div", {
            className: eg.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        ed.D,
                        {
                            tag: "div",
                            className: eg.Du,
                            onClick: () => u(e.theme),
                            "aria-label": ea.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${eg.WT} ${t === e.theme ? eg.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: eg.i, children: ea.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(ee.K, {
                    onClick: c,
                    "aria-label": ea.intl.string(ea.t.yBZMsQ),
                    icon: et.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var ej = s(818348),
    eS = s(60857);
let e_ = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, K.pT)(),
        h = (0, E.bG)([X.A], () => (null != t ? X.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, E.bG)([X.A], () => null != t && X.A.isFetchingQuestPreview(t), [t]),
        v = i.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [m, t]),
        j = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, J.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, J.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = i.useCallback(async () => {
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
        C = i.useCallback(
            (e) => {
                (0, B.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: eS.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: eS.Br,
                    children: (0, r.jsxs)("div", {
                        className: eS.bo,
                        children: [
                            (0, r.jsx)(ev, {}),
                            (0, r.jsxs)("div", {
                                className: eS.b8,
                                children: [
                                    (0, r.jsx)(
                                        Z.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: C,
                                            placeholder: ea.intl.string(ea.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, B.uJ)(t?.trim())) return e;
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
                                    (0, r.jsx)(ee.K, {
                                        onClick: l,
                                        "aria-label": ea.intl.string(ea.t.wzzjk9),
                                        icon: et.f,
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
                    className: eS.in,
                    children: (0, r.jsxs)(f.e, {
                        className: eS.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ea.intl.string(ea.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ea.intl.string(ea.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ea.intl.string(ea.t.cKSLr4),
                            }),
                            (0, r.jsx)(es.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: eS.PP,
                                        children: (0, r.jsx)("div", {
                                            className: eS.sH,
                                            children: (0, r.jsx)(er.A, {
                                                value: ej.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: ea.intl.string(ea.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(ee.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": ea.intl.string(ea.t.rNGQfD),
                                        icon: en.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(eo, { error: h }) : null,
            x ? (0, r.jsx)(el.y, {}) : null,
        ],
    });
};
var eC = s(364522),
    eN = s(534514),
    ep = s(761508),
    eT = s(797788);
function eA() {
    return (0, r.jsx)("div", { className: eT.y });
}
var eO = s(684603),
    eI = s(332544);
let eb = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eI.B0,
            children: [
                (0, r.jsx)(eN.D, {
                    className: eI.R_,
                    variant: "heading-md/semibold",
                    children: ea.intl.string(ea.t.L2mlUb),
                }),
                (0, r.jsx)(eO.default, { quest: t }),
            ],
        }),
    });
};
var eR = s(242939),
    eM = s(717695),
    eQ = s(763578),
    eL = s(111113);
let ey = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.wp,
            children: [
                (0, r.jsx)(eN.D, {
                    className: eQ.Oo,
                    variant: "heading-md/semibold",
                    children: ea.intl.string(ea.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eQ.RE,
                    children: (0, r.jsx)("div", {
                        className: eQ.Z,
                        children: (0, r.jsx)("div", {
                            className: eL.C3,
                            children: (0, r.jsx)(eM.A, {
                                children: (0, r.jsx)(z.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(eR.QuestBar, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eH = s(834730),
    eU = s(527549),
    eD = s(442444);
function eq(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eI.B0,
            children: [
                (0, r.jsx)(eN.D, {
                    className: eI.R_,
                    variant: "heading-md/semibold",
                    children: ea.intl.string(ea.t.gWinpQ),
                }),
                (0, r.jsx)(eH.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children:
                        "QuestChannelCallHeader (live \u2014 branches on your experiment assignment: control = legacy UI, T1 = bar below)",
                }),
                (0, r.jsx)("div", {
                    className: eI.YT,
                    children: (0, r.jsx)(eU.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
                (0, r.jsx)(eH.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: "T1 \u2014 horizontal bar (unenrolled)",
                }),
                (0, r.jsx)("div", {
                    className: eI.YT,
                    children: (0, r.jsx)(eD.A, { quest: t, isFocused: !1, onAcceptQuest: () => {}, isEnrolling: !1 }),
                }),
            ],
        }),
    });
}
var eF = s(711038),
    eP = s(330034);
let ek = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eI.B0,
            children: [
                (0, r.jsx)(eN.D, { variant: "heading-md/semibold", children: ea.intl.string(ea.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: eP.wu,
                    children: (0, r.jsx)("span", { className: eP.cy, children: ea.intl.string(ea.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: eP.oU,
                    children: (0, r.jsx)("div", {
                        className: eP.zx,
                        children: (0, r.jsx)("div", {
                            className: eP.Lj,
                            children: (0, r.jsx)("div", {
                                className: eP.n0,
                                children: (0, r.jsx)(eF.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ew = s(24001),
    eB = s(892955),
    eW = s(173936),
    eG = s(365199),
    eV = s(743674),
    eK = s(46948),
    ez = s(590202),
    e$ = s(971649),
    eY = s(814793),
    eJ = s(415441),
    eX = s(73473),
    eZ = s(270045),
    e0 = s(79545),
    e1 = s(321503),
    e2 = s(720875),
    e4 = s(339350),
    e3 = s(687966),
    e7 = s(782134),
    e8 = s(271536),
    e6 = s(768622),
    e5 = s(793934),
    e9 = s(662940),
    te = s(496431),
    tt = s(927813);
let ts = 2 * tt.A.Millis.DAY;
var tn = s(719021);
function tl(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, e0.Pd)(t),
        l = (0, E.bG)([X.A], () => n === e0.UA.UNENROLLED && null != X.A.questEnrollmentBlockedUntil, [n]),
        a = (0, K.fc)(t),
        u = (0, K.I3)(t),
        c = i.useMemo(() => (0, e9.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, e9.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, e0.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case e0.UA.UNENROLLED:
                            case e0.UA.ENROLLED:
                            case e0.UA.INCOMPLETE:
                                return !0;
                            case e0.UA.COMPLETED:
                            case e0.UA.CLAIMED:
                            case e0.UA.EXPIRED:
                            case e0.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < ts &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, te.A)(n, tt.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(tn.fC, { [tn.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: tn.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(eH.E, {
                            variant: "text-xs/semibold",
                            className: tn.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(eH.E, {
                            variant: "text-xs/semibold",
                            color: "text-overlay-light",
                            className: tn.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: tn.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: tn.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(e4.Q, { ...s });
                                    switch ((0, e9.pv)(e)) {
                                        case e9.UK.PLAY:
                                            return (0, r.jsx)(e3._, { ...s });
                                        case e9.UK.WATCH:
                                            return (0, r.jsx)(e7.u, { ...s });
                                        case e9.UK.ACTIVITY:
                                            return (0, r.jsx)(e8.q, { ...s });
                                        case e9.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(e6.g, { ...s });
                                        case e9.UK.ARENA:
                                            return (0, r.jsx)(e5.q, { ...s });
                                    }
                                })(t, l),
                                (0, r.jsx)(eH.E, {
                                    variant: "text-xs/semibold",
                                    tag: "span",
                                    color: "text-overlay-light",
                                    children: d,
                                }),
                            ],
                        }),
                ],
            }),
            t.preview &&
                (0, r.jsx)("div", {
                    className: o()(tn.qS, tn.WZ),
                    children: (0, r.jsx)(eH.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: ea.intl.string(ea.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var tr = s(409626),
    ti = s(3738),
    ta = s(646917),
    to = s(990078),
    tu = s(43990),
    tc = s(743368),
    td = s(792620),
    tm = s(368715),
    tE = s(617986),
    th = s(190107),
    tx = s(919500);
function tf(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, e0.Pd)(t),
        { ctaOnHover: u } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        c = (0, E.bG)([X.A], () => a === e0.UA.UNENROLLED && null != X.A.questEnrollmentBlockedUntil, [a]),
        d = a === e0.UA.EXPIRED || (a === e0.UA.CLAIMED && (0, td.GL)(t)),
        m = (0, K.do)({ quest: t, content: s, ctaContent: ez.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tx.lO, { [tx.Fq]: l || !u }),
        children: (0, r.jsx)("div", {
            className: tx.mv,
            children: (0, r.jsx)(tu.N, {
                theme: ef.NJ8.DARK,
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
                                    : (0, r.jsx)(to.m, {
                                          text: ea.intl.string(ea.t.LLLLPD),
                                          position: "top",
                                          align: "center",
                                          ariaHidden: !0,
                                          children: (0, r.jsx)(ee.K, {
                                              variant: "secondary",
                                              icon: tc.W,
                                              "aria-label": ea.intl.string(ea.t.LLLLPD),
                                              onClick: m,
                                          }),
                                      }),
                                !d &&
                                    !c &&
                                    (0, r.jsx)(tm.A, {
                                        quest: t,
                                        surface: e0.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                c &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: ea.intl.string(ea.t.vY9GgG),
                                        onClick: () => (0, tE.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
var tg = s(403581),
    tv = s(576761),
    tj = s(646440);
function tS(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, K.ZP)(s),
        i = (0, tv.B9)(n);
    if (null == l) return null;
    let a = i
        ? ea.intl.formatToPlainString(ea.t.l2UfLG, { bonusOrbMultiplier: l })
        : ea.intl.formatToPlainString(ea.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(ed.D, {
        onClick: () => {
            (0, tE.gC)(l, n), t?.();
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: tj.k,
            children: [
                (0, r.jsx)(tg.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(eH.E, { variant: "text-sm/normal", color: "currentColor", className: tj.Q, children: a }),
            ],
        }),
    });
}
var t_ = s(947641),
    tC = s(194261),
    tN = s(106799),
    tp = s(287809),
    tT = s(710969),
    tA = s(801365),
    tO = s(453384),
    tI = s(646764),
    tb = s(269999);
function tR(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, E.bG)([tp.default], () => tp.default.getCurrentUser()),
        a = (0, tA.mq)(t.config, i),
        o = (0, tA.ks)(t.config),
        u = (0, tA.wo)(t.config, i),
        c = (0, tA.l0)(t.config, i),
        d =
            null != u
                ? u > 700 * c
                    ? eK.i2.TIER_4
                    : u > 200 * c
                      ? eK.i2.TIER_3
                      : u > 100 * c
                        ? eK.i2.TIER_2
                        : eK.i2.TIER_1
                : void 0,
        { completedRatio: m } = (0, K.O9)(t),
        h = t.userStatus?.claimedAt != null,
        x = (0, tT.Ic)(t),
        f = t.userStatus?.enrolledAt == null,
        g = h ? "completed" : x ? "expired" : null,
        v = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tI.A, {
                    quest: t,
                    orbTier: d,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: tb.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === g &&
                    (0, r.jsx)("div", {
                        className: tb.EY,
                        children: (0, r.jsx)(t_.r, { className: tb.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === g &&
                    (0, r.jsx)("div", {
                        className: tb.EY,
                        children: (0, r.jsx)(tC.X, { size: "sm", className: tb.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: tb.CZ,
        children: [
            (0, r.jsx)("div", {
                className: tb.tE,
                children: f
                    ? (0, r.jsx)("div", { className: tb.fm, children: v })
                    : (0, r.jsx)(tO.A, {
                          size: 74,
                          percentComplete: m,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: tb.n5, children: v }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: tb.FS,
                children: [
                    (0, r.jsx)(eH.E, {
                        variant: "text-sm/medium",
                        color: "text-overlay-light",
                        className: tb.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: tb.oV,
                        children: [
                            o && (0, r.jsx)(tN.A, { className: tb.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                eH.E,
                                {
                                    variant: "text-lg/medium",
                                    className: tb.zN,
                                    color: "text-overlay-light",
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
var tM = s(315767);
function tQ(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, ti.A9)(t, a, th.rE.QUEST_HOME_DESKTOP, tr.GameProfileSources.QuestHome, u),
        d = (0, ta.z)(),
        m = (0, K.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: tM.qr,
        children: [
            (0, r.jsx)(tR, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n }),
            (0, r.jsxs)("div", {
                className: tM.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: tM.Wi,
                        children: [
                            (0, r.jsx)(eH.E, {
                                variant: "text-sm/normal",
                                className: o()(tM.Wj, tM.h_, { [tM.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(eH.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(tM.Wj, tM.XV, { [tM.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tM.Gv,
                        children: [
                            (0, r.jsx)(eH.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: ea.intl.string(ea.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(eH.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(tS, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tf, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var tL = s(688755),
    ty = s(831368),
    tH = s(547032);
function tU(e) {
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
        h = i.useMemo(() => (0, eK.tW)(s, eK.fY.QUEST_BAR_HERO_IMAGE), [s]),
        x = i.useMemo(() => (0, eK.tW)(s, eK.fY.QUEST_BAR_HERO_VIDEO), [s]),
        f = i.useMemo(() => (null != h ? (0, eK.UX)(h.url, { format: "webp", width: 32, height: 32 }) : null), [h]),
        g = (0, eV.S)(f),
        v = i.useMemo(() => (null != g ? { "--quest-scrim-color": g } : void 0), [g]),
        {
            isActive: j,
            shouldRender: S,
            hoverHandlers: _,
            handleMenuOpen: C,
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
                v = i.useMemo(
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
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: v, handleMenuOpen: f, handleMenuClose: g }
            );
        })(),
        p = (0, e0.Pd)(s),
        T = (0, e$.go)(),
        A = (0, eY.E0)(s.config),
        O = i.useContext(e1.X),
        { visibilityElementRef: I, almostVisibleInViewport: b } = (0, ty.I)(
            O?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: R,
            handleHoverEnd: M,
            isEventWithinParent: Q,
        } = (0, tL.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: E }),
        L = (0, $.Lk)({
            isShareable: A,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: ez.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: T,
                    sourceQuestContent: E,
                }),
                [n, E, T],
            ),
        });
    return (0, r.jsx)("div", {
        className: tH.uW,
        onMouseEnter: () => {
            _.onMouseEnter(), R();
        },
        onMouseLeave: () => {
            _.onMouseLeave(), M();
        },
        onFocus: (e) => {
            Q(e) || (_.onFocus(), R());
        },
        onBlur: (e) => {
            Q(e) || (_.onBlur(), M());
        },
        children: (0, r.jsxs)("article", {
            id: (0, eB.sT)(s.id, t),
            ref: (e) => {
                (m.current = e), (I.current = e);
            },
            "aria-label": ea.intl.formatToPlainString(ea.t.EAYZAr, { questName: s.config.messages.questName }),
            className: o()(tH.kL, { [tH.iR]: l, [tH.DM]: j }, a),
            style: v,
            children: [
                (0, r.jsx)(e2.A, {
                    showPlaceholder: !b,
                    width: 600,
                    height: 450,
                    className: tH.Tv,
                    children: (0, r.jsx)(eJ.N, {
                        imageAsset:
                            null != h
                                ? {
                                      asset: h,
                                      assetId: "QuestTileV2",
                                      alt: ea.intl.string(ea.t.jnijWz),
                                      className: tH.Tv,
                                  }
                                : void 0,
                        videoAsset:
                            null != x
                                ? {
                                      asset: x,
                                      assetId: "QuestTileV2_heroAnimated",
                                      className: o()(tH.Tv, tH.gJ, { [tH.C7]: j }),
                                  }
                                : void 0,
                        imageSize: { width: 600, height: 450 },
                        showVideo: S,
                    }),
                }),
                (0, r.jsx)("div", { className: o()(tH.sL, { [tH.Mq]: p === e0.UA.EXPIRED }) }),
                (0, r.jsx)("div", { className: o()(tH.f5, tH.Cm) }),
                (0, r.jsx)("div", { className: o()(tH.f5, tH.sr) }),
                (0, r.jsxs)("div", {
                    className: tH.wx,
                    children: [
                        (0, r.jsx)(tl, { quest: s, isHovering: j }),
                        (0, r.jsxs)("div", {
                            className: o()(tH.$s, { [tH.rk]: j }),
                            children: [
                                l &&
                                    A &&
                                    (0, r.jsx)(ed.D, {
                                        tag: "div",
                                        className: tH.E9,
                                        onClick: L,
                                        "aria-label": ea.intl.string(ea.t.WqhZss),
                                        children: (0, r.jsx)(eW.q, { size: "sm", color: "currentColor" }),
                                    }),
                                (0, r.jsx)(eZ.C, {
                                    questContent: n,
                                    quest: s,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: E,
                                    onOpen: C,
                                    onClose: N,
                                    children: (e) =>
                                        (0, r.jsx)(ed.D, {
                                            ...e,
                                            tag: "div",
                                            className: tH.E9,
                                            "aria-label": ea.intl.string(ea.t.DEoVWZ),
                                            children: (0, r.jsx)(eG.j, { size: "sm", color: "currentColor" }),
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(tQ, {
                    quest: s,
                    questContent: n,
                    isInFeaturedSection: l,
                    isHovering: j,
                    sourceQuestContent: E,
                }),
            ],
        }),
    });
}
let tD = i.memo(function (e) {
    let t = (0, E.bG)([X.A], () => (null != e.questId ? X.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(eX.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === ew.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(tU, { ...e, quest: s, impressionRef: t }),
          });
});
function tq(e) {
    let { quest: t } = e,
        { useNewTile: s } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eI.B0,
            children: [
                (0, r.jsx)(eN.D, {
                    className: eI.R_,
                    variant: "heading-md/semibold",
                    children: ea.intl.string(ea.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(tD, {
                          className: eI.d,
                          quest: t,
                          questContent: ew.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: ew.uF.INTERNAL_PREVIEW_TOOL,
                      })
                    : (0, r.jsx)(eB.Ay, {
                          className: eI.d,
                          quest: t,
                          questContent: ew.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: ew.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var tF = s(97808),
    tP = s(778712),
    tk = s(87664),
    tw = s(427262),
    tB = s(198525),
    tW = s(66176);
let tG = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([tp.default], () => tp.default.getCurrentUser()),
        u = tw.Ay.useName(a),
        c = (0, tk.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(tB.default, {
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
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eI.B0,
            children: [
                (0, r.jsx)(eN.D, {
                    className: tW.R_,
                    variant: "heading-md/semibold",
                    children: ea.intl.string(ea.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: tW.$Q, children: ea.intl.string(ea.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: tW.k0,
                    children: (0, r.jsx)(es.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => n(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: es.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(tW.Tn, { [tW.wH]: s }),
                                children: (0, r.jsx)(ed.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: tW.lm,
                                        children: [
                                            (0, r.jsx)(tF.eu, {
                                                size: tP._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: ef.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: tW.Fj,
                                                children: [
                                                    (0, r.jsx)(eH.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(eH.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: ea.intl.string(ea.t.b9w3bO),
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
function tV(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, E.bG)([X.A], () => X.A.getQuest(t));
    if (null != (0, E.bG)([X.A], () => X.A.getFetchQuestPreviewError(t)) || null == n) return null;
    let l = (e) => null == s || 0 === s.length || s.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ey, { quest: n }), (0, r.jsx)(eA, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tq, { quest: n }), (0, r.jsx)(eA, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ek, { questId: n.id }), (0, r.jsx)(eA, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eq, { quest: n }), (0, r.jsx)(eA, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tG, { quest: n }), (0, r.jsx)(eA, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eb, { quest: n }), (0, r.jsx)(eA, {})] }),
        ],
    });
}
var tK = s(497275);
function tz(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: a } = e,
        u = [
            { value: "quest_bar", label: ea.intl.string(ea.t.rjVPdM) },
            { value: "share_embed", label: ea.intl.string(ea.t["D/gSWS"]) },
            { value: "home_card", label: ea.intl.string(ea.t["5wnpF3"]) },
            { value: "channel_call_header", label: ea.intl.string(ea.t.gWinpQ) },
            { value: "members_list", label: ea.intl.string(ea.t.wpYima) },
            { value: "activity_panel", label: ea.intl.string(ea.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(eC.Ip, {
        className: o()(tK.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: tK.qE,
            children: [
                (0, r.jsx)(eN.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ea.intl.string(ea.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: tK.pf, children: l }),
                (0, r.jsxs)(ep.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(ep.V.Item, { id: "all", children: ea.intl.string(ea.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(ep.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: tK.tZ, children: (0, r.jsx)("div", { className: tK.Qs, children: t }) }),
            ],
        }),
    });
}
let t$ = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: s } = (0, u.zy)(),
                n = i.useMemo(() => new URLSearchParams(s).get(K.L1.QUEST_ID) ?? e, [s, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        s.set(K.L1.TAB, K.NC.PREVIEW_TOOL),
                            s.set(K.L1.QUEST_ID, e),
                            t.push(`${ef.BVt.QUEST_HOME}?${s.toString()}`);
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        a = (0, E.bG)([X.A], () => (null != n ? X.A.getQuest(n) : void 0), [n]),
        o = (0, E.bG)([X.A], () => (null != n ? X.A.getQuestLoadedViaPreview(n) : null), [n]);
    i.useEffect(() => {
        null != n &&
            (0, J.dQ)(n).then(() => {
                (0, J.Gt)(n);
            });
    }, [n]),
        i.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, J.dQ)(n);
            };
            return (
                Y.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    Y.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = i.useState([]);
    return (0, r.jsx)(tz, {
        className: s,
        controls: (0, r.jsx)(e_, {
            questId: n,
            setQuestId: l,
            quest: a,
            refreshQuest: () => {
                null != n && (0, J.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(tV, { questId: o?.id, selectedSections: c }) : null,
    });
};
var tY = s(203879),
    tJ = s(403362),
    tX = s(167417),
    tZ = s(783977),
    t0 = s(651892),
    t1 = s(305866),
    t2 = s(915089),
    t4 = s(332733);
function t3(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(eH.E, { className: t4.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let t7 = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, t2.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(es.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(t1.l, { className: t4.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var t8 = s(612539);
let t6 = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, K.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(t7, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, t0.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: t8.B }),
                                    (0, r.jsx)(t3, { id: a, children: e.heading }),
                                    (0, r.jsx)(tX.$, {
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
                    (0, r.jsx)("hr", { className: t8.B }),
                    (0, r.jsx)("div", {
                        className: t8.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: ea.intl.string(ea.t.VkKicb),
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
                text: ea.intl.formatToPlainString(ea.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: tZ.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var t5 = s(144228),
    t9 = s(715482);
let se = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([C.Ay], () => C.Ay.keyboardModeEnabled),
        o = (0, K.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(t7, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(t3, { id: t, children: ea.intl.string(ea.t.tZXJIS) }),
                    (0, r.jsx)(t5.z, {
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
                "aria-label": ea.intl.formatToPlainString(ea.t.lPlIMo, { selected: (0, t0.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, t0.Js)(n),
                icon: t9.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var st = s(580929),
    ss = s(717421);
function sn(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, st.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, st.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var sl = s(691540),
    sr = s(857250),
    si = s(97483),
    sa = s(174459);
function so() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sl.P0)((0, sr.o)(ea.intl.string(ea.t["5ABf1w"]), si.Ck.FAILURE)),
                sa.default.track(ef.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
var su = s(535185);
function sc(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function sd(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(sc(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, su.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var sm = s(121480);
let sE = 4 * tt.A.Millis.SECOND;
function sh(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = sd(l, s, n);
    return (0, r.jsx)("div", {
        className: sm.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let sx = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = so(),
        h = i.useRef(""),
        [x, f] = i.useState(null),
        [g, v] = i.useState(0),
        { useNewTile: j } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: S }, _] = (0, ss.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sE },
        })),
        C = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, tT.vc)(e, s, n);
                return null == t ? (E(e), !1) : (f(t.id), v((e) => e + 1), !0);
            },
            [s, n, l, E, a],
        );
    return (i.useImperativeHandle(t, () => ({ scrollToQuest: C }), [C]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        l || !a || (m.hash !== h.current && C(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, l, a, C]),
    i.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            _({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || f(null);
                },
            }));
    }, [x, g, _]),
    l && 0 === s.length)
        ? (0, r.jsx)(el.y, { className: sm.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sm.y7,
                children: [
                    (0, r.jsx)(eN.D, {
                        variant: "heading-xl/semibold",
                        children: ea.intl.string(c ? ea.t.PBfFnx : ea.t.NqFP6z),
                    }),
                    (0, r.jsx)(eH.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? ea.intl.format(ea.t.LdYS1H, { onClick: d }) : ea.intl.string(ea.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(sh, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            st.animated.div,
                            {
                                className: o()({ [sm.XB]: l }),
                                style: sn(l, i, S),
                                children: [
                                    l && (0, r.jsx)("div", { className: sm.E4 }, g),
                                    j
                                        ? (0, r.jsx)(tD, {
                                              quest: t,
                                              questContent: ew.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sm.d,
                                              sourceQuestContent: ew.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eB.Ay, {
                                              quest: t,
                                              questContent: ew.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sm.d,
                                              sourceQuestContent: ew.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sf = s(458518),
    sg = s(65990);
let sv = [],
    sj = K.L1.SORT,
    sS = K.L1.FILTER,
    s_ = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, sf.o)()),
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
                    (e = c.get(sj)),
                    ((0, B.uJ)(e) ? null : (Object.values(th.kL).find((t) => t === e) ?? null)) ?? th.kL.SUGGESTED
                );
            }, [c]),
            E = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, B.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, th.WQ)(e))
                            .filter(tJ.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(sS)) ?? sv,
                [c],
            ),
            h = i.useCallback(
                (e) => {
                    d({ [sj]: e });
                },
                [d],
            ),
            x = i.useCallback(
                (e) => {
                    d({
                        [sS]:
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
                isFetchingCurrentQuests: v,
                hasFetched: j,
            } = (0, K.Qh)(
                K.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: E, removeExpiredQuests: !0 }), [m, E]),
            ),
            S = i.useCallback(() => {
                x(sv);
            }, [x]),
            _ = i.useRef(null),
            C = i.useRef(null),
            N = (0, u.zy)(),
            p = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== N.hash &&
                    null != _.current &&
                    null != C.current &&
                    (m !== _.current || E !== C.current) &&
                    p.replace({ ...N, hash: void 0 });
            }, [m, E, N, p]),
            i.useEffect(() => {
                _.current = m;
            }, [m]),
            i.useEffect(() => {
                C.current = E;
            }, [E]),
            (0, K.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: f.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        S(),
                            h(th.kL.SUGGESTED),
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
                        className: sg.Mj,
                        children: [
                            (0, r.jsx)(eN.D, { variant: "heading-lg/medium", children: ea.intl.string(ea.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sg.Nf,
                                children: [
                                    (0, r.jsx)(se, { onChange: h, optionClassName: sg.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(t6, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sx, {
                        ref: o,
                        quests: f,
                        excludedQuests: g,
                        isFetching: v,
                        hasFetched: j,
                        hasFiltersApplied: E.length > 0,
                        onClearFilters: S,
                    }),
                ],
            })
        );
    });
var sC = s(575593),
    sN = s(440703),
    sp = s(462887),
    sT = s(187322),
    sA = s(765671),
    sO = s(736653),
    sI = s(162232),
    sb = s(734736),
    sR = s(303136),
    sM = s(265234),
    sQ = s(181713);
let sL = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sQ.A : sQ.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sM.k, t),
        children: s
            ? (0, r.jsx)(sR.A, {
                  preload: "auto",
                  className: sM.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sM.L, src: l, alt: n }),
    });
};
var sy = s(57718),
    sH = s(659249);
let sU = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        x = (0, E.bG)([tp.default], () => tp.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, sA.Ay)(),
        v = (0, sO.Ay)(),
        j = (0, K.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        S = t.userStatus?.claimedTier ?? 0,
        _ = t.config.rewards[S],
        C = _?.type === sN.l.FRACTIONAL_PREMIUM,
        N = _?.type === sN.l.COLLECTIBLE,
        p = _?.type === sN.l.VIRTUAL_CURRENCY,
        T = _?.collectibleProduct?.items?.[0],
        A = T?.type === sC.R.AVATAR_DECORATION ? T : null,
        O = i.useMemo(
            () =>
                null == _
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? ea.intl.format(ea.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : _.name,
            [_, p, t],
        );
    (0, sA.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == d.current || null == h.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let I = (0, sp.M)(v),
        R = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, eK.tW)(t, eK.fY.REWARD), [t]),
        Q = s ? g + 8 : 0,
        { content_position: L, row_index: y, ...H } = (0, ez.fF)(ew.uF.TROPHY_CASE_CARD);
    function U() {
        n(!0), sa.default.track(ef.HAw.QUEST_HOVER, { quest_id: t.id, ...H });
    }
    function D() {
        n(!1);
    }
    function q(e) {
        c(!0), sa.default.track(ef.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == _ || u
        ? null
        : (0, r.jsx)(sT.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: U,
                  onBlur: D,
                  onMouseEnter: U,
                  onMouseLeave: D,
                  className: o()(sH.kL, { [sH.yo]: s }),
                  children: [
                      null != x &&
                          N &&
                          null != A &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: sH.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sI.A, {
                                  avatarDecorationOverride: A,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      C
                          ? (0, r.jsx)(sb.A, { className: sH.Sl })
                          : p
                            ? (0, r.jsx)(sL, {
                                  className: sH.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(b.A, {
                                    className: sH.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => q(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sH.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => q(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sH.Lw, { [sH.en]: I, [sH.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sH.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sy.Ay, {
                              logotypeClassName: o()(sH.wm, { [sH.A0]: R }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: sH.zH,
                          children: [
                              (0, r.jsx)(eN.D, {
                                  className: sH.DD,
                                  variant: "heading-md/semibold",
                                  color: "text-overlay-light",
                                  children: ea.intl.format(ea.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(eH.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "text-overlay-light",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: ea.intl.format(ea.t["kXVcV+"], { reward: O, claimedDate: j }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sD = s(396478);
function sq(e) {
    let { onClick: t } = e,
        n = (0, sO.Ay)();
    return (0, r.jsxs)(sD.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sD.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sD.SG, { note: ea.intl.format(ea.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sF = s(975424);
function sP(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, K.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(el.y, { className: sF.u })
        : 0 === n.length
          ? (0, r.jsx)(sq, { onClick: () => t(K.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sF.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sU, { quest: e }, e.id)),
            });
}
var sk = s(548411),
    sw = s(554830),
    sB = s(689175),
    sW =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let sG = [
    { type: "featured-quests", identifier: "featured", title: ea.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: ea.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: ea.t.P0lmqC },
    { type: "quests", identifier: "orb", title: ea.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: ea.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: ea.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: ea.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: ea.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function sV(e) {
    return eu.A.space.SPACE_XL.resolve({ density: e });
}
let sK = (e, t) => (1220 - 2 * sV(e) * (t ? 2 : 0.75)) / 3;
var sz = s(522403);
let s$ = "data-scroll-target",
    sY = `[${s$}]`,
    sJ = { anchors: [], pageSize: 1 },
    sX = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function sZ(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let s0 = i.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = sY,
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
            [v, j] = i.useState(!1),
            [S, _] = i.useState(!0),
            [N, p] = i.useState([]),
            [T, A] = i.useState(1),
            O = (0, E.bG)([C.Ay], () => C.Ay.useReducedMotion) ? "auto" : "smooth",
            I = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (g(e.scrollLeft > 0), j(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
            }, []),
            b = i.useCallback(() => {
                let { anchors: e, pageSize: t } = (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return sJ;
                    let i = Array.from(r.querySelectorAll(s));
                    if (0 === i.length) return sJ;
                    let a = i[0].offsetWidth,
                        o = i.length > 1 ? i[1].offsetLeft - i[0].offsetLeft - a : 0,
                        u = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (a + o))),
                        c = i.length - u + 1;
                    return c <= 1
                        ? sJ
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
                A(t), p((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e));
            }, [l, n, u, p]),
            R = i.useCallback(() => {
                if (null == x.current || x.current?.clientWidth === 0) return _(!0);
                _(x.current?.clientWidth >= 1260);
            }, [x]),
            M = i.useCallback(
                (e) => {
                    let t = d.current?.getScrollerNode();
                    if (null == t || N.length < 2) return;
                    let { currentIndex: s, scrollLefts: n } = sZ(t, N),
                        l = Math.max(0, Math.min(N.length - 1, s + e * T));
                    (m.current = ez.pk.ARROW), t.scrollTo({ left: n[l], behavior: O });
                },
                [O, N, T],
            ),
            Q = i.useCallback((e, t) => {
                let s = d.current?.getScrollerNode();
                if (null == s || null == e || !s.contains(e)) return;
                let n = s.getBoundingClientRect(),
                    l = e.getBoundingClientRect(),
                    r = n.left - l.left,
                    i = l.right - n.right;
                (0 !== r || 0 !== i) &&
                    ((m.current = ez.pk.MANUAL),
                    r > 0
                        ? s.scrollTo({ left: s.scrollLeft - r, behavior: t })
                        : i > 0 && s.scrollTo({ left: s.scrollLeft + i, behavior: t }));
            }, []),
            L = i.useCallback(
                (e) => {
                    let t = e.target.closest(n);
                    null != t && Q(t, O);
                },
                [n, Q, O],
            ),
            y = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                if (null == e) return;
                let { currentIndex: t } = sZ(e, N),
                    s = m.current ?? ez.pk.MANUAL;
                m.current = null;
                let n = h.current;
                h.current = e.scrollLeft;
                let l = e.scrollLeft > n ? ez.VU.RIGHT : ez.VU.LEFT;
                c?.({
                    scrollingType: s,
                    scrollWindowStartIndex: t,
                    scrollWindowEndIndex: t + T - 1,
                    scrollWindowSize: T,
                    scrollingDirection: l,
                });
            }, [c, N, T]),
            H = i.useCallback(
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
                        o = null == a ? null : a.matches(sX) ? a : a.querySelector(sX);
                    null != o && (o.focus({ preventScroll: !0 }), e.repeat && Q(a, "instant"));
                },
                [n, Q],
            ),
            U = i.useCallback(() => {
                I(), b(), R();
            }, [I, b, R]);
        (0, su.g)(x, U, [], { fireOnMount: !0 });
        let D = a > 0,
            q = i.useMemo(
                () => ({
                    "--custom-scroller-mask-width": `${l}px`,
                    "--custom-scroller-overflow-amount": `${a}px`,
                    "--custom-scroller-scroll-behavior": O,
                }),
                [l, a, O],
            );
        return (0, r.jsxs)("div", {
            className: o()(s, sz.m7),
            ref: x,
            style: q,
            children: [
                (0, r.jsx)("div", {
                    className: o()(sz.k9, sz.RW, { [sz.Q2]: f }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(ee.K, {
                        icon: sk.Z,
                        variant: "overlay-secondary",
                        onClick: () => M(-1),
                        disabled: !f,
                        "aria-label": ea.intl.string(ea.t.vgfxaA),
                        tabIndex: -1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(sz.k9, sz.K3, { [sz.Q2]: v }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(ee.K, {
                        icon: sw.K,
                        variant: "overlay-secondary",
                        onClick: () => M(1),
                        disabled: !v,
                        tabIndex: -1,
                        "aria-label": ea.intl.string(ea.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [sz.sF]: f && S, [sz.RC]: v && S, [sz.Ni]: D && !f, [sz.GA]: D && !v }),
                    children: (0, r.jsx)(sB.zC, {
                        ref: d,
                        orientation: "horizontal",
                        onScroll: I,
                        onScrollEnd: y,
                        onFocusCapture: L,
                        onKeyDown: H,
                        className: o()({ [sz.x2]: D }, sz.XG),
                        children: (0, r.jsxs)(e1.X.Provider, {
                            value: d,
                            children: [
                                t,
                                N.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: sz.fw, style: { insetInlineStart: `${e}px` } },
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
    s1 = i.createContext({
        targetQuestId: null,
        targetSectionIdentifier: null,
        highlightCount: null,
        highlightAnimationProgress: null,
    });
var s2 = s(76060);
function s4(e) {
    let { children: t, sectionIdentifier: s, questId: n, featuredSection: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: o,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(s1),
        d = a === n && o === s,
        m = null != a && (a !== n || o !== s),
        { useNewTile: E } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        h = l ? "var(--radius-lg)" : "var(--radius-sm)",
        x = i.useMemo(() => ({ ...sn(d, m, c), borderRadius: E ? h : "10px" }), [d, m, c, E, h]);
    return (0, r.jsxs)(st.animated.div, {
        [s$]: "",
        className: d ? s2.X : void 0,
        style: x,
        children: [d && (0, r.jsx)("div", { className: s2.E }, u), t],
    });
}
var s3 = s(474646);
function s7(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : sc(t, 345, 20, 2)), [t]);
    return (
        i.useEffect(() => {
            null !== o && l(Math.ceil(s.length / o) - 1);
        }, [s.length, o, l]),
        (0, r.jsx)("div", {
            className: s3.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != o &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        s4,
                        {
                            featuredSection: !0,
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      tD,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: ew.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: ew.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      eB.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: ew.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: ew.uF.QUEST_HOME_FEATURED_SECTION,
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
var s8 = s(344236),
    s6 = s(654424);
function s5(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(s8.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: o()(s6.m, s8.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: s8.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(s6.m, s8.Vr) }, t),
                ),
            }),
        ],
    });
}
var s9 = s(418842),
    ne = s(561844),
    nt = s(548636);
function ns(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(s1),
        { useNewTile: o } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = G.Mk.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        c = (0, s9.C)(),
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
                (0, ne.kO)({
                    scrollingType: d ? ez.pk.AUTO : n,
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
        E = u === G.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(s0, {
        maskWidth: sV(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${sK(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: nt.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        s4,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(tD, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nt.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(eB.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === sW.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nt.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: nt.fu }),
            ],
        }),
    });
}
var nn = s(958538);
let nl = tt.A.Millis.WEEK;
function nr() {
    let e = X.A.quests;
    if (0 === X.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tT.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class ni extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(X.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - nl;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([X.A], nr), t;
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
let na = new ni(Y.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            if (null == X.A.getQuest(e.questId)) return !1;
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    no = 2 * tt.A.Millis.DAY,
    nu = new Map(sG.map((e) => [e.identifier, e])),
    nc = {
        [sW.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nd(e, t) {
    let s = nu.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
function nm(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
var nE = s(32304);
let nh = {
        [sW.FEATURED]: ew.uF.QUEST_HOME_FEATURED_SECTION,
        [sW.IN_PROGRESS]: ew.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [sW.ENDING_SOON]: ew.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [sW.ORB]: ew.uF.QUEST_HOME_ORB_SECTION,
        [sW.DISCOVERED]: ew.uF.QUEST_HOME_DISCOVERED_SECTION,
        [sW.EXPIRED]: ew.uF.QUEST_HOME_EXPIRED_SECTION,
        [sW.PREVIEW]: ew.uF.QUEST_HOME_PREVIEW_SECTION,
        [sW.SPECIAL_QUESTS]: ew.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    nx = 4 * tt.A.Millis.SECOND,
    nf = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: a = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
            {
                sections: d,
                isFetchingCurrentQuests: m,
                getSectionIdentifierForTargetedQuest: h,
            } = (() => {
                let e = (0, tw.Gn)(),
                    t = (0, K.Cv)(),
                    s = (0, E.bG)([X.A], () => X.A.lastFetchedCurrentQuests > 0),
                    { quests: n, isFetchingCurrentQuests: l } = (0, K.Qh)(K.NC.ALL, {
                        sortMethod: th.kL.SUGGESTED,
                        filters: [],
                        removeExpiredQuests: !e,
                    }),
                    r = (0, nn.A)(
                        () =>
                            n.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        n.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        nm,
                    ),
                    a = (0, $.T2)(),
                    o = (0, E.bG)([na], () => na.getDiscoveredAtByQuestId(), []),
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
                                          let t = X.A.getQuestConfig(e);
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
                                                  { userStatus: a, preview: o } = X.A.getQuest(t.id) ?? {},
                                                  u = [],
                                                  c =
                                                      null != a &&
                                                      null != a.enrolledAt &&
                                                      null != a.completedAt &&
                                                      null == a.claimedAt;
                                              return (0, tT.kd)(t) && !c
                                                  ? r
                                                      ? [sW.EXPIRED]
                                                      : null
                                                  : (n.has(t.id) && u.push(sW.DISCOVERED),
                                                      i && !0 === o && u.push(sW.PREVIEW),
                                                      null != a && null != a.enrolledAt && null == a.claimedAt)
                                                    ? [...u, sW.IN_PROGRESS]
                                                    : null != s && (0, eY.I0)(s, t.id) && nd(sW.FEATURED, l)
                                                      ? [...u, sW.FEATURED]
                                                      : new Date(t.expiresAt).valueOf() <= Date.now() + no
                                                        ? [...u, sW.ENDING_SOON]
                                                        : nd(sW.FEATURED, l)
                                                          ? [...u, sW.FEATURED]
                                                          : (0, tA.ks)(t)
                                                            ? [...u, sW.ORB]
                                                            : [...u, sW.SPECIAL_QUESTS];
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
                                          sG
                                              .map((e) => {
                                                  let t = nc?.[e.identifier];
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
            { showToast: f } = so(),
            [g, v] = i.useState(null),
            [j, S] = i.useState(null),
            [_, C] = i.useState(0),
            [N, p] = i.useState(null),
            [T, A] = i.useState(0),
            O = i.useRef(null),
            I = i.useCallback(
                (e) => {
                    p(e.contentRect.width);
                },
                [p],
            );
        (0, su.g)(x, I, [I], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: b }, R] = (0, ss.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nx },
            })),
            M = i.useCallback(
                (e, t) => {
                    if (null == e || null == N || m || n) return !1;
                    t && (0, J.sB)(e);
                    let s = h(e),
                        l = !0 === t && s !== sW.FEATURED ? sW.DISCOVERED : s;
                    if (null == s) return f(e), !1;
                    let r = document.getElementById((0, eB.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (v(e),
                        S(l),
                        C((e) => e + 1),
                        r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        R({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || (v(null), S(null));
                            },
                        }),
                        !0)
                    );
                },
                [v, C, R, m, n, f, N, h],
            );
        i.useImperativeHandle(t, () => ({ scrollToQuest: M }), [M]),
            i.useLayoutEffect(() => {
                if (null == s) {
                    O.current = null;
                    return;
                }
                O.current !== s && M(s, !0) && (O.current = s);
            }, [s, M]);
        let Q = i.useMemo(
                () => ({
                    targetQuestId: g,
                    targetSectionIdentifier: j,
                    highlightCount: _,
                    highlightAnimationProgress: b,
                }),
                [g, j, _, b],
            ),
            L = i.useMemo(
                () =>
                    d.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sW.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(s1.Provider, {
            value: Q,
            children: (0, r.jsx)("div", {
                className: o()(nE.kL, l, { [nE.Sy]: !a }),
                ref: x,
                children: m
                    ? (0, r.jsx)(s5, { role: "status", "aria-label": ea.intl.string(ea.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: nE.p9,
                                    children: [
                                        (0, r.jsx)(eN.D, {
                                            variant: "heading-lg/semibold",
                                            className: nE.Gf,
                                            children: ea.intl.string(l),
                                        }),
                                        s === sW.FEATURED && u && c
                                            ? (0, r.jsx)(s7, {
                                                  questIds: n,
                                                  setMaxRowIndex: A,
                                                  containerWidth: N,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(ns, {
                                                  questIds: n,
                                                  rowIndex: t < L ? t : t + T,
                                                  sectionIdentifier: s,
                                                  questContent: nh[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: nE.y7,
                            children: [
                                (0, r.jsx)(eN.D, {
                                    variant: "heading-xl/semibold",
                                    children: ea.intl.string(ea.t.NqFP6z),
                                }),
                                (0, r.jsx)(eH.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: ea.intl.string(ea.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var ng = s(353640),
    nv = s(121894),
    nj = s(851936);
let nS = (0, ng.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, nj.L)({ location: th.rE.QUEST_HOME_DESKTOP });
        if (s.info === ej.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, nv.r)(() => e(l));
    },
}));
var n_ = s(516226),
    nC = s(274670),
    nN = s(144779),
    np = s(104886),
    nT = s(18437),
    nA = s(901406),
    nO = s(139384),
    nI = s(770178),
    nb = s(14233);
function nR(e, t) {
    let { row_index: s, ...n } = (0, ez.fF)(ew.uF.QUEST_HOME_HERO);
    (0, ne.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: ew.uF.QUEST_HOME_HERO,
    });
}
let nM = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, E] = i.useState("display-lg"),
        h = i.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, nI.w)(h, [], { fireOnMount: !0 }),
        f = i.useCallback(() => nR(s, ef.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => nR(s, ef.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(tu.N, {
        theme: ef.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(nb.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: g,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nb.FG,
                    children: [
                        (0, r.jsxs)(j.B, {
                            className: nb.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(j.B, {
                                    className: nb.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(eN.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nb.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(eH.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nb.VA,
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
var nQ = s(194526),
    nL = s(731355),
    ny = s(621466),
    nH = s(508770),
    nU = s(406810),
    nD = s(628284),
    nq = s(65154),
    nF = s(58703),
    nP = s(398025),
    nk = s(691464);
function nw(e) {
    let [t, s] = i.useState(!1),
        n = i.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nB(e) {
    let { hero: t, contentPosition: s, impressionRef: n } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = nw(
            i.useCallback(
                (e) => {
                    (0, ne.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ew.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ez.jO)(ew.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, ny.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(ej.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, ss.z)({ hoverSpring: +!!a, config: st.config.gentle }),
        d = i.useCallback(() => {
            (0, nA._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: ew.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ez.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: n.current?.getId(),
                    sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, n]);
    return (0, r.jsxs)(ed.D, {
        tag: "div",
        className: o()(nk.FW, nk.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [s$]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: nk.Ve,
                children: (0, r.jsx)(eJ.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(nk.pv, nk.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(nk.pv, nk.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(st.animated.div, {
                className: nk.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), d();
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function nW(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: h } = (0, te.A)(a, tt.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, nF.uN)(
                    { days: u, hours: c, minutes: d, seconds: h },
                    { days: ea.t["Ux/De1"], hours: ea.t.Lzd5Ie, minutes: ea.t.odmpbP },
                ),
            [u, c, d, h],
        ),
        f = (0, E.bG)([tp.default], () => tp.default.getCurrentUser()),
        v = i.useMemo(() => (0, tA.mq)(s.config, f), [s.config, f]),
        S = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, t0.xv)(e).type) {
                        case sN.l.IN_GAME:
                            return ea.intl.string(ea.t["O/J2kr"]);
                        case sN.l.COLLECTIBLE:
                            return ea.intl.string(ea.t.Jg17Ut);
                        case sN.l.VIRTUAL_CURRENCY:
                            return ea.intl.string(ea.t.ElYQFS);
                        default:
                            return (0, tA.mq)(e, t);
                    }
                })(s.config, f),
            [s.config, f],
        ),
        { completedRatio: _, completedRatioDisplay: C } = (0, K.O9)(s),
        N = i.useMemo(() => (0, tA.wo)(s.config, f), [s.config, f]),
        p = (0, nT.tG)(),
        T = (0, nT.WS)(),
        A = (0, e$.wW)(),
        { isHovering: O, hoverProps: I } = nw(
            i.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ew.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ez.jO)(ew.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: b } = (0, ss.z)({ hoverSpring: +!!O, config: st.config.gentle }),
        R = i.useCallback(() => {
            n(s.id),
                (0, np.E5)(np.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, nC.r)({
                          type: nN.F.CLICK_INTERNAL,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: ez.Cy.VIEW_QUESTS,
                          surfaceId: ew.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: A(),
                      })
                    : p({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: ew.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: ez.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, p, l, A]);
    return (0, r.jsxs)(ed.D, {
        tag: "div",
        className: o()(nk.FW, nk.$R),
        onClick: R,
        "aria-label": ea.intl.string(ea.t["th2+0j"]),
        [s$]: !0,
        ...I,
        children: [
            (0, r.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nH.E, { type: { text: S } }),
                    (0, r.jsx)(st.animated.div, {
                        style: { opacity: (0, nP.a)(b.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nH.E, { type: { text: x }, icon: nU.O }),
                    }),
                ],
            }),
            (0, r.jsx)(st.animated.div, {
                className: nk.Tr,
                style: { transform: b.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tO.A, {
                    percentComplete: _,
                    overlayText: O && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tI.A, {
                        quest: s,
                        questContent: ew.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(st.animated.div, {
                className: nk.tw,
                style: {
                    opacity: (0, nP.a)(b.to([0, 1], [1, 0])),
                    transform: b.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(j.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(eH.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nk.Ht,
                            children: v,
                        }),
                        (0, r.jsxs)(j.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(nD.y, { size: "xs", color: eu.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(eH.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, eY.pv)(s.config) === nL.Z.VIDEO
                                            ? (0, r.jsx)(nq.S, { size: "xs", color: eu.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(e3._, { size: "xs", color: eu.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(eH.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: C,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(st.animated.div, {
                className: nk.um,
                style: { transform: b.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), R();
                    },
                    text: ea.intl.string(ea.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var nG = s(648731);
function nV(e) {
    let { hero: t, shelfQuests: s, isBannerLoading: n, onQuestCtaClick: l } = e,
        i = (0, s9.C)();
    return n
        ? (0, r.jsx)(nK, { numShelfCards: s.length + 1 })
        : (0, r.jsx)(s0, {
              className: nG.vo,
              overflowAmount: 25,
              maskWidth: sV(i),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(j.B, {
                  className: nG.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  children: [
                      (0, r.jsx)(eX.R, {
                          adContentId: t.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: ew.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: 0,
                          sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                          children: (e, s) =>
                              (0, r.jsx)("div", {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  children: (0, r.jsx)(nB, { hero: t, contentPosition: 0, impressionRef: s }),
                              }),
                      }),
                      s.map((e, s) =>
                          (0, r.jsx)(
                              eX.R,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  questContent: ew.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: s + 1,
                                  sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                                  children: (n) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              n.current = e;
                                          },
                                          children: (0, r.jsx)(nW, {
                                              heroId: t.id,
                                              quest: e,
                                              onQuestCtaClick: l,
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
function nK(e) {
    let { className: t, numShelfCards: s } = e,
        n = (0, s9.C)(),
        l = Math.max(s, 4);
    return (0, r.jsx)(s0, {
        className: o()(nG.vo, t),
        overflowAmount: 25,
        maskWidth: sV(n),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(j.B, {
            className: nG.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: l - 1 }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(s6.m, nG.W_) }, t),
            ),
        }),
    });
}
var nz = s(95115);
function n$() {
    return (0, r.jsx)("div", { className: nz.Np });
}
function nY(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, nO.A)(n, th.rE.QUEST_HOME_DESKTOP);
    let l = i.useMemo(() => (null != s ? (0, eK.WV)(s) : null) ?? t, [s, t]);
    return (0, r.jsx)(z._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eJ.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: n,
                imageAsset: {
                    alt: "",
                    className: nz.LY,
                    asset: { url: l, mimetype: (0, eK.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: nz.LY,
                    asset: { url: s, mimetype: (0, eK.vm)(s), isAnimated: !0 },
                    assetId: s,
                },
            }),
    });
}
function nJ(e) {
    let { heroImage: t, heroVideo: s } = e;
    return null == s
        ? (0, r.jsxs)("div", {
              className: nz.Tv,
              children: [
                  (0, r.jsx)(n$, {}),
                  (0, r.jsx)("div", {
                      className: nz.LO,
                      children: (0, r.jsx)(z._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: nz.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nz.LO, nz.jx, nz.hw),
                      children: (0, r.jsx)("img", { className: nz.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nz.LO, nz.jx, nz.Co),
                      children: (0, r.jsx)("img", { className: nz.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: nz.Tv,
              children: [
                  (0, r.jsx)(n$, {}),
                  (0, r.jsx)("div", { className: nz.LO, children: (0, r.jsx)(nY, { heroImage: t, heroVideo: s }) }),
              ],
          });
}
function nX(e) {
    let { hero: t, hasFetchedQuests: s, hasNoAccessibleQuests: n } = e,
        l = (0, nT.WS)(),
        r = i.useRef(!1);
    return (
        i.useEffect(() => {
            let e = t.questIds;
            s &&
                null != e &&
                e.length > 0 &&
                n &&
                !r.current &&
                ((r.current = !0),
                l({
                    adContentId: t.id,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    event: ef.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: ew.uF.QUEST_HOME_HERO,
                }));
        }, [s, n, t.id, t.questIds, l]),
        null
    );
}
function nZ(e) {
    let { hero: t, onQuestCtaClick: s, isBannerLoading: n } = e,
        l = (0, E.bG)([X.A], () => X.A.quests),
        a = (0, E.bG)([X.A], () => X.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, K.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, nQ.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        x = h[0];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eX.R, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: ew.uF.QUEST_HOME_HERO,
                sourceQuestContent: ew.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(nX, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(nM, {
                                ref: (t) => {
                                    e.current = n ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [nz.lX]: n }),
                                topContent: (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)(z._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: nz.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(eH.E, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: nz.yu,
                                            children: ea.intl.string(ea.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                buttons: (0, r.jsxs)(f.e, {
                                    children: [
                                        (0, r.jsx)(g.$, {
                                            onClick: () => {
                                                (0, nA._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: ew.uF.QUEST_HOME_HERO,
                                                        ctaContent: ez.Cy.OPEN_GAME_LINK,
                                                        impressionId: l.current?.getId(),
                                                        sourceQuestContent: ew.uF.QUEST_HOME_HERO,
                                                    },
                                                );
                                            },
                                            size: "md",
                                            text: t.cta.buttonLabel,
                                            variant: "overlay-primary",
                                        }),
                                        !c &&
                                            null != x &&
                                            (0, r.jsx)(g.$, {
                                                onClick: () => {
                                                    s(x),
                                                        (0, np.E5)(np.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                            ? (0, nC.r)({
                                                                  type: nN.F.CLICK_INTERNAL,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  adCreativeId: t.id,
                                                                  questContentCTA: ez.Cy.VIEW_QUESTS,
                                                                  surfaceId: ew.uF.QUEST_HOME_HERO,
                                                                  sourceQuestContent: ew.uF.QUEST_HOME_HERO,
                                                              })
                                                            : (0, ne.vK)({
                                                                  adContentId: t.id,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  questContent: ew.uF.QUEST_HOME_HERO,
                                                                  questContentCTA: ez.Cy.VIEW_QUESTS,
                                                                  sourceQuestContent: ew.uF.QUEST_HOME_HERO,
                                                              });
                                                },
                                                size: "md",
                                                text: ea.intl.string(ea.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(nJ, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(nV, { hero: t, isBannerLoading: n, shelfQuests: u, onQuestCtaClick: s }),
        ],
    });
}
function n0() {
    return (0, r.jsx)("div", { className: o()(nb.iE, nb.FG, nb.B3), children: (0, r.jsx)(el.y, {}) });
}
var n1 = s(740879),
    n2 = s(604880),
    n4 = s(318808);
function n3(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, tE.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: n1.MY,
        children: [
            (0, r.jsx)("img", { className: n1.Bg, src: n4.Ay, alt: "" }),
            (0, r.jsx)("div", { className: n1.r$, children: (0, r.jsx)("img", { src: n2, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: n1.Nr,
                children: [
                    (0, r.jsx)(eN.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: n1.ky,
                        children: ea.intl.string(ea.t.GXmn57),
                    }),
                    (0, r.jsx)(eH.E, {
                        variant: "text-md/normal",
                        className: n1.G3,
                        children: ea.intl.string(ea.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: ea.intl.string(ea.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function n7(e) {
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
var n8 = s(298537);
let n6 = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, s9.C)(),
        { useNewTile: n } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = G.Mk.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        o = l === G.d.LARGE_MASK_MARGIN,
        u = sd(a, sK(s, o), 20, 3);
    return (0, r.jsxs)(j.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: n8.kL,
        ref: a,
        children: [
            (0, r.jsxs)(eN.D, {
                variant: "heading-lg/medium",
                children: [ea.intl.string(ea.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(j.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: n8.y7,
                      children: [
                          (0, r.jsx)(n7, { alt: ea.intl.string(ea.t["Xe+fJM"]) }),
                          (0, r.jsxs)(j.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(eN.D, {
                                      variant: "heading-lg/medium",
                                      children: ea.intl.string(ea.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(eN.D, {
                                      variant: "heading-sm/medium",
                                      children: ea.intl.string(ea.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: n8.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${sK(s, o)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== u &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        tD,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ew.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n8.d,
                                            sourceQuestContent: ew.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        eB.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ew.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n8.d,
                                            sourceQuestContent: ew.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var n5 = s(111956),
    n9 = s.n(n5),
    le = s(379078),
    lt = s(704554),
    ls = s(823784);
let ln = {
    searchType: le.n.FUZZY,
    searchStringGenerator: function (e) {
        return [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(tJ.Vq);
    },
    sortType: le.r.JARO_WINKLER,
    throttleMs: 200,
};
var ll = s(631001),
    lr = s(758836),
    li = s(613057),
    la = s(935824);
let lo = i.createContext({});
function lu(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lo);
    return (0, r.jsxs)(e1.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(H.A, { className: la.Jo, innerClassName: la.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lc(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(U.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function ld(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, E.bG)([C.Ay], () => C.Ay.useReducedMotion),
        a = (0, E.bG)([P.A], () => P.A.isFocused()),
        { ref: o, inViewport: u } = (0, tY.p)(),
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
        let e = (0, k.TM)();
        return (0, r.jsx)(z._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (n) =>
                (0, r.jsx)(b.A, {
                    ref: (e) => {
                        (c.current = e), (o.current = e), (n.current = e);
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
                }),
        });
    }
    return (0, r.jsx)(z._M, {
        id: "QuestHomeHeroBackground_bannerImage",
        children: (e) =>
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
                className: s,
                alt: "",
                onLoad: t,
                ref: e,
            }),
    });
}
function lm(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(la.Tv, { [la.lJ]: s }),
        children: [
            (0, r.jsx)(n$, {}),
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
    let { className: t, onAssetLoad: s } = e,
        { enabled: n } = V.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        l = !n,
        a = i.useCallback(() => {
            l ? window.open(ef.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(ef.MVz.QUESTS_LEARN_MORE));
        }, [l]);
    return (0, r.jsx)(nM, {
        className: t,
        adContentId: l ? th.yr : th.uz,
        title: l ? ea.intl.format(ea.t.BCBIlp, {}) : ea.intl.format(ea.t.lmMBfy, {}),
        subtitle: l ? ea.intl.format(ea.t.U9FY0J, {}) : ea.intl.string(ea.t.oWCrBq),
        buttons: l
            ? (0, r.jsxs)(f.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: ea.intl.string(ea.t["1Wm127"]),
                          onClick: () =>
                              (0, O.Cz)({
                                  tab: lr.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: N.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: ea.intl.string(ea.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: ea.intl.string(ea.t.hvVgAZ),
                  onClick: a,
                  icon: v.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lm, { onAssetLoad: s, isVirtualCurrencyEnabled: l }),
    });
}
function lh(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, z.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(la.iS, { [la.R]: i }),
        children: [
            c && (0, r.jsx)(n0, {}),
            !l &&
                (null == n || a
                    ? (0, r.jsx)(lE, { className: o()({ [la.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(nZ, { hero: n, isBannerLoading: u, onQuestCtaClick: s })),
        ],
    });
}
let lx = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(s.search).getAll(K.L1.AD_CREATIVE_IDS), [s.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        x = (0, E.bG)([A.A], () => A.A.getState("quests")),
        {
            selectedTab: f,
            onSelectTab: g,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = ll.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, K.p5)(),
                { enabled: r } = G.Mk.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                ll.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                ll.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: K.NC.ALL, label: o ? ea.intl.string(ea.t.Jt6u7B) : ea.intl.string(ea.t["0SzXmi"]) },
                            t
                                ? {
                                      id: K.NC.CLAIMED,
                                      label: o ? ea.intl.string(ea.t["3TVY/R"]) : ea.intl.string(ea.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: K.NC.PREVIEW_TOOL, label: ea.intl.string(ea.t.BDUDau) } : null,
                        ].filter(tJ.Vq),
                    [t, l, o],
                ),
                selectedTab: s,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !0 }),
        {
            query: C,
            setQuery: b,
            matchingQuestIds: M,
            onSearchClose: Q,
        } = (() => {
            let [e, t] = i.useState(""),
                [s, n] = i.useState(null),
                l = (0, E.yK)([X.A], () =>
                    (0, K.mn)(Array.from(X.A.quests.values()), { sortMethod: th.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                a = "" !== r,
                o = i.useMemo(() => n9()(ne.gr, 1e3), []),
                u = i.useCallback(() => {
                    o.cancel();
                    let e = (0, ls.tv)();
                    null != e &&
                        (0, ne.XH)({
                            searchSessionId: e.uuid,
                            searchSessionDurationMs: Date.now() - e.createdAtTimestamp,
                        }),
                        (0, ls.l6)();
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
                                      .filter(tJ.Vq)
                                : null,
                        ),
                        a)
                    ) {
                        let { searchSession: t, isNew: s } = (0, ls.$N)();
                        s && (0, ne.OQ)({ searchSessionId: t.uuid }),
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
            return (0, lt.RT)(r, l, d, ln), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c };
        })(),
        { onScroll: H } = (0, y.G)(),
        U = W.A.getState().getUtmCurrentContext(),
        D = nS((e) => e.registerAssetLoad),
        P = i.useRef(U);
    i.useEffect(() => {
        P.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = P;
            (0, p.x)({
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
        }, [f]),
        (0, I.HU)({ location: ea.intl.string(ea.t.JALI2K) });
    let k = i.useRef(null),
        { enabled: w } = G.Mk.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: V } = G.aD.useConfig({ location: th.rE.QUEST_HOME_DESKTOP }),
        Y = w || V,
        J = i.useRef(null),
        Z = i.useCallback((e) => {
            J.current?.scrollToQuest(e);
        }, []),
        ee = i.useMemo(() => ((0, B.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: et, isLoading: es } = (0, $.lg)(l[0] ?? null),
        en = i.useCallback(() => {
            (0, q.Y)({
                pageType: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ef.JJy.ORBS_BALANCE_MENU,
                ctaObject: ef.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, O.Cz)({ tab: lr.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU });
        }, []);
    i.useEffect(() => {
        (0, _.I)(ef.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            L.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != x) return;
            let e = new URLSearchParams(s.search),
                l = e.get(K.L1.TAB);
            if (l === K.NC.PREVIEW_TOOL) {
                let t = e.get(K.L1.QUEST_ID);
                T.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: li.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== K.NC.PREVIEW_TOOL) {
                let t = (0, B.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(K.L1.SORT),
                    r = e.get(K.L1.FILTER),
                    i = e.get(K.L1.AD_CREATIVE_IDS);
                T.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: li.XK.QUEST_HOME,
                    params: { questId: (0, B.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, x, n.action, s.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let el = i.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), g(e), Q();
            },
            [n, g, Q],
        ),
        er = i.useMemo(() => null != M && Y, [M, Y]),
        ei = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        eo = i.useMemo(() => ({ onScroll: H, scrollerRef: k }), [H, k]),
        eu = (0, G.Qj)() && 0 === l.length;
    return a
        ? (0, r.jsx)(n3, { adCreativeIds: l })
        : (0, r.jsx)(n_.M.Provider, {
              value: ei,
              children: (0, r.jsx)(lo.Provider, {
                  value: eo,
                  children: (0, r.jsx)("div", {
                      className: o()(la.kL, { [la.KY]: !t }),
                      children: (0, r.jsxs)(lu, {
                          header: (0, r.jsx)(lc, {
                              selectedTab: f,
                              onSelectTab: el,
                              tabs: v,
                              endContent: (0, r.jsxs)(j.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      Y &&
                                          (0, r.jsx)(S.I, {
                                              query: C,
                                              onChange: b,
                                              placeholder: ea.intl.string(ea.t.y10TI2),
                                              onClear: Q,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(F.SS, {
                                          analyticsPage: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: F.cP.END,
                                          ctaText: ea.intl.string(ea.t["J+vlIR"]),
                                          ctaOnClick: en,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              f === K.NC.ALL &&
                              !eu &&
                              (0, r.jsx)(
                                  z.y5,
                                  {
                                      source: th.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: et?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: (0, r.jsx)(lh, {
                                          onAssetLoad: D,
                                          onQuestCtaClick: Z,
                                          hasSearchResults: er,
                                          questHomeHero: et,
                                          isLoadingQuestHomeHero: es,
                                      }),
                                  },
                                  et?.id,
                              ),
                          children: [
                              er && null != M && (0, r.jsx)(n6, { matchingQuestIds: M }),
                              f === K.NC.CLAIMED
                                  ? (0, r.jsx)(sP, { onSelectTab: el, className: er ? la.R : void 0 })
                                  : f === K.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(t$, { className: er ? la.R : void 0 })
                                    : Y
                                      ? (0, r.jsx)(nf, {
                                            className: er ? la.R : void 0,
                                            ref: J,
                                            deepLinkedQuestId: ee,
                                            isLoadingQuestHomeHero: !eu && es,
                                            withQuestHomeHero: !eu,
                                        })
                                      : (0, r.jsx)(s_, { ref: J }),
                          ],
                      }),
                  }),
              }),
          });
};
