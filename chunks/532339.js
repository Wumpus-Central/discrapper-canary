(s.d(t, { A: () => rs }), s(323874), s(14289), s(35956), s(205816));
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
        "https://cdn.discordapp.com/assets/content/ceb223833c25175aadddac32ce46fd1c60f4455860c6be9017c8d5993dce01c9.png";
var eJ = s(764014);
let eQ =
    "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg";
function eq(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    (k.default.track(eV.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, ed.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        }));
}
function e$(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eU.A)({ userId: t.id, size: eO._3.SIZE_24 });
    return (0, c.jsx)(
        eM.eu,
        { className: eK.bj, src: s, "aria-label": (0, eG.mG)(t), size: eO._3.SIZE_24, ...i },
        t.id,
    );
}
function e0(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: eK.p, children: t });
}
function e1(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(eK.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < eF.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e$, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e0, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let e2 = { width: 142, height: 80 },
    e3 = { width: 90, height: 60 };
function e6(e) {
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
                ? { src: eZ, srcSet: `${eZ} 1x, ${eJ.A} 2x`, dimensions: e2 }
                : a === ew.xb.DISCOUNT
                  ? {
                        src: eX,
                        srcSet: `${eX} 1x, https://cdn.discordapp.com/assets/content/8cc73daf7f08781c95990f10ae70b57225b9a132eab3301475ff942fb1823709.png 2x`,
                        dimensions: e3,
                    }
                  : { src: eQ, srcSet: void 0, dimensions: null }
            : { src: eQ, srcSet: void 0, dimensions: null },
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
            (0, c.jsx)("div", { className: eK.G3, children: (0, c.jsx)(e6, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: eK.IH,
                children: [
                    (0, c.jsx)(e1, { referralSentUsers: s, className: eK.GV }),
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
                            eq({ startingScreen: eY.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var e5 = s(792656),
    e8 = s(536637),
    e9 = s.n(e8),
    e4 = s(496431),
    te = s(850292);
let tt = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, e4.A)(e9()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: r, minutes: l, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: r, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(te.Xl, s, { [te.a3]: "text-lg/bold" === i }),
        children: [
            (0, c.jsx)(et.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ei.intl.string(ei.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: te.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: te.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: te.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: te.B2,
                                                        children: (0, c.jsx)(et.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: te.B2,
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
                                        className: te.cV,
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
var ts = s(473702),
    ti = s(609425),
    tn = s(660184),
    ta = s(938767);
function tr() {
    let e = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, ti.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eU.A)({ userId: e?.id, size: eO._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eG.mG)(e);
    return (0, c.jsxs)("div", {
        className: ta.kL,
        children: [
            (0, c.jsx)("div", {
                className: ta.my,
                children: (0, c.jsx)(eM.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eO._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: ta.QC, children: (0, c.jsx)(tn.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tl = s(707554),
    tc = s(628154);
let to = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(tl.F, {
        forceLevel: 1,
        children: (0, c.jsx)(ee.D, { className: u()(tc.w, t, i && tc.n), variant: n, color: s, children: a }),
    });
};
var td = s(508770),
    tu = s(839534),
    tm = s(478016),
    tx = s(318254),
    tg = s(661531),
    tf = s(626031),
    tp = s(957457);
function th(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === ew.xb.ORBS
          ? (0, c.jsx)(tN, { nRewardsGranted: t, className: i })
          : s === ew.xb.DISCOUNT
            ? (0, c.jsx)(tA, { nRewardsGranted: t, className: i })
            : null;
}
function tN(e) {
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
                    className: tp.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(tx.C, { size: "xs", color: tg.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(tf.t, {
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
function tA(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(eu.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": ei.intl.formatToPlainString(ei.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(tm.U, { size: "xs", color: tg.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: ei.intl.format(ei.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var tj = s(758836),
    tb = s(558992);
function tC(e) {
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
        className: u()(tb.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tb.G3,
                children: (0, c.jsx)(e6, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tb.HP,
                    ringClassName: tb.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(tb.IH, d && tb.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: tb.aZ,
                            children: (0, c.jsx)(td.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: tb.n4,
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
                              className: tb.Wp,
                              children: [
                                  (0, c.jsx)(e1, { referralSentUsers: s }),
                                  (0, c.jsx)(th, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(e1, { referralSentUsers: s, className: tb.t7 }),
                ],
            }),
            (0, c.jsx)(ex.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? ei.intl.string(ei.t.iw5Ccc) : ei.intl.string(ei.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, tu.Cz)({
                              tab: tj.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : eq({ startingScreen: eY.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tE = s(702841),
    tT = s(676279),
    tR = s(479669),
    tv = s(717421),
    tI = s(396583),
    t_ = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tS = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tP = (e) => {
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
        u = (0, tv.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * l }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        f = (0, tv.z)(
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
        N = (0, tv.z)(
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
        T = (0, tv.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tI.A)(() => {
        (b(C * (0.5 * Math.random() * 5 + 2.5)), E((e) => -1 * e));
    }, A),
    r)
        ? d
        : (0, c.jsx)(tR.animated.div, {
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
var ty = s(382168);
let tD = function (e) {
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
                    className: u()(ty.nJ, i),
                    children: (0, c.jsx)(tP, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: t_.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tS.UP,
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
                    className: u()(ty.IN, n),
                    children: (0, c.jsx)(tP, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: t_.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tS.DOWN,
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
                    className: u()(ty.Gj, a),
                    children: (0, c.jsx)(tP, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: t_.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tS.DOWN,
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
                    className: u()(ty.FV, r),
                    children: (0, c.jsx)(tP, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: t_.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tS.UP,
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
                    className: u()(ty.E1, l),
                    children: (0, c.jsx)(tP, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: t_.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tS.UP,
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
var tO = s(607470);
let tM =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tk = function (e) {
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
                  children: (0, c.jsx)(tP, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: t_.SINE },
                      parallaxAnimationData: {
                          pathDirection: tS.UP,
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
                                tO.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tM }),
                                },
                                tM,
                            ),
                  }),
              });
    },
    tL = function (e) {
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
            p = (0, tE.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
            h = (0, tT.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tk, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, c.jsx)(tD, {
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
var tU = s(942663);
let tG = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tL, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tU.wG, s && tU.Vx),
        flyingWumpusAssetClassName: u()(tU.lu, s && tU.ov),
        boltContainerClassName: u()(tU.nJ, s && tU.Wc),
        hammerContainerClassName: u()(tU.Gj, s && tU.XA),
        keyContainerClassName: u()(tU.FV, s && tU.oZ),
        starContainerClassName: u()(tU.E1, s && tU.LN),
        boltAssetClassName: u()(tU.j7, s && tU.QN),
        hammerAssetClassName: u()(tU.Wv, s && tU.B9),
        keyAssetClassName: u()(tU.rs, s && tU.I1),
        starAssetClassName: u()(tU.OY, s && tU.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tw = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tB = s(454273);
let tH = function (e) {
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
            ((t = { [tw.MORNING]: ei.t["Wvc/I+"], [tw.AFTERNOON]: ei.t["d+0STx"], [tw.EVENING]: ei.t.CqsxKI }),
            ei.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tw.MORNING
                        : s >= 12 && s < 17
                          ? tw.AFTERNOON
                          : tw.EVENING
                ],
            )),
        p = o ?? (l ? (0, c.jsx)(tC, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tB.kL, tB.Eg, i),
        ref: r,
        children: (0, c.jsxs)("div", {
            className: u()(tB.W2, tB.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 32,
                    className: tB.ZU,
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
                                        (0, c.jsx)(to, {
                                            className: tB.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: f,
                                        }),
                                        (0, c.jsx)(tr, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tB.y3,
                    children: (0, c.jsx)(tG, { containerVisibilityPercentage: g, compact: null == p }),
                }),
            ],
        }),
    });
};
var tF = s(924864);
let tV =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tz = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, tE.bG)([eg.Ay], () => eg.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: tF.BI,
                    children: (0, c.jsx)(tP, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: t_.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tS.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, c.jsx)("img", { src: tV, alt: "", className: tF.Q }),
                    }),
                }),
                (0, c.jsx)(tD, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: tF.Gj,
                    keyContainerClassName: tF.FV,
                    starContainerClassName: tF.E1,
                    hammerAssetClassName: tF.Wv,
                    keyAssetClassName: tF.rs,
                    starAssetClassName: tF.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var tW = s(549926);
let tY = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tL, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tW.wG,
        flyingWumpusAssetClassName: tW.lu,
        boltContainerClassName: tW.nJ,
        hammerContainerClassName: tW.Gj,
        keyContainerClassName: tW.FV,
        starContainerClassName: tW.E1,
        boltAssetClassName: tW.j7,
        hammerAssetClassName: tW.Wv,
        keyAssetClassName: tW.rs,
        starAssetClassName: tW.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tK = s(499126);
function tX(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tL, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tK.wG,
        flyingWumpusAssetClassName: tK.lu,
        boltContainerClassName: tK.nJ,
        hammerContainerClassName: tK.Gj,
        keyContainerClassName: tK.FV,
        starContainerClassName: tK.E1,
        boltAssetClassName: tK.j7,
        hammerAssetClassName: tK.Wv,
        keyAssetClassName: tK.rs,
        starAssetClassName: tK.OY,
        animationSpeedScale: 1 / 0.7,
    });
}
let tZ = function () {
    let e = (0, tE.bG)([eg.Ay], () => eg.Ay.useReducedMotion);
    return (0, c.jsx)(tD, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tK.cI,
        hammerContainerClassName: tK.qg,
        keyContainerClassName: tK.h2,
        boltContainerClassName: tK.Bz,
        starAssetClassName: tK.ks,
        hammerAssetClassName: tK.GY,
        keyAssetClassName: tK.p4,
        boltAssetClassName: tK.vy,
    });
};
var tJ = s(202541);
function tQ(e, t, i) {
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
function tq(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tB.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tB.ap,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, c.jsx)(eP, { text: ei.intl.string(ei.t.yhldRB) }),
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: 12,
                            className: tB.rG,
                            children: [
                                (0, c.jsx)(to, { children: ei.intl.format(ei.t.FwjP6W, { days: n }) }),
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
                                (0, c.jsx)(e5.A, {
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
                    className: tB.Hk,
                    children: [(0, c.jsx)(ec, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(tZ, {})],
                }),
            ],
        }),
    });
}
function t$(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: r } = e_(!(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tB.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tB.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 24,
                    className: tB.E2,
                    children: [
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eP, { text: ei.intl.string(ei.t.yhldRB) }),
                                (0, c.jsx)(to, { children: ei.intl.format(ei.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tB.X8,
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
                            className: tB.oF,
                            children: [
                                (0, c.jsx)(e5.A, {
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
                (0, c.jsx)("div", { className: tB.Tg, children: (0, c.jsx)(tX, { containerVisibilityPercentage: r }) }),
            ],
        }),
    });
}
function t0(e) {
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
        p = m ?? (d ? (0, c.jsx)(tC, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tB.kL, tB.Eg, t),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: u()(tB.W2, tB.HQ),
            ref: g,
            children: [
                (0, c.jsxs)(eu.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tB.ZU, tB.GW),
                    children: [
                        o && l,
                        null != i.expiresAt &&
                            (0, c.jsx)(tt, { expiresAt: i.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(eu.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(to, {
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
                                    onClick: () => tQ(r, a, ts.g.CONFIRM_DISCOUNT),
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
                    className: u()(tB.y3, tB.Xx),
                    children: (0, c.jsx)(tY, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function t1(e) {
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
        } = t3(),
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
        _ = (0, q.U9)(I, tJ.pe.TIER_2) ? tJ.pe.TIER_2 : void 0,
        S = null != o && o.status !== eV.Dmq.ACCOUNT_HOLD && o.hasAnyPremiumNitro,
        P = (0, ep.A)(),
        y = P.isFractionalPremiumActive && !S && null == R && !l,
        { visibilityPercentageRef: D, visibilityPercentage: O } = e_(!(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion));
    if (s)
        return p
            ? (0, c.jsx)(t$, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
            : (0, c.jsx)(tq, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g });
    if (E) {
        let e = y
            ? (0, c.jsxs)("div", {
                  className: tB.UJ,
                  children: [
                      (0, c.jsx)(e5.A, {
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
        return (0, c.jsx)(tH, {
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
            ? (0, c.jsx)(t0, {
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
            : (0, c.jsx)(tH, {
                  className: t,
                  headingTop: a,
                  showPill: r,
                  buttonVisibilityRef: g,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
        : (0, c.jsx)("div", {
              className: u()(tB.kL, t),
              "data-testid": "subscriber-nitro-home-hero-header",
              ref: g,
              children: (0, c.jsxs)("div", {
                  className: tB.Qs,
                  ref: D,
                  children: [
                      r && a,
                      (0, c.jsxs)("div", {
                          className: tB.N1,
                          children: [
                              (0, c.jsx)(tz, { containerVisibilityPercentage: O }),
                              l &&
                                  d?.expiresAt != null &&
                                  (0, c.jsx)(tt, { expiresAt: d.expiresAt.toISOString(), className: tB.IZ }),
                              (0, c.jsx)(to, {
                                  children:
                                      l && null != d
                                          ? ei.intl.format(ei.t["3yZP0G"], { percent: d.discount.amount })
                                          : n,
                              }),
                              l &&
                                  null != d &&
                                  null != m &&
                                  (0, c.jsx)(et.E, {
                                      className: tB.jG,
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
                          className: y || l ? tB.UJ : void 0,
                          children: [
                              y &&
                                  (0, c.jsx)(e5.A, {
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
                                      onClick: () => tQ(h, o, ts.g.CONFIRM_DISCOUNT),
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
let [t2, t3] = (0, eA.A)(),
    t6 = function (e) {
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
        if (p === tJ.xc.NONE || r) b = (0, c.jsx)(eP, { text: m });
        else {
            u = !0;
            let e = ei.intl.format(ei.t["yR+oDD"], {
                helpCenterLink: ej.A.getArticleURL(eV.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            b = (0, c.jsx)(eo.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tB.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tB.V_,
                        children: (0, c.jsx)("div", { className: tB.eL, children: (0, c.jsx)(eP, { text: N }) }),
                    }),
            });
        }
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)(t2.Provider, {
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
                children: (0, c.jsx)(t1, { className: t, isInReverseTrial: r, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var t7 = s(820284),
    t5 = s(742589),
    t8 = s(392943),
    t9 = s(285373),
    t4 = s(603202),
    se = s(673992);
let st = function () {
    return (0, c.jsx)(t7.A, {
        section: eV.JJy.NAVIGATION,
        children: (0, c.jsx)(t5.A, {
            className: u()(t4.TQ, se.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: t4.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: se.wk,
                        children: [
                            (0, c.jsx)(em.t, { colorClass: se.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": ei.intl.string(ei.t.Ipxkog),
                                className: se.Ss,
                                children: (0, c.jsx)(t8.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: t4.MQ,
                        children: [
                            (0, c.jsx)(t9.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(es.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var ss = s(325499),
    si = s(562708),
    sn = s(885574),
    sa = s(43990),
    sr = s(993077),
    sl = s(139286),
    sc = s(872725),
    so = s(920050),
    sd = s(51965),
    su = s(375776),
    sm = s(727811),
    sx = s(222652),
    sg = s(428685),
    sf = s(934353);
function sp(e) {
    let { openRewardModal: t } = e,
        s = (0, sx.z)();
    if (s.kind === sx.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: sf.R$,
            children: [
                (0, c.jsx)(e5.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tJ.pe.TIER_2,
                }),
                (0, c.jsx)(ex.$, { variant: "secondary", size: "md", text: ei.intl.string(ei.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === sm.P.CLAIMED
            ? { text: ei.intl.string(sg.default.Plwzgf) }
            : { text: ei.intl.string(ei.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: sf.R$,
                children: [
                    (0, c.jsx)(sd.A, {
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
            s.claimStatus === sm.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: sf.ed,
                    children: [
                        (0, c.jsx)(sn.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(et.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ei.intl.string(sg.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sh(e) {
    let { glowing: t = !1 } = e;
    (0, sl.A)({
        type: si.ImpressionTypes.VIEW,
        name: si.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: so.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ed.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(sa.N, {
        theme: eV.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, sf.kL),
                    children: (0, c.jsx)(sc.A, {
                        cardType: sr.s.CUSTOM,
                        cardClassName: sf.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: sf.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sf.j,
                                    children: [
                                        (0, c.jsx)("div", { className: sf._g }),
                                        (0, c.jsx)("div", { className: sf.$h }),
                                        (0, c.jsx)("div", { className: sf.Rv }),
                                        (0, c.jsx)("div", { className: sf.Lw }),
                                        (0, c.jsx)("div", { className: sf.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: sf.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: sf.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(ee.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sf.DD,
                                            children: ei.intl.string(sg.default.RGT513),
                                        }),
                                        (0, c.jsx)(et.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sf.h_,
                                            children: ei.intl.string(sg.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sp, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sN = s(744064);
function sA(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, sx.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === sx.N.SUBSCRIBE
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
    return (0, c.jsx)(sN.S, {
        id: so.XBOX_PREMIUM_PERK_CARD_ID,
        title: ei.intl.string(sg.default.UVL9tD),
        description: ei.intl.string(sg.default["I+IXr0"]),
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
function sj(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(sA, { ...e }) });
}
var sb = s(700556),
    sC = s(821874);
function sE(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: r } = e,
        l = sC.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(l, null != n && sb.Jx, r), children: a }) : null,
        ],
    });
}
var sT = s(517846),
    sR = s(695366),
    sv = s(27620),
    sI = s(789861),
    s_ = s(592909),
    sS = s(398523),
    sP = s(881373),
    sy = s(555393),
    sD = s(852218),
    sO = s(923650),
    sM = s(612413),
    sk = s(14429),
    sL = s(810889),
    sU = s(264865);
let sG =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sw =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg",
    sB =
        "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg";
function sH() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, s_.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, s_.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sP.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = sS.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, sM.mh)({ location: "useThirdPartyPartnerPerkCards" }),
        r = null === (0, sy.N)(),
        l = (0, ss.b)("useHardwarePartnerPerkCards"),
        { currentDate: d, nDaysInMonth: u } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = l ? void 0 : ei.intl.string(ei.t.y2b7CA),
            m = t
                ? {
                      id: so.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ei.intl.string(sk.default.F0b4Z8),
                      description: ei.intl.formatToPlainString(sk.default["hworR+"], { validDates: (0, sI.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ei.intl.formatToPlainString(sk.default.g7iyvR, { date: (0, sI.mh)() }),
                      caption: (0, c.jsx)("img", { src: sw, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sG,
                      ctaText: ei.intl.string(sk.default.fcopjf),
                      onCtaClick: () =>
                          (0, sO.P)({
                              partnerIds: [sD.Bt],
                              title: ei.intl.string(sk.default.YJsqDS),
                              subtitle: ei.intl.format(sk.default.ieA3V0, {
                                  termsUrl:
                                      "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                              }),
                              modalTeaser: {
                                  title: ei.intl.string(sk.default.Dkm10r),
                                  body: ei.intl.string(sk.default.LHAkT9),
                              },
                              analyticsLocations: e,
                          }),
                      analyticsOptions: { thirdPartyPartner: sD.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = s
                ? {
                      id: so.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: ei.intl.string(sk.default["IcD/7p"]),
                      description: ei.intl.formatToPlainString(sk.default.hausFi, { date: (0, sI.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: ei.intl.string(sk.default.fxF0Jz),
                      caption: (0, c.jsx)("img", { src: sw, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sG,
                      analyticsOptions: { thirdPartyPartner: sD.Bt },
                  }
                : null,
            g = i
                ? {
                      id: so.LOGITECH_3PP_CARD_ID,
                      title: ei.intl.string(sL.default.OlObRa),
                      description: ei.intl.format(sL.default.ZGOJ8R, {
                          discountPercent: sP.aW,
                          termsUrl: ej.A.getArticleURL(eV.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: d.getDate() / u,
                      ctaText: ei.intl.string(ei.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sO.P)({
                              partnerIds: [sD.XY],
                              title: ei.intl.string(sL.default["2I7nK+"]),
                              subtitle: ei.intl.format(sL.default.W8jOD0, {
                                  termsUrl: ej.A.getArticleURL(eV.MVz.LOGITECH_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl: sB,
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sD.XY },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            f = n
                ? {
                      id: so.RECURRING_3P_PROMOTIONS_CARD_ID,
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
                          (0, sO.P)({
                              partnerIds: [sD.KS],
                              title: ei.intl.string(ei.t["7ioAjs"]),
                              subtitle: ei.intl.format(ei.t.LOYRxB, {
                                  helpCenterLink: ej.A.getArticleURL(eV.MVz.RECURRING_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sD.KS },
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
                      id: so.YOUTUBE_3PP_CARD_ID,
                      title: ei.intl.string(sU.default["NNPh/j"]),
                      description: ei.intl.format(sU.default.MrgHvR, {
                          helpCenterUrl: ej.A.getArticleURL(eV.MVz.YOUTUBE_PROMOTION),
                      }),
                      isThirdPartyPerk: !0,
                      pillText: o,
                      backgroundAssetUrl: sB,
                      blurTint: "#2E213D",
                      caption: "YouTube Premium",
                      ctaText: ei.intl.string(sk.default.fcopjf),
                      onCtaClick: () =>
                          (0, sO.P)({
                              partnerIds: [sD.NC],
                              analyticsLocations: e,
                              title: ei.intl.string(sU.default.TDZUui),
                              subtitle: ei.intl.format(sU.default.BTLkvw, {
                                  helpCenterUrl: ej.A.getArticleURL(eV.MVz.YOUTUBE_PROMOTION),
                              }),
                              modalTeaser: {
                                  title: ei.intl.format(sU.default.J8CVYT, {
                                      helpCenterUrl: ej.A.getArticleURL(eV.MVz.YOUTUBE_PROMOTION),
                                  }),
                                  icon: sR.E,
                              },
                              onClose: () => {
                                  sv.Ay.fireSurveyAction(sT.w.YOUTUBE_3PP_MODAL_DISMISSED);
                              },
                          }),
                      analyticsOptions: { thirdPartyPartner: sD.NC },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [l, e, t, s, d, i, u, n, a, r]);
}
var sF = s(762493);
let sV = "xgpp";
function sz(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, ss.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: o } = sH();
    if (!i) return null;
    let d = null != n || null != a || null != r || null != l || null != o;
    return (0, c.jsx)(sE, {
        id: sV,
        sectionClassName: u()(sF.uW, sF.Uv, sF.qr),
        heading: (0, c.jsx)(ee.D, {
            variant: "nitro-sm",
            className: u()(sC.R_, sb.U6),
            children: ei.intl.string(ei.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: sb.JE, children: (0, c.jsx)(sh, { glowing: t === sV }) }),
        grid: d
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(sN.S, { ...n, containerClassName: sC.Nr, glowing: s === n.id }),
                      (0, c.jsx)(sj, { containerClassName: sC.Nr }),
                      null != o &&
                          (0, c.jsx)(sN.S, {
                              ...o,
                              containerClassName: sC.Nr,
                              glowing: s === o.id,
                              autoClickCta: s === o.id,
                          }),
                      null != r && (0, c.jsx)(sN.S, { ...r, containerClassName: sC.Nr, glowing: s === r.id }),
                      null != l && (0, c.jsx)(sN.S, { ...l, containerClassName: sC.Nr, glowing: s === l.id }),
                      null != a && (0, c.jsx)(sN.S, { ...a, containerClassName: sC.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var sW = s(313133),
    sY = s(67423);
let sK = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, tv.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(tR.animated.div, {
        className: u()(sW.iE, { [sW.q4]: !t }),
        style: l,
        children: (0, c.jsxs)("div", {
            className: sW.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sY, className: sW.oU }),
                (0, c.jsxs)("div", {
                    className: sW.iQ,
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
                                    initialStep: ts.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sX = s(761508),
    sZ = s(449543),
    sJ = s(387103);
function sQ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: sJ.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sq(e) {
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
function s$(e) {
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
var s0 = s(345394);
function s1(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: s0.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s2 = s(163665);
function s3(e) {
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
function s6(e) {
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
function s5(e) {
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
var s8 = s(996682);
function s9(e) {
    let {
        color: t = tg.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, s8.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function s4(e) {
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
var ie = s(78701);
function it(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: ie.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var is = s(462887),
    ii = s(736653),
    ia = s(259065),
    ir = s(206835),
    il = s(591179),
    ic = s(462463),
    io = s(219882),
    id = s(19886),
    iu = s(425713),
    im = s(696292),
    ix = s(192444),
    ig = s(617986),
    ip = s(892227),
    ih = s(81466),
    iN = s(249755),
    iA = s(749012);
let ij = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, K.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ip.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: iA.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: iA.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iA.Pf,
                            children: [
                                (0, c.jsx)(ih.CalendarIcon, { size: "sm", color: tg.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(et.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ei.intl.string(iN.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ei.intl.format(iN.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: iA.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: iA.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iA.Pf,
                            children: [
                                (0, c.jsx)(tx.C, { size: "sm", color: tg.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(et.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ei.intl.string(iN.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ei.intl.format(iN.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ib = s(190107),
    iC = s(799544);
function iE(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, ix.lk)(ib.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, K.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: so.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ei.intl.string(iN.default.hx5AFp),
                          description: ei.intl.format(iN.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(iC.lH, iC.yK),
                          footerContent: (0, c.jsx)(ij, {}),
                          ctaText: ei.intl.string(iN.default.BxjHiu),
                          onCtaClick: () => (0, P.pX)(eV.BVt.COLLECTIBLES_SHOP_WITH_TAB(tj.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: so.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ei.intl.string(ei.t.Csf5Ol),
                          description: ei.intl.format(ei.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ei.intl.string(ei.t.jVcuVY),
                          onCtaClick: () => (0, ig.mA)({ fromContent: im.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: iC.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iT = s(975807),
    iR = s(95035),
    iv = s(989790),
    iI = s(88001),
    i_ = s(259589),
    iS = s(817577);
function iP() {
    (0, iT.A)(iI.TE);
}
function iy(e) {
    let t = (0, iv.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ed.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, S.A)({
                      subscriptionTier: tJ.pe.TIER_2,
                      initialPlanId: tJ.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: so.PREMIUM_GROUP_CARD_ID,
                      title: ei.intl.string(i_.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              ei.intl.formatToPlainString(i_.default.JlyGQj, {
                                  totalSeats: iI.aw,
                                  premiumGroupProductName: (0, iI.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: iC.LF,
                                  children: (0, c.jsx)(iR.A, {
                                      onClick: iP,
                                      children: ei.intl.string(i_.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ei.intl.string(ei.t.oW0eUd),
                      primaryAsset: iS,
                      ctaIcon: em.t,
                      ctaIconPosition: "start",
                      ctaText: ei.intl.string(ei.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iD = s(562819),
    iO = s(793943),
    iM = s(757036),
    ik = s(473933),
    iL = s(655752);
let iU = (0, w.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iG = s(764231),
    iw = s(627380),
    iB = s(30084),
    iH = s(814014),
    iF = s(714206);
let iV =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iz =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iW =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iY() {
    let e,
        t,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, il.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: d } = sH(),
        m = (0, ss.b)("premium_subscriber_home_rewards"),
        g = (0, ic.A)({ analyticsLocations: s }),
        f = (0, o.useCallback)(() => {
            (0, eN.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, ia.L)({ analyticsLocations: s }),
            );
        }, [s]),
        p = (0, o.useCallback)(() => {
            (0, eN.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, iD.L)({ analyticsLocations: s }),
            );
        }, [s]),
        h = (0, o.useCallback)(() => {
            (0, eN.openUserSettings)(eh.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        N = (function (e) {
            let { fractionalState: t } = (0, ep.A)(),
                s = t === tJ.xc.FP_ONLY,
                i = (0, id.$F)(),
                n = (0, id.Xb)(),
                a = i?.status === id.Wo.UPCOMING || s,
                r = i?.status === id.Wo.WITHHELD,
                l = a || r,
                c = (0, iu.N)(i?.id),
                d = (function () {
                    let e = (0, id.$F)(),
                        t = (0, iL.P)(),
                        s = (0, id.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iU.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === id.Wo.WITHHELD) return null;
                    let n = e9()(),
                        a = e9()(s),
                        r = i || e.status === id.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        c = a.clone().add(r, "months"),
                        o = a.clone().add(l, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion) && !l,
                g = (0, iw.t)(),
                f = (0, iL.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != f ? ei.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iG.T)(tJ.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === id.Wo.UPCOMING
                              ? ei.intl.formatToPlainString(ei.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === id.Wo.WITHHELD
                                ? ((0, iG.T)(i.id, i.tenureReqNumMonths) ?? void 0)
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
                                  (0, iG.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != c ? (r = l || m ? c.standard : c.ambientLarge) : s && (r = iF),
                    {
                        id: so.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ei.intl.string(i.nameUnformattedNitro) : s ? ei.intl.string(ei.t.tx9Fvw) : "",
                        pillText: ei.intl.string(ei.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iH.pq, { [iH.rX]: l, [iH.kE]: m }),
                        caption: null != n ? ei.intl.formatToPlainString(ei.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: ei.intl.string(ei.t.jVcuVY),
                        onCtaClick: () => (0, iB.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, l, m, n, d, s, g, f, e]);
        })(s),
        { nitroOrbsRewardsCard: b, questOrbMultiplierCard: C } = iE("useWhatsNewPerkCards"),
        E =
            ((e = (0, iM.L)(tJ.PremiumTypes.TIER_2)),
            (t = (0, io.rX)()),
            (0, o.useMemo)(
                () =>
                    e && t
                        ? {
                              id: so.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: ei.intl.string(ik.default["/cV3ka"]),
                              description: ei.intl.string(ik.default.H523FI),
                              primaryAsset: (0, c.jsx)(s2.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [e, t],
            )),
        T = iy(s);
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
                    id: so.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ei.intl.string(ei.t.OLtTrt),
                    description: ei.intl.string(ei.t["di/pXR"]),
                    onCtaClick: i ? g : f,
                    ctaText: ei.intl.string(ei.t.jVcuVY),
                    primaryAsset: iV,
                },
                {
                    id: so.CLIENT_THEMES_CARD_ID,
                    title: ei.intl.string(ei.t.acc6h6),
                    description: ei.intl.formatToPlainString(ei.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iW,
                    ctaText: ei.intl.string(ei.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iO.nf)(iO.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: so.PERMADECOS_CARD_ID,
                    title: ei.intl.string(ei.t.L14NZN),
                    description: ei.intl.string(ei.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(it, { alt: "", ariaHidden: !0 }),
                    ctaText: ei.intl.string(ei.t.jVcuVY),
                    onCtaClick: i ? g : p,
                },
                {
                    id: so.CUSTOM_APP_ICONS_CARD_ID,
                    title: ei.intl.string(ei.t["GU+wqh"]),
                    description: ei.intl.string(ei.t["1uPk1Z"]),
                    primaryAsset: iz,
                    ctaText: ei.intl.string(ei.t.y9TxXV),
                    onCtaClick: h,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, N), null != E && e.splice(2, 0, E), e.length > s && e.splice(s, e.length - s), e);
    }, [N, b, C, E, T, f, h, p, g, i, n, a, r, l, d, m]);
}
var iK = s(355097);
let iX = "/assets/1eb1b74667b4c0f0.svg",
    iZ = "/assets/983b60e4fcaf973b.svg";
var iJ =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let iQ = [
    { id: "bestof", label: () => ei.intl.string(ei.t.q1u7nQ) },
    { id: "appearance", label: () => ei.intl.string(ei.t.CUnZkZ) },
    { id: "upgrades", label: () => ei.intl.string(ei.t.KC5q8v) },
    { id: "vip", label: () => ei.intl.string(ei.t.DjEAcv) },
];
var iq = s(18290);
function i$(e) {
    e.stopPropagation();
}
function i0(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, ii.DP)(),
                t = (0, il.X)("useFavoritesPerkCards"),
                s = (0, id.Lh)(),
                i = (0, iu.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, ir.A)({ scrollPosition: iK._F.TRY_IT_OUT, analyticsLocations: n }),
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
                x = (0, ic.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, eN.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, ia.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iY(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = iE("useFavoritesPerkCards"),
                b = iy(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: so.SERVER_BOOSTS_CARD_ID,
                            title: ei.intl.formatToPlainString(ei.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ei.intl.formatToPlainString(ei.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, c.jsx)(sQ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: so.PROFILES_CARD_ID,
                            title: ei.intl.string(ei.t.xDRab3),
                            description: ei.intl.string(ei.t.yn6fWA),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sq, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: so.HD_VIDEO_CARD_ID,
                            title: ei.intl.string(ei.t["/mQ5gg"]),
                            description: ei.intl.string(ei.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(s$, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: so.CLIENT_THEMES_CARD_ID,
                            title: ei.intl.string(ei.t.acc6h6),
                            description: ei.intl.formatToPlainString(ei.t.WQazjs, { themeCount: 20 }),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: iW,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: so.MORE_EMOJIS_CARD_ID,
                            title: ei.intl.string(ei.t.D8vIDT),
                            description: ei.intl.string(ei.t.DRMecB),
                            primaryAsset: (0, c.jsx)(s1, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: so.LARGE_UPLOADS_CARD_ID,
                            title: ei.intl.string(ei.t.nL1WZV),
                            description: (0, io.M6)({
                                legacyCopy: ei.intl.formatToPlainString(ei.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: ei.intl.formatToPlainString(ei.t.teOTfv, {
                                    maxFileSize: (0, eb.EJ)(tJ.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(s2.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: so.CUSTOM_APP_ICONS_CARD_ID,
                            title: ei.intl.string(ei.t["GU+wqh"]),
                            description: ei.intl.string(ei.t["1uPk1Z"]),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iz,
                            categories: ["appearance"],
                        },
                        {
                            id: so.ENTRANCE_SOUNDS_CARD_ID,
                            title: ei.intl.string(ei.t.WJfCPi),
                            description: ei.intl.string(ei.t.liQKJR),
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: so.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ei.intl.string(ei.t.OLtTrt),
                            description: ei.intl.string(ei.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: ei.intl.string(ei.t.jVcuVY),
                            primaryAsset: iV,
                            categories: ["appearance"],
                        },
                        {
                            id: so.CUSTOM_SOUNDS_CARD_ID,
                            title: ei.intl.string(ei.t["Cu/oFd"]),
                            description: ei.intl.string(ei.t.czj2aa),
                            primaryAsset: (0, c.jsx)(s3, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: so.SPECIAL_STICKERS_CARD_ID,
                            title: ei.intl.string(ei.t.MQoVeb),
                            description: ei.intl.string(ei.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: iC.Uc,
                                children: (0, c.jsx)(s6, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: so.SUPER_REACTIONS_CARD_ID,
                            title: ei.intl.string(ei.t.qERvAA),
                            description: ei.intl.string(ei.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(s7, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: so.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ei.intl.string(ei.t.ssVDYQ),
                            description: ei.intl.string(ei.t.aUSRMa),
                            primaryAsset: (0, is.M)(e) ? iX : iZ,
                            categories: ["upgrades"],
                        },
                        {
                            id: so.EARLY_ACCESS_CARD_ID,
                            title: ei.intl.string(ei.t["g/KRY6"]),
                            description: ei.intl.string(ei.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(s5, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: so.BADGE_CARD_ID,
                            title: ei.intl.string(ei.t.Bn3CtB),
                            description: ei.intl.string(ei.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(s9, { color: tg.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: so.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ei.intl.string(ei.t["MTD+7w"]),
                            description: ei.intl.string(ei.t.Bhs0s6),
                            ctaText: ei.intl.string(ei.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(s4, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: so.PERMADECOS_CARD_ID,
                            title: ei.intl.string(ei.t.L14NZN),
                            description: ei.intl.string(ei.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(it, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, b, a, r, l, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iJ.BEST_OF_NITRO),
        r = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: iq.uW,
        children: [
            (0, c.jsx)(ee.D, { variant: "nitro-sm", children: ei.intl.string(ei.t["Uh3+CA"]) }),
            (0, c.jsx)(sX.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iq.Lq,
                "aria-label": ei.intl.string(ei.t["Uh3+CA"]),
                children: iQ.map((e) =>
                    (0, c.jsx)(sX.V.Item, { id: e.id, className: iq.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sZ.A,
                {
                    gap: 20,
                    className: iq.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sN.S,
                                { ...e, glowing: t === e.id, containerClassName: iq.Ui, onFocus: i$ },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var i1 = s(72979);
let i2 = function (e) {
    let { className: t } = e,
        s = (0, ii.DP)();
    return (0, c.jsx)("img", {
        className: u()(i1.D, t),
        src: (0, is.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i3 = s(684251);
let i6 = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, c.jsxs)("div", {
              className: u()(i3.kL, i3.Gd, i3.Eg),
              children: [(0, c.jsx)(i2, {}), (0, c.jsx)(st, {}), n],
          })
        : (0, c.jsx)($.h, { color: "nitro-pink", className: u()(i3.kL, i3.Gd), offsetBottom: i, children: n });
};
function i7(e) {
    let { glowingPerkId: t = null } = e,
        s = iY();
    return (0, c.jsx)(sE, {
        sectionClassName: sC.uW,
        heading: (0, c.jsx)(ee.D, { variant: "nitro-sm", className: sC.R_, children: ei.intl.string(ei.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    sN.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === so.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(sC.Nr, { [sC.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function i5(e, t, s, i) {
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
var i8 = s(92737);
let i9 = "/assets/cd2be35d285d4675.svg",
    i4 = (e) => {
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
                    s = e.get(i8.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        i5(N ?? "", null != N, E, T);
        let [R, v] = o.useState(!1),
            S = (0, J.p)(),
            P = o.useRef(null),
            [y, D] = o.useState(!1),
            O = null != S && null != d && d.status === eV.Dmq.CANCELED,
            L = (0, q.iU)(tJ.gD.PREMIUM_MONTH_TIER_2, S, d),
            G = !y && O,
            w = (0, x.bG)([X.A], () => (null != t ? X.A.getUserProfile(t) : null)),
            B = null != d && d.status === eV.Dmq.CANCELED,
            F = i && !s && !B,
            $ = n && (s || B),
            { analyticsLocations: ee } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [et, es] = o.useState(!1);
        return null != w && (p || null != h)
            ? (0, c.jsxs)(W.Gt, {
                  className: u()(i3.xW, i3.Gd),
                  ref: r,
                  children: [
                      (0, c.jsx)(i6, {
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
                                      children: (0, c.jsx)(t6, {
                                          buttonVisibilityRef: P,
                                          className: i3.v1,
                                          userDiscountOffer: S,
                                          discountedPrice: L,
                                      }),
                                  }),
                                  (0, c.jsx)(i7, { glowingPerkId: C }),
                                  (0, c.jsx)(sz, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(i0, { glowingPerkId: C }),
                                  (0, c.jsx)(ea, {
                                      className: i3.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eV.liQ.NITRO_HOME, section: eV.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: i3.hz }),
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
                                      children: (0, c.jsx)("div", { ref: l, className: i3._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: i9,
                                      className: i3.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ei.intl.string(ei.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      O &&
                          null != L &&
                          (0, c.jsx)(sK, {
                              isVisible: G && R,
                              premiumSubscription: d,
                              churnDiscountOffer: S,
                              discountedPrice: L,
                          }),
                  ],
              })
            : F || $
              ? (0, c.jsxs)("div", {
                    className: u()(i3.kL, i3.Lq, i3.TN, i3.Eg),
                    children: [
                        (0, c.jsx)(st, {}),
                        (0, c.jsx)("div", { className: i3.S, children: (0, c.jsx)(g.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(i3.kL, i3.Lq), children: (0, c.jsx)(g.y, {}) });
    };
var ne = s(286320),
    nt = s(727949),
    ns = s(440005),
    ni = s(26508);
let nn = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var na = s(860839);
let nr =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
function nl(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: nr,
        srcSet: `${nr} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var nc = s(37537),
    no = s(783420),
    nd = s(204413),
    nu = s(245383),
    nm = s(824069),
    nx = s(785007),
    ng = s(947910);
function nf(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: ng.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: ng.fQ,
                                children: (0, c.jsx)(td.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(eu.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: ng.qU,
                            children: [
                                (0, c.jsxs)(eu.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: ng.NI,
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
                                    className: ng.br,
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
                                                className: ng.yD,
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
                radioBarClassName: u()(ng.tG, { [ng.uA]: s, [ng.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nx.$d, {
        ...i,
        options: n,
        value: t,
        size: nx.r9.NOT_SET,
        className: ng.ul,
        withTransparentBackground: !0,
    });
}
var np = s(773669),
    nh = s(97352),
    nN = s(252424),
    nA = s(526292),
    nj = s(186223),
    nb = s(369827),
    nC = s(803496);
function nE(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nb.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nC.A)({
            activeSubscription: t,
            skuIDs: [(0, eb.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nT(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nR(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tJ.Ff.YEAR
          ? ei.intl.format(ei.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : ei.intl.format(ei.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nv = s(614488);
function nI(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(no.A, {
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
function n_(e) {
    let { skuId: t, className: s } = e,
        i = t === tJ.pe.TIER_2,
        n = (0, is.q)((0, ii.Ay)()),
        a = (0, nc.c)("PlanSelectCard"),
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
                n = tJ.En[t],
                a = tJ.zE[t],
                r = t === tJ.pe.TIER_2,
                l = nE(t),
                c = (0, eR.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, eb.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tJ.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tJ.gD.PREMIUM_YEAR_TIER_0, tJ.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                f = (0, eT.O)(),
                p = (0, nA.k5)(),
                h = (0, x.bG)([np.default], () => np.default.locale),
                N = (0, q.U9)(f, t),
                A = (0, q.N1)(n),
                j = (0, q.N1)(a),
                [b, C] = (0, x.yK)([nh.A], () => [nh.A.get(n), nh.A.get(a)], [n, a]),
                E = null != b ? (0, eb.sS)(b, l) : null,
                T = null != C ? (0, eb.sS)(C, l) : null,
                R =
                    N && f?.discount.amount != null && !p
                        ? ei.intl.formatToPlainString(ei.t.IAybsG, {
                              discount: (0, nN.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                v = f?.discount?.planIds,
                I = nT(a, N, v, j, T),
                _ = nT(n, N, v, A, E),
                S = f?.discount.userUsageLimitInterval,
                P = f?.discount.userUsageLimit ?? tJ.OJ,
                y = !r || I || _ || null == C ? null : (0, nj.Cj)(C, !1, l),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tJ.pe.TIER_2 ? null : s && !i ? tJ.En[t] : tJ.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == s || (s === n && m) ? O : s,
                L = [
                    {
                        value: a,
                        primaryText: ei.intl.string(ei.t["/Q4HRN"]),
                        primarySubText:
                            (I
                                ? nR({
                                      expectedUsageInterval: tJ.Ff.YEAR,
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
                            ? nR({
                                  expectedUsageInterval: tJ.Ff.MONTH,
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
        { buttonText: j } = (0, nu.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nd.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, c.jsxs)(eu.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nv.Ux,
            children: [
                (0, c.jsx)(eu.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nv.MY,
                    children: (0, c.jsx)(ee.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nv.ck : nv.JJ,
                        children: i ? ei.intl.string(ei.t.lG6a5x) : ei.intl.string(ei.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(eu.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nv.qT,
                    children: i
                        ? (0, c.jsx)(na.ZP, {
                              featureSet: na.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(na.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(nm.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nv.qS,
                          role: "separator",
                          children: (0, c.jsx)(et.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nv.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tJ.WT.DAY:
                                          if (t % 7 == 0) return ei.intl.format(ei.t["1MYPH0"], { weeks: t / 7 });
                                          return ei.intl.format(ei.t.pYfIoO, { days: t });
                                      case tJ.WT.MONTH:
                                          return ei.intl.format(ei.t["96hTLe"], { months: t });
                                      case tJ.WT.YEAR:
                                          return ei.intl.format(ei.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(l.interval, l.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nv.yF }),
                (0, c.jsxs)("div", {
                    className: nv.qr,
                    children: [
                        (0, c.jsx)(nf, { planRadioOptions: f, value: p ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nI, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = u()(nv.Nr, s, { [nv.Fw]: i });
    return i
        ? (0, c.jsxs)($.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, c.jsx)("div", {
                      className: nv.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(nl, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, c.jsx)("div", { className: E, children: C });
}
function nS(e) {
    let { className: t } = e,
        s = (0, is.q)((0, ii.Ay)()),
        i = (0, nc.c)("PlanSelectPremiumGroupCard"),
        n = (0, eT.p)(),
        a = null != n,
        r = nE(tJ.pe.TIER_2),
        l = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eU.A)({ userId: l?.id, size: eO._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([nh.A], () => nh.A.get(tJ.gD.PREMIUM_GROUP_MONTH)),
        f = (0, q.N1)(tJ.gD.PREMIUM_GROUP_MONTH),
        p = a
            ? ei.intl.format(i_.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, iI.DP)(),
              })
            : ei.intl.string(ei.t["2pG5Ga"]),
        h = (0, c.jsx)(no.A, {
            subscriptionTier: tJ.pe.TIER_2,
            initialPlanId: tJ.gD.PREMIUM_GROUP_MONTH,
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
        className: u()(nv.Nr, t),
        children: (0, c.jsxs)(eu.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nv.Ux,
            children: [
                (0, c.jsxs)(eu.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nv.MY,
                    children: [
                        (0, c.jsx)(ee.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nv.ck : nv.JJ,
                            children: ei.intl.string(i_.default.eSKiXk),
                        }),
                        null != l &&
                            (0, c.jsxs)(eu.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nv.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nv.uA,
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
                                        className: nv.VL,
                                        children: (0, c.jsxs)(et.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", iI.LM],
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
                    className: nv.qT,
                    children: (0, c.jsx)(na.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nv.yF }),
                (0, c.jsxs)("div", {
                    className: nv.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nv.ec,
                            children: [
                                (0, c.jsx)(et.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: ei.intl.string(i_.default.SvSwga),
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
function nP(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, na.pw)(t),
        a = (0, iv.PA)(),
        r = (0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        l = { [nv.iR]: !r };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(eu.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nv.oB, s),
            children: [
                (0, c.jsx)(ee.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nv.op,
                    children: ei.intl.string(ei.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nv.kR, { [nv.BQ]: a }),
                    children: [
                        (0, c.jsx)(n_, { skuId: tJ.pe.TIER_0, className: u()(nv.rz, l) }),
                        (0, c.jsx)(n_, { skuId: tJ.pe.TIER_2, className: u()(nv.Rv, l) }),
                        a && (0, c.jsx)(nS, { className: u()(nv.zz, l) }),
                    ],
                }),
            ],
        }),
    });
}
var ny = s(226830),
    nD = s(366010),
    nO = s(303136);
let nM = function (e) {
    let t,
        { className: s } = e,
        i = (0, tT.TM)(),
        n = (0, nD.q)((0, ii.Ay)());
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
                nO.A,
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
var nk =
        (((l = {}).HOME = "home"),
        (l.WHATS_NEW = "whatsNew"),
        (l.BEST_OF_NITRO = "bestOfNitro"),
        (l.PLANS = "plans"),
        (l.COMPARE = "compare"),
        l),
    nL = s(352756);
let nU = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, tv.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: eV.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(tR.animated.div, {
        className: nL.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nL.U,
            children: [
                (0, c.jsx)(e5.A, {
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
var nG = s(573710);
let nw = function () {
    let e = (0, tE.bG)([eg.Ay], () => eg.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nG.BI,
                children: (0, c.jsx)(tP, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: t_.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tV, alt: "", className: nG.Q }),
                }),
            }),
            (0, c.jsx)(tD, {
                isMotionReduced: e,
                boltContainerClassName: nG.nJ,
                carContainerClassName: nG.IN,
                hammerContainerClassName: nG.Gj,
                keyContainerClassName: nG.FV,
                starContainerClassName: nG.E1,
                boltAssetClassName: nG.j7,
                carAssetClassName: nG.or,
                hammerAssetClassName: nG.Wv,
                keyAssetClassName: nG.rs,
                starAssetClassName: nG.OY,
            }),
        ],
    });
};
var nB = s(989756);
let nH = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nB.kL,
            children: (0, c.jsxs)("div", {
                className: nB.hQ,
                children: [
                    (0, c.jsx)(nw, {}),
                    (0, c.jsx)(ee.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nB.RH,
                        children: ei.intl.string(ei.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nH.displayName = "PremiumMarketingFooter";
var nF = s(939249);
let nV = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nk.HOME]: ei.intl.string(ei.t.uGRXjS),
            [nk.WHATS_NEW]: ei.intl.string(ei.t["mfcR/v"]),
            [nk.BEST_OF_NITRO]: ei.intl.string(ei.t.xQKkE8),
            [nk.PLANS]: ei.intl.string(ei.t.wyNMnm),
            [nk.COMPARE]: ei.intl.string(ei.t.pwD7If),
        },
        n = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(t5.A, {
        className: t4.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: t4.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: t4.wG,
                    children: [
                        (0, c.jsx)(em.t, { className: t4.nE, colorClass: t4.oG }),
                        (0, c.jsx)("div", {
                            className: t4.zc,
                            role: "tablist",
                            "aria-label": ei.intl.string(ei.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nF.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: t4.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(et.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: t4.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: t4.MQ,
                    children: [
                        null != n && (0, c.jsx)(t9.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(es.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nz = s(704333),
    nW = s(414499),
    nY = s(597770),
    nK = s(500060),
    nX = s(866665),
    nZ = s(406860),
    nJ = s(870975),
    nQ = s(698834);
function nq() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nZ.A)({ boxType: su.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nz.B, text: ei.intl.string(sg.default.MUypiB) },
            { icon: nW.h, text: ei.intl.string(sg.default.ec5Rdd) },
            { icon: nY.GiftIcon, text: ei.intl.string(sg.default["9t2CzW"]), tooltip: sg.default.AyECej },
            { icon: nK.o, text: ei.intl.string(sg.default.R7YJAY) },
        ];
    return (0, c.jsx)(z.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nQ.iE,
            children: (0, c.jsxs)("div", {
                className: nQ.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nQ.j,
                        children: [
                            (0, c.jsx)("div", { className: nQ._g }),
                            (0, c.jsx)("div", { className: nQ.$h }),
                            (0, c.jsx)("div", { className: nQ.Rv }),
                            (0, c.jsx)("div", { className: nQ.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nQ.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nQ.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(ee.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nQ.R_,
                                                children: ei.intl.string(sg.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nQ.yf,
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
                                                                            className: nQ.Jn,
                                                                            children: (0, c.jsx)(nX.m, {
                                                                                text: ei.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    sn.CircleInformationIcon,
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
                                                        className: nQ.xF,
                                                        children: (0, c.jsx)(e5.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tJ.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nQ.WE,
                                        children: (0, c.jsx)(et.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ei.intl.format(sg.default.KDKdWi, { termsLink: (0, nJ.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nQ.r1,
                                children: (0, c.jsx)("img", {
                                    className: nQ.wm,
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
var n$ = s(750338),
    n0 = s(19290),
    n1 = s(505051);
function n2(e) {
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
        className: u()(n1.boxBackdrop, t),
        children: [
            (0, c.jsx)(ee.D, {
                className: n1.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, c.jsx)("div", { className: n1.highlightBento, children: l }),
            (0, c.jsx)("div", {
                className: n1.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n0.A0.SMALL;
                            break;
                        case 2:
                            s = n0.A0.MEDIUM;
                            break;
                        default:
                            s = n0.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                n$.A,
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
let n3 = o.memo(function (e) {
        let t = (0, ss.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, n0.Ay)(t);
        return (0, c.jsx)(n2, {
            boxLayout: s,
            title: ei.intl.string(ei.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(nq, {}) : null,
            ...e,
        });
    }),
    n6 = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, n0.Ay)();
        return (0, c.jsx)(n2, { boxLayout: t, title: ei.intl.string(ei.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    n7 = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var n5 = s(236834),
    n8 = s(540504);
function n9(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eU.A)({ userId: t?.id, size: eO._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: n8.$6,
        children: (0, c.jsxs)("div", {
            className: n8.sc,
            children: [
                (0, c.jsx)("div", {
                    className: n8.kR,
                    children: (0, c.jsx)(eM.eu, { src: s, "aria-label": t.username, size: eO._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(ee.D, {
                    variant: "heading-sm/normal",
                    className: n8.FS,
                    color: "text-strong",
                    children: ei.intl.format(ei.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var n4 = s(579245),
    ae = s(369805);
let at = function () {
    let e = (0, ae.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eP, { text: e });
};
function as() {
    let e = (0, x.bG)([nh.A], () => nh.A.getForSkuAndInterval((0, eb.mH)(tJ.pe.TIER_0), tJ.WT.MONTH));
    return null != e ? (0, eb.sS)(e) : "\u2026";
}
var ai = s(508556);
let an = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tE.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        i = (0, tT.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: ai.YU,
        children: [
            (0, c.jsx)(tk, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: ai.wG,
                assetClassName: ai.lu,
            }),
            (0, c.jsx)(tD, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: ai.nJ,
                carContainerClassName: ai.IN,
                hammerContainerClassName: ai.Gj,
                keyContainerClassName: ai.FV,
                starContainerClassName: ai.E1,
                boltAssetClassName: ai.j7,
                carAssetClassName: ai.or,
                hammerAssetClassName: ai.Wv,
                keyAssetClassName: ai.rs,
                starAssetClassName: ai.OY,
            }),
        ],
    });
};
var aa = s(14057);
let ar = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = as(),
            l = n7.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, n5.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: g } = e_(
                !(0, x.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
            ),
            f = (0, ne.b)(),
            p = !d && f.length > 0,
            h = (0, ev.c)(er.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            b = (0, nA.ar)() && !N,
            C = (0, eT.O)(),
            E = (null != C && tJ.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(aa.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: aa.hQ,
                        children: [
                            (0, c.jsx)(an, { containerVisibilityPercentage: g }),
                            b && (0, c.jsx)(at, {}),
                            (0, c.jsx)("div", {
                                className: aa.s8,
                                children: (0, c.jsx)(tl.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(ee.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: aa.wx,
                                        children: ei.intl.string(ei.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: aa.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: aa.eZ,
                                            children: (0, c.jsx)(n9, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: aa.Qn,
                                            children: (0, c.jsx)(n4.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: b ? aa.es : aa.UJ,
                                        children: [
                                            (0, c.jsx)(e5.A, {
                                                size: "md",
                                                fullWidth: b,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == i ? tJ.pe.NONE : i,
                                                buttonTextOverride: E ? ei.intl.string(ei.t["2pG5Ga"]) : void 0,
                                            }),
                                            !b && (0, c.jsx)(es.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: aa.iQ,
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
var al = s(820081),
    ac = s(140735),
    ao = s(401432),
    ad = s(580630),
    au = s(795269),
    am = s(84483),
    ax = s(763052),
    ag = s(55647),
    af = s(202600);
function ap(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(al.B, { size: "sm", color: tg.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ac.A, { children: ei.intl.string(ei.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ao.a, { size: "xs", color: tg.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ac.A, { children: ei.intl.string(ei.t.l4qZrp) }),
              ],
          });
}
function ah(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(ag.nM, ag.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: ag.nx,
                children: (0, c.jsx)(et.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: ag.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(et.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(ap, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: ag.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(et.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(ap, { includes: !!i.includes }),
            }),
        ],
    });
}
function aN(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(ag.nM, ag.Gf),
                children: (0, c.jsxs)("td", {
                    className: ag.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(ee.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(et.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(ah, { ...e }, e.id)),
        ],
    });
}
function aA(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tJ.PremiumTypes.TIER_0 ? ei.intl.string(ei.t.tUbSDK) : ei.intl.string(ei.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: ag.nn,
        children: [
            (0, c.jsxs)("div", {
                className: ag.KS,
                children: [
                    (0, c.jsx)(em.t, { colorClass: ag.oG }),
                    (0, c.jsx)(ee.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(ee.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function aj(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, ad.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: ag.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ag.Cr,
                    children: (0, c.jsx)(ee.D, { variant: "heading-xl/bold", children: ei.intl.string(ei.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ag.Hn,
                    children: (0, c.jsx)(aA, {
                        premiumType: tJ.PremiumTypes.TIER_0,
                        priceString: (0, ad.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: ag.Hn,
                    children: (0, c.jsx)(aA, { premiumType: tJ.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let ab = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tJ.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, eR.V)(),
            l = r?.subscriptionTrial?.skuId,
            d = (0, eT.O)(),
            m = (0, q.YJ)(d),
            x = null != d && (0, q.U9)(d, tJ.pe.TIER_2) && m === tJ.gD.PREMIUM_MONTH_TIER_2,
            g = (0, q.N1)(m),
            f = null != g ? `${g}/${(0, eb.FJ)(tJ.WT.MONTH)}` : "",
            p = (0, eb.JM)(tJ.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eb.JM)(tJ.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, ss.b)("premium_marketing_comparison"),
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
                            label: ei.intl.string(ax.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, ix.lk)(ib.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = sS.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sP.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, am.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ei.intl.string(ei.t.NG1e6l),
                            subtitle: ei.intl.format(sg.default.uJcbMv, {
                                termsLink: ej.A.getArticleURL(eV.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ei.intl.string(sg.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        r &&
                            s.rows.push({
                                id: 25,
                                label: ei.intl.string(sg.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            s.rows.push({
                                id: 26,
                                label: ei.intl.string(sL.default["gc2sa/"]),
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
                                label: ei.intl.string(iN.default["20tmSN"]),
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
                                    tier0ColumnData: { text: (0, eb.EJ)(tJ.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eb.EJ)(tJ.PremiumTypes.TIER_2) },
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
                                        numBoosts: tJ.M4,
                                        percentageOff: (0, ad.l9)(np.default.locale, tJ.oX / 100),
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
            t = (0, c.jsx)(au.R, { className: u()(ag.Io, ag.SP), text: e });
        }
        let b = l === tJ.pe.TIER_0 || n === tJ.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(ag.zr, s),
                children: [
                    (0, c.jsx)(ee.D, {
                        className: ag.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: ei.intl.string(ei.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: ag.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(ag.fO, { [ag.Vd]: b, [ag.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: ag.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: ag.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: af, alt: "", className: ag.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: ag.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: ag.tp,
                                children: [
                                    (0, c.jsx)(aj, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(aN, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    aC = function (e) {
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
var aE = s(818348),
    aT = s(773188);
function aR(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nP, { innerRef: t }) : (0, c.jsx)(ny.jP, { innerRef: t });
}
let av = () => {
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
        v = null !== R && R !== tJ.pe.TIER_2 ? tJ.pe.TIER_2 : null,
        S = (0, eC.cg)(),
        { analyticsLocations: P } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        C(!0);
    }, []);
    let y = (0, s_.A0)({ location: "PremiumMarketingHome" }),
        D = (0, ni.DK)(ns.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: O } = (0, ix.lk)(ib.rE.NITRO_HOME_MARKETING),
        L = D && O ? n0.NI.COMBINED_ORBS : O ? n0.NI.ORB_MULTIPLIER : D ? n0.NI.ORB_REWARDS : null,
        U = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? L
                : t === n0.NI.THREE_P_PROMOTIONS
                  ? y
                      ? n0.NI.CALL_OF_DUTY
                      : n0.NI.THREE_P_PROMOTIONS
                  : null;
        }, [y, e.search, L]);
    i5(U ?? "", null != U);
    let { navBarSections: G, activeSectionId: w } = aC([nk.HOME, nk.WHATS_NEW, nk.BEST_OF_NITRO, nk.PLANS, nk.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: Y } = G,
        K = (function (e) {
            let { location: t } = e;
            return nn.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, c.jsxs)("div", {
            ref: s,
            className: u()(aT.kL, aT.Gd, aT.iI, { [aT.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nM, { className: aT.yH }),
                (0, c.jsx)(nV, { navBarSections: G, activeSectionId: w }),
                (0, c.jsxs)("div", {
                    className: aT.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: aT.qY,
                            ref: B.ref,
                            children: (0, c.jsx)(z.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(ar, {
                                    ref: n,
                                    subscriptionTier: v,
                                    isEligibleForBogoPromotion: S,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: aT.So,
                            ref: H.ref,
                            children: (0, c.jsx)(n3, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aT.KQ,
                            ref: F.ref,
                            children: (0, c.jsx)(n6, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aT.s5,
                            ref: V.ref,
                            children: (0, c.jsx)(
                                z.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => p(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(aR, { innerRef: i, isPlanSelectUiRedesignEnabled: K }),
                                },
                                K ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: aT.aC, ref: Y.ref, children: (0, c.jsx)(ab, {}) }),
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
                    children: (0, c.jsx)("div", { ref: a, className: aT._Z }),
                }),
                (0, c.jsx)(nH, { ref: r }),
                (0, c.jsx)(nU, { isVisible: !d && !f && b, subscriptionTier: v, isEligibleForBogoPromotion: S }),
                (0, c.jsx)(nM, { className: aT.MF }),
            ],
        });
    return (0, c.jsx)(sa.N, {
        theme: aE.NJ.DARK,
        children: (e) => (0, c.jsx)(W.Gt, { className: u()(aT.XG, e), ref: t, children: X }),
    });
};
var aI = s(862482),
    a_ = s(412260),
    aS = s(662367),
    aP = s(374403),
    ay = s(396375),
    aD = s(815846),
    aO = s(370049);
let aM = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nA.ar)();
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
    let d = (null != l ? eb.Ay.getSkuIdForPlan(l.planId) : null) === tJ.pe.TIER_1;
    return (
        (s = null != a ? a : r ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(sr.Z, {
            className: u()(aO.kL, n, { [aO.He]: r }),
            type: sr.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(sR.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aO.Kk, { [aO.Pt]: r }),
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
var ak = s(978836);
let aL = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(ak.zr, { [ak.N]: t }),
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
                        (0, c.jsx)("stop", { className: ak.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: ak.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: ak.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: ak.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: ak.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aU = s(900797),
    aG = s(847374),
    aw = s(812993),
    aB = s(614268);
function aH(e) {
    let { className: t } = e;
    return (0, c.jsx)(aw.Lp, { className: u()(aB.T, t), text: ei.intl.string(ei.t.EYxi0o) });
}
var aF = s(904788),
    aV = s(507553);
let az = "/assets/5b4fec8511c3676a.svg",
    aW = "/assets/0838bda6ecd20d91.svg";
function aY(e, t, s) {
    return (0, is.M)(e) ? t : s;
}
var aK = s(872461);
function aX(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nF.D, {
        onClick: s,
        className: aK.customButton,
        children: [
            t ? ei.intl.string(ei.t.maZaN3) : ei.intl.string(ei.t["37C26f"]),
            t
                ? (0, c.jsx)(aU.t, { size: "md", color: "currentColor", className: aK.arrow })
                : (0, c.jsx)(aG.a, { size: "md", color: "currentColor", className: aK.arrow }),
        ],
    });
}
function aZ(e) {
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
            className: u()(aK.perkCard, i),
            children: [
                l
                    ? (0, c.jsx)(aF.A, {
                          className: aK.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aH, { className: aK.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aK.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(ee.D, {
                            variant: "heading-lg/extrabold",
                            className: aK.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/normal",
                            className: aK.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aJ = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, ii.Ay)(),
                n = (0, il.X)("usePerkCards"),
                a = (0, tE.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eb.Ay.canUsePremiumProfileCustomization(e);
                }),
                r = (0, eb.EJ)(tJ.PremiumTypes.TIER_2, { useSpace: !1 });
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
                    imageSource: aY(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                (aV.A.setState({ scrollPosition: iK._F.TRY_IT_OUT }),
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
                    imageSource: aY(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ei.intl.string(ei.t.Bv8Pfk),
                    description: ei.intl.string(ei.t.JMfaTU),
                    imageSource: aY(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ei.intl.string(ei.t.Bv8Pfk),
                    description: ei.intl.string(ei.t.JMfaTU),
                    imageSource: aY(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ei.intl.string(ei.t["lGcW+c"]),
                    description: ei.intl.string(ei.t["/fDyO+"]),
                    imageSource: aY(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ei.intl.string(ei.t["1c+xwT"]),
                    description: ei.intl.string(ei.t.hJG8ZN),
                    imageSource: aY(i, aW, az),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ei.intl.string(ei.t.tzdIwI),
                    description: ei.intl.string(ei.t.hJG8ZN),
                    imageSource: aY(i, aW, az),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ei.intl.string(ei.t.tzdIwI),
                    description: ei.intl.string(ei.t.hJG8ZN),
                    imageSource: aY(i, aW, az),
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
                    imageSource: aY(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: aY(i, iX, iZ),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aK }),
        l = (0, tE.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
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
        className: u()(aK.perksContainer, t, {
            [aK.partiallyHidden]: i && !n,
            [aK.subscriberNitroHome]: i,
            [aK.reducedMotion]: l,
        }),
        children: [
            (0, c.jsx)(ee.D, {
                variant: "heading-xxl/extrabold",
                className: aK.perksTitle,
                children: i ? ei.intl.string(ei.t.QX14gI) : ei.intl.string(ei.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aK.perkCardContainer, { [aK.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aZ, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aK.sizeGizmo]: !n, [aK.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aX, {
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
                        (0, c.jsx)("div", { className: u()(aK.cover, { [aK.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aQ = s(194509),
    aq = s(317587);
let a$ = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, tv.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eV.JJy.MARKETING_FLOATING_CTA },
        l = (0, ii.Ay)(),
        o = (0, nD.M)(l);
    return (0, c.jsx)(tR.animated.div, {
        className: u()(aq.iE, { [aq.H8]: i, [aq.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aq.zW : aq.iJ,
            children: [
                (0, c.jsx)(ay.A, {
                    color: o ? aI.XD.BRAND_INVERTED : void 0,
                    className: u()(aq.x6, { [aq.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aq.PJ,
                }),
                (0, c.jsx)(aQ.A, { className: aq.x6, premiumModalAnalyticsLocation: r }),
            ],
        }),
    });
};
var a0 = s(386564);
function a1(e) {
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
            ? (0, c.jsx)(ay.A, {
                  color: r ? aI.XD.BRAND_INVERTED : void 0,
                  className: u()(a0.x6, a0.Ph, n, { [a0.Sq]: t && a, [a0.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : a0.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(ay.A, {
                  color: r || !a ? aI.XD.BRAND_INVERTED : void 0,
                  className: u()(a0.x6, a0.Ph, n, { [a0.Sq]: t && a, [a0.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aQ.A, { className: u()(a0.x6, n), color: a ? void 0 : aI.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(a0.UD, i), children: [o, " ", d] });
}
function a2() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aF.p, { className: a0.zd }),
            (0, c.jsx)(aF.p, { className: a0.G }),
            (0, c.jsx)(aF.p, { className: a0.zy }),
            (0, c.jsx)(aF.p, { className: a0.GX }),
        ],
    });
}
function a3(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = as();
    return (0, c.jsx)(et.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(a0.h_, { [a0.If]: s, [a0.jn]: i }),
        children: ei.intl.format(ei.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let a6 = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, eE.QQ)(),
        o = (0, nA.ar)(),
        d = (0, eC.cg)(),
        m = (0, ne.b)().length > 0,
        x = ei.intl.string(ei.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(a0.kL, s, { [a0.V1]: !o, [a0.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? a0.I6 : a0.G1,
                    children: [
                        (0, c.jsx)(tl.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(ee.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: x,
                            }),
                        }),
                        m
                            ? (0, c.jsx)("div", {
                                  className: a0.DF,
                                  children: (0, c.jsx)(n4.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(a3, {}),
                        d || l
                            ? (0, c.jsx)("div", {
                                  className: a0.UD,
                                  children: (0, c.jsx)(aQ.A, { className: u()(a0.x6, i), color: aI.XD.WHITE }),
                              })
                            : (0, c.jsx)(a1, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(a3, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(a2, {}),
            ],
        }),
    });
});
var a7 = s(22118),
    a5 = s(145359),
    a8 = s(377770);
function a9(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aL, { lifted: t }) : null;
}
let a4 = () => {
        (0, _.P)(I);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, ii.Ay)(),
            n = (0, is.M)(i),
            [a, r] = o.useState(!1),
            [l, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eb.EL)(h) : null,
            b = null != N ? eb.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== b && b !== tJ.pe.TIER_2 ? tJ.pe.TIER_2 : null,
            E = (0, eR.V)(),
            T = E?.subscriptionTrial?.skuId,
            R = (0, nA.ar)(),
            v = (0, eC.cg)(),
            S = v ?? !1,
            P = (0, x.bG)([a_.A], () => {
                let e = a_.A.getMarketingComponentByType(er.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            y = (0, aP.Q)(),
            { analyticsLocations: D } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let O = (0, c.jsx)("div", {
            className: a8.dY,
            children: (0, c.jsx)(z.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(na.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(ay.A, {
                        showIcon: !1,
                        subscriptionTier: tJ.pe.TIER_0,
                        className: a5.Ph,
                        look: aI.pR.OUTLINED,
                        color: aI.XD.WHITE,
                        buttonShineClassName: a5.Qr,
                    }),
                    tier2CTAButton:
                        T === tJ.pe.TIER_0
                            ? (0, c.jsx)(ay.A, {
                                  showIcon: !1,
                                  subscriptionTier: tJ.pe.TIER_2,
                                  className: a5.Ph,
                                  look: aI.pR.OUTLINED,
                                  color: aI.XD.WHITE,
                                  buttonShineClassName: a5.Qr,
                              })
                            : (0, c.jsx)(ay.A, {
                                  color: aI.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tJ.pe.TIER_2,
                                  className: a5.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: a5.Ac },
                                  buttonShineClassName: a5.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: a8.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aM, { premiumSubscription: h, className: u()(a8.R3, { [a8.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: a8.n1,
                        children: [
                            (0, c.jsx)(a9, { inOfferExperience: R }),
                            (0, c.jsx)(t9.l, {
                                className: a8.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [a8.V1]: !R }),
                    children: [
                        null != P && (0, c.jsx)(aD.c, { className: a8.w$, config: P }),
                        (0, c.jsxs)("div", {
                            className: a8.iS,
                            children: [
                                !R &&
                                    (0, c.jsx)(t9.l, {
                                        className: a8.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(z.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(a6, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [a8.p7]: R, [a8.Pw]: R, [a8.AG]: v, [a8.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != y && (0, c.jsx)("div", { className: a8.Ol, children: (0, c.jsx)(aS.I, { component: y }) }),
                O,
                (0, c.jsx)(aJ, { className: a8.B_ }),
                (0, c.jsx)("div", { className: a8.aC, children: (0, c.jsx)(a7.A, { className: a8.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: a8.hz }),
                (0, c.jsx)(a$, {
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
                    children: (0, c.jsx)("div", { ref: s, className: a8._Z }),
                }),
                (0, c.jsx)("img", {
                    src: i9,
                    className: a8.Kw,
                    width: 112,
                    height: 85,
                    alt: ei.intl.string(ei.t.X4IxWL),
                }),
            ],
        });
    },
    re = function (e) {
        let { entrypoint: t } = e,
            s = (0, eR.V)(),
            i = (0, eT.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, nt.NF)({ trialOffer: s }),
            a = (0, nt.Tp)(),
            r = (0, x.bG)([eB.A], () => eB.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, nt.QG)(), !0 === a && (0, nt.ne)(r), (null != s || null != i) && (0, G.u1)(s, i));
            }, [s, i, n, a, r]),
            t)
        ) {
            case tJ.tU.UserSettings:
                return (0, c.jsx)(a4, {});
            case tJ.tU.ApplicationStoreHome:
                return (0, c.jsx)(av, {});
            default:
                return null;
        }
    };
var rt = s(531296);
let rs = function (e) {
    let { entrypoint: t = tJ.tU.UserSettings } = e;
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
        z = (0, E.Y)(tJ.T7),
        [W, Y] = o.useState(!0),
        K = o.useRef(0),
        X = (0, L.YE)(v, tJ.PremiumTypes.TIER_2),
        Z = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        J = null != Z && Z.status === eV.Dmq.CANCELED;
    ((0, ne.b)(),
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
            let t = { nitro_basic: tJ.pe.TIER_0, nitro: tJ.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((q.current = !0),
                (0, P.bG)(eV.BVt.APPLICATION_STORE),
                (0, S.A)({ subscriptionTier: s, analyticsLocations: l }));
        }, [$, Q.search, l]));
    let es = (0, x.bG)([y.A], () => y.A.enabled),
        ei = t === tJ.tU.ApplicationStoreHome,
        en = es
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : ei && X
                ? (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(i4, { userId: w }) })
                : ee
                  ? null
                  : (0, c.jsx)("div", { className: u()(rt.kL, rt.Lq), children: (0, c.jsx)(g.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !J) || (n && e && (a || J))
            ? en
            : (0, c.jsxs)(c.Fragment, { children: [ei && (0, c.jsx)(N.A, {}), en] });
    }
    return (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(re, { entrypoint: t }) });
};
