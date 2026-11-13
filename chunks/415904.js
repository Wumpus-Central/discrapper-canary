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
    x = s(855986),
    g = s(289873),
    p = s(73825),
    h = s(369143),
    f = s(107834),
    N = s(793574),
    A = s(688810),
    b = s(669815),
    j = s(86379),
    E = s(160946),
    T = s(500597),
    C = s(840251),
    I = s(688151);
let R = new C.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
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
    B = s(622886),
    H = s(851767),
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
let ep = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eg.i,
        children: (0, c.jsx)(Z.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var eh = s(371764),
    ef = s(103411),
    eN = s(65470),
    eA = s(792656),
    eb = s(536637),
    ej = s.n(eb),
    eE = s(496431),
    eT = s(792996),
    eC = s(850292);
let eI = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "body-md/medium" } = e,
        n = (0, eE.A)(ej()(t).toDate(), 1e3);
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
            (0, c.jsx)(Z.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: eT.intl.string(eT.t["/ARFVE"]),
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
                                                        children: (0, c.jsx)(Z.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: eC.B2,
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
    eB = s(132506),
    eH = s(610709),
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
        } = (0, eB.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(e0.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e0.G3,
                children: (0, c.jsx)(eH.fx, {
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
                                  (0, c.jsx)(eH.ZP, { referralSentUsers: s }),
                                  (0, c.jsx)(eZ, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(eH.ZP, { referralSentUsers: s, className: e0.t7 }),
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
                        : (0, eH.jM)({
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
    e5 = s(717421),
    e7 = s(396583),
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
        [b, j] = (0, o.useState)(0),
        [E, T] = (0, o.useState)(1),
        C = (0, e5.z)({ xOffset: b, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e7.A)(() => {
        (j(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
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
                  translateX: a ? C.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
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
        animationSpeedScale: p = 1,
        blurScale: h = 1,
        animateStar: f = !0,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(te.nJ, i),
                    children: (0, c.jsx)(e4, {
                        blurAnimationData: { startBlurRadius: 10 * h, endBlurRadius: 0, duration: 3e3 },
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
                    className: u()(te.FV, l),
                    children: (0, c.jsx)(e4, {
                        blurAnimationData: { startBlurRadius: 5 * h, endBlurRadius: 0, duration: 4e3 },
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
                    className: u()(te.E1, r),
                    children: (0, c.jsx)(e4, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * h, duration: 3e3 },
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
                animationSpeedScale: p = 1,
            } = e,
            h = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion),
            f = (0, e3.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(ta, {
                    supportHEVCAlpha: f,
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(tt, {
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
        p =
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
        h = o ?? (r ? (0, c.jsx)(e1, {}) : null);
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
                                        (0, c.jsx)(eU, { color: "text-default", variant: "nitro-md", children: p }),
                                        (0, c.jsx)(eO, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: td.y3,
                    children: (0, c.jsx)(tc, { containerVisibilityPercentage: g, compact: null == h }),
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
let tp = function (e) {
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
var th = s(682901);
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
                                (0, c.jsx)(ep, { text: eT.intl.string(eT.t.yhldRB) }),
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
                (0, c.jsx)("div", { className: td.Hk, children: (0, c.jsx)(tp, { containerVisibilityPercentage: l }) }),
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
        { visibilityPercentageRef: p, visibilityPercentage: h } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion)),
        f = g ?? (m ? (0, c.jsx)(e1, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(td.kL, td.Eg, t),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: u()(td.W2, td.HQ),
            ref: p,
            children: [
                (0, c.jsxs)(K.B, {
                    align: "start",
                    gap: 32,
                    className: u()(td.ZU, td.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eI, {
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
                                                    s.e(594161),
                                                    s.e(435432),
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
                    children: (0, c.jsx)(tx, { containerVisibilityPercentage: h }),
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
        } = tj(),
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, eu.u)(Y.oW.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eX.Dmq.CANCELED,
        p = null;
    if (null != x) {
        let { surface: e, id: t, promotionId: s, componentType: i } = x;
        p = (0, c.jsx)(eh.x, {
            componentId: t,
            componentType: i,
            promotionId: s,
            promotionBannerMarketingComponentFields: e,
        });
    }
    let h = (0, ed.V)(),
        f = (0, eo.O)(),
        b = (0, W.U9)(f, th.pe.TIER_2) ? th.pe.TIER_2 : void 0,
        j = null != r && r.status !== eX.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, et.A)(),
        T = E.isFractionalPremiumActive && !j && null == p && !l;
    if (s) return (0, c.jsx)(tf, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: td.UJ,
                  children: [
                      (0, c.jsx)(eA.A, { size: "md", subscriptionTier: h?.subscriptionTrial?.skuId ?? b }),
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
            marketingBanner: p,
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
              marketingBanner: p,
          })
        : (0, c.jsx)(tu, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          });
}
let [tb, tj] = (0, en.A)(),
    tE = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, ec.ds)(),
            r = (0, er.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eX.Dmq.CANCELED && null != i,
            m = r && !u,
            g = eT.intl.string(eT.t.qYKftX),
            p = (0, ef.m)(),
            { fractionalState: h, endsAt: f } = (0, et.A)(),
            b = (0, ee.Ay)(f, ee.yE.CREDITS_ENDS_IN),
            j = h !== th.xc.NONE && !l;
        j && (m = !0);
        let E = o.useMemo(() => {
                if (!j) return (0, c.jsx)(ep, { text: g });
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
                            children: (0, c.jsx)("div", { className: td.eL, children: (0, c.jsx)(ep, { text: b }) }),
                        }),
                });
            }, [j, g, b]),
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
                children: (0, c.jsx)(tA, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: p }),
            }),
        });
    };
var tT = s(820284),
    tC = s(742589),
    tI = s(392943),
    tR = s(521440),
    tv = s(603202),
    t_ = s(673992);
let ty = function () {
    return (0, c.jsx)(tT.A, {
        section: eX.JJy.NAVIGATION,
        children: (0, c.jsx)(tC.A, {
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
                                children: (0, c.jsx)(tI.A, { color: "currentColor" }),
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
    tB = s(727811),
    tH = s(222652),
    tF = s(831768),
    tV = s(934353);
function tW(e) {
    let { openRewardModal: t } = e,
        s = (0, tH.z)();
    if (s.kind === tH.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tV.R$,
            children: [
                (0, c.jsx)(eA.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: th.pe.TIER_2,
                }),
                (0, c.jsx)(J.$, { variant: "secondary", size: "md", text: eT.intl.string(eT.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === tB.P.CLAIMED
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
            s.claimStatus === tB.P.CLAIM_IN_PROGRESS &&
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
        n = (0, tH.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === tH.N.SUBSCRIBE
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
        r = n.kind === tH.N.DEFAULT && n.claimStatus === tB.P.CLAIM_IN_PROGRESS;
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
var tQ = s(744082);
s(321073);
var t$ = s(44724),
    t0 = s(852218),
    t1 = s(945810);
let t2 = (0, t1.mj)({
        kind: "user",
        name: "2026-10-bloons-bf-deal",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    t3 = (0, t1.mj)({
        kind: "user",
        name: "2026-10-rust-bf-deal",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    t6 = new Date("2026-12-01T08:00:00Z");
var t5 = s(188275),
    t7 = s(662240),
    t8 = s(51381),
    t9 = s(261995),
    t4 = s(722793),
    se = s(700556),
    st = s(821874);
function ss(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = st.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && se.Jx, l), children: a }) : null,
        ],
    });
}
var si = s(517846),
    sn = s(509434),
    sa = s(669700),
    sl = s(371794);
let sr = new Date(Date.UTC(2026, 9, 23)),
    sc = (0, t1.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-expired",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var so = s(398523),
    sd = s(881373),
    su = s(555393),
    sm = s(325652),
    sx = s(52530),
    sg = s(670328);
let sp = (0, t1.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sh = s(612413);
let sf = new Date(Date.UTC(2026, 10, 5));
s(675772);
var sN = s(749962),
    sA = s(691450),
    sb = s(647024),
    sj = s(524698),
    sE = s(635088),
    sT = s(679502),
    sC = s(762493);
let sI = "xgpp";
function sR(e) {
    let { card: t, backgroundAssetUrl: s, blurTint: i, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: se.JE,
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
function sv(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tP.b)("premium_subscriber_home_rewards");
    (0, tQ.A)(th.tv);
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
                i = ((e = (0, sx.eh)()), (t = (0, sx.fR)()), null != e ? e : t),
                n = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = sc.useConfig({ location: t });
                    return s;
                })({ location: "useHardwarePartnerPerkCards" }),
                a = (0, sd.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                l = so.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                r = (0, sh.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                d = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = sp.useConfig({ location: t });
                    return s;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                u = null === (0, su.N)(),
                m = (0, t9.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: x, nDaysInMonth: g } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let e =
                        n && null == i
                            ? {
                                  id: tU.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: eT.intl.string(sN.default["IcD/7p"]),
                                  description: eT.intl.formatToPlainString(sN.default.hausFi, {
                                      date: new Intl.DateTimeFormat(eT.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(sr),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: sm.L.EXPIRED,
                                  pillText: eT.intl.string(sN.default.fxF0Jz),
                                  caption: (0, c.jsx)("img", { src: sE.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = a
                        ? {
                              id: tU.LOGITECH_3PP_CARD_ID,
                              title: eT.intl.string(sA.default.OlObRa),
                              description: eT.intl.format(sA.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: ea.A.getArticleURL(eX.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: x.getDate() / g,
                              ctaText: eT.intl.string(eT.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sg.P)({
                                      partnerIds: [t0.XY],
                                      title: eT.intl.string(sA.default["2I7nK+"]),
                                      subtitle: eT.intl.format(sA.default.W8jOD0, {
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
                              analyticsOptions: { thirdPartyPartner: t0.XY },
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
                                  (0, sg.P)({
                                      partnerIds: [t0.KS],
                                      title: eT.intl.string(eT.t["7ioAjs"]),
                                      subtitle: eT.intl.format(eT.t.LOYRxB, {
                                          helpCenterLink: ea.A.getArticleURL(eX.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: s,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: t0.KS },
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
                              title: eT.intl.string(sb.default.gQ1ctg),
                              description: eT.intl.format(sb.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(eT.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(sf),
                                  termsUrl: (0, t5.X3)(t5.IG),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: eT.intl.string(eT.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, sl.YE)(t5.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: eT.intl.string(sb.default.NmBRGV),
                              ctaIcon: sn.LinkExternalSmallIcon,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t$.default)({ applicationId: t5.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    steelseriesCard: o,
                    youtubeCard: r
                        ? {
                              id: tU.YOUTUBE_3PP_CARD_ID,
                              title: eT.intl.string(sj.default["BdIVB+"]),
                              description: eT.intl.format(sj.default["cCl3+a"], {
                                  discountPercentage: 20,
                                  months: 6,
                                  helpCenterUrl: ea.A.getArticleURL(eX.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: sT.A, alt: "YouTube Premium" }),
                              ctaText: eT.intl.string(sN.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sg.P)({
                                      partnerIds: [t0.NC],
                                      analyticsLocations: s,
                                      title: eT.intl.string(sj.default.TDZUui),
                                      subtitle: eT.intl.format(sj.default.dueYf1, {
                                          helpCenterUrl: ea.A.getArticleURL(eX.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          sa.Ay.fireSurveyAction(si.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: t0.NC },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    macaronCard: m,
                    codeBlurpleCard: i,
                };
            }, [m, i, s, n, x, a, g, l, d, r, u]);
        })(),
        g = (function () {
            let { enabled: e } = t2.useConfig({ location: "useBfDealPerkCards" }),
                { enabled: t } = t3.useConfig({ location: "useBfDealPerkCards" }),
                [s, i] = (0, o.useState)(() => Date.now() >= t6.getTime());
            return (
                (0, e7.A)(() => i(Date.now() >= t6.getTime()), s ? null : 1e3),
                (0, o.useMemo)(() => {
                    if (s) return [];
                    let i = {
                            pillText: eT.intl.string(t7.default["/3OubH"]),
                            primaryAssetClassName: t8.b,
                            backgroundAssetUrl:
                                "https://cdn.discordapp.com/assets/content/30e0a852cb8971330e230eb2f8ab13ba6581186581bba0eef71a872d1ac0fe21.webp",
                            blurTint: "#28306F",
                        },
                        n = new Intl.DateTimeFormat(eT.intl.currentLocale, {
                            day: "numeric",
                            month: "short",
                            timeZone: "America/Los_Angeles",
                        }).format(new Date(t6.getTime() - 1)),
                        a = [];
                    return (
                        e &&
                            a.push({
                                ...i,
                                id: tU.BLOONS_BF_DEAL_CARD_ID,
                                title: eT.intl.string(t7.default.NF9Ryp),
                                description: eT.intl.formatToPlainString(t7.default["h+Us1O"], { endDate: n }),
                                caption: (0, c.jsx)("img", {
                                    src: "https://cdn.discordapp.com/assets/content/f185d9d0cb340031712ecd4cee958428dc6097958f949e0699d187fa47f11555.png",
                                    alt: "Bloons TD 6",
                                }),
                                primaryAsset:
                                    "https://cdn.discordapp.com/assets/content/ecbec08e7405e277e4e71c2309b3b5579285aac7c30e2f7f554789b8e9ab1c10.webp",
                                ctaText: eT.intl.string(t7.default.ywzvyl),
                                onCtaClick: () => (0, t$.default)({ applicationId: t5.S3 }),
                                analyticsOptions: { thirdPartyPartner: "bloons" },
                            }),
                        t &&
                            a.push({
                                ...i,
                                id: tU.RUST_BF_DEAL_CARD_ID,
                                title: eT.intl.string(t7.default.zrFadr),
                                description: eT.intl.formatToPlainString(t7.default.rEq6H1, { endDate: n }),
                                caption: (0, c.jsx)("img", {
                                    src: "https://cdn.discordapp.com/assets/content/9e70ce7e67a94bd3cae677a9e3db28ff52134461ced6a3f32c66468cd20270b8.png",
                                    alt: "Rust",
                                }),
                                primaryAsset:
                                    "https://cdn.discordapp.com/assets/content/445b4bea97235a430ab723083ec215cc5c30e3a0981265202aadb7b430f26fe1.webp",
                                ctaText: eT.intl.string(t7.default.LlyBqh),
                                onCtaClick: () => (0, t$.default)({ applicationId: t5.IG }),
                                analyticsOptions: { thirdPartyPartner: "rust" },
                            }),
                        a
                    );
                }, [e, t, s])
            );
        })(),
        { phase: p } = (0, t9.vc)({ location: "NitroRewardsSection" }),
        h =
            null != m
                ? {
                      card: m,
                      backgroundAssetUrl:
                          p === t4.H.PHASE_ONE
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
        f = null != h ? h.card.id : null,
        b = i && null == h,
        j =
            i ||
            g.length > 0 ||
            null != n ||
            null != a ||
            null != l ||
            null != r ||
            null != x ||
            (null != m && m.id !== f) ||
            (null != d && d.id !== f),
        E = null;
    return (null != h
        ? (E = (0, c.jsx)(sR, {
              card: h.card,
              backgroundAssetUrl: h.backgroundAssetUrl,
              blurTint: h.blurTint,
              glowing: t === sI || s === h.card.id,
              autoClickCta: s === h.card.id,
          }))
        : b && (E = (0, c.jsx)("div", { className: se.JE, children: (0, c.jsx)(tz, { glowing: t === sI }) })),
    null != E || j)
        ? (0, c.jsx)(ss, {
              id: sI,
              sectionClassName: u()(sC.uW, sC.Uv, sC.qr),
              heading: (0, c.jsx)(eL.D, {
                  variant: "nitro-sm",
                  className: u()(st.R_, se.U6),
                  children: eT.intl.string(eT.t.NG1e6l),
              }),
              beforeGrid: E,
              grid: j
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            g.map((e) =>
                                (0, c.jsx)(tY.S, { ...e, containerClassName: st.Nr, glowing: s === e.id }, e.id),
                            ),
                            null != x && (0, c.jsx)(tY.S, { ...x, containerClassName: st.Nr, glowing: s === x.id }),
                            null != m &&
                                m.id !== f &&
                                (0, c.jsx)(tY.S, {
                                    ...m,
                                    containerClassName: st.Nr,
                                    glowing: s === m.id,
                                    autoClickCta: s === m.id,
                                }),
                            null != d &&
                                d.id !== f &&
                                (0, c.jsx)(tY.S, {
                                    ...d,
                                    containerClassName: st.Nr,
                                    glowing: s === d.id,
                                    autoClickCta: s === d.id,
                                }),
                            null != l && (0, c.jsx)(tY.S, { ...l, containerClassName: st.Nr, glowing: s === l.id }),
                            i &&
                                (0, c.jsx)(tJ, {
                                    containerClassName: st.Nr,
                                    glowing: s === tU.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, c.jsx)(tY.S, { ...a, containerClassName: st.Nr, glowing: s === a.id }),
                            null != r && (0, c.jsx)(tY.S, { ...r, containerClassName: st.Nr, glowing: s === r.id }),
                            null != n && (0, c.jsx)(tY.S, { ...n, containerClassName: st.Nr, glowing: s === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var s_ = s(313133),
    sy = s(67423);
let sP = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e6.animated.div, {
        className: u()(s_.iE, { [s_.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: s_.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sy, className: s_.oU }),
                (0, c.jsxs)("div", {
                    className: s_.iQ,
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
                                s.e(594161),
                                s.e(435432),
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
var sS = s(761508),
    sD = s(151869),
    sM = s(62617),
    sO = s(387103);
function sk(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sO.A,
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
let sL =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function sU(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sL,
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sG = s(93712);
function sw(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sG.A,
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sB = s(345394);
function sH(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sB.A,
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sF = s(78211);
function sV(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sW = s(95278);
function sz(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sY(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sX = s(996682);
function sK(e) {
    let { color: t = eW.A.colors.ICON_STRONG, "aria-label": s, "aria-hidden": i, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, sM.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, sX.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function sZ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sq = s(78701);
function sJ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sq.A,
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sQ = s(462887),
    s$ = s(736653),
    s0 = s(259065),
    s1 = s(206835),
    s2 = s(591179),
    s3 = s(462463),
    s6 = s(219882),
    s5 = s(105909),
    s7 = s(208223),
    s8 = s(696292),
    s9 = s(914313),
    s4 = s(321538),
    ie = s(892227),
    it = s(81466),
    is = s(17268),
    ii = s(749012);
let ia = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, B.F)();
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ie.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: ii.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: ii.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ii.Pf,
                            children: [
                                (0, c.jsx)(it.CalendarIcon, { size: "sm", color: eW.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eT.intl.string(is.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eT.intl.format(is.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: ii.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: ii.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ii.Pf,
                            children: [
                                (0, c.jsx)(eV.OrbsIcon, { size: "sm", color: eW.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eT.intl.string(is.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eT.intl.format(is.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var il = s(221596),
    ir = s(799544);
function ic() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, s9.lk)(il.rE.NITRO_HOME_MARKETING),
        { isEligible: s, programReward: i } = (0, B.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !s || null == i || null == i.reward_amount || i.reward_amount <= 0
                    ? null
                    : {
                          id: tU.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eT.intl.string(is.default.hx5AFp),
                          description: eT.intl.format(is.default.wq3CF2, { orbsCount: i.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(ir.lH, ir.yK),
                          footerContent: (0, c.jsx)(ia, {}),
                          ctaText: eT.intl.string(is.default.BxjHiu),
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
                          onCtaClick: () => (0, s4.mA)({ fromContent: s8.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: ir.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var io = s(975807),
    id = s(95035),
    iu = s(728666),
    im = s(88001),
    ix = s(107198),
    ig = s(817577);
function ip() {
    (0, io.A)(im.TE);
}
function ih(e) {
    let t = (0, iu.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, X.mM)(async () => {
                      let { default: e } = await s.e(499709).then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, _.A)({
                      subscriptionTier: th.pe.TIER_2,
                      initialPlanId: th.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: tU.PREMIUM_GROUP_CARD_ID,
                      title: eT.intl.string(ix.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eT.intl.formatToPlainString(ix.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, im.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: ir.LF,
                                  children: (0, c.jsx)(id.A, {
                                      onClick: ip,
                                      children: eT.intl.string(ix.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eT.intl.string(eT.t.oW0eUd),
                      primaryAsset: ig,
                      ctaIcon: q.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: eT.intl.string(eT.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iN = s(562819),
    iA = s(793943),
    ib = s(169099),
    ij = s(506988),
    iE = s(590202),
    iT = s(332560),
    iC = s(62234),
    iI = s(324061),
    iR = s(701256),
    iv = s(804564),
    i_ = s(818349),
    iy = s(419490),
    iP = s(898105),
    iS = s(572164),
    iD = s(271597),
    iM = s(815460),
    iO = s(683825);
function ik() {
    "auto" === (0, i_.r)((0, iS.T)(), iy.Ay.getEnableAutoclipping())
        ? (0, iD.p)()
        : (0, iM.C)({ variant: "mode_picker", source: "nitro_home_perk_card" });
}
var iL = s(757036),
    iU = s(621488),
    iG = s(70283),
    iw = s(643056),
    iB = s(470739);
let iH = (0, t1.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var iF = s(655752),
    iV = s(764231),
    iW = s(627380),
    iz = s(30084),
    iY = s(814014),
    iX = s(714206);
let iK =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iZ =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iq =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iJ() {
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
        b,
        j,
        E,
        { analyticsLocations: T } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        C = (0, s2.X)("useWhatsNewPerkCards"),
        I = (0, s3.A)({ analyticsLocations: T }),
        R = (0, o.useCallback)(() => {
            (0, ei.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: T }, () =>
                (0, s0.L)({ analyticsLocations: T }),
            );
        }, [T]),
        v = (0, o.useCallback)(() => {
            (0, ei.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: T }, () =>
                (0, iN.L)({ analyticsLocations: T }),
            );
        }, [T]),
        _ = (0, o.useCallback)(() => {
            (0, ei.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        y =
            ((e = (0, x.bG)([S.default], () => S.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (s = (function (e) {
                let { location: t } = e;
                return iH.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (i = (0, iw.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, s5.$F)()),
            (a = (0, s5.Xb)()),
            (l = n?.status === s5.Wo.UPCOMING || t),
            (r = n?.status === s5.Wo.WITHHELD),
            (d = l || r),
            (m = (0, s7.N)(n?.id)),
            (g = (function () {
                let e = (0, s5.$F)(),
                    t = (0, iF.P)(),
                    s = (0, s5.Xb)();
                if (null == e || null == t || null == s || e.status === s5.Wo.WITHHELD) return null;
                let i = ej()(),
                    n = ej()(s),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (i.diff(l) - 864e5) / r));
            })()),
            (p = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion) && !d),
            (h = (0, iW.t)()),
            (f = (0, iF.P)()),
            (0, o.useMemo)(() => {
                let e,
                    l = null != f ? eT.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, iV.T)(th.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === s5.Wo.UPCOMING
                              ? eT.intl.formatToPlainString(eT.t.a1eKDi, { days: h?.days ?? 0 })
                              : n.status === s5.Wo.WITHHELD
                                ? ((0, iV.T)(n.id, n.tenureReqNumMonths) ?? void 0)
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
                                  })(h, l) ??
                                  (0, iV.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != m ? (r = d || p ? m.standard : m.ambientLarge) : t && (r = iX),
                    {
                        id: tU.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eT.intl.string(n.nameUnformattedNitro) : t ? eT.intl.string(eT.t.tx9Fvw) : "",
                        pillText: eT.intl.string(eT.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iY.pq, { [iY.rX]: d, [iY.kE]: p }),
                        caption: null != a ? eT.intl.formatToPlainString(eT.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: g ?? void 0,
                        ctaText: eT.intl.string(eT.t.jVcuVY),
                        onCtaClick: () => {
                            s && i
                                ? (0, iB.openBadgeDirectoryModal)({ initialBadgeId: iG.$.PREMIUM_TENURE })
                                : (0, iz.D)({ analyticsLocations: T });
                        },
                    }
                );
            }, [n, m, d, p, a, g, t, h, f, T, s, i])),
        { nitroOrbsRewardsCard: P, questOrbMultiplierCard: D } = ic(),
        M =
            ((b = (0, iL.L)(th.PremiumTypes.TIER_2)),
            (j = (0, s6.rX)()),
            (0, o.useMemo)(
                () =>
                    b && j
                        ? {
                              id: tU.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eT.intl.string(iU.default["/cV3ka"]),
                              description: eT.intl.string(iU.default.H523FI),
                              primaryAsset: (0, c.jsx)(sF.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [b, j],
            )),
        O = ih(T),
        k = (function () {
            let { enabled: e } = (0, iP.r)("useAutoclipsPerkCard");
            return (0, o.useMemo)(
                () =>
                    e
                        ? {
                              id: tU.AUTOCLIPS_CARD_ID,
                              title: eT.intl.string(iO.default["5VA1HL"]),
                              description: eT.intl.string(iO.default.TvE3md),
                              primaryAsset: (0, c.jsx)(iv.f, { alt: "", ariaHidden: !0 }),
                              ctaText: eT.intl.string(eT.t.RzWDqY),
                              onCtaClick: ik,
                          }
                        : null,
                [e],
            );
        })(),
        L =
            ((E = (0, iI.A)("useHexagonCampaignWhatsNewPerkCard")),
            o.useMemo(
                () =>
                    E
                        ? {
                              id: tU.HEXAGON_CAMPAIGN_CARD_ID,
                              pillText: eT.intl.string(eT.t.y2b7CA),
                              title: eT.intl.string(iR.default["fShp/D"]),
                              description: eT.intl.string(iR.default.MDycja),
                              primaryAsset: (0, c.jsx)(ib.r, { alt: "", ariaHidden: !0, width: 256 }),
                              ctaText: eT.intl.string(eT.t.uw9zI7),
                              onCtaClick: () => {
                                  ((0, iT.iM)({
                                      content: ij.uF.NITRO_HOME_PERK_CARD,
                                      questContentCTA: iE.Cy.OPEN_AD_PERK_MODAL,
                                  }),
                                      (0, iC.v6)());
                              },
                          }
                        : null,
                [E],
            ));
    return (0, o.useMemo)(() => {
        let e = [
                P,
                D,
                O,
                {
                    id: tU.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eT.intl.string(eT.t.OLtTrt),
                    description: eT.intl.string(eT.t["di/pXR"]),
                    onCtaClick: C ? I : R,
                    ctaText: eT.intl.string(eT.t.jVcuVY),
                    primaryAsset: iK,
                },
                {
                    id: tU.CLIENT_THEMES_CARD_ID,
                    title: eT.intl.string(eT.t.acc6h6),
                    description: eT.intl.formatToPlainString(eT.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iq,
                    ctaText: eT.intl.string(eT.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iA.nf)(iA.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tU.PERMADECOS_CARD_ID,
                    title: eT.intl.string(eT.t.L14NZN),
                    description: eT.intl.string(eT.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                    ctaText: eT.intl.string(eT.t.jVcuVY),
                    onCtaClick: C ? I : v,
                },
                {
                    id: tU.CUSTOM_APP_ICONS_CARD_ID,
                    title: eT.intl.string(eT.t["GU+wqh"]),
                    description: eT.intl.string(eT.t["1uPk1Z"]),
                    primaryAsset: iZ,
                    ctaText: eT.intl.string(eT.t.y9TxXV),
                    onCtaClick: _,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, y),
            null != M && e.splice(2, 0, M),
            null != k && e.splice(2, 0, k),
            null != L && e.splice(Math.min(2, e.length), 0, L),
            e.length > s && e.splice(s, e.length - s),
            e
        );
    }, [y, P, D, M, k, O, L, R, _, v, I, C]);
}
var iQ = s(355097);
let i$ = "/assets/1eb1b74667b4c0f0.svg",
    i0 = "/assets/983b60e4fcaf973b.svg";
var i1 =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let i2 = [
    { id: "bestof", label: () => eT.intl.string(eT.t.q1u7nQ) },
    { id: "appearance", label: () => eT.intl.string(eT.t.CUnZkZ) },
    { id: "upgrades", label: () => eT.intl.string(eT.t.KC5q8v) },
    { id: "vip", label: () => eT.intl.string(eT.t.DjEAcv) },
];
var i3 = s(18290);
function i6(e) {
    return e.id;
}
function i5(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, s$.DP)(),
                t = (0, s2.X)("useFavoritesPerkCards"),
                s = (0, s5.Lh)(),
                i = (0, s7.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, s1.A)({ scrollPosition: iQ._F.TRY_IT_OUT, analyticsLocations: n }),
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
                x = (0, s3.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, ei.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, s0.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = iJ(),
                h = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: f, questOrbMultiplierCard: b } = ic(),
                j = ih(n),
                E = (0, o.useMemo)(
                    () => [
                        {
                            id: tU.SERVER_BOOSTS_CARD_ID,
                            title: eT.intl.formatToPlainString(eT.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eT.intl.formatToPlainString(eT.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sk, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != j ? { ...j, categories: ["bestof"] } : null,
                        {
                            id: tU.PROFILES_CARD_ID,
                            title: eT.intl.string(eT.t.xDRab3),
                            description: eT.intl.string(eT.t.yn6fWA),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sU, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tU.HD_VIDEO_CARD_ID,
                            title: eT.intl.string(eT.t["/mQ5gg"]),
                            description: eT.intl.string(eT.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tU.CLIENT_THEMES_CARD_ID,
                            title: eT.intl.string(eT.t.acc6h6),
                            description: eT.intl.formatToPlainString(eT.t.WQazjs, { themeCount: 20 }),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iq,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tU.MORE_EMOJIS_CARD_ID,
                            title: eT.intl.string(eT.t.D8vIDT),
                            description: eT.intl.string(eT.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tU.LARGE_UPLOADS_CARD_ID,
                            title: eT.intl.string(eT.t.nL1WZV),
                            description: (0, s6.M6)({
                                legacyCopy: eT.intl.formatToPlainString(eT.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eT.intl.formatToPlainString(eT.t.teOTfv, {
                                    maxFileSize: (0, el.EJ)(th.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(sF.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tU.CUSTOM_APP_ICONS_CARD_ID,
                            title: eT.intl.string(eT.t["GU+wqh"]),
                            description: eT.intl.string(eT.t["1uPk1Z"]),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iZ,
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
                            primaryAsset: iK,
                            categories: ["appearance"],
                        },
                        {
                            id: tU.CUSTOM_SOUNDS_CARD_ID,
                            title: eT.intl.string(eT.t["Cu/oFd"]),
                            description: eT.intl.string(eT.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sV, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tU.SPECIAL_STICKERS_CARD_ID,
                            title: eT.intl.string(eT.t.MQoVeb),
                            description: eT.intl.string(eT.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: ir.Uc,
                                children: (0, c.jsx)(sW.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tU.SUPER_REACTIONS_CARD_ID,
                            title: eT.intl.string(eT.t.qERvAA),
                            description: eT.intl.string(eT.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sz, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tU.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eT.intl.string(eT.t.ssVDYQ),
                            description: eT.intl.string(eT.t.aUSRMa),
                            primaryAsset: (0, sQ.M)(e) ? i$ : i0,
                            categories: ["upgrades"],
                        },
                        {
                            id: tU.EARLY_ACCESS_CARD_ID,
                            title: eT.intl.string(eT.t["g/KRY6"]),
                            description: eT.intl.string(eT.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sY, { alt: "", ariaHidden: !0 }),
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
                                    : (0, c.jsx)(sK, { color: eW.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tU.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eT.intl.string(eT.t["MTD+7w"]),
                            description: eT.intl.string(eT.t.Bhs0s6),
                            ctaText: eT.intl.string(eT.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sZ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != f ? { ...f, categories: ["vip"] } : null,
                        null != b ? { ...b, categories: ["vip"] } : null,
                        {
                            id: tU.PERMADECOS_CARD_ID,
                            title: eT.intl.string(eT.t.L14NZN),
                            description: eT.intl.string(eT.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, f, b, j, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => E.filter((e) => null != e && !h.includes(e.id)), [E, h]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? i1.BEST_OF_NITRO),
        l = i2.find((e) => e.id === n)?.label(),
        r = s.filter((e) => null != e && e.categories.includes(n));
    return (0, c.jsxs)("div", {
        className: i3.uW,
        children: [
            (0, c.jsx)(eL.D, { variant: "nitro-sm", children: eT.intl.string(eT.t["Uh3+CA"]) }),
            (0, c.jsx)(sS.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i3.Lq,
                "aria-label": eT.intl.string(eT.t["Uh3+CA"]),
                children: i2.map((e) =>
                    (0, c.jsx)(sS.V.Item, { id: e.id, className: i3.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sD.A,
                {
                    "aria-label": eT.intl.formatToPlainString(eT.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: i3.jG,
                    items: r,
                    getItemKey: i6,
                    renderItem: (e, s) =>
                        (0, c.jsx)(tY.S, { ...e, glowing: t === e.id, containerClassName: i3.Ui, listItemProps: s }),
                },
                n,
            ),
        ],
    });
}
var i7 = s(72979);
let i8 = function (e) {
    let { className: t } = e,
        s = (0, s$.DP)();
    return (0, c.jsx)("img", {
        className: u()(i7.D, t),
        src: (0, sQ.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i9 = s(684251);
let i4 = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(i9.kL, i9.Gd, i9.Eg),
        children: [(0, c.jsx)(i8, {}), (0, c.jsx)(ty, {}), t],
    });
};
function ne(e) {
    let { glowingPerkId: t = null } = e,
        s = iJ();
    return (0, c.jsx)(ss, {
        sectionClassName: st.uW,
        heading: (0, c.jsx)(eL.D, { variant: "nitro-sm", className: st.R_, children: eT.intl.string(eT.t.Aw5DRm) }),
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
                        containerClassName: u()(st.Nr, { [st.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function nt(e, t, s, i) {
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
var ns = s(92737);
let ni = "/assets/cd2be35d285d4675.svg",
    nn = (e) => {
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
            { isReady: l, programReward: r } = (0, B.F)(),
            {
                scrollTargetId: d,
                glowingSectionId: p,
                glowingPerkId: h,
                scrollBlock: f,
                scrollInline: b,
            } = o.useMemo(() => {
                let e = new URLSearchParams(s.search),
                    t = e.get("perk"),
                    i = e.get(ns.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [s.search]);
        nt(d ?? "", null != d, f, b);
        let [j, E] = o.useState(!1),
            T = (0, V.p)(),
            C = o.useRef(null),
            [I, _] = o.useState(!1),
            y = null != T && null != a && a.status === eX.Dmq.CANCELED,
            P = (0, W.iU)(th.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !I && y,
            D = (0, x.bG)([H.A], () => (null != t ? H.A.getUserProfile(t) : null)),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [L, Y] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(i9.xW, i9.Gd),
                  ref: i,
                  children: [
                      (0, c.jsx)(i4, {
                          children: (0, c.jsxs)(A.f5, {
                              value: k,
                              children: [
                                  (0, c.jsx)(U.L, {
                                      innerRef: C,
                                      onChange: (e) => _(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tE, {
                                          buttonVisibilityRef: C,
                                          className: i9.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, c.jsx)(ne, { glowingPerkId: h }),
                                  (0, c.jsx)(sv, { glowingPerkId: h, glowingSectionId: p }),
                                  (0, c.jsx)(i5, { glowingPerkId: h }),
                                  (0, c.jsx)(z.A, {
                                      className: i9.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eX.liQ.NITRO_HOME, section: eX.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: i9.hz }),
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
                                      children: (0, c.jsx)("div", { ref: n, className: i9._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: ni,
                                      className: i9.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eT.intl.string(eT.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      y &&
                          null != P &&
                          (0, c.jsx)(sP, {
                              isVisible: S && j,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(i9.kL, i9.Lq, i9.TN, i9.Eg),
                  children: [(0, c.jsx)(ty, {}), (0, c.jsx)("div", { className: i9.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var na = s(589152),
    nl = s(851746),
    nr = s(727949),
    nc = s(543213);
let no =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var nd = s(185062);
let nu = `${no} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${nd.A} 3x`;
function nm(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sM.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: no,
        srcSet: nu,
        className: (0, sM.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var nx = s(315629),
    ng = s(783420),
    np = s(204413),
    nh = s(572079),
    nf = s(824069),
    nN = s(785007),
    nA = s(947910);
function nb(e) {
    let { value: t, planRadioOptions: s, className: i, ...n } = e,
        a = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nA.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nA.fQ,
                                children: (0, c.jsx)(eG.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, c.jsxs)(K.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nA.qU,
                            children: [
                                (0, c.jsxs)(K.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nA.NI,
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
                                    className: nA.br,
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
                                                className: nA.yD,
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
                radioBarClassName: u()(nA.tG, { [nA.uA]: s, [nA.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nN.$d, {
        ...n,
        options: a,
        value: t,
        size: nN.r9.NOT_SET,
        className: u()(nA.ul, i),
        withTransparentBackground: !0,
    });
}
var nj = s(118751),
    nE = s(773669),
    nT = s(97352),
    nC = s(526292),
    nI = s(387278),
    nR = s(369827),
    nv = s(803496);
function n_(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nR.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nv.A)({
            activeSubscription: t,
            skuIDs: [(0, el.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function ny(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nP(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === th.Ff.YEAR
          ? eT.intl.format(eT.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : eT.intl.format(eT.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nS = s(614488);
function nD(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(ng.A, {
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
function nM(e) {
    let { skuId: t, className: s, variant: i = "default" } = e,
        n = t === th.pe.TIER_2,
        a = "settings" === i,
        l = (0, sQ.q)((0, s$.Ay)()),
        r = (0, ed.V)(),
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
                n = th.En[t],
                a = th.zE[t],
                l = t === th.pe.TIER_2,
                r = n_(t),
                c = (0, ed.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, el.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === th.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [th.gD.PREMIUM_YEAR_TIER_0, th.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                p = (0, eo.O)(),
                h = (0, nC.k5)(),
                f = (0, x.bG)([nE.default], () => nE.default.locale),
                N = (0, W.U9)(p, t),
                A = (0, W.N1)(n),
                b = (0, W.N1)(a),
                [j, E] = (0, x.yK)([nT.A], () => [nT.A.get(n), nT.A.get(a)], [n, a]),
                T = null != j ? (0, el.sS)(j, r) : null,
                C = null != E ? (0, el.sS)(E, r) : null,
                I =
                    N && p?.discount.amount != null && !h
                        ? eT.intl.formatToPlainString(eT.t.IAybsG, {
                              discount: (0, nj.l9)(f, Number(p.discount.amount) / 100),
                          })
                        : null,
                R = p?.discount?.planIds,
                v = ny(a, N, R, b, C),
                _ = ny(n, N, R, A, T),
                y = p?.discount.userUsageLimitInterval,
                P = p?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, nI.Cj)(E, !1, r),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== th.pe.TIER_2 ? null : s && !i ? th.En[t] : th.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == s || (s === n && m) ? O : s,
                L = [
                    {
                        value: a,
                        primaryText: eT.intl.string(eT.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nP({
                                      expectedUsageInterval: th.Ff.YEAR,
                                      usageInterval: y,
                                      discountDuration: P,
                                      regularPrice: C,
                                      discountedPrice: b,
                                  })
                                : null) ?? S,
                        secondaryText: v ? b : C,
                        secondarySubText: v ? C : null,
                        badgeText: v ? I : null,
                        useGradientSelectedBorder: l && (d || v || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: eT.intl.string(eT.t.DKzs96),
                        primarySubText: _
                            ? nP({
                                  expectedUsageInterval: th.Ff.MONTH,
                                  usageInterval: y,
                                  discountDuration: P,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : T,
                        secondarySubText: _ ? T : null,
                        badgeText: _ ? I : null,
                        useGradientSelectedBorder: l && (d || _),
                        isDisabled: g || m,
                    },
                ],
                U = k === a ? v : k === n && _;
            return { planRadioOptions: L, selectedPlanId: k, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: b } = (0, nh.A)({ subscriptionTier: t }),
        { subscribeButtonProps: j } = (0, np.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? b : void 0,
        }),
        E = (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(K.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nS.MY,
                    children: (0, c.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nS.ck,
                        children: n ? eT.intl.string(eT.t.lG6a5x) : eT.intl.string(eT.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(K.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nS.qT,
                    children: n
                        ? (0, c.jsx)(nc.ZP, {
                              featureSet: nc.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, c.jsx)(nc.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, c.jsx)(nf.K, {}),
            ],
        }),
        T = (0, c.jsxs)(K.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nS.Ux,
            children: [
                a ? (0, c.jsx)("div", { className: nS.zI, children: E }) : E,
                g
                    ? (0, c.jsx)("div", {
                          className: nS.qS,
                          role: "separator",
                          children: (0, c.jsx)(Z.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nS.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case th.WT.DAY:
                                          if (t % 7 == 0) return eT.intl.format(eT.t["1MYPH0"], { weeks: t / 7 });
                                          return eT.intl.format(eT.t.pYfIoO, { days: t });
                                      case th.WT.MONTH:
                                          return eT.intl.format(eT.t["96hTLe"], { months: t });
                                      case th.WT.YEAR:
                                          return eT.intl.format(eT.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(d.interval, d.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nS.yF }),
                (0, c.jsxs)("div", {
                    className: nS.qr,
                    children: [
                        (0, c.jsx)(nb, {
                            className: a ? nS.US : void 0,
                            planRadioOptions: p,
                            value: h ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, c.jsx)(nD, { skuId: t, selectedPlanId: h, subscribeButtonProps: j }),
                    ],
                }),
            ],
        }),
        C = u()(nS.Nr, s, { [nS.Fw]: n });
    return n
        ? (0, c.jsxs)(nx.h, {
              color: "nitro-pink",
              className: C,
              children: [
                  !a &&
                      (0, c.jsx)("div", {
                          className: nS.kX,
                          "aria-hidden": !0,
                          children: (0, c.jsx)(nm, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, c.jsx)("div", { className: C, children: T });
}
function nO(e) {
    let { className: t } = e,
        s = (0, sQ.q)((0, s$.Ay)()),
        i = n_(th.pe.TIER_2),
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eS.A)({ userId: n?.id, size: ev._3.SIZE_32, animateOnHover: !0 }),
        r = (0, x.bG)([nT.A], () => nT.A.get(th.gD.PREMIUM_GROUP_MONTH)),
        o = eT.intl.string(eT.t["2pG5Ga"]),
        d = (0, c.jsx)(ng.A, {
            subscriptionTier: th.pe.TIER_2,
            initialPlanId: th.gD.PREMIUM_GROUP_MONTH,
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
        className: u()(nS.Nr, t),
        children: (0, c.jsxs)(K.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nS.Ux,
            children: [
                (0, c.jsxs)(K.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nS.MY,
                    children: [
                        (0, c.jsx)(eL.D, {
                            variant: "nitro-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: nS.ck,
                            children: eT.intl.string(ix.default.eSKiXk),
                        }),
                        null != n &&
                            (0, c.jsxs)(K.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nS.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nS.uA,
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
                                        className: nS.VL,
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
                    className: nS.qT,
                    children: (0, c.jsx)(nc.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nS.yF }),
                (0, c.jsxs)("div", {
                    className: nS.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nS.ec,
                            children: [
                                (0, c.jsx)(Z.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: eT.intl.string(ix.default.SvSwga),
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
function nk(e) {
    let { innerRef: t, className: s, variant: i = "default" } = e,
        n = "settings" === i,
        { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, nc.pw)(t),
        r = (0, iu.PA)(),
        o = !n && r,
        d = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion),
        m = { [nS.iR]: !d && !n };
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsxs)(K.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nS.oB, s, { [nS.W0]: n }),
            children: [
                (0, c.jsx)(eL.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nS.op,
                    children: eT.intl.string(eT.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: l,
                    className: u()(nS.kR, { [nS.BQ]: o }),
                    children: [
                        (0, c.jsx)(nM, { skuId: th.pe.TIER_0, className: u()(nS.rz, m), variant: i }),
                        (0, c.jsx)(nM, { skuId: th.pe.TIER_2, className: u()(nS.Rv, m), variant: i }),
                        o && (0, c.jsx)(nO, { className: u()(nS.zz, m) }),
                    ],
                }),
            ],
        }),
    });
}
var nL = s(366010),
    nU = s(303136);
let nG = function (e) {
    let t,
        { className: s } = e,
        i = (0, e3.TM)(),
        n = (0, nL.q)((0, s$.Ay)());
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
                nU.A,
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
var nw =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nB = s(352756);
let nH = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eX.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e6.animated.div, {
        className: u()(nB.iE, { [nB.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nB.UD,
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
var nF = s(573710);
let nV = function () {
    let e = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nF.BI,
                children: (0, c.jsx)(e4, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e8.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nF.Q,
                    }),
                }),
            }),
            (0, c.jsx)(tt, {
                isMotionReduced: e,
                boltContainerClassName: nF.nJ,
                carContainerClassName: nF.IN,
                hammerContainerClassName: nF.Gj,
                keyContainerClassName: nF.FV,
                starContainerClassName: nF.E1,
                boltAssetClassName: nF.j7,
                carAssetClassName: nF.or,
                hammerAssetClassName: nF.Wv,
                keyAssetClassName: nF.rs,
                starAssetClassName: nF.OY,
            }),
        ],
    });
};
var nW = s(989756);
function nz(e) {
    let { ref: t, ...s } = e,
        { analyticsLocations: i } = (0, A.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(A.f5, {
        value: i,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nW.kL,
            children: (0, c.jsxs)("div", {
                className: nW.hQ,
                children: [
                    (0, c.jsx)(nV, {}),
                    (0, c.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nW.RH,
                        children: eT.intl.string(eT.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
nz.displayName = "PremiumMarketingFooter";
var nY = s(939249);
let nX = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nw.HOME]: eT.intl.string(eT.t.uGRXjS),
            [nw.WHATS_NEW]: eT.intl.string(eT.t["mfcR/v"]),
            [nw.BEST_OF_NITRO]: eT.intl.string(eT.t.xQKkE8),
            [nw.PLANS]: eT.intl.string(eT.t.wyNMnm),
            [nw.COMPARE]: eT.intl.string(eT.t.pwD7If),
        },
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tC.A, {
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
                                    nY.D,
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
var nK = s(713271),
    nZ = s(704333),
    nq = s(414499),
    nJ = s(597770),
    nQ = s(500060),
    n$ = s(866665),
    n0 = s(406860),
    n1 = s(870975),
    n2 = s(698834);
function n3() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, n0.A)({ boxType: tw.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nZ.ServerGridIcon, text: eT.intl.string(tF.default.MUypiB) },
            { icon: nq.CloudIcon, text: eT.intl.string(tF.default.ec5Rdd) },
            { icon: nJ.GiftIcon, text: eT.intl.string(tF.default["9t2CzW"]), tooltip: tF.default.AyECej },
            { icon: nQ.ScreenStreamIcon, text: eT.intl.string(tF.default.R7YJAY) },
        ];
    return (0, c.jsx)(U.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: n2.iE,
            children: (0, c.jsxs)("div", {
                className: n2.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: n2.j,
                        children: [
                            (0, c.jsx)("div", { className: n2._g }),
                            (0, c.jsx)("div", { className: n2.$h }),
                            (0, c.jsx)("div", { className: n2.Rv }),
                            (0, c.jsx)("div", { className: n2.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: n2.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: n2.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(eL.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: n2.R_,
                                                children: eT.intl.string(tF.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: n2.yf,
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
                                                                            className: n2.Jn,
                                                                            children: (0, c.jsx)(n$.m, {
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
                                                        className: n2.xF,
                                                        children: (0, c.jsx)(eA.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: th.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n2.WE,
                                        children: (0, c.jsx)(Z.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: eT.intl.format(tF.default.KDKdWi, { termsLink: (0, n1.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: n2.r1,
                                children: (0, c.jsx)("img", {
                                    className: n2.wm,
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
var n6 = s(886205),
    n5 = s(65154),
    n7 = s(382702),
    n8 = s(148289);
function n9() {}
function n4() {
    return (0, c.jsxs)("div", {
        className: n7.Nr,
        children: [
            (0, c.jsxs)("div", {
                className: n7.pq,
                children: [
                    (0, c.jsxs)("div", {
                        className: n7.Z,
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
                                children: eT.intl.string(iO.default.MtIbFp),
                            }),
                            (0, c.jsx)(Z.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: eT.intl.string(iO.default.hXM4Ae),
                            }),
                        ],
                    }),
                    (0, c.jsx)(J.$, {
                        variant: "secondary",
                        size: "md",
                        icon: n5.CirclePlayIcon,
                        text: eT.intl.string(iO.default.wNHvBT),
                        onClick: n9,
                    }),
                ],
            }),
            (0, c.jsx)("div", {
                className: n7.LY,
                children: (0, c.jsx)("img", { className: n7.ot, src: n8.A, alt: "", "aria-hidden": !0 }),
            }),
        ],
    });
}
var ae = s(750338),
    at = s(382031),
    as = s(505051);
function ai(e) {
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
        className: u()(as.boxBackdrop, t),
        children: [
            (0, c.jsx)(eL.D, {
                className: as.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: as.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: as.bentoBoxesGrid,
                children: s.flatMap((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = at.A0.SMALL;
                            break;
                        case 2:
                            s = at.A0.MEDIUM;
                            break;
                        default:
                            s = at.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, c.jsx)(
                            ae.A,
                            { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let an = o.memo(function (e) {
        let t = (0, tP.b)("premium_marketing_bento"),
            s = (0, sh.mh)({ location: "premium_marketing_bento" }),
            { enabled: i } = (0, t9.vc)({ location: "premium_marketing_bento" }),
            { enabled: n } = n6.A.useConfig({ location: "premium_marketing_bento" }),
            a = t && !s && !(i && n),
            { whatsNewBoxes: l } = (0, at.Ay)(a),
            r = (function () {
                let e = (0, x.bG)([S.default], () => (0, el.YE)(S.default.getCurrentUser(), th.PremiumTypes.TIER_2)),
                    { enabled: t } = (0, iP.r)("premium_marketing_whats_new");
                return !e && t;
            })();
        return (0, c.jsx)(ai, {
            boxLayout: l,
            title: eT.intl.string(eT.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento:
                r || a
                    ? (0, c.jsxs)(c.Fragment, { children: [r && (0, c.jsx)(n4, {}), a && (0, c.jsx)(n3, {})] })
                    : null,
            ...e,
        });
    }),
    aa = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, at.Ay)();
        return (0, c.jsx)(ai, { boxLayout: t, title: eT.intl.string(eT.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    al = (0, t1.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var ar = s(236834),
    ac = s(540504);
function ao(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eS.A)({ userId: t?.id, size: ev._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: ac.$6,
        children: (0, c.jsxs)("div", {
            className: ac.sc,
            children: [
                (0, c.jsx)("div", {
                    className: ac.kR,
                    children: (0, c.jsx)(e_.eu, { src: s, "aria-label": t.username, size: ev._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(eL.D, {
                    variant: "heading-xs/medium",
                    className: ac.FS,
                    color: "text-strong",
                    children: eT.intl.format(eT.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var ad = s(579245),
    au = s(369805);
let am = function () {
    let e = (0, au.A)();
    return null == e ? null : (0, c.jsx)(ep, { text: e });
};
function ax() {
    let e = (0, x.bG)([nT.A], () => nT.A.getForSkuAndInterval((0, el.mH)(th.pe.TIER_0), th.WT.MONTH));
    return null != e ? (0, el.sS)(e) : "\u2026";
}
var ag = s(508556);
let ap = function (e) {
    let { containerVisibilityPercentage: t, variant: s = "default" } = e,
        i = "settings" === s,
        n = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion),
        a = (0, e3.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: u()(ag.YU, { [ag.W0]: i }),
        children: [
            (0, c.jsx)(ta, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: ag.wG,
                assetClassName: ag.lu,
                variant: s,
            }),
            (0, c.jsx)(tt, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: ag.nJ,
                carContainerClassName: ag.IN,
                hammerContainerClassName: ag.Gj,
                keyContainerClassName: ag.FV,
                starContainerClassName: ag.E1,
                boltAssetClassName: ag.j7,
                carAssetClassName: ag.or,
                hammerAssetClassName: ag.Wv,
                keyAssetClassName: ag.rs,
                starAssetClassName: ag.OY,
                animateStar: !i,
            }),
        ],
    });
};
var ah = s(14057);
let af = o.memo(function (e) {
    let { className: t, subscriptionTier: s, isEligibleForBogoPromotion: i, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        o = ax(),
        d = al.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        m = (0, ar.A)(),
        g = null != m,
        { visibilityPercentageRef: p, visibilityPercentage: h } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion)),
        f = (0, na.b)(),
        b = !g && f.length > 0,
        j = (0, eu.u)(Y.oW.MARKETING_PAGE_BANNER),
        E = null != j,
        T = (0, nC.ar)() && !E,
        C = (0, eo.O)(),
        I = (null != C && th.U4.includes(C.discountId)) || E;
    return (0, c.jsx)(A.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: n,
            className: u()(ah.kL, t, { [ah.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, c.jsx)(nG, { className: ah.kv }),
                (0, c.jsx)("div", {
                    ref: p,
                    children: (0, c.jsxs)("div", {
                        className: ah.hQ,
                        children: [
                            (0, c.jsx)(ap, { containerVisibilityPercentage: h, variant: a }),
                            T && (0, c.jsx)(am, {}),
                            (0, c.jsx)("div", {
                                className: ah.s8,
                                children: (0, c.jsx)(ek.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(eL.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : ah.wx,
                                        children: eT.intl.string(eT.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: ah.rf,
                                children: [
                                    g &&
                                        (0, c.jsx)("div", {
                                            className: ah.eZ,
                                            children: (0, c.jsx)(ao, { referrer: m }),
                                        }),
                                    b &&
                                        (0, c.jsx)("div", {
                                            className: ah.Qn,
                                            children: (0, c.jsx)(ad.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: T ? ah.es : ah.UJ,
                                        children: [
                                            (0, c.jsx)(eA.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!i,
                                                subscriptionTier: I && null == s ? th.pe.NONE : s,
                                                buttonTextOverride: I ? eT.intl.string(eT.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, c.jsx)(eN.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: ah.iQ,
                                        children: (0, c.jsx)(Z.E, {
                                            color: "text-muted",
                                            variant: "body-xs/medium",
                                            children: d
                                                ? eT.intl.string(eT.t.jHqrJW)
                                                : eT.intl.format(eT.t.kt9wxs, { cheapestMonthlyPrice: o }),
                                        }),
                                    }),
                                    E &&
                                        (0, c.jsx)(eh.x, {
                                            componentId: j.id,
                                            componentType: j.componentType,
                                            promotionId: j.promotionId,
                                            promotionBannerMarketingComponentFields: j.surface,
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
var aN = s(812537);
let aA = function (e) {
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
var ab = s(818348),
    aj = s(773188);
let aE = () => {
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
        [p, h] = o.useState(!1),
        [f, b] = o.useState(!1),
        [j, E] = o.useState(!1),
        T = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        C = null != T ? (0, el.EL)(T) : null,
        I = null != C ? el.Ay.getSkuIdForPlan(C.planId) : null,
        _ = null !== I && I !== th.pe.TIER_2 ? th.pe.TIER_2 : null,
        { analyticsLocations: y } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, s9.lk)(il.rE.NITRO_HOME_MARKETING),
        S = P ? nK.N.COMBINED_ORBS : nK.N.ORB_REWARDS,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(ns.x);
            return "orbs" === t
                ? S
                : t === nK.N.THREE_P_PROMOTIONS
                  ? nK.N.THREE_P_PROMOTIONS
                  : t === nK.N.YOUTUBE
                    ? nK.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    nt(D ?? "", null != D);
    let { navBarSections: k, activeSectionId: L } = aA([nw.HOME, nw.WHATS_NEW, nw.BEST_OF_NITRO, nw.PLANS, nw.COMPARE]),
        { home: w, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = k,
        W = (0, c.jsxs)("div", {
            ref: s,
            className: u()(aj.kL, aj.Gd, aj.iI, { [aj.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nG, { className: aj.yH }),
                (0, c.jsx)(nX, { navBarSections: k, activeSectionId: L }),
                (0, c.jsxs)("div", {
                    className: aj.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: aj.qY,
                            ref: w.ref,
                            children: (0, c.jsx)(U.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(af, { ref: n, subscriptionTier: _ }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: aj.So,
                            ref: B.ref,
                            children: (0, c.jsx)(an, { shouldLoadVideo: j, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: aj.KQ,
                            ref: H.ref,
                            children: (0, c.jsx)(aa, { shouldLoadVideo: j, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: aj.qc,
                            ref: F.ref,
                            children: (0, c.jsx)(U.L, {
                                innerRef: i,
                                onChange: (e) => h(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(nk, { innerRef: i }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: aj.aC, ref: V.ref, children: (0, c.jsx)(aN.A, {}) }),
                    ],
                }),
                (0, c.jsx)(U.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (O.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            b(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: aj._Z }),
                }),
                (0, c.jsx)(nz, { ref: l }),
                (0, c.jsx)(nH, { isVisible: !d && !p && j, subscriptionTier: _ }),
                (0, c.jsx)(nG, { className: aj.MF }),
            ],
        });
    return (0, c.jsx)(tM.N, {
        theme: ab.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(aj.XG, e), ref: t, children: W }),
    });
};
var aT = s(862482),
    aC = s(300349),
    aI = s(106512),
    aR = s(412260),
    av = s(662367),
    a_ = s(374403),
    ay = s(396375),
    aP = s(900797),
    aS = s(847374),
    aD = s(614268);
function aM(e) {
    let { className: t } = e;
    return (0, c.jsx)("div", {
        className: u()(aD.i, t),
        children: (0, c.jsx)(eG.E, { type: "early_access", variant: "premium" }),
    });
}
var aO = s(536071),
    ak = s(729934);
let aL = "/assets/5b4fec8511c3676a.svg",
    aU = "/assets/0838bda6ecd20d91.svg";
function aG(e, t, s) {
    return (0, sQ.M)(e) ? t : s;
}
var aw = s(872461);
function aB(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nY.D, {
        onClick: s,
        className: aw.customButton,
        children: [
            t ? eT.intl.string(eT.t.maZaN3) : eT.intl.string(eT.t["37C26f"]),
            t
                ? (0, c.jsx)(aP.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: aw.arrow })
                : (0, c.jsx)(aS.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: aw.arrow }),
        ],
    });
}
function aH(e) {
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
        x = (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aw.perksCardArt) }),
        g = "settings" === d;
    return (0, c.jsx)(A.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: u()(aw.perkCard, i, { [aw.settingsCard]: g }),
            children: [
                r ? (0, c.jsx)(aO.A, { className: aw.perkCardNewBadge }) : null,
                o ? (0, c.jsx)(aM, { className: aw.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, c.jsx)(K.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: aw.settingsArt,
                          children: x,
                      })
                    : x,
                (0, c.jsxs)("div", {
                    className: g ? aw.settingsText : void 0,
                    children: [
                        (0, c.jsxs)(eL.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: aw.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(Z.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: aw.perkCardDescription,
                            children: "function" == typeof s ? s(m) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aF = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, s$.Ay)(),
                n = (0, s2.X)("usePerkCards"),
                a = (0, e2.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return el.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, el.EJ)(th.PremiumTypes.TIER_2, { useSpace: !1 });
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
                    imageSource: aG(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                (ak.A.setState({ scrollPosition: iQ._F.TRY_IT_OUT }),
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
                    imageSource: aG(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eT.intl.string(eT.t.Bv8Pfk),
                    description: eT.intl.string(eT.t.JMfaTU),
                    imageSource: aG(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eT.intl.string(eT.t.Bv8Pfk),
                    description: eT.intl.string(eT.t.JMfaTU),
                    imageSource: aG(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eT.intl.string(eT.t["lGcW+c"]),
                    description: eT.intl.string(eT.t["/fDyO+"]),
                    imageSource: aG(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eT.intl.string(eT.t["1c+xwT"]),
                    description: eT.intl.string(eT.t.hJG8ZN),
                    imageSource: aG(i, aU, aL),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eT.intl.string(eT.t.tzdIwI),
                    description: eT.intl.string(eT.t.hJG8ZN),
                    imageSource: aG(i, aU, aL),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eT.intl.string(eT.t.tzdIwI),
                    description: eT.intl.string(eT.t.hJG8ZN),
                    imageSource: aG(i, aU, aL),
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
                    imageSource: aG(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: aG(i, i$, i0),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aw }),
        r = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(aw.perksContainer, t, {
            [aw.partiallyHidden]: i && !n,
            [aw.subscriberNitroHome]: i,
            [aw.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(eL.D, {
                variant: "heading-xxl/semibold",
                className: aw.perksTitle,
                children: i ? eT.intl.string(eT.t.QX14gI) : eT.intl.string(eT.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aw.perkCardContainer, { [aw.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, c.jsx)(aH, { ...t }, e);
                }),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aw.sizeGizmo]: !n, [aw.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aB, {
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
                        (0, c.jsx)("div", { className: u()(aw.cover, { [aw.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aV = s(615939);
let aW = o.memo(function (e) {
    let { className: t } = e,
        s = [
            {
                id: tU.MORE_EMOJIS_CARD_ID,
                title: eT.intl.string(eT.t["R2IV/Q"]),
                description: eT.intl.string(eT.t.DRMecB),
                imageSource: sB.A,
            },
            {
                id: tU.HD_VIDEO_CARD_ID,
                title: eT.intl.string(eT.t["/mQ5gg"]),
                description: eT.intl.string(eT.t["7WwAXh"]),
                imageSource: sG.A,
            },
            {
                id: tU.LARGE_UPLOADS_CARD_ID,
                title: eT.intl.string(eT.t.nL1WZV),
                description: (0, s6.M6)({
                    legacyCopy: eT.intl.formatToPlainString(eT.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eT.intl.formatToPlainString(eT.t.teOTfv, {
                        maxFileSize: (0, el.EJ)(th.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: aV.A,
            },
            {
                id: tU.PROFILES_CARD_ID,
                title: eT.intl.string(eT.t.KcyDwF),
                description: eT.intl.string(eT.t.Mt3U1W),
                imageSource: sL,
            },
        ];
    return (0, c.jsxs)(K.B, {
        gap: 16,
        className: u()(aw.settingsPerks, t),
        children: [
            (0, c.jsx)(eL.D, { variant: "heading-xl/semibold", children: eT.intl.string(eT.t.q1u7nQ) }),
            (0, c.jsx)(ek.F, {
                children: (0, c.jsx)("div", {
                    className: aw.settingsGrid,
                    children: s.map((e) => (0, c.jsx)(aH, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var az = s(695366),
    aY = s(370049);
let aX = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nC.ar)();
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
    let d = (null != r ? el.Ay.getSkuIdForPlan(r.planId) : null) === th.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tO.Z, {
            className: u()(aY.kL, n, { [aY.He]: l }),
            type: tO.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(az.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aY.Kk, { [aY.Pt]: l }),
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
var aK = s(978836);
let aZ = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aK.zr, { [aK.N]: t }),
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
                        (0, c.jsx)("stop", { className: aK.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aK.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aK.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aK.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aK.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aq = s(194509),
    aJ = s(317587);
let aQ = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eX.JJy.MARKETING_FLOATING_CTA },
        r = (0, s$.Ay)(),
        o = (0, nL.M)(r);
    return (0, c.jsx)(e6.animated.div, {
        className: u()(aJ.iE, { [aJ.H8]: i, [aJ.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aJ.zW : aJ.iJ,
            children: [
                (0, c.jsx)(ay.A, {
                    color: o ? aT.XD.BRAND_INVERTED : void 0,
                    className: u()(aJ.x6, { [aJ.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aJ.PJ,
                }),
                (0, c.jsx)(aq.A, { className: aJ.x6, premiumModalAnalyticsLocation: l }),
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
                  color: l ? aT.XD.BRAND_INVERTED : void 0,
                  className: u()(a$.x6, a$.Ph, n, { [a$.Sq]: t && a, [a$.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : a$.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(ay.A, {
                  color: l || !a ? aT.XD.BRAND_INVERTED : void 0,
                  className: u()(a$.x6, a$.Ph, n, { [a$.Sq]: t && a, [a$.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aq.A, { className: u()(a$.x6, n), color: a ? void 0 : aT.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(a$.UD, i), children: [o, " ", d] });
}
function a1() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aO.p, { className: a$.zd }),
            (0, c.jsx)(aO.p, { className: a$.G }),
            (0, c.jsx)(aO.p, { className: a$.zy }),
            (0, c.jsx)(aO.p, { className: a$.GX }),
        ],
    });
}
function a2(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = ax();
    return (0, c.jsx)(Z.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(a$.h_, { [a$.If]: s, [a$.jn]: i }),
        children: eT.intl.format(eT.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let a3 = function (e) {
    let { className: t, buttonClassName: s, subscriptionTier: i, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, er.QQ)(),
        o = (0, nC.ar)(),
        d = (0, na.b)().length > 0,
        m = eT.intl.string(eT.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(a$.kL, t, { [a$.V1]: !o, [a$.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? a$.I6 : a$.G1,
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
                                  className: a$.DF,
                                  children: (0, c.jsx)(ad.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(a2, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: a$.UD,
                                  children: (0, c.jsx)(aq.A, { className: u()(a$.x6, s), color: aT.XD.WHITE }),
                              })
                            : (0, c.jsx)(a0, {
                                  subscriptionTier: i,
                                  inOfferExperience: o,
                                  buttonClassName: s,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(a2, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(a1, {}),
            ],
        }),
    });
};
var a6 = s(403227),
    a5 = s(367740),
    a7 = s(377770);
function a8(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aZ, { lifted: t }) : null;
}
let a9 = () => {
        let { enabled: e } = aC.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, v.P)(R);
        let t = o.useRef(null),
            s = o.useRef(null),
            i = o.useRef(null),
            n = (0, s$.Ay)(),
            a = (0, sQ.M)(n),
            [l, r] = o.useState(!1),
            [d, m] = o.useState(!1),
            [g, p] = o.useState(!1),
            h = !l && !d,
            [f, b] = o.useState(!1),
            j = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            E = null != j ? (0, el.EL)(j) : null,
            T = null != E ? el.Ay.getSkuIdForPlan(E.planId) : null,
            C = null !== T && T !== th.pe.TIER_2 ? th.pe.TIER_2 : null,
            I = (0, ed.V)(),
            _ = I?.subscriptionTrial?.skuId,
            y = (0, nC.ar)(),
            P = !e && y,
            S = (0, x.bG)([aR.A], () => {
                let e = aR.A.getMarketingComponentBySurface(Y.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e ? null : e.surface;
            }),
            D = (0, a_.Q)(),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            b(!0);
        }, []);
        let L = e
            ? (0, c.jsx)("div", {
                  className: a7.OE,
                  children: (0, c.jsx)(U.L, {
                      innerRef: t,
                      onChange: m,
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(nk, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, c.jsx)("div", {
                  className: a7.dY,
                  children: (0, c.jsx)(U.L, {
                      innerRef: t,
                      onChange: (e) => m(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(nc.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, c.jsx)(ay.A, {
                              showIcon: !1,
                              subscriptionTier: th.pe.TIER_0,
                              className: a5.Ph,
                              look: aT.pR.OUTLINED,
                              color: aT.XD.WHITE,
                              buttonShineClassName: a5.Qr,
                          }),
                          tier2CTAButton:
                              _ === th.pe.TIER_0
                                  ? (0, c.jsx)(ay.A, {
                                        showIcon: !1,
                                        subscriptionTier: th.pe.TIER_2,
                                        className: a5.Ph,
                                        look: aT.pR.OUTLINED,
                                        color: aT.XD.WHITE,
                                        buttonShineClassName: a5.Qr,
                                    })
                                  : (0, c.jsx)(ay.A, {
                                        color: aT.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: th.pe.TIER_2,
                                        className: a5.Ph,
                                        textOptions: { textClassName: a5.Ac },
                                        buttonShineClassName: a5.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, c.jsxs)("div", {
            className: u()(a7.kL, { [a7.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aX, {
                    premiumSubscription: j,
                    textColor: e ? "text-default" : void 0,
                    className: u()(a7.R3, { [a7.aZ]: y }),
                }),
                P &&
                    (0, c.jsxs)("div", {
                        className: a7.n1,
                        children: [
                            (0, c.jsx)(a8, { inOfferExperience: y }),
                            (0, c.jsx)(tR.l, {
                                className: a7.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [a7.V1]: !P }),
                    children: [
                        null != S && (0, c.jsx)(aI.m, { className: a7.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: a7.iS,
                            children: [
                                !P &&
                                    (0, c.jsx)(tR.l, {
                                        className: a7.ij,
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
                                        ? (0, c.jsx)(af, { ref: s, subscriptionTier: C, variant: "settings" })
                                        : (0, c.jsx)(a3, {
                                              ref: s,
                                              subscriptionTier: C,
                                              className: u()({ [a7.p7]: y, [a7.Pw]: y, [a7.Cv]: null != j }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: a7.Ol, children: (0, c.jsx)(av.I, { component: D }) }),
                L,
                e ? (0, c.jsx)(aW, { className: a7.OE }) : (0, c.jsx)(aF, { className: a7.B_ }),
                (0, c.jsx)("div", {
                    className: a7.aC,
                    children: e
                        ? (0, c.jsx)(aN.A, { variant: "settings" })
                        : (0, c.jsx)(a6.A, { className: a7.JQ, hideCTAs: !0 }),
                }),
                (0, c.jsx)("div", { className: a7.hz }),
                e
                    ? (0, c.jsx)(nH, { isVisible: h && f, subscriptionTier: C, variant: "settings" })
                    : (0, c.jsx)(aQ, { isVisible: h && f, subscriptionTier: C, isApplicationHome: !1 }),
                (0, c.jsx)(U.L, {
                    innerRef: i,
                    onChange: (e) => {
                        e &&
                            !g &&
                            (O.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: k }),
                            p(!0));
                    },
                    children: (0, c.jsx)("div", { ref: i, className: a7._Z }),
                }),
                (0, c.jsx)("img", {
                    src: ni,
                    className: a7.Kw,
                    width: 112,
                    height: 85,
                    alt: eT.intl.string(eT.t.X4IxWL),
                }),
            ],
        });
    },
    a4 = function (e) {
        let { entrypoint: t } = e,
            s = (0, ed.V)(),
            i = (0, eo.O)(),
            n = (0, nr.NF)({ trialOffer: s }),
            a = (0, nr.Tp)(),
            l = (0, x.bG)([nl.A], () => nl.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, nr.QG)(), !0 === a && (0, nr.ne)(l), (null != s || null != i) && (0, L.u1)(s, i));
            }, [s, i, n, a, l]),
            t)
        ) {
            case th.tU.UserSettings:
                return (0, c.jsx)(a9, {});
            case th.tU.ApplicationStoreHome:
                return (0, c.jsx)(aE, {});
            default:
                return null;
        }
    };
var le = s(531296);
let lt = function (e) {
    let { entrypoint: t = th.tU.UserSettings } = e;
    (0, v.P)(R);
    let s = (0, j.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        C = (0, ed.V)(),
        I = (0, eo.O)(),
        U = (0, E.Y)(th.T7),
        [G, w] = o.useState(!0),
        B = o.useRef(0),
        H = (0, k.YE)(r, th.PremiumTypes.TIER_2);
    ((0, na.b)(),
        o.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, eX.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        o.useEffect(() => {
            G ||
                O.default.track(eX.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: B.current,
                });
        }, [i, G]),
        o.useEffect(() => {
            s && (null != C || null != I) && (0, L.u1)(C, I);
        }, [s, C, I]));
    let F = (0, m.zy)(),
        V = o.useRef(!1),
        W = a && l && U,
        [z, Y] = o.useState(W);
    (W && !z && Y(!0),
        o.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: th.pe.TIER_0, nitro: th.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((V.current = !0),
                (0, y.bG)(eX.BVt.APPLICATION_STORE),
                (0, _.A)({ subscriptionTier: s, analyticsLocations: n }));
        }, [W, F.search, n]));
    let X = (0, x.bG)([P.A], () => P.A.enabled),
        K = t === th.tU.ApplicationStoreHome,
        Z = X
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : K && H
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(nn, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(le.kL, le.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !X && !s && K && H
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [K && (0, c.jsx)(f.A, {}), Z] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(a4, { entrypoint: t }) });
};
