(s.d(t, { A: () => lt }), s(323874), s(14289), s(35956), s(205816));
var i,
    n,
    a,
    l,
    r,
    c = s(477900),
    o = s(582128),
    d = s(503698),
    u = s.n(d),
    m = s(806163),
    x = s(17928),
    g = s(289873),
    p = s(73153),
    f = s(73825),
    h = s(974544),
    N = s(107834),
    A = s(793574),
    j = s(688810),
    E = s(277984),
    b = s(86379),
    T = s(160946),
    R = s(545075),
    C = s(840251),
    I = s(688151);
let _ = new C.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var v = s(611924),
    P = s(75678),
    S = s(976860),
    y = s(351906),
    D = s(287809),
    M = s(295405),
    O = s(166403),
    L = s(174459),
    U = s(474090),
    k = s(10392);
s(321073);
var G = s(269115),
    w = s(689175),
    B = s(961250),
    H = s(366505),
    F = s(321191),
    V = s(903209),
    z = s(131168),
    W = s(482589),
    Y = s(511484),
    K = s(315629),
    X = s(297264),
    J = s(834730),
    Z = s(65470),
    q = s(375708),
    Q = s(719126);
let $ = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, j.Ay)(s);
    return (0, c.jsx)(j.f5, {
        value: n,
        children: (0, c.jsxs)(K.h, {
            className: u()(Q.kL, Q.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: Q.FS,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: "heading-xxl/bold",
                            className: Q.R_,
                            children: q.intl.string(q.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(J.E, { variant: "text-md/medium", children: q.intl.string(q.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: Q.SB,
                            children: (0, c.jsx)(Z.A, {
                                buttonTextOverride: q.intl.string(q.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: Q._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var ee = s(877624),
    et = s(192308),
    es = s(331322),
    ei = s(403581),
    en = s(821609),
    ea = s(502572),
    el = s(775602),
    er = s(366999),
    ec = s(531260),
    eo = s(780964),
    ed = s(766075),
    eu = s(786300),
    em = s(975571),
    ex = s(158045),
    eg = s(89366),
    ep = s(881489),
    ef = s(724651),
    eh = s(732280),
    eN = s(549996),
    eA = s(172218);
function ej() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eA.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eE = s(287763);
let eb = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eE.i,
        children: (0, c.jsx)(J.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var eT = s(371764),
    eR = s(103411),
    eC = s(792656),
    eI = s(536637),
    e_ = s.n(eI),
    ev = s(496431),
    eP = s(850292);
let eS = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, ev.A)(e_()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(eP.Xl, s, { [eP.a3]: "text-lg/bold" === i }),
        children: [
            (0, c.jsx)(J.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: q.intl.string(q.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: eP.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: eP.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: eP.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: eP.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: eP.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(J.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return q.intl.string(q.t.ixASa2);
                                                        case "hours":
                                                            return q.intl.string(q.t["8sNvNn"]);
                                                        case "minutes":
                                                            return q.intl.string(q.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return q.intl.string(q.t.JhaiLW);
                                                        default:
                                                            return "";
                                                    }
                                                })(e.unitType),
                                            }),
                                        ],
                                    },
                                    e.unitType,
                                ),
                                !t &&
                                    (0, c.jsx)(J.E, {
                                        className: eP.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === d.length - 1, i),
                ),
            }),
        ],
    });
};
var ey = s(473702),
    eD = s(778712),
    eM = s(97808),
    eO = s(609425),
    eL = s(660184),
    eU = s(854627),
    ek = s(427262),
    eG = s(938767);
function ew() {
    let e = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, eO.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eU.A)({ userId: e?.id, size: eD._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, ek.mG)(e);
    return (0, c.jsxs)("div", {
        className: eG.kL,
        children: [
            (0, c.jsx)("div", {
                className: eG.my,
                children: (0, c.jsx)(eM.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eD._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: eG.QC, children: (0, c.jsx)(eL.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eB = s(707554),
    eH = s(628154);
let eF = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(eB.F, {
        forceLevel: 1,
        children: (0, c.jsx)(X.D, { className: u()(eH.w, t, i && eH.n), variant: n, color: s, children: a }),
    });
};
var eV = s(508770),
    ez = s(815996),
    eW = s(851746),
    eY = s(326084),
    eK = s(197630),
    eX = s(664654);
s(232198);
var eJ = s(652215),
    eZ = s(879416),
    eq = s(144165),
    eQ = s(590251),
    e$ = s(607470),
    e0 = s(303682),
    e1 = s(162907);
let e2 =
    "https://cdn.discordapp.com/assets/content/f94d752e86f195c300db953fbe5c704cbf0c696dcbb0b3e389cd60e8a633a942.png";
var e3 = s(188828);
let e7 =
    "https://cdn.discordapp.com/assets/content/ceb223833c25175aadddac32ce46fd1c60f4455860c6be9017c8d5993dce01c9.png";
var e6 = s(764014),
    e5 = s(484252);
let e8 =
    "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg";
function e9(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eU.A)({ userId: t.id, size: eD._3.SIZE_24 });
    return (0, c.jsx)(
        eM.eu,
        { className: e1.bj, src: s, "aria-label": (0, ek.mG)(t), size: eD._3.SIZE_24, ...i },
        t.id,
    );
}
function e4(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e1.p, children: t });
}
function te(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e1.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < eX.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e9, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e4, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let tt = { width: 200, height: 160 },
    ts = { width: 100, height: 60 },
    ti = { width: 60, height: 40 };
function tn(e) {
    let {
            nReferralsSent: t,
            imageSize: s = 93,
            backgroundClassName: i,
            ringClassName: n,
            referralRewardType: a = null,
            useAltReferralCardArt: l = !1,
        } = e,
        r = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
        {
            src: o,
            srcSet: d,
            dimensions: u,
        } = l
            ? a === eK.xb.ORBS
                ? { src: e7, srcSet: `${e7} 1x, ${e6.A} 2x`, dimensions: r ? ts : tt }
                : a === eK.xb.DISCOUNT
                  ? { src: e2, srcSet: `${e2} 1x, ${e3.A} 2x`, dimensions: ti }
                  : { src: e8, srcSet: void 0, dimensions: null }
            : { src: e8, srcSet: void 0, dimensions: null },
        m = u?.width ?? s,
        g = u?.height ?? s;
    return (0, c.jsx)(eQ.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e1.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e1.e0,
        overlayClassName: t === eX.Z ? e1.ys : void 0,
        children:
            a === eK.xb.ORBS && l && !r
                ? (0, c.jsx)(e$.A, {
                      className: e1.HF,
                      width: m,
                      height: g,
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      controls: !1,
                      children: (0, c.jsx)("source", { src: e5.A, type: "video/webm" }),
                  })
                : null != d
                  ? (0, c.jsx)("img", { src: o, srcSet: d, alt: "", role: "presentation", width: m, height: g })
                  : (0, c.jsx)(eq._, { src: o, height: g, width: m, zoomable: !1 }),
    });
}
var ta = s(478016),
    tl = s(318254),
    tr = s(661531),
    tc = s(626031),
    to = s(957457);
function td(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eK.xb.ORBS
          ? (0, c.jsx)(tu, { nRewardsGranted: t, className: i })
          : s === eK.xb.DISCOUNT
            ? (0, c.jsx)(tm, { nRewardsGranted: t, className: i })
            : null;
}
function tu(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(i);
        }, [i]),
        (0, c.jsxs)(es.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: to.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(tl.C, { size: "xs", color: tr.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(tc.t, {
                            value: n,
                            onValueChange: eJ.tEg,
                            onValueReached: eJ.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "text-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(J.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: q.intl.string(q.t.UhguER),
                }),
            ],
        })
    );
}
function tm(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(es.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": q.intl.formatToPlainString(q.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(ta.U, { size: "md", color: tr.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(J.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: q.intl.format(q.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var tx = s(758836),
    tg = s(558992);
function tp(e) {
    let { className: t } = e,
        {
            referralSentUsers: i,
            nReferralsSent: n,
            hasEligibleFriends: a,
            allSent: l,
            headingText: r,
            bodyText: o,
            referralStatus: d,
            isEligibleForIncentive: m,
            referralIncentiveRewardType: g,
            useAltReferralCardArt: p,
            shouldShowSpendOrbsCta: f,
        } = (function () {
            let e,
                t,
                s,
                { location: i = "PremiumNitroHomeReferralBanner" } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { referralSentUsers: n } = (0, eX.J)(),
                a = (0, x.bG)([eW.A], () => eW.A.getRecipientStatus()),
                l = !1 !== (0, x.bG)([eW.A], () => eW.A.getHasEligibleFriends()),
                {
                    isEligibleForIncentive: r,
                    referralRewardType: c,
                    useAltReferralCardArt: o,
                } = (0, eZ.x)({ location: i }),
                d = r ? c : null,
                u =
                    ((e = 0),
                    (t = 0),
                    (s = 0),
                    a.forEach((i) => {
                        i === eY.aK.REFERRER_REWARD_GRANTED
                            ? (e++, t++, s++)
                            : i === eY.aK.CONVERTED
                              ? (t++, s++)
                              : i === eY.aK.REDEEMED && s++;
                    }),
                    { numRewardGranted: e, numConverted: t, numRedeemed: s, numSent: a.size }),
                m = a.size === eX.Z,
                g = (function (e, t, s) {
                    let i = em.A.getArticleURL(eJ.MVz.REFERRAL_PROGRAM);
                    if (!e) return q.intl.format(q.t["zWhX/Q"], { helpdeskArticle: i });
                    if (null != s)
                        return t.numRewardGranted === eX.Z
                            ? s === eK.xb.ORBS
                                ? q.intl.format(q.t.OluhLp, { helpdeskArticle: i })
                                : q.intl.format(q.t["8BYihN"], { helpdeskArticle: i })
                            : t.numSent === eX.Z
                              ? s === eK.xb.ORBS
                                  ? q.intl.format(q.t["1aV1j9"], { helpdeskArticle: i })
                                  : q.intl.format(q.t.QNrPuS, { helpdeskArticle: i })
                              : e
                                ? s === eK.xb.ORBS
                                    ? q.intl.format(q.t.cfE0uG, { numOrbs: 5e3, helpdeskArticle: i })
                                    : q.intl.format(q.t["+fcvlI"], { helpdeskArticle: i })
                                : q.intl.format(q.t["a0+Jwv"], { helpdeskArticle: i });
                    return t.numSent === eX.Z
                        ? t.numRedeemed === eX.Z
                            ? q.intl.format(q.t["1aEjsH"], { helpdeskArticle: i })
                            : q.intl.format(q.t["+u3AOO"], { helpdeskArticle: i })
                        : q.intl.format(q.t["omMr+V"], { helpdeskArticle: i });
                })(l, u, d),
                p =
                    d === eK.xb.ORBS
                        ? q.intl.string(q.t.tAlkl4)
                        : d === eK.xb.DISCOUNT
                          ? q.intl.formatToPlainString(q.t["/JJ9I5"], { discountPercent: 30 })
                          : q.intl.string(q.t.USo4s7),
                f = d === eK.xb.ORBS && u.numSent === eX.Z && u.numConverted >= 1;
            return {
                referralSentUsers: n,
                nReferralsSent: u.numSent,
                hasEligibleFriends: l,
                allSent: m,
                headingText: p,
                bodyText: g,
                referralStatus: u,
                isEligibleForIncentive: r,
                referralIncentiveRewardType: d,
                useAltReferralCardArt: o,
                shouldShowSpendOrbsCta: f,
            };
        })({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(tg.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tg.G3,
                children: (0, c.jsx)(tn, {
                    nReferralsSent: n,
                    imageSize: 55,
                    backgroundClassName: tg.HP,
                    ringClassName: tg.pZ,
                    referralRewardType: g,
                    useAltReferralCardArt: m && p,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(tg.IH, m && tg.zD),
                children: [
                    m &&
                        (0, c.jsx)("div", {
                            className: tg.aZ,
                            children: (0, c.jsx)(eV.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: tg.n4,
                        children: [
                            (0, c.jsx)(J.E, {
                                variant: m ? "text-md/bold" : "text-md/semibold",
                                color: "text-strong",
                                children: r,
                            }),
                            (0, c.jsx)(J.E, {
                                variant: m ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: o,
                            }),
                        ],
                    }),
                    m
                        ? (0, c.jsxs)("div", {
                              className: tg.Wp,
                              children: [
                                  (0, c.jsx)(te, { referralSentUsers: i }),
                                  (0, c.jsx)(td, { nRewardsGranted: d.numRewardGranted, referralRewardType: g }),
                              ],
                          })
                        : (0, c.jsx)(te, { referralSentUsers: i, className: tg.t7 }),
                ],
            }),
            (0, c.jsx)(en.$, {
                variant: "primary",
                disabled: !f && (!1 === a || !0 === l),
                text: f ? q.intl.string(q.t.iw5Ccc) : q.intl.string(q.t.Lm2nFc),
                onClick: () =>
                    f
                        ? (0, ez.Cz)({
                              tab: tx.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (function (e) {
                              let { startingScreen: t, analyticsLocations: i } = e;
                              (L.default.track(eJ.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
                                  (0, et.openModalLazy)(async () => {
                                      let { default: e } = await Promise.resolve().then(s.bind(s, 303682));
                                      return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
                                  }));
                          })({ startingScreen: e0.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tf = s(702841),
    th = s(676279),
    tN = s(202091),
    tA = s(717421),
    tj = s(396583),
    tE = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tb = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tT = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: s,
            yAxisAnimationData: i,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: l = !1,
            animationSpeedScale: r = 1,
            children: d,
        } = e,
        u = (0, tA.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, tA.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [f, h] = (0, o.useState)(1),
        N = (0, tA.z)(
            null != t
                ? {
                      from: { blur: f > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: f > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => h((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, o.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, E] = (0, o.useState)(0),
        [b, T] = (0, o.useState)(1),
        R = (0, tA.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tj.A)(() => {
        (E(b * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(tN.animated.div, {
              style: {
                  transform: u.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = m(e * Math.PI * 2) * i.range,
                          s = 0;
                      if (null != n) {
                          let e = n.range * (1 - n.containerVisibilityPercentage);
                          s = "up" === n.pathDirection ? -e : e;
                      }
                      return `translateY(${t + s}px)`;
                  }),
                  translateX: a ? R.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tR = s(382168);
let tC = function (e) {
        let {
            isMotionReduced: t,
            containerVisibilityPercentage: s,
            boltContainerClassName: i,
            carContainerClassName: n,
            hammerContainerClassName: a,
            keyContainerClassName: l,
            starContainerClassName: r,
            boltAssetClassName: o,
            carAssetClassName: d,
            hammerAssetClassName: m,
            keyAssetClassName: x,
            starAssetClassName: g,
            animationSpeedScale: p = 1,
            blurScale: f = 1,
        } = e;
        return (0, c.jsxs)(c.Fragment, {
            children: [
                null != i &&
                    (0, c.jsx)("div", {
                        className: u()(tR.nJ, i),
                        children: (0, c.jsx)(tT, {
                            blurAnimationData: { startBlurRadius: 10 * f, endBlurRadius: 0, duration: 3e3 },
                            scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tE.COSINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.UP,
                                          range: 125,
                                          containerVisibilityPercentage: s,
                                          changeOpacity: !0,
                                      }
                                    : void 0,
                            animateXAxisWiggle: !0,
                            isMotionReduced: t,
                            animationSpeedScale: p,
                            children: (0, c.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                                className: o,
                                alt: "",
                            }),
                        }),
                    }),
                null != n &&
                    (0, c.jsx)("div", {
                        className: u()(tR.IN, n),
                        children: (0, c.jsx)(tT, {
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tE.COSINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.DOWN,
                                          range: 50,
                                          containerVisibilityPercentage: s,
                                          changeOpacity: !0,
                                      }
                                    : void 0,
                            animateXAxisWiggle: !0,
                            isMotionReduced: t,
                            animationSpeedScale: p,
                            children: (0, c.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                                className: d,
                                alt: "",
                            }),
                        }),
                    }),
                null != a &&
                    (0, c.jsx)("div", {
                        className: u()(tR.Gj, a),
                        children: (0, c.jsx)(tT, {
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tE.SINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.DOWN,
                                          range: 120,
                                          containerVisibilityPercentage: s,
                                          changeOpacity: !0,
                                      }
                                    : void 0,
                            animateXAxisWiggle: !0,
                            isMotionReduced: t,
                            animationSpeedScale: p,
                            children: (0, c.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                                className: m,
                                alt: "",
                            }),
                        }),
                    }),
                null != l &&
                    (0, c.jsx)("div", {
                        className: u()(tR.FV, l),
                        children: (0, c.jsx)(tT, {
                            blurAnimationData: { startBlurRadius: 5 * f, endBlurRadius: 0, duration: 4e3 },
                            scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tE.SINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.UP,
                                          range: 200,
                                          containerVisibilityPercentage: s,
                                          changeOpacity: !0,
                                      }
                                    : void 0,
                            animateXAxisWiggle: !0,
                            isMotionReduced: t,
                            animationSpeedScale: p,
                            children: (0, c.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                                className: x,
                                alt: "",
                            }),
                        }),
                    }),
                null != r &&
                    (0, c.jsx)("div", {
                        className: u()(tR.E1, r),
                        children: (0, c.jsx)(tT, {
                            blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * f, duration: 3e3 },
                            scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                            yAxisAnimationData: { range: 20, duration: 4e3, path: tE.COSINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.UP,
                                          range: 50,
                                          containerVisibilityPercentage: s,
                                          changeOpacity: !0,
                                      }
                                    : void 0,
                            animateXAxisWiggle: !0,
                            isMotionReduced: t,
                            animationSpeedScale: p,
                            children: (0, c.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                                className: g,
                                alt: "",
                            }),
                        }),
                    }),
            ],
        });
    },
    tI =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    t_ = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: n,
            assetClassName: a,
            animationSpeedScale: l = 1,
        } = e;
        return s
            ? (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)(tT, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tE.SINE },
                      parallaxAnimationData: {
                          pathDirection: tb.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: l,
                      children: t
                          ? (0, c.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, c.jsx)(
                                e$.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tI }),
                                },
                                tI,
                            ),
                  }),
              });
    },
    tv = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: s,
                flyingWumpusAssetClassName: i,
                boltContainerClassName: n,
                carContainerClassName: a,
                hammerContainerClassName: l,
                keyContainerClassName: r,
                starContainerClassName: o,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: p = 1,
            } = e,
            f = (0, tf.bG)([el.Ay], () => el.Ay.useReducedMotion),
            h = (0, th.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(t_, {
                    supportHEVCAlpha: h,
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(tC, {
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: n,
                    carContainerClassName: a,
                    hammerContainerClassName: l,
                    keyContainerClassName: r,
                    starContainerClassName: o,
                    boltAssetClassName: d,
                    carAssetClassName: u,
                    hammerAssetClassName: m,
                    keyAssetClassName: x,
                    starAssetClassName: g,
                    animationSpeedScale: p,
                }),
            ],
        });
    };
var tP = s(942663);
let tS = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tv, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tP.wG, s && tP.Vx),
        flyingWumpusAssetClassName: u()(tP.lu, s && tP.ov),
        boltContainerClassName: u()(tP.nJ, s && tP.Wc),
        hammerContainerClassName: u()(tP.Gj, s && tP.XA),
        keyContainerClassName: u()(tP.FV, s && tP.oZ),
        starContainerClassName: u()(tP.E1, s && tP.LN),
        boltAssetClassName: u()(tP.j7, s && tP.QN),
        hammerAssetClassName: u()(tP.Wv, s && tP.B9),
        keyAssetClassName: u()(tP.rs, s && tP.I1),
        starAssetClassName: u()(tP.OY, s && tP.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var ty = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tD = s(454273);
let tM = function (e) {
    let t,
        s,
        {
            className: i,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: l,
            shouldShowReferralProgressBar: r,
            marketingBanner: o,
            heroButtons: d,
        } = e,
        { visibilityPercentageRef: m, visibilityPercentage: g } = ej(!(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion)),
        p =
            ((t = { [ty.MORNING]: q.t["Wvc/I+"], [ty.AFTERNOON]: q.t["d+0STx"], [ty.EVENING]: q.t.CqsxKI }),
            q.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? ty.MORNING
                        : s >= 12 && s < 17
                          ? ty.AFTERNOON
                          : ty.EVENING
                ],
            )),
        f = o ?? (r ? (0, c.jsx)(tp, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, i),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(tD.W2, tD.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(es.B, {
                    align: "start",
                    gap: 32,
                    className: tD.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(es.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(es.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(eF, {
                                            className: tD.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: p,
                                        }),
                                        (0, c.jsx)(ew, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tD.y3,
                    children: (0, c.jsx)(tS, { containerVisibilityPercentage: g, compact: null == f }),
                }),
            ],
        }),
    });
};
var tO = s(549926);
let tL = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tv, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tO.wG,
        flyingWumpusAssetClassName: tO.lu,
        boltContainerClassName: tO.nJ,
        hammerContainerClassName: tO.Gj,
        keyContainerClassName: tO.FV,
        starContainerClassName: tO.E1,
        boltAssetClassName: tO.j7,
        hammerAssetClassName: tO.Wv,
        keyAssetClassName: tO.rs,
        starAssetClassName: tO.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tU = s(499126);
let tk = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tv, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tU.wG,
        flyingWumpusAssetClassName: tU.lu,
        boltContainerClassName: tU.nJ,
        hammerContainerClassName: tU.Gj,
        keyContainerClassName: tU.FV,
        starContainerClassName: tU.E1,
        boltAssetClassName: tU.j7,
        hammerAssetClassName: tU.Wv,
        keyAssetClassName: tU.rs,
        starAssetClassName: tU.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tG = s(202541);
function tw(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, ep.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = ej(!(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tD.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tD.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(es.B, {
                    align: "start",
                    gap: 24,
                    className: tD.E2,
                    children: [
                        (0, c.jsxs)(es.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eb, { text: q.intl.string(q.t.yhldRB) }),
                                (0, c.jsx)(eF, { children: q.intl.format(q.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tD.X8,
                                    children: (0, c.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: q.intl.string(q.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(es.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tD.oF,
                            children: [
                                (0, c.jsx)(eC.A, {
                                    size: "md",
                                    buttonTextOverride: q.intl.string(q.t["2+luBl"]),
                                    iconOverride: ei.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(en.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: q.intl.string(q.t.Af7ye6),
                                    onClick: () => (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tD.Hk, children: (0, c.jsx)(tk, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tB(e) {
    let {
            className: t,
            buttonVisibilityRef: i,
            userDiscountOffer: n,
            discountedPrice: a,
            premiumSubscription: l,
            analyticsLocations: r,
            headingTop: o,
            showPill: d,
            shouldShowReferralProgressBar: m,
            marketingBanner: g,
        } = e,
        { visibilityPercentageRef: p, visibilityPercentage: f } = ej(!(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion)),
        h = g ?? (m ? (0, c.jsx)(tp, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, t),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: u()(tD.W2, tD.HQ),
            ref: p,
            children: [
                (0, c.jsxs)(es.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tD.ZU, tD.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eS, { expiresAt: n.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(es.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eF, {
                                    children: q.intl.format(q.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: q.intl.format(q.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, ex.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(es.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(en.$, {
                                    variant: "expressive",
                                    icon: ei.t,
                                    size: "md",
                                    text: q.intl.string(q.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = ey.g.CONFIRM_DISCOUNT),
                                            void (0, et.openModalLazy)(async () => {
                                                let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                    await Promise.all([
                                                        s.e("489361"),
                                                        s.e("227853"),
                                                        s.e("470126"),
                                                        s.e("128804"),
                                                        s.e("71151"),
                                                        s.e("286615"),
                                                        s.e("311541"),
                                                        s.e("472847"),
                                                        s.e("870088"),
                                                        s.e("989649"),
                                                        s.e("925420"),
                                                        s.e("966366"),
                                                        s.e("338332"),
                                                        s.e("153302"),
                                                        s.e("758053"),
                                                        s.e("88683"),
                                                        s.e("983513"),
                                                        s.e("216806"),
                                                        s.e("310734"),
                                                        s.e("348567"),
                                                        s.e("452075"),
                                                        s.e("900277"),
                                                        s.e("127962"),
                                                        s.e("364827"),
                                                        s.e("907167"),
                                                        s.e("952372"),
                                                        s.e("861060"),
                                                        s.e("56366"),
                                                        s.e("639161"),
                                                        s.e("910486"),
                                                        s.e("678157"),
                                                        s.e("646271"),
                                                        s.e("40291"),
                                                        s.e("544571"),
                                                        s.e("102328"),
                                                        s.e("729963"),
                                                        s.e("538513"),
                                                        s.e("370112"),
                                                        s.e("50097"),
                                                        s.e("978436"),
                                                        s.e("594161"),
                                                        s.e("435432"),
                                                        s.e("80347"),
                                                        s.e("680166"),
                                                    ]).then(s.bind(s, 293061));
                                                return (s) =>
                                                    (0, c.jsx)(t, {
                                                        ...s,
                                                        analyticsLocations: r,
                                                        initialStep: e,
                                                        premiumSubscription: l,
                                                    });
                                            })
                                        );
                                    },
                                }),
                                (0, c.jsx)(Z.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: q.intl.string(q.t["3KomGa"]),
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tD.y3, tD.Xx),
                    children: (0, c.jsx)(tL, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function tH(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: o,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tV(),
        { analyticsLocations: m } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, eN.c)(ee.C.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eJ.Dmq.CANCELED,
        p = null;
    null != x &&
        "marketingPageBanner" === x.properties.properties.oneofKind &&
        (p = (0, c.jsx)(eT.x, {
            componentId: x.id,
            promotionId: x.promotionId,
            promotionBannerMarketingComponentFields: x.properties.properties.marketingPageBanner,
        }));
    let f = (0, eh.V)(),
        h = (0, ef.O)(),
        N = (0, Y.U9)(h, tG.pe.TIER_2) ? tG.pe.TIER_2 : void 0,
        E = null != r && r.status !== eJ.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        b = (0, ec.A)(),
        T = b.isFractionalPremiumActive && !E && null == p && !l;
    if (s) return (0, c.jsx)(tw, { fpEndsAt: b.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: tD.UJ,
                  children: [
                      (0, c.jsx)(eC.A, { size: "md", subscriptionTier: f?.subscriptionTrial?.skuId ?? N }),
                      (0, c.jsx)(Z.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: q.intl.string(q.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tM, {
            className: t,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: u,
            shouldShowReferralProgressBar: i,
            marketingBanner: p,
            heroButtons: e,
        });
    }
    return l && null != o && null != r
        ? (0, c.jsx)(tB, {
              className: t,
              buttonVisibilityRef: u,
              userDiscountOffer: o,
              discountedPrice: d,
              premiumSubscription: r,
              analyticsLocations: m,
              headingTop: n,
              showPill: a,
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          })
        : (0, c.jsx)(tM, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          });
}
let [tF, tV] = (0, eu.A)(),
    tz = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, ep.ds)(),
            r = (0, eg.QQ)(),
            o = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            d = null != o && o.status === eJ.Dmq.CANCELED && null != i,
            u = r && !d,
            m = q.intl.string(q.t.qYKftX),
            g = (0, eR.m)(),
            { fractionalState: p, endsAt: f } = (0, ec.A)(),
            h = (0, er.Ay)(f, er.yE.CREDITS_ENDS_IN),
            N = null;
        if (p === tG.xc.NONE || l) N = (0, c.jsx)(eb, { text: m });
        else {
            u = !0;
            let e = q.intl.format(q.t["yR+oDD"], {
                helpCenterLink: em.A.getArticleURL(eJ.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            N = (0, c.jsx)(ea.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tD.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tD.V_,
                        children: (0, c.jsx)("div", { className: tD.eL, children: (0, c.jsx)(eb, { text: h }) }),
                    }),
            });
        }
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)(tF.Provider, {
                value: {
                    headingTop: N,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, c.jsx)(tH, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var tW = s(820284),
    tY = s(742589),
    tK = s(392943),
    tX = s(285373),
    tJ = s(603202),
    tZ = s(673992);
let tq = function () {
    return (0, c.jsx)(tW.A, {
        section: eJ.JJy.NAVIGATION,
        children: (0, c.jsx)(tY.A, {
            className: u()(tJ.TQ, tZ.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: tJ.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: tZ.wk,
                        children: [
                            (0, c.jsx)(ei.t, { colorClass: tZ.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": q.intl.string(q.t.Ipxkog),
                                className: tZ.Ss,
                                children: (0, c.jsx)(tK.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: tJ.MQ,
                        children: [
                            (0, c.jsx)(tX.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(Z.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tQ = s(325499),
    t$ = s(562708),
    t0 = s(885574),
    t1 = s(43990),
    t2 = s(993077),
    t3 = s(139286),
    t7 = s(872725),
    t6 = s(920050),
    t5 = s(51965),
    t8 = s(375776),
    t9 = s(727811),
    t4 = s(222652),
    se = s(553875),
    st = s(934353);
function ss(e) {
    let { openRewardModal: t } = e,
        s = (0, t4.z)();
    if (s.kind === t4.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: st.R$,
            children: [
                (0, c.jsx)(eC.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tG.pe.TIER_2,
                }),
                (0, c.jsx)(en.$, { variant: "secondary", size: "md", text: q.intl.string(q.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === t9.P.CLAIMED
            ? { text: q.intl.string(se.default.Plwzgf) }
            : { text: q.intl.string(q.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: st.R$,
                children: [
                    (0, c.jsx)(t5.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(en.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === t9.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: st.ed,
                    children: [
                        (0, c.jsx)(t0.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(J.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: q.intl.string(se.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function si(e) {
    let { glowing: t = !1 } = e;
    (0, t3.A)({
        type: t$.ImpressionTypes.VIEW,
        name: t$.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t6.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, et.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(t1.N, {
        theme: eJ.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, st.kL),
                    children: (0, c.jsx)(t7.A, {
                        cardType: t2.s.CUSTOM,
                        cardClassName: st.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: st.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: st.j,
                                    children: [
                                        (0, c.jsx)("div", { className: st._g }),
                                        (0, c.jsx)("div", { className: st.$h }),
                                        (0, c.jsx)("div", { className: st.Rv }),
                                        (0, c.jsx)("div", { className: st.Lw }),
                                        (0, c.jsx)("div", { className: st.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: st.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: st.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(X.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: st.DD,
                                            children: q.intl.string(se.default.RGT513),
                                        }),
                                        (0, c.jsx)(J.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: st.h_,
                                            children: q.intl.string(se.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(ss, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sn = s(744064),
    sa = s(112992);
function sl(e) {
    let { className: t, containerClassName: s, glowing: i } = e,
        n = (0, t4.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === t4.N.SUBSCRIBE
                ? a
                : {
                      ...a,
                      ctaText: n.text,
                      ctaIcon: n.icon,
                      ctaIconPosition: n.iconPosition,
                      ctaDisabled: n.disabled,
                      ctaLoading: n.loading,
                      onCtaClick: n.onClick,
                  };
    return (0, c.jsx)(sn.S, {
        id: t6.XBOX_PREMIUM_PERK_CARD_ID,
        title: q.intl.string(se.default.UVL9tD),
        description: q.intl.string(se.default["I+IXr0"]),
        ...l,
        className: t,
        containerClassName: s,
        glowing: i,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: sa.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function sr(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(sl, { ...e }) });
}
var sc = s(744082),
    so = s(700556),
    sd = s(821874);
function su(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = sd.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && so.Jx, l), children: a }) : null,
        ],
    });
}
var sm = s(517846),
    sx = s(509434),
    sg = s(695366),
    sp = s(27620),
    sf = s(44724),
    sh = s(371794),
    sN = s(789861),
    sA = s(592909),
    sj = s(398523),
    sE = s(881373),
    sb = s(721157),
    sT = s(555393),
    sR = s(852218),
    sC = s(239016),
    sI = s(280761),
    s_ = s(881296),
    sv = s(945810);
let sP = (0, sv.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sS = s(612413);
let sy = new Date(Date.UTC(2026, 10, 5));
var sD = s(188275),
    sM = s(310235),
    sO = s(334551),
    sL = s(287388),
    sU = s(5717),
    sk = s(762359);
let sG =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sw =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg";
var sB = s(679502),
    sH = s(762493);
let sF = "xgpp";
function sV(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tQ.b)("premium_subscriber_home_rewards");
    (0, sc.A)(tG.tv);
    let {
            callOfDutyCard: n,
            expiredCallOfDutyCard: a,
            logitechCard: l,
            rustCard: r,
            steelseriesCard: d,
            youtubeCard: m,
            riotCampaignCard: x,
        } = (function () {
            let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                t = (0, sI.U)(),
                s = (0, sA.A0)({ location: "useHardwarePartnerPerkCards" }),
                i = (0, sA.hd)({ location: "useHardwarePartnerPerkCards" }),
                n = (0, sE.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                a = sj.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                l = (0, sS.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                r = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = sP.useConfig({ location: t });
                    return s;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                d = null === (0, sT.N)(),
                { currentDate: u, nDaysInMonth: m } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let o = s
                        ? {
                              id: t6.CALL_OF_DUTY_3PP_CARD_ID,
                              title: q.intl.string(sM.default.F0b4Z8),
                              description: q.intl.formatToPlainString(sM.default["hworR+"], {
                                  validDates: (0, sN.a1)(),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: q.intl.formatToPlainString(sM.default.g7iyvR, { date: (0, sN.mh)() }),
                              caption: (0, c.jsx)("img", { src: sw, alt: "Call of Duty: MW4" }),
                              backgroundAssetUrl: sG,
                              ctaText: q.intl.string(sM.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sC.P)({
                                      partnerIds: [sR.Bt],
                                      title: q.intl.string(sM.default.YJsqDS),
                                      subtitle: q.intl.format(sM.default.ieA3V0, {
                                          termsUrl:
                                              "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                                      }),
                                      modalTeaser: {
                                          title: q.intl.string(sM.default.Dkm10r),
                                          body: q.intl.string(sM.default.LHAkT9),
                                      },
                                      analyticsLocations: e,
                                  }),
                              analyticsOptions: { thirdPartyPartner: sR.Bt },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    x = i
                        ? {
                              id: t6.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                              title: q.intl.string(sM.default["IcD/7p"]),
                              description: q.intl.formatToPlainString(sM.default.hausFi, { date: (0, sN.wT)() }),
                              isThirdPartyPerk: !0,
                              expired: !0,
                              pillText: q.intl.string(sM.default.fxF0Jz),
                              caption: (0, c.jsx)("img", { src: sw, alt: "Call of Duty: MW4" }),
                              backgroundAssetUrl: sG,
                              analyticsOptions: { thirdPartyPartner: sR.Bt },
                          }
                        : null,
                    g = n
                        ? {
                              id: t6.LOGITECH_3PP_CARD_ID,
                              title: q.intl.string(sO.default.OlObRa),
                              description: q.intl.format(sO.default.ZGOJ8R, {
                                  discountPercent: sE.aW,
                                  termsUrl: em.A.getArticleURL(eJ.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: u.getDate() / m,
                              ctaText: q.intl.string(q.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sC.P)({
                                      partnerIds: [sR.XY],
                                      title: q.intl.string(sO.default["2I7nK+"]),
                                      subtitle: q.intl.format(sO.default.W8jOD0, {
                                          termsUrl: em.A.getArticleURL(eJ.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: e,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: sR.XY },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    p = a
                        ? {
                              id: t6.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: q.intl.string(q.t.m7PucM),
                              description: q.intl.format(q.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: u.getDate() / m,
                              ctaText: q.intl.string(q.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sC.P)({
                                      partnerIds: [sR.KS],
                                      title: q.intl.string(q.t["7ioAjs"]),
                                      subtitle: q.intl.format(q.t.LOYRxB, {
                                          helpCenterLink: em.A.getArticleURL(eJ.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: e,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: sR.KS },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    f = r
                        ? {
                              id: t6.RUST_3PP_CARD_ID,
                              title: q.intl.string(sU.default.gQ1ctg),
                              description: q.intl.format(sU.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(q.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(sy),
                                  termsUrl: em.A.getArticleURL(eJ.MVz.RUST_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: q.intl.string(q.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, sh.YE)(sD.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: q.intl.string(sU.default.NmBRGV),
                              ctaIcon: sx.I,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, sf.default)({ applicationId: sD.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null;
                return {
                    callOfDutyCard: o,
                    expiredCallOfDutyCard: x,
                    logitechCard: g,
                    rustCard: f,
                    steelseriesCard: p,
                    youtubeCard: l
                        ? {
                              id: t6.YOUTUBE_3PP_CARD_ID,
                              title: q.intl.string(sk.default["BdIVB+"]),
                              description: q.intl.format(sk.default["3jY5i3"], {
                                  helpCenterUrl: em.A.getArticleURL(eJ.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: sB.A, alt: "YouTube Premium" }),
                              ctaText: q.intl.string(sM.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sC.P)({
                                      partnerIds: [sR.NC],
                                      analyticsLocations: e,
                                      title: q.intl.string(sk.default.TDZUui),
                                      subtitle: q.intl.format(sk.default.BTLkvw, {
                                          helpCenterUrl: em.A.getArticleURL(eJ.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      modalTeaser: {
                                          title: q.intl.format(sk.default.J8CVYT, {
                                              helpCenterUrl: em.A.getArticleURL(
                                                  eJ.MVz.YOUTUBE_PROMOTION_CURRENT_SUBSCRIBER,
                                              ),
                                          }),
                                          titleVariant: "text-sm/medium",
                                          icon: sg.E,
                                      },
                                      onClose: () => {
                                          sp.Ay.fireSurveyAction(sm.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: sR.NC },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    riotCampaignCard:
                        null != t
                            ? {
                                  id: t6.RIOT_CREDIT_CAMPAIGN_PERK_CARD_ID,
                                  title: q.intl.string(sL.default.zCdMTs),
                                  description: q.intl.formatToPlainString(sL.default["8VH2lL"], {
                                      termsUrl: em.A.getArticleURL(eJ.MVz.RIOT_CREDIT_CAMPAIGN),
                                  }),
                                  pillText:
                                      null != t.redemptionEndsAt
                                          ? q.intl.formatToPlainString(sM.default.g7iyvR, {
                                                date: (0, sb.Sw)(t.redemptionEndsAt),
                                            })
                                          : void 0,
                                  caption: (0, c.jsx)("img", {
                                      src: "https://cdn.discordapp.com/assets/content/cef348e36782f9a2173dea37eb7a54e04a0acb4d4f7f5074c8a3f9e5d2ae6e29.svg",
                                      alt: "Riot Games",
                                  }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/2e11a92f42a86815654f152948f20362092f082dd2215e4ad7dbfa3eacea17fd.webp",
                                  ctaText: q.intl.string(sL.default.en2ls2),
                                  blurTint: "#310A0B",
                                  isThirdPartyPerk: !0,
                                  onCtaClick: () => {
                                      (0, s_.W)({ analyticsLocations: e });
                                  },
                                  analyticsOptions: { thirdPartyPartner: "riot" },
                              }
                            : null,
                };
            }, [t, e, s, i, u, n, m, a, r, l, d]);
        })(),
        g = i && null == m,
        p = i || null != n || null != a || null != l || null != r || null != d || null != x;
    return null != m || g || p
        ? (0, c.jsx)(su, {
              id: sF,
              sectionClassName: u()(sH.uW, sH.Uv, sH.qr),
              heading: (0, c.jsx)(X.D, {
                  variant: "nitro-sm",
                  className: u()(sd.R_, so.U6),
                  children: q.intl.string(q.t.NG1e6l),
              }),
              beforeGrid:
                  null != m
                      ? (0, c.jsx)("div", {
                            className: so.JE,
                            children: (0, c.jsx)(sn.S, {
                                ...m,
                                backgroundAssetUrl:
                                    "https://cdn.discordapp.com/assets/content/6936886d1c55035bd3f56b7594d80dd08e7d3e859be8630f3ef667b338a1dd78.webp",
                                pillText: void 0,
                                blurTint: "#3E000C",
                                featured: !0,
                                glowing: t === sF || s === m.id,
                                autoClickCta: s === m.id,
                            }),
                        })
                      : g
                        ? (0, c.jsx)("div", { className: so.JE, children: (0, c.jsx)(si, { glowing: t === sF }) })
                        : null,
              grid: p
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != x &&
                                (0, c.jsx)(sn.S, {
                                    ...x,
                                    containerClassName: sd.Nr,
                                    glowing: s === x.id,
                                    autoClickCta: s === x.id,
                                }),
                            null != n && (0, c.jsx)(sn.S, { ...n, containerClassName: sd.Nr, glowing: s === n.id }),
                            null != r && (0, c.jsx)(sn.S, { ...r, containerClassName: sd.Nr, glowing: s === r.id }),
                            i &&
                                (0, c.jsx)(sr, {
                                    containerClassName: sd.Nr,
                                    glowing: s === t6.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != l && (0, c.jsx)(sn.S, { ...l, containerClassName: sd.Nr, glowing: s === l.id }),
                            null != d && (0, c.jsx)(sn.S, { ...d, containerClassName: sd.Nr, glowing: s === d.id }),
                            null != a && (0, c.jsx)(sn.S, { ...a, containerClassName: sd.Nr, glowing: s === a.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var sz = s(313133),
    sW = s(67423);
let sY = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, tA.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(tN.animated.div, {
        className: u()(sz.iE, { [sz.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sz.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sW, className: sz.oU }),
                (0, c.jsxs)("div", {
                    className: sz.iQ,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: q.intl.format(q.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(q.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, ex.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(en.$, {
                    variant: "expressive",
                    icon: ei.t,
                    size: "md",
                    text: q.intl.string(q.t.zrCzVB),
                    onClick: () =>
                        void (0, et.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("489361"),
                                s.e("227853"),
                                s.e("470126"),
                                s.e("128804"),
                                s.e("71151"),
                                s.e("286615"),
                                s.e("311541"),
                                s.e("472847"),
                                s.e("870088"),
                                s.e("989649"),
                                s.e("925420"),
                                s.e("966366"),
                                s.e("338332"),
                                s.e("153302"),
                                s.e("758053"),
                                s.e("88683"),
                                s.e("983513"),
                                s.e("216806"),
                                s.e("310734"),
                                s.e("348567"),
                                s.e("452075"),
                                s.e("900277"),
                                s.e("127962"),
                                s.e("364827"),
                                s.e("907167"),
                                s.e("952372"),
                                s.e("861060"),
                                s.e("56366"),
                                s.e("639161"),
                                s.e("910486"),
                                s.e("678157"),
                                s.e("646271"),
                                s.e("40291"),
                                s.e("544571"),
                                s.e("102328"),
                                s.e("729963"),
                                s.e("538513"),
                                s.e("370112"),
                                s.e("50097"),
                                s.e("978436"),
                                s.e("594161"),
                                s.e("435432"),
                                s.e("80347"),
                                s.e("680166"),
                            ]).then(s.bind(s, 293061));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: ey.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sK = s(761508),
    sX = s(449543),
    sJ = s(387103);
function sZ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sJ.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sq(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sQ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/ce65064fd18fa477fe14c2d4066af96637c446e074008fb0b7599874537ce8d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s$ = s(345394);
function s0(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: s$.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s1 = s(163665);
function s2(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/a0a5fdb2c9735632e0cadb26af7aa33929c63981e559ef0337cacced2cab2d09.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s3 = s(330422);
function s7(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s6(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s5 = s(996682);
function s8(e) {
    let {
        color: t = tr.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: l = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, s5.A)({ "aria-label": s, "aria-hidden": i, role: n }),
        width: a,
        height: l,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, c.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, c.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, c.jsx)("defs", {
                children: (0, c.jsx)("clipPath", {
                    id: "a",
                    children: (0, c.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function s9(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s4 = s(78701);
function ie(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: s4.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var it = s(462887),
    is = s(736653),
    ii = s(259065),
    ia = s(206835),
    il = s(591179),
    ir = s(462463),
    ic = s(219882),
    io = s(19886),
    id = s(425713),
    iu = s(696292),
    im = s(192444),
    ix = s(617986),
    ig = s(892227),
    ip = s(81466),
    ih = s(1889),
    iN = s(749012);
let iA = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, H.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ig.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: iN.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: iN.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iN.Pf,
                            children: [
                                (0, c.jsx)(ip.CalendarIcon, { size: "sm", color: tr.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: q.intl.string(ih.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(ih.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: iN.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: iN.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iN.Pf,
                            children: [
                                (0, c.jsx)(tl.C, { size: "sm", color: tr.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: q.intl.string(ih.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(ih.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ij = s(190107),
    iE = s(799544);
function ib(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, im.lk)(ij.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, H.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: t6.NITRO_ORBS_REWARDS_CARD_ID,
                          title: q.intl.string(ih.default.hx5AFp),
                          description: q.intl.format(ih.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(iE.lH, iE.yK),
                          footerContent: (0, c.jsx)(iA, {}),
                          ctaText: q.intl.string(ih.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(eJ.BVt.COLLECTIBLES_SHOP_WITH_TAB(tx.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: t6.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: q.intl.string(q.t.Csf5Ol),
                          description: q.intl.format(q.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: q.intl.string(q.t.jVcuVY),
                          onCtaClick: () => (0, ix.mA)({ fromContent: iu.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: iE.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iT = s(975807),
    iR = s(95035),
    iC = s(989790),
    iI = s(88001),
    i_ = s(148155),
    iv = s(817577);
function iP() {
    (0, iT.A)(iI.TE);
}
function iS(e) {
    let t = (0, iC.O9)(),
        i = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, et.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tG.pe.TIER_2,
                      initialPlanId: tG.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: t6.PREMIUM_GROUP_CARD_ID,
                      title: q.intl.string(i_.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              q.intl.formatToPlainString(i_.default.JlyGQj, {
                                  totalSeats: iI.aw,
                                  premiumGroupProductName: (0, iI.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: iE.LF,
                                  children: (0, c.jsx)(iR.A, {
                                      onClick: iP,
                                      children: q.intl.string(i_.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: q.intl.string(q.t.oW0eUd),
                      primaryAsset: iv,
                      ctaIcon: ei.t,
                      ctaIconPosition: "start",
                      ctaText: q.intl.string(q.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iy = s(562819),
    iD = s(793943),
    iM = s(757036),
    iO = s(235955),
    iL = s(655752);
let iU = (0, sv.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var ik = s(764231),
    iG = s(627380),
    iw = s(30084),
    iB = s(814014),
    iH = s(714206);
let iF =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iV =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iz =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iW() {
    let e,
        t,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, il.X)("useWhatsNewPerkCards"),
        n = (0, ir.A)({ analyticsLocations: s }),
        a = (0, o.useCallback)(() => {
            (0, ed.openUserSettings)(eo.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, ii.L)({ analyticsLocations: s }),
            );
        }, [s]),
        l = (0, o.useCallback)(() => {
            (0, ed.openUserSettings)(eo.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, iy.L)({ analyticsLocations: s }),
            );
        }, [s]),
        r = (0, o.useCallback)(() => {
            (0, ed.openUserSettings)(eo.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        d = (function (e) {
            let { fractionalState: t } = (0, ec.A)(),
                s = t === tG.xc.FP_ONLY,
                i = (0, io.$F)(),
                n = (0, io.Xb)(),
                a = i?.status === io.Wo.UPCOMING || s,
                l = i?.status === io.Wo.WITHHELD,
                r = a || l,
                c = (0, id.N)(i?.id),
                d = (function () {
                    let e = (0, io.$F)(),
                        t = (0, iL.P)(),
                        s = (0, io.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iU.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === io.Wo.WITHHELD) return null;
                    let n = e_()(),
                        a = e_()(s),
                        l = i || e.status === io.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        r = t.tenureReqNumMonths,
                        c = a.clone().add(l, "months"),
                        o = a.clone().add(r, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion) && !r,
                g = (0, iG.t)(),
                p = (0, iL.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != p ? q.intl.string(p.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, ik.T)(tG.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === io.Wo.UPCOMING
                              ? q.intl.formatToPlainString(q.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === io.Wo.WITHHELD
                                ? ((0, ik.T)(i.id, i.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return q.intl.formatToPlainString(q.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return q.intl.formatToPlainString(q.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(g, a) ??
                                  (0, ik.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let l = null;
                return (
                    null != c ? (l = r || m ? c.standard : c.ambientLarge) : s && (l = iH),
                    {
                        id: t6.TENURE_BADGE_CARD_ID,
                        title: null != i ? q.intl.string(i.nameUnformattedNitro) : s ? q.intl.string(q.t.tx9Fvw) : "",
                        pillText: q.intl.string(q.t["jyYgZ+"]),
                        primaryAsset: l,
                        primaryAssetClassName: u()(iB.pq, { [iB.rX]: r, [iB.kE]: m }),
                        caption: null != n ? q.intl.formatToPlainString(q.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: q.intl.string(q.t.jVcuVY),
                        onCtaClick: () => (0, iw.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, r, m, n, d, s, g, p, e]);
        })(s),
        { nitroOrbsRewardsCard: m, questOrbMultiplierCard: g } = ib("useWhatsNewPerkCards"),
        p =
            ((e = (0, iM.L)(tG.PremiumTypes.TIER_2)),
            (t = (0, ic.rX)()),
            (0, o.useMemo)(
                () =>
                    e && t
                        ? {
                              id: t6.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: q.intl.string(iO.default["/cV3ka"]),
                              description: q.intl.string(iO.default.H523FI),
                              primaryAsset: (0, c.jsx)(s1.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [e, t],
            )),
        f = iS(s);
    return (0, o.useMemo)(() => {
        let e = [
                m,
                g,
                f,
                {
                    id: t6.DISPLAY_NAME_STYLES_CARD_ID,
                    title: q.intl.string(q.t.OLtTrt),
                    description: q.intl.string(q.t["di/pXR"]),
                    onCtaClick: i ? n : a,
                    ctaText: q.intl.string(q.t.jVcuVY),
                    primaryAsset: iF,
                },
                {
                    id: t6.CLIENT_THEMES_CARD_ID,
                    title: q.intl.string(q.t.acc6h6),
                    description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iz,
                    ctaText: q.intl.string(q.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iD.nf)(iD.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: t6.PERMADECOS_CARD_ID,
                    title: q.intl.string(q.t.L14NZN),
                    description: q.intl.string(q.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(ie, { alt: "", ariaHidden: !0 }),
                    ctaText: q.intl.string(q.t.jVcuVY),
                    onCtaClick: i ? n : l,
                },
                {
                    id: t6.CUSTOM_APP_ICONS_CARD_ID,
                    title: q.intl.string(q.t["GU+wqh"]),
                    description: q.intl.string(q.t["1uPk1Z"]),
                    primaryAsset: iV,
                    ctaText: q.intl.string(q.t.y9TxXV),
                    onCtaClick: r,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, d), null != p && e.splice(2, 0, p), e.length > s && e.splice(s, e.length - s), e);
    }, [d, m, g, p, f, a, r, l, n, i]);
}
var iY = s(355097);
let iK = "/assets/1eb1b74667b4c0f0.svg",
    iX = "/assets/983b60e4fcaf973b.svg";
var iJ =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iZ = [
    { id: "bestof", label: () => q.intl.string(q.t.q1u7nQ) },
    { id: "appearance", label: () => q.intl.string(q.t.CUnZkZ) },
    { id: "upgrades", label: () => q.intl.string(q.t.KC5q8v) },
    { id: "vip", label: () => q.intl.string(q.t.DjEAcv) },
];
var iq = s(18290);
function iQ(e) {
    e.stopPropagation();
}
function i$(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, is.DP)(),
                t = (0, il.X)("useFavoritesPerkCards"),
                s = (0, io.Lh)(),
                i = (0, id.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, ia.A)({ scrollPosition: iY._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, S.pX)(eJ.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, ir.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, ii.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = iW(),
                f = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = ib("useFavoritesPerkCards"),
                E = iS(n),
                b = (0, o.useMemo)(
                    () => [
                        {
                            id: t6.SERVER_BOOSTS_CARD_ID,
                            title: q.intl.formatToPlainString(q.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: q.intl.formatToPlainString(q.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sZ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != E ? { ...E, categories: ["bestof"] } : null,
                        {
                            id: t6.PROFILES_CARD_ID,
                            title: q.intl.string(q.t.xDRab3),
                            description: q.intl.string(q.t.yn6fWA),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sq, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t6.HD_VIDEO_CARD_ID,
                            title: q.intl.string(q.t["/mQ5gg"]),
                            description: q.intl.string(q.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sQ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t6.CLIENT_THEMES_CARD_ID,
                            title: q.intl.string(q.t.acc6h6),
                            description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iz,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t6.MORE_EMOJIS_CARD_ID,
                            title: q.intl.string(q.t.D8vIDT),
                            description: q.intl.string(q.t.DRMecB),
                            primaryAsset: (0, c.jsx)(s0, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t6.LARGE_UPLOADS_CARD_ID,
                            title: q.intl.string(q.t.nL1WZV),
                            description: (0, ic.M6)({
                                legacyCopy: q.intl.formatToPlainString(q.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: q.intl.formatToPlainString(q.t.teOTfv, {
                                    maxFileSize: (0, ex.EJ)(tG.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(s1.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t6.CUSTOM_APP_ICONS_CARD_ID,
                            title: q.intl.string(q.t["GU+wqh"]),
                            description: q.intl.string(q.t["1uPk1Z"]),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iV,
                            categories: ["appearance"],
                        },
                        {
                            id: t6.ENTRANCE_SOUNDS_CARD_ID,
                            title: q.intl.string(q.t.WJfCPi),
                            description: q.intl.string(q.t.liQKJR),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: t6.DISPLAY_NAME_STYLES_CARD_ID,
                            title: q.intl.string(q.t.OLtTrt),
                            description: q.intl.string(q.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: q.intl.string(q.t.jVcuVY),
                            primaryAsset: iF,
                            categories: ["appearance"],
                        },
                        {
                            id: t6.CUSTOM_SOUNDS_CARD_ID,
                            title: q.intl.string(q.t["Cu/oFd"]),
                            description: q.intl.string(q.t.czj2aa),
                            primaryAsset: (0, c.jsx)(s2, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t6.SPECIAL_STICKERS_CARD_ID,
                            title: q.intl.string(q.t.MQoVeb),
                            description: q.intl.string(q.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: iE.Uc,
                                children: (0, c.jsx)(s3.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t6.SUPER_REACTIONS_CARD_ID,
                            title: q.intl.string(q.t.qERvAA),
                            description: q.intl.string(q.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(s7, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t6.VIDEO_BACKGROUNDS_CARD_ID,
                            title: q.intl.string(q.t.ssVDYQ),
                            description: q.intl.string(q.t.aUSRMa),
                            primaryAsset: (0, it.M)(e) ? iK : iX,
                            categories: ["upgrades"],
                        },
                        {
                            id: t6.EARLY_ACCESS_CARD_ID,
                            title: q.intl.string(q.t["g/KRY6"]),
                            description: q.intl.string(q.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(s6, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t6.BADGE_CARD_ID,
                            title: q.intl.string(q.t.Bn3CtB),
                            description: q.intl.string(q.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(s8, { color: tr.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t6.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: q.intl.string(q.t["MTD+7w"]),
                            description: q.intl.string(q.t.Bhs0s6),
                            ctaText: q.intl.string(q.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(s9, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: t6.PERMADECOS_CARD_ID,
                            title: q.intl.string(q.t.L14NZN),
                            description: q.intl.string(q.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(ie, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, E, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => b.filter((e) => null != e && !f.includes(e.id)), [b, f]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iJ.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: iq.uW,
        children: [
            (0, c.jsx)(X.D, { variant: "nitro-sm", children: q.intl.string(q.t["Uh3+CA"]) }),
            (0, c.jsx)(sK.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iq.Lq,
                "aria-label": q.intl.string(q.t["Uh3+CA"]),
                children: iZ.map((e) =>
                    (0, c.jsx)(sK.V.Item, { id: e.id, className: iq.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sX.A,
                {
                    gap: 20,
                    className: iq.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sn.S,
                                { ...e, glowing: t === e.id, containerClassName: iq.Ui, onFocus: iQ },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var i0 = s(72979);
let i1 = function (e) {
    let { className: t } = e,
        s = (0, is.DP)();
    return (0, c.jsx)("img", {
        className: u()(i0.D, t),
        src: (0, it.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i2 = s(684251);
let i3 = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(i2.kL, i2.Gd, i2.Eg),
        children: [(0, c.jsx)(i1, {}), (0, c.jsx)(tq, {}), t],
    });
};
function i7(e) {
    let { glowingPerkId: t = null } = e,
        s = iW();
    return (0, c.jsx)(su, {
        sectionClassName: sd.uW,
        heading: (0, c.jsx)(X.D, { variant: "nitro-sm", className: sd.R_, children: q.intl.string(q.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    sn.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === t6.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(sd.Nr, { [sd.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function i6(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
            l = o.useRef(!1);
        (o.useEffect(() => {
            if (!t || l.current) return;
            let s = { behavior: a ? "auto" : "smooth", block: i, inline: n },
                r = e();
            if (null != r && r.offsetHeight > 0) {
                ((l.current = !0), r.scrollIntoView(s));
                return;
            }
            let c = !1,
                o = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        l.current ||
                        c ||
                        ((l.current = !0), d.disconnect(), t.target.scrollIntoView(s));
                }),
                u = performance.now();
            return (
                !(function t() {
                    if (c || performance.now() - u > 5e3) return;
                    let i = e();
                    null != i
                        ? i.offsetHeight > 0
                            ? ((l.current = !0), i.scrollIntoView(s))
                            : d.observe(i)
                        : (o = requestAnimationFrame(t));
                })(),
                () => {
                    ((c = !0), null != o && cancelAnimationFrame(o), d.disconnect());
                }
            );
        }, [t, a, i, n, ...s]),
            o.useEffect(() => {
                t || (l.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], s, i);
}
var i5 = s(92737);
let i8 = "/assets/cd2be35d285d4675.svg",
    i9 = (e) => {
        let { userId: t } = e,
            s = (0, m.zy)();
        (o.useEffect(() => {
            p.h.wait(async () => {
                let e = [(0, B.Ay)()];
                (null != t && e.push((0, V.A)(t)), await Promise.all(e));
            });
        }, [t]),
            o.useEffect(() => {
                T(!0);
            }, []),
            (0, W.j)(),
            (0, v.P)(_));
        let i = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, H.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: d,
                glowingSectionId: f,
                glowingPerkId: h,
                scrollBlock: N,
                scrollInline: E,
            } = o.useMemo(() => {
                let e = new URLSearchParams(s.search),
                    t = e.get("perk"),
                    i = e.get(i5.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [s.search]);
        i6(d ?? "", null != d, N, E);
        let [b, T] = o.useState(!1),
            R = (0, z.p)(),
            C = o.useRef(null),
            [I, P] = o.useState(!1),
            S = null != R && null != a && a.status === eJ.Dmq.CANCELED,
            y = (0, Y.iU)(tG.gD.PREMIUM_MONTH_TIER_2, R, a),
            D = !I && S,
            M = (0, x.bG)([F.A], () => (null != t ? F.A.getUserProfile(t) : null)),
            { analyticsLocations: U } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [k, K] = o.useState(!1);
        return null != M && (l || null != r)
            ? (0, c.jsxs)(w.Gt, {
                  className: u()(i2.xW, i2.Gd),
                  ref: i,
                  children: [
                      (0, c.jsx)(i3, {
                          children: (0, c.jsxs)(j.f5, {
                              value: U,
                              children: [
                                  (0, c.jsx)(G.L, {
                                      innerRef: C,
                                      onChange: (e) => P(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tz, {
                                          buttonVisibilityRef: C,
                                          className: i2.v1,
                                          userDiscountOffer: R,
                                          discountedPrice: y,
                                      }),
                                  }),
                                  (0, c.jsx)(i7, { glowingPerkId: h }),
                                  (0, c.jsx)(sV, { glowingPerkId: h, glowingSectionId: f }),
                                  (0, c.jsx)(i$, { glowingPerkId: h }),
                                  (0, c.jsx)($, {
                                      className: i2.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eJ.liQ.NITRO_HOME, section: eJ.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: i2.hz }),
                                  (0, c.jsx)(G.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !k &&
                                              (L.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: U,
                                              }),
                                              K(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: i2._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: i8,
                                      className: i2.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: q.intl.string(q.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      S &&
                          null != y &&
                          (0, c.jsx)(sY, {
                              isVisible: D && b,
                              premiumSubscription: a,
                              churnDiscountOffer: R,
                              discountedPrice: y,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(i2.kL, i2.Lq, i2.TN, i2.Eg),
                  children: [(0, c.jsx)(tq, {}), (0, c.jsx)("div", { className: i2.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var i4 = s(286320),
    ne = s(727949),
    nt = s(636592),
    ns = s(17843);
let ni = (0, sv.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var nn = s(297346);
let na =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
function nl(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: na,
        srcSet: `${na} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var nr = s(37537),
    nc = s(783420),
    no = s(204413),
    nd = s(245383),
    nu = s(824069),
    nm = s(785007),
    nx = s(947910);
function ng(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nx.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nx.fQ,
                                children: (0, c.jsx)(eV.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(es.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nx.qU,
                            children: [
                                (0, c.jsxs)(es.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nx.NI,
                                    children: [
                                        (0, c.jsx)(J.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(J.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(es.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nx.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, c.jsx)(J.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, c.jsx)(J.E, {
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: nx.yD,
                                                children: e.secondarySubText,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                value: e.value,
                disabled: e.isDisabled,
                radioBarClassName: u()(nx.tG, { [nx.uA]: s, [nx.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nm.$d, {
        ...i,
        options: n,
        value: t,
        size: nm.r9.NOT_SET,
        className: nx.ul,
        withTransparentBackground: !0,
    });
}
var np = s(118751),
    nf = s(773669),
    nh = s(97352),
    nN = s(526292),
    nA = s(387278),
    nj = s(369827),
    nE = s(803496);
function nb(e) {
    let t = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        s = (0, nj.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nE.A)({
            activeSubscription: t,
            skuIDs: [(0, ex.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nT(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nR(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tG.Ff.YEAR
          ? q.intl.format(q.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : q.intl.format(q.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nC = s(614488);
function nI(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(nc.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(en.$, {
                size: "md",
                fullWidth: !0,
                icon: ei.t,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function n_(e) {
    let { skuId: t, className: s } = e,
        i = t === tG.pe.TIER_2,
        n = (0, it.q)((0, is.Ay)()),
        a = (0, nr.c)("PlanSelectCard"),
        l = (0, eh.V)(),
        r = l?.subscriptionTrial,
        d = r?.skuId === t,
        m = i && d && null != r,
        g = (0, ef.p)(),
        {
            planRadioOptions: p,
            selectedPlanId: f,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tG.En[t],
                a = tG.zE[t],
                l = t === tG.pe.TIER_2,
                r = nb(t),
                c = (0, eh.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [O.A],
                    () => {
                        let e = O.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, ex.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tG.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tG.gD.PREMIUM_YEAR_TIER_0, tG.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                p = (0, ef.O)(),
                f = (0, nN.k5)(),
                h = (0, x.bG)([nf.default], () => nf.default.locale),
                N = (0, Y.U9)(p, t),
                A = (0, Y.N1)(n),
                j = (0, Y.N1)(a),
                [E, b] = (0, x.yK)([nh.A], () => [nh.A.get(n), nh.A.get(a)], [n, a]),
                T = null != E ? (0, ex.sS)(E, r) : null,
                R = null != b ? (0, ex.sS)(b, r) : null,
                C =
                    N && p?.discount.amount != null && !f
                        ? q.intl.formatToPlainString(q.t.IAybsG, {
                              discount: (0, np.l9)(h, Number(p.discount.amount) / 100),
                          })
                        : null,
                I = p?.discount?.planIds,
                _ = nT(a, N, I, j, R),
                v = nT(n, N, I, A, T),
                P = p?.discount.userUsageLimitInterval,
                S = p?.discount.userUsageLimit ?? tG.OJ,
                y = !l || _ || v || null == b ? null : (0, nA.Cj)(b, !1, r),
                D = !v || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tG.pe.TIER_2 ? null : s && !i ? tG.En[t] : tG.zE[t];
                })({ skuId: t, monthlyHasDiscount: v, isMonthlyPlanDisabled: m }),
                L = null == s || (s === n && m) ? M : s,
                U = [
                    {
                        value: a,
                        primaryText: q.intl.string(q.t["/Q4HRN"]),
                        primarySubText:
                            (_
                                ? nR({
                                      expectedUsageInterval: tG.Ff.YEAR,
                                      usageInterval: P,
                                      discountDuration: S,
                                      regularPrice: R,
                                      discountedPrice: j,
                                  })
                                : null) ?? y,
                        secondaryText: _ ? j : R,
                        secondarySubText: _ ? R : null,
                        badgeText: _ ? C : null,
                        useGradientSelectedBorder: l && (d || _ || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: q.intl.string(q.t.DKzs96),
                        primarySubText: v
                            ? nR({
                                  expectedUsageInterval: tG.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: S,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: v ? A : T,
                        secondarySubText: v ? T : null,
                        badgeText: v ? C : null,
                        useGradientSelectedBorder: l && (d || v),
                        isDisabled: g || m,
                    },
                ],
                k = L === a ? _ : L === n && v;
            return { planRadioOptions: U, selectedPlanId: L, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !k };
        })({ skuId: t }),
        A = i && null == g ? "expressive" : "secondary",
        { buttonText: j } = (0, nd.A)({ subscriptionTier: t }),
        { subscribeButtonProps: E } = (0, no.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        b = (0, c.jsxs)(es.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nC.Ux,
            children: [
                (0, c.jsx)(es.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nC.MY,
                    children: (0, c.jsx)(X.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nC.ck : nC.JJ,
                        children: i ? q.intl.string(q.t.lG6a5x) : q.intl.string(q.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(es.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nC.qT,
                    children: i
                        ? (0, c.jsx)(nn.ZP, {
                              featureSet: nn.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(nn.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(nu.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nC.qS,
                          role: "separator",
                          children: (0, c.jsx)(J.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nC.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tG.WT.DAY:
                                          if (t % 7 == 0) return q.intl.format(q.t["1MYPH0"], { weeks: t / 7 });
                                          return q.intl.format(q.t.pYfIoO, { days: t });
                                      case tG.WT.MONTH:
                                          return q.intl.format(q.t["96hTLe"], { months: t });
                                      case tG.WT.YEAR:
                                          return q.intl.format(q.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(r.interval, r.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nC.yF }),
                (0, c.jsxs)("div", {
                    className: nC.qr,
                    children: [
                        (0, c.jsx)(ng, { planRadioOptions: p, value: f ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nI, { skuId: t, selectedPlanId: f, subscribeButtonProps: E }),
                    ],
                }),
            ],
        }),
        T = u()(nC.Nr, s, { [nC.Fw]: i });
    return i
        ? (0, c.jsxs)(K.h, {
              color: "nitro-pink",
              className: T,
              children: [
                  (0, c.jsx)("div", {
                      className: nC.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(nl, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  b,
              ],
          })
        : (0, c.jsx)("div", { className: T, children: b });
}
function nv(e) {
    let { className: t } = e,
        s = (0, it.q)((0, is.Ay)()),
        i = (0, nr.c)("PlanSelectPremiumGroupCard"),
        n = (0, ef.p)(),
        a = null != n,
        l = nb(tG.pe.TIER_2),
        r = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eU.A)({ userId: r?.id, size: eD._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([nh.A], () => nh.A.get(tG.gD.PREMIUM_GROUP_MONTH)),
        p = (0, Y.N1)(tG.gD.PREMIUM_GROUP_MONTH),
        f = a
            ? q.intl.format(i_.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, iI.DP)(),
              })
            : q.intl.string(q.t["2pG5Ga"]),
        h = (0, c.jsx)(nc.A, {
            subscriptionTier: tG.pe.TIER_2,
            initialPlanId: tG.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(en.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: ei.t,
                    text: f,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        N = null;
    if (a && null != p) N = p;
    else if (null != m)
        try {
            N = (0, ex.sS)(m, l, !1, !1, !1);
        } catch {
            N = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nC.Nr, t),
        children: (0, c.jsxs)(es.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nC.Ux,
            children: [
                (0, c.jsxs)(es.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nC.MY,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nC.ck : nC.JJ,
                            children: q.intl.string(i_.default.eSKiXk),
                        }),
                        null != r &&
                            (0, c.jsxs)(es.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nC.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nC.uA,
                                        children: (0, c.jsx)(eM.eu, {
                                            src: o,
                                            size: eD._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, c.jsx)(es.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nC.VL,
                                        children: (0, c.jsxs)(J.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", iI.LM],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(es.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nC.qT,
                    children: (0, c.jsx)(nn.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nC.yF }),
                (0, c.jsxs)("div", {
                    className: nC.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nC.ec,
                            children: [
                                (0, c.jsx)(J.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: q.intl.string(i_.default.SvSwga),
                                }),
                                null == N
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(J.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: s ? "text-strong" : "text-overlay-light",
                                          children: N,
                                      }),
                            ],
                        }),
                        h,
                    ],
                }),
            ],
        }),
    });
}
function nP(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, nn.pw)(t),
        a = (0, iC.PA)(),
        l = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
        r = { [nC.iR]: !l };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(es.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nC.oB, s),
            children: [
                (0, c.jsx)(X.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nC.op,
                    children: q.intl.string(q.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nC.kR, { [nC.BQ]: a }),
                    children: [
                        (0, c.jsx)(n_, { skuId: tG.pe.TIER_0, className: u()(nC.rz, r) }),
                        (0, c.jsx)(n_, { skuId: tG.pe.TIER_2, className: u()(nC.Rv, r) }),
                        a && (0, c.jsx)(nv, { className: u()(nC.zz, r) }),
                    ],
                }),
            ],
        }),
    });
}
var nS = s(735668),
    ny = s(366010),
    nD = s(303136);
let nM = function (e) {
    let t,
        { className: s } = e,
        i = (0, th.TM)(),
        n = (0, ny.q)((0, is.Ay)());
    return (
        (t = i
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, c.jsx)("div", {
            className: s,
            children: (0, c.jsx)(
                nD.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, c.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var nO =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nL = s(352756);
let nU = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, tA.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: eJ.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(tN.animated.div, {
        className: nL.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nL.U,
            children: [
                (0, c.jsx)(eC.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, c.jsx)(Z.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nk = s(573710);
let nG = function () {
    let e = (0, tf.bG)([el.Ay], () => el.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nk.BI,
                children: (0, c.jsx)(tT, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tE.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nk.Q,
                    }),
                }),
            }),
            (0, c.jsx)(tC, {
                isMotionReduced: e,
                boltContainerClassName: nk.nJ,
                carContainerClassName: nk.IN,
                hammerContainerClassName: nk.Gj,
                keyContainerClassName: nk.FV,
                starContainerClassName: nk.E1,
                boltAssetClassName: nk.j7,
                carAssetClassName: nk.or,
                hammerAssetClassName: nk.Wv,
                keyAssetClassName: nk.rs,
                starAssetClassName: nk.OY,
            }),
        ],
    });
};
var nw = s(989756);
let nB = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nw.kL,
            children: (0, c.jsxs)("div", {
                className: nw.hQ,
                children: [
                    (0, c.jsx)(nG, {}),
                    (0, c.jsx)(X.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nw.RH,
                        children: q.intl.string(q.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nB.displayName = "PremiumMarketingFooter";
var nH = s(939249);
let nF = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nO.HOME]: q.intl.string(q.t.uGRXjS),
            [nO.WHATS_NEW]: q.intl.string(q.t["mfcR/v"]),
            [nO.BEST_OF_NITRO]: q.intl.string(q.t.xQKkE8),
            [nO.PLANS]: q.intl.string(q.t.wyNMnm),
            [nO.COMPARE]: q.intl.string(q.t.pwD7If),
        },
        n = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tY.A, {
        className: tJ.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: tJ.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: tJ.wG,
                    children: [
                        (0, c.jsx)(ei.t, { className: tJ.nE, colorClass: tJ.oG }),
                        (0, c.jsx)("div", {
                            className: tJ.zc,
                            role: "tablist",
                            "aria-label": q.intl.string(q.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nH.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: tJ.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(J.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: tJ.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tJ.MQ,
                    children: [
                        null != n && (0, c.jsx)(tX.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(Z.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nV = s(713271),
    nz = s(704333),
    nW = s(414499),
    nY = s(597770),
    nK = s(500060),
    nX = s(866665),
    nJ = s(406860),
    nZ = s(870975),
    nq = s(698834);
function nQ() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nJ.A)({ boxType: t8.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nz.B, text: q.intl.string(se.default.MUypiB) },
            { icon: nW.h, text: q.intl.string(se.default.ec5Rdd) },
            { icon: nY.GiftIcon, text: q.intl.string(se.default["9t2CzW"]), tooltip: se.default.AyECej },
            { icon: nK.o, text: q.intl.string(se.default.R7YJAY) },
        ];
    return (0, c.jsx)(G.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nq.iE,
            children: (0, c.jsxs)("div", {
                className: nq.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nq.j,
                        children: [
                            (0, c.jsx)("div", { className: nq._g }),
                            (0, c.jsx)("div", { className: nq.$h }),
                            (0, c.jsx)("div", { className: nq.Rv }),
                            (0, c.jsx)("div", { className: nq.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nq.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nq.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(X.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nq.R_,
                                                children: q.intl.string(se.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nq.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(J.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nq.Jn,
                                                                            children: (0, c.jsx)(nX.m, {
                                                                                text: q.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    t0.CircleInformationIcon,
                                                                                    {
                                                                                        size: "xxs",
                                                                                        color: "var(--icon-default)",
                                                                                    },
                                                                                ),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            s,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: nq.xF,
                                                        children: (0, c.jsx)(eC.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tG.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nq.WE,
                                        children: (0, c.jsx)(J.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: q.intl.format(se.default.KDKdWi, { termsLink: (0, nZ.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nq.r1,
                                children: (0, c.jsx)("img", {
                                    className: nq.wm,
                                    src: "https://cdn.discordapp.com/assets/content/183a222feae2555e7a057002bbcae445e70efa78fb204d353c9c93b4a1f210d4.png",
                                    alt: "Xbox Game Pass",
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n$ = s(750338),
    n0 = s(639031),
    n1 = s(505051);
function n2(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, c.jsxs)("div", {
        className: u()(n1.boxBackdrop, t),
        children: [
            (0, c.jsx)(X.D, {
                className: n1.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: n1.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: n1.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n0.A0.SMALL;
                            break;
                        case 2:
                            s = n0.A0.MEDIUM;
                            break;
                        default:
                            s = n0.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                n$.A,
                                { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let n3 = o.memo(function (e) {
        let t = (0, tQ.b)("premium_marketing_bento"),
            s = (0, sS.mh)({ location: "premium_marketing_bento" }),
            i = t && !s,
            { whatsNewBoxes: n } = (0, n0.Ay)(i);
        return (0, c.jsx)(n2, {
            boxLayout: n,
            title: q.intl.string(q.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: i ? (0, c.jsx)(nQ, {}) : null,
            ...e,
        });
    }),
    n7 = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, n0.Ay)();
        return (0, c.jsx)(n2, { boxLayout: t, title: q.intl.string(q.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    n6 = (0, sv.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var n5 = s(236834),
    n8 = s(540504);
function n9(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eU.A)({ userId: t?.id, size: eD._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: n8.$6,
        children: (0, c.jsxs)("div", {
            className: n8.sc,
            children: [
                (0, c.jsx)("div", {
                    className: n8.kR,
                    children: (0, c.jsx)(eM.eu, { src: s, "aria-label": t.username, size: eD._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(X.D, {
                    variant: "heading-sm/normal",
                    className: n8.FS,
                    color: "text-strong",
                    children: q.intl.format(q.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
var n4 = s(579245),
    ae = s(369805);
let at = function () {
    let e = (0, ae.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eb, { text: e });
};
function as() {
    let e = (0, x.bG)([nh.A], () => nh.A.getForSkuAndInterval((0, ex.mH)(tG.pe.TIER_0), tG.WT.MONTH));
    return null != e ? (0, ex.sS)(e) : "\u2026";
}
var ai = s(508556);
let an = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tf.bG)([el.Ay], () => el.Ay.useReducedMotion),
        i = (0, th.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: ai.YU,
        children: [
            (0, c.jsx)(t_, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: ai.wG,
                assetClassName: ai.lu,
            }),
            (0, c.jsx)(tC, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: ai.nJ,
                carContainerClassName: ai.IN,
                hammerContainerClassName: ai.Gj,
                keyContainerClassName: ai.FV,
                starContainerClassName: ai.E1,
                boltAssetClassName: ai.j7,
                carAssetClassName: ai.or,
                hammerAssetClassName: ai.Wv,
                keyAssetClassName: ai.rs,
                starAssetClassName: ai.OY,
            }),
        ],
    });
};
var aa = s(14057);
let al = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = as(),
            r = n6.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, n5.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: g } = ej(
                !(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
            ),
            p = (0, i4.b)(),
            f = !d && p.length > 0,
            h = (0, eN.c)(ee.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            E = (0, nN.ar)() && !N,
            b = (0, ef.O)(),
            T = (null != b && tG.U4.includes(b.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(aa.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: aa.hQ,
                        children: [
                            (0, c.jsx)(an, { containerVisibilityPercentage: g }),
                            E && (0, c.jsx)(at, {}),
                            (0, c.jsx)("div", {
                                className: aa.s8,
                                children: (0, c.jsx)(eB.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(X.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: aa.wx,
                                        children: q.intl.string(q.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: aa.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: aa.eZ,
                                            children: (0, c.jsx)(n9, { referrer: o }),
                                        }),
                                    f &&
                                        (0, c.jsx)("div", {
                                            className: aa.Qn,
                                            children: (0, c.jsx)(n4.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: E ? aa.es : aa.UJ,
                                        children: [
                                            (0, c.jsx)(eC.A, {
                                                size: "md",
                                                fullWidth: E,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: T && null == i ? tG.pe.NONE : i,
                                                buttonTextOverride: T ? q.intl.string(q.t["2pG5Ga"]) : void 0,
                                            }),
                                            !E && (0, c.jsx)(Z.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: aa.iQ,
                                        children: (0, c.jsx)(J.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: r
                                                ? q.intl.string(q.t.jHqrJW)
                                                : q.intl.format(q.t.kt9wxs, { cheapestMonthlyPrice: l }),
                                        }),
                                    }),
                                    null != h &&
                                        "marketingPageBanner" === h.properties.properties.oneofKind &&
                                        (0, c.jsx)(eT.x, {
                                            componentId: h.id,
                                            promotionId: h.promotionId,
                                            promotionBannerMarketingComponentFields:
                                                h.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    }),
);
var ar = s(820081),
    ac = s(140735),
    ao = s(401432),
    ad = s(580630),
    au = s(795269),
    am = s(701974),
    ax = s(55647),
    ag = s(202600);
function ap(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ar.B, { size: "sm", color: tr.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ac.A, { children: q.intl.string(q.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ao.a, { size: "xs", color: tr.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ac.A, { children: q.intl.string(q.t.l4qZrp) }),
              ],
          });
}
function af(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(ax.nM, ax.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: ax.nx,
                children: (0, c.jsx)(J.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: ax.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(J.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(ap, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: ax.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(J.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(ap, { includes: !!i.includes }),
            }),
        ],
    });
}
function ah(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(ax.nM, ax.Gf),
                children: (0, c.jsxs)("td", {
                    className: ax.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(X.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(J.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(af, { ...e }, e.id)),
        ],
    });
}
function aN(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tG.PremiumTypes.TIER_0 ? q.intl.string(q.t.tUbSDK) : q.intl.string(q.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: ax.nn,
        children: [
            (0, c.jsxs)("div", {
                className: ax.KS,
                children: [
                    (0, c.jsx)(ei.t, { colorClass: ax.oG }),
                    (0, c.jsx)(X.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(X.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function aA(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, ad.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: ax.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ax.Cr,
                    children: (0, c.jsx)(X.D, { variant: "heading-xl/bold", children: q.intl.string(q.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ax.Hn,
                    children: (0, c.jsx)(aN, {
                        premiumType: tG.PremiumTypes.TIER_0,
                        priceString: (0, ad.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ax.Hn,
                    children: (0, c.jsx)(aN, { premiumType: tG.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let aj = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tG.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, eh.V)(),
            r = l?.subscriptionTrial?.skuId,
            d = (0, ef.O)(),
            m = (0, Y.YJ)(d),
            x = null != d && (0, Y.U9)(d, tG.pe.TIER_2) && m === tG.gD.PREMIUM_MONTH_TIER_2,
            g = (0, Y.N1)(m),
            p = null != g ? `${g}/${(0, ex.FJ)(tG.WT.MONTH)}` : "",
            f = (0, ex.JM)(tG.gD.PREMIUM_MONTH_TIER_0),
            h = (0, ex.JM)(tG.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, tQ.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: q.intl.string(q.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: q.intl.string(q.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: q.intl.string(q.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: q.intl.string(am.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, im.lk)(ij.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = sj.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sE.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    });
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: q.intl.string(q.t.NG1e6l),
                            subtitle: q.intl.format(se.default.uJcbMv, {
                                termsLink: em.A.getArticleURL(eJ.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: q.intl.string(se.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: q.intl.string(se.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: q.intl.string(sO.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: q.intl.formatToPlainString(q.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        i.push({
                            id: 28,
                            label: q.intl.string(ih.default["20tmSN"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: q.intl.string(q.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: q.intl.string(q.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: q.intl.string(q.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: q.intl.string(q.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: q.intl.string(q.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: q.intl.string(q.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: q.intl.string(q.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: q.intl.string(q.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: q.intl.string(q.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, ex.EJ)(tG.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, ex.EJ)(tG.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: q.intl.string(q.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: q.intl.string(q.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: q.intl.string(q.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: q.intl.string(q.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: q.intl.formatToPlainString(q.t.nyhDpw, {
                                        numBoosts: tG.M4,
                                        percentageOff: (0, ad.l9)(nf.default.locale, tG.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: q.intl.string(q.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: q.intl.string(q.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: q.intl.string(q.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: q.intl.formatToPlainString(q.t["8crdzJ"], { maxChars: eJ.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: q.intl.string(q.t["il8+nC"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                    ]
                );
            })();
        if (i) t = null;
        else {
            let e = null != l ? q.intl.string(q.t.IBYG5U) : q.intl.string(q.t.TR2B4T);
            t = (0, c.jsx)(au.R, { className: u()(ax.Io, ax.SP), text: e });
        }
        let E = r === tG.pe.TIER_0 || n === tG.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(ax.zr, s),
                children: [
                    (0, c.jsx)(X.D, {
                        className: ax.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: q.intl.string(q.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: ax.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(ax.fO, { [ax.Vd]: E, [ax.hA]: !E }),
                                children: [
                                    !E && t,
                                    (0, c.jsx)("div", { className: ax.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: ax.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: ag, alt: "", className: ax.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: ax.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: ax.tp,
                                children: [
                                    (0, c.jsx)(aA, {
                                        tier0Price: f,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    N.map((e) => (0, o.createElement)(ah, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    aE = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, o.useCallback)(
                (e) => {
                    let s = r.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, n] = (0, o.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, l] = (0, o.useState)(e[0]);
        (0, o.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && l(e[0]);
        }, [i]);
        let r = (0, o.useRef)({});
        return (
            (0, o.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        n((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(r.current).forEach((t) => {
                        null != t && e.observe(t);
                    }),
                    () => e.disconnect()
                );
            }, []),
            {
                navBarSections: (0, o.useMemo)(
                    () =>
                        e.reduce(
                            (e, t, i) => (
                                (e[t] = {
                                    id: t,
                                    ref: (e) => {
                                        ((r.current[t] = e), null != e && (e.id = t));
                                    },
                                    scrollToSection: () => s(t),
                                    order: i,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, s],
                ),
                activeSectionId: a,
                setActiveSectionId: l,
            }
        );
    };
var ab = s(818348),
    aT = s(773188);
function aR(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nP, { innerRef: t }) : (0, c.jsx)(nS.jP, { innerRef: t });
}
let aC = () => {
    let e = (0, m.zy)();
    (0, v.P)(_);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [p, f] = o.useState(!1),
        [h, N] = o.useState(!1),
        [E, b] = o.useState(!1),
        T = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        R = null != T ? (0, ex.EL)(T) : null,
        C = null != R ? ex.Ay.getSkuIdForPlan(R.planId) : null,
        I = null !== C && C !== tG.pe.TIER_2 ? tG.pe.TIER_2 : null,
        { analyticsLocations: P } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        b(!0);
    }, []);
    let S = (0, sA.A0)({ location: "PremiumMarketingHome" }),
        y = (0, ns.DK)(nt.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: D } = (0, im.lk)(ij.rE.NITRO_HOME_MARKETING),
        M = y && D ? nV.N.COMBINED_ORBS : D ? nV.N.ORB_MULTIPLIER : y ? nV.N.ORB_REWARDS : null,
        U = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(i5.x);
            return "orbs" === t
                ? M
                : t === nV.N.THREE_P_PROMOTIONS
                  ? S
                      ? nV.N.CALL_OF_DUTY
                      : nV.N.THREE_P_PROMOTIONS
                  : t === nV.N.YOUTUBE
                    ? nV.N.YOUTUBE
                    : null;
        }, [S, e.search, M]);
    i6(U ?? "", null != U);
    let { navBarSections: k, activeSectionId: B } = aE([nO.HOME, nO.WHATS_NEW, nO.BEST_OF_NITRO, nO.PLANS, nO.COMPARE]),
        { home: H, whatsNew: F, bestOfNitro: V, plans: z, compare: W } = k,
        Y = (function (e) {
            let { location: t } = e;
            return ni.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        K = (0, c.jsxs)("div", {
            ref: s,
            className: u()(aT.kL, aT.Gd, aT.iI, { [aT.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nM, { className: aT.yH }),
                (0, c.jsx)(nF, { navBarSections: k, activeSectionId: B }),
                (0, c.jsxs)("div", {
                    className: aT.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: aT.qY,
                            ref: H.ref,
                            children: (0, c.jsx)(G.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(al, { ref: n, subscriptionTier: I }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: aT.So,
                            ref: F.ref,
                            children: (0, c.jsx)(n3, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: aT.KQ,
                            ref: V.ref,
                            children: (0, c.jsx)(n7, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: aT.s5,
                            ref: z.ref,
                            children: (0, c.jsx)(
                                G.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => f(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(aR, { innerRef: i, isPlanSelectUiRedesignEnabled: Y }),
                                },
                                Y ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: aT.aC, ref: W.ref, children: (0, c.jsx)(aj, {}) }),
                    ],
                }),
                (0, c.jsx)(G.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (L.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            N(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: aT._Z }),
                }),
                (0, c.jsx)(nB, { ref: l }),
                (0, c.jsx)(nU, { isVisible: !d && !p && E, subscriptionTier: I }),
                (0, c.jsx)(nM, { className: aT.MF }),
            ],
        });
    return (0, c.jsx)(t1.N, {
        theme: ab.NJ.DARK,
        children: (e) => (0, c.jsx)(w.Gt, { className: u()(aT.XG, e), ref: t, children: K }),
    });
};
var aI = s(862482),
    a_ = s(106512),
    av = s(412260),
    aP = s(662367),
    aS = s(374403),
    ay = s(396375),
    aD = s(370049);
let aM = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nN.ar)();
    if (null == i) return null;
    let r = null != i ? ex.Ay.getPremiumPlanItem(i) : null;
    if (
        (ex.Ay.isBoostOnlySubscription(i)
            ? (t = q.intl.string(q.t.Uj0md3))
            : null != r && (t = ex.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? ex.Ay.getSkuIdForPlan(r.planId) : null) === tG.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(t2.Z, {
            className: u()(aD.kL, n, { [aD.He]: l }),
            type: t2.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(sg.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aD.Kk, { [aD.Pt]: l }),
                }),
                (0, c.jsx)(J.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? q.intl.format(q.t["tYuv+T"], {
                              helpdeskArticle: em.A.getArticleURL(eJ.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : q.intl.format(q.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aO = s(978836);
let aL = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aO.zr, { [aO.N]: t }),
        children: [
            (0, c.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, c.jsx)("defs", {
                children: (0, c.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, c.jsx)("stop", { className: aO.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aO.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aO.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aO.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aO.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aU = s(900797),
    ak = s(847374),
    aG = s(812993),
    aw = s(614268);
function aB(e) {
    let { className: t } = e;
    return (0, c.jsx)(aG.Lp, { className: u()(aw.T, t), text: q.intl.string(q.t.EYxi0o) });
}
var aH = s(904788),
    aF = s(507553);
let aV = "/assets/5b4fec8511c3676a.svg",
    az = "/assets/0838bda6ecd20d91.svg";
function aW(e, t, s) {
    return (0, it.M)(e) ? t : s;
}
var aY = s(872461);
function aK(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nH.D, {
        onClick: s,
        className: aY.customButton,
        children: [
            t ? q.intl.string(q.t.maZaN3) : q.intl.string(q.t["37C26f"]),
            t
                ? (0, c.jsx)(aU.t, { size: "md", color: "currentColor", className: aY.arrow })
                : (0, c.jsx)(ak.a, { size: "md", color: "currentColor", className: aY.arrow }),
        ],
    });
}
function aX(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: o = !1,
        } = e,
        { analyticsLocations: d } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(j.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(aY.perkCard, i),
            children: [
                r
                    ? (0, c.jsx)(aH.A, {
                          className: aY.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aB, { className: aY.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aY.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(X.D, {
                            variant: "heading-lg/extrabold",
                            className: aY.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/normal",
                            className: aY.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aJ = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, is.Ay)(),
                n = (0, il.X)("usePerkCards"),
                a = (0, tf.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return ex.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, ex.EJ)(tG.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: q.intl.string(q.t.SS87rQ),
                    description: q.intl.string(q.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: q.intl.string(q.t["5cYMu0"]),
                    description: q.intl.string(q.t.vxk9va),
                    imageSource: aW(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: q.intl.string(q.t["/xvEMy"]),
                    description: q.intl.string(q.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: q.intl.string(q.t.OuItFi),
                    description: q.intl.string(q.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: q.intl.string(q.t["R2IV/Q"]),
                    description: q.intl.string(q.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: q.intl.string(q.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? q.intl.formatToPlainString(q.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : q.intl.formatToPlainString(q.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (aF.A.setState({ scrollPosition: iY._F.TRY_IT_OUT }),
                                    t(eo.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? q.intl.format(q.t.aj1pfZ, { onCheckItOutClick: t })
                            : q.intl.format(q.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: q.intl.string(q.t.BUScid),
                    description: q.intl.string(q.t.vN6XpQ),
                    imageSource: aW(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: q.intl.string(q.t.Bv8Pfk),
                    description: q.intl.string(q.t.JMfaTU),
                    imageSource: aW(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: q.intl.string(q.t.Bv8Pfk),
                    description: q.intl.string(q.t.JMfaTU),
                    imageSource: aW(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: q.intl.string(q.t["lGcW+c"]),
                    description: q.intl.string(q.t["/fDyO+"]),
                    imageSource: aW(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: q.intl.string(q.t["1c+xwT"]),
                    description: q.intl.string(q.t.hJG8ZN),
                    imageSource: aW(i, az, aV),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: q.intl.string(q.t.tzdIwI),
                    description: q.intl.string(q.t.hJG8ZN),
                    imageSource: aW(i, az, aV),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: q.intl.string(q.t.tzdIwI),
                    description: q.intl.string(q.t.hJG8ZN),
                    imageSource: aW(i, az, aV),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: q.intl.string(q.t.RSXQYO),
                    description: q.intl.string(q.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: q.intl.string(q.t["uZt5q/"]),
                    description: q.intl.string(q.t.ZK3ZoX),
                    imageSource: aW(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: q.intl.formatToPlainString(q.t.jqhAdL, { premiumMaxSize: l }),
                    description: q.intl.formatToPlainString(q.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: q.intl.string(q.t.NaGpTf),
                    description: q.intl.string(q.t["A8O/Qw"]),
                    imageSource: aW(i, iK, iX),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aY }),
        r = (0, tf.bG)([el.Ay], () => el.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, j.Ay)(),
        m = [
            l.emoji,
            l.streaming,
            l.upload,
            l.customAppIcons,
            l.soundboard,
            l.videoBackground,
            l.superReactions,
            l.stickersPremiumPerk,
            l.badgeAlt,
        ];
    return (0, c.jsxs)("div", {
        className: u()(aY.perksContainer, t, {
            [aY.partiallyHidden]: i && !n,
            [aY.subscriberNitroHome]: i,
            [aY.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(X.D, {
                variant: "heading-xxl/extrabold",
                className: aY.perksTitle,
                children: i ? q.intl.string(q.t.QX14gI) : q.intl.string(q.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aY.perkCardContainer, { [aY.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aX, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aY.sizeGizmo]: !n, [aY.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aK, {
                                onClick: function () {
                                    (L.default.track(eJ.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(aY.cover, { [aY.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aZ = s(194509),
    aq = s(317587);
let aQ = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, tA.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eJ.JJy.MARKETING_FLOATING_CTA },
        r = (0, is.Ay)(),
        o = (0, ny.M)(r);
    return (0, c.jsx)(tN.animated.div, {
        className: u()(aq.iE, { [aq.H8]: i, [aq.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aq.zW : aq.iJ,
            children: [
                (0, c.jsx)(ay.A, {
                    color: o ? aI.XD.BRAND_INVERTED : void 0,
                    className: u()(aq.x6, { [aq.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aq.PJ,
                }),
                (0, c.jsx)(aZ.A, { className: aq.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var a$ = s(386564);
function a0(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: s,
            containerClassName: i,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        o = r
            ? (0, c.jsx)(ay.A, {
                  color: l ? aI.XD.BRAND_INVERTED : void 0,
                  className: u()(a$.x6, a$.Ph, n, { [a$.Sq]: t && a, [a$.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : a$.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(ay.A, {
                  color: l || !a ? aI.XD.BRAND_INVERTED : void 0,
                  className: u()(a$.x6, a$.Ph, n, { [a$.Sq]: t && a, [a$.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aZ.A, { className: u()(a$.x6, n), color: a ? void 0 : aI.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(a$.UD, i), children: [o, " ", d] });
}
function a1() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aH.p, { className: a$.zd }),
            (0, c.jsx)(aH.p, { className: a$.G }),
            (0, c.jsx)(aH.p, { className: a$.zy }),
            (0, c.jsx)(aH.p, { className: a$.GX }),
        ],
    });
}
function a2(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = as();
    return (0, c.jsx)(J.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(a$.h_, { [a$.If]: s, [a$.jn]: i }),
        children: q.intl.format(q.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let a3 = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, eg.QQ)(),
        o = (0, nN.ar)(),
        d = (0, i4.b)().length > 0,
        m = q.intl.string(q.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(a$.kL, s, { [a$.V1]: !o, [a$.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? a$.I6 : a$.G1,
                    children: [
                        (0, c.jsx)(eB.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(X.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: a$.DF,
                                  children: (0, c.jsx)(n4.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(a2, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: a$.UD,
                                  children: (0, c.jsx)(aZ.A, { className: u()(a$.x6, i), color: aI.XD.WHITE }),
                              })
                            : (0, c.jsx)(a0, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        d && (0, c.jsx)(a2, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(a1, {}),
            ],
        }),
    });
});
var a7 = s(22118),
    a6 = s(145359),
    a5 = s(377770);
function a8(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aL, { lifted: t }) : null;
}
let a9 = () => {
        (0, v.P)(_);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, is.Ay)(),
            n = (0, it.M)(i),
            [a, l] = o.useState(!1),
            [r, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [p, f] = o.useState(!1),
            h = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            N = null != h ? (0, ex.EL)(h) : null,
            E = null != N ? ex.Ay.getSkuIdForPlan(N.planId) : null,
            b = null !== E && E !== tG.pe.TIER_2 ? tG.pe.TIER_2 : null,
            T = (0, eh.V)(),
            R = T?.subscriptionTrial?.skuId,
            C = (0, nN.ar)(),
            I = (0, x.bG)([av.A], () => {
                let e = av.A.getMarketingComponentByType(ee.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            P = (0, aS.Q)(),
            { analyticsLocations: S } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            f(!0);
        }, []);
        let y = (0, c.jsx)("div", {
            className: a5.dY,
            children: (0, c.jsx)(G.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(nn.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(ay.A, {
                        showIcon: !1,
                        subscriptionTier: tG.pe.TIER_0,
                        className: a6.Ph,
                        look: aI.pR.OUTLINED,
                        color: aI.XD.WHITE,
                        buttonShineClassName: a6.Qr,
                    }),
                    tier2CTAButton:
                        R === tG.pe.TIER_0
                            ? (0, c.jsx)(ay.A, {
                                  showIcon: !1,
                                  subscriptionTier: tG.pe.TIER_2,
                                  className: a6.Ph,
                                  look: aI.pR.OUTLINED,
                                  color: aI.XD.WHITE,
                                  buttonShineClassName: a6.Qr,
                              })
                            : (0, c.jsx)(ay.A, {
                                  color: aI.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tG.pe.TIER_2,
                                  className: a6.Ph,
                                  textOptions: { textClassName: a6.Ac },
                                  buttonShineClassName: a6.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: a5.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aM, { premiumSubscription: h, className: u()(a5.R3, { [a5.aZ]: C }) }),
                C &&
                    (0, c.jsxs)("div", {
                        className: a5.n1,
                        children: [
                            (0, c.jsx)(a8, { inOfferExperience: C }),
                            (0, c.jsx)(tX.l, {
                                className: a5.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [a5.V1]: !C }),
                    children: [
                        null != I && (0, c.jsx)(a_.m, { className: a5.w$, config: I }),
                        (0, c.jsxs)("div", {
                            className: a5.iS,
                            children: [
                                !C &&
                                    (0, c.jsx)(tX.l, {
                                        className: a5.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(G.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(a3, {
                                        ref: t,
                                        subscriptionTier: b,
                                        className: u()({ [a5.p7]: C, [a5.Pw]: C, [a5.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != P && (0, c.jsx)("div", { className: a5.Ol, children: (0, c.jsx)(aP.I, { component: P }) }),
                y,
                (0, c.jsx)(aJ, { className: a5.B_ }),
                (0, c.jsx)("div", { className: a5.aC, children: (0, c.jsx)(a7.A, { className: a5.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: a5.hz }),
                (0, c.jsx)(aQ, { isVisible: !a && !r && p, subscriptionTier: b, isApplicationHome: !1 }),
                (0, c.jsx)(G.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: S }),
                            g(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: a5._Z }),
                }),
                (0, c.jsx)("img", {
                    src: i8,
                    className: a5.Kw,
                    width: 112,
                    height: 85,
                    alt: q.intl.string(q.t.X4IxWL),
                }),
            ],
        });
    },
    a4 = function (e) {
        let { entrypoint: t } = e,
            s = (0, eh.V)(),
            i = (0, ef.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, ne.NF)({ trialOffer: s }),
            a = (0, ne.Tp)(),
            l = (0, x.bG)([eW.A], () => eW.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, ne.QG)(), !0 === a && (0, ne.ne)(l), (null != s || null != i) && (0, k.u1)(s, i));
            }, [s, i, n, a, l]),
            t)
        ) {
            case tG.tU.UserSettings:
                return (0, c.jsx)(a9, {});
            case tG.tU.ApplicationStoreHome:
                return (0, c.jsx)(aC, {});
            default:
                return null;
        }
    };
var le = s(531296);
let lt = function (e) {
    let { entrypoint: t = tG.tU.UserSettings } = e;
    (0, v.P)(_);
    let s = (0, b.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        a = (0, x.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        r = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        d = r?.id,
        C = (0, eh.V)(),
        I = (0, ef.O)({ includePremiumGroupDiscount: !0 }),
        G = (0, T.Y)(tG.T7),
        [w, B] = o.useState(!0),
        H = o.useRef(0),
        F = (0, U.YE)(r, tG.PremiumTypes.TIER_2);
    ((0, i4.b)(),
        o.useEffect(() => {
            p.h.wait(async () => {
                let e = Date.now();
                (await Promise.all([E.hP(), E.$o(), (0, f.zS)(null, null, eJ.tF5.DISCOVERY)]),
                    (H.current = Date.now() - e),
                    B(!1));
            });
        }, []),
        o.useEffect(() => {
            w ||
                L.default.track(eJ.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: H.current,
                });
        }, [i, w]),
        o.useEffect(() => {
            s && (null != C || null != I) && (0, k.u1)(C, I);
        }, [s, C, I]));
    let V = (0, m.zy)(),
        z = o.useRef(!1),
        W = a && l && G,
        [Y, K] = o.useState(W);
    (W && !Y && K(!0),
        o.useEffect(() => {
            if (z.current || !W) return;
            let e = new URLSearchParams(V.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tG.pe.TIER_0, nitro: tG.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((z.current = !0),
                (0, S.bG)(eJ.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: s, analyticsLocations: n }));
        }, [W, V.search, n]));
    let X = (0, x.bG)([y.A], () => y.A.enabled),
        J = t === tG.tU.ApplicationStoreHome,
        Z = X
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(R.uK, {})
              : J && F
                ? (0, c.jsx)(j.f5, { value: n, children: (0, c.jsx)(i9, { userId: d }) })
                : Y
                  ? null
                  : (0, c.jsx)("div", { className: u()(le.kL, le.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !X && !s && J && F
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [J && (0, c.jsx)(N.A, {}), Z] })
        : (0, c.jsx)(j.f5, { value: n, children: (0, c.jsx)(a4, { entrypoint: t }) });
};
