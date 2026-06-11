let n;
s.r(t), s.d(t, { default: () => lu }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    a = s(64700),
    i = s(503698),
    o = s.n(i),
    c = s(873263),
    u = s(835245),
    d = s(562708),
    m = s(607399),
    h = s(17928),
    E = s(554146),
    x = s(577473),
    g = s(825484),
    f = s(821609),
    j = s(509434),
    v = s(534514),
    S = s(834730),
    C = s(123292),
    _ = s(331322),
    N = s(892547),
    p = s(944791),
    T = s(775602),
    A = s(793574),
    O = s(139286),
    b = s(197111),
    R = s(10088),
    I = s(859040),
    M = s(726249),
    L = s(607470),
    y = s(826673),
    Q = s(840251),
    U = s(688151);
let D = new Q.E([], U.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var H = s(711111),
    w = s(701508),
    q = s(979590),
    F = s(749638),
    P = s(783531),
    k = s(334465),
    B = s(318346),
    W = s(371446),
    V = s(70926),
    G = s(531685),
    K = s(174459),
    z = s(676279),
    $ = s(975571),
    Y = s(240248),
    J = s(507107),
    Z = s(631001),
    X = s(87549),
    ee = s(192444),
    et = s(31587),
    es = s(590202);
s(321073);
var en = s(228366),
    el = s(340124),
    er = s(859703);
s(667532);
var ea = s(783878),
    ei = s(408278),
    eo = s(663417),
    ec = s(922016),
    eu = s(624479),
    ed = s(289873),
    em = s(416052),
    eh = s(417098),
    eE = s(375708);
let ex = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(eh.$T, {
        color: eh.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : eE.intl.string(eE.t.ZErSg5) }),
    });
};
var eg = s(661531),
    ef = s(602853),
    ej = s(939249),
    ev = s(817281),
    eS = s(688810),
    eC = s(487245),
    e_ = s(363195),
    eN = s(652215),
    ep = s(398876);
let eT = function () {
    let { analyticsLocations: e } = (0, eS.Ay)(),
        t = (0, h.bG)([e_.A], () => e_.A.theme),
        s = a.useRef(null);
    a.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, ef.r)(eg.A.colors.BACKGROUND_BASE_LOW, eN.NJ8.LIGHT),
        l = (0, ef.r)(eg.A.colors.BACKGROUND_BASE_LOW, eN.NJ8.DARKER),
        i = (0, ef.r)(eg.A.colors.BACKGROUND_BASE_LOW, eN.NJ8.MIDNIGHT),
        o = a.useMemo(
            () => [
                { theme: eN.NJ8.LIGHT, label: eE.t.K2sFfo, color: n.hex() },
                { theme: eN.NJ8.DARKER, label: eE.t.b8Cei3, color: l.hex() },
                { theme: eN.NJ8.MIDNIGHT, label: eE.t.Do4ZJx, color: i.hex() },
            ],
            [n, l, i],
        ),
        c = a.useCallback(
            (t) => {
                (0, eC.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, ev.u_)({ theme: t });
            },
            [e],
        ),
        u = a.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, r.jsx)("div", {
        className: ep.N,
        children: (0, r.jsxs)("div", {
            className: ep.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        ej.D,
                        {
                            tag: "div",
                            className: ep.Du,
                            onClick: () => c(e.theme),
                            "aria-label": eE.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${ep.WT} ${t === e.theme ? ep.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: ep.i, children: eE.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(ei.K, {
                    onClick: u,
                    "aria-label": eE.intl.string(eE.t.yBZMsQ),
                    icon: eo.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eA = s(818348),
    eO = s(60857);
let eb = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [i, o] = a.useState(!1),
        [c, u] = a.useState(!1),
        d = a.useRef(null),
        m = (0, et.pT)(),
        E = (0, h.bG)([er.A], () => (null != t ? er.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, h.bG)([er.A], () => null != t && er.A.isFetchingQuestPreview(t), [t]),
        j = a.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [m, t]),
        v = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, el.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, el.UZ)(t);
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
                    await (0, el.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = a.useCallback(
            (e) => {
                (0, Y.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: eO.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: eO.Br,
                    children: (0, r.jsxs)("div", {
                        className: eO.bo,
                        children: [
                            (0, r.jsx)(eT, {}),
                            (0, r.jsxs)("div", {
                                className: eO.b8,
                                children: [
                                    (0, r.jsx)(
                                        ea.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: _,
                                            placeholder: eE.intl.string(eE.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, Y.uJ)(t?.trim())) return e;
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
                                    (0, r.jsx)(ei.K, {
                                        onClick: l,
                                        "aria-label": eE.intl.string(eE.t.wzzjk9),
                                        icon: eo.f,
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
                    className: eO.in,
                    children: (0, r.jsxs)(g.e, {
                        className: eO.xv,
                        children: [
                            (0, r.jsx)(f.$, {
                                onClick: v,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eE.intl.string(eE.t.jQEfRT),
                            }),
                            (0, r.jsx)(f.$, {
                                onClick: S,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eE.intl.string(eE.t.taqkwK),
                            }),
                            (0, r.jsx)(f.$, {
                                onClick: C,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eE.intl.string(eE.t.cKSLr4),
                            }),
                            (0, r.jsx)(ec.Y, {
                                targetElementRef: d,
                                shouldShow: c,
                                onRequestClose: () => u(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: eO.PP,
                                        children: (0, r.jsx)("div", {
                                            className: eO.sH,
                                            children: (0, r.jsx)(em.A, {
                                                value: eA.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eE.intl.string(eE.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(ei.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => u(!c),
                                        "aria-label": eE.intl.string(eE.t.rNGQfD),
                                        icon: eu.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != E ? (0, r.jsx)(ex, { error: E }) : null,
            x ? (0, r.jsx)(ed.y, {}) : null,
        ],
    });
};
var eR = s(364522),
    eI = s(761508),
    eM = s(797788);
let eL = () => (0, r.jsx)("div", { className: eM.y });
var ey = s(834615),
    eQ = s(332544);
let eU = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(v.D, {
                    className: eQ.R_,
                    variant: "heading-md/semibold",
                    children: eE.intl.string(eE.t.L2mlUb),
                }),
                (0, r.jsx)(ey.A, { quest: t }),
            ],
        }),
    });
};
var eD = s(241124),
    eH = s(743407),
    ew = s(717695),
    eq = s(763578),
    eF = s(111113);
let eP = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eq.wp,
            children: [
                (0, r.jsx)(v.D, {
                    className: eq.Oo,
                    variant: "heading-md/semibold",
                    children: eE.intl.string(eE.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eq.RE,
                    children: (0, r.jsx)("div", {
                        className: eq.Z,
                        children: (0, r.jsx)("div", {
                            className: eF.C3,
                            children: (0, r.jsx)(ew.A, {
                                children: (0, r.jsx)(eD.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, r.jsx)(eH.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ek = s(961974);
let eB = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(v.D, {
                    className: eQ.R_,
                    variant: "heading-md/semibold",
                    children: eE.intl.string(eE.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: eQ.YT,
                    children: (0, r.jsx)(ek.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eW = s(711038),
    eV = s(330034);
let eG = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(v.D, { variant: "heading-md/semibold", children: eE.intl.string(eE.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: eV.wu,
                    children: (0, r.jsx)("span", { className: eV.cy, children: eE.intl.string(eE.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: eV.oU,
                    children: (0, r.jsx)("div", {
                        className: eV.zx,
                        children: (0, r.jsx)("div", {
                            className: eV.Lj,
                            children: (0, r.jsx)("div", {
                                className: eV.n0,
                                children: (0, r.jsx)(eW.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eK = s(19809),
    ez = s(173936),
    e$ = s(365199),
    eY = s(743674),
    eJ = s(551875),
    eZ = s(971649),
    eX = s(814793),
    e0 = s(415441),
    e1 = s(73473),
    e2 = s(270045),
    e7 = s(371912),
    e3 = s(79545),
    e8 = s(321503),
    e4 = s(720875),
    e5 = s(687966),
    e6 = s(782134),
    e9 = s(271536),
    te = s(768622),
    tt = s(793934),
    ts = s(662940),
    tn = s(496431),
    tl = s(927813);
let tr = 2 * tl.A.Millis.DAY;
var ta = s(719021);
function ti(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, e3.Pd)(t),
        l = (0, et.fc)(t),
        i = (0, et.I3)(t),
        c = a.useMemo(() => (0, ts.Dd)(t.config, n), [t.config, n]),
        u = a.useMemo(() => (0, ts.CK)(n, l, i), [n, l, i]),
        d = (function (e) {
            let t = (0, e3.Pd)(e),
                [s] = a.useState(() => Date.now()),
                n = a.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case e3.UA.UNENROLLED:
                            case e3.UA.ENROLLED:
                            case e3.UA.INCOMPLETE:
                                return !0;
                            case e3.UA.COMPLETED:
                            case e3.UA.CLAIMED:
                            case e3.UA.EXPIRED:
                            case e3.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < tr &&
                    l > 0,
                { days: i, hours: o, minutes: c, seconds: u } = (0, tn.A)(n, tl.A.Millis.SECOND, void 0, !r);
            return r && (0 !== i || 0 !== o || 0 !== c || 0 !== u)
                ? `${String(24 * i + o).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(u).padStart(2, "0")}`
                : null;
        })(t),
        m = null != d ? d : c;
    return (0, r.jsxs)("div", {
        className: o()(ta.fC, { [ta.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: ta.qS,
                children: [
                    null != m &&
                        (0, r.jsx)(S.E, {
                            variant: "text-xs/semibold",
                            className: ta.SJ,
                            color: "always-white",
                            children: m,
                        }),
                    null != m &&
                        null != u &&
                        (0, r.jsx)(S.E, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            className: ta.If,
                            children: "\u2022",
                        }),
                    null != u &&
                        (0, r.jsxs)("span", {
                            className: ta.BA,
                            children: [
                                (function (e) {
                                    let t = { size: "xxs", className: ta.rF, color: "currentColor" };
                                    switch ((0, ts.pv)(e)) {
                                        case ts.UK.PLAY:
                                            return (0, r.jsx)(e5._, { ...t });
                                        case ts.UK.WATCH:
                                            return (0, r.jsx)(e6.u, { ...t });
                                        case ts.UK.ACTIVITY:
                                            return (0, r.jsx)(e9.q, { ...t });
                                        case ts.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(te.g, { ...t });
                                        case ts.UK.ARENA:
                                            return (0, r.jsx)(tt.q, { ...t });
                                    }
                                })(t),
                                (0, r.jsx)(S.E, {
                                    variant: "text-xs/semibold",
                                    tag: "span",
                                    color: "always-white",
                                    children: u,
                                }),
                            ],
                        }),
                ],
            }),
            t.preview &&
                (0, r.jsx)("div", {
                    className: o()(ta.qS, ta.WZ),
                    children: (0, r.jsx)(S.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: eE.intl.string(eE.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var to = s(409626),
    tc = s(629455),
    tu = s(646917),
    td = s(990078),
    tm = s(43990),
    th = s(743368),
    tE = s(792620),
    tx = s(192551),
    tg = s(190107),
    tf = s(919500);
function tj(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: a } = e,
        i = (0, e3.Pd)(t),
        { ctaOnHover: c } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        u = i === e3.UA.EXPIRED || (i === e3.UA.CLAIMED && (0, tE.GL)(t)),
        d = (0, et.do)({ quest: t, content: s, ctaContent: es.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tf.lO, { [tf.Fq]: l || !c }),
        children: (0, r.jsx)("div", {
            className: tf.mv,
            children: (0, r.jsx)(tm.N, {
                theme: eN.NJ8.DARK,
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
                                u || a
                                    ? (0, r.jsx)(f.$, {
                                          variant: "secondary",
                                          text: t.config.ctaConfig.buttonLabel,
                                          onClick: d,
                                      })
                                    : (0, r.jsx)(td.m, {
                                          text: eE.intl.string(eE.t.LLLLPD),
                                          position: "top",
                                          align: "center",
                                          ariaHidden: !0,
                                          children: (0, r.jsx)(ei.K, {
                                              variant: "secondary",
                                              icon: th.W,
                                              "aria-label": eE.intl.string(eE.t.LLLLPD),
                                              onClick: d,
                                          }),
                                      }),
                                !u &&
                                    (0, r.jsx)(tx.A, {
                                        quest: t,
                                        surface: e3.V3.QUEST_HOME_TILE_V2_FOOTER,
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
    tS = s(576761),
    tC = s(617986),
    t_ = s(646440);
function tN(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, et.ZP)(s),
        a = (0, tS.B9)(n);
    if (null == l) return null;
    let i = a
        ? eE.intl.formatToPlainString(eE.t.l2UfLG, { bonusOrbMultiplier: l })
        : eE.intl.formatToPlainString(eE.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(ej.D, {
        onClick: () => {
            (0, tC.gC)(l, n), t?.();
        },
        "aria-label": i,
        children: (0, r.jsxs)("div", {
            className: t_.k,
            children: [
                (0, r.jsx)(tv.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(S.E, { variant: "text-sm/normal", color: "currentColor", className: t_.Q, children: i }),
            ],
        }),
    });
}
var tp = s(947641),
    tT = s(194261),
    tA = s(106799),
    tO = s(287809),
    tb = s(710969),
    tR = s(801365),
    tI = s(453384),
    tM = s(646764),
    tL = s(269999);
function ty(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        a = (0, h.bG)([tO.default], () => tO.default.getCurrentUser()),
        i = (0, tR.mq)(t.config, a),
        o = (0, tR.ks)(t.config),
        c = (0, tR.wo)(t.config, a),
        u = (0, tR.l0)(t.config, a),
        d =
            null != c
                ? c > 700 * u
                    ? eJ.i2.TIER_4
                    : c > 200 * u
                      ? eJ.i2.TIER_3
                      : c > 100 * u
                        ? eJ.i2.TIER_2
                        : eJ.i2.TIER_1
                : void 0,
        { completedRatio: m } = (0, et.O9)(t),
        E = t.userStatus?.claimedAt != null,
        x = (0, tb.Ic)(t),
        g = t.userStatus?.enrolledAt == null,
        f = E ? "completed" : x ? "expired" : null,
        j = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tM.A, {
                    quest: t,
                    orbTier: d,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: tL.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === f &&
                    (0, r.jsx)("div", {
                        className: tL.EY,
                        children: (0, r.jsx)(tp.r, { className: tL.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === f &&
                    (0, r.jsx)("div", {
                        className: tL.EY,
                        children: (0, r.jsx)(tT.X, { size: "sm", className: tL.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: tL.CZ,
        children: [
            (0, r.jsx)("div", {
                className: tL.tE,
                children: g
                    ? (0, r.jsx)("div", { className: tL.fm, children: j })
                    : (0, r.jsx)(tI.A, {
                          size: 74,
                          percentComplete: m,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: tL.n5, children: j }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: tL.FS,
                children: [
                    (0, r.jsx)(S.E, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        className: tL.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: tL.oV,
                        children: [
                            o && (0, r.jsx)(tA.A, { className: tL.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                S.E,
                                {
                                    variant: "text-lg/medium",
                                    className: tL.zN,
                                    color: "always-white",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: o ? c : i,
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
function tU(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: i } = e,
        c = a.useRef(null),
        u = (0, tc.A9)(t, i, tg.rE.QUEST_HOME_DESKTOP, to.Ob.QuestHome, c),
        d = (0, tu.z)(),
        m = (0, et.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: c,
        children: [
            (0, r.jsx)(ty, { quest: t, questContent: s, sourceQuestContent: i, isHovering: n }),
            (0, r.jsxs)("div", {
                className: tQ.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: tQ.Wi,
                        children: [
                            (0, r.jsx)(S.E, {
                                variant: "text-sm/normal",
                                className: o()(tQ.Wj, tQ.h_, { [tQ.C4]: n }),
                                children: u,
                            }),
                            (0, r.jsx)(S.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(tQ.Wj, tQ.XV, { [tQ.Hz]: n }),
                                children: u,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tQ.Gv,
                        children: [
                            (0, r.jsx)(S.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: eE.intl.string(eE.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(S.E, {
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
            (0, r.jsx)(tj, { quest: t, questContent: s, sourceQuestContent: i, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var tD = s(688755),
    tH = s(831368),
    tw = s(547032);
function tq(e) {
    let {
            quest: t,
            questContent: s,
            isInFeaturedSection: n,
            className: l,
            contentPosition: i,
            rowIndex: c,
            eagerLoadAssets: u,
            impressionRef: d,
            sourceQuestContent: m,
        } = e,
        h = a.useMemo(() => (0, eJ.tW)(t, eJ.fY.QUEST_BAR_HERO_IMAGE), [t]),
        E = a.useMemo(() => (0, eJ.tW)(t, eJ.fY.QUEST_BAR_HERO_VIDEO), [t]),
        x = a.useMemo(() => (null != h ? (0, eJ.UX)(h.url, { format: "webp", width: 32, height: 32 }) : null), [h]),
        g = (0, eY.S)(x),
        f = a.useMemo(() => (null != g ? { "--quest-scrim-color": g } : void 0), [g]),
        {
            isActive: j,
            shouldRender: v,
            hoverHandlers: S,
            handleMenuOpen: C,
            handleMenuClose: _,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400,
                [t, s] = a.useState(!1),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(!1),
                o = a.useRef(!1),
                c = a.useRef(!1),
                u = a.useRef(null),
                d = a.useRef(null),
                m = () => {
                    null != u.current && (cancelAnimationFrame(u.current), (u.current = null));
                },
                h = () => {
                    null != d.current && (clearTimeout(d.current), (d.current = null));
                },
                E = a.useCallback(() => {
                    h(),
                        l(!0),
                        m(),
                        (u.current = requestAnimationFrame(() => {
                            u.current = requestAnimationFrame(() => {
                                (u.current = null), s(!0);
                            });
                        }));
                }, []),
                x = a.useCallback(() => {
                    m(),
                        s(!1),
                        h(),
                        (d.current = setTimeout(() => {
                            (d.current = null), l(!1);
                        }, e));
                }, [e]),
                g = a.useCallback(() => i(!0), []),
                f = a.useCallback(() => {
                    i(!1), o.current || c.current || x();
                }, [x]),
                j = a.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            (o.current = !0), E();
                        },
                        onMouseLeave: () => {
                            (o.current = !1), r || x();
                        },
                        onFocus: () => {
                            (c.current = !0), E();
                        },
                        onBlur: () => {
                            (c.current = !1), r || x();
                        },
                    }),
                    [E, x, r],
                );
            return (
                a.useEffect(
                    () => () => {
                        m(), h();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: j, handleMenuOpen: g, handleMenuClose: f }
            );
        })(),
        N = (0, e3.Pd)(t),
        p = (0, eZ.go)(),
        T = (0, eX.E0)(t.config),
        A = a.useContext(e8.X),
        { visibilityElementRef: O, almostVisibleInViewport: b } = (0, tH.I)(
            A?.current?.getScrollerNode() ?? null,
            u ?? !1,
        ),
        {
            handleHoverStart: R,
            handleHoverEnd: I,
            isEventWithinParent: M,
        } = (0, tD.B)({ quest: t, questContent: s, contentPosition: i, rowIndex: c, sourceQuestContent: m }),
        L = (0, e7.Lk)({
            isShareable: T,
            questId: t.id,
            trackingCtx: a.useMemo(
                () => ({
                    content: s,
                    ctaContent: es.Cy.CONTEXT_MENU_COPY_LINK,
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
        "aria-label": eE.intl.formatToPlainString(eE.t.EAYZAr, { questName: t.config.messages.questName }),
        className: o()(tw.kL, { [tw.iR]: n, [tw.DM]: j }, l),
        style: f,
        onMouseEnter: () => {
            S.onMouseEnter(), R();
        },
        onMouseLeave: () => {
            S.onMouseLeave(), I();
        },
        onFocus: (e) => {
            M(e) || (S.onFocus(), R());
        },
        onBlur: (e) => {
            M(e) || (S.onBlur(), I());
        },
        children: [
            (0, r.jsx)(e4.A, {
                showPlaceholder: !b,
                width: 600,
                height: 450,
                className: tw.Tv,
                children: (0, r.jsx)(e0.N, {
                    imageAsset:
                        null != h
                            ? { asset: h, assetId: "QuestTileV2", alt: eE.intl.string(eE.t.jnijWz), className: tw.Tv }
                            : void 0,
                    videoAsset:
                        null != E
                            ? {
                                  asset: E,
                                  assetId: "QuestTileV2_heroAnimated",
                                  className: o()(tw.Tv, tw.gJ, { [tw.C7]: j }),
                              }
                            : void 0,
                    imageSize: { width: 600, height: 450 },
                    showVideo: v,
                }),
            }),
            (0, r.jsx)("div", { className: o()(tw.sL, { [tw.Mq]: N === e3.UA.EXPIRED }) }),
            (0, r.jsx)("div", { className: o()(tw.f5, tw.Cm) }),
            (0, r.jsx)("div", { className: o()(tw.f5, tw.sr) }),
            (0, r.jsxs)("div", {
                className: tw.wx,
                children: [
                    (0, r.jsx)(ti, { quest: t, isHovering: j }),
                    (0, r.jsxs)("div", {
                        className: o()(tw.$s, { [tw.rk]: j }),
                        children: [
                            n &&
                                T &&
                                (0, r.jsx)(ej.D, {
                                    tag: "div",
                                    className: tw.E9,
                                    onClick: L,
                                    "aria-label": eE.intl.string(eE.t.WqhZss),
                                    children: (0, r.jsx)(ez.q, { size: "sm", color: "currentColor" }),
                                }),
                            (0, r.jsx)(e2.C, {
                                questContent: s,
                                quest: t,
                                hideLearnMore: !0,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                sourceQuestContent: m,
                                onOpen: C,
                                onClose: _,
                                children: (e) =>
                                    (0, r.jsx)(ej.D, {
                                        ...e,
                                        tag: "div",
                                        className: tw.E9,
                                        "aria-label": eE.intl.string(eE.t.DEoVWZ),
                                        children: (0, r.jsx)(e$.j, { size: "sm", color: "currentColor" }),
                                    }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tU, { quest: t, questContent: s, isInFeaturedSection: n, isHovering: j, sourceQuestContent: m }),
        ],
    });
}
let tF = a.memo(function (e) {
        let t = (0, h.bG)([er.A], () => (null != e.questId ? er.A.getQuest(e.questId) : void 0), [e.questId]),
            s = a.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
        return null == s
            ? null
            : (0, r.jsx)(e1.R, {
                  questOrQuests: s,
                  questContent: e.questContent,
                  questContentPosition: e.contentPosition,
                  questContentRowIndex: e.rowIndex,
                  trackGuildAndChannelMetadata: e.questContent === J.uF.QUESTS_EMBED,
                  sourceQuestContent: e.sourceQuestContent,
                  children: (t) => (0, r.jsx)(tq, { ...e, quest: s, impressionRef: t }),
              });
    }),
    tP = (e) => {
        let { quest: t } = e,
            { useNewTile: s } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP });
        return (0, r.jsx)("div", {
            className: eQ.x3,
            children: (0, r.jsxs)("div", {
                className: eQ.B0,
                children: [
                    (0, r.jsx)(v.D, {
                        className: eQ.R_,
                        variant: "heading-md/semibold",
                        children: eE.intl.string(eE.t["5wnpF3"]),
                    }),
                    s
                        ? (0, r.jsx)(tF, {
                              className: eQ.d,
                              quest: t,
                              questContent: J.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: J.uF.INTERNAL_PREVIEW_TOOL,
                          })
                        : (0, r.jsx)(eK.Ay, {
                              className: eQ.d,
                              quest: t,
                              questContent: J.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: J.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                ],
            }),
        });
    };
var tk = s(97808),
    tB = s(778712),
    tW = s(87664),
    tV = s(427262),
    tG = s(198525),
    tK = s(66176);
let tz = function (e) {
        let { quest: t } = e,
            [s, n] = a.useState(!1),
            l = a.useRef(null),
            i = (0, h.bG)([tO.default], () => tO.default.getCurrentUser()),
            c = tV.Ay.useName(i),
            u = (0, tW.A)(i?.id),
            d = a.useCallback(
                (e) =>
                    (0, r.jsx)(tG.A, {
                        name: c,
                        quest: t,
                        memberListItemRef: l,
                        applicationStream: u,
                        ...e,
                        closePopout: () => {
                            n(!1);
                        },
                    }),
                [t, u, c],
            );
        return (0, r.jsx)("div", {
            className: eQ.x3,
            children: (0, r.jsxs)("div", {
                className: eQ.B0,
                children: [
                    (0, r.jsx)(v.D, {
                        className: tK.R_,
                        variant: "heading-md/semibold",
                        children: eE.intl.string(eE.t.jY7Zxg),
                    }),
                    (0, r.jsx)("div", { className: tK.$Q, children: eE.intl.string(eE.t.q3hbne) }),
                    (0, r.jsx)("div", {
                        className: tK.k0,
                        children: (0, r.jsx)(ec.Y, {
                            targetElementRef: l,
                            renderPopout: d,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => n(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: ec.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, r.jsx)("div", {
                                    ref: l,
                                    className: o()(tK.Tn, { [tK.wH]: s }),
                                    children: (0, r.jsx)(ej.D, {
                                        onClick: () => n(!s),
                                        tabIndex: 0,
                                        children: (0, r.jsxs)("div", {
                                            className: tK.lm,
                                            children: [
                                                (0, r.jsx)(tk.eu, {
                                                    size: tB._3.SIZE_32,
                                                    src: i?.getAvatarURL(void 0, 32),
                                                    status: eN.clD.ONLINE,
                                                    "aria-label": i?.username,
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: tK.Fj,
                                                    children: [
                                                        (0, r.jsx)(S.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, r.jsx)(S.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: eE.intl.string(eE.t.b9w3bO),
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
    t$ = (e) => {
        let { questId: t, selectedSections: s } = e,
            n = (0, h.bG)([er.A], () => er.A.getQuest(t));
        if (null != (0, h.bG)([er.A], () => er.A.getFetchQuestPreviewError(t)) || null == n) return null;
        let l = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                l("quest_bar") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eP, { quest: n }), (0, r.jsx)(eL, {})] }),
                l("home_card") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tP, { quest: n }), (0, r.jsx)(eL, {})] }),
                l("share_embed") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eG, { questId: n.id }), (0, r.jsx)(eL, {})] }),
                l("channel_call_header") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eB, { quest: n }), (0, r.jsx)(eL, {})] }),
                l("members_list") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tz, { quest: n }), (0, r.jsx)(eL, {})] }),
                l("activity_panel") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eU, { quest: n }), (0, r.jsx)(eL, {})] }),
            ],
        });
    };
var tY = s(497275);
function tJ(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: i } = e,
        c = [
            { value: "quest_bar", label: eE.intl.string(eE.t.rjVPdM) },
            { value: "share_embed", label: eE.intl.string(eE.t["D/gSWS"]) },
            { value: "home_card", label: eE.intl.string(eE.t["5wnpF3"]) },
            { value: "channel_call_header", label: eE.intl.string(eE.t.gWinpQ) },
            { value: "members_list", label: eE.intl.string(eE.t.wpYima) },
            { value: "activity_panel", label: eE.intl.string(eE.t.L2mlUb) },
        ],
        u = 0 === s.length || s.length === c.length,
        d = a.useMemo(() => (u ? "all" : 1 === s.length ? s[0] : "all"), [s, u]);
    return (0, r.jsx)(eR.Ip, {
        className: o()(tY.kL, i),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: tY.qE,
            children: [
                (0, r.jsx)(v.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eE.intl.string(eE.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: tY.pf, children: l }),
                (0, r.jsxs)(eI.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: (e) => {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(eI.V.Item, { id: "all", children: eE.intl.string(eE.t.Y9DnPa) }),
                        c.map((e) => (0, r.jsx)(eI.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: tY.tZ, children: (0, r.jsx)("div", { className: tY.Qs, children: t }) }),
            ],
        }),
    });
}
let tZ = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, c.W6)(),
                { search: s } = (0, c.zy)(),
                n = a.useMemo(() => new URLSearchParams(s).get(et.L1.QUEST_ID) ?? e, [s, e]),
                l = a.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        s.set(et.L1.TAB, et.NC.PREVIEW_TOOL),
                            s.set(et.L1.QUEST_ID, e),
                            t.push(`${eN.BVt.QUEST_HOME}?${s.toString()}`);
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        i = (0, h.bG)([er.A], () => (null != n ? er.A.getQuest(n) : void 0), [n]),
        o = (0, h.bG)([er.A], () => (null != n ? er.A.getQuestLoadedViaPreview(n) : null), [n]);
    a.useEffect(() => {
        null != n &&
            (0, el.dQ)(n).then(() => {
                (0, el.Gt)(n);
            });
    }, [n]),
        a.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, el.dQ)(n);
            };
            return (
                en.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    en.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [u, d] = a.useState([]);
    return (0, r.jsx)(tJ, {
        className: s,
        controls: (0, r.jsx)(eb, {
            questId: n,
            setQuestId: l,
            quest: i,
            refreshQuest: () => {
                null != n && (0, el.dQ)(n);
            },
        }),
        selectedSections: u,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(t$, { questId: o?.id, selectedSections: u }) : null,
    });
};
var tX = s(203879),
    t0 = s(403362),
    t1 = s(167417),
    t2 = s(783977),
    t7 = s(651892),
    t3 = s(305866),
    t8 = s(915089),
    t4 = s(332733);
function t5(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(S.E, { className: t4.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let t6 = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, t8.GV)(),
        l = a.useRef(null);
    return (0, r.jsx)(ec.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(t3.l, { className: t4.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var t9 = s(612539);
let se = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, et.Nb)(),
        l = a.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(t6, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, t7.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: t9.B }),
                                    (0, r.jsx)(t5, { id: i, children: e.heading }),
                                    (0, r.jsx)(t1.$, {
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
                    (0, r.jsx)("hr", { className: t9.B }),
                    (0, r.jsx)("div", {
                        className: t9.W,
                        children: (0, r.jsx)(f.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eE.intl.string(eE.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(f.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eE.intl.formatToPlainString(eE.t.CEfkXl, { numSelectedFilters: s.length }),
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
        l = a.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, et.XD)(),
        o = a.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, r.jsx)(t6, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(t5, { id: t, children: eE.intl.string(eE.t.tZXJIS) }),
                    (0, r.jsx)(st.z, {
                        options: o,
                        onChange: (e) => {
                            s(), l(e);
                        },
                        value: n,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(f.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, t7.Js)(n),
                icon: ss.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sl = s(922139),
    sr = s(717421);
function sa(e, t, s) {
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
var si = s(691540),
    so = s(857250),
    sc = s(97483);
function su() {
    let { enabled: e } = ee.jm.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        t = a.useRef(null);
    return {
        showToast: a.useCallback(
            (s) => {
                t.current !== s &&
                    e &&
                    ((0, si.P0)((0, so.o)(eE.intl.string(eE.t["5ABf1w"]), sc.Ck.FAILURE)),
                    K.default.track(eN.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: s }),
                    (t.current = s));
            },
            [e],
        ),
    };
}
var sd = s(535185);
function sm(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
let sh = function (e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = a.useState(null),
        i = a.useCallback(() => {
            r(sm(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sd.g)(e, i, [t, s], { fireOnMount: !0 }), l;
};
var sE = s(121480);
let sx = 4 * tl.A.Millis.SECOND;
function sg(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = a.useRef(null),
        i = sh(l, s, n);
    return (0, r.jsx)("div", {
        className: sE.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== i && t(i),
    });
}
let sf = a.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: i,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        m = (0, c.zy)(),
        { showToast: h } = su(),
        E = a.useRef(""),
        [x, g] = a.useState(null),
        [f, j] = a.useState(0),
        { useNewTile: C } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: _ }, N] = (0, sr.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sx },
        })),
        p = a.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !i) return !1;
                let t = (0, tb.vc)(e, s, n);
                return null == t ? (h(e), !1) : (g(t.id), j((e) => e + 1), !0);
            },
            [s, n, l, h, i],
        );
    return (a.useImperativeHandle(t, () => ({ scrollToQuest: p }), [p]),
    a.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            E.current = "";
            return;
        }
        l || !i || (m.hash !== E.current && p(m.hash.slice(1)) && (E.current = m.hash));
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
                    e.cancelled || g(null);
                },
            }));
    }, [x, f, N]),
    l && 0 === s.length)
        ? (0, r.jsx)(ed.y, { className: sE.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sE.y7,
                children: [
                    (0, r.jsx)(v.D, {
                        variant: "heading-xl/semibold",
                        children: eE.intl.string(u ? eE.t.PBfFnx : eE.t.NqFP6z),
                    }),
                    (0, r.jsx)(S.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? eE.intl.format(eE.t.LdYS1H, { onClick: d }) : eE.intl.string(eE.t.LhD4yH),
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
                            a = null != x && !l;
                        return (0, r.jsxs)(
                            sl.animated.div,
                            {
                                className: o()({ [sE.XB]: l }),
                                style: sa(l, a, _),
                                children: [
                                    l && (0, r.jsx)("div", { className: sE.E4 }, f),
                                    C
                                        ? (0, r.jsx)(tF, {
                                              quest: t,
                                              questContent: J.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sE.d,
                                              sourceQuestContent: J.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eK.Ay, {
                                              quest: t,
                                              questContent: J.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sE.d,
                                              sourceQuestContent: J.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sj = s(458518),
    sv = s(65990);
let sS = [],
    sC = et.L1.SORT,
    s_ = et.L1.FILTER,
    sN = a.forwardRef(function (e, t) {
        let s,
            n,
            l,
            i,
            o = a.useRef(null),
            [u, d] =
                ((s = (0, sj.o)()),
                (n = (0, c.W6)()),
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
                    (e = u.get(sC)),
                    ((0, Y.uJ)(e) ? null : (Object.values(tg.kL).find((t) => t === e) ?? null)) ?? tg.kL.SUGGESTED
                );
            }, [u]),
            h = a.useMemo(
                () =>
                    (function (e) {
                        if ((0, Y.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tg.WQ)(e))
                            .filter(t0.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(s_)) ?? sS,
                [u],
            ),
            E = a.useCallback(
                (e) => {
                    d({ [sC]: e });
                },
                [d],
            ),
            x = a.useCallback(
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
            { enabled: g } = ee.jm.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
            {
                quests: f,
                excludedQuests: j,
                isFetchingCurrentQuests: S,
                hasFetched: C,
            } = (0, et.Qh)(
                et.NC.ALL,
                a.useMemo(() => ({ sortMethod: m, filters: h, removeExpiredQuests: g }), [m, h, g]),
            ),
            _ = a.useCallback(() => {
                x(sS);
            }, [x]),
            N = a.useRef(null),
            p = a.useRef(null),
            T = (0, c.zy)(),
            A = (0, c.W6)();
        return (
            a.useEffect(() => {
                "" !== T.hash &&
                    null != N.current &&
                    null != p.current &&
                    (m !== N.current || h !== p.current) &&
                    A.replace({ ...T, hash: void 0 });
            }, [m, h, T, A]),
            a.useEffect(() => {
                N.current = m;
            }, [m]),
            a.useEffect(() => {
                p.current = h;
            }, [h]),
            (0, et.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: f.length }),
            a.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        _(),
                            E(tg.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [_, E],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: sv.Mj,
                        children: [
                            (0, r.jsx)(v.D, { variant: "heading-lg/medium", children: eE.intl.string(eE.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sv.Nf,
                                children: [
                                    (0, r.jsx)(sn, { onChange: E, optionClassName: sv.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(se, { onChange: x, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sf, {
                        ref: o,
                        quests: f,
                        excludedQuests: j,
                        isFetching: S,
                        hasFetched: C,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: _,
                    }),
                ],
            })
        );
    });
var sp = s(575593),
    sT = s(440703),
    sA = s(462887),
    sO = s(187322),
    sb = s(765671),
    sR = s(736653),
    sI = s(162232),
    sM = s(734736),
    sL = s(303136),
    sy = s(265234),
    sQ = s(181713);
let sU = (e) => {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sQ.A : sQ.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sy.k, t),
        children: s
            ? (0, r.jsx)(sL.A, {
                  preload: "auto",
                  className: sy.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sy.L, src: l, alt: n }),
    });
};
var sD = s(57718),
    sH = s(659249);
let sw = (0, a.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, a.useState)(!1),
        [l, i] = (0, a.useState)(24),
        [c, u] = (0, a.useState)(!1),
        d = (0, a.useRef)(null),
        m = (0, a.useRef)(null),
        E = (0, a.useRef)(null),
        x = (0, h.bG)([tO.default], () => tO.default.getCurrentUser()),
        { ref: g, height: f = 0 } = (0, sb.Ay)(),
        j = (0, sR.Ay)(),
        C = (0, et.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        _ = t.userStatus?.claimedTier ?? 0,
        N = t.config.rewards[_],
        p = N?.type === sT.l.FRACTIONAL_PREMIUM,
        T = N?.type === sT.l.COLLECTIBLE,
        A = N?.type === sT.l.VIRTUAL_CURRENCY,
        O = N?.collectibleProduct?.items?.[0],
        b = O?.type === sp.R.AVATAR_DECORATION ? O : null,
        R = a.useMemo(
            () =>
                null == N
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? eE.intl.format(eE.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : N.name,
            [N, A, t],
        );
    (0, sb.i4)(d, (e) => {
        let { height: t } = e;
        if (!T || null == t || null == m.current || null == d.current || null == E.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = E.current.getBoundingClientRect();
        i((n.top - s.top - l.height) / 2);
    });
    let I = (0, sA.M)(j),
        M = a.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        y = a.useMemo(() => (0, eJ.tW)(t, eJ.fY.REWARD), [t]),
        Q = s ? f + 8 : 0,
        { content_position: U, row_index: D, ...H } = (0, es.fF)(J.uF.TROPHY_CASE_CARD),
        w = () => {
            n(!0), K.default.track(eN.HAw.QUEST_HOVER, { quest_id: t.id, ...H });
        },
        q = () => {
            n(!1);
        },
        F = (e) => {
            u(!0), K.default.track(eN.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == N || c
        ? null
        : (0, r.jsx)(sO.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: w,
                  onBlur: q,
                  onMouseEnter: w,
                  onMouseLeave: q,
                  className: o()(sH.kL, { [sH.yo]: s }),
                  children: [
                      null != x &&
                          T &&
                          null != b &&
                          (0, r.jsx)("div", {
                              ref: E,
                              className: sH.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sI.A, {
                                  avatarDecorationOverride: b,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      p
                          ? (0, r.jsx)(sM.A, { className: sH.Sl })
                          : A
                            ? (0, r.jsx)(sU, {
                                  className: sH.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : y.isAnimated
                              ? (0, r.jsx)(L.A, {
                                    className: sH.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: y.url,
                                        type: y.mimetype ?? void 0,
                                        onError: () => F(y.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sH.Sl,
                                    src: y.url,
                                    alt: t.config.messages.questName,
                                    onError: () => F(y.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sH.Lw, { [sH.en]: I, [sH.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sH.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sD.Ay, {
                              logotypeClassName: o()(sH.wm, { [sH.A0]: M }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: sH.zH,
                          children: [
                              (0, r.jsx)(v.D, {
                                  className: sH.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eE.intl.format(eE.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(S.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "always-white",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: eE.intl.format(eE.t["kXVcV+"], { reward: R, claimedDate: C }),
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
        n = (0, sR.Ay)();
    return (0, r.jsxs)(sq.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sq.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sq.SG, { note: eE.intl.format(eE.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sP = s(975424);
function sk(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, et.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(ed.y, { className: sP.u })
        : 0 === n.length
          ? (0, r.jsx)(sF, { onClick: () => t(et.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sP.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sw, { quest: e }, e.id)),
            });
}
var sB = s(548411),
    sW = s(554830),
    sV = s(689175);
let sG = (e) => eg.A.space.SPACE_XL.resolve({ density: e }),
    sK = (e) => (1220 - 2 * sG(e) * 0.75) / 3;
var sz =
    (((l = {}).FEATURED = "featured"),
    (l.IN_PROGRESS = "in-progress"),
    (l.ENDING_SOON = "ending-soon"),
    (l.ORB = "orb"),
    (l.DISCOVERED = "discovered"),
    l);
let s$ = [
    { type: "featured-quests", identifier: "featured", title: eE.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: eE.t.PRg3qh },
    { type: "quests", identifier: "orb", title: eE.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: eE.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: eE.t["u9Ug++"] },
];
var sY = s(522403);
let sJ = "data-scroll-target",
    sZ = `[${sJ}]`,
    sX = { anchors: [], pageSize: 1 },
    s0 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function s1(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2)),
        r = (t) => Math.abs(t - e.scrollLeft);
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let s2 = a.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = sZ,
                maskWidth: l = 24,
                overflowAmount: i = 0,
                maskMarginMultiplier: c = 1,
                onScrollEnd: u,
            } = e,
            d = a.useRef(null),
            m = a.useRef(null),
            E = a.useRef(0),
            x = a.useRef(null),
            [g, f] = a.useState(!1),
            [j, v] = a.useState(!1),
            [S, C] = a.useState(!0),
            [_, N] = a.useState([]),
            [p, A] = a.useState(1),
            O = (0, h.bG)([T.Ay], () => T.Ay.useReducedMotion) ? "auto" : "smooth",
            b = a.useCallback(() => {
                let e = d.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (f(e.scrollLeft > 0), v(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
            }, []),
            R = a.useCallback(() => {
                let { anchors: e, pageSize: t } = (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return sX;
                    let a = Array.from(r.querySelectorAll(s));
                    if (0 === a.length) return sX;
                    let i = a[0].offsetWidth,
                        o = a.length > 1 ? a[1].offsetLeft - a[0].offsetLeft - i : 0,
                        c = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (i + o))),
                        u = a.length - c + 1;
                    return u <= 1
                        ? sX
                        : {
                              anchors: [
                                  0,
                                  ...a.slice(1, u - 1).map((e, t) => {
                                      let s = a[t + c];
                                      return (e.offsetLeft + s.offsetLeft + s.offsetWidth) / 2;
                                  }),
                                  r.scrollWidth,
                              ],
                              pageSize: c,
                          };
                })({ scrollerRef: d, itemSelector: n, maskWidth: l, maskMarginMultiplier: c });
                A(t), N((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e));
            }, [l, n, c, N]),
            I = a.useCallback(() => {
                if (null == x.current || x.current?.clientWidth === 0) return C(!0);
                C(x.current?.clientWidth >= 1260);
            }, [x]),
            M = a.useCallback(
                (e) => {
                    let t = d.current?.getScrollerNode();
                    if (null == t || _.length < 2) return;
                    let { currentIndex: s, scrollLefts: n } = s1(t, _),
                        l = Math.max(0, Math.min(_.length - 1, s + e * p));
                    (m.current = es.pk.ARROW), t.scrollTo({ left: n[l], behavior: O });
                },
                [O, _, p],
            ),
            L = a.useCallback((e, t) => {
                let s = d.current?.getScrollerNode();
                if (null == s || null == e || !s.contains(e)) return;
                let n = s.getBoundingClientRect(),
                    l = e.getBoundingClientRect(),
                    r = n.left - l.left,
                    a = l.right - n.right;
                (0 !== r || 0 !== a) &&
                    ((m.current = es.pk.MANUAL),
                    r > 0
                        ? s.scrollTo({ left: s.scrollLeft - r, behavior: t })
                        : a > 0 && s.scrollTo({ left: s.scrollLeft + a, behavior: t }));
            }, []),
            y = a.useCallback(
                (e) => {
                    let t = e.target.closest(n);
                    null != t && L(t, O);
                },
                [n, L, O],
            ),
            Q = a.useCallback(() => {
                let e = d.current?.getScrollerNode();
                if (null == e) return;
                let { currentIndex: t } = s1(e, _),
                    s = m.current ?? es.pk.MANUAL;
                m.current = null;
                let n = E.current;
                E.current = e.scrollLeft;
                let l = e.scrollLeft > n ? es.VU.RIGHT : es.VU.LEFT;
                u?.({
                    scrollingType: s,
                    scrollWindowStartIndex: t,
                    scrollWindowEndIndex: t + p - 1,
                    scrollWindowSize: p,
                    scrollingDirection: l,
                });
            }, [u, _, p]),
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
                        o = null == i ? null : i.matches(s0) ? i : i.querySelector(s0);
                    null != o && (o.focus({ preventScroll: !0 }), e.repeat && L(i, "instant"));
                },
                [n, L],
            ),
            D = a.useCallback(() => {
                b(), R(), I();
            }, [b, R, I]);
        (0, sd.g)(x, D, [], { fireOnMount: !0 });
        let H = i > 0,
            w = a.useMemo(
                () => ({
                    "--custom-scroller-mask-width": `${l}px`,
                    "--custom-scroller-overflow-amount": `${i}px`,
                    "--custom-scroller-scroll-behavior": O,
                }),
                [l, i, O],
            );
        return (0, r.jsxs)("div", {
            className: o()(s, sY.m7),
            ref: x,
            style: w,
            children: [
                (0, r.jsx)("div", {
                    className: o()(sY.k9, sY.RW, { [sY.Q2]: g }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(ei.K, {
                        icon: sB.Z,
                        variant: "overlay-secondary",
                        onClick: () => M(-1),
                        disabled: !g,
                        "aria-label": eE.intl.string(eE.t.vgfxaA),
                        tabIndex: -1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(sY.k9, sY.K3, { [sY.Q2]: j }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(ei.K, {
                        icon: sW.K,
                        variant: "overlay-secondary",
                        onClick: () => M(1),
                        disabled: !j,
                        tabIndex: -1,
                        "aria-label": eE.intl.string(eE.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [sY.sF]: g && S, [sY.RC]: j && S, [sY.Ni]: H && !g, [sY.GA]: H && !j }),
                    children: (0, r.jsx)(sV.zC, {
                        ref: d,
                        orientation: "horizontal",
                        onScroll: b,
                        onScrollEnd: Q,
                        onFocusCapture: y,
                        onKeyDown: U,
                        className: o()({ [sY.x2]: H }, sY.XG),
                        children: (0, r.jsxs)(e8.X.Provider, {
                            value: d,
                            children: [
                                t,
                                _.map((e, t) =>
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
    s7 = a.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var s3 = s(76060);
function s8(e) {
    let { children: t, questId: s, featuredSection: n } = e,
        { targetQuestId: l, highlightCount: i, highlightAnimationProgress: o } = a.useContext(s7),
        c = l === s,
        u = null != l && l !== s,
        { useNewTile: d } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        m = n ? "var(--radius-lg)" : "var(--radius-sm)",
        h = a.useMemo(() => ({ ...sa(c, u, o), borderRadius: d ? m : "10px" }), [c, u, o, d, m]);
    return (0, r.jsxs)(sl.animated.div, {
        [sJ]: "",
        className: c ? s3.X : void 0,
        style: h,
        children: [c && (0, r.jsx)("div", { className: s3.E }, i), t],
    });
}
var s4 = s(474646);
function s5(e) {
    let { containerWidth: t, questIds: s, setMaxRowIndex: n } = e,
        { useNewTile: l } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        i = a.useMemo(() => (null == t ? null : sm(t, 345, 20, 2)), [t]);
    return (
        a.useEffect(() => {
            null !== i && n(Math.ceil(s.length / i) - 1);
        }, [s.length, i, n]),
        (0, r.jsx)("div", {
            className: s4.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != i &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        s8,
                        {
                            featuredSection: !0,
                            questId: e,
                            children: l
                                ? (0, r.jsx)(
                                      tF,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: J.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / i),
                                          sourceQuestContent: J.uF.QUEST_HOME_FEATURED_SECTION,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      eK.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: J.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / i),
                                          sourceQuestContent: J.uF.QUEST_HOME_FEATURED_SECTION,
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
var s6 = s(418842),
    s9 = s(561844),
    ne = s(548636);
function nt(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetQuestId: i } = a.useContext(s7),
        { useNewTile: o } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        c = (0, s6.C)(),
        u = a.useCallback(
            (e) => {
                let {
                    scrollingType: n,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: a,
                    scrollingDirection: o,
                } = e;
                (0, s9.kO)({
                    scrollingType: null != i ? es.pk.AUTO : n,
                    scrollingDirection: o,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: a,
                    questContent: t,
                    carouselSize: s.length,
                });
            },
            [t, s.length, i],
        );
    return (0, r.jsx)(s2, {
        maskWidth: sG(c),
        overflowAmount: 25,
        maskMarginMultiplier: 0.75,
        onScrollEnd: u,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${sK(c)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: ne.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        s8,
                        {
                            questId: e,
                            children: o
                                ? (0, r.jsx)(tF, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: ne.d,
                                      sourceQuestContent: t,
                                  })
                                : (0, r.jsx)(eK.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === sz.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: ne.d,
                                      sourceQuestContent: t,
                                  }),
                        },
                        `animated-wrapper-${e}`,
                    ),
                ),
                (0, r.jsx)("div", { className: ne.fu }),
            ],
        }),
    });
}
var ns = s(958538);
let nn = tl.A.Millis.WEEK;
function nl() {
    let e = er.A.quests;
    if (0 === er.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tb.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class nr extends h.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(er.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - nn;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([er.A], nl), t;
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
let na = new nr(en.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    ni = 2 * tl.A.Millis.DAY,
    no = new Map(s$.map((e) => [e.identifier, e])),
    nc = {
        [sz.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nu(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
function nd(e, t) {
    let s = no.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
var nm = s(32304);
let nh = {
        [sz.FEATURED]: J.uF.QUEST_HOME_FEATURED_SECTION,
        [sz.IN_PROGRESS]: J.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [sz.ENDING_SOON]: J.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [sz.ORB]: J.uF.QUEST_HOME_ORB_SECTION,
        [sz.DISCOVERED]: J.uF.QUEST_HOME_DISCOVERED_SECTION,
    },
    nE = 4 * tl.A.Millis.SECOND,
    nx = a.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l } = e,
            { useNewTile: i, useLargeFeaturedTiles: c } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
            { sections: u, isFetchingCurrentQuests: d } = ((e) => {
                let { isLoadingQuestHomeHero: t } = e,
                    {
                        quests: s,
                        isFetchingCurrentQuests: n,
                        hasFetched: l,
                    } = (0, et.Qh)(et.NC.ALL, { sortMethod: tg.kL.SUGGESTED, filters: [], removeExpiredQuests: !0 }),
                    r = (0, ns.A)(
                        () =>
                            s.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        s.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        nu,
                    ),
                    i = (0, et.T2)(),
                    o = (0, h.bG)([na], () => na.getDiscoveredAtByQuestId(), []),
                    c = a.useMemo(() => (n && 0 === s.length) || t, [n, s.length, t]);
                return {
                    sections: a.useMemo(
                        () =>
                            c
                                ? []
                                : (function (e) {
                                      let { allQuestIds: t, hero: s, discoveredAtByQuestId: n } = e,
                                          l = new Map(),
                                          r = new Set();
                                      function a(e, t) {
                                          let { featuredOnly: a = !1 } = t;
                                          if (r.has(e)) return;
                                          let i = er.A.getQuestConfig(e);
                                          if (null == i) return;
                                          let o = (function (e) {
                                              let {
                                                      quest: t,
                                                      hero: s,
                                                      discoveredAtByQuestId: n,
                                                      questIdsBySectionIdentifier: l,
                                                  } = e,
                                                  r = er.A.getQuest(t.id)?.userStatus,
                                                  a =
                                                      null != r &&
                                                      null != r.enrolledAt &&
                                                      null != r.completedAt &&
                                                      null == r.claimedAt;
                                              return (0, tb.kd)(t) && !a
                                                  ? null
                                                  : null != r && null != r.enrolledAt && null == r.claimedAt
                                                    ? sz.IN_PROGRESS
                                                    : n.has(t.id)
                                                      ? sz.DISCOVERED
                                                      : null != s && (0, eX.I0)(s, t.id) && nd(sz.FEATURED, l)
                                                        ? sz.FEATURED
                                                        : new Date(t.expiresAt).valueOf() <= Date.now() + ni
                                                          ? sz.ENDING_SOON
                                                          : nd(sz.FEATURED, l)
                                                            ? sz.FEATURED
                                                            : (0, tR.ks)(t)
                                                              ? sz.ORB
                                                              : null;
                                          })({
                                              quest: i,
                                              hero: s,
                                              discoveredAtByQuestId: n,
                                              questIdsBySectionIdentifier: l,
                                          });
                                          null == o ||
                                              (a && o !== sz.FEATURED) ||
                                              (l.set(o, [...(l.get(o) ?? []), e]), r.add(e));
                                      }
                                      return (
                                          s?.questIds?.forEach((e) => a(e, { featuredOnly: !0 })),
                                          t.forEach((e) => a(e, {})),
                                          s$
                                              .map((e) => {
                                                  let t = nc?.[e.identifier],
                                                      s =
                                                          null != t
                                                              ? t(l.get(e.identifier) ?? [], {
                                                                    discoveredAtByQuestId: n,
                                                                })
                                                              : (l.get(e.identifier) ?? []);
                                                  return { ...e, questIds: s };
                                              })
                                              .filter((e) => {
                                                  let { questIds: t } = e;
                                                  return t.length > 0;
                                              })
                                      );
                                  })({ allQuestIds: r, hero: i, discoveredAtByQuestId: o }),
                        [r, i, o, c],
                    ),
                    hasFetched: l,
                    isFetchingCurrentQuests: c,
                };
            })({ isLoadingQuestHomeHero: n }),
            m = a.useRef(null),
            { showToast: E } = su(),
            [x, g] = a.useState(null),
            [f, j] = a.useState(0),
            [S, C] = a.useState(null),
            [_, N] = a.useState(0),
            p = a.useRef(null),
            T = a.useCallback(
                (e) => {
                    C(e.contentRect.width);
                },
                [C],
            );
        (0, sd.g)(m, T, [T], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: A }, O] = (0, sr.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nE },
            })),
            b = a.useCallback(
                (e) => {
                    if (null == e || null == S) return !1;
                    let t = document.getElementById((0, eK.sT)(e));
                    return (
                        !d &&
                        (null == t
                            ? (E(e), !1)
                            : (g(e),
                              j((e) => e + 1),
                              t.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                              O({
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
                [g, j, O, d, E, S],
            );
        a.useImperativeHandle(t, () => ({ scrollToQuest: b }), [b]),
            a.useLayoutEffect(() => {
                if (null == s) {
                    p.current = null;
                    return;
                }
                p.current !== s && ((0, el.sB)(s), b(s) && (p.current = s));
            }, [s, b]);
        let R = a.useMemo(() => ({ targetQuestId: x, highlightCount: f, highlightAnimationProgress: A }), [x, f, A]),
            I = a.useMemo(
                () =>
                    u.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sz.FEATURED;
                    }),
                [u],
            );
        return (0, r.jsx)(s7.Provider, {
            value: R,
            children: (0, r.jsx)("div", {
                className: o()(nm.kL, l),
                ref: m,
                children: u.map((e, t) => {
                    let { identifier: s, questIds: n, title: l } = e;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: nm.p9,
                            children: [
                                (0, r.jsx)(v.D, {
                                    variant: "heading-lg/semibold",
                                    className: nm.Gf,
                                    children: eE.intl.string(l),
                                }),
                                s === sz.FEATURED && i && c
                                    ? (0, r.jsx)(s5, { questIds: n, setMaxRowIndex: N, containerWidth: S })
                                    : (0, r.jsx)(nt, {
                                          questIds: n,
                                          rowIndex: t < I ? t : t + _,
                                          sectionIdentifier: s,
                                          questContent: nh[s],
                                      }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        });
    });
var ng = s(353640),
    nf = s(121894),
    nj = s(851936);
let nv = (0, ng.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, nj.L)({ location: tg.rE.QUEST_HOME_DESKTOP });
        if (s.info === eA.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, nf.r)(() => e(l));
    },
}));
var nS = s(516226),
    nC = s(323889),
    n_ = s(901406),
    nN = s(139384),
    np = s(770178),
    nT = s(14233);
function nA(e, t) {
    let { row_index: s, ...n } = (0, es.fF)(J.uF.QUEST_HOME_HERO);
    (0, s9.Qg)({
        adContentId: e,
        adCreativeType: nC.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: J.uF.QUEST_HOME_HERO,
    });
}
let nO = a.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: i, buttons: c, background: u, className: d } = e,
        [m, h] = a.useState("display-lg"),
        E = a.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, np.w)(E, [], { fireOnMount: !0 }),
        g = a.useCallback(() => nA(s, eN.HAw.QUEST_HOVER), [s]),
        f = a.useCallback(() => nA(s, eN.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(tm.N, {
        theme: eN.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(nT.iE, e, d),
                onMouseEnter: g,
                onMouseLeave: f,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nT.FG,
                    children: [
                        (0, r.jsxs)(_.B, {
                            className: nT.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(_.B, {
                                    className: nT.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(_.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(v.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nT.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(S.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nT.VA,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                        c,
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
var nb = s(194526),
    nR = s(731355),
    nI = s(621466),
    nM = s(508770),
    nL = s(406810),
    ny = s(628284),
    nQ = s(65154),
    nU = s(975807),
    nD = s(58703),
    nH = s(18437),
    nw = s(398025),
    nq = s(691464);
function nF(e) {
    let [t, s] = a.useState(!1),
        n = a.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = a.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nP(e) {
    let { hero: t, contentPosition: s } = e,
        n = a.useRef(null),
        { isHovering: l, hoverProps: i } = nF(
            a.useCallback(
                (e) => {
                    (0, s9.Qg)({
                        adContentId: t.id,
                        adCreativeType: nC.p.QUEST_HOME_HERO,
                        event: e ? eN.HAw.QUEST_HOVER : eN.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: J.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, es.jO)(J.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    a.useEffect(() => {
        let e = n.current;
        (0, nI.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eA.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: c } = (0, sr.z)({ hoverSpring: +!!l, config: sl.config.gentle }),
        u = a.useCallback(() => {
            (0, nU.A)(t.cta.url),
                (0, s9.vK)({
                    adContentId: t.id,
                    adCreativeType: nC.p.QUEST_HOME_HERO,
                    questContent: J.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: es.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(ej.D, {
        tag: "div",
        className: o()(nq.FW, nq.Bm),
        onClick: u,
        "aria-label": t.cta.buttonLabel,
        [sJ]: !0,
        ...i,
        children: [
            (0, r.jsx)("div", {
                className: nq.Ve,
                children: (0, r.jsx)(e0.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(nq.pv, nq.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(nq.pv, nq.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(sl.animated.div, {
                className: nq.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(f.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function nk(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        i = a.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: c, hours: u, minutes: d, seconds: m } = (0, tn.A)(i, tl.A.Millis.MINUTE),
        E = a.useMemo(
            () =>
                (0, nD.uN)(
                    { days: c, hours: u, minutes: d, seconds: m },
                    { days: eE.t["Ux/De1"], hours: eE.t.Lzd5Ie, minutes: eE.t.odmpbP },
                ),
            [c, u, d, m],
        ),
        x = (0, h.bG)([tO.default], () => tO.default.getCurrentUser()),
        g = a.useMemo(() => (0, tR.mq)(s.config, x), [s.config, x]),
        j = a.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, t7.xv)(e).type) {
                        case sT.l.IN_GAME:
                            return eE.intl.string(eE.t["O/J2kr"]);
                        case sT.l.COLLECTIBLE:
                            return eE.intl.string(eE.t.Jg17Ut);
                        case sT.l.VIRTUAL_CURRENCY:
                            return eE.intl.string(eE.t.ElYQFS);
                        default:
                            return (0, tR.mq)(e, t);
                    }
                })(s.config, x),
            [s.config, x],
        ),
        { completedRatio: v, completedRatioDisplay: C } = (0, et.O9)(s),
        N = a.useMemo(() => (0, tR.wo)(s.config, x), [s.config, x]),
        p = (0, nH.tG)(),
        T = (0, nH.WS)(),
        { isHovering: A, hoverProps: O } = nF(
            a.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: nC.p.QUEST_HOME_HERO,
                        event: e ? eN.HAw.QUEST_HOVER : eN.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: J.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, es.jO)(J.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: b } = (0, sr.z)({ hoverSpring: +!!A, config: sl.config.gentle }),
        R = a.useCallback(() => {
            n(s.id),
                p({
                    adContentId: t,
                    relatedQuestId: s.id,
                    adCreativeType: nC.p.QUEST_HOME_HERO,
                    questContent: J.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: es.Cy.VIEW_QUESTS,
                    questContentPosition: l,
                    sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [n, t, s.id, p, l]);
    return (0, r.jsxs)(ej.D, {
        tag: "div",
        className: o()(nq.FW, nq.$R),
        onClick: R,
        "aria-label": eE.intl.string(eE.t["th2+0j"]),
        [sJ]: !0,
        ...O,
        children: [
            (0, r.jsxs)(_.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nM.E, { type: { text: j } }),
                    (0, r.jsx)(sl.animated.div, {
                        style: { opacity: (0, nw.a)(b.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nM.E, { type: { text: E }, icon: nL.O }),
                    }),
                ],
            }),
            (0, r.jsx)(sl.animated.div, {
                className: nq.Tr,
                style: { transform: b.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tI.A, {
                    percentComplete: v,
                    overlayText: A && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tM.A, {
                        quest: s,
                        questContent: J.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: A,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(sl.animated.div, {
                className: nq.tw,
                style: {
                    opacity: (0, nw.a)(b.to([0, 1], [1, 0])),
                    transform: b.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(_.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(S.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nq.Ht,
                            children: g,
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
                                        (0, r.jsx)(ny.y, { size: "xs", color: eg.A.colors.ICON_MUTED.css }),
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
                                        (0, eX.pv)(s.config) === nR.Z.VIDEO
                                            ? (0, r.jsx)(nQ.S, { size: "xs", color: eg.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(e5._, { size: "xs", color: eg.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(S.E, {
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
            (0, r.jsx)(sl.animated.div, {
                className: nq.um,
                style: { transform: b.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(f.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), R();
                    },
                    text: eE.intl.string(eE.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var nB = s(648731);
function nW(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e,
        l = (0, s6.C)();
    return (0, r.jsx)(s2, {
        className: nB.v,
        overflowAmount: 25,
        maskWidth: sG(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsxs)(_.B, {
            className: nB.I,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            children: [
                (0, r.jsx)(e1.R, {
                    adContentId: t.id,
                    adCreativeType: nC.p.QUEST_HOME_HERO,
                    questContent: J.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nP, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, s) =>
                    (0, r.jsx)(
                        e1.R,
                        {
                            adContentId: t.id,
                            adCreativeType: nC.p.QUEST_HOME_HERO,
                            questContent: J.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: s + 1,
                            sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                            children: (l) =>
                                (0, r.jsx)("div", {
                                    ref: (e) => {
                                        l.current = e;
                                    },
                                    children: (0, r.jsx)(nk, {
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
var nV = s(95115);
function nG() {
    return (0, r.jsx)("div", { className: nV.Np });
}
function nK(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = a.useRef(null);
    (0, nN.A)(n, tg.rE.QUEST_HOME_DESKTOP);
    let l = a.useMemo(() => (null != s ? (0, eJ.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, r.jsxs)("div", {
              className: nV.Tv,
              children: [
                  (0, r.jsx)(nG, {}),
                  (0, r.jsx)("div", {
                      className: nV.LO,
                      children: (0, r.jsx)("img", { className: nV.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nV.LO, nV.jx, nV.hw),
                      children: (0, r.jsx)("img", { className: nV.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nV.LO, nV.jx, nV.Co),
                      children: (0, r.jsx)("img", { className: nV.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: nV.Tv,
              children: [
                  (0, r.jsx)(nG, {}),
                  (0, r.jsx)("div", {
                      className: nV.LO,
                      children: (0, r.jsx)(e0.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: n,
                          imageAsset: {
                              alt: "",
                              className: nV.LY,
                              asset: { url: l, mimetype: (0, eJ.vm)(l), isAnimated: !1 },
                              assetId: l,
                          },
                          videoAsset: {
                              alt: "",
                              className: nV.LY,
                              asset: { url: s, mimetype: (0, eJ.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function nz(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        n = (0, h.bG)([er.A], () => er.A.quests),
        { shelfQuests: l, isShelfEnabled: i } = (0, et.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, nb.I)();
    a.useEffect(() => {
        o();
    }, [o]);
    let c = a.useMemo(() => t.questIds?.find((e) => n.has(e)), [n, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e1.R, {
                adContentId: t.id,
                adCreativeType: nC.p.QUEST_HOME_HERO,
                questContent: J.uF.QUEST_HOME_HERO,
                sourceQuestContent: J.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(nO, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, r.jsxs)(_.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, r.jsx)("img", { src: t.sponsorImage, alt: "", className: nV.wm }),
                                (0, r.jsx)(S.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nV.yu,
                                    children: eE.intl.string(eE.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, r.jsxs)(g.e, {
                            children: [
                                (0, r.jsx)(f.$, {
                                    onClick: () => {
                                        (0, n_._Q)(
                                            { adContentId: t.id, adCreativeType: nC.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: J.uF.QUEST_HOME_HERO,
                                                ctaContent: es.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: J.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != c &&
                                    (0, r.jsx)(f.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, s9.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: nC.p.QUEST_HOME_HERO,
                                                    questContent: J.uF.QUEST_HOME_HERO,
                                                    questContentCTA: es.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: J.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: eE.intl.string(eE.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, r.jsx)(nK, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, r.jsx)(nW, { hero: t, shelfQuests: l, onQuestCtaClick: s }),
        ],
    });
}
function n$() {
    return (0, r.jsx)("div", { className: o()(nT.iE, nT.FG, nT.B3), children: (0, r.jsx)(ed.y, {}) });
}
var nY = s(740879),
    nJ = s(604880),
    nZ = s(318808);
function nX(e) {
    let { adCreativeIds: t } = e,
        s = a.useCallback(() => (0, tC.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: nY.MY,
        children: [
            (0, r.jsx)("img", { className: nY.Bg, src: nZ.Ay, alt: "" }),
            (0, r.jsx)("div", { className: nY.r$, children: (0, r.jsx)("img", { src: nJ, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: nY.Nr,
                children: [
                    (0, r.jsx)(v.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: nY.ky,
                        children: eE.intl.string(eE.t.GXmn57),
                    }),
                    (0, r.jsx)(S.E, {
                        variant: "text-md/normal",
                        className: nY.G3,
                        children: eE.intl.string(eE.t.bWuKqh),
                    }),
                    (0, r.jsx)(f.$, {
                        variant: "primary",
                        text: eE.intl.string(eE.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function n0(e) {
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
var n1 = s(298537);
let n2 = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, s6.C)(),
        { useNewTile: n } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        l = a.useRef(null),
        i = sh(l, sK(s), 20, 3);
    return (0, r.jsxs)(_.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: n1.kL,
        ref: l,
        children: [
            (0, r.jsxs)(v.D, {
                variant: "heading-lg/medium",
                children: [eE.intl.string(eE.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(_.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: n1.y7,
                      children: [
                          (0, r.jsx)(n0, { alt: eE.intl.string(eE.t["Xe+fJM"]) }),
                          (0, r.jsxs)(_.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(v.D, {
                                      variant: "heading-lg/medium",
                                      children: eE.intl.string(eE.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(v.D, {
                                      variant: "heading-sm/medium",
                                      children: eE.intl.string(eE.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: n1.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${sK(s)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== i &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        tF,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: J.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / i),
                                            className: n1.d,
                                            sourceQuestContent: J.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        eK.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: J.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / i),
                                            className: n1.d,
                                            sourceQuestContent: J.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var n7 = s(111956),
    n3 = s.n(n7),
    n8 = s(379078),
    n4 = s(704554),
    n5 = s(823784);
let n6 = {
    searchType: n8.n.FUZZY,
    searchStringGenerator: (e) =>
        [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(t0.Vq),
    sortType: n8.r.JARO_WINKLER,
    throttleMs: 200,
};
var n9 = s(758836),
    le = s(613057),
    lt = s(935824);
let ls = a.createContext({});
function ln(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: i, scrollerRef: o } = a.useContext(ls);
    return (0, r.jsxs)(e8.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(P.A, {
                onScroll: i,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(q.A, { className: lt.Jo, innerClassName: lt.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function ll(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(F.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function lr(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: n } = (0, W.Z)({ location: tg.rE.QUEST_HOME_DESKTOP }),
        l = (0, h.bG)([T.Ay], () => T.Ay.useReducedMotion),
        i = (0, h.bG)([G.A], () => G.A.isFocused()),
        { ref: o, inViewport: c } = (0, tX.p)(),
        u = a.useRef(null);
    if (
        (a.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (i && c && !l)
                    ? u.current.paused && !l && c && i && u.current.play()
                    : u.current.pause());
        }, [l, c, i]),
        n)
    ) {
        let e = (0, z.TM)();
        return (0, r.jsx)(L.A, {
            ref: (e) => {
                (u.current = e), (o.current = e);
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
function la(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, W.Z)({ location: tg.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsxs)("div", {
        className: o()(lt.Tv, { [lt.lJ]: s }),
        children: [
            (0, r.jsx)(nG, {}),
            (0, r.jsx)("div", { className: o()(lt.nz, { [lt.ZZ]: s }) }),
            (0, r.jsx)(lr, { onLoadComplete: t, className: o()(lt.Fe, { [lt.H4]: s, [lt.Q8]: !s }) }),
        ],
    });
}
function li(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, W.Z)({ location: tg.rE.QUEST_HOME_DESKTOP }),
        n = a.useCallback(() => {
            s ? window.open(eN.X7G.PAID_TERMS_ORBS) : window.open($.A.getArticleURL(eN.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(nO, {
        adContentId: s ? tg.yr : tg.uz,
        title: s ? eE.intl.format(eE.t.BCBIlp, {}) : eE.intl.format(eE.t.lmMBfy, {}),
        subtitle: s ? eE.intl.format(eE.t.U9FY0J, {}) : eE.intl.string(eE.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(g.e, {
                  children: [
                      (0, r.jsx)(f.$, {
                          variant: "overlay-primary",
                          text: eE.intl.string(eE.t["1Wm127"]),
                          onClick: () =>
                              (0, I.Cz)({
                                  tab: n9.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: A.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(f.$, {
                          variant: "overlay-secondary",
                          text: eE.intl.string(eE.t["7kTAgJ"]),
                          onClick: n,
                      }),
                  ],
              })
            : (0, r.jsx)(f.$, {
                  variant: "overlay-primary",
                  text: eE.intl.string(eE.t.hvVgAZ),
                  onClick: n,
                  icon: j.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(la, { onAssetLoad: t }),
    });
}
function lo(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: a } = e;
    return (0, r.jsx)("div", {
        className: o()(lt.iS, { [lt.R]: a }),
        children: l
            ? (0, r.jsx)(n$, {})
            : null != n
              ? (0, r.jsx)(nz, { hero: n, onQuestCtaClick: s })
              : (0, r.jsx)(li, { onAssetLoad: t }),
    });
}
function lc(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: o()(lt.BW, lt.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: o()(lt.BW, lt.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: o()(lt.BW, lt.rZ),
                alt: "",
            }),
        ],
    });
}
let lu = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, c.zy)(),
        n = (0, c.W6)(),
        l = a.useMemo(() => (0, k.B)(s.pathname, eN.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        i = a.useMemo(() => new URLSearchParams(s.search).getAll(et.L1.AD_CREATIVE_IDS), [s.search]),
        x = (m.Fr || m.v1) && i.length > 0,
        g = (0, h.bG)([R.A], () => R.A.getState("quests")),
        {
            selectedTab: j,
            onSelectTab: T,
            tabs: L,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = Z.A.useField("tab"),
                n = (0, c.zy)(),
                l = (0, et.p5)(),
                { enabled: r } = ee.A8.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: i } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
                o = r || i;
            a.useEffect(() => {
                Z.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let u = a.useCallback((e) => {
                Z.A.getState().setTab(e);
            }, []);
            return {
                tabs: a.useMemo(
                    () =>
                        [
                            { id: et.NC.ALL, label: o ? eE.intl.string(eE.t.Jt6u7B) : eE.intl.string(eE.t["0SzXmi"]) },
                            t
                                ? {
                                      id: et.NC.CLAIMED,
                                      label: o ? eE.intl.string(eE.t["3TVY/R"]) : eE.intl.string(eE.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: et.NC.PREVIEW_TOOL, label: eE.intl.string(eE.t.BDUDau) } : null,
                        ].filter(t0.Vq),
                    [t, l, o],
                ),
                selectedTab: s,
                onSelectTab: u,
            };
        })({ withClaimedQuestsTab: !l }),
        {
            query: Q,
            setQuery: U,
            matchingQuestIds: q,
            onSearchClose: F,
        } = (() => {
            let [e, t] = a.useState(""),
                [s, n] = a.useState(null),
                l = (0, h.yK)([er.A], () =>
                    (0, et.mn)(Array.from(er.A.quests.values()), { sortMethod: tg.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                i = "" !== r,
                o = a.useMemo(() => n3()(s9.gr, 1e3), []),
                c = a.useCallback(() => {
                    o.cancel();
                    let e = (0, n5.tv)();
                    null != e &&
                        (0, s9.XH)({
                            searchSessionId: e.uuid,
                            searchSessionDurationMs: Date.now() - e.createdAtTimestamp,
                        }),
                        (0, n5.l6)();
                }, [o]),
                u = a.useCallback(() => {
                    c(), t("");
                }, [c]);
            a.useEffect(
                () => () => {
                    c();
                },
                [c],
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
                                      .filter(t0.Vq)
                                : null,
                        ),
                        i)
                    ) {
                        let { searchSession: t, isNew: s } = (0, n5.$N)();
                        s && (0, s9.OQ)({ searchSessionId: t.uuid }),
                            o({
                                searchSessionId: t.uuid,
                                searchQuery: r,
                                searchQueryLength: r.length,
                                resultsCount: e.length,
                                hasResults: e.length > 0,
                            });
                    } else u();
                },
                [i, r, o, u],
            );
            return (0, n4.RT)(r, l, d, n6), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: u };
        })();
    a.useLayoutEffect(() => {
        l && j === et.NC.CLAIMED && Z.A.setState({ tab: et.NC.ALL });
    }, [l, j]);
    let { onScroll: P } = (0, H.G)(),
        G = X.A.getState().getUtmCurrentContext(),
        z = nv((e) => e.registerAssetLoad),
        $ = a.useRef(G);
    a.useEffect(() => {
        $.current = G;
    }),
        a.useEffect(() => {
            let { current: e } = $;
            (0, O.x)({
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
    let { enabled: en } = (0, W.Z)({ location: tg.rE.QUEST_HOME_DESKTOP });
    (0, M.HU)({ location: eE.intl.string(eE.t.JALI2K) });
    let el = a.useRef(null),
        { enabled: ea, variant: ei } = ee.A8.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: eo } = ee.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        ec = ea || eo,
        eu = (ea && ei === ee.zY.NEW_LAYOUT_WITH_SEARCH) || eo,
        ed = a.useRef(null),
        em = a.useCallback((e) => {
            ed.current?.scrollToQuest(e);
        }, []),
        eh = a.useMemo(() => ((0, Y.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: ex, isLoading: eg } = (0, et.lg)(i[0] ?? null),
        ef = a.useCallback(() => {
            (0, B.Y)({
                pageType: eN.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eN.JJy.ORBS_BALANCE_MENU,
                ctaObject: eN.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, I.Cz)({ tab: n9.G2.ORBS, analyticsLocations: [], analyticsSource: A.A.ORBS_BALANCE_MENU });
        }, []);
    a.useEffect(() => {
        (0, p.I)(eN.BVt.QUEST_HOME);
    }, []),
        a.useEffect(() => {
            D.trigger();
        }, []),
        a.useEffect(() => {
            if (x || null != g) return;
            let e = new URLSearchParams(s.search),
                l = e.get(et.L1.TAB);
            if (l === et.NC.PREVIEW_TOOL) {
                let t = e.get(et.L1.QUEST_ID);
                b.A.openNativeAppModal("quests", eN.e$_.DEEP_LINK, {
                    type: le.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== et.NC.PREVIEW_TOOL) {
                let t = (0, Y.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(et.L1.SORT),
                    r = e.get(et.L1.FILTER),
                    a = e.get(et.L1.AD_CREATIVE_IDS);
                b.A.openNativeAppModal("quests", eN.e$_.DEEP_LINK, {
                    type: le.XK.QUEST_HOME,
                    params: { questId: (0, Y.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: a },
                });
            }
        }, [s.search, g, n.action, s.hash, t, x]),
        a.useEffect(() => {
            t && (0, y.Dr)(E.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let ej = a.useCallback(() => {
            (0, tC.navigateToQuestHome)({ fromContent: J.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                K.default.track(eN.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: es.Cy.VIEW_QUESTS,
                    click_id: (0, u.A)(),
                    is_targeted: !1,
                    ...(0, es.fF)(J.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        ev = a.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), el.current?.scrollToTop({ animate: !1 }), T(e), F();
            },
            [n, T, F],
        ),
        eS = a.useMemo(() => null != q && eu, [q, eu]),
        eC = a.useMemo(() => ({ onAssetLoadComplete: z }), [z]),
        e_ = a.useMemo(() => ({ onScroll: P, scrollerRef: el }), [P, el]);
    return x
        ? (0, r.jsx)(nX, { adCreativeIds: i })
        : (0, r.jsx)(nS.M.Provider, {
              value: eC,
              children: (0, r.jsx)(ls.Provider, {
                  value: e_,
                  children: (0, r.jsx)("div", {
                      className: o()(lt.kL, { [lt.KY]: !t }),
                      children: l
                          ? (0, r.jsx)(ln, {
                                withFullBleedBanner: !0,
                                header: (0, r.jsx)(ll, { selectedTab: j, onSelectTab: ev, tabs: L }),
                                banner: (0, r.jsx)(w.A, {
                                    title: eE.intl.string(eE.t.z8YP2A),
                                    titleColor: "always-white",
                                    button: (0, r.jsx)(f.$, {
                                        variant: "overlay-primary",
                                        text: eE.intl.string(eE.t.GURBQl),
                                        onClick: ej,
                                    }),
                                    className: lt.Gj,
                                    children: (0, r.jsx)(lc, { onLoadComplete: z }),
                                }),
                                children: (0, r.jsxs)("div", {
                                    className: lt.kj,
                                    children: [
                                        (0, r.jsx)(v.D, {
                                            variant: "heading-xl/semibold",
                                            children: eE.intl.string(eE.t.z8YP2A),
                                        }),
                                        (0, r.jsx)(S.E, {
                                            color: "text-subtle",
                                            variant: "text-md/normal",
                                            children: eE.intl.string(eE.t.HdKh65),
                                        }),
                                        (0, r.jsx)(C.Q, {
                                            text: eE.intl.string(eE.t["1CdL8d"]),
                                            onClick: ej,
                                            textVariant: "text-md/normal",
                                            variant: "primary",
                                        }),
                                    ],
                                }),
                            })
                          : (0, r.jsxs)(ln, {
                                header: (0, r.jsx)(ll, {
                                    selectedTab: j,
                                    onSelectTab: ev,
                                    tabs: L,
                                    endContent: (0, r.jsxs)(_.B, {
                                        gap: 8,
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "end",
                                        children: [
                                            eu &&
                                                (0, r.jsx)(N.I, {
                                                    query: Q,
                                                    onChange: U,
                                                    placeholder: eE.intl.string(eE.t.y10TI2),
                                                    onClear: F,
                                                    size: "sm",
                                                }),
                                            en &&
                                                (0, r.jsx)(V.SS, {
                                                    analyticsPage: eN.liQ.GLOBAL_DISCOVERY_QUESTS,
                                                    cardAlignment: V.cP.END,
                                                    ctaText: eE.intl.string(eE.t["J+vlIR"]),
                                                    ctaOnClick: ef,
                                                }),
                                        ],
                                    }),
                                }),
                                banner:
                                    j === et.NC.ALL &&
                                    (0, r.jsx)(lo, {
                                        onAssetLoad: z,
                                        onQuestCtaClick: em,
                                        hasSearchResults: eS,
                                        questHomeHero: ex,
                                        isLoadingQuestHomeHero: eg,
                                    }),
                                children: [
                                    eS && null != q && (0, r.jsx)(n2, { matchingQuestIds: q }),
                                    j === et.NC.CLAIMED
                                        ? (0, r.jsx)(sk, { onSelectTab: ev, className: eS ? lt.R : void 0 })
                                        : j === et.NC.PREVIEW_TOOL
                                          ? (0, r.jsx)(tZ, { className: eS ? lt.R : void 0 })
                                          : ec
                                            ? (0, r.jsx)(nx, {
                                                  className: eS ? lt.R : void 0,
                                                  ref: ed,
                                                  deepLinkedQuestId: eh,
                                                  isLoadingQuestHomeHero: eg,
                                              })
                                            : (0, r.jsx)(sN, { ref: ed }),
                                ],
                            }),
                  }),
              }),
          });
};
