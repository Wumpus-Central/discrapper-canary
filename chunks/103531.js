i.d(t, { A: () => a1 }), i(323874), i(14289), i(35956);
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
    g = i(17928),
    x = i(289873),
    f = i(228366),
    p = i(73825),
    h = i(974544),
    N = i(107834),
    A = i(793574),
    j = i(688810),
    b = i(277984),
    C = i(86379),
    E = i(160946),
    T = i(545075),
    R = i(840251),
    v = i(688151);
let _ = new R.E([], v.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var I = i(611924),
    P = i(532794),
    S = i(976860),
    y = i(351906),
    D = i(287809),
    M = i(295405),
    O = i(166403),
    L = i(174459),
    k = i(474090),
    U = i(881489),
    G = i(945960),
    w = i(945810);
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
i(321073);
var z = i(554146),
    W = i(269115),
    K = i(689175),
    Y = i(131607),
    X = i(961250),
    q = i(366505),
    Z = i(321191),
    Q = i(903209),
    J = i(927813),
    $ = i(107857),
    ee = i(131168),
    et = i(482589),
    ei = i(511484),
    es = i(682577),
    en = i(661531),
    ea = i(717421),
    el = i(331322),
    er = i(297264),
    ec = i(834730),
    eo = i(821609),
    ed = i(403581),
    eu = i(815021),
    em = i(576243),
    eg = i(49999),
    ex = i(375708),
    ef = i(33125);
function ep(e) {
    let { premiumSubscription: t, content: i, markAsDismissed: s } = e,
        { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        a = (0, ea.z)({
            from: { transform: "translateY(64px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
        });
    return (0, c.jsx)(es.animated.div, {
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
                                    children: i.title,
                                }),
                                (0, c.jsx)(ec.E, { variant: "text-sm/medium", color: "text-muted", children: i.body }),
                            ],
                        }),
                        (0, c.jsx)(eo.$, {
                            variant: "expressive",
                            icon: ed.t,
                            size: "md",
                            text: i.cta,
                            onClick: function () {
                                s(eg.i.TAKE_ACTION),
                                    (0, P.A)({ subscription: t, initialPlanId: i.yearlyPlanId, analyticsLocations: n });
                            },
                        }),
                    ],
                }),
                (0, c.jsx)(eu.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ex.intl.string(ex.t.WAI6xu),
                    onClick: () => s(eg.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var eh = i(428331),
    eN = i(315629),
    eA = i(65470),
    ej = i(871261);
let eb = function (e) {
    let { className: t, location: i, analyticsLocation: s } = e,
        { analyticsLocations: n } = (0, j.Ay)(i);
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
                                premiumModalAnalyticsLocation: s,
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
var eC = i(877624);
let eE =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eT(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: eE,
        srcSet: `${eE} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var eR = i(502572),
    ev = i(192308),
    e_ = i(775602),
    eI = i(366999),
    eP = i(531260),
    eS = i(780964),
    ey = i(766075),
    eD = i(786300),
    eM = i(975571),
    eO = i(158045),
    eL = i(960851),
    ek = i(89366),
    eU = i(724651),
    eG = i(732280),
    ew = i(549996),
    eB = i(172218);
function eH() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, o.useState)(1),
        s = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eB.B)(
            (e) => {
                i(e.intersectionRatio);
            },
            s,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eF = i(949804);
let eV = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eF.i,
        children: (0, c.jsx)(ec.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var ez = i(371764),
    eW = i(103411),
    eK = i(778712),
    eY = i(97808),
    eX = i(590251),
    eq = i(144165),
    eZ = i(854627),
    eQ = i(427262),
    eJ = i(851746),
    e$ = i(326084),
    e0 = i(664654),
    e1 = i(652215);
function e2() {
    var e, t, i;
    let { referralSentUsers: s } = (0, e0.J)(),
        n = (0, g.bG)([eJ.A], () => eJ.A.getRecipientStatus()),
        a = (0, g.bG)([eJ.A], () => eJ.A.getHasEligibleFriends()),
        l = n.size === e0.Z,
        r =
            ((e = !1 !== a),
            (t = s.length),
            (i = n.size === e0.Z && [...n.values()].every((e) => e === e$.aK.REDEEMED)),
            e
                ? t === e0.Z
                    ? i
                        ? ex.intl.format(ex.t["1aEjsH"], {
                              helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM),
                          })
                        : ex.intl.format(ex.t["+u3AOO"], {
                              helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM),
                          })
                    : ex.intl.format(ex.t["omMr+V"], { helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM) })
                : ex.intl.format(ex.t["zWhX/Q"], { helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: s, nReferralsSent: n.size, hasEligibleFriends: a, allSent: l, bodyText: r };
}
var e7 = i(212737),
    e6 = i(901532);
function e3(e) {
    let { startingScreen: t, analyticsLocations: s } = e;
    L.default.track(e1.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: s }),
        (0, ev.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(i.bind(i, 212737));
            return (i) => (0, c.jsx)(e, { ...i, startingScreen: t });
        });
}
function e8(e) {
    let { user: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eZ.A)({ userId: t.id, size: eK._3.SIZE_24 });
    return (0, c.jsx)(
        eY.eu,
        { className: e6.bj, src: i, "aria-label": (0, eQ.mG)(t), size: eK._3.SIZE_24, ...s },
        t.id,
    );
}
function e5(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e6.p, children: t });
}
function e9(e) {
    let { referralSentUsers: t, className: i } = e;
    return (0, c.jsx)("div", {
        className: u()(e6.L$, i),
        children: (function () {
            let e = [];
            for (let i = 0; i < e0.Z; i++)
                if (t?.[i] !== void 0) {
                    let s = (0, c.jsx)(e8, { user: t[i] }, t[i].id);
                    e.push(s);
                } else {
                    let t = (0, c.jsx)(e5, { slotIndex: i + 1 }, i);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function e4(e) {
    let { nReferralsSent: t, imageSize: i = 93, backgroundClassName: s, ringClassName: n } = e;
    return (0, c.jsx)(eX.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: s ?? e6.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e6.e0,
        overlayClassName: t === e0.Z ? e6.ys : void 0,
        children: (0, c.jsx)(eq._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: i,
            width: i,
            zoomable: !1,
        }),
    });
}
function te(e) {
    let { className: t } = e,
        { referralSentUsers: i, nReferralsSent: s, hasEligibleFriends: n, allSent: a, bodyText: l } = e2();
    return (0, c.jsxs)("div", {
        className: u()(e6.kL, t),
        children: [
            (0, c.jsx)("div", { className: e6.G3, children: (0, c.jsx)(e4, { nReferralsSent: s }) }),
            (0, c.jsxs)("div", {
                className: e6.IH,
                children: [
                    (0, c.jsx)(e9, { referralSentUsers: i, className: e6.GV }),
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
var tt = i(792656),
    ti = i(989349),
    ts = i.n(ti),
    tn = i(496431),
    ta = i(499449);
let tl = function (e) {
    let { expiresAt: t, className: i, digitTextVariant: s = "text-md/medium" } = e,
        n = (0, tn.A)(ts()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(ta.Xl, i, { [ta.a3]: "text-lg/bold" === s }),
        children: [
            (0, c.jsx)(ec.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ex.intl.string(ex.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: ta.$R,
                children: d.map((e, t) =>
                    (function (e, t, i) {
                        let s,
                            [n, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
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
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: ta.B2,
                                                        children: (0, c.jsx)(ec.E, {
                                                            variant: i,
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
                    })(e, t === d.length - 1, s),
                ),
            }),
        ],
    });
};
var tr = i(473702),
    tc = i(609425),
    to = i(660184),
    td = i(16716);
function tu() {
    let e = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tc.A)(),
        { avatarSrc: i, avatarDecorationSrc: s, eventHandlers: n } = (0, eZ.A)({ userId: e?.id, size: eK._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eQ.mG)(e);
    return (0, c.jsxs)("div", {
        className: td.kL,
        children: [
            (0, c.jsx)("div", {
                className: td.my,
                children: (0, c.jsx)(eY.eu, {
                    src: i,
                    avatarDecoration: s,
                    size: eK._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: td.QC, children: (0, c.jsx)(to.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tm = i(707554),
    tg = i(155199);
let tx = function (e) {
    let { className: t, color: i = "text-strong", responsive: s = !0, children: n } = e;
    return (0, c.jsx)(tm.F, {
        forceLevel: 1,
        children: (0, c.jsx)(er.D, {
            className: u()(tg.w, t, s && tg.n),
            variant: "display-md",
            color: i,
            children: n,
        }),
    });
};
var tf = i(728277);
function tp(e) {
    let { className: t } = e,
        { referralSentUsers: i, nReferralsSent: s, hasEligibleFriends: n, allSent: a, bodyText: l } = e2();
    return (0, c.jsxs)("div", {
        className: u()(tf.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tf.G3,
                children: (0, c.jsx)(e4, {
                    nReferralsSent: s,
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
                    (0, c.jsx)(e9, { referralSentUsers: i, className: tf.t7 }),
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
var th = i(702841),
    tN = i(676279),
    tA = i(396583),
    tj = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    tb = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tC = (e) => {
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
        u = (0, ea.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [g, x] = (0, o.useState)(1),
        f = (0, ea.z)(
            null != i
                ? {
                      from: { scale: g > 0 ? i.startScale : i.endScale },
                      to: { scale: g > 0 ? i.endScale : i.startScale },
                      config: { duration: i.duration * r },
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
        : (0, c.jsx)(es.animated.div, {
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
                  translateX: a ? T.xOffset.to((e) => `${e}px`) : 0,
                  scale: f.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tE = i(181195);
let tT = function (e) {
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
        keyAssetClassName: g,
        starAssetClassName: x,
        animationSpeedScale: f = 1,
        blurScale: p = 1,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != s &&
                (0, c.jsx)("div", {
                    className: u()(tE.nJ, s),
                    children: (0, c.jsx)(tC, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tj.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: tb.UP,
                                      range: 125,
                                      containerVisibilityPercentage: i,
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
                            null != i
                                ? {
                                      pathDirection: tb.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: i,
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
                            null != i
                                ? {
                                      pathDirection: tb.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: i,
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
                            null != i
                                ? {
                                      pathDirection: tb.UP,
                                      range: 200,
                                      containerVisibilityPercentage: i,
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
                            null != i
                                ? {
                                      pathDirection: tb.UP,
                                      range: 50,
                                      containerVisibilityPercentage: i,
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
var tR = i(607470);
let tv =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    t_ = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: i,
            containerVisibilityPercentage: s,
            containerClassName: n,
            assetClassName: a,
            animationSpeedScale: l = 1,
        } = e;
        return i
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
    tI = function (e) {
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
                keyAssetClassName: g,
                starAssetClassName: x,
                animationSpeedScale: f = 1,
            } = e,
            p = (0, th.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
            h = (0, tN.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(t_, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
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
var tP = i(776540);
let tS = function (e) {
    let { containerVisibilityPercentage: t, compact: i } = e;
    return (0, c.jsx)(tI, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tP.wG, i && tP.Vx),
        flyingWumpusAssetClassName: u()(tP.lu, i && tP.ov),
        boltContainerClassName: u()(tP.nJ, i && tP.Wc),
        hammerContainerClassName: u()(tP.Gj, i && tP.XA),
        keyContainerClassName: u()(tP.FV, i && tP.oZ),
        starContainerClassName: u()(tP.E1, i && tP.LN),
        boltAssetClassName: u()(tP.j7, i && tP.QN),
        hammerAssetClassName: u()(tP.Wv, i && tP.B9),
        keyAssetClassName: u()(tP.rs, i && tP.I1),
        starAssetClassName: u()(tP.OY, i && tP.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var ty = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tD = i(884888);
let tM = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: x } = eH(!(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion)),
        f =
            ((t = { [ty.MORNING]: ex.t["Wvc/I+"], [ty.AFTERNOON]: ex.t["d+0STx"], [ty.EVENING]: ex.t.CqsxKI }),
            ex.intl.string(
                t[
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? ty.MORNING
                        : i >= 12 && i < 17
                          ? ty.AFTERNOON
                          : ty.EVENING
                ],
            )),
        p = o ?? (r ? (0, c.jsx)(tp, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, s),
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
var tO = i(460508);
let tL =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tk = function (e) {
        let { containerVisibilityPercentage: t } = e,
            i = (0, th.bG)([e_.Ay], () => e_.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: tO.BI,
                    children: (0, c.jsx)(tC, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tj.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: i,
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
                    isMotionReduced: i,
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
var tU = i(219351);
function tG(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tI, {
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
    let e = (0, th.bG)([e_.Ay], () => e_.Ay.useReducedMotion);
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
var tB = i(202541);
function tH(e, t, s) {
    (0, ev.openModalLazy)(async () => {
        let { PremiumBrandRefreshSubscriptionCancellationModal: n } = await Promise.all([
            i.e("91170"),
            i.e("42394"),
            i.e("23102"),
            i.e("2285"),
            i.e("97726"),
            i.e("44459"),
            i.e("98986"),
            i.e("37467"),
            i.e("60411"),
            i.e("61298"),
            i.e("80197"),
            i.e("61275"),
            i.e("30072"),
            i.e("26572"),
            i.e("18629"),
            i.e("48132"),
            i.e("64729"),
            i.e("5549"),
            i.e("62332"),
            i.e("8607"),
            i.e("27962"),
            i.e("64827"),
            i.e("7167"),
            i.e("61060"),
            i.e("52457"),
            i.e("6338"),
            i.e("47834"),
            i.e("97595"),
            i.e("13736"),
            i.e("44571"),
            i.e("40291"),
            i.e("29963"),
            i.e("92075"),
            i.e("90417"),
            i.e("50097"),
            i.e("73215"),
            i.e("94161"),
            i.e("13051"),
            i.e("80347"),
            i.e("80166"),
        ]).then(i.bind(i, 293061));
        return (i) => (0, c.jsx)(n, { ...i, analyticsLocations: e, initialStep: s, premiumSubscription: t });
    });
}
function tF(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, i),
        ref: s,
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
function tV(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = (0, U.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eH(!(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tD.kL, i),
        ref: s,
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
function tz(e) {
    let {
            className: t,
            buttonVisibilityRef: i,
            userDiscountOffer: s,
            discountedPrice: n,
            premiumSubscription: a,
            analyticsLocations: l,
        } = e,
        { visibilityPercentageRef: r, visibilityPercentage: o } = eH(!(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, t),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: u()(tD.W2, tD.HQ),
            ref: r,
            children: [
                (0, c.jsxs)(el.B, {
                    align: "start",
                    gap: 32,
                    className: tD.ZU,
                    children: [
                        null != s.expiresAt &&
                            (0, c.jsx)(tl, { expiresAt: s.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(el.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(tx, {
                                    children: ex.intl.format(ex.t["3yZP0G"], { percent: s.discount.amount }),
                                }),
                                null != n &&
                                    (0, c.jsx)(ec.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: ex.intl.format(ex.t["3Q4wCy"], {
                                            discountedPrice: n,
                                            billingPeriod: (0, eO.Ke)(s.discount.userUsageLimitInterval),
                                            numMonths: s.discount.userUsageLimit,
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
                                    onClick: () => tH(l, a, tr.g.CONFIRM_DISCOUNT),
                                }),
                                (0, c.jsx)(eA.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: ex.intl.string(ex.t["3KomGa"]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tD.y3, children: (0, c.jsx)(tS, { containerVisibilityPercentage: o }) }),
            ],
        }),
    });
}
function tW(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: s } = e,
        {
            headingText: n,
            headingTop: a,
            showPill: l,
            shouldShowChurnVariant: r,
            premiumSubscription: o,
            userDiscountOffer: d,
            discountedPrice: m,
            buttonVisibilityRef: x,
        } = tY(),
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
            promotionBannerMarketingComponentFields: N.properties.properties.marketingPageBanner,
        }));
    let R = T;
    null == R && s && !E && (R = (0, c.jsx)(te, {}));
    let v = (0, eG.V)(),
        _ = (0, eU.O)(),
        I = (0, ei.U9)(_, tB.pe.TIER_2) ? tB.pe.TIER_2 : void 0,
        P = null != o && o.status !== e1.Dmq.ACCOUNT_HOLD && o.hasAnyPremiumNitro,
        S = (0, eP.A)(),
        y = S.isFractionalPremiumActive && !P && null == R && !r,
        { visibilityPercentageRef: D, visibilityPercentage: M } = eH(!(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion));
    if (i)
        return p
            ? (0, c.jsx)(tV, { fpEndsAt: S.currentEntitlementEndsAt, className: t, buttonVisibilityRef: x })
            : (0, c.jsx)(tF, { fpEndsAt: S.currentEntitlementEndsAt, className: t, buttonVisibilityRef: x });
    if (E) {
        let e = y
            ? (0, c.jsxs)("div", {
                  className: tD.UJ,
                  children: [
                      (0, c.jsx)(tt.A, {
                          size: "md",
                          hasActivePromotion: !!b,
                          subscriptionTier: v?.subscription_trial?.sku_id ?? I,
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
            shouldShowReferralProgressBar: s,
            marketingBanner: T,
            heroButtons: e,
        });
    }
    return p && C
        ? r && null != d && null != o
            ? (0, c.jsx)(tz, {
                  className: t,
                  buttonVisibilityRef: x,
                  userDiscountOffer: d,
                  discountedPrice: m,
                  premiumSubscription: o,
                  analyticsLocations: h,
              })
            : (0, c.jsx)(tM, {
                  className: t,
                  headingTop: a,
                  showPill: l,
                  buttonVisibilityRef: x,
                  shouldShowReferralProgressBar: s,
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
                          className: y || r ? tD.UJ : void 0,
                          children: [
                              y &&
                                  (0, c.jsx)(tt.A, {
                                      size: "md",
                                      hasActivePromotion: !!b,
                                      subscriptionTier: v?.subscription_trial?.sku_id ?? I,
                                  }),
                              r &&
                                  null != o &&
                                  (0, c.jsx)(eo.$, {
                                      variant: "expressive",
                                      icon: ed.t,
                                      size: "md",
                                      text: ex.intl.string(ex.t.zrCzVB),
                                      onClick: () => tH(h, o, tr.g.CONFIRM_DISCOUNT),
                                  }),
                              (0, c.jsx)(eA.A, {
                                  variant: y || r ? "secondary" : "expressive",
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
let [tK, tY] = (0, eD.A)(),
    tX = function (e) {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, U.ds)(),
            r = (0, ek.QQ)(),
            o = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            d = null != o && o.status === e1.Dmq.CANCELED && null != s,
            u = r && !d,
            m = ex.intl.string(ex.t.qYKftX),
            x = (0, eW.m)(),
            f = ex.intl.string(ex.t.ifwQZb),
            { fractionalState: p, endsAt: h } = (0, eP.A)(),
            N = (0, eI.Ay)(h, eI.yE.CREDITS_ENDS_IN),
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
            children: (0, c.jsx)(tK.Provider, {
                value: {
                    headingText: f,
                    headingTop: b,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: s,
                    discountedPrice: n,
                    buttonVisibilityRef: i,
                },
                children: (0, c.jsx)(tW, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: x }),
            }),
        });
    };
var tq = i(820284),
    tZ = i(742589),
    tQ = i(909536),
    tJ = i(392943),
    t$ = i(876587),
    t0 = i(400669),
    t1 = i(590319),
    t2 = i(897351);
let t7 = function () {
    let e = (0, tQ.Gh)("nitro_home_header"),
        t = o.useRef(null);
    return (0, c.jsxs)(tq.A, {
        section: e1.JJy.NAVIGATION,
        children: [
            (0, c.jsx)(tZ.A, {
                className: u()(t1.TQ, t2.C$),
                transparent: !0,
                role: "navigation",
                children: (0, c.jsxs)("div", {
                    className: t1.Wc,
                    children: [
                        (0, c.jsxs)("div", {
                            className: t2.wk,
                            children: [
                                (0, c.jsx)(ed.t, { colorClass: t2.tr }),
                                (0, c.jsx)("span", {
                                    role: "img",
                                    "aria-label": ex.intl.string(ex.t.Ipxkog),
                                    className: t2.Ss,
                                    children: (0, c.jsx)(tJ.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, c.jsxs)("div", {
                                className: t1.MQ,
                                children: [
                                    (0, c.jsx)(t0.l, {
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
            e && (0, c.jsx)(t$.O, { targetElementRef: t, body: ex.intl.string(ex.t.EqUw7K) }),
        ],
    });
};
var t6 = i(325499),
    t3 = i(562708),
    t8 = i(885574),
    t5 = i(43990),
    t9 = i(993077),
    t4 = i(139286),
    ie = i(872725),
    it = i(920050),
    ii = i(51965),
    is = i(375776),
    ia = i(727811),
    il = i(222652),
    ir = i(933287),
    ic = i(355982);
function io(e) {
    let { openRewardModal: t } = e,
        i = (0, il.z)();
    if (i.kind === il.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: ic.R$,
            children: [
                (0, c.jsx)(tt.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tB.pe.TIER_2,
                }),
                (0, c.jsx)(eo.$, { variant: "secondary", size: "md", text: ex.intl.string(ex.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === ia.P.CLAIMED
            ? { text: ex.intl.string(ir.default.Plwzgf) }
            : { text: ex.intl.string(ex.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: ic.R$,
                children: [
                    (0, c.jsx)(ii.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: i.text,
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        onClick: i.onClick,
                        disabled: i.disabled,
                        loading: i.loading,
                    }),
                    (0, c.jsx)(eo.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: i.requestInProgress,
                    }),
                ],
            }),
            i.claimStatus === ia.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: ic.ed,
                    children: [
                        (0, c.jsx)(t8.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ex.intl.string(ir.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function id(e) {
    let { glowing: t = !1 } = e;
    (0, t4.A)({
        type: t3.ImpressionTypes.VIEW,
        name: t3.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: it.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: s } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ev.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("52283"), i.e("13088")]).then(i.bind(i, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, c.jsx)(t5.N, {
        theme: e1.NJ8.DARKER,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: s,
                children: (0, c.jsx)("div", {
                    className: u()(e, ic.kL),
                    children: (0, c.jsx)(ie.A, {
                        cardType: t9.s.CUSTOM,
                        cardClassName: ic.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: ic.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: ic.j,
                                    children: [
                                        (0, c.jsx)("div", { className: ic._g }),
                                        (0, c.jsx)("div", { className: ic.$h }),
                                        (0, c.jsx)("div", { className: ic.Rv }),
                                        (0, c.jsx)("div", { className: ic.Lw }),
                                        (0, c.jsx)("div", { className: ic.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: ic.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: ic.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(er.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: ic.DD,
                                            children: ex.intl.string(ir.default.RGT513),
                                        }),
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: ic.h_,
                                            children: ex.intl.string(ir.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(io, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var iu = i(744064);
function im(e) {
    let { className: t, containerClassName: i } = e,
        s = (0, il.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            s.kind === il.N.SUBSCRIBE
                ? n
                : {
                      ...n,
                      ctaText: s.text,
                      ctaIcon: s.icon,
                      ctaIconPosition: s.iconPosition,
                      ctaDisabled: s.disabled,
                      ctaLoading: s.loading,
                      onCtaClick: s.onClick,
                  };
    return (0, c.jsx)(iu.S, {
        id: it.XBOX_PREMIUM_PERK_CARD_ID,
        title: ex.intl.string(ir.default.UVL9tD),
        description: ex.intl.string(ir.default["I+IXr0"]),
        ...a,
        className: t,
        containerClassName: i,
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
function ig(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(im, { ...e }) });
}
var ix = i(54471),
    ip = i(574377);
function ih(e) {
    let { id: t, sectionClassName: i, heading: s, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = ip.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: i,
        children: [
            s,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && ix.Jx, l), children: a }) : null,
        ],
    });
}
var iN = i(789861),
    iA = i(592909),
    ij = i(149995),
    ib = i(398523),
    iC = i(881373),
    iE = i(555393),
    iT = i(852218),
    iR = i(161319),
    iv = i(672787),
    i_ = i(806343),
    iI = i(962995);
let iP =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    iS =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg";
function iy() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, iA.A0)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, iA.hd)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, iC.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = ib.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, ij.Zk)({ location: "useHardwarePartnerPerkCards" }),
        l = (0, ij.S9)({ location: "useHardwarePartnerPerkCards" }),
        r = null === (0, iE.N)(),
        d = (0, t6.b)("useHardwarePartnerPerkCards"),
        { currentDate: u, nDaysInMonth: m } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = d ? void 0 : ex.intl.string(ex.t.y2b7CA),
            g = t
                ? {
                      id: it.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ex.intl.string(i_.default.F0b4Z8),
                      description: ex.intl.formatToPlainString(i_.default["hworR+"], { validDates: (0, iN.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ex.intl.formatToPlainString(i_.default.g7iyvR, { date: (0, iN.mh)() }),
                      caption: (0, c.jsx)("img", { src: iS, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: iP,
                      ctaText: ex.intl.string(i_.default.fcopjf),
                      onCtaClick: () => (0, iv.P)({ partnerId: iT.Bt, analyticsLocations: e }),
                      analyticsOptions: { thirdPartyPartner: iT.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = i
                ? {
                      id: it.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: ex.intl.string(i_.default["IcD/7p"]),
                      description: ex.intl.formatToPlainString(i_.default.hausFi, { date: (0, iN.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: ex.intl.string(i_.default.fxF0Jz),
                      caption: (0, c.jsx)("img", { src: iS, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: iP,
                      analyticsOptions: { thirdPartyPartner: iT.Bt },
                  }
                : null,
            f = s
                ? {
                      id: it.LOGITECH_3PP_CARD_ID,
                      title: ex.intl.string(iI.default.OlObRa),
                      description: ex.intl.format(iI.default.ZGOJ8R, {
                          discountPercent: iC.aW,
                          termsUrl: eM.A.getArticleURL(e1.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: u.getDate() / m,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, iv.P)({ partnerId: iT.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: iT.XY },
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
                      id: it.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ex.intl.string(ex.t.m7PucM),
                      description: a
                          ? l
                              ? ex.intl.format(ex.t["1Zw6xL"], {})
                              : ex.intl.format(ex.t.KWdCO0, {})
                          : ex.intl.format(ex.t.zh1X7u, {}),
                      descriptionNote:
                          !l && a
                              ? ex.intl.format(ex.t.vblnHk, {
                                    partnerName: iT.CD[iT.Cs].label,
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
                      onCtaClick: () => (0, iR.u)({ analyticsLocations: e, partnerIds: [iT.KS, iT.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: iT.KS },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [d, e, t, i, u, s, m, n, a, l, r]);
}
var iD = i(166634);
let iM = "xgpp";
function iO(e) {
    let { glowingSectionId: t, glowingPerkId: i } = e,
        s = (0, t6.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: l, steelseriesCard: r } = iy();
    if (!s) return null;
    let o = null != n || null != a || null != l || null != r;
    return (0, c.jsx)(ih, {
        id: iM,
        sectionClassName: u()(iD.uW, iD.Uv, iD.qr),
        heading: (0, c.jsx)(er.D, {
            variant: "display-sm",
            className: u()(ip.R_, ix.U6),
            children: ex.intl.string(ex.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: ix.JE, children: (0, c.jsx)(id, { glowing: t === iM }) }),
        grid: o
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(iu.S, { ...n, containerClassName: ip.Nr, glowing: i === n.id }),
                      (0, c.jsx)(ig, { containerClassName: ip.Nr }),
                      null != l && (0, c.jsx)(iu.S, { ...l, containerClassName: ip.Nr, glowing: i === l.id }),
                      null != r && (0, c.jsx)(iu.S, { ...r, containerClassName: ip.Nr, glowing: i === r.id }),
                      null != a && (0, c.jsx)(iu.S, { ...a, containerClassName: ip.Nr, glowing: i === a.id }),
                  ],
              })
            : null,
    });
}
var iL = i(687636),
    ik = i(67423);
let iU = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(es.animated.div, {
        className: u()(iL.iE, { [iL.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: iL.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: ik, className: iL.oU }),
                (0, c.jsxs)("div", {
                    className: iL.iQ,
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
                                i.e("91170"),
                                i.e("42394"),
                                i.e("23102"),
                                i.e("2285"),
                                i.e("97726"),
                                i.e("44459"),
                                i.e("98986"),
                                i.e("37467"),
                                i.e("60411"),
                                i.e("61298"),
                                i.e("80197"),
                                i.e("61275"),
                                i.e("30072"),
                                i.e("26572"),
                                i.e("18629"),
                                i.e("48132"),
                                i.e("64729"),
                                i.e("5549"),
                                i.e("62332"),
                                i.e("8607"),
                                i.e("27962"),
                                i.e("64827"),
                                i.e("7167"),
                                i.e("61060"),
                                i.e("52457"),
                                i.e("6338"),
                                i.e("47834"),
                                i.e("97595"),
                                i.e("13736"),
                                i.e("44571"),
                                i.e("40291"),
                                i.e("29963"),
                                i.e("92075"),
                                i.e("90417"),
                                i.e("50097"),
                                i.e("73215"),
                                i.e("94161"),
                                i.e("13051"),
                                i.e("80347"),
                                i.e("80166"),
                            ]).then(i.bind(i, 293061));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: l,
                                    initialStep: tr.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var iG = i(761508),
    iw = i(449543);
function iB(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/a9ce5551f37c49862694d063777be6e02b9190ff9a205c7c62f5fe9cecb673de.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iH(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iF(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/ce65064fd18fa477fe14c2d4066af96637c446e074008fb0b7599874537ce8d0.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iV = i(345394);
function iz(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: iV.A,
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iW(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/804d87fc1c1330e6413159eaacc359de89bdfbec7b4602532b1bd074868783c8.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iK(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/521e5bf29d9f8a81ef4af279728799cf1021812200840659bf3067871bb49875.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iY(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/c561ce5c9866c0bdb3f8c9dc43164f873414c3d905d1ab4beace8020dc4933fc.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iX(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iq(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iZ = i(996682);
function iQ(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": i,
        "aria-hidden": s,
        role: n,
        width: a = 100,
        height: l = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, iZ.A)({ "aria-label": i, "aria-hidden": s, role: n }),
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
function iJ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i$ = i(78701);
function i0(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: i$.A,
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i1 = i(462887),
    i2 = i(736653),
    i7 = i(259065),
    i6 = i(206835),
    i3 = i(591179),
    i8 = i(462463),
    i5 = i(878784),
    i9 = i(425713),
    i4 = i(696292),
    se = i(192444),
    st = i(617986),
    si = i(892227),
    ss = i(81466),
    sn = i(318254),
    sa = i(490285),
    sl = i(165815);
let sr = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, q.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, si.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: sl.kL,
        children: [
            null != i &&
                (0, c.jsxs)("div", {
                    className: sl.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sl.Pf,
                            children: [
                                (0, c.jsx)(ss.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(sa.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(sa.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: sl.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: sl.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sl.Pf,
                            children: [
                                (0, c.jsx)(sn.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(sa.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(sa.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var sc = i(758836),
    so = i(190107),
    sd = i(55684);
function su(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: i } = (0, se.lk)(so.rE.NITRO_HOME_MARKETING),
        { isEligible: s, programReward: n } = (0, q.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !s || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: it.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ex.intl.string(sa.default.hx5AFp),
                          description: ex.intl.format(sa.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(sd.lH, sd.yK),
                          footerContent: (0, c.jsx)(sr, {}),
                          ctaText: ex.intl.string(sa.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(sc.G2.ORBS)),
                      },
            [s, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: it.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ex.intl.string(ex.t.Csf5Ol),
                          description: ex.intl.format(ex.t.NpUfej, { bonusOrbMultiplier: i }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: () => (0, st.mA)({ fromContent: i4.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: sd.Nf,
                      }
                    : null,
            [t, i],
        ),
    };
}
var sm = i(975807),
    sg = i(95035),
    sx = i(862990),
    sf = i(88001),
    sp = i(466919),
    sh = i(817577);
function sN() {
    (0, sm.A)(sf.TE);
}
function sA(e) {
    let t = (0, sx.O9)(),
        s = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ev.openModalLazy)(async () => {
                      let { default: e } = await i.e("99709").then(i.bind(i, 516044));
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
                      id: it.PREMIUM_GROUP_CARD_ID,
                      title: ex.intl.string(sp.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              ex.intl.formatToPlainString(sp.default.JlyGQj, {
                                  totalSeats: sf.aw,
                                  premiumGroupProductName: (0, sf.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: sd.LF,
                                  children: (0, c.jsx)(sg.A, {
                                      onClick: sN,
                                      children: ex.intl.string(sp.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ex.intl.string(ex.t.oW0eUd),
                      primaryAsset: sh,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: ex.intl.string(ex.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sj = i(562819),
    sb = i(892035),
    sC = i(793943),
    sE = i(241988),
    sT = i(655752),
    sR = i(764231),
    sv = i(627380),
    s_ = i(30084),
    sI = i(111881),
    sP = i(714206);
let sS =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    sy =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    sD =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function sM() {
    let e,
        t,
        i,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        n = (0, i3.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: a, expiredCallOfDutyCard: l, logitechCard: r, steelseriesCard: d } = iy(),
        m = (0, t6.b)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: x } = (0, sb.z$)("useWhatsNewPerkCards"),
        f = (0, i8.A)({ analyticsLocations: s }),
        p = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, i7.L)({ analyticsLocations: s }),
            );
        }, [s]),
        h = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, sj.L)({ analyticsLocations: s }),
            );
        }, [s]),
        N = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        b = (function (e) {
            let { fractionalState: t } = (0, eP.A)(),
                i = t === tB.xc.FP_ONLY,
                s = (0, i5.$F)(),
                n = (0, i5.Xb)(),
                a = s?.status === i5.Wo.UPCOMING || i,
                l = (0, i9.N)(s?.id),
                r = (function () {
                    let e = (0, i5.$F)(),
                        t = (0, sT.P)(),
                        i = (0, i5.Xb)();
                    if (null == e || null == t || null == i) return null;
                    let s = ts()(),
                        n = ts()(i),
                        a = e.status === i5.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        r = n.clone().add(a, "months"),
                        c = n.clone().add(l, "months").diff(r);
                    return Math.max(0, Math.min(1, (s.diff(r) - 864e5) / c));
                })(),
                c = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion) && !a,
                d = (0, sv.t)(),
                m = (0, sT.P)();
            return (0, o.useMemo)(() => {
                let t,
                    o = null != m ? ex.intl.string(m.nameUnformattedNitro) : void 0;
                null == s
                    ? i && (t = (0, sR.T)(tB.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          s.status === i5.Wo.UPCOMING
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
                                (0, sR.T)(s.id, s.tenureReqNumMonths) ??
                                void 0));
                let g = null;
                return (
                    null != l ? (g = a || c ? l.standard : l.ambientLarge) : i && (g = sP),
                    {
                        id: it.TENURE_BADGE_CARD_ID,
                        title:
                            null != s ? ex.intl.string(s.nameUnformattedNitro) : i ? ex.intl.string(ex.t.tx9Fvw) : "",
                        pillText: ex.intl.string(ex.t["jyYgZ+"]),
                        primaryAsset: g,
                        primaryAssetClassName: u()(sI.pq, { [sI.n6]: a, [sI.kE]: c }),
                        caption: null != n ? ex.intl.formatToPlainString(ex.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: r ?? void 0,
                        ctaText: ex.intl.string(ex.t.jVcuVY),
                        onCtaClick: () => (0, s_.D)({ analyticsLocations: e }),
                    }
                );
            }, [s, l, a, c, n, r, i, d, m, e]);
        })(s),
        C =
            ((e = (0, $.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription())),
            (i = (0, eh.q)(t, e === $.Iz.NITRO_HOME_TILE)),
            (0, o.useMemo)(
                () =>
                    null == i
                        ? null
                        : {
                              id: it.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: i.title,
                              description: i.body,
                              pillText: i.badge,
                              primaryAsset: (0, c.jsx)("img", {
                                  src: sE,
                                  alt: "",
                                  "aria-hidden": !0,
                                  style: { width: 157 },
                                  draggable: !1,
                              }),
                              ctaIcon: ed.t,
                              ctaIconPosition: "start",
                              ctaText: i.cta,
                              onCtaClick: () =>
                                  (0, P.A)({ subscription: t, initialPlanId: i.yearlyPlanId, analyticsLocations: s }),
                          },
                [s, i, t],
            )),
        { nitroOrbsRewardsCard: E, questOrbMultiplierCard: T } = su("useWhatsNewPerkCards"),
        R = sA(s);
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
                    id: it.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ex.intl.string(ex.t.OLtTrt),
                    description: ex.intl.string(ex.t["di/pXR"]),
                    onCtaClick: n ? f : p,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    primaryAsset: sS,
                },
                {
                    id: it.CLIENT_THEMES_CARD_ID,
                    title: ex.intl.string(ex.t.acc6h6),
                    description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: sD,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sC.nf)(sC.HP.CUSTOM_THEME);
                    },
                },
                x
                    ? null
                    : {
                          id: it.PERMADECOS_CARD_ID,
                          title: ex.intl.string(ex.t.L14NZN),
                          description: ex.intl.string(ex.t.eCZkAI),
                          primaryAsset: (0, c.jsx)(i0, { alt: "", ariaHidden: !0 }),
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: n ? f : h,
                      },
                {
                    id: it.CUSTOM_APP_ICONS_CARD_ID,
                    title: ex.intl.string(ex.t["GU+wqh"]),
                    description: ex.intl.string(ex.t["1uPk1Z"]),
                    primaryAsset: sy,
                    ctaText: ex.intl.string(ex.t.y9TxXV),
                    onCtaClick: N,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            i = t ? 5 : 6;
        if ((e.splice(+!!t, 0, b), null != C && e.splice(1, 0, C), x)) {
            let t = null != C ? 2 : 1;
            e.splice(t, 0, {
                id: it.PROFILE_FRAMES_CARD_ID,
                title: ex.intl.string(ex.t.SGBDnu),
                description: ex.intl.string(ex.t.cMgegQ),
                pillText: ex.intl.string(ex.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: u()(sd.lH, sd.yK),
                ctaText: ex.intl.string(ex.t.jVcuVY),
                onCtaClick: () => (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(sc.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > i && e.splice(i, e.length - i), e;
    }, [b, C, E, T, R, p, N, h, f, n, a, l, r, d, m, x]);
}
var sO = i(355097);
let sL = "/assets/1eb1b74667b4c0f0.svg",
    sk = "/assets/983b60e4fcaf973b.svg";
var sU =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let sG = [
    { id: "bestof", label: () => ex.intl.string(ex.t.q1u7nQ) },
    { id: "appearance", label: () => ex.intl.string(ex.t.CUnZkZ) },
    { id: "upgrades", label: () => ex.intl.string(ex.t.KC5q8v) },
    { id: "vip", label: () => ex.intl.string(ex.t.DjEAcv) },
];
var sw = i(631255);
function sB(e) {
    e.stopPropagation();
}
function sH(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, i2.DP)(),
                t = (0, i3.X)("useFavoritesPerkCards"),
                i = (0, i5.Lh)(),
                s = (0, i9.N)(i)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, i6.A)({ scrollPosition: sO._F.TRY_IT_OUT, analyticsLocations: n }),
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
                g = (0, i8.A)({ analyticsLocations: n }),
                x = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, i7.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = sM(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = su("useFavoritesPerkCards"),
                b = sA(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: it.SERVER_BOOSTS_CARD_ID,
                            title: ex.intl.formatToPlainString(ex.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ex.intl.formatToPlainString(ex.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(iB, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: it.PROFILES_CARD_ID,
                            title: ex.intl.string(ex.t.xDRab3),
                            description: ex.intl.string(ex.t.yn6fWA),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: t ? g : a,
                            primaryAsset: (0, c.jsx)(iH, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: it.HD_VIDEO_CARD_ID,
                            title: ex.intl.string(ex.t["/mQ5gg"]),
                            description: ex.intl.string(ex.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(iF, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: it.CLIENT_THEMES_CARD_ID,
                            title: ex.intl.string(ex.t.acc6h6),
                            description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: sD,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: it.MORE_EMOJIS_CARD_ID,
                            title: ex.intl.string(ex.t.D8vIDT),
                            description: ex.intl.string(ex.t.DRMecB),
                            primaryAsset: (0, c.jsx)(iz, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: it.LARGE_UPLOADS_CARD_ID,
                            title: ex.intl.string(ex.t.nL1WZV),
                            description: ex.intl.formatToPlainString(ex.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, c.jsx)(iW, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: it.CUSTOM_APP_ICONS_CARD_ID,
                            title: ex.intl.string(ex.t["GU+wqh"]),
                            description: ex.intl.string(ex.t["1uPk1Z"]),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: sy,
                            categories: ["appearance"],
                        },
                        {
                            id: it.ENTRANCE_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.WJfCPi),
                            description: ex.intl.string(ex.t.liQKJR),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: it.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ex.intl.string(ex.t.OLtTrt),
                            description: ex.intl.string(ex.t["di/pXR"]),
                            onCtaClick: t ? g : x,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            primaryAsset: sS,
                            categories: ["appearance"],
                        },
                        {
                            id: it.CUSTOM_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t["Cu/oFd"]),
                            description: ex.intl.string(ex.t.czj2aa),
                            primaryAsset: (0, c.jsx)(iK, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: it.SPECIAL_STICKERS_CARD_ID,
                            title: ex.intl.string(ex.t.MQoVeb),
                            description: ex.intl.string(ex.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: sd.Uc,
                                children: (0, c.jsx)(iY, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: it.SUPER_REACTIONS_CARD_ID,
                            title: ex.intl.string(ex.t.qERvAA),
                            description: ex.intl.string(ex.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(iX, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: it.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.ssVDYQ),
                            description: ex.intl.string(ex.t.aUSRMa),
                            primaryAsset: (0, i1.M)(e) ? sL : sk,
                            categories: ["upgrades"],
                        },
                        {
                            id: it.EARLY_ACCESS_CARD_ID,
                            title: ex.intl.string(ex.t["g/KRY6"]),
                            description: ex.intl.string(ex.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(iq, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: it.BADGE_CARD_ID,
                            title: ex.intl.string(ex.t.Bn3CtB),
                            description: ex.intl.string(ex.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != s
                                    ? (0, c.jsx)("img", { src: s, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(iQ, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: it.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ex.intl.string(ex.t["MTD+7w"]),
                            description: ex.intl.string(ex.t.Bhs0s6),
                            ctaText: ex.intl.string(ex.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(iJ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: it.PERMADECOS_CARD_ID,
                            title: ex.intl.string(ex.t.L14NZN),
                            description: ex.intl.string(ex.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(i0, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, s, h, N, b, a, l, r, d, u, m, x, g, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(s?.categories[0] ?? sU.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => i.filter((e) => null != e && e.categories.includes(n)), [i, n]);
    return (0, c.jsxs)("div", {
        className: sw.uW,
        children: [
            (0, c.jsx)(er.D, { variant: "display-sm", className: sw.R_, children: ex.intl.string(ex.t["Uh3+CA"]) }),
            (0, c.jsx)(iG.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: sw.Lq,
                "aria-label": ex.intl.string(ex.t["Uh3+CA"]),
                children: sG.map((e) =>
                    (0, c.jsx)(iG.V.Item, { id: e.id, className: sw.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                iw.A,
                {
                    gap: 20,
                    className: sw.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                iu.S,
                                { ...e, glowing: t === e.id, containerClassName: sw.Ui, onFocus: sB },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var sF = i(411450);
let sV = function (e) {
    let { className: t } = e,
        i = (0, i2.DP)();
    return (0, c.jsx)("img", {
        className: u()(sF.D, t),
        src: (0, i1.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var sz = i(300758);
let sW = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: i,
        gradientOffsetBottom: s,
        children: n,
    } = e;
    return t || i
        ? (0, c.jsxs)("div", {
              className: u()(sz.kL, sz.Gd, sz.Eg),
              children: [(0, c.jsx)(sV, {}), (0, c.jsx)(t7, {}), n],
          })
        : (0, c.jsx)(eN.h, { color: "nitro-pink", className: u()(sz.kL, sz.Gd), offsetBottom: s, children: n });
};
function sK(e) {
    let { glowingPerkId: t = null } = e,
        i = sM();
    return (0, c.jsx)(ih, {
        sectionClassName: ip.uW,
        heading: (0, c.jsx)(er.D, { variant: "display-sm", className: ip.R_, children: ex.intl.string(ex.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured;
                return (0, c.jsx)(
                    iu.S,
                    { ...e, glowing: t === e.id, featured: s, containerClassName: u()(ip.Nr, { [ip.Nq]: s }) },
                    e.id,
                );
            }),
        }),
    });
}
function sY(e, t, i, s) {
    !(function (e, t, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
            l = o.useRef(!1);
        o.useEffect(() => {
            if (!t || l.current) return;
            let i = { behavior: a ? "auto" : "smooth", block: s, inline: n },
                r = e();
            if (null != r && r.offsetHeight > 0) {
                (l.current = !0), r.scrollIntoView(i);
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
                    (c = !0), null != o && cancelAnimationFrame(o), d.disconnect();
                }
            );
        }, [t, a, s, n, ...i]),
            o.useEffect(() => {
                t || (l.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], i, s);
}
var sX = i(92737);
let sq = "/assets/cd2be35d285d4675.svg",
    sZ = (e) => {
        let { userId: t } = e,
            i = (0, U.ds)(),
            { isInNitroHomeHeaderTreatment: s } = H("nitro_member_hub_header"),
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
            (0, I.P)(_);
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
                    i = e.get(sX.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        sY(N ?? "", null != N, E, T);
        let [R, v] = o.useState(!1),
            P = (0, ee.p)(),
            S = o.useRef(null),
            [y, D] = o.useState(!1),
            M = null != P && null != d && d.status === e1.Dmq.CANCELED,
            k = (0, ei.iU)(tB.gD.PREMIUM_MONTH_TIER_2, P, d),
            G = !y && M,
            w = null != (0, g.bG)([Z.A], () => (null != t ? Z.A.getUserProfile(t) : null)) && (p || null != h),
            B = (0, $.TF)({ location: "PremiumSubscriberHome" }),
            F = (0, eh.q)(d, B === $.Iz.STICKY_BAR),
            [es, en] = (0, Y.iP)(
                null != F && w && d?.id != null ? z.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                d?.id ?? "",
                { cooldownDurationMs: J.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ea = null != d && d.status === e1.Dmq.CANCELED,
            el = s && !i && !ea,
            er = n && (i || ea),
            { analyticsLocations: ec } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eo, ed] = o.useState(!1);
        return w
            ? (0, c.jsxs)(K.Gt, {
                  className: u()(sz.xW, sz.Gd),
                  ref: l,
                  children: [
                      (0, c.jsx)(sW, {
                          shouldRenderNitroHomeHeaderExperiment: el,
                          shouldRenderNitroHomeFollowup: er,
                          gradientOffsetBottom: i && !n ? 0.55 : 0.8,
                          children: (0, c.jsxs)(j.f5, {
                              value: ec,
                              children: [
                                  (0, c.jsx)(W.L, {
                                      innerRef: S,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tX, {
                                          buttonVisibilityRef: S,
                                          className: sz.v1,
                                          userDiscountOffer: P,
                                          discountedPrice: k,
                                      }),
                                  }),
                                  (0, c.jsx)(sK, { glowingPerkId: C }),
                                  (0, c.jsx)(iO, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(sH, { glowingPerkId: C }),
                                  (0, c.jsx)(eb, {
                                      className: sz.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e1.liQ.NITRO_HOME, section: e1.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: sz.hz }),
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
                                      children: (0, c.jsx)("div", { ref: r, className: sz._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: sq,
                                      className: sz.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ex.intl.string(ex.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      M &&
                          null != k &&
                          (0, c.jsx)(iU, {
                              isVisible: G && R,
                              premiumSubscription: d,
                              churnDiscountOffer: P,
                              discountedPrice: k,
                          }),
                      null != es &&
                          null != F &&
                          null != d &&
                          (0, c.jsx)(ep, { premiumSubscription: d, content: F, markAsDismissed: en }),
                  ],
              })
            : el || er
              ? (0, c.jsxs)("div", {
                    className: u()(sz.kL, sz.Lq, sz.TN, sz.Eg),
                    children: [
                        (0, c.jsx)(t7, {}),
                        (0, c.jsx)("div", { className: sz.S, children: (0, c.jsx)(x.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(sz.kL, sz.Lq), children: (0, c.jsx)(x.y, {}) });
    };
var sQ = i(286320),
    sJ = i(727949),
    s$ = i(440005),
    s0 = i(26508);
let s1 = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var s2 = i(860839);
let s7 =
    "https://cdn.discordapp.com/assets/content/dfb187cfa9d267774f50c4f67cb7628658cefc11db41c6a04c08fc5aadc9dbcc.png";
function s6(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: s7,
        srcSet: `${s7} 1x, https://cdn.discordapp.com/assets/content/adb910c257d7510b97da4dccb2a4cea5f3a3fc6eb225dbfbbef0dd9d2a1971bf.png 2x`,
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var s3 = i(783420),
    s8 = i(204413),
    s5 = i(245383),
    s9 = i(824069),
    s4 = i(785007),
    ne = i(508770),
    nt = i(377541);
function ni(e) {
    let { value: t, planRadioOptions: i, ...s } = e,
        n = i.map((e) => {
            let i = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nt.VH,
                    children: [
                        i &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nt.fQ,
                                children: (0, c.jsx)(ne.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nt.qU,
                            children: [
                                (0, c.jsxs)(el.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nt.NI,
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
                                    className: nt.br,
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
                                                className: nt.yD,
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
                radioBarClassName: u()(nt.tG, { [nt.uA]: i, [nt.hy]: i && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(s4.$d, {
        ...s,
        options: n,
        value: t,
        size: s4.r9.NOT_SET,
        className: nt.ul,
        withTransparentBackground: !0,
    });
}
var ns = i(773669),
    nn = i(97352),
    na = i(252424),
    nl = i(526292),
    nr = i(186223),
    nc = i(369827),
    no = i(803496);
function nd(e) {
    let t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        i = (0, nc.L)(),
        s = t?.paymentSourceId ?? i,
        { priceOptions: n } = (0, no.A)({
            activeSubscription: t,
            skuIDs: [(0, eO.mH)(e)],
            paymentSourceId: s,
            isGift: !1,
        });
    return n;
}
function nu(e, t, i, s, n) {
    return t && i?.includes(e) === !0 && null != s && null != n && s !== n;
}
function nm(e) {
    let { expectedUsageInterval: t, usageInterval: i, discountDuration: s, regularPrice: n, discountedPrice: a } = e;
    return i !== t || null == n || null == a
        ? null
        : t === tB.Ff.YEAR
          ? ex.intl.format(ex.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : ex.intl.format(ex.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
}
var ng = i(883519);
function nx(e) {
    let { skuId: t, selectedPlanId: i, subscribeButtonProps: s } = e,
        n = null == i || !0 === s.disabled,
        a = null == i ? "secondary" : s.variant;
    return (0, c.jsx)(s3.A, {
        subscriptionTier: t,
        initialPlanId: i,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(eo.$, {
                size: "md",
                fullWidth: !0,
                icon: ed.t,
                text: s.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nf(e) {
    let { skuId: t, className: i } = e,
        s = t === tB.pe.TIER_2,
        n = (0, i1.q)((0, i2.Ay)()),
        a = (0, eG.V)(),
        l = a?.subscription_trial,
        r = l?.sku_id === t,
        d = s && r && null != l,
        m = (0, eU.p)(),
        {
            planRadioOptions: x,
            selectedPlanId: f,
            setSelectedPlanId: p,
            shouldSuppressDiscountCta: h,
        } = (function (e) {
            let { skuId: t } = e,
                [i, s] = o.useState(null),
                n = tB.En[t],
                a = tB.zE[t],
                l = t === tB.pe.TIER_2,
                r = nd(t),
                c = (0, eG.V)(),
                d = c?.subscription_trial?.sku_id === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, g.cf)([O.A], () => {
                    let e = O.A.getPremiumTypeSubscription();
                    return {
                        subscribedSkuId: (0, eO.aZ)(e),
                        isMonthlyPlanDisabled:
                            n === tB.gD.PREMIUM_MONTH_TIER_2 &&
                            null != e &&
                            [tB.gD.PREMIUM_YEAR_TIER_0, tB.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                    };
                }, [n]),
                x = u === t,
                f = (0, eU.O)(),
                p = (0, nl.k5)(),
                h = (0, g.bG)([ns.default], () => ns.default.locale),
                N = (0, ei.U9)(f, t),
                A = (0, ei.N1)(n),
                j = (0, ei.N1)(a),
                [b, C] = (0, g.yK)([nn.A], () => [nn.A.get(n), nn.A.get(a)], [n, a]),
                E = null != b ? (0, eO.sS)(b, r) : null,
                T = null != C ? (0, eO.sS)(C, r) : null,
                R =
                    N && f?.discount.amount != null && !p
                        ? ex.intl.formatToPlainString(ex.t.IAybsG, {
                              discount: (0, na.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                v = f?.discount?.planIds,
                _ = nu(a, N, v, j, T),
                I = nu(n, N, v, A, E),
                P = f?.discount.userUsageLimitInterval,
                S = f?.discount.userUsageLimit ?? tB.OJ,
                y = !l || _ || I || null == C ? null : (0, nr.Cj)(C, !1, r),
                D = !I || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== tB.pe.TIER_2 ? null : i && !s ? tB.En[t] : tB.zE[t];
                })({ skuId: t, monthlyHasDiscount: I, isMonthlyPlanDisabled: m }),
                L = null == i || (i === n && m) ? M : i,
                k = [
                    {
                        value: a,
                        primaryText: ex.intl.string(ex.t["/Q4HRN"]),
                        primarySubText:
                            (_
                                ? nm({
                                      expectedUsageInterval: tB.Ff.YEAR,
                                      usageInterval: P,
                                      discountDuration: S,
                                      regularPrice: T,
                                      discountedPrice: j,
                                  })
                                : null) ?? y,
                        secondaryText: _ ? j : T,
                        secondarySubText: _ ? T : null,
                        badgeText: _ ? R : null,
                        useGradientSelectedBorder: l && (d || _ || D),
                        isDisabled: x,
                    },
                    {
                        value: n,
                        primaryText: ex.intl.string(ex.t.DKzs96),
                        primarySubText: I
                            ? nm({
                                  expectedUsageInterval: tB.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: S,
                                  regularPrice: E,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: I ? A : E,
                        secondarySubText: I ? E : null,
                        badgeText: I ? R : null,
                        useGradientSelectedBorder: l && (d || I),
                        isDisabled: x || m,
                    },
                ],
                U = L === a ? _ : L === n && I;
            return { planRadioOptions: k, selectedPlanId: L, setSelectedPlanId: s, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        N = s && null == m ? "expressive" : "secondary",
        { buttonText: A } = (0, s5.A)({ subscriptionTier: t }),
        { subscribeButtonProps: j } = (0, s8.$)({
            subscriptionTier: t,
            variantOverride: N,
            buttonTextOverride: h ? A : void 0,
        }),
        b = (0, c.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: ng.Ux,
            children: [
                (0, c.jsx)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: ng.MY,
                    children: (0, c.jsx)(er.D, {
                        variant: "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: ng.JJ,
                        children: s ? ex.intl.string(ex.t.lG6a5x) : ex.intl.string(ex.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(el.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: ng.qT,
                    children: s
                        ? (0, c.jsx)(s2.ZP, {
                              featureSet: s2.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(s2.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                s && (0, c.jsx)(s9.K, {}),
                d
                    ? (0, c.jsx)("div", {
                          className: ng.qS,
                          role: "separator",
                          children: (0, c.jsx)(ec.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: ng.ZV,
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
                              })(l.interval, l.interval_count),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: ng.yF }),
                (0, c.jsxs)("div", {
                    className: ng.qr,
                    children: [
                        (0, c.jsx)(ni, { planRadioOptions: x, value: f ?? "", onChange: (e) => p(e.value) }),
                        (0, c.jsx)(nx, { skuId: t, selectedPlanId: f, subscribeButtonProps: j }),
                    ],
                }),
            ],
        }),
        C = u()(ng.Nr, i, { [ng.Fw]: s });
    return s
        ? (0, c.jsxs)(eN.h, {
              color: "nitro-pink",
              className: C,
              children: [
                  (0, c.jsx)("div", {
                      className: ng.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(s6, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  b,
              ],
          })
        : (0, c.jsx)("div", { className: C, children: b });
}
function np(e) {
    let { className: t } = e,
        i = (0, i1.q)((0, i2.Ay)()),
        s = (0, eU.p)(),
        n = null != s,
        a = nd(tB.pe.TIER_2),
        l = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: r, eventHandlers: o } = (0, eZ.A)({ userId: l?.id, size: eK._3.SIZE_32, animateOnHover: !0 }),
        d = (0, g.bG)([nn.A], () => nn.A.get(tB.gD.PREMIUM_GROUP_MONTH)),
        m = (0, ei.N1)(tB.gD.PREMIUM_GROUP_MONTH),
        f = n
            ? ex.intl.format(sp.default["7j70dP"], {
                  percent: s.discount?.amount,
                  premiumGroupProductName: (0, sf.DP)(),
              })
            : ex.intl.string(ex.t["2pG5Ga"]),
        p = (0, c.jsx)(s3.A, {
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
            className: u()(ng.Nr, t),
            children: (0, c.jsxs)(el.B, {
                direction: "vertical",
                gap: 0,
                fullWidth: !0,
                className: ng.Ux,
                children: [
                    (0, c.jsxs)(el.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 8,
                        fullWidth: !0,
                        className: ng.MY,
                        children: [
                            (0, c.jsx)(er.D, {
                                variant: "display-md",
                                color: i ? "text-strong" : "text-overlay-light",
                                className: ng.JJ,
                                children: ex.intl.string(sp.default.eSKiXk),
                            }),
                            null != l &&
                                (0, c.jsxs)(el.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 0,
                                    fullWidth: !1,
                                    className: ng.DD,
                                    "aria-hidden": !0,
                                    children: [
                                        (0, c.jsx)("div", {
                                            className: ng.uA,
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
                                            className: ng.VL,
                                            children: (0, c.jsxs)(ec.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-default",
                                                children: ["+", sf.LM],
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
                        className: ng.qT,
                        children: (0, c.jsx)(s2.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                    }),
                    (0, c.jsx)("hr", { className: ng.yF }),
                    (0, c.jsxs)("div", {
                        className: ng.qr,
                        children: [
                            (0, c.jsxs)("div", {
                                className: ng.ec,
                                children: [
                                    (0, c.jsx)(ec.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: ex.intl.string(sp.default.SvSwga),
                                    }),
                                    null == h
                                        ? (0, c.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS })
                                        : (0, c.jsx)(ec.E, {
                                              tag: "span",
                                              variant: "heading-lg/semibold",
                                              color: i ? "text-strong" : "text-overlay-light",
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
function nh(e) {
    let { innerRef: t, className: i } = e,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, s2.pw)(t),
        a = (0, sx.PA)(),
        l = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        r = { [ng.iR]: !l };
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsxs)(el.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(ng.oB, i),
            children: [
                (0, c.jsx)(er.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: ng.op,
                    children: ex.intl.string(ex.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(ng.kR, { [ng.BQ]: a }),
                    children: [
                        (0, c.jsx)(nf, { skuId: tB.pe.TIER_0, className: u()(ng.rz, r) }),
                        (0, c.jsx)(nf, { skuId: tB.pe.TIER_2, className: u()(ng.Rv, r) }),
                        a && (0, c.jsx)(np, { className: u()(ng.zz, r) }),
                    ],
                }),
            ],
        }),
    });
}
var nN = i(226830),
    nA = i(366010),
    nj = i(303136);
let nb = function (e) {
    let t,
        { className: i } = e,
        s = (0, tN.TM)(),
        n = (0, nA.q)((0, i2.Ay)());
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
var nC =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nE = i(5571);
let nT = function (e) {
    let { isVisible: t, subscriptionTier: i, isEligibleForBogoPromotion: s } = e,
        n = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e1.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(es.animated.div, {
        className: nE.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nE.U,
            children: [
                (0, c.jsx)(tt.A, {
                    size: "md",
                    subscriptionTier: i,
                    hasActivePromotion: !!s,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nR = i(685661);
let nv = function () {
    let e = (0, th.bG)([e_.Ay], () => e_.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nR.BI,
                children: (0, c.jsx)(tC, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tj.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tL, alt: "", className: nR.Q }),
                }),
            }),
            (0, c.jsx)(tT, {
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
var n_ = i(502701);
let nI = o.forwardRef((e, t) => {
    let { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsx)("div", {
            ref: t,
            className: n_.kL,
            children: (0, c.jsxs)("div", {
                className: n_.hQ,
                children: [
                    (0, c.jsx)(nv, {}),
                    (0, c.jsx)(er.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: n_.RH,
                        children: ex.intl.string(ex.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nI.displayName = "PremiumMarketingFooter";
var nP = i(939249);
let nS = function (e) {
    let { navBarSections: t, activeSectionId: i, isAnimationComplete: s } = e,
        n = {
            [nC.HOME]: ex.intl.string(ex.t.uGRXjS),
            [nC.WHATS_NEW]: ex.intl.string(ex.t["mfcR/v"]),
            [nC.BEST_OF_NITRO]: ex.intl.string(ex.t.xQKkE8),
            [nC.PLANS]: ex.intl.string(ex.t.wyNMnm),
            [nC.COMPARE]: ex.intl.string(ex.t.pwD7If),
        },
        a = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, tQ.Gh)("premium_marketing_nav_bar") && null != a,
        r = o.useRef(null),
        d = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsxs)(tZ.A, {
        className: t1.TQ,
        transparent: !0,
        children: [
            (0, c.jsxs)("div", {
                className: t1.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: t1.wG,
                        children: [
                            (0, c.jsx)(ed.t, { className: t1.nE, colorClass: t1.oG }),
                            (0, c.jsx)("div", {
                                className: t1.zc,
                                role: "tablist",
                                "aria-label": ex.intl.string(ex.t.O9MiXY),
                                children: d.map((e) => {
                                    let t = i === e.id,
                                        s = n[e.id];
                                    return (0, c.jsxs)(
                                        nP.D,
                                        {
                                            role: "tab",
                                            "aria-selected": t,
                                            className: t1.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, c.jsx)(ec.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: s,
                                                }),
                                                t && (0, c.jsx)("div", { className: t1.W0 }),
                                            ],
                                        },
                                        s,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: t1.MQ,
                        children: [
                            l &&
                                (0, c.jsx)(t0.l, { ref: r, size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            l && s && (0, c.jsx)(t$.O, { targetElementRef: r }),
        ],
    });
};
var ny = i(704333),
    nD = i(414499),
    nM = i(597770),
    nO = i(500060),
    nL = i(866665),
    nk = i(406860),
    nU = i(870975),
    nG = i(900485);
function nw() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nk.A)({ boxType: is.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: ny.B, text: ex.intl.string(ir.default.MUypiB) },
            { icon: nD.h, text: ex.intl.string(ir.default.ec5Rdd) },
            { icon: nM.o, text: ex.intl.string(ir.default["9t2CzW"]), tooltip: ir.default.AyECej },
            { icon: nO.o, text: ex.intl.string(ir.default.R7YJAY) },
        ];
    return (0, c.jsx)(W.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nG.iE,
            children: (0, c.jsxs)("div", {
                className: nG.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nG.j,
                        children: [
                            (0, c.jsx)("div", { className: nG._g }),
                            (0, c.jsx)("div", { className: nG.$h }),
                            (0, c.jsx)("div", { className: nG.Rv }),
                            (0, c.jsx)("div", { className: nG.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nG.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nG.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(er.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nG.R_,
                                                children: ex.intl.string(ir.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    i.map((e) => {
                                                        let { icon: t, text: i, tooltip: s } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nG.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(ec.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: i,
                                                                    }),
                                                                    null != s &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nG.Jn,
                                                                            children: (0, c.jsx)(nL.m, {
                                                                                text: ex.intl.string(s),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(t8.m, {
                                                                                    size: "xxs",
                                                                                    color: "var(--icon-default)",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            i,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: nG.xF,
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
                                        className: nG.WE,
                                        children: (0, c.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ex.intl.format(ir.default.KDKdWi, { termsLink: (0, nU.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nG.r1,
                                children: (0, c.jsx)("img", {
                                    className: nG.wm,
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
var nB = i(750338),
    nH = i(387640),
    nF = i(950228);
function nV(e) {
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
        className: u()(nF.boxBackdrop, t),
        children: [
            (0, c.jsx)(er.D, {
                className: nF.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: s,
            }),
            null != r && (0, c.jsx)("div", { className: nF.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nF.bentoBoxesGrid,
                children: i.map((e, t) => {
                    let i;
                    switch (e.length) {
                        case 3:
                            i = nH.A0.SMALL;
                            break;
                        case 2:
                            i = nH.A0.MEDIUM;
                            break;
                        default:
                            i = nH.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                nB.A,
                                { index: t + +!!l, ...e, size: i, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let nz = o.memo(function (e) {
        let t = (0, t6.b)("premium_marketing_bento"),
            { whatsNewBoxes: i } = (0, nH.Ay)(t);
        return (0, c.jsx)(nV, {
            boxLayout: i,
            title: ex.intl.string(ex.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(nw, {}) : null,
            ...e,
        });
    }),
    nW = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nH.Ay)();
        return (0, c.jsx)(nV, { boxLayout: t, title: ex.intl.string(ex.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nK = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nY = i(236834),
    nX = i(167805);
function nq(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eZ.A)({ userId: t?.id, size: eK._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nX.$6,
        children: (0, c.jsxs)("div", {
            className: nX.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nX.kR,
                    children: (0, c.jsx)(eY.eu, { src: i, "aria-label": t.username, size: eK._3.SIZE_32, ...s }),
                }),
                (0, c.jsx)(er.D, {
                    variant: "heading-sm/normal",
                    className: nX.FS,
                    color: "text-strong",
                    children: ex.intl.format(ex.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var nZ = i(579245),
    nQ = i(369805);
let nJ = function () {
    let e = (0, nQ.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eV, { text: e });
};
function n$() {
    let e = (0, g.bG)([nn.A], () => nn.A.getForSkuAndInterval((0, eO.mH)(tB.pe.TIER_0), tB.WT.MONTH));
    return null != e ? (0, eO.sS)(e) : "\u2026";
}
var n0 = i(857681);
let n1 = function (e) {
    let { containerVisibilityPercentage: t } = e,
        i = (0, th.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        s = (0, tN.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: n0.YU,
        children: [
            (0, c.jsx)(t_, {
                supportHEVCAlpha: s,
                isMotionReduced: i,
                containerVisibilityPercentage: t,
                containerClassName: n0.wG,
                assetClassName: n0.lu,
            }),
            (0, c.jsx)(tT, {
                isMotionReduced: i,
                containerVisibilityPercentage: t,
                boltContainerClassName: n0.nJ,
                carContainerClassName: n0.IN,
                hammerContainerClassName: n0.Gj,
                keyContainerClassName: n0.FV,
                starContainerClassName: n0.E1,
                boltAssetClassName: n0.j7,
                carAssetClassName: n0.or,
                hammerAssetClassName: n0.Wv,
                keyAssetClassName: n0.rs,
                starAssetClassName: n0.OY,
            }),
        ],
    });
};
var n2 = i(507256);
let n7 = o.memo(
    o.forwardRef(function (e, t) {
        let { className: i, subscriptionTier: s, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = n$(),
            r = nK.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, nY.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: x } = eH(
                !(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
            ),
            f = (0, sQ.b)(),
            p = !d && f.length > 0,
            h = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            b = (0, nl.ar)() && !N,
            C = (0, eU.O)(),
            E = (null != C && tB.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(n2.kL, i),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: n2.hQ,
                        children: [
                            (0, c.jsx)(n1, { containerVisibilityPercentage: x }),
                            b && (0, c.jsx)(nJ, {}),
                            (0, c.jsx)("div", {
                                className: n2.s8,
                                children: (0, c.jsx)(tm.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(er.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: n2.wx,
                                        children: ex.intl.string(ex.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: n2.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: n2.eZ,
                                            children: (0, c.jsx)(nq, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: n2.Qn,
                                            children: (0, c.jsx)(nZ.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: b ? n2.es : n2.UJ,
                                        children: [
                                            (0, c.jsx)(tt.A, {
                                                size: "md",
                                                fullWidth: b,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == s ? tB.pe.NONE : s,
                                                buttonTextOverride: E ? ex.intl.string(ex.t["2pG5Ga"]) : void 0,
                                            }),
                                            !b && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n2.iQ,
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
var n6 = i(820081),
    n3 = i(140735),
    n8 = i(401432),
    n5 = i(580630),
    n9 = i(795269),
    n4 = i(84483),
    ae = i(864386),
    at = i(509826),
    ai = i(202600);
function as(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n6.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n3.A, { children: ex.intl.string(ex.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n8.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n3.A, { children: ex.intl.string(ex.t.l4qZrp) }),
              ],
          });
}
function an(e) {
    let { label: t, tier0ColumnData: i, tier2ColumnData: s } = e;
    return (0, c.jsxs)("tr", {
        className: u()(at.nM, at.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: at.nx,
                children: (0, c.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: at.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(as, { includes: !!i.includes }),
            }),
            (0, c.jsx)("td", {
                className: at.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(as, { includes: !!s.includes }),
            }),
        ],
    });
}
function aa(e) {
    let { title: t, subtitle: i, rows: s } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(at.nM, at.Gf),
                children: (0, c.jsxs)("td", {
                    className: at.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(er.D, { variant: "heading-lg/bold", children: t }),
                        null != i && (0, c.jsx)(ec.E, { variant: "text-xs/medium", children: i }),
                    ],
                }),
            }),
            s.map((e) => (0, c.jsx)(an, { ...e }, e.id)),
        ],
    });
}
function al(e) {
    let { premiumType: t, priceString: i } = e,
        s = t === tB.PremiumTypes.TIER_0 ? ex.intl.string(ex.t.tUbSDK) : ex.intl.string(ex.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: at.nn,
        children: [
            (0, c.jsxs)("div", {
                className: at.KS,
                children: [
                    (0, c.jsx)(ed.t, { colorClass: at.oG }),
                    (0, c.jsx)(er.D, { variant: "heading-sm/semibold", children: s }),
                ],
            }),
            (0, c.jsx)(er.D, { variant: "heading-sm/semibold", children: i }),
        ],
    });
}
function ar(e) {
    let { tier0Price: t, tier2Price: i, shouldUseDiscountPrice: s, tier2DiscountedPriceString: n } = e,
        a = s ? n : (0, n5.$g)(i.amount, i.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: at.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: at.Cr,
                    children: (0, c.jsx)(er.D, { variant: "heading-xl/bold", children: ex.intl.string(ex.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: at.Hn,
                    children: (0, c.jsx)(al, {
                        premiumType: tB.PremiumTypes.TIER_0,
                        priceString: (0, n5.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: at.Hn,
                    children: (0, c.jsx)(al, { premiumType: tB.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let ac = function (e) {
        let t,
            { className: i, hidePill: s = !1, selectedPlanTier: n = tB.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, eG.V)(),
            r = l?.subscription_trial?.sku_id,
            d = (0, eU.O)(),
            m = (0, ei.YJ)(d),
            g = null != d && (0, ei.U9)(d, tB.pe.TIER_2) && m === tB.gD.PREMIUM_MONTH_TIER_2,
            x = (0, ei.N1)(m),
            f = null != x ? `${x}/${(0, eO.FJ)(tB.WT.MONTH)}` : "",
            p = (0, eO.JM)(tB.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eO.JM)(tB.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, t6.b)("premium_marketing_comparison"),
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
                            label: ex.intl.string(ae.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    i = null,
                    s = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, se.lk)(so.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = ib.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, iC.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, n4.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((i = {
                            id: 23,
                            title: ex.intl.string(ex.t.NG1e6l),
                            subtitle: ex.intl.format(ir.default.uJcbMv, {
                                termsLink: eM.A.getArticleURL(e1.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ex.intl.string(ir.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            i.rows.push({
                                id: 25,
                                label: ex.intl.string(ir.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            i.rows.push({
                                id: 26,
                                label: ex.intl.string(iI.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            s.push({
                                id: 27,
                                label: ex.intl.formatToPlainString(ex.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            s.push({
                                id: 28,
                                label: ex.intl.string(sa.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != i ? [i] : []),
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
                                        percentageOff: (0, n5.l9)(ns.default.locale, tB.oX / 100),
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
                                ...s,
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
        if (s) t = null;
        else {
            let e = null != l ? ex.intl.string(ex.t.IBYG5U) : ex.intl.string(ex.t.TR2B4T);
            t = (0, c.jsx)(n9.R, { className: u()(at.Io, at.SP), text: e });
        }
        let b = r === tB.pe.TIER_0 || n === tB.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(at.zr, i),
                children: [
                    (0, c.jsx)(er.D, {
                        className: at.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: ex.intl.string(ex.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: at.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(at.fO, { [at.Vd]: b, [at.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: at.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: at.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: ai, alt: "", className: at.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: at.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: at.tp,
                                children: [
                                    (0, c.jsx)(ar, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: g,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(aa, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    ao = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            i = (0, o.useCallback)(
                (e) => {
                    let i = r.current[e];
                    null != i &&
                        ((i.style.scrollMarginTop = `${t}px`),
                        i.scrollIntoView({ behavior: "smooth", block: "start" }));
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
                                        (r.current[t] = e), null != e && (e.id = t);
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
var ad = i(818348),
    au = i(952661);
function am(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: i } = e;
    return i ? (0, c.jsx)(nh, { innerRef: t }) : (0, c.jsx)(nN.jP, { innerRef: t });
}
let ag = () => {
    let e = (0, m.zy)();
    (0, I.P)(_);
    let t = o.useRef(null),
        i = o.useRef(null),
        s = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        [d, x] = o.useState(r);
    o.useEffect(() => {
        if (r) return void x(!0);
        let e = i.current;
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
    let M = (0, iA.A0)({ location: "PremiumMarketingHome" }),
        k = (0, s0.DK)(s$.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: U } = (0, se.lk)(so.rE.NITRO_HOME_MARKETING),
        G = k && U ? nH.NI.COMBINED_ORBS : U ? nH.NI.ORB_MULTIPLIER : k ? nH.NI.ORB_REWARDS : null,
        w = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? G
                : t === nH.NI.THREE_P_PROMOTIONS
                  ? M
                      ? nH.NI.CALL_OF_DUTY
                      : nH.NI.THREE_P_PROMOTIONS
                  : null;
        }, [M, e.search, G]);
    sY(w ?? "", null != w);
    let { navBarSections: B, activeSectionId: H } = ao([nC.HOME, nC.WHATS_NEW, nC.BEST_OF_NITRO, nC.PLANS, nC.COMPARE]),
        { home: F, whatsNew: V, bestOfNitro: z, plans: Y, compare: X } = B,
        q = (function (e) {
            let { location: t } = e;
            return s1.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        Z = (0, c.jsxs)("div", {
            ref: i,
            className: u()(au.kL, au.Gd, au.iI, { [au.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nb, { className: au.yH }),
                (0, c.jsx)(nS, { navBarSections: B, activeSectionId: H, isAnimationComplete: d }),
                (0, c.jsxs)("div", {
                    className: au.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: au.qY,
                            ref: F.ref,
                            children: (0, c.jsx)(W.L, {
                                innerRef: n,
                                onChange: (e) => p(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n7, {
                                    ref: n,
                                    subscriptionTier: S,
                                    isEligibleForBogoPromotion: y,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: au.So,
                            ref: V.ref,
                            children: (0, c.jsx)(nz, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: au.KQ,
                            ref: z.ref,
                            children: (0, c.jsx)(nW, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: au.s5,
                            ref: Y.ref,
                            children: (0, c.jsx)(
                                W.L,
                                {
                                    innerRef: s,
                                    onChange: (e) => N(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(am, { innerRef: s, isPlanSelectUiRedesignEnabled: q }),
                                },
                                q ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: au.aC, ref: X.ref, children: (0, c.jsx)(ac, {}) }),
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
                    children: (0, c.jsx)("div", { ref: a, className: au._Z }),
                }),
                (0, c.jsx)(nI, { ref: l }),
                (0, c.jsx)(nT, { isVisible: !f && !h && E, subscriptionTier: S, isEligibleForBogoPromotion: y }),
                (0, c.jsx)(nb, { className: au.MF }),
            ],
        });
    return (0, c.jsx)(t5.N, {
        theme: ad.NJ.DARKER,
        children: (e) => (0, c.jsx)(K.Gt, { className: u()(au.XG, e), ref: t, children: Z }),
    });
};
var ax = i(862482),
    af = i(528464),
    ap = i(662367),
    ah = i(374403),
    aN = i(396375),
    aA = i(815846),
    aj = i(695366),
    ab = i(107736);
let aC = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nl.ar)();
    if (null == s) return null;
    let r = null != s ? eO.Ay.getPremiumPlanItem(s) : null;
    if (
        (eO.Ay.isBoostOnlySubscription(s)
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
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(t9.Z, {
            className: u()(ab.kL, n, { [ab.He]: l }),
            type: t9.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(aj.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(ab.Kk, { [ab.Pt]: l }),
                }),
                (0, c.jsx)(ec.E, {
                    variant: "text-sm/medium",
                    color: i,
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
var aE = i(697335);
let aT = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aE.zr, { [aE.N]: t }),
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
                        (0, c.jsx)("stop", { className: aE.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aE.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aE.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aE.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aE.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aR = i(900797),
    av = i(847374),
    a_ = i(812993),
    aI = i(504041);
function aP(e) {
    let { className: t } = e;
    return (0, c.jsx)(a_.Lp, { className: u()(aI.T, t), text: ex.intl.string(ex.t.EYxi0o) });
}
var aS = i(904788),
    ay = i(507553),
    aD = i(255438);
let aM = "/assets/5b4fec8511c3676a.svg",
    aO = "/assets/0838bda6ecd20d91.svg";
function aL(e, t, i) {
    return (0, i1.M)(e) ? t : i;
}
var ak = i(365742);
function aU(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, c.jsxs)(nP.D, {
        onClick: i,
        className: ak.customButton,
        children: [
            t ? ex.intl.string(ex.t.maZaN3) : ex.intl.string(ex.t["37C26f"]),
            t
                ? (0, c.jsx)(aR.t, { size: "md", color: "currentColor", className: ak.arrow })
                : (0, c.jsx)(av.a, { size: "md", color: "currentColor", className: ak.arrow }),
        ],
    });
}
function aG(e) {
    let {
            title: t,
            description: i,
            className: s,
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
            className: u()(ak.perkCard, s),
            children: [
                r
                    ? (0, c.jsx)(aS.A, {
                          className: ak.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aP, { className: ak.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, ak.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(er.D, {
                            variant: "heading-lg/extrabold",
                            className: ak.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: ak.perkCardDescription,
                            children: "function" == typeof i ? i(d) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aw = function (e) {
    let { className: t, isSubscriberNitroHome: s = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                s = (0, i2.Ay)(),
                n = (0, i3.X)("usePerkCards"),
                a = (0, th.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eO.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, aD.Xq)(tB.f3 / 1024, { useKibibytes: !0 });
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
                    imageSource: aL(s, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                let { openUserSettings: t } = i(766075);
                                ay.A.setState({ scrollPosition: sO._F.TRY_IT_OUT }),
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
                    imageSource: aL(s, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: aL(s, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: aL(s, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ex.intl.string(ex.t["lGcW+c"]),
                    description: ex.intl.string(ex.t["/fDyO+"]),
                    imageSource: aL(s, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ex.intl.string(ex.t["1c+xwT"]),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: aL(s, aO, aM),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: aL(s, aO, aM),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: aL(s, aO, aM),
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
                    imageSource: aL(s, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: aL(s, sL, sk),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ak }),
        r = (0, th.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
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
        className: u()(ak.perksContainer, t, {
            [ak.partiallyHidden]: s && !n,
            [ak.subscriberNitroHome]: s,
            [ak.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(er.D, {
                variant: "heading-xxl/extrabold",
                className: ak.perksTitle,
                children: s ? ex.intl.string(ex.t.QX14gI) : ex.intl.string(ex.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(ak.perkCardContainer, { [ak.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aG, { ...e }, e.title)),
            }),
            s &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [ak.sizeGizmo]: !n, [ak.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aU, {
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
                        (0, c.jsx)("div", { className: u()(ak.cover, { [ak.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aB = i(194509),
    aH = i(222214);
let aF = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: e1.JJy.MARKETING_FLOATING_CTA },
        r = (0, i2.Ay)(),
        o = (0, nA.M)(r);
    return (0, c.jsx)(es.animated.div, {
        className: u()(aH.iE, { [aH.H8]: s, [aH.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: s ? aH.zW : aH.iJ,
            children: [
                (0, c.jsx)(aN.A, {
                    color: o ? ax.XD.BRAND_INVERTED : void 0,
                    className: u()(aH.x6, { [aH.Ph]: o }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aH.PJ,
                }),
                (0, c.jsx)(aB.A, { className: aH.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aV = i(93805);
function az(e) {
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
            ? (0, c.jsx)(aN.A, {
                  color: l ? ax.XD.BRAND_INVERTED : void 0,
                  className: u()(aV.x6, aV.Ph, n, { [aV.Sq]: t && a, [aV.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aV.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aN.A, {
                  color: l || !a ? ax.XD.BRAND_INVERTED : void 0,
                  className: u()(aV.x6, aV.Ph, n, { [aV.Sq]: t && a, [aV.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        d = t && a ? null : (0, c.jsx)(aB.A, { className: u()(aV.x6, n), color: a ? void 0 : ax.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aV.UD, s), children: [o, " ", d] });
}
function aW() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aS.p, { className: aV.zd }),
            (0, c.jsx)(aS.p, { className: aV.G }),
            (0, c.jsx)(aS.p, { className: aV.zy }),
            (0, c.jsx)(aS.p, { className: aV.GX }),
        ],
    });
}
function aK(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = n$();
    return (0, c.jsx)(ec.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: u()(aV.h_, { [aV.If]: i, [aV.jn]: s }),
        children: ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aY = o.forwardRef(function (e, t) {
    let { className: i, buttonClassName: s, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ek.QQ)(),
        o = (0, nl.ar)(),
        d = (0, eL.cg)(),
        m = (0, sQ.b)().length > 0,
        g = ex.intl.string(ex.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(aV.kL, i, { [aV.V1]: !o, [aV.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aV.I6 : aV.G1,
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
                                  className: aV.DF,
                                  children: (0, c.jsx)(nZ.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aK, {}),
                        d || r
                            ? (0, c.jsx)("div", {
                                  className: aV.UD,
                                  children: (0, c.jsx)(aB.A, { className: u()(aV.x6, s), color: ax.XD.WHITE }),
                              })
                            : (0, c.jsx)(az, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: s,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(aK, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aW, {}),
            ],
        }),
    });
});
var aX = i(22118),
    aq = i(918676),
    aZ = i(967603);
function aQ(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aT, { lifted: t }) : null;
}
let aJ = () => {
        (0, I.P)(_);
        let e = o.useRef(null),
            t = o.useRef(null),
            i = o.useRef(null),
            s = (0, i2.Ay)(),
            n = (0, i1.M)(s),
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
            R = (0, nl.ar)(),
            v = (0, eL.cg)(),
            P = (0, tQ.Gh)("premium-marketing-settings-page"),
            S = v ?? !1,
            y = (0, g.bG)([af.A], () => {
                let e = af.A.getMarketingComponentByType(eC.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, ah.Q)(),
            { analyticsLocations: M } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let k = (0, c.jsx)("div", {
            className: aZ.dY,
            children: (0, c.jsx)(W.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(s2.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aN.A, {
                        showIcon: !1,
                        subscriptionTier: tB.pe.TIER_0,
                        className: aq.Ph,
                        look: ax.pR.OUTLINED,
                        color: ax.XD.WHITE,
                        buttonShineClassName: aq.Qr,
                    }),
                    tier2CTAButton:
                        T === tB.pe.TIER_0
                            ? (0, c.jsx)(aN.A, {
                                  showIcon: !1,
                                  subscriptionTier: tB.pe.TIER_2,
                                  className: aq.Ph,
                                  look: ax.pR.OUTLINED,
                                  color: ax.XD.WHITE,
                                  buttonShineClassName: aq.Qr,
                              })
                            : (0, c.jsx)(aN.A, {
                                  color: ax.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tB.pe.TIER_2,
                                  className: aq.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: aq.Ac },
                                  buttonShineClassName: aq.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: aZ.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aC, { premiumSubscription: h, className: u()(aZ.R3, { [aZ.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: aZ.n1,
                        children: [
                            (0, c.jsx)(aQ, { inOfferExperience: R }),
                            P &&
                                (0, c.jsx)(t0.l, {
                                    className: aZ.ij,
                                    size: "md",
                                    location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aZ.V1]: !R }),
                    children: [
                        null != y && (0, c.jsx)(aA.c, { className: aZ.w$, config: y }),
                        (0, c.jsxs)("div", {
                            className: aZ.iS,
                            children: [
                                P &&
                                    !R &&
                                    (0, c.jsx)(t0.l, {
                                        className: aZ.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(W.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(aY, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [aZ.p7]: R, [aZ.Pw]: R, [aZ.AG]: v, [aZ.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: aZ.Ol, children: (0, c.jsx)(ap.I, { component: D }) }),
                k,
                (0, c.jsx)(aw, { className: aZ.B_ }),
                (0, c.jsx)("div", { className: aZ.aC, children: (0, c.jsx)(aX.A, { className: aZ.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: aZ.hz }),
                (0, c.jsx)(aF, {
                    isVisible: !a && !r && f,
                    subscriptionTier: C,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: v,
                }),
                (0, c.jsx)(W.L, {
                    innerRef: i,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            x(!0));
                    },
                    children: (0, c.jsx)("div", { ref: i, className: aZ._Z }),
                }),
                (0, c.jsx)("img", {
                    src: sq,
                    className: aZ.Kw,
                    width: 112,
                    height: 85,
                    alt: ex.intl.string(ex.t.X4IxWL),
                }),
            ],
        });
    },
    a$ = function (e) {
        let { entrypoint: t } = e,
            i = (0, eG.V)(),
            s = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, sJ.NF)({ trialOffer: i }),
            a = (0, sJ.Tp)(),
            l = (0, g.bG)([eJ.A], () => eJ.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                !0 === n && (0, sJ.QG)(), !0 === a && (0, sJ.ne)(l), (null != i || null != s) && (0, G.u1)(i, s);
            }, [i, s, n, a, l]),
            t)
        ) {
            case tB.tU.UserSettings:
                return (0, c.jsx)(aJ, {});
            case tB.tU.ApplicationStoreHome:
                return (0, c.jsx)(ag, {});
            default:
                return null;
        }
    };
var a0 = i(738783);
let a1 = function (e) {
    let { entrypoint: t = tB.tU.UserSettings } = e;
    (0, I.P)(_);
    let i = (0, C.Hp)(),
        { isInNitroHomeHeaderTreatment: s } = H("nitro_member_hub_header"),
        n = V("nitro_member_hub_header"),
        a = (0, U.ds)(),
        { sourceAnalyticsLocations: l, analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        d = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        R = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        v = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        w = v?.id,
        B = (0, eG.V)(),
        F = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        z = (0, E.Y)(tB.T7),
        [W, K] = o.useState(!0),
        Y = o.useRef(0),
        X = (0, k.YE)(v, tB.PremiumTypes.TIER_2),
        q = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        Z = null != q && q.status === e1.Dmq.CANCELED;
    (0, sQ.b)(),
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
            i && (null != B || null != F) && (0, G.u1)(B, F);
        }, [i, B, F]);
    let Q = (0, m.zy)(),
        J = o.useRef(!1),
        $ = d && R && z,
        [ee, et] = o.useState($);
    $ && !ee && et(!0),
        o.useEffect(() => {
            if (J.current || !$) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tB.pe.TIER_0, nitro: tB.pe.TIER_2 }[e];
            null != t &&
                ((J.current = !0),
                (0, S.bG)(e1.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: t, analyticsLocations: r }));
        }, [$, Q.search, r]);
    let ei = (0, g.bG)([y.A], () => y.A.enabled),
        es = t === tB.tU.ApplicationStoreHome,
        en = ei
            ? (0, c.jsx)(h.A, {})
            : i
              ? (0, c.jsx)(T.uK, {})
              : es && X
                ? (0, c.jsx)(j.f5, { value: r, children: (0, c.jsx)(sZ, { userId: w }) })
                : ee
                  ? null
                  : (0, c.jsx)("div", { className: u()(a0.kL, a0.Lq), children: (0, c.jsx)(x.y, {}) });
    if (null != en) {
        let e = !ei && !i && es && X;
        return (s && e && !a && !Z) || (n && e && (a || Z))
            ? en
            : (0, c.jsxs)(c.Fragment, { children: [es && (0, c.jsx)(N.A, {}), en] });
    }
    return (0, c.jsx)(j.f5, { value: r, children: (0, c.jsx)(a$, { entrypoint: t }) });
};
