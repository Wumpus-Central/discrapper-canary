(i.d(t, { A: () => lj }), i(323874), i(14289), i(35956), i(205816));
var s,
    n,
    a,
    l,
    r,
    c,
    o,
    d = i(477900),
    u = i(582128),
    m = i(503698),
    x = i.n(m),
    g = i(806163),
    p = i(855986),
    h = i(289873),
    f = i(73825),
    N = i(369143),
    A = i(107834),
    j = i(793574),
    b = i(688810),
    E = i(669815),
    T = i(86379),
    C = i(160946),
    I = i(500597),
    R = i(840251),
    v = i(688151);
let _ = new R.E([], v.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var y = i(611924),
    P = i(778705),
    S = i(976860),
    D = i(351906),
    M = i(287809),
    O = i(295405),
    k = i(166403),
    U = i(129230),
    L = i(474090),
    G = i(739053),
    w = i(831259),
    B = i(516521),
    H = i(961250),
    F = i(622886),
    V = i(851767),
    W = i(917445),
    z = i(131168),
    X = i(511484),
    Y = i(175020),
    K = i(517352),
    Z = i(192308),
    q = i(331322),
    J = i(834730),
    Q = i(403581),
    $ = i(821609),
    ee = i(502572),
    et = i(775602),
    ei = i(366999),
    es = i(531260),
    en = i(780964),
    ea = i(766075),
    el = i(786300),
    er = i(975571),
    ec = i(448645),
    eo = i(89366),
    ed = i(881489),
    eu = i(423814),
    em = i(77528),
    ex = i(641436),
    eg = i(172218);
function ep() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, u.useState)(1),
        s = (0, u.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
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
var eh = i(287763);
let ef = function (e) {
    let { text: t } = e;
    return (0, d.jsx)("div", {
        className: eh.i,
        children: (0, d.jsx)(J.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var eN = i(371764),
    eA = i(103411),
    ej = i(65470),
    eb = i(792656),
    eE = i(536637),
    eT = i.n(eE),
    eC = i(496431),
    eI = i(792996),
    eR = i(850292);
let ev = function (e) {
    let { expiresAt: t, className: i, digitTextVariant: s = "body-md/medium" } = e,
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
        className: x()(eR.Xl, i, { [eR.a3]: "body-lg/semibold" === s }),
        children: [
            (0, d.jsx)(J.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: eI.intl.string(eI.t["/ARFVE"]),
            }),
            (0, d.jsx)("div", {
                className: eR.$R,
                children: o.map((e, t) =>
                    (function (e, t, i) {
                        let s,
                            [n, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
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
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, d.jsx)("div", {
                                                        className: eR.B2,
                                                        children: (0, d.jsx)(J.E, {
                                                            variant: i,
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
                    })(e, t === o.length - 1, s),
                ),
            }),
        ],
    });
};
var e_ = i(473702),
    ey = i(778712),
    eP = i(97808),
    eS = i(609425),
    eD = i(16371),
    eM = i(854627),
    eO = i(427262),
    ek = i(938767);
function eU() {
    let e = (0, p.bG)([M.default], () => M.default.getCurrentUser()),
        t = (0, eS.A)(),
        { avatarSrc: i, avatarDecorationSrc: s, eventHandlers: n } = (0, eM.A)({ userId: e?.id, size: ey._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eO.mG)(e);
    return (0, d.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, d.jsx)("div", {
                className: ek.my,
                children: (0, d.jsx)(eP.eu, {
                    src: i,
                    avatarDecoration: s,
                    size: ey._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, d.jsx)("div", { className: ek.QC, children: (0, d.jsx)(eD.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eL = i(707554),
    eG = i(534514);
let ew = function (e) {
    let { className: t, color: i = "text-strong", variant: s = "nitro-lg", children: n } = e;
    return (0, d.jsx)(eL.F, {
        forceLevel: 1,
        children: (0, d.jsx)(eG.D, { className: t, variant: s, color: i, children: n }),
    });
};
var eB = i(805251),
    eH = i(969935),
    eF = i(132506),
    eV = i(610709),
    eW = i(478016),
    ez = i(318254),
    eX = i(646514),
    eY = i(626031),
    eK = i(197630);
i(232198);
var eZ = i(652215),
    eq = i(957457);
function eJ(e) {
    let { nRewardsGranted: t, referralRewardType: i, className: s } = e;
    return t < 1
        ? null
        : i === eK.xb.ORBS
          ? (0, d.jsx)(eQ, { nRewardsGranted: t, className: s })
          : i === eK.xb.DISCOUNT
            ? (0, d.jsx)(e$, { nRewardsGranted: t, className: s })
            : null;
}
function eQ(e) {
    let { nRewardsGranted: t, className: i } = e,
        s = 5e3 * t,
        [n, a] = u.useState(0);
    return (
        u.useEffect(() => {
            a(s);
        }, [s]),
        (0, d.jsxs)(q.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: i,
            children: [
                (0, d.jsxs)("div", {
                    className: eq.u,
                    "aria-label": String(s),
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
    let { nRewardsGranted: t, className: i } = e;
    return (0, d.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: i,
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
var e0 = i(303682),
    e1 = i(758836),
    e2 = i(558992);
function e3(e) {
    let { className: t } = e,
        {
            referralSentUsers: i,
            nReferralsSent: s,
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
                    nReferralsSent: s,
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
                                  (0, d.jsx)(eV.ZP, { referralSentUsers: i }),
                                  (0, d.jsx)(eJ, { nRewardsGranted: c.numRewardGranted, referralRewardType: u }),
                              ],
                          })
                        : (0, d.jsx)(eV.ZP, { referralSentUsers: i, className: e2.t7 }),
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
                              analyticsSource: j.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eV.jM)({
                              startingScreen: e0.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e6 = i(164636),
    e7 = i(676279),
    e5 = i(120692),
    e8 = i(717421),
    e9 = i(396583),
    e4 = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    te = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tt = (e) => {
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
        o = (0, e8.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, u.useState)(1),
        p = (0, e8.z)(
            null != i
                ? {
                      from: { scale: x > 0 ? i.startScale : i.endScale },
                      to: { scale: x > 0 ? i.endScale : i.startScale },
                      config: { duration: i.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [h, f] = (0, u.useState)(1),
        N = (0, e8.z)(
            null != t
                ? {
                      from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, u.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, b] = (0, u.useState)(0),
        [E, T] = (0, u.useState)(1),
        C = (0, e8.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e9.A)(() => {
        (b(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? c
        : (0, d.jsx)(e5.animated.div, {
              style: {
                  transform: o.y?.to((e) => {
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
              children: c,
          });
};
var ti = i(382168);
let ts = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: i,
        boltContainerClassName: s,
        carContainerClassName: n,
        hammerContainerClassName: a,
        keyContainerClassName: l,
        starContainerClassName: r,
        boltAssetClassName: c,
        carAssetClassName: o,
        hammerAssetClassName: u,
        keyAssetClassName: m,
        starAssetClassName: g,
        animationSpeedScale: p = 1,
        blurScale: h = 1,
        animateStar: f = !0,
    } = e;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            null != s &&
                (0, d.jsx)("div", {
                    className: x()(ti.nJ, s),
                    children: (0, d.jsx)(tt, {
                        blurAnimationData: { startBlurRadius: 10 * h, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e4.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: te.UP,
                                      range: 125,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: c,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, d.jsx)("div", {
                    className: x()(ti.IN, n),
                    children: (0, d.jsx)(tt, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e4.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: te.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: o,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, d.jsx)("div", {
                    className: x()(ti.Gj, a),
                    children: (0, d.jsx)(tt, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e4.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: te.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: u,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, d.jsx)("div", {
                    className: x()(ti.FV, l),
                    children: (0, d.jsx)(tt, {
                        blurAnimationData: { startBlurRadius: 5 * h, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e4.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: te.UP,
                                      range: 200,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, d.jsx)("div", {
                    className: x()(ti.E1, r),
                    children: (0, d.jsx)(tt, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * h, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: e4.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: te.UP,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t || !f,
                        animationSpeedScale: p,
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
var tn = i(607470),
    ta = i(562915);
let tl =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tr = function (e) {
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
                          containerVisibilityPercentage: s,
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
                flyingWumpusContainerClassName: i,
                flyingWumpusAssetClassName: s,
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
                animationSpeedScale: p = 1,
            } = e,
            h = (0, e6.bG)([et.Ay], () => et.Ay.useReducedMotion),
            f = (0, e7.TM)();
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(tr, {
                    supportHEVCAlpha: f,
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
                    animationSpeedScale: p,
                }),
                (0, d.jsx)(ts, {
                    isMotionReduced: h,
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
                    animationSpeedScale: p,
                }),
            ],
        });
    };
var to = i(942663);
let td = function (e) {
    let { containerVisibilityPercentage: t, compact: i } = e;
    return (0, d.jsx)(tc, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: x()(to.wG, i && to.Vx),
        flyingWumpusAssetClassName: x()(to.lu, i && to.ov),
        boltContainerClassName: x()(to.nJ, i && to.Wc),
        hammerContainerClassName: x()(to.Gj, i && to.XA),
        keyContainerClassName: x()(to.FV, i && to.oZ),
        starContainerClassName: x()(to.E1, i && to.LN),
        boltAssetClassName: x()(to.j7, i && to.QN),
        hammerAssetClassName: x()(to.Wv, i && to.B9),
        keyAssetClassName: x()(to.rs, i && to.I1),
        starAssetClassName: x()(to.OY, i && to.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tu = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tm = i(454273);
let tx = function (e) {
    let t,
        i,
        {
            className: s,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: l,
            shouldShowReferralProgressBar: r,
            marketingBanner: c,
            heroButtons: o,
        } = e,
        { visibilityPercentageRef: u, visibilityPercentage: m } = ep(!(0, p.bG)([et.Ay], () => et.Ay.useReducedMotion)),
        g =
            ((t = { [tu.MORNING]: eI.t["Wvc/I+"], [tu.AFTERNOON]: eI.t["d+0STx"], [tu.EVENING]: eI.t.CqsxKI }),
            eI.intl.string(
                t[
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? tu.MORNING
                        : i >= 12 && i < 17
                          ? tu.AFTERNOON
                          : tu.EVENING
                ],
            )),
        h = c ?? (r ? (0, d.jsx)(e3, {}) : null);
    return (0, d.jsx)("div", {
        className: x()(tm.kL, tm.Eg, s),
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
                                        (0, d.jsx)(eU, {}),
                                    ],
                                }),
                                o,
                            ],
                        }),
                        h,
                    ],
                }),
                (0, d.jsx)("div", {
                    className: tm.y3,
                    children: (0, d.jsx)(td, { containerVisibilityPercentage: m, compact: null == h }),
                }),
            ],
        }),
    });
};
var tg = i(549926);
let tp = function (e) {
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
var th = i(499126);
let tf = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, d.jsx)(tc, {
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
var tN = i(682901);
function tA(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = (0, ed.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = ep(!(0, p.bG)([et.Ay], () => et.Ay.useReducedMotion));
    return (0, d.jsx)("div", {
        className: x()(tm.kL, i),
        ref: s,
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
                                (0, d.jsx)(eb.A, {
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
function tj(e) {
    let {
            className: t,
            buttonVisibilityRef: s,
            userDiscountOffer: n,
            discountedPrice: a,
            premiumSubscription: l,
            analyticsLocations: r,
            headingTop: c,
            showPill: o,
            shouldShowReferralProgressBar: u,
            marketingBanner: m,
        } = e,
        { visibilityPercentageRef: g, visibilityPercentage: h } = ep(!(0, p.bG)([et.Ay], () => et.Ay.useReducedMotion)),
        f = m ?? (u ? (0, d.jsx)(e3, {}) : null);
    return (0, d.jsx)("div", {
        className: x()(tm.kL, tm.Eg, t),
        ref: s,
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
                                                    (0, d.jsx)(t, {
                                                        ...i,
                                                        analyticsLocations: r,
                                                        initialStep: e,
                                                        premiumSubscription: l,
                                                    });
                                            })
                                        );
                                    },
                                }),
                                (0, d.jsx)(ej.A, {
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
                    children: (0, d.jsx)(tp, { containerVisibilityPercentage: h }),
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
            userDiscountOffer: c,
            discountedPrice: o,
            buttonVisibilityRef: u,
        } = tT(),
        { analyticsLocations: m } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, ex.uF)(K.oW.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eZ.Dmq.CANCELED,
        p = null;
    if (null != x) {
        let { surface: e, id: t, promotionId: i, componentType: s } = x;
        p = (0, d.jsx)(eN.x, {
            componentId: t,
            componentType: s,
            promotionId: i,
            promotionBannerMarketingComponentFields: e,
        });
    }
    let h = (0, em.V)(),
        f = (0, eu.O)(),
        N = (0, X.U9)(f, tN.pe.TIER_2) ? tN.pe.TIER_2 : void 0,
        A = null != r && r.status !== eZ.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, es.A)(),
        T = E.isFractionalPremiumActive && !A && null == p && !l;
    if (i) return (0, d.jsx)(tA, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, d.jsxs)("div", {
                  className: tm.UJ,
                  children: [
                      (0, d.jsx)(eb.A, { size: "md", subscriptionTier: h?.subscriptionTrial?.skuId ?? N }),
                      (0, d.jsx)(ej.A, {
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
            shouldShowReferralProgressBar: s,
            marketingBanner: p,
            heroButtons: e,
        });
    }
    return l && null != c && null != r
        ? (0, d.jsx)(tj, {
              className: t,
              buttonVisibilityRef: u,
              userDiscountOffer: c,
              discountedPrice: o,
              premiumSubscription: r,
              analyticsLocations: m,
              headingTop: n,
              showPill: a,
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          })
        : (0, d.jsx)(tx, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          });
}
let [tE, tT] = (0, el.A)(),
    tC = function (e) {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, ed.ds)(),
            r = (0, eo.QQ)(),
            c = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
            o = null != c && c.status === eZ.Dmq.CANCELED && null != s,
            m = r && !o,
            x = eI.intl.string(eI.t.qYKftX),
            g = (0, eA.m)(),
            { fractionalState: h, endsAt: f } = (0, es.A)(),
            N = (0, ei.Ay)(f, ei.yE.CREDITS_ENDS_IN),
            A = h !== tN.xc.NONE && !l;
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
                    userDiscountOffer: s,
                    discountedPrice: n,
                    buttonVisibilityRef: i,
                }),
                [E, m, o, c, s, n, i],
            );
        return (0, d.jsx)(b.f5, {
            value: a,
            children: (0, d.jsx)(tE.Provider, {
                value: T,
                children: (0, d.jsx)(tb, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var tI = i(435558),
    tR = i(308588),
    tv = i(24197),
    t_ = i(28863),
    ty = i(212245),
    tP = i(19191),
    tS = i(597758),
    tD = i(412260),
    tM = i(316511);
function tO(e) {
    return null != e.effectiveEndDate ? e.effectiveEndDate.getTime() + 1 : null;
}
function tk(e, t) {
    let i = e.filter((e) => e > t);
    return i.length > 0 ? Math.min(...i) : null;
}
var tU = i(706778),
    tL = i(498470),
    tG = i(807098),
    tw = i(92551),
    tB = i(637706),
    tH = i(788883),
    tF = i(700556),
    tV = i(821874);
function tW(e) {
    let { id: t, sectionClassName: i, heading: s, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = tV.Ui;
    return (0, d.jsxs)("div", {
        id: t,
        className: i,
        children: [
            s,
            n,
            null != a ? (0, d.jsx)("div", { className: x()(r, null != n && tF.Jx, l), children: a }) : null,
        ],
    });
}
var tz = i(477106),
    tX = i(762493);
function tY(e) {
    let { sectionHeader: t } = e,
        {
            component: i,
            copy: { header: s, subheader: n },
        } = t,
        a = (0, tB.C)(i.surface.helpArticle, "");
    return (0, d.jsxs)(q.B, {
        gap: 8,
        className: tV.R_,
        children: [
            (0, d.jsx)(tH.A, { componentType: i.componentType, componentId: i.id, promotionId: i.promotionId }),
            "" !== s && (0, d.jsx)(eG.D, { variant: "nitro-sm", className: tF.U6, children: s }),
            ("" !== n || null != a) &&
                (0, d.jsxs)(J.E, {
                    variant: "body-md/medium",
                    color: "text-subtle",
                    children: [
                        n,
                        null != a &&
                            (0, d.jsxs)(d.Fragment, {
                                children: [
                                    "" !== n && " ",
                                    (0, d.jsx)(t_.Anchor, { href: a.url, children: a.linkText }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function tK(e) {
    let { component: t } = e,
        { button: i, background: s, foreground: n, thirdPartyLogo: a } = t.surface,
        l = t.surface.description.trim(),
        { analyticsLocations: r } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
        c = (0, ty.p)(),
        o = (0, tG.T)(s),
        m = null != o && "" !== o,
        x = (0, tG.T)(n, m),
        g = (0, tG.T)(a, m),
        p = (function (e) {
            if (null == e || e.buttonAction === tR.dz.UNSPECIFIED) return;
            let t = e.copy.trim();
            return "" !== t ? t : void 0;
        })(i),
        h = u.useMemo(
            () =>
                null != i
                    ? (0, tL.h)({
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
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(tH.A, { componentType: t.componentType, componentId: t.id, promotionId: t.promotionId }),
            (0, d.jsx)(tU.S, {
                id: `nitro-perk-card-${t.id}`,
                title: t.surface.header.trim(),
                description: "" !== l ? l : void 0,
                caption: null != g && "" !== g ? (0, d.jsx)("img", { src: g, alt: "" }) : void 0,
                primaryAsset: x ?? void 0,
                backgroundAssetUrl: m ? o : void 0,
                ctaText: p,
                onCtaClick: null != p ? h : void 0,
                containerClassName: tV.Nr,
            }),
        ],
    });
}
function tZ() {
    var e;
    let t,
        i,
        s,
        n,
        a,
        l,
        r = (0, ex.uF)(K.oW.NITRO_HOME_SECTION_HEADER),
        c =
            ((e = K.oW.NITRO_PERK_CARD),
            u.useEffect(() => {
                (0, tS.BE)();
            }, []),
            (t = (0, p.yK)([tD.A, tP.A], () =>
                tD.A.getActiveMarketingComponentsBySurfaceUnprioritized(e).filter((e) =>
                    (0, tM.A)(tD.A.getMarketingPromotionForEligibility(e.promotionId), tP.A),
                ),
            )),
            (i = (0, p.yK)([tD.A], () => t.map((e) => tD.A.getMarketingPromotionForEligibility(e.promotionId)), [t])),
            (s = u.useMemo(
                () => [...i.map((e) => e?.endDate.getTime() ?? null), ...t.map(tO)].filter((e) => null != e),
                [t, i],
            )),
            (n = u.useCallback(() => tk(s, Date.now()), [s])),
            (a = u.useCallback(
                (e) => {
                    let t;
                    return (
                        !(function i() {
                            let n = Date.now(),
                                a = tk(s, n);
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
            (l = u.useSyncExternalStore(a, n, n)),
            u.useMemo(
                () =>
                    t.filter((e, t) => {
                        var s;
                        return ((s = i[t]), !(null != s && (null == l || s.endDate.getTime() < l)));
                    }),
                [t, i, l],
            )),
        o = u.useMemo(() => {
            let e;
            return (
                (e = c.filter((e) => {
                    let { surface: t } = e;
                    return "" !== t.header.trim() && t.placements.includes(tv.U.NITRO_HOME);
                })),
                (0, tI.sortBy)(e, (e) => {
                    let { surface: t } = e;
                    return 0 === t.position ? 1 / 0 : t.position;
                })
            );
        }, [c]);
    if (0 === o.length) return null;
    let m = (function (e) {
        if (null == e) return null;
        let t = (function (e) {
            if ("nitroHomeSectionHeader" !== e.properties.properties.oneofKind) return null;
            let { nitroHomeSectionHeader: t } = e.properties.properties,
                i = e.getFormatVariableValues(eI.intl.currentLocale),
                s = (0, tw.n)(t.header, i),
                n = (0, tw.n)(t.subheader, i),
                a = s.ok ? s.content.trim() : "",
                l = n.ok ? n.content.trim() : "";
            return "" === a && "" === l ? null : { header: a, subheader: l };
        })(e);
        return null != t ? { component: e, copy: t } : null;
    })(r);
    return (0, d.jsx)(tW, {
        sectionClassName: x()(tX.uW, tX.Uv, tX.qr),
        heading: null != m ? (0, d.jsx)(tY, { sectionHeader: m }) : null,
        gridClassName: tz.V,
        grid: o.map((e) => (0, d.jsx)(tK, { component: e }, e.id)),
    });
}
var tq = i(820284),
    tJ = i(742589),
    tQ = i(392943),
    t$ = i(521440),
    t0 = i(603202),
    t1 = i(673992);
let t2 = function () {
    return (0, d.jsx)(tq.A, {
        section: eZ.JJy.NAVIGATION,
        children: (0, d.jsx)(tJ.A, {
            className: x()(t0.TQ, t1.C$),
            transparent: !0,
            role: "navigation",
            children: (0, d.jsxs)("div", {
                className: t0.Wc,
                children: [
                    (0, d.jsxs)("div", {
                        className: t1.wk,
                        children: [
                            (0, d.jsx)(Q.NitroWheelIcon, { colorClass: t1.tr }),
                            (0, d.jsx)("span", {
                                role: "img",
                                "aria-label": eI.intl.string(eI.t.Ipxkog),
                                className: t1.Ss,
                                children: (0, d.jsx)(tQ.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, d.jsxs)("div", {
                        className: t0.MQ,
                        children: [
                            (0, d.jsx)(t$.l, { size: "sm", location: j.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, d.jsx)(ej.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var t3 = i(325499),
    t6 = i(613412),
    t7 = i(885574),
    t5 = i(43990),
    t8 = i(993077),
    t9 = i(139286),
    t4 = i(872725),
    ie = i(920050),
    it = i(51965),
    ii = i(375776),
    is = i(727811),
    ia = i(222652),
    il = i(831768),
    ir = i(934353);
function ic(e) {
    let { openRewardModal: t } = e,
        i = (0, ia.z)();
    if (i.kind === ia.N.SUBSCRIBE)
        return (0, d.jsxs)("div", {
            className: ir.R$,
            children: [
                (0, d.jsx)(eb.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tN.pe.TIER_2,
                }),
                (0, d.jsx)($.$, { variant: "secondary", size: "md", text: eI.intl.string(eI.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === is.P.CLAIMED
            ? { text: eI.intl.string(il.default.Plwzgf) }
            : { text: eI.intl.string(eI.t.hvVgAZ) };
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)("div", {
                className: ir.R$,
                children: [
                    (0, d.jsx)(it.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: i.text,
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        onClick: i.onClick,
                        disabled: i.disabled,
                        loading: i.loading,
                    }),
                    (0, d.jsx)($.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: i.requestInProgress,
                    }),
                ],
            }),
            i.claimStatus === is.P.CLAIM_IN_PROGRESS &&
                (0, d.jsxs)("div", {
                    className: ir.ed,
                    children: [
                        (0, d.jsx)(t7.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, d.jsx)(J.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: eI.intl.string(il.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function io(e) {
    let { glowing: t = !1 } = e;
    (0, t9.A)({
        type: t6.ImpressionTypes.VIEW,
        name: t6.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: ie.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: s } = (0, b.Ay)(j.A.CROISSANT_PREMIUM_HERO_CARD),
        n = u.useCallback(() => {
            (0, Z.mM)(async () => {
                let { default: e } = await Promise.all([i.e(878140), i.e(532203)]).then(i.bind(i, 15654));
                return (t) => (0, d.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, d.jsx)(t5.N, {
        theme: eZ.NJ8.DARK,
        children: (e) =>
            (0, d.jsx)(b.f5, {
                value: s,
                children: (0, d.jsx)("div", {
                    className: x()(e, ir.kL),
                    children: (0, d.jsx)(t4.A, {
                        cardType: t8.s.CUSTOM,
                        cardClassName: ir.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, d.jsxs)("div", {
                            className: ir.XF,
                            children: [
                                (0, d.jsxs)("div", {
                                    className: ir.j,
                                    children: [
                                        (0, d.jsx)("div", { className: ir._g }),
                                        (0, d.jsx)("div", { className: ir.$h }),
                                        (0, d.jsx)("div", { className: ir.Rv }),
                                        (0, d.jsx)("div", { className: ir.Lw }),
                                        (0, d.jsx)("div", { className: ir.mR }),
                                    ],
                                }),
                                (0, d.jsxs)("div", {
                                    className: ir.Qs,
                                    children: [
                                        (0, d.jsx)("img", {
                                            className: ir.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, d.jsx)(eG.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: ir.DD,
                                            children: eI.intl.string(il.default.RGT513),
                                        }),
                                        (0, d.jsx)(J.E, {
                                            variant: "body-md/normal",
                                            color: "text-strong",
                                            className: ir.h_,
                                            children: eI.intl.string(il.default["+pTnsf"]),
                                        }),
                                        (0, d.jsx)(ic, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var id = i(7684),
    iu = i(112992);
let im = () =>
    (0, d.jsxs)("div", {
        className: id.X,
        children: [
            (0, d.jsx)("div", {
                className: id.W,
                children: (0, d.jsx)(t7.CircleInformationIcon, { size: "xxs", color: eX.A.colors.ICON_MUTED }),
            }),
            (0, d.jsx)(J.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: eI.intl.string(il.default.Fs74z9),
            }),
        ],
    });
function ix(e) {
    let { className: t, containerClassName: i, glowing: s } = e,
        n = (0, ia.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === ia.N.SUBSCRIBE
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
        r = n.kind === ia.N.DEFAULT && n.claimStatus === is.P.CLAIM_IN_PROGRESS;
    return (0, d.jsx)(tU.S, {
        id: ie.XBOX_PREMIUM_PERK_CARD_ID,
        title: eI.intl.string(il.default.UVL9tD),
        description: eI.intl.string(il.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, d.jsx)(im, {}) : void 0,
        className: t,
        containerClassName: i,
        glowing: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, d.jsx)("img", { src: iu.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function ig(e) {
    let { analyticsLocations: t } = (0, b.Ay)(j.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, d.jsx)(b.f5, { value: t, children: (0, d.jsx)(ix, { ...e }) });
}
var ip = i(744082),
    ih = i(261995),
    iN = i(722793),
    iA = i(517846),
    ij = i(669700);
let ib = new Date(Date.UTC(2026, 9, 23));
var iE = i(945810);
let iT = (0, iE.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var iC = i(398523),
    iI = i(881373),
    iR = i(555393),
    iv = i(325652),
    i_ = i(852218),
    iy = i(52530),
    iP = i(670328),
    iS = i(612413);
i(675772);
var iD = i(749962),
    iM = i(691450),
    iO = i(524698),
    ik = i(635088),
    iU = i(679502);
let iL = "xgpp";
function iG(e) {
    let { card: t, backgroundAssetUrl: i, blurTint: s, glowing: n, autoClickCta: a } = e;
    return (0, d.jsx)("div", {
        className: tF.JE,
        children: (0, d.jsx)(tU.S, {
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
function iw(e) {
    let { glowingSectionId: t, glowingPerkId: i } = e,
        s = (0, t3.b)("premium_subscriber_home_rewards");
    (0, ip.A)(tN.tv);
    let {
            expiredCallOfDutyCard: n,
            logitechCard: a,
            steelseriesCard: l,
            youtubeCard: r,
            macaronCard: c,
            codeBlurpleCard: o,
        } = (function () {
            let e,
                t,
                { analyticsLocations: i } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
                s = ((e = (0, iy.eh)()), (t = (0, iy.fR)()), null != e ? e : t),
                n = (function (e) {
                    let { location: t } = e,
                        { enabled: i } = iT.useConfig({ location: t });
                    return i;
                })({ location: "useHardwarePartnerPerkCards" }),
                a = (0, iI.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                l = iC.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                r = (0, iS.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                c = null === (0, iR.N)(),
                o = (0, ih.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: m, nDaysInMonth: x } = (0, u.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, u.useMemo)(() => {
                let e =
                        n && null == s
                            ? {
                                  id: ie.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: eI.intl.string(iD.default["IcD/7p"]),
                                  description: eI.intl.formatToPlainString(iD.default.hausFi, {
                                      date: new Intl.DateTimeFormat(eI.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(ib),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: iv.L.EXPIRED,
                                  pillText: eI.intl.string(iD.default.fxF0Jz),
                                  caption: (0, d.jsx)("img", { src: ik.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = a
                        ? {
                              id: ie.LOGITECH_3PP_CARD_ID,
                              title: eI.intl.string(iM.default.OlObRa),
                              description: eI.intl.format(iM.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: er.A.getArticleURL(eZ.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: m.getDate() / x,
                              ctaText: eI.intl.string(eI.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iP.P)({
                                      partnerIds: [i_.XY],
                                      title: eI.intl.string(iM.default["2I7nK+"]),
                                      subtitle: eI.intl.format(iM.default.W8jOD0, {
                                          termsUrl: er.A.getArticleURL(eZ.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, d.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: i_.XY },
                              ctaDisabled: c,
                              ctaLoading: c,
                          }
                        : null;
                return {
                    expiredCallOfDutyCard: e,
                    logitechCard: t,
                    steelseriesCard: l
                        ? {
                              id: ie.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: eI.intl.string(eI.t.m7PucM),
                              description: eI.intl.format(eI.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, d.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: m.getDate() / x,
                              ctaText: eI.intl.string(eI.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iP.P)({
                                      partnerIds: [i_.KS],
                                      title: eI.intl.string(eI.t["7ioAjs"]),
                                      subtitle: eI.intl.format(eI.t.LOYRxB, {
                                          helpCenterLink: er.A.getArticleURL(eZ.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: i_.KS },
                              ctaDisabled: c,
                              ctaLoading: c,
                          }
                        : null,
                    youtubeCard: r
                        ? {
                              id: ie.YOUTUBE_3PP_CARD_ID,
                              title: eI.intl.string(iO.default["BdIVB+"]),
                              description: eI.intl.format(iO.default["cCl3+a"], {
                                  discountPercentage: 20,
                                  months: 6,
                                  helpCenterUrl: er.A.getArticleURL(eZ.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, d.jsx)("img", { src: iU.A, alt: "YouTube Premium" }),
                              ctaText: eI.intl.string(iD.default.fcopjf),
                              onCtaClick: () =>
                                  (0, iP.P)({
                                      partnerIds: [i_.NC],
                                      analyticsLocations: i,
                                      title: eI.intl.string(iO.default.TDZUui),
                                      subtitle: eI.intl.format(iO.default.dueYf1, {
                                          helpCenterUrl: er.A.getArticleURL(eZ.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          ij.Ay.fireSurveyAction(iA.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: i_.NC },
                              ctaDisabled: c,
                              ctaLoading: c,
                          }
                        : null,
                    macaronCard: o,
                    codeBlurpleCard: s,
                };
            }, [o, s, i, n, m, a, x, l, r, c]);
        })(),
        { phase: m } = (0, ih.vc)({ location: "NitroRewardsSection" }),
        g =
            null != c
                ? {
                      card: c,
                      backgroundAssetUrl:
                          m === iN.H.PHASE_ONE
                              ? "https://cdn.discordapp.com/assets/content/dacaa1d04c91ae0beefcbce25518899d11a943e10437ded70a6d594a03cf9535.png"
                              : "https://cdn.discordapp.com/assets/content/d6bc70e4b19392250948d59f11fcdb7360b2ed7fa636f8d9ab30c199a728a7c6.png",
                      blurTint: "#001E73",
                  }
                : null != r
                  ? {
                        card: r,
                        backgroundAssetUrl:
                            "https://cdn.discordapp.com/assets/content/6936886d1c55035bd3f56b7594d80dd08e7d3e859be8630f3ef667b338a1dd78.webp",
                        blurTint: "#3E000C",
                    }
                  : null,
        p = null != g ? g.card.id : null,
        h = s && null == g,
        f =
            s ||
            null != n ||
            null != a ||
            null != l ||
            null != o ||
            (null != c && c.id !== p) ||
            (null != r && r.id !== p),
        N = null;
    return (null != g
        ? (N = (0, d.jsx)(iG, {
              card: g.card,
              backgroundAssetUrl: g.backgroundAssetUrl,
              blurTint: g.blurTint,
              glowing: t === iL || i === g.card.id,
              autoClickCta: i === g.card.id,
          }))
        : h && (N = (0, d.jsx)("div", { className: tF.JE, children: (0, d.jsx)(io, { glowing: t === iL }) })),
    null != N || f)
        ? (0, d.jsx)(tW, {
              id: iL,
              sectionClassName: x()(tX.uW, tX.Uv, tX.qr),
              heading: (0, d.jsx)(eG.D, {
                  variant: "nitro-sm",
                  className: x()(tV.R_, tF.U6),
                  children: eI.intl.string(eI.t.NG1e6l),
              }),
              beforeGrid: N,
              grid: f
                  ? (0, d.jsxs)(d.Fragment, {
                        children: [
                            null != o && (0, d.jsx)(tU.S, { ...o, containerClassName: tV.Nr, glowing: i === o.id }),
                            null != c &&
                                c.id !== p &&
                                (0, d.jsx)(tU.S, {
                                    ...c,
                                    containerClassName: tV.Nr,
                                    glowing: i === c.id,
                                    autoClickCta: i === c.id,
                                }),
                            null != r &&
                                r.id !== p &&
                                (0, d.jsx)(tU.S, {
                                    ...r,
                                    containerClassName: tV.Nr,
                                    glowing: i === r.id,
                                    autoClickCta: i === r.id,
                                }),
                            s &&
                                (0, d.jsx)(ig, {
                                    containerClassName: tV.Nr,
                                    glowing: i === ie.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, d.jsx)(tU.S, { ...a, containerClassName: tV.Nr, glowing: i === a.id }),
                            null != l && (0, d.jsx)(tU.S, { ...l, containerClassName: tV.Nr, glowing: i === l.id }),
                            null != n && (0, d.jsx)(tU.S, { ...n, containerClassName: tV.Nr, glowing: i === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var iB = i(313133),
    iH = i(67423);
let iF = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, b.Ay)(j.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e8.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, d.jsx)(e5.animated.div, {
        className: x()(iB.iE, { [iB.q4]: !t }),
        style: r,
        children: (0, d.jsxs)("div", {
            className: iB.iJ,
            children: [
                (0, d.jsx)("img", { alt: "", src: iH, className: iB.oU }),
                (0, d.jsxs)("div", {
                    className: iB.iQ,
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
                                (0, d.jsx)(e, {
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
var iV = i(761508),
    iW = i(151869),
    iz = i(62617),
    iX = i(387103);
function iY(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: iX.A,
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let iK =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function iZ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: iK,
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iq = i(93712);
function iJ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: iq.A,
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iQ = i(345394);
function i$(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: iQ.A,
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i0 = i(78211);
function i1(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i2 = i(95278);
function i3(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function i6(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i7 = i(996682);
function i5(e) {
    let { color: t = eX.A.colors.ICON_STRONG, "aria-label": i, "aria-hidden": s, role: n, width: a, height: l } = e,
        r = u.useMemo(() => (0, iz.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, d.jsxs)("svg", {
        ...(0, i7.A)({ "aria-label": i, "aria-hidden": s, role: n }),
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
function i8(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i9 = i(78701);
function i4(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: i9.A,
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var se = i(462887),
    st = i(736653),
    si = i(259065),
    ss = i(206835),
    sn = i(591179),
    sa = i(462463),
    sl = i(219882),
    sr = i(105909),
    sc = i(208223),
    so = i(696292),
    sd = i(914313),
    su = i(321538),
    sm = i(892227),
    sx = i(81466),
    sg = i(17268),
    sp = i(749012);
let sh = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, F.F)();
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, sm.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, d.jsxs)("div", {
        className: sp.kL,
        children: [
            null != i &&
                (0, d.jsxs)("div", {
                    className: sp.nM,
                    children: [
                        (0, d.jsxs)("div", {
                            className: sp.Pf,
                            children: [
                                (0, d.jsx)(sx.CalendarIcon, { size: "sm", color: eX.A.colors.TEXT_DEFAULT }),
                                (0, d.jsx)(J.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eI.intl.string(sg.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, d.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(sg.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, d.jsx)("div", { className: sp.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, d.jsxs)("div", {
                    className: sp.nM,
                    children: [
                        (0, d.jsxs)("div", {
                            className: sp.Pf,
                            children: [
                                (0, d.jsx)(ez.OrbsIcon, { size: "sm", color: eX.A.colors.TEXT_DEFAULT }),
                                (0, d.jsx)(J.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eI.intl.string(sg.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, d.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(sg.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var sf = i(403362);
let sN = (0, iE.mj)({
        name: "2026-11-norbs",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    sA = (0, iE.mj)({
        name: "2026-11-norbs-2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    sj = new Date(2026, 11, 21);
var sb = (((l = {}).DEFAULT = "default"), (l.DEPRECATED = "deprecated"), (l.REMOVED = "removed"), l),
    sE = i(212739),
    sT =
        (((r = {}).DEFAULT = "default"),
        (r.DEPRECATED = "deprecated"),
        (r.DEPRECATED_XBOX = "deprecated_xbox"),
        (r.REMOVED = "removed"),
        (r.REMOVED_XBOX = "removed_xbox"),
        r),
    sC = i(631502),
    sI = i(221596),
    sR = i(799544);
function sv() {
    var e;
    let t,
        { shouldShowBonusOrbsUX: i, multiplier: s } = (0, sd.lk)(sI.rE.NITRO_HOME_MARKETING),
        { isEligible: n, programReward: a } = (0, F.F)();
    return {
        nitroOrbsRewardsCard:
            ((e = (0, u.useMemo)(
                () =>
                    !n || null == a || null == a.reward_amount || a.reward_amount <= 0
                        ? null
                        : {
                              id: ie.NITRO_ORBS_REWARDS_CARD_ID,
                              title: eI.intl.string(sg.default.hx5AFp),
                              description: eI.intl.format(sg.default.wq3CF2, { orbsCount: a.reward_amount }),
                              primaryAsset: "/assets/8f530451dce1ccc0.svg",
                              primaryAssetClassName: x()(sR.lH, sR.yK),
                              footerContent: (0, d.jsx)(sh, {}),
                              ctaText: eI.intl.string(sg.default.BxjHiu),
                              onCtaClick: () => (0, S.pX)(eZ.BVt.COLLECTIBLES_SHOP_WITH_TAB(e1.G2.ORBS)),
                          },
                [n, a],
            )),
            (t = (function (e) {
                let { location: t } = e,
                    i = (function (e) {
                        let { location: t } = e,
                            i = sA.useConfig({ location: t }).enabled,
                            s = sN.useConfig({ location: t }, { autoTrackExposure: !i }).enabled;
                        return i ? "removed" : s ? "deprecated" : "default";
                    })({ location: t }),
                    s = (0, sE.O)(!1);
                switch (i) {
                    case sb.DEFAULT:
                        return "default";
                    case sb.DEPRECATED:
                        return s ? "deprecated_xbox" : "deprecated";
                    case sb.REMOVED:
                        return s ? "removed_xbox" : "removed";
                    default:
                        return (0, sf.xb)(i);
                }
            })({ location: "useNorbsNitroOrbsRewardsCard" })),
            (0, u.useMemo)(() => {
                if (null == e) return null;
                switch (t) {
                    case sT.DEFAULT:
                    case sT.DEPRECATED_XBOX:
                        return e;
                    case sT.REMOVED:
                    case sT.REMOVED_XBOX:
                        return null;
                    case sT.DEPRECATED:
                        return {
                            ...e,
                            title: eI.intl.string(sC.default.LG4Fft),
                            description: eI.intl.format(sC.default["69NJ0X"], {
                                date: sj,
                                helpdeskArticle: er.A.getArticleURL(eZ.MVz.ORBS_REWARDS_FAQ),
                            }),
                            pillText: eI.intl.formatToPlainString(eI.t["7D8r4F"], {
                                expiryDate: sj.toLocaleDateString(eI.intl.currentLocale, {
                                    month: "short",
                                    day: "numeric",
                                }),
                            }),
                            footerContent: void 0,
                        };
                    default:
                        return (0, sf.xb)(t);
                }
            }, [e, t])),
        questOrbMultiplierCard: (0, u.useMemo)(
            () =>
                i
                    ? {
                          id: ie.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eI.intl.string(eI.t.Csf5Ol),
                          description: eI.intl.format(eI.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eI.intl.string(eI.t.jVcuVY),
                          onCtaClick: () => (0, su.mA)({ fromContent: so.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: sR.Nf,
                      }
                    : null,
            [i, s],
        ),
    };
}
var s_ = i(975807),
    sy = i(95035),
    sP = i(728666),
    sS = i(88001),
    sD = i(107198),
    sM = i(817577);
function sO() {
    (0, s_.A)(sS.TE);
}
function sk(e) {
    let t = (0, sP.O9)(),
        s = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, u.useCallback)(() => {
            n
                ? (0, Z.mM)(async () => {
                      let { default: e } = await i.e(499709).then(i.bind(i, 516044));
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
                      id: ie.PREMIUM_GROUP_CARD_ID,
                      title: eI.intl.string(sD.default.YkvksF),
                      description: (0, d.jsxs)(d.Fragment, {
                          children: [
                              eI.intl.formatToPlainString(sD.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, sS.DP)(),
                              }),
                              (0, d.jsx)("div", {
                                  className: sR.LF,
                                  children: (0, d.jsx)(sy.A, {
                                      onClick: sO,
                                      children: eI.intl.string(sD.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eI.intl.string(eI.t.oW0eUd),
                      primaryAsset: sM,
                      ctaIcon: Q.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: eI.intl.string(eI.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sU = i(562819),
    sL = i(793943),
    sG = i(169099),
    sw = i(506988),
    sB = i(590202),
    sH = i(332560),
    sF = i(62234),
    sV = i(324061),
    sW = i(701256),
    sz = i(804564),
    sX = i(818349),
    sY = i(419490),
    sK = i(849993),
    sZ = i(572164),
    sq = i(271597),
    sJ = i(815460),
    sQ = i(464132),
    s$ = i(683825);
function s0() {
    "auto" === (0, sX.r)((0, sZ.T)(), sY.Ay.getEnableAutoclipping())
        ? (0, sq.p)()
        : (0, sJ.C)({ variant: "mode_picker", source: "nitro_home_perk_card" });
}
var s1 = i(757036),
    s2 = i(621488),
    s3 = i(70283),
    s6 = i(643056),
    s7 = i(470739);
let s5 = (0, iE.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s8 = i(655752),
    s9 = i(764231),
    s4 = i(627380),
    ne = i(30084),
    nt = i(814014),
    ni = i(714206);
let ns =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    nn =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    na =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function nl() {
    let e,
        t,
        i,
        s,
        n,
        a,
        l,
        r,
        c,
        o,
        m,
        g,
        h,
        f,
        N,
        A,
        E,
        T,
        C,
        { analyticsLocations: I } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
        R = (0, sn.X)("useWhatsNewPerkCards"),
        v = (0, sa.A)({ analyticsLocations: I }),
        _ = (0, u.useCallback)(() => {
            (0, ea.openUserSettings)(en.X.PROFILE_PANEL, { analyticsLocations: I }, () =>
                (0, si.L)({ analyticsLocations: I }),
            );
        }, [I]),
        y = (0, u.useCallback)(() => {
            (0, ea.openUserSettings)(en.X.PROFILE_PANEL, { analyticsLocations: I }, () =>
                (0, sU.L)({ analyticsLocations: I }),
            );
        }, [I]),
        P = (0, u.useCallback)(() => {
            (0, ea.openUserSettings)(en.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        S =
            ((e = (0, p.bG)([M.default], () => M.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (i = (function (e) {
                let { location: t } = e;
                return s5.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (s = (0, s6.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, sr.$F)()),
            (a = (0, sr.Xb)()),
            (l = n?.status === sr.Wo.UPCOMING || t),
            (r = n?.status === sr.Wo.WITHHELD),
            (c = l || r),
            (o = (0, sc.N)(n?.id)),
            (m = (function () {
                let e = (0, sr.$F)(),
                    t = (0, s8.P)(),
                    i = (0, sr.Xb)();
                if (null == e || null == t || null == i || e.status === sr.Wo.WITHHELD) return null;
                let s = eT()(),
                    n = eT()(i),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / r));
            })()),
            (g = (0, p.bG)([et.Ay], () => et.Ay.useReducedMotion) && !c),
            (h = (0, s4.t)()),
            (f = (0, s8.P)()),
            (0, u.useMemo)(() => {
                let e,
                    l = null != f ? eI.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, s9.T)(tN.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === sr.Wo.UPCOMING
                              ? eI.intl.formatToPlainString(eI.t.a1eKDi, { days: h?.days ?? 0 })
                              : n.status === sr.Wo.WITHHELD
                                ? ((0, s9.T)(n.id, n.tenureReqNumMonths) ?? void 0)
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
                                  (0, s9.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != o ? (r = c || g ? o.standard : o.ambientLarge) : t && (r = ni),
                    {
                        id: ie.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eI.intl.string(n.nameUnformattedNitro) : t ? eI.intl.string(eI.t.tx9Fvw) : "",
                        pillText: eI.intl.string(eI.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: x()(nt.pq, { [nt.rX]: c, [nt.kE]: g }),
                        caption: null != a ? eI.intl.formatToPlainString(eI.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: m ?? void 0,
                        ctaText: eI.intl.string(eI.t.jVcuVY),
                        onCtaClick: () => {
                            i && s
                                ? (0, s7.openBadgeDirectoryModal)({ initialBadgeId: s3.$.PREMIUM_TENURE })
                                : (0, ne.D)({ analyticsLocations: I });
                        },
                    }
                );
            }, [n, o, c, g, a, m, t, h, f, I, i, s])),
        { nitroOrbsRewardsCard: D, questOrbMultiplierCard: O } = sv(),
        k =
            ((N = (0, s1.L)(tN.PremiumTypes.TIER_2)),
            (A = (0, sl.rX)()),
            (0, u.useMemo)(
                () =>
                    N && A
                        ? {
                              id: ie.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eI.intl.string(s2.default["/cV3ka"]),
                              description: eI.intl.string(s2.default.H523FI),
                              primaryAsset: (0, d.jsx)(i0.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [N, A],
            )),
        U = sk(I),
        L =
            ((E = (0, sK.H)("useAutoclipsPerkCard")),
            (T = "auto" === (0, sQ.U)().value),
            (0, u.useMemo)(
                () =>
                    E
                        ? {
                              id: ie.AUTOCLIPS_CARD_ID,
                              title: eI.intl.string(s$.default["5VA1HL"]),
                              description: eI.intl.string(s$.default.TvE3md),
                              primaryAsset: (0, d.jsx)(sz.f, { alt: "", ariaHidden: !0 }),
                              ctaText: eI.intl.string(T ? eI.t.RzWDqY : eI.t.uw9zI7),
                              ctaVariant: T ? "secondary" : void 0,
                              onCtaClick: s0,
                          }
                        : null,
                [E, T],
            )),
        G =
            ((C = (0, sV.A)("useHexagonCampaignWhatsNewPerkCard")),
            u.useMemo(
                () =>
                    C
                        ? {
                              id: ie.HEXAGON_CAMPAIGN_CARD_ID,
                              pillText: eI.intl.string(eI.t.y2b7CA),
                              title: eI.intl.string(sW.default["fShp/D"]),
                              description: eI.intl.string(sW.default.MDycja),
                              primaryAsset: (0, d.jsx)(sG.r, { alt: "", ariaHidden: !0, width: 256 }),
                              ctaText: eI.intl.string(eI.t.uw9zI7),
                              onCtaClick: () => {
                                  ((0, sH.iM)({
                                      content: sw.uF.NITRO_HOME_PERK_CARD,
                                      questContentCTA: sB.Cy.OPEN_AD_PERK_MODAL,
                                  }),
                                      (0, sF.v6)());
                              },
                          }
                        : null,
                [C],
            ));
    return (0, u.useMemo)(() => {
        let e = [
                D,
                O,
                U,
                {
                    id: ie.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eI.intl.string(eI.t.OLtTrt),
                    description: eI.intl.string(eI.t["di/pXR"]),
                    onCtaClick: R ? v : _,
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    primaryAsset: ns,
                },
                {
                    id: ie.CLIENT_THEMES_CARD_ID,
                    title: eI.intl.string(eI.t.acc6h6),
                    description: eI.intl.formatToPlainString(eI.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: na,
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sL.nf)(sL.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: ie.PERMADECOS_CARD_ID,
                    title: eI.intl.string(eI.t.L14NZN),
                    description: eI.intl.string(eI.t.eCZkAI),
                    primaryAsset: (0, d.jsx)(i4, { alt: "", ariaHidden: !0 }),
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    onCtaClick: R ? v : y,
                },
                {
                    id: ie.CUSTOM_APP_ICONS_CARD_ID,
                    title: eI.intl.string(eI.t["GU+wqh"]),
                    description: eI.intl.string(eI.t["1uPk1Z"]),
                    primaryAsset: nn,
                    ctaText: eI.intl.string(eI.t.y9TxXV),
                    onCtaClick: P,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            i = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, S),
            null != k && e.splice(2, 0, k),
            null != L && e.splice(2, 0, L),
            null != G && e.splice(Math.min(2, e.length), 0, G),
            e.length > i && e.splice(i, e.length - i),
            e
        );
    }, [S, D, O, k, L, U, G, _, P, y, v, R]);
}
var nr = i(355097);
let nc = "/assets/1eb1b74667b4c0f0.svg",
    no = "/assets/983b60e4fcaf973b.svg";
var nd =
    (((c = {}).BEST_OF_NITRO = "bestof"),
    (c.APPEARANCE_STYLE = "appearance"),
    (c.UPGRADES = "upgrades"),
    (c.VIP_EXTRAS = "vip"),
    c);
let nu = [
    { id: "bestof", label: () => eI.intl.string(eI.t.q1u7nQ) },
    { id: "appearance", label: () => eI.intl.string(eI.t.CUnZkZ) },
    { id: "upgrades", label: () => eI.intl.string(eI.t.KC5q8v) },
    { id: "vip", label: () => eI.intl.string(eI.t.DjEAcv) },
];
var nm = i(18290);
function nx(e) {
    return e.id;
}
function ng(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, st.DP)(),
                t = (0, sn.X)("useFavoritesPerkCards"),
                i = (0, sr.Lh)(),
                s = (0, sc.N)(i)?.standard ?? null,
                { analyticsLocations: n } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, ss.A)({ scrollPosition: nr._F.TRY_IT_OUT, analyticsLocations: n }),
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
                x = (0, sa.A)({ analyticsLocations: n }),
                g = (0, u.useCallback)(() => {
                    (0, ea.openUserSettings)(en.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, si.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = nl(),
                h = (0, u.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: f, questOrbMultiplierCard: N } = sv(),
                A = sk(n),
                E = (0, u.useMemo)(
                    () => [
                        {
                            id: ie.SERVER_BOOSTS_CARD_ID,
                            title: eI.intl.formatToPlainString(eI.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eI.intl.formatToPlainString(eI.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, d.jsx)(iY, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != A ? { ...A, categories: ["bestof"] } : null,
                        {
                            id: ie.PROFILES_CARD_ID,
                            title: eI.intl.string(eI.t.xDRab3),
                            description: eI.intl.string(eI.t.yn6fWA),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, d.jsx)(iZ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: ie.HD_VIDEO_CARD_ID,
                            title: eI.intl.string(eI.t["/mQ5gg"]),
                            description: eI.intl.string(eI.t["7WwAXh"]),
                            primaryAsset: (0, d.jsx)(iJ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: ie.CLIENT_THEMES_CARD_ID,
                            title: eI.intl.string(eI.t.acc6h6),
                            description: eI.intl.formatToPlainString(eI.t.WQazjs, { themeCount: 20 }),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: na,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: ie.MORE_EMOJIS_CARD_ID,
                            title: eI.intl.string(eI.t.D8vIDT),
                            description: eI.intl.string(eI.t.DRMecB),
                            primaryAsset: (0, d.jsx)(i$, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: ie.LARGE_UPLOADS_CARD_ID,
                            title: eI.intl.string(eI.t.nL1WZV),
                            description: (0, sl.M6)({
                                legacyCopy: eI.intl.formatToPlainString(eI.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eI.intl.formatToPlainString(eI.t.teOTfv, {
                                    maxFileSize: (0, ec.EJ)(tN.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, d.jsx)(i0.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: ie.CUSTOM_APP_ICONS_CARD_ID,
                            title: eI.intl.string(eI.t["GU+wqh"]),
                            description: eI.intl.string(eI.t["1uPk1Z"]),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: nn,
                            categories: ["appearance"],
                        },
                        {
                            id: ie.ENTRANCE_SOUNDS_CARD_ID,
                            title: eI.intl.string(eI.t.WJfCPi),
                            description: eI.intl.string(eI.t.liQKJR),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: ie.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eI.intl.string(eI.t.OLtTrt),
                            description: eI.intl.string(eI.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            primaryAsset: ns,
                            categories: ["appearance"],
                        },
                        {
                            id: ie.CUSTOM_SOUNDS_CARD_ID,
                            title: eI.intl.string(eI.t["Cu/oFd"]),
                            description: eI.intl.string(eI.t.czj2aa),
                            primaryAsset: (0, d.jsx)(i1, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: ie.SPECIAL_STICKERS_CARD_ID,
                            title: eI.intl.string(eI.t.MQoVeb),
                            description: eI.intl.string(eI.t.HGCLZX),
                            primaryAsset: (0, d.jsx)("div", {
                                className: sR.Uc,
                                children: (0, d.jsx)(i2.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: ie.SUPER_REACTIONS_CARD_ID,
                            title: eI.intl.string(eI.t.qERvAA),
                            description: eI.intl.string(eI.t.WkUWzx),
                            primaryAsset: (0, d.jsx)(i3, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: ie.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eI.intl.string(eI.t.ssVDYQ),
                            description: eI.intl.string(eI.t.aUSRMa),
                            primaryAsset: (0, se.M)(e) ? nc : no,
                            categories: ["upgrades"],
                        },
                        {
                            id: ie.EARLY_ACCESS_CARD_ID,
                            title: eI.intl.string(eI.t["g/KRY6"]),
                            description: eI.intl.string(eI.t.JzAmJc),
                            primaryAsset: (0, d.jsx)(i6, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: ie.BADGE_CARD_ID,
                            title: eI.intl.string(eI.t.Bn3CtB),
                            description: eI.intl.string(eI.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != s
                                    ? (0, d.jsx)("img", { src: s, alt: "", width: 160, draggable: "false" })
                                    : (0, d.jsx)(i5, { color: eX.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: ie.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eI.intl.string(eI.t["MTD+7w"]),
                            description: eI.intl.string(eI.t.Bhs0s6),
                            ctaText: eI.intl.string(eI.t.dBJVnZ),
                            onCtaClick: o,
                            primaryAsset: (0, d.jsx)(i8, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != f ? { ...f, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: ie.PERMADECOS_CARD_ID,
                            title: eI.intl.string(eI.t.L14NZN),
                            description: eI.intl.string(eI.t.eCZkAI),
                            primaryAsset: (0, d.jsx)(i4, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, s, f, N, A, a, l, r, c, o, m, g, x, t],
                );
            return (0, u.useMemo)(() => E.filter((e) => null != e && !h.includes(e.id)), [E, h]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [n, a] = (0, u.useState)(s?.categories[0] ?? nd.BEST_OF_NITRO),
        l = nu.find((e) => e.id === n)?.label(),
        r = i.filter((e) => null != e && e.categories.includes(n));
    return (0, d.jsxs)("div", {
        className: nm.uW,
        children: [
            (0, d.jsx)(eG.D, { variant: "nitro-sm", children: eI.intl.string(eI.t["Uh3+CA"]) }),
            (0, d.jsx)(iV.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: nm.Lq,
                "aria-label": eI.intl.string(eI.t["Uh3+CA"]),
                children: nu.map((e) =>
                    (0, d.jsx)(iV.V.Item, { id: e.id, className: nm.IC, children: e.label() }, e.id),
                ),
            }),
            (0, d.jsx)(
                iW.A,
                {
                    "aria-label": eI.intl.formatToPlainString(eI.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: nm.jG,
                    items: r,
                    getItemKey: nx,
                    renderItem: (e, i) =>
                        (0, d.jsx)(tU.S, { ...e, glowing: t === e.id, containerClassName: nm.Ui, listItemProps: i }),
                },
                n,
            ),
        ],
    });
}
var np = i(72979);
let nh = function (e) {
    let { className: t } = e,
        i = (0, st.DP)();
    return (0, d.jsx)("img", {
        className: x()(np.D, t),
        src: (0, se.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var nf = i(684251);
let nN = function (e) {
    let { children: t } = e;
    return (0, d.jsxs)("div", {
        className: x()(nf.kL, nf.Gd, nf.Eg),
        children: [(0, d.jsx)(nh, {}), (0, d.jsx)(t2, {}), t],
    });
};
function nA(e) {
    let { glowingPerkId: t = null } = e,
        i = nl();
    return (0, d.jsx)(tW, {
        sectionClassName: tV.uW,
        heading: (0, d.jsx)(eG.D, { variant: "nitro-sm", className: tV.R_, children: eI.intl.string(eI.t.Aw5DRm) }),
        grid: (0, d.jsx)(d.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured,
                    n = t === e.id;
                return (0, d.jsx)(
                    tU.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === ie.YOUTUBE_3PP_CARD_ID,
                        featured: s,
                        containerClassName: x()(tV.Nr, { [tV.Nq]: s }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function nj(e, t, i, s) {
    !(function (e, t, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, p.bG)([et.Ay], () => et.Ay.useReducedMotion),
            l = u.useRef(!1);
        (u.useEffect(() => {
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
            u.useEffect(() => {
                t || (l.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], i, s);
}
var nb = i(92737);
let nE = "/assets/cd2be35d285d4675.svg",
    nT = (e) => {
        let { userId: t } = e,
            i = (0, g.zy)();
        (u.useEffect(() => {
            ((0, H.Ay)(), null != t && (0, W.A)(t));
        }, [t]),
            u.useEffect(() => {
                E(!0);
            }, []),
            (0, y.P)(_));
        let s = u.useRef(null),
            n = u.useRef(null),
            a = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, F.F)(),
            {
                scrollTargetId: c,
                glowingSectionId: o,
                glowingPerkId: m,
                scrollBlock: f,
                scrollInline: N,
            } = u.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get("perk"),
                    s = e.get(nb.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        nj(c ?? "", null != c, f, N);
        let [A, E] = u.useState(!1),
            T = (0, z.p)(),
            C = u.useRef(null),
            [I, R] = u.useState(!1),
            v = null != T && null != a && a.status === eZ.Dmq.CANCELED,
            P = (0, X.iU)(tN.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !I && v,
            D = (0, p.bG)([V.A], () => (null != t ? V.A.getUserProfile(t) : null)),
            { analyticsLocations: M } = (0, b.Ay)(j.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [O, L] = u.useState(!1);
        return null != D && (l || null != r)
            ? (0, d.jsxs)(B.Gt, {
                  className: x()(nf.xW, nf.Gd),
                  ref: s,
                  children: [
                      (0, d.jsx)(nN, {
                          children: (0, d.jsxs)(b.f5, {
                              value: M,
                              children: [
                                  (0, d.jsx)(w.L, {
                                      innerRef: C,
                                      onChange: (e) => R(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, d.jsx)(tC, {
                                          buttonVisibilityRef: C,
                                          className: nf.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, d.jsx)(tZ, {}),
                                  (0, d.jsx)(nA, { glowingPerkId: m }),
                                  (0, d.jsx)(iw, { glowingPerkId: m, glowingSectionId: o }),
                                  (0, d.jsx)(ng, { glowingPerkId: m }),
                                  (0, d.jsx)(Y.A, {
                                      className: nf.Zy,
                                      location: j.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eZ.liQ.NITRO_HOME, section: eZ.JJy.GIFT_BANNER },
                                  }),
                                  (0, d.jsx)("div", { className: nf.hz }),
                                  (0, d.jsx)(w.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !O &&
                                              (U.default.track(eZ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: M,
                                              }),
                                              L(!0));
                                      },
                                      children: (0, d.jsx)("div", { ref: n, className: nf._Z }),
                                  }),
                                  (0, d.jsx)("img", {
                                      src: nE,
                                      className: nf.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eI.intl.string(eI.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      v &&
                          null != P &&
                          (0, d.jsx)(iF, {
                              isVisible: S && A,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, d.jsxs)("div", {
                  className: x()(nf.kL, nf.Lq, nf.TN, nf.Eg),
                  children: [(0, d.jsx)(t2, {}), (0, d.jsx)("div", { className: nf.S, children: (0, d.jsx)(h.y, {}) })],
              });
    };
var nC = i(589152),
    nI = i(851746),
    nR = i(727949),
    nv = i(926239);
let n_ =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var ny = i(185062);
let nP = `${n_} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${ny.A} 3x`;
function nS(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        o = u.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, d.jsx)("img", {
        style: o,
        src: n_,
        srcSet: nP,
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var nD = i(315629),
    nM = i(783420),
    nO = i(204413),
    nk = i(572079),
    nU = i(824069),
    nL = i(785007),
    nG = i(947910);
function nw(e) {
    let { value: t, planRadioOptions: i, className: s, ...n } = e,
        a = i.map((e) => {
            let i = e.value === t;
            return {
                name: (0, d.jsxs)("div", {
                    className: nG.VH,
                    children: [
                        i &&
                            null != e.badgeText &&
                            (0, d.jsx)("div", {
                                className: nG.fQ,
                                children: (0, d.jsx)(eB.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, d.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nG.qU,
                            children: [
                                (0, d.jsxs)(q.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nG.NI,
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
                                    className: nG.br,
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
                                                className: nG.yD,
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
                radioBarClassName: x()(nG.tG, { [nG.uA]: i, [nG.hy]: i && e.useGradientSelectedBorder }),
            };
        });
    return (0, d.jsx)(nL.$d, {
        ...n,
        options: a,
        value: t,
        size: nL.r9.NOT_SET,
        className: x()(nG.ul, s),
        withTransparentBackground: !0,
    });
}
var nB = i(118751),
    nH = i(773669),
    nF = i(97352),
    nV = i(526292),
    nW = i(387278),
    nz = i(369827),
    nX = i(803496);
function nY(e) {
    let t = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        i = (0, nz.L)(),
        s = t?.paymentSourceId ?? i,
        { priceOptions: n } = (0, nX.A)({
            activeSubscription: t,
            skuIDs: [(0, ec.mH)(e)],
            paymentSourceId: s,
            isGift: !1,
        });
    return n;
}
function nK(e, t, i, s, n) {
    return t && i?.includes(e) === !0 && null != s && null != n && s !== n;
}
function nZ(e) {
    let { expectedUsageInterval: t, usageInterval: i, discountDuration: s, regularPrice: n, discountedPrice: a } = e;
    return i !== t || null == n || null == a
        ? null
        : t === tN.Ff.YEAR
          ? eI.intl.format(eI.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : eI.intl.format(eI.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
}
var nq = i(614488);
function nJ(e) {
    let { skuId: t, selectedPlanId: i, subscribeButtonProps: s } = e,
        n = null == i || !0 === s.disabled,
        a = null == i ? "secondary" : s.variant;
    return (0, d.jsx)(nM.A, {
        subscriptionTier: t,
        initialPlanId: i,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, d.jsx)($.$, {
                size: "md",
                fullWidth: !0,
                icon: Q.NitroWheelIcon,
                text: s.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nQ(e) {
    let { skuId: t, className: i, variant: s = "default" } = e,
        n = t === tN.pe.TIER_2,
        a = "settings" === s,
        l = (0, se.q)((0, st.Ay)()),
        r = (0, em.V)(),
        c = r?.subscriptionTrial,
        o = c?.skuId === t,
        m = n && o && null != c,
        {
            planRadioOptions: g,
            selectedPlanId: h,
            setSelectedPlanId: f,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [i, s] = u.useState(null),
                n = tN.En[t],
                a = tN.zE[t],
                l = t === tN.pe.TIER_2,
                r = nY(t),
                c = (0, em.V)(),
                o = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: d, isMonthlyPlanDisabled: m } = (0, p.cf)(
                    [k.A],
                    () => {
                        let e = k.A.getPremiumTypeSubscription();
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
                h = (0, nV.k5)(),
                f = (0, p.bG)([nH.default], () => nH.default.locale),
                N = (0, X.U9)(g, t),
                A = (0, X.N1)(n),
                j = (0, X.N1)(a),
                [b, E] = (0, p.yK)([nF.A], () => [nF.A.get(n), nF.A.get(a)], [n, a]),
                T = null != b ? (0, ec.sS)(b, r) : null,
                C = null != E ? (0, ec.sS)(E, r) : null,
                I =
                    N && g?.discount.amount != null && !h
                        ? eI.intl.formatToPlainString(eI.t.IAybsG, {
                              discount: (0, nB.l9)(f, Number(g.discount.amount) / 100),
                          })
                        : null,
                R = g?.discount?.planIds,
                v = nK(a, N, R, j, C),
                _ = nK(n, N, R, A, T),
                y = g?.discount.userUsageLimitInterval,
                P = g?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, nW.Cj)(E, !1, r),
                D = !_ || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== tN.pe.TIER_2 ? null : i && !s ? tN.En[t] : tN.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                O = null == i || (i === n && m) ? M : i,
                U = [
                    {
                        value: a,
                        primaryText: eI.intl.string(eI.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nZ({
                                      expectedUsageInterval: tN.Ff.YEAR,
                                      usageInterval: y,
                                      discountDuration: P,
                                      regularPrice: C,
                                      discountedPrice: j,
                                  })
                                : null) ?? S,
                        secondaryText: v ? j : C,
                        secondarySubText: v ? C : null,
                        badgeText: v ? I : null,
                        useGradientSelectedBorder: l && (o || v || D),
                        isDisabled: x,
                    },
                    {
                        value: n,
                        primaryText: eI.intl.string(eI.t.DKzs96),
                        primarySubText: _
                            ? nZ({
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
                L = O === a ? v : O === n && _;
            return { planRadioOptions: U, selectedPlanId: O, setSelectedPlanId: s, shouldSuppressDiscountCta: N && !L };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: j } = (0, nk.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nO.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        E = (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nq.MY,
                    children: (0, d.jsx)(eG.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nq.ck,
                        children: n ? eI.intl.string(eI.t.lG6a5x) : eI.intl.string(eI.t["t9uG/o"]),
                    }),
                }),
                (0, d.jsx)(q.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nq.qT,
                    children: n
                        ? (0, d.jsx)(nv.ZP, {
                              featureSet: nv.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, d.jsx)(nv.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, d.jsx)(nU.K, {}),
            ],
        }),
        T = (0, d.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nq.Ux,
            children: [
                a ? (0, d.jsx)("div", { className: nq.zI, children: E }) : E,
                m
                    ? (0, d.jsx)("div", {
                          className: nq.qS,
                          role: "separator",
                          children: (0, d.jsx)(J.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nq.ZV,
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
                    : (0, d.jsx)("hr", { className: nq.yF }),
                (0, d.jsxs)("div", {
                    className: nq.qr,
                    children: [
                        (0, d.jsx)(nw, {
                            className: a ? nq.US : void 0,
                            planRadioOptions: g,
                            value: h ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, d.jsx)(nJ, { skuId: t, selectedPlanId: h, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        C = x()(nq.Nr, i, { [nq.Fw]: n });
    return n
        ? (0, d.jsxs)(nD.h, {
              color: "nitro-pink",
              className: C,
              children: [
                  !a &&
                      (0, d.jsx)("div", {
                          className: nq.kX,
                          "aria-hidden": !0,
                          children: (0, d.jsx)(nS, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, d.jsx)("div", { className: C, children: T });
}
function n$(e) {
    let { className: t } = e,
        i = (0, se.q)((0, st.Ay)()),
        s = nY(tN.pe.TIER_2),
        n = (0, p.bG)([M.default], () => M.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eM.A)({ userId: n?.id, size: ey._3.SIZE_32, animateOnHover: !0 }),
        r = (0, p.bG)([nF.A], () => nF.A.get(tN.gD.PREMIUM_GROUP_MONTH)),
        c = eI.intl.string(eI.t["2pG5Ga"]),
        o = (0, d.jsx)(nM.A, {
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
            u = (0, ec.sS)(r, s, !1, !1, !1);
        } catch {
            u = null;
        }
    return (0, d.jsx)("div", {
        className: x()(nq.Nr, t),
        children: (0, d.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nq.Ux,
            children: [
                (0, d.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nq.MY,
                    children: [
                        (0, d.jsx)(eG.D, {
                            variant: "nitro-md",
                            color: i ? "text-strong" : "text-overlay-light",
                            className: nq.ck,
                            children: eI.intl.string(sD.default.eSKiXk),
                        }),
                        null != n &&
                            (0, d.jsxs)(q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nq.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, d.jsx)("div", {
                                        className: nq.uA,
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
                                        className: nq.VL,
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
                    className: nq.qT,
                    children: (0, d.jsx)(nv.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, d.jsx)("hr", { className: nq.yF }),
                (0, d.jsxs)("div", {
                    className: nq.qr,
                    children: [
                        (0, d.jsxs)("div", {
                            className: nq.ec,
                            children: [
                                (0, d.jsx)(J.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: eI.intl.string(sD.default.SvSwga),
                                }),
                                null == u
                                    ? (0, d.jsx)(h.y, { type: h.y.Type.PULSING_ELLIPSIS })
                                    : (0, d.jsx)(J.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: i ? "text-strong" : "text-overlay-light",
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
function n0(e) {
    let { innerRef: t, className: i, variant: s = "default" } = e,
        n = "settings" === s,
        { analyticsLocations: a } = (0, b.Ay)(j.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, nv.pw)(t),
        r = (0, sP.PA)(),
        c = !n && r,
        o = (0, p.bG)([et.Ay], () => et.Ay.useReducedMotion),
        u = { [nq.iR]: !o && !n };
    return (0, d.jsx)(b.f5, {
        value: a,
        children: (0, d.jsxs)(q.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: x()(nq.oB, i, { [nq.W0]: n }),
            children: [
                (0, d.jsx)(eG.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nq.op,
                    children: eI.intl.string(eI.t.vLz3Zs),
                }),
                (0, d.jsxs)("div", {
                    ref: l,
                    className: x()(nq.kR, { [nq.BQ]: c }),
                    children: [
                        (0, d.jsx)(nQ, { skuId: tN.pe.TIER_0, className: x()(nq.rz, u), variant: s }),
                        (0, d.jsx)(nQ, { skuId: tN.pe.TIER_2, className: x()(nq.Rv, u), variant: s }),
                        c && (0, d.jsx)(n$, { className: x()(nq.zz, u) }),
                    ],
                }),
            ],
        }),
    });
}
var n1 = i(366010),
    n2 = i(303136);
let n3 = function (e) {
    let t,
        { className: i } = e,
        s = (0, e7.TM)(),
        n = (0, n1.q)((0, st.Ay)());
    return (
        (t = s
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, d.jsx)("div", {
            className: i,
            children: (0, d.jsx)(
                n2.A,
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
var n6 =
        (((o = {}).HOME = "home"),
        (o.WHATS_NEW = "whatsNew"),
        (o.BEST_OF_NITRO = "bestOfNitro"),
        (o.PLANS = "plans"),
        (o.COMPARE = "compare"),
        o),
    n7 = i(352756);
let n5 = function (e) {
    let { isVisible: t, subscriptionTier: i, isEligibleForBogoPromotion: s, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e8.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eZ.JJy.MARKETING_FLOATING_CTA };
    return (0, d.jsx)(e5.animated.div, {
        className: x()(n7.iE, { [n7.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, d.jsxs)("div", {
            className: n7.UD,
            children: [
                (0, d.jsx)(eb.A, {
                    enableMarketingSubscribeCopyTest: !a,
                    size: "md",
                    subscriptionTier: i,
                    hasActivePromotion: !!s,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, d.jsx)(ej.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var n8 = i(573710);
let n9 = function () {
    let e = (0, e6.bG)([et.Ay], () => et.Ay.useReducedMotion);
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)("div", {
                className: n8.BI,
                children: (0, d.jsx)(tt, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e4.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, d.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: n8.Q,
                    }),
                }),
            }),
            (0, d.jsx)(ts, {
                isMotionReduced: e,
                boltContainerClassName: n8.nJ,
                carContainerClassName: n8.IN,
                hammerContainerClassName: n8.Gj,
                keyContainerClassName: n8.FV,
                starContainerClassName: n8.E1,
                boltAssetClassName: n8.j7,
                carAssetClassName: n8.or,
                hammerAssetClassName: n8.Wv,
                keyAssetClassName: n8.rs,
                starAssetClassName: n8.OY,
            }),
        ],
    });
};
var n4 = i(989756);
function ae(e) {
    let { ref: t, ...i } = e,
        { analyticsLocations: s } = (0, b.Ay)(j.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, d.jsx)(b.f5, {
        value: s,
        children: (0, d.jsx)("div", {
            ref: t,
            className: n4.kL,
            children: (0, d.jsxs)("div", {
                className: n4.hQ,
                children: [
                    (0, d.jsx)(n9, {}),
                    (0, d.jsx)(eG.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: n4.RH,
                        children: eI.intl.string(eI.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
ae.displayName = "PremiumMarketingFooter";
var at = i(939249);
let ai = function (e) {
    let { navBarSections: t, activeSectionId: i } = e,
        s = {
            [n6.HOME]: eI.intl.string(eI.t.uGRXjS),
            [n6.WHATS_NEW]: eI.intl.string(eI.t["mfcR/v"]),
            [n6.BEST_OF_NITRO]: eI.intl.string(eI.t.xQKkE8),
            [n6.PLANS]: eI.intl.string(eI.t.wyNMnm),
            [n6.COMPARE]: eI.intl.string(eI.t.pwD7If),
        },
        n = (0, p.bG)([M.default], () => M.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, d.jsx)(tJ.A, {
        className: t0.TQ,
        transparent: !0,
        children: (0, d.jsxs)("div", {
            className: t0.Wc,
            children: [
                (0, d.jsxs)("div", {
                    className: t0.wG,
                    children: [
                        (0, d.jsx)(Q.NitroWheelIcon, { className: t0.nE, colorClass: t0.oG }),
                        (0, d.jsx)("div", {
                            className: t0.zc,
                            role: "tablist",
                            "aria-label": eI.intl.string(eI.t.O9MiXY),
                            children: a.map((e) => {
                                let t = i === e.id,
                                    n = s[e.id];
                                return (0, d.jsxs)(
                                    at.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: t0.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, d.jsx)(J.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, d.jsx)("div", { className: t0.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, d.jsxs)("div", {
                    className: t0.MQ,
                    children: [
                        null != n && (0, d.jsx)(t$.l, { size: "sm", location: j.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, d.jsx)(ej.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var as = i(713271),
    an = i(704333),
    aa = i(414499),
    al = i(597770),
    ar = i(500060),
    ac = i(866665),
    ao = i(406860),
    ad = i(870975),
    au = i(698834);
function am() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, ao.A)({ boxType: ii.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: an.ServerGridIcon, text: eI.intl.string(il.default.MUypiB) },
            { icon: aa.CloudIcon, text: eI.intl.string(il.default.ec5Rdd) },
            { icon: al.GiftIcon, text: eI.intl.string(il.default["9t2CzW"]), tooltip: il.default.AyECej },
            { icon: ar.ScreenStreamIcon, text: eI.intl.string(il.default.R7YJAY) },
        ];
    return (0, d.jsx)(w.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, d.jsx)("div", {
            ref: e,
            className: au.iE,
            children: (0, d.jsxs)("div", {
                className: au.Nr,
                children: [
                    (0, d.jsxs)("div", {
                        className: au.j,
                        children: [
                            (0, d.jsx)("div", { className: au._g }),
                            (0, d.jsx)("div", { className: au.$h }),
                            (0, d.jsx)("div", { className: au.Rv }),
                            (0, d.jsx)("div", { className: au.Lw }),
                        ],
                    }),
                    (0, d.jsxs)("div", {
                        className: au.CT,
                        children: [
                            (0, d.jsxs)("div", {
                                className: au.Qs,
                                children: [
                                    (0, d.jsxs)("div", {
                                        children: [
                                            (0, d.jsx)(eG.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: au.R_,
                                                children: eI.intl.string(il.default.rkt1aw),
                                            }),
                                            (0, d.jsxs)("div", {
                                                children: [
                                                    i.map((e) => {
                                                        let { icon: t, text: i, tooltip: s } = e;
                                                        return (0, d.jsxs)(
                                                            "div",
                                                            {
                                                                className: au.yf,
                                                                children: [
                                                                    (0, d.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, d.jsx)(J.E, {
                                                                        variant: "body-md/medium",
                                                                        color: "text-strong",
                                                                        children: i,
                                                                    }),
                                                                    null != s &&
                                                                        (0, d.jsx)("div", {
                                                                            className: au.Jn,
                                                                            children: (0, d.jsx)(ac.m, {
                                                                                text: eI.intl.string(s),
                                                                                position: "top",
                                                                                children: (0, d.jsx)(
                                                                                    t7.CircleInformationIcon,
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
                                                    (0, d.jsx)("div", {
                                                        className: au.xF,
                                                        children: (0, d.jsx)(eb.A, {
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
                                        className: au.WE,
                                        children: (0, d.jsx)(J.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: eI.intl.format(il.default.KDKdWi, { termsLink: (0, ad.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, d.jsx)("div", {
                                className: au.r1,
                                children: (0, d.jsx)("img", {
                                    className: au.wm,
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
var ax = i(886205),
    ag = i(65154),
    ap = i(382702),
    ah = i(148289);
function af() {}
function aN() {
    return (0, d.jsxs)("div", {
        className: ap.Nr,
        children: [
            (0, d.jsxs)("div", {
                className: ap.pq,
                children: [
                    (0, d.jsxs)("div", {
                        className: ap.Z,
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
                                children: eI.intl.string(s$.default.MtIbFp),
                            }),
                            (0, d.jsx)(J.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: eI.intl.string(s$.default.hXM4Ae),
                            }),
                        ],
                    }),
                    (0, d.jsx)($.$, {
                        variant: "secondary",
                        size: "md",
                        icon: ag.CirclePlayIcon,
                        text: eI.intl.string(s$.default.wNHvBT),
                        onClick: af,
                    }),
                ],
            }),
            (0, d.jsx)("div", {
                className: ap.LY,
                children: (0, d.jsx)("img", { className: ap.ot, src: ah.A, alt: "", "aria-hidden": !0 }),
            }),
        ],
    });
}
var aA = i(734066),
    aj = i(750338),
    ab = i(382031),
    aE = i(505051);
function aT(e) {
    let {
        className: t,
        boxLayout: i,
        title: s,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, d.jsxs)("div", {
        className: x()(aE.boxBackdrop, t),
        children: [
            (0, d.jsx)(eG.D, {
                className: aE.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: s,
            }),
            null != r && (0, d.jsx)("div", { className: aE.highlightBento, children: r }),
            (0, d.jsx)("div", {
                className: aE.bentoBoxesGrid,
                children: i.flatMap((e, t) => {
                    let i;
                    switch (e.length) {
                        case 3:
                            i = ab.A0.SMALL;
                            break;
                        case 2:
                            i = ab.A0.MEDIUM;
                            break;
                        default:
                            i = ab.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, d.jsx)(
                            aj.A,
                            { index: t + +!!l, ...e, size: i, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let aC = u.memo(function (e) {
        let t,
            i = (0, t3.b)("premium_marketing_bento"),
            s = (0, iS.mh)({ location: "premium_marketing_bento" }),
            { enabled: n } = (0, ih.vc)({ location: "premium_marketing_bento" }),
            { enabled: a } = ax.A.useConfig({ location: "premium_marketing_bento" }),
            l = i && !s && !(n && a),
            { whatsNewBoxes: r } = (0, ab.Ay)(l),
            c = ((t = (0, aA.Vl)()), (0, sK.H)("premium_marketing_whats_new", !t));
        return (0, d.jsx)(aT, {
            boxLayout: r,
            title: eI.intl.string(eI.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento:
                c || l
                    ? (0, d.jsxs)(d.Fragment, { children: [c && (0, d.jsx)(aN, {}), l && (0, d.jsx)(am, {})] })
                    : null,
            ...e,
        });
    }),
    aI = u.memo(function (e) {
        let { bestOfBoxes: t } = (0, ab.Ay)();
        return (0, d.jsx)(aT, { boxLayout: t, title: eI.intl.string(eI.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    aR = (0, iE.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var av = i(236834),
    a_ = i(540504);
function ay(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eM.A)({ userId: t?.id, size: ey._3.SIZE_24, animateOnHover: !0 });
    return (0, d.jsx)("div", {
        className: a_.$6,
        children: (0, d.jsxs)("div", {
            className: a_.sc,
            children: [
                (0, d.jsx)("div", {
                    className: a_.kR,
                    children: (0, d.jsx)(eP.eu, { src: i, "aria-label": t.username, size: ey._3.SIZE_32, ...s }),
                }),
                (0, d.jsx)(eG.D, {
                    variant: "heading-xs/medium",
                    className: a_.FS,
                    color: "text-strong",
                    children: eI.intl.format(eI.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var aP = i(579245),
    aS = i(369805);
let aD = function () {
    let e = (0, aS.A)();
    return null == e ? null : (0, d.jsx)(ef, { text: e });
};
function aM() {
    let e = (0, p.bG)([nF.A], () => nF.A.getForSkuAndInterval((0, ec.mH)(tN.pe.TIER_0), tN.WT.MONTH));
    return null != e ? (0, ec.sS)(e) : "\u2026";
}
var aO = i(508556);
let ak = function (e) {
    let { containerVisibilityPercentage: t, variant: i = "default" } = e,
        s = "settings" === i,
        n = (0, e6.bG)([et.Ay], () => et.Ay.useReducedMotion),
        a = (0, e7.TM)();
    return (0, d.jsxs)("div", {
        "aria-hidden": !0,
        className: x()(aO.YU, { [aO.W0]: s }),
        children: [
            (0, d.jsx)(tr, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: aO.wG,
                assetClassName: aO.lu,
                variant: i,
            }),
            (0, d.jsx)(ts, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: aO.nJ,
                carContainerClassName: aO.IN,
                hammerContainerClassName: aO.Gj,
                keyContainerClassName: aO.FV,
                starContainerClassName: aO.E1,
                boltAssetClassName: aO.j7,
                carAssetClassName: aO.or,
                hammerAssetClassName: aO.Wv,
                keyAssetClassName: aO.rs,
                starAssetClassName: aO.OY,
                animateStar: !s,
            }),
        ],
    });
};
var aU = i(14057);
let aL = u.memo(function (e) {
    let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: s, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
        c = aM(),
        o = aR.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        u = (0, av.A)(),
        m = null != u,
        { visibilityPercentageRef: g, visibilityPercentage: h } = ep(!(0, p.bG)([et.Ay], () => et.Ay.useReducedMotion)),
        f = (0, nC.b)(),
        N = !m && f.length > 0,
        A = (0, ex.uF)(K.oW.MARKETING_PAGE_BANNER),
        E = null != A,
        T = (0, nV.ar)() && !E,
        C = (0, eu.O)(),
        I = (null != C && tN.U4.includes(C.discountId)) || E;
    return (0, d.jsx)(b.f5, {
        value: r,
        children: (0, d.jsxs)("div", {
            ref: n,
            className: x()(aU.kL, t, { [aU.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, d.jsx)(n3, { className: aU.kv }),
                (0, d.jsx)("div", {
                    ref: g,
                    children: (0, d.jsxs)("div", {
                        className: aU.hQ,
                        children: [
                            (0, d.jsx)(ak, { containerVisibilityPercentage: h, variant: a }),
                            T && (0, d.jsx)(aD, {}),
                            (0, d.jsx)("div", {
                                className: aU.s8,
                                children: (0, d.jsx)(eL.F, {
                                    forceLevel: 1,
                                    children: (0, d.jsx)(eG.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : aU.wx,
                                        children: eI.intl.string(eI.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, d.jsxs)("div", {
                                className: aU.rf,
                                children: [
                                    m &&
                                        (0, d.jsx)("div", {
                                            className: aU.eZ,
                                            children: (0, d.jsx)(ay, { referrer: u }),
                                        }),
                                    N &&
                                        (0, d.jsx)("div", {
                                            className: aU.Qn,
                                            children: (0, d.jsx)(aP.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, d.jsxs)("div", {
                                        className: T ? aU.es : aU.UJ,
                                        children: [
                                            (0, d.jsx)(eb.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!s,
                                                subscriptionTier: I && null == i ? tN.pe.NONE : i,
                                                buttonTextOverride: I ? eI.intl.string(eI.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, d.jsx)(ej.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, d.jsx)("div", {
                                        className: aU.iQ,
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
var aG = i(812537);
let aw = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        i = (0, u.useCallback)(
            (e) => {
                let i = r.current[e];
                null != i &&
                    ((i.style.scrollMarginTop = `${t}px`), i.scrollIntoView({ behavior: "smooth", block: "start" }));
            },
            [t],
        ),
        [s, n] = (0, u.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
        [a, l] = (0, u.useState)(e[0]);
    (0, u.useEffect)(() => {
        let e = Object.keys(s).filter((e) => s[e]);
        e.length > 0 && l(e[0]);
    }, [s]);
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
var aB = i(818348),
    aH = i(773188);
let aF = () => {
    let e = (0, g.zy)();
    (0, y.P)(_);
    let t = u.useRef(null),
        i = u.useRef(null),
        s = u.useRef(null),
        n = u.useRef(null),
        a = u.useRef(null),
        l = u.useRef(null),
        r = (0, p.bG)([et.Ay], () => et.Ay.useReducedMotion),
        [c, o] = u.useState(!1),
        [m, h] = u.useState(!1),
        [f, N] = u.useState(!1),
        [A, E] = u.useState(!1),
        T = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        C = null != T ? (0, ec.EL)(T) : null,
        I = null != C ? ec.Ay.getSkuIdForPlan(C.planId) : null,
        R = null !== I && I !== tN.pe.TIER_2 ? tN.pe.TIER_2 : null,
        { analyticsLocations: v } = (0, b.Ay)(j.A.PREMIUM_MARKETING);
    u.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, sd.lk)(sI.rE.NITRO_HOME_MARKETING),
        S = P ? as.N.ORB_MULTIPLIER : null,
        D = u.useMemo(() => {
            let t = new URLSearchParams(e.search).get(nb.x);
            return "orbs" === t
                ? S
                : t === as.N.THREE_P_PROMOTIONS
                  ? as.N.THREE_P_PROMOTIONS
                  : t === as.N.YOUTUBE
                    ? as.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    nj(D ?? "", null != D);
    let { navBarSections: M, activeSectionId: O } = aw([n6.HOME, n6.WHATS_NEW, n6.BEST_OF_NITRO, n6.PLANS, n6.COMPARE]),
        { home: L, whatsNew: G, bestOfNitro: H, plans: F, compare: V } = M,
        W = (0, d.jsxs)("div", {
            ref: i,
            className: x()(aH.kL, aH.Gd, aH.iI, { [aH.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, d.jsx)(n3, { className: aH.yH }),
                (0, d.jsx)(ai, { navBarSections: M, activeSectionId: O }),
                (0, d.jsxs)("div", {
                    className: aH.Qr,
                    children: [
                        (0, d.jsx)("div", {
                            className: aH.qY,
                            ref: L.ref,
                            children: (0, d.jsx)(w.L, {
                                innerRef: n,
                                onChange: (e) => o(e),
                                threshold: 0,
                                active: !0,
                                children: (0, d.jsx)(aL, { ref: n, subscriptionTier: R }),
                            }),
                        }),
                        (0, d.jsx)("div", {
                            className: aH.So,
                            ref: G.ref,
                            children: (0, d.jsx)(aC, { shouldLoadVideo: A, isReducedMotion: r }),
                        }),
                        (0, d.jsx)("div", {
                            className: aH.KQ,
                            ref: H.ref,
                            children: (0, d.jsx)(aI, { shouldLoadVideo: A, isReducedMotion: r }),
                        }),
                        (0, d.jsx)("div", {
                            className: aH.qc,
                            ref: F.ref,
                            children: (0, d.jsx)(w.L, {
                                innerRef: s,
                                onChange: (e) => h(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, d.jsx)(n0, { innerRef: s }),
                            }),
                        }),
                        (0, d.jsx)("div", { className: aH.aC, ref: V.ref, children: (0, d.jsx)(aG.A, {}) }),
                    ],
                }),
                (0, d.jsx)(w.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (U.default.track(eZ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: v }),
                            N(!0));
                    },
                    children: (0, d.jsx)("div", { ref: a, className: aH._Z }),
                }),
                (0, d.jsx)(ae, { ref: l }),
                (0, d.jsx)(n5, { isVisible: !c && !m && A, subscriptionTier: R }),
                (0, d.jsx)(n3, { className: aH.MF }),
            ],
        });
    return (0, d.jsx)(t5.N, {
        theme: aB.NJ.DARK,
        children: (e) => (0, d.jsx)(B.Gt, { className: x()(aH.XG, e), ref: t, children: W }),
    });
};
var aV = i(862482),
    aW = i(300349),
    az = i(106512),
    aX = i(662367),
    aY = i(374403),
    aK = i(396375),
    aZ = i(900797),
    aq = i(847374),
    aJ = i(614268);
function aQ(e) {
    let { className: t } = e;
    return (0, d.jsx)("div", {
        className: x()(aJ.i, t),
        children: (0, d.jsx)(eB.E, { type: "early_access", variant: "premium" }),
    });
}
var a$ = i(536071),
    a0 = i(729934);
let a1 = "/assets/5b4fec8511c3676a.svg",
    a2 = "/assets/0838bda6ecd20d91.svg";
function a3(e, t, i) {
    return (0, se.M)(e) ? t : i;
}
var a6 = i(872461);
function a7(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, d.jsxs)(at.D, {
        onClick: i,
        className: a6.customButton,
        children: [
            t ? eI.intl.string(eI.t.maZaN3) : eI.intl.string(eI.t["37C26f"]),
            t
                ? (0, d.jsx)(aZ.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: a6.arrow })
                : (0, d.jsx)(aq.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: a6.arrow }),
        ],
    });
}
function a5(e) {
    let {
            title: t,
            description: i,
            className: s,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: c = !1,
            variant: o = "default",
        } = e,
        { analyticsLocations: u } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
        m = (0, d.jsx)("img", { src: n, alt: "", className: x()(a, a6.perksCardArt) }),
        g = "settings" === o;
    return (0, d.jsx)(b.f5, {
        value: u,
        children: (0, d.jsxs)("div", {
            className: x()(a6.perkCard, s, { [a6.settingsCard]: g }),
            children: [
                r ? (0, d.jsx)(a$.A, { className: a6.perkCardNewBadge }) : null,
                c ? (0, d.jsx)(aQ, { className: a6.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, d.jsx)(q.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: a6.settingsArt,
                          children: m,
                      })
                    : m,
                (0, d.jsxs)("div", {
                    className: g ? a6.settingsText : void 0,
                    children: [
                        (0, d.jsxs)(eG.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: a6.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, d.jsx)(J.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: a6.perkCardDescription,
                            children: "function" == typeof i ? i(u) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let a8 = function (e) {
    let { className: t, isSubscriberNitroHome: s = !1 } = e,
        [n, a] = u.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                s = (0, st.Ay)(),
                n = (0, sn.X)("usePerkCards"),
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
                    imageSource: a3(s, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                let { openUserSettings: t } = i(766075);
                                (a0.A.setState({ scrollPosition: nr._F.TRY_IT_OUT }),
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
                    imageSource: a3(s, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eI.intl.string(eI.t.Bv8Pfk),
                    description: eI.intl.string(eI.t.JMfaTU),
                    imageSource: a3(s, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eI.intl.string(eI.t.Bv8Pfk),
                    description: eI.intl.string(eI.t.JMfaTU),
                    imageSource: a3(s, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eI.intl.string(eI.t["lGcW+c"]),
                    description: eI.intl.string(eI.t["/fDyO+"]),
                    imageSource: a3(s, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eI.intl.string(eI.t["1c+xwT"]),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: a3(s, a2, a1),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eI.intl.string(eI.t.tzdIwI),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: a3(s, a2, a1),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eI.intl.string(eI.t.tzdIwI),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: a3(s, a2, a1),
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
                    imageSource: a3(s, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: a3(s, nc, no),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: a6 }),
        r = (0, e6.bG)([et.Ay], () => et.Ay.useReducedMotion),
        { analyticsLocations: c } = (0, b.Ay)();
    return (0, d.jsxs)("div", {
        className: x()(a6.perksContainer, t, {
            [a6.partiallyHidden]: s && !n,
            [a6.subscriberNitroHome]: s,
            [a6.reducedMotion]: r,
        }),
        children: [
            (0, d.jsx)(eG.D, {
                variant: "heading-xxl/semibold",
                className: a6.perksTitle,
                children: s ? eI.intl.string(eI.t.QX14gI) : eI.intl.string(eI.t.RGadQR),
            }),
            (0, d.jsx)("div", {
                className: x()(a6.perkCardContainer, { [a6.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, d.jsx)(a5, { ...t }, e);
                }),
            }),
            s &&
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)("div", {
                            className: x()({ [a6.sizeGizmo]: !n, [a6.sizeGizmoExpanded]: n }),
                            children: (0, d.jsx)(a7, {
                                onClick: function () {
                                    (U.default.track(eZ.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: c,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, d.jsx)("div", { className: x()(a6.cover, { [a6.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var a9 = i(615939);
let a4 = u.memo(function (e) {
    let { className: t } = e,
        i = [
            {
                id: ie.MORE_EMOJIS_CARD_ID,
                title: eI.intl.string(eI.t["R2IV/Q"]),
                description: eI.intl.string(eI.t.DRMecB),
                imageSource: iQ.A,
            },
            {
                id: ie.HD_VIDEO_CARD_ID,
                title: eI.intl.string(eI.t["/mQ5gg"]),
                description: eI.intl.string(eI.t["7WwAXh"]),
                imageSource: iq.A,
            },
            {
                id: ie.LARGE_UPLOADS_CARD_ID,
                title: eI.intl.string(eI.t.nL1WZV),
                description: (0, sl.M6)({
                    legacyCopy: eI.intl.formatToPlainString(eI.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eI.intl.formatToPlainString(eI.t.teOTfv, {
                        maxFileSize: (0, ec.EJ)(tN.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: a9.A,
            },
            {
                id: ie.PROFILES_CARD_ID,
                title: eI.intl.string(eI.t.KcyDwF),
                description: eI.intl.string(eI.t.Mt3U1W),
                imageSource: iK,
            },
        ];
    return (0, d.jsxs)(q.B, {
        gap: 16,
        className: x()(a6.settingsPerks, t),
        children: [
            (0, d.jsx)(eG.D, { variant: "heading-xl/semibold", children: eI.intl.string(eI.t.q1u7nQ) }),
            (0, d.jsx)(eL.F, {
                children: (0, d.jsx)("div", {
                    className: a6.settingsGrid,
                    children: i.map((e) => (0, d.jsx)(a5, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var le = i(695366),
    lt = i(370049);
let li = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nV.ar)();
    if (null == s) return null;
    let r = null != s ? ec.Ay.getPremiumPlanItem(s) : null;
    if (
        (ec.Ay.isBoostOnlySubscription(s)
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
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, d.jsxs)(t8.Z, {
            className: x()(lt.kL, n, { [lt.He]: l }),
            type: t8.Z.Types.CUSTOM,
            children: [
                (0, d.jsx)(le.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: x()(lt.Kk, { [lt.Pt]: l }),
                }),
                (0, d.jsx)(J.E, {
                    variant: "body-sm/medium",
                    color: i,
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
var ls = i(978836);
let ln = function (e) {
    let { lifted: t = !1 } = e;
    return (0, d.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: x()(ls.zr, { [ls.N]: t }),
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
                        (0, d.jsx)("stop", { className: ls.eq }),
                        (0, d.jsx)("stop", { offset: "0.339235", className: ls.l_ }),
                        (0, d.jsx)("stop", { offset: "0.492065", className: ls.sM }),
                        (0, d.jsx)("stop", { offset: "0.823236", className: ls.zi }),
                        (0, d.jsx)("stop", { offset: "0.899558", className: ls.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var la = i(194509),
    ll = i(317587);
let lr = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, e8.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eZ.JJy.MARKETING_FLOATING_CTA },
        r = (0, st.Ay)(),
        c = (0, n1.M)(r);
    return (0, d.jsx)(e5.animated.div, {
        className: x()(ll.iE, { [ll.H8]: s, [ll.q4]: !t }),
        style: a,
        children: (0, d.jsxs)("div", {
            className: s ? ll.zW : ll.iJ,
            children: [
                (0, d.jsx)(aK.A, {
                    color: c ? aV.XD.BRAND_INVERTED : void 0,
                    className: x()(ll.x6, { [ll.Ph]: c }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: c ? void 0 : ll.PJ,
                }),
                (0, d.jsx)(la.A, { className: ll.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var lc = i(386564);
function lo(e) {
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
            ? (0, d.jsx)(aK.A, {
                  color: l ? aV.XD.BRAND_INVERTED : void 0,
                  className: x()(lc.x6, lc.Ph, n, { [lc.Sq]: t && a, [lc.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : lc.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, d.jsx)(aK.A, {
                  color: l || !a ? aV.XD.BRAND_INVERTED : void 0,
                  className: x()(lc.x6, lc.Ph, n, { [lc.Sq]: t && a, [lc.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        o = t && a ? null : (0, d.jsx)(la.A, { className: x()(lc.x6, n), color: a ? void 0 : aV.XD.WHITE });
    return (0, d.jsxs)("div", { className: x()(lc.UD, s), children: [c, " ", o] });
}
function ld() {
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(a$.p, { className: lc.zd }),
            (0, d.jsx)(a$.p, { className: lc.G }),
            (0, d.jsx)(a$.p, { className: lc.zy }),
            (0, d.jsx)(a$.p, { className: lc.GX }),
        ],
    });
}
function lu(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = aM();
    return (0, d.jsx)(J.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: x()(lc.h_, { [lc.If]: i, [lc.jn]: s }),
        children: eI.intl.format(eI.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let lm = function (e) {
    let { className: t, buttonClassName: i, subscriptionTier: s, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, eo.QQ)(),
        c = (0, nV.ar)(),
        o = (0, nC.b)().length > 0,
        u = eI.intl.string(eI.t.YCZldK);
    return (0, d.jsx)(b.f5, {
        value: l,
        children: (0, d.jsxs)("div", {
            ref: a,
            className: x()(lc.kL, t, { [lc.V1]: !c, [lc.Q4]: !c && o }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, d.jsxs)("div", {
                    className: c ? lc.I6 : lc.G1,
                    children: [
                        (0, d.jsx)(eL.F, {
                            forceLevel: 1,
                            children: (0, d.jsx)(eG.D, {
                                variant: c ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: u,
                            }),
                        }),
                        o
                            ? (0, d.jsx)("div", {
                                  className: lc.DF,
                                  children: (0, d.jsx)(aP.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, d.jsx)(lu, {}),
                        r
                            ? (0, d.jsx)("div", {
                                  className: lc.UD,
                                  children: (0, d.jsx)(la.A, { className: x()(lc.x6, i), color: aV.XD.WHITE }),
                              })
                            : (0, d.jsx)(lo, {
                                  subscriptionTier: s,
                                  inOfferExperience: c,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        o && (0, d.jsx)(lu, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, d.jsx)(ld, {}),
            ],
        }),
    });
};
var lx = i(403227),
    lg = i(367740),
    lp = i(377770);
function lh(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, d.jsx)(ln, { lifted: t }) : null;
}
let lf = () => {
        let { enabled: e } = aW.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, y.P)(_);
        let t = u.useRef(null),
            i = u.useRef(null),
            s = u.useRef(null),
            n = (0, st.Ay)(),
            a = (0, se.M)(n),
            [l, r] = u.useState(!1),
            [c, o] = u.useState(!1),
            [m, g] = u.useState(!1),
            h = !l && !c,
            [f, N] = u.useState(!1),
            A = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
            E = null != A ? (0, ec.EL)(A) : null,
            T = null != E ? ec.Ay.getSkuIdForPlan(E.planId) : null,
            C = null !== T && T !== tN.pe.TIER_2 ? tN.pe.TIER_2 : null,
            I = (0, em.V)(),
            R = I?.subscriptionTrial?.skuId,
            v = (0, nV.ar)(),
            P = !e && v,
            S = (0, p.bG)([tD.A], () => {
                let e = tD.A.getMarketingComponentBySurface(K.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e ? null : e.surface;
            }),
            D = (0, aY.Q)(),
            { analyticsLocations: M } = (0, b.Ay)(j.A.PREMIUM_MARKETING);
        u.useEffect(() => {
            N(!0);
        }, []);
        let O = e
            ? (0, d.jsx)("div", {
                  className: lp.OE,
                  children: (0, d.jsx)(w.L, {
                      innerRef: t,
                      onChange: o,
                      threshold: 0.1,
                      active: !0,
                      children: (0, d.jsx)(n0, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, d.jsx)("div", {
                  className: lp.dY,
                  children: (0, d.jsx)(w.L, {
                      innerRef: t,
                      onChange: (e) => o(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, d.jsx)(nv.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, d.jsx)(aK.A, {
                              showIcon: !1,
                              subscriptionTier: tN.pe.TIER_0,
                              className: lg.Ph,
                              look: aV.pR.OUTLINED,
                              color: aV.XD.WHITE,
                              buttonShineClassName: lg.Qr,
                          }),
                          tier2CTAButton:
                              R === tN.pe.TIER_0
                                  ? (0, d.jsx)(aK.A, {
                                        showIcon: !1,
                                        subscriptionTier: tN.pe.TIER_2,
                                        className: lg.Ph,
                                        look: aV.pR.OUTLINED,
                                        color: aV.XD.WHITE,
                                        buttonShineClassName: lg.Qr,
                                    })
                                  : (0, d.jsx)(aK.A, {
                                        color: aV.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tN.pe.TIER_2,
                                        className: lg.Ph,
                                        textOptions: { textClassName: lg.Ac },
                                        buttonShineClassName: lg.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, d.jsxs)("div", {
            className: x()(lp.kL, { [lp.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, d.jsx)(li, {
                    premiumSubscription: A,
                    textColor: e ? "text-default" : void 0,
                    className: x()(lp.R3, { [lp.aZ]: v }),
                }),
                P &&
                    (0, d.jsxs)("div", {
                        className: lp.n1,
                        children: [
                            (0, d.jsx)(lh, { inOfferExperience: v }),
                            (0, d.jsx)(t$.l, {
                                className: lp.ij,
                                size: "md",
                                location: j.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, d.jsxs)("div", {
                    className: x()({ [lp.V1]: !P }),
                    children: [
                        null != S && (0, d.jsx)(az.m, { className: lp.w$, config: S }),
                        (0, d.jsxs)("div", {
                            className: lp.iS,
                            children: [
                                !P &&
                                    (0, d.jsx)(t$.l, {
                                        className: lp.ij,
                                        size: "md",
                                        location: j.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, d.jsx)(w.L, {
                                    innerRef: i,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, d.jsx)(aL, { ref: i, subscriptionTier: C, variant: "settings" })
                                        : (0, d.jsx)(lm, {
                                              ref: i,
                                              subscriptionTier: C,
                                              className: x()({ [lp.p7]: v, [lp.Pw]: v, [lp.Cv]: null != A }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, d.jsx)("div", { className: lp.Ol, children: (0, d.jsx)(aX.I, { component: D }) }),
                O,
                e ? (0, d.jsx)(a4, { className: lp.OE }) : (0, d.jsx)(a8, { className: lp.B_ }),
                (0, d.jsx)("div", {
                    className: lp.aC,
                    children: e
                        ? (0, d.jsx)(aG.A, { variant: "settings" })
                        : (0, d.jsx)(lx.A, { className: lp.JQ, hideCTAs: !0 }),
                }),
                (0, d.jsx)("div", { className: lp.hz }),
                e
                    ? (0, d.jsx)(n5, { isVisible: h && f, subscriptionTier: C, variant: "settings" })
                    : (0, d.jsx)(lr, { isVisible: h && f, subscriptionTier: C, isApplicationHome: !1 }),
                (0, d.jsx)(w.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (U.default.track(eZ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            g(!0));
                    },
                    children: (0, d.jsx)("div", { ref: s, className: lp._Z }),
                }),
                (0, d.jsx)("img", {
                    src: nE,
                    className: lp.Kw,
                    width: 112,
                    height: 85,
                    alt: eI.intl.string(eI.t.X4IxWL),
                }),
            ],
        });
    },
    lN = function (e) {
        let { entrypoint: t } = e,
            i = (0, em.V)(),
            s = (0, eu.O)(),
            n = (0, nR.NF)({ trialOffer: i }),
            a = (0, nR.Tp)(),
            l = (0, p.bG)([nI.A], () => nI.A.getReminderStateId());
        switch (
            (u.useEffect(() => {
                (!0 === n && (0, nR.QG)(), !0 === a && (0, nR.ne)(l), (null != i || null != s) && (0, G.u1)(i, s));
            }, [i, s, n, a, l]),
            t)
        ) {
            case tN.tU.UserSettings:
                return (0, d.jsx)(lf, {});
            case tN.tU.ApplicationStoreHome:
                return (0, d.jsx)(aF, {});
            default:
                return null;
        }
    };
var lA = i(531296);
let lj = function (e) {
    let { entrypoint: t = tN.tU.UserSettings } = e;
    (0, y.P)(_);
    let i = (0, T.Hp)(),
        { sourceAnalyticsLocations: s, analyticsLocations: n } = (0, b.Ay)(j.A.PREMIUM_MARKETING),
        a = (0, p.bG)([k.A], () => k.A.hasFetchedSubscriptions()),
        l = (0, p.bG)([O.A], () => O.A.hasFetchedPaymentSources),
        r = (0, p.bG)([M.default], () => M.default.getCurrentUser()),
        c = r?.id,
        o = (0, em.V)(),
        m = (0, eu.O)(),
        R = (0, C.Y)(tN.T7),
        [v, w] = u.useState(!0),
        B = u.useRef(0),
        H = (0, L.YE)(r, tN.PremiumTypes.TIER_2);
    ((0, nC.b)(),
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
                U.default.track(eZ.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: B.current,
                });
        }, [s, v]),
        u.useEffect(() => {
            i && (null != o || null != m) && (0, G.u1)(o, m);
        }, [i, o, m]));
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
                i = Object.hasOwn(t, e) ? t[e] : void 0;
            null != i &&
                ((V.current = !0),
                (0, S.bG)(eZ.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: i, analyticsLocations: n }));
        }, [W, F.search, n]));
    let Y = (0, p.bG)([D.A], () => D.A.enabled),
        K = t === tN.tU.ApplicationStoreHome,
        Z = Y
            ? (0, d.jsx)(N.A, {})
            : i
              ? (0, d.jsx)(I.uK, {})
              : K && H
                ? (0, d.jsx)(b.f5, { value: n, children: (0, d.jsx)(nT, { userId: c }) })
                : z
                  ? null
                  : (0, d.jsx)("div", { className: x()(lA.kL, lA.Lq), children: (0, d.jsx)(h.y, {}) });
    return null != Z
        ? !Y && !i && K && H
            ? Z
            : (0, d.jsxs)(d.Fragment, { children: [K && (0, d.jsx)(A.A, {}), Z] })
        : (0, d.jsx)(b.f5, { value: n, children: (0, d.jsx)(lN, { entrypoint: t }) });
};
