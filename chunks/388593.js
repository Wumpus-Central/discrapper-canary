(i.d(t, { A: () => lh }), i(323874), i(14289), i(35956), i(205816));
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
    eU = i(16371),
    eL = i(854627),
    eG = i(427262),
    ew = i(938767);
function eB() {
    let e = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, ek.A)(),
        { avatarSrc: i, avatarDecorationSrc: s, eventHandlers: n } = (0, eL.A)({ userId: e?.id, size: eM._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eG.mG)(e);
    return (0, o.jsxs)("div", {
        className: ew.kL,
        children: [
            (0, o.jsx)("div", {
                className: ew.my,
                children: (0, o.jsx)(eO.eu, {
                    src: i,
                    avatarDecoration: s,
                    size: eM._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, o.jsx)("div", { className: ew.QC, children: (0, o.jsx)(eU.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eH = i(707554),
    eF = i(534514);
let eV = function (e) {
    let { className: t, color: i = "text-strong", variant: s = "nitro-lg", children: n } = e;
    return (0, o.jsx)(eH.F, {
        forceLevel: 1,
        children: (0, o.jsx)(eF.D, { className: t, variant: s, color: i, children: n }),
    });
};
var eW = i(969935),
    ez = i(132506),
    eK = i(610709),
    eY = i(478016),
    eX = i(318254),
    eq = i(646514),
    eZ = i(626031),
    eJ = i(197630);
i(232198);
var eQ = i(957457);
function e$(e) {
    let { nRewardsGranted: t, referralRewardType: i, className: s } = e;
    return t < 1
        ? null
        : i === eJ.xb.ORBS
          ? (0, o.jsx)(e0, { nRewardsGranted: t, className: s })
          : i === eJ.xb.DISCOUNT
            ? (0, o.jsx)(e1, { nRewardsGranted: t, className: s })
            : null;
}
function e0(e) {
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
                    className: eQ.u,
                    "aria-label": String(s),
                    children: [
                        (0, o.jsx)(eX.OrbsIcon, { size: "xs", color: eq.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, o.jsx)(eZ.t, {
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
function e1(e) {
    let { nRewardsGranted: t, className: i } = e;
    return (0, o.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: i,
        "aria-label": ey.intl.formatToPlainString(ey.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, o.jsx)(eY.CheckmarkSmallIcon, { size: "md", color: eq.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, o.jsx)(Z.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: ey.intl.format(ey.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e2 = i(303682),
    e3 = i(758836),
    e6 = i(558992);
function e7(e) {
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
        } = (0, ez.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, o.jsxs)("div", {
        className: m()(e6.kL, t),
        children: [
            (0, o.jsx)("div", {
                className: e6.G3,
                children: (0, o.jsx)(eK.fx, {
                    nReferralsSent: s,
                    imageSize: 55,
                    backgroundClassName: e6.HP,
                    ringClassName: e6.pZ,
                    referralRewardType: u,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, o.jsxs)("div", {
                className: m()(e6.IH, d && e6.zD),
                children: [
                    d &&
                        (0, o.jsx)("div", {
                            className: e6.aZ,
                            children: (0, o.jsx)(ef.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, o.jsxs)("div", {
                        className: e6.n4,
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
                              className: e6.Wp,
                              children: [
                                  (0, o.jsx)(eK.ZP, { referralSentUsers: i }),
                                  (0, o.jsx)(e$, { nRewardsGranted: c.numRewardGranted, referralRewardType: u }),
                              ],
                          })
                        : (0, o.jsx)(eK.ZP, { referralSentUsers: i, className: e6.t7 }),
                ],
            }),
            (0, o.jsx)(Q.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? ey.intl.string(ey.t.iw5Ccc) : ey.intl.string(ey.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, eW.Cz)({
                              tab: e3.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eK.jM)({
                              startingScreen: e2.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e8 = i(164636),
    e5 = i(676279),
    e9 = i(156150),
    e4 = i(717421),
    te = i(396583),
    tt = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    ti = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let ts = (e) => {
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
        u = (0, e4.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, d.useState)(1),
        h = (0, e4.z)(
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
        N = (0, e4.z)(
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
        I = (0, e4.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, te.A)(() => {
        (b(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? c
        : (0, o.jsx)(e9.animated.div, {
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
var tn = i(382168);
let ta = function (e) {
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
                    className: m()(tn.nJ, s),
                    children: (0, o.jsx)(ts, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.UP,
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
                    className: m()(tn.IN, n),
                    children: (0, o.jsx)(ts, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.DOWN,
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
                    className: m()(tn.Gj, a),
                    children: (0, o.jsx)(ts, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.DOWN,
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
                    className: m()(tn.FV, l),
                    children: (0, o.jsx)(ts, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.UP,
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
                    className: m()(tn.E1, r),
                    children: (0, o.jsx)(ts, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tt.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.UP,
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
var tl = i(607470),
    tr = i(562915);
let tc =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    to = function (e) {
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
                          ? tr.A
                          : "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, o.jsx)("div", {
                  className: n,
                  children: (0, o.jsx)(ts, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tt.SINE },
                      parallaxAnimationData: {
                          pathDirection: ti.UP,
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
                                tl.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, o.jsx)("source", { src: tc }),
                                },
                                tc,
                            ),
                  }),
              });
    },
    td = function (e) {
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
            p = (0, e8.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            f = (0, e5.TM)();
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(to, {
                    supportHEVCAlpha: f,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
                    animationSpeedScale: h,
                }),
                (0, o.jsx)(ta, {
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
var tu = i(942663);
let tm = function (e) {
    let { containerVisibilityPercentage: t, compact: i } = e;
    return (0, o.jsx)(td, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: m()(tu.wG, i && tu.Vx),
        flyingWumpusAssetClassName: m()(tu.lu, i && tu.ov),
        boltContainerClassName: m()(tu.nJ, i && tu.Wc),
        hammerContainerClassName: m()(tu.Gj, i && tu.XA),
        keyContainerClassName: m()(tu.FV, i && tu.oZ),
        starContainerClassName: m()(tu.E1, i && tu.LN),
        boltAssetClassName: m()(tu.j7, i && tu.QN),
        hammerAssetClassName: m()(tu.Wv, i && tu.B9),
        keyAssetClassName: m()(tu.rs, i && tu.I1),
        starAssetClassName: m()(tu.OY, i && tu.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tx = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tg = i(454273);
let th = function (e) {
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
            ((t = { [tx.MORNING]: ey.t["Wvc/I+"], [tx.AFTERNOON]: ey.t["d+0STx"], [tx.EVENING]: ey.t.CqsxKI }),
            ey.intl.string(
                t[
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? tx.MORNING
                        : i >= 12 && i < 17
                          ? tx.AFTERNOON
                          : tx.EVENING
                ],
            )),
        p = c ?? (r ? (0, o.jsx)(e7, {}) : null);
    return (0, o.jsx)("div", {
        className: m()(tg.kL, tg.Eg, s),
        ref: l,
        children: (0, o.jsxs)("div", {
            className: m()(tg.W2, tg.HQ),
            ref: u,
            children: [
                (0, o.jsxs)(q.B, {
                    align: "start",
                    gap: 32,
                    className: tg.ZU,
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
                                        (0, o.jsx)(eV, { color: "text-default", variant: "nitro-md", children: h }),
                                        (0, o.jsx)(eB, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, o.jsx)("div", {
                    className: tg.y3,
                    children: (0, o.jsx)(tm, { containerVisibilityPercentage: x, compact: null == p }),
                }),
            ],
        }),
    });
};
var tp = i(549926);
let tf = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, o.jsx)(td, {
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
var tN = i(499126);
let tA = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, o.jsx)(td, {
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
var tj = i(682901);
function tb(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = ed.R.useConfig({ location: "nitro_home_reverse_trial_badge" }),
        a = ey.intl.string(ey.t.yhldRB),
        l = (0, eo.Zb)(t),
        { visibilityPercentageRef: r, visibilityPercentage: c } = eh(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion));
    return (0, o.jsx)("div", {
        className: m()(tg.kL, i),
        ref: s,
        children: (0, o.jsxs)("div", {
            className: tg.Gs,
            ref: r,
            children: [
                (0, o.jsxs)(q.B, {
                    align: "start",
                    gap: 24,
                    className: tg.E2,
                    children: [
                        (0, o.jsxs)(q.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                n ? (0, o.jsx)(eA, { text: a }) : (0, o.jsx)(eb, { text: a }),
                                (0, o.jsx)(eV, { children: ey.intl.format(ey.t.FwjP6W, { days: l }) }),
                                (0, o.jsx)("div", {
                                    className: tg.X8,
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
                            className: tg.oF,
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
                (0, o.jsx)("div", { className: tg.Hk, children: (0, o.jsx)(tA, { containerVisibilityPercentage: c }) }),
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
            headingTop: c,
            showPill: d,
            shouldShowReferralProgressBar: u,
            marketingBanner: x,
        } = e,
        { visibilityPercentageRef: h, visibilityPercentage: p } = eh(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = x ?? (u ? (0, o.jsx)(e7, {}) : null);
    return (0, o.jsx)("div", {
        className: m()(tg.kL, tg.Eg, t),
        ref: s,
        children: (0, o.jsxs)("div", {
            className: m()(tg.W2, tg.HQ),
            ref: h,
            children: [
                (0, o.jsxs)(q.B, {
                    align: "start",
                    gap: 32,
                    className: m()(tg.ZU, tg.GW),
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
                                (0, o.jsx)(eV, {
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
                    className: m()(tg.y3, tg.Xx),
                    children: (0, o.jsx)(tf, { containerVisibilityPercentage: p }),
                }),
            ],
        }),
    });
}
function tT(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: s } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: c,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tC(),
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
        N = (0, z.U9)(f, tj.pe.TIER_2) ? tj.pe.TIER_2 : void 0,
        b = null != r && r.status !== eN.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, ei.A)(),
        T = E.isFractionalPremiumActive && !b && null == h && !l;
    if (i) return (0, o.jsx)(tb, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, o.jsxs)("div", {
                  className: tg.UJ,
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
        return (0, o.jsx)(th, {
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
        ? (0, o.jsx)(tE, {
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
        : (0, o.jsx)(th, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: s,
              marketingBanner: h,
          });
}
let [tI, tC] = (0, ea.A)(),
    tR = function (e) {
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
            b = p !== tj.xc.NONE && !l,
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
                    tooltipClassName: tg.YL,
                    position: "right",
                    children: (e) =>
                        (0, o.jsx)("div", {
                            ...e,
                            className: tg.V_,
                            children: (0, o.jsx)("div", {
                                className: tg.eL,
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
            children: (0, o.jsx)(tI.Provider, {
                value: I,
                children: (0, o.jsx)(tT, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: h }),
            }),
        });
    };
var tv = i(435558),
    t_ = i(308588),
    ty = i(24197),
    tP = i(28863),
    tS = i(212245),
    tD = i(19191),
    tM = i(597758),
    tO = i(412260),
    tk = i(316511);
function tU(e) {
    return null != e.effectiveEndDate ? e.effectiveEndDate.getTime() + 1 : null;
}
function tL(e, t) {
    let i = e.filter((e) => e > t);
    return i.length > 0 ? Math.min(...i) : null;
}
var tG = i(706778),
    tw = i(498470),
    tB = i(807098),
    tH = i(92551),
    tF = i(637706),
    tV = i(788883),
    tW = i(700556),
    tz = i(821874);
function tK(e) {
    let { id: t, sectionClassName: i, heading: s, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = tz.Ui;
    return (0, o.jsxs)("div", {
        id: t,
        className: i,
        children: [
            s,
            n,
            null != a ? (0, o.jsx)("div", { className: m()(r, null != n && tW.Jx, l), children: a }) : null,
        ],
    });
}
var tY = i(477106),
    tX = i(762493);
function tq(e) {
    let { component: t } = e,
        i = (function (e) {
            if ("nitroHomeSectionHeader" !== e.properties.properties.oneofKind) return null;
            let { nitroHomeSectionHeader: t } = e.properties.properties,
                i = e.getFormatVariableValues(ey.intl.currentLocale),
                s = (0, tH.n)(t.header, i),
                n = (0, tH.n)(t.subheader, i),
                a = s.ok ? s.content.trim() : "",
                l = n.ok ? n.content.trim() : "";
            return "" === a && "" === l ? null : { header: a, subheader: l };
        })(t);
    if (null == i) return null;
    let { header: s, subheader: n } = i,
        a = (0, tF.C)(t.surface.helpArticle, "");
    return (0, o.jsxs)(q.B, {
        gap: 8,
        className: tz.R_,
        children: [
            (0, o.jsx)(tV.A, { componentType: t.componentType, componentId: t.id, promotionId: t.promotionId }),
            "" !== s && (0, o.jsx)(eF.D, { variant: "nitro-sm", className: tW.U6, children: s }),
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
                                    (0, o.jsx)(tP.Anchor, { href: a.url, children: a.linkText }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function tZ(e) {
    let { component: t } = e,
        { button: i, background: s, foreground: n, thirdPartyLogo: a } = t.surface,
        l = t.surface.description.trim(),
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        c = (0, tS.p)(),
        u = (0, tB.T)(s),
        m = null != u && "" !== u,
        x = (0, tB.T)(n, m),
        g = (0, tB.T)(a, m),
        h = (function (e) {
            if (null == e || e.buttonAction === t_.dz.UNSPECIFIED) return;
            let t = e.copy.trim();
            return "" !== t ? t : void 0;
        })(i),
        p = d.useMemo(
            () =>
                null != i
                    ? (0, tw.h)({
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
            (0, o.jsx)(tV.A, { componentType: t.componentType, componentId: t.id, promotionId: t.promotionId }),
            (0, o.jsx)(tG.S, {
                id: `nitro-perk-card-${t.id}`,
                title: t.surface.header.trim(),
                description: "" !== l ? l : void 0,
                caption: null != g && "" !== g ? (0, o.jsx)("img", { src: g, alt: "" }) : void 0,
                primaryAsset: x ?? void 0,
                backgroundAssetUrl: m ? u : void 0,
                ctaText: h,
                onCtaClick: null != h ? p : void 0,
                containerClassName: tz.Nr,
            }),
        ],
    });
}
function tJ() {
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
                (0, tM.BE)();
            }, []),
            (t = (0, g.yK)([tO.A, tD.A], () =>
                tO.A.getActiveMarketingComponentsBySurfaceUnprioritized(e).filter((e) =>
                    (0, tk.A)(tO.A.getMarketingPromotionForEligibility(e.promotionId), tD.A),
                ),
            )),
            (i = (0, g.yK)([tO.A], () => t.map((e) => tO.A.getMarketingPromotionForEligibility(e.promotionId)), [t])),
            (s = d.useMemo(
                () => [...i.map((e) => e?.endDate.getTime() ?? null), ...t.map(tU)].filter((e) => null != e),
                [t, i],
            )),
            (n = d.useCallback(() => tL(s, Date.now()), [s])),
            (a = d.useCallback(
                (e) => {
                    let t;
                    return (
                        !(function i() {
                            let n = Date.now(),
                                a = tL(s, n);
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
                    return "" !== t.header.trim() && t.placements.includes(ty.U.NITRO_HOME);
                })),
                (0, tv.sortBy)(e, (e) => {
                    let { surface: t } = e;
                    return 0 === t.position ? 1 / 0 : t.position;
                })
            );
        }, [c]);
    return 0 === u.length
        ? null
        : (0, o.jsx)(tK, {
              sectionClassName: m()(tX.uW, tX.Uv, tX.qr),
              heading: null != r ? (0, o.jsx)(tq, { component: r }) : null,
              gridClassName: tY.V,
              grid: u.map((e) => (0, o.jsx)(tZ, { component: e }, e.id)),
          });
}
var tQ = i(820284),
    t$ = i(742589),
    t0 = i(392943),
    t1 = i(521440),
    t2 = i(603202),
    t3 = i(673992);
let t6 = function () {
    return (0, o.jsx)(tQ.A, {
        section: eN.JJy.NAVIGATION,
        children: (0, o.jsx)(t$.A, {
            className: m()(t2.TQ, t3.C$),
            transparent: !0,
            role: "navigation",
            children: (0, o.jsxs)("div", {
                className: t2.Wc,
                children: [
                    (0, o.jsxs)("div", {
                        className: t3.wk,
                        children: [
                            (0, o.jsx)(J.NitroWheelIcon, { colorClass: t3.tr }),
                            (0, o.jsx)("span", {
                                role: "img",
                                "aria-label": ey.intl.string(ey.t.Ipxkog),
                                className: t3.Ss,
                                children: (0, o.jsx)(t0.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: t2.MQ,
                        children: [
                            (0, o.jsx)(t1.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, o.jsx)(eI.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var t7 = i(325499),
    t8 = i(613412),
    t5 = i(885574),
    t9 = i(993077),
    t4 = i(139286),
    ie = i(872725),
    it = i(920050),
    ii = i(51965),
    is = i(375776),
    ia = i(727811),
    il = i(222652),
    ir = i(831768),
    ic = i(934353);
function io(e) {
    let { openRewardModal: t } = e,
        i = (0, il.z)();
    if (i.kind === il.N.SUBSCRIBE)
        return (0, o.jsxs)("div", {
            className: ic.R$,
            children: [
                (0, o.jsx)(eC.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tj.pe.TIER_2,
                }),
                (0, o.jsx)(Q.$, { variant: "secondary", size: "md", text: ey.intl.string(ey.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === ia.P.CLAIMED
            ? { text: ey.intl.string(ir.default.Plwzgf) }
            : { text: ey.intl.string(ey.t.hvVgAZ) };
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)("div", {
                className: ic.R$,
                children: [
                    (0, o.jsx)(ii.A, {
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
            i.claimStatus === ia.P.CLAIM_IN_PROGRESS &&
                (0, o.jsxs)("div", {
                    className: ic.ed,
                    children: [
                        (0, o.jsx)(t5.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: ey.intl.string(ir.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function id(e) {
    let { glowing: t = !1 } = e;
    (0, t4.A)({
        type: t8.ImpressionTypes.VIEW,
        name: t8.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: it.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
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
                    className: m()(e, ic.kL),
                    children: (0, o.jsx)(ie.A, {
                        cardType: t9.s.CUSTOM,
                        cardClassName: ic.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, o.jsxs)("div", {
                            className: ic.XF,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: ic.j,
                                    children: [
                                        (0, o.jsx)("div", { className: ic._g }),
                                        (0, o.jsx)("div", { className: ic.$h }),
                                        (0, o.jsx)("div", { className: ic.Rv }),
                                        (0, o.jsx)("div", { className: ic.Lw }),
                                        (0, o.jsx)("div", { className: ic.mR }),
                                    ],
                                }),
                                (0, o.jsxs)("div", {
                                    className: ic.Qs,
                                    children: [
                                        (0, o.jsx)("img", {
                                            className: ic.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, o.jsx)(eF.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: ic.DD,
                                            children: ey.intl.string(ir.default.RGT513),
                                        }),
                                        (0, o.jsx)(Z.E, {
                                            variant: "body-md/normal",
                                            color: "text-strong",
                                            className: ic.h_,
                                            children: ey.intl.string(ir.default["+pTnsf"]),
                                        }),
                                        (0, o.jsx)(io, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var iu = i(7684),
    im = i(112992);
let ix = () =>
    (0, o.jsxs)("div", {
        className: iu.X,
        children: [
            (0, o.jsx)("div", {
                className: iu.W,
                children: (0, o.jsx)(t5.CircleInformationIcon, { size: "xxs", color: eq.A.colors.ICON_MUTED }),
            }),
            (0, o.jsx)(Z.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: ey.intl.string(ir.default.Fs74z9),
            }),
        ],
    });
function ig(e) {
    let { className: t, containerClassName: i, glowing: s } = e,
        n = (0, il.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === il.N.SUBSCRIBE
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
        r = n.kind === il.N.DEFAULT && n.claimStatus === ia.P.CLAIM_IN_PROGRESS;
    return (0, o.jsx)(tG.S, {
        id: it.XBOX_PREMIUM_PERK_CARD_ID,
        title: ey.intl.string(ir.default.UVL9tD),
        description: ey.intl.string(ir.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, o.jsx)(ix, {}) : void 0,
        className: t,
        containerClassName: i,
        glowing: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, o.jsx)("img", { src: im.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function ih(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, o.jsx)(j.f5, { value: t, children: (0, o.jsx)(ig, { ...e }) });
}
var ip = i(744082),
    iN = i(261995),
    iA = i(722793),
    ij = i(517846),
    ib = i(669700),
    iE = i(398523),
    iT = i(881373),
    iI = i(555393),
    iC = i(852218),
    iR = i(52530),
    iv = i(116420),
    i_ = i(88210),
    iy = i(612413);
i(675772);
var iP = i(749962),
    iS = i(691450),
    iD = i(116716),
    iM = i(12947),
    iO = i(524698),
    ik = i(45116),
    iU = i(679502);
let iL = "xgpp";
function iG(e) {
    let { card: t, backgroundAssetUrl: i, blurTint: s, glowing: n, autoClickCta: a } = e;
    return (0, o.jsx)("div", {
        className: tW.JE,
        children: (0, o.jsx)(tG.S, {
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
        s = (0, t7.b)("premium_subscriber_home_rewards");
    (0, ip.A)(tj.tv);
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
                s = ((e = (0, iR.eh)()), (t = (0, iR.fR)()), null != e ? e : t),
                n = (0, iT.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                a = iE.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                l = (0, iy.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                { enabled: r } = iv.A.useConfig({ location: "useThirdPartyPartnerPerkCards" }),
                c = (0, g.bG)([tO.A], () => tO.A.getPromotionsByPartner(iC.uV).recurring.length > 0),
                u = null === (0, iI.N)(),
                m = (0, iN.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: x, nDaysInMonth: h } = (0, d.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, d.useMemo)(() => {
                let e = n
                        ? {
                              id: it.LOGITECH_3PP_CARD_ID,
                              title: ey.intl.string(iS.default.OlObRa),
                              description: ey.intl.format(iS.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: el.A.getArticleURL(eN.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: x.getDate() / h,
                              ctaText: ey.intl.string(ey.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, i_.P)({
                                      partnerIds: [iC.XY],
                                      title: ey.intl.string(iS.default["2I7nK+"]),
                                      subtitle: ey.intl.format(iS.default.W8jOD0, {
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
                              analyticsOptions: { thirdPartyPartner: iC.XY },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    t = a
                        ? {
                              id: it.RECURRING_3P_PROMOTIONS_CARD_ID,
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
                                  (0, i_.P)({
                                      partnerIds: [iC.KS],
                                      title: ey.intl.string(ey.t["7ioAjs"]),
                                      subtitle: ey.intl.format(ey.t.LOYRxB, {
                                          helpCenterLink: el.A.getArticleURL(eN.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: iC.KS },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null;
                return {
                    logitechCard: e,
                    steelseriesCard: t,
                    youtubeCard: l
                        ? {
                              id: it.YOUTUBE_3PP_CARD_ID,
                              title: ey.intl.string(iO.default["BdIVB+"]),
                              description: ey.intl.format(iO.default["cCl3+a"], {
                                  discountPercentage: 20,
                                  months: 6,
                                  helpCenterUrl: el.A.getArticleURL(eN.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, o.jsx)("img", { src: iU.A, alt: "YouTube Premium" }),
                              ctaText: ey.intl.string(iP.default.fcopjf),
                              onCtaClick: () =>
                                  (0, i_.P)({
                                      partnerIds: [iC.NC],
                                      analyticsLocations: i,
                                      title: ey.intl.string(iO.default.TDZUui),
                                      subtitle: ey.intl.format(iO.default.dueYf1, {
                                          helpCenterUrl: el.A.getArticleURL(eN.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          ib.Ay.fireSurveyAction(ij.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: iC.NC },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    voicemodCard:
                        r && c
                            ? {
                                  id: it.VOICEMOD_3PP_CARD_ID,
                                  title: ey.intl.string(iM.default.pkGxhZ),
                                  description: ey.intl.string(iM.default.Gspm9q),
                                  pillText: ey.intl.string(ey.t.y2b7CA),
                                  subscriptionRequired: !0,
                                  isThirdPartyPerk: !0,
                                  caption: (0, o.jsx)("img", { src: ik.A, alt: "Voicemod" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/d78c7ca47e2f2bf66dcc2fb12a7b190392672d4c44d6138f26b011f8bd923fff.png",
                                  progress: x.getDate() / h,
                                  ctaText: ey.intl.string(iD.default.vlafDc),
                                  onCtaClick: () =>
                                      (0, i_.P)({
                                          partnerIds: [iC.uV],
                                          title: ey.intl.string(iM.default.AX5oOl),
                                          subtitle: ey.intl.format(iD.default.fqtaGq, {
                                              termsUrl: el.A.getArticleURL(eN.MVz.VOICEMOD_PROMOTION),
                                          }),
                                          analyticsLocations: i,
                                      }),
                                  analyticsOptions: { thirdPartyPartner: iC.uV },
                                  ctaDisabled: u,
                                  ctaLoading: u,
                              }
                            : null,
                    macaronCard: m,
                    codeBlurpleCard: s,
                };
            }, [m, s, i, x, n, h, a, l, r, c, u]);
        })(),
        { phase: x } = (0, iN.vc)({ location: "NitroRewardsSection" }),
        h =
            null != c
                ? {
                      card: c,
                      backgroundAssetUrl:
                          x === iA.H.PHASE_ONE
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
        ? (b = (0, o.jsx)(iG, {
              card: h.card,
              backgroundAssetUrl: h.backgroundAssetUrl,
              blurTint: h.blurTint,
              glowing: t === iL || i === h.card.id,
              autoClickCta: i === h.card.id,
          }))
        : f && (b = (0, o.jsx)("div", { className: tW.JE, children: (0, o.jsx)(id, { glowing: t === iL }) })),
    null != b || N)
        ? (0, o.jsx)(tK, {
              id: iL,
              sectionClassName: m()(tX.uW, tX.Uv, tX.qr),
              heading: (0, o.jsx)(eF.D, {
                  variant: "nitro-sm",
                  className: m()(tz.R_, tW.U6),
                  children: ey.intl.string(ey.t.NG1e6l),
              }),
              beforeGrid: b,
              grid: N
                  ? (0, o.jsxs)(o.Fragment, {
                        children: [
                            null != r && (0, o.jsx)(tG.S, { ...r, containerClassName: tz.Nr, glowing: i === r.id }),
                            null != u && (0, o.jsx)(tG.S, { ...u, containerClassName: tz.Nr, glowing: i === u.id }),
                            null != c &&
                                c.id !== p &&
                                (0, o.jsx)(tG.S, {
                                    ...c,
                                    containerClassName: tz.Nr,
                                    glowing: i === c.id,
                                    autoClickCta: i === c.id,
                                }),
                            null != l &&
                                l.id !== p &&
                                (0, o.jsx)(tG.S, {
                                    ...l,
                                    containerClassName: tz.Nr,
                                    glowing: i === l.id,
                                    autoClickCta: i === l.id,
                                }),
                            s &&
                                (0, o.jsx)(ih, {
                                    containerClassName: tz.Nr,
                                    glowing: i === it.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != n && (0, o.jsx)(tG.S, { ...n, containerClassName: tz.Nr, glowing: i === n.id }),
                            null != a && (0, o.jsx)(tG.S, { ...a, containerClassName: tz.Nr, glowing: i === a.id }),
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
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e4.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsx)(e9.animated.div, {
        className: m()(iB.iE, { [iB.q4]: !t }),
        style: r,
        children: (0, o.jsxs)("div", {
            className: iB.iJ,
            children: [
                (0, o.jsx)("img", { alt: "", src: iH, className: iB.oU }),
                (0, o.jsxs)("div", {
                    className: iB.iQ,
                    children: [
                        (0, o.jsx)(eF.D, {
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
var iV = i(761508),
    iW = i(151869),
    iz = i(62617),
    iK = i(387103);
function iY(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iK.A,
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let iX =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function iq(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iX,
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iZ = i(93712);
function iJ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iZ.A,
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
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
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
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
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
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
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
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i7 = i(996682);
function i8(e) {
    let { color: t = eq.A.colors.ICON_STRONG, "aria-label": i, "aria-hidden": s, role: n, width: a, height: l } = e,
        r = d.useMemo(() => (0, iz.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, o.jsxs)("svg", {
        ...(0, i7.A)({ "aria-label": i, "aria-hidden": s, role: n }),
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
function i5(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
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
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
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
    si = i(462463),
    ss = i(219882),
    sn = i(105909),
    sa = i(208223),
    sl = i(731738),
    sr = i(913379),
    sc = i(403362),
    so = i(286348),
    sd = i(923079),
    su = i(631502),
    sm = (((l = {}).WHATS_NEW = "whats_new"), (l.FAVORITES = "favorites"), l),
    sx = i(696292),
    sg = i(914313),
    sh = i(321538),
    sp = i(892227),
    sf = i(81466),
    sN = i(17268),
    sA = i(749012);
let sj = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, H.F)();
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, sp.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, o.jsxs)("div", {
        className: sA.kL,
        children: [
            null != i &&
                (0, o.jsxs)("div", {
                    className: sA.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: sA.Pf,
                            children: [
                                (0, o.jsx)(sf.CalendarIcon, { size: "sm", color: eq.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: ey.intl.string(sN.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ey.intl.format(sN.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, o.jsx)("div", { className: sA.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, o.jsxs)("div", {
                    className: sA.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: sA.Pf,
                            children: [
                                (0, o.jsx)(eX.OrbsIcon, { size: "sm", color: eq.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: ey.intl.string(sN.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ey.intl.format(sN.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var sb = i(221596),
    sE = i(799544);
function sT(e) {
    var t;
    let i,
        s,
        n,
        a,
        l,
        r,
        { shouldShowBonusOrbsUX: c, multiplier: u } = (0, sg.lk)(sb.rE.NITRO_HOME_MARKETING),
        { isEligible: x, programReward: h } = (0, H.F)();
    return {
        nitroOrbsRewardsCard:
            ((t = (0, d.useMemo)(
                () =>
                    !x || null == h || null == h.reward_amount || h.reward_amount <= 0
                        ? null
                        : {
                              id: it.NITRO_ORBS_REWARDS_CARD_ID,
                              title: ey.intl.string(sN.default.hx5AFp),
                              description: ey.intl.format(sN.default.wq3CF2, { orbsCount: h.reward_amount }),
                              primaryAsset: "/assets/8f530451dce1ccc0.svg",
                              primaryAssetClassName: m()(sE.lH, sE.yK),
                              footerContent: (0, o.jsx)(sj, {}),
                              ctaText: ey.intl.string(sN.default.BxjHiu),
                              onCtaClick: () => (0, P.pX)(eN.BVt.COLLECTIBLES_SHOP_WITH_TAB(e3.G2.ORBS)),
                          },
                [x, h],
            )),
            (i = (0, sd.A)({ location: "useNorbsNitroOrbsRewardsCard" })),
            (s = (0, g.bG)([D.default], () => D.default.getCurrentUser())),
            (n = s?.perks != null),
            (l = null != (a = s?.premiumType) ? String(a) : "none"),
            (r = null != t),
            (0, d.useEffect)(() => {
                r &&
                    null != e &&
                    sr.A.increment({
                        name: sl.K.NORBS_NITRO_ORBS_CARD_STATE,
                        tags: [`experience:${i}`, `surface:${e}`, `perks_loaded:${n}`, `premium_tier:${l}`],
                    });
            }, [r, e, i, n, l]),
            (0, d.useMemo)(() => {
                if (null == t) return null;
                switch (i) {
                    case sd.m.DEFAULT:
                        return t;
                    case sd.m.DEPRECATED_XBOX:
                    case sd.m.REMOVED:
                    case sd.m.REMOVED_XBOX:
                        return null;
                    case sd.m.DEPRECATED:
                        return {
                            ...t,
                            title: ey.intl.string(su.default.LG4Fft),
                            description: ey.intl.format(su.default["69NJ0X"], { date: so.Ds }),
                            pillText: ey.intl.formatToPlainString(ey.t["7D8r4F"], {
                                expiryDate: so.Ds.toLocaleDateString(ey.intl.currentLocale, {
                                    month: "short",
                                    day: "numeric",
                                }),
                            }),
                            footerContent: void 0,
                        };
                    default:
                        return (0, sc.xb)(i);
                }
            }, [t, i])),
        questOrbMultiplierCard: (0, d.useMemo)(
            () =>
                c
                    ? {
                          id: it.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ey.intl.string(ey.t.Csf5Ol),
                          description: ey.intl.format(ey.t.NpUfej, { bonusOrbMultiplier: u }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ey.intl.string(ey.t.jVcuVY),
                          onCtaClick: () => (0, sh.mA)({ fromContent: sx.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: sE.Nf,
                      }
                    : null,
            [c, u],
        ),
    };
}
var sI = i(975807),
    sC = i(95035),
    sR = i(728666),
    sv = i(88001),
    s_ = i(107198),
    sy = i(817577);
function sP() {
    (0, sI.A)(sv.TE);
}
function sS(e) {
    let t = (0, sR.O9)(),
        s = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, d.useCallback)(() => {
            n
                ? (0, X.mM)(async () => {
                      let { default: e } = await i.e(499709).then(i.bind(i, 516044));
                      return (t) => (0, o.jsx)(e, { ...t });
                  })
                : (0, y.A)({
                      subscriptionTier: tj.pe.TIER_2,
                      initialPlanId: tj.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, d.useMemo)(
        () =>
            t
                ? {
                      id: it.PREMIUM_GROUP_CARD_ID,
                      title: ey.intl.string(s_.default.YkvksF),
                      description: (0, o.jsxs)(o.Fragment, {
                          children: [
                              ey.intl.formatToPlainString(s_.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, sv.DP)(),
                              }),
                              (0, o.jsx)("div", {
                                  className: sE.LF,
                                  children: (0, o.jsx)(sC.A, {
                                      onClick: sP,
                                      children: ey.intl.string(s_.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ey.intl.string(ey.t.oW0eUd),
                      primaryAsset: sy,
                      ctaIcon: J.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: ey.intl.string(ey.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sD = i(793943),
    sM = i(169099),
    sO = i(506988),
    sk = i(590202),
    sU = i(332560),
    sL = i(62234),
    sG = i(324061),
    sw = i(701256),
    sB = i(804564),
    sH = i(818349),
    sF = i(419490),
    sV = i(424739),
    sW = i(572164),
    sz = i(271597),
    sK = i(815460),
    sY = i(464132),
    sX = i(683825);
function sq() {
    "auto" === (0, sH.r)((0, sW.T)(), sF.Ay.getEnableAutoclipping())
        ? (0, sz.p)()
        : (0, sK.C)({ variant: "mode_picker", source: "nitro_home_perk_card" });
}
var sZ = i(757036),
    sJ = i(621488),
    sQ = i(70283),
    s$ = i(643056),
    s0 = i(470739),
    s1 = i(945810);
let s2 = (0, s1.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s3 = i(655752),
    s6 = i(764231),
    s7 = i(627380),
    s8 = i(30084),
    s5 = i(814014),
    s9 = i(714206);
let s4 =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    ne =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    nt =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function ni() {
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
        v = (0, si.A)({ analyticsLocations: R }),
        _ = (0, si.A)({ analyticsLocations: R, shouldOpenDisplayNameStyles: !0 }),
        y = (0, d.useCallback)(() => {
            (0, en.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        P =
            ((e = (0, g.bG)([D.default], () => D.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (i = (function (e) {
                let { location: t } = e;
                return s2.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (s = (0, s$.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, sn.$F)()),
            (a = (0, sn.Xb)()),
            (l = n?.status === sn.Wo.UPCOMING || t),
            (r = n?.status === sn.Wo.WITHHELD),
            (c = l || r),
            (u = (0, sa.N)(n?.id)),
            (x = (function () {
                let e = (0, sn.$F)(),
                    t = (0, s3.P)(),
                    i = (0, sn.Xb)();
                if (null == e || null == t || null == i || e.status === sn.Wo.WITHHELD) return null;
                let s = ev()(),
                    n = ev()(i),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / r));
            })()),
            (h = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion) && !c),
            (p = (0, s7.t)()),
            (f = (0, s3.P)()),
            (0, d.useMemo)(() => {
                let e,
                    l = null != f ? ey.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, s6.T)(tj.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === sn.Wo.UPCOMING
                              ? ey.intl.formatToPlainString(ey.t.a1eKDi, { days: p?.days ?? 0 })
                              : n.status === sn.Wo.WITHHELD
                                ? ((0, s6.T)(n.id, n.tenureReqNumMonths) ?? void 0)
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
                                  (0, s6.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != u ? (r = c || h ? u.standard : u.ambientLarge) : t && (r = s9),
                    {
                        id: it.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? ey.intl.string(n.nameUnformattedNitro) : t ? ey.intl.string(ey.t.tx9Fvw) : "",
                        pillText: ey.intl.string(ey.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: m()(s5.pq, { [s5.rX]: c, [s5.kE]: h }),
                        caption: null != a ? ey.intl.formatToPlainString(ey.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: x ?? void 0,
                        ctaText: ey.intl.string(ey.t.jVcuVY),
                        onCtaClick: () => {
                            i && s
                                ? (0, s0.openBadgeDirectoryModal)({ initialBadgeId: sQ.$.PREMIUM_TENURE })
                                : (0, s8.D)({ analyticsLocations: R });
                        },
                    }
                );
            }, [n, u, c, h, a, x, t, p, f, R, i, s])),
        { nitroOrbsRewardsCard: S, questOrbMultiplierCard: M } = sT(C ? sm.WHATS_NEW : null),
        O =
            ((N = (0, sZ.L)(tj.PremiumTypes.TIER_2)),
            (b = (0, ss.rX)()),
            (0, d.useMemo)(
                () =>
                    N && b
                        ? {
                              id: it.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: ey.intl.string(sJ.default["/cV3ka"]),
                              description: ey.intl.string(sJ.default.H523FI),
                              primaryAsset: (0, o.jsx)(i0.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [N, b],
            )),
        k = sS(R),
        U =
            ((E = (0, sV.H)("autoclips_ea:nitro_home_tile")),
            (T = "auto" === (0, sY.U)().value),
            (0, d.useMemo)(
                () =>
                    E
                        ? {
                              id: it.AUTOCLIPS_CARD_ID,
                              title: ey.intl.string(sX.default["5VA1HL"]),
                              description: ey.intl.string(sX.default.TvE3md),
                              primaryAsset: (0, o.jsx)(sB.f, { alt: "", ariaHidden: !0 }),
                              ctaText: ey.intl.string(T ? ey.t.RzWDqY : ey.t.uw9zI7),
                              ctaVariant: T ? "secondary" : void 0,
                              onCtaClick: sq,
                          }
                        : null,
                [E, T],
            )),
        L =
            ((I = (0, sG.A)("useHexagonCampaignWhatsNewPerkCard")),
            d.useMemo(
                () =>
                    I
                        ? {
                              id: it.HEXAGON_CAMPAIGN_CARD_ID,
                              pillText: ey.intl.string(ey.t.y2b7CA),
                              title: ey.intl.string(sw.default["fShp/D"]),
                              description: ey.intl.string(sw.default.MDycja),
                              primaryAsset: (0, o.jsx)(sM.r, { alt: "", ariaHidden: !0, width: 256 }),
                              ctaText: ey.intl.string(ey.t.uw9zI7),
                              onCtaClick: () => {
                                  ((0, sU.iM)({
                                      content: sO.uF.NITRO_HOME_PERK_CARD,
                                      questContentCTA: sk.Cy.OPEN_AD_PERK_MODAL,
                                  }),
                                      (0, sL.v6)());
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
                    id: it.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ey.intl.string(ey.t.OLtTrt),
                    description: ey.intl.string(ey.t["di/pXR"]),
                    onCtaClick: _,
                    ctaText: ey.intl.string(ey.t.jVcuVY),
                    primaryAsset: s4,
                },
                {
                    id: it.CLIENT_THEMES_CARD_ID,
                    title: ey.intl.string(ey.t.acc6h6),
                    description: ey.intl.formatToPlainString(ey.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: nt,
                    ctaText: ey.intl.string(ey.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sD.nf)(sD.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: it.PERMADECOS_CARD_ID,
                    title: ey.intl.string(ey.t.L14NZN),
                    description: ey.intl.string(ey.t.eCZkAI),
                    primaryAsset: (0, o.jsx)(i4, { alt: "", ariaHidden: !0 }),
                    ctaText: ey.intl.string(ey.t.jVcuVY),
                    onCtaClick: v,
                },
                {
                    id: it.CUSTOM_APP_ICONS_CARD_ID,
                    title: ey.intl.string(ey.t["GU+wqh"]),
                    description: ey.intl.string(ey.t["1uPk1Z"]),
                    primaryAsset: ne,
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
let ns = "/assets/1eb1b74667b4c0f0.svg",
    nn = "/assets/983b60e4fcaf973b.svg";
var na =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let nl = [
    { id: "bestof", label: () => ey.intl.string(ey.t.q1u7nQ) },
    { id: "appearance", label: () => ey.intl.string(ey.t.CUnZkZ) },
    { id: "upgrades", label: () => ey.intl.string(ey.t.KC5q8v) },
    { id: "vip", label: () => ey.intl.string(ey.t.DjEAcv) },
];
var nr = i(18290);
function nc(e) {
    return e.id;
}
function no(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, st.DP)(),
                t = (0, sn.Lh)(),
                i = (0, sa.N)(t)?.standard ?? null,
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
                u = (0, si.A)({ analyticsLocations: s }),
                m = (0, si.A)({ analyticsLocations: s, shouldOpenDisplayNameStyles: !0 }),
                x = ni({ shouldCountOrbsCardState: !1 }),
                g = (0, d.useMemo)(() => x.map((e) => e?.id), [x]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: p } = sT(sm.FAVORITES),
                f = sS(s),
                N = (0, d.useMemo)(
                    () => [
                        {
                            id: it.SERVER_BOOSTS_CARD_ID,
                            title: ey.intl.formatToPlainString(ey.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ey.intl.formatToPlainString(ey.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: a,
                            primaryAsset: (0, o.jsx)(iY, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != f ? { ...f, categories: ["bestof"] } : null,
                        {
                            id: it.PROFILES_CARD_ID,
                            title: ey.intl.string(ey.t.xDRab3),
                            description: ey.intl.string(ey.t.yn6fWA),
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, o.jsx)(iq, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: it.HD_VIDEO_CARD_ID,
                            title: ey.intl.string(ey.t["/mQ5gg"]),
                            description: ey.intl.string(ey.t["7WwAXh"]),
                            primaryAsset: (0, o.jsx)(iJ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: it.CLIENT_THEMES_CARD_ID,
                            title: ey.intl.string(ey.t.acc6h6),
                            description: ey.intl.formatToPlainString(ey.t.WQazjs, { themeCount: 20 }),
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: n,
                            primaryAsset: nt,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: it.MORE_EMOJIS_CARD_ID,
                            title: ey.intl.string(ey.t.D8vIDT),
                            description: ey.intl.string(ey.t.DRMecB),
                            primaryAsset: (0, o.jsx)(i$, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: it.LARGE_UPLOADS_CARD_ID,
                            title: ey.intl.string(ey.t.nL1WZV),
                            description: (0, ss.M6)({
                                legacyCopy: ey.intl.formatToPlainString(ey.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: ey.intl.formatToPlainString(ey.t.teOTfv, {
                                    maxFileSize: (0, er.EJ)(tj.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, o.jsx)(i0.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: it.CUSTOM_APP_ICONS_CARD_ID,
                            title: ey.intl.string(ey.t["GU+wqh"]),
                            description: ey.intl.string(ey.t["1uPk1Z"]),
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: ne,
                            categories: ["appearance"],
                        },
                        {
                            id: it.ENTRANCE_SOUNDS_CARD_ID,
                            title: ey.intl.string(ey.t.WJfCPi),
                            description: ey.intl.string(ey.t.liQKJR),
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: it.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ey.intl.string(ey.t.OLtTrt),
                            description: ey.intl.string(ey.t["di/pXR"]),
                            onCtaClick: m,
                            ctaText: ey.intl.string(ey.t.jVcuVY),
                            primaryAsset: s4,
                            categories: ["appearance"],
                        },
                        {
                            id: it.CUSTOM_SOUNDS_CARD_ID,
                            title: ey.intl.string(ey.t["Cu/oFd"]),
                            description: ey.intl.string(ey.t.czj2aa),
                            primaryAsset: (0, o.jsx)(i1, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: it.SPECIAL_STICKERS_CARD_ID,
                            title: ey.intl.string(ey.t.MQoVeb),
                            description: ey.intl.string(ey.t.HGCLZX),
                            primaryAsset: (0, o.jsx)("div", {
                                className: sE.Uc,
                                children: (0, o.jsx)(i2.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: it.SUPER_REACTIONS_CARD_ID,
                            title: ey.intl.string(ey.t.qERvAA),
                            description: ey.intl.string(ey.t.WkUWzx),
                            primaryAsset: (0, o.jsx)(i3, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: it.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ey.intl.string(ey.t.ssVDYQ),
                            description: ey.intl.string(ey.t.aUSRMa),
                            primaryAsset: (0, se.M)(e) ? ns : nn,
                            categories: ["upgrades"],
                        },
                        {
                            id: it.EARLY_ACCESS_CARD_ID,
                            title: ey.intl.string(ey.t["g/KRY6"]),
                            description: ey.intl.string(ey.t.JzAmJc),
                            primaryAsset: (0, o.jsx)(i6, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: it.BADGE_CARD_ID,
                            title: ey.intl.string(ey.t.Bn3CtB),
                            description: ey.intl.string(ey.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, o.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, o.jsx)(i8, { color: eq.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: it.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ey.intl.string(ey.t["MTD+7w"]),
                            description: ey.intl.string(ey.t.Bhs0s6),
                            ctaText: ey.intl.string(ey.t.dBJVnZ),
                            onCtaClick: r,
                            primaryAsset: (0, o.jsx)(i5, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != p ? { ...p, categories: ["vip"] } : null,
                        {
                            id: it.PERMADECOS_CARD_ID,
                            title: ey.intl.string(ey.t.L14NZN),
                            description: ey.intl.string(ey.t.eCZkAI),
                            primaryAsset: (0, o.jsx)(i4, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, p, f, n, a, l, r, c, u, m],
                );
            return (0, d.useMemo)(() => N.filter((e) => null != e && !g.includes(e.id)), [N, g]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [n, a] = (0, d.useState)(s?.categories[0] ?? na.BEST_OF_NITRO),
        l = nl.find((e) => e.id === n)?.label(),
        r = i.filter((e) => null != e && e.categories.includes(n));
    return (0, o.jsxs)("div", {
        className: nr.uW,
        children: [
            (0, o.jsx)(eF.D, { variant: "nitro-sm", children: ey.intl.string(ey.t["Uh3+CA"]) }),
            (0, o.jsx)(iV.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: nr.Lq,
                "aria-label": ey.intl.string(ey.t["Uh3+CA"]),
                children: nl.map((e) =>
                    (0, o.jsx)(iV.V.Item, { id: e.id, className: nr.IC, children: e.label() }, e.id),
                ),
            }),
            (0, o.jsx)(
                iW.A,
                {
                    "aria-label": ey.intl.formatToPlainString(ey.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: nr.jG,
                    items: r,
                    getItemKey: nc,
                    renderItem: (e, i) =>
                        (0, o.jsx)(tG.S, { ...e, glowing: t === e.id, containerClassName: nr.Ui, listItemProps: i }),
                },
                n,
            ),
        ],
    });
}
var nd = i(72979);
let nu = function (e) {
    let { className: t } = e,
        i = (0, st.DP)();
    return (0, o.jsx)("img", {
        className: m()(nd.D, t),
        src: (0, se.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var nm = i(684251);
let nx = function (e) {
    let { children: t } = e;
    return (0, o.jsxs)("div", {
        className: m()(nm.kL, nm.Gd, nm.Eg),
        children: [(0, o.jsx)(nu, {}), (0, o.jsx)(t6, {}), t],
    });
};
function ng(e) {
    let { glowingPerkId: t = null } = e,
        i = ni();
    return (0, o.jsx)(tK, {
        sectionClassName: tz.uW,
        heading: (0, o.jsx)(eF.D, { variant: "nitro-sm", className: tz.R_, children: ey.intl.string(ey.t.Aw5DRm) }),
        grid: (0, o.jsx)(o.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured,
                    n = t === e.id;
                return (0, o.jsx)(
                    tG.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === it.YOUTUBE_3PP_CARD_ID,
                        featured: s,
                        containerClassName: m()(tz.Nr, { [tz.Nq]: s }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function nh(e, t, i, s) {
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
var np = i(92737);
let nf = "/assets/cd2be35d285d4675.svg",
    nN = (e) => {
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
                let e = new URLSearchParams(i.search),
                    t = e.get("perk"),
                    s = e.get(np.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        nh(c ?? "", null != c, f, N);
        let [b, E] = d.useState(!1),
            T = (0, W.p)(),
            I = d.useRef(null),
            [C, R] = d.useState(!1),
            y = null != T && null != a && a.status === eN.Dmq.CANCELED,
            P = (0, z.iU)(tj.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !C && y,
            D = (0, g.bG)([F.A], () => (null != t ? F.A.getUserProfile(t) : null)),
            { analyticsLocations: M } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [U, L] = d.useState(!1);
        return null != D && (l || null != r)
            ? (0, o.jsxs)(w.Gt, {
                  className: m()(nm.xW, nm.Gd),
                  ref: s,
                  children: [
                      (0, o.jsx)(nx, {
                          children: (0, o.jsxs)(j.f5, {
                              value: M,
                              children: [
                                  (0, o.jsx)(G.L, {
                                      innerRef: I,
                                      onChange: (e) => R(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, o.jsx)(tR, {
                                          buttonVisibilityRef: I,
                                          className: nm.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, o.jsx)(tJ, {}),
                                  (0, o.jsx)(ng, { glowingPerkId: p }),
                                  (0, o.jsx)(iw, { glowingPerkId: p, glowingSectionId: u }),
                                  (0, o.jsx)(no, { glowingPerkId: p }),
                                  (0, o.jsx)(K.A, {
                                      className: nm.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eN.liQ.NITRO_HOME, section: eN.JJy.GIFT_BANNER },
                                  }),
                                  (0, o.jsx)("div", { className: nm.hz }),
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
                                      children: (0, o.jsx)("div", { ref: n, className: nm._Z }),
                                  }),
                                  (0, o.jsx)("img", {
                                      src: nf,
                                      className: nm.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ey.intl.string(ey.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      y &&
                          null != P &&
                          (0, o.jsx)(iF, {
                              isVisible: S && b,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, o.jsxs)("div", {
                  className: m()(nm.kL, nm.Lq, nm.TN, nm.Eg),
                  children: [(0, o.jsx)(t6, {}), (0, o.jsx)("div", { className: nm.S, children: (0, o.jsx)(h.y, {}) })],
              });
    };
var nA = i(589152),
    nj = i(851746),
    nb = i(727949),
    nE = i(926239);
let nT =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var nI = i(185062);
let nC = `${nT} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${nI.A} 3x`;
function nR(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iz.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: nT,
        srcSet: nC,
        className: (0, iz.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var nv = i(315629),
    n_ = i(783420),
    ny = i(204413),
    nP = i(572079),
    nS = i(824069),
    nD = i(785007),
    nM = i(947910);
function nO(e) {
    let { value: t, planRadioOptions: i, className: s, ...n } = e,
        a = i.map((e) => {
            let i = e.value === t;
            return {
                name: (0, o.jsxs)("div", {
                    className: nM.VH,
                    children: [
                        i &&
                            null != e.badgeText &&
                            (0, o.jsx)("div", {
                                className: nM.fQ,
                                children: (0, o.jsx)(ef.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, o.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nM.qU,
                            children: [
                                (0, o.jsxs)(q.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nM.NI,
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
                                    className: nM.br,
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
                                                className: nM.yD,
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
                radioBarClassName: m()(nM.tG, { [nM.uA]: i, [nM.hy]: i && e.useGradientSelectedBorder }),
            };
        });
    return (0, o.jsx)(nD.$d, {
        ...n,
        options: a,
        value: t,
        size: nD.r9.NOT_SET,
        className: m()(nM.ul, s),
        withTransparentBackground: !0,
    });
}
var nk = i(118751),
    nU = i(773669),
    nL = i(97352),
    nG = i(526292),
    nw = i(387278),
    nB = i(369827),
    nH = i(803496);
function nF(e) {
    let t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        i = (0, nB.L)(),
        s = t?.paymentSourceId ?? i,
        { priceOptions: n } = (0, nH.A)({
            activeSubscription: t,
            skuIDs: [(0, er.mH)(e)],
            paymentSourceId: s,
            isGift: !1,
        });
    return n;
}
function nV(e, t, i, s, n) {
    return t && i?.includes(e) === !0 && null != s && null != n && s !== n;
}
function nW(e) {
    let { expectedUsageInterval: t, usageInterval: i, discountDuration: s, regularPrice: n, discountedPrice: a } = e;
    return i !== t || null == n || null == a
        ? null
        : t === tj.Ff.YEAR
          ? ey.intl.format(ey.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : ey.intl.format(ey.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
}
var nz = i(614488);
function nK(e) {
    let { skuId: t, selectedPlanId: i, subscribeButtonProps: s } = e,
        n = null == i || !0 === s.disabled,
        a = null == i ? "secondary" : s.variant;
    return (0, o.jsx)(n_.A, {
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
function nY(e) {
    let { skuId: t, className: i, variant: s = "default" } = e,
        n = t === tj.pe.TIER_2,
        a = "settings" === s,
        l = (0, se.q)((0, st.Ay)()),
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
                n = tj.En[t],
                a = tj.zE[t],
                l = t === tj.pe.TIER_2,
                r = nF(t),
                c = (0, em.V)(),
                o = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, g.cf)(
                    [O.A],
                    () => {
                        let e = O.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, er.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tj.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tj.gD.PREMIUM_YEAR_TIER_0, tj.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                x = u === t,
                h = (0, eu.O)(),
                p = (0, nG.k5)(),
                f = (0, g.bG)([nU.default], () => nU.default.locale),
                N = (0, z.U9)(h, t),
                A = (0, z.N1)(n),
                j = (0, z.N1)(a),
                [b, E] = (0, g.yK)([nL.A], () => [nL.A.get(n), nL.A.get(a)], [n, a]),
                T = null != b ? (0, er.sS)(b, r) : null,
                I = null != E ? (0, er.sS)(E, r) : null,
                C =
                    N && h?.discount.amount != null && !p
                        ? ey.intl.formatToPlainString(ey.t.IAybsG, {
                              discount: (0, nk.l9)(f, Number(h.discount.amount) / 100),
                          })
                        : null,
                R = h?.discount?.planIds,
                v = nV(a, N, R, j, I),
                _ = nV(n, N, R, A, T),
                y = h?.discount.userUsageLimitInterval,
                P = h?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, nw.Cj)(E, !1, r),
                D = !_ || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== tj.pe.TIER_2 ? null : i && !s ? tj.En[t] : tj.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == i || (i === n && m) ? M : i,
                U = [
                    {
                        value: a,
                        primaryText: ey.intl.string(ey.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nW({
                                      expectedUsageInterval: tj.Ff.YEAR,
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
                            ? nW({
                                  expectedUsageInterval: tj.Ff.MONTH,
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
        { buttonText: j } = (0, nP.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, ny.$)({
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
                    className: nz.MY,
                    children: (0, o.jsx)(eF.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nz.ck,
                        children: n ? ey.intl.string(ey.t.lG6a5x) : ey.intl.string(ey.t["t9uG/o"]),
                    }),
                }),
                (0, o.jsx)(q.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nz.qT,
                    children: n
                        ? (0, o.jsx)(nE.ZP, {
                              featureSet: nE.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, o.jsx)(nE.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, o.jsx)(nS.K, {}),
            ],
        }),
        T = (0, o.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nz.Ux,
            children: [
                a ? (0, o.jsx)("div", { className: nz.zI, children: E }) : E,
                x
                    ? (0, o.jsx)("div", {
                          className: nz.qS,
                          role: "separator",
                          children: (0, o.jsx)(Z.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nz.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tj.WT.DAY:
                                          if (t % 7 == 0) return ey.intl.format(ey.t["1MYPH0"], { weeks: t / 7 });
                                          return ey.intl.format(ey.t.pYfIoO, { days: t });
                                      case tj.WT.MONTH:
                                          return ey.intl.format(ey.t["96hTLe"], { months: t });
                                      case tj.WT.YEAR:
                                          return ey.intl.format(ey.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(c.interval, c.intervalCount),
                          }),
                      })
                    : (0, o.jsx)("hr", { className: nz.yF }),
                (0, o.jsxs)("div", {
                    className: nz.qr,
                    children: [
                        (0, o.jsx)(nO, {
                            className: a ? nz.US : void 0,
                            planRadioOptions: h,
                            value: p ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, o.jsx)(nK, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        I = m()(nz.Nr, i, { [nz.Fw]: n });
    return n
        ? (0, o.jsxs)(nv.h, {
              color: "nitro-pink",
              className: I,
              children: [
                  !a &&
                      (0, o.jsx)("div", {
                          className: nz.kX,
                          "aria-hidden": !0,
                          children: (0, o.jsx)(nR, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, o.jsx)("div", { className: I, children: T });
}
function nX(e) {
    let { className: t } = e,
        i = (0, se.q)((0, st.Ay)()),
        s = nF(tj.pe.TIER_2),
        n = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eL.A)({ userId: n?.id, size: eM._3.SIZE_32, animateOnHover: !0 }),
        r = (0, g.bG)([nL.A], () => nL.A.get(tj.gD.PREMIUM_GROUP_MONTH)),
        c = ey.intl.string(ey.t["2pG5Ga"]),
        d = (0, o.jsx)(n_.A, {
            subscriptionTier: tj.pe.TIER_2,
            initialPlanId: tj.gD.PREMIUM_GROUP_MONTH,
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
        className: m()(nz.Nr, t),
        children: (0, o.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nz.Ux,
            children: [
                (0, o.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nz.MY,
                    children: [
                        (0, o.jsx)(eF.D, {
                            variant: "nitro-md",
                            color: i ? "text-strong" : "text-overlay-light",
                            className: nz.ck,
                            children: ey.intl.string(s_.default.eSKiXk),
                        }),
                        null != n &&
                            (0, o.jsxs)(q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nz.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, o.jsx)("div", {
                                        className: nz.uA,
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
                                        className: nz.VL,
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
                    className: nz.qT,
                    children: (0, o.jsx)(nE.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, o.jsx)("hr", { className: nz.yF }),
                (0, o.jsxs)("div", {
                    className: nz.qr,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nz.ec,
                            children: [
                                (0, o.jsx)(Z.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: ey.intl.string(s_.default.SvSwga),
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
function nq(e) {
    let { innerRef: t, className: i, variant: s = "default" } = e,
        n = "settings" === s,
        { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, nE.pw)(t),
        r = (0, sR.PA)(),
        c = !n && r,
        d = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        u = { [nz.iR]: !d && !n };
    return (0, o.jsx)(j.f5, {
        value: a,
        children: (0, o.jsxs)(q.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: m()(nz.oB, i, { [nz.W0]: n }),
            children: [
                (0, o.jsx)(eF.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nz.op,
                    children: ey.intl.string(ey.t.vLz3Zs),
                }),
                (0, o.jsxs)("div", {
                    ref: l,
                    className: m()(nz.kR, { [nz.BQ]: c }),
                    children: [
                        (0, o.jsx)(nY, { skuId: tj.pe.TIER_0, className: m()(nz.rz, u), variant: s }),
                        (0, o.jsx)(nY, { skuId: tj.pe.TIER_2, className: m()(nz.Rv, u), variant: s }),
                        c && (0, o.jsx)(nX, { className: m()(nz.zz, u) }),
                    ],
                }),
            ],
        }),
    });
}
var nZ = i(366010),
    nJ = i(303136);
let nQ = function (e) {
    let t,
        { className: i } = e,
        s = (0, e5.TM)(),
        n = (0, nZ.q)((0, st.Ay)());
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
                nJ.A,
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
var n$ =
        (((c = {}).HOME = "home"),
        (c.WHATS_NEW = "whatsNew"),
        (c.BEST_OF_NITRO = "bestOfNitro"),
        (c.PLANS = "plans"),
        (c.COMPARE = "compare"),
        c),
    n0 = i(352756);
let n1 = function (e) {
    let { isVisible: t, subscriptionTier: i, isEligibleForBogoPromotion: s, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e4.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eN.JJy.MARKETING_FLOATING_CTA };
    return (0, o.jsx)(e9.animated.div, {
        className: m()(n0.iE, { [n0.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, o.jsxs)("div", {
            className: n0.UD,
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
var n2 = i(573710);
let n3 = function () {
    let e = (0, e8.bG)([ee.Ay], () => ee.Ay.useReducedMotion);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)("div", {
                className: n2.BI,
                children: (0, o.jsx)(ts, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tt.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, o.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: n2.Q,
                    }),
                }),
            }),
            (0, o.jsx)(ta, {
                isMotionReduced: e,
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
            }),
        ],
    });
};
var n6 = i(989756);
function n7(e) {
    let { ref: t, ...i } = e,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, o.jsx)(j.f5, {
        value: s,
        children: (0, o.jsx)("div", {
            ref: t,
            className: n6.kL,
            children: (0, o.jsxs)("div", {
                className: n6.hQ,
                children: [
                    (0, o.jsx)(n3, {}),
                    (0, o.jsx)(eF.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: n6.RH,
                        children: ey.intl.string(ey.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
n7.displayName = "PremiumMarketingFooter";
var n8 = i(939249);
let n5 = function (e) {
    let { navBarSections: t, activeSectionId: i } = e,
        s = {
            [n$.HOME]: ey.intl.string(ey.t.uGRXjS),
            [n$.WHATS_NEW]: ey.intl.string(ey.t["mfcR/v"]),
            [n$.BEST_OF_NITRO]: ey.intl.string(ey.t.xQKkE8),
            [n$.PLANS]: ey.intl.string(ey.t.wyNMnm),
            [n$.COMPARE]: ey.intl.string(ey.t.pwD7If),
        },
        n = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, o.jsx)(t$.A, {
        className: t2.TQ,
        transparent: !0,
        children: (0, o.jsxs)("div", {
            className: t2.Wc,
            children: [
                (0, o.jsxs)("div", {
                    className: t2.wG,
                    children: [
                        (0, o.jsx)(J.NitroWheelIcon, { className: t2.nE, colorClass: t2.oG }),
                        (0, o.jsx)("div", {
                            className: t2.zc,
                            role: "tablist",
                            "aria-label": ey.intl.string(ey.t.O9MiXY),
                            children: a.map((e) => {
                                let t = i === e.id,
                                    n = s[e.id];
                                return (0, o.jsxs)(
                                    n8.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: t2.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, o.jsx)(Z.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, o.jsx)("div", { className: t2.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: t2.MQ,
                    children: [
                        null != n && (0, o.jsx)(t1.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, o.jsx)(eI.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var n9 = i(713271),
    n4 = i(704333),
    ae = i(414499),
    at = i(597770),
    ai = i(500060),
    as = i(866665),
    an = i(406860),
    aa = i(870975),
    al = i(698834);
function ar() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, an.A)({ boxType: is.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: n4.ServerGridIcon, text: ey.intl.string(ir.default.MUypiB) },
            { icon: ae.CloudIcon, text: ey.intl.string(ir.default.ec5Rdd) },
            { icon: at.GiftIcon, text: ey.intl.string(ir.default["9t2CzW"]), tooltip: ir.default.AyECej },
            { icon: ai.ScreenStreamIcon, text: ey.intl.string(ir.default.R7YJAY) },
        ];
    return (0, o.jsx)(G.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, o.jsx)("div", {
            ref: e,
            className: al.iE,
            children: (0, o.jsxs)("div", {
                className: al.Nr,
                children: [
                    (0, o.jsxs)("div", {
                        className: al.j,
                        children: [
                            (0, o.jsx)("div", { className: al._g }),
                            (0, o.jsx)("div", { className: al.$h }),
                            (0, o.jsx)("div", { className: al.Rv }),
                            (0, o.jsx)("div", { className: al.Lw }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: al.CT,
                        children: [
                            (0, o.jsxs)("div", {
                                className: al.Qs,
                                children: [
                                    (0, o.jsxs)("div", {
                                        children: [
                                            (0, o.jsx)(eF.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: al.R_,
                                                children: ey.intl.string(ir.default.rkt1aw),
                                            }),
                                            (0, o.jsxs)("div", {
                                                children: [
                                                    i.map((e) => {
                                                        let { icon: t, text: i, tooltip: s } = e;
                                                        return (0, o.jsxs)(
                                                            "div",
                                                            {
                                                                className: al.yf,
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
                                                                            className: al.Jn,
                                                                            children: (0, o.jsx)(as.m, {
                                                                                text: ey.intl.string(s),
                                                                                position: "top",
                                                                                children: (0, o.jsx)(
                                                                                    t5.CircleInformationIcon,
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
                                                        className: al.xF,
                                                        children: (0, o.jsx)(eC.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tj.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: al.WE,
                                        children: (0, o.jsx)(Z.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: ey.intl.format(ir.default.KDKdWi, { termsLink: (0, aa.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, o.jsx)("div", {
                                className: al.r1,
                                children: (0, o.jsx)("img", {
                                    className: al.wm,
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
var ac = i(886205),
    ao = i(65154),
    ad = i(805573),
    au = i(257920),
    am = i(382702),
    ax = i(763180);
function ag() {
    let { trackViewed: e, trackInteracted: t } = (0, ad.r)(
        tj.e.AUTOCLIPS_EA_NITRO_MARKETING_CARD_UPSELL,
        A.A.CLIPS_EA_NITRO_MARKETING_CARD,
    );
    return (
        d.useEffect(() => e(), [e]),
        (0, o.jsxs)("div", {
            className: am.Nr,
            children: [
                (0, o.jsxs)("div", {
                    className: am.pq,
                    children: [
                        (0, o.jsxs)("div", {
                            className: am.Z,
                            children: [
                                (0, o.jsx)("div", {
                                    children: (0, o.jsx)(ef.E, {
                                        type: "early_access",
                                        variant: "expressive",
                                        icon: J.NitroWheelIcon,
                                    }),
                                }),
                                (0, o.jsx)(eF.D, {
                                    variant: "heading-xxl/semibold",
                                    color: "text-strong",
                                    children: ey.intl.string(sX.default.MtIbFp),
                                }),
                                (0, o.jsx)(Z.E, {
                                    variant: "body-md/normal",
                                    color: "text-subtle",
                                    children: ey.intl.string(sX.default.hXM4Ae),
                                }),
                            ],
                        }),
                        (0, o.jsx)(Q.$, {
                            variant: "secondary",
                            size: "md",
                            icon: ao.CirclePlayIcon,
                            text: ey.intl.string(sX.default.wNHvBT),
                            onClick: function () {
                                (t("watch_video"), (0, au.z)("ClipsEarlyAccessCard"));
                            },
                        }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: am.LY,
                    children: (0, o.jsx)("img", { className: am.ot, src: ax.A, alt: "", "aria-hidden": !0 }),
                }),
            ],
        })
    );
}
var ah = i(734066),
    ap = i(750338),
    af = i(186961),
    aN = i(505051);
function aA(e) {
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
        className: m()(aN.boxBackdrop, t),
        children: [
            (0, o.jsx)(eF.D, {
                className: aN.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: s,
            }),
            null != r && (0, o.jsx)("div", { className: aN.highlightBento, children: r }),
            (0, o.jsx)("div", {
                className: aN.bentoBoxesGrid,
                children: i.flatMap((e, t) => {
                    let i;
                    switch (e.length) {
                        case 3:
                            i = af.A0.SMALL;
                            break;
                        case 2:
                            i = af.A0.MEDIUM;
                            break;
                        default:
                            i = af.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, o.jsx)(
                            ap.A,
                            { index: t + +!!l, ...e, size: i, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let aj = d.memo(function (e) {
        let t,
            i = (0, t7.b)("premium_marketing_bento"),
            s = (0, iy.mh)({ location: "premium_marketing_bento" }),
            { enabled: n } = (0, iN.vc)({ location: "premium_marketing_bento" }),
            { enabled: a } = ac.A.useConfig({ location: "premium_marketing_bento" }),
            l = i && !s && !(n && a),
            { whatsNewBoxes: r } = (0, af.Ay)(l),
            c = ((t = (0, ah.Vl)()), (0, sV.H)("autoclips_ea:nitro_marketing_card", !t));
        return (0, o.jsx)(aA, {
            boxLayout: r,
            title: ey.intl.string(ey.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento:
                c || l
                    ? (0, o.jsxs)(o.Fragment, { children: [c && (0, o.jsx)(ag, {}), l && (0, o.jsx)(ar, {})] })
                    : null,
            ...e,
        });
    }),
    ab = d.memo(function (e) {
        let { bestOfBoxes: t } = (0, af.Ay)();
        return (0, o.jsx)(aA, { boxLayout: t, title: ey.intl.string(ey.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    aE = (0, s1.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var aT = i(236834),
    aI = i(540504);
function aC(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eL.A)({ userId: t?.id, size: eM._3.SIZE_24, animateOnHover: !0 });
    return (0, o.jsx)("div", {
        className: aI.$6,
        children: (0, o.jsxs)("div", {
            className: aI.sc,
            children: [
                (0, o.jsx)("div", {
                    className: aI.kR,
                    children: (0, o.jsx)(eO.eu, { src: i, "aria-label": t.username, size: eM._3.SIZE_32, ...s }),
                }),
                (0, o.jsx)(eF.D, {
                    variant: "heading-xs/medium",
                    className: aI.FS,
                    color: "text-strong",
                    children: ey.intl.format(ey.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var aR = i(579245),
    av = i(369805);
let a_ = function (e) {
    let { isSettings: t = !1 } = e,
        i = (0, em.V)(),
        s = (0, av.A)(),
        n = !t && null != i && null != s,
        a = ed.R.useConfig({ location: "nitro_marketing_trial_badge" }, { autoTrackExposure: n });
    return null == s ? null : n && a ? (0, o.jsx)(eA, { text: s }) : (0, o.jsx)(eb, { text: s });
};
function ay() {
    let e = (0, g.bG)([nL.A], () => nL.A.getForSkuAndInterval((0, er.mH)(tj.pe.TIER_0), tj.WT.MONTH));
    return null != e ? (0, er.sS)(e) : "\u2026";
}
var aP = i(508556);
let aS = function (e) {
    let { containerVisibilityPercentage: t, variant: i = "default" } = e,
        s = "settings" === i,
        n = (0, e8.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        a = (0, e5.TM)();
    return (0, o.jsxs)("div", {
        "aria-hidden": !0,
        className: m()(aP.YU, { [aP.W0]: s }),
        children: [
            (0, o.jsx)(to, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: aP.wG,
                assetClassName: aP.lu,
                variant: i,
            }),
            (0, o.jsx)(ta, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: aP.nJ,
                carContainerClassName: aP.IN,
                hammerContainerClassName: aP.Gj,
                keyContainerClassName: aP.FV,
                starContainerClassName: aP.E1,
                boltAssetClassName: aP.j7,
                carAssetClassName: aP.or,
                hammerAssetClassName: aP.Wv,
                keyAssetClassName: aP.rs,
                starAssetClassName: aP.OY,
                animateStar: !s,
            }),
        ],
    });
};
var aD = i(14057);
let aM = d.memo(function (e) {
    let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: s, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        c = ay(),
        d = aE.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        u = (0, aT.A)(),
        x = null != u,
        { visibilityPercentageRef: h, visibilityPercentage: p } = eh(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = (0, nA.b)(),
        N = !x && f.length > 0,
        b = (0, ex.uF)(Y.oW.MARKETING_PAGE_BANNER),
        E = null != b,
        T = (0, nG.ar)() && !E,
        I = (0, eu.O)(),
        C = (null != I && tj.U4.includes(I.discountId)) || E;
    return (0, o.jsx)(j.f5, {
        value: r,
        children: (0, o.jsxs)("div", {
            ref: n,
            className: m()(aD.kL, t, { [aD.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, o.jsx)(nQ, { className: aD.kv }),
                (0, o.jsx)("div", {
                    ref: h,
                    children: (0, o.jsxs)("div", {
                        className: aD.hQ,
                        children: [
                            (0, o.jsx)(aS, { containerVisibilityPercentage: p, variant: a }),
                            T && (0, o.jsx)(a_, { isSettings: l }),
                            (0, o.jsx)("div", {
                                className: aD.s8,
                                children: (0, o.jsx)(eH.F, {
                                    forceLevel: 1,
                                    children: (0, o.jsx)(eF.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : aD.wx,
                                        children: ey.intl.string(ey.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, o.jsxs)("div", {
                                className: aD.rf,
                                children: [
                                    x &&
                                        (0, o.jsx)("div", {
                                            className: aD.eZ,
                                            children: (0, o.jsx)(aC, { referrer: u }),
                                        }),
                                    N &&
                                        (0, o.jsx)("div", {
                                            className: aD.Qn,
                                            children: (0, o.jsx)(aR.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, o.jsxs)("div", {
                                        className: T ? aD.es : aD.UJ,
                                        children: [
                                            (0, o.jsx)(eC.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!s,
                                                subscriptionTier: C && null == i ? tj.pe.NONE : i,
                                                buttonTextOverride: C ? ey.intl.string(ey.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, o.jsx)(eI.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: aD.iQ,
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
var aO = i(812537);
let ak = function (e) {
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
var aU = i(818348),
    aL = i(773188);
let aG = () => {
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
        R = null !== C && C !== tj.pe.TIER_2 ? tj.pe.TIER_2 : null,
        { analyticsLocations: y } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    d.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, sg.lk)(sb.rE.NITRO_HOME_MARKETING),
        S = P ? n9.N.ORB_MULTIPLIER : null,
        D = d.useMemo(() => {
            let t = new URLSearchParams(e.search).get(np.x);
            return "orbs" === t
                ? S
                : t === n9.N.THREE_P_PROMOTIONS
                  ? n9.N.THREE_P_PROMOTIONS
                  : t === n9.N.YOUTUBE
                    ? n9.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    nh(D ?? "", null != D);
    let { navBarSections: M, activeSectionId: U } = ak([n$.HOME, n$.WHATS_NEW, n$.BEST_OF_NITRO, n$.PLANS, n$.COMPARE]),
        { home: L, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = M,
        W = (0, o.jsxs)("div", {
            ref: i,
            className: m()(aL.kL, aL.Gd, aL.iI, { [aL.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(nQ, { className: aL.yH }),
                (0, o.jsx)(n5, { navBarSections: M, activeSectionId: U }),
                (0, o.jsxs)("div", {
                    className: aL.Qr,
                    children: [
                        (0, o.jsx)("div", {
                            className: aL.qY,
                            ref: L.ref,
                            children: (0, o.jsx)(G.L, {
                                innerRef: n,
                                onChange: (e) => u(e),
                                threshold: 0,
                                active: !0,
                                children: (0, o.jsx)(aM, { ref: n, subscriptionTier: R }),
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: aL.So,
                            ref: B.ref,
                            children: (0, o.jsx)(aj, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, o.jsx)("div", {
                            className: aL.KQ,
                            ref: H.ref,
                            children: (0, o.jsx)(ab, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, o.jsx)("div", {
                            className: aL.qc,
                            ref: F.ref,
                            children: (0, o.jsx)(G.L, {
                                innerRef: s,
                                onChange: (e) => p(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, o.jsx)(nq, { innerRef: s }),
                            }),
                        }),
                        (0, o.jsx)("div", { className: aL.aC, ref: V.ref, children: (0, o.jsx)(aO.A, {}) }),
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
                    children: (0, o.jsx)("div", { ref: a, className: aL._Z }),
                }),
                (0, o.jsx)(n7, { ref: l }),
                (0, o.jsx)(n1, { isVisible: !c && !h && b, subscriptionTier: R }),
                (0, o.jsx)(nQ, { className: aL.MF }),
            ],
        });
    return (0, o.jsx)(ep.N, {
        theme: aU.NJ.DARK,
        children: (e) => (0, o.jsx)(w.Gt, { className: m()(aL.XG, e), ref: t, children: W }),
    });
};
var aw = i(862482),
    aB = i(300349),
    aH = i(106512),
    aF = i(662367),
    aV = i(374403),
    aW = i(396375),
    az = i(900797),
    aK = i(847374),
    aY = i(614268);
function aX(e) {
    let { className: t } = e;
    return (0, o.jsx)("div", {
        className: m()(aY.i, t),
        children: (0, o.jsx)(ef.E, { type: "early_access", variant: "premium" }),
    });
}
var aq = i(536071);
let aZ = "/assets/5b4fec8511c3676a.svg",
    aJ = "/assets/0838bda6ecd20d91.svg";
function aQ(e, t, i) {
    return (0, se.M)(e) ? t : i;
}
var a$ = i(872461);
function a0(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, o.jsxs)(n8.D, {
        onClick: i,
        className: a$.customButton,
        children: [
            t ? ey.intl.string(ey.t.maZaN3) : ey.intl.string(ey.t["37C26f"]),
            t
                ? (0, o.jsx)(az.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: a$.arrow })
                : (0, o.jsx)(aK.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: a$.arrow }),
        ],
    });
}
function a1(e) {
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
        x = (0, o.jsx)("img", { src: n, alt: "", className: m()(a, a$.perksCardArt) }),
        g = "settings" === d;
    return (0, o.jsx)(j.f5, {
        value: u,
        children: (0, o.jsxs)("div", {
            className: m()(a$.perkCard, s, { [a$.settingsCard]: g }),
            children: [
                r ? (0, o.jsx)(aq.A, { className: a$.perkCardNewBadge }) : null,
                c ? (0, o.jsx)(aX, { className: a$.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, o.jsx)(q.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: a$.settingsArt,
                          children: x,
                      })
                    : x,
                (0, o.jsxs)("div", {
                    className: g ? a$.settingsText : void 0,
                    children: [
                        (0, o.jsxs)(eF.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: a$.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: a$.perkCardDescription,
                            children: "function" == typeof i ? i(u) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let a2 = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [s, n] = d.useState(!1),
        a = (function (e) {
            let { styles: t } = e,
                i = (0, st.Ay)(),
                s = (0, e8.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return er.Ay.canUsePremiumProfileCustomization(e);
                }),
                n = (0, er.EJ)(tj.PremiumTypes.TIER_2, { useSpace: !1 });
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
                    imageSource: aQ(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                    imageSource: aQ(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ey.intl.string(ey.t.Bv8Pfk),
                    description: ey.intl.string(ey.t.JMfaTU),
                    imageSource: aQ(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ey.intl.string(ey.t.Bv8Pfk),
                    description: ey.intl.string(ey.t.JMfaTU),
                    imageSource: aQ(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ey.intl.string(ey.t["lGcW+c"]),
                    description: ey.intl.string(ey.t["/fDyO+"]),
                    imageSource: aQ(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ey.intl.string(ey.t["1c+xwT"]),
                    description: ey.intl.string(ey.t.hJG8ZN),
                    imageSource: aQ(i, aJ, aZ),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ey.intl.string(ey.t.tzdIwI),
                    description: ey.intl.string(ey.t.hJG8ZN),
                    imageSource: aQ(i, aJ, aZ),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ey.intl.string(ey.t.tzdIwI),
                    description: ey.intl.string(ey.t.hJG8ZN),
                    imageSource: aQ(i, aJ, aZ),
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
                    imageSource: aQ(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: aQ(i, ns, nn),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: a$ }),
        l = (0, e8.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { analyticsLocations: r } = (0, j.Ay)();
    return (0, o.jsxs)("div", {
        className: m()(a$.perksContainer, t, {
            [a$.partiallyHidden]: i && !s,
            [a$.subscriberNitroHome]: i,
            [a$.reducedMotion]: l,
        }),
        children: [
            (0, o.jsx)(eF.D, {
                variant: "heading-xxl/semibold",
                className: a$.perksTitle,
                children: i ? ey.intl.string(ey.t.QX14gI) : ey.intl.string(ey.t.RGadQR),
            }),
            (0, o.jsx)("div", {
                className: m()(a$.perkCardContainer, { [a$.perkCardContainerExpanded]: s }),
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
                    return null != t && (0, o.jsx)(a1, { ...t }, e);
                }),
            }),
            i &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)("div", {
                            className: m()({ [a$.sizeGizmo]: !s, [a$.sizeGizmoExpanded]: s }),
                            children: (0, o.jsx)(a0, {
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
                        (0, o.jsx)("div", { className: m()(a$.cover, { [a$.hidden]: s }) }),
                    ],
                }),
        ],
    });
};
var a3 = i(615939);
let a6 = d.memo(function (e) {
    let { className: t } = e,
        i = [
            {
                id: it.MORE_EMOJIS_CARD_ID,
                title: ey.intl.string(ey.t["R2IV/Q"]),
                description: ey.intl.string(ey.t.DRMecB),
                imageSource: iQ.A,
            },
            {
                id: it.HD_VIDEO_CARD_ID,
                title: ey.intl.string(ey.t["/mQ5gg"]),
                description: ey.intl.string(ey.t["7WwAXh"]),
                imageSource: iZ.A,
            },
            {
                id: it.LARGE_UPLOADS_CARD_ID,
                title: ey.intl.string(ey.t.nL1WZV),
                description: (0, ss.M6)({
                    legacyCopy: ey.intl.formatToPlainString(ey.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: ey.intl.formatToPlainString(ey.t.teOTfv, {
                        maxFileSize: (0, er.EJ)(tj.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: a3.A,
            },
            {
                id: it.PROFILES_CARD_ID,
                title: ey.intl.string(ey.t.KcyDwF),
                description: ey.intl.string(ey.t.Mt3U1W),
                imageSource: iX,
            },
        ];
    return (0, o.jsxs)(q.B, {
        gap: 16,
        className: m()(a$.settingsPerks, t),
        children: [
            (0, o.jsx)(eF.D, { variant: "heading-xl/semibold", children: ey.intl.string(ey.t.q1u7nQ) }),
            (0, o.jsx)(eH.F, {
                children: (0, o.jsx)("div", {
                    className: a$.settingsGrid,
                    children: i.map((e) => (0, o.jsx)(a1, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var a7 = i(695366),
    a8 = i(370049);
let a5 = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nG.ar)();
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
    let d = (null != r ? er.Ay.getSkuIdForPlan(r.planId) : null) === tj.pe.TIER_1;
    return (
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, o.jsxs)(t9.Z, {
            className: m()(a8.kL, n, { [a8.He]: l }),
            type: t9.Z.Types.CUSTOM,
            children: [
                (0, o.jsx)(a7.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: m()(a8.Kk, { [a8.Pt]: l }),
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
var a9 = i(978836);
let a4 = function (e) {
    let { lifted: t = !1 } = e;
    return (0, o.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: m()(a9.zr, { [a9.N]: t }),
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
                        (0, o.jsx)("stop", { className: a9.eq }),
                        (0, o.jsx)("stop", { offset: "0.339235", className: a9.l_ }),
                        (0, o.jsx)("stop", { offset: "0.492065", className: a9.sM }),
                        (0, o.jsx)("stop", { offset: "0.823236", className: a9.zi }),
                        (0, o.jsx)("stop", { offset: "0.899558", className: a9.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var le = i(194509),
    lt = i(317587);
let li = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, e4.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eN.JJy.MARKETING_FLOATING_CTA },
        r = (0, st.Ay)(),
        c = (0, nZ.M)(r);
    return (0, o.jsx)(e9.animated.div, {
        className: m()(lt.iE, { [lt.H8]: s, [lt.q4]: !t }),
        style: a,
        children: (0, o.jsxs)("div", {
            className: s ? lt.zW : lt.iJ,
            children: [
                (0, o.jsx)(aW.A, {
                    color: c ? aw.XD.BRAND_INVERTED : void 0,
                    className: m()(lt.x6, { [lt.Ph]: c }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: c ? void 0 : lt.PJ,
                }),
                (0, o.jsx)(le.A, { className: lt.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var ls = i(386564);
function ln(e) {
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
            ? (0, o.jsx)(aW.A, {
                  color: l ? aw.XD.BRAND_INVERTED : void 0,
                  className: m()(ls.x6, ls.Ph, n, { [ls.Sq]: t && a, [ls.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : ls.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, o.jsx)(aW.A, {
                  color: l || !a ? aw.XD.BRAND_INVERTED : void 0,
                  className: m()(ls.x6, ls.Ph, n, { [ls.Sq]: t && a, [ls.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        d = t && a ? null : (0, o.jsx)(le.A, { className: m()(ls.x6, n), color: a ? void 0 : aw.XD.WHITE });
    return (0, o.jsxs)("div", { className: m()(ls.UD, s), children: [c, " ", d] });
}
function la() {
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(aq.p, { className: ls.zd }),
            (0, o.jsx)(aq.p, { className: ls.G }),
            (0, o.jsx)(aq.p, { className: ls.zy }),
            (0, o.jsx)(aq.p, { className: ls.GX }),
        ],
    });
}
function ll(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = ay();
    return (0, o.jsx)(Z.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: m()(ls.h_, { [ls.If]: i, [ls.jn]: s }),
        children: ey.intl.format(ey.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let lr = function (e) {
    let { className: t, buttonClassName: i, subscriptionTier: s, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ec.QQ)(),
        c = (0, nG.ar)(),
        d = (0, nA.b)().length > 0,
        u = ey.intl.string(ey.t.YCZldK);
    return (0, o.jsx)(j.f5, {
        value: l,
        children: (0, o.jsxs)("div", {
            ref: a,
            className: m()(ls.kL, t, { [ls.V1]: !c, [ls.Q4]: !c && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, o.jsxs)("div", {
                    className: c ? ls.I6 : ls.G1,
                    children: [
                        (0, o.jsx)(eH.F, {
                            forceLevel: 1,
                            children: (0, o.jsx)(eF.D, {
                                variant: c ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: u,
                            }),
                        }),
                        d
                            ? (0, o.jsx)("div", {
                                  className: ls.DF,
                                  children: (0, o.jsx)(aR.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, o.jsx)(ll, {}),
                        r
                            ? (0, o.jsx)("div", {
                                  className: ls.UD,
                                  children: (0, o.jsx)(le.A, { className: m()(ls.x6, i), color: aw.XD.WHITE }),
                              })
                            : (0, o.jsx)(ln, {
                                  subscriptionTier: s,
                                  inOfferExperience: c,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        d && (0, o.jsx)(ll, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, o.jsx)(la, {}),
            ],
        }),
    });
};
var lc = i(403227),
    lo = i(367740),
    ld = i(377770);
function lu(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, o.jsx)(a4, { lifted: t }) : null;
}
let lm = () => {
        let { enabled: e } = aB.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, _.P)(v);
        let t = d.useRef(null),
            i = d.useRef(null),
            s = d.useRef(null),
            n = (0, st.Ay)(),
            a = (0, se.M)(n),
            [l, r] = d.useState(!1),
            [c, u] = d.useState(!1),
            [x, h] = d.useState(!1),
            p = !l && !c,
            [f, N] = d.useState(!1),
            b = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            E = null != b ? (0, er.EL)(b) : null,
            T = null != E ? er.Ay.getSkuIdForPlan(E.planId) : null,
            I = null !== T && T !== tj.pe.TIER_2 ? tj.pe.TIER_2 : null,
            C = (0, em.V)(),
            R = C?.subscriptionTrial?.skuId,
            y = (0, nG.ar)(),
            P = !e && y,
            S = (0, g.bG)([tO.A], () => {
                let e = tO.A.getMarketingComponentBySurface(Y.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e ? null : e.surface;
            }),
            D = (0, aV.Q)(),
            { analyticsLocations: M } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        d.useEffect(() => {
            N(!0);
        }, []);
        let U = e
            ? (0, o.jsx)("div", {
                  className: ld.OE,
                  children: (0, o.jsx)(G.L, {
                      innerRef: t,
                      onChange: u,
                      threshold: 0.1,
                      active: !0,
                      children: (0, o.jsx)(nq, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, o.jsx)("div", {
                  className: ld.dY,
                  children: (0, o.jsx)(G.L, {
                      innerRef: t,
                      onChange: (e) => u(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, o.jsx)(nE.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, o.jsx)(aW.A, {
                              showIcon: !1,
                              subscriptionTier: tj.pe.TIER_0,
                              className: lo.Ph,
                              look: aw.pR.OUTLINED,
                              color: aw.XD.WHITE,
                              buttonShineClassName: lo.Qr,
                          }),
                          tier2CTAButton:
                              R === tj.pe.TIER_0
                                  ? (0, o.jsx)(aW.A, {
                                        showIcon: !1,
                                        subscriptionTier: tj.pe.TIER_2,
                                        className: lo.Ph,
                                        look: aw.pR.OUTLINED,
                                        color: aw.XD.WHITE,
                                        buttonShineClassName: lo.Qr,
                                    })
                                  : (0, o.jsx)(aW.A, {
                                        color: aw.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tj.pe.TIER_2,
                                        className: lo.Ph,
                                        textOptions: { textClassName: lo.Ac },
                                        buttonShineClassName: lo.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, o.jsxs)("div", {
            className: m()(ld.kL, { [ld.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(a5, {
                    premiumSubscription: b,
                    textColor: e ? "text-default" : void 0,
                    className: m()(ld.R3, { [ld.aZ]: y }),
                }),
                P &&
                    (0, o.jsxs)("div", {
                        className: ld.n1,
                        children: [
                            (0, o.jsx)(lu, { inOfferExperience: y }),
                            (0, o.jsx)(t1.l, {
                                className: ld.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, o.jsxs)("div", {
                    className: m()({ [ld.V1]: !P }),
                    children: [
                        null != S && (0, o.jsx)(aH.m, { className: ld.w$, config: S }),
                        (0, o.jsxs)("div", {
                            className: ld.iS,
                            children: [
                                !P &&
                                    (0, o.jsx)(t1.l, {
                                        className: ld.ij,
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
                                        ? (0, o.jsx)(aM, { ref: i, subscriptionTier: I, variant: "settings" })
                                        : (0, o.jsx)(lr, {
                                              ref: i,
                                              subscriptionTier: I,
                                              className: m()({ [ld.p7]: y, [ld.Pw]: y, [ld.Cv]: null != b }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, o.jsx)("div", { className: ld.Ol, children: (0, o.jsx)(aF.I, { component: D }) }),
                U,
                e ? (0, o.jsx)(a6, { className: ld.OE }) : (0, o.jsx)(a2, { className: ld.B_ }),
                (0, o.jsx)("div", {
                    className: ld.aC,
                    children: e
                        ? (0, o.jsx)(aO.A, { variant: "settings" })
                        : (0, o.jsx)(lc.A, { className: ld.JQ, hideCTAs: !0 }),
                }),
                (0, o.jsx)("div", { className: ld.hz }),
                e
                    ? (0, o.jsx)(n1, { isVisible: p && f, subscriptionTier: I, variant: "settings" })
                    : (0, o.jsx)(li, { isVisible: p && f, subscriptionTier: I, isApplicationHome: !1 }),
                (0, o.jsx)(G.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !x &&
                            (k.default.track(eN.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            h(!0));
                    },
                    children: (0, o.jsx)("div", { ref: s, className: ld._Z }),
                }),
                (0, o.jsx)("img", {
                    src: nf,
                    className: ld.Kw,
                    width: 112,
                    height: 85,
                    alt: ey.intl.string(ey.t.X4IxWL),
                }),
            ],
        });
    },
    lx = function (e) {
        let { entrypoint: t } = e,
            i = (0, em.V)(),
            s = (0, eu.O)(),
            n = (0, nb.NF)({ trialOffer: i }),
            a = (0, nb.Tp)(),
            l = (0, g.bG)([nj.A], () => nj.A.getReminderStateId());
        switch (
            (d.useEffect(() => {
                (!0 === n && (0, nb.QG)(), !0 === a && (0, nb.ne)(l), (null != i || null != s) && (0, L.u1)(i, s));
            }, [i, s, n, a, l]),
            t)
        ) {
            case tj.tU.UserSettings:
                return (0, o.jsx)(lm, {});
            case tj.tU.ApplicationStoreHome:
                return (0, o.jsx)(aG, {});
            default:
                return null;
        }
    };
var lg = i(531296);
let lh = function (e) {
    let { entrypoint: t = tj.tU.UserSettings } = e;
    (0, _.P)(v);
    let i = (0, E.Hp)(),
        { sourceAnalyticsLocations: s, analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        a = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        l = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        r = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        c = r?.id,
        u = (0, em.V)(),
        C = (0, eu.O)(),
        R = (0, T.Y)(tj.T7),
        [G, w] = d.useState(!0),
        B = d.useRef(0),
        H = (0, U.YE)(r, tj.PremiumTypes.TIER_2);
    ((0, nA.b)(),
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
            let t = { nitro_basic: tj.pe.TIER_0, nitro: tj.pe.TIER_2 },
                i = Object.hasOwn(t, e) ? t[e] : void 0;
            null != i &&
                ((V.current = !0),
                (0, P.bG)(eN.BVt.APPLICATION_STORE),
                (0, y.A)({ subscriptionTier: i, analyticsLocations: n }));
        }, [W, F.search, n]));
    let Y = (0, g.bG)([S.A], () => S.A.enabled),
        X = t === tj.tU.ApplicationStoreHome,
        q = Y
            ? (0, o.jsx)(f.A, {})
            : i
              ? (0, o.jsx)(I.uK, {})
              : X && H
                ? (0, o.jsx)(j.f5, { value: n, children: (0, o.jsx)(nN, { userId: c }) })
                : z
                  ? null
                  : (0, o.jsx)("div", { className: m()(lg.kL, lg.Lq), children: (0, o.jsx)(h.y, {}) });
    return null != q
        ? !Y && !i && X && H
            ? q
            : (0, o.jsxs)(o.Fragment, { children: [X && (0, o.jsx)(N.A, {}), q] })
        : (0, o.jsx)(j.f5, { value: n, children: (0, o.jsx)(lx, { entrypoint: t }) });
};
