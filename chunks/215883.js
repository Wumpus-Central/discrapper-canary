(s.d(t, { A: () => rn }), s(323874), s(14289), s(35956), s(205816));
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
    R = s(545075),
    T = s(840251),
    v = s(688151);
let I = new T.E([], v.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = s(611924),
    S = s(75678),
    P = s(976860),
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
var z = s(269115),
    W = s(689175),
    Y = s(961250),
    K = s(366505),
    X = s(321191),
    Z = s(903209),
    J = s(131168),
    Q = s(482589),
    q = s(511484),
    $ = s(315629),
    ee = s(297264),
    et = s(834730),
    es = s(65470),
    ei = s(375708),
    en = s(719126);
let ea = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, j.Ay)(s);
    return (0, c.jsx)(j.f5, {
        value: n,
        children: (0, c.jsxs)($.h, {
            className: u()(en.kL, en.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: en.FS,
                    children: [
                        (0, c.jsx)(ee.D, {
                            variant: "heading-xxl/bold",
                            className: en.R_,
                            children: ei.intl.string(ei.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(et.E, { variant: "text-md/medium", children: ei.intl.string(ei.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: en.SB,
                            children: (0, c.jsx)(es.A, {
                                buttonTextOverride: ei.intl.string(ei.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: en._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var er = s(877624);
let el =
    "https://cdn.discordapp.com/assets/content/cb0071c273cdfb73732c42fd7bb4f97df58b363ce25d539147211a6bf26bb5b3.png";
function ec(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: el,
        srcSet: `${el} 1x, https://cdn.discordapp.com/assets/content/5c0ab98610e9aa5f1564d303516953a1a18c39231c6349f350ac1310f4d1e51b.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var eo = s(502572),
    ed = s(192308),
    eu = s(331322),
    em = s(403581),
    ex = s(821609),
    eg = s(775602),
    ef = s(366999),
    ep = s(531260),
    eh = s(780964),
    eN = s(766075),
    eA = s(786300),
    ej = s(975571),
    eb = s(158045),
    eC = s(725018),
    eE = s(89366),
    eR = s(724651),
    eT = s(732280),
    ev = s(549996),
    eI = s(172218);
function e_() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eI.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eS = s(287763);
let eP = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eS.i,
        children: (0, c.jsx)(et.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var ey = s(371764),
    eD = s(103411),
    eO = s(778712),
    eM = s(97808),
    ek = s(144165),
    eL = s(590251),
    eU = s(607470),
    eG = s(854627),
    ew = s(427262),
    eB = s(197630),
    eH = s(851746),
    eF = s(326084),
    eV = s(664654);
s(232198);
var ez = s(652215),
    eW = s(879416);
function eY() {
    let e,
        t,
        s,
        { location: i = "PremiumNitroHomeReferralBanner" } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { referralSentUsers: n } = (0, eV.J)(),
        a = (0, x.bG)([eH.A], () => eH.A.getRecipientStatus()),
        r = !1 !== (0, x.bG)([eH.A], () => eH.A.getHasEligibleFriends()),
        { isEligibleForIncentive: l, referralRewardType: c, useAltReferralCardArt: o } = (0, eW.x)({ location: i }),
        d = l ? c : null,
        u =
            ((e = 0),
            (t = 0),
            (s = 0),
            a.forEach((i) => {
                i === eF.aK.REFERRER_REWARD_GRANTED
                    ? (e++, t++, s++)
                    : i === eF.aK.CONVERTED
                      ? (t++, s++)
                      : i === eF.aK.REDEEMED && s++;
            }),
            { numRewardGranted: e, numConverted: t, numRedeemed: s, numSent: a.size }),
        m = a.size === eV.Z,
        g = (function (e, t, s) {
            let i = ej.A.getArticleURL(ez.MVz.REFERRAL_PROGRAM);
            if (!e) return ei.intl.format(ei.t["zWhX/Q"], { helpdeskArticle: i });
            if (null != s)
                return t.numRewardGranted === eV.Z
                    ? s === eB.xb.ORBS
                        ? ei.intl.format(ei.t.OluhLp, { helpdeskArticle: i })
                        : ei.intl.format(ei.t["8BYihN"], { helpdeskArticle: i })
                    : t.numSent === eV.Z
                      ? s === eB.xb.ORBS
                          ? ei.intl.format(ei.t["1aV1j9"], { helpdeskArticle: i })
                          : ei.intl.format(ei.t.QNrPuS, { helpdeskArticle: i })
                      : e
                        ? s === eB.xb.ORBS
                            ? ei.intl.format(ei.t.cfE0uG, { numOrbs: 5e3, helpdeskArticle: i })
                            : ei.intl.format(ei.t["+fcvlI"], { helpdeskArticle: i })
                        : ei.intl.format(ei.t["a0+Jwv"], { helpdeskArticle: i });
            return t.numSent === eV.Z
                ? t.numRedeemed === eV.Z
                    ? ei.intl.format(ei.t["1aEjsH"], { helpdeskArticle: i })
                    : ei.intl.format(ei.t["+u3AOO"], { helpdeskArticle: i })
                : ei.intl.format(ei.t["omMr+V"], { helpdeskArticle: i });
        })(r, u, d),
        f =
            d === eB.xb.ORBS
                ? ei.intl.string(ei.t.tAlkl4)
                : d === eB.xb.DISCOUNT
                  ? ei.intl.formatToPlainString(ei.t["/JJ9I5"], { discountPercent: 30 })
                  : ei.intl.string(ei.t.USo4s7),
        p = d === eB.xb.ORBS && u.numSent === eV.Z && u.numConverted >= 1;
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
        shouldShowSpendOrbsCta: p,
    };
}
var eK = s(212737),
    eX = s(162907);
let eZ =
    "https://cdn.discordapp.com/assets/content/f94d752e86f195c300db953fbe5c704cbf0c696dcbb0b3e389cd60e8a633a942.png";
var eJ = s(188828);
let eQ =
    "https://cdn.discordapp.com/assets/content/ceb223833c25175aadddac32ce46fd1c60f4455860c6be9017c8d5993dce01c9.png";
var eq = s(764014),
    e$ = s(484252);
let e0 =
    "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg";
function e1(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    (k.default.track(ez.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, ed.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        }));
}
function e2(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eG.A)({ userId: t.id, size: eO._3.SIZE_24 });
    return (0, c.jsx)(
        eM.eu,
        { className: eX.bj, src: s, "aria-label": (0, ew.mG)(t), size: eO._3.SIZE_24, ...i },
        t.id,
    );
}
function e3(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: eX.p, children: t });
}
function e6(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(eX.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < eV.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e2, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e3, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let e5 = { width: 200, height: 160 },
    e7 = { width: 100, height: 60 },
    e8 = { width: 60, height: 40 };
function e9(e) {
    let {
            nReferralsSent: t,
            imageSize: s = 93,
            backgroundClassName: i,
            ringClassName: n,
            referralRewardType: a = null,
            useAltReferralCardArt: r = !1,
        } = e,
        l = (0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        {
            src: o,
            srcSet: d,
            dimensions: u,
        } = r
            ? a === eB.xb.ORBS
                ? { src: eQ, srcSet: `${eQ} 1x, ${eq.A} 2x`, dimensions: l ? e7 : e5 }
                : a === eB.xb.DISCOUNT
                  ? { src: eZ, srcSet: `${eZ} 1x, ${eJ.A} 2x`, dimensions: e8 }
                  : { src: e0, srcSet: void 0, dimensions: null }
            : { src: e0, srcSet: void 0, dimensions: null },
        m = u?.width ?? s,
        g = u?.height ?? s;
    return (0, c.jsx)(eL.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? eX.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? eX.e0,
        overlayClassName: t === eV.Z ? eX.ys : void 0,
        children:
            a === eB.xb.ORBS && r && !l
                ? (0, c.jsx)(eU.A, {
                      className: eX.HF,
                      width: m,
                      height: g,
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      controls: !1,
                      children: (0, c.jsx)("source", { src: e$.A, type: "video/webm" }),
                  })
                : null != d
                  ? (0, c.jsx)("img", { src: o, srcSet: d, alt: "", role: "presentation", width: m, height: g })
                  : (0, c.jsx)(ek._, { src: o, height: g, width: m, zoomable: !1 }),
    });
}
function e4(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = eY();
    return (0, c.jsxs)("div", {
        className: u()(eX.kL, t),
        children: [
            (0, c.jsx)("div", { className: eX.G3, children: (0, c.jsx)(e9, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: eX.IH,
                children: [
                    (0, c.jsx)(e6, { referralSentUsers: s, className: eX.GV }),
                    (0, c.jsxs)("div", {
                        className: eX.n4,
                        children: [
                            (0, c.jsx)(ee.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ei.intl.string(ei.t.USo4s7),
                            }),
                            (0, c.jsx)(et.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
                        ],
                    }),
                    (0, c.jsx)(ex.$, {
                        variant: "primary",
                        disabled: !1 === n || !0 === a,
                        text: ei.intl.string(ei.t.Lm2nFc),
                        onClick: () =>
                            e1({ startingScreen: eK.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var te = s(792656),
    tt = s(536637),
    ts = s.n(tt),
    ti = s(496431),
    tn = s(850292);
let ta = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, ti.A)(ts()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: r, minutes: l, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: r, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(tn.Xl, s, { [tn.a3]: "text-lg/bold" === i }),
        children: [
            (0, c.jsx)(et.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ei.intl.string(ei.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: tn.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: tn.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: tn.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: tn.B2,
                                                        children: (0, c.jsx)(et.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: tn.B2,
                                                        children: (0, c.jsx)(et.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return ei.intl.string(ei.t.ixASa2);
                                                        case "hours":
                                                            return ei.intl.string(ei.t["8sNvNn"]);
                                                        case "minutes":
                                                            return ei.intl.string(ei.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return ei.intl.string(ei.t.JhaiLW);
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
                                    (0, c.jsx)(et.E, {
                                        className: tn.cV,
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
    tl = s(609425),
    tc = s(660184),
    to = s(938767);
function td() {
    let e = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tl.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eG.A)({ userId: e?.id, size: eO._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, ew.mG)(e);
    return (0, c.jsxs)("div", {
        className: to.kL,
        children: [
            (0, c.jsx)("div", {
                className: to.my,
                children: (0, c.jsx)(eM.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eO._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: to.QC, children: (0, c.jsx)(tc.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tu = s(707554),
    tm = s(628154);
let tx = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(tu.F, {
        forceLevel: 1,
        children: (0, c.jsx)(ee.D, { className: u()(tm.w, t, i && tm.n), variant: n, color: s, children: a }),
    });
};
var tg = s(508770),
    tf = s(839534),
    tp = s(478016),
    th = s(318254),
    tN = s(661531),
    tA = s(626031),
    tj = s(957457);
function tb(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eB.xb.ORBS
          ? (0, c.jsx)(tC, { nRewardsGranted: t, className: i })
          : s === eB.xb.DISCOUNT
            ? (0, c.jsx)(tE, { nRewardsGranted: t, className: i })
            : null;
}
function tC(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(i);
        }, [i]),
        (0, c.jsxs)(eu.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: tj.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(th.C, { size: "xs", color: tN.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(tA.t, {
                            value: n,
                            onValueChange: ez.tEg,
                            onValueReached: ez.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "text-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(et.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ei.intl.string(ei.t.UhguER),
                }),
            ],
        })
    );
}
function tE(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(eu.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": ei.intl.formatToPlainString(ei.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(tp.U, { size: "md", color: tN.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: ei.intl.format(ei.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var tR = s(758836),
    tT = s(558992);
function tv(e) {
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
            shouldShowSpendOrbsCta: g,
        } = eY({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(tT.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tT.G3,
                children: (0, c.jsx)(e9, {
                    nReferralsSent: i,
                    imageSize: 55,
                    backgroundClassName: tT.HP,
                    ringClassName: tT.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(tT.IH, d && tT.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: tT.aZ,
                            children: (0, c.jsx)(tg.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: tT.n4,
                        children: [
                            (0, c.jsx)(et.E, {
                                variant: d ? "text-md/bold" : "text-md/semibold",
                                color: "text-strong",
                                children: r,
                            }),
                            (0, c.jsx)(et.E, {
                                variant: d ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: l,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: tT.Wp,
                              children: [
                                  (0, c.jsx)(e6, { referralSentUsers: s }),
                                  (0, c.jsx)(tb, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(e6, { referralSentUsers: s, className: tT.t7 }),
                ],
            }),
            (0, c.jsx)(ex.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? ei.intl.string(ei.t.iw5Ccc) : ei.intl.string(ei.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, tf.Cz)({
                              tab: tR.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : e1({ startingScreen: eK.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tI = s(702841),
    t_ = s(676279),
    tS = s(128954),
    tP = s(717421),
    ty = s(396583),
    tD = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tO = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tM = (e) => {
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
        u = (0, tP.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * l }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        f = (0, tP.z)(
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
        N = (0, tP.z)(
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
        R = (0, tP.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, ty.A)(() => {
        (b(C * (0.5 * Math.random() * 5 + 2.5)), E((e) => -1 * e));
    }, A),
    r)
        ? d
        : (0, c.jsx)(tS.animated.div, {
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
var tk = s(382168);
let tL = function (e) {
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
                        className: u()(tk.nJ, i),
                        children: (0, c.jsx)(tM, {
                            blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                            scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tD.COSINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tO.UP,
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
                        className: u()(tk.IN, n),
                        children: (0, c.jsx)(tM, {
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tD.COSINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tO.DOWN,
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
                        className: u()(tk.Gj, a),
                        children: (0, c.jsx)(tM, {
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tD.SINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tO.DOWN,
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
                        className: u()(tk.FV, r),
                        children: (0, c.jsx)(tM, {
                            blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                            scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tD.SINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tO.UP,
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
                        className: u()(tk.E1, l),
                        children: (0, c.jsx)(tM, {
                            blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                            scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                            yAxisAnimationData: { range: 20, duration: 4e3, path: tD.COSINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tO.UP,
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
    },
    tU =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tG = function (e) {
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
                  children: (0, c.jsx)(tM, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tD.SINE },
                      parallaxAnimationData: {
                          pathDirection: tO.UP,
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
                                eU.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tU }),
                                },
                                tU,
                            ),
                  }),
              });
    },
    tw = function (e) {
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
            p = (0, tI.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
            h = (0, t_.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tG, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, c.jsx)(tL, {
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
var tB = s(942663);
let tH = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tw, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tB.wG, s && tB.Vx),
        flyingWumpusAssetClassName: u()(tB.lu, s && tB.ov),
        boltContainerClassName: u()(tB.nJ, s && tB.Wc),
        hammerContainerClassName: u()(tB.Gj, s && tB.XA),
        keyContainerClassName: u()(tB.FV, s && tB.oZ),
        starContainerClassName: u()(tB.E1, s && tB.LN),
        boltAssetClassName: u()(tB.j7, s && tB.QN),
        hammerAssetClassName: u()(tB.Wv, s && tB.B9),
        keyAssetClassName: u()(tB.rs, s && tB.I1),
        starAssetClassName: u()(tB.OY, s && tB.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tF = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tV = s(454273);
let tz = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: g } = e_(!(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion)),
        f =
            ((t = { [tF.MORNING]: ei.t["Wvc/I+"], [tF.AFTERNOON]: ei.t["d+0STx"], [tF.EVENING]: ei.t.CqsxKI }),
            ei.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tF.MORNING
                        : s >= 12 && s < 17
                          ? tF.AFTERNOON
                          : tF.EVENING
                ],
            )),
        p = o ?? (l ? (0, c.jsx)(tv, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tV.kL, tV.Eg, i),
        ref: r,
        children: (0, c.jsxs)("div", {
            className: u()(tV.W2, tV.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 32,
                    className: tV.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(eu.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(tx, {
                                            className: tV.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: f,
                                        }),
                                        (0, c.jsx)(td, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tV.y3,
                    children: (0, c.jsx)(tH, { containerVisibilityPercentage: g, compact: null == p }),
                }),
            ],
        }),
    });
};
var tW = s(924864);
let tY =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tK = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, tI.bG)([eg.Ay], () => eg.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: tW.BI,
                    children: (0, c.jsx)(tM, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tD.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tO.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, c.jsx)("img", { src: tY, alt: "", className: tW.Q }),
                    }),
                }),
                (0, c.jsx)(tL, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: tW.Gj,
                    keyContainerClassName: tW.FV,
                    starContainerClassName: tW.E1,
                    hammerAssetClassName: tW.Wv,
                    keyAssetClassName: tW.rs,
                    starAssetClassName: tW.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var tX = s(549926);
let tZ = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tw, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tX.wG,
        flyingWumpusAssetClassName: tX.lu,
        boltContainerClassName: tX.nJ,
        hammerContainerClassName: tX.Gj,
        keyContainerClassName: tX.FV,
        starContainerClassName: tX.E1,
        boltAssetClassName: tX.j7,
        hammerAssetClassName: tX.Wv,
        keyAssetClassName: tX.rs,
        starAssetClassName: tX.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tJ = s(499126);
function tQ(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tw, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tJ.wG,
        flyingWumpusAssetClassName: tJ.lu,
        boltContainerClassName: tJ.nJ,
        hammerContainerClassName: tJ.Gj,
        keyContainerClassName: tJ.FV,
        starContainerClassName: tJ.E1,
        boltAssetClassName: tJ.j7,
        hammerAssetClassName: tJ.Wv,
        keyAssetClassName: tJ.rs,
        starAssetClassName: tJ.OY,
        animationSpeedScale: 1 / 0.7,
    });
}
let tq = function () {
    let e = (0, tI.bG)([eg.Ay], () => eg.Ay.useReducedMotion);
    return (0, c.jsx)(tL, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tJ.cI,
        hammerContainerClassName: tJ.qg,
        keyContainerClassName: tJ.h2,
        boltContainerClassName: tJ.Bz,
        starAssetClassName: tJ.ks,
        hammerAssetClassName: tJ.GY,
        keyAssetClassName: tJ.p4,
        boltAssetClassName: tJ.vy,
    });
};
var t$ = s(202541);
function t0(e, t, i) {
    (0, ed.openModalLazy)(async () => {
        let { PremiumBrandRefreshSubscriptionCancellationModal: n } = await Promise.all([
            s.e("489361"),
            s.e("227853"),
            s.e("470126"),
            s.e("128804"),
            s.e("71151"),
            s.e("286615"),
            s.e("311541"),
            s.e("472847"),
            s.e("986735"),
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
            s.e("992789"),
            s.e("952372"),
            s.e("425412"),
            s.e("910486"),
            s.e("56366"),
            s.e("265607"),
            s.e("544571"),
            s.e("206028"),
            s.e("102328"),
            s.e("852556"),
            s.e("76027"),
            s.e("594161"),
            s.e("435432"),
            s.e("80347"),
            s.e("680166"),
        ]).then(s.bind(s, 293061));
        return (s) => (0, c.jsx)(n, { ...s, analyticsLocations: e, initialStep: i, premiumSubscription: t });
    });
}
function t1(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tV.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tV.ap,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, c.jsx)(eP, { text: ei.intl.string(ei.t.yhldRB) }),
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: 12,
                            className: tV.rG,
                            children: [
                                (0, c.jsx)(tx, { children: ei.intl.format(ei.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)(et.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: ei.intl.string(ei.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(eu.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, c.jsx)(te.A, {
                                    size: "md",
                                    buttonTextOverride: ei.intl.string(ei.t["2+luBl"]),
                                    iconOverride: em.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(ex.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ei.intl.string(ei.t.Af7ye6),
                                    onClick: () => (0, eN.openUserSettings)(eh.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tV.Hk,
                    children: [(0, c.jsx)(ec, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(tq, {})],
                }),
            ],
        }),
    });
}
function t2(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: r } = e_(!(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tV.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tV.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 24,
                    className: tV.E2,
                    children: [
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eP, { text: ei.intl.string(ei.t.yhldRB) }),
                                (0, c.jsx)(tx, { children: ei.intl.format(ei.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tV.X8,
                                    children: (0, c.jsx)(et.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: ei.intl.string(ei.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(eu.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tV.oF,
                            children: [
                                (0, c.jsx)(te.A, {
                                    size: "md",
                                    buttonTextOverride: ei.intl.string(ei.t["2+luBl"]),
                                    iconOverride: em.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(ex.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ei.intl.string(ei.t.Af7ye6),
                                    onClick: () => (0, eN.openUserSettings)(eh.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tV.Tg, children: (0, c.jsx)(tQ, { containerVisibilityPercentage: r }) }),
            ],
        }),
    });
}
function t3(e) {
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
        { visibilityPercentageRef: g, visibilityPercentage: f } = e_(!(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion)),
        p = m ?? (d ? (0, c.jsx)(tv, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tV.kL, tV.Eg, t),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: u()(tV.W2, tV.HQ),
            ref: g,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tV.ZU, tV.GW),
                    children: [
                        o && l,
                        null != i.expiresAt &&
                            (0, c.jsx)(ta, { expiresAt: i.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(tx, {
                                    children: ei.intl.format(ei.t["3yZP0G"], { percent: i.discount.amount }),
                                }),
                                null != n &&
                                    (0, c.jsx)(et.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: ei.intl.format(ei.t["3Q4wCy"], {
                                            discountedPrice: n,
                                            billingPeriod: (0, eb.Ke)(i.discount.intervalType),
                                            numMonths: i.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(eu.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(ex.$, {
                                    variant: "expressive",
                                    icon: em.t,
                                    size: "md",
                                    text: ei.intl.string(ei.t.zrCzVB),
                                    onClick: () => t0(r, a, tr.g.CONFIRM_DISCOUNT),
                                }),
                                (0, c.jsx)(es.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: ei.intl.string(ei.t["3KomGa"]),
                                }),
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tV.y3, tV.Xx),
                    children: (0, c.jsx)(tZ, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function t6(e) {
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
        } = t7(),
        { isInNitroHomeHeaderTreatment: f } = H("subscriber_home_hero"),
        p = V("subscriber_home_hero"),
        { analyticsLocations: h } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        N = (0, ev.c)(er.C.MARKETING_PAGE_BANNER),
        b = (0, eC.cg)(),
        C = null != o && o.status === ez.Dmq.CANCELED,
        E = f && !C,
        R = null;
    null != N &&
        "marketingPageBanner" === N.properties.properties.oneofKind &&
        (R = (0, c.jsx)(ey.x, {
            componentId: N.id,
            promotionId: N.promotionId,
            promotionBannerMarketingComponentFields: N.properties.properties.marketingPageBanner,
        }));
    let T = R;
    null == T && i && !E && (T = (0, c.jsx)(e4, {}));
    let v = (0, eT.V)(),
        I = (0, eR.O)(),
        _ = (0, q.U9)(I, t$.pe.TIER_2) ? t$.pe.TIER_2 : void 0,
        S = null != o && o.status !== ez.Dmq.ACCOUNT_HOLD && o.hasAnyPremiumNitro,
        P = (0, ep.A)(),
        y = P.isFractionalPremiumActive && !S && null == T && !l,
        { visibilityPercentageRef: D, visibilityPercentage: O } = e_(!(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion));
    if (s)
        return p
            ? (0, c.jsx)(t2, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
            : (0, c.jsx)(t1, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g });
    if (E) {
        let e = y
            ? (0, c.jsxs)("div", {
                  className: tV.UJ,
                  children: [
                      (0, c.jsx)(te.A, {
                          size: "md",
                          hasActivePromotion: !!b,
                          subscriptionTier: v?.subscriptionTrial?.skuId ?? _,
                      }),
                      (0, c.jsx)(es.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: ei.intl.string(ei.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tz, {
            className: t,
            headingTop: a,
            showPill: r,
            buttonVisibilityRef: g,
            shouldShowReferralProgressBar: i,
            marketingBanner: R,
            heroButtons: e,
        });
    }
    return p && C
        ? l && null != d && null != o
            ? (0, c.jsx)(t3, {
                  className: t,
                  buttonVisibilityRef: g,
                  userDiscountOffer: d,
                  discountedPrice: m,
                  premiumSubscription: o,
                  analyticsLocations: h,
                  headingTop: a,
                  showPill: r,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: R,
              })
            : (0, c.jsx)(tz, {
                  className: t,
                  headingTop: a,
                  showPill: r,
                  buttonVisibilityRef: g,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: R,
              })
        : (0, c.jsx)("div", {
              className: u()(tV.kL, t),
              "data-testid": "subscriber-nitro-home-hero-header",
              ref: g,
              children: (0, c.jsxs)("div", {
                  className: tV.Qs,
                  ref: D,
                  children: [
                      r && a,
                      (0, c.jsxs)("div", {
                          className: tV.N1,
                          children: [
                              (0, c.jsx)(tK, { containerVisibilityPercentage: O }),
                              l &&
                                  d?.expiresAt != null &&
                                  (0, c.jsx)(ta, { expiresAt: d.expiresAt.toISOString(), className: tV.IZ }),
                              (0, c.jsx)(tx, {
                                  children:
                                      l && null != d
                                          ? ei.intl.format(ei.t["3yZP0G"], { percent: d.discount.amount })
                                          : n,
                              }),
                              l &&
                                  null != d &&
                                  null != m &&
                                  (0, c.jsx)(et.E, {
                                      className: tV.jG,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: ei.intl.format(ei.t["3Q4wCy"], {
                                          discountedPrice: m,
                                          billingPeriod: (0, eb.Ke)(d.discount.intervalType),
                                          numMonths: d.discount.intervalCount,
                                      }),
                                  }),
                          ],
                      }),
                      (0, c.jsxs)("div", {
                          className: y || l ? tV.UJ : void 0,
                          children: [
                              y &&
                                  (0, c.jsx)(te.A, {
                                      size: "md",
                                      hasActivePromotion: !!b,
                                      subscriptionTier: v?.subscriptionTrial?.skuId ?? _,
                                  }),
                              l &&
                                  null != o &&
                                  (0, c.jsx)(ex.$, {
                                      variant: "expressive",
                                      icon: em.t,
                                      size: "md",
                                      text: ei.intl.string(ei.t.zrCzVB),
                                      onClick: () => t0(h, o, tr.g.CONFIRM_DISCOUNT),
                                  }),
                              (0, c.jsx)(es.A, {
                                  variant: y || l ? "secondary" : "expressive",
                                  size: "md",
                                  buttonTextOverride: ei.intl.string(ei.t["3KomGa"]),
                              }),
                          ],
                      }),
                      T,
                  ],
              }),
          });
}
let [t5, t7] = (0, eA.A)(),
    t8 = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = (0, U.ds)(),
            l = (0, eE.QQ)(),
            o = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            d = null != o && o.status === ez.Dmq.CANCELED && null != i,
            u = l && !d,
            m = ei.intl.string(ei.t.qYKftX),
            g = (0, eD.m)(),
            f = ei.intl.string(ei.t.ifwQZb),
            { fractionalState: p, endsAt: h } = (0, ep.A)(),
            N = (0, ef.Ay)(h, ef.yE.CREDITS_ENDS_IN),
            b = null;
        if (p === t$.xc.NONE || r) b = (0, c.jsx)(eP, { text: m });
        else {
            u = !0;
            let e = ei.intl.format(ei.t["yR+oDD"], {
                helpCenterLink: ej.A.getArticleURL(ez.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            b = (0, c.jsx)(eo.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tV.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tV.V_,
                        children: (0, c.jsx)("div", { className: tV.eL, children: (0, c.jsx)(eP, { text: N }) }),
                    }),
            });
        }
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)(t5.Provider, {
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
                children: (0, c.jsx)(t6, { className: t, isInReverseTrial: r, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var t9 = s(820284),
    t4 = s(742589),
    se = s(392943),
    st = s(285373),
    ss = s(603202),
    si = s(673992);
let sn = function () {
    return (0, c.jsx)(t9.A, {
        section: ez.JJy.NAVIGATION,
        children: (0, c.jsx)(t4.A, {
            className: u()(ss.TQ, si.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: ss.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: si.wk,
                        children: [
                            (0, c.jsx)(em.t, { colorClass: si.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": ei.intl.string(ei.t.Ipxkog),
                                className: si.Ss,
                                children: (0, c.jsx)(se.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: ss.MQ,
                        children: [
                            (0, c.jsx)(st.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(es.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var sa = s(325499),
    sr = s(562708),
    sl = s(885574),
    sc = s(43990),
    so = s(993077),
    sd = s(139286),
    su = s(872725),
    sm = s(920050),
    sx = s(51965),
    sg = s(375776),
    sf = s(727811),
    sp = s(222652),
    sh = s(553875),
    sN = s(934353);
function sA(e) {
    let { openRewardModal: t } = e,
        s = (0, sp.z)();
    if (s.kind === sp.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: sN.R$,
            children: [
                (0, c.jsx)(te.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: t$.pe.TIER_2,
                }),
                (0, c.jsx)(ex.$, { variant: "secondary", size: "md", text: ei.intl.string(ei.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === sf.P.CLAIMED
            ? { text: ei.intl.string(sh.default.Plwzgf) }
            : { text: ei.intl.string(ei.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: sN.R$,
                children: [
                    (0, c.jsx)(sx.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(ex.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === sf.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: sN.ed,
                    children: [
                        (0, c.jsx)(sl.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(et.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ei.intl.string(sh.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sj(e) {
    let { glowing: t = !1 } = e;
    (0, sd.A)({
        type: sr.ImpressionTypes.VIEW,
        name: sr.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: sm.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ed.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(sc.N, {
        theme: ez.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, sN.kL),
                    children: (0, c.jsx)(su.A, {
                        cardType: so.s.CUSTOM,
                        cardClassName: sN.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: sN.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sN.j,
                                    children: [
                                        (0, c.jsx)("div", { className: sN._g }),
                                        (0, c.jsx)("div", { className: sN.$h }),
                                        (0, c.jsx)("div", { className: sN.Rv }),
                                        (0, c.jsx)("div", { className: sN.Lw }),
                                        (0, c.jsx)("div", { className: sN.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: sN.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: sN.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(ee.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sN.DD,
                                            children: ei.intl.string(sh.default.RGT513),
                                        }),
                                        (0, c.jsx)(et.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sN.h_,
                                            children: ei.intl.string(sh.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sA, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sb = s(744064);
function sC(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, sp.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === sp.N.SUBSCRIBE
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
    return (0, c.jsx)(sb.S, {
        id: sm.XBOX_PREMIUM_PERK_CARD_ID,
        title: ei.intl.string(sh.default.UVL9tD),
        description: ei.intl.string(sh.default["I+IXr0"]),
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
function sE(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(sC, { ...e }) });
}
var sR = s(700556),
    sT = s(821874);
function sv(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: r } = e,
        l = sT.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(l, null != n && sR.Jx, r), children: a }) : null,
        ],
    });
}
var sI = s(517846),
    s_ = s(695366),
    sS = s(27620),
    sP = s(789861),
    sy = s(592909),
    sD = s(398523),
    sO = s(881373),
    sM = s(555393),
    sk = s(852218),
    sL = s(951780),
    sU = s(612413),
    sG = s(310235),
    sw = s(334551),
    sB = s(762359);
let sH =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sF =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg";
function sV() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sy.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sy.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sO.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = sD.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, sU.mh)({ location: "useThirdPartyPartnerPerkCards" }),
        r = null === (0, sM.N)(),
        l = (0, sa.b)("useHardwarePartnerPerkCards"),
        { currentDate: d, nDaysInMonth: u } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = l ? void 0 : ei.intl.string(ei.t.y2b7CA),
            m = t
                ? {
                      id: sm.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ei.intl.string(sG.default.F0b4Z8),
                      description: ei.intl.formatToPlainString(sG.default["hworR+"], { validDates: (0, sP.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ei.intl.formatToPlainString(sG.default.g7iyvR, { date: (0, sP.mh)() }),
                      caption: (0, c.jsx)("img", { src: sF, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sH,
                      ctaText: ei.intl.string(sG.default.fcopjf),
                      onCtaClick: () =>
                          (0, sL.P)({
                              partnerIds: [sk.Bt],
                              title: ei.intl.string(sG.default.YJsqDS),
                              subtitle: ei.intl.format(sG.default.ieA3V0, {
                                  termsUrl:
                                      "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                              }),
                              modalTeaser: {
                                  title: ei.intl.string(sG.default.Dkm10r),
                                  body: ei.intl.string(sG.default.LHAkT9),
                              },
                              analyticsLocations: e,
                          }),
                      analyticsOptions: { thirdPartyPartner: sk.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = s
                ? {
                      id: sm.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: ei.intl.string(sG.default["IcD/7p"]),
                      description: ei.intl.formatToPlainString(sG.default.hausFi, { date: (0, sP.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: ei.intl.string(sG.default.fxF0Jz),
                      caption: (0, c.jsx)("img", { src: sF, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sH,
                      analyticsOptions: { thirdPartyPartner: sk.Bt },
                  }
                : null,
            g = i
                ? {
                      id: sm.LOGITECH_3PP_CARD_ID,
                      title: ei.intl.string(sw.default.OlObRa),
                      description: ei.intl.format(sw.default.ZGOJ8R, {
                          discountPercent: sO.aW,
                          termsUrl: ej.A.getArticleURL(ez.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: d.getDate() / u,
                      ctaText: ei.intl.string(ei.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sL.P)({
                              partnerIds: [sk.XY],
                              title: ei.intl.string(sw.default["2I7nK+"]),
                              subtitle: ei.intl.format(sw.default.W8jOD0, {
                                  termsUrl: ej.A.getArticleURL(ez.MVz.LOGITECH_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sk.XY },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            f = n
                ? {
                      id: sm.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ei.intl.string(ei.t.m7PucM),
                      description: ei.intl.format(ei.t["1Zw6xL"], {}),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: d.getDate() / u,
                      ctaText: ei.intl.string(ei.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sL.P)({
                              partnerIds: [sk.KS],
                              title: ei.intl.string(ei.t["7ioAjs"]),
                              subtitle: ei.intl.format(ei.t.LOYRxB, {
                                  helpCenterLink: ej.A.getArticleURL(ez.MVz.RECURRING_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sk.KS },
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
                      id: sm.YOUTUBE_3PP_CARD_ID,
                      title: ei.intl.string(sB.default["NNPh/j"]),
                      description: ei.intl.format(sB.default.MrgHvR, {
                          helpCenterUrl: ej.A.getArticleURL(ez.MVz.YOUTUBE_PROMOTION),
                      }),
                      isThirdPartyPerk: !0,
                      pillText: o,
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                      blurTint: "#18181C",
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/1db181f0a98c20928da64ee63fe3184fd6b60f1b7d4c4fb69560aeb802b55c28.svg",
                          alt: "YouTube Premium",
                      }),
                      ctaText: ei.intl.string(sG.default.fcopjf),
                      onCtaClick: () =>
                          (0, sL.P)({
                              partnerIds: [sk.NC],
                              analyticsLocations: e,
                              title: ei.intl.string(sB.default.TDZUui),
                              subtitle: ei.intl.format(sB.default.BTLkvw, {
                                  helpCenterUrl: ej.A.getArticleURL(ez.MVz.YOUTUBE_PROMOTION),
                              }),
                              modalTeaser: {
                                  title: ei.intl.format(sB.default.J8CVYT, {
                                      helpCenterUrl: ej.A.getArticleURL(ez.MVz.YOUTUBE_PROMOTION_CURRENT_SUBSCRIBER),
                                  }),
                                  titleVariant: "text-sm/medium",
                                  icon: s_.E,
                              },
                              onClose: () => {
                                  sS.Ay.fireSurveyAction(sI.w.YOUTUBE_3PP_MODAL_DISMISSED);
                              },
                          }),
                      analyticsOptions: { thirdPartyPartner: sk.NC },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [l, e, t, s, d, i, u, n, a, r]);
}
var sz = s(762493);
let sW = "xgpp";
function sY(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, sa.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: o } = sV();
    if (!i) return null;
    let d = null != n || null != a || null != r || null != l || null != o;
    return (0, c.jsx)(sv, {
        id: sW,
        sectionClassName: u()(sz.uW, sz.Uv, sz.qr),
        heading: (0, c.jsx)(ee.D, {
            variant: "nitro-sm",
            className: u()(sT.R_, sR.U6),
            children: ei.intl.string(ei.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: sR.JE, children: (0, c.jsx)(sj, { glowing: t === sW }) }),
        grid: d
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(sb.S, { ...n, containerClassName: sT.Nr, glowing: s === n.id }),
                      null != o &&
                          (0, c.jsx)(sb.S, {
                              ...o,
                              containerClassName: sT.Nr,
                              glowing: s === o.id,
                              autoClickCta: s === o.id,
                          }),
                      (0, c.jsx)(sE, { containerClassName: sT.Nr }),
                      null != r && (0, c.jsx)(sb.S, { ...r, containerClassName: sT.Nr, glowing: s === r.id }),
                      null != l && (0, c.jsx)(sb.S, { ...l, containerClassName: sT.Nr, glowing: s === l.id }),
                      null != a && (0, c.jsx)(sb.S, { ...a, containerClassName: sT.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var sK = s(313133),
    sX = s(67423);
let sZ = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, tP.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(tS.animated.div, {
        className: u()(sK.iE, { [sK.q4]: !t }),
        style: l,
        children: (0, c.jsxs)("div", {
            className: sK.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sX, className: sK.oU }),
                (0, c.jsxs)("div", {
                    className: sK.iQ,
                    children: [
                        (0, c.jsx)(ee.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: ei.intl.format(ei.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ei.intl.format(ei.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, eb.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(ex.$, {
                    variant: "expressive",
                    icon: em.t,
                    size: "md",
                    text: ei.intl.string(ei.t.zrCzVB),
                    onClick: () =>
                        void (0, ed.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("489361"),
                                s.e("227853"),
                                s.e("470126"),
                                s.e("128804"),
                                s.e("71151"),
                                s.e("286615"),
                                s.e("311541"),
                                s.e("472847"),
                                s.e("986735"),
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
                                s.e("992789"),
                                s.e("952372"),
                                s.e("425412"),
                                s.e("910486"),
                                s.e("56366"),
                                s.e("265607"),
                                s.e("544571"),
                                s.e("206028"),
                                s.e("102328"),
                                s.e("852556"),
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
                                    initialStep: tr.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sJ = s(761508),
    sQ = s(449543),
    sq = s(387103);
function s$(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: sq.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s0(e) {
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
function s1(e) {
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
var s2 = s(345394);
function s3(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: s2.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s6 = s(163665);
function s5(e) {
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
function s7(e) {
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
function s8(e) {
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
function s9(e) {
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
var s4 = s(996682);
function ie(e) {
    let {
        color: t = tN.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, s4.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function it(e) {
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
var is = s(78701);
function ii(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: is.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var ia = s(462887),
    ir = s(736653),
    il = s(259065),
    ic = s(206835),
    io = s(591179),
    id = s(462463),
    iu = s(219882),
    im = s(19886),
    ix = s(425713),
    ig = s(696292),
    ip = s(192444),
    ih = s(617986),
    iN = s(892227),
    iA = s(81466),
    ij = s(1889),
    ib = s(749012);
let iC = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, K.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, iN.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: ib.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: ib.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ib.Pf,
                            children: [
                                (0, c.jsx)(iA.CalendarIcon, { size: "sm", color: tN.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(et.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ei.intl.string(ij.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ei.intl.format(ij.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: ib.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: ib.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ib.Pf,
                            children: [
                                (0, c.jsx)(th.C, { size: "sm", color: tN.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(et.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ei.intl.string(ij.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ei.intl.format(ij.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var iE = s(190107),
    iR = s(799544);
function iT(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, ip.lk)(iE.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, K.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: sm.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ei.intl.string(ij.default.hx5AFp),
                          description: ei.intl.format(ij.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(iR.lH, iR.yK),
                          footerContent: (0, c.jsx)(iC, {}),
                          ctaText: ei.intl.string(ij.default.BxjHiu),
                          onCtaClick: () => (0, P.pX)(ez.BVt.COLLECTIBLES_SHOP_WITH_TAB(tR.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: sm.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ei.intl.string(ei.t.Csf5Ol),
                          description: ei.intl.format(ei.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ei.intl.string(ei.t.jVcuVY),
                          onCtaClick: () => (0, ih.mA)({ fromContent: ig.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: iR.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iv = s(975807),
    iI = s(95035),
    i_ = s(989790),
    iS = s(88001),
    iP = s(148155),
    iy = s(817577);
function iD() {
    (0, iv.A)(iS.TE);
}
function iO(e) {
    let t = (0, i_.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ed.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, S.A)({
                      subscriptionTier: t$.pe.TIER_2,
                      initialPlanId: t$.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: sm.PREMIUM_GROUP_CARD_ID,
                      title: ei.intl.string(iP.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              ei.intl.formatToPlainString(iP.default.JlyGQj, {
                                  totalSeats: iS.aw,
                                  premiumGroupProductName: (0, iS.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: iR.LF,
                                  children: (0, c.jsx)(iI.A, {
                                      onClick: iD,
                                      children: ei.intl.string(iP.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ei.intl.string(ei.t.oW0eUd),
                      primaryAsset: iy,
                      ctaIcon: em.t,
                      ctaIconPosition: "start",
                      ctaText: ei.intl.string(ei.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iM = s(562819),
    ik = s(793943),
    iL = s(757036),
    iU = s(235955),
    iG = s(655752);
let iw = (0, w.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iB = s(764231),
    iH = s(627380),
    iF = s(30084),
    iV = s(814014),
    iz = s(714206);
let iW =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iY =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iK =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iX() {
    let e,
        t,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, io.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: d } = sV(),
        m = (0, sa.b)("premium_subscriber_home_rewards"),
        g = (0, id.A)({ analyticsLocations: s }),
        f = (0, o.useCallback)(() => {
            (0, eN.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, il.L)({ analyticsLocations: s }),
            );
        }, [s]),
        p = (0, o.useCallback)(() => {
            (0, eN.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, iM.L)({ analyticsLocations: s }),
            );
        }, [s]),
        h = (0, o.useCallback)(() => {
            (0, eN.openUserSettings)(eh.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        N = (function (e) {
            let { fractionalState: t } = (0, ep.A)(),
                s = t === t$.xc.FP_ONLY,
                i = (0, im.$F)(),
                n = (0, im.Xb)(),
                a = i?.status === im.Wo.UPCOMING || s,
                r = i?.status === im.Wo.WITHHELD,
                l = a || r,
                c = (0, ix.N)(i?.id),
                d = (function () {
                    let e = (0, im.$F)(),
                        t = (0, iG.P)(),
                        s = (0, im.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iw.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === im.Wo.WITHHELD) return null;
                    let n = ts()(),
                        a = ts()(s),
                        r = i || e.status === im.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        c = a.clone().add(r, "months"),
                        o = a.clone().add(l, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion) && !l,
                g = (0, iH.t)(),
                f = (0, iG.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != f ? ei.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iB.T)(t$.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === im.Wo.UPCOMING
                              ? ei.intl.formatToPlainString(ei.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === im.Wo.WITHHELD
                                ? ((0, iB.T)(i.id, i.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return ei.intl.formatToPlainString(ei.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return ei.intl.formatToPlainString(ei.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(g, a) ??
                                  (0, iB.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != c ? (r = l || m ? c.standard : c.ambientLarge) : s && (r = iz),
                    {
                        id: sm.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ei.intl.string(i.nameUnformattedNitro) : s ? ei.intl.string(ei.t.tx9Fvw) : "",
                        pillText: ei.intl.string(ei.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iV.pq, { [iV.rX]: l, [iV.kE]: m }),
                        caption: null != n ? ei.intl.formatToPlainString(ei.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: ei.intl.string(ei.t.jVcuVY),
                        onCtaClick: () => (0, iF.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, l, m, n, d, s, g, f, e]);
        })(s),
        { nitroOrbsRewardsCard: b, questOrbMultiplierCard: C } = iT("useWhatsNewPerkCards"),
        E =
            ((e = (0, iL.L)(t$.PremiumTypes.TIER_2)),
            (t = (0, iu.rX)()),
            (0, o.useMemo)(
                () =>
                    e && t
                        ? {
                              id: sm.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: ei.intl.string(iU.default["/cV3ka"]),
                              description: ei.intl.string(iU.default.H523FI),
                              primaryAsset: (0, c.jsx)(s6.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [e, t],
            )),
        R = iO(s);
    return (0, o.useMemo)(() => {
        let e = [
                m ? null : n,
                m ? null : d,
                m ? null : r,
                m ? null : l,
                m ? null : a,
                b,
                C,
                R,
                {
                    id: sm.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ei.intl.string(ei.t.OLtTrt),
                    description: ei.intl.string(ei.t["di/pXR"]),
                    onCtaClick: i ? g : f,
                    ctaText: ei.intl.string(ei.t.jVcuVY),
                    primaryAsset: iW,
                },
                {
                    id: sm.CLIENT_THEMES_CARD_ID,
                    title: ei.intl.string(ei.t.acc6h6),
                    description: ei.intl.formatToPlainString(ei.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iK,
                    ctaText: ei.intl.string(ei.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ik.nf)(ik.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: sm.PERMADECOS_CARD_ID,
                    title: ei.intl.string(ei.t.L14NZN),
                    description: ei.intl.string(ei.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(ii, { alt: "", ariaHidden: !0 }),
                    ctaText: ei.intl.string(ei.t.jVcuVY),
                    onCtaClick: i ? g : p,
                },
                {
                    id: sm.CUSTOM_APP_ICONS_CARD_ID,
                    title: ei.intl.string(ei.t["GU+wqh"]),
                    description: ei.intl.string(ei.t["1uPk1Z"]),
                    primaryAsset: iY,
                    ctaText: ei.intl.string(ei.t.y9TxXV),
                    onCtaClick: h,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, N), null != E && e.splice(2, 0, E), e.length > s && e.splice(s, e.length - s), e);
    }, [N, b, C, E, R, f, h, p, g, i, n, a, r, l, d, m]);
}
var iZ = s(355097);
let iJ = "/assets/1eb1b74667b4c0f0.svg",
    iQ = "/assets/983b60e4fcaf973b.svg";
var iq =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let i$ = [
    { id: "bestof", label: () => ei.intl.string(ei.t.q1u7nQ) },
    { id: "appearance", label: () => ei.intl.string(ei.t.CUnZkZ) },
    { id: "upgrades", label: () => ei.intl.string(ei.t.KC5q8v) },
    { id: "vip", label: () => ei.intl.string(ei.t.DjEAcv) },
];
var i0 = s(18290);
function i1(e) {
    e.stopPropagation();
}
function i2(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, ir.DP)(),
                t = (0, io.X)("useFavoritesPerkCards"),
                s = (0, im.Lh)(),
                i = (0, ix.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, ic.A)({ scrollPosition: iZ._F.TRY_IT_OUT, analyticsLocations: n }),
                r = (0, o.useCallback)(() => {
                    (0, eN.openUserSettings)(eh.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                l = (0, o.useCallback)(() => {
                    (0, eN.openUserSettings)(eh.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, eN.openUserSettings)(eh.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, P.pX)(ez.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, eN.openUserSettings)(eh.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, id.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, eN.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, il.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iX(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = iT("useFavoritesPerkCards"),
                b = iO(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: sm.SERVER_BOOSTS_CARD_ID,
                            title: ei.intl.formatToPlainString(ei.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ei.intl.formatToPlainString(ei.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, c.jsx)(s$, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: sm.PROFILES_CARD_ID,
                            title: ei.intl.string(ei.t.xDRab3),
                            description: ei.intl.string(ei.t.yn6fWA),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(s0, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sm.HD_VIDEO_CARD_ID,
                            title: ei.intl.string(ei.t["/mQ5gg"]),
                            description: ei.intl.string(ei.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(s1, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sm.CLIENT_THEMES_CARD_ID,
                            title: ei.intl.string(ei.t.acc6h6),
                            description: ei.intl.formatToPlainString(ei.t.WQazjs, { themeCount: 20 }),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: iK,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sm.MORE_EMOJIS_CARD_ID,
                            title: ei.intl.string(ei.t.D8vIDT),
                            description: ei.intl.string(ei.t.DRMecB),
                            primaryAsset: (0, c.jsx)(s3, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sm.LARGE_UPLOADS_CARD_ID,
                            title: ei.intl.string(ei.t.nL1WZV),
                            description: (0, iu.M6)({
                                legacyCopy: ei.intl.formatToPlainString(ei.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: ei.intl.formatToPlainString(ei.t.teOTfv, {
                                    maxFileSize: (0, eb.EJ)(t$.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(s6.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sm.CUSTOM_APP_ICONS_CARD_ID,
                            title: ei.intl.string(ei.t["GU+wqh"]),
                            description: ei.intl.string(ei.t["1uPk1Z"]),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iY,
                            categories: ["appearance"],
                        },
                        {
                            id: sm.ENTRANCE_SOUNDS_CARD_ID,
                            title: ei.intl.string(ei.t.WJfCPi),
                            description: ei.intl.string(ei.t.liQKJR),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: sm.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ei.intl.string(ei.t.OLtTrt),
                            description: ei.intl.string(ei.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            primaryAsset: iW,
                            categories: ["appearance"],
                        },
                        {
                            id: sm.CUSTOM_SOUNDS_CARD_ID,
                            title: ei.intl.string(ei.t["Cu/oFd"]),
                            description: ei.intl.string(ei.t.czj2aa),
                            primaryAsset: (0, c.jsx)(s5, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sm.SPECIAL_STICKERS_CARD_ID,
                            title: ei.intl.string(ei.t.MQoVeb),
                            description: ei.intl.string(ei.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: iR.Uc,
                                children: (0, c.jsx)(s7, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sm.SUPER_REACTIONS_CARD_ID,
                            title: ei.intl.string(ei.t.qERvAA),
                            description: ei.intl.string(ei.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(s8, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sm.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ei.intl.string(ei.t.ssVDYQ),
                            description: ei.intl.string(ei.t.aUSRMa),
                            primaryAsset: (0, ia.M)(e) ? iJ : iQ,
                            categories: ["upgrades"],
                        },
                        {
                            id: sm.EARLY_ACCESS_CARD_ID,
                            title: ei.intl.string(ei.t["g/KRY6"]),
                            description: ei.intl.string(ei.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(s9, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sm.BADGE_CARD_ID,
                            title: ei.intl.string(ei.t.Bn3CtB),
                            description: ei.intl.string(ei.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(ie, { color: tN.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sm.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ei.intl.string(ei.t["MTD+7w"]),
                            description: ei.intl.string(ei.t.Bhs0s6),
                            ctaText: ei.intl.string(ei.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(it, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: sm.PERMADECOS_CARD_ID,
                            title: ei.intl.string(ei.t.L14NZN),
                            description: ei.intl.string(ei.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(ii, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, b, a, r, l, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iq.BEST_OF_NITRO),
        r = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: i0.uW,
        children: [
            (0, c.jsx)(ee.D, { variant: "nitro-sm", children: ei.intl.string(ei.t["Uh3+CA"]) }),
            (0, c.jsx)(sJ.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i0.Lq,
                "aria-label": ei.intl.string(ei.t["Uh3+CA"]),
                children: i$.map((e) =>
                    (0, c.jsx)(sJ.V.Item, { id: e.id, className: i0.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sQ.A,
                {
                    gap: 20,
                    className: i0.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sb.S,
                                { ...e, glowing: t === e.id, containerClassName: i0.Ui, onFocus: i1 },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var i3 = s(72979);
let i6 = function (e) {
    let { className: t } = e,
        s = (0, ir.DP)();
    return (0, c.jsx)("img", {
        className: u()(i3.D, t),
        src: (0, ia.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i5 = s(684251);
let i7 = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, c.jsxs)("div", {
              className: u()(i5.kL, i5.Gd, i5.Eg),
              children: [(0, c.jsx)(i6, {}), (0, c.jsx)(sn, {}), n],
          })
        : (0, c.jsx)($.h, { color: "nitro-pink", className: u()(i5.kL, i5.Gd), offsetBottom: i, children: n });
};
function i8(e) {
    let { glowingPerkId: t = null } = e,
        s = iX();
    return (0, c.jsx)(sv, {
        sectionClassName: sT.uW,
        heading: (0, c.jsx)(ee.D, { variant: "nitro-sm", className: sT.R_, children: ei.intl.string(ei.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    sb.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === sm.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(sT.Nr, { [sT.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function i9(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
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
var i4 = s(92737);
let ne = "/assets/cd2be35d285d4675.svg",
    nt = (e) => {
        let { userId: t } = e,
            s = (0, U.ds)(),
            { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
            n = V("nitro_member_hub_header"),
            a = (0, m.zy)();
        (o.useEffect(() => {
            f.h.wait(async () => {
                let e = [(0, Y.Ay)()];
                (null != t && e.push((0, Z.A)(t)), await Promise.all(e));
            });
        }, [t]),
            o.useEffect(() => {
                v(!0);
            }, []),
            (0, Q.j)(),
            (0, _.P)(I));
        let r = o.useRef(null),
            l = o.useRef(null),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: p, programReward: h } = (0, K.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: N,
                glowingSectionId: b,
                glowingPerkId: C,
                scrollBlock: E,
                scrollInline: R,
            } = o.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(i4.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        i9(N ?? "", null != N, E, R);
        let [T, v] = o.useState(!1),
            S = (0, J.p)(),
            P = o.useRef(null),
            [y, D] = o.useState(!1),
            O = null != S && null != d && d.status === ez.Dmq.CANCELED,
            L = (0, q.iU)(t$.gD.PREMIUM_MONTH_TIER_2, S, d),
            G = !y && O,
            w = (0, x.bG)([X.A], () => (null != t ? X.A.getUserProfile(t) : null)),
            B = null != d && d.status === ez.Dmq.CANCELED,
            F = i && !s && !B,
            $ = n && (s || B),
            { analyticsLocations: ee } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [et, es] = o.useState(!1);
        return null != w && (p || null != h)
            ? (0, c.jsxs)(W.Gt, {
                  className: u()(i5.xW, i5.Gd),
                  ref: r,
                  children: [
                      (0, c.jsx)(i7, {
                          shouldRenderNitroHomeHeaderExperiment: F,
                          shouldRenderNitroHomeFollowup: $,
                          gradientOffsetBottom: s && !n ? 0.55 : 0.8,
                          children: (0, c.jsxs)(j.f5, {
                              value: ee,
                              children: [
                                  (0, c.jsx)(z.L, {
                                      innerRef: P,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(t8, {
                                          buttonVisibilityRef: P,
                                          className: i5.v1,
                                          userDiscountOffer: S,
                                          discountedPrice: L,
                                      }),
                                  }),
                                  (0, c.jsx)(i8, { glowingPerkId: C }),
                                  (0, c.jsx)(sY, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(i2, { glowingPerkId: C }),
                                  (0, c.jsx)(ea, {
                                      className: i5.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: ez.liQ.NITRO_HOME, section: ez.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: i5.hz }),
                                  (0, c.jsx)(z.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !et &&
                                              (k.default.track(ez.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ee,
                                              }),
                                              es(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: l, className: i5._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: ne,
                                      className: i5.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ei.intl.string(ei.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      O &&
                          null != L &&
                          (0, c.jsx)(sZ, {
                              isVisible: G && T,
                              premiumSubscription: d,
                              churnDiscountOffer: S,
                              discountedPrice: L,
                          }),
                  ],
              })
            : F || $
              ? (0, c.jsxs)("div", {
                    className: u()(i5.kL, i5.Lq, i5.TN, i5.Eg),
                    children: [
                        (0, c.jsx)(sn, {}),
                        (0, c.jsx)("div", { className: i5.S, children: (0, c.jsx)(g.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(i5.kL, i5.Lq), children: (0, c.jsx)(g.y, {}) });
    };
var ns = s(286320),
    ni = s(727949),
    nn = s(440005),
    na = s(26508);
let nr = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var nl = s(860839);
let nc =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
function no(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: nc,
        srcSet: `${nc} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var nd = s(37537),
    nu = s(783420),
    nm = s(204413),
    nx = s(245383),
    ng = s(824069),
    nf = s(785007),
    np = s(947910);
function nh(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: np.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: np.fQ,
                                children: (0, c.jsx)(tg.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(eu.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: np.qU,
                            children: [
                                (0, c.jsxs)(eu.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: np.NI,
                                    children: [
                                        (0, c.jsx)(et.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(et.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(eu.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: np.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, c.jsx)(et.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, c.jsx)(et.E, {
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: np.yD,
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
                radioBarClassName: u()(np.tG, { [np.uA]: s, [np.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nf.$d, {
        ...i,
        options: n,
        value: t,
        size: nf.r9.NOT_SET,
        className: np.ul,
        withTransparentBackground: !0,
    });
}
var nN = s(773669),
    nA = s(97352),
    nj = s(252424),
    nb = s(526292),
    nC = s(186223),
    nE = s(369827),
    nR = s(803496);
function nT(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nE.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nR.A)({
            activeSubscription: t,
            skuIDs: [(0, eb.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nv(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nI(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === t$.Ff.YEAR
          ? ei.intl.format(ei.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : ei.intl.format(ei.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var n_ = s(614488);
function nS(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(nu.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(ex.$, {
                size: "md",
                fullWidth: !0,
                icon: em.t,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nP(e) {
    let { skuId: t, className: s } = e,
        i = t === t$.pe.TIER_2,
        n = (0, ia.q)((0, ir.Ay)()),
        a = (0, nd.c)("PlanSelectCard"),
        r = (0, eT.V)(),
        l = r?.subscriptionTrial,
        d = l?.skuId === t,
        m = i && d && null != l,
        g = (0, eR.p)(),
        {
            planRadioOptions: f,
            selectedPlanId: p,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = t$.En[t],
                a = t$.zE[t],
                r = t === t$.pe.TIER_2,
                l = nT(t),
                c = (0, eT.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, eb.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === t$.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [t$.gD.PREMIUM_YEAR_TIER_0, t$.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                f = (0, eR.O)(),
                p = (0, nb.k5)(),
                h = (0, x.bG)([nN.default], () => nN.default.locale),
                N = (0, q.U9)(f, t),
                A = (0, q.N1)(n),
                j = (0, q.N1)(a),
                [b, C] = (0, x.yK)([nA.A], () => [nA.A.get(n), nA.A.get(a)], [n, a]),
                E = null != b ? (0, eb.sS)(b, l) : null,
                R = null != C ? (0, eb.sS)(C, l) : null,
                T =
                    N && f?.discount.amount != null && !p
                        ? ei.intl.formatToPlainString(ei.t.IAybsG, {
                              discount: (0, nj.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                v = f?.discount?.planIds,
                I = nv(a, N, v, j, R),
                _ = nv(n, N, v, A, E),
                S = f?.discount.userUsageLimitInterval,
                P = f?.discount.userUsageLimit ?? t$.OJ,
                y = !r || I || _ || null == C ? null : (0, nC.Cj)(C, !1, l),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== t$.pe.TIER_2 ? null : s && !i ? t$.En[t] : t$.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == s || (s === n && m) ? O : s,
                L = [
                    {
                        value: a,
                        primaryText: ei.intl.string(ei.t["/Q4HRN"]),
                        primarySubText:
                            (I
                                ? nI({
                                      expectedUsageInterval: t$.Ff.YEAR,
                                      usageInterval: S,
                                      discountDuration: P,
                                      regularPrice: R,
                                      discountedPrice: j,
                                  })
                                : null) ?? y,
                        secondaryText: I ? j : R,
                        secondarySubText: I ? R : null,
                        badgeText: I ? T : null,
                        useGradientSelectedBorder: r && (d || I || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: ei.intl.string(ei.t.DKzs96),
                        primarySubText: _
                            ? nI({
                                  expectedUsageInterval: t$.Ff.MONTH,
                                  usageInterval: S,
                                  discountDuration: P,
                                  regularPrice: E,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : E,
                        secondarySubText: _ ? E : null,
                        badgeText: _ ? T : null,
                        useGradientSelectedBorder: r && (d || _),
                        isDisabled: g || m,
                    },
                ],
                U = k === a ? I : k === n && _;
            return { planRadioOptions: L, selectedPlanId: k, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = i && null == g ? "expressive" : "secondary",
        { buttonText: j } = (0, nx.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nm.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, c.jsxs)(eu.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: n_.Ux,
            children: [
                (0, c.jsx)(eu.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: n_.MY,
                    children: (0, c.jsx)(ee.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? n_.ck : n_.JJ,
                        children: i ? ei.intl.string(ei.t.lG6a5x) : ei.intl.string(ei.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(eu.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: n_.qT,
                    children: i
                        ? (0, c.jsx)(nl.ZP, {
                              featureSet: nl.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(nl.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(ng.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: n_.qS,
                          role: "separator",
                          children: (0, c.jsx)(et.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: n_.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case t$.WT.DAY:
                                          if (t % 7 == 0) return ei.intl.format(ei.t["1MYPH0"], { weeks: t / 7 });
                                          return ei.intl.format(ei.t.pYfIoO, { days: t });
                                      case t$.WT.MONTH:
                                          return ei.intl.format(ei.t["96hTLe"], { months: t });
                                      case t$.WT.YEAR:
                                          return ei.intl.format(ei.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(l.interval, l.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: n_.yF }),
                (0, c.jsxs)("div", {
                    className: n_.qr,
                    children: [
                        (0, c.jsx)(nh, { planRadioOptions: f, value: p ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nS, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = u()(n_.Nr, s, { [n_.Fw]: i });
    return i
        ? (0, c.jsxs)($.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, c.jsx)("div", {
                      className: n_.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(no, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, c.jsx)("div", { className: E, children: C });
}
function ny(e) {
    let { className: t } = e,
        s = (0, ia.q)((0, ir.Ay)()),
        i = (0, nd.c)("PlanSelectPremiumGroupCard"),
        n = (0, eR.p)(),
        a = null != n,
        r = nT(t$.pe.TIER_2),
        l = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eG.A)({ userId: l?.id, size: eO._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([nA.A], () => nA.A.get(t$.gD.PREMIUM_GROUP_MONTH)),
        f = (0, q.N1)(t$.gD.PREMIUM_GROUP_MONTH),
        p = a
            ? ei.intl.format(iP.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, iS.DP)(),
              })
            : ei.intl.string(ei.t["2pG5Ga"]),
        h = (0, c.jsx)(nu.A, {
            subscriptionTier: t$.pe.TIER_2,
            initialPlanId: t$.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(ex.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: em.t,
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
            N = (0, eb.sS)(m, r, !1, !1, !1);
        } catch {
            N = null;
        }
    return (0, c.jsx)("div", {
        className: u()(n_.Nr, t),
        children: (0, c.jsxs)(eu.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: n_.Ux,
            children: [
                (0, c.jsxs)(eu.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: n_.MY,
                    children: [
                        (0, c.jsx)(ee.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? n_.ck : n_.JJ,
                            children: ei.intl.string(iP.default.eSKiXk),
                        }),
                        null != l &&
                            (0, c.jsxs)(eu.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: n_.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: n_.uA,
                                        children: (0, c.jsx)(eM.eu, {
                                            src: o,
                                            size: eO._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, c.jsx)(eu.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: n_.VL,
                                        children: (0, c.jsxs)(et.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", iS.LM],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(eu.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: n_.qT,
                    children: (0, c.jsx)(nl.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: n_.yF }),
                (0, c.jsxs)("div", {
                    className: n_.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: n_.ec,
                            children: [
                                (0, c.jsx)(et.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: ei.intl.string(iP.default.SvSwga),
                                }),
                                null == N
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(et.E, {
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
function nD(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, nl.pw)(t),
        a = (0, i_.PA)(),
        r = (0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        l = { [n_.iR]: !r };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(eu.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(n_.oB, s),
            children: [
                (0, c.jsx)(ee.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: n_.op,
                    children: ei.intl.string(ei.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(n_.kR, { [n_.BQ]: a }),
                    children: [
                        (0, c.jsx)(nP, { skuId: t$.pe.TIER_0, className: u()(n_.rz, l) }),
                        (0, c.jsx)(nP, { skuId: t$.pe.TIER_2, className: u()(n_.Rv, l) }),
                        a && (0, c.jsx)(ny, { className: u()(n_.zz, l) }),
                    ],
                }),
            ],
        }),
    });
}
var nO = s(226830),
    nM = s(366010),
    nk = s(303136);
let nL = function (e) {
    let t,
        { className: s } = e,
        i = (0, t_.TM)(),
        n = (0, nM.q)((0, ir.Ay)());
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
                nk.A,
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
var nU =
        (((l = {}).HOME = "home"),
        (l.WHATS_NEW = "whatsNew"),
        (l.BEST_OF_NITRO = "bestOfNitro"),
        (l.PLANS = "plans"),
        (l.COMPARE = "compare"),
        l),
    nG = s(352756);
let nw = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, tP.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: ez.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(tS.animated.div, {
        className: nG.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nG.U,
            children: [
                (0, c.jsx)(te.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, c.jsx)(es.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nB = s(573710);
let nH = function () {
    let e = (0, tI.bG)([eg.Ay], () => eg.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nB.BI,
                children: (0, c.jsx)(tM, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tD.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tY, alt: "", className: nB.Q }),
                }),
            }),
            (0, c.jsx)(tL, {
                isMotionReduced: e,
                boltContainerClassName: nB.nJ,
                carContainerClassName: nB.IN,
                hammerContainerClassName: nB.Gj,
                keyContainerClassName: nB.FV,
                starContainerClassName: nB.E1,
                boltAssetClassName: nB.j7,
                carAssetClassName: nB.or,
                hammerAssetClassName: nB.Wv,
                keyAssetClassName: nB.rs,
                starAssetClassName: nB.OY,
            }),
        ],
    });
};
var nF = s(989756);
let nV = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nF.kL,
            children: (0, c.jsxs)("div", {
                className: nF.hQ,
                children: [
                    (0, c.jsx)(nH, {}),
                    (0, c.jsx)(ee.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nF.RH,
                        children: ei.intl.string(ei.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nV.displayName = "PremiumMarketingFooter";
var nz = s(939249);
let nW = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nU.HOME]: ei.intl.string(ei.t.uGRXjS),
            [nU.WHATS_NEW]: ei.intl.string(ei.t["mfcR/v"]),
            [nU.BEST_OF_NITRO]: ei.intl.string(ei.t.xQKkE8),
            [nU.PLANS]: ei.intl.string(ei.t.wyNMnm),
            [nU.COMPARE]: ei.intl.string(ei.t.pwD7If),
        },
        n = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(t4.A, {
        className: ss.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: ss.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: ss.wG,
                    children: [
                        (0, c.jsx)(em.t, { className: ss.nE, colorClass: ss.oG }),
                        (0, c.jsx)("div", {
                            className: ss.zc,
                            role: "tablist",
                            "aria-label": ei.intl.string(ei.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nz.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: ss.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(et.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: ss.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: ss.MQ,
                    children: [
                        null != n && (0, c.jsx)(st.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(es.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nY = s(704333),
    nK = s(414499),
    nX = s(597770),
    nZ = s(500060),
    nJ = s(866665),
    nQ = s(406860),
    nq = s(870975),
    n$ = s(698834);
function n0() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nQ.A)({ boxType: sg.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nY.B, text: ei.intl.string(sh.default.MUypiB) },
            { icon: nK.h, text: ei.intl.string(sh.default.ec5Rdd) },
            { icon: nX.GiftIcon, text: ei.intl.string(sh.default["9t2CzW"]), tooltip: sh.default.AyECej },
            { icon: nZ.o, text: ei.intl.string(sh.default.R7YJAY) },
        ];
    return (0, c.jsx)(z.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: n$.iE,
            children: (0, c.jsxs)("div", {
                className: n$.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: n$.j,
                        children: [
                            (0, c.jsx)("div", { className: n$._g }),
                            (0, c.jsx)("div", { className: n$.$h }),
                            (0, c.jsx)("div", { className: n$.Rv }),
                            (0, c.jsx)("div", { className: n$.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: n$.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: n$.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(ee.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: n$.R_,
                                                children: ei.intl.string(sh.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: n$.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(et.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: n$.Jn,
                                                                            children: (0, c.jsx)(nJ.m, {
                                                                                text: ei.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    sl.CircleInformationIcon,
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
                                                        className: n$.xF,
                                                        children: (0, c.jsx)(te.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: t$.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n$.WE,
                                        children: (0, c.jsx)(et.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ei.intl.format(sh.default.KDKdWi, { termsLink: (0, nq.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: n$.r1,
                                children: (0, c.jsx)("img", {
                                    className: n$.wm,
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
var n1 = s(750338),
    n2 = s(173038),
    n3 = s(505051);
function n6(e) {
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
        className: u()(n3.boxBackdrop, t),
        children: [
            (0, c.jsx)(ee.D, {
                className: n3.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, c.jsx)("div", { className: n3.highlightBento, children: l }),
            (0, c.jsx)("div", {
                className: n3.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n2.A0.SMALL;
                            break;
                        case 2:
                            s = n2.A0.MEDIUM;
                            break;
                        default:
                            s = n2.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                n1.A,
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
let n5 = o.memo(function (e) {
        let t = (0, sa.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, n2.Ay)(t);
        return (0, c.jsx)(n6, {
            boxLayout: s,
            title: ei.intl.string(ei.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(n0, {}) : null,
            ...e,
        });
    }),
    n7 = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, n2.Ay)();
        return (0, c.jsx)(n6, { boxLayout: t, title: ei.intl.string(ei.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    n8 = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var n9 = s(236834),
    n4 = s(540504);
function ae(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eG.A)({ userId: t?.id, size: eO._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: n4.$6,
        children: (0, c.jsxs)("div", {
            className: n4.sc,
            children: [
                (0, c.jsx)("div", {
                    className: n4.kR,
                    children: (0, c.jsx)(eM.eu, { src: s, "aria-label": t.username, size: eO._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(ee.D, {
                    variant: "heading-sm/normal",
                    className: n4.FS,
                    color: "text-strong",
                    children: ei.intl.format(ei.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var at = s(579245),
    as = s(369805);
let ai = function () {
    let e = (0, as.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eP, { text: e });
};
function an() {
    let e = (0, x.bG)([nA.A], () => nA.A.getForSkuAndInterval((0, eb.mH)(t$.pe.TIER_0), t$.WT.MONTH));
    return null != e ? (0, eb.sS)(e) : "\u2026";
}
var aa = s(508556);
let ar = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tI.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        i = (0, t_.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: aa.YU,
        children: [
            (0, c.jsx)(tG, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: aa.wG,
                assetClassName: aa.lu,
            }),
            (0, c.jsx)(tL, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: aa.nJ,
                carContainerClassName: aa.IN,
                hammerContainerClassName: aa.Gj,
                keyContainerClassName: aa.FV,
                starContainerClassName: aa.E1,
                boltAssetClassName: aa.j7,
                carAssetClassName: aa.or,
                hammerAssetClassName: aa.Wv,
                keyAssetClassName: aa.rs,
                starAssetClassName: aa.OY,
            }),
        ],
    });
};
var al = s(14057);
let ac = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = an(),
            l = n8.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, n9.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: g } = e_(
                !(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
            ),
            f = (0, ns.b)(),
            p = !d && f.length > 0,
            h = (0, ev.c)(er.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            b = (0, nb.ar)() && !N,
            C = (0, eR.O)(),
            E = (null != C && t$.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(al.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: al.hQ,
                        children: [
                            (0, c.jsx)(ar, { containerVisibilityPercentage: g }),
                            b && (0, c.jsx)(ai, {}),
                            (0, c.jsx)("div", {
                                className: al.s8,
                                children: (0, c.jsx)(tu.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(ee.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: al.wx,
                                        children: ei.intl.string(ei.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: al.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: al.eZ,
                                            children: (0, c.jsx)(ae, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: al.Qn,
                                            children: (0, c.jsx)(at.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: b ? al.es : al.UJ,
                                        children: [
                                            (0, c.jsx)(te.A, {
                                                size: "md",
                                                fullWidth: b,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == i ? t$.pe.NONE : i,
                                                buttonTextOverride: E ? ei.intl.string(ei.t["2pG5Ga"]) : void 0,
                                            }),
                                            !b && (0, c.jsx)(es.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: al.iQ,
                                        children: (0, c.jsx)(et.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: l
                                                ? ei.intl.string(ei.t.jHqrJW)
                                                : ei.intl.format(ei.t.kt9wxs, { cheapestMonthlyPrice: r }),
                                        }),
                                    }),
                                    null != h &&
                                        "marketingPageBanner" === h.properties.properties.oneofKind &&
                                        (0, c.jsx)(ey.x, {
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
var ao = s(820081),
    ad = s(140735),
    au = s(401432),
    am = s(580630),
    ax = s(795269),
    ag = s(84483),
    af = s(701974),
    ap = s(55647),
    ah = s(202600);
function aN(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ao.B, { size: "sm", color: tN.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ad.A, { children: ei.intl.string(ei.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(au.a, { size: "xs", color: tN.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ad.A, { children: ei.intl.string(ei.t.l4qZrp) }),
              ],
          });
}
function aA(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(ap.nM, ap.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: ap.nx,
                children: (0, c.jsx)(et.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: ap.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(et.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(aN, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: ap.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(et.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(aN, { includes: !!i.includes }),
            }),
        ],
    });
}
function aj(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(ap.nM, ap.Gf),
                children: (0, c.jsxs)("td", {
                    className: ap.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(ee.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(et.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(aA, { ...e }, e.id)),
        ],
    });
}
function ab(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === t$.PremiumTypes.TIER_0 ? ei.intl.string(ei.t.tUbSDK) : ei.intl.string(ei.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: ap.nn,
        children: [
            (0, c.jsxs)("div", {
                className: ap.KS,
                children: [
                    (0, c.jsx)(em.t, { colorClass: ap.oG }),
                    (0, c.jsx)(ee.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(ee.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function aC(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, am.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: ap.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ap.Cr,
                    children: (0, c.jsx)(ee.D, { variant: "heading-xl/bold", children: ei.intl.string(ei.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ap.Hn,
                    children: (0, c.jsx)(ab, {
                        premiumType: t$.PremiumTypes.TIER_0,
                        priceString: (0, am.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ap.Hn,
                    children: (0, c.jsx)(ab, { premiumType: t$.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let aE = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = t$.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, eT.V)(),
            l = r?.subscriptionTrial?.skuId,
            d = (0, eR.O)(),
            m = (0, q.YJ)(d),
            x = null != d && (0, q.U9)(d, t$.pe.TIER_2) && m === t$.gD.PREMIUM_MONTH_TIER_2,
            g = (0, q.N1)(m),
            f = null != g ? `${g}/${(0, eb.FJ)(t$.WT.MONTH)}` : "",
            p = (0, eb.JM)(t$.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eb.JM)(t$.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, sa.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: ei.intl.string(ei.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: ei.intl.string(ei.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: ei.intl.string(ei.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: ei.intl.string(af.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, ip.lk)(iE.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = sD.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sO.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, ag.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ei.intl.string(ei.t.NG1e6l),
                            subtitle: ei.intl.format(sh.default.uJcbMv, {
                                termsLink: ej.A.getArticleURL(ez.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ei.intl.string(sh.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        r &&
                            s.rows.push({
                                id: 25,
                                label: ei.intl.string(sh.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            s.rows.push({
                                id: 26,
                                label: ei.intl.string(sw.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: ei.intl.formatToPlainString(ei.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: ei.intl.string(ij.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: ei.intl.string(ei.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: ei.intl.string(ei.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: ei.intl.string(ei.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: ei.intl.string(ei.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: ei.intl.string(ei.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: ei.intl.string(ei.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: ei.intl.string(ei.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: ei.intl.string(ei.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: ei.intl.string(ei.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, eb.EJ)(t$.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eb.EJ)(t$.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: ei.intl.string(ei.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: ei.intl.string(ei.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: ei.intl.string(ei.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: ei.intl.string(ei.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: ei.intl.formatToPlainString(ei.t.nyhDpw, {
                                        numBoosts: t$.M4,
                                        percentageOff: (0, am.l9)(nN.default.locale, t$.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: ei.intl.string(ei.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: ei.intl.string(ei.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: ei.intl.string(ei.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: ei.intl.formatToPlainString(ei.t["8crdzJ"], { maxChars: ez.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: ei.intl.string(ei.t["il8+nC"]),
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
            let e = null != r ? ei.intl.string(ei.t.IBYG5U) : ei.intl.string(ei.t.TR2B4T);
            t = (0, c.jsx)(ax.R, { className: u()(ap.Io, ap.SP), text: e });
        }
        let b = l === t$.pe.TIER_0 || n === t$.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(ap.zr, s),
                children: [
                    (0, c.jsx)(ee.D, {
                        className: ap.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: ei.intl.string(ei.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: ap.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(ap.fO, { [ap.Vd]: b, [ap.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: ap.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: ap.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: ah, alt: "", className: ap.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: ap.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: ap.tp,
                                children: [
                                    (0, c.jsx)(aC, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(aj, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    aR = function (e) {
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
var aT = s(818348),
    av = s(773188);
function aI(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nD, { innerRef: t }) : (0, c.jsx)(nO.jP, { innerRef: t });
}
let a_ = () => {
    let e = (0, m.zy)();
    (0, _.P)(I);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        r = o.useRef(null),
        l = (0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [f, p] = o.useState(!1),
        [h, N] = o.useState(!1),
        [b, C] = o.useState(!1),
        E = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        R = null != E ? (0, eb.EL)(E) : null,
        T = null != R ? eb.Ay.getSkuIdForPlan(R.planId) : null,
        v = null !== T && T !== t$.pe.TIER_2 ? t$.pe.TIER_2 : null,
        S = (0, eC.cg)(),
        { analyticsLocations: P } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        C(!0);
    }, []);
    let y = (0, sy.A0)({ location: "PremiumMarketingHome" }),
        D = (0, na.DK)(nn.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: O } = (0, ip.lk)(iE.rE.NITRO_HOME_MARKETING),
        L = D && O ? n2.NI.COMBINED_ORBS : O ? n2.NI.ORB_MULTIPLIER : D ? n2.NI.ORB_REWARDS : null,
        U = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? L
                : t === n2.NI.THREE_P_PROMOTIONS
                  ? y
                      ? n2.NI.CALL_OF_DUTY
                      : n2.NI.THREE_P_PROMOTIONS
                  : null;
        }, [y, e.search, L]);
    i9(U ?? "", null != U);
    let { navBarSections: G, activeSectionId: w } = aR([nU.HOME, nU.WHATS_NEW, nU.BEST_OF_NITRO, nU.PLANS, nU.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: Y } = G,
        K = (function (e) {
            let { location: t } = e;
            return nr.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, c.jsxs)("div", {
            ref: s,
            className: u()(av.kL, av.Gd, av.iI, { [av.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nL, { className: av.yH }),
                (0, c.jsx)(nW, { navBarSections: G, activeSectionId: w }),
                (0, c.jsxs)("div", {
                    className: av.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: av.qY,
                            ref: B.ref,
                            children: (0, c.jsx)(z.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(ac, {
                                    ref: n,
                                    subscriptionTier: v,
                                    isEligibleForBogoPromotion: S,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: av.So,
                            ref: H.ref,
                            children: (0, c.jsx)(n5, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: av.KQ,
                            ref: F.ref,
                            children: (0, c.jsx)(n7, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: av.s5,
                            ref: V.ref,
                            children: (0, c.jsx)(
                                z.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => p(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(aI, { innerRef: i, isPlanSelectUiRedesignEnabled: K }),
                                },
                                K ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: av.aC, ref: Y.ref, children: (0, c.jsx)(aE, {}) }),
                    ],
                }),
                (0, c.jsx)(z.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (k.default.track(ez.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            N(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: av._Z }),
                }),
                (0, c.jsx)(nV, { ref: r }),
                (0, c.jsx)(nw, { isVisible: !d && !f && b, subscriptionTier: v, isEligibleForBogoPromotion: S }),
                (0, c.jsx)(nL, { className: av.MF }),
            ],
        });
    return (0, c.jsx)(sc.N, {
        theme: aT.NJ.DARK,
        children: (e) => (0, c.jsx)(W.Gt, { className: u()(av.XG, e), ref: t, children: X }),
    });
};
var aS = s(862482),
    aP = s(412260),
    ay = s(662367),
    aD = s(374403),
    aO = s(396375),
    aM = s(815846),
    ak = s(370049);
let aL = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nb.ar)();
    if (null == i) return null;
    let l = null != i ? eb.Ay.getPremiumPlanItem(i) : null;
    if (
        (eb.Ay.isBoostOnlySubscription(i)
            ? (t = ei.intl.string(ei.t.Uj0md3))
            : null != l && (t = eb.Ay.getTierDisplayNameByPlanId(l.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, eN.openUserSettings)(eh.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != l ? eb.Ay.getSkuIdForPlan(l.planId) : null) === t$.pe.TIER_1;
    return (
        (s = null != a ? a : r ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(so.Z, {
            className: u()(ak.kL, n, { [ak.He]: r }),
            type: so.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(s_.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(ak.Kk, { [ak.Pt]: r }),
                }),
                (0, c.jsx)(et.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? ei.intl.format(ei.t["tYuv+T"], {
                              helpdeskArticle: ej.A.getArticleURL(ez.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : ei.intl.format(ei.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aU = s(978836);
let aG = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aU.zr, { [aU.N]: t }),
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
                        (0, c.jsx)("stop", { className: aU.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aU.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aU.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aU.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aU.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aw = s(900797),
    aB = s(847374),
    aH = s(812993),
    aF = s(614268);
function aV(e) {
    let { className: t } = e;
    return (0, c.jsx)(aH.Lp, { className: u()(aF.T, t), text: ei.intl.string(ei.t.EYxi0o) });
}
var az = s(904788),
    aW = s(507553);
let aY = "/assets/5b4fec8511c3676a.svg",
    aK = "/assets/0838bda6ecd20d91.svg";
function aX(e, t, s) {
    return (0, ia.M)(e) ? t : s;
}
var aZ = s(872461);
function aJ(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nz.D, {
        onClick: s,
        className: aZ.customButton,
        children: [
            t ? ei.intl.string(ei.t.maZaN3) : ei.intl.string(ei.t["37C26f"]),
            t
                ? (0, c.jsx)(aw.t, { size: "md", color: "currentColor", className: aZ.arrow })
                : (0, c.jsx)(aB.a, { size: "md", color: "currentColor", className: aZ.arrow }),
        ],
    });
}
function aQ(e) {
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
            className: u()(aZ.perkCard, i),
            children: [
                l
                    ? (0, c.jsx)(az.A, {
                          className: aZ.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aV, { className: aZ.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aZ.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(ee.D, {
                            variant: "heading-lg/extrabold",
                            className: aZ.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/normal",
                            className: aZ.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aq = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, ir.Ay)(),
                n = (0, io.X)("usePerkCards"),
                a = (0, tI.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eb.Ay.canUsePremiumProfileCustomization(e);
                }),
                r = (0, eb.EJ)(t$.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: ei.intl.string(ei.t.SS87rQ),
                    description: ei.intl.string(ei.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: ei.intl.string(ei.t["5cYMu0"]),
                    description: ei.intl.string(ei.t.vxk9va),
                    imageSource: aX(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: ei.intl.string(ei.t["/xvEMy"]),
                    description: ei.intl.string(ei.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: ei.intl.string(ei.t.OuItFi),
                    description: ei.intl.string(ei.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: ei.intl.string(ei.t["R2IV/Q"]),
                    description: ei.intl.string(ei.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: ei.intl.string(ei.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? ei.intl.formatToPlainString(ei.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : ei.intl.formatToPlainString(ei.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (aW.A.setState({ scrollPosition: iZ._F.TRY_IT_OUT }),
                                    t(eh.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? ei.intl.format(ei.t.aj1pfZ, { onCheckItOutClick: t })
                            : ei.intl.format(ei.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: ei.intl.string(ei.t.BUScid),
                    description: ei.intl.string(ei.t.vN6XpQ),
                    imageSource: aX(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ei.intl.string(ei.t.Bv8Pfk),
                    description: ei.intl.string(ei.t.JMfaTU),
                    imageSource: aX(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ei.intl.string(ei.t.Bv8Pfk),
                    description: ei.intl.string(ei.t.JMfaTU),
                    imageSource: aX(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ei.intl.string(ei.t["lGcW+c"]),
                    description: ei.intl.string(ei.t["/fDyO+"]),
                    imageSource: aX(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ei.intl.string(ei.t["1c+xwT"]),
                    description: ei.intl.string(ei.t.hJG8ZN),
                    imageSource: aX(i, aK, aY),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ei.intl.string(ei.t.tzdIwI),
                    description: ei.intl.string(ei.t.hJG8ZN),
                    imageSource: aX(i, aK, aY),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ei.intl.string(ei.t.tzdIwI),
                    description: ei.intl.string(ei.t.hJG8ZN),
                    imageSource: aX(i, aK, aY),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: ei.intl.string(ei.t.RSXQYO),
                    description: ei.intl.string(ei.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: ei.intl.string(ei.t["uZt5q/"]),
                    description: ei.intl.string(ei.t.ZK3ZoX),
                    imageSource: aX(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: ei.intl.formatToPlainString(ei.t.jqhAdL, { premiumMaxSize: r }),
                    description: ei.intl.formatToPlainString(ei.t["HI+cfm"], { premiumMaxSize: r }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: ei.intl.string(ei.t.NaGpTf),
                    description: ei.intl.string(ei.t["A8O/Qw"]),
                    imageSource: aX(i, iJ, iQ),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aZ }),
        l = (0, tI.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
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
        className: u()(aZ.perksContainer, t, {
            [aZ.partiallyHidden]: i && !n,
            [aZ.subscriberNitroHome]: i,
            [aZ.reducedMotion]: l,
        }),
        children: [
            (0, c.jsx)(ee.D, {
                variant: "heading-xxl/extrabold",
                className: aZ.perksTitle,
                children: i ? ei.intl.string(ei.t.QX14gI) : ei.intl.string(ei.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aZ.perkCardContainer, { [aZ.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aQ, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aZ.sizeGizmo]: !n, [aZ.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aJ, {
                                onClick: function () {
                                    (k.default.track(ez.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(aZ.cover, { [aZ.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var a$ = s(194509),
    a0 = s(317587);
let a1 = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, tP.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: ez.JJy.MARKETING_FLOATING_CTA },
        l = (0, ir.Ay)(),
        o = (0, nM.M)(l);
    return (0, c.jsx)(tS.animated.div, {
        className: u()(a0.iE, { [a0.H8]: i, [a0.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? a0.zW : a0.iJ,
            children: [
                (0, c.jsx)(aO.A, {
                    color: o ? aS.XD.BRAND_INVERTED : void 0,
                    className: u()(a0.x6, { [a0.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : a0.PJ,
                }),
                (0, c.jsx)(a$.A, { className: a0.x6, premiumModalAnalyticsLocation: r }),
            ],
        }),
    });
};
var a2 = s(386564);
function a3(e) {
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
            ? (0, c.jsx)(aO.A, {
                  color: r ? aS.XD.BRAND_INVERTED : void 0,
                  className: u()(a2.x6, a2.Ph, n, { [a2.Sq]: t && a, [a2.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : a2.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aO.A, {
                  color: r || !a ? aS.XD.BRAND_INVERTED : void 0,
                  className: u()(a2.x6, a2.Ph, n, { [a2.Sq]: t && a, [a2.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(a$.A, { className: u()(a2.x6, n), color: a ? void 0 : aS.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(a2.UD, i), children: [o, " ", d] });
}
function a6() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(az.p, { className: a2.zd }),
            (0, c.jsx)(az.p, { className: a2.G }),
            (0, c.jsx)(az.p, { className: a2.zy }),
            (0, c.jsx)(az.p, { className: a2.GX }),
        ],
    });
}
function a5(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = an();
    return (0, c.jsx)(et.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(a2.h_, { [a2.If]: s, [a2.jn]: i }),
        children: ei.intl.format(ei.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let a7 = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, eE.QQ)(),
        o = (0, nb.ar)(),
        d = (0, eC.cg)(),
        m = (0, ns.b)().length > 0,
        x = ei.intl.string(ei.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(a2.kL, s, { [a2.V1]: !o, [a2.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? a2.I6 : a2.G1,
                    children: [
                        (0, c.jsx)(tu.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(ee.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: x,
                            }),
                        }),
                        m
                            ? (0, c.jsx)("div", {
                                  className: a2.DF,
                                  children: (0, c.jsx)(at.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(a5, {}),
                        d || l
                            ? (0, c.jsx)("div", {
                                  className: a2.UD,
                                  children: (0, c.jsx)(a$.A, { className: u()(a2.x6, i), color: aS.XD.WHITE }),
                              })
                            : (0, c.jsx)(a3, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(a5, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(a6, {}),
            ],
        }),
    });
});
var a8 = s(22118),
    a9 = s(145359),
    a4 = s(377770);
function re(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aG, { lifted: t }) : null;
}
let rt = () => {
        (0, _.P)(I);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, ir.Ay)(),
            n = (0, ia.M)(i),
            [a, r] = o.useState(!1),
            [l, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eb.EL)(h) : null,
            b = null != N ? eb.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== b && b !== t$.pe.TIER_2 ? t$.pe.TIER_2 : null,
            E = (0, eT.V)(),
            R = E?.subscriptionTrial?.skuId,
            T = (0, nb.ar)(),
            v = (0, eC.cg)(),
            S = v ?? !1,
            P = (0, x.bG)([aP.A], () => {
                let e = aP.A.getMarketingComponentByType(er.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            y = (0, aD.Q)(),
            { analyticsLocations: D } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let O = (0, c.jsx)("div", {
            className: a4.dY,
            children: (0, c.jsx)(z.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(nl.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aO.A, {
                        showIcon: !1,
                        subscriptionTier: t$.pe.TIER_0,
                        className: a9.Ph,
                        look: aS.pR.OUTLINED,
                        color: aS.XD.WHITE,
                        buttonShineClassName: a9.Qr,
                    }),
                    tier2CTAButton:
                        R === t$.pe.TIER_0
                            ? (0, c.jsx)(aO.A, {
                                  showIcon: !1,
                                  subscriptionTier: t$.pe.TIER_2,
                                  className: a9.Ph,
                                  look: aS.pR.OUTLINED,
                                  color: aS.XD.WHITE,
                                  buttonShineClassName: a9.Qr,
                              })
                            : (0, c.jsx)(aO.A, {
                                  color: aS.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: t$.pe.TIER_2,
                                  className: a9.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: a9.Ac },
                                  buttonShineClassName: a9.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: a4.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aL, { premiumSubscription: h, className: u()(a4.R3, { [a4.aZ]: T }) }),
                T &&
                    (0, c.jsxs)("div", {
                        className: a4.n1,
                        children: [
                            (0, c.jsx)(re, { inOfferExperience: T }),
                            (0, c.jsx)(st.l, {
                                className: a4.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [a4.V1]: !T }),
                    children: [
                        null != P && (0, c.jsx)(aM.c, { className: a4.w$, config: P }),
                        (0, c.jsxs)("div", {
                            className: a4.iS,
                            children: [
                                !T &&
                                    (0, c.jsx)(st.l, {
                                        className: a4.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(z.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(a7, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [a4.p7]: T, [a4.Pw]: T, [a4.AG]: v, [a4.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != y && (0, c.jsx)("div", { className: a4.Ol, children: (0, c.jsx)(ay.I, { component: y }) }),
                O,
                (0, c.jsx)(aq, { className: a4.B_ }),
                (0, c.jsx)("div", { className: a4.aC, children: (0, c.jsx)(a8.A, { className: a4.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: a4.hz }),
                (0, c.jsx)(a1, {
                    isVisible: !a && !l && f,
                    subscriptionTier: C,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: v,
                }),
                (0, c.jsx)(z.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (k.default.track(ez.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            g(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: a4._Z }),
                }),
                (0, c.jsx)("img", {
                    src: ne,
                    className: a4.Kw,
                    width: 112,
                    height: 85,
                    alt: ei.intl.string(ei.t.X4IxWL),
                }),
            ],
        });
    },
    rs = function (e) {
        let { entrypoint: t } = e,
            s = (0, eT.V)(),
            i = (0, eR.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, ni.NF)({ trialOffer: s }),
            a = (0, ni.Tp)(),
            r = (0, x.bG)([eH.A], () => eH.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, ni.QG)(), !0 === a && (0, ni.ne)(r), (null != s || null != i) && (0, G.u1)(s, i));
            }, [s, i, n, a, r]),
            t)
        ) {
            case t$.tU.UserSettings:
                return (0, c.jsx)(rt, {});
            case t$.tU.ApplicationStoreHome:
                return (0, c.jsx)(a_, {});
            default:
                return null;
        }
    };
var ri = s(531296);
let rn = function (e) {
    let { entrypoint: t = t$.tU.UserSettings } = e;
    (0, _.P)(I);
    let s = (0, C.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
        n = V("nitro_member_hub_header"),
        a = (0, U.ds)(),
        { sourceAnalyticsLocations: r, analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        d = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        T = (0, x.bG)([O.A], () => O.A.hasFetchedPaymentSources),
        v = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        w = v?.id,
        B = (0, eT.V)(),
        F = (0, eR.O)({ includePremiumGroupDiscount: !0 }),
        z = (0, E.Y)(t$.T7),
        [W, Y] = o.useState(!0),
        K = o.useRef(0),
        X = (0, L.YE)(v, t$.PremiumTypes.TIER_2),
        Z = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        J = null != Z && Z.status === ez.Dmq.CANCELED;
    ((0, ns.b)(),
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                (await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, ez.tF5.DISCOVERY)]),
                    (K.current = Date.now() - e),
                    Y(!1));
            });
        }, []),
        o.useEffect(() => {
            W ||
                k.default.track(ez.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: r,
                    load_duration_ms: K.current,
                });
        }, [r, W]),
        o.useEffect(() => {
            s && (null != B || null != F) && (0, G.u1)(B, F);
        }, [s, B, F]));
    let Q = (0, m.zy)(),
        q = o.useRef(!1),
        $ = d && T && z,
        [ee, et] = o.useState($);
    ($ && !ee && et(!0),
        o.useEffect(() => {
            if (q.current || !$) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: t$.pe.TIER_0, nitro: t$.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((q.current = !0),
                (0, P.bG)(ez.BVt.APPLICATION_STORE),
                (0, S.A)({ subscriptionTier: s, analyticsLocations: l }));
        }, [$, Q.search, l]));
    let es = (0, x.bG)([y.A], () => y.A.enabled),
        ei = t === t$.tU.ApplicationStoreHome,
        en = es
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(R.uK, {})
              : ei && X
                ? (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(nt, { userId: w }) })
                : ee
                  ? null
                  : (0, c.jsx)("div", { className: u()(ri.kL, ri.Lq), children: (0, c.jsx)(g.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !J) || (n && e && (a || J))
            ? en
            : (0, c.jsxs)(c.Fragment, { children: [ei && (0, c.jsx)(N.A, {}), en] });
    }
    return (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(rs, { entrypoint: t }) });
};
