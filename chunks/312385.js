(s.d(t, { A: () => lc }), s(323874), s(14289), s(35956), s(205816));
var i,
    n,
    a,
    l,
    r,
    c,
    o,
    d = s(477900),
    u = s(582128),
    m = s(503698),
    x = s.n(m),
    g = s(806163),
    h = s(855986),
    p = s(289873),
    f = s(73825),
    N = s(369143),
    A = s(107834),
    b = s(793574),
    j = s(688810),
    E = s(669815),
    T = s(86379),
    C = s(160946),
    I = s(500597),
    R = s(840251),
    v = s(688151);
let _ = new R.E([], v.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var y = s(611924),
    P = s(778705),
    S = s(976860),
    D = s(351906),
    M = s(287809),
    O = s(295405),
    L = s(166403),
    k = s(129230),
    U = s(474090),
    G = s(739053),
    w = s(831259),
    B = s(516521),
    H = s(961250),
    F = s(622886),
    V = s(851767),
    W = s(917445),
    z = s(131168),
    X = s(511484),
    Y = s(175020),
    K = s(517352),
    Z = s(192308),
    q = s(331322),
    J = s(834730),
    Q = s(403581),
    $ = s(821609),
    ee = s(502572),
    et = s(775602),
    es = s(366999),
    ei = s(531260),
    en = s(780964),
    ea = s(766075),
    el = s(786300),
    er = s(975571),
    ec = s(448645),
    eo = s(89366),
    ed = s(881489),
    eu = s(423814),
    em = s(77528),
    ex = s(641436),
    eg = s(172218);
function eh() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, u.useState)(1),
        i = (0, u.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eg.B)(
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
let ef = function (e) {
    let { text: t } = e;
    return (0, d.jsx)("div", {
        className: ep.i,
        children: (0, d.jsx)(J.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var eN = s(371764),
    eA = s(103411),
    eb = s(65470),
    ej = s(792656),
    eE = s(536637),
    eT = s.n(eE),
    eC = s(496431),
    eI = s(792996),
    eR = s(850292);
let ev = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "body-md/medium" } = e,
        n = (0, eC.A)(eT()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: c } = n,
        o = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: c, unitType: "seconds" },
        ];
    return (0, d.jsxs)("div", {
        className: x()(eR.Xl, s, { [eR.a3]: "body-lg/semibold" === i }),
        children: [
            (0, d.jsx)(J.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: eI.intl.string(eI.t["/ARFVE"]),
            }),
            (0, d.jsx)("div", {
                className: eR.$R,
                children: o.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsxs)(
                                    "div",
                                    {
                                        className: eR.bh,
                                        children: [
                                            (0, d.jsxs)("div", {
                                                className: eR.kB,
                                                children: [
                                                    (0, d.jsx)("div", {
                                                        className: eR.B2,
                                                        children: (0, d.jsx)(J.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, d.jsx)("div", {
                                                        className: eR.B2,
                                                        children: (0, d.jsx)(J.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, d.jsx)(J.E, {
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
                                    (0, d.jsx)(J.E, {
                                        className: eR.cV,
                                        variant: "body-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === o.length - 1, i),
                ),
            }),
        ],
    });
};
var e_ = s(473702),
    ey = s(778712),
    eP = s(97808),
    eS = s(609425),
    eD = s(16371),
    eM = s(854627),
    eO = s(427262),
    eL = s(938767);
function ek() {
    let e = (0, h.bG)([M.default], () => M.default.getCurrentUser()),
        t = (0, eS.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eM.A)({ userId: e?.id, size: ey._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eO.mG)(e);
    return (0, d.jsxs)("div", {
        className: eL.kL,
        children: [
            (0, d.jsx)("div", {
                className: eL.my,
                children: (0, d.jsx)(eP.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: ey._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, d.jsx)("div", { className: eL.QC, children: (0, d.jsx)(eD.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eU = s(707554),
    eG = s(534514);
let ew = function (e) {
    let { className: t, color: s = "text-strong", variant: i = "nitro-lg", children: n } = e;
    return (0, d.jsx)(eU.F, {
        forceLevel: 1,
        children: (0, d.jsx)(eG.D, { className: t, variant: i, color: s, children: n }),
    });
};
var eB = s(805251),
    eH = s(969935),
    eF = s(132506),
    eV = s(610709),
    eW = s(478016),
    ez = s(318254),
    eX = s(646514),
    eY = s(626031),
    eK = s(197630);
s(232198);
var eZ = s(652215),
    eq = s(957457);
function eJ(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eK.xb.ORBS
          ? (0, d.jsx)(eQ, { nRewardsGranted: t, className: i })
          : s === eK.xb.DISCOUNT
            ? (0, d.jsx)(e$, { nRewardsGranted: t, className: i })
            : null;
}
function eQ(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 5e3 * t,
        [n, a] = u.useState(0);
    return (
        u.useEffect(() => {
            a(i);
        }, [i]),
        (0, d.jsxs)(q.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: s,
            children: [
                (0, d.jsxs)("div", {
                    className: eq.u,
                    "aria-label": String(i),
                    children: [
                        (0, d.jsx)(ez.OrbsIcon, { size: "xs", color: eX.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, d.jsx)(eY.t, {
                            value: n,
                            onValueChange: eZ.tEg,
                            onValueReached: eZ.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "body-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, d.jsx)(J.E, {
                    variant: "body-sm/medium",
                    color: "text-strong",
                    children: eI.intl.string(eI.t.UhguER),
                }),
            ],
        })
    );
}
function e$(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, d.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": eI.intl.formatToPlainString(eI.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, d.jsx)(eW.CheckmarkSmallIcon, { size: "md", color: eX.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, d.jsx)(J.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eI.intl.format(eI.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e0 = s(303682),
    e1 = s(758836),
    e2 = s(558992);
function e3(e) {
    let { className: t } = e,
        {
            referralSentUsers: s,
            nReferralsSent: i,
            hasEligibleFriends: n,
            allSent: a,
            headingText: l,
            bodyText: r,
            referralStatus: c,
            isEligibleForIncentive: o,
            referralIncentiveRewardType: u,
            useAltReferralCardArt: m,
            shouldShowSpendOrbsCta: g,
        } = (0, eF.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, d.jsxs)("div", {
        className: x()(e2.kL, t),
        children: [
            (0, d.jsx)("div", {
                className: e2.G3,
                children: (0, d.jsx)(eV.fx, {
                    nReferralsSent: i,
                    imageSize: 55,
                    backgroundClassName: e2.HP,
                    ringClassName: e2.pZ,
                    referralRewardType: u,
                    useAltReferralCardArt: o && m,
                }),
            }),
            (0, d.jsxs)("div", {
                className: x()(e2.IH, o && e2.zD),
                children: [
                    o &&
                        (0, d.jsx)("div", {
                            className: e2.aZ,
                            children: (0, d.jsx)(eB.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, d.jsxs)("div", {
                        className: e2.n4,
                        children: [
                            (0, d.jsx)(J.E, { variant: "body-md/semibold", color: "text-strong", children: l }),
                            (0, d.jsx)(J.E, {
                                variant: o ? "body-sm/medium" : "body-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    o
                        ? (0, d.jsxs)("div", {
                              className: e2.Wp,
                              children: [
                                  (0, d.jsx)(eV.ZP, { referralSentUsers: s }),
                                  (0, d.jsx)(eJ, { nRewardsGranted: c.numRewardGranted, referralRewardType: u }),
                              ],
                          })
                        : (0, d.jsx)(eV.ZP, { referralSentUsers: s, className: e2.t7 }),
                ],
            }),
            (0, d.jsx)($.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? eI.intl.string(eI.t.iw5Ccc) : eI.intl.string(eI.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, eH.Cz)({
                              tab: e1.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: b.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eV.jM)({
                              startingScreen: e0.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e6 = s(164636),
    e7 = s(676279),
    e5 = s(120692),
    e8 = s(717421),
    e9 = s(396583),
    e4 = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    te = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tt = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: s,
            yAxisAnimationData: i,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: l = !1,
            animationSpeedScale: r = 1,
            children: c,
        } = e,
        o = (0, e8.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, u.useState)(1),
        h = (0, e8.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [p, f] = (0, u.useState)(1),
        N = (0, e8.z)(
            null != t
                ? {
                      from: { blur: p > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: p > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, u.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [b, j] = (0, u.useState)(0),
        [E, T] = (0, u.useState)(1),
        C = (0, e8.z)({ xOffset: b, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e9.A)(() => {
        (j(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? c
        : (0, d.jsx)(e5.animated.div, {
              style: {
                  transform: o.y?.to((e) => {
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
                  scale: h.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: c,
          });
};
var ts = s(382168);
let ti = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: s,
        boltContainerClassName: i,
        carContainerClassName: n,
        hammerContainerClassName: a,
        keyContainerClassName: l,
        starContainerClassName: r,
        boltAssetClassName: c,
        carAssetClassName: o,
        hammerAssetClassName: u,
        keyAssetClassName: m,
        starAssetClassName: g,
        animationSpeedScale: h = 1,
        blurScale: p = 1,
        animateStar: f = !0,
    } = e;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            null != i &&
                (0, d.jsx)("div", {
                    className: x()(ts.nJ, i),
                    children: (0, d.jsx)(tt, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e4.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: te.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: c,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, d.jsx)("div", {
                    className: x()(ts.IN, n),
                    children: (0, d.jsx)(tt, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e4.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: te.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: o,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, d.jsx)("div", {
                    className: x()(ts.Gj, a),
                    children: (0, d.jsx)(tt, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e4.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: te.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: u,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, d.jsx)("div", {
                    className: x()(ts.FV, l),
                    children: (0, d.jsx)(tt, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e4.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: te.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, d.jsx)("div", {
                    className: x()(ts.E1, r),
                    children: (0, d.jsx)(tt, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: e4.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: te.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t || !f,
                        animationSpeedScale: h,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
var tn = s(607470),
    ta = s(562915);
let tl =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tr = function (e) {
        let {
                supportHEVCAlpha: t,
                isMotionReduced: s,
                containerVisibilityPercentage: i,
                containerClassName: n,
                assetClassName: a,
                animationSpeedScale: l = 1,
                variant: r = "default",
            } = e,
            c = "settings" === r;
        return s || c
            ? (0, d.jsx)("div", {
                  className: n,
                  children: (0, d.jsx)("img", {
                      src: c
                          ? ta.A
                          : "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, d.jsx)("div", {
                  className: n,
                  children: (0, d.jsx)(tt, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: e4.SINE },
                      parallaxAnimationData: {
                          pathDirection: te.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: l,
                      children: t
                          ? (0, d.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, d.jsx)(
                                tn.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, d.jsx)("source", { src: tl }),
                                },
                                tl,
                            ),
                  }),
              });
    },
    tc = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: s,
                flyingWumpusAssetClassName: i,
                boltContainerClassName: n,
                carContainerClassName: a,
                hammerContainerClassName: l,
                keyContainerClassName: r,
                starContainerClassName: c,
                boltAssetClassName: o,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: h = 1,
            } = e,
            p = (0, e6.bG)([et.Ay], () => et.Ay.useReducedMotion),
            f = (0, e7.TM)();
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(tr, {
                    supportHEVCAlpha: f,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: h,
                }),
                (0, d.jsx)(ti, {
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: n,
                    carContainerClassName: a,
                    hammerContainerClassName: l,
                    keyContainerClassName: r,
                    starContainerClassName: c,
                    boltAssetClassName: o,
                    carAssetClassName: u,
                    hammerAssetClassName: m,
                    keyAssetClassName: x,
                    starAssetClassName: g,
                    animationSpeedScale: h,
                }),
            ],
        });
    };
var to = s(942663);
let td = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, d.jsx)(tc, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: x()(to.wG, s && to.Vx),
        flyingWumpusAssetClassName: x()(to.lu, s && to.ov),
        boltContainerClassName: x()(to.nJ, s && to.Wc),
        hammerContainerClassName: x()(to.Gj, s && to.XA),
        keyContainerClassName: x()(to.FV, s && to.oZ),
        starContainerClassName: x()(to.E1, s && to.LN),
        boltAssetClassName: x()(to.j7, s && to.QN),
        hammerAssetClassName: x()(to.Wv, s && to.B9),
        keyAssetClassName: x()(to.rs, s && to.I1),
        starAssetClassName: x()(to.OY, s && to.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tu = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tm = s(454273);
let tx = function (e) {
    let t,
        s,
        {
            className: i,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: l,
            shouldShowReferralProgressBar: r,
            marketingBanner: c,
            heroButtons: o,
        } = e,
        { visibilityPercentageRef: u, visibilityPercentage: m } = eh(!(0, h.bG)([et.Ay], () => et.Ay.useReducedMotion)),
        g =
            ((t = { [tu.MORNING]: eI.t["Wvc/I+"], [tu.AFTERNOON]: eI.t["d+0STx"], [tu.EVENING]: eI.t.CqsxKI }),
            eI.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tu.MORNING
                        : s >= 12 && s < 17
                          ? tu.AFTERNOON
                          : tu.EVENING
                ],
            )),
        p = c ?? (r ? (0, d.jsx)(e3, {}) : null);
    return (0, d.jsx)("div", {
        className: x()(tm.kL, tm.Eg, i),
        ref: l,
        children: (0, d.jsxs)("div", {
            className: x()(tm.W2, tm.HQ),
            ref: u,
            children: [
                (0, d.jsxs)(q.B, {
                    align: "start",
                    gap: 32,
                    className: tm.ZU,
                    children: [
                        a && n,
                        (0, d.jsxs)(q.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, d.jsxs)(q.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, d.jsx)(ew, { color: "text-default", variant: "nitro-md", children: g }),
                                        (0, d.jsx)(ek, {}),
                                    ],
                                }),
                                o,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, d.jsx)("div", {
                    className: tm.y3,
                    children: (0, d.jsx)(td, { containerVisibilityPercentage: m, compact: null == p }),
                }),
            ],
        }),
    });
};
var tg = s(549926);
let th = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, d.jsx)(tc, {
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
var tp = s(499126);
let tf = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, d.jsx)(tc, {
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
var tN = s(682901);
function tA(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, ed.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eh(!(0, h.bG)([et.Ay], () => et.Ay.useReducedMotion));
    return (0, d.jsx)("div", {
        className: x()(tm.kL, s),
        ref: i,
        children: (0, d.jsxs)("div", {
            className: tm.Gs,
            ref: a,
            children: [
                (0, d.jsxs)(q.B, {
                    align: "start",
                    gap: 24,
                    className: tm.E2,
                    children: [
                        (0, d.jsxs)(q.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, d.jsx)(ef, { text: eI.intl.string(eI.t.yhldRB) }),
                                (0, d.jsx)(ew, { children: eI.intl.format(eI.t.FwjP6W, { days: n }) }),
                                (0, d.jsx)("div", {
                                    className: tm.X8,
                                    children: (0, d.jsx)(J.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eI.intl.string(eI.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, d.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tm.oF,
                            children: [
                                (0, d.jsx)(ej.A, {
                                    size: "md",
                                    buttonTextOverride: eI.intl.string(eI.t["2+luBl"]),
                                    iconOverride: Q.NitroWheelIcon,
                                    variantOverride: "expressive",
                                }),
                                (0, d.jsx)($.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eI.intl.string(eI.t.Af7ye6),
                                    onClick: () => (0, ea.openUserSettings)(en.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, d.jsx)("div", { className: tm.Hk, children: (0, d.jsx)(tf, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tb(e) {
    let {
            className: t,
            buttonVisibilityRef: i,
            userDiscountOffer: n,
            discountedPrice: a,
            premiumSubscription: l,
            analyticsLocations: r,
            headingTop: c,
            showPill: o,
            shouldShowReferralProgressBar: u,
            marketingBanner: m,
        } = e,
        { visibilityPercentageRef: g, visibilityPercentage: p } = eh(!(0, h.bG)([et.Ay], () => et.Ay.useReducedMotion)),
        f = m ?? (u ? (0, d.jsx)(e3, {}) : null);
    return (0, d.jsx)("div", {
        className: x()(tm.kL, tm.Eg, t),
        ref: i,
        children: (0, d.jsxs)("div", {
            className: x()(tm.W2, tm.HQ),
            ref: g,
            children: [
                (0, d.jsxs)(q.B, {
                    align: "start",
                    gap: 32,
                    className: x()(tm.ZU, tm.GW),
                    children: [
                        o && c,
                        null != n.expiresAt &&
                            (0, d.jsx)(ev, {
                                expiresAt: n.expiresAt.toISOString(),
                                digitTextVariant: "body-lg/semibold",
                            }),
                        (0, d.jsxs)(q.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, d.jsx)(ew, {
                                    children: eI.intl.format(eI.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, d.jsx)(J.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eI.intl.format(eI.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, ec.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, d.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, d.jsx)($.$, {
                                    variant: "expressive",
                                    icon: Q.NitroWheelIcon,
                                    size: "md",
                                    text: eI.intl.string(eI.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = e_.g.CONFIRM_DISCOUNT),
                                            void (0, Z.mM)(async () => {
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
                                                    (0, d.jsx)(t, {
                                                        ...s,
                                                        analyticsLocations: r,
                                                        initialStep: e,
                                                        premiumSubscription: l,
                                                    });
                                            })
                                        );
                                    },
                                }),
                                (0, d.jsx)(eb.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eI.intl.string(eI.t["3KomGa"]),
                                }),
                            ],
                        }),
                        f,
                    ],
                }),
                (0, d.jsx)("div", {
                    className: x()(tm.y3, tm.Xx),
                    children: (0, d.jsx)(th, { containerVisibilityPercentage: p }),
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
            userDiscountOffer: c,
            discountedPrice: o,
            buttonVisibilityRef: u,
        } = tT(),
        { analyticsLocations: m } = (0, j.Ay)(b.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, ex.u)(K.oW.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eZ.Dmq.CANCELED,
        h = null;
    if (null != x) {
        let { surface: e, id: t, promotionId: s, componentType: i } = x;
        h = (0, d.jsx)(eN.x, {
            componentId: t,
            componentType: i,
            promotionId: s,
            promotionBannerMarketingComponentFields: e,
        });
    }
    let p = (0, em.V)(),
        f = (0, eu.O)(),
        N = (0, X.U9)(f, tN.pe.TIER_2) ? tN.pe.TIER_2 : void 0,
        A = null != r && r.status !== eZ.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, ei.A)(),
        T = E.isFractionalPremiumActive && !A && null == h && !l;
    if (s) return (0, d.jsx)(tA, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, d.jsxs)("div", {
                  className: tm.UJ,
                  children: [
                      (0, d.jsx)(ej.A, { size: "md", subscriptionTier: p?.subscriptionTrial?.skuId ?? N }),
                      (0, d.jsx)(eb.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eI.intl.string(eI.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, d.jsx)(tx, {
            className: t,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: u,
            shouldShowReferralProgressBar: i,
            marketingBanner: h,
            heroButtons: e,
        });
    }
    return l && null != c && null != r
        ? (0, d.jsx)(tb, {
              className: t,
              buttonVisibilityRef: u,
              userDiscountOffer: c,
              discountedPrice: o,
              premiumSubscription: r,
              analyticsLocations: m,
              headingTop: n,
              showPill: a,
              shouldShowReferralProgressBar: i,
              marketingBanner: h,
          })
        : (0, d.jsx)(tx, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: i,
              marketingBanner: h,
          });
}
let [tE, tT] = (0, el.A)(),
    tC = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(b.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, ed.ds)(),
            r = (0, eo.QQ)(),
            c = (0, h.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
            o = null != c && c.status === eZ.Dmq.CANCELED && null != i,
            m = r && !o,
            x = eI.intl.string(eI.t.qYKftX),
            g = (0, eA.m)(),
            { fractionalState: p, endsAt: f } = (0, ei.A)(),
            N = (0, es.Ay)(f, es.yE.CREDITS_ENDS_IN),
            A = p !== tN.xc.NONE && !l;
        A && (m = !0);
        let E = u.useMemo(() => {
                if (!A) return (0, d.jsx)(ef, { text: x });
                let e = eI.intl.format(eI.t["yR+oDD"], {
                    helpCenterLink: er.A.getArticleURL(eZ.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
                return (0, d.jsx)(ee.A, {
                    text: e,
                    "aria-label": e.toString(),
                    tooltipClassName: tm.YL,
                    position: "right",
                    children: (e) =>
                        (0, d.jsx)("div", {
                            ...e,
                            className: tm.V_,
                            children: (0, d.jsx)("div", { className: tm.eL, children: (0, d.jsx)(ef, { text: N }) }),
                        }),
                });
            }, [A, x, N]),
            T = u.useMemo(
                () => ({
                    headingTop: E,
                    showPill: m,
                    shouldShowChurnVariant: o,
                    premiumSubscription: c,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                }),
                [E, m, o, c, i, n, s],
            );
        return (0, d.jsx)(j.f5, {
            value: a,
            children: (0, d.jsx)(tE.Provider, {
                value: T,
                children: (0, d.jsx)(tj, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var tI = s(820284),
    tR = s(742589),
    tv = s(392943),
    t_ = s(521440),
    ty = s(603202),
    tP = s(673992);
let tS = function () {
    return (0, d.jsx)(tI.A, {
        section: eZ.JJy.NAVIGATION,
        children: (0, d.jsx)(tR.A, {
            className: x()(ty.TQ, tP.C$),
            transparent: !0,
            role: "navigation",
            children: (0, d.jsxs)("div", {
                className: ty.Wc,
                children: [
                    (0, d.jsxs)("div", {
                        className: tP.wk,
                        children: [
                            (0, d.jsx)(Q.NitroWheelIcon, { colorClass: tP.tr }),
                            (0, d.jsx)("span", {
                                role: "img",
                                "aria-label": eI.intl.string(eI.t.Ipxkog),
                                className: tP.Ss,
                                children: (0, d.jsx)(tv.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, d.jsxs)("div", {
                        className: ty.MQ,
                        children: [
                            (0, d.jsx)(t_.l, { size: "sm", location: b.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, d.jsx)(eb.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tD = s(325499),
    tM = s(613412),
    tO = s(885574),
    tL = s(43990),
    tk = s(993077),
    tU = s(139286),
    tG = s(872725),
    tw = s(920050),
    tB = s(51965),
    tH = s(375776),
    tF = s(727811),
    tV = s(222652),
    tW = s(831768),
    tz = s(934353);
function tX(e) {
    let { openRewardModal: t } = e,
        s = (0, tV.z)();
    if (s.kind === tV.N.SUBSCRIBE)
        return (0, d.jsxs)("div", {
            className: tz.R$,
            children: [
                (0, d.jsx)(ej.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tN.pe.TIER_2,
                }),
                (0, d.jsx)($.$, { variant: "secondary", size: "md", text: eI.intl.string(eI.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === tF.P.CLAIMED
            ? { text: eI.intl.string(tW.default.Plwzgf) }
            : { text: eI.intl.string(eI.t.hvVgAZ) };
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)("div", {
                className: tz.R$,
                children: [
                    (0, d.jsx)(tB.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, d.jsx)($.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === tF.P.CLAIM_IN_PROGRESS &&
                (0, d.jsxs)("div", {
                    className: tz.ed,
                    children: [
                        (0, d.jsx)(tO.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, d.jsx)(J.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: eI.intl.string(tW.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function tY(e) {
    let { glowing: t = !1 } = e;
    (0, tU.A)({
        type: tM.ImpressionTypes.VIEW,
        name: tM.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: tw.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(b.A.CROISSANT_PREMIUM_HERO_CARD),
        n = u.useCallback(() => {
            (0, Z.mM)(async () => {
                let { default: e } = await Promise.all([s.e(878140), s.e(532203)]).then(s.bind(s, 15654));
                return (t) => (0, d.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, d.jsx)(tL.N, {
        theme: eZ.NJ8.DARK,
        children: (e) =>
            (0, d.jsx)(j.f5, {
                value: i,
                children: (0, d.jsx)("div", {
                    className: x()(e, tz.kL),
                    children: (0, d.jsx)(tG.A, {
                        cardType: tk.s.CUSTOM,
                        cardClassName: tz.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, d.jsxs)("div", {
                            className: tz.XF,
                            children: [
                                (0, d.jsxs)("div", {
                                    className: tz.j,
                                    children: [
                                        (0, d.jsx)("div", { className: tz._g }),
                                        (0, d.jsx)("div", { className: tz.$h }),
                                        (0, d.jsx)("div", { className: tz.Rv }),
                                        (0, d.jsx)("div", { className: tz.Lw }),
                                        (0, d.jsx)("div", { className: tz.mR }),
                                    ],
                                }),
                                (0, d.jsxs)("div", {
                                    className: tz.Qs,
                                    children: [
                                        (0, d.jsx)("img", {
                                            className: tz.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, d.jsx)(eG.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: tz.DD,
                                            children: eI.intl.string(tW.default.RGT513),
                                        }),
                                        (0, d.jsx)(J.E, {
                                            variant: "body-md/normal",
                                            color: "text-strong",
                                            className: tz.h_,
                                            children: eI.intl.string(tW.default["+pTnsf"]),
                                        }),
                                        (0, d.jsx)(tX, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var tK = s(706778),
    tZ = s(7684),
    tq = s(112992);
let tJ = () =>
    (0, d.jsxs)("div", {
        className: tZ.X,
        children: [
            (0, d.jsx)("div", {
                className: tZ.W,
                children: (0, d.jsx)(tO.CircleInformationIcon, { size: "xxs", color: eX.A.colors.ICON_MUTED }),
            }),
            (0, d.jsx)(J.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: eI.intl.string(tW.default.Fs74z9),
            }),
        ],
    });
function tQ(e) {
    let { className: t, containerClassName: s, glowing: i } = e,
        n = (0, tV.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === tV.N.SUBSCRIBE
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
        r = n.kind === tV.N.DEFAULT && n.claimStatus === tF.P.CLAIM_IN_PROGRESS;
    return (0, d.jsx)(tK.S, {
        id: tw.XBOX_PREMIUM_PERK_CARD_ID,
        title: eI.intl.string(tW.default.UVL9tD),
        description: eI.intl.string(tW.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, d.jsx)(tJ, {}) : void 0,
        className: t,
        containerClassName: s,
        glowing: i,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, d.jsx)("img", { src: tq.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function t$(e) {
    let { analyticsLocations: t } = (0, j.Ay)(b.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, d.jsx)(j.f5, { value: t, children: (0, d.jsx)(tQ, { ...e }) });
}
var t0 = s(744082),
    t1 = s(261995),
    t2 = s(722793),
    t3 = s(700556),
    t6 = s(821874);
function t7(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = t6.Ui;
    return (0, d.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, d.jsx)("div", { className: x()(r, null != n && t3.Jx, l), children: a }) : null,
        ],
    });
}
var t5 = s(517846),
    t8 = s(509434),
    t9 = s(669700),
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
    sl = s(555393),
    sr = s(325652),
    sc = s(852218),
    so = s(52530),
    sd = s(670328);
let su = (0, ss.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sm = s(612413),
    sx = s(188275);
let sg = new Date(Date.UTC(2026, 10, 5));
s(675772);
var sh = s(749962),
    sp = s(691450),
    sf = s(647024),
    sN = s(524698),
    sA = s(635088),
    sb = s(679502),
    sj = s(762493);
let sE = "xgpp";
function sT(e) {
    let { card: t, backgroundAssetUrl: s, blurTint: i, glowing: n, autoClickCta: a } = e;
    return (0, d.jsx)("div", {
        className: t3.JE,
        children: (0, d.jsx)(tK.S, {
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
function sC(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tD.b)("premium_subscriber_home_rewards");
    (0, t0.A)(tN.tv);
    let {
            expiredCallOfDutyCard: n,
            logitechCard: a,
            rustCard: l,
            steelseriesCard: r,
            youtubeCard: c,
            macaronCard: o,
            codeBlurpleCard: m,
        } = (function () {
            let e,
                t,
                { analyticsLocations: s } = (0, j.Ay)(b.A.PREMIUM_MARKETING_PERK_CARD),
                i = ((e = (0, so.eh)()), (t = (0, so.fR)()), null != e ? e : t),
                n = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = si.useConfig({ location: t });
                    return s;
                })({ location: "useHardwarePartnerPerkCards" }),
                a = (0, sa.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                l = sn.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                r = (0, sm.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                c = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = su.useConfig({ location: t });
                    return s;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                o = null === (0, sl.N)(),
                m = (0, t1.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: x, nDaysInMonth: g } = (0, u.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, u.useMemo)(() => {
                let e =
                        n && null == i
                            ? {
                                  id: tw.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: eI.intl.string(sh.default["IcD/7p"]),
                                  description: eI.intl.formatToPlainString(sh.default.hausFi, {
                                      date: new Intl.DateTimeFormat(eI.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(st),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: sr.L.EXPIRED,
                                  pillText: eI.intl.string(sh.default.fxF0Jz),
                                  caption: (0, d.jsx)("img", { src: sA.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = a
                        ? {
                              id: tw.LOGITECH_3PP_CARD_ID,
                              title: eI.intl.string(sp.default.OlObRa),
                              description: eI.intl.format(sp.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: er.A.getArticleURL(eZ.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: x.getDate() / g,
                              ctaText: eI.intl.string(eI.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sd.P)({
                                      partnerIds: [sc.XY],
                                      title: eI.intl.string(sp.default["2I7nK+"]),
                                      subtitle: eI.intl.format(sp.default.W8jOD0, {
                                          termsUrl: er.A.getArticleURL(eZ.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: s,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, d.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: sc.XY },
                              ctaDisabled: o,
                              ctaLoading: o,
                          }
                        : null,
                    u = l
                        ? {
                              id: tw.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: eI.intl.string(eI.t.m7PucM),
                              description: eI.intl.format(eI.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, d.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: x.getDate() / g,
                              ctaText: eI.intl.string(eI.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sd.P)({
                                      partnerIds: [sc.KS],
                                      title: eI.intl.string(eI.t["7ioAjs"]),
                                      subtitle: eI.intl.format(eI.t.LOYRxB, {
                                          helpCenterLink: er.A.getArticleURL(eZ.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: s,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: sc.KS },
                              ctaDisabled: o,
                              ctaLoading: o,
                          }
                        : null;
                return {
                    expiredCallOfDutyCard: e,
                    logitechCard: t,
                    rustCard: c
                        ? {
                              id: tw.RUST_3PP_CARD_ID,
                              title: eI.intl.string(sf.default.gQ1ctg),
                              description: eI.intl.format(sf.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(eI.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(sg),
                                  termsUrl: (0, sx.X3)(sx.IG),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: eI.intl.string(eI.t.y2b7CA),
                              caption: (0, d.jsx)("img", {
                                  src: (0, se.YE)(sx.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: eI.intl.string(sf.default.NmBRGV),
                              ctaIcon: t8.LinkExternalSmallIcon,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t4.default)({ applicationId: sx.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: o,
                              ctaLoading: o,
                          }
                        : null,
                    steelseriesCard: u,
                    youtubeCard: r
                        ? {
                              id: tw.YOUTUBE_3PP_CARD_ID,
                              title: eI.intl.string(sN.default["BdIVB+"]),
                              description: eI.intl.format(sN.default["cCl3+a"], {
                                  discountPercentage: 20,
                                  months: 6,
                                  helpCenterUrl: er.A.getArticleURL(eZ.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, d.jsx)("img", { src: sb.A, alt: "YouTube Premium" }),
                              ctaText: eI.intl.string(sh.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sd.P)({
                                      partnerIds: [sc.NC],
                                      analyticsLocations: s,
                                      title: eI.intl.string(sN.default.TDZUui),
                                      subtitle: eI.intl.format(sN.default.dueYf1, {
                                          helpCenterUrl: er.A.getArticleURL(eZ.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          t9.Ay.fireSurveyAction(t5.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: sc.NC },
                              ctaDisabled: o,
                              ctaLoading: o,
                          }
                        : null,
                    macaronCard: m,
                    codeBlurpleCard: i,
                };
            }, [m, i, s, n, x, a, g, l, c, r, o]);
        })(),
        { phase: g } = (0, t1.vc)({ location: "NitroRewardsSection" }),
        h =
            null != o
                ? {
                      card: o,
                      backgroundAssetUrl:
                          g === t2.H.PHASE_ONE
                              ? "https://cdn.discordapp.com/assets/content/dacaa1d04c91ae0beefcbce25518899d11a943e10437ded70a6d594a03cf9535.png"
                              : "https://cdn.discordapp.com/assets/content/d6bc70e4b19392250948d59f11fcdb7360b2ed7fa636f8d9ab30c199a728a7c6.png",
                      blurTint: "#001E73",
                  }
                : null != c
                  ? {
                        card: c,
                        backgroundAssetUrl:
                            "https://cdn.discordapp.com/assets/content/6936886d1c55035bd3f56b7594d80dd08e7d3e859be8630f3ef667b338a1dd78.webp",
                        blurTint: "#3E000C",
                    }
                  : null,
        p = null != h ? h.card.id : null,
        f = i && null == h,
        N =
            i ||
            null != n ||
            null != a ||
            null != l ||
            null != r ||
            null != m ||
            (null != o && o.id !== p) ||
            (null != c && c.id !== p),
        A = null;
    return (null != h
        ? (A = (0, d.jsx)(sT, {
              card: h.card,
              backgroundAssetUrl: h.backgroundAssetUrl,
              blurTint: h.blurTint,
              glowing: t === sE || s === h.card.id,
              autoClickCta: s === h.card.id,
          }))
        : f && (A = (0, d.jsx)("div", { className: t3.JE, children: (0, d.jsx)(tY, { glowing: t === sE }) })),
    null != A || N)
        ? (0, d.jsx)(t7, {
              id: sE,
              sectionClassName: x()(sj.uW, sj.Uv, sj.qr),
              heading: (0, d.jsx)(eG.D, {
                  variant: "nitro-sm",
                  className: x()(t6.R_, t3.U6),
                  children: eI.intl.string(eI.t.NG1e6l),
              }),
              beforeGrid: A,
              grid: N
                  ? (0, d.jsxs)(d.Fragment, {
                        children: [
                            null != m && (0, d.jsx)(tK.S, { ...m, containerClassName: t6.Nr, glowing: s === m.id }),
                            null != o &&
                                o.id !== p &&
                                (0, d.jsx)(tK.S, {
                                    ...o,
                                    containerClassName: t6.Nr,
                                    glowing: s === o.id,
                                    autoClickCta: s === o.id,
                                }),
                            null != c &&
                                c.id !== p &&
                                (0, d.jsx)(tK.S, {
                                    ...c,
                                    containerClassName: t6.Nr,
                                    glowing: s === c.id,
                                    autoClickCta: s === c.id,
                                }),
                            null != l && (0, d.jsx)(tK.S, { ...l, containerClassName: t6.Nr, glowing: s === l.id }),
                            i &&
                                (0, d.jsx)(t$, {
                                    containerClassName: t6.Nr,
                                    glowing: s === tw.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, d.jsx)(tK.S, { ...a, containerClassName: t6.Nr, glowing: s === a.id }),
                            null != r && (0, d.jsx)(tK.S, { ...r, containerClassName: t6.Nr, glowing: s === r.id }),
                            null != n && (0, d.jsx)(tK.S, { ...n, containerClassName: t6.Nr, glowing: s === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var sI = s(313133),
    sR = s(67423);
let sv = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(b.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e8.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, d.jsx)(e5.animated.div, {
        className: x()(sI.iE, { [sI.q4]: !t }),
        style: r,
        children: (0, d.jsxs)("div", {
            className: sI.iJ,
            children: [
                (0, d.jsx)("img", { alt: "", src: sR, className: sI.oU }),
                (0, d.jsxs)("div", {
                    className: sI.iQ,
                    children: [
                        (0, d.jsx)(eG.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: eI.intl.format(eI.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, d.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(eI.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, ec.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, d.jsx)($.$, {
                    variant: "expressive",
                    icon: Q.NitroWheelIcon,
                    size: "md",
                    text: eI.intl.string(eI.t.zrCzVB),
                    onClick: () =>
                        void (0, Z.mM)(async () => {
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
                                (0, d.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: e_.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var s_ = s(761508),
    sy = s(151869),
    sP = s(62617),
    sS = s(387103);
function sD(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: sS.A,
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
let sM =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function sO(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: sM,
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sL = s(93712);
function sk(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: sL.A,
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sU = s(345394);
function sG(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: sU.A,
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sw = s(78211);
function sB(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sH = s(95278);
function sF(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sV(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sW = s(996682);
function sz(e) {
    let { color: t = eX.A.colors.ICON_STRONG, "aria-label": s, "aria-hidden": i, role: n, width: a, height: l } = e,
        r = u.useMemo(() => (0, sP.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, d.jsxs)("svg", {
        ...(0, sW.A)({ "aria-label": s, "aria-hidden": i, role: n }),
        style: r,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, d.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, d.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, d.jsx)("defs", {
                children: (0, d.jsx)("clipPath", {
                    id: "a",
                    children: (0, d.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function sX(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sY = s(78701);
function sK(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: sY.A,
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sZ = s(462887),
    sq = s(736653),
    sJ = s(259065),
    sQ = s(206835),
    s$ = s(591179),
    s0 = s(462463),
    s1 = s(219882),
    s2 = s(105909),
    s3 = s(208223),
    s6 = s(696292),
    s7 = s(914313),
    s5 = s(321538),
    s8 = s(892227),
    s9 = s(81466),
    s4 = s(17268),
    ie = s(749012);
let it = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, F.F)();
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, s8.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, d.jsxs)("div", {
        className: ie.kL,
        children: [
            null != s &&
                (0, d.jsxs)("div", {
                    className: ie.nM,
                    children: [
                        (0, d.jsxs)("div", {
                            className: ie.Pf,
                            children: [
                                (0, d.jsx)(s9.CalendarIcon, { size: "sm", color: eX.A.colors.TEXT_DEFAULT }),
                                (0, d.jsx)(J.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eI.intl.string(s4.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, d.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(s4.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, d.jsx)("div", { className: ie.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, d.jsxs)("div", {
                    className: ie.nM,
                    children: [
                        (0, d.jsxs)("div", {
                            className: ie.Pf,
                            children: [
                                (0, d.jsx)(ez.OrbsIcon, { size: "sm", color: eX.A.colors.TEXT_DEFAULT }),
                                (0, d.jsx)(J.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eI.intl.string(s4.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, d.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(s4.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var is = s(403362);
let ii = (0, ss.mj)({
        name: "2026-11-norbs",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ia = (0, ss.mj)({
        name: "2026-11-norbs-2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    il = new Date(2026, 11, 21);
var ir = (((l = {}).DEFAULT = "default"), (l.DEPRECATED = "deprecated"), (l.REMOVED = "removed"), l),
    ic = s(212739),
    io =
        (((r = {}).DEFAULT = "default"),
        (r.DEPRECATED = "deprecated"),
        (r.DEPRECATED_XBOX = "deprecated_xbox"),
        (r.REMOVED = "removed"),
        (r.REMOVED_XBOX = "removed_xbox"),
        r),
    id = s(631502),
    iu = s(221596),
    im = s(799544);
function ix() {
    var e;
    let t,
        { shouldShowBonusOrbsUX: s, multiplier: i } = (0, s7.lk)(iu.rE.NITRO_HOME_MARKETING),
        { isEligible: n, programReward: a } = (0, F.F)();
    return {
        nitroOrbsRewardsCard:
            ((e = (0, u.useMemo)(
                () =>
                    !n || null == a || null == a.reward_amount || a.reward_amount <= 0
                        ? null
                        : {
                              id: tw.NITRO_ORBS_REWARDS_CARD_ID,
                              title: eI.intl.string(s4.default.hx5AFp),
                              description: eI.intl.format(s4.default.wq3CF2, { orbsCount: a.reward_amount }),
                              primaryAsset: "/assets/8f530451dce1ccc0.svg",
                              primaryAssetClassName: x()(im.lH, im.yK),
                              footerContent: (0, d.jsx)(it, {}),
                              ctaText: eI.intl.string(s4.default.BxjHiu),
                              onCtaClick: () => (0, S.pX)(eZ.BVt.COLLECTIBLES_SHOP_WITH_TAB(e1.G2.ORBS)),
                          },
                [n, a],
            )),
            (t = (function (e) {
                let { location: t } = e,
                    s = (function (e) {
                        let { location: t } = e,
                            s = ia.useConfig({ location: t }).enabled,
                            i = ii.useConfig({ location: t }, { autoTrackExposure: !s }).enabled;
                        return s ? "removed" : i ? "deprecated" : "default";
                    })({ location: t }),
                    i = (0, ic.O)(!1);
                switch (s) {
                    case ir.DEFAULT:
                        return "default";
                    case ir.DEPRECATED:
                        return i ? "deprecated_xbox" : "deprecated";
                    case ir.REMOVED:
                        return i ? "removed_xbox" : "removed";
                    default:
                        return (0, is.xb)(s);
                }
            })({ location: "useNorbsNitroOrbsRewardsCard" })),
            (0, u.useMemo)(() => {
                if (null == e) return null;
                switch (t) {
                    case io.DEFAULT:
                    case io.DEPRECATED_XBOX:
                        return e;
                    case io.REMOVED:
                    case io.REMOVED_XBOX:
                        return null;
                    case io.DEPRECATED:
                        return {
                            ...e,
                            title: eI.intl.string(id.default.LG4Fft),
                            description: eI.intl.format(id.default["69NJ0X"], {
                                date: il,
                                helpdeskArticle: er.A.getArticleURL(eZ.MVz.ORBS_REWARDS_FAQ),
                            }),
                            pillText: eI.intl.formatToPlainString(eI.t["7D8r4F"], {
                                expiryDate: il.toLocaleDateString(eI.intl.currentLocale, {
                                    month: "short",
                                    day: "numeric",
                                }),
                            }),
                            footerContent: void 0,
                        };
                    default:
                        return (0, is.xb)(t);
                }
            }, [e, t])),
        questOrbMultiplierCard: (0, u.useMemo)(
            () =>
                s
                    ? {
                          id: tw.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eI.intl.string(eI.t.Csf5Ol),
                          description: eI.intl.format(eI.t.NpUfej, { bonusOrbMultiplier: i }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eI.intl.string(eI.t.jVcuVY),
                          onCtaClick: () => (0, s5.mA)({ fromContent: s6.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: im.Nf,
                      }
                    : null,
            [s, i],
        ),
    };
}
var ig = s(975807),
    ih = s(95035),
    ip = s(728666),
    iN = s(88001),
    iA = s(107198),
    ib = s(817577);
function ij() {
    (0, ig.A)(iN.TE);
}
function iE(e) {
    let t = (0, ip.O9)(),
        i = (0, h.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, u.useCallback)(() => {
            n
                ? (0, Z.mM)(async () => {
                      let { default: e } = await s.e(499709).then(s.bind(s, 516044));
                      return (t) => (0, d.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tN.pe.TIER_2,
                      initialPlanId: tN.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, u.useMemo)(
        () =>
            t
                ? {
                      id: tw.PREMIUM_GROUP_CARD_ID,
                      title: eI.intl.string(iA.default.YkvksF),
                      description: (0, d.jsxs)(d.Fragment, {
                          children: [
                              eI.intl.formatToPlainString(iA.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, iN.DP)(),
                              }),
                              (0, d.jsx)("div", {
                                  className: im.LF,
                                  children: (0, d.jsx)(ih.A, {
                                      onClick: ij,
                                      children: eI.intl.string(iA.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eI.intl.string(eI.t.oW0eUd),
                      primaryAsset: ib,
                      ctaIcon: Q.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: eI.intl.string(eI.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iT = s(562819),
    iC = s(793943),
    iI = s(169099),
    iR = s(506988),
    iv = s(590202),
    i_ = s(332560),
    iy = s(62234),
    iP = s(324061),
    iS = s(701256),
    iD = s(804564),
    iM = s(818349),
    iO = s(419490),
    iL = s(849993),
    ik = s(572164),
    iU = s(271597),
    iG = s(815460),
    iw = s(464132),
    iB = s(683825);
function iH() {
    "auto" === (0, iM.r)((0, ik.T)(), iO.Ay.getEnableAutoclipping())
        ? (0, iU.p)()
        : (0, iG.C)({ variant: "mode_picker", source: "nitro_home_perk_card" });
}
var iF = s(757036),
    iV = s(621488),
    iW = s(70283),
    iz = s(643056),
    iX = s(470739);
let iY = (0, ss.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var iK = s(655752),
    iZ = s(764231),
    iq = s(627380),
    iJ = s(30084),
    iQ = s(814014),
    i$ = s(714206);
let i0 =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    i1 =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    i2 =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function i3() {
    let e,
        t,
        s,
        i,
        n,
        a,
        l,
        r,
        c,
        o,
        m,
        g,
        p,
        f,
        N,
        A,
        E,
        T,
        C,
        { analyticsLocations: I } = (0, j.Ay)(b.A.PREMIUM_MARKETING_PERK_CARD),
        R = (0, s$.X)("useWhatsNewPerkCards"),
        v = (0, s0.A)({ analyticsLocations: I }),
        _ = (0, u.useCallback)(() => {
            (0, ea.openUserSettings)(en.X.PROFILE_PANEL, { analyticsLocations: I }, () =>
                (0, sJ.L)({ analyticsLocations: I }),
            );
        }, [I]),
        y = (0, u.useCallback)(() => {
            (0, ea.openUserSettings)(en.X.PROFILE_PANEL, { analyticsLocations: I }, () =>
                (0, iT.L)({ analyticsLocations: I }),
            );
        }, [I]),
        P = (0, u.useCallback)(() => {
            (0, ea.openUserSettings)(en.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        S =
            ((e = (0, h.bG)([M.default], () => M.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (s = (function (e) {
                let { location: t } = e;
                return iY.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (i = (0, iz.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, s2.$F)()),
            (a = (0, s2.Xb)()),
            (l = n?.status === s2.Wo.UPCOMING || t),
            (r = n?.status === s2.Wo.WITHHELD),
            (c = l || r),
            (o = (0, s3.N)(n?.id)),
            (m = (function () {
                let e = (0, s2.$F)(),
                    t = (0, iK.P)(),
                    s = (0, s2.Xb)();
                if (null == e || null == t || null == s || e.status === s2.Wo.WITHHELD) return null;
                let i = eT()(),
                    n = eT()(s),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (i.diff(l) - 864e5) / r));
            })()),
            (g = (0, h.bG)([et.Ay], () => et.Ay.useReducedMotion) && !c),
            (p = (0, iq.t)()),
            (f = (0, iK.P)()),
            (0, u.useMemo)(() => {
                let e,
                    l = null != f ? eI.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, iZ.T)(tN.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === s2.Wo.UPCOMING
                              ? eI.intl.formatToPlainString(eI.t.a1eKDi, { days: p?.days ?? 0 })
                              : n.status === s2.Wo.WITHHELD
                                ? ((0, iZ.T)(n.id, n.tenureReqNumMonths) ?? void 0)
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
                                  })(p, l) ??
                                  (0, iZ.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != o ? (r = c || g ? o.standard : o.ambientLarge) : t && (r = i$),
                    {
                        id: tw.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eI.intl.string(n.nameUnformattedNitro) : t ? eI.intl.string(eI.t.tx9Fvw) : "",
                        pillText: eI.intl.string(eI.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: x()(iQ.pq, { [iQ.rX]: c, [iQ.kE]: g }),
                        caption: null != a ? eI.intl.formatToPlainString(eI.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: m ?? void 0,
                        ctaText: eI.intl.string(eI.t.jVcuVY),
                        onCtaClick: () => {
                            s && i
                                ? (0, iX.openBadgeDirectoryModal)({ initialBadgeId: iW.$.PREMIUM_TENURE })
                                : (0, iJ.D)({ analyticsLocations: I });
                        },
                    }
                );
            }, [n, o, c, g, a, m, t, p, f, I, s, i])),
        { nitroOrbsRewardsCard: D, questOrbMultiplierCard: O } = ix(),
        L =
            ((N = (0, iF.L)(tN.PremiumTypes.TIER_2)),
            (A = (0, s1.rX)()),
            (0, u.useMemo)(
                () =>
                    N && A
                        ? {
                              id: tw.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eI.intl.string(iV.default["/cV3ka"]),
                              description: eI.intl.string(iV.default.H523FI),
                              primaryAsset: (0, d.jsx)(sw.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [N, A],
            )),
        k = iE(I),
        U =
            ((E = (0, iL.H)("useAutoclipsPerkCard")),
            (T = "auto" === (0, iw.U)().value),
            (0, u.useMemo)(
                () =>
                    E
                        ? {
                              id: tw.AUTOCLIPS_CARD_ID,
                              title: eI.intl.string(iB.default["5VA1HL"]),
                              description: eI.intl.string(iB.default.TvE3md),
                              primaryAsset: (0, d.jsx)(iD.f, { alt: "", ariaHidden: !0 }),
                              ctaText: eI.intl.string(T ? eI.t.RzWDqY : eI.t.uw9zI7),
                              ctaVariant: T ? "secondary" : void 0,
                              onCtaClick: iH,
                          }
                        : null,
                [E, T],
            )),
        G =
            ((C = (0, iP.A)("useHexagonCampaignWhatsNewPerkCard")),
            u.useMemo(
                () =>
                    C
                        ? {
                              id: tw.HEXAGON_CAMPAIGN_CARD_ID,
                              pillText: eI.intl.string(eI.t.y2b7CA),
                              title: eI.intl.string(iS.default["fShp/D"]),
                              description: eI.intl.string(iS.default.MDycja),
                              primaryAsset: (0, d.jsx)(iI.r, { alt: "", ariaHidden: !0, width: 256 }),
                              ctaText: eI.intl.string(eI.t.uw9zI7),
                              onCtaClick: () => {
                                  ((0, i_.iM)({
                                      content: iR.uF.NITRO_HOME_PERK_CARD,
                                      questContentCTA: iv.Cy.OPEN_AD_PERK_MODAL,
                                  }),
                                      (0, iy.v6)());
                              },
                          }
                        : null,
                [C],
            ));
    return (0, u.useMemo)(() => {
        let e = [
                D,
                O,
                k,
                {
                    id: tw.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eI.intl.string(eI.t.OLtTrt),
                    description: eI.intl.string(eI.t["di/pXR"]),
                    onCtaClick: R ? v : _,
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    primaryAsset: i0,
                },
                {
                    id: tw.CLIENT_THEMES_CARD_ID,
                    title: eI.intl.string(eI.t.acc6h6),
                    description: eI.intl.formatToPlainString(eI.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: i2,
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iC.nf)(iC.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tw.PERMADECOS_CARD_ID,
                    title: eI.intl.string(eI.t.L14NZN),
                    description: eI.intl.string(eI.t.eCZkAI),
                    primaryAsset: (0, d.jsx)(sK, { alt: "", ariaHidden: !0 }),
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    onCtaClick: R ? v : y,
                },
                {
                    id: tw.CUSTOM_APP_ICONS_CARD_ID,
                    title: eI.intl.string(eI.t["GU+wqh"]),
                    description: eI.intl.string(eI.t["1uPk1Z"]),
                    primaryAsset: i1,
                    ctaText: eI.intl.string(eI.t.y9TxXV),
                    onCtaClick: P,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, S),
            null != L && e.splice(2, 0, L),
            null != U && e.splice(2, 0, U),
            null != G && e.splice(Math.min(2, e.length), 0, G),
            e.length > s && e.splice(s, e.length - s),
            e
        );
    }, [S, D, O, L, U, k, G, _, P, y, v, R]);
}
var i6 = s(355097);
let i7 = "/assets/1eb1b74667b4c0f0.svg",
    i5 = "/assets/983b60e4fcaf973b.svg";
var i8 =
    (((c = {}).BEST_OF_NITRO = "bestof"),
    (c.APPEARANCE_STYLE = "appearance"),
    (c.UPGRADES = "upgrades"),
    (c.VIP_EXTRAS = "vip"),
    c);
let i9 = [
    { id: "bestof", label: () => eI.intl.string(eI.t.q1u7nQ) },
    { id: "appearance", label: () => eI.intl.string(eI.t.CUnZkZ) },
    { id: "upgrades", label: () => eI.intl.string(eI.t.KC5q8v) },
    { id: "vip", label: () => eI.intl.string(eI.t.DjEAcv) },
];
var i4 = s(18290);
function ne(e) {
    return e.id;
}
function nt(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sq.DP)(),
                t = (0, s$.X)("useFavoritesPerkCards"),
                s = (0, s2.Lh)(),
                i = (0, s3.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(b.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, sQ.A)({ scrollPosition: i6._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, u.useCallback)(() => {
                    (0, ea.openUserSettings)(en.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, u.useCallback)(() => {
                    (0, ea.openUserSettings)(en.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                c = (0, u.useCallback)(() => {
                    (0, ea.openUserSettings)(en.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                o = (0, u.useCallback)(() => {
                    (0, S.pX)(eZ.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, u.useCallback)(() => {
                    (0, ea.openUserSettings)(en.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, s0.A)({ analyticsLocations: n }),
                g = (0, u.useCallback)(() => {
                    (0, ea.openUserSettings)(en.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, sJ.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                h = i3(),
                p = (0, u.useMemo)(() => h.map((e) => e?.id), [h]),
                { nitroOrbsRewardsCard: f, questOrbMultiplierCard: N } = ix(),
                A = iE(n),
                E = (0, u.useMemo)(
                    () => [
                        {
                            id: tw.SERVER_BOOSTS_CARD_ID,
                            title: eI.intl.formatToPlainString(eI.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eI.intl.formatToPlainString(eI.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, d.jsx)(sD, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != A ? { ...A, categories: ["bestof"] } : null,
                        {
                            id: tw.PROFILES_CARD_ID,
                            title: eI.intl.string(eI.t.xDRab3),
                            description: eI.intl.string(eI.t.yn6fWA),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, d.jsx)(sO, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tw.HD_VIDEO_CARD_ID,
                            title: eI.intl.string(eI.t["/mQ5gg"]),
                            description: eI.intl.string(eI.t["7WwAXh"]),
                            primaryAsset: (0, d.jsx)(sk, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tw.CLIENT_THEMES_CARD_ID,
                            title: eI.intl.string(eI.t.acc6h6),
                            description: eI.intl.formatToPlainString(eI.t.WQazjs, { themeCount: 20 }),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: i2,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tw.MORE_EMOJIS_CARD_ID,
                            title: eI.intl.string(eI.t.D8vIDT),
                            description: eI.intl.string(eI.t.DRMecB),
                            primaryAsset: (0, d.jsx)(sG, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tw.LARGE_UPLOADS_CARD_ID,
                            title: eI.intl.string(eI.t.nL1WZV),
                            description: (0, s1.M6)({
                                legacyCopy: eI.intl.formatToPlainString(eI.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eI.intl.formatToPlainString(eI.t.teOTfv, {
                                    maxFileSize: (0, ec.EJ)(tN.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, d.jsx)(sw.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tw.CUSTOM_APP_ICONS_CARD_ID,
                            title: eI.intl.string(eI.t["GU+wqh"]),
                            description: eI.intl.string(eI.t["1uPk1Z"]),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: i1,
                            categories: ["appearance"],
                        },
                        {
                            id: tw.ENTRANCE_SOUNDS_CARD_ID,
                            title: eI.intl.string(eI.t.WJfCPi),
                            description: eI.intl.string(eI.t.liQKJR),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tw.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eI.intl.string(eI.t.OLtTrt),
                            description: eI.intl.string(eI.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            primaryAsset: i0,
                            categories: ["appearance"],
                        },
                        {
                            id: tw.CUSTOM_SOUNDS_CARD_ID,
                            title: eI.intl.string(eI.t["Cu/oFd"]),
                            description: eI.intl.string(eI.t.czj2aa),
                            primaryAsset: (0, d.jsx)(sB, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tw.SPECIAL_STICKERS_CARD_ID,
                            title: eI.intl.string(eI.t.MQoVeb),
                            description: eI.intl.string(eI.t.HGCLZX),
                            primaryAsset: (0, d.jsx)("div", {
                                className: im.Uc,
                                children: (0, d.jsx)(sH.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tw.SUPER_REACTIONS_CARD_ID,
                            title: eI.intl.string(eI.t.qERvAA),
                            description: eI.intl.string(eI.t.WkUWzx),
                            primaryAsset: (0, d.jsx)(sF, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tw.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eI.intl.string(eI.t.ssVDYQ),
                            description: eI.intl.string(eI.t.aUSRMa),
                            primaryAsset: (0, sZ.M)(e) ? i7 : i5,
                            categories: ["upgrades"],
                        },
                        {
                            id: tw.EARLY_ACCESS_CARD_ID,
                            title: eI.intl.string(eI.t["g/KRY6"]),
                            description: eI.intl.string(eI.t.JzAmJc),
                            primaryAsset: (0, d.jsx)(sV, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tw.BADGE_CARD_ID,
                            title: eI.intl.string(eI.t.Bn3CtB),
                            description: eI.intl.string(eI.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, d.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, d.jsx)(sz, { color: eX.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tw.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eI.intl.string(eI.t["MTD+7w"]),
                            description: eI.intl.string(eI.t.Bhs0s6),
                            ctaText: eI.intl.string(eI.t.dBJVnZ),
                            onCtaClick: o,
                            primaryAsset: (0, d.jsx)(sX, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != f ? { ...f, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: tw.PERMADECOS_CARD_ID,
                            title: eI.intl.string(eI.t.L14NZN),
                            description: eI.intl.string(eI.t.eCZkAI),
                            primaryAsset: (0, d.jsx)(sK, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, f, N, A, a, l, r, c, o, m, g, x, t],
                );
            return (0, u.useMemo)(() => E.filter((e) => null != e && !p.includes(e.id)), [E, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, u.useState)(i?.categories[0] ?? i8.BEST_OF_NITRO),
        l = i9.find((e) => e.id === n)?.label(),
        r = s.filter((e) => null != e && e.categories.includes(n));
    return (0, d.jsxs)("div", {
        className: i4.uW,
        children: [
            (0, d.jsx)(eG.D, { variant: "nitro-sm", children: eI.intl.string(eI.t["Uh3+CA"]) }),
            (0, d.jsx)(s_.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i4.Lq,
                "aria-label": eI.intl.string(eI.t["Uh3+CA"]),
                children: i9.map((e) =>
                    (0, d.jsx)(s_.V.Item, { id: e.id, className: i4.IC, children: e.label() }, e.id),
                ),
            }),
            (0, d.jsx)(
                sy.A,
                {
                    "aria-label": eI.intl.formatToPlainString(eI.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: i4.jG,
                    items: r,
                    getItemKey: ne,
                    renderItem: (e, s) =>
                        (0, d.jsx)(tK.S, { ...e, glowing: t === e.id, containerClassName: i4.Ui, listItemProps: s }),
                },
                n,
            ),
        ],
    });
}
var ns = s(72979);
let ni = function (e) {
    let { className: t } = e,
        s = (0, sq.DP)();
    return (0, d.jsx)("img", {
        className: x()(ns.D, t),
        src: (0, sZ.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var nn = s(684251);
let na = function (e) {
    let { children: t } = e;
    return (0, d.jsxs)("div", {
        className: x()(nn.kL, nn.Gd, nn.Eg),
        children: [(0, d.jsx)(ni, {}), (0, d.jsx)(tS, {}), t],
    });
};
function nl(e) {
    let { glowingPerkId: t = null } = e,
        s = i3();
    return (0, d.jsx)(t7, {
        sectionClassName: t6.uW,
        heading: (0, d.jsx)(eG.D, { variant: "nitro-sm", className: t6.R_, children: eI.intl.string(eI.t.Aw5DRm) }),
        grid: (0, d.jsx)(d.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, d.jsx)(
                    tK.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tw.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: x()(t6.Nr, { [t6.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function nr(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, h.bG)([et.Ay], () => et.Ay.useReducedMotion),
            l = u.useRef(!1);
        (u.useEffect(() => {
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
            u.useEffect(() => {
                t || (l.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], s, i);
}
var nc = s(92737);
let no = "/assets/cd2be35d285d4675.svg",
    nd = (e) => {
        let { userId: t } = e,
            s = (0, g.zy)();
        (u.useEffect(() => {
            ((0, H.Ay)(), null != t && (0, W.A)(t));
        }, [t]),
            u.useEffect(() => {
                E(!0);
            }, []),
            (0, y.P)(_));
        let i = u.useRef(null),
            n = u.useRef(null),
            a = (0, h.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, F.F)(),
            {
                scrollTargetId: c,
                glowingSectionId: o,
                glowingPerkId: m,
                scrollBlock: f,
                scrollInline: N,
            } = u.useMemo(() => {
                let e = new URLSearchParams(s.search),
                    t = e.get("perk"),
                    i = e.get(nc.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [s.search]);
        nr(c ?? "", null != c, f, N);
        let [A, E] = u.useState(!1),
            T = (0, z.p)(),
            C = u.useRef(null),
            [I, R] = u.useState(!1),
            v = null != T && null != a && a.status === eZ.Dmq.CANCELED,
            P = (0, X.iU)(tN.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !I && v,
            D = (0, h.bG)([V.A], () => (null != t ? V.A.getUserProfile(t) : null)),
            { analyticsLocations: M } = (0, j.Ay)(b.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [O, U] = u.useState(!1);
        return null != D && (l || null != r)
            ? (0, d.jsxs)(B.Gt, {
                  className: x()(nn.xW, nn.Gd),
                  ref: i,
                  children: [
                      (0, d.jsx)(na, {
                          children: (0, d.jsxs)(j.f5, {
                              value: M,
                              children: [
                                  (0, d.jsx)(w.L, {
                                      innerRef: C,
                                      onChange: (e) => R(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, d.jsx)(tC, {
                                          buttonVisibilityRef: C,
                                          className: nn.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, d.jsx)(nl, { glowingPerkId: m }),
                                  (0, d.jsx)(sC, { glowingPerkId: m, glowingSectionId: o }),
                                  (0, d.jsx)(nt, { glowingPerkId: m }),
                                  (0, d.jsx)(Y.A, {
                                      className: nn.Zy,
                                      location: b.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eZ.liQ.NITRO_HOME, section: eZ.JJy.GIFT_BANNER },
                                  }),
                                  (0, d.jsx)("div", { className: nn.hz }),
                                  (0, d.jsx)(w.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !O &&
                                              (k.default.track(eZ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: M,
                                              }),
                                              U(!0));
                                      },
                                      children: (0, d.jsx)("div", { ref: n, className: nn._Z }),
                                  }),
                                  (0, d.jsx)("img", {
                                      src: no,
                                      className: nn.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eI.intl.string(eI.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      v &&
                          null != P &&
                          (0, d.jsx)(sv, {
                              isVisible: S && A,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, d.jsxs)("div", {
                  className: x()(nn.kL, nn.Lq, nn.TN, nn.Eg),
                  children: [(0, d.jsx)(tS, {}), (0, d.jsx)("div", { className: nn.S, children: (0, d.jsx)(p.y, {}) })],
              });
    };
var nu = s(589152),
    nm = s(851746),
    nx = s(727949),
    ng = s(926239);
let nh =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var np = s(185062);
let nf = `${nh} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${np.A} 3x`;
function nN(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, sP.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: nh,
        srcSet: nf,
        className: (0, sP.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var nA = s(315629),
    nb = s(783420),
    nj = s(204413),
    nE = s(572079),
    nT = s(824069),
    nC = s(785007),
    nI = s(947910);
function nR(e) {
    let { value: t, planRadioOptions: s, className: i, ...n } = e,
        a = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, d.jsxs)("div", {
                    className: nI.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, d.jsx)("div", {
                                className: nI.fQ,
                                children: (0, d.jsx)(eB.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, d.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nI.qU,
                            children: [
                                (0, d.jsxs)(q.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nI.NI,
                                    children: [
                                        (0, d.jsx)(J.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, d.jsx)(J.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, d.jsxs)(q.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nI.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, d.jsx)(J.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, d.jsx)(J.E, {
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                className: nI.yD,
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
                radioBarClassName: x()(nI.tG, { [nI.uA]: s, [nI.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, d.jsx)(nC.$d, {
        ...n,
        options: a,
        value: t,
        size: nC.r9.NOT_SET,
        className: x()(nI.ul, i),
        withTransparentBackground: !0,
    });
}
var nv = s(118751),
    n_ = s(773669),
    ny = s(97352),
    nP = s(526292),
    nS = s(387278),
    nD = s(369827),
    nM = s(803496);
function nO(e) {
    let t = (0, h.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        s = (0, nD.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nM.A)({
            activeSubscription: t,
            skuIDs: [(0, ec.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nL(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nk(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tN.Ff.YEAR
          ? eI.intl.format(eI.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : eI.intl.format(eI.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nU = s(614488);
function nG(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, d.jsx)(nb.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, d.jsx)($.$, {
                size: "md",
                fullWidth: !0,
                icon: Q.NitroWheelIcon,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nw(e) {
    let { skuId: t, className: s, variant: i = "default" } = e,
        n = t === tN.pe.TIER_2,
        a = "settings" === i,
        l = (0, sZ.q)((0, sq.Ay)()),
        r = (0, em.V)(),
        c = r?.subscriptionTrial,
        o = c?.skuId === t,
        m = n && o && null != c,
        {
            planRadioOptions: g,
            selectedPlanId: p,
            setSelectedPlanId: f,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = u.useState(null),
                n = tN.En[t],
                a = tN.zE[t],
                l = t === tN.pe.TIER_2,
                r = nO(t),
                c = (0, em.V)(),
                o = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: d, isMonthlyPlanDisabled: m } = (0, h.cf)(
                    [L.A],
                    () => {
                        let e = L.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, ec.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tN.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tN.gD.PREMIUM_YEAR_TIER_0, tN.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                x = d === t,
                g = (0, eu.O)(),
                p = (0, nP.k5)(),
                f = (0, h.bG)([n_.default], () => n_.default.locale),
                N = (0, X.U9)(g, t),
                A = (0, X.N1)(n),
                b = (0, X.N1)(a),
                [j, E] = (0, h.yK)([ny.A], () => [ny.A.get(n), ny.A.get(a)], [n, a]),
                T = null != j ? (0, ec.sS)(j, r) : null,
                C = null != E ? (0, ec.sS)(E, r) : null,
                I =
                    N && g?.discount.amount != null && !p
                        ? eI.intl.formatToPlainString(eI.t.IAybsG, {
                              discount: (0, nv.l9)(f, Number(g.discount.amount) / 100),
                          })
                        : null,
                R = g?.discount?.planIds,
                v = nL(a, N, R, b, C),
                _ = nL(n, N, R, A, T),
                y = g?.discount.userUsageLimitInterval,
                P = g?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, nS.Cj)(E, !1, r),
                D = !_ || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tN.pe.TIER_2 ? null : s && !i ? tN.En[t] : tN.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                O = null == s || (s === n && m) ? M : s,
                k = [
                    {
                        value: a,
                        primaryText: eI.intl.string(eI.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nk({
                                      expectedUsageInterval: tN.Ff.YEAR,
                                      usageInterval: y,
                                      discountDuration: P,
                                      regularPrice: C,
                                      discountedPrice: b,
                                  })
                                : null) ?? S,
                        secondaryText: v ? b : C,
                        secondarySubText: v ? C : null,
                        badgeText: v ? I : null,
                        useGradientSelectedBorder: l && (o || v || D),
                        isDisabled: x,
                    },
                    {
                        value: n,
                        primaryText: eI.intl.string(eI.t.DKzs96),
                        primarySubText: _
                            ? nk({
                                  expectedUsageInterval: tN.Ff.MONTH,
                                  usageInterval: y,
                                  discountDuration: P,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : T,
                        secondarySubText: _ ? T : null,
                        badgeText: _ ? I : null,
                        useGradientSelectedBorder: l && (o || _),
                        isDisabled: x || m,
                    },
                ],
                U = O === a ? v : O === n && _;
            return { planRadioOptions: k, selectedPlanId: O, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: b } = (0, nE.A)({ subscriptionTier: t }),
        { subscribeButtonProps: j } = (0, nj.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? b : void 0,
        }),
        E = (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nU.MY,
                    children: (0, d.jsx)(eG.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nU.ck,
                        children: n ? eI.intl.string(eI.t.lG6a5x) : eI.intl.string(eI.t["t9uG/o"]),
                    }),
                }),
                (0, d.jsx)(q.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nU.qT,
                    children: n
                        ? (0, d.jsx)(ng.ZP, {
                              featureSet: ng.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, d.jsx)(ng.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, d.jsx)(nT.K, {}),
            ],
        }),
        T = (0, d.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nU.Ux,
            children: [
                a ? (0, d.jsx)("div", { className: nU.zI, children: E }) : E,
                m
                    ? (0, d.jsx)("div", {
                          className: nU.qS,
                          role: "separator",
                          children: (0, d.jsx)(J.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nU.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tN.WT.DAY:
                                          if (t % 7 == 0) return eI.intl.format(eI.t["1MYPH0"], { weeks: t / 7 });
                                          return eI.intl.format(eI.t.pYfIoO, { days: t });
                                      case tN.WT.MONTH:
                                          return eI.intl.format(eI.t["96hTLe"], { months: t });
                                      case tN.WT.YEAR:
                                          return eI.intl.format(eI.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(c.interval, c.intervalCount),
                          }),
                      })
                    : (0, d.jsx)("hr", { className: nU.yF }),
                (0, d.jsxs)("div", {
                    className: nU.qr,
                    children: [
                        (0, d.jsx)(nR, {
                            className: a ? nU.US : void 0,
                            planRadioOptions: g,
                            value: p ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, d.jsx)(nG, { skuId: t, selectedPlanId: p, subscribeButtonProps: j }),
                    ],
                }),
            ],
        }),
        C = x()(nU.Nr, s, { [nU.Fw]: n });
    return n
        ? (0, d.jsxs)(nA.h, {
              color: "nitro-pink",
              className: C,
              children: [
                  !a &&
                      (0, d.jsx)("div", {
                          className: nU.kX,
                          "aria-hidden": !0,
                          children: (0, d.jsx)(nN, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, d.jsx)("div", { className: C, children: T });
}
function nB(e) {
    let { className: t } = e,
        s = (0, sZ.q)((0, sq.Ay)()),
        i = nO(tN.pe.TIER_2),
        n = (0, h.bG)([M.default], () => M.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eM.A)({ userId: n?.id, size: ey._3.SIZE_32, animateOnHover: !0 }),
        r = (0, h.bG)([ny.A], () => ny.A.get(tN.gD.PREMIUM_GROUP_MONTH)),
        c = eI.intl.string(eI.t["2pG5Ga"]),
        o = (0, d.jsx)(nb.A, {
            subscriptionTier: tN.pe.TIER_2,
            initialPlanId: tN.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, d.jsx)($.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: Q.NitroWheelIcon,
                    text: c,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        u = null;
    if (null != r)
        try {
            u = (0, ec.sS)(r, i, !1, !1, !1);
        } catch {
            u = null;
        }
    return (0, d.jsx)("div", {
        className: x()(nU.Nr, t),
        children: (0, d.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nU.Ux,
            children: [
                (0, d.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nU.MY,
                    children: [
                        (0, d.jsx)(eG.D, {
                            variant: "nitro-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: nU.ck,
                            children: eI.intl.string(iA.default.eSKiXk),
                        }),
                        null != n &&
                            (0, d.jsxs)(q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nU.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, d.jsx)("div", {
                                        className: nU.uA,
                                        children: (0, d.jsx)(eP.eu, {
                                            src: a,
                                            size: ey._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...l,
                                        }),
                                    }),
                                    (0, d.jsx)(q.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nU.VL,
                                        children: (0, d.jsxs)(J.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-default",
                                            children: ["+", 5],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, d.jsx)(q.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nU.qT,
                    children: (0, d.jsx)(ng.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, d.jsx)("hr", { className: nU.yF }),
                (0, d.jsxs)("div", {
                    className: nU.qr,
                    children: [
                        (0, d.jsxs)("div", {
                            className: nU.ec,
                            children: [
                                (0, d.jsx)(J.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: eI.intl.string(iA.default.SvSwga),
                                }),
                                null == u
                                    ? (0, d.jsx)(p.y, { type: p.y.Type.PULSING_ELLIPSIS })
                                    : (0, d.jsx)(J.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: s ? "text-strong" : "text-overlay-light",
                                          children: u,
                                      }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        }),
    });
}
function nH(e) {
    let { innerRef: t, className: s, variant: i = "default" } = e,
        n = "settings" === i,
        { analyticsLocations: a } = (0, j.Ay)(b.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, ng.pw)(t),
        r = (0, ip.PA)(),
        c = !n && r,
        o = (0, h.bG)([et.Ay], () => et.Ay.useReducedMotion),
        u = { [nU.iR]: !o && !n };
    return (0, d.jsx)(j.f5, {
        value: a,
        children: (0, d.jsxs)(q.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: x()(nU.oB, s, { [nU.W0]: n }),
            children: [
                (0, d.jsx)(eG.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nU.op,
                    children: eI.intl.string(eI.t.vLz3Zs),
                }),
                (0, d.jsxs)("div", {
                    ref: l,
                    className: x()(nU.kR, { [nU.BQ]: c }),
                    children: [
                        (0, d.jsx)(nw, { skuId: tN.pe.TIER_0, className: x()(nU.rz, u), variant: i }),
                        (0, d.jsx)(nw, { skuId: tN.pe.TIER_2, className: x()(nU.Rv, u), variant: i }),
                        c && (0, d.jsx)(nB, { className: x()(nU.zz, u) }),
                    ],
                }),
            ],
        }),
    });
}
var nF = s(366010),
    nV = s(303136);
let nW = function (e) {
    let t,
        { className: s } = e,
        i = (0, e7.TM)(),
        n = (0, nF.q)((0, sq.Ay)());
    return (
        (t = i
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, d.jsx)("div", {
            className: s,
            children: (0, d.jsx)(
                nV.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, d.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var nz =
        (((o = {}).HOME = "home"),
        (o.WHATS_NEW = "whatsNew"),
        (o.BEST_OF_NITRO = "bestOfNitro"),
        (o.PLANS = "plans"),
        (o.COMPARE = "compare"),
        o),
    nX = s(352756);
let nY = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e8.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eZ.JJy.MARKETING_FLOATING_CTA };
    return (0, d.jsx)(e5.animated.div, {
        className: x()(nX.iE, { [nX.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, d.jsxs)("div", {
            className: nX.UD,
            children: [
                (0, d.jsx)(ej.A, {
                    enableMarketingSubscribeCopyTest: !a,
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, d.jsx)(eb.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nK = s(573710);
let nZ = function () {
    let e = (0, e6.bG)([et.Ay], () => et.Ay.useReducedMotion);
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)("div", {
                className: nK.BI,
                children: (0, d.jsx)(tt, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e4.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, d.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nK.Q,
                    }),
                }),
            }),
            (0, d.jsx)(ti, {
                isMotionReduced: e,
                boltContainerClassName: nK.nJ,
                carContainerClassName: nK.IN,
                hammerContainerClassName: nK.Gj,
                keyContainerClassName: nK.FV,
                starContainerClassName: nK.E1,
                boltAssetClassName: nK.j7,
                carAssetClassName: nK.or,
                hammerAssetClassName: nK.Wv,
                keyAssetClassName: nK.rs,
                starAssetClassName: nK.OY,
            }),
        ],
    });
};
var nq = s(989756);
function nJ(e) {
    let { ref: t, ...s } = e,
        { analyticsLocations: i } = (0, j.Ay)(b.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, d.jsx)(j.f5, {
        value: i,
        children: (0, d.jsx)("div", {
            ref: t,
            className: nq.kL,
            children: (0, d.jsxs)("div", {
                className: nq.hQ,
                children: [
                    (0, d.jsx)(nZ, {}),
                    (0, d.jsx)(eG.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nq.RH,
                        children: eI.intl.string(eI.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
nJ.displayName = "PremiumMarketingFooter";
var nQ = s(939249);
let n$ = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nz.HOME]: eI.intl.string(eI.t.uGRXjS),
            [nz.WHATS_NEW]: eI.intl.string(eI.t["mfcR/v"]),
            [nz.BEST_OF_NITRO]: eI.intl.string(eI.t.xQKkE8),
            [nz.PLANS]: eI.intl.string(eI.t.wyNMnm),
            [nz.COMPARE]: eI.intl.string(eI.t.pwD7If),
        },
        n = (0, h.bG)([M.default], () => M.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, d.jsx)(tR.A, {
        className: ty.TQ,
        transparent: !0,
        children: (0, d.jsxs)("div", {
            className: ty.Wc,
            children: [
                (0, d.jsxs)("div", {
                    className: ty.wG,
                    children: [
                        (0, d.jsx)(Q.NitroWheelIcon, { className: ty.nE, colorClass: ty.oG }),
                        (0, d.jsx)("div", {
                            className: ty.zc,
                            role: "tablist",
                            "aria-label": eI.intl.string(eI.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, d.jsxs)(
                                    nQ.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: ty.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, d.jsx)(J.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, d.jsx)("div", { className: ty.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, d.jsxs)("div", {
                    className: ty.MQ,
                    children: [
                        null != n && (0, d.jsx)(t_.l, { size: "sm", location: b.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, d.jsx)(eb.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var n0 = s(713271),
    n1 = s(704333),
    n2 = s(414499),
    n3 = s(597770),
    n6 = s(500060),
    n7 = s(866665),
    n5 = s(406860),
    n8 = s(870975),
    n9 = s(698834);
function n4() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, n5.A)({ boxType: tH.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: n1.ServerGridIcon, text: eI.intl.string(tW.default.MUypiB) },
            { icon: n2.CloudIcon, text: eI.intl.string(tW.default.ec5Rdd) },
            { icon: n3.GiftIcon, text: eI.intl.string(tW.default["9t2CzW"]), tooltip: tW.default.AyECej },
            { icon: n6.ScreenStreamIcon, text: eI.intl.string(tW.default.R7YJAY) },
        ];
    return (0, d.jsx)(w.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, d.jsx)("div", {
            ref: e,
            className: n9.iE,
            children: (0, d.jsxs)("div", {
                className: n9.Nr,
                children: [
                    (0, d.jsxs)("div", {
                        className: n9.j,
                        children: [
                            (0, d.jsx)("div", { className: n9._g }),
                            (0, d.jsx)("div", { className: n9.$h }),
                            (0, d.jsx)("div", { className: n9.Rv }),
                            (0, d.jsx)("div", { className: n9.Lw }),
                        ],
                    }),
                    (0, d.jsxs)("div", {
                        className: n9.CT,
                        children: [
                            (0, d.jsxs)("div", {
                                className: n9.Qs,
                                children: [
                                    (0, d.jsxs)("div", {
                                        children: [
                                            (0, d.jsx)(eG.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: n9.R_,
                                                children: eI.intl.string(tW.default.rkt1aw),
                                            }),
                                            (0, d.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, d.jsxs)(
                                                            "div",
                                                            {
                                                                className: n9.yf,
                                                                children: [
                                                                    (0, d.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, d.jsx)(J.E, {
                                                                        variant: "body-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, d.jsx)("div", {
                                                                            className: n9.Jn,
                                                                            children: (0, d.jsx)(n7.m, {
                                                                                text: eI.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, d.jsx)(
                                                                                    tO.CircleInformationIcon,
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
                                                    (0, d.jsx)("div", {
                                                        className: n9.xF,
                                                        children: (0, d.jsx)(ej.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tN.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, d.jsx)("div", {
                                        className: n9.WE,
                                        children: (0, d.jsx)(J.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: eI.intl.format(tW.default.KDKdWi, { termsLink: (0, n8.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, d.jsx)("div", {
                                className: n9.r1,
                                children: (0, d.jsx)("img", {
                                    className: n9.wm,
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
var ae = s(886205),
    at = s(65154),
    as = s(382702),
    ai = s(148289);
function an() {}
function aa() {
    return (0, d.jsxs)("div", {
        className: as.Nr,
        children: [
            (0, d.jsxs)("div", {
                className: as.pq,
                children: [
                    (0, d.jsxs)("div", {
                        className: as.Z,
                        children: [
                            (0, d.jsx)("div", {
                                children: (0, d.jsx)(eB.E, {
                                    type: "early_access",
                                    variant: "expressive",
                                    icon: Q.NitroWheelIcon,
                                }),
                            }),
                            (0, d.jsx)(eG.D, {
                                variant: "heading-xxl/semibold",
                                color: "text-strong",
                                children: eI.intl.string(iB.default.MtIbFp),
                            }),
                            (0, d.jsx)(J.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: eI.intl.string(iB.default.hXM4Ae),
                            }),
                        ],
                    }),
                    (0, d.jsx)($.$, {
                        variant: "secondary",
                        size: "md",
                        icon: at.CirclePlayIcon,
                        text: eI.intl.string(iB.default.wNHvBT),
                        onClick: an,
                    }),
                ],
            }),
            (0, d.jsx)("div", {
                className: as.LY,
                children: (0, d.jsx)("img", { className: as.ot, src: ai.A, alt: "", "aria-hidden": !0 }),
            }),
        ],
    });
}
var al = s(734066),
    ar = s(750338),
    ac = s(382031),
    ao = s(505051);
function ad(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, d.jsxs)("div", {
        className: x()(ao.boxBackdrop, t),
        children: [
            (0, d.jsx)(eG.D, {
                className: ao.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, d.jsx)("div", { className: ao.highlightBento, children: r }),
            (0, d.jsx)("div", {
                className: ao.bentoBoxesGrid,
                children: s.flatMap((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = ac.A0.SMALL;
                            break;
                        case 2:
                            s = ac.A0.MEDIUM;
                            break;
                        default:
                            s = ac.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, d.jsx)(
                            ar.A,
                            { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let au = u.memo(function (e) {
        let t,
            s = (0, tD.b)("premium_marketing_bento"),
            i = (0, sm.mh)({ location: "premium_marketing_bento" }),
            { enabled: n } = (0, t1.vc)({ location: "premium_marketing_bento" }),
            { enabled: a } = ae.A.useConfig({ location: "premium_marketing_bento" }),
            l = s && !i && !(n && a),
            { whatsNewBoxes: r } = (0, ac.Ay)(l),
            c = ((t = (0, al.Vl)()), (0, iL.H)("premium_marketing_whats_new", !t));
        return (0, d.jsx)(ad, {
            boxLayout: r,
            title: eI.intl.string(eI.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento:
                c || l
                    ? (0, d.jsxs)(d.Fragment, { children: [c && (0, d.jsx)(aa, {}), l && (0, d.jsx)(n4, {})] })
                    : null,
            ...e,
        });
    }),
    am = u.memo(function (e) {
        let { bestOfBoxes: t } = (0, ac.Ay)();
        return (0, d.jsx)(ad, { boxLayout: t, title: eI.intl.string(eI.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    ax = (0, ss.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var ag = s(236834),
    ah = s(540504);
function ap(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eM.A)({ userId: t?.id, size: ey._3.SIZE_24, animateOnHover: !0 });
    return (0, d.jsx)("div", {
        className: ah.$6,
        children: (0, d.jsxs)("div", {
            className: ah.sc,
            children: [
                (0, d.jsx)("div", {
                    className: ah.kR,
                    children: (0, d.jsx)(eP.eu, { src: s, "aria-label": t.username, size: ey._3.SIZE_32, ...i }),
                }),
                (0, d.jsx)(eG.D, {
                    variant: "heading-xs/medium",
                    className: ah.FS,
                    color: "text-strong",
                    children: eI.intl.format(eI.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var af = s(579245),
    aN = s(369805);
let aA = function () {
    let e = (0, aN.A)();
    return null == e ? null : (0, d.jsx)(ef, { text: e });
};
function ab() {
    let e = (0, h.bG)([ny.A], () => ny.A.getForSkuAndInterval((0, ec.mH)(tN.pe.TIER_0), tN.WT.MONTH));
    return null != e ? (0, ec.sS)(e) : "\u2026";
}
var aj = s(508556);
let aE = function (e) {
    let { containerVisibilityPercentage: t, variant: s = "default" } = e,
        i = "settings" === s,
        n = (0, e6.bG)([et.Ay], () => et.Ay.useReducedMotion),
        a = (0, e7.TM)();
    return (0, d.jsxs)("div", {
        "aria-hidden": !0,
        className: x()(aj.YU, { [aj.W0]: i }),
        children: [
            (0, d.jsx)(tr, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: aj.wG,
                assetClassName: aj.lu,
                variant: s,
            }),
            (0, d.jsx)(ti, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: aj.nJ,
                carContainerClassName: aj.IN,
                hammerContainerClassName: aj.Gj,
                keyContainerClassName: aj.FV,
                starContainerClassName: aj.E1,
                boltAssetClassName: aj.j7,
                carAssetClassName: aj.or,
                hammerAssetClassName: aj.Wv,
                keyAssetClassName: aj.rs,
                starAssetClassName: aj.OY,
                animateStar: !i,
            }),
        ],
    });
};
var aT = s(14057);
let aC = u.memo(function (e) {
    let { className: t, subscriptionTier: s, isEligibleForBogoPromotion: i, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, j.Ay)(b.A.PREMIUM_MARKETING_HERO_CTA),
        c = ab(),
        o = ax.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        u = (0, ag.A)(),
        m = null != u,
        { visibilityPercentageRef: g, visibilityPercentage: p } = eh(!(0, h.bG)([et.Ay], () => et.Ay.useReducedMotion)),
        f = (0, nu.b)(),
        N = !m && f.length > 0,
        A = (0, ex.u)(K.oW.MARKETING_PAGE_BANNER),
        E = null != A,
        T = (0, nP.ar)() && !E,
        C = (0, eu.O)(),
        I = (null != C && tN.U4.includes(C.discountId)) || E;
    return (0, d.jsx)(j.f5, {
        value: r,
        children: (0, d.jsxs)("div", {
            ref: n,
            className: x()(aT.kL, t, { [aT.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, d.jsx)(nW, { className: aT.kv }),
                (0, d.jsx)("div", {
                    ref: g,
                    children: (0, d.jsxs)("div", {
                        className: aT.hQ,
                        children: [
                            (0, d.jsx)(aE, { containerVisibilityPercentage: p, variant: a }),
                            T && (0, d.jsx)(aA, {}),
                            (0, d.jsx)("div", {
                                className: aT.s8,
                                children: (0, d.jsx)(eU.F, {
                                    forceLevel: 1,
                                    children: (0, d.jsx)(eG.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : aT.wx,
                                        children: eI.intl.string(eI.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, d.jsxs)("div", {
                                className: aT.rf,
                                children: [
                                    m &&
                                        (0, d.jsx)("div", {
                                            className: aT.eZ,
                                            children: (0, d.jsx)(ap, { referrer: u }),
                                        }),
                                    N &&
                                        (0, d.jsx)("div", {
                                            className: aT.Qn,
                                            children: (0, d.jsx)(af.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, d.jsxs)("div", {
                                        className: T ? aT.es : aT.UJ,
                                        children: [
                                            (0, d.jsx)(ej.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!i,
                                                subscriptionTier: I && null == s ? tN.pe.NONE : s,
                                                buttonTextOverride: I ? eI.intl.string(eI.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, d.jsx)(eb.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, d.jsx)("div", {
                                        className: aT.iQ,
                                        children: (0, d.jsx)(J.E, {
                                            color: "text-muted",
                                            variant: "body-xs/medium",
                                            children: o
                                                ? eI.intl.string(eI.t.jHqrJW)
                                                : eI.intl.format(eI.t.kt9wxs, { cheapestMonthlyPrice: c }),
                                        }),
                                    }),
                                    E &&
                                        (0, d.jsx)(eN.x, {
                                            componentId: A.id,
                                            componentType: A.componentType,
                                            promotionId: A.promotionId,
                                            promotionBannerMarketingComponentFields: A.surface,
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
var aI = s(812537);
let aR = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        s = (0, u.useCallback)(
            (e) => {
                let s = r.current[e];
                null != s &&
                    ((s.style.scrollMarginTop = `${t}px`), s.scrollIntoView({ behavior: "smooth", block: "start" }));
            },
            [t],
        ),
        [i, n] = (0, u.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
        [a, l] = (0, u.useState)(e[0]);
    (0, u.useEffect)(() => {
        let e = Object.keys(i).filter((e) => i[e]);
        e.length > 0 && l(e[0]);
    }, [i]);
    let r = (0, u.useRef)({});
    return (
        (0, u.useEffect)(() => {
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
            navBarSections: (0, u.useMemo)(
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
var av = s(818348),
    a_ = s(773188);
let ay = () => {
    let e = (0, g.zy)();
    (0, y.P)(_);
    let t = u.useRef(null),
        s = u.useRef(null),
        i = u.useRef(null),
        n = u.useRef(null),
        a = u.useRef(null),
        l = u.useRef(null),
        r = (0, h.bG)([et.Ay], () => et.Ay.useReducedMotion),
        [c, o] = u.useState(!1),
        [m, p] = u.useState(!1),
        [f, N] = u.useState(!1),
        [A, E] = u.useState(!1),
        T = (0, h.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        C = null != T ? (0, ec.EL)(T) : null,
        I = null != C ? ec.Ay.getSkuIdForPlan(C.planId) : null,
        R = null !== I && I !== tN.pe.TIER_2 ? tN.pe.TIER_2 : null,
        { analyticsLocations: v } = (0, j.Ay)(b.A.PREMIUM_MARKETING);
    u.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, s7.lk)(iu.rE.NITRO_HOME_MARKETING),
        S = P ? n0.N.ORB_MULTIPLIER : null,
        D = u.useMemo(() => {
            let t = new URLSearchParams(e.search).get(nc.x);
            return "orbs" === t
                ? S
                : t === n0.N.THREE_P_PROMOTIONS
                  ? n0.N.THREE_P_PROMOTIONS
                  : t === n0.N.YOUTUBE
                    ? n0.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    nr(D ?? "", null != D);
    let { navBarSections: M, activeSectionId: O } = aR([nz.HOME, nz.WHATS_NEW, nz.BEST_OF_NITRO, nz.PLANS, nz.COMPARE]),
        { home: U, whatsNew: G, bestOfNitro: H, plans: F, compare: V } = M,
        W = (0, d.jsxs)("div", {
            ref: s,
            className: x()(a_.kL, a_.Gd, a_.iI, { [a_.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, d.jsx)(nW, { className: a_.yH }),
                (0, d.jsx)(n$, { navBarSections: M, activeSectionId: O }),
                (0, d.jsxs)("div", {
                    className: a_.Qr,
                    children: [
                        (0, d.jsx)("div", {
                            className: a_.qY,
                            ref: U.ref,
                            children: (0, d.jsx)(w.L, {
                                innerRef: n,
                                onChange: (e) => o(e),
                                threshold: 0,
                                active: !0,
                                children: (0, d.jsx)(aC, { ref: n, subscriptionTier: R }),
                            }),
                        }),
                        (0, d.jsx)("div", {
                            className: a_.So,
                            ref: G.ref,
                            children: (0, d.jsx)(au, { shouldLoadVideo: A, isReducedMotion: r }),
                        }),
                        (0, d.jsx)("div", {
                            className: a_.KQ,
                            ref: H.ref,
                            children: (0, d.jsx)(am, { shouldLoadVideo: A, isReducedMotion: r }),
                        }),
                        (0, d.jsx)("div", {
                            className: a_.qc,
                            ref: F.ref,
                            children: (0, d.jsx)(w.L, {
                                innerRef: i,
                                onChange: (e) => p(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, d.jsx)(nH, { innerRef: i }),
                            }),
                        }),
                        (0, d.jsx)("div", { className: a_.aC, ref: V.ref, children: (0, d.jsx)(aI.A, {}) }),
                    ],
                }),
                (0, d.jsx)(w.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (k.default.track(eZ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: v }),
                            N(!0));
                    },
                    children: (0, d.jsx)("div", { ref: a, className: a_._Z }),
                }),
                (0, d.jsx)(nJ, { ref: l }),
                (0, d.jsx)(nY, { isVisible: !c && !m && A, subscriptionTier: R }),
                (0, d.jsx)(nW, { className: a_.MF }),
            ],
        });
    return (0, d.jsx)(tL.N, {
        theme: av.NJ.DARK,
        children: (e) => (0, d.jsx)(B.Gt, { className: x()(a_.XG, e), ref: t, children: W }),
    });
};
var aP = s(862482),
    aS = s(300349),
    aD = s(106512),
    aM = s(412260),
    aO = s(662367),
    aL = s(374403),
    ak = s(396375),
    aU = s(900797),
    aG = s(847374),
    aw = s(614268);
function aB(e) {
    let { className: t } = e;
    return (0, d.jsx)("div", {
        className: x()(aw.i, t),
        children: (0, d.jsx)(eB.E, { type: "early_access", variant: "premium" }),
    });
}
var aH = s(536071),
    aF = s(729934);
let aV = "/assets/5b4fec8511c3676a.svg",
    aW = "/assets/0838bda6ecd20d91.svg";
function az(e, t, s) {
    return (0, sZ.M)(e) ? t : s;
}
var aX = s(872461);
function aY(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, d.jsxs)(nQ.D, {
        onClick: s,
        className: aX.customButton,
        children: [
            t ? eI.intl.string(eI.t.maZaN3) : eI.intl.string(eI.t["37C26f"]),
            t
                ? (0, d.jsx)(aU.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: aX.arrow })
                : (0, d.jsx)(aG.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: aX.arrow }),
        ],
    });
}
function aK(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: c = !1,
            variant: o = "default",
        } = e,
        { analyticsLocations: u } = (0, j.Ay)(b.A.PREMIUM_MARKETING_PERK_CARD),
        m = (0, d.jsx)("img", { src: n, alt: "", className: x()(a, aX.perksCardArt) }),
        g = "settings" === o;
    return (0, d.jsx)(j.f5, {
        value: u,
        children: (0, d.jsxs)("div", {
            className: x()(aX.perkCard, i, { [aX.settingsCard]: g }),
            children: [
                r ? (0, d.jsx)(aH.A, { className: aX.perkCardNewBadge }) : null,
                c ? (0, d.jsx)(aB, { className: aX.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, d.jsx)(q.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: aX.settingsArt,
                          children: m,
                      })
                    : m,
                (0, d.jsxs)("div", {
                    className: g ? aX.settingsText : void 0,
                    children: [
                        (0, d.jsxs)(eG.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: aX.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, d.jsx)(J.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: aX.perkCardDescription,
                            children: "function" == typeof s ? s(u) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aZ = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = u.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, sq.Ay)(),
                n = (0, s$.X)("usePerkCards"),
                a = (0, e6.bG)([M.default], () => {
                    let e = M.default.getCurrentUser();
                    return ec.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, ec.EJ)(tN.PremiumTypes.TIER_2, { useSpace: !1 });
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
                    imageSource: az(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                (aF.A.setState({ scrollPosition: i6._F.TRY_IT_OUT }),
                                    t(en.X.PROFILE_PANEL, { analyticsLocations: e }));
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
                    imageSource: az(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eI.intl.string(eI.t.Bv8Pfk),
                    description: eI.intl.string(eI.t.JMfaTU),
                    imageSource: az(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eI.intl.string(eI.t.Bv8Pfk),
                    description: eI.intl.string(eI.t.JMfaTU),
                    imageSource: az(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eI.intl.string(eI.t["lGcW+c"]),
                    description: eI.intl.string(eI.t["/fDyO+"]),
                    imageSource: az(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eI.intl.string(eI.t["1c+xwT"]),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: az(i, aW, aV),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eI.intl.string(eI.t.tzdIwI),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: az(i, aW, aV),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eI.intl.string(eI.t.tzdIwI),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: az(i, aW, aV),
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
                    imageSource: az(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: az(i, i7, i5),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aX }),
        r = (0, e6.bG)([et.Ay], () => et.Ay.useReducedMotion),
        { analyticsLocations: c } = (0, j.Ay)();
    return (0, d.jsxs)("div", {
        className: x()(aX.perksContainer, t, {
            [aX.partiallyHidden]: i && !n,
            [aX.subscriberNitroHome]: i,
            [aX.reducedMotion]: r,
        }),
        children: [
            (0, d.jsx)(eG.D, {
                variant: "heading-xxl/semibold",
                className: aX.perksTitle,
                children: i ? eI.intl.string(eI.t.QX14gI) : eI.intl.string(eI.t.RGadQR),
            }),
            (0, d.jsx)("div", {
                className: x()(aX.perkCardContainer, { [aX.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, d.jsx)(aK, { ...t }, e);
                }),
            }),
            i &&
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)("div", {
                            className: x()({ [aX.sizeGizmo]: !n, [aX.sizeGizmoExpanded]: n }),
                            children: (0, d.jsx)(aY, {
                                onClick: function () {
                                    (k.default.track(eZ.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: c,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, d.jsx)("div", { className: x()(aX.cover, { [aX.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aq = s(615939);
let aJ = u.memo(function (e) {
    let { className: t } = e,
        s = [
            {
                id: tw.MORE_EMOJIS_CARD_ID,
                title: eI.intl.string(eI.t["R2IV/Q"]),
                description: eI.intl.string(eI.t.DRMecB),
                imageSource: sU.A,
            },
            {
                id: tw.HD_VIDEO_CARD_ID,
                title: eI.intl.string(eI.t["/mQ5gg"]),
                description: eI.intl.string(eI.t["7WwAXh"]),
                imageSource: sL.A,
            },
            {
                id: tw.LARGE_UPLOADS_CARD_ID,
                title: eI.intl.string(eI.t.nL1WZV),
                description: (0, s1.M6)({
                    legacyCopy: eI.intl.formatToPlainString(eI.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eI.intl.formatToPlainString(eI.t.teOTfv, {
                        maxFileSize: (0, ec.EJ)(tN.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: aq.A,
            },
            {
                id: tw.PROFILES_CARD_ID,
                title: eI.intl.string(eI.t.KcyDwF),
                description: eI.intl.string(eI.t.Mt3U1W),
                imageSource: sM,
            },
        ];
    return (0, d.jsxs)(q.B, {
        gap: 16,
        className: x()(aX.settingsPerks, t),
        children: [
            (0, d.jsx)(eG.D, { variant: "heading-xl/semibold", children: eI.intl.string(eI.t.q1u7nQ) }),
            (0, d.jsx)(eU.F, {
                children: (0, d.jsx)("div", {
                    className: aX.settingsGrid,
                    children: s.map((e) => (0, d.jsx)(aK, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var aQ = s(695366),
    a$ = s(370049);
let a0 = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nP.ar)();
    if (null == i) return null;
    let r = null != i ? ec.Ay.getPremiumPlanItem(i) : null;
    if (
        (ec.Ay.isBoostOnlySubscription(i)
            ? (t = eI.intl.string(eI.t.Uj0md3))
            : null != r && (t = ec.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function c() {
        return (0, ea.openUserSettings)(en.X.SUBSCRIPTIONS_PANEL);
    }
    let o = (null != r ? ec.Ay.getSkuIdForPlan(r.planId) : null) === tN.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, d.jsxs)(tk.Z, {
            className: x()(a$.kL, n, { [a$.He]: l }),
            type: tk.Z.Types.CUSTOM,
            children: [
                (0, d.jsx)(aQ.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: x()(a$.Kk, { [a$.Pt]: l }),
                }),
                (0, d.jsx)(J.E, {
                    variant: "body-sm/medium",
                    color: s,
                    children: o
                        ? eI.intl.format(eI.t["tYuv+T"], {
                              helpdeskArticle: er.A.getArticleURL(eZ.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: c,
                          })
                        : eI.intl.format(eI.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: c }),
                }),
            ],
        })
    );
};
var a1 = s(978836);
let a2 = function (e) {
    let { lifted: t = !1 } = e;
    return (0, d.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: x()(a1.zr, { [a1.N]: t }),
        children: [
            (0, d.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, d.jsx)("defs", {
                children: (0, d.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, d.jsx)("stop", { className: a1.eq }),
                        (0, d.jsx)("stop", { offset: "0.339235", className: a1.l_ }),
                        (0, d.jsx)("stop", { offset: "0.492065", className: a1.sM }),
                        (0, d.jsx)("stop", { offset: "0.823236", className: a1.zi }),
                        (0, d.jsx)("stop", { offset: "0.899558", className: a1.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var a3 = s(194509),
    a6 = s(317587);
let a7 = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, e8.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eZ.JJy.MARKETING_FLOATING_CTA },
        r = (0, sq.Ay)(),
        c = (0, nF.M)(r);
    return (0, d.jsx)(e5.animated.div, {
        className: x()(a6.iE, { [a6.H8]: i, [a6.q4]: !t }),
        style: a,
        children: (0, d.jsxs)("div", {
            className: i ? a6.zW : a6.iJ,
            children: [
                (0, d.jsx)(ak.A, {
                    color: c ? aP.XD.BRAND_INVERTED : void 0,
                    className: x()(a6.x6, { [a6.Ph]: c }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: c ? void 0 : a6.PJ,
                }),
                (0, d.jsx)(a3.A, { className: a6.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var a5 = s(386564);
function a8(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: s,
            containerClassName: i,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        c = r
            ? (0, d.jsx)(ak.A, {
                  color: l ? aP.XD.BRAND_INVERTED : void 0,
                  className: x()(a5.x6, a5.Ph, n, { [a5.Sq]: t && a, [a5.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : a5.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, d.jsx)(ak.A, {
                  color: l || !a ? aP.XD.BRAND_INVERTED : void 0,
                  className: x()(a5.x6, a5.Ph, n, { [a5.Sq]: t && a, [a5.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        o = t && a ? null : (0, d.jsx)(a3.A, { className: x()(a5.x6, n), color: a ? void 0 : aP.XD.WHITE });
    return (0, d.jsxs)("div", { className: x()(a5.UD, i), children: [c, " ", o] });
}
function a9() {
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(aH.p, { className: a5.zd }),
            (0, d.jsx)(aH.p, { className: a5.G }),
            (0, d.jsx)(aH.p, { className: a5.zy }),
            (0, d.jsx)(aH.p, { className: a5.GX }),
        ],
    });
}
function a4(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = ab();
    return (0, d.jsx)(J.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: x()(a5.h_, { [a5.If]: s, [a5.jn]: i }),
        children: eI.intl.format(eI.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let le = function (e) {
    let { className: t, buttonClassName: s, subscriptionTier: i, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(b.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, eo.QQ)(),
        c = (0, nP.ar)(),
        o = (0, nu.b)().length > 0,
        u = eI.intl.string(eI.t.YCZldK);
    return (0, d.jsx)(j.f5, {
        value: l,
        children: (0, d.jsxs)("div", {
            ref: a,
            className: x()(a5.kL, t, { [a5.V1]: !c, [a5.Q4]: !c && o }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, d.jsxs)("div", {
                    className: c ? a5.I6 : a5.G1,
                    children: [
                        (0, d.jsx)(eU.F, {
                            forceLevel: 1,
                            children: (0, d.jsx)(eG.D, {
                                variant: c ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: u,
                            }),
                        }),
                        o
                            ? (0, d.jsx)("div", {
                                  className: a5.DF,
                                  children: (0, d.jsx)(af.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, d.jsx)(a4, {}),
                        r
                            ? (0, d.jsx)("div", {
                                  className: a5.UD,
                                  children: (0, d.jsx)(a3.A, { className: x()(a5.x6, s), color: aP.XD.WHITE }),
                              })
                            : (0, d.jsx)(a8, {
                                  subscriptionTier: i,
                                  inOfferExperience: c,
                                  buttonClassName: s,
                                  isDarkMode: n,
                              }),
                        o && (0, d.jsx)(a4, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, d.jsx)(a9, {}),
            ],
        }),
    });
};
var lt = s(403227),
    ls = s(367740),
    li = s(377770);
function ln(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, d.jsx)(a2, { lifted: t }) : null;
}
let la = () => {
        let { enabled: e } = aS.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, y.P)(_);
        let t = u.useRef(null),
            s = u.useRef(null),
            i = u.useRef(null),
            n = (0, sq.Ay)(),
            a = (0, sZ.M)(n),
            [l, r] = u.useState(!1),
            [c, o] = u.useState(!1),
            [m, g] = u.useState(!1),
            p = !l && !c,
            [f, N] = u.useState(!1),
            A = (0, h.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
            E = null != A ? (0, ec.EL)(A) : null,
            T = null != E ? ec.Ay.getSkuIdForPlan(E.planId) : null,
            C = null !== T && T !== tN.pe.TIER_2 ? tN.pe.TIER_2 : null,
            I = (0, em.V)(),
            R = I?.subscriptionTrial?.skuId,
            v = (0, nP.ar)(),
            P = !e && v,
            S = (0, h.bG)([aM.A], () => {
                let e = aM.A.getMarketingComponentBySurface(K.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e ? null : e.surface;
            }),
            D = (0, aL.Q)(),
            { analyticsLocations: M } = (0, j.Ay)(b.A.PREMIUM_MARKETING);
        u.useEffect(() => {
            N(!0);
        }, []);
        let O = e
            ? (0, d.jsx)("div", {
                  className: li.OE,
                  children: (0, d.jsx)(w.L, {
                      innerRef: t,
                      onChange: o,
                      threshold: 0.1,
                      active: !0,
                      children: (0, d.jsx)(nH, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, d.jsx)("div", {
                  className: li.dY,
                  children: (0, d.jsx)(w.L, {
                      innerRef: t,
                      onChange: (e) => o(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, d.jsx)(ng.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, d.jsx)(ak.A, {
                              showIcon: !1,
                              subscriptionTier: tN.pe.TIER_0,
                              className: ls.Ph,
                              look: aP.pR.OUTLINED,
                              color: aP.XD.WHITE,
                              buttonShineClassName: ls.Qr,
                          }),
                          tier2CTAButton:
                              R === tN.pe.TIER_0
                                  ? (0, d.jsx)(ak.A, {
                                        showIcon: !1,
                                        subscriptionTier: tN.pe.TIER_2,
                                        className: ls.Ph,
                                        look: aP.pR.OUTLINED,
                                        color: aP.XD.WHITE,
                                        buttonShineClassName: ls.Qr,
                                    })
                                  : (0, d.jsx)(ak.A, {
                                        color: aP.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tN.pe.TIER_2,
                                        className: ls.Ph,
                                        textOptions: { textClassName: ls.Ac },
                                        buttonShineClassName: ls.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, d.jsxs)("div", {
            className: x()(li.kL, { [li.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, d.jsx)(a0, {
                    premiumSubscription: A,
                    textColor: e ? "text-default" : void 0,
                    className: x()(li.R3, { [li.aZ]: v }),
                }),
                P &&
                    (0, d.jsxs)("div", {
                        className: li.n1,
                        children: [
                            (0, d.jsx)(ln, { inOfferExperience: v }),
                            (0, d.jsx)(t_.l, {
                                className: li.ij,
                                size: "md",
                                location: b.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, d.jsxs)("div", {
                    className: x()({ [li.V1]: !P }),
                    children: [
                        null != S && (0, d.jsx)(aD.m, { className: li.w$, config: S }),
                        (0, d.jsxs)("div", {
                            className: li.iS,
                            children: [
                                !P &&
                                    (0, d.jsx)(t_.l, {
                                        className: li.ij,
                                        size: "md",
                                        location: b.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, d.jsx)(w.L, {
                                    innerRef: s,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, d.jsx)(aC, { ref: s, subscriptionTier: C, variant: "settings" })
                                        : (0, d.jsx)(le, {
                                              ref: s,
                                              subscriptionTier: C,
                                              className: x()({ [li.p7]: v, [li.Pw]: v, [li.Cv]: null != A }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, d.jsx)("div", { className: li.Ol, children: (0, d.jsx)(aO.I, { component: D }) }),
                O,
                e ? (0, d.jsx)(aJ, { className: li.OE }) : (0, d.jsx)(aZ, { className: li.B_ }),
                (0, d.jsx)("div", {
                    className: li.aC,
                    children: e
                        ? (0, d.jsx)(aI.A, { variant: "settings" })
                        : (0, d.jsx)(lt.A, { className: li.JQ, hideCTAs: !0 }),
                }),
                (0, d.jsx)("div", { className: li.hz }),
                e
                    ? (0, d.jsx)(nY, { isVisible: p && f, subscriptionTier: C, variant: "settings" })
                    : (0, d.jsx)(a7, { isVisible: p && f, subscriptionTier: C, isApplicationHome: !1 }),
                (0, d.jsx)(w.L, {
                    innerRef: i,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (k.default.track(eZ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            g(!0));
                    },
                    children: (0, d.jsx)("div", { ref: i, className: li._Z }),
                }),
                (0, d.jsx)("img", {
                    src: no,
                    className: li.Kw,
                    width: 112,
                    height: 85,
                    alt: eI.intl.string(eI.t.X4IxWL),
                }),
            ],
        });
    },
    ll = function (e) {
        let { entrypoint: t } = e,
            s = (0, em.V)(),
            i = (0, eu.O)(),
            n = (0, nx.NF)({ trialOffer: s }),
            a = (0, nx.Tp)(),
            l = (0, h.bG)([nm.A], () => nm.A.getReminderStateId());
        switch (
            (u.useEffect(() => {
                (!0 === n && (0, nx.QG)(), !0 === a && (0, nx.ne)(l), (null != s || null != i) && (0, G.u1)(s, i));
            }, [s, i, n, a, l]),
            t)
        ) {
            case tN.tU.UserSettings:
                return (0, d.jsx)(la, {});
            case tN.tU.ApplicationStoreHome:
                return (0, d.jsx)(ay, {});
            default:
                return null;
        }
    };
var lr = s(531296);
let lc = function (e) {
    let { entrypoint: t = tN.tU.UserSettings } = e;
    (0, y.P)(_);
    let s = (0, T.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: n } = (0, j.Ay)(b.A.PREMIUM_MARKETING),
        a = (0, h.bG)([L.A], () => L.A.hasFetchedSubscriptions()),
        l = (0, h.bG)([O.A], () => O.A.hasFetchedPaymentSources),
        r = (0, h.bG)([M.default], () => M.default.getCurrentUser()),
        c = r?.id,
        o = (0, em.V)(),
        m = (0, eu.O)(),
        R = (0, C.Y)(tN.T7),
        [v, w] = u.useState(!0),
        B = u.useRef(0),
        H = (0, U.YE)(r, tN.PremiumTypes.TIER_2);
    ((0, nu.b)(),
        u.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([E.hP(), E.$o(), (0, f.zS)(null, null, eZ.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        u.useEffect(() => {
            v ||
                k.default.track(eZ.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: B.current,
                });
        }, [i, v]),
        u.useEffect(() => {
            s && (null != o || null != m) && (0, G.u1)(o, m);
        }, [s, o, m]));
    let F = (0, g.zy)(),
        V = u.useRef(!1),
        W = a && l && R,
        [z, X] = u.useState(W);
    (W && !z && X(!0),
        u.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tN.pe.TIER_0, nitro: tN.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((V.current = !0),
                (0, S.bG)(eZ.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: s, analyticsLocations: n }));
        }, [W, F.search, n]));
    let Y = (0, h.bG)([D.A], () => D.A.enabled),
        K = t === tN.tU.ApplicationStoreHome,
        Z = Y
            ? (0, d.jsx)(N.A, {})
            : s
              ? (0, d.jsx)(I.uK, {})
              : K && H
                ? (0, d.jsx)(j.f5, { value: n, children: (0, d.jsx)(nd, { userId: c }) })
                : z
                  ? null
                  : (0, d.jsx)("div", { className: x()(lr.kL, lr.Lq), children: (0, d.jsx)(p.y, {}) });
    return null != Z
        ? !Y && !s && K && H
            ? Z
            : (0, d.jsxs)(d.Fragment, { children: [K && (0, d.jsx)(A.A, {}), Z] })
        : (0, d.jsx)(j.f5, { value: n, children: (0, d.jsx)(ll, { entrypoint: t }) });
};
