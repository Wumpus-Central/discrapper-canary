s.d(t, { A: () => a7 }), s(323874), s(14289), s(35956);
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
    y = s(976860),
    S = s(351906),
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
let F = (0, w.mj)({
    kind: "user",
    name: "2026-07-nitro-home-header-followup",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function V(e) {
    let { enabled: t } = F.useConfig({ location: e });
    return t;
}
s(321073);
var z = s(554146),
    W = s(269115),
    K = s(689175),
    Y = s(131607),
    X = s(961250),
    q = s(366505),
    Z = s(321191),
    Q = s(903209),
    J = s(927813),
    $ = s(107857),
    ee = s(131168),
    et = s(482589),
    es = s(511484),
    ei = s(53466),
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
var eh = s(428331),
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
    ey = s(780964),
    eS = s(766075),
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
var e7 = s(212737),
    e6 = s(901532);
function e3(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    L.default.track(e1.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, ev.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        });
}
function e8(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t.id, size: eK._3.SIZE_24 });
    return (0, c.jsx)(
        eY.eu,
        { className: e6.bj, src: s, "aria-label": (0, eQ.mG)(t), size: eK._3.SIZE_24, ...i },
        t.id,
    );
}
function e5(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e6.p, children: t });
}
function e9(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e6.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < e0.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e8, { user: t[s] }, t[s].id);
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
    return (0, c.jsx)(eX.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e6.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e6.e0,
        overlayClassName: t === e0.Z ? e6.ys : void 0,
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
        className: u()(e6.kL, t),
        children: [
            (0, c.jsx)("div", { className: e6.G3, children: (0, c.jsx)(e4, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: e6.IH,
                children: [
                    (0, c.jsx)(e9, { referralSentUsers: s, className: e6.GV }),
                    (0, c.jsxs)("div", {
                        className: e6.n4,
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
                            e3({ startingScreen: e7.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
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
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, tn.A)(ti()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(ta.Xl, s, { [ta.a3]: "text-lg/bold" === i }),
        children: [
            (0, c.jsx)(ec.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ex.intl.string(ex.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: ta.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
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
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: ta.B2,
                                                        children: (0, c.jsx)(ec.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
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
                    })(e, t === d.length - 1, i),
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
                    (0, c.jsx)(e9, { referralSentUsers: s, className: tf.t7 }),
                ],
            }),
            (0, c.jsx)(eo.$, {
                variant: "primary",
                disabled: !1 === n || !0 === a,
                text: ex.intl.string(ex.t.Lm2nFc),
                onClick: () =>
                    e3({ startingScreen: e7.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
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
let ty = function (e) {
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
var tS = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
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
            ((t = { [tS.MORNING]: ex.t["Wvc/I+"], [tS.AFTERNOON]: ex.t["d+0STx"], [tS.EVENING]: ex.t.CqsxKI }),
            ex.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tS.MORNING
                        : s >= 12 && s < 17
                          ? tS.AFTERNOON
                          : tS.EVENING
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
                    children: (0, c.jsx)(ty, { containerVisibilityPercentage: x, compact: null == p }),
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
var tU = s(529859);
let tG = function (e) {
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
};
var tw = s(219351);
function tB(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(t_, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tw.wG,
        flyingWumpusAssetClassName: tw.lu,
        boltContainerClassName: tw.nJ,
        hammerContainerClassName: tw.Gj,
        keyContainerClassName: tw.FV,
        starContainerClassName: tw.E1,
        boltAssetClassName: tw.j7,
        hammerAssetClassName: tw.Wv,
        keyAssetClassName: tw.rs,
        starAssetClassName: tw.OY,
        animationSpeedScale: 1 / 0.7,
    });
}
let tH = function () {
    let e = (0, th.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
    return (0, c.jsx)(tT, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tw.cI,
        hammerContainerClassName: tw.qg,
        keyContainerClassName: tw.h2,
        boltContainerClassName: tw.Bz,
        starAssetClassName: tw.ks,
        hammerAssetClassName: tw.GY,
        keyAssetClassName: tw.p4,
        boltAssetClassName: tw.vy,
    });
};
var tF = s(202541);
function tV(e, t, i) {
    (0, ev.openModalLazy)(async () => {
        let { PremiumBrandRefreshSubscriptionCancellationModal: n } = await Promise.all([
            s.e("91170"),
            s.e("42394"),
            s.e("23102"),
            s.e("2285"),
            s.e("97726"),
            s.e("44459"),
            s.e("98986"),
            s.e("37467"),
            s.e("60411"),
            s.e("61298"),
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
            s.e("13736"),
            s.e("44571"),
            s.e("40291"),
            s.e("29963"),
            s.e("92075"),
            s.e("90417"),
            s.e("50097"),
            s.e("73215"),
            s.e("94161"),
            s.e("13051"),
            s.e("80347"),
            s.e("80166"),
        ]).then(s.bind(s, 293061));
        return (s) => (0, c.jsx)(n, { ...s, analyticsLocations: e, initialStep: i, premiumSubscription: t });
    });
}
function tz(e) {
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
                                    onClick: () => (0, eS.openUserSettings)(ey.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tD.Hk,
                    children: [(0, c.jsx)(eT, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(tH, {})],
                }),
            ],
        }),
    });
}
function tW(e) {
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
                                    onClick: () => (0, eS.openUserSettings)(ey.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tD.Tg, children: (0, c.jsx)(tB, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tK(e) {
    let {
            className: t,
            buttonVisibilityRef: s,
            userDiscountOffer: i,
            discountedPrice: n,
            premiumSubscription: a,
            analyticsLocations: l,
            headingTop: r,
            showPill: o,
            shouldShowReferralProgressBar: d,
            marketingBanner: m,
        } = e,
        { visibilityPercentageRef: x, visibilityPercentage: f } = eH(!(0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion)),
        p = m ?? (d ? (0, c.jsx)(tp, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, t),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: u()(tD.W2, tD.HQ),
            ref: x,
            children: [
                (0, c.jsxs)(el.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tD.ZU, tD.GW),
                    children: [
                        o && r,
                        null != i.expiresAt &&
                            (0, c.jsx)(tl, { expiresAt: i.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(el.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(tx, {
                                    children: ex.intl.format(ex.t["3yZP0G"], { percent: i.discount.amount }),
                                }),
                                null != n &&
                                    (0, c.jsx)(ec.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: ex.intl.format(ex.t["3Q4wCy"], {
                                            discountedPrice: n,
                                            billingPeriod: (0, eO.Ke)(i.discount.intervalType),
                                            numMonths: i.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(eo.$, {
                                    variant: "expressive",
                                    icon: ed.t,
                                    size: "md",
                                    text: ex.intl.string(ex.t.zrCzVB),
                                    onClick: () => tV(l, a, tr.g.CONFIRM_DISCOUNT),
                                }),
                                (0, c.jsx)(eA.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: ex.intl.string(ex.t["3KomGa"]),
                                }),
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tD.y3, tD.Xx),
                    children: (0, c.jsx)(tG, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function tY(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingText: n,
            headingTop: a,
            showPill: l,
            shouldShowChurnVariant: r,
            premiumSubscription: o,
            userDiscountOffer: d,
            discountedPrice: m,
            buttonVisibilityRef: x,
        } = tq(),
        { isInNitroHomeHeaderTreatment: f } = H("subscriber_home_hero"),
        p = V("subscriber_home_hero"),
        { analyticsLocations: h } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        N = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
        b = (0, eL.cg)(),
        C = null != o && o.status === e1.Dmq.CANCELED,
        E = f && !C,
        T = null;
    null != N &&
        "marketingPageBanner" === N.properties.properties.oneofKind &&
        (T = (0, c.jsx)(ez.x, {
            componentId: N.id,
            promotionId: N.promotionId,
            promotionBannerMarketingComponentFields: N.properties.properties.marketingPageBanner,
        }));
    let R = T;
    null == R && i && !E && (R = (0, c.jsx)(te, {}));
    let v = (0, eG.V)(),
        I = (0, eU.O)(),
        _ = (0, es.U9)(I, tF.pe.TIER_2) ? tF.pe.TIER_2 : void 0,
        P = null != o && o.status !== e1.Dmq.ACCOUNT_HOLD && o.hasAnyPremiumNitro,
        y = (0, eP.A)(),
        S = y.isFractionalPremiumActive && !P && null == R && !r,
        { visibilityPercentageRef: D, visibilityPercentage: M } = eH(!(0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion));
    if (s)
        return p
            ? (0, c.jsx)(tW, { fpEndsAt: y.currentEntitlementEndsAt, className: t, buttonVisibilityRef: x })
            : (0, c.jsx)(tz, { fpEndsAt: y.currentEntitlementEndsAt, className: t, buttonVisibilityRef: x });
    if (E) {
        let e = S
            ? (0, c.jsxs)("div", {
                  className: tD.UJ,
                  children: [
                      (0, c.jsx)(tt.A, {
                          size: "md",
                          hasActivePromotion: !!b,
                          subscriptionTier: v?.subscriptionTrial?.skuId ?? _,
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
            headingTop: a,
            showPill: l,
            buttonVisibilityRef: x,
            shouldShowReferralProgressBar: i,
            marketingBanner: T,
            heroButtons: e,
        });
    }
    return p && C
        ? r && null != d && null != o
            ? (0, c.jsx)(tK, {
                  className: t,
                  buttonVisibilityRef: x,
                  userDiscountOffer: d,
                  discountedPrice: m,
                  premiumSubscription: o,
                  analyticsLocations: h,
                  headingTop: a,
                  showPill: l,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
            : (0, c.jsx)(tM, {
                  className: t,
                  headingTop: a,
                  showPill: l,
                  buttonVisibilityRef: x,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
        : (0, c.jsx)("div", {
              className: u()(tD.kL, t),
              "data-testid": "subscriber-nitro-home-hero-header",
              ref: x,
              children: (0, c.jsxs)("div", {
                  className: tD.Qs,
                  ref: D,
                  children: [
                      l && a,
                      (0, c.jsxs)("div", {
                          className: tD.N1,
                          children: [
                              (0, c.jsx)(tk, { containerVisibilityPercentage: M }),
                              r &&
                                  d?.expiresAt != null &&
                                  (0, c.jsx)(tl, { expiresAt: d.expiresAt.toISOString(), className: tD.IZ }),
                              (0, c.jsx)(tx, {
                                  children:
                                      r && null != d
                                          ? ex.intl.format(ex.t["3yZP0G"], { percent: d.discount.amount })
                                          : n,
                              }),
                              r &&
                                  null != d &&
                                  null != m &&
                                  (0, c.jsx)(ec.E, {
                                      className: tD.jG,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: ex.intl.format(ex.t["3Q4wCy"], {
                                          discountedPrice: m,
                                          billingPeriod: (0, eO.Ke)(d.discount.intervalType),
                                          numMonths: d.discount.intervalCount,
                                      }),
                                  }),
                          ],
                      }),
                      (0, c.jsxs)("div", {
                          className: S || r ? tD.UJ : void 0,
                          children: [
                              S &&
                                  (0, c.jsx)(tt.A, {
                                      size: "md",
                                      hasActivePromotion: !!b,
                                      subscriptionTier: v?.subscriptionTrial?.skuId ?? _,
                                  }),
                              r &&
                                  null != o &&
                                  (0, c.jsx)(eo.$, {
                                      variant: "expressive",
                                      icon: ed.t,
                                      size: "md",
                                      text: ex.intl.string(ex.t.zrCzVB),
                                      onClick: () => tV(h, o, tr.g.CONFIRM_DISCOUNT),
                                  }),
                              (0, c.jsx)(eA.A, {
                                  variant: S || r ? "secondary" : "expressive",
                                  size: "md",
                                  buttonTextOverride: ex.intl.string(ex.t["3KomGa"]),
                              }),
                          ],
                      }),
                      R,
                  ],
              }),
          });
}
let [tX, tq] = (0, eD.A)(),
    tZ = function (e) {
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
        if (p === tF.xc.NONE || l) b = (0, c.jsx)(eV, { text: m });
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
            children: (0, c.jsx)(tX.Provider, {
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
                children: (0, c.jsx)(tY, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: x }),
            }),
        });
    };
var tQ = s(820284),
    tJ = s(742589),
    t$ = s(909536),
    t0 = s(392943),
    t1 = s(876587),
    t2 = s(400669),
    t7 = s(590319),
    t6 = s(897351);
let t3 = function () {
    let e = (0, t$.Gh)("nitro_home_header"),
        t = o.useRef(null);
    return (0, c.jsxs)(tQ.A, {
        section: e1.JJy.NAVIGATION,
        children: [
            (0, c.jsx)(tJ.A, {
                className: u()(t7.TQ, t6.C$),
                transparent: !0,
                role: "navigation",
                children: (0, c.jsxs)("div", {
                    className: t7.Wc,
                    children: [
                        (0, c.jsxs)("div", {
                            className: t6.wk,
                            children: [
                                (0, c.jsx)(ed.t, { colorClass: t6.tr }),
                                (0, c.jsx)("span", {
                                    role: "img",
                                    "aria-label": ex.intl.string(ex.t.Ipxkog),
                                    className: t6.Ss,
                                    children: (0, c.jsx)(t0.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, c.jsxs)("div", {
                                className: t7.MQ,
                                children: [
                                    (0, c.jsx)(t2.l, {
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
            e && (0, c.jsx)(t1.O, { targetElementRef: t, body: ex.intl.string(ex.t.EqUw7K) }),
        ],
    });
};
var t8 = s(325499),
    t5 = s(562708),
    t9 = s(885574),
    t4 = s(43990),
    se = s(993077),
    st = s(139286),
    ss = s(872725),
    si = s(920050),
    sn = s(51965),
    sa = s(375776),
    sl = s(727811),
    sr = s(222652),
    sc = s(933287),
    so = s(355982);
function sd(e) {
    let { openRewardModal: t } = e,
        s = (0, sr.z)();
    if (s.kind === sr.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: so.R$,
            children: [
                (0, c.jsx)(tt.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tF.pe.TIER_2,
                }),
                (0, c.jsx)(eo.$, { variant: "secondary", size: "md", text: ex.intl.string(ex.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === sl.P.CLAIMED
            ? { text: ex.intl.string(sc.default.Plwzgf) }
            : { text: ex.intl.string(ex.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: so.R$,
                children: [
                    (0, c.jsx)(sn.A, {
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
            s.claimStatus === sl.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: so.ed,
                    children: [
                        (0, c.jsx)(t9.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ex.intl.string(sc.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function su(e) {
    let { glowing: t = !1 } = e;
    (0, st.A)({
        type: t5.ImpressionTypes.VIEW,
        name: t5.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: si.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ev.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("52283"), s.e("13088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(t4.N, {
        theme: e1.NJ8.DARKER,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, so.kL),
                    children: (0, c.jsx)(ss.A, {
                        cardType: se.s.CUSTOM,
                        cardClassName: so.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: so.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: so.j,
                                    children: [
                                        (0, c.jsx)("div", { className: so._g }),
                                        (0, c.jsx)("div", { className: so.$h }),
                                        (0, c.jsx)("div", { className: so.Rv }),
                                        (0, c.jsx)("div", { className: so.Lw }),
                                        (0, c.jsx)("div", { className: so.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: so.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: so.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(er.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: so.DD,
                                            children: ex.intl.string(sc.default.RGT513),
                                        }),
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: so.h_,
                                            children: ex.intl.string(sc.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sd, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sm = s(744064);
function sg(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, sr.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === sr.N.SUBSCRIBE
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
    return (0, c.jsx)(sm.S, {
        id: si.XBOX_PREMIUM_PERK_CARD_ID,
        title: ex.intl.string(sc.default.UVL9tD),
        description: ex.intl.string(sc.default["I+IXr0"]),
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
function sx(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(sg, { ...e }) });
}
var sf = s(54471),
    sp = s(574377);
function sh(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = sp.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && sf.Jx, l), children: a }) : null,
        ],
    });
}
var sN = s(789861),
    sA = s(592909),
    sj = s(149995),
    sb = s(398523),
    sC = s(881373),
    sE = s(555393),
    sT = s(852218),
    sR = s(161319),
    sv = s(672787),
    sI = s(806343),
    s_ = s(962995);
let sP =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sy =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg";
function sS() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sA.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sA.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sC.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = sb.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, sj.Zk)({ location: "useHardwarePartnerPerkCards" }),
        l = (0, sj.S9)({ location: "useHardwarePartnerPerkCards" }),
        r = null === (0, sE.N)(),
        d = (0, t8.b)("useHardwarePartnerPerkCards"),
        { currentDate: u, nDaysInMonth: m } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = d ? void 0 : ex.intl.string(ex.t.y2b7CA),
            g = t
                ? {
                      id: si.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ex.intl.string(sI.default.F0b4Z8),
                      description: ex.intl.formatToPlainString(sI.default["hworR+"], { validDates: (0, sN.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ex.intl.formatToPlainString(sI.default.g7iyvR, { date: (0, sN.mh)() }),
                      caption: (0, c.jsx)("img", { src: sy, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sP,
                      ctaText: ex.intl.string(sI.default.fcopjf),
                      onCtaClick: () => (0, sv.P)({ partnerId: sT.Bt, analyticsLocations: e }),
                      analyticsOptions: { thirdPartyPartner: sT.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = s
                ? {
                      id: si.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: ex.intl.string(sI.default["IcD/7p"]),
                      description: ex.intl.formatToPlainString(sI.default.hausFi, { date: (0, sN.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: ex.intl.string(sI.default.fxF0Jz),
                      caption: (0, c.jsx)("img", { src: sy, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sP,
                      analyticsOptions: { thirdPartyPartner: sT.Bt },
                  }
                : null,
            f = i
                ? {
                      id: si.LOGITECH_3PP_CARD_ID,
                      title: ex.intl.string(s_.default.OlObRa),
                      description: ex.intl.format(s_.default.ZGOJ8R, {
                          discountPercent: sC.aW,
                          termsUrl: eM.A.getArticleURL(e1.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: u.getDate() / m,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sv.P)({ partnerId: sT.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sT.XY },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null;
        return {
            callOfDutyCard: g,
            expiredCallOfDutyCard: x,
            logitechCard: f,
            steelseriesCard: n
                ? {
                      id: si.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ex.intl.string(ex.t.m7PucM),
                      description: a
                          ? l
                              ? ex.intl.format(ex.t["1Zw6xL"], {})
                              : ex.intl.format(ex.t.KWdCO0, {})
                          : ex.intl.format(ex.t.zh1X7u, {}),
                      descriptionNote:
                          !l && a
                              ? ex.intl.format(ex.t.vblnHk, {
                                    partnerName: sT.CD[sT.Cs].label,
                                    helpdeskArticle: eM.A.getArticleURL(e1.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: u.getDate() / m,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sR.u)({ analyticsLocations: e, partnerIds: [sT.KS, sT.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sT.KS },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [d, e, t, s, u, i, m, n, a, l, r]);
}
var sD = s(166634);
let sM = "xgpp";
function sO(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, t8.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: l, steelseriesCard: r } = sS();
    if (!i) return null;
    let o = null != n || null != a || null != l || null != r;
    return (0, c.jsx)(sh, {
        id: sM,
        sectionClassName: u()(sD.uW, sD.Uv, sD.qr),
        heading: (0, c.jsx)(er.D, {
            variant: "display-sm",
            className: u()(sp.R_, sf.U6),
            children: ex.intl.string(ex.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: sf.JE, children: (0, c.jsx)(su, { glowing: t === sM }) }),
        grid: o
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(sm.S, { ...n, containerClassName: sp.Nr, glowing: s === n.id }),
                      (0, c.jsx)(sx, { containerClassName: sp.Nr }),
                      null != l && (0, c.jsx)(sm.S, { ...l, containerClassName: sp.Nr, glowing: s === l.id }),
                      null != r && (0, c.jsx)(sm.S, { ...r, containerClassName: sp.Nr, glowing: s === r.id }),
                      null != a && (0, c.jsx)(sm.S, { ...a, containerClassName: sp.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var sL = s(687636),
    sk = s(67423);
let sU = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: u()(sL.iE, { [sL.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sL.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sk, className: sL.oU }),
                (0, c.jsxs)("div", {
                    className: sL.iQ,
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
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, eO.Ke)(n.discount.intervalType),
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
                                s.e("61298"),
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
                                s.e("13736"),
                                s.e("44571"),
                                s.e("40291"),
                                s.e("29963"),
                                s.e("92075"),
                                s.e("90417"),
                                s.e("50097"),
                                s.e("73215"),
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
var sG = s(761508),
    sw = s(449543);
function sB(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/a9ce5551f37c49862694d063777be6e02b9190ff9a205c7c62f5fe9cecb673de.svg",
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
        src: "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sF(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/ce65064fd18fa477fe14c2d4066af96637c446e074008fb0b7599874537ce8d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sV = s(345394);
function sz(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sV.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sW(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/804d87fc1c1330e6413159eaacc359de89bdfbec7b4602532b1bd074868783c8.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sK(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/521e5bf29d9f8a81ef4af279728799cf1021812200840659bf3067871bb49875.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sY(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/c561ce5c9866c0bdb3f8c9dc43164f873414c3d905d1ab4beace8020dc4933fc.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sX(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sq(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sZ = s(996682);
function sQ(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: l = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, sZ.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function sJ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s$ = s(78701);
function s0(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: s$.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s1 = s(462887),
    s2 = s(736653),
    s7 = s(259065),
    s6 = s(206835),
    s3 = s(591179),
    s8 = s(462463),
    s5 = s(878784),
    s9 = s(425713),
    s4 = s(696292),
    ie = s(192444),
    it = s(617986),
    is = s(892227),
    ii = s(81466),
    ia = s(318254),
    il = s(490285),
    ir = s(165815);
let ic = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, q.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, is.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: ir.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: ir.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ir.Pf,
                            children: [
                                (0, c.jsx)(ii.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(il.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(il.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: ir.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: ir.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ir.Pf,
                            children: [
                                (0, c.jsx)(ia.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(il.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(il.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var io = s(758836),
    id = s(190107),
    iu = s(55684);
function im(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, ie.lk)(id.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, q.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: si.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ex.intl.string(il.default.hx5AFp),
                          description: ex.intl.format(il.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(iu.lH, iu.yK),
                          footerContent: (0, c.jsx)(ic, {}),
                          ctaText: ex.intl.string(il.default.BxjHiu),
                          onCtaClick: () => (0, y.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(io.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: si.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ex.intl.string(ex.t.Csf5Ol),
                          description: ex.intl.format(ex.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: () => (0, it.mA)({ fromContent: s4.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: iu.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var ig = s(975807),
    ix = s(95035),
    ip = s(862990),
    ih = s(88001),
    iN = s(466919),
    iA = s(817577);
function ij() {
    (0, ig.A)(ih.TE);
}
function ib(e) {
    let t = (0, ip.O9)(),
        i = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ev.openModalLazy)(async () => {
                      let { default: e } = await s.e("99709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tF.pe.TIER_2,
                      initialPlanId: tF.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: si.PREMIUM_GROUP_CARD_ID,
                      title: ex.intl.string(iN.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              ex.intl.formatToPlainString(iN.default.JlyGQj, {
                                  totalSeats: ih.aw,
                                  premiumGroupProductName: (0, ih.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: iu.LF,
                                  children: (0, c.jsx)(ix.A, {
                                      onClick: ij,
                                      children: ex.intl.string(iN.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ex.intl.string(ex.t.oW0eUd),
                      primaryAsset: iA,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: ex.intl.string(ex.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iC = s(562819),
    iE = s(892035),
    iT = s(793943),
    iR = s(241988),
    iv = s(655752),
    iI = s(764231),
    i_ = s(627380),
    iP = s(30084),
    iy = s(111881),
    iS = s(714206);
let iD =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iM =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iO =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iL() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        n = (0, s3.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: a, expiredCallOfDutyCard: l, logitechCard: r, steelseriesCard: d } = sS(),
        m = (0, t8.b)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: x } = (0, iE.z$)("useWhatsNewPerkCards"),
        f = (0, s8.A)({ analyticsLocations: i }),
        p = (0, o.useCallback)(() => {
            (0, eS.openUserSettings)(ey.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, s7.L)({ analyticsLocations: i }),
            );
        }, [i]),
        h = (0, o.useCallback)(() => {
            (0, eS.openUserSettings)(ey.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, iC.L)({ analyticsLocations: i }),
            );
        }, [i]),
        N = (0, o.useCallback)(() => {
            (0, eS.openUserSettings)(ey.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        b = (function (e) {
            let { fractionalState: t } = (0, eP.A)(),
                s = t === tF.xc.FP_ONLY,
                i = (0, s5.$F)(),
                n = (0, s5.Xb)(),
                a = i?.status === s5.Wo.UPCOMING || s,
                l = (0, s9.N)(i?.id),
                r = (function () {
                    let e = (0, s5.$F)(),
                        t = (0, iv.P)(),
                        s = (0, s5.Xb)();
                    if (null == e || null == t || null == s) return null;
                    let i = ti()(),
                        n = ti()(s),
                        a = e.status === s5.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        r = n.clone().add(a, "months"),
                        c = n.clone().add(l, "months").diff(r);
                    return Math.max(0, Math.min(1, (i.diff(r) - 864e5) / c));
                })(),
                c = (0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion) && !a,
                d = (0, i_.t)(),
                m = (0, iv.P)();
            return (0, o.useMemo)(() => {
                let t,
                    o = null != m ? ex.intl.string(m.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iI.T)(tF.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === s5.Wo.UPCOMING
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
                                (0, iI.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let g = null;
                return (
                    null != l ? (g = a || c ? l.standard : l.ambientLarge) : s && (g = iS),
                    {
                        id: si.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ex.intl.string(i.nameUnformattedNitro) : s ? ex.intl.string(ex.t.tx9Fvw) : "",
                        pillText: ex.intl.string(ex.t["jyYgZ+"]),
                        primaryAsset: g,
                        primaryAssetClassName: u()(iy.pq, { [iy.n6]: a, [iy.kE]: c }),
                        caption: null != n ? ex.intl.formatToPlainString(ex.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: r ?? void 0,
                        ctaText: ex.intl.string(ex.t.jVcuVY),
                        onCtaClick: () => (0, iP.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, a, c, n, r, s, d, m, e]);
        })(i),
        C =
            ((e = (0, $.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription())),
            (s = (0, eh.q)(t, e === $.Iz.NITRO_HOME_TILE)),
            (0, o.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: si.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: (0, c.jsx)("img", {
                                  src: iR,
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
        { nitroOrbsRewardsCard: E, questOrbMultiplierCard: T } = im("useWhatsNewPerkCards"),
        R = ib(i);
    return (0, o.useMemo)(() => {
        let e = [
                m ? null : a,
                m ? null : r,
                m ? null : d,
                m ? null : l,
                E,
                T,
                R,
                {
                    id: si.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ex.intl.string(ex.t.OLtTrt),
                    description: ex.intl.string(ex.t["di/pXR"]),
                    onCtaClick: n ? f : p,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    primaryAsset: iD,
                },
                {
                    id: si.CLIENT_THEMES_CARD_ID,
                    title: ex.intl.string(ex.t.acc6h6),
                    description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iO,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iT.nf)(iT.HP.CUSTOM_THEME);
                    },
                },
                x
                    ? null
                    : {
                          id: si.PERMADECOS_CARD_ID,
                          title: ex.intl.string(ex.t.L14NZN),
                          description: ex.intl.string(ex.t.eCZkAI),
                          primaryAsset: (0, c.jsx)(s0, { alt: "", ariaHidden: !0 }),
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: n ? f : h,
                      },
                {
                    id: si.CUSTOM_APP_ICONS_CARD_ID,
                    title: ex.intl.string(ex.t["GU+wqh"]),
                    description: ex.intl.string(ex.t["1uPk1Z"]),
                    primaryAsset: iM,
                    ctaText: ex.intl.string(ex.t.y9TxXV),
                    onCtaClick: N,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        if ((e.splice(+!!t, 0, b), null != C && e.splice(1, 0, C), x)) {
            let t = null != C ? 2 : 1;
            e.splice(t, 0, {
                id: si.PROFILE_FRAMES_CARD_ID,
                title: ex.intl.string(ex.t.SGBDnu),
                description: ex.intl.string(ex.t.cMgegQ),
                pillText: ex.intl.string(ex.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: u()(iu.lH, iu.yK),
                ctaText: ex.intl.string(ex.t.jVcuVY),
                onCtaClick: () => (0, y.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(io.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > s && e.splice(s, e.length - s), e;
    }, [b, C, E, T, R, p, N, h, f, n, a, l, r, d, m, x]);
}
var ik = s(355097);
let iU = "/assets/1eb1b74667b4c0f0.svg",
    iG = "/assets/983b60e4fcaf973b.svg";
var iw =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iB = [
    { id: "bestof", label: () => ex.intl.string(ex.t.q1u7nQ) },
    { id: "appearance", label: () => ex.intl.string(ex.t.CUnZkZ) },
    { id: "upgrades", label: () => ex.intl.string(ex.t.KC5q8v) },
    { id: "vip", label: () => ex.intl.string(ex.t.DjEAcv) },
];
var iH = s(631255);
function iF(e) {
    e.stopPropagation();
}
function iV(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, s2.DP)(),
                t = (0, s3.X)("useFavoritesPerkCards"),
                s = (0, s5.Lh)(),
                i = (0, s9.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, s6.A)({ scrollPosition: ik._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, eS.openUserSettings)(ey.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, eS.openUserSettings)(ey.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, eS.openUserSettings)(ey.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, y.pX)(e1.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, eS.openUserSettings)(ey.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                g = (0, s8.A)({ analyticsLocations: n }),
                x = (0, o.useCallback)(() => {
                    (0, eS.openUserSettings)(ey.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, s7.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iL(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = im("useFavoritesPerkCards"),
                b = ib(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: si.SERVER_BOOSTS_CARD_ID,
                            title: ex.intl.formatToPlainString(ex.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ex.intl.formatToPlainString(ex.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sB, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: si.PROFILES_CARD_ID,
                            title: ex.intl.string(ex.t.xDRab3),
                            description: ex.intl.string(ex.t.yn6fWA),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: t ? g : a,
                            primaryAsset: (0, c.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: si.HD_VIDEO_CARD_ID,
                            title: ex.intl.string(ex.t["/mQ5gg"]),
                            description: ex.intl.string(ex.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sF, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: si.CLIENT_THEMES_CARD_ID,
                            title: ex.intl.string(ex.t.acc6h6),
                            description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iO,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: si.MORE_EMOJIS_CARD_ID,
                            title: ex.intl.string(ex.t.D8vIDT),
                            description: ex.intl.string(ex.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sz, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: si.LARGE_UPLOADS_CARD_ID,
                            title: ex.intl.string(ex.t.nL1WZV),
                            description: ex.intl.formatToPlainString(ex.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, c.jsx)(sW, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: si.CUSTOM_APP_ICONS_CARD_ID,
                            title: ex.intl.string(ex.t["GU+wqh"]),
                            description: ex.intl.string(ex.t["1uPk1Z"]),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iM,
                            categories: ["appearance"],
                        },
                        {
                            id: si.ENTRANCE_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.WJfCPi),
                            description: ex.intl.string(ex.t.liQKJR),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: si.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ex.intl.string(ex.t.OLtTrt),
                            description: ex.intl.string(ex.t["di/pXR"]),
                            onCtaClick: t ? g : x,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            primaryAsset: iD,
                            categories: ["appearance"],
                        },
                        {
                            id: si.CUSTOM_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t["Cu/oFd"]),
                            description: ex.intl.string(ex.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sK, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: si.SPECIAL_STICKERS_CARD_ID,
                            title: ex.intl.string(ex.t.MQoVeb),
                            description: ex.intl.string(ex.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: iu.Uc,
                                children: (0, c.jsx)(sY, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: si.SUPER_REACTIONS_CARD_ID,
                            title: ex.intl.string(ex.t.qERvAA),
                            description: ex.intl.string(ex.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sX, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: si.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.ssVDYQ),
                            description: ex.intl.string(ex.t.aUSRMa),
                            primaryAsset: (0, s1.M)(e) ? iU : iG,
                            categories: ["upgrades"],
                        },
                        {
                            id: si.EARLY_ACCESS_CARD_ID,
                            title: ex.intl.string(ex.t["g/KRY6"]),
                            description: ex.intl.string(ex.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sq, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: si.BADGE_CARD_ID,
                            title: ex.intl.string(ex.t.Bn3CtB),
                            description: ex.intl.string(ex.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sQ, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: si.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ex.intl.string(ex.t["MTD+7w"]),
                            description: ex.intl.string(ex.t.Bhs0s6),
                            ctaText: ex.intl.string(ex.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: si.PERMADECOS_CARD_ID,
                            title: ex.intl.string(ex.t.L14NZN),
                            description: ex.intl.string(ex.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(s0, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, b, a, l, r, d, u, m, x, g, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iw.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: iH.uW,
        children: [
            (0, c.jsx)(er.D, { variant: "display-sm", className: iH.R_, children: ex.intl.string(ex.t["Uh3+CA"]) }),
            (0, c.jsx)(sG.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iH.Lq,
                "aria-label": ex.intl.string(ex.t["Uh3+CA"]),
                children: iB.map((e) =>
                    (0, c.jsx)(sG.V.Item, { id: e.id, className: iH.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sw.A,
                {
                    gap: 20,
                    className: iH.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sm.S,
                                { ...e, glowing: t === e.id, containerClassName: iH.Ui, onFocus: iF },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var iz = s(411450);
let iW = function (e) {
    let { className: t } = e,
        s = (0, s2.DP)();
    return (0, c.jsx)("img", {
        className: u()(iz.D, t),
        src: (0, s1.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iK = s(300758);
let iY = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, c.jsxs)("div", {
              className: u()(iK.kL, iK.Gd, iK.Eg),
              children: [(0, c.jsx)(iW, {}), (0, c.jsx)(t3, {}), n],
          })
        : (0, c.jsx)(eN.h, { color: "nitro-pink", className: u()(iK.kL, iK.Gd), offsetBottom: i, children: n });
};
function iX(e) {
    let { glowingPerkId: t = null } = e,
        s = iL();
    return (0, c.jsx)(sh, {
        sectionClassName: sp.uW,
        heading: (0, c.jsx)(er.D, { variant: "display-sm", className: sp.R_, children: ex.intl.string(ex.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, c.jsx)(
                    sm.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: u()(sp.Nr, { [sp.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function iq(e, t, s, i) {
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
var iZ = s(92737);
let iQ = "/assets/cd2be35d285d4675.svg",
    iJ = (e) => {
        let { userId: t } = e,
            s = (0, U.ds)(),
            { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
            n = V("nitro_member_hub_header"),
            a = (0, m.zy)();
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = [(0, X.Ay)()];
                null != t && e.push((0, Q.A)(t)), await Promise.all(e);
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
            { isReady: p, programReward: h } = (0, q.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: N,
                glowingSectionId: b,
                glowingPerkId: C,
                scrollBlock: E,
                scrollInline: T,
            } = o.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(iZ.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        iq(N ?? "", null != N, E, T);
        let [R, v] = o.useState(!1),
            P = (0, ee.p)(),
            y = o.useRef(null),
            [S, D] = o.useState(!1),
            M = null != P && null != d && d.status === e1.Dmq.CANCELED,
            k = (0, es.iU)(tF.gD.PREMIUM_MONTH_TIER_2, P, d),
            G = !S && M,
            w = null != (0, g.bG)([Z.A], () => (null != t ? Z.A.getUserProfile(t) : null)) && (p || null != h),
            B = (0, $.TF)({ location: "PremiumSubscriberHome" }),
            F = (0, eh.q)(d, B === $.Iz.STICKY_BAR),
            [ei, en] = (0, Y.iP)(
                null != F && w && d?.id != null ? z.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                d?.id ?? "",
                { cooldownDurationMs: J.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ea = null != d && d.status === e1.Dmq.CANCELED,
            el = i && !s && !ea,
            er = n && (s || ea),
            { analyticsLocations: ec } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eo, ed] = o.useState(!1);
        return w
            ? (0, c.jsxs)(K.Gt, {
                  className: u()(iK.xW, iK.Gd),
                  ref: l,
                  children: [
                      (0, c.jsx)(iY, {
                          shouldRenderNitroHomeHeaderExperiment: el,
                          shouldRenderNitroHomeFollowup: er,
                          gradientOffsetBottom: s && !n ? 0.55 : 0.8,
                          children: (0, c.jsxs)(j.f5, {
                              value: ec,
                              children: [
                                  (0, c.jsx)(W.L, {
                                      innerRef: y,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tZ, {
                                          buttonVisibilityRef: y,
                                          className: iK.v1,
                                          userDiscountOffer: P,
                                          discountedPrice: k,
                                      }),
                                  }),
                                  (0, c.jsx)(iX, { glowingPerkId: C }),
                                  (0, c.jsx)(sO, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(iV, { glowingPerkId: C }),
                                  (0, c.jsx)(eb, {
                                      className: iK.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e1.liQ.NITRO_HOME, section: e1.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: iK.hz }),
                                  (0, c.jsx)(W.L, {
                                      innerRef: r,
                                      onChange: (e) => {
                                          e &&
                                              !eo &&
                                              (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ec,
                                              }),
                                              ed(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: r, className: iK._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: iQ,
                                      className: iK.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ex.intl.string(ex.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      M &&
                          null != k &&
                          (0, c.jsx)(sU, {
                              isVisible: G && R,
                              premiumSubscription: d,
                              churnDiscountOffer: P,
                              discountedPrice: k,
                          }),
                      null != ei &&
                          null != F &&
                          null != d &&
                          (0, c.jsx)(ep, { premiumSubscription: d, content: F, markAsDismissed: en }),
                  ],
              })
            : el || er
              ? (0, c.jsxs)("div", {
                    className: u()(iK.kL, iK.Lq, iK.TN, iK.Eg),
                    children: [
                        (0, c.jsx)(t3, {}),
                        (0, c.jsx)("div", { className: iK.S, children: (0, c.jsx)(x.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(iK.kL, iK.Lq), children: (0, c.jsx)(x.y, {}) });
    };
var i$ = s(286320),
    i0 = s(727949),
    i1 = s(440005),
    i2 = s(26508);
let i7 = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var i6 = s(860839);
let i3 =
    "https://cdn.discordapp.com/assets/content/dfb187cfa9d267774f50c4f67cb7628658cefc11db41c6a04c08fc5aadc9dbcc.png";
function i8(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: i3,
        srcSet: `${i3} 1x, https://cdn.discordapp.com/assets/content/adb910c257d7510b97da4dccb2a4cea5f3a3fc6eb225dbfbbef0dd9d2a1971bf.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var i5 = s(783420),
    i9 = s(204413),
    i4 = s(245383),
    ne = s(824069),
    nt = s(785007),
    ns = s(508770),
    ni = s(377541);
function nn(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: ni.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: ni.fQ,
                                children: (0, c.jsx)(ns.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: ni.qU,
                            children: [
                                (0, c.jsxs)(el.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: ni.NI,
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
                                    className: ni.br,
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
                radioBarClassName: u()(ni.tG, { [ni.uA]: s, [ni.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nt.$d, {
        ...i,
        options: n,
        value: t,
        size: nt.r9.NOT_SET,
        className: ni.ul,
        withTransparentBackground: !0,
    });
}
var na = s(773669),
    nl = s(97352),
    nr = s(252424),
    nc = s(526292),
    no = s(186223),
    nd = s(369827),
    nu = s(803496);
function nm(e) {
    let t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        s = (0, nd.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nu.A)({
            activeSubscription: t,
            skuIDs: [(0, eO.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function ng(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nx(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tF.Ff.YEAR
          ? ex.intl.format(ex.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : ex.intl.format(ex.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nf = s(883519);
function np(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(i5.A, {
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
function nh(e) {
    let { skuId: t, className: s } = e,
        i = t === tF.pe.TIER_2,
        n = (0, s1.q)((0, s2.Ay)()),
        a = (0, eG.V)(),
        l = a?.subscriptionTrial,
        r = l?.skuId === t,
        d = i && r && null != l,
        m = (0, eU.p)(),
        {
            planRadioOptions: x,
            selectedPlanId: f,
            setSelectedPlanId: p,
            shouldSuppressDiscountCta: h,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tF.En[t],
                a = tF.zE[t],
                l = t === tF.pe.TIER_2,
                r = nm(t),
                c = (0, eG.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, g.cf)([O.A], () => {
                    let e = O.A.getPremiumTypeSubscription();
                    return {
                        subscribedSkuId: (0, eO.aZ)(e),
                        isMonthlyPlanDisabled:
                            n === tF.gD.PREMIUM_MONTH_TIER_2 &&
                            null != e &&
                            [tF.gD.PREMIUM_YEAR_TIER_0, tF.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                    };
                }, [n]),
                x = u === t,
                f = (0, eU.O)(),
                p = (0, nc.k5)(),
                h = (0, g.bG)([na.default], () => na.default.locale),
                N = (0, es.U9)(f, t),
                A = (0, es.N1)(n),
                j = (0, es.N1)(a),
                [b, C] = (0, g.yK)([nl.A], () => [nl.A.get(n), nl.A.get(a)], [n, a]),
                E = null != b ? (0, eO.sS)(b, r) : null,
                T = null != C ? (0, eO.sS)(C, r) : null,
                R =
                    N && f?.discount.amount != null && !p
                        ? ex.intl.formatToPlainString(ex.t.IAybsG, {
                              discount: (0, nr.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                v = f?.discount?.planIds,
                I = ng(a, N, v, j, T),
                _ = ng(n, N, v, A, E),
                P = f?.discount.userUsageLimitInterval,
                y = f?.discount.userUsageLimit ?? tF.OJ,
                S = !l || I || _ || null == C ? null : (0, no.Cj)(C, !1, r),
                D = !_ || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tF.pe.TIER_2 ? null : s && !i ? tF.En[t] : tF.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                L = null == s || (s === n && m) ? M : s,
                k = [
                    {
                        value: a,
                        primaryText: ex.intl.string(ex.t["/Q4HRN"]),
                        primarySubText:
                            (I
                                ? nx({
                                      expectedUsageInterval: tF.Ff.YEAR,
                                      usageInterval: P,
                                      discountDuration: y,
                                      regularPrice: T,
                                      discountedPrice: j,
                                  })
                                : null) ?? S,
                        secondaryText: I ? j : T,
                        secondarySubText: I ? T : null,
                        badgeText: I ? R : null,
                        useGradientSelectedBorder: l && (d || I || D),
                        isDisabled: x,
                    },
                    {
                        value: n,
                        primaryText: ex.intl.string(ex.t.DKzs96),
                        primarySubText: _
                            ? nx({
                                  expectedUsageInterval: tF.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: y,
                                  regularPrice: E,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : E,
                        secondarySubText: _ ? E : null,
                        badgeText: _ ? R : null,
                        useGradientSelectedBorder: l && (d || _),
                        isDisabled: x || m,
                    },
                ],
                U = L === a ? I : L === n && _;
            return { planRadioOptions: k, selectedPlanId: L, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        N = i && null == m ? "expressive" : "secondary",
        { buttonText: A } = (0, i4.A)({ subscriptionTier: t }),
        { subscribeButtonProps: j } = (0, i9.$)({
            subscriptionTier: t,
            variantOverride: N,
            buttonTextOverride: h ? A : void 0,
        }),
        b = (0, c.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nf.Ux,
            children: [
                (0, c.jsx)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nf.MY,
                    children: (0, c.jsx)(er.D, {
                        variant: "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: nf.JJ,
                        children: i ? ex.intl.string(ex.t.lG6a5x) : ex.intl.string(ex.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(el.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nf.qT,
                    children: i
                        ? (0, c.jsx)(i6.ZP, {
                              featureSet: i6.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(i6.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(ne.K, {}),
                d
                    ? (0, c.jsx)("div", {
                          className: nf.qS,
                          role: "separator",
                          children: (0, c.jsx)(ec.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nf.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tF.WT.DAY:
                                          if (t % 7 == 0) return ex.intl.format(ex.t["1MYPH0"], { weeks: t / 7 });
                                          return ex.intl.format(ex.t.pYfIoO, { days: t });
                                      case tF.WT.MONTH:
                                          return ex.intl.format(ex.t["96hTLe"], { months: t });
                                      case tF.WT.YEAR:
                                          return ex.intl.format(ex.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(l.interval, l.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nf.yF }),
                (0, c.jsxs)("div", {
                    className: nf.qr,
                    children: [
                        (0, c.jsx)(nn, { planRadioOptions: x, value: f ?? "", onChange: (e) => p(e.value) }),
                        (0, c.jsx)(np, { skuId: t, selectedPlanId: f, subscribeButtonProps: j }),
                    ],
                }),
            ],
        }),
        C = u()(nf.Nr, s, { [nf.Fw]: i });
    return i
        ? (0, c.jsxs)(eN.h, {
              color: "nitro-pink",
              className: C,
              children: [
                  (0, c.jsx)("div", {
                      className: nf.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(i8, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  b,
              ],
          })
        : (0, c.jsx)("div", { className: C, children: b });
}
function nN(e) {
    let { className: t } = e,
        s = (0, s1.q)((0, s2.Ay)()),
        i = (0, eU.p)(),
        n = null != i,
        a = nm(tF.pe.TIER_2),
        l = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: r, eventHandlers: o } = (0, eZ.A)({ userId: l?.id, size: eK._3.SIZE_32, animateOnHover: !0 }),
        d = (0, g.bG)([nl.A], () => nl.A.get(tF.gD.PREMIUM_GROUP_MONTH)),
        m = (0, es.N1)(tF.gD.PREMIUM_GROUP_MONTH),
        f = n
            ? ex.intl.format(iN.default["7j70dP"], {
                  percent: i.discount?.amount,
                  premiumGroupProductName: (0, ih.DP)(),
              })
            : ex.intl.string(ex.t["2pG5Ga"]),
        p = (0, c.jsx)(i5.A, {
            subscriptionTier: tF.pe.TIER_2,
            initialPlanId: tF.gD.PREMIUM_GROUP_MONTH,
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
    if (n && null != m) h = m;
    else if (null != d)
        try {
            h = (0, eO.sS)(d, a, !1, !1, !1);
        } catch {
            h = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nf.Nr, t),
        children: (0, c.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nf.Ux,
            children: [
                (0, c.jsxs)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nf.MY,
                    children: [
                        (0, c.jsx)(er.D, {
                            variant: "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: nf.JJ,
                            children: ex.intl.string(iN.default.eSKiXk),
                        }),
                        null != l &&
                            (0, c.jsxs)(el.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nf.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nf.uA,
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
                                        className: nf.VL,
                                        children: (0, c.jsxs)(ec.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", ih.LM],
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
                    className: nf.qT,
                    children: (0, c.jsx)(i6.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nf.yF }),
                (0, c.jsxs)("div", {
                    className: nf.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nf.ec,
                            children: [
                                (0, c.jsx)(ec.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: ex.intl.string(iN.default.SvSwga),
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
    });
}
function nA(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, i6.pw)(t),
        a = (0, ip.PA)(),
        l = (0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        r = { [nf.iR]: !l };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(el.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nf.oB, s),
            children: [
                (0, c.jsx)(er.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: nf.op,
                    children: ex.intl.string(ex.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nf.kR, { [nf.BQ]: a }),
                    children: [
                        (0, c.jsx)(nh, { skuId: tF.pe.TIER_0, className: u()(nf.rz, r) }),
                        (0, c.jsx)(nh, { skuId: tF.pe.TIER_2, className: u()(nf.Rv, r) }),
                        a && (0, c.jsx)(nN, { className: u()(nf.zz, r) }),
                    ],
                }),
            ],
        }),
    });
}
var nj = s(126186),
    nb = s(366010),
    nC = s(303136);
let nE = function (e) {
    let t,
        { className: s } = e,
        i = (0, tN.TM)(),
        n = (0, nb.q)((0, s2.Ay)());
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
                nC.A,
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
var nT =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nR = s(5571);
let nv = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e1.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(ei.animated.div, {
        className: nR.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nR.U,
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
var nI = s(685661);
let n_ = function () {
    let e = (0, th.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nI.BI,
                children: (0, c.jsx)(tC, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tj.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tL, alt: "", className: nI.Q }),
                }),
            }),
            (0, c.jsx)(tT, {
                isMotionReduced: e,
                boltContainerClassName: nI.nJ,
                carContainerClassName: nI.IN,
                hammerContainerClassName: nI.Gj,
                keyContainerClassName: nI.FV,
                starContainerClassName: nI.E1,
                boltAssetClassName: nI.j7,
                carAssetClassName: nI.or,
                hammerAssetClassName: nI.Wv,
                keyAssetClassName: nI.rs,
                starAssetClassName: nI.OY,
            }),
        ],
    });
};
var nP = s(502701);
let ny = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nP.kL,
            children: (0, c.jsxs)("div", {
                className: nP.hQ,
                children: [
                    (0, c.jsx)(n_, {}),
                    (0, c.jsx)(er.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: nP.RH,
                        children: ex.intl.string(ex.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
ny.displayName = "PremiumMarketingFooter";
var nS = s(939249);
let nD = function (e) {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        n = {
            [nT.HOME]: ex.intl.string(ex.t.uGRXjS),
            [nT.WHATS_NEW]: ex.intl.string(ex.t["mfcR/v"]),
            [nT.BEST_OF_NITRO]: ex.intl.string(ex.t.xQKkE8),
            [nT.PLANS]: ex.intl.string(ex.t.wyNMnm),
            [nT.COMPARE]: ex.intl.string(ex.t.pwD7If),
        },
        a = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, t$.Gh)("premium_marketing_nav_bar") && null != a,
        r = o.useRef(null),
        d = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsxs)(tJ.A, {
        className: t7.TQ,
        transparent: !0,
        children: [
            (0, c.jsxs)("div", {
                className: t7.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: t7.wG,
                        children: [
                            (0, c.jsx)(ed.t, { className: t7.nE, colorClass: t7.oG }),
                            (0, c.jsx)("div", {
                                className: t7.zc,
                                role: "tablist",
                                "aria-label": ex.intl.string(ex.t.O9MiXY),
                                children: d.map((e) => {
                                    let t = s === e.id,
                                        i = n[e.id];
                                    return (0, c.jsxs)(
                                        nS.D,
                                        {
                                            role: "tab",
                                            "aria-selected": t,
                                            className: t7.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, c.jsx)(ec.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                t && (0, c.jsx)("div", { className: t7.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: t7.MQ,
                        children: [
                            l &&
                                (0, c.jsx)(t2.l, { ref: r, size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            l && i && (0, c.jsx)(t1.O, { targetElementRef: r }),
        ],
    });
};
var nM = s(704333),
    nO = s(414499),
    nL = s(597770),
    nk = s(500060),
    nU = s(866665),
    nG = s(406860),
    nw = s(870975),
    nB = s(900485);
function nH() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nG.A)({ boxType: sa.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nM.B, text: ex.intl.string(sc.default.MUypiB) },
            { icon: nO.h, text: ex.intl.string(sc.default.ec5Rdd) },
            { icon: nL.o, text: ex.intl.string(sc.default["9t2CzW"]), tooltip: sc.default.AyECej },
            { icon: nk.o, text: ex.intl.string(sc.default.R7YJAY) },
        ];
    return (0, c.jsx)(W.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nB.iE,
            children: (0, c.jsxs)("div", {
                className: nB.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nB.j,
                        children: [
                            (0, c.jsx)("div", { className: nB._g }),
                            (0, c.jsx)("div", { className: nB.$h }),
                            (0, c.jsx)("div", { className: nB.Rv }),
                            (0, c.jsx)("div", { className: nB.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nB.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nB.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(er.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nB.R_,
                                                children: ex.intl.string(sc.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nB.yf,
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
                                                                            className: nB.Jn,
                                                                            children: (0, c.jsx)(nU.m, {
                                                                                text: ex.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(t9.m, {
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
                                                        className: nB.xF,
                                                        children: (0, c.jsx)(tt.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tF.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nB.WE,
                                        children: (0, c.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ex.intl.format(sc.default.KDKdWi, { termsLink: (0, nw.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nB.r1,
                                children: (0, c.jsx)("img", {
                                    className: nB.wm,
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
var nF = s(750338),
    nV = s(387640),
    nz = s(950228);
function nW(e) {
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
        className: u()(nz.boxBackdrop, t),
        children: [
            (0, c.jsx)(er.D, {
                className: nz.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: nz.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nz.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nV.A0.SMALL;
                            break;
                        case 2:
                            s = nV.A0.MEDIUM;
                            break;
                        default:
                            s = nV.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                nF.A,
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
let nK = o.memo(function (e) {
        let t = (0, t8.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, nV.Ay)(t);
        return (0, c.jsx)(nW, {
            boxLayout: s,
            title: ex.intl.string(ex.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(nH, {}) : null,
            ...e,
        });
    }),
    nY = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nV.Ay)();
        return (0, c.jsx)(nW, { boxLayout: t, title: ex.intl.string(ex.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nX = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nq = s(236834),
    nZ = s(167805);
function nQ(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t?.id, size: eK._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nZ.$6,
        children: (0, c.jsxs)("div", {
            className: nZ.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nZ.kR,
                    children: (0, c.jsx)(eY.eu, { src: s, "aria-label": t.username, size: eK._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(er.D, {
                    variant: "heading-sm/normal",
                    className: nZ.FS,
                    color: "text-strong",
                    children: ex.intl.format(ex.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var nJ = s(579245),
    n$ = s(369805);
let n0 = function () {
    let e = (0, n$.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eV, { text: e });
};
function n1() {
    let e = (0, g.bG)([nl.A], () => nl.A.getForSkuAndInterval((0, eO.mH)(tF.pe.TIER_0), tF.WT.MONTH));
    return null != e ? (0, eO.sS)(e) : "\u2026";
}
var n2 = s(857681);
let n7 = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, th.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        i = (0, tN.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: n2.YU,
        children: [
            (0, c.jsx)(tI, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: n2.wG,
                assetClassName: n2.lu,
            }),
            (0, c.jsx)(tT, {
                isMotionReduced: s,
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
            }),
        ],
    });
};
var n6 = s(507256);
let n3 = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = n1(),
            r = nX.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, nq.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: x } = eH(
                !(0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
            ),
            f = (0, i$.b)(),
            p = !d && f.length > 0,
            h = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            b = (0, nc.ar)() && !N,
            C = (0, eU.O)(),
            E = (null != C && tF.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(n6.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: n6.hQ,
                        children: [
                            (0, c.jsx)(n7, { containerVisibilityPercentage: x }),
                            b && (0, c.jsx)(n0, {}),
                            (0, c.jsx)("div", {
                                className: n6.s8,
                                children: (0, c.jsx)(tm.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(er.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: n6.wx,
                                        children: ex.intl.string(ex.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: n6.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: n6.eZ,
                                            children: (0, c.jsx)(nQ, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: n6.Qn,
                                            children: (0, c.jsx)(nJ.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: b ? n6.es : n6.UJ,
                                        children: [
                                            (0, c.jsx)(tt.A, {
                                                size: "md",
                                                fullWidth: b,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == i ? tF.pe.NONE : i,
                                                buttonTextOverride: E ? ex.intl.string(ex.t["2pG5Ga"]) : void 0,
                                            }),
                                            !b && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n6.iQ,
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
                                            promotionId: h.promotionId,
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
var n8 = s(820081),
    n5 = s(140735),
    n9 = s(401432),
    n4 = s(580630),
    ae = s(795269),
    at = s(84483),
    as = s(864386),
    ai = s(509826),
    an = s(202600);
function aa(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n8.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n5.A, { children: ex.intl.string(ex.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n9.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n5.A, { children: ex.intl.string(ex.t.l4qZrp) }),
              ],
          });
}
function al(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(ai.nM, ai.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: ai.nx,
                children: (0, c.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: ai.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(aa, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: ai.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(aa, { includes: !!i.includes }),
            }),
        ],
    });
}
function ar(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(ai.nM, ai.Gf),
                children: (0, c.jsxs)("td", {
                    className: ai.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(er.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(ec.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(al, { ...e }, e.id)),
        ],
    });
}
function ac(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tF.PremiumTypes.TIER_0 ? ex.intl.string(ex.t.tUbSDK) : ex.intl.string(ex.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: ai.nn,
        children: [
            (0, c.jsxs)("div", {
                className: ai.KS,
                children: [
                    (0, c.jsx)(ed.t, { colorClass: ai.oG }),
                    (0, c.jsx)(er.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(er.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function ao(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, n4.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: ai.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ai.Cr,
                    children: (0, c.jsx)(er.D, { variant: "heading-xl/bold", children: ex.intl.string(ex.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ai.Hn,
                    children: (0, c.jsx)(ac, {
                        premiumType: tF.PremiumTypes.TIER_0,
                        priceString: (0, n4.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ai.Hn,
                    children: (0, c.jsx)(ac, { premiumType: tF.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let ad = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tF.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, eG.V)(),
            r = l?.subscriptionTrial?.skuId,
            d = (0, eU.O)(),
            m = (0, es.YJ)(d),
            g = null != d && (0, es.U9)(d, tF.pe.TIER_2) && m === tF.gD.PREMIUM_MONTH_TIER_2,
            x = (0, es.N1)(m),
            f = null != x ? `${x}/${(0, eO.FJ)(tF.WT.MONTH)}` : "",
            p = (0, eO.JM)(tF.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eO.JM)(tF.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, t8.b)("premium_marketing_comparison"),
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
                            label: ex.intl.string(as.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, ie.lk)(id.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = sb.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sC.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, at.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ex.intl.string(ex.t.NG1e6l),
                            subtitle: ex.intl.format(sc.default.uJcbMv, {
                                termsLink: eM.A.getArticleURL(e1.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ex.intl.string(sc.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: ex.intl.string(sc.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: ex.intl.string(s_.default["gc2sa/"]),
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
                                label: ex.intl.string(il.default["20tmSN"]),
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
                                    tier0ColumnData: { text: (0, eO.EJ)(tF.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eO.EJ)(tF.PremiumTypes.TIER_2) },
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
                                        numBoosts: tF.M4,
                                        percentageOff: (0, n4.l9)(na.default.locale, tF.oX / 100),
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
            t = (0, c.jsx)(ae.R, { className: u()(ai.Io, ai.SP), text: e });
        }
        let b = r === tF.pe.TIER_0 || n === tF.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(ai.zr, s),
                children: [
                    (0, c.jsx)(er.D, {
                        className: ai.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: ex.intl.string(ex.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: ai.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(ai.fO, { [ai.Vd]: b, [ai.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: ai.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: ai.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: an, alt: "", className: ai.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: ai.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: ai.tp,
                                children: [
                                    (0, c.jsx)(ao, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: g,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(ar, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    au = function (e) {
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
var am = s(818348),
    ag = s(952661);
function ax(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nA, { innerRef: t }) : (0, c.jsx)(nj.jP, { innerRef: t });
}
let af = () => {
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
        y = null !== P && P !== tF.pe.TIER_2 ? tF.pe.TIER_2 : null,
        S = (0, eL.cg)(),
        { analyticsLocations: D } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        T(!0);
    }, []);
    let M = (0, sA.A0)({ location: "PremiumMarketingHome" }),
        k = (0, i2.DK)(i1.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: U } = (0, ie.lk)(id.rE.NITRO_HOME_MARKETING),
        G = k && U ? nV.NI.COMBINED_ORBS : U ? nV.NI.ORB_MULTIPLIER : k ? nV.NI.ORB_REWARDS : null,
        w = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? G
                : t === nV.NI.THREE_P_PROMOTIONS
                  ? M
                      ? nV.NI.CALL_OF_DUTY
                      : nV.NI.THREE_P_PROMOTIONS
                  : null;
        }, [M, e.search, G]);
    iq(w ?? "", null != w);
    let { navBarSections: B, activeSectionId: H } = au([nT.HOME, nT.WHATS_NEW, nT.BEST_OF_NITRO, nT.PLANS, nT.COMPARE]),
        { home: F, whatsNew: V, bestOfNitro: z, plans: Y, compare: X } = B,
        q = (function (e) {
            let { location: t } = e;
            return i7.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        Z = (0, c.jsxs)("div", {
            ref: s,
            className: u()(ag.kL, ag.Gd, ag.iI, { [ag.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nE, { className: ag.yH }),
                (0, c.jsx)(nD, { navBarSections: B, activeSectionId: H, isAnimationComplete: d }),
                (0, c.jsxs)("div", {
                    className: ag.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: ag.qY,
                            ref: F.ref,
                            children: (0, c.jsx)(W.L, {
                                innerRef: n,
                                onChange: (e) => p(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n3, {
                                    ref: n,
                                    subscriptionTier: y,
                                    isEligibleForBogoPromotion: S,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: ag.So,
                            ref: V.ref,
                            children: (0, c.jsx)(nK, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ag.KQ,
                            ref: z.ref,
                            children: (0, c.jsx)(nY, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ag.s5,
                            ref: Y.ref,
                            children: (0, c.jsx)(
                                W.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => N(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(ax, { innerRef: i, isPlanSelectUiRedesignEnabled: q }),
                                },
                                q ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: ag.aC, ref: X.ref, children: (0, c.jsx)(ad, {}) }),
                    ],
                }),
                (0, c.jsx)(W.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !b &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            C(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: ag._Z }),
                }),
                (0, c.jsx)(ny, { ref: l }),
                (0, c.jsx)(nv, { isVisible: !f && !h && E, subscriptionTier: y, isEligibleForBogoPromotion: S }),
                (0, c.jsx)(nE, { className: ag.MF }),
            ],
        });
    return (0, c.jsx)(t4.N, {
        theme: am.NJ.DARKER,
        children: (e) => (0, c.jsx)(K.Gt, { className: u()(ag.XG, e), ref: t, children: Z }),
    });
};
var ap = s(862482),
    ah = s(412260),
    aN = s(662367),
    aA = s(374403),
    aj = s(396375),
    ab = s(815846),
    aC = s(695366),
    aE = s(107736);
let aT = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nc.ar)();
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
        return (0, eS.openUserSettings)(ey.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? eO.Ay.getSkuIdForPlan(r.planId) : null) === tF.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(se.Z, {
            className: u()(aE.kL, n, { [aE.He]: l }),
            type: se.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(aC.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aE.Kk, { [aE.Pt]: l }),
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
var aR = s(697335);
let av = function (e) {
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
var aI = s(900797),
    a_ = s(847374),
    aP = s(812993),
    ay = s(504041);
function aS(e) {
    let { className: t } = e;
    return (0, c.jsx)(aP.Lp, { className: u()(ay.T, t), text: ex.intl.string(ex.t.EYxi0o) });
}
var aD = s(904788),
    aM = s(507553),
    aO = s(255438);
let aL = "/assets/5b4fec8511c3676a.svg",
    ak = "/assets/0838bda6ecd20d91.svg";
function aU(e, t, s) {
    return (0, s1.M)(e) ? t : s;
}
var aG = s(365742);
function aw(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nS.D, {
        onClick: s,
        className: aG.customButton,
        children: [
            t ? ex.intl.string(ex.t.maZaN3) : ex.intl.string(ex.t["37C26f"]),
            t
                ? (0, c.jsx)(aI.t, { size: "md", color: "currentColor", className: aG.arrow })
                : (0, c.jsx)(a_.a, { size: "md", color: "currentColor", className: aG.arrow }),
        ],
    });
}
function aB(e) {
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
            className: u()(aG.perkCard, i),
            children: [
                r
                    ? (0, c.jsx)(aD.A, {
                          className: aG.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aS, { className: aG.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aG.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(er.D, {
                            variant: "heading-lg/extrabold",
                            className: aG.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: aG.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aH = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, s2.Ay)(),
                n = (0, s3.X)("usePerkCards"),
                a = (0, th.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eO.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, aO.Xq)(tF.f3 / 1024, { useKibibytes: !0 });
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
                    imageSource: aU(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                aM.A.setState({ scrollPosition: ik._F.TRY_IT_OUT }),
                                    t(ey.X.PROFILE_PANEL, { analyticsLocations: e });
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
                    imageSource: aU(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: aU(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: aU(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ex.intl.string(ex.t["lGcW+c"]),
                    description: ex.intl.string(ex.t["/fDyO+"]),
                    imageSource: aU(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ex.intl.string(ex.t["1c+xwT"]),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: aU(i, ak, aL),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: aU(i, ak, aL),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: aU(i, ak, aL),
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
                    imageSource: aU(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: aU(i, iU, iG),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aG }),
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
        className: u()(aG.perksContainer, t, {
            [aG.partiallyHidden]: i && !n,
            [aG.subscriberNitroHome]: i,
            [aG.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(er.D, {
                variant: "heading-xxl/extrabold",
                className: aG.perksTitle,
                children: i ? ex.intl.string(ex.t.QX14gI) : ex.intl.string(ex.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aG.perkCardContainer, { [aG.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aB, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aG.sizeGizmo]: !n, [aG.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aw, {
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
                        (0, c.jsx)("div", { className: u()(aG.cover, { [aG.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aF = s(194509),
    aV = s(222214);
let az = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: e1.JJy.MARKETING_FLOATING_CTA },
        r = (0, s2.Ay)(),
        o = (0, nb.M)(r);
    return (0, c.jsx)(ei.animated.div, {
        className: u()(aV.iE, { [aV.H8]: i, [aV.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aV.zW : aV.iJ,
            children: [
                (0, c.jsx)(aj.A, {
                    color: o ? ap.XD.BRAND_INVERTED : void 0,
                    className: u()(aV.x6, { [aV.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aV.PJ,
                }),
                (0, c.jsx)(aF.A, { className: aV.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aW = s(93805);
function aK(e) {
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
            ? (0, c.jsx)(aj.A, {
                  color: l ? ap.XD.BRAND_INVERTED : void 0,
                  className: u()(aW.x6, aW.Ph, n, { [aW.Sq]: t && a, [aW.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aW.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aj.A, {
                  color: l || !a ? ap.XD.BRAND_INVERTED : void 0,
                  className: u()(aW.x6, aW.Ph, n, { [aW.Sq]: t && a, [aW.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aF.A, { className: u()(aW.x6, n), color: a ? void 0 : ap.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aW.UD, i), children: [o, " ", d] });
}
function aY() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aD.p, { className: aW.zd }),
            (0, c.jsx)(aD.p, { className: aW.G }),
            (0, c.jsx)(aD.p, { className: aW.zy }),
            (0, c.jsx)(aD.p, { className: aW.GX }),
        ],
    });
}
function aX(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = n1();
    return (0, c.jsx)(ec.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(aW.h_, { [aW.If]: s, [aW.jn]: i }),
        children: ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aq = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ek.QQ)(),
        o = (0, nc.ar)(),
        d = (0, eL.cg)(),
        m = (0, i$.b)().length > 0,
        g = ex.intl.string(ex.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(aW.kL, s, { [aW.V1]: !o, [aW.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aW.I6 : aW.G1,
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
                                  className: aW.DF,
                                  children: (0, c.jsx)(nJ.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aX, {}),
                        d || r
                            ? (0, c.jsx)("div", {
                                  className: aW.UD,
                                  children: (0, c.jsx)(aF.A, { className: u()(aW.x6, i), color: ap.XD.WHITE }),
                              })
                            : (0, c.jsx)(aK, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(aX, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aY, {}),
            ],
        }),
    });
});
var aZ = s(22118),
    aQ = s(918676),
    aJ = s(967603);
function a$(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(av, { lifted: t }) : null;
}
let a0 = () => {
        (0, _.P)(I);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, s2.Ay)(),
            n = (0, s1.M)(i),
            [a, l] = o.useState(!1),
            [r, d] = o.useState(!1),
            [m, x] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eO.EL)(h) : null,
            b = null != N ? eO.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== b && b !== tF.pe.TIER_2 ? tF.pe.TIER_2 : null,
            E = (0, eG.V)(),
            T = E?.subscriptionTrial?.skuId,
            R = (0, nc.ar)(),
            v = (0, eL.cg)(),
            P = (0, t$.Gh)("premium-marketing-settings-page"),
            y = v ?? !1,
            S = (0, g.bG)([ah.A], () => {
                let e = ah.A.getMarketingComponentByType(eC.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, aA.Q)(),
            { analyticsLocations: M } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let k = (0, c.jsx)("div", {
            className: aJ.dY,
            children: (0, c.jsx)(W.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(i6.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aj.A, {
                        showIcon: !1,
                        subscriptionTier: tF.pe.TIER_0,
                        className: aQ.Ph,
                        look: ap.pR.OUTLINED,
                        color: ap.XD.WHITE,
                        buttonShineClassName: aQ.Qr,
                    }),
                    tier2CTAButton:
                        T === tF.pe.TIER_0
                            ? (0, c.jsx)(aj.A, {
                                  showIcon: !1,
                                  subscriptionTier: tF.pe.TIER_2,
                                  className: aQ.Ph,
                                  look: ap.pR.OUTLINED,
                                  color: ap.XD.WHITE,
                                  buttonShineClassName: aQ.Qr,
                              })
                            : (0, c.jsx)(aj.A, {
                                  color: ap.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tF.pe.TIER_2,
                                  className: aQ.Ph,
                                  hasActivePromotion: y,
                                  textOptions: { textClassName: aQ.Ac },
                                  buttonShineClassName: aQ.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: aJ.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aT, { premiumSubscription: h, className: u()(aJ.R3, { [aJ.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: aJ.n1,
                        children: [
                            (0, c.jsx)(a$, { inOfferExperience: R }),
                            P &&
                                (0, c.jsx)(t2.l, {
                                    className: aJ.ij,
                                    size: "md",
                                    location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aJ.V1]: !R }),
                    children: [
                        null != S && (0, c.jsx)(ab.c, { className: aJ.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: aJ.iS,
                            children: [
                                P &&
                                    !R &&
                                    (0, c.jsx)(t2.l, {
                                        className: aJ.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(W.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(aq, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [aJ.p7]: R, [aJ.Pw]: R, [aJ.AG]: v, [aJ.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: aJ.Ol, children: (0, c.jsx)(aN.I, { component: D }) }),
                k,
                (0, c.jsx)(aH, { className: aJ.B_ }),
                (0, c.jsx)("div", { className: aJ.aC, children: (0, c.jsx)(aZ.A, { className: aJ.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: aJ.hz }),
                (0, c.jsx)(az, {
                    isVisible: !a && !r && f,
                    subscriptionTier: C,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: v,
                }),
                (0, c.jsx)(W.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            x(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: aJ._Z }),
                }),
                (0, c.jsx)("img", {
                    src: iQ,
                    className: aJ.Kw,
                    width: 112,
                    height: 85,
                    alt: ex.intl.string(ex.t.X4IxWL),
                }),
            ],
        });
    },
    a1 = function (e) {
        let { entrypoint: t } = e,
            s = (0, eG.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, i0.NF)({ trialOffer: s }),
            a = (0, i0.Tp)(),
            l = (0, g.bG)([eJ.A], () => eJ.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                !0 === n && (0, i0.QG)(), !0 === a && (0, i0.ne)(l), (null != s || null != i) && (0, G.u1)(s, i);
            }, [s, i, n, a, l]),
            t)
        ) {
            case tF.tU.UserSettings:
                return (0, c.jsx)(a0, {});
            case tF.tU.ApplicationStoreHome:
                return (0, c.jsx)(af, {});
            default:
                return null;
        }
    };
var a2 = s(738783);
let a7 = function (e) {
    let { entrypoint: t = tF.tU.UserSettings } = e;
    (0, _.P)(I);
    let s = (0, C.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
        n = V("nitro_member_hub_header"),
        a = (0, U.ds)(),
        { sourceAnalyticsLocations: l, analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        d = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        R = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        v = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        w = v?.id,
        B = (0, eG.V)(),
        F = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        z = (0, E.Y)(tF.T7),
        [W, K] = o.useState(!0),
        Y = o.useRef(0),
        X = (0, k.YE)(v, tF.PremiumTypes.TIER_2),
        q = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        Z = null != q && q.status === e1.Dmq.CANCELED;
    (0, i$.b)(),
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, e1.tF5.DISCOVERY)]),
                    (Y.current = Date.now() - e),
                    K(!1);
            });
        }, []),
        o.useEffect(() => {
            W ||
                L.default.track(e1.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: l,
                    load_duration_ms: Y.current,
                });
        }, [l, W]),
        o.useEffect(() => {
            s && (null != B || null != F) && (0, G.u1)(B, F);
        }, [s, B, F]);
    let Q = (0, m.zy)(),
        J = o.useRef(!1),
        $ = d && R && z,
        [ee, et] = o.useState($);
    $ && !ee && et(!0),
        o.useEffect(() => {
            if (J.current || !$) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tF.pe.TIER_0, nitro: tF.pe.TIER_2 }[e];
            null != t &&
                ((J.current = !0),
                (0, y.bG)(e1.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: t, analyticsLocations: r }));
        }, [$, Q.search, r]);
    let es = (0, g.bG)([S.A], () => S.A.enabled),
        ei = t === tF.tU.ApplicationStoreHome,
        en = es
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : ei && X
                ? (0, c.jsx)(j.f5, { value: r, children: (0, c.jsx)(iJ, { userId: w }) })
                : ee
                  ? null
                  : (0, c.jsx)("div", { className: u()(a2.kL, a2.Lq), children: (0, c.jsx)(x.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !Z) || (n && e && (a || Z))
            ? en
            : (0, c.jsxs)(c.Fragment, { children: [ei && (0, c.jsx)(N.A, {}), en] });
    }
    return (0, c.jsx)(j.f5, { value: r, children: (0, c.jsx)(a1, { entrypoint: t }) });
};
