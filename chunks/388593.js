(i.d(t, { A: () => lf }), i(323874), i(14289), i(35956), i(205816));
var s,
    n,
    a,
    l,
    r,
    c,
    o = i(477900),
    d = i(582128),
    u = i(503698),
    m = i.n(u),
    x = i(806163),
    g = i(855986),
    h = i(289873),
    p = i(73825),
    f = i(369143),
    N = i(107834),
    A = i(793574),
    j = i(688810),
    b = i(669815),
    E = i(86379),
    T = i(160946),
    I = i(500597),
    C = i(840251),
    R = i(688151);
let v = new C.E([], R.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = i(611924),
    y = i(778705),
    P = i(976860),
    S = i(351906),
    D = i(287809),
    M = i(295405),
    O = i(166403),
    k = i(129230),
    U = i(474090),
    L = i(739053),
    G = i(831259),
    w = i(516521),
    B = i(961250),
    H = i(622886),
    F = i(851767),
    V = i(917445),
    W = i(131168),
    z = i(511484),
    K = i(175020),
    Y = i(517352),
    X = i(192308),
    q = i(331322),
    Z = i(834730),
    J = i(403581),
    Q = i(821609),
    $ = i(502572),
    ee = i(775602),
    et = i(366999),
    ei = i(531260),
    es = i(780964),
    en = i(766075),
    ea = i(786300),
    el = i(975571),
    er = i(448645),
    ec = i(89366),
    eo = i(881489),
    ed = i(620295),
    eu = i(423814),
    em = i(77528),
    ex = i(641436),
    eg = i(172218);
function eh() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, d.useState)(1),
        s = (0, d.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eg.B)(
            (e) => {
                i(e.intersectionRatio);
            },
            s,
            e,
        ),
        visibilityPercentage: t,
    };
}
var ep = i(43990),
    ef = i(805251),
    eN = i(652215);
function eA(e) {
    let { text: t } = e;
    return (0, o.jsx)(ep.N, {
        theme: eN.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, o.jsx)(q.B, {
                direction: "horizontal",
                fullWidth: !1,
                className: e,
                children: (0, o.jsx)(ef.E, { type: { text: t }, variant: "inverted" }),
            }),
    });
}
var ej = i(287763);
let eb = function (e) {
    let { text: t } = e;
    return (0, o.jsx)("div", {
        className: ej.i,
        children: (0, o.jsx)(Z.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var eE = i(371764),
    eT = i(103411),
    eI = i(65470),
    eC = i(792656),
    eR = i(536637),
    ev = i.n(eR),
    e_ = i(496431),
    ey = i(792996),
    eP = i(850292);
let eS = function (e) {
    let { expiresAt: t, className: i, digitTextVariant: s = "body-md/medium" } = e,
        n = (0, e_.A)(ev()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: c } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: c, unitType: "seconds" },
        ];
    return (0, o.jsxs)("div", {
        className: m()(eP.Xl, i, { [eP.a3]: "body-lg/semibold" === s }),
        children: [
            (0, o.jsx)(Z.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: ey.intl.string(ey.t["/ARFVE"]),
            }),
            (0, o.jsx)("div", {
                className: eP.$R,
                children: d.map((e, t) =>
                    (function (e, t, i) {
                        let s,
                            [n, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsxs)(
                                    "div",
                                    {
                                        className: eP.bh,
                                        children: [
                                            (0, o.jsxs)("div", {
                                                className: eP.kB,
                                                children: [
                                                    (0, o.jsx)("div", {
                                                        className: eP.B2,
                                                        children: (0, o.jsx)(Z.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, o.jsx)("div", {
                                                        className: eP.B2,
                                                        children: (0, o.jsx)(Z.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsx)(Z.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return ey.intl.string(ey.t.ixASa2);
                                                        case "hours":
                                                            return ey.intl.string(ey.t["8sNvNn"]);
                                                        case "minutes":
                                                            return ey.intl.string(ey.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return ey.intl.string(ey.t.JhaiLW);
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
                                    (0, o.jsx)(Z.E, {
                                        className: eP.cV,
                                        variant: "body-lg/normal",
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
var eD = i(473702),
    eM = i(778712),
    eO = i(97808),
    ek = i(609425),
    eU = i(922301),
    eL = i(16371),
    eG = i(73392),
    ew = i(854627),
    eB = i(427262),
    eH = i(938767);
function eF() {
    let e = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, ek.A)(),
        i = "" === (0, eG.a)({ displayNameStyles: t }),
        { avatarSrc: s, avatarDecorationSrc: n, eventHandlers: a } = (0, ew.A)({ userId: e?.id, size: eM._3.SIZE_56 });
    if (null == e) return null;
    let l = (0, eB.mG)(e);
    return (0, o.jsxs)("div", {
        className: eH.kL,
        children: [
            (0, o.jsx)("div", {
                className: eH.my,
                children: (0, o.jsx)(eO.eu, {
                    src: s,
                    avatarDecoration: n,
                    size: eM._3.SIZE_56,
                    "aria-label": l,
                    ...a,
                }),
            }),
            (0, o.jsx)("div", {
                className: m()(eH.QC, { [eH.e8]: null != t, [eH.ZV]: i }),
                children: (0, o.jsx)(eL.A, {
                    userName: l,
                    displayNameStyles: t,
                    effectDisplayType: eU.G.ANIMATED,
                    loop: !0,
                }),
            }),
        ],
    });
}
var eV = i(707554),
    eW = i(534514);
let ez = function (e) {
    let { className: t, color: i = "text-strong", variant: s = "nitro-lg", children: n } = e;
    return (0, o.jsx)(eV.F, {
        forceLevel: 1,
        children: (0, o.jsx)(eW.D, { className: t, variant: s, color: i, children: n }),
    });
};
var eK = i(969935),
    eY = i(132506),
    eX = i(610709),
    eq = i(478016),
    eZ = i(318254),
    eJ = i(646514),
    eQ = i(626031),
    e$ = i(197630);
i(232198);
var e0 = i(957457);
function e1(e) {
    let { nRewardsGranted: t, referralRewardType: i, className: s } = e;
    return t < 1
        ? null
        : i === e$.xb.ORBS
          ? (0, o.jsx)(e2, { nRewardsGranted: t, className: s })
          : i === e$.xb.DISCOUNT
            ? (0, o.jsx)(e3, { nRewardsGranted: t, className: s })
            : null;
}
function e2(e) {
    let { nRewardsGranted: t, className: i } = e,
        s = 5e3 * t,
        [n, a] = d.useState(0);
    return (
        d.useEffect(() => {
            a(s);
        }, [s]),
        (0, o.jsxs)(q.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: i,
            children: [
                (0, o.jsxs)("div", {
                    className: e0.u,
                    "aria-label": String(s),
                    children: [
                        (0, o.jsx)(eZ.OrbsIcon, { size: "xs", color: eJ.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, o.jsx)(eQ.t, {
                            value: n,
                            onValueChange: eN.tEg,
                            onValueReached: eN.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "body-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, o.jsx)(Z.E, {
                    variant: "body-sm/medium",
                    color: "text-strong",
                    children: ey.intl.string(ey.t.UhguER),
                }),
            ],
        })
    );
}
function e3(e) {
    let { nRewardsGranted: t, className: i } = e;
    return (0, o.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: i,
        "aria-label": ey.intl.formatToPlainString(ey.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, o.jsx)(eq.CheckmarkSmallIcon, { size: "md", color: eJ.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, o.jsx)(Z.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: ey.intl.format(ey.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e6 = i(303682),
    e7 = i(758836),
    e8 = i(558992);
function e5(e) {
    let { className: t } = e,
        {
            referralSentUsers: i,
            nReferralsSent: s,
            hasEligibleFriends: n,
            allSent: a,
            headingText: l,
            bodyText: r,
            referralStatus: c,
            isEligibleForIncentive: d,
            referralIncentiveRewardType: u,
            useAltReferralCardArt: x,
            shouldShowSpendOrbsCta: g,
        } = (0, eY.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, o.jsxs)("div", {
        className: m()(e8.kL, t),
        children: [
            (0, o.jsx)("div", {
                className: e8.G3,
                children: (0, o.jsx)(eX.fx, {
                    nReferralsSent: s,
                    imageSize: 55,
                    backgroundClassName: e8.HP,
                    ringClassName: e8.pZ,
                    referralRewardType: u,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, o.jsxs)("div", {
                className: m()(e8.IH, d && e8.zD),
                children: [
                    d &&
                        (0, o.jsx)("div", {
                            className: e8.aZ,
                            children: (0, o.jsx)(ef.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, o.jsxs)("div", {
                        className: e8.n4,
                        children: [
                            (0, o.jsx)(Z.E, { variant: "body-md/semibold", color: "text-strong", children: l }),
                            (0, o.jsx)(Z.E, {
                                variant: d ? "body-sm/medium" : "body-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    d
                        ? (0, o.jsxs)("div", {
                              className: e8.Wp,
                              children: [
                                  (0, o.jsx)(eX.ZP, { referralSentUsers: i }),
                                  (0, o.jsx)(e1, { nRewardsGranted: c.numRewardGranted, referralRewardType: u }),
                              ],
                          })
                        : (0, o.jsx)(eX.ZP, { referralSentUsers: i, className: e8.t7 }),
                ],
            }),
            (0, o.jsx)(Q.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? ey.intl.string(ey.t.iw5Ccc) : ey.intl.string(ey.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, eK.Cz)({
                              tab: e7.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eX.jM)({
                              startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e9 = i(164636),
    e4 = i(676279),
    te = i(156150),
    tt = i(717421),
    ti = i(396583),
    ts = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    tn = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let ta = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: i,
            yAxisAnimationData: s,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: l = !1,
            animationSpeedScale: r = 1,
            children: c,
        } = e,
        u = (0, tt.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, d.useState)(1),
        h = (0, tt.z)(
            null != i
                ? {
                      from: { scale: x > 0 ? i.startScale : i.endScale },
                      to: { scale: x > 0 ? i.endScale : i.startScale },
                      config: { duration: i.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [p, f] = (0, d.useState)(1),
        N = (0, tt.z)(
            null != t
                ? {
                      from: { blur: p > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: p > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, d.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, b] = (0, d.useState)(0),
        [E, T] = (0, d.useState)(1),
        I = (0, tt.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, ti.A)(() => {
        (b(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? c
        : (0, o.jsx)(te.animated.div, {
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
                  translateX: a ? I.xOffset.to((e) => `${e}px`) : 0,
                  scale: h.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: c,
          });
};
var tl = i(382168);
let tr = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: i,
        boltContainerClassName: s,
        carContainerClassName: n,
        hammerContainerClassName: a,
        keyContainerClassName: l,
        starContainerClassName: r,
        boltAssetClassName: c,
        carAssetClassName: d,
        hammerAssetClassName: u,
        keyAssetClassName: x,
        starAssetClassName: g,
        animationSpeedScale: h = 1,
        blurScale: p = 1,
        animateStar: f = !0,
    } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            null != s &&
                (0, o.jsx)("div", {
                    className: m()(tl.nJ, s),
                    children: (0, o.jsx)(ta, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: ts.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tn.UP,
                                      range: 125,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: c,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, o.jsx)("div", {
                    className: m()(tl.IN, n),
                    children: (0, o.jsx)(ta, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: ts.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tn.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, o.jsx)("div", {
                    className: m()(tl.Gj, a),
                    children: (0, o.jsx)(ta, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: ts.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tn.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: u,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, o.jsx)("div", {
                    className: m()(tl.FV, l),
                    children: (0, o.jsx)(ta, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: ts.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tn.UP,
                                      range: 200,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, o.jsx)("div", {
                    className: m()(tl.E1, r),
                    children: (0, o.jsx)(ta, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: ts.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tn.UP,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t || !f,
                        animationSpeedScale: h,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
var tc = i(607470),
    to = i(562915);
let td =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tu = function (e) {
        let {
                supportHEVCAlpha: t,
                isMotionReduced: i,
                containerVisibilityPercentage: s,
                containerClassName: n,
                assetClassName: a,
                animationSpeedScale: l = 1,
                variant: r = "default",
            } = e,
            c = "settings" === r;
        return i || c
            ? (0, o.jsx)("div", {
                  className: n,
                  children: (0, o.jsx)("img", {
                      src: c
                          ? to.A
                          : "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, o.jsx)("div", {
                  className: n,
                  children: (0, o.jsx)(ta, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: ts.SINE },
                      parallaxAnimationData: {
                          pathDirection: tn.UP,
                          range: 200,
                          containerVisibilityPercentage: s,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: l,
                      children: t
                          ? (0, o.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, o.jsx)(
                                tc.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, o.jsx)("source", { src: td }),
                                },
                                td,
                            ),
                  }),
              });
    },
    tm = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: i,
                flyingWumpusAssetClassName: s,
                boltContainerClassName: n,
                carContainerClassName: a,
                hammerContainerClassName: l,
                keyContainerClassName: r,
                starContainerClassName: c,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: h = 1,
            } = e,
            p = (0, e9.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            f = (0, e4.TM)();
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(tu, {
                    supportHEVCAlpha: f,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
                    animationSpeedScale: h,
                }),
                (0, o.jsx)(tr, {
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: n,
                    carContainerClassName: a,
                    hammerContainerClassName: l,
                    keyContainerClassName: r,
                    starContainerClassName: c,
                    boltAssetClassName: d,
                    carAssetClassName: u,
                    hammerAssetClassName: m,
                    keyAssetClassName: x,
                    starAssetClassName: g,
                    animationSpeedScale: h,
                }),
            ],
        });
    };
var tx = i(942663);
let tg = function (e) {
    let { containerVisibilityPercentage: t, compact: i } = e;
    return (0, o.jsx)(tm, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: m()(tx.wG, i && tx.Vx),
        flyingWumpusAssetClassName: m()(tx.lu, i && tx.ov),
        boltContainerClassName: m()(tx.nJ, i && tx.Wc),
        hammerContainerClassName: m()(tx.Gj, i && tx.XA),
        keyContainerClassName: m()(tx.FV, i && tx.oZ),
        starContainerClassName: m()(tx.E1, i && tx.LN),
        boltAssetClassName: m()(tx.j7, i && tx.QN),
        hammerAssetClassName: m()(tx.Wv, i && tx.B9),
        keyAssetClassName: m()(tx.rs, i && tx.I1),
        starAssetClassName: m()(tx.OY, i && tx.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var th = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tp = i(454273);
let tf = function (e) {
    let t,
        i,
        {
            className: s,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: l,
            shouldShowReferralProgressBar: r,
            marketingBanner: c,
            heroButtons: d,
        } = e,
        { visibilityPercentageRef: u, visibilityPercentage: x } = eh(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        h =
            ((t = { [th.MORNING]: ey.t["Wvc/I+"], [th.AFTERNOON]: ey.t["d+0STx"], [th.EVENING]: ey.t.CqsxKI }),
            ey.intl.string(
                t[
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? th.MORNING
                        : i >= 12 && i < 17
                          ? th.AFTERNOON
                          : th.EVENING
                ],
            )),
        p = c ?? (r ? (0, o.jsx)(e5, {}) : null);
    return (0, o.jsx)("div", {
        className: m()(tp.kL, tp.Eg, s),
        ref: l,
        children: (0, o.jsxs)("div", {
            className: m()(tp.W2, tp.HQ),
            ref: u,
            children: [
                (0, o.jsxs)(q.B, {
                    align: "start",
                    gap: 32,
                    className: tp.ZU,
                    children: [
                        a && n,
                        (0, o.jsxs)(q.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, o.jsxs)(q.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, o.jsx)(ez, { color: "text-default", variant: "nitro-md", children: h }),
                                        (0, o.jsx)(eF, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, o.jsx)("div", {
                    className: tp.y3,
                    children: (0, o.jsx)(tg, { containerVisibilityPercentage: x, compact: null == p }),
                }),
            ],
        }),
    });
};
var tN = i(549926);
let tA = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, o.jsx)(tm, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tN.wG,
        flyingWumpusAssetClassName: tN.lu,
        boltContainerClassName: tN.nJ,
        hammerContainerClassName: tN.Gj,
        keyContainerClassName: tN.FV,
        starContainerClassName: tN.E1,
        boltAssetClassName: tN.j7,
        hammerAssetClassName: tN.Wv,
        keyAssetClassName: tN.rs,
        starAssetClassName: tN.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tj = i(499126);
let tb = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, o.jsx)(tm, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tj.wG,
        flyingWumpusAssetClassName: tj.lu,
        boltContainerClassName: tj.nJ,
        hammerContainerClassName: tj.Gj,
        keyContainerClassName: tj.FV,
        starContainerClassName: tj.E1,
        boltAssetClassName: tj.j7,
        hammerAssetClassName: tj.Wv,
        keyAssetClassName: tj.rs,
        starAssetClassName: tj.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tE = i(682901);
function tT(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = ed.R.useConfig({ location: "nitro_home_reverse_trial_badge" }),
        a = ey.intl.string(ey.t.yhldRB),
        l = (0, eo.Zb)(t),
        { visibilityPercentageRef: r, visibilityPercentage: c } = eh(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion));
    return (0, o.jsx)("div", {
        className: m()(tp.kL, i),
        ref: s,
        children: (0, o.jsxs)("div", {
            className: tp.Gs,
            ref: r,
            children: [
                (0, o.jsxs)(q.B, {
                    align: "start",
                    gap: 24,
                    className: tp.E2,
                    children: [
                        (0, o.jsxs)(q.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                n ? (0, o.jsx)(eA, { text: a }) : (0, o.jsx)(eb, { text: a }),
                                (0, o.jsx)(ez, { children: ey.intl.format(ey.t.FwjP6W, { days: l }) }),
                                (0, o.jsx)("div", {
                                    className: tp.X8,
                                    children: (0, o.jsx)(Z.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: ey.intl.string(ey.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, o.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tp.oF,
                            children: [
                                (0, o.jsx)(eC.A, {
                                    size: "md",
                                    buttonTextOverride: ey.intl.string(ey.t["2+luBl"]),
                                    iconOverride: J.NitroWheelIcon,
                                    variantOverride: "expressive",
                                }),
                                (0, o.jsx)(Q.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ey.intl.string(ey.t.Af7ye6),
                                    onClick: () => (0, en.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, o.jsx)("div", { className: tp.Hk, children: (0, o.jsx)(tb, { containerVisibilityPercentage: c }) }),
            ],
        }),
    });
}
function tI(e) {
    let {
            className: t,
            buttonVisibilityRef: s,
            userDiscountOffer: n,
            discountedPrice: a,
            premiumSubscription: l,
            analyticsLocations: r,
            headingTop: c,
            showPill: d,
            shouldShowReferralProgressBar: u,
            marketingBanner: x,
        } = e,
        { visibilityPercentageRef: h, visibilityPercentage: p } = eh(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = x ?? (u ? (0, o.jsx)(e5, {}) : null);
    return (0, o.jsx)("div", {
        className: m()(tp.kL, tp.Eg, t),
        ref: s,
        children: (0, o.jsxs)("div", {
            className: m()(tp.W2, tp.HQ),
            ref: h,
            children: [
                (0, o.jsxs)(q.B, {
                    align: "start",
                    gap: 32,
                    className: m()(tp.ZU, tp.GW),
                    children: [
                        d && c,
                        null != n.expiresAt &&
                            (0, o.jsx)(eS, {
                                expiresAt: n.expiresAt.toISOString(),
                                digitTextVariant: "body-lg/semibold",
                            }),
                        (0, o.jsxs)(q.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, o.jsx)(ez, {
                                    children: ey.intl.format(ey.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, o.jsx)(Z.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: ey.intl.format(ey.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, er.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, o.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, o.jsx)(Q.$, {
                                    variant: "expressive",
                                    icon: J.NitroWheelIcon,
                                    size: "md",
                                    text: ey.intl.string(ey.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = eD.g.CONFIRM_DISCOUNT),
                                            void (0, X.mM)(async () => {
                                                let { default: t } = await Promise.all([
                                                    i.e(489361),
                                                    i.e(227853),
                                                    i.e(470126),
                                                    i.e(149697),
                                                    i.e(128804),
                                                    i.e(60882),
                                                    i.e(71151),
                                                    i.e(286615),
                                                    i.e(735042),
                                                    i.e(311541),
                                                    i.e(795854),
                                                    i.e(870088),
                                                    i.e(300641),
                                                    i.e(747802),
                                                    i.e(966366),
                                                    i.e(795345),
                                                    i.e(153302),
                                                    i.e(807003),
                                                    i.e(88683),
                                                    i.e(983513),
                                                    i.e(216806),
                                                    i.e(363094),
                                                    i.e(324469),
                                                    i.e(70379),
                                                    i.e(417333),
                                                    i.e(127962),
                                                    i.e(517888),
                                                    i.e(959880),
                                                    i.e(174016),
                                                    i.e(22921),
                                                    i.e(11301),
                                                    i.e(861060),
                                                    i.e(364827),
                                                    i.e(626565),
                                                    i.e(486137),
                                                    i.e(80421),
                                                    i.e(206027),
                                                    i.e(393471),
                                                    i.e(177641),
                                                    i.e(678157),
                                                    i.e(223219),
                                                    i.e(40291),
                                                    i.e(544571),
                                                    i.e(523276),
                                                    i.e(812042),
                                                    i.e(729963),
                                                    i.e(830938),
                                                    i.e(538513),
                                                    i.e(325047),
                                                    i.e(50097),
                                                    i.e(320272),
                                                    i.e(594161),
                                                    i.e(435432),
                                                    i.e(492618),
                                                    i.e(80347),
                                                    i.e(52513),
                                                ]).then(i.bind(i, 336888));
                                                return (i) =>
                                                    (0, o.jsx)(t, {
                                                        ...i,
                                                        analyticsLocations: r,
                                                        initialStep: e,
                                                        premiumSubscription: l,
                                                    });
                                            })
                                        );
                                    },
                                }),
                                (0, o.jsx)(eI.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: ey.intl.string(ey.t["3KomGa"]),
                                }),
                            ],
                        }),
                        f,
                    ],
                }),
                (0, o.jsx)("div", {
                    className: m()(tp.y3, tp.Xx),
                    children: (0, o.jsx)(tA, { containerVisibilityPercentage: p }),
                }),
            ],
        }),
    });
}
function tC(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: s } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: c,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tv(),
        { analyticsLocations: m } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, ex.uF)(Y.oW.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eN.Dmq.CANCELED,
        h = null;
    if (null != x) {
        let { surface: e, id: t, promotionId: i, componentType: s } = x;
        h = (0, o.jsx)(eE.x, {
            componentId: t,
            componentType: s,
            promotionId: i,
            promotionBannerMarketingComponentFields: e,
        });
    }
    let p = (0, em.V)(),
        f = (0, eu.O)(),
        N = (0, z.U9)(f, tE.pe.TIER_2) ? tE.pe.TIER_2 : void 0,
        b = null != r && r.status !== eN.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, ei.A)(),
        T = E.isFractionalPremiumActive && !b && null == h && !l;
    if (i) return (0, o.jsx)(tT, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, o.jsxs)("div", {
                  className: tp.UJ,
                  children: [
                      (0, o.jsx)(eC.A, { size: "md", subscriptionTier: p?.subscriptionTrial?.skuId ?? N }),
                      (0, o.jsx)(eI.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: ey.intl.string(ey.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, o.jsx)(tf, {
            className: t,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: u,
            shouldShowReferralProgressBar: s,
            marketingBanner: h,
            heroButtons: e,
        });
    }
    return l && null != c && null != r
        ? (0, o.jsx)(tI, {
              className: t,
              buttonVisibilityRef: u,
              userDiscountOffer: c,
              discountedPrice: d,
              premiumSubscription: r,
              analyticsLocations: m,
              headingTop: n,
              showPill: a,
              shouldShowReferralProgressBar: s,
              marketingBanner: h,
          })
        : (0, o.jsx)(tf, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: s,
              marketingBanner: h,
          });
}
let [tR, tv] = (0, ea.A)(),
    t_ = function (e) {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, eo.ds)(),
            r = (0, ec.QQ)(),
            c = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            u = null != c && c.status === eN.Dmq.CANCELED && null != s,
            m = r && !u,
            x = ey.intl.string(ey.t.qYKftX),
            h = (0, eT.m)(),
            { fractionalState: p, endsAt: f } = (0, ei.A)(),
            N = (0, et.Ay)(f, et.yE.CREDITS_ENDS_IN),
            b = p !== tE.xc.NONE && !l,
            E = ed.R.useConfig({ location: "nitro_home_credits_badge" }, { autoTrackExposure: b });
        b && (m = !0);
        let T = d.useMemo(() => {
                if (!b) return (0, o.jsx)(eb, { text: x });
                let e = ey.intl.format(ey.t["yR+oDD"], {
                    helpCenterLink: el.A.getArticleURL(eN.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
                return (0, o.jsx)($.A, {
                    text: e,
                    "aria-label": e.toString(),
                    tooltipClassName: tp.YL,
                    position: "right",
                    children: (e) =>
                        (0, o.jsx)("div", {
                            ...e,
                            className: tp.V_,
                            children: (0, o.jsx)("div", {
                                className: tp.eL,
                                children: E ? (0, o.jsx)(eA, { text: N }) : (0, o.jsx)(eb, { text: N }),
                            }),
                        }),
                });
            }, [b, x, N, E]),
            I = d.useMemo(
                () => ({
                    headingTop: T,
                    showPill: m,
                    shouldShowChurnVariant: u,
                    premiumSubscription: c,
                    userDiscountOffer: s,
                    discountedPrice: n,
                    buttonVisibilityRef: i,
                }),
                [T, m, u, c, s, n, i],
            );
        return (0, o.jsx)(j.f5, {
            value: a,
            children: (0, o.jsx)(tR.Provider, {
                value: I,
                children: (0, o.jsx)(tC, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: h }),
            }),
        });
    };
var ty = i(435558),
    tP = i(308588),
    tS = i(24197),
    tD = i(28863),
    tM = i(212245),
    tO = i(19191),
    tk = i(597758),
    tU = i(412260),
    tL = i(316511);
function tG(e) {
    return null != e.effectiveEndDate ? e.effectiveEndDate.getTime() + 1 : null;
}
function tw(e, t) {
    let i = e.filter((e) => e > t);
    return i.length > 0 ? Math.min(...i) : null;
}
var tB = i(706778),
    tH = i(498470),
    tF = i(807098),
    tV = i(92551),
    tW = i(637706),
    tz = i(788883),
    tK = i(700556),
    tY = i(821874);
function tX(e) {
    let { id: t, sectionClassName: i, heading: s, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = tY.Ui;
    return (0, o.jsxs)("div", {
        id: t,
        className: i,
        children: [
            s,
            n,
            null != a ? (0, o.jsx)("div", { className: m()(r, null != n && tK.Jx, l), children: a }) : null,
        ],
    });
}
var tq = i(477106),
    tZ = i(762493);
function tJ(e) {
    let { component: t } = e,
        i = (function (e) {
            if ("nitroHomeSectionHeader" !== e.properties.properties.oneofKind) return null;
            let { nitroHomeSectionHeader: t } = e.properties.properties,
                i = e.getFormatVariableValues(ey.intl.currentLocale),
                s = (0, tV.n)(t.header, i),
                n = (0, tV.n)(t.subheader, i),
                a = s.ok ? s.content.trim() : "",
                l = n.ok ? n.content.trim() : "";
            return "" === a && "" === l ? null : { header: a, subheader: l };
        })(t);
    if (null == i) return null;
    let { header: s, subheader: n } = i,
        a = (0, tW.C)(t.surface.helpArticle, "");
    return (0, o.jsxs)(q.B, {
        gap: 8,
        className: tY.R_,
        children: [
            (0, o.jsx)(tz.A, { componentType: t.componentType, componentId: t.id, promotionId: t.promotionId }),
            "" !== s && (0, o.jsx)(eW.D, { variant: "nitro-sm", className: tK.U6, children: s }),
            ("" !== n || null != a) &&
                (0, o.jsxs)(Z.E, {
                    variant: "body-md/medium",
                    color: "text-subtle",
                    children: [
                        n,
                        null != a &&
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    "" !== n && " ",
                                    (0, o.jsx)(tD.Anchor, { href: a.url, children: a.linkText }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function tQ(e) {
    let { component: t } = e,
        { button: i, background: s, foreground: n, thirdPartyLogo: a } = t.surface,
        l = t.surface.description.trim(),
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        c = (0, tM.p)(),
        u = (0, tF.T)(s),
        m = null != u && "" !== u,
        x = (0, tF.T)(n, m),
        g = (0, tF.T)(a, m),
        h = (function (e) {
            if (null == e || e.buttonAction === tP.dz.UNSPECIFIED) return;
            let t = e.copy.trim();
            return "" !== t ? t : void 0;
        })(i),
        p = d.useMemo(
            () =>
                null != i
                    ? (0, tH.h)({
                          buttonAction: i.buttonAction,
                          deeplinkSection: i.deeplinkSection,
                          applicationId: i.navigableStorefrontApplicationId?.value,
                          shopCollectionId: i.shopCollectionId?.value,
                          giftModalDestination: i.giftModalDestination,
                          analyticsLocations: r,
                          analyticsLocation: c.location,
                      })
                    : void 0,
            [c.location, r, i],
        );
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(tz.A, { componentType: t.componentType, componentId: t.id, promotionId: t.promotionId }),
            (0, o.jsx)(tB.S, {
                id: `nitro-perk-card-${t.id}`,
                title: t.surface.header.trim(),
                description: "" !== l ? l : void 0,
                caption: null != g && "" !== g ? (0, o.jsx)("img", { src: g, alt: "" }) : void 0,
                primaryAsset: x ?? void 0,
                backgroundAssetUrl: m ? u : void 0,
                ctaText: h,
                onCtaClick: null != h ? p : void 0,
                containerClassName: tY.Nr,
            }),
        ],
    });
}
function t$() {
    var e;
    let t,
        i,
        s,
        n,
        a,
        l,
        r = (0, ex.uF)(Y.oW.NITRO_HOME_SECTION_HEADER),
        c =
            ((e = Y.oW.NITRO_PERK_CARD),
            d.useEffect(() => {
                (0, tk.BE)();
            }, []),
            (t = (0, g.yK)([tU.A, tO.A], () =>
                tU.A.getActiveMarketingComponentsBySurfaceUnprioritized(e).filter((e) =>
                    (0, tL.A)(tU.A.getMarketingPromotionForEligibility(e.promotionId), tO.A),
                ),
            )),
            (i = (0, g.yK)([tU.A], () => t.map((e) => tU.A.getMarketingPromotionForEligibility(e.promotionId)), [t])),
            (s = d.useMemo(
                () => [...i.map((e) => e?.endDate.getTime() ?? null), ...t.map(tG)].filter((e) => null != e),
                [t, i],
            )),
            (n = d.useCallback(() => tw(s, Date.now()), [s])),
            (a = d.useCallback(
                (e) => {
                    let t;
                    return (
                        !(function i() {
                            let n = Date.now(),
                                a = tw(s, n);
                            null == a ||
                                a - n >= ex.Th ||
                                (t = setTimeout(() => {
                                    (i(), e());
                                }, a - n));
                        })(),
                        () => clearTimeout(t)
                    );
                },
                [s],
            )),
            (l = d.useSyncExternalStore(a, n, n)),
            d.useMemo(
                () =>
                    t.filter((e, t) => {
                        var s;
                        return ((s = i[t]), !(null != s && (null == l || s.endDate.getTime() < l)));
                    }),
                [t, i, l],
            )),
        u = d.useMemo(() => {
            let e;
            return (
                (e = c.filter((e) => {
                    let { surface: t } = e;
                    return "" !== t.header.trim() && t.placements.includes(tS.U.NITRO_HOME);
                })),
                (0, ty.sortBy)(e, (e) => {
                    let { surface: t } = e;
                    return 0 === t.position ? 1 / 0 : t.position;
                })
            );
        }, [c]);
    return 0 === u.length
        ? null
        : (0, o.jsx)(tX, {
              id: null != r ? `nitro-perk-section-${r.id}` : void 0,
              sectionClassName: m()(tq.u, tZ.uW, tZ.Uv, tZ.qr),
              heading: null != r ? (0, o.jsx)(tJ, { component: r }) : null,
              gridClassName: tq.V,
              grid: u.map((e) => (0, o.jsx)(tQ, { component: e }, e.id)),
          });
}
var t0 = i(820284),
    t1 = i(742589),
    t2 = i(392943),
    t3 = i(521440),
    t6 = i(603202),
    t7 = i(673992);
let t8 = function () {
    return (0, o.jsx)(t0.A, {
        section: eN.JJy.NAVIGATION,
        children: (0, o.jsx)(t1.A, {
            className: m()(t6.TQ, t7.C$),
            transparent: !0,
            role: "navigation",
            children: (0, o.jsxs)("div", {
                className: t6.Wc,
                children: [
                    (0, o.jsxs)("div", {
                        className: t7.wk,
                        children: [
                            (0, o.jsx)(J.NitroWheelIcon, { colorClass: t7.tr }),
                            (0, o.jsx)("span", {
                                role: "img",
                                "aria-label": ey.intl.string(ey.t.Ipxkog),
                                className: t7.Ss,
                                children: (0, o.jsx)(t2.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: t6.MQ,
                        children: [
                            (0, o.jsx)(t3.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, o.jsx)(eI.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var t5 = i(325499),
    t9 = i(613412),
    t4 = i(885574),
    ie = i(993077),
    it = i(139286),
    ii = i(872725),
    is = i(920050),
    ia = i(51965),
    il = i(375776),
    ir = i(727811),
    ic = i(222652),
    io = i(831768),
    id = i(934353);
function iu(e) {
    let { openRewardModal: t } = e,
        i = (0, ic.z)();
    if (i.kind === ic.N.SUBSCRIBE)
        return (0, o.jsxs)("div", {
            className: id.R$,
            children: [
                (0, o.jsx)(eC.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tE.pe.TIER_2,
                }),
                (0, o.jsx)(Q.$, { variant: "secondary", size: "md", text: ey.intl.string(ey.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === ir.P.CLAIMED
            ? { text: ey.intl.string(io.default.Plwzgf) }
            : { text: ey.intl.string(ey.t.hvVgAZ) };
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)("div", {
                className: id.R$,
                children: [
                    (0, o.jsx)(ia.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: i.text,
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        onClick: i.onClick,
                        disabled: i.disabled,
                        loading: i.loading,
                    }),
                    (0, o.jsx)(Q.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: i.requestInProgress,
                    }),
                ],
            }),
            i.claimStatus === ir.P.CLAIM_IN_PROGRESS &&
                (0, o.jsxs)("div", {
                    className: id.ed,
                    children: [
                        (0, o.jsx)(t4.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: ey.intl.string(io.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function im(e) {
    let { glowing: t = !1 } = e;
    (0, it.A)({
        type: t9.ImpressionTypes.VIEW,
        name: t9.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: is.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: s } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = d.useCallback(() => {
            (0, X.mM)(async () => {
                let { default: e } = await Promise.all([i.e(878140), i.e(532203)]).then(i.bind(i, 15654));
                return (t) => (0, o.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, o.jsx)(ep.N, {
        theme: eN.NJ8.DARK,
        children: (e) =>
            (0, o.jsx)(j.f5, {
                value: s,
                children: (0, o.jsx)("div", {
                    className: m()(e, id.kL),
                    children: (0, o.jsx)(ii.A, {
                        cardType: ie.s.CUSTOM,
                        cardClassName: id.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, o.jsxs)("div", {
                            className: id.XF,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: id.j,
                                    children: [
                                        (0, o.jsx)("div", { className: id._g }),
                                        (0, o.jsx)("div", { className: id.$h }),
                                        (0, o.jsx)("div", { className: id.Rv }),
                                        (0, o.jsx)("div", { className: id.Lw }),
                                        (0, o.jsx)("div", { className: id.mR }),
                                    ],
                                }),
                                (0, o.jsxs)("div", {
                                    className: id.Qs,
                                    children: [
                                        (0, o.jsx)("img", {
                                            className: id.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, o.jsx)(eW.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: id.DD,
                                            children: ey.intl.string(io.default.RGT513),
                                        }),
                                        (0, o.jsx)(Z.E, {
                                            variant: "body-md/normal",
                                            color: "text-strong",
                                            className: id.h_,
                                            children: ey.intl.string(io.default["+pTnsf"]),
                                        }),
                                        (0, o.jsx)(iu, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var ix = i(7684),
    ig = i(112992);
let ih = () =>
    (0, o.jsxs)("div", {
        className: ix.X,
        children: [
            (0, o.jsx)("div", {
                className: ix.W,
                children: (0, o.jsx)(t4.CircleInformationIcon, { size: "xxs", color: eJ.A.colors.ICON_MUTED }),
            }),
            (0, o.jsx)(Z.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: ey.intl.string(io.default.Fs74z9),
            }),
        ],
    });
function ip(e) {
    let { className: t, containerClassName: i, glowing: s } = e,
        n = (0, ic.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === ic.N.SUBSCRIBE
                ? a
                : {
                      ...a,
                      ctaText: n.text,
                      ctaIcon: n.icon,
                      ctaIconPosition: n.iconPosition,
                      ctaDisabled: n.disabled,
                      ctaLoading: n.loading,
                      onCtaClick: n.onClick,
                  },
        r = n.kind === ic.N.DEFAULT && n.claimStatus === ir.P.CLAIM_IN_PROGRESS;
    return (0, o.jsx)(tB.S, {
        id: is.XBOX_PREMIUM_PERK_CARD_ID,
        title: ey.intl.string(io.default.UVL9tD),
        description: ey.intl.string(io.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, o.jsx)(ih, {}) : void 0,
        className: t,
        containerClassName: i,
        glowing: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, o.jsx)("img", { src: ig.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function iN(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, o.jsx)(j.f5, { value: t, children: (0, o.jsx)(ip, { ...e }) });
}
var iA = i(744082),
    ij = i(261995),
    ib = i(722793),
    iE = i(517846),
    iT = i(669700),
    iI = i(398523),
    iC = i(881373),
    iR = i(555393),
    iv = i(852218),
    i_ = i(52530),
    iy = i(116420),
    iP = i(88210),
    iS = i(612413);
i(675772);
var iD = i(749962),
    iM = i(691450),
    iO = i(116716),
    ik = i(12947),
    iU = i(524698),
    iL = i(45116),
    iG = i(679502);
let iw = "xgpp";
function iB(e) {
    let { card: t, backgroundAssetUrl: i, blurTint: s, glowing: n, autoClickCta: a } = e;
    return (0, o.jsx)("div", {
        className: tK.JE,
        children: (0, o.jsx)(tB.S, {
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
function iH(e) {
    let { glowingSectionId: t, glowingPerkId: i } = e,
        s = (0, t5.b)("premium_subscriber_home_rewards");
    (0, iA.A)(tE.tv);
    let {
            logitechCard: n,
            steelseriesCard: a,
            youtubeCard: l,
            voicemodCard: r,
            macaronCard: c,
            codeBlurpleCard: u,
        } = (function () {
            let e,
                t,
                { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                s = ((e = (0, i_.eh)()), (t = (0, i_.fR)()), null != e ? e : t),
                n = (0, iC.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                a = iI.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                l = (0, iS.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                { enabled: r } = iy.A.useConfig({ location: "useThirdPartyPartnerPerkCards" }),
                c = (0, g.bG)([tU.A], () => tU.A.getPromotionsByPartner(iv.uV).recurring.length > 0),
                u = null === (0, iR.N)(),
                m = (0, ij.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: x, nDaysInMonth: h } = (0, d.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, d.useMemo)(() => {
                let e = n
                        ? {
                              id: is.LOGITECH_3PP_CARD_ID,
                              title: ey.intl.string(iM.default.OlObRa),
                              description: ey.intl.format(iM.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: el.A.getArticleURL(eN.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: x.getDate() / h,
                              ctaText: ey.intl.string(ey.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iP.P)({
                                      partnerIds: [iv.XY],
                                      title: ey.intl.string(iM.default["2I7nK+"]),
                                      subtitle: ey.intl.format(iM.default.W8jOD0, {
                                          termsUrl: el.A.getArticleURL(eN.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, o.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: iv.XY },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    t = a
                        ? {
                              id: is.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: ey.intl.string(ey.t.m7PucM),
                              description: ey.intl.format(ey.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, o.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: x.getDate() / h,
                              ctaText: ey.intl.string(ey.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iP.P)({
                                      partnerIds: [iv.KS],
                                      title: ey.intl.string(ey.t["7ioAjs"]),
                                      subtitle: ey.intl.format(ey.t.LOYRxB, {
                                          helpCenterLink: el.A.getArticleURL(eN.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: iv.KS },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null;
                return {
                    logitechCard: e,
                    steelseriesCard: t,
                    youtubeCard: l
                        ? {
                              id: is.YOUTUBE_3PP_CARD_ID,
                              title: ey.intl.string(iU.default["BdIVB+"]),
                              description: ey.intl.format(iU.default["cCl3+a"], {
                                  discountPercentage: 20,
                                  months: 6,
                                  helpCenterUrl: el.A.getArticleURL(eN.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, o.jsx)("img", { src: iG.A, alt: "YouTube Premium" }),
                              ctaText: ey.intl.string(iD.default.fcopjf),
                              onCtaClick: () =>
                                  (0, iP.P)({
                                      partnerIds: [iv.NC],
                                      analyticsLocations: i,
                                      title: ey.intl.string(iU.default.TDZUui),
                                      subtitle: ey.intl.format(iU.default.dueYf1, {
                                          helpCenterUrl: el.A.getArticleURL(eN.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          iT.Ay.fireSurveyAction(iE.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: iv.NC },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    voicemodCard:
                        r && c
                            ? {
                                  id: is.VOICEMOD_3PP_CARD_ID,
                                  title: ey.intl.string(ik.default.pkGxhZ),
                                  description: ey.intl.string(ik.default.Gspm9q),
                                  pillText: ey.intl.string(ey.t.y2b7CA),
                                  subscriptionRequired: !0,
                                  isThirdPartyPerk: !0,
                                  caption: (0, o.jsx)("img", { src: iL.A, alt: "Voicemod" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/d78c7ca47e2f2bf66dcc2fb12a7b190392672d4c44d6138f26b011f8bd923fff.png",
                                  progress: x.getDate() / h,
                                  ctaText: ey.intl.string(iO.default.vlafDc),
                                  onCtaClick: () =>
                                      (0, iP.P)({
                                          partnerIds: [iv.uV],
                                          title: ey.intl.string(ik.default.AX5oOl),
                                          subtitle: ey.intl.format(iO.default.fqtaGq, {
                                              termsUrl: el.A.getArticleURL(eN.MVz.VOICEMOD_PROMOTION),
                                          }),
                                          analyticsLocations: i,
                                      }),
                                  analyticsOptions: { thirdPartyPartner: iv.uV },
                                  ctaDisabled: u,
                                  ctaLoading: u,
                              }
                            : null,
                    macaronCard: m,
                    codeBlurpleCard: s,
                };
            }, [m, s, i, x, n, h, a, l, r, c, u]);
        })(),
        { phase: x } = (0, ij.vc)({ location: "NitroRewardsSection" }),
        h =
            null != c
                ? {
                      card: c,
                      backgroundAssetUrl:
                          x === ib.H.PHASE_ONE
                              ? "https://cdn.discordapp.com/assets/content/dacaa1d04c91ae0beefcbce25518899d11a943e10437ded70a6d594a03cf9535.png"
                              : "https://cdn.discordapp.com/assets/content/d6bc70e4b19392250948d59f11fcdb7360b2ed7fa636f8d9ab30c199a728a7c6.png",
                      blurTint: "#001E73",
                  }
                : null != l
                  ? {
                        card: l,
                        backgroundAssetUrl:
                            "https://cdn.discordapp.com/assets/content/6936886d1c55035bd3f56b7594d80dd08e7d3e859be8630f3ef667b338a1dd78.webp",
                        blurTint: "#3E000C",
                    }
                  : null,
        p = null != h ? h.card.id : null,
        f = s && null == h,
        N =
            s ||
            null != n ||
            null != a ||
            null != u ||
            (null != c && c.id !== p) ||
            (null != l && l.id !== p) ||
            null != r,
        b = null;
    return (null != h
        ? (b = (0, o.jsx)(iB, {
              card: h.card,
              backgroundAssetUrl: h.backgroundAssetUrl,
              blurTint: h.blurTint,
              glowing: t === iw || i === h.card.id,
              autoClickCta: i === h.card.id,
          }))
        : f && (b = (0, o.jsx)("div", { className: tK.JE, children: (0, o.jsx)(im, { glowing: t === iw }) })),
    null != b || N)
        ? (0, o.jsx)(tX, {
              id: iw,
              sectionClassName: m()(tZ.uW, tZ.Uv, tZ.qr),
              heading: (0, o.jsx)(eW.D, {
                  variant: "nitro-sm",
                  className: m()(tY.R_, tK.U6),
                  children: ey.intl.string(ey.t.NG1e6l),
              }),
              beforeGrid: b,
              grid: N
                  ? (0, o.jsxs)(o.Fragment, {
                        children: [
                            null != r && (0, o.jsx)(tB.S, { ...r, containerClassName: tY.Nr, glowing: i === r.id }),
                            null != u && (0, o.jsx)(tB.S, { ...u, containerClassName: tY.Nr, glowing: i === u.id }),
                            null != c &&
                                c.id !== p &&
                                (0, o.jsx)(tB.S, {
                                    ...c,
                                    containerClassName: tY.Nr,
                                    glowing: i === c.id,
                                    autoClickCta: i === c.id,
                                }),
                            null != l &&
                                l.id !== p &&
                                (0, o.jsx)(tB.S, {
                                    ...l,
                                    containerClassName: tY.Nr,
                                    glowing: i === l.id,
                                    autoClickCta: i === l.id,
                                }),
                            s &&
                                (0, o.jsx)(iN, {
                                    containerClassName: tY.Nr,
                                    glowing: i === is.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != n && (0, o.jsx)(tB.S, { ...n, containerClassName: tY.Nr, glowing: i === n.id }),
                            null != a && (0, o.jsx)(tB.S, { ...a, containerClassName: tY.Nr, glowing: i === a.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var iF = i(313133),
    iV = i(67423);
let iW = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, tt.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsx)(te.animated.div, {
        className: m()(iF.iE, { [iF.q4]: !t }),
        style: r,
        children: (0, o.jsxs)("div", {
            className: iF.iJ,
            children: [
                (0, o.jsx)("img", { alt: "", src: iV, className: iF.oU }),
                (0, o.jsxs)("div", {
                    className: iF.iQ,
                    children: [
                        (0, o.jsx)(eW.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: ey.intl.format(ey.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ey.intl.format(ey.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, er.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, o.jsx)(Q.$, {
                    variant: "expressive",
                    icon: J.NitroWheelIcon,
                    size: "md",
                    text: ey.intl.string(ey.t.zrCzVB),
                    onClick: () =>
                        void (0, X.mM)(async () => {
                            let { default: e } = await Promise.all([
                                i.e(489361),
                                i.e(227853),
                                i.e(470126),
                                i.e(149697),
                                i.e(128804),
                                i.e(60882),
                                i.e(71151),
                                i.e(286615),
                                i.e(735042),
                                i.e(311541),
                                i.e(795854),
                                i.e(870088),
                                i.e(300641),
                                i.e(747802),
                                i.e(966366),
                                i.e(795345),
                                i.e(153302),
                                i.e(807003),
                                i.e(88683),
                                i.e(983513),
                                i.e(216806),
                                i.e(363094),
                                i.e(324469),
                                i.e(70379),
                                i.e(417333),
                                i.e(127962),
                                i.e(517888),
                                i.e(959880),
                                i.e(174016),
                                i.e(22921),
                                i.e(11301),
                                i.e(861060),
                                i.e(364827),
                                i.e(626565),
                                i.e(486137),
                                i.e(80421),
                                i.e(206027),
                                i.e(393471),
                                i.e(177641),
                                i.e(678157),
                                i.e(223219),
                                i.e(40291),
                                i.e(544571),
                                i.e(523276),
                                i.e(812042),
                                i.e(729963),
                                i.e(830938),
                                i.e(538513),
                                i.e(325047),
                                i.e(50097),
                                i.e(320272),
                                i.e(594161),
                                i.e(435432),
                                i.e(492618),
                                i.e(80347),
                                i.e(52513),
                            ]).then(i.bind(i, 336888));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: l,
                                    initialStep: eD.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var iz = i(761508),
    iK = i(151869),
    iY = i(62617),
    iX = i(387103);
function iq(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iX.A,
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let iZ =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function iJ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iZ,
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iQ = i(93712);
function i$(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iQ.A,
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i0 = i(345394);
function i1(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: i0.A,
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i2 = i(78211);
function i3(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i6 = i(95278);
function i7(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function i8(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i5 = i(996682);
function i9(e) {
    let { color: t = eJ.A.colors.ICON_STRONG, "aria-label": i, "aria-hidden": s, role: n, width: a, height: l } = e,
        r = d.useMemo(() => (0, iY.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, o.jsxs)("svg", {
        ...(0, i5.A)({ "aria-label": i, "aria-hidden": s, role: n }),
        style: r,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, o.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, o.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, o.jsx)("defs", {
                children: (0, o.jsx)("clipPath", {
                    id: "a",
                    children: (0, o.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function i4(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var se = i(78701);
function st(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: se.A,
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var si = i(462887),
    ss = i(736653),
    sn = i(462463),
    sa = i(219882),
    sl = i(105909),
    sr = i(208223),
    sc = i(731738),
    so = i(913379),
    sd = i(403362),
    su = i(286348),
    sm = i(923079),
    sx = i(631502),
    sg = (((l = {}).WHATS_NEW = "whats_new"), (l.FAVORITES = "favorites"), l),
    sh = i(696292),
    sp = i(914313),
    sf = i(321538),
    sN = i(892227),
    sA = i(81466),
    sj = i(17268),
    sb = i(749012);
let sE = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, H.F)();
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, sN.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, o.jsxs)("div", {
        className: sb.kL,
        children: [
            null != i &&
                (0, o.jsxs)("div", {
                    className: sb.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: sb.Pf,
                            children: [
                                (0, o.jsx)(sA.CalendarIcon, { size: "sm", color: eJ.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: ey.intl.string(sj.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ey.intl.format(sj.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, o.jsx)("div", { className: sb.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, o.jsxs)("div", {
                    className: sb.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: sb.Pf,
                            children: [
                                (0, o.jsx)(eZ.OrbsIcon, { size: "sm", color: eJ.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: ey.intl.string(sj.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ey.intl.format(sj.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var sT = i(221596),
    sI = i(799544);
function sC(e) {
    var t;
    let i,
        s,
        n,
        a,
        l,
        r,
        { shouldShowBonusOrbsUX: c, multiplier: u } = (0, sp.lk)(sT.rE.NITRO_HOME_MARKETING),
        { isEligible: x, programReward: h } = (0, H.F)();
    return {
        nitroOrbsRewardsCard:
            ((t = (0, d.useMemo)(
                () =>
                    !x || null == h || null == h.reward_amount || h.reward_amount <= 0
                        ? null
                        : {
                              id: is.NITRO_ORBS_REWARDS_CARD_ID,
                              title: ey.intl.string(sj.default.hx5AFp),
                              description: ey.intl.format(sj.default.wq3CF2, { orbsCount: h.reward_amount }),
                              primaryAsset: "/assets/8f530451dce1ccc0.svg",
                              primaryAssetClassName: m()(sI.lH, sI.yK),
                              footerContent: (0, o.jsx)(sE, {}),
                              ctaText: ey.intl.string(sj.default.BxjHiu),
                              onCtaClick: () => (0, P.pX)(eN.BVt.COLLECTIBLES_SHOP_WITH_TAB(e7.G2.ORBS)),
                          },
                [x, h],
            )),
            (i = (0, sm.A)({ location: "useNorbsNitroOrbsRewardsCard" })),
            (s = (0, g.bG)([D.default], () => D.default.getCurrentUser())),
            (n = s?.perks != null),
            (l = null != (a = s?.premiumType) ? String(a) : "none"),
            (r = null != t),
            (0, d.useEffect)(() => {
                r &&
                    null != e &&
                    so.A.increment({
                        name: sc.K.NORBS_NITRO_ORBS_CARD_STATE,
                        tags: [`experience:${i}`, `surface:${e}`, `perks_loaded:${n}`, `premium_tier:${l}`],
                    });
            }, [r, e, i, n, l]),
            (0, d.useMemo)(() => {
                if (null == t) return null;
                switch (i) {
                    case sm.m.DEFAULT:
                        return t;
                    case sm.m.DEPRECATED_XBOX:
                    case sm.m.REMOVED:
                    case sm.m.REMOVED_XBOX:
                        return null;
                    case sm.m.DEPRECATED:
                        return {
                            ...t,
                            title: ey.intl.string(sx.default.LG4Fft),
                            description: ey.intl.format(sx.default["69NJ0X"], { date: su.Ds }),
                            pillText: ey.intl.formatToPlainString(ey.t["7D8r4F"], {
                                expiryDate: su.Ds.toLocaleDateString(ey.intl.currentLocale, {
                                    month: "short",
                                    day: "numeric",
                                }),
                            }),
                            footerContent: void 0,
                        };
                    default:
                        return (0, sd.xb)(i);
                }
            }, [t, i])),
        questOrbMultiplierCard: (0, d.useMemo)(
            () =>
                c
                    ? {
                          id: is.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ey.intl.string(ey.t.Csf5Ol),
                          description: ey.intl.format(ey.t.NpUfej, { bonusOrbMultiplier: u }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ey.intl.string(ey.t.jVcuVY),
                          onCtaClick: () => (0, sf.mA)({ fromContent: sh.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: sI.Nf,
                      }
                    : null,
            [c, u],
        ),
    };
}
var sR = i(975807),
    sv = i(95035),
    s_ = i(728666),
    sy = i(88001),
    sP = i(107198),
    sS = i(817577);
function sD() {
    (0, sR.A)(sy.TE);
}
function sM(e) {
    let t = (0, s_.O9)(),
        s = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, d.useCallback)(() => {
            n
                ? (0, X.mM)(async () => {
                      let { default: e } = await i.e(499709).then(i.bind(i, 516044));
                      return (t) => (0, o.jsx)(e, { ...t });
                  })
                : (0, y.A)({
                      subscriptionTier: tE.pe.TIER_2,
                      initialPlanId: tE.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, d.useMemo)(
        () =>
            t
                ? {
                      id: is.PREMIUM_GROUP_CARD_ID,
                      title: ey.intl.string(sP.default.YkvksF),
                      description: (0, o.jsxs)(o.Fragment, {
                          children: [
                              ey.intl.formatToPlainString(sP.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, sy.DP)(),
                              }),
                              (0, o.jsx)("div", {
                                  className: sI.LF,
                                  children: (0, o.jsx)(sv.A, {
                                      onClick: sD,
                                      children: ey.intl.string(sP.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ey.intl.string(ey.t.oW0eUd),
                      primaryAsset: sS,
                      ctaIcon: J.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: ey.intl.string(ey.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sO = i(793943),
    sk = i(169099),
    sU = i(506988),
    sL = i(590202),
    sG = i(332560),
    sw = i(62234),
    sB = i(324061),
    sH = i(701256),
    sF = i(804564),
    sV = i(818349),
    sW = i(419490),
    sz = i(424739),
    sK = i(572164),
    sY = i(271597),
    sX = i(815460),
    sq = i(464132),
    sZ = i(683825);
function sJ() {
    "auto" === (0, sV.r)((0, sK.T)(), sW.Ay.getEnableAutoclipping())
        ? (0, sY.p)()
        : (0, sX.C)({ variant: "mode_picker", source: "nitro_home_perk_card" });
}
var sQ = i(757036),
    s$ = i(621488),
    s0 = i(70283),
    s1 = i(643056),
    s2 = i(470739),
    s3 = i(945810);
let s6 = (0, s3.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s7 = i(655752),
    s8 = i(764231),
    s5 = i(627380),
    s9 = i(30084),
    s4 = i(814014),
    ne = i(714206);
let nt =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    ni =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    ns =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function nn() {
    let e,
        t,
        i,
        s,
        n,
        a,
        l,
        r,
        c,
        u,
        x,
        h,
        p,
        f,
        N,
        b,
        E,
        T,
        I,
        { shouldCountOrbsCardState: C = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { analyticsLocations: R } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        v = (0, sn.A)({ analyticsLocations: R }),
        _ = (0, sn.A)({ analyticsLocations: R, shouldOpenDisplayNameStyles: !0 }),
        y = (0, d.useCallback)(() => {
            (0, en.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        P =
            ((e = (0, g.bG)([D.default], () => D.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (i = (function (e) {
                let { location: t } = e;
                return s6.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (s = (0, s1.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, sl.$F)()),
            (a = (0, sl.Xb)()),
            (l = n?.status === sl.Wo.UPCOMING || t),
            (r = n?.status === sl.Wo.WITHHELD),
            (c = l || r),
            (u = (0, sr.N)(n?.id)),
            (x = (function () {
                let e = (0, sl.$F)(),
                    t = (0, s7.P)(),
                    i = (0, sl.Xb)();
                if (null == e || null == t || null == i || e.status === sl.Wo.WITHHELD) return null;
                let s = ev()(),
                    n = ev()(i),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / r));
            })()),
            (h = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion) && !c),
            (p = (0, s5.t)()),
            (f = (0, s7.P)()),
            (0, d.useMemo)(() => {
                let e,
                    l = null != f ? ey.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, s8.T)(tE.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === sl.Wo.UPCOMING
                              ? ey.intl.formatToPlainString(ey.t.a1eKDi, { days: p?.days ?? 0 })
                              : n.status === sl.Wo.WITHHELD
                                ? ((0, s8.T)(n.id, n.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return ey.intl.formatToPlainString(ey.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return ey.intl.formatToPlainString(ey.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(p, l) ??
                                  (0, s8.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != u ? (r = c || h ? u.standard : u.ambientLarge) : t && (r = ne),
                    {
                        id: is.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? ey.intl.string(n.nameUnformattedNitro) : t ? ey.intl.string(ey.t.tx9Fvw) : "",
                        pillText: ey.intl.string(ey.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: m()(s4.pq, { [s4.rX]: c, [s4.kE]: h }),
                        caption: null != a ? ey.intl.formatToPlainString(ey.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: x ?? void 0,
                        ctaText: ey.intl.string(ey.t.jVcuVY),
                        onCtaClick: () => {
                            i && s
                                ? (0, s2.openBadgeDirectoryModal)({ initialBadgeId: s0.$.PREMIUM_TENURE })
                                : (0, s9.D)({ analyticsLocations: R });
                        },
                    }
                );
            }, [n, u, c, h, a, x, t, p, f, R, i, s])),
        { nitroOrbsRewardsCard: S, questOrbMultiplierCard: M } = sC(C ? sg.WHATS_NEW : null),
        O =
            ((N = (0, sQ.L)(tE.PremiumTypes.TIER_2)),
            (b = (0, sa.rX)()),
            (0, d.useMemo)(
                () =>
                    N && b
                        ? {
                              id: is.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: ey.intl.string(s$.default["/cV3ka"]),
                              description: ey.intl.string(s$.default.H523FI),
                              primaryAsset: (0, o.jsx)(i2.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [N, b],
            )),
        k = sM(R),
        U =
            ((E = (0, sz.H)("autoclips_ea:nitro_home_tile")),
            (T = "auto" === (0, sq.U)().value),
            (0, d.useMemo)(
                () =>
                    E
                        ? {
                              id: is.AUTOCLIPS_CARD_ID,
                              title: ey.intl.string(sZ.default["5VA1HL"]),
                              description: ey.intl.string(sZ.default.TvE3md),
                              primaryAsset: (0, o.jsx)(sF.f, { alt: "", ariaHidden: !0 }),
                              ctaText: ey.intl.string(T ? ey.t.RzWDqY : ey.t.uw9zI7),
                              ctaVariant: T ? "secondary" : void 0,
                              onCtaClick: sJ,
                          }
                        : null,
                [E, T],
            )),
        L =
            ((I = (0, sB.A)("useHexagonCampaignWhatsNewPerkCard")),
            d.useMemo(
                () =>
                    I
                        ? {
                              id: is.HEXAGON_CAMPAIGN_CARD_ID,
                              pillText: ey.intl.string(ey.t.y2b7CA),
                              title: ey.intl.string(sH.default["fShp/D"]),
                              description: ey.intl.string(sH.default.MDycja),
                              primaryAsset: (0, o.jsx)(sk.r, { alt: "", ariaHidden: !0, width: 256 }),
                              ctaText: ey.intl.string(ey.t.uw9zI7),
                              onCtaClick: () => {
                                  ((0, sG.iM)({
                                      content: sU.uF.NITRO_HOME_PERK_CARD,
                                      questContentCTA: sL.Cy.OPEN_AD_PERK_MODAL,
                                  }),
                                      (0, sw.v6)());
                              },
                          }
                        : null,
                [I],
            ));
    return (0, d.useMemo)(() => {
        let e = [
                S,
                M,
                k,
                {
                    id: is.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ey.intl.string(ey.t.OLtTrt),
                    description: ey.intl.string(ey.t["di/pXR"]),
                    onCtaClick: _,
                    ctaText: ey.intl.string(ey.t.jVcuVY),
                    primaryAsset: nt,
                },
                {
                    id: is.CLIENT_THEMES_CARD_ID,
                    title: ey.intl.string(ey.t.acc6h6),
                    description: ey.intl.formatToPlainString(ey.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: ns,
                    ctaText: ey.intl.string(ey.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sO.nf)(sO.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: is.PERMADECOS_CARD_ID,
                    title: ey.intl.string(ey.t.L14NZN),
                    description: ey.intl.string(ey.t.eCZkAI),
                    primaryAsset: (0, o.jsx)(st, { alt: "", ariaHidden: !0 }),
                    ctaText: ey.intl.string(ey.t.jVcuVY),
                    onCtaClick: v,
                },
                {
                    id: is.CUSTOM_APP_ICONS_CARD_ID,
                    title: ey.intl.string(ey.t["GU+wqh"]),
                    description: ey.intl.string(ey.t["1uPk1Z"]),
                    primaryAsset: ni,
                    ctaText: ey.intl.string(ey.t.y9TxXV),
                    onCtaClick: y,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            i = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, P),
            null != O && e.splice(2, 0, O),
            null != U && e.splice(2, 0, U),
            null != L && e.splice(Math.min(2, e.length), 0, L),
            e.length > i && e.splice(i, e.length - i),
            e
        );
    }, [P, S, M, O, U, k, L, y, v, _]);
}
let na = "/assets/1eb1b74667b4c0f0.svg",
    nl = "/assets/983b60e4fcaf973b.svg";
var nr =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let nc = [
    { id: "bestof", label: () => ey.intl.string(ey.t.q1u7nQ) },
    { id: "appearance", label: () => ey.intl.string(ey.t.CUnZkZ) },
    { id: "upgrades", label: () => ey.intl.string(ey.t.KC5q8v) },
    { id: "vip", label: () => ey.intl.string(ey.t.DjEAcv) },
];
var no = i(18290);
function nd(e) {
    return e.id;
}
function nu(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, ss.DP)(),
                t = (0, sl.Lh)(),
                i = (0, sr.N)(t)?.standard ?? null,
                { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                n = (0, d.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: s });
                }, [s]),
                a = (0, d.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: s });
                }, [s]),
                l = (0, d.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: s });
                }, [s]),
                r = (0, d.useCallback)(() => {
                    (0, P.pX)(eN.BVt.COLLECTIBLES_SHOP);
                }, []),
                c = (0, d.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.SOUNDBOARD_CATEGORY, { analyticsLocations: s });
                }, [s]),
                u = (0, sn.A)({ analyticsLocations: s }),
                m = (0, sn.A)({ analyticsLocations: s, shouldOpenDisplayNameStyles: !0 }),
                x = nn({ shouldCountOrbsCardState: !1 }),
                g = (0, d.useMemo)(() => x.map((e) => e?.id), [x]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: p } = sC(sg.FAVORITES),
                f = sM(s),
                N = (0, d.useMemo)(
                    () => [
                        {
                            id: is.SERVER_BOOSTS_CARD_ID,
                            title: ey.intl.formatToPlainString(ey.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ey.intl.formatToPlainString(ey.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: a,
                            primaryAsset: (0, o.jsx)(iq, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != f ? { ...f, categories: ["bestof"] } : null,
                        {
                            id: is.PROFILES_CARD_ID,
                            title: ey.intl.string(ey.t.xDRab3),
                            description: ey.intl.string(ey.t.yn6fWA),
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, o.jsx)(iJ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: is.HD_VIDEO_CARD_ID,
                            title: ey.intl.string(ey.t["/mQ5gg"]),
                            description: ey.intl.string(ey.t["7WwAXh"]),
                            primaryAsset: (0, o.jsx)(i$, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: is.CLIENT_THEMES_CARD_ID,
                            title: ey.intl.string(ey.t.acc6h6),
                            description: ey.intl.formatToPlainString(ey.t.WQazjs, { themeCount: 20 }),
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: n,
                            primaryAsset: ns,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: is.MORE_EMOJIS_CARD_ID,
                            title: ey.intl.string(ey.t.D8vIDT),
                            description: ey.intl.string(ey.t.DRMecB),
                            primaryAsset: (0, o.jsx)(i1, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: is.LARGE_UPLOADS_CARD_ID,
                            title: ey.intl.string(ey.t.nL1WZV),
                            description: (0, sa.M6)({
                                legacyCopy: ey.intl.formatToPlainString(ey.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: ey.intl.formatToPlainString(ey.t.teOTfv, {
                                    maxFileSize: (0, er.EJ)(tE.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, o.jsx)(i2.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: is.CUSTOM_APP_ICONS_CARD_ID,
                            title: ey.intl.string(ey.t["GU+wqh"]),
                            description: ey.intl.string(ey.t["1uPk1Z"]),
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: ni,
                            categories: ["appearance"],
                        },
                        {
                            id: is.ENTRANCE_SOUNDS_CARD_ID,
                            title: ey.intl.string(ey.t.WJfCPi),
                            description: ey.intl.string(ey.t.liQKJR),
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: is.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ey.intl.string(ey.t.OLtTrt),
                            description: ey.intl.string(ey.t["di/pXR"]),
                            onCtaClick: m,
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            primaryAsset: nt,
                            categories: ["appearance"],
                        },
                        {
                            id: is.CUSTOM_SOUNDS_CARD_ID,
                            title: ey.intl.string(ey.t["Cu/oFd"]),
                            description: ey.intl.string(ey.t.czj2aa),
                            primaryAsset: (0, o.jsx)(i3, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: is.SPECIAL_STICKERS_CARD_ID,
                            title: ey.intl.string(ey.t.MQoVeb),
                            description: ey.intl.string(ey.t.HGCLZX),
                            primaryAsset: (0, o.jsx)("div", {
                                className: sI.Uc,
                                children: (0, o.jsx)(i6.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: is.SUPER_REACTIONS_CARD_ID,
                            title: ey.intl.string(ey.t.qERvAA),
                            description: ey.intl.string(ey.t.WkUWzx),
                            primaryAsset: (0, o.jsx)(i7, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: is.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ey.intl.string(ey.t.ssVDYQ),
                            description: ey.intl.string(ey.t.aUSRMa),
                            primaryAsset: (0, si.M)(e) ? na : nl,
                            categories: ["upgrades"],
                        },
                        {
                            id: is.EARLY_ACCESS_CARD_ID,
                            title: ey.intl.string(ey.t["g/KRY6"]),
                            description: ey.intl.string(ey.t.JzAmJc),
                            primaryAsset: (0, o.jsx)(i8, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: is.BADGE_CARD_ID,
                            title: ey.intl.string(ey.t.Bn3CtB),
                            description: ey.intl.string(ey.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, o.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, o.jsx)(i9, { color: eJ.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: is.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ey.intl.string(ey.t["MTD+7w"]),
                            description: ey.intl.string(ey.t.Bhs0s6),
                            ctaText: ey.intl.string(ey.t.dBJVnZ),
                            onCtaClick: r,
                            primaryAsset: (0, o.jsx)(i4, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != p ? { ...p, categories: ["vip"] } : null,
                        {
                            id: is.PERMADECOS_CARD_ID,
                            title: ey.intl.string(ey.t.L14NZN),
                            description: ey.intl.string(ey.t.eCZkAI),
                            primaryAsset: (0, o.jsx)(st, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, p, f, n, a, l, r, c, u, m],
                );
            return (0, d.useMemo)(() => N.filter((e) => null != e && !g.includes(e.id)), [N, g]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [n, a] = (0, d.useState)(s?.categories[0] ?? nr.BEST_OF_NITRO),
        l = nc.find((e) => e.id === n)?.label(),
        r = i.filter((e) => null != e && e.categories.includes(n));
    return (0, o.jsxs)("div", {
        className: no.uW,
        children: [
            (0, o.jsx)(eW.D, { variant: "nitro-sm", children: ey.intl.string(ey.t["Uh3+CA"]) }),
            (0, o.jsx)(iz.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: no.Lq,
                "aria-label": ey.intl.string(ey.t["Uh3+CA"]),
                children: nc.map((e) =>
                    (0, o.jsx)(iz.V.Item, { id: e.id, className: no.IC, children: e.label() }, e.id),
                ),
            }),
            (0, o.jsx)(
                iK.A,
                {
                    "aria-label": ey.intl.formatToPlainString(ey.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: no.jG,
                    items: r,
                    getItemKey: nd,
                    renderItem: (e, i) =>
                        (0, o.jsx)(tB.S, { ...e, glowing: t === e.id, containerClassName: no.Ui, listItemProps: i }),
                },
                n,
            ),
        ],
    });
}
var nm = i(72979);
let nx = function (e) {
    let { className: t } = e,
        i = (0, ss.DP)();
    return (0, o.jsx)("img", {
        className: m()(nm.D, t),
        src: (0, si.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var ng = i(684251);
let nh = function (e) {
    let { children: t } = e;
    return (0, o.jsxs)("div", {
        className: m()(ng.kL, ng.Gd, ng.Eg),
        children: [(0, o.jsx)(nx, {}), (0, o.jsx)(t8, {}), t],
    });
};
function np(e) {
    let { glowingPerkId: t = null } = e,
        i = nn();
    return (0, o.jsx)(tX, {
        sectionClassName: tY.uW,
        heading: (0, o.jsx)(eW.D, { variant: "nitro-sm", className: tY.R_, children: ey.intl.string(ey.t.Aw5DRm) }),
        grid: (0, o.jsx)(o.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured,
                    n = t === e.id;
                return (0, o.jsx)(
                    tB.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === is.YOUTUBE_3PP_CARD_ID,
                        featured: s,
                        containerClassName: m()(tY.Nr, { [tY.Nq]: s }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function nf(e, t, i, s) {
    !(function (e, t, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            l = d.useRef(!1);
        (d.useEffect(() => {
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
            d.useEffect(() => {
                t || (l.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], i, s);
}
var nN = i(92737);
let nA = "/assets/cd2be35d285d4675.svg",
    nj = (e) => {
        let { userId: t } = e,
            i = (0, x.zy)();
        (d.useEffect(() => {
            ((0, B.Ay)(), null != t && (0, V.A)(t));
        }, [t]),
            d.useEffect(() => {
                E(!0);
            }, []),
            (0, _.P)(v));
        let s = d.useRef(null),
            n = d.useRef(null),
            a = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, H.F)(),
            {
                scrollTargetId: c,
                glowingSectionId: u,
                glowingPerkId: p,
                scrollBlock: f,
                scrollInline: N,
            } = d.useMemo(() => {
                let e,
                    t = new URLSearchParams(i.search),
                    s = t.get("perk"),
                    n = t.get(nN.x),
                    a = null != n && "" !== n ? n : "" !== (e = i.hash.slice(1)) ? e : null;
                return null != s
                    ? { scrollTargetId: s, glowingPerkId: s, scrollBlock: "center", scrollInline: "center" }
                    : null != a
                      ? { scrollTargetId: a, glowingSectionId: a, scrollBlock: "start" }
                      : {};
            }, [i.search, i.hash]);
        nf(c ?? "", null != c, f, N);
        let [b, E] = d.useState(!1),
            T = (0, W.p)(),
            I = d.useRef(null),
            [C, R] = d.useState(!1),
            y = null != T && null != a && a.status === eN.Dmq.CANCELED,
            P = (0, z.iU)(tE.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !C && y,
            D = (0, g.bG)([F.A], () => (null != t ? F.A.getUserProfile(t) : null)),
            { analyticsLocations: M } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [U, L] = d.useState(!1);
        return null != D && (l || null != r)
            ? (0, o.jsxs)(w.Gt, {
                  className: m()(ng.xW, ng.Gd),
                  ref: s,
                  children: [
                      (0, o.jsx)(nh, {
                          children: (0, o.jsxs)(j.f5, {
                              value: M,
                              children: [
                                  (0, o.jsx)(G.L, {
                                      innerRef: I,
                                      onChange: (e) => R(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, o.jsx)(t_, {
                                          buttonVisibilityRef: I,
                                          className: ng.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, o.jsx)(t$, {}),
                                  (0, o.jsx)(np, { glowingPerkId: p }),
                                  (0, o.jsx)(iH, { glowingPerkId: p, glowingSectionId: u }),
                                  (0, o.jsx)(nu, { glowingPerkId: p }),
                                  (0, o.jsx)(K.A, {
                                      className: ng.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eN.liQ.NITRO_HOME, section: eN.JJy.GIFT_BANNER },
                                  }),
                                  (0, o.jsx)("div", { className: ng.hz }),
                                  (0, o.jsx)(G.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !U &&
                                              (k.default.track(eN.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: M,
                                              }),
                                              L(!0));
                                      },
                                      children: (0, o.jsx)("div", { ref: n, className: ng._Z }),
                                  }),
                                  (0, o.jsx)("img", {
                                      src: nA,
                                      className: ng.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ey.intl.string(ey.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      y &&
                          null != P &&
                          (0, o.jsx)(iW, {
                              isVisible: S && b,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, o.jsxs)("div", {
                  className: m()(ng.kL, ng.Lq, ng.TN, ng.Eg),
                  children: [(0, o.jsx)(t8, {}), (0, o.jsx)("div", { className: ng.S, children: (0, o.jsx)(h.y, {}) })],
              });
    };
var nb = i(589152),
    nE = i(851746),
    nT = i(727949),
    nI = i(926239);
let nC =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var nR = i(185062);
let nv = `${nC} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${nR.A} 3x`;
function n_(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iY.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: nC,
        srcSet: nv,
        className: (0, iY.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var ny = i(315629),
    nP = i(783420),
    nS = i(204413),
    nD = i(572079),
    nM = i(824069),
    nO = i(785007),
    nk = i(947910);
function nU(e) {
    let { value: t, planRadioOptions: i, className: s, ...n } = e,
        a = i.map((e) => {
            let i = e.value === t;
            return {
                name: (0, o.jsxs)("div", {
                    className: nk.VH,
                    children: [
                        i &&
                            null != e.badgeText &&
                            (0, o.jsx)("div", {
                                className: nk.fQ,
                                children: (0, o.jsx)(ef.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, o.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nk.qU,
                            children: [
                                (0, o.jsxs)(q.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nk.NI,
                                    children: [
                                        (0, o.jsx)(Z.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, o.jsx)(Z.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, o.jsxs)(q.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nk.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, o.jsx)(Z.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, o.jsx)(Z.E, {
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                className: nk.yD,
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
                radioBarClassName: m()(nk.tG, { [nk.uA]: i, [nk.hy]: i && e.useGradientSelectedBorder }),
            };
        });
    return (0, o.jsx)(nO.$d, {
        ...n,
        options: a,
        value: t,
        size: nO.r9.NOT_SET,
        className: m()(nk.ul, s),
        withTransparentBackground: !0,
    });
}
var nL = i(118751),
    nG = i(773669),
    nw = i(97352),
    nB = i(526292),
    nH = i(387278),
    nF = i(369827),
    nV = i(803496);
function nW(e) {
    let t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        i = (0, nF.L)(),
        s = t?.paymentSourceId ?? i,
        { priceOptions: n } = (0, nV.A)({
            activeSubscription: t,
            skuIDs: [(0, er.mH)(e)],
            paymentSourceId: s,
            isGift: !1,
        });
    return n;
}
function nz(e, t, i, s, n) {
    return t && i?.includes(e) === !0 && null != s && null != n && s !== n;
}
function nK(e) {
    let { expectedUsageInterval: t, usageInterval: i, discountDuration: s, regularPrice: n, discountedPrice: a } = e;
    return i !== t || null == n || null == a
        ? null
        : t === tE.Ff.YEAR
          ? ey.intl.format(ey.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : ey.intl.format(ey.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
}
var nY = i(614488);
function nX(e) {
    let { skuId: t, selectedPlanId: i, subscribeButtonProps: s } = e,
        n = null == i || !0 === s.disabled,
        a = null == i ? "secondary" : s.variant;
    return (0, o.jsx)(nP.A, {
        subscriptionTier: t,
        initialPlanId: i,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, o.jsx)(Q.$, {
                size: "md",
                fullWidth: !0,
                icon: J.NitroWheelIcon,
                text: s.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nq(e) {
    let { skuId: t, className: i, variant: s = "default" } = e,
        n = t === tE.pe.TIER_2,
        a = "settings" === s,
        l = (0, si.q)((0, ss.Ay)()),
        r = (0, em.V)(),
        c = r?.subscriptionTrial,
        u = c?.skuId === t,
        x = n && u && null != c,
        {
            planRadioOptions: h,
            selectedPlanId: p,
            setSelectedPlanId: f,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [i, s] = d.useState(null),
                n = tE.En[t],
                a = tE.zE[t],
                l = t === tE.pe.TIER_2,
                r = nW(t),
                c = (0, em.V)(),
                o = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, g.cf)(
                    [O.A],
                    () => {
                        let e = O.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, er.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tE.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tE.gD.PREMIUM_YEAR_TIER_0, tE.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                x = u === t,
                h = (0, eu.O)(),
                p = (0, nB.k5)(),
                f = (0, g.bG)([nG.default], () => nG.default.locale),
                N = (0, z.U9)(h, t),
                A = (0, z.N1)(n),
                j = (0, z.N1)(a),
                [b, E] = (0, g.yK)([nw.A], () => [nw.A.get(n), nw.A.get(a)], [n, a]),
                T = null != b ? (0, er.sS)(b, r) : null,
                I = null != E ? (0, er.sS)(E, r) : null,
                C =
                    N && h?.discount.amount != null && !p
                        ? ey.intl.formatToPlainString(ey.t.IAybsG, {
                              discount: (0, nL.l9)(f, Number(h.discount.amount) / 100),
                          })
                        : null,
                R = h?.discount?.planIds,
                v = nz(a, N, R, j, I),
                _ = nz(n, N, R, A, T),
                y = h?.discount.userUsageLimitInterval,
                P = h?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, nH.Cj)(E, !1, r),
                D = !_ || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== tE.pe.TIER_2 ? null : i && !s ? tE.En[t] : tE.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == i || (i === n && m) ? M : i,
                U = [
                    {
                        value: a,
                        primaryText: ey.intl.string(ey.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nK({
                                      expectedUsageInterval: tE.Ff.YEAR,
                                      usageInterval: y,
                                      discountDuration: P,
                                      regularPrice: I,
                                      discountedPrice: j,
                                  })
                                : null) ?? S,
                        secondaryText: v ? j : I,
                        secondarySubText: v ? I : null,
                        badgeText: v ? C : null,
                        useGradientSelectedBorder: l && (o || v || D),
                        isDisabled: x,
                    },
                    {
                        value: n,
                        primaryText: ey.intl.string(ey.t.DKzs96),
                        primarySubText: _
                            ? nK({
                                  expectedUsageInterval: tE.Ff.MONTH,
                                  usageInterval: y,
                                  discountDuration: P,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : T,
                        secondarySubText: _ ? T : null,
                        badgeText: _ ? C : null,
                        useGradientSelectedBorder: l && (o || _),
                        isDisabled: x || m,
                    },
                ],
                L = k === a ? v : k === n && _;
            return { planRadioOptions: U, selectedPlanId: k, setSelectedPlanId: s, shouldSuppressDiscountCta: N && !L };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: j } = (0, nD.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nS.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        E = (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nY.MY,
                    children: (0, o.jsx)(eW.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nY.ck,
                        children: n ? ey.intl.string(ey.t.lG6a5x) : ey.intl.string(ey.t["t9uG/o"]),
                    }),
                }),
                (0, o.jsx)(q.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nY.qT,
                    children: n
                        ? (0, o.jsx)(nI.ZP, {
                              featureSet: nI.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, o.jsx)(nI.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, o.jsx)(nM.K, {}),
            ],
        }),
        T = (0, o.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nY.Ux,
            children: [
                a ? (0, o.jsx)("div", { className: nY.zI, children: E }) : E,
                x
                    ? (0, o.jsx)("div", {
                          className: nY.qS,
                          role: "separator",
                          children: (0, o.jsx)(Z.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nY.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tE.WT.DAY:
                                          if (t % 7 == 0) return ey.intl.format(ey.t["1MYPH0"], { weeks: t / 7 });
                                          return ey.intl.format(ey.t.pYfIoO, { days: t });
                                      case tE.WT.MONTH:
                                          return ey.intl.format(ey.t["96hTLe"], { months: t });
                                      case tE.WT.YEAR:
                                          return ey.intl.format(ey.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(c.interval, c.intervalCount),
                          }),
                      })
                    : (0, o.jsx)("hr", { className: nY.yF }),
                (0, o.jsxs)("div", {
                    className: nY.qr,
                    children: [
                        (0, o.jsx)(nU, {
                            className: a ? nY.US : void 0,
                            planRadioOptions: h,
                            value: p ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, o.jsx)(nX, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        I = m()(nY.Nr, i, { [nY.Fw]: n });
    return n
        ? (0, o.jsxs)(ny.h, {
              color: "nitro-pink",
              className: I,
              children: [
                  !a &&
                      (0, o.jsx)("div", {
                          className: nY.kX,
                          "aria-hidden": !0,
                          children: (0, o.jsx)(n_, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, o.jsx)("div", { className: I, children: T });
}
function nZ(e) {
    let { className: t } = e,
        i = (0, si.q)((0, ss.Ay)()),
        s = nW(tE.pe.TIER_2),
        n = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, ew.A)({ userId: n?.id, size: eM._3.SIZE_32, animateOnHover: !0 }),
        r = (0, g.bG)([nw.A], () => nw.A.get(tE.gD.PREMIUM_GROUP_MONTH)),
        c = ey.intl.string(ey.t["2pG5Ga"]),
        d = (0, o.jsx)(nP.A, {
            subscriptionTier: tE.pe.TIER_2,
            initialPlanId: tE.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, o.jsx)(Q.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: J.NitroWheelIcon,
                    text: c,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        u = null;
    if (null != r)
        try {
            u = (0, er.sS)(r, s, !1, !1, !1);
        } catch {
            u = null;
        }
    return (0, o.jsx)("div", {
        className: m()(nY.Nr, t),
        children: (0, o.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nY.Ux,
            children: [
                (0, o.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nY.MY,
                    children: [
                        (0, o.jsx)(eW.D, {
                            variant: "nitro-md",
                            color: i ? "text-strong" : "text-overlay-light",
                            className: nY.ck,
                            children: ey.intl.string(sP.default.eSKiXk),
                        }),
                        null != n &&
                            (0, o.jsxs)(q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nY.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, o.jsx)("div", {
                                        className: nY.uA,
                                        children: (0, o.jsx)(eO.eu, {
                                            src: a,
                                            size: eM._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...l,
                                        }),
                                    }),
                                    (0, o.jsx)(q.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nY.VL,
                                        children: (0, o.jsxs)(Z.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-default",
                                            children: ["+", 5],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, o.jsx)(q.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nY.qT,
                    children: (0, o.jsx)(nI.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, o.jsx)("hr", { className: nY.yF }),
                (0, o.jsxs)("div", {
                    className: nY.qr,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nY.ec,
                            children: [
                                (0, o.jsx)(Z.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: ey.intl.string(sP.default.SvSwga),
                                }),
                                null == u
                                    ? (0, o.jsx)(h.y, { type: h.y.Type.PULSING_ELLIPSIS })
                                    : (0, o.jsx)(Z.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: i ? "text-strong" : "text-overlay-light",
                                          children: u,
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
function nJ(e) {
    let { innerRef: t, className: i, variant: s = "default" } = e,
        n = "settings" === s,
        { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, nI.pw)(t),
        r = (0, s_.PA)(),
        c = !n && r,
        d = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        u = { [nY.iR]: !d && !n };
    return (0, o.jsx)(j.f5, {
        value: a,
        children: (0, o.jsxs)(q.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: m()(nY.oB, i, { [nY.W0]: n }),
            children: [
                (0, o.jsx)(eW.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nY.op,
                    children: ey.intl.string(ey.t.vLz3Zs),
                }),
                (0, o.jsxs)("div", {
                    ref: l,
                    className: m()(nY.kR, { [nY.BQ]: c }),
                    children: [
                        (0, o.jsx)(nq, { skuId: tE.pe.TIER_0, className: m()(nY.rz, u), variant: s }),
                        (0, o.jsx)(nq, { skuId: tE.pe.TIER_2, className: m()(nY.Rv, u), variant: s }),
                        c && (0, o.jsx)(nZ, { className: m()(nY.zz, u) }),
                    ],
                }),
            ],
        }),
    });
}
var nQ = i(366010),
    n$ = i(303136);
let n0 = function (e) {
    let t,
        { className: i } = e,
        s = (0, e4.TM)(),
        n = (0, nQ.q)((0, ss.Ay)());
    return (
        (t = s
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, o.jsx)("div", {
            className: i,
            children: (0, o.jsx)(
                n$.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, o.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var n1 =
        (((c = {}).HOME = "home"),
        (c.WHATS_NEW = "whatsNew"),
        (c.BEST_OF_NITRO = "bestOfNitro"),
        (c.PLANS = "plans"),
        (c.COMPARE = "compare"),
        c),
    n2 = i(352756);
let n3 = function (e) {
    let { isVisible: t, subscriptionTier: i, isEligibleForBogoPromotion: s, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, tt.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eN.JJy.MARKETING_FLOATING_CTA };
    return (0, o.jsx)(te.animated.div, {
        className: m()(n2.iE, { [n2.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, o.jsxs)("div", {
            className: n2.UD,
            children: [
                (0, o.jsx)(eC.A, {
                    enableMarketingSubscribeCopyTest: !a,
                    size: "md",
                    subscriptionTier: i,
                    hasActivePromotion: !!s,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, o.jsx)(eI.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var n6 = i(573710);
let n7 = function () {
    let e = (0, e9.bG)([ee.Ay], () => ee.Ay.useReducedMotion);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)("div", {
                className: n6.BI,
                children: (0, o.jsx)(ta, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: ts.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, o.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: n6.Q,
                    }),
                }),
            }),
            (0, o.jsx)(tr, {
                isMotionReduced: e,
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
var n8 = i(989756);
function n5(e) {
    let { ref: t, ...i } = e,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, o.jsx)(j.f5, {
        value: s,
        children: (0, o.jsx)("div", {
            ref: t,
            className: n8.kL,
            children: (0, o.jsxs)("div", {
                className: n8.hQ,
                children: [
                    (0, o.jsx)(n7, {}),
                    (0, o.jsx)(eW.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: n8.RH,
                        children: ey.intl.string(ey.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
n5.displayName = "PremiumMarketingFooter";
var n9 = i(939249);
let n4 = function (e) {
    let { navBarSections: t, activeSectionId: i } = e,
        s = {
            [n1.HOME]: ey.intl.string(ey.t.uGRXjS),
            [n1.WHATS_NEW]: ey.intl.string(ey.t["mfcR/v"]),
            [n1.BEST_OF_NITRO]: ey.intl.string(ey.t.xQKkE8),
            [n1.PLANS]: ey.intl.string(ey.t.wyNMnm),
            [n1.COMPARE]: ey.intl.string(ey.t.pwD7If),
        },
        n = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, o.jsx)(t1.A, {
        className: t6.TQ,
        transparent: !0,
        children: (0, o.jsxs)("div", {
            className: t6.Wc,
            children: [
                (0, o.jsxs)("div", {
                    className: t6.wG,
                    children: [
                        (0, o.jsx)(J.NitroWheelIcon, { className: t6.nE, colorClass: t6.oG }),
                        (0, o.jsx)("div", {
                            className: t6.zc,
                            role: "tablist",
                            "aria-label": ey.intl.string(ey.t.O9MiXY),
                            children: a.map((e) => {
                                let t = i === e.id,
                                    n = s[e.id];
                                return (0, o.jsxs)(
                                    n9.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: t6.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, o.jsx)(Z.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, o.jsx)("div", { className: t6.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: t6.MQ,
                    children: [
                        null != n && (0, o.jsx)(t3.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, o.jsx)(eI.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var ae = i(713271),
    at = i(704333),
    ai = i(414499),
    as = i(597770),
    an = i(500060),
    aa = i(866665),
    al = i(406860),
    ar = i(870975),
    ac = i(698834);
function ao() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, al.A)({ boxType: il.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: at.ServerGridIcon, text: ey.intl.string(io.default.MUypiB) },
            { icon: ai.CloudIcon, text: ey.intl.string(io.default.ec5Rdd) },
            { icon: as.GiftIcon, text: ey.intl.string(io.default["9t2CzW"]), tooltip: io.default.AyECej },
            { icon: an.ScreenStreamIcon, text: ey.intl.string(io.default.R7YJAY) },
        ];
    return (0, o.jsx)(G.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, o.jsx)("div", {
            ref: e,
            className: ac.iE,
            children: (0, o.jsxs)("div", {
                className: ac.Nr,
                children: [
                    (0, o.jsxs)("div", {
                        className: ac.j,
                        children: [
                            (0, o.jsx)("div", { className: ac._g }),
                            (0, o.jsx)("div", { className: ac.$h }),
                            (0, o.jsx)("div", { className: ac.Rv }),
                            (0, o.jsx)("div", { className: ac.Lw }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: ac.CT,
                        children: [
                            (0, o.jsxs)("div", {
                                className: ac.Qs,
                                children: [
                                    (0, o.jsxs)("div", {
                                        children: [
                                            (0, o.jsx)(eW.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: ac.R_,
                                                children: ey.intl.string(io.default.rkt1aw),
                                            }),
                                            (0, o.jsxs)("div", {
                                                children: [
                                                    i.map((e) => {
                                                        let { icon: t, text: i, tooltip: s } = e;
                                                        return (0, o.jsxs)(
                                                            "div",
                                                            {
                                                                className: ac.yf,
                                                                children: [
                                                                    (0, o.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, o.jsx)(Z.E, {
                                                                        variant: "body-md/medium",
                                                                        color: "text-strong",
                                                                        children: i,
                                                                    }),
                                                                    null != s &&
                                                                        (0, o.jsx)("div", {
                                                                            className: ac.Jn,
                                                                            children: (0, o.jsx)(aa.m, {
                                                                                text: ey.intl.string(s),
                                                                                position: "top",
                                                                                children: (0, o.jsx)(
                                                                                    t4.CircleInformationIcon,
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
                                                    (0, o.jsx)("div", {
                                                        className: ac.xF,
                                                        children: (0, o.jsx)(eC.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tE.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: ac.WE,
                                        children: (0, o.jsx)(Z.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: ey.intl.format(io.default.KDKdWi, { termsLink: (0, ar.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, o.jsx)("div", {
                                className: ac.r1,
                                children: (0, o.jsx)("img", {
                                    className: ac.wm,
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
var ad = i(886205),
    au = i(65154),
    am = i(805573),
    ax = i(257920),
    ag = i(382702),
    ah = i(763180);
function ap() {
    let { trackViewed: e, trackInteracted: t } = (0, am.r)(
        tE.e.AUTOCLIPS_EA_NITRO_MARKETING_CARD_UPSELL,
        A.A.CLIPS_EA_NITRO_MARKETING_CARD,
    );
    return (
        d.useEffect(() => e(), [e]),
        (0, o.jsxs)("div", {
            className: ag.Nr,
            children: [
                (0, o.jsxs)("div", {
                    className: ag.pq,
                    children: [
                        (0, o.jsxs)("div", {
                            className: ag.Z,
                            children: [
                                (0, o.jsx)("div", {
                                    children: (0, o.jsx)(ef.E, {
                                        type: "early_access",
                                        variant: "expressive",
                                        icon: J.NitroWheelIcon,
                                    }),
                                }),
                                (0, o.jsx)(eW.D, {
                                    variant: "heading-xxl/semibold",
                                    color: "text-strong",
                                    children: ey.intl.string(sZ.default.MtIbFp),
                                }),
                                (0, o.jsx)(Z.E, {
                                    variant: "body-md/normal",
                                    color: "text-subtle",
                                    children: ey.intl.string(sZ.default.hXM4Ae),
                                }),
                            ],
                        }),
                        (0, o.jsx)(Q.$, {
                            variant: "secondary",
                            size: "md",
                            icon: au.CirclePlayIcon,
                            text: ey.intl.string(sZ.default.wNHvBT),
                            onClick: function () {
                                (t("watch_video"), (0, ax.z)("ClipsEarlyAccessCard"));
                            },
                        }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: ag.LY,
                    children: (0, o.jsx)("img", { className: ag.ot, src: ah.A, alt: "", "aria-hidden": !0 }),
                }),
            ],
        })
    );
}
var af = i(734066),
    aN = i(750338),
    aA = i(186961),
    aj = i(505051);
function ab(e) {
    let {
        className: t,
        boxLayout: i,
        title: s,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, o.jsxs)("div", {
        className: m()(aj.boxBackdrop, t),
        children: [
            (0, o.jsx)(eW.D, {
                className: aj.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: s,
            }),
            null != r && (0, o.jsx)("div", { className: aj.highlightBento, children: r }),
            (0, o.jsx)("div", {
                className: aj.bentoBoxesGrid,
                children: i.flatMap((e, t) => {
                    let i;
                    switch (e.length) {
                        case 3:
                            i = aA.A0.SMALL;
                            break;
                        case 2:
                            i = aA.A0.MEDIUM;
                            break;
                        default:
                            i = aA.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, o.jsx)(
                            aN.A,
                            { index: t + +!!l, ...e, size: i, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let aE = d.memo(function (e) {
        let t,
            i = (0, t5.b)("premium_marketing_bento"),
            s = (0, iS.mh)({ location: "premium_marketing_bento" }),
            { enabled: n } = (0, ij.vc)({ location: "premium_marketing_bento" }),
            { enabled: a } = ad.A.useConfig({ location: "premium_marketing_bento" }),
            l = i && !s && !(n && a),
            { whatsNewBoxes: r } = (0, aA.Ay)(l),
            c = ((t = (0, af.Vl)()), (0, sz.H)("autoclips_ea:nitro_marketing_card", !t));
        return (0, o.jsx)(ab, {
            boxLayout: r,
            title: ey.intl.string(ey.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento:
                c || l
                    ? (0, o.jsxs)(o.Fragment, { children: [c && (0, o.jsx)(ap, {}), l && (0, o.jsx)(ao, {})] })
                    : null,
            ...e,
        });
    }),
    aT = d.memo(function (e) {
        let { bestOfBoxes: t } = (0, aA.Ay)();
        return (0, o.jsx)(ab, { boxLayout: t, title: ey.intl.string(ey.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    aI = (0, s3.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var aC = i(236834),
    aR = i(540504);
function av(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, ew.A)({ userId: t?.id, size: eM._3.SIZE_24, animateOnHover: !0 });
    return (0, o.jsx)("div", {
        className: aR.$6,
        children: (0, o.jsxs)("div", {
            className: aR.sc,
            children: [
                (0, o.jsx)("div", {
                    className: aR.kR,
                    children: (0, o.jsx)(eO.eu, { src: i, "aria-label": t.username, size: eM._3.SIZE_32, ...s }),
                }),
                (0, o.jsx)(eW.D, {
                    variant: "heading-xs/medium",
                    className: aR.FS,
                    color: "text-strong",
                    children: ey.intl.format(ey.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var a_ = i(579245),
    ay = i(369805);
let aP = function (e) {
    let { isSettings: t = !1 } = e,
        i = (0, em.V)(),
        s = (0, ay.A)(),
        n = !t && null != i && null != s,
        a = ed.R.useConfig({ location: "nitro_marketing_trial_badge" }, { autoTrackExposure: n });
    return null == s ? null : n && a ? (0, o.jsx)(eA, { text: s }) : (0, o.jsx)(eb, { text: s });
};
function aS() {
    let e = (0, g.bG)([nw.A], () => nw.A.getForSkuAndInterval((0, er.mH)(tE.pe.TIER_0), tE.WT.MONTH));
    return null != e ? (0, er.sS)(e) : "\u2026";
}
var aD = i(508556);
let aM = function (e) {
    let { containerVisibilityPercentage: t, variant: i = "default" } = e,
        s = "settings" === i,
        n = (0, e9.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        a = (0, e4.TM)();
    return (0, o.jsxs)("div", {
        "aria-hidden": !0,
        className: m()(aD.YU, { [aD.W0]: s }),
        children: [
            (0, o.jsx)(tu, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: aD.wG,
                assetClassName: aD.lu,
                variant: i,
            }),
            (0, o.jsx)(tr, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: aD.nJ,
                carContainerClassName: aD.IN,
                hammerContainerClassName: aD.Gj,
                keyContainerClassName: aD.FV,
                starContainerClassName: aD.E1,
                boltAssetClassName: aD.j7,
                carAssetClassName: aD.or,
                hammerAssetClassName: aD.Wv,
                keyAssetClassName: aD.rs,
                starAssetClassName: aD.OY,
                animateStar: !s,
            }),
        ],
    });
};
var aO = i(14057);
let ak = d.memo(function (e) {
    let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: s, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        c = aS(),
        d = aI.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        u = (0, aC.A)(),
        x = null != u,
        { visibilityPercentageRef: h, visibilityPercentage: p } = eh(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = (0, nb.b)(),
        N = !x && f.length > 0,
        b = (0, ex.uF)(Y.oW.MARKETING_PAGE_BANNER),
        E = null != b,
        T = (0, nB.ar)() && !E,
        I = (0, eu.O)(),
        C = (null != I && tE.U4.includes(I.discountId)) || E;
    return (0, o.jsx)(j.f5, {
        value: r,
        children: (0, o.jsxs)("div", {
            ref: n,
            className: m()(aO.kL, t, { [aO.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, o.jsx)(n0, { className: aO.kv }),
                (0, o.jsx)("div", {
                    ref: h,
                    children: (0, o.jsxs)("div", {
                        className: aO.hQ,
                        children: [
                            (0, o.jsx)(aM, { containerVisibilityPercentage: p, variant: a }),
                            T && (0, o.jsx)(aP, { isSettings: l }),
                            (0, o.jsx)("div", {
                                className: aO.s8,
                                children: (0, o.jsx)(eV.F, {
                                    forceLevel: 1,
                                    children: (0, o.jsx)(eW.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : aO.wx,
                                        children: ey.intl.string(ey.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, o.jsxs)("div", {
                                className: aO.rf,
                                children: [
                                    x &&
                                        (0, o.jsx)("div", {
                                            className: aO.eZ,
                                            children: (0, o.jsx)(av, { referrer: u }),
                                        }),
                                    N &&
                                        (0, o.jsx)("div", {
                                            className: aO.Qn,
                                            children: (0, o.jsx)(a_.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, o.jsxs)("div", {
                                        className: T ? aO.es : aO.UJ,
                                        children: [
                                            (0, o.jsx)(eC.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!s,
                                                subscriptionTier: C && null == i ? tE.pe.NONE : i,
                                                buttonTextOverride: C ? ey.intl.string(ey.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, o.jsx)(eI.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: aO.iQ,
                                        children: (0, o.jsx)(Z.E, {
                                            color: "text-muted",
                                            variant: "body-xs/medium",
                                            children: d
                                                ? ey.intl.string(ey.t.jHqrJW)
                                                : ey.intl.format(ey.t.kt9wxs, { cheapestMonthlyPrice: c }),
                                        }),
                                    }),
                                    E &&
                                        (0, o.jsx)(eE.x, {
                                            componentId: b.id,
                                            componentType: b.componentType,
                                            promotionId: b.promotionId,
                                            promotionBannerMarketingComponentFields: b.surface,
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
var aU = i(812537);
let aL = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        i = (0, d.useCallback)(
            (e) => {
                let i = r.current[e];
                null != i &&
                    ((i.style.scrollMarginTop = `${t}px`), i.scrollIntoView({ behavior: "smooth", block: "start" }));
            },
            [t],
        ),
        [s, n] = (0, d.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
        [a, l] = (0, d.useState)(e[0]);
    (0, d.useEffect)(() => {
        let e = Object.keys(s).filter((e) => s[e]);
        e.length > 0 && l(e[0]);
    }, [s]);
    let r = (0, d.useRef)({});
    return (
        (0, d.useEffect)(() => {
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
            navBarSections: (0, d.useMemo)(
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
var aG = i(818348),
    aw = i(773188);
let aB = () => {
    let e = (0, x.zy)();
    (0, _.P)(v);
    let t = d.useRef(null),
        i = d.useRef(null),
        s = d.useRef(null),
        n = d.useRef(null),
        a = d.useRef(null),
        l = d.useRef(null),
        r = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        [c, u] = d.useState(!1),
        [h, p] = d.useState(!1),
        [f, N] = d.useState(!1),
        [b, E] = d.useState(!1),
        T = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        I = null != T ? (0, er.EL)(T) : null,
        C = null != I ? er.Ay.getSkuIdForPlan(I.planId) : null,
        R = null !== C && C !== tE.pe.TIER_2 ? tE.pe.TIER_2 : null,
        { analyticsLocations: y } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    d.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, sp.lk)(sT.rE.NITRO_HOME_MARKETING),
        S = P ? ae.N.ORB_MULTIPLIER : null,
        D = d.useMemo(() => {
            let t = new URLSearchParams(e.search).get(nN.x);
            return "orbs" === t
                ? S
                : t === ae.N.THREE_P_PROMOTIONS
                  ? ae.N.THREE_P_PROMOTIONS
                  : t === ae.N.YOUTUBE
                    ? ae.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    nf(D ?? "", null != D);
    let { navBarSections: M, activeSectionId: U } = aL([n1.HOME, n1.WHATS_NEW, n1.BEST_OF_NITRO, n1.PLANS, n1.COMPARE]),
        { home: L, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = M,
        W = (0, o.jsxs)("div", {
            ref: i,
            className: m()(aw.kL, aw.Gd, aw.iI, { [aw.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(n0, { className: aw.yH }),
                (0, o.jsx)(n4, { navBarSections: M, activeSectionId: U }),
                (0, o.jsxs)("div", {
                    className: aw.Qr,
                    children: [
                        (0, o.jsx)("div", {
                            className: aw.qY,
                            ref: L.ref,
                            children: (0, o.jsx)(G.L, {
                                innerRef: n,
                                onChange: (e) => u(e),
                                threshold: 0,
                                active: !0,
                                children: (0, o.jsx)(ak, { ref: n, subscriptionTier: R }),
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: aw.So,
                            ref: B.ref,
                            children: (0, o.jsx)(aE, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, o.jsx)("div", {
                            className: aw.KQ,
                            ref: H.ref,
                            children: (0, o.jsx)(aT, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, o.jsx)("div", {
                            className: aw.qc,
                            ref: F.ref,
                            children: (0, o.jsx)(G.L, {
                                innerRef: s,
                                onChange: (e) => p(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, o.jsx)(nJ, { innerRef: s }),
                            }),
                        }),
                        (0, o.jsx)("div", { className: aw.aC, ref: V.ref, children: (0, o.jsx)(aU.A, {}) }),
                    ],
                }),
                (0, o.jsx)(G.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (k.default.track(eN.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            N(!0));
                    },
                    children: (0, o.jsx)("div", { ref: a, className: aw._Z }),
                }),
                (0, o.jsx)(n5, { ref: l }),
                (0, o.jsx)(n3, { isVisible: !c && !h && b, subscriptionTier: R }),
                (0, o.jsx)(n0, { className: aw.MF }),
            ],
        });
    return (0, o.jsx)(ep.N, {
        theme: aG.NJ.DARK,
        children: (e) => (0, o.jsx)(w.Gt, { className: m()(aw.XG, e), ref: t, children: W }),
    });
};
var aH = i(862482),
    aF = i(300349),
    aV = i(106512),
    aW = i(662367),
    az = i(374403),
    aK = i(396375),
    aY = i(900797),
    aX = i(847374),
    aq = i(614268);
function aZ(e) {
    let { className: t } = e;
    return (0, o.jsx)("div", {
        className: m()(aq.i, t),
        children: (0, o.jsx)(ef.E, { type: "early_access", variant: "premium" }),
    });
}
var aJ = i(536071);
let aQ = "/assets/5b4fec8511c3676a.svg",
    a$ = "/assets/0838bda6ecd20d91.svg";
function a0(e, t, i) {
    return (0, si.M)(e) ? t : i;
}
var a1 = i(872461);
function a2(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, o.jsxs)(n9.D, {
        onClick: i,
        className: a1.customButton,
        children: [
            t ? ey.intl.string(ey.t.maZaN3) : ey.intl.string(ey.t["37C26f"]),
            t
                ? (0, o.jsx)(aY.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: a1.arrow })
                : (0, o.jsx)(aX.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: a1.arrow }),
        ],
    });
}
function a3(e) {
    let {
            title: t,
            description: i,
            className: s,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: c = !1,
            variant: d = "default",
        } = e,
        { analyticsLocations: u } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        x = (0, o.jsx)("img", { src: n, alt: "", className: m()(a, a1.perksCardArt) }),
        g = "settings" === d;
    return (0, o.jsx)(j.f5, {
        value: u,
        children: (0, o.jsxs)("div", {
            className: m()(a1.perkCard, s, { [a1.settingsCard]: g }),
            children: [
                r ? (0, o.jsx)(aJ.A, { className: a1.perkCardNewBadge }) : null,
                c ? (0, o.jsx)(aZ, { className: a1.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, o.jsx)(q.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: a1.settingsArt,
                          children: x,
                      })
                    : x,
                (0, o.jsxs)("div", {
                    className: g ? a1.settingsText : void 0,
                    children: [
                        (0, o.jsxs)(eW.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: a1.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: a1.perkCardDescription,
                            children: "function" == typeof i ? i(u) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let a6 = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [s, n] = d.useState(!1),
        a = (function (e) {
            let { styles: t } = e,
                i = (0, ss.Ay)(),
                s = (0, e9.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return er.Ay.canUsePremiumProfileCustomization(e);
                }),
                n = (0, er.EJ)(tE.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: ey.intl.string(ey.t.SS87rQ),
                    description: ey.intl.string(ey.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: ey.intl.string(ey.t["5cYMu0"]),
                    description: ey.intl.string(ey.t.vxk9va),
                    imageSource: a0(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: ey.intl.string(ey.t["/xvEMy"]),
                    description: ey.intl.string(ey.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: ey.intl.string(ey.t.OuItFi),
                    description: ey.intl.string(ey.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: ey.intl.string(ey.t["R2IV/Q"]),
                    description: ey.intl.string(ey.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: ey.intl.string(ey.t.lKDhhJ),
                    description: () =>
                        s
                            ? ey.intl.formatToPlainString(ey.t.aj1pfZ, { onCheckItOutClick: () => {} })
                            : ey.intl.formatToPlainString(ey.t.d2oYS8, { onTryItOutClick: () => {} }),
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: ey.intl.string(ey.t.BUScid),
                    description: ey.intl.string(ey.t.vN6XpQ),
                    imageSource: a0(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ey.intl.string(ey.t.Bv8Pfk),
                    description: ey.intl.string(ey.t.JMfaTU),
                    imageSource: a0(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ey.intl.string(ey.t.Bv8Pfk),
                    description: ey.intl.string(ey.t.JMfaTU),
                    imageSource: a0(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ey.intl.string(ey.t["lGcW+c"]),
                    description: ey.intl.string(ey.t["/fDyO+"]),
                    imageSource: a0(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ey.intl.string(ey.t["1c+xwT"]),
                    description: ey.intl.string(ey.t.hJG8ZN),
                    imageSource: a0(i, a$, aQ),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ey.intl.string(ey.t.tzdIwI),
                    description: ey.intl.string(ey.t.hJG8ZN),
                    imageSource: a0(i, a$, aQ),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ey.intl.string(ey.t.tzdIwI),
                    description: ey.intl.string(ey.t.hJG8ZN),
                    imageSource: a0(i, a$, aQ),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: ey.intl.string(ey.t.RSXQYO),
                    description: ey.intl.string(ey.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: ey.intl.string(ey.t["uZt5q/"]),
                    description: ey.intl.string(ey.t.ZK3ZoX),
                    imageSource: a0(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: ey.intl.formatToPlainString(ey.t.jqhAdL, { premiumMaxSize: n }),
                    description: ey.intl.formatToPlainString(ey.t["HI+cfm"], { premiumMaxSize: n }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: ey.intl.string(ey.t.NaGpTf),
                    description: ey.intl.string(ey.t["A8O/Qw"]),
                    imageSource: a0(i, na, nl),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: a1 }),
        l = (0, e9.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { analyticsLocations: r } = (0, j.Ay)();
    return (0, o.jsxs)("div", {
        className: m()(a1.perksContainer, t, {
            [a1.partiallyHidden]: i && !s,
            [a1.subscriberNitroHome]: i,
            [a1.reducedMotion]: l,
        }),
        children: [
            (0, o.jsx)(eW.D, {
                variant: "heading-xxl/semibold",
                className: a1.perksTitle,
                children: i ? ey.intl.string(ey.t.QX14gI) : ey.intl.string(ey.t.RGadQR),
            }),
            (0, o.jsx)("div", {
                className: m()(a1.perkCardContainer, { [a1.perkCardContainerExpanded]: s }),
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
                    let t = a[e];
                    return null != t && (0, o.jsx)(a3, { ...t }, e);
                }),
            }),
            i &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)("div", {
                            className: m()({ [a1.sizeGizmo]: !s, [a1.sizeGizmoExpanded]: s }),
                            children: (0, o.jsx)(a2, {
                                onClick: function () {
                                    (k.default.track(eN.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: r,
                                        was_expanded: s,
                                    }),
                                        n(!s));
                                },
                                isShowingAll: s,
                            }),
                        }),
                        (0, o.jsx)("div", { className: m()(a1.cover, { [a1.hidden]: s }) }),
                    ],
                }),
        ],
    });
};
var a7 = i(615939);
let a8 = d.memo(function (e) {
    let { className: t } = e,
        i = [
            {
                id: is.MORE_EMOJIS_CARD_ID,
                title: ey.intl.string(ey.t["R2IV/Q"]),
                description: ey.intl.string(ey.t.DRMecB),
                imageSource: i0.A,
            },
            {
                id: is.HD_VIDEO_CARD_ID,
                title: ey.intl.string(ey.t["/mQ5gg"]),
                description: ey.intl.string(ey.t["7WwAXh"]),
                imageSource: iQ.A,
            },
            {
                id: is.LARGE_UPLOADS_CARD_ID,
                title: ey.intl.string(ey.t.nL1WZV),
                description: (0, sa.M6)({
                    legacyCopy: ey.intl.formatToPlainString(ey.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: ey.intl.formatToPlainString(ey.t.teOTfv, {
                        maxFileSize: (0, er.EJ)(tE.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: a7.A,
            },
            {
                id: is.PROFILES_CARD_ID,
                title: ey.intl.string(ey.t.KcyDwF),
                description: ey.intl.string(ey.t.Mt3U1W),
                imageSource: iZ,
            },
        ];
    return (0, o.jsxs)(q.B, {
        gap: 16,
        className: m()(a1.settingsPerks, t),
        children: [
            (0, o.jsx)(eW.D, { variant: "heading-xl/semibold", children: ey.intl.string(ey.t.q1u7nQ) }),
            (0, o.jsx)(eV.F, {
                children: (0, o.jsx)("div", {
                    className: a1.settingsGrid,
                    children: i.map((e) => (0, o.jsx)(a3, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var a5 = i(695366),
    a9 = i(370049);
let a4 = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nB.ar)();
    if (null == s) return null;
    let r = null != s ? er.Ay.getPremiumPlanItem(s) : null;
    if (
        (er.Ay.isBoostOnlySubscription(s)
            ? (t = ey.intl.string(ey.t.Uj0md3))
            : null != r && (t = er.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function c() {
        return (0, en.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? er.Ay.getSkuIdForPlan(r.planId) : null) === tE.pe.TIER_1;
    return (
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, o.jsxs)(ie.Z, {
            className: m()(a9.kL, n, { [a9.He]: l }),
            type: ie.Z.Types.CUSTOM,
            children: [
                (0, o.jsx)(a5.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: m()(a9.Kk, { [a9.Pt]: l }),
                }),
                (0, o.jsx)(Z.E, {
                    variant: "body-sm/medium",
                    color: i,
                    children: d
                        ? ey.intl.format(ey.t["tYuv+T"], {
                              helpdeskArticle: el.A.getArticleURL(eN.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: c,
                          })
                        : ey.intl.format(ey.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: c }),
                }),
            ],
        })
    );
};
var le = i(978836);
let lt = function (e) {
    let { lifted: t = !1 } = e;
    return (0, o.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: m()(le.zr, { [le.N]: t }),
        children: [
            (0, o.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, o.jsx)("stop", { className: le.eq }),
                        (0, o.jsx)("stop", { offset: "0.339235", className: le.l_ }),
                        (0, o.jsx)("stop", { offset: "0.492065", className: le.sM }),
                        (0, o.jsx)("stop", { offset: "0.823236", className: le.zi }),
                        (0, o.jsx)("stop", { offset: "0.899558", className: le.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var li = i(194509),
    ls = i(317587);
let ln = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, tt.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eN.JJy.MARKETING_FLOATING_CTA },
        r = (0, ss.Ay)(),
        c = (0, nQ.M)(r);
    return (0, o.jsx)(te.animated.div, {
        className: m()(ls.iE, { [ls.H8]: s, [ls.q4]: !t }),
        style: a,
        children: (0, o.jsxs)("div", {
            className: s ? ls.zW : ls.iJ,
            children: [
                (0, o.jsx)(aK.A, {
                    color: c ? aH.XD.BRAND_INVERTED : void 0,
                    className: m()(ls.x6, { [ls.Ph]: c }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: c ? void 0 : ls.PJ,
                }),
                (0, o.jsx)(li.A, { className: ls.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var la = i(386564);
function ll(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: i,
            containerClassName: s,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        c = r
            ? (0, o.jsx)(aK.A, {
                  color: l ? aH.XD.BRAND_INVERTED : void 0,
                  className: m()(la.x6, la.Ph, n, { [la.Sq]: t && a, [la.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : la.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, o.jsx)(aK.A, {
                  color: l || !a ? aH.XD.BRAND_INVERTED : void 0,
                  className: m()(la.x6, la.Ph, n, { [la.Sq]: t && a, [la.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        d = t && a ? null : (0, o.jsx)(li.A, { className: m()(la.x6, n), color: a ? void 0 : aH.XD.WHITE });
    return (0, o.jsxs)("div", { className: m()(la.UD, s), children: [c, " ", d] });
}
function lr() {
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(aJ.p, { className: la.zd }),
            (0, o.jsx)(aJ.p, { className: la.G }),
            (0, o.jsx)(aJ.p, { className: la.zy }),
            (0, o.jsx)(aJ.p, { className: la.GX }),
        ],
    });
}
function lc(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = aS();
    return (0, o.jsx)(Z.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: m()(la.h_, { [la.If]: i, [la.jn]: s }),
        children: ey.intl.format(ey.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let lo = function (e) {
    let { className: t, buttonClassName: i, subscriptionTier: s, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ec.QQ)(),
        c = (0, nB.ar)(),
        d = (0, nb.b)().length > 0,
        u = ey.intl.string(ey.t.YCZldK);
    return (0, o.jsx)(j.f5, {
        value: l,
        children: (0, o.jsxs)("div", {
            ref: a,
            className: m()(la.kL, t, { [la.V1]: !c, [la.Q4]: !c && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, o.jsxs)("div", {
                    className: c ? la.I6 : la.G1,
                    children: [
                        (0, o.jsx)(eV.F, {
                            forceLevel: 1,
                            children: (0, o.jsx)(eW.D, {
                                variant: c ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: u,
                            }),
                        }),
                        d
                            ? (0, o.jsx)("div", {
                                  className: la.DF,
                                  children: (0, o.jsx)(a_.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, o.jsx)(lc, {}),
                        r
                            ? (0, o.jsx)("div", {
                                  className: la.UD,
                                  children: (0, o.jsx)(li.A, { className: m()(la.x6, i), color: aH.XD.WHITE }),
                              })
                            : (0, o.jsx)(ll, {
                                  subscriptionTier: s,
                                  inOfferExperience: c,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        d && (0, o.jsx)(lc, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, o.jsx)(lr, {}),
            ],
        }),
    });
};
var ld = i(403227),
    lu = i(367740),
    lm = i(377770);
function lx(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, o.jsx)(lt, { lifted: t }) : null;
}
let lg = () => {
        let { enabled: e } = aF.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, _.P)(v);
        let t = d.useRef(null),
            i = d.useRef(null),
            s = d.useRef(null),
            n = (0, ss.Ay)(),
            a = (0, si.M)(n),
            [l, r] = d.useState(!1),
            [c, u] = d.useState(!1),
            [x, h] = d.useState(!1),
            p = !l && !c,
            [f, N] = d.useState(!1),
            b = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            E = null != b ? (0, er.EL)(b) : null,
            T = null != E ? er.Ay.getSkuIdForPlan(E.planId) : null,
            I = null !== T && T !== tE.pe.TIER_2 ? tE.pe.TIER_2 : null,
            C = (0, em.V)(),
            R = C?.subscriptionTrial?.skuId,
            y = (0, nB.ar)(),
            P = !e && y,
            S = (0, g.bG)([tU.A], () => {
                let e = tU.A.getMarketingComponentBySurface(Y.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e ? null : e.surface;
            }),
            D = (0, az.Q)(),
            { analyticsLocations: M } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        d.useEffect(() => {
            N(!0);
        }, []);
        let U = e
            ? (0, o.jsx)("div", {
                  className: lm.OE,
                  children: (0, o.jsx)(G.L, {
                      innerRef: t,
                      onChange: u,
                      threshold: 0.1,
                      active: !0,
                      children: (0, o.jsx)(nJ, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, o.jsx)("div", {
                  className: lm.dY,
                  children: (0, o.jsx)(G.L, {
                      innerRef: t,
                      onChange: (e) => u(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, o.jsx)(nI.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, o.jsx)(aK.A, {
                              showIcon: !1,
                              subscriptionTier: tE.pe.TIER_0,
                              className: lu.Ph,
                              look: aH.pR.OUTLINED,
                              color: aH.XD.WHITE,
                              buttonShineClassName: lu.Qr,
                          }),
                          tier2CTAButton:
                              R === tE.pe.TIER_0
                                  ? (0, o.jsx)(aK.A, {
                                        showIcon: !1,
                                        subscriptionTier: tE.pe.TIER_2,
                                        className: lu.Ph,
                                        look: aH.pR.OUTLINED,
                                        color: aH.XD.WHITE,
                                        buttonShineClassName: lu.Qr,
                                    })
                                  : (0, o.jsx)(aK.A, {
                                        color: aH.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tE.pe.TIER_2,
                                        className: lu.Ph,
                                        textOptions: { textClassName: lu.Ac },
                                        buttonShineClassName: lu.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, o.jsxs)("div", {
            className: m()(lm.kL, { [lm.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(a4, {
                    premiumSubscription: b,
                    textColor: e ? "text-default" : void 0,
                    className: m()(lm.R3, { [lm.aZ]: y }),
                }),
                P &&
                    (0, o.jsxs)("div", {
                        className: lm.n1,
                        children: [
                            (0, o.jsx)(lx, { inOfferExperience: y }),
                            (0, o.jsx)(t3.l, {
                                className: lm.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, o.jsxs)("div", {
                    className: m()({ [lm.V1]: !P }),
                    children: [
                        null != S && (0, o.jsx)(aV.m, { className: lm.w$, config: S }),
                        (0, o.jsxs)("div", {
                            className: lm.iS,
                            children: [
                                !P &&
                                    (0, o.jsx)(t3.l, {
                                        className: lm.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, o.jsx)(G.L, {
                                    innerRef: i,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, o.jsx)(ak, { ref: i, subscriptionTier: I, variant: "settings" })
                                        : (0, o.jsx)(lo, {
                                              ref: i,
                                              subscriptionTier: I,
                                              className: m()({ [lm.p7]: y, [lm.Pw]: y, [lm.Cv]: null != b }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, o.jsx)("div", { className: lm.Ol, children: (0, o.jsx)(aW.I, { component: D }) }),
                U,
                e ? (0, o.jsx)(a8, { className: lm.OE }) : (0, o.jsx)(a6, { className: lm.B_ }),
                (0, o.jsx)("div", {
                    className: lm.aC,
                    children: e
                        ? (0, o.jsx)(aU.A, { variant: "settings" })
                        : (0, o.jsx)(ld.A, { className: lm.JQ, hideCTAs: !0 }),
                }),
                (0, o.jsx)("div", { className: lm.hz }),
                e
                    ? (0, o.jsx)(n3, { isVisible: p && f, subscriptionTier: I, variant: "settings" })
                    : (0, o.jsx)(ln, { isVisible: p && f, subscriptionTier: I, isApplicationHome: !1 }),
                (0, o.jsx)(G.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !x &&
                            (k.default.track(eN.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            h(!0));
                    },
                    children: (0, o.jsx)("div", { ref: s, className: lm._Z }),
                }),
                (0, o.jsx)("img", {
                    src: nA,
                    className: lm.Kw,
                    width: 112,
                    height: 85,
                    alt: ey.intl.string(ey.t.X4IxWL),
                }),
            ],
        });
    },
    lh = function (e) {
        let { entrypoint: t } = e,
            i = (0, em.V)(),
            s = (0, eu.O)(),
            n = (0, nT.NF)({ trialOffer: i }),
            a = (0, nT.Tp)(),
            l = (0, g.bG)([nE.A], () => nE.A.getReminderStateId());
        switch (
            (d.useEffect(() => {
                (!0 === n && (0, nT.QG)(), !0 === a && (0, nT.ne)(l), (null != i || null != s) && (0, L.u1)(i, s));
            }, [i, s, n, a, l]),
            t)
        ) {
            case tE.tU.UserSettings:
                return (0, o.jsx)(lg, {});
            case tE.tU.ApplicationStoreHome:
                return (0, o.jsx)(aB, {});
            default:
                return null;
        }
    };
var lp = i(531296);
let lf = function (e) {
    let { entrypoint: t = tE.tU.UserSettings } = e;
    (0, _.P)(v);
    let i = (0, E.Hp)(),
        { sourceAnalyticsLocations: s, analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        a = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        l = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        r = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        c = r?.id,
        u = (0, em.V)(),
        C = (0, eu.O)(),
        R = (0, T.Y)(tE.T7),
        [G, w] = d.useState(!0),
        B = d.useRef(0),
        H = (0, U.YE)(r, tE.PremiumTypes.TIER_2);
    ((0, nb.b)(),
        d.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, eN.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        d.useEffect(() => {
            G ||
                k.default.track(eN.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: B.current,
                });
        }, [s, G]),
        d.useEffect(() => {
            i && (null != u || null != C) && (0, L.u1)(u, C);
        }, [i, u, C]));
    let F = (0, x.zy)(),
        V = d.useRef(!1),
        W = a && l && R,
        [z, K] = d.useState(W);
    (W && !z && K(!0),
        d.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tE.pe.TIER_0, nitro: tE.pe.TIER_2 },
                i = Object.hasOwn(t, e) ? t[e] : void 0;
            null != i &&
                ((V.current = !0),
                (0, P.bG)(eN.BVt.APPLICATION_STORE),
                (0, y.A)({ subscriptionTier: i, analyticsLocations: n }));
        }, [W, F.search, n]));
    let Y = (0, g.bG)([S.A], () => S.A.enabled),
        X = t === tE.tU.ApplicationStoreHome,
        q = Y
            ? (0, o.jsx)(f.A, {})
            : i
              ? (0, o.jsx)(I.uK, {})
              : X && H
                ? (0, o.jsx)(j.f5, { value: n, children: (0, o.jsx)(nj, { userId: c }) })
                : z
                  ? null
                  : (0, o.jsx)("div", { className: m()(lp.kL, lp.Lq), children: (0, o.jsx)(h.y, {}) });
    return null != q
        ? !Y && !i && X && H
            ? q
            : (0, o.jsxs)(o.Fragment, { children: [X && (0, o.jsx)(N.A, {}), q] })
        : (0, o.jsx)(j.f5, { value: n, children: (0, o.jsx)(lh, { entrypoint: t }) });
};
