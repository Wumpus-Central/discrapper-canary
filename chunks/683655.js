(s.d(t, { A: () => rc }), s(323874), s(14289), s(35956), s(205816));
var i,
    n,
    a,
    r,
    l,
    c = s(477900),
    o = s(582128),
    d = s(503698),
    u = s.n(d),
    m = s(806163),
    x = s(17928),
    g = s(289873),
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
    P = s(75678),
    S = s(976860),
    y = s(351906),
    D = s(287809),
    O = s(295405),
    M = s(166403),
    k = s(174459),
    L = s(474090),
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
    J = s(321191),
    Q = s(903209),
    q = s(927813),
    $ = s(107857),
    ee = s(131168),
    et = s(482589),
    es = s(511484),
    ei = s(479669),
    en = s(661531),
    ea = s(717421),
    er = s(331322),
    el = s(297264),
    ec = s(834730),
    eo = s(821609),
    ed = s(403581),
    eu = s(815021),
    em = s(576243),
    ex = s(49999),
    eg = s(375708),
    ef = s(862068);
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
                                (i(ex.i.TAKE_ACTION),
                                    (0, P.A)({
                                        subscription: t,
                                        initialPlanId: s.yearlyPlanId,
                                        analyticsLocations: n,
                                    }));
                            },
                        }),
                    ],
                }),
                (0, c.jsx)(eu.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eg.intl.string(eg.t.WAI6xu),
                    onClick: () => i(ex.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var eh = s(428331),
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
                        (0, c.jsx)(el.D, {
                            variant: "heading-xxl/bold",
                            className: ej.R_,
                            children: eg.intl.string(eg.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(ec.E, { variant: "text-md/medium", children: eg.intl.string(eg.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: ej.SB,
                            children: (0, c.jsx)(eA.A, {
                                buttonTextOverride: eg.intl.string(eg.t.Ve9Ge6),
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
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
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
    eO = s(975571),
    eM = s(158045),
    ek = s(725018),
    eL = s(89366),
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
    eJ = s(854627),
    eQ = s(427262),
    eq = s(197630),
    e$ = s(851746),
    e0 = s(326084),
    e1 = s(664654);
s(232198);
var e2 = s(652215),
    e3 = s(879416);
function e7() {
    let e,
        t,
        s,
        { location: i = "PremiumNitroHomeReferralBanner" } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { referralSentUsers: n } = (0, e1.J)(),
        a = (0, x.bG)([e$.A], () => e$.A.getRecipientStatus()),
        r = !1 !== (0, x.bG)([e$.A], () => e$.A.getHasEligibleFriends()),
        { isEligibleForIncentive: l, referralRewardType: c, useAltReferralCardArt: o } = (0, e3.x)({ location: i }),
        d = l ? c : null,
        u =
            ((e = 0),
            (t = 0),
            (s = 0),
            a.forEach((i) => {
                i === e0.aK.REFERRER_REWARD_GRANTED
                    ? (e++, t++, s++)
                    : i === e0.aK.CONVERTED
                      ? (t++, s++)
                      : i === e0.aK.REDEEMED && s++;
            }),
            { numRewardGranted: e, numConverted: t, numRedeemed: s, numSent: a.size }),
        m = a.size === e1.Z,
        g = (function (e, t, s) {
            let i = eO.A.getArticleURL(e2.MVz.REFERRAL_PROGRAM);
            if (null != s)
                return t.numRewardGranted === e1.Z
                    ? s === eq.xb.ORBS
                        ? eg.intl.format(eg.t.OluhLp, { helpdeskArticle: i })
                        : eg.intl.format(eg.t["8BYihN"], { helpdeskArticle: i })
                    : t.numSent === e1.Z
                      ? s === eq.xb.ORBS
                          ? eg.intl.format(eg.t["1aV1j9"], { helpdeskArticle: i })
                          : eg.intl.format(eg.t.QNrPuS, { helpdeskArticle: i })
                      : e
                        ? s === eq.xb.ORBS
                            ? eg.intl.format(eg.t.cfE0uG, { numOrbs: 500, helpdeskArticle: i })
                            : eg.intl.format(eg.t["+fcvlI"], { helpdeskArticle: i })
                        : eg.intl.format(eg.t["a0+Jwv"], { helpdeskArticle: i });
            return e
                ? t.numSent === e1.Z
                    ? t.numRedeemed === e1.Z
                        ? eg.intl.format(eg.t["1aEjsH"], { helpdeskArticle: i })
                        : eg.intl.format(eg.t["+u3AOO"], { helpdeskArticle: i })
                    : eg.intl.format(eg.t["omMr+V"], { helpdeskArticle: i })
                : eg.intl.format(eg.t["zWhX/Q"], { helpdeskArticle: i });
        })(r, u, d),
        f =
            d === eq.xb.ORBS
                ? eg.intl.string(eg.t.tAlkl4)
                : d === eq.xb.DISCOUNT
                  ? eg.intl.formatToPlainString(eg.t["/JJ9I5"], { discountPercent: 30 })
                  : eg.intl.string(eg.t.USo4s7);
    return {
        referralSentUsers: n,
        nReferralsSent: u.numSent,
        hasEligibleFriends: r,
        allSent: m,
        headingText: f,
        bodyText: g,
        referralStatus: u,
        isEligibleForIncentive: l,
        referralIncentiveRewardType: d,
        useAltReferralCardArt: o,
    };
}
var e6 = s(212737),
    e5 = s(162907);
let e8 =
        "https://cdn.discordapp.com/assets/content/7932c6a6c499ae3ae7d3c3bc398778b62517d38df2c179320dc872062c73d5e9.png",
    e9 =
        "https://cdn.discordapp.com/assets/content/23f043bae7978056c72b82e7a4af6618d2fdb874c40857f580b0978b3b48ab0b.png",
    e4 =
        "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg";
function te(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    (k.default.track(e2.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, ev.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        }));
}
function tt(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eJ.A)({ userId: t.id, size: eY._3.SIZE_24 });
    return (0, c.jsx)(
        eK.eu,
        { className: e5.bj, src: s, "aria-label": (0, eQ.mG)(t), size: eY._3.SIZE_24, ...i },
        t.id,
    );
}
function ts(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e5.p, children: t });
}
function ti(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e5.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < e1.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(tt, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(ts, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let tn = { width: 142, height: 80 },
    ta = { width: 90, height: 60 };
function tr(e) {
    let {
            nReferralsSent: t,
            imageSize: s = 93,
            backgroundClassName: i,
            ringClassName: n,
            referralRewardType: a = null,
            useAltReferralCardArt: r = !1,
        } = e,
        {
            src: l,
            srcSet: o,
            dimensions: d,
        } = r
            ? a === eq.xb.ORBS
                ? {
                      src: e9,
                      srcSet: `${e9} 1x, https://cdn.discordapp.com/assets/content/5189110776398f40547893b913eee3ec5107abb10086a4c587a072bc001a04e6.png 2x`,
                      dimensions: tn,
                  }
                : a === eq.xb.DISCOUNT
                  ? {
                        src: e8,
                        srcSet: `${e8} 1x, https://cdn.discordapp.com/assets/content/945caab9e3f5f20d5f81c3ee82c9e83ef6be4e2ca5690550a6a44582fa6aadc3.png 2x`,
                        dimensions: ta,
                    }
                  : { src: e4, srcSet: void 0, dimensions: null }
            : { src: e4, srcSet: void 0, dimensions: null },
        u = d?.width ?? s,
        m = d?.height ?? s;
    return (0, c.jsx)(eX.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e5.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e5.e0,
        overlayClassName: t === e1.Z ? e5.ys : void 0,
        children:
            null != o
                ? (0, c.jsx)("img", { src: l, srcSet: o, alt: "", role: "presentation", width: u, height: m })
                : (0, c.jsx)(eZ._, { src: l, height: m, width: u, zoomable: !1 }),
    });
}
function tl(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = e7();
    return (0, c.jsxs)("div", {
        className: u()(e5.kL, t),
        children: [
            (0, c.jsx)("div", { className: e5.G3, children: (0, c.jsx)(tr, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: e5.IH,
                children: [
                    (0, c.jsx)(ti, { referralSentUsers: s, className: e5.GV }),
                    (0, c.jsxs)("div", {
                        className: e5.n4,
                        children: [
                            (0, c.jsx)(el.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eg.intl.string(eg.t.USo4s7),
                            }),
                            (0, c.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
                        ],
                    }),
                    (0, c.jsx)(eo.$, {
                        variant: "primary",
                        disabled: !1 === n || !0 === a,
                        text: eg.intl.string(eg.t.Lm2nFc),
                        onClick: () =>
                            te({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var tc = s(792656),
    to = s(536637),
    td = s.n(to),
    tu = s(496431),
    tm = s(850292);
let tx = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, tu.A)(td()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: r, minutes: l, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: r, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(tm.Xl, s, { [tm.a3]: "text-lg/bold" === i }),
        children: [
            (0, c.jsx)(ec.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: eg.intl.string(eg.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: tm.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: tm.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: tm.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: tm.B2,
                                                        children: (0, c.jsx)(ec.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: tm.B2,
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
                                                            return eg.intl.string(eg.t.ixASa2);
                                                        case "hours":
                                                            return eg.intl.string(eg.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eg.intl.string(eg.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eg.intl.string(eg.t.JhaiLW);
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
                                        className: tm.cV,
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
var tg = s(473702),
    tf = s(609425),
    tp = s(660184),
    th = s(938767);
function tN() {
    let e = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tf.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eJ.A)({ userId: e?.id, size: eY._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eQ.mG)(e);
    return (0, c.jsxs)("div", {
        className: th.kL,
        children: [
            (0, c.jsx)("div", {
                className: th.my,
                children: (0, c.jsx)(eK.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eY._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: th.QC, children: (0, c.jsx)(tp.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tA = s(707554),
    tj = s(628154);
let tb = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(tA.F, {
        forceLevel: 1,
        children: (0, c.jsx)(el.D, { className: u()(tj.w, t, i && tj.n), variant: n, color: s, children: a }),
    });
};
var tC = s(508770),
    tE = s(478016),
    tT = s(318254),
    tR = s(626031),
    tv = s(957457);
function tI(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eq.xb.ORBS
          ? (0, c.jsx)(t_, { nRewardsGranted: t, className: i })
          : s === eq.xb.DISCOUNT
            ? (0, c.jsx)(tP, { nRewardsGranted: t, className: i })
            : null;
}
function t_(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 500 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(i);
        }, [i]),
        (0, c.jsxs)(er.B, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: tv.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(tT.C, { size: "xs", color: en.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(tR.t, {
                            value: n,
                            onValueChange: e2.tEg,
                            onValueReached: e2.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "text-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(ec.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: eg.intl.string(eg.t.UhguER),
                }),
            ],
        })
    );
}
function tP(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(er.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": eg.intl.formatToPlainString(eg.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(tE.U, { size: "xs", color: en.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(ec.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eg.intl.format(eg.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var tS = s(558992);
function ty(e) {
    let { className: t } = e,
        {
            referralSentUsers: s,
            nReferralsSent: i,
            hasEligibleFriends: n,
            allSent: a,
            headingText: r,
            bodyText: l,
            referralStatus: o,
            isEligibleForIncentive: d,
            referralIncentiveRewardType: m,
            useAltReferralCardArt: x,
        } = e7({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(tS.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tS.G3,
                children: (0, c.jsx)(tr, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tS.HP,
                    ringClassName: tS.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(tS.IH, d && tS.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: tS.aZ,
                            children: (0, c.jsx)(tC.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: tS.n4,
                        children: [
                            (0, c.jsx)(el.D, {
                                variant: d ? "heading-lg/bold" : "heading-lg/semibold",
                                color: "text-strong",
                                children: r,
                            }),
                            (0, c.jsx)(ec.E, {
                                variant: d ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: l,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: tS.Wp,
                              children: [
                                  (0, c.jsx)(ti, { referralSentUsers: s }),
                                  (0, c.jsx)(tI, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(ti, { referralSentUsers: s, className: tS.t7 }),
                ],
            }),
            (0, c.jsx)(eo.$, {
                variant: "primary",
                disabled: !1 === n || !0 === a,
                text: eg.intl.string(eg.t.Lm2nFc),
                onClick: () =>
                    te({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tD = s(702841),
    tO = s(676279),
    tM = s(396583),
    tk = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tL = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tU = (e) => {
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
        [x, g] = (0, o.useState)(1),
        f = (0, ea.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * l },
                      onRest: () => g((e) => -1 * e),
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
        [j, b] = (0, o.useState)(0),
        [C, E] = (0, o.useState)(1),
        T = (0, ea.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tM.A)(() => {
        (b(C * (0.5 * Math.random() * 5 + 2.5)), E((e) => -1 * e));
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
                  translateX: a ? T.xOffset.to((e) => `${e}px`) : 0,
                  scale: f.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tG = s(382168);
let tw = function (e) {
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
        keyAssetClassName: x,
        starAssetClassName: g,
        animationSpeedScale: f = 1,
        blurScale: p = 1,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(tG.nJ, i),
                    children: (0, c.jsx)(tU, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tk.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tL.UP,
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
                    className: u()(tG.IN, n),
                    children: (0, c.jsx)(tU, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tk.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tL.DOWN,
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
                    className: u()(tG.Gj, a),
                    children: (0, c.jsx)(tU, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tk.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tL.DOWN,
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
                    className: u()(tG.FV, r),
                    children: (0, c.jsx)(tU, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tk.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tL.UP,
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
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, c.jsx)("div", {
                    className: u()(tG.E1, l),
                    children: (0, c.jsx)(tU, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tk.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tL.UP,
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
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
var tB = s(607470);
let tH =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tF = function (e) {
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
                  children: (0, c.jsx)(tU, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tk.SINE },
                      parallaxAnimationData: {
                          pathDirection: tL.UP,
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
                                tB.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tH }),
                                },
                                tH,
                            ),
                  }),
              });
    },
    tV = function (e) {
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
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: f = 1,
            } = e,
            p = (0, tD.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
            h = (0, tO.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tF, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, c.jsx)(tw, {
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
                    keyAssetClassName: x,
                    starAssetClassName: g,
                    animationSpeedScale: f,
                }),
            ],
        });
    };
var tz = s(942663);
let tW = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tV, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tz.wG, s && tz.Vx),
        flyingWumpusAssetClassName: u()(tz.lu, s && tz.ov),
        boltContainerClassName: u()(tz.nJ, s && tz.Wc),
        hammerContainerClassName: u()(tz.Gj, s && tz.XA),
        keyContainerClassName: u()(tz.FV, s && tz.oZ),
        starContainerClassName: u()(tz.E1, s && tz.LN),
        boltAssetClassName: u()(tz.j7, s && tz.QN),
        hammerAssetClassName: u()(tz.Wv, s && tz.B9),
        keyAssetClassName: u()(tz.rs, s && tz.I1),
        starAssetClassName: u()(tz.OY, s && tz.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tY = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tK = s(454273);
let tX = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: g } = eH(!(0, x.bG)([eI.Ay], () => eI.Ay.useReducedMotion)),
        f =
            ((t = { [tY.MORNING]: eg.t["Wvc/I+"], [tY.AFTERNOON]: eg.t["d+0STx"], [tY.EVENING]: eg.t.CqsxKI }),
            eg.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tY.MORNING
                        : s >= 12 && s < 17
                          ? tY.AFTERNOON
                          : tY.EVENING
                ],
            )),
        p = o ?? (l ? (0, c.jsx)(ty, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tK.kL, tK.Eg, i),
        ref: r,
        children: (0, c.jsxs)("div", {
            className: u()(tK.W2, tK.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    className: tK.ZU,
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
                                        (0, c.jsx)(tb, {
                                            className: tK.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: f,
                                        }),
                                        (0, c.jsx)(tN, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tK.y3,
                    children: (0, c.jsx)(tW, { containerVisibilityPercentage: g, compact: null == p }),
                }),
            ],
        }),
    });
};
var tZ = s(924864);
let tJ =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tQ = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, tD.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: tZ.BI,
                    children: (0, c.jsx)(tU, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tk.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tL.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, c.jsx)("img", { src: tJ, alt: "", className: tZ.Q }),
                    }),
                }),
                (0, c.jsx)(tw, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: tZ.Gj,
                    keyContainerClassName: tZ.FV,
                    starContainerClassName: tZ.E1,
                    hammerAssetClassName: tZ.Wv,
                    keyAssetClassName: tZ.rs,
                    starAssetClassName: tZ.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var tq = s(549926);
let t$ = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tV, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tq.wG,
        flyingWumpusAssetClassName: tq.lu,
        boltContainerClassName: tq.nJ,
        hammerContainerClassName: tq.Gj,
        keyContainerClassName: tq.FV,
        starContainerClassName: tq.E1,
        boltAssetClassName: tq.j7,
        hammerAssetClassName: tq.Wv,
        keyAssetClassName: tq.rs,
        starAssetClassName: tq.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var t0 = s(499126);
function t1(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tV, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: t0.wG,
        flyingWumpusAssetClassName: t0.lu,
        boltContainerClassName: t0.nJ,
        hammerContainerClassName: t0.Gj,
        keyContainerClassName: t0.FV,
        starContainerClassName: t0.E1,
        boltAssetClassName: t0.j7,
        hammerAssetClassName: t0.Wv,
        keyAssetClassName: t0.rs,
        starAssetClassName: t0.OY,
        animationSpeedScale: 1 / 0.7,
    });
}
let t2 = function () {
    let e = (0, tD.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
    return (0, c.jsx)(tw, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: t0.cI,
        hammerContainerClassName: t0.qg,
        keyContainerClassName: t0.h2,
        boltContainerClassName: t0.Bz,
        starAssetClassName: t0.ks,
        hammerAssetClassName: t0.GY,
        keyAssetClassName: t0.p4,
        boltAssetClassName: t0.vy,
    });
};
var t3 = s(202541);
function t7(e, t, i) {
    (0, ev.openModalLazy)(async () => {
        let { PremiumBrandRefreshSubscriptionCancellationModal: n } = await Promise.all([
            s.e("489361"),
            s.e("227853"),
            s.e("470126"),
            s.e("128804"),
            s.e("71151"),
            s.e("286615"),
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
            s.e("452075"),
            s.e("900277"),
            s.e("127962"),
            s.e("364827"),
            s.e("907167"),
            s.e("861060"),
            s.e("952372"),
            s.e("910486"),
            s.e("56366"),
            s.e("797595"),
            s.e("641248"),
            s.e("544571"),
            s.e("40291"),
            s.e("729963"),
            s.e("392075"),
            s.e("102328"),
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
function t6(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tK.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tK.ap,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, c.jsx)(eV, { text: eg.intl.string(eg.t.yhldRB) }),
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 12,
                            className: tK.rG,
                            children: [
                                (0, c.jsx)(tb, { children: eg.intl.format(eg.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: eg.intl.string(eg.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, c.jsx)(tc.A, {
                                    size: "md",
                                    buttonTextOverride: eg.intl.string(eg.t["2+luBl"]),
                                    iconOverride: ed.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(eo.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eg.intl.string(eg.t.Af7ye6),
                                    onClick: () => (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tK.Hk,
                    children: [(0, c.jsx)(eT, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(t2, {})],
                }),
            ],
        }),
    });
}
function t5(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: r } = eH(!(0, x.bG)([eI.Ay], () => eI.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tK.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tK.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 24,
                    className: tK.E2,
                    children: [
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eV, { text: eg.intl.string(eg.t.yhldRB) }),
                                (0, c.jsx)(tb, { children: eg.intl.format(eg.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tK.X8,
                                    children: (0, c.jsx)(ec.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: eg.intl.string(eg.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tK.oF,
                            children: [
                                (0, c.jsx)(tc.A, {
                                    size: "md",
                                    buttonTextOverride: eg.intl.string(eg.t["2+luBl"]),
                                    iconOverride: ed.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(eo.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eg.intl.string(eg.t.Af7ye6),
                                    onClick: () => (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tK.Tg, children: (0, c.jsx)(t1, { containerVisibilityPercentage: r }) }),
            ],
        }),
    });
}
function t8(e) {
    let {
            className: t,
            buttonVisibilityRef: s,
            userDiscountOffer: i,
            discountedPrice: n,
            premiumSubscription: a,
            analyticsLocations: r,
            headingTop: l,
            showPill: o,
            shouldShowReferralProgressBar: d,
            marketingBanner: m,
        } = e,
        { visibilityPercentageRef: g, visibilityPercentage: f } = eH(!(0, x.bG)([eI.Ay], () => eI.Ay.useReducedMotion)),
        p = m ?? (d ? (0, c.jsx)(ty, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tK.kL, tK.Eg, t),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: u()(tK.W2, tK.HQ),
            ref: g,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tK.ZU, tK.GW),
                    children: [
                        o && l,
                        null != i.expiresAt &&
                            (0, c.jsx)(tx, { expiresAt: i.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(tb, {
                                    children: eg.intl.format(eg.t["3yZP0G"], { percent: i.discount.amount }),
                                }),
                                null != n &&
                                    (0, c.jsx)(ec.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: eg.intl.format(eg.t["3Q4wCy"], {
                                            discountedPrice: n,
                                            billingPeriod: (0, eM.Ke)(i.discount.intervalType),
                                            numMonths: i.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(eo.$, {
                                    variant: "expressive",
                                    icon: ed.t,
                                    size: "md",
                                    text: eg.intl.string(eg.t.zrCzVB),
                                    onClick: () => t7(r, a, tg.g.CONFIRM_DISCOUNT),
                                }),
                                (0, c.jsx)(eA.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eg.intl.string(eg.t["3KomGa"]),
                                }),
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tK.y3, tK.Xx),
                    children: (0, c.jsx)(t$, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function t9(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingText: n,
            headingTop: a,
            showPill: r,
            shouldShowChurnVariant: l,
            premiumSubscription: o,
            userDiscountOffer: d,
            discountedPrice: m,
            buttonVisibilityRef: g,
        } = se(),
        { isInNitroHomeHeaderTreatment: f } = H("subscriber_home_hero"),
        p = V("subscriber_home_hero"),
        { analyticsLocations: h } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        N = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
        b = (0, ek.cg)(),
        C = null != o && o.status === e2.Dmq.CANCELED,
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
    null == R && i && !E && (R = (0, c.jsx)(tl, {}));
    let v = (0, eG.V)(),
        I = (0, eU.O)(),
        _ = (0, es.U9)(I, t3.pe.TIER_2) ? t3.pe.TIER_2 : void 0,
        P = null != o && o.status !== e2.Dmq.ACCOUNT_HOLD && o.hasAnyPremiumNitro,
        S = (0, eP.A)(),
        y = S.isFractionalPremiumActive && !P && null == R && !l,
        { visibilityPercentageRef: D, visibilityPercentage: O } = eH(!(0, x.bG)([eI.Ay], () => eI.Ay.useReducedMotion));
    if (s)
        return p
            ? (0, c.jsx)(t5, { fpEndsAt: S.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
            : (0, c.jsx)(t6, { fpEndsAt: S.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g });
    if (E) {
        let e = y
            ? (0, c.jsxs)("div", {
                  className: tK.UJ,
                  children: [
                      (0, c.jsx)(tc.A, {
                          size: "md",
                          hasActivePromotion: !!b,
                          subscriptionTier: v?.subscriptionTrial?.skuId ?? _,
                      }),
                      (0, c.jsx)(eA.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eg.intl.string(eg.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tX, {
            className: t,
            headingTop: a,
            showPill: r,
            buttonVisibilityRef: g,
            shouldShowReferralProgressBar: i,
            marketingBanner: T,
            heroButtons: e,
        });
    }
    return p && C
        ? l && null != d && null != o
            ? (0, c.jsx)(t8, {
                  className: t,
                  buttonVisibilityRef: g,
                  userDiscountOffer: d,
                  discountedPrice: m,
                  premiumSubscription: o,
                  analyticsLocations: h,
                  headingTop: a,
                  showPill: r,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
            : (0, c.jsx)(tX, {
                  className: t,
                  headingTop: a,
                  showPill: r,
                  buttonVisibilityRef: g,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
        : (0, c.jsx)("div", {
              className: u()(tK.kL, t),
              "data-testid": "subscriber-nitro-home-hero-header",
              ref: g,
              children: (0, c.jsxs)("div", {
                  className: tK.Qs,
                  ref: D,
                  children: [
                      r && a,
                      (0, c.jsxs)("div", {
                          className: tK.N1,
                          children: [
                              (0, c.jsx)(tQ, { containerVisibilityPercentage: O }),
                              l &&
                                  d?.expiresAt != null &&
                                  (0, c.jsx)(tx, { expiresAt: d.expiresAt.toISOString(), className: tK.IZ }),
                              (0, c.jsx)(tb, {
                                  children:
                                      l && null != d
                                          ? eg.intl.format(eg.t["3yZP0G"], { percent: d.discount.amount })
                                          : n,
                              }),
                              l &&
                                  null != d &&
                                  null != m &&
                                  (0, c.jsx)(ec.E, {
                                      className: tK.jG,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: eg.intl.format(eg.t["3Q4wCy"], {
                                          discountedPrice: m,
                                          billingPeriod: (0, eM.Ke)(d.discount.intervalType),
                                          numMonths: d.discount.intervalCount,
                                      }),
                                  }),
                          ],
                      }),
                      (0, c.jsxs)("div", {
                          className: y || l ? tK.UJ : void 0,
                          children: [
                              y &&
                                  (0, c.jsx)(tc.A, {
                                      size: "md",
                                      hasActivePromotion: !!b,
                                      subscriptionTier: v?.subscriptionTrial?.skuId ?? _,
                                  }),
                              l &&
                                  null != o &&
                                  (0, c.jsx)(eo.$, {
                                      variant: "expressive",
                                      icon: ed.t,
                                      size: "md",
                                      text: eg.intl.string(eg.t.zrCzVB),
                                      onClick: () => t7(h, o, tg.g.CONFIRM_DISCOUNT),
                                  }),
                              (0, c.jsx)(eA.A, {
                                  variant: y || l ? "secondary" : "expressive",
                                  size: "md",
                                  buttonTextOverride: eg.intl.string(eg.t["3KomGa"]),
                              }),
                          ],
                      }),
                      R,
                  ],
              }),
          });
}
let [t4, se] = (0, eD.A)(),
    st = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = (0, U.ds)(),
            l = (0, eL.QQ)(),
            o = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            d = null != o && o.status === e2.Dmq.CANCELED && null != i,
            u = l && !d,
            m = eg.intl.string(eg.t.qYKftX),
            g = (0, eW.m)(),
            f = eg.intl.string(eg.t.ifwQZb),
            { fractionalState: p, endsAt: h } = (0, eP.A)(),
            N = (0, e_.Ay)(h, e_.yE.CREDITS_ENDS_IN),
            b = null;
        if (p === t3.xc.NONE || r) b = (0, c.jsx)(eV, { text: m });
        else {
            u = !0;
            let e = eg.intl.format(eg.t["yR+oDD"], {
                helpCenterLink: eO.A.getArticleURL(e2.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            b = (0, c.jsx)(eR.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tK.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tK.V_,
                        children: (0, c.jsx)("div", { className: tK.eL, children: (0, c.jsx)(eV, { text: N }) }),
                    }),
            });
        }
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)(t4.Provider, {
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
                children: (0, c.jsx)(t9, { className: t, isInReverseTrial: r, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var ss = s(820284),
    si = s(742589),
    sn = s(392943),
    sa = s(285373),
    sr = s(603202),
    sl = s(673992);
let sc = function () {
    return (0, c.jsx)(ss.A, {
        section: e2.JJy.NAVIGATION,
        children: (0, c.jsx)(si.A, {
            className: u()(sr.TQ, sl.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: sr.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: sl.wk,
                        children: [
                            (0, c.jsx)(ed.t, { colorClass: sl.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": eg.intl.string(eg.t.Ipxkog),
                                className: sl.Ss,
                                children: (0, c.jsx)(sn.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: sr.MQ,
                        children: [
                            (0, c.jsx)(sa.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var so = s(325499),
    sd = s(562708),
    su = s(885574),
    sm = s(43990),
    sx = s(993077),
    sg = s(139286),
    sf = s(872725),
    sp = s(920050),
    sh = s(51965),
    sN = s(375776),
    sA = s(727811),
    sj = s(222652),
    sb = s(553875),
    sC = s(934353);
function sE(e) {
    let { openRewardModal: t } = e,
        s = (0, sj.z)();
    if (s.kind === sj.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: sC.R$,
            children: [
                (0, c.jsx)(tc.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: t3.pe.TIER_2,
                }),
                (0, c.jsx)(eo.$, { variant: "secondary", size: "md", text: eg.intl.string(eg.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === sA.P.CLAIMED
            ? { text: eg.intl.string(sb.default.Plwzgf) }
            : { text: eg.intl.string(eg.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: sC.R$,
                children: [
                    (0, c.jsx)(sh.A, {
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
            s.claimStatus === sA.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: sC.ed,
                    children: [
                        (0, c.jsx)(su.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: eg.intl.string(sb.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sT(e) {
    let { glowing: t = !1 } = e;
    (0, sg.A)({
        type: sd.ImpressionTypes.VIEW,
        name: sd.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: sp.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ev.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(sm.N, {
        theme: e2.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, sC.kL),
                    children: (0, c.jsx)(sf.A, {
                        cardType: sx.s.CUSTOM,
                        cardClassName: sC.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: sC.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sC.j,
                                    children: [
                                        (0, c.jsx)("div", { className: sC._g }),
                                        (0, c.jsx)("div", { className: sC.$h }),
                                        (0, c.jsx)("div", { className: sC.Rv }),
                                        (0, c.jsx)("div", { className: sC.Lw }),
                                        (0, c.jsx)("div", { className: sC.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: sC.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: sC.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(el.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sC.DD,
                                            children: eg.intl.string(sb.default.RGT513),
                                        }),
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sC.h_,
                                            children: eg.intl.string(sb.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sE, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sR = s(744064);
function sv(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, sj.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === sj.N.SUBSCRIBE
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
    return (0, c.jsx)(sR.S, {
        id: sp.XBOX_PREMIUM_PERK_CARD_ID,
        title: eg.intl.string(sb.default.UVL9tD),
        description: eg.intl.string(sb.default["I+IXr0"]),
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
function sI(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(sv, { ...e }) });
}
var s_ = s(700556),
    sP = s(821874);
function sS(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: r } = e,
        l = sP.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(l, null != n && s_.Jx, r), children: a }) : null,
        ],
    });
}
var sy = s(695366),
    sD = s(789861),
    sO = s(592909),
    sM = s(398523),
    sk = s(881373),
    sL = s(555393),
    sU = s(852218),
    sG = s(923650),
    sw = s(612413),
    sB = s(310235),
    sH = s(334551),
    sF = s(762359);
let sV =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sz =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg",
    sW =
        "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg";
function sY() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sO.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sO.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sk.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = sM.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, sw.mh)({ location: "useThirdPartyPartnerPerkCards" }),
        r = null === (0, sL.N)(),
        l = (0, so.b)("useHardwarePartnerPerkCards"),
        { currentDate: d, nDaysInMonth: u } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = l ? void 0 : eg.intl.string(eg.t.y2b7CA),
            m = t
                ? {
                      id: sp.CALL_OF_DUTY_3PP_CARD_ID,
                      title: eg.intl.string(sB.default.F0b4Z8),
                      description: eg.intl.formatToPlainString(sB.default["hworR+"], { validDates: (0, sD.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: eg.intl.formatToPlainString(sB.default.g7iyvR, { date: (0, sD.mh)() }),
                      caption: (0, c.jsx)("img", { src: sz, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sV,
                      ctaText: eg.intl.string(sB.default.fcopjf),
                      onCtaClick: () =>
                          (0, sG.P)({
                              partnerIds: [sU.Bt],
                              title: eg.intl.string(sB.default.YJsqDS),
                              subtitle: eg.intl.format(sB.default.ieA3V0, {
                                  termsUrl:
                                      "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                              }),
                              modalTeaser: {
                                  title: eg.intl.string(sB.default.Dkm10r),
                                  body: eg.intl.string(sB.default.LHAkT9),
                              },
                              analyticsLocations: e,
                          }),
                      analyticsOptions: { thirdPartyPartner: sU.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = s
                ? {
                      id: sp.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: eg.intl.string(sB.default["IcD/7p"]),
                      description: eg.intl.formatToPlainString(sB.default.hausFi, { date: (0, sD.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: eg.intl.string(sB.default.fxF0Jz),
                      caption: (0, c.jsx)("img", { src: sz, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sV,
                      analyticsOptions: { thirdPartyPartner: sU.Bt },
                  }
                : null,
            g = i
                ? {
                      id: sp.LOGITECH_3PP_CARD_ID,
                      title: eg.intl.string(sH.default.OlObRa),
                      description: eg.intl.format(sH.default.ZGOJ8R, {
                          discountPercent: sk.aW,
                          termsUrl: eO.A.getArticleURL(e2.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: d.getDate() / u,
                      ctaText: eg.intl.string(eg.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sG.P)({
                              partnerIds: [sU.XY],
                              title: eg.intl.string(sH.default["2I7nK+"]),
                              subtitle: eg.intl.format(sH.default.W8jOD0, {
                                  termsUrl: eO.A.getArticleURL(e2.MVz.LOGITECH_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl: sW,
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sU.XY },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            f = n
                ? {
                      id: sp.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: eg.intl.string(eg.t.m7PucM),
                      description: eg.intl.format(eg.t["1Zw6xL"], {}),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: d.getDate() / u,
                      ctaText: eg.intl.string(eg.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sG.P)({
                              partnerIds: [sU.KS],
                              title: eg.intl.string(eg.t["7ioAjs"]),
                              subtitle: eg.intl.format(eg.t.LOYRxB, {
                                  helpCenterLink: eO.A.getArticleURL(e2.MVz.RECURRING_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sU.KS },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null;
        return {
            callOfDutyCard: m,
            expiredCallOfDutyCard: x,
            logitechCard: g,
            steelseriesCard: f,
            youtubeCard: a
                ? {
                      id: sp.YOUTUBE_3PP_CARD_ID,
                      title: eg.intl.string(sF.default["NNPh/j"]),
                      description: eg.intl.format(sF.default.MrgHvR, {
                          helpCenterUrl: eO.A.getArticleURL(e2.MVz.YOUTUBE_PROMOTION),
                      }),
                      isThirdPartyPerk: !0,
                      pillText: o,
                      backgroundAssetUrl: sW,
                      blurTint: "#2E213D",
                      caption: "YouTube Premium",
                      ctaText: eg.intl.string(eg.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sG.P)({
                              partnerIds: [sU.NC],
                              analyticsLocations: e,
                              title: eg.intl.string(sF.default.TDZUui),
                              subtitle: eg.intl.format(sF.default.BTLkvw, {
                                  helpCenterUrl: eO.A.getArticleURL(e2.MVz.YOUTUBE_PROMOTION),
                              }),
                              modalTeaser: {
                                  title: eg.intl.format(sF.default.J8CVYT, {
                                      helpCenterUrl: eO.A.getArticleURL(e2.MVz.YOUTUBE_PROMOTION),
                                  }),
                                  icon: sy.E,
                              },
                          }),
                      analyticsOptions: { thirdPartyPartner: sU.NC },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [l, e, t, s, d, i, u, n, a, r]);
}
var sK = s(762493);
let sX = "xgpp";
function sZ(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, so.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: o } = sY();
    if (!i) return null;
    let d = null != n || null != a || null != r || null != l || null != o;
    return (0, c.jsx)(sS, {
        id: sX,
        sectionClassName: u()(sK.uW, sK.Uv, sK.qr),
        heading: (0, c.jsx)(el.D, {
            variant: "nitro-sm",
            className: u()(sP.R_, s_.U6),
            children: eg.intl.string(eg.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: s_.JE, children: (0, c.jsx)(sT, { glowing: t === sX }) }),
        grid: d
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(sR.S, { ...n, containerClassName: sP.Nr, glowing: s === n.id }),
                      (0, c.jsx)(sI, { containerClassName: sP.Nr }),
                      null != o &&
                          (0, c.jsx)(sR.S, {
                              ...o,
                              containerClassName: sP.Nr,
                              glowing: s === o.id,
                              autoClickCta: s === o.id,
                          }),
                      null != r && (0, c.jsx)(sR.S, { ...r, containerClassName: sP.Nr, glowing: s === r.id }),
                      null != l && (0, c.jsx)(sR.S, { ...l, containerClassName: sP.Nr, glowing: s === l.id }),
                      null != a && (0, c.jsx)(sR.S, { ...a, containerClassName: sP.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var sJ = s(313133),
    sQ = s(67423);
let sq = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: u()(sJ.iE, { [sJ.q4]: !t }),
        style: l,
        children: (0, c.jsxs)("div", {
            className: sJ.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sQ, className: sJ.oU }),
                (0, c.jsxs)("div", {
                    className: sJ.iQ,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: eg.intl.format(eg.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eg.intl.format(eg.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, eM.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(eo.$, {
                    variant: "expressive",
                    icon: ed.t,
                    size: "md",
                    text: eg.intl.string(eg.t.zrCzVB),
                    onClick: () =>
                        void (0, ev.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("489361"),
                                s.e("227853"),
                                s.e("470126"),
                                s.e("128804"),
                                s.e("71151"),
                                s.e("286615"),
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
                                s.e("452075"),
                                s.e("900277"),
                                s.e("127962"),
                                s.e("364827"),
                                s.e("907167"),
                                s.e("861060"),
                                s.e("952372"),
                                s.e("910486"),
                                s.e("56366"),
                                s.e("797595"),
                                s.e("641248"),
                                s.e("544571"),
                                s.e("40291"),
                                s.e("729963"),
                                s.e("392075"),
                                s.e("102328"),
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
                                    analyticsLocations: r,
                                    initialStep: tg.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var s$ = s(761508),
    s0 = s(449543);
function s1(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/a9ce5551f37c49862694d063777be6e02b9190ff9a205c7c62f5fe9cecb673de.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s2(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s3(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/ce65064fd18fa477fe14c2d4066af96637c446e074008fb0b7599874537ce8d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s7 = s(345394);
function s6(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: s7.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s5(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/804d87fc1c1330e6413159eaacc359de89bdfbec7b4602532b1bd074868783c8.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s8(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/a0a5fdb2c9735632e0cadb26af7aa33929c63981e559ef0337cacced2cab2d09.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s9(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/c561ce5c9866c0bdb3f8c9dc43164f873414c3d905d1ab4beace8020dc4933fc.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s4(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function ie(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var it = s(996682);
function is(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, it.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function ii(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var ia = s(78701);
function ir(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: ia.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var il = s(462887),
    ic = s(736653),
    io = s(259065),
    id = s(206835),
    iu = s(591179),
    im = s(462463),
    ix = s(219882),
    ig = s(19886),
    ip = s(425713),
    ih = s(696292),
    iN = s(192444),
    iA = s(617986),
    ij = s(892227),
    ib = s(81466),
    iC = s(1889),
    iE = s(749012);
let iT = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, Z.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ij.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: iE.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: iE.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iE.Pf,
                            children: [
                                (0, c.jsx)(ib.CalendarIcon, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eg.intl.string(iC.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eg.intl.format(iC.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: iE.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: iE.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iE.Pf,
                            children: [
                                (0, c.jsx)(tT.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eg.intl.string(iC.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eg.intl.format(iC.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var iR = s(758836),
    iv = s(190107),
    iI = s(799544);
function i_(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, iN.lk)(iv.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, Z.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: sp.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eg.intl.string(iC.default.hx5AFp),
                          description: eg.intl.format(iC.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(iI.lH, iI.yK),
                          footerContent: (0, c.jsx)(iT, {}),
                          ctaText: eg.intl.string(iC.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(e2.BVt.COLLECTIBLES_SHOP_WITH_TAB(iR.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: sp.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eg.intl.string(eg.t.Csf5Ol),
                          description: eg.intl.format(eg.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eg.intl.string(eg.t.jVcuVY),
                          onCtaClick: () => (0, iA.mA)({ fromContent: ih.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: iI.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iP = s(975807),
    iS = s(95035),
    iy = s(989790),
    iD = s(88001),
    iO = s(148155),
    iM = s(817577);
function ik() {
    (0, iP.A)(iD.TE);
}
function iL(e) {
    let t = (0, iy.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ev.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: t3.pe.TIER_2,
                      initialPlanId: t3.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: sp.PREMIUM_GROUP_CARD_ID,
                      title: eg.intl.string(iO.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eg.intl.formatToPlainString(iO.default.JlyGQj, {
                                  totalSeats: iD.aw,
                                  premiumGroupProductName: (0, iD.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: iI.LF,
                                  children: (0, c.jsx)(iS.A, {
                                      onClick: ik,
                                      children: eg.intl.string(iO.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eg.intl.string(eg.t.oW0eUd),
                      primaryAsset: iM,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: eg.intl.string(eg.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iU = s(562819),
    iG = s(793943),
    iw = s(241988),
    iB = s(757036),
    iH = s(235955),
    iF = s(655752);
let iV = (0, w.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iz = s(764231),
    iW = s(627380),
    iY = s(30084),
    iK = s(814014),
    iX = s(714206);
let iZ =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iJ =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iQ =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iq() {
    let e,
        t,
        s,
        i,
        n,
        { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        r = (0, iu.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: l, expiredCallOfDutyCard: d, logitechCard: m, steelseriesCard: g, youtubeCard: f } = sY(),
        p = (0, so.b)("premium_subscriber_home_rewards"),
        h = (0, im.A)({ analyticsLocations: a }),
        N = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                (0, io.L)({ analyticsLocations: a }),
            );
        }, [a]),
        b = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                (0, iU.L)({ analyticsLocations: a }),
            );
        }, [a]),
        C = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        E = (function (e) {
            let { fractionalState: t } = (0, eP.A)(),
                s = t === t3.xc.FP_ONLY,
                i = (0, ig.$F)(),
                n = (0, ig.Xb)(),
                a = i?.status === ig.Wo.UPCOMING || s,
                r = i?.status === ig.Wo.WITHHELD,
                l = a || r,
                c = (0, ip.N)(i?.id),
                d = (function () {
                    let e = (0, ig.$F)(),
                        t = (0, iF.P)(),
                        s = (0, ig.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iV.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === ig.Wo.WITHHELD) return null;
                    let n = td()(),
                        a = td()(s),
                        r = i || e.status === ig.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        c = a.clone().add(r, "months"),
                        o = a.clone().add(l, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, x.bG)([eI.Ay], () => eI.Ay.useReducedMotion) && !l,
                g = (0, iW.t)(),
                f = (0, iF.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != f ? eg.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iz.T)(t3.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === ig.Wo.UPCOMING
                              ? eg.intl.formatToPlainString(eg.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === ig.Wo.WITHHELD
                                ? ((0, iz.T)(i.id, i.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return eg.intl.formatToPlainString(eg.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return eg.intl.formatToPlainString(eg.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(g, a) ??
                                  (0, iz.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != c ? (r = l || m ? c.standard : c.ambientLarge) : s && (r = iX),
                    {
                        id: sp.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? eg.intl.string(i.nameUnformattedNitro) : s ? eg.intl.string(eg.t.tx9Fvw) : "",
                        pillText: eg.intl.string(eg.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iK.pq, { [iK.rX]: l, [iK.kE]: m }),
                        caption: null != n ? eg.intl.formatToPlainString(eg.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: eg.intl.string(eg.t.jVcuVY),
                        onCtaClick: () => (0, iY.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, l, m, n, d, s, g, f, e]);
        })(a),
        T =
            ((e = (0, $.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription())),
            (s = (0, eh.q)(t, e === $.Iz.NITRO_HOME_TILE)),
            (0, o.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: sp.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: (0, c.jsx)("img", {
                                  src: iw,
                                  alt: "",
                                  "aria-hidden": !0,
                                  style: { width: 157 },
                                  draggable: !1,
                              }),
                              ctaIcon: ed.t,
                              ctaIconPosition: "start",
                              ctaText: s.cta,
                              onCtaClick: () =>
                                  (0, P.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: a }),
                          },
                [a, s, t],
            )),
        { nitroOrbsRewardsCard: R, questOrbMultiplierCard: v } = i_("useWhatsNewPerkCards"),
        I =
            ((i = (0, iB.L)(t3.PremiumTypes.TIER_2)),
            (n = (0, ix.rX)()),
            (0, o.useMemo)(
                () =>
                    i && n
                        ? {
                              id: sp.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eg.intl.string(iH.default["/cV3ka"]),
                              description: eg.intl.string(iH.default.H523FI),
                              primaryAsset: (0, c.jsx)(s5, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [i, n],
            )),
        _ = iL(a);
    return (0, o.useMemo)(() => {
        let e = [
                p ? null : l,
                p ? null : f,
                p ? null : m,
                p ? null : g,
                p ? null : d,
                R,
                v,
                _,
                {
                    id: sp.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eg.intl.string(eg.t.OLtTrt),
                    description: eg.intl.string(eg.t["di/pXR"]),
                    onCtaClick: r ? h : N,
                    ctaText: eg.intl.string(eg.t.jVcuVY),
                    primaryAsset: iZ,
                },
                {
                    id: sp.CLIENT_THEMES_CARD_ID,
                    title: eg.intl.string(eg.t.acc6h6),
                    description: eg.intl.formatToPlainString(eg.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iQ,
                    ctaText: eg.intl.string(eg.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iG.nf)(iG.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: sp.PERMADECOS_CARD_ID,
                    title: eg.intl.string(eg.t.L14NZN),
                    description: eg.intl.string(eg.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(ir, { alt: "", ariaHidden: !0 }),
                    ctaText: eg.intl.string(eg.t.jVcuVY),
                    onCtaClick: r ? h : b,
                },
                {
                    id: sp.CUSTOM_APP_ICONS_CARD_ID,
                    title: eg.intl.string(eg.t["GU+wqh"]),
                    description: eg.intl.string(eg.t["1uPk1Z"]),
                    primaryAsset: iJ,
                    ctaText: eg.intl.string(eg.t.y9TxXV),
                    onCtaClick: C,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, E),
            null != T && e.splice(1, 0, T),
            null != I && e.splice(2, 0, I),
            e.length > s && e.splice(s, e.length - s),
            e
        );
    }, [E, T, R, v, I, _, N, C, b, h, r, l, d, m, g, f, p]);
}
var i$ = s(355097);
let i0 = "/assets/1eb1b74667b4c0f0.svg",
    i1 = "/assets/983b60e4fcaf973b.svg";
var i2 =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let i3 = [
    { id: "bestof", label: () => eg.intl.string(eg.t.q1u7nQ) },
    { id: "appearance", label: () => eg.intl.string(eg.t.CUnZkZ) },
    { id: "upgrades", label: () => eg.intl.string(eg.t.KC5q8v) },
    { id: "vip", label: () => eg.intl.string(eg.t.DjEAcv) },
];
var i7 = s(18290);
function i6(e) {
    e.stopPropagation();
}
function i5(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, ic.DP)(),
                t = (0, iu.X)("useFavoritesPerkCards"),
                s = (0, ig.Lh)(),
                i = (0, ip.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, id.A)({ scrollPosition: i$._F.TRY_IT_OUT, analyticsLocations: n }),
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
                    (0, S.pX)(e2.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, im.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, io.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iq(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = i_("useFavoritesPerkCards"),
                b = iL(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: sp.SERVER_BOOSTS_CARD_ID,
                            title: eg.intl.formatToPlainString(eg.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eg.intl.formatToPlainString(eg.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, c.jsx)(s1, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: sp.PROFILES_CARD_ID,
                            title: eg.intl.string(eg.t.xDRab3),
                            description: eg.intl.string(eg.t.yn6fWA),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(s2, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sp.HD_VIDEO_CARD_ID,
                            title: eg.intl.string(eg.t["/mQ5gg"]),
                            description: eg.intl.string(eg.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(s3, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sp.CLIENT_THEMES_CARD_ID,
                            title: eg.intl.string(eg.t.acc6h6),
                            description: eg.intl.formatToPlainString(eg.t.WQazjs, { themeCount: 20 }),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: iQ,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sp.MORE_EMOJIS_CARD_ID,
                            title: eg.intl.string(eg.t.D8vIDT),
                            description: eg.intl.string(eg.t.DRMecB),
                            primaryAsset: (0, c.jsx)(s6, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sp.LARGE_UPLOADS_CARD_ID,
                            title: eg.intl.string(eg.t.nL1WZV),
                            description: (0, ix.M6)({
                                legacyCopy: eg.intl.formatToPlainString(eg.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eg.intl.formatToPlainString(eg.t.teOTfv, {
                                    maxFileSize: (0, eM.EJ)(t3.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(s5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sp.CUSTOM_APP_ICONS_CARD_ID,
                            title: eg.intl.string(eg.t["GU+wqh"]),
                            description: eg.intl.string(eg.t["1uPk1Z"]),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iJ,
                            categories: ["appearance"],
                        },
                        {
                            id: sp.ENTRANCE_SOUNDS_CARD_ID,
                            title: eg.intl.string(eg.t.WJfCPi),
                            description: eg.intl.string(eg.t.liQKJR),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: sp.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eg.intl.string(eg.t.OLtTrt),
                            description: eg.intl.string(eg.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            primaryAsset: iZ,
                            categories: ["appearance"],
                        },
                        {
                            id: sp.CUSTOM_SOUNDS_CARD_ID,
                            title: eg.intl.string(eg.t["Cu/oFd"]),
                            description: eg.intl.string(eg.t.czj2aa),
                            primaryAsset: (0, c.jsx)(s8, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sp.SPECIAL_STICKERS_CARD_ID,
                            title: eg.intl.string(eg.t.MQoVeb),
                            description: eg.intl.string(eg.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: iI.Uc,
                                children: (0, c.jsx)(s9, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sp.SUPER_REACTIONS_CARD_ID,
                            title: eg.intl.string(eg.t.qERvAA),
                            description: eg.intl.string(eg.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(s4, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sp.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eg.intl.string(eg.t.ssVDYQ),
                            description: eg.intl.string(eg.t.aUSRMa),
                            primaryAsset: (0, il.M)(e) ? i0 : i1,
                            categories: ["upgrades"],
                        },
                        {
                            id: sp.EARLY_ACCESS_CARD_ID,
                            title: eg.intl.string(eg.t["g/KRY6"]),
                            description: eg.intl.string(eg.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(ie, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sp.BADGE_CARD_ID,
                            title: eg.intl.string(eg.t.Bn3CtB),
                            description: eg.intl.string(eg.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(is, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sp.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eg.intl.string(eg.t["MTD+7w"]),
                            description: eg.intl.string(eg.t.Bhs0s6),
                            ctaText: eg.intl.string(eg.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(ii, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: sp.PERMADECOS_CARD_ID,
                            title: eg.intl.string(eg.t.L14NZN),
                            description: eg.intl.string(eg.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(ir, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, b, a, r, l, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? i2.BEST_OF_NITRO),
        r = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: i7.uW,
        children: [
            (0, c.jsx)(el.D, { variant: "nitro-sm", children: eg.intl.string(eg.t["Uh3+CA"]) }),
            (0, c.jsx)(s$.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i7.Lq,
                "aria-label": eg.intl.string(eg.t["Uh3+CA"]),
                children: i3.map((e) =>
                    (0, c.jsx)(s$.V.Item, { id: e.id, className: i7.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                s0.A,
                {
                    gap: 20,
                    className: i7.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sR.S,
                                { ...e, glowing: t === e.id, containerClassName: i7.Ui, onFocus: i6 },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var i8 = s(72979);
let i9 = function (e) {
    let { className: t } = e,
        s = (0, ic.DP)();
    return (0, c.jsx)("img", {
        className: u()(i8.D, t),
        src: (0, il.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i4 = s(684251);
let ne = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, c.jsxs)("div", {
              className: u()(i4.kL, i4.Gd, i4.Eg),
              children: [(0, c.jsx)(i9, {}), (0, c.jsx)(sc, {}), n],
          })
        : (0, c.jsx)(eN.h, { color: "nitro-pink", className: u()(i4.kL, i4.Gd), offsetBottom: i, children: n });
};
function nt(e) {
    let { glowingPerkId: t = null } = e,
        s = iq();
    return (0, c.jsx)(sS, {
        sectionClassName: sP.uW,
        heading: (0, c.jsx)(el.D, { variant: "nitro-sm", className: sP.R_, children: eg.intl.string(eg.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    sR.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === sp.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(sP.Nr, { [sP.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function ns(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
            r = o.useRef(!1);
        (o.useEffect(() => {
            if (!t || r.current) return;
            let s = { behavior: a ? "auto" : "smooth", block: i, inline: n },
                l = e();
            if (null != l && l.offsetHeight > 0) {
                ((r.current = !0), l.scrollIntoView(s));
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
                    ((c = !0), null != o && cancelAnimationFrame(o), d.disconnect());
                }
            );
        }, [t, a, i, n, ...s]),
            o.useEffect(() => {
                t || (r.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], s, i);
}
var ni = s(92737);
let nn = "/assets/cd2be35d285d4675.svg",
    na = (e) => {
        let { userId: t } = e,
            s = (0, U.ds)(),
            { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
            n = V("nitro_member_hub_header"),
            a = (0, m.zy)();
        (o.useEffect(() => {
            f.h.wait(async () => {
                let e = [(0, X.Ay)()];
                (null != t && e.push((0, Q.A)(t)), await Promise.all(e));
            });
        }, [t]),
            o.useEffect(() => {
                v(!0);
            }, []),
            (0, et.j)(),
            (0, _.P)(I));
        let r = o.useRef(null),
            l = o.useRef(null),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: p, programReward: h } = (0, Z.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: N,
                glowingSectionId: b,
                glowingPerkId: C,
                scrollBlock: E,
                scrollInline: T,
            } = o.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(ni.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        ns(N ?? "", null != N, E, T);
        let [R, v] = o.useState(!1),
            P = (0, ee.p)(),
            S = o.useRef(null),
            [y, D] = o.useState(!1),
            O = null != P && null != d && d.status === e2.Dmq.CANCELED,
            L = (0, es.iU)(t3.gD.PREMIUM_MONTH_TIER_2, P, d),
            G = !y && O,
            w = null != (0, x.bG)([J.A], () => (null != t ? J.A.getUserProfile(t) : null)) && (p || null != h),
            B = (0, $.TF)({ location: "PremiumSubscriberHome" }),
            F = (0, eh.q)(d, B === $.Iz.STICKY_BAR),
            [ei, en] = (0, K.iP)(
                null != F && w && d?.id != null ? z.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                d?.id ?? "",
                { cooldownDurationMs: q.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ea = null != d && d.status === e2.Dmq.CANCELED,
            er = i && !s && !ea,
            el = n && (s || ea),
            { analyticsLocations: ec } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eo, ed] = o.useState(!1);
        return w
            ? (0, c.jsxs)(Y.Gt, {
                  className: u()(i4.xW, i4.Gd),
                  ref: r,
                  children: [
                      (0, c.jsx)(ne, {
                          shouldRenderNitroHomeHeaderExperiment: er,
                          shouldRenderNitroHomeFollowup: el,
                          gradientOffsetBottom: s && !n ? 0.55 : 0.8,
                          children: (0, c.jsxs)(j.f5, {
                              value: ec,
                              children: [
                                  (0, c.jsx)(W.L, {
                                      innerRef: S,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(st, {
                                          buttonVisibilityRef: S,
                                          className: i4.v1,
                                          userDiscountOffer: P,
                                          discountedPrice: L,
                                      }),
                                  }),
                                  (0, c.jsx)(nt, { glowingPerkId: C }),
                                  (0, c.jsx)(sZ, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(i5, { glowingPerkId: C }),
                                  (0, c.jsx)(eb, {
                                      className: i4.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e2.liQ.NITRO_HOME, section: e2.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: i4.hz }),
                                  (0, c.jsx)(W.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !eo &&
                                              (k.default.track(e2.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ec,
                                              }),
                                              ed(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: l, className: i4._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: nn,
                                      className: i4.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eg.intl.string(eg.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      O &&
                          null != L &&
                          (0, c.jsx)(sq, {
                              isVisible: G && R,
                              premiumSubscription: d,
                              churnDiscountOffer: P,
                              discountedPrice: L,
                          }),
                      null != ei &&
                          null != F &&
                          null != d &&
                          (0, c.jsx)(ep, { premiumSubscription: d, content: F, markAsDismissed: en }),
                  ],
              })
            : er || el
              ? (0, c.jsxs)("div", {
                    className: u()(i4.kL, i4.Lq, i4.TN, i4.Eg),
                    children: [
                        (0, c.jsx)(sc, {}),
                        (0, c.jsx)("div", { className: i4.S, children: (0, c.jsx)(g.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(i4.kL, i4.Lq), children: (0, c.jsx)(g.y, {}) });
    };
var nr = s(286320),
    nl = s(727949),
    nc = s(440005),
    no = s(26508);
let nd = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var nu = s(860839);
let nm =
    "https://cdn.discordapp.com/assets/content/dfb187cfa9d267774f50c4f67cb7628658cefc11db41c6a04c08fc5aadc9dbcc.png";
function nx(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: nm,
        srcSet: `${nm} 1x, https://cdn.discordapp.com/assets/content/adb910c257d7510b97da4dccb2a4cea5f3a3fc6eb225dbfbbef0dd9d2a1971bf.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var ng = s(37537),
    nf = s(783420),
    np = s(204413),
    nh = s(245383),
    nN = s(824069),
    nA = s(785007),
    nj = s(947910);
function nb(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nj.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nj.fQ,
                                children: (0, c.jsx)(tC.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nj.qU,
                            children: [
                                (0, c.jsxs)(er.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nj.NI,
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
                                (0, c.jsxs)(er.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nj.br,
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
                                                className: nj.yD,
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
                radioBarClassName: u()(nj.tG, { [nj.uA]: s, [nj.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nA.$d, {
        ...i,
        options: n,
        value: t,
        size: nA.r9.NOT_SET,
        className: nj.ul,
        withTransparentBackground: !0,
    });
}
var nC = s(773669),
    nE = s(97352),
    nT = s(252424),
    nR = s(526292),
    nv = s(186223),
    nI = s(369827),
    n_ = s(803496);
function nP(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nI.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, n_.A)({
            activeSubscription: t,
            skuIDs: [(0, eM.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nS(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function ny(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === t3.Ff.YEAR
          ? eg.intl.format(eg.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : eg.intl.format(eg.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nD = s(614488);
function nO(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(nf.A, {
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
function nM(e) {
    let { skuId: t, className: s } = e,
        i = t === t3.pe.TIER_2,
        n = (0, il.q)((0, ic.Ay)()),
        a = (0, ng.c)("PlanSelectCard"),
        r = (0, eG.V)(),
        l = r?.subscriptionTrial,
        d = l?.skuId === t,
        m = i && d && null != l,
        g = (0, eU.p)(),
        {
            planRadioOptions: f,
            selectedPlanId: p,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = t3.En[t],
                a = t3.zE[t],
                r = t === t3.pe.TIER_2,
                l = nP(t),
                c = (0, eG.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, eM.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === t3.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [t3.gD.PREMIUM_YEAR_TIER_0, t3.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                f = (0, eU.O)(),
                p = (0, nR.k5)(),
                h = (0, x.bG)([nC.default], () => nC.default.locale),
                N = (0, es.U9)(f, t),
                A = (0, es.N1)(n),
                j = (0, es.N1)(a),
                [b, C] = (0, x.yK)([nE.A], () => [nE.A.get(n), nE.A.get(a)], [n, a]),
                E = null != b ? (0, eM.sS)(b, l) : null,
                T = null != C ? (0, eM.sS)(C, l) : null,
                R =
                    N && f?.discount.amount != null && !p
                        ? eg.intl.formatToPlainString(eg.t.IAybsG, {
                              discount: (0, nT.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                v = f?.discount?.planIds,
                I = nS(a, N, v, j, T),
                _ = nS(n, N, v, A, E),
                P = f?.discount.userUsageLimitInterval,
                S = f?.discount.userUsageLimit ?? t3.OJ,
                y = !r || I || _ || null == C ? null : (0, nv.Cj)(C, !1, l),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== t3.pe.TIER_2 ? null : s && !i ? t3.En[t] : t3.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == s || (s === n && m) ? O : s,
                L = [
                    {
                        value: a,
                        primaryText: eg.intl.string(eg.t["/Q4HRN"]),
                        primarySubText:
                            (I
                                ? ny({
                                      expectedUsageInterval: t3.Ff.YEAR,
                                      usageInterval: P,
                                      discountDuration: S,
                                      regularPrice: T,
                                      discountedPrice: j,
                                  })
                                : null) ?? y,
                        secondaryText: I ? j : T,
                        secondarySubText: I ? T : null,
                        badgeText: I ? R : null,
                        useGradientSelectedBorder: r && (d || I || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: eg.intl.string(eg.t.DKzs96),
                        primarySubText: _
                            ? ny({
                                  expectedUsageInterval: t3.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: S,
                                  regularPrice: E,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : E,
                        secondarySubText: _ ? E : null,
                        badgeText: _ ? R : null,
                        useGradientSelectedBorder: r && (d || _),
                        isDisabled: g || m,
                    },
                ],
                U = k === a ? I : k === n && _;
            return { planRadioOptions: L, selectedPlanId: k, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = i && null == g ? "expressive" : "secondary",
        { buttonText: j } = (0, nh.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, np.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, c.jsxs)(er.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nD.Ux,
            children: [
                (0, c.jsx)(er.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nD.MY,
                    children: (0, c.jsx)(el.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nD.ck : nD.JJ,
                        children: i ? eg.intl.string(eg.t.lG6a5x) : eg.intl.string(eg.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(er.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nD.qT,
                    children: i
                        ? (0, c.jsx)(nu.ZP, {
                              featureSet: nu.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(nu.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(nN.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nD.qS,
                          role: "separator",
                          children: (0, c.jsx)(ec.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nD.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case t3.WT.DAY:
                                          if (t % 7 == 0) return eg.intl.format(eg.t["1MYPH0"], { weeks: t / 7 });
                                          return eg.intl.format(eg.t.pYfIoO, { days: t });
                                      case t3.WT.MONTH:
                                          return eg.intl.format(eg.t["96hTLe"], { months: t });
                                      case t3.WT.YEAR:
                                          return eg.intl.format(eg.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(l.interval, l.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nD.yF }),
                (0, c.jsxs)("div", {
                    className: nD.qr,
                    children: [
                        (0, c.jsx)(nb, { planRadioOptions: f, value: p ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nO, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = u()(nD.Nr, s, { [nD.Fw]: i });
    return i
        ? (0, c.jsxs)(eN.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, c.jsx)("div", {
                      className: nD.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(nx, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, c.jsx)("div", { className: E, children: C });
}
function nk(e) {
    let { className: t } = e,
        s = (0, il.q)((0, ic.Ay)()),
        i = (0, ng.c)("PlanSelectPremiumGroupCard"),
        n = (0, eU.p)(),
        a = null != n,
        r = nP(t3.pe.TIER_2),
        l = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eJ.A)({ userId: l?.id, size: eY._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([nE.A], () => nE.A.get(t3.gD.PREMIUM_GROUP_MONTH)),
        f = (0, es.N1)(t3.gD.PREMIUM_GROUP_MONTH),
        p = a
            ? eg.intl.format(iO.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, iD.DP)(),
              })
            : eg.intl.string(eg.t["2pG5Ga"]),
        h = (0, c.jsx)(nf.A, {
            subscriptionTier: t3.pe.TIER_2,
            initialPlanId: t3.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(eo.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: ed.t,
                    text: p,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        N = null;
    if (a && null != f) N = f;
    else if (null != m)
        try {
            N = (0, eM.sS)(m, r, !1, !1, !1);
        } catch {
            N = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nD.Nr, t),
        children: (0, c.jsxs)(er.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nD.Ux,
            children: [
                (0, c.jsxs)(er.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nD.MY,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nD.ck : nD.JJ,
                            children: eg.intl.string(iO.default.eSKiXk),
                        }),
                        null != l &&
                            (0, c.jsxs)(er.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nD.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nD.uA,
                                        children: (0, c.jsx)(eK.eu, {
                                            src: o,
                                            size: eY._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, c.jsx)(er.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nD.VL,
                                        children: (0, c.jsxs)(ec.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", iD.LM],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(er.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nD.qT,
                    children: (0, c.jsx)(nu.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nD.yF }),
                (0, c.jsxs)("div", {
                    className: nD.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nD.ec,
                            children: [
                                (0, c.jsx)(ec.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eg.intl.string(iO.default.SvSwga),
                                }),
                                null == N
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(ec.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: s ? "text-strong" : "text-overlay-light",
                                          children: N,
                                      }),
                            ],
                        }),
                        h,
                    ],
                }),
            ],
        }),
    });
}
function nL(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, nu.pw)(t),
        a = (0, iy.PA)(),
        r = (0, x.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        l = { [nD.iR]: !r };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(er.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nD.oB, s),
            children: [
                (0, c.jsx)(el.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nD.op,
                    children: eg.intl.string(eg.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nD.kR, { [nD.BQ]: a }),
                    children: [
                        (0, c.jsx)(nM, { skuId: t3.pe.TIER_0, className: u()(nD.rz, l) }),
                        (0, c.jsx)(nM, { skuId: t3.pe.TIER_2, className: u()(nD.Rv, l) }),
                        a && (0, c.jsx)(nk, { className: u()(nD.zz, l) }),
                    ],
                }),
            ],
        }),
    });
}
var nU = s(226830),
    nG = s(366010),
    nw = s(303136);
let nB = function (e) {
    let t,
        { className: s } = e,
        i = (0, tO.TM)(),
        n = (0, nG.q)((0, ic.Ay)());
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
                nw.A,
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
var nH =
        (((l = {}).HOME = "home"),
        (l.WHATS_NEW = "whatsNew"),
        (l.BEST_OF_NITRO = "bestOfNitro"),
        (l.PLANS = "plans"),
        (l.COMPARE = "compare"),
        l),
    nF = s(352756);
let nV = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e2.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(ei.animated.div, {
        className: nF.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nF.U,
            children: [
                (0, c.jsx)(tc.A, {
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
var nz = s(573710);
let nW = function () {
    let e = (0, tD.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nz.BI,
                children: (0, c.jsx)(tU, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tk.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tJ, alt: "", className: nz.Q }),
                }),
            }),
            (0, c.jsx)(tw, {
                isMotionReduced: e,
                boltContainerClassName: nz.nJ,
                carContainerClassName: nz.IN,
                hammerContainerClassName: nz.Gj,
                keyContainerClassName: nz.FV,
                starContainerClassName: nz.E1,
                boltAssetClassName: nz.j7,
                carAssetClassName: nz.or,
                hammerAssetClassName: nz.Wv,
                keyAssetClassName: nz.rs,
                starAssetClassName: nz.OY,
            }),
        ],
    });
};
var nY = s(989756);
let nK = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nY.kL,
            children: (0, c.jsxs)("div", {
                className: nY.hQ,
                children: [
                    (0, c.jsx)(nW, {}),
                    (0, c.jsx)(el.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nY.RH,
                        children: eg.intl.string(eg.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nK.displayName = "PremiumMarketingFooter";
var nX = s(939249);
let nZ = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nH.HOME]: eg.intl.string(eg.t.uGRXjS),
            [nH.WHATS_NEW]: eg.intl.string(eg.t["mfcR/v"]),
            [nH.BEST_OF_NITRO]: eg.intl.string(eg.t.xQKkE8),
            [nH.PLANS]: eg.intl.string(eg.t.wyNMnm),
            [nH.COMPARE]: eg.intl.string(eg.t.pwD7If),
        },
        n = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(si.A, {
        className: sr.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: sr.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: sr.wG,
                    children: [
                        (0, c.jsx)(ed.t, { className: sr.nE, colorClass: sr.oG }),
                        (0, c.jsx)("div", {
                            className: sr.zc,
                            role: "tablist",
                            "aria-label": eg.intl.string(eg.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nX.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: sr.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(ec.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: sr.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: sr.MQ,
                    children: [
                        null != n && (0, c.jsx)(sa.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nJ = s(704333),
    nQ = s(414499),
    nq = s(597770),
    n$ = s(500060),
    n0 = s(866665),
    n1 = s(406860),
    n2 = s(870975),
    n3 = s(698834);
function n7() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, n1.A)({ boxType: sN.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nJ.B, text: eg.intl.string(sb.default.MUypiB) },
            { icon: nQ.h, text: eg.intl.string(sb.default.ec5Rdd) },
            { icon: nq.GiftIcon, text: eg.intl.string(sb.default["9t2CzW"]), tooltip: sb.default.AyECej },
            { icon: n$.o, text: eg.intl.string(sb.default.R7YJAY) },
        ];
    return (0, c.jsx)(W.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: n3.iE,
            children: (0, c.jsxs)("div", {
                className: n3.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: n3.j,
                        children: [
                            (0, c.jsx)("div", { className: n3._g }),
                            (0, c.jsx)("div", { className: n3.$h }),
                            (0, c.jsx)("div", { className: n3.Rv }),
                            (0, c.jsx)("div", { className: n3.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: n3.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: n3.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(el.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: n3.R_,
                                                children: eg.intl.string(sb.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: n3.yf,
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
                                                                            className: n3.Jn,
                                                                            children: (0, c.jsx)(n0.m, {
                                                                                text: eg.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    su.CircleInformationIcon,
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
                                                        className: n3.xF,
                                                        children: (0, c.jsx)(tc.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: t3.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n3.WE,
                                        children: (0, c.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eg.intl.format(sb.default.KDKdWi, { termsLink: (0, n2.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: n3.r1,
                                children: (0, c.jsx)("img", {
                                    className: n3.wm,
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
var n6 = s(750338),
    n5 = s(19290),
    n8 = s(505051);
function n9(e) {
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
        className: u()(n8.boxBackdrop, t),
        children: [
            (0, c.jsx)(el.D, {
                className: n8.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, c.jsx)("div", { className: n8.highlightBento, children: l }),
            (0, c.jsx)("div", {
                className: n8.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n5.A0.SMALL;
                            break;
                        case 2:
                            s = n5.A0.MEDIUM;
                            break;
                        default:
                            s = n5.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                n6.A,
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
let n4 = o.memo(function (e) {
        let t = (0, so.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, n5.Ay)(t);
        return (0, c.jsx)(n9, {
            boxLayout: s,
            title: eg.intl.string(eg.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(n7, {}) : null,
            ...e,
        });
    }),
    ae = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, n5.Ay)();
        return (0, c.jsx)(n9, { boxLayout: t, title: eg.intl.string(eg.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    at = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var as = s(236834),
    ai = s(540504);
function an(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eJ.A)({ userId: t?.id, size: eY._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: ai.$6,
        children: (0, c.jsxs)("div", {
            className: ai.sc,
            children: [
                (0, c.jsx)("div", {
                    className: ai.kR,
                    children: (0, c.jsx)(eK.eu, { src: s, "aria-label": t.username, size: eY._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(el.D, {
                    variant: "heading-sm/normal",
                    className: ai.FS,
                    color: "text-strong",
                    children: eg.intl.format(eg.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var aa = s(579245),
    ar = s(369805);
let al = function () {
    let e = (0, ar.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eV, { text: e });
};
function ac() {
    let e = (0, x.bG)([nE.A], () => nE.A.getForSkuAndInterval((0, eM.mH)(t3.pe.TIER_0), t3.WT.MONTH));
    return null != e ? (0, eM.sS)(e) : "\u2026";
}
var ao = s(508556);
let ad = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tD.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        i = (0, tO.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: ao.YU,
        children: [
            (0, c.jsx)(tF, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: ao.wG,
                assetClassName: ao.lu,
            }),
            (0, c.jsx)(tw, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: ao.nJ,
                carContainerClassName: ao.IN,
                hammerContainerClassName: ao.Gj,
                keyContainerClassName: ao.FV,
                starContainerClassName: ao.E1,
                boltAssetClassName: ao.j7,
                carAssetClassName: ao.or,
                hammerAssetClassName: ao.Wv,
                keyAssetClassName: ao.rs,
                starAssetClassName: ao.OY,
            }),
        ],
    });
};
var au = s(14057);
let am = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = ac(),
            l = at.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, as.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: g } = eH(
                !(0, x.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
            ),
            f = (0, nr.b)(),
            p = !d && f.length > 0,
            h = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            b = (0, nR.ar)() && !N,
            C = (0, eU.O)(),
            E = (null != C && t3.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(au.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: au.hQ,
                        children: [
                            (0, c.jsx)(ad, { containerVisibilityPercentage: g }),
                            b && (0, c.jsx)(al, {}),
                            (0, c.jsx)("div", {
                                className: au.s8,
                                children: (0, c.jsx)(tA.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(el.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: au.wx,
                                        children: eg.intl.string(eg.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: au.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: au.eZ,
                                            children: (0, c.jsx)(an, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: au.Qn,
                                            children: (0, c.jsx)(aa.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: b ? au.es : au.UJ,
                                        children: [
                                            (0, c.jsx)(tc.A, {
                                                size: "md",
                                                fullWidth: b,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == i ? t3.pe.NONE : i,
                                                buttonTextOverride: E ? eg.intl.string(eg.t["2pG5Ga"]) : void 0,
                                            }),
                                            !b && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: au.iQ,
                                        children: (0, c.jsx)(ec.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: l
                                                ? eg.intl.string(eg.t.jHqrJW)
                                                : eg.intl.format(eg.t.kt9wxs, { cheapestMonthlyPrice: r }),
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
var ax = s(820081),
    ag = s(140735),
    af = s(401432),
    ap = s(580630),
    ah = s(795269),
    aN = s(84483),
    aA = s(701974),
    aj = s(55647),
    ab = s(202600);
function aC(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ax.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ag.A, { children: eg.intl.string(eg.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(af.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ag.A, { children: eg.intl.string(eg.t.l4qZrp) }),
              ],
          });
}
function aE(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(aj.nM, aj.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: aj.nx,
                children: (0, c.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: aj.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(aC, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: aj.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(aC, { includes: !!i.includes }),
            }),
        ],
    });
}
function aT(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(aj.nM, aj.Gf),
                children: (0, c.jsxs)("td", {
                    className: aj.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(el.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(ec.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(aE, { ...e }, e.id)),
        ],
    });
}
function aR(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === t3.PremiumTypes.TIER_0 ? eg.intl.string(eg.t.tUbSDK) : eg.intl.string(eg.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: aj.nn,
        children: [
            (0, c.jsxs)("div", {
                className: aj.KS,
                children: [
                    (0, c.jsx)(ed.t, { colorClass: aj.oG }),
                    (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function av(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, ap.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: aj.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: aj.Cr,
                    children: (0, c.jsx)(el.D, { variant: "heading-xl/bold", children: eg.intl.string(eg.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: aj.Hn,
                    children: (0, c.jsx)(aR, {
                        premiumType: t3.PremiumTypes.TIER_0,
                        priceString: (0, ap.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: aj.Hn,
                    children: (0, c.jsx)(aR, { premiumType: t3.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let aI = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = t3.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, eG.V)(),
            l = r?.subscriptionTrial?.skuId,
            d = (0, eU.O)(),
            m = (0, es.YJ)(d),
            x = null != d && (0, es.U9)(d, t3.pe.TIER_2) && m === t3.gD.PREMIUM_MONTH_TIER_2,
            g = (0, es.N1)(m),
            f = null != g ? `${g}/${(0, eM.FJ)(t3.WT.MONTH)}` : "",
            p = (0, eM.JM)(t3.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eM.JM)(t3.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, so.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: eg.intl.string(eg.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: eg.intl.string(eg.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: eg.intl.string(eg.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: eg.intl.string(aA.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, iN.lk)(iv.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = sM.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sk.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, aN.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: eg.intl.string(eg.t.NG1e6l),
                            subtitle: eg.intl.format(sb.default.uJcbMv, {
                                termsLink: eO.A.getArticleURL(e2.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: eg.intl.string(sb.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        r &&
                            s.rows.push({
                                id: 25,
                                label: eg.intl.string(sb.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            s.rows.push({
                                id: 26,
                                label: eg.intl.string(sH.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: eg.intl.formatToPlainString(eg.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: eg.intl.string(iC.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: eg.intl.string(eg.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: eg.intl.string(eg.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: eg.intl.string(eg.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: eg.intl.string(eg.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: eg.intl.string(eg.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: eg.intl.string(eg.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: eg.intl.string(eg.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: eg.intl.string(eg.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: eg.intl.string(eg.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, eM.EJ)(t3.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eM.EJ)(t3.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: eg.intl.string(eg.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: eg.intl.string(eg.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: eg.intl.string(eg.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: eg.intl.string(eg.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: eg.intl.formatToPlainString(eg.t.nyhDpw, {
                                        numBoosts: t3.M4,
                                        percentageOff: (0, ap.l9)(nC.default.locale, t3.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: eg.intl.string(eg.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: eg.intl.string(eg.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: eg.intl.string(eg.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: eg.intl.formatToPlainString(eg.t["8crdzJ"], { maxChars: e2.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: eg.intl.string(eg.t["il8+nC"]),
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
            let e = null != r ? eg.intl.string(eg.t.IBYG5U) : eg.intl.string(eg.t.TR2B4T);
            t = (0, c.jsx)(ah.R, { className: u()(aj.Io, aj.SP), text: e });
        }
        let b = l === t3.pe.TIER_0 || n === t3.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(aj.zr, s),
                children: [
                    (0, c.jsx)(el.D, {
                        className: aj.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: eg.intl.string(eg.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: aj.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(aj.fO, { [aj.Vd]: b, [aj.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: aj.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: aj.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: ab, alt: "", className: aj.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: aj.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: aj.tp,
                                children: [
                                    (0, c.jsx)(av, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(aT, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    a_ = function (e) {
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
                                        ((l.current[t] = e), null != e && (e.id = t));
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
var aP = s(818348),
    aS = s(773188);
function ay(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nL, { innerRef: t }) : (0, c.jsx)(nU.jP, { innerRef: t });
}
let aD = () => {
    let e = (0, m.zy)();
    (0, _.P)(I);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        r = o.useRef(null),
        l = (0, x.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [f, p] = o.useState(!1),
        [h, N] = o.useState(!1),
        [b, C] = o.useState(!1),
        E = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        T = null != E ? (0, eM.EL)(E) : null,
        R = null != T ? eM.Ay.getSkuIdForPlan(T.planId) : null,
        v = null !== R && R !== t3.pe.TIER_2 ? t3.pe.TIER_2 : null,
        P = (0, ek.cg)(),
        { analyticsLocations: S } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        C(!0);
    }, []);
    let y = (0, sO.A0)({ location: "PremiumMarketingHome" }),
        D = (0, no.DK)(nc.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: O } = (0, iN.lk)(iv.rE.NITRO_HOME_MARKETING),
        L = D && O ? n5.NI.COMBINED_ORBS : O ? n5.NI.ORB_MULTIPLIER : D ? n5.NI.ORB_REWARDS : null,
        U = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? L
                : t === n5.NI.THREE_P_PROMOTIONS
                  ? y
                      ? n5.NI.CALL_OF_DUTY
                      : n5.NI.THREE_P_PROMOTIONS
                  : null;
        }, [y, e.search, L]);
    ns(U ?? "", null != U);
    let { navBarSections: G, activeSectionId: w } = a_([nH.HOME, nH.WHATS_NEW, nH.BEST_OF_NITRO, nH.PLANS, nH.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: z } = G,
        K = (function (e) {
            let { location: t } = e;
            return nd.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, c.jsxs)("div", {
            ref: s,
            className: u()(aS.kL, aS.Gd, aS.iI, { [aS.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nB, { className: aS.yH }),
                (0, c.jsx)(nZ, { navBarSections: G, activeSectionId: w }),
                (0, c.jsxs)("div", {
                    className: aS.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: aS.qY,
                            ref: B.ref,
                            children: (0, c.jsx)(W.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(am, {
                                    ref: n,
                                    subscriptionTier: v,
                                    isEligibleForBogoPromotion: P,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: aS.So,
                            ref: H.ref,
                            children: (0, c.jsx)(n4, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aS.KQ,
                            ref: F.ref,
                            children: (0, c.jsx)(ae, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aS.s5,
                            ref: V.ref,
                            children: (0, c.jsx)(
                                W.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => p(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(ay, { innerRef: i, isPlanSelectUiRedesignEnabled: K }),
                                },
                                K ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: aS.aC, ref: z.ref, children: (0, c.jsx)(aI, {}) }),
                    ],
                }),
                (0, c.jsx)(W.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (k.default.track(e2.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: S }),
                            N(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: aS._Z }),
                }),
                (0, c.jsx)(nK, { ref: r }),
                (0, c.jsx)(nV, { isVisible: !d && !f && b, subscriptionTier: v, isEligibleForBogoPromotion: P }),
                (0, c.jsx)(nB, { className: aS.MF }),
            ],
        });
    return (0, c.jsx)(sm.N, {
        theme: aP.NJ.DARK,
        children: (e) => (0, c.jsx)(Y.Gt, { className: u()(aS.XG, e), ref: t, children: X }),
    });
};
var aO = s(862482),
    aM = s(412260),
    ak = s(662367),
    aL = s(374403),
    aU = s(396375),
    aG = s(815846),
    aw = s(370049);
let aB = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nR.ar)();
    if (null == i) return null;
    let l = null != i ? eM.Ay.getPremiumPlanItem(i) : null;
    if (
        (eM.Ay.isBoostOnlySubscription(i)
            ? (t = eg.intl.string(eg.t.Uj0md3))
            : null != l && (t = eM.Ay.getTierDisplayNameByPlanId(l.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != l ? eM.Ay.getSkuIdForPlan(l.planId) : null) === t3.pe.TIER_1;
    return (
        (s = null != a ? a : r ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(sx.Z, {
            className: u()(aw.kL, n, { [aw.He]: r }),
            type: sx.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(sy.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aw.Kk, { [aw.Pt]: r }),
                }),
                (0, c.jsx)(ec.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? eg.intl.format(eg.t["tYuv+T"], {
                              helpdeskArticle: eO.A.getArticleURL(e2.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : eg.intl.format(eg.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aH = s(978836);
let aF = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aH.zr, { [aH.N]: t }),
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
                        (0, c.jsx)("stop", { className: aH.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aH.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aH.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aH.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aH.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aV = s(900797),
    az = s(847374),
    aW = s(812993),
    aY = s(614268);
function aK(e) {
    let { className: t } = e;
    return (0, c.jsx)(aW.Lp, { className: u()(aY.T, t), text: eg.intl.string(eg.t.EYxi0o) });
}
var aX = s(904788),
    aZ = s(507553);
let aJ = "/assets/5b4fec8511c3676a.svg",
    aQ = "/assets/0838bda6ecd20d91.svg";
function aq(e, t, s) {
    return (0, il.M)(e) ? t : s;
}
var a$ = s(872461);
function a0(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nX.D, {
        onClick: s,
        className: a$.customButton,
        children: [
            t ? eg.intl.string(eg.t.maZaN3) : eg.intl.string(eg.t["37C26f"]),
            t
                ? (0, c.jsx)(aV.t, { size: "md", color: "currentColor", className: a$.arrow })
                : (0, c.jsx)(az.a, { size: "md", color: "currentColor", className: a$.arrow }),
        ],
    });
}
function a1(e) {
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
        { analyticsLocations: d } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(j.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(a$.perkCard, i),
            children: [
                l
                    ? (0, c.jsx)(aX.A, {
                          className: a$.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aK, { className: a$.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, a$.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(el.D, {
                            variant: "heading-lg/extrabold",
                            className: a$.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: a$.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let a2 = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, ic.Ay)(),
                n = (0, iu.X)("usePerkCards"),
                a = (0, tD.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eM.Ay.canUsePremiumProfileCustomization(e);
                }),
                r = (0, eM.EJ)(t3.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: eg.intl.string(eg.t.SS87rQ),
                    description: eg.intl.string(eg.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eg.intl.string(eg.t["5cYMu0"]),
                    description: eg.intl.string(eg.t.vxk9va),
                    imageSource: aq(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eg.intl.string(eg.t["/xvEMy"]),
                    description: eg.intl.string(eg.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eg.intl.string(eg.t.OuItFi),
                    description: eg.intl.string(eg.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eg.intl.string(eg.t["R2IV/Q"]),
                    description: eg.intl.string(eg.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eg.intl.string(eg.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? eg.intl.formatToPlainString(eg.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : eg.intl.formatToPlainString(eg.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (aZ.A.setState({ scrollPosition: i$._F.TRY_IT_OUT }),
                                    t(eS.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? eg.intl.format(eg.t.aj1pfZ, { onCheckItOutClick: t })
                            : eg.intl.format(eg.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eg.intl.string(eg.t.BUScid),
                    description: eg.intl.string(eg.t.vN6XpQ),
                    imageSource: aq(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eg.intl.string(eg.t.Bv8Pfk),
                    description: eg.intl.string(eg.t.JMfaTU),
                    imageSource: aq(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eg.intl.string(eg.t.Bv8Pfk),
                    description: eg.intl.string(eg.t.JMfaTU),
                    imageSource: aq(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eg.intl.string(eg.t["lGcW+c"]),
                    description: eg.intl.string(eg.t["/fDyO+"]),
                    imageSource: aq(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eg.intl.string(eg.t["1c+xwT"]),
                    description: eg.intl.string(eg.t.hJG8ZN),
                    imageSource: aq(i, aQ, aJ),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eg.intl.string(eg.t.tzdIwI),
                    description: eg.intl.string(eg.t.hJG8ZN),
                    imageSource: aq(i, aQ, aJ),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eg.intl.string(eg.t.tzdIwI),
                    description: eg.intl.string(eg.t.hJG8ZN),
                    imageSource: aq(i, aQ, aJ),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eg.intl.string(eg.t.RSXQYO),
                    description: eg.intl.string(eg.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eg.intl.string(eg.t["uZt5q/"]),
                    description: eg.intl.string(eg.t.ZK3ZoX),
                    imageSource: aq(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eg.intl.formatToPlainString(eg.t.jqhAdL, { premiumMaxSize: r }),
                    description: eg.intl.formatToPlainString(eg.t["HI+cfm"], { premiumMaxSize: r }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eg.intl.string(eg.t.NaGpTf),
                    description: eg.intl.string(eg.t["A8O/Qw"]),
                    imageSource: aq(i, i0, i1),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: a$ }),
        l = (0, tD.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, j.Ay)(),
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
        className: u()(a$.perksContainer, t, {
            [a$.partiallyHidden]: i && !n,
            [a$.subscriberNitroHome]: i,
            [a$.reducedMotion]: l,
        }),
        children: [
            (0, c.jsx)(el.D, {
                variant: "heading-xxl/extrabold",
                className: a$.perksTitle,
                children: i ? eg.intl.string(eg.t.QX14gI) : eg.intl.string(eg.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(a$.perkCardContainer, { [a$.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(a1, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [a$.sizeGizmo]: !n, [a$.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(a0, {
                                onClick: function () {
                                    (k.default.track(e2.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(a$.cover, { [a$.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var a3 = s(194509),
    a7 = s(317587);
let a6 = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: e2.JJy.MARKETING_FLOATING_CTA },
        l = (0, ic.Ay)(),
        o = (0, nG.M)(l);
    return (0, c.jsx)(ei.animated.div, {
        className: u()(a7.iE, { [a7.H8]: i, [a7.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? a7.zW : a7.iJ,
            children: [
                (0, c.jsx)(aU.A, {
                    color: o ? aO.XD.BRAND_INVERTED : void 0,
                    className: u()(a7.x6, { [a7.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : a7.PJ,
                }),
                (0, c.jsx)(a3.A, { className: a7.x6, premiumModalAnalyticsLocation: r }),
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
            isDarkMode: r,
            isEligibleForBogoPromotion: l,
        } = e,
        o = l
            ? (0, c.jsx)(aU.A, {
                  color: r ? aO.XD.BRAND_INVERTED : void 0,
                  className: u()(a5.x6, a5.Ph, n, { [a5.Sq]: t && a, [a5.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : a5.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aU.A, {
                  color: r || !a ? aO.XD.BRAND_INVERTED : void 0,
                  className: u()(a5.x6, a5.Ph, n, { [a5.Sq]: t && a, [a5.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(a3.A, { className: u()(a5.x6, n), color: a ? void 0 : aO.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(a5.UD, i), children: [o, " ", d] });
}
function a9() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aX.p, { className: a5.zd }),
            (0, c.jsx)(aX.p, { className: a5.G }),
            (0, c.jsx)(aX.p, { className: a5.zy }),
            (0, c.jsx)(aX.p, { className: a5.GX }),
        ],
    });
}
function a4(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = ac();
    return (0, c.jsx)(ec.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(a5.h_, { [a5.If]: s, [a5.jn]: i }),
        children: eg.intl.format(eg.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let re = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, eL.QQ)(),
        o = (0, nR.ar)(),
        d = (0, ek.cg)(),
        m = (0, nr.b)().length > 0,
        x = eg.intl.string(eg.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(a5.kL, s, { [a5.V1]: !o, [a5.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? a5.I6 : a5.G1,
                    children: [
                        (0, c.jsx)(tA.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(el.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: x,
                            }),
                        }),
                        m
                            ? (0, c.jsx)("div", {
                                  className: a5.DF,
                                  children: (0, c.jsx)(aa.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(a4, {}),
                        d || l
                            ? (0, c.jsx)("div", {
                                  className: a5.UD,
                                  children: (0, c.jsx)(a3.A, { className: u()(a5.x6, i), color: aO.XD.WHITE }),
                              })
                            : (0, c.jsx)(a8, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(a4, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(a9, {}),
            ],
        }),
    });
});
var rt = s(22118),
    rs = s(145359),
    ri = s(377770);
function rn(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aF, { lifted: t }) : null;
}
let ra = () => {
        (0, _.P)(I);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, ic.Ay)(),
            n = (0, il.M)(i),
            [a, r] = o.useState(!1),
            [l, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eM.EL)(h) : null,
            b = null != N ? eM.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== b && b !== t3.pe.TIER_2 ? t3.pe.TIER_2 : null,
            E = (0, eG.V)(),
            T = E?.subscriptionTrial?.skuId,
            R = (0, nR.ar)(),
            v = (0, ek.cg)(),
            P = v ?? !1,
            S = (0, x.bG)([aM.A], () => {
                let e = aM.A.getMarketingComponentByType(eC.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            y = (0, aL.Q)(),
            { analyticsLocations: D } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let O = (0, c.jsx)("div", {
            className: ri.dY,
            children: (0, c.jsx)(W.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(nu.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aU.A, {
                        showIcon: !1,
                        subscriptionTier: t3.pe.TIER_0,
                        className: rs.Ph,
                        look: aO.pR.OUTLINED,
                        color: aO.XD.WHITE,
                        buttonShineClassName: rs.Qr,
                    }),
                    tier2CTAButton:
                        T === t3.pe.TIER_0
                            ? (0, c.jsx)(aU.A, {
                                  showIcon: !1,
                                  subscriptionTier: t3.pe.TIER_2,
                                  className: rs.Ph,
                                  look: aO.pR.OUTLINED,
                                  color: aO.XD.WHITE,
                                  buttonShineClassName: rs.Qr,
                              })
                            : (0, c.jsx)(aU.A, {
                                  color: aO.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: t3.pe.TIER_2,
                                  className: rs.Ph,
                                  hasActivePromotion: P,
                                  textOptions: { textClassName: rs.Ac },
                                  buttonShineClassName: rs.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: ri.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aB, { premiumSubscription: h, className: u()(ri.R3, { [ri.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: ri.n1,
                        children: [
                            (0, c.jsx)(rn, { inOfferExperience: R }),
                            (0, c.jsx)(sa.l, {
                                className: ri.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [ri.V1]: !R }),
                    children: [
                        null != S && (0, c.jsx)(aG.c, { className: ri.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: ri.iS,
                            children: [
                                !R &&
                                    (0, c.jsx)(sa.l, {
                                        className: ri.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(W.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(re, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [ri.p7]: R, [ri.Pw]: R, [ri.AG]: v, [ri.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != y && (0, c.jsx)("div", { className: ri.Ol, children: (0, c.jsx)(ak.I, { component: y }) }),
                O,
                (0, c.jsx)(a2, { className: ri.B_ }),
                (0, c.jsx)("div", { className: ri.aC, children: (0, c.jsx)(rt.A, { className: ri.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: ri.hz }),
                (0, c.jsx)(a6, {
                    isVisible: !a && !l && f,
                    subscriptionTier: C,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: v,
                }),
                (0, c.jsx)(W.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (k.default.track(e2.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            g(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: ri._Z }),
                }),
                (0, c.jsx)("img", {
                    src: nn,
                    className: ri.Kw,
                    width: 112,
                    height: 85,
                    alt: eg.intl.string(eg.t.X4IxWL),
                }),
            ],
        });
    },
    rr = function (e) {
        let { entrypoint: t } = e,
            s = (0, eG.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, nl.NF)({ trialOffer: s }),
            a = (0, nl.Tp)(),
            r = (0, x.bG)([e$.A], () => e$.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, nl.QG)(), !0 === a && (0, nl.ne)(r), (null != s || null != i) && (0, G.u1)(s, i));
            }, [s, i, n, a, r]),
            t)
        ) {
            case t3.tU.UserSettings:
                return (0, c.jsx)(ra, {});
            case t3.tU.ApplicationStoreHome:
                return (0, c.jsx)(aD, {});
            default:
                return null;
        }
    };
var rl = s(531296);
let rc = function (e) {
    let { entrypoint: t = t3.tU.UserSettings } = e;
    (0, _.P)(I);
    let s = (0, C.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
        n = V("nitro_member_hub_header"),
        a = (0, U.ds)(),
        { sourceAnalyticsLocations: r, analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        d = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        R = (0, x.bG)([O.A], () => O.A.hasFetchedPaymentSources),
        v = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        w = v?.id,
        B = (0, eG.V)(),
        F = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        z = (0, E.Y)(t3.T7),
        [W, Y] = o.useState(!0),
        K = o.useRef(0),
        X = (0, L.YE)(v, t3.PremiumTypes.TIER_2),
        Z = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        J = null != Z && Z.status === e2.Dmq.CANCELED;
    ((0, nr.b)(),
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                (await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, e2.tF5.DISCOVERY)]),
                    (K.current = Date.now() - e),
                    Y(!1));
            });
        }, []),
        o.useEffect(() => {
            W ||
                k.default.track(e2.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: r,
                    load_duration_ms: K.current,
                });
        }, [r, W]),
        o.useEffect(() => {
            s && (null != B || null != F) && (0, G.u1)(B, F);
        }, [s, B, F]));
    let Q = (0, m.zy)(),
        q = o.useRef(!1),
        $ = d && R && z,
        [ee, et] = o.useState($);
    ($ && !ee && et(!0),
        o.useEffect(() => {
            if (q.current || !$) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: t3.pe.TIER_0, nitro: t3.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((q.current = !0),
                (0, S.bG)(e2.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: s, analyticsLocations: l }));
        }, [$, Q.search, l]));
    let es = (0, x.bG)([y.A], () => y.A.enabled),
        ei = t === t3.tU.ApplicationStoreHome,
        en = es
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : ei && X
                ? (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(na, { userId: w }) })
                : ee
                  ? null
                  : (0, c.jsx)("div", { className: u()(rl.kL, rl.Lq), children: (0, c.jsx)(g.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !J) || (n && e && (a || J))
            ? en
            : (0, c.jsxs)(c.Fragment, { children: [ei && (0, c.jsx)(N.A, {}), en] });
    }
    return (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(rr, { entrypoint: t }) });
};
