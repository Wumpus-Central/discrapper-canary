let n;
s.r(t), s.d(t, { default: () => lx }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    a = s(64700),
    i = s(503698),
    o = s.n(i),
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
    S = s(534514),
    _ = s(834730),
    C = s(123292),
    v = s(331322),
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
    en = s(104886),
    el = s(347135),
    er = s(590202),
    ea = s(371912);
s(321073);
var ei = s(228366),
    eo = s(340124),
    eu = s(859703);
s(667532);
var ec = s(783878),
    ed = s(408278),
    em = s(663417),
    eE = s(922016),
    eh = s(624479),
    ex = s(289873),
    ef = s(416052),
    eg = s(417098),
    ej = s(375708);
function eS(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(eg.$T, {
        color: eg.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : ej.intl.string(ej.t.ZErSg5) }),
    });
}
var e_ = s(661531),
    eC = s(602853),
    ev = s(939249),
    eN = s(817281),
    ep = s(688810),
    eT = s(487245),
    eA = s(363195),
    eO = s(652215),
    eb = s(398876);
let eI = function () {
    let { analyticsLocations: e } = (0, ep.Ay)(),
        t = (0, E.bG)([eA.A], () => eA.A.theme),
        s = a.useRef(null);
    a.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, eC.r)(e_.A.colors.BACKGROUND_BASE_LOW, eO.NJ8.LIGHT),
        l = (0, eC.r)(e_.A.colors.BACKGROUND_BASE_LOW, eO.NJ8.DARKER),
        i = (0, eC.r)(e_.A.colors.BACKGROUND_BASE_LOW, eO.NJ8.MIDNIGHT),
        o = a.useMemo(
            () => [
                { theme: eO.NJ8.LIGHT, label: ej.t.K2sFfo, color: n.hex() },
                { theme: eO.NJ8.DARKER, label: ej.t.b8Cei3, color: l.hex() },
                { theme: eO.NJ8.MIDNIGHT, label: ej.t.Do4ZJx, color: i.hex() },
            ],
            [n, l, i],
        ),
        u = a.useCallback(
            (t) => {
                (0, eT.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, eN.u_)({ theme: t });
            },
            [e],
        ),
        c = a.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: eb.N,
        children: (0, r.jsxs)("div", {
            className: eb.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        ev.D,
                        {
                            tag: "div",
                            className: eb.Du,
                            onClick: () => u(e.theme),
                            "aria-label": ej.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${eb.WT} ${t === e.theme ? eb.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: eb.i, children: ej.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(ed.K, {
                    onClick: c,
                    "aria-label": ej.intl.string(ej.t.yBZMsQ),
                    icon: em.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eR = s(818348),
    eM = s(60857);
let eL = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [i, o] = a.useState(!1),
        [u, c] = a.useState(!1),
        d = a.useRef(null),
        m = (0, el.pT)(),
        h = (0, E.bG)([eu.A], () => (null != t ? eu.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, E.bG)([eu.A], () => null != t && eu.A.isFetchingQuestPreview(t), [t]),
        j = a.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [m, t]),
        S = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, eo.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, eo.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, eo.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        v = a.useCallback(
            (e) => {
                (0, X.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: eM.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: eM.Br,
                    children: (0, r.jsxs)("div", {
                        className: eM.bo,
                        children: [
                            (0, r.jsx)(eI, {}),
                            (0, r.jsxs)("div", {
                                className: eM.b8,
                                children: [
                                    (0, r.jsx)(
                                        ec.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: v,
                                            placeholder: ej.intl.string(ej.t.Zw8jxn),
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
                                    (0, r.jsx)(ed.K, {
                                        onClick: l,
                                        "aria-label": ej.intl.string(ej.t.wzzjk9),
                                        icon: em.f,
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
                    className: eM.in,
                    children: (0, r.jsxs)(f.e, {
                        className: eM.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: S,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: ej.intl.string(ej.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: _,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: ej.intl.string(ej.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: C,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: ej.intl.string(ej.t.cKSLr4),
                            }),
                            (0, r.jsx)(eE.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: eM.PP,
                                        children: (0, r.jsx)("div", {
                                            className: eM.sH,
                                            children: (0, r.jsx)(ef.A, {
                                                value: eR.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: ej.intl.string(ej.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(ed.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": ej.intl.string(ej.t.rNGQfD),
                                        icon: eh.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(eS, { error: h }) : null,
            x ? (0, r.jsx)(ex.y, {}) : null,
        ],
    });
};
var eQ = s(364522),
    ey = s(761508),
    eU = s(797788);
function eH() {
    return (0, r.jsx)("div", { className: eU.y });
}
var eD = s(834615),
    eF = s(332544);
let eq = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eF.x3,
        children: (0, r.jsxs)("div", {
            className: eF.B0,
            children: [
                (0, r.jsx)(S.D, {
                    className: eF.R_,
                    variant: "heading-md/semibold",
                    children: ej.intl.string(ej.t.L2mlUb),
                }),
                (0, r.jsx)(eD.A, { quest: t }),
            ],
        }),
    });
};
var ew = s(241124),
    eP = s(242939),
    ek = s(717695),
    eB = s(763578),
    eV = s(111113);
let eW = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eF.x3,
        children: (0, r.jsxs)("div", {
            className: eB.wp,
            children: [
                (0, r.jsx)(S.D, {
                    className: eB.Oo,
                    variant: "heading-md/semibold",
                    children: ej.intl.string(ej.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eB.RE,
                    children: (0, r.jsx)("div", {
                        className: eB.Z,
                        children: (0, r.jsx)("div", {
                            className: eV.C3,
                            children: (0, r.jsx)(ek.A, {
                                children: (0, r.jsx)(ew.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, r.jsx)(eP.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eG = s(961974);
function eK(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eF.x3,
        children: (0, r.jsxs)("div", {
            className: eF.B0,
            children: [
                (0, r.jsx)(S.D, {
                    className: eF.R_,
                    variant: "heading-md/semibold",
                    children: ej.intl.string(ej.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: eF.YT,
                    children: (0, r.jsx)(eG.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var ez = s(711038),
    e$ = s(330034);
let eY = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eF.x3,
        children: (0, r.jsxs)("div", {
            className: eF.B0,
            children: [
                (0, r.jsx)(S.D, { variant: "heading-md/semibold", children: ej.intl.string(ej.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: e$.wu,
                    children: (0, r.jsx)("span", { className: e$.cy, children: ej.intl.string(ej.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: e$.oU,
                    children: (0, r.jsx)("div", {
                        className: e$.zx,
                        children: (0, r.jsx)("div", {
                            className: e$.Lj,
                            children: (0, r.jsx)("div", {
                                className: e$.n0,
                                children: (0, r.jsx)(ez.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eJ = s(19809),
    eX = s(173936),
    eZ = s(365199),
    e0 = s(743674),
    e1 = s(551875),
    e2 = s(971649),
    e7 = s(814793),
    e3 = s(415441),
    e4 = s(73473),
    e8 = s(270045),
    e5 = s(79545),
    e6 = s(321503),
    e9 = s(720875),
    te = s(687966),
    tt = s(782134),
    ts = s(271536),
    tn = s(768622),
    tl = s(793934),
    tr = s(662940),
    ta = s(496431),
    ti = s(927813);
let to = 2 * ti.A.Millis.DAY;
var tu = s(719021);
function tc(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, e5.Pd)(t),
        l = (0, el.fc)(t),
        i = (0, el.I3)(t),
        u = a.useMemo(() => (0, tr.Dd)(t.config, n), [t.config, n]),
        c = a.useMemo(() => (0, tr.CK)(n, l, i), [n, l, i]),
        d = (function (e) {
            let t = (0, e5.Pd)(e),
                [s] = a.useState(() => Date.now()),
                n = a.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
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
                    l < to &&
                    l > 0,
                { days: i, hours: o, minutes: u, seconds: c } = (0, ta.A)(n, ti.A.Millis.SECOND, void 0, !r);
            return r && (0 !== i || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * i + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        m = null != d ? d : u;
    return (0, r.jsxs)("div", {
        className: o()(tu.fC, { [tu.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: tu.qS,
                children: [
                    null != m &&
                        (0, r.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            className: tu.SJ,
                            color: "always-white",
                            children: m,
                        }),
                    null != m &&
                        null != c &&
                        (0, r.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            className: tu.If,
                            children: "\u2022",
                        }),
                    null != c &&
                        (0, r.jsxs)("span", {
                            className: tu.BA,
                            children: [
                                (function (e) {
                                    let t = { size: "xxs", className: tu.rF, color: "currentColor" };
                                    switch ((0, tr.pv)(e)) {
                                        case tr.UK.PLAY:
                                            return (0, r.jsx)(te._, { ...t });
                                        case tr.UK.WATCH:
                                            return (0, r.jsx)(tt.u, { ...t });
                                        case tr.UK.ACTIVITY:
                                            return (0, r.jsx)(ts.q, { ...t });
                                        case tr.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(tn.g, { ...t });
                                        case tr.UK.ARENA:
                                            return (0, r.jsx)(tl.q, { ...t });
                                    }
                                })(t),
                                (0, r.jsx)(_.E, {
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
                    className: o()(tu.qS, tu.WZ),
                    children: (0, r.jsx)(_.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: ej.intl.string(ej.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var td = s(409626),
    tm = s(3738),
    tE = s(646917),
    th = s(990078),
    tx = s(43990),
    tf = s(743368),
    tg = s(792620),
    tj = s(368715),
    tS = s(190107),
    t_ = s(919500);
function tC(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: a } = e,
        i = (0, e5.Pd)(t),
        { ctaOnHover: u } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        c = i === e5.UA.EXPIRED || (i === e5.UA.CLAIMED && (0, tg.GL)(t)),
        d = (0, el.do)({ quest: t, content: s, ctaContent: er.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(t_.lO, { [t_.Fq]: l || !u }),
        children: (0, r.jsx)("div", {
            className: t_.mv,
            children: (0, r.jsx)(tx.N, {
                theme: eO.NJ8.DARK,
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
                                c || a
                                    ? (0, r.jsx)(g.$, {
                                          variant: "secondary",
                                          text: t.config.ctaConfig.buttonLabel,
                                          onClick: d,
                                      })
                                    : (0, r.jsx)(th.m, {
                                          text: ej.intl.string(ej.t.LLLLPD),
                                          position: "top",
                                          align: "center",
                                          ariaHidden: !0,
                                          children: (0, r.jsx)(ed.K, {
                                              variant: "secondary",
                                              icon: tf.W,
                                              "aria-label": ej.intl.string(ej.t.LLLLPD),
                                              onClick: d,
                                          }),
                                      }),
                                !c &&
                                    (0, r.jsx)(tj.A, {
                                        quest: t,
                                        surface: e5.V3.QUEST_HOME_TILE_V2_FOOTER,
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
var tv = s(403581),
    tN = s(576761),
    tp = s(617986),
    tT = s(646440);
function tA(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, el.ZP)(s),
        a = (0, tN.B9)(n);
    if (null == l) return null;
    let i = a
        ? ej.intl.formatToPlainString(ej.t.l2UfLG, { bonusOrbMultiplier: l })
        : ej.intl.formatToPlainString(ej.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(ev.D, {
        onClick: () => {
            (0, tp.gC)(l, n), t?.();
        },
        "aria-label": i,
        children: (0, r.jsxs)("div", {
            className: tT.k,
            children: [
                (0, r.jsx)(tv.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(_.E, { variant: "text-sm/normal", color: "currentColor", className: tT.Q, children: i }),
            ],
        }),
    });
}
var tO = s(947641),
    tb = s(194261),
    tI = s(106799),
    tR = s(287809),
    tM = s(710969),
    tL = s(801365),
    tQ = s(453384),
    ty = s(646764),
    tU = s(269999);
function tH(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        a = (0, E.bG)([tR.default], () => tR.default.getCurrentUser()),
        i = (0, tL.mq)(t.config, a),
        o = (0, tL.ks)(t.config),
        u = (0, tL.wo)(t.config, a),
        c = (0, tL.l0)(t.config, a),
        d =
            null != u
                ? u > 700 * c
                    ? e1.i2.TIER_4
                    : u > 200 * c
                      ? e1.i2.TIER_3
                      : u > 100 * c
                        ? e1.i2.TIER_2
                        : e1.i2.TIER_1
                : void 0,
        { completedRatio: m } = (0, el.O9)(t),
        h = t.userStatus?.claimedAt != null,
        x = (0, tM.Ic)(t),
        f = t.userStatus?.enrolledAt == null,
        g = h ? "completed" : x ? "expired" : null,
        j = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ty.A, {
                    quest: t,
                    orbTier: d,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: tU.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === g &&
                    (0, r.jsx)("div", {
                        className: tU.EY,
                        children: (0, r.jsx)(tO.r, { className: tU.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === g &&
                    (0, r.jsx)("div", {
                        className: tU.EY,
                        children: (0, r.jsx)(tb.X, { size: "sm", className: tU.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: tU.CZ,
        children: [
            (0, r.jsx)("div", {
                className: tU.tE,
                children: f
                    ? (0, r.jsx)("div", { className: tU.fm, children: j })
                    : (0, r.jsx)(tQ.A, {
                          size: 74,
                          percentComplete: m,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: tU.n5, children: j }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: tU.FS,
                children: [
                    (0, r.jsx)(_.E, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        className: tU.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: tU.oV,
                        children: [
                            o && (0, r.jsx)(tI.A, { className: tU.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                _.E,
                                {
                                    variant: "text-lg/medium",
                                    className: tU.zN,
                                    color: "always-white",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: o ? u : i,
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
var tD = s(315767);
function tF(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: i } = e,
        u = a.useRef(null),
        c = (0, tm.A9)(t, i, tS.rE.QUEST_HOME_DESKTOP, td.Ob.QuestHome, u),
        d = (0, tE.z)(),
        m = (0, el.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: tD.qr,
        children: [
            (0, r.jsx)(tH, { quest: t, questContent: s, sourceQuestContent: i, isHovering: n }),
            (0, r.jsxs)("div", {
                className: tD.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: tD.Wi,
                        children: [
                            (0, r.jsx)(_.E, {
                                variant: "text-sm/normal",
                                className: o()(tD.Wj, tD.h_, { [tD.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(_.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(tD.Wj, tD.XV, { [tD.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tD.Gv,
                        children: [
                            (0, r.jsx)(_.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: ej.intl.string(ej.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(tA, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tC, { quest: t, questContent: s, sourceQuestContent: i, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var tq = s(688755),
    tw = s(831368),
    tP = s(547032);
function tk(e) {
    let {
            quest: t,
            questContent: s,
            isInFeaturedSection: n,
            className: l,
            contentPosition: i,
            rowIndex: u,
            eagerLoadAssets: c,
            impressionRef: d,
            sourceQuestContent: m,
        } = e,
        E = a.useMemo(() => (0, e1.tW)(t, e1.fY.QUEST_BAR_HERO_IMAGE), [t]),
        h = a.useMemo(() => (0, e1.tW)(t, e1.fY.QUEST_BAR_HERO_VIDEO), [t]),
        x = a.useMemo(() => (null != E ? (0, e1.UX)(E.url, { format: "webp", width: 32, height: 32 }) : null), [E]),
        f = (0, e0.S)(x),
        g = a.useMemo(() => (null != f ? { "--quest-scrim-color": f } : void 0), [f]),
        {
            isActive: j,
            shouldRender: S,
            hoverHandlers: _,
            handleMenuOpen: C,
            handleMenuClose: v,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400,
                [t, s] = a.useState(!1),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(!1),
                o = a.useRef(!1),
                u = a.useRef(!1),
                c = a.useRef(null),
                d = a.useRef(null);
            function m() {
                null != c.current && (cancelAnimationFrame(c.current), (c.current = null));
            }
            function E() {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            }
            let h = a.useCallback(() => {
                    E(),
                        l(!0),
                        m(),
                        (c.current = requestAnimationFrame(() => {
                            c.current = requestAnimationFrame(() => {
                                (c.current = null), s(!0);
                            });
                        }));
                }, []),
                x = a.useCallback(() => {
                    m(),
                        s(!1),
                        E(),
                        (d.current = setTimeout(() => {
                            (d.current = null), l(!1);
                        }, e));
                }, [e]),
                f = a.useCallback(() => i(!0), []),
                g = a.useCallback(() => {
                    i(!1), o.current || u.current || x();
                }, [x]),
                j = a.useMemo(
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
                a.useEffect(
                    () => () => {
                        m(), E();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: j, handleMenuOpen: f, handleMenuClose: g }
            );
        })(),
        N = (0, e5.Pd)(t),
        p = (0, e2.go)(),
        T = (0, e7.E0)(t.config),
        A = a.useContext(e6.X),
        { visibilityElementRef: O, almostVisibleInViewport: b } = (0, tw.I)(
            A?.current?.getScrollerNode() ?? null,
            c ?? !1,
        ),
        {
            handleHoverStart: I,
            handleHoverEnd: R,
            isEventWithinParent: M,
        } = (0, tq.B)({ quest: t, questContent: s, contentPosition: i, rowIndex: u, sourceQuestContent: m }),
        L = (0, ea.Lk)({
            isShareable: T,
            questId: t.id,
            trackingCtx: a.useMemo(
                () => ({
                    content: s,
                    ctaContent: er.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: p,
                    sourceQuestContent: m,
                }),
                [s, m, p],
            ),
        });
    return (0, r.jsxs)("article", {
        id: `quest-tile-${t.id}`,
        ref: (e) => {
            (d.current = e), (O.current = e);
        },
        "aria-label": ej.intl.formatToPlainString(ej.t.EAYZAr, { questName: t.config.messages.questName }),
        className: o()(tP.kL, { [tP.iR]: n, [tP.DM]: j }, l),
        style: g,
        onMouseEnter: () => {
            _.onMouseEnter(), I();
        },
        onMouseLeave: () => {
            _.onMouseLeave(), R();
        },
        onFocus: (e) => {
            M(e) || (_.onFocus(), I());
        },
        onBlur: (e) => {
            M(e) || (_.onBlur(), R());
        },
        children: [
            (0, r.jsx)(e9.A, {
                showPlaceholder: !b,
                width: 600,
                height: 450,
                className: tP.Tv,
                children: (0, r.jsx)(e3.N, {
                    imageAsset:
                        null != E
                            ? { asset: E, assetId: "QuestTileV2", alt: ej.intl.string(ej.t.jnijWz), className: tP.Tv }
                            : void 0,
                    videoAsset:
                        null != h
                            ? {
                                  asset: h,
                                  assetId: "QuestTileV2_heroAnimated",
                                  className: o()(tP.Tv, tP.gJ, { [tP.C7]: j }),
                              }
                            : void 0,
                    imageSize: { width: 600, height: 450 },
                    showVideo: S,
                }),
            }),
            (0, r.jsx)("div", { className: o()(tP.sL, { [tP.Mq]: N === e5.UA.EXPIRED }) }),
            (0, r.jsx)("div", { className: o()(tP.f5, tP.Cm) }),
            (0, r.jsx)("div", { className: o()(tP.f5, tP.sr) }),
            (0, r.jsxs)("div", {
                className: tP.wx,
                children: [
                    (0, r.jsx)(tc, { quest: t, isHovering: j }),
                    (0, r.jsxs)("div", {
                        className: o()(tP.$s, { [tP.rk]: j }),
                        children: [
                            n &&
                                T &&
                                (0, r.jsx)(ev.D, {
                                    tag: "div",
                                    className: tP.E9,
                                    onClick: L,
                                    "aria-label": ej.intl.string(ej.t.WqhZss),
                                    children: (0, r.jsx)(eX.q, { size: "sm", color: "currentColor" }),
                                }),
                            (0, r.jsx)(e8.C, {
                                questContent: s,
                                quest: t,
                                hideLearnMore: !0,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                sourceQuestContent: m,
                                onOpen: C,
                                onClose: v,
                                children: (e) =>
                                    (0, r.jsx)(ev.D, {
                                        ...e,
                                        tag: "div",
                                        className: tP.E9,
                                        "aria-label": ej.intl.string(ej.t.DEoVWZ),
                                        children: (0, r.jsx)(eZ.j, { size: "sm", color: "currentColor" }),
                                    }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tF, { quest: t, questContent: s, isInFeaturedSection: n, isHovering: j, sourceQuestContent: m }),
        ],
    });
}
let tB = a.memo(function (e) {
    let t = (0, E.bG)([eu.A], () => (null != e.questId ? eu.A.getQuest(e.questId) : void 0), [e.questId]),
        s = a.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(e4.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === Z.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(tk, { ...e, quest: s, impressionRef: t }),
          });
});
function tV(e) {
    let { quest: t } = e,
        { useNewTile: s } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: eF.x3,
        children: (0, r.jsxs)("div", {
            className: eF.B0,
            children: [
                (0, r.jsx)(S.D, {
                    className: eF.R_,
                    variant: "heading-md/semibold",
                    children: ej.intl.string(ej.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(tB, {
                          className: eF.d,
                          quest: t,
                          questContent: Z.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: Z.uF.INTERNAL_PREVIEW_TOOL,
                      })
                    : (0, r.jsx)(eJ.Ay, {
                          className: eF.d,
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
var tW = s(97808),
    tG = s(778712),
    tK = s(87664),
    tz = s(427262),
    t$ = s(198525),
    tY = s(66176);
let tJ = function (e) {
    let { quest: t } = e,
        [s, n] = a.useState(!1),
        l = a.useRef(null),
        i = (0, E.bG)([tR.default], () => tR.default.getCurrentUser()),
        u = tz.Ay.useName(i),
        c = (0, tK.A)(i?.id),
        d = a.useCallback(
            (e) =>
                (0, r.jsx)(t$.A, {
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
        className: eF.x3,
        children: (0, r.jsxs)("div", {
            className: eF.B0,
            children: [
                (0, r.jsx)(S.D, {
                    className: tY.R_,
                    variant: "heading-md/semibold",
                    children: ej.intl.string(ej.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: tY.$Q, children: ej.intl.string(ej.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: tY.k0,
                    children: (0, r.jsx)(eE.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => n(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: eE.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(tY.Tn, { [tY.wH]: s }),
                                children: (0, r.jsx)(ev.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: tY.lm,
                                        children: [
                                            (0, r.jsx)(tW.eu, {
                                                size: tG._3.SIZE_32,
                                                src: i?.getAvatarURL(void 0, 32),
                                                status: eO.clD.ONLINE,
                                                "aria-label": i?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: tY.Fj,
                                                children: [
                                                    (0, r.jsx)(_.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(_.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: ej.intl.string(ej.t.b9w3bO),
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
function tX(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, E.bG)([eu.A], () => eu.A.getQuest(t));
    if (null != (0, E.bG)([eu.A], () => eu.A.getFetchQuestPreviewError(t)) || null == n) return null;
    let l = (e) => null == s || 0 === s.length || s.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eW, { quest: n }), (0, r.jsx)(eH, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tV, { quest: n }), (0, r.jsx)(eH, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eY, { questId: n.id }), (0, r.jsx)(eH, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eK, { quest: n }), (0, r.jsx)(eH, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tJ, { quest: n }), (0, r.jsx)(eH, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eq, { quest: n }), (0, r.jsx)(eH, {})] }),
        ],
    });
}
var tZ = s(497275);
function t0(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: i } = e,
        u = [
            { value: "quest_bar", label: ej.intl.string(ej.t.rjVPdM) },
            { value: "share_embed", label: ej.intl.string(ej.t["D/gSWS"]) },
            { value: "home_card", label: ej.intl.string(ej.t["5wnpF3"]) },
            { value: "channel_call_header", label: ej.intl.string(ej.t.gWinpQ) },
            { value: "members_list", label: ej.intl.string(ej.t.wpYima) },
            { value: "activity_panel", label: ej.intl.string(ej.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = a.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(eQ.Ip, {
        className: o()(tZ.kL, i),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: tZ.qE,
            children: [
                (0, r.jsx)(S.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ej.intl.string(ej.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: tZ.pf, children: l }),
                (0, r.jsxs)(ey.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(ey.V.Item, { id: "all", children: ej.intl.string(ej.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(ey.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: tZ.tZ, children: (0, r.jsx)("div", { className: tZ.Qs, children: t }) }),
            ],
        }),
    });
}
let t1 = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: s } = (0, u.zy)(),
                n = a.useMemo(() => new URLSearchParams(s).get(el.L1.QUEST_ID) ?? e, [s, e]),
                l = a.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        s.set(el.L1.TAB, el.NC.PREVIEW_TOOL),
                            s.set(el.L1.QUEST_ID, e),
                            t.push(`${eO.BVt.QUEST_HOME}?${s.toString()}`);
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        i = (0, E.bG)([eu.A], () => (null != n ? eu.A.getQuest(n) : void 0), [n]),
        o = (0, E.bG)([eu.A], () => (null != n ? eu.A.getQuestLoadedViaPreview(n) : null), [n]);
    a.useEffect(() => {
        null != n &&
            (0, eo.dQ)(n).then(() => {
                (0, eo.Gt)(n);
            });
    }, [n]),
        a.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, eo.dQ)(n);
            };
            return (
                ei.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    ei.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = a.useState([]);
    return (0, r.jsx)(t0, {
        className: s,
        controls: (0, r.jsx)(eL, {
            questId: n,
            setQuestId: l,
            quest: i,
            refreshQuest: () => {
                null != n && (0, eo.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(tX, { questId: o?.id, selectedSections: c }) : null,
    });
};
var t2 = s(203879),
    t7 = s(403362),
    t3 = s(167417),
    t4 = s(783977),
    t8 = s(651892),
    t5 = s(305866),
    t6 = s(915089),
    t9 = s(332733);
function se(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(_.E, { className: t9.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let st = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, t6.GV)(),
        l = a.useRef(null);
    return (0, r.jsx)(eE.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(t5.l, { className: t9.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var ss = s(612539);
let sn = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, el.Nb)(),
        l = a.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(st, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, t8.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: ss.B }),
                                    (0, r.jsx)(se, { id: i, children: e.heading }),
                                    (0, r.jsx)(t3.$, {
                                        "aria-labelledby": i,
                                        options: n,
                                        selectedValues: o,
                                        onChange: l(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, r.jsx)("hr", { className: ss.B }),
                    (0, r.jsx)("div", {
                        className: ss.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: ej.intl.string(ej.t.VkKicb),
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
                text: ej.intl.formatToPlainString(ej.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: t4.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sl = s(773812),
    sr = s(715482);
let sa = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = a.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, E.bG)([T.Ay], () => T.Ay.keyboardModeEnabled),
        o = (0, el.XD)(),
        u = a.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(st, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(se, { id: t, children: ej.intl.string(ej.t.tZXJIS) }),
                    (0, r.jsx)(sl.z, {
                        options: u,
                        onChange: (e) => {
                            l(e), i || s();
                        },
                        value: n,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                "aria-label": ej.intl.formatToPlainString(ej.t.lPlIMo, { selected: (0, t8.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, t8.Js)(n),
                icon: sr.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var si = s(308186),
    so = s(717421);
function su(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, si.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, si.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var sc = s(691540),
    sd = s(857250),
    sm = s(97483);
function sE() {
    let { enabled: e } = es.jm.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        t = a.useRef(null);
    return {
        showToast: a.useCallback(
            (s) => {
                t.current !== s &&
                    e &&
                    ((0, sc.P0)((0, sd.o)(ej.intl.string(ej.t["5ABf1w"]), sm.Ck.FAILURE)),
                    $.default.track(eO.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: s }),
                    (t.current = s));
            },
            [e],
        ),
    };
}
var sh = s(535185);
function sx(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function sf(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = a.useState(null),
        i = a.useCallback(() => {
            r(sx(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sh.g)(e, i, [t, s], { fireOnMount: !0 }), l;
}
var sg = s(121480);
let sj = 4 * ti.A.Millis.SECOND;
function sS(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = a.useRef(null),
        i = sf(l, s, n);
    return (0, r.jsx)("div", {
        className: sg.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== i && t(i),
    });
}
let s_ = a.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: i,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = sE(),
        h = a.useRef(""),
        [x, f] = a.useState(null),
        [g, j] = a.useState(0),
        { useNewTile: C } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: v }, N] = (0, so.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sj },
        })),
        p = a.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !i) return !1;
                let t = (0, tM.vc)(e, s, n);
                return null == t ? (E(e), !1) : (f(t.id), j((e) => e + 1), !0);
            },
            [s, n, l, E, i],
        );
    return (a.useImperativeHandle(t, () => ({ scrollToQuest: p }), [p]),
    a.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        l || !i || (m.hash !== h.current && p(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, l, i, p]),
    a.useLayoutEffect(() => {
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
        ? (0, r.jsx)(ex.y, { className: sg.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sg.y7,
                children: [
                    (0, r.jsx)(S.D, {
                        variant: "heading-xl/semibold",
                        children: ej.intl.string(c ? ej.t.PBfFnx : ej.t.NqFP6z),
                    }),
                    (0, r.jsx)(_.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? ej.intl.format(ej.t.LdYS1H, { onClick: d }) : ej.intl.string(ej.t.LhD4yH),
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
                            a = null != x && !l;
                        return (0, r.jsxs)(
                            si.animated.div,
                            {
                                className: o()({ [sg.XB]: l }),
                                style: su(l, a, v),
                                children: [
                                    l && (0, r.jsx)("div", { className: sg.E4 }, g),
                                    C
                                        ? (0, r.jsx)(tB, {
                                              quest: t,
                                              questContent: Z.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sg.d,
                                              sourceQuestContent: Z.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eJ.Ay, {
                                              quest: t,
                                              questContent: Z.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sg.d,
                                              sourceQuestContent: Z.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sC = s(458518),
    sv = s(65990);
let sN = [],
    sp = el.L1.SORT,
    sT = el.L1.FILTER,
    sA = a.forwardRef(function (e, t) {
        let s,
            n,
            l,
            i,
            o = a.useRef(null),
            [c, d] =
                ((s = (0, sC.o)()),
                (n = (0, u.W6)()),
                (l = a.useRef(null)),
                (i = a.useCallback(
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
                [s, i]),
            m = a.useMemo(() => {
                var e;
                return (
                    (e = c.get(sp)),
                    ((0, X.uJ)(e) ? null : (Object.values(tS.kL).find((t) => t === e) ?? null)) ?? tS.kL.SUGGESTED
                );
            }, [c]),
            E = a.useMemo(
                () =>
                    (function (e) {
                        if ((0, X.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tS.WQ)(e))
                            .filter(t7.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(sT)) ?? sN,
                [c],
            ),
            h = a.useCallback(
                (e) => {
                    d({ [sp]: e });
                },
                [d],
            ),
            x = a.useCallback(
                (e) => {
                    d({
                        [sT]:
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
                isFetchingCurrentQuests: _,
                hasFetched: C,
            } = (0, el.Qh)(
                el.NC.ALL,
                a.useMemo(() => ({ sortMethod: m, filters: E, removeExpiredQuests: f }), [m, E, f]),
            ),
            v = a.useCallback(() => {
                x(sN);
            }, [x]),
            N = a.useRef(null),
            p = a.useRef(null),
            T = (0, u.zy)(),
            A = (0, u.W6)();
        return (
            a.useEffect(() => {
                "" !== T.hash &&
                    null != N.current &&
                    null != p.current &&
                    (m !== N.current || E !== p.current) &&
                    A.replace({ ...T, hash: void 0 });
            }, [m, E, T, A]),
            a.useEffect(() => {
                N.current = m;
            }, [m]),
            a.useEffect(() => {
                p.current = E;
            }, [E]),
            (0, el.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: g.length }),
            a.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        v(),
                            h(tS.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [v, h],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: sv.Mj,
                        children: [
                            (0, r.jsx)(S.D, { variant: "heading-lg/medium", children: ej.intl.string(ej.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sv.Nf,
                                children: [
                                    (0, r.jsx)(sa, { onChange: h, optionClassName: sv.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(sn, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(s_, {
                        ref: o,
                        quests: g,
                        excludedQuests: j,
                        isFetching: _,
                        hasFetched: C,
                        hasFiltersApplied: E.length > 0,
                        onClearFilters: v,
                    }),
                ],
            })
        );
    });
var sO = s(575593),
    sb = s(440703),
    sI = s(462887),
    sR = s(187322),
    sM = s(765671),
    sL = s(736653),
    sQ = s(162232),
    sy = s(734736),
    sU = s(303136),
    sH = s(265234),
    sD = s(181713);
let sF = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sD.A : sD.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sH.k, t),
        children: s
            ? (0, r.jsx)(sU.A, {
                  preload: "auto",
                  className: sH.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sH.L, src: l, alt: n }),
    });
};
var sq = s(57718),
    sw = s(659249);
let sP = (0, a.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, a.useState)(!1),
        [l, i] = (0, a.useState)(24),
        [u, c] = (0, a.useState)(!1),
        d = (0, a.useRef)(null),
        m = (0, a.useRef)(null),
        h = (0, a.useRef)(null),
        x = (0, E.bG)([tR.default], () => tR.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, sM.Ay)(),
        j = (0, sL.Ay)(),
        C = (0, el.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        v = t.userStatus?.claimedTier ?? 0,
        N = t.config.rewards[v],
        p = N?.type === sb.l.FRACTIONAL_PREMIUM,
        T = N?.type === sb.l.COLLECTIBLE,
        A = N?.type === sb.l.VIRTUAL_CURRENCY,
        O = N?.collectibleProduct?.items?.[0],
        b = O?.type === sO.R.AVATAR_DECORATION ? O : null,
        I = a.useMemo(
            () =>
                null == N
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? ej.intl.format(ej.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : N.name,
            [N, A, t],
        );
    (0, sM.i4)(d, (e) => {
        let { height: t } = e;
        if (!T || null == t || null == m.current || null == d.current || null == h.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        i((n.top - s.top - l.height) / 2);
    });
    let R = (0, sI.M)(j),
        M = a.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        L = a.useMemo(() => (0, e1.tW)(t, e1.fY.REWARD), [t]),
        Q = s ? g + 8 : 0,
        { content_position: U, row_index: H, ...D } = (0, er.fF)(Z.uF.TROPHY_CASE_CARD);
    function F() {
        n(!0), $.default.track(eO.HAw.QUEST_HOVER, { quest_id: t.id, ...D });
    }
    function q() {
        n(!1);
    }
    function w(e) {
        c(!0), $.default.track(eO.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == N || u
        ? null
        : (0, r.jsx)(sR.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: F,
                  onBlur: q,
                  onMouseEnter: F,
                  onMouseLeave: q,
                  className: o()(sw.kL, { [sw.yo]: s }),
                  children: [
                      null != x &&
                          T &&
                          null != b &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: sw.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sQ.A, {
                                  avatarDecorationOverride: b,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      p
                          ? (0, r.jsx)(sy.A, { className: sw.Sl })
                          : A
                            ? (0, r.jsx)(sF, {
                                  className: sw.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : L.isAnimated
                              ? (0, r.jsx)(y.A, {
                                    className: sw.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: L.url,
                                        type: L.mimetype ?? void 0,
                                        onError: () => w(L.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sw.Sl,
                                    src: L.url,
                                    alt: t.config.messages.questName,
                                    onError: () => w(L.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sw.Lw, { [sw.en]: R, [sw.So]: !R }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sw.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sq.Ay, {
                              logotypeClassName: o()(sw.wm, { [sw.A0]: M }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: sw.zH,
                          children: [
                              (0, r.jsx)(S.D, {
                                  className: sw.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: ej.intl.format(ej.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(_.E, {
                                  variant: "text-sm/medium",
                                  color: R ? "text-muted" : "always-white",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: ej.intl.format(ej.t["kXVcV+"], { reward: I, claimedDate: C }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sk = s(396478);
function sB(e) {
    let { onClick: t } = e,
        n = (0, sL.Ay)();
    return (0, r.jsxs)(sk.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sk.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sk.SG, { note: ej.intl.format(ej.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sV = s(975424);
function sW(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, el.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(ex.y, { className: sV.u })
        : 0 === n.length
          ? (0, r.jsx)(sB, { onClick: () => t(el.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sV.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sP, { quest: e }, e.id)),
            });
}
var sG = s(548411),
    sK = s(554830),
    sz = s(689175),
    s$ =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        l);
let sY = [
    { type: "featured-quests", identifier: "featured", title: ej.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: ej.t.PRg3qh },
    { type: "quests", identifier: "orb", title: ej.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: ej.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: ej.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: ej.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: ej.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function sJ(e) {
    return e_.A.space.SPACE_XL.resolve({ density: e });
}
let sX = (e, t) => (1220 - 2 * sJ(e) * (t ? 2 : 0.75)) / 3;
var sZ = s(522403);
let s0 = "data-scroll-target",
    s1 = `[${s0}]`,
    s2 = { anchors: [], pageSize: 1 },
    s7 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function s3(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let s4 = a.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = s1,
                maskWidth: l = 24,
                overflowAmount: i = 0,
                maskMarginMultiplier: u = 1,
                onScrollEnd: c,
            } = e,
            d = a.useRef(null),
            m = a.useRef(null),
            h = a.useRef(0),
            x = a.useRef(null),
            [f, g] = a.useState(!1),
            [j, S] = a.useState(!1),
            [_, C] = a.useState(!0),
            [v, N] = a.useState([]),
            [p, A] = a.useState(1),
            O = (0, E.bG)([T.Ay], () => T.Ay.useReducedMotion) ? "auto" : "smooth",
            b = a.useCallback(() => {
                let e = d.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (g(e.scrollLeft > 0), S(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
            }, []),
            I = a.useCallback(() => {
                let { anchors: e, pageSize: t } = (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return s2;
                    let a = Array.from(r.querySelectorAll(s));
                    if (0 === a.length) return s2;
                    let i = a[0].offsetWidth,
                        o = a.length > 1 ? a[1].offsetLeft - a[0].offsetLeft - i : 0,
                        u = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (i + o))),
                        c = a.length - u + 1;
                    return c <= 1
                        ? s2
                        : {
                              anchors: [
                                  0,
                                  ...a.slice(1, c - 1).map((e, t) => {
                                      let s = a[t + u];
                                      return (e.offsetLeft + s.offsetLeft + s.offsetWidth) / 2;
                                  }),
                                  r.scrollWidth,
                              ],
                              pageSize: u,
                          };
                })({ scrollerRef: d, itemSelector: n, maskWidth: l, maskMarginMultiplier: u });
                A(t), N((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e));
            }, [l, n, u, N]),
            R = a.useCallback(() => {
                if (null == x.current || x.current?.clientWidth === 0) return C(!0);
                C(x.current?.clientWidth >= 1260);
            }, [x]),
            M = a.useCallback(
                (e) => {
                    let t = d.current?.getScrollerNode();
                    if (null == t || v.length < 2) return;
                    let { currentIndex: s, scrollLefts: n } = s3(t, v),
                        l = Math.max(0, Math.min(v.length - 1, s + e * p));
                    (m.current = er.pk.ARROW), t.scrollTo({ left: n[l], behavior: O });
                },
                [O, v, p],
            ),
            L = a.useCallback((e, t) => {
                let s = d.current?.getScrollerNode();
                if (null == s || null == e || !s.contains(e)) return;
                let n = s.getBoundingClientRect(),
                    l = e.getBoundingClientRect(),
                    r = n.left - l.left,
                    a = l.right - n.right;
                (0 !== r || 0 !== a) &&
                    ((m.current = er.pk.MANUAL),
                    r > 0
                        ? s.scrollTo({ left: s.scrollLeft - r, behavior: t })
                        : a > 0 && s.scrollTo({ left: s.scrollLeft + a, behavior: t }));
            }, []),
            Q = a.useCallback(
                (e) => {
                    let t = e.target.closest(n);
                    null != t && L(t, O);
                },
                [n, L, O],
            ),
            y = a.useCallback(() => {
                let e = d.current?.getScrollerNode();
                if (null == e) return;
                let { currentIndex: t } = s3(e, v),
                    s = m.current ?? er.pk.MANUAL;
                m.current = null;
                let n = h.current;
                h.current = e.scrollLeft;
                let l = e.scrollLeft > n ? er.VU.RIGHT : er.VU.LEFT;
                c?.({
                    scrollingType: s,
                    scrollWindowStartIndex: t,
                    scrollWindowEndIndex: t + p - 1,
                    scrollWindowSize: p,
                    scrollingDirection: l,
                });
            }, [c, v, p]),
            U = a.useCallback(
                (e) => {
                    let t = "ArrowLeft" === e.key ? -1 : +("ArrowRight" === e.key);
                    if (0 === t) return;
                    e.preventDefault();
                    let s = d.current?.getScrollerNode();
                    if (null == s) return;
                    let l = Array.from(s.querySelectorAll(n)),
                        r = e.target.closest(n),
                        a = null == r ? -1 : l.indexOf(r),
                        i = l[a + t],
                        o = null == i ? null : i.matches(s7) ? i : i.querySelector(s7);
                    null != o && (o.focus({ preventScroll: !0 }), e.repeat && L(i, "instant"));
                },
                [n, L],
            ),
            H = a.useCallback(() => {
                b(), I(), R();
            }, [b, I, R]);
        (0, sh.g)(x, H, [], { fireOnMount: !0 });
        let D = i > 0,
            F = a.useMemo(
                () => ({
                    "--custom-scroller-mask-width": `${l}px`,
                    "--custom-scroller-overflow-amount": `${i}px`,
                    "--custom-scroller-scroll-behavior": O,
                }),
                [l, i, O],
            );
        return (0, r.jsxs)("div", {
            className: o()(s, sZ.m7),
            ref: x,
            style: F,
            children: [
                (0, r.jsx)("div", {
                    className: o()(sZ.k9, sZ.RW, { [sZ.Q2]: f }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(ed.K, {
                        icon: sG.Z,
                        variant: "overlay-secondary",
                        onClick: () => M(-1),
                        disabled: !f,
                        "aria-label": ej.intl.string(ej.t.vgfxaA),
                        tabIndex: -1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(sZ.k9, sZ.K3, { [sZ.Q2]: j }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(ed.K, {
                        icon: sK.K,
                        variant: "overlay-secondary",
                        onClick: () => M(1),
                        disabled: !j,
                        tabIndex: -1,
                        "aria-label": ej.intl.string(ej.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [sZ.sF]: f && _, [sZ.RC]: j && _, [sZ.Ni]: D && !f, [sZ.GA]: D && !j }),
                    children: (0, r.jsx)(sz.zC, {
                        ref: d,
                        orientation: "horizontal",
                        onScroll: b,
                        onScrollEnd: y,
                        onFocusCapture: Q,
                        onKeyDown: U,
                        className: o()({ [sZ.x2]: D }, sZ.XG),
                        children: (0, r.jsxs)(e6.X.Provider, {
                            value: d,
                            children: [
                                t,
                                v.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: sZ.fw, style: { insetInlineStart: `${e}px` } },
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
    s8 = a.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var s5 = s(76060);
function s6(e) {
    let { children: t, questId: s, featuredSection: n } = e,
        { targetQuestId: l, highlightCount: i, highlightAnimationProgress: o } = a.useContext(s8),
        u = l === s,
        c = null != l && l !== s,
        { useNewTile: d } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        m = n ? "var(--radius-lg)" : "var(--radius-sm)",
        E = a.useMemo(() => ({ ...su(u, c, o), borderRadius: d ? m : "10px" }), [u, c, o, d, m]);
    return (0, r.jsxs)(si.animated.div, {
        [s0]: "",
        className: u ? s5.X : void 0,
        style: E,
        children: [u && (0, r.jsx)("div", { className: s5.E }, i), t],
    });
}
var s9 = s(474646);
function ne(e) {
    let { containerWidth: t, questIds: s, setMaxRowIndex: n } = e,
        { useNewTile: l } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        i = a.useMemo(() => (null == t ? null : sx(t, 345, 20, 2)), [t]);
    return (
        a.useEffect(() => {
            null !== i && n(Math.ceil(s.length / i) - 1);
        }, [s.length, i, n]),
        (0, r.jsx)("div", {
            className: s9.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != i &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        s6,
                        {
                            featuredSection: !0,
                            questId: e,
                            children: l
                                ? (0, r.jsx)(
                                      tB,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / i),
                                          sourceQuestContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      eJ.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / i),
                                          sourceQuestContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                      },
                                      e,
                                  ),
                        },
                        `animated-wrapper-${e}`,
                    ),
                ),
        })
    );
}
var nt = s(344236);
function ns(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(nt.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: nt.Gf, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: nt.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(nt.Nr, nt.Vr) }, t),
                ),
            }),
        ],
    });
}
var nn = s(418842),
    nl = s(561844),
    nr = s(548636);
function na(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetQuestId: i } = a.useContext(s8),
        { useNewTile: o } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = es.Mk.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        c = (0, nn.C)(),
        d = a.useCallback(
            (e) => {
                let {
                    scrollingType: n,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: a,
                    scrollingDirection: o,
                } = e;
                (0, nl.kO)({
                    scrollingType: null != i ? er.pk.AUTO : n,
                    scrollingDirection: o,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: a,
                    questContent: t,
                    carouselSize: s.length,
                });
            },
            [t, s.length, i],
        ),
        m = u === es.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(s4, {
        maskWidth: sJ(c),
        overflowAmount: 25,
        maskMarginMultiplier: m ? 2 : 0.75,
        onScrollEnd: d,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${sX(c, m)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: nr.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        s6,
                        {
                            questId: e,
                            children: o
                                ? (0, r.jsx)(tB, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nr.d,
                                      sourceQuestContent: t,
                                  })
                                : (0, r.jsx)(eJ.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === s$.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nr.d,
                                      sourceQuestContent: t,
                                  }),
                        },
                        `animated-wrapper-${e}`,
                    ),
                ),
                (0, r.jsx)("div", { className: nr.fu }),
            ],
        }),
    });
}
var ni = s(958538);
let no = ti.A.Millis.WEEK;
function nu() {
    let e = eu.A.quests;
    if (0 === eu.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tM.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class nc extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(eu.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - no;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([eu.A], nu), t;
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
let nd = new nc(ei.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    nm = 2 * ti.A.Millis.DAY,
    nE = new Map(sY.map((e) => [e.identifier, e])),
    nh = {
        [s$.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nx(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
function nf(e, t) {
    let s = nE.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
var ng = s(32304);
let nj = {
        [s$.FEATURED]: Z.uF.QUEST_HOME_FEATURED_SECTION,
        [s$.IN_PROGRESS]: Z.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [s$.ENDING_SOON]: Z.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [s$.ORB]: Z.uF.QUEST_HOME_ORB_SECTION,
        [s$.DISCOVERED]: Z.uF.QUEST_HOME_DISCOVERED_SECTION,
        [s$.EXPIRED]: Z.uF.QUEST_HOME_EXPIRED_SECTION,
        [s$.PREVIEW]: Z.uF.QUEST_HOME_PREVIEW_SECTION,
    },
    nS = 4 * ti.A.Millis.SECOND,
    n_ = a.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: i = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
            { sections: d, isFetchingCurrentQuests: m } = (() => {
                let e = (0, tz.Gn)(),
                    t = (0, el.Cv)(),
                    s = (0, E.bG)([eu.A], () => eu.A.lastFetchedCurrentQuests > 0),
                    { quests: n, isFetchingCurrentQuests: l } = (0, el.Qh)(el.NC.ALL, {
                        sortMethod: tS.kL.SUGGESTED,
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
                    i = (0, ea.T2)(),
                    o = (0, E.bG)([nd], () => nd.getDiscoveredAtByQuestId(), []),
                    u = a.useMemo(() => (l || !s) && 0 === r.length, [l, s, r.length]);
                return {
                    sections: a.useMemo(
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
                                          a = new Map(),
                                          i = new Set();
                                      function o(e, t) {
                                          let { featuredOnly: o = !1 } = t;
                                          if (i.has(e)) return;
                                          let u = eu.A.getQuestConfig(e);
                                          if (null == u) return;
                                          let c = (function (e) {
                                              let {
                                                      quest: t,
                                                      hero: s,
                                                      discoveredAtByQuestId: n,
                                                      questIdsBySectionIdentifier: l,
                                                      isStaff: r,
                                                      isPreviewerOnAnyQuest: a,
                                                  } = e,
                                                  { userStatus: i, preview: o } = eu.A.getQuest(t.id) ?? {},
                                                  u =
                                                      null != i &&
                                                      null != i.enrolledAt &&
                                                      null != i.completedAt &&
                                                      null == i.claimedAt;
                                              return (0, tM.kd)(t) && !u
                                                  ? r
                                                      ? s$.EXPIRED
                                                      : null
                                                  : null != i && null != i.enrolledAt && null == i.claimedAt
                                                    ? s$.IN_PROGRESS
                                                    : n.has(t.id)
                                                      ? s$.DISCOVERED
                                                      : null != s && (0, e7.I0)(s, t.id) && nf(s$.FEATURED, l)
                                                        ? s$.FEATURED
                                                        : new Date(t.expiresAt).valueOf() <= Date.now() + nm
                                                          ? s$.ENDING_SOON
                                                          : nf(s$.FEATURED, l)
                                                            ? s$.FEATURED
                                                            : (0, tL.ks)(t)
                                                              ? s$.ORB
                                                              : a && !0 === o
                                                                ? s$.PREVIEW
                                                                : null;
                                          })({
                                              quest: u,
                                              hero: s,
                                              discoveredAtByQuestId: n,
                                              questIdsBySectionIdentifier: a,
                                              isStaff: l,
                                              isPreviewerOnAnyQuest: r,
                                          });
                                          null == c ||
                                              (o && c !== s$.FEATURED) ||
                                              (a.set(c, [...(a.get(c) ?? []), e]), i.add(e));
                                      }
                                      return (
                                          s?.questIds?.forEach((e) => o(e, { featuredOnly: !0 })),
                                          t.forEach((e) => o(e, {})),
                                          sY
                                              .map((e) => {
                                                  let t = nh?.[e.identifier];
                                                  if (null != e.shouldShowFn && !e.shouldShowFn(l, r))
                                                      return { ...e, questIds: [] };
                                                  let s =
                                                      null != t
                                                          ? t(a.get(e.identifier) ?? [], { discoveredAtByQuestId: n })
                                                          : (a.get(e.identifier) ?? []);
                                                  return { ...e, questIds: s };
                                              })
                                              .filter((e) => {
                                                  let { questIds: t } = e;
                                                  return t.length > 0;
                                              })
                                      );
                                  })({
                                      allQuestIds: r,
                                      hero: i,
                                      discoveredAtByQuestId: o,
                                      isStaff: e,
                                      isPreviewerOnAnyQuest: t,
                                  }),
                        [r, i, o, u, e, t],
                    ),
                    isFetchingCurrentQuests: u,
                };
            })(),
            h = a.useRef(null),
            { showToast: x } = sE(),
            [f, g] = a.useState(null),
            [j, C] = a.useState(0),
            [v, N] = a.useState(null),
            [p, T] = a.useState(0),
            A = a.useRef(null),
            O = a.useCallback(
                (e) => {
                    N(e.contentRect.width);
                },
                [N],
            );
        (0, sh.g)(h, O, [O], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: b }, I] = (0, so.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nS },
            })),
            R = a.useCallback(
                (e) => {
                    if (null == e || null == v) return !1;
                    let t = document.getElementById((0, eJ.sT)(e));
                    return (
                        !m &&
                        !n &&
                        (null == t
                            ? (x(e), !1)
                            : (g(e),
                              C((e) => e + 1),
                              t.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                              I({
                                  from: { highlightAnimationProgress: 0 },
                                  to: { highlightAnimationProgress: 1 },
                                  reset: !0,
                                  onRest: (e) => {
                                      e.cancelled || g(null);
                                  },
                              }),
                              !0))
                    );
                },
                [g, C, I, m, n, x, v],
            );
        a.useImperativeHandle(t, () => ({ scrollToQuest: R }), [R]),
            a.useLayoutEffect(() => {
                if (null == s) {
                    A.current = null;
                    return;
                }
                A.current !== s && ((0, eo.sB)(s), R(s) && (A.current = s));
            }, [s, R]);
        let M = a.useMemo(() => ({ targetQuestId: f, highlightCount: j, highlightAnimationProgress: b }), [f, j, b]),
            L = a.useMemo(
                () =>
                    d.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === s$.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(s8.Provider, {
            value: M,
            children: (0, r.jsx)("div", {
                className: o()(ng.kL, l, { [ng.Sy]: !i }),
                ref: h,
                children: m
                    ? (0, r.jsx)(ns, { role: "status", "aria-label": ej.intl.string(ej.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: ng.p9,
                                    children: [
                                        (0, r.jsx)(S.D, {
                                            variant: "heading-lg/semibold",
                                            className: ng.Gf,
                                            children: ej.intl.string(l),
                                        }),
                                        s === s$.FEATURED && u && c
                                            ? (0, r.jsx)(ne, { questIds: n, setMaxRowIndex: T, containerWidth: v })
                                            : (0, r.jsx)(na, {
                                                  questIds: n,
                                                  rowIndex: t < L ? t : t + p,
                                                  sectionIdentifier: s,
                                                  questContent: nj[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: ng.y7,
                            children: [
                                (0, r.jsx)(S.D, {
                                    variant: "heading-xl/semibold",
                                    children: ej.intl.string(ej.t.NqFP6z),
                                }),
                                (0, r.jsx)(_.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: ej.intl.string(ej.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var nC = s(353640),
    nv = s(121894),
    nN = s(851936);
let np = (0, nC.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, nN.L)({ location: tS.rE.QUEST_HOME_DESKTOP });
        if (s.info === eR.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, nv.r)(() => e(l));
    },
}));
var nT = s(516226),
    nA = s(323889),
    nO = s(901406),
    nb = s(139384),
    nI = s(770178),
    nR = s(14233);
function nM(e, t) {
    let { row_index: s, ...n } = (0, er.fF)(Z.uF.QUEST_HOME_HERO);
    (0, nl.Qg)({
        adContentId: e,
        adCreativeType: nA.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: Z.uF.QUEST_HOME_HERO,
    });
}
let nL = a.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: i, buttons: u, background: c, className: d } = e,
        [m, E] = a.useState("display-lg"),
        h = a.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, nI.w)(h, [], { fireOnMount: !0 }),
        f = a.useCallback(() => nM(s, eO.HAw.QUEST_HOVER), [s]),
        g = a.useCallback(() => nM(s, eO.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(tx.N, {
        theme: eO.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(nR.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: g,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nR.FG,
                    children: [
                        (0, r.jsxs)(v.B, {
                            className: nR.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(v.B, {
                                    className: nR.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(v.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(S.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nR.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(_.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nR.VA,
                                                    children: i,
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
    ny = s(731355),
    nU = s(621466),
    nH = s(508770),
    nD = s(406810),
    nF = s(628284),
    nq = s(65154),
    nw = s(975807),
    nP = s(58703),
    nk = s(18437),
    nB = s(398025),
    nV = s(691464);
function nW(e) {
    let [t, s] = a.useState(!1),
        n = a.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = a.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nG(e) {
    let { hero: t, contentPosition: s } = e,
        n = a.useRef(null),
        { isHovering: l, hoverProps: i } = nW(
            a.useCallback(
                (e) => {
                    (0, nl.Qg)({
                        adContentId: t.id,
                        adCreativeType: nA.p.QUEST_HOME_HERO,
                        event: e ? eO.HAw.QUEST_HOVER : eO.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, er.jO)(Z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    a.useEffect(() => {
        let e = n.current;
        (0, nU.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eR.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: u } = (0, so.z)({ hoverSpring: +!!l, config: si.config.gentle }),
        c = a.useCallback(() => {
            (0, nw.A)(t.cta.url),
                (0, nl.vK)({
                    adContentId: t.id,
                    adCreativeType: nA.p.QUEST_HOME_HERO,
                    questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: er.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(ev.D, {
        tag: "div",
        className: o()(nV.FW, nV.Bm),
        onClick: c,
        "aria-label": t.cta.buttonLabel,
        [s0]: !0,
        ...i,
        children: [
            (0, r.jsx)("div", {
                className: nV.Ve,
                children: (0, r.jsx)(e3.N, {
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
            (0, r.jsx)(si.animated.div, {
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
function nK(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        i = a.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: m } = (0, ta.A)(i, ti.A.Millis.MINUTE),
        h = a.useMemo(
            () =>
                (0, nP.uN)(
                    { days: u, hours: c, minutes: d, seconds: m },
                    { days: ej.t["Ux/De1"], hours: ej.t.Lzd5Ie, minutes: ej.t.odmpbP },
                ),
            [u, c, d, m],
        ),
        x = (0, E.bG)([tR.default], () => tR.default.getCurrentUser()),
        f = a.useMemo(() => (0, tL.mq)(s.config, x), [s.config, x]),
        j = a.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, t8.xv)(e).type) {
                        case sb.l.IN_GAME:
                            return ej.intl.string(ej.t["O/J2kr"]);
                        case sb.l.COLLECTIBLE:
                            return ej.intl.string(ej.t.Jg17Ut);
                        case sb.l.VIRTUAL_CURRENCY:
                            return ej.intl.string(ej.t.ElYQFS);
                        default:
                            return (0, tL.mq)(e, t);
                    }
                })(s.config, x),
            [s.config, x],
        ),
        { completedRatio: S, completedRatioDisplay: C } = (0, el.O9)(s),
        N = a.useMemo(() => (0, tL.wo)(s.config, x), [s.config, x]),
        p = (0, nk.tG)(),
        T = (0, nk.WS)(),
        b = (0, e2.go)(),
        { isHovering: I, hoverProps: R } = nW(
            a.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: nA.p.QUEST_HOME_HERO,
                        event: e ? eO.HAw.QUEST_HOVER : eO.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, er.jO)(Z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: M } = (0, so.z)({ hoverSpring: +!!I, config: si.config.gentle }),
        L = a.useCallback(() => {
            n(s.id),
                (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, A.r)({
                          type: O.F.CLICK_INTERNAL,
                          adCreativeType: nA.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: er.Cy.VIEW_QUESTS,
                          surfaceId: Z.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: b,
                      })
                    : p({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: nA.p.QUEST_HOME_HERO,
                          questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: er.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, p, l, b]);
    return (0, r.jsxs)(ev.D, {
        tag: "div",
        className: o()(nV.FW, nV.$R),
        onClick: L,
        "aria-label": ej.intl.string(ej.t["th2+0j"]),
        [s0]: !0,
        ...R,
        children: [
            (0, r.jsxs)(v.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nH.E, { type: { text: j } }),
                    (0, r.jsx)(si.animated.div, {
                        style: { opacity: (0, nB.a)(M.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nH.E, { type: { text: h }, icon: nD.O }),
                    }),
                ],
            }),
            (0, r.jsx)(si.animated.div, {
                className: nV.Tr,
                style: { transform: M.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tQ.A, {
                    percentComplete: S,
                    overlayText: I && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(ty.A, {
                        quest: s,
                        questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: I,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(si.animated.div, {
                className: nV.tw,
                style: {
                    opacity: (0, nB.a)(M.to([0, 1], [1, 0])),
                    transform: M.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(v.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(_.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nV.Ht,
                            children: f,
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
                                        (0, r.jsx)(nF.y, { size: "xs", color: e_.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(_.E, {
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
                                        (0, e7.pv)(s.config) === ny.Z.VIDEO
                                            ? (0, r.jsx)(nq.S, { size: "xs", color: e_.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(te._, { size: "xs", color: e_.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(_.E, {
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
            (0, r.jsx)(si.animated.div, {
                className: nV.um,
                style: { transform: M.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), L();
                    },
                    text: ej.intl.string(ej.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var nz = s(648731);
function n$(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e,
        l = (0, nn.C)();
    return (0, r.jsx)(s4, {
        className: nz.v,
        overflowAmount: 25,
        maskWidth: sJ(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsxs)(v.B, {
            className: nz.I,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            children: [
                (0, r.jsx)(e4.R, {
                    adContentId: t.id,
                    adCreativeType: nA.p.QUEST_HOME_HERO,
                    questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
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
                        e4.R,
                        {
                            adContentId: t.id,
                            adCreativeType: nA.p.QUEST_HOME_HERO,
                            questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: s + 1,
                            sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                            children: (l) =>
                                (0, r.jsx)("div", {
                                    ref: (e) => {
                                        l.current = e;
                                    },
                                    children: (0, r.jsx)(nK, {
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
var nY = s(95115);
function nJ() {
    return (0, r.jsx)("div", { className: nY.Np });
}
function nX(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = a.useRef(null);
    (0, nb.A)(n, tS.rE.QUEST_HOME_DESKTOP);
    let l = a.useMemo(() => (null != s ? (0, e1.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, r.jsxs)("div", {
              className: nY.Tv,
              children: [
                  (0, r.jsx)(nJ, {}),
                  (0, r.jsx)("div", {
                      className: nY.LO,
                      children: (0, r.jsx)("img", { className: nY.LY, src: t, alt: "" }),
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
                  (0, r.jsx)(nJ, {}),
                  (0, r.jsx)("div", {
                      className: nY.LO,
                      children: (0, r.jsx)(e3.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: n,
                          imageAsset: {
                              alt: "",
                              className: nY.LY,
                              asset: { url: l, mimetype: (0, e1.vm)(l), isAnimated: !1 },
                              assetId: l,
                          },
                          videoAsset: {
                              alt: "",
                              className: nY.LY,
                              asset: { url: s, mimetype: (0, e1.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function nZ(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        n = (0, E.bG)([eu.A], () => eu.A.quests),
        { shelfQuests: l, isShelfEnabled: i } = (0, el.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, nQ.I)();
    a.useEffect(() => {
        o();
    }, [o]);
    let u = a.useMemo(() => t.questIds?.find((e) => n.has(e)), [n, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e4.R, {
                adContentId: t.id,
                adCreativeType: nA.p.QUEST_HOME_HERO,
                questContent: Z.uF.QUEST_HOME_HERO,
                sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(nL, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, r.jsxs)(v.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, r.jsx)("img", { src: t.sponsorImage, alt: "", className: nY.wm }),
                                (0, r.jsx)(_.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nY.yu,
                                    children: ej.intl.string(ej.t.OJjFi5),
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
                                            { adContentId: t.id, adCreativeType: nA.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: Z.uF.QUEST_HOME_HERO,
                                                ctaContent: er.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != u &&
                                    (0, r.jsx)(g.$, {
                                        onClick: () => {
                                            s(u),
                                                (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                    ? (0, A.r)({
                                                          type: O.F.CLICK_INTERNAL,
                                                          adCreativeType: nA.p.QUEST_HOME_HERO,
                                                          adCreativeId: t.id,
                                                          questContentCTA: er.Cy.VIEW_QUESTS,
                                                          surfaceId: Z.uF.QUEST_HOME_HERO,
                                                          sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                                      })
                                                    : (0, nl.vK)({
                                                          adContentId: t.id,
                                                          adCreativeType: nA.p.QUEST_HOME_HERO,
                                                          questContent: Z.uF.QUEST_HOME_HERO,
                                                          questContentCTA: er.Cy.VIEW_QUESTS,
                                                          sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                                      });
                                        },
                                        size: "md",
                                        text: ej.intl.string(ej.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, r.jsx)(nX, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, r.jsx)(n$, { hero: t, shelfQuests: l, onQuestCtaClick: s }),
        ],
    });
}
function n0() {
    return (0, r.jsx)("div", { className: o()(nR.iE, nR.FG, nR.B3), children: (0, r.jsx)(ex.y, {}) });
}
var n1 = s(740879),
    n2 = s(604880),
    n7 = s(318808);
function n3(e) {
    let { adCreativeIds: t } = e,
        s = a.useCallback(() => (0, tp.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: n1.MY,
        children: [
            (0, r.jsx)("img", { className: n1.Bg, src: n7.Ay, alt: "" }),
            (0, r.jsx)("div", { className: n1.r$, children: (0, r.jsx)("img", { src: n2, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: n1.Nr,
                children: [
                    (0, r.jsx)(S.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: n1.ky,
                        children: ej.intl.string(ej.t.GXmn57),
                    }),
                    (0, r.jsx)(_.E, {
                        variant: "text-md/normal",
                        className: n1.G3,
                        children: ej.intl.string(ej.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: ej.intl.string(ej.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function n4(e) {
    let { alt: t, ariaLabel: s, ariaHidden: n, role: l, width: a = 288, height: i = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: i },
        src: "https://cdn.discordapp.com/assets/content/bcf3b3d09bc5184860051e378d0e0d815edeaffb108593db1d2bb64ae405927f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": n,
        role: l ?? "img",
    });
}
var n8 = s(298537);
let n5 = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, nn.C)(),
        { useNewTile: n } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = es.Mk.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        i = a.useRef(null),
        o = l === es.d.LARGE_MASK_MARGIN,
        u = sf(i, sX(s, o), 20, 3);
    return (0, r.jsxs)(v.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: n8.kL,
        ref: i,
        children: [
            (0, r.jsxs)(S.D, {
                variant: "heading-lg/medium",
                children: [ej.intl.string(ej.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(v.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: n8.y7,
                      children: [
                          (0, r.jsx)(n4, { alt: ej.intl.string(ej.t["Xe+fJM"]) }),
                          (0, r.jsxs)(v.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(S.D, {
                                      variant: "heading-lg/medium",
                                      children: ej.intl.string(ej.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(S.D, {
                                      variant: "heading-sm/medium",
                                      children: ej.intl.string(ej.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: n8.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${sX(s, o)}px`,
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
                                            className: n8.d,
                                            sourceQuestContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        eJ.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n8.d,
                                            sourceQuestContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var n6 = s(111956),
    n9 = s.n(n6),
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
        ].filter(t7.Vq);
    },
    sortType: le.r.JARO_WINKLER,
    throttleMs: 200,
};
var ll = s(758836),
    lr = s(613057),
    la = s(935824);
let li = a.createContext({});
function lo(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: i, scrollerRef: o } = a.useContext(li);
    return (0, r.jsxs)(e6.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(B.A, {
                onScroll: i,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(P.A, { className: la.Jo, innerClassName: la.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lu(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(k.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function lc(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: n } = (0, G.Z)({ location: tS.rE.QUEST_HOME_DESKTOP }),
        l = (0, E.bG)([T.Ay], () => T.Ay.useReducedMotion),
        i = (0, E.bG)([z.A], () => z.A.isFocused()),
        { ref: o, inViewport: u } = (0, t2.p)(),
        c = a.useRef(null);
    if (
        (a.useEffect(() => {
            c?.current != null &&
                (c.current.paused || (i && u && !l)
                    ? c.current.paused && !l && u && i && c.current.play()
                    : c.current.pause());
        }, [l, u, i]),
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
function ld(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, G.Z)({ location: tS.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsxs)("div", {
        className: o()(la.Tv, { [la.lJ]: s }),
        children: [
            (0, r.jsx)(nJ, {}),
            (0, r.jsx)("div", { className: o()(la.nz, { [la.ZZ]: s }) }),
            (0, r.jsx)(lc, { onLoadComplete: t, className: o()(la.Fe, { [la.H4]: s, [la.Q8]: !s }) }),
        ],
    });
}
function lm(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, G.Z)({ location: tS.rE.QUEST_HOME_DESKTOP }),
        n = a.useCallback(() => {
            s ? window.open(eO.X7G.PAID_TERMS_ORBS) : window.open(J.A.getArticleURL(eO.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(nL, {
        adContentId: s ? tS.yr : tS.uz,
        title: s ? ej.intl.format(ej.t.BCBIlp, {}) : ej.intl.format(ej.t.lmMBfy, {}),
        subtitle: s ? ej.intl.format(ej.t.U9FY0J, {}) : ej.intl.string(ej.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(f.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: ej.intl.string(ej.t["1Wm127"]),
                          onClick: () =>
                              (0, L.Cz)({
                                  tab: ll.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: b.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: ej.intl.string(ej.t["7kTAgJ"]),
                          onClick: n,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: ej.intl.string(ej.t.hvVgAZ),
                  onClick: n,
                  icon: j.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(ld, { onAssetLoad: t }),
    });
}
function lE(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: a } = e;
    return (0, r.jsx)("div", {
        className: o()(la.iS, { [la.R]: a }),
        children: l
            ? (0, r.jsx)(n0, {})
            : null != n
              ? (0, r.jsx)(nZ, { hero: n, onQuestCtaClick: s })
              : (0, r.jsx)(lm, { onAssetLoad: t }),
    });
}
function lh(e) {
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
let lx = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = a.useMemo(() => (0, V.B)(s.pathname, eO.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        i = a.useMemo(() => new URLSearchParams(s.search).getAll(el.L1.AD_CREATIVE_IDS), [s.search]),
        x = (m.Fr || m.v1) && i.length > 0,
        f = (0, E.bG)([M.A], () => M.A.getState("quests")),
        {
            selectedTab: j,
            onSelectTab: T,
            tabs: y,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = ee.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, el.p5)(),
                { enabled: r } = es.A8.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: i } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
                o = r || i;
            a.useEffect(() => {
                ee.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = a.useCallback((e) => {
                ee.A.getState().setTab(e);
            }, []);
            return {
                tabs: a.useMemo(
                    () =>
                        [
                            { id: el.NC.ALL, label: o ? ej.intl.string(ej.t.Jt6u7B) : ej.intl.string(ej.t["0SzXmi"]) },
                            t
                                ? {
                                      id: el.NC.CLAIMED,
                                      label: o ? ej.intl.string(ej.t["3TVY/R"]) : ej.intl.string(ej.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: el.NC.PREVIEW_TOOL, label: ej.intl.string(ej.t.BDUDau) } : null,
                        ].filter(t7.Vq),
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
            let [e, t] = a.useState(""),
                [s, n] = a.useState(null),
                l = (0, E.yK)([eu.A], () =>
                    (0, el.mn)(Array.from(eu.A.quests.values()), { sortMethod: tS.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                i = "" !== r,
                o = a.useMemo(() => n9()(nl.gr, 1e3), []),
                u = a.useCallback(() => {
                    o.cancel();
                    let e = (0, ls.tv)();
                    null != e &&
                        (0, nl.XH)({
                            searchSessionId: e.uuid,
                            searchSessionDurationMs: Date.now() - e.createdAtTimestamp,
                        }),
                        (0, ls.l6)();
                }, [o]),
                c = a.useCallback(() => {
                    u(), t("");
                }, [u]);
            a.useEffect(
                () => () => {
                    u();
                },
                [u],
            );
            let d = a.useCallback(
                (e) => {
                    if (
                        (n(
                            i
                                ? e
                                      .map((e) => {
                                          let { id: t } = e;
                                          return t;
                                      })
                                      .filter(t7.Vq)
                                : null,
                        ),
                        i)
                    ) {
                        let { searchSession: t, isNew: s } = (0, ls.$N)();
                        s && (0, nl.OQ)({ searchSessionId: t.uuid }),
                            o({
                                searchSessionId: t.uuid,
                                searchQuery: r,
                                searchQueryLength: r.length,
                                resultsCount: e.length,
                                hasResults: e.length > 0,
                            });
                    } else c();
                },
                [i, r, o, c],
            );
            return (0, lt.RT)(r, l, d, ln), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c };
        })();
    a.useLayoutEffect(() => {
        l && j === el.NC.CLAIMED && ee.A.setState({ tab: el.NC.ALL });
    }, [l, j]);
    let { onScroll: B } = (0, q.G)(),
        z = et.A.getState().getUtmCurrentContext(),
        Y = np((e) => e.registerAssetLoad),
        J = a.useRef(z);
    a.useEffect(() => {
        J.current = z;
    }),
        a.useEffect(() => {
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
    let { enabled: ei } = (0, G.Z)({ location: tS.rE.QUEST_HOME_DESKTOP });
    (0, Q.HU)({ location: ej.intl.string(ej.t.JALI2K) });
    let eo = a.useRef(null),
        { enabled: ec, variant: ed } = es.A8.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: em } = es.aD.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        eE = ec || em,
        eh = (ec && ed === es.zY.NEW_LAYOUT_WITH_SEARCH) || em,
        ex = a.useRef(null),
        ef = a.useCallback((e) => {
            ex.current?.scrollToQuest(e);
        }, []),
        eg = a.useMemo(() => ((0, X.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: eS, isLoading: e_ } = (0, ea.lg)(i[0] ?? null),
        eC = a.useCallback(() => {
            (0, W.Y)({
                pageType: eO.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eO.JJy.ORBS_BALANCE_MENU,
                ctaObject: eO.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, L.Cz)({ tab: ll.G2.ORBS, analyticsLocations: [], analyticsSource: b.A.ORBS_BALANCE_MENU });
        }, []);
    a.useEffect(() => {
        (0, p.I)(eO.BVt.QUEST_HOME);
    }, []),
        a.useEffect(() => {
            F.trigger();
        }, []),
        a.useEffect(() => {
            if (x || null != f) return;
            let e = new URLSearchParams(s.search),
                l = e.get(el.L1.TAB);
            if (l === el.NC.PREVIEW_TOOL) {
                let t = e.get(el.L1.QUEST_ID);
                R.A.openNativeAppModal("quests", eO.e$_.DEEP_LINK, {
                    type: lr.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== el.NC.PREVIEW_TOOL) {
                let t = (0, X.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(el.L1.SORT),
                    r = e.get(el.L1.FILTER),
                    a = e.get(el.L1.AD_CREATIVE_IDS);
                R.A.openNativeAppModal("quests", eO.e$_.DEEP_LINK, {
                    type: lr.XK.QUEST_HOME,
                    params: { questId: (0, X.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: a },
                });
            }
        }, [s.search, f, n.action, s.hash, t, x]),
        a.useEffect(() => {
            t && (0, U.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let ev = a.useCallback(() => {
            (0, tp.navigateToQuestHome)({ fromContent: Z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_page")
                    ? (0, A.r)({
                          type: O.F.CLICK_INTERNAL,
                          questContentCTA: er.Cy.VIEW_QUESTS,
                          surfaceId: Z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER,
                          sourceQuestContent: Z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER,
                          isTargeted: !1,
                      })
                    : $.default.track(eO.HAw.QUEST_CONTENT_CLICKED, {
                          cta_name: er.Cy.VIEW_QUESTS,
                          click_id: (0, c.A)(),
                          is_targeted: !1,
                          ...(0, er.fF)(Z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                      });
        }, []),
        eN = a.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), eo.current?.scrollToTop({ animate: !1 }), T(e), k();
            },
            [n, T, k],
        ),
        ep = a.useMemo(() => null != P && eh, [P, eh]),
        eT = a.useMemo(() => ({ onAssetLoadComplete: Y }), [Y]),
        eA = a.useMemo(() => ({ onScroll: B, scrollerRef: eo }), [B, eo]),
        eb = (0, es.Qj)() && 0 === i.length;
    return x
        ? (0, r.jsx)(n3, { adCreativeIds: i })
        : (0, r.jsx)(nT.M.Provider, {
              value: eT,
              children: (0, r.jsx)(li.Provider, {
                  value: eA,
                  children: (0, r.jsx)("div", {
                      className: o()(la.kL, { [la.KY]: !t }),
                      children: l
                          ? (0, r.jsx)(lo, {
                                withFullBleedBanner: !0,
                                header: (0, r.jsx)(lu, { selectedTab: j, onSelectTab: eN, tabs: y }),
                                banner: (0, r.jsx)(w.A, {
                                    title: ej.intl.string(ej.t.z8YP2A),
                                    titleColor: "always-white",
                                    button: (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: ej.intl.string(ej.t.GURBQl),
                                        onClick: ev,
                                    }),
                                    className: la.Gj,
                                    children: (0, r.jsx)(lh, { onLoadComplete: Y }),
                                }),
                                children: (0, r.jsxs)("div", {
                                    className: la.kj,
                                    children: [
                                        (0, r.jsx)(S.D, {
                                            variant: "heading-xl/semibold",
                                            children: ej.intl.string(ej.t.z8YP2A),
                                        }),
                                        (0, r.jsx)(_.E, {
                                            color: "text-subtle",
                                            variant: "text-md/normal",
                                            children: ej.intl.string(ej.t.HdKh65),
                                        }),
                                        (0, r.jsx)(C.Q, {
                                            text: ej.intl.string(ej.t["1CdL8d"]),
                                            onClick: ev,
                                            textVariant: "text-md/normal",
                                            variant: "primary",
                                        }),
                                    ],
                                }),
                            })
                          : (0, r.jsxs)(lo, {
                                header: (0, r.jsx)(lu, {
                                    selectedTab: j,
                                    onSelectTab: eN,
                                    tabs: y,
                                    endContent: (0, r.jsxs)(v.B, {
                                        gap: 8,
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "end",
                                        children: [
                                            eh &&
                                                (0, r.jsx)(N.I, {
                                                    query: H,
                                                    onChange: D,
                                                    placeholder: ej.intl.string(ej.t.y10TI2),
                                                    onClear: k,
                                                    size: "sm",
                                                }),
                                            ei &&
                                                (0, r.jsx)(K.SS, {
                                                    analyticsPage: eO.liQ.GLOBAL_DISCOVERY_QUESTS,
                                                    cardAlignment: K.cP.END,
                                                    ctaText: ej.intl.string(ej.t["J+vlIR"]),
                                                    ctaOnClick: eC,
                                                }),
                                        ],
                                    }),
                                }),
                                banner:
                                    j === el.NC.ALL &&
                                    !eb &&
                                    (0, r.jsx)(lE, {
                                        onAssetLoad: Y,
                                        onQuestCtaClick: ef,
                                        hasSearchResults: ep,
                                        questHomeHero: eS,
                                        isLoadingQuestHomeHero: e_,
                                    }),
                                children: [
                                    ep && null != P && (0, r.jsx)(n5, { matchingQuestIds: P }),
                                    j === el.NC.CLAIMED
                                        ? (0, r.jsx)(sW, { onSelectTab: eN, className: ep ? la.R : void 0 })
                                        : j === el.NC.PREVIEW_TOOL
                                          ? (0, r.jsx)(t1, { className: ep ? la.R : void 0 })
                                          : eE
                                            ? (0, r.jsx)(n_, {
                                                  className: ep ? la.R : void 0,
                                                  ref: ex,
                                                  deepLinkedQuestId: eg,
                                                  isLoadingQuestHomeHero: !eb && e_,
                                                  withQuestHomeHero: !eb,
                                              })
                                            : (0, r.jsx)(sA, { ref: ex }),
                                ],
                            }),
                  }),
              }),
          });
};
