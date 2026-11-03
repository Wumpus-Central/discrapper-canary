(i.d(t, { A: () => aF }), i(323874), i(14289), i(35956), i(205816));
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
    Y = i(563347),
    X = i(877624),
    K = i(192308),
    Z = i(331322),
    J = i(834730),
    q = i(403581),
    Q = i(821609),
    $ = i(502572),
    ee = i(775602),
    et = i(366999),
    ei = i(531260),
    es = i(780964),
    en = i(766075),
    ea = i(786300),
    el = i(975571),
    er = i(24482),
    ec = i(89366),
    eo = i(881489),
    ed = i(724651),
    eu = i(732280),
    em = i(549996),
    ex = i(172218);
function eg() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, o.useState)(1),
        s = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, ex.B)(
            (e) => {
                i(e.intersectionRatio);
            },
            s,
            e,
        ),
        visibilityPercentage: t,
    };
}
var ep = i(287763);
let ef = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: ep.i,
        children: (0, c.jsx)(J.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var eh = i(371764),
    eN = i(103411),
    eA = i(65470),
    ej = i(792656),
    eE = i(536637),
    eb = i.n(eE),
    eT = i(496431),
    eC = i(105292),
    eR = i(850292);
let eI = function (e) {
    let { expiresAt: t, className: i, digitTextVariant: s = "text-md/medium" } = e,
        n = (0, eT.A)(eb()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(eR.Xl, i, { [eR.a3]: "text-lg/semibold" === s }),
        children: [
            (0, c.jsx)(J.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: eC.intl.string(eC.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: eR.$R,
                children: d.map((e, t) =>
                    (function (e, t, i) {
                        let s,
                            [n, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: eR.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: eR.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: eR.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: eR.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: i,
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
                                                            return eC.intl.string(eC.t.ixASa2);
                                                        case "hours":
                                                            return eC.intl.string(eC.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eC.intl.string(eC.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eC.intl.string(eC.t.JhaiLW);
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
                                        className: eR.cV,
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
var e_ = i(473702),
    ev = i(778712),
    eP = i(97808),
    ey = i(609425),
    eS = i(660184),
    eD = i(854627),
    eM = i(427262),
    eO = i(938767);
function eU() {
    let e = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, ey.A)(),
        { avatarSrc: i, avatarDecorationSrc: s, eventHandlers: n } = (0, eD.A)({ userId: e?.id, size: ev._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eM.mG)(e);
    return (0, c.jsxs)("div", {
        className: eO.kL,
        children: [
            (0, c.jsx)("div", {
                className: eO.my,
                children: (0, c.jsx)(eP.eu, {
                    src: i,
                    avatarDecoration: s,
                    size: ev._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: eO.QC, children: (0, c.jsx)(eS.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eL = i(707554),
    ek = i(534514);
let eG = function (e) {
    let { className: t, color: i = "text-strong", variant: s = "nitro-lg", children: n } = e;
    return (0, c.jsx)(eL.F, {
        forceLevel: 1,
        children: (0, c.jsx)(ek.D, { className: t, variant: s, color: i, children: n }),
    });
};
var ew = i(62010),
    eB = i(815996),
    eH = i(557284),
    eF = i(744413),
    eV = i(478016),
    eW = i(318254),
    ez = i(661531),
    eY = i(626031),
    eX = i(197630);
i(232198);
var eK = i(652215),
    eZ = i(957457);
function eJ(e) {
    let { nRewardsGranted: t, referralRewardType: i, className: s } = e;
    return t < 1
        ? null
        : i === eX.xb.ORBS
          ? (0, c.jsx)(eq, { nRewardsGranted: t, className: s })
          : i === eX.xb.DISCOUNT
            ? (0, c.jsx)(eQ, { nRewardsGranted: t, className: s })
            : null;
}
function eq(e) {
    let { nRewardsGranted: t, className: i } = e,
        s = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(s);
        }, [s]),
        (0, c.jsxs)(Z.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: i,
            children: [
                (0, c.jsxs)("div", {
                    className: eZ.u,
                    "aria-label": String(s),
                    children: [
                        (0, c.jsx)(eW.C, { size: "xs", color: ez.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(eY.t, {
                            value: n,
                            onValueChange: eK.tEg,
                            onValueReached: eK.tEg,
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
                    children: eC.intl.string(eC.t.UhguER),
                }),
            ],
        })
    );
}
function eQ(e) {
    let { nRewardsGranted: t, className: i } = e;
    return (0, c.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: i,
        "aria-label": eC.intl.formatToPlainString(eC.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(eV.U, { size: "md", color: ez.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(J.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eC.intl.format(eC.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e$ = i(303682),
    e0 = i(758836),
    e1 = i(558992);
function e2(e) {
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
        } = (0, eH.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(e1.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e1.G3,
                children: (0, c.jsx)(eF.fx, {
                    nReferralsSent: s,
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
                            (0, c.jsx)(J.E, { variant: "text-md/semibold", color: "text-strong", children: l }),
                            (0, c.jsx)(J.E, {
                                variant: d ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: e1.Wp,
                              children: [
                                  (0, c.jsx)(eF.ZP, { referralSentUsers: i }),
                                  (0, c.jsx)(eJ, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(eF.ZP, { referralSentUsers: i, className: e1.t7 }),
                ],
            }),
            (0, c.jsx)(Q.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? eC.intl.string(eC.t.iw5Ccc) : eC.intl.string(eC.t.Lm2nFc),
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
var e3 = i(702841),
    e7 = i(676279),
    e8 = i(29477),
    e6 = i(717421),
    e5 = i(396583),
    e9 = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    e4 = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let te = (e) => {
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
        u = (0, e6.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, e6.z)(
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
        N = (0, e6.z)(
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
        C = (0, e6.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e5.A)(() => {
        (E(b * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(e8.animated.div, {
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
var tt = i(382168);
let ti = function (e) {
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
                    className: u()(tt.nJ, s),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 10 * f, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.UP,
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
                    className: u()(tt.IN, n),
                    children: (0, c.jsx)(te, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.DOWN,
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
                    className: u()(tt.Gj, a),
                    children: (0, c.jsx)(te, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.DOWN,
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
                    className: u()(tt.FV, l),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 5 * f, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.UP,
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
                    className: u()(tt.E1, r),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * f, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.UP,
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
var ts = i(607470),
    tn = i(562915);
let ta =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tl = function (e) {
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
                                ts.A,
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
            f = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            h = (0, e7.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tl, {
                    supportHEVCAlpha: h,
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(ti, {
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
var tc = i(942663);
let to = function (e) {
    let { containerVisibilityPercentage: t, compact: i } = e;
    return (0, c.jsx)(tr, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tc.wG, i && tc.Vx),
        flyingWumpusAssetClassName: u()(tc.lu, i && tc.ov),
        boltContainerClassName: u()(tc.nJ, i && tc.Wc),
        hammerContainerClassName: u()(tc.Gj, i && tc.XA),
        keyContainerClassName: u()(tc.FV, i && tc.oZ),
        starContainerClassName: u()(tc.E1, i && tc.LN),
        boltAssetClassName: u()(tc.j7, i && tc.QN),
        hammerAssetClassName: u()(tc.Wv, i && tc.B9),
        keyAssetClassName: u()(tc.rs, i && tc.I1),
        starAssetClassName: u()(tc.OY, i && tc.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var td = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tu = i(454273);
let tm = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: g } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        p =
            ((t = { [td.MORNING]: eC.t["Wvc/I+"], [td.AFTERNOON]: eC.t["d+0STx"], [td.EVENING]: eC.t.CqsxKI }),
            eC.intl.string(
                t[
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? td.MORNING
                        : i >= 12 && i < 17
                          ? td.AFTERNOON
                          : td.EVENING
                ],
            )),
        f = o ?? (r ? (0, c.jsx)(e2, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tu.kL, tu.Eg, s),
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
                                        (0, c.jsx)(eU, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tu.y3,
                    children: (0, c.jsx)(to, { containerVisibilityPercentage: g, compact: null == f }),
                }),
            ],
        }),
    });
};
var tx = i(549926);
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
var tp = i(499126);
let tf = function (e) {
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
var th = i(202541);
function tN(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = (0, eo.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tu.kL, i),
        ref: s,
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
                                (0, c.jsx)(ef, { text: eC.intl.string(eC.t.yhldRB) }),
                                (0, c.jsx)(eG, { children: eC.intl.format(eC.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tu.X8,
                                    children: (0, c.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: eC.intl.string(eC.t.Jf8KrT),
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
                                    buttonTextOverride: eC.intl.string(eC.t["2+luBl"]),
                                    iconOverride: q.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(Q.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eC.intl.string(eC.t.Af7ye6),
                                    onClick: () => (0, en.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tu.Hk, children: (0, c.jsx)(tf, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tA(e) {
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
        { visibilityPercentageRef: p, visibilityPercentage: f } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        h = g ?? (m ? (0, c.jsx)(e2, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tu.kL, tu.Eg, t),
        ref: s,
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
                            (0, c.jsx)(eI, {
                                expiresAt: n.expiresAt.toISOString(),
                                digitTextVariant: "text-lg/semibold",
                            }),
                        (0, c.jsxs)(Z.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eG, {
                                    children: eC.intl.format(eC.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: eC.intl.format(eC.t["3Q4wCy"], {
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
                                    icon: q.t,
                                    size: "md",
                                    text: eC.intl.string(eC.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = e_.g.CONFIRM_DISCOUNT),
                                            void (0, K.openModalLazy)(async () => {
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
                                (0, c.jsx)(eA.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eC.intl.string(eC.t["3KomGa"]),
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tu.y3, tu.Xx),
                    children: (0, c.jsx)(tg, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function tj(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: s } = e,
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
        x = (0, em.c)(X.C.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eK.Dmq.CANCELED,
        p = null;
    null != x &&
        "marketingPageBanner" === x.properties.properties.oneofKind &&
        (p = (0, c.jsx)(eh.x, {
            componentId: x.id,
            promotionId: x.promotionId,
            promotionBannerMarketingComponentFields: x.properties.properties.marketingPageBanner,
        }));
    let f = (0, eu.V)(),
        h = (0, ed.O)(),
        j = (0, z.U9)(h, th.pe.TIER_2) ? th.pe.TIER_2 : void 0,
        E = null != r && r.status !== eK.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        b = (0, ei.A)(),
        T = b.isFractionalPremiumActive && !E && null == p && !l;
    if (i) return (0, c.jsx)(tN, { fpEndsAt: b.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: tu.UJ,
                  children: [
                      (0, c.jsx)(ej.A, { size: "md", subscriptionTier: f?.subscriptionTrial?.skuId ?? j }),
                      (0, c.jsx)(eA.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eC.intl.string(eC.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tm, {
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
        ? (0, c.jsx)(tA, {
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
        : (0, c.jsx)(tm, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          });
}
let [tE, tb] = (0, ea.A)(),
    tT = function (e) {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, eo.ds)(),
            r = (0, ec.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eK.Dmq.CANCELED && null != s,
            m = r && !u,
            g = eC.intl.string(eC.t.qYKftX),
            p = (0, eN.m)(),
            { fractionalState: f, endsAt: h } = (0, ei.A)(),
            j = (0, et.Ay)(h, et.yE.CREDITS_ENDS_IN),
            E = f !== th.xc.NONE && !l;
        E && (m = !0);
        let b = o.useMemo(() => {
                if (!E) return (0, c.jsx)(ef, { text: g });
                let e = eC.intl.format(eC.t["yR+oDD"], {
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
                            children: (0, c.jsx)("div", { className: tu.eL, children: (0, c.jsx)(ef, { text: j }) }),
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
            children: (0, c.jsx)(tE.Provider, {
                value: T,
                children: (0, c.jsx)(tj, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: p }),
            }),
        });
    };
var tC = i(820284),
    tR = i(742589),
    tI = i(392943),
    t_ = i(285373),
    tv = i(603202),
    tP = i(673992);
let ty = function () {
    return (0, c.jsx)(tC.A, {
        section: eK.JJy.NAVIGATION,
        children: (0, c.jsx)(tR.A, {
            className: u()(tv.TQ, tP.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: tv.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: tP.wk,
                        children: [
                            (0, c.jsx)(q.t, { colorClass: tP.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": eC.intl.string(eC.t.Ipxkog),
                                className: tP.Ss,
                                children: (0, c.jsx)(tI.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: tv.MQ,
                        children: [
                            (0, c.jsx)(t_.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tS = i(325499),
    tD = i(131937),
    tM = i(885574),
    tO = i(43990),
    tU = i(993077),
    tL = i(139286),
    tk = i(872725),
    tG = i(920050),
    tw = i(51965),
    tB = i(375776),
    tH = i(727811),
    tF = i(222652),
    tV = i(385740),
    tW = i(934353);
function tz(e) {
    let { openRewardModal: t } = e,
        i = (0, tF.z)();
    if (i.kind === tF.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tW.R$,
            children: [
                (0, c.jsx)(ej.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: th.pe.TIER_2,
                }),
                (0, c.jsx)(Q.$, { variant: "secondary", size: "md", text: eC.intl.string(eC.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === tH.P.CLAIMED
            ? { text: eC.intl.string(tV.default.Plwzgf) }
            : { text: eC.intl.string(eC.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: tW.R$,
                children: [
                    (0, c.jsx)(tw.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: i.text,
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        onClick: i.onClick,
                        disabled: i.disabled,
                        loading: i.loading,
                    }),
                    (0, c.jsx)(Q.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: i.requestInProgress,
                    }),
                ],
            }),
            i.claimStatus === tH.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: tW.ed,
                    children: [
                        (0, c.jsx)(tM.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(J.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: eC.intl.string(tV.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function tY(e) {
    let { glowing: t = !1 } = e;
    (0, tL.A)({
        type: tD.ImpressionTypes.VIEW,
        name: tD.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: tG.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: s } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("878140"), i.e("813088")]).then(i.bind(i, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, c.jsx)(tO.N, {
        theme: eK.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(A.f5, {
                value: s,
                children: (0, c.jsx)("div", {
                    className: u()(e, tW.kL),
                    children: (0, c.jsx)(tk.A, {
                        cardType: tU.s.CUSTOM,
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
                                        (0, c.jsx)(ek.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: tW.DD,
                                            children: eC.intl.string(tV.default.RGT513),
                                        }),
                                        (0, c.jsx)(J.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: tW.h_,
                                            children: eC.intl.string(tV.default["+pTnsf"]),
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
var tX = i(254202),
    tK = i(112992);
function tZ(e) {
    let { className: t, containerClassName: i, glowing: s } = e,
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
                  };
    return (0, c.jsx)(tX.S, {
        id: tG.XBOX_PREMIUM_PERK_CARD_ID,
        title: eC.intl.string(tV.default.UVL9tD),
        description: eC.intl.string(tV.default["I+IXr0"]),
        ...l,
        className: t,
        containerClassName: i,
        glowing: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: tK.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function tJ(e) {
    let { analyticsLocations: t } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(A.f5, { value: t, children: (0, c.jsx)(tZ, { ...e }) });
}
var tq = i(744082),
    tQ = i(261995),
    t$ = i(722793),
    t0 = i(700556),
    t1 = i(821874);
function t2(e) {
    let { id: t, sectionClassName: i, heading: s, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = t1.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: i,
        children: [
            s,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && t0.Jx, l), children: a }) : null,
        ],
    });
}
var t3 = i(517846),
    t7 = i(509434),
    t8 = i(695366),
    t6 = i(27620),
    t5 = i(44724),
    t9 = i(371794);
let t4 = new Date(Date.UTC(2026, 9, 23));
var ie = i(945810);
let it = (0, ie.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ii = i(398523),
    is = i(881373),
    ia = i(721157),
    il = i(555393),
    ir = i(325652),
    ic = i(852218),
    io = i(52530),
    id = i(164832),
    iu = i(280761),
    im = i(881296);
let ix = (0, ie.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ig = i(612413);
let ip = new Date(Date.UTC(2026, 10, 5));
var ih = i(188275),
    iN = i(278870),
    iA = i(795670),
    ij = i(839071),
    iE = i(737132),
    ib = i(39078),
    iT = i(635088),
    iC = i(679502),
    iR = i(762493);
let iI = "xgpp";
function i_(e) {
    let { card: t, backgroundAssetUrl: i, blurTint: s, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: t0.JE,
        children: (0, c.jsx)(tX.S, {
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
function iv(e) {
    let { glowingSectionId: t, glowingPerkId: i } = e,
        s = (0, tS.b)("premium_subscriber_home_rewards");
    (0, tq.A)(th.tv);
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
                s = ((e = (0, io.eh)()), (t = (0, io.fR)()), null != e ? e : t),
                n = (0, iu.U)(),
                a = (function (e) {
                    let { location: t } = e,
                        { enabled: i } = it.useConfig({ location: t });
                    return i;
                })({ location: "useHardwarePartnerPerkCards" }),
                l = (0, is.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                r = ii.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                d = (0, ig.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                u = (function (e) {
                    let { location: t } = e,
                        { enabled: i } = ix.useConfig({ location: t });
                    return i;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                m = null === (0, il.N)(),
                x = (0, tQ.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: g, nDaysInMonth: p } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let e =
                        a && null == s
                            ? {
                                  id: tG.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: eC.intl.string(iN.default["IcD/7p"]),
                                  description: eC.intl.formatToPlainString(iN.default.hausFi, {
                                      date: new Intl.DateTimeFormat(eC.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(t4),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: ir.L.EXPIRED,
                                  pillText: eC.intl.string(iN.default.fxF0Jz),
                                  caption: (0, c.jsx)("img", { src: iT.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = l
                        ? {
                              id: tG.LOGITECH_3PP_CARD_ID,
                              title: eC.intl.string(iA.default.OlObRa),
                              description: eC.intl.format(iA.default.ZGOJ8R, {
                                  discountPercent: is.aW,
                                  termsUrl: el.A.getArticleURL(eK.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: g.getDate() / p,
                              ctaText: eC.intl.string(eC.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, id.P)({
                                      partnerIds: [ic.XY],
                                      title: eC.intl.string(iA.default["2I7nK+"]),
                                      subtitle: eC.intl.format(iA.default.W8jOD0, {
                                          termsUrl: el.A.getArticleURL(eK.MVz.LOGITECH_PROMOTION),
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
                              analyticsOptions: { thirdPartyPartner: ic.XY },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    o = r
                        ? {
                              id: tG.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: eC.intl.string(eC.t.m7PucM),
                              description: eC.intl.format(eC.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: g.getDate() / p,
                              ctaText: eC.intl.string(eC.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, id.P)({
                                      partnerIds: [ic.KS],
                                      title: eC.intl.string(eC.t["7ioAjs"]),
                                      subtitle: eC.intl.format(eC.t.LOYRxB, {
                                          helpCenterLink: el.A.getArticleURL(eK.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: ic.KS },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    f = u
                        ? {
                              id: tG.RUST_3PP_CARD_ID,
                              title: eC.intl.string(iE.default.gQ1ctg),
                              description: eC.intl.format(iE.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(eC.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(ip),
                                  termsUrl: el.A.getArticleURL(eK.MVz.RUST_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: eC.intl.string(eC.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, t9.YE)(ih.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: eC.intl.string(iE.default.NmBRGV),
                              ctaIcon: t7.I,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t5.default)({ applicationId: ih.IG }),
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
                              id: tG.YOUTUBE_3PP_CARD_ID,
                              title: eC.intl.string(ib.default["BdIVB+"]),
                              description: eC.intl.format(ib.default["3jY5i3"], {
                                  helpCenterUrl: el.A.getArticleURL(eK.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: iC.A, alt: "YouTube Premium" }),
                              ctaText: eC.intl.string(iN.default.fcopjf),
                              onCtaClick: () =>
                                  (0, id.P)({
                                      partnerIds: [ic.NC],
                                      analyticsLocations: i,
                                      title: eC.intl.string(ib.default.TDZUui),
                                      subtitle: eC.intl.format(ib.default.BTLkvw, {
                                          helpCenterUrl: el.A.getArticleURL(eK.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      modalTeaser: {
                                          title: eC.intl.format(ib.default.J8CVYT, {
                                              helpCenterUrl: el.A.getArticleURL(
                                                  eK.MVz.YOUTUBE_PROMOTION_CURRENT_SUBSCRIBER,
                                              ),
                                          }),
                                          titleVariant: "text-sm/medium",
                                          icon: t8.E,
                                      },
                                      onClose: () => {
                                          t6.Ay.fireSurveyAction(t3.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: ic.NC },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    riotCampaignCard:
                        null != n
                            ? {
                                  id: tG.RIOT_CREDIT_CAMPAIGN_PERK_CARD_ID,
                                  title: eC.intl.string(ij.default.zCdMTs),
                                  description: eC.intl.formatToPlainString(ij.default["8VH2lL"], {
                                      termsUrl: el.A.getArticleURL(eK.MVz.RIOT_CREDIT_CAMPAIGN),
                                  }),
                                  pillText:
                                      null != n.redemptionEndsAt
                                          ? eC.intl.formatToPlainString(iN.default.g7iyvR, {
                                                date: (0, ia.Sw)(n.redemptionEndsAt),
                                            })
                                          : void 0,
                                  caption: (0, c.jsx)("img", {
                                      src: "https://cdn.discordapp.com/assets/content/cef348e36782f9a2173dea37eb7a54e04a0acb4d4f7f5074c8a3f9e5d2ae6e29.svg",
                                      alt: "Riot Games",
                                  }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/2e11a92f42a86815654f152948f20362092f082dd2215e4ad7dbfa3eacea17fd.webp",
                                  ctaText: eC.intl.string(ij.default.en2ls2),
                                  blurTint: "#310A0B",
                                  isThirdPartyPerk: !0,
                                  onCtaClick: () => {
                                      (0, im.W)({ analyticsLocations: i });
                                  },
                                  analyticsOptions: { thirdPartyPartner: "riot" },
                              }
                            : null,
                    macaronCard: x,
                    codeBlurpleCard: s,
                };
            }, [x, s, n, i, a, g, l, p, r, u, d, m]);
        })(),
        { phase: p } = (0, tQ.vc)({ location: "NitroRewardsSection" }),
        f =
            null != x
                ? {
                      card: x,
                      backgroundAssetUrl:
                          p === t$.H.PHASE_ONE
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
        ? (b = (0, c.jsx)(i_, {
              card: f.card,
              backgroundAssetUrl: f.backgroundAssetUrl,
              blurTint: f.blurTint,
              glowing: t === iI || i === f.card.id,
              autoClickCta: i === f.card.id,
          }))
        : j && (b = (0, c.jsx)("div", { className: t0.JE, children: (0, c.jsx)(tY, { glowing: t === iI }) })),
    null != b || E)
        ? (0, c.jsx)(t2, {
              id: iI,
              sectionClassName: u()(iR.uW, iR.Uv, iR.qr),
              heading: (0, c.jsx)(ek.D, {
                  variant: "nitro-sm",
                  className: u()(t1.R_, t0.U6),
                  children: eC.intl.string(eC.t.NG1e6l),
              }),
              beforeGrid: b,
              grid: E
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != g && (0, c.jsx)(tX.S, { ...g, containerClassName: t1.Nr, glowing: i === g.id }),
                            null != m &&
                                (0, c.jsx)(tX.S, {
                                    ...m,
                                    containerClassName: t1.Nr,
                                    glowing: i === m.id,
                                    autoClickCta: i === m.id,
                                }),
                            null != x &&
                                x.id !== h &&
                                (0, c.jsx)(tX.S, {
                                    ...x,
                                    containerClassName: t1.Nr,
                                    glowing: i === x.id,
                                    autoClickCta: i === x.id,
                                }),
                            null != d &&
                                d.id !== h &&
                                (0, c.jsx)(tX.S, {
                                    ...d,
                                    containerClassName: t1.Nr,
                                    glowing: i === d.id,
                                    autoClickCta: i === d.id,
                                }),
                            null != l && (0, c.jsx)(tX.S, { ...l, containerClassName: t1.Nr, glowing: i === l.id }),
                            s &&
                                (0, c.jsx)(tJ, {
                                    containerClassName: t1.Nr,
                                    glowing: i === tG.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, c.jsx)(tX.S, { ...a, containerClassName: t1.Nr, glowing: i === a.id }),
                            null != r && (0, c.jsx)(tX.S, { ...r, containerClassName: t1.Nr, glowing: i === r.id }),
                            null != n && (0, c.jsx)(tX.S, { ...n, containerClassName: t1.Nr, glowing: i === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var iP = i(313133),
    iy = i(67423);
let iS = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e6.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e8.animated.div, {
        className: u()(iP.iE, { [iP.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: iP.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: iy, className: iP.oU }),
                (0, c.jsxs)("div", {
                    className: iP.iQ,
                    children: [
                        (0, c.jsx)(ek.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: eC.intl.format(eC.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eC.intl.format(eC.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, er.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(Q.$, {
                    variant: "expressive",
                    icon: q.t,
                    size: "md",
                    text: eC.intl.string(eC.t.zrCzVB),
                    onClick: () =>
                        void (0, K.openModalLazy)(async () => {
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
                                    initialStep: e_.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var iD = i(761508),
    iM = i(197935),
    iO = i(62617),
    iU = i(387103);
function iL(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iU.A,
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let ik =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function iG(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: ik,
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iw = i(93712);
function iB(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iw.A,
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iH = i(345394);
function iF(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iH.A,
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iV = i(78211);
function iW(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iz = i(330422);
function iY(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iX(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iK = i(996682);
function iZ(e) {
    let { color: t = ez.A.colors.ICON_STRONG, "aria-label": i, "aria-hidden": s, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, iO.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, iK.A)({ "aria-label": i, "aria-hidden": s, role: n }),
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
function iJ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iq = i(78701);
function iQ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iq.A,
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i$ = i(462887),
    i0 = i(736653),
    i1 = i(259065),
    i2 = i(206835),
    i3 = i(591179),
    i7 = i(462463),
    i8 = i(219882),
    i6 = i(878784),
    i5 = i(425713),
    i9 = i(696292),
    i4 = i(192444),
    se = i(617986),
    st = i(892227),
    si = i(81466),
    ss = i(923584),
    sn = i(749012);
let sa = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, B.F)();
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, st.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: sn.kL,
        children: [
            null != i &&
                (0, c.jsxs)("div", {
                    className: sn.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sn.Pf,
                            children: [
                                (0, c.jsx)(si.CalendarIcon, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eC.intl.string(ss.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eC.intl.format(ss.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: sn.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: sn.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sn.Pf,
                            children: [
                                (0, c.jsx)(eW.C, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eC.intl.string(ss.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eC.intl.format(ss.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var sl = i(190107),
    sr = i(799544);
function sc() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, i4.lk)(sl.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: s } = (0, B.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == s || null == s.reward_amount || s.reward_amount <= 0
                    ? null
                    : {
                          id: tG.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eC.intl.string(ss.default.hx5AFp),
                          description: eC.intl.format(ss.default.wq3CF2, { orbsCount: s.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(sr.lH, sr.yK),
                          footerContent: (0, c.jsx)(sa, {}),
                          ctaText: eC.intl.string(ss.default.BxjHiu),
                          onCtaClick: () => (0, P.pX)(eK.BVt.COLLECTIBLES_SHOP_WITH_TAB(e0.G2.ORBS)),
                      },
            [i, s],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                e
                    ? {
                          id: tG.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eC.intl.string(eC.t.Csf5Ol),
                          description: eC.intl.format(eC.t.NpUfej, { bonusOrbMultiplier: t }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eC.intl.string(eC.t.jVcuVY),
                          onCtaClick: () => (0, se.mA)({ fromContent: i9.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: sr.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var so = i(975807),
    sd = i(95035),
    su = i(989790),
    sm = i(88001),
    sx = i(899082),
    sg = i(817577);
function sp() {
    (0, so.A)(sm.TE);
}
function sf(e) {
    let t = (0, su.O9)(),
        s = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, K.openModalLazy)(async () => {
                      let { default: e } = await i.e("499709").then(i.bind(i, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, v.A)({
                      subscriptionTier: th.pe.TIER_2,
                      initialPlanId: th.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: tG.PREMIUM_GROUP_CARD_ID,
                      title: eC.intl.string(sx.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eC.intl.formatToPlainString(sx.default.JlyGQj, {
                                  totalSeats: sm.aw,
                                  premiumGroupProductName: (0, sm.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: sr.LF,
                                  children: (0, c.jsx)(sd.A, {
                                      onClick: sp,
                                      children: eC.intl.string(sx.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eC.intl.string(eC.t.oW0eUd),
                      primaryAsset: sg,
                      ctaIcon: q.t,
                      ctaIconPosition: "start",
                      ctaText: eC.intl.string(eC.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sh = i(562819),
    sN = i(793943),
    sA = i(757036),
    sj = i(212524),
    sE = i(70283),
    sb = i(643056),
    sT = i(470739);
let sC = (0, ie.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sR = i(655752),
    sI = i(764231),
    s_ = i(627380),
    sv = i(30084),
    sP = i(814014),
    sy = i(714206);
let sS =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    sD =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    sM =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function sO() {
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
        T = (0, i3.X)("useWhatsNewPerkCards"),
        C = (0, i7.A)({ analyticsLocations: b }),
        R = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: b }, () =>
                (0, i1.L)({ analyticsLocations: b }),
            );
        }, [b]),
        I = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: b }, () =>
                (0, sh.L)({ analyticsLocations: b }),
            );
        }, [b]),
        _ = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        v =
            ((e = (0, x.bG)([S.default], () => S.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (i = (function (e) {
                let { location: t } = e;
                return sC.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (s = (0, sb.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, i6.$F)()),
            (a = (0, i6.Xb)()),
            (l = n?.status === i6.Wo.UPCOMING || t),
            (r = n?.status === i6.Wo.WITHHELD),
            (d = l || r),
            (m = (0, i5.N)(n?.id)),
            (g = (function () {
                let e = (0, i6.$F)(),
                    t = (0, sR.P)(),
                    i = (0, i6.Xb)();
                if (null == e || null == t || null == i || e.status === i6.Wo.WITHHELD) return null;
                let s = eb()(),
                    n = eb()(i),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / r));
            })()),
            (p = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion) && !d),
            (f = (0, s_.t)()),
            (h = (0, sR.P)()),
            (0, o.useMemo)(() => {
                let e,
                    l = null != h ? eC.intl.string(h.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, sI.T)(th.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === i6.Wo.UPCOMING
                              ? eC.intl.formatToPlainString(eC.t.a1eKDi, { days: f?.days ?? 0 })
                              : n.status === i6.Wo.WITHHELD
                                ? ((0, sI.T)(n.id, n.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return eC.intl.formatToPlainString(eC.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return eC.intl.formatToPlainString(eC.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(f, l) ??
                                  (0, sI.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != m ? (r = d || p ? m.standard : m.ambientLarge) : t && (r = sy),
                    {
                        id: tG.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eC.intl.string(n.nameUnformattedNitro) : t ? eC.intl.string(eC.t.tx9Fvw) : "",
                        pillText: eC.intl.string(eC.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(sP.pq, { [sP.rX]: d, [sP.kE]: p }),
                        caption: null != a ? eC.intl.formatToPlainString(eC.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: g ?? void 0,
                        ctaText: eC.intl.string(eC.t.jVcuVY),
                        onCtaClick: () => {
                            i && s
                                ? (0, sT.openBadgeDirectoryModal)({ initialBadgeId: sE.$.PREMIUM_TENURE })
                                : (0, sv.D)({ analyticsLocations: b });
                        },
                    }
                );
            }, [n, m, d, p, a, g, t, f, h, b, i, s])),
        { nitroOrbsRewardsCard: P, questOrbMultiplierCard: y } = sc(),
        D =
            ((j = (0, sA.L)(th.PremiumTypes.TIER_2)),
            (E = (0, i8.rX)()),
            (0, o.useMemo)(
                () =>
                    j && E
                        ? {
                              id: tG.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eC.intl.string(sj.default["/cV3ka"]),
                              description: eC.intl.string(sj.default.H523FI),
                              primaryAsset: (0, c.jsx)(iV.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [j, E],
            )),
        M = sf(b);
    return (0, o.useMemo)(() => {
        let e = [
                P,
                y,
                M,
                {
                    id: tG.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eC.intl.string(eC.t.OLtTrt),
                    description: eC.intl.string(eC.t["di/pXR"]),
                    onCtaClick: T ? C : R,
                    ctaText: eC.intl.string(eC.t.jVcuVY),
                    primaryAsset: sS,
                },
                {
                    id: tG.CLIENT_THEMES_CARD_ID,
                    title: eC.intl.string(eC.t.acc6h6),
                    description: eC.intl.formatToPlainString(eC.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: sM,
                    ctaText: eC.intl.string(eC.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sN.nf)(sN.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tG.PERMADECOS_CARD_ID,
                    title: eC.intl.string(eC.t.L14NZN),
                    description: eC.intl.string(eC.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(iQ, { alt: "", ariaHidden: !0 }),
                    ctaText: eC.intl.string(eC.t.jVcuVY),
                    onCtaClick: T ? C : I,
                },
                {
                    id: tG.CUSTOM_APP_ICONS_CARD_ID,
                    title: eC.intl.string(eC.t["GU+wqh"]),
                    description: eC.intl.string(eC.t["1uPk1Z"]),
                    primaryAsset: sD,
                    ctaText: eC.intl.string(eC.t.y9TxXV),
                    onCtaClick: _,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            i = t ? 5 : 6;
        return (e.splice(+!!t, 0, v), null != D && e.splice(2, 0, D), e.length > i && e.splice(i, e.length - i), e);
    }, [v, P, y, D, M, R, _, I, C, T]);
}
var sU = i(355097);
let sL = "/assets/1eb1b74667b4c0f0.svg",
    sk = "/assets/983b60e4fcaf973b.svg";
var sG =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let sw = [
    { id: "bestof", label: () => eC.intl.string(eC.t.q1u7nQ) },
    { id: "appearance", label: () => eC.intl.string(eC.t.CUnZkZ) },
    { id: "upgrades", label: () => eC.intl.string(eC.t.KC5q8v) },
    { id: "vip", label: () => eC.intl.string(eC.t.DjEAcv) },
];
var sB = i(18290);
function sH(e) {
    return e.id;
}
function sF(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, i0.DP)(),
                t = (0, i3.X)("useFavoritesPerkCards"),
                i = (0, i6.Lh)(),
                s = (0, i5.N)(i)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, i2.A)({ scrollPosition: sU._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, P.pX)(eK.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, i7.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, i1.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = sO(),
                f = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: j } = sc(),
                E = sf(n),
                b = (0, o.useMemo)(
                    () => [
                        {
                            id: tG.SERVER_BOOSTS_CARD_ID,
                            title: eC.intl.formatToPlainString(eC.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eC.intl.formatToPlainString(eC.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(iL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != E ? { ...E, categories: ["bestof"] } : null,
                        {
                            id: tG.PROFILES_CARD_ID,
                            title: eC.intl.string(eC.t.xDRab3),
                            description: eC.intl.string(eC.t.yn6fWA),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(iG, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tG.HD_VIDEO_CARD_ID,
                            title: eC.intl.string(eC.t["/mQ5gg"]),
                            description: eC.intl.string(eC.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(iB, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.CLIENT_THEMES_CARD_ID,
                            title: eC.intl.string(eC.t.acc6h6),
                            description: eC.intl.formatToPlainString(eC.t.WQazjs, { themeCount: 20 }),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: sM,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tG.MORE_EMOJIS_CARD_ID,
                            title: eC.intl.string(eC.t.D8vIDT),
                            description: eC.intl.string(eC.t.DRMecB),
                            primaryAsset: (0, c.jsx)(iF, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.LARGE_UPLOADS_CARD_ID,
                            title: eC.intl.string(eC.t.nL1WZV),
                            description: (0, i8.M6)({
                                legacyCopy: eC.intl.formatToPlainString(eC.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eC.intl.formatToPlainString(eC.t.teOTfv, {
                                    maxFileSize: (0, er.EJ)(th.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(iV.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.CUSTOM_APP_ICONS_CARD_ID,
                            title: eC.intl.string(eC.t["GU+wqh"]),
                            description: eC.intl.string(eC.t["1uPk1Z"]),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: sD,
                            categories: ["appearance"],
                        },
                        {
                            id: tG.ENTRANCE_SOUNDS_CARD_ID,
                            title: eC.intl.string(eC.t.WJfCPi),
                            description: eC.intl.string(eC.t.liQKJR),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tG.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eC.intl.string(eC.t.OLtTrt),
                            description: eC.intl.string(eC.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            primaryAsset: sS,
                            categories: ["appearance"],
                        },
                        {
                            id: tG.CUSTOM_SOUNDS_CARD_ID,
                            title: eC.intl.string(eC.t["Cu/oFd"]),
                            description: eC.intl.string(eC.t.czj2aa),
                            primaryAsset: (0, c.jsx)(iW, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.SPECIAL_STICKERS_CARD_ID,
                            title: eC.intl.string(eC.t.MQoVeb),
                            description: eC.intl.string(eC.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: sr.Uc,
                                children: (0, c.jsx)(iz.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.SUPER_REACTIONS_CARD_ID,
                            title: eC.intl.string(eC.t.qERvAA),
                            description: eC.intl.string(eC.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(iY, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eC.intl.string(eC.t.ssVDYQ),
                            description: eC.intl.string(eC.t.aUSRMa),
                            primaryAsset: (0, i$.M)(e) ? sL : sk,
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.EARLY_ACCESS_CARD_ID,
                            title: eC.intl.string(eC.t["g/KRY6"]),
                            description: eC.intl.string(eC.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(iX, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tG.BADGE_CARD_ID,
                            title: eC.intl.string(eC.t.Bn3CtB),
                            description: eC.intl.string(eC.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != s
                                    ? (0, c.jsx)("img", { src: s, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(iZ, { color: ez.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tG.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eC.intl.string(eC.t["MTD+7w"]),
                            description: eC.intl.string(eC.t.Bhs0s6),
                            ctaText: eC.intl.string(eC.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(iJ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != j ? { ...j, categories: ["vip"] } : null,
                        {
                            id: tG.PERMADECOS_CARD_ID,
                            title: eC.intl.string(eC.t.L14NZN),
                            description: eC.intl.string(eC.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(iQ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, s, h, j, E, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => b.filter((e) => null != e && !f.includes(e.id)), [b, f]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(s?.categories[0] ?? sG.BEST_OF_NITRO),
        l = sw.find((e) => e.id === n)?.label(),
        r = i.filter((e) => null != e && e.categories.includes(n));
    return (0, c.jsxs)("div", {
        className: sB.uW,
        children: [
            (0, c.jsx)(ek.D, { variant: "nitro-sm", children: eC.intl.string(eC.t["Uh3+CA"]) }),
            (0, c.jsx)(iD.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: sB.Lq,
                "aria-label": eC.intl.string(eC.t["Uh3+CA"]),
                children: sw.map((e) =>
                    (0, c.jsx)(iD.V.Item, { id: e.id, className: sB.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                iM.A,
                {
                    "aria-label": eC.intl.formatToPlainString(eC.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: sB.jG,
                    items: r,
                    getItemKey: sH,
                    renderItem: (e, i) =>
                        (0, c.jsx)(tX.S, { ...e, glowing: t === e.id, containerClassName: sB.Ui, listItemProps: i }),
                },
                n,
            ),
        ],
    });
}
var sV = i(72979);
let sW = function (e) {
    let { className: t } = e,
        i = (0, i0.DP)();
    return (0, c.jsx)("img", {
        className: u()(sV.D, t),
        src: (0, i$.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var sz = i(684251);
let sY = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(sz.kL, sz.Gd, sz.Eg),
        children: [(0, c.jsx)(sW, {}), (0, c.jsx)(ty, {}), t],
    });
};
function sX(e) {
    let { glowingPerkId: t = null } = e,
        i = sO();
    return (0, c.jsx)(t2, {
        sectionClassName: t1.uW,
        heading: (0, c.jsx)(ek.D, { variant: "nitro-sm", className: t1.R_, children: eC.intl.string(eC.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tX.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tG.YOUTUBE_3PP_CARD_ID,
                        featured: s,
                        containerClassName: u()(t1.Nr, { [t1.Nq]: s }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function sK(e, t, i, s) {
    !(function (e, t, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
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
var sZ = i(92737);
let sJ = "/assets/cd2be35d285d4675.svg",
    sq = (e) => {
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
                    s = e.get(sZ.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        sK(d ?? "", null != d, h, j);
        let [E, b] = o.useState(!1),
            T = (0, V.p)(),
            C = o.useRef(null),
            [R, v] = o.useState(!1),
            P = null != T && null != a && a.status === eK.Dmq.CANCELED,
            y = (0, z.iU)(th.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !R && P,
            D = (0, x.bG)([H.A], () => (null != t ? H.A.getUserProfile(t) : null)),
            { analyticsLocations: U } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [L, X] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(sz.xW, sz.Gd),
                  ref: s,
                  children: [
                      (0, c.jsx)(sY, {
                          children: (0, c.jsxs)(A.f5, {
                              value: U,
                              children: [
                                  (0, c.jsx)(k.L, {
                                      innerRef: C,
                                      onChange: (e) => v(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tT, {
                                          buttonVisibilityRef: C,
                                          className: sz.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: y,
                                      }),
                                  }),
                                  (0, c.jsx)(sX, { glowingPerkId: f }),
                                  (0, c.jsx)(iv, { glowingPerkId: f, glowingSectionId: p }),
                                  (0, c.jsx)(sF, { glowingPerkId: f }),
                                  (0, c.jsx)(Y.A, {
                                      className: sz.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eK.liQ.NITRO_HOME, section: eK.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: sz.hz }),
                                  (0, c.jsx)(k.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !L &&
                                              (O.default.track(eK.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: U,
                                              }),
                                              X(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: sz._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: sJ,
                                      className: sz.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eC.intl.string(eC.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      P &&
                          null != y &&
                          (0, c.jsx)(iS, {
                              isVisible: S && E,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: y,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(sz.kL, sz.Lq, sz.TN, sz.Eg),
                  children: [(0, c.jsx)(ty, {}), (0, c.jsx)("div", { className: sz.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var sQ = i(286320),
    s$ = i(851746),
    s0 = i(727949),
    s1 = i(543213);
let s2 =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var s3 = i(185062);
let s7 = `${s2} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${s3.A} 3x`;
function s8(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: s2,
        srcSet: s7,
        className: (0, iO.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var s6 = i(315629),
    s5 = i(783420),
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
                                children: (0, c.jsx)(ew.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, c.jsxs)(Z.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: ni.qU,
                            children: [
                                (0, c.jsxs)(Z.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: ni.NI,
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
                                (0, c.jsxs)(Z.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: ni.br,
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
            skuIDs: [(0, er.mH)(e)],
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
        : t === th.Ff.YEAR
          ? eC.intl.format(eC.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : eC.intl.format(eC.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
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
            return (0, c.jsx)(Q.$, {
                size: "md",
                fullWidth: !0,
                icon: q.t,
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
        n = t === th.pe.TIER_2,
        a = "settings" === s,
        l = (0, i$.q)((0, i0.Ay)()),
        r = (0, eu.V)(),
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
                n = th.En[t],
                a = th.zE[t],
                l = t === th.pe.TIER_2,
                r = nu(t),
                c = (0, eu.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, er.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === th.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [th.gD.PREMIUM_YEAR_TIER_0, th.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                p = (0, ed.O)(),
                f = (0, nr.k5)(),
                h = (0, x.bG)([na.default], () => na.default.locale),
                N = (0, z.U9)(p, t),
                A = (0, z.N1)(n),
                j = (0, z.N1)(a),
                [E, b] = (0, x.yK)([nl.A], () => [nl.A.get(n), nl.A.get(a)], [n, a]),
                T = null != E ? (0, er.sS)(E, r) : null,
                C = null != b ? (0, er.sS)(b, r) : null,
                R =
                    N && p?.discount.amount != null && !f
                        ? eC.intl.formatToPlainString(eC.t.IAybsG, {
                              discount: (0, nn.l9)(h, Number(p.discount.amount) / 100),
                          })
                        : null,
                I = p?.discount?.planIds,
                _ = nm(a, N, I, j, C),
                v = nm(n, N, I, A, T),
                P = p?.discount.userUsageLimitInterval,
                y = p?.discount.userUsageLimit ?? th.OJ,
                S = !l || _ || v || null == b ? null : (0, nc.Cj)(b, !1, r),
                D = !v || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== th.pe.TIER_2 ? null : i && !s ? th.En[t] : th.zE[t];
                })({ skuId: t, monthlyHasDiscount: v, isMonthlyPlanDisabled: m }),
                U = null == i || (i === n && m) ? O : i,
                L = [
                    {
                        value: a,
                        primaryText: eC.intl.string(eC.t["/Q4HRN"]),
                        primarySubText:
                            (_
                                ? nx({
                                      expectedUsageInterval: th.Ff.YEAR,
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
                        primaryText: eC.intl.string(eC.t.DKzs96),
                        primarySubText: v
                            ? nx({
                                  expectedUsageInterval: th.Ff.MONTH,
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
                (0, c.jsx)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: ng.MY,
                    children: (0, c.jsx)(ek.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: ng.ck,
                        children: n ? eC.intl.string(eC.t.lG6a5x) : eC.intl.string(eC.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(Z.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: ng.qT,
                    children: n
                        ? (0, c.jsx)(s1.ZP, {
                              featureSet: s1.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "text-sm/medium" : "text-md/medium",
                          })
                        : (0, c.jsx)(s1.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "text-sm/medium" : "text-md/medium",
                          }),
                }),
                n && (0, c.jsx)(ne.K, {}),
            ],
        }),
        T = (0, c.jsxs)(Z.B, {
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
                          children: (0, c.jsx)(J.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: ng.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case th.WT.DAY:
                                          if (t % 7 == 0) return eC.intl.format(eC.t["1MYPH0"], { weeks: t / 7 });
                                          return eC.intl.format(eC.t.pYfIoO, { days: t });
                                      case th.WT.MONTH:
                                          return eC.intl.format(eC.t["96hTLe"], { months: t });
                                      case th.WT.YEAR:
                                          return eC.intl.format(eC.t.B0ZmdG, { years: t });
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
        ? (0, c.jsxs)(s6.h, {
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
        i = (0, i$.q)((0, i0.Ay)()),
        s = nu(th.pe.TIER_2),
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eD.A)({ userId: n?.id, size: ev._3.SIZE_32, animateOnHover: !0 }),
        r = (0, x.bG)([nl.A], () => nl.A.get(th.gD.PREMIUM_GROUP_MONTH)),
        o = eC.intl.string(eC.t["2pG5Ga"]),
        d = (0, c.jsx)(s5.A, {
            subscriptionTier: th.pe.TIER_2,
            initialPlanId: th.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(Q.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: q.t,
                    text: o,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        m = null;
    if (null != r)
        try {
            m = (0, er.sS)(r, s, !1, !1, !1);
        } catch {
            m = null;
        }
    return (0, c.jsx)("div", {
        className: u()(ng.Nr, t),
        children: (0, c.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: ng.Ux,
            children: [
                (0, c.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: ng.MY,
                    children: [
                        (0, c.jsx)(ek.D, {
                            variant: "nitro-md",
                            color: i ? "text-strong" : "text-overlay-light",
                            className: ng.ck,
                            children: eC.intl.string(sx.default.eSKiXk),
                        }),
                        null != n &&
                            (0, c.jsxs)(Z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: ng.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: ng.uA,
                                        children: (0, c.jsx)(eP.eu, {
                                            src: a,
                                            size: ev._3.SIZE_32,
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
                                        className: ng.VL,
                                        children: (0, c.jsxs)(J.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", sm.LM],
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
                    className: ng.qT,
                    children: (0, c.jsx)(s1.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: ng.yF }),
                (0, c.jsxs)("div", {
                    className: ng.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ng.ec,
                            children: [
                                (0, c.jsx)(J.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eC.intl.string(sx.default.SvSwga),
                                }),
                                null == m
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(J.E, {
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
        l = (0, s1.pw)(t),
        r = (0, su.PA)(),
        o = !n && r,
        d = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        m = { [ng.iR]: !d && !n };
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsxs)(Z.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: u()(ng.oB, i, { [ng.W0]: n }),
            children: [
                (0, c.jsx)(ek.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: ng.op,
                    children: eC.intl.string(eC.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: l,
                    className: u()(ng.kR, { [ng.BQ]: o }),
                    children: [
                        (0, c.jsx)(nf, { skuId: th.pe.TIER_0, className: u()(ng.rz, m), variant: s }),
                        (0, c.jsx)(nf, { skuId: th.pe.TIER_2, className: u()(ng.Rv, m), variant: s }),
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
        s = (0, e7.TM)(),
        n = (0, nA.q)((0, i0.Ay)());
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
        l = (0, e6.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eK.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e8.animated.div, {
        className: u()(nT.iE, { [nT.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nT.UD,
            children: [
                (0, c.jsx)(ej.A, {
                    size: "md",
                    subscriptionTier: i,
                    hasActivePromotion: !!s,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nR = i(573710);
let nI = function () {
    let e = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nR.BI,
                children: (0, c.jsx)(te, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e9.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nR.Q,
                    }),
                }),
            }),
            (0, c.jsx)(ti, {
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
                    (0, c.jsx)(ek.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: n_.RH,
                        children: eC.intl.string(eC.t.lEw32m),
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
            [nb.HOME]: eC.intl.string(eC.t.uGRXjS),
            [nb.WHATS_NEW]: eC.intl.string(eC.t["mfcR/v"]),
            [nb.BEST_OF_NITRO]: eC.intl.string(eC.t.xQKkE8),
            [nb.PLANS]: eC.intl.string(eC.t.wyNMnm),
            [nb.COMPARE]: eC.intl.string(eC.t.pwD7If),
        },
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tR.A, {
        className: tv.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: tv.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: tv.wG,
                    children: [
                        (0, c.jsx)(q.t, { className: tv.nE, colorClass: tv.oG }),
                        (0, c.jsx)("div", {
                            className: tv.zc,
                            role: "tablist",
                            "aria-label": eC.intl.string(eC.t.O9MiXY),
                            children: a.map((e) => {
                                let t = i === e.id,
                                    n = s[e.id];
                                return (0, c.jsxs)(
                                    nP.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: tv.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(J.E, {
                                                variant: "text-sm/medium",
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
                        null != n && (0, c.jsx)(t_.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
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
    let { sectionRef: e, handleVisibilityChange: t } = (0, nk.A)({ boxType: tB.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: nD.B, text: eC.intl.string(tV.default.MUypiB) },
            { icon: nM.h, text: eC.intl.string(tV.default.ec5Rdd) },
            { icon: nO.GiftIcon, text: eC.intl.string(tV.default["9t2CzW"]), tooltip: tV.default.AyECej },
            { icon: nU.o, text: eC.intl.string(tV.default.R7YJAY) },
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
                                            (0, c.jsx)(ek.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: nw.R_,
                                                children: eC.intl.string(tV.default.rkt1aw),
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
                                                                    (0, c.jsx)(J.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: i,
                                                                    }),
                                                                    null != s &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nw.Jn,
                                                                            children: (0, c.jsx)(nL.m, {
                                                                                text: eC.intl.string(s),
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
                                                            i,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: nw.xF,
                                                        children: (0, c.jsx)(ej.A, {
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
                                        className: nw.WE,
                                        children: (0, c.jsx)(J.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eC.intl.format(tV.default.KDKdWi, { termsLink: (0, nG.xA)() }),
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
            (0, c.jsx)(ek.D, {
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
        let t = (0, tS.b)("premium_marketing_bento"),
            i = (0, ig.mh)({ location: "premium_marketing_bento" }),
            { enabled: s } = (0, tQ.vc)({ location: "premium_marketing_bento" }),
            { enabled: n } = nH.A.useConfig({ location: "premium_marketing_bento" }),
            a = t && !i && !(s && n),
            { whatsNewBoxes: l } = (0, nV.Ay)(a);
        return (0, c.jsx)(nz, {
            boxLayout: l,
            title: eC.intl.string(eC.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: a ? (0, c.jsx)(nB, {}) : null,
            ...e,
        });
    }),
    nX = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nV.Ay)();
        return (0, c.jsx)(nz, { boxLayout: t, title: eC.intl.string(eC.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nK = (0, ie.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nZ = i(236834),
    nJ = i(540504);
function nq(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eD.A)({ userId: t?.id, size: ev._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nJ.$6,
        children: (0, c.jsxs)("div", {
            className: nJ.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nJ.kR,
                    children: (0, c.jsx)(eP.eu, { src: i, "aria-label": t.username, size: ev._3.SIZE_32, ...s }),
                }),
                (0, c.jsx)(ek.D, {
                    variant: "heading-sm/medium",
                    className: nJ.FS,
                    color: "text-strong",
                    children: eC.intl.format(eC.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var nQ = i(579245),
    n$ = i(369805);
let n0 = function () {
    let e = (0, n$.A)();
    return null == e ? null : (0, c.jsx)(ef, { text: e });
};
function n1() {
    let e = (0, x.bG)([nl.A], () => nl.A.getForSkuAndInterval((0, er.mH)(th.pe.TIER_0), th.WT.MONTH));
    return null != e ? (0, er.sS)(e) : "\u2026";
}
var n2 = i(508556);
let n3 = function (e) {
    let { containerVisibilityPercentage: t, variant: i = "default" } = e,
        s = "settings" === i,
        n = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        a = (0, e7.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: u()(n2.YU, { [n2.W0]: s }),
        children: [
            (0, c.jsx)(tl, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: n2.wG,
                assetClassName: n2.lu,
                variant: i,
            }),
            (0, c.jsx)(ti, {
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
let n8 = o.memo(function (e) {
    let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: s, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        o = n1(),
        d = nK.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        m = (0, nZ.A)(),
        g = null != m,
        { visibilityPercentageRef: p, visibilityPercentage: f } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        h = (0, sQ.b)(),
        j = !g && h.length > 0,
        E = (0, em.c)(X.C.MARKETING_PAGE_BANNER),
        b = null != E && "marketingPageBanner" === E.properties.properties.oneofKind,
        T = (0, nr.ar)() && !b,
        C = (0, ed.O)(),
        R = (null != C && th.U4.includes(C.discountId)) || b;
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
                                children: (0, c.jsx)(eL.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(ek.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : n7.wx,
                                        children: eC.intl.string(eC.t.YCZldK),
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
                                            (0, c.jsx)(ej.A, {
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!s,
                                                subscriptionTier: R && null == i ? th.pe.NONE : i,
                                                buttonTextOverride: R ? eC.intl.string(eC.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n7.iQ,
                                        children: (0, c.jsx)(J.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: d
                                                ? eC.intl.string(eC.t.jHqrJW)
                                                : eC.intl.format(eC.t.kt9wxs, { cheapestMonthlyPrice: o }),
                                        }),
                                    }),
                                    null != E &&
                                        "marketingPageBanner" === E.properties.properties.oneofKind &&
                                        (0, c.jsx)(eh.x, {
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
var n6 = i(497114);
let n5 = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        i = (0, o.useCallback)(
            (e) => {
                let i = r.current[e];
                null != i &&
                    ((i.style.scrollMarginTop = `${t}px`), i.scrollIntoView({ behavior: "smooth", block: "start" }));
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
var n9 = i(818348),
    n4 = i(773188);
let ae = () => {
    let e = (0, m.zy)();
    (0, _.P)(I);
    let t = o.useRef(null),
        i = o.useRef(null),
        s = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [p, f] = o.useState(!1),
        [h, j] = o.useState(!1),
        [E, b] = o.useState(!1),
        T = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        C = null != T ? (0, er.EL)(T) : null,
        R = null != C ? er.Ay.getSkuIdForPlan(C.planId) : null,
        v = null !== R && R !== th.pe.TIER_2 ? th.pe.TIER_2 : null,
        { analyticsLocations: P } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        b(!0);
    }, []);
    let { shouldShowBonusOrbsUX: y } = (0, i4.lk)(sl.rE.NITRO_HOME_MARKETING),
        S = y ? nS.N.COMBINED_ORBS : nS.N.ORB_REWARDS,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(sZ.x);
            return "orbs" === t
                ? S
                : t === nS.N.THREE_P_PROMOTIONS
                  ? nS.N.THREE_P_PROMOTIONS
                  : t === nS.N.YOUTUBE
                    ? nS.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    sK(D ?? "", null != D);
    let { navBarSections: U, activeSectionId: L } = n5([nb.HOME, nb.WHATS_NEW, nb.BEST_OF_NITRO, nb.PLANS, nb.COMPARE]),
        { home: w, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = U,
        W = (0, c.jsxs)("div", {
            ref: i,
            className: u()(n4.kL, n4.Gd, n4.iI, { [n4.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nE, { className: n4.yH }),
                (0, c.jsx)(ny, { navBarSections: U, activeSectionId: L }),
                (0, c.jsxs)("div", {
                    className: n4.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: n4.qY,
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
                            className: n4.So,
                            ref: B.ref,
                            children: (0, c.jsx)(nY, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: n4.KQ,
                            ref: H.ref,
                            children: (0, c.jsx)(nX, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: n4.qc,
                            ref: F.ref,
                            children: (0, c.jsx)(k.L, {
                                innerRef: s,
                                onChange: (e) => f(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(nN, { innerRef: s }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: n4.aC, ref: V.ref, children: (0, c.jsx)(n6.A, {}) }),
                    ],
                }),
                (0, c.jsx)(k.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (O.default.track(eK.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            j(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: n4._Z }),
                }),
                (0, c.jsx)(nv, { ref: l }),
                (0, c.jsx)(nC, { isVisible: !d && !p && E, subscriptionTier: v }),
                (0, c.jsx)(nE, { className: n4.MF }),
            ],
        });
    return (0, c.jsx)(tO.N, {
        theme: n9.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(n4.XG, e), ref: t, children: W }),
    });
};
var at = i(862482),
    ai = i(300349),
    as = i(106512),
    an = i(412260),
    aa = i(662367),
    al = i(374403),
    ar = i(396375),
    ac = i(900797),
    ao = i(847374),
    ad = i(614268);
function au(e) {
    let { className: t } = e;
    return (0, c.jsx)("div", {
        className: u()(ad.i, t),
        children: (0, c.jsx)(ew.E, { type: "early_access", variant: "premium" }),
    });
}
var am = i(904788),
    ax = i(507553);
let ag = "/assets/5b4fec8511c3676a.svg",
    ap = "/assets/0838bda6ecd20d91.svg";
function af(e, t, i) {
    return (0, i$.M)(e) ? t : i;
}
var ah = i(872461);
function aN(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, c.jsxs)(nP.D, {
        onClick: i,
        className: ah.customButton,
        children: [
            t ? eC.intl.string(eC.t.maZaN3) : eC.intl.string(eC.t["37C26f"]),
            t
                ? (0, c.jsx)(ac.t, { size: "md", color: "currentColor", className: ah.arrow })
                : (0, c.jsx)(ao.a, { size: "md", color: "currentColor", className: ah.arrow }),
        ],
    });
}
function aA(e) {
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
        x = (0, c.jsx)("img", { src: n, alt: "", className: u()(a, ah.perksCardArt) }),
        g = "settings" === d;
    return (0, c.jsx)(A.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: u()(ah.perkCard, s, { [ah.settingsCard]: g }),
            children: [
                r ? (0, c.jsx)(am.A, { className: ah.perkCardNewBadge }) : null,
                o ? (0, c.jsx)(au, { className: ah.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, c.jsx)(Z.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: ah.settingsArt,
                          children: x,
                      })
                    : x,
                (0, c.jsxs)("div", {
                    className: g ? ah.settingsText : void 0,
                    children: [
                        (0, c.jsxs)(ek.D, {
                            variant: g ? "heading-md/semibold" : "heading-lg/semibold",
                            className: ah.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: g ? "text-xs/normal" : "text-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: ah.perkCardDescription,
                            children: "function" == typeof i ? i(m) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aj = function (e) {
    let { className: t, isSubscriberNitroHome: s = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                s = (0, i0.Ay)(),
                n = (0, i3.X)("usePerkCards"),
                a = (0, e3.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return er.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, er.EJ)(th.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: eC.intl.string(eC.t.SS87rQ),
                    description: eC.intl.string(eC.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eC.intl.string(eC.t["5cYMu0"]),
                    description: eC.intl.string(eC.t.vxk9va),
                    imageSource: af(s, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eC.intl.string(eC.t["/xvEMy"]),
                    description: eC.intl.string(eC.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eC.intl.string(eC.t.OuItFi),
                    description: eC.intl.string(eC.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eC.intl.string(eC.t["R2IV/Q"]),
                    description: eC.intl.string(eC.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eC.intl.string(eC.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? eC.intl.formatToPlainString(eC.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : eC.intl.formatToPlainString(eC.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = i(766075);
                                (ax.A.setState({ scrollPosition: sU._F.TRY_IT_OUT }),
                                    t(es.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? eC.intl.format(eC.t.aj1pfZ, { onCheckItOutClick: t })
                            : eC.intl.format(eC.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eC.intl.string(eC.t.BUScid),
                    description: eC.intl.string(eC.t.vN6XpQ),
                    imageSource: af(s, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eC.intl.string(eC.t.Bv8Pfk),
                    description: eC.intl.string(eC.t.JMfaTU),
                    imageSource: af(s, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eC.intl.string(eC.t.Bv8Pfk),
                    description: eC.intl.string(eC.t.JMfaTU),
                    imageSource: af(s, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eC.intl.string(eC.t["lGcW+c"]),
                    description: eC.intl.string(eC.t["/fDyO+"]),
                    imageSource: af(s, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eC.intl.string(eC.t["1c+xwT"]),
                    description: eC.intl.string(eC.t.hJG8ZN),
                    imageSource: af(s, ap, ag),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eC.intl.string(eC.t.tzdIwI),
                    description: eC.intl.string(eC.t.hJG8ZN),
                    imageSource: af(s, ap, ag),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eC.intl.string(eC.t.tzdIwI),
                    description: eC.intl.string(eC.t.hJG8ZN),
                    imageSource: af(s, ap, ag),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eC.intl.string(eC.t.RSXQYO),
                    description: eC.intl.string(eC.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eC.intl.string(eC.t["uZt5q/"]),
                    description: eC.intl.string(eC.t.ZK3ZoX),
                    imageSource: af(s, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eC.intl.formatToPlainString(eC.t.jqhAdL, { premiumMaxSize: l }),
                    description: eC.intl.formatToPlainString(eC.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eC.intl.string(eC.t.NaGpTf),
                    description: eC.intl.string(eC.t["A8O/Qw"]),
                    imageSource: af(s, sL, sk),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ah }),
        r = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(ah.perksContainer, t, {
            [ah.partiallyHidden]: s && !n,
            [ah.subscriberNitroHome]: s,
            [ah.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(ek.D, {
                variant: "heading-xxl/semibold",
                className: ah.perksTitle,
                children: s ? eC.intl.string(eC.t.QX14gI) : eC.intl.string(eC.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(ah.perkCardContainer, { [ah.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, c.jsx)(aA, { ...t }, e);
                }),
            }),
            s &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [ah.sizeGizmo]: !n, [ah.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aN, {
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
                        (0, c.jsx)("div", { className: u()(ah.cover, { [ah.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aE = i(615939);
let ab = o.memo(function (e) {
    let { className: t } = e,
        i = [
            {
                id: tG.MORE_EMOJIS_CARD_ID,
                title: eC.intl.string(eC.t["R2IV/Q"]),
                description: eC.intl.string(eC.t.DRMecB),
                imageSource: iH.A,
            },
            {
                id: tG.HD_VIDEO_CARD_ID,
                title: eC.intl.string(eC.t["/mQ5gg"]),
                description: eC.intl.string(eC.t["7WwAXh"]),
                imageSource: iw.A,
            },
            {
                id: tG.LARGE_UPLOADS_CARD_ID,
                title: eC.intl.string(eC.t.nL1WZV),
                description: (0, i8.M6)({
                    legacyCopy: eC.intl.formatToPlainString(eC.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eC.intl.formatToPlainString(eC.t.teOTfv, {
                        maxFileSize: (0, er.EJ)(th.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: aE.A,
            },
            {
                id: tG.PROFILES_CARD_ID,
                title: eC.intl.string(eC.t.KcyDwF),
                description: eC.intl.string(eC.t.Mt3U1W),
                imageSource: ik,
            },
        ];
    return (0, c.jsxs)(Z.B, {
        gap: 16,
        className: u()(ah.settingsPerks, t),
        children: [
            (0, c.jsx)(ek.D, { variant: "heading-xl/semibold", children: eC.intl.string(eC.t.q1u7nQ) }),
            (0, c.jsx)(eL.F, {
                children: (0, c.jsx)("div", {
                    className: ah.settingsGrid,
                    children: i.map((e) => (0, c.jsx)(aA, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var aT = i(370049);
let aC = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nr.ar)();
    if (null == s) return null;
    let r = null != s ? er.Ay.getPremiumPlanItem(s) : null;
    if (
        (er.Ay.isBoostOnlySubscription(s)
            ? (t = eC.intl.string(eC.t.Uj0md3))
            : null != r && (t = er.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, en.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? er.Ay.getSkuIdForPlan(r.planId) : null) === th.pe.TIER_1;
    return (
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tU.Z, {
            className: u()(aT.kL, n, { [aT.He]: l }),
            type: tU.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(t8.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aT.Kk, { [aT.Pt]: l }),
                }),
                (0, c.jsx)(J.E, {
                    variant: "text-sm/medium",
                    color: i,
                    children: d
                        ? eC.intl.format(eC.t["tYuv+T"], {
                              helpdeskArticle: el.A.getArticleURL(eK.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : eC.intl.format(eC.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aR = i(978836);
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
var a_ = i(194509),
    av = i(317587);
let aP = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, e6.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eK.JJy.MARKETING_FLOATING_CTA },
        r = (0, i0.Ay)(),
        o = (0, nA.M)(r);
    return (0, c.jsx)(e8.animated.div, {
        className: u()(av.iE, { [av.H8]: s, [av.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: s ? av.zW : av.iJ,
            children: [
                (0, c.jsx)(ar.A, {
                    color: o ? at.XD.BRAND_INVERTED : void 0,
                    className: u()(av.x6, { [av.Ph]: o }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : av.PJ,
                }),
                (0, c.jsx)(a_.A, { className: av.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var ay = i(386564);
function aS(e) {
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
            ? (0, c.jsx)(ar.A, {
                  color: l ? at.XD.BRAND_INVERTED : void 0,
                  className: u()(ay.x6, ay.Ph, n, { [ay.Sq]: t && a, [ay.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : ay.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(ar.A, {
                  color: l || !a ? at.XD.BRAND_INVERTED : void 0,
                  className: u()(ay.x6, ay.Ph, n, { [ay.Sq]: t && a, [ay.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        d = t && a ? null : (0, c.jsx)(a_.A, { className: u()(ay.x6, n), color: a ? void 0 : at.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(ay.UD, s), children: [o, " ", d] });
}
function aD() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(am.p, { className: ay.zd }),
            (0, c.jsx)(am.p, { className: ay.G }),
            (0, c.jsx)(am.p, { className: ay.zy }),
            (0, c.jsx)(am.p, { className: ay.GX }),
        ],
    });
}
function aM(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = n1();
    return (0, c.jsx)(J.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: u()(ay.h_, { [ay.If]: i, [ay.jn]: s }),
        children: eC.intl.format(eC.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aO = function (e) {
    let { className: t, buttonClassName: i, subscriptionTier: s, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ec.QQ)(),
        o = (0, nr.ar)(),
        d = (0, sQ.b)().length > 0,
        m = eC.intl.string(eC.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(ay.kL, t, { [ay.V1]: !o, [ay.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? ay.I6 : ay.G1,
                    children: [
                        (0, c.jsx)(eL.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(ek.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: ay.DF,
                                  children: (0, c.jsx)(nQ.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aM, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: ay.UD,
                                  children: (0, c.jsx)(a_.A, { className: u()(ay.x6, i), color: at.XD.WHITE }),
                              })
                            : (0, c.jsx)(aS, {
                                  subscriptionTier: s,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(aM, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aD, {}),
            ],
        }),
    });
};
var aU = i(22118),
    aL = i(145359),
    ak = i(377770);
function aG(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aI, { lifted: t }) : null;
}
let aw = () => {
        let { enabled: e } = ai.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, _.P)(I);
        let t = o.useRef(null),
            i = o.useRef(null),
            s = o.useRef(null),
            n = (0, i0.Ay)(),
            a = (0, i$.M)(n),
            [l, r] = o.useState(!1),
            [d, m] = o.useState(!1),
            [g, p] = o.useState(!1),
            f = !l && !d,
            [h, j] = o.useState(!1),
            E = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            b = null != E ? (0, er.EL)(E) : null,
            T = null != b ? er.Ay.getSkuIdForPlan(b.planId) : null,
            C = null !== T && T !== th.pe.TIER_2 ? th.pe.TIER_2 : null,
            R = (0, eu.V)(),
            v = R?.subscriptionTrial?.skuId,
            P = (0, nr.ar)(),
            y = !e && P,
            S = (0, x.bG)([an.A], () => {
                let e = an.A.getMarketingComponentByType(X.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, al.Q)(),
            { analyticsLocations: U } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            j(!0);
        }, []);
        let L = e
            ? (0, c.jsx)("div", {
                  className: ak.OE,
                  children: (0, c.jsx)(k.L, {
                      innerRef: t,
                      onChange: m,
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(nN, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, c.jsx)("div", {
                  className: ak.dY,
                  children: (0, c.jsx)(k.L, {
                      innerRef: t,
                      onChange: (e) => m(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(s1.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, c.jsx)(ar.A, {
                              showIcon: !1,
                              subscriptionTier: th.pe.TIER_0,
                              className: aL.Ph,
                              look: at.pR.OUTLINED,
                              color: at.XD.WHITE,
                              buttonShineClassName: aL.Qr,
                          }),
                          tier2CTAButton:
                              v === th.pe.TIER_0
                                  ? (0, c.jsx)(ar.A, {
                                        showIcon: !1,
                                        subscriptionTier: th.pe.TIER_2,
                                        className: aL.Ph,
                                        look: at.pR.OUTLINED,
                                        color: at.XD.WHITE,
                                        buttonShineClassName: aL.Qr,
                                    })
                                  : (0, c.jsx)(ar.A, {
                                        color: at.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: th.pe.TIER_2,
                                        className: aL.Ph,
                                        textOptions: { textClassName: aL.Ac },
                                        buttonShineClassName: aL.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, c.jsxs)("div", {
            className: u()(ak.kL, { [ak.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aC, {
                    premiumSubscription: E,
                    textColor: e ? "text-default" : void 0,
                    className: u()(ak.R3, { [ak.aZ]: P }),
                }),
                y &&
                    (0, c.jsxs)("div", {
                        className: ak.n1,
                        children: [
                            (0, c.jsx)(aG, { inOfferExperience: P }),
                            (0, c.jsx)(t_.l, {
                                className: ak.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [ak.V1]: !y }),
                    children: [
                        null != S && (0, c.jsx)(as.m, { className: ak.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: ak.iS,
                            children: [
                                !y &&
                                    (0, c.jsx)(t_.l, {
                                        className: ak.ij,
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
                                        ? (0, c.jsx)(tO.N, {
                                              theme: n9.NJ.DARK,
                                              children: (e) =>
                                                  (0, c.jsx)("div", {
                                                      className: e,
                                                      children: (0, c.jsx)(n8, {
                                                          ref: i,
                                                          subscriptionTier: C,
                                                          variant: "settings",
                                                      }),
                                                  }),
                                          })
                                        : (0, c.jsx)(aO, {
                                              ref: i,
                                              subscriptionTier: C,
                                              className: u()({ [ak.p7]: P, [ak.Pw]: P, [ak.Cv]: null != E }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: ak.Ol, children: (0, c.jsx)(aa.I, { component: D }) }),
                L,
                e ? (0, c.jsx)(ab, { className: ak.OE }) : (0, c.jsx)(aj, { className: ak.B_ }),
                (0, c.jsx)("div", {
                    className: ak.aC,
                    children: e
                        ? (0, c.jsx)(n6.A, { variant: "settings" })
                        : (0, c.jsx)(aU.A, { className: ak.JQ, hideCTAs: !0 }),
                }),
                (0, c.jsx)("div", { className: ak.hz }),
                e
                    ? (0, c.jsx)(nC, { isVisible: f && h, subscriptionTier: C, variant: "settings" })
                    : (0, c.jsx)(aP, { isVisible: f && h, subscriptionTier: C, isApplicationHome: !1 }),
                (0, c.jsx)(k.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !g &&
                            (O.default.track(eK.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: U }),
                            p(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: ak._Z }),
                }),
                (0, c.jsx)("img", {
                    src: sJ,
                    className: ak.Kw,
                    width: 112,
                    height: 85,
                    alt: eC.intl.string(eC.t.X4IxWL),
                }),
            ],
        });
    },
    aB = function (e) {
        let { entrypoint: t } = e,
            i = (0, eu.V)(),
            s = (0, ed.O)(),
            n = (0, s0.NF)({ trialOffer: i }),
            a = (0, s0.Tp)(),
            l = (0, x.bG)([s$.A], () => s$.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, s0.QG)(), !0 === a && (0, s0.ne)(l), (null != i || null != s) && (0, L.u1)(i, s));
            }, [i, s, n, a, l]),
            t)
        ) {
            case th.tU.UserSettings:
                return (0, c.jsx)(aw, {});
            case th.tU.ApplicationStoreHome:
                return (0, c.jsx)(ae, {});
            default:
                return null;
        }
    };
var aH = i(531296);
let aF = function (e) {
    let { entrypoint: t = th.tU.UserSettings } = e;
    (0, _.P)(I);
    let i = (0, E.Hp)(),
        { sourceAnalyticsLocations: s, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        C = (0, eu.V)(),
        R = (0, ed.O)(),
        k = (0, b.Y)(th.T7),
        [G, w] = o.useState(!0),
        B = o.useRef(0),
        H = (0, U.YE)(r, th.PremiumTypes.TIER_2);
    ((0, sQ.b)(),
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
            let t = { nitro_basic: th.pe.TIER_0, nitro: th.pe.TIER_2 },
                i = Object.hasOwn(t, e) ? t[e] : void 0;
            null != i &&
                ((V.current = !0),
                (0, P.bG)(eK.BVt.APPLICATION_STORE),
                (0, v.A)({ subscriptionTier: i, analyticsLocations: n }));
        }, [W, F.search, n]));
    let X = (0, x.bG)([y.A], () => y.A.enabled),
        K = t === th.tU.ApplicationStoreHome,
        Z = X
            ? (0, c.jsx)(f.A, {})
            : i
              ? (0, c.jsx)(T.uK, {})
              : K && H
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(sq, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(aH.kL, aH.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !X && !i && K && H
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [K && (0, c.jsx)(h.A, {}), Z] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(aB, { entrypoint: t }) });
};
