let n;
s.r(t), s.d(t, { default: () => lj }), s(323874), s(14289), s(35956);
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
    C = s(944791),
    _ = s(775602),
    N = s(793574),
    p = s(139286),
    T = s(197111),
    A = s(10088),
    O = s(34332),
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
    G = s(87549),
    W = s(192444);
let V = (0, s(945810).mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var K = s(573526),
    z = s(557637),
    $ = s(764336);
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
    eg = s(907236);
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
    eS = s(340369);
let eC = function (e) {
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
        C = i.useCallback(async () => {
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
        _ = i.useCallback(
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
                                            onSelectionChange: _,
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
                                onClick: C,
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
var e_ = s(364522),
    eN = s(297264),
    ep = s(761508),
    eT = s(70676);
function eA() {
    return (0, r.jsx)("div", { className: eT.y });
}
var eO = s(684603),
    eI = s(371960);
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
    eQ = s(928050),
    eL = s(152049);
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
    eP = s(660794);
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
    eB = s(976014),
    eG = s(612324),
    eW = s(890856),
    eV = s(43990),
    eK = s(173936),
    ez = s(365199),
    e$ = s(291749),
    eY = s(590202),
    eJ = s(971649),
    eX = s(814793),
    eZ = s(415441),
    e0 = s(73473),
    e1 = s(270045),
    e2 = s(79545),
    e7 = s(321503),
    e6 = s(720875),
    e3 = s(909445),
    e4 = s(339350),
    e8 = s(687966),
    e5 = s(782134),
    e9 = s(271536),
    te = s(768622),
    tt = s(793934),
    ts = s(662940),
    tn = s(496431),
    tl = s(927813);
let tr = 2 * tl.A.Millis.DAY;
var ti = s(927013);
function ta(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, e2.Pd)(t),
        l = (0, E.bG)([X.A], () => n === e2.UA.UNENROLLED && null != X.A.questEnrollmentBlockedUntil, [n]),
        a = (0, K.fc)(t),
        u = (0, K.I3)(t),
        c = i.useMemo(() => (0, ts.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, ts.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, e2.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case e2.UA.UNENROLLED:
                            case e2.UA.ENROLLED:
                            case e2.UA.INCOMPLETE:
                                return !0;
                            case e2.UA.COMPLETED:
                            case e2.UA.CLAIMED:
                            case e2.UA.EXPIRED:
                            case e2.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < tr &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, tn.A)(n, tl.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(ti.fC, { [ti.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: ti.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(eH.E, {
                            variant: "text-xs/semibold",
                            className: ti.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(eH.E, {
                            variant: "text-xs/semibold",
                            color: "text-overlay-light",
                            className: ti.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: ti.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: ti.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(e4.Q, { ...s });
                                    switch ((0, ts.pv)(e)) {
                                        case ts.UK.PLAY:
                                            return (0, r.jsx)(e8._, { ...s });
                                        case ts.UK.WATCH:
                                            return (0, r.jsx)(e5.u, { ...s });
                                        case ts.UK.ACTIVITY:
                                            return (0, r.jsx)(e9.q, { ...s });
                                        case ts.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(te.g, { ...s });
                                        case ts.UK.ARENA:
                                            return (0, r.jsx)(tt.q, { ...s });
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
                    className: o()(ti.qS, ti.WZ),
                    children: (0, r.jsx)(eH.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: ea.intl.string(ea.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var to = s(409626),
    tu = s(3738),
    tc = s(646917),
    td = s(866665),
    tm = s(743368),
    tE = s(792620),
    th = s(657113),
    tx = s(617986),
    tf = s(190107),
    tg = s(936516);
function tv(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, e2.Pd)(t),
        { ctaOnHover: u } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        c = (0, E.bG)([X.A], () => a === e2.UA.UNENROLLED && null != X.A.questEnrollmentBlockedUntil, [a]),
        d = a === e2.UA.EXPIRED || (a === e2.UA.CLAIMED && (0, tE.GL)(t)),
        m = (0, K.do)({ quest: t, content: s, ctaContent: eY.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tg.lO, { [tg.Fq]: l || !u }),
        onClick: (e) => e.stopPropagation(),
        children: (0, r.jsx)("div", {
            className: tg.mv,
            children: (0, r.jsx)(eV.N, {
                theme: ef.NJ8.DARKER,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, tg.tn),
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
                                    : (0, r.jsx)(td.m, {
                                          text: ea.intl.string(ea.t.LLLLPD),
                                          position: "top",
                                          align: "center",
                                          ariaHidden: !0,
                                          children: (0, r.jsx)(ee.K, {
                                              variant: "secondary",
                                              icon: tm.W,
                                              "aria-label": ea.intl.string(ea.t.LLLLPD),
                                              onClick: m,
                                          }),
                                      }),
                                !d &&
                                    !c &&
                                    (0, r.jsx)(th.A, {
                                        quest: t,
                                        surface: e2.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                c &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: ea.intl.string(ea.t.vY9GgG),
                                        onClick: () => (0, tx.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
var tj = s(403581),
    tS = s(576761),
    tC = s(473056);
function t_(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, K.ZP)(s),
        i = (0, tS.B9)(n);
    if (null == l) return null;
    let a = i
        ? ea.intl.formatToPlainString(ea.t.l2UfLG, { bonusOrbMultiplier: l })
        : ea.intl.formatToPlainString(ea.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(ed.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, tx.gC)(l, n), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: tC.k,
            children: [
                (0, r.jsx)(tj.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(eH.E, { variant: "text-sm/normal", color: "currentColor", className: tC.Q, children: a }),
            ],
        }),
    });
}
var tN = s(947641),
    tp = s(194261),
    tT = s(106799),
    tA = s(287809),
    tO = s(710969),
    tI = s(801365),
    tb = s(453384),
    tR = s(646764),
    tM = s(719095);
function tQ(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, E.bG)([tA.default], () => tA.default.getCurrentUser()),
        a = (0, tI.mq)(t.config, i),
        u = (0, tI.ks)(t.config),
        c = (0, tI.wo)(t.config, i),
        d = (0, tI.l0)(t.config, i),
        m =
            null != c
                ? c > 700 * d
                    ? e$.i2.TIER_4
                    : c > 200 * d
                      ? e$.i2.TIER_3
                      : c > 100 * d
                        ? e$.i2.TIER_2
                        : e$.i2.TIER_1
                : void 0,
        { completedRatio: h } = (0, K.O9)(t),
        x = t.userStatus?.claimedAt != null,
        f = (0, tO.Ic)(t),
        g = t.userStatus?.enrolledAt == null,
        v = x ? "completed" : f ? "expired" : null,
        j = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tR.A, {
                    quest: t,
                    orbTier: m,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: tM.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === v &&
                    (0, r.jsx)("div", {
                        className: tM.EY,
                        children: (0, r.jsx)(tN.r, { className: tM.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === v &&
                    (0, r.jsx)("div", {
                        className: tM.EY,
                        children: (0, r.jsx)(tp.X, { size: "sm", className: tM.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: o()(tM.CZ, { [tM.Pv]: l }),
        children: [
            (0, r.jsx)("div", {
                className: o()(tM.tE, { [tM.cB]: l }),
                children: g
                    ? (0, r.jsx)("div", { className: tM.fm, children: j })
                    : (0, r.jsx)(tb.A, {
                          size: 66,
                          percentComplete: h,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: tM.n5, children: j }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: o()(tM.FS, { [tM.IR]: l }),
                children: [
                    (0, r.jsx)(eH.E, {
                        variant: "text-sm/medium",
                        className: tM.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(tM.oV, { [tM.FJ]: l }),
                        children: [
                            u && (0, r.jsx)(tT.A, { className: tM.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                eH.E,
                                {
                                    variant: "text-md/medium",
                                    className: tM.zN,
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: u ? c : a,
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
var tL = s(758175);
function ty(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, tu.A9)(t, a, tf.rE.QUEST_HOME_DESKTOP, to.GameProfileSources.QuestHome, u),
        d = (0, tc.z)(),
        m = (0, K.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: tL.qr,
        children: [
            (0, r.jsx)(tQ, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n }),
            (0, r.jsxs)("div", {
                className: tL.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: tL.Wi,
                        children: [
                            (0, r.jsx)(eH.E, {
                                variant: "text-sm/normal",
                                className: o()(tL.Wj, tL.h_, { [tL.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(eH.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(tL.Wj, tL.XV, { [tL.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tL.Gv,
                        children: [
                            (0, r.jsx)(eH.E, {
                                variant: "text-sm/normal",
                                className: tL.I4,
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
                                        (0, r.jsx)(t_, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tv, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var tH = s(688755),
    tU = s(831368),
    tD = s(343360);
function tq(e) {
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
            sourceQuestContent: h,
        } = e,
        x = i.useMemo(() => (0, e$.tW)(s, e$.fY.QUEST_BAR_HERO_IMAGE), [s]),
        f = i.useMemo(() => (0, e$.tW)(s, e$.fY.QUEST_BAR_HERO_VIDEO), [s]),
        {
            isActive: g,
            shouldRender: v,
            hoverHandlers: j,
            handleMenuOpen: S,
            handleMenuClose: C,
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
        _ = i.useMemo(() => ({ onMenuOpen: S, onMenuClose: C }), [S, C]),
        N = (0, e2.Pd)(s),
        p = (0, eJ.go)(),
        T = (0, eX.E0)(s.config),
        A = (0, E.bG)([ex.A], () => ex.A.theme),
        O = A === ef.NJ8.DARK || A === ef.NJ8.DARKER,
        I = A === ef.NJ8.LIGHT,
        b = i.useContext(e7.X),
        { visibilityElementRef: R, almostVisibleInViewport: M } = (0, tU.I)(
            b?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: Q,
            handleHoverEnd: L,
            isEventWithinParent: y,
        } = (0, tH.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: h }),
        H = (0, $.Lk)({
            isShareable: T,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: eY.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: p,
                    sourceQuestContent: h,
                }),
                [n, h, p],
            ),
        }),
        U = (0, K.do)({ quest: s, content: n, ctaContent: eY.Cy.OPEN_GAME_LINK, sourceQuestContent: h }),
        D = (0, eG.A)(m, R);
    return (0, r.jsx)("div", {
        id: (0, eB.sT)(s.id, t),
        className: tD.uW,
        onMouseEnter: () => {
            j.onMouseEnter(), Q();
        },
        onMouseLeave: () => {
            j.onMouseLeave(), L();
        },
        onFocus: (e) => {
            y(e) || (j.onFocus(), Q());
        },
        onBlur: (e) => {
            y(e) || (j.onBlur(), L());
        },
        children: (0, r.jsxs)(eW.s, {
            tag: "article",
            ref: D,
            onClick: U,
            "aria-label": ea.intl.formatToPlainString(ea.t.EAYZAr, { questName: s.config.messages.questName }),
            className: o()(tD.kL, { [tD.iR]: l, [tD.DM]: g }, a),
            children: [
                (0, r.jsx)(e6.A, {
                    showPlaceholder: !M,
                    width: 600,
                    height: 450,
                    className: tD.Tv,
                    children: (0, r.jsx)(eZ.N, {
                        imageAsset:
                            null != x
                                ? {
                                      asset: x,
                                      assetId: "QuestTileV2",
                                      alt: ea.intl.string(ea.t.jnijWz),
                                      className: tD.Tv,
                                  }
                                : void 0,
                        videoAsset:
                            null != f
                                ? {
                                      asset: f,
                                      assetId: "QuestTileV2_heroAnimated",
                                      className: o()(tD.Tv, tD.gJ, { [tD.C7]: g }),
                                  }
                                : void 0,
                        imageSize: { width: 600, height: 450 },
                        showVideo: v,
                    }),
                }),
                (0, r.jsx)("div", { className: o()(tD.sL, { [tD.Mq]: N === e2.UA.EXPIRED }) }),
                I
                    ? (0, r.jsx)(eV.N, {
                          theme: ef.NJ8.MIDNIGHT,
                          disableAdaptiveTheme: !0,
                          children: (e) => (0, r.jsx)("div", { className: o()(e, tD.f5) }),
                      })
                    : (0, r.jsx)("div", { className: o()(tD.f5, { [tD.kg]: O }) }),
                (0, r.jsxs)("div", {
                    className: tD.qy,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tD.wx,
                            children: [
                                (0, r.jsx)(ta, { quest: s, isHovering: g }),
                                (0, r.jsxs)("div", {
                                    className: o()(tD.$s, { [tD.rk]: g }),
                                    onClick: (e) => e.stopPropagation(),
                                    children: [
                                        l &&
                                            T &&
                                            (0, r.jsx)(ed.D, {
                                                tag: "div",
                                                className: tD.E9,
                                                onClick: H,
                                                "aria-label": ea.intl.string(ea.t.WqhZss),
                                                children: (0, r.jsx)(eK.q, { size: "sm", color: "currentColor" }),
                                            }),
                                        (0, r.jsx)(e1.C, {
                                            questContent: n,
                                            quest: s,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            sourceQuestContent: h,
                                            onOpen: S,
                                            onClose: C,
                                            children: (e) =>
                                                (0, r.jsx)(ed.D, {
                                                    ...e,
                                                    tag: "div",
                                                    className: tD.E9,
                                                    "aria-label": ea.intl.string(ea.t.DEoVWZ),
                                                    children: (0, r.jsx)(ez.j, { size: "sm", color: "currentColor" }),
                                                }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(e3.J.Provider, {
                            value: _,
                            children: (0, r.jsx)(ty, {
                                quest: s,
                                questContent: n,
                                isInFeaturedSection: l,
                                isHovering: g,
                                sourceQuestContent: h,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
let tF = i.memo(function (e) {
    let t = (0, E.bG)([X.A], () => (null != e.questId ? X.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(e0.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === ew.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(tq, { ...e, quest: s, impressionRef: t }),
          });
});
function tP(e) {
    let { quest: t } = e,
        { useNewTile: s } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP });
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
                    ? (0, r.jsx)(tF, {
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
var tk = s(97808),
    tw = s(778712),
    tB = s(87664),
    tG = s(427262),
    tW = s(198525),
    tV = s(715672);
let tK = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([tA.default], () => tA.default.getCurrentUser()),
        u = tG.Ay.useName(a),
        c = (0, tB.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(tW.default, {
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
                    className: tV.R_,
                    variant: "heading-md/semibold",
                    children: ea.intl.string(ea.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: tV.$Q, children: ea.intl.string(ea.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: tV.k0,
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
                                className: o()(tV.Tn, { [tV.wH]: s }),
                                children: (0, r.jsx)(ed.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: tV.lm,
                                        children: [
                                            (0, r.jsx)(tk.eu, {
                                                size: tw._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: ef.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: tV.Fj,
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
function tz(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, E.bG)([X.A], () => X.A.getQuest(t));
    if (null != (0, E.bG)([X.A], () => X.A.getFetchQuestPreviewError(t)) || null == n) return null;
    function l(e) {
        return null == s || 0 === s.length || s.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ey, { quest: n }), (0, r.jsx)(eA, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tP, { quest: n }), (0, r.jsx)(eA, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ek, { questId: n.id }), (0, r.jsx)(eA, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eq, { quest: n }), (0, r.jsx)(eA, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tK, { quest: n }), (0, r.jsx)(eA, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eb, { quest: n }), (0, r.jsx)(eA, {})] }),
        ],
    });
}
var t$ = s(711731);
function tY(e) {
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
    return (0, r.jsx)(e_.Ip, {
        className: o()(t$.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: t$.qE,
            children: [
                (0, r.jsx)(eN.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ea.intl.string(ea.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: t$.pf, children: l }),
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
                (0, r.jsx)("div", { className: t$.tZ, children: (0, r.jsx)("div", { className: t$.Qs, children: t }) }),
            ],
        }),
    });
}
let tJ = function (e) {
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
            function e(e) {
                let { quest_id: t } = e;
                t === n && (0, J.dQ)(n);
            }
            return (
                Y.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    Y.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = i.useState([]);
    return (0, r.jsx)(tY, {
        className: s,
        controls: (0, r.jsx)(eC, {
            questId: n,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != n && (0, J.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(tz, { questId: o?.id, selectedSections: c }) : null,
    });
};
var tX = s(203879),
    tZ = s(403362),
    t0 = s(167417),
    t1 = s(783977),
    t2 = s(651892),
    t7 = s(305866),
    t6 = s(915089),
    t3 = s(192229);
function t4(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(eH.E, { className: t3.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let t8 = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, t6.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(es.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(t7.l, { className: t3.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var t5 = s(605123);
let t9 = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, K.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(t8, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, t2.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: t5.B }),
                                    (0, r.jsx)(t4, { id: a, children: e.heading }),
                                    (0, r.jsx)(t0.$, {
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
                    (0, r.jsx)("hr", { className: t5.B }),
                    (0, r.jsx)("div", {
                        className: t5.W,
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
                icon: t1.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var se = s(144228),
    st = s(715482);
let ss = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([_.Ay], () => _.Ay.keyboardModeEnabled),
        o = (0, K.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(t8, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(t4, { id: t, children: ea.intl.string(ea.t.tZXJIS) }),
                    (0, r.jsx)(se.z, {
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
                "aria-label": ea.intl.formatToPlainString(ea.t.lPlIMo, { selected: (0, t2.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, t2.Js)(n),
                icon: st.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sn = s(617498),
    sl = s(717421);
function sr(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, sn.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, sn.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var si = s(691540),
    sa = s(857250),
    so = s(97483),
    su = s(174459);
function sc() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, si.P0)((0, sa.o)(ea.intl.string(ea.t["5ABf1w"]), so.Ck.FAILURE)),
                su.default.track(ef.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
var sd = s(535185);
function sm(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function sE(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(sm(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sd.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var sh = s(904080);
let sx = 4 * tl.A.Millis.SECOND;
function sf(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = sE(l, s, n);
    return (0, r.jsx)("div", {
        className: sh.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let sg = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = sc(),
        h = i.useRef(""),
        [x, f] = i.useState(null),
        [g, v] = i.useState(0),
        { useNewTile: j } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: S }, C] = (0, sl.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sx },
        })),
        _ = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, tO.vc)(e, s, n);
                return null == t ? (E(e), !1) : (f(t.id), v((e) => e + 1), !0);
            },
            [s, n, l, E, a],
        );
    return (i.useImperativeHandle(t, () => ({ scrollToQuest: _ }), [_]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        l || !a || (m.hash !== h.current && _(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, l, a, _]),
    i.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
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
    }, [x, g, C]),
    l && 0 === s.length)
        ? (0, r.jsx)(el.y, { className: sh.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sh.y7,
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
          : (0, r.jsx)(sf, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            sn.animated.div,
                            {
                                className: o()({ [sh.XB]: l }),
                                style: sr(l, i, S),
                                children: [
                                    l && (0, r.jsx)("div", { className: sh.E4 }, g),
                                    j
                                        ? (0, r.jsx)(tF, {
                                              quest: t,
                                              questContent: ew.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sh.d,
                                              sourceQuestContent: ew.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eB.Ay, {
                                              quest: t,
                                              questContent: ew.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sh.d,
                                              sourceQuestContent: ew.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sv = s(458518),
    sj = s(367518);
let sS = [],
    sC = K.L1.SORT,
    s_ = K.L1.FILTER,
    sN = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, sv.o)()),
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
                    (e = c.get(sC)),
                    ((0, B.uJ)(e) ? null : (Object.values(tf.kL).find((t) => t === e) ?? null)) ?? tf.kL.SUGGESTED
                );
            }, [c]),
            E = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, B.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tf.WQ)(e))
                            .filter(tZ.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(s_)) ?? sS,
                [c],
            ),
            h = i.useCallback(
                (e) => {
                    d({ [sC]: e });
                },
                [d],
            ),
            x = i.useCallback(
                (e) => {
                    d({
                        [s_]:
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
                x(sS);
            }, [x]),
            C = i.useRef(null),
            _ = i.useRef(null),
            N = (0, u.zy)(),
            p = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== N.hash &&
                    null != C.current &&
                    null != _.current &&
                    (m !== C.current || E !== _.current) &&
                    p.replace({ ...N, hash: void 0 });
            }, [m, E, N, p]),
            i.useEffect(() => {
                C.current = m;
            }, [m]),
            i.useEffect(() => {
                _.current = E;
            }, [E]),
            (0, K.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: f.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        S(),
                            h(tf.kL.SUGGESTED),
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
                        className: sj.Mj,
                        children: [
                            (0, r.jsx)(eN.D, { variant: "heading-lg/medium", children: ea.intl.string(ea.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sj.Nf,
                                children: [
                                    (0, r.jsx)(ss, { onChange: h, optionClassName: sj.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(t9, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sg, {
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
var sp = s(575593),
    sT = s(440703),
    sA = s(462887),
    sO = s(187322),
    sI = s(765671),
    sb = s(736653),
    sR = s(162232),
    sM = s(734736),
    sQ = s(303136),
    sL = s(696698),
    sy = s(181713);
let sH = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sy.A : sy.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sL.k, t),
        children: s
            ? (0, r.jsx)(sQ.A, {
                  preload: "auto",
                  className: sL.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sL.L, src: l, alt: n }),
    });
};
var sU = s(57718),
    sD = s(417817);
let sq = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        x = (0, E.bG)([tA.default], () => tA.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, sI.Ay)(),
        v = (0, sb.Ay)(),
        j = (0, K.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        S = t.userStatus?.claimedTier ?? 0,
        C = t.config.rewards[S],
        _ = C?.type === sT.l.FRACTIONAL_PREMIUM,
        N = C?.type === sT.l.COLLECTIBLE,
        p = C?.type === sT.l.VIRTUAL_CURRENCY,
        T = C?.collectibleProduct?.items?.[0],
        A = T?.type === sp.R.AVATAR_DECORATION ? T : null,
        O = i.useMemo(
            () =>
                null == C
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? ea.intl.format(ea.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : C.name,
            [C, p, t],
        );
    (0, sI.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == d.current || null == h.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let I = (0, sA.M)(v),
        R = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, e$.tW)(t, e$.fY.REWARD), [t]),
        Q = s ? g + 8 : 0,
        { content_position: L, row_index: y, ...H } = (0, eY.fF)(ew.uF.TROPHY_CASE_CARD);
    function U() {
        n(!0), su.default.track(ef.HAw.QUEST_HOVER, { quest_id: t.id, ...H });
    }
    function D() {
        n(!1);
    }
    function q(e) {
        c(!0), su.default.track(ef.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == C || u
        ? null
        : (0, r.jsx)(sO.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: U,
                  onBlur: D,
                  onMouseEnter: U,
                  onMouseLeave: D,
                  className: o()(sD.kL, { [sD.yo]: s }),
                  children: [
                      null != x &&
                          N &&
                          null != A &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: sD.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sR.A, {
                                  avatarDecorationOverride: A,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      _
                          ? (0, r.jsx)(sM.A, { className: sD.Sl })
                          : p
                            ? (0, r.jsx)(sH, {
                                  className: sD.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(b.A, {
                                    className: sD.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => q(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sD.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => q(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sD.Lw, { [sD.en]: I, [sD.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sD.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sU.Ay, {
                              logotypeClassName: o()(sD.wm, { [sD.A0]: R }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: sD.zH,
                          children: [
                              (0, r.jsx)(eN.D, {
                                  className: sD.DD,
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
var sF = s(396478);
function sP(e) {
    let { onClick: t } = e,
        n = (0, sb.Ay)();
    return (0, r.jsxs)(sF.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sF.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sF.SG, { note: ea.intl.format(ea.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sk = s(839944);
function sw(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, K.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(el.y, { className: sk.u })
        : 0 === n.length
          ? (0, r.jsx)(sP, { onClick: () => t(K.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sk.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sq, { quest: e }, e.id)),
            });
}
var sB = s(548411),
    sG = s(554830),
    sW = s(689175),
    sV =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let sK = [
    { type: "featured-quests", identifier: "featured", title: ea.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: ea.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: ea.t.P0lmqC },
    { type: "quests", identifier: "orb", title: ea.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: ea.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: ea.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: ea.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: ea.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function sz(e) {
    return eu.A.space.SPACE_XL.resolve({ density: e });
}
function s$(e, t) {
    return (1220 - 2 * sz(e) * (t ? 2 : 0.75)) / 3;
}
var sY = s(631499);
let sJ = "data-scroll-target",
    sX = `[${sJ}]`,
    sZ = { anchors: [], pageSize: 1 },
    s0 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function s1(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let s2 = i.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = sX,
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
            [S, C] = i.useState(!0),
            [N, p] = i.useState([]),
            [T, A] = i.useState(1),
            O = (0, E.bG)([_.Ay], () => _.Ay.useReducedMotion) ? "auto" : "smooth",
            I = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (g(e.scrollLeft > 0), j(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
            }, []),
            b = i.useCallback(() => {
                let { anchors: e, pageSize: t } = (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return sZ;
                    let i = Array.from(r.querySelectorAll(s));
                    if (0 === i.length) return sZ;
                    let a = i[0].offsetWidth,
                        o = i.length > 1 ? i[1].offsetLeft - i[0].offsetLeft - a : 0,
                        u = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (a + o))),
                        c = i.length - u + 1;
                    return c <= 1
                        ? sZ
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
                if (null == x.current || x.current?.clientWidth === 0) return C(!0);
                C(x.current?.clientWidth >= 1260);
            }, [x]),
            M = i.useCallback(
                (e) => {
                    let t = d.current?.getScrollerNode();
                    if (null == t || N.length < 2) return;
                    let { currentIndex: s, scrollLefts: n } = s1(t, N),
                        l = Math.max(0, Math.min(N.length - 1, s + e * T));
                    (m.current = eY.pk.ARROW), t.scrollTo({ left: n[l], behavior: O });
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
                    ((m.current = eY.pk.MANUAL),
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
                let { currentIndex: t } = s1(e, N),
                    s = m.current ?? eY.pk.MANUAL;
                m.current = null;
                let n = h.current;
                h.current = e.scrollLeft;
                let l = e.scrollLeft > n ? eY.VU.RIGHT : eY.VU.LEFT;
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
                        o = null == a ? null : a.matches(s0) ? a : a.querySelector(s0);
                    null != o && (o.focus({ preventScroll: !0 }), e.repeat && Q(a, "instant"));
                },
                [n, Q],
            ),
            U = i.useCallback(() => {
                I(), b(), R();
            }, [I, b, R]);
        (0, sd.g)(x, U, [], { fireOnMount: !0 });
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
            className: o()(s, sY.m7),
            ref: x,
            style: q,
            children: [
                (0, r.jsx)("div", {
                    className: o()(sY.k9, sY.RW, { [sY.Q2]: f }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(ee.K, {
                        icon: sB.Z,
                        variant: "overlay-secondary",
                        onClick: () => M(-1),
                        disabled: !f,
                        "aria-label": ea.intl.string(ea.t.vgfxaA),
                        tabIndex: -1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(sY.k9, sY.K3, { [sY.Q2]: v }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(ee.K, {
                        icon: sG.K,
                        variant: "overlay-secondary",
                        onClick: () => M(1),
                        disabled: !v,
                        tabIndex: -1,
                        "aria-label": ea.intl.string(ea.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [sY.sF]: f && S, [sY.RC]: v && S, [sY.Ni]: D && !f, [sY.GA]: D && !v }),
                    children: (0, r.jsx)(sW.zC, {
                        ref: d,
                        orientation: "horizontal",
                        onScroll: I,
                        onScrollEnd: y,
                        onFocusCapture: L,
                        onKeyDown: H,
                        className: o()({ [sY.x2]: D }, sY.XG),
                        children: (0, r.jsxs)(e7.X.Provider, {
                            value: d,
                            children: [
                                t,
                                N.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: sY.fw, style: { insetInlineStart: `${e}px` } },
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
    s7 = i.createContext({
        targetQuestId: null,
        targetSectionIdentifier: null,
        highlightCount: null,
        highlightAnimationProgress: null,
    });
var s6 = s(912532);
function s3(e) {
    let { children: t, sectionIdentifier: s, questId: n, featuredSection: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: o,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(s7),
        d = a === n && o === s,
        m = null != a && (a !== n || o !== s),
        { useNewTile: E } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        h = l ? "var(--radius-lg)" : "var(--radius-sm)",
        x = i.useMemo(() => ({ ...sr(d, m, c), borderRadius: E ? h : "10px" }), [d, m, c, E, h]);
    return (0, r.jsxs)(sn.animated.div, {
        [sJ]: "",
        className: d ? s6.X : void 0,
        style: x,
        children: [d && (0, r.jsx)("div", { className: s6.E }, u), t],
    });
}
var s4 = s(359246);
function s8(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : sm(t, 345, 20, 2)), [t]);
    return (
        i.useEffect(() => {
            null !== o && l(Math.ceil(s.length / o) - 1);
        }, [s.length, o, l]),
        (0, r.jsx)("div", {
            className: s4.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != o &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        s3,
                        {
                            featuredSection: !0,
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      tF,
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
var s5 = s(948884),
    s9 = s(627568);
function ne(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(s5.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: o()(s9.m, s5.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: s5.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(s9.m, s5.Vr) }, t),
                ),
            }),
        ],
    });
}
var nt = s(418842),
    ns = s(561844),
    nn = s(412372);
function nl(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(s7),
        { useNewTile: o } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = W.Mk.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        c = (0, nt.C)(),
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
                (0, ns.kO)({
                    scrollingType: d ? eY.pk.AUTO : n,
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
        E = u === W.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(s2, {
        maskWidth: sz(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${s$(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: nn.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        s3,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(tF, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nn.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(eB.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === sV.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nn.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: nn.fu }),
            ],
        }),
    });
}
var nr = s(958538);
let ni = tl.A.Millis.WEEK;
function na() {
    let e = X.A.quests;
    if (0 === X.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tO.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class no extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(X.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - ni;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([X.A], na), t;
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
let nu = new no(Y.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            if (null == X.A.getQuest(e.questId)) return !1;
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    nc = 2 * tl.A.Millis.DAY,
    nd = new Map(sK.map((e) => [e.identifier, e])),
    nm = {
        [sV.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nE(e, t) {
    let s = nd.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
function nh(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
let nx = function () {
    let e = (0, tG.Gn)(),
        t = (0, K.Cv)(),
        s = (0, E.bG)([X.A], () => X.A.lastFetchedCurrentQuests > 0),
        { quests: n, isFetchingCurrentQuests: l } = (0, K.Qh)(K.NC.ALL, {
            sortMethod: tf.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, nr.A)(
            () =>
                n.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            n.map((e) => {
                let { id: t } = e;
                return t;
            }),
            nh,
        ),
        a = (0, $.T2)(),
        o = (0, E.bG)([nu], () => nu.getDiscoveredAtByQuestId(), []),
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
                                  return (0, tO.kd)(t) && !c
                                      ? r
                                          ? [sV.EXPIRED]
                                          : null
                                      : (n.has(t.id) && u.push(sV.DISCOVERED),
                                          i && !0 === o && u.push(sV.PREVIEW),
                                          null != a && null != a.enrolledAt && null == a.claimedAt)
                                        ? [...u, sV.IN_PROGRESS]
                                        : null != s && (0, eX.I0)(s, t.id) && nE(sV.FEATURED, l)
                                          ? [...u, sV.FEATURED]
                                          : new Date(t.expiresAt).valueOf() <= Date.now() + nc
                                            ? [...u, sV.ENDING_SOON]
                                            : nE(sV.FEATURED, l)
                                              ? [...u, sV.FEATURED]
                                              : (0, tI.ks)(t)
                                                ? [...u, sV.ORB]
                                                : [...u, sV.SPECIAL_QUESTS];
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
                              sK
                                  .map((e) => {
                                      let t = nm?.[e.identifier];
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
                      })({ allQuestIds: r, hero: a, discoveredAtByQuestId: o, isStaff: e, isPreviewerOnAnyQuest: t }),
            [r, a, o, u, e, t],
        ),
        d = i.useCallback((e) => c.find((t) => t.questIds.includes(e))?.identifier ?? null, [c]);
    return { sections: c, isFetchingCurrentQuests: u, getSectionIdentifierForTargetedQuest: d };
};
var nf = s(673672);
let ng = {
        [sV.FEATURED]: ew.uF.QUEST_HOME_FEATURED_SECTION,
        [sV.IN_PROGRESS]: ew.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [sV.ENDING_SOON]: ew.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [sV.ORB]: ew.uF.QUEST_HOME_ORB_SECTION,
        [sV.DISCOVERED]: ew.uF.QUEST_HOME_DISCOVERED_SECTION,
        [sV.EXPIRED]: ew.uF.QUEST_HOME_EXPIRED_SECTION,
        [sV.PREVIEW]: ew.uF.QUEST_HOME_PREVIEW_SECTION,
        [sV.SPECIAL_QUESTS]: ew.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    nv = 4 * tl.A.Millis.SECOND,
    nj = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: a = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
            { sections: d, isFetchingCurrentQuests: m, getSectionIdentifierForTargetedQuest: E } = nx(),
            h = i.useRef(null),
            { showToast: x } = sc(),
            [f, g] = i.useState(null),
            [v, j] = i.useState(null),
            [S, C] = i.useState(0),
            [_, N] = i.useState(null),
            [p, T] = i.useState(0),
            A = i.useRef(null),
            O = i.useCallback(
                (e) => {
                    N(e.contentRect.width);
                },
                [N],
            );
        (0, sd.g)(h, O, [O], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: I }, b] = (0, sl.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nv },
            })),
            R = i.useCallback(
                (e, t) => {
                    if (null == e || null == _ || m || n) return !1;
                    t && (0, J.sB)(e);
                    let s = E(e),
                        l = !0 === t && s !== sV.FEATURED ? sV.DISCOVERED : s;
                    if (null == s) return x(e), !1;
                    let r = document.getElementById((0, eB.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (g(e),
                        j(l),
                        C((e) => e + 1),
                        r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        b({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || (g(null), j(null));
                            },
                        }),
                        !0)
                    );
                },
                [g, C, b, m, n, x, _, E],
            );
        i.useImperativeHandle(t, () => ({ scrollToQuest: R }), [R]),
            i.useLayoutEffect(() => {
                if (null == s) {
                    A.current = null;
                    return;
                }
                A.current !== s && R(s, !0) && (A.current = s);
            }, [s, R]);
        let M = i.useMemo(
                () => ({
                    targetQuestId: f,
                    targetSectionIdentifier: v,
                    highlightCount: S,
                    highlightAnimationProgress: I,
                }),
                [f, v, S, I],
            ),
            Q = i.useMemo(
                () =>
                    d.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sV.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(s7.Provider, {
            value: M,
            children: (0, r.jsx)("div", {
                className: o()(nf.kL, l, { [nf.Sy]: !a }),
                ref: h,
                children: m
                    ? (0, r.jsx)(ne, { role: "status", "aria-label": ea.intl.string(ea.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: nf.p9,
                                    children: [
                                        (0, r.jsx)(eN.D, {
                                            variant: "heading-lg/semibold",
                                            className: nf.Gf,
                                            children: ea.intl.string(l),
                                        }),
                                        s === sV.FEATURED && u && c
                                            ? (0, r.jsx)(s8, {
                                                  questIds: n,
                                                  setMaxRowIndex: T,
                                                  containerWidth: _,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(nl, {
                                                  questIds: n,
                                                  rowIndex: t < Q ? t : t + p,
                                                  sectionIdentifier: s,
                                                  questContent: ng[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: nf.y7,
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
var nS = s(353640),
    nC = s(121894),
    n_ = s(851936);
let nN = (0, nS.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, n_.L)({ location: tf.rE.QUEST_HOME_DESKTOP });
        if (s.info === ej.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, nC.r)(() => e(l));
    },
}));
var np = s(516226),
    nT = s(274670),
    nA = s(144779),
    nO = s(104886),
    nI = s(18437),
    nb = s(901406),
    nR = s(139384),
    nM = s(770178),
    nQ = s(512209);
function nL(e, t) {
    let { row_index: s, ...n } = (0, eY.fF)(ew.uF.QUEST_HOME_HERO);
    (0, ns.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: ew.uF.QUEST_HOME_HERO,
    });
}
let ny = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, E] = i.useState("display-lg"),
        h = i.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, nM.w)(h, [], { fireOnMount: !0 }),
        f = i.useCallback(() => nL(s, ef.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => nL(s, ef.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(eV.N, {
        theme: ef.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(nQ.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: g,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nQ.FG,
                    children: [
                        (0, r.jsxs)(j.B, {
                            className: nQ.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(j.B, {
                                    className: nQ.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(eN.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nQ.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(eH.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nQ.VA,
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
var nH = s(194526),
    nU = s(731355),
    nD = s(621466),
    nq = s(508770),
    nF = s(406810),
    nP = s(628284),
    nk = s(65154),
    nw = s(58703),
    nB = s(398025),
    nG = s(241760);
function nW(e) {
    let [t, s] = i.useState(!1),
        n = i.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nV(e) {
    let { hero: t, contentPosition: s, impressionRef: n } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = nW(
            i.useCallback(
                (e) => {
                    (0, ns.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ew.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, eY.jO)(ew.uF.QUEST_HOME_HERO_SHELF),
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
        (0, nD.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(ej.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, sl.z)({ hoverSpring: +!!a, config: sn.config.gentle }),
        d = i.useCallback(() => {
            (0, nb._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: ew.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: eY.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: n.current?.getId(),
                    sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, n]);
    return (0, r.jsxs)(ed.D, {
        tag: "div",
        className: o()(nG.FW, nG.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [sJ]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: nG.Ve,
                children: (0, r.jsx)(eZ.N, {
                    showVideo: !0,
                    assetRef: l,
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
            (0, r.jsx)(sn.animated.div, {
                className: nG.hn,
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
function nK(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: h } = (0, tn.A)(a, tl.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, nw.uN)(
                    { days: u, hours: c, minutes: d, seconds: h },
                    { days: ea.t["Ux/De1"], hours: ea.t.Lzd5Ie, minutes: ea.t.odmpbP },
                ),
            [u, c, d, h],
        ),
        f = (0, E.bG)([tA.default], () => tA.default.getCurrentUser()),
        v = i.useMemo(() => (0, tI.mq)(s.config, f), [s.config, f]),
        S = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, t2.xv)(e).type) {
                        case sT.l.IN_GAME:
                            return ea.intl.string(ea.t["O/J2kr"]);
                        case sT.l.COLLECTIBLE:
                            return ea.intl.string(ea.t.Jg17Ut);
                        case sT.l.VIRTUAL_CURRENCY:
                            return ea.intl.string(ea.t.ElYQFS);
                        default:
                            return (0, tI.mq)(e, t);
                    }
                })(s.config, f),
            [s.config, f],
        ),
        { completedRatio: C, completedRatioDisplay: _ } = (0, K.O9)(s),
        N = i.useMemo(() => (0, tI.wo)(s.config, f), [s.config, f]),
        p = (0, nI.tG)(),
        T = (0, nI.WS)(),
        A = (0, eJ.wW)(),
        { isHovering: O, hoverProps: I } = nW(
            i.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ew.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, eY.jO)(ew.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: b } = (0, sl.z)({ hoverSpring: +!!O, config: sn.config.gentle }),
        R = i.useCallback(() => {
            n(s.id),
                (0, nO.E5)(nO.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, nT.r)({
                          type: nA.F.CLICK_INTERNAL,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: eY.Cy.VIEW_QUESTS,
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
                          questContentCTA: eY.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, p, l, A]);
    return (0, r.jsxs)(ed.D, {
        tag: "div",
        className: o()(nG.FW, nG.$R),
        onClick: R,
        "aria-label": ea.intl.string(ea.t["th2+0j"]),
        [sJ]: !0,
        ...I,
        children: [
            (0, r.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nq.E, { type: { text: S } }),
                    (0, r.jsx)(sn.animated.div, {
                        style: { opacity: (0, nB.a)(b.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nq.E, { type: { text: x }, icon: nF.O }),
                    }),
                ],
            }),
            (0, r.jsx)(sn.animated.div, {
                className: nG.Tr,
                style: { transform: b.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tb.A, {
                    percentComplete: C,
                    overlayText: O && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tR.A, {
                        quest: s,
                        questContent: ew.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: ew.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(sn.animated.div, {
                className: nG.tw,
                style: {
                    opacity: (0, nB.a)(b.to([0, 1], [1, 0])),
                    transform: b.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(j.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(eH.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nG.Ht,
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
                                        (0, r.jsx)(nP.y, { size: "xs", color: eu.A.colors.ICON_MUTED.css }),
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
                                        (0, eX.pv)(s.config) === nU.Z.VIDEO
                                            ? (0, r.jsx)(nk.S, { size: "xs", color: eu.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(e8._, { size: "xs", color: eu.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(eH.E, {
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
            (0, r.jsx)(sn.animated.div, {
                className: nG.um,
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
var nz = s(810435);
function n$(e) {
    let { hero: t, shelfQuests: s, isBannerLoading: n, onQuestCtaClick: l } = e,
        i = (0, nt.C)();
    return n
        ? (0, r.jsx)(nY, { numShelfCards: s.length + 1 })
        : (0, r.jsx)(s2, {
              className: nz.vo,
              overflowAmount: 25,
              maskWidth: sz(i),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(j.B, {
                  className: nz.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  children: [
                      (0, r.jsx)(e0.R, {
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
                                  children: (0, r.jsx)(nV, { hero: t, contentPosition: 0, impressionRef: s }),
                              }),
                      }),
                      s.map((e, s) =>
                          (0, r.jsx)(
                              e0.R,
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
                                          children: (0, r.jsx)(nK, {
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
function nY(e) {
    let { className: t, numShelfCards: s } = e,
        n = (0, nt.C)(),
        l = Math.max(s, 4);
    return (0, r.jsx)(s2, {
        className: o()(nz.vo, t),
        overflowAmount: 25,
        maskWidth: sz(n),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(j.B, {
            className: nz.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: l - 1 }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(s9.m, nz.W_) }, t),
            ),
        }),
    });
}
var nJ = s(852611);
function nX() {
    return (0, r.jsx)("div", { className: nJ.Np });
}
function nZ(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, nR.A)(n, tf.rE.QUEST_HOME_DESKTOP);
    let l = i.useMemo(() => (null != s ? (0, e$.WV)(s) : null) ?? t, [s, t]);
    return (0, r.jsx)(z._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eZ.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: n,
                imageAsset: {
                    alt: "",
                    className: nJ.LY,
                    asset: { url: l, mimetype: (0, e$.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: nJ.LY,
                    asset: { url: s, mimetype: (0, e$.vm)(s), isAnimated: !0 },
                    assetId: s,
                },
            }),
    });
}
function n0(e) {
    let { heroImage: t, heroVideo: s } = e;
    return null == s
        ? (0, r.jsxs)("div", {
              className: nJ.Tv,
              children: [
                  (0, r.jsx)(nX, {}),
                  (0, r.jsx)("div", {
                      className: nJ.LO,
                      children: (0, r.jsx)(z._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: nJ.LY, src: t, alt: "" }),
                      }),
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
                  (0, r.jsx)("div", { className: nJ.LO, children: (0, r.jsx)(nZ, { heroImage: t, heroVideo: s }) }),
              ],
          });
}
function n1(e) {
    let { hero: t, hasFetchedQuests: s, hasNoAccessibleQuests: n } = e,
        l = (0, nI.WS)(),
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
function n2(e) {
    let { hero: t, onQuestCtaClick: s, isBannerLoading: n } = e,
        l = (0, E.bG)([X.A], () => X.A.quests),
        a = (0, E.bG)([X.A], () => X.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, K.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, nH.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        x = h[0];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e0.R, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: ew.uF.QUEST_HOME_HERO,
                sourceQuestContent: ew.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(n1, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(ny, {
                                ref: (t) => {
                                    e.current = n ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [nJ.lX]: n }),
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
                                                        className: nJ.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(eH.E, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: nJ.yu,
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
                                                (0, nb._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: ew.uF.QUEST_HOME_HERO,
                                                        ctaContent: eY.Cy.OPEN_GAME_LINK,
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
                                                        (0, nO.E5)(nO.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                            ? (0, nT.r)({
                                                                  type: nA.F.CLICK_INTERNAL,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  adCreativeId: t.id,
                                                                  questContentCTA: eY.Cy.VIEW_QUESTS,
                                                                  surfaceId: ew.uF.QUEST_HOME_HERO,
                                                                  sourceQuestContent: ew.uF.QUEST_HOME_HERO,
                                                              })
                                                            : (0, ns.vK)({
                                                                  adContentId: t.id,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  questContent: ew.uF.QUEST_HOME_HERO,
                                                                  questContentCTA: eY.Cy.VIEW_QUESTS,
                                                                  sourceQuestContent: ew.uF.QUEST_HOME_HERO,
                                                              });
                                                },
                                                size: "md",
                                                text: ea.intl.string(ea.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(n0, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(n$, { hero: t, isBannerLoading: n, shelfQuests: u, onQuestCtaClick: s }),
        ],
    });
}
function n7() {
    return (0, r.jsx)("div", { className: o()(nQ.iE, nQ.FG, nQ.B3), children: (0, r.jsx)(el.y, {}) });
}
var n6 = s(14311),
    n3 = s(604880),
    n4 = s(318808);
function n8(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, tx.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: n6.MY,
        children: [
            (0, r.jsx)("img", { className: n6.Bg, src: n4.Ay, alt: "" }),
            (0, r.jsx)("div", { className: n6.r$, children: (0, r.jsx)("img", { src: n3, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: n6.Nr,
                children: [
                    (0, r.jsx)(eN.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: n6.ky,
                        children: ea.intl.string(ea.t.GXmn57),
                    }),
                    (0, r.jsx)(eH.E, {
                        variant: "text-md/normal",
                        className: n6.G3,
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
function n5(e) {
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
var n9 = s(843121);
let le = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, nt.C)(),
        { useNewTile: n } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = W.Mk.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        o = l === W.d.LARGE_MASK_MARGIN,
        u = sE(a, s$(s, o), 20, 3);
    return (0, r.jsxs)(j.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: n9.kL,
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
                      className: n9.y7,
                      children: [
                          (0, r.jsx)(n5, { alt: ea.intl.string(ea.t["Xe+fJM"]) }),
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
                      className: n9.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${s$(s, o)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== u &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        tF,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ew.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n9.d,
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
                                            className: n9.d,
                                            sourceQuestContent: ew.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var lt = s(649852),
    ls = s.n(lt),
    ln = s(379078),
    ll = s(704554),
    lr = s(823784);
let li = {
        searchType: ln.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(tZ.Vq);
        },
        sortType: ln.r.JARO_WINKLER,
        throttleMs: 200,
    },
    la = function () {
        let [e, t] = i.useState(""),
            [s, n] = i.useState(null),
            l = (0, E.yK)([X.A], () =>
                (0, K.mn)(Array.from(X.A.quests.values()), { sortMethod: tf.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => ls()(ns.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, lr.tv)();
                null != e &&
                    (0, ns.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lr.l6)();
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
                                  .filter(tZ.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: s } = (0, lr.$N)();
                    s && (0, ns.OQ)({ searchSessionId: t.uuid }),
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
        return (0, ll.RT)(r, l, d, li), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c };
    };
var lo = s(631001),
    lu = s(758836),
    lc = s(613057),
    ld = s(553576);
let lm = i.createContext({});
function lE(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lm);
    return (0, r.jsxs)(e7.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(H.A, { className: ld.Jo, innerClassName: ld.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lh(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(U.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function lx(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, E.bG)([_.Ay], () => _.Ay.useReducedMotion),
        a = (0, E.bG)([P.A], () => P.A.isFocused()),
        { ref: o, inViewport: u } = (0, tX.p)(),
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
function lf(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(ld.Tv, { [ld.lJ]: s }),
        children: [
            (0, r.jsx)(nX, {}),
            (0, r.jsx)("div", { className: o()(ld.nz, { [ld.ZZ]: s }) }),
            (0, r.jsx)(lx, {
                onLoadComplete: t,
                className: o()(ld.Fe, { [ld.H4]: s, [ld.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function lg(e) {
    let { className: t, onAssetLoad: s } = e,
        { enabled: n } = V.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        l = !n,
        a = i.useCallback(() => {
            l ? window.open(ef.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(ef.MVz.QUESTS_LEARN_MORE));
        }, [l]);
    return (0, r.jsx)(ny, {
        className: t,
        adContentId: l ? tf.yr : tf.uz,
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
                                  tab: lu.G2.ORBS,
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
        background: (0, r.jsx)(lf, { onAssetLoad: s, isVirtualCurrencyEnabled: l }),
    });
}
function lv(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, z.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(ld.iS, { [ld.R]: i }),
        children: [
            c && (0, r.jsx)(n7, {}),
            !l &&
                (null == n || a
                    ? (0, r.jsx)(lg, { className: o()({ [ld.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(n2, { hero: n, isBannerLoading: u, onQuestCtaClick: s })),
        ],
    });
}
let lj = function (e) {
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
                s = lo.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, K.p5)(),
                { enabled: r } = W.Mk.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                lo.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                lo.A.getState().setTab(e);
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
                        ].filter(tZ.Vq),
                    [t, l, o],
                ),
                selectedTab: s,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: _, setQuery: b, matchingQuestIds: M, onSearchClose: Q } = la(),
        { onScroll: H } = (0, y.G)(),
        U = G.A.getState().getUtmCurrentContext(),
        D = nN((e) => e.registerAssetLoad),
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
        { enabled: w } = W.Mk.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: V } = W.aD.useConfig({ location: tf.rE.QUEST_HOME_DESKTOP }),
        Y = w || V,
        J = i.useRef(null),
        X = i.useCallback((e) => {
            J.current?.scrollToQuest(e);
        }, []),
        Z = i.useMemo(() => ((0, B.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: ee, isLoading: et } = (0, $.lg)(l[0] ?? null),
        es = i.useCallback(() => {
            (0, q.Y)({
                pageType: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ef.JJy.ORBS_BALANCE_MENU,
                ctaObject: ef.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, O.Cz)({ tab: lu.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU });
        }, []);
    i.useEffect(() => {
        (0, C.I)(ef.BVt.QUEST_HOME);
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
                    type: lc.XK.QUEST_PREVIEW_TOOL,
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
                    type: lc.XK.QUEST_HOME,
                    params: { questId: (0, B.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, x, n.action, s.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let en = i.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), g(e), Q();
            },
            [n, g, Q],
        ),
        el = i.useMemo(() => null != M && Y, [M, Y]),
        er = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        ei = i.useMemo(() => ({ onScroll: H, scrollerRef: k }), [H, k]),
        eo = (0, W.Qj)() && 0 === l.length;
    return a
        ? (0, r.jsx)(n8, { adCreativeIds: l })
        : (0, r.jsx)(np.M.Provider, {
              value: er,
              children: (0, r.jsx)(lm.Provider, {
                  value: ei,
                  children: (0, r.jsx)("div", {
                      className: o()(ld.kL, { [ld.KY]: !t }),
                      children: (0, r.jsxs)(lE, {
                          header: (0, r.jsx)(lh, {
                              selectedTab: f,
                              onSelectTab: en,
                              tabs: v,
                              endContent: (0, r.jsxs)(j.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      Y &&
                                          (0, r.jsx)(S.I, {
                                              query: _,
                                              onChange: b,
                                              placeholder: ea.intl.string(ea.t.y10TI2),
                                              onClear: Q,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(F.SS, {
                                          analyticsPage: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: F.cP.END,
                                          ctaText: ea.intl.string(ea.t["J+vlIR"]),
                                          ctaOnClick: es,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              f === K.NC.ALL &&
                              !eo &&
                              (0, r.jsx)(
                                  z.y5,
                                  {
                                      source: tf.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: ee?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: (0, r.jsx)(lv, {
                                          onAssetLoad: D,
                                          onQuestCtaClick: X,
                                          hasSearchResults: el,
                                          questHomeHero: ee,
                                          isLoadingQuestHomeHero: et,
                                      }),
                                  },
                                  ee?.id,
                              ),
                          children: [
                              el && null != M && (0, r.jsx)(le, { matchingQuestIds: M }),
                              f === K.NC.CLAIMED
                                  ? (0, r.jsx)(sw, { onSelectTab: en, className: el ? ld.R : void 0 })
                                  : f === K.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(tJ, { className: el ? ld.R : void 0 })
                                    : Y
                                      ? (0, r.jsx)(nj, {
                                            className: el ? ld.R : void 0,
                                            ref: J,
                                            deepLinkedQuestId: Z,
                                            isLoadingQuestHomeHero: !eo && et,
                                            withQuestHomeHero: !eo,
                                        })
                                      : (0, r.jsx)(sN, { ref: J }),
                          ],
                      }),
                  }),
              }),
          });
};
