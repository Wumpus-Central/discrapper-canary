let n;
s.r(t), s.d(t, { default: () => lg }), s(323874), s(14289), s(35956);
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
    S = s(509434),
    _ = s(331322),
    j = s(892547),
    v = s(944791),
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
    F = s(371446),
    w = s(70926),
    P = s(531685),
    k = s(676279),
    B = s(975571),
    W = s(240248),
    G = s(87549),
    V = s(192444);
let K = (0, s(945810).mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var z = s(347135),
    $ = s(557637),
    Y = s(371912);
s(321073);
var X = s(228366),
    J = s(340124),
    Z = s(859703);
s(667532);
var ee = s(783878),
    et = s(408278),
    es = s(663417),
    en = s(922016),
    el = s(624479),
    er = s(289873),
    ei = s(416052),
    ea = s(417098),
    eo = s(375708);
function eu(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(ea.$T, {
        color: ea.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : eo.intl.string(eo.t.ZErSg5) }),
    });
}
var ec = s(661531),
    ed = s(602853),
    em = s(939249),
    eE = s(817281),
    eh = s(688810),
    ex = s(487245),
    ef = s(363195),
    eg = s(652215),
    eS = s(398876);
let e_ = function () {
    let { analyticsLocations: e } = (0, eh.Ay)(),
        t = (0, E.bG)([ef.A], () => ef.A.theme),
        s = i.useRef(null);
    i.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, ed.r)(ec.A.colors.BACKGROUND_BASE_LOW, eg.NJ8.LIGHT),
        l = (0, ed.r)(ec.A.colors.BACKGROUND_BASE_LOW, eg.NJ8.DARKER),
        a = (0, ed.r)(ec.A.colors.BACKGROUND_BASE_LOW, eg.NJ8.MIDNIGHT),
        o = i.useMemo(
            () => [
                { theme: eg.NJ8.LIGHT, label: eo.t.K2sFfo, color: n.hex() },
                { theme: eg.NJ8.DARKER, label: eo.t.b8Cei3, color: l.hex() },
                { theme: eg.NJ8.MIDNIGHT, label: eo.t.Do4ZJx, color: a.hex() },
            ],
            [n, l, a],
        ),
        u = i.useCallback(
            (t) => {
                (0, ex.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, eE.u_)({ theme: t });
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: eS.N,
        children: (0, r.jsxs)("div", {
            className: eS.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        em.D,
                        {
                            tag: "div",
                            className: eS.Du,
                            onClick: () => u(e.theme),
                            "aria-label": eo.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${eS.WT} ${t === e.theme ? eS.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: eS.i, children: eo.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(et.K, {
                    onClick: c,
                    "aria-label": eo.intl.string(eo.t.yBZMsQ),
                    icon: es.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var ej = s(818348),
    ev = s(60857);
let eC = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, z.pT)(),
        h = (0, E.bG)([Z.A], () => (null != t ? Z.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, E.bG)([Z.A], () => null != t && Z.A.isFetchingQuestPreview(t), [t]),
        S = i.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [m, t]),
        _ = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, J.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        j = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, J.UZ)(t);
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
                    await (0, J.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(
            (e) => {
                (0, W.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: ev.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: ev.Br,
                    children: (0, r.jsxs)("div", {
                        className: ev.bo,
                        children: [
                            (0, r.jsx)(e_, {}),
                            (0, r.jsxs)("div", {
                                className: ev.b8,
                                children: [
                                    (0, r.jsx)(
                                        ee.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: S,
                                            value: t,
                                            onSelectionChange: C,
                                            placeholder: eo.intl.string(eo.t.Zw8jxn),
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
                                        `${t}-${n?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, r.jsx)(et.K, {
                                        onClick: l,
                                        "aria-label": eo.intl.string(eo.t.wzzjk9),
                                        icon: es.f,
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
                    className: ev.in,
                    children: (0, r.jsxs)(f.e, {
                        className: ev.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: v,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.cKSLr4),
                            }),
                            (0, r.jsx)(en.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: ev.PP,
                                        children: (0, r.jsx)("div", {
                                            className: ev.sH,
                                            children: (0, r.jsx)(ei.A, {
                                                value: ej.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eo.intl.string(eo.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(et.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": eo.intl.string(eo.t.rNGQfD),
                                        icon: el.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(eu, { error: h }) : null,
            x ? (0, r.jsx)(er.y, {}) : null,
        ],
    });
};
var eN = s(364522),
    ep = s(534514),
    eT = s(761508),
    eA = s(797788);
function eO() {
    return (0, r.jsx)("div", { className: eA.y });
}
var eI = s(684603),
    eb = s(332544);
let eR = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eb.x3,
        children: (0, r.jsxs)("div", {
            className: eb.B0,
            children: [
                (0, r.jsx)(ep.D, {
                    className: eb.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.L2mlUb),
                }),
                (0, r.jsx)(eI.default, { quest: t }),
            ],
        }),
    });
};
var eM = s(242939),
    eQ = s(717695),
    eL = s(763578),
    ey = s(111113);
let eH = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eb.x3,
        children: (0, r.jsxs)("div", {
            className: eL.wp,
            children: [
                (0, r.jsx)(ep.D, {
                    className: eL.Oo,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eL.RE,
                    children: (0, r.jsx)("div", {
                        className: eL.Z,
                        children: (0, r.jsx)("div", {
                            className: ey.C3,
                            children: (0, r.jsx)(eQ.A, {
                                children: (0, r.jsx)($.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(eM.QuestBar, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eU = s(834730),
    eD = s(527549),
    eq = s(442444);
function eF(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eb.x3,
        children: (0, r.jsxs)("div", {
            className: eb.B0,
            children: [
                (0, r.jsx)(ep.D, {
                    className: eb.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.gWinpQ),
                }),
                (0, r.jsx)(eU.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children:
                        "QuestChannelCallHeader (live \u2014 branches on your experiment assignment: control = legacy UI, T1 = bar below)",
                }),
                (0, r.jsx)("div", {
                    className: eb.YT,
                    children: (0, r.jsx)(eD.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
                (0, r.jsx)(eU.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: "T1 \u2014 horizontal bar (unenrolled)",
                }),
                (0, r.jsx)("div", {
                    className: eb.YT,
                    children: (0, r.jsx)(eq.A, { quest: t, isFocused: !1, onAcceptQuest: () => {}, isEnrolling: !1 }),
                }),
            ],
        }),
    });
}
var ew = s(711038),
    eP = s(330034);
let ek = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eb.x3,
        children: (0, r.jsxs)("div", {
            className: eb.B0,
            children: [
                (0, r.jsx)(ep.D, { variant: "heading-md/semibold", children: eo.intl.string(eo.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: eP.wu,
                    children: (0, r.jsx)("span", { className: eP.cy, children: eo.intl.string(eo.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: eP.oU,
                    children: (0, r.jsx)("div", {
                        className: eP.zx,
                        children: (0, r.jsx)("div", {
                            className: eP.Lj,
                            children: (0, r.jsx)("div", {
                                className: eP.n0,
                                children: (0, r.jsx)(ew.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eB = s(24001),
    eW = s(892955),
    eG = s(173936),
    eV = s(365199),
    eK = s(743674),
    ez = s(46948),
    e$ = s(590202),
    eY = s(971649),
    eX = s(814793),
    eJ = s(415441),
    eZ = s(73473),
    e0 = s(270045),
    e1 = s(79545),
    e2 = s(321503),
    e3 = s(720875),
    e7 = s(339350),
    e4 = s(687966),
    e8 = s(782134),
    e6 = s(271536),
    e5 = s(768622),
    e9 = s(793934),
    te = s(662940),
    tt = s(496431),
    ts = s(927813);
let tn = 2 * ts.A.Millis.DAY;
var tl = s(719021);
function tr(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, e1.Pd)(t),
        l = (0, E.bG)([Z.A], () => n === e1.UA.UNENROLLED && null != Z.A.questEnrollmentBlockedUntil, [n]),
        a = (0, z.fc)(t),
        u = (0, z.I3)(t),
        c = i.useMemo(() => (0, te.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, te.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, e1.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case e1.UA.UNENROLLED:
                            case e1.UA.ENROLLED:
                            case e1.UA.INCOMPLETE:
                                return !0;
                            case e1.UA.COMPLETED:
                            case e1.UA.CLAIMED:
                            case e1.UA.EXPIRED:
                            case e1.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < tn &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, tt.A)(n, ts.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(tl.fC, { [tl.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: tl.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(eU.E, {
                            variant: "text-xs/semibold",
                            className: tl.SJ,
                            color: "always-white",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(eU.E, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            className: tl.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: tl.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: tl.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(e7.Q, { ...s });
                                    switch ((0, te.pv)(e)) {
                                        case te.UK.PLAY:
                                            return (0, r.jsx)(e4._, { ...s });
                                        case te.UK.WATCH:
                                            return (0, r.jsx)(e8.u, { ...s });
                                        case te.UK.ACTIVITY:
                                            return (0, r.jsx)(e6.q, { ...s });
                                        case te.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(e5.g, { ...s });
                                        case te.UK.ARENA:
                                            return (0, r.jsx)(e9.q, { ...s });
                                    }
                                })(t, l),
                                (0, r.jsx)(eU.E, {
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
                    className: o()(tl.qS, tl.WZ),
                    children: (0, r.jsx)(eU.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: eo.intl.string(eo.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var ti = s(409626),
    ta = s(3738),
    to = s(646917),
    tu = s(990078),
    tc = s(43990),
    td = s(743368),
    tm = s(792620),
    tE = s(368715),
    th = s(617986),
    tx = s(190107),
    tf = s(919500);
function tg(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, e1.Pd)(t),
        { ctaOnHover: u } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        c = (0, E.bG)([Z.A], () => a === e1.UA.UNENROLLED && null != Z.A.questEnrollmentBlockedUntil, [a]),
        d = a === e1.UA.EXPIRED || (a === e1.UA.CLAIMED && (0, tm.GL)(t)),
        m = (0, z.do)({ quest: t, content: s, ctaContent: e$.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tf.lO, { [tf.Fq]: l || !u }),
        children: (0, r.jsx)("div", {
            className: tf.mv,
            children: (0, r.jsx)(tc.N, {
                theme: eg.NJ8.DARK,
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
                                    : (0, r.jsx)(tu.m, {
                                          text: eo.intl.string(eo.t.LLLLPD),
                                          position: "top",
                                          align: "center",
                                          ariaHidden: !0,
                                          children: (0, r.jsx)(et.K, {
                                              variant: "secondary",
                                              icon: td.W,
                                              "aria-label": eo.intl.string(eo.t.LLLLPD),
                                              onClick: m,
                                          }),
                                      }),
                                !d &&
                                    !c &&
                                    (0, r.jsx)(tE.A, {
                                        quest: t,
                                        surface: e1.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                c &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: eo.intl.string(eo.t.vY9GgG),
                                        onClick: () => (0, th.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
var tS = s(403581),
    t_ = s(576761),
    tj = s(646440);
function tv(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, z.ZP)(s),
        i = (0, t_.B9)(n);
    if (null == l) return null;
    let a = i
        ? eo.intl.formatToPlainString(eo.t.l2UfLG, { bonusOrbMultiplier: l })
        : eo.intl.formatToPlainString(eo.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(em.D, {
        onClick: () => {
            (0, th.gC)(l, n), t?.();
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: tj.k,
            children: [
                (0, r.jsx)(tS.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(eU.E, { variant: "text-sm/normal", color: "currentColor", className: tj.Q, children: a }),
            ],
        }),
    });
}
var tC = s(947641),
    tN = s(194261),
    tp = s(106799),
    tT = s(287809),
    tA = s(710969),
    tO = s(801365),
    tI = s(453384),
    tb = s(646764),
    tR = s(269999);
function tM(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, E.bG)([tT.default], () => tT.default.getCurrentUser()),
        a = (0, tO.mq)(t.config, i),
        o = (0, tO.ks)(t.config),
        u = (0, tO.wo)(t.config, i),
        c = (0, tO.l0)(t.config, i),
        d =
            null != u
                ? u > 700 * c
                    ? ez.i2.TIER_4
                    : u > 200 * c
                      ? ez.i2.TIER_3
                      : u > 100 * c
                        ? ez.i2.TIER_2
                        : ez.i2.TIER_1
                : void 0,
        { completedRatio: m } = (0, z.O9)(t),
        h = t.userStatus?.claimedAt != null,
        x = (0, tA.Ic)(t),
        f = t.userStatus?.enrolledAt == null,
        g = h ? "completed" : x ? "expired" : null,
        S = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tb.A, {
                    quest: t,
                    orbTier: d,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: tR.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === g &&
                    (0, r.jsx)("div", {
                        className: tR.EY,
                        children: (0, r.jsx)(tC.r, { className: tR.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === g &&
                    (0, r.jsx)("div", {
                        className: tR.EY,
                        children: (0, r.jsx)(tN.X, { size: "sm", className: tR.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: tR.CZ,
        children: [
            (0, r.jsx)("div", {
                className: tR.tE,
                children: f
                    ? (0, r.jsx)("div", { className: tR.fm, children: S })
                    : (0, r.jsx)(tI.A, {
                          size: 74,
                          percentComplete: m,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: tR.n5, children: S }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: tR.FS,
                children: [
                    (0, r.jsx)(eU.E, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        className: tR.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: tR.oV,
                        children: [
                            o && (0, r.jsx)(tp.A, { className: tR.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                eU.E,
                                {
                                    variant: "text-lg/medium",
                                    className: tR.zN,
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
var tQ = s(315767);
function tL(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, ta.A9)(t, a, tx.rE.QUEST_HOME_DESKTOP, ti.GameProfileSources.QuestHome, u),
        d = (0, to.z)(),
        m = (0, z.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: tQ.qr,
        children: [
            (0, r.jsx)(tM, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n }),
            (0, r.jsxs)("div", {
                className: tQ.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: tQ.Wi,
                        children: [
                            (0, r.jsx)(eU.E, {
                                variant: "text-sm/normal",
                                className: o()(tQ.Wj, tQ.h_, { [tQ.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(eU.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(tQ.Wj, tQ.XV, { [tQ.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tQ.Gv,
                        children: [
                            (0, r.jsx)(eU.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: eo.intl.string(eo.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(eU.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(tv, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tg, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var ty = s(688755),
    tH = s(831368),
    tU = s(547032);
function tD(e) {
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
        h = i.useMemo(() => (0, ez.tW)(s, ez.fY.QUEST_BAR_HERO_IMAGE), [s]),
        x = i.useMemo(() => (0, ez.tW)(s, ez.fY.QUEST_BAR_HERO_VIDEO), [s]),
        f = i.useMemo(() => (null != h ? (0, ez.UX)(h.url, { format: "webp", width: 32, height: 32 }) : null), [h]),
        g = (0, eK.S)(f),
        S = i.useMemo(() => (null != g ? { "--quest-scrim-color": g } : void 0), [g]),
        {
            isActive: _,
            shouldRender: j,
            hoverHandlers: v,
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
                S = i.useMemo(
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
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: S, handleMenuOpen: f, handleMenuClose: g }
            );
        })(),
        p = (0, e1.Pd)(s),
        T = (0, eY.go)(),
        A = (0, eX.E0)(s.config),
        O = i.useContext(e2.X),
        { visibilityElementRef: I, almostVisibleInViewport: b } = (0, tH.I)(
            O?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: R,
            handleHoverEnd: M,
            isEventWithinParent: Q,
        } = (0, ty.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: E }),
        L = (0, Y.Lk)({
            isShareable: A,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: e$.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: T,
                    sourceQuestContent: E,
                }),
                [n, E, T],
            ),
        });
    return (0, r.jsx)("div", {
        className: tU.uW,
        onMouseEnter: () => {
            v.onMouseEnter(), R();
        },
        onMouseLeave: () => {
            v.onMouseLeave(), M();
        },
        onFocus: (e) => {
            Q(e) || (v.onFocus(), R());
        },
        onBlur: (e) => {
            Q(e) || (v.onBlur(), M());
        },
        children: (0, r.jsxs)("article", {
            id: (0, eW.sT)(s.id, t),
            ref: (e) => {
                (m.current = e), (I.current = e);
            },
            "aria-label": eo.intl.formatToPlainString(eo.t.EAYZAr, { questName: s.config.messages.questName }),
            className: o()(tU.kL, { [tU.iR]: l, [tU.DM]: _ }, a),
            style: S,
            children: [
                (0, r.jsx)(e3.A, {
                    showPlaceholder: !b,
                    width: 600,
                    height: 450,
                    className: tU.Tv,
                    children: (0, r.jsx)(eJ.N, {
                        imageAsset:
                            null != h
                                ? {
                                      asset: h,
                                      assetId: "QuestTileV2",
                                      alt: eo.intl.string(eo.t.jnijWz),
                                      className: tU.Tv,
                                  }
                                : void 0,
                        videoAsset:
                            null != x
                                ? {
                                      asset: x,
                                      assetId: "QuestTileV2_heroAnimated",
                                      className: o()(tU.Tv, tU.gJ, { [tU.C7]: _ }),
                                  }
                                : void 0,
                        imageSize: { width: 600, height: 450 },
                        showVideo: j,
                    }),
                }),
                (0, r.jsx)("div", { className: o()(tU.sL, { [tU.Mq]: p === e1.UA.EXPIRED }) }),
                (0, r.jsx)("div", { className: o()(tU.f5, tU.Cm) }),
                (0, r.jsx)("div", { className: o()(tU.f5, tU.sr) }),
                (0, r.jsxs)("div", {
                    className: tU.wx,
                    children: [
                        (0, r.jsx)(tr, { quest: s, isHovering: _ }),
                        (0, r.jsxs)("div", {
                            className: o()(tU.$s, { [tU.rk]: _ }),
                            children: [
                                l &&
                                    A &&
                                    (0, r.jsx)(em.D, {
                                        tag: "div",
                                        className: tU.E9,
                                        onClick: L,
                                        "aria-label": eo.intl.string(eo.t.WqhZss),
                                        children: (0, r.jsx)(eG.q, { size: "sm", color: "currentColor" }),
                                    }),
                                (0, r.jsx)(e0.C, {
                                    questContent: n,
                                    quest: s,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: E,
                                    onOpen: C,
                                    onClose: N,
                                    children: (e) =>
                                        (0, r.jsx)(em.D, {
                                            ...e,
                                            tag: "div",
                                            className: tU.E9,
                                            "aria-label": eo.intl.string(eo.t.DEoVWZ),
                                            children: (0, r.jsx)(eV.j, { size: "sm", color: "currentColor" }),
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(tL, {
                    quest: s,
                    questContent: n,
                    isInFeaturedSection: l,
                    isHovering: _,
                    sourceQuestContent: E,
                }),
            ],
        }),
    });
}
let tq = i.memo(function (e) {
    let t = (0, E.bG)([Z.A], () => (null != e.questId ? Z.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(eZ.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === eB.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(tD, { ...e, quest: s, impressionRef: t }),
          });
});
function tF(e) {
    let { quest: t } = e,
        { useNewTile: s } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: eb.x3,
        children: (0, r.jsxs)("div", {
            className: eb.B0,
            children: [
                (0, r.jsx)(ep.D, {
                    className: eb.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(tq, {
                          className: eb.d,
                          quest: t,
                          questContent: eB.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: eB.uF.INTERNAL_PREVIEW_TOOL,
                      })
                    : (0, r.jsx)(eW.Ay, {
                          className: eb.d,
                          quest: t,
                          questContent: eB.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: eB.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var tw = s(97808),
    tP = s(778712),
    tk = s(87664),
    tB = s(427262),
    tW = s(198525),
    tG = s(66176);
let tV = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([tT.default], () => tT.default.getCurrentUser()),
        u = tB.Ay.useName(a),
        c = (0, tk.A)(a?.id),
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
        className: eb.x3,
        children: (0, r.jsxs)("div", {
            className: eb.B0,
            children: [
                (0, r.jsx)(ep.D, {
                    className: tG.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: tG.$Q, children: eo.intl.string(eo.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: tG.k0,
                    children: (0, r.jsx)(en.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => n(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: en.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(tG.Tn, { [tG.wH]: s }),
                                children: (0, r.jsx)(em.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: tG.lm,
                                        children: [
                                            (0, r.jsx)(tw.eu, {
                                                size: tP._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: eg.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: tG.Fj,
                                                children: [
                                                    (0, r.jsx)(eU.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(eU.E, {
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
};
function tK(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, E.bG)([Z.A], () => Z.A.getQuest(t));
    if (null != (0, E.bG)([Z.A], () => Z.A.getFetchQuestPreviewError(t)) || null == n) return null;
    let l = (e) => null == s || 0 === s.length || s.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eH, { quest: n }), (0, r.jsx)(eO, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tF, { quest: n }), (0, r.jsx)(eO, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ek, { questId: n.id }), (0, r.jsx)(eO, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eF, { quest: n }), (0, r.jsx)(eO, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tV, { quest: n }), (0, r.jsx)(eO, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eR, { quest: n }), (0, r.jsx)(eO, {})] }),
        ],
    });
}
var tz = s(497275);
function t$(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: a } = e,
        u = [
            { value: "quest_bar", label: eo.intl.string(eo.t.rjVPdM) },
            { value: "share_embed", label: eo.intl.string(eo.t["D/gSWS"]) },
            { value: "home_card", label: eo.intl.string(eo.t["5wnpF3"]) },
            { value: "channel_call_header", label: eo.intl.string(eo.t.gWinpQ) },
            { value: "members_list", label: eo.intl.string(eo.t.wpYima) },
            { value: "activity_panel", label: eo.intl.string(eo.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(eN.Ip, {
        className: o()(tz.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: tz.qE,
            children: [
                (0, r.jsx)(ep.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eo.intl.string(eo.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: tz.pf, children: l }),
                (0, r.jsxs)(eT.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(eT.V.Item, { id: "all", children: eo.intl.string(eo.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(eT.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: tz.tZ, children: (0, r.jsx)("div", { className: tz.Qs, children: t }) }),
            ],
        }),
    });
}
let tY = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: s } = (0, u.zy)(),
                n = i.useMemo(() => new URLSearchParams(s).get(z.L1.QUEST_ID) ?? e, [s, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        s.set(z.L1.TAB, z.NC.PREVIEW_TOOL),
                            s.set(z.L1.QUEST_ID, e),
                            t.push(`${eg.BVt.QUEST_HOME}?${s.toString()}`);
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        a = (0, E.bG)([Z.A], () => (null != n ? Z.A.getQuest(n) : void 0), [n]),
        o = (0, E.bG)([Z.A], () => (null != n ? Z.A.getQuestLoadedViaPreview(n) : null), [n]);
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
                X.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    X.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = i.useState([]);
    return (0, r.jsx)(t$, {
        className: s,
        controls: (0, r.jsx)(eC, {
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
        children: o?.id != null ? (0, r.jsx)(tK, { questId: o?.id, selectedSections: c }) : null,
    });
};
var tX = s(203879),
    tJ = s(403362),
    tZ = s(167417),
    t0 = s(783977),
    t1 = s(651892),
    t2 = s(305866),
    t3 = s(915089),
    t7 = s(332733);
function t4(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(eU.E, { className: t7.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let t8 = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, t3.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(en.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(t2.l, { className: t7.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var t6 = s(612539);
let t5 = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, z.Nb)(),
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
                        let n = e.options.map((e) => ({ label: (0, t1.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: t6.B }),
                                    (0, r.jsx)(t4, { id: a, children: e.heading }),
                                    (0, r.jsx)(tZ.$, {
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
                    (0, r.jsx)("hr", { className: t6.B }),
                    (0, r.jsx)("div", {
                        className: t6.W,
                        children: (0, r.jsx)(g.$, {
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
            (0, r.jsx)(g.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eo.intl.formatToPlainString(eo.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: t0.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var t9 = s(773812),
    se = s(715482);
let st = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([C.Ay], () => C.Ay.keyboardModeEnabled),
        o = (0, z.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(t8, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(t4, { id: t, children: eo.intl.string(eo.t.tZXJIS) }),
                    (0, r.jsx)(t9.z, {
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
                "aria-label": eo.intl.formatToPlainString(eo.t.lPlIMo, { selected: (0, t1.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, t1.Js)(n),
                icon: se.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var ss = s(580929),
    sn = s(717421);
function sl(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, ss.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, ss.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var sr = s(691540),
    si = s(857250),
    sa = s(97483),
    so = s(174459);
function su() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sr.P0)((0, si.o)(eo.intl.string(eo.t["5ABf1w"]), sa.Ck.FAILURE)),
                so.default.track(eg.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
var sc = s(535185);
function sd(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function sm(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(sd(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sc.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var sE = s(121480);
let sh = 4 * ts.A.Millis.SECOND;
function sx(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = sm(l, s, n);
    return (0, r.jsx)("div", {
        className: sE.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let sf = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = su(),
        h = i.useRef(""),
        [x, f] = i.useState(null),
        [g, S] = i.useState(0),
        { useNewTile: _ } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: j }, v] = (0, sn.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sh },
        })),
        C = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, tA.vc)(e, s, n);
                return null == t ? (E(e), !1) : (f(t.id), S((e) => e + 1), !0);
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
            v({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || f(null);
                },
            }));
    }, [x, g, v]),
    l && 0 === s.length)
        ? (0, r.jsx)(er.y, { className: sE.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sE.y7,
                children: [
                    (0, r.jsx)(ep.D, {
                        variant: "heading-xl/semibold",
                        children: eo.intl.string(c ? eo.t.PBfFnx : eo.t.NqFP6z),
                    }),
                    (0, r.jsx)(eU.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? eo.intl.format(eo.t.LdYS1H, { onClick: d }) : eo.intl.string(eo.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(sx, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            ss.animated.div,
                            {
                                className: o()({ [sE.XB]: l }),
                                style: sl(l, i, j),
                                children: [
                                    l && (0, r.jsx)("div", { className: sE.E4 }, g),
                                    _
                                        ? (0, r.jsx)(tq, {
                                              quest: t,
                                              questContent: eB.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sE.d,
                                              sourceQuestContent: eB.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eW.Ay, {
                                              quest: t,
                                              questContent: eB.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sE.d,
                                              sourceQuestContent: eB.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sg = s(458518),
    sS = s(65990);
let s_ = [],
    sj = z.L1.SORT,
    sv = z.L1.FILTER,
    sC = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, sg.o)()),
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
                    ((0, W.uJ)(e) ? null : (Object.values(tx.kL).find((t) => t === e) ?? null)) ?? tx.kL.SUGGESTED
                );
            }, [c]),
            E = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, W.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tx.WQ)(e))
                            .filter(tJ.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(sv)) ?? s_,
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
                        [sv]:
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
                isFetchingCurrentQuests: S,
                hasFetched: _,
            } = (0, z.Qh)(
                z.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: E, removeExpiredQuests: !0 }), [m, E]),
            ),
            j = i.useCallback(() => {
                x(s_);
            }, [x]),
            v = i.useRef(null),
            C = i.useRef(null),
            N = (0, u.zy)(),
            p = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== N.hash &&
                    null != v.current &&
                    null != C.current &&
                    (m !== v.current || E !== C.current) &&
                    p.replace({ ...N, hash: void 0 });
            }, [m, E, N, p]),
            i.useEffect(() => {
                v.current = m;
            }, [m]),
            i.useEffect(() => {
                C.current = E;
            }, [E]),
            (0, z.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: f.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        j(),
                            h(tx.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [j, h],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: sS.Mj,
                        children: [
                            (0, r.jsx)(ep.D, { variant: "heading-lg/medium", children: eo.intl.string(eo.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sS.Nf,
                                children: [
                                    (0, r.jsx)(st, { onChange: h, optionClassName: sS.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(t5, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sf, {
                        ref: o,
                        quests: f,
                        excludedQuests: g,
                        isFetching: S,
                        hasFetched: _,
                        hasFiltersApplied: E.length > 0,
                        onClearFilters: j,
                    }),
                ],
            })
        );
    });
var sN = s(575593),
    sp = s(440703),
    sT = s(462887),
    sA = s(187322),
    sO = s(765671),
    sI = s(736653),
    sb = s(162232),
    sR = s(734736),
    sM = s(303136),
    sQ = s(265234),
    sL = s(181713);
let sy = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sL.A : sL.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sQ.k, t),
        children: s
            ? (0, r.jsx)(sM.A, {
                  preload: "auto",
                  className: sQ.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sQ.L, src: l, alt: n }),
    });
};
var sH = s(57718),
    sU = s(659249);
let sD = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        x = (0, E.bG)([tT.default], () => tT.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, sO.Ay)(),
        S = (0, sI.Ay)(),
        _ = (0, z.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        j = t.userStatus?.claimedTier ?? 0,
        v = t.config.rewards[j],
        C = v?.type === sp.l.FRACTIONAL_PREMIUM,
        N = v?.type === sp.l.COLLECTIBLE,
        p = v?.type === sp.l.VIRTUAL_CURRENCY,
        T = v?.collectibleProduct?.items?.[0],
        A = T?.type === sN.R.AVATAR_DECORATION ? T : null,
        O = i.useMemo(
            () =>
                null == v
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? eo.intl.format(eo.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : v.name,
            [v, p, t],
        );
    (0, sO.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == d.current || null == h.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let I = (0, sT.M)(S),
        R = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, ez.tW)(t, ez.fY.REWARD), [t]),
        Q = s ? g + 8 : 0,
        { content_position: L, row_index: y, ...H } = (0, e$.fF)(eB.uF.TROPHY_CASE_CARD);
    function U() {
        n(!0), so.default.track(eg.HAw.QUEST_HOVER, { quest_id: t.id, ...H });
    }
    function D() {
        n(!1);
    }
    function q(e) {
        c(!0), so.default.track(eg.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == v || u
        ? null
        : (0, r.jsx)(sA.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: U,
                  onBlur: D,
                  onMouseEnter: U,
                  onMouseLeave: D,
                  className: o()(sU.kL, { [sU.yo]: s }),
                  children: [
                      null != x &&
                          N &&
                          null != A &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: sU.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sb.A, {
                                  avatarDecorationOverride: A,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      C
                          ? (0, r.jsx)(sR.A, { className: sU.Sl })
                          : p
                            ? (0, r.jsx)(sy, {
                                  className: sU.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(b.A, {
                                    className: sU.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => q(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sU.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => q(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sU.Lw, { [sU.en]: I, [sU.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sU.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sH.Ay, {
                              logotypeClassName: o()(sU.wm, { [sU.A0]: R }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: sU.zH,
                          children: [
                              (0, r.jsx)(ep.D, {
                                  className: sU.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eo.intl.format(eo.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(eU.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "always-white",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: eo.intl.format(eo.t["kXVcV+"], { reward: O, claimedDate: _ }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sq = s(396478);
function sF(e) {
    let { onClick: t } = e,
        n = (0, sI.Ay)();
    return (0, r.jsxs)(sq.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sq.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sq.SG, { note: eo.intl.format(eo.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sw = s(975424);
function sP(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, z.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(er.y, { className: sw.u })
        : 0 === n.length
          ? (0, r.jsx)(sF, { onClick: () => t(z.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sw.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sD, { quest: e }, e.id)),
            });
}
var sk = s(548411),
    sB = s(554830),
    sW = s(689175),
    sG =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let sV = [
    { type: "featured-quests", identifier: "featured", title: eo.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: eo.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: eo.t.P0lmqC },
    { type: "quests", identifier: "orb", title: eo.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: eo.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: eo.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: eo.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: eo.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function sK(e) {
    return ec.A.space.SPACE_XL.resolve({ density: e });
}
let sz = (e, t) => (1220 - 2 * sK(e) * (t ? 2 : 0.75)) / 3;
var s$ = s(522403);
let sY = "data-scroll-target",
    sX = `[${sY}]`,
    sJ = { anchors: [], pageSize: 1 },
    sZ = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function s0(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let s1 = i.memo(function (e) {
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
            [S, _] = i.useState(!1),
            [j, v] = i.useState(!0),
            [N, p] = i.useState([]),
            [T, A] = i.useState(1),
            O = (0, E.bG)([C.Ay], () => C.Ay.useReducedMotion) ? "auto" : "smooth",
            I = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (g(e.scrollLeft > 0), _(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
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
                if (null == x.current || x.current?.clientWidth === 0) return v(!0);
                v(x.current?.clientWidth >= 1260);
            }, [x]),
            M = i.useCallback(
                (e) => {
                    let t = d.current?.getScrollerNode();
                    if (null == t || N.length < 2) return;
                    let { currentIndex: s, scrollLefts: n } = s0(t, N),
                        l = Math.max(0, Math.min(N.length - 1, s + e * T));
                    (m.current = e$.pk.ARROW), t.scrollTo({ left: n[l], behavior: O });
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
                    ((m.current = e$.pk.MANUAL),
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
                let { currentIndex: t } = s0(e, N),
                    s = m.current ?? e$.pk.MANUAL;
                m.current = null;
                let n = h.current;
                h.current = e.scrollLeft;
                let l = e.scrollLeft > n ? e$.VU.RIGHT : e$.VU.LEFT;
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
                        o = null == a ? null : a.matches(sZ) ? a : a.querySelector(sZ);
                    null != o && (o.focus({ preventScroll: !0 }), e.repeat && Q(a, "instant"));
                },
                [n, Q],
            ),
            U = i.useCallback(() => {
                I(), b(), R();
            }, [I, b, R]);
        (0, sc.g)(x, U, [], { fireOnMount: !0 });
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
            className: o()(s, s$.m7),
            ref: x,
            style: q,
            children: [
                (0, r.jsx)("div", {
                    className: o()(s$.k9, s$.RW, { [s$.Q2]: f }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(et.K, {
                        icon: sk.Z,
                        variant: "overlay-secondary",
                        onClick: () => M(-1),
                        disabled: !f,
                        "aria-label": eo.intl.string(eo.t.vgfxaA),
                        tabIndex: -1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(s$.k9, s$.K3, { [s$.Q2]: S }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(et.K, {
                        icon: sB.K,
                        variant: "overlay-secondary",
                        onClick: () => M(1),
                        disabled: !S,
                        tabIndex: -1,
                        "aria-label": eo.intl.string(eo.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [s$.sF]: f && j, [s$.RC]: S && j, [s$.Ni]: D && !f, [s$.GA]: D && !S }),
                    children: (0, r.jsx)(sW.zC, {
                        ref: d,
                        orientation: "horizontal",
                        onScroll: I,
                        onScrollEnd: y,
                        onFocusCapture: L,
                        onKeyDown: H,
                        className: o()({ [s$.x2]: D }, s$.XG),
                        children: (0, r.jsxs)(e2.X.Provider, {
                            value: d,
                            children: [
                                t,
                                N.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: s$.fw, style: { insetInlineStart: `${e}px` } },
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
    s2 = i.createContext({
        targetQuestId: null,
        targetSectionIdentifier: null,
        highlightCount: null,
        highlightAnimationProgress: null,
    });
var s3 = s(76060);
function s7(e) {
    let { children: t, sectionIdentifier: s, questId: n, featuredSection: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: o,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(s2),
        d = a === n && o === s,
        m = null != a && (a !== n || o !== s),
        { useNewTile: E } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        h = l ? "var(--radius-lg)" : "var(--radius-sm)",
        x = i.useMemo(() => ({ ...sl(d, m, c), borderRadius: E ? h : "10px" }), [d, m, c, E, h]);
    return (0, r.jsxs)(ss.animated.div, {
        [sY]: "",
        className: d ? s3.X : void 0,
        style: x,
        children: [d && (0, r.jsx)("div", { className: s3.E }, u), t],
    });
}
var s4 = s(474646);
function s8(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : sd(t, 345, 20, 2)), [t]);
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
                        s7,
                        {
                            featuredSection: !0,
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      tq,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: eB.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: eB.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      eW.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: eB.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: eB.uF.QUEST_HOME_FEATURED_SECTION,
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
var s6 = s(344236),
    s5 = s(654424);
function s9(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(s6.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: o()(s5.m, s6.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: s6.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(s5.m, s6.Vr) }, t),
                ),
            }),
        ],
    });
}
var ne = s(418842),
    nt = s(561844),
    ns = s(548636);
function nn(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(s2),
        { useNewTile: o } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = V.Mk.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        c = (0, ne.C)(),
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
                (0, nt.kO)({
                    scrollingType: d ? e$.pk.AUTO : n,
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
        E = u === V.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(s1, {
        maskWidth: sK(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${sz(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: ns.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        s7,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(tq, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: ns.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(eW.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === sG.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: ns.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: ns.fu }),
            ],
        }),
    });
}
var nl = s(958538);
let nr = ts.A.Millis.WEEK;
function ni() {
    let e = Z.A.quests;
    if (0 === Z.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tA.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class na extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(Z.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - nr;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([Z.A], ni), t;
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
let no = new na(X.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            if (null == Z.A.getQuest(e.questId)) return !1;
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    nu = 2 * ts.A.Millis.DAY,
    nc = new Map(sV.map((e) => [e.identifier, e])),
    nd = {
        [sG.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nm(e, t) {
    let s = nc.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
function nE(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
var nh = s(32304);
let nx = {
        [sG.FEATURED]: eB.uF.QUEST_HOME_FEATURED_SECTION,
        [sG.IN_PROGRESS]: eB.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [sG.ENDING_SOON]: eB.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [sG.ORB]: eB.uF.QUEST_HOME_ORB_SECTION,
        [sG.DISCOVERED]: eB.uF.QUEST_HOME_DISCOVERED_SECTION,
        [sG.EXPIRED]: eB.uF.QUEST_HOME_EXPIRED_SECTION,
        [sG.PREVIEW]: eB.uF.QUEST_HOME_PREVIEW_SECTION,
        [sG.SPECIAL_QUESTS]: eB.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    nf = 4 * ts.A.Millis.SECOND,
    ng = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: a = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
            {
                sections: d,
                isFetchingCurrentQuests: m,
                getSectionIdentifierForTargetedQuest: h,
            } = (() => {
                let e = (0, tB.Gn)(),
                    t = (0, z.Cv)(),
                    s = (0, E.bG)([Z.A], () => Z.A.lastFetchedCurrentQuests > 0),
                    { quests: n, isFetchingCurrentQuests: l } = (0, z.Qh)(z.NC.ALL, {
                        sortMethod: tx.kL.SUGGESTED,
                        filters: [],
                        removeExpiredQuests: !e,
                    }),
                    r = (0, nl.A)(
                        () =>
                            n.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        n.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        nE,
                    ),
                    a = (0, Y.T2)(),
                    o = (0, E.bG)([no], () => no.getDiscoveredAtByQuestId(), []),
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
                                          let t = Z.A.getQuestConfig(e);
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
                                                  { userStatus: a, preview: o } = Z.A.getQuest(t.id) ?? {},
                                                  u = [],
                                                  c =
                                                      null != a &&
                                                      null != a.enrolledAt &&
                                                      null != a.completedAt &&
                                                      null == a.claimedAt;
                                              return (0, tA.kd)(t) && !c
                                                  ? r
                                                      ? [sG.EXPIRED]
                                                      : null
                                                  : (n.has(t.id) && u.push(sG.DISCOVERED),
                                                      i && !0 === o && u.push(sG.PREVIEW),
                                                      null != a && null != a.enrolledAt && null == a.claimedAt)
                                                    ? [...u, sG.IN_PROGRESS]
                                                    : null != s && (0, eX.I0)(s, t.id) && nm(sG.FEATURED, l)
                                                      ? [...u, sG.FEATURED]
                                                      : new Date(t.expiresAt).valueOf() <= Date.now() + nu
                                                        ? [...u, sG.ENDING_SOON]
                                                        : nm(sG.FEATURED, l)
                                                          ? [...u, sG.FEATURED]
                                                          : (0, tO.ks)(t)
                                                            ? [...u, sG.ORB]
                                                            : [...u, sG.SPECIAL_QUESTS];
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
                                          sV
                                              .map((e) => {
                                                  let t = nd?.[e.identifier];
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
            { showToast: f } = su(),
            [g, S] = i.useState(null),
            [_, j] = i.useState(null),
            [v, C] = i.useState(0),
            [N, p] = i.useState(null),
            [T, A] = i.useState(0),
            O = i.useRef(null),
            I = i.useCallback(
                (e) => {
                    p(e.contentRect.width);
                },
                [p],
            );
        (0, sc.g)(x, I, [I], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: b }, R] = (0, sn.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nf },
            })),
            M = i.useCallback(
                (e, t) => {
                    if (null == e || null == N || m || n) return !1;
                    t && (0, J.sB)(e);
                    let s = h(e),
                        l = !0 === t ? sG.DISCOVERED : s;
                    if (null == s) return f(e), !1;
                    let r = document.getElementById((0, eW.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (S(e),
                        j(l),
                        C((e) => e + 1),
                        r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        R({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || (S(null), j(null));
                            },
                        }),
                        !0)
                    );
                },
                [S, C, R, m, n, f, N, h],
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
                    targetSectionIdentifier: _,
                    highlightCount: v,
                    highlightAnimationProgress: b,
                }),
                [g, _, v, b],
            ),
            L = i.useMemo(
                () =>
                    d.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sG.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(s2.Provider, {
            value: Q,
            children: (0, r.jsx)("div", {
                className: o()(nh.kL, l, { [nh.Sy]: !a }),
                ref: x,
                children: m
                    ? (0, r.jsx)(s9, { role: "status", "aria-label": eo.intl.string(eo.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: nh.p9,
                                    children: [
                                        (0, r.jsx)(ep.D, {
                                            variant: "heading-lg/semibold",
                                            className: nh.Gf,
                                            children: eo.intl.string(l),
                                        }),
                                        s === sG.FEATURED && u && c
                                            ? (0, r.jsx)(s8, {
                                                  questIds: n,
                                                  setMaxRowIndex: A,
                                                  containerWidth: N,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(nn, {
                                                  questIds: n,
                                                  rowIndex: t < L ? t : t + T,
                                                  sectionIdentifier: s,
                                                  questContent: nx[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: nh.y7,
                            children: [
                                (0, r.jsx)(ep.D, {
                                    variant: "heading-xl/semibold",
                                    children: eo.intl.string(eo.t.NqFP6z),
                                }),
                                (0, r.jsx)(eU.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: eo.intl.string(eo.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var nS = s(353640),
    n_ = s(121894),
    nj = s(851936);
let nv = (0, nS.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, nj.L)({ location: tx.rE.QUEST_HOME_DESKTOP });
        if (s.info === ej.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, n_.r)(() => e(l));
    },
}));
var nC = s(516226),
    nN = s(274670),
    np = s(144779),
    nT = s(104886),
    nA = s(18437),
    nO = s(901406),
    nI = s(139384),
    nb = s(770178),
    nR = s(14233);
function nM(e, t) {
    let { row_index: s, ...n } = (0, e$.fF)(eB.uF.QUEST_HOME_HERO);
    (0, nt.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: eB.uF.QUEST_HOME_HERO,
    });
}
let nQ = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, E] = i.useState("display-lg"),
        h = i.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, nb.w)(h, [], { fireOnMount: !0 }),
        f = i.useCallback(() => nM(s, eg.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => nM(s, eg.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(tc.N, {
        theme: eg.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(nR.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: g,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nR.FG,
                    children: [
                        (0, r.jsxs)(_.B, {
                            className: nR.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(_.B, {
                                    className: nR.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(_.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(ep.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nR.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(eU.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nR.VA,
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
var nL = s(194526),
    ny = s(731355),
    nH = s(621466),
    nU = s(508770),
    nD = s(406810),
    nq = s(628284),
    nF = s(65154),
    nw = s(975807),
    nP = s(58703),
    nk = s(398025),
    nB = s(691464);
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
function nG(e) {
    let { hero: t, contentPosition: s } = e,
        n = i.useRef(null),
        { isHovering: l, hoverProps: a } = nW(
            i.useCallback(
                (e) => {
                    (0, nt.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eg.HAw.QUEST_HOVER : eg.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: eB.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, e$.jO)(eB.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: eB.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = n.current;
        (0, nH.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(ej.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: u } = (0, sn.z)({ hoverSpring: +!!l, config: ss.config.gentle }),
        c = i.useCallback(() => {
            (0, nw.A)(t.cta.url),
                (0, nT.E5)(nT.kI.STEP_3_CLICKED_EXTERNAL, "quest_home_hero_shelf_intro_card")
                    ? (0, nN.r)({
                          type: np.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          adCreativeId: t.id,
                          questContentCTA: e$.Cy.OPEN_GAME_LINK,
                          surfaceId: eB.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: eB.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: s,
                      })
                    : (0, nt.vK)({
                          adContentId: t.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: eB.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: e$.Cy.OPEN_GAME_LINK,
                          questContentPosition: s,
                          sourceQuestContent: eB.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(em.D, {
        tag: "div",
        className: o()(nB.FW, nB.Bm),
        onClick: c,
        "aria-label": t.cta.buttonLabel,
        [sY]: !0,
        ...a,
        children: [
            (0, r.jsx)("div", {
                className: nB.Ve,
                children: (0, r.jsx)(eJ.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(nB.pv, nB.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(nB.pv, nB.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(ss.animated.div, {
                className: nB.hn,
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
function nV(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: h } = (0, tt.A)(a, ts.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, nP.uN)(
                    { days: u, hours: c, minutes: d, seconds: h },
                    { days: eo.t["Ux/De1"], hours: eo.t.Lzd5Ie, minutes: eo.t.odmpbP },
                ),
            [u, c, d, h],
        ),
        f = (0, E.bG)([tT.default], () => tT.default.getCurrentUser()),
        S = i.useMemo(() => (0, tO.mq)(s.config, f), [s.config, f]),
        j = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, t1.xv)(e).type) {
                        case sp.l.IN_GAME:
                            return eo.intl.string(eo.t["O/J2kr"]);
                        case sp.l.COLLECTIBLE:
                            return eo.intl.string(eo.t.Jg17Ut);
                        case sp.l.VIRTUAL_CURRENCY:
                            return eo.intl.string(eo.t.ElYQFS);
                        default:
                            return (0, tO.mq)(e, t);
                    }
                })(s.config, f),
            [s.config, f],
        ),
        { completedRatio: v, completedRatioDisplay: C } = (0, z.O9)(s),
        N = i.useMemo(() => (0, tO.wo)(s.config, f), [s.config, f]),
        p = (0, nA.tG)(),
        T = (0, nA.WS)(),
        A = (0, eY.go)(),
        { isHovering: O, hoverProps: I } = nW(
            i.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eg.HAw.QUEST_HOVER : eg.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: eB.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, e$.jO)(eB.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: eB.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: b } = (0, sn.z)({ hoverSpring: +!!O, config: ss.config.gentle }),
        R = i.useCallback(() => {
            n(s.id),
                (0, nT.E5)(nT.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, nN.r)({
                          type: np.F.CLICK_INTERNAL,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: e$.Cy.VIEW_QUESTS,
                          surfaceId: eB.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: eB.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: A,
                      })
                    : p({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: eB.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: e$.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: eB.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, p, l, A]);
    return (0, r.jsxs)(em.D, {
        tag: "div",
        className: o()(nB.FW, nB.$R),
        onClick: R,
        "aria-label": eo.intl.string(eo.t["th2+0j"]),
        [sY]: !0,
        ...I,
        children: [
            (0, r.jsxs)(_.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nU.E, { type: { text: j } }),
                    (0, r.jsx)(ss.animated.div, {
                        style: { opacity: (0, nk.a)(b.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nU.E, { type: { text: x }, icon: nD.O }),
                    }),
                ],
            }),
            (0, r.jsx)(ss.animated.div, {
                className: nB.Tr,
                style: { transform: b.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tI.A, {
                    percentComplete: v,
                    overlayText: O && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tb.A, {
                        quest: s,
                        questContent: eB.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: eB.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(ss.animated.div, {
                className: nB.tw,
                style: {
                    opacity: (0, nk.a)(b.to([0, 1], [1, 0])),
                    transform: b.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(_.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(eU.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nB.Ht,
                            children: S,
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
                                        (0, r.jsx)(nq.y, { size: "xs", color: ec.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(eU.E, {
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
                                        (0, eX.pv)(s.config) === ny.Z.VIDEO
                                            ? (0, r.jsx)(nF.S, { size: "xs", color: ec.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(e4._, { size: "xs", color: ec.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(eU.E, {
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
            (0, r.jsx)(ss.animated.div, {
                className: nB.um,
                style: { transform: b.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), R();
                    },
                    text: eo.intl.string(eo.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var nK = s(648731);
function nz(e) {
    let { hero: t, shelfQuests: s, isBannerLoading: n, onQuestCtaClick: l } = e,
        i = (0, ne.C)();
    return n
        ? (0, r.jsx)(n$, { numShelfCards: s.length + 1 })
        : (0, r.jsx)(s1, {
              className: nK.vo,
              overflowAmount: 25,
              maskWidth: sK(i),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(_.B, {
                  className: nK.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  children: [
                      (0, r.jsx)(eZ.R, {
                          adContentId: t.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: eB.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: 0,
                          sourceQuestContent: eB.uF.QUEST_HOME_HERO_SHELF,
                          children: (e) =>
                              (0, r.jsx)("div", {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  children: (0, r.jsx)(nG, { hero: t, contentPosition: 0 }),
                              }),
                      }),
                      s.map((e, s) =>
                          (0, r.jsx)(
                              eZ.R,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  questContent: eB.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: s + 1,
                                  sourceQuestContent: eB.uF.QUEST_HOME_HERO_SHELF,
                                  children: (n) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              n.current = e;
                                          },
                                          children: (0, r.jsx)(nV, {
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
function n$(e) {
    let { className: t, numShelfCards: s } = e,
        n = (0, ne.C)(),
        l = Math.max(s, 4);
    return (0, r.jsx)(s1, {
        className: o()(nK.vo, t),
        overflowAmount: 25,
        maskWidth: sK(n),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(_.B, {
            className: nK.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: l - 1 }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(s5.m, nK.W_) }, t),
            ),
        }),
    });
}
var nY = s(95115);
function nX() {
    return (0, r.jsx)("div", { className: nY.Np });
}
function nJ(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, nI.A)(n, tx.rE.QUEST_HOME_DESKTOP);
    let l = i.useMemo(() => (null != s ? (0, ez.WV)(s) : null) ?? t, [s, t]);
    return (0, r.jsx)($._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eJ.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: n,
                imageAsset: {
                    alt: "",
                    className: nY.LY,
                    asset: { url: l, mimetype: (0, ez.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: nY.LY,
                    asset: { url: s, mimetype: (0, ez.vm)(s), isAnimated: !0 },
                    assetId: s,
                },
            }),
    });
}
function nZ(e) {
    let { heroImage: t, heroVideo: s } = e;
    return null == s
        ? (0, r.jsxs)("div", {
              className: nY.Tv,
              children: [
                  (0, r.jsx)(nX, {}),
                  (0, r.jsx)("div", {
                      className: nY.LO,
                      children: (0, r.jsx)($._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: nY.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nY.LO, nY.jx, nY.hw),
                      children: (0, r.jsx)("img", { className: nY.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nY.LO, nY.jx, nY.Co),
                      children: (0, r.jsx)("img", { className: nY.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: nY.Tv,
              children: [
                  (0, r.jsx)(nX, {}),
                  (0, r.jsx)("div", { className: nY.LO, children: (0, r.jsx)(nJ, { heroImage: t, heroVideo: s }) }),
              ],
          });
}
function n0(e) {
    let { hero: t, hasFetchedQuests: s, hasNoAccessibleQuests: n } = e,
        l = (0, nA.WS)(),
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
                    event: eg.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: eB.uF.QUEST_HOME_HERO,
                }));
        }, [s, n, t.id, t.questIds, l]),
        null
    );
}
function n1(e) {
    let { hero: t, onQuestCtaClick: s, isBannerLoading: n } = e,
        l = (0, E.bG)([Z.A], () => Z.A.quests),
        a = (0, E.bG)([Z.A], () => Z.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, z.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, nL.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        x = h[0];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eZ.R, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: eB.uF.QUEST_HOME_HERO,
                sourceQuestContent: eB.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(n0, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(nQ, {
                                ref: (t) => {
                                    e.current = n ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [nY.lX]: n }),
                                topContent: (0, r.jsxs)(_.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)($._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: nY.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(eU.E, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: nY.yu,
                                            children: eo.intl.string(eo.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                buttons: (0, r.jsxs)(f.e, {
                                    children: [
                                        (0, r.jsx)(g.$, {
                                            onClick: () => {
                                                (0, nO._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: eB.uF.QUEST_HOME_HERO,
                                                        ctaContent: e$.Cy.OPEN_GAME_LINK,
                                                        sourceQuestContent: eB.uF.QUEST_HOME_HERO,
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
                                                        (0, nT.E5)(nT.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                            ? (0, nN.r)({
                                                                  type: np.F.CLICK_INTERNAL,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  adCreativeId: t.id,
                                                                  questContentCTA: e$.Cy.VIEW_QUESTS,
                                                                  surfaceId: eB.uF.QUEST_HOME_HERO,
                                                                  sourceQuestContent: eB.uF.QUEST_HOME_HERO,
                                                              })
                                                            : (0, nt.vK)({
                                                                  adContentId: t.id,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  questContent: eB.uF.QUEST_HOME_HERO,
                                                                  questContentCTA: e$.Cy.VIEW_QUESTS,
                                                                  sourceQuestContent: eB.uF.QUEST_HOME_HERO,
                                                              });
                                                },
                                                size: "md",
                                                text: eo.intl.string(eo.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(nZ, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(nz, { hero: t, isBannerLoading: n, shelfQuests: u, onQuestCtaClick: s }),
        ],
    });
}
function n2() {
    return (0, r.jsx)("div", { className: o()(nR.iE, nR.FG, nR.B3), children: (0, r.jsx)(er.y, {}) });
}
var n3 = s(740879),
    n7 = s(604880),
    n4 = s(318808);
function n8(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, th.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: n3.MY,
        children: [
            (0, r.jsx)("img", { className: n3.Bg, src: n4.Ay, alt: "" }),
            (0, r.jsx)("div", { className: n3.r$, children: (0, r.jsx)("img", { src: n7, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: n3.Nr,
                children: [
                    (0, r.jsx)(ep.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: n3.ky,
                        children: eo.intl.string(eo.t.GXmn57),
                    }),
                    (0, r.jsx)(eU.E, {
                        variant: "text-md/normal",
                        className: n3.G3,
                        children: eo.intl.string(eo.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: eo.intl.string(eo.t.UQvCf7),
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
var n5 = s(298537);
let n9 = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, ne.C)(),
        { useNewTile: n } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = V.Mk.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        o = l === V.d.LARGE_MASK_MARGIN,
        u = sm(a, sz(s, o), 20, 3);
    return (0, r.jsxs)(_.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: n5.kL,
        ref: a,
        children: [
            (0, r.jsxs)(ep.D, {
                variant: "heading-lg/medium",
                children: [eo.intl.string(eo.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(_.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: n5.y7,
                      children: [
                          (0, r.jsx)(n6, { alt: eo.intl.string(eo.t["Xe+fJM"]) }),
                          (0, r.jsxs)(_.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(ep.D, {
                                      variant: "heading-lg/medium",
                                      children: eo.intl.string(eo.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(ep.D, {
                                      variant: "heading-sm/medium",
                                      children: eo.intl.string(eo.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: n5.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${sz(s, o)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== u &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        tq,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: eB.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n5.d,
                                            sourceQuestContent: eB.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        eW.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: eB.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n5.d,
                                            sourceQuestContent: eB.uF.QUEST_HOME_SEARCH_RESULT,
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
        ].filter(tJ.Vq);
    },
    sortType: ls.r.JARO_WINKLER,
    throttleMs: 200,
};
var li = s(631001),
    la = s(758836),
    lo = s(613057),
    lu = s(935824);
let lc = i.createContext({});
function ld(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lc);
    return (0, r.jsxs)(e2.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(H.A, { className: lu.Jo, innerClassName: lu.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lm(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(U.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function lE(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, E.bG)([C.Ay], () => C.Ay.useReducedMotion),
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
        return (0, r.jsx)($._M, {
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
    return (0, r.jsx)($._M, {
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
function lh(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(lu.Tv, { [lu.lJ]: s }),
        children: [
            (0, r.jsx)(nX, {}),
            (0, r.jsx)("div", { className: o()(lu.nz, { [lu.ZZ]: s }) }),
            (0, r.jsx)(lE, {
                onLoadComplete: t,
                className: o()(lu.Fe, { [lu.H4]: s, [lu.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function lx(e) {
    let { className: t, onAssetLoad: s } = e,
        { enabled: n } = (0, F.Z)({ location: tx.rE.QUEST_HOME_DESKTOP }),
        { enabled: l } = K.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        a = n && !l,
        o = i.useCallback(() => {
            a ? window.open(eg.X7G.PAID_TERMS_ORBS) : window.open(B.A.getArticleURL(eg.MVz.QUESTS_LEARN_MORE));
        }, [a]);
    return (0, r.jsx)(nQ, {
        className: t,
        adContentId: a ? tx.yr : tx.uz,
        title: a ? eo.intl.format(eo.t.BCBIlp, {}) : eo.intl.format(eo.t.lmMBfy, {}),
        subtitle: a ? eo.intl.format(eo.t.U9FY0J, {}) : eo.intl.string(eo.t.oWCrBq),
        buttons: a
            ? (0, r.jsxs)(f.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: eo.intl.string(eo.t["1Wm127"]),
                          onClick: () =>
                              (0, O.Cz)({
                                  tab: la.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: N.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: eo.intl.string(eo.t["7kTAgJ"]),
                          onClick: o,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: eo.intl.string(eo.t.hvVgAZ),
                  onClick: o,
                  icon: S.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lh, { onAssetLoad: s, isVirtualCurrencyEnabled: a }),
    });
}
function lf(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, $.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(lu.iS, { [lu.R]: i }),
        children: [
            c && (0, r.jsx)(n2, {}),
            !l &&
                (null == n || a
                    ? (0, r.jsx)(lx, { className: o()({ [lu.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(n1, { hero: n, isBannerLoading: u, onQuestCtaClick: s })),
        ],
    });
}
let lg = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(s.search).getAll(z.L1.AD_CREATIVE_IDS), [s.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        x = (0, E.bG)([A.A], () => A.A.getState("quests")),
        {
            selectedTab: f,
            onSelectTab: g,
            tabs: S,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = li.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, z.p5)(),
                { enabled: r } = V.A8.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                li.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                li.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: z.NC.ALL, label: o ? eo.intl.string(eo.t.Jt6u7B) : eo.intl.string(eo.t["0SzXmi"]) },
                            t
                                ? {
                                      id: z.NC.CLAIMED,
                                      label: o ? eo.intl.string(eo.t["3TVY/R"]) : eo.intl.string(eo.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: z.NC.PREVIEW_TOOL, label: eo.intl.string(eo.t.BDUDau) } : null,
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
                l = (0, E.yK)([Z.A], () =>
                    (0, z.mn)(Array.from(Z.A.quests.values()), { sortMethod: tx.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                a = "" !== r,
                o = i.useMemo(() => lt()(nt.gr, 1e3), []),
                u = i.useCallback(() => {
                    o.cancel();
                    let e = (0, ll.tv)();
                    null != e &&
                        (0, nt.XH)({
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
                                      .filter(tJ.Vq)
                                : null,
                        ),
                        a)
                    ) {
                        let { searchSession: t, isNew: s } = (0, ll.$N)();
                        s && (0, nt.OQ)({ searchSessionId: t.uuid }),
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
        })(),
        { onScroll: H } = (0, y.G)(),
        U = G.A.getState().getUtmCurrentContext(),
        D = nv((e) => e.registerAssetLoad),
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
        }, [f]);
    let { enabled: k } = (0, F.Z)({ location: tx.rE.QUEST_HOME_DESKTOP });
    (0, I.HU)({ location: eo.intl.string(eo.t.JALI2K) });
    let B = i.useRef(null),
        { enabled: K, variant: X } = V.A8.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: J } = V.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        ee = K || J,
        et = (K && X === V.zY.NEW_LAYOUT_WITH_SEARCH) || J,
        es = i.useRef(null),
        en = i.useCallback((e) => {
            es.current?.scrollToQuest(e);
        }, []),
        el = i.useMemo(() => ((0, W.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: er, isLoading: ei } = (0, Y.lg)(l[0] ?? null),
        ea = i.useCallback(() => {
            (0, q.Y)({
                pageType: eg.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eg.JJy.ORBS_BALANCE_MENU,
                ctaObject: eg.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, O.Cz)({ tab: la.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU });
        }, []);
    i.useEffect(() => {
        (0, v.I)(eg.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            L.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != x) return;
            let e = new URLSearchParams(s.search),
                l = e.get(z.L1.TAB);
            if (l === z.NC.PREVIEW_TOOL) {
                let t = e.get(z.L1.QUEST_ID);
                T.A.openNativeAppModal("quests", eg.e$_.DEEP_LINK, {
                    type: lo.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== z.NC.PREVIEW_TOOL) {
                let t = (0, W.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(z.L1.SORT),
                    r = e.get(z.L1.FILTER),
                    i = e.get(z.L1.AD_CREATIVE_IDS);
                T.A.openNativeAppModal("quests", eg.e$_.DEEP_LINK, {
                    type: lo.XK.QUEST_HOME,
                    params: { questId: (0, W.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, x, n.action, s.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eu = i.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), B.current?.scrollToTop({ animate: !1 }), g(e), Q();
            },
            [n, g, Q],
        ),
        ec = i.useMemo(() => null != M && et, [M, et]),
        ed = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        em = i.useMemo(() => ({ onScroll: H, scrollerRef: B }), [H, B]),
        eE = (0, V.Qj)() && 0 === l.length;
    return a
        ? (0, r.jsx)(n8, { adCreativeIds: l })
        : (0, r.jsx)(nC.M.Provider, {
              value: ed,
              children: (0, r.jsx)(lc.Provider, {
                  value: em,
                  children: (0, r.jsx)("div", {
                      className: o()(lu.kL, { [lu.KY]: !t }),
                      children: (0, r.jsxs)(ld, {
                          header: (0, r.jsx)(lm, {
                              selectedTab: f,
                              onSelectTab: eu,
                              tabs: S,
                              endContent: (0, r.jsxs)(_.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      et &&
                                          (0, r.jsx)(j.I, {
                                              query: C,
                                              onChange: b,
                                              placeholder: eo.intl.string(eo.t.y10TI2),
                                              onClear: Q,
                                              size: "sm",
                                          }),
                                      k &&
                                          (0, r.jsx)(w.SS, {
                                              analyticsPage: eg.liQ.GLOBAL_DISCOVERY_QUESTS,
                                              cardAlignment: w.cP.END,
                                              ctaText: eo.intl.string(eo.t["J+vlIR"]),
                                              ctaOnClick: ea,
                                          }),
                                  ],
                              }),
                          }),
                          banner:
                              f === z.NC.ALL &&
                              !eE &&
                              (0, r.jsx)(
                                  $.y5,
                                  {
                                      source: tx.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: er?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: (0, r.jsx)(lf, {
                                          onAssetLoad: D,
                                          onQuestCtaClick: en,
                                          hasSearchResults: ec,
                                          questHomeHero: er,
                                          isLoadingQuestHomeHero: ei,
                                      }),
                                  },
                                  er?.id,
                              ),
                          children: [
                              ec && null != M && (0, r.jsx)(n9, { matchingQuestIds: M }),
                              f === z.NC.CLAIMED
                                  ? (0, r.jsx)(sP, { onSelectTab: eu, className: ec ? lu.R : void 0 })
                                  : f === z.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(tY, { className: ec ? lu.R : void 0 })
                                    : ee
                                      ? (0, r.jsx)(ng, {
                                            className: ec ? lu.R : void 0,
                                            ref: es,
                                            deepLinkedQuestId: el,
                                            isLoadingQuestHomeHero: !eE && ei,
                                            withQuestHomeHero: !eE,
                                        })
                                      : (0, r.jsx)(sC, { ref: es }),
                          ],
                      }),
                  }),
              }),
          });
};
