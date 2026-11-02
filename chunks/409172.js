(i.d(t, { A: () => a1 }), i(323874), i(14289), i(35956), i(205816));
var s,
    n,
    a,
    l,
    r,
    c = i(477900),
    o = i(582128),
    d = i(503698),
    u = i.n(d),
    m = i(806163),
    x = i(17928),
    g = i(289873),
    p = i(73825),
    f = i(643891),
    h = i(107834),
    N = i(793574),
    A = i(688810),
    j = i(277984),
    E = i(86379),
    b = i(160946),
    T = i(545075),
    C = i(840251),
    R = i(688151);
let I = new C.E([], R.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = i(611924),
    v = i(75678),
    P = i(976860),
    y = i(351906),
    S = i(287809),
    D = i(295405),
    M = i(166403),
    O = i(174459),
    U = i(474090),
    L = i(10392),
    k = i(269115),
    G = i(689175),
    w = i(961250),
    B = i(366505),
    H = i(321191),
    F = i(903209),
    V = i(131168),
    W = i(482589),
    z = i(511484),
    Y = i(315629),
    X = i(534514),
    K = i(834730),
    Z = i(65470),
    J = i(105292),
    q = i(719126);
let Q = function (e) {
    let { className: t, location: i, analyticsLocation: s } = e,
        { analyticsLocations: n } = (0, A.Ay)(i);
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
                            variant: "heading-xxl/semibold",
                            className: q.R_,
                            children: J.intl.string(J.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(K.E, { variant: "text-md/medium", children: J.intl.string(J.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: q.SB,
                            children: (0, c.jsx)(Z.A, {
                                buttonTextOverride: J.intl.string(J.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: s,
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
var $ = i(877624),
    ee = i(192308),
    et = i(331322),
    ei = i(403581),
    es = i(821609),
    en = i(502572),
    ea = i(775602),
    el = i(366999),
    er = i(531260),
    ec = i(780964),
    eo = i(766075),
    ed = i(786300),
    eu = i(975571),
    em = i(24482),
    ex = i(89366),
    eg = i(881489),
    ep = i(724651),
    ef = i(732280),
    eh = i(549996),
    eN = i(172218);
function eA() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, o.useState)(1),
        s = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eN.B)(
            (e) => {
                i(e.intersectionRatio);
            },
            s,
            e,
        ),
        visibilityPercentage: t,
    };
}
var ej = i(287763);
let eE = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: ej.i,
        children: (0, c.jsx)(K.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var eb = i(371764),
    eT = i(103411),
    eC = i(792656),
    eR = i(536637),
    eI = i.n(eR),
    e_ = i(496431),
    ev = i(850292);
let eP = function (e) {
    let { expiresAt: t, className: i, digitTextVariant: s = "text-md/medium" } = e,
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
        className: u()(ev.Xl, i, { [ev.a3]: "text-lg/semibold" === s }),
        children: [
            (0, c.jsx)(K.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: J.intl.string(J.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: ev.$R,
                children: d.map((e, t) =>
                    (function (e, t, i) {
                        let s,
                            [n, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
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
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: ev.B2,
                                                        children: (0, c.jsx)(K.E, {
                                                            variant: i,
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
                    })(e, t === d.length - 1, s),
                ),
            }),
        ],
    });
};
var ey = i(473702),
    eS = i(778712),
    eD = i(97808),
    eM = i(609425),
    eO = i(660184),
    eU = i(854627),
    eL = i(427262),
    ek = i(938767);
function eG() {
    let e = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, eM.A)(),
        { avatarSrc: i, avatarDecorationSrc: s, eventHandlers: n } = (0, eU.A)({ userId: e?.id, size: eS._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eL.mG)(e);
    return (0, c.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, c.jsx)("div", {
                className: ek.my,
                children: (0, c.jsx)(eD.eu, {
                    src: i,
                    avatarDecoration: s,
                    size: eS._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: ek.QC, children: (0, c.jsx)(eO.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var ew = i(707554);
let eB = function (e) {
    let { className: t, color: i = "text-strong", variant: s = "nitro-lg", children: n } = e;
    return (0, c.jsx)(ew.F, {
        forceLevel: 1,
        children: (0, c.jsx)(X.D, { className: t, variant: s, color: i, children: n }),
    });
};
var eH = i(62010),
    eF = i(815996),
    eV = i(557284),
    eW = i(744413),
    ez = i(478016),
    eY = i(318254),
    eX = i(661531),
    eK = i(626031),
    eZ = i(197630);
i(232198);
var eJ = i(652215),
    eq = i(957457);
function eQ(e) {
    let { nRewardsGranted: t, referralRewardType: i, className: s } = e;
    return t < 1
        ? null
        : i === eZ.xb.ORBS
          ? (0, c.jsx)(e$, { nRewardsGranted: t, className: s })
          : i === eZ.xb.DISCOUNT
            ? (0, c.jsx)(e0, { nRewardsGranted: t, className: s })
            : null;
}
function e$(e) {
    let { nRewardsGranted: t, className: i } = e,
        s = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(s);
        }, [s]),
        (0, c.jsxs)(et.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: i,
            children: [
                (0, c.jsxs)("div", {
                    className: eq.u,
                    "aria-label": String(s),
                    children: [
                        (0, c.jsx)(eY.C, { size: "xs", color: eX.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(eK.t, {
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
                (0, c.jsx)(K.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: J.intl.string(J.t.UhguER),
                }),
            ],
        })
    );
}
function e0(e) {
    let { nRewardsGranted: t, className: i } = e;
    return (0, c.jsxs)(et.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: i,
        "aria-label": J.intl.formatToPlainString(J.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(ez.U, { size: "md", color: eX.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(K.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: J.intl.format(J.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e1 = i(303682),
    e2 = i(758836),
    e3 = i(558992);
function e7(e) {
    let { className: t } = e,
        {
            referralSentUsers: i,
            nReferralsSent: s,
            hasEligibleFriends: n,
            allSent: a,
            headingText: l,
            bodyText: r,
            referralStatus: o,
            isEligibleForIncentive: d,
            referralIncentiveRewardType: m,
            useAltReferralCardArt: x,
            shouldShowSpendOrbsCta: g,
        } = (0, eV.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(e3.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e3.G3,
                children: (0, c.jsx)(eW.fx, {
                    nReferralsSent: s,
                    imageSize: 55,
                    backgroundClassName: e3.HP,
                    ringClassName: e3.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(e3.IH, d && e3.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: e3.aZ,
                            children: (0, c.jsx)(eH.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: e3.n4,
                        children: [
                            (0, c.jsx)(K.E, { variant: "text-md/semibold", color: "text-strong", children: l }),
                            (0, c.jsx)(K.E, {
                                variant: d ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: e3.Wp,
                              children: [
                                  (0, c.jsx)(eW.ZP, { referralSentUsers: i }),
                                  (0, c.jsx)(eQ, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(eW.ZP, { referralSentUsers: i, className: e3.t7 }),
                ],
            }),
            (0, c.jsx)(es.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? J.intl.string(J.t.iw5Ccc) : J.intl.string(J.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, eF.Cz)({
                              tab: e2.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: N.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eW.jM)({
                              startingScreen: e1.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e6 = i(702841),
    e8 = i(676279),
    e5 = i(941143),
    e9 = i(717421),
    e4 = i(396583),
    te = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    tt = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let ti = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: i,
            yAxisAnimationData: s,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: l = !1,
            animationSpeedScale: r = 1,
            children: d,
        } = e,
        u = (0, e9.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, e9.z)(
            null != i
                ? {
                      from: { scale: x > 0 ? i.startScale : i.endScale },
                      to: { scale: x > 0 ? i.endScale : i.startScale },
                      config: { duration: i.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [f, h] = (0, o.useState)(1),
        N = (0, e9.z)(
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
        C = (0, e9.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e4.A)(() => {
        (E(b * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(e5.animated.div, {
              style: {
                  transform: u.y?.to((e) => {
                      if (null == s) return "translateY(0px)";
                      let t = m(e * Math.PI * 2) * s.range,
                          i = 0;
                      if (null != n) {
                          let e = n.range * (1 - n.containerVisibilityPercentage);
                          i = "up" === n.pathDirection ? -e : e;
                      }
                      return `translateY(${t + i}px)`;
                  }),
                  translateX: a ? C.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var ts = i(382168);
let tn = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: i,
        boltContainerClassName: s,
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
        animateStar: h = !0,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != s &&
                (0, c.jsx)("div", {
                    className: u()(ts.nJ, s),
                    children: (0, c.jsx)(ti, {
                        blurAnimationData: { startBlurRadius: 10 * f, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: te.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tt.UP,
                                      range: 125,
                                      containerVisibilityPercentage: i,
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
                    className: u()(ts.IN, n),
                    children: (0, c.jsx)(ti, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: te.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tt.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: i,
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
                    className: u()(ts.Gj, a),
                    children: (0, c.jsx)(ti, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: te.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tt.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: i,
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
                    className: u()(ts.FV, l),
                    children: (0, c.jsx)(ti, {
                        blurAnimationData: { startBlurRadius: 5 * f, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: te.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tt.UP,
                                      range: 200,
                                      containerVisibilityPercentage: i,
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
                    className: u()(ts.E1, r),
                    children: (0, c.jsx)(ti, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * f, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: te.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tt.UP,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t || !h,
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
var ta = i(607470),
    tl = i(562915);
let tr =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tc = function (e) {
        let {
                supportHEVCAlpha: t,
                isMotionReduced: i,
                containerVisibilityPercentage: s,
                containerClassName: n,
                assetClassName: a,
                animationSpeedScale: l = 1,
                variant: r = "default",
            } = e,
            o = "settings" === r;
        return i || o
            ? (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)("img", {
                      src: o
                          ? tl.A
                          : "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)(ti, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: te.SINE },
                      parallaxAnimationData: {
                          pathDirection: tt.UP,
                          range: 200,
                          containerVisibilityPercentage: s,
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
                                ta.A,
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
                flyingWumpusContainerClassName: i,
                flyingWumpusAssetClassName: s,
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
            f = (0, e6.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
            h = (0, e8.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tc, {
                    supportHEVCAlpha: h,
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(tn, {
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
var td = i(942663);
let tu = function (e) {
    let { containerVisibilityPercentage: t, compact: i } = e;
    return (0, c.jsx)(to, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(td.wG, i && td.Vx),
        flyingWumpusAssetClassName: u()(td.lu, i && td.ov),
        boltContainerClassName: u()(td.nJ, i && td.Wc),
        hammerContainerClassName: u()(td.Gj, i && td.XA),
        keyContainerClassName: u()(td.FV, i && td.oZ),
        starContainerClassName: u()(td.E1, i && td.LN),
        boltAssetClassName: u()(td.j7, i && td.QN),
        hammerAssetClassName: u()(td.Wv, i && td.B9),
        keyAssetClassName: u()(td.rs, i && td.I1),
        starAssetClassName: u()(td.OY, i && td.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tm = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tx = i(454273);
let tg = function (e) {
    let t,
        i,
        {
            className: s,
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
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? tm.MORNING
                        : i >= 12 && i < 17
                          ? tm.AFTERNOON
                          : tm.EVENING
                ],
            )),
        f = o ?? (r ? (0, c.jsx)(e7, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tx.kL, tx.Eg, s),
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
                                        (0, c.jsx)(eB, { color: "text-default", variant: "nitro-md", children: p }),
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
var tp = i(549926);
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
var th = i(499126);
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
var tA = i(202541);
function tj(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = (0, eg.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tx.kL, i),
        ref: s,
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
                                (0, c.jsx)(eB, { children: J.intl.format(J.t.FwjP6W, { days: n }) }),
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
                                    iconOverride: ei.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(es.$, {
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
            buttonVisibilityRef: s,
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
        ref: s,
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
                            (0, c.jsx)(eP, {
                                expiresAt: n.expiresAt.toISOString(),
                                digitTextVariant: "text-lg/semibold",
                            }),
                        (0, c.jsxs)(et.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eB, {
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
                                (0, c.jsx)(es.$, {
                                    variant: "expressive",
                                    icon: ei.t,
                                    size: "md",
                                    text: J.intl.string(J.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = ey.g.CONFIRM_DISCOUNT),
                                            void (0, ee.openModalLazy)(async () => {
                                                let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                    await Promise.all([
                                                        i.e("489361"),
                                                        i.e("227853"),
                                                        i.e("470126"),
                                                        i.e("149697"),
                                                        i.e("128804"),
                                                        i.e("60882"),
                                                        i.e("71151"),
                                                        i.e("286615"),
                                                        i.e("735042"),
                                                        i.e("311541"),
                                                        i.e("274227"),
                                                        i.e("870088"),
                                                        i.e("300641"),
                                                        i.e("747802"),
                                                        i.e("966366"),
                                                        i.e("84978"),
                                                        i.e("153302"),
                                                        i.e("807003"),
                                                        i.e("88683"),
                                                        i.e("983513"),
                                                        i.e("216806"),
                                                        i.e("310734"),
                                                        i.e("910167"),
                                                        i.e("70379"),
                                                        i.e("417333"),
                                                        i.e("127962"),
                                                        i.e("517888"),
                                                        i.e("959880"),
                                                        i.e("174016"),
                                                        i.e("907167"),
                                                        i.e("11301"),
                                                        i.e("861060"),
                                                        i.e("364827"),
                                                        i.e("217229"),
                                                        i.e("734933"),
                                                        i.e("678157"),
                                                        i.e("513"),
                                                        i.e("40291"),
                                                        i.e("544571"),
                                                        i.e("523276"),
                                                        i.e("812042"),
                                                        i.e("729963"),
                                                        i.e("830938"),
                                                        i.e("538513"),
                                                        i.e("217637"),
                                                        i.e("50097"),
                                                        i.e("594161"),
                                                        i.e("435432"),
                                                        i.e("80347"),
                                                        i.e("680166"),
                                                    ]).then(i.bind(i, 293061));
                                                return (i) =>
                                                    (0, c.jsx)(t, {
                                                        ...i,
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
function tb(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: s } = e,
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
        g = null != r && r.status === eJ.Dmq.CANCELED,
        p = null;
    null != x &&
        "marketingPageBanner" === x.properties.properties.oneofKind &&
        (p = (0, c.jsx)(eb.x, {
            componentId: x.id,
            promotionId: x.promotionId,
            promotionBannerMarketingComponentFields: x.properties.properties.marketingPageBanner,
        }));
    let f = (0, ef.V)(),
        h = (0, ep.O)(),
        j = (0, z.U9)(h, tA.pe.TIER_2) ? tA.pe.TIER_2 : void 0,
        E = null != r && r.status !== eJ.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        b = (0, er.A)(),
        T = b.isFractionalPremiumActive && !E && null == p && !l;
    if (i) return (0, c.jsx)(tj, { fpEndsAt: b.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
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
            shouldShowReferralProgressBar: s,
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
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          })
        : (0, c.jsx)(tg, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          });
}
let [tT, tC] = (0, ed.A)(),
    tR = function (e) {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, eg.ds)(),
            r = (0, ex.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eJ.Dmq.CANCELED && null != s,
            m = r && !u,
            g = J.intl.string(J.t.qYKftX),
            p = (0, eT.m)(),
            { fractionalState: f, endsAt: h } = (0, er.A)(),
            j = (0, el.Ay)(h, el.yE.CREDITS_ENDS_IN),
            E = f !== tA.xc.NONE && !l;
        E && (m = !0);
        let b = o.useMemo(() => {
                if (!E) return (0, c.jsx)(eE, { text: g });
                let e = J.intl.format(J.t["yR+oDD"], {
                    helpCenterLink: eu.A.getArticleURL(eJ.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
            T = o.useMemo(
                () => ({
                    headingTop: b,
                    showPill: m,
                    shouldShowChurnVariant: u,
                    premiumSubscription: d,
                    userDiscountOffer: s,
                    discountedPrice: n,
                    buttonVisibilityRef: i,
                }),
                [b, m, u, d, s, n, i],
            );
        return (0, c.jsx)(A.f5, {
            value: a,
            children: (0, c.jsx)(tT.Provider, {
                value: T,
                children: (0, c.jsx)(tb, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: p }),
            }),
        });
    };
var tI = i(820284),
    t_ = i(742589),
    tv = i(392943),
    tP = i(285373),
    ty = i(603202),
    tS = i(673992);
let tD = function () {
    return (0, c.jsx)(tI.A, {
        section: eJ.JJy.NAVIGATION,
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
                            (0, c.jsx)(ei.t, { colorClass: tS.tr }),
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
var tM = i(325499),
    tO = i(131937),
    tU = i(885574),
    tL = i(43990),
    tk = i(993077),
    tG = i(139286),
    tw = i(872725),
    tB = i(920050),
    tH = i(51965),
    tF = i(375776),
    tV = i(727811),
    tW = i(222652),
    tz = i(385740),
    tY = i(934353);
function tX(e) {
    let { openRewardModal: t } = e,
        i = (0, tW.z)();
    if (i.kind === tW.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tY.R$,
            children: [
                (0, c.jsx)(eC.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tA.pe.TIER_2,
                }),
                (0, c.jsx)(es.$, { variant: "secondary", size: "md", text: J.intl.string(J.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === tV.P.CLAIMED
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
                        text: i.text,
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        onClick: i.onClick,
                        disabled: i.disabled,
                        loading: i.loading,
                    }),
                    (0, c.jsx)(es.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: i.requestInProgress,
                    }),
                ],
            }),
            i.claimStatus === tV.P.CLAIM_IN_PROGRESS &&
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
    let { analyticsLocations: s } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ee.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("878140"), i.e("813088")]).then(i.bind(i, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, c.jsx)(tL.N, {
        theme: eJ.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(A.f5, {
                value: s,
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
var tZ = i(254202),
    tJ = i(112992);
function tq(e) {
    let { className: t, containerClassName: i, glowing: s } = e,
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
        containerClassName: i,
        glowing: s,
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
var t$ = i(744082),
    t0 = i(261995),
    t1 = i(722793),
    t2 = i(700556),
    t3 = i(821874);
function t7(e) {
    let { id: t, sectionClassName: i, heading: s, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = t3.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: i,
        children: [
            s,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && t2.Jx, l), children: a }) : null,
        ],
    });
}
var t6 = i(517846),
    t8 = i(509434),
    t5 = i(695366),
    t9 = i(27620),
    t4 = i(44724),
    ie = i(371794);
let it = new Date(Date.UTC(2026, 9, 23));
var ii = i(945810);
let is = (0, ii.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ia = i(398523),
    il = i(881373),
    ir = i(721157),
    ic = i(555393),
    io = i(325652),
    id = i(852218),
    iu = i(52530),
    im = i(164832),
    ix = i(280761),
    ig = i(881296);
let ip = (0, ii.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ih = i(612413);
let iN = new Date(Date.UTC(2026, 10, 5));
var iA = i(188275),
    ij = i(278870),
    iE = i(795670),
    ib = i(839071),
    iT = i(737132),
    iC = i(39078),
    iR = i(635088),
    iI = i(679502),
    i_ = i(762493);
let iv = "xgpp";
function iP(e) {
    let { card: t, backgroundAssetUrl: i, blurTint: s, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: t2.JE,
        children: (0, c.jsx)(tZ.S, {
            ...t,
            backgroundAssetUrl: i,
            blurTint: s ?? void 0,
            pillText: void 0,
            featured: !0,
            glowing: n,
            autoClickCta: a,
        }),
    });
}
function iy(e) {
    let { glowingSectionId: t, glowingPerkId: i } = e,
        s = (0, tM.b)("premium_subscriber_home_rewards");
    (0, t$.A)(tA.tv);
    let {
            expiredCallOfDutyCard: n,
            logitechCard: a,
            rustCard: l,
            steelseriesCard: r,
            youtubeCard: d,
            riotCampaignCard: m,
            macaronCard: x,
            codeBlurpleCard: g,
        } = (function () {
            let e,
                t,
                { analyticsLocations: i } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                s = ((e = (0, iu.eh)()), (t = (0, iu.fR)()), null != e ? e : t),
                n = (0, ix.U)(),
                a = (function (e) {
                    let { location: t } = e,
                        { enabled: i } = is.useConfig({ location: t });
                    return i;
                })({ location: "useHardwarePartnerPerkCards" }),
                l = (0, il.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                r = ia.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                d = (0, ih.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                u = (function (e) {
                    let { location: t } = e,
                        { enabled: i } = ip.useConfig({ location: t });
                    return i;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                m = null === (0, ic.N)(),
                x = (0, t0.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: g, nDaysInMonth: p } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let e =
                        a && null == s
                            ? {
                                  id: tB.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: J.intl.string(ij.default["IcD/7p"]),
                                  description: J.intl.formatToPlainString(ij.default.hausFi, {
                                      date: new Intl.DateTimeFormat(J.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(it),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: io.L.EXPIRED,
                                  pillText: J.intl.string(ij.default.fxF0Jz),
                                  caption: (0, c.jsx)("img", { src: iR.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = l
                        ? {
                              id: tB.LOGITECH_3PP_CARD_ID,
                              title: J.intl.string(iE.default.OlObRa),
                              description: J.intl.format(iE.default.ZGOJ8R, {
                                  discountPercent: il.aW,
                                  termsUrl: eu.A.getArticleURL(eJ.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: g.getDate() / p,
                              ctaText: J.intl.string(J.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, im.P)({
                                      partnerIds: [id.XY],
                                      title: J.intl.string(iE.default["2I7nK+"]),
                                      subtitle: J.intl.format(iE.default.W8jOD0, {
                                          termsUrl: eu.A.getArticleURL(eJ.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: id.XY },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    o = r
                        ? {
                              id: tB.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: J.intl.string(J.t.m7PucM),
                              description: J.intl.format(J.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: g.getDate() / p,
                              ctaText: J.intl.string(J.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, im.P)({
                                      partnerIds: [id.KS],
                                      title: J.intl.string(J.t["7ioAjs"]),
                                      subtitle: J.intl.format(J.t.LOYRxB, {
                                          helpCenterLink: eu.A.getArticleURL(eJ.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: id.KS },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    f = u
                        ? {
                              id: tB.RUST_3PP_CARD_ID,
                              title: J.intl.string(iT.default.gQ1ctg),
                              description: J.intl.format(iT.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(J.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(iN),
                                  termsUrl: eu.A.getArticleURL(eJ.MVz.RUST_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: J.intl.string(J.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, ie.YE)(iA.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: J.intl.string(iT.default.NmBRGV),
                              ctaIcon: t8.I,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t4.default)({ applicationId: iA.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null;
                return {
                    expiredCallOfDutyCard: e,
                    logitechCard: t,
                    rustCard: f,
                    steelseriesCard: o,
                    youtubeCard: d
                        ? {
                              id: tB.YOUTUBE_3PP_CARD_ID,
                              title: J.intl.string(iC.default["BdIVB+"]),
                              description: J.intl.format(iC.default["3jY5i3"], {
                                  helpCenterUrl: eu.A.getArticleURL(eJ.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: iI.A, alt: "YouTube Premium" }),
                              ctaText: J.intl.string(ij.default.fcopjf),
                              onCtaClick: () =>
                                  (0, im.P)({
                                      partnerIds: [id.NC],
                                      analyticsLocations: i,
                                      title: J.intl.string(iC.default.TDZUui),
                                      subtitle: J.intl.format(iC.default.BTLkvw, {
                                          helpCenterUrl: eu.A.getArticleURL(eJ.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      modalTeaser: {
                                          title: J.intl.format(iC.default.J8CVYT, {
                                              helpCenterUrl: eu.A.getArticleURL(
                                                  eJ.MVz.YOUTUBE_PROMOTION_CURRENT_SUBSCRIBER,
                                              ),
                                          }),
                                          titleVariant: "text-sm/medium",
                                          icon: t5.E,
                                      },
                                      onClose: () => {
                                          t9.Ay.fireSurveyAction(t6.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: id.NC },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    riotCampaignCard:
                        null != n
                            ? {
                                  id: tB.RIOT_CREDIT_CAMPAIGN_PERK_CARD_ID,
                                  title: J.intl.string(ib.default.zCdMTs),
                                  description: J.intl.formatToPlainString(ib.default["8VH2lL"], {
                                      termsUrl: eu.A.getArticleURL(eJ.MVz.RIOT_CREDIT_CAMPAIGN),
                                  }),
                                  pillText:
                                      null != n.redemptionEndsAt
                                          ? J.intl.formatToPlainString(ij.default.g7iyvR, {
                                                date: (0, ir.Sw)(n.redemptionEndsAt),
                                            })
                                          : void 0,
                                  caption: (0, c.jsx)("img", {
                                      src: "https://cdn.discordapp.com/assets/content/cef348e36782f9a2173dea37eb7a54e04a0acb4d4f7f5074c8a3f9e5d2ae6e29.svg",
                                      alt: "Riot Games",
                                  }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/2e11a92f42a86815654f152948f20362092f082dd2215e4ad7dbfa3eacea17fd.webp",
                                  ctaText: J.intl.string(ib.default.en2ls2),
                                  blurTint: "#310A0B",
                                  isThirdPartyPerk: !0,
                                  onCtaClick: () => {
                                      (0, ig.W)({ analyticsLocations: i });
                                  },
                                  analyticsOptions: { thirdPartyPartner: "riot" },
                              }
                            : null,
                    macaronCard: x,
                    codeBlurpleCard: s,
                };
            }, [x, s, n, i, a, g, l, p, r, u, d, m]);
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
        j = s && null == f,
        E =
            s ||
            null != n ||
            null != a ||
            null != l ||
            null != r ||
            null != m ||
            null != g ||
            (null != x && x.id !== h) ||
            (null != d && d.id !== h),
        b = null;
    return (null != f
        ? (b = (0, c.jsx)(iP, {
              card: f.card,
              backgroundAssetUrl: f.backgroundAssetUrl,
              blurTint: f.blurTint,
              glowing: t === iv || i === f.card.id,
              autoClickCta: i === f.card.id,
          }))
        : j && (b = (0, c.jsx)("div", { className: t2.JE, children: (0, c.jsx)(tK, { glowing: t === iv }) })),
    null != b || E)
        ? (0, c.jsx)(t7, {
              id: iv,
              sectionClassName: u()(i_.uW, i_.Uv, i_.qr),
              heading: (0, c.jsx)(X.D, {
                  variant: "nitro-sm",
                  className: u()(t3.R_, t2.U6),
                  children: J.intl.string(J.t.NG1e6l),
              }),
              beforeGrid: b,
              grid: E
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != g && (0, c.jsx)(tZ.S, { ...g, containerClassName: t3.Nr, glowing: i === g.id }),
                            null != m &&
                                (0, c.jsx)(tZ.S, {
                                    ...m,
                                    containerClassName: t3.Nr,
                                    glowing: i === m.id,
                                    autoClickCta: i === m.id,
                                }),
                            null != x &&
                                x.id !== h &&
                                (0, c.jsx)(tZ.S, {
                                    ...x,
                                    containerClassName: t3.Nr,
                                    glowing: i === x.id,
                                    autoClickCta: i === x.id,
                                }),
                            null != d &&
                                d.id !== h &&
                                (0, c.jsx)(tZ.S, {
                                    ...d,
                                    containerClassName: t3.Nr,
                                    glowing: i === d.id,
                                    autoClickCta: i === d.id,
                                }),
                            null != l && (0, c.jsx)(tZ.S, { ...l, containerClassName: t3.Nr, glowing: i === l.id }),
                            s &&
                                (0, c.jsx)(tQ, {
                                    containerClassName: t3.Nr,
                                    glowing: i === tB.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, c.jsx)(tZ.S, { ...a, containerClassName: t3.Nr, glowing: i === a.id }),
                            null != r && (0, c.jsx)(tZ.S, { ...r, containerClassName: t3.Nr, glowing: i === r.id }),
                            null != n && (0, c.jsx)(tZ.S, { ...n, containerClassName: t3.Nr, glowing: i === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var iS = i(313133),
    iD = i(67423);
let iM = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e9.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e5.animated.div, {
        className: u()(iS.iE, { [iS.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: iS.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: iD, className: iS.oU }),
                (0, c.jsxs)("div", {
                    className: iS.iQ,
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
                (0, c.jsx)(es.$, {
                    variant: "expressive",
                    icon: ei.t,
                    size: "md",
                    text: J.intl.string(J.t.zrCzVB),
                    onClick: () =>
                        void (0, ee.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                i.e("489361"),
                                i.e("227853"),
                                i.e("470126"),
                                i.e("149697"),
                                i.e("128804"),
                                i.e("60882"),
                                i.e("71151"),
                                i.e("286615"),
                                i.e("735042"),
                                i.e("311541"),
                                i.e("274227"),
                                i.e("870088"),
                                i.e("300641"),
                                i.e("747802"),
                                i.e("966366"),
                                i.e("84978"),
                                i.e("153302"),
                                i.e("807003"),
                                i.e("88683"),
                                i.e("983513"),
                                i.e("216806"),
                                i.e("310734"),
                                i.e("910167"),
                                i.e("70379"),
                                i.e("417333"),
                                i.e("127962"),
                                i.e("517888"),
                                i.e("959880"),
                                i.e("174016"),
                                i.e("907167"),
                                i.e("11301"),
                                i.e("861060"),
                                i.e("364827"),
                                i.e("217229"),
                                i.e("734933"),
                                i.e("678157"),
                                i.e("513"),
                                i.e("40291"),
                                i.e("544571"),
                                i.e("523276"),
                                i.e("812042"),
                                i.e("729963"),
                                i.e("830938"),
                                i.e("538513"),
                                i.e("217637"),
                                i.e("50097"),
                                i.e("594161"),
                                i.e("435432"),
                                i.e("80347"),
                                i.e("680166"),
                            ]).then(i.bind(i, 293061));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: l,
                                    initialStep: ey.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var iO = i(761508),
    iU = i(197935),
    iL = i(62617),
    ik = i(387103);
function iG(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: ik.A,
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let iw =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function iB(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iw,
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iH = i(93712);
function iF(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iH.A,
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iV = i(345394);
function iW(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iV.A,
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iz = i(78211);
function iY(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iX = i(330422);
function iK(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iZ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iJ = i(996682);
function iq(e) {
    let { color: t = eX.A.colors.ICON_STRONG, "aria-label": i, "aria-hidden": s, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, iL.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, iJ.A)({ "aria-label": i, "aria-hidden": s, role: n }),
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
function iQ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i$ = i(78701);
function i0(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: i$.A,
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i1 = i(462887),
    i2 = i(736653),
    i3 = i(259065),
    i7 = i(206835),
    i6 = i(591179),
    i8 = i(462463),
    i5 = i(219882),
    i9 = i(878784),
    i4 = i(425713),
    se = i(696292),
    st = i(192444),
    si = i(617986),
    ss = i(892227),
    sn = i(81466),
    sa = i(923584),
    sl = i(749012);
let sr = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, B.F)();
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ss.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: sl.kL,
        children: [
            null != i &&
                (0, c.jsxs)("div", {
                    className: sl.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sl.Pf,
                            children: [
                                (0, c.jsx)(sn.CalendarIcon, { size: "sm", color: eX.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(K.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: J.intl.string(sa.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: J.intl.format(sa.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: sl.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: sl.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sl.Pf,
                            children: [
                                (0, c.jsx)(eY.C, { size: "sm", color: eX.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(K.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: J.intl.string(sa.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: J.intl.format(sa.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var sc = i(190107),
    so = i(799544);
function sd() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, st.lk)(sc.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: s } = (0, B.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == s || null == s.reward_amount || s.reward_amount <= 0
                    ? null
                    : {
                          id: tB.NITRO_ORBS_REWARDS_CARD_ID,
                          title: J.intl.string(sa.default.hx5AFp),
                          description: J.intl.format(sa.default.wq3CF2, { orbsCount: s.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(so.lH, so.yK),
                          footerContent: (0, c.jsx)(sr, {}),
                          ctaText: J.intl.string(sa.default.BxjHiu),
                          onCtaClick: () => (0, P.pX)(eJ.BVt.COLLECTIBLES_SHOP_WITH_TAB(e2.G2.ORBS)),
                      },
            [i, s],
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
                          onCtaClick: () => (0, si.mA)({ fromContent: se.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: so.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var su = i(975807),
    sm = i(95035),
    sx = i(989790),
    sg = i(88001),
    sp = i(899082),
    sf = i(817577);
function sh() {
    (0, su.A)(sg.TE);
}
function sN(e) {
    let t = (0, sx.O9)(),
        s = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ee.openModalLazy)(async () => {
                      let { default: e } = await i.e("499709").then(i.bind(i, 516044));
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
                      title: J.intl.string(sp.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              J.intl.formatToPlainString(sp.default.JlyGQj, {
                                  totalSeats: sg.aw,
                                  premiumGroupProductName: (0, sg.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: so.LF,
                                  children: (0, c.jsx)(sm.A, {
                                      onClick: sh,
                                      children: J.intl.string(sp.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: J.intl.string(J.t.oW0eUd),
                      primaryAsset: sf,
                      ctaIcon: ei.t,
                      ctaIconPosition: "start",
                      ctaText: J.intl.string(J.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sA = i(562819),
    sj = i(793943),
    sE = i(757036),
    sb = i(212524),
    sT = i(70283),
    sC = i(643056),
    sR = i(470739);
let sI = (0, ii.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s_ = i(655752),
    sv = i(764231),
    sP = i(627380),
    sy = i(30084),
    sS = i(814014),
    sD = i(714206);
let sM =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    sO =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    sU =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function sL() {
    let e,
        t,
        i,
        s,
        n,
        a,
        l,
        r,
        d,
        m,
        g,
        p,
        f,
        h,
        j,
        E,
        { analyticsLocations: b } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        T = (0, i6.X)("useWhatsNewPerkCards"),
        C = (0, i8.A)({ analyticsLocations: b }),
        R = (0, o.useCallback)(() => {
            (0, eo.openUserSettings)(ec.X.PROFILE_PANEL, { analyticsLocations: b }, () =>
                (0, i3.L)({ analyticsLocations: b }),
            );
        }, [b]),
        I = (0, o.useCallback)(() => {
            (0, eo.openUserSettings)(ec.X.PROFILE_PANEL, { analyticsLocations: b }, () =>
                (0, sA.L)({ analyticsLocations: b }),
            );
        }, [b]),
        _ = (0, o.useCallback)(() => {
            (0, eo.openUserSettings)(ec.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        v =
            ((e = (0, x.bG)([S.default], () => S.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (i = (function (e) {
                let { location: t } = e;
                return sI.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (s = (0, sC.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, i9.$F)()),
            (a = (0, i9.Xb)()),
            (l = n?.status === i9.Wo.UPCOMING || t),
            (r = n?.status === i9.Wo.WITHHELD),
            (d = l || r),
            (m = (0, i4.N)(n?.id)),
            (g = (function () {
                let e = (0, i9.$F)(),
                    t = (0, s_.P)(),
                    i = (0, i9.Xb)();
                if (null == e || null == t || null == i || e.status === i9.Wo.WITHHELD) return null;
                let s = eI()(),
                    n = eI()(i),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / r));
            })()),
            (p = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion) && !d),
            (f = (0, sP.t)()),
            (h = (0, s_.P)()),
            (0, o.useMemo)(() => {
                let e,
                    l = null != h ? J.intl.string(h.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, sv.T)(tA.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === i9.Wo.UPCOMING
                              ? J.intl.formatToPlainString(J.t.a1eKDi, { days: f?.days ?? 0 })
                              : n.status === i9.Wo.WITHHELD
                                ? ((0, sv.T)(n.id, n.tenureReqNumMonths) ?? void 0)
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
                                  })(f, l) ??
                                  (0, sv.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != m ? (r = d || p ? m.standard : m.ambientLarge) : t && (r = sD),
                    {
                        id: tB.TENURE_BADGE_CARD_ID,
                        title: null != n ? J.intl.string(n.nameUnformattedNitro) : t ? J.intl.string(J.t.tx9Fvw) : "",
                        pillText: J.intl.string(J.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(sS.pq, { [sS.rX]: d, [sS.kE]: p }),
                        caption: null != a ? J.intl.formatToPlainString(J.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: g ?? void 0,
                        ctaText: J.intl.string(J.t.jVcuVY),
                        onCtaClick: () => {
                            i && s
                                ? (0, sR.openBadgeDirectoryModal)({ initialBadgeId: sT.$.PREMIUM_TENURE })
                                : (0, sy.D)({ analyticsLocations: b });
                        },
                    }
                );
            }, [n, m, d, p, a, g, t, f, h, b, i, s])),
        { nitroOrbsRewardsCard: P, questOrbMultiplierCard: y } = sd(),
        D =
            ((j = (0, sE.L)(tA.PremiumTypes.TIER_2)),
            (E = (0, i5.rX)()),
            (0, o.useMemo)(
                () =>
                    j && E
                        ? {
                              id: tB.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: J.intl.string(sb.default["/cV3ka"]),
                              description: J.intl.string(sb.default.H523FI),
                              primaryAsset: (0, c.jsx)(iz.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [j, E],
            )),
        M = sN(b);
    return (0, o.useMemo)(() => {
        let e = [
                P,
                y,
                M,
                {
                    id: tB.DISPLAY_NAME_STYLES_CARD_ID,
                    title: J.intl.string(J.t.OLtTrt),
                    description: J.intl.string(J.t["di/pXR"]),
                    onCtaClick: T ? C : R,
                    ctaText: J.intl.string(J.t.jVcuVY),
                    primaryAsset: sM,
                },
                {
                    id: tB.CLIENT_THEMES_CARD_ID,
                    title: J.intl.string(J.t.acc6h6),
                    description: J.intl.formatToPlainString(J.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: sU,
                    ctaText: J.intl.string(J.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sj.nf)(sj.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tB.PERMADECOS_CARD_ID,
                    title: J.intl.string(J.t.L14NZN),
                    description: J.intl.string(J.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(i0, { alt: "", ariaHidden: !0 }),
                    ctaText: J.intl.string(J.t.jVcuVY),
                    onCtaClick: T ? C : I,
                },
                {
                    id: tB.CUSTOM_APP_ICONS_CARD_ID,
                    title: J.intl.string(J.t["GU+wqh"]),
                    description: J.intl.string(J.t["1uPk1Z"]),
                    primaryAsset: sO,
                    ctaText: J.intl.string(J.t.y9TxXV),
                    onCtaClick: _,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            i = t ? 5 : 6;
        return (e.splice(+!!t, 0, v), null != D && e.splice(2, 0, D), e.length > i && e.splice(i, e.length - i), e);
    }, [v, P, y, D, M, R, _, I, C, T]);
}
var sk = i(355097);
let sG = "/assets/1eb1b74667b4c0f0.svg",
    sw = "/assets/983b60e4fcaf973b.svg";
var sB =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let sH = [
    { id: "bestof", label: () => J.intl.string(J.t.q1u7nQ) },
    { id: "appearance", label: () => J.intl.string(J.t.CUnZkZ) },
    { id: "upgrades", label: () => J.intl.string(J.t.KC5q8v) },
    { id: "vip", label: () => J.intl.string(J.t.DjEAcv) },
];
var sF = i(18290);
function sV(e) {
    return e.id;
}
function sW(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, i2.DP)(),
                t = (0, i6.X)("useFavoritesPerkCards"),
                i = (0, i9.Lh)(),
                s = (0, i4.N)(i)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, i7.A)({ scrollPosition: sk._F.TRY_IT_OUT, analyticsLocations: n }),
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
                    (0, P.pX)(eJ.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, i8.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, i3.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = sL(),
                f = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: j } = sd(),
                E = sN(n),
                b = (0, o.useMemo)(
                    () => [
                        {
                            id: tB.SERVER_BOOSTS_CARD_ID,
                            title: J.intl.formatToPlainString(J.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: J.intl.formatToPlainString(J.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(iG, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != E ? { ...E, categories: ["bestof"] } : null,
                        {
                            id: tB.PROFILES_CARD_ID,
                            title: J.intl.string(J.t.xDRab3),
                            description: J.intl.string(J.t.yn6fWA),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(iB, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tB.HD_VIDEO_CARD_ID,
                            title: J.intl.string(J.t["/mQ5gg"]),
                            description: J.intl.string(J.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(iF, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tB.CLIENT_THEMES_CARD_ID,
                            title: J.intl.string(J.t.acc6h6),
                            description: J.intl.formatToPlainString(J.t.WQazjs, { themeCount: 20 }),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: sU,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tB.MORE_EMOJIS_CARD_ID,
                            title: J.intl.string(J.t.D8vIDT),
                            description: J.intl.string(J.t.DRMecB),
                            primaryAsset: (0, c.jsx)(iW, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tB.LARGE_UPLOADS_CARD_ID,
                            title: J.intl.string(J.t.nL1WZV),
                            description: (0, i5.M6)({
                                legacyCopy: J.intl.formatToPlainString(J.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: J.intl.formatToPlainString(J.t.teOTfv, {
                                    maxFileSize: (0, em.EJ)(tA.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(iz.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tB.CUSTOM_APP_ICONS_CARD_ID,
                            title: J.intl.string(J.t["GU+wqh"]),
                            description: J.intl.string(J.t["1uPk1Z"]),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: sO,
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
                            primaryAsset: sM,
                            categories: ["appearance"],
                        },
                        {
                            id: tB.CUSTOM_SOUNDS_CARD_ID,
                            title: J.intl.string(J.t["Cu/oFd"]),
                            description: J.intl.string(J.t.czj2aa),
                            primaryAsset: (0, c.jsx)(iY, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.SPECIAL_STICKERS_CARD_ID,
                            title: J.intl.string(J.t.MQoVeb),
                            description: J.intl.string(J.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: so.Uc,
                                children: (0, c.jsx)(iX.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.SUPER_REACTIONS_CARD_ID,
                            title: J.intl.string(J.t.qERvAA),
                            description: J.intl.string(J.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(iK, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.VIDEO_BACKGROUNDS_CARD_ID,
                            title: J.intl.string(J.t.ssVDYQ),
                            description: J.intl.string(J.t.aUSRMa),
                            primaryAsset: (0, i1.M)(e) ? sG : sw,
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.EARLY_ACCESS_CARD_ID,
                            title: J.intl.string(J.t["g/KRY6"]),
                            description: J.intl.string(J.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(iZ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tB.BADGE_CARD_ID,
                            title: J.intl.string(J.t.Bn3CtB),
                            description: J.intl.string(J.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != s
                                    ? (0, c.jsx)("img", { src: s, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(iq, { color: eX.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tB.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: J.intl.string(J.t["MTD+7w"]),
                            description: J.intl.string(J.t.Bhs0s6),
                            ctaText: J.intl.string(J.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(iQ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != j ? { ...j, categories: ["vip"] } : null,
                        {
                            id: tB.PERMADECOS_CARD_ID,
                            title: J.intl.string(J.t.L14NZN),
                            description: J.intl.string(J.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(i0, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, s, h, j, E, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => b.filter((e) => null != e && !f.includes(e.id)), [b, f]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(s?.categories[0] ?? sB.BEST_OF_NITRO),
        l = sH.find((e) => e.id === n)?.label(),
        r = i.filter((e) => null != e && e.categories.includes(n));
    return (0, c.jsxs)("div", {
        className: sF.uW,
        children: [
            (0, c.jsx)(X.D, { variant: "nitro-sm", children: J.intl.string(J.t["Uh3+CA"]) }),
            (0, c.jsx)(iO.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: sF.Lq,
                "aria-label": J.intl.string(J.t["Uh3+CA"]),
                children: sH.map((e) =>
                    (0, c.jsx)(iO.V.Item, { id: e.id, className: sF.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                iU.A,
                {
                    "aria-label": J.intl.formatToPlainString(J.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: sF.jG,
                    items: r,
                    getItemKey: sV,
                    renderItem: (e, i) =>
                        (0, c.jsx)(tZ.S, { ...e, glowing: t === e.id, containerClassName: sF.Ui, listItemProps: i }),
                },
                n,
            ),
        ],
    });
}
var sz = i(72979);
let sY = function (e) {
    let { className: t } = e,
        i = (0, i2.DP)();
    return (0, c.jsx)("img", {
        className: u()(sz.D, t),
        src: (0, i1.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var sX = i(684251);
let sK = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(sX.kL, sX.Gd, sX.Eg),
        children: [(0, c.jsx)(sY, {}), (0, c.jsx)(tD, {}), t],
    });
};
function sZ(e) {
    let { glowingPerkId: t = null } = e,
        i = sL();
    return (0, c.jsx)(t7, {
        sectionClassName: t3.uW,
        heading: (0, c.jsx)(X.D, { variant: "nitro-sm", className: t3.R_, children: J.intl.string(J.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tZ.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tB.YOUTUBE_3PP_CARD_ID,
                        featured: s,
                        containerClassName: u()(t3.Nr, { [t3.Nq]: s }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function sJ(e, t, i, s) {
    !(function (e, t, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
            l = o.useRef(!1);
        (o.useEffect(() => {
            if (!t || l.current) return;
            let i = { behavior: a ? "auto" : "smooth", block: s, inline: n },
                r = e();
            if (null != r && r.offsetHeight > 0) {
                ((l.current = !0), r.scrollIntoView(i));
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
                        ((l.current = !0), d.disconnect(), t.target.scrollIntoView(i));
                }),
                u = performance.now();
            return (
                !(function t() {
                    if (c || performance.now() - u > 5e3) return;
                    let s = e();
                    null != s
                        ? s.offsetHeight > 0
                            ? ((l.current = !0), s.scrollIntoView(i))
                            : d.observe(s)
                        : (o = requestAnimationFrame(t));
                })(),
                () => {
                    ((c = !0), null != o && cancelAnimationFrame(o), d.disconnect());
                }
            );
        }, [t, a, s, n, ...i]),
            o.useEffect(() => {
                t || (l.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], i, s);
}
var sq = i(92737);
let sQ = "/assets/cd2be35d285d4675.svg",
    s$ = (e) => {
        let { userId: t } = e,
            i = (0, m.zy)();
        (o.useEffect(() => {
            ((0, w.Ay)(), null != t && (0, F.A)(t));
        }, [t]),
            o.useEffect(() => {
                b(!0);
            }, []),
            (0, W.j)(),
            (0, _.P)(I));
        let s = o.useRef(null),
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
                let e = new URLSearchParams(i.search),
                    t = e.get("perk"),
                    s = e.get(sq.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        sJ(d ?? "", null != d, h, j);
        let [E, b] = o.useState(!1),
            T = (0, V.p)(),
            C = o.useRef(null),
            [R, v] = o.useState(!1),
            P = null != T && null != a && a.status === eJ.Dmq.CANCELED,
            y = (0, z.iU)(tA.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !R && P,
            D = (0, x.bG)([H.A], () => (null != t ? H.A.getUserProfile(t) : null)),
            { analyticsLocations: U } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [L, Y] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(sX.xW, sX.Gd),
                  ref: s,
                  children: [
                      (0, c.jsx)(sK, {
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
                                          className: sX.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: y,
                                      }),
                                  }),
                                  (0, c.jsx)(sZ, { glowingPerkId: f }),
                                  (0, c.jsx)(iy, { glowingPerkId: f, glowingSectionId: p }),
                                  (0, c.jsx)(sW, { glowingPerkId: f }),
                                  (0, c.jsx)(Q, {
                                      className: sX.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eJ.liQ.NITRO_HOME, section: eJ.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: sX.hz }),
                                  (0, c.jsx)(k.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !L &&
                                              (O.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: U,
                                              }),
                                              Y(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: sX._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: sQ,
                                      className: sX.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: J.intl.string(J.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      P &&
                          null != y &&
                          (0, c.jsx)(iM, {
                              isVisible: S && E,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: y,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(sX.kL, sX.Lq, sX.TN, sX.Eg),
                  children: [(0, c.jsx)(tD, {}), (0, c.jsx)("div", { className: sX.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var s0 = i(286320),
    s1 = i(851746),
    s2 = i(727949),
    s3 = i(543213);
let s7 =
        "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png",
    s6 = `${s7} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, https://cdn.discordapp.com/assets/content/4e7462093b85c105a20baea89e1e03ef3ad3cb15eac1aa3a9579569427b68c60.png 3x`;
function s8(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iL.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: s7,
        srcSet: s6,
        className: (0, iL.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var s5 = i(783420),
    s9 = i(204413),
    s4 = i(245383),
    ne = i(824069),
    nt = i(785007),
    ni = i(947910);
function ns(e) {
    let { value: t, planRadioOptions: i, className: s, ...n } = e,
        a = i.map((e) => {
            let i = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: ni.VH,
                    children: [
                        i &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: ni.fQ,
                                children: (0, c.jsx)(eH.E, { type: { text: e.badgeText }, variant: "primary" }),
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
                radioBarClassName: u()(ni.tG, { [ni.uA]: i, [ni.hy]: i && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nt.$d, {
        ...n,
        options: a,
        value: t,
        size: nt.r9.NOT_SET,
        className: u()(ni.ul, s),
        withTransparentBackground: !0,
    });
}
var nn = i(118751),
    na = i(773669),
    nl = i(97352),
    nr = i(526292),
    nc = i(387278),
    no = i(369827),
    nd = i(803496);
function nu(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        i = (0, no.L)(),
        s = t?.paymentSourceId ?? i,
        { priceOptions: n } = (0, nd.A)({
            activeSubscription: t,
            skuIDs: [(0, em.mH)(e)],
            paymentSourceId: s,
            isGift: !1,
        });
    return n;
}
function nm(e, t, i, s, n) {
    return t && i?.includes(e) === !0 && null != s && null != n && s !== n;
}
function nx(e) {
    let { expectedUsageInterval: t, usageInterval: i, discountDuration: s, regularPrice: n, discountedPrice: a } = e;
    return i !== t || null == n || null == a
        ? null
        : t === tA.Ff.YEAR
          ? J.intl.format(J.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : J.intl.format(J.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
}
var ng = i(614488);
function np(e) {
    let { skuId: t, selectedPlanId: i, subscribeButtonProps: s } = e,
        n = null == i || !0 === s.disabled,
        a = null == i ? "secondary" : s.variant;
    return (0, c.jsx)(s5.A, {
        subscriptionTier: t,
        initialPlanId: i,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(es.$, {
                size: "md",
                fullWidth: !0,
                icon: ei.t,
                text: s.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nf(e) {
    let { skuId: t, className: i, variant: s = "default" } = e,
        n = t === tA.pe.TIER_2,
        a = "settings" === s,
        l = (0, i1.q)((0, i2.Ay)()),
        r = (0, ef.V)(),
        d = r?.subscriptionTrial,
        m = d?.skuId === t,
        g = n && m && null != d,
        {
            planRadioOptions: p,
            selectedPlanId: f,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [i, s] = o.useState(null),
                n = tA.En[t],
                a = tA.zE[t],
                l = t === tA.pe.TIER_2,
                r = nu(t),
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
                f = (0, nr.k5)(),
                h = (0, x.bG)([na.default], () => na.default.locale),
                N = (0, z.U9)(p, t),
                A = (0, z.N1)(n),
                j = (0, z.N1)(a),
                [E, b] = (0, x.yK)([nl.A], () => [nl.A.get(n), nl.A.get(a)], [n, a]),
                T = null != E ? (0, em.sS)(E, r) : null,
                C = null != b ? (0, em.sS)(b, r) : null,
                R =
                    N && p?.discount.amount != null && !f
                        ? J.intl.formatToPlainString(J.t.IAybsG, {
                              discount: (0, nn.l9)(h, Number(p.discount.amount) / 100),
                          })
                        : null,
                I = p?.discount?.planIds,
                _ = nm(a, N, I, j, C),
                v = nm(n, N, I, A, T),
                P = p?.discount.userUsageLimitInterval,
                y = p?.discount.userUsageLimit ?? tA.OJ,
                S = !l || _ || v || null == b ? null : (0, nc.Cj)(b, !1, r),
                D = !v || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== tA.pe.TIER_2 ? null : i && !s ? tA.En[t] : tA.zE[t];
                })({ skuId: t, monthlyHasDiscount: v, isMonthlyPlanDisabled: m }),
                U = null == i || (i === n && m) ? O : i,
                L = [
                    {
                        value: a,
                        primaryText: J.intl.string(J.t["/Q4HRN"]),
                        primarySubText:
                            (_
                                ? nx({
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
                            ? nx({
                                  expectedUsageInterval: tA.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: y,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: v ? A : T,
                        secondarySubText: v ? T : null,
                        badgeText: v ? R : null,
                        useGradientSelectedBorder: l && (d || v),
                        isDisabled: g || m,
                    },
                ],
                k = U === a ? _ : U === n && v;
            return { planRadioOptions: L, selectedPlanId: U, setSelectedPlanId: s, shouldSuppressDiscountCta: N && !k };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: j } = (0, s4.A)({ subscriptionTier: t }),
        { subscribeButtonProps: E } = (0, s9.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        b = (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(et.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: ng.MY,
                    children: (0, c.jsx)(X.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: ng.ck,
                        children: n ? J.intl.string(J.t.lG6a5x) : J.intl.string(J.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(et.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: ng.qT,
                    children: n
                        ? (0, c.jsx)(s3.ZP, {
                              featureSet: s3.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "text-sm/medium" : "text-md/medium",
                          })
                        : (0, c.jsx)(s3.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "text-sm/medium" : "text-md/medium",
                          }),
                }),
                n && (0, c.jsx)(ne.K, {}),
            ],
        }),
        T = (0, c.jsxs)(et.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: ng.Ux,
            children: [
                a ? (0, c.jsx)("div", { className: ng.zI, children: b }) : b,
                g
                    ? (0, c.jsx)("div", {
                          className: ng.qS,
                          role: "separator",
                          children: (0, c.jsx)(K.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: ng.ZV,
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
                              })(d.interval, d.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: ng.yF }),
                (0, c.jsxs)("div", {
                    className: ng.qr,
                    children: [
                        (0, c.jsx)(ns, {
                            className: a ? ng.US : void 0,
                            planRadioOptions: p,
                            value: f ?? "",
                            onChange: (e) => h(e.value),
                        }),
                        (0, c.jsx)(np, { skuId: t, selectedPlanId: f, subscribeButtonProps: E }),
                    ],
                }),
            ],
        }),
        C = u()(ng.Nr, i, { [ng.Fw]: n });
    return n
        ? (0, c.jsxs)(Y.h, {
              color: "nitro-pink",
              className: C,
              children: [
                  !a &&
                      (0, c.jsx)("div", {
                          className: ng.kX,
                          "aria-hidden": !0,
                          children: (0, c.jsx)(s8, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, c.jsx)("div", { className: C, children: T });
}
function nh(e) {
    let { className: t } = e,
        i = (0, i1.q)((0, i2.Ay)()),
        s = nu(tA.pe.TIER_2),
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eU.A)({ userId: n?.id, size: eS._3.SIZE_32, animateOnHover: !0 }),
        r = (0, x.bG)([nl.A], () => nl.A.get(tA.gD.PREMIUM_GROUP_MONTH)),
        o = J.intl.string(J.t["2pG5Ga"]),
        d = (0, c.jsx)(s5.A, {
            subscriptionTier: tA.pe.TIER_2,
            initialPlanId: tA.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(es.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: ei.t,
                    text: o,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        m = null;
    if (null != r)
        try {
            m = (0, em.sS)(r, s, !1, !1, !1);
        } catch {
            m = null;
        }
    return (0, c.jsx)("div", {
        className: u()(ng.Nr, t),
        children: (0, c.jsxs)(et.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: ng.Ux,
            children: [
                (0, c.jsxs)(et.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: ng.MY,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: "nitro-md",
                            color: i ? "text-strong" : "text-overlay-light",
                            className: ng.ck,
                            children: J.intl.string(sp.default.eSKiXk),
                        }),
                        null != n &&
                            (0, c.jsxs)(et.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: ng.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: ng.uA,
                                        children: (0, c.jsx)(eD.eu, {
                                            src: a,
                                            size: eS._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...l,
                                        }),
                                    }),
                                    (0, c.jsx)(et.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: ng.VL,
                                        children: (0, c.jsxs)(K.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", sg.LM],
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
                    className: ng.qT,
                    children: (0, c.jsx)(s3.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: ng.yF }),
                (0, c.jsxs)("div", {
                    className: ng.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ng.ec,
                            children: [
                                (0, c.jsx)(K.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: J.intl.string(sp.default.SvSwga),
                                }),
                                null == m
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(K.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: i ? "text-strong" : "text-overlay-light",
                                          children: m,
                                      }),
                            ],
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function nN(e) {
    let { innerRef: t, className: i, variant: s = "default" } = e,
        n = "settings" === s,
        { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, s3.pw)(t),
        r = (0, sx.PA)(),
        o = !n && r,
        d = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        m = { [ng.iR]: !d && !n };
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsxs)(et.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: u()(ng.oB, i, { [ng.W0]: n }),
            children: [
                (0, c.jsx)(X.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: ng.op,
                    children: J.intl.string(J.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: l,
                    className: u()(ng.kR, { [ng.BQ]: o }),
                    children: [
                        (0, c.jsx)(nf, { skuId: tA.pe.TIER_0, className: u()(ng.rz, m), variant: s }),
                        (0, c.jsx)(nf, { skuId: tA.pe.TIER_2, className: u()(ng.Rv, m), variant: s }),
                        o && (0, c.jsx)(nh, { className: u()(ng.zz, m) }),
                    ],
                }),
            ],
        }),
    });
}
var nA = i(366010),
    nj = i(303136);
let nE = function (e) {
    let t,
        { className: i } = e,
        s = (0, e8.TM)(),
        n = (0, nA.q)((0, i2.Ay)());
    return (
        (t = s
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, c.jsx)("div", {
            className: i,
            children: (0, c.jsx)(
                nj.A,
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
var nb =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nT = i(352756);
let nC = function (e) {
    let { isVisible: t, subscriptionTier: i, isEligibleForBogoPromotion: s, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e9.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eJ.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e5.animated.div, {
        className: u()(nT.iE, { [nT.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nT.UD,
            children: [
                (0, c.jsx)(eC.A, {
                    size: "md",
                    subscriptionTier: i,
                    hasActivePromotion: !!s,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, c.jsx)(Z.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nR = i(573710);
let nI = function () {
    let e = (0, e6.bG)([ea.Ay], () => ea.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nR.BI,
                children: (0, c.jsx)(ti, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: te.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nR.Q,
                    }),
                }),
            }),
            (0, c.jsx)(tn, {
                isMotionReduced: e,
                boltContainerClassName: nR.nJ,
                carContainerClassName: nR.IN,
                hammerContainerClassName: nR.Gj,
                keyContainerClassName: nR.FV,
                starContainerClassName: nR.E1,
                boltAssetClassName: nR.j7,
                carAssetClassName: nR.or,
                hammerAssetClassName: nR.Wv,
                keyAssetClassName: nR.rs,
                starAssetClassName: nR.OY,
            }),
        ],
    });
};
var n_ = i(989756);
function nv(e) {
    let { ref: t, ...i } = e,
        { analyticsLocations: s } = (0, A.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(A.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: n_.kL,
            children: (0, c.jsxs)("div", {
                className: n_.hQ,
                children: [
                    (0, c.jsx)(nI, {}),
                    (0, c.jsx)(X.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: n_.RH,
                        children: J.intl.string(J.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
nv.displayName = "PremiumMarketingFooter";
var nP = i(939249);
let ny = function (e) {
    let { navBarSections: t, activeSectionId: i } = e,
        s = {
            [nb.HOME]: J.intl.string(J.t.uGRXjS),
            [nb.WHATS_NEW]: J.intl.string(J.t["mfcR/v"]),
            [nb.BEST_OF_NITRO]: J.intl.string(J.t.xQKkE8),
            [nb.PLANS]: J.intl.string(J.t.wyNMnm),
            [nb.COMPARE]: J.intl.string(J.t.pwD7If),
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
                        (0, c.jsx)(ei.t, { className: ty.nE, colorClass: ty.oG }),
                        (0, c.jsx)("div", {
                            className: ty.zc,
                            role: "tablist",
                            "aria-label": J.intl.string(J.t.O9MiXY),
                            children: a.map((e) => {
                                let t = i === e.id,
                                    n = s[e.id];
                                return (0, c.jsxs)(
                                    nP.D,
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
var nS = i(713271),
    nD = i(704333),
    nM = i(414499),
    nO = i(597770),
    nU = i(500060),
    nL = i(866665),
    nk = i(406860),
    nG = i(870975),
    nw = i(698834);
function nB() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nk.A)({ boxType: tF.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: nD.B, text: J.intl.string(tz.default.MUypiB) },
            { icon: nM.h, text: J.intl.string(tz.default.ec5Rdd) },
            { icon: nO.GiftIcon, text: J.intl.string(tz.default["9t2CzW"]), tooltip: tz.default.AyECej },
            { icon: nU.o, text: J.intl.string(tz.default.R7YJAY) },
        ];
    return (0, c.jsx)(k.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nw.iE,
            children: (0, c.jsxs)("div", {
                className: nw.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nw.j,
                        children: [
                            (0, c.jsx)("div", { className: nw._g }),
                            (0, c.jsx)("div", { className: nw.$h }),
                            (0, c.jsx)("div", { className: nw.Rv }),
                            (0, c.jsx)("div", { className: nw.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nw.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nw.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(X.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: nw.R_,
                                                children: J.intl.string(tz.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    i.map((e) => {
                                                        let { icon: t, text: i, tooltip: s } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nw.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(K.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: i,
                                                                    }),
                                                                    null != s &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nw.Jn,
                                                                            children: (0, c.jsx)(nL.m, {
                                                                                text: J.intl.string(s),
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
                                                            i,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: nw.xF,
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
                                        className: nw.WE,
                                        children: (0, c.jsx)(K.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: J.intl.format(tz.default.KDKdWi, { termsLink: (0, nG.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nw.r1,
                                children: (0, c.jsx)("img", {
                                    className: nw.wm,
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
var nH = i(886205),
    nF = i(750338),
    nV = i(610557),
    nW = i(505051);
function nz(e) {
    let {
        className: t,
        boxLayout: i,
        title: s,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, c.jsxs)("div", {
        className: u()(nW.boxBackdrop, t),
        children: [
            (0, c.jsx)(X.D, {
                className: nW.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: s,
            }),
            null != r && (0, c.jsx)("div", { className: nW.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nW.bentoBoxesGrid,
                children: i.flatMap((e, t) => {
                    let i;
                    switch (e.length) {
                        case 3:
                            i = nV.A0.SMALL;
                            break;
                        case 2:
                            i = nV.A0.MEDIUM;
                            break;
                        default:
                            i = nV.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, c.jsx)(
                            nF.A,
                            { index: t + +!!l, ...e, size: i, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let nY = o.memo(function (e) {
        let t = (0, tM.b)("premium_marketing_bento"),
            i = (0, ih.mh)({ location: "premium_marketing_bento" }),
            { enabled: s } = (0, t0.vc)({ location: "premium_marketing_bento" }),
            { enabled: n } = nH.A.useConfig({ location: "premium_marketing_bento" }),
            a = t && !i && !(s && n),
            { whatsNewBoxes: l } = (0, nV.Ay)(a);
        return (0, c.jsx)(nz, {
            boxLayout: l,
            title: J.intl.string(J.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: a ? (0, c.jsx)(nB, {}) : null,
            ...e,
        });
    }),
    nX = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nV.Ay)();
        return (0, c.jsx)(nz, { boxLayout: t, title: J.intl.string(J.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nK = (0, ii.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nZ = i(236834),
    nJ = i(540504);
function nq(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eU.A)({ userId: t?.id, size: eS._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nJ.$6,
        children: (0, c.jsxs)("div", {
            className: nJ.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nJ.kR,
                    children: (0, c.jsx)(eD.eu, { src: i, "aria-label": t.username, size: eS._3.SIZE_32, ...s }),
                }),
                (0, c.jsx)(X.D, {
                    variant: "heading-sm/medium",
                    className: nJ.FS,
                    color: "text-strong",
                    children: J.intl.format(J.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
var nQ = i(579245),
    n$ = i(369805);
let n0 = function () {
    let e = (0, n$.A)();
    return null == e ? null : (0, c.jsx)(eE, { text: e });
};
function n1() {
    let e = (0, x.bG)([nl.A], () => nl.A.getForSkuAndInterval((0, em.mH)(tA.pe.TIER_0), tA.WT.MONTH));
    return null != e ? (0, em.sS)(e) : "\u2026";
}
var n2 = i(508556);
let n3 = function (e) {
    let { containerVisibilityPercentage: t, variant: i = "default" } = e,
        s = "settings" === i,
        n = (0, e6.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        a = (0, e8.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: u()(n2.YU, { [n2.W0]: s }),
        children: [
            (0, c.jsx)(tc, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: n2.wG,
                assetClassName: n2.lu,
                variant: i,
            }),
            (0, c.jsx)(tn, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: n2.nJ,
                carContainerClassName: n2.IN,
                hammerContainerClassName: n2.Gj,
                keyContainerClassName: n2.FV,
                starContainerClassName: n2.E1,
                boltAssetClassName: n2.j7,
                carAssetClassName: n2.or,
                hammerAssetClassName: n2.Wv,
                keyAssetClassName: n2.rs,
                starAssetClassName: n2.OY,
                animateStar: !s,
            }),
        ],
    });
};
var n7 = i(14057);
let n6 = o.memo(function (e) {
    let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: s, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        o = n1(),
        d = nK.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        m = (0, nZ.A)(),
        g = null != m,
        { visibilityPercentageRef: p, visibilityPercentage: f } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion)),
        h = (0, s0.b)(),
        j = !g && h.length > 0,
        E = (0, eh.c)($.C.MARKETING_PAGE_BANNER),
        b = null != E && "marketingPageBanner" === E.properties.properties.oneofKind,
        T = (0, nr.ar)() && !b,
        C = (0, ep.O)(),
        R = (null != C && tA.U4.includes(C.discountId)) || b;
    return (0, c.jsx)(A.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: n,
            className: u()(n7.kL, t, { [n7.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, c.jsx)(nE, { className: n7.kv }),
                (0, c.jsx)("div", {
                    ref: p,
                    children: (0, c.jsxs)("div", {
                        className: n7.hQ,
                        children: [
                            (0, c.jsx)(n3, { containerVisibilityPercentage: f, variant: a }),
                            T && (0, c.jsx)(n0, {}),
                            (0, c.jsx)("div", {
                                className: n7.s8,
                                children: (0, c.jsx)(ew.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(X.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : n7.wx,
                                        children: J.intl.string(J.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: n7.rf,
                                children: [
                                    g &&
                                        (0, c.jsx)("div", {
                                            className: n7.eZ,
                                            children: (0, c.jsx)(nq, { referrer: m }),
                                        }),
                                    j &&
                                        (0, c.jsx)("div", {
                                            className: n7.Qn,
                                            children: (0, c.jsx)(nQ.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: T ? n7.es : n7.UJ,
                                        children: [
                                            (0, c.jsx)(eC.A, {
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!s,
                                                subscriptionTier: R && null == i ? tA.pe.NONE : i,
                                                buttonTextOverride: R ? J.intl.string(J.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, c.jsx)(Z.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n7.iQ,
                                        children: (0, c.jsx)(K.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: d
                                                ? J.intl.string(J.t.jHqrJW)
                                                : J.intl.format(J.t.kt9wxs, { cheapestMonthlyPrice: o }),
                                        }),
                                    }),
                                    null != E &&
                                        "marketingPageBanner" === E.properties.properties.oneofKind &&
                                        (0, c.jsx)(eb.x, {
                                            componentId: E.id,
                                            promotionId: E.promotionId,
                                            promotionBannerMarketingComponentFields:
                                                E.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
});
var n8 = i(820081),
    n5 = i(140735),
    n9 = i(401432),
    n4 = i(580630),
    ae = i(795269);
i(321073);
var at = i(872859),
    ai = i(55647),
    as = i(202600);
function an(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n8.B, { size: "sm", color: eX.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n5.A, { children: J.intl.string(J.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n9.a, { size: "xs", color: eX.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n5.A, { children: J.intl.string(J.t.l4qZrp) }),
              ],
          });
}
function aa(e) {
    let { label: t, tier0ColumnData: i, tier2ColumnData: s } = e;
    return (0, c.jsxs)("tr", {
        className: u()(ai.nM, ai.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: ai.nx,
                children: (0, c.jsx)(K.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: ai.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(K.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(an, { includes: !!i.includes }),
            }),
            (0, c.jsx)("td", {
                className: ai.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(K.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(an, { includes: !!s.includes }),
            }),
        ],
    });
}
function al(e) {
    let { title: t, subtitle: i, rows: s } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(ai.nM, ai.Gf),
                children: (0, c.jsxs)("td", {
                    className: ai.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(X.D, { variant: "heading-lg/semibold", children: t }),
                        null != i && (0, c.jsx)(K.E, { variant: "text-xs/medium", children: i }),
                    ],
                }),
            }),
            s.map((e) => (0, c.jsx)(aa, { ...e }, e.id)),
        ],
    });
}
function ar(e) {
    let { premiumType: t, priceString: i } = e,
        s = t === tA.PremiumTypes.TIER_0 ? J.intl.string(J.t.tUbSDK) : J.intl.string(J.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: ai.nn,
        children: [
            (0, c.jsxs)("div", {
                className: ai.KS,
                children: [
                    (0, c.jsx)(ei.t, { colorClass: ai.oG }),
                    (0, c.jsx)(X.D, { variant: "heading-sm/semibold", children: s }),
                ],
            }),
            (0, c.jsx)(X.D, { variant: "heading-sm/semibold", children: i }),
        ],
    });
}
function ac(e) {
    let {
            tier0Price: t,
            tier2Price: i,
            shouldUseDiscountPrice: s,
            tier2DiscountedPriceString: n,
            showMonthlyInterval: a,
        } = e,
        l = s ? n : (0, n4.$g)(i.amount, i.currency);
    function r(e) {
        return a ? `${e}/${(0, em.FJ)(tA.WT.MONTH)}` : e;
    }
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: ai.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ai.Cr,
                    children: (0, c.jsx)(X.D, { variant: "heading-xl/semibold", children: J.intl.string(J.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ai.Hn,
                    children: (0, c.jsx)(ar, {
                        premiumType: tA.PremiumTypes.TIER_0,
                        priceString: r((0, n4.$g)(t.amount, t.currency)),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ai.Hn,
                    children: (0, c.jsx)(ar, { premiumType: tA.PremiumTypes.TIER_2, priceString: s ? l : r(l) }),
                }),
            ],
        }),
    });
}
let ao = function (e) {
        let t,
            {
                className: i,
                hidePill: s = !1,
                selectedPlanTier: n = tA.PremiumTypes.TIER_2,
                variant: a = "default",
            } = e,
            l = "settings" === a,
            { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            d = (0, ef.V)(),
            m = d?.subscriptionTrial?.skuId,
            x = (0, ep.O)(),
            g = (0, z.YJ)(x),
            p = null != x && (0, z.U9)(x, tA.pe.TIER_2) && g === tA.gD.PREMIUM_MONTH_TIER_2,
            f = (0, z.N1)(g),
            h = null != f ? `${f}/${(0, em.FJ)(tA.WT.MONTH)}` : "",
            j = (0, em.JM)(tA.gD.PREMIUM_MONTH_TIER_0),
            E = (0, em.JM)(tA.gD.PREMIUM_MONTH_TIER_2),
            b = (function () {
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
                            label: J.intl.string(at.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    i = null,
                    s = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, st.lk)(sc.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = ia.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, il.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    });
                return (
                    e &&
                        ((i = {
                            id: 23,
                            title: J.intl.string(J.t.NG1e6l),
                            subtitle: J.intl.format(tz.default.uJcbMv, {
                                termsLink: eu.A.getArticleURL(eJ.MVz.NITRO_2_POINT_0),
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
                            i.rows.push({
                                id: 25,
                                label: J.intl.string(tz.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            i.rows.push({
                                id: 26,
                                label: J.intl.string(iE.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            s.push({
                                id: 27,
                                label: J.intl.formatToPlainString(J.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        s.push({
                            id: 28,
                            label: J.intl.string(sa.default["20tmSN"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        })),
                    [
                        ...(null != i ? [i] : []),
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
                                        percentageOff: (0, n4.l9)(na.default.locale, tA.oX / 100),
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
                                ...s,
                                {
                                    id: 15,
                                    label: J.intl.formatToPlainString(J.t["8crdzJ"], { maxChars: eJ.CS1 }),
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
        if (s) t = null;
        else {
            let e = null != d ? J.intl.string(J.t.IBYG5U) : J.intl.string(J.t.TR2B4T);
            t = (0, c.jsx)(ae.R, { className: u()(ai.Io, ai.SP), text: e });
        }
        let T = m === tA.pe.TIER_0 || n === tA.PremiumTypes.TIER_0;
        return (0, c.jsx)(A.f5, {
            value: r,
            children: (0, c.jsxs)("div", {
                className: u()(ai.zr, i, { [ai.W0]: l }),
                children: [
                    (0, c.jsx)(X.D, {
                        className: ai.Qw,
                        variant: l ? "heading-lg/semibold" : "nitro-md",
                        color: "text-strong",
                        children: J.intl.string(J.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: ai.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(ai.fO, { [ai.Vd]: T, [ai.hA]: !T }),
                                children: [
                                    !T && t,
                                    (0, c.jsx)("div", { className: ai.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: ai.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: as, alt: "", className: ai.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: ai.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: ai.tp,
                                children: [
                                    (0, c.jsx)(ac, {
                                        tier0Price: j,
                                        tier2Price: E,
                                        shouldUseDiscountPrice: p,
                                        tier2DiscountedPriceString: h,
                                        showMonthlyInterval: l,
                                    }),
                                    b.map((e) => (0, o.createElement)(al, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    ad = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            i = (0, o.useCallback)(
                (e) => {
                    let i = r.current[e];
                    null != i &&
                        ((i.style.scrollMarginTop = `${t}px`),
                        i.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [s, n] = (0, o.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, l] = (0, o.useState)(e[0]);
        (0, o.useEffect)(() => {
            let e = Object.keys(s).filter((e) => s[e]);
            e.length > 0 && l(e[0]);
        }, [s]);
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
                            (e, t, s) => (
                                (e[t] = {
                                    id: t,
                                    ref: (e) => {
                                        ((r.current[t] = e), null != e && (e.id = t));
                                    },
                                    scrollToSection: () => i(t),
                                    order: s,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, i],
                ),
                activeSectionId: a,
                setActiveSectionId: l,
            }
        );
    };
var au = i(818348),
    am = i(773188);
let ax = () => {
    let e = (0, m.zy)();
    (0, _.P)(I);
    let t = o.useRef(null),
        i = o.useRef(null),
        s = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [p, f] = o.useState(!1),
        [h, j] = o.useState(!1),
        [E, b] = o.useState(!1),
        T = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        C = null != T ? (0, em.EL)(T) : null,
        R = null != C ? em.Ay.getSkuIdForPlan(C.planId) : null,
        v = null !== R && R !== tA.pe.TIER_2 ? tA.pe.TIER_2 : null,
        { analyticsLocations: P } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        b(!0);
    }, []);
    let { shouldShowBonusOrbsUX: y } = (0, st.lk)(sc.rE.NITRO_HOME_MARKETING),
        S = y ? nS.N.COMBINED_ORBS : nS.N.ORB_REWARDS,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(sq.x);
            return "orbs" === t
                ? S
                : t === nS.N.THREE_P_PROMOTIONS
                  ? nS.N.THREE_P_PROMOTIONS
                  : t === nS.N.YOUTUBE
                    ? nS.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    sJ(D ?? "", null != D);
    let { navBarSections: U, activeSectionId: L } = ad([nb.HOME, nb.WHATS_NEW, nb.BEST_OF_NITRO, nb.PLANS, nb.COMPARE]),
        { home: w, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = U,
        W = (0, c.jsxs)("div", {
            ref: i,
            className: u()(am.kL, am.Gd, am.iI, { [am.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nE, { className: am.yH }),
                (0, c.jsx)(ny, { navBarSections: U, activeSectionId: L }),
                (0, c.jsxs)("div", {
                    className: am.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: am.qY,
                            ref: w.ref,
                            children: (0, c.jsx)(k.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n6, { ref: n, subscriptionTier: v }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: am.So,
                            ref: B.ref,
                            children: (0, c.jsx)(nY, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: am.KQ,
                            ref: H.ref,
                            children: (0, c.jsx)(nX, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: am.qc,
                            ref: F.ref,
                            children: (0, c.jsx)(k.L, {
                                innerRef: s,
                                onChange: (e) => f(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(nN, { innerRef: s }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: am.aC, ref: V.ref, children: (0, c.jsx)(ao, {}) }),
                    ],
                }),
                (0, c.jsx)(k.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (O.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            j(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: am._Z }),
                }),
                (0, c.jsx)(nv, { ref: l }),
                (0, c.jsx)(nC, { isVisible: !d && !p && E, subscriptionTier: v }),
                (0, c.jsx)(nE, { className: am.MF }),
            ],
        });
    return (0, c.jsx)(tL.N, {
        theme: au.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(am.XG, e), ref: t, children: W }),
    });
};
var ag = i(862482);
let ap = (0, ii.mj)({
    kind: "user",
    name: "2026-10-nitro-settings-marketing-page-refresh",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var af = i(106512),
    ah = i(412260),
    aN = i(662367),
    aA = i(374403),
    aj = i(396375),
    aE = i(900797),
    ab = i(847374),
    aT = i(614268);
function aC(e) {
    let { className: t } = e;
    return (0, c.jsx)("div", {
        className: u()(aT.i, t),
        children: (0, c.jsx)(eH.E, { type: "early_access", variant: "premium" }),
    });
}
var aR = i(904788),
    aI = i(507553);
let a_ = "/assets/5b4fec8511c3676a.svg",
    av = "/assets/0838bda6ecd20d91.svg";
function aP(e, t, i) {
    return (0, i1.M)(e) ? t : i;
}
var ay = i(872461);
function aS(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, c.jsxs)(nP.D, {
        onClick: i,
        className: ay.customButton,
        children: [
            t ? J.intl.string(J.t.maZaN3) : J.intl.string(J.t["37C26f"]),
            t
                ? (0, c.jsx)(aE.t, { size: "md", color: "currentColor", className: ay.arrow })
                : (0, c.jsx)(ab.a, { size: "md", color: "currentColor", className: ay.arrow }),
        ],
    });
}
function aD(e) {
    let {
            title: t,
            description: i,
            className: s,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: o = !1,
            variant: d = "default",
        } = e,
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        x = (0, c.jsx)("img", { src: n, alt: "", className: u()(a, ay.perksCardArt) }),
        g = "settings" === d;
    return (0, c.jsx)(A.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: u()(ay.perkCard, s, { [ay.settingsCard]: g }),
            children: [
                r ? (0, c.jsx)(aR.A, { className: ay.perkCardNewBadge }) : null,
                o ? (0, c.jsx)(aC, { className: ay.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, c.jsx)(et.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: ay.settingsArt,
                          children: x,
                      })
                    : x,
                (0, c.jsxs)("div", {
                    className: g ? ay.settingsText : void 0,
                    children: [
                        (0, c.jsxs)(X.D, {
                            variant: g ? "heading-md/semibold" : "heading-lg/semibold",
                            className: ay.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(K.E, {
                            variant: g ? "text-xs/normal" : "text-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: ay.perkCardDescription,
                            children: "function" == typeof i ? i(m) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aM = function (e) {
    let { className: t, isSubscriberNitroHome: s = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                s = (0, i2.Ay)(),
                n = (0, i6.X)("usePerkCards"),
                a = (0, e6.bG)([S.default], () => {
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
                    imageSource: aP(s, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                let { openUserSettings: t } = i(766075);
                                (aI.A.setState({ scrollPosition: sk._F.TRY_IT_OUT }),
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
                    imageSource: aP(s, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: J.intl.string(J.t.Bv8Pfk),
                    description: J.intl.string(J.t.JMfaTU),
                    imageSource: aP(s, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: J.intl.string(J.t.Bv8Pfk),
                    description: J.intl.string(J.t.JMfaTU),
                    imageSource: aP(s, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: J.intl.string(J.t["lGcW+c"]),
                    description: J.intl.string(J.t["/fDyO+"]),
                    imageSource: aP(s, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: J.intl.string(J.t["1c+xwT"]),
                    description: J.intl.string(J.t.hJG8ZN),
                    imageSource: aP(s, av, a_),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: J.intl.string(J.t.tzdIwI),
                    description: J.intl.string(J.t.hJG8ZN),
                    imageSource: aP(s, av, a_),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: J.intl.string(J.t.tzdIwI),
                    description: J.intl.string(J.t.hJG8ZN),
                    imageSource: aP(s, av, a_),
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
                    imageSource: aP(s, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: aP(s, sG, sw),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ay }),
        r = (0, e6.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(ay.perksContainer, t, {
            [ay.partiallyHidden]: s && !n,
            [ay.subscriberNitroHome]: s,
            [ay.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(X.D, {
                variant: "heading-xxl/semibold",
                className: ay.perksTitle,
                children: s ? J.intl.string(J.t.QX14gI) : J.intl.string(J.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(ay.perkCardContainer, { [ay.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, c.jsx)(aD, { ...t }, e);
                }),
            }),
            s &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [ay.sizeGizmo]: !n, [ay.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aS, {
                                onClick: function () {
                                    (O.default.track(eJ.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(ay.cover, { [ay.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aO = i(615939);
let aU = o.memo(function (e) {
    let { className: t } = e,
        i = [
            {
                id: tB.MORE_EMOJIS_CARD_ID,
                title: J.intl.string(J.t["R2IV/Q"]),
                description: J.intl.string(J.t.DRMecB),
                imageSource: iV.A,
            },
            {
                id: tB.HD_VIDEO_CARD_ID,
                title: J.intl.string(J.t["/mQ5gg"]),
                description: J.intl.string(J.t["7WwAXh"]),
                imageSource: iH.A,
            },
            {
                id: tB.LARGE_UPLOADS_CARD_ID,
                title: J.intl.string(J.t.nL1WZV),
                description: (0, i5.M6)({
                    legacyCopy: J.intl.formatToPlainString(J.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: J.intl.formatToPlainString(J.t.teOTfv, {
                        maxFileSize: (0, em.EJ)(tA.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: aO.A,
            },
            {
                id: tB.PROFILES_CARD_ID,
                title: J.intl.string(J.t.KcyDwF),
                description: J.intl.string(J.t.Mt3U1W),
                imageSource: iw,
            },
        ];
    return (0, c.jsxs)(et.B, {
        gap: 16,
        className: u()(ay.settingsPerks, t),
        children: [
            (0, c.jsx)(X.D, { variant: "heading-xl/semibold", children: J.intl.string(J.t.q1u7nQ) }),
            (0, c.jsx)(ew.F, {
                children: (0, c.jsx)("div", {
                    className: ay.settingsGrid,
                    children: i.map((e) => (0, c.jsx)(aD, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var aL = i(370049);
let ak = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nr.ar)();
    if (null == s) return null;
    let r = null != s ? em.Ay.getPremiumPlanItem(s) : null;
    if (
        (em.Ay.isBoostOnlySubscription(s)
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
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tk.Z, {
            className: u()(aL.kL, n, { [aL.He]: l }),
            type: tk.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(t5.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aL.Kk, { [aL.Pt]: l }),
                }),
                (0, c.jsx)(K.E, {
                    variant: "text-sm/medium",
                    color: i,
                    children: d
                        ? J.intl.format(J.t["tYuv+T"], {
                              helpdeskArticle: eu.A.getArticleURL(eJ.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : J.intl.format(J.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aG = i(978836);
let aw = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aG.zr, { [aG.N]: t }),
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
                        (0, c.jsx)("stop", { className: aG.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aG.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aG.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aG.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aG.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aB = i(194509),
    aH = i(317587);
let aF = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, e9.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eJ.JJy.MARKETING_FLOATING_CTA },
        r = (0, i2.Ay)(),
        o = (0, nA.M)(r);
    return (0, c.jsx)(e5.animated.div, {
        className: u()(aH.iE, { [aH.H8]: s, [aH.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: s ? aH.zW : aH.iJ,
            children: [
                (0, c.jsx)(aj.A, {
                    color: o ? ag.XD.BRAND_INVERTED : void 0,
                    className: u()(aH.x6, { [aH.Ph]: o }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aH.PJ,
                }),
                (0, c.jsx)(aB.A, { className: aH.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aV = i(386564);
function aW(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: i,
            containerClassName: s,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        o = r
            ? (0, c.jsx)(aj.A, {
                  color: l ? ag.XD.BRAND_INVERTED : void 0,
                  className: u()(aV.x6, aV.Ph, n, { [aV.Sq]: t && a, [aV.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aV.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aj.A, {
                  color: l || !a ? ag.XD.BRAND_INVERTED : void 0,
                  className: u()(aV.x6, aV.Ph, n, { [aV.Sq]: t && a, [aV.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        d = t && a ? null : (0, c.jsx)(aB.A, { className: u()(aV.x6, n), color: a ? void 0 : ag.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aV.UD, s), children: [o, " ", d] });
}
function az() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aR.p, { className: aV.zd }),
            (0, c.jsx)(aR.p, { className: aV.G }),
            (0, c.jsx)(aR.p, { className: aV.zy }),
            (0, c.jsx)(aR.p, { className: aV.GX }),
        ],
    });
}
function aY(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = n1();
    return (0, c.jsx)(K.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: u()(aV.h_, { [aV.If]: i, [aV.jn]: s }),
        children: J.intl.format(J.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aX = function (e) {
    let { className: t, buttonClassName: i, subscriptionTier: s, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ex.QQ)(),
        o = (0, nr.ar)(),
        d = (0, s0.b)().length > 0,
        m = J.intl.string(J.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(aV.kL, t, { [aV.V1]: !o, [aV.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aV.I6 : aV.G1,
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
                                  className: aV.DF,
                                  children: (0, c.jsx)(nQ.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aY, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: aV.UD,
                                  children: (0, c.jsx)(aB.A, { className: u()(aV.x6, i), color: ag.XD.WHITE }),
                              })
                            : (0, c.jsx)(aW, {
                                  subscriptionTier: s,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(aY, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(az, {}),
            ],
        }),
    });
};
var aK = i(22118),
    aZ = i(145359),
    aJ = i(377770);
function aq(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aw, { lifted: t }) : null;
}
let aQ = () => {
        let { enabled: e } = ap.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, _.P)(I);
        let t = o.useRef(null),
            i = o.useRef(null),
            s = o.useRef(null),
            n = (0, i2.Ay)(),
            a = (0, i1.M)(n),
            [l, r] = o.useState(!1),
            [d, m] = o.useState(!1),
            [g, p] = o.useState(!1),
            f = !l && !d,
            [h, j] = o.useState(!1),
            E = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            b = null != E ? (0, em.EL)(E) : null,
            T = null != b ? em.Ay.getSkuIdForPlan(b.planId) : null,
            C = null !== T && T !== tA.pe.TIER_2 ? tA.pe.TIER_2 : null,
            R = (0, ef.V)(),
            v = R?.subscriptionTrial?.skuId,
            P = (0, nr.ar)(),
            y = !e && P,
            S = (0, x.bG)([ah.A], () => {
                let e = ah.A.getMarketingComponentByType($.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, aA.Q)(),
            { analyticsLocations: U } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            j(!0);
        }, []);
        let L = e
            ? (0, c.jsx)("div", {
                  className: aJ.OE,
                  children: (0, c.jsx)(k.L, {
                      innerRef: t,
                      onChange: m,
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(nN, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, c.jsx)("div", {
                  className: aJ.dY,
                  children: (0, c.jsx)(k.L, {
                      innerRef: t,
                      onChange: (e) => m(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(s3.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, c.jsx)(aj.A, {
                              showIcon: !1,
                              subscriptionTier: tA.pe.TIER_0,
                              className: aZ.Ph,
                              look: ag.pR.OUTLINED,
                              color: ag.XD.WHITE,
                              buttonShineClassName: aZ.Qr,
                          }),
                          tier2CTAButton:
                              v === tA.pe.TIER_0
                                  ? (0, c.jsx)(aj.A, {
                                        showIcon: !1,
                                        subscriptionTier: tA.pe.TIER_2,
                                        className: aZ.Ph,
                                        look: ag.pR.OUTLINED,
                                        color: ag.XD.WHITE,
                                        buttonShineClassName: aZ.Qr,
                                    })
                                  : (0, c.jsx)(aj.A, {
                                        color: ag.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tA.pe.TIER_2,
                                        className: aZ.Ph,
                                        textOptions: { textClassName: aZ.Ac },
                                        buttonShineClassName: aZ.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, c.jsxs)("div", {
            className: u()(aJ.kL, { [aJ.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(ak, {
                    premiumSubscription: E,
                    textColor: e ? "text-default" : void 0,
                    className: u()(aJ.R3, { [aJ.aZ]: P }),
                }),
                y &&
                    (0, c.jsxs)("div", {
                        className: aJ.n1,
                        children: [
                            (0, c.jsx)(aq, { inOfferExperience: P }),
                            (0, c.jsx)(tP.l, {
                                className: aJ.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aJ.V1]: !y }),
                    children: [
                        null != S && (0, c.jsx)(af.m, { className: aJ.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: aJ.iS,
                            children: [
                                !y &&
                                    (0, c.jsx)(tP.l, {
                                        className: aJ.ij,
                                        size: "md",
                                        location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(k.L, {
                                    innerRef: i,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, c.jsx)(tL.N, {
                                              theme: au.NJ.DARK,
                                              children: (e) =>
                                                  (0, c.jsx)("div", {
                                                      className: e,
                                                      children: (0, c.jsx)(n6, {
                                                          ref: i,
                                                          subscriptionTier: C,
                                                          variant: "settings",
                                                      }),
                                                  }),
                                          })
                                        : (0, c.jsx)(aX, {
                                              ref: i,
                                              subscriptionTier: C,
                                              className: u()({ [aJ.p7]: P, [aJ.Pw]: P, [aJ.Cv]: null != E }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: aJ.Ol, children: (0, c.jsx)(aN.I, { component: D }) }),
                L,
                e ? (0, c.jsx)(aU, { className: aJ.OE }) : (0, c.jsx)(aM, { className: aJ.B_ }),
                (0, c.jsx)("div", {
                    className: aJ.aC,
                    children: e
                        ? (0, c.jsx)(ao, { variant: "settings" })
                        : (0, c.jsx)(aK.A, { className: aJ.JQ, hideCTAs: !0 }),
                }),
                (0, c.jsx)("div", { className: aJ.hz }),
                e
                    ? (0, c.jsx)(nC, { isVisible: f && h, subscriptionTier: C, variant: "settings" })
                    : (0, c.jsx)(aF, { isVisible: f && h, subscriptionTier: C, isApplicationHome: !1 }),
                (0, c.jsx)(k.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !g &&
                            (O.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: U }),
                            p(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: aJ._Z }),
                }),
                (0, c.jsx)("img", {
                    src: sQ,
                    className: aJ.Kw,
                    width: 112,
                    height: 85,
                    alt: J.intl.string(J.t.X4IxWL),
                }),
            ],
        });
    },
    a$ = function (e) {
        let { entrypoint: t } = e,
            i = (0, ef.V)(),
            s = (0, ep.O)(),
            n = (0, s2.NF)({ trialOffer: i }),
            a = (0, s2.Tp)(),
            l = (0, x.bG)([s1.A], () => s1.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, s2.QG)(), !0 === a && (0, s2.ne)(l), (null != i || null != s) && (0, L.u1)(i, s));
            }, [i, s, n, a, l]),
            t)
        ) {
            case tA.tU.UserSettings:
                return (0, c.jsx)(aQ, {});
            case tA.tU.ApplicationStoreHome:
                return (0, c.jsx)(ax, {});
            default:
                return null;
        }
    };
var a0 = i(531296);
let a1 = function (e) {
    let { entrypoint: t = tA.tU.UserSettings } = e;
    (0, _.P)(I);
    let i = (0, E.Hp)(),
        { sourceAnalyticsLocations: s, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        C = (0, ef.V)(),
        R = (0, ep.O)(),
        k = (0, b.Y)(tA.T7),
        [G, w] = o.useState(!0),
        B = o.useRef(0),
        H = (0, U.YE)(r, tA.PremiumTypes.TIER_2);
    ((0, s0.b)(),
        o.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([j.hP(), j.$o(), (0, p.zS)(null, null, eJ.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        o.useEffect(() => {
            G ||
                O.default.track(eJ.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: B.current,
                });
        }, [s, G]),
        o.useEffect(() => {
            i && (null != C || null != R) && (0, L.u1)(C, R);
        }, [i, C, R]));
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
                i = Object.hasOwn(t, e) ? t[e] : void 0;
            null != i &&
                ((V.current = !0),
                (0, P.bG)(eJ.BVt.APPLICATION_STORE),
                (0, v.A)({ subscriptionTier: i, analyticsLocations: n }));
        }, [W, F.search, n]));
    let X = (0, x.bG)([y.A], () => y.A.enabled),
        K = t === tA.tU.ApplicationStoreHome,
        Z = X
            ? (0, c.jsx)(f.A, {})
            : i
              ? (0, c.jsx)(T.uK, {})
              : K && H
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(s$, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(a0.kL, a0.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !X && !i && K && H
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [K && (0, c.jsx)(h.A, {}), Z] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(a$, { entrypoint: t }) });
};
