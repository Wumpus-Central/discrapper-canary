(s.d(t, { A: () => rt }), s(323874), s(14289), s(35956), s(205816));
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
    eT = s(724651),
    eR = s(732280),
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
    ek = s(590251),
    eL = s(144165),
    eU = s(854627),
    eG = s(427262),
    ew = s(197630),
    eB = s(851746),
    eH = s(326084),
    eF = s(664654);
s(232198);
var eV = s(652215),
    ez = s(879416);
function eW() {
    let e,
        t,
        s,
        { location: i = "PremiumNitroHomeReferralBanner" } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { referralSentUsers: n } = (0, eF.J)(),
        a = (0, x.bG)([eB.A], () => eB.A.getRecipientStatus()),
        r = !1 !== (0, x.bG)([eB.A], () => eB.A.getHasEligibleFriends()),
        { isEligibleForIncentive: l, referralRewardType: c, useAltReferralCardArt: o } = (0, ez.x)({ location: i }),
        d = l ? c : null,
        u =
            ((e = 0),
            (t = 0),
            (s = 0),
            a.forEach((i) => {
                i === eH.aK.REFERRER_REWARD_GRANTED
                    ? (e++, t++, s++)
                    : i === eH.aK.CONVERTED
                      ? (t++, s++)
                      : i === eH.aK.REDEEMED && s++;
            }),
            { numRewardGranted: e, numConverted: t, numRedeemed: s, numSent: a.size }),
        m = a.size === eF.Z,
        g = (function (e, t, s) {
            let i = ej.A.getArticleURL(eV.MVz.REFERRAL_PROGRAM);
            if (null != s)
                return t.numRewardGranted === eF.Z
                    ? s === ew.xb.ORBS
                        ? ei.intl.format(ei.t.OluhLp, { helpdeskArticle: i })
                        : ei.intl.format(ei.t["8BYihN"], { helpdeskArticle: i })
                    : t.numSent === eF.Z
                      ? s === ew.xb.ORBS
                          ? ei.intl.format(ei.t["1aV1j9"], { helpdeskArticle: i })
                          : ei.intl.format(ei.t.QNrPuS, { helpdeskArticle: i })
                      : e
                        ? s === ew.xb.ORBS
                            ? ei.intl.format(ei.t.cfE0uG, { numOrbs: 5e3, helpdeskArticle: i })
                            : ei.intl.format(ei.t["+fcvlI"], { helpdeskArticle: i })
                        : ei.intl.format(ei.t["a0+Jwv"], { helpdeskArticle: i });
            return e
                ? t.numSent === eF.Z
                    ? t.numRedeemed === eF.Z
                        ? ei.intl.format(ei.t["1aEjsH"], { helpdeskArticle: i })
                        : ei.intl.format(ei.t["+u3AOO"], { helpdeskArticle: i })
                    : ei.intl.format(ei.t["omMr+V"], { helpdeskArticle: i })
                : ei.intl.format(ei.t["zWhX/Q"], { helpdeskArticle: i });
        })(r, u, d),
        f =
            d === ew.xb.ORBS
                ? ei.intl.string(ei.t.tAlkl4)
                : d === ew.xb.DISCOUNT
                  ? ei.intl.formatToPlainString(ei.t["/JJ9I5"], { discountPercent: 30 })
                  : ei.intl.string(ei.t.USo4s7),
        p = d === ew.xb.ORBS && u.numSent === eF.Z && u.numConverted >= 1;
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
var eY = s(212737),
    eK = s(162907);
let eX =
        "https://cdn.discordapp.com/assets/content/f94d752e86f195c300db953fbe5c704cbf0c696dcbb0b3e389cd60e8a633a942.png",
    eZ =
        "https://cdn.discordapp.com/assets/content/ceb223833c25175aadddac32ce46fd1c60f4455860c6be9017c8d5993dce01c9.png",
    eJ =
        "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg";
function eQ(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    (k.default.track(eV.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, ed.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        }));
}
function eq(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eU.A)({ userId: t.id, size: eO._3.SIZE_24 });
    return (0, c.jsx)(
        eM.eu,
        { className: eK.bj, src: s, "aria-label": (0, eG.mG)(t), size: eO._3.SIZE_24, ...i },
        t.id,
    );
}
function e$(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: eK.p, children: t });
}
function e0(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(eK.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < eF.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(eq, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e$, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let e1 = { width: 142, height: 80 },
    e2 = { width: 90, height: 60 };
function e3(e) {
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
            ? a === ew.xb.ORBS
                ? {
                      src: eZ,
                      srcSet: `${eZ} 1x, https://cdn.discordapp.com/assets/content/419e2d501b25943940a58157c174bce6883f02782cd8a9781952c00442687423.png 2x`,
                      dimensions: e1,
                  }
                : a === ew.xb.DISCOUNT
                  ? {
                        src: eX,
                        srcSet: `${eX} 1x, https://cdn.discordapp.com/assets/content/8cc73daf7f08781c95990f10ae70b57225b9a132eab3301475ff942fb1823709.png 2x`,
                        dimensions: e2,
                    }
                  : { src: eJ, srcSet: void 0, dimensions: null }
            : { src: eJ, srcSet: void 0, dimensions: null },
        u = d?.width ?? s,
        m = d?.height ?? s;
    return (0, c.jsx)(ek.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? eK.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? eK.e0,
        overlayClassName: t === eF.Z ? eK.ys : void 0,
        children:
            null != o
                ? (0, c.jsx)("img", { src: l, srcSet: o, alt: "", role: "presentation", width: u, height: m })
                : (0, c.jsx)(eL._, { src: l, height: m, width: u, zoomable: !1 }),
    });
}
function e7(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = eW();
    return (0, c.jsxs)("div", {
        className: u()(eK.kL, t),
        children: [
            (0, c.jsx)("div", { className: eK.G3, children: (0, c.jsx)(e3, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: eK.IH,
                children: [
                    (0, c.jsx)(e0, { referralSentUsers: s, className: eK.GV }),
                    (0, c.jsxs)("div", {
                        className: eK.n4,
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
                            eQ({ startingScreen: eY.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var e6 = s(792656),
    e5 = s(536637),
    e8 = s.n(e5),
    e9 = s(496431),
    e4 = s(850292);
let te = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, e9.A)(e8()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: r, minutes: l, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: r, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(e4.Xl, s, { [e4.a3]: "text-lg/bold" === i }),
        children: [
            (0, c.jsx)(et.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ei.intl.string(ei.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: e4.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: e4.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: e4.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: e4.B2,
                                                        children: (0, c.jsx)(et.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: e4.B2,
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
                                        className: e4.cV,
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
var tt = s(473702),
    ts = s(609425),
    ti = s(660184),
    tn = s(938767);
function ta() {
    let e = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, ts.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eU.A)({ userId: e?.id, size: eO._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eG.mG)(e);
    return (0, c.jsxs)("div", {
        className: tn.kL,
        children: [
            (0, c.jsx)("div", {
                className: tn.my,
                children: (0, c.jsx)(eM.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eO._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: tn.QC, children: (0, c.jsx)(ti.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tr = s(707554),
    tl = s(628154);
let tc = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(tr.F, {
        forceLevel: 1,
        children: (0, c.jsx)(ee.D, { className: u()(tl.w, t, i && tl.n), variant: n, color: s, children: a }),
    });
};
var to = s(508770),
    td = s(839534),
    tu = s(478016),
    tm = s(318254),
    tx = s(661531),
    tg = s(626031),
    tf = s(957457);
function tp(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === ew.xb.ORBS
          ? (0, c.jsx)(th, { nRewardsGranted: t, className: i })
          : s === ew.xb.DISCOUNT
            ? (0, c.jsx)(tN, { nRewardsGranted: t, className: i })
            : null;
}
function th(e) {
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
            gap: 4,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: tf.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(tm.C, { size: "xs", color: tx.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(tg.t, {
                            value: n,
                            onValueChange: eV.tEg,
                            onValueReached: eV.tEg,
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
function tN(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(eu.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": ei.intl.formatToPlainString(ei.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(tu.U, { size: "xs", color: tx.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: ei.intl.format(ei.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var tA = s(758836),
    tj = s(558992);
function tb(e) {
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
        } = eW({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(tj.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tj.G3,
                children: (0, c.jsx)(e3, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tj.HP,
                    ringClassName: tj.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(tj.IH, d && tj.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: tj.aZ,
                            children: (0, c.jsx)(to.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: tj.n4,
                        children: [
                            (0, c.jsx)(ee.D, {
                                variant: d ? "heading-lg/bold" : "heading-lg/semibold",
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
                              className: tj.Wp,
                              children: [
                                  (0, c.jsx)(e0, { referralSentUsers: s }),
                                  (0, c.jsx)(tp, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(e0, { referralSentUsers: s, className: tj.t7 }),
                ],
            }),
            (0, c.jsx)(ex.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? ei.intl.string(ei.t.iw5Ccc) : ei.intl.string(ei.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, td.Cz)({
                              tab: tA.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : eQ({ startingScreen: eY.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tC = s(702841),
    tE = s(676279),
    tT = s(479669),
    tR = s(717421),
    tv = s(396583),
    tI = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    t_ = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tS = (e) => {
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
        u = (0, tR.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * l }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        f = (0, tR.z)(
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
        N = (0, tR.z)(
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
        T = (0, tR.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tv.A)(() => {
        (b(C * (0.5 * Math.random() * 5 + 2.5)), E((e) => -1 * e));
    }, A),
    r)
        ? d
        : (0, c.jsx)(tT.animated.div, {
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
var tP = s(382168);
let ty = function (e) {
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
                    className: u()(tP.nJ, i),
                    children: (0, c.jsx)(tS, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tI.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: t_.UP,
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
                    className: u()(tP.IN, n),
                    children: (0, c.jsx)(tS, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tI.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: t_.DOWN,
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
                    className: u()(tP.Gj, a),
                    children: (0, c.jsx)(tS, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tI.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: t_.DOWN,
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
                    className: u()(tP.FV, r),
                    children: (0, c.jsx)(tS, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tI.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: t_.UP,
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
                    className: u()(tP.E1, l),
                    children: (0, c.jsx)(tS, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tI.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: t_.UP,
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
var tD = s(607470);
let tO =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tM = function (e) {
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
                  children: (0, c.jsx)(tS, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tI.SINE },
                      parallaxAnimationData: {
                          pathDirection: t_.UP,
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
                                tD.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tO }),
                                },
                                tO,
                            ),
                  }),
              });
    },
    tk = function (e) {
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
            p = (0, tC.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
            h = (0, tE.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tM, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, c.jsx)(ty, {
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
var tL = s(942663);
let tU = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tk, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tL.wG, s && tL.Vx),
        flyingWumpusAssetClassName: u()(tL.lu, s && tL.ov),
        boltContainerClassName: u()(tL.nJ, s && tL.Wc),
        hammerContainerClassName: u()(tL.Gj, s && tL.XA),
        keyContainerClassName: u()(tL.FV, s && tL.oZ),
        starContainerClassName: u()(tL.E1, s && tL.LN),
        boltAssetClassName: u()(tL.j7, s && tL.QN),
        hammerAssetClassName: u()(tL.Wv, s && tL.B9),
        keyAssetClassName: u()(tL.rs, s && tL.I1),
        starAssetClassName: u()(tL.OY, s && tL.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tG = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tw = s(454273);
let tB = function (e) {
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
            ((t = { [tG.MORNING]: ei.t["Wvc/I+"], [tG.AFTERNOON]: ei.t["d+0STx"], [tG.EVENING]: ei.t.CqsxKI }),
            ei.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tG.MORNING
                        : s >= 12 && s < 17
                          ? tG.AFTERNOON
                          : tG.EVENING
                ],
            )),
        p = o ?? (l ? (0, c.jsx)(tb, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tw.kL, tw.Eg, i),
        ref: r,
        children: (0, c.jsxs)("div", {
            className: u()(tw.W2, tw.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 32,
                    className: tw.ZU,
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
                                        (0, c.jsx)(tc, {
                                            className: tw.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: f,
                                        }),
                                        (0, c.jsx)(ta, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tw.y3,
                    children: (0, c.jsx)(tU, { containerVisibilityPercentage: g, compact: null == p }),
                }),
            ],
        }),
    });
};
var tH = s(924864);
let tF =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tV = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, tC.bG)([eg.Ay], () => eg.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: tH.BI,
                    children: (0, c.jsx)(tS, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tI.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: t_.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, c.jsx)("img", { src: tF, alt: "", className: tH.Q }),
                    }),
                }),
                (0, c.jsx)(ty, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: tH.Gj,
                    keyContainerClassName: tH.FV,
                    starContainerClassName: tH.E1,
                    hammerAssetClassName: tH.Wv,
                    keyAssetClassName: tH.rs,
                    starAssetClassName: tH.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var tz = s(549926);
let tW = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tk, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tz.wG,
        flyingWumpusAssetClassName: tz.lu,
        boltContainerClassName: tz.nJ,
        hammerContainerClassName: tz.Gj,
        keyContainerClassName: tz.FV,
        starContainerClassName: tz.E1,
        boltAssetClassName: tz.j7,
        hammerAssetClassName: tz.Wv,
        keyAssetClassName: tz.rs,
        starAssetClassName: tz.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tY = s(499126);
function tK(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tk, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tY.wG,
        flyingWumpusAssetClassName: tY.lu,
        boltContainerClassName: tY.nJ,
        hammerContainerClassName: tY.Gj,
        keyContainerClassName: tY.FV,
        starContainerClassName: tY.E1,
        boltAssetClassName: tY.j7,
        hammerAssetClassName: tY.Wv,
        keyAssetClassName: tY.rs,
        starAssetClassName: tY.OY,
        animationSpeedScale: 1 / 0.7,
    });
}
let tX = function () {
    let e = (0, tC.bG)([eg.Ay], () => eg.Ay.useReducedMotion);
    return (0, c.jsx)(ty, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tY.cI,
        hammerContainerClassName: tY.qg,
        keyContainerClassName: tY.h2,
        boltContainerClassName: tY.Bz,
        starAssetClassName: tY.ks,
        hammerAssetClassName: tY.GY,
        keyAssetClassName: tY.p4,
        boltAssetClassName: tY.vy,
    });
};
var tZ = s(202541);
function tJ(e, t, i) {
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
            s.e("716460"),
            s.e("264572"),
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
function tQ(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tw.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tw.ap,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, c.jsx)(eP, { text: ei.intl.string(ei.t.yhldRB) }),
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: 12,
                            className: tw.rG,
                            children: [
                                (0, c.jsx)(tc, { children: ei.intl.format(ei.t.FwjP6W, { days: n }) }),
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
                                (0, c.jsx)(e6.A, {
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
                    className: tw.Hk,
                    children: [(0, c.jsx)(ec, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(tX, {})],
                }),
            ],
        }),
    });
}
function tq(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: r } = e_(!(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tw.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tw.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 24,
                    className: tw.E2,
                    children: [
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eP, { text: ei.intl.string(ei.t.yhldRB) }),
                                (0, c.jsx)(tc, { children: ei.intl.format(ei.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tw.X8,
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
                            className: tw.oF,
                            children: [
                                (0, c.jsx)(e6.A, {
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
                (0, c.jsx)("div", { className: tw.Tg, children: (0, c.jsx)(tK, { containerVisibilityPercentage: r }) }),
            ],
        }),
    });
}
function t$(e) {
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
        p = m ?? (d ? (0, c.jsx)(tb, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tw.kL, tw.Eg, t),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: u()(tw.W2, tw.HQ),
            ref: g,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tw.ZU, tw.GW),
                    children: [
                        o && l,
                        null != i.expiresAt &&
                            (0, c.jsx)(te, { expiresAt: i.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(tc, {
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
                                    onClick: () => tJ(r, a, tt.g.CONFIRM_DISCOUNT),
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
                    className: u()(tw.y3, tw.Xx),
                    children: (0, c.jsx)(tW, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function t0(e) {
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
        } = t2(),
        { isInNitroHomeHeaderTreatment: f } = H("subscriber_home_hero"),
        p = V("subscriber_home_hero"),
        { analyticsLocations: h } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        N = (0, ev.c)(er.C.MARKETING_PAGE_BANNER),
        b = (0, eC.cg)(),
        C = null != o && o.status === eV.Dmq.CANCELED,
        E = f && !C,
        T = null;
    null != N &&
        "marketingPageBanner" === N.properties.properties.oneofKind &&
        (T = (0, c.jsx)(ey.x, {
            componentId: N.id,
            promotionId: N.promotionId,
            promotionBannerMarketingComponentFields: N.properties.properties.marketingPageBanner,
        }));
    let R = T;
    null == R && i && !E && (R = (0, c.jsx)(e7, {}));
    let v = (0, eR.V)(),
        I = (0, eT.O)(),
        _ = (0, q.U9)(I, tZ.pe.TIER_2) ? tZ.pe.TIER_2 : void 0,
        S = null != o && o.status !== eV.Dmq.ACCOUNT_HOLD && o.hasAnyPremiumNitro,
        P = (0, ep.A)(),
        y = P.isFractionalPremiumActive && !S && null == R && !l,
        { visibilityPercentageRef: D, visibilityPercentage: O } = e_(!(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion));
    if (s)
        return p
            ? (0, c.jsx)(tq, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
            : (0, c.jsx)(tQ, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g });
    if (E) {
        let e = y
            ? (0, c.jsxs)("div", {
                  className: tw.UJ,
                  children: [
                      (0, c.jsx)(e6.A, {
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
        return (0, c.jsx)(tB, {
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
            ? (0, c.jsx)(t$, {
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
            : (0, c.jsx)(tB, {
                  className: t,
                  headingTop: a,
                  showPill: r,
                  buttonVisibilityRef: g,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
        : (0, c.jsx)("div", {
              className: u()(tw.kL, t),
              "data-testid": "subscriber-nitro-home-hero-header",
              ref: g,
              children: (0, c.jsxs)("div", {
                  className: tw.Qs,
                  ref: D,
                  children: [
                      r && a,
                      (0, c.jsxs)("div", {
                          className: tw.N1,
                          children: [
                              (0, c.jsx)(tV, { containerVisibilityPercentage: O }),
                              l &&
                                  d?.expiresAt != null &&
                                  (0, c.jsx)(te, { expiresAt: d.expiresAt.toISOString(), className: tw.IZ }),
                              (0, c.jsx)(tc, {
                                  children:
                                      l && null != d
                                          ? ei.intl.format(ei.t["3yZP0G"], { percent: d.discount.amount })
                                          : n,
                              }),
                              l &&
                                  null != d &&
                                  null != m &&
                                  (0, c.jsx)(et.E, {
                                      className: tw.jG,
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
                          className: y || l ? tw.UJ : void 0,
                          children: [
                              y &&
                                  (0, c.jsx)(e6.A, {
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
                                      onClick: () => tJ(h, o, tt.g.CONFIRM_DISCOUNT),
                                  }),
                              (0, c.jsx)(es.A, {
                                  variant: y || l ? "secondary" : "expressive",
                                  size: "md",
                                  buttonTextOverride: ei.intl.string(ei.t["3KomGa"]),
                              }),
                          ],
                      }),
                      R,
                  ],
              }),
          });
}
let [t1, t2] = (0, eA.A)(),
    t3 = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = (0, U.ds)(),
            l = (0, eE.QQ)(),
            o = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            d = null != o && o.status === eV.Dmq.CANCELED && null != i,
            u = l && !d,
            m = ei.intl.string(ei.t.qYKftX),
            g = (0, eD.m)(),
            f = ei.intl.string(ei.t.ifwQZb),
            { fractionalState: p, endsAt: h } = (0, ep.A)(),
            N = (0, ef.Ay)(h, ef.yE.CREDITS_ENDS_IN),
            b = null;
        if (p === tZ.xc.NONE || r) b = (0, c.jsx)(eP, { text: m });
        else {
            u = !0;
            let e = ei.intl.format(ei.t["yR+oDD"], {
                helpCenterLink: ej.A.getArticleURL(eV.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            b = (0, c.jsx)(eo.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tw.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tw.V_,
                        children: (0, c.jsx)("div", { className: tw.eL, children: (0, c.jsx)(eP, { text: N }) }),
                    }),
            });
        }
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)(t1.Provider, {
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
                children: (0, c.jsx)(t0, { className: t, isInReverseTrial: r, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var t7 = s(820284),
    t6 = s(742589),
    t5 = s(392943),
    t8 = s(285373),
    t9 = s(603202),
    t4 = s(673992);
let se = function () {
    return (0, c.jsx)(t7.A, {
        section: eV.JJy.NAVIGATION,
        children: (0, c.jsx)(t6.A, {
            className: u()(t9.TQ, t4.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: t9.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: t4.wk,
                        children: [
                            (0, c.jsx)(em.t, { colorClass: t4.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": ei.intl.string(ei.t.Ipxkog),
                                className: t4.Ss,
                                children: (0, c.jsx)(t5.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: t9.MQ,
                        children: [
                            (0, c.jsx)(t8.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(es.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var st = s(325499),
    ss = s(562708),
    si = s(885574),
    sn = s(43990),
    sa = s(993077),
    sr = s(139286),
    sl = s(872725),
    sc = s(920050),
    so = s(51965),
    sd = s(375776),
    su = s(727811),
    sm = s(222652),
    sx = s(428685),
    sg = s(934353);
function sf(e) {
    let { openRewardModal: t } = e,
        s = (0, sm.z)();
    if (s.kind === sm.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: sg.R$,
            children: [
                (0, c.jsx)(e6.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tZ.pe.TIER_2,
                }),
                (0, c.jsx)(ex.$, { variant: "secondary", size: "md", text: ei.intl.string(ei.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === su.P.CLAIMED
            ? { text: ei.intl.string(sx.default.Plwzgf) }
            : { text: ei.intl.string(ei.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: sg.R$,
                children: [
                    (0, c.jsx)(so.A, {
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
            s.claimStatus === su.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: sg.ed,
                    children: [
                        (0, c.jsx)(si.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(et.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ei.intl.string(sx.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sp(e) {
    let { glowing: t = !1 } = e;
    (0, sr.A)({
        type: ss.ImpressionTypes.VIEW,
        name: ss.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: sc.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ed.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(sn.N, {
        theme: eV.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, sg.kL),
                    children: (0, c.jsx)(sl.A, {
                        cardType: sa.s.CUSTOM,
                        cardClassName: sg.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: sg.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sg.j,
                                    children: [
                                        (0, c.jsx)("div", { className: sg._g }),
                                        (0, c.jsx)("div", { className: sg.$h }),
                                        (0, c.jsx)("div", { className: sg.Rv }),
                                        (0, c.jsx)("div", { className: sg.Lw }),
                                        (0, c.jsx)("div", { className: sg.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: sg.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: sg.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(ee.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sg.DD,
                                            children: ei.intl.string(sx.default.RGT513),
                                        }),
                                        (0, c.jsx)(et.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sg.h_,
                                            children: ei.intl.string(sx.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sf, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sh = s(744064);
function sN(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, sm.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === sm.N.SUBSCRIBE
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
    return (0, c.jsx)(sh.S, {
        id: sc.XBOX_PREMIUM_PERK_CARD_ID,
        title: ei.intl.string(sx.default.UVL9tD),
        description: ei.intl.string(sx.default["I+IXr0"]),
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
function sA(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(sN, { ...e }) });
}
var sj = s(700556),
    sb = s(821874);
function sC(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: r } = e,
        l = sb.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(l, null != n && sj.Jx, r), children: a }) : null,
        ],
    });
}
var sE = s(517846),
    sT = s(695366),
    sR = s(27620),
    sv = s(789861),
    sI = s(592909),
    s_ = s(398523),
    sS = s(881373),
    sP = s(555393),
    sy = s(852218),
    sD = s(923650),
    sO = s(612413),
    sM = s(14429),
    sk = s(810889),
    sL = s(264865);
let sU =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sG =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg",
    sw =
        "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg";
function sB() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sI.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sI.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sS.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = s_.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, sO.mh)({ location: "useThirdPartyPartnerPerkCards" }),
        r = null === (0, sP.N)(),
        l = (0, st.b)("useHardwarePartnerPerkCards"),
        { currentDate: d, nDaysInMonth: u } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = l ? void 0 : ei.intl.string(ei.t.y2b7CA),
            m = t
                ? {
                      id: sc.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ei.intl.string(sM.default.F0b4Z8),
                      description: ei.intl.formatToPlainString(sM.default["hworR+"], { validDates: (0, sv.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ei.intl.formatToPlainString(sM.default.g7iyvR, { date: (0, sv.mh)() }),
                      caption: (0, c.jsx)("img", { src: sG, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sU,
                      ctaText: ei.intl.string(sM.default.fcopjf),
                      onCtaClick: () =>
                          (0, sD.P)({
                              partnerIds: [sy.Bt],
                              title: ei.intl.string(sM.default.YJsqDS),
                              subtitle: ei.intl.format(sM.default.ieA3V0, {
                                  termsUrl:
                                      "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                              }),
                              modalTeaser: {
                                  title: ei.intl.string(sM.default.Dkm10r),
                                  body: ei.intl.string(sM.default.LHAkT9),
                              },
                              analyticsLocations: e,
                          }),
                      analyticsOptions: { thirdPartyPartner: sy.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = s
                ? {
                      id: sc.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: ei.intl.string(sM.default["IcD/7p"]),
                      description: ei.intl.formatToPlainString(sM.default.hausFi, { date: (0, sv.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: ei.intl.string(sM.default.fxF0Jz),
                      caption: (0, c.jsx)("img", { src: sG, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sU,
                      analyticsOptions: { thirdPartyPartner: sy.Bt },
                  }
                : null,
            g = i
                ? {
                      id: sc.LOGITECH_3PP_CARD_ID,
                      title: ei.intl.string(sk.default.OlObRa),
                      description: ei.intl.format(sk.default.ZGOJ8R, {
                          discountPercent: sS.aW,
                          termsUrl: ej.A.getArticleURL(eV.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: d.getDate() / u,
                      ctaText: ei.intl.string(ei.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sD.P)({
                              partnerIds: [sy.XY],
                              title: ei.intl.string(sk.default["2I7nK+"]),
                              subtitle: ei.intl.format(sk.default.W8jOD0, {
                                  termsUrl: ej.A.getArticleURL(eV.MVz.LOGITECH_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl: sw,
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sy.XY },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            f = n
                ? {
                      id: sc.RECURRING_3P_PROMOTIONS_CARD_ID,
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
                          (0, sD.P)({
                              partnerIds: [sy.KS],
                              title: ei.intl.string(ei.t["7ioAjs"]),
                              subtitle: ei.intl.format(ei.t.LOYRxB, {
                                  helpCenterLink: ej.A.getArticleURL(eV.MVz.RECURRING_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sy.KS },
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
                      id: sc.YOUTUBE_3PP_CARD_ID,
                      title: ei.intl.string(sL.default["NNPh/j"]),
                      description: ei.intl.format(sL.default.MrgHvR, {
                          helpCenterUrl: ej.A.getArticleURL(eV.MVz.YOUTUBE_PROMOTION),
                      }),
                      isThirdPartyPerk: !0,
                      pillText: o,
                      backgroundAssetUrl: sw,
                      blurTint: "#2E213D",
                      caption: "YouTube Premium",
                      ctaText: ei.intl.string(sM.default.fcopjf),
                      onCtaClick: () =>
                          (0, sD.P)({
                              partnerIds: [sy.NC],
                              analyticsLocations: e,
                              title: ei.intl.string(sL.default.TDZUui),
                              subtitle: ei.intl.format(sL.default.BTLkvw, {
                                  helpCenterUrl: ej.A.getArticleURL(eV.MVz.YOUTUBE_PROMOTION),
                              }),
                              modalTeaser: {
                                  title: ei.intl.format(sL.default.J8CVYT, {
                                      helpCenterUrl: ej.A.getArticleURL(eV.MVz.YOUTUBE_PROMOTION),
                                  }),
                                  icon: sT.E,
                              },
                              onClose: () => {
                                  sR.Ay.fireSurveyAction(sE.w.YOUTUBE_3PP_MODAL_DISMISSED);
                              },
                          }),
                      analyticsOptions: { thirdPartyPartner: sy.NC },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [l, e, t, s, d, i, u, n, a, r]);
}
var sH = s(762493);
let sF = "xgpp";
function sV(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, st.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: o } = sB();
    if (!i) return null;
    let d = null != n || null != a || null != r || null != l || null != o;
    return (0, c.jsx)(sC, {
        id: sF,
        sectionClassName: u()(sH.uW, sH.Uv, sH.qr),
        heading: (0, c.jsx)(ee.D, {
            variant: "nitro-sm",
            className: u()(sb.R_, sj.U6),
            children: ei.intl.string(ei.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: sj.JE, children: (0, c.jsx)(sp, { glowing: t === sF }) }),
        grid: d
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(sh.S, { ...n, containerClassName: sb.Nr, glowing: s === n.id }),
                      (0, c.jsx)(sA, { containerClassName: sb.Nr }),
                      null != o &&
                          (0, c.jsx)(sh.S, {
                              ...o,
                              containerClassName: sb.Nr,
                              glowing: s === o.id,
                              autoClickCta: s === o.id,
                          }),
                      null != r && (0, c.jsx)(sh.S, { ...r, containerClassName: sb.Nr, glowing: s === r.id }),
                      null != l && (0, c.jsx)(sh.S, { ...l, containerClassName: sb.Nr, glowing: s === l.id }),
                      null != a && (0, c.jsx)(sh.S, { ...a, containerClassName: sb.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var sz = s(313133),
    sW = s(67423);
let sY = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, tR.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(tT.animated.div, {
        className: u()(sz.iE, { [sz.q4]: !t }),
        style: l,
        children: (0, c.jsxs)("div", {
            className: sz.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sW, className: sz.oU }),
                (0, c.jsxs)("div", {
                    className: sz.iQ,
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
                                s.e("716460"),
                                s.e("264572"),
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
                                    initialStep: tt.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sK = s(761508),
    sX = s(449543),
    sZ = s(387103);
function sJ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: sZ.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sQ(e) {
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
function sq(e) {
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
var s$ = s(345394);
function s0(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: s$.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s1 = s(163665);
function s2(e) {
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
function s3(e) {
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
function s7(e) {
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
function s6(e) {
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
var s5 = s(996682);
function s8(e) {
    let {
        color: t = tx.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, s5.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function s9(e) {
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
var s4 = s(78701);
function ie(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: s4.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var it = s(462887),
    is = s(736653),
    ii = s(259065),
    ia = s(206835),
    ir = s(591179),
    il = s(462463),
    ic = s(219882),
    io = s(19886),
    id = s(425713),
    iu = s(696292),
    im = s(192444),
    ix = s(617986),
    ig = s(892227),
    ip = s(81466),
    ih = s(249755),
    iN = s(749012);
let iA = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, K.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ig.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: iN.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: iN.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iN.Pf,
                            children: [
                                (0, c.jsx)(ip.CalendarIcon, { size: "sm", color: tx.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(et.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ei.intl.string(ih.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ei.intl.format(ih.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: iN.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: iN.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iN.Pf,
                            children: [
                                (0, c.jsx)(tm.C, { size: "sm", color: tx.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(et.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ei.intl.string(ih.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ei.intl.format(ih.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ij = s(190107),
    ib = s(799544);
function iC(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, im.lk)(ij.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, K.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: sc.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ei.intl.string(ih.default.hx5AFp),
                          description: ei.intl.format(ih.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(ib.lH, ib.yK),
                          footerContent: (0, c.jsx)(iA, {}),
                          ctaText: ei.intl.string(ih.default.BxjHiu),
                          onCtaClick: () => (0, P.pX)(eV.BVt.COLLECTIBLES_SHOP_WITH_TAB(tA.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: sc.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ei.intl.string(ei.t.Csf5Ol),
                          description: ei.intl.format(ei.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ei.intl.string(ei.t.jVcuVY),
                          onCtaClick: () => (0, ix.mA)({ fromContent: iu.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: ib.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iE = s(975807),
    iT = s(95035),
    iR = s(989790),
    iv = s(88001),
    iI = s(259589),
    i_ = s(817577);
function iS() {
    (0, iE.A)(iv.TE);
}
function iP(e) {
    let t = (0, iR.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ed.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, S.A)({
                      subscriptionTier: tZ.pe.TIER_2,
                      initialPlanId: tZ.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: sc.PREMIUM_GROUP_CARD_ID,
                      title: ei.intl.string(iI.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              ei.intl.formatToPlainString(iI.default.JlyGQj, {
                                  totalSeats: iv.aw,
                                  premiumGroupProductName: (0, iv.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: ib.LF,
                                  children: (0, c.jsx)(iT.A, {
                                      onClick: iS,
                                      children: ei.intl.string(iI.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ei.intl.string(ei.t.oW0eUd),
                      primaryAsset: i_,
                      ctaIcon: em.t,
                      ctaIconPosition: "start",
                      ctaText: ei.intl.string(ei.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iy = s(562819),
    iD = s(793943),
    iO = s(757036),
    iM = s(473933),
    ik = s(655752);
let iL = (0, w.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iU = s(764231),
    iG = s(627380),
    iw = s(30084),
    iB = s(814014),
    iH = s(714206);
let iF =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iV =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iz =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iW() {
    let e,
        t,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, ir.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: d } = sB(),
        m = (0, st.b)("premium_subscriber_home_rewards"),
        g = (0, il.A)({ analyticsLocations: s }),
        f = (0, o.useCallback)(() => {
            (0, eN.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, ii.L)({ analyticsLocations: s }),
            );
        }, [s]),
        p = (0, o.useCallback)(() => {
            (0, eN.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, iy.L)({ analyticsLocations: s }),
            );
        }, [s]),
        h = (0, o.useCallback)(() => {
            (0, eN.openUserSettings)(eh.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        N = (function (e) {
            let { fractionalState: t } = (0, ep.A)(),
                s = t === tZ.xc.FP_ONLY,
                i = (0, io.$F)(),
                n = (0, io.Xb)(),
                a = i?.status === io.Wo.UPCOMING || s,
                r = i?.status === io.Wo.WITHHELD,
                l = a || r,
                c = (0, id.N)(i?.id),
                d = (function () {
                    let e = (0, io.$F)(),
                        t = (0, ik.P)(),
                        s = (0, io.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iL.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === io.Wo.WITHHELD) return null;
                    let n = e8()(),
                        a = e8()(s),
                        r = i || e.status === io.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        c = a.clone().add(r, "months"),
                        o = a.clone().add(l, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion) && !l,
                g = (0, iG.t)(),
                f = (0, ik.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != f ? ei.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iU.T)(tZ.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === io.Wo.UPCOMING
                              ? ei.intl.formatToPlainString(ei.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === io.Wo.WITHHELD
                                ? ((0, iU.T)(i.id, i.tenureReqNumMonths) ?? void 0)
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
                                  (0, iU.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != c ? (r = l || m ? c.standard : c.ambientLarge) : s && (r = iH),
                    {
                        id: sc.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ei.intl.string(i.nameUnformattedNitro) : s ? ei.intl.string(ei.t.tx9Fvw) : "",
                        pillText: ei.intl.string(ei.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iB.pq, { [iB.rX]: l, [iB.kE]: m }),
                        caption: null != n ? ei.intl.formatToPlainString(ei.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: ei.intl.string(ei.t.jVcuVY),
                        onCtaClick: () => (0, iw.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, l, m, n, d, s, g, f, e]);
        })(s),
        { nitroOrbsRewardsCard: b, questOrbMultiplierCard: C } = iC("useWhatsNewPerkCards"),
        E =
            ((e = (0, iO.L)(tZ.PremiumTypes.TIER_2)),
            (t = (0, ic.rX)()),
            (0, o.useMemo)(
                () =>
                    e && t
                        ? {
                              id: sc.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: ei.intl.string(iM.default["/cV3ka"]),
                              description: ei.intl.string(iM.default.H523FI),
                              primaryAsset: (0, c.jsx)(s1.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [e, t],
            )),
        T = iP(s);
    return (0, o.useMemo)(() => {
        let e = [
                m ? null : n,
                m ? null : d,
                m ? null : r,
                m ? null : l,
                m ? null : a,
                b,
                C,
                T,
                {
                    id: sc.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ei.intl.string(ei.t.OLtTrt),
                    description: ei.intl.string(ei.t["di/pXR"]),
                    onCtaClick: i ? g : f,
                    ctaText: ei.intl.string(ei.t.jVcuVY),
                    primaryAsset: iF,
                },
                {
                    id: sc.CLIENT_THEMES_CARD_ID,
                    title: ei.intl.string(ei.t.acc6h6),
                    description: ei.intl.formatToPlainString(ei.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iz,
                    ctaText: ei.intl.string(ei.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iD.nf)(iD.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: sc.PERMADECOS_CARD_ID,
                    title: ei.intl.string(ei.t.L14NZN),
                    description: ei.intl.string(ei.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(ie, { alt: "", ariaHidden: !0 }),
                    ctaText: ei.intl.string(ei.t.jVcuVY),
                    onCtaClick: i ? g : p,
                },
                {
                    id: sc.CUSTOM_APP_ICONS_CARD_ID,
                    title: ei.intl.string(ei.t["GU+wqh"]),
                    description: ei.intl.string(ei.t["1uPk1Z"]),
                    primaryAsset: iV,
                    ctaText: ei.intl.string(ei.t.y9TxXV),
                    onCtaClick: h,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, N), null != E && e.splice(2, 0, E), e.length > s && e.splice(s, e.length - s), e);
    }, [N, b, C, E, T, f, h, p, g, i, n, a, r, l, d, m]);
}
var iY = s(355097);
let iK = "/assets/1eb1b74667b4c0f0.svg",
    iX = "/assets/983b60e4fcaf973b.svg";
var iZ =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let iJ = [
    { id: "bestof", label: () => ei.intl.string(ei.t.q1u7nQ) },
    { id: "appearance", label: () => ei.intl.string(ei.t.CUnZkZ) },
    { id: "upgrades", label: () => ei.intl.string(ei.t.KC5q8v) },
    { id: "vip", label: () => ei.intl.string(ei.t.DjEAcv) },
];
var iQ = s(18290);
function iq(e) {
    e.stopPropagation();
}
function i$(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, is.DP)(),
                t = (0, ir.X)("useFavoritesPerkCards"),
                s = (0, io.Lh)(),
                i = (0, id.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, ia.A)({ scrollPosition: iY._F.TRY_IT_OUT, analyticsLocations: n }),
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
                    (0, P.pX)(eV.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, eN.openUserSettings)(eh.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, il.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, eN.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, ii.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iW(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = iC("useFavoritesPerkCards"),
                b = iP(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: sc.SERVER_BOOSTS_CARD_ID,
                            title: ei.intl.formatToPlainString(ei.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ei.intl.formatToPlainString(ei.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: sc.PROFILES_CARD_ID,
                            title: ei.intl.string(ei.t.xDRab3),
                            description: ei.intl.string(ei.t.yn6fWA),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sQ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sc.HD_VIDEO_CARD_ID,
                            title: ei.intl.string(ei.t["/mQ5gg"]),
                            description: ei.intl.string(ei.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sq, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sc.CLIENT_THEMES_CARD_ID,
                            title: ei.intl.string(ei.t.acc6h6),
                            description: ei.intl.formatToPlainString(ei.t.WQazjs, { themeCount: 20 }),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: iz,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sc.MORE_EMOJIS_CARD_ID,
                            title: ei.intl.string(ei.t.D8vIDT),
                            description: ei.intl.string(ei.t.DRMecB),
                            primaryAsset: (0, c.jsx)(s0, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sc.LARGE_UPLOADS_CARD_ID,
                            title: ei.intl.string(ei.t.nL1WZV),
                            description: (0, ic.M6)({
                                legacyCopy: ei.intl.formatToPlainString(ei.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: ei.intl.formatToPlainString(ei.t.teOTfv, {
                                    maxFileSize: (0, eb.EJ)(tZ.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(s1.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sc.CUSTOM_APP_ICONS_CARD_ID,
                            title: ei.intl.string(ei.t["GU+wqh"]),
                            description: ei.intl.string(ei.t["1uPk1Z"]),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iV,
                            categories: ["appearance"],
                        },
                        {
                            id: sc.ENTRANCE_SOUNDS_CARD_ID,
                            title: ei.intl.string(ei.t.WJfCPi),
                            description: ei.intl.string(ei.t.liQKJR),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: sc.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ei.intl.string(ei.t.OLtTrt),
                            description: ei.intl.string(ei.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            primaryAsset: iF,
                            categories: ["appearance"],
                        },
                        {
                            id: sc.CUSTOM_SOUNDS_CARD_ID,
                            title: ei.intl.string(ei.t["Cu/oFd"]),
                            description: ei.intl.string(ei.t.czj2aa),
                            primaryAsset: (0, c.jsx)(s2, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sc.SPECIAL_STICKERS_CARD_ID,
                            title: ei.intl.string(ei.t.MQoVeb),
                            description: ei.intl.string(ei.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: ib.Uc,
                                children: (0, c.jsx)(s3, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sc.SUPER_REACTIONS_CARD_ID,
                            title: ei.intl.string(ei.t.qERvAA),
                            description: ei.intl.string(ei.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(s7, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sc.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ei.intl.string(ei.t.ssVDYQ),
                            description: ei.intl.string(ei.t.aUSRMa),
                            primaryAsset: (0, it.M)(e) ? iK : iX,
                            categories: ["upgrades"],
                        },
                        {
                            id: sc.EARLY_ACCESS_CARD_ID,
                            title: ei.intl.string(ei.t["g/KRY6"]),
                            description: ei.intl.string(ei.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(s6, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sc.BADGE_CARD_ID,
                            title: ei.intl.string(ei.t.Bn3CtB),
                            description: ei.intl.string(ei.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(s8, { color: tx.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sc.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ei.intl.string(ei.t["MTD+7w"]),
                            description: ei.intl.string(ei.t.Bhs0s6),
                            ctaText: ei.intl.string(ei.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(s9, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: sc.PERMADECOS_CARD_ID,
                            title: ei.intl.string(ei.t.L14NZN),
                            description: ei.intl.string(ei.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(ie, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, b, a, r, l, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iZ.BEST_OF_NITRO),
        r = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: iQ.uW,
        children: [
            (0, c.jsx)(ee.D, { variant: "nitro-sm", children: ei.intl.string(ei.t["Uh3+CA"]) }),
            (0, c.jsx)(sK.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iQ.Lq,
                "aria-label": ei.intl.string(ei.t["Uh3+CA"]),
                children: iJ.map((e) =>
                    (0, c.jsx)(sK.V.Item, { id: e.id, className: iQ.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sX.A,
                {
                    gap: 20,
                    className: iQ.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sh.S,
                                { ...e, glowing: t === e.id, containerClassName: iQ.Ui, onFocus: iq },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var i0 = s(72979);
let i1 = function (e) {
    let { className: t } = e,
        s = (0, is.DP)();
    return (0, c.jsx)("img", {
        className: u()(i0.D, t),
        src: (0, it.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i2 = s(684251);
let i3 = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, c.jsxs)("div", {
              className: u()(i2.kL, i2.Gd, i2.Eg),
              children: [(0, c.jsx)(i1, {}), (0, c.jsx)(se, {}), n],
          })
        : (0, c.jsx)($.h, { color: "nitro-pink", className: u()(i2.kL, i2.Gd), offsetBottom: i, children: n });
};
function i7(e) {
    let { glowingPerkId: t = null } = e,
        s = iW();
    return (0, c.jsx)(sC, {
        sectionClassName: sb.uW,
        heading: (0, c.jsx)(ee.D, { variant: "nitro-sm", className: sb.R_, children: ei.intl.string(ei.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    sh.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === sc.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(sb.Nr, { [sb.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function i6(e, t, s, i) {
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
var i5 = s(92737);
let i8 = "/assets/cd2be35d285d4675.svg",
    i9 = (e) => {
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
                scrollInline: T,
            } = o.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(i5.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        i6(N ?? "", null != N, E, T);
        let [R, v] = o.useState(!1),
            S = (0, J.p)(),
            P = o.useRef(null),
            [y, D] = o.useState(!1),
            O = null != S && null != d && d.status === eV.Dmq.CANCELED,
            L = (0, q.iU)(tZ.gD.PREMIUM_MONTH_TIER_2, S, d),
            G = !y && O,
            w = (0, x.bG)([X.A], () => (null != t ? X.A.getUserProfile(t) : null)),
            B = null != d && d.status === eV.Dmq.CANCELED,
            F = i && !s && !B,
            $ = n && (s || B),
            { analyticsLocations: ee } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [et, es] = o.useState(!1);
        return null != w && (p || null != h)
            ? (0, c.jsxs)(W.Gt, {
                  className: u()(i2.xW, i2.Gd),
                  ref: r,
                  children: [
                      (0, c.jsx)(i3, {
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
                                      children: (0, c.jsx)(t3, {
                                          buttonVisibilityRef: P,
                                          className: i2.v1,
                                          userDiscountOffer: S,
                                          discountedPrice: L,
                                      }),
                                  }),
                                  (0, c.jsx)(i7, { glowingPerkId: C }),
                                  (0, c.jsx)(sV, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(i$, { glowingPerkId: C }),
                                  (0, c.jsx)(ea, {
                                      className: i2.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eV.liQ.NITRO_HOME, section: eV.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: i2.hz }),
                                  (0, c.jsx)(z.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !et &&
                                              (k.default.track(eV.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ee,
                                              }),
                                              es(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: l, className: i2._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: i8,
                                      className: i2.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ei.intl.string(ei.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      O &&
                          null != L &&
                          (0, c.jsx)(sY, {
                              isVisible: G && R,
                              premiumSubscription: d,
                              churnDiscountOffer: S,
                              discountedPrice: L,
                          }),
                  ],
              })
            : F || $
              ? (0, c.jsxs)("div", {
                    className: u()(i2.kL, i2.Lq, i2.TN, i2.Eg),
                    children: [
                        (0, c.jsx)(se, {}),
                        (0, c.jsx)("div", { className: i2.S, children: (0, c.jsx)(g.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(i2.kL, i2.Lq), children: (0, c.jsx)(g.y, {}) });
    };
var i4 = s(286320),
    ne = s(727949),
    nt = s(440005),
    ns = s(26508);
let ni = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var nn = s(860839);
let na =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
function nr(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: na,
        srcSet: `${na} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var nl = s(37537),
    nc = s(783420),
    no = s(204413),
    nd = s(245383),
    nu = s(824069),
    nm = s(785007),
    nx = s(947910);
function ng(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nx.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nx.fQ,
                                children: (0, c.jsx)(to.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(eu.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nx.qU,
                            children: [
                                (0, c.jsxs)(eu.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nx.NI,
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
                                    className: nx.br,
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
                                                className: nx.yD,
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
                radioBarClassName: u()(nx.tG, { [nx.uA]: s, [nx.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nm.$d, {
        ...i,
        options: n,
        value: t,
        size: nm.r9.NOT_SET,
        className: nx.ul,
        withTransparentBackground: !0,
    });
}
var nf = s(773669),
    np = s(97352),
    nh = s(252424),
    nN = s(526292),
    nA = s(186223),
    nj = s(369827),
    nb = s(803496);
function nC(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nj.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nb.A)({
            activeSubscription: t,
            skuIDs: [(0, eb.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nE(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nT(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tZ.Ff.YEAR
          ? ei.intl.format(ei.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : ei.intl.format(ei.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nR = s(614488);
function nv(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(nc.A, {
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
function nI(e) {
    let { skuId: t, className: s } = e,
        i = t === tZ.pe.TIER_2,
        n = (0, it.q)((0, is.Ay)()),
        a = (0, nl.c)("PlanSelectCard"),
        r = (0, eR.V)(),
        l = r?.subscriptionTrial,
        d = l?.skuId === t,
        m = i && d && null != l,
        g = (0, eT.p)(),
        {
            planRadioOptions: f,
            selectedPlanId: p,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tZ.En[t],
                a = tZ.zE[t],
                r = t === tZ.pe.TIER_2,
                l = nC(t),
                c = (0, eR.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, eb.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tZ.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tZ.gD.PREMIUM_YEAR_TIER_0, tZ.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                f = (0, eT.O)(),
                p = (0, nN.k5)(),
                h = (0, x.bG)([nf.default], () => nf.default.locale),
                N = (0, q.U9)(f, t),
                A = (0, q.N1)(n),
                j = (0, q.N1)(a),
                [b, C] = (0, x.yK)([np.A], () => [np.A.get(n), np.A.get(a)], [n, a]),
                E = null != b ? (0, eb.sS)(b, l) : null,
                T = null != C ? (0, eb.sS)(C, l) : null,
                R =
                    N && f?.discount.amount != null && !p
                        ? ei.intl.formatToPlainString(ei.t.IAybsG, {
                              discount: (0, nh.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                v = f?.discount?.planIds,
                I = nE(a, N, v, j, T),
                _ = nE(n, N, v, A, E),
                S = f?.discount.userUsageLimitInterval,
                P = f?.discount.userUsageLimit ?? tZ.OJ,
                y = !r || I || _ || null == C ? null : (0, nA.Cj)(C, !1, l),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tZ.pe.TIER_2 ? null : s && !i ? tZ.En[t] : tZ.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == s || (s === n && m) ? O : s,
                L = [
                    {
                        value: a,
                        primaryText: ei.intl.string(ei.t["/Q4HRN"]),
                        primarySubText:
                            (I
                                ? nT({
                                      expectedUsageInterval: tZ.Ff.YEAR,
                                      usageInterval: S,
                                      discountDuration: P,
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
                        primaryText: ei.intl.string(ei.t.DKzs96),
                        primarySubText: _
                            ? nT({
                                  expectedUsageInterval: tZ.Ff.MONTH,
                                  usageInterval: S,
                                  discountDuration: P,
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
        { buttonText: j } = (0, nd.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, no.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, c.jsxs)(eu.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nR.Ux,
            children: [
                (0, c.jsx)(eu.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nR.MY,
                    children: (0, c.jsx)(ee.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nR.ck : nR.JJ,
                        children: i ? ei.intl.string(ei.t.lG6a5x) : ei.intl.string(ei.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(eu.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nR.qT,
                    children: i
                        ? (0, c.jsx)(nn.ZP, {
                              featureSet: nn.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(nn.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(nu.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nR.qS,
                          role: "separator",
                          children: (0, c.jsx)(et.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nR.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tZ.WT.DAY:
                                          if (t % 7 == 0) return ei.intl.format(ei.t["1MYPH0"], { weeks: t / 7 });
                                          return ei.intl.format(ei.t.pYfIoO, { days: t });
                                      case tZ.WT.MONTH:
                                          return ei.intl.format(ei.t["96hTLe"], { months: t });
                                      case tZ.WT.YEAR:
                                          return ei.intl.format(ei.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(l.interval, l.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nR.yF }),
                (0, c.jsxs)("div", {
                    className: nR.qr,
                    children: [
                        (0, c.jsx)(ng, { planRadioOptions: f, value: p ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nv, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = u()(nR.Nr, s, { [nR.Fw]: i });
    return i
        ? (0, c.jsxs)($.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, c.jsx)("div", {
                      className: nR.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(nr, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, c.jsx)("div", { className: E, children: C });
}
function n_(e) {
    let { className: t } = e,
        s = (0, it.q)((0, is.Ay)()),
        i = (0, nl.c)("PlanSelectPremiumGroupCard"),
        n = (0, eT.p)(),
        a = null != n,
        r = nC(tZ.pe.TIER_2),
        l = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eU.A)({ userId: l?.id, size: eO._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([np.A], () => np.A.get(tZ.gD.PREMIUM_GROUP_MONTH)),
        f = (0, q.N1)(tZ.gD.PREMIUM_GROUP_MONTH),
        p = a
            ? ei.intl.format(iI.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, iv.DP)(),
              })
            : ei.intl.string(ei.t["2pG5Ga"]),
        h = (0, c.jsx)(nc.A, {
            subscriptionTier: tZ.pe.TIER_2,
            initialPlanId: tZ.gD.PREMIUM_GROUP_MONTH,
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
        className: u()(nR.Nr, t),
        children: (0, c.jsxs)(eu.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nR.Ux,
            children: [
                (0, c.jsxs)(eu.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nR.MY,
                    children: [
                        (0, c.jsx)(ee.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nR.ck : nR.JJ,
                            children: ei.intl.string(iI.default.eSKiXk),
                        }),
                        null != l &&
                            (0, c.jsxs)(eu.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nR.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nR.uA,
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
                                        className: nR.VL,
                                        children: (0, c.jsxs)(et.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", iv.LM],
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
                    className: nR.qT,
                    children: (0, c.jsx)(nn.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nR.yF }),
                (0, c.jsxs)("div", {
                    className: nR.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nR.ec,
                            children: [
                                (0, c.jsx)(et.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: ei.intl.string(iI.default.SvSwga),
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
function nS(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, nn.pw)(t),
        a = (0, iR.PA)(),
        r = (0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        l = { [nR.iR]: !r };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(eu.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nR.oB, s),
            children: [
                (0, c.jsx)(ee.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nR.op,
                    children: ei.intl.string(ei.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nR.kR, { [nR.BQ]: a }),
                    children: [
                        (0, c.jsx)(nI, { skuId: tZ.pe.TIER_0, className: u()(nR.rz, l) }),
                        (0, c.jsx)(nI, { skuId: tZ.pe.TIER_2, className: u()(nR.Rv, l) }),
                        a && (0, c.jsx)(n_, { className: u()(nR.zz, l) }),
                    ],
                }),
            ],
        }),
    });
}
var nP = s(226830),
    ny = s(366010),
    nD = s(303136);
let nO = function (e) {
    let t,
        { className: s } = e,
        i = (0, tE.TM)(),
        n = (0, ny.q)((0, is.Ay)());
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
                nD.A,
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
var nM =
        (((l = {}).HOME = "home"),
        (l.WHATS_NEW = "whatsNew"),
        (l.BEST_OF_NITRO = "bestOfNitro"),
        (l.PLANS = "plans"),
        (l.COMPARE = "compare"),
        l),
    nk = s(352756);
let nL = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, tR.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: eV.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(tT.animated.div, {
        className: nk.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nk.U,
            children: [
                (0, c.jsx)(e6.A, {
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
var nU = s(573710);
let nG = function () {
    let e = (0, tC.bG)([eg.Ay], () => eg.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nU.BI,
                children: (0, c.jsx)(tS, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tI.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tF, alt: "", className: nU.Q }),
                }),
            }),
            (0, c.jsx)(ty, {
                isMotionReduced: e,
                boltContainerClassName: nU.nJ,
                carContainerClassName: nU.IN,
                hammerContainerClassName: nU.Gj,
                keyContainerClassName: nU.FV,
                starContainerClassName: nU.E1,
                boltAssetClassName: nU.j7,
                carAssetClassName: nU.or,
                hammerAssetClassName: nU.Wv,
                keyAssetClassName: nU.rs,
                starAssetClassName: nU.OY,
            }),
        ],
    });
};
var nw = s(989756);
let nB = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nw.kL,
            children: (0, c.jsxs)("div", {
                className: nw.hQ,
                children: [
                    (0, c.jsx)(nG, {}),
                    (0, c.jsx)(ee.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nw.RH,
                        children: ei.intl.string(ei.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nB.displayName = "PremiumMarketingFooter";
var nH = s(939249);
let nF = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nM.HOME]: ei.intl.string(ei.t.uGRXjS),
            [nM.WHATS_NEW]: ei.intl.string(ei.t["mfcR/v"]),
            [nM.BEST_OF_NITRO]: ei.intl.string(ei.t.xQKkE8),
            [nM.PLANS]: ei.intl.string(ei.t.wyNMnm),
            [nM.COMPARE]: ei.intl.string(ei.t.pwD7If),
        },
        n = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(t6.A, {
        className: t9.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: t9.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: t9.wG,
                    children: [
                        (0, c.jsx)(em.t, { className: t9.nE, colorClass: t9.oG }),
                        (0, c.jsx)("div", {
                            className: t9.zc,
                            role: "tablist",
                            "aria-label": ei.intl.string(ei.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nH.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: t9.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(et.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: t9.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: t9.MQ,
                    children: [
                        null != n && (0, c.jsx)(t8.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(es.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nV = s(704333),
    nz = s(414499),
    nW = s(597770),
    nY = s(500060),
    nK = s(866665),
    nX = s(406860),
    nZ = s(870975),
    nJ = s(698834);
function nQ() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nX.A)({ boxType: sd.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nV.B, text: ei.intl.string(sx.default.MUypiB) },
            { icon: nz.h, text: ei.intl.string(sx.default.ec5Rdd) },
            { icon: nW.GiftIcon, text: ei.intl.string(sx.default["9t2CzW"]), tooltip: sx.default.AyECej },
            { icon: nY.o, text: ei.intl.string(sx.default.R7YJAY) },
        ];
    return (0, c.jsx)(z.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nJ.iE,
            children: (0, c.jsxs)("div", {
                className: nJ.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nJ.j,
                        children: [
                            (0, c.jsx)("div", { className: nJ._g }),
                            (0, c.jsx)("div", { className: nJ.$h }),
                            (0, c.jsx)("div", { className: nJ.Rv }),
                            (0, c.jsx)("div", { className: nJ.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nJ.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nJ.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(ee.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nJ.R_,
                                                children: ei.intl.string(sx.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nJ.yf,
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
                                                                            className: nJ.Jn,
                                                                            children: (0, c.jsx)(nK.m, {
                                                                                text: ei.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    si.CircleInformationIcon,
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
                                                        className: nJ.xF,
                                                        children: (0, c.jsx)(e6.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tZ.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nJ.WE,
                                        children: (0, c.jsx)(et.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ei.intl.format(sx.default.KDKdWi, { termsLink: (0, nZ.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nJ.r1,
                                children: (0, c.jsx)("img", {
                                    className: nJ.wm,
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
var nq = s(750338),
    n$ = s(19290),
    n0 = s(505051);
function n1(e) {
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
        className: u()(n0.boxBackdrop, t),
        children: [
            (0, c.jsx)(ee.D, {
                className: n0.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, c.jsx)("div", { className: n0.highlightBento, children: l }),
            (0, c.jsx)("div", {
                className: n0.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n$.A0.SMALL;
                            break;
                        case 2:
                            s = n$.A0.MEDIUM;
                            break;
                        default:
                            s = n$.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                nq.A,
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
let n2 = o.memo(function (e) {
        let t = (0, st.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, n$.Ay)(t);
        return (0, c.jsx)(n1, {
            boxLayout: s,
            title: ei.intl.string(ei.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(nQ, {}) : null,
            ...e,
        });
    }),
    n3 = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, n$.Ay)();
        return (0, c.jsx)(n1, { boxLayout: t, title: ei.intl.string(ei.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    n7 = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var n6 = s(236834),
    n5 = s(540504);
function n8(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eU.A)({ userId: t?.id, size: eO._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: n5.$6,
        children: (0, c.jsxs)("div", {
            className: n5.sc,
            children: [
                (0, c.jsx)("div", {
                    className: n5.kR,
                    children: (0, c.jsx)(eM.eu, { src: s, "aria-label": t.username, size: eO._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(ee.D, {
                    variant: "heading-sm/normal",
                    className: n5.FS,
                    color: "text-strong",
                    children: ei.intl.format(ei.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var n9 = s(579245),
    n4 = s(369805);
let ae = function () {
    let e = (0, n4.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eP, { text: e });
};
function at() {
    let e = (0, x.bG)([np.A], () => np.A.getForSkuAndInterval((0, eb.mH)(tZ.pe.TIER_0), tZ.WT.MONTH));
    return null != e ? (0, eb.sS)(e) : "\u2026";
}
var as = s(508556);
let ai = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tC.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        i = (0, tE.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: as.YU,
        children: [
            (0, c.jsx)(tM, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: as.wG,
                assetClassName: as.lu,
            }),
            (0, c.jsx)(ty, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: as.nJ,
                carContainerClassName: as.IN,
                hammerContainerClassName: as.Gj,
                keyContainerClassName: as.FV,
                starContainerClassName: as.E1,
                boltAssetClassName: as.j7,
                carAssetClassName: as.or,
                hammerAssetClassName: as.Wv,
                keyAssetClassName: as.rs,
                starAssetClassName: as.OY,
            }),
        ],
    });
};
var an = s(14057);
let aa = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = at(),
            l = n7.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, n6.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: g } = e_(
                !(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
            ),
            f = (0, i4.b)(),
            p = !d && f.length > 0,
            h = (0, ev.c)(er.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            b = (0, nN.ar)() && !N,
            C = (0, eT.O)(),
            E = (null != C && tZ.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(an.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: an.hQ,
                        children: [
                            (0, c.jsx)(ai, { containerVisibilityPercentage: g }),
                            b && (0, c.jsx)(ae, {}),
                            (0, c.jsx)("div", {
                                className: an.s8,
                                children: (0, c.jsx)(tr.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(ee.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: an.wx,
                                        children: ei.intl.string(ei.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: an.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: an.eZ,
                                            children: (0, c.jsx)(n8, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: an.Qn,
                                            children: (0, c.jsx)(n9.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: b ? an.es : an.UJ,
                                        children: [
                                            (0, c.jsx)(e6.A, {
                                                size: "md",
                                                fullWidth: b,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == i ? tZ.pe.NONE : i,
                                                buttonTextOverride: E ? ei.intl.string(ei.t["2pG5Ga"]) : void 0,
                                            }),
                                            !b && (0, c.jsx)(es.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: an.iQ,
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
var ar = s(820081),
    al = s(140735),
    ac = s(401432),
    ao = s(580630),
    ad = s(795269),
    au = s(84483),
    am = s(763052),
    ax = s(55647),
    ag = s(202600);
function af(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ar.B, { size: "sm", color: tx.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(al.A, { children: ei.intl.string(ei.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ac.a, { size: "xs", color: tx.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(al.A, { children: ei.intl.string(ei.t.l4qZrp) }),
              ],
          });
}
function ap(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(ax.nM, ax.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: ax.nx,
                children: (0, c.jsx)(et.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: ax.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(et.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(af, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: ax.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(et.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(af, { includes: !!i.includes }),
            }),
        ],
    });
}
function ah(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(ax.nM, ax.Gf),
                children: (0, c.jsxs)("td", {
                    className: ax.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(ee.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(et.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(ap, { ...e }, e.id)),
        ],
    });
}
function aN(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tZ.PremiumTypes.TIER_0 ? ei.intl.string(ei.t.tUbSDK) : ei.intl.string(ei.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: ax.nn,
        children: [
            (0, c.jsxs)("div", {
                className: ax.KS,
                children: [
                    (0, c.jsx)(em.t, { colorClass: ax.oG }),
                    (0, c.jsx)(ee.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(ee.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function aA(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, ao.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: ax.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ax.Cr,
                    children: (0, c.jsx)(ee.D, { variant: "heading-xl/bold", children: ei.intl.string(ei.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ax.Hn,
                    children: (0, c.jsx)(aN, {
                        premiumType: tZ.PremiumTypes.TIER_0,
                        priceString: (0, ao.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ax.Hn,
                    children: (0, c.jsx)(aN, { premiumType: tZ.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let aj = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tZ.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, eR.V)(),
            l = r?.subscriptionTrial?.skuId,
            d = (0, eT.O)(),
            m = (0, q.YJ)(d),
            x = null != d && (0, q.U9)(d, tZ.pe.TIER_2) && m === tZ.gD.PREMIUM_MONTH_TIER_2,
            g = (0, q.N1)(m),
            f = null != g ? `${g}/${(0, eb.FJ)(tZ.WT.MONTH)}` : "",
            p = (0, eb.JM)(tZ.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eb.JM)(tZ.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, st.b)("premium_marketing_comparison"),
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
                            label: ei.intl.string(am.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, im.lk)(ij.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = s_.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sS.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, au.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ei.intl.string(ei.t.NG1e6l),
                            subtitle: ei.intl.format(sx.default.uJcbMv, {
                                termsLink: ej.A.getArticleURL(eV.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ei.intl.string(sx.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        r &&
                            s.rows.push({
                                id: 25,
                                label: ei.intl.string(sx.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            s.rows.push({
                                id: 26,
                                label: ei.intl.string(sk.default["gc2sa/"]),
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
                                label: ei.intl.string(ih.default["20tmSN"]),
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
                                    tier0ColumnData: { text: (0, eb.EJ)(tZ.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eb.EJ)(tZ.PremiumTypes.TIER_2) },
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
                                        numBoosts: tZ.M4,
                                        percentageOff: (0, ao.l9)(nf.default.locale, tZ.oX / 100),
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
                                    label: ei.intl.formatToPlainString(ei.t["8crdzJ"], { maxChars: eV.CS1 }),
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
            t = (0, c.jsx)(ad.R, { className: u()(ax.Io, ax.SP), text: e });
        }
        let b = l === tZ.pe.TIER_0 || n === tZ.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(ax.zr, s),
                children: [
                    (0, c.jsx)(ee.D, {
                        className: ax.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: ei.intl.string(ei.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: ax.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(ax.fO, { [ax.Vd]: b, [ax.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: ax.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: ax.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: ag, alt: "", className: ax.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: ax.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: ax.tp,
                                children: [
                                    (0, c.jsx)(aA, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(ah, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    ab = function (e) {
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
var aC = s(818348),
    aE = s(773188);
function aT(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nS, { innerRef: t }) : (0, c.jsx)(nP.jP, { innerRef: t });
}
let aR = () => {
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
        T = null != E ? (0, eb.EL)(E) : null,
        R = null != T ? eb.Ay.getSkuIdForPlan(T.planId) : null,
        v = null !== R && R !== tZ.pe.TIER_2 ? tZ.pe.TIER_2 : null,
        S = (0, eC.cg)(),
        { analyticsLocations: P } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        C(!0);
    }, []);
    let y = (0, sI.A0)({ location: "PremiumMarketingHome" }),
        D = (0, ns.DK)(nt.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: O } = (0, im.lk)(ij.rE.NITRO_HOME_MARKETING),
        L = D && O ? n$.NI.COMBINED_ORBS : O ? n$.NI.ORB_MULTIPLIER : D ? n$.NI.ORB_REWARDS : null,
        U = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? L
                : t === n$.NI.THREE_P_PROMOTIONS
                  ? y
                      ? n$.NI.CALL_OF_DUTY
                      : n$.NI.THREE_P_PROMOTIONS
                  : null;
        }, [y, e.search, L]);
    i6(U ?? "", null != U);
    let { navBarSections: G, activeSectionId: w } = ab([nM.HOME, nM.WHATS_NEW, nM.BEST_OF_NITRO, nM.PLANS, nM.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: Y } = G,
        K = (function (e) {
            let { location: t } = e;
            return ni.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, c.jsxs)("div", {
            ref: s,
            className: u()(aE.kL, aE.Gd, aE.iI, { [aE.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nO, { className: aE.yH }),
                (0, c.jsx)(nF, { navBarSections: G, activeSectionId: w }),
                (0, c.jsxs)("div", {
                    className: aE.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: aE.qY,
                            ref: B.ref,
                            children: (0, c.jsx)(z.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(aa, {
                                    ref: n,
                                    subscriptionTier: v,
                                    isEligibleForBogoPromotion: S,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: aE.So,
                            ref: H.ref,
                            children: (0, c.jsx)(n2, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aE.KQ,
                            ref: F.ref,
                            children: (0, c.jsx)(n3, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aE.s5,
                            ref: V.ref,
                            children: (0, c.jsx)(
                                z.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => p(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(aT, { innerRef: i, isPlanSelectUiRedesignEnabled: K }),
                                },
                                K ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: aE.aC, ref: Y.ref, children: (0, c.jsx)(aj, {}) }),
                    ],
                }),
                (0, c.jsx)(z.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (k.default.track(eV.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            N(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: aE._Z }),
                }),
                (0, c.jsx)(nB, { ref: r }),
                (0, c.jsx)(nL, { isVisible: !d && !f && b, subscriptionTier: v, isEligibleForBogoPromotion: S }),
                (0, c.jsx)(nO, { className: aE.MF }),
            ],
        });
    return (0, c.jsx)(sn.N, {
        theme: aC.NJ.DARK,
        children: (e) => (0, c.jsx)(W.Gt, { className: u()(aE.XG, e), ref: t, children: X }),
    });
};
var av = s(862482),
    aI = s(412260),
    a_ = s(662367),
    aS = s(374403),
    aP = s(396375),
    ay = s(815846),
    aD = s(370049);
let aO = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nN.ar)();
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
    let d = (null != l ? eb.Ay.getSkuIdForPlan(l.planId) : null) === tZ.pe.TIER_1;
    return (
        (s = null != a ? a : r ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(sa.Z, {
            className: u()(aD.kL, n, { [aD.He]: r }),
            type: sa.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(sT.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aD.Kk, { [aD.Pt]: r }),
                }),
                (0, c.jsx)(et.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? ei.intl.format(ei.t["tYuv+T"], {
                              helpdeskArticle: ej.A.getArticleURL(eV.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : ei.intl.format(ei.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aM = s(978836);
let ak = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aM.zr, { [aM.N]: t }),
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
                        (0, c.jsx)("stop", { className: aM.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aM.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aM.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aM.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aM.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aL = s(900797),
    aU = s(847374),
    aG = s(812993),
    aw = s(614268);
function aB(e) {
    let { className: t } = e;
    return (0, c.jsx)(aG.Lp, { className: u()(aw.T, t), text: ei.intl.string(ei.t.EYxi0o) });
}
var aH = s(904788),
    aF = s(507553);
let aV = "/assets/5b4fec8511c3676a.svg",
    az = "/assets/0838bda6ecd20d91.svg";
function aW(e, t, s) {
    return (0, it.M)(e) ? t : s;
}
var aY = s(872461);
function aK(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nH.D, {
        onClick: s,
        className: aY.customButton,
        children: [
            t ? ei.intl.string(ei.t.maZaN3) : ei.intl.string(ei.t["37C26f"]),
            t
                ? (0, c.jsx)(aL.t, { size: "md", color: "currentColor", className: aY.arrow })
                : (0, c.jsx)(aU.a, { size: "md", color: "currentColor", className: aY.arrow }),
        ],
    });
}
function aX(e) {
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
            className: u()(aY.perkCard, i),
            children: [
                l
                    ? (0, c.jsx)(aH.A, {
                          className: aY.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aB, { className: aY.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aY.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(ee.D, {
                            variant: "heading-lg/extrabold",
                            className: aY.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/normal",
                            className: aY.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aZ = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, is.Ay)(),
                n = (0, ir.X)("usePerkCards"),
                a = (0, tC.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eb.Ay.canUsePremiumProfileCustomization(e);
                }),
                r = (0, eb.EJ)(tZ.PremiumTypes.TIER_2, { useSpace: !1 });
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
                    imageSource: aW(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                (aF.A.setState({ scrollPosition: iY._F.TRY_IT_OUT }),
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
                    imageSource: aW(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ei.intl.string(ei.t.Bv8Pfk),
                    description: ei.intl.string(ei.t.JMfaTU),
                    imageSource: aW(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ei.intl.string(ei.t.Bv8Pfk),
                    description: ei.intl.string(ei.t.JMfaTU),
                    imageSource: aW(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ei.intl.string(ei.t["lGcW+c"]),
                    description: ei.intl.string(ei.t["/fDyO+"]),
                    imageSource: aW(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ei.intl.string(ei.t["1c+xwT"]),
                    description: ei.intl.string(ei.t.hJG8ZN),
                    imageSource: aW(i, az, aV),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ei.intl.string(ei.t.tzdIwI),
                    description: ei.intl.string(ei.t.hJG8ZN),
                    imageSource: aW(i, az, aV),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ei.intl.string(ei.t.tzdIwI),
                    description: ei.intl.string(ei.t.hJG8ZN),
                    imageSource: aW(i, az, aV),
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
                    imageSource: aW(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: aW(i, iK, iX),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aY }),
        l = (0, tC.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
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
        className: u()(aY.perksContainer, t, {
            [aY.partiallyHidden]: i && !n,
            [aY.subscriberNitroHome]: i,
            [aY.reducedMotion]: l,
        }),
        children: [
            (0, c.jsx)(ee.D, {
                variant: "heading-xxl/extrabold",
                className: aY.perksTitle,
                children: i ? ei.intl.string(ei.t.QX14gI) : ei.intl.string(ei.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aY.perkCardContainer, { [aY.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aX, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aY.sizeGizmo]: !n, [aY.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aK, {
                                onClick: function () {
                                    (k.default.track(eV.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(aY.cover, { [aY.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aJ = s(194509),
    aQ = s(317587);
let aq = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, tR.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eV.JJy.MARKETING_FLOATING_CTA },
        l = (0, is.Ay)(),
        o = (0, ny.M)(l);
    return (0, c.jsx)(tT.animated.div, {
        className: u()(aQ.iE, { [aQ.H8]: i, [aQ.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aQ.zW : aQ.iJ,
            children: [
                (0, c.jsx)(aP.A, {
                    color: o ? av.XD.BRAND_INVERTED : void 0,
                    className: u()(aQ.x6, { [aQ.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aQ.PJ,
                }),
                (0, c.jsx)(aJ.A, { className: aQ.x6, premiumModalAnalyticsLocation: r }),
            ],
        }),
    });
};
var a$ = s(386564);
function a0(e) {
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
            ? (0, c.jsx)(aP.A, {
                  color: r ? av.XD.BRAND_INVERTED : void 0,
                  className: u()(a$.x6, a$.Ph, n, { [a$.Sq]: t && a, [a$.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : a$.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aP.A, {
                  color: r || !a ? av.XD.BRAND_INVERTED : void 0,
                  className: u()(a$.x6, a$.Ph, n, { [a$.Sq]: t && a, [a$.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aJ.A, { className: u()(a$.x6, n), color: a ? void 0 : av.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(a$.UD, i), children: [o, " ", d] });
}
function a1() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aH.p, { className: a$.zd }),
            (0, c.jsx)(aH.p, { className: a$.G }),
            (0, c.jsx)(aH.p, { className: a$.zy }),
            (0, c.jsx)(aH.p, { className: a$.GX }),
        ],
    });
}
function a2(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = at();
    return (0, c.jsx)(et.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(a$.h_, { [a$.If]: s, [a$.jn]: i }),
        children: ei.intl.format(ei.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let a3 = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, eE.QQ)(),
        o = (0, nN.ar)(),
        d = (0, eC.cg)(),
        m = (0, i4.b)().length > 0,
        x = ei.intl.string(ei.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(a$.kL, s, { [a$.V1]: !o, [a$.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? a$.I6 : a$.G1,
                    children: [
                        (0, c.jsx)(tr.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(ee.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: x,
                            }),
                        }),
                        m
                            ? (0, c.jsx)("div", {
                                  className: a$.DF,
                                  children: (0, c.jsx)(n9.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(a2, {}),
                        d || l
                            ? (0, c.jsx)("div", {
                                  className: a$.UD,
                                  children: (0, c.jsx)(aJ.A, { className: u()(a$.x6, i), color: av.XD.WHITE }),
                              })
                            : (0, c.jsx)(a0, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(a2, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(a1, {}),
            ],
        }),
    });
});
var a7 = s(22118),
    a6 = s(145359),
    a5 = s(377770);
function a8(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(ak, { lifted: t }) : null;
}
let a9 = () => {
        (0, _.P)(I);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, is.Ay)(),
            n = (0, it.M)(i),
            [a, r] = o.useState(!1),
            [l, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eb.EL)(h) : null,
            b = null != N ? eb.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== b && b !== tZ.pe.TIER_2 ? tZ.pe.TIER_2 : null,
            E = (0, eR.V)(),
            T = E?.subscriptionTrial?.skuId,
            R = (0, nN.ar)(),
            v = (0, eC.cg)(),
            S = v ?? !1,
            P = (0, x.bG)([aI.A], () => {
                let e = aI.A.getMarketingComponentByType(er.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            y = (0, aS.Q)(),
            { analyticsLocations: D } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let O = (0, c.jsx)("div", {
            className: a5.dY,
            children: (0, c.jsx)(z.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(nn.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aP.A, {
                        showIcon: !1,
                        subscriptionTier: tZ.pe.TIER_0,
                        className: a6.Ph,
                        look: av.pR.OUTLINED,
                        color: av.XD.WHITE,
                        buttonShineClassName: a6.Qr,
                    }),
                    tier2CTAButton:
                        T === tZ.pe.TIER_0
                            ? (0, c.jsx)(aP.A, {
                                  showIcon: !1,
                                  subscriptionTier: tZ.pe.TIER_2,
                                  className: a6.Ph,
                                  look: av.pR.OUTLINED,
                                  color: av.XD.WHITE,
                                  buttonShineClassName: a6.Qr,
                              })
                            : (0, c.jsx)(aP.A, {
                                  color: av.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tZ.pe.TIER_2,
                                  className: a6.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: a6.Ac },
                                  buttonShineClassName: a6.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: a5.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aO, { premiumSubscription: h, className: u()(a5.R3, { [a5.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: a5.n1,
                        children: [
                            (0, c.jsx)(a8, { inOfferExperience: R }),
                            (0, c.jsx)(t8.l, {
                                className: a5.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [a5.V1]: !R }),
                    children: [
                        null != P && (0, c.jsx)(ay.c, { className: a5.w$, config: P }),
                        (0, c.jsxs)("div", {
                            className: a5.iS,
                            children: [
                                !R &&
                                    (0, c.jsx)(t8.l, {
                                        className: a5.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(z.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(a3, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [a5.p7]: R, [a5.Pw]: R, [a5.AG]: v, [a5.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != y && (0, c.jsx)("div", { className: a5.Ol, children: (0, c.jsx)(a_.I, { component: y }) }),
                O,
                (0, c.jsx)(aZ, { className: a5.B_ }),
                (0, c.jsx)("div", { className: a5.aC, children: (0, c.jsx)(a7.A, { className: a5.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: a5.hz }),
                (0, c.jsx)(aq, {
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
                            (k.default.track(eV.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            g(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: a5._Z }),
                }),
                (0, c.jsx)("img", {
                    src: i8,
                    className: a5.Kw,
                    width: 112,
                    height: 85,
                    alt: ei.intl.string(ei.t.X4IxWL),
                }),
            ],
        });
    },
    a4 = function (e) {
        let { entrypoint: t } = e,
            s = (0, eR.V)(),
            i = (0, eT.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, ne.NF)({ trialOffer: s }),
            a = (0, ne.Tp)(),
            r = (0, x.bG)([eB.A], () => eB.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, ne.QG)(), !0 === a && (0, ne.ne)(r), (null != s || null != i) && (0, G.u1)(s, i));
            }, [s, i, n, a, r]),
            t)
        ) {
            case tZ.tU.UserSettings:
                return (0, c.jsx)(a9, {});
            case tZ.tU.ApplicationStoreHome:
                return (0, c.jsx)(aR, {});
            default:
                return null;
        }
    };
var re = s(531296);
let rt = function (e) {
    let { entrypoint: t = tZ.tU.UserSettings } = e;
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
        B = (0, eR.V)(),
        F = (0, eT.O)({ includePremiumGroupDiscount: !0 }),
        z = (0, E.Y)(tZ.T7),
        [W, Y] = o.useState(!0),
        K = o.useRef(0),
        X = (0, L.YE)(v, tZ.PremiumTypes.TIER_2),
        Z = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        J = null != Z && Z.status === eV.Dmq.CANCELED;
    ((0, i4.b)(),
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                (await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, eV.tF5.DISCOVERY)]),
                    (K.current = Date.now() - e),
                    Y(!1));
            });
        }, []),
        o.useEffect(() => {
            W ||
                k.default.track(eV.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
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
            let t = { nitro_basic: tZ.pe.TIER_0, nitro: tZ.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((q.current = !0),
                (0, P.bG)(eV.BVt.APPLICATION_STORE),
                (0, S.A)({ subscriptionTier: s, analyticsLocations: l }));
        }, [$, Q.search, l]));
    let es = (0, x.bG)([y.A], () => y.A.enabled),
        ei = t === tZ.tU.ApplicationStoreHome,
        en = es
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : ei && X
                ? (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(i9, { userId: w }) })
                : ee
                  ? null
                  : (0, c.jsx)("div", { className: u()(re.kL, re.Lq), children: (0, c.jsx)(g.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !J) || (n && e && (a || J))
            ? en
            : (0, c.jsxs)(c.Fragment, { children: [ei && (0, c.jsx)(N.A, {}), en] });
    }
    return (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(a4, { entrypoint: t }) });
};
