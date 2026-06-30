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
    h = s(17928),
    E = s(554146),
    x = s(577473),
    f = s(825484),
    g = s(821609),
    j = s(509434),
    v = s(331322),
    S = s(892547),
    C = s(944791),
    _ = s(775602),
    N = s(793574),
    p = s(139286),
    T = s(197111),
    A = s(10088),
    O = s(662388),
    b = s(726249),
    I = s(607470),
    R = s(826673),
    M = s(840251),
    y = s(688151);
let Q = new M.E([], y.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var L = s(711111),
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
    V = s(87549),
    G = s(192444);
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
var J = s(228366),
    X = s(340124),
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
    eh = s(817281),
    eE = s(688810),
    ex = s(487245),
    ef = s(363195),
    eg = s(652215),
    ej = s(398876);
let ev = function () {
    let { analyticsLocations: e } = (0, eE.Ay)(),
        t = (0, h.bG)([ef.A], () => ef.A.theme),
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
                    (0, eh.u_)({ theme: t });
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: ej.N,
        children: (0, r.jsxs)("div", {
            className: ej.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        em.D,
                        {
                            tag: "div",
                            className: ej.Du,
                            onClick: () => u(e.theme),
                            "aria-label": eo.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${ej.WT} ${t === e.theme ? ej.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: ej.i, children: eo.intl.string(e.label) }),
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
var eS = s(818348),
    eC = s(60857);
let e_ = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, z.pT)(),
        E = (0, h.bG)([Z.A], () => (null != t ? Z.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, h.bG)([Z.A], () => null != t && Z.A.isFetchingQuestPreview(t), [t]),
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
                    await (0, X.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, X.UZ)(t);
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
                    await (0, X.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = i.useCallback(
            (e) => {
                (0, W.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: eC.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: eC.Br,
                    children: (0, r.jsxs)("div", {
                        className: eC.bo,
                        children: [
                            (0, r.jsx)(ev, {}),
                            (0, r.jsxs)("div", {
                                className: eC.b8,
                                children: [
                                    (0, r.jsx)(
                                        ee.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: _,
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
                    className: eC.in,
                    children: (0, r.jsxs)(f.e, {
                        className: eC.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: v,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: C,
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
                                        className: eC.PP,
                                        children: (0, r.jsx)("div", {
                                            className: eC.sH,
                                            children: (0, r.jsx)(ei.A, {
                                                value: eS.Sb.QUEST_PREVIEW_TOOL_2(t),
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
            null != E ? (0, r.jsx)(eu, { error: E }) : null,
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
var eb = s(684603),
    eI = s(332544);
let eR = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eI.B0,
            children: [
                (0, r.jsx)(ep.D, {
                    className: eI.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.L2mlUb),
                }),
                (0, r.jsx)(eb.A, { quest: t }),
            ],
        }),
    });
};
var eM = s(242939),
    ey = s(717695),
    eQ = s(763578),
    eL = s(111113);
let eH = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.wp,
            children: [
                (0, r.jsx)(ep.D, {
                    className: eQ.Oo,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eQ.RE,
                    children: (0, r.jsx)("div", {
                        className: eQ.Z,
                        children: (0, r.jsx)("div", {
                            className: eL.C3,
                            children: (0, r.jsx)(ey.A, {
                                children: (0, r.jsx)($.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(eM.Y, { quest: t }),
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
    eD = s(683071),
    eq = s(527549),
    eF = s(442444),
    ew = s(347562);
function eP(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eI.B0,
            children: [
                (0, r.jsx)(ep.D, {
                    className: eI.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.gWinpQ),
                }),
                (0, r.jsx)(eU.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children:
                        "QuestChannelCallHeader (live \u2014 branches on your experiment assignment: control = legacy UI, T1/T2 = bar below)",
                }),
                (0, r.jsx)("div", {
                    className: eI.YT,
                    children: (0, r.jsx)(eq.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
                (0, r.jsx)(eU.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: "T1 / T2 \u2014 horizontal bar (unenrolled)",
                }),
                (0, r.jsx)("div", {
                    className: eI.YT,
                    children: (0, r.jsx)(eF.A, { quest: t, isFocused: !1, onAcceptQuest: () => {}, isEnrolling: !1 }),
                }),
                (0, r.jsx)(eU.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: "T1 \u2014 post-enrollment InlineNotice (auto-dismisses after 5 s in production)",
                }),
                (0, r.jsx)("div", {
                    className: eI.YT,
                    children: (0, r.jsx)(eD.w, {
                        type: "info",
                        children: (0, r.jsxs)("div", {
                            className: ew.iW,
                            children: [
                                (0, r.jsx)(eU.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    className: ew.V9,
                                    children: eo.intl.formatToPlainString(eo.t.EQa7os, {
                                        questName: t.config.messages.questName,
                                    }),
                                }),
                                (0, r.jsx)(g.$, {
                                    size: "sm",
                                    variant: "secondary",
                                    text: eo.intl.string(eo.t["th2+0j"]),
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
var ek = s(711038),
    eB = s(330034);
let eW = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eI.B0,
            children: [
                (0, r.jsx)(ep.D, { variant: "heading-md/semibold", children: eo.intl.string(eo.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: eB.wu,
                    children: (0, r.jsx)("span", { className: eB.cy, children: eo.intl.string(eo.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: eB.oU,
                    children: (0, r.jsx)("div", {
                        className: eB.zx,
                        children: (0, r.jsx)("div", {
                            className: eB.Lj,
                            children: (0, r.jsx)("div", {
                                className: eB.n0,
                                children: (0, r.jsx)(ek.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eV = s(24001),
    eG = s(892955),
    eK = s(173936),
    ez = s(365199),
    e$ = s(743674),
    eY = s(46948),
    eJ = s(590202),
    eX = s(971649),
    eZ = s(814793),
    e0 = s(415441),
    e1 = s(73473),
    e2 = s(270045),
    e7 = s(79545),
    e3 = s(321503),
    e4 = s(720875),
    e8 = s(339350),
    e6 = s(687966),
    e5 = s(782134),
    e9 = s(271536),
    te = s(768622),
    tt = s(793934),
    ts = s(662940),
    tn = s(496431),
    tl = s(927813);
let tr = 2 * tl.A.Millis.DAY;
var ti = s(719021);
function ta(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, e7.Pd)(t),
        l = (0, h.bG)([Z.A], () => n === e7.UA.UNENROLLED && null != Z.A.questEnrollmentBlockedUntil, [n]),
        a = (0, z.fc)(t),
        u = (0, z.I3)(t),
        c = i.useMemo(() => (0, ts.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, ts.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, e7.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case e7.UA.UNENROLLED:
                            case e7.UA.ENROLLED:
                            case e7.UA.INCOMPLETE:
                                return !0;
                            case e7.UA.COMPLETED:
                            case e7.UA.CLAIMED:
                            case e7.UA.EXPIRED:
                            case e7.UA.EXPIRED_CLAIMABLE:
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
        E = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(ti.fC, { [ti.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: ti.qS,
                children: [
                    null != E &&
                        (0, r.jsx)(eU.E, {
                            variant: "text-xs/semibold",
                            className: ti.SJ,
                            color: "always-white",
                            children: E,
                        }),
                    null != E &&
                        null != d &&
                        (0, r.jsx)(eU.E, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            className: ti.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: ti.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: ti.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(e8.Q, { ...s });
                                    switch ((0, ts.pv)(e)) {
                                        case ts.UK.PLAY:
                                            return (0, r.jsx)(e6._, { ...s });
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
                    className: o()(ti.qS, ti.WZ),
                    children: (0, r.jsx)(eU.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: eo.intl.string(eo.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var to = s(409626),
    tu = s(3738),
    tc = s(646917),
    td = s(990078),
    tm = s(43990),
    th = s(743368),
    tE = s(792620),
    tx = s(368715),
    tf = s(617986),
    tg = s(190107),
    tj = s(919500);
function tv(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, e7.Pd)(t),
        { ctaOnHover: u } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        c = (0, h.bG)([Z.A], () => a === e7.UA.UNENROLLED && null != Z.A.questEnrollmentBlockedUntil, [a]),
        d = a === e7.UA.EXPIRED || (a === e7.UA.CLAIMED && (0, tE.GL)(t)),
        m = (0, z.do)({ quest: t, content: s, ctaContent: eJ.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tj.lO, { [tj.Fq]: l || !u }),
        children: (0, r.jsx)("div", {
            className: tj.mv,
            children: (0, r.jsx)(tm.N, {
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
                                    : (0, r.jsx)(td.m, {
                                          text: eo.intl.string(eo.t.LLLLPD),
                                          position: "top",
                                          align: "center",
                                          ariaHidden: !0,
                                          children: (0, r.jsx)(et.K, {
                                              variant: "secondary",
                                              icon: th.W,
                                              "aria-label": eo.intl.string(eo.t.LLLLPD),
                                              onClick: m,
                                          }),
                                      }),
                                !d &&
                                    !c &&
                                    (0, r.jsx)(tx.A, {
                                        quest: t,
                                        surface: e7.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                c &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: eo.intl.string(eo.t.vY9GgG),
                                        onClick: () => (0, tf.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
var tS = s(403581),
    tC = s(576761),
    t_ = s(646440);
function tN(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, z.ZP)(s),
        i = (0, tC.B9)(n);
    if (null == l) return null;
    let a = i
        ? eo.intl.formatToPlainString(eo.t.l2UfLG, { bonusOrbMultiplier: l })
        : eo.intl.formatToPlainString(eo.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(em.D, {
        onClick: () => {
            (0, tf.gC)(l, n), t?.();
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: t_.k,
            children: [
                (0, r.jsx)(tS.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(eU.E, { variant: "text-sm/normal", color: "currentColor", className: t_.Q, children: a }),
            ],
        }),
    });
}
var tp = s(947641),
    tT = s(194261),
    tA = s(106799),
    tO = s(287809),
    tb = s(710969),
    tI = s(801365),
    tR = s(453384),
    tM = s(646764),
    ty = s(269999);
function tQ(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, h.bG)([tO.default], () => tO.default.getCurrentUser()),
        a = (0, tI.mq)(t.config, i),
        o = (0, tI.ks)(t.config),
        u = (0, tI.wo)(t.config, i),
        c = (0, tI.l0)(t.config, i),
        d =
            null != u
                ? u > 700 * c
                    ? eY.i2.TIER_4
                    : u > 200 * c
                      ? eY.i2.TIER_3
                      : u > 100 * c
                        ? eY.i2.TIER_2
                        : eY.i2.TIER_1
                : void 0,
        { completedRatio: m } = (0, z.O9)(t),
        E = t.userStatus?.claimedAt != null,
        x = (0, tb.Ic)(t),
        f = t.userStatus?.enrolledAt == null,
        g = E ? "completed" : x ? "expired" : null,
        j = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tM.A, {
                    quest: t,
                    orbTier: d,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: ty.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === g &&
                    (0, r.jsx)("div", {
                        className: ty.EY,
                        children: (0, r.jsx)(tp.r, { className: ty.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === g &&
                    (0, r.jsx)("div", {
                        className: ty.EY,
                        children: (0, r.jsx)(tT.X, { size: "sm", className: ty.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: ty.CZ,
        children: [
            (0, r.jsx)("div", {
                className: ty.tE,
                children: f
                    ? (0, r.jsx)("div", { className: ty.fm, children: j })
                    : (0, r.jsx)(tR.A, {
                          size: 74,
                          percentComplete: m,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: ty.n5, children: j }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: ty.FS,
                children: [
                    (0, r.jsx)(eU.E, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        className: ty.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: ty.oV,
                        children: [
                            o && (0, r.jsx)(tA.A, { className: ty.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                eU.E,
                                {
                                    variant: "text-lg/medium",
                                    className: ty.zN,
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
var tL = s(315767);
function tH(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, tu.A9)(t, a, tg.rE.QUEST_HOME_DESKTOP, to.Ob.QuestHome, u),
        d = (0, tc.z)(),
        m = (0, z.SD)(t, d);
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
                            (0, r.jsx)(eU.E, {
                                variant: "text-sm/normal",
                                className: o()(tL.Wj, tL.h_, { [tL.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(eU.E, {
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
                                        (0, r.jsx)(tN, { questId: t.id, orbMultiplierEligibility: d }),
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
var tU = s(688755),
    tD = s(831368),
    tq = s(547032);
function tF(e) {
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
        E = i.useMemo(() => (0, eY.tW)(s, eY.fY.QUEST_BAR_HERO_IMAGE), [s]),
        x = i.useMemo(() => (0, eY.tW)(s, eY.fY.QUEST_BAR_HERO_VIDEO), [s]),
        f = i.useMemo(() => (null != E ? (0, eY.UX)(E.url, { format: "webp", width: 32, height: 32 }) : null), [E]),
        g = (0, e$.S)(f),
        j = i.useMemo(() => (null != g ? { "--quest-scrim-color": g } : void 0), [g]),
        {
            isActive: v,
            shouldRender: S,
            hoverHandlers: C,
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
            function h() {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            }
            let E = i.useCallback(() => {
                    h(),
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
                        h(),
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
                            (o.current = !0), E();
                        },
                        onMouseLeave: () => {
                            (o.current = !1), r || x();
                        },
                        onFocus: () => {
                            (u.current = !0), E();
                        },
                        onBlur: () => {
                            (u.current = !1), r || x();
                        },
                    }),
                    [E, x, r],
                );
            return (
                i.useEffect(
                    () => () => {
                        m(), h();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: j, handleMenuOpen: f, handleMenuClose: g }
            );
        })(),
        p = (0, e7.Pd)(s),
        T = (0, eX.go)(),
        A = (0, eZ.E0)(s.config),
        O = i.useContext(e3.X),
        { visibilityElementRef: b, almostVisibleInViewport: I } = (0, tD.I)(
            O?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: R,
            handleHoverEnd: M,
            isEventWithinParent: y,
        } = (0, tU.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: h }),
        Q = (0, Y.Lk)({
            isShareable: A,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: eJ.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: T,
                    sourceQuestContent: h,
                }),
                [n, h, T],
            ),
        });
    return (0, r.jsx)("div", {
        className: tq.uW,
        onMouseEnter: () => {
            C.onMouseEnter(), R();
        },
        onMouseLeave: () => {
            C.onMouseLeave(), M();
        },
        onFocus: (e) => {
            y(e) || (C.onFocus(), R());
        },
        onBlur: (e) => {
            y(e) || (C.onBlur(), M());
        },
        children: (0, r.jsxs)("article", {
            id: (0, eG.sT)(s.id, t),
            ref: (e) => {
                (m.current = e), (b.current = e);
            },
            "aria-label": eo.intl.formatToPlainString(eo.t.EAYZAr, { questName: s.config.messages.questName }),
            className: o()(tq.kL, { [tq.iR]: l, [tq.DM]: v }, a),
            style: j,
            children: [
                (0, r.jsx)(e4.A, {
                    showPlaceholder: !I,
                    width: 600,
                    height: 450,
                    className: tq.Tv,
                    children: (0, r.jsx)(e0.N, {
                        imageAsset:
                            null != E
                                ? {
                                      asset: E,
                                      assetId: "QuestTileV2",
                                      alt: eo.intl.string(eo.t.jnijWz),
                                      className: tq.Tv,
                                  }
                                : void 0,
                        videoAsset:
                            null != x
                                ? {
                                      asset: x,
                                      assetId: "QuestTileV2_heroAnimated",
                                      className: o()(tq.Tv, tq.gJ, { [tq.C7]: v }),
                                  }
                                : void 0,
                        imageSize: { width: 600, height: 450 },
                        showVideo: S,
                    }),
                }),
                (0, r.jsx)("div", { className: o()(tq.sL, { [tq.Mq]: p === e7.UA.EXPIRED }) }),
                (0, r.jsx)("div", { className: o()(tq.f5, tq.Cm) }),
                (0, r.jsx)("div", { className: o()(tq.f5, tq.sr) }),
                (0, r.jsxs)("div", {
                    className: tq.wx,
                    children: [
                        (0, r.jsx)(ta, { quest: s, isHovering: v }),
                        (0, r.jsxs)("div", {
                            className: o()(tq.$s, { [tq.rk]: v }),
                            children: [
                                l &&
                                    A &&
                                    (0, r.jsx)(em.D, {
                                        tag: "div",
                                        className: tq.E9,
                                        onClick: Q,
                                        "aria-label": eo.intl.string(eo.t.WqhZss),
                                        children: (0, r.jsx)(eK.q, { size: "sm", color: "currentColor" }),
                                    }),
                                (0, r.jsx)(e2.C, {
                                    questContent: n,
                                    quest: s,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: h,
                                    onOpen: _,
                                    onClose: N,
                                    children: (e) =>
                                        (0, r.jsx)(em.D, {
                                            ...e,
                                            tag: "div",
                                            className: tq.E9,
                                            "aria-label": eo.intl.string(eo.t.DEoVWZ),
                                            children: (0, r.jsx)(ez.j, { size: "sm", color: "currentColor" }),
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(tH, {
                    quest: s,
                    questContent: n,
                    isInFeaturedSection: l,
                    isHovering: v,
                    sourceQuestContent: h,
                }),
            ],
        }),
    });
}
let tw = i.memo(function (e) {
    let t = (0, h.bG)([Z.A], () => (null != e.questId ? Z.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(e1.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === eV.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(tF, { ...e, quest: s, impressionRef: t }),
          });
});
function tP(e) {
    let { quest: t } = e,
        { useNewTile: s } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: eI.x3,
        children: (0, r.jsxs)("div", {
            className: eI.B0,
            children: [
                (0, r.jsx)(ep.D, {
                    className: eI.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(tw, {
                          className: eI.d,
                          quest: t,
                          questContent: eV.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: eV.uF.INTERNAL_PREVIEW_TOOL,
                      })
                    : (0, r.jsx)(eG.Ay, {
                          className: eI.d,
                          quest: t,
                          questContent: eV.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: eV.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var tk = s(97808),
    tB = s(778712),
    tW = s(87664),
    tV = s(427262),
    tG = s(198525),
    tK = s(66176);
let tz = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, h.bG)([tO.default], () => tO.default.getCurrentUser()),
        u = tV.Ay.useName(a),
        c = (0, tW.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(tG.A, {
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
                (0, r.jsx)(ep.D, {
                    className: tK.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: tK.$Q, children: eo.intl.string(eo.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: tK.k0,
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
                                className: o()(tK.Tn, { [tK.wH]: s }),
                                children: (0, r.jsx)(em.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: tK.lm,
                                        children: [
                                            (0, r.jsx)(tk.eu, {
                                                size: tB._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: eg.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: tK.Fj,
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
function t$(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, h.bG)([Z.A], () => Z.A.getQuest(t));
    if (null != (0, h.bG)([Z.A], () => Z.A.getFetchQuestPreviewError(t)) || null == n) return null;
    let l = (e) => null == s || 0 === s.length || s.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eH, { quest: n }), (0, r.jsx)(eO, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tP, { quest: n }), (0, r.jsx)(eO, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eW, { questId: n.id }), (0, r.jsx)(eO, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eP, { quest: n }), (0, r.jsx)(eO, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tz, { quest: n }), (0, r.jsx)(eO, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eR, { quest: n }), (0, r.jsx)(eO, {})] }),
        ],
    });
}
var tY = s(497275);
function tJ(e) {
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
        className: o()(tY.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: tY.qE,
            children: [
                (0, r.jsx)(ep.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eo.intl.string(eo.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: tY.pf, children: l }),
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
                (0, r.jsx)("div", { className: tY.tZ, children: (0, r.jsx)("div", { className: tY.Qs, children: t }) }),
            ],
        }),
    });
}
let tX = function (e) {
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
        a = (0, h.bG)([Z.A], () => (null != n ? Z.A.getQuest(n) : void 0), [n]),
        o = (0, h.bG)([Z.A], () => (null != n ? Z.A.getQuestLoadedViaPreview(n) : null), [n]);
    i.useEffect(() => {
        null != n &&
            (0, X.dQ)(n).then(() => {
                (0, X.Gt)(n);
            });
    }, [n]),
        i.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, X.dQ)(n);
            };
            return (
                J.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    J.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = i.useState([]);
    return (0, r.jsx)(tJ, {
        className: s,
        controls: (0, r.jsx)(e_, {
            questId: n,
            setQuestId: l,
            quest: a,
            refreshQuest: () => {
                null != n && (0, X.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(t$, { questId: o?.id, selectedSections: c }) : null,
    });
};
var tZ = s(203879),
    t0 = s(403362),
    t1 = s(167417),
    t2 = s(783977),
    t7 = s(651892),
    t3 = s(305866),
    t4 = s(915089),
    t8 = s(332733);
function t6(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(eU.E, { className: t8.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let t5 = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, t4.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(en.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(t3.l, { className: t8.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var t9 = s(612539);
let se = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, z.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(t5, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, t7.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: t9.B }),
                                    (0, r.jsx)(t6, { id: a, children: e.heading }),
                                    (0, r.jsx)(t1.$, {
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
                    (0, r.jsx)("hr", { className: t9.B }),
                    (0, r.jsx)("div", {
                        className: t9.W,
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
                icon: t2.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var st = s(773812),
    ss = s(715482);
let sn = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, h.bG)([_.Ay], () => _.Ay.keyboardModeEnabled),
        o = (0, z.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(t5, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(t6, { id: t, children: eo.intl.string(eo.t.tZXJIS) }),
                    (0, r.jsx)(st.z, {
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
                "aria-label": eo.intl.formatToPlainString(eo.t.lPlIMo, { selected: (0, t7.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, t7.Js)(n),
                icon: ss.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sl = s(18005),
    sr = s(717421);
function si(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, sl.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, sl.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var sa = s(691540),
    so = s(857250),
    su = s(97483),
    sc = s(174459);
function sd() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sa.P0)((0, so.o)(eo.intl.string(eo.t["5ABf1w"]), su.Ck.FAILURE)),
                sc.default.track(eg.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
var sm = s(535185);
function sh(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function sE(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(sh(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sm.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var sx = s(121480);
let sf = 4 * tl.A.Millis.SECOND;
function sg(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = sE(l, s, n);
    return (0, r.jsx)("div", {
        className: sx.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let sj = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: h } = sd(),
        E = i.useRef(""),
        [x, f] = i.useState(null),
        [g, j] = i.useState(0),
        { useNewTile: v } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: S }, C] = (0, sr.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sf },
        })),
        _ = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, tb.vc)(e, s, n);
                return null == t ? (h(e), !1) : (f(t.id), j((e) => e + 1), !0);
            },
            [s, n, l, h, a],
        );
    return (i.useImperativeHandle(t, () => ({ scrollToQuest: _ }), [_]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            E.current = "";
            return;
        }
        l || !a || (m.hash !== E.current && _(m.hash.slice(1)) && (E.current = m.hash));
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
        ? (0, r.jsx)(er.y, { className: sx.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sx.y7,
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
          : (0, r.jsx)(sg, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            sl.animated.div,
                            {
                                className: o()({ [sx.XB]: l }),
                                style: si(l, i, S),
                                children: [
                                    l && (0, r.jsx)("div", { className: sx.E4 }, g),
                                    v
                                        ? (0, r.jsx)(tw, {
                                              quest: t,
                                              questContent: eV.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sx.d,
                                              sourceQuestContent: eV.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eG.Ay, {
                                              quest: t,
                                              questContent: eV.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sx.d,
                                              sourceQuestContent: eV.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sv = s(458518),
    sS = s(65990);
let sC = [],
    s_ = z.L1.SORT,
    sN = z.L1.FILTER,
    sp = i.forwardRef(function (e, t) {
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
                    (e = c.get(s_)),
                    ((0, W.uJ)(e) ? null : (Object.values(tg.kL).find((t) => t === e) ?? null)) ?? tg.kL.SUGGESTED
                );
            }, [c]),
            h = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, W.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tg.WQ)(e))
                            .filter(t0.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(sN)) ?? sC,
                [c],
            ),
            E = i.useCallback(
                (e) => {
                    d({ [s_]: e });
                },
                [d],
            ),
            x = i.useCallback(
                (e) => {
                    d({
                        [sN]:
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
            } = (0, z.Qh)(
                z.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: h, removeExpiredQuests: !0 }), [m, h]),
            ),
            S = i.useCallback(() => {
                x(sC);
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
                    (m !== C.current || h !== _.current) &&
                    p.replace({ ...N, hash: void 0 });
            }, [m, h, N, p]),
            i.useEffect(() => {
                C.current = m;
            }, [m]),
            i.useEffect(() => {
                _.current = h;
            }, [h]),
            (0, z.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: f.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        S(),
                            E(tg.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [S, E],
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
                                    (0, r.jsx)(sn, { onChange: E, optionClassName: sS.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(se, { onChange: x, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sj, {
                        ref: o,
                        quests: f,
                        excludedQuests: g,
                        isFetching: j,
                        hasFetched: v,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: S,
                    }),
                ],
            })
        );
    });
var sT = s(575593),
    sA = s(440703),
    sO = s(462887),
    sb = s(187322),
    sI = s(765671),
    sR = s(736653),
    sM = s(162232),
    sy = s(734736),
    sQ = s(303136),
    sL = s(265234),
    sH = s(181713);
let sU = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sH.A : sH.A + "?format=webp";
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
var sD = s(57718),
    sq = s(659249);
let sF = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        E = (0, i.useRef)(null),
        x = (0, h.bG)([tO.default], () => tO.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, sI.Ay)(),
        j = (0, sR.Ay)(),
        v = (0, z.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        S = t.userStatus?.claimedTier ?? 0,
        C = t.config.rewards[S],
        _ = C?.type === sA.l.FRACTIONAL_PREMIUM,
        N = C?.type === sA.l.COLLECTIBLE,
        p = C?.type === sA.l.VIRTUAL_CURRENCY,
        T = C?.collectibleProduct?.items?.[0],
        A = T?.type === sT.R.AVATAR_DECORATION ? T : null,
        O = i.useMemo(
            () =>
                null == C
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? eo.intl.format(eo.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : C.name,
            [C, p, t],
        );
    (0, sI.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == d.current || null == E.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = E.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let b = (0, sO.M)(j),
        R = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, eY.tW)(t, eY.fY.REWARD), [t]),
        y = s ? g + 8 : 0,
        { content_position: Q, row_index: L, ...H } = (0, eJ.fF)(eV.uF.TROPHY_CASE_CARD);
    function U() {
        n(!0), sc.default.track(eg.HAw.QUEST_HOVER, { quest_id: t.id, ...H });
    }
    function D() {
        n(!1);
    }
    function q(e) {
        c(!0), sc.default.track(eg.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == C || u
        ? null
        : (0, r.jsx)(sb.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: U,
                  onBlur: D,
                  onMouseEnter: U,
                  onMouseLeave: D,
                  className: o()(sq.kL, { [sq.yo]: s }),
                  children: [
                      null != x &&
                          N &&
                          null != A &&
                          (0, r.jsx)("div", {
                              ref: E,
                              className: sq.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sM.A, {
                                  avatarDecorationOverride: A,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      _
                          ? (0, r.jsx)(sy.A, { className: sq.Sl })
                          : p
                            ? (0, r.jsx)(sU, {
                                  className: sq.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(I.A, {
                                    className: sq.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => q(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sq.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => q(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sq.Lw, { [sq.en]: b, [sq.So]: !b }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sq.r$,
                          style: { transform: `translateY(-${y}px)` },
                          children: (0, r.jsx)(sD.Ay, {
                              logotypeClassName: o()(sq.wm, { [sq.A0]: R }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: sq.zH,
                          children: [
                              (0, r.jsx)(ep.D, {
                                  className: sq.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eo.intl.format(eo.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(eU.E, {
                                  variant: "text-sm/medium",
                                  color: b ? "text-muted" : "always-white",
                                  style: { opacity: b ? 1 : 0.75 },
                                  children: eo.intl.format(eo.t["kXVcV+"], { reward: O, claimedDate: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sw = s(396478);
function sP(e) {
    let { onClick: t } = e,
        n = (0, sR.Ay)();
    return (0, r.jsxs)(sw.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sw.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sw.SG, { note: eo.intl.format(eo.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sk = s(975424);
function sB(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, z.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(er.y, { className: sk.u })
        : 0 === n.length
          ? (0, r.jsx)(sP, { onClick: () => t(z.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sk.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sF, { quest: e }, e.id)),
            });
}
var sW = s(548411),
    sV = s(554830),
    sG = s(689175),
    sK =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        l);
let sz = [
    { type: "featured-quests", identifier: "featured", title: eo.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: eo.t.PRg3qh },
    { type: "quests", identifier: "orb", title: eo.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: eo.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: eo.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: eo.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: eo.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function s$(e) {
    return ec.A.space.SPACE_XL.resolve({ density: e });
}
let sY = (e, t) => (1220 - 2 * s$(e) * (t ? 2 : 0.75)) / 3;
var sJ = s(522403);
let sX = "data-scroll-target",
    sZ = `[${sX}]`,
    s0 = { anchors: [], pageSize: 1 },
    s1 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function s2(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let s7 = i.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = sZ,
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
            [S, C] = i.useState(!0),
            [N, p] = i.useState([]),
            [T, A] = i.useState(1),
            O = (0, h.bG)([_.Ay], () => _.Ay.useReducedMotion) ? "auto" : "smooth",
            b = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (g(e.scrollLeft > 0), v(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
            }, []),
            I = i.useCallback(() => {
                let { anchors: e, pageSize: t } = (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return s0;
                    let i = Array.from(r.querySelectorAll(s));
                    if (0 === i.length) return s0;
                    let a = i[0].offsetWidth,
                        o = i.length > 1 ? i[1].offsetLeft - i[0].offsetLeft - a : 0,
                        u = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (a + o))),
                        c = i.length - u + 1;
                    return c <= 1
                        ? s0
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
                    let { currentIndex: s, scrollLefts: n } = s2(t, N),
                        l = Math.max(0, Math.min(N.length - 1, s + e * T));
                    (m.current = eJ.pk.ARROW), t.scrollTo({ left: n[l], behavior: O });
                },
                [O, N, T],
            ),
            y = i.useCallback((e, t) => {
                let s = d.current?.getScrollerNode();
                if (null == s || null == e || !s.contains(e)) return;
                let n = s.getBoundingClientRect(),
                    l = e.getBoundingClientRect(),
                    r = n.left - l.left,
                    i = l.right - n.right;
                (0 !== r || 0 !== i) &&
                    ((m.current = eJ.pk.MANUAL),
                    r > 0
                        ? s.scrollTo({ left: s.scrollLeft - r, behavior: t })
                        : i > 0 && s.scrollTo({ left: s.scrollLeft + i, behavior: t }));
            }, []),
            Q = i.useCallback(
                (e) => {
                    let t = e.target.closest(n);
                    null != t && y(t, O);
                },
                [n, y, O],
            ),
            L = i.useCallback(() => {
                let e = d.current?.getScrollerNode();
                if (null == e) return;
                let { currentIndex: t } = s2(e, N),
                    s = m.current ?? eJ.pk.MANUAL;
                m.current = null;
                let n = E.current;
                E.current = e.scrollLeft;
                let l = e.scrollLeft > n ? eJ.VU.RIGHT : eJ.VU.LEFT;
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
                        o = null == a ? null : a.matches(s1) ? a : a.querySelector(s1);
                    null != o && (o.focus({ preventScroll: !0 }), e.repeat && y(a, "instant"));
                },
                [n, y],
            ),
            U = i.useCallback(() => {
                b(), I(), R();
            }, [b, I, R]);
        (0, sm.g)(x, U, [], { fireOnMount: !0 });
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
            className: o()(s, sJ.m7),
            ref: x,
            style: q,
            children: [
                (0, r.jsx)("div", {
                    className: o()(sJ.k9, sJ.RW, { [sJ.Q2]: f }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(et.K, {
                        icon: sW.Z,
                        variant: "overlay-secondary",
                        onClick: () => M(-1),
                        disabled: !f,
                        "aria-label": eo.intl.string(eo.t.vgfxaA),
                        tabIndex: -1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(sJ.k9, sJ.K3, { [sJ.Q2]: j }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(et.K, {
                        icon: sV.K,
                        variant: "overlay-secondary",
                        onClick: () => M(1),
                        disabled: !j,
                        tabIndex: -1,
                        "aria-label": eo.intl.string(eo.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [sJ.sF]: f && S, [sJ.RC]: j && S, [sJ.Ni]: D && !f, [sJ.GA]: D && !j }),
                    children: (0, r.jsx)(sG.zC, {
                        ref: d,
                        orientation: "horizontal",
                        onScroll: b,
                        onScrollEnd: L,
                        onFocusCapture: Q,
                        onKeyDown: H,
                        className: o()({ [sJ.x2]: D }, sJ.XG),
                        children: (0, r.jsxs)(e3.X.Provider, {
                            value: d,
                            children: [
                                t,
                                N.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: sJ.fw, style: { insetInlineStart: `${e}px` } },
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
    s3 = i.createContext({
        targetQuestId: null,
        targetSectionIdentifier: null,
        highlightCount: null,
        highlightAnimationProgress: null,
    });
var s4 = s(76060);
function s8(e) {
    let { children: t, sectionIdentifier: s, questId: n, featuredSection: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: o,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(s3),
        d = a === n && o === s,
        m = null != a && (a !== n || o !== s),
        { useNewTile: h } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        E = l ? "var(--radius-lg)" : "var(--radius-sm)",
        x = i.useMemo(() => ({ ...si(d, m, c), borderRadius: h ? E : "10px" }), [d, m, c, h, E]);
    return (0, r.jsxs)(sl.animated.div, {
        [sX]: "",
        className: d ? s4.X : void 0,
        style: x,
        children: [d && (0, r.jsx)("div", { className: s4.E }, u), t],
    });
}
var s6 = s(474646);
function s5(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : sh(t, 345, 20, 2)), [t]);
    return (
        i.useEffect(() => {
            null !== o && l(Math.ceil(s.length / o) - 1);
        }, [s.length, o, l]),
        (0, r.jsx)("div", {
            className: s6.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != o &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        s8,
                        {
                            featuredSection: !0,
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      tw,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: eV.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: eV.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      eG.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: eV.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: eV.uF.QUEST_HOME_FEATURED_SECTION,
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
var s9 = s(344236),
    ne = s(654424);
function nt(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(s9.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: o()(ne.m, s9.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: s9.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(ne.m, s9.Vr) }, t),
                ),
            }),
        ],
    });
}
var ns = s(418842),
    nn = s(561844),
    nl = s(548636);
function nr(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(s3),
        { useNewTile: o } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = G.Mk.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        c = (0, ns.C)(),
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
                (0, nn.kO)({
                    scrollingType: d ? eJ.pk.AUTO : n,
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
        h = u === G.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(s7, {
        maskWidth: s$(c),
        overflowAmount: 25,
        maskMarginMultiplier: h ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${sY(c, h)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: nl.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        s8,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(tw, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nl.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(eG.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === sK.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nl.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: nl.fu }),
            ],
        }),
    });
}
var ni = s(958538);
let na = tl.A.Millis.WEEK;
function no() {
    let e = Z.A.quests;
    if (0 === Z.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tb.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class nu extends h.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(Z.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - na;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([Z.A], no), t;
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
let nc = new nu(J.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            if (null == Z.A.getQuest(e.questId)) return !1;
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    nd = 2 * tl.A.Millis.DAY,
    nm = new Map(sz.map((e) => [e.identifier, e])),
    nh = {
        [sK.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nE(e, t) {
    let s = nm.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
function nx(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
var nf = s(32304);
let ng = {
        [sK.FEATURED]: eV.uF.QUEST_HOME_FEATURED_SECTION,
        [sK.IN_PROGRESS]: eV.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [sK.ENDING_SOON]: eV.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [sK.ORB]: eV.uF.QUEST_HOME_ORB_SECTION,
        [sK.DISCOVERED]: eV.uF.QUEST_HOME_DISCOVERED_SECTION,
        [sK.EXPIRED]: eV.uF.QUEST_HOME_EXPIRED_SECTION,
        [sK.PREVIEW]: eV.uF.QUEST_HOME_PREVIEW_SECTION,
    },
    nj = 4 * tl.A.Millis.SECOND,
    nv = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: a = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
            {
                sections: d,
                isFetchingCurrentQuests: m,
                getSectionIdentifierForTargetedQuest: E,
            } = (() => {
                let e = (0, tV.Gn)(),
                    t = (0, z.Cv)(),
                    s = (0, h.bG)([Z.A], () => Z.A.lastFetchedCurrentQuests > 0),
                    { quests: n, isFetchingCurrentQuests: l } = (0, z.Qh)(z.NC.ALL, {
                        sortMethod: tg.kL.SUGGESTED,
                        filters: [],
                        removeExpiredQuests: !e,
                    }),
                    r = (0, ni.A)(
                        () =>
                            n.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        n.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        nx,
                    ),
                    a = (0, Y.T2)(),
                    o = (0, h.bG)([nc], () => nc.getDiscoveredAtByQuestId(), []),
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
                                              return (0, tb.kd)(t) && !c
                                                  ? r
                                                      ? [sK.EXPIRED]
                                                      : null
                                                  : (n.has(t.id) && u.push(sK.DISCOVERED),
                                                      i && !0 === o && u.push(sK.PREVIEW),
                                                      null != a && null != a.enrolledAt && null == a.claimedAt)
                                                    ? [...u, sK.IN_PROGRESS]
                                                    : null != s && (0, eZ.I0)(s, t.id) && nE(sK.FEATURED, l)
                                                      ? [...u, sK.FEATURED]
                                                      : new Date(t.expiresAt).valueOf() <= Date.now() + nd
                                                        ? [...u, sK.ENDING_SOON]
                                                        : nE(sK.FEATURED, l)
                                                          ? [...u, sK.FEATURED]
                                                          : (0, tI.ks)(t)
                                                            ? [...u, sK.ORB]
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
                                          sz
                                              .map((e) => {
                                                  let t = nh?.[e.identifier];
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
            { showToast: f } = sd(),
            [g, j] = i.useState(null),
            [v, S] = i.useState(null),
            [C, _] = i.useState(0),
            [N, p] = i.useState(null),
            [T, A] = i.useState(0),
            O = i.useRef(null),
            b = i.useCallback(
                (e) => {
                    p(e.contentRect.width);
                },
                [p],
            );
        (0, sm.g)(x, b, [b], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: I }, R] = (0, sr.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nj },
            })),
            M = i.useCallback(
                (e, t) => {
                    if (null == e || null == N || m || n) return !1;
                    t && (0, X.sB)(e);
                    let s = E(e),
                        l = !0 === t ? sK.DISCOVERED : s;
                    if (null == s) return f(e), !1;
                    let r = document.getElementById((0, eG.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (j(e),
                        S(l),
                        _((e) => e + 1),
                        r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        R({
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
                [j, _, R, m, n, f, N, E],
            );
        i.useImperativeHandle(t, () => ({ scrollToQuest: M }), [M]),
            i.useLayoutEffect(() => {
                if (null == s) {
                    O.current = null;
                    return;
                }
                O.current !== s && M(s, !0) && (O.current = s);
            }, [s, M]);
        let y = i.useMemo(
                () => ({
                    targetQuestId: g,
                    targetSectionIdentifier: v,
                    highlightCount: C,
                    highlightAnimationProgress: I,
                }),
                [g, v, C, I],
            ),
            Q = i.useMemo(
                () =>
                    d.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sK.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(s3.Provider, {
            value: y,
            children: (0, r.jsx)("div", {
                className: o()(nf.kL, l, { [nf.Sy]: !a }),
                ref: x,
                children: m
                    ? (0, r.jsx)(nt, { role: "status", "aria-label": eo.intl.string(eo.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: nf.p9,
                                    children: [
                                        (0, r.jsx)(ep.D, {
                                            variant: "heading-lg/semibold",
                                            className: nf.Gf,
                                            children: eo.intl.string(l),
                                        }),
                                        s === sK.FEATURED && u && c
                                            ? (0, r.jsx)(s5, {
                                                  questIds: n,
                                                  setMaxRowIndex: A,
                                                  containerWidth: N,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(nr, {
                                                  questIds: n,
                                                  rowIndex: t < Q ? t : t + T,
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
    nC = s(121894),
    n_ = s(851936);
let nN = (0, nS.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, n_.L)({ location: tg.rE.QUEST_HOME_DESKTOP });
        if (s.info === eS.tE || t().elapsed >= 6e4) return;
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
    nb = s(901406),
    nI = s(139384),
    nR = s(770178),
    nM = s(14233);
function ny(e, t) {
    let { row_index: s, ...n } = (0, eJ.fF)(eV.uF.QUEST_HOME_HERO);
    (0, nn.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: eV.uF.QUEST_HOME_HERO,
    });
}
let nQ = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, h] = i.useState("display-lg"),
        E = i.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, nR.w)(E, [], { fireOnMount: !0 }),
        f = i.useCallback(() => ny(s, eg.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => ny(s, eg.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(tm.N, {
        theme: eg.NJ8.MIDNIGHT,
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
                        (0, r.jsxs)(v.B, {
                            className: nM.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(v.B, {
                                    className: nM.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(v.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(ep.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nM.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(eU.E, {
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
var nL = s(194526),
    nH = s(731355),
    nU = s(621466),
    nD = s(508770),
    nq = s(406810),
    nF = s(628284),
    nw = s(65154),
    nP = s(975807),
    nk = s(58703),
    nB = s(18437),
    nW = s(398025),
    nV = s(691464);
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
                    (0, nn.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eg.HAw.QUEST_HOVER : eg.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: eV.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, eJ.jO)(eV.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: eV.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = n.current;
        (0, nU.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eS.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: u } = (0, sr.z)({ hoverSpring: +!!l, config: sl.config.gentle }),
        c = i.useCallback(() => {
            (0, nP.A)(t.cta.url),
                (0, nn.vK)({
                    adContentId: t.id,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    questContent: eV.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: eJ.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: eV.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(em.D, {
        tag: "div",
        className: o()(nV.FW, nV.Bm),
        onClick: c,
        "aria-label": t.cta.buttonLabel,
        [sX]: !0,
        ...a,
        children: [
            (0, r.jsx)("div", {
                className: nV.Ve,
                children: (0, r.jsx)(e0.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(nV.pv, nV.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(nV.pv, nV.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(sl.animated.div, {
                className: nV.hn,
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
        { days: u, hours: c, minutes: d, seconds: E } = (0, tn.A)(a, tl.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, nk.uN)(
                    { days: u, hours: c, minutes: d, seconds: E },
                    { days: eo.t["Ux/De1"], hours: eo.t.Lzd5Ie, minutes: eo.t.odmpbP },
                ),
            [u, c, d, E],
        ),
        f = (0, h.bG)([tO.default], () => tO.default.getCurrentUser()),
        j = i.useMemo(() => (0, tI.mq)(s.config, f), [s.config, f]),
        S = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, t7.xv)(e).type) {
                        case sA.l.IN_GAME:
                            return eo.intl.string(eo.t["O/J2kr"]);
                        case sA.l.COLLECTIBLE:
                            return eo.intl.string(eo.t.Jg17Ut);
                        case sA.l.VIRTUAL_CURRENCY:
                            return eo.intl.string(eo.t.ElYQFS);
                        default:
                            return (0, tI.mq)(e, t);
                    }
                })(s.config, f),
            [s.config, f],
        ),
        { completedRatio: C, completedRatioDisplay: _ } = (0, z.O9)(s),
        N = i.useMemo(() => (0, tI.wo)(s.config, f), [s.config, f]),
        p = (0, nB.tG)(),
        T = (0, nB.WS)(),
        A = (0, eX.go)(),
        { isHovering: O, hoverProps: b } = nG(
            i.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eg.HAw.QUEST_HOVER : eg.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: eV.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, eJ.jO)(eV.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: eV.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: I } = (0, sr.z)({ hoverSpring: +!!O, config: sl.config.gentle }),
        R = i.useCallback(() => {
            n(s.id),
                (0, nO.E5)(nO.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, nT.r)({
                          type: nA.F.CLICK_INTERNAL,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: eJ.Cy.VIEW_QUESTS,
                          surfaceId: eV.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: eV.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: A,
                      })
                    : p({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: eV.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: eJ.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: eV.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, p, l, A]);
    return (0, r.jsxs)(em.D, {
        tag: "div",
        className: o()(nV.FW, nV.$R),
        onClick: R,
        "aria-label": eo.intl.string(eo.t["th2+0j"]),
        [sX]: !0,
        ...b,
        children: [
            (0, r.jsxs)(v.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nD.E, { type: { text: S } }),
                    (0, r.jsx)(sl.animated.div, {
                        style: { opacity: (0, nW.a)(I.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nD.E, { type: { text: x }, icon: nq.O }),
                    }),
                ],
            }),
            (0, r.jsx)(sl.animated.div, {
                className: nV.Tr,
                style: { transform: I.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tR.A, {
                    percentComplete: C,
                    overlayText: O && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tM.A, {
                        quest: s,
                        questContent: eV.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: eV.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(sl.animated.div, {
                className: nV.tw,
                style: {
                    opacity: (0, nW.a)(I.to([0, 1], [1, 0])),
                    transform: I.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(v.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(eU.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nV.Ht,
                            children: j,
                        }),
                        (0, r.jsxs)(v.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(v.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(nF.y, { size: "xs", color: ec.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(eU.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(v.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, eZ.pv)(s.config) === nH.Z.VIDEO
                                            ? (0, r.jsx)(nw.S, { size: "xs", color: ec.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(e6._, { size: "xs", color: ec.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(eU.E, {
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
            (0, r.jsx)(sl.animated.div, {
                className: nV.um,
                style: { transform: I.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
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
var n$ = s(648731);
function nY(e) {
    let { hero: t, shelfQuests: s, isBannerLoading: n, onQuestCtaClick: l } = e,
        i = (0, ns.C)();
    return n
        ? (0, r.jsx)(nJ, { numShelfCards: s.length + 1 })
        : (0, r.jsx)(s7, {
              className: n$.vo,
              overflowAmount: 25,
              maskWidth: s$(i),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(v.B, {
                  className: n$.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  children: [
                      (0, r.jsx)(e1.R, {
                          adContentId: t.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: eV.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: 0,
                          sourceQuestContent: eV.uF.QUEST_HOME_HERO_SHELF,
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
                              e1.R,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  questContent: eV.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: s + 1,
                                  sourceQuestContent: eV.uF.QUEST_HOME_HERO_SHELF,
                                  children: (n) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              n.current = e;
                                          },
                                          children: (0, r.jsx)(nz, {
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
function nJ(e) {
    let { className: t, numShelfCards: s } = e,
        n = (0, ns.C)(),
        l = Math.max(s, 4);
    return (0, r.jsx)(s7, {
        className: o()(n$.vo, t),
        overflowAmount: 25,
        maskWidth: s$(n),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(v.B, {
            className: n$.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: l - 1 }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(ne.m, n$.W_) }, t),
            ),
        }),
    });
}
var nX = s(95115);
function nZ() {
    return (0, r.jsx)("div", { className: nX.Np });
}
function n0(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, nI.A)(n, tg.rE.QUEST_HOME_DESKTOP);
    let l = i.useMemo(() => (null != s ? (0, eY.WV)(s) : null) ?? t, [s, t]);
    return (0, r.jsx)($._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(e0.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: n,
                imageAsset: {
                    alt: "",
                    className: nX.LY,
                    asset: { url: l, mimetype: (0, eY.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: nX.LY,
                    asset: { url: s, mimetype: (0, eY.vm)(s), isAnimated: !0 },
                    assetId: s,
                },
            }),
    });
}
function n1(e) {
    let { heroImage: t, heroVideo: s } = e;
    return null == s
        ? (0, r.jsxs)("div", {
              className: nX.Tv,
              children: [
                  (0, r.jsx)(nZ, {}),
                  (0, r.jsx)("div", {
                      className: nX.LO,
                      children: (0, r.jsx)($._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: nX.LY, src: t, alt: "" }),
                      }),
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
                  (0, r.jsx)("div", { className: nX.LO, children: (0, r.jsx)(n0, { heroImage: t, heroVideo: s }) }),
              ],
          });
}
function n2(e) {
    let { hero: t, onQuestCtaClick: s, isBannerLoading: n } = e,
        l = (0, h.bG)([Z.A], () => Z.A.quests),
        { shelfQuests: a, isShelfEnabled: u } = (0, z.t9)(t),
        { dismissQuestHomeHeroContent: c } = (0, nL.I)();
    i.useEffect(() => {
        c();
    }, [c]);
    let d = i.useMemo(() => t.questIds?.find((e) => l.has(e)), [l, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e1.R, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: eV.uF.QUEST_HOME_HERO,
                sourceQuestContent: eV.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(nQ, {
                        ref: (t) => {
                            e.current = n ? null : t;
                        },
                        adContentId: t.id,
                        className: o()({ [nX.lX]: n }),
                        topContent: (0, r.jsxs)(v.B, {
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
                                                className: nX.wm,
                                            }),
                                    }),
                                (0, r.jsx)(eU.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nX.yu,
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
                                        (0, nb._Q)(
                                            { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: eV.uF.QUEST_HOME_HERO,
                                                ctaContent: eJ.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: eV.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !u &&
                                    null != d &&
                                    (0, r.jsx)(g.$, {
                                        onClick: () => {
                                            s(d),
                                                (0, nO.E5)(nO.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                    ? (0, nT.r)({
                                                          type: nA.F.CLICK_INTERNAL,
                                                          adCreativeType: m.p.QUEST_HOME_HERO,
                                                          adCreativeId: t.id,
                                                          questContentCTA: eJ.Cy.VIEW_QUESTS,
                                                          surfaceId: eV.uF.QUEST_HOME_HERO,
                                                          sourceQuestContent: eV.uF.QUEST_HOME_HERO,
                                                      })
                                                    : (0, nn.vK)({
                                                          adContentId: t.id,
                                                          adCreativeType: m.p.QUEST_HOME_HERO,
                                                          questContent: eV.uF.QUEST_HOME_HERO,
                                                          questContentCTA: eJ.Cy.VIEW_QUESTS,
                                                          sourceQuestContent: eV.uF.QUEST_HOME_HERO,
                                                      });
                                        },
                                        size: "md",
                                        text: eo.intl.string(eo.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, r.jsx)(n1, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            u && (0, r.jsx)(nY, { hero: t, isBannerLoading: n, shelfQuests: a, onQuestCtaClick: s }),
        ],
    });
}
function n7() {
    return (0, r.jsx)("div", { className: o()(nM.iE, nM.FG, nM.B3), children: (0, r.jsx)(er.y, {}) });
}
var n3 = s(740879),
    n4 = s(604880),
    n8 = s(318808);
function n6(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, tf.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: n3.MY,
        children: [
            (0, r.jsx)("img", { className: n3.Bg, src: n8.Ay, alt: "" }),
            (0, r.jsx)("div", { className: n3.r$, children: (0, r.jsx)("img", { src: n4, alt: "" }) }),
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
var n9 = s(298537);
let le = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, ns.C)(),
        { useNewTile: n } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = G.Mk.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        o = l === G.d.LARGE_MASK_MARGIN,
        u = sE(a, sY(s, o), 20, 3);
    return (0, r.jsxs)(v.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: n9.kL,
        ref: a,
        children: [
            (0, r.jsxs)(ep.D, {
                variant: "heading-lg/medium",
                children: [eo.intl.string(eo.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(v.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: n9.y7,
                      children: [
                          (0, r.jsx)(n5, { alt: eo.intl.string(eo.t["Xe+fJM"]) }),
                          (0, r.jsxs)(v.B, {
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
                      className: n9.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${sY(s, o)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== u &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        tw,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: eV.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n9.d,
                                            sourceQuestContent: eV.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        eG.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: eV.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n9.d,
                                            sourceQuestContent: eV.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var lt = s(111956),
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
        ].filter(t0.Vq);
    },
    sortType: ln.r.JARO_WINKLER,
    throttleMs: 200,
};
var la = s(631001),
    lo = s(758836),
    lu = s(613057),
    lc = s(935824);
let ld = i.createContext({});
function lm(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(ld);
    return (0, r.jsxs)(e3.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(H.A, { className: lc.Jo, innerClassName: lc.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lh(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(U.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function lE(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, h.bG)([_.Ay], () => _.Ay.useReducedMotion),
        a = (0, h.bG)([P.A], () => P.A.isFocused()),
        { ref: o, inViewport: u } = (0, tZ.p)(),
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
                (0, r.jsx)(I.A, {
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
function lx(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(lc.Tv, { [lc.lJ]: s }),
        children: [
            (0, r.jsx)(nZ, {}),
            (0, r.jsx)("div", { className: o()(lc.nz, { [lc.ZZ]: s }) }),
            (0, r.jsx)(lE, {
                onLoadComplete: t,
                className: o()(lc.Fe, { [lc.H4]: s, [lc.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function lf(e) {
    let { className: t, onAssetLoad: s } = e,
        { enabled: n } = (0, F.Z)({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { enabled: l } = K.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        a = n && !l,
        o = i.useCallback(() => {
            a ? window.open(eg.X7G.PAID_TERMS_ORBS) : window.open(B.A.getArticleURL(eg.MVz.QUESTS_LEARN_MORE));
        }, [a]);
    return (0, r.jsx)(nQ, {
        className: t,
        adContentId: a ? tg.yr : tg.uz,
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
                                  tab: lo.G2.ORBS,
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
                  icon: j.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lx, { onAssetLoad: s, isVirtualCurrencyEnabled: a }),
    });
}
function lg(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, $.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(lc.iS, { [lc.R]: i }),
        children: [
            c && (0, r.jsx)(n7, {}),
            !l &&
                (null == n || a
                    ? (0, r.jsx)(lf, { className: o()({ [lc.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(n2, { hero: n, isBannerLoading: u, onQuestCtaClick: s })),
        ],
    });
}
let lj = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(s.search).getAll(z.L1.AD_CREATIVE_IDS), [s.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        x = (0, h.bG)([A.A], () => A.A.getState("quests")),
        {
            selectedTab: f,
            onSelectTab: g,
            tabs: j,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = la.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, z.p5)(),
                { enabled: r } = G.A8.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                la.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                la.A.getState().setTab(e);
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
                        ].filter(t0.Vq),
                    [t, l, o],
                ),
                selectedTab: s,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !0 }),
        {
            query: _,
            setQuery: I,
            matchingQuestIds: M,
            onSearchClose: y,
        } = (() => {
            let [e, t] = i.useState(""),
                [s, n] = i.useState(null),
                l = (0, h.yK)([Z.A], () =>
                    (0, z.mn)(Array.from(Z.A.quests.values()), { sortMethod: tg.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                a = "" !== r,
                o = i.useMemo(() => ls()(nn.gr, 1e3), []),
                u = i.useCallback(() => {
                    o.cancel();
                    let e = (0, lr.tv)();
                    null != e &&
                        (0, nn.XH)({
                            searchSessionId: e.uuid,
                            searchSessionDurationMs: Date.now() - e.createdAtTimestamp,
                        }),
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
                                      .filter(t0.Vq)
                                : null,
                        ),
                        a)
                    ) {
                        let { searchSession: t, isNew: s } = (0, lr.$N)();
                        s && (0, nn.OQ)({ searchSessionId: t.uuid }),
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
        })(),
        { onScroll: H } = (0, L.G)(),
        U = V.A.getState().getUtmCurrentContext(),
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
        }, [f]);
    let { enabled: k } = (0, F.Z)({ location: tg.rE.QUEST_HOME_DESKTOP });
    (0, b.HU)({ location: eo.intl.string(eo.t.JALI2K) });
    let B = i.useRef(null),
        { enabled: K, variant: J } = G.A8.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: X } = G.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        ee = K || X,
        et = (K && J === G.zY.NEW_LAYOUT_WITH_SEARCH) || X,
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
                (0, O.Cz)({ tab: lo.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU });
        }, []);
    i.useEffect(() => {
        (0, C.I)(eg.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            Q.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != x) return;
            let e = new URLSearchParams(s.search),
                l = e.get(z.L1.TAB);
            if (l === z.NC.PREVIEW_TOOL) {
                let t = e.get(z.L1.QUEST_ID);
                T.A.openNativeAppModal("quests", eg.e$_.DEEP_LINK, {
                    type: lu.XK.QUEST_PREVIEW_TOOL,
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
                    type: lu.XK.QUEST_HOME,
                    params: { questId: (0, W.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, x, n.action, s.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(E.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eu = i.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), B.current?.scrollToTop({ animate: !1 }), g(e), y();
            },
            [n, g, y],
        ),
        ec = i.useMemo(() => null != M && et, [M, et]),
        ed = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        em = i.useMemo(() => ({ onScroll: H, scrollerRef: B }), [H, B]),
        eh = (0, G.Qj)() && 0 === l.length;
    return a
        ? (0, r.jsx)(n6, { adCreativeIds: l })
        : (0, r.jsx)(np.M.Provider, {
              value: ed,
              children: (0, r.jsx)(ld.Provider, {
                  value: em,
                  children: (0, r.jsx)("div", {
                      className: o()(lc.kL, { [lc.KY]: !t }),
                      children: (0, r.jsxs)(lm, {
                          header: (0, r.jsx)(lh, {
                              selectedTab: f,
                              onSelectTab: eu,
                              tabs: j,
                              endContent: (0, r.jsxs)(v.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      et &&
                                          (0, r.jsx)(S.I, {
                                              query: _,
                                              onChange: I,
                                              placeholder: eo.intl.string(eo.t.y10TI2),
                                              onClear: y,
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
                              !eh &&
                              (0, r.jsx)(
                                  $.y5,
                                  {
                                      source: tg.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: er?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: (0, r.jsx)(lg, {
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
                              ec && null != M && (0, r.jsx)(le, { matchingQuestIds: M }),
                              f === z.NC.CLAIMED
                                  ? (0, r.jsx)(sB, { onSelectTab: eu, className: ec ? lc.R : void 0 })
                                  : f === z.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(tX, { className: ec ? lc.R : void 0 })
                                    : ee
                                      ? (0, r.jsx)(nv, {
                                            className: ec ? lc.R : void 0,
                                            ref: es,
                                            deepLinkedQuestId: el,
                                            isLoadingQuestHomeHero: !eh && ei,
                                            withQuestHomeHero: !eh,
                                        })
                                      : (0, r.jsx)(sp, { ref: es }),
                          ],
                      }),
                  }),
              }),
          });
};
