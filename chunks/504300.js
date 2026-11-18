(s.d(t, { A: () => a9 }), s(323874), s(14289), s(35956), s(205816));
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
    h = s(73825),
    p = s(369143),
    f = s(107834),
    N = s(793574),
    A = s(688810),
    j = s(669815),
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
    L = s(739053),
    U = s(831259),
    G = s(516521),
    w = s(961250),
    H = s(622886),
    B = s(851767),
    F = s(917445),
    V = s(131168),
    W = s(511484),
    z = s(175020),
    Y = s(517352),
    X = s(192308),
    K = s(331322),
    Z = s(834730),
    q = s(403581),
    J = s(821609),
    Q = s(502572),
    $ = s(775602),
    ee = s(366999),
    et = s(531260),
    es = s(780964),
    ei = s(766075),
    en = s(786300),
    ea = s(975571),
    el = s(448645),
    er = s(89366),
    ec = s(881489),
    eo = s(423814),
    ed = s(77528),
    eu = s(641436),
    em = s(172218);
function ex() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, em.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eg = s(287763);
let eh = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eg.i,
        children: (0, c.jsx)(Z.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var ep = s(371764),
    ef = s(103411),
    eN = s(65470),
    eA = s(792656),
    ej = s(536637),
    eb = s.n(ej),
    eE = s(496431),
    eT = s(792996),
    eI = s(850292);
let eC = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "body-md/medium" } = e,
        n = (0, eE.A)(eb()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(eI.Xl, s, { [eI.a3]: "body-lg/semibold" === i }),
        children: [
            (0, c.jsx)(Z.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: eT.intl.string(eT.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: eI.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: eI.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: eI.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: eI.B2,
                                                        children: (0, c.jsx)(Z.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: eI.B2,
                                                        children: (0, c.jsx)(Z.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(Z.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return eT.intl.string(eT.t.ixASa2);
                                                        case "hours":
                                                            return eT.intl.string(eT.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eT.intl.string(eT.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eT.intl.string(eT.t.JhaiLW);
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
                                    (0, c.jsx)(Z.E, {
                                        className: eI.cV,
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
var eR = s(473702),
    ev = s(778712),
    e_ = s(97808),
    ey = s(609425),
    eP = s(16371),
    eS = s(854627),
    eD = s(427262),
    eM = s(938767);
function eO() {
    let e = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, ey.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eS.A)({ userId: e?.id, size: ev._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eD.mG)(e);
    return (0, c.jsxs)("div", {
        className: eM.kL,
        children: [
            (0, c.jsx)("div", {
                className: eM.my,
                children: (0, c.jsx)(e_.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: ev._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: eM.QC, children: (0, c.jsx)(eP.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var ek = s(707554),
    eL = s(534514);
let eU = function (e) {
    let { className: t, color: s = "text-strong", variant: i = "nitro-lg", children: n } = e;
    return (0, c.jsx)(ek.F, {
        forceLevel: 1,
        children: (0, c.jsx)(eL.D, { className: t, variant: i, color: s, children: n }),
    });
};
var eG = s(805251),
    ew = s(969935),
    eH = s(132506),
    eB = s(610709),
    eF = s(478016),
    eV = s(318254),
    eW = s(646514),
    ez = s(626031),
    eY = s(197630);
s(232198);
var eX = s(652215),
    eK = s(957457);
function eZ(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eY.xb.ORBS
          ? (0, c.jsx)(eq, { nRewardsGranted: t, className: i })
          : s === eY.xb.DISCOUNT
            ? (0, c.jsx)(eJ, { nRewardsGranted: t, className: i })
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
        (0, c.jsxs)(K.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: eK.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(eV.OrbsIcon, { size: "xs", color: eW.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(ez.t, {
                            value: n,
                            onValueChange: eX.tEg,
                            onValueReached: eX.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "body-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(Z.E, {
                    variant: "body-sm/medium",
                    color: "text-strong",
                    children: eT.intl.string(eT.t.UhguER),
                }),
            ],
        })
    );
}
function eJ(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(K.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": eT.intl.formatToPlainString(eT.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(eF.CheckmarkSmallIcon, { size: "md", color: eW.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(Z.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eT.intl.format(eT.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var eQ = s(303682),
    e$ = s(758836),
    e0 = s(558992);
function e1(e) {
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
        className: u()(e0.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e0.G3,
                children: (0, c.jsx)(eB.fx, {
                    nReferralsSent: i,
                    imageSize: 55,
                    backgroundClassName: e0.HP,
                    ringClassName: e0.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(e0.IH, d && e0.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: e0.aZ,
                            children: (0, c.jsx)(eG.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: e0.n4,
                        children: [
                            (0, c.jsx)(Z.E, { variant: "body-md/semibold", color: "text-strong", children: l }),
                            (0, c.jsx)(Z.E, {
                                variant: d ? "body-sm/medium" : "body-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: e0.Wp,
                              children: [
                                  (0, c.jsx)(eB.ZP, { referralSentUsers: s }),
                                  (0, c.jsx)(eZ, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(eB.ZP, { referralSentUsers: s, className: e0.t7 }),
                ],
            }),
            (0, c.jsx)(J.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? eT.intl.string(eT.t.iw5Ccc) : eT.intl.string(eT.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, ew.Cz)({
                              tab: e$.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: N.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eB.jM)({
                              startingScreen: eQ.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e2 = s(164636),
    e3 = s(676279),
    e6 = s(120692),
    e7 = s(717421),
    e5 = s(396583),
    e8 = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    e9 = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let e4 = (e) => {
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
        u = (0, e7.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        h = (0, e7.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [p, f] = (0, o.useState)(1),
        N = (0, e7.z)(
            null != t
                ? {
                      from: { blur: p > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: p > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, o.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, b] = (0, o.useState)(0),
        [E, T] = (0, o.useState)(1),
        I = (0, e7.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e5.A)(() => {
        (b(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(e6.animated.div, {
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
                  scale: h.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var te = s(382168);
let tt = function (e) {
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
        animationSpeedScale: h = 1,
        blurScale: p = 1,
        animateStar: f = !0,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(te.nJ, i),
                    children: (0, c.jsx)(e4, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e8.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e9.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: o,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, c.jsx)("div", {
                    className: u()(te.IN, n),
                    children: (0, c.jsx)(e4, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e8.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e9.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, c.jsx)("div", {
                    className: u()(te.Gj, a),
                    children: (0, c.jsx)(e4, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e8.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e9.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, c.jsx)("div", {
                    className: u()(te.FV, l),
                    children: (0, c.jsx)(e4, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e8.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e9.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, c.jsx)("div", {
                    className: u()(te.E1, r),
                    children: (0, c.jsx)(e4, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: e8.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e9.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t || !f,
                        animationSpeedScale: h,
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
var ts = s(607470),
    ti = s(562915);
let tn =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    ta = function (e) {
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
                          ? ti.A
                          : "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)(e4, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: e8.SINE },
                      parallaxAnimationData: {
                          pathDirection: e9.UP,
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
                                ts.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tn }),
                                },
                                tn,
                            ),
                  }),
              });
    },
    tl = function (e) {
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
                animationSpeedScale: h = 1,
            } = e,
            p = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion),
            f = (0, e3.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(ta, {
                    supportHEVCAlpha: f,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: h,
                }),
                (0, c.jsx)(tt, {
                    isMotionReduced: p,
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
                    animationSpeedScale: h,
                }),
            ],
        });
    };
var tr = s(942663);
let tc = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tl, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tr.wG, s && tr.Vx),
        flyingWumpusAssetClassName: u()(tr.lu, s && tr.ov),
        boltContainerClassName: u()(tr.nJ, s && tr.Wc),
        hammerContainerClassName: u()(tr.Gj, s && tr.XA),
        keyContainerClassName: u()(tr.FV, s && tr.oZ),
        starContainerClassName: u()(tr.E1, s && tr.LN),
        boltAssetClassName: u()(tr.j7, s && tr.QN),
        hammerAssetClassName: u()(tr.Wv, s && tr.B9),
        keyAssetClassName: u()(tr.rs, s && tr.I1),
        starAssetClassName: u()(tr.OY, s && tr.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var to = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    td = s(454273);
let tu = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: g } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion)),
        h =
            ((t = { [to.MORNING]: eT.t["Wvc/I+"], [to.AFTERNOON]: eT.t["d+0STx"], [to.EVENING]: eT.t.CqsxKI }),
            eT.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? to.MORNING
                        : s >= 12 && s < 17
                          ? to.AFTERNOON
                          : to.EVENING
                ],
            )),
        p = o ?? (r ? (0, c.jsx)(e1, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(td.kL, td.Eg, i),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(td.W2, td.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(K.B, {
                    align: "start",
                    gap: 32,
                    className: td.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(K.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(K.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(eU, { color: "text-default", variant: "nitro-md", children: h }),
                                        (0, c.jsx)(eO, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: td.y3,
                    children: (0, c.jsx)(tc, { containerVisibilityPercentage: g, compact: null == p }),
                }),
            ],
        }),
    });
};
var tm = s(549926);
let tx = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tl, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tm.wG,
        flyingWumpusAssetClassName: tm.lu,
        boltContainerClassName: tm.nJ,
        hammerContainerClassName: tm.Gj,
        keyContainerClassName: tm.FV,
        starContainerClassName: tm.E1,
        boltAssetClassName: tm.j7,
        hammerAssetClassName: tm.Wv,
        keyAssetClassName: tm.rs,
        starAssetClassName: tm.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tg = s(499126);
let th = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tl, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tg.wG,
        flyingWumpusAssetClassName: tg.lu,
        boltContainerClassName: tg.nJ,
        hammerContainerClassName: tg.Gj,
        keyContainerClassName: tg.FV,
        starContainerClassName: tg.E1,
        boltAssetClassName: tg.j7,
        hammerAssetClassName: tg.Wv,
        keyAssetClassName: tg.rs,
        starAssetClassName: tg.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tp = s(682901);
function tf(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, ec.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(td.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: td.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(K.B, {
                    align: "start",
                    gap: 24,
                    className: td.E2,
                    children: [
                        (0, c.jsxs)(K.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eh, { text: eT.intl.string(eT.t.yhldRB) }),
                                (0, c.jsx)(eU, { children: eT.intl.format(eT.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: td.X8,
                                    children: (0, c.jsx)(Z.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eT.intl.string(eT.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(K.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: td.oF,
                            children: [
                                (0, c.jsx)(eA.A, {
                                    size: "md",
                                    buttonTextOverride: eT.intl.string(eT.t["2+luBl"]),
                                    iconOverride: q.NitroWheelIcon,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(J.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eT.intl.string(eT.t.Af7ye6),
                                    onClick: () => (0, ei.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: td.Hk, children: (0, c.jsx)(th, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tN(e) {
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
        { visibilityPercentageRef: h, visibilityPercentage: p } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion)),
        f = g ?? (m ? (0, c.jsx)(e1, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(td.kL, td.Eg, t),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: u()(td.W2, td.HQ),
            ref: h,
            children: [
                (0, c.jsxs)(K.B, {
                    align: "start",
                    gap: 32,
                    className: u()(td.ZU, td.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eC, {
                                expiresAt: n.expiresAt.toISOString(),
                                digitTextVariant: "body-lg/semibold",
                            }),
                        (0, c.jsxs)(K.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eU, {
                                    children: eT.intl.format(eT.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(Z.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eT.intl.format(eT.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, el.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(K.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(J.$, {
                                    variant: "expressive",
                                    icon: q.NitroWheelIcon,
                                    size: "md",
                                    text: eT.intl.string(eT.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = eR.g.CONFIRM_DISCOUNT),
                                            void (0, X.mM)(async () => {
                                                let { default: t } = await Promise.all([
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
                                                    s.e(795854),
                                                    s.e(870088),
                                                    s.e(300641),
                                                    s.e(747802),
                                                    s.e(966366),
                                                    s.e(795345),
                                                    s.e(153302),
                                                    s.e(807003),
                                                    s.e(88683),
                                                    s.e(983513),
                                                    s.e(216806),
                                                    s.e(363094),
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
                                                    s.e(320272),
                                                    s.e(594161),
                                                    s.e(435432),
                                                    s.e(492618),
                                                    s.e(80347),
                                                    s.e(52513),
                                                ]).then(s.bind(s, 336888));
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
                                (0, c.jsx)(eN.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eT.intl.string(eT.t["3KomGa"]),
                                }),
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(td.y3, td.Xx),
                    children: (0, c.jsx)(tx, { containerVisibilityPercentage: p }),
                }),
            ],
        }),
    });
}
function tA(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: o,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tb(),
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, eu.u)(Y.oW.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eX.Dmq.CANCELED,
        h = null;
    if (null != x) {
        let { surface: e, id: t, promotionId: s, componentType: i } = x;
        h = (0, c.jsx)(ep.x, {
            componentId: t,
            componentType: i,
            promotionId: s,
            promotionBannerMarketingComponentFields: e,
        });
    }
    let p = (0, ed.V)(),
        f = (0, eo.O)(),
        j = (0, W.U9)(f, tp.pe.TIER_2) ? tp.pe.TIER_2 : void 0,
        b = null != r && r.status !== eX.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, et.A)(),
        T = E.isFractionalPremiumActive && !b && null == h && !l;
    if (s) return (0, c.jsx)(tf, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: td.UJ,
                  children: [
                      (0, c.jsx)(eA.A, { size: "md", subscriptionTier: p?.subscriptionTrial?.skuId ?? j }),
                      (0, c.jsx)(eN.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eT.intl.string(eT.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tu, {
            className: t,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: u,
            shouldShowReferralProgressBar: i,
            marketingBanner: h,
            heroButtons: e,
        });
    }
    return l && null != o && null != r
        ? (0, c.jsx)(tN, {
              className: t,
              buttonVisibilityRef: u,
              userDiscountOffer: o,
              discountedPrice: d,
              premiumSubscription: r,
              analyticsLocations: m,
              headingTop: n,
              showPill: a,
              shouldShowReferralProgressBar: i,
              marketingBanner: h,
          })
        : (0, c.jsx)(tu, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: i,
              marketingBanner: h,
          });
}
let [tj, tb] = (0, en.A)(),
    tE = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, ec.ds)(),
            r = (0, er.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eX.Dmq.CANCELED && null != i,
            m = r && !u,
            g = eT.intl.string(eT.t.qYKftX),
            h = (0, ef.m)(),
            { fractionalState: p, endsAt: f } = (0, et.A)(),
            j = (0, ee.Ay)(f, ee.yE.CREDITS_ENDS_IN),
            b = p !== tp.xc.NONE && !l;
        b && (m = !0);
        let E = o.useMemo(() => {
                if (!b) return (0, c.jsx)(eh, { text: g });
                let e = eT.intl.format(eT.t["yR+oDD"], {
                    helpCenterLink: ea.A.getArticleURL(eX.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
                return (0, c.jsx)(Q.A, {
                    text: e,
                    "aria-label": e.toString(),
                    tooltipClassName: td.YL,
                    position: "right",
                    children: (e) =>
                        (0, c.jsx)("div", {
                            ...e,
                            className: td.V_,
                            children: (0, c.jsx)("div", { className: td.eL, children: (0, c.jsx)(eh, { text: j }) }),
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
            children: (0, c.jsx)(tj.Provider, {
                value: T,
                children: (0, c.jsx)(tA, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: h }),
            }),
        });
    };
var tT = s(820284),
    tI = s(742589),
    tC = s(392943),
    tR = s(521440),
    tv = s(603202),
    t_ = s(673992);
let ty = function () {
    return (0, c.jsx)(tT.A, {
        section: eX.JJy.NAVIGATION,
        children: (0, c.jsx)(tI.A, {
            className: u()(tv.TQ, t_.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: tv.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: t_.wk,
                        children: [
                            (0, c.jsx)(q.NitroWheelIcon, { colorClass: t_.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": eT.intl.string(eT.t.Ipxkog),
                                className: t_.Ss,
                                children: (0, c.jsx)(tC.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: tv.MQ,
                        children: [
                            (0, c.jsx)(tR.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(eN.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tP = s(325499),
    tS = s(613412),
    tD = s(885574),
    tM = s(43990),
    tO = s(993077),
    tk = s(139286),
    tL = s(872725),
    tU = s(920050),
    tG = s(51965),
    tw = s(375776),
    tH = s(727811),
    tB = s(222652),
    tF = s(831768),
    tV = s(934353);
function tW(e) {
    let { openRewardModal: t } = e,
        s = (0, tB.z)();
    if (s.kind === tB.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tV.R$,
            children: [
                (0, c.jsx)(eA.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tp.pe.TIER_2,
                }),
                (0, c.jsx)(J.$, { variant: "secondary", size: "md", text: eT.intl.string(eT.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === tH.P.CLAIMED
            ? { text: eT.intl.string(tF.default.Plwzgf) }
            : { text: eT.intl.string(eT.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: tV.R$,
                children: [
                    (0, c.jsx)(tG.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(J.$, {
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
                    className: tV.ed,
                    children: [
                        (0, c.jsx)(tD.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(Z.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: eT.intl.string(tF.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function tz(e) {
    let { glowing: t = !1 } = e;
    (0, tk.A)({
        type: tS.ImpressionTypes.VIEW,
        name: tS.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: tU.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, X.mM)(async () => {
                let { default: e } = await Promise.all([s.e(878140), s.e(532203)]).then(s.bind(s, 15654));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(tM.N, {
        theme: eX.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(A.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, tV.kL),
                    children: (0, c.jsx)(tL.A, {
                        cardType: tO.s.CUSTOM,
                        cardClassName: tV.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: tV.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: tV.j,
                                    children: [
                                        (0, c.jsx)("div", { className: tV._g }),
                                        (0, c.jsx)("div", { className: tV.$h }),
                                        (0, c.jsx)("div", { className: tV.Rv }),
                                        (0, c.jsx)("div", { className: tV.Lw }),
                                        (0, c.jsx)("div", { className: tV.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: tV.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: tV.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(eL.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: tV.DD,
                                            children: eT.intl.string(tF.default.RGT513),
                                        }),
                                        (0, c.jsx)(Z.E, {
                                            variant: "body-md/normal",
                                            color: "text-strong",
                                            className: tV.h_,
                                            children: eT.intl.string(tF.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(tW, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var tY = s(706778),
    tX = s(7684),
    tK = s(112992);
let tZ = () =>
    (0, c.jsxs)("div", {
        className: tX.X,
        children: [
            (0, c.jsx)("div", {
                className: tX.W,
                children: (0, c.jsx)(tD.CircleInformationIcon, { size: "xxs", color: eW.A.colors.ICON_MUTED }),
            }),
            (0, c.jsx)(Z.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: eT.intl.string(tF.default.Fs74z9),
            }),
        ],
    });
function tq(e) {
    let { className: t, containerClassName: s, glowing: i } = e,
        n = (0, tB.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === tB.N.SUBSCRIBE
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
        r = n.kind === tB.N.DEFAULT && n.claimStatus === tH.P.CLAIM_IN_PROGRESS;
    return (0, c.jsx)(tY.S, {
        id: tU.XBOX_PREMIUM_PERK_CARD_ID,
        title: eT.intl.string(tF.default.UVL9tD),
        description: eT.intl.string(tF.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, c.jsx)(tZ, {}) : void 0,
        className: t,
        containerClassName: s,
        glowing: i,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: tK.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function tJ(e) {
    let { analyticsLocations: t } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(A.f5, { value: t, children: (0, c.jsx)(tq, { ...e }) });
}
var tQ = s(744082),
    t$ = s(261995),
    t0 = s(722793),
    t1 = s(700556),
    t2 = s(821874);
function t3(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = t2.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && t1.Jx, l), children: a }) : null,
        ],
    });
}
var t6 = s(517846),
    t7 = s(509434),
    t5 = s(669700),
    t8 = s(44724),
    t9 = s(371794);
let t4 = new Date(Date.UTC(2026, 9, 23));
var se = s(945810);
let st = (0, se.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ss = s(398523),
    si = s(881373),
    sn = s(555393),
    sa = s(325652),
    sl = s(852218),
    sr = s(52530),
    sc = s(670328);
let so = (0, se.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sd = s(612413),
    su = s(188275);
let sm = new Date(Date.UTC(2026, 10, 5));
s(675772);
var sx = s(749962),
    sg = s(691450),
    sh = s(647024),
    sp = s(524698),
    sf = s(635088),
    sN = s(679502),
    sA = s(762493);
let sj = "xgpp";
function sb(e) {
    let { card: t, backgroundAssetUrl: s, blurTint: i, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: t1.JE,
        children: (0, c.jsx)(tY.S, {
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
function sE(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tP.b)("premium_subscriber_home_rewards");
    (0, tQ.A)(tp.tv);
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
                i = ((e = (0, sr.eh)()), (t = (0, sr.fR)()), null != e ? e : t),
                n = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = st.useConfig({ location: t });
                    return s;
                })({ location: "useHardwarePartnerPerkCards" }),
                a = (0, si.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                l = ss.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                r = (0, sd.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                d = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = so.useConfig({ location: t });
                    return s;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                u = null === (0, sn.N)(),
                m = (0, t$.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: x, nDaysInMonth: g } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let e =
                        n && null == i
                            ? {
                                  id: tU.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: eT.intl.string(sx.default["IcD/7p"]),
                                  description: eT.intl.formatToPlainString(sx.default.hausFi, {
                                      date: new Intl.DateTimeFormat(eT.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(t4),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: sa.L.EXPIRED,
                                  pillText: eT.intl.string(sx.default.fxF0Jz),
                                  caption: (0, c.jsx)("img", { src: sf.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = a
                        ? {
                              id: tU.LOGITECH_3PP_CARD_ID,
                              title: eT.intl.string(sg.default.OlObRa),
                              description: eT.intl.format(sg.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: ea.A.getArticleURL(eX.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: x.getDate() / g,
                              ctaText: eT.intl.string(eT.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sc.P)({
                                      partnerIds: [sl.XY],
                                      title: eT.intl.string(sg.default["2I7nK+"]),
                                      subtitle: eT.intl.format(sg.default.W8jOD0, {
                                          termsUrl: ea.A.getArticleURL(eX.MVz.LOGITECH_PROMOTION),
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
                              analyticsOptions: { thirdPartyPartner: sl.XY },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    o = l
                        ? {
                              id: tU.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: eT.intl.string(eT.t.m7PucM),
                              description: eT.intl.format(eT.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: x.getDate() / g,
                              ctaText: eT.intl.string(eT.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sc.P)({
                                      partnerIds: [sl.KS],
                                      title: eT.intl.string(eT.t["7ioAjs"]),
                                      subtitle: eT.intl.format(eT.t.LOYRxB, {
                                          helpCenterLink: ea.A.getArticleURL(eX.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: s,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: sl.KS },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null;
                return {
                    expiredCallOfDutyCard: e,
                    logitechCard: t,
                    rustCard: d
                        ? {
                              id: tU.RUST_3PP_CARD_ID,
                              title: eT.intl.string(sh.default.gQ1ctg),
                              description: eT.intl.format(sh.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(eT.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(sm),
                                  termsUrl: (0, su.X3)(su.IG),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: eT.intl.string(eT.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, t9.YE)(su.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: eT.intl.string(sh.default.NmBRGV),
                              ctaIcon: t7.LinkExternalSmallIcon,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t8.default)({ applicationId: su.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    steelseriesCard: o,
                    youtubeCard: r
                        ? {
                              id: tU.YOUTUBE_3PP_CARD_ID,
                              title: eT.intl.string(sp.default["BdIVB+"]),
                              description: eT.intl.format(sp.default["cCl3+a"], {
                                  discountPercentage: 20,
                                  months: 6,
                                  helpCenterUrl: ea.A.getArticleURL(eX.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: sN.A, alt: "YouTube Premium" }),
                              ctaText: eT.intl.string(sx.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sc.P)({
                                      partnerIds: [sl.NC],
                                      analyticsLocations: s,
                                      title: eT.intl.string(sp.default.TDZUui),
                                      subtitle: eT.intl.format(sp.default.dueYf1, {
                                          helpCenterUrl: ea.A.getArticleURL(eX.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          t5.Ay.fireSurveyAction(t6.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: sl.NC },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    macaronCard: m,
                    codeBlurpleCard: i,
                };
            }, [m, i, s, n, x, a, g, l, d, r, u]);
        })(),
        { phase: g } = (0, t$.vc)({ location: "NitroRewardsSection" }),
        h =
            null != m
                ? {
                      card: m,
                      backgroundAssetUrl:
                          g === t0.H.PHASE_ONE
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
        p = null != h ? h.card.id : null,
        f = i && null == h,
        j =
            i ||
            null != n ||
            null != a ||
            null != l ||
            null != r ||
            null != x ||
            (null != m && m.id !== p) ||
            (null != d && d.id !== p),
        b = null;
    return (null != h
        ? (b = (0, c.jsx)(sb, {
              card: h.card,
              backgroundAssetUrl: h.backgroundAssetUrl,
              blurTint: h.blurTint,
              glowing: t === sj || s === h.card.id,
              autoClickCta: s === h.card.id,
          }))
        : f && (b = (0, c.jsx)("div", { className: t1.JE, children: (0, c.jsx)(tz, { glowing: t === sj }) })),
    null != b || j)
        ? (0, c.jsx)(t3, {
              id: sj,
              sectionClassName: u()(sA.uW, sA.Uv, sA.qr),
              heading: (0, c.jsx)(eL.D, {
                  variant: "nitro-sm",
                  className: u()(t2.R_, t1.U6),
                  children: eT.intl.string(eT.t.NG1e6l),
              }),
              beforeGrid: b,
              grid: j
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != x && (0, c.jsx)(tY.S, { ...x, containerClassName: t2.Nr, glowing: s === x.id }),
                            null != m &&
                                m.id !== p &&
                                (0, c.jsx)(tY.S, {
                                    ...m,
                                    containerClassName: t2.Nr,
                                    glowing: s === m.id,
                                    autoClickCta: s === m.id,
                                }),
                            null != d &&
                                d.id !== p &&
                                (0, c.jsx)(tY.S, {
                                    ...d,
                                    containerClassName: t2.Nr,
                                    glowing: s === d.id,
                                    autoClickCta: s === d.id,
                                }),
                            null != l && (0, c.jsx)(tY.S, { ...l, containerClassName: t2.Nr, glowing: s === l.id }),
                            i &&
                                (0, c.jsx)(tJ, {
                                    containerClassName: t2.Nr,
                                    glowing: s === tU.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, c.jsx)(tY.S, { ...a, containerClassName: t2.Nr, glowing: s === a.id }),
                            null != r && (0, c.jsx)(tY.S, { ...r, containerClassName: t2.Nr, glowing: s === r.id }),
                            null != n && (0, c.jsx)(tY.S, { ...n, containerClassName: t2.Nr, glowing: s === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var sT = s(313133),
    sI = s(67423);
let sC = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e7.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e6.animated.div, {
        className: u()(sT.iE, { [sT.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sT.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sI, className: sT.oU }),
                (0, c.jsxs)("div", {
                    className: sT.iQ,
                    children: [
                        (0, c.jsx)(eL.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: eT.intl.format(eT.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eT.intl.format(eT.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, el.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(J.$, {
                    variant: "expressive",
                    icon: q.NitroWheelIcon,
                    size: "md",
                    text: eT.intl.string(eT.t.zrCzVB),
                    onClick: () =>
                        void (0, X.mM)(async () => {
                            let { default: e } = await Promise.all([
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
                                s.e(795854),
                                s.e(870088),
                                s.e(300641),
                                s.e(747802),
                                s.e(966366),
                                s.e(795345),
                                s.e(153302),
                                s.e(807003),
                                s.e(88683),
                                s.e(983513),
                                s.e(216806),
                                s.e(363094),
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
                                s.e(320272),
                                s.e(594161),
                                s.e(435432),
                                s.e(492618),
                                s.e(80347),
                                s.e(52513),
                            ]).then(s.bind(s, 336888));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: eR.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sR = s(761508),
    sv = s(151869),
    s_ = s(62617),
    sy = s(387103);
function sP(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sy.A,
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
let sS =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function sD(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sS,
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sM = s(93712);
function sO(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sM.A,
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sk = s(345394);
function sL(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sk.A,
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sU = s(78211);
function sG(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sw = s(95278);
function sH(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sB(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sF = s(996682);
function sV(e) {
    let { color: t = eW.A.colors.ICON_STRONG, "aria-label": s, "aria-hidden": i, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, s_.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, sF.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function sW(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sz = s(78701);
function sY(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sz.A,
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sX = s(462887),
    sK = s(736653),
    sZ = s(259065),
    sq = s(206835),
    sJ = s(591179),
    sQ = s(462463),
    s$ = s(219882),
    s0 = s(105909),
    s1 = s(208223),
    s2 = s(696292),
    s3 = s(914313),
    s6 = s(321538),
    s7 = s(892227),
    s5 = s(81466),
    s8 = s(17268),
    s9 = s(749012);
let s4 = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, H.F)();
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, s7.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: s9.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: s9.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: s9.Pf,
                            children: [
                                (0, c.jsx)(s5.CalendarIcon, { size: "sm", color: eW.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eT.intl.string(s8.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eT.intl.format(s8.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: s9.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: s9.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: s9.Pf,
                            children: [
                                (0, c.jsx)(eV.OrbsIcon, { size: "sm", color: eW.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eT.intl.string(s8.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eT.intl.format(s8.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ie = s(221596),
    it = s(799544);
function is() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, s3.lk)(ie.rE.NITRO_HOME_MARKETING),
        { isEligible: s, programReward: i } = (0, H.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !s || null == i || null == i.reward_amount || i.reward_amount <= 0
                    ? null
                    : {
                          id: tU.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eT.intl.string(s8.default.hx5AFp),
                          description: eT.intl.format(s8.default.wq3CF2, { orbsCount: i.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(it.lH, it.yK),
                          footerContent: (0, c.jsx)(s4, {}),
                          ctaText: eT.intl.string(s8.default.BxjHiu),
                          onCtaClick: () => (0, y.pX)(eX.BVt.COLLECTIBLES_SHOP_WITH_TAB(e$.G2.ORBS)),
                      },
            [s, i],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                e
                    ? {
                          id: tU.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eT.intl.string(eT.t.Csf5Ol),
                          description: eT.intl.format(eT.t.NpUfej, { bonusOrbMultiplier: t }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eT.intl.string(eT.t.jVcuVY),
                          onCtaClick: () => (0, s6.mA)({ fromContent: s2.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: it.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var ii = s(975807),
    ia = s(95035),
    il = s(728666),
    ir = s(88001),
    ic = s(107198),
    io = s(817577);
function id() {
    (0, ii.A)(ir.TE);
}
function iu(e) {
    let t = (0, il.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, X.mM)(async () => {
                      let { default: e } = await s.e(499709).then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, _.A)({
                      subscriptionTier: tp.pe.TIER_2,
                      initialPlanId: tp.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: tU.PREMIUM_GROUP_CARD_ID,
                      title: eT.intl.string(ic.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eT.intl.formatToPlainString(ic.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, ir.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: it.LF,
                                  children: (0, c.jsx)(ia.A, {
                                      onClick: id,
                                      children: eT.intl.string(ic.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eT.intl.string(eT.t.oW0eUd),
                      primaryAsset: io,
                      ctaIcon: q.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: eT.intl.string(eT.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var im = s(562819),
    ix = s(793943),
    ig = s(169099),
    ih = s(506988),
    ip = s(590202),
    iN = s(332560),
    iA = s(62234),
    ij = s(324061),
    ib = s(701256),
    iE = s(804564),
    iT = s(818349),
    iI = s(419490),
    iC = s(849993),
    iR = s(572164),
    iv = s(271597),
    i_ = s(815460),
    iy = s(464132),
    iP = s(683825);
function iS() {
    "auto" === (0, iT.r)((0, iR.T)(), iI.Ay.getEnableAutoclipping())
        ? (0, iv.p)()
        : (0, i_.C)({ variant: "mode_picker", source: "nitro_home_perk_card" });
}
var iD = s(757036),
    iM = s(621488),
    iO = s(70283),
    ik = s(643056),
    iL = s(470739);
let iU = (0, se.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var iG = s(655752),
    iw = s(764231),
    iH = s(627380),
    iB = s(30084),
    iF = s(814014),
    iV = s(714206);
let iW =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iz =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iY =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iX() {
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
        h,
        p,
        f,
        j,
        b,
        E,
        T,
        I,
        { analyticsLocations: C } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        R = (0, sJ.X)("useWhatsNewPerkCards"),
        v = (0, sQ.A)({ analyticsLocations: C }),
        _ = (0, o.useCallback)(() => {
            (0, ei.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: C }, () =>
                (0, sZ.L)({ analyticsLocations: C }),
            );
        }, [C]),
        y = (0, o.useCallback)(() => {
            (0, ei.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: C }, () =>
                (0, im.L)({ analyticsLocations: C }),
            );
        }, [C]),
        P = (0, o.useCallback)(() => {
            (0, ei.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        D =
            ((e = (0, x.bG)([S.default], () => S.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (s = (function (e) {
                let { location: t } = e;
                return iU.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (i = (0, ik.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, s0.$F)()),
            (a = (0, s0.Xb)()),
            (l = n?.status === s0.Wo.UPCOMING || t),
            (r = n?.status === s0.Wo.WITHHELD),
            (d = l || r),
            (m = (0, s1.N)(n?.id)),
            (g = (function () {
                let e = (0, s0.$F)(),
                    t = (0, iG.P)(),
                    s = (0, s0.Xb)();
                if (null == e || null == t || null == s || e.status === s0.Wo.WITHHELD) return null;
                let i = eb()(),
                    n = eb()(s),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (i.diff(l) - 864e5) / r));
            })()),
            (h = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion) && !d),
            (p = (0, iH.t)()),
            (f = (0, iG.P)()),
            (0, o.useMemo)(() => {
                let e,
                    l = null != f ? eT.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, iw.T)(tp.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === s0.Wo.UPCOMING
                              ? eT.intl.formatToPlainString(eT.t.a1eKDi, { days: p?.days ?? 0 })
                              : n.status === s0.Wo.WITHHELD
                                ? ((0, iw.T)(n.id, n.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return eT.intl.formatToPlainString(eT.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return eT.intl.formatToPlainString(eT.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(p, l) ??
                                  (0, iw.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != m ? (r = d || h ? m.standard : m.ambientLarge) : t && (r = iV),
                    {
                        id: tU.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eT.intl.string(n.nameUnformattedNitro) : t ? eT.intl.string(eT.t.tx9Fvw) : "",
                        pillText: eT.intl.string(eT.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iF.pq, { [iF.rX]: d, [iF.kE]: h }),
                        caption: null != a ? eT.intl.formatToPlainString(eT.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: g ?? void 0,
                        ctaText: eT.intl.string(eT.t.jVcuVY),
                        onCtaClick: () => {
                            s && i
                                ? (0, iL.openBadgeDirectoryModal)({ initialBadgeId: iO.$.PREMIUM_TENURE })
                                : (0, iB.D)({ analyticsLocations: C });
                        },
                    }
                );
            }, [n, m, d, h, a, g, t, p, f, C, s, i])),
        { nitroOrbsRewardsCard: M, questOrbMultiplierCard: O } = is(),
        k =
            ((j = (0, iD.L)(tp.PremiumTypes.TIER_2)),
            (b = (0, s$.rX)()),
            (0, o.useMemo)(
                () =>
                    j && b
                        ? {
                              id: tU.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eT.intl.string(iM.default["/cV3ka"]),
                              description: eT.intl.string(iM.default.H523FI),
                              primaryAsset: (0, c.jsx)(sU.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [j, b],
            )),
        L = iu(C),
        U =
            ((E = (0, iC.H)("useAutoclipsPerkCard")),
            (T = "auto" === (0, iy.U)().value),
            (0, o.useMemo)(
                () =>
                    E
                        ? {
                              id: tU.AUTOCLIPS_CARD_ID,
                              title: eT.intl.string(iP.default["5VA1HL"]),
                              description: eT.intl.string(iP.default.TvE3md),
                              primaryAsset: (0, c.jsx)(iE.f, { alt: "", ariaHidden: !0 }),
                              ctaText: eT.intl.string(T ? eT.t.RzWDqY : eT.t.uw9zI7),
                              ctaVariant: T ? "secondary" : void 0,
                              onCtaClick: iS,
                          }
                        : null,
                [E, T],
            )),
        G =
            ((I = (0, ij.A)("useHexagonCampaignWhatsNewPerkCard")),
            o.useMemo(
                () =>
                    I
                        ? {
                              id: tU.HEXAGON_CAMPAIGN_CARD_ID,
                              pillText: eT.intl.string(eT.t.y2b7CA),
                              title: eT.intl.string(ib.default["fShp/D"]),
                              description: eT.intl.string(ib.default.MDycja),
                              primaryAsset: (0, c.jsx)(ig.r, { alt: "", ariaHidden: !0, width: 256 }),
                              ctaText: eT.intl.string(eT.t.uw9zI7),
                              onCtaClick: () => {
                                  ((0, iN.iM)({
                                      content: ih.uF.NITRO_HOME_PERK_CARD,
                                      questContentCTA: ip.Cy.OPEN_AD_PERK_MODAL,
                                  }),
                                      (0, iA.v6)());
                              },
                          }
                        : null,
                [I],
            ));
    return (0, o.useMemo)(() => {
        let e = [
                M,
                O,
                L,
                {
                    id: tU.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eT.intl.string(eT.t.OLtTrt),
                    description: eT.intl.string(eT.t["di/pXR"]),
                    onCtaClick: R ? v : _,
                    ctaText: eT.intl.string(eT.t.jVcuVY),
                    primaryAsset: iW,
                },
                {
                    id: tU.CLIENT_THEMES_CARD_ID,
                    title: eT.intl.string(eT.t.acc6h6),
                    description: eT.intl.formatToPlainString(eT.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iY,
                    ctaText: eT.intl.string(eT.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ix.nf)(ix.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tU.PERMADECOS_CARD_ID,
                    title: eT.intl.string(eT.t.L14NZN),
                    description: eT.intl.string(eT.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(sY, { alt: "", ariaHidden: !0 }),
                    ctaText: eT.intl.string(eT.t.jVcuVY),
                    onCtaClick: R ? v : y,
                },
                {
                    id: tU.CUSTOM_APP_ICONS_CARD_ID,
                    title: eT.intl.string(eT.t["GU+wqh"]),
                    description: eT.intl.string(eT.t["1uPk1Z"]),
                    primaryAsset: iz,
                    ctaText: eT.intl.string(eT.t.y9TxXV),
                    onCtaClick: P,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, D),
            null != k && e.splice(2, 0, k),
            null != U && e.splice(2, 0, U),
            null != G && e.splice(Math.min(2, e.length), 0, G),
            e.length > s && e.splice(s, e.length - s),
            e
        );
    }, [D, M, O, k, U, L, G, _, P, y, v, R]);
}
var iK = s(355097);
let iZ = "/assets/1eb1b74667b4c0f0.svg",
    iq = "/assets/983b60e4fcaf973b.svg";
var iJ =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iQ = [
    { id: "bestof", label: () => eT.intl.string(eT.t.q1u7nQ) },
    { id: "appearance", label: () => eT.intl.string(eT.t.CUnZkZ) },
    { id: "upgrades", label: () => eT.intl.string(eT.t.KC5q8v) },
    { id: "vip", label: () => eT.intl.string(eT.t.DjEAcv) },
];
var i$ = s(18290);
function i0(e) {
    return e.id;
}
function i1(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sK.DP)(),
                t = (0, sJ.X)("useFavoritesPerkCards"),
                s = (0, s0.Lh)(),
                i = (0, s1.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, sq.A)({ scrollPosition: iK._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, ei.openUserSettings)(es.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, ei.openUserSettings)(es.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, ei.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, y.pX)(eX.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, ei.openUserSettings)(es.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, sQ.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, ei.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, sZ.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                h = iX(),
                p = (0, o.useMemo)(() => h.map((e) => e?.id), [h]),
                { nitroOrbsRewardsCard: f, questOrbMultiplierCard: j } = is(),
                b = iu(n),
                E = (0, o.useMemo)(
                    () => [
                        {
                            id: tU.SERVER_BOOSTS_CARD_ID,
                            title: eT.intl.formatToPlainString(eT.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eT.intl.formatToPlainString(eT.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sP, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: tU.PROFILES_CARD_ID,
                            title: eT.intl.string(eT.t.xDRab3),
                            description: eT.intl.string(eT.t.yn6fWA),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sD, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tU.HD_VIDEO_CARD_ID,
                            title: eT.intl.string(eT.t["/mQ5gg"]),
                            description: eT.intl.string(eT.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sO, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tU.CLIENT_THEMES_CARD_ID,
                            title: eT.intl.string(eT.t.acc6h6),
                            description: eT.intl.formatToPlainString(eT.t.WQazjs, { themeCount: 20 }),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iY,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tU.MORE_EMOJIS_CARD_ID,
                            title: eT.intl.string(eT.t.D8vIDT),
                            description: eT.intl.string(eT.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tU.LARGE_UPLOADS_CARD_ID,
                            title: eT.intl.string(eT.t.nL1WZV),
                            description: (0, s$.M6)({
                                legacyCopy: eT.intl.formatToPlainString(eT.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eT.intl.formatToPlainString(eT.t.teOTfv, {
                                    maxFileSize: (0, el.EJ)(tp.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(sU.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tU.CUSTOM_APP_ICONS_CARD_ID,
                            title: eT.intl.string(eT.t["GU+wqh"]),
                            description: eT.intl.string(eT.t["1uPk1Z"]),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iz,
                            categories: ["appearance"],
                        },
                        {
                            id: tU.ENTRANCE_SOUNDS_CARD_ID,
                            title: eT.intl.string(eT.t.WJfCPi),
                            description: eT.intl.string(eT.t.liQKJR),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tU.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eT.intl.string(eT.t.OLtTrt),
                            description: eT.intl.string(eT.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            primaryAsset: iW,
                            categories: ["appearance"],
                        },
                        {
                            id: tU.CUSTOM_SOUNDS_CARD_ID,
                            title: eT.intl.string(eT.t["Cu/oFd"]),
                            description: eT.intl.string(eT.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sG, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tU.SPECIAL_STICKERS_CARD_ID,
                            title: eT.intl.string(eT.t.MQoVeb),
                            description: eT.intl.string(eT.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: it.Uc,
                                children: (0, c.jsx)(sw.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tU.SUPER_REACTIONS_CARD_ID,
                            title: eT.intl.string(eT.t.qERvAA),
                            description: eT.intl.string(eT.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tU.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eT.intl.string(eT.t.ssVDYQ),
                            description: eT.intl.string(eT.t.aUSRMa),
                            primaryAsset: (0, sX.M)(e) ? iZ : iq,
                            categories: ["upgrades"],
                        },
                        {
                            id: tU.EARLY_ACCESS_CARD_ID,
                            title: eT.intl.string(eT.t["g/KRY6"]),
                            description: eT.intl.string(eT.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sB, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tU.BADGE_CARD_ID,
                            title: eT.intl.string(eT.t.Bn3CtB),
                            description: eT.intl.string(eT.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sV, { color: eW.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tU.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eT.intl.string(eT.t["MTD+7w"]),
                            description: eT.intl.string(eT.t.Bhs0s6),
                            ctaText: eT.intl.string(eT.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sW, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != f ? { ...f, categories: ["vip"] } : null,
                        null != j ? { ...j, categories: ["vip"] } : null,
                        {
                            id: tU.PERMADECOS_CARD_ID,
                            title: eT.intl.string(eT.t.L14NZN),
                            description: eT.intl.string(eT.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sY, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, f, j, b, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => E.filter((e) => null != e && !p.includes(e.id)), [E, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iJ.BEST_OF_NITRO),
        l = iQ.find((e) => e.id === n)?.label(),
        r = s.filter((e) => null != e && e.categories.includes(n));
    return (0, c.jsxs)("div", {
        className: i$.uW,
        children: [
            (0, c.jsx)(eL.D, { variant: "nitro-sm", children: eT.intl.string(eT.t["Uh3+CA"]) }),
            (0, c.jsx)(sR.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i$.Lq,
                "aria-label": eT.intl.string(eT.t["Uh3+CA"]),
                children: iQ.map((e) =>
                    (0, c.jsx)(sR.V.Item, { id: e.id, className: i$.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sv.A,
                {
                    "aria-label": eT.intl.formatToPlainString(eT.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: i$.jG,
                    items: r,
                    getItemKey: i0,
                    renderItem: (e, s) =>
                        (0, c.jsx)(tY.S, { ...e, glowing: t === e.id, containerClassName: i$.Ui, listItemProps: s }),
                },
                n,
            ),
        ],
    });
}
var i2 = s(72979);
let i3 = function (e) {
    let { className: t } = e,
        s = (0, sK.DP)();
    return (0, c.jsx)("img", {
        className: u()(i2.D, t),
        src: (0, sX.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i6 = s(684251);
let i7 = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(i6.kL, i6.Gd, i6.Eg),
        children: [(0, c.jsx)(i3, {}), (0, c.jsx)(ty, {}), t],
    });
};
function i5(e) {
    let { glowingPerkId: t = null } = e,
        s = iX();
    return (0, c.jsx)(t3, {
        sectionClassName: t2.uW,
        heading: (0, c.jsx)(eL.D, { variant: "nitro-sm", className: t2.R_, children: eT.intl.string(eT.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tY.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tU.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(t2.Nr, { [t2.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function i8(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion),
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
var i9 = s(92737);
let i4 = "/assets/cd2be35d285d4675.svg",
    ne = (e) => {
        let { userId: t } = e,
            s = (0, m.zy)();
        (o.useEffect(() => {
            ((0, w.Ay)(), null != t && (0, F.A)(t));
        }, [t]),
            o.useEffect(() => {
                E(!0);
            }, []),
            (0, v.P)(R));
        let i = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, H.F)(),
            {
                scrollTargetId: d,
                glowingSectionId: h,
                glowingPerkId: p,
                scrollBlock: f,
                scrollInline: j,
            } = o.useMemo(() => {
                let e = new URLSearchParams(s.search),
                    t = e.get("perk"),
                    i = e.get(i9.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [s.search]);
        i8(d ?? "", null != d, f, j);
        let [b, E] = o.useState(!1),
            T = (0, V.p)(),
            I = o.useRef(null),
            [C, _] = o.useState(!1),
            y = null != T && null != a && a.status === eX.Dmq.CANCELED,
            P = (0, W.iU)(tp.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !C && y,
            D = (0, x.bG)([B.A], () => (null != t ? B.A.getUserProfile(t) : null)),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [L, Y] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(i6.xW, i6.Gd),
                  ref: i,
                  children: [
                      (0, c.jsx)(i7, {
                          children: (0, c.jsxs)(A.f5, {
                              value: k,
                              children: [
                                  (0, c.jsx)(U.L, {
                                      innerRef: I,
                                      onChange: (e) => _(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tE, {
                                          buttonVisibilityRef: I,
                                          className: i6.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, c.jsx)(i5, { glowingPerkId: p }),
                                  (0, c.jsx)(sE, { glowingPerkId: p, glowingSectionId: h }),
                                  (0, c.jsx)(i1, { glowingPerkId: p }),
                                  (0, c.jsx)(z.A, {
                                      className: i6.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eX.liQ.NITRO_HOME, section: eX.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: i6.hz }),
                                  (0, c.jsx)(U.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !L &&
                                              (O.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: k,
                                              }),
                                              Y(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: i6._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: i4,
                                      className: i6.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eT.intl.string(eT.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      y &&
                          null != P &&
                          (0, c.jsx)(sC, {
                              isVisible: S && b,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(i6.kL, i6.Lq, i6.TN, i6.Eg),
                  children: [(0, c.jsx)(ty, {}), (0, c.jsx)("div", { className: i6.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var nt = s(589152),
    ns = s(851746),
    ni = s(727949),
    nn = s(926239);
let na =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var nl = s(185062);
let nr = `${na} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${nl.A} 3x`;
function nc(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, s_.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: na,
        srcSet: nr,
        className: (0, s_.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var no = s(315629),
    nd = s(783420),
    nu = s(204413),
    nm = s(572079),
    nx = s(824069),
    ng = s(785007),
    nh = s(947910);
function np(e) {
    let { value: t, planRadioOptions: s, className: i, ...n } = e,
        a = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nh.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nh.fQ,
                                children: (0, c.jsx)(eG.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, c.jsxs)(K.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nh.qU,
                            children: [
                                (0, c.jsxs)(K.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nh.NI,
                                    children: [
                                        (0, c.jsx)(Z.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(Z.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(K.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nh.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, c.jsx)(Z.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, c.jsx)(Z.E, {
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                className: nh.yD,
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
                radioBarClassName: u()(nh.tG, { [nh.uA]: s, [nh.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(ng.$d, {
        ...n,
        options: a,
        value: t,
        size: ng.r9.NOT_SET,
        className: u()(nh.ul, i),
        withTransparentBackground: !0,
    });
}
var nf = s(118751),
    nN = s(773669),
    nA = s(97352),
    nj = s(526292),
    nb = s(387278),
    nE = s(369827),
    nT = s(803496);
function nI(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nE.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nT.A)({
            activeSubscription: t,
            skuIDs: [(0, el.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nC(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nR(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tp.Ff.YEAR
          ? eT.intl.format(eT.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : eT.intl.format(eT.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nv = s(614488);
function n_(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(nd.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(J.$, {
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
function ny(e) {
    let { skuId: t, className: s, variant: i = "default" } = e,
        n = t === tp.pe.TIER_2,
        a = "settings" === i,
        l = (0, sX.q)((0, sK.Ay)()),
        r = (0, ed.V)(),
        d = r?.subscriptionTrial,
        m = d?.skuId === t,
        g = n && m && null != d,
        {
            planRadioOptions: h,
            selectedPlanId: p,
            setSelectedPlanId: f,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tp.En[t],
                a = tp.zE[t],
                l = t === tp.pe.TIER_2,
                r = nI(t),
                c = (0, ed.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, el.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tp.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tp.gD.PREMIUM_YEAR_TIER_0, tp.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                h = (0, eo.O)(),
                p = (0, nj.k5)(),
                f = (0, x.bG)([nN.default], () => nN.default.locale),
                N = (0, W.U9)(h, t),
                A = (0, W.N1)(n),
                j = (0, W.N1)(a),
                [b, E] = (0, x.yK)([nA.A], () => [nA.A.get(n), nA.A.get(a)], [n, a]),
                T = null != b ? (0, el.sS)(b, r) : null,
                I = null != E ? (0, el.sS)(E, r) : null,
                C =
                    N && h?.discount.amount != null && !p
                        ? eT.intl.formatToPlainString(eT.t.IAybsG, {
                              discount: (0, nf.l9)(f, Number(h.discount.amount) / 100),
                          })
                        : null,
                R = h?.discount?.planIds,
                v = nC(a, N, R, j, I),
                _ = nC(n, N, R, A, T),
                y = h?.discount.userUsageLimitInterval,
                P = h?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, nb.Cj)(E, !1, r),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tp.pe.TIER_2 ? null : s && !i ? tp.En[t] : tp.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == s || (s === n && m) ? O : s,
                L = [
                    {
                        value: a,
                        primaryText: eT.intl.string(eT.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nR({
                                      expectedUsageInterval: tp.Ff.YEAR,
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
                        primaryText: eT.intl.string(eT.t.DKzs96),
                        primarySubText: _
                            ? nR({
                                  expectedUsageInterval: tp.Ff.MONTH,
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
                U = k === a ? v : k === n && _;
            return { planRadioOptions: L, selectedPlanId: k, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: j } = (0, nm.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nu.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        E = (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(K.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nv.MY,
                    children: (0, c.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nv.ck,
                        children: n ? eT.intl.string(eT.t.lG6a5x) : eT.intl.string(eT.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(K.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nv.qT,
                    children: n
                        ? (0, c.jsx)(nn.ZP, {
                              featureSet: nn.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, c.jsx)(nn.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, c.jsx)(nx.K, {}),
            ],
        }),
        T = (0, c.jsxs)(K.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nv.Ux,
            children: [
                a ? (0, c.jsx)("div", { className: nv.zI, children: E }) : E,
                g
                    ? (0, c.jsx)("div", {
                          className: nv.qS,
                          role: "separator",
                          children: (0, c.jsx)(Z.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nv.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tp.WT.DAY:
                                          if (t % 7 == 0) return eT.intl.format(eT.t["1MYPH0"], { weeks: t / 7 });
                                          return eT.intl.format(eT.t.pYfIoO, { days: t });
                                      case tp.WT.MONTH:
                                          return eT.intl.format(eT.t["96hTLe"], { months: t });
                                      case tp.WT.YEAR:
                                          return eT.intl.format(eT.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(d.interval, d.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nv.yF }),
                (0, c.jsxs)("div", {
                    className: nv.qr,
                    children: [
                        (0, c.jsx)(np, {
                            className: a ? nv.US : void 0,
                            planRadioOptions: h,
                            value: p ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, c.jsx)(n_, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        I = u()(nv.Nr, s, { [nv.Fw]: n });
    return n
        ? (0, c.jsxs)(no.h, {
              color: "nitro-pink",
              className: I,
              children: [
                  !a &&
                      (0, c.jsx)("div", {
                          className: nv.kX,
                          "aria-hidden": !0,
                          children: (0, c.jsx)(nc, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, c.jsx)("div", { className: I, children: T });
}
function nP(e) {
    let { className: t } = e,
        s = (0, sX.q)((0, sK.Ay)()),
        i = nI(tp.pe.TIER_2),
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eS.A)({ userId: n?.id, size: ev._3.SIZE_32, animateOnHover: !0 }),
        r = (0, x.bG)([nA.A], () => nA.A.get(tp.gD.PREMIUM_GROUP_MONTH)),
        o = eT.intl.string(eT.t["2pG5Ga"]),
        d = (0, c.jsx)(nd.A, {
            subscriptionTier: tp.pe.TIER_2,
            initialPlanId: tp.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(J.$, {
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
            m = (0, el.sS)(r, i, !1, !1, !1);
        } catch {
            m = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nv.Nr, t),
        children: (0, c.jsxs)(K.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nv.Ux,
            children: [
                (0, c.jsxs)(K.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nv.MY,
                    children: [
                        (0, c.jsx)(eL.D, {
                            variant: "nitro-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: nv.ck,
                            children: eT.intl.string(ic.default.eSKiXk),
                        }),
                        null != n &&
                            (0, c.jsxs)(K.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nv.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nv.uA,
                                        children: (0, c.jsx)(e_.eu, {
                                            src: a,
                                            size: ev._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...l,
                                        }),
                                    }),
                                    (0, c.jsx)(K.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nv.VL,
                                        children: (0, c.jsxs)(Z.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-default",
                                            children: ["+", 5],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(K.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nv.qT,
                    children: (0, c.jsx)(nn.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nv.yF }),
                (0, c.jsxs)("div", {
                    className: nv.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nv.ec,
                            children: [
                                (0, c.jsx)(Z.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: eT.intl.string(ic.default.SvSwga),
                                }),
                                null == m
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(Z.E, {
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
function nS(e) {
    let { innerRef: t, className: s, variant: i = "default" } = e,
        n = "settings" === i,
        { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, nn.pw)(t),
        r = (0, il.PA)(),
        o = !n && r,
        d = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion),
        m = { [nv.iR]: !d && !n };
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsxs)(K.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nv.oB, s, { [nv.W0]: n }),
            children: [
                (0, c.jsx)(eL.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nv.op,
                    children: eT.intl.string(eT.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: l,
                    className: u()(nv.kR, { [nv.BQ]: o }),
                    children: [
                        (0, c.jsx)(ny, { skuId: tp.pe.TIER_0, className: u()(nv.rz, m), variant: i }),
                        (0, c.jsx)(ny, { skuId: tp.pe.TIER_2, className: u()(nv.Rv, m), variant: i }),
                        o && (0, c.jsx)(nP, { className: u()(nv.zz, m) }),
                    ],
                }),
            ],
        }),
    });
}
var nD = s(366010),
    nM = s(303136);
let nO = function (e) {
    let t,
        { className: s } = e,
        i = (0, e3.TM)(),
        n = (0, nD.q)((0, sK.Ay)());
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
                nM.A,
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
var nk =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nL = s(352756);
let nU = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e7.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eX.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e6.animated.div, {
        className: u()(nL.iE, { [nL.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nL.UD,
            children: [
                (0, c.jsx)(eA.A, {
                    enableMarketingSubscribeCopyTest: !a,
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, c.jsx)(eN.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nG = s(573710);
let nw = function () {
    let e = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nG.BI,
                children: (0, c.jsx)(e4, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e8.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nG.Q,
                    }),
                }),
            }),
            (0, c.jsx)(tt, {
                isMotionReduced: e,
                boltContainerClassName: nG.nJ,
                carContainerClassName: nG.IN,
                hammerContainerClassName: nG.Gj,
                keyContainerClassName: nG.FV,
                starContainerClassName: nG.E1,
                boltAssetClassName: nG.j7,
                carAssetClassName: nG.or,
                hammerAssetClassName: nG.Wv,
                keyAssetClassName: nG.rs,
                starAssetClassName: nG.OY,
            }),
        ],
    });
};
var nH = s(989756);
function nB(e) {
    let { ref: t, ...s } = e,
        { analyticsLocations: i } = (0, A.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(A.f5, {
        value: i,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nH.kL,
            children: (0, c.jsxs)("div", {
                className: nH.hQ,
                children: [
                    (0, c.jsx)(nw, {}),
                    (0, c.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nH.RH,
                        children: eT.intl.string(eT.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
nB.displayName = "PremiumMarketingFooter";
var nF = s(939249);
let nV = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nk.HOME]: eT.intl.string(eT.t.uGRXjS),
            [nk.WHATS_NEW]: eT.intl.string(eT.t["mfcR/v"]),
            [nk.BEST_OF_NITRO]: eT.intl.string(eT.t.xQKkE8),
            [nk.PLANS]: eT.intl.string(eT.t.wyNMnm),
            [nk.COMPARE]: eT.intl.string(eT.t.pwD7If),
        },
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tI.A, {
        className: tv.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: tv.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: tv.wG,
                    children: [
                        (0, c.jsx)(q.NitroWheelIcon, { className: tv.nE, colorClass: tv.oG }),
                        (0, c.jsx)("div", {
                            className: tv.zc,
                            role: "tablist",
                            "aria-label": eT.intl.string(eT.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nF.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: tv.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(Z.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: tv.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tv.MQ,
                    children: [
                        null != n && (0, c.jsx)(tR.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(eN.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nW = s(713271),
    nz = s(704333),
    nY = s(414499),
    nX = s(597770),
    nK = s(500060),
    nZ = s(866665),
    nq = s(406860),
    nJ = s(870975),
    nQ = s(698834);
function n$() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nq.A)({ boxType: tw.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nz.ServerGridIcon, text: eT.intl.string(tF.default.MUypiB) },
            { icon: nY.CloudIcon, text: eT.intl.string(tF.default.ec5Rdd) },
            { icon: nX.GiftIcon, text: eT.intl.string(tF.default["9t2CzW"]), tooltip: tF.default.AyECej },
            { icon: nK.ScreenStreamIcon, text: eT.intl.string(tF.default.R7YJAY) },
        ];
    return (0, c.jsx)(U.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nQ.iE,
            children: (0, c.jsxs)("div", {
                className: nQ.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nQ.j,
                        children: [
                            (0, c.jsx)("div", { className: nQ._g }),
                            (0, c.jsx)("div", { className: nQ.$h }),
                            (0, c.jsx)("div", { className: nQ.Rv }),
                            (0, c.jsx)("div", { className: nQ.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nQ.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nQ.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(eL.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: nQ.R_,
                                                children: eT.intl.string(tF.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nQ.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(Z.E, {
                                                                        variant: "body-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nQ.Jn,
                                                                            children: (0, c.jsx)(nZ.m, {
                                                                                text: eT.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    tD.CircleInformationIcon,
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
                                                        className: nQ.xF,
                                                        children: (0, c.jsx)(eA.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tp.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nQ.WE,
                                        children: (0, c.jsx)(Z.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: eT.intl.format(tF.default.KDKdWi, { termsLink: (0, nJ.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nQ.r1,
                                children: (0, c.jsx)("img", {
                                    className: nQ.wm,
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
var n0 = s(886205),
    n1 = s(65154),
    n2 = s(382702),
    n3 = s(148289);
function n6() {}
function n7() {
    return (0, c.jsxs)("div", {
        className: n2.Nr,
        children: [
            (0, c.jsxs)("div", {
                className: n2.pq,
                children: [
                    (0, c.jsxs)("div", {
                        className: n2.Z,
                        children: [
                            (0, c.jsx)("div", {
                                children: (0, c.jsx)(eG.E, {
                                    type: "early_access",
                                    variant: "expressive",
                                    icon: q.NitroWheelIcon,
                                }),
                            }),
                            (0, c.jsx)(eL.D, {
                                variant: "heading-xxl/semibold",
                                color: "text-strong",
                                children: eT.intl.string(iP.default.MtIbFp),
                            }),
                            (0, c.jsx)(Z.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: eT.intl.string(iP.default.hXM4Ae),
                            }),
                        ],
                    }),
                    (0, c.jsx)(J.$, {
                        variant: "secondary",
                        size: "md",
                        icon: n1.CirclePlayIcon,
                        text: eT.intl.string(iP.default.wNHvBT),
                        onClick: n6,
                    }),
                ],
            }),
            (0, c.jsx)("div", {
                className: n2.LY,
                children: (0, c.jsx)("img", { className: n2.ot, src: n3.A, alt: "", "aria-hidden": !0 }),
            }),
        ],
    });
}
var n5 = s(734066),
    n8 = s(750338),
    n9 = s(382031),
    n4 = s(505051);
function ae(e) {
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
        className: u()(n4.boxBackdrop, t),
        children: [
            (0, c.jsx)(eL.D, {
                className: n4.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: n4.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: n4.bentoBoxesGrid,
                children: s.flatMap((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n9.A0.SMALL;
                            break;
                        case 2:
                            s = n9.A0.MEDIUM;
                            break;
                        default:
                            s = n9.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, c.jsx)(
                            n8.A,
                            { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let at = o.memo(function (e) {
        let t,
            s = (0, tP.b)("premium_marketing_bento"),
            i = (0, sd.mh)({ location: "premium_marketing_bento" }),
            { enabled: n } = (0, t$.vc)({ location: "premium_marketing_bento" }),
            { enabled: a } = n0.A.useConfig({ location: "premium_marketing_bento" }),
            l = s && !i && !(n && a),
            { whatsNewBoxes: r } = (0, n9.Ay)(l),
            o = ((t = (0, n5.Vl)()), (0, iC.H)("premium_marketing_whats_new", !t));
        return (0, c.jsx)(ae, {
            boxLayout: r,
            title: eT.intl.string(eT.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento:
                o || l
                    ? (0, c.jsxs)(c.Fragment, { children: [o && (0, c.jsx)(n7, {}), l && (0, c.jsx)(n$, {})] })
                    : null,
            ...e,
        });
    }),
    as = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, n9.Ay)();
        return (0, c.jsx)(ae, { boxLayout: t, title: eT.intl.string(eT.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    ai = (0, se.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var an = s(236834),
    aa = s(540504);
function al(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eS.A)({ userId: t?.id, size: ev._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: aa.$6,
        children: (0, c.jsxs)("div", {
            className: aa.sc,
            children: [
                (0, c.jsx)("div", {
                    className: aa.kR,
                    children: (0, c.jsx)(e_.eu, { src: s, "aria-label": t.username, size: ev._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(eL.D, {
                    variant: "heading-xs/medium",
                    className: aa.FS,
                    color: "text-strong",
                    children: eT.intl.format(eT.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var ar = s(579245),
    ac = s(369805);
let ao = function () {
    let e = (0, ac.A)();
    return null == e ? null : (0, c.jsx)(eh, { text: e });
};
function ad() {
    let e = (0, x.bG)([nA.A], () => nA.A.getForSkuAndInterval((0, el.mH)(tp.pe.TIER_0), tp.WT.MONTH));
    return null != e ? (0, el.sS)(e) : "\u2026";
}
var au = s(508556);
let am = function (e) {
    let { containerVisibilityPercentage: t, variant: s = "default" } = e,
        i = "settings" === s,
        n = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion),
        a = (0, e3.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: u()(au.YU, { [au.W0]: i }),
        children: [
            (0, c.jsx)(ta, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: au.wG,
                assetClassName: au.lu,
                variant: s,
            }),
            (0, c.jsx)(tt, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: au.nJ,
                carContainerClassName: au.IN,
                hammerContainerClassName: au.Gj,
                keyContainerClassName: au.FV,
                starContainerClassName: au.E1,
                boltAssetClassName: au.j7,
                carAssetClassName: au.or,
                hammerAssetClassName: au.Wv,
                keyAssetClassName: au.rs,
                starAssetClassName: au.OY,
                animateStar: !i,
            }),
        ],
    });
};
var ax = s(14057);
let ag = o.memo(function (e) {
    let { className: t, subscriptionTier: s, isEligibleForBogoPromotion: i, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        o = ad(),
        d = ai.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        m = (0, an.A)(),
        g = null != m,
        { visibilityPercentageRef: h, visibilityPercentage: p } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion)),
        f = (0, nt.b)(),
        j = !g && f.length > 0,
        b = (0, eu.u)(Y.oW.MARKETING_PAGE_BANNER),
        E = null != b,
        T = (0, nj.ar)() && !E,
        I = (0, eo.O)(),
        C = (null != I && tp.U4.includes(I.discountId)) || E;
    return (0, c.jsx)(A.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: n,
            className: u()(ax.kL, t, { [ax.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, c.jsx)(nO, { className: ax.kv }),
                (0, c.jsx)("div", {
                    ref: h,
                    children: (0, c.jsxs)("div", {
                        className: ax.hQ,
                        children: [
                            (0, c.jsx)(am, { containerVisibilityPercentage: p, variant: a }),
                            T && (0, c.jsx)(ao, {}),
                            (0, c.jsx)("div", {
                                className: ax.s8,
                                children: (0, c.jsx)(ek.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(eL.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : ax.wx,
                                        children: eT.intl.string(eT.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: ax.rf,
                                children: [
                                    g &&
                                        (0, c.jsx)("div", {
                                            className: ax.eZ,
                                            children: (0, c.jsx)(al, { referrer: m }),
                                        }),
                                    j &&
                                        (0, c.jsx)("div", {
                                            className: ax.Qn,
                                            children: (0, c.jsx)(ar.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: T ? ax.es : ax.UJ,
                                        children: [
                                            (0, c.jsx)(eA.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!i,
                                                subscriptionTier: C && null == s ? tp.pe.NONE : s,
                                                buttonTextOverride: C ? eT.intl.string(eT.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, c.jsx)(eN.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: ax.iQ,
                                        children: (0, c.jsx)(Z.E, {
                                            color: "text-muted",
                                            variant: "body-xs/medium",
                                            children: d
                                                ? eT.intl.string(eT.t.jHqrJW)
                                                : eT.intl.format(eT.t.kt9wxs, { cheapestMonthlyPrice: o }),
                                        }),
                                    }),
                                    E &&
                                        (0, c.jsx)(ep.x, {
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
var ah = s(812537);
let ap = function (e) {
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
var af = s(818348),
    aN = s(773188);
let aA = () => {
    let e = (0, m.zy)();
    (0, v.P)(R);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [h, p] = o.useState(!1),
        [f, j] = o.useState(!1),
        [b, E] = o.useState(!1),
        T = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        I = null != T ? (0, el.EL)(T) : null,
        C = null != I ? el.Ay.getSkuIdForPlan(I.planId) : null,
        _ = null !== C && C !== tp.pe.TIER_2 ? tp.pe.TIER_2 : null,
        { analyticsLocations: y } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, s3.lk)(ie.rE.NITRO_HOME_MARKETING),
        S = P ? nW.N.ORB_MULTIPLIER : null,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(i9.x);
            return "orbs" === t
                ? S
                : t === nW.N.THREE_P_PROMOTIONS
                  ? nW.N.THREE_P_PROMOTIONS
                  : t === nW.N.YOUTUBE
                    ? nW.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    i8(D ?? "", null != D);
    let { navBarSections: k, activeSectionId: L } = ap([nk.HOME, nk.WHATS_NEW, nk.BEST_OF_NITRO, nk.PLANS, nk.COMPARE]),
        { home: w, whatsNew: H, bestOfNitro: B, plans: F, compare: V } = k,
        W = (0, c.jsxs)("div", {
            ref: s,
            className: u()(aN.kL, aN.Gd, aN.iI, { [aN.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nO, { className: aN.yH }),
                (0, c.jsx)(nV, { navBarSections: k, activeSectionId: L }),
                (0, c.jsxs)("div", {
                    className: aN.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: aN.qY,
                            ref: w.ref,
                            children: (0, c.jsx)(U.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(ag, { ref: n, subscriptionTier: _ }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: aN.So,
                            ref: H.ref,
                            children: (0, c.jsx)(at, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: aN.KQ,
                            ref: B.ref,
                            children: (0, c.jsx)(as, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: aN.qc,
                            ref: F.ref,
                            children: (0, c.jsx)(U.L, {
                                innerRef: i,
                                onChange: (e) => p(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(nS, { innerRef: i }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: aN.aC, ref: V.ref, children: (0, c.jsx)(ah.A, {}) }),
                    ],
                }),
                (0, c.jsx)(U.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (O.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            j(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: aN._Z }),
                }),
                (0, c.jsx)(nB, { ref: l }),
                (0, c.jsx)(nU, { isVisible: !d && !h && b, subscriptionTier: _ }),
                (0, c.jsx)(nO, { className: aN.MF }),
            ],
        });
    return (0, c.jsx)(tM.N, {
        theme: af.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(aN.XG, e), ref: t, children: W }),
    });
};
var aj = s(862482),
    ab = s(300349),
    aE = s(106512),
    aT = s(412260),
    aI = s(662367),
    aC = s(374403),
    aR = s(396375),
    av = s(900797),
    a_ = s(847374),
    ay = s(614268);
function aP(e) {
    let { className: t } = e;
    return (0, c.jsx)("div", {
        className: u()(ay.i, t),
        children: (0, c.jsx)(eG.E, { type: "early_access", variant: "premium" }),
    });
}
var aS = s(536071),
    aD = s(729934);
let aM = "/assets/5b4fec8511c3676a.svg",
    aO = "/assets/0838bda6ecd20d91.svg";
function ak(e, t, s) {
    return (0, sX.M)(e) ? t : s;
}
var aL = s(872461);
function aU(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nF.D, {
        onClick: s,
        className: aL.customButton,
        children: [
            t ? eT.intl.string(eT.t.maZaN3) : eT.intl.string(eT.t["37C26f"]),
            t
                ? (0, c.jsx)(av.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: aL.arrow })
                : (0, c.jsx)(a_.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: aL.arrow }),
        ],
    });
}
function aG(e) {
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
        x = (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aL.perksCardArt) }),
        g = "settings" === d;
    return (0, c.jsx)(A.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: u()(aL.perkCard, i, { [aL.settingsCard]: g }),
            children: [
                r ? (0, c.jsx)(aS.A, { className: aL.perkCardNewBadge }) : null,
                o ? (0, c.jsx)(aP, { className: aL.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, c.jsx)(K.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: aL.settingsArt,
                          children: x,
                      })
                    : x,
                (0, c.jsxs)("div", {
                    className: g ? aL.settingsText : void 0,
                    children: [
                        (0, c.jsxs)(eL.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: aL.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(Z.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: aL.perkCardDescription,
                            children: "function" == typeof s ? s(m) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aw = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, sK.Ay)(),
                n = (0, sJ.X)("usePerkCards"),
                a = (0, e2.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return el.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, el.EJ)(tp.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: eT.intl.string(eT.t.SS87rQ),
                    description: eT.intl.string(eT.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eT.intl.string(eT.t["5cYMu0"]),
                    description: eT.intl.string(eT.t.vxk9va),
                    imageSource: ak(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eT.intl.string(eT.t["/xvEMy"]),
                    description: eT.intl.string(eT.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eT.intl.string(eT.t.OuItFi),
                    description: eT.intl.string(eT.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eT.intl.string(eT.t["R2IV/Q"]),
                    description: eT.intl.string(eT.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eT.intl.string(eT.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? eT.intl.formatToPlainString(eT.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : eT.intl.formatToPlainString(eT.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (aD.A.setState({ scrollPosition: iK._F.TRY_IT_OUT }),
                                    t(es.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? eT.intl.format(eT.t.aj1pfZ, { onCheckItOutClick: t })
                            : eT.intl.format(eT.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eT.intl.string(eT.t.BUScid),
                    description: eT.intl.string(eT.t.vN6XpQ),
                    imageSource: ak(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eT.intl.string(eT.t.Bv8Pfk),
                    description: eT.intl.string(eT.t.JMfaTU),
                    imageSource: ak(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eT.intl.string(eT.t.Bv8Pfk),
                    description: eT.intl.string(eT.t.JMfaTU),
                    imageSource: ak(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eT.intl.string(eT.t["lGcW+c"]),
                    description: eT.intl.string(eT.t["/fDyO+"]),
                    imageSource: ak(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eT.intl.string(eT.t["1c+xwT"]),
                    description: eT.intl.string(eT.t.hJG8ZN),
                    imageSource: ak(i, aO, aM),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eT.intl.string(eT.t.tzdIwI),
                    description: eT.intl.string(eT.t.hJG8ZN),
                    imageSource: ak(i, aO, aM),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eT.intl.string(eT.t.tzdIwI),
                    description: eT.intl.string(eT.t.hJG8ZN),
                    imageSource: ak(i, aO, aM),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eT.intl.string(eT.t.RSXQYO),
                    description: eT.intl.string(eT.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eT.intl.string(eT.t["uZt5q/"]),
                    description: eT.intl.string(eT.t.ZK3ZoX),
                    imageSource: ak(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eT.intl.formatToPlainString(eT.t.jqhAdL, { premiumMaxSize: l }),
                    description: eT.intl.formatToPlainString(eT.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eT.intl.string(eT.t.NaGpTf),
                    description: eT.intl.string(eT.t["A8O/Qw"]),
                    imageSource: ak(i, iZ, iq),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aL }),
        r = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(aL.perksContainer, t, {
            [aL.partiallyHidden]: i && !n,
            [aL.subscriberNitroHome]: i,
            [aL.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(eL.D, {
                variant: "heading-xxl/semibold",
                className: aL.perksTitle,
                children: i ? eT.intl.string(eT.t.QX14gI) : eT.intl.string(eT.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aL.perkCardContainer, { [aL.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, c.jsx)(aG, { ...t }, e);
                }),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aL.sizeGizmo]: !n, [aL.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aU, {
                                onClick: function () {
                                    (O.default.track(eX.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(aL.cover, { [aL.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aH = s(615939);
let aB = o.memo(function (e) {
    let { className: t } = e,
        s = [
            {
                id: tU.MORE_EMOJIS_CARD_ID,
                title: eT.intl.string(eT.t["R2IV/Q"]),
                description: eT.intl.string(eT.t.DRMecB),
                imageSource: sk.A,
            },
            {
                id: tU.HD_VIDEO_CARD_ID,
                title: eT.intl.string(eT.t["/mQ5gg"]),
                description: eT.intl.string(eT.t["7WwAXh"]),
                imageSource: sM.A,
            },
            {
                id: tU.LARGE_UPLOADS_CARD_ID,
                title: eT.intl.string(eT.t.nL1WZV),
                description: (0, s$.M6)({
                    legacyCopy: eT.intl.formatToPlainString(eT.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eT.intl.formatToPlainString(eT.t.teOTfv, {
                        maxFileSize: (0, el.EJ)(tp.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: aH.A,
            },
            {
                id: tU.PROFILES_CARD_ID,
                title: eT.intl.string(eT.t.KcyDwF),
                description: eT.intl.string(eT.t.Mt3U1W),
                imageSource: sS,
            },
        ];
    return (0, c.jsxs)(K.B, {
        gap: 16,
        className: u()(aL.settingsPerks, t),
        children: [
            (0, c.jsx)(eL.D, { variant: "heading-xl/semibold", children: eT.intl.string(eT.t.q1u7nQ) }),
            (0, c.jsx)(ek.F, {
                children: (0, c.jsx)("div", {
                    className: aL.settingsGrid,
                    children: s.map((e) => (0, c.jsx)(aG, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var aF = s(695366),
    aV = s(370049);
let aW = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nj.ar)();
    if (null == i) return null;
    let r = null != i ? el.Ay.getPremiumPlanItem(i) : null;
    if (
        (el.Ay.isBoostOnlySubscription(i)
            ? (t = eT.intl.string(eT.t.Uj0md3))
            : null != r && (t = el.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ei.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? el.Ay.getSkuIdForPlan(r.planId) : null) === tp.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tO.Z, {
            className: u()(aV.kL, n, { [aV.He]: l }),
            type: tO.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(aF.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aV.Kk, { [aV.Pt]: l }),
                }),
                (0, c.jsx)(Z.E, {
                    variant: "body-sm/medium",
                    color: s,
                    children: d
                        ? eT.intl.format(eT.t["tYuv+T"], {
                              helpdeskArticle: ea.A.getArticleURL(eX.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : eT.intl.format(eT.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var az = s(978836);
let aY = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(az.zr, { [az.N]: t }),
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
                        (0, c.jsx)("stop", { className: az.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: az.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: az.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: az.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: az.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aX = s(194509),
    aK = s(317587);
let aZ = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, e7.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eX.JJy.MARKETING_FLOATING_CTA },
        r = (0, sK.Ay)(),
        o = (0, nD.M)(r);
    return (0, c.jsx)(e6.animated.div, {
        className: u()(aK.iE, { [aK.H8]: i, [aK.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aK.zW : aK.iJ,
            children: [
                (0, c.jsx)(aR.A, {
                    color: o ? aj.XD.BRAND_INVERTED : void 0,
                    className: u()(aK.x6, { [aK.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aK.PJ,
                }),
                (0, c.jsx)(aX.A, { className: aK.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aq = s(386564);
function aJ(e) {
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
            ? (0, c.jsx)(aR.A, {
                  color: l ? aj.XD.BRAND_INVERTED : void 0,
                  className: u()(aq.x6, aq.Ph, n, { [aq.Sq]: t && a, [aq.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aq.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aR.A, {
                  color: l || !a ? aj.XD.BRAND_INVERTED : void 0,
                  className: u()(aq.x6, aq.Ph, n, { [aq.Sq]: t && a, [aq.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aX.A, { className: u()(aq.x6, n), color: a ? void 0 : aj.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aq.UD, i), children: [o, " ", d] });
}
function aQ() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aS.p, { className: aq.zd }),
            (0, c.jsx)(aS.p, { className: aq.G }),
            (0, c.jsx)(aS.p, { className: aq.zy }),
            (0, c.jsx)(aS.p, { className: aq.GX }),
        ],
    });
}
function a$(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = ad();
    return (0, c.jsx)(Z.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(aq.h_, { [aq.If]: s, [aq.jn]: i }),
        children: eT.intl.format(eT.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let a0 = function (e) {
    let { className: t, buttonClassName: s, subscriptionTier: i, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, er.QQ)(),
        o = (0, nj.ar)(),
        d = (0, nt.b)().length > 0,
        m = eT.intl.string(eT.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(aq.kL, t, { [aq.V1]: !o, [aq.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aq.I6 : aq.G1,
                    children: [
                        (0, c.jsx)(ek.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(eL.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: aq.DF,
                                  children: (0, c.jsx)(ar.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(a$, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: aq.UD,
                                  children: (0, c.jsx)(aX.A, { className: u()(aq.x6, s), color: aj.XD.WHITE }),
                              })
                            : (0, c.jsx)(aJ, {
                                  subscriptionTier: i,
                                  inOfferExperience: o,
                                  buttonClassName: s,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(a$, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aQ, {}),
            ],
        }),
    });
};
var a1 = s(403227),
    a2 = s(367740),
    a3 = s(377770);
function a6(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aY, { lifted: t }) : null;
}
let a7 = () => {
        let { enabled: e } = ab.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, v.P)(R);
        let t = o.useRef(null),
            s = o.useRef(null),
            i = o.useRef(null),
            n = (0, sK.Ay)(),
            a = (0, sX.M)(n),
            [l, r] = o.useState(!1),
            [d, m] = o.useState(!1),
            [g, h] = o.useState(!1),
            p = !l && !d,
            [f, j] = o.useState(!1),
            b = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            E = null != b ? (0, el.EL)(b) : null,
            T = null != E ? el.Ay.getSkuIdForPlan(E.planId) : null,
            I = null !== T && T !== tp.pe.TIER_2 ? tp.pe.TIER_2 : null,
            C = (0, ed.V)(),
            _ = C?.subscriptionTrial?.skuId,
            y = (0, nj.ar)(),
            P = !e && y,
            S = (0, x.bG)([aT.A], () => {
                let e = aT.A.getMarketingComponentBySurface(Y.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e ? null : e.surface;
            }),
            D = (0, aC.Q)(),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            j(!0);
        }, []);
        let L = e
            ? (0, c.jsx)("div", {
                  className: a3.OE,
                  children: (0, c.jsx)(U.L, {
                      innerRef: t,
                      onChange: m,
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(nS, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, c.jsx)("div", {
                  className: a3.dY,
                  children: (0, c.jsx)(U.L, {
                      innerRef: t,
                      onChange: (e) => m(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(nn.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, c.jsx)(aR.A, {
                              showIcon: !1,
                              subscriptionTier: tp.pe.TIER_0,
                              className: a2.Ph,
                              look: aj.pR.OUTLINED,
                              color: aj.XD.WHITE,
                              buttonShineClassName: a2.Qr,
                          }),
                          tier2CTAButton:
                              _ === tp.pe.TIER_0
                                  ? (0, c.jsx)(aR.A, {
                                        showIcon: !1,
                                        subscriptionTier: tp.pe.TIER_2,
                                        className: a2.Ph,
                                        look: aj.pR.OUTLINED,
                                        color: aj.XD.WHITE,
                                        buttonShineClassName: a2.Qr,
                                    })
                                  : (0, c.jsx)(aR.A, {
                                        color: aj.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tp.pe.TIER_2,
                                        className: a2.Ph,
                                        textOptions: { textClassName: a2.Ac },
                                        buttonShineClassName: a2.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, c.jsxs)("div", {
            className: u()(a3.kL, { [a3.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aW, {
                    premiumSubscription: b,
                    textColor: e ? "text-default" : void 0,
                    className: u()(a3.R3, { [a3.aZ]: y }),
                }),
                P &&
                    (0, c.jsxs)("div", {
                        className: a3.n1,
                        children: [
                            (0, c.jsx)(a6, { inOfferExperience: y }),
                            (0, c.jsx)(tR.l, {
                                className: a3.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [a3.V1]: !P }),
                    children: [
                        null != S && (0, c.jsx)(aE.m, { className: a3.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: a3.iS,
                            children: [
                                !P &&
                                    (0, c.jsx)(tR.l, {
                                        className: a3.ij,
                                        size: "md",
                                        location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(U.L, {
                                    innerRef: s,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, c.jsx)(ag, { ref: s, subscriptionTier: I, variant: "settings" })
                                        : (0, c.jsx)(a0, {
                                              ref: s,
                                              subscriptionTier: I,
                                              className: u()({ [a3.p7]: y, [a3.Pw]: y, [a3.Cv]: null != b }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: a3.Ol, children: (0, c.jsx)(aI.I, { component: D }) }),
                L,
                e ? (0, c.jsx)(aB, { className: a3.OE }) : (0, c.jsx)(aw, { className: a3.B_ }),
                (0, c.jsx)("div", {
                    className: a3.aC,
                    children: e
                        ? (0, c.jsx)(ah.A, { variant: "settings" })
                        : (0, c.jsx)(a1.A, { className: a3.JQ, hideCTAs: !0 }),
                }),
                (0, c.jsx)("div", { className: a3.hz }),
                e
                    ? (0, c.jsx)(nU, { isVisible: p && f, subscriptionTier: I, variant: "settings" })
                    : (0, c.jsx)(aZ, { isVisible: p && f, subscriptionTier: I, isApplicationHome: !1 }),
                (0, c.jsx)(U.L, {
                    innerRef: i,
                    onChange: (e) => {
                        e &&
                            !g &&
                            (O.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: k }),
                            h(!0));
                    },
                    children: (0, c.jsx)("div", { ref: i, className: a3._Z }),
                }),
                (0, c.jsx)("img", {
                    src: i4,
                    className: a3.Kw,
                    width: 112,
                    height: 85,
                    alt: eT.intl.string(eT.t.X4IxWL),
                }),
            ],
        });
    },
    a5 = function (e) {
        let { entrypoint: t } = e,
            s = (0, ed.V)(),
            i = (0, eo.O)(),
            n = (0, ni.NF)({ trialOffer: s }),
            a = (0, ni.Tp)(),
            l = (0, x.bG)([ns.A], () => ns.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, ni.QG)(), !0 === a && (0, ni.ne)(l), (null != s || null != i) && (0, L.u1)(s, i));
            }, [s, i, n, a, l]),
            t)
        ) {
            case tp.tU.UserSettings:
                return (0, c.jsx)(a7, {});
            case tp.tU.ApplicationStoreHome:
                return (0, c.jsx)(aA, {});
            default:
                return null;
        }
    };
var a8 = s(531296);
let a9 = function (e) {
    let { entrypoint: t = tp.tU.UserSettings } = e;
    (0, v.P)(R);
    let s = (0, b.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        I = (0, ed.V)(),
        C = (0, eo.O)(),
        U = (0, E.Y)(tp.T7),
        [G, w] = o.useState(!0),
        H = o.useRef(0),
        B = (0, k.YE)(r, tp.PremiumTypes.TIER_2);
    ((0, nt.b)(),
        o.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([j.hP(), j.$o(), (0, h.zS)(null, null, eX.tF5.DISCOVERY)]),
                    (H.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        o.useEffect(() => {
            G ||
                O.default.track(eX.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: H.current,
                });
        }, [i, G]),
        o.useEffect(() => {
            s && (null != I || null != C) && (0, L.u1)(I, C);
        }, [s, I, C]));
    let F = (0, m.zy)(),
        V = o.useRef(!1),
        W = a && l && U,
        [z, Y] = o.useState(W);
    (W && !z && Y(!0),
        o.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tp.pe.TIER_0, nitro: tp.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((V.current = !0),
                (0, y.bG)(eX.BVt.APPLICATION_STORE),
                (0, _.A)({ subscriptionTier: s, analyticsLocations: n }));
        }, [W, F.search, n]));
    let X = (0, x.bG)([P.A], () => P.A.enabled),
        K = t === tp.tU.ApplicationStoreHome,
        Z = X
            ? (0, c.jsx)(p.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : K && B
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(ne, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(a8.kL, a8.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !X && !s && K && B
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [K && (0, c.jsx)(f.A, {}), Z] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(a5, { entrypoint: t }) });
};
