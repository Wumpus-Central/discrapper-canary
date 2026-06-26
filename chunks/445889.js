let n;
s.r(t), s.d(t, { default: () => lN }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    i = s(64700),
    a = s(503698),
    o = s.n(a),
    u = s(873263),
    c = s(835245),
    d = s(562708),
    m = s(607399),
    E = s(323889),
    h = s(17928),
    x = s(554146),
    f = s(577473),
    g = s(825484),
    j = s(821609),
    v = s(509434),
    C = s(534514),
    _ = s(834730),
    S = s(123292),
    N = s(331322),
    p = s(892547),
    T = s(944791),
    A = s(775602),
    O = s(274670),
    b = s(144779),
    I = s(793574),
    R = s(139286),
    M = s(197111),
    L = s(10088),
    Q = s(662388),
    y = s(726249),
    U = s(607470),
    H = s(826673),
    D = s(840251),
    F = s(688151);
let q = new D.E([], F.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var w = s(711111),
    P = s(701508),
    k = s(979590),
    B = s(749638),
    V = s(783531),
    W = s(334465),
    G = s(318346),
    K = s(371446),
    z = s(70926),
    $ = s(531685),
    Y = s(174459),
    J = s(676279),
    X = s(975571),
    Z = s(240248),
    ee = s(507107),
    et = s(631001),
    es = s(87549),
    en = s(192444),
    el = s(104886);
let er = (0, s(945810).mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ei = s(347135),
    ea = s(590202),
    eo = s(557637),
    eu = s(371912);
s(321073);
var ec = s(228366),
    ed = s(340124),
    em = s(859703);
s(667532);
var eE = s(783878),
    eh = s(408278),
    ex = s(663417),
    ef = s(922016),
    eg = s(624479),
    ej = s(289873),
    ev = s(416052),
    eC = s(417098),
    e_ = s(375708);
function eS(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(eC.$T, {
        color: eC.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : e_.intl.string(e_.t.ZErSg5) }),
    });
}
var eN = s(661531),
    ep = s(602853),
    eT = s(939249),
    eA = s(817281),
    eO = s(688810),
    eb = s(487245),
    eI = s(363195),
    eR = s(652215),
    eM = s(398876);
let eL = function () {
    let { analyticsLocations: e } = (0, eO.Ay)(),
        t = (0, h.bG)([eI.A], () => eI.A.theme),
        s = i.useRef(null);
    i.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, ep.r)(eN.A.colors.BACKGROUND_BASE_LOW, eR.NJ8.LIGHT),
        l = (0, ep.r)(eN.A.colors.BACKGROUND_BASE_LOW, eR.NJ8.DARKER),
        a = (0, ep.r)(eN.A.colors.BACKGROUND_BASE_LOW, eR.NJ8.MIDNIGHT),
        o = i.useMemo(
            () => [
                { theme: eR.NJ8.LIGHT, label: e_.t.K2sFfo, color: n.hex() },
                { theme: eR.NJ8.DARKER, label: e_.t.b8Cei3, color: l.hex() },
                { theme: eR.NJ8.MIDNIGHT, label: e_.t.Do4ZJx, color: a.hex() },
            ],
            [n, l, a],
        ),
        u = i.useCallback(
            (t) => {
                (0, eb.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, eA.u_)({ theme: t });
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: eM.N,
        children: (0, r.jsxs)("div", {
            className: eM.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        eT.D,
                        {
                            tag: "div",
                            className: eM.Du,
                            onClick: () => u(e.theme),
                            "aria-label": e_.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${eM.WT} ${t === e.theme ? eM.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: eM.i, children: e_.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(eh.K, {
                    onClick: c,
                    "aria-label": e_.intl.string(e_.t.yBZMsQ),
                    icon: ex.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eQ = s(818348),
    ey = s(60857);
let eU = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, ei.pT)(),
        E = (0, h.bG)([em.A], () => (null != t ? em.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, h.bG)([em.A], () => null != t && em.A.isFetchingQuestPreview(t), [t]),
        f = i.useMemo(() => {
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
                    await (0, ed.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, ed.UZ)(t);
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
                    await (0, ed.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(
            (e) => {
                (0, Z.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: ey.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: ey.Br,
                    children: (0, r.jsxs)("div", {
                        className: ey.bo,
                        children: [
                            (0, r.jsx)(eL, {}),
                            (0, r.jsxs)("div", {
                                className: ey.b8,
                                children: [
                                    (0, r.jsx)(
                                        eE.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: f,
                                            value: t,
                                            onSelectionChange: S,
                                            placeholder: e_.intl.string(e_.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, Z.uJ)(t?.trim())) return e;
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
                                    (0, r.jsx)(eh.K, {
                                        onClick: l,
                                        "aria-label": e_.intl.string(e_.t.wzzjk9),
                                        icon: ex.f,
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
                    className: ey.in,
                    children: (0, r.jsxs)(g.e, {
                        className: ey.xv,
                        children: [
                            (0, r.jsx)(j.$, {
                                onClick: v,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: e_.intl.string(e_.t.jQEfRT),
                            }),
                            (0, r.jsx)(j.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: e_.intl.string(e_.t.taqkwK),
                            }),
                            (0, r.jsx)(j.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: e_.intl.string(e_.t.cKSLr4),
                            }),
                            (0, r.jsx)(ef.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: ey.PP,
                                        children: (0, r.jsx)("div", {
                                            className: ey.sH,
                                            children: (0, r.jsx)(ev.A, {
                                                value: eQ.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: e_.intl.string(e_.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(eh.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": e_.intl.string(e_.t.rNGQfD),
                                        icon: eg.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != E ? (0, r.jsx)(eS, { error: E }) : null,
            x ? (0, r.jsx)(ej.y, {}) : null,
        ],
    });
};
var eH = s(364522),
    eD = s(761508),
    eF = s(797788);
function eq() {
    return (0, r.jsx)("div", { className: eF.y });
}
var ew = s(684603),
    eP = s(332544);
let ek = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eP.x3,
        children: (0, r.jsxs)("div", {
            className: eP.B0,
            children: [
                (0, r.jsx)(C.D, {
                    className: eP.R_,
                    variant: "heading-md/semibold",
                    children: e_.intl.string(e_.t.L2mlUb),
                }),
                (0, r.jsx)(ew.A, { quest: t }),
            ],
        }),
    });
};
var eB = s(242939),
    eV = s(717695),
    eW = s(763578),
    eG = s(111113);
let eK = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eP.x3,
        children: (0, r.jsxs)("div", {
            className: eW.wp,
            children: [
                (0, r.jsx)(C.D, {
                    className: eW.Oo,
                    variant: "heading-md/semibold",
                    children: e_.intl.string(e_.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eW.RE,
                    children: (0, r.jsx)("div", {
                        className: eW.Z,
                        children: (0, r.jsx)("div", {
                            className: eG.C3,
                            children: (0, r.jsx)(eV.A, {
                                children: (0, r.jsx)(eo.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: E.p.QUEST,
                                    children: (0, r.jsx)(eB.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ez = s(683071),
    e$ = s(527549),
    eY = s(442444),
    eJ = s(347562);
function eX(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eP.x3,
        children: (0, r.jsxs)("div", {
            className: eP.B0,
            children: [
                (0, r.jsx)(C.D, {
                    className: eP.R_,
                    variant: "heading-md/semibold",
                    children: e_.intl.string(e_.t.gWinpQ),
                }),
                (0, r.jsx)(_.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children:
                        "QuestChannelCallHeader (live \u2014 branches on your experiment assignment: control = legacy UI, T1/T2 = bar below)",
                }),
                (0, r.jsx)("div", {
                    className: eP.YT,
                    children: (0, r.jsx)(e$.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
                (0, r.jsx)(_.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: "T1 / T2 \u2014 horizontal bar (unenrolled)",
                }),
                (0, r.jsx)("div", {
                    className: eP.YT,
                    children: (0, r.jsx)(eY.A, { quest: t, isFocused: !1, onAcceptQuest: () => {}, isEnrolling: !1 }),
                }),
                (0, r.jsx)(_.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: "T1 \u2014 post-enrollment InlineNotice (auto-dismisses after 5 s in production)",
                }),
                (0, r.jsx)("div", {
                    className: eP.YT,
                    children: (0, r.jsx)(ez.w, {
                        type: "info",
                        children: (0, r.jsxs)("div", {
                            className: eJ.iW,
                            children: [
                                (0, r.jsx)(_.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    className: eJ.V9,
                                    children: e_.intl.formatToPlainString(e_.t.EQa7os, {
                                        questName: t.config.messages.questName,
                                    }),
                                }),
                                (0, r.jsx)(j.$, {
                                    size: "sm",
                                    variant: "secondary",
                                    text: e_.intl.string(e_.t["th2+0j"]),
                                    onClick: () => {},
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        }),
    });
}
var eZ = s(711038),
    e0 = s(330034);
let e1 = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eP.x3,
        children: (0, r.jsxs)("div", {
            className: eP.B0,
            children: [
                (0, r.jsx)(C.D, { variant: "heading-md/semibold", children: e_.intl.string(e_.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: e0.wu,
                    children: (0, r.jsx)("span", { className: e0.cy, children: e_.intl.string(e_.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: e0.oU,
                    children: (0, r.jsx)("div", {
                        className: e0.zx,
                        children: (0, r.jsx)("div", {
                            className: e0.Lj,
                            children: (0, r.jsx)("div", {
                                className: e0.n0,
                                children: (0, r.jsx)(eZ.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var e2 = s(892955),
    e7 = s(173936),
    e4 = s(365199),
    e3 = s(743674),
    e8 = s(46948),
    e5 = s(971649),
    e6 = s(814793),
    e9 = s(415441),
    te = s(73473),
    tt = s(270045),
    ts = s(79545),
    tn = s(321503),
    tl = s(720875),
    tr = s(339350),
    ti = s(687966),
    ta = s(782134),
    to = s(271536),
    tu = s(768622),
    tc = s(793934),
    td = s(662940),
    tm = s(496431),
    tE = s(927813);
let th = 2 * tE.A.Millis.DAY;
var tx = s(719021);
function tf(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, ts.Pd)(t),
        l = (0, h.bG)([em.A], () => n === ts.UA.UNENROLLED && null != em.A.questEnrollmentBlockedUntil, [n]),
        a = (0, ei.fc)(t),
        u = (0, ei.I3)(t),
        c = i.useMemo(() => (0, td.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, td.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, ts.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case ts.UA.UNENROLLED:
                            case ts.UA.ENROLLED:
                            case ts.UA.INCOMPLETE:
                                return !0;
                            case ts.UA.COMPLETED:
                            case ts.UA.CLAIMED:
                            case ts.UA.EXPIRED:
                            case ts.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < th &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, tm.A)(n, tE.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        E = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(tx.fC, { [tx.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: tx.qS,
                children: [
                    null != E &&
                        (0, r.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            className: tx.SJ,
                            color: "always-white",
                            children: E,
                        }),
                    null != E &&
                        null != d &&
                        (0, r.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            className: tx.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: tx.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: tx.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(tr.Q, { ...s });
                                    switch ((0, td.pv)(e)) {
                                        case td.UK.PLAY:
                                            return (0, r.jsx)(ti._, { ...s });
                                        case td.UK.WATCH:
                                            return (0, r.jsx)(ta.u, { ...s });
                                        case td.UK.ACTIVITY:
                                            return (0, r.jsx)(to.q, { ...s });
                                        case td.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(tu.g, { ...s });
                                        case td.UK.ARENA:
                                            return (0, r.jsx)(tc.q, { ...s });
                                    }
                                })(t, l),
                                (0, r.jsx)(_.E, {
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
                    className: o()(tx.qS, tx.WZ),
                    children: (0, r.jsx)(_.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: e_.intl.string(e_.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var tg = s(409626),
    tj = s(3738),
    tv = s(646917),
    tC = s(990078),
    t_ = s(43990),
    tS = s(743368),
    tN = s(792620),
    tp = s(368715),
    tT = s(617986),
    tA = s(190107),
    tO = s(919500);
function tb(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, ts.Pd)(t),
        { ctaOnHover: u } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        c = (0, h.bG)([em.A], () => a === ts.UA.UNENROLLED && null != em.A.questEnrollmentBlockedUntil, [a]),
        d = a === ts.UA.EXPIRED || (a === ts.UA.CLAIMED && (0, tN.GL)(t)),
        m = (0, ei.do)({ quest: t, content: s, ctaContent: ea.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tO.lO, { [tO.Fq]: l || !u }),
        children: (0, r.jsx)("div", {
            className: tO.mv,
            children: (0, r.jsx)(t_.N, {
                theme: eR.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: e,
                        children: (0, r.jsxs)(g.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                d || i
                                    ? (0, r.jsx)(j.$, {
                                          variant: "secondary",
                                          text: t.config.ctaConfig.buttonLabel,
                                          onClick: m,
                                      })
                                    : (0, r.jsx)(tC.m, {
                                          text: e_.intl.string(e_.t.LLLLPD),
                                          position: "top",
                                          align: "center",
                                          ariaHidden: !0,
                                          children: (0, r.jsx)(eh.K, {
                                              variant: "secondary",
                                              icon: tS.W,
                                              "aria-label": e_.intl.string(e_.t.LLLLPD),
                                              onClick: m,
                                          }),
                                      }),
                                !d &&
                                    !c &&
                                    (0, r.jsx)(tp.A, {
                                        quest: t,
                                        surface: ts.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                c &&
                                    (0, r.jsx)(j.$, {
                                        variant: "overlay-primary",
                                        text: e_.intl.string(e_.t.vY9GgG),
                                        onClick: () => (0, tT.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
var tI = s(403581),
    tR = s(576761),
    tM = s(646440);
function tL(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, ei.ZP)(s),
        i = (0, tR.B9)(n);
    if (null == l) return null;
    let a = i
        ? e_.intl.formatToPlainString(e_.t.l2UfLG, { bonusOrbMultiplier: l })
        : e_.intl.formatToPlainString(e_.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(eT.D, {
        onClick: () => {
            (0, tT.gC)(l, n), t?.();
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: tM.k,
            children: [
                (0, r.jsx)(tI.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(_.E, { variant: "text-sm/normal", color: "currentColor", className: tM.Q, children: a }),
            ],
        }),
    });
}
var tQ = s(947641),
    ty = s(194261),
    tU = s(106799),
    tH = s(287809),
    tD = s(710969),
    tF = s(801365),
    tq = s(453384),
    tw = s(646764),
    tP = s(269999);
function tk(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, h.bG)([tH.default], () => tH.default.getCurrentUser()),
        a = (0, tF.mq)(t.config, i),
        o = (0, tF.ks)(t.config),
        u = (0, tF.wo)(t.config, i),
        c = (0, tF.l0)(t.config, i),
        d =
            null != u
                ? u > 700 * c
                    ? e8.i2.TIER_4
                    : u > 200 * c
                      ? e8.i2.TIER_3
                      : u > 100 * c
                        ? e8.i2.TIER_2
                        : e8.i2.TIER_1
                : void 0,
        { completedRatio: m } = (0, ei.O9)(t),
        E = t.userStatus?.claimedAt != null,
        x = (0, tD.Ic)(t),
        f = t.userStatus?.enrolledAt == null,
        g = E ? "completed" : x ? "expired" : null,
        j = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tw.A, {
                    quest: t,
                    orbTier: d,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: tP.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === g &&
                    (0, r.jsx)("div", {
                        className: tP.EY,
                        children: (0, r.jsx)(tQ.r, { className: tP.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === g &&
                    (0, r.jsx)("div", {
                        className: tP.EY,
                        children: (0, r.jsx)(ty.X, { size: "sm", className: tP.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: tP.CZ,
        children: [
            (0, r.jsx)("div", {
                className: tP.tE,
                children: f
                    ? (0, r.jsx)("div", { className: tP.fm, children: j })
                    : (0, r.jsx)(tq.A, {
                          size: 74,
                          percentComplete: m,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: tP.n5, children: j }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: tP.FS,
                children: [
                    (0, r.jsx)(_.E, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        className: tP.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: tP.oV,
                        children: [
                            o && (0, r.jsx)(tU.A, { className: tP.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                _.E,
                                {
                                    variant: "text-lg/medium",
                                    className: tP.zN,
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
var tB = s(315767);
function tV(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, tj.A9)(t, a, tA.rE.QUEST_HOME_DESKTOP, tg.Ob.QuestHome, u),
        d = (0, tv.z)(),
        m = (0, ei.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: tB.qr,
        children: [
            (0, r.jsx)(tk, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n }),
            (0, r.jsxs)("div", {
                className: tB.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: tB.Wi,
                        children: [
                            (0, r.jsx)(_.E, {
                                variant: "text-sm/normal",
                                className: o()(tB.Wj, tB.h_, { [tB.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(_.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(tB.Wj, tB.XV, { [tB.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tB.Gv,
                        children: [
                            (0, r.jsx)(_.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: e_.intl.string(e_.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(tL, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tb, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var tW = s(688755),
    tG = s(831368),
    tK = s(547032);
function tz(e) {
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
        h = i.useMemo(() => (0, e8.tW)(s, e8.fY.QUEST_BAR_HERO_IMAGE), [s]),
        x = i.useMemo(() => (0, e8.tW)(s, e8.fY.QUEST_BAR_HERO_VIDEO), [s]),
        f = i.useMemo(() => (null != h ? (0, e8.UX)(h.url, { format: "webp", width: 32, height: 32 }) : null), [h]),
        g = (0, e3.S)(f),
        j = i.useMemo(() => (null != g ? { "--quest-scrim-color": g } : void 0), [g]),
        {
            isActive: v,
            shouldRender: C,
            hoverHandlers: _,
            handleMenuOpen: S,
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
        p = (0, ts.Pd)(s),
        T = (0, e5.go)(),
        A = (0, e6.E0)(s.config),
        O = i.useContext(tn.X),
        { visibilityElementRef: b, almostVisibleInViewport: I } = (0, tG.I)(
            O?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: R,
            handleHoverEnd: M,
            isEventWithinParent: L,
        } = (0, tW.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: E }),
        Q = (0, eu.Lk)({
            isShareable: A,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: ea.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: T,
                    sourceQuestContent: E,
                }),
                [n, E, T],
            ),
        });
    return (0, r.jsx)("div", {
        className: tK.uW,
        onMouseEnter: () => {
            _.onMouseEnter(), R();
        },
        onMouseLeave: () => {
            _.onMouseLeave(), M();
        },
        onFocus: (e) => {
            L(e) || (_.onFocus(), R());
        },
        onBlur: (e) => {
            L(e) || (_.onBlur(), M());
        },
        children: (0, r.jsxs)("article", {
            id: (0, e2.sT)(s.id, t),
            ref: (e) => {
                (m.current = e), (b.current = e);
            },
            "aria-label": e_.intl.formatToPlainString(e_.t.EAYZAr, { questName: s.config.messages.questName }),
            className: o()(tK.kL, { [tK.iR]: l, [tK.DM]: v }, a),
            style: j,
            children: [
                (0, r.jsx)(tl.A, {
                    showPlaceholder: !I,
                    width: 600,
                    height: 450,
                    className: tK.Tv,
                    children: (0, r.jsx)(e9.N, {
                        imageAsset:
                            null != h
                                ? {
                                      asset: h,
                                      assetId: "QuestTileV2",
                                      alt: e_.intl.string(e_.t.jnijWz),
                                      className: tK.Tv,
                                  }
                                : void 0,
                        videoAsset:
                            null != x
                                ? {
                                      asset: x,
                                      assetId: "QuestTileV2_heroAnimated",
                                      className: o()(tK.Tv, tK.gJ, { [tK.C7]: v }),
                                  }
                                : void 0,
                        imageSize: { width: 600, height: 450 },
                        showVideo: C,
                    }),
                }),
                (0, r.jsx)("div", { className: o()(tK.sL, { [tK.Mq]: p === ts.UA.EXPIRED }) }),
                (0, r.jsx)("div", { className: o()(tK.f5, tK.Cm) }),
                (0, r.jsx)("div", { className: o()(tK.f5, tK.sr) }),
                (0, r.jsxs)("div", {
                    className: tK.wx,
                    children: [
                        (0, r.jsx)(tf, { quest: s, isHovering: v }),
                        (0, r.jsxs)("div", {
                            className: o()(tK.$s, { [tK.rk]: v }),
                            children: [
                                l &&
                                    A &&
                                    (0, r.jsx)(eT.D, {
                                        tag: "div",
                                        className: tK.E9,
                                        onClick: Q,
                                        "aria-label": e_.intl.string(e_.t.WqhZss),
                                        children: (0, r.jsx)(e7.q, { size: "sm", color: "currentColor" }),
                                    }),
                                (0, r.jsx)(tt.C, {
                                    questContent: n,
                                    quest: s,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: E,
                                    onOpen: S,
                                    onClose: N,
                                    children: (e) =>
                                        (0, r.jsx)(eT.D, {
                                            ...e,
                                            tag: "div",
                                            className: tK.E9,
                                            "aria-label": e_.intl.string(e_.t.DEoVWZ),
                                            children: (0, r.jsx)(e4.j, { size: "sm", color: "currentColor" }),
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(tV, {
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
let t$ = i.memo(function (e) {
    let t = (0, h.bG)([em.A], () => (null != e.questId ? em.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(te.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === ee.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(tz, { ...e, quest: s, impressionRef: t }),
          });
});
function tY(e) {
    let { quest: t } = e,
        { useNewTile: s } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: eP.x3,
        children: (0, r.jsxs)("div", {
            className: eP.B0,
            children: [
                (0, r.jsx)(C.D, {
                    className: eP.R_,
                    variant: "heading-md/semibold",
                    children: e_.intl.string(e_.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(t$, {
                          className: eP.d,
                          quest: t,
                          questContent: ee.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: ee.uF.INTERNAL_PREVIEW_TOOL,
                      })
                    : (0, r.jsx)(e2.Ay, {
                          className: eP.d,
                          quest: t,
                          questContent: ee.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: ee.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var tJ = s(97808),
    tX = s(778712),
    tZ = s(87664),
    t0 = s(427262),
    t1 = s(198525),
    t2 = s(66176);
let t7 = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, h.bG)([tH.default], () => tH.default.getCurrentUser()),
        u = t0.Ay.useName(a),
        c = (0, tZ.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(t1.A, {
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
        className: eP.x3,
        children: (0, r.jsxs)("div", {
            className: eP.B0,
            children: [
                (0, r.jsx)(C.D, {
                    className: t2.R_,
                    variant: "heading-md/semibold",
                    children: e_.intl.string(e_.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: t2.$Q, children: e_.intl.string(e_.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: t2.k0,
                    children: (0, r.jsx)(ef.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => n(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: ef.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(t2.Tn, { [t2.wH]: s }),
                                children: (0, r.jsx)(eT.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: t2.lm,
                                        children: [
                                            (0, r.jsx)(tJ.eu, {
                                                size: tX._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: eR.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: t2.Fj,
                                                children: [
                                                    (0, r.jsx)(_.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(_.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e_.intl.string(e_.t.b9w3bO),
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
function t4(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, h.bG)([em.A], () => em.A.getQuest(t));
    if (null != (0, h.bG)([em.A], () => em.A.getFetchQuestPreviewError(t)) || null == n) return null;
    let l = (e) => null == s || 0 === s.length || s.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eK, { quest: n }), (0, r.jsx)(eq, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tY, { quest: n }), (0, r.jsx)(eq, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(e1, { questId: n.id }), (0, r.jsx)(eq, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eX, { quest: n }), (0, r.jsx)(eq, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t7, { quest: n }), (0, r.jsx)(eq, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ek, { quest: n }), (0, r.jsx)(eq, {})] }),
        ],
    });
}
var t3 = s(497275);
function t8(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: a } = e,
        u = [
            { value: "quest_bar", label: e_.intl.string(e_.t.rjVPdM) },
            { value: "share_embed", label: e_.intl.string(e_.t["D/gSWS"]) },
            { value: "home_card", label: e_.intl.string(e_.t["5wnpF3"]) },
            { value: "channel_call_header", label: e_.intl.string(e_.t.gWinpQ) },
            { value: "members_list", label: e_.intl.string(e_.t.wpYima) },
            { value: "activity_panel", label: e_.intl.string(e_.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(eH.Ip, {
        className: o()(t3.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: t3.qE,
            children: [
                (0, r.jsx)(C.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: e_.intl.string(e_.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: t3.pf, children: l }),
                (0, r.jsxs)(eD.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(eD.V.Item, { id: "all", children: e_.intl.string(e_.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(eD.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: t3.tZ, children: (0, r.jsx)("div", { className: t3.Qs, children: t }) }),
            ],
        }),
    });
}
let t5 = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: s } = (0, u.zy)(),
                n = i.useMemo(() => new URLSearchParams(s).get(ei.L1.QUEST_ID) ?? e, [s, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        s.set(ei.L1.TAB, ei.NC.PREVIEW_TOOL),
                            s.set(ei.L1.QUEST_ID, e),
                            t.push(`${eR.BVt.QUEST_HOME}?${s.toString()}`);
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        a = (0, h.bG)([em.A], () => (null != n ? em.A.getQuest(n) : void 0), [n]),
        o = (0, h.bG)([em.A], () => (null != n ? em.A.getQuestLoadedViaPreview(n) : null), [n]);
    i.useEffect(() => {
        null != n &&
            (0, ed.dQ)(n).then(() => {
                (0, ed.Gt)(n);
            });
    }, [n]),
        i.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, ed.dQ)(n);
            };
            return (
                ec.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    ec.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = i.useState([]);
    return (0, r.jsx)(t8, {
        className: s,
        controls: (0, r.jsx)(eU, {
            questId: n,
            setQuestId: l,
            quest: a,
            refreshQuest: () => {
                null != n && (0, ed.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(t4, { questId: o?.id, selectedSections: c }) : null,
    });
};
var t6 = s(203879),
    t9 = s(403362),
    se = s(167417),
    st = s(783977),
    ss = s(651892),
    sn = s(305866),
    sl = s(915089),
    sr = s(332733);
function si(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(_.E, { className: sr.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let sa = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, sl.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(ef.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(sn.l, { className: sr.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var so = s(612539);
let su = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, ei.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(sa, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, ss.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: so.B }),
                                    (0, r.jsx)(si, { id: a, children: e.heading }),
                                    (0, r.jsx)(se.$, {
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
                    (0, r.jsx)("hr", { className: so.B }),
                    (0, r.jsx)("div", {
                        className: so.W,
                        children: (0, r.jsx)(j.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: e_.intl.string(e_.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(j.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: e_.intl.formatToPlainString(e_.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: st.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sc = s(773812),
    sd = s(715482);
let sm = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, h.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
        o = (0, ei.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(sa, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(si, { id: t, children: e_.intl.string(e_.t.tZXJIS) }),
                    (0, r.jsx)(sc.z, {
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
            (0, r.jsx)(j.$, {
                ...e,
                "aria-label": e_.intl.formatToPlainString(e_.t.lPlIMo, { selected: (0, ss.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, ss.Js)(n),
                icon: sd.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sE = s(308186),
    sh = s(717421);
function sx(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, sE.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, sE.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var sf = s(691540),
    sg = s(857250),
    sj = s(97483);
function sv() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sf.P0)((0, sg.o)(e_.intl.string(e_.t["5ABf1w"]), sj.Ck.FAILURE)),
                Y.default.track(eR.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
var sC = s(535185);
function s_(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function sS(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(s_(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sC.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var sN = s(121480);
let sp = 4 * tE.A.Millis.SECOND;
function sT(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = sS(l, s, n);
    return (0, r.jsx)("div", {
        className: sN.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let sA = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = sv(),
        h = i.useRef(""),
        [x, f] = i.useState(null),
        [g, j] = i.useState(0),
        { useNewTile: v } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: S }, N] = (0, sh.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sp },
        })),
        p = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, tD.vc)(e, s, n);
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
        ? (0, r.jsx)(ej.y, { className: sN.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sN.y7,
                children: [
                    (0, r.jsx)(C.D, {
                        variant: "heading-xl/semibold",
                        children: e_.intl.string(c ? e_.t.PBfFnx : e_.t.NqFP6z),
                    }),
                    (0, r.jsx)(_.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? e_.intl.format(e_.t.LdYS1H, { onClick: d }) : e_.intl.string(e_.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(sT, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            sE.animated.div,
                            {
                                className: o()({ [sN.XB]: l }),
                                style: sx(l, i, S),
                                children: [
                                    l && (0, r.jsx)("div", { className: sN.E4 }, g),
                                    v
                                        ? (0, r.jsx)(t$, {
                                              quest: t,
                                              questContent: ee.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sN.d,
                                              sourceQuestContent: ee.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(e2.Ay, {
                                              quest: t,
                                              questContent: ee.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sN.d,
                                              sourceQuestContent: ee.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sO = s(458518),
    sb = s(65990);
let sI = [],
    sR = ei.L1.SORT,
    sM = ei.L1.FILTER,
    sL = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, sO.o)()),
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
                    (e = c.get(sR)),
                    ((0, Z.uJ)(e) ? null : (Object.values(tA.kL).find((t) => t === e) ?? null)) ?? tA.kL.SUGGESTED
                );
            }, [c]),
            E = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, Z.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tA.WQ)(e))
                            .filter(t9.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(sM)) ?? sI,
                [c],
            ),
            h = i.useCallback(
                (e) => {
                    d({ [sR]: e });
                },
                [d],
            ),
            x = i.useCallback(
                (e) => {
                    d({
                        [sM]:
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
                hasFetched: v,
            } = (0, ei.Qh)(
                ei.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: E, removeExpiredQuests: !0 }), [m, E]),
            ),
            _ = i.useCallback(() => {
                x(sI);
            }, [x]),
            S = i.useRef(null),
            N = i.useRef(null),
            p = (0, u.zy)(),
            T = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== p.hash &&
                    null != S.current &&
                    null != N.current &&
                    (m !== S.current || E !== N.current) &&
                    T.replace({ ...p, hash: void 0 });
            }, [m, E, p, T]),
            i.useEffect(() => {
                S.current = m;
            }, [m]),
            i.useEffect(() => {
                N.current = E;
            }, [E]),
            (0, ei.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: f.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        _(),
                            h(tA.kL.SUGGESTED),
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
                        className: sb.Mj,
                        children: [
                            (0, r.jsx)(C.D, { variant: "heading-lg/medium", children: e_.intl.string(e_.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sb.Nf,
                                children: [
                                    (0, r.jsx)(sm, { onChange: h, optionClassName: sb.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(su, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sA, {
                        ref: o,
                        quests: f,
                        excludedQuests: g,
                        isFetching: j,
                        hasFetched: v,
                        hasFiltersApplied: E.length > 0,
                        onClearFilters: _,
                    }),
                ],
            })
        );
    });
var sQ = s(575593),
    sy = s(440703),
    sU = s(462887),
    sH = s(187322),
    sD = s(765671),
    sF = s(736653),
    sq = s(162232),
    sw = s(734736),
    sP = s(303136),
    sk = s(265234),
    sB = s(181713);
let sV = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sB.A : sB.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sk.k, t),
        children: s
            ? (0, r.jsx)(sP.A, {
                  preload: "auto",
                  className: sk.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sk.L, src: l, alt: n }),
    });
};
var sW = s(57718),
    sG = s(659249);
let sK = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        E = (0, i.useRef)(null),
        x = (0, h.bG)([tH.default], () => tH.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, sD.Ay)(),
        j = (0, sF.Ay)(),
        v = (0, ei.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        S = t.userStatus?.claimedTier ?? 0,
        N = t.config.rewards[S],
        p = N?.type === sy.l.FRACTIONAL_PREMIUM,
        T = N?.type === sy.l.COLLECTIBLE,
        A = N?.type === sy.l.VIRTUAL_CURRENCY,
        O = N?.collectibleProduct?.items?.[0],
        b = O?.type === sQ.R.AVATAR_DECORATION ? O : null,
        I = i.useMemo(
            () =>
                null == N
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? e_.intl.format(e_.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : N.name,
            [N, A, t],
        );
    (0, sD.i4)(d, (e) => {
        let { height: t } = e;
        if (!T || null == t || null == m.current || null == d.current || null == E.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = E.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let R = (0, sU.M)(j),
        M = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        L = i.useMemo(() => (0, e8.tW)(t, e8.fY.REWARD), [t]),
        Q = s ? g + 8 : 0,
        { content_position: y, row_index: H, ...D } = (0, ea.fF)(ee.uF.TROPHY_CASE_CARD);
    function F() {
        n(!0), Y.default.track(eR.HAw.QUEST_HOVER, { quest_id: t.id, ...D });
    }
    function q() {
        n(!1);
    }
    function w(e) {
        c(!0), Y.default.track(eR.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == N || u
        ? null
        : (0, r.jsx)(sH.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: F,
                  onBlur: q,
                  onMouseEnter: F,
                  onMouseLeave: q,
                  className: o()(sG.kL, { [sG.yo]: s }),
                  children: [
                      null != x &&
                          T &&
                          null != b &&
                          (0, r.jsx)("div", {
                              ref: E,
                              className: sG.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sq.A, {
                                  avatarDecorationOverride: b,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      p
                          ? (0, r.jsx)(sw.A, { className: sG.Sl })
                          : A
                            ? (0, r.jsx)(sV, {
                                  className: sG.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : L.isAnimated
                              ? (0, r.jsx)(U.A, {
                                    className: sG.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: L.url,
                                        type: L.mimetype ?? void 0,
                                        onError: () => w(L.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sG.Sl,
                                    src: L.url,
                                    alt: t.config.messages.questName,
                                    onError: () => w(L.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sG.Lw, { [sG.en]: R, [sG.So]: !R }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sG.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sW.Ay, {
                              logotypeClassName: o()(sG.wm, { [sG.A0]: M }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: sG.zH,
                          children: [
                              (0, r.jsx)(C.D, {
                                  className: sG.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: e_.intl.format(e_.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(_.E, {
                                  variant: "text-sm/medium",
                                  color: R ? "text-muted" : "always-white",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: e_.intl.format(e_.t["kXVcV+"], { reward: I, claimedDate: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sz = s(396478);
function s$(e) {
    let { onClick: t } = e,
        n = (0, sF.Ay)();
    return (0, r.jsxs)(sz.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sz.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sz.SG, { note: e_.intl.format(e_.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sY = s(975424);
function sJ(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, ei.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(ej.y, { className: sY.u })
        : 0 === n.length
          ? (0, r.jsx)(s$, { onClick: () => t(ei.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sY.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sK, { quest: e }, e.id)),
            });
}
var sX = s(548411),
    sZ = s(554830),
    s0 = s(689175),
    s1 =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        l);
let s2 = [
    { type: "featured-quests", identifier: "featured", title: e_.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: e_.t.PRg3qh },
    { type: "quests", identifier: "orb", title: e_.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: e_.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: e_.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: e_.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: e_.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function s7(e) {
    return eN.A.space.SPACE_XL.resolve({ density: e });
}
let s4 = (e, t) => (1220 - 2 * s7(e) * (t ? 2 : 0.75)) / 3;
var s3 = s(522403);
let s8 = "data-scroll-target",
    s5 = `[${s8}]`,
    s6 = { anchors: [], pageSize: 1 },
    s9 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function ne(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let nt = i.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = s5,
                maskWidth: l = 24,
                overflowAmount: a = 0,
                maskMarginMultiplier: u = 1,
                onScrollEnd: c,
            } = e,
            d = i.useRef(null),
            m = i.useRef(null),
            E = i.useRef(0),
            x = i.useRef(null),
            [f, g] = i.useState(!1),
            [j, v] = i.useState(!1),
            [C, _] = i.useState(!0),
            [S, N] = i.useState([]),
            [p, T] = i.useState(1),
            O = (0, h.bG)([A.Ay], () => A.Ay.useReducedMotion) ? "auto" : "smooth",
            b = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (g(e.scrollLeft > 0), v(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
            }, []),
            I = i.useCallback(() => {
                let { anchors: e, pageSize: t } = (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return s6;
                    let i = Array.from(r.querySelectorAll(s));
                    if (0 === i.length) return s6;
                    let a = i[0].offsetWidth,
                        o = i.length > 1 ? i[1].offsetLeft - i[0].offsetLeft - a : 0,
                        u = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (a + o))),
                        c = i.length - u + 1;
                    return c <= 1
                        ? s6
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
                T(t), N((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e));
            }, [l, n, u, N]),
            R = i.useCallback(() => {
                if (null == x.current || x.current?.clientWidth === 0) return _(!0);
                _(x.current?.clientWidth >= 1260);
            }, [x]),
            M = i.useCallback(
                (e) => {
                    let t = d.current?.getScrollerNode();
                    if (null == t || S.length < 2) return;
                    let { currentIndex: s, scrollLefts: n } = ne(t, S),
                        l = Math.max(0, Math.min(S.length - 1, s + e * p));
                    (m.current = ea.pk.ARROW), t.scrollTo({ left: n[l], behavior: O });
                },
                [O, S, p],
            ),
            L = i.useCallback((e, t) => {
                let s = d.current?.getScrollerNode();
                if (null == s || null == e || !s.contains(e)) return;
                let n = s.getBoundingClientRect(),
                    l = e.getBoundingClientRect(),
                    r = n.left - l.left,
                    i = l.right - n.right;
                (0 !== r || 0 !== i) &&
                    ((m.current = ea.pk.MANUAL),
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
                let { currentIndex: t } = ne(e, S),
                    s = m.current ?? ea.pk.MANUAL;
                m.current = null;
                let n = E.current;
                E.current = e.scrollLeft;
                let l = e.scrollLeft > n ? ea.VU.RIGHT : ea.VU.LEFT;
                c?.({
                    scrollingType: s,
                    scrollWindowStartIndex: t,
                    scrollWindowEndIndex: t + p - 1,
                    scrollWindowSize: p,
                    scrollingDirection: l,
                });
            }, [c, S, p]),
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
                        o = null == a ? null : a.matches(s9) ? a : a.querySelector(s9);
                    null != o && (o.focus({ preventScroll: !0 }), e.repeat && L(a, "instant"));
                },
                [n, L],
            ),
            H = i.useCallback(() => {
                b(), I(), R();
            }, [b, I, R]);
        (0, sC.g)(x, H, [], { fireOnMount: !0 });
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
            className: o()(s, s3.m7),
            ref: x,
            style: F,
            children: [
                (0, r.jsx)("div", {
                    className: o()(s3.k9, s3.RW, { [s3.Q2]: f }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(eh.K, {
                        icon: sX.Z,
                        variant: "overlay-secondary",
                        onClick: () => M(-1),
                        disabled: !f,
                        "aria-label": e_.intl.string(e_.t.vgfxaA),
                        tabIndex: -1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(s3.k9, s3.K3, { [s3.Q2]: j }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(eh.K, {
                        icon: sZ.K,
                        variant: "overlay-secondary",
                        onClick: () => M(1),
                        disabled: !j,
                        tabIndex: -1,
                        "aria-label": e_.intl.string(e_.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [s3.sF]: f && C, [s3.RC]: j && C, [s3.Ni]: D && !f, [s3.GA]: D && !j }),
                    children: (0, r.jsx)(s0.zC, {
                        ref: d,
                        orientation: "horizontal",
                        onScroll: b,
                        onScrollEnd: y,
                        onFocusCapture: Q,
                        onKeyDown: U,
                        className: o()({ [s3.x2]: D }, s3.XG),
                        children: (0, r.jsxs)(tn.X.Provider, {
                            value: d,
                            children: [
                                t,
                                S.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: s3.fw, style: { insetInlineStart: `${e}px` } },
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
    ns = i.createContext({
        targetQuestId: null,
        targetSectionIdentifier: null,
        highlightCount: null,
        highlightAnimationProgress: null,
    });
var nn = s(76060);
function nl(e) {
    let { children: t, sectionIdentifier: s, questId: n, featuredSection: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: o,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(ns),
        d = a === n && o === s,
        m = null != a && (a !== n || o !== s),
        { useNewTile: E } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        h = l ? "var(--radius-lg)" : "var(--radius-sm)",
        x = i.useMemo(() => ({ ...sx(d, m, c), borderRadius: E ? h : "10px" }), [d, m, c, E, h]);
    return (0, r.jsxs)(sE.animated.div, {
        [s8]: "",
        className: d ? nn.X : void 0,
        style: x,
        children: [d && (0, r.jsx)("div", { className: nn.E }, u), t],
    });
}
var nr = s(474646);
function ni(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : s_(t, 345, 20, 2)), [t]);
    return (
        i.useEffect(() => {
            null !== o && l(Math.ceil(s.length / o) - 1);
        }, [s.length, o, l]),
        (0, r.jsx)("div", {
            className: nr.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != o &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        nl,
                        {
                            featuredSection: !0,
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      t$,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      e2.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
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
var na = s(344236),
    no = s(654424);
function nu(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(na.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: o()(no.m, na.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: na.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(no.m, na.Vr) }, t),
                ),
            }),
        ],
    });
}
var nc = s(418842),
    nd = s(561844),
    nm = s(548636);
function nE(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(ns),
        { useNewTile: o } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = en.Mk.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        c = (0, nc.C)(),
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
                (0, nd.kO)({
                    scrollingType: d ? ea.pk.AUTO : n,
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
        E = u === en.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(nt, {
        maskWidth: s7(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${s4(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: nm.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        nl,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(t$, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nm.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(e2.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === s1.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nm.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: nm.fu }),
            ],
        }),
    });
}
var nh = s(958538);
let nx = tE.A.Millis.WEEK;
function nf() {
    let e = em.A.quests;
    if (0 === em.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tD.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class ng extends h.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(em.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - nx;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([em.A], nf), t;
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
let nj = new ng(ec.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            if (null == em.A.getQuest(e.questId)) return !1;
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    nv = 2 * tE.A.Millis.DAY,
    nC = new Map(s2.map((e) => [e.identifier, e])),
    n_ = {
        [s1.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nS(e, t) {
    let s = nC.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
function nN(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
var np = s(32304);
let nT = {
        [s1.FEATURED]: ee.uF.QUEST_HOME_FEATURED_SECTION,
        [s1.IN_PROGRESS]: ee.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [s1.ENDING_SOON]: ee.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [s1.ORB]: ee.uF.QUEST_HOME_ORB_SECTION,
        [s1.DISCOVERED]: ee.uF.QUEST_HOME_DISCOVERED_SECTION,
        [s1.EXPIRED]: ee.uF.QUEST_HOME_EXPIRED_SECTION,
        [s1.PREVIEW]: ee.uF.QUEST_HOME_PREVIEW_SECTION,
    },
    nA = 4 * tE.A.Millis.SECOND,
    nO = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: a = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
            {
                sections: d,
                isFetchingCurrentQuests: m,
                getSectionIdentifierForTargetedQuest: E,
            } = (() => {
                let e = (0, t0.Gn)(),
                    t = (0, ei.Cv)(),
                    s = (0, h.bG)([em.A], () => em.A.lastFetchedCurrentQuests > 0),
                    { quests: n, isFetchingCurrentQuests: l } = (0, ei.Qh)(ei.NC.ALL, {
                        sortMethod: tA.kL.SUGGESTED,
                        filters: [],
                        removeExpiredQuests: !e,
                    }),
                    r = (0, nh.A)(
                        () =>
                            n.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        n.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        nN,
                    ),
                    a = (0, eu.T2)(),
                    o = (0, h.bG)([nj], () => nj.getDiscoveredAtByQuestId(), []),
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
                                          let t = em.A.getQuestConfig(e);
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
                                                  { userStatus: a, preview: o } = em.A.getQuest(t.id) ?? {},
                                                  u = [],
                                                  c =
                                                      null != a &&
                                                      null != a.enrolledAt &&
                                                      null != a.completedAt &&
                                                      null == a.claimedAt;
                                              return (0, tD.kd)(t) && !c
                                                  ? r
                                                      ? [s1.EXPIRED]
                                                      : null
                                                  : (n.has(t.id) && u.push(s1.DISCOVERED),
                                                      i && !0 === o && u.push(s1.PREVIEW),
                                                      null != a && null != a.enrolledAt && null == a.claimedAt)
                                                    ? [...u, s1.IN_PROGRESS]
                                                    : null != s && (0, e6.I0)(s, t.id) && nS(s1.FEATURED, l)
                                                      ? [...u, s1.FEATURED]
                                                      : new Date(t.expiresAt).valueOf() <= Date.now() + nv
                                                        ? [...u, s1.ENDING_SOON]
                                                        : nS(s1.FEATURED, l)
                                                          ? [...u, s1.FEATURED]
                                                          : (0, tF.ks)(t)
                                                            ? [...u, s1.ORB]
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
                                          s2
                                              .map((e) => {
                                                  let t = n_?.[e.identifier];
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
            { showToast: f } = sv(),
            [g, j] = i.useState(null),
            [v, S] = i.useState(null),
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
        (0, sC.g)(x, R, [R], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: M }, L] = (0, sh.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nA },
            })),
            Q = i.useCallback(
                (e, t) => {
                    if (null == e || null == T || m || n) return !1;
                    t && (0, ed.sB)(e);
                    let s = E(e),
                        l = !0 === t ? s1.DISCOVERED : s;
                    if (null == s) return f(e), !1;
                    let r = document.getElementById((0, e2.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (j(e),
                        S(l),
                        p((e) => e + 1),
                        r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        L({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || (j(null), S(null));
                            },
                        }),
                        !0)
                    );
                },
                [j, p, L, m, n, f, T, E],
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
                        return t === s1.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(ns.Provider, {
            value: y,
            children: (0, r.jsx)("div", {
                className: o()(np.kL, l, { [np.Sy]: !a }),
                ref: x,
                children: m
                    ? (0, r.jsx)(nu, { role: "status", "aria-label": e_.intl.string(e_.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: np.p9,
                                    children: [
                                        (0, r.jsx)(C.D, {
                                            variant: "heading-lg/semibold",
                                            className: np.Gf,
                                            children: e_.intl.string(l),
                                        }),
                                        s === s1.FEATURED && u && c
                                            ? (0, r.jsx)(ni, {
                                                  questIds: n,
                                                  setMaxRowIndex: b,
                                                  containerWidth: T,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(nE, {
                                                  questIds: n,
                                                  rowIndex: t < U ? t : t + O,
                                                  sectionIdentifier: s,
                                                  questContent: nT[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: np.y7,
                            children: [
                                (0, r.jsx)(C.D, {
                                    variant: "heading-xl/semibold",
                                    children: e_.intl.string(e_.t.NqFP6z),
                                }),
                                (0, r.jsx)(_.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: e_.intl.string(e_.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var nb = s(353640),
    nI = s(121894),
    nR = s(851936);
let nM = (0, nb.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, nR.L)({ location: tA.rE.QUEST_HOME_DESKTOP });
        if (s.info === eQ.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, nI.r)(() => e(l));
    },
}));
var nL = s(516226),
    nQ = s(901406),
    ny = s(139384),
    nU = s(770178),
    nH = s(14233);
function nD(e, t) {
    let { row_index: s, ...n } = (0, ea.fF)(ee.uF.QUEST_HOME_HERO);
    (0, nd.Qg)({
        adContentId: e,
        adCreativeType: E.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: ee.uF.QUEST_HOME_HERO,
    });
}
let nF = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, E] = i.useState("display-lg"),
        h = i.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, nU.w)(h, [], { fireOnMount: !0 }),
        f = i.useCallback(() => nD(s, eR.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => nD(s, eR.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(t_.N, {
        theme: eR.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(nH.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: g,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nH.FG,
                    children: [
                        (0, r.jsxs)(N.B, {
                            className: nH.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(N.B, {
                                    className: nH.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(N.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(C.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nH.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(_.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nH.VA,
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
var nq = s(194526),
    nw = s(731355),
    nP = s(621466),
    nk = s(508770),
    nB = s(406810),
    nV = s(628284),
    nW = s(65154),
    nG = s(975807),
    nK = s(58703),
    nz = s(18437),
    n$ = s(398025),
    nY = s(691464);
function nJ(e) {
    let [t, s] = i.useState(!1),
        n = i.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nX(e) {
    let { hero: t, contentPosition: s } = e,
        n = i.useRef(null),
        { isHovering: l, hoverProps: a } = nJ(
            i.useCallback(
                (e) => {
                    (0, nd.Qg)({
                        adContentId: t.id,
                        adCreativeType: E.p.QUEST_HOME_HERO,
                        event: e ? eR.HAw.QUEST_HOVER : eR.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ee.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ea.jO)(ee.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = n.current;
        (0, nP.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eQ.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: u } = (0, sh.z)({ hoverSpring: +!!l, config: sE.config.gentle }),
        c = i.useCallback(() => {
            (0, nG.A)(t.cta.url),
                (0, nd.vK)({
                    adContentId: t.id,
                    adCreativeType: E.p.QUEST_HOME_HERO,
                    questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: ea.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(eT.D, {
        tag: "div",
        className: o()(nY.FW, nY.Bm),
        onClick: c,
        "aria-label": t.cta.buttonLabel,
        [s8]: !0,
        ...a,
        children: [
            (0, r.jsx)("div", {
                className: nY.Ve,
                children: (0, r.jsx)(e9.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(nY.pv, nY.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(nY.pv, nY.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(sE.animated.div, {
                className: nY.hn,
                style: { transform: u.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(j.$, {
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
function nZ(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: m } = (0, tm.A)(a, tE.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, nK.uN)(
                    { days: u, hours: c, minutes: d, seconds: m },
                    { days: e_.t["Ux/De1"], hours: e_.t.Lzd5Ie, minutes: e_.t.odmpbP },
                ),
            [u, c, d, m],
        ),
        f = (0, h.bG)([tH.default], () => tH.default.getCurrentUser()),
        g = i.useMemo(() => (0, tF.mq)(s.config, f), [s.config, f]),
        v = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, ss.xv)(e).type) {
                        case sy.l.IN_GAME:
                            return e_.intl.string(e_.t["O/J2kr"]);
                        case sy.l.COLLECTIBLE:
                            return e_.intl.string(e_.t.Jg17Ut);
                        case sy.l.VIRTUAL_CURRENCY:
                            return e_.intl.string(e_.t.ElYQFS);
                        default:
                            return (0, tF.mq)(e, t);
                    }
                })(s.config, f),
            [s.config, f],
        ),
        { completedRatio: C, completedRatioDisplay: S } = (0, ei.O9)(s),
        p = i.useMemo(() => (0, tF.wo)(s.config, f), [s.config, f]),
        T = (0, nz.tG)(),
        A = (0, nz.WS)(),
        I = (0, e5.go)(),
        { isHovering: R, hoverProps: M } = nJ(
            i.useCallback(
                (e) => {
                    A({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: E.p.QUEST_HOME_HERO,
                        event: e ? eR.HAw.QUEST_HOVER : eR.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ee.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ea.jO)(ee.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, A, l, s.id],
            ),
        ),
        { hoverSpring: L } = (0, sh.z)({ hoverSpring: +!!R, config: sE.config.gentle }),
        Q = i.useCallback(() => {
            n(s.id),
                (0, el.E5)(el.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, O.r)({
                          type: b.F.CLICK_INTERNAL,
                          adCreativeType: E.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: ea.Cy.VIEW_QUESTS,
                          surfaceId: ee.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: I,
                      })
                    : T({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: E.p.QUEST_HOME_HERO,
                          questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: ea.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, T, l, I]);
    return (0, r.jsxs)(eT.D, {
        tag: "div",
        className: o()(nY.FW, nY.$R),
        onClick: Q,
        "aria-label": e_.intl.string(e_.t["th2+0j"]),
        [s8]: !0,
        ...M,
        children: [
            (0, r.jsxs)(N.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nk.E, { type: { text: v } }),
                    (0, r.jsx)(sE.animated.div, {
                        style: { opacity: (0, n$.a)(L.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nk.E, { type: { text: x }, icon: nB.O }),
                    }),
                ],
            }),
            (0, r.jsx)(sE.animated.div, {
                className: nY.Tr,
                style: { transform: L.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tq.A, {
                    percentComplete: C,
                    overlayText: R && null != p ? `${p}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tw.A, {
                        quest: s,
                        questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: R,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(sE.animated.div, {
                className: nY.tw,
                style: {
                    opacity: (0, n$.a)(L.to([0, 1], [1, 0])),
                    transform: L.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(N.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(_.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nY.Ht,
                            children: g,
                        }),
                        (0, r.jsxs)(N.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(N.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(nV.y, { size: "xs", color: eN.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(_.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(N.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, e6.pv)(s.config) === nw.Z.VIDEO
                                            ? (0, r.jsx)(nW.S, { size: "xs", color: eN.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(ti._, { size: "xs", color: eN.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(_.E, {
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
            (0, r.jsx)(sE.animated.div, {
                className: nY.um,
                style: { transform: L.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(j.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), Q();
                    },
                    text: e_.intl.string(e_.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var n0 = s(648731);
function n1(e) {
    let { hero: t, shelfQuests: s, isBannerLoading: n, onQuestCtaClick: l } = e,
        i = (0, nc.C)();
    return n
        ? (0, r.jsx)(n2, { numShelfCards: s.length + 1 })
        : (0, r.jsx)(nt, {
              className: n0.vo,
              overflowAmount: 25,
              maskWidth: s7(i),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(N.B, {
                  className: n0.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  children: [
                      (0, r.jsx)(te.R, {
                          adContentId: t.id,
                          adCreativeType: E.p.QUEST_HOME_HERO,
                          questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: 0,
                          sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                          children: (e) =>
                              (0, r.jsx)("div", {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  children: (0, r.jsx)(nX, { hero: t, contentPosition: 0 }),
                              }),
                      }),
                      s.map((e, s) =>
                          (0, r.jsx)(
                              te.R,
                              {
                                  adContentId: t.id,
                                  adCreativeType: E.p.QUEST_HOME_HERO,
                                  questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: s + 1,
                                  sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  children: (n) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              n.current = e;
                                          },
                                          children: (0, r.jsx)(nZ, {
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
function n2(e) {
    let { className: t, numShelfCards: s } = e,
        n = (0, nc.C)(),
        l = Math.max(s, 4);
    return (0, r.jsx)(nt, {
        className: o()(n0.vo, t),
        overflowAmount: 25,
        maskWidth: s7(n),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(N.B, {
            className: n0.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: l - 1 }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(no.m, n0.W_) }, t),
            ),
        }),
    });
}
var n7 = s(95115);
function n4() {
    return (0, r.jsx)("div", { className: n7.Np });
}
function n3(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, ny.A)(n, tA.rE.QUEST_HOME_DESKTOP);
    let l = i.useMemo(() => (null != s ? (0, e8.WV)(s) : null) ?? t, [s, t]);
    return (0, r.jsx)(eo._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(e9.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: n,
                imageAsset: {
                    alt: "",
                    className: n7.LY,
                    asset: { url: l, mimetype: (0, e8.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: n7.LY,
                    asset: { url: s, mimetype: (0, e8.vm)(s), isAnimated: !0 },
                    assetId: s,
                },
            }),
    });
}
function n8(e) {
    let { heroImage: t, heroVideo: s } = e;
    return null == s
        ? (0, r.jsxs)("div", {
              className: n7.Tv,
              children: [
                  (0, r.jsx)(n4, {}),
                  (0, r.jsx)("div", {
                      className: n7.LO,
                      children: (0, r.jsx)(eo._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: n7.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(n7.LO, n7.jx, n7.hw),
                      children: (0, r.jsx)("img", { className: n7.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(n7.LO, n7.jx, n7.Co),
                      children: (0, r.jsx)("img", { className: n7.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: n7.Tv,
              children: [
                  (0, r.jsx)(n4, {}),
                  (0, r.jsx)("div", { className: n7.LO, children: (0, r.jsx)(n3, { heroImage: t, heroVideo: s }) }),
              ],
          });
}
function n5(e) {
    let { hero: t, onQuestCtaClick: s, isBannerLoading: n } = e,
        l = (0, h.bG)([em.A], () => em.A.quests),
        { shelfQuests: a, isShelfEnabled: u } = (0, ei.t9)(t),
        { dismissQuestHomeHeroContent: c } = (0, nq.I)();
    i.useEffect(() => {
        c();
    }, [c]);
    let d = i.useMemo(() => t.questIds?.find((e) => l.has(e)), [l, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(te.R, {
                adContentId: t.id,
                adCreativeType: E.p.QUEST_HOME_HERO,
                questContent: ee.uF.QUEST_HOME_HERO,
                sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(nF, {
                        ref: (t) => {
                            e.current = n ? null : t;
                        },
                        adContentId: t.id,
                        className: o()({ [n7.lX]: n }),
                        topContent: (0, r.jsxs)(N.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, r.jsx)(eo._M, {
                                        id: "QuestHomeHeroBackground_sponsorImage",
                                        children: (e) =>
                                            (0, r.jsx)("img", {
                                                ref: e,
                                                src: t.sponsorImage,
                                                alt: "",
                                                className: n7.wm,
                                            }),
                                    }),
                                (0, r.jsx)(_.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: n7.yu,
                                    children: e_.intl.string(e_.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, r.jsxs)(g.e, {
                            children: [
                                (0, r.jsx)(j.$, {
                                    onClick: () => {
                                        (0, nQ._Q)(
                                            { adContentId: t.id, adCreativeType: E.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: ee.uF.QUEST_HOME_HERO,
                                                ctaContent: ea.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !u &&
                                    null != d &&
                                    (0, r.jsx)(j.$, {
                                        onClick: () => {
                                            s(d),
                                                (0, el.E5)(el.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                    ? (0, O.r)({
                                                          type: b.F.CLICK_INTERNAL,
                                                          adCreativeType: E.p.QUEST_HOME_HERO,
                                                          adCreativeId: t.id,
                                                          questContentCTA: ea.Cy.VIEW_QUESTS,
                                                          surfaceId: ee.uF.QUEST_HOME_HERO,
                                                          sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                                                      })
                                                    : (0, nd.vK)({
                                                          adContentId: t.id,
                                                          adCreativeType: E.p.QUEST_HOME_HERO,
                                                          questContent: ee.uF.QUEST_HOME_HERO,
                                                          questContentCTA: ea.Cy.VIEW_QUESTS,
                                                          sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                                                      });
                                        },
                                        size: "md",
                                        text: e_.intl.string(e_.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, r.jsx)(n8, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            u && (0, r.jsx)(n1, { hero: t, isBannerLoading: n, shelfQuests: a, onQuestCtaClick: s }),
        ],
    });
}
function n6() {
    return (0, r.jsx)("div", { className: o()(nH.iE, nH.FG, nH.B3), children: (0, r.jsx)(ej.y, {}) });
}
var n9 = s(740879),
    le = s(604880),
    lt = s(318808);
function ls(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, tT.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: n9.MY,
        children: [
            (0, r.jsx)("img", { className: n9.Bg, src: lt.Ay, alt: "" }),
            (0, r.jsx)("div", { className: n9.r$, children: (0, r.jsx)("img", { src: le, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: n9.Nr,
                children: [
                    (0, r.jsx)(C.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: n9.ky,
                        children: e_.intl.string(e_.t.GXmn57),
                    }),
                    (0, r.jsx)(_.E, {
                        variant: "text-md/normal",
                        className: n9.G3,
                        children: e_.intl.string(e_.t.bWuKqh),
                    }),
                    (0, r.jsx)(j.$, {
                        variant: "primary",
                        text: e_.intl.string(e_.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function ln(e) {
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
var ll = s(298537);
let lr = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, nc.C)(),
        { useNewTile: n } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = en.Mk.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        o = l === en.d.LARGE_MASK_MARGIN,
        u = sS(a, s4(s, o), 20, 3);
    return (0, r.jsxs)(N.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: ll.kL,
        ref: a,
        children: [
            (0, r.jsxs)(C.D, {
                variant: "heading-lg/medium",
                children: [e_.intl.string(e_.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(N.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: ll.y7,
                      children: [
                          (0, r.jsx)(ln, { alt: e_.intl.string(e_.t["Xe+fJM"]) }),
                          (0, r.jsxs)(N.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(C.D, {
                                      variant: "heading-lg/medium",
                                      children: e_.intl.string(e_.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(C.D, {
                                      variant: "heading-sm/medium",
                                      children: e_.intl.string(e_.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: ll.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${s4(s, o)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== u &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        t$,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: ll.d,
                                            sourceQuestContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        e2.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: ll.d,
                                            sourceQuestContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var li = s(111956),
    la = s.n(li),
    lo = s(379078),
    lu = s(704554),
    lc = s(823784);
let ld = {
    searchType: lo.n.FUZZY,
    searchStringGenerator: function (e) {
        return [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(t9.Vq);
    },
    sortType: lo.r.JARO_WINKLER,
    throttleMs: 200,
};
var lm = s(758836),
    lE = s(613057),
    lh = s(935824);
let lx = i.createContext({});
function lf(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lx);
    return (0, r.jsxs)(tn.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(V.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(k.A, { className: lh.Jo, innerClassName: lh.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lg(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(B.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: f.r });
}
function lj(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, h.bG)([A.Ay], () => A.Ay.useReducedMotion),
        a = (0, h.bG)([$.A], () => $.A.isFocused()),
        { ref: o, inViewport: u } = (0, t6.p)(),
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
        let e = (0, J.TM)();
        return (0, r.jsx)(eo._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (n) =>
                (0, r.jsx)(U.A, {
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
    return (0, r.jsx)(eo._M, {
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
function lv(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(lh.Tv, { [lh.lJ]: s }),
        children: [
            (0, r.jsx)(n4, {}),
            (0, r.jsx)("div", { className: o()(lh.nz, { [lh.ZZ]: s }) }),
            (0, r.jsx)(lj, {
                onLoadComplete: t,
                className: o()(lh.Fe, { [lh.H4]: s, [lh.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function lC(e) {
    let { className: t, onAssetLoad: s } = e,
        { enabled: n } = (0, K.Z)({ location: tA.rE.QUEST_HOME_DESKTOP }),
        { enabled: l } = er.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        a = n && !l,
        o = i.useCallback(() => {
            a ? window.open(eR.X7G.PAID_TERMS_ORBS) : window.open(X.A.getArticleURL(eR.MVz.QUESTS_LEARN_MORE));
        }, [a]);
    return (0, r.jsx)(nF, {
        className: t,
        adContentId: a ? tA.yr : tA.uz,
        title: a ? e_.intl.format(e_.t.BCBIlp, {}) : e_.intl.format(e_.t.lmMBfy, {}),
        subtitle: a ? e_.intl.format(e_.t.U9FY0J, {}) : e_.intl.string(e_.t.oWCrBq),
        buttons: a
            ? (0, r.jsxs)(g.e, {
                  children: [
                      (0, r.jsx)(j.$, {
                          variant: "overlay-primary",
                          text: e_.intl.string(e_.t["1Wm127"]),
                          onClick: () =>
                              (0, Q.Cz)({
                                  tab: lm.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: I.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(j.$, {
                          variant: "overlay-secondary",
                          text: e_.intl.string(e_.t["7kTAgJ"]),
                          onClick: o,
                      }),
                  ],
              })
            : (0, r.jsx)(j.$, {
                  variant: "overlay-primary",
                  text: e_.intl.string(e_.t.hvVgAZ),
                  onClick: o,
                  icon: v.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lv, { onAssetLoad: s, isVirtualCurrencyEnabled: a }),
    });
}
function l_(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, eo.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(lh.iS, { [lh.R]: i }),
        children: [
            c && (0, r.jsx)(n6, {}),
            !l &&
                (null == n || a
                    ? (0, r.jsx)(lC, { className: o()({ [lh.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(n5, { hero: n, isBannerLoading: u, onQuestCtaClick: s })),
        ],
    });
}
function lS(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: o()(lh.BW, lh.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: o()(lh.BW, lh.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: o()(lh.BW, lh.rZ),
                alt: "",
            }),
        ],
    });
}
let lN = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => (0, W.B)(s.pathname, eR.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        a = i.useMemo(() => new URLSearchParams(s.search).getAll(ei.L1.AD_CREATIVE_IDS), [s.search]),
        f = (m.Fr || m.v1) && a.length > 0,
        g = (0, h.bG)([L.A], () => L.A.getState("quests")),
        {
            selectedTab: v,
            onSelectTab: A,
            tabs: U,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = et.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, ei.p5)(),
                { enabled: r } = en.A8.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                et.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                et.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: ei.NC.ALL, label: o ? e_.intl.string(e_.t.Jt6u7B) : e_.intl.string(e_.t["0SzXmi"]) },
                            t
                                ? {
                                      id: ei.NC.CLAIMED,
                                      label: o ? e_.intl.string(e_.t["3TVY/R"]) : e_.intl.string(e_.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: ei.NC.PREVIEW_TOOL, label: e_.intl.string(e_.t.BDUDau) } : null,
                        ].filter(t9.Vq),
                    [t, l, o],
                ),
                selectedTab: s,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !l }),
        {
            query: D,
            setQuery: F,
            matchingQuestIds: k,
            onSearchClose: B,
        } = (() => {
            let [e, t] = i.useState(""),
                [s, n] = i.useState(null),
                l = (0, h.yK)([em.A], () =>
                    (0, ei.mn)(Array.from(em.A.quests.values()), { sortMethod: tA.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                a = "" !== r,
                o = i.useMemo(() => la()(nd.gr, 1e3), []),
                u = i.useCallback(() => {
                    o.cancel();
                    let e = (0, lc.tv)();
                    null != e &&
                        (0, nd.XH)({
                            searchSessionId: e.uuid,
                            searchSessionDurationMs: Date.now() - e.createdAtTimestamp,
                        }),
                        (0, lc.l6)();
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
                                      .filter(t9.Vq)
                                : null,
                        ),
                        a)
                    ) {
                        let { searchSession: t, isNew: s } = (0, lc.$N)();
                        s && (0, nd.OQ)({ searchSessionId: t.uuid }),
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
            return (0, lu.RT)(r, l, d, ld), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c };
        })();
    i.useLayoutEffect(() => {
        l && v === ei.NC.CLAIMED && et.A.setState({ tab: ei.NC.ALL });
    }, [l, v]);
    let { onScroll: V } = (0, w.G)(),
        $ = es.A.getState().getUtmCurrentContext(),
        J = nM((e) => e.registerAssetLoad),
        X = i.useRef($);
    i.useEffect(() => {
        X.current = $;
    }),
        i.useEffect(() => {
            let { current: e } = X;
            (0, R.x)({
                name: d.ImpressionNames.QUEST_HOME,
                type: d.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: v,
                },
            });
        }, [v]);
    let { enabled: er } = (0, K.Z)({ location: tA.rE.QUEST_HOME_DESKTOP });
    (0, y.HU)({ location: e_.intl.string(e_.t.JALI2K) });
    let ec = i.useRef(null),
        { enabled: ed, variant: eE } = en.A8.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: eh } = en.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        ex = ed || eh,
        ef = (ed && eE === en.zY.NEW_LAYOUT_WITH_SEARCH) || eh,
        eg = i.useRef(null),
        ej = i.useCallback((e) => {
            eg.current?.scrollToQuest(e);
        }, []),
        ev = i.useMemo(() => ((0, Z.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: eC, isLoading: eS } = (0, eu.lg)(a[0] ?? null),
        eN = i.useCallback(() => {
            (0, G.Y)({
                pageType: eR.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eR.JJy.ORBS_BALANCE_MENU,
                ctaObject: eR.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, Q.Cz)({ tab: lm.G2.ORBS, analyticsLocations: [], analyticsSource: I.A.ORBS_BALANCE_MENU });
        }, []);
    i.useEffect(() => {
        (0, T.I)(eR.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            q.trigger();
        }, []),
        i.useEffect(() => {
            if (f || null != g) return;
            let e = new URLSearchParams(s.search),
                l = e.get(ei.L1.TAB);
            if (l === ei.NC.PREVIEW_TOOL) {
                let t = e.get(ei.L1.QUEST_ID);
                M.A.openNativeAppModal("quests", eR.e$_.DEEP_LINK, {
                    type: lE.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== ei.NC.PREVIEW_TOOL) {
                let t = (0, Z.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(ei.L1.SORT),
                    r = e.get(ei.L1.FILTER),
                    i = e.get(ei.L1.AD_CREATIVE_IDS);
                M.A.openNativeAppModal("quests", eR.e$_.DEEP_LINK, {
                    type: lE.XK.QUEST_HOME,
                    params: { questId: (0, Z.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, g, n.action, s.hash, t, f]),
        i.useEffect(() => {
            t && (0, H.Dr)(x.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let ep = i.useCallback(() => {
            (0, tT.navigateToQuestHome)({ fromContent: ee.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                (0, el.E5)(el.kI.STEP_2_CLICKED_INTERNAL, "quest_home_page")
                    ? (0, O.r)({
                          type: b.F.CLICK_INTERNAL,
                          questContentCTA: ea.Cy.VIEW_QUESTS,
                          surfaceId: ee.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER,
                          sourceQuestContent: ee.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER,
                          isTargeted: !1,
                      })
                    : Y.default.track(eR.HAw.QUEST_CONTENT_CLICKED, {
                          cta_name: ea.Cy.VIEW_QUESTS,
                          click_id: (0, c.A)(),
                          is_targeted: !1,
                          ...(0, ea.fF)(ee.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                      });
        }, []),
        eT = i.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), ec.current?.scrollToTop({ animate: !1 }), A(e), B();
            },
            [n, A, B],
        ),
        eA = i.useMemo(() => null != k && ef, [k, ef]),
        eO = i.useMemo(() => ({ onAssetLoadComplete: J }), [J]),
        eb = i.useMemo(() => ({ onScroll: V, scrollerRef: ec }), [V, ec]),
        eI = (0, en.Qj)() && 0 === a.length;
    return f
        ? (0, r.jsx)(ls, { adCreativeIds: a })
        : (0, r.jsx)(nL.M.Provider, {
              value: eO,
              children: (0, r.jsx)(lx.Provider, {
                  value: eb,
                  children: (0, r.jsx)("div", {
                      className: o()(lh.kL, { [lh.KY]: !t }),
                      children: l
                          ? (0, r.jsx)(lf, {
                                withFullBleedBanner: !0,
                                header: (0, r.jsx)(lg, { selectedTab: v, onSelectTab: eT, tabs: U }),
                                banner: (0, r.jsx)(P.A, {
                                    title: e_.intl.string(e_.t.z8YP2A),
                                    titleColor: "always-white",
                                    button: (0, r.jsx)(j.$, {
                                        variant: "overlay-primary",
                                        text: e_.intl.string(e_.t.GURBQl),
                                        onClick: ep,
                                    }),
                                    className: lh.Gj,
                                    children: (0, r.jsx)(lS, { onLoadComplete: J }),
                                }),
                                children: (0, r.jsxs)("div", {
                                    className: lh.kj,
                                    children: [
                                        (0, r.jsx)(C.D, {
                                            variant: "heading-xl/semibold",
                                            children: e_.intl.string(e_.t.z8YP2A),
                                        }),
                                        (0, r.jsx)(_.E, {
                                            color: "text-subtle",
                                            variant: "text-md/normal",
                                            children: e_.intl.string(e_.t.HdKh65),
                                        }),
                                        (0, r.jsx)(S.Q, {
                                            text: e_.intl.string(e_.t["1CdL8d"]),
                                            onClick: ep,
                                            textVariant: "text-md/normal",
                                            variant: "primary",
                                        }),
                                    ],
                                }),
                            })
                          : (0, r.jsxs)(lf, {
                                header: (0, r.jsx)(lg, {
                                    selectedTab: v,
                                    onSelectTab: eT,
                                    tabs: U,
                                    endContent: (0, r.jsxs)(N.B, {
                                        gap: 8,
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "end",
                                        children: [
                                            ef &&
                                                (0, r.jsx)(p.I, {
                                                    query: D,
                                                    onChange: F,
                                                    placeholder: e_.intl.string(e_.t.y10TI2),
                                                    onClear: B,
                                                    size: "sm",
                                                }),
                                            er &&
                                                (0, r.jsx)(z.SS, {
                                                    analyticsPage: eR.liQ.GLOBAL_DISCOVERY_QUESTS,
                                                    cardAlignment: z.cP.END,
                                                    ctaText: e_.intl.string(e_.t["J+vlIR"]),
                                                    ctaOnClick: eN,
                                                }),
                                        ],
                                    }),
                                }),
                                banner:
                                    v === ei.NC.ALL &&
                                    !eI &&
                                    (0, r.jsx)(
                                        eo.y5,
                                        {
                                            source: tA.rE.QUEST_HOME_DESKTOP,
                                            adCreativeId: eC?.id ?? null,
                                            adCreativeType: E.p.QUEST_HOME_HERO,
                                            children: (0, r.jsx)(l_, {
                                                onAssetLoad: J,
                                                onQuestCtaClick: ej,
                                                hasSearchResults: eA,
                                                questHomeHero: eC,
                                                isLoadingQuestHomeHero: eS,
                                            }),
                                        },
                                        eC?.id,
                                    ),
                                children: [
                                    eA && null != k && (0, r.jsx)(lr, { matchingQuestIds: k }),
                                    v === ei.NC.CLAIMED
                                        ? (0, r.jsx)(sJ, { onSelectTab: eT, className: eA ? lh.R : void 0 })
                                        : v === ei.NC.PREVIEW_TOOL
                                          ? (0, r.jsx)(t5, { className: eA ? lh.R : void 0 })
                                          : ex
                                            ? (0, r.jsx)(nO, {
                                                  className: eA ? lh.R : void 0,
                                                  ref: eg,
                                                  deepLinkedQuestId: ev,
                                                  isLoadingQuestHomeHero: !eI && eS,
                                                  withQuestHomeHero: !eI,
                                              })
                                            : (0, r.jsx)(sL, { ref: eg }),
                                ],
                            }),
                  }),
              }),
          });
};
