s.d(t, { A: () => ah }), s(323874), s(14289), s(35956);
var i,
    n,
    a,
    l,
    r,
    c = s(627968),
    o = s(64700),
    d = s(503698),
    u = s.n(d),
    m = s(873263),
    g = s(17928),
    x = s(289873),
    p = s(228366),
    f = s(73825),
    h = s(974544),
    A = s(107834),
    N = s(793574),
    E = s(688810),
    C = s(277984),
    j = s(86379),
    b = s(160946),
    R = s(545075),
    I = s(840251),
    _ = s(688151);
let T = new I.E([], _.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
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
    G = s(945960);
let w = (0, s(945810).mj)({
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
    let t = w.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
s(321073);
var F = s(554146),
    B = s(269115),
    V = s(689175),
    z = s(131607),
    W = s(961250),
    K = s(366505),
    X = s(321191),
    Y = s(903209),
    Q = s(927813),
    Z = s(107857),
    q = s(131168),
    J = s(482589),
    $ = s(410516),
    ee = s(617498),
    et = s(661531),
    es = s(717421),
    ei = s(331322),
    en = s(297264),
    ea = s(834730),
    el = s(821609),
    er = s(403581),
    ec = s(815021),
    eo = s(576243),
    ed = s(49999),
    eu = s(375708),
    em = s(33125);
function eg(e) {
    let { premiumSubscription: t, content: s, markAsDismissed: i } = e,
        { analyticsLocations: n } = (0, E.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        a = (0, es.z)({
            from: { transform: "translateY(64px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
        });
    return (0, c.jsx)(ee.animated.div, {
        className: em.iE,
        style: a,
        children: (0, c.jsxs)("div", {
            className: em.iJ,
            children: [
                (0, c.jsx)(eo.A, { size: 64, iconSize: 40, color: et.A.colors.WHITE }),
                (0, c.jsxs)("div", {
                    className: em.qX,
                    children: [
                        (0, c.jsxs)(ei.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: em.iQ,
                            children: [
                                (0, c.jsx)(en.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: s.title,
                                }),
                                (0, c.jsx)(ea.E, { variant: "text-sm/medium", color: "text-muted", children: s.body }),
                            ],
                        }),
                        (0, c.jsx)(el.$, {
                            variant: "expressive",
                            icon: er.t,
                            size: "md",
                            text: s.cta,
                            onClick: function () {
                                i(ed.i.TAKE_ACTION),
                                    (0, P.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: n });
                            },
                        }),
                    ],
                }),
                (0, c.jsx)(ec.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eu.intl.string(eu.t.WAI6xu),
                    onClick: () => i(ed.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var ex = s(962008),
    ep = s(315629),
    ef = s(65470),
    eh = s(871261);
let eA = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, E.Ay)(s);
    return (0, c.jsx)(E.f5, {
        value: n,
        children: (0, c.jsxs)(ep.h, {
            className: u()(eh.kL, eh.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: eh.FS,
                    children: [
                        (0, c.jsx)(en.D, {
                            variant: "heading-xxl/bold",
                            className: eh.R_,
                            children: eu.intl.string(eu.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(ea.E, { variant: "text-md/medium", children: eu.intl.string(eu.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: eh.SB,
                            children: (0, c.jsx)(ef.A, {
                                buttonTextOverride: eu.intl.string(eu.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eh._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eN = s(877624);
let eE =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eC(e) {
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
var ej = s(502572),
    eb = s(192308),
    eR = s(775602),
    eI = s(366999),
    e_ = s(531260),
    eT = s(780964),
    ev = s(766075),
    eP = s(786300),
    eS = s(975571),
    ey = s(428262),
    eD = s(960851),
    eM = s(89366),
    eO = s(422936),
    eL = s(732280),
    ek = s(549996),
    eU = s(172218);
function eG() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eU.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var ew = s(949804);
let eH = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: ew.i,
        children: (0, c.jsx)(ea.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var eF = s(371764),
    eB = s(103411),
    eV = s(778712),
    ez = s(97808),
    eW = s(590251),
    eK = s(144165),
    eX = s(854627),
    eY = s(427262),
    eQ = s(851746),
    eZ = s(326084),
    eq = s(664654),
    eJ = s(652215);
function e$() {
    var e, t, s;
    let { referralSentUsers: i } = (0, eq.J)(),
        n = (0, g.bG)([eQ.A], () => eQ.A.getRecipientStatus()),
        a = (0, g.bG)([eQ.A], () => eQ.A.getHasEligibleFriends()),
        l = n.size === eq.Z,
        r =
            ((e = !1 !== a),
            (t = i.length),
            (s = n.size === eq.Z && [...n.values()].every((e) => e === eZ.aK.REDEEMED)),
            e
                ? t === eq.Z
                    ? s
                        ? eu.intl.format(eu.t["1aEjsH"], {
                              helpdeskArticle: eS.A.getArticleURL(eJ.MVz.REFERRAL_PROGRAM),
                          })
                        : eu.intl.format(eu.t["+u3AOO"], {
                              helpdeskArticle: eS.A.getArticleURL(eJ.MVz.REFERRAL_PROGRAM),
                          })
                    : eu.intl.format(eu.t["omMr+V"], { helpdeskArticle: eS.A.getArticleURL(eJ.MVz.REFERRAL_PROGRAM) })
                : eu.intl.format(eu.t["zWhX/Q"], { helpdeskArticle: eS.A.getArticleURL(eJ.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: n.size, hasEligibleFriends: a, allSent: l, bodyText: r };
}
var e0 = s(212737),
    e1 = s(901532);
function e2(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    L.default.track(eJ.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, eb.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        });
}
function e6(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eX.A)({ userId: t.id, size: eV._3.SIZE_24 });
    return (0, c.jsx)(
        ez.eu,
        { className: e1.bj, src: s, "aria-label": (0, eY.mG)(t), size: eV._3.SIZE_24, ...i },
        t.id,
    );
}
function e3(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e1.p, children: t });
}
function e9(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e1.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < eq.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e6, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e3, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function e7(e) {
    let { nReferralsSent: t, imageSize: s = 93, backgroundClassName: i, ringClassName: n } = e;
    return (0, c.jsx)(eW.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e1.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e1.e0,
        overlayClassName: t === eq.Z ? e1.ys : void 0,
        children: (0, c.jsx)(eK._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: s,
            width: s,
            zoomable: !1,
        }),
    });
}
function e5(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: l } = e$();
    return (0, c.jsxs)("div", {
        className: u()(e1.kL, t),
        children: [
            (0, c.jsx)("div", { className: e1.G3, children: (0, c.jsx)(e7, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: e1.IH,
                children: [
                    (0, c.jsx)(e9, { referralSentUsers: s, className: e1.GV }),
                    (0, c.jsxs)("div", {
                        className: e1.n4,
                        children: [
                            (0, c.jsx)(en.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eu.intl.string(eu.t.USo4s7),
                            }),
                            (0, c.jsx)(ea.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, c.jsx)(el.$, {
                        variant: "primary",
                        disabled: !1 === n || !0 === a,
                        text: eu.intl.string(eu.t.Lm2nFc),
                        onClick: () =>
                            e2({ startingScreen: e0.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var e8 = s(792656),
    e4 = s(989349),
    te = s.n(e4),
    tt = s(496431),
    ts = s(499449);
let ti = function (e) {
    let { expiresAt: t, className: s } = e,
        i = (0, tt.A)(te()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: n, hours: a, minutes: l, seconds: r } = i,
        o = [
            { unitValue: n, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: r, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(ts.Xl, s),
        children: [
            (0, c.jsx)(ea.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: eu.intl.string(eu.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: ts.$R,
                children: o.map((e, t) =>
                    (function (e, t) {
                        let s,
                            [i, n] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: ts.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: ts.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: ts.B2,
                                                        children: (0, c.jsx)(ea.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: ts.B2,
                                                        children: (0, c.jsx)(ea.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(ea.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return eu.intl.string(eu.t.ixASa2);
                                                        case "hours":
                                                            return eu.intl.string(eu.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eu.intl.string(eu.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eu.intl.string(eu.t.JhaiLW);
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
                                    (0, c.jsx)(ea.E, {
                                        className: ts.cV,
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
var tn = s(473702),
    ta = s(609425),
    tl = s(660184),
    tr = s(16716);
function tc() {
    let e = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, ta.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eX.A)({ userId: e?.id, size: eV._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eY.mG)(e);
    return (0, c.jsxs)("div", {
        className: tr.kL,
        children: [
            (0, c.jsx)("div", {
                className: tr.my,
                children: (0, c.jsx)(ez.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eV._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: tr.QC, children: (0, c.jsx)(tl.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var to = s(707554),
    td = s(155199);
let tu = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, children: n } = e;
    return (0, c.jsx)(to.F, {
        forceLevel: 1,
        children: (0, c.jsx)(en.D, {
            className: u()(td.w, t, i && td.n),
            variant: "display-md",
            color: s,
            children: n,
        }),
    });
};
var tm = s(728277);
function tg(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: l } = e$();
    return (0, c.jsxs)("div", {
        className: u()(tm.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tm.G3,
                children: (0, c.jsx)(e7, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tm.HP,
                    ringClassName: tm.pZ,
                }),
            }),
            (0, c.jsxs)("div", {
                className: tm.IH,
                children: [
                    (0, c.jsxs)("div", {
                        className: tm.n4,
                        children: [
                            (0, c.jsx)(en.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eu.intl.string(eu.t.USo4s7),
                            }),
                            (0, c.jsx)(ea.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, c.jsx)(e9, { referralSentUsers: s, className: tm.t7 }),
                ],
            }),
            (0, c.jsx)(el.$, {
                variant: "primary",
                disabled: !1 === n || !0 === a,
                text: eu.intl.string(eu.t.Lm2nFc),
                onClick: () =>
                    e2({ startingScreen: e0.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tx = s(702841),
    tp = s(676279),
    tf = s(396583),
    th = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tA = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tN = (e) => {
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
        u = (0, es.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [g, x] = (0, o.useState)(1),
        p = (0, es.z)(
            null != s
                ? {
                      from: { scale: g > 0 ? s.startScale : s.endScale },
                      to: { scale: g > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => x((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [f, h] = (0, o.useState)(1),
        A = (0, es.z)(
            null != t
                ? {
                      from: { blur: f > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: f > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => h((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        N = (0, o.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [E, C] = (0, o.useState)(0),
        [j, b] = (0, o.useState)(1),
        R = (0, es.z)({ xOffset: E, config: { tension: 10, friction: 10, duration: N } });
    return ((0, tf.A)(() => {
        C(j * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e);
    }, N),
    l)
        ? d
        : (0, c.jsx)(ee.animated.div, {
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
                  scale: p.scale,
                  filter: A.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tE = s(181195);
let tC = function (e) {
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
        animationSpeedScale: p = 1,
        blurScale: f = 1,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(tE.nJ, i),
                    children: (0, c.jsx)(tN, {
                        blurAnimationData: { startBlurRadius: 10 * f, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: th.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tA.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
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
                    className: u()(tE.IN, n),
                    children: (0, c.jsx)(tN, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: th.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tA.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
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
                    className: u()(tE.Gj, a),
                    children: (0, c.jsx)(tN, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: th.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tA.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
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
                    className: u()(tE.FV, l),
                    children: (0, c.jsx)(tN, {
                        blurAnimationData: { startBlurRadius: 5 * f, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: th.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tA.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
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
                    children: (0, c.jsx)(tN, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * f, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: th.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tA.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
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
var tj = s(607470);
let tb =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tR = function (e) {
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
                  children: (0, c.jsx)(tN, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: th.SINE },
                      parallaxAnimationData: {
                          pathDirection: tA.UP,
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
                                tj.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tb }),
                                },
                                tb,
                            ),
                  }),
              });
    },
    tI = function (e) {
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
                animationSpeedScale: p = 1,
            } = e,
            f = (0, tx.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
            h = (0, tp.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tR, {
                    supportHEVCAlpha: h,
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(tC, {
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
                    keyAssetClassName: g,
                    starAssetClassName: x,
                    animationSpeedScale: p,
                }),
            ],
        });
    };
var t_ = s(776540);
let tT = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tI, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(t_.wG, s && t_.Vx),
        flyingWumpusAssetClassName: u()(t_.lu, s && t_.ov),
        boltContainerClassName: u()(t_.nJ, s && t_.Wc),
        hammerContainerClassName: u()(t_.Gj, s && t_.XA),
        keyContainerClassName: u()(t_.FV, s && t_.oZ),
        starContainerClassName: u()(t_.E1, s && t_.LN),
        boltAssetClassName: u()(t_.j7, s && t_.QN),
        hammerAssetClassName: u()(t_.Wv, s && t_.B9),
        keyAssetClassName: u()(t_.rs, s && t_.I1),
        starAssetClassName: u()(t_.OY, s && t_.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tv = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tP = s(884888);
let tS = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: x } = eG(!(0, g.bG)([eR.Ay], () => eR.Ay.useReducedMotion)),
        p =
            ((t = { [tv.MORNING]: eu.t["Wvc/I+"], [tv.AFTERNOON]: eu.t["d+0STx"], [tv.EVENING]: eu.t.CqsxKI }),
            eu.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tv.MORNING
                        : s >= 12 && s < 17
                          ? tv.AFTERNOON
                          : tv.EVENING
                ],
            )),
        f = o ?? (r ? (0, c.jsx)(tg, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tP.kL, tP.Eg, i),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(tP.W2, tP.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(ei.B, {
                    align: "start",
                    gap: 32,
                    className: tP.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(ei.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(ei.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(tu, {
                                            className: tP.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: p,
                                        }),
                                        (0, c.jsx)(tc, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tP.y3,
                    children: (0, c.jsx)(tT, { containerVisibilityPercentage: x, compact: null == f }),
                }),
            ],
        }),
    });
};
var ty = s(460508);
let tD =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tM = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, tx.bG)([eR.Ay], () => eR.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: ty.BI,
                    children: (0, c.jsx)(tN, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: th.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tA.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, c.jsx)("img", { src: tD, alt: "", className: ty.Q }),
                    }),
                }),
                (0, c.jsx)(tC, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: ty.Gj,
                    keyContainerClassName: ty.FV,
                    starContainerClassName: ty.E1,
                    hammerAssetClassName: ty.Wv,
                    keyAssetClassName: ty.rs,
                    starAssetClassName: ty.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var tO = s(219351);
let tL = function () {
    let e = (0, tx.bG)([eR.Ay], () => eR.Ay.useReducedMotion);
    return (0, c.jsx)(tC, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tO.cI,
        hammerContainerClassName: tO.qg,
        keyContainerClassName: tO.h2,
        boltContainerClassName: tO.Bz,
        starAssetClassName: tO.ks,
        hammerAssetClassName: tO.GY,
        keyAssetClassName: tO.p4,
        boltAssetClassName: tO.vy,
    });
};
var tk = s(202541);
function tU(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tP.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tP.ap,
            children: [
                (0, c.jsxs)(ei.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, c.jsx)(eH, { text: eu.intl.string(eu.t.yhldRB) }),
                        (0, c.jsxs)(ei.B, {
                            align: "start",
                            gap: 12,
                            className: tP.rG,
                            children: [
                                (0, c.jsx)(tu, { children: eu.intl.format(eu.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)(ea.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: eu.intl.string(eu.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(ei.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, c.jsx)(e8.A, {
                                    size: "md",
                                    buttonTextOverride: eu.intl.string(eu.t["2+luBl"]),
                                    iconOverride: er.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(el.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eu.intl.string(eu.t.Af7ye6),
                                    onClick: () => (0, ev.openUserSettings)(eT.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tP.Hk,
                    children: [(0, c.jsx)(eC, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(tL, {})],
                }),
            ],
        }),
    });
}
function tG(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: n } = e,
        {
            headingText: a,
            headingTop: l,
            showPill: r,
            shouldShowChurnVariant: o,
            premiumSubscription: d,
            userDiscountOffer: m,
            discountedPrice: x,
            buttonVisibilityRef: p,
        } = tH(),
        { isInNitroHomeHeaderTreatment: f } = H("subscriber_home_hero"),
        { analyticsLocations: h } = (0, E.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        A = (0, ek.c)(eN.C.MARKETING_PAGE_BANNER),
        C = (0, eD.cg)(),
        j = null != d && d.status === eJ.Dmq.CANCELED,
        b = f && !j,
        R = null;
    null != A &&
        "marketingPageBanner" === A.properties.properties.oneofKind &&
        (R = (0, c.jsx)(eF.x, {
            componentId: A.id,
            promotionBannerMarketingComponentFields: A.properties.properties.marketingPageBanner,
        }));
    let I = R;
    null == I && n && !b && (I = (0, c.jsx)(e5, {}));
    let _ = (0, eL.V)(),
        T = (0, eO.O)(),
        v = (0, $.U9)(T, tk.pe.TIER_2) ? tk.pe.TIER_2 : void 0,
        P = null != d && d.status !== eJ.Dmq.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
        S = (0, e_.A)(),
        y = S.isFractionalPremiumActive && !P && null == I && !o,
        { visibilityPercentageRef: D, visibilityPercentage: M } = eG(!(0, g.bG)([eR.Ay], () => eR.Ay.useReducedMotion));
    if (i) return (0, c.jsx)(tU, { fpEndsAt: S.currentEntitlementEndsAt, className: t, buttonVisibilityRef: p });
    if (b) {
        let e = y
            ? (0, c.jsxs)("div", {
                  className: tP.UJ,
                  children: [
                      (0, c.jsx)(e8.A, {
                          size: "md",
                          hasActivePromotion: !!C,
                          subscriptionTier: _?.subscription_trial?.sku_id ?? v,
                      }),
                      (0, c.jsx)(ef.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eu.intl.string(eu.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tS, {
            className: t,
            headingTop: l,
            showPill: r,
            buttonVisibilityRef: p,
            shouldShowReferralProgressBar: n,
            marketingBanner: R,
            heroButtons: e,
        });
    }
    return (0, c.jsx)("div", {
        className: u()(tP.kL, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        ref: p,
        children: (0, c.jsxs)("div", {
            className: tP.Qs,
            ref: D,
            children: [
                r && l,
                (0, c.jsxs)("div", {
                    className: tP.N1,
                    children: [
                        (0, c.jsx)(tM, { containerVisibilityPercentage: M }),
                        o &&
                            m?.expiresAt != null &&
                            (0, c.jsx)(ti, { expiresAt: m.expiresAt.toISOString(), className: tP.IZ }),
                        (0, c.jsx)(tu, {
                            children:
                                o && null != m ? eu.intl.format(eu.t["3yZP0G"], { percent: m.discount.amount }) : a,
                        }),
                        o &&
                            null != m &&
                            null != x &&
                            (0, c.jsx)(ea.E, {
                                className: tP.jG,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: eu.intl.format(eu.t["3Q4wCy"], {
                                    discountedPrice: x,
                                    billingPeriod: (0, ey.Ke)(m.discount.userUsageLimitInterval),
                                    numMonths: m.discount.userUsageLimit,
                                }),
                            }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: y || o ? tP.UJ : void 0,
                    children: [
                        y &&
                            (0, c.jsx)(e8.A, {
                                size: "md",
                                hasActivePromotion: !!C,
                                subscriptionTier: _?.subscription_trial?.sku_id ?? v,
                            }),
                        o &&
                            null != d &&
                            (0, c.jsx)(el.$, {
                                variant: "expressive",
                                icon: er.t,
                                size: "md",
                                text: eu.intl.string(eu.t.zrCzVB),
                                onClick: () => {
                                    var e;
                                    return (
                                        (e = tn.g.CONFIRM_DISCOUNT),
                                        void (0, eb.openModalLazy)(async () => {
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
                                                    analyticsLocations: h,
                                                    initialStep: e,
                                                    premiumSubscription: d,
                                                });
                                        })
                                    );
                                },
                            }),
                        (0, c.jsx)(ef.A, {
                            variant: y || o ? "secondary" : "expressive",
                            size: "md",
                            buttonTextOverride: eu.intl.string(eu.t["3KomGa"]),
                        }),
                    ],
                }),
                I,
            ],
        }),
    });
}
let [tw, tH] = (0, eP.A)(),
    tF = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, E.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, U.ds)(),
            r = (0, eM.QQ)(),
            o = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            d = null != o && o.status === eJ.Dmq.CANCELED && null != i,
            u = r && !d,
            m = eu.intl.string(eu.t.qYKftX),
            x = (0, eB.m)(),
            p = eu.intl.string(eu.t.ifwQZb),
            { fractionalState: f, endsAt: h } = (0, e_.A)(),
            A = (0, eI.Ay)(h, eI.yE.CREDITS_ENDS_IN),
            C = null;
        if (f === tk.xc.NONE || l) C = (0, c.jsx)(eH, { text: m });
        else {
            u = !0;
            let e = eu.intl.format(eu.t["yR+oDD"], {
                helpCenterLink: eS.A.getArticleURL(eJ.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            C = (0, c.jsx)(ej.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tP.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tP.V_,
                        children: (0, c.jsx)("div", { className: tP.eL, children: (0, c.jsx)(eH, { text: A }) }),
                    }),
            });
        }
        return (0, c.jsx)(E.f5, {
            value: a,
            children: (0, c.jsx)(tw.Provider, {
                value: {
                    headingText: p,
                    headingTop: C,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, c.jsx)(tG, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: x }),
            }),
        });
    };
var tB = s(820284),
    tV = s(742589),
    tz = s(909536),
    tW = s(392943),
    tK = s(876587),
    tX = s(400669),
    tY = s(590319),
    tQ = s(897351);
let tZ = function () {
    let e = (0, tz.Gh)("nitro_home_header"),
        t = o.useRef(null);
    return (0, c.jsxs)(tB.A, {
        section: eJ.JJy.NAVIGATION,
        children: [
            (0, c.jsx)(tV.A, {
                className: u()(tY.TQ, tQ.C$),
                transparent: !0,
                role: "navigation",
                children: (0, c.jsxs)("div", {
                    className: tY.Wc,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tQ.wk,
                            children: [
                                (0, c.jsx)(er.t, { colorClass: tQ.tr }),
                                (0, c.jsx)("span", {
                                    role: "img",
                                    "aria-label": eu.intl.string(eu.t.Ipxkog),
                                    className: tQ.Ss,
                                    children: (0, c.jsx)(tW.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, c.jsxs)("div", {
                                className: tY.MQ,
                                children: [
                                    (0, c.jsx)(tX.l, {
                                        ref: t,
                                        size: "sm",
                                        location: N.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, c.jsx)(ef.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, c.jsx)(tK.O, { targetElementRef: t, body: eu.intl.string(eu.t.EqUw7K) }),
        ],
    });
};
var tq = s(325499),
    tJ = s(562708),
    t$ = s(885574),
    t0 = s(43990),
    t1 = s(993077),
    t2 = s(139286),
    t6 = s(872725),
    t3 = s(920050),
    t9 = s(375776),
    t7 = s(727811),
    t5 = s(222652),
    t8 = s(933287),
    t4 = s(355982);
function se(e) {
    let { openRewardModal: t } = e,
        s = (0, t5.z)();
    if (s.kind === t5.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: t4.R$,
            children: [
                (0, c.jsx)(e8.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tk.pe.TIER_2,
                }),
                (0, c.jsx)(el.$, { variant: "secondary", size: "md", text: eu.intl.string(eu.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === t7.P.CLAIMED
            ? { text: eu.intl.string(t8.default.Plwzgf) }
            : { text: eu.intl.string(eu.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: t4.R$,
                children: [
                    (0, c.jsx)(el.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(el.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === t7.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: t4.ed,
                    children: [
                        (0, c.jsx)(t$.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(ea.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: eu.intl.string(t8.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function st(e) {
    let { glowing: t = !1 } = e;
    (0, t2.A)({
        type: tJ.ImpressionTypes.VIEW,
        name: tJ.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t3.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, E.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, eb.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("52283"), s.e("13088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(t0.N, {
        theme: eJ.NJ8.DARKER,
        children: (e) =>
            (0, c.jsx)(E.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, t4.kL),
                    children: (0, c.jsx)(t6.A, {
                        cardType: t1.s.CUSTOM,
                        cardClassName: t4.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: t4.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: t4.j,
                                    children: [
                                        (0, c.jsx)("div", { className: t4._g }),
                                        (0, c.jsx)("div", { className: t4.$h }),
                                        (0, c.jsx)("div", { className: t4.Rv }),
                                        (0, c.jsx)("div", { className: t4.Lw }),
                                        (0, c.jsx)("div", { className: t4.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: t4.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: t4.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(en.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: t4.DD,
                                            children: eu.intl.string(t8.default.RGT513),
                                        }),
                                        (0, c.jsx)(ea.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: t4.h_,
                                            children: eu.intl.string(t8.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(se, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var ss = s(744064);
function si(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, t5.z)(),
        n = { isThirdPartyPerk: !0 },
        a =
            i.kind === t5.N.SUBSCRIBE
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
    return (0, c.jsx)(ss.S, {
        id: t3.XBOX_PREMIUM_PERK_CARD_ID,
        title: eu.intl.string(t8.default.UVL9tD),
        description: eu.intl.string(t8.default["I+IXr0"]),
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
function sn(e) {
    let { analyticsLocations: t } = (0, E.Ay)(N.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(E.f5, { value: t, children: (0, c.jsx)(si, { ...e }) });
}
var sa = s(54471),
    sl = s(574377);
function sr(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = sl.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && sa.Jx, l), children: a }) : null,
        ],
    });
}
var sc = s(149995),
    so = s(398523),
    sd = s(881373),
    su = s(581921),
    sm = s(3074),
    sg = s(852218),
    sx = s(161319),
    sp = s(962995);
function sf() {
    let { analyticsLocations: e } = (0, E.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sd.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        s = so.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, sc.Zk)({ location: "useHardwarePartnerPerkCards" }),
        n = (0, sc.S9)({ location: "useHardwarePartnerPerkCards" }),
        a = null === (0, sm.N)(),
        l = (0, tq.b)("useHardwarePartnerPerkCards"),
        { currentDate: r, nDaysInMonth: d } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = l ? void 0 : eu.intl.string(eu.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: t3.LOGITECH_3PP_CARD_ID,
                      title: eu.intl.string(sp.default.OlObRa),
                      description: eu.intl.format(sp.default.ZGOJ8R, {
                          discountPercent: sd.aW,
                          termsUrl: eS.A.getArticleURL(eJ.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: r.getDate() / d,
                      ctaText: eu.intl.string(eu.t.w7s5Qr),
                      onCtaClick: () => (0, su.P)({ partnerId: sg.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sg.XY },
                      ctaDisabled: a,
                      ctaLoading: a,
                  }
                : null,
            steelseriesCard: s
                ? {
                      id: t3.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: eu.intl.string(eu.t.m7PucM),
                      description: i
                          ? n
                              ? eu.intl.format(eu.t["1Zw6xL"], {})
                              : eu.intl.format(eu.t.KWdCO0, {})
                          : eu.intl.format(eu.t.zh1X7u, {}),
                      descriptionNote:
                          !n && i
                              ? eu.intl.format(eu.t.vblnHk, {
                                    partnerName: sg.CD[sg.Cs].label,
                                    helpdeskArticle: eS.A.getArticleURL(eJ.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: r.getDate() / d,
                      ctaText: eu.intl.string(eu.t.w7s5Qr),
                      onCtaClick: () => (0, sx.u)({ analyticsLocations: e, partnerIds: [sg.KS, sg.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sg.KS },
                      ctaDisabled: a,
                      ctaLoading: a,
                  }
                : null,
        };
    }, [l, e, r, t, d, s, i, n, a]);
}
var sh = s(166634);
let sA = "xgpp";
function sN(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tq.b)("premium_subscriber_home_rewards"),
        { logitechCard: n, steelseriesCard: a } = sf();
    if (!i) return null;
    let l = null != n || null != a;
    return (0, c.jsx)(sr, {
        id: sA,
        sectionClassName: u()(sh.uW, sh.Uv, sh.qr),
        heading: (0, c.jsx)(en.D, {
            variant: "display-sm",
            className: u()(sl.R_, sa.U6),
            children: eu.intl.string(eu.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: sa.JE, children: (0, c.jsx)(st, { glowing: t === sA }) }),
        grid: l
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      (0, c.jsx)(sn, { containerClassName: sl.Nr }),
                      null != n && (0, c.jsx)(ss.S, { ...n, containerClassName: sl.Nr, glowing: s === n.id }),
                      null != a && (0, c.jsx)(ss.S, { ...a, containerClassName: sl.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var sE = s(687636),
    sC = s(67423);
let sj = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, E.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, es.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(ee.animated.div, {
        className: u()(sE.iE, { [sE.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sE.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sC, className: sE.oU }),
                (0, c.jsxs)("div", {
                    className: sE.iQ,
                    children: [
                        (0, c.jsx)(en.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: eu.intl.format(eu.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(ea.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eu.intl.format(eu.t["3Q4wCy"], {
                                numMonths: n.discount.userUsageLimit,
                                discountedPrice: a,
                                billingPeriod: (0, ey.Ke)(n.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(el.$, {
                    variant: "expressive",
                    icon: er.t,
                    size: "md",
                    text: eu.intl.string(eu.t.zrCzVB),
                    onClick: () =>
                        void (0, eb.openModalLazy)(async () => {
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
                                    analyticsLocations: l,
                                    initialStep: tn.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sb = s(761508),
    sR = s(449543);
function sI(e) {
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
function s_(e) {
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
function sT(e) {
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
var sv = s(345394);
function sP(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sv.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sS(e) {
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
function sy(e) {
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
function sD(e) {
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
function sM(e) {
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
function sO(e) {
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
var sL = s(996682);
function sk(e) {
    let {
        color: t = et.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: l = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, sL.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function sU(e) {
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
var sG = s(78701);
function sw(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sG.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sH = s(462887),
    sF = s(736653),
    sB = s(259065),
    sV = s(206835),
    sz = s(591179),
    sW = s(462463),
    sK = s(878784),
    sX = s(425713),
    sY = s(696292),
    sQ = s(192444),
    sZ = s(617986),
    sq = s(892227),
    sJ = s(81466),
    s$ = s(318254),
    s0 = s(490285),
    s1 = s(165815);
let s2 = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, K.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, sq.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: s1.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: s1.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: s1.Pf,
                            children: [
                                (0, c.jsx)(sJ.C, { size: "sm", color: et.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ea.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eu.intl.string(s0.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ea.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eu.intl.format(s0.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: s1.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: s1.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: s1.Pf,
                            children: [
                                (0, c.jsx)(s$.C, { size: "sm", color: et.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ea.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eu.intl.string(s0.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ea.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eu.intl.format(s0.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var s6 = s(758836),
    s3 = s(190107),
    s9 = s(55684);
function s7(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, sQ.lk)(s3.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, K.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: t3.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eu.intl.string(s0.default.hx5AFp),
                          description: eu.intl.format(s0.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(s9.lH, s9.yK),
                          footerContent: (0, c.jsx)(s2, {}),
                          ctaText: eu.intl.string(s0.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(eJ.BVt.COLLECTIBLES_SHOP_WITH_TAB(s6.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: t3.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eu.intl.string(eu.t.Csf5Ol),
                          description: eu.intl.format(eu.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eu.intl.string(eu.t.jVcuVY),
                          onCtaClick: () => (0, sZ.mA)({ fromContent: sY.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: s9.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var s5 = s(975807),
    s8 = s(95035),
    s4 = s(862990),
    ie = s(88001),
    it = s(466919),
    is = s(817577);
function ii() {
    (0, s5.A)(ie.TE);
}
function ia(e) {
    let t = (0, s4.O9)(),
        i = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, eb.openModalLazy)(async () => {
                      let { default: e } = await s.e("99709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tk.pe.TIER_2,
                      initialPlanId: tk.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: t3.PREMIUM_GROUP_CARD_ID,
                      title: eu.intl.string(it.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eu.intl.formatToPlainString(it.default.JlyGQj, {
                                  totalSeats: ie.aw,
                                  premiumGroupProductName: (0, ie.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: s9.LF,
                                  children: (0, c.jsx)(s8.A, {
                                      onClick: ii,
                                      children: eu.intl.string(it.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eu.intl.string(eu.t.oW0eUd),
                      primaryAsset: is,
                      ctaIcon: er.t,
                      ctaIconPosition: "start",
                      ctaText: eu.intl.string(eu.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var il = s(562819),
    ir = s(892035),
    ic = s(793943),
    io = s(241988),
    id = s(655752),
    iu = s(764231),
    im = s(627380),
    ig = s(30084),
    ix = s(111881),
    ip = s(714206);
let ih =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    iA =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iN =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iE() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, E.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        n = (0, sz.X)("useWhatsNewPerkCards"),
        { logitechCard: a, steelseriesCard: l } = sf(),
        r = (0, tq.b)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: d } = (0, ir.z$)("useWhatsNewPerkCards"),
        m = (0, sW.A)({ analyticsLocations: i }),
        x = (0, o.useCallback)(() => {
            (0, ev.openUserSettings)(eT.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, sB.L)({ analyticsLocations: i }),
            );
        }, [i]),
        p = (0, o.useCallback)(() => {
            (0, ev.openUserSettings)(eT.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, il.L)({ analyticsLocations: i }),
            );
        }, [i]),
        f = (0, o.useCallback)(() => {
            (0, ev.openUserSettings)(eT.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        h = (function (e) {
            let { fractionalState: t } = (0, e_.A)(),
                s = t === tk.xc.FP_ONLY,
                i = (0, sK.$F)(),
                n = (0, sK.Xb)(),
                a = i?.status === sK.Wo.UPCOMING || s,
                l = (0, sX.N)(i?.id),
                r = (function () {
                    let e = (0, sK.$F)(),
                        t = (0, id.P)(),
                        s = (0, sK.Xb)();
                    if (null == e || null == t || null == s) return null;
                    let i = te()(),
                        n = te()(s),
                        a = e.status === sK.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        r = n.clone().add(a, "months"),
                        c = n.clone().add(l, "months").diff(r);
                    return Math.max(0, Math.min(1, (i.diff(r) - 864e5) / c));
                })(),
                c = (0, g.bG)([eR.Ay], () => eR.Ay.useReducedMotion) && !a,
                d = (0, im.t)(),
                m = (0, id.P)();
            return (0, o.useMemo)(() => {
                let t,
                    o = null != m ? eu.intl.string(m.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iu.T)(tk.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === sK.Wo.UPCOMING
                              ? eu.intl.formatToPlainString(eu.t.a1eKDi, { days: d?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return eu.intl.formatToPlainString(eu.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return eu.intl.formatToPlainString(eu.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(d, o) ??
                                (0, iu.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let g = null;
                return (
                    null != l ? (g = a || c ? l.standard : l.ambientLarge) : s && (g = ip),
                    {
                        id: t3.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? eu.intl.string(i.nameUnformattedNitro) : s ? eu.intl.string(eu.t.tx9Fvw) : "",
                        pillText: eu.intl.string(eu.t["jyYgZ+"]),
                        primaryAsset: g,
                        primaryAssetClassName: u()(ix.pq, { [ix.n6]: a, [ix.kE]: c }),
                        caption: null != n ? eu.intl.formatToPlainString(eu.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: r ?? void 0,
                        ctaText: eu.intl.string(eu.t.jVcuVY),
                        onCtaClick: () => (0, ig.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, a, c, n, r, s, d, m, e]);
        })(i),
        A =
            ((e = (0, Z.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription())),
            (s = (0, ex.q)(t, e === Z.Iz.NITRO_HOME_TILE)),
            (0, o.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: t3.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: (0, c.jsx)("img", {
                                  src: io,
                                  alt: "",
                                  "aria-hidden": !0,
                                  style: { width: 157 },
                                  draggable: !1,
                              }),
                              ctaIcon: er.t,
                              ctaIconPosition: "start",
                              ctaText: s.cta,
                              onCtaClick: () =>
                                  (0, P.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: i }),
                          },
                [i, s, t],
            )),
        { nitroOrbsRewardsCard: C, questOrbMultiplierCard: j } = s7("useWhatsNewPerkCards"),
        b = ia(i);
    return (0, o.useMemo)(() => {
        let e = [
                r ? null : a,
                r ? null : l,
                C,
                j,
                b,
                {
                    id: t3.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eu.intl.string(eu.t.OLtTrt),
                    description: eu.intl.string(eu.t["di/pXR"]),
                    onCtaClick: n ? m : x,
                    ctaText: eu.intl.string(eu.t.jVcuVY),
                    primaryAsset: ih,
                },
                {
                    id: t3.CLIENT_THEMES_CARD_ID,
                    title: eu.intl.string(eu.t.acc6h6),
                    description: eu.intl.formatToPlainString(eu.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iN,
                    ctaText: eu.intl.string(eu.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ic.nf)(ic.HP.CUSTOM_THEME);
                    },
                },
                d
                    ? null
                    : {
                          id: t3.PERMADECOS_CARD_ID,
                          title: eu.intl.string(eu.t.L14NZN),
                          description: eu.intl.string(eu.t.eCZkAI),
                          primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                          ctaText: eu.intl.string(eu.t.jVcuVY),
                          onCtaClick: n ? m : p,
                      },
                {
                    id: t3.CUSTOM_APP_ICONS_CARD_ID,
                    title: eu.intl.string(eu.t["GU+wqh"]),
                    description: eu.intl.string(eu.t["1uPk1Z"]),
                    primaryAsset: iA,
                    ctaText: eu.intl.string(eu.t.y9TxXV),
                    onCtaClick: f,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        if ((e.splice(+!!t, 0, h), null != A && e.splice(1, 0, A), d)) {
            let t = null != A ? 2 : 1;
            e.splice(t, 0, {
                id: t3.PROFILE_FRAMES_CARD_ID,
                title: eu.intl.string(eu.t.SGBDnu),
                description: eu.intl.string(eu.t.cMgegQ),
                pillText: eu.intl.string(eu.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: u()(s9.lH, s9.yK),
                ctaText: eu.intl.string(eu.t.jVcuVY),
                onCtaClick: () => (0, S.pX)(eJ.BVt.COLLECTIBLES_SHOP_WITH_TAB(s6.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > s && e.splice(s, e.length - s), e;
    }, [h, A, C, j, b, x, f, p, m, n, a, l, r, d]);
}
var iC = s(355097);
let ij = "/assets/1eb1b74667b4c0f0.svg",
    ib = "/assets/983b60e4fcaf973b.svg";
var iR =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iI = [
    { id: "bestof", label: () => eu.intl.string(eu.t.q1u7nQ) },
    { id: "appearance", label: () => eu.intl.string(eu.t.CUnZkZ) },
    { id: "upgrades", label: () => eu.intl.string(eu.t.KC5q8v) },
    { id: "vip", label: () => eu.intl.string(eu.t.DjEAcv) },
];
var i_ = s(631255);
function iT(e) {
    e.stopPropagation();
}
function iv(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sF.DP)(),
                t = (0, sz.X)("useFavoritesPerkCards"),
                s = (0, sK.Lh)(),
                i = (0, sX.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, E.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, sV.A)({ scrollPosition: iC._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, ev.openUserSettings)(eT.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, ev.openUserSettings)(eT.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, ev.openUserSettings)(eT.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, S.pX)(eJ.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, ev.openUserSettings)(eT.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                g = (0, sW.A)({ analyticsLocations: n }),
                x = (0, o.useCallback)(() => {
                    (0, ev.openUserSettings)(eT.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, sB.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = iE(),
                f = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: A } = s7("useFavoritesPerkCards"),
                C = ia(n),
                j = (0, o.useMemo)(
                    () => [
                        {
                            id: t3.SERVER_BOOSTS_CARD_ID,
                            title: eu.intl.formatToPlainString(eu.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eu.intl.formatToPlainString(eu.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eu.intl.string(eu.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sI, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != C ? { ...C, categories: ["bestof"] } : null,
                        {
                            id: t3.PROFILES_CARD_ID,
                            title: eu.intl.string(eu.t.xDRab3),
                            description: eu.intl.string(eu.t.yn6fWA),
                            ctaText: eu.intl.string(eu.t.jVcuVY),
                            onCtaClick: t ? g : a,
                            primaryAsset: (0, c.jsx)(s_, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t3.HD_VIDEO_CARD_ID,
                            title: eu.intl.string(eu.t["/mQ5gg"]),
                            description: eu.intl.string(eu.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sT, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t3.CLIENT_THEMES_CARD_ID,
                            title: eu.intl.string(eu.t.acc6h6),
                            description: eu.intl.formatToPlainString(eu.t.WQazjs, { themeCount: 20 }),
                            ctaText: eu.intl.string(eu.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iN,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t3.MORE_EMOJIS_CARD_ID,
                            title: eu.intl.string(eu.t.D8vIDT),
                            description: eu.intl.string(eu.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sP, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t3.LARGE_UPLOADS_CARD_ID,
                            title: eu.intl.string(eu.t.nL1WZV),
                            description: eu.intl.formatToPlainString(eu.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, c.jsx)(sS, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t3.CUSTOM_APP_ICONS_CARD_ID,
                            title: eu.intl.string(eu.t["GU+wqh"]),
                            description: eu.intl.string(eu.t["1uPk1Z"]),
                            ctaText: eu.intl.string(eu.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iA,
                            categories: ["appearance"],
                        },
                        {
                            id: t3.ENTRANCE_SOUNDS_CARD_ID,
                            title: eu.intl.string(eu.t.WJfCPi),
                            description: eu.intl.string(eu.t.liQKJR),
                            ctaText: eu.intl.string(eu.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: t3.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eu.intl.string(eu.t.OLtTrt),
                            description: eu.intl.string(eu.t["di/pXR"]),
                            onCtaClick: t ? g : x,
                            ctaText: eu.intl.string(eu.t.jVcuVY),
                            primaryAsset: ih,
                            categories: ["appearance"],
                        },
                        {
                            id: t3.CUSTOM_SOUNDS_CARD_ID,
                            title: eu.intl.string(eu.t["Cu/oFd"]),
                            description: eu.intl.string(eu.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sy, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t3.SPECIAL_STICKERS_CARD_ID,
                            title: eu.intl.string(eu.t.MQoVeb),
                            description: eu.intl.string(eu.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: s9.Uc,
                                children: (0, c.jsx)(sD, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t3.SUPER_REACTIONS_CARD_ID,
                            title: eu.intl.string(eu.t.qERvAA),
                            description: eu.intl.string(eu.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sM, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t3.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eu.intl.string(eu.t.ssVDYQ),
                            description: eu.intl.string(eu.t.aUSRMa),
                            primaryAsset: (0, sH.M)(e) ? ij : ib,
                            categories: ["upgrades"],
                        },
                        {
                            id: t3.EARLY_ACCESS_CARD_ID,
                            title: eu.intl.string(eu.t["g/KRY6"]),
                            description: eu.intl.string(eu.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sO, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t3.BADGE_CARD_ID,
                            title: eu.intl.string(eu.t.Bn3CtB),
                            description: eu.intl.string(eu.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sk, { color: et.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t3.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eu.intl.string(eu.t["MTD+7w"]),
                            description: eu.intl.string(eu.t.Bhs0s6),
                            ctaText: eu.intl.string(eu.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sU, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != A ? { ...A, categories: ["vip"] } : null,
                        {
                            id: t3.PERMADECOS_CARD_ID,
                            title: eu.intl.string(eu.t.L14NZN),
                            description: eu.intl.string(eu.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, A, C, a, l, r, d, u, m, x, g, t],
                );
            return (0, o.useMemo)(() => j.filter((e) => null != e && !f.includes(e.id)), [j, f]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iR.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: i_.uW,
        children: [
            (0, c.jsx)(en.D, { variant: "display-sm", className: i_.R_, children: eu.intl.string(eu.t["Uh3+CA"]) }),
            (0, c.jsx)(sb.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i_.Lq,
                "aria-label": eu.intl.string(eu.t["Uh3+CA"]),
                children: iI.map((e) =>
                    (0, c.jsx)(sb.V.Item, { id: e.id, className: i_.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sR.A,
                {
                    gap: 20,
                    className: i_.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                ss.S,
                                { ...e, glowing: t === e.id, containerClassName: i_.Ui, onFocus: iT },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var iP = s(411450);
let iS = function (e) {
    let { className: t } = e,
        s = (0, sF.DP)();
    return (0, c.jsx)("img", {
        className: u()(iP.D, t),
        src: (0, sH.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iy = s(300758);
let iD = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: s, children: i } = e;
    return t
        ? (0, c.jsxs)("div", {
              className: u()(iy.kL, iy.Gd, iy.Eg),
              children: [(0, c.jsx)(iS, {}), (0, c.jsx)(tZ, {}), i],
          })
        : (0, c.jsx)(ep.h, { color: "nitro-pink", className: u()(iy.kL, iy.Gd), offsetBottom: s, children: i });
};
function iM(e) {
    let { glowingPerkId: t = null } = e,
        s = iE();
    return (0, c.jsx)(sr, {
        sectionClassName: sl.uW,
        heading: (0, c.jsx)(en.D, { variant: "display-sm", className: sl.R_, children: eu.intl.string(eu.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, c.jsx)(
                    ss.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: u()(sl.Nr, { [sl.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function iO(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, g.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
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
var iL = s(92737);
let ik = "/assets/cd2be35d285d4675.svg",
    iU = (e) => {
        let { userId: t } = e,
            s = (0, U.ds)(),
            { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
            n = (0, m.zy)();
        o.useEffect(() => {
            p.h.wait(async () => {
                let e = [(0, W.Ay)()];
                null != t && e.push((0, Y.A)(t)), await Promise.all(e);
            });
        }, [t]),
            o.useEffect(() => {
                I(!0);
            }, []),
            (0, J.j)(),
            (0, v.P)(T);
        let a = o.useRef(null),
            l = o.useRef(null),
            r = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: d, programReward: f } = (0, K.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: h,
                glowingSectionId: A,
                glowingPerkId: C,
                scrollBlock: j,
                scrollInline: b,
            } = o.useMemo(() => {
                let e = new URLSearchParams(n.search),
                    t = e.get("perk"),
                    s = e.get(iL.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [n.search]);
        iO(h ?? "", null != h, j, b);
        let [R, I] = o.useState(!1),
            _ = (0, q.p)(),
            P = o.useRef(null),
            [S, y] = o.useState(!1),
            D = null != _ && null != r && r.status === eJ.Dmq.CANCELED,
            M = (0, $.iU)(tk.gD.PREMIUM_MONTH_TIER_2, _, r),
            k = !S && D,
            G = null != (0, g.bG)([X.A], () => (null != t ? X.A.getUserProfile(t) : null)) && (d || null != f),
            w = (0, Z.TF)({ location: "PremiumSubscriberHome" }),
            ee = (0, ex.q)(r, w === Z.Iz.STICKY_BAR),
            [et, es] = (0, z.iP)(
                null != ee && G && r?.id != null ? F.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                r?.id ?? "",
                { cooldownDurationMs: Q.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ei = null != r && r.status === eJ.Dmq.CANCELED,
            en = i && !s && !ei,
            { analyticsLocations: ea } = (0, E.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [el, er] = o.useState(!1);
        return G
            ? (0, c.jsxs)(V.Gt, {
                  className: u()(iy.xW, iy.Gd),
                  ref: a,
                  children: [
                      (0, c.jsx)(iD, {
                          shouldRenderNitroHomeHeaderExperiment: en,
                          gradientOffsetBottom: s ? 0.55 : 0.8,
                          children: (0, c.jsxs)(E.f5, {
                              value: ea,
                              children: [
                                  (0, c.jsx)(B.L, {
                                      innerRef: P,
                                      onChange: (e) => y(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tF, {
                                          buttonVisibilityRef: P,
                                          className: iy.v1,
                                          userDiscountOffer: _,
                                          discountedPrice: M,
                                      }),
                                  }),
                                  (0, c.jsx)(iM, { glowingPerkId: C }),
                                  (0, c.jsx)(sN, { glowingPerkId: C, glowingSectionId: A }),
                                  (0, c.jsx)(iv, { glowingPerkId: C }),
                                  (0, c.jsx)(eA, {
                                      className: iy.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eJ.liQ.NITRO_HOME, section: eJ.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: iy.hz }),
                                  (0, c.jsx)(B.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !el &&
                                              (L.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ea,
                                              }),
                                              er(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: l, className: iy._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: ik,
                                      className: iy.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eu.intl.string(eu.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      D &&
                          null != M &&
                          (0, c.jsx)(sj, {
                              isVisible: k && R,
                              premiumSubscription: r,
                              churnDiscountOffer: _,
                              discountedPrice: M,
                          }),
                      null != et &&
                          null != ee &&
                          null != r &&
                          (0, c.jsx)(eg, { premiumSubscription: r, content: ee, markAsDismissed: es }),
                  ],
              })
            : en
              ? (0, c.jsxs)("div", {
                    className: u()(iy.kL, iy.Lq, iy.TN, iy.Eg),
                    children: [
                        (0, c.jsx)(tZ, {}),
                        (0, c.jsx)("div", { className: iy.S, children: (0, c.jsx)(x.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(iy.kL, iy.Lq), children: (0, c.jsx)(x.y, {}) });
    };
var iG = s(286320),
    iw = s(727949),
    iH = s(440005),
    iF = s(26508),
    iB = s(968066),
    iV = s(366010),
    iz = s(303136);
let iW = function (e) {
    let t,
        { className: s } = e,
        i = (0, tp.TM)(),
        n = (0, iV.q)((0, sF.Ay)());
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
                iz.A,
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
var iK =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    iX = s(5571);
let iY = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, es.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: eJ.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(ee.animated.div, {
        className: iX.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: iX.U,
            children: [
                (0, c.jsx)(e8.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, c.jsx)(ef.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var iQ = s(685661);
let iZ = function () {
    let e = (0, tx.bG)([eR.Ay], () => eR.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: iQ.BI,
                children: (0, c.jsx)(tN, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: th.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tD, alt: "", className: iQ.Q }),
                }),
            }),
            (0, c.jsx)(tC, {
                isMotionReduced: e,
                boltContainerClassName: iQ.nJ,
                carContainerClassName: iQ.IN,
                hammerContainerClassName: iQ.Gj,
                keyContainerClassName: iQ.FV,
                starContainerClassName: iQ.E1,
                boltAssetClassName: iQ.j7,
                carAssetClassName: iQ.or,
                hammerAssetClassName: iQ.Wv,
                keyAssetClassName: iQ.rs,
                starAssetClassName: iQ.OY,
            }),
        ],
    });
};
var iq = s(502701);
let iJ = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, E.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(E.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: iq.kL,
            children: (0, c.jsxs)("div", {
                className: iq.hQ,
                children: [
                    (0, c.jsx)(iZ, {}),
                    (0, c.jsx)(en.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: iq.RH,
                        children: eu.intl.string(eu.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
iJ.displayName = "PremiumMarketingFooter";
var i$ = s(939249);
let i0 = function (e) {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        n = {
            [iK.HOME]: eu.intl.string(eu.t.uGRXjS),
            [iK.WHATS_NEW]: eu.intl.string(eu.t["mfcR/v"]),
            [iK.BEST_OF_NITRO]: eu.intl.string(eu.t.xQKkE8),
            [iK.PLANS]: eu.intl.string(eu.t.wyNMnm),
            [iK.COMPARE]: eu.intl.string(eu.t.pwD7If),
        },
        a = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, tz.Gh)("premium_marketing_nav_bar") && null != a,
        r = o.useRef(null),
        d = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsxs)(tV.A, {
        className: tY.TQ,
        transparent: !0,
        children: [
            (0, c.jsxs)("div", {
                className: tY.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: tY.wG,
                        children: [
                            (0, c.jsx)(er.t, { className: tY.nE, colorClass: tY.oG }),
                            (0, c.jsx)("div", {
                                className: tY.zc,
                                role: "tablist",
                                "aria-label": eu.intl.string(eu.t.O9MiXY),
                                children: d.map((e) => {
                                    let t = s === e.id,
                                        i = n[e.id];
                                    return (0, c.jsxs)(
                                        i$.D,
                                        {
                                            role: "tab",
                                            "aria-selected": t,
                                            className: tY.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, c.jsx)(ea.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                t && (0, c.jsx)("div", { className: tY.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: tY.MQ,
                        children: [
                            l &&
                                (0, c.jsx)(tX.l, { ref: r, size: "sm", location: N.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, c.jsx)(ef.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            l && i && (0, c.jsx)(tK.O, { targetElementRef: r }),
        ],
    });
};
var i1 = s(704333),
    i2 = s(414499),
    i6 = s(597770),
    i3 = s(500060),
    i9 = s(866665),
    i7 = s(406860),
    i5 = s(870975),
    i8 = s(900485);
function i4() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, i7.A)({ boxType: t9.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: i1.B, text: eu.intl.string(t8.default.MUypiB) },
            { icon: i2.h, text: eu.intl.string(t8.default.ec5Rdd) },
            { icon: i6.o, text: eu.intl.string(t8.default["9t2CzW"]), tooltip: t8.default.AyECej },
            { icon: i3.o, text: eu.intl.string(t8.default.R7YJAY) },
        ];
    return (0, c.jsx)(B.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: i8.iE,
            children: (0, c.jsxs)("div", {
                className: i8.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: i8.j,
                        children: [
                            (0, c.jsx)("div", { className: i8._g }),
                            (0, c.jsx)("div", { className: i8.$h }),
                            (0, c.jsx)("div", { className: i8.Rv }),
                            (0, c.jsx)("div", { className: i8.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: i8.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: i8.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(en.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: i8.R_,
                                                children: eu.intl.string(t8.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: i8.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(ea.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: i8.Jn,
                                                                            children: (0, c.jsx)(i9.m, {
                                                                                text: eu.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(t$.m, {
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
                                                        className: i8.xF,
                                                        children: (0, c.jsx)(e8.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tk.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: i8.WE,
                                        children: (0, c.jsx)(ea.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eu.intl.format(t8.default.KDKdWi, { termsLink: (0, i5.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: i8.r1,
                                children: (0, c.jsx)("img", {
                                    className: i8.wm,
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
var ne = s(750338),
    nt = s(280041),
    ns = s(950228);
function ni(e) {
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
        className: u()(ns.boxBackdrop, t),
        children: [
            (0, c.jsx)(en.D, {
                className: ns.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: ns.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: ns.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nt.A0.SMALL;
                            break;
                        case 2:
                            s = nt.A0.MEDIUM;
                            break;
                        default:
                            s = nt.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                ne.A,
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
let nn = o.memo(function (e) {
        let t = (0, tq.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, nt.Ay)(t);
        return (0, c.jsx)(ni, {
            boxLayout: s,
            title: eu.intl.string(eu.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(i4, {}) : null,
            ...e,
        });
    }),
    na = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nt.Ay)();
        return (0, c.jsx)(ni, { boxLayout: t, title: eu.intl.string(eu.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var nl = s(526292),
    nr = s(236834),
    nc = s(167805);
function no(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eX.A)({ userId: t?.id, size: eV._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nc.$6,
        children: (0, c.jsxs)("div", {
            className: nc.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nc.kR,
                    children: (0, c.jsx)(ez.eu, { src: s, "aria-label": t.username, size: eV._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(en.D, {
                    variant: "heading-sm/normal",
                    className: nc.FS,
                    color: "text-strong",
                    children: eu.intl.format(eu.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var nd = s(579245),
    nu = s(369805);
let nm = function () {
    let e = (0, nu.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eH, { text: e });
};
var ng = s(97352);
function nx() {
    let e = (0, g.bG)([ng.A], () => ng.A.getForSkuAndInterval((0, ey.mH)(tk.pe.TIER_0), tk.WT.MONTH));
    return null != e ? (0, ey.sS)(e) : "\u2026";
}
var np = s(857681);
let nf = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tx.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        i = (0, tp.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: np.YU,
        children: [
            (0, c.jsx)(tR, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: np.wG,
                assetClassName: np.lu,
            }),
            (0, c.jsx)(tC, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: np.nJ,
                carContainerClassName: np.IN,
                hammerContainerClassName: np.Gj,
                keyContainerClassName: np.FV,
                starContainerClassName: np.E1,
                boltAssetClassName: np.j7,
                carAssetClassName: np.or,
                hammerAssetClassName: np.Wv,
                keyAssetClassName: np.rs,
                starAssetClassName: np.OY,
            }),
        ],
    });
};
var nh = s(507256);
let nA = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, E.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = nx(),
            r = (0, nr.A)(),
            o = null != r,
            { visibilityPercentageRef: d, visibilityPercentage: m } = eG(
                !(0, g.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
            ),
            x = (0, iG.b)(),
            p = !o && x.length > 0,
            f = (0, ek.c)(eN.C.MARKETING_PAGE_BANNER),
            h = null != f && "marketingPageBanner" === f.properties.properties.oneofKind,
            A = (0, nl.ar)() && !h,
            C = (0, eO.O)(),
            j = (null != C && tk.U4.includes(C.discountId)) || h;
        return (0, c.jsx)(E.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(nh.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: d,
                    children: (0, c.jsxs)("div", {
                        className: nh.hQ,
                        children: [
                            (0, c.jsx)(nf, { containerVisibilityPercentage: m }),
                            A && (0, c.jsx)(nm, {}),
                            (0, c.jsx)("div", {
                                className: nh.s8,
                                children: (0, c.jsx)(to.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(en.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: nh.wx,
                                        children: eu.intl.string(eu.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: nh.rf,
                                children: [
                                    o &&
                                        (0, c.jsx)("div", {
                                            className: nh.eZ,
                                            children: (0, c.jsx)(no, { referrer: r }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: nh.Qn,
                                            children: (0, c.jsx)(nd.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: A ? nh.es : nh.UJ,
                                        children: [
                                            (0, c.jsx)(e8.A, {
                                                size: "md",
                                                fullWidth: A,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: j && null == i ? tk.pe.NONE : i,
                                                buttonTextOverride: j ? eu.intl.string(eu.t["2pG5Ga"]) : void 0,
                                            }),
                                            !A && (0, c.jsx)(ef.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nh.iQ,
                                        children: (0, c.jsx)(ea.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: eu.intl.format(eu.t.kt9wxs, { cheapestMonthlyPrice: l }),
                                        }),
                                    }),
                                    null != f &&
                                        "marketingPageBanner" === f.properties.properties.oneofKind &&
                                        (0, c.jsx)(eF.x, {
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
var nN = s(820081),
    nE = s(140735),
    nC = s(401432),
    nj = s(580630),
    nb = s(795269),
    nR = s(773669),
    nI = s(84483),
    n_ = s(864386),
    nT = s(509826),
    nv = s(202600);
function nP(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(nN.B, { size: "sm", color: et.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(nE.A, { children: eu.intl.string(eu.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(nC.a, { size: "xs", color: et.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(nE.A, { children: eu.intl.string(eu.t.l4qZrp) }),
              ],
          });
}
function nS(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(nT.nM, nT.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: nT.nx,
                children: (0, c.jsx)(ea.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: nT.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ea.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(nP, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: nT.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ea.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(nP, { includes: !!i.includes }),
            }),
        ],
    });
}
function ny(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(nT.nM, nT.Gf),
                children: (0, c.jsxs)("td", {
                    className: nT.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(en.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(ea.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(nS, { ...e }, e.id)),
        ],
    });
}
function nD(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tk.PremiumTypes.TIER_0 ? eu.intl.string(eu.t.tUbSDK) : eu.intl.string(eu.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: nT.nn,
        children: [
            (0, c.jsxs)("div", {
                className: nT.KS,
                children: [
                    (0, c.jsx)(er.t, { colorClass: nT.oG }),
                    (0, c.jsx)(en.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(en.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function nM(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, nj.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: nT.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: nT.Cr,
                    children: (0, c.jsx)(en.D, { variant: "heading-xl/bold", children: eu.intl.string(eu.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: nT.Hn,
                    children: (0, c.jsx)(nD, {
                        premiumType: tk.PremiumTypes.TIER_0,
                        priceString: (0, nj.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: nT.Hn,
                    children: (0, c.jsx)(nD, { premiumType: tk.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let nO = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tk.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, E.Ay)(N.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, eL.V)(),
            r = l?.subscription_trial?.sku_id,
            d = (0, eO.O)(),
            m = (0, $.YJ)(d),
            g = null != d && (0, $.U9)(d, tk.pe.TIER_2) && m === tk.gD.PREMIUM_MONTH_TIER_2,
            x = (0, $.N1)(m),
            p = null != x ? `${x}/${(0, ey.FJ)(tk.WT.MONTH)}` : "",
            f = (0, ey.JM)(tk.gD.PREMIUM_MONTH_TIER_0),
            h = (0, ey.JM)(tk.gD.PREMIUM_MONTH_TIER_2),
            A = (function () {
                let e = (0, tq.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: eu.intl.string(eu.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: eu.intl.string(eu.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: eu.intl.string(eu.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: eu.intl.string(n_.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, sQ.lk)(s3.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = so.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sd.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, nI.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: eu.intl.string(eu.t.NG1e6l),
                            subtitle: eu.intl.format(t8.default.uJcbMv, {
                                termsLink: eS.A.getArticleURL(eJ.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: eu.intl.string(t8.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: eu.intl.string(t8.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: eu.intl.string(sp.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: eu.intl.formatToPlainString(eu.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: eu.intl.string(s0.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: eu.intl.string(eu.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: eu.intl.string(eu.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: eu.intl.string(eu.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: eu.intl.string(eu.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: eu.intl.string(eu.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: eu.intl.string(eu.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: eu.intl.string(eu.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: eu.intl.string(eu.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: eu.intl.string(eu.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, ey.EJ)(tk.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, ey.EJ)(tk.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: eu.intl.string(eu.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: eu.intl.string(eu.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: eu.intl.string(eu.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: eu.intl.string(eu.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: eu.intl.formatToPlainString(eu.t.nyhDpw, {
                                        numBoosts: tk.M4,
                                        percentageOff: (0, nj.l9)(nR.default.locale, tk.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: eu.intl.string(eu.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: eu.intl.string(eu.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: eu.intl.string(eu.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: eu.intl.formatToPlainString(eu.t["8crdzJ"], { maxChars: eJ.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: eu.intl.string(eu.t["il8+nC"]),
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
            let e = null != l ? eu.intl.string(eu.t.IBYG5U) : eu.intl.string(eu.t.TR2B4T);
            t = (0, c.jsx)(nb.R, { className: u()(nT.Io, nT.SP), text: e });
        }
        let C = r === tk.pe.TIER_0 || n === tk.PremiumTypes.TIER_0;
        return (0, c.jsx)(E.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(nT.zr, s),
                children: [
                    (0, c.jsx)(en.D, {
                        className: nT.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: eu.intl.string(eu.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: nT.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(nT.fO, { [nT.Vd]: C, [nT.hA]: !C }),
                                children: [
                                    !C && t,
                                    (0, c.jsx)("div", { className: nT.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: nT.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: nv, alt: "", className: nT.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: nT.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: nT.tp,
                                children: [
                                    (0, c.jsx)(nM, {
                                        tier0Price: f,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: g,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    A.map((e) => (0, o.createElement)(ny, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    nL = function (e) {
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
var nk = s(818348),
    nU = s(952661);
let nG = () => {
    let e = (0, m.zy)();
    (0, v.P)(T);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, g.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        [d, x] = o.useState(r);
    o.useEffect(() => {
        if (r) return void x(!0);
        let e = s.current;
        if (null != e) return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
        function t(t) {
            t.target === e && x(!0);
        }
    }, [r]);
    let [p, f] = o.useState(!1),
        [h, A] = o.useState(!1),
        [C, j] = o.useState(!1),
        [b, R] = o.useState(!1),
        I = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        _ = null != I ? (0, ey.EL)(I) : null,
        P = null != _ ? ey.Ay.getSkuIdForPlan(_.planId) : null,
        S = null !== P && P !== tk.pe.TIER_2 ? tk.pe.TIER_2 : null,
        y = (0, eD.cg)(),
        { analyticsLocations: D } = (0, E.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        R(!0);
    }, []);
    let M = (0, iF.DK)(iH.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: k } = (0, sQ.lk)(s3.rE.NITRO_HOME_MARKETING),
        U = M && k ? nt.NI.COMBINED_ORBS : k ? nt.NI.ORB_MULTIPLIER : M ? nt.NI.ORB_REWARDS : null,
        G = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t ? U : t === nt.NI.THREE_P_PROMOTIONS ? nt.NI.THREE_P_PROMOTIONS : null;
        }, [e.search, U]);
    iO(G ?? "", null != G);
    let { navBarSections: w, activeSectionId: H } = nL([iK.HOME, iK.WHATS_NEW, iK.BEST_OF_NITRO, iK.PLANS, iK.COMPARE]),
        { home: F, whatsNew: z, bestOfNitro: W, plans: K, compare: X } = w,
        Y = (0, c.jsxs)("div", {
            ref: s,
            className: u()(nU.kL, nU.Gd, nU.iI, { [nU.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(iW, { className: nU.yH }),
                (0, c.jsx)(i0, { navBarSections: w, activeSectionId: H, isAnimationComplete: d }),
                (0, c.jsxs)("div", {
                    className: nU.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: nU.qY,
                            ref: F.ref,
                            children: (0, c.jsx)(B.L, {
                                innerRef: n,
                                onChange: (e) => f(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(nA, {
                                    ref: n,
                                    subscriptionTier: S,
                                    isEligibleForBogoPromotion: y,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: nU.So,
                            ref: z.ref,
                            children: (0, c.jsx)(nn, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: nU.KQ,
                            ref: W.ref,
                            children: (0, c.jsx)(na, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: nU.s5,
                            ref: K.ref,
                            children: (0, c.jsx)(B.L, {
                                innerRef: i,
                                onChange: (e) => A(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(iB.jP, { innerRef: i }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: nU.aC, ref: X.ref, children: (0, c.jsx)(nO, {}) }),
                    ],
                }),
                (0, c.jsx)(B.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !C &&
                            (L.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            j(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: nU._Z }),
                }),
                (0, c.jsx)(iJ, { ref: l }),
                (0, c.jsx)(iY, { isVisible: !p && !h && b, subscriptionTier: S, isEligibleForBogoPromotion: y }),
                (0, c.jsx)(iW, { className: nU.MF }),
            ],
        });
    return (0, c.jsx)(t0.N, {
        theme: nk.NJ.DARKER,
        children: (e) => (0, c.jsx)(V.Gt, { className: u()(nU.XG, e), ref: t, children: Y }),
    });
};
var nw = s(862482),
    nH = s(412260),
    nF = s(662367),
    nB = s(374403),
    nV = s(396375),
    nz = s(815846),
    nW = s(860839),
    nK = s(695366),
    nX = s(107736);
let nY = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nl.ar)();
    if (null == i) return null;
    let r = null != i ? ey.Ay.getPremiumPlanItem(i) : null;
    if (
        (ey.Ay.isBoostOnlySubscription(i)
            ? (t = eu.intl.string(eu.t.Uj0md3))
            : null != r && (t = ey.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ev.openUserSettings)(eT.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? ey.Ay.getSkuIdForPlan(r.planId) : null) === tk.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(t1.Z, {
            className: u()(nX.kL, n, { [nX.He]: l }),
            type: t1.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(nK.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(nX.Kk, { [nX.Pt]: l }),
                }),
                (0, c.jsx)(ea.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? eu.intl.format(eu.t["tYuv+T"], {
                              helpdeskArticle: eS.A.getArticleURL(eJ.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : eu.intl.format(eu.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var nQ = s(697335);
let nZ = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(nQ.zr, { [nQ.N]: t }),
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
                        (0, c.jsx)("stop", { className: nQ.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: nQ.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: nQ.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: nQ.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: nQ.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var nq = s(900797),
    nJ = s(847374),
    n$ = s(812993),
    n0 = s(504041);
function n1(e) {
    let { className: t } = e;
    return (0, c.jsx)(n$.Lp, { className: u()(n0.T, t), text: eu.intl.string(eu.t.EYxi0o) });
}
var n2 = s(904788),
    n6 = s(507553),
    n3 = s(255438);
let n9 = "/assets/5b4fec8511c3676a.svg",
    n7 = "/assets/0838bda6ecd20d91.svg";
function n5(e, t, s) {
    return (0, sH.M)(e) ? t : s;
}
var n8 = s(365742);
function n4(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(i$.D, {
        onClick: s,
        className: n8.customButton,
        children: [
            t ? eu.intl.string(eu.t.maZaN3) : eu.intl.string(eu.t["37C26f"]),
            t
                ? (0, c.jsx)(nq.t, { size: "md", color: "currentColor", className: n8.arrow })
                : (0, c.jsx)(nJ.a, { size: "md", color: "currentColor", className: n8.arrow }),
        ],
    });
}
function ae(e) {
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
        { analyticsLocations: d } = (0, E.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(E.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(n8.perkCard, i),
            children: [
                r
                    ? (0, c.jsx)(n2.A, {
                          className: n8.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(n1, { className: n8.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, n8.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(en.D, {
                            variant: "heading-lg/extrabold",
                            className: n8.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(ea.E, {
                            variant: "text-sm/normal",
                            className: n8.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let at = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, sF.Ay)(),
                n = (0, sz.X)("usePerkCards"),
                a = (0, tx.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return ey.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, n3.Xq)(tk.f3 / 1024, { useKibibytes: !0 });
            return {
                badge: {
                    title: eu.intl.string(eu.t.SS87rQ),
                    description: eu.intl.string(eu.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eu.intl.string(eu.t["5cYMu0"]),
                    description: eu.intl.string(eu.t.vxk9va),
                    imageSource: n5(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eu.intl.string(eu.t["/xvEMy"]),
                    description: eu.intl.string(eu.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eu.intl.string(eu.t.OuItFi),
                    description: eu.intl.string(eu.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eu.intl.string(eu.t["R2IV/Q"]),
                    description: eu.intl.string(eu.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eu.intl.string(eu.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? eu.intl.formatToPlainString(eu.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : eu.intl.formatToPlainString(eu.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                n6.A.setState({ scrollPosition: iC._F.TRY_IT_OUT }),
                                    t(eT.X.PROFILE_PANEL, { analyticsLocations: e });
                            }
                        }
                        return a
                            ? eu.intl.format(eu.t.aj1pfZ, { onCheckItOutClick: t })
                            : eu.intl.format(eu.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eu.intl.string(eu.t.BUScid),
                    description: eu.intl.string(eu.t.vN6XpQ),
                    imageSource: n5(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eu.intl.string(eu.t.Bv8Pfk),
                    description: eu.intl.string(eu.t.JMfaTU),
                    imageSource: n5(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eu.intl.string(eu.t.Bv8Pfk),
                    description: eu.intl.string(eu.t.JMfaTU),
                    imageSource: n5(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eu.intl.string(eu.t["lGcW+c"]),
                    description: eu.intl.string(eu.t["/fDyO+"]),
                    imageSource: n5(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eu.intl.string(eu.t["1c+xwT"]),
                    description: eu.intl.string(eu.t.hJG8ZN),
                    imageSource: n5(i, n7, n9),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eu.intl.string(eu.t.tzdIwI),
                    description: eu.intl.string(eu.t.hJG8ZN),
                    imageSource: n5(i, n7, n9),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eu.intl.string(eu.t.tzdIwI),
                    description: eu.intl.string(eu.t.hJG8ZN),
                    imageSource: n5(i, n7, n9),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eu.intl.string(eu.t.RSXQYO),
                    description: eu.intl.string(eu.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eu.intl.string(eu.t["uZt5q/"]),
                    description: eu.intl.string(eu.t.ZK3ZoX),
                    imageSource: n5(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eu.intl.formatToPlainString(eu.t.jqhAdL, { premiumMaxSize: l }),
                    description: eu.intl.formatToPlainString(eu.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eu.intl.string(eu.t.NaGpTf),
                    description: eu.intl.string(eu.t["A8O/Qw"]),
                    imageSource: n5(i, ij, ib),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: n8 }),
        r = (0, tx.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, E.Ay)(),
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
        className: u()(n8.perksContainer, t, {
            [n8.partiallyHidden]: i && !n,
            [n8.subscriberNitroHome]: i,
            [n8.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(en.D, {
                variant: "heading-xxl/extrabold",
                className: n8.perksTitle,
                children: i ? eu.intl.string(eu.t.QX14gI) : eu.intl.string(eu.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(n8.perkCardContainer, { [n8.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(ae, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [n8.sizeGizmo]: !n, [n8.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(n4, {
                                onClick: function () {
                                    L.default.track(eJ.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n);
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(n8.cover, { [n8.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var as = s(194509),
    ai = s(222214);
let an = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, es.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eJ.JJy.MARKETING_FLOATING_CTA },
        r = (0, sF.Ay)(),
        o = (0, iV.M)(r);
    return (0, c.jsx)(ee.animated.div, {
        className: u()(ai.iE, { [ai.H8]: i, [ai.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? ai.zW : ai.iJ,
            children: [
                (0, c.jsx)(nV.A, {
                    color: o ? nw.XD.BRAND_INVERTED : void 0,
                    className: u()(ai.x6, { [ai.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : ai.PJ,
                }),
                (0, c.jsx)(as.A, { className: ai.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aa = s(93805);
function al(e) {
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
            ? (0, c.jsx)(nV.A, {
                  color: l ? nw.XD.BRAND_INVERTED : void 0,
                  className: u()(aa.x6, aa.Ph, n, { [aa.Sq]: t && a, [aa.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aa.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(nV.A, {
                  color: l || !a ? nw.XD.BRAND_INVERTED : void 0,
                  className: u()(aa.x6, aa.Ph, n, { [aa.Sq]: t && a, [aa.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(as.A, { className: u()(aa.x6, n), color: a ? void 0 : nw.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aa.UD, i), children: [o, " ", d] });
}
function ar() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(n2.p, { className: aa.zd }),
            (0, c.jsx)(n2.p, { className: aa.G }),
            (0, c.jsx)(n2.p, { className: aa.zy }),
            (0, c.jsx)(n2.p, { className: aa.GX }),
        ],
    });
}
function ac(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = nx();
    return (0, c.jsx)(ea.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(aa.h_, { [aa.If]: s, [aa.jn]: i }),
        children: eu.intl.format(eu.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let ao = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: l } = (0, E.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, eM.QQ)(),
        o = (0, nl.ar)(),
        d = (0, eD.cg)(),
        m = (0, iG.b)().length > 0,
        g = eu.intl.string(eu.t.YCZldK);
    return (0, c.jsx)(E.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(aa.kL, s, { [aa.V1]: !o, [aa.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aa.I6 : aa.G1,
                    children: [
                        (0, c.jsx)(to.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(en.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: g,
                            }),
                        }),
                        m
                            ? (0, c.jsx)("div", {
                                  className: aa.DF,
                                  children: (0, c.jsx)(nd.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(ac, {}),
                        d || r
                            ? (0, c.jsx)("div", {
                                  className: aa.UD,
                                  children: (0, c.jsx)(as.A, { className: u()(aa.x6, i), color: nw.XD.WHITE }),
                              })
                            : (0, c.jsx)(al, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(ac, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(ar, {}),
            ],
        }),
    });
});
var ad = s(22118),
    au = s(918676),
    am = s(967603);
function ag(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(nZ, { lifted: t }) : null;
}
let ax = () => {
        (0, v.P)(T);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, sF.Ay)(),
            n = (0, sH.M)(i),
            [a, l] = o.useState(!1),
            [r, d] = o.useState(!1),
            [m, x] = o.useState(!1),
            [p, f] = o.useState(!1),
            h = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            A = null != h ? (0, ey.EL)(h) : null,
            C = null != A ? ey.Ay.getSkuIdForPlan(A.planId) : null,
            j = null !== C && C !== tk.pe.TIER_2 ? tk.pe.TIER_2 : null,
            b = (0, eL.V)(),
            R = b?.subscription_trial?.sku_id,
            I = (0, nl.ar)(),
            _ = (0, eD.cg)(),
            P = (0, tz.Gh)("premium-marketing-settings-page"),
            S = _ ?? !1,
            y = (0, g.bG)([nH.A], () => {
                let e = nH.A.getMarketingComponentByType(eN.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, nB.Q)(),
            { analyticsLocations: M } = (0, E.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            f(!0);
        }, []);
        let k = (0, c.jsx)("div", {
            className: am.dY,
            children: (0, c.jsx)(B.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(nW.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(nV.A, {
                        showIcon: !1,
                        subscriptionTier: tk.pe.TIER_0,
                        className: au.Ph,
                        look: nw.pR.OUTLINED,
                        color: nw.XD.WHITE,
                        buttonShineClassName: au.Qr,
                    }),
                    tier2CTAButton:
                        R === tk.pe.TIER_0
                            ? (0, c.jsx)(nV.A, {
                                  showIcon: !1,
                                  subscriptionTier: tk.pe.TIER_2,
                                  className: au.Ph,
                                  look: nw.pR.OUTLINED,
                                  color: nw.XD.WHITE,
                                  buttonShineClassName: au.Qr,
                              })
                            : (0, c.jsx)(nV.A, {
                                  color: nw.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tk.pe.TIER_2,
                                  className: au.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: au.Ac },
                                  buttonShineClassName: au.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: am.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nY, { premiumSubscription: h, className: u()(am.R3, { [am.aZ]: I }) }),
                I &&
                    (0, c.jsxs)("div", {
                        className: am.n1,
                        children: [
                            (0, c.jsx)(ag, { inOfferExperience: I }),
                            P &&
                                (0, c.jsx)(tX.l, {
                                    className: am.ij,
                                    size: "md",
                                    location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [am.V1]: !I }),
                    children: [
                        null != y && (0, c.jsx)(nz.c, { className: am.w$, config: y }),
                        (0, c.jsxs)("div", {
                            className: am.iS,
                            children: [
                                P &&
                                    !I &&
                                    (0, c.jsx)(tX.l, {
                                        className: am.ij,
                                        size: "md",
                                        location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(B.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(ao, {
                                        ref: t,
                                        subscriptionTier: j,
                                        className: u()({ [am.p7]: I, [am.Pw]: I, [am.AG]: _, [am.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: am.Ol, children: (0, c.jsx)(nF.I, { component: D }) }),
                k,
                (0, c.jsx)(at, { className: am.B_ }),
                (0, c.jsx)("div", { className: am.aC, children: (0, c.jsx)(ad.A, { className: am.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: am.hz }),
                (0, c.jsx)(an, {
                    isVisible: !a && !r && p,
                    subscriptionTier: j,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: _,
                }),
                (0, c.jsx)(B.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            x(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: am._Z }),
                }),
                (0, c.jsx)("img", {
                    src: ik,
                    className: am.Kw,
                    width: 112,
                    height: 85,
                    alt: eu.intl.string(eu.t.X4IxWL),
                }),
            ],
        });
    },
    ap = function (e) {
        let { entrypoint: t } = e,
            s = (0, eL.V)(),
            i = (0, eO.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, iw.NF)({ trialOffer: s }),
            a = (0, iw.Tp)(),
            l = (0, g.bG)([eQ.A], () => eQ.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                !0 === n && (0, iw.QG)(), !0 === a && (0, iw.ne)(l), (null != s || null != i) && (0, G.u1)(s, i);
            }, [s, i, n, a, l]),
            t)
        ) {
            case tk.Mf.UserSettings:
                return (0, c.jsx)(ax, {});
            case tk.Mf.ApplicationStoreHome:
                return (0, c.jsx)(nG, {});
            default:
                return null;
        }
    };
var af = s(738783);
let ah = function (e) {
    let { entrypoint: t = tk.Mf.UserSettings } = e;
    (0, v.P)(T);
    let s = (0, j.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
        n = (0, U.ds)(),
        { sourceAnalyticsLocations: a, analyticsLocations: l } = (0, E.Ay)(N.A.PREMIUM_MARKETING),
        r = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        d = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        I = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        _ = I?.id,
        w = (0, eL.V)(),
        F = (0, eO.O)({ includePremiumGroupDiscount: !0 }),
        B = (0, b.Y)(tk.T7),
        [V, z] = o.useState(!0),
        W = o.useRef(0),
        K = (0, k.YE)(I, tk.PremiumTypes.TIER_2),
        X = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        Y = null != X && X.status === eJ.Dmq.CANCELED;
    (0, iG.b)(),
        o.useEffect(() => {
            p.h.wait(async () => {
                let e = Date.now();
                await Promise.all([C.hP(), C.$o(), (0, f.zS)(null, null, eJ.tF5.DISCOVERY)]),
                    (W.current = Date.now() - e),
                    z(!1);
            });
        }, []),
        o.useEffect(() => {
            V ||
                L.default.track(eJ.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: W.current,
                });
        }, [a, V]),
        o.useEffect(() => {
            s && (null != w || null != F) && (0, G.u1)(w, F);
        }, [s, w, F]);
    let Q = (0, m.zy)(),
        Z = o.useRef(!1),
        q = r && d && B,
        [J, $] = o.useState(q);
    q && !J && $(!0),
        o.useEffect(() => {
            if (Z.current || !q) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tk.pe.TIER_0, nitro: tk.pe.TIER_2 }[e];
            null != t &&
                ((Z.current = !0),
                (0, S.bG)(eJ.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: t, analyticsLocations: l }));
        }, [q, Q.search, l]);
    let ee = (0, g.bG)([y.A], () => y.A.enabled),
        et = t === tk.Mf.ApplicationStoreHome,
        es = ee
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(R.uK, {})
              : et && K
                ? (0, c.jsx)(E.f5, { value: l, children: (0, c.jsx)(iU, { userId: _ }) })
                : J
                  ? null
                  : (0, c.jsx)("div", { className: u()(af.kL, af.Lq), children: (0, c.jsx)(x.y, {}) });
    if (null != es) {
        let e = !ee && !s && et && K;
        return i && e && !n && !Y ? es : (0, c.jsxs)(c.Fragment, { children: [et && (0, c.jsx)(A.A, {}), es] });
    }
    return (0, c.jsx)(E.f5, { value: l, children: (0, c.jsx)(ap, { entrypoint: t }) });
};
