s.d(t, { A: () => aQ }), s(323874), s(14289), s(35956);
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
    g = s(17928),
    x = s(289873),
    f = s(228366),
    p = s(73825),
    h = s(974544),
    N = s(107834),
    A = s(793574),
    j = s(688810),
    b = s(277984),
    C = s(86379),
    E = s(160946),
    T = s(545075),
    R = s(840251),
    v = s(688151);
let I = new R.E([], v.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = s(611924),
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
let B = (0, w.mj)({
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
function H(e) {
    let t = B.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
s(321073);
var F = s(554146),
    V = s(269115),
    z = s(689175),
    W = s(131607),
    K = s(961250),
    Y = s(366505),
    X = s(321191),
    q = s(903209),
    Z = s(927813),
    Q = s(107857);
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
    es = s(511484),
    ei = s(534740),
    en = s(661531),
    ea = s(717421),
    el = s(331322),
    er = s(297264),
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
        { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
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
                        (0, c.jsxs)(el.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: ef.iQ,
                            children: [
                                (0, c.jsx)(er.D, {
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
    ej = s(871261);
let eb = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, j.Ay)(s);
    return (0, c.jsx)(j.f5, {
        value: n,
        children: (0, c.jsxs)(eN.h, {
            className: u()(ej.kL, ej.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: ej.FS,
                    children: [
                        (0, c.jsx)(er.D, {
                            variant: "heading-xxl/bold",
                            className: ej.R_,
                            children: ex.intl.string(ex.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(ec.E, { variant: "text-md/medium", children: ex.intl.string(ex.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: ej.SB,
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
                    className: ej._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eC = s(877624);
let eE =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eT(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: eE,
        srcSet: `${eE} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var eR = s(502572),
    ev = s(192308),
    eI = s(775602),
    e_ = s(366999),
    eP = s(531260),
    eS = s(780964),
    ey = s(766075),
    eD = s(786300),
    eM = s(975571),
    eO = s(158045),
    eL = s(960851),
    ek = s(89366),
    eU = s(724651),
    eG = s(732280),
    ew = s(549996),
    eB = s(172218);
function eH() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eB.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eF = s(949804);
let eV = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eF.i,
        children: (0, c.jsx)(ec.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var ez = s(371764),
    eW = s(103411),
    eK = s(778712),
    eY = s(97808),
    eX = s(590251),
    eq = s(144165),
    eZ = s(854627),
    eQ = s(427262),
    eJ = s(851746),
    e$ = s(326084),
    e0 = s(664654),
    e1 = s(652215);
function e2() {
    var e, t, s;
    let { referralSentUsers: i } = (0, e0.J)(),
        n = (0, g.bG)([eJ.A], () => eJ.A.getRecipientStatus()),
        a = (0, g.bG)([eJ.A], () => eJ.A.getHasEligibleFriends()),
        l = n.size === e0.Z,
        r =
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
    return { referralSentUsers: i, nReferralsSent: n.size, hasEligibleFriends: a, allSent: l, bodyText: r };
}
var e6 = s(212737),
    e7 = s(901532);
function e3(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    L.default.track(e1.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, ev.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        });
}
function e5(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t.id, size: eK._3.SIZE_24 });
    return (0, c.jsx)(
        eY.eu,
        { className: e7.bj, src: s, "aria-label": (0, eQ.mG)(t), size: eK._3.SIZE_24, ...i },
        t.id,
    );
}
function e9(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e7.p, children: t });
}
function e8(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e7.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < e0.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e5, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e9, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function e4(e) {
    let { nReferralsSent: t, imageSize: s = 93, backgroundClassName: i, ringClassName: n } = e;
    return (0, c.jsx)(eX.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e7.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e7.e0,
        overlayClassName: t === e0.Z ? e7.ys : void 0,
        children: (0, c.jsx)(eq._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: s,
            width: s,
            zoomable: !1,
        }),
    });
}
function te(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: l } = e2();
    return (0, c.jsxs)("div", {
        className: u()(e7.kL, t),
        children: [
            (0, c.jsx)("div", { className: e7.G3, children: (0, c.jsx)(e4, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: e7.IH,
                children: [
                    (0, c.jsx)(e8, { referralSentUsers: s, className: e7.GV }),
                    (0, c.jsxs)("div", {
                        className: e7.n4,
                        children: [
                            (0, c.jsx)(er.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ex.intl.string(ex.t.USo4s7),
                            }),
                            (0, c.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, c.jsx)(eo.$, {
                        variant: "primary",
                        disabled: !1 === n || !0 === a,
                        text: ex.intl.string(ex.t.Lm2nFc),
                        onClick: () =>
                            e3({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
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
let tl = function (e) {
    let { expiresAt: t, className: s } = e,
        i = (0, tn.A)(ti()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: n, hours: a, minutes: l, seconds: r } = i,
        o = [
            { unitValue: n, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: r, unitType: "seconds" },
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
var tr = s(473702),
    tc = s(609425),
    to = s(660184),
    td = s(16716);
function tu() {
    let e = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tc.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eZ.A)({ userId: e?.id, size: eK._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eQ.mG)(e);
    return (0, c.jsxs)("div", {
        className: td.kL,
        children: [
            (0, c.jsx)("div", {
                className: td.my,
                children: (0, c.jsx)(eY.eu, {
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
        children: (0, c.jsx)(er.D, {
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
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: l } = e2();
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
                            (0, c.jsx)(er.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ex.intl.string(ex.t.USo4s7),
                            }),
                            (0, c.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
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
                    e3({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var th = s(702841),
    tN = s(676279),
    tA = s(396583),
    tj = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tb = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tC = (e) => {
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
        u = (0, ea.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [g, x] = (0, o.useState)(1),
        f = (0, ea.z)(
            null != s
                ? {
                      from: { scale: g > 0 ? s.startScale : s.endScale },
                      to: { scale: g > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
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
                      config: { duration: t.duration * r },
                      onRest: () => h((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, o.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, b] = (0, o.useState)(0),
        [C, E] = (0, o.useState)(1),
        T = (0, ea.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tA.A)(() => {
        b(C * (0.5 * Math.random() * 5 + 2.5)), E((e) => -1 * e);
    }, A),
    l)
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
                  translateX: a ? T.xOffset.to((e) => `${e}px`) : 0,
                  scale: f.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tE = s(181195);
let tT = function (e) {
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
        keyAssetClassName: g,
        starAssetClassName: x,
        animationSpeedScale: f = 1,
        blurScale: p = 1,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(tE.nJ, i),
                    children: (0, c.jsx)(tC, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tj.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tb.UP,
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
                    className: u()(tE.IN, n),
                    children: (0, c.jsx)(tC, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tj.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tb.DOWN,
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
                    className: u()(tE.Gj, a),
                    children: (0, c.jsx)(tC, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tj.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tb.DOWN,
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
            null != l &&
                (0, c.jsx)("div", {
                    className: u()(tE.FV, l),
                    children: (0, c.jsx)(tC, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tj.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tb.UP,
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
            null != r &&
                (0, c.jsx)("div", {
                    className: u()(tE.E1, r),
                    children: (0, c.jsx)(tC, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tj.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tb.UP,
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
var tR = s(607470);
let tv =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tI = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: n,
            assetClassName: a,
            animationSpeedScale: l = 1,
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
                  children: (0, c.jsx)(tC, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tj.SINE },
                      parallaxAnimationData: {
                          pathDirection: tb.UP,
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
                                tR.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tv }),
                                },
                                tv,
                            ),
                  }),
              });
    },
    t_ = function (e) {
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
                keyAssetClassName: g,
                starAssetClassName: x,
                animationSpeedScale: f = 1,
            } = e,
            p = (0, th.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
            h = (0, tN.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tI, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, c.jsx)(tT, {
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
    return (0, c.jsx)(t_, {
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
            buttonVisibilityRef: l,
            shouldShowReferralProgressBar: r,
            marketingBanner: o,
            heroButtons: d,
        } = e,
        { visibilityPercentageRef: m, visibilityPercentage: x } = eH(!(0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion)),
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
        p = o ?? (r ? (0, c.jsx)(tp, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, i),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(tD.W2, tD.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(el.B, {
                    align: "start",
                    gap: 32,
                    className: tD.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(el.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(el.B, {
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
            s = (0, th.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: tO.BI,
                    children: (0, c.jsx)(tC, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tj.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tb.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, c.jsx)("img", { src: tL, alt: "", className: tO.Q }),
                    }),
                }),
                (0, c.jsx)(tT, {
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
    return (0, c.jsx)(t_, {
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
    let e = (0, th.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
    return (0, c.jsx)(tT, {
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
var tB = s(202541);
function tH(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tD.ap,
            children: [
                (0, c.jsxs)(el.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, c.jsx)(eV, { text: ex.intl.string(ex.t.yhldRB) }),
                        (0, c.jsxs)(el.B, {
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
                        (0, c.jsxs)(el.B, {
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
                    children: [(0, c.jsx)(eT, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(tw, {})],
                }),
            ],
        }),
    });
}
function tF(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eH(!(0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tD.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tD.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(el.B, {
                    align: "start",
                    gap: 24,
                    className: tD.E2,
                    children: [
                        (0, c.jsxs)(el.B, {
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
                        (0, c.jsxs)(el.B, {
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
                (0, c.jsx)("div", { className: tD.Tg, children: (0, c.jsx)(tG, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tV(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: n } = e,
        {
            headingText: a,
            headingTop: l,
            showPill: r,
            shouldShowChurnVariant: o,
            premiumSubscription: d,
            userDiscountOffer: m,
            discountedPrice: x,
            buttonVisibilityRef: f,
        } = tW(),
        { isInNitroHomeHeaderTreatment: p } = H("subscriber_home_hero"),
        h = $("subscriber_home_hero"),
        { analyticsLocations: N } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        b = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
        C = (0, eL.cg)(),
        E = null != d && d.status === e1.Dmq.CANCELED,
        T = p && !E,
        R = null;
    null != b &&
        "marketingPageBanner" === b.properties.properties.oneofKind &&
        (R = (0, c.jsx)(ez.x, {
            componentId: b.id,
            promotionBannerMarketingComponentFields: b.properties.properties.marketingPageBanner,
        }));
    let v = R;
    null == v && n && !T && (v = (0, c.jsx)(te, {}));
    let I = (0, eG.V)(),
        _ = (0, eU.O)(),
        P = (0, es.U9)(_, tB.pe.TIER_2) ? tB.pe.TIER_2 : void 0,
        S = null != d && d.status !== e1.Dmq.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
        y = (0, eP.A)(),
        D = y.isFractionalPremiumActive && !S && null == v && !o,
        { visibilityPercentageRef: M, visibilityPercentage: O } = eH(!(0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion));
    if (i)
        return h
            ? (0, c.jsx)(tF, { fpEndsAt: y.currentEntitlementEndsAt, className: t, buttonVisibilityRef: f })
            : (0, c.jsx)(tH, { fpEndsAt: y.currentEntitlementEndsAt, className: t, buttonVisibilityRef: f });
    if (T) {
        let e = D
            ? (0, c.jsxs)("div", {
                  className: tD.UJ,
                  children: [
                      (0, c.jsx)(tt.A, {
                          size: "md",
                          hasActivePromotion: !!C,
                          subscriptionTier: I?.subscription_trial?.sku_id ?? P,
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
            headingTop: l,
            showPill: r,
            buttonVisibilityRef: f,
            shouldShowReferralProgressBar: n,
            marketingBanner: R,
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
                r && l,
                (0, c.jsxs)("div", {
                    className: tD.N1,
                    children: [
                        (0, c.jsx)(tk, { containerVisibilityPercentage: O }),
                        o &&
                            m?.expiresAt != null &&
                            (0, c.jsx)(tl, { expiresAt: m.expiresAt.toISOString(), className: tD.IZ }),
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
                                hasActivePromotion: !!C,
                                subscriptionTier: I?.subscription_trial?.sku_id ?? P,
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
                                        (e = tr.g.CONFIRM_DISCOUNT),
                                        void (0, ev.openModalLazy)(async () => {
                                            let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                await Promise.all([
                                                    s.e("91170"),
                                                    s.e("42394"),
                                                    s.e("23102"),
                                                    s.e("2285"),
                                                    s.e("97726"),
                                                    s.e("44459"),
                                                    s.e("98986"),
                                                    s.e("37467"),
                                                    s.e("60411"),
                                                    s.e("93637"),
                                                    s.e("80197"),
                                                    s.e("61275"),
                                                    s.e("30072"),
                                                    s.e("26572"),
                                                    s.e("18629"),
                                                    s.e("48132"),
                                                    s.e("64729"),
                                                    s.e("5549"),
                                                    s.e("62332"),
                                                    s.e("8607"),
                                                    s.e("27962"),
                                                    s.e("64827"),
                                                    s.e("7167"),
                                                    s.e("61060"),
                                                    s.e("52457"),
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
                v,
            ],
        }),
    });
}
let [tz, tW] = (0, eD.A)(),
    tK = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, U.ds)(),
            r = (0, ek.QQ)(),
            o = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            d = null != o && o.status === e1.Dmq.CANCELED && null != i,
            u = r && !d,
            m = ex.intl.string(ex.t.qYKftX),
            x = (0, eW.m)(),
            f = ex.intl.string(ex.t.ifwQZb),
            { fractionalState: p, endsAt: h } = (0, eP.A)(),
            N = (0, e_.Ay)(h, e_.yE.CREDITS_ENDS_IN),
            b = null;
        if (p === tB.xc.NONE || l) b = (0, c.jsx)(eV, { text: m });
        else {
            u = !0;
            let e = ex.intl.format(ex.t["yR+oDD"], {
                helpCenterLink: eM.A.getArticleURL(e1.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            b = (0, c.jsx)(eR.A, {
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
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)(tz.Provider, {
                value: {
                    headingText: f,
                    headingTop: b,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, c.jsx)(tV, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: x }),
            }),
        });
    };
var tY = s(820284),
    tX = s(742589),
    tq = s(909536),
    tZ = s(392943),
    tQ = s(876587),
    tJ = s(400669),
    t$ = s(590319),
    t0 = s(897351);
let t1 = function () {
    let e = (0, tq.Gh)("nitro_home_header"),
        t = o.useRef(null);
    return (0, c.jsxs)(tY.A, {
        section: e1.JJy.NAVIGATION,
        children: [
            (0, c.jsx)(tX.A, {
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
            e && (0, c.jsx)(tQ.O, { targetElementRef: t, body: ex.intl.string(ex.t.EqUw7K) }),
        ],
    });
};
var t2 = s(325499),
    t6 = s(562708),
    t7 = s(885574),
    t3 = s(43990),
    t5 = s(993077),
    t9 = s(139286),
    t8 = s(872725),
    t4 = s(920050),
    se = s(51965),
    st = s(375776),
    ss = s(727811),
    si = s(222652),
    sn = s(933287),
    sa = s(355982);
function sl(e) {
    let { openRewardModal: t } = e,
        s = (0, si.z)();
    if (s.kind === si.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: sa.R$,
            children: [
                (0, c.jsx)(tt.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tB.pe.TIER_2,
                }),
                (0, c.jsx)(eo.$, { variant: "secondary", size: "md", text: ex.intl.string(ex.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === ss.P.CLAIMED
            ? { text: ex.intl.string(sn.default.Plwzgf) }
            : { text: ex.intl.string(ex.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: sa.R$,
                children: [
                    (0, c.jsx)(se.A, {
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
            s.claimStatus === ss.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: sa.ed,
                    children: [
                        (0, c.jsx)(t7.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ex.intl.string(sn.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sr(e) {
    let { glowing: t = !1 } = e;
    (0, t9.A)({
        type: t6.ImpressionTypes.VIEW,
        name: t6.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t4.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ev.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("52283"), s.e("13088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(t3.N, {
        theme: e1.NJ8.DARKER,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, sa.kL),
                    children: (0, c.jsx)(t8.A, {
                        cardType: t5.s.CUSTOM,
                        cardClassName: sa.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: sa.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sa.j,
                                    children: [
                                        (0, c.jsx)("div", { className: sa._g }),
                                        (0, c.jsx)("div", { className: sa.$h }),
                                        (0, c.jsx)("div", { className: sa.Rv }),
                                        (0, c.jsx)("div", { className: sa.Lw }),
                                        (0, c.jsx)("div", { className: sa.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: sa.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: sa.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(er.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sa.DD,
                                            children: ex.intl.string(sn.default.RGT513),
                                        }),
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sa.h_,
                                            children: ex.intl.string(sn.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sl, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sc = s(744064);
function so(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, si.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === si.N.SUBSCRIBE
                ? n
                : {
                      ...n,
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, c.jsx)(sc.S, {
        id: t4.XBOX_PREMIUM_PERK_CARD_ID,
        title: ex.intl.string(sn.default.UVL9tD),
        description: ex.intl.string(sn.default["I+IXr0"]),
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
function sd(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(so, { ...e }) });
}
var su = s(54471),
    sm = s(574377);
function sg(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = sm.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && su.Jx, l), children: a }) : null,
        ],
    });
}
var sx = s(789861),
    sf = s(592909),
    sp = s(149995),
    sh = s(398523),
    sN = s(881373),
    sA = s(555393),
    sj = s(852218),
    sb = s(161319),
    sC = s(672787),
    sE = s(806343),
    sT = s(962995);
function sR() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sf.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sN.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        i = sh.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        n = (0, sp.Zk)({ location: "useHardwarePartnerPerkCards" }),
        a = (0, sp.S9)({ location: "useHardwarePartnerPerkCards" }),
        l = null === (0, sA.N)(),
        r = (0, t2.b)("useHardwarePartnerPerkCards"),
        { currentDate: d, nDaysInMonth: u } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = r ? void 0 : ex.intl.string(ex.t.y2b7CA),
            m = t
                ? {
                      id: t4.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ex.intl.string(sE.default.F0b4Z8),
                      description: ex.intl.formatToPlainString(sE.default["hworR+"], { validDates: (0, sx.a)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ex.intl.formatToPlainString(sE.default.g7iyvR, { date: (0, sx.m)() }),
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg",
                          alt: "Call of Duty: MW4",
                      }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                      ctaText: ex.intl.string(sE.default.fcopjf),
                      onCtaClick: () => (0, sC.P)({ partnerId: sj.Bt, analyticsLocations: e }),
                      analyticsOptions: { thirdPartyPartner: sj.Bt },
                      ctaDisabled: l,
                      ctaLoading: l,
                  }
                : null,
            g = s
                ? {
                      id: t4.LOGITECH_3PP_CARD_ID,
                      title: ex.intl.string(sT.default.OlObRa),
                      description: ex.intl.format(sT.default.ZGOJ8R, {
                          discountPercent: sN.aW,
                          termsUrl: eM.A.getArticleURL(e1.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: d.getDate() / u,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sC.P)({ partnerId: sj.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sj.XY },
                      ctaDisabled: l,
                      ctaLoading: l,
                  }
                : null;
        return {
            callOfDutyCard: m,
            logitechCard: g,
            steelseriesCard: i
                ? {
                      id: t4.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ex.intl.string(ex.t.m7PucM),
                      description: n
                          ? a
                              ? ex.intl.format(ex.t["1Zw6xL"], {})
                              : ex.intl.format(ex.t.KWdCO0, {})
                          : ex.intl.format(ex.t.zh1X7u, {}),
                      descriptionNote:
                          !a && n
                              ? ex.intl.format(ex.t.vblnHk, {
                                    partnerName: sj.CD[sj.Cs].label,
                                    helpdeskArticle: eM.A.getArticleURL(e1.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: d.getDate() / u,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sb.u)({ analyticsLocations: e, partnerIds: [sj.KS, sj.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sj.KS },
                      ctaDisabled: l,
                      ctaLoading: l,
                  }
                : null,
        };
    }, [r, e, t, d, s, u, i, n, a, l]);
}
var sv = s(166634);
let sI = "xgpp";
function s_(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, t2.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, logitechCard: a, steelseriesCard: l } = sR();
    if (!i) return null;
    let r = null != n || null != a || null != l;
    return (0, c.jsx)(sg, {
        id: sI,
        sectionClassName: u()(sv.uW, sv.Uv, sv.qr),
        heading: (0, c.jsx)(er.D, {
            variant: "display-sm",
            className: u()(sm.R_, su.U6),
            children: ex.intl.string(ex.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: su.JE, children: (0, c.jsx)(sr, { glowing: t === sI }) }),
        grid: r
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(sc.S, { ...n, containerClassName: sm.Nr, glowing: s === n.id }),
                      (0, c.jsx)(sd, { containerClassName: sm.Nr }),
                      null != a && (0, c.jsx)(sc.S, { ...a, containerClassName: sm.Nr, glowing: s === a.id }),
                      null != l && (0, c.jsx)(sc.S, { ...l, containerClassName: sm.Nr, glowing: s === l.id }),
                  ],
              })
            : null,
    });
}
var sP = s(687636),
    sS = s(67423);
let sy = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: u()(sP.iE, { [sP.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sP.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sS, className: sP.oU }),
                (0, c.jsxs)("div", {
                    className: sP.iQ,
                    children: [
                        (0, c.jsx)(er.D, {
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
                        void (0, ev.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("91170"),
                                s.e("42394"),
                                s.e("23102"),
                                s.e("2285"),
                                s.e("97726"),
                                s.e("44459"),
                                s.e("98986"),
                                s.e("37467"),
                                s.e("60411"),
                                s.e("93637"),
                                s.e("80197"),
                                s.e("61275"),
                                s.e("30072"),
                                s.e("26572"),
                                s.e("18629"),
                                s.e("48132"),
                                s.e("64729"),
                                s.e("5549"),
                                s.e("62332"),
                                s.e("8607"),
                                s.e("27962"),
                                s.e("64827"),
                                s.e("7167"),
                                s.e("61060"),
                                s.e("52457"),
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
                                    analyticsLocations: l,
                                    initialStep: tr.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sD = s(761508),
    sM = s(449543);
function sO(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sL(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sk(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sU = s(345394);
function sG(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sU.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sw(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sB(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sH(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sF(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sV(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sz = s(996682);
function sW(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: l = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, sz.A)({ "aria-label": s, "aria-hidden": i, role: n }),
        width: a,
        height: l,
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
function sK(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sY = s(78701);
function sX(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sY.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sq = s(462887),
    sZ = s(736653),
    sQ = s(259065),
    sJ = s(206835),
    s$ = s(591179),
    s0 = s(462463),
    s1 = s(878784),
    s2 = s(425713),
    s6 = s(696292),
    s7 = s(192444),
    s3 = s(617986),
    s5 = s(892227),
    s9 = s(81466),
    s8 = s(318254),
    s4 = s(490285),
    ie = s(165815);
let it = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, Y.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, s5.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: ie.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: ie.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ie.Pf,
                            children: [
                                (0, c.jsx)(s9.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(s4.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(s4.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: ie.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: ie.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ie.Pf,
                            children: [
                                (0, c.jsx)(s8.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(s4.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(s4.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var is = s(758836),
    ii = s(190107),
    ia = s(55684);
function il(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, s7.lk)(ii.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, Y.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: t4.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ex.intl.string(s4.default.hx5AFp),
                          description: ex.intl.format(s4.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(ia.lH, ia.yK),
                          footerContent: (0, c.jsx)(it, {}),
                          ctaText: ex.intl.string(s4.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(is.G2.ORBS)),
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
                          onCtaClick: () => (0, s3.mA)({ fromContent: s6.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: ia.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var ir = s(975807),
    ic = s(95035),
    io = s(862990),
    id = s(88001),
    iu = s(466919),
    im = s(817577);
function ig() {
    (0, ir.A)(id.TE);
}
function ix(e) {
    let t = (0, io.O9)(),
        i = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ev.openModalLazy)(async () => {
                      let { default: e } = await s.e("99709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tB.pe.TIER_2,
                      initialPlanId: tB.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: t4.PREMIUM_GROUP_CARD_ID,
                      title: ex.intl.string(iu.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              ex.intl.formatToPlainString(iu.default.JlyGQj, {
                                  totalSeats: id.aw,
                                  premiumGroupProductName: (0, id.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: ia.LF,
                                  children: (0, c.jsx)(ic.A, {
                                      onClick: ig,
                                      children: ex.intl.string(iu.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ex.intl.string(ex.t.oW0eUd),
                      primaryAsset: im,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: ex.intl.string(ex.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var ip = s(562819),
    ih = s(892035),
    iN = s(793943),
    iA = s(241988),
    ij = s(655752),
    ib = s(764231),
    iC = s(627380),
    iE = s(30084),
    iT = s(111881),
    iR = s(714206);
let iv =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    iI =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    i_ =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iP() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        n = (0, s$.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: a, logitechCard: l, steelseriesCard: r } = sR(),
        d = (0, t2.b)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: m } = (0, ih.z$)("useWhatsNewPerkCards"),
        x = (0, s0.A)({ analyticsLocations: i }),
        f = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, sQ.L)({ analyticsLocations: i }),
            );
        }, [i]),
        p = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, ip.L)({ analyticsLocations: i }),
            );
        }, [i]),
        h = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        N = (function (e) {
            let { fractionalState: t } = (0, eP.A)(),
                s = t === tB.xc.FP_ONLY,
                i = (0, s1.$F)(),
                n = (0, s1.Xb)(),
                a = i?.status === s1.Wo.UPCOMING || s,
                l = (0, s2.N)(i?.id),
                r = (function () {
                    let e = (0, s1.$F)(),
                        t = (0, ij.P)(),
                        s = (0, s1.Xb)();
                    if (null == e || null == t || null == s) return null;
                    let i = ti()(),
                        n = ti()(s),
                        a = e.status === s1.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        r = n.clone().add(a, "months"),
                        c = n.clone().add(l, "months").diff(r);
                    return Math.max(0, Math.min(1, (i.diff(r) - 864e5) / c));
                })(),
                c = (0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion) && !a,
                d = (0, iC.t)(),
                m = (0, ij.P)();
            return (0, o.useMemo)(() => {
                let t,
                    o = null != m ? ex.intl.string(m.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, ib.T)(tB.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === s1.Wo.UPCOMING
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
                                (0, ib.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let g = null;
                return (
                    null != l ? (g = a || c ? l.standard : l.ambientLarge) : s && (g = iR),
                    {
                        id: t4.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ex.intl.string(i.nameUnformattedNitro) : s ? ex.intl.string(ex.t.tx9Fvw) : "",
                        pillText: ex.intl.string(ex.t["jyYgZ+"]),
                        primaryAsset: g,
                        primaryAssetClassName: u()(iT.pq, { [iT.n6]: a, [iT.kE]: c }),
                        caption: null != n ? ex.intl.formatToPlainString(ex.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: r ?? void 0,
                        ctaText: ex.intl.string(ex.t.jVcuVY),
                        onCtaClick: () => (0, iE.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, a, c, n, r, s, d, m, e]);
        })(i),
        b =
            ((e = (0, Q.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription())),
            (s = (0, eh.q)(t, e === Q.Iz.NITRO_HOME_TILE)),
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
                                  src: iA,
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
        { nitroOrbsRewardsCard: C, questOrbMultiplierCard: E } = il("useWhatsNewPerkCards"),
        T = ix(i);
    return (0, o.useMemo)(() => {
        let e = [
                d ? null : a,
                d ? null : l,
                d ? null : r,
                C,
                E,
                T,
                {
                    id: t4.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ex.intl.string(ex.t.OLtTrt),
                    description: ex.intl.string(ex.t["di/pXR"]),
                    onCtaClick: n ? x : f,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    primaryAsset: iv,
                },
                {
                    id: t4.CLIENT_THEMES_CARD_ID,
                    title: ex.intl.string(ex.t.acc6h6),
                    description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: i_,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iN.nf)(iN.HP.CUSTOM_THEME);
                    },
                },
                m
                    ? null
                    : {
                          id: t4.PERMADECOS_CARD_ID,
                          title: ex.intl.string(ex.t.L14NZN),
                          description: ex.intl.string(ex.t.eCZkAI),
                          primaryAsset: (0, c.jsx)(sX, { alt: "", ariaHidden: !0 }),
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: n ? x : p,
                      },
                {
                    id: t4.CUSTOM_APP_ICONS_CARD_ID,
                    title: ex.intl.string(ex.t["GU+wqh"]),
                    description: ex.intl.string(ex.t["1uPk1Z"]),
                    primaryAsset: iI,
                    ctaText: ex.intl.string(ex.t.y9TxXV),
                    onCtaClick: h,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        if ((e.splice(+!!t, 0, N), null != b && e.splice(1, 0, b), m)) {
            let t = null != b ? 2 : 1;
            e.splice(t, 0, {
                id: t4.PROFILE_FRAMES_CARD_ID,
                title: ex.intl.string(ex.t.SGBDnu),
                description: ex.intl.string(ex.t.cMgegQ),
                pillText: ex.intl.string(ex.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: u()(ia.lH, ia.yK),
                ctaText: ex.intl.string(ex.t.jVcuVY),
                onCtaClick: () => (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(is.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > s && e.splice(s, e.length - s), e;
    }, [N, b, C, E, T, f, h, p, x, n, a, l, r, d, m]);
}
var iS = s(355097);
let iy = "/assets/1eb1b74667b4c0f0.svg",
    iD = "/assets/983b60e4fcaf973b.svg";
var iM =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iO = [
    { id: "bestof", label: () => ex.intl.string(ex.t.q1u7nQ) },
    { id: "appearance", label: () => ex.intl.string(ex.t.CUnZkZ) },
    { id: "upgrades", label: () => ex.intl.string(ex.t.KC5q8v) },
    { id: "vip", label: () => ex.intl.string(ex.t.DjEAcv) },
];
var iL = s(631255);
function ik(e) {
    e.stopPropagation();
}
function iU(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sZ.DP)(),
                t = (0, s$.X)("useFavoritesPerkCards"),
                s = (0, s1.Lh)(),
                i = (0, s2.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, sJ.A)({ scrollPosition: iS._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
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
                g = (0, s0.A)({ analyticsLocations: n }),
                x = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, sQ.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iP(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = il("useFavoritesPerkCards"),
                b = ix(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: t4.SERVER_BOOSTS_CARD_ID,
                            title: ex.intl.formatToPlainString(ex.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ex.intl.formatToPlainString(ex.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sO, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: t4.PROFILES_CARD_ID,
                            title: ex.intl.string(ex.t.xDRab3),
                            description: ex.intl.string(ex.t.yn6fWA),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: t ? g : a,
                            primaryAsset: (0, c.jsx)(sL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t4.HD_VIDEO_CARD_ID,
                            title: ex.intl.string(ex.t["/mQ5gg"]),
                            description: ex.intl.string(ex.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sk, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.CLIENT_THEMES_CARD_ID,
                            title: ex.intl.string(ex.t.acc6h6),
                            description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: i_,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t4.MORE_EMOJIS_CARD_ID,
                            title: ex.intl.string(ex.t.D8vIDT),
                            description: ex.intl.string(ex.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sG, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.LARGE_UPLOADS_CARD_ID,
                            title: ex.intl.string(ex.t.nL1WZV),
                            description: ex.intl.formatToPlainString(ex.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.CUSTOM_APP_ICONS_CARD_ID,
                            title: ex.intl.string(ex.t["GU+wqh"]),
                            description: ex.intl.string(ex.t["1uPk1Z"]),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iI,
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
                            primaryAsset: iv,
                            categories: ["appearance"],
                        },
                        {
                            id: t4.CUSTOM_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t["Cu/oFd"]),
                            description: ex.intl.string(ex.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sB, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.SPECIAL_STICKERS_CARD_ID,
                            title: ex.intl.string(ex.t.MQoVeb),
                            description: ex.intl.string(ex.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: ia.Uc,
                                children: (0, c.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.SUPER_REACTIONS_CARD_ID,
                            title: ex.intl.string(ex.t.qERvAA),
                            description: ex.intl.string(ex.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sF, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.ssVDYQ),
                            description: ex.intl.string(ex.t.aUSRMa),
                            primaryAsset: (0, sq.M)(e) ? iy : iD,
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.EARLY_ACCESS_CARD_ID,
                            title: ex.intl.string(ex.t["g/KRY6"]),
                            description: ex.intl.string(ex.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sV, { alt: "", ariaHidden: !0 }),
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
                                    : (0, c.jsx)(sW, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t4.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ex.intl.string(ex.t["MTD+7w"]),
                            description: ex.intl.string(ex.t.Bhs0s6),
                            ctaText: ex.intl.string(ex.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sK, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: t4.PERMADECOS_CARD_ID,
                            title: ex.intl.string(ex.t.L14NZN),
                            description: ex.intl.string(ex.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sX, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, b, a, l, r, d, u, m, x, g, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iM.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: iL.uW,
        children: [
            (0, c.jsx)(er.D, { variant: "display-sm", className: iL.R_, children: ex.intl.string(ex.t["Uh3+CA"]) }),
            (0, c.jsx)(sD.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iL.Lq,
                "aria-label": ex.intl.string(ex.t["Uh3+CA"]),
                children: iO.map((e) =>
                    (0, c.jsx)(sD.V.Item, { id: e.id, className: iL.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sM.A,
                {
                    gap: 20,
                    className: iL.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sc.S,
                                { ...e, glowing: t === e.id, containerClassName: iL.Ui, onFocus: ik },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var iG = s(411450);
let iw = function (e) {
    let { className: t } = e,
        s = (0, sZ.DP)();
    return (0, c.jsx)("img", {
        className: u()(iG.D, t),
        src: (0, sq.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iB = s(300758);
let iH = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: s, children: i } = e;
    return t
        ? (0, c.jsxs)("div", {
              className: u()(iB.kL, iB.Gd, iB.Eg),
              children: [(0, c.jsx)(iw, {}), (0, c.jsx)(t1, {}), i],
          })
        : (0, c.jsx)(eN.h, { color: "nitro-pink", className: u()(iB.kL, iB.Gd), offsetBottom: s, children: i });
};
function iF(e) {
    let { glowingPerkId: t = null } = e,
        s = iP();
    return (0, c.jsx)(sg, {
        sectionClassName: sm.uW,
        heading: (0, c.jsx)(er.D, { variant: "display-sm", className: sm.R_, children: ex.intl.string(ex.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, c.jsx)(
                    sc.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: u()(sm.Nr, { [sm.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function iV(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
            l = o.useRef(!1);
        o.useEffect(() => {
            if (!t || l.current) return;
            let s = { behavior: a ? "auto" : "smooth", block: i, inline: n },
                r = e();
            if (null != r && r.offsetHeight > 0) {
                (l.current = !0), r.scrollIntoView(s);
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
                    (c = !0), null != o && cancelAnimationFrame(o), d.disconnect();
                }
            );
        }, [t, a, i, n, ...s]),
            o.useEffect(() => {
                t || (l.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], s, i);
}
var iz = s(92737);
let iW = "/assets/cd2be35d285d4675.svg",
    iK = (e) => {
        let { userId: t } = e,
            s = (0, U.ds)(),
            { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
            n = $("nitro_member_hub_header"),
            a = (0, m.zy)();
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = [(0, K.Ay)()];
                null != t && e.push((0, q.A)(t)), await Promise.all(e);
            });
        }, [t]),
            o.useEffect(() => {
                v(!0);
            }, []),
            (0, et.j)(),
            (0, _.P)(I);
        let l = o.useRef(null),
            r = o.useRef(null),
            d = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: p, programReward: h } = (0, Y.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: N,
                glowingSectionId: b,
                glowingPerkId: C,
                scrollBlock: E,
                scrollInline: T,
            } = o.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(iz.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        iV(N ?? "", null != N, E, T);
        let [R, v] = o.useState(!1),
            P = (0, ee.p)(),
            S = o.useRef(null),
            [y, D] = o.useState(!1),
            M = null != P && null != d && d.status === e1.Dmq.CANCELED,
            k = (0, es.iU)(tB.gD.PREMIUM_MONTH_TIER_2, P, d),
            G = !y && M,
            w = null != (0, g.bG)([X.A], () => (null != t ? X.A.getUserProfile(t) : null)) && (p || null != h),
            B = (0, Q.TF)({ location: "PremiumSubscriberHome" }),
            J = (0, eh.q)(d, B === Q.Iz.STICKY_BAR),
            [ei, en] = (0, W.iP)(
                null != J && w && d?.id != null ? F.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                d?.id ?? "",
                { cooldownDurationMs: Z.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ea = null != d && d.status === e1.Dmq.CANCELED,
            el = i && !s && !ea,
            { analyticsLocations: er } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ec, eo] = o.useState(!1);
        return w
            ? (0, c.jsxs)(z.Gt, {
                  className: u()(iB.xW, iB.Gd),
                  ref: l,
                  children: [
                      (0, c.jsx)(iH, {
                          shouldRenderNitroHomeHeaderExperiment: el,
                          gradientOffsetBottom: s && !n ? 0.55 : 0.8,
                          children: (0, c.jsxs)(j.f5, {
                              value: er,
                              children: [
                                  (0, c.jsx)(V.L, {
                                      innerRef: S,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tK, {
                                          buttonVisibilityRef: S,
                                          className: iB.v1,
                                          userDiscountOffer: P,
                                          discountedPrice: k,
                                      }),
                                  }),
                                  (0, c.jsx)(iF, { glowingPerkId: C }),
                                  (0, c.jsx)(s_, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(iU, { glowingPerkId: C }),
                                  (0, c.jsx)(eb, {
                                      className: iB.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e1.liQ.NITRO_HOME, section: e1.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: iB.hz }),
                                  (0, c.jsx)(V.L, {
                                      innerRef: r,
                                      onChange: (e) => {
                                          e &&
                                              !ec &&
                                              (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: er,
                                              }),
                                              eo(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: r, className: iB._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: iW,
                                      className: iB.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ex.intl.string(ex.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      M &&
                          null != k &&
                          (0, c.jsx)(sy, {
                              isVisible: G && R,
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
            : el
              ? (0, c.jsxs)("div", {
                    className: u()(iB.kL, iB.Lq, iB.TN, iB.Eg),
                    children: [
                        (0, c.jsx)(t1, {}),
                        (0, c.jsx)("div", { className: iB.S, children: (0, c.jsx)(x.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(iB.kL, iB.Lq), children: (0, c.jsx)(x.y, {}) });
    };
var iY = s(286320),
    iX = s(727949),
    iq = s(440005),
    iZ = s(26508);
let iQ = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var iJ = s(860839);
let i$ =
    "https://cdn.discordapp.com/assets/content/dfb187cfa9d267774f50c4f67cb7628658cefc11db41c6a04c08fc5aadc9dbcc.png";
function i0(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: i$,
        srcSet: `${i$} 1x, https://cdn.discordapp.com/assets/content/adb910c257d7510b97da4dccb2a4cea5f3a3fc6eb225dbfbbef0dd9d2a1971bf.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var i1 = s(783420),
    i2 = s(204413),
    i6 = s(245383),
    i7 = s(824069),
    i3 = s(785007),
    i5 = s(508770),
    i9 = s(377541);
function i8(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: i9.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: i9.fQ,
                                children: (0, c.jsx)(i5.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: i9.qU,
                            children: [
                                (0, c.jsxs)(el.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: i9.NI,
                                    children: [
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(ec.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(el.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: i9.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, c.jsx)(ec.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, c.jsx)(ec.E, {
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: i9.yD,
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
                radioBarClassName: u()(i9.tG, { [i9.uA]: s, [i9.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(i3.$d, {
        ...i,
        options: n,
        value: t,
        size: i3.r9.NOT_SET,
        className: i9.ul,
        withTransparentBackground: !0,
    });
}
var i4 = s(773669),
    ne = s(97352),
    nt = s(252424),
    ns = s(526292),
    ni = s(186223),
    nn = s(369827),
    na = s(803496);
function nl(e) {
    let t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        s = (0, nn.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, na.A)({
            activeSubscription: t,
            skuIDs: [(0, eO.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nr(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nc(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tB.Ff.YEAR
          ? ex.intl.format(ex.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : ex.intl.format(ex.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var no = s(883519);
function nd(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(i1.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(eo.$, {
                size: "md",
                fullWidth: !0,
                icon: ed.t,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nu(e) {
    let { skuId: t, className: s } = e,
        i = tB.zE[t],
        n = t === tB.pe.TIER_2,
        [a, l] = o.useState(() => (n ? i : null)),
        r = (0, sq.q)((0, sZ.Ay)()),
        d = (0, eG.V)(),
        m = d?.subscription_trial,
        x = m?.sku_id === t,
        f = n && x && null != m,
        p = (0, eU.p)(),
        { planRadioOptions: h, shouldSuppressDiscountCta: N } = (function (e) {
            let { skuId: t, selectedPlanId: s } = e,
                i = tB.En[t],
                n = tB.zE[t],
                a = t === tB.pe.TIER_2,
                l = nl(t),
                r = (0, eG.V)(),
                c = r?.subscription_trial?.sku_id === t,
                o =
                    (0, g.bG)([O.A], () => {
                        let e = O.A.getPremiumTypeSubscription();
                        return (0, eO.aZ)(e);
                    }) === t,
                d = (0, eU.O)(),
                u = (0, ns.k5)(),
                m = (0, g.bG)([i4.default], () => i4.default.locale),
                x = (0, es.U9)(d, t),
                f = (0, es.N1)(i),
                p = (0, es.N1)(n),
                [h, N] = (0, g.yK)([ne.A], () => [ne.A.get(i), ne.A.get(n)], [i, n]),
                A = null != h ? (0, eO.sS)(h, l) : null,
                j = null != N ? (0, eO.sS)(N, l) : null,
                b =
                    x && d?.discount.amount != null && !u
                        ? ex.intl.formatToPlainString(ex.t.IAybsG, {
                              discount: (0, nt.l9)(m, Number(d.discount.amount) / 100),
                          })
                        : null,
                C = d?.discount?.planIds,
                E = nr(n, x, C, p, j),
                T = nr(i, x, C, f, A),
                R = d?.discount.userUsageLimitInterval,
                v = d?.discount.userUsageLimit ?? tB.OJ,
                I = !a || E || T || null == N ? null : (0, ni.cg)(N, !1, l),
                _ = [
                    {
                        value: n,
                        primaryText: ex.intl.string(ex.t["/Q4HRN"]),
                        primarySubText:
                            (E
                                ? nc({
                                      expectedUsageInterval: tB.Ff.YEAR,
                                      usageInterval: R,
                                      discountDuration: v,
                                      regularPrice: j,
                                      discountedPrice: p,
                                  })
                                : null) ?? I,
                        secondaryText: E ? p : j,
                        secondarySubText: E ? j : null,
                        badgeText: E ? b : null,
                        useGradientSelectedBorder: a && (c || E || !T),
                        isDisabled: o,
                    },
                    {
                        value: i,
                        primaryText: ex.intl.string(ex.t.DKzs96),
                        primarySubText: T
                            ? nc({
                                  expectedUsageInterval: tB.Ff.MONTH,
                                  usageInterval: R,
                                  discountDuration: v,
                                  regularPrice: A,
                                  discountedPrice: f,
                              })
                            : null,
                        secondaryText: T ? f : A,
                        secondarySubText: T ? A : null,
                        badgeText: T ? b : null,
                        useGradientSelectedBorder: a && (c || T),
                        isDisabled: o,
                    },
                ],
                P = s === n ? E : s === i && T;
            return { planRadioOptions: _, shouldSuppressDiscountCta: x && !P };
        })({ skuId: t, selectedPlanId: a }),
        A = n && null == p ? "expressive" : "secondary",
        { buttonText: j } = (0, i6.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, i2.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, c.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: no.Ux,
            children: [
                (0, c.jsx)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: no.MY,
                    children: (0, c.jsx)(er.D, {
                        variant: "display-md",
                        color: r ? "text-strong" : "text-overlay-light",
                        className: no.JJ,
                        children: n ? ex.intl.string(ex.t.lG6a5x) : ex.intl.string(ex.t.tUbSDK),
                    }),
                }),
                (0, c.jsx)(el.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: no.qT,
                    children: n
                        ? (0, c.jsx)(iJ.ZP, {
                              featureSet: iJ.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(iJ.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                n && (0, c.jsx)(i7.K, {}),
                f
                    ? (0, c.jsx)("div", {
                          className: no.qS,
                          role: "separator",
                          children: (0, c.jsx)(ec.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: no.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tB.WT.DAY:
                                          if (t % 7 == 0) return ex.intl.format(ex.t["1MYPH0"], { weeks: t / 7 });
                                          return ex.intl.format(ex.t.pYfIoO, { days: t });
                                      case tB.WT.MONTH:
                                          return ex.intl.format(ex.t["96hTLe"], { months: t });
                                      case tB.WT.YEAR:
                                          return ex.intl.format(ex.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(m.interval, m.interval_count),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: no.yF }),
                (0, c.jsxs)("div", {
                    className: no.qr,
                    children: [
                        (0, c.jsx)(i8, { planRadioOptions: h, value: a ?? "", onChange: (e) => l(e.value) }),
                        (0, c.jsx)(nd, { skuId: t, selectedPlanId: a, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = u()(no.Nr, s, { [no.Fw]: n });
    return n
        ? (0, c.jsxs)(eN.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, c.jsx)("div", {
                      className: no.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(i0, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, c.jsx)("div", { className: E, children: C });
}
function nm(e) {
    let { className: t } = e,
        s = (0, sq.q)((0, sZ.Ay)()),
        i = (0, eU.p)(),
        n = null != i,
        a = nl(tB.pe.TIER_2),
        l = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: r, eventHandlers: o } = (0, eZ.A)({ userId: l?.id, size: eK._3.SIZE_32, animateOnHover: !0 }),
        d = (0, g.bG)([ne.A], () => ne.A.get(tB.gD.PREMIUM_GROUP_MONTH)),
        m = (0, es.N1)(tB.gD.PREMIUM_GROUP_MONTH),
        f = n
            ? ex.intl.format(iu.default["7j70dP"], {
                  percent: i.discount?.amount,
                  premiumGroupProductName: (0, id.DP)(),
              })
            : ex.intl.string(ex.t["2pG5Ga"]),
        p = (0, c.jsx)(i1.A, {
            subscriptionTier: tB.pe.TIER_2,
            initialPlanId: tB.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(eo.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: ed.t,
                    text: f,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        h = null;
    return (
        n && null != m ? (h = m) : null != d && (h = (0, eO.sS)(d, a)),
        (0, c.jsx)("div", {
            className: u()(no.Nr, t),
            children: (0, c.jsxs)(el.B, {
                direction: "vertical",
                gap: 0,
                fullWidth: !0,
                className: no.Ux,
                children: [
                    (0, c.jsxs)(el.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 8,
                        fullWidth: !0,
                        className: no.MY,
                        children: [
                            (0, c.jsx)(er.D, {
                                variant: "display-md",
                                color: s ? "text-strong" : "text-overlay-light",
                                className: no.JJ,
                                children: ex.intl.string(iu.default.eSKiXk),
                            }),
                            null != l &&
                                (0, c.jsxs)(el.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 0,
                                    fullWidth: !1,
                                    className: no.DD,
                                    "aria-hidden": !0,
                                    children: [
                                        (0, c.jsx)("div", {
                                            className: no.uA,
                                            children: (0, c.jsx)(eY.eu, {
                                                src: r,
                                                size: eK._3.SIZE_32,
                                                "aria-hidden": !0,
                                                ...o,
                                            }),
                                        }),
                                        (0, c.jsx)(el.B, {
                                            direction: "horizontal",
                                            align: "center",
                                            justify: "center",
                                            gap: 0,
                                            fullWidth: !1,
                                            className: no.VL,
                                            children: (0, c.jsxs)(ec.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-default",
                                                children: ["+", id.LM],
                                            }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, c.jsx)(el.B, {
                        direction: "vertical",
                        gap: 0,
                        fullWidth: !0,
                        className: no.qT,
                        children: (0, c.jsx)(iJ.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                    }),
                    (0, c.jsx)("hr", { className: no.yF }),
                    (0, c.jsxs)("div", {
                        className: no.qr,
                        children: [
                            (0, c.jsxs)("div", {
                                className: no.ec,
                                children: [
                                    (0, c.jsx)(ec.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: ex.intl.string(iu.default.SvSwga),
                                    }),
                                    null == h
                                        ? (0, c.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS })
                                        : (0, c.jsx)(ec.E, {
                                              tag: "span",
                                              variant: "heading-lg/semibold",
                                              color: s ? "text-strong" : "text-overlay-light",
                                              children: h,
                                          }),
                                ],
                            }),
                            p,
                        ],
                    }),
                ],
            }),
        })
    );
}
function ng(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, iJ.pw)(t),
        a = (0, io.PA)(),
        l = (0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        r = { [no.iR]: !l };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(el.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(no.oB, s),
            children: [
                (0, c.jsx)(er.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: no.op,
                    children: ex.intl.string(ex.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(no.kR, { [no.BQ]: a }),
                    children: [
                        (0, c.jsx)(nu, { skuId: tB.pe.TIER_0, className: u()(no.rz, r) }),
                        (0, c.jsx)(nu, { skuId: tB.pe.TIER_2, className: u()(no.Rv, r) }),
                        a && (0, c.jsx)(nm, { className: u()(no.zz, r) }),
                    ],
                }),
            ],
        }),
    });
}
var nx = s(226830),
    nf = s(366010),
    np = s(303136);
let nh = function (e) {
    let t,
        { className: s } = e,
        i = (0, tN.TM)(),
        n = (0, nf.q)((0, sZ.Ay)());
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
                np.A,
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
var nN =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nA = s(5571);
let nj = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e1.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(ei.animated.div, {
        className: nA.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nA.U,
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
var nb = s(685661);
let nC = function () {
    let e = (0, th.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nb.BI,
                children: (0, c.jsx)(tC, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tj.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tL, alt: "", className: nb.Q }),
                }),
            }),
            (0, c.jsx)(tT, {
                isMotionReduced: e,
                boltContainerClassName: nb.nJ,
                carContainerClassName: nb.IN,
                hammerContainerClassName: nb.Gj,
                keyContainerClassName: nb.FV,
                starContainerClassName: nb.E1,
                boltAssetClassName: nb.j7,
                carAssetClassName: nb.or,
                hammerAssetClassName: nb.Wv,
                keyAssetClassName: nb.rs,
                starAssetClassName: nb.OY,
            }),
        ],
    });
};
var nE = s(502701);
let nT = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nE.kL,
            children: (0, c.jsxs)("div", {
                className: nE.hQ,
                children: [
                    (0, c.jsx)(nC, {}),
                    (0, c.jsx)(er.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: nE.RH,
                        children: ex.intl.string(ex.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nT.displayName = "PremiumMarketingFooter";
var nR = s(939249);
let nv = function (e) {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        n = {
            [nN.HOME]: ex.intl.string(ex.t.uGRXjS),
            [nN.WHATS_NEW]: ex.intl.string(ex.t["mfcR/v"]),
            [nN.BEST_OF_NITRO]: ex.intl.string(ex.t.xQKkE8),
            [nN.PLANS]: ex.intl.string(ex.t.wyNMnm),
            [nN.COMPARE]: ex.intl.string(ex.t.pwD7If),
        },
        a = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, tq.Gh)("premium_marketing_nav_bar") && null != a,
        r = o.useRef(null),
        d = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsxs)(tX.A, {
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
                                        nR.D,
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
                            l &&
                                (0, c.jsx)(tJ.l, { ref: r, size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            l && i && (0, c.jsx)(tQ.O, { targetElementRef: r }),
        ],
    });
};
var nI = s(704333),
    n_ = s(414499),
    nP = s(597770),
    nS = s(500060),
    ny = s(866665),
    nD = s(406860),
    nM = s(870975),
    nO = s(900485);
function nL() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nD.A)({ boxType: st.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nI.B, text: ex.intl.string(sn.default.MUypiB) },
            { icon: n_.h, text: ex.intl.string(sn.default.ec5Rdd) },
            { icon: nP.o, text: ex.intl.string(sn.default["9t2CzW"]), tooltip: sn.default.AyECej },
            { icon: nS.o, text: ex.intl.string(sn.default.R7YJAY) },
        ];
    return (0, c.jsx)(V.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nO.iE,
            children: (0, c.jsxs)("div", {
                className: nO.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nO.j,
                        children: [
                            (0, c.jsx)("div", { className: nO._g }),
                            (0, c.jsx)("div", { className: nO.$h }),
                            (0, c.jsx)("div", { className: nO.Rv }),
                            (0, c.jsx)("div", { className: nO.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nO.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nO.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(er.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nO.R_,
                                                children: ex.intl.string(sn.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nO.yf,
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
                                                                            className: nO.Jn,
                                                                            children: (0, c.jsx)(ny.m, {
                                                                                text: ex.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(t7.m, {
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
                                                        className: nO.xF,
                                                        children: (0, c.jsx)(tt.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tB.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nO.WE,
                                        children: (0, c.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ex.intl.format(sn.default.KDKdWi, { termsLink: (0, nM.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nO.r1,
                                children: (0, c.jsx)("img", {
                                    className: nO.wm,
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
var nk = s(750338),
    nU = s(387640),
    nG = s(950228);
function nw(e) {
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
        className: u()(nG.boxBackdrop, t),
        children: [
            (0, c.jsx)(er.D, {
                className: nG.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: nG.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nG.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nU.A0.SMALL;
                            break;
                        case 2:
                            s = nU.A0.MEDIUM;
                            break;
                        default:
                            s = nU.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                nk.A,
                                { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let nB = o.memo(function (e) {
        let t = (0, t2.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, nU.Ay)(t);
        return (0, c.jsx)(nw, {
            boxLayout: s,
            title: ex.intl.string(ex.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(nL, {}) : null,
            ...e,
        });
    }),
    nH = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nU.Ay)();
        return (0, c.jsx)(nw, { boxLayout: t, title: ex.intl.string(ex.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nF = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nV = s(236834),
    nz = s(167805);
function nW(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t?.id, size: eK._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nz.$6,
        children: (0, c.jsxs)("div", {
            className: nz.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nz.kR,
                    children: (0, c.jsx)(eY.eu, { src: s, "aria-label": t.username, size: eK._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(er.D, {
                    variant: "heading-sm/normal",
                    className: nz.FS,
                    color: "text-strong",
                    children: ex.intl.format(ex.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var nK = s(579245),
    nY = s(369805);
let nX = function () {
    let e = (0, nY.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eV, { text: e });
};
function nq() {
    let e = (0, g.bG)([ne.A], () => ne.A.getForSkuAndInterval((0, eO.mH)(tB.pe.TIER_0), tB.WT.MONTH));
    return null != e ? (0, eO.sS)(e) : "\u2026";
}
var nZ = s(857681);
let nQ = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, th.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        i = (0, tN.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: nZ.YU,
        children: [
            (0, c.jsx)(tI, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: nZ.wG,
                assetClassName: nZ.lu,
            }),
            (0, c.jsx)(tT, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: nZ.nJ,
                carContainerClassName: nZ.IN,
                hammerContainerClassName: nZ.Gj,
                keyContainerClassName: nZ.FV,
                starContainerClassName: nZ.E1,
                boltAssetClassName: nZ.j7,
                carAssetClassName: nZ.or,
                hammerAssetClassName: nZ.Wv,
                keyAssetClassName: nZ.rs,
                starAssetClassName: nZ.OY,
            }),
        ],
    });
};
var nJ = s(507256);
let n$ = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = nq(),
            r = nF.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, nV.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: x } = eH(
                !(0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
            ),
            f = (0, iY.b)(),
            p = !d && f.length > 0,
            h = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            b = (0, ns.ar)() && !N,
            C = (0, eU.O)(),
            E = (null != C && tB.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(nJ.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: nJ.hQ,
                        children: [
                            (0, c.jsx)(nQ, { containerVisibilityPercentage: x }),
                            b && (0, c.jsx)(nX, {}),
                            (0, c.jsx)("div", {
                                className: nJ.s8,
                                children: (0, c.jsx)(tm.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(er.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: nJ.wx,
                                        children: ex.intl.string(ex.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: nJ.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: nJ.eZ,
                                            children: (0, c.jsx)(nW, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: nJ.Qn,
                                            children: (0, c.jsx)(nK.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: b ? nJ.es : nJ.UJ,
                                        children: [
                                            (0, c.jsx)(tt.A, {
                                                size: "md",
                                                fullWidth: b,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == i ? tB.pe.NONE : i,
                                                buttonTextOverride: E ? ex.intl.string(ex.t["2pG5Ga"]) : void 0,
                                            }),
                                            !b && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nJ.iQ,
                                        children: (0, c.jsx)(ec.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: r
                                                ? ex.intl.string(ex.t.jHqrJW)
                                                : ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: l }),
                                        }),
                                    }),
                                    null != h &&
                                        "marketingPageBanner" === h.properties.properties.oneofKind &&
                                        (0, c.jsx)(ez.x, {
                                            componentId: h.id,
                                            promotionBannerMarketingComponentFields:
                                                h.properties.properties.marketingPageBanner,
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
var n0 = s(820081),
    n1 = s(140735),
    n2 = s(401432),
    n6 = s(580630),
    n7 = s(795269),
    n3 = s(84483),
    n5 = s(864386),
    n9 = s(509826),
    n8 = s(202600);
function n4(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n0.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n1.A, { children: ex.intl.string(ex.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n2.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n1.A, { children: ex.intl.string(ex.t.l4qZrp) }),
              ],
          });
}
function ae(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(n9.nM, n9.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: n9.nx,
                children: (0, c.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: n9.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(n4, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: n9.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(n4, { includes: !!i.includes }),
            }),
        ],
    });
}
function at(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(n9.nM, n9.Gf),
                children: (0, c.jsxs)("td", {
                    className: n9.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(er.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(ec.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(ae, { ...e }, e.id)),
        ],
    });
}
function as(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tB.PremiumTypes.TIER_0 ? ex.intl.string(ex.t.tUbSDK) : ex.intl.string(ex.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: n9.nn,
        children: [
            (0, c.jsxs)("div", {
                className: n9.KS,
                children: [
                    (0, c.jsx)(ed.t, { colorClass: n9.oG }),
                    (0, c.jsx)(er.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(er.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function ai(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, n6.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: n9.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: n9.Cr,
                    children: (0, c.jsx)(er.D, { variant: "heading-xl/bold", children: ex.intl.string(ex.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: n9.Hn,
                    children: (0, c.jsx)(as, {
                        premiumType: tB.PremiumTypes.TIER_0,
                        priceString: (0, n6.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: n9.Hn,
                    children: (0, c.jsx)(as, { premiumType: tB.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let an = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tB.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, eG.V)(),
            r = l?.subscription_trial?.sku_id,
            d = (0, eU.O)(),
            m = (0, es.YJ)(d),
            g = null != d && (0, es.U9)(d, tB.pe.TIER_2) && m === tB.gD.PREMIUM_MONTH_TIER_2,
            x = (0, es.N1)(m),
            f = null != x ? `${x}/${(0, eO.FJ)(tB.WT.MONTH)}` : "",
            p = (0, eO.JM)(tB.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eO.JM)(tB.gD.PREMIUM_MONTH_TIER_2),
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
                            label: ex.intl.string(n5.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, s7.lk)(ii.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = sh.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sN.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, n3.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ex.intl.string(ex.t.NG1e6l),
                            subtitle: ex.intl.format(sn.default.uJcbMv, {
                                termsLink: eM.A.getArticleURL(e1.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ex.intl.string(sn.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: ex.intl.string(sn.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: ex.intl.string(sT.default["gc2sa/"]),
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
                                label: ex.intl.string(s4.default["20tmSN"]),
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
                                    tier0ColumnData: { text: (0, eO.EJ)(tB.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eO.EJ)(tB.PremiumTypes.TIER_2) },
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
                                        numBoosts: tB.M4,
                                        percentageOff: (0, n6.l9)(i4.default.locale, tB.oX / 100),
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
            let e = null != l ? ex.intl.string(ex.t.IBYG5U) : ex.intl.string(ex.t.TR2B4T);
            t = (0, c.jsx)(n7.R, { className: u()(n9.Io, n9.SP), text: e });
        }
        let b = r === tB.pe.TIER_0 || n === tB.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(n9.zr, s),
                children: [
                    (0, c.jsx)(er.D, {
                        className: n9.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: ex.intl.string(ex.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: n9.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(n9.fO, { [n9.Vd]: b, [n9.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: n9.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: n9.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: n8, alt: "", className: n9.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: n9.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: n9.tp,
                                children: [
                                    (0, c.jsx)(ai, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: g,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(at, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    aa = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, o.useCallback)(
                (e) => {
                    let s = r.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
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
                                        (r.current[t] = e), null != e && (e.id = t);
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
var al = s(818348),
    ar = s(952661);
function ac(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(ng, { innerRef: t }) : (0, c.jsx)(nx.jP, { innerRef: t });
}
let ao = () => {
    let e = (0, m.zy)();
    (0, _.P)(I);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        [d, x] = o.useState(r);
    o.useEffect(() => {
        if (r) return void x(!0);
        let e = s.current;
        if (null != e) return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
        function t(t) {
            t.target === e && x(!0);
        }
    }, [r]);
    let [f, p] = o.useState(!1),
        [h, N] = o.useState(!1),
        [b, C] = o.useState(!1),
        [E, T] = o.useState(!1),
        R = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        v = null != R ? (0, eO.EL)(R) : null,
        P = null != v ? eO.Ay.getSkuIdForPlan(v.planId) : null,
        S = null !== P && P !== tB.pe.TIER_2 ? tB.pe.TIER_2 : null,
        y = (0, eL.cg)(),
        { analyticsLocations: D } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        T(!0);
    }, []);
    let M = (0, sf.A0)({ location: "PremiumMarketingHome" }),
        k = (0, iZ.DK)(iq.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: U } = (0, s7.lk)(ii.rE.NITRO_HOME_MARKETING),
        G = k && U ? nU.NI.COMBINED_ORBS : U ? nU.NI.ORB_MULTIPLIER : k ? nU.NI.ORB_REWARDS : null,
        w = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? G
                : t === nU.NI.THREE_P_PROMOTIONS
                  ? M
                      ? nU.NI.CALL_OF_DUTY
                      : nU.NI.THREE_P_PROMOTIONS
                  : null;
        }, [M, e.search, G]);
    iV(w ?? "", null != w);
    let { navBarSections: B, activeSectionId: H } = aa([nN.HOME, nN.WHATS_NEW, nN.BEST_OF_NITRO, nN.PLANS, nN.COMPARE]),
        { home: F, whatsNew: W, bestOfNitro: K, plans: Y, compare: X } = B,
        q = (function (e) {
            let { location: t } = e;
            return iQ.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        Z = (0, c.jsxs)("div", {
            ref: s,
            className: u()(ar.kL, ar.Gd, ar.iI, { [ar.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nh, { className: ar.yH }),
                (0, c.jsx)(nv, { navBarSections: B, activeSectionId: H, isAnimationComplete: d }),
                (0, c.jsxs)("div", {
                    className: ar.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: ar.qY,
                            ref: F.ref,
                            children: (0, c.jsx)(V.L, {
                                innerRef: n,
                                onChange: (e) => p(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n$, {
                                    ref: n,
                                    subscriptionTier: S,
                                    isEligibleForBogoPromotion: y,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: ar.So,
                            ref: W.ref,
                            children: (0, c.jsx)(nB, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ar.KQ,
                            ref: K.ref,
                            children: (0, c.jsx)(nH, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ar.s5,
                            ref: Y.ref,
                            children: (0, c.jsx)(
                                V.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => N(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(ac, { innerRef: i, isPlanSelectUiRedesignEnabled: q }),
                                },
                                q ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: ar.aC, ref: X.ref, children: (0, c.jsx)(an, {}) }),
                    ],
                }),
                (0, c.jsx)(V.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !b &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            C(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: ar._Z }),
                }),
                (0, c.jsx)(nT, { ref: l }),
                (0, c.jsx)(nj, { isVisible: !f && !h && E, subscriptionTier: S, isEligibleForBogoPromotion: y }),
                (0, c.jsx)(nh, { className: ar.MF }),
            ],
        });
    return (0, c.jsx)(t3.N, {
        theme: al.NJ.DARKER,
        children: (e) => (0, c.jsx)(z.Gt, { className: u()(ar.XG, e), ref: t, children: Z }),
    });
};
var ad = s(862482),
    au = s(616431),
    am = s(662367),
    ag = s(374403),
    ax = s(396375),
    af = s(815846),
    ap = s(695366),
    ah = s(107736);
let aN = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, ns.ar)();
    if (null == i) return null;
    let r = null != i ? eO.Ay.getPremiumPlanItem(i) : null;
    if (
        (eO.Ay.isBoostOnlySubscription(i)
            ? (t = ex.intl.string(ex.t.Uj0md3))
            : null != r && (t = eO.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? eO.Ay.getSkuIdForPlan(r.planId) : null) === tB.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(t5.Z, {
            className: u()(ah.kL, n, { [ah.He]: l }),
            type: t5.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(ap.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(ah.Kk, { [ah.Pt]: l }),
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
var aA = s(697335);
let aj = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aA.zr, { [aA.N]: t }),
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
                        (0, c.jsx)("stop", { className: aA.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aA.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aA.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aA.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aA.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var ab = s(900797),
    aC = s(847374),
    aE = s(812993),
    aT = s(504041);
function aR(e) {
    let { className: t } = e;
    return (0, c.jsx)(aE.Lp, { className: u()(aT.T, t), text: ex.intl.string(ex.t.EYxi0o) });
}
var av = s(904788),
    aI = s(507553),
    a_ = s(255438);
let aP = "/assets/5b4fec8511c3676a.svg",
    aS = "/assets/0838bda6ecd20d91.svg";
function ay(e, t, s) {
    return (0, sq.M)(e) ? t : s;
}
var aD = s(365742);
function aM(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nR.D, {
        onClick: s,
        className: aD.customButton,
        children: [
            t ? ex.intl.string(ex.t.maZaN3) : ex.intl.string(ex.t["37C26f"]),
            t
                ? (0, c.jsx)(ab.t, { size: "md", color: "currentColor", className: aD.arrow })
                : (0, c.jsx)(aC.a, { size: "md", color: "currentColor", className: aD.arrow }),
        ],
    });
}
function aO(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: o = !1,
        } = e,
        { analyticsLocations: d } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(j.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(aD.perkCard, i),
            children: [
                r
                    ? (0, c.jsx)(av.A, {
                          className: aD.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aR, { className: aD.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aD.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(er.D, {
                            variant: "heading-lg/extrabold",
                            className: aD.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: aD.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aL = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, sZ.Ay)(),
                n = (0, s$.X)("usePerkCards"),
                a = (0, th.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eO.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, a_.Xq)(tB.f3 / 1024, { useKibibytes: !0 });
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
                    imageSource: ay(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                aI.A.setState({ scrollPosition: iS._F.TRY_IT_OUT }),
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
                    imageSource: ay(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: ay(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: ay(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ex.intl.string(ex.t["lGcW+c"]),
                    description: ex.intl.string(ex.t["/fDyO+"]),
                    imageSource: ay(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ex.intl.string(ex.t["1c+xwT"]),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: ay(i, aS, aP),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: ay(i, aS, aP),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: ay(i, aS, aP),
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
                    imageSource: ay(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: ex.intl.formatToPlainString(ex.t.jqhAdL, { premiumMaxSize: l }),
                    description: ex.intl.formatToPlainString(ex.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: ex.intl.string(ex.t.NaGpTf),
                    description: ex.intl.string(ex.t["A8O/Qw"]),
                    imageSource: ay(i, iy, iD),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aD }),
        r = (0, th.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, j.Ay)(),
        m = [
            l.emoji,
            l.streaming,
            l.upload,
            l.customAppIcons,
            l.soundboard,
            l.videoBackground,
            l.superReactions,
            l.stickersPremiumPerk,
            l.badgeAlt,
        ];
    return (0, c.jsxs)("div", {
        className: u()(aD.perksContainer, t, {
            [aD.partiallyHidden]: i && !n,
            [aD.subscriberNitroHome]: i,
            [aD.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(er.D, {
                variant: "heading-xxl/extrabold",
                className: aD.perksTitle,
                children: i ? ex.intl.string(ex.t.QX14gI) : ex.intl.string(ex.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aD.perkCardContainer, { [aD.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aO, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aD.sizeGizmo]: !n, [aD.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aM, {
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
                        (0, c.jsx)("div", { className: u()(aD.cover, { [aD.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var ak = s(194509),
    aU = s(222214);
let aG = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: e1.JJy.MARKETING_FLOATING_CTA },
        r = (0, sZ.Ay)(),
        o = (0, nf.M)(r);
    return (0, c.jsx)(ei.animated.div, {
        className: u()(aU.iE, { [aU.H8]: i, [aU.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aU.zW : aU.iJ,
            children: [
                (0, c.jsx)(ax.A, {
                    color: o ? ad.XD.BRAND_INVERTED : void 0,
                    className: u()(aU.x6, { [aU.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aU.PJ,
                }),
                (0, c.jsx)(ak.A, { className: aU.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aw = s(93805);
function aB(e) {
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
            ? (0, c.jsx)(ax.A, {
                  color: l ? ad.XD.BRAND_INVERTED : void 0,
                  className: u()(aw.x6, aw.Ph, n, { [aw.Sq]: t && a, [aw.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aw.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(ax.A, {
                  color: l || !a ? ad.XD.BRAND_INVERTED : void 0,
                  className: u()(aw.x6, aw.Ph, n, { [aw.Sq]: t && a, [aw.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(ak.A, { className: u()(aw.x6, n), color: a ? void 0 : ad.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aw.UD, i), children: [o, " ", d] });
}
function aH() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(av.p, { className: aw.zd }),
            (0, c.jsx)(av.p, { className: aw.G }),
            (0, c.jsx)(av.p, { className: aw.zy }),
            (0, c.jsx)(av.p, { className: aw.GX }),
        ],
    });
}
function aF(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = nq();
    return (0, c.jsx)(ec.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(aw.h_, { [aw.If]: s, [aw.jn]: i }),
        children: ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aV = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ek.QQ)(),
        o = (0, ns.ar)(),
        d = (0, eL.cg)(),
        m = (0, iY.b)().length > 0,
        g = ex.intl.string(ex.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(aw.kL, s, { [aw.V1]: !o, [aw.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aw.I6 : aw.G1,
                    children: [
                        (0, c.jsx)(tm.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(er.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: g,
                            }),
                        }),
                        m
                            ? (0, c.jsx)("div", {
                                  className: aw.DF,
                                  children: (0, c.jsx)(nK.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aF, {}),
                        d || r
                            ? (0, c.jsx)("div", {
                                  className: aw.UD,
                                  children: (0, c.jsx)(ak.A, { className: u()(aw.x6, i), color: ad.XD.WHITE }),
                              })
                            : (0, c.jsx)(aB, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(aF, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aH, {}),
            ],
        }),
    });
});
var az = s(22118),
    aW = s(918676),
    aK = s(967603);
function aY(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aj, { lifted: t }) : null;
}
let aX = () => {
        (0, _.P)(I);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, sZ.Ay)(),
            n = (0, sq.M)(i),
            [a, l] = o.useState(!1),
            [r, d] = o.useState(!1),
            [m, x] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eO.EL)(h) : null,
            b = null != N ? eO.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== b && b !== tB.pe.TIER_2 ? tB.pe.TIER_2 : null,
            E = (0, eG.V)(),
            T = E?.subscription_trial?.sku_id,
            R = (0, ns.ar)(),
            v = (0, eL.cg)(),
            P = (0, tq.Gh)("premium-marketing-settings-page"),
            S = v ?? !1,
            y = (0, g.bG)([au.A], () => {
                let e = au.A.getMarketingComponentByType(eC.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, ag.Q)(),
            { analyticsLocations: M } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let k = (0, c.jsx)("div", {
            className: aK.dY,
            children: (0, c.jsx)(V.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(iJ.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(ax.A, {
                        showIcon: !1,
                        subscriptionTier: tB.pe.TIER_0,
                        className: aW.Ph,
                        look: ad.pR.OUTLINED,
                        color: ad.XD.WHITE,
                        buttonShineClassName: aW.Qr,
                    }),
                    tier2CTAButton:
                        T === tB.pe.TIER_0
                            ? (0, c.jsx)(ax.A, {
                                  showIcon: !1,
                                  subscriptionTier: tB.pe.TIER_2,
                                  className: aW.Ph,
                                  look: ad.pR.OUTLINED,
                                  color: ad.XD.WHITE,
                                  buttonShineClassName: aW.Qr,
                              })
                            : (0, c.jsx)(ax.A, {
                                  color: ad.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tB.pe.TIER_2,
                                  className: aW.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: aW.Ac },
                                  buttonShineClassName: aW.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: aK.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aN, { premiumSubscription: h, className: u()(aK.R3, { [aK.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: aK.n1,
                        children: [
                            (0, c.jsx)(aY, { inOfferExperience: R }),
                            P &&
                                (0, c.jsx)(tJ.l, {
                                    className: aK.ij,
                                    size: "md",
                                    location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aK.V1]: !R }),
                    children: [
                        null != y && (0, c.jsx)(af.c, { className: aK.w$, config: y }),
                        (0, c.jsxs)("div", {
                            className: aK.iS,
                            children: [
                                P &&
                                    !R &&
                                    (0, c.jsx)(tJ.l, {
                                        className: aK.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(V.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(aV, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [aK.p7]: R, [aK.Pw]: R, [aK.AG]: v, [aK.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: aK.Ol, children: (0, c.jsx)(am.I, { component: D }) }),
                k,
                (0, c.jsx)(aL, { className: aK.B_ }),
                (0, c.jsx)("div", { className: aK.aC, children: (0, c.jsx)(az.A, { className: aK.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: aK.hz }),
                (0, c.jsx)(aG, {
                    isVisible: !a && !r && f,
                    subscriptionTier: C,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: v,
                }),
                (0, c.jsx)(V.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            x(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: aK._Z }),
                }),
                (0, c.jsx)("img", {
                    src: iW,
                    className: aK.Kw,
                    width: 112,
                    height: 85,
                    alt: ex.intl.string(ex.t.X4IxWL),
                }),
            ],
        });
    },
    aq = function (e) {
        let { entrypoint: t } = e,
            s = (0, eG.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, iX.NF)({ trialOffer: s }),
            a = (0, iX.Tp)(),
            l = (0, g.bG)([eJ.A], () => eJ.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                !0 === n && (0, iX.QG)(), !0 === a && (0, iX.ne)(l), (null != s || null != i) && (0, G.u1)(s, i);
            }, [s, i, n, a, l]),
            t)
        ) {
            case tB.tU.UserSettings:
                return (0, c.jsx)(aX, {});
            case tB.tU.ApplicationStoreHome:
                return (0, c.jsx)(ao, {});
            default:
                return null;
        }
    };
var aZ = s(738783);
let aQ = function (e) {
    let { entrypoint: t = tB.tU.UserSettings } = e;
    (0, _.P)(I);
    let s = (0, C.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
        n = (0, U.ds)(),
        { sourceAnalyticsLocations: a, analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        r = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        d = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        R = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        v = R?.id,
        w = (0, eG.V)(),
        B = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        F = (0, E.Y)(tB.T7),
        [V, z] = o.useState(!0),
        W = o.useRef(0),
        K = (0, k.YE)(R, tB.PremiumTypes.TIER_2),
        Y = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        X = null != Y && Y.status === e1.Dmq.CANCELED;
    (0, iY.b)(),
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, e1.tF5.DISCOVERY)]),
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
            s && (null != w || null != B) && (0, G.u1)(w, B);
        }, [s, w, B]);
    let q = (0, m.zy)(),
        Z = o.useRef(!1),
        Q = r && d && F,
        [J, $] = o.useState(Q);
    Q && !J && $(!0),
        o.useEffect(() => {
            if (Z.current || !Q) return;
            let e = new URLSearchParams(q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tB.pe.TIER_0, nitro: tB.pe.TIER_2 }[e];
            null != t &&
                ((Z.current = !0),
                (0, S.bG)(e1.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: t, analyticsLocations: l }));
        }, [Q, q.search, l]);
    let ee = (0, g.bG)([y.A], () => y.A.enabled),
        et = t === tB.tU.ApplicationStoreHome,
        es = ee
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : et && K
                ? (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(iK, { userId: v }) })
                : J
                  ? null
                  : (0, c.jsx)("div", { className: u()(aZ.kL, aZ.Lq), children: (0, c.jsx)(x.y, {}) });
    if (null != es) {
        let e = !ee && !s && et && K;
        return i && e && !n && !X ? es : (0, c.jsxs)(c.Fragment, { children: [et && (0, c.jsx)(N.A, {}), es] });
    }
    return (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(aq, { entrypoint: t }) });
};
