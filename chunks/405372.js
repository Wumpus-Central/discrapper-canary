(s.d(t, { A: () => a2 }), s(323874), s(14289), s(35956), s(205816));
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
    p = s(73825),
    f = s(974544),
    h = s(107834),
    N = s(793574),
    A = s(688810),
    j = s(277984),
    E = s(86379),
    T = s(160946),
    b = s(545075),
    C = s(840251),
    R = s(688151);
let I = new C.E([], R.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = s(611924),
    v = s(75678),
    P = s(976860),
    y = s(351906),
    S = s(287809),
    D = s(295405),
    M = s(166403),
    O = s(174459),
    U = s(474090),
    L = s(10392),
    k = s(269115),
    G = s(689175),
    w = s(961250),
    B = s(366505),
    H = s(321191),
    F = s(903209),
    V = s(131168),
    W = s(482589),
    z = s(511484),
    Y = s(315629),
    X = s(297264),
    K = s(834730),
    Z = s(65470),
    J = s(105292),
    q = s(719126);
let Q = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, A.Ay)(s);
    return (0, c.jsx)(A.f5, {
        value: n,
        children: (0, c.jsxs)(Y.h, {
            className: u()(q.kL, q.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: q.FS,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: "heading-xxl/bold",
                            className: q.R_,
                            children: J.intl.string(J.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(K.E, { variant: "text-md/medium", children: J.intl.string(J.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: q.SB,
                            children: (0, c.jsx)(Z.A, {
                                buttonTextOverride: J.intl.string(J.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: q._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var $ = s(877624),
    ee = s(192308),
    et = s(331322),
    es = s(403581),
    ei = s(821609),
    en = s(502572),
    ea = s(775602),
    el = s(366999),
    er = s(531260),
    ec = s(780964),
    eo = s(766075),
    ed = s(786300),
    eu = s(975571),
    em = s(158045),
    ex = s(89366),
    eg = s(881489),
    ep = s(724651),
    ef = s(732280),
    eh = s(549996),
    eN = s(172218);
function eA() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eN.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var ej = s(287763);
let eE = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: ej.i,
        children: (0, c.jsx)(K.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var eT = s(371764),
    eb = s(103411),
    eC = s(792656),
    eR = s(536637),
    eI = s.n(eR),
    e_ = s(496431),
    ev = s(850292);
let eP = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, e_.A)(eI()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(ev.Xl, s, { [ev.a3]: "text-lg/bold" === i }),
        children: [
            (0, c.jsx)(K.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: J.intl.string(J.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: ev.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: ev.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: ev.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: ev.B2,
                                                        children: (0, c.jsx)(K.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: ev.B2,
                                                        children: (0, c.jsx)(K.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(K.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return J.intl.string(J.t.ixASa2);
                                                        case "hours":
                                                            return J.intl.string(J.t["8sNvNn"]);
                                                        case "minutes":
                                                            return J.intl.string(J.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return J.intl.string(J.t.JhaiLW);
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
                                    (0, c.jsx)(K.E, {
                                        className: ev.cV,
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
    eS = s(778712),
    eD = s(97808),
    eM = s(609425),
    eO = s(660184),
    eU = s(854627),
    eL = s(427262),
    ek = s(938767);
function eG() {
    let e = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, eM.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eU.A)({ userId: e?.id, size: eS._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eL.mG)(e);
    return (0, c.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, c.jsx)("div", {
                className: ek.my,
                children: (0, c.jsx)(eD.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eS._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: ek.QC, children: (0, c.jsx)(eO.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var ew = s(707554),
    eB = s(628154);
let eH = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(ew.F, {
        forceLevel: 1,
        children: (0, c.jsx)(X.D, { className: u()(eB.w, t, i && eB.n), variant: n, color: s, children: a }),
    });
};
var eF = s(62010),
    eV = s(815996),
    eW = s(557284),
    ez = s(744413),
    eY = s(478016),
    eX = s(318254),
    eK = s(661531),
    eZ = s(626031),
    eJ = s(197630);
s(232198);
var eq = s(652215),
    eQ = s(957457);
function e$(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eJ.xb.ORBS
          ? (0, c.jsx)(e0, { nRewardsGranted: t, className: i })
          : s === eJ.xb.DISCOUNT
            ? (0, c.jsx)(e1, { nRewardsGranted: t, className: i })
            : null;
}
function e0(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(i);
        }, [i]),
        (0, c.jsxs)(et.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: eQ.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(eX.C, { size: "xs", color: eK.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(eZ.t, {
                            value: n,
                            onValueChange: eq.tEg,
                            onValueReached: eq.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "text-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(K.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: J.intl.string(J.t.UhguER),
                }),
            ],
        })
    );
}
function e1(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(et.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": J.intl.formatToPlainString(J.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(eY.U, { size: "md", color: eK.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(K.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: J.intl.format(J.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e2 = s(303682),
    e3 = s(758836),
    e6 = s(558992);
function e7(e) {
    let { className: t } = e,
        {
            referralSentUsers: s,
            nReferralsSent: i,
            hasEligibleFriends: n,
            allSent: a,
            headingText: l,
            bodyText: r,
            referralStatus: o,
            isEligibleForIncentive: d,
            referralIncentiveRewardType: m,
            useAltReferralCardArt: x,
            shouldShowSpendOrbsCta: g,
        } = (0, eW.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(e6.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e6.G3,
                children: (0, c.jsx)(ez.fx, {
                    nReferralsSent: i,
                    imageSize: 55,
                    backgroundClassName: e6.HP,
                    ringClassName: e6.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(e6.IH, d && e6.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: e6.aZ,
                            children: (0, c.jsx)(eF.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: e6.n4,
                        children: [
                            (0, c.jsx)(K.E, {
                                variant: d ? "text-md/bold" : "text-md/semibold",
                                color: "text-strong",
                                children: l,
                            }),
                            (0, c.jsx)(K.E, {
                                variant: d ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: e6.Wp,
                              children: [
                                  (0, c.jsx)(ez.ZP, { referralSentUsers: s }),
                                  (0, c.jsx)(e$, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(ez.ZP, { referralSentUsers: s, className: e6.t7 }),
                ],
            }),
            (0, c.jsx)(ei.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? J.intl.string(J.t.iw5Ccc) : J.intl.string(J.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, eV.Cz)({
                              tab: e3.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: N.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, ez.jM)({
                              startingScreen: e2.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e5 = s(702841),
    e8 = s(676279),
    e9 = s(941143),
    e4 = s(717421),
    te = s(396583),
    tt = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    ts = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let ti = (e) => {
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
        u = (0, e4.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, e4.z)(
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
        N = (0, e4.z)(
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
        [T, b] = (0, o.useState)(1),
        C = (0, e4.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, te.A)(() => {
        (E(T * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(e9.animated.div, {
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
                  translateX: a ? C.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tn = s(382168);
let ta = function (e) {
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
                    className: u()(tn.nJ, i),
                    children: (0, c.jsx)(ti, {
                        blurAnimationData: { startBlurRadius: 10 * f, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ts.UP,
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
                    className: u()(tn.IN, n),
                    children: (0, c.jsx)(ti, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ts.DOWN,
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
                    className: u()(tn.Gj, a),
                    children: (0, c.jsx)(ti, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ts.DOWN,
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
                    className: u()(tn.FV, l),
                    children: (0, c.jsx)(ti, {
                        blurAnimationData: { startBlurRadius: 5 * f, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ts.UP,
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
                    className: u()(tn.E1, r),
                    children: (0, c.jsx)(ti, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * f, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tt.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ts.UP,
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
};
var tl = s(607470);
let tr =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tc = function (e) {
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
                  children: (0, c.jsx)(ti, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tt.SINE },
                      parallaxAnimationData: {
                          pathDirection: ts.UP,
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
                                tl.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tr }),
                                },
                                tr,
                            ),
                  }),
              });
    },
    to = function (e) {
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
            f = (0, e5.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
            h = (0, e8.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tc, {
                    supportHEVCAlpha: h,
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(ta, {
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
var td = s(942663);
let tu = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(to, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(td.wG, s && td.Vx),
        flyingWumpusAssetClassName: u()(td.lu, s && td.ov),
        boltContainerClassName: u()(td.nJ, s && td.Wc),
        hammerContainerClassName: u()(td.Gj, s && td.XA),
        keyContainerClassName: u()(td.FV, s && td.oZ),
        starContainerClassName: u()(td.E1, s && td.LN),
        boltAssetClassName: u()(td.j7, s && td.QN),
        hammerAssetClassName: u()(td.Wv, s && td.B9),
        keyAssetClassName: u()(td.rs, s && td.I1),
        starAssetClassName: u()(td.OY, s && td.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tm = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tx = s(454273);
let tg = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: g } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion)),
        p =
            ((t = { [tm.MORNING]: J.t["Wvc/I+"], [tm.AFTERNOON]: J.t["d+0STx"], [tm.EVENING]: J.t.CqsxKI }),
            J.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tm.MORNING
                        : s >= 12 && s < 17
                          ? tm.AFTERNOON
                          : tm.EVENING
                ],
            )),
        f = o ?? (r ? (0, c.jsx)(e7, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tx.kL, tx.Eg, i),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(tx.W2, tx.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(et.B, {
                    align: "start",
                    gap: 32,
                    className: tx.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(et.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(et.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(eH, {
                                            className: tx.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: p,
                                        }),
                                        (0, c.jsx)(eG, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tx.y3,
                    children: (0, c.jsx)(tu, { containerVisibilityPercentage: g, compact: null == f }),
                }),
            ],
        }),
    });
};
var tp = s(549926);
let tf = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(to, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tp.wG,
        flyingWumpusAssetClassName: tp.lu,
        boltContainerClassName: tp.nJ,
        hammerContainerClassName: tp.Gj,
        keyContainerClassName: tp.FV,
        starContainerClassName: tp.E1,
        boltAssetClassName: tp.j7,
        hammerAssetClassName: tp.Wv,
        keyAssetClassName: tp.rs,
        starAssetClassName: tp.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var th = s(499126);
let tN = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(to, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: th.wG,
        flyingWumpusAssetClassName: th.lu,
        boltContainerClassName: th.nJ,
        hammerContainerClassName: th.Gj,
        keyContainerClassName: th.FV,
        starContainerClassName: th.E1,
        boltAssetClassName: th.j7,
        hammerAssetClassName: th.Wv,
        keyAssetClassName: th.rs,
        starAssetClassName: th.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tA = s(202541);
function tj(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, eg.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tx.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tx.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(et.B, {
                    align: "start",
                    gap: 24,
                    className: tx.E2,
                    children: [
                        (0, c.jsxs)(et.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eE, { text: J.intl.string(J.t.yhldRB) }),
                                (0, c.jsx)(eH, { children: J.intl.format(J.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tx.X8,
                                    children: (0, c.jsx)(K.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: J.intl.string(J.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(et.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tx.oF,
                            children: [
                                (0, c.jsx)(eC.A, {
                                    size: "md",
                                    buttonTextOverride: J.intl.string(J.t["2+luBl"]),
                                    iconOverride: es.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(ei.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: J.intl.string(J.t.Af7ye6),
                                    onClick: () => (0, eo.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tx.Hk, children: (0, c.jsx)(tN, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tE(e) {
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
        { visibilityPercentageRef: p, visibilityPercentage: f } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion)),
        h = g ?? (m ? (0, c.jsx)(e7, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tx.kL, tx.Eg, t),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: u()(tx.W2, tx.HQ),
            ref: p,
            children: [
                (0, c.jsxs)(et.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tx.ZU, tx.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eP, { expiresAt: n.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(et.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eH, {
                                    children: J.intl.format(J.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(K.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: J.intl.format(J.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, em.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(et.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(ei.$, {
                                    variant: "expressive",
                                    icon: es.t,
                                    size: "md",
                                    text: J.intl.string(J.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = ey.g.CONFIRM_DISCOUNT),
                                            void (0, ee.openModalLazy)(async () => {
                                                let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                    await Promise.all([
                                                        s.e("489361"),
                                                        s.e("227853"),
                                                        s.e("222969"),
                                                        s.e("515363"),
                                                        s.e("128804"),
                                                        s.e("71151"),
                                                        s.e("286615"),
                                                        s.e("311541"),
                                                        s.e("795854"),
                                                        s.e("870088"),
                                                        s.e("300641"),
                                                        s.e("747802"),
                                                        s.e("966366"),
                                                        s.e("84978"),
                                                        s.e("153302"),
                                                        s.e("807003"),
                                                        s.e("88683"),
                                                        s.e("983513"),
                                                        s.e("216806"),
                                                        s.e("310734"),
                                                        s.e("348567"),
                                                        s.e("452075"),
                                                        s.e("900277"),
                                                        s.e("127962"),
                                                        s.e("907167"),
                                                        s.e("861060"),
                                                        s.e("364827"),
                                                        s.e("264572"),
                                                        s.e("217229"),
                                                        s.e("716460"),
                                                        s.e("678157"),
                                                        s.e("147134"),
                                                        s.e("40291"),
                                                        s.e("544571"),
                                                        s.e("729963"),
                                                        s.e("538513"),
                                                        s.e("122990"),
                                                        s.e("50097"),
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
                                    buttonTextOverride: J.intl.string(J.t["3KomGa"]),
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tx.y3, tx.Xx),
                    children: (0, c.jsx)(tf, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function tT(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: o,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tC(),
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, eh.c)($.C.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eq.Dmq.CANCELED,
        p = null;
    null != x &&
        "marketingPageBanner" === x.properties.properties.oneofKind &&
        (p = (0, c.jsx)(eT.x, {
            componentId: x.id,
            promotionId: x.promotionId,
            promotionBannerMarketingComponentFields: x.properties.properties.marketingPageBanner,
        }));
    let f = (0, ef.V)(),
        h = (0, ep.O)(),
        j = (0, z.U9)(h, tA.pe.TIER_2) ? tA.pe.TIER_2 : void 0,
        E = null != r && r.status !== eq.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        T = (0, er.A)(),
        b = T.isFractionalPremiumActive && !E && null == p && !l;
    if (s) return (0, c.jsx)(tj, { fpEndsAt: T.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = b
            ? (0, c.jsxs)("div", {
                  className: tx.UJ,
                  children: [
                      (0, c.jsx)(eC.A, { size: "md", subscriptionTier: f?.subscriptionTrial?.skuId ?? j }),
                      (0, c.jsx)(Z.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: J.intl.string(J.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tg, {
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
        ? (0, c.jsx)(tE, {
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
        : (0, c.jsx)(tg, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          });
}
let [tb, tC] = (0, ed.A)(),
    tR = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, eg.ds)(),
            r = (0, ex.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eq.Dmq.CANCELED && null != i,
            m = r && !u,
            g = J.intl.string(J.t.qYKftX),
            p = (0, eb.m)(),
            { fractionalState: f, endsAt: h } = (0, er.A)(),
            j = (0, el.Ay)(h, el.yE.CREDITS_ENDS_IN),
            E = f !== tA.xc.NONE && !l;
        E && (m = !0);
        let T = o.useMemo(() => {
                if (!E) return (0, c.jsx)(eE, { text: g });
                let e = J.intl.format(J.t["yR+oDD"], {
                    helpCenterLink: eu.A.getArticleURL(eq.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
                return (0, c.jsx)(en.A, {
                    text: e,
                    "aria-label": e.toString(),
                    tooltipClassName: tx.YL,
                    position: "right",
                    children: (e) =>
                        (0, c.jsx)("div", {
                            ...e,
                            className: tx.V_,
                            children: (0, c.jsx)("div", { className: tx.eL, children: (0, c.jsx)(eE, { text: j }) }),
                        }),
                });
            }, [E, g, j]),
            b = o.useMemo(
                () => ({
                    headingTop: T,
                    showPill: m,
                    shouldShowChurnVariant: u,
                    premiumSubscription: d,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                }),
                [T, m, u, d, i, n, s],
            );
        return (0, c.jsx)(A.f5, {
            value: a,
            children: (0, c.jsx)(tb.Provider, {
                value: b,
                children: (0, c.jsx)(tT, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: p }),
            }),
        });
    };
var tI = s(820284),
    t_ = s(742589),
    tv = s(392943),
    tP = s(285373),
    ty = s(603202),
    tS = s(673992);
let tD = function () {
    return (0, c.jsx)(tI.A, {
        section: eq.JJy.NAVIGATION,
        children: (0, c.jsx)(t_.A, {
            className: u()(ty.TQ, tS.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: ty.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: tS.wk,
                        children: [
                            (0, c.jsx)(es.t, { colorClass: tS.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": J.intl.string(J.t.Ipxkog),
                                className: tS.Ss,
                                children: (0, c.jsx)(tv.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: ty.MQ,
                        children: [
                            (0, c.jsx)(tP.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(Z.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tM = s(325499),
    tO = s(562708),
    tU = s(885574),
    tL = s(43990),
    tk = s(993077),
    tG = s(139286),
    tw = s(872725),
    tB = s(920050),
    tH = s(51965),
    tF = s(375776),
    tV = s(727811),
    tW = s(222652),
    tz = s(428685),
    tY = s(934353);
function tX(e) {
    let { openRewardModal: t } = e,
        s = (0, tW.z)();
    if (s.kind === tW.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tY.R$,
            children: [
                (0, c.jsx)(eC.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tA.pe.TIER_2,
                }),
                (0, c.jsx)(ei.$, { variant: "secondary", size: "md", text: J.intl.string(J.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === tV.P.CLAIMED
            ? { text: J.intl.string(tz.default.Plwzgf) }
            : { text: J.intl.string(J.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: tY.R$,
                children: [
                    (0, c.jsx)(tH.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(ei.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === tV.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: tY.ed,
                    children: [
                        (0, c.jsx)(tU.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(K.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: J.intl.string(tz.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function tK(e) {
    let { glowing: t = !1 } = e;
    (0, tG.A)({
        type: tO.ImpressionTypes.VIEW,
        name: tO.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: tB.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ee.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(tL.N, {
        theme: eq.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(A.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, tY.kL),
                    children: (0, c.jsx)(tw.A, {
                        cardType: tk.s.CUSTOM,
                        cardClassName: tY.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: tY.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: tY.j,
                                    children: [
                                        (0, c.jsx)("div", { className: tY._g }),
                                        (0, c.jsx)("div", { className: tY.$h }),
                                        (0, c.jsx)("div", { className: tY.Rv }),
                                        (0, c.jsx)("div", { className: tY.Lw }),
                                        (0, c.jsx)("div", { className: tY.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: tY.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: tY.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(X.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: tY.DD,
                                            children: J.intl.string(tz.default.RGT513),
                                        }),
                                        (0, c.jsx)(K.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: tY.h_,
                                            children: J.intl.string(tz.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(tX, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var tZ = s(254202),
    tJ = s(112992);
function tq(e) {
    let { className: t, containerClassName: s, glowing: i } = e,
        n = (0, tW.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === tW.N.SUBSCRIBE
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
    return (0, c.jsx)(tZ.S, {
        id: tB.XBOX_PREMIUM_PERK_CARD_ID,
        title: J.intl.string(tz.default.UVL9tD),
        description: J.intl.string(tz.default["I+IXr0"]),
        ...l,
        className: t,
        containerClassName: s,
        glowing: i,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: tJ.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function tQ(e) {
    let { analyticsLocations: t } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(A.f5, { value: t, children: (0, c.jsx)(tq, { ...e }) });
}
var t$ = s(744082),
    t0 = s(261995),
    t1 = s(722793),
    t2 = s(700556),
    t3 = s(821874);
function t6(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = t3.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && t2.Jx, l), children: a }) : null,
        ],
    });
}
var t7 = s(517846),
    t5 = s(509434),
    t8 = s(695366),
    t9 = s(27620),
    t4 = s(44724),
    se = s(371794);
let st = new Date(Date.UTC(2026, 9, 23));
var ss = s(945810);
let si = (0, ss.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sn = s(398523),
    sa = s(881373),
    sl = s(721157),
    sr = s(555393),
    sc = s(325652),
    so = s(852218),
    sd = s(52530),
    su = s(164832),
    sm = s(280761),
    sx = s(881296);
let sg = (0, ss.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sp = s(612413);
let sf = new Date(Date.UTC(2026, 10, 5));
var sh = s(188275),
    sN = s(14429),
    sA = s(810889),
    sj = s(293838),
    sE = s(234919),
    sT = s(264865),
    sb = s(635088),
    sC = s(679502),
    sR = s(762493);
let sI = "xgpp";
function s_(e) {
    let { card: t, backgroundAssetUrl: s, blurTint: i, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: t2.JE,
        children: (0, c.jsx)(tZ.S, {
            ...t,
            backgroundAssetUrl: s,
            blurTint: i ?? void 0,
            pillText: void 0,
            featured: !0,
            glowing: n,
            autoClickCta: a,
        }),
    });
}
function sv(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tM.b)("premium_subscriber_home_rewards");
    (0, t$.A)(tA.tv);
    let {
            expiredCallOfDutyCard: n,
            logitechCard: a,
            rustCard: l,
            steelseriesCard: r,
            youtubeCard: d,
            riotCampaignCard: m,
            macaronCard: x,
            codeBlurpleTeaserCard: g,
        } = (function () {
            let { analyticsLocations: e } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                t = (0, sd.fR)(),
                s = (0, sm.U)(),
                i = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = si.useConfig({ location: t });
                    return s;
                })({ location: "useHardwarePartnerPerkCards" }),
                n = (0, sa.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                a = sn.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                l = (0, sp.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                r = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = sg.useConfig({ location: t });
                    return s;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                d = null === (0, sr.N)(),
                u = (0, t0.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: m, nDaysInMonth: x } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let o =
                        i && null == t
                            ? {
                                  id: tB.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: J.intl.string(sN.default["IcD/7p"]),
                                  description: J.intl.formatToPlainString(sN.default.hausFi, {
                                      date: new Intl.DateTimeFormat(J.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(st),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: sc.L.EXPIRED,
                                  pillText: J.intl.string(sN.default.fxF0Jz),
                                  caption: (0, c.jsx)("img", { src: sb.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    g = n
                        ? {
                              id: tB.LOGITECH_3PP_CARD_ID,
                              title: J.intl.string(sA.default.OlObRa),
                              description: J.intl.format(sA.default.ZGOJ8R, {
                                  discountPercent: sa.aW,
                                  termsUrl: eu.A.getArticleURL(eq.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: m.getDate() / x,
                              ctaText: J.intl.string(J.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, su.P)({
                                      partnerIds: [so.XY],
                                      title: J.intl.string(sA.default["2I7nK+"]),
                                      subtitle: J.intl.format(sA.default.W8jOD0, {
                                          termsUrl: eu.A.getArticleURL(eq.MVz.LOGITECH_PROMOTION),
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
                              analyticsOptions: { thirdPartyPartner: so.XY },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    p = a
                        ? {
                              id: tB.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: J.intl.string(J.t.m7PucM),
                              description: J.intl.format(J.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: m.getDate() / x,
                              ctaText: J.intl.string(J.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, su.P)({
                                      partnerIds: [so.KS],
                                      title: J.intl.string(J.t["7ioAjs"]),
                                      subtitle: J.intl.format(J.t.LOYRxB, {
                                          helpCenterLink: eu.A.getArticleURL(eq.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: e,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: so.KS },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    f = r
                        ? {
                              id: tB.RUST_3PP_CARD_ID,
                              title: J.intl.string(sE.default.gQ1ctg),
                              description: J.intl.format(sE.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(J.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(sf),
                                  termsUrl: eu.A.getArticleURL(eq.MVz.RUST_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: J.intl.string(J.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, se.YE)(sh.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: J.intl.string(sE.default.NmBRGV),
                              ctaIcon: t5.I,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t4.default)({ applicationId: sh.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null;
                return {
                    expiredCallOfDutyCard: o,
                    logitechCard: g,
                    rustCard: f,
                    steelseriesCard: p,
                    youtubeCard: l
                        ? {
                              id: tB.YOUTUBE_3PP_CARD_ID,
                              title: J.intl.string(sT.default["BdIVB+"]),
                              description: J.intl.format(sT.default["3jY5i3"], {
                                  helpCenterUrl: eu.A.getArticleURL(eq.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: sC.A, alt: "YouTube Premium" }),
                              ctaText: J.intl.string(sN.default.fcopjf),
                              onCtaClick: () =>
                                  (0, su.P)({
                                      partnerIds: [so.NC],
                                      analyticsLocations: e,
                                      title: J.intl.string(sT.default.TDZUui),
                                      subtitle: J.intl.format(sT.default.BTLkvw, {
                                          helpCenterUrl: eu.A.getArticleURL(eq.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      modalTeaser: {
                                          title: J.intl.format(sT.default.J8CVYT, {
                                              helpCenterUrl: eu.A.getArticleURL(
                                                  eq.MVz.YOUTUBE_PROMOTION_CURRENT_SUBSCRIBER,
                                              ),
                                          }),
                                          titleVariant: "text-sm/medium",
                                          icon: t8.E,
                                      },
                                      onClose: () => {
                                          t9.Ay.fireSurveyAction(t7.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: so.NC },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    riotCampaignCard:
                        null != s
                            ? {
                                  id: tB.RIOT_CREDIT_CAMPAIGN_PERK_CARD_ID,
                                  title: J.intl.string(sj.default.zCdMTs),
                                  description: J.intl.formatToPlainString(sj.default["8VH2lL"], {
                                      termsUrl: eu.A.getArticleURL(eq.MVz.RIOT_CREDIT_CAMPAIGN),
                                  }),
                                  pillText:
                                      null != s.redemptionEndsAt
                                          ? J.intl.formatToPlainString(sN.default.g7iyvR, {
                                                date: (0, sl.Sw)(s.redemptionEndsAt),
                                            })
                                          : void 0,
                                  caption: (0, c.jsx)("img", {
                                      src: "https://cdn.discordapp.com/assets/content/cef348e36782f9a2173dea37eb7a54e04a0acb4d4f7f5074c8a3f9e5d2ae6e29.svg",
                                      alt: "Riot Games",
                                  }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/2e11a92f42a86815654f152948f20362092f082dd2215e4ad7dbfa3eacea17fd.webp",
                                  ctaText: J.intl.string(sj.default.en2ls2),
                                  blurTint: "#310A0B",
                                  isThirdPartyPerk: !0,
                                  onCtaClick: () => {
                                      (0, sx.W)({ analyticsLocations: e });
                                  },
                                  analyticsOptions: { thirdPartyPartner: "riot" },
                              }
                            : null,
                    macaronCard: u,
                    codeBlurpleTeaserCard: t,
                };
            }, [u, t, s, e, i, m, n, x, a, r, l, d]);
        })(),
        { phase: p } = (0, t0.vc)({ location: "NitroRewardsSection" }),
        f =
            null != x
                ? {
                      card: x,
                      backgroundAssetUrl:
                          p === t1.H.PHASE_ONE
                              ? "https://cdn.discordapp.com/assets/content/dacaa1d04c91ae0beefcbce25518899d11a943e10437ded70a6d594a03cf9535.png"
                              : "https://cdn.discordapp.com/assets/content/d6bc70e4b19392250948d59f11fcdb7360b2ed7fa636f8d9ab30c199a728a7c6.png",
                      blurTint: "#001E73",
                  }
                : null != d
                  ? {
                        card: d,
                        backgroundAssetUrl:
                            "https://cdn.discordapp.com/assets/content/6936886d1c55035bd3f56b7594d80dd08e7d3e859be8630f3ef667b338a1dd78.webp",
                        blurTint: "#3E000C",
                    }
                  : null,
        h = null != f ? f.card.id : null,
        j = i && null == f,
        E =
            i ||
            null != n ||
            null != a ||
            null != l ||
            null != r ||
            null != m ||
            null != g ||
            (null != x && x.id !== h) ||
            (null != d && d.id !== h),
        T = null;
    return (null != f
        ? (T = (0, c.jsx)(s_, {
              card: f.card,
              backgroundAssetUrl: f.backgroundAssetUrl,
              blurTint: f.blurTint,
              glowing: t === sI || s === f.card.id,
              autoClickCta: s === f.card.id,
          }))
        : j && (T = (0, c.jsx)("div", { className: t2.JE, children: (0, c.jsx)(tK, { glowing: t === sI }) })),
    null != T || E)
        ? (0, c.jsx)(t6, {
              id: sI,
              sectionClassName: u()(sR.uW, sR.Uv, sR.qr),
              heading: (0, c.jsx)(X.D, {
                  variant: "nitro-sm",
                  className: u()(t3.R_, t2.U6),
                  children: J.intl.string(J.t.NG1e6l),
              }),
              beforeGrid: T,
              grid: E
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != g && (0, c.jsx)(tZ.S, { ...g, containerClassName: t3.Nr, glowing: s === g.id }),
                            null != m &&
                                (0, c.jsx)(tZ.S, {
                                    ...m,
                                    containerClassName: t3.Nr,
                                    glowing: s === m.id,
                                    autoClickCta: s === m.id,
                                }),
                            null != x &&
                                x.id !== h &&
                                (0, c.jsx)(tZ.S, {
                                    ...x,
                                    containerClassName: t3.Nr,
                                    glowing: s === x.id,
                                    autoClickCta: s === x.id,
                                }),
                            null != d &&
                                d.id !== h &&
                                (0, c.jsx)(tZ.S, {
                                    ...d,
                                    containerClassName: t3.Nr,
                                    glowing: s === d.id,
                                    autoClickCta: s === d.id,
                                }),
                            null != l && (0, c.jsx)(tZ.S, { ...l, containerClassName: t3.Nr, glowing: s === l.id }),
                            i &&
                                (0, c.jsx)(tQ, {
                                    containerClassName: t3.Nr,
                                    glowing: s === tB.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, c.jsx)(tZ.S, { ...a, containerClassName: t3.Nr, glowing: s === a.id }),
                            null != r && (0, c.jsx)(tZ.S, { ...r, containerClassName: t3.Nr, glowing: s === r.id }),
                            null != n && (0, c.jsx)(tZ.S, { ...n, containerClassName: t3.Nr, glowing: s === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var sP = s(313133),
    sy = s(67423);
let sS = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e4.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e9.animated.div, {
        className: u()(sP.iE, { [sP.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sP.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sy, className: sP.oU }),
                (0, c.jsxs)("div", {
                    className: sP.iQ,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: J.intl.format(J.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: J.intl.format(J.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, em.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(ei.$, {
                    variant: "expressive",
                    icon: es.t,
                    size: "md",
                    text: J.intl.string(J.t.zrCzVB),
                    onClick: () =>
                        void (0, ee.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("489361"),
                                s.e("227853"),
                                s.e("222969"),
                                s.e("515363"),
                                s.e("128804"),
                                s.e("71151"),
                                s.e("286615"),
                                s.e("311541"),
                                s.e("795854"),
                                s.e("870088"),
                                s.e("300641"),
                                s.e("747802"),
                                s.e("966366"),
                                s.e("84978"),
                                s.e("153302"),
                                s.e("807003"),
                                s.e("88683"),
                                s.e("983513"),
                                s.e("216806"),
                                s.e("310734"),
                                s.e("348567"),
                                s.e("452075"),
                                s.e("900277"),
                                s.e("127962"),
                                s.e("907167"),
                                s.e("861060"),
                                s.e("364827"),
                                s.e("264572"),
                                s.e("217229"),
                                s.e("716460"),
                                s.e("678157"),
                                s.e("147134"),
                                s.e("40291"),
                                s.e("544571"),
                                s.e("729963"),
                                s.e("538513"),
                                s.e("122990"),
                                s.e("50097"),
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
var sD = s(761508),
    sM = s(480713),
    sO = s(449543),
    sU = s(197935),
    sL = s(62617),
    sk = s(387103);
function sG(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sk.A,
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sw(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg",
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sB = s(93712);
function sH(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sB.A,
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sF = s(345394);
function sV(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sF.A,
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sW = s(163665);
function sz(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sY = s(330422);
function sX(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sK(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sZ = s(996682);
function sJ(e) {
    let { color: t = eK.A.colors.ICON_STRONG, "aria-label": s, "aria-hidden": i, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, sL.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, sZ.A)({ "aria-label": s, "aria-hidden": i, role: n }),
        style: r,
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
function sq(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sQ = s(78701);
function s$(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sQ.A,
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s0 = s(462887),
    s1 = s(736653),
    s2 = s(259065),
    s3 = s(206835),
    s6 = s(591179),
    s7 = s(462463),
    s5 = s(219882),
    s8 = s(19886),
    s9 = s(425713),
    s4 = s(696292),
    ie = s(192444),
    it = s(617986),
    is = s(892227),
    ii = s(81466),
    ia = s(249755),
    il = s(749012);
let ir = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, B.F)();
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, is.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: il.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: il.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: il.Pf,
                            children: [
                                (0, c.jsx)(ii.CalendarIcon, { size: "sm", color: eK.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(K.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: J.intl.string(ia.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: J.intl.format(ia.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: il.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: il.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: il.Pf,
                            children: [
                                (0, c.jsx)(eX.C, { size: "sm", color: eK.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(K.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: J.intl.string(ia.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: J.intl.format(ia.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ic = s(190107),
    io = s(799544);
function id() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, ie.lk)(ic.rE.NITRO_HOME_MARKETING),
        { isEligible: s, programReward: i } = (0, B.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !s || null == i || null == i.reward_amount || i.reward_amount <= 0
                    ? null
                    : {
                          id: tB.NITRO_ORBS_REWARDS_CARD_ID,
                          title: J.intl.string(ia.default.hx5AFp),
                          description: J.intl.format(ia.default.wq3CF2, { orbsCount: i.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(io.lH, io.yK),
                          footerContent: (0, c.jsx)(ir, {}),
                          ctaText: J.intl.string(ia.default.BxjHiu),
                          onCtaClick: () => (0, P.pX)(eq.BVt.COLLECTIBLES_SHOP_WITH_TAB(e3.G2.ORBS)),
                      },
            [s, i],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                e
                    ? {
                          id: tB.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: J.intl.string(J.t.Csf5Ol),
                          description: J.intl.format(J.t.NpUfej, { bonusOrbMultiplier: t }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: J.intl.string(J.t.jVcuVY),
                          onCtaClick: () => (0, it.mA)({ fromContent: s4.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: io.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var iu = s(975807),
    im = s(95035),
    ix = s(989790),
    ig = s(88001),
    ip = s(259589),
    ih = s(817577);
function iN() {
    (0, iu.A)(ig.TE);
}
function iA(e) {
    let t = (0, ix.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ee.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, v.A)({
                      subscriptionTier: tA.pe.TIER_2,
                      initialPlanId: tA.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: tB.PREMIUM_GROUP_CARD_ID,
                      title: J.intl.string(ip.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              J.intl.formatToPlainString(ip.default.JlyGQj, {
                                  totalSeats: ig.aw,
                                  premiumGroupProductName: (0, ig.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: io.LF,
                                  children: (0, c.jsx)(im.A, {
                                      onClick: iN,
                                      children: J.intl.string(ip.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: J.intl.string(J.t.oW0eUd),
                      primaryAsset: ih,
                      ctaIcon: es.t,
                      ctaIconPosition: "start",
                      ctaText: J.intl.string(J.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var ij = s(562819),
    iE = s(793943),
    iT = s(757036),
    ib = s(473933),
    iC = s(655752);
let iR = (0, ss.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iI = s(764231),
    i_ = s(627380),
    iv = s(30084),
    iP = s(814014),
    iy = s(714206);
let iS =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iD =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iM =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iO() {
    let e,
        t,
        { analyticsLocations: s } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, s6.X)("useWhatsNewPerkCards"),
        n = (0, s7.A)({ analyticsLocations: s }),
        a = (0, o.useCallback)(() => {
            (0, eo.openUserSettings)(ec.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, s2.L)({ analyticsLocations: s }),
            );
        }, [s]),
        l = (0, o.useCallback)(() => {
            (0, eo.openUserSettings)(ec.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, ij.L)({ analyticsLocations: s }),
            );
        }, [s]),
        r = (0, o.useCallback)(() => {
            (0, eo.openUserSettings)(ec.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        d = (function (e) {
            let { fractionalState: t } = (0, er.A)(),
                s = t === tA.xc.FP_ONLY,
                i = (0, s8.$F)(),
                n = (0, s8.Xb)(),
                a = i?.status === s8.Wo.UPCOMING || s,
                l = i?.status === s8.Wo.WITHHELD,
                r = a || l,
                c = (0, s9.N)(i?.id),
                d = (function () {
                    let e = (0, s8.$F)(),
                        t = (0, iC.P)(),
                        s = (0, s8.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iR.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === s8.Wo.WITHHELD) return null;
                    let n = eI()(),
                        a = eI()(s),
                        l = i || e.status === s8.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        r = t.tenureReqNumMonths,
                        c = a.clone().add(l, "months"),
                        o = a.clone().add(r, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion) && !r,
                g = (0, i_.t)(),
                p = (0, iC.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != p ? J.intl.string(p.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iI.T)(tA.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === s8.Wo.UPCOMING
                              ? J.intl.formatToPlainString(J.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === s8.Wo.WITHHELD
                                ? ((0, iI.T)(i.id, i.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return J.intl.formatToPlainString(J.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return J.intl.formatToPlainString(J.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(g, a) ??
                                  (0, iI.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let l = null;
                return (
                    null != c ? (l = r || m ? c.standard : c.ambientLarge) : s && (l = iy),
                    {
                        id: tB.TENURE_BADGE_CARD_ID,
                        title: null != i ? J.intl.string(i.nameUnformattedNitro) : s ? J.intl.string(J.t.tx9Fvw) : "",
                        pillText: J.intl.string(J.t["jyYgZ+"]),
                        primaryAsset: l,
                        primaryAssetClassName: u()(iP.pq, { [iP.rX]: r, [iP.kE]: m }),
                        caption: null != n ? J.intl.formatToPlainString(J.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: J.intl.string(J.t.jVcuVY),
                        onCtaClick: () => (0, iv.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, r, m, n, d, s, g, p, e]);
        })(s),
        { nitroOrbsRewardsCard: m, questOrbMultiplierCard: g } = id(),
        p =
            ((e = (0, iT.L)(tA.PremiumTypes.TIER_2)),
            (t = (0, s5.rX)()),
            (0, o.useMemo)(
                () =>
                    e && t
                        ? {
                              id: tB.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: J.intl.string(ib.default["/cV3ka"]),
                              description: J.intl.string(ib.default.H523FI),
                              primaryAsset: (0, c.jsx)(sW.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [e, t],
            )),
        f = iA(s);
    return (0, o.useMemo)(() => {
        let e = [
                m,
                g,
                f,
                {
                    id: tB.DISPLAY_NAME_STYLES_CARD_ID,
                    title: J.intl.string(J.t.OLtTrt),
                    description: J.intl.string(J.t["di/pXR"]),
                    onCtaClick: i ? n : a,
                    ctaText: J.intl.string(J.t.jVcuVY),
                    primaryAsset: iS,
                },
                {
                    id: tB.CLIENT_THEMES_CARD_ID,
                    title: J.intl.string(J.t.acc6h6),
                    description: J.intl.formatToPlainString(J.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iM,
                    ctaText: J.intl.string(J.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iE.nf)(iE.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tB.PERMADECOS_CARD_ID,
                    title: J.intl.string(J.t.L14NZN),
                    description: J.intl.string(J.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(s$, { alt: "", ariaHidden: !0 }),
                    ctaText: J.intl.string(J.t.jVcuVY),
                    onCtaClick: i ? n : l,
                },
                {
                    id: tB.CUSTOM_APP_ICONS_CARD_ID,
                    title: J.intl.string(J.t["GU+wqh"]),
                    description: J.intl.string(J.t["1uPk1Z"]),
                    primaryAsset: iD,
                    ctaText: J.intl.string(J.t.y9TxXV),
                    onCtaClick: r,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, d), null != p && e.splice(2, 0, p), e.length > s && e.splice(s, e.length - s), e);
    }, [d, m, g, p, f, a, r, l, n, i]);
}
var iU = s(355097);
let iL = "/assets/1eb1b74667b4c0f0.svg",
    ik = "/assets/983b60e4fcaf973b.svg";
var iG =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iw = [
    { id: "bestof", label: () => J.intl.string(J.t.q1u7nQ) },
    { id: "appearance", label: () => J.intl.string(J.t.CUnZkZ) },
    { id: "upgrades", label: () => J.intl.string(J.t.KC5q8v) },
    { id: "vip", label: () => J.intl.string(J.t.DjEAcv) },
];
var iB = s(18290);
function iH(e) {
    e.stopPropagation();
}
function iF(e) {
    return e.id;
}
function iV(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, s1.DP)(),
                t = (0, s6.X)("useFavoritesPerkCards"),
                s = (0, s8.Lh)(),
                i = (0, s9.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, s3.A)({ scrollPosition: iU._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, P.pX)(eq.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, s7.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, s2.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = iO(),
                f = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: j } = id(),
                E = iA(n),
                T = (0, o.useMemo)(
                    () => [
                        {
                            id: tB.SERVER_BOOSTS_CARD_ID,
                            title: J.intl.formatToPlainString(J.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: J.intl.formatToPlainString(J.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sG, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != E ? { ...E, categories: ["bestof"] } : null,
                        {
                            id: tB.PROFILES_CARD_ID,
                            title: J.intl.string(J.t.xDRab3),
                            description: J.intl.string(J.t.yn6fWA),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tB.HD_VIDEO_CARD_ID,
                            title: J.intl.string(J.t["/mQ5gg"]),
                            description: J.intl.string(J.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tB.CLIENT_THEMES_CARD_ID,
                            title: J.intl.string(J.t.acc6h6),
                            description: J.intl.formatToPlainString(J.t.WQazjs, { themeCount: 20 }),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iM,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tB.MORE_EMOJIS_CARD_ID,
                            title: J.intl.string(J.t.D8vIDT),
                            description: J.intl.string(J.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sV, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tB.LARGE_UPLOADS_CARD_ID,
                            title: J.intl.string(J.t.nL1WZV),
                            description: (0, s5.M6)({
                                legacyCopy: J.intl.formatToPlainString(J.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: J.intl.formatToPlainString(J.t.teOTfv, {
                                    maxFileSize: (0, em.EJ)(tA.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(sW.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tB.CUSTOM_APP_ICONS_CARD_ID,
                            title: J.intl.string(J.t["GU+wqh"]),
                            description: J.intl.string(J.t["1uPk1Z"]),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iD,
                            categories: ["appearance"],
                        },
                        {
                            id: tB.ENTRANCE_SOUNDS_CARD_ID,
                            title: J.intl.string(J.t.WJfCPi),
                            description: J.intl.string(J.t.liQKJR),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tB.DISPLAY_NAME_STYLES_CARD_ID,
                            title: J.intl.string(J.t.OLtTrt),
                            description: J.intl.string(J.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: J.intl.string(J.t.jVcuVY),
                            primaryAsset: iS,
                            categories: ["appearance"],
                        },
                        {
                            id: tB.CUSTOM_SOUNDS_CARD_ID,
                            title: J.intl.string(J.t["Cu/oFd"]),
                            description: J.intl.string(J.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sz, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.SPECIAL_STICKERS_CARD_ID,
                            title: J.intl.string(J.t.MQoVeb),
                            description: J.intl.string(J.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: io.Uc,
                                children: (0, c.jsx)(sY.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.SUPER_REACTIONS_CARD_ID,
                            title: J.intl.string(J.t.qERvAA),
                            description: J.intl.string(J.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sX, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.VIDEO_BACKGROUNDS_CARD_ID,
                            title: J.intl.string(J.t.ssVDYQ),
                            description: J.intl.string(J.t.aUSRMa),
                            primaryAsset: (0, s0.M)(e) ? iL : ik,
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.EARLY_ACCESS_CARD_ID,
                            title: J.intl.string(J.t["g/KRY6"]),
                            description: J.intl.string(J.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sK, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tB.BADGE_CARD_ID,
                            title: J.intl.string(J.t.Bn3CtB),
                            description: J.intl.string(J.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sJ, { color: eK.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tB.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: J.intl.string(J.t["MTD+7w"]),
                            description: J.intl.string(J.t.Bhs0s6),
                            ctaText: J.intl.string(J.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sq, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != j ? { ...j, categories: ["vip"] } : null,
                        {
                            id: tB.PERMADECOS_CARD_ID,
                            title: J.intl.string(J.t.L14NZN),
                            description: J.intl.string(J.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(s$, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, j, E, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => T.filter((e) => null != e && !f.includes(e.id)), [T, f]);
        })(),
        i = (0, sM.l)("premium_favorites_section"),
        n = null != t ? s.find((e) => e?.id === t) : null,
        [a, l] = (0, o.useState)(n?.categories[0] ?? iG.BEST_OF_NITRO),
        r = iw.find((e) => e.id === a)?.label(),
        d = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(a)), [s, a]);
    return (0, c.jsxs)("div", {
        className: iB.uW,
        children: [
            (0, c.jsx)(X.D, { variant: "nitro-sm", children: J.intl.string(J.t["Uh3+CA"]) }),
            (0, c.jsx)(sD.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: l,
                className: iB.Lq,
                "aria-label": J.intl.string(J.t["Uh3+CA"]),
                children: iw.map((e) =>
                    (0, c.jsx)(sD.V.Item, { id: e.id, className: iB.IC, children: e.label() }, e.id),
                ),
            }),
            i
                ? (0, c.jsx)(
                      sU.A,
                      {
                          "aria-label": J.intl.formatToPlainString(J.t.akg5nT, { filterName: r }),
                          gap: 20,
                          className: iB.jG,
                          items: d,
                          getItemKey: iF,
                          renderItem: (e, s) =>
                              (0, c.jsx)(tZ.S, {
                                  ...e,
                                  glowing: t === e.id,
                                  containerClassName: iB.Ui,
                                  listItemProps: s,
                              }),
                      },
                      a,
                  )
                : (0, c.jsx)(
                      sO.A,
                      {
                          gap: 20,
                          className: iB.jG,
                          "aria-label": J.intl.formatToPlainString(J.t.akg5nT, { filterName: r }),
                          children: d.map((e) =>
                              (0, c.jsx)(
                                  tZ.S,
                                  { ...e, glowing: t === e.id, containerClassName: iB.Ui, onFocus: iH },
                                  e.id,
                              ),
                          ),
                      },
                      a,
                  ),
        ],
    });
}
var iW = s(72979);
let iz = function (e) {
    let { className: t } = e,
        s = (0, s1.DP)();
    return (0, c.jsx)("img", {
        className: u()(iW.D, t),
        src: (0, s0.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iY = s(684251);
let iX = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(iY.kL, iY.Gd, iY.Eg),
        children: [(0, c.jsx)(iz, {}), (0, c.jsx)(tD, {}), t],
    });
};
function iK(e) {
    let { glowingPerkId: t = null } = e,
        s = iO();
    return (0, c.jsx)(t6, {
        sectionClassName: t3.uW,
        heading: (0, c.jsx)(X.D, { variant: "nitro-sm", className: t3.R_, children: J.intl.string(J.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tZ.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tB.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(t3.Nr, { [t3.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function iZ(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
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
var iJ = s(92737);
let iq = "/assets/cd2be35d285d4675.svg",
    iQ = (e) => {
        let { userId: t } = e,
            s = (0, m.zy)();
        (o.useEffect(() => {
            ((0, w.Ay)(), null != t && (0, F.A)(t));
        }, [t]),
            o.useEffect(() => {
                T(!0);
            }, []),
            (0, W.j)(),
            (0, _.P)(I));
        let i = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, B.F)(),
            {
                scrollTargetId: d,
                glowingSectionId: p,
                glowingPerkId: f,
                scrollBlock: h,
                scrollInline: j,
            } = o.useMemo(() => {
                let e = new URLSearchParams(s.search),
                    t = e.get("perk"),
                    i = e.get(iJ.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [s.search]);
        iZ(d ?? "", null != d, h, j);
        let [E, T] = o.useState(!1),
            b = (0, V.p)(),
            C = o.useRef(null),
            [R, v] = o.useState(!1),
            P = null != b && null != a && a.status === eq.Dmq.CANCELED,
            y = (0, z.iU)(tA.gD.PREMIUM_MONTH_TIER_2, b, a),
            S = !R && P,
            D = (0, x.bG)([H.A], () => (null != t ? H.A.getUserProfile(t) : null)),
            { analyticsLocations: U } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [L, Y] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(iY.xW, iY.Gd),
                  ref: i,
                  children: [
                      (0, c.jsx)(iX, {
                          children: (0, c.jsxs)(A.f5, {
                              value: U,
                              children: [
                                  (0, c.jsx)(k.L, {
                                      innerRef: C,
                                      onChange: (e) => v(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tR, {
                                          buttonVisibilityRef: C,
                                          className: iY.v1,
                                          userDiscountOffer: b,
                                          discountedPrice: y,
                                      }),
                                  }),
                                  (0, c.jsx)(iK, { glowingPerkId: f }),
                                  (0, c.jsx)(sv, { glowingPerkId: f, glowingSectionId: p }),
                                  (0, c.jsx)(iV, { glowingPerkId: f }),
                                  (0, c.jsx)(Q, {
                                      className: iY.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eq.liQ.NITRO_HOME, section: eq.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: iY.hz }),
                                  (0, c.jsx)(k.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !L &&
                                              (O.default.track(eq.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: U,
                                              }),
                                              Y(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: iY._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: iq,
                                      className: iY.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: J.intl.string(J.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      P &&
                          null != y &&
                          (0, c.jsx)(sS, {
                              isVisible: S && E,
                              premiumSubscription: a,
                              churnDiscountOffer: b,
                              discountedPrice: y,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(iY.kL, iY.Lq, iY.TN, iY.Eg),
                  children: [(0, c.jsx)(tD, {}), (0, c.jsx)("div", { className: iY.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var i$ = s(286320),
    i0 = s(851746),
    i1 = s(727949);
let i2 = (0, ss.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var i3 = s(543213);
let i6 =
        "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png",
    i7 = `${i6} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, https://cdn.discordapp.com/assets/content/4e7462093b85c105a20baea89e1e03ef3ad3cb15eac1aa3a9579569427b68c60.png 3x`;
function i5(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: i6,
        srcSet: i7,
        className: (0, sL.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var i8 = s(37537),
    i9 = s(783420),
    i4 = s(204413),
    ne = s(245383),
    nt = s(824069),
    ns = s(785007),
    ni = s(947910);
function nn(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: ni.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: ni.fQ,
                                children: (0, c.jsx)(eF.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, c.jsxs)(et.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: ni.qU,
                            children: [
                                (0, c.jsxs)(et.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: ni.NI,
                                    children: [
                                        (0, c.jsx)(K.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(K.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(et.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: ni.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, c.jsx)(K.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, c.jsx)(K.E, {
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: ni.yD,
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
                radioBarClassName: u()(ni.tG, { [ni.uA]: s, [ni.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(ns.$d, {
        ...i,
        options: n,
        value: t,
        size: ns.r9.NOT_SET,
        className: ni.ul,
        withTransparentBackground: !0,
    });
}
var na = s(118751),
    nl = s(773669),
    nr = s(97352),
    nc = s(526292),
    no = s(387278),
    nd = s(369827),
    nu = s(803496);
function nm(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nd.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nu.A)({
            activeSubscription: t,
            skuIDs: [(0, em.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nx(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function ng(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tA.Ff.YEAR
          ? J.intl.format(J.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : J.intl.format(J.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var np = s(614488);
function nf(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(i9.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(ei.$, {
                size: "md",
                fullWidth: !0,
                icon: es.t,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nh(e) {
    let { skuId: t, className: s } = e,
        i = t === tA.pe.TIER_2,
        n = (0, s0.q)((0, s1.Ay)()),
        a = (0, i8.c)("PlanSelectCard"),
        l = (0, ef.V)(),
        r = l?.subscriptionTrial,
        d = r?.skuId === t,
        m = i && d && null != r,
        g = (0, ep.p)(),
        {
            planRadioOptions: p,
            selectedPlanId: f,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tA.En[t],
                a = tA.zE[t],
                l = t === tA.pe.TIER_2,
                r = nm(t),
                c = (0, ef.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, em.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tA.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tA.gD.PREMIUM_YEAR_TIER_0, tA.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                p = (0, ep.O)(),
                f = (0, nc.k5)(),
                h = (0, x.bG)([nl.default], () => nl.default.locale),
                N = (0, z.U9)(p, t),
                A = (0, z.N1)(n),
                j = (0, z.N1)(a),
                [E, T] = (0, x.yK)([nr.A], () => [nr.A.get(n), nr.A.get(a)], [n, a]),
                b = null != E ? (0, em.sS)(E, r) : null,
                C = null != T ? (0, em.sS)(T, r) : null,
                R =
                    N && p?.discount.amount != null && !f
                        ? J.intl.formatToPlainString(J.t.IAybsG, {
                              discount: (0, na.l9)(h, Number(p.discount.amount) / 100),
                          })
                        : null,
                I = p?.discount?.planIds,
                _ = nx(a, N, I, j, C),
                v = nx(n, N, I, A, b),
                P = p?.discount.userUsageLimitInterval,
                y = p?.discount.userUsageLimit ?? tA.OJ,
                S = !l || _ || v || null == T ? null : (0, no.Cj)(T, !1, r),
                D = !v || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tA.pe.TIER_2 ? null : s && !i ? tA.En[t] : tA.zE[t];
                })({ skuId: t, monthlyHasDiscount: v, isMonthlyPlanDisabled: m }),
                U = null == s || (s === n && m) ? O : s,
                L = [
                    {
                        value: a,
                        primaryText: J.intl.string(J.t["/Q4HRN"]),
                        primarySubText:
                            (_
                                ? ng({
                                      expectedUsageInterval: tA.Ff.YEAR,
                                      usageInterval: P,
                                      discountDuration: y,
                                      regularPrice: C,
                                      discountedPrice: j,
                                  })
                                : null) ?? S,
                        secondaryText: _ ? j : C,
                        secondarySubText: _ ? C : null,
                        badgeText: _ ? R : null,
                        useGradientSelectedBorder: l && (d || _ || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: J.intl.string(J.t.DKzs96),
                        primarySubText: v
                            ? ng({
                                  expectedUsageInterval: tA.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: y,
                                  regularPrice: b,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: v ? A : b,
                        secondarySubText: v ? b : null,
                        badgeText: v ? R : null,
                        useGradientSelectedBorder: l && (d || v),
                        isDisabled: g || m,
                    },
                ],
                k = U === a ? _ : U === n && v;
            return { planRadioOptions: L, selectedPlanId: U, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !k };
        })({ skuId: t }),
        A = i && null == g ? "expressive" : "secondary",
        { buttonText: j } = (0, ne.A)({ subscriptionTier: t }),
        { subscribeButtonProps: E } = (0, i4.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        T = (0, c.jsxs)(et.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: np.Ux,
            children: [
                (0, c.jsx)(et.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: np.MY,
                    children: (0, c.jsx)(X.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? np.ck : np.JJ,
                        children: i ? J.intl.string(J.t.lG6a5x) : J.intl.string(J.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(et.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: np.qT,
                    children: i
                        ? (0, c.jsx)(i3.ZP, {
                              featureSet: i3.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(i3.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(nt.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: np.qS,
                          role: "separator",
                          children: (0, c.jsx)(K.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: np.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tA.WT.DAY:
                                          if (t % 7 == 0) return J.intl.format(J.t["1MYPH0"], { weeks: t / 7 });
                                          return J.intl.format(J.t.pYfIoO, { days: t });
                                      case tA.WT.MONTH:
                                          return J.intl.format(J.t["96hTLe"], { months: t });
                                      case tA.WT.YEAR:
                                          return J.intl.format(J.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(r.interval, r.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: np.yF }),
                (0, c.jsxs)("div", {
                    className: np.qr,
                    children: [
                        (0, c.jsx)(nn, { planRadioOptions: p, value: f ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nf, { skuId: t, selectedPlanId: f, subscribeButtonProps: E }),
                    ],
                }),
            ],
        }),
        b = u()(np.Nr, s, { [np.Fw]: i });
    return i
        ? (0, c.jsxs)(Y.h, {
              color: "nitro-pink",
              className: b,
              children: [
                  (0, c.jsx)("div", {
                      className: np.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(i5, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  T,
              ],
          })
        : (0, c.jsx)("div", { className: b, children: T });
}
function nN(e) {
    let { className: t } = e,
        s = (0, s0.q)((0, s1.Ay)()),
        i = (0, i8.c)("PlanSelectPremiumGroupCard"),
        n = (0, ep.p)(),
        a = null != n,
        l = nm(tA.pe.TIER_2),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eU.A)({ userId: r?.id, size: eS._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([nr.A], () => nr.A.get(tA.gD.PREMIUM_GROUP_MONTH)),
        p = (0, z.N1)(tA.gD.PREMIUM_GROUP_MONTH),
        f = a
            ? J.intl.format(ip.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, ig.DP)(),
              })
            : J.intl.string(J.t["2pG5Ga"]),
        h = (0, c.jsx)(i9.A, {
            subscriptionTier: tA.pe.TIER_2,
            initialPlanId: tA.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(ei.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: es.t,
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
            N = (0, em.sS)(m, l, !1, !1, !1);
        } catch {
            N = null;
        }
    return (0, c.jsx)("div", {
        className: u()(np.Nr, t),
        children: (0, c.jsxs)(et.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: np.Ux,
            children: [
                (0, c.jsxs)(et.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: np.MY,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? np.ck : np.JJ,
                            children: J.intl.string(ip.default.eSKiXk),
                        }),
                        null != r &&
                            (0, c.jsxs)(et.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: np.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: np.uA,
                                        children: (0, c.jsx)(eD.eu, {
                                            src: o,
                                            size: eS._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, c.jsx)(et.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: np.VL,
                                        children: (0, c.jsxs)(K.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", ig.LM],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(et.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: np.qT,
                    children: (0, c.jsx)(i3.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: np.yF }),
                (0, c.jsxs)("div", {
                    className: np.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: np.ec,
                            children: [
                                (0, c.jsx)(K.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: J.intl.string(ip.default.SvSwga),
                                }),
                                null == N
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(K.E, {
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
function nA(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, A.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, i3.pw)(t),
        a = (0, ix.PA)(),
        l = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        r = { [np.iR]: !l };
    return (0, c.jsx)(A.f5, {
        value: i,
        children: (0, c.jsxs)(et.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(np.oB, s),
            children: [
                (0, c.jsx)(X.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: np.op,
                    children: J.intl.string(J.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(np.kR, { [np.BQ]: a }),
                    children: [
                        (0, c.jsx)(nh, { skuId: tA.pe.TIER_0, className: u()(np.rz, r) }),
                        (0, c.jsx)(nh, { skuId: tA.pe.TIER_2, className: u()(np.Rv, r) }),
                        a && (0, c.jsx)(nN, { className: u()(np.zz, r) }),
                    ],
                }),
            ],
        }),
    });
}
var nj = s(226830),
    nE = s(366010),
    nT = s(303136);
let nb = function (e) {
    let t,
        { className: s } = e,
        i = (0, e8.TM)(),
        n = (0, nE.q)((0, s1.Ay)());
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
                nT.A,
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
var nC =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nR = s(352756);
let nI = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, e4.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: eq.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e9.animated.div, {
        className: nR.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nR.U,
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
var n_ = s(573710);
let nv = function () {
    let e = (0, e5.bG)([ea.Ay], () => ea.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: n_.BI,
                children: (0, c.jsx)(ti, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tt.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: n_.Q,
                    }),
                }),
            }),
            (0, c.jsx)(ta, {
                isMotionReduced: e,
                boltContainerClassName: n_.nJ,
                carContainerClassName: n_.IN,
                hammerContainerClassName: n_.Gj,
                keyContainerClassName: n_.FV,
                starContainerClassName: n_.E1,
                boltAssetClassName: n_.j7,
                carAssetClassName: n_.or,
                hammerAssetClassName: n_.Wv,
                keyAssetClassName: n_.rs,
                starAssetClassName: n_.OY,
            }),
        ],
    });
};
var nP = s(989756);
function ny(e) {
    let { ref: t, ...s } = e,
        { analyticsLocations: i } = (0, A.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(A.f5, {
        value: i,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nP.kL,
            children: (0, c.jsxs)("div", {
                className: nP.hQ,
                children: [
                    (0, c.jsx)(nv, {}),
                    (0, c.jsx)(X.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nP.RH,
                        children: J.intl.string(J.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
ny.displayName = "PremiumMarketingFooter";
var nS = s(939249);
let nD = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nC.HOME]: J.intl.string(J.t.uGRXjS),
            [nC.WHATS_NEW]: J.intl.string(J.t["mfcR/v"]),
            [nC.BEST_OF_NITRO]: J.intl.string(J.t.xQKkE8),
            [nC.PLANS]: J.intl.string(J.t.wyNMnm),
            [nC.COMPARE]: J.intl.string(J.t.pwD7If),
        },
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(t_.A, {
        className: ty.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: ty.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: ty.wG,
                    children: [
                        (0, c.jsx)(es.t, { className: ty.nE, colorClass: ty.oG }),
                        (0, c.jsx)("div", {
                            className: ty.zc,
                            role: "tablist",
                            "aria-label": J.intl.string(J.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nS.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: ty.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(K.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: ty.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: ty.MQ,
                    children: [
                        null != n && (0, c.jsx)(tP.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(Z.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nM = s(713271),
    nO = s(704333),
    nU = s(414499),
    nL = s(597770),
    nk = s(500060),
    nG = s(866665),
    nw = s(406860),
    nB = s(870975),
    nH = s(698834);
function nF() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nw.A)({ boxType: tF.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nO.B, text: J.intl.string(tz.default.MUypiB) },
            { icon: nU.h, text: J.intl.string(tz.default.ec5Rdd) },
            { icon: nL.GiftIcon, text: J.intl.string(tz.default["9t2CzW"]), tooltip: tz.default.AyECej },
            { icon: nk.o, text: J.intl.string(tz.default.R7YJAY) },
        ];
    return (0, c.jsx)(k.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nH.iE,
            children: (0, c.jsxs)("div", {
                className: nH.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nH.j,
                        children: [
                            (0, c.jsx)("div", { className: nH._g }),
                            (0, c.jsx)("div", { className: nH.$h }),
                            (0, c.jsx)("div", { className: nH.Rv }),
                            (0, c.jsx)("div", { className: nH.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nH.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nH.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(X.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nH.R_,
                                                children: J.intl.string(tz.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nH.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(K.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nH.Jn,
                                                                            children: (0, c.jsx)(nG.m, {
                                                                                text: J.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    tU.CircleInformationIcon,
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
                                                        className: nH.xF,
                                                        children: (0, c.jsx)(eC.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tA.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nH.WE,
                                        children: (0, c.jsx)(K.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: J.intl.format(tz.default.KDKdWi, { termsLink: (0, nB.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nH.r1,
                                children: (0, c.jsx)("img", {
                                    className: nH.wm,
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
var nV = s(886205),
    nW = s(750338),
    nz = s(610557),
    nY = s(505051);
function nX(e) {
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
        className: u()(nY.boxBackdrop, t),
        children: [
            (0, c.jsx)(X.D, {
                className: nY.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: nY.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nY.bentoBoxesGrid,
                children: s.flatMap((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nz.A0.SMALL;
                            break;
                        case 2:
                            s = nz.A0.MEDIUM;
                            break;
                        default:
                            s = nz.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, c.jsx)(
                            nW.A,
                            { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let nK = o.memo(function (e) {
        let t = (0, tM.b)("premium_marketing_bento"),
            s = (0, sp.mh)({ location: "premium_marketing_bento" }),
            { enabled: i } = (0, t0.vc)({ location: "premium_marketing_bento" }),
            { enabled: n } = nV.A.useConfig({ location: "premium_marketing_bento" }),
            a = t && !s && !(i && n),
            { whatsNewBoxes: l } = (0, nz.Ay)(a);
        return (0, c.jsx)(nX, {
            boxLayout: l,
            title: J.intl.string(J.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: a ? (0, c.jsx)(nF, {}) : null,
            ...e,
        });
    }),
    nZ = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nz.Ay)();
        return (0, c.jsx)(nX, { boxLayout: t, title: J.intl.string(J.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nJ = (0, ss.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nq = s(236834),
    nQ = s(540504);
function n$(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eU.A)({ userId: t?.id, size: eS._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nQ.$6,
        children: (0, c.jsxs)("div", {
            className: nQ.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nQ.kR,
                    children: (0, c.jsx)(eD.eu, { src: s, "aria-label": t.username, size: eS._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(X.D, {
                    variant: "heading-sm/normal",
                    className: nQ.FS,
                    color: "text-strong",
                    children: J.intl.format(J.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
var n0 = s(579245),
    n1 = s(369805);
let n2 = function () {
    let e = (0, n1.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eE, { text: e });
};
function n3() {
    let e = (0, x.bG)([nr.A], () => nr.A.getForSkuAndInterval((0, em.mH)(tA.pe.TIER_0), tA.WT.MONTH));
    return null != e ? (0, em.sS)(e) : "\u2026";
}
var n6 = s(508556);
let n7 = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, e5.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        i = (0, e8.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: n6.YU,
        children: [
            (0, c.jsx)(tc, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: n6.wG,
                assetClassName: n6.lu,
            }),
            (0, c.jsx)(ta, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: n6.nJ,
                carContainerClassName: n6.IN,
                hammerContainerClassName: n6.Gj,
                keyContainerClassName: n6.FV,
                starContainerClassName: n6.E1,
                boltAssetClassName: n6.j7,
                carAssetClassName: n6.or,
                hammerAssetClassName: n6.Wv,
                keyAssetClassName: n6.rs,
                starAssetClassName: n6.OY,
            }),
        ],
    });
};
var n5 = s(14057);
let n8 = o.memo(function (e) {
    let { className: t, subscriptionTier: s, isEligibleForBogoPromotion: i, ref: n } = e,
        { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        l = n3(),
        r = nJ.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        o = (0, nq.A)(),
        d = null != o,
        { visibilityPercentageRef: m, visibilityPercentage: g } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion)),
        p = (0, i$.b)(),
        f = !d && p.length > 0,
        h = (0, eh.c)($.C.MARKETING_PAGE_BANNER),
        j = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
        E = (0, nc.ar)() && !j,
        T = (0, ep.O)(),
        b = (null != T && tA.U4.includes(T.discountId)) || j;
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsx)("div", {
            ref: n,
            className: u()(n5.kL, t),
            "data-testid": "marketing-page-hero-header",
            children: (0, c.jsx)("div", {
                ref: m,
                children: (0, c.jsxs)("div", {
                    className: n5.hQ,
                    children: [
                        (0, c.jsx)(n7, { containerVisibilityPercentage: g }),
                        E && (0, c.jsx)(n2, {}),
                        (0, c.jsx)("div", {
                            className: n5.s8,
                            children: (0, c.jsx)(ew.F, {
                                forceLevel: 1,
                                children: (0, c.jsx)(X.D, {
                                    variant: "nitro-md",
                                    color: "text-strong",
                                    className: n5.wx,
                                    children: J.intl.string(J.t.YCZldK),
                                }),
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: n5.rf,
                            children: [
                                d && (0, c.jsx)("div", { className: n5.eZ, children: (0, c.jsx)(n$, { referrer: o }) }),
                                f &&
                                    (0, c.jsx)("div", {
                                        className: n5.Qn,
                                        children: (0, c.jsx)(n0.A, {
                                            textColor: "text-strong",
                                            smallerText: !1,
                                            isApplicationHome: !0,
                                            enablePremiumBrandRefresh: !0,
                                        }),
                                    }),
                                (0, c.jsxs)("div", {
                                    className: E ? n5.es : n5.UJ,
                                    children: [
                                        (0, c.jsx)(eC.A, {
                                            size: "md",
                                            fullWidth: E,
                                            hasActivePromotion: !!i,
                                            subscriptionTier: b && null == s ? tA.pe.NONE : s,
                                            buttonTextOverride: b ? J.intl.string(J.t["2pG5Ga"]) : void 0,
                                        }),
                                        !E && (0, c.jsx)(Z.A, { variant: "secondary", size: "md" }),
                                    ],
                                }),
                                (0, c.jsx)("div", {
                                    className: n5.iQ,
                                    children: (0, c.jsx)(K.E, {
                                        color: "text-muted",
                                        variant: "text-xs/medium",
                                        children: r
                                            ? J.intl.string(J.t.jHqrJW)
                                            : J.intl.format(J.t.kt9wxs, { cheapestMonthlyPrice: l }),
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
});
var n9 = s(820081),
    n4 = s(140735),
    ae = s(401432),
    at = s(580630),
    as = s(795269);
s(321073);
var ai = s(763052),
    an = s(55647),
    aa = s(202600);
function al(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n9.B, { size: "sm", color: eK.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n4.A, { children: J.intl.string(J.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ae.a, { size: "xs", color: eK.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n4.A, { children: J.intl.string(J.t.l4qZrp) }),
              ],
          });
}
function ar(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(an.nM, an.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: an.nx,
                children: (0, c.jsx)(K.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: an.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(K.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(al, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: an.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(K.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(al, { includes: !!i.includes }),
            }),
        ],
    });
}
function ac(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(an.nM, an.Gf),
                children: (0, c.jsxs)("td", {
                    className: an.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(X.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(K.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(ar, { ...e }, e.id)),
        ],
    });
}
function ao(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tA.PremiumTypes.TIER_0 ? J.intl.string(J.t.tUbSDK) : J.intl.string(J.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: an.nn,
        children: [
            (0, c.jsxs)("div", {
                className: an.KS,
                children: [
                    (0, c.jsx)(es.t, { colorClass: an.oG }),
                    (0, c.jsx)(X.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(X.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function ad(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, at.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: an.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: an.Cr,
                    children: (0, c.jsx)(X.D, { variant: "heading-xl/bold", children: J.intl.string(J.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: an.Hn,
                    children: (0, c.jsx)(ao, {
                        premiumType: tA.PremiumTypes.TIER_0,
                        priceString: (0, at.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: an.Hn,
                    children: (0, c.jsx)(ao, { premiumType: tA.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let au = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tA.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, ef.V)(),
            r = l?.subscriptionTrial?.skuId,
            d = (0, ep.O)(),
            m = (0, z.YJ)(d),
            x = null != d && (0, z.U9)(d, tA.pe.TIER_2) && m === tA.gD.PREMIUM_MONTH_TIER_2,
            g = (0, z.N1)(m),
            p = null != g ? `${g}/${(0, em.FJ)(tA.WT.MONTH)}` : "",
            f = (0, em.JM)(tA.gD.PREMIUM_MONTH_TIER_0),
            h = (0, em.JM)(tA.gD.PREMIUM_MONTH_TIER_2),
            j = (function () {
                let e = (0, tM.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: J.intl.string(J.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: J.intl.string(J.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: J.intl.string(J.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: J.intl.string(ai.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, ie.lk)(ic.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = sn.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sa.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    });
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: J.intl.string(J.t.NG1e6l),
                            subtitle: J.intl.format(tz.default.uJcbMv, {
                                termsLink: eu.A.getArticleURL(eq.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: J.intl.string(tz.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: J.intl.string(tz.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: J.intl.string(sA.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: J.intl.formatToPlainString(J.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        i.push({
                            id: 28,
                            label: J.intl.string(ia.default["20tmSN"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: J.intl.string(J.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: J.intl.string(J.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: J.intl.string(J.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: J.intl.string(J.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: J.intl.string(J.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: J.intl.string(J.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: J.intl.string(J.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: J.intl.string(J.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: J.intl.string(J.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, em.EJ)(tA.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, em.EJ)(tA.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: J.intl.string(J.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: J.intl.string(J.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: J.intl.string(J.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: J.intl.string(J.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: J.intl.formatToPlainString(J.t.nyhDpw, {
                                        numBoosts: tA.M4,
                                        percentageOff: (0, at.l9)(nl.default.locale, tA.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: J.intl.string(J.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: J.intl.string(J.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: J.intl.string(J.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: J.intl.formatToPlainString(J.t["8crdzJ"], { maxChars: eq.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: J.intl.string(J.t["il8+nC"]),
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
            let e = null != l ? J.intl.string(J.t.IBYG5U) : J.intl.string(J.t.TR2B4T);
            t = (0, c.jsx)(as.R, { className: u()(an.Io, an.SP), text: e });
        }
        let E = r === tA.pe.TIER_0 || n === tA.PremiumTypes.TIER_0;
        return (0, c.jsx)(A.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(an.zr, s),
                children: [
                    (0, c.jsx)(X.D, {
                        className: an.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: J.intl.string(J.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: an.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(an.fO, { [an.Vd]: E, [an.hA]: !E }),
                                children: [
                                    !E && t,
                                    (0, c.jsx)("div", { className: an.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: an.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: aa, alt: "", className: an.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: an.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: an.tp,
                                children: [
                                    (0, c.jsx)(ad, {
                                        tier0Price: f,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    j.map((e) => (0, o.createElement)(ac, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    am = function (e) {
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
var ax = s(818348),
    ag = s(773188);
function ap(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nA, { innerRef: t }) : (0, c.jsx)(nj.jP, { innerRef: t });
}
let af = () => {
    let e = (0, m.zy)();
    (0, _.P)(I);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [p, f] = o.useState(!1),
        [h, j] = o.useState(!1),
        [E, T] = o.useState(!1),
        b = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        C = null != b ? (0, em.EL)(b) : null,
        R = null != C ? em.Ay.getSkuIdForPlan(C.planId) : null,
        v = null !== R && R !== tA.pe.TIER_2 ? tA.pe.TIER_2 : null,
        { analyticsLocations: P } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        T(!0);
    }, []);
    let { shouldShowBonusOrbsUX: y } = (0, ie.lk)(ic.rE.NITRO_HOME_MARKETING),
        S = y ? nM.N.COMBINED_ORBS : nM.N.ORB_REWARDS,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(iJ.x);
            return "orbs" === t
                ? S
                : t === nM.N.THREE_P_PROMOTIONS
                  ? nM.N.THREE_P_PROMOTIONS
                  : t === nM.N.YOUTUBE
                    ? nM.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    iZ(D ?? "", null != D);
    let { navBarSections: U, activeSectionId: L } = am([nC.HOME, nC.WHATS_NEW, nC.BEST_OF_NITRO, nC.PLANS, nC.COMPARE]),
        { home: w, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = U,
        W = (function (e) {
            let { location: t } = e;
            return i2.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        z = (0, c.jsxs)("div", {
            ref: s,
            className: u()(ag.kL, ag.Gd, ag.iI, { [ag.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nb, { className: ag.yH }),
                (0, c.jsx)(nD, { navBarSections: U, activeSectionId: L }),
                (0, c.jsxs)("div", {
                    className: ag.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: ag.qY,
                            ref: w.ref,
                            children: (0, c.jsx)(k.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n8, { ref: n, subscriptionTier: v }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: ag.So,
                            ref: B.ref,
                            children: (0, c.jsx)(nK, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ag.KQ,
                            ref: H.ref,
                            children: (0, c.jsx)(nZ, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ag.s5,
                            ref: F.ref,
                            children: (0, c.jsx)(
                                k.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => f(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(ap, { innerRef: i, isPlanSelectUiRedesignEnabled: W }),
                                },
                                W ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: ag.aC, ref: V.ref, children: (0, c.jsx)(au, {}) }),
                    ],
                }),
                (0, c.jsx)(k.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (O.default.track(eq.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            j(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: ag._Z }),
                }),
                (0, c.jsx)(ny, { ref: l }),
                (0, c.jsx)(nI, { isVisible: !d && !p && E, subscriptionTier: v }),
                (0, c.jsx)(nb, { className: ag.MF }),
            ],
        });
    return (0, c.jsx)(tL.N, {
        theme: ax.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(ag.XG, e), ref: t, children: z }),
    });
};
var ah = s(862482),
    aN = s(106512),
    aA = s(412260),
    aj = s(662367),
    aE = s(374403),
    aT = s(396375),
    ab = s(370049);
let aC = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nc.ar)();
    if (null == i) return null;
    let r = null != i ? em.Ay.getPremiumPlanItem(i) : null;
    if (
        (em.Ay.isBoostOnlySubscription(i)
            ? (t = J.intl.string(J.t.Uj0md3))
            : null != r && (t = em.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, eo.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? em.Ay.getSkuIdForPlan(r.planId) : null) === tA.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tk.Z, {
            className: u()(ab.kL, n, { [ab.He]: l }),
            type: tk.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(t8.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(ab.Kk, { [ab.Pt]: l }),
                }),
                (0, c.jsx)(K.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? J.intl.format(J.t["tYuv+T"], {
                              helpdeskArticle: eu.A.getArticleURL(eq.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : J.intl.format(J.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aR = s(978836);
let aI = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aR.zr, { [aR.N]: t }),
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
                        (0, c.jsx)("stop", { className: aR.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aR.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aR.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aR.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aR.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var a_ = s(900797),
    av = s(847374),
    aP = s(812993),
    ay = s(614268);
function aS(e) {
    let { className: t } = e;
    return (0, c.jsx)(aP.Lp, { className: u()(ay.T, t), text: J.intl.string(J.t.EYxi0o) });
}
var aD = s(904788),
    aM = s(507553);
let aO = "/assets/5b4fec8511c3676a.svg",
    aU = "/assets/0838bda6ecd20d91.svg";
function aL(e, t, s) {
    return (0, s0.M)(e) ? t : s;
}
var ak = s(872461);
function aG(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nS.D, {
        onClick: s,
        className: ak.customButton,
        children: [
            t ? J.intl.string(J.t.maZaN3) : J.intl.string(J.t["37C26f"]),
            t
                ? (0, c.jsx)(a_.t, { size: "md", color: "currentColor", className: ak.arrow })
                : (0, c.jsx)(av.a, { size: "md", color: "currentColor", className: ak.arrow }),
        ],
    });
}
function aw(e) {
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
        { analyticsLocations: d } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(A.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(ak.perkCard, i),
            children: [
                r
                    ? (0, c.jsx)(aD.A, {
                          className: ak.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aS, { className: ak.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, ak.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(X.D, {
                            variant: "heading-lg/extrabold",
                            className: ak.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/normal",
                            className: ak.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aB = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, s1.Ay)(),
                n = (0, s6.X)("usePerkCards"),
                a = (0, e5.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return em.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, em.EJ)(tA.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: J.intl.string(J.t.SS87rQ),
                    description: J.intl.string(J.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: J.intl.string(J.t["5cYMu0"]),
                    description: J.intl.string(J.t.vxk9va),
                    imageSource: aL(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: J.intl.string(J.t["/xvEMy"]),
                    description: J.intl.string(J.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: J.intl.string(J.t.OuItFi),
                    description: J.intl.string(J.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: J.intl.string(J.t["R2IV/Q"]),
                    description: J.intl.string(J.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: J.intl.string(J.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? J.intl.formatToPlainString(J.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : J.intl.formatToPlainString(J.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (aM.A.setState({ scrollPosition: iU._F.TRY_IT_OUT }),
                                    t(ec.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? J.intl.format(J.t.aj1pfZ, { onCheckItOutClick: t })
                            : J.intl.format(J.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: J.intl.string(J.t.BUScid),
                    description: J.intl.string(J.t.vN6XpQ),
                    imageSource: aL(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: J.intl.string(J.t.Bv8Pfk),
                    description: J.intl.string(J.t.JMfaTU),
                    imageSource: aL(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: J.intl.string(J.t.Bv8Pfk),
                    description: J.intl.string(J.t.JMfaTU),
                    imageSource: aL(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: J.intl.string(J.t["lGcW+c"]),
                    description: J.intl.string(J.t["/fDyO+"]),
                    imageSource: aL(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: J.intl.string(J.t["1c+xwT"]),
                    description: J.intl.string(J.t.hJG8ZN),
                    imageSource: aL(i, aU, aO),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: J.intl.string(J.t.tzdIwI),
                    description: J.intl.string(J.t.hJG8ZN),
                    imageSource: aL(i, aU, aO),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: J.intl.string(J.t.tzdIwI),
                    description: J.intl.string(J.t.hJG8ZN),
                    imageSource: aL(i, aU, aO),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: J.intl.string(J.t.RSXQYO),
                    description: J.intl.string(J.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: J.intl.string(J.t["uZt5q/"]),
                    description: J.intl.string(J.t.ZK3ZoX),
                    imageSource: aL(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: J.intl.formatToPlainString(J.t.jqhAdL, { premiumMaxSize: l }),
                    description: J.intl.formatToPlainString(J.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: J.intl.string(J.t.NaGpTf),
                    description: J.intl.string(J.t["A8O/Qw"]),
                    imageSource: aL(i, iL, ik),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ak }),
        r = (0, e5.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(ak.perksContainer, t, {
            [ak.partiallyHidden]: i && !n,
            [ak.subscriberNitroHome]: i,
            [ak.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(X.D, {
                variant: "heading-xxl/extrabold",
                className: ak.perksTitle,
                children: i ? J.intl.string(J.t.QX14gI) : J.intl.string(J.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(ak.perkCardContainer, { [ak.perkCardContainerExpanded]: n }),
                children: [
                    "emoji",
                    "streaming",
                    "upload",
                    "customAppIcons",
                    "soundboard",
                    "videoBackground",
                    "superReactions",
                    "stickersPremiumPerk",
                    "badgeAlt",
                ].map((e) => {
                    let t = l[e];
                    return null != t && (0, c.jsx)(aw, { ...t }, e);
                }),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [ak.sizeGizmo]: !n, [ak.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aG, {
                                onClick: function () {
                                    (O.default.track(eq.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(ak.cover, { [ak.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aH = s(194509),
    aF = s(317587);
let aV = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, e4.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eq.JJy.MARKETING_FLOATING_CTA },
        r = (0, s1.Ay)(),
        o = (0, nE.M)(r);
    return (0, c.jsx)(e9.animated.div, {
        className: u()(aF.iE, { [aF.H8]: i, [aF.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aF.zW : aF.iJ,
            children: [
                (0, c.jsx)(aT.A, {
                    color: o ? ah.XD.BRAND_INVERTED : void 0,
                    className: u()(aF.x6, { [aF.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aF.PJ,
                }),
                (0, c.jsx)(aH.A, { className: aF.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aW = s(386564);
function az(e) {
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
            ? (0, c.jsx)(aT.A, {
                  color: l ? ah.XD.BRAND_INVERTED : void 0,
                  className: u()(aW.x6, aW.Ph, n, { [aW.Sq]: t && a, [aW.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aW.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aT.A, {
                  color: l || !a ? ah.XD.BRAND_INVERTED : void 0,
                  className: u()(aW.x6, aW.Ph, n, { [aW.Sq]: t && a, [aW.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aH.A, { className: u()(aW.x6, n), color: a ? void 0 : ah.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aW.UD, i), children: [o, " ", d] });
}
function aY() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aD.p, { className: aW.zd }),
            (0, c.jsx)(aD.p, { className: aW.G }),
            (0, c.jsx)(aD.p, { className: aW.zy }),
            (0, c.jsx)(aD.p, { className: aW.GX }),
        ],
    });
}
function aX(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = n3();
    return (0, c.jsx)(K.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(aW.h_, { [aW.If]: s, [aW.jn]: i }),
        children: J.intl.format(J.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aK = function (e) {
    let { className: t, buttonClassName: s, subscriptionTier: i, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ex.QQ)(),
        o = (0, nc.ar)(),
        d = (0, i$.b)().length > 0,
        m = J.intl.string(J.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(aW.kL, t, { [aW.V1]: !o, [aW.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aW.I6 : aW.G1,
                    children: [
                        (0, c.jsx)(ew.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(X.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: aW.DF,
                                  children: (0, c.jsx)(n0.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aX, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: aW.UD,
                                  children: (0, c.jsx)(aH.A, { className: u()(aW.x6, s), color: ah.XD.WHITE }),
                              })
                            : (0, c.jsx)(az, {
                                  subscriptionTier: i,
                                  inOfferExperience: o,
                                  buttonClassName: s,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(aX, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aY, {}),
            ],
        }),
    });
};
var aZ = s(22118),
    aJ = s(145359),
    aq = s(377770);
function aQ(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aI, { lifted: t }) : null;
}
let a$ = () => {
        (0, _.P)(I);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, s1.Ay)(),
            n = (0, s0.M)(i),
            [a, l] = o.useState(!1),
            [r, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [p, f] = o.useState(!1),
            h = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            j = null != h ? (0, em.EL)(h) : null,
            E = null != j ? em.Ay.getSkuIdForPlan(j.planId) : null,
            T = null !== E && E !== tA.pe.TIER_2 ? tA.pe.TIER_2 : null,
            b = (0, ef.V)(),
            C = b?.subscriptionTrial?.skuId,
            R = (0, nc.ar)(),
            v = (0, x.bG)([aA.A], () => {
                let e = aA.A.getMarketingComponentByType($.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            P = (0, aE.Q)(),
            { analyticsLocations: y } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            f(!0);
        }, []);
        let S = (0, c.jsx)("div", {
            className: aq.dY,
            children: (0, c.jsx)(k.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(i3.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aT.A, {
                        showIcon: !1,
                        subscriptionTier: tA.pe.TIER_0,
                        className: aJ.Ph,
                        look: ah.pR.OUTLINED,
                        color: ah.XD.WHITE,
                        buttonShineClassName: aJ.Qr,
                    }),
                    tier2CTAButton:
                        C === tA.pe.TIER_0
                            ? (0, c.jsx)(aT.A, {
                                  showIcon: !1,
                                  subscriptionTier: tA.pe.TIER_2,
                                  className: aJ.Ph,
                                  look: ah.pR.OUTLINED,
                                  color: ah.XD.WHITE,
                                  buttonShineClassName: aJ.Qr,
                              })
                            : (0, c.jsx)(aT.A, {
                                  color: ah.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tA.pe.TIER_2,
                                  className: aJ.Ph,
                                  textOptions: { textClassName: aJ.Ac },
                                  buttonShineClassName: aJ.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: aq.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aC, { premiumSubscription: h, className: u()(aq.R3, { [aq.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: aq.n1,
                        children: [
                            (0, c.jsx)(aQ, { inOfferExperience: R }),
                            (0, c.jsx)(tP.l, {
                                className: aq.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aq.V1]: !R }),
                    children: [
                        null != v && (0, c.jsx)(aN.m, { className: aq.w$, config: v }),
                        (0, c.jsxs)("div", {
                            className: aq.iS,
                            children: [
                                !R &&
                                    (0, c.jsx)(tP.l, {
                                        className: aq.ij,
                                        size: "md",
                                        location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(k.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(aK, {
                                        ref: t,
                                        subscriptionTier: T,
                                        className: u()({ [aq.p7]: R, [aq.Pw]: R, [aq.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != P && (0, c.jsx)("div", { className: aq.Ol, children: (0, c.jsx)(aj.I, { component: P }) }),
                S,
                (0, c.jsx)(aB, { className: aq.B_ }),
                (0, c.jsx)("div", { className: aq.aC, children: (0, c.jsx)(aZ.A, { className: aq.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: aq.hz }),
                (0, c.jsx)(aV, { isVisible: !a && !r && p, subscriptionTier: T, isApplicationHome: !1 }),
                (0, c.jsx)(k.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (O.default.track(eq.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            g(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: aq._Z }),
                }),
                (0, c.jsx)("img", {
                    src: iq,
                    className: aq.Kw,
                    width: 112,
                    height: 85,
                    alt: J.intl.string(J.t.X4IxWL),
                }),
            ],
        });
    },
    a0 = function (e) {
        let { entrypoint: t } = e,
            s = (0, ef.V)(),
            i = (0, ep.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, i1.NF)({ trialOffer: s }),
            a = (0, i1.Tp)(),
            l = (0, x.bG)([i0.A], () => i0.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, i1.QG)(), !0 === a && (0, i1.ne)(l), (null != s || null != i) && (0, L.u1)(s, i));
            }, [s, i, n, a, l]),
            t)
        ) {
            case tA.tU.UserSettings:
                return (0, c.jsx)(a$, {});
            case tA.tU.ApplicationStoreHome:
                return (0, c.jsx)(af, {});
            default:
                return null;
        }
    };
var a1 = s(531296);
let a2 = function (e) {
    let { entrypoint: t = tA.tU.UserSettings } = e;
    (0, _.P)(I);
    let s = (0, E.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        C = (0, ef.V)(),
        R = (0, ep.O)({ includePremiumGroupDiscount: !0 }),
        k = (0, T.Y)(tA.T7),
        [G, w] = o.useState(!0),
        B = o.useRef(0),
        H = (0, U.YE)(r, tA.PremiumTypes.TIER_2);
    ((0, i$.b)(),
        o.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([j.hP(), j.$o(), (0, p.zS)(null, null, eq.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        o.useEffect(() => {
            G ||
                O.default.track(eq.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: B.current,
                });
        }, [i, G]),
        o.useEffect(() => {
            s && (null != C || null != R) && (0, L.u1)(C, R);
        }, [s, C, R]));
    let F = (0, m.zy)(),
        V = o.useRef(!1),
        W = a && l && k,
        [z, Y] = o.useState(W);
    (W && !z && Y(!0),
        o.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tA.pe.TIER_0, nitro: tA.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((V.current = !0),
                (0, P.bG)(eq.BVt.APPLICATION_STORE),
                (0, v.A)({ subscriptionTier: s, analyticsLocations: n }));
        }, [W, F.search, n]));
    let X = (0, x.bG)([y.A], () => y.A.enabled),
        K = t === tA.tU.ApplicationStoreHome,
        Z = X
            ? (0, c.jsx)(f.A, {})
            : s
              ? (0, c.jsx)(b.uK, {})
              : K && H
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(iQ, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(a1.kL, a1.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !X && !s && K && H
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [K && (0, c.jsx)(h.A, {}), Z] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(a0, { entrypoint: t }) });
};
