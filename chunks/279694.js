s.d(t, { A: () => a2 }), s(323874), s(14289), s(35956), s(205816);
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
    h = s(73825),
    p = s(974544),
    N = s(107834),
    A = s(793574),
    j = s(688810),
    b = s(277984),
    C = s(86379),
    E = s(160946),
    T = s(545075),
    v = s(840251),
    R = s(688151);
let I = new v.E([], R.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = s(611924),
    P = s(75678),
    S = s(976860),
    y = s(351906),
    D = s(287809),
    M = s(295405),
    O = s(166403),
    L = s(174459),
    k = s(474090),
    U = s(881489),
    G = s(10392),
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
    Y = s(689175),
    K = s(131607),
    X = s(961250),
    Z = s(366505),
    q = s(321191),
    Q = s(903209),
    J = s(927813),
    $ = s(107857),
    ee = s(131168),
    et = s(482589),
    es = s(511484),
    ei = s(950372),
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
    ef = s(862068);
function eh(e) {
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
var ep = s(428331),
    eN = s(315629),
    eA = s(65470),
    ej = s(719126);
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
var ev = s(502572),
    eR = s(192308),
    eI = s(775602),
    e_ = s(366999),
    eP = s(531260),
    eS = s(780964),
    ey = s(766075),
    eD = s(786300),
    eM = s(975571),
    eO = s(158045),
    eL = s(725018),
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
var eF = s(287763);
let eV = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eF.i,
        children: (0, c.jsx)(ec.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var ez = s(371764),
    eW = s(103411),
    eY = s(778712),
    eK = s(97808),
    eX = s(590251),
    eZ = s(144165),
    eq = s(854627),
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
    e3 = s(162907);
function e6(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    L.default.track(e1.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, eR.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        });
}
function e5(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eq.A)({ userId: t.id, size: eY._3.SIZE_24 });
    return (0, c.jsx)(
        eK.eu,
        { className: e3.bj, src: s, "aria-label": (0, eQ.mG)(t), size: eY._3.SIZE_24, ...i },
        t.id,
    );
}
function e8(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e3.p, children: t });
}
function e9(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e3.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < e0.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e5, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e8, { slotIndex: s + 1 }, s);
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
        background: i ?? e3.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e3.e0,
        overlayClassName: t === e0.Z ? e3.ys : void 0,
        children: (0, c.jsx)(eZ._, {
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
        className: u()(e3.kL, t),
        children: [
            (0, c.jsx)("div", { className: e3.G3, children: (0, c.jsx)(e4, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: e3.IH,
                children: [
                    (0, c.jsx)(e9, { referralSentUsers: s, className: e3.GV }),
                    (0, c.jsxs)("div", {
                        className: e3.n4,
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
                            e6({ startingScreen: e7.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var tt = s(792656),
    ts = s(536637),
    ti = s.n(ts),
    tn = s(496431),
    ta = s(850292);
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
    td = s(938767);
function tu() {
    let e = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tc.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eq.A)({ userId: e?.id, size: eY._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eQ.mG)(e);
    return (0, c.jsxs)("div", {
        className: td.kL,
        children: [
            (0, c.jsx)("div", {
                className: td.my,
                children: (0, c.jsx)(eK.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eY._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: td.QC, children: (0, c.jsx)(to.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tm = s(707554),
    tg = s(628154);
let tx = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(tm.F, {
        forceLevel: 1,
        children: (0, c.jsx)(er.D, { className: u()(tg.w, t, i && tg.n), variant: n, color: s, children: a }),
    });
};
var tf = s(558992);
function th(e) {
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
                    e6({ startingScreen: e7.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tp = s(702841),
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
        [h, p] = (0, o.useState)(1),
        N = (0, ea.z)(
            null != t
                ? {
                      from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => p((e) => -1 * e),
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
var tE = s(382168);
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
        blurScale: h = 1,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(tE.nJ, i),
                    children: (0, c.jsx)(tC, {
                        blurAnimationData: { startBlurRadius: 10 * h, endBlurRadius: 0, duration: 3e3 },
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
                        blurAnimationData: { startBlurRadius: 5 * h, endBlurRadius: 0, duration: 4e3 },
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
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * h, duration: 3e3 },
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
var tv = s(607470);
let tR =
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
                                tv.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tR }),
                                },
                                tR,
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
            h = (0, tp.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
            p = (0, tN.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tI, {
                    supportHEVCAlpha: p,
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, c.jsx)(tT, {
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
                    keyAssetClassName: g,
                    starAssetClassName: x,
                    animationSpeedScale: f,
                }),
            ],
        });
    };
var tP = s(942663);
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
    tD = s(454273);
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
        h = o ?? (r ? (0, c.jsx)(th, {}) : null);
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
                                            variant: "nitro-md",
                                            children: f,
                                        }),
                                        (0, c.jsx)(tu, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tD.y3,
                    children: (0, c.jsx)(tS, { containerVisibilityPercentage: x, compact: null == h }),
                }),
            ],
        }),
    });
};
var tO = s(924864);
let tL =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tk = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, tp.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
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
var tU = s(549926);
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
var tw = s(499126);
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
    let e = (0, tp.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
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
    (0, eR.openModalLazy)(async () => {
        let { PremiumBrandRefreshSubscriptionCancellationModal: n } = await Promise.all([
            s.e("489361"),
            s.e("227853"),
            s.e("470126"),
            s.e("162775"),
            s.e("128804"),
            s.e("60882"),
            s.e("71151"),
            s.e("286615"),
            s.e("70866"),
            s.e("311541"),
            s.e("472847"),
            s.e("870088"),
            s.e("989649"),
            s.e("853458"),
            s.e("718368"),
            s.e("258407"),
            s.e("153302"),
            s.e("758053"),
            s.e("836576"),
            s.e("983513"),
            s.e("216806"),
            s.e("310734"),
            s.e("348567"),
            s.e("900277"),
            s.e("127962"),
            s.e("364827"),
            s.e("907167"),
            s.e("861060"),
            s.e("952372"),
            s.e("959880"),
            s.e("910486"),
            s.e("56366"),
            s.e("797595"),
            s.e("641248"),
            s.e("544571"),
            s.e("40291"),
            s.e("523276"),
            s.e("948720"),
            s.e("729963"),
            s.e("830938"),
            s.e("392075"),
            s.e("174016"),
            s.e("852557"),
            s.e("790417"),
            s.e("50097"),
            s.e("76027"),
            s.e("594161"),
            s.e("435432"),
            s.e("80347"),
            s.e("680166"),
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
                                    onClick: () => (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL),
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
                                    onClick: () => (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL),
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
function tY(e) {
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
        h = m ?? (d ? (0, c.jsx)(th, {}) : null);
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
                        h,
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
function tK(e) {
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
        } = tZ(),
        { isInNitroHomeHeaderTreatment: f } = H("subscriber_home_hero"),
        h = V("subscriber_home_hero"),
        { analyticsLocations: p } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
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
    let v = T;
    null == v && i && !E && (v = (0, c.jsx)(te, {}));
    let R = (0, eG.V)(),
        I = (0, eU.O)(),
        _ = (0, es.U9)(I, tF.pe.TIER_2) ? tF.pe.TIER_2 : void 0,
        P = null != o && o.status !== e1.Dmq.ACCOUNT_HOLD && o.hasAnyPremiumNitro,
        S = (0, eP.A)(),
        y = S.isFractionalPremiumActive && !P && null == v && !r,
        { visibilityPercentageRef: D, visibilityPercentage: M } = eH(!(0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion));
    if (s)
        return h
            ? (0, c.jsx)(tW, { fpEndsAt: S.currentEntitlementEndsAt, className: t, buttonVisibilityRef: x })
            : (0, c.jsx)(tz, { fpEndsAt: S.currentEntitlementEndsAt, className: t, buttonVisibilityRef: x });
    if (E) {
        let e = y
            ? (0, c.jsxs)("div", {
                  className: tD.UJ,
                  children: [
                      (0, c.jsx)(tt.A, {
                          size: "md",
                          hasActivePromotion: !!b,
                          subscriptionTier: R?.subscriptionTrial?.skuId ?? _,
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
    return h && C
        ? r && null != d && null != o
            ? (0, c.jsx)(tY, {
                  className: t,
                  buttonVisibilityRef: x,
                  userDiscountOffer: d,
                  discountedPrice: m,
                  premiumSubscription: o,
                  analyticsLocations: p,
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
                          className: y || r ? tD.UJ : void 0,
                          children: [
                              y &&
                                  (0, c.jsx)(tt.A, {
                                      size: "md",
                                      hasActivePromotion: !!b,
                                      subscriptionTier: R?.subscriptionTrial?.skuId ?? _,
                                  }),
                              r &&
                                  null != o &&
                                  (0, c.jsx)(eo.$, {
                                      variant: "expressive",
                                      icon: ed.t,
                                      size: "md",
                                      text: ex.intl.string(ex.t.zrCzVB),
                                      onClick: () => tV(p, o, tr.g.CONFIRM_DISCOUNT),
                                  }),
                              (0, c.jsx)(eA.A, {
                                  variant: y || r ? "secondary" : "expressive",
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
let [tX, tZ] = (0, eD.A)(),
    tq = function (e) {
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
            { fractionalState: h, endsAt: p } = (0, eP.A)(),
            N = (0, e_.Ay)(p, e_.yE.CREDITS_ENDS_IN),
            b = null;
        if (h === tF.xc.NONE || l) b = (0, c.jsx)(eV, { text: m });
        else {
            u = !0;
            let e = ex.intl.format(ex.t["yR+oDD"], {
                helpCenterLink: eM.A.getArticleURL(e1.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            b = (0, c.jsx)(ev.A, {
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
                children: (0, c.jsx)(tK, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: x }),
            }),
        });
    };
var tQ = s(820284),
    tJ = s(742589),
    t$ = s(392943),
    t0 = s(285373),
    t1 = s(603202),
    t2 = s(673992);
let t7 = function () {
    return (0, c.jsx)(tQ.A, {
        section: e1.JJy.NAVIGATION,
        children: (0, c.jsx)(tJ.A, {
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
                                children: (0, c.jsx)(t$.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: t1.MQ,
                        children: [
                            (0, c.jsx)(t0.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var t3 = s(325499),
    t6 = s(562708),
    t5 = s(885574),
    t8 = s(43990),
    t9 = s(993077),
    t4 = s(139286),
    se = s(872725),
    st = s(920050),
    ss = s(51965),
    si = s(375776),
    sn = s(727811),
    sa = s(222652),
    sl = s(553875),
    sr = s(934353);
function sc(e) {
    let { openRewardModal: t } = e,
        s = (0, sa.z)();
    if (s.kind === sa.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: sr.R$,
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
        s.claimStatus === sn.P.CLAIMED
            ? { text: ex.intl.string(sl.default.Plwzgf) }
            : { text: ex.intl.string(ex.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: sr.R$,
                children: [
                    (0, c.jsx)(ss.A, {
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
            s.claimStatus === sn.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: sr.ed,
                    children: [
                        (0, c.jsx)(t5.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ex.intl.string(sl.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function so(e) {
    let { glowing: t = !1 } = e;
    (0, t4.A)({
        type: t6.ImpressionTypes.VIEW,
        name: t6.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: st.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, eR.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(t8.N, {
        theme: e1.NJ8.DARKER,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, sr.kL),
                    children: (0, c.jsx)(se.A, {
                        cardType: t9.s.CUSTOM,
                        cardClassName: sr.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: sr.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sr.j,
                                    children: [
                                        (0, c.jsx)("div", { className: sr._g }),
                                        (0, c.jsx)("div", { className: sr.$h }),
                                        (0, c.jsx)("div", { className: sr.Rv }),
                                        (0, c.jsx)("div", { className: sr.Lw }),
                                        (0, c.jsx)("div", { className: sr.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: sr.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: sr.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(er.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sr.DD,
                                            children: ex.intl.string(sl.default.RGT513),
                                        }),
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sr.h_,
                                            children: ex.intl.string(sl.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sc, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sd = s(744064);
function su(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, sa.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === sa.N.SUBSCRIBE
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
    return (0, c.jsx)(sd.S, {
        id: st.XBOX_PREMIUM_PERK_CARD_ID,
        title: ex.intl.string(sl.default.UVL9tD),
        description: ex.intl.string(sl.default["I+IXr0"]),
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
function sm(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(su, { ...e }) });
}
var sg = s(700556),
    sx = s(821874);
function sf(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = sx.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && sg.Jx, l), children: a }) : null,
        ],
    });
}
var sh = s(789861),
    sp = s(592909),
    sN = s(149995),
    sA = s(398523),
    sj = s(881373),
    sb = s(555393),
    sC = s(852218),
    sE = s(161319),
    sT = s(672787),
    sv = s(310235),
    sR = s(334551);
let sI =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    s_ =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg";
function sP() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sp.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sp.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sj.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = sA.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, sN.Zk)({ location: "useHardwarePartnerPerkCards" }),
        l = (0, sN.S9)({ location: "useHardwarePartnerPerkCards" }),
        r = null === (0, sb.N)(),
        d = (0, t3.b)("useHardwarePartnerPerkCards"),
        { currentDate: u, nDaysInMonth: m } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = d ? void 0 : ex.intl.string(ex.t.y2b7CA),
            g = t
                ? {
                      id: st.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ex.intl.string(sv.default.F0b4Z8),
                      description: ex.intl.formatToPlainString(sv.default["hworR+"], { validDates: (0, sh.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ex.intl.formatToPlainString(sv.default.g7iyvR, { date: (0, sh.mh)() }),
                      caption: (0, c.jsx)("img", { src: s_, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sI,
                      ctaText: ex.intl.string(sv.default.fcopjf),
                      onCtaClick: () => (0, sT.P)({ partnerId: sC.Bt, analyticsLocations: e }),
                      analyticsOptions: { thirdPartyPartner: sC.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = s
                ? {
                      id: st.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: ex.intl.string(sv.default["IcD/7p"]),
                      description: ex.intl.formatToPlainString(sv.default.hausFi, { date: (0, sh.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: ex.intl.string(sv.default.fxF0Jz),
                      caption: (0, c.jsx)("img", { src: s_, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sI,
                      analyticsOptions: { thirdPartyPartner: sC.Bt },
                  }
                : null,
            f = i
                ? {
                      id: st.LOGITECH_3PP_CARD_ID,
                      title: ex.intl.string(sR.default.OlObRa),
                      description: ex.intl.format(sR.default.ZGOJ8R, {
                          discountPercent: sj.aW,
                          termsUrl: eM.A.getArticleURL(e1.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: u.getDate() / m,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sT.P)({ partnerId: sC.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sC.XY },
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
                      id: st.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ex.intl.string(ex.t.m7PucM),
                      description: a
                          ? l
                              ? ex.intl.format(ex.t["1Zw6xL"], {})
                              : ex.intl.format(ex.t.KWdCO0, {})
                          : ex.intl.format(ex.t.zh1X7u, {}),
                      descriptionNote:
                          !l && a
                              ? ex.intl.format(ex.t.vblnHk, {
                                    partnerName: sC.CD[sC.Cs].label,
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
                      onCtaClick: () => (0, sE.u)({ analyticsLocations: e, partnerIds: [sC.KS, sC.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sC.KS },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [d, e, t, s, u, i, m, n, a, l, r]);
}
var sS = s(762493);
let sy = "xgpp";
function sD(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, t3.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: l, steelseriesCard: r } = sP();
    if (!i) return null;
    let o = null != n || null != a || null != l || null != r;
    return (0, c.jsx)(sf, {
        id: sy,
        sectionClassName: u()(sS.uW, sS.Uv, sS.qr),
        heading: (0, c.jsx)(er.D, {
            variant: "nitro-sm",
            className: u()(sx.R_, sg.U6),
            children: ex.intl.string(ex.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: sg.JE, children: (0, c.jsx)(so, { glowing: t === sy }) }),
        grid: o
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(sd.S, { ...n, containerClassName: sx.Nr, glowing: s === n.id }),
                      (0, c.jsx)(sm, { containerClassName: sx.Nr }),
                      null != l && (0, c.jsx)(sd.S, { ...l, containerClassName: sx.Nr, glowing: s === l.id }),
                      null != r && (0, c.jsx)(sd.S, { ...r, containerClassName: sx.Nr, glowing: s === r.id }),
                      null != a && (0, c.jsx)(sd.S, { ...a, containerClassName: sx.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var sM = s(313133),
    sO = s(67423);
let sL = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: u()(sM.iE, { [sM.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sM.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sO, className: sM.oU }),
                (0, c.jsxs)("div", {
                    className: sM.iQ,
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
                        void (0, eR.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("489361"),
                                s.e("227853"),
                                s.e("470126"),
                                s.e("162775"),
                                s.e("128804"),
                                s.e("60882"),
                                s.e("71151"),
                                s.e("286615"),
                                s.e("70866"),
                                s.e("311541"),
                                s.e("472847"),
                                s.e("870088"),
                                s.e("989649"),
                                s.e("853458"),
                                s.e("718368"),
                                s.e("258407"),
                                s.e("153302"),
                                s.e("758053"),
                                s.e("836576"),
                                s.e("983513"),
                                s.e("216806"),
                                s.e("310734"),
                                s.e("348567"),
                                s.e("900277"),
                                s.e("127962"),
                                s.e("364827"),
                                s.e("907167"),
                                s.e("861060"),
                                s.e("952372"),
                                s.e("959880"),
                                s.e("910486"),
                                s.e("56366"),
                                s.e("797595"),
                                s.e("641248"),
                                s.e("544571"),
                                s.e("40291"),
                                s.e("523276"),
                                s.e("948720"),
                                s.e("729963"),
                                s.e("830938"),
                                s.e("392075"),
                                s.e("174016"),
                                s.e("852557"),
                                s.e("790417"),
                                s.e("50097"),
                                s.e("76027"),
                                s.e("594161"),
                                s.e("435432"),
                                s.e("80347"),
                                s.e("680166"),
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
var sk = s(761508),
    sU = s(449543);
function sG(e) {
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
function sw(e) {
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
function sB(e) {
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
var sH = s(345394);
function sF(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sH.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sV(e) {
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
function sz(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/a0a5fdb2c9735632e0cadb26af7aa33929c63981e559ef0337cacced2cab2d09.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sW(e) {
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
function sY(e) {
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
function sK(e) {
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
var sX = s(996682);
function sZ(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: l = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, sX.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function sq(e) {
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
var sQ = s(78701);
function sJ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sQ.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s$ = s(462887),
    s0 = s(736653),
    s1 = s(259065),
    s2 = s(206835),
    s7 = s(591179),
    s3 = s(462463),
    s6 = s(19886),
    s5 = s(425713),
    s8 = s(696292),
    s9 = s(192444),
    s4 = s(617986),
    ie = s(892227),
    it = s(81466),
    is = s(318254),
    ii = s(1889),
    ia = s(749012);
let il = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, Z.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ie.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: ia.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: ia.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ia.Pf,
                            children: [
                                (0, c.jsx)(it.CalendarIcon, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(ii.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(ii.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: ia.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: ia.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ia.Pf,
                            children: [
                                (0, c.jsx)(is.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(ii.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(ii.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ir = s(758836),
    ic = s(190107),
    io = s(799544);
function id(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, s9.lk)(ic.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, Z.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: st.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ex.intl.string(ii.default.hx5AFp),
                          description: ex.intl.format(ii.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(io.lH, io.yK),
                          footerContent: (0, c.jsx)(il, {}),
                          ctaText: ex.intl.string(ii.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(ir.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: st.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ex.intl.string(ex.t.Csf5Ol),
                          description: ex.intl.format(ex.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: () => (0, s4.mA)({ fromContent: s8.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: io.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iu = s(975807),
    im = s(95035),
    ig = s(989790),
    ix = s(88001),
    ih = s(148155),
    ip = s(817577);
function iN() {
    (0, iu.A)(ix.TE);
}
function iA(e) {
    let t = (0, ig.O9)(),
        i = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, eR.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
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
                      id: st.PREMIUM_GROUP_CARD_ID,
                      title: ex.intl.string(ih.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              ex.intl.formatToPlainString(ih.default.JlyGQj, {
                                  totalSeats: ix.aw,
                                  premiumGroupProductName: (0, ix.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: io.LF,
                                  children: (0, c.jsx)(im.A, {
                                      onClick: iN,
                                      children: ex.intl.string(ih.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ex.intl.string(ex.t.oW0eUd),
                      primaryAsset: ip,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: ex.intl.string(ex.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var ij = s(562819),
    ib = s(793943),
    iC = s(241988),
    iE = s(655752);
let iT = (0, w.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iv = s(764231),
    iR = s(627380),
    iI = s(30084),
    i_ = s(814014),
    iP = s(714206);
let iS =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iy =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iD =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iM() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        n = (0, s7.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: a, expiredCallOfDutyCard: l, logitechCard: r, steelseriesCard: d } = sP(),
        m = (0, t3.b)("premium_subscriber_home_rewards"),
        x = (0, s3.A)({ analyticsLocations: i }),
        f = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, s1.L)({ analyticsLocations: i }),
            );
        }, [i]),
        h = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, ij.L)({ analyticsLocations: i }),
            );
        }, [i]),
        p = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        N = (function (e) {
            let { fractionalState: t } = (0, eP.A)(),
                s = t === tF.xc.FP_ONLY,
                i = (0, s6.$F)(),
                n = (0, s6.Xb)(),
                a = i?.status === s6.Wo.UPCOMING || s,
                l = i?.status === s6.Wo.WITHHELD,
                r = a || l,
                c = (0, s5.N)(i?.id),
                d = (function () {
                    let e = (0, s6.$F)(),
                        t = (0, iE.P)(),
                        s = (0, s6.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iT.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === s6.Wo.WITHHELD) return null;
                    let n = ti()(),
                        a = ti()(s),
                        l = i || e.status === s6.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        r = t.tenureReqNumMonths,
                        c = a.clone().add(l, "months"),
                        o = a.clone().add(r, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion) && !r,
                x = (0, iR.t)(),
                f = (0, iE.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != f ? ex.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iv.T)(tF.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === s6.Wo.UPCOMING
                              ? ex.intl.formatToPlainString(ex.t.a1eKDi, { days: x?.days ?? 0 })
                              : i.status === s6.Wo.WITHHELD
                                ? ((0, iv.T)(i.id, i.tenureReqNumMonths) ?? void 0)
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
                                  })(x, a) ??
                                  (0, iv.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let l = null;
                return (
                    null != c ? (l = r || m ? c.standard : c.ambientLarge) : s && (l = iP),
                    {
                        id: st.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ex.intl.string(i.nameUnformattedNitro) : s ? ex.intl.string(ex.t.tx9Fvw) : "",
                        pillText: ex.intl.string(ex.t["jyYgZ+"]),
                        primaryAsset: l,
                        primaryAssetClassName: u()(i_.pq, { [i_.rX]: r, [i_.kE]: m }),
                        caption: null != n ? ex.intl.formatToPlainString(ex.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: ex.intl.string(ex.t.jVcuVY),
                        onCtaClick: () => (0, iI.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, r, m, n, d, s, x, f, e]);
        })(i),
        b =
            ((e = (0, $.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription())),
            (s = (0, ep.q)(t, e === $.Iz.NITRO_HOME_TILE)),
            (0, o.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: st.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: (0, c.jsx)("img", {
                                  src: iC,
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
        { nitroOrbsRewardsCard: C, questOrbMultiplierCard: E } = id("useWhatsNewPerkCards"),
        T = iA(i);
    return (0, o.useMemo)(() => {
        let e = [
                m ? null : a,
                m ? null : r,
                m ? null : d,
                m ? null : l,
                C,
                E,
                T,
                {
                    id: st.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ex.intl.string(ex.t.OLtTrt),
                    description: ex.intl.string(ex.t["di/pXR"]),
                    onCtaClick: n ? x : f,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    primaryAsset: iS,
                },
                {
                    id: st.CLIENT_THEMES_CARD_ID,
                    title: ex.intl.string(ex.t.acc6h6),
                    description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iD,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ib.nf)(ib.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: st.PERMADECOS_CARD_ID,
                    title: ex.intl.string(ex.t.L14NZN),
                    description: ex.intl.string(ex.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    onCtaClick: n ? x : h,
                },
                {
                    id: st.CUSTOM_APP_ICONS_CARD_ID,
                    title: ex.intl.string(ex.t["GU+wqh"]),
                    description: ex.intl.string(ex.t["1uPk1Z"]),
                    primaryAsset: iy,
                    ctaText: ex.intl.string(ex.t.y9TxXV),
                    onCtaClick: p,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return e.splice(+!!t, 0, N), null != b && e.splice(1, 0, b), e.length > s && e.splice(s, e.length - s), e;
    }, [N, b, C, E, T, f, p, h, x, n, a, l, r, d, m]);
}
var iO = s(355097);
let iL = "/assets/1eb1b74667b4c0f0.svg",
    ik = "/assets/983b60e4fcaf973b.svg";
var iU =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iG = [
    { id: "bestof", label: () => ex.intl.string(ex.t.q1u7nQ) },
    { id: "appearance", label: () => ex.intl.string(ex.t.CUnZkZ) },
    { id: "upgrades", label: () => ex.intl.string(ex.t.KC5q8v) },
    { id: "vip", label: () => ex.intl.string(ex.t.DjEAcv) },
];
var iw = s(18290);
function iB(e) {
    e.stopPropagation();
}
function iH(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, s0.DP)(),
                t = (0, s7.X)("useFavoritesPerkCards"),
                s = (0, s6.Lh)(),
                i = (0, s5.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, s2.A)({ scrollPosition: iO._F.TRY_IT_OUT, analyticsLocations: n }),
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
                g = (0, s3.A)({ analyticsLocations: n }),
                x = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, s1.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iM(),
                h = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: p, questOrbMultiplierCard: N } = id("useFavoritesPerkCards"),
                b = iA(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: st.SERVER_BOOSTS_CARD_ID,
                            title: ex.intl.formatToPlainString(ex.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ex.intl.formatToPlainString(ex.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sG, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: st.PROFILES_CARD_ID,
                            title: ex.intl.string(ex.t.xDRab3),
                            description: ex.intl.string(ex.t.yn6fWA),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: t ? g : a,
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: st.HD_VIDEO_CARD_ID,
                            title: ex.intl.string(ex.t["/mQ5gg"]),
                            description: ex.intl.string(ex.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sB, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: st.CLIENT_THEMES_CARD_ID,
                            title: ex.intl.string(ex.t.acc6h6),
                            description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iD,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: st.MORE_EMOJIS_CARD_ID,
                            title: ex.intl.string(ex.t.D8vIDT),
                            description: ex.intl.string(ex.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sF, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: st.LARGE_UPLOADS_CARD_ID,
                            title: ex.intl.string(ex.t.nL1WZV),
                            description: ex.intl.formatToPlainString(ex.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, c.jsx)(sV, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: st.CUSTOM_APP_ICONS_CARD_ID,
                            title: ex.intl.string(ex.t["GU+wqh"]),
                            description: ex.intl.string(ex.t["1uPk1Z"]),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iy,
                            categories: ["appearance"],
                        },
                        {
                            id: st.ENTRANCE_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.WJfCPi),
                            description: ex.intl.string(ex.t.liQKJR),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: st.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ex.intl.string(ex.t.OLtTrt),
                            description: ex.intl.string(ex.t["di/pXR"]),
                            onCtaClick: t ? g : x,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            primaryAsset: iS,
                            categories: ["appearance"],
                        },
                        {
                            id: st.CUSTOM_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t["Cu/oFd"]),
                            description: ex.intl.string(ex.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sz, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: st.SPECIAL_STICKERS_CARD_ID,
                            title: ex.intl.string(ex.t.MQoVeb),
                            description: ex.intl.string(ex.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: io.Uc,
                                children: (0, c.jsx)(sW, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: st.SUPER_REACTIONS_CARD_ID,
                            title: ex.intl.string(ex.t.qERvAA),
                            description: ex.intl.string(ex.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sY, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: st.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.ssVDYQ),
                            description: ex.intl.string(ex.t.aUSRMa),
                            primaryAsset: (0, s$.M)(e) ? iL : ik,
                            categories: ["upgrades"],
                        },
                        {
                            id: st.EARLY_ACCESS_CARD_ID,
                            title: ex.intl.string(ex.t["g/KRY6"]),
                            description: ex.intl.string(ex.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sK, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: st.BADGE_CARD_ID,
                            title: ex.intl.string(ex.t.Bn3CtB),
                            description: ex.intl.string(ex.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sZ, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: st.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ex.intl.string(ex.t["MTD+7w"]),
                            description: ex.intl.string(ex.t.Bhs0s6),
                            ctaText: ex.intl.string(ex.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sq, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != p ? { ...p, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: st.PERMADECOS_CARD_ID,
                            title: ex.intl.string(ex.t.L14NZN),
                            description: ex.intl.string(ex.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, p, N, b, a, l, r, d, u, m, x, g, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !h.includes(e.id)), [C, h]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iU.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: iw.uW,
        children: [
            (0, c.jsx)(er.D, { variant: "nitro-sm", children: ex.intl.string(ex.t["Uh3+CA"]) }),
            (0, c.jsx)(sk.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iw.Lq,
                "aria-label": ex.intl.string(ex.t["Uh3+CA"]),
                children: iG.map((e) =>
                    (0, c.jsx)(sk.V.Item, { id: e.id, className: iw.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sU.A,
                {
                    gap: 20,
                    className: iw.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sd.S,
                                { ...e, glowing: t === e.id, containerClassName: iw.Ui, onFocus: iB },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var iF = s(72979);
let iV = function (e) {
    let { className: t } = e,
        s = (0, s0.DP)();
    return (0, c.jsx)("img", {
        className: u()(iF.D, t),
        src: (0, s$.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iz = s(684251);
let iW = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, c.jsxs)("div", {
              className: u()(iz.kL, iz.Gd, iz.Eg),
              children: [(0, c.jsx)(iV, {}), (0, c.jsx)(t7, {}), n],
          })
        : (0, c.jsx)(eN.h, { color: "nitro-pink", className: u()(iz.kL, iz.Gd), offsetBottom: i, children: n });
};
function iY(e) {
    let { glowingPerkId: t = null } = e,
        s = iM();
    return (0, c.jsx)(sf, {
        sectionClassName: sx.uW,
        heading: (0, c.jsx)(er.D, { variant: "nitro-sm", className: sx.R_, children: ex.intl.string(ex.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, c.jsx)(
                    sd.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: u()(sx.Nr, { [sx.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function iK(e, t, s, i) {
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
var iX = s(92737);
let iZ = "/assets/cd2be35d285d4675.svg",
    iq = (e) => {
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
                R(!0);
            }, []),
            (0, et.j)(),
            (0, _.P)(I);
        let l = o.useRef(null),
            r = o.useRef(null),
            d = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: h, programReward: p } = (0, Z.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: N,
                glowingSectionId: b,
                glowingPerkId: C,
                scrollBlock: E,
                scrollInline: T,
            } = o.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(iX.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        iK(N ?? "", null != N, E, T);
        let [v, R] = o.useState(!1),
            P = (0, ee.p)(),
            S = o.useRef(null),
            [y, D] = o.useState(!1),
            M = null != P && null != d && d.status === e1.Dmq.CANCELED,
            k = (0, es.iU)(tF.gD.PREMIUM_MONTH_TIER_2, P, d),
            G = !y && M,
            w = null != (0, g.bG)([q.A], () => (null != t ? q.A.getUserProfile(t) : null)) && (h || null != p),
            B = (0, $.TF)({ location: "PremiumSubscriberHome" }),
            F = (0, ep.q)(d, B === $.Iz.STICKY_BAR),
            [ei, en] = (0, K.iP)(
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
            ? (0, c.jsxs)(Y.Gt, {
                  className: u()(iz.xW, iz.Gd),
                  ref: l,
                  children: [
                      (0, c.jsx)(iW, {
                          shouldRenderNitroHomeHeaderExperiment: el,
                          shouldRenderNitroHomeFollowup: er,
                          gradientOffsetBottom: s && !n ? 0.55 : 0.8,
                          children: (0, c.jsxs)(j.f5, {
                              value: ec,
                              children: [
                                  (0, c.jsx)(W.L, {
                                      innerRef: S,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tq, {
                                          buttonVisibilityRef: S,
                                          className: iz.v1,
                                          userDiscountOffer: P,
                                          discountedPrice: k,
                                      }),
                                  }),
                                  (0, c.jsx)(iY, { glowingPerkId: C }),
                                  (0, c.jsx)(sD, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(iH, { glowingPerkId: C }),
                                  (0, c.jsx)(eb, {
                                      className: iz.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e1.liQ.NITRO_HOME, section: e1.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: iz.hz }),
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
                                      children: (0, c.jsx)("div", { ref: r, className: iz._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: iZ,
                                      className: iz.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ex.intl.string(ex.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      M &&
                          null != k &&
                          (0, c.jsx)(sL, {
                              isVisible: G && v,
                              premiumSubscription: d,
                              churnDiscountOffer: P,
                              discountedPrice: k,
                          }),
                      null != ei &&
                          null != F &&
                          null != d &&
                          (0, c.jsx)(eh, { premiumSubscription: d, content: F, markAsDismissed: en }),
                  ],
              })
            : el || er
              ? (0, c.jsxs)("div", {
                    className: u()(iz.kL, iz.Lq, iz.TN, iz.Eg),
                    children: [
                        (0, c.jsx)(t7, {}),
                        (0, c.jsx)("div", { className: iz.S, children: (0, c.jsx)(x.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(iz.kL, iz.Lq), children: (0, c.jsx)(x.y, {}) });
    };
var iQ = s(286320),
    iJ = s(727949),
    i$ = s(440005),
    i0 = s(26508);
let i1 = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var i2 = s(860839);
let i7 =
    "https://cdn.discordapp.com/assets/content/dfb187cfa9d267774f50c4f67cb7628658cefc11db41c6a04c08fc5aadc9dbcc.png";
function i3(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: i7,
        srcSet: `${i7} 1x, https://cdn.discordapp.com/assets/content/adb910c257d7510b97da4dccb2a4cea5f3a3fc6eb225dbfbbef0dd9d2a1971bf.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var i6 = s(37537),
    i5 = s(783420),
    i8 = s(204413),
    i9 = s(245383),
    i4 = s(824069),
    ne = s(785007),
    nt = s(508770),
    ns = s(947910);
function ni(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: ns.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: ns.fQ,
                                children: (0, c.jsx)(nt.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: ns.qU,
                            children: [
                                (0, c.jsxs)(el.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: ns.NI,
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
                                    className: ns.br,
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
                                                className: ns.yD,
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
                radioBarClassName: u()(ns.tG, { [ns.uA]: s, [ns.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(ne.$d, {
        ...i,
        options: n,
        value: t,
        size: ne.r9.NOT_SET,
        className: ns.ul,
        withTransparentBackground: !0,
    });
}
var nn = s(773669),
    na = s(97352),
    nl = s(252424),
    nr = s(526292),
    nc = s(186223),
    no = s(369827),
    nd = s(803496);
function nu(e) {
    let t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        s = (0, no.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nd.A)({
            activeSubscription: t,
            skuIDs: [(0, eO.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nm(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function ng(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tF.Ff.YEAR
          ? ex.intl.format(ex.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : ex.intl.format(ex.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nx = s(614488);
function nf(e) {
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
        n = (0, s$.q)((0, s0.Ay)()),
        a = (0, i6.c)("PlanSelectCard"),
        l = (0, eG.V)(),
        r = l?.subscriptionTrial,
        d = r?.skuId === t,
        m = i && d && null != r,
        x = (0, eU.p)(),
        {
            planRadioOptions: f,
            selectedPlanId: h,
            setSelectedPlanId: p,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tF.En[t],
                a = tF.zE[t],
                l = t === tF.pe.TIER_2,
                r = nu(t),
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
                h = (0, nr.k5)(),
                p = (0, g.bG)([nn.default], () => nn.default.locale),
                N = (0, es.U9)(f, t),
                A = (0, es.N1)(n),
                j = (0, es.N1)(a),
                [b, C] = (0, g.yK)([na.A], () => [na.A.get(n), na.A.get(a)], [n, a]),
                E = null != b ? (0, eO.sS)(b, r) : null,
                T = null != C ? (0, eO.sS)(C, r) : null,
                v =
                    N && f?.discount.amount != null && !h
                        ? ex.intl.formatToPlainString(ex.t.IAybsG, {
                              discount: (0, nl.l9)(p, Number(f.discount.amount) / 100),
                          })
                        : null,
                R = f?.discount?.planIds,
                I = nm(a, N, R, j, T),
                _ = nm(n, N, R, A, E),
                P = f?.discount.userUsageLimitInterval,
                S = f?.discount.userUsageLimit ?? tF.OJ,
                y = !l || I || _ || null == C ? null : (0, nc.Cj)(C, !1, r),
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
                                ? ng({
                                      expectedUsageInterval: tF.Ff.YEAR,
                                      usageInterval: P,
                                      discountDuration: S,
                                      regularPrice: T,
                                      discountedPrice: j,
                                  })
                                : null) ?? y,
                        secondaryText: I ? j : T,
                        secondarySubText: I ? T : null,
                        badgeText: I ? v : null,
                        useGradientSelectedBorder: l && (d || I || D),
                        isDisabled: x,
                    },
                    {
                        value: n,
                        primaryText: ex.intl.string(ex.t.DKzs96),
                        primarySubText: _
                            ? ng({
                                  expectedUsageInterval: tF.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: S,
                                  regularPrice: E,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : E,
                        secondarySubText: _ ? E : null,
                        badgeText: _ ? v : null,
                        useGradientSelectedBorder: l && (d || _),
                        isDisabled: x || m,
                    },
                ],
                U = L === a ? I : L === n && _;
            return { planRadioOptions: k, selectedPlanId: L, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = i && null == x ? "expressive" : "secondary",
        { buttonText: j } = (0, i9.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, i8.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, c.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nx.Ux,
            children: [
                (0, c.jsx)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nx.MY,
                    children: (0, c.jsx)(er.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nx.ck : nx.JJ,
                        children: i ? ex.intl.string(ex.t.lG6a5x) : ex.intl.string(ex.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(el.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nx.qT,
                    children: i
                        ? (0, c.jsx)(i2.ZP, {
                              featureSet: i2.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(i2.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(i4.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nx.qS,
                          role: "separator",
                          children: (0, c.jsx)(ec.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nx.ZV,
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
                              })(r.interval, r.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nx.yF }),
                (0, c.jsxs)("div", {
                    className: nx.qr,
                    children: [
                        (0, c.jsx)(ni, { planRadioOptions: f, value: h ?? "", onChange: (e) => p(e.value) }),
                        (0, c.jsx)(nf, { skuId: t, selectedPlanId: h, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = u()(nx.Nr, s, { [nx.Fw]: i });
    return i
        ? (0, c.jsxs)(eN.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, c.jsx)("div", {
                      className: nx.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(i3, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, c.jsx)("div", { className: E, children: C });
}
function np(e) {
    let { className: t } = e,
        s = (0, s$.q)((0, s0.Ay)()),
        i = (0, i6.c)("PlanSelectPremiumGroupCard"),
        n = (0, eU.p)(),
        a = null != n,
        l = nu(tF.pe.TIER_2),
        r = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eq.A)({ userId: r?.id, size: eY._3.SIZE_32, animateOnHover: !0 }),
        m = (0, g.bG)([na.A], () => na.A.get(tF.gD.PREMIUM_GROUP_MONTH)),
        f = (0, es.N1)(tF.gD.PREMIUM_GROUP_MONTH),
        h = a
            ? ex.intl.format(ih.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, ix.DP)(),
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
                    text: h,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        N = null;
    if (a && null != f) N = f;
    else if (null != m)
        try {
            N = (0, eO.sS)(m, l, !1, !1, !1);
        } catch {
            N = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nx.Nr, t),
        children: (0, c.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nx.Ux,
            children: [
                (0, c.jsxs)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nx.MY,
                    children: [
                        (0, c.jsx)(er.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nx.ck : nx.JJ,
                            children: ex.intl.string(ih.default.eSKiXk),
                        }),
                        null != r &&
                            (0, c.jsxs)(el.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nx.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nx.uA,
                                        children: (0, c.jsx)(eK.eu, {
                                            src: o,
                                            size: eY._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, c.jsx)(el.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nx.VL,
                                        children: (0, c.jsxs)(ec.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", ix.LM],
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
                    className: nx.qT,
                    children: (0, c.jsx)(i2.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nx.yF }),
                (0, c.jsxs)("div", {
                    className: nx.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nx.ec,
                            children: [
                                (0, c.jsx)(ec.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: ex.intl.string(ih.default.SvSwga),
                                }),
                                null == N
                                    ? (0, c.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(ec.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: s ? "text-strong" : "text-overlay-light",
                                          children: N,
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
function nN(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, i2.pw)(t),
        a = (0, ig.PA)(),
        l = (0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        r = { [nx.iR]: !l };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(el.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nx.oB, s),
            children: [
                (0, c.jsx)(er.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nx.op,
                    children: ex.intl.string(ex.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nx.kR, { [nx.BQ]: a }),
                    children: [
                        (0, c.jsx)(nh, { skuId: tF.pe.TIER_0, className: u()(nx.rz, r) }),
                        (0, c.jsx)(nh, { skuId: tF.pe.TIER_2, className: u()(nx.Rv, r) }),
                        a && (0, c.jsx)(np, { className: u()(nx.zz, r) }),
                    ],
                }),
            ],
        }),
    });
}
var nA = s(226830),
    nj = s(366010),
    nb = s(303136);
let nC = function (e) {
    let t,
        { className: s } = e,
        i = (0, tN.TM)(),
        n = (0, nj.q)((0, s0.Ay)());
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
                nb.A,
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
var nE =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nT = s(352756);
let nv = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e1.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(ei.animated.div, {
        className: nT.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nT.U,
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
var nR = s(573710);
let nI = function () {
    let e = (0, tp.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
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
var n_ = s(989756);
let nP = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: n_.kL,
            children: (0, c.jsxs)("div", {
                className: n_.hQ,
                children: [
                    (0, c.jsx)(nI, {}),
                    (0, c.jsx)(er.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: n_.RH,
                        children: ex.intl.string(ex.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nP.displayName = "PremiumMarketingFooter";
var nS = s(939249);
let ny = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nE.HOME]: ex.intl.string(ex.t.uGRXjS),
            [nE.WHATS_NEW]: ex.intl.string(ex.t["mfcR/v"]),
            [nE.BEST_OF_NITRO]: ex.intl.string(ex.t.xQKkE8),
            [nE.PLANS]: ex.intl.string(ex.t.wyNMnm),
            [nE.COMPARE]: ex.intl.string(ex.t.pwD7If),
        },
        n = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tJ.A, {
        className: t1.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
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
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nS.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: t1.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(ec.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: t1.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: t1.MQ,
                    children: [
                        null != n && (0, c.jsx)(t0.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nD = s(704333),
    nM = s(414499),
    nO = s(597770),
    nL = s(500060),
    nk = s(866665),
    nU = s(406860),
    nG = s(870975),
    nw = s(698834);
function nB() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nU.A)({ boxType: si.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nD.B, text: ex.intl.string(sl.default.MUypiB) },
            { icon: nM.h, text: ex.intl.string(sl.default.ec5Rdd) },
            { icon: nO.GiftIcon, text: ex.intl.string(sl.default["9t2CzW"]), tooltip: sl.default.AyECej },
            { icon: nL.o, text: ex.intl.string(sl.default.R7YJAY) },
        ];
    return (0, c.jsx)(W.L, {
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
                                            (0, c.jsx)(er.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nw.R_,
                                                children: ex.intl.string(sl.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nw.yf,
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
                                                                            className: nw.Jn,
                                                                            children: (0, c.jsx)(nk.m, {
                                                                                text: ex.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
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
                                                            s,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: nw.xF,
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
                                        className: nw.WE,
                                        children: (0, c.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ex.intl.format(sl.default.KDKdWi, { termsLink: (0, nG.xA)() }),
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
var nH = s(750338),
    nF = s(387640),
    nV = s(505051);
function nz(e) {
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
        className: u()(nV.boxBackdrop, t),
        children: [
            (0, c.jsx)(er.D, {
                className: nV.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: nV.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nV.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nF.A0.SMALL;
                            break;
                        case 2:
                            s = nF.A0.MEDIUM;
                            break;
                        default:
                            s = nF.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                nH.A,
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
let nW = o.memo(function (e) {
        let t = (0, t3.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, nF.Ay)(t);
        return (0, c.jsx)(nz, {
            boxLayout: s,
            title: ex.intl.string(ex.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(nB, {}) : null,
            ...e,
        });
    }),
    nY = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nF.Ay)();
        return (0, c.jsx)(nz, { boxLayout: t, title: ex.intl.string(ex.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nK = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nX = s(236834),
    nZ = s(540504);
function nq(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eq.A)({ userId: t?.id, size: eY._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nZ.$6,
        children: (0, c.jsxs)("div", {
            className: nZ.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nZ.kR,
                    children: (0, c.jsx)(eK.eu, { src: s, "aria-label": t.username, size: eY._3.SIZE_32, ...i }),
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
var nQ = s(579245),
    nJ = s(369805);
let n$ = function () {
    let e = (0, nJ.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eV, { text: e });
};
function n0() {
    let e = (0, g.bG)([na.A], () => na.A.getForSkuAndInterval((0, eO.mH)(tF.pe.TIER_0), tF.WT.MONTH));
    return null != e ? (0, eO.sS)(e) : "\u2026";
}
var n1 = s(508556);
let n2 = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tp.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        i = (0, tN.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: n1.YU,
        children: [
            (0, c.jsx)(tI, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: n1.wG,
                assetClassName: n1.lu,
            }),
            (0, c.jsx)(tT, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: n1.nJ,
                carContainerClassName: n1.IN,
                hammerContainerClassName: n1.Gj,
                keyContainerClassName: n1.FV,
                starContainerClassName: n1.E1,
                boltAssetClassName: n1.j7,
                carAssetClassName: n1.or,
                hammerAssetClassName: n1.Wv,
                keyAssetClassName: n1.rs,
                starAssetClassName: n1.OY,
            }),
        ],
    });
};
var n7 = s(14057);
let n3 = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = n0(),
            r = nK.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, nX.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: x } = eH(
                !(0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
            ),
            f = (0, iQ.b)(),
            h = !d && f.length > 0,
            p = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
            N = null != p && "marketingPageBanner" === p.properties.properties.oneofKind,
            b = (0, nr.ar)() && !N,
            C = (0, eU.O)(),
            E = (null != C && tF.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(n7.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: n7.hQ,
                        children: [
                            (0, c.jsx)(n2, { containerVisibilityPercentage: x }),
                            b && (0, c.jsx)(n$, {}),
                            (0, c.jsx)("div", {
                                className: n7.s8,
                                children: (0, c.jsx)(tm.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(er.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: n7.wx,
                                        children: ex.intl.string(ex.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: n7.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: n7.eZ,
                                            children: (0, c.jsx)(nq, { referrer: o }),
                                        }),
                                    h &&
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
                                        className: b ? n7.es : n7.UJ,
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
                                        className: n7.iQ,
                                        children: (0, c.jsx)(ec.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: r
                                                ? ex.intl.string(ex.t.jHqrJW)
                                                : ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: l }),
                                        }),
                                    }),
                                    null != p &&
                                        "marketingPageBanner" === p.properties.properties.oneofKind &&
                                        (0, c.jsx)(ez.x, {
                                            componentId: p.id,
                                            promotionId: p.promotionId,
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
var n6 = s(820081),
    n5 = s(140735),
    n8 = s(401432),
    n9 = s(580630),
    n4 = s(795269),
    ae = s(84483),
    at = s(701974),
    as = s(55647),
    ai = s(202600);
function an(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n6.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n5.A, { children: ex.intl.string(ex.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n8.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n5.A, { children: ex.intl.string(ex.t.l4qZrp) }),
              ],
          });
}
function aa(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(as.nM, as.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: as.nx,
                children: (0, c.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: as.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(an, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: as.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(an, { includes: !!i.includes }),
            }),
        ],
    });
}
function al(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(as.nM, as.Gf),
                children: (0, c.jsxs)("td", {
                    className: as.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(er.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(ec.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(aa, { ...e }, e.id)),
        ],
    });
}
function ar(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tF.PremiumTypes.TIER_0 ? ex.intl.string(ex.t.tUbSDK) : ex.intl.string(ex.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: as.nn,
        children: [
            (0, c.jsxs)("div", {
                className: as.KS,
                children: [
                    (0, c.jsx)(ed.t, { colorClass: as.oG }),
                    (0, c.jsx)(er.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(er.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function ac(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, n9.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: as.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: as.Cr,
                    children: (0, c.jsx)(er.D, { variant: "heading-xl/bold", children: ex.intl.string(ex.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: as.Hn,
                    children: (0, c.jsx)(ar, {
                        premiumType: tF.PremiumTypes.TIER_0,
                        priceString: (0, n9.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: as.Hn,
                    children: (0, c.jsx)(ar, { premiumType: tF.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let ao = function (e) {
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
            h = (0, eO.JM)(tF.gD.PREMIUM_MONTH_TIER_0),
            p = (0, eO.JM)(tF.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, t3.b)("premium_marketing_comparison"),
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
                            label: ex.intl.string(at.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, s9.lk)(ic.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = sA.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sj.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, ae.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ex.intl.string(ex.t.NG1e6l),
                            subtitle: ex.intl.format(sl.default.uJcbMv, {
                                termsLink: eM.A.getArticleURL(e1.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ex.intl.string(sl.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: ex.intl.string(sl.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: ex.intl.string(sR.default["gc2sa/"]),
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
                                label: ex.intl.string(ii.default["20tmSN"]),
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
                                        percentageOff: (0, n9.l9)(nn.default.locale, tF.oX / 100),
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
            t = (0, c.jsx)(n4.R, { className: u()(as.Io, as.SP), text: e });
        }
        let b = r === tF.pe.TIER_0 || n === tF.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(as.zr, s),
                children: [
                    (0, c.jsx)(er.D, {
                        className: as.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: ex.intl.string(ex.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: as.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(as.fO, { [as.Vd]: b, [as.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: as.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: as.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: ai, alt: "", className: as.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: as.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: as.tp,
                                children: [
                                    (0, c.jsx)(ac, {
                                        tier0Price: h,
                                        tier2Price: p,
                                        shouldUseDiscountPrice: g,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(al, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    ad = function (e) {
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
var au = s(818348),
    am = s(773188);
function ag(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nN, { innerRef: t }) : (0, c.jsx)(nA.jP, { innerRef: t });
}
let ax = () => {
    let e = (0, m.zy)();
    (0, _.P)(I);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, g.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        [d, x] = o.useState(!1),
        [f, h] = o.useState(!1),
        [p, N] = o.useState(!1),
        [b, C] = o.useState(!1),
        E = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        T = null != E ? (0, eO.EL)(E) : null,
        v = null != T ? eO.Ay.getSkuIdForPlan(T.planId) : null,
        R = null !== v && v !== tF.pe.TIER_2 ? tF.pe.TIER_2 : null,
        P = (0, eL.cg)(),
        { analyticsLocations: S } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        C(!0);
    }, []);
    let y = (0, sp.A0)({ location: "PremiumMarketingHome" }),
        D = (0, i0.DK)(i$.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: M } = (0, s9.lk)(ic.rE.NITRO_HOME_MARKETING),
        k = D && M ? nF.NI.COMBINED_ORBS : M ? nF.NI.ORB_MULTIPLIER : D ? nF.NI.ORB_REWARDS : null,
        U = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? k
                : t === nF.NI.THREE_P_PROMOTIONS
                  ? y
                      ? nF.NI.CALL_OF_DUTY
                      : nF.NI.THREE_P_PROMOTIONS
                  : null;
        }, [y, e.search, k]);
    iK(U ?? "", null != U);
    let { navBarSections: G, activeSectionId: w } = ad([nE.HOME, nE.WHATS_NEW, nE.BEST_OF_NITRO, nE.PLANS, nE.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: z } = G,
        K = (function (e) {
            let { location: t } = e;
            return i1.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, c.jsxs)("div", {
            ref: s,
            className: u()(am.kL, am.Gd, am.iI, { [am.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nC, { className: am.yH }),
                (0, c.jsx)(ny, { navBarSections: G, activeSectionId: w }),
                (0, c.jsxs)("div", {
                    className: am.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: am.qY,
                            ref: B.ref,
                            children: (0, c.jsx)(W.L, {
                                innerRef: n,
                                onChange: (e) => x(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n3, {
                                    ref: n,
                                    subscriptionTier: R,
                                    isEligibleForBogoPromotion: P,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: am.So,
                            ref: H.ref,
                            children: (0, c.jsx)(nW, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: am.KQ,
                            ref: F.ref,
                            children: (0, c.jsx)(nY, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: am.s5,
                            ref: V.ref,
                            children: (0, c.jsx)(
                                W.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => h(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(ag, { innerRef: i, isPlanSelectUiRedesignEnabled: K }),
                                },
                                K ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: am.aC, ref: z.ref, children: (0, c.jsx)(ao, {}) }),
                    ],
                }),
                (0, c.jsx)(W.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !p &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: S }),
                            N(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: am._Z }),
                }),
                (0, c.jsx)(nP, { ref: l }),
                (0, c.jsx)(nv, { isVisible: !d && !f && b, subscriptionTier: R, isEligibleForBogoPromotion: P }),
                (0, c.jsx)(nC, { className: am.MF }),
            ],
        });
    return (0, c.jsx)(t8.N, {
        theme: au.NJ.DARKER,
        children: (e) => (0, c.jsx)(Y.Gt, { className: u()(am.XG, e), ref: t, children: X }),
    });
};
var af = s(862482),
    ah = s(412260),
    ap = s(662367),
    aN = s(374403),
    aA = s(396375),
    aj = s(815846),
    ab = s(695366),
    aC = s(370049);
let aE = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nr.ar)();
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
    let d = (null != r ? eO.Ay.getSkuIdForPlan(r.planId) : null) === tF.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(t9.Z, {
            className: u()(aC.kL, n, { [aC.He]: l }),
            type: t9.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(ab.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aC.Kk, { [aC.Pt]: l }),
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
var aT = s(978836);
let av = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aT.zr, { [aT.N]: t }),
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
                        (0, c.jsx)("stop", { className: aT.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aT.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aT.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aT.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aT.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aR = s(900797),
    aI = s(847374),
    a_ = s(812993),
    aP = s(614268);
function aS(e) {
    let { className: t } = e;
    return (0, c.jsx)(a_.Lp, { className: u()(aP.T, t), text: ex.intl.string(ex.t.EYxi0o) });
}
var ay = s(904788),
    aD = s(507553),
    aM = s(255438);
let aO = "/assets/5b4fec8511c3676a.svg",
    aL = "/assets/0838bda6ecd20d91.svg";
function ak(e, t, s) {
    return (0, s$.M)(e) ? t : s;
}
var aU = s(872461);
function aG(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nS.D, {
        onClick: s,
        className: aU.customButton,
        children: [
            t ? ex.intl.string(ex.t.maZaN3) : ex.intl.string(ex.t["37C26f"]),
            t
                ? (0, c.jsx)(aR.t, { size: "md", color: "currentColor", className: aU.arrow })
                : (0, c.jsx)(aI.a, { size: "md", color: "currentColor", className: aU.arrow }),
        ],
    });
}
function aw(e) {
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
            className: u()(aU.perkCard, i),
            children: [
                r
                    ? (0, c.jsx)(ay.A, {
                          className: aU.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aS, { className: aU.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aU.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(er.D, {
                            variant: "heading-lg/extrabold",
                            className: aU.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: aU.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aB = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, s0.Ay)(),
                n = (0, s7.X)("usePerkCards"),
                a = (0, tp.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eO.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, aM.Xq)(tF.f3 / 1024, { useKibibytes: !0 });
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
                    imageSource: ak(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                aD.A.setState({ scrollPosition: iO._F.TRY_IT_OUT }),
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
                    imageSource: ak(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: ak(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: ak(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ex.intl.string(ex.t["lGcW+c"]),
                    description: ex.intl.string(ex.t["/fDyO+"]),
                    imageSource: ak(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ex.intl.string(ex.t["1c+xwT"]),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: ak(i, aL, aO),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: ak(i, aL, aO),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: ak(i, aL, aO),
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
                    imageSource: ak(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: ak(i, iL, ik),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aU }),
        r = (0, tp.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
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
        className: u()(aU.perksContainer, t, {
            [aU.partiallyHidden]: i && !n,
            [aU.subscriberNitroHome]: i,
            [aU.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(er.D, {
                variant: "heading-xxl/extrabold",
                className: aU.perksTitle,
                children: i ? ex.intl.string(ex.t.QX14gI) : ex.intl.string(ex.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aU.perkCardContainer, { [aU.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aw, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aU.sizeGizmo]: !n, [aU.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aG, {
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
                        (0, c.jsx)("div", { className: u()(aU.cover, { [aU.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aH = s(194509),
    aF = s(317587);
let aV = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: e1.JJy.MARKETING_FLOATING_CTA },
        r = (0, s0.Ay)(),
        o = (0, nj.M)(r);
    return (0, c.jsx)(ei.animated.div, {
        className: u()(aF.iE, { [aF.H8]: i, [aF.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aF.zW : aF.iJ,
            children: [
                (0, c.jsx)(aA.A, {
                    color: o ? af.XD.BRAND_INVERTED : void 0,
                    className: u()(aF.x6, { [aF.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aF.PJ,
                }),
                (0, c.jsx)(aH.A, { className: aF.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var az = s(386564);
function aW(e) {
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
            ? (0, c.jsx)(aA.A, {
                  color: l ? af.XD.BRAND_INVERTED : void 0,
                  className: u()(az.x6, az.Ph, n, { [az.Sq]: t && a, [az.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : az.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aA.A, {
                  color: l || !a ? af.XD.BRAND_INVERTED : void 0,
                  className: u()(az.x6, az.Ph, n, { [az.Sq]: t && a, [az.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aH.A, { className: u()(az.x6, n), color: a ? void 0 : af.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(az.UD, i), children: [o, " ", d] });
}
function aY() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(ay.p, { className: az.zd }),
            (0, c.jsx)(ay.p, { className: az.G }),
            (0, c.jsx)(ay.p, { className: az.zy }),
            (0, c.jsx)(ay.p, { className: az.GX }),
        ],
    });
}
function aK(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = n0();
    return (0, c.jsx)(ec.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(az.h_, { [az.If]: s, [az.jn]: i }),
        children: ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aX = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ek.QQ)(),
        o = (0, nr.ar)(),
        d = (0, eL.cg)(),
        m = (0, iQ.b)().length > 0,
        g = ex.intl.string(ex.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(az.kL, s, { [az.V1]: !o, [az.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? az.I6 : az.G1,
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
                                  className: az.DF,
                                  children: (0, c.jsx)(nQ.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aK, {}),
                        d || r
                            ? (0, c.jsx)("div", {
                                  className: az.UD,
                                  children: (0, c.jsx)(aH.A, { className: u()(az.x6, i), color: af.XD.WHITE }),
                              })
                            : (0, c.jsx)(aW, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(aK, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aY, {}),
            ],
        }),
    });
});
var aZ = s(22118),
    aq = s(145359),
    aQ = s(377770);
function aJ(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(av, { lifted: t }) : null;
}
let a$ = () => {
        (0, _.P)(I);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, s0.Ay)(),
            n = (0, s$.M)(i),
            [a, l] = o.useState(!1),
            [r, d] = o.useState(!1),
            [m, x] = o.useState(!1),
            [f, h] = o.useState(!1),
            p = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            N = null != p ? (0, eO.EL)(p) : null,
            b = null != N ? eO.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== b && b !== tF.pe.TIER_2 ? tF.pe.TIER_2 : null,
            E = (0, eG.V)(),
            T = E?.subscriptionTrial?.skuId,
            v = (0, nr.ar)(),
            R = (0, eL.cg)(),
            P = R ?? !1,
            S = (0, g.bG)([ah.A], () => {
                let e = ah.A.getMarketingComponentByType(eC.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            y = (0, aN.Q)(),
            { analyticsLocations: D } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            h(!0);
        }, []);
        let M = (0, c.jsx)("div", {
            className: aQ.dY,
            children: (0, c.jsx)(W.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(i2.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aA.A, {
                        showIcon: !1,
                        subscriptionTier: tF.pe.TIER_0,
                        className: aq.Ph,
                        look: af.pR.OUTLINED,
                        color: af.XD.WHITE,
                        buttonShineClassName: aq.Qr,
                    }),
                    tier2CTAButton:
                        T === tF.pe.TIER_0
                            ? (0, c.jsx)(aA.A, {
                                  showIcon: !1,
                                  subscriptionTier: tF.pe.TIER_2,
                                  className: aq.Ph,
                                  look: af.pR.OUTLINED,
                                  color: af.XD.WHITE,
                                  buttonShineClassName: aq.Qr,
                              })
                            : (0, c.jsx)(aA.A, {
                                  color: af.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tF.pe.TIER_2,
                                  className: aq.Ph,
                                  hasActivePromotion: P,
                                  textOptions: { textClassName: aq.Ac },
                                  buttonShineClassName: aq.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: aQ.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aE, { premiumSubscription: p, className: u()(aQ.R3, { [aQ.aZ]: v }) }),
                v &&
                    (0, c.jsxs)("div", {
                        className: aQ.n1,
                        children: [
                            (0, c.jsx)(aJ, { inOfferExperience: v }),
                            (0, c.jsx)(t0.l, {
                                className: aQ.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aQ.V1]: !v }),
                    children: [
                        null != S && (0, c.jsx)(aj.c, { className: aQ.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: aQ.iS,
                            children: [
                                !v &&
                                    (0, c.jsx)(t0.l, {
                                        className: aQ.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(W.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(aX, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [aQ.p7]: v, [aQ.Pw]: v, [aQ.AG]: R, [aQ.Cv]: null != p }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != y && (0, c.jsx)("div", { className: aQ.Ol, children: (0, c.jsx)(ap.I, { component: y }) }),
                M,
                (0, c.jsx)(aB, { className: aQ.B_ }),
                (0, c.jsx)("div", { className: aQ.aC, children: (0, c.jsx)(aZ.A, { className: aQ.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: aQ.hz }),
                (0, c.jsx)(aV, {
                    isVisible: !a && !r && f,
                    subscriptionTier: C,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: R,
                }),
                (0, c.jsx)(W.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            x(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: aQ._Z }),
                }),
                (0, c.jsx)("img", {
                    src: iZ,
                    className: aQ.Kw,
                    width: 112,
                    height: 85,
                    alt: ex.intl.string(ex.t.X4IxWL),
                }),
            ],
        });
    },
    a0 = function (e) {
        let { entrypoint: t } = e,
            s = (0, eG.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, iJ.NF)({ trialOffer: s }),
            a = (0, iJ.Tp)(),
            l = (0, g.bG)([eJ.A], () => eJ.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                !0 === n && (0, iJ.QG)(), !0 === a && (0, iJ.ne)(l), (null != s || null != i) && (0, G.u1)(s, i);
            }, [s, i, n, a, l]),
            t)
        ) {
            case tF.tU.UserSettings:
                return (0, c.jsx)(a$, {});
            case tF.tU.ApplicationStoreHome:
                return (0, c.jsx)(ax, {});
            default:
                return null;
        }
    };
var a1 = s(531296);
let a2 = function (e) {
    let { entrypoint: t = tF.tU.UserSettings } = e;
    (0, _.P)(I);
    let s = (0, C.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
        n = V("nitro_member_hub_header"),
        a = (0, U.ds)(),
        { sourceAnalyticsLocations: l, analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        d = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        v = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        R = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        w = R?.id,
        B = (0, eG.V)(),
        F = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        z = (0, E.Y)(tF.T7),
        [W, Y] = o.useState(!0),
        K = o.useRef(0),
        X = (0, k.YE)(R, tF.PremiumTypes.TIER_2),
        Z = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        q = null != Z && Z.status === e1.Dmq.CANCELED;
    (0, iQ.b)(),
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                await Promise.all([b.hP(), b.$o(), (0, h.zS)(null, null, e1.tF5.DISCOVERY)]),
                    (K.current = Date.now() - e),
                    Y(!1);
            });
        }, []),
        o.useEffect(() => {
            W ||
                L.default.track(e1.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: l,
                    load_duration_ms: K.current,
                });
        }, [l, W]),
        o.useEffect(() => {
            s && (null != B || null != F) && (0, G.u1)(B, F);
        }, [s, B, F]);
    let Q = (0, m.zy)(),
        J = o.useRef(!1),
        $ = d && v && z,
        [ee, et] = o.useState($);
    $ && !ee && et(!0),
        o.useEffect(() => {
            if (J.current || !$) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tF.pe.TIER_0, nitro: tF.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((J.current = !0),
                (0, S.bG)(e1.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: s, analyticsLocations: r }));
        }, [$, Q.search, r]);
    let es = (0, g.bG)([y.A], () => y.A.enabled),
        ei = t === tF.tU.ApplicationStoreHome,
        en = es
            ? (0, c.jsx)(p.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : ei && X
                ? (0, c.jsx)(j.f5, { value: r, children: (0, c.jsx)(iq, { userId: w }) })
                : ee
                  ? null
                  : (0, c.jsx)("div", { className: u()(a1.kL, a1.Lq), children: (0, c.jsx)(x.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !q) || (n && e && (a || q))
            ? en
            : (0, c.jsxs)(c.Fragment, { children: [ei && (0, c.jsx)(N.A, {}), en] });
    }
    return (0, c.jsx)(j.f5, { value: r, children: (0, c.jsx)(a0, { entrypoint: t }) });
};
