l.d(t, { FT: () => e5, Yc: () => e7, vG: () => tt, EA: () => tl });
var n,
    a = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    o = l(892227),
    c = l(806163),
    d = l(855986),
    u = l(939249),
    h = l(192308),
    m = l(265872),
    C = l(793574),
    _ = l(688810),
    E = l(757036),
    g = l(369189),
    A = l(622886),
    p = l(287809),
    f = l(166403),
    L = l(129230),
    b = l(124861),
    O = l(318346),
    x = l(362862),
    T = l(672619),
    R = l(923138),
    y = l(12510),
    v = l(673125);
l(321073);
var S = l(554146),
    N = l(462887),
    j = l(28863),
    I = l(315629),
    U = l(736653),
    M = l(898660),
    B = l(263775),
    P = l(385345),
    F = l(44724),
    D = l(421108),
    W = l(617617),
    k =
        (((n = {}).NITRO_UPSELL = "nitro_upsell"),
        (n.SHOP_ORBS = "shop_orbs"),
        (n.BLACK_FRIDAY_PROMO = "black_friday_promo"),
        n);
function H(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return l ? "black_friday_promo" : e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
var G = l(866665),
    w = l(408278),
    V = l(789645),
    Y = l(834730),
    z = l(821609),
    K = l(34188),
    X = l(403581),
    q = l(696292),
    Q = l(969935),
    Z = l(778705),
    J = l(87719),
    $ = l(576761),
    ee = l(321538),
    et = l(758836),
    el = l(682901),
    en = l(312653),
    ea = l(792996);
function ei(e) {
    let { analyticsLocations: t = [], shopTab: l = et.G2.ORBS } = e;
    (0, Q.Cz)({ tab: l, analyticsLocations: t, analyticsSource: C.A.ORBS_BALANCE_MENU });
}
function es() {
    (0, ee.mA)({ fromContent: q.u.ORBS_BALANCE_MENU });
}
function er(e) {
    let { analyticsLocations: t = [] } = e;
    (0, Z.A)({ subscriptionTier: el.pe.TIER_2, analyticsLocations: t });
}
let eo = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        ei({ analyticsLocations: t, shopTab: et.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        ei({ analyticsLocations: t, shopTab: et.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        er({ analyticsLocations: t });
    },
};
var ec = l(49999),
    ed = l(600676);
function eu(e) {
    let {
        title: t,
        imageUrl: l,
        imageAlt: n,
        subTextDescription: i,
        buttonText: s,
        buttonIcon: o,
        buttonVariant: c,
        onCtaClick: d,
        onClose: u,
        className: h,
        decoration: m,
    } = e;
    return (0, a.jsxs)("div", {
        className: r()(ed.Vm, h),
        children: [
            m,
            null != u
                ? (0, a.jsx)("div", {
                      className: ed.Fx,
                      children: (0, a.jsx)(G.m, {
                          text: ea.intl.string(ea.t.cpT0Cq),
                          children: (0, a.jsx)(w.K, {
                              icon: V.XSmallIcon,
                              "aria-label": ea.intl.string(ea.t.cpT0Cq),
                              variant: "icon-only",
                              size: "sm",
                              onClick: u,
                          }),
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: ed.iH,
                children: [
                    null != l &&
                        (0, a.jsx)("img", {
                            alt: n,
                            src: l,
                            className: ed.db,
                            onError: (e) => {
                                let { currentTarget: t } = e;
                                return t.classList.add(ed.Q4);
                            },
                            onLoad: (e) => {
                                let { currentTarget: t } = e;
                                return t.classList.remove(ed.Q4);
                            },
                        }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                className: ed.L8,
                                children: t,
                            }),
                            null != i &&
                                (0, a.jsx)(Y.E, { variant: "body-xs/medium", color: "text-default", children: i }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(z.$, { text: s, size: "sm", icon: o, onClick: d, variant: c, fullWidth: !0 }),
        ],
    });
}
function eh(e, t) {
    let { ctaClickHandler: l, dismissibleContent: n, ctaObject: a } = t,
        { analyticsPage: s = C.A.ORB_WALLET, forceVisible: r, onClose: o, onCloseWallet: c } = e,
        d = (0, B.kn)(null == e.dismissibleContentSelection ? [n] : [], {
            groupName: ec.m.ORB_WALLET,
            bypassAutoDismiss: !0,
        }),
        [u, h] = e.dismissibleContentSelection ?? d,
        m = i.useCallback(() => {
            ((0, O.Y)({ pageType: s, sectionType: C.A.ORB_WALLET_PRIMARY_CARD, ctaObject: a }),
                l(),
                r || h(ec.i.TAKE_ACTION),
                c("navigation"));
        }, [s, h, r, c, l, a]),
        _ = i.useCallback(() => {
            (r || h(ec.i.DISMISS), o());
        }, [r, h, o]);
    return { onCtaClick: m, shouldHideCard: null == u && !r, onClose: _ };
}
function em(e) {
    let {
            onClose: t,
            onCloseWallet: n,
            analyticsPage: s = C.A.ORB_WALLET,
            forceVisible: r = !1,
            dismissibleContentSelection: o,
        } = e,
        { analyticsLocations: c } = (0, _.Ay)(C.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: d,
            onCtaClick: u,
            onClose: h,
        } = eh(
            { analyticsPage: s, forceVisible: r, dismissibleContentSelection: o, onClose: t, onCloseWallet: n },
            {
                ctaClickHandler: i.useCallback(() => {
                    ei({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: S.M.ORB_WALLET_SHOP_CTA_CARD,
                ctaObject: C.A.ORB_WALLET_SHOP_CTA,
            },
        );
    return d
        ? null
        : (0, a.jsx)(eu, {
              title: ea.intl.string(en.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: ea.intl.string(en.default.qa1xyr),
              subTextDescription: ea.intl.string(en.default.HACucK),
              buttonText: ea.intl.string(en.default["7raRgL"]),
              buttonIcon: { asset: K.ShopIcon, type: "icon" },
              onCtaClick: u,
              onClose: h,
          });
}
let eC = { asset: X.NitroWheelIcon, type: "icon" };
function e_(e) {
    let {
            onClose: t,
            onCloseWallet: n,
            analyticsPage: s = C.A.ORB_WALLET,
            forceVisible: r = !1,
            dismissibleContentSelection: o,
        } = e,
        { analyticsLocations: c } = (0, _.Ay)(C.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: u,
            onCtaClick: h,
            onClose: m,
        } = eh(
            { analyticsPage: s, forceVisible: r, dismissibleContentSelection: o, onClose: t, onCloseWallet: n },
            {
                ctaClickHandler: i.useCallback(() => {
                    er({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: S.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                ctaObject: C.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            },
        ),
        { nitroGatedOrbMultiplier: E } = (0, d.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
        })),
        g = i.useMemo(() => ea.intl.format(en.default["Ba/7wO"], { multiplier: E }), [E]);
    return null == E || u
        ? null
        : (0, a.jsx)(eu, {
              title: ea.intl.string(en.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: ea.intl.string(en.default.FkfrRH),
              subTextDescription: g,
              buttonText: ea.intl.string(en.default.U9UQJE),
              buttonIcon: eC,
              buttonVariant: "expressive",
              onCtaClick: h,
              onClose: m,
              className: ed.ml,
          });
}
var eE = l(652215),
    eg = l(188275),
    eA = l(355097);
let ep = "2026-11-23T17:00:00Z",
    ef = "2026-12-01T07:59:00Z",
    eL = [
        {
            key: "rust",
            experiment: P.A,
            dismissibleContent: S.M.ORB_WALLET_BLACK_FRIDAY_RUST_PROMO,
            campaignId: "1569772120823693393",
            startsAt: ep,
            endsAt: ef,
            applicationId: eg.IG,
            title: en.default.XgfZ0E,
            body: en.default.mPf8Wg,
            cta: en.default.dnqFO2,
            artUrl: "https://cdn.discordapp.com/assets/content/492f3b6b6422d7262f401adcad0aa7cabcc8fa2a1f8aa1dcc5d109893fa0ee19.png",
        },
        {
            key: "bloons",
            experiment: P.V,
            dismissibleContent: S.M.ORB_WALLET_BLACK_FRIDAY_BLOONS_PROMO,
            campaignId: "1569773021273657476",
            startsAt: ep,
            endsAt: ef,
            applicationId: eg.S3,
            title: en.default.UEMMJO,
            body: en.default.Y3l0TS,
            cta: en.default["72cAX3"],
            artUrl: "https://cdn.discordapp.com/assets/content/011c03cac9aa90208279e1ab95b2beb0ce5b90543ca646dc80a910ba56f8ece0.png",
        },
    ];
function eb(e, t) {
    let l = (0, d.bG)([W.A], () =>
            (0, M.z)(
                { kind: "single_use", content: e.dismissibleContent, scope: {} },
                { dismissedContents: W.A.settings.userContent?.dismissedContents },
                W.A.hasLoaded(eA.oD.PRELOADED_USER_SETTINGS),
            ),
        ),
        n = Date.now(),
        a = Date.parse(e.startsAt);
    (0, D.tm)(t && l && n < a ? a + 1e3 : void 0);
    let i = t && l && n >= a && n <= Date.parse(e.endsAt),
        { enabled: s } = e.experiment.useConfig({ location: "OrbWalletBlackFridayPromo" }, { autoTrackExposure: i });
    return i && s;
}
function eO(e) {
    let { campaign: t, userHasPremium: l, onClose: n, onCtaClick: s, onImpression: r } = e;
    i.useEffect(() => {
        r?.();
    }, [r]);
    let o = (0, eg.X3)(t.applicationId),
        c = (0, N.M)((0, U.Ay)()),
        d = "primary";
    return (
        l ? (d = "secondary") : c && (d = "overlay-primary"),
        (0, a.jsx)(eu, {
            title: ea.intl.string(t.title),
            imageUrl: t.artUrl,
            imageAlt: "",
            subTextDescription: ea.intl.format(t.body, {
                termsHook: (e) =>
                    null != o
                        ? (0, a.jsx)(j.Anchor, { href: o, target: "_blank", rel: "noopener noreferrer", children: e })
                        : e,
            }),
            buttonText: ea.intl.string(t.cta),
            buttonIcon: void 0,
            buttonVariant: d,
            className: ed.sb,
            decoration: !l || c ? (0, a.jsx)(I.h, { "aria-hidden": !0, color: "nitro-pink", className: ed.AY }) : null,
            onCtaClick: s,
            onClose: n,
        })
    );
}
var ex = l(646514),
    eT = l(140735),
    eR = l(683071),
    ey = l(577473),
    ev = l(369606),
    eS = l(305866),
    eN = l(475743),
    ej = l(303136),
    eI = l(975571),
    eU = l(626031),
    eM = l(320448),
    eB = l(404778),
    eP = l(318254),
    eF = l(742967),
    eD = l(137484),
    eW = l(427483);
function ek(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        n = t === b.x.COMPLETED || t === b.x.CLAIMED,
        i = (0, a.jsx)("div", {
            className: r()(eD.TK, { [eD.AM]: n }),
            children: (0, a.jsx)(eF.x, { className: eD.t9, webmAsset: eW.A, animationState: l, assetAltText: "" }),
        });
    return n
        ? (0, a.jsxs)("div", {
              className: eD.Zs,
              children: [(0, a.jsx)(eT.A, { children: ea.intl.string(en.default.k6h2J3) }), i],
          })
        : i;
}
function eH(e) {
    let { className: t } = e;
    return (0, a.jsx)(eB.c, { className: r()(eD.Fu, t) });
}
function eG(e) {
    let {
            achievementIdentifier: t,
            title: l,
            orbRewardAmount: n,
            achievementStatus: s,
            onClaim: o,
            onDiscoveryClick: c,
            isLastItem: d,
            isFirstItem: h,
        } = e,
        [m, C] = i.useState(!1),
        [_, E] = i.useState(!1),
        g = null != c && s !== b.x.COMPLETED,
        A = r()(eD.of, { [eD.o4]: h, [eD.D8]: m, [eD.or]: g }),
        p = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: eD.Ub,
                    children: [
                        (0, a.jsx)(ek, { achievementStatus: s, animationState: m ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: eD.Du,
                            children: [
                                (0, a.jsx)(Y.E, { variant: "body-sm/medium", color: "text-default", children: l }),
                                (0, a.jsx)(Y.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: ea.intl.format(
                                        s === b.x.COMPLETED ? en.default.h2qWpS : en.default.B8Fxns,
                                        {
                                            orbAmount: n,
                                            orbIconHook: () =>
                                                (0, a.jsx)(eP.OrbsIcon, {
                                                    className: eD.fN,
                                                    size: "xxs",
                                                    color: ex.A.colors.ICON_SUBTLE,
                                                }),
                                        },
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isClaiming: l, handleClaim: n, hasDiscoveryClick: i } = t,
                        s = (0, a.jsx)(z.$, {
                            variant: "expressive",
                            size: "sm",
                            text: ea.intl.string(en.default.WmfVjs),
                            loading: l,
                            onClick: n,
                        });
                    return e === b.x.COMPLETED || l
                        ? s
                        : i
                          ? (0, a.jsx)(eM.ChevronSmallRightIcon, { size: "sm", "aria-hidden": !0 })
                          : null;
                })(s, {
                    isHovered: m,
                    isClaiming: _,
                    handleClaim: async function () {
                        null != o && (E(!0), await o(t).finally(() => E(!1)));
                    },
                    hasDiscoveryClick: g,
                }),
            ],
        }),
        f = i.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return g
        ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(u.D, { className: A, ...f, onClick: c, children: p }), !d && (0, a.jsx)(eH, {})],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: A, ...f, children: p }), !d && (0, a.jsx)(eH, {})],
          });
}
var ew = l(653877),
    eV = l(268920),
    eY = l(633217);
function ez() {
    return (0, a.jsx)("div", {
        className: ew.s,
        children: (0, a.jsx)(ej.A, { src: eY.A, fallbackImage: eV.A, className: ew.Cb }),
    });
}
function eK(e) {
    let { nitroIconColor: t = ex.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, a.jsxs)("div", {
        className: ew.SY,
        children: [
            (0, a.jsx)(X.NitroWheelIcon, { size: "xs", color: t }),
            (0, a.jsx)(Y.E, { variant: "body-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function eX(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        n = (0, eN.Ay)(t),
        s = i.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != n && !!(n.toString().length > 10)),
            [t, n],
        );
    return (0, a.jsxs)("div", {
        className: ew.SZ,
        children: [
            (0, a.jsx)(ez, {}),
            (0, a.jsxs)("div", {
                className: ew.ZX,
                children: [
                    (0, a.jsx)(eT.A, {
                        children:
                            null == t
                                ? ea.intl.string(ea.t.cKwv4k)
                                : ea.intl.formatToPlainString(ea.t.zPaLL9, { balance: t }),
                    }),
                    (0, a.jsx)(eU.t, {
                        ariaHidden: !0,
                        counterInnerClassName: s ? ew.F4 : void 0,
                        value: t,
                        onValueChange: eE.tEg,
                        onValueReached: eE.tEg,
                        targetTotalCounterTime: 1500,
                        textVariant: "display-md",
                        textColor: "text-strong",
                        horizontalAlignment: "left",
                        isRenderedWithoutLottieAnimation: !0,
                    }),
                    l,
                ],
            }),
        ],
    });
}
function eq(e) {
    let { text: t, accessibilityLabel: l, onClick: n } = e,
        i = null != l,
        s = (0, a.jsxs)(a.Fragment, {
            children: [
                i && (0, a.jsx)(eT.A, { children: l }),
                (0, a.jsx)(X.NitroWheelIcon, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, a.jsx)(Y.E, {
                    variant: "body-xs/semibold",
                    color: "text-overlay-light",
                    "aria-hidden": i,
                    children: t,
                }),
            ],
        });
    return null == n
        ? (0, a.jsx)("div", { className: ew.lh, children: s })
        : (0, a.jsx)(u.D, { className: r()(ew.lh, ew.w9), onClick: n, children: s });
}
function eQ(e) {
    let { numRows: t = 3 } = e,
        l = i.useMemo(() => Array.from({ length: t }), [t]);
    return (0, a.jsx)("div", {
        className: ew.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: ew.US,
                    children: [
                        (0, a.jsx)("div", { className: r()(ew.DO, ew.VR) }),
                        (0, a.jsxs)("div", {
                            className: ew.A3,
                            children: [
                                (0, a.jsx)("div", { className: r()(ew.DO, ew.Iz) }),
                                (0, a.jsx)("div", { className: r()(ew.DO, ew.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function eZ(e) {
    let {
            title: t,
            challenges: l,
            isLoading: n,
            onClaim: s,
            badgeText: r,
            badgeAccessibilityLabel: o,
            onClickBadge: c,
            inlineNoticeProps: d,
        } = e,
        u = l.length > 0,
        h = i.useMemo(
            () =>
                n && null == d
                    ? (0, a.jsx)(eQ, { numRows: 3 })
                    : u
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: ew.$b,
                                    children: [
                                        (0, a.jsx)(Y.E, {
                                            variant: "body-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != r && (0, a.jsx)(eq, { text: r, accessibilityLabel: o, onClick: c }),
                                    ],
                                }),
                                (0, a.jsx)("ul", {
                                    className: ew.Up,
                                    children: l.map((e, t) =>
                                        (0, a.jsx)(
                                            "li",
                                            {
                                                className: ew.tJ,
                                                children: (0, a.jsx)(eG, {
                                                    ...e,
                                                    onClaim: s,
                                                    isLastItem: t === l.length - 1,
                                                }),
                                            },
                                            e.achievementIdentifier,
                                        ),
                                    ),
                                }),
                            ],
                        })
                      : null != d
                        ? null
                        : (0, a.jsxs)("div", {
                              className: ew.GN,
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: ea.intl.string(en.default.xOP5OP),
                                  }),
                                  (0, a.jsx)(Y.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      children: ea.intl.string(en.default.XW2CuY),
                                  }),
                              ],
                          }),
            [n, u, t, r, o, c, l, d, s],
        ),
        m = i.useMemo(
            () => (null == d ? null : (0, a.jsx)("div", { className: ew.re, children: (0, a.jsx)(eR.w, { ...d }) })),
            [d],
        );
    return (0, a.jsxs)("div", { className: ew.E6, "aria-busy": n, children: [m, h] });
}
function eJ(e) {
    let { onQuestsClick: t, onShopClick: l, totalOrbsRedeemed: n } = e;
    return (0, a.jsxs)("div", {
        className: ew.VX,
        children: [
            (0, a.jsxs)("div", {
                className: ew.W,
                children: [
                    null != t &&
                        (0, a.jsx)(z.$, {
                            text: ea.intl.string(ea.t.JALI2K),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: ey.QuestsIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: t,
                        }),
                    null != l &&
                        (0, a.jsx)(z.$, {
                            text: ea.intl.string(ea.t.pWG4ze),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: K.ShopIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: l,
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ew.RA,
                children: [
                    null != n &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(ev.TrophyIcon, {
                                    size: "xs",
                                    color: ex.A.colors.ICON_MUTED,
                                    "aria-hidden": !0,
                                }),
                                (0, a.jsx)(Y.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: ea.intl.format(en.default.B5tZXw, { orbAmount: n }),
                                }),
                                (0, a.jsx)(Y.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            ],
                        }),
                    (0, a.jsx)(Y.E, {
                        variant: "body-xs/normal",
                        children: (0, a.jsx)(j.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: eI.A.getArticleURL(eE.MVz.ORBS_WALLET),
                            children: ea.intl.string(ea.t["5qZv9E"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function e$(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: n,
            orbChallengesCard: s,
            orbWalletFooter: o,
            cardRef: c,
            returnRef: d,
        } = e,
        [u, h] = i.useState(!1);
    return (0, a.jsxs)(eS.l, {
        className: r()(ew.ql, ew.Ut),
        ref: c,
        returnRef: d,
        "aria-label": ea.intl.string(en.default.XKj5L9),
        children: [
            (0, a.jsxs)("div", {
                className: ew.hG,
                children: [
                    (0, a.jsx)(eX, { orbBalance: t, headerTagsContent: l }),
                    u ? null : n({ onClose: () => h(!0) }),
                ],
            }),
            (0, a.jsx)("div", { className: ew.BA, children: s }),
            o,
        ],
    });
}
var e0 = l(123576);
let e1 = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: b.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: b.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: b.x.NONE,
        orbRewardAmount: 100,
    },
];
async function e2(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function e6(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: n,
            analyticsPage: i,
            forceVisible: s = !1,
            onCloseWallet: r = eE.tEg,
            dismissibleContentSelection: o,
        } = e,
        c = H(t, n);
    return c === k.SHOP_ORBS
        ? (0, a.jsx)(em, {
              onClose: l,
              analyticsPage: i,
              forceVisible: s,
              dismissibleContentSelection: o,
              onCloseWallet: r,
          })
        : c === k.NITRO_UPSELL
          ? (0, a.jsx)(e_, {
                onClose: l,
                analyticsPage: i,
                forceVisible: s,
                dismissibleContentSelection: o,
                onCloseWallet: r,
            })
          : null;
}
function e3(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, a.jsx)("span", { className: e0.dW, children: t })
        : (0, a.jsx)(u.D, { className: r()(e0.dW, e0.or), onClick: l, children: t });
}
function e8(e, t) {
    return ea.intl.formatToPlainString(e ? en.default.p9PPYD : en.default["1JZfaU"], { multiplier: t });
}
function e5(e) {
    let {
            userHasPremium: t,
            orbBalance: l,
            hasErrorMessage: n,
            isLoading: s,
            hasNoChallenges: r,
            totalOrbsRedeemed: o = 15600,
            showBlackFridayPromo: c = !1,
            blackFridayCampaignKey: d = "rust",
        } = e,
        [u, h] = i.useState([]),
        m = eL.slice(eL.findIndex((e) => e.key === d)),
        C = c ? m.find((e) => !u.includes(e.key)) : void 0,
        _ = null != C;
    function E() {
        null != C && h((e) => [...e, C.key]);
    }
    return (0, a.jsx)(e$, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, a.jsx)(eK, { text: ea.intl.format(en.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return _
                ? (0, a.jsx)(eO, { campaign: C, userHasPremium: t, onClose: E, onCtaClick: E })
                : e6({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard:
            _ && r && !s && !n
                ? null
                : (0, a.jsx)(eZ, {
                      isLoading: s,
                      inlineNoticeProps: n
                          ? {
                                type: "warning",
                                message: ea.intl.format(en.default.ggLzeg, {
                                    underlineHook: (e) => (0, a.jsx)(e3, { text: e }),
                                }),
                                role: "status",
                            }
                          : null,
                      title: ea.intl.string(en.default.H6Ny8N),
                      badgeText: ea.intl.format(t ? en.default.OHLdjq : en.default.WOMrJf, { multiplier: 1.2 }),
                      badgeAccessibilityLabel: e8(t, 1.2),
                      challenges: r ? [] : e1,
                      onClaim: e2,
                  }),
        orbWalletFooter: (0, a.jsx)(eJ, {
            onQuestsClick: () => es(),
            onShopClick: () => ei({ analyticsLocations: [] }),
            totalOrbsRedeemed: o,
        }),
    });
}
function e7(e) {
    return (0, a.jsx)(e5, { ...e, hasNoChallenges: !0 });
}
function e9() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, A.F)();
    if (!e || null == t) return null;
    let l = Math.max(1, (0, o.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(eK, { text: ea.intl.format(en.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function e4() {
    return null != (0, d.bG)([f.A], () => f.A.getPremiumTypeSubscription()) ? (0, a.jsx)(e9, {}) : null;
}
function te(e) {
    let {
            analyticsPage: t = C.A.ORB_WALLET,
            analyticsLocations: n = [],
            onCloseWallet: s = eE.tEg,
            hideWhenEmpty: r = !1,
        } = e,
        { challengesForOrbWallet: o, hasFetchedChallenges: c, refetch: u } = (0, R.z)({ shouldFetch: !0 }),
        m = (0, E.L)(el.PremiumTypes.TIER_2),
        _ = (0, d.bG)([p.default], () => p.default.getCurrentUser()),
        { nitroGatedOrbMultiplier: g, orbChallengesDisplayError: A } = (0, d.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: v.Ay.orbChallengesDisplayError,
        })),
        f = null != _ && !_.isClaimed(),
        L = i.useMemo(
            () =>
                null != A
                    ? {
                          type: "warning",
                          message:
                              A.errorType === v.EB.CLAIM_CHALLENGE
                                  ? ea.intl.string(en.default.FYb5rH)
                                  : ea.intl.format(en.default.ggLzeg, {
                                        underlineHook: (e) => (0, a.jsx)(e3, { text: e, onClick: u }),
                                    }),
                          role: "status",
                      }
                    : f
                      ? { type: "info", message: ea.intl.string(ea.t.qxk9zo), role: "status" }
                      : null,
            [A, u, f],
        ),
        b = i.useCallback(
            () => (
                (0, O.Y)({ pageType: t, sectionType: C.A.ORB_WALLET, ctaObject: C.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                s("navigation"),
                (function (e) {
                    let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: l } = e;
                    if (null == t) return void (0, J.x)();
                    let n = l ? $.MA.NITRO : $.MA.UPSELL,
                        a = l
                            ? { customSubtitle: ea.intl.format(en.default["wE4a/r"], { bonusOrbMultiplier: t }) }
                            : void 0;
                    (0, ee.gC)(t, n, a);
                })({ nitroGatedOrbMultiplier: g, userIsPremiumTier2: m })
            ),
            [g, m, t, s],
        ),
        x = i.useMemo(
            () =>
                o.map((e) => {
                    let l = null != e.achievementDefinitionId ? eo[e.achievementDefinitionId] : null,
                        a = { analyticsLocations: n },
                        i =
                            null != l
                                ? () => {
                                      ((0, O.Y)({
                                          pageType: t,
                                          sectionType: C.A.ORB_WALLET,
                                          ctaObject: C.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          l(a),
                                          s("navigation"));
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: i };
                }),
            [o, n, t, s],
        ),
        T = i.useCallback(() => {
            (0, h.mM)(async () => {
                let { default: e } = await Promise.all([l.e(671464), l.e(112206), l.e(709998), l.e(480388)]).then(
                    l.bind(l, 195759),
                );
                return (t) => {
                    let { onClose: l, ...n } = t;
                    return (0, a.jsx)(e, { ...n, onClose: l, body: ea.intl.string(ea.t["gP/vPe"]) });
                };
            });
        }, []),
        S = i.useCallback((e) => (f ? (T(), Promise.resolve()) : (0, y.Xz)(e)), [f, T]);
    return r && c && 0 === o.length && null == L
        ? null
        : (0, a.jsx)(eZ, {
              title: ea.intl.string(en.default.H6Ny8N),
              isLoading: !c,
              inlineNoticeProps: L,
              challenges: x,
              onClaim: S,
              onClickBadge: b,
              badgeText: ea.intl.format(m ? en.default.OHLdjq : en.default.WOMrJf, { multiplier: g }),
              badgeAccessibilityLabel: e8(m, g),
          });
}
function tt(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: n = C.A.ORB_WALLET,
            onCloseWallet: s = eE.tEg,
            isProfilePopout: r,
        } = e,
        { balance: o } = (0, T.W0)(),
        u = (0, x.Hy)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: h } = (0, T.rQ)({ disableFetch: !u }),
        m = (0, E.L)(el.PremiumTypes.TIER_2),
        { analyticsLocations: A } = (0, _.Ay)(C.A.ORB_WALLET);
    i.useEffect(() => {
        u && (0, y.eX)();
    }, [u]);
    let p = i.useCallback(() => {
            ((0, O.Y)({ pageType: n, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_SHOP_CTA }),
                ei({ analyticsLocations: A }),
                s("navigation"));
        }, [A, n, s]),
        f = i.useCallback(() => {
            ((0, O.Y)({ pageType: n, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_QUEST_HOME_CTA }),
                es(),
                s("navigation"));
        }, [n, s]),
        R = (function (e) {
            let {
                    walletEnabled: t,
                    userHasPremium: l,
                    orbBalance: n,
                    analyticsPage: a = C.A.ORB_WALLET,
                    onCloseWallet: s,
                } = e,
                [r, o] = eL,
                c = [eb(r, t) ? r : null, eb(o, t) ? o : null].filter((e) => null != e),
                d = c.map((e) => e.endsAt).sort()[0];
            (0, D.tm)(null != d ? Date.parse(d) + 1e3 : void 0);
            let u = H(l, n),
                h = c.map((e) => e.dismissibleContent);
            t &&
                null != u &&
                h.push(u === k.SHOP_ORBS ? S.M.ORB_WALLET_SHOP_CTA_CARD : S.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD);
            let m = (0, B.kn)(h, { groupName: ec.m.ORB_WALLET, bypassAutoDismiss: !0 }),
                [_, E] = m,
                g = c.find((e) => e.dismissibleContent === _),
                A = i.useRef(new Set()),
                p = i.useCallback(() => {
                    null == g ||
                        A.current.has(g.campaignId) ||
                        (A.current.add(g.campaignId),
                        L.default.track(eE.HAw.PROMOTION_VIEWED, {
                            promotion_id: g.campaignId,
                            application_id: g.applicationId,
                            promotion_type: l ? "orb_wallet_black_friday_nitro" : "orb_wallet_black_friday_non_nitro",
                            location_page: a,
                            location_section: C.A.ORB_WALLET_PRIMARY_CARD,
                            location_object: C.A.ORB_WALLET,
                        }));
                }, [g, l, a]),
                f = i.useCallback(() => {
                    E(ec.i.DISMISS);
                }, [E]),
                b = i.useCallback(() => {
                    null != g &&
                        ((0, O.Y)({
                            pageType: a,
                            sectionType: C.A.ORB_WALLET_PRIMARY_CARD,
                            ctaObject: C.A.ORB_WALLET_SHOP_CTA,
                        }),
                        E(ec.i.TAKE_ACTION),
                        (0, F.default)({ applicationId: g.applicationId }),
                        s("navigation"));
                }, [g, a, E, s]);
            return { isVisible: null != g, campaign: g, selection: m, onClose: f, onCtaClick: b, onImpression: p };
        })({ walletEnabled: u, orbBalance: o, userHasPremium: m, analyticsPage: n, onCloseWallet: s }),
        N = H(m, o, R.isVisible),
        { challengesForOrbWallet: j, hasFetchedChallenges: I } = (0, d.cf)([v.Ay], () => ({
            challengesForOrbWallet: v.Ay.challengesForOrbWallet,
            hasFetchedChallenges: v.Ay.hasFetchedChallenges,
        })),
        U = i.useRef(!1);
    i.useEffect(() => {
        if (!I || U.current) return;
        let e = j.map((e) => e.achievementIdentifier),
            t = j.filter((e) => e.achievementStatus === b.x.COMPLETED).map((e) => e.achievementIdentifier);
        (L.default.track(eE.HAw.ORB_WALLET_VIEWED, {
            location_stack: A,
            location_page: n,
            location_section: C.A.ORB_WALLET,
            location_object: C.A.ORB_WALLET,
            wallet_primary_card_type: N,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (U.current = !0));
    }, [I, j, N, A, n]);
    let { pathname: M } = (0, c.zy)(),
        P = M.startsWith(eE.BVt.COLLECTIBLES_SHOP),
        W = (0, g.p)(),
        G = i.useMemo(
            () =>
                r ? { onQuestsClick: f, onShopClick: p } : { onQuestsClick: W ? null : f, onShopClick: P ? null : p },
            [W, P, f, p, r],
        );
    return u
        ? (0, a.jsx)(e$, {
              cardRef: t,
              returnRef: l,
              orbBalance: o,
              headerTagsContent: (0, a.jsx)(e4, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return null != R.campaign
                      ? (0, a.jsx)(eO, {
                            campaign: R.campaign,
                            userHasPremium: m,
                            onClose: R.onClose,
                            onCtaClick: R.onCtaClick,
                            onImpression: R.onImpression,
                        })
                      : e6({
                            userHasPremium: m,
                            onClose: t,
                            orbBalance: o,
                            analyticsPage: n,
                            onCloseWallet: s,
                            dismissibleContentSelection: R.selection,
                        });
              },
              orbChallengesCard: (0, a.jsx)(te, {
                  hideWhenEmpty: R.isVisible,
                  analyticsPage: n,
                  analyticsLocations: A,
                  onCloseWallet: s,
              }),
              orbWalletFooter: (0, a.jsx)(eJ, { ...G, totalOrbsRedeemed: h }),
          })
        : null;
}
function tl(e) {
    let { cardRef: t, returnRef: l, targetElementRef: n, shouldShow: s, analyticsPage: r, onCloseWallet: o } = e,
        c = i.useCallback(
            () => (0, a.jsx)(tt, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: o }),
            [t, l, r, o],
        ),
        d = i.useCallback(
            (e, t) => {
                "user:escape" === t && null != o && o("direct_close");
            },
            [o],
        );
    return (0, a.jsx)(m.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: c,
        position: "bottom",
        align: "right",
        shouldShow: s,
        onRequestClose: d,
        animation: m.Y.Animation.NONE,
        targetElementRef: n,
        children: () => null,
    });
}
