n.d(t, { default: () => tO });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(110259),
    d = n(575593),
    u = n(334279),
    _ = n(702841),
    m = n(990078),
    p = n(462887),
    f = n(231723),
    h = n(935462),
    E = n(408278),
    A = n(972213),
    g = n(834730),
    I = n(430690),
    v = n(821609),
    x = n(318254),
    S = n(825484),
    b = n(534514),
    C = n(247928),
    R = n(331322),
    N = n(97808),
    T = n(778712),
    y = n(652215),
    j = n(359778),
    P = n(245604),
    O = n(460905),
    k = n(736653),
    L = n(775602),
    U = n(793574),
    w = n(688810),
    D = n(139286),
    B = n(262295),
    M = n(320095),
    G = n(963852),
    F = n(763754),
    H = n(20851),
    V = n(44120),
    W = n(725807),
    Y = n(986687),
    z = n(101058),
    $ = n(84540),
    q = n(836602),
    Q = n(576622),
    Z = n(761705),
    J = n(270051),
    X = n(652165),
    K = n(287809),
    ee = n(954571),
    et = n(975571),
    en = n(927578),
    er = n(580630),
    ea = n(29292),
    ei = n(440938),
    el = n(4227),
    es = n(298072),
    eo = n(993408),
    ec = n(640634),
    ed = n(940980);
n(321073);
var eu = n(985018);
let e_ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return eu.intl.formatToPlainString(eu.t["/0Yndu"], { num: e.bundledProducts?.length });
        let n = e.bundledProducts ?? [],
            r = [],
            a = !1;
        for (let e of n)
            switch (e.type) {
                case d.R.AVATAR_DECORATION:
                    r.push(eu.intl.formatToPlainString(eu.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case d.R.PROFILE_EFFECT:
                    r.push(eu.intl.formatToPlainString(eu.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case d.R.NAMEPLATE:
                    r.push(eu.intl.formatToPlainString(eu.t["2keXky"], { itemName: e.name })), (a = !0);
            }
        if (a) {
            let e = r.join(", ").replace(/, ([^,]*)$/, " & $1");
            return eu.intl.formatToPlainString(eu.t.Ofrqj6, { joinedItems: e });
        }
        let i = r.join(" & ");
        return eu.intl.formatToPlainString(eu.t.Ofrqj6, { joinedItems: i });
    },
    em = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, a.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === d.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let n = e_(e, t);
                    return e.summary.replace("{joinedItems}", n);
                }
                return e.summary;
            }
            switch (e?.type) {
                case d.R.AVATAR_DECORATION:
                    return eu.intl.string(eu.t["3lv7q2"]);
                case d.R.PROFILE_EFFECT:
                    return eu.intl.string(eu.t.VhJL72);
                case d.R.NAMEPLATE:
                    return eu.intl.string(eu.t.ik37EZ);
                case d.R.PROFILE_FRAME:
                    return eu.intl.string(eu.t.fWzWPp);
                case d.R.BUNDLE:
                    return e_(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
var ep = n(740076),
    ef = n(466459),
    eh = n(442759),
    eE = n(780898),
    eA = n(344346),
    eg = n(139136),
    eI = n(744808),
    ev = n(744053),
    ex = n(778765);
let eS = (e) => {
    let { profileFrame: t } = e,
        n = t.layers.some((e) => "staple" === e.type && "bottom" === e.anchor);
    return (0, r.jsx)("div", {
        className: l()(ev.i1, { [ev.w1]: !n }),
        children: (0, r.jsxs)("div", {
            className: ev.HX,
            children: [
                (0, r.jsx)("img", { src: ex.A, alt: "", className: ev.wt, "aria-hidden": !0, draggable: !1 }),
                (0, r.jsx)(eI.A, { frame: t }),
            ],
        }),
    });
};
var eb = n(623373),
    eC = n(660653),
    eR = n(536572),
    eN = n(885574),
    eT = n(401231);
let ey = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(m.m, {
              position: "top",
              align: "left",
              text: eu.intl.string(eu.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: l()(eT.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: eT.P0,
                          children: (0, r.jsx)(eN.m, { size: "md", color: "currentColor", className: eT.G }),
                      }),
                      (0, r.jsx)(g.E, { variant: "text-md/semibold", children: eu.intl.string(eu.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(g.E, { variant: "text-md/semibold", className: t, children: eu.intl.string(eu.t["6cfuDj"]) });
};
var ej = n(691540),
    eP = n(857250),
    eO = n(97483),
    ek = n(173936),
    eL = n(957565),
    eU = n(758836);
function ew(e) {
    let { skuId: t, tab: n, onTrackClick: i } = e,
        l = a.useCallback(() => {
            ee.default.track(y.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), i?.(eU.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${y.BVt.COLLECTIBLES_SHOP}${((0, eU.cw))(n) ? `?tab=${n}` : ""}#itemSkuId=${t}`;
            (0, eL.C)(e, () => (0, ej.P0)((0, eP.o)(eu.intl.string(eu.t["L/PwZf"]), eO.Ck.SUCCESS)));
        }, [t, n, i]);
    return (0, r.jsx)(E.K, {
        "aria-label": eu.intl.string(eu.t.WqhZss),
        onClick: l,
        icon: ek.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var eD = n(854818),
    eB = n(177366),
    eM = n(674019);
function eG(e) {
    let { product: t, isDarkText: n = !1, isOrbExclusive: a = !1 } = e,
        i = (function (e, t) {
            if (t) return eu.intl.string(eu.t["0TmQRG"]);
            switch (e) {
                case d.R.AVATAR_DECORATION:
                    return eu.intl.string(eu.t["7v0T9P"]);
                case d.R.PROFILE_EFFECT:
                    return eu.intl.string(eu.t.wR5wOo);
                case d.R.PROFILE_FRAME:
                    return eu.intl.string(eu.t.GWrZOd);
                case d.R.NAMEPLATE:
                    return eu.intl.string(eu.t.x5CoXR);
            }
            return null;
        })(t.type, a);
    return null === i
        ? null
        : (0, r.jsx)(g.E, { variant: "text-xxs/normal", className: l()([eM.kL, n ? eM.ap : eM.aK]), children: i });
}
var eF = n(203312),
    eH = n(878112),
    eV = n(140735),
    eW = n(252955);
let eY = (e) => {
    let {
            price: { amount: t, currency: n },
            className: a,
            variant: i = "heading-md/semibold",
        } = e,
        s = (0, er.RS)(t, n);
    return (0, r.jsxs)(g.E, {
        variant: i,
        className: l()(eW.v, a),
        children: [
            (0, r.jsx)(eV.A, { children: eu.intl.format(eu.t["2CEGln"], { price: s }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: s }),
        ],
    });
};
var ez = n(219103),
    e$ = n(469215);
function eq(e) {
    let {
            product: t,
            isPremiumUser: n,
            discount: a,
            className: i,
            discountOfferAmount: s,
            hideStrikethroughPrice: o = !1,
            nitroIconType: c,
            nitroIconSize: d = "md",
        } = e,
        u = (0, eo.WD)(t, { isPremiumUser: n, discount: a });
    if (null == u) return null;
    let { defaultPrice: _, showDefaultPriceOnly: m } = u;
    if (m)
        return (0, r.jsx)("div", {
            className: l()(e$.kG, i),
            children: (0, r.jsx)(ez.x, { priceAmount: _.amount, priceCurrency: _.currency }),
        });
    let { showNitroPrice: p, originalPrice: f, finalPrice: h } = u;
    return (0, r.jsxs)("div", {
        className: l()(e$.kG, i),
        children: [
            o ? null : (0, r.jsx)(eY, { price: f, className: e$.q9 }),
            (0, r.jsx)(ez.x, {
                priceAmount: h.amount,
                priceCurrency: h.currency,
                discount: a,
                className: l()({ [e$.q9]: null == s }),
                nitroIconType: p ? c : void 0,
                nitroIconSize: d,
                discountOfferAmount: s,
            }),
        ],
    });
}
var eQ = n(403581),
    eZ = n(939249),
    eJ = n(532794),
    eX = n(788868),
    eK = n(447806);
let e0 = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, w.Ay)(),
        l = a.useRef(null);
    return (0, r.jsx)(eZ.D, {
        className: eK.F,
        innerRef: l,
        onClick: () => {
            n?.(eU.sH.SUBSCRIBE_NOW),
                (0, eJ.A)({ subscriptionTier: eX.pe.TIER_2, analyticsLocations: i, returnRef: l });
        },
        children: t,
    });
};
var e1 = n(805961);
function e2(e) {
    let { product: t, onTrackClick: n } = e,
        a = (0, eo.yt)(t, y.lid.PREMIUM_TIER_2);
    if (null == a) return null;
    let i = (0, er.RS)(a.amount, a.currency);
    return (0, r.jsxs)("div", {
        className: e1.k,
        children: [
            (0, r.jsx)(m.m, {
                text: eu.intl.string(eu.t.MPFyJ5),
                "aria-label": eu.intl.string(eu.t.X3Ekj8),
                children: (0, r.jsx)(eQ.t, { size: "md", color: "currentColor", className: e1.o }),
            }),
            (0, r.jsx)(g.E, {
                variant: "text-xs/medium",
                children: eu.intl.format(eu.t.Sv8iic, {
                    price: i,
                    subscribeNowHook: (e) => (0, r.jsx)(e0, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var e5 = n(572595),
    e7 = n(450481);
let e6 = (e) => {
    let { product: t, onSuccess: n, onTrackClick: a } = e,
        { handleUseNow: i, isApplying: l } = (0, e7.p)({ product: t, onSuccess: n });
    return (0, r.jsx)(v.$, {
        variant: "primary",
        onClick: () => {
            a?.(eU.sH.USE_NOW), i();
        },
        loading: l,
        text: eu.intl.string(eu.t.MAS7uK),
        fullWidth: !0,
    });
};
var e9 = n(478016),
    e8 = n(661531),
    e3 = n(224016),
    e4 = n(913521);
let te = () => {
    let e = [eu.t.E1NP2x, eu.t.kpMomJ, eu.t.xT1Vfn, eu.t.myyAEr, eu.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: e4.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: e4.ym,
            }),
            (0, r.jsx)(e3.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: e4.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: e4.UJ,
                            children: [
                                (0, r.jsx)(e9.U, { color: e8.A.colors.WHITE }),
                                (0, r.jsx)(g.E, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: eu.intl.string(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
};
var tt = n(17928),
    tn = n(132198),
    tr = n(83554);
let ta = (e) => {
    let { user: t } = e,
        n = en.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: a, ...i } = (0, tt.cf)([q.A], () => q.A.getPendingChanges()),
        l = (0, z.V7)({ userId: t.id, image: a });
    return (0, r.jsx)("div", {
        className: tr.k,
        children: (0, r.jsx)(Y.A, {
            ...i,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, tn._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
var ti = n(561769);
let tl = (e) => {
    let { skuId: t, overrideVariantIndex: n, className: a } = e,
        i = (0, ti.Vm)(t),
        l = (0, es.Q)(i);
    return null != i && (0, eb.B1)(i)
        ? (0, r.jsx)(g.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: a,
              lineClamp: 1,
              children: i.variants[n ?? l].variantLabel,
          })
        : null;
};
var ts = n(661847),
    to = n(846957),
    tc = n(818348),
    td = n(752274);
function tu(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: a } = e,
        i = n ? eu.intl.string(eu.t.wu4gyV) : eu.intl.string(eu.t.eFNRzU),
        l = n || !a;
    return (0, r.jsxs)("div", {
        className: td.eg,
        children: [
            (0, r.jsx)("div", {
                className: td.zR,
                children: (0, r.jsx)(g.E, { variant: "text-xs/normal", className: l ? td.r9 : void 0, children: i }),
            }),
            (0, r.jsx)(ez.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? td.r9 : void 0 }),
        ],
    });
}
function t_(e) {
    let {
            prices: t,
            isPremiumUser: n,
            discount: a,
            product: i,
            hasSufficientOrbs: l,
            onTrackClick: s,
            isProductDisabled: o,
            discountOfferAmount: c,
        } = e,
        d = null != c;
    return 0 === t.length
        ? null
        : t[0].currency === tc.Yr.DISCORD_ORB
          ? (0, r.jsx)(tu, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: l })
          : (0, r.jsxs)("div", {
                className: td.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: td.pw,
                        children: [
                            (0, r.jsx)(eq, {
                                product: i,
                                discount: a,
                                isPremiumUser: n,
                                hideStrikethroughPrice: !n || d,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: c,
                            }),
                            n || d ? null : (0, r.jsx)(e2, { product: i, onTrackClick: s }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tc.Yr.DISCORD_ORB &&
                        (0, r.jsx)(ez.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !l ? td.r9 : void 0,
                        }),
                ],
            });
}
var tm = n(139146),
    tp = n(929283);
let tf = (e, t) => (e.type === d.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var th = n(525723),
    tE = n(212407),
    tA = n(347722),
    tg = n(935094),
    tI = n(57020),
    tv = n(61750),
    tx = n(127157);
let tS = (e) => {
        let { item: t, product: n, user: a } = e,
            i = (0, eo.aw)(n),
            { firstAvatarDecoration: l } = (0, eh.f5)(n);
        switch (t.type) {
            case d.R.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                    className: i ? tx.X2 : tx.h1,
                    children: (0, r.jsx)(tp.i, { user: a, item: t, isHighlighted: !0 }),
                });
            case d.R.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                    className: i ? tx.ME : tx.sm,
                    children: (0, r.jsx)(eg.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case d.R.PROFILE_FRAME:
                return (0, r.jsx)("div", { className: tx.ob, children: (0, r.jsx)(eS, { profileFrame: t }) });
            case d.R.NAMEPLATE:
                return (0, r.jsx)("div", {
                    className: tx.Dz,
                    children: (0, r.jsx)(eA.A, {
                        className: tx.M4,
                        nameplate: t,
                        user: a,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: l,
                        isHighlighted: !0,
                    }),
                });
            default:
                return null;
        }
    },
    tb = (e) => {
        let { product: t, user: n, activeSlide: a = 0 } = e,
            i = t.items.length;
        return (0, r.jsx)("div", {
            className: tx.g4,
            children: (0, r.jsx)(I.t, {
                activeSlide: String(a),
                children: t.items.map((e, a) => {
                    let l = String(a),
                        s = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
                        o = `(${a + 1}/${i})`;
                    return (0, r.jsx)(
                        I.q,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: tx.Kg,
                                children: [
                                    (0, r.jsx)(tS, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(g.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: tx.gx,
                                        children: [s?.name, " ", o],
                                    }),
                                ],
                            }),
                        },
                        l,
                    );
                }),
            }),
        });
    },
    tC = (e) => {
        let { product: t, user: n, activeSlide: a } = e;
        return (0, eo.aw)(t)
            ? (0, r.jsx)(tb, { product: t, user: n, activeSlide: a })
            : (0, eU.pQ)(t.skuId)
              ? (0, r.jsx)(to.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(tS, { item: t.items[0], product: t, user: n })
                : null;
    },
    tR = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(g.E, {
                  variant: "text-sm/normal",
                  className: tx.CU,
                  children: eu.intl.format(eu.t.Q1scdE, {
                      helpdeskArticle: et.A.getArticleURL(y.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    tN = (e) => {
        let {
                product: t,
                user: n,
                category: i,
                shouldCheckoutWithOrbs: s,
                tab: c,
                onClose: u,
                returnRef: f,
                previewingVariantIndexProps: h,
                selectedVariantIndex: E,
                activeBundleSlide: A,
                giftRecipient: I,
                giftingOrigin: N,
                onTrackClick: T,
            } = e,
            { analyticsLocations: j } = (0, w.Ay)(),
            { cardId: P, sessionId: O, tilePosition: L } = (0, ei.uM)() ?? {},
            U = en.Ay.canUseCollectibles(n),
            { previewingVariantIndex: D, handleEntering: B, handleLeaving: M } = h,
            G = tf(t, D),
            F = (0, eb.rb)(t, E);
        o()(null != F, "Selected product should not be null");
        let H = (0, ef.h)(t),
            { isPurchased: Y, isPartiallyOwnedBundle: z } = (0, ef.h)(F),
            { isDisabled: q, disabledReason: Q } = (0, ep.I)(F.skuId),
            K = (0, eo.Zu)({ product: F, isPartiallyOwnedBundle: z, isPurchased: Y }),
            ee = (0, _.bG)([el.A], () => el.A.isClaiming === F?.skuId),
            et = (0, k.Ay)(),
            es = (0, p.M)(et),
            e_ = (0, eo.G0)(F),
            eE = (0, eo.yt)(F, y.lid.DEFAULT),
            eA = eE?.amount === 0,
            { firstAvatarDecoration: eg } = (0, eh.f5)(G ?? F),
            eI = a.useMemo(() => (0, eo.fT)(F, U), [F, U]),
            ev = (0, eR.VG)(t),
            ex = (0, tA.X)(F),
            { enabled: eS } = (0, J.Z)({ location: "collectibles_shop_product_details_modal" }),
            eC = em(F, !1),
            eN = (0, th.V_)(t),
            eT = null != eN,
            ej = (t.variants?.length ?? 0) > 8,
            eP = (0, ed.W)("CollectiblesShopProductDetailsModal"),
            eO = c === eU.G2.ORBS && s ? ti.Hi.ORBS : eP ? ti.Hi.FIAT : void 0,
            ek = (0, ec.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eL,
                isOrbExclusive: ew,
                hasSufficientOrbs: eD,
            } = (0, tI.F)({ product: F, isPremiumUser: U, hasDiscountOffer: eT, prioritizedCurrency: eO }),
            eB = a.useMemo(() => eL.some((e) => e.currency === tc.Yr.DISCORD_ORB), [eL]);
        (0, Z.W)({ disableFetch: !eB });
        let eM = a.useCallback(() => {
            T(eU.sH.BUY_WITH_FIAT),
                (0, V.A)({ skuId: F.skuId, analyticsLocations: j, onClose: (e) => (e ? u() : (0, tc.tE)()) });
        }, [j, u, F.skuId, T]);
        return (
            a.useEffect(() => {
                if (null != eg) return (0, $.p)({ avatarDecoration: eg }), () => (0, $.p)({ avatarDecoration: void 0 });
            }, [eg]),
            (0, r.jsxs)("div", {
                className: tx.qA,
                children: [
                    (0, r.jsx)("div", { className: tx.gn, children: (0, r.jsx)(eF.A, { category: i }) }),
                    (0, r.jsx)(tC, { product: G ?? F, user: n, activeSlide: A }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: tx.h_,
                                children: [
                                    (0, r.jsx)(eG, { product: F, isDarkText: !es, isOrbExclusive: ew }),
                                    (0, r.jsx)(b.D, {
                                        variant: "heading-xl/extrabold",
                                        className: tx.v7,
                                        children: ev,
                                    }),
                                    (0, r.jsx)(g.E, { variant: "text-sm/normal", children: eC }),
                                    (0, r.jsx)(tR, { skuId: F.skuId }),
                                    H.isPurchased || H.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(ey, { className: tx.On, isPartiallyPurchased: z })
                                        : e_
                                          ? (0, r.jsx)(g.E, {
                                                variant: "text-md/semibold",
                                                className: tx.On,
                                                children: eu.intl.string(eu.t.rt69oo),
                                            })
                                          : eS
                                            ? (0, r.jsx)(t_, {
                                                  prices: eL,
                                                  product: F,
                                                  isPremiumUser: U,
                                                  discount: eI,
                                                  hasSufficientOrbs: eD,
                                                  isProductDisabled: q,
                                                  discountOfferAmount: eN,
                                                  onTrackClick: T,
                                              })
                                            : ew
                                              ? null
                                              : (0, r.jsxs)("div", {
                                                    className: tx.pw,
                                                    children: [
                                                        (0, r.jsx)(eq, {
                                                            product: F,
                                                            discount: eI,
                                                            isPremiumUser: U,
                                                            hideStrikethroughPrice: !U || eT,
                                                            nitroIconType: "tooltip",
                                                            nitroIconSize: "xs",
                                                            discountOfferAmount: eN,
                                                        }),
                                                        U || eT
                                                            ? null
                                                            : (0, r.jsx)(e2, { product: F, onTrackClick: T }),
                                                    ],
                                                }),
                                ],
                            }),
                            (0, eb.B1)(t) &&
                                (0, r.jsx)(C.M, {
                                    children: (0, r.jsxs)("div", {
                                        className: l()(tx.Oj, { [tx.OJ]: ej }),
                                        children: [
                                            ej &&
                                                (0, r.jsx)(tl, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: D,
                                                    className: tx.L$,
                                                }),
                                            (0, r.jsx)(ts.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: B,
                                                onVariantExit: M,
                                                wrap: !0,
                                            }),
                                            !ej &&
                                                (0, r.jsx)(tl, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: D,
                                                    className: tx.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== Q && (0, r.jsx)(g.E, { variant: "text-xs/normal", className: tx.H$, children: Q }),
                            (0, r.jsx)(R.B, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (e_ && !U && !eA) {
                                        let e;
                                        return (
                                            (e = eu.intl.string(eu.t.sEAnVH)),
                                            (0, r.jsx)(W.A, {
                                                subscriptionTier: eX.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: () => {
                                                    T(eU.sH.UNLOCK_WITH_NITRO), (0, e5.M)();
                                                },
                                                onSubscribeModalClose: () => {
                                                    (0, e5.t)({
                                                        product: F,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: f,
                                                        analyticsLocations: j,
                                                        tab: c,
                                                        giftRecipient: I,
                                                        giftingOrigin: N,
                                                        cardId: P,
                                                        sessionId: O,
                                                        tilePosition: L,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return K
                                        ? Y
                                            ? ex
                                                ? (0, r.jsxs)(S.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(e6, { product: F, onSuccess: u, onTrackClick: T }),
                                                          (0, r.jsx)(eH.A, {
                                                              primary: !0,
                                                              product: F,
                                                              onSuccess: u,
                                                              giftRecipient: I,
                                                              giftingOrigin: N,
                                                              onTrackClick: T,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(e6, { product: F, onSuccess: u, onTrackClick: T })
                                            : e_
                                              ? (0, r.jsx)(v.$, {
                                                    loading: ee,
                                                    loadingStartedLabel: eu.intl.string(eu.t["TYw+9s"]),
                                                    loadingFinishedLabel: eu.intl.string(eu.t.Pg1UP5),
                                                    onClick: async () => {
                                                        T(eU.sH.ADD_TO_COLLECTION),
                                                            await (0, ea.iJ)(F.skuId),
                                                            u(),
                                                            (0, tv.A)({
                                                                product: F,
                                                                analyticsLocations: j,
                                                                purchaseType: eU.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eu.intl.string(eu.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eL.map((e, t) => {
                                                        let n,
                                                            a = 0 === t;
                                                        if (e.currency === tc.Yr.DISCORD_ORB) {
                                                            let t, n, i, l;
                                                            return (
                                                                (t = q
                                                                    ? eu.intl.string(eu.t.cTdr3x)
                                                                    : eu.intl.string(eu.t.zqh7ZM)),
                                                                (n = !eD || q),
                                                                (i = eu.intl.formatToPlainString(eu.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (l = n ? `${i}, ${t}` : i),
                                                                (0, r.jsx)(m.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(v.$, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            T(eU.sH.BUY_WITH_ORBS),
                                                                                (0, X.B4)({
                                                                                    skuId: F.skuId,
                                                                                    onCheckoutSuccess: (e) => {
                                                                                        let { entitlements: t } = e;
                                                                                        (0, ea.gB)(),
                                                                                            u(),
                                                                                            (0, tv.A)({
                                                                                                product: F,
                                                                                                analyticsLocations: j,
                                                                                                itemConsumed:
                                                                                                    t[0]?.consumed,
                                                                                                purchaseType: eU.gs.ORB,
                                                                                            });
                                                                                    },
                                                                                    analyticsLocations: j,
                                                                                });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": l,
                                                                        text: eu.intl.format(
                                                                            ek ? eu.t.JC15qj : eu.t.lOtBOI,
                                                                            {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(x.C, {
                                                                                        className: tx.fN,
                                                                                        size: "sm",
                                                                                        color: "currentColor",
                                                                                    }),
                                                                            },
                                                                        ),
                                                                        fullWidth: !0,
                                                                    }),
                                                                })
                                                            );
                                                        }
                                                        return (
                                                            (n = ((e) => {
                                                                switch (e.type) {
                                                                    case d.R.BUNDLE:
                                                                        return eu.intl.string(eu.t.V1AWw0);
                                                                    case d.R.PROFILE_EFFECT:
                                                                        return eu.intl.string(eu.t.kAeDcK);
                                                                    case d.R.NAMEPLATE:
                                                                        return eu.intl.string(eu.t.H3vhqU);
                                                                    case d.R.PROFILE_FRAME:
                                                                        return eu.intl.string(eu.t.BlSW1e);
                                                                    case d.R.AVATAR_DECORATION:
                                                                    default:
                                                                        return eu.intl.string(eu.t.AQ0Veg);
                                                                }
                                                            })(F)),
                                                            eT
                                                                ? (n = eu.intl.formatToPlainString(eu.t["5U5RB5"], {
                                                                      discountOfferAmount: eN,
                                                                  }))
                                                                : eS &&
                                                                  (n = eu.intl.formatToPlainString(eu.t["cNSL/j"], {
                                                                      price: (0, er.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(S.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(v.$, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: eM,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    ex &&
                                                                        (0, r.jsx)(eH.A, {
                                                                            primary: a,
                                                                            product: F,
                                                                            onSuccess: u,
                                                                            giftRecipient: I,
                                                                            giftingOrigin: N,
                                                                            onTrackClick: T,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : ex
                                          ? (0, r.jsx)(eH.A, {
                                                primary: !0,
                                                product: F,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: I,
                                                giftingOrigin: N,
                                                onTrackClick: T,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(g.E, {
                                className: l()(tx.ed, !es && tx.un),
                                variant: "text-xxs/normal",
                                children: e_ && !Y ? eu.intl.string(eu.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    tT = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: tx.mV,
            children: (0, r.jsx)(B.A, {
                avatar: (0, r.jsx)(N.eu, {
                    src: t.avatarSrc,
                    size: T._3.SIZE_32,
                    "aria-label": t.name,
                    status: y.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(tx.$L, n),
            }),
        });
    },
    ty = (e) => {
        let { user: t, nameplate: n, avatarDecoration: a } = e,
            i = (0, eE.Ov)();
        return (0, r.jsx)("div", {
            className: tx.nJ,
            role: "img",
            "aria-label": eu.intl.string(eu.t.SZeUdR),
            children: (0, r.jsxs)(C.M, {
                children: [
                    (0, r.jsx)(tT, { user: i.mallow, innerClassName: tx.ab }),
                    (0, r.jsxs)(g.E, {
                        variant: "text-sm/semibold",
                        className: tx.OS,
                        children: [eu.intl.string(eu.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(tT, { user: i.phibi, innerClassName: tx.e9 }),
                    (0, r.jsx)("div", {
                        className: tx.mV,
                        children: (0, r.jsx)(eA.A, {
                            className: tx.M4,
                            innerClassName: tx.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: a,
                        }),
                    }),
                    (0, r.jsx)(tT, { user: i.locke, innerClassName: tx.e9 }),
                    (0, r.jsxs)(g.E, {
                        variant: "text-sm/semibold",
                        className: tx.OS,
                        children: [eu.intl.string(eu.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(tT, { user: i.boom, innerClassName: tx.bD }),
                    (0, r.jsx)(tT, { user: i.cherry, innerClassName: tx.bD }),
                ],
            }),
        });
    },
    tj = (e) => {
        let { product: t, user: n, activeBundleSlide: a, isTransitioning: i } = e,
            s = (0, _.bG)([L.A], () => L.A.useReducedMotion),
            o = en.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, _.cf)([q.A], () => q.A.getPendingChanges()),
            m = (0, z.V7)({ userId: n.id, image: c }),
            p = t.type === d.R.AVATAR_DECORATION,
            [f] = t.items,
            { firstAvatarDecoration: h, firstProfileEffect: E, firstNameplate: A } = (0, eh.f5)(t),
            g = null != E,
            I = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(Y.A, {
                            ...u,
                            pendingAvatar: m,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: h,
                            pendingProfileEffect: E,
                            disabledInputs: !0,
                            hideMessageInput: !g,
                            hideCustomStatus: !0,
                            hideBioSection: p,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        p && (0, r.jsx)(tP, { user: n }),
                    ],
                }),
            v = (e) => (0, r.jsx)(ty, { user: n, nameplate: e, avatarDecoration: h });
        if (t.type === d.R.BUNDLE) {
            if (!(0, eC.Wb)(t))
                return (0, r.jsx)("div", {
                    className: tx.RA,
                    children: (0, r.jsx)("div", { className: tx.bo, children: I() }),
                });
            {
                let e = a ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !s;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: l()(tx.Zj, i && c ? tx.p2 : ""), children: v(n) })
                    : (0, r.jsx)("div", { className: l()(tx.Ak, i && c ? tx.p2 : ""), children: I() });
            }
        }
        return null != A
            ? (0, r.jsx)("div", { className: tx.Zj, children: v(A) })
            : (0, r.jsx)("div", { className: f?.type === d.R.AVATAR_DECORATION ? tx.RA : tx.Ak, children: I() });
    },
    tP = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, M.rh)({
                    ...(0, G.Ay)({ author: t, channelId: "1337", content: eu.intl.string(eu.t.d5YwK5) }),
                    state: y.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eu.intl.string(eu.t["TN+ZvB"]),
            children: (0, r.jsx)(C.M, {
                children: (0, r.jsxs)(j.Z, {
                    className: tx.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(H.A, { className: tx.G5, author: (0, F.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: tx.lG,
                            children: [
                                (0, r.jsx)(P.U, { size: "md", color: "currentColor", className: tx.hq }),
                                (0, r.jsx)(O.n, { size: "md", color: "currentColor", className: tx.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    tO = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: s,
                returnRef: m,
                analyticsSource: p,
                analyticsLocations: I,
                shouldCheckoutWithOrbs: v,
                tab: x,
                giftRecipient: S,
                giftingOrigin: b,
            } = e,
            C = (0, _.bG)([K.default], () => K.default.getCurrentUser()),
            R = (0, tg.f)(i),
            { previewingVariantIndex: N } = R,
            T = (0, es.Q)(i),
            j = tf(i, N),
            P = (0, eb.rb)(i, T);
        o()(null != P, "Selected product should not be null");
        let { analyticsLocations: O } = (0, w.Ay)([...I, U.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eB.Yr)(P.skuId);
        let k = (0, tE.U1)(s);
        a.useEffect(() => {
            null != C && (0, Q.A)(C.id, C.getAvatarURL(void 0, 80));
        }, [C]);
        let L = a.useMemo(() => (0, eo.V6)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            ee.default.track(y.HAw.OPEN_MODAL, {
                type: y.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: O,
                sku_id: P.skuId,
                product_type: L,
            }),
                (0, ea.RD)(P.skuId);
        }, [p, O, P.skuId, L]);
        let { cardId: B, sessionId: M, tilePosition: G } = (0, ei.uM)() ?? {},
            F = a.useMemo(() => (0, eb.v8)(i), [i]),
            H = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: r } = e,
                    { cardId: i, sessionId: l } = (0, ei.uM)() ?? {};
                return a.useCallback(
                    (e) => {
                        ee.default.track(y.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: t,
                            cta: e,
                            shop_session_id: l,
                            card_id: i,
                            product_sku_ids: n,
                            location_stack: r,
                        });
                    },
                    [t, r, i, n, l],
                );
            })({ skuId: P.skuId, productSkuIds: F, analyticsLocations: O });
        (0, D.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: P.skuId,
                card_id: B,
                shop_session_id: M,
                position_in_section: G,
                product_sku_ids: F,
                location_stack: O,
            },
        });
        let V = (0, X.o6)(),
            W = t === f.ip.EXITING,
            Y = (0, th.$R)(i),
            z = Y?.amount,
            $ = null != z && (Y?.discountId === eX.eR || Y?.discountId === eX.Qz),
            { activeSlide: q, isTransitioning: Z } = (function (e) {
                let { slideCount: t, intervalMs: n = 3e3 } = e,
                    [r, i] = (0, a.useState)(0),
                    [l, s] = (0, a.useState)(!1),
                    o = (0, a.useCallback)(
                        (e) => {
                            l ||
                                e < 0 ||
                                e >= t ||
                                (s(!0),
                                setTimeout(() => {
                                    i(e), s(!1);
                                }, 300));
                        },
                        [l, t, 300],
                    );
                return (
                    (0, a.useEffect)(() => {
                        if (t <= 1) return;
                        let e = setInterval(() => {
                            o((r + 1) % t);
                        }, n);
                        return () => clearInterval(e);
                    }, [t, n, r, o]),
                    { activeSlide: r, isTransitioning: l }
                );
            })({ slideCount: a.useMemo(() => ((0, eo.aw)(P) ? P.items.length : 0), [P]), intervalMs: 5e3 });
        return null == C
            ? null
            : (0, r.jsx)(w.f5, {
                  value: O,
                  children: (0, r.jsxs)(h.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: tx.CR,
                      returnRef: m,
                      transitionState: t,
                      size: h.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(h.$m, {
                              "data-migration-pending": !0,
                              className: tx.jE,
                              children: [
                                  (0, r.jsx)(tN, {
                                      user: C,
                                      product: i,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: R,
                                      selectedVariantIndex: T,
                                      shouldCheckoutWithOrbs: v,
                                      tab: x,
                                      activeBundleSlide: q,
                                      giftRecipient: S?.id !== C.id ? S : void 0,
                                      giftingOrigin: S?.id !== C.id ? b : void 0,
                                      onTrackClick: H,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          tx.i1,
                                          P.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? tx.bF
                                              : P.type === d.R.AVATAR_DECORATION
                                                ? tx.Jq
                                                : tx.eF,
                                      ),
                                      style: { backgroundImage: `url(${k})` },
                                      children: [
                                          (0, eU.pQ)(i.skuId)
                                              ? i.skuId === eU.Dp.ORB_PROFILE_BADGE
                                                  ? V || W
                                                      ? null
                                                      : (0, r.jsx)(ta, { user: C })
                                                  : i.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(te, {})
                                                    : (0, r.jsx)(to.B, { product: i, className: tx.Ms })
                                              : (0, r.jsx)(tj, {
                                                    user: C,
                                                    product: j ?? P,
                                                    activeBundleSlide: q,
                                                    isTransitioning: Z,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: tx.VG,
                                              children: [
                                                  (0, r.jsx)(tm.R, {
                                                      product: i,
                                                      selectedVariantIndex: T,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: H,
                                                  }),
                                                  (0, r.jsx)(ew, { skuId: P.skuId, tab: x, onTrackClick: H }),
                                                  (0, r.jsx)(E.K, {
                                                      "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                                      onClick: () => {
                                                          H(eU.sH.CLOSE_DETAIL), n();
                                                      },
                                                      icon: A.d,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          $ &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(h.jl, {
                                      "data-migration-pending": !0,
                                      className: tx.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: tx.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: tx.do,
                                              children: [
                                                  (0, r.jsx)(g.E, {
                                                      variant: "text-sm/semibold",
                                                      className: tx.Q2,
                                                      children: eu.intl.format(eu.t["78ph4b"], {
                                                          discountOfferAmount: z,
                                                      }),
                                                  }),
                                                  Y?.expiresAt != null && (0, r.jsx)(eD.e, { endDate: Y.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
