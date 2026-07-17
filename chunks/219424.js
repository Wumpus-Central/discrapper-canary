s.d(t, { A: () => nR }), s(323874), s(14289), s(35956);
var i,
    a,
    n,
    l,
    r,
    c,
    o = s(627968),
    d = s(64700),
    u = s(503698),
    m = s.n(u),
    g = s(873263),
    x = s(17928),
    p = s(289873),
    f = s(228366),
    h = s(73825),
    N = s(974544),
    A = s(107834),
    j = s(793574),
    C = s(688810),
    E = s(277984),
    b = s(86379),
    R = s(160946),
    _ = s(682174),
    v = s(840251),
    T = s(688151);
let I = new v.E([], T.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var S = s(611924),
    P = s(532794),
    y = s(976860),
    M = s(351906),
    D = s(287809),
    O = s(295405),
    L = s(166403),
    k = s(174459),
    U = s(474090),
    G = s(881489),
    w = s(945960),
    B = s(945810),
    H =
        (((i = {}).CONTROL = "control"),
        (i.TREATMENT_A = "treatment_a"),
        (i.TREATMENT_B = "treatment_b"),
        (i.TREATMENT_C = "treatment_c"),
        i);
let F = (0, B.mj)({
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
function V(e) {
    let t = F.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
s(321073);
var z = s(554146),
    W = s(269115),
    K = s(689175),
    Y = s(131607),
    X = s(961250),
    Q = s(366505),
    Z = s(321191),
    q = s(903209),
    J = s(927813),
    $ = s(107857),
    ee = s(131168),
    et = s(482589),
    es = s(410516),
    ei = s(372684),
    ea = s(661531),
    en = s(717421),
    el = s(331322),
    er = s(297264),
    ec = s(834730),
    eo = s(821609),
    ed = s(403581),
    eu = s(815021),
    em = s(576243),
    eg = s(49999),
    ex = s(375708),
    ep = s(279261);
function ef(e) {
    let { premiumSubscription: t, content: s, markAsDismissed: i } = e,
        { analyticsLocations: a } = (0, C.Ay)(j.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        n = (0, en.z)({
            from: { transform: "translateY(64px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
        });
    return (0, o.jsx)(ei.animated.div, {
        className: ep.iE,
        style: n,
        children: (0, o.jsxs)("div", {
            className: ep.iJ,
            children: [
                (0, o.jsx)(em.A, { size: 64, iconSize: 40, color: ea.A.colors.WHITE }),
                (0, o.jsxs)("div", {
                    className: ep.qX,
                    children: [
                        (0, o.jsxs)(el.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: ep.iQ,
                            children: [
                                (0, o.jsx)(er.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: s.title,
                                }),
                                (0, o.jsx)(ec.E, { variant: "text-sm/medium", color: "text-muted", children: s.body }),
                            ],
                        }),
                        (0, o.jsx)(eo.$, {
                            variant: "expressive",
                            icon: ed.t,
                            size: "md",
                            text: s.cta,
                            onClick: function () {
                                i(eg.i.TAKE_ACTION),
                                    (0, P.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: a });
                            },
                        }),
                    ],
                }),
                (0, o.jsx)(eu.J, {
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
    ej = s(797221);
let eC = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: a } = (0, C.Ay)(s);
    return (0, o.jsx)(C.f5, {
        value: a,
        children: (0, o.jsxs)(eN.h, {
            className: m()(ej.kL, ej.pm, t),
            color: "purple",
            children: [
                (0, o.jsxs)("div", {
                    className: ej.FS,
                    children: [
                        (0, o.jsx)(er.D, {
                            variant: "heading-xxl/bold",
                            className: ej.R_,
                            children: ex.intl.string(ex.t.Ve9Ge6),
                        }),
                        (0, o.jsx)(ec.E, { variant: "text-md/medium", children: ex.intl.string(ex.t.yQ06u1) }),
                        (0, o.jsx)("div", {
                            className: ej.SB,
                            children: (0, o.jsx)(eA.A, {
                                buttonTextOverride: ex.intl.string(ex.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, o.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: ej._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eE = s(877624);
let eb =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eR(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: eb,
        srcSet: `${eb} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var e_ = s(502572),
    ev = s(192308),
    eT = s(775602),
    eI = s(366999),
    eS = s(531260),
    eP = s(780964),
    ey = s(766075),
    eM = s(786300),
    eD = s(975571),
    eO = s(428262),
    eL = s(960851),
    ek = s(89366),
    eU = s(422936),
    eG = s(234419),
    ew = s(549996),
    eB = s(172218);
function eH() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, d.useState)(1),
        i = (0, d.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
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
var eF = s(382996);
let eV = function (e) {
    let { text: t } = e;
    return (0, o.jsx)("div", {
        className: eF.i,
        children: (0, o.jsx)(ec.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var ez = s(371764),
    eW = s(103411),
    eK = s(778712),
    eY = s(97808),
    eX = s(590251),
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
        a = (0, x.bG)([eJ.A], () => eJ.A.getRecipientStatus()),
        n = (0, x.bG)([eJ.A], () => eJ.A.getHasEligibleFriends()),
        l = a.size === e0.Z,
        r =
            ((e = !1 !== n),
            (t = i.length),
            (s = a.size === e0.Z && [...a.values()].every((e) => e === e$.aK.REDEEMED)),
            e
                ? t === e0.Z
                    ? s
                        ? ex.intl.format(ex.t["1aEjsH"], {
                              helpdeskArticle: eD.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM),
                          })
                        : ex.intl.format(ex.t["+u3AOO"], {
                              helpdeskArticle: eD.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM),
                          })
                    : ex.intl.format(ex.t["omMr+V"], { helpdeskArticle: eD.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM) })
                : ex.intl.format(ex.t["zWhX/Q"], { helpdeskArticle: eD.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: a.size, hasEligibleFriends: n, allSent: l, bodyText: r };
}
var e3 = s(212737),
    e6 = s(849812);
function e8(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    k.default.track(e1.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, ev.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, o.jsx)(e, { ...s, startingScreen: t });
        });
}
function e9(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t.id, size: eK._3.SIZE_24 });
    return (0, o.jsx)(
        eY.eu,
        { className: e6.bj, src: s, "aria-label": (0, eq.mG)(t), size: eK._3.SIZE_24, ...i },
        t.id,
    );
}
function e7(e) {
    let { slotIndex: t } = e;
    return (0, o.jsx)("div", { className: e6.p, children: t });
}
function e5(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, o.jsx)("div", {
        className: m()(e6.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < e0.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, o.jsx)(e9, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, o.jsx)(e7, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function e4(e) {
    let { nReferralsSent: t, imageSize: s = 93, backgroundClassName: i, ringClassName: a } = e;
    return (0, o.jsx)(eX.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e6.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: a ?? e6.e0,
        overlayClassName: t === e0.Z ? e6.ys : void 0,
        children: (0, o.jsx)(eQ._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: s,
            width: s,
            zoomable: !1,
        }),
    });
}
function te(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: a, allSent: n, bodyText: l } = e2();
    return (0, o.jsxs)("div", {
        className: m()(e6.kL, t),
        children: [
            (0, o.jsx)("div", { className: e6.G3, children: (0, o.jsx)(e4, { nReferralsSent: i }) }),
            (0, o.jsxs)("div", {
                className: e6.IH,
                children: [
                    (0, o.jsx)(e5, { referralSentUsers: s, className: e6.GV }),
                    (0, o.jsxs)("div", {
                        className: e6.n4,
                        children: [
                            (0, o.jsx)(er.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ex.intl.string(ex.t.USo4s7),
                            }),
                            (0, o.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, o.jsx)(eo.$, {
                        variant: "primary",
                        disabled: !1 === a || !0 === n,
                        text: ex.intl.string(ex.t.Lm2nFc),
                        onClick: () =>
                            e8({ startingScreen: e3.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var tt = s(792656),
    ts = s(989349),
    ti = s.n(ts),
    ta = s(496431),
    tn = s(116689);
let tl = function (e) {
    let { expiresAt: t, className: s } = e,
        i = (0, ta.A)(ti()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: a, hours: n, minutes: l, seconds: r } = i,
        c = [
            { unitValue: a, unitType: "days" },
            { unitValue: n, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: r, unitType: "seconds" },
        ];
    return (0, o.jsxs)("div", {
        className: m()(tn.Xl, s),
        children: [
            (0, o.jsx)(ec.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ex.intl.string(ex.t["/ARFVE"]),
            }),
            (0, o.jsx)("div", {
                className: tn.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let s,
                            [i, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsxs)(
                                    "div",
                                    {
                                        className: tn.bh,
                                        children: [
                                            (0, o.jsxs)("div", {
                                                className: tn.kB,
                                                children: [
                                                    (0, o.jsx)("div", {
                                                        className: tn.B2,
                                                        children: (0, o.jsx)(ec.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, o.jsx)("div", {
                                                        className: tn.B2,
                                                        children: (0, o.jsx)(ec.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsx)(ec.E, {
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
                                    (0, o.jsx)(ec.E, {
                                        className: tn.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === c.length - 1),
                ),
            }),
        ],
    });
};
var tr = s(473702),
    tc = s(609425),
    to = s(660184),
    td = s(12052);
function tu() {
    let e = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tc.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: a } = (0, eZ.A)({ userId: e?.id, size: eK._3.SIZE_56 });
    if (null == e) return null;
    let n = (0, eq.mG)(e);
    return (0, o.jsxs)("div", {
        className: td.kL,
        children: [
            (0, o.jsx)("div", {
                className: td.my,
                children: (0, o.jsx)(eY.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eK._3.SIZE_56,
                    "aria-label": n,
                    ...a,
                }),
            }),
            (0, o.jsx)("div", { className: td.QC, children: (0, o.jsx)(to.A, { userName: n, displayNameStyles: t }) }),
        ],
    });
}
var tm = s(707554),
    tg = s(218199);
let tx = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, children: a } = e;
    return (0, o.jsx)(tm.F, {
        forceLevel: 1,
        children: (0, o.jsx)(er.D, {
            className: m()(tg.w, t, i && tg.n),
            variant: "display-md",
            color: s,
            children: a,
        }),
    });
};
var tp = s(690093);
function tf(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: a, allSent: n, bodyText: l } = e2();
    return (0, o.jsxs)("div", {
        className: m()(tp.kL, t),
        children: [
            (0, o.jsx)("div", {
                className: tp.G3,
                children: (0, o.jsx)(e4, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tp.HP,
                    ringClassName: tp.pZ,
                }),
            }),
            (0, o.jsxs)("div", {
                className: tp.IH,
                children: [
                    (0, o.jsxs)("div", {
                        className: tp.n4,
                        children: [
                            (0, o.jsx)(er.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ex.intl.string(ex.t.USo4s7),
                            }),
                            (0, o.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, o.jsx)(e5, { referralSentUsers: s, className: tp.t7 }),
                ],
            }),
            (0, o.jsx)(eo.$, {
                variant: "primary",
                disabled: !1 === a || !0 === n,
                text: ex.intl.string(ex.t.Lm2nFc),
                onClick: () =>
                    e8({ startingScreen: e3.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var th = s(702841),
    tN = s(676279),
    tA = s(396583),
    tj = (((a = {}).SINE = "sine"), (a.COSINE = "cosine"), a),
    tC = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tE = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: s,
            yAxisAnimationData: i,
            parallaxAnimationData: a,
            animateXAxisWiggle: n = !1,
            isMotionReduced: l = !1,
            animationSpeedScale: r = 1,
            children: c,
        } = e,
        u = (0, en.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [g, x] = (0, d.useState)(1),
        p = (0, en.z)(
            null != s
                ? {
                      from: { scale: g > 0 ? s.startScale : s.endScale },
                      to: { scale: g > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => x((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [f, h] = (0, d.useState)(1),
        N = (0, en.z)(
            null != t
                ? {
                      from: { blur: f > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: f > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => h((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, d.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, C] = (0, d.useState)(0),
        [E, b] = (0, d.useState)(1),
        R = (0, en.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tA.A)(() => {
        C(E * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e);
    }, A),
    l)
        ? c
        : (0, o.jsx)(ei.animated.div, {
              style: {
                  transform: u.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = m(e * Math.PI * 2) * i.range,
                          s = 0;
                      if (null != a) {
                          let e = a.range * (1 - a.containerVisibilityPercentage);
                          s = "up" === a.pathDirection ? -e : e;
                      }
                      return `translateY(${t + s}px)`;
                  }),
                  translateX: n ? R.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != a && a.changeOpacity ? a.containerVisibilityPercentage : 1,
              },
              children: c,
          });
};
var tb = s(692979);
let tR = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: s,
        boltContainerClassName: i,
        carContainerClassName: a,
        hammerContainerClassName: n,
        keyContainerClassName: l,
        starContainerClassName: r,
        boltAssetClassName: c,
        carAssetClassName: d,
        hammerAssetClassName: u,
        keyAssetClassName: g,
        starAssetClassName: x,
        animationSpeedScale: p = 1,
        blurScale: f = 1,
    } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            null != i &&
                (0, o.jsx)("div", {
                    className: m()(tb.nJ, i),
                    children: (0, o.jsx)(tE, {
                        blurAnimationData: { startBlurRadius: 10 * f, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tj.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tC.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: c,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, o.jsx)("div", {
                    className: m()(tb.IN, a),
                    children: (0, o.jsx)(tE, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tj.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tC.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, o.jsx)("div", {
                    className: m()(tb.Gj, n),
                    children: (0, o.jsx)(tE, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tj.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tC.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: u,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, o.jsx)("div", {
                    className: m()(tb.FV, l),
                    children: (0, o.jsx)(tE, {
                        blurAnimationData: { startBlurRadius: 5 * f, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tj.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tC.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, o.jsx)("div", {
                    className: m()(tb.E1, r),
                    children: (0, o.jsx)(tE, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * f, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tj.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tC.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, o.jsx)("img", {
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
let tv =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tT = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: a,
            assetClassName: n,
            animationSpeedScale: l = 1,
        } = e;
        return s
            ? (0, o.jsx)("div", {
                  className: a,
                  children: (0, o.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: n,
                  }),
              })
            : (0, o.jsx)("div", {
                  className: a,
                  children: (0, o.jsx)(tE, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tj.SINE },
                      parallaxAnimationData: {
                          pathDirection: tC.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: l,
                      children: t
                          ? (0, o.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: n,
                            })
                          : (0, o.jsx)(
                                t_.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: n,
                                    children: (0, o.jsx)("source", { src: tv }),
                                },
                                tv,
                            ),
                  }),
              });
    },
    tI = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: s,
                flyingWumpusAssetClassName: i,
                boltContainerClassName: a,
                carContainerClassName: n,
                hammerContainerClassName: l,
                keyContainerClassName: r,
                starContainerClassName: c,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: g,
                starAssetClassName: x,
                animationSpeedScale: p = 1,
            } = e,
            f = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
            h = (0, tN.TM)();
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(tT, {
                    supportHEVCAlpha: h,
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, o.jsx)(tR, {
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: a,
                    carContainerClassName: n,
                    hammerContainerClassName: l,
                    keyContainerClassName: r,
                    starContainerClassName: c,
                    boltAssetClassName: d,
                    carAssetClassName: u,
                    hammerAssetClassName: m,
                    keyAssetClassName: g,
                    starAssetClassName: x,
                    animationSpeedScale: p,
                }),
            ],
        });
    };
var tS = s(43588);
let tP = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, o.jsx)(tI, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: m()(tS.wG, s && tS.Vx),
        flyingWumpusAssetClassName: m()(tS.lu, s && tS.ov),
        boltContainerClassName: m()(tS.nJ, s && tS.Wc),
        hammerContainerClassName: m()(tS.Gj, s && tS.XA),
        keyContainerClassName: m()(tS.FV, s && tS.oZ),
        starContainerClassName: m()(tS.E1, s && tS.LN),
        boltAssetClassName: m()(tS.j7, s && tS.QN),
        hammerAssetClassName: m()(tS.Wv, s && tS.B9),
        keyAssetClassName: m()(tS.rs, s && tS.I1),
        starAssetClassName: m()(tS.OY, s && tS.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var ty = (((l = {}).MORNING = "morning"), (l.AFTERNOON = "afternoon"), (l.EVENING = "evening"), l);
function tM() {
    let e,
        t = { [ty.MORNING]: ex.t["Wvc/I+"], [ty.AFTERNOON]: ex.t["d+0STx"], [ty.EVENING]: ex.t.CqsxKI };
    return ex.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? ty.MORNING : e >= 12 && e < 17 ? ty.AFTERNOON : ty.EVENING],
    );
}
var tD = s(97584),
    tO = s(202241);
let tL = function (e) {
        let { containerVisibilityPercentage: t, compact: s } = e;
        return (0, o.jsx)(tI, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: m()(tO.wG, s && tO.Vx),
            flyingWumpusAssetClassName: m()(tO.lu, s && tO.ov),
            boltContainerClassName: m()(tO.nJ, s && tO.Wc),
            hammerContainerClassName: m()(tO.Gj, s && tO.XA),
            keyContainerClassName: m()(tO.FV, s && tO.oZ),
            starContainerClassName: m()(tO.E1, s && tO.LN),
            boltAssetClassName: m()(tO.j7, s && tO.QN),
            hammerAssetClassName: m()(tO.Wv, s && tO.B9),
            keyAssetClassName: m()(tO.rs, s && tO.I1),
            starAssetClassName: m()(tO.OY, s && tO.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    tk = {
        [H.TREATMENT_A]: function (e) {
            let {
                    className: t,
                    headingTop: s,
                    showPill: i,
                    buttonVisibilityRef: a,
                    shouldShowReferralProgressBar: n,
                    marketingBanner: l,
                } = e,
                { visibilityPercentageRef: r, visibilityPercentage: c } = eH(
                    !(0, x.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
                ),
                d = tM(),
                u = l ?? (n ? (0, o.jsx)(tf, {}) : null);
            return (0, o.jsx)("div", {
                className: m()(tD.kL, tD.Eg, t),
                ref: a,
                children: (0, o.jsxs)("div", {
                    className: m()(tD.W2, tD.HQ),
                    ref: r,
                    children: [
                        (0, o.jsxs)(el.B, {
                            align: "start",
                            gap: 32,
                            className: tD.ZU,
                            children: [
                                i && s,
                                (0, o.jsxs)(el.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, o.jsx)(tx, {
                                            className: tD.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: d,
                                        }),
                                        (0, o.jsx)(tu, {}),
                                    ],
                                }),
                                u,
                            ],
                        }),
                        (0, o.jsx)("div", {
                            className: tD.y3,
                            children: (0, o.jsx)(tP, { containerVisibilityPercentage: c, compact: null == u }),
                        }),
                    ],
                }),
            });
        },
        [H.TREATMENT_B]: function (e) {
            let {
                    className: t,
                    headingTop: s,
                    showPill: i,
                    buttonVisibilityRef: a,
                    shouldShowReferralProgressBar: n,
                } = e,
                { visibilityPercentageRef: l, visibilityPercentage: r } = eH(
                    !(0, x.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
                ),
                c = ex.intl.string(ex.t.ifwQZb);
            return (0, o.jsx)("div", {
                className: m()(tD.kL, tD.Eg, t),
                ref: a,
                children: (0, o.jsxs)("div", {
                    className: m()(tD.W2, tD.m8),
                    ref: l,
                    children: [
                        (0, o.jsxs)(el.B, {
                            align: "start",
                            gap: 32,
                            className: tD.Y0,
                            children: [
                                i && s,
                                (0, o.jsx)("div", {
                                    className: m()(tD.N1, tD.v8),
                                    children: (0, o.jsx)(tx, {
                                        className: tD.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: c,
                                    }),
                                }),
                                n && (0, o.jsx)(tf, {}),
                            ],
                        }),
                        (0, o.jsx)("div", {
                            className: tD.BF,
                            children: (0, o.jsx)(tL, { containerVisibilityPercentage: r, compact: !n }),
                        }),
                    ],
                }),
            });
        },
        [H.TREATMENT_C]: function (e) {
            let {
                    className: t,
                    headingTop: s,
                    showPill: i,
                    buttonVisibilityRef: a,
                    shouldShowReferralProgressBar: n,
                } = e,
                l = tM();
            return (0, o.jsx)("div", {
                className: m()(tD.kL, tD.Eg, t),
                ref: a,
                children: (0, o.jsxs)("div", {
                    className: m()(tD.W2, tD.J_),
                    children: [
                        (0, o.jsxs)(el.B, {
                            align: "start",
                            gap: 32,
                            className: tD.$S,
                            children: [
                                i && s,
                                (0, o.jsxs)(el.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, o.jsx)(tx, {
                                            className: tD.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: l,
                                        }),
                                        (0, o.jsx)(tu, {}),
                                    ],
                                }),
                            ],
                        }),
                        n && (0, o.jsx)("div", { className: tD.Pq, children: (0, o.jsx)(tf, {}) }),
                    ],
                }),
            });
        },
    };
function tU(e) {
    let { treatment: t, ...s } = e,
        i = tk[t];
    return null != i ? (0, o.jsx)(i, { ...s }) : null;
}
var tG = s(447764);
let tw =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tB = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)("div", {
                    className: tG.BI,
                    children: (0, o.jsx)(tE, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tj.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tC.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, o.jsx)("img", { src: tw, alt: "", className: tG.Q }),
                    }),
                }),
                (0, o.jsx)(tR, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: tG.Gj,
                    keyContainerClassName: tG.FV,
                    starContainerClassName: tG.E1,
                    hammerAssetClassName: tG.Wv,
                    keyAssetClassName: tG.rs,
                    starAssetClassName: tG.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var tH = s(18671);
let tF = function () {
    let e = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion);
    return (0, o.jsx)(tR, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tH.cI,
        hammerContainerClassName: tH.qg,
        keyContainerClassName: tH.h2,
        boltContainerClassName: tH.Bz,
        starAssetClassName: tH.ks,
        hammerAssetClassName: tH.GY,
        keyAssetClassName: tH.p4,
        boltAssetClassName: tH.vy,
    });
};
var tV = s(202541);
function tz(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        a = (0, G.Zb)(t);
    return (0, o.jsx)("div", {
        className: m()(tD.kL, s),
        ref: i,
        children: (0, o.jsxs)("div", {
            className: tD.ap,
            children: [
                (0, o.jsxs)(el.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, o.jsx)(eV, { text: ex.intl.string(ex.t.yhldRB) }),
                        (0, o.jsxs)(el.B, {
                            align: "start",
                            gap: 12,
                            className: tD.rG,
                            children: [
                                (0, o.jsx)(tx, { children: ex.intl.format(ex.t.FwjP6W, { days: a }) }),
                                (0, o.jsx)(ec.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: ex.intl.string(ex.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, o.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, o.jsx)(tt.A, {
                                    size: "md",
                                    buttonTextOverride: ex.intl.string(ex.t["2+luBl"]),
                                    iconOverride: ed.t,
                                    variantOverride: "expressive",
                                }),
                                (0, o.jsx)(eo.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ex.intl.string(ex.t.Af7ye6),
                                    onClick: () => (0, ey.openUserSettings)(eP.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: tD.Hk,
                    children: [(0, o.jsx)(eR, { alt: "", width: "100%", height: "auto" }), (0, o.jsx)(tF, {})],
                }),
            ],
        }),
    });
}
function tW(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: a } = e,
        {
            headingText: n,
            headingTop: l,
            showPill: r,
            shouldShowChurnVariant: c,
            premiumSubscription: d,
            userDiscountOffer: u,
            discountedPrice: g,
            buttonVisibilityRef: p,
        } = tY(),
        { treatment: f, isInNitroHomeHeaderTreatment: h } = V("subscriber_home_hero"),
        { analyticsLocations: N } = (0, C.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
        A = (0, ew.c)(eE.C.MARKETING_PAGE_BANNER),
        E = (0, eL.cg)(),
        b = null != d && d.status === e1.Dmq.CANCELED,
        R = h && !b,
        _ = null;
    null != A &&
        "marketingPageBanner" === A.properties.properties.oneofKind &&
        (_ = (0, o.jsx)(ez.x, {
            componentId: A.id,
            promotionBannerMarketingComponentFields: A.properties.properties.marketingPageBanner,
        }));
    let v = _;
    null == v && a && !R && (v = (0, o.jsx)(te, {}));
    let T = (0, eG.V)(),
        I = (0, eU.O)(),
        S = (0, es.U9)(I, tV.pe.TIER_2) ? tV.pe.TIER_2 : void 0,
        P = null != d && d.status !== e1.Dmq.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
        y = (0, eS.A)(),
        M = y.isFractionalPremiumActive && !P && null == v && !c,
        { visibilityPercentageRef: D, visibilityPercentage: O } = eH(!(0, x.bG)([eT.Ay], () => eT.Ay.useReducedMotion));
    return i
        ? (0, o.jsx)(tz, { fpEndsAt: y.currentEntitlementEndsAt, className: t, buttonVisibilityRef: p })
        : R
          ? (0, o.jsx)(tU, {
                treatment: f,
                className: t,
                headingTop: l,
                showPill: r,
                buttonVisibilityRef: p,
                shouldShowReferralProgressBar: a,
                marketingBanner: _,
            })
          : (0, o.jsx)("div", {
                className: m()(tD.kL, t),
                "data-testid": "subscriber-nitro-home-hero-header",
                ref: p,
                children: (0, o.jsxs)("div", {
                    className: tD.Qs,
                    ref: D,
                    children: [
                        r && l,
                        (0, o.jsxs)("div", {
                            className: tD.N1,
                            children: [
                                (0, o.jsx)(tB, { containerVisibilityPercentage: O }),
                                c &&
                                    u?.expiresAt != null &&
                                    (0, o.jsx)(tl, { expiresAt: u.expiresAt.toISOString(), className: tD.IZ }),
                                (0, o.jsx)(tx, {
                                    children:
                                        c && null != u
                                            ? ex.intl.format(ex.t["3yZP0G"], { percent: u.discount.amount })
                                            : n,
                                }),
                                c &&
                                    null != u &&
                                    null != g &&
                                    (0, o.jsx)(ec.E, {
                                        className: tD.jG,
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: ex.intl.format(ex.t["3Q4wCy"], {
                                            discountedPrice: g,
                                            billingPeriod: (0, eO.Ke)(u.discount.userUsageLimitInterval),
                                            numMonths: u.discount.userUsageLimit,
                                        }),
                                    }),
                            ],
                        }),
                        (0, o.jsxs)("div", {
                            className: M || c ? tD.UJ : void 0,
                            children: [
                                M &&
                                    (0, o.jsx)(tt.A, {
                                        size: "md",
                                        hasActivePromotion: !!E,
                                        subscriptionTier: T?.subscription_trial?.sku_id ?? S,
                                    }),
                                c &&
                                    null != d &&
                                    (0, o.jsx)(eo.$, {
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
                                                            s.e("23866"),
                                                            s.e("33730"),
                                                            s.e("90862"),
                                                            s.e("97189"),
                                                            s.e("16918"),
                                                            s.e("24059"),
                                                            s.e("42306"),
                                                            s.e("11291"),
                                                            s.e("38838"),
                                                            s.e("83893"),
                                                            s.e("83133"),
                                                            s.e("63051"),
                                                            s.e("84873"),
                                                            s.e("61783"),
                                                            s.e("82781"),
                                                            s.e("77083"),
                                                            s.e("47944"),
                                                            s.e("56372"),
                                                            s.e("64509"),
                                                            s.e("39932"),
                                                            s.e("69425"),
                                                            s.e("16581"),
                                                            s.e("42205"),
                                                            s.e("55675"),
                                                            s.e("27962"),
                                                            s.e("64827"),
                                                            s.e("7167"),
                                                            s.e("61060"),
                                                            s.e("54484"),
                                                            s.e("6338"),
                                                            s.e("47834"),
                                                            s.e("78157"),
                                                            s.e("53782"),
                                                            s.e("44571"),
                                                            s.e("40291"),
                                                            s.e("29963"),
                                                            s.e("38513"),
                                                            s.e("52557"),
                                                            s.e("63123"),
                                                            s.e("50097"),
                                                            s.e("94161"),
                                                            s.e("13051"),
                                                            s.e("80347"),
                                                            s.e("80166"),
                                                        ]).then(s.bind(s, 293061));
                                                    return (s) =>
                                                        (0, o.jsx)(t, {
                                                            ...s,
                                                            analyticsLocations: N,
                                                            initialStep: e,
                                                            premiumSubscription: d,
                                                        });
                                                })
                                            );
                                        },
                                    }),
                                (0, o.jsx)(eA.A, {
                                    variant: M || c ? "secondary" : "expressive",
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
let [tK, tY] = (0, eM.A)(),
    tX = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: a } = e,
            { analyticsLocations: n } = (0, C.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, G.ds)(),
            r = (0, ek.QQ)(),
            c = (0, x.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
            d = null != c && c.status === e1.Dmq.CANCELED && null != i,
            u = r && !d,
            m = ex.intl.string(ex.t.qYKftX),
            g = (0, eW.m)(),
            p = ex.intl.string(ex.t.ifwQZb),
            { fractionalState: f, endsAt: h } = (0, eS.A)(),
            N = (0, eI.Ay)(h, eI.yE.CREDITS_ENDS_IN),
            A = null;
        if (f === tV.xc.NONE || l) A = (0, o.jsx)(eV, { text: m });
        else {
            u = !0;
            let e = ex.intl.format(ex.t["yR+oDD"], {
                helpCenterLink: eD.A.getArticleURL(e1.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            A = (0, o.jsx)(e_.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tD.YL,
                position: "right",
                children: (e) =>
                    (0, o.jsx)("div", {
                        ...e,
                        className: tD.V_,
                        children: (0, o.jsx)("div", { className: tD.eL, children: (0, o.jsx)(eV, { text: N }) }),
                    }),
            });
        }
        return (0, o.jsx)(C.f5, {
            value: n,
            children: (0, o.jsx)(tK.Provider, {
                value: {
                    headingText: p,
                    headingTop: A,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: c,
                    userDiscountOffer: i,
                    discountedPrice: a,
                    buttonVisibilityRef: s,
                },
                children: (0, o.jsx)(tW, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var tQ = s(820284),
    tZ = s(742589),
    tq = s(909536),
    tJ = s(392943),
    t$ = s(876587),
    t0 = s(400669),
    t1 = s(503255),
    t2 = s(525311);
let t3 = function () {
    let e = (0, tq.Gh)("nitro_home_header"),
        t = d.useRef(null);
    return (0, o.jsxs)(tQ.A, {
        section: e1.JJy.NAVIGATION,
        children: [
            (0, o.jsx)(tZ.A, {
                className: m()(t1.TQ, t2.C$),
                transparent: !0,
                role: "navigation",
                children: (0, o.jsxs)("div", {
                    className: t1.Wc,
                    children: [
                        (0, o.jsxs)("div", {
                            className: t2.wk,
                            children: [
                                (0, o.jsx)(ed.t, { colorClass: t2.tr }),
                                (0, o.jsx)("span", {
                                    role: "img",
                                    "aria-label": ex.intl.string(ex.t.Ipxkog),
                                    className: t2.Ss,
                                    children: (0, o.jsx)(tJ.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, o.jsxs)("div", {
                                className: t1.MQ,
                                children: [
                                    (0, o.jsx)(t0.l, {
                                        ref: t,
                                        size: "sm",
                                        location: j.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, o.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, o.jsx)(t$.O, { targetElementRef: t, body: ex.intl.string(ex.t.EqUw7K) }),
        ],
    });
};
var t6 = s(325499),
    t8 = s(562708),
    t9 = s(885574),
    t7 = s(43990),
    t5 = s(993077),
    t4 = s(139286),
    se = s(872725),
    st = s(920050),
    ss = s(375776),
    si = s(727811),
    sa = s(222652),
    sn = s(933287),
    sl = s(81157);
function sr(e) {
    let { openRewardModal: t } = e,
        s = (0, sa.z)();
    if (s.kind === sa.N.SUBSCRIBE)
        return (0, o.jsxs)("div", {
            className: sl.R$,
            children: [
                (0, o.jsx)(tt.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tV.pe.TIER_2,
                }),
                (0, o.jsx)(eo.$, { variant: "secondary", size: "md", text: ex.intl.string(ex.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === si.P.CLAIMED
            ? { text: ex.intl.string(sn.default.Plwzgf) }
            : { text: ex.intl.string(ex.t.hvVgAZ) };
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)("div", {
                className: sl.R$,
                children: [
                    (0, o.jsx)(eo.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, o.jsx)(eo.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === si.P.CLAIM_IN_PROGRESS &&
                (0, o.jsxs)("div", {
                    className: sl.ed,
                    children: [
                        (0, o.jsx)(t9.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, o.jsx)(ec.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ex.intl.string(sn.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sc(e) {
    let { glowing: t = !1 } = e;
    (0, t4.A)({
        type: t8.ImpressionTypes.VIEW,
        name: t8.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: st.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, C.Ay)(j.A.CROISSANT_PREMIUM_HERO_CARD),
        a = d.useCallback(() => {
            (0, ev.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("69235"), s.e("13088")]).then(s.bind(s, 347171));
                return (t) => (0, o.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, o.jsx)(t7.N, {
        theme: e1.NJ8.DARKER,
        children: (e) =>
            (0, o.jsx)(C.f5, {
                value: i,
                children: (0, o.jsx)("div", {
                    className: m()(e, sl.kL),
                    children: (0, o.jsx)(se.A, {
                        cardType: t5.s.CUSTOM,
                        cardClassName: sl.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, o.jsxs)("div", {
                            className: sl.XF,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: sl.j,
                                    children: [
                                        (0, o.jsx)("div", { className: sl._g }),
                                        (0, o.jsx)("div", { className: sl.$h }),
                                        (0, o.jsx)("div", { className: sl.Rv }),
                                        (0, o.jsx)("div", { className: sl.Lw }),
                                        (0, o.jsx)("div", { className: sl.mR }),
                                    ],
                                }),
                                (0, o.jsxs)("div", {
                                    className: sl.Qs,
                                    children: [
                                        (0, o.jsx)("img", {
                                            className: sl.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, o.jsx)(er.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sl.DD,
                                            children: ex.intl.string(sn.default.RGT513),
                                        }),
                                        (0, o.jsx)(ec.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sl.h_,
                                            children: ex.intl.string(sn.default["+pTnsf"]),
                                        }),
                                        (0, o.jsx)(sr, { openRewardModal: a }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var so = s(744064);
function sd(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, sa.z)(),
        a = { isThirdPartyPerk: !0 },
        n =
            i.kind === sa.N.SUBSCRIBE
                ? { ...a, subscriptionRequired: !0 }
                : {
                      ...a,
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, o.jsx)(so.S, {
        id: st.XBOX_PREMIUM_PERK_CARD_ID,
        title: ex.intl.string(sn.default.UVL9tD),
        description: ex.intl.string(sn.default["I+IXr0"]),
        ...n,
        className: t,
        containerClassName: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, o.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function su(e) {
    let { analyticsLocations: t } = (0, C.Ay)(j.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, o.jsx)(C.f5, { value: t, children: (0, o.jsx)(sd, { ...e }) });
}
var sm = s(367791),
    sg = s(672193);
function sx(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: a, grid: n, gridClassName: l } = e,
        r = sg.Ui;
    return (0, o.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            a,
            null != n ? (0, o.jsx)("div", { className: m()(r, null != a && sm.Jx, l), children: n }) : null,
        ],
    });
}
var sp = s(149995),
    sf = s(398523),
    sh = s(881373),
    sN = s(581921),
    sA = s(3074),
    sj = s(852218),
    sC = s(161319),
    sE = s(962995);
function sb() {
    let { analyticsLocations: e } = (0, C.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sh.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        s = sf.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, sp.Zk)({ location: "useHardwarePartnerPerkCards" }),
        a = (0, sp.S9)({ location: "useHardwarePartnerPerkCards" }),
        n = null === (0, sA.N)(),
        l = (0, t6.b)("useHardwarePartnerPerkCards"),
        { currentDate: r, nDaysInMonth: c } = (0, d.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, d.useMemo)(() => {
        let d = l ? void 0 : ex.intl.string(ex.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: st.LOGITECH_3PP_CARD_ID,
                      title: ex.intl.string(sE.default.OlObRa),
                      description: ex.intl.format(sE.default.ZGOJ8R, {
                          discountPercent: sh.aW,
                          termsUrl: eD.A.getArticleURL(e1.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: r.getDate() / c,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sN.P)({ partnerId: sj.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: d,
                      caption: (0, o.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sj.XY },
                      ctaDisabled: n,
                      ctaLoading: n,
                  }
                : null,
            steelseriesCard: s
                ? {
                      id: st.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ex.intl.string(ex.t.m7PucM),
                      description: i
                          ? a
                              ? ex.intl.format(ex.t["1Zw6xL"], {})
                              : ex.intl.format(ex.t.KWdCO0, {})
                          : ex.intl.format(ex.t.zh1X7u, {}),
                      descriptionNote:
                          !a && i
                              ? ex.intl.format(ex.t.vblnHk, {
                                    partnerName: sj.CD[sj.Cs].label,
                                    helpdeskArticle: eD.A.getArticleURL(e1.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: d,
                      caption: (0, o.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: r.getDate() / c,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sC.u)({ analyticsLocations: e, partnerIds: [sj.KS, sj.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sj.KS },
                      ctaDisabled: n,
                      ctaLoading: n,
                  }
                : null,
        };
    }, [l, e, r, t, c, s, i, a, n]);
}
var sR = s(102338);
let s_ = "xgpp";
function sv(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, t6.b)("premium_subscriber_home_rewards"),
        { logitechCard: a, steelseriesCard: n } = sb();
    if (!i) return null;
    let l = null != a || null != n;
    return (0, o.jsx)(sx, {
        id: s_,
        sectionClassName: m()(sR.uW, sR.Uv, sR.qr),
        heading: (0, o.jsx)(er.D, {
            variant: "display-sm",
            className: m()(sg.R_, sm.U6),
            children: ex.intl.string(ex.t.NG1e6l),
        }),
        beforeGrid: (0, o.jsx)("div", { className: sm.JE, children: (0, o.jsx)(sc, { glowing: t === s_ }) }),
        grid: l
            ? (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(su, { containerClassName: sg.Nr }),
                      null != a && (0, o.jsx)(so.S, { ...a, containerClassName: sg.Nr, glowing: s === a.id }),
                      null != n && (0, o.jsx)(so.S, { ...n, containerClassName: sg.Nr, glowing: s === n.id }),
                  ],
              })
            : null,
    });
}
var sT = s(98812),
    sI = s(67423);
let sS = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: a, discountedPrice: n } = e,
        { analyticsLocations: l } = (0, C.Ay)(j.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, en.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsx)(ei.animated.div, {
        className: m()(sT.iE, { [sT.q4]: !t }),
        style: r,
        children: (0, o.jsxs)("div", {
            className: sT.iJ,
            children: [
                (0, o.jsx)("img", { alt: "", src: sI, className: sT.oU }),
                (0, o.jsxs)("div", {
                    className: sT.iQ,
                    children: [
                        (0, o.jsx)(er.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: ex.intl.format(ex.t["3yZP0G"], { percent: a.discount.amount }),
                        }),
                        (0, o.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(ex.t["3Q4wCy"], {
                                numMonths: a.discount.userUsageLimit,
                                discountedPrice: n,
                                billingPeriod: (0, eO.Ke)(a.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, o.jsx)(eo.$, {
                    variant: "expressive",
                    icon: ed.t,
                    size: "md",
                    text: ex.intl.string(ex.t.zrCzVB),
                    onClick: () =>
                        void (0, ev.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("23866"),
                                s.e("33730"),
                                s.e("90862"),
                                s.e("97189"),
                                s.e("16918"),
                                s.e("24059"),
                                s.e("42306"),
                                s.e("11291"),
                                s.e("38838"),
                                s.e("83893"),
                                s.e("83133"),
                                s.e("63051"),
                                s.e("84873"),
                                s.e("61783"),
                                s.e("82781"),
                                s.e("77083"),
                                s.e("47944"),
                                s.e("56372"),
                                s.e("64509"),
                                s.e("39932"),
                                s.e("69425"),
                                s.e("16581"),
                                s.e("42205"),
                                s.e("55675"),
                                s.e("27962"),
                                s.e("64827"),
                                s.e("7167"),
                                s.e("61060"),
                                s.e("54484"),
                                s.e("6338"),
                                s.e("47834"),
                                s.e("78157"),
                                s.e("53782"),
                                s.e("44571"),
                                s.e("40291"),
                                s.e("29963"),
                                s.e("38513"),
                                s.e("52557"),
                                s.e("63123"),
                                s.e("50097"),
                                s.e("94161"),
                                s.e("13051"),
                                s.e("80347"),
                                s.e("80166"),
                            ]).then(s.bind(s, 293061));
                            return (t) =>
                                (0, o.jsx)(e, {
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
var sP = s(761508),
    sy = s(449543);
function sM(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sD(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sO(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var sL = s(345394);
function sk(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: sL.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sU(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sG(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sw(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sB(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sH(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var sF = s(996682);
function sV(e) {
    let {
        color: t = ea.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: a,
        width: n = 100,
        height: l = 80,
    } = e;
    return (0, o.jsxs)("svg", {
        ...(0, sF.A)({ "aria-label": s, "aria-hidden": i, role: a }),
        width: n,
        height: l,
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
function sz(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var sW = s(78701);
function sK(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: n, height: l },
        src: sW.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var sY = s(462887),
    sX = s(736653),
    sQ = s(259065),
    sZ = s(206835),
    sq = s(591179),
    sJ = s(462463),
    s$ = s(878784),
    s0 = s(425713),
    s1 = s(696292),
    s2 = s(192444),
    s3 = s(617986),
    s6 = s(892227),
    s8 = s(81466),
    s9 = s(318254),
    s7 = s(490285),
    s5 = s(875679);
let s4 = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, Q.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, s6.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, o.jsxs)("div", {
        className: s5.kL,
        children: [
            null != s &&
                (0, o.jsxs)("div", {
                    className: s5.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: s5.Pf,
                            children: [
                                (0, o.jsx)(s8.C, { size: "sm", color: ea.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(s7.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, o.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(s7.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, o.jsx)("div", { className: s5.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, o.jsxs)("div", {
                    className: s5.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: s5.Pf,
                            children: [
                                (0, o.jsx)(s9.C, { size: "sm", color: ea.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(s7.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, o.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(s7.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ie = s(758836),
    it = s(190107),
    is = s(555599);
function ii(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, s2.lk)(it.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: a } = (0, Q.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, d.useMemo)(
            () =>
                !i || null == a || null == a.reward_amount || a.reward_amount <= 0
                    ? null
                    : {
                          id: st.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ex.intl.string(s7.default.hx5AFp),
                          description: ex.intl.format(s7.default.wq3CF2, { orbsCount: a.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: m()(is.lH, is.yK),
                          footerContent: (0, o.jsx)(s4, {}),
                          ctaText: ex.intl.string(s7.default.BxjHiu),
                          onCtaClick: () => (0, y.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(ie.G2.ORBS)),
                      },
            [i, a],
        ),
        questOrbMultiplierCard: (0, d.useMemo)(
            () =>
                t
                    ? {
                          id: st.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ex.intl.string(ex.t.Csf5Ol),
                          description: ex.intl.format(ex.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: () => (0, s3.mA)({ fromContent: s1.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: is.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var ia = s(975807),
    il = s(95035),
    ir = s(862990),
    ic = s(88001),
    io = s(466919),
    id = s(817577);
function iu() {
    (0, ia.A)(ic.TE);
}
function im(e) {
    let t = (0, ir.O9)(),
        i = (0, x.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        a = i?.hasActiveTrial ?? !1,
        n = (0, d.useCallback)(() => {
            a
                ? (0, ev.openModalLazy)(async () => {
                      let { default: e } = await s.e("99709").then(s.bind(s, 516044));
                      return (t) => (0, o.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tV.pe.TIER_2,
                      initialPlanId: tV.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, a]);
    return (0, d.useMemo)(
        () =>
            t
                ? {
                      id: st.PREMIUM_GROUP_CARD_ID,
                      title: ex.intl.string(io.default.YkvksF),
                      description: (0, o.jsxs)(o.Fragment, {
                          children: [
                              ex.intl.formatToPlainString(io.default.JlyGQj, {
                                  totalSeats: ic.aw,
                                  premiumGroupProductName: (0, ic.DP)(),
                              }),
                              (0, o.jsx)("div", {
                                  className: is.LF,
                                  children: (0, o.jsx)(il.A, {
                                      onClick: iu,
                                      children: ex.intl.string(io.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ex.intl.string(ex.t.oW0eUd),
                      primaryAsset: id,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: ex.intl.string(ex.t.IJI7yk),
                      onCtaClick: n,
                  }
                : null,
        [n, t],
    );
}
var ig = s(562819),
    ix = s(892035),
    ip = s(793943),
    ih = s(241988),
    iN = s(655752),
    iA = s(764231),
    ij = s(627380),
    iC = s(30084),
    iE = s(792641),
    ib = s(714206);
let iR =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    i_ =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iv =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iT() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, C.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
        a = (0, sq.X)("useWhatsNewPerkCards"),
        { logitechCard: n, steelseriesCard: l } = sb(),
        r = (0, t6.b)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: c } = (0, ix.z$)("useWhatsNewPerkCards"),
        u = (0, sJ.A)({ analyticsLocations: i }),
        g = (0, d.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, sQ.L)({ analyticsLocations: i }),
            );
        }, [i]),
        p = (0, d.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, ig.L)({ analyticsLocations: i }),
            );
        }, [i]),
        f = (0, d.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        h = (function (e) {
            let { fractionalState: t } = (0, eS.A)(),
                s = t === tV.xc.FP_ONLY,
                i = (0, s$.$F)(),
                a = (0, s$.Xb)(),
                n = i?.status === s$.Wo.UPCOMING || s,
                l = (0, s0.N)(i?.id),
                r = (function () {
                    let e = (0, s$.$F)(),
                        t = (0, iN.P)(),
                        s = (0, s$.Xb)();
                    if (null == e || null == t || null == s) return null;
                    let i = ti()(),
                        a = ti()(s),
                        n = e.status === s$.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        r = a.clone().add(n, "months"),
                        c = a.clone().add(l, "months").diff(r);
                    return Math.max(0, Math.min(1, (i.diff(r) - 864e5) / c));
                })(),
                c = (0, x.bG)([eT.Ay], () => eT.Ay.useReducedMotion) && !n,
                o = (0, ij.t)(),
                u = (0, iN.P)();
            return (0, d.useMemo)(() => {
                let t,
                    d = null != u ? ex.intl.string(u.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iA.T)(tV.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === s$.Wo.UPCOMING
                              ? ex.intl.formatToPlainString(ex.t.a1eKDi, { days: o?.days ?? 0 })
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
                                })(o, d) ??
                                (0, iA.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let g = null;
                return (
                    null != l ? (g = n || c ? l.standard : l.ambientLarge) : s && (g = ib),
                    {
                        id: st.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ex.intl.string(i.nameUnformattedNitro) : s ? ex.intl.string(ex.t.tx9Fvw) : "",
                        pillText: ex.intl.string(ex.t["jyYgZ+"]),
                        primaryAsset: g,
                        primaryAssetClassName: m()(iE.pq, { [iE.n6]: n, [iE.kE]: c }),
                        caption: null != a ? ex.intl.formatToPlainString(ex.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: r ?? void 0,
                        ctaText: ex.intl.string(ex.t.jVcuVY),
                        onCtaClick: () => (0, iC.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, n, c, a, r, s, o, u, e]);
        })(i),
        N =
            ((e = (0, $.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, x.bG)([L.A], () => L.A.getPremiumTypeSubscription())),
            (s = (0, eh.q)(t, e === $.Iz.NITRO_HOME_TILE)),
            (0, d.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: st.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: (0, o.jsx)("img", {
                                  src: ih,
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
        { nitroOrbsRewardsCard: A, questOrbMultiplierCard: E } = ii("useWhatsNewPerkCards"),
        b = im(i);
    return (0, d.useMemo)(() => {
        let e = [
                r ? null : n,
                r ? null : l,
                A,
                E,
                b,
                {
                    id: st.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ex.intl.string(ex.t.OLtTrt),
                    description: ex.intl.string(ex.t["di/pXR"]),
                    onCtaClick: a ? u : g,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    primaryAsset: iR,
                },
                {
                    id: st.CLIENT_THEMES_CARD_ID,
                    title: ex.intl.string(ex.t.acc6h6),
                    description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iv,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ip.nf)(ip.HP.CUSTOM_THEME);
                    },
                },
                c
                    ? null
                    : {
                          id: st.PERMADECOS_CARD_ID,
                          title: ex.intl.string(ex.t.L14NZN),
                          description: ex.intl.string(ex.t.eCZkAI),
                          primaryAsset: (0, o.jsx)(sK, { alt: "", ariaHidden: !0 }),
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: a ? u : p,
                      },
                {
                    id: st.CUSTOM_APP_ICONS_CARD_ID,
                    title: ex.intl.string(ex.t["GU+wqh"]),
                    description: ex.intl.string(ex.t["1uPk1Z"]),
                    primaryAsset: i_,
                    ctaText: ex.intl.string(ex.t.y9TxXV),
                    onCtaClick: f,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        if ((e.splice(+!!t, 0, h), null != N && e.splice(1, 0, N), c)) {
            let t = null != N ? 2 : 1;
            e.splice(t, 0, {
                id: st.PROFILE_FRAMES_CARD_ID,
                title: ex.intl.string(ex.t.SGBDnu),
                description: ex.intl.string(ex.t.cMgegQ),
                pillText: ex.intl.string(ex.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: m()(is.lH, is.yK),
                ctaText: ex.intl.string(ex.t.jVcuVY),
                onCtaClick: () => (0, y.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(ie.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > s && e.splice(s, e.length - s), e;
    }, [h, N, A, E, b, g, f, p, u, a, n, l, r, c]);
}
var iI = s(355097);
let iS = "/assets/1eb1b74667b4c0f0.svg",
    iP = "/assets/983b60e4fcaf973b.svg";
var iy =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let iM = [
    { id: "bestof", label: () => ex.intl.string(ex.t.q1u7nQ) },
    { id: "appearance", label: () => ex.intl.string(ex.t.CUnZkZ) },
    { id: "upgrades", label: () => ex.intl.string(ex.t.KC5q8v) },
    { id: "vip", label: () => ex.intl.string(ex.t.DjEAcv) },
];
var iD = s(758495);
function iO(e) {
    e.stopPropagation();
}
function iL(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sX.DP)(),
                t = (0, sq.X)("useFavoritesPerkCards"),
                s = (0, s$.Lh)(),
                i = (0, s0.N)(s)?.standard ?? null,
                { analyticsLocations: a } = (0, C.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
                n = (0, sZ.A)({ scrollPosition: iI._F.TRY_IT_OUT, analyticsLocations: a }),
                l = (0, d.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                }, [a]),
                r = (0, d.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: a });
                }, [a]),
                c = (0, d.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: a });
                }, [a]),
                u = (0, d.useCallback)(() => {
                    (0, y.pX)(e1.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, d.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.SOUNDBOARD_CATEGORY, { analyticsLocations: a });
                }, [a]),
                g = (0, sJ.A)({ analyticsLocations: a }),
                x = (0, d.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                        (0, sQ.L)({ analyticsLocations: a }),
                    );
                }, [a]),
                p = iT(),
                f = (0, d.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = ii("useFavoritesPerkCards"),
                A = im(a),
                E = (0, d.useMemo)(
                    () => [
                        {
                            id: st.SERVER_BOOSTS_CARD_ID,
                            title: ex.intl.formatToPlainString(ex.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ex.intl.formatToPlainString(ex.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, o.jsx)(sM, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != A ? { ...A, categories: ["bestof"] } : null,
                        {
                            id: st.PROFILES_CARD_ID,
                            title: ex.intl.string(ex.t.xDRab3),
                            description: ex.intl.string(ex.t.yn6fWA),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: t ? g : n,
                            primaryAsset: (0, o.jsx)(sD, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: st.HD_VIDEO_CARD_ID,
                            title: ex.intl.string(ex.t["/mQ5gg"]),
                            description: ex.intl.string(ex.t["7WwAXh"]),
                            primaryAsset: (0, o.jsx)(sO, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: st.CLIENT_THEMES_CARD_ID,
                            title: ex.intl.string(ex.t.acc6h6),
                            description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iv,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: st.MORE_EMOJIS_CARD_ID,
                            title: ex.intl.string(ex.t.D8vIDT),
                            description: ex.intl.string(ex.t.DRMecB),
                            primaryAsset: (0, o.jsx)(sk, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: st.LARGE_UPLOADS_CARD_ID,
                            title: ex.intl.string(ex.t.nL1WZV),
                            description: ex.intl.formatToPlainString(ex.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, o.jsx)(sU, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: st.CUSTOM_APP_ICONS_CARD_ID,
                            title: ex.intl.string(ex.t["GU+wqh"]),
                            description: ex.intl.string(ex.t["1uPk1Z"]),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: i_,
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
                            primaryAsset: iR,
                            categories: ["appearance"],
                        },
                        {
                            id: st.CUSTOM_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t["Cu/oFd"]),
                            description: ex.intl.string(ex.t.czj2aa),
                            primaryAsset: (0, o.jsx)(sG, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: st.SPECIAL_STICKERS_CARD_ID,
                            title: ex.intl.string(ex.t.MQoVeb),
                            description: ex.intl.string(ex.t.HGCLZX),
                            primaryAsset: (0, o.jsx)("div", {
                                className: is.Uc,
                                children: (0, o.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: st.SUPER_REACTIONS_CARD_ID,
                            title: ex.intl.string(ex.t.qERvAA),
                            description: ex.intl.string(ex.t.WkUWzx),
                            primaryAsset: (0, o.jsx)(sB, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: st.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.ssVDYQ),
                            description: ex.intl.string(ex.t.aUSRMa),
                            primaryAsset: (0, sY.M)(e) ? iS : iP,
                            categories: ["upgrades"],
                        },
                        {
                            id: st.EARLY_ACCESS_CARD_ID,
                            title: ex.intl.string(ex.t["g/KRY6"]),
                            description: ex.intl.string(ex.t.JzAmJc),
                            primaryAsset: (0, o.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: st.BADGE_CARD_ID,
                            title: ex.intl.string(ex.t.Bn3CtB),
                            description: ex.intl.string(ex.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, o.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, o.jsx)(sV, { color: ea.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: st.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ex.intl.string(ex.t["MTD+7w"]),
                            description: ex.intl.string(ex.t.Bhs0s6),
                            ctaText: ex.intl.string(ex.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, o.jsx)(sz, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: st.PERMADECOS_CARD_ID,
                            title: ex.intl.string(ex.t.L14NZN),
                            description: ex.intl.string(ex.t.eCZkAI),
                            primaryAsset: (0, o.jsx)(sK, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, A, n, l, r, c, u, m, x, g, t],
                );
            return (0, d.useMemo)(() => E.filter((e) => null != e && !f.includes(e.id)), [E, f]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [a, n] = (0, d.useState)(i?.categories[0] ?? iy.BEST_OF_NITRO),
        l = (0, d.useMemo)(() => s.filter((e) => null != e && e.categories.includes(a)), [s, a]);
    return (0, o.jsxs)("div", {
        className: iD.uW,
        children: [
            (0, o.jsx)(er.D, { variant: "display-sm", className: iD.R_, children: ex.intl.string(ex.t["Uh3+CA"]) }),
            (0, o.jsx)(sP.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: n,
                className: iD.Lq,
                "aria-label": ex.intl.string(ex.t["Uh3+CA"]),
                children: iM.map((e) =>
                    (0, o.jsx)(sP.V.Item, { id: e.id, className: iD.IC, children: e.label() }, e.id),
                ),
            }),
            (0, o.jsx)(
                sy.A,
                {
                    gap: 20,
                    className: iD.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, o.jsx)(
                                so.S,
                                { ...e, glowing: t === e.id, containerClassName: iD.Ui, onFocus: iO },
                                e.id,
                            );
                    }),
                },
                a,
            ),
        ],
    });
}
var ik = s(948562);
let iU = function (e) {
    let { className: t } = e,
        s = (0, sX.DP)();
    return (0, o.jsx)("img", {
        className: m()(ik.D, t),
        src: (0, sY.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iG = s(946062);
let iw = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: s, children: i } = e;
    return t
        ? (0, o.jsxs)("div", {
              className: m()(iG.kL, iG.Gd, iG.Eg),
              children: [(0, o.jsx)(iU, {}), (0, o.jsx)(t3, {}), i],
          })
        : (0, o.jsx)(eN.h, { color: "nitro-pink", className: m()(iG.kL, iG.Gd), offsetBottom: s, children: i });
};
function iB(e) {
    let { glowingPerkId: t = null } = e,
        s = iT();
    return (0, o.jsx)(sx, {
        sectionClassName: sg.uW,
        heading: (0, o.jsx)(er.D, { variant: "display-sm", className: sg.R_, children: ex.intl.string(ex.t.Aw5DRm) }),
        grid: (0, o.jsx)(o.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, o.jsx)(
                    so.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: m()(sg.Nr, { [sg.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function iH(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            a = arguments.length > 4 ? arguments[4] : void 0,
            n = (0, x.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
            l = d.useRef(!1);
        d.useEffect(() => {
            if (!t || l.current) return;
            let s = { behavior: n ? "auto" : "smooth", block: i, inline: a },
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
        }, [t, n, i, a, ...s]),
            d.useEffect(() => {
                t || (l.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], s, i);
}
var iF = s(92737);
let iV = "/assets/cd2be35d285d4675.svg",
    iz = (e) => {
        let { userId: t } = e,
            s = (0, G.ds)(),
            { isInNitroHomeHeaderTreatment: i } = V("nitro_member_hub_header"),
            a = (0, g.zy)();
        d.useEffect(() => {
            f.h.wait(async () => {
                let e = [(0, X.Ay)()];
                null != t && e.push((0, q.A)(t)), await Promise.all(e);
            });
        }, [t]),
            d.useEffect(() => {
                _(!0);
            }, []),
            (0, et.j)(),
            (0, S.P)(I);
        let n = d.useRef(null),
            l = d.useRef(null),
            r = (0, x.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
            { isReady: c, programReward: u } = (0, Q.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: h,
                glowingSectionId: N,
                glowingPerkId: A,
                scrollBlock: E,
                scrollInline: b,
            } = d.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(iF.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        iH(h ?? "", null != h, E, b);
        let [R, _] = d.useState(!1),
            v = (0, ee.p)(),
            T = d.useRef(null),
            [P, y] = d.useState(!1),
            M = null != v && null != r && r.status === e1.Dmq.CANCELED,
            D = (0, es.iU)(tV.gD.PREMIUM_MONTH_TIER_2, v, r),
            O = !P && M,
            U = null != (0, x.bG)([Z.A], () => (null != t ? Z.A.getUserProfile(t) : null)) && (c || null != u),
            w = (0, $.TF)({ location: "PremiumSubscriberHome" }),
            B = (0, eh.q)(r, w === $.Iz.STICKY_BAR),
            [H, F] = (0, Y.iP)(
                null != B && U && r?.id != null ? z.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                r?.id ?? "",
                { cooldownDurationMs: J.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ei = null != r && r.status === e1.Dmq.CANCELED,
            ea = i && !s && !ei,
            { analyticsLocations: en } = (0, C.Ay)(j.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [el, er] = d.useState(!1);
        return U
            ? (0, o.jsxs)(K.Gt, {
                  className: m()(iG.xW, iG.Gd),
                  ref: n,
                  children: [
                      (0, o.jsx)(iw, {
                          shouldRenderNitroHomeHeaderExperiment: ea,
                          gradientOffsetBottom: s ? 0.55 : 0.8,
                          children: (0, o.jsxs)(C.f5, {
                              value: en,
                              children: [
                                  (0, o.jsx)(W.L, {
                                      innerRef: T,
                                      onChange: (e) => y(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, o.jsx)(tX, {
                                          buttonVisibilityRef: T,
                                          className: iG.v1,
                                          userDiscountOffer: v,
                                          discountedPrice: D,
                                      }),
                                  }),
                                  (0, o.jsx)(iB, { glowingPerkId: A }),
                                  (0, o.jsx)(sv, { glowingPerkId: A, glowingSectionId: N }),
                                  (0, o.jsx)(iL, { glowingPerkId: A }),
                                  (0, o.jsx)(eC, {
                                      className: iG.Zy,
                                      location: j.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e1.liQ.NITRO_HOME, section: e1.JJy.GIFT_BANNER },
                                  }),
                                  (0, o.jsx)("div", { className: iG.hz }),
                                  (0, o.jsx)(W.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !el &&
                                              (k.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: en,
                                              }),
                                              er(!0));
                                      },
                                      children: (0, o.jsx)("div", { ref: l, className: iG._Z }),
                                  }),
                                  (0, o.jsx)("img", {
                                      src: iV,
                                      className: iG.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ex.intl.string(ex.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      M &&
                          null != D &&
                          (0, o.jsx)(sS, {
                              isVisible: O && R,
                              premiumSubscription: r,
                              churnDiscountOffer: v,
                              discountedPrice: D,
                          }),
                      null != H &&
                          null != B &&
                          null != r &&
                          (0, o.jsx)(ef, { premiumSubscription: r, content: B, markAsDismissed: F }),
                  ],
              })
            : ea
              ? (0, o.jsxs)("div", {
                    className: m()(iG.kL, iG.Lq, iG.TN, iG.Eg),
                    children: [
                        (0, o.jsx)(t3, {}),
                        (0, o.jsx)("div", { className: iG.S, children: (0, o.jsx)(p.y, {}) }),
                    ],
                })
              : (0, o.jsx)("div", { className: m()(iG.kL, iG.Lq), children: (0, o.jsx)(p.y, {}) });
    };
var iW = s(286320),
    iK = s(727949),
    iY = s(440005),
    iX = s(26508),
    iQ = s(735668),
    iZ = s(366010),
    iq = s(303136);
let iJ = function (e) {
    let t,
        { className: s } = e,
        i = (0, tN.TM)(),
        a = (0, iZ.q)((0, sX.Ay)());
    return (
        (t = i
            ? a
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : a
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, o.jsx)("div", {
            className: s,
            children: (0, o.jsx)(
                iq.A,
                {
                    fallbackImage: a
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, o.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var i$ =
        (((c = {}).HOME = "home"),
        (c.WHATS_NEW = "whatsNew"),
        (c.BEST_OF_NITRO = "bestOfNitro"),
        (c.PLANS = "plans"),
        (c.COMPARE = "compare"),
        c),
    i0 = s(870408);
let i1 = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        a = (0, en.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        n = { section: e1.JJy.MARKETING_FLOATING_CTA };
    return (0, o.jsx)(ei.animated.div, {
        className: i0.i,
        style: a,
        "data-mtctest-ignore": "true",
        children: (0, o.jsxs)("div", {
            className: i0.U,
            children: [
                (0, o.jsx)(tt.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: n,
                }),
                (0, o.jsx)(eA.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var i2 = s(80933);
let i3 = function () {
    let e = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)("div", {
                className: i2.BI,
                children: (0, o.jsx)(tE, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tj.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, o.jsx)("img", { src: tw, alt: "", className: i2.Q }),
                }),
            }),
            (0, o.jsx)(tR, {
                isMotionReduced: e,
                boltContainerClassName: i2.nJ,
                carContainerClassName: i2.IN,
                hammerContainerClassName: i2.Gj,
                keyContainerClassName: i2.FV,
                starContainerClassName: i2.E1,
                boltAssetClassName: i2.j7,
                carAssetClassName: i2.or,
                hammerAssetClassName: i2.Wv,
                keyAssetClassName: i2.rs,
                starAssetClassName: i2.OY,
            }),
        ],
    });
};
var i6 = s(296725);
let i8 = d.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, C.Ay)(j.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, o.jsx)(C.f5, {
        value: s,
        children: (0, o.jsx)("div", {
            ref: t,
            className: i6.kL,
            children: (0, o.jsxs)("div", {
                className: i6.hQ,
                children: [
                    (0, o.jsx)(i3, {}),
                    (0, o.jsx)(er.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: i6.RH,
                        children: ex.intl.string(ex.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
i8.displayName = "PremiumMarketingFooter";
var i9 = s(939249);
let i7 = function (e) {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        a = {
            [i$.HOME]: ex.intl.string(ex.t.uGRXjS),
            [i$.WHATS_NEW]: ex.intl.string(ex.t["mfcR/v"]),
            [i$.BEST_OF_NITRO]: ex.intl.string(ex.t.xQKkE8),
            [i$.PLANS]: ex.intl.string(ex.t.wyNMnm),
            [i$.COMPARE]: ex.intl.string(ex.t.pwD7If),
        },
        n = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, tq.Gh)("premium_marketing_nav_bar") && null != n,
        r = d.useRef(null),
        c = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, o.jsxs)(tZ.A, {
        className: t1.TQ,
        transparent: !0,
        children: [
            (0, o.jsxs)("div", {
                className: t1.Wc,
                children: [
                    (0, o.jsxs)("div", {
                        className: t1.wG,
                        children: [
                            (0, o.jsx)(ed.t, { className: t1.nE, colorClass: t1.oG }),
                            (0, o.jsx)("div", {
                                className: t1.zc,
                                role: "tablist",
                                "aria-label": ex.intl.string(ex.t.O9MiXY),
                                children: c.map((e) => {
                                    let t = s === e.id,
                                        i = a[e.id];
                                    return (0, o.jsxs)(
                                        i9.D,
                                        {
                                            role: "tab",
                                            "aria-selected": t,
                                            className: t1.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, o.jsx)(ec.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                t && (0, o.jsx)("div", { className: t1.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: t1.MQ,
                        children: [
                            l &&
                                (0, o.jsx)(t0.l, { ref: r, size: "sm", location: j.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, o.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            l && i && (0, o.jsx)(t$.O, { targetElementRef: r }),
        ],
    });
};
var i5 = s(704333),
    i4 = s(414499),
    ae = s(597770),
    at = s(500060),
    as = s(866665),
    ai = s(406860),
    aa = s(870975),
    an = s(91757);
function al() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, ai.A)({ boxType: ss.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: i5.B, text: ex.intl.string(sn.default.MUypiB) },
            { icon: i4.h, text: ex.intl.string(sn.default.ec5Rdd) },
            { icon: ae.o, text: ex.intl.string(sn.default["9t2CzW"]), tooltip: sn.default.AyECej },
            { icon: at.o, text: ex.intl.string(sn.default.R7YJAY) },
        ];
    return (0, o.jsx)(W.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, o.jsx)("div", {
            ref: e,
            className: an.iE,
            children: (0, o.jsxs)("div", {
                className: an.Nr,
                children: [
                    (0, o.jsxs)("div", {
                        className: an.j,
                        children: [
                            (0, o.jsx)("div", { className: an._g }),
                            (0, o.jsx)("div", { className: an.$h }),
                            (0, o.jsx)("div", { className: an.Rv }),
                            (0, o.jsx)("div", { className: an.Lw }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: an.CT,
                        children: [
                            (0, o.jsxs)("div", {
                                className: an.Qs,
                                children: [
                                    (0, o.jsxs)("div", {
                                        children: [
                                            (0, o.jsx)(er.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: an.R_,
                                                children: ex.intl.string(sn.default.rkt1aw),
                                            }),
                                            (0, o.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, o.jsxs)(
                                                            "div",
                                                            {
                                                                className: an.yf,
                                                                children: [
                                                                    (0, o.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, o.jsx)(ec.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, o.jsx)("div", {
                                                                            className: an.Jn,
                                                                            children: (0, o.jsx)(as.m, {
                                                                                text: ex.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, o.jsx)(t9.m, {
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
                                                    (0, o.jsx)("div", {
                                                        className: an.xF,
                                                        children: (0, o.jsx)(tt.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tV.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: an.WE,
                                        children: (0, o.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ex.intl.format(sn.default.KDKdWi, { termsLink: (0, aa.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, o.jsx)("div", {
                                className: an.r1,
                                children: (0, o.jsx)("img", {
                                    className: an.wm,
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
var ar = s(750338),
    ac = s(280041),
    ao = s(856556);
function ad(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: a,
        isReducedMotion: n,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, o.jsxs)("div", {
        className: m()(ao.boxBackdrop, t),
        children: [
            (0, o.jsx)(er.D, {
                className: ao.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, o.jsx)("div", { className: ao.highlightBento, children: r }),
            (0, o.jsx)("div", {
                className: ao.bentoBoxesGrid,
                children: s.map((e, t) => {
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
                    return (0, o.jsx)(o.Fragment, {
                        children: e.map((e) =>
                            (0, o.jsx)(
                                ar.A,
                                { index: t + +!!l, ...e, size: s, shouldLoadVideo: a, isReducedMotion: n },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let au = d.memo(function (e) {
        let t = (0, t6.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, ac.Ay)(t);
        return (0, o.jsx)(ad, {
            boxLayout: s,
            title: ex.intl.string(ex.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, o.jsx)(al, {}) : null,
            ...e,
        });
    }),
    am = d.memo(function (e) {
        let { bestOfBoxes: t } = (0, ac.Ay)();
        return (0, o.jsx)(ad, { boxLayout: t, title: ex.intl.string(ex.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var ag = s(526292),
    ax = s(236834),
    ap = s(45861);
function af(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t?.id, size: eK._3.SIZE_24, animateOnHover: !0 });
    return (0, o.jsx)("div", {
        className: ap.$6,
        children: (0, o.jsxs)("div", {
            className: ap.sc,
            children: [
                (0, o.jsx)("div", {
                    className: ap.kR,
                    children: (0, o.jsx)(eY.eu, { src: s, "aria-label": t.username, size: eK._3.SIZE_32, ...i }),
                }),
                (0, o.jsx)(er.D, {
                    variant: "heading-sm/normal",
                    className: ap.FS,
                    color: "text-strong",
                    children: ex.intl.format(ex.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var ah = s(579245),
    aN = s(369805);
let aA = function () {
    let e = (0, aN.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, o.jsx)(eV, { text: e });
};
var aj = s(97352);
function aC() {
    let e = (0, x.bG)([aj.A], () => aj.A.getForSkuAndInterval((0, eO.mH)(tV.pe.TIER_0), tV.WT.MONTH));
    return null != e ? (0, eO.sS)(e) : "\u2026";
}
var aE = s(188393);
let ab = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        i = (0, tN.TM)();
    return (0, o.jsxs)("div", {
        "aria-hidden": !0,
        className: aE.YU,
        children: [
            (0, o.jsx)(tT, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: aE.wG,
                assetClassName: aE.lu,
            }),
            (0, o.jsx)(tR, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: aE.nJ,
                carContainerClassName: aE.IN,
                hammerContainerClassName: aE.Gj,
                keyContainerClassName: aE.FV,
                starContainerClassName: aE.E1,
                boltAssetClassName: aE.j7,
                carAssetClassName: aE.or,
                hammerAssetClassName: aE.Wv,
                keyAssetClassName: aE.rs,
                starAssetClassName: aE.OY,
            }),
        ],
    });
};
var aR = s(469408);
let a_ = d.memo(
    d.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: a } = e,
            { analyticsLocations: n } = (0, C.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
            l = aC(),
            r = (0, ax.A)(),
            c = null != r,
            { visibilityPercentageRef: d, visibilityPercentage: u } = eH(
                !(0, x.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
            ),
            g = (0, iW.b)(),
            p = !c && g.length > 0,
            f = (0, ew.c)(eE.C.MARKETING_PAGE_BANNER),
            h = null != f && "marketingPageBanner" === f.properties.properties.oneofKind,
            N = (0, ag.ar)() && !h,
            A = (0, eU.O)(),
            E = (null != A && tV.U4.includes(A.discountId)) || h;
        return (0, o.jsx)(C.f5, {
            value: n,
            children: (0, o.jsx)("div", {
                ref: t,
                className: m()(aR.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, o.jsx)("div", {
                    ref: d,
                    children: (0, o.jsxs)("div", {
                        className: aR.hQ,
                        children: [
                            (0, o.jsx)(ab, { containerVisibilityPercentage: u }),
                            N && (0, o.jsx)(aA, {}),
                            (0, o.jsx)("div", {
                                className: aR.s8,
                                children: (0, o.jsx)(tm.F, {
                                    forceLevel: 1,
                                    children: (0, o.jsx)(er.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: aR.wx,
                                        children: ex.intl.string(ex.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, o.jsxs)("div", {
                                className: aR.rf,
                                children: [
                                    c &&
                                        (0, o.jsx)("div", {
                                            className: aR.eZ,
                                            children: (0, o.jsx)(af, { referrer: r }),
                                        }),
                                    p &&
                                        (0, o.jsx)("div", {
                                            className: aR.Qn,
                                            children: (0, o.jsx)(ah.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, o.jsxs)("div", {
                                        className: N ? aR.es : aR.UJ,
                                        children: [
                                            (0, o.jsx)(tt.A, {
                                                size: "md",
                                                fullWidth: N,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: E && null == i ? tV.pe.NONE : i,
                                                buttonTextOverride: E ? ex.intl.string(ex.t["2pG5Ga"]) : void 0,
                                            }),
                                            !N && (0, o.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: aR.iQ,
                                        children: (0, o.jsx)(ec.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: l }),
                                        }),
                                    }),
                                    null != f &&
                                        "marketingPageBanner" === f.properties.properties.oneofKind &&
                                        (0, o.jsx)(ez.x, {
                                            componentId: f.id,
                                            promotionBannerMarketingComponentFields:
                                                f.properties.properties.marketingPageBanner,
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
var av = s(820081),
    aT = s(140735),
    aI = s(401432),
    aS = s(580630),
    aP = s(795269),
    ay = s(773669),
    aM = s(84483),
    aD = s(864386),
    aO = s(799642),
    aL = s(202600);
function ak(e) {
    let { includes: t } = e;
    return t
        ? (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(av.B, { size: "sm", color: ea.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, o.jsx)(aT.A, { children: ex.intl.string(ex.t["tq+6t/"]) }),
              ],
          })
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(aI.a, { size: "xs", color: ea.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, o.jsx)(aT.A, { children: ex.intl.string(ex.t.l4qZrp) }),
              ],
          });
}
function aU(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, o.jsxs)("tr", {
        className: m()(aO.nM, aO.WQ),
        children: [
            (0, o.jsx)("th", {
                scope: "row",
                className: aO.nx,
                children: (0, o.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, o.jsx)("td", {
                className: aO.Hn,
                children:
                    null != s.text
                        ? (0, o.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, o.jsx)(ak, { includes: !!s.includes }),
            }),
            (0, o.jsx)("td", {
                className: aO.Hn,
                children:
                    null != i.text
                        ? (0, o.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, o.jsx)(ak, { includes: !!i.includes }),
            }),
        ],
    });
}
function aG(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, o.jsxs)("tbody", {
        children: [
            (0, o.jsx)("tr", {
                className: m()(aO.nM, aO.Gf),
                children: (0, o.jsxs)("td", {
                    className: aO.nx,
                    colSpan: 3,
                    children: [
                        (0, o.jsx)(er.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, o.jsx)(ec.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, o.jsx)(aU, { ...e }, e.id)),
        ],
    });
}
function aw(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tV.PremiumTypes.TIER_0 ? ex.intl.string(ex.t.tUbSDK) : ex.intl.string(ex.t.Ipxkog);
    return (0, o.jsxs)("div", {
        className: aO.nn,
        children: [
            (0, o.jsxs)("div", {
                className: aO.KS,
                children: [
                    (0, o.jsx)(ed.t, { colorClass: aO.oG }),
                    (0, o.jsx)(er.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, o.jsx)(er.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function aB(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: a } = e,
        n = i ? a : (0, aS.$g)(s.amount, s.currency);
    return (0, o.jsx)("thead", {
        children: (0, o.jsxs)("tr", {
            className: aO.U1,
            children: [
                (0, o.jsx)("th", {
                    scope: "col",
                    className: aO.Cr,
                    children: (0, o.jsx)(er.D, { variant: "heading-xl/bold", children: ex.intl.string(ex.t.ED4UVD) }),
                }),
                (0, o.jsx)("th", {
                    scope: "col",
                    className: aO.Hn,
                    children: (0, o.jsx)(aw, {
                        premiumType: tV.PremiumTypes.TIER_0,
                        priceString: (0, aS.$g)(t.amount, t.currency),
                    }),
                }),
                (0, o.jsx)("th", {
                    scope: "col",
                    className: aO.Hn,
                    children: (0, o.jsx)(aw, { premiumType: tV.PremiumTypes.TIER_2, priceString: n }),
                }),
            ],
        }),
    });
}
let aH = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: a = tV.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: n } = (0, C.Ay)(j.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, eG.V)(),
            r = l?.subscription_trial?.sku_id,
            c = (0, eU.O)(),
            u = (0, es.YJ)(c),
            g = null != c && (0, es.U9)(c, tV.pe.TIER_2) && u === tV.gD.PREMIUM_MONTH_TIER_2,
            x = (0, es.N1)(u),
            p = null != x ? `${x}/${(0, eO.FJ)(tV.WT.MONTH)}` : "",
            f = (0, eO.JM)(tV.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eO.JM)(tV.gD.PREMIUM_MONTH_TIER_2),
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
                            label: ex.intl.string(aD.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: a, multiplier: n } = (0, s2.lk)(it.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = sf.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sh.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, aM.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ex.intl.string(ex.t.NG1e6l),
                            subtitle: ex.intl.format(sn.default.uJcbMv, {
                                termsLink: eD.A.getArticleURL(e1.MVz.NITRO_2_POINT_0),
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
                                label: ex.intl.string(sE.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        a &&
                            i.push({
                                id: 27,
                                label: ex.intl.formatToPlainString(ex.t.Uhemob, { bonusOrbMultiplier: n }),
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
                                    tier0ColumnData: { text: (0, eO.EJ)(tV.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eO.EJ)(tV.PremiumTypes.TIER_2) },
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
                                        numBoosts: tV.M4,
                                        percentageOff: (0, aS.l9)(ay.default.locale, tV.oX / 100),
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
            t = (0, o.jsx)(aP.R, { className: m()(aO.Io, aO.SP), text: e });
        }
        let A = r === tV.pe.TIER_0 || a === tV.PremiumTypes.TIER_0;
        return (0, o.jsx)(C.f5, {
            value: n,
            children: (0, o.jsxs)("div", {
                className: m()(aO.zr, s),
                children: [
                    (0, o.jsx)(er.D, {
                        className: aO.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: ex.intl.string(ex.t.DbPgAd),
                    }),
                    (0, o.jsxs)("div", {
                        className: aO.wY,
                        children: [
                            (0, o.jsxs)("div", {
                                className: m()(aO.fO, { [aO.Vd]: A, [aO.hA]: !A }),
                                children: [
                                    !A && t,
                                    (0, o.jsx)("div", { className: aO.xQ }),
                                    (0, o.jsxs)("div", {
                                        className: aO.wN,
                                        children: [
                                            (0, o.jsx)("img", { src: aL, alt: "", className: aO.kQ }),
                                            (0, o.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: aO.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, o.jsxs)("table", {
                                className: aO.tp,
                                children: [
                                    (0, o.jsx)(aB, {
                                        tier0Price: f,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: g,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    N.map((e) => (0, d.createElement)(aG, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    aF = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, d.useCallback)(
                (e) => {
                    let s = r.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, a] = (0, d.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [n, l] = (0, d.useState)(e[0]);
        (0, d.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && l(e[0]);
        }, [i]);
        let r = (0, d.useRef)({});
        return (
            (0, d.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        a((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
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
                activeSectionId: n,
                setActiveSectionId: l,
            }
        );
    };
var aV = s(818348),
    az = s(808557);
let aW = () => {
    let e = (0, g.zy)();
    (0, S.P)(I);
    let t = d.useRef(null),
        s = d.useRef(null),
        i = d.useRef(null),
        a = d.useRef(null),
        n = d.useRef(null),
        l = d.useRef(null),
        r = (0, x.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        [c, u] = d.useState(r);
    d.useEffect(() => {
        if (r) return void u(!0);
        let e = s.current;
        if (null != e) return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
        function t(t) {
            t.target === e && u(!0);
        }
    }, [r]);
    let [p, f] = d.useState(!1),
        [h, N] = d.useState(!1),
        [A, E] = d.useState(!1),
        [b, R] = d.useState(!1),
        _ = (0, x.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        v = null != _ ? (0, eO.EL)(_) : null,
        T = null != v ? eO.Ay.getSkuIdForPlan(v.planId) : null,
        P = null !== T && T !== tV.pe.TIER_2 ? tV.pe.TIER_2 : null,
        y = (0, eL.cg)(),
        { analyticsLocations: M } = (0, C.Ay)(j.A.PREMIUM_MARKETING);
    d.useEffect(() => {
        R(!0);
    }, []);
    let D = (0, iX.DK)(iY.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: O } = (0, s2.lk)(it.rE.NITRO_HOME_MARKETING),
        U = D && O ? ac.NI.COMBINED_ORBS : O ? ac.NI.ORB_MULTIPLIER : D ? ac.NI.ORB_REWARDS : null,
        G = d.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t ? U : t === ac.NI.THREE_P_PROMOTIONS ? ac.NI.THREE_P_PROMOTIONS : null;
        }, [e.search, U]);
    iH(G ?? "", null != G);
    let { navBarSections: w, activeSectionId: B } = aF([i$.HOME, i$.WHATS_NEW, i$.BEST_OF_NITRO, i$.PLANS, i$.COMPARE]),
        { home: H, whatsNew: F, bestOfNitro: V, plans: z, compare: Y } = w,
        X = (0, o.jsxs)("div", {
            ref: s,
            className: m()(az.kL, az.Gd, az.iI, { [az.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(iJ, { className: az.yH }),
                (0, o.jsx)(i7, { navBarSections: w, activeSectionId: B, isAnimationComplete: c }),
                (0, o.jsxs)("div", {
                    className: az.Qr,
                    children: [
                        (0, o.jsx)("div", {
                            className: az.qY,
                            ref: H.ref,
                            children: (0, o.jsx)(W.L, {
                                innerRef: a,
                                onChange: (e) => f(e),
                                threshold: 0,
                                active: !0,
                                children: (0, o.jsx)(a_, {
                                    ref: a,
                                    subscriptionTier: P,
                                    isEligibleForBogoPromotion: y,
                                }),
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: az.So,
                            ref: F.ref,
                            children: (0, o.jsx)(au, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, o.jsx)("div", {
                            className: az.KQ,
                            ref: V.ref,
                            children: (0, o.jsx)(am, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, o.jsx)("div", {
                            className: az.s5,
                            ref: z.ref,
                            children: (0, o.jsx)(W.L, {
                                innerRef: i,
                                onChange: (e) => N(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, o.jsx)(iQ.jP, { innerRef: i }),
                            }),
                        }),
                        (0, o.jsx)("div", { className: az.aC, ref: Y.ref, children: (0, o.jsx)(aH, {}) }),
                    ],
                }),
                (0, o.jsx)(W.L, {
                    innerRef: n,
                    onChange: (e) => {
                        e &&
                            !A &&
                            (k.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            E(!0));
                    },
                    children: (0, o.jsx)("div", { ref: n, className: az._Z }),
                }),
                (0, o.jsx)(i8, { ref: l }),
                (0, o.jsx)(i1, { isVisible: !p && !h && b, subscriptionTier: P, isEligibleForBogoPromotion: y }),
                (0, o.jsx)(iJ, { className: az.MF }),
            ],
        });
    return (0, o.jsx)(t7.N, {
        theme: aV.NJ.DARKER,
        children: (e) => (0, o.jsx)(K.Gt, { className: m()(az.XG, e), ref: t, children: X }),
    });
};
var aK = s(862482),
    aY = s(412260),
    aX = s(662367),
    aQ = s(374403),
    aZ = s(396375),
    aq = s(815846),
    aJ = s(860839),
    a$ = s(695366),
    a0 = s(835968);
let a1 = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: a, textColor: n } = e,
        l = (0, ag.ar)();
    if (null == i) return null;
    let r = null != i ? eO.Ay.getPremiumPlanItem(i) : null;
    if (
        (eO.Ay.isBoostOnlySubscription(i)
            ? (t = ex.intl.string(ex.t.Uj0md3))
            : null != r && (t = eO.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function c() {
        return (0, ey.openUserSettings)(eP.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? eO.Ay.getSkuIdForPlan(r.planId) : null) === tV.pe.TIER_1;
    return (
        (s = null != n ? n : l ? "text-overlay-light" : "text-default"),
        (0, o.jsxs)(t5.Z, {
            className: m()(a0.kL, a, { [a0.He]: l }),
            type: t5.Z.Types.CUSTOM,
            children: [
                (0, o.jsx)(a$.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: m()(a0.Kk, { [a0.Pt]: l }),
                }),
                (0, o.jsx)(ec.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? ex.intl.format(ex.t["tYuv+T"], {
                              helpdeskArticle: eD.A.getArticleURL(e1.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: c,
                          })
                        : ex.intl.format(ex.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: c }),
                }),
            ],
        })
    );
};
var a2 = s(147935);
let a3 = function (e) {
    let { lifted: t = !1 } = e;
    return (0, o.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: m()(a2.zr, { [a2.N]: t }),
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
                        (0, o.jsx)("stop", { className: a2.eq }),
                        (0, o.jsx)("stop", { offset: "0.339235", className: a2.l_ }),
                        (0, o.jsx)("stop", { offset: "0.492065", className: a2.sM }),
                        (0, o.jsx)("stop", { offset: "0.823236", className: a2.zi }),
                        (0, o.jsx)("stop", { offset: "0.899558", className: a2.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var a6 = s(900797),
    a8 = s(847374),
    a9 = s(812993),
    a7 = s(464769);
function a5(e) {
    let { className: t } = e;
    return (0, o.jsx)(a9.Lp, { className: m()(a7.T, t), text: ex.intl.string(ex.t.EYxi0o) });
}
var a4 = s(904788),
    ne = s(507553),
    nt = s(255438);
let ns = "/assets/5b4fec8511c3676a.svg",
    ni = "/assets/0838bda6ecd20d91.svg";
function na(e, t, s) {
    return (0, sY.M)(e) ? t : s;
}
var nn = s(446278);
function nl(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, o.jsxs)(i9.D, {
        onClick: s,
        className: nn.customButton,
        children: [
            t ? ex.intl.string(ex.t.maZaN3) : ex.intl.string(ex.t["37C26f"]),
            t
                ? (0, o.jsx)(a6.t, { size: "md", color: "currentColor", className: nn.arrow })
                : (0, o.jsx)(a8.a, { size: "md", color: "currentColor", className: nn.arrow }),
        ],
    });
}
function nr(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: a,
            imageClassName: n,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: c = !1,
        } = e,
        { analyticsLocations: d } = (0, C.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, o.jsx)(C.f5, {
        value: d,
        children: (0, o.jsxs)("div", {
            className: m()(nn.perkCard, i),
            children: [
                r
                    ? (0, o.jsx)(a4.A, {
                          className: nn.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                c ? (0, o.jsx)(a5, { className: nn.perkCardEarlyAccessBadge }) : null,
                (0, o.jsx)("img", { src: a, alt: "", className: m()(n, nn.perksCardArt) }),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsxs)(er.D, {
                            variant: "heading-lg/extrabold",
                            className: nn.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, o.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: nn.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let nc = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [a, n] = d.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, sX.Ay)(),
                a = (0, sq.X)("usePerkCards"),
                n = (0, th.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eO.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, nt.Xq)(tV.f3 / 1024, { useKibibytes: !0 });
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
                    imageSource: na(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                        if (a)
                            return n
                                ? ex.intl.formatToPlainString(ex.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : ex.intl.formatToPlainString(ex.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                ne.A.setState({ scrollPosition: iI._F.TRY_IT_OUT }),
                                    t(eP.X.PROFILE_PANEL, { analyticsLocations: e });
                            }
                        }
                        return n
                            ? ex.intl.format(ex.t.aj1pfZ, { onCheckItOutClick: t })
                            : ex.intl.format(ex.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: ex.intl.string(ex.t.BUScid),
                    description: ex.intl.string(ex.t.vN6XpQ),
                    imageSource: na(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: na(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: na(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ex.intl.string(ex.t["lGcW+c"]),
                    description: ex.intl.string(ex.t["/fDyO+"]),
                    imageSource: na(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ex.intl.string(ex.t["1c+xwT"]),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: na(i, ni, ns),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: na(i, ni, ns),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: na(i, ni, ns),
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
                    imageSource: na(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: na(i, iS, iP),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: nn }),
        r = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        { analyticsLocations: c } = (0, C.Ay)(),
        u = [
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
    return (0, o.jsxs)("div", {
        className: m()(nn.perksContainer, t, {
            [nn.partiallyHidden]: i && !a,
            [nn.subscriberNitroHome]: i,
            [nn.reducedMotion]: r,
        }),
        children: [
            (0, o.jsx)(er.D, {
                variant: "heading-xxl/extrabold",
                className: nn.perksTitle,
                children: i ? ex.intl.string(ex.t.QX14gI) : ex.intl.string(ex.t.RGadQR),
            }),
            (0, o.jsx)("div", {
                className: m()(nn.perkCardContainer, { [nn.perkCardContainerExpanded]: a }),
                children: u.map((e) => null != e && (0, o.jsx)(nr, { ...e }, e.title)),
            }),
            i &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)("div", {
                            className: m()({ [nn.sizeGizmo]: !a, [nn.sizeGizmoExpanded]: a }),
                            children: (0, o.jsx)(nl, {
                                onClick: function () {
                                    k.default.track(e1.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: c,
                                        was_expanded: a,
                                    }),
                                        n(!a);
                                },
                                isShowingAll: a,
                            }),
                        }),
                        (0, o.jsx)("div", { className: m()(nn.cover, { [nn.hidden]: a }) }),
                    ],
                }),
        ],
    });
};
var no = s(194509),
    nd = s(14238);
let nu = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: a } = e,
        n = (0, en.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: e1.JJy.MARKETING_FLOATING_CTA },
        r = (0, sX.Ay)(),
        c = (0, iZ.M)(r);
    return (0, o.jsx)(ei.animated.div, {
        className: m()(nd.iE, { [nd.H8]: i, [nd.q4]: !t }),
        style: n,
        children: (0, o.jsxs)("div", {
            className: i ? nd.zW : nd.iJ,
            children: [
                (0, o.jsx)(aZ.A, {
                    color: c ? aK.XD.BRAND_INVERTED : void 0,
                    className: m()(nd.x6, { [nd.Ph]: c }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: a,
                    shinyButtonClassName: c ? void 0 : nd.PJ,
                }),
                (0, o.jsx)(no.A, { className: nd.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var nm = s(360101);
function ng(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: s,
            containerClassName: i,
            buttonClassName: a,
            isApplicationHome: n,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        c = r
            ? (0, o.jsx)(aZ.A, {
                  color: l ? aK.XD.BRAND_INVERTED : void 0,
                  className: m()(nm.x6, nm.Ph, a, { [nm.Sq]: t && n, [nm.MF]: n && !l }),
                  shinyButtonClassName: l ? void 0 : nm.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, o.jsx)(aZ.A, {
                  color: l || !n ? aK.XD.BRAND_INVERTED : void 0,
                  className: m()(nm.x6, nm.Ph, a, { [nm.Sq]: t && n, [nm.MF]: n && !l }),
                  subscriptionTier: s,
              }),
        d = t && n ? null : (0, o.jsx)(no.A, { className: m()(nm.x6, a), color: n ? void 0 : aK.XD.WHITE });
    return (0, o.jsxs)("div", { className: m()(nm.UD, i), children: [c, " ", d] });
}
function nx() {
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(a4.p, { className: nm.zd }),
            (0, o.jsx)(a4.p, { className: nm.G }),
            (0, o.jsx)(a4.p, { className: nm.zy }),
            (0, o.jsx)(a4.p, { className: nm.GX }),
        ],
    });
}
function np(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        a = aC();
    return (0, o.jsx)(ec.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: m()(nm.h_, { [nm.If]: s, [nm.jn]: i }),
        children: ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: a }),
    });
}
let nf = d.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: a, isDarkMode: n } = e,
        { analyticsLocations: l } = (0, C.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ek.QQ)(),
        c = (0, ag.ar)(),
        d = (0, eL.cg)(),
        u = (0, iW.b)().length > 0,
        g = ex.intl.string(ex.t.YCZldK);
    return (0, o.jsx)(C.f5, {
        value: l,
        children: (0, o.jsxs)("div", {
            ref: t,
            className: m()(nm.kL, s, { [nm.V1]: !c, [nm.Q4]: !c && u }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, o.jsxs)("div", {
                    className: c ? nm.I6 : nm.G1,
                    children: [
                        (0, o.jsx)(tm.F, {
                            forceLevel: 1,
                            children: (0, o.jsx)(er.D, {
                                variant: c ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: g,
                            }),
                        }),
                        u
                            ? (0, o.jsx)("div", {
                                  className: nm.DF,
                                  children: (0, o.jsx)(ah.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, o.jsx)(np, {}),
                        d || r
                            ? (0, o.jsx)("div", {
                                  className: nm.UD,
                                  children: (0, o.jsx)(no.A, { className: m()(nm.x6, i), color: aK.XD.WHITE }),
                              })
                            : (0, o.jsx)(ng, {
                                  subscriptionTier: a,
                                  inOfferExperience: c,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        u && (0, o.jsx)(np, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, o.jsx)(nx, {}),
            ],
        }),
    });
});
var nh = s(22118),
    nN = s(111932),
    nA = s(16939);
function nj(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, o.jsx)(a3, { lifted: t }) : null;
}
let nC = () => {
        (0, S.P)(I);
        let e = d.useRef(null),
            t = d.useRef(null),
            s = d.useRef(null),
            i = (0, sX.Ay)(),
            a = (0, sY.M)(i),
            [n, l] = d.useState(!1),
            [r, c] = d.useState(!1),
            [u, g] = d.useState(!1),
            [p, f] = d.useState(!1),
            h = (0, x.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eO.EL)(h) : null,
            A = null != N ? eO.Ay.getSkuIdForPlan(N.planId) : null,
            E = null !== A && A !== tV.pe.TIER_2 ? tV.pe.TIER_2 : null,
            b = (0, eG.V)(),
            R = b?.subscription_trial?.sku_id,
            _ = (0, ag.ar)(),
            v = (0, eL.cg)(),
            T = (0, tq.Gh)("premium-marketing-settings-page"),
            P = v ?? !1,
            y = (0, x.bG)([aY.A], () => {
                let e = aY.A.getMarketingComponentByType(eE.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            M = (0, aQ.Q)(),
            { analyticsLocations: D } = (0, C.Ay)(j.A.PREMIUM_MARKETING);
        d.useEffect(() => {
            f(!0);
        }, []);
        let O = (0, o.jsx)("div", {
            className: nA.dY,
            children: (0, o.jsx)(W.L, {
                innerRef: e,
                onChange: (e) => c(e),
                threshold: 0.1,
                active: !0,
                children: (0, o.jsx)(aJ.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, o.jsx)(aZ.A, {
                        showIcon: !1,
                        subscriptionTier: tV.pe.TIER_0,
                        className: nN.Ph,
                        look: aK.pR.OUTLINED,
                        color: aK.XD.WHITE,
                        buttonShineClassName: nN.Qr,
                    }),
                    tier2CTAButton:
                        R === tV.pe.TIER_0
                            ? (0, o.jsx)(aZ.A, {
                                  showIcon: !1,
                                  subscriptionTier: tV.pe.TIER_2,
                                  className: nN.Ph,
                                  look: aK.pR.OUTLINED,
                                  color: aK.XD.WHITE,
                                  buttonShineClassName: nN.Qr,
                              })
                            : (0, o.jsx)(aZ.A, {
                                  color: aK.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tV.pe.TIER_2,
                                  className: nN.Ph,
                                  hasActivePromotion: P,
                                  textOptions: { textClassName: nN.Ac },
                                  buttonShineClassName: nN.Qr,
                              }),
                }),
            }),
        });
        return (0, o.jsxs)("div", {
            className: nA.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(a1, { premiumSubscription: h, className: m()(nA.R3, { [nA.aZ]: _ }) }),
                _ &&
                    (0, o.jsxs)("div", {
                        className: nA.n1,
                        children: [
                            (0, o.jsx)(nj, { inOfferExperience: _ }),
                            T &&
                                (0, o.jsx)(t0.l, {
                                    className: nA.ij,
                                    size: "md",
                                    location: j.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, o.jsxs)("div", {
                    className: m()({ [nA.V1]: !_ }),
                    children: [
                        null != y && (0, o.jsx)(aq.c, { className: nA.w$, config: y }),
                        (0, o.jsxs)("div", {
                            className: nA.iS,
                            children: [
                                T &&
                                    !_ &&
                                    (0, o.jsx)(t0.l, {
                                        className: nA.ij,
                                        size: "md",
                                        location: j.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, o.jsx)(W.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, o.jsx)(nf, {
                                        ref: t,
                                        subscriptionTier: E,
                                        className: m()({ [nA.p7]: _, [nA.Pw]: _, [nA.AG]: v, [nA.Cv]: null != h }),
                                        isDarkMode: a,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != M && (0, o.jsx)("div", { className: nA.Ol, children: (0, o.jsx)(aX.I, { component: M }) }),
                O,
                (0, o.jsx)(nc, { className: nA.B_ }),
                (0, o.jsx)("div", { className: nA.aC, children: (0, o.jsx)(nh.A, { className: nA.JQ, hideCTAs: !0 }) }),
                (0, o.jsx)("div", { className: nA.hz }),
                (0, o.jsx)(nu, {
                    isVisible: !n && !r && p,
                    subscriptionTier: E,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: v,
                }),
                (0, o.jsx)(W.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !u &&
                            (k.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            g(!0));
                    },
                    children: (0, o.jsx)("div", { ref: s, className: nA._Z }),
                }),
                (0, o.jsx)("img", {
                    src: iV,
                    className: nA.Kw,
                    width: 112,
                    height: 85,
                    alt: ex.intl.string(ex.t.X4IxWL),
                }),
            ],
        });
    },
    nE = function (e) {
        let { entrypoint: t } = e,
            s = (0, eG.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            a = (0, iK.NF)({ trialOffer: s }),
            n = (0, iK.Tp)(),
            l = (0, x.bG)([eJ.A], () => eJ.A.getReminderStateId());
        switch (
            (d.useEffect(() => {
                !0 === a && (0, iK.QG)(), !0 === n && (0, iK.ne)(l), (null != s || null != i) && (0, w.u1)(s, i);
            }, [s, i, a, n, l]),
            t)
        ) {
            case tV.Mf.UserSettings:
                return (0, o.jsx)(nC, {});
            case tV.Mf.ApplicationStoreHome:
                return (0, o.jsx)(aW, {});
            default:
                return null;
        }
    };
var nb = s(972119);
let nR = function (e) {
    let { entrypoint: t = tV.Mf.UserSettings } = e;
    (0, S.P)(I);
    let s = (0, b.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = V("nitro_member_hub_header"),
        a = (0, G.ds)(),
        { sourceAnalyticsLocations: n, analyticsLocations: l } = (0, C.Ay)(j.A.PREMIUM_MARKETING),
        r = (0, x.bG)([L.A], () => L.A.hasFetchedSubscriptions()),
        c = (0, x.bG)([O.A], () => O.A.hasFetchedPaymentSources),
        u = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        v = u?.id,
        T = (0, eG.V)(),
        B = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        H = (0, R.Y)(tV.T7),
        [F, z] = d.useState(!0),
        W = d.useRef(0),
        K = (0, U.YE)(u, tV.PremiumTypes.TIER_2),
        Y = (0, x.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        X = null != Y && Y.status === e1.Dmq.CANCELED;
    (0, iW.b)(),
        d.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                await Promise.all([E.hP(), E.$o(), (0, h.zS)(null, null, e1.tF5.DISCOVERY)]),
                    (W.current = Date.now() - e),
                    z(!1);
            });
        }, []),
        d.useEffect(() => {
            F ||
                k.default.track(e1.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: n,
                    load_duration_ms: W.current,
                });
        }, [n, F]),
        d.useEffect(() => {
            s && (null != T || null != B) && (0, w.u1)(T, B);
        }, [s, T, B]);
    let Q = (0, g.zy)(),
        Z = d.useRef(!1),
        q = r && c && H,
        [J, $] = d.useState(q);
    q && !J && $(!0),
        d.useEffect(() => {
            if (Z.current || !q) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tV.pe.TIER_0, nitro: tV.pe.TIER_2 }[e];
            null != t &&
                ((Z.current = !0),
                (0, y.bG)(e1.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: t, analyticsLocations: l }));
        }, [q, Q.search, l]);
    let ee = (0, x.bG)([M.A], () => M.A.enabled),
        et = t === tV.Mf.ApplicationStoreHome,
        es = ee
            ? (0, o.jsx)(N.A, {})
            : s
              ? (0, o.jsx)(_.uK, {})
              : et && K
                ? (0, o.jsx)(C.f5, { value: l, children: (0, o.jsx)(iz, { userId: v }) })
                : J
                  ? null
                  : (0, o.jsx)("div", { className: m()(nb.kL, nb.Lq), children: (0, o.jsx)(p.y, {}) });
    if (null != es) {
        let e = !ee && !s && et && K;
        return i && e && !a && !X ? es : (0, o.jsxs)(o.Fragment, { children: [et && (0, o.jsx)(A.A, {}), es] });
    }
    return (0, o.jsx)(C.f5, { value: l, children: (0, o.jsx)(nE, { entrypoint: t }) });
};
