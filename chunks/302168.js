(s.d(t, { A: () => aB }), s(323874), s(14289), s(35956), s(205816));
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
    x = s(855986),
    g = s(289873),
    p = s(73825),
    h = s(369143),
    f = s(107834),
    N = s(793574),
    A = s(688810),
    j = s(781300),
    b = s(86379),
    E = s(160946),
    T = s(500597),
    I = s(840251),
    C = s(688151);
let R = new I.E([], C.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var v = s(611924),
    _ = s(778705),
    y = s(976860),
    P = s(351906),
    S = s(287809),
    D = s(295405),
    M = s(166403),
    O = s(129230),
    k = s(474090),
    U = s(739053),
    L = s(831259),
    G = s(516521),
    w = s(961250),
    B = s(622886),
    H = s(851767),
    F = s(917445),
    V = s(131168),
    W = s(482589),
    z = s(511484),
    Y = s(175020),
    X = s(877624),
    K = s(192308),
    Z = s(331322),
    J = s(834730),
    q = s(403581),
    Q = s(821609),
    $ = s(502572),
    ee = s(775602),
    et = s(366999),
    es = s(531260),
    ei = s(780964),
    en = s(766075),
    ea = s(786300),
    el = s(975571),
    er = s(722178),
    ec = s(89366),
    eo = s(881489),
    ed = s(423814),
    eu = s(77528),
    em = s(549996),
    ex = s(172218);
function eg() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, ex.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var ep = s(287763);
let eh = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: ep.i,
        children: (0, c.jsx)(J.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var ef = s(371764),
    eN = s(103411),
    eA = s(65470),
    ej = s(792656),
    eb = s(536637),
    eE = s.n(eb),
    eT = s(496431),
    eI = s(792996),
    eC = s(850292);
let eR = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "body-md/medium" } = e,
        n = (0, eT.A)(eE()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(eC.Xl, s, { [eC.a3]: "body-lg/semibold" === i }),
        children: [
            (0, c.jsx)(J.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: eI.intl.string(eI.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: eC.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: eC.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: eC.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: eC.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: eC.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(J.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return eI.intl.string(eI.t.ixASa2);
                                                        case "hours":
                                                            return eI.intl.string(eI.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eI.intl.string(eI.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eI.intl.string(eI.t.JhaiLW);
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
                                        className: eC.cV,
                                        variant: "body-lg/normal",
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
var ev = s(473702),
    e_ = s(778712),
    ey = s(97808),
    eP = s(609425),
    eS = s(16371),
    eD = s(854627),
    eM = s(427262),
    eO = s(938767);
function ek() {
    let e = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, eP.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eD.A)({ userId: e?.id, size: e_._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eM.mG)(e);
    return (0, c.jsxs)("div", {
        className: eO.kL,
        children: [
            (0, c.jsx)("div", {
                className: eO.my,
                children: (0, c.jsx)(ey.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: e_._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: eO.QC, children: (0, c.jsx)(eS.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eU = s(707554),
    eL = s(534514);
let eG = function (e) {
    let { className: t, color: s = "text-strong", variant: i = "nitro-lg", children: n } = e;
    return (0, c.jsx)(eU.F, {
        forceLevel: 1,
        children: (0, c.jsx)(eL.D, { className: t, variant: i, color: s, children: n }),
    });
};
var ew = s(805251),
    eB = s(429811),
    eH = s(132506),
    eF = s(610709),
    eV = s(478016),
    eW = s(318254),
    ez = s(646514),
    eY = s(626031),
    eX = s(197630);
s(232198);
var eK = s(652215),
    eZ = s(957457);
function eJ(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eX.xb.ORBS
          ? (0, c.jsx)(eq, { nRewardsGranted: t, className: i })
          : s === eX.xb.DISCOUNT
            ? (0, c.jsx)(eQ, { nRewardsGranted: t, className: i })
            : null;
}
function eq(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(i);
        }, [i]),
        (0, c.jsxs)(Z.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: eZ.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(eW.OrbsIcon, { size: "xs", color: ez.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(eY.t, {
                            value: n,
                            onValueChange: eK.tEg,
                            onValueReached: eK.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "body-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(J.E, {
                    variant: "body-sm/medium",
                    color: "text-strong",
                    children: eI.intl.string(eI.t.UhguER),
                }),
            ],
        })
    );
}
function eQ(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": eI.intl.formatToPlainString(eI.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(eV.CheckmarkSmallIcon, { size: "md", color: ez.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(J.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eI.intl.format(eI.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e$ = s(303682),
    e0 = s(758836),
    e1 = s(558992);
function e2(e) {
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
        } = (0, eH.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(e1.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e1.G3,
                children: (0, c.jsx)(eF.fx, {
                    nReferralsSent: i,
                    imageSize: 55,
                    backgroundClassName: e1.HP,
                    ringClassName: e1.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(e1.IH, d && e1.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: e1.aZ,
                            children: (0, c.jsx)(ew.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: e1.n4,
                        children: [
                            (0, c.jsx)(J.E, { variant: "body-md/semibold", color: "text-strong", children: l }),
                            (0, c.jsx)(J.E, {
                                variant: d ? "body-sm/medium" : "body-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: e1.Wp,
                              children: [
                                  (0, c.jsx)(eF.ZP, { referralSentUsers: s }),
                                  (0, c.jsx)(eJ, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(eF.ZP, { referralSentUsers: s, className: e1.t7 }),
                ],
            }),
            (0, c.jsx)(Q.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? eI.intl.string(eI.t.iw5Ccc) : eI.intl.string(eI.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, eB.Cz)({
                              tab: e0.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: N.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eF.jM)({
                              startingScreen: e$.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e3 = s(164636),
    e6 = s(676279),
    e7 = s(120692),
    e5 = s(717421),
    e8 = s(396583),
    e9 = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    e4 = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let te = (e) => {
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
        u = (0, e5.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, e5.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [h, f] = (0, o.useState)(1),
        N = (0, e5.z)(
            null != t
                ? {
                      from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, o.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, b] = (0, o.useState)(0),
        [E, T] = (0, o.useState)(1),
        I = (0, e5.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e8.A)(() => {
        (b(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(e7.animated.div, {
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
                  translateX: a ? I.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tt = s(382168);
let ts = function (e) {
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
        blurScale: h = 1,
        animateStar: f = !0,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(tt.nJ, i),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 10 * h, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.UP,
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
                    className: u()(tt.IN, n),
                    children: (0, c.jsx)(te, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.DOWN,
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
                    className: u()(tt.Gj, a),
                    children: (0, c.jsx)(te, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.DOWN,
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
                    className: u()(tt.FV, l),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 5 * h, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.UP,
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
                    className: u()(tt.E1, r),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * h, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t || !f,
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
var ti = s(607470),
    tn = s(562915);
let ta =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tl = function (e) {
        let {
                supportHEVCAlpha: t,
                isMotionReduced: s,
                containerVisibilityPercentage: i,
                containerClassName: n,
                assetClassName: a,
                animationSpeedScale: l = 1,
                variant: r = "default",
            } = e,
            o = "settings" === r;
        return s || o
            ? (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)("img", {
                      src: o
                          ? tn.A
                          : "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)(te, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: e9.SINE },
                      parallaxAnimationData: {
                          pathDirection: e4.UP,
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
                                ti.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: ta }),
                                },
                                ta,
                            ),
                  }),
              });
    },
    tr = function (e) {
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
            h = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            f = (0, e6.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tl, {
                    supportHEVCAlpha: f,
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(ts, {
                    isMotionReduced: h,
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
var tc = s(942663);
let to = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tr, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tc.wG, s && tc.Vx),
        flyingWumpusAssetClassName: u()(tc.lu, s && tc.ov),
        boltContainerClassName: u()(tc.nJ, s && tc.Wc),
        hammerContainerClassName: u()(tc.Gj, s && tc.XA),
        keyContainerClassName: u()(tc.FV, s && tc.oZ),
        starContainerClassName: u()(tc.E1, s && tc.LN),
        boltAssetClassName: u()(tc.j7, s && tc.QN),
        hammerAssetClassName: u()(tc.Wv, s && tc.B9),
        keyAssetClassName: u()(tc.rs, s && tc.I1),
        starAssetClassName: u()(tc.OY, s && tc.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var td = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tu = s(454273);
let tm = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: g } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        p =
            ((t = { [td.MORNING]: eI.t["Wvc/I+"], [td.AFTERNOON]: eI.t["d+0STx"], [td.EVENING]: eI.t.CqsxKI }),
            eI.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? td.MORNING
                        : s >= 12 && s < 17
                          ? td.AFTERNOON
                          : td.EVENING
                ],
            )),
        h = o ?? (r ? (0, c.jsx)(e2, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tu.kL, tu.Eg, i),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(tu.W2, tu.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(Z.B, {
                    align: "start",
                    gap: 32,
                    className: tu.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(Z.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(Z.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(eG, { color: "text-default", variant: "nitro-md", children: p }),
                                        (0, c.jsx)(ek, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tu.y3,
                    children: (0, c.jsx)(to, { containerVisibilityPercentage: g, compact: null == h }),
                }),
            ],
        }),
    });
};
var tx = s(549926);
let tg = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tr, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tx.wG,
        flyingWumpusAssetClassName: tx.lu,
        boltContainerClassName: tx.nJ,
        hammerContainerClassName: tx.Gj,
        keyContainerClassName: tx.FV,
        starContainerClassName: tx.E1,
        boltAssetClassName: tx.j7,
        hammerAssetClassName: tx.Wv,
        keyAssetClassName: tx.rs,
        starAssetClassName: tx.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tp = s(499126);
let th = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tr, {
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
var tf = s(682901);
function tN(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, eo.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tu.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tu.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(Z.B, {
                    align: "start",
                    gap: 24,
                    className: tu.E2,
                    children: [
                        (0, c.jsxs)(Z.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eh, { text: eI.intl.string(eI.t.yhldRB) }),
                                (0, c.jsx)(eG, { children: eI.intl.format(eI.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tu.X8,
                                    children: (0, c.jsx)(J.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eI.intl.string(eI.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(Z.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tu.oF,
                            children: [
                                (0, c.jsx)(ej.A, {
                                    size: "md",
                                    buttonTextOverride: eI.intl.string(eI.t["2+luBl"]),
                                    iconOverride: q.NitroWheelIcon,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(Q.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eI.intl.string(eI.t.Af7ye6),
                                    onClick: () => (0, en.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tu.Hk, children: (0, c.jsx)(th, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tA(e) {
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
        { visibilityPercentageRef: p, visibilityPercentage: h } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = g ?? (m ? (0, c.jsx)(e2, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tu.kL, tu.Eg, t),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: u()(tu.W2, tu.HQ),
            ref: p,
            children: [
                (0, c.jsxs)(Z.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tu.ZU, tu.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eR, {
                                expiresAt: n.expiresAt.toISOString(),
                                digitTextVariant: "body-lg/semibold",
                            }),
                        (0, c.jsxs)(Z.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eG, {
                                    children: eI.intl.format(eI.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(J.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eI.intl.format(eI.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, er.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(Z.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(Q.$, {
                                    variant: "expressive",
                                    icon: q.NitroWheelIcon,
                                    size: "md",
                                    text: eI.intl.string(eI.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = ev.g.CONFIRM_DISCOUNT),
                                            void (0, K.mM)(async () => {
                                                let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                    await Promise.all([
                                                        s.e(489361),
                                                        s.e(227853),
                                                        s.e(470126),
                                                        s.e(149697),
                                                        s.e(128804),
                                                        s.e(60882),
                                                        s.e(71151),
                                                        s.e(286615),
                                                        s.e(735042),
                                                        s.e(311541),
                                                        s.e(274227),
                                                        s.e(870088),
                                                        s.e(300641),
                                                        s.e(747802),
                                                        s.e(966366),
                                                        s.e(84978),
                                                        s.e(153302),
                                                        s.e(807003),
                                                        s.e(88683),
                                                        s.e(983513),
                                                        s.e(216806),
                                                        s.e(310734),
                                                        s.e(324469),
                                                        s.e(70379),
                                                        s.e(417333),
                                                        s.e(127962),
                                                        s.e(295507),
                                                        s.e(959880),
                                                        s.e(174016),
                                                        s.e(22921),
                                                        s.e(11301),
                                                        s.e(861060),
                                                        s.e(364827),
                                                        s.e(626565),
                                                        s.e(486137),
                                                        s.e(80421),
                                                        s.e(206027),
                                                        s.e(393471),
                                                        s.e(177641),
                                                        s.e(678157),
                                                        s.e(223219),
                                                        s.e(40291),
                                                        s.e(544571),
                                                        s.e(523276),
                                                        s.e(812042),
                                                        s.e(729963),
                                                        s.e(830938),
                                                        s.e(538513),
                                                        s.e(325047),
                                                        s.e(50097),
                                                        s.e(594161),
                                                        s.e(435432),
                                                        s.e(80347),
                                                        s.e(830554),
                                                    ]).then(s.bind(s, 673761));
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
                                (0, c.jsx)(eA.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eI.intl.string(eI.t["3KomGa"]),
                                }),
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tu.y3, tu.Xx),
                    children: (0, c.jsx)(tg, { containerVisibilityPercentage: h }),
                }),
            ],
        }),
    });
}
function tj(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: o,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tE(),
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, em.c)(X.C.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eK.Dmq.CANCELED,
        p = null;
    null != x &&
        "marketingPageBanner" === x.properties.properties.oneofKind &&
        (p = (0, c.jsx)(ef.x, {
            componentId: x.id,
            promotionId: x.promotionId,
            promotionBannerMarketingComponentFields: x.properties.properties.marketingPageBanner,
        }));
    let h = (0, eu.V)(),
        f = (0, ed.O)(),
        j = (0, z.U9)(f, tf.pe.TIER_2) ? tf.pe.TIER_2 : void 0,
        b = null != r && r.status !== eK.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, es.A)(),
        T = E.isFractionalPremiumActive && !b && null == p && !l;
    if (s) return (0, c.jsx)(tN, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: tu.UJ,
                  children: [
                      (0, c.jsx)(ej.A, { size: "md", subscriptionTier: h?.subscriptionTrial?.skuId ?? j }),
                      (0, c.jsx)(eA.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eI.intl.string(eI.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tm, {
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
        ? (0, c.jsx)(tA, {
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
        : (0, c.jsx)(tm, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          });
}
let [tb, tE] = (0, ea.A)(),
    tT = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, eo.ds)(),
            r = (0, ec.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eK.Dmq.CANCELED && null != i,
            m = r && !u,
            g = eI.intl.string(eI.t.qYKftX),
            p = (0, eN.m)(),
            { fractionalState: h, endsAt: f } = (0, es.A)(),
            j = (0, et.Ay)(f, et.yE.CREDITS_ENDS_IN),
            b = h !== tf.xc.NONE && !l;
        b && (m = !0);
        let E = o.useMemo(() => {
                if (!b) return (0, c.jsx)(eh, { text: g });
                let e = eI.intl.format(eI.t["yR+oDD"], {
                    helpCenterLink: el.A.getArticleURL(eK.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
                return (0, c.jsx)($.A, {
                    text: e,
                    "aria-label": e.toString(),
                    tooltipClassName: tu.YL,
                    position: "right",
                    children: (e) =>
                        (0, c.jsx)("div", {
                            ...e,
                            className: tu.V_,
                            children: (0, c.jsx)("div", { className: tu.eL, children: (0, c.jsx)(eh, { text: j }) }),
                        }),
                });
            }, [b, g, j]),
            T = o.useMemo(
                () => ({
                    headingTop: E,
                    showPill: m,
                    shouldShowChurnVariant: u,
                    premiumSubscription: d,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                }),
                [E, m, u, d, i, n, s],
            );
        return (0, c.jsx)(A.f5, {
            value: a,
            children: (0, c.jsx)(tb.Provider, {
                value: T,
                children: (0, c.jsx)(tj, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: p }),
            }),
        });
    };
var tI = s(820284),
    tC = s(742589),
    tR = s(392943),
    tv = s(521440),
    t_ = s(603202),
    ty = s(673992);
let tP = function () {
    return (0, c.jsx)(tI.A, {
        section: eK.JJy.NAVIGATION,
        children: (0, c.jsx)(tC.A, {
            className: u()(t_.TQ, ty.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: t_.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: ty.wk,
                        children: [
                            (0, c.jsx)(q.NitroWheelIcon, { colorClass: ty.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": eI.intl.string(eI.t.Ipxkog),
                                className: ty.Ss,
                                children: (0, c.jsx)(tR.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: t_.MQ,
                        children: [
                            (0, c.jsx)(tv.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tS = s(325499),
    tD = s(613412),
    tM = s(885574),
    tO = s(43990),
    tk = s(993077),
    tU = s(139286),
    tL = s(872725),
    tG = s(920050),
    tw = s(51965),
    tB = s(375776),
    tH = s(727811),
    tF = s(222652),
    tV = s(831768),
    tW = s(934353);
function tz(e) {
    let { openRewardModal: t } = e,
        s = (0, tF.z)();
    if (s.kind === tF.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tW.R$,
            children: [
                (0, c.jsx)(ej.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tf.pe.TIER_2,
                }),
                (0, c.jsx)(Q.$, { variant: "secondary", size: "md", text: eI.intl.string(eI.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === tH.P.CLAIMED
            ? { text: eI.intl.string(tV.default.Plwzgf) }
            : { text: eI.intl.string(eI.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: tW.R$,
                children: [
                    (0, c.jsx)(tw.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(Q.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === tH.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: tW.ed,
                    children: [
                        (0, c.jsx)(tM.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(J.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: eI.intl.string(tV.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function tY(e) {
    let { glowing: t = !1 } = e;
    (0, tU.A)({
        type: tD.ImpressionTypes.VIEW,
        name: tD.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: tG.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, K.mM)(async () => {
                let { default: e } = await Promise.all([s.e(878140), s.e(532203)]).then(s.bind(s, 15654));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(tO.N, {
        theme: eK.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(A.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, tW.kL),
                    children: (0, c.jsx)(tL.A, {
                        cardType: tk.s.CUSTOM,
                        cardClassName: tW.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: tW.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: tW.j,
                                    children: [
                                        (0, c.jsx)("div", { className: tW._g }),
                                        (0, c.jsx)("div", { className: tW.$h }),
                                        (0, c.jsx)("div", { className: tW.Rv }),
                                        (0, c.jsx)("div", { className: tW.Lw }),
                                        (0, c.jsx)("div", { className: tW.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: tW.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: tW.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(eL.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: tW.DD,
                                            children: eI.intl.string(tV.default.RGT513),
                                        }),
                                        (0, c.jsx)(J.E, {
                                            variant: "body-md/normal",
                                            color: "text-strong",
                                            className: tW.h_,
                                            children: eI.intl.string(tV.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(tz, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var tX = s(706778),
    tK = s(7684),
    tZ = s(112992);
let tJ = () =>
    (0, c.jsxs)("div", {
        className: tK.X,
        children: [
            (0, c.jsx)("div", {
                className: tK.W,
                children: (0, c.jsx)(tM.CircleInformationIcon, { size: "xxs", color: ez.A.colors.ICON_MUTED }),
            }),
            (0, c.jsx)(J.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: eI.intl.string(tV.default.Fs74z9),
            }),
        ],
    });
function tq(e) {
    let { className: t, containerClassName: s, glowing: i } = e,
        n = (0, tF.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === tF.N.SUBSCRIBE
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
        r = n.kind === tF.N.DEFAULT && n.claimStatus === tH.P.CLAIM_IN_PROGRESS;
    return (0, c.jsx)(tX.S, {
        id: tG.XBOX_PREMIUM_PERK_CARD_ID,
        title: eI.intl.string(tV.default.UVL9tD),
        description: eI.intl.string(tV.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, c.jsx)(tJ, {}) : void 0,
        className: t,
        containerClassName: s,
        glowing: i,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: tZ.A, alt: "Xbox Game Pass" }),
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
    t8 = s(669700),
    t9 = s(44724),
    t4 = s(371794);
let se = new Date(Date.UTC(2026, 9, 23));
var st = s(945810);
let ss = (0, st.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var si = s(398523),
    sn = s(881373),
    sa = s(555393),
    sl = s(325652),
    sr = s(852218),
    sc = s(52530),
    so = s(670328);
let sd = (0, st.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var su = s(612413),
    sm = s(188275);
let sx = new Date(Date.UTC(2026, 10, 5));
var sg = s(749962),
    sp = s(691450),
    sh = s(647024),
    sf = s(524698),
    sN = s(635088),
    sA = s(679502),
    sj = s(762493);
let sb = "xgpp";
function sE(e) {
    let { card: t, backgroundAssetUrl: s, blurTint: i, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: t2.JE,
        children: (0, c.jsx)(tX.S, {
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
function sT(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tS.b)("premium_subscriber_home_rewards");
    (0, t$.A)(tf.tv);
    let {
            expiredCallOfDutyCard: n,
            logitechCard: a,
            rustCard: l,
            steelseriesCard: r,
            youtubeCard: d,
            macaronCard: m,
            codeBlurpleCard: x,
        } = (function () {
            let e,
                t,
                { analyticsLocations: s } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                i = ((e = (0, sc.eh)()), (t = (0, sc.fR)()), null != e ? e : t),
                n = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = ss.useConfig({ location: t });
                    return s;
                })({ location: "useHardwarePartnerPerkCards" }),
                a = (0, sn.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                l = si.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                r = (0, su.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                d = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = sd.useConfig({ location: t });
                    return s;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                u = null === (0, sa.N)(),
                m = (0, t0.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: x, nDaysInMonth: g } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let e =
                        n && null == i
                            ? {
                                  id: tG.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: eI.intl.string(sg.default["IcD/7p"]),
                                  description: eI.intl.formatToPlainString(sg.default.hausFi, {
                                      date: new Intl.DateTimeFormat(eI.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(se),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: sl.L.EXPIRED,
                                  pillText: eI.intl.string(sg.default.fxF0Jz),
                                  caption: (0, c.jsx)("img", { src: sN.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = a
                        ? {
                              id: tG.LOGITECH_3PP_CARD_ID,
                              title: eI.intl.string(sp.default.OlObRa),
                              description: eI.intl.format(sp.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: el.A.getArticleURL(eK.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: x.getDate() / g,
                              ctaText: eI.intl.string(eI.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, so.P)({
                                      partnerIds: [sr.XY],
                                      title: eI.intl.string(sp.default["2I7nK+"]),
                                      subtitle: eI.intl.format(sp.default.W8jOD0, {
                                          termsUrl: el.A.getArticleURL(eK.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: s,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: sr.XY },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    o = l
                        ? {
                              id: tG.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: eI.intl.string(eI.t.m7PucM),
                              description: eI.intl.format(eI.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: x.getDate() / g,
                              ctaText: eI.intl.string(eI.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, so.P)({
                                      partnerIds: [sr.KS],
                                      title: eI.intl.string(eI.t["7ioAjs"]),
                                      subtitle: eI.intl.format(eI.t.LOYRxB, {
                                          helpCenterLink: el.A.getArticleURL(eK.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: s,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: sr.KS },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null;
                return {
                    expiredCallOfDutyCard: e,
                    logitechCard: t,
                    rustCard: d
                        ? {
                              id: tG.RUST_3PP_CARD_ID,
                              title: eI.intl.string(sh.default.gQ1ctg),
                              description: eI.intl.format(sh.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(eI.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(sx),
                                  termsUrl: (0, sm.X3)(sm.IG),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: eI.intl.string(eI.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, t4.YE)(sm.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: eI.intl.string(sh.default.NmBRGV),
                              ctaIcon: t5.LinkExternalSmallIcon,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t9.default)({ applicationId: sm.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    steelseriesCard: o,
                    youtubeCard: r
                        ? {
                              id: tG.YOUTUBE_3PP_CARD_ID,
                              title: eI.intl.string(sf.default["BdIVB+"]),
                              description: eI.intl.format(sf.default["3jY5i3"], {
                                  helpCenterUrl: el.A.getArticleURL(eK.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: sA.A, alt: "YouTube Premium" }),
                              ctaText: eI.intl.string(sg.default.fcopjf),
                              onCtaClick: () =>
                                  (0, so.P)({
                                      partnerIds: [sr.NC],
                                      analyticsLocations: s,
                                      title: eI.intl.string(sf.default.TDZUui),
                                      subtitle: eI.intl.format(sf.default.BTLkvw, {
                                          helpCenterUrl: el.A.getArticleURL(eK.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          t8.Ay.fireSurveyAction(t7.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: sr.NC },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    macaronCard: m,
                    codeBlurpleCard: i,
                };
            }, [m, i, s, n, x, a, g, l, d, r, u]);
        })(),
        { phase: g } = (0, t0.vc)({ location: "NitroRewardsSection" }),
        p =
            null != m
                ? {
                      card: m,
                      backgroundAssetUrl:
                          g === t1.H.PHASE_ONE
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
        h = null != p ? p.card.id : null,
        f = i && null == p,
        j =
            i ||
            null != n ||
            null != a ||
            null != l ||
            null != r ||
            null != x ||
            (null != m && m.id !== h) ||
            (null != d && d.id !== h),
        b = null;
    return (null != p
        ? (b = (0, c.jsx)(sE, {
              card: p.card,
              backgroundAssetUrl: p.backgroundAssetUrl,
              blurTint: p.blurTint,
              glowing: t === sb || s === p.card.id,
              autoClickCta: s === p.card.id,
          }))
        : f && (b = (0, c.jsx)("div", { className: t2.JE, children: (0, c.jsx)(tY, { glowing: t === sb }) })),
    null != b || j)
        ? (0, c.jsx)(t6, {
              id: sb,
              sectionClassName: u()(sj.uW, sj.Uv, sj.qr),
              heading: (0, c.jsx)(eL.D, {
                  variant: "nitro-sm",
                  className: u()(t3.R_, t2.U6),
                  children: eI.intl.string(eI.t.NG1e6l),
              }),
              beforeGrid: b,
              grid: j
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != x && (0, c.jsx)(tX.S, { ...x, containerClassName: t3.Nr, glowing: s === x.id }),
                            null != m &&
                                m.id !== h &&
                                (0, c.jsx)(tX.S, {
                                    ...m,
                                    containerClassName: t3.Nr,
                                    glowing: s === m.id,
                                    autoClickCta: s === m.id,
                                }),
                            null != d &&
                                d.id !== h &&
                                (0, c.jsx)(tX.S, {
                                    ...d,
                                    containerClassName: t3.Nr,
                                    glowing: s === d.id,
                                    autoClickCta: s === d.id,
                                }),
                            null != l && (0, c.jsx)(tX.S, { ...l, containerClassName: t3.Nr, glowing: s === l.id }),
                            i &&
                                (0, c.jsx)(tQ, {
                                    containerClassName: t3.Nr,
                                    glowing: s === tG.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, c.jsx)(tX.S, { ...a, containerClassName: t3.Nr, glowing: s === a.id }),
                            null != r && (0, c.jsx)(tX.S, { ...r, containerClassName: t3.Nr, glowing: s === r.id }),
                            null != n && (0, c.jsx)(tX.S, { ...n, containerClassName: t3.Nr, glowing: s === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var sI = s(313133),
    sC = s(67423);
let sR = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e7.animated.div, {
        className: u()(sI.iE, { [sI.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sI.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sC, className: sI.oU }),
                (0, c.jsxs)("div", {
                    className: sI.iQ,
                    children: [
                        (0, c.jsx)(eL.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: eI.intl.format(eI.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(eI.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, er.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(Q.$, {
                    variant: "expressive",
                    icon: q.NitroWheelIcon,
                    size: "md",
                    text: eI.intl.string(eI.t.zrCzVB),
                    onClick: () =>
                        void (0, K.mM)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e(489361),
                                s.e(227853),
                                s.e(470126),
                                s.e(149697),
                                s.e(128804),
                                s.e(60882),
                                s.e(71151),
                                s.e(286615),
                                s.e(735042),
                                s.e(311541),
                                s.e(274227),
                                s.e(870088),
                                s.e(300641),
                                s.e(747802),
                                s.e(966366),
                                s.e(84978),
                                s.e(153302),
                                s.e(807003),
                                s.e(88683),
                                s.e(983513),
                                s.e(216806),
                                s.e(310734),
                                s.e(324469),
                                s.e(70379),
                                s.e(417333),
                                s.e(127962),
                                s.e(295507),
                                s.e(959880),
                                s.e(174016),
                                s.e(22921),
                                s.e(11301),
                                s.e(861060),
                                s.e(364827),
                                s.e(626565),
                                s.e(486137),
                                s.e(80421),
                                s.e(206027),
                                s.e(393471),
                                s.e(177641),
                                s.e(678157),
                                s.e(223219),
                                s.e(40291),
                                s.e(544571),
                                s.e(523276),
                                s.e(812042),
                                s.e(729963),
                                s.e(830938),
                                s.e(538513),
                                s.e(325047),
                                s.e(50097),
                                s.e(594161),
                                s.e(435432),
                                s.e(80347),
                                s.e(830554),
                            ]).then(s.bind(s, 673761));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: ev.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sv = s(761508),
    s_ = s(151869),
    sy = s(62617),
    sP = s(387103);
function sS(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sP.A,
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
let sD =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function sM(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sD,
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sO = s(93712);
function sk(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sO.A,
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sU = s(345394);
function sL(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sU.A,
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sG = s(78211);
function sw(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sB = s(95278);
function sH(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sF(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sV = s(996682);
function sW(e) {
    let { color: t = ez.A.colors.ICON_STRONG, "aria-label": s, "aria-hidden": i, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, sy.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, sV.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function sz(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sY = s(78701);
function sX(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sY.A,
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sK = s(462887),
    sZ = s(736653),
    sJ = s(259065),
    sq = s(206835),
    sQ = s(591179),
    s$ = s(462463),
    s0 = s(219882),
    s1 = s(105909),
    s2 = s(208223),
    s3 = s(696292),
    s6 = s(914313),
    s7 = s(321538),
    s5 = s(892227),
    s8 = s(81466),
    s9 = s(17268),
    s4 = s(749012);
let ie = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, B.F)();
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, s5.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: s4.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: s4.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: s4.Pf,
                            children: [
                                (0, c.jsx)(s8.CalendarIcon, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eI.intl.string(s9.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(s9.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: s4.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: s4.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: s4.Pf,
                            children: [
                                (0, c.jsx)(eW.OrbsIcon, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eI.intl.string(s9.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(s9.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var it = s(221596),
    is = s(799544);
function ii() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, s6.lk)(it.rE.NITRO_HOME_MARKETING),
        { isEligible: s, programReward: i } = (0, B.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !s || null == i || null == i.reward_amount || i.reward_amount <= 0
                    ? null
                    : {
                          id: tG.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eI.intl.string(s9.default.hx5AFp),
                          description: eI.intl.format(s9.default.wq3CF2, { orbsCount: i.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(is.lH, is.yK),
                          footerContent: (0, c.jsx)(ie, {}),
                          ctaText: eI.intl.string(s9.default.BxjHiu),
                          onCtaClick: () => (0, y.pX)(eK.BVt.COLLECTIBLES_SHOP_WITH_TAB(e0.G2.ORBS)),
                      },
            [s, i],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                e
                    ? {
                          id: tG.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eI.intl.string(eI.t.Csf5Ol),
                          description: eI.intl.format(eI.t.NpUfej, { bonusOrbMultiplier: t }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eI.intl.string(eI.t.jVcuVY),
                          onCtaClick: () => (0, s7.mA)({ fromContent: s3.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: is.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var ia = s(975807),
    il = s(95035),
    ir = s(728666),
    ic = s(88001),
    io = s(107198),
    id = s(817577);
function iu() {
    (0, ia.A)(ic.TE);
}
function im(e) {
    let t = (0, ir.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, K.mM)(async () => {
                      let { default: e } = await s.e(499709).then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, _.A)({
                      subscriptionTier: tf.pe.TIER_2,
                      initialPlanId: tf.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: tG.PREMIUM_GROUP_CARD_ID,
                      title: eI.intl.string(io.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eI.intl.formatToPlainString(io.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, ic.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: is.LF,
                                  children: (0, c.jsx)(il.A, {
                                      onClick: iu,
                                      children: eI.intl.string(io.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eI.intl.string(eI.t.oW0eUd),
                      primaryAsset: id,
                      ctaIcon: q.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: eI.intl.string(eI.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var ix = s(562819),
    ig = s(793943),
    ip = s(757036),
    ih = s(621488),
    iN = s(70283),
    iA = s(643056),
    ij = s(470739);
let ib = (0, st.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var iE = s(655752),
    iT = s(764231),
    iI = s(627380),
    iC = s(30084),
    iR = s(814014),
    iv = s(714206);
let i_ =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iy =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iP =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iS() {
    let e,
        t,
        s,
        i,
        n,
        a,
        l,
        r,
        d,
        m,
        g,
        p,
        h,
        f,
        j,
        b,
        { analyticsLocations: E } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        T = (0, sQ.X)("useWhatsNewPerkCards"),
        I = (0, s$.A)({ analyticsLocations: E }),
        C = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: E }, () =>
                (0, sJ.L)({ analyticsLocations: E }),
            );
        }, [E]),
        R = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: E }, () =>
                (0, ix.L)({ analyticsLocations: E }),
            );
        }, [E]),
        v = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(ei.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        _ =
            ((e = (0, x.bG)([S.default], () => S.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (s = (function (e) {
                let { location: t } = e;
                return ib.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (i = (0, iA.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, s1.$F)()),
            (a = (0, s1.Xb)()),
            (l = n?.status === s1.Wo.UPCOMING || t),
            (r = n?.status === s1.Wo.WITHHELD),
            (d = l || r),
            (m = (0, s2.N)(n?.id)),
            (g = (function () {
                let e = (0, s1.$F)(),
                    t = (0, iE.P)(),
                    s = (0, s1.Xb)();
                if (null == e || null == t || null == s || e.status === s1.Wo.WITHHELD) return null;
                let i = eE()(),
                    n = eE()(s),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (i.diff(l) - 864e5) / r));
            })()),
            (p = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion) && !d),
            (h = (0, iI.t)()),
            (f = (0, iE.P)()),
            (0, o.useMemo)(() => {
                let e,
                    l = null != f ? eI.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, iT.T)(tf.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === s1.Wo.UPCOMING
                              ? eI.intl.formatToPlainString(eI.t.a1eKDi, { days: h?.days ?? 0 })
                              : n.status === s1.Wo.WITHHELD
                                ? ((0, iT.T)(n.id, n.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return eI.intl.formatToPlainString(eI.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return eI.intl.formatToPlainString(eI.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(h, l) ??
                                  (0, iT.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != m ? (r = d || p ? m.standard : m.ambientLarge) : t && (r = iv),
                    {
                        id: tG.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eI.intl.string(n.nameUnformattedNitro) : t ? eI.intl.string(eI.t.tx9Fvw) : "",
                        pillText: eI.intl.string(eI.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iR.pq, { [iR.rX]: d, [iR.kE]: p }),
                        caption: null != a ? eI.intl.formatToPlainString(eI.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: g ?? void 0,
                        ctaText: eI.intl.string(eI.t.jVcuVY),
                        onCtaClick: () => {
                            s && i
                                ? (0, ij.openBadgeDirectoryModal)({ initialBadgeId: iN.$.PREMIUM_TENURE })
                                : (0, iC.D)({ analyticsLocations: E });
                        },
                    }
                );
            }, [n, m, d, p, a, g, t, h, f, E, s, i])),
        { nitroOrbsRewardsCard: y, questOrbMultiplierCard: P } = ii(),
        D =
            ((j = (0, ip.L)(tf.PremiumTypes.TIER_2)),
            (b = (0, s0.rX)()),
            (0, o.useMemo)(
                () =>
                    j && b
                        ? {
                              id: tG.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eI.intl.string(ih.default["/cV3ka"]),
                              description: eI.intl.string(ih.default.H523FI),
                              primaryAsset: (0, c.jsx)(sG.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [j, b],
            )),
        M = im(E);
    return (0, o.useMemo)(() => {
        let e = [
                y,
                P,
                M,
                {
                    id: tG.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eI.intl.string(eI.t.OLtTrt),
                    description: eI.intl.string(eI.t["di/pXR"]),
                    onCtaClick: T ? I : C,
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    primaryAsset: i_,
                },
                {
                    id: tG.CLIENT_THEMES_CARD_ID,
                    title: eI.intl.string(eI.t.acc6h6),
                    description: eI.intl.formatToPlainString(eI.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iP,
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ig.nf)(ig.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tG.PERMADECOS_CARD_ID,
                    title: eI.intl.string(eI.t.L14NZN),
                    description: eI.intl.string(eI.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(sX, { alt: "", ariaHidden: !0 }),
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    onCtaClick: T ? I : R,
                },
                {
                    id: tG.CUSTOM_APP_ICONS_CARD_ID,
                    title: eI.intl.string(eI.t["GU+wqh"]),
                    description: eI.intl.string(eI.t["1uPk1Z"]),
                    primaryAsset: iy,
                    ctaText: eI.intl.string(eI.t.y9TxXV),
                    onCtaClick: v,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, _), null != D && e.splice(2, 0, D), e.length > s && e.splice(s, e.length - s), e);
    }, [_, y, P, D, M, C, v, R, I, T]);
}
var iD = s(355097);
let iM = "/assets/1eb1b74667b4c0f0.svg",
    iO = "/assets/983b60e4fcaf973b.svg";
var ik =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iU = [
    { id: "bestof", label: () => eI.intl.string(eI.t.q1u7nQ) },
    { id: "appearance", label: () => eI.intl.string(eI.t.CUnZkZ) },
    { id: "upgrades", label: () => eI.intl.string(eI.t.KC5q8v) },
    { id: "vip", label: () => eI.intl.string(eI.t.DjEAcv) },
];
var iL = s(18290);
function iG(e) {
    return e.id;
}
function iw(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sZ.DP)(),
                t = (0, sQ.X)("useFavoritesPerkCards"),
                s = (0, s1.Lh)(),
                i = (0, s2.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, sq.A)({ scrollPosition: iD._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, y.pX)(eK.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, s$.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, sJ.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = iS(),
                h = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: f, questOrbMultiplierCard: j } = ii(),
                b = im(n),
                E = (0, o.useMemo)(
                    () => [
                        {
                            id: tG.SERVER_BOOSTS_CARD_ID,
                            title: eI.intl.formatToPlainString(eI.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eI.intl.formatToPlainString(eI.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sS, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: tG.PROFILES_CARD_ID,
                            title: eI.intl.string(eI.t.xDRab3),
                            description: eI.intl.string(eI.t.yn6fWA),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sM, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tG.HD_VIDEO_CARD_ID,
                            title: eI.intl.string(eI.t["/mQ5gg"]),
                            description: eI.intl.string(eI.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sk, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.CLIENT_THEMES_CARD_ID,
                            title: eI.intl.string(eI.t.acc6h6),
                            description: eI.intl.formatToPlainString(eI.t.WQazjs, { themeCount: 20 }),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iP,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tG.MORE_EMOJIS_CARD_ID,
                            title: eI.intl.string(eI.t.D8vIDT),
                            description: eI.intl.string(eI.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.LARGE_UPLOADS_CARD_ID,
                            title: eI.intl.string(eI.t.nL1WZV),
                            description: (0, s0.M6)({
                                legacyCopy: eI.intl.formatToPlainString(eI.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eI.intl.formatToPlainString(eI.t.teOTfv, {
                                    maxFileSize: (0, er.EJ)(tf.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(sG.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.CUSTOM_APP_ICONS_CARD_ID,
                            title: eI.intl.string(eI.t["GU+wqh"]),
                            description: eI.intl.string(eI.t["1uPk1Z"]),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iy,
                            categories: ["appearance"],
                        },
                        {
                            id: tG.ENTRANCE_SOUNDS_CARD_ID,
                            title: eI.intl.string(eI.t.WJfCPi),
                            description: eI.intl.string(eI.t.liQKJR),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tG.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eI.intl.string(eI.t.OLtTrt),
                            description: eI.intl.string(eI.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            primaryAsset: i_,
                            categories: ["appearance"],
                        },
                        {
                            id: tG.CUSTOM_SOUNDS_CARD_ID,
                            title: eI.intl.string(eI.t["Cu/oFd"]),
                            description: eI.intl.string(eI.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.SPECIAL_STICKERS_CARD_ID,
                            title: eI.intl.string(eI.t.MQoVeb),
                            description: eI.intl.string(eI.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: is.Uc,
                                children: (0, c.jsx)(sB.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.SUPER_REACTIONS_CARD_ID,
                            title: eI.intl.string(eI.t.qERvAA),
                            description: eI.intl.string(eI.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eI.intl.string(eI.t.ssVDYQ),
                            description: eI.intl.string(eI.t.aUSRMa),
                            primaryAsset: (0, sK.M)(e) ? iM : iO,
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.EARLY_ACCESS_CARD_ID,
                            title: eI.intl.string(eI.t["g/KRY6"]),
                            description: eI.intl.string(eI.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sF, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tG.BADGE_CARD_ID,
                            title: eI.intl.string(eI.t.Bn3CtB),
                            description: eI.intl.string(eI.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sW, { color: ez.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tG.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eI.intl.string(eI.t["MTD+7w"]),
                            description: eI.intl.string(eI.t.Bhs0s6),
                            ctaText: eI.intl.string(eI.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sz, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != f ? { ...f, categories: ["vip"] } : null,
                        null != j ? { ...j, categories: ["vip"] } : null,
                        {
                            id: tG.PERMADECOS_CARD_ID,
                            title: eI.intl.string(eI.t.L14NZN),
                            description: eI.intl.string(eI.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sX, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, f, j, b, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => E.filter((e) => null != e && !h.includes(e.id)), [E, h]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? ik.BEST_OF_NITRO),
        l = iU.find((e) => e.id === n)?.label(),
        r = s.filter((e) => null != e && e.categories.includes(n));
    return (0, c.jsxs)("div", {
        className: iL.uW,
        children: [
            (0, c.jsx)(eL.D, { variant: "nitro-sm", children: eI.intl.string(eI.t["Uh3+CA"]) }),
            (0, c.jsx)(sv.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iL.Lq,
                "aria-label": eI.intl.string(eI.t["Uh3+CA"]),
                children: iU.map((e) =>
                    (0, c.jsx)(sv.V.Item, { id: e.id, className: iL.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                s_.A,
                {
                    "aria-label": eI.intl.formatToPlainString(eI.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: iL.jG,
                    items: r,
                    getItemKey: iG,
                    renderItem: (e, s) =>
                        (0, c.jsx)(tX.S, { ...e, glowing: t === e.id, containerClassName: iL.Ui, listItemProps: s }),
                },
                n,
            ),
        ],
    });
}
var iB = s(72979);
let iH = function (e) {
    let { className: t } = e,
        s = (0, sZ.DP)();
    return (0, c.jsx)("img", {
        className: u()(iB.D, t),
        src: (0, sK.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iF = s(684251);
let iV = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(iF.kL, iF.Gd, iF.Eg),
        children: [(0, c.jsx)(iH, {}), (0, c.jsx)(tP, {}), t],
    });
};
function iW(e) {
    let { glowingPerkId: t = null } = e,
        s = iS();
    return (0, c.jsx)(t6, {
        sectionClassName: t3.uW,
        heading: (0, c.jsx)(eL.D, { variant: "nitro-sm", className: t3.R_, children: eI.intl.string(eI.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tX.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tG.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(t3.Nr, { [t3.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function iz(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
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
var iY = s(92737);
let iX = "/assets/cd2be35d285d4675.svg",
    iK = (e) => {
        let { userId: t } = e,
            s = (0, m.zy)();
        (o.useEffect(() => {
            ((0, w.Ay)(), null != t && (0, F.A)(t));
        }, [t]),
            o.useEffect(() => {
                E(!0);
            }, []),
            (0, W.j)(),
            (0, v.P)(R));
        let i = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, B.F)(),
            {
                scrollTargetId: d,
                glowingSectionId: p,
                glowingPerkId: h,
                scrollBlock: f,
                scrollInline: j,
            } = o.useMemo(() => {
                let e = new URLSearchParams(s.search),
                    t = e.get("perk"),
                    i = e.get(iY.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [s.search]);
        iz(d ?? "", null != d, f, j);
        let [b, E] = o.useState(!1),
            T = (0, V.p)(),
            I = o.useRef(null),
            [C, _] = o.useState(!1),
            y = null != T && null != a && a.status === eK.Dmq.CANCELED,
            P = (0, z.iU)(tf.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !C && y,
            D = (0, x.bG)([H.A], () => (null != t ? H.A.getUserProfile(t) : null)),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [U, X] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(iF.xW, iF.Gd),
                  ref: i,
                  children: [
                      (0, c.jsx)(iV, {
                          children: (0, c.jsxs)(A.f5, {
                              value: k,
                              children: [
                                  (0, c.jsx)(L.L, {
                                      innerRef: I,
                                      onChange: (e) => _(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tT, {
                                          buttonVisibilityRef: I,
                                          className: iF.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, c.jsx)(iW, { glowingPerkId: h }),
                                  (0, c.jsx)(sT, { glowingPerkId: h, glowingSectionId: p }),
                                  (0, c.jsx)(iw, { glowingPerkId: h }),
                                  (0, c.jsx)(Y.A, {
                                      className: iF.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eK.liQ.NITRO_HOME, section: eK.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: iF.hz }),
                                  (0, c.jsx)(L.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !U &&
                                              (O.default.track(eK.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: k,
                                              }),
                                              X(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: iF._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: iX,
                                      className: iF.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eI.intl.string(eI.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      y &&
                          null != P &&
                          (0, c.jsx)(sR, {
                              isVisible: S && b,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(iF.kL, iF.Lq, iF.TN, iF.Eg),
                  children: [(0, c.jsx)(tP, {}), (0, c.jsx)("div", { className: iF.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var iZ = s(589152),
    iJ = s(851746),
    iq = s(727949),
    iQ = s(543213);
let i$ =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var i0 = s(185062);
let i1 = `${i$} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${i0.A} 3x`;
function i2(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sy.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: i$,
        srcSet: i1,
        className: (0, sy.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var i3 = s(315629),
    i6 = s(783420),
    i7 = s(204413),
    i5 = s(572079),
    i8 = s(824069),
    i9 = s(785007),
    i4 = s(947910);
function ne(e) {
    let { value: t, planRadioOptions: s, className: i, ...n } = e,
        a = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: i4.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: i4.fQ,
                                children: (0, c.jsx)(ew.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, c.jsxs)(Z.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: i4.qU,
                            children: [
                                (0, c.jsxs)(Z.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: i4.NI,
                                    children: [
                                        (0, c.jsx)(J.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(J.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(Z.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: i4.br,
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
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                className: i4.yD,
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
                radioBarClassName: u()(i4.tG, { [i4.uA]: s, [i4.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(i9.$d, {
        ...n,
        options: a,
        value: t,
        size: i9.r9.NOT_SET,
        className: u()(i4.ul, i),
        withTransparentBackground: !0,
    });
}
var nt = s(118751),
    ns = s(773669),
    ni = s(97352),
    nn = s(526292),
    na = s(387278),
    nl = s(369827),
    nr = s(803496);
function nc(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nl.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nr.A)({
            activeSubscription: t,
            skuIDs: [(0, er.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function no(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nd(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tf.Ff.YEAR
          ? eI.intl.format(eI.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : eI.intl.format(eI.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nu = s(614488);
function nm(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(i6.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(Q.$, {
                size: "md",
                fullWidth: !0,
                icon: q.NitroWheelIcon,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nx(e) {
    let { skuId: t, className: s, variant: i = "default" } = e,
        n = t === tf.pe.TIER_2,
        a = "settings" === i,
        l = (0, sK.q)((0, sZ.Ay)()),
        r = (0, eu.V)(),
        d = r?.subscriptionTrial,
        m = d?.skuId === t,
        g = n && m && null != d,
        {
            planRadioOptions: p,
            selectedPlanId: h,
            setSelectedPlanId: f,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tf.En[t],
                a = tf.zE[t],
                l = t === tf.pe.TIER_2,
                r = nc(t),
                c = (0, eu.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, er.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tf.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tf.gD.PREMIUM_YEAR_TIER_0, tf.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                p = (0, ed.O)(),
                h = (0, nn.k5)(),
                f = (0, x.bG)([ns.default], () => ns.default.locale),
                N = (0, z.U9)(p, t),
                A = (0, z.N1)(n),
                j = (0, z.N1)(a),
                [b, E] = (0, x.yK)([ni.A], () => [ni.A.get(n), ni.A.get(a)], [n, a]),
                T = null != b ? (0, er.sS)(b, r) : null,
                I = null != E ? (0, er.sS)(E, r) : null,
                C =
                    N && p?.discount.amount != null && !h
                        ? eI.intl.formatToPlainString(eI.t.IAybsG, {
                              discount: (0, nt.l9)(f, Number(p.discount.amount) / 100),
                          })
                        : null,
                R = p?.discount?.planIds,
                v = no(a, N, R, j, I),
                _ = no(n, N, R, A, T),
                y = p?.discount.userUsageLimitInterval,
                P = p?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, na.Cj)(E, !1, r),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tf.pe.TIER_2 ? null : s && !i ? tf.En[t] : tf.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == s || (s === n && m) ? O : s,
                U = [
                    {
                        value: a,
                        primaryText: eI.intl.string(eI.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nd({
                                      expectedUsageInterval: tf.Ff.YEAR,
                                      usageInterval: y,
                                      discountDuration: P,
                                      regularPrice: I,
                                      discountedPrice: j,
                                  })
                                : null) ?? S,
                        secondaryText: v ? j : I,
                        secondarySubText: v ? I : null,
                        badgeText: v ? C : null,
                        useGradientSelectedBorder: l && (d || v || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: eI.intl.string(eI.t.DKzs96),
                        primarySubText: _
                            ? nd({
                                  expectedUsageInterval: tf.Ff.MONTH,
                                  usageInterval: y,
                                  discountDuration: P,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : T,
                        secondarySubText: _ ? T : null,
                        badgeText: _ ? C : null,
                        useGradientSelectedBorder: l && (d || _),
                        isDisabled: g || m,
                    },
                ],
                L = k === a ? v : k === n && _;
            return { planRadioOptions: U, selectedPlanId: k, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !L };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: j } = (0, i5.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, i7.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        E = (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nu.MY,
                    children: (0, c.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nu.ck,
                        children: n ? eI.intl.string(eI.t.lG6a5x) : eI.intl.string(eI.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(Z.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nu.qT,
                    children: n
                        ? (0, c.jsx)(iQ.ZP, {
                              featureSet: iQ.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, c.jsx)(iQ.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, c.jsx)(i8.K, {}),
            ],
        }),
        T = (0, c.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nu.Ux,
            children: [
                a ? (0, c.jsx)("div", { className: nu.zI, children: E }) : E,
                g
                    ? (0, c.jsx)("div", {
                          className: nu.qS,
                          role: "separator",
                          children: (0, c.jsx)(J.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nu.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tf.WT.DAY:
                                          if (t % 7 == 0) return eI.intl.format(eI.t["1MYPH0"], { weeks: t / 7 });
                                          return eI.intl.format(eI.t.pYfIoO, { days: t });
                                      case tf.WT.MONTH:
                                          return eI.intl.format(eI.t["96hTLe"], { months: t });
                                      case tf.WT.YEAR:
                                          return eI.intl.format(eI.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(d.interval, d.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nu.yF }),
                (0, c.jsxs)("div", {
                    className: nu.qr,
                    children: [
                        (0, c.jsx)(ne, {
                            className: a ? nu.US : void 0,
                            planRadioOptions: p,
                            value: h ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, c.jsx)(nm, { skuId: t, selectedPlanId: h, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        I = u()(nu.Nr, s, { [nu.Fw]: n });
    return n
        ? (0, c.jsxs)(i3.h, {
              color: "nitro-pink",
              className: I,
              children: [
                  !a &&
                      (0, c.jsx)("div", {
                          className: nu.kX,
                          "aria-hidden": !0,
                          children: (0, c.jsx)(i2, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, c.jsx)("div", { className: I, children: T });
}
function ng(e) {
    let { className: t } = e,
        s = (0, sK.q)((0, sZ.Ay)()),
        i = nc(tf.pe.TIER_2),
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eD.A)({ userId: n?.id, size: e_._3.SIZE_32, animateOnHover: !0 }),
        r = (0, x.bG)([ni.A], () => ni.A.get(tf.gD.PREMIUM_GROUP_MONTH)),
        o = eI.intl.string(eI.t["2pG5Ga"]),
        d = (0, c.jsx)(i6.A, {
            subscriptionTier: tf.pe.TIER_2,
            initialPlanId: tf.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(Q.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: q.NitroWheelIcon,
                    text: o,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        m = null;
    if (null != r)
        try {
            m = (0, er.sS)(r, i, !1, !1, !1);
        } catch {
            m = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nu.Nr, t),
        children: (0, c.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nu.Ux,
            children: [
                (0, c.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nu.MY,
                    children: [
                        (0, c.jsx)(eL.D, {
                            variant: "nitro-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: nu.ck,
                            children: eI.intl.string(io.default.eSKiXk),
                        }),
                        null != n &&
                            (0, c.jsxs)(Z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nu.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nu.uA,
                                        children: (0, c.jsx)(ey.eu, {
                                            src: a,
                                            size: e_._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...l,
                                        }),
                                    }),
                                    (0, c.jsx)(Z.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nu.VL,
                                        children: (0, c.jsxs)(J.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-default",
                                            children: ["+", 5],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(Z.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nu.qT,
                    children: (0, c.jsx)(iQ.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nu.yF }),
                (0, c.jsxs)("div", {
                    className: nu.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nu.ec,
                            children: [
                                (0, c.jsx)(J.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: eI.intl.string(io.default.SvSwga),
                                }),
                                null == m
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(J.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: s ? "text-strong" : "text-overlay-light",
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
function np(e) {
    let { innerRef: t, className: s, variant: i = "default" } = e,
        n = "settings" === i,
        { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, iQ.pw)(t),
        r = (0, ir.PA)(),
        o = !n && r,
        d = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        m = { [nu.iR]: !d && !n };
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsxs)(Z.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nu.oB, s, { [nu.W0]: n }),
            children: [
                (0, c.jsx)(eL.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nu.op,
                    children: eI.intl.string(eI.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: l,
                    className: u()(nu.kR, { [nu.BQ]: o }),
                    children: [
                        (0, c.jsx)(nx, { skuId: tf.pe.TIER_0, className: u()(nu.rz, m), variant: i }),
                        (0, c.jsx)(nx, { skuId: tf.pe.TIER_2, className: u()(nu.Rv, m), variant: i }),
                        o && (0, c.jsx)(ng, { className: u()(nu.zz, m) }),
                    ],
                }),
            ],
        }),
    });
}
var nh = s(366010),
    nf = s(303136);
let nN = function (e) {
    let t,
        { className: s } = e,
        i = (0, e6.TM)(),
        n = (0, nh.q)((0, sZ.Ay)());
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
                nf.A,
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
var nA =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nj = s(352756);
let nb = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eK.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e7.animated.div, {
        className: u()(nj.iE, { [nj.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nj.UD,
            children: [
                (0, c.jsx)(ej.A, {
                    enableMarketingSubscribeCopyTest: !a,
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nE = s(573710);
let nT = function () {
    let e = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nE.BI,
                children: (0, c.jsx)(te, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e9.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nE.Q,
                    }),
                }),
            }),
            (0, c.jsx)(ts, {
                isMotionReduced: e,
                boltContainerClassName: nE.nJ,
                carContainerClassName: nE.IN,
                hammerContainerClassName: nE.Gj,
                keyContainerClassName: nE.FV,
                starContainerClassName: nE.E1,
                boltAssetClassName: nE.j7,
                carAssetClassName: nE.or,
                hammerAssetClassName: nE.Wv,
                keyAssetClassName: nE.rs,
                starAssetClassName: nE.OY,
            }),
        ],
    });
};
var nI = s(989756);
function nC(e) {
    let { ref: t, ...s } = e,
        { analyticsLocations: i } = (0, A.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(A.f5, {
        value: i,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nI.kL,
            children: (0, c.jsxs)("div", {
                className: nI.hQ,
                children: [
                    (0, c.jsx)(nT, {}),
                    (0, c.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nI.RH,
                        children: eI.intl.string(eI.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
nC.displayName = "PremiumMarketingFooter";
var nR = s(939249);
let nv = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nA.HOME]: eI.intl.string(eI.t.uGRXjS),
            [nA.WHATS_NEW]: eI.intl.string(eI.t["mfcR/v"]),
            [nA.BEST_OF_NITRO]: eI.intl.string(eI.t.xQKkE8),
            [nA.PLANS]: eI.intl.string(eI.t.wyNMnm),
            [nA.COMPARE]: eI.intl.string(eI.t.pwD7If),
        },
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tC.A, {
        className: t_.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: t_.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: t_.wG,
                    children: [
                        (0, c.jsx)(q.NitroWheelIcon, { className: t_.nE, colorClass: t_.oG }),
                        (0, c.jsx)("div", {
                            className: t_.zc,
                            role: "tablist",
                            "aria-label": eI.intl.string(eI.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nR.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: t_.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(J.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: t_.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: t_.MQ,
                    children: [
                        null != n && (0, c.jsx)(tv.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var n_ = s(713271),
    ny = s(704333),
    nP = s(414499),
    nS = s(597770),
    nD = s(500060),
    nM = s(866665),
    nO = s(406860),
    nk = s(870975),
    nU = s(698834);
function nL() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nO.A)({ boxType: tB.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: ny.ServerGridIcon, text: eI.intl.string(tV.default.MUypiB) },
            { icon: nP.CloudIcon, text: eI.intl.string(tV.default.ec5Rdd) },
            { icon: nS.GiftIcon, text: eI.intl.string(tV.default["9t2CzW"]), tooltip: tV.default.AyECej },
            { icon: nD.ScreenStreamIcon, text: eI.intl.string(tV.default.R7YJAY) },
        ];
    return (0, c.jsx)(L.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nU.iE,
            children: (0, c.jsxs)("div", {
                className: nU.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nU.j,
                        children: [
                            (0, c.jsx)("div", { className: nU._g }),
                            (0, c.jsx)("div", { className: nU.$h }),
                            (0, c.jsx)("div", { className: nU.Rv }),
                            (0, c.jsx)("div", { className: nU.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nU.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nU.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(eL.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: nU.R_,
                                                children: eI.intl.string(tV.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nU.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(J.E, {
                                                                        variant: "body-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nU.Jn,
                                                                            children: (0, c.jsx)(nM.m, {
                                                                                text: eI.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    tM.CircleInformationIcon,
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
                                                        className: nU.xF,
                                                        children: (0, c.jsx)(ej.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tf.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nU.WE,
                                        children: (0, c.jsx)(J.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: eI.intl.format(tV.default.KDKdWi, { termsLink: (0, nk.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nU.r1,
                                children: (0, c.jsx)("img", {
                                    className: nU.wm,
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
var nG = s(886205),
    nw = s(750338),
    nB = s(221168),
    nH = s(505051);
function nF(e) {
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
        className: u()(nH.boxBackdrop, t),
        children: [
            (0, c.jsx)(eL.D, {
                className: nH.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: nH.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nH.bentoBoxesGrid,
                children: s.flatMap((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nB.A0.SMALL;
                            break;
                        case 2:
                            s = nB.A0.MEDIUM;
                            break;
                        default:
                            s = nB.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, c.jsx)(
                            nw.A,
                            { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let nV = o.memo(function (e) {
        let t = (0, tS.b)("premium_marketing_bento"),
            s = (0, su.mh)({ location: "premium_marketing_bento" }),
            { enabled: i } = (0, t0.vc)({ location: "premium_marketing_bento" }),
            { enabled: n } = nG.A.useConfig({ location: "premium_marketing_bento" }),
            a = t && !s && !(i && n),
            { whatsNewBoxes: l } = (0, nB.Ay)(a);
        return (0, c.jsx)(nF, {
            boxLayout: l,
            title: eI.intl.string(eI.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: a ? (0, c.jsx)(nL, {}) : null,
            ...e,
        });
    }),
    nW = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nB.Ay)();
        return (0, c.jsx)(nF, { boxLayout: t, title: eI.intl.string(eI.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nz = (0, st.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nY = s(236834),
    nX = s(540504);
function nK(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eD.A)({ userId: t?.id, size: e_._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nX.$6,
        children: (0, c.jsxs)("div", {
            className: nX.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nX.kR,
                    children: (0, c.jsx)(ey.eu, { src: s, "aria-label": t.username, size: e_._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(eL.D, {
                    variant: "heading-xs/medium",
                    className: nX.FS,
                    color: "text-strong",
                    children: eI.intl.format(eI.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var nZ = s(579245),
    nJ = s(369805);
let nq = function () {
    let e = (0, nJ.A)();
    return null == e ? null : (0, c.jsx)(eh, { text: e });
};
function nQ() {
    let e = (0, x.bG)([ni.A], () => ni.A.getForSkuAndInterval((0, er.mH)(tf.pe.TIER_0), tf.WT.MONTH));
    return null != e ? (0, er.sS)(e) : "\u2026";
}
var n$ = s(508556);
let n0 = function (e) {
    let { containerVisibilityPercentage: t, variant: s = "default" } = e,
        i = "settings" === s,
        n = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        a = (0, e6.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: u()(n$.YU, { [n$.W0]: i }),
        children: [
            (0, c.jsx)(tl, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: n$.wG,
                assetClassName: n$.lu,
                variant: s,
            }),
            (0, c.jsx)(ts, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: n$.nJ,
                carContainerClassName: n$.IN,
                hammerContainerClassName: n$.Gj,
                keyContainerClassName: n$.FV,
                starContainerClassName: n$.E1,
                boltAssetClassName: n$.j7,
                carAssetClassName: n$.or,
                hammerAssetClassName: n$.Wv,
                keyAssetClassName: n$.rs,
                starAssetClassName: n$.OY,
                animateStar: !i,
            }),
        ],
    });
};
var n1 = s(14057);
let n2 = o.memo(function (e) {
    let { className: t, subscriptionTier: s, isEligibleForBogoPromotion: i, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        o = nQ(),
        d = nz.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        m = (0, nY.A)(),
        g = null != m,
        { visibilityPercentageRef: p, visibilityPercentage: h } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = (0, iZ.b)(),
        j = !g && f.length > 0,
        b = (0, em.c)(X.C.MARKETING_PAGE_BANNER),
        E = null != b && "marketingPageBanner" === b.properties.properties.oneofKind,
        T = (0, nn.ar)() && !E,
        I = (0, ed.O)(),
        C = (null != I && tf.U4.includes(I.discountId)) || E;
    return (0, c.jsx)(A.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: n,
            className: u()(n1.kL, t, { [n1.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, c.jsx)(nN, { className: n1.kv }),
                (0, c.jsx)("div", {
                    ref: p,
                    children: (0, c.jsxs)("div", {
                        className: n1.hQ,
                        children: [
                            (0, c.jsx)(n0, { containerVisibilityPercentage: h, variant: a }),
                            T && (0, c.jsx)(nq, {}),
                            (0, c.jsx)("div", {
                                className: n1.s8,
                                children: (0, c.jsx)(eU.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(eL.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : n1.wx,
                                        children: eI.intl.string(eI.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: n1.rf,
                                children: [
                                    g &&
                                        (0, c.jsx)("div", {
                                            className: n1.eZ,
                                            children: (0, c.jsx)(nK, { referrer: m }),
                                        }),
                                    j &&
                                        (0, c.jsx)("div", {
                                            className: n1.Qn,
                                            children: (0, c.jsx)(nZ.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: T ? n1.es : n1.UJ,
                                        children: [
                                            (0, c.jsx)(ej.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!i,
                                                subscriptionTier: C && null == s ? tf.pe.NONE : s,
                                                buttonTextOverride: C ? eI.intl.string(eI.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n1.iQ,
                                        children: (0, c.jsx)(J.E, {
                                            color: "text-muted",
                                            variant: "body-xs/medium",
                                            children: d
                                                ? eI.intl.string(eI.t.jHqrJW)
                                                : eI.intl.format(eI.t.kt9wxs, { cheapestMonthlyPrice: o }),
                                        }),
                                    }),
                                    null != b &&
                                        "marketingPageBanner" === b.properties.properties.oneofKind &&
                                        (0, c.jsx)(ef.x, {
                                            componentId: b.id,
                                            promotionId: b.promotionId,
                                            promotionBannerMarketingComponentFields:
                                                b.properties.properties.marketingPageBanner,
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
var n3 = s(812537);
let n6 = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        s = (0, o.useCallback)(
            (e) => {
                let s = r.current[e];
                null != s &&
                    ((s.style.scrollMarginTop = `${t}px`), s.scrollIntoView({ behavior: "smooth", block: "start" }));
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
var n7 = s(818348),
    n5 = s(773188);
let n8 = () => {
    let e = (0, m.zy)();
    (0, v.P)(R);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [p, h] = o.useState(!1),
        [f, j] = o.useState(!1),
        [b, E] = o.useState(!1),
        T = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        I = null != T ? (0, er.EL)(T) : null,
        C = null != I ? er.Ay.getSkuIdForPlan(I.planId) : null,
        _ = null !== C && C !== tf.pe.TIER_2 ? tf.pe.TIER_2 : null,
        { analyticsLocations: y } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, s6.lk)(it.rE.NITRO_HOME_MARKETING),
        S = P ? n_.N.COMBINED_ORBS : n_.N.ORB_REWARDS,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(iY.x);
            return "orbs" === t
                ? S
                : t === n_.N.THREE_P_PROMOTIONS
                  ? n_.N.THREE_P_PROMOTIONS
                  : t === n_.N.YOUTUBE
                    ? n_.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    iz(D ?? "", null != D);
    let { navBarSections: k, activeSectionId: U } = n6([nA.HOME, nA.WHATS_NEW, nA.BEST_OF_NITRO, nA.PLANS, nA.COMPARE]),
        { home: w, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = k,
        W = (0, c.jsxs)("div", {
            ref: s,
            className: u()(n5.kL, n5.Gd, n5.iI, { [n5.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nN, { className: n5.yH }),
                (0, c.jsx)(nv, { navBarSections: k, activeSectionId: U }),
                (0, c.jsxs)("div", {
                    className: n5.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: n5.qY,
                            ref: w.ref,
                            children: (0, c.jsx)(L.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n2, { ref: n, subscriptionTier: _ }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: n5.So,
                            ref: B.ref,
                            children: (0, c.jsx)(nV, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: n5.KQ,
                            ref: H.ref,
                            children: (0, c.jsx)(nW, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: n5.qc,
                            ref: F.ref,
                            children: (0, c.jsx)(L.L, {
                                innerRef: i,
                                onChange: (e) => h(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(np, { innerRef: i }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: n5.aC, ref: V.ref, children: (0, c.jsx)(n3.A, {}) }),
                    ],
                }),
                (0, c.jsx)(L.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (O.default.track(eK.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            j(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: n5._Z }),
                }),
                (0, c.jsx)(nC, { ref: l }),
                (0, c.jsx)(nb, { isVisible: !d && !p && b, subscriptionTier: _ }),
                (0, c.jsx)(nN, { className: n5.MF }),
            ],
        });
    return (0, c.jsx)(tO.N, {
        theme: n7.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(n5.XG, e), ref: t, children: W }),
    });
};
var n9 = s(862482),
    n4 = s(300349),
    ae = s(106512),
    at = s(412260),
    as = s(662367),
    ai = s(374403),
    an = s(396375),
    aa = s(900797),
    al = s(847374),
    ar = s(614268);
function ac(e) {
    let { className: t } = e;
    return (0, c.jsx)("div", {
        className: u()(ar.i, t),
        children: (0, c.jsx)(ew.E, { type: "early_access", variant: "premium" }),
    });
}
var ao = s(536071),
    ad = s(729934);
let au = "/assets/5b4fec8511c3676a.svg",
    am = "/assets/0838bda6ecd20d91.svg";
function ax(e, t, s) {
    return (0, sK.M)(e) ? t : s;
}
var ag = s(872461);
function ap(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nR.D, {
        onClick: s,
        className: ag.customButton,
        children: [
            t ? eI.intl.string(eI.t.maZaN3) : eI.intl.string(eI.t["37C26f"]),
            t
                ? (0, c.jsx)(aa.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: ag.arrow })
                : (0, c.jsx)(al.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: ag.arrow }),
        ],
    });
}
function ah(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: o = !1,
            variant: d = "default",
        } = e,
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        x = (0, c.jsx)("img", { src: n, alt: "", className: u()(a, ag.perksCardArt) }),
        g = "settings" === d;
    return (0, c.jsx)(A.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: u()(ag.perkCard, i, { [ag.settingsCard]: g }),
            children: [
                r ? (0, c.jsx)(ao.A, { className: ag.perkCardNewBadge }) : null,
                o ? (0, c.jsx)(ac, { className: ag.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, c.jsx)(Z.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: ag.settingsArt,
                          children: x,
                      })
                    : x,
                (0, c.jsxs)("div", {
                    className: g ? ag.settingsText : void 0,
                    children: [
                        (0, c.jsxs)(eL.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: ag.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: ag.perkCardDescription,
                            children: "function" == typeof s ? s(m) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let af = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, sZ.Ay)(),
                n = (0, sQ.X)("usePerkCards"),
                a = (0, e3.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return er.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, er.EJ)(tf.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: eI.intl.string(eI.t.SS87rQ),
                    description: eI.intl.string(eI.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eI.intl.string(eI.t["5cYMu0"]),
                    description: eI.intl.string(eI.t.vxk9va),
                    imageSource: ax(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eI.intl.string(eI.t["/xvEMy"]),
                    description: eI.intl.string(eI.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eI.intl.string(eI.t.OuItFi),
                    description: eI.intl.string(eI.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eI.intl.string(eI.t["R2IV/Q"]),
                    description: eI.intl.string(eI.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eI.intl.string(eI.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? eI.intl.formatToPlainString(eI.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : eI.intl.formatToPlainString(eI.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (ad.A.setState({ scrollPosition: iD._F.TRY_IT_OUT }),
                                    t(ei.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? eI.intl.format(eI.t.aj1pfZ, { onCheckItOutClick: t })
                            : eI.intl.format(eI.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eI.intl.string(eI.t.BUScid),
                    description: eI.intl.string(eI.t.vN6XpQ),
                    imageSource: ax(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eI.intl.string(eI.t.Bv8Pfk),
                    description: eI.intl.string(eI.t.JMfaTU),
                    imageSource: ax(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eI.intl.string(eI.t.Bv8Pfk),
                    description: eI.intl.string(eI.t.JMfaTU),
                    imageSource: ax(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eI.intl.string(eI.t["lGcW+c"]),
                    description: eI.intl.string(eI.t["/fDyO+"]),
                    imageSource: ax(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eI.intl.string(eI.t["1c+xwT"]),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: ax(i, am, au),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eI.intl.string(eI.t.tzdIwI),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: ax(i, am, au),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eI.intl.string(eI.t.tzdIwI),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: ax(i, am, au),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eI.intl.string(eI.t.RSXQYO),
                    description: eI.intl.string(eI.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eI.intl.string(eI.t["uZt5q/"]),
                    description: eI.intl.string(eI.t.ZK3ZoX),
                    imageSource: ax(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eI.intl.formatToPlainString(eI.t.jqhAdL, { premiumMaxSize: l }),
                    description: eI.intl.formatToPlainString(eI.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eI.intl.string(eI.t.NaGpTf),
                    description: eI.intl.string(eI.t["A8O/Qw"]),
                    imageSource: ax(i, iM, iO),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ag }),
        r = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(ag.perksContainer, t, {
            [ag.partiallyHidden]: i && !n,
            [ag.subscriberNitroHome]: i,
            [ag.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(eL.D, {
                variant: "heading-xxl/semibold",
                className: ag.perksTitle,
                children: i ? eI.intl.string(eI.t.QX14gI) : eI.intl.string(eI.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(ag.perkCardContainer, { [ag.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, c.jsx)(ah, { ...t }, e);
                }),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [ag.sizeGizmo]: !n, [ag.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(ap, {
                                onClick: function () {
                                    (O.default.track(eK.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(ag.cover, { [ag.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aN = s(615939);
let aA = o.memo(function (e) {
    let { className: t } = e,
        s = [
            {
                id: tG.MORE_EMOJIS_CARD_ID,
                title: eI.intl.string(eI.t["R2IV/Q"]),
                description: eI.intl.string(eI.t.DRMecB),
                imageSource: sU.A,
            },
            {
                id: tG.HD_VIDEO_CARD_ID,
                title: eI.intl.string(eI.t["/mQ5gg"]),
                description: eI.intl.string(eI.t["7WwAXh"]),
                imageSource: sO.A,
            },
            {
                id: tG.LARGE_UPLOADS_CARD_ID,
                title: eI.intl.string(eI.t.nL1WZV),
                description: (0, s0.M6)({
                    legacyCopy: eI.intl.formatToPlainString(eI.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eI.intl.formatToPlainString(eI.t.teOTfv, {
                        maxFileSize: (0, er.EJ)(tf.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: aN.A,
            },
            {
                id: tG.PROFILES_CARD_ID,
                title: eI.intl.string(eI.t.KcyDwF),
                description: eI.intl.string(eI.t.Mt3U1W),
                imageSource: sD,
            },
        ];
    return (0, c.jsxs)(Z.B, {
        gap: 16,
        className: u()(ag.settingsPerks, t),
        children: [
            (0, c.jsx)(eL.D, { variant: "heading-xl/semibold", children: eI.intl.string(eI.t.q1u7nQ) }),
            (0, c.jsx)(eU.F, {
                children: (0, c.jsx)("div", {
                    className: ag.settingsGrid,
                    children: s.map((e) => (0, c.jsx)(ah, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var aj = s(695366),
    ab = s(370049);
let aE = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nn.ar)();
    if (null == i) return null;
    let r = null != i ? er.Ay.getPremiumPlanItem(i) : null;
    if (
        (er.Ay.isBoostOnlySubscription(i)
            ? (t = eI.intl.string(eI.t.Uj0md3))
            : null != r && (t = er.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, en.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? er.Ay.getSkuIdForPlan(r.planId) : null) === tf.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tk.Z, {
            className: u()(ab.kL, n, { [ab.He]: l }),
            type: tk.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(aj.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(ab.Kk, { [ab.Pt]: l }),
                }),
                (0, c.jsx)(J.E, {
                    variant: "body-sm/medium",
                    color: s,
                    children: d
                        ? eI.intl.format(eI.t["tYuv+T"], {
                              helpdeskArticle: el.A.getArticleURL(eK.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : eI.intl.format(eI.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aT = s(978836);
let aI = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aT.zr, { [aT.N]: t }),
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
                        (0, c.jsx)("stop", { className: aT.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aT.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aT.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aT.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aT.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aC = s(194509),
    aR = s(317587);
let av = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eK.JJy.MARKETING_FLOATING_CTA },
        r = (0, sZ.Ay)(),
        o = (0, nh.M)(r);
    return (0, c.jsx)(e7.animated.div, {
        className: u()(aR.iE, { [aR.H8]: i, [aR.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aR.zW : aR.iJ,
            children: [
                (0, c.jsx)(an.A, {
                    color: o ? n9.XD.BRAND_INVERTED : void 0,
                    className: u()(aR.x6, { [aR.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aR.PJ,
                }),
                (0, c.jsx)(aC.A, { className: aR.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var a_ = s(386564);
function ay(e) {
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
            ? (0, c.jsx)(an.A, {
                  color: l ? n9.XD.BRAND_INVERTED : void 0,
                  className: u()(a_.x6, a_.Ph, n, { [a_.Sq]: t && a, [a_.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : a_.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(an.A, {
                  color: l || !a ? n9.XD.BRAND_INVERTED : void 0,
                  className: u()(a_.x6, a_.Ph, n, { [a_.Sq]: t && a, [a_.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aC.A, { className: u()(a_.x6, n), color: a ? void 0 : n9.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(a_.UD, i), children: [o, " ", d] });
}
function aP() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(ao.p, { className: a_.zd }),
            (0, c.jsx)(ao.p, { className: a_.G }),
            (0, c.jsx)(ao.p, { className: a_.zy }),
            (0, c.jsx)(ao.p, { className: a_.GX }),
        ],
    });
}
function aS(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = nQ();
    return (0, c.jsx)(J.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(a_.h_, { [a_.If]: s, [a_.jn]: i }),
        children: eI.intl.format(eI.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aD = function (e) {
    let { className: t, buttonClassName: s, subscriptionTier: i, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ec.QQ)(),
        o = (0, nn.ar)(),
        d = (0, iZ.b)().length > 0,
        m = eI.intl.string(eI.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(a_.kL, t, { [a_.V1]: !o, [a_.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? a_.I6 : a_.G1,
                    children: [
                        (0, c.jsx)(eU.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(eL.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: a_.DF,
                                  children: (0, c.jsx)(nZ.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aS, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: a_.UD,
                                  children: (0, c.jsx)(aC.A, { className: u()(a_.x6, s), color: n9.XD.WHITE }),
                              })
                            : (0, c.jsx)(ay, {
                                  subscriptionTier: i,
                                  inOfferExperience: o,
                                  buttonClassName: s,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(aS, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aP, {}),
            ],
        }),
    });
};
var aM = s(403227),
    aO = s(145359),
    ak = s(377770);
function aU(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aI, { lifted: t }) : null;
}
let aL = () => {
        let { enabled: e } = n4.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, v.P)(R);
        let t = o.useRef(null),
            s = o.useRef(null),
            i = o.useRef(null),
            n = (0, sZ.Ay)(),
            a = (0, sK.M)(n),
            [l, r] = o.useState(!1),
            [d, m] = o.useState(!1),
            [g, p] = o.useState(!1),
            h = !l && !d,
            [f, j] = o.useState(!1),
            b = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            E = null != b ? (0, er.EL)(b) : null,
            T = null != E ? er.Ay.getSkuIdForPlan(E.planId) : null,
            I = null !== T && T !== tf.pe.TIER_2 ? tf.pe.TIER_2 : null,
            C = (0, eu.V)(),
            _ = C?.subscriptionTrial?.skuId,
            y = (0, nn.ar)(),
            P = !e && y,
            S = (0, x.bG)([at.A], () => {
                let e = at.A.getMarketingComponentByType(X.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, ai.Q)(),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            j(!0);
        }, []);
        let U = e
            ? (0, c.jsx)("div", {
                  className: ak.OE,
                  children: (0, c.jsx)(L.L, {
                      innerRef: t,
                      onChange: m,
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(np, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, c.jsx)("div", {
                  className: ak.dY,
                  children: (0, c.jsx)(L.L, {
                      innerRef: t,
                      onChange: (e) => m(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(iQ.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, c.jsx)(an.A, {
                              showIcon: !1,
                              subscriptionTier: tf.pe.TIER_0,
                              className: aO.Ph,
                              look: n9.pR.OUTLINED,
                              color: n9.XD.WHITE,
                              buttonShineClassName: aO.Qr,
                          }),
                          tier2CTAButton:
                              _ === tf.pe.TIER_0
                                  ? (0, c.jsx)(an.A, {
                                        showIcon: !1,
                                        subscriptionTier: tf.pe.TIER_2,
                                        className: aO.Ph,
                                        look: n9.pR.OUTLINED,
                                        color: n9.XD.WHITE,
                                        buttonShineClassName: aO.Qr,
                                    })
                                  : (0, c.jsx)(an.A, {
                                        color: n9.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tf.pe.TIER_2,
                                        className: aO.Ph,
                                        textOptions: { textClassName: aO.Ac },
                                        buttonShineClassName: aO.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, c.jsxs)("div", {
            className: u()(ak.kL, { [ak.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aE, {
                    premiumSubscription: b,
                    textColor: e ? "text-default" : void 0,
                    className: u()(ak.R3, { [ak.aZ]: y }),
                }),
                P &&
                    (0, c.jsxs)("div", {
                        className: ak.n1,
                        children: [
                            (0, c.jsx)(aU, { inOfferExperience: y }),
                            (0, c.jsx)(tv.l, {
                                className: ak.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [ak.V1]: !P }),
                    children: [
                        null != S && (0, c.jsx)(ae.m, { className: ak.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: ak.iS,
                            children: [
                                !P &&
                                    (0, c.jsx)(tv.l, {
                                        className: ak.ij,
                                        size: "md",
                                        location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(L.L, {
                                    innerRef: s,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, c.jsx)(tO.N, {
                                              theme: n7.NJ.DARK,
                                              children: (e) =>
                                                  (0, c.jsx)("div", {
                                                      className: e,
                                                      children: (0, c.jsx)(n2, {
                                                          ref: s,
                                                          subscriptionTier: I,
                                                          variant: "settings",
                                                      }),
                                                  }),
                                          })
                                        : (0, c.jsx)(aD, {
                                              ref: s,
                                              subscriptionTier: I,
                                              className: u()({ [ak.p7]: y, [ak.Pw]: y, [ak.Cv]: null != b }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: ak.Ol, children: (0, c.jsx)(as.I, { component: D }) }),
                U,
                e ? (0, c.jsx)(aA, { className: ak.OE }) : (0, c.jsx)(af, { className: ak.B_ }),
                (0, c.jsx)("div", {
                    className: ak.aC,
                    children: e
                        ? (0, c.jsx)(n3.A, { variant: "settings" })
                        : (0, c.jsx)(aM.A, { className: ak.JQ, hideCTAs: !0 }),
                }),
                (0, c.jsx)("div", { className: ak.hz }),
                e
                    ? (0, c.jsx)(nb, { isVisible: h && f, subscriptionTier: I, variant: "settings" })
                    : (0, c.jsx)(av, { isVisible: h && f, subscriptionTier: I, isApplicationHome: !1 }),
                (0, c.jsx)(L.L, {
                    innerRef: i,
                    onChange: (e) => {
                        e &&
                            !g &&
                            (O.default.track(eK.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: k }),
                            p(!0));
                    },
                    children: (0, c.jsx)("div", { ref: i, className: ak._Z }),
                }),
                (0, c.jsx)("img", {
                    src: iX,
                    className: ak.Kw,
                    width: 112,
                    height: 85,
                    alt: eI.intl.string(eI.t.X4IxWL),
                }),
            ],
        });
    },
    aG = function (e) {
        let { entrypoint: t } = e,
            s = (0, eu.V)(),
            i = (0, ed.O)(),
            n = (0, iq.NF)({ trialOffer: s }),
            a = (0, iq.Tp)(),
            l = (0, x.bG)([iJ.A], () => iJ.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, iq.QG)(), !0 === a && (0, iq.ne)(l), (null != s || null != i) && (0, U.u1)(s, i));
            }, [s, i, n, a, l]),
            t)
        ) {
            case tf.tU.UserSettings:
                return (0, c.jsx)(aL, {});
            case tf.tU.ApplicationStoreHome:
                return (0, c.jsx)(n8, {});
            default:
                return null;
        }
    };
var aw = s(531296);
let aB = function (e) {
    let { entrypoint: t = tf.tU.UserSettings } = e;
    (0, v.P)(R);
    let s = (0, b.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        I = (0, eu.V)(),
        C = (0, ed.O)(),
        L = (0, E.Y)(tf.T7),
        [G, w] = o.useState(!0),
        B = o.useRef(0),
        H = (0, k.YE)(r, tf.PremiumTypes.TIER_2);
    ((0, iZ.b)(),
        o.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([j.hP(), j.$o(), (0, p.zS)(null, null, eK.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        o.useEffect(() => {
            G ||
                O.default.track(eK.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: B.current,
                });
        }, [i, G]),
        o.useEffect(() => {
            s && (null != I || null != C) && (0, U.u1)(I, C);
        }, [s, I, C]));
    let F = (0, m.zy)(),
        V = o.useRef(!1),
        W = a && l && L,
        [z, Y] = o.useState(W);
    (W && !z && Y(!0),
        o.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tf.pe.TIER_0, nitro: tf.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((V.current = !0),
                (0, y.bG)(eK.BVt.APPLICATION_STORE),
                (0, _.A)({ subscriptionTier: s, analyticsLocations: n }));
        }, [W, F.search, n]));
    let X = (0, x.bG)([P.A], () => P.A.enabled),
        K = t === tf.tU.ApplicationStoreHome,
        Z = X
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : K && H
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(iK, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(aw.kL, aw.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !X && !s && K && H
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [K && (0, c.jsx)(f.A, {}), Z] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(aG, { entrypoint: t }) });
};
