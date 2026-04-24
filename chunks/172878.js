n.d(t, { default: () => tL });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(110259),
    d = n(575593),
    u = n(334279),
    _ = n(702841),
    m = n(990078),
    p = n(462887),
    h = n(231723),
    f = n(935462),
    g = n(408278),
    E = n(972213),
    A = n(834730),
    v = n(430690),
    I = n(821609),
    x = n(318254),
    T = n(825484),
    S = n(534514),
    y = n(247928),
    R = n(331322),
    N = n(97808),
    C = n(778712),
    b = n(652215),
    j = n(359778),
    w = n(245604),
    L = n(460905),
    P = n(736653),
    k = n(775602),
    O = n(793574),
    U = n(688810),
    D = n(139286),
    M = n(262295),
    B = n(320095),
    F = n(963852),
    G = n(763754),
    H = n(20851),
    V = n(44120),
    W = n(725807),
    z = n(986687),
    Y = n(101058),
    $ = n(84540),
    Q = n(836602),
    q = n(576622),
    Z = n(761705),
    X = n(270051),
    J = n(652165),
    K = n(287809),
    ee = n(954571),
    et = n(975571),
    en = n(927578),
    er = n(580630),
    ei = n(693477),
    ea = n(440938),
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
            i = !1;
        for (let e of n)
            switch (e.type) {
                case d.R.AVATAR_DECORATION:
                    r.push(eu.intl.formatToPlainString(eu.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case d.R.PROFILE_EFFECT:
                    r.push(eu.intl.formatToPlainString(eu.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case d.R.NAMEPLATE:
                    r.push(eu.intl.formatToPlainString(eu.t["2keXky"], { itemName: e.name })), (i = !0);
            }
        if (i) {
            let e = r.join(", ").replace(/, ([^,]*)$/, " & $1");
            return eu.intl.formatToPlainString(eu.t.Ofrqj6, { joinedItems: e });
        }
        let a = r.join(" & ");
        return eu.intl.formatToPlainString(eu.t.Ofrqj6, { joinedItems: a });
    },
    em = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.useMemo)(() => {
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
    eh = n(466459),
    ef = n(442759),
    eg = n(780898),
    eE = n(344346),
    eA = n(139136),
    ev = n(744808),
    eI = n(744053),
    ex = n(778765);
let eT = (e) => {
    let { profileFrame: t } = e,
        n = t.layers.some((e) => "staple" === e.type && "bottom" === e.anchor);
    return (0, r.jsx)("div", {
        className: l()(eI.i1, { [eI.w1]: !n }),
        children: (0, r.jsxs)("div", {
            className: eI.HX,
            children: [
                (0, r.jsx)("img", { src: ex.A, alt: "", className: eI.wt, "aria-hidden": !0, draggable: !1 }),
                (0, r.jsx)(ev.A, { frame: t }),
            ],
        }),
    });
};
var eS = n(623373),
    ey = n(660653),
    eR = n(536572),
    eN = n(885574),
    eC = n(401231);
let eb = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(m.m, {
              position: "top",
              align: "left",
              text: eu.intl.string(eu.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: l()(eC.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: eC.P0,
                          children: (0, r.jsx)(eN.m, { size: "md", color: "currentColor", className: eC.G }),
                      }),
                      (0, r.jsx)(A.E, { variant: "text-md/semibold", children: eu.intl.string(eu.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(A.E, { variant: "text-md/semibold", className: t, children: eu.intl.string(eu.t["6cfuDj"]) });
};
var ej = n(691540),
    ew = n(857250),
    eL = n(97483),
    eP = n(173936),
    ek = n(957565),
    eO = n(758836);
function eU(e) {
    let { skuId: t, tab: n, onTrackClick: a } = e,
        l = i.useCallback(() => {
            ee.default.track(b.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), a?.(eO.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${b.BVt.COLLECTIBLES_SHOP}${((0, eO.cw))(n) ? `?tab=${n}` : ""}#itemSkuId=${t}`;
            (0, ek.C)(e, () => (0, ej.P0)((0, ew.o)(eu.intl.string(eu.t["L/PwZf"]), eL.Ck.SUCCESS)));
        }, [t, n, a]);
    return (0, r.jsx)(g.K, {
        "aria-label": eu.intl.string(eu.t.WqhZss),
        onClick: l,
        icon: eP.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var eD = n(854818),
    eM = n(177366),
    eB = n(674019);
function eF(e) {
    let { product: t, isDarkText: n = !1, isOrbExclusive: i = !1 } = e,
        a = (function (e, t) {
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
        })(t.type, i);
    return null === a
        ? null
        : (0, r.jsx)(A.E, { variant: "text-xxs/normal", className: l()([eB.kL, n ? eB.ap : eB.aK]), children: a });
}
var eG = n(203312),
    eH = n(878112),
    eV = n(140735),
    eW = n(252955);
let ez = (e) => {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: a = "heading-md/semibold",
        } = e,
        s = (0, er.RS)(t, n);
    return (0, r.jsxs)(A.E, {
        variant: a,
        className: l()(eW.v, i),
        children: [
            (0, r.jsx)(eV.A, { children: eu.intl.format(eu.t["2CEGln"], { price: s }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: s }),
        ],
    });
};
var eY = n(219103),
    e$ = n(469215);
function eQ(e) {
    let {
            product: t,
            isPremiumUser: n,
            discount: i,
            className: a,
            discountOfferAmount: s,
            hideStrikethroughPrice: o = !1,
            nitroIconType: c,
            nitroIconSize: d = "md",
        } = e,
        u = (0, eo.WD)(t, { isPremiumUser: n, discount: i });
    if (null == u) return null;
    let { defaultPrice: _, showDefaultPriceOnly: m } = u;
    if (m)
        return (0, r.jsx)("div", {
            className: l()(e$.kG, a),
            children: (0, r.jsx)(eY.x, { priceAmount: _.amount, priceCurrency: _.currency }),
        });
    let { showNitroPrice: p, originalPrice: h, finalPrice: f } = u;
    return (0, r.jsxs)("div", {
        className: l()(e$.kG, a),
        children: [
            o ? null : (0, r.jsx)(ez, { price: h, className: e$.q9 }),
            (0, r.jsx)(eY.x, {
                priceAmount: f.amount,
                priceCurrency: f.currency,
                discount: i,
                className: l()({ [e$.q9]: null == s }),
                nitroIconType: p ? c : void 0,
                nitroIconSize: d,
                discountOfferAmount: s,
            }),
        ],
    });
}
var eq = n(403581),
    eZ = n(939249),
    eX = n(532794),
    eJ = n(788868),
    eK = n(447806);
let e0 = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: a } = (0, U.Ay)(),
        l = i.useRef(null);
    return (0, r.jsx)(eZ.D, {
        className: eK.F,
        innerRef: l,
        onClick: () => {
            n?.(eO.sH.SUBSCRIBE_NOW),
                (0, eX.A)({ subscriptionTier: eJ.pe.TIER_2, analyticsLocations: a, returnRef: l });
        },
        children: t,
    });
};
var e1 = n(805961);
function e2(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, eo.yt)(t, b.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let a = (0, er.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: e1.k,
        children: [
            (0, r.jsx)(m.m, {
                text: eu.intl.string(eu.t.MPFyJ5),
                "aria-label": eu.intl.string(eu.t.X3Ekj8),
                children: (0, r.jsx)(eq.t, { size: "md", color: "currentColor", className: e1.o }),
            }),
            (0, r.jsx)(A.E, {
                variant: "text-xs/medium",
                children: eu.intl.format(eu.t.Sv8iic, {
                    price: a,
                    subscribeNowHook: (e) => (0, r.jsx)(e0, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var e7 = n(572595),
    e5 = n(450481);
let e6 = (e) => {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: a, isApplying: l } = (0, e5.p)({ product: t, onSuccess: n });
    return (0, r.jsx)(I.$, {
        variant: "primary",
        onClick: () => {
            i?.(eO.sH.USE_NOW), a();
        },
        loading: l,
        text: eu.intl.string(eu.t.MAS7uK),
        fullWidth: !0,
    });
};
var e9 = n(478016),
    e4 = n(661531),
    e8 = n(224016),
    e3 = n(913521);
let te = () => {
    let e = [eu.t.E1NP2x, eu.t.kpMomJ, eu.t.xT1Vfn, eu.t.myyAEr, eu.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: e3.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: e3.ym,
            }),
            (0, r.jsx)(e8.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: e3.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: e3.UJ,
                            children: [
                                (0, r.jsx)(e9.U, { color: e4.A.colors.WHITE }),
                                (0, r.jsx)(A.E, {
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
let ti = (e) => {
    let { user: t } = e,
        n = en.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...a } = (0, tt.cf)([Q.A], () => Q.A.getPendingChanges()),
        l = (0, Y.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: tr.k,
        children: (0, r.jsx)(z.A, {
            ...a,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, tn._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
var ta = n(561769);
let tl = (e) => {
    let { skuId: t, overrideVariantIndex: n, className: i } = e,
        a = (0, ta.Vm)(t),
        l = (0, es.Q)(a);
    return null != a && (0, eS.B1)(a)
        ? (0, r.jsx)(A.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: i,
              lineClamp: 1,
              children: a.variants[n ?? l].variantLabel,
          })
        : null;
};
var ts = n(661847),
    to = n(846957),
    tc = n(818348),
    td = n(752274);
function tu(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i } = e,
        a = n ? eu.intl.string(eu.t.wu4gyV) : eu.intl.string(eu.t.eFNRzU),
        l = n || !i;
    return (0, r.jsxs)("div", {
        className: td.eg,
        children: [
            (0, r.jsx)("div", {
                className: td.zR,
                children: (0, r.jsx)(A.E, { variant: "text-xs/normal", className: l ? td.r9 : void 0, children: a }),
            }),
            (0, r.jsx)(eY.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? td.r9 : void 0 }),
        ],
    });
}
function t_(e) {
    let {
            prices: t,
            isPremiumUser: n,
            discount: i,
            product: a,
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
                            (0, r.jsx)(eQ, {
                                product: a,
                                discount: i,
                                isPremiumUser: n,
                                hideStrikethroughPrice: !n || d,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: c,
                            }),
                            n || d ? null : (0, r.jsx)(e2, { product: a, onTrackClick: s }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tc.Yr.DISCORD_ORB &&
                        (0, r.jsx)(eY.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !l ? td.r9 : void 0,
                        }),
                ],
            });
}
var tm = n(139146),
    tp = n(929283);
let th = (e, t) => (e.type === d.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var tf = n(525723),
    tg = n(212407),
    tE = n(347722),
    tA = n(935094),
    tv = n(57020),
    tI = n(61750),
    tx = n(127157);
let tT = (e) => {
        let { item: t, product: n, user: i } = e,
            a = (0, eo.aw)(n),
            { firstAvatarDecoration: l } = (0, ef.f5)(n);
        switch (t.type) {
            case d.R.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                    className: a ? tx.X2 : tx.h1,
                    children: (0, r.jsx)(tp.i, { user: i, item: t, isHighlighted: !0 }),
                });
            case d.R.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                    className: a ? tx.ME : tx.sm,
                    children: (0, r.jsx)(eA.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case d.R.PROFILE_FRAME:
                return (0, r.jsx)("div", { className: tx.ob, children: (0, r.jsx)(eT, { profileFrame: t }) });
            case d.R.NAMEPLATE:
                return (0, r.jsx)("div", {
                    className: tx.Dz,
                    children: (0, r.jsx)(eE.A, {
                        className: tx.M4,
                        nameplate: t,
                        user: i,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: l,
                        isHighlighted: !0,
                    }),
                });
            default:
                return null;
        }
    },
    tS = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: tx.g4,
            children: (0, r.jsx)(v.t, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        s = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        o = `(${i + 1}/${a})`;
                    return (0, r.jsx)(
                        v.q,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: tx.Kg,
                                children: [
                                    (0, r.jsx)(tT, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(A.E, {
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
    ty = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, eo.aw)(t)
            ? (0, r.jsx)(tS, { product: t, user: n, activeSlide: i })
            : (0, eO.pQ)(t.skuId)
              ? (0, r.jsx)(to.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(tT, { item: t.items[0], product: t, user: n })
                : null;
    },
    tR = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(A.E, {
                  variant: "text-sm/normal",
                  className: tx.CU,
                  children: eu.intl.format(eu.t.Q1scdE, {
                      helpdeskArticle: et.A.getArticleURL(b.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    tN = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: s,
                tab: c,
                onClose: u,
                returnRef: h,
                previewingVariantIndexProps: f,
                selectedVariantIndex: g,
                activeBundleSlide: E,
                giftRecipient: v,
                giftingOrigin: N,
                onTrackClick: C,
            } = e,
            { analyticsLocations: j } = (0, U.Ay)(),
            { cardId: w, sessionId: L, tilePosition: k } = (0, ea.uM)() ?? {},
            O = en.Ay.canUseCollectibles(n),
            { previewingVariantIndex: D, handleEntering: M, handleLeaving: B } = f,
            F = th(t, D),
            G = (0, eS.rb)(t, g);
        o()(null != G, "Selected product should not be null");
        let H = (0, eh.h)(t),
            { isPurchased: z, isPartiallyOwnedBundle: Y } = (0, eh.h)(G),
            { isDisabled: Q, disabledReason: q } = (0, ep.I)(G.skuId),
            K = (0, eo.Zu)({ product: G, isPartiallyOwnedBundle: Y, isPurchased: z }),
            ee = (0, _.bG)([el.A], () => el.A.isClaiming === G?.skuId),
            et = (0, P.Ay)(),
            es = (0, p.M)(et),
            e_ = (0, eo.G0)(G),
            eg = (0, eo.yt)(G, b.lid.DEFAULT),
            eE = eg?.amount === 0,
            { firstAvatarDecoration: eA } = (0, ef.f5)(F ?? G),
            ev = i.useMemo(() => (0, eo.fT)(G, O), [G, O]),
            eI = (0, eR.VG)(t),
            ex = (0, tE.X)(G),
            { enabled: eT } = (0, X.Z)({ location: "collectibles_shop_product_details_modal" }),
            ey = em(G, !1),
            eN = (0, tf.V_)(t),
            eC = null != eN,
            ej = (t.variants?.length ?? 0) > 8,
            ew = (0, ed.W)("CollectiblesShopProductDetailsModal"),
            eL = c === eO.G2.ORBS && s ? ta.Hi.ORBS : ew ? ta.Hi.FIAT : void 0,
            eP = (0, ec.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: ek,
                isOrbExclusive: eU,
                hasSufficientOrbs: eD,
            } = (0, tv.F)({ product: G, isPremiumUser: O, hasDiscountOffer: eC, prioritizedCurrency: eL }),
            eM = i.useMemo(() => ek.some((e) => e.currency === tc.Yr.DISCORD_ORB), [ek]);
        (0, Z.W)({ disableFetch: !eM });
        let eB = i.useCallback(() => {
            C(eO.sH.BUY_WITH_FIAT),
                (0, V.A)({ skuId: G.skuId, analyticsLocations: j, onClose: (e) => (e ? u() : (0, tc.tE)()) });
        }, [j, u, G.skuId, C]);
        return (
            i.useEffect(() => {
                if (null != eA) return (0, $.p)({ avatarDecoration: eA }), () => (0, $.p)({ avatarDecoration: void 0 });
            }, [eA]),
            (0, r.jsxs)("div", {
                className: tx.qA,
                children: [
                    (0, r.jsx)("div", { className: tx.gn, children: (0, r.jsx)(eG.A, { category: a }) }),
                    (0, r.jsx)(ty, { product: F ?? G, user: n, activeSlide: E }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: tx.h_,
                                children: [
                                    (0, r.jsx)(eF, { product: G, isDarkText: !es, isOrbExclusive: eU }),
                                    (0, r.jsx)(S.D, {
                                        variant: "heading-xl/extrabold",
                                        className: tx.v7,
                                        children: eI,
                                    }),
                                    (0, r.jsx)(A.E, { variant: "text-sm/normal", children: ey }),
                                    (0, r.jsx)(tR, { skuId: G.skuId }),
                                    H.isPurchased || H.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(eb, { className: tx.On, isPartiallyPurchased: Y })
                                        : e_
                                          ? (0, r.jsx)(A.E, {
                                                variant: "text-md/semibold",
                                                className: tx.On,
                                                children: eu.intl.string(eu.t.rt69oo),
                                            })
                                          : eT
                                            ? (0, r.jsx)(t_, {
                                                  prices: ek,
                                                  product: G,
                                                  isPremiumUser: O,
                                                  discount: ev,
                                                  hasSufficientOrbs: eD,
                                                  isProductDisabled: Q,
                                                  discountOfferAmount: eN,
                                                  onTrackClick: C,
                                              })
                                            : eU
                                              ? null
                                              : (0, r.jsxs)("div", {
                                                    className: tx.pw,
                                                    children: [
                                                        (0, r.jsx)(eQ, {
                                                            product: G,
                                                            discount: ev,
                                                            isPremiumUser: O,
                                                            hideStrikethroughPrice: !O || eC,
                                                            nitroIconType: "tooltip",
                                                            nitroIconSize: "xs",
                                                            discountOfferAmount: eN,
                                                        }),
                                                        O || eC
                                                            ? null
                                                            : (0, r.jsx)(e2, { product: G, onTrackClick: C }),
                                                    ],
                                                }),
                                ],
                            }),
                            (0, eS.B1)(t) &&
                                (0, r.jsx)(y.M, {
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
                                                onVariantEnter: M,
                                                onVariantExit: B,
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
                            null !== q && (0, r.jsx)(A.E, { variant: "text-xs/normal", className: tx.H$, children: q }),
                            (0, r.jsx)(R.B, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (e_ && !O && !eE) {
                                        let e;
                                        return (
                                            (e = eu.intl.string(eu.t.sEAnVH)),
                                            (0, r.jsx)(W.A, {
                                                subscriptionTier: eJ.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: () => {
                                                    C(eO.sH.UNLOCK_WITH_NITRO), (0, e7.M)();
                                                },
                                                onSubscribeModalClose: () => {
                                                    (0, e7.t)({
                                                        product: G,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: h,
                                                        analyticsLocations: j,
                                                        tab: c,
                                                        giftRecipient: v,
                                                        giftingOrigin: N,
                                                        cardId: w,
                                                        sessionId: L,
                                                        tilePosition: k,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return K
                                        ? z
                                            ? ex
                                                ? (0, r.jsxs)(T.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(e6, { product: G, onSuccess: u, onTrackClick: C }),
                                                          (0, r.jsx)(eH.A, {
                                                              primary: !0,
                                                              product: G,
                                                              onSuccess: u,
                                                              giftRecipient: v,
                                                              giftingOrigin: N,
                                                              onTrackClick: C,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(e6, { product: G, onSuccess: u, onTrackClick: C })
                                            : e_
                                              ? (0, r.jsx)(I.$, {
                                                    loading: ee,
                                                    loadingStartedLabel: eu.intl.string(eu.t["TYw+9s"]),
                                                    loadingFinishedLabel: eu.intl.string(eu.t.Pg1UP5),
                                                    onClick: async () => {
                                                        C(eO.sH.ADD_TO_COLLECTION),
                                                            await (0, ei.iJ)(G.skuId),
                                                            u(),
                                                            (0, tI.A)({
                                                                product: G,
                                                                analyticsLocations: j,
                                                                purchaseType: eO.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eu.intl.string(eu.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: ek.map((e, t) => {
                                                        let n,
                                                            i = 0 === t;
                                                        if (e.currency === tc.Yr.DISCORD_ORB) {
                                                            let t, n, a, l;
                                                            return (
                                                                (t = Q
                                                                    ? eu.intl.string(eu.t.cTdr3x)
                                                                    : eu.intl.string(eu.t.zqh7ZM)),
                                                                (n = !eD || Q),
                                                                (a = eu.intl.formatToPlainString(eu.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (l = n ? `${a}, ${t}` : a),
                                                                (0, r.jsx)(m.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(I.$, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            C(eO.sH.BUY_WITH_ORBS),
                                                                                (0, J.B4)({
                                                                                    skuId: G.skuId,
                                                                                    onCheckoutSuccess: (e) => {
                                                                                        let { entitlements: t } = e;
                                                                                        (0, ei.gB)(),
                                                                                            u(),
                                                                                            (0, tI.A)({
                                                                                                product: G,
                                                                                                analyticsLocations: j,
                                                                                                itemConsumed:
                                                                                                    t[0]?.consumed,
                                                                                                purchaseType: eO.gs.ORB,
                                                                                            });
                                                                                    },
                                                                                    analyticsLocations: j,
                                                                                });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": l,
                                                                        text: eu.intl.format(
                                                                            eP ? eu.t.JC15qj : eu.t.lOtBOI,
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
                                                            })(G)),
                                                            eC
                                                                ? (n = eu.intl.formatToPlainString(eu.t["5U5RB5"], {
                                                                      discountOfferAmount: eN,
                                                                  }))
                                                                : eT &&
                                                                  (n = eu.intl.formatToPlainString(eu.t["cNSL/j"], {
                                                                      price: (0, er.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(T.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(I.$, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: eB,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    ex &&
                                                                        (0, r.jsx)(eH.A, {
                                                                            primary: i,
                                                                            product: G,
                                                                            onSuccess: u,
                                                                            giftRecipient: v,
                                                                            giftingOrigin: N,
                                                                            onTrackClick: C,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : ex
                                          ? (0, r.jsx)(eH.A, {
                                                primary: !0,
                                                product: G,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: v,
                                                giftingOrigin: N,
                                                onTrackClick: C,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(A.E, {
                                className: l()(tx.ed, !es && tx.un),
                                variant: "text-xxs/normal",
                                children: e_ && !z ? eu.intl.string(eu.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    tC = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: tx.mV,
            children: (0, r.jsx)(M.A, {
                avatar: (0, r.jsx)(N.eu, {
                    src: t.avatarSrc,
                    size: C._3.SIZE_32,
                    "aria-label": t.name,
                    status: b.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(tx.$L, n),
            }),
        });
    },
    tb = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, eg.Ov)();
        return (0, r.jsx)("div", {
            className: tx.nJ,
            role: "img",
            "aria-label": eu.intl.string(eu.t.SZeUdR),
            children: (0, r.jsxs)(y.M, {
                children: [
                    (0, r.jsx)(tC, { user: a.mallow, innerClassName: tx.ab }),
                    (0, r.jsxs)(A.E, {
                        variant: "text-sm/semibold",
                        className: tx.OS,
                        children: [eu.intl.string(eu.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(tC, { user: a.phibi, innerClassName: tx.e9 }),
                    (0, r.jsx)("div", {
                        className: tx.mV,
                        children: (0, r.jsx)(eE.A, {
                            className: tx.M4,
                            innerClassName: tx.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(tC, { user: a.locke, innerClassName: tx.e9 }),
                    (0, r.jsxs)(A.E, {
                        variant: "text-sm/semibold",
                        className: tx.OS,
                        children: [eu.intl.string(eu.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(tC, { user: a.boom, innerClassName: tx.bD }),
                    (0, r.jsx)(tC, { user: a.cherry, innerClassName: tx.bD }),
                ],
            }),
        });
    },
    tj = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            s = (0, _.bG)([k.A], () => k.A.useReducedMotion),
            o = en.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, _.cf)([Q.A], () => Q.A.getPendingChanges()),
            m = (0, Y.V7)({ userId: n.id, image: c }),
            p = t.type === d.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: g, firstNameplate: E } = (0, ef.f5)(t),
            A = null != g,
            v = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(z.A, {
                            ...u,
                            pendingAvatar: m,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: p,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        p && (0, r.jsx)(tw, { user: n }),
                    ],
                }),
            I = (e) => (0, r.jsx)(tb, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === d.R.BUNDLE) {
            if (!(0, ey.Wb)(t))
                return (0, r.jsx)("div", {
                    className: tx.RA,
                    children: (0, r.jsx)("div", { className: tx.bo, children: v() }),
                });
            {
                let e = i ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !s;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: l()(tx.Zj, a && c ? tx.p2 : ""), children: I(n) })
                    : (0, r.jsx)("div", { className: l()(tx.Ak, a && c ? tx.p2 : ""), children: v() });
            }
        }
        return null != E
            ? (0, r.jsx)("div", { className: tx.Zj, children: I(E) })
            : (0, r.jsx)("div", { className: h?.type === d.R.AVATAR_DECORATION ? tx.RA : tx.Ak, children: v() });
    },
    tw = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, B.rh)({
                    ...(0, F.Ay)({ author: t, channelId: "1337", content: eu.intl.string(eu.t.d5YwK5) }),
                    state: b.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eu.intl.string(eu.t["TN+ZvB"]),
            children: (0, r.jsx)(y.M, {
                children: (0, r.jsxs)(j.Z, {
                    className: tx.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(H.A, { className: tx.G5, author: (0, G.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: tx.lG,
                            children: [
                                (0, r.jsx)(w.U, { size: "md", color: "currentColor", className: tx.hq }),
                                (0, r.jsx)(L.n, { size: "md", color: "currentColor", className: tx.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    tL = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: s,
                returnRef: m,
                analyticsSource: p,
                analyticsLocations: v,
                shouldCheckoutWithOrbs: I,
                tab: x,
                giftRecipient: T,
                giftingOrigin: S,
            } = e,
            y = (0, _.bG)([K.default], () => K.default.getCurrentUser()),
            R = (0, tA.f)(a),
            { previewingVariantIndex: N } = R,
            C = (0, es.Q)(a),
            j = th(a, N),
            w = (0, eS.rb)(a, C);
        o()(null != w, "Selected product should not be null");
        let { analyticsLocations: L } = (0, U.Ay)([...v, O.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eM.Yr)(w.skuId);
        let P = (0, tg.U1)(s);
        i.useEffect(() => {
            null != y && (0, q.A)(y.id, y.getAvatarURL(void 0, 80));
        }, [y]);
        let k = i.useMemo(() => (0, eo.V6)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            ee.default.track(b.HAw.OPEN_MODAL, {
                type: b.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: L,
                sku_id: w.skuId,
                product_type: k,
            }),
                (0, ei.RD)(w.skuId);
        }, [p, L, w.skuId, k]);
        let { cardId: M, sessionId: B, tilePosition: F } = (0, ea.uM)() ?? {},
            G = i.useMemo(() => (0, eS.v8)(a), [a]),
            H = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: r } = e,
                    { cardId: a, sessionId: l } = (0, ea.uM)() ?? {};
                return i.useCallback(
                    (e) => {
                        ee.default.track(b.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: t,
                            cta: e,
                            shop_session_id: l,
                            card_id: a,
                            product_sku_ids: n,
                            location_stack: r,
                        });
                    },
                    [t, r, a, n, l],
                );
            })({ skuId: w.skuId, productSkuIds: G, analyticsLocations: L });
        (0, D.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: w.skuId,
                card_id: M,
                shop_session_id: B,
                position_in_section: F,
                product_sku_ids: G,
                location_stack: L,
            },
        });
        let V = (0, J.o6)(),
            W = t === h.ip.EXITING,
            z = (0, tf.$R)(a),
            Y = z?.amount,
            $ = null != Y && (z?.discountId === eJ.eR || z?.discountId === eJ.Qz),
            { activeSlide: Q, isTransitioning: Z } = (function (e) {
                let { slideCount: t, intervalMs: n = 3e3 } = e,
                    [r, a] = (0, i.useState)(0),
                    [l, s] = (0, i.useState)(!1),
                    o = (0, i.useCallback)(
                        (e) => {
                            l ||
                                e < 0 ||
                                e >= t ||
                                (s(!0),
                                setTimeout(() => {
                                    a(e), s(!1);
                                }, 300));
                        },
                        [l, t, 300],
                    );
                return (
                    (0, i.useEffect)(() => {
                        if (t <= 1) return;
                        let e = setInterval(() => {
                            o((r + 1) % t);
                        }, n);
                        return () => clearInterval(e);
                    }, [t, n, r, o]),
                    { activeSlide: r, isTransitioning: l }
                );
            })({ slideCount: i.useMemo(() => ((0, eo.aw)(w) ? w.items.length : 0), [w]), intervalMs: 5e3 });
        return null == y
            ? null
            : (0, r.jsx)(U.f5, {
                  value: L,
                  children: (0, r.jsxs)(f.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: tx.CR,
                      returnRef: m,
                      transitionState: t,
                      size: f.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(f.$m, {
                              "data-migration-pending": !0,
                              className: tx.jE,
                              children: [
                                  (0, r.jsx)(tN, {
                                      user: y,
                                      product: a,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: R,
                                      selectedVariantIndex: C,
                                      shouldCheckoutWithOrbs: I,
                                      tab: x,
                                      activeBundleSlide: Q,
                                      giftRecipient: T?.id !== y.id ? T : void 0,
                                      giftingOrigin: T?.id !== y.id ? S : void 0,
                                      onTrackClick: H,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          tx.i1,
                                          w.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? tx.bF
                                              : w.type === d.R.AVATAR_DECORATION
                                                ? tx.Jq
                                                : tx.eF,
                                      ),
                                      style: { backgroundImage: `url(${P})` },
                                      children: [
                                          (0, eO.pQ)(a.skuId)
                                              ? a.skuId === eO.Dp.ORB_PROFILE_BADGE
                                                  ? V || W
                                                      ? null
                                                      : (0, r.jsx)(ti, { user: y })
                                                  : a.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(te, {})
                                                    : (0, r.jsx)(to.B, { product: a, className: tx.Ms })
                                              : (0, r.jsx)(tj, {
                                                    user: y,
                                                    product: j ?? w,
                                                    activeBundleSlide: Q,
                                                    isTransitioning: Z,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: tx.VG,
                                              children: [
                                                  (0, r.jsx)(tm.R, {
                                                      product: a,
                                                      selectedVariantIndex: C,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: H,
                                                  }),
                                                  (0, r.jsx)(eU, { skuId: w.skuId, tab: x, onTrackClick: H }),
                                                  (0, r.jsx)(g.K, {
                                                      "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                                      onClick: () => {
                                                          H(eO.sH.CLOSE_DETAIL), n();
                                                      },
                                                      icon: E.d,
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
                                  children: (0, r.jsxs)(f.jl, {
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
                                                  (0, r.jsx)(A.E, {
                                                      variant: "text-sm/semibold",
                                                      className: tx.Q2,
                                                      children: eu.intl.format(eu.t["78ph4b"], {
                                                          discountOfferAmount: Y,
                                                      }),
                                                  }),
                                                  z?.expiresAt != null && (0, r.jsx)(eD.e, { endDate: z.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
