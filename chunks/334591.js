s.d(t, { A: () => aj }), s(323874), s(14289), s(35956);
var i,
    n,
    a,
    r,
    l,
    c = s(627968),
    o = s(64700),
    d = s(503698),
    u = s.n(d),
    m = s(873263),
    g = s(17928),
    x = s(289873),
    f = s(228366),
    p = s(73825),
    h = s(974544),
    N = s(107834),
    A = s(793574),
    C = s(688810),
    E = s(277984),
    j = s(86379),
    b = s(160946),
    R = s(545075),
    _ = s(840251),
    I = s(688151);
let T = new _.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var v = s(611924),
    P = s(532794),
    S = s(976860),
    y = s(351906),
    D = s(287809),
    M = s(295405),
    O = s(166403),
    L = s(174459),
    k = s(474090),
    U = s(881489),
    G = s(945960),
    w = s(945810);
let H = (0, w.mj)({
    name: "2026-05-nitro-home-header",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "treatment_a" },
        2: { treatment: "treatment_b" },
        3: { treatment: "treatment_c" },
    },
});
function F(e) {
    let t = H.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
s(321073);
var B = s(554146),
    V = s(269115),
    z = s(689175),
    W = s(131607),
    K = s(961250),
    X = s(366505),
    Y = s(321191),
    Q = s(903209),
    Z = s(927813),
    q = s(107857);
let J = (0, w.mj)({
    kind: "user",
    name: "2026-07-nitro-home-header-followup",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function $(e) {
    let { enabled: t } = J.useConfig({ location: e });
    return t;
}
var ee = s(131168),
    et = s(482589),
    es = s(410516),
    ei = s(183812),
    en = s(661531),
    ea = s(717421),
    er = s(331322),
    el = s(297264),
    ec = s(834730),
    eo = s(821609),
    ed = s(403581),
    eu = s(815021),
    em = s(576243),
    eg = s(49999),
    ex = s(375708),
    ef = s(33125);
function ep(e) {
    let { premiumSubscription: t, content: s, markAsDismissed: i } = e,
        { analyticsLocations: n } = (0, C.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        a = (0, ea.z)({
            from: { transform: "translateY(64px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: ef.iE,
        style: a,
        children: (0, c.jsxs)("div", {
            className: ef.iJ,
            children: [
                (0, c.jsx)(em.A, { size: 64, iconSize: 40, color: en.A.colors.WHITE }),
                (0, c.jsxs)("div", {
                    className: ef.qX,
                    children: [
                        (0, c.jsxs)(er.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: ef.iQ,
                            children: [
                                (0, c.jsx)(el.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: s.title,
                                }),
                                (0, c.jsx)(ec.E, { variant: "text-sm/medium", color: "text-muted", children: s.body }),
                            ],
                        }),
                        (0, c.jsx)(eo.$, {
                            variant: "expressive",
                            icon: ed.t,
                            size: "md",
                            text: s.cta,
                            onClick: function () {
                                i(eg.i.TAKE_ACTION),
                                    (0, P.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: n });
                            },
                        }),
                    ],
                }),
                (0, c.jsx)(eu.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ex.intl.string(ex.t.WAI6xu),
                    onClick: () => i(eg.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var eh = s(962008),
    eN = s(315629),
    eA = s(65470),
    eC = s(871261);
let eE = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, C.Ay)(s);
    return (0, c.jsx)(C.f5, {
        value: n,
        children: (0, c.jsxs)(eN.h, {
            className: u()(eC.kL, eC.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: eC.FS,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: "heading-xxl/bold",
                            className: eC.R_,
                            children: ex.intl.string(ex.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(ec.E, { variant: "text-md/medium", children: ex.intl.string(ex.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: eC.SB,
                            children: (0, c.jsx)(eA.A, {
                                buttonTextOverride: ex.intl.string(ex.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eC._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var ej = s(877624);
let eb =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eR(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: eb,
        srcSet: `${eb} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var e_ = s(502572),
    eI = s(192308),
    eT = s(775602),
    ev = s(366999),
    eP = s(531260),
    eS = s(780964),
    ey = s(766075),
    eD = s(786300),
    eM = s(975571),
    eO = s(428262),
    eL = s(960851),
    ek = s(89366),
    eU = s(422936),
    eG = s(732280),
    ew = s(549996),
    eH = s(172218);
function eF() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eH.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eB = s(949804);
let eV = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eB.i,
        children: (0, c.jsx)(ec.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var ez = s(371764),
    eW = s(103411),
    eK = s(778712),
    eX = s(97808),
    eY = s(590251),
    eQ = s(144165),
    eZ = s(854627),
    eq = s(427262),
    eJ = s(851746),
    e$ = s(326084),
    e0 = s(664654),
    e1 = s(652215);
function e2() {
    var e, t, s;
    let { referralSentUsers: i } = (0, e0.J)(),
        n = (0, g.bG)([eJ.A], () => eJ.A.getRecipientStatus()),
        a = (0, g.bG)([eJ.A], () => eJ.A.getHasEligibleFriends()),
        r = n.size === e0.Z,
        l =
            ((e = !1 !== a),
            (t = i.length),
            (s = n.size === e0.Z && [...n.values()].every((e) => e === e$.aK.REDEEMED)),
            e
                ? t === e0.Z
                    ? s
                        ? ex.intl.format(ex.t["1aEjsH"], {
                              helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM),
                          })
                        : ex.intl.format(ex.t["+u3AOO"], {
                              helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM),
                          })
                    : ex.intl.format(ex.t["omMr+V"], { helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM) })
                : ex.intl.format(ex.t["zWhX/Q"], { helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: n.size, hasEligibleFriends: a, allSent: r, bodyText: l };
}
var e6 = s(212737),
    e3 = s(901532);
function e7(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    L.default.track(e1.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, eI.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        });
}
function e9(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t.id, size: eK._3.SIZE_24 });
    return (0, c.jsx)(
        eX.eu,
        { className: e3.bj, src: s, "aria-label": (0, eq.mG)(t), size: eK._3.SIZE_24, ...i },
        t.id,
    );
}
function e5(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e3.p, children: t });
}
function e8(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e3.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < e0.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e9, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e5, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function e4(e) {
    let { nReferralsSent: t, imageSize: s = 93, backgroundClassName: i, ringClassName: n } = e;
    return (0, c.jsx)(eY.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e3.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e3.e0,
        overlayClassName: t === e0.Z ? e3.ys : void 0,
        children: (0, c.jsx)(eQ._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: s,
            width: s,
            zoomable: !1,
        }),
    });
}
function te(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = e2();
    return (0, c.jsxs)("div", {
        className: u()(e3.kL, t),
        children: [
            (0, c.jsx)("div", { className: e3.G3, children: (0, c.jsx)(e4, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: e3.IH,
                children: [
                    (0, c.jsx)(e8, { referralSentUsers: s, className: e3.GV }),
                    (0, c.jsxs)("div", {
                        className: e3.n4,
                        children: [
                            (0, c.jsx)(el.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ex.intl.string(ex.t.USo4s7),
                            }),
                            (0, c.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
                        ],
                    }),
                    (0, c.jsx)(eo.$, {
                        variant: "primary",
                        disabled: !1 === n || !0 === a,
                        text: ex.intl.string(ex.t.Lm2nFc),
                        onClick: () =>
                            e7({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var tt = s(792656),
    ts = s(989349),
    ti = s.n(ts),
    tn = s(496431),
    ta = s(499449);
let tr = function (e) {
    let { expiresAt: t, className: s } = e,
        i = (0, tn.A)(ti()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: n, hours: a, minutes: r, seconds: l } = i,
        o = [
            { unitValue: n, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: l, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(ta.Xl, s),
        children: [
            (0, c.jsx)(ec.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ex.intl.string(ex.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: ta.$R,
                children: o.map((e, t) =>
                    (function (e, t) {
                        let s,
                            [i, n] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: ta.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: ta.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: ta.B2,
                                                        children: (0, c.jsx)(ec.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: ta.B2,
                                                        children: (0, c.jsx)(ec.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(ec.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return ex.intl.string(ex.t.ixASa2);
                                                        case "hours":
                                                            return ex.intl.string(ex.t["8sNvNn"]);
                                                        case "minutes":
                                                            return ex.intl.string(ex.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return ex.intl.string(ex.t.JhaiLW);
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
                                    (0, c.jsx)(ec.E, {
                                        className: ta.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === o.length - 1),
                ),
            }),
        ],
    });
};
var tl = s(473702),
    tc = s(609425),
    to = s(660184),
    td = s(16716);
function tu() {
    let e = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tc.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eZ.A)({ userId: e?.id, size: eK._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eq.mG)(e);
    return (0, c.jsxs)("div", {
        className: td.kL,
        children: [
            (0, c.jsx)("div", {
                className: td.my,
                children: (0, c.jsx)(eX.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eK._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: td.QC, children: (0, c.jsx)(to.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tm = s(707554),
    tg = s(155199);
let tx = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, children: n } = e;
    return (0, c.jsx)(tm.F, {
        forceLevel: 1,
        children: (0, c.jsx)(el.D, {
            className: u()(tg.w, t, i && tg.n),
            variant: "display-md",
            color: s,
            children: n,
        }),
    });
};
var tf = s(728277);
function tp(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = e2();
    return (0, c.jsxs)("div", {
        className: u()(tf.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tf.G3,
                children: (0, c.jsx)(e4, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tf.HP,
                    ringClassName: tf.pZ,
                }),
            }),
            (0, c.jsxs)("div", {
                className: tf.IH,
                children: [
                    (0, c.jsxs)("div", {
                        className: tf.n4,
                        children: [
                            (0, c.jsx)(el.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ex.intl.string(ex.t.USo4s7),
                            }),
                            (0, c.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
                        ],
                    }),
                    (0, c.jsx)(e8, { referralSentUsers: s, className: tf.t7 }),
                ],
            }),
            (0, c.jsx)(eo.$, {
                variant: "primary",
                disabled: !1 === n || !0 === a,
                text: ex.intl.string(ex.t.Lm2nFc),
                onClick: () =>
                    e7({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var th = s(702841),
    tN = s(676279),
    tA = s(396583),
    tC = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tE = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tj = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: s,
            yAxisAnimationData: i,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: r = !1,
            animationSpeedScale: l = 1,
            children: d,
        } = e,
        u = (0, ea.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * l }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [g, x] = (0, o.useState)(1),
        f = (0, ea.z)(
            null != s
                ? {
                      from: { scale: g > 0 ? s.startScale : s.endScale },
                      to: { scale: g > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * l },
                      onRest: () => x((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [p, h] = (0, o.useState)(1),
        N = (0, ea.z)(
            null != t
                ? {
                      from: { blur: p > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: p > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * l },
                      onRest: () => h((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, o.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * l), [l]),
        [C, E] = (0, o.useState)(0),
        [j, b] = (0, o.useState)(1),
        R = (0, ea.z)({ xOffset: C, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tA.A)(() => {
        E(j * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e);
    }, A),
    r)
        ? d
        : (0, c.jsx)(ei.animated.div, {
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
                  translateX: a ? R.xOffset.to((e) => `${e}px`) : 0,
                  scale: f.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tb = s(181195);
let tR = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: s,
        boltContainerClassName: i,
        carContainerClassName: n,
        hammerContainerClassName: a,
        keyContainerClassName: r,
        starContainerClassName: l,
        boltAssetClassName: o,
        carAssetClassName: d,
        hammerAssetClassName: m,
        keyAssetClassName: g,
        starAssetClassName: x,
        animationSpeedScale: f = 1,
        blurScale: p = 1,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(tb.nJ, i),
                    children: (0, c.jsx)(tj, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tC.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tE.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: o,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, c.jsx)("div", {
                    className: u()(tb.IN, n),
                    children: (0, c.jsx)(tj, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tC.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tE.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, c.jsx)("div", {
                    className: u()(tb.Gj, a),
                    children: (0, c.jsx)(tj, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tC.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tE.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, c.jsx)("div", {
                    className: u()(tb.FV, r),
                    children: (0, c.jsx)(tj, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tC.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tE.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, c.jsx)("div", {
                    className: u()(tb.E1, l),
                    children: (0, c.jsx)(tj, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tC.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tE.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
var t_ = s(607470);
let tI =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tT = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: n,
            assetClassName: a,
            animationSpeedScale: r = 1,
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
                  children: (0, c.jsx)(tj, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tC.SINE },
                      parallaxAnimationData: {
                          pathDirection: tE.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: r,
                      children: t
                          ? (0, c.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, c.jsx)(
                                t_.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tI }),
                                },
                                tI,
                            ),
                  }),
              });
    },
    tv = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: s,
                flyingWumpusAssetClassName: i,
                boltContainerClassName: n,
                carContainerClassName: a,
                hammerContainerClassName: r,
                keyContainerClassName: l,
                starContainerClassName: o,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: g,
                starAssetClassName: x,
                animationSpeedScale: f = 1,
            } = e,
            p = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
            h = (0, tN.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tT, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, c.jsx)(tR, {
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: n,
                    carContainerClassName: a,
                    hammerContainerClassName: r,
                    keyContainerClassName: l,
                    starContainerClassName: o,
                    boltAssetClassName: d,
                    carAssetClassName: u,
                    hammerAssetClassName: m,
                    keyAssetClassName: g,
                    starAssetClassName: x,
                    animationSpeedScale: f,
                }),
            ],
        });
    };
var tP = s(776540);
let tS = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tv, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tP.wG, s && tP.Vx),
        flyingWumpusAssetClassName: u()(tP.lu, s && tP.ov),
        boltContainerClassName: u()(tP.nJ, s && tP.Wc),
        hammerContainerClassName: u()(tP.Gj, s && tP.XA),
        keyContainerClassName: u()(tP.FV, s && tP.oZ),
        starContainerClassName: u()(tP.E1, s && tP.LN),
        boltAssetClassName: u()(tP.j7, s && tP.QN),
        hammerAssetClassName: u()(tP.Wv, s && tP.B9),
        keyAssetClassName: u()(tP.rs, s && tP.I1),
        starAssetClassName: u()(tP.OY, s && tP.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var ty = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tD = s(884888);
let tM = function (e) {
    let t,
        s,
        {
            className: i,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: r,
            shouldShowReferralProgressBar: l,
            marketingBanner: o,
            heroButtons: d,
        } = e,
        { visibilityPercentageRef: m, visibilityPercentage: x } = eF(!(0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion)),
        f =
            ((t = { [ty.MORNING]: ex.t["Wvc/I+"], [ty.AFTERNOON]: ex.t["d+0STx"], [ty.EVENING]: ex.t.CqsxKI }),
            ex.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? ty.MORNING
                        : s >= 12 && s < 17
                          ? ty.AFTERNOON
                          : ty.EVENING
                ],
            )),
        p = o ?? (l ? (0, c.jsx)(tp, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, i),
        ref: r,
        children: (0, c.jsxs)("div", {
            className: u()(tD.W2, tD.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    className: tD.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(er.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(tx, {
                                            className: tD.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: f,
                                        }),
                                        (0, c.jsx)(tu, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tD.y3,
                    children: (0, c.jsx)(tS, { containerVisibilityPercentage: x, compact: null == p }),
                }),
            ],
        }),
    });
};
var tO = s(460508);
let tL =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tk = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: tO.BI,
                    children: (0, c.jsx)(tj, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tC.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tE.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, c.jsx)("img", { src: tL, alt: "", className: tO.Q }),
                    }),
                }),
                (0, c.jsx)(tR, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: tO.Gj,
                    keyContainerClassName: tO.FV,
                    starContainerClassName: tO.E1,
                    hammerAssetClassName: tO.Wv,
                    keyAssetClassName: tO.rs,
                    starAssetClassName: tO.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var tU = s(219351);
function tG(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tv, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tU.wG,
        flyingWumpusAssetClassName: tU.lu,
        boltContainerClassName: tU.nJ,
        hammerContainerClassName: tU.Gj,
        keyContainerClassName: tU.FV,
        starContainerClassName: tU.E1,
        boltAssetClassName: tU.j7,
        hammerAssetClassName: tU.Wv,
        keyAssetClassName: tU.rs,
        starAssetClassName: tU.OY,
        animationSpeedScale: 1 / 0.7,
    });
}
let tw = function () {
    let e = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion);
    return (0, c.jsx)(tR, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tU.cI,
        hammerContainerClassName: tU.qg,
        keyContainerClassName: tU.h2,
        boltContainerClassName: tU.Bz,
        starAssetClassName: tU.ks,
        hammerAssetClassName: tU.GY,
        keyAssetClassName: tU.p4,
        boltAssetClassName: tU.vy,
    });
};
var tH = s(202541);
function tF(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tD.ap,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, c.jsx)(eV, { text: ex.intl.string(ex.t.yhldRB) }),
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 12,
                            className: tD.rG,
                            children: [
                                (0, c.jsx)(tx, { children: ex.intl.format(ex.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: ex.intl.string(ex.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, c.jsx)(tt.A, {
                                    size: "md",
                                    buttonTextOverride: ex.intl.string(ex.t["2+luBl"]),
                                    iconOverride: ed.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(eo.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ex.intl.string(ex.t.Af7ye6),
                                    onClick: () => (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tD.Hk,
                    children: [(0, c.jsx)(eR, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(tw, {})],
                }),
            ],
        }),
    });
}
function tB(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: r } = eF(!(0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tD.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tD.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 24,
                    className: tD.E2,
                    children: [
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eV, { text: ex.intl.string(ex.t.yhldRB) }),
                                (0, c.jsx)(tx, { children: ex.intl.format(ex.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tD.X8,
                                    children: (0, c.jsx)(ec.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: ex.intl.string(ex.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tD.oF,
                            children: [
                                (0, c.jsx)(tt.A, {
                                    size: "md",
                                    buttonTextOverride: ex.intl.string(ex.t["2+luBl"]),
                                    iconOverride: ed.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(eo.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ex.intl.string(ex.t.Af7ye6),
                                    onClick: () => (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tD.Tg, children: (0, c.jsx)(tG, { containerVisibilityPercentage: r }) }),
            ],
        }),
    });
}
function tV(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: n } = e,
        {
            headingText: a,
            headingTop: r,
            showPill: l,
            shouldShowChurnVariant: o,
            premiumSubscription: d,
            userDiscountOffer: m,
            discountedPrice: x,
            buttonVisibilityRef: f,
        } = tW(),
        { isInNitroHomeHeaderTreatment: p } = F("subscriber_home_hero"),
        h = $("subscriber_home_hero"),
        { analyticsLocations: N } = (0, C.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        E = (0, ew.c)(ej.C.MARKETING_PAGE_BANNER),
        j = (0, eL.cg)(),
        b = null != d && d.status === e1.Dmq.CANCELED,
        R = p && !b,
        _ = null;
    null != E &&
        "marketingPageBanner" === E.properties.properties.oneofKind &&
        (_ = (0, c.jsx)(ez.x, {
            componentId: E.id,
            promotionBannerMarketingComponentFields: E.properties.properties.marketingPageBanner,
        }));
    let I = _;
    null == I && n && !R && (I = (0, c.jsx)(te, {}));
    let T = (0, eG.V)(),
        v = (0, eU.O)(),
        P = (0, es.U9)(v, tH.pe.TIER_2) ? tH.pe.TIER_2 : void 0,
        S = null != d && d.status !== e1.Dmq.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
        y = (0, eP.A)(),
        D = y.isFractionalPremiumActive && !S && null == I && !o,
        { visibilityPercentageRef: M, visibilityPercentage: O } = eF(!(0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion));
    if (i)
        return h
            ? (0, c.jsx)(tB, { fpEndsAt: y.currentEntitlementEndsAt, className: t, buttonVisibilityRef: f })
            : (0, c.jsx)(tF, { fpEndsAt: y.currentEntitlementEndsAt, className: t, buttonVisibilityRef: f });
    if (R) {
        let e = D
            ? (0, c.jsxs)("div", {
                  className: tD.UJ,
                  children: [
                      (0, c.jsx)(tt.A, {
                          size: "md",
                          hasActivePromotion: !!j,
                          subscriptionTier: T?.subscription_trial?.sku_id ?? P,
                      }),
                      (0, c.jsx)(eA.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: ex.intl.string(ex.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tM, {
            className: t,
            headingTop: r,
            showPill: l,
            buttonVisibilityRef: f,
            shouldShowReferralProgressBar: n,
            marketingBanner: _,
            heroButtons: e,
        });
    }
    return (0, c.jsx)("div", {
        className: u()(tD.kL, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        ref: f,
        children: (0, c.jsxs)("div", {
            className: tD.Qs,
            ref: M,
            children: [
                l && r,
                (0, c.jsxs)("div", {
                    className: tD.N1,
                    children: [
                        (0, c.jsx)(tk, { containerVisibilityPercentage: O }),
                        o &&
                            m?.expiresAt != null &&
                            (0, c.jsx)(tr, { expiresAt: m.expiresAt.toISOString(), className: tD.IZ }),
                        (0, c.jsx)(tx, {
                            children:
                                o && null != m ? ex.intl.format(ex.t["3yZP0G"], { percent: m.discount.amount }) : a,
                        }),
                        o &&
                            null != m &&
                            null != x &&
                            (0, c.jsx)(ec.E, {
                                className: tD.jG,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: ex.intl.format(ex.t["3Q4wCy"], {
                                    discountedPrice: x,
                                    billingPeriod: (0, eO.Ke)(m.discount.userUsageLimitInterval),
                                    numMonths: m.discount.userUsageLimit,
                                }),
                            }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: D || o ? tD.UJ : void 0,
                    children: [
                        D &&
                            (0, c.jsx)(tt.A, {
                                size: "md",
                                hasActivePromotion: !!j,
                                subscriptionTier: T?.subscription_trial?.sku_id ?? P,
                            }),
                        o &&
                            null != d &&
                            (0, c.jsx)(eo.$, {
                                variant: "expressive",
                                icon: ed.t,
                                size: "md",
                                text: ex.intl.string(ex.t.zrCzVB),
                                onClick: () => {
                                    var e;
                                    return (
                                        (e = tl.g.CONFIRM_DISCOUNT),
                                        void (0, eI.openModalLazy)(async () => {
                                            let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                await Promise.all([
                                                    s.e("91170"),
                                                    s.e("42394"),
                                                    s.e("23102"),
                                                    s.e("2285"),
                                                    s.e("97726"),
                                                    s.e("44459"),
                                                    s.e("98986"),
                                                    s.e("18379"),
                                                    s.e("29062"),
                                                    s.e("21133"),
                                                    s.e("60061"),
                                                    s.e("44083"),
                                                    s.e("62329"),
                                                    s.e("10543"),
                                                    s.e("80197"),
                                                    s.e("61275"),
                                                    s.e("30072"),
                                                    s.e("26572"),
                                                    s.e("18629"),
                                                    s.e("48132"),
                                                    s.e("64729"),
                                                    s.e("5549"),
                                                    s.e("42205"),
                                                    s.e("55675"),
                                                    s.e("27962"),
                                                    s.e("64827"),
                                                    s.e("7167"),
                                                    s.e("61060"),
                                                    s.e("40135"),
                                                    s.e("6338"),
                                                    s.e("47834"),
                                                    s.e("97595"),
                                                    s.e("55112"),
                                                    s.e("44571"),
                                                    s.e("40291"),
                                                    s.e("29963"),
                                                    s.e("92075"),
                                                    s.e("63123"),
                                                    s.e("50097"),
                                                    s.e("65689"),
                                                    s.e("94161"),
                                                    s.e("13051"),
                                                    s.e("80347"),
                                                    s.e("80166"),
                                                ]).then(s.bind(s, 293061));
                                            return (s) =>
                                                (0, c.jsx)(t, {
                                                    ...s,
                                                    analyticsLocations: N,
                                                    initialStep: e,
                                                    premiumSubscription: d,
                                                });
                                        })
                                    );
                                },
                            }),
                        (0, c.jsx)(eA.A, {
                            variant: D || o ? "secondary" : "expressive",
                            size: "md",
                            buttonTextOverride: ex.intl.string(ex.t["3KomGa"]),
                        }),
                    ],
                }),
                I,
            ],
        }),
    });
}
let [tz, tW] = (0, eD.A)(),
    tK = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, C.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = (0, U.ds)(),
            l = (0, ek.QQ)(),
            o = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            d = null != o && o.status === e1.Dmq.CANCELED && null != i,
            u = l && !d,
            m = ex.intl.string(ex.t.qYKftX),
            x = (0, eW.m)(),
            f = ex.intl.string(ex.t.ifwQZb),
            { fractionalState: p, endsAt: h } = (0, eP.A)(),
            N = (0, ev.Ay)(h, ev.yE.CREDITS_ENDS_IN),
            E = null;
        if (p === tH.xc.NONE || r) E = (0, c.jsx)(eV, { text: m });
        else {
            u = !0;
            let e = ex.intl.format(ex.t["yR+oDD"], {
                helpCenterLink: eM.A.getArticleURL(e1.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            E = (0, c.jsx)(e_.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tD.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tD.V_,
                        children: (0, c.jsx)("div", { className: tD.eL, children: (0, c.jsx)(eV, { text: N }) }),
                    }),
            });
        }
        return (0, c.jsx)(C.f5, {
            value: a,
            children: (0, c.jsx)(tz.Provider, {
                value: {
                    headingText: f,
                    headingTop: E,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, c.jsx)(tV, { className: t, isInReverseTrial: r, shouldShowReferralProgressBar: x }),
            }),
        });
    };
var tX = s(820284),
    tY = s(742589),
    tQ = s(909536),
    tZ = s(392943),
    tq = s(876587),
    tJ = s(400669),
    t$ = s(590319),
    t0 = s(897351);
let t1 = function () {
    let e = (0, tQ.Gh)("nitro_home_header"),
        t = o.useRef(null);
    return (0, c.jsxs)(tX.A, {
        section: e1.JJy.NAVIGATION,
        children: [
            (0, c.jsx)(tY.A, {
                className: u()(t$.TQ, t0.C$),
                transparent: !0,
                role: "navigation",
                children: (0, c.jsxs)("div", {
                    className: t$.Wc,
                    children: [
                        (0, c.jsxs)("div", {
                            className: t0.wk,
                            children: [
                                (0, c.jsx)(ed.t, { colorClass: t0.tr }),
                                (0, c.jsx)("span", {
                                    role: "img",
                                    "aria-label": ex.intl.string(ex.t.Ipxkog),
                                    className: t0.Ss,
                                    children: (0, c.jsx)(tZ.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, c.jsxs)("div", {
                                className: t$.MQ,
                                children: [
                                    (0, c.jsx)(tJ.l, {
                                        ref: t,
                                        size: "sm",
                                        location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, c.jsx)(tq.O, { targetElementRef: t, body: ex.intl.string(ex.t.EqUw7K) }),
        ],
    });
};
var t2 = s(325499),
    t6 = s(562708),
    t3 = s(885574),
    t7 = s(43990),
    t9 = s(993077),
    t5 = s(139286),
    t8 = s(872725),
    t4 = s(920050),
    se = s(375776),
    st = s(727811),
    ss = s(222652),
    si = s(933287),
    sn = s(355982);
function sa(e) {
    let { openRewardModal: t } = e,
        s = (0, ss.z)();
    if (s.kind === ss.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: sn.R$,
            children: [
                (0, c.jsx)(tt.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tH.pe.TIER_2,
                }),
                (0, c.jsx)(eo.$, { variant: "secondary", size: "md", text: ex.intl.string(ex.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === st.P.CLAIMED
            ? { text: ex.intl.string(si.default.Plwzgf) }
            : { text: ex.intl.string(ex.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: sn.R$,
                children: [
                    (0, c.jsx)(eo.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(eo.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === st.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: sn.ed,
                    children: [
                        (0, c.jsx)(t3.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ex.intl.string(si.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sr(e) {
    let { glowing: t = !1 } = e;
    (0, t5.A)({
        type: t6.ImpressionTypes.VIEW,
        name: t6.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t4.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, C.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, eI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("52283"), s.e("13088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(t7.N, {
        theme: e1.NJ8.DARKER,
        children: (e) =>
            (0, c.jsx)(C.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, sn.kL),
                    children: (0, c.jsx)(t8.A, {
                        cardType: t9.s.CUSTOM,
                        cardClassName: sn.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: sn.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sn.j,
                                    children: [
                                        (0, c.jsx)("div", { className: sn._g }),
                                        (0, c.jsx)("div", { className: sn.$h }),
                                        (0, c.jsx)("div", { className: sn.Rv }),
                                        (0, c.jsx)("div", { className: sn.Lw }),
                                        (0, c.jsx)("div", { className: sn.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: sn.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: sn.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(el.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sn.DD,
                                            children: ex.intl.string(si.default.RGT513),
                                        }),
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sn.h_,
                                            children: ex.intl.string(si.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sa, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sl = s(744064);
function sc(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, ss.z)(),
        n = { isThirdPartyPerk: !0 },
        a =
            i.kind === ss.N.SUBSCRIBE
                ? { ...n, subscriptionRequired: !0 }
                : {
                      ...n,
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, c.jsx)(sl.S, {
        id: t4.XBOX_PREMIUM_PERK_CARD_ID,
        title: ex.intl.string(si.default.UVL9tD),
        description: ex.intl.string(si.default["I+IXr0"]),
        ...a,
        className: t,
        containerClassName: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function so(e) {
    let { analyticsLocations: t } = (0, C.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(C.f5, { value: t, children: (0, c.jsx)(sc, { ...e }) });
}
var sd = s(54471),
    su = s(574377);
function sm(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: r } = e,
        l = su.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(l, null != n && sd.Jx, r), children: a }) : null,
        ],
    });
}
var sg = s(149995),
    sx = s(398523),
    sf = s(881373),
    sp = s(581921),
    sh = s(3074),
    sN = s(852218),
    sA = s(161319),
    sC = s(962995);
function sE() {
    let { analyticsLocations: e } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sf.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        s = sx.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, sg.Zk)({ location: "useHardwarePartnerPerkCards" }),
        n = (0, sg.S9)({ location: "useHardwarePartnerPerkCards" }),
        a = null === (0, sh.N)(),
        r = (0, t2.b)("useHardwarePartnerPerkCards"),
        { currentDate: l, nDaysInMonth: d } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = r ? void 0 : ex.intl.string(ex.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: t4.LOGITECH_3PP_CARD_ID,
                      title: ex.intl.string(sC.default.OlObRa),
                      description: ex.intl.format(sC.default.ZGOJ8R, {
                          discountPercent: sf.aW,
                          termsUrl: eM.A.getArticleURL(e1.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: l.getDate() / d,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sp.P)({ partnerId: sN.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sN.XY },
                      ctaDisabled: a,
                      ctaLoading: a,
                  }
                : null,
            steelseriesCard: s
                ? {
                      id: t4.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ex.intl.string(ex.t.m7PucM),
                      description: i
                          ? n
                              ? ex.intl.format(ex.t["1Zw6xL"], {})
                              : ex.intl.format(ex.t.KWdCO0, {})
                          : ex.intl.format(ex.t.zh1X7u, {}),
                      descriptionNote:
                          !n && i
                              ? ex.intl.format(ex.t.vblnHk, {
                                    partnerName: sN.CD[sN.Cs].label,
                                    helpdeskArticle: eM.A.getArticleURL(e1.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: l.getDate() / d,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sA.u)({ analyticsLocations: e, partnerIds: [sN.KS, sN.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sN.KS },
                      ctaDisabled: a,
                      ctaLoading: a,
                  }
                : null,
        };
    }, [r, e, l, t, d, s, i, n, a]);
}
var sj = s(166634);
let sb = "xgpp";
function sR(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, t2.b)("premium_subscriber_home_rewards"),
        { logitechCard: n, steelseriesCard: a } = sE();
    if (!i) return null;
    let r = null != n || null != a;
    return (0, c.jsx)(sm, {
        id: sb,
        sectionClassName: u()(sj.uW, sj.Uv, sj.qr),
        heading: (0, c.jsx)(el.D, {
            variant: "display-sm",
            className: u()(su.R_, sd.U6),
            children: ex.intl.string(ex.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: sd.JE, children: (0, c.jsx)(sr, { glowing: t === sb }) }),
        grid: r
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      (0, c.jsx)(so, { containerClassName: su.Nr }),
                      null != n && (0, c.jsx)(sl.S, { ...n, containerClassName: su.Nr, glowing: s === n.id }),
                      null != a && (0, c.jsx)(sl.S, { ...a, containerClassName: su.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var s_ = s(687636),
    sI = s(67423);
let sT = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, C.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: u()(s_.iE, { [s_.q4]: !t }),
        style: l,
        children: (0, c.jsxs)("div", {
            className: s_.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sI, className: s_.oU }),
                (0, c.jsxs)("div", {
                    className: s_.iQ,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: ex.intl.format(ex.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(ex.t["3Q4wCy"], {
                                numMonths: n.discount.userUsageLimit,
                                discountedPrice: a,
                                billingPeriod: (0, eO.Ke)(n.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(eo.$, {
                    variant: "expressive",
                    icon: ed.t,
                    size: "md",
                    text: ex.intl.string(ex.t.zrCzVB),
                    onClick: () =>
                        void (0, eI.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("91170"),
                                s.e("42394"),
                                s.e("23102"),
                                s.e("2285"),
                                s.e("97726"),
                                s.e("44459"),
                                s.e("98986"),
                                s.e("18379"),
                                s.e("29062"),
                                s.e("21133"),
                                s.e("60061"),
                                s.e("44083"),
                                s.e("62329"),
                                s.e("10543"),
                                s.e("80197"),
                                s.e("61275"),
                                s.e("30072"),
                                s.e("26572"),
                                s.e("18629"),
                                s.e("48132"),
                                s.e("64729"),
                                s.e("5549"),
                                s.e("42205"),
                                s.e("55675"),
                                s.e("27962"),
                                s.e("64827"),
                                s.e("7167"),
                                s.e("61060"),
                                s.e("40135"),
                                s.e("6338"),
                                s.e("47834"),
                                s.e("97595"),
                                s.e("55112"),
                                s.e("44571"),
                                s.e("40291"),
                                s.e("29963"),
                                s.e("92075"),
                                s.e("63123"),
                                s.e("50097"),
                                s.e("65689"),
                                s.e("94161"),
                                s.e("13051"),
                                s.e("80347"),
                                s.e("80166"),
                            ]).then(s.bind(s, 293061));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: r,
                                    initialStep: tl.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sv = s(761508),
    sP = s(449543);
function sS(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sy(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sD(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sM = s(345394);
function sO(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: sM.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sL(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sk(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sU(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sG(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sw(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sH = s(996682);
function sF(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, sH.A)({ "aria-label": s, "aria-hidden": i, role: n }),
        width: a,
        height: r,
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
function sB(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sV = s(78701);
function sz(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: sV.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sW = s(462887),
    sK = s(736653),
    sX = s(259065),
    sY = s(206835),
    sQ = s(591179),
    sZ = s(462463),
    sq = s(878784),
    sJ = s(425713),
    s$ = s(696292),
    s0 = s(192444),
    s1 = s(617986),
    s2 = s(892227),
    s6 = s(81466),
    s3 = s(318254),
    s7 = s(490285),
    s9 = s(165815);
let s5 = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, X.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, s2.default)(new Date(t.next_reward_date), new Date()))
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
                                (0, c.jsx)(s6.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(s7.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(s7.default.xedPIb, { days: s }),
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
                                (0, c.jsx)(s3.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(s7.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(s7.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var s8 = s(758836),
    s4 = s(190107),
    ie = s(55684);
function it(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, s0.lk)(s4.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, X.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: t4.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ex.intl.string(s7.default.hx5AFp),
                          description: ex.intl.format(s7.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(ie.lH, ie.yK),
                          footerContent: (0, c.jsx)(s5, {}),
                          ctaText: ex.intl.string(s7.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(s8.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: t4.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ex.intl.string(ex.t.Csf5Ol),
                          description: ex.intl.format(ex.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: () => (0, s1.mA)({ fromContent: s$.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: ie.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var is = s(975807),
    ii = s(95035),
    ia = s(862990),
    ir = s(88001),
    il = s(466919),
    ic = s(817577);
function io() {
    (0, is.A)(ir.TE);
}
function id(e) {
    let t = (0, ia.O9)(),
        i = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, eI.openModalLazy)(async () => {
                      let { default: e } = await s.e("99709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tH.pe.TIER_2,
                      initialPlanId: tH.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: t4.PREMIUM_GROUP_CARD_ID,
                      title: ex.intl.string(il.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              ex.intl.formatToPlainString(il.default.JlyGQj, {
                                  totalSeats: ir.aw,
                                  premiumGroupProductName: (0, ir.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: ie.LF,
                                  children: (0, c.jsx)(ii.A, {
                                      onClick: io,
                                      children: ex.intl.string(il.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ex.intl.string(ex.t.oW0eUd),
                      primaryAsset: ic,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: ex.intl.string(ex.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iu = s(562819),
    im = s(892035),
    ig = s(793943),
    ix = s(241988),
    ip = s(655752),
    ih = s(764231),
    iN = s(627380),
    iA = s(30084),
    iC = s(111881),
    iE = s(714206);
let ij =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    ib =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iR =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function i_() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        n = (0, sQ.X)("useWhatsNewPerkCards"),
        { logitechCard: a, steelseriesCard: r } = sE(),
        l = (0, t2.b)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: d } = (0, im.z$)("useWhatsNewPerkCards"),
        m = (0, sZ.A)({ analyticsLocations: i }),
        x = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, sX.L)({ analyticsLocations: i }),
            );
        }, [i]),
        f = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, iu.L)({ analyticsLocations: i }),
            );
        }, [i]),
        p = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        h = (function (e) {
            let { fractionalState: t } = (0, eP.A)(),
                s = t === tH.xc.FP_ONLY,
                i = (0, sq.$F)(),
                n = (0, sq.Xb)(),
                a = i?.status === sq.Wo.UPCOMING || s,
                r = (0, sJ.N)(i?.id),
                l = (function () {
                    let e = (0, sq.$F)(),
                        t = (0, ip.P)(),
                        s = (0, sq.Xb)();
                    if (null == e || null == t || null == s) return null;
                    let i = ti()(),
                        n = ti()(s),
                        a = e.status === sq.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        r = t.tenureReqNumMonths,
                        l = n.clone().add(a, "months"),
                        c = n.clone().add(r, "months").diff(l);
                    return Math.max(0, Math.min(1, (i.diff(l) - 864e5) / c));
                })(),
                c = (0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion) && !a,
                d = (0, iN.t)(),
                m = (0, ip.P)();
            return (0, o.useMemo)(() => {
                let t,
                    o = null != m ? ex.intl.string(m.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, ih.T)(tH.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === sq.Wo.UPCOMING
                              ? ex.intl.formatToPlainString(ex.t.a1eKDi, { days: d?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return ex.intl.formatToPlainString(ex.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return ex.intl.formatToPlainString(ex.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(d, o) ??
                                (0, ih.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let g = null;
                return (
                    null != r ? (g = a || c ? r.standard : r.ambientLarge) : s && (g = iE),
                    {
                        id: t4.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ex.intl.string(i.nameUnformattedNitro) : s ? ex.intl.string(ex.t.tx9Fvw) : "",
                        pillText: ex.intl.string(ex.t["jyYgZ+"]),
                        primaryAsset: g,
                        primaryAssetClassName: u()(iC.pq, { [iC.n6]: a, [iC.kE]: c }),
                        caption: null != n ? ex.intl.formatToPlainString(ex.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: l ?? void 0,
                        ctaText: ex.intl.string(ex.t.jVcuVY),
                        onCtaClick: () => (0, iA.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, r, a, c, n, l, s, d, m, e]);
        })(i),
        N =
            ((e = (0, q.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription())),
            (s = (0, eh.q)(t, e === q.Iz.NITRO_HOME_TILE)),
            (0, o.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: t4.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: (0, c.jsx)("img", {
                                  src: ix,
                                  alt: "",
                                  "aria-hidden": !0,
                                  style: { width: 157 },
                                  draggable: !1,
                              }),
                              ctaIcon: ed.t,
                              ctaIconPosition: "start",
                              ctaText: s.cta,
                              onCtaClick: () =>
                                  (0, P.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: i }),
                          },
                [i, s, t],
            )),
        { nitroOrbsRewardsCard: E, questOrbMultiplierCard: j } = it("useWhatsNewPerkCards"),
        b = id(i);
    return (0, o.useMemo)(() => {
        let e = [
                l ? null : a,
                l ? null : r,
                E,
                j,
                b,
                {
                    id: t4.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ex.intl.string(ex.t.OLtTrt),
                    description: ex.intl.string(ex.t["di/pXR"]),
                    onCtaClick: n ? m : x,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    primaryAsset: ij,
                },
                {
                    id: t4.CLIENT_THEMES_CARD_ID,
                    title: ex.intl.string(ex.t.acc6h6),
                    description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iR,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ig.nf)(ig.HP.CUSTOM_THEME);
                    },
                },
                d
                    ? null
                    : {
                          id: t4.PERMADECOS_CARD_ID,
                          title: ex.intl.string(ex.t.L14NZN),
                          description: ex.intl.string(ex.t.eCZkAI),
                          primaryAsset: (0, c.jsx)(sz, { alt: "", ariaHidden: !0 }),
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: n ? m : f,
                      },
                {
                    id: t4.CUSTOM_APP_ICONS_CARD_ID,
                    title: ex.intl.string(ex.t["GU+wqh"]),
                    description: ex.intl.string(ex.t["1uPk1Z"]),
                    primaryAsset: ib,
                    ctaText: ex.intl.string(ex.t.y9TxXV),
                    onCtaClick: p,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        if ((e.splice(+!!t, 0, h), null != N && e.splice(1, 0, N), d)) {
            let t = null != N ? 2 : 1;
            e.splice(t, 0, {
                id: t4.PROFILE_FRAMES_CARD_ID,
                title: ex.intl.string(ex.t.SGBDnu),
                description: ex.intl.string(ex.t.cMgegQ),
                pillText: ex.intl.string(ex.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: u()(ie.lH, ie.yK),
                ctaText: ex.intl.string(ex.t.jVcuVY),
                onCtaClick: () => (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(s8.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > s && e.splice(s, e.length - s), e;
    }, [h, N, E, j, b, x, p, f, m, n, a, r, l, d]);
}
var iI = s(355097);
let iT = "/assets/1eb1b74667b4c0f0.svg",
    iv = "/assets/983b60e4fcaf973b.svg";
var iP =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let iS = [
    { id: "bestof", label: () => ex.intl.string(ex.t.q1u7nQ) },
    { id: "appearance", label: () => ex.intl.string(ex.t.CUnZkZ) },
    { id: "upgrades", label: () => ex.intl.string(ex.t.KC5q8v) },
    { id: "vip", label: () => ex.intl.string(ex.t.DjEAcv) },
];
var iy = s(631255);
function iD(e) {
    e.stopPropagation();
}
function iM(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sK.DP)(),
                t = (0, sQ.X)("useFavoritesPerkCards"),
                s = (0, sq.Lh)(),
                i = (0, sJ.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, sY.A)({ scrollPosition: iI._F.TRY_IT_OUT, analyticsLocations: n }),
                r = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                l = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                g = (0, sZ.A)({ analyticsLocations: n }),
                x = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, sX.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = i_(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = it("useFavoritesPerkCards"),
                E = id(n),
                j = (0, o.useMemo)(
                    () => [
                        {
                            id: t4.SERVER_BOOSTS_CARD_ID,
                            title: ex.intl.formatToPlainString(ex.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ex.intl.formatToPlainString(ex.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, c.jsx)(sS, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != E ? { ...E, categories: ["bestof"] } : null,
                        {
                            id: t4.PROFILES_CARD_ID,
                            title: ex.intl.string(ex.t.xDRab3),
                            description: ex.intl.string(ex.t.yn6fWA),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: t ? g : a,
                            primaryAsset: (0, c.jsx)(sy, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t4.HD_VIDEO_CARD_ID,
                            title: ex.intl.string(ex.t["/mQ5gg"]),
                            description: ex.intl.string(ex.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sD, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.CLIENT_THEMES_CARD_ID,
                            title: ex.intl.string(ex.t.acc6h6),
                            description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: iR,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t4.MORE_EMOJIS_CARD_ID,
                            title: ex.intl.string(ex.t.D8vIDT),
                            description: ex.intl.string(ex.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sO, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.LARGE_UPLOADS_CARD_ID,
                            title: ex.intl.string(ex.t.nL1WZV),
                            description: ex.intl.formatToPlainString(ex.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, c.jsx)(sL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.CUSTOM_APP_ICONS_CARD_ID,
                            title: ex.intl.string(ex.t["GU+wqh"]),
                            description: ex.intl.string(ex.t["1uPk1Z"]),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: ib,
                            categories: ["appearance"],
                        },
                        {
                            id: t4.ENTRANCE_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.WJfCPi),
                            description: ex.intl.string(ex.t.liQKJR),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: t4.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ex.intl.string(ex.t.OLtTrt),
                            description: ex.intl.string(ex.t["di/pXR"]),
                            onCtaClick: t ? g : x,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            primaryAsset: ij,
                            categories: ["appearance"],
                        },
                        {
                            id: t4.CUSTOM_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t["Cu/oFd"]),
                            description: ex.intl.string(ex.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sk, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.SPECIAL_STICKERS_CARD_ID,
                            title: ex.intl.string(ex.t.MQoVeb),
                            description: ex.intl.string(ex.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: ie.Uc,
                                children: (0, c.jsx)(sU, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.SUPER_REACTIONS_CARD_ID,
                            title: ex.intl.string(ex.t.qERvAA),
                            description: ex.intl.string(ex.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sG, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.ssVDYQ),
                            description: ex.intl.string(ex.t.aUSRMa),
                            primaryAsset: (0, sW.M)(e) ? iT : iv,
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.EARLY_ACCESS_CARD_ID,
                            title: ex.intl.string(ex.t["g/KRY6"]),
                            description: ex.intl.string(ex.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t4.BADGE_CARD_ID,
                            title: ex.intl.string(ex.t.Bn3CtB),
                            description: ex.intl.string(ex.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sF, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t4.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ex.intl.string(ex.t["MTD+7w"]),
                            description: ex.intl.string(ex.t.Bhs0s6),
                            ctaText: ex.intl.string(ex.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sB, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: t4.PERMADECOS_CARD_ID,
                            title: ex.intl.string(ex.t.L14NZN),
                            description: ex.intl.string(ex.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sz, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, E, a, r, l, d, u, m, x, g, t],
                );
            return (0, o.useMemo)(() => j.filter((e) => null != e && !p.includes(e.id)), [j, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iP.BEST_OF_NITRO),
        r = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: iy.uW,
        children: [
            (0, c.jsx)(el.D, { variant: "display-sm", className: iy.R_, children: ex.intl.string(ex.t["Uh3+CA"]) }),
            (0, c.jsx)(sv.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iy.Lq,
                "aria-label": ex.intl.string(ex.t["Uh3+CA"]),
                children: iS.map((e) =>
                    (0, c.jsx)(sv.V.Item, { id: e.id, className: iy.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sP.A,
                {
                    gap: 20,
                    className: iy.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sl.S,
                                { ...e, glowing: t === e.id, containerClassName: iy.Ui, onFocus: iD },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var iO = s(411450);
let iL = function (e) {
    let { className: t } = e,
        s = (0, sK.DP)();
    return (0, c.jsx)("img", {
        className: u()(iO.D, t),
        src: (0, sW.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var ik = s(300758);
let iU = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: s, children: i } = e;
    return t
        ? (0, c.jsxs)("div", {
              className: u()(ik.kL, ik.Gd, ik.Eg),
              children: [(0, c.jsx)(iL, {}), (0, c.jsx)(t1, {}), i],
          })
        : (0, c.jsx)(eN.h, { color: "nitro-pink", className: u()(ik.kL, ik.Gd), offsetBottom: s, children: i });
};
function iG(e) {
    let { glowingPerkId: t = null } = e,
        s = i_();
    return (0, c.jsx)(sm, {
        sectionClassName: su.uW,
        heading: (0, c.jsx)(el.D, { variant: "display-sm", className: su.R_, children: ex.intl.string(ex.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, c.jsx)(
                    sl.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: u()(su.Nr, { [su.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function iw(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
            r = o.useRef(!1);
        o.useEffect(() => {
            if (!t || r.current) return;
            let s = { behavior: a ? "auto" : "smooth", block: i, inline: n },
                l = e();
            if (null != l && l.offsetHeight > 0) {
                (r.current = !0), l.scrollIntoView(s);
                return;
            }
            let c = !1,
                o = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        r.current ||
                        c ||
                        ((r.current = !0), d.disconnect(), t.target.scrollIntoView(s));
                }),
                u = performance.now();
            return (
                !(function t() {
                    if (c || performance.now() - u > 5e3) return;
                    let i = e();
                    null != i
                        ? i.offsetHeight > 0
                            ? ((r.current = !0), i.scrollIntoView(s))
                            : d.observe(i)
                        : (o = requestAnimationFrame(t));
                })(),
                () => {
                    (c = !0), null != o && cancelAnimationFrame(o), d.disconnect();
                }
            );
        }, [t, a, i, n, ...s]),
            o.useEffect(() => {
                t || (r.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], s, i);
}
var iH = s(92737);
let iF = "/assets/cd2be35d285d4675.svg",
    iB = (e) => {
        let { userId: t } = e,
            s = (0, U.ds)(),
            { isInNitroHomeHeaderTreatment: i } = F("nitro_member_hub_header"),
            n = $("nitro_member_hub_header"),
            a = (0, m.zy)();
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = [(0, K.Ay)()];
                null != t && e.push((0, Q.A)(t)), await Promise.all(e);
            });
        }, [t]),
            o.useEffect(() => {
                I(!0);
            }, []),
            (0, et.j)(),
            (0, v.P)(T);
        let r = o.useRef(null),
            l = o.useRef(null),
            d = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: p, programReward: h } = (0, X.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: N,
                glowingSectionId: E,
                glowingPerkId: j,
                scrollBlock: b,
                scrollInline: R,
            } = o.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(iH.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        iw(N ?? "", null != N, b, R);
        let [_, I] = o.useState(!1),
            P = (0, ee.p)(),
            S = o.useRef(null),
            [y, D] = o.useState(!1),
            M = null != P && null != d && d.status === e1.Dmq.CANCELED,
            k = (0, es.iU)(tH.gD.PREMIUM_MONTH_TIER_2, P, d),
            G = !y && M,
            w = null != (0, g.bG)([Y.A], () => (null != t ? Y.A.getUserProfile(t) : null)) && (p || null != h),
            H = (0, q.TF)({ location: "PremiumSubscriberHome" }),
            J = (0, eh.q)(d, H === q.Iz.STICKY_BAR),
            [ei, en] = (0, W.iP)(
                null != J && w && d?.id != null ? B.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                d?.id ?? "",
                { cooldownDurationMs: Z.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ea = null != d && d.status === e1.Dmq.CANCELED,
            er = i && !s && !ea,
            { analyticsLocations: el } = (0, C.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ec, eo] = o.useState(!1);
        return w
            ? (0, c.jsxs)(z.Gt, {
                  className: u()(ik.xW, ik.Gd),
                  ref: r,
                  children: [
                      (0, c.jsx)(iU, {
                          shouldRenderNitroHomeHeaderExperiment: er,
                          gradientOffsetBottom: s && !n ? 0.55 : 0.8,
                          children: (0, c.jsxs)(C.f5, {
                              value: el,
                              children: [
                                  (0, c.jsx)(V.L, {
                                      innerRef: S,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tK, {
                                          buttonVisibilityRef: S,
                                          className: ik.v1,
                                          userDiscountOffer: P,
                                          discountedPrice: k,
                                      }),
                                  }),
                                  (0, c.jsx)(iG, { glowingPerkId: j }),
                                  (0, c.jsx)(sR, { glowingPerkId: j, glowingSectionId: E }),
                                  (0, c.jsx)(iM, { glowingPerkId: j }),
                                  (0, c.jsx)(eE, {
                                      className: ik.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e1.liQ.NITRO_HOME, section: e1.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: ik.hz }),
                                  (0, c.jsx)(V.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !ec &&
                                              (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: el,
                                              }),
                                              eo(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: l, className: ik._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: iF,
                                      className: ik.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ex.intl.string(ex.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      M &&
                          null != k &&
                          (0, c.jsx)(sT, {
                              isVisible: G && _,
                              premiumSubscription: d,
                              churnDiscountOffer: P,
                              discountedPrice: k,
                          }),
                      null != ei &&
                          null != J &&
                          null != d &&
                          (0, c.jsx)(ep, { premiumSubscription: d, content: J, markAsDismissed: en }),
                  ],
              })
            : er
              ? (0, c.jsxs)("div", {
                    className: u()(ik.kL, ik.Lq, ik.TN, ik.Eg),
                    children: [
                        (0, c.jsx)(t1, {}),
                        (0, c.jsx)("div", { className: ik.S, children: (0, c.jsx)(x.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(ik.kL, ik.Lq), children: (0, c.jsx)(x.y, {}) });
    };
var iV = s(286320),
    iz = s(727949),
    iW = s(440005),
    iK = s(26508),
    iX = s(968066),
    iY = s(366010),
    iQ = s(303136);
let iZ = function (e) {
    let t,
        { className: s } = e,
        i = (0, tN.TM)(),
        n = (0, iY.q)((0, sK.Ay)());
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
                iQ.A,
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
var iq =
        (((l = {}).HOME = "home"),
        (l.WHATS_NEW = "whatsNew"),
        (l.BEST_OF_NITRO = "bestOfNitro"),
        (l.PLANS = "plans"),
        (l.COMPARE = "compare"),
        l),
    iJ = s(5571);
let i$ = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e1.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(ei.animated.div, {
        className: iJ.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: iJ.U,
            children: [
                (0, c.jsx)(tt.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var i0 = s(685661);
let i1 = function () {
    let e = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: i0.BI,
                children: (0, c.jsx)(tj, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tC.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tL, alt: "", className: i0.Q }),
                }),
            }),
            (0, c.jsx)(tR, {
                isMotionReduced: e,
                boltContainerClassName: i0.nJ,
                carContainerClassName: i0.IN,
                hammerContainerClassName: i0.Gj,
                keyContainerClassName: i0.FV,
                starContainerClassName: i0.E1,
                boltAssetClassName: i0.j7,
                carAssetClassName: i0.or,
                hammerAssetClassName: i0.Wv,
                keyAssetClassName: i0.rs,
                starAssetClassName: i0.OY,
            }),
        ],
    });
};
var i2 = s(502701);
let i6 = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, C.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(C.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: i2.kL,
            children: (0, c.jsxs)("div", {
                className: i2.hQ,
                children: [
                    (0, c.jsx)(i1, {}),
                    (0, c.jsx)(el.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: i2.RH,
                        children: ex.intl.string(ex.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
i6.displayName = "PremiumMarketingFooter";
var i3 = s(939249);
let i7 = function (e) {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        n = {
            [iq.HOME]: ex.intl.string(ex.t.uGRXjS),
            [iq.WHATS_NEW]: ex.intl.string(ex.t["mfcR/v"]),
            [iq.BEST_OF_NITRO]: ex.intl.string(ex.t.xQKkE8),
            [iq.PLANS]: ex.intl.string(ex.t.wyNMnm),
            [iq.COMPARE]: ex.intl.string(ex.t.pwD7If),
        },
        a = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        r = (0, tQ.Gh)("premium_marketing_nav_bar") && null != a,
        l = o.useRef(null),
        d = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsxs)(tY.A, {
        className: t$.TQ,
        transparent: !0,
        children: [
            (0, c.jsxs)("div", {
                className: t$.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: t$.wG,
                        children: [
                            (0, c.jsx)(ed.t, { className: t$.nE, colorClass: t$.oG }),
                            (0, c.jsx)("div", {
                                className: t$.zc,
                                role: "tablist",
                                "aria-label": ex.intl.string(ex.t.O9MiXY),
                                children: d.map((e) => {
                                    let t = s === e.id,
                                        i = n[e.id];
                                    return (0, c.jsxs)(
                                        i3.D,
                                        {
                                            role: "tab",
                                            "aria-selected": t,
                                            className: t$.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, c.jsx)(ec.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                t && (0, c.jsx)("div", { className: t$.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: t$.MQ,
                        children: [
                            r &&
                                (0, c.jsx)(tJ.l, { ref: l, size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            r && i && (0, c.jsx)(tq.O, { targetElementRef: l }),
        ],
    });
};
var i9 = s(704333),
    i5 = s(414499),
    i8 = s(597770),
    i4 = s(500060),
    ne = s(866665),
    nt = s(406860),
    ns = s(870975),
    ni = s(900485);
function nn() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nt.A)({ boxType: se.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: i9.B, text: ex.intl.string(si.default.MUypiB) },
            { icon: i5.h, text: ex.intl.string(si.default.ec5Rdd) },
            { icon: i8.o, text: ex.intl.string(si.default["9t2CzW"]), tooltip: si.default.AyECej },
            { icon: i4.o, text: ex.intl.string(si.default.R7YJAY) },
        ];
    return (0, c.jsx)(V.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: ni.iE,
            children: (0, c.jsxs)("div", {
                className: ni.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: ni.j,
                        children: [
                            (0, c.jsx)("div", { className: ni._g }),
                            (0, c.jsx)("div", { className: ni.$h }),
                            (0, c.jsx)("div", { className: ni.Rv }),
                            (0, c.jsx)("div", { className: ni.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: ni.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: ni.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(el.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: ni.R_,
                                                children: ex.intl.string(si.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: ni.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(ec.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: ni.Jn,
                                                                            children: (0, c.jsx)(ne.m, {
                                                                                text: ex.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(t3.m, {
                                                                                    size: "xxs",
                                                                                    color: "var(--icon-default)",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            s,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: ni.xF,
                                                        children: (0, c.jsx)(tt.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tH.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: ni.WE,
                                        children: (0, c.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ex.intl.format(si.default.KDKdWi, { termsLink: (0, ns.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: ni.r1,
                                children: (0, c.jsx)("img", {
                                    className: ni.wm,
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
var na = s(750338),
    nr = s(280041),
    nl = s(950228);
function nc(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: r = !1,
        highlightBento: l,
    } = e;
    return (0, c.jsxs)("div", {
        className: u()(nl.boxBackdrop, t),
        children: [
            (0, c.jsx)(el.D, {
                className: nl.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, c.jsx)("div", { className: nl.highlightBento, children: l }),
            (0, c.jsx)("div", {
                className: nl.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nr.A0.SMALL;
                            break;
                        case 2:
                            s = nr.A0.MEDIUM;
                            break;
                        default:
                            s = nr.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                na.A,
                                { index: t + +!!r, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let no = o.memo(function (e) {
        let t = (0, t2.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, nr.Ay)(t);
        return (0, c.jsx)(nc, {
            boxLayout: s,
            title: ex.intl.string(ex.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(nn, {}) : null,
            ...e,
        });
    }),
    nd = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nr.Ay)();
        return (0, c.jsx)(nc, { boxLayout: t, title: ex.intl.string(ex.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var nu = s(526292),
    nm = s(236834),
    ng = s(167805);
function nx(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t?.id, size: eK._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: ng.$6,
        children: (0, c.jsxs)("div", {
            className: ng.sc,
            children: [
                (0, c.jsx)("div", {
                    className: ng.kR,
                    children: (0, c.jsx)(eX.eu, { src: s, "aria-label": t.username, size: eK._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(el.D, {
                    variant: "heading-sm/normal",
                    className: ng.FS,
                    color: "text-strong",
                    children: ex.intl.format(ex.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var nf = s(579245),
    np = s(369805);
let nh = function () {
    let e = (0, np.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eV, { text: e });
};
var nN = s(97352);
function nA() {
    let e = (0, g.bG)([nN.A], () => nN.A.getForSkuAndInterval((0, eO.mH)(tH.pe.TIER_0), tH.WT.MONTH));
    return null != e ? (0, eO.sS)(e) : "\u2026";
}
var nC = s(857681);
let nE = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        i = (0, tN.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: nC.YU,
        children: [
            (0, c.jsx)(tT, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: nC.wG,
                assetClassName: nC.lu,
            }),
            (0, c.jsx)(tR, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: nC.nJ,
                carContainerClassName: nC.IN,
                hammerContainerClassName: nC.Gj,
                keyContainerClassName: nC.FV,
                starContainerClassName: nC.E1,
                boltAssetClassName: nC.j7,
                carAssetClassName: nC.or,
                hammerAssetClassName: nC.Wv,
                keyAssetClassName: nC.rs,
                starAssetClassName: nC.OY,
            }),
        ],
    });
};
var nj = s(507256);
let nb = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, C.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = nA(),
            l = (0, nm.A)(),
            o = null != l,
            { visibilityPercentageRef: d, visibilityPercentage: m } = eF(
                !(0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
            ),
            x = (0, iV.b)(),
            f = !o && x.length > 0,
            p = (0, ew.c)(ej.C.MARKETING_PAGE_BANNER),
            h = null != p && "marketingPageBanner" === p.properties.properties.oneofKind,
            N = (0, nu.ar)() && !h,
            E = (0, eU.O)(),
            j = (null != E && tH.U4.includes(E.discountId)) || h;
        return (0, c.jsx)(C.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(nj.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: d,
                    children: (0, c.jsxs)("div", {
                        className: nj.hQ,
                        children: [
                            (0, c.jsx)(nE, { containerVisibilityPercentage: m }),
                            N && (0, c.jsx)(nh, {}),
                            (0, c.jsx)("div", {
                                className: nj.s8,
                                children: (0, c.jsx)(tm.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(el.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: nj.wx,
                                        children: ex.intl.string(ex.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: nj.rf,
                                children: [
                                    o &&
                                        (0, c.jsx)("div", {
                                            className: nj.eZ,
                                            children: (0, c.jsx)(nx, { referrer: l }),
                                        }),
                                    f &&
                                        (0, c.jsx)("div", {
                                            className: nj.Qn,
                                            children: (0, c.jsx)(nf.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: N ? nj.es : nj.UJ,
                                        children: [
                                            (0, c.jsx)(tt.A, {
                                                size: "md",
                                                fullWidth: N,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: j && null == i ? tH.pe.NONE : i,
                                                buttonTextOverride: j ? ex.intl.string(ex.t["2pG5Ga"]) : void 0,
                                            }),
                                            !N && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nj.iQ,
                                        children: (0, c.jsx)(ec.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: r }),
                                        }),
                                    }),
                                    null != p &&
                                        "marketingPageBanner" === p.properties.properties.oneofKind &&
                                        (0, c.jsx)(ez.x, {
                                            componentId: p.id,
                                            promotionBannerMarketingComponentFields:
                                                p.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    }),
);
var nR = s(820081),
    n_ = s(140735),
    nI = s(401432),
    nT = s(580630),
    nv = s(795269),
    nP = s(773669),
    nS = s(84483),
    ny = s(864386),
    nD = s(509826),
    nM = s(202600);
function nO(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(nR.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n_.A, { children: ex.intl.string(ex.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(nI.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n_.A, { children: ex.intl.string(ex.t.l4qZrp) }),
              ],
          });
}
function nL(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(nD.nM, nD.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: nD.nx,
                children: (0, c.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: nD.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(nO, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: nD.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(nO, { includes: !!i.includes }),
            }),
        ],
    });
}
function nk(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(nD.nM, nD.Gf),
                children: (0, c.jsxs)("td", {
                    className: nD.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(el.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(ec.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(nL, { ...e }, e.id)),
        ],
    });
}
function nU(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tH.PremiumTypes.TIER_0 ? ex.intl.string(ex.t.tUbSDK) : ex.intl.string(ex.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: nD.nn,
        children: [
            (0, c.jsxs)("div", {
                className: nD.KS,
                children: [
                    (0, c.jsx)(ed.t, { colorClass: nD.oG }),
                    (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function nG(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, nT.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: nD.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: nD.Cr,
                    children: (0, c.jsx)(el.D, { variant: "heading-xl/bold", children: ex.intl.string(ex.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: nD.Hn,
                    children: (0, c.jsx)(nU, {
                        premiumType: tH.PremiumTypes.TIER_0,
                        priceString: (0, nT.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: nD.Hn,
                    children: (0, c.jsx)(nU, { premiumType: tH.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let nw = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tH.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, eG.V)(),
            l = r?.subscription_trial?.sku_id,
            d = (0, eU.O)(),
            m = (0, es.YJ)(d),
            g = null != d && (0, es.U9)(d, tH.pe.TIER_2) && m === tH.gD.PREMIUM_MONTH_TIER_2,
            x = (0, es.N1)(m),
            f = null != x ? `${x}/${(0, eO.FJ)(tH.WT.MONTH)}` : "",
            p = (0, eO.JM)(tH.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eO.JM)(tH.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, t2.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: ex.intl.string(ex.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: ex.intl.string(ex.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: ex.intl.string(ex.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: ex.intl.string(ny.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, s0.lk)(s4.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = sx.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sf.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, nS.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ex.intl.string(ex.t.NG1e6l),
                            subtitle: ex.intl.format(si.default.uJcbMv, {
                                termsLink: eM.A.getArticleURL(e1.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ex.intl.string(si.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        r &&
                            s.rows.push({
                                id: 25,
                                label: ex.intl.string(si.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            s.rows.push({
                                id: 26,
                                label: ex.intl.string(sC.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: ex.intl.formatToPlainString(ex.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: ex.intl.string(s7.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: ex.intl.string(ex.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: ex.intl.string(ex.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: ex.intl.string(ex.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: ex.intl.string(ex.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: ex.intl.string(ex.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: ex.intl.string(ex.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: ex.intl.string(ex.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: ex.intl.string(ex.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: ex.intl.string(ex.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, eO.EJ)(tH.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eO.EJ)(tH.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: ex.intl.string(ex.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: ex.intl.string(ex.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: ex.intl.string(ex.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: ex.intl.string(ex.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: ex.intl.formatToPlainString(ex.t.nyhDpw, {
                                        numBoosts: tH.M4,
                                        percentageOff: (0, nT.l9)(nP.default.locale, tH.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: ex.intl.string(ex.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: ex.intl.string(ex.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: ex.intl.string(ex.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: ex.intl.formatToPlainString(ex.t["8crdzJ"], { maxChars: e1.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: ex.intl.string(ex.t["il8+nC"]),
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
            let e = null != r ? ex.intl.string(ex.t.IBYG5U) : ex.intl.string(ex.t.TR2B4T);
            t = (0, c.jsx)(nv.R, { className: u()(nD.Io, nD.SP), text: e });
        }
        let E = l === tH.pe.TIER_0 || n === tH.PremiumTypes.TIER_0;
        return (0, c.jsx)(C.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(nD.zr, s),
                children: [
                    (0, c.jsx)(el.D, {
                        className: nD.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: ex.intl.string(ex.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: nD.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(nD.fO, { [nD.Vd]: E, [nD.hA]: !E }),
                                children: [
                                    !E && t,
                                    (0, c.jsx)("div", { className: nD.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: nD.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: nM, alt: "", className: nD.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: nD.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: nD.tp,
                                children: [
                                    (0, c.jsx)(nG, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: g,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(nk, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    nH = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, o.useCallback)(
                (e) => {
                    let s = l.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, n] = (0, o.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, r] = (0, o.useState)(e[0]);
        (0, o.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && r(e[0]);
        }, [i]);
        let l = (0, o.useRef)({});
        return (
            (0, o.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        n((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(l.current).forEach((t) => {
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
                                        (l.current[t] = e), null != e && (e.id = t);
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
                setActiveSectionId: r,
            }
        );
    };
var nF = s(818348),
    nB = s(952661);
let nV = () => {
    let e = (0, m.zy)();
    (0, v.P)(T);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        r = o.useRef(null),
        l = (0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        [d, x] = o.useState(l);
    o.useEffect(() => {
        if (l) return void x(!0);
        let e = s.current;
        if (null != e) return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
        function t(t) {
            t.target === e && x(!0);
        }
    }, [l]);
    let [f, p] = o.useState(!1),
        [h, N] = o.useState(!1),
        [E, j] = o.useState(!1),
        [b, R] = o.useState(!1),
        _ = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        I = null != _ ? (0, eO.EL)(_) : null,
        P = null != I ? eO.Ay.getSkuIdForPlan(I.planId) : null,
        S = null !== P && P !== tH.pe.TIER_2 ? tH.pe.TIER_2 : null,
        y = (0, eL.cg)(),
        { analyticsLocations: D } = (0, C.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        R(!0);
    }, []);
    let M = (0, iK.DK)(iW.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: k } = (0, s0.lk)(s4.rE.NITRO_HOME_MARKETING),
        U = M && k ? nr.NI.COMBINED_ORBS : k ? nr.NI.ORB_MULTIPLIER : M ? nr.NI.ORB_REWARDS : null,
        G = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t ? U : t === nr.NI.THREE_P_PROMOTIONS ? nr.NI.THREE_P_PROMOTIONS : null;
        }, [e.search, U]);
    iw(G ?? "", null != G);
    let { navBarSections: w, activeSectionId: H } = nH([iq.HOME, iq.WHATS_NEW, iq.BEST_OF_NITRO, iq.PLANS, iq.COMPARE]),
        { home: F, whatsNew: B, bestOfNitro: W, plans: K, compare: X } = w,
        Y = (0, c.jsxs)("div", {
            ref: s,
            className: u()(nB.kL, nB.Gd, nB.iI, { [nB.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(iZ, { className: nB.yH }),
                (0, c.jsx)(i7, { navBarSections: w, activeSectionId: H, isAnimationComplete: d }),
                (0, c.jsxs)("div", {
                    className: nB.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: nB.qY,
                            ref: F.ref,
                            children: (0, c.jsx)(V.L, {
                                innerRef: n,
                                onChange: (e) => p(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(nb, {
                                    ref: n,
                                    subscriptionTier: S,
                                    isEligibleForBogoPromotion: y,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: nB.So,
                            ref: B.ref,
                            children: (0, c.jsx)(no, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: nB.KQ,
                            ref: W.ref,
                            children: (0, c.jsx)(nd, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: nB.s5,
                            ref: K.ref,
                            children: (0, c.jsx)(V.L, {
                                innerRef: i,
                                onChange: (e) => N(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(iX.jP, { innerRef: i }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: nB.aC, ref: X.ref, children: (0, c.jsx)(nw, {}) }),
                    ],
                }),
                (0, c.jsx)(V.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !E &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            j(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: nB._Z }),
                }),
                (0, c.jsx)(i6, { ref: r }),
                (0, c.jsx)(i$, { isVisible: !f && !h && b, subscriptionTier: S, isEligibleForBogoPromotion: y }),
                (0, c.jsx)(iZ, { className: nB.MF }),
            ],
        });
    return (0, c.jsx)(t7.N, {
        theme: nF.NJ.DARKER,
        children: (e) => (0, c.jsx)(z.Gt, { className: u()(nB.XG, e), ref: t, children: Y }),
    });
};
var nz = s(862482),
    nW = s(412260),
    nK = s(662367),
    nX = s(374403),
    nY = s(396375),
    nQ = s(815846),
    nZ = s(860839),
    nq = s(695366),
    nJ = s(107736);
let n$ = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nu.ar)();
    if (null == i) return null;
    let l = null != i ? eO.Ay.getPremiumPlanItem(i) : null;
    if (
        (eO.Ay.isBoostOnlySubscription(i)
            ? (t = ex.intl.string(ex.t.Uj0md3))
            : null != l && (t = eO.Ay.getTierDisplayNameByPlanId(l.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != l ? eO.Ay.getSkuIdForPlan(l.planId) : null) === tH.pe.TIER_1;
    return (
        (s = null != a ? a : r ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(t9.Z, {
            className: u()(nJ.kL, n, { [nJ.He]: r }),
            type: t9.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(nq.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(nJ.Kk, { [nJ.Pt]: r }),
                }),
                (0, c.jsx)(ec.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? ex.intl.format(ex.t["tYuv+T"], {
                              helpdeskArticle: eM.A.getArticleURL(e1.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : ex.intl.format(ex.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var n0 = s(697335);
let n1 = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(n0.zr, { [n0.N]: t }),
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
                        (0, c.jsx)("stop", { className: n0.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: n0.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: n0.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: n0.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: n0.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var n2 = s(900797),
    n6 = s(847374),
    n3 = s(812993),
    n7 = s(504041);
function n9(e) {
    let { className: t } = e;
    return (0, c.jsx)(n3.Lp, { className: u()(n7.T, t), text: ex.intl.string(ex.t.EYxi0o) });
}
var n5 = s(904788),
    n8 = s(507553),
    n4 = s(255438);
let ae = "/assets/5b4fec8511c3676a.svg",
    at = "/assets/0838bda6ecd20d91.svg";
function as(e, t, s) {
    return (0, sW.M)(e) ? t : s;
}
var ai = s(365742);
function an(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(i3.D, {
        onClick: s,
        className: ai.customButton,
        children: [
            t ? ex.intl.string(ex.t.maZaN3) : ex.intl.string(ex.t["37C26f"]),
            t
                ? (0, c.jsx)(n2.t, { size: "md", color: "currentColor", className: ai.arrow })
                : (0, c.jsx)(n6.a, { size: "md", color: "currentColor", className: ai.arrow }),
        ],
    });
}
function aa(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: r,
            isNew: l = !1,
            isEarlyAccess: o = !1,
        } = e,
        { analyticsLocations: d } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(C.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(ai.perkCard, i),
            children: [
                l
                    ? (0, c.jsx)(n5.A, {
                          className: ai.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(n9, { className: ai.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, ai.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(el.D, {
                            variant: "heading-lg/extrabold",
                            className: ai.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: ai.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let ar = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, sK.Ay)(),
                n = (0, sQ.X)("usePerkCards"),
                a = (0, th.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eO.Ay.canUsePremiumProfileCustomization(e);
                }),
                r = (0, n4.Xq)(tH.f3 / 1024, { useKibibytes: !0 });
            return {
                badge: {
                    title: ex.intl.string(ex.t.SS87rQ),
                    description: ex.intl.string(ex.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: ex.intl.string(ex.t["5cYMu0"]),
                    description: ex.intl.string(ex.t.vxk9va),
                    imageSource: as(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: ex.intl.string(ex.t["/xvEMy"]),
                    description: ex.intl.string(ex.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: ex.intl.string(ex.t.OuItFi),
                    description: ex.intl.string(ex.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: ex.intl.string(ex.t["R2IV/Q"]),
                    description: ex.intl.string(ex.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: ex.intl.string(ex.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? ex.intl.formatToPlainString(ex.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : ex.intl.formatToPlainString(ex.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                n8.A.setState({ scrollPosition: iI._F.TRY_IT_OUT }),
                                    t(eS.X.PROFILE_PANEL, { analyticsLocations: e });
                            }
                        }
                        return a
                            ? ex.intl.format(ex.t.aj1pfZ, { onCheckItOutClick: t })
                            : ex.intl.format(ex.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: ex.intl.string(ex.t.BUScid),
                    description: ex.intl.string(ex.t.vN6XpQ),
                    imageSource: as(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: as(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: as(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ex.intl.string(ex.t["lGcW+c"]),
                    description: ex.intl.string(ex.t["/fDyO+"]),
                    imageSource: as(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ex.intl.string(ex.t["1c+xwT"]),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: as(i, at, ae),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: as(i, at, ae),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: as(i, at, ae),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: ex.intl.string(ex.t.RSXQYO),
                    description: ex.intl.string(ex.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: ex.intl.string(ex.t["uZt5q/"]),
                    description: ex.intl.string(ex.t.ZK3ZoX),
                    imageSource: as(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: ex.intl.formatToPlainString(ex.t.jqhAdL, { premiumMaxSize: r }),
                    description: ex.intl.formatToPlainString(ex.t["HI+cfm"], { premiumMaxSize: r }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: ex.intl.string(ex.t.NaGpTf),
                    description: ex.intl.string(ex.t["A8O/Qw"]),
                    imageSource: as(i, iT, iv),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ai }),
        l = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, C.Ay)(),
        m = [
            r.emoji,
            r.streaming,
            r.upload,
            r.customAppIcons,
            r.soundboard,
            r.videoBackground,
            r.superReactions,
            r.stickersPremiumPerk,
            r.badgeAlt,
        ];
    return (0, c.jsxs)("div", {
        className: u()(ai.perksContainer, t, {
            [ai.partiallyHidden]: i && !n,
            [ai.subscriberNitroHome]: i,
            [ai.reducedMotion]: l,
        }),
        children: [
            (0, c.jsx)(el.D, {
                variant: "heading-xxl/extrabold",
                className: ai.perksTitle,
                children: i ? ex.intl.string(ex.t.QX14gI) : ex.intl.string(ex.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(ai.perkCardContainer, { [ai.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aa, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [ai.sizeGizmo]: !n, [ai.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(an, {
                                onClick: function () {
                                    L.default.track(e1.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n);
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(ai.cover, { [ai.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var al = s(194509),
    ac = s(222214);
let ao = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: e1.JJy.MARKETING_FLOATING_CTA },
        l = (0, sK.Ay)(),
        o = (0, iY.M)(l);
    return (0, c.jsx)(ei.animated.div, {
        className: u()(ac.iE, { [ac.H8]: i, [ac.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? ac.zW : ac.iJ,
            children: [
                (0, c.jsx)(nY.A, {
                    color: o ? nz.XD.BRAND_INVERTED : void 0,
                    className: u()(ac.x6, { [ac.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : ac.PJ,
                }),
                (0, c.jsx)(al.A, { className: ac.x6, premiumModalAnalyticsLocation: r }),
            ],
        }),
    });
};
var ad = s(93805);
function au(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: s,
            containerClassName: i,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: r,
            isEligibleForBogoPromotion: l,
        } = e,
        o = l
            ? (0, c.jsx)(nY.A, {
                  color: r ? nz.XD.BRAND_INVERTED : void 0,
                  className: u()(ad.x6, ad.Ph, n, { [ad.Sq]: t && a, [ad.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : ad.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(nY.A, {
                  color: r || !a ? nz.XD.BRAND_INVERTED : void 0,
                  className: u()(ad.x6, ad.Ph, n, { [ad.Sq]: t && a, [ad.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(al.A, { className: u()(ad.x6, n), color: a ? void 0 : nz.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(ad.UD, i), children: [o, " ", d] });
}
function am() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(n5.p, { className: ad.zd }),
            (0, c.jsx)(n5.p, { className: ad.G }),
            (0, c.jsx)(n5.p, { className: ad.zy }),
            (0, c.jsx)(n5.p, { className: ad.GX }),
        ],
    });
}
function ag(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = nA();
    return (0, c.jsx)(ec.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(ad.h_, { [ad.If]: s, [ad.jn]: i }),
        children: ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let ax = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, C.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, ek.QQ)(),
        o = (0, nu.ar)(),
        d = (0, eL.cg)(),
        m = (0, iV.b)().length > 0,
        g = ex.intl.string(ex.t.YCZldK);
    return (0, c.jsx)(C.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(ad.kL, s, { [ad.V1]: !o, [ad.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? ad.I6 : ad.G1,
                    children: [
                        (0, c.jsx)(tm.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(el.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: g,
                            }),
                        }),
                        m
                            ? (0, c.jsx)("div", {
                                  className: ad.DF,
                                  children: (0, c.jsx)(nf.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(ag, {}),
                        d || l
                            ? (0, c.jsx)("div", {
                                  className: ad.UD,
                                  children: (0, c.jsx)(al.A, { className: u()(ad.x6, i), color: nz.XD.WHITE }),
                              })
                            : (0, c.jsx)(au, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(ag, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(am, {}),
            ],
        }),
    });
});
var af = s(22118),
    ap = s(918676),
    ah = s(967603);
function aN(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(n1, { lifted: t }) : null;
}
let aA = () => {
        (0, v.P)(T);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, sK.Ay)(),
            n = (0, sW.M)(i),
            [a, r] = o.useState(!1),
            [l, d] = o.useState(!1),
            [m, x] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eO.EL)(h) : null,
            E = null != N ? eO.Ay.getSkuIdForPlan(N.planId) : null,
            j = null !== E && E !== tH.pe.TIER_2 ? tH.pe.TIER_2 : null,
            b = (0, eG.V)(),
            R = b?.subscription_trial?.sku_id,
            _ = (0, nu.ar)(),
            I = (0, eL.cg)(),
            P = (0, tQ.Gh)("premium-marketing-settings-page"),
            S = I ?? !1,
            y = (0, g.bG)([nW.A], () => {
                let e = nW.A.getMarketingComponentByType(ej.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, nX.Q)(),
            { analyticsLocations: M } = (0, C.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let k = (0, c.jsx)("div", {
            className: ah.dY,
            children: (0, c.jsx)(V.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(nZ.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(nY.A, {
                        showIcon: !1,
                        subscriptionTier: tH.pe.TIER_0,
                        className: ap.Ph,
                        look: nz.pR.OUTLINED,
                        color: nz.XD.WHITE,
                        buttonShineClassName: ap.Qr,
                    }),
                    tier2CTAButton:
                        R === tH.pe.TIER_0
                            ? (0, c.jsx)(nY.A, {
                                  showIcon: !1,
                                  subscriptionTier: tH.pe.TIER_2,
                                  className: ap.Ph,
                                  look: nz.pR.OUTLINED,
                                  color: nz.XD.WHITE,
                                  buttonShineClassName: ap.Qr,
                              })
                            : (0, c.jsx)(nY.A, {
                                  color: nz.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tH.pe.TIER_2,
                                  className: ap.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: ap.Ac },
                                  buttonShineClassName: ap.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: ah.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(n$, { premiumSubscription: h, className: u()(ah.R3, { [ah.aZ]: _ }) }),
                _ &&
                    (0, c.jsxs)("div", {
                        className: ah.n1,
                        children: [
                            (0, c.jsx)(aN, { inOfferExperience: _ }),
                            P &&
                                (0, c.jsx)(tJ.l, {
                                    className: ah.ij,
                                    size: "md",
                                    location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [ah.V1]: !_ }),
                    children: [
                        null != y && (0, c.jsx)(nQ.c, { className: ah.w$, config: y }),
                        (0, c.jsxs)("div", {
                            className: ah.iS,
                            children: [
                                P &&
                                    !_ &&
                                    (0, c.jsx)(tJ.l, {
                                        className: ah.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(V.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(ax, {
                                        ref: t,
                                        subscriptionTier: j,
                                        className: u()({ [ah.p7]: _, [ah.Pw]: _, [ah.AG]: I, [ah.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: ah.Ol, children: (0, c.jsx)(nK.I, { component: D }) }),
                k,
                (0, c.jsx)(ar, { className: ah.B_ }),
                (0, c.jsx)("div", { className: ah.aC, children: (0, c.jsx)(af.A, { className: ah.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: ah.hz }),
                (0, c.jsx)(ao, {
                    isVisible: !a && !l && f,
                    subscriptionTier: j,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: I,
                }),
                (0, c.jsx)(V.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            x(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: ah._Z }),
                }),
                (0, c.jsx)("img", {
                    src: iF,
                    className: ah.Kw,
                    width: 112,
                    height: 85,
                    alt: ex.intl.string(ex.t.X4IxWL),
                }),
            ],
        });
    },
    aC = function (e) {
        let { entrypoint: t } = e,
            s = (0, eG.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, iz.NF)({ trialOffer: s }),
            a = (0, iz.Tp)(),
            r = (0, g.bG)([eJ.A], () => eJ.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                !0 === n && (0, iz.QG)(), !0 === a && (0, iz.ne)(r), (null != s || null != i) && (0, G.u1)(s, i);
            }, [s, i, n, a, r]),
            t)
        ) {
            case tH.tU.UserSettings:
                return (0, c.jsx)(aA, {});
            case tH.tU.ApplicationStoreHome:
                return (0, c.jsx)(nV, {});
            default:
                return null;
        }
    };
var aE = s(738783);
let aj = function (e) {
    let { entrypoint: t = tH.tU.UserSettings } = e;
    (0, v.P)(T);
    let s = (0, j.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = F("nitro_member_hub_header"),
        n = (0, U.ds)(),
        { sourceAnalyticsLocations: a, analyticsLocations: r } = (0, C.Ay)(A.A.PREMIUM_MARKETING),
        l = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        d = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        _ = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        I = _?.id,
        w = (0, eG.V)(),
        H = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        B = (0, b.Y)(tH.T7),
        [V, z] = o.useState(!0),
        W = o.useRef(0),
        K = (0, k.YE)(_, tH.PremiumTypes.TIER_2),
        X = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        Y = null != X && X.status === e1.Dmq.CANCELED;
    (0, iV.b)(),
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                await Promise.all([E.hP(), E.$o(), (0, p.zS)(null, null, e1.tF5.DISCOVERY)]),
                    (W.current = Date.now() - e),
                    z(!1);
            });
        }, []),
        o.useEffect(() => {
            V ||
                L.default.track(e1.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: W.current,
                });
        }, [a, V]),
        o.useEffect(() => {
            s && (null != w || null != H) && (0, G.u1)(w, H);
        }, [s, w, H]);
    let Q = (0, m.zy)(),
        Z = o.useRef(!1),
        q = l && d && B,
        [J, $] = o.useState(q);
    q && !J && $(!0),
        o.useEffect(() => {
            if (Z.current || !q) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tH.pe.TIER_0, nitro: tH.pe.TIER_2 }[e];
            null != t &&
                ((Z.current = !0),
                (0, S.bG)(e1.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: t, analyticsLocations: r }));
        }, [q, Q.search, r]);
    let ee = (0, g.bG)([y.A], () => y.A.enabled),
        et = t === tH.tU.ApplicationStoreHome,
        es = ee
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(R.uK, {})
              : et && K
                ? (0, c.jsx)(C.f5, { value: r, children: (0, c.jsx)(iB, { userId: I }) })
                : J
                  ? null
                  : (0, c.jsx)("div", { className: u()(aE.kL, aE.Lq), children: (0, c.jsx)(x.y, {}) });
    if (null != es) {
        let e = !ee && !s && et && K;
        return i && e && !n && !Y ? es : (0, c.jsxs)(c.Fragment, { children: [et && (0, c.jsx)(N.A, {}), es] });
    }
    return (0, c.jsx)(C.f5, { value: r, children: (0, c.jsx)(aC, { entrypoint: t }) });
};
