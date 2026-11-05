(n.d(t, {
    VA: () => ti,
    z_: () => ta,
    XN: () => ts,
    mH: () => e5,
    qn: () => eJ,
    Ay: () => to,
    pb: () => en,
    _e: () => ey,
    re: () => eY,
    _J: () => e6,
    FY: () => ej,
    LE: () => eW,
    tS: () => eH,
    ji: () => eR,
    ff: () => eF,
    To: () => tl,
    Rr: () => eV,
    JM: () => Q,
    Ke: () => es,
    Mn: () => ec,
    Zw: () => eu,
    OU: () => eI,
    tW: () => eK,
    sS: () => ew,
    iv: () => te,
    Ge: () => eB,
    D8: () => el,
    FJ: () => eo,
    UC: () => er,
    aE: () => eX,
    Pg: () => eq,
    Om: () => eQ,
    GX: () => eZ,
    ee: () => ez,
    EJ: () => D,
    bx: () => eg,
    e1: () => e7,
    nB: () => ef,
    Uf: () => eU,
    EL: () => Z,
    Tm: () => ep,
    aZ: () => e1,
    m6: () => ed,
    Dd: () => eA,
    y8: () => et,
    L_: () => tn,
    $Q: () => ei,
    U8: () => ea,
    Q8: () => ev,
    RH: () => e_,
    kX: () => eD,
    Of: () => e$,
    ki: () => eG,
    mv: () => e2,
    Em: () => e4,
    TW: () => r.ki,
    CC: () => r.CC,
    xq: () => eS,
    YE: () => r.YE,
    Zb: () => eO,
    $k: () => eM,
    z4: () => eN,
    ys: () => eC,
    J$: () => eP,
    PK: () => ex,
    Nc: () => eb,
    nK: () => e8,
    Pr: () => ee,
    l6: () => J,
}),
    n(667532),
    n(321073));
var i,
    r = n(474090),
    a = n(582128),
    s = n(284009),
    l = n.n(s),
    o = n(536637),
    d = n.n(o),
    c = n(855986),
    u = n(975807),
    _ = n(366999),
    E = n(930767),
    A = n(626584),
    h = n(981088),
    f = n(367888),
    I = n(76573),
    p = n(255438),
    m = n(683760),
    g = n(948325),
    T = n(682901);
let S = new A.A("ProductCatalog.tsx"),
    N = {
        [T.PremiumTypes.TIER_0]: new Set([
            I.bb.ANIMATED_EMOJIS,
            I.bb.EMOJIS_EVERYWHERE,
            I.bb.STICKERS_EVERYWHERE,
            I.bb.PROFILE_BADGES,
            I.bb.VIDEO_FILTER_ASSETS,
            I.bb.INCREASED_VIDEO_UPLOAD_QUALITY,
            I.bb.INCREASED_FILE_UPLOAD_SIZE,
            I.bb.APP_ICONS,
        ]),
        [T.PremiumTypes.TIER_1]: new Set([
            I.bb.ANIMATED_EMOJIS,
            I.bb.EMOJIS_EVERYWHERE,
            I.bb.ANIMATED_AVATAR,
            I.bb.CUSTOM_DISCRIMINATOR,
            I.bb.PROFILE_BADGES,
            I.bb.BOOST_DISCOUNT,
            I.bb.STREAM_MID_QUALITY,
            I.bb.INCREASED_VIDEO_UPLOAD_QUALITY,
            I.bb.INCREASED_FILE_UPLOAD_SIZE,
            I.bb.APP_ICONS,
        ]),
        [T.PremiumTypes.TIER_2]: new Set([
            I.bb.ANIMATED_EMOJIS,
            I.bb.EMOJIS_EVERYWHERE,
            I.bb.STICKERS_EVERYWHERE,
            I.bb.SOUNDBOARD_EVERYWHERE,
            I.bb.CUSTOM_CALL_SOUNDS,
            I.bb.ANIMATED_AVATAR,
            I.bb.CUSTOM_DISCRIMINATOR,
            I.bb.PREMIUM_GUILD_MEMBER_PROFILE,
            I.bb.PROFILE_BADGES,
            I.bb.PROFILE_PREMIUM_FEATURES,
            I.bb.CLIENT_THEMES,
            I.bb.BOOST_DISCOUNT,
            I.bb.FREE_BOOSTS,
            I.bb.STREAM_MID_QUALITY,
            I.bb.STREAM_HIGH_QUALITY,
            I.bb.INSTALL_PREMIUM_APPLICATIONS,
            I.bb.VIDEO_FILTER_ASSETS,
            I.bb.INCREASED_GUILD_LIMIT,
            I.bb.INCREASED_MESSAGE_LENGTH,
            I.bb.INCREASED_VIDEO_UPLOAD_QUALITY,
            I.bb.INCREASED_FILE_UPLOAD_SIZE,
            I.bb.APP_ICONS,
            I.bb.PREMIUM_COLLECTIBLES,
        ]),
    },
    C = new Set([I.bb.BOOST_DISCOUNT, I.bb.FREE_BOOSTS]);
function O(e, t) {
    if (t?.premiumType == null) return !1;
    let n = N[t.premiumType];
    return null == n ? (S.warn(`Cannot find the perks for the user's premium type ${t.premiumType}`), !1) : n.has(e);
}
function R(e, t) {
    return (
        !(null != t && t.isPremiumWithFractionalPremiumOnly() && C.has(e)) &&
        (m.A.hasPremiumTypeOverride(t) ? O(e, t) : t?.perks != null ? (0, g.jv)(t.perks, e) : O(e, t))
    );
}
var L = n(219882),
    y = (((i = {}).MID = "mid"), (i.HIGH = "high"), i);
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = e === T.PremiumTypes.TIER_2 ? (0, L.ew)({ location: "getMaxFileSizeForPremiumType" }) : T.f5[e].fileSize;
    return (0, p.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function b(e) {
    return null != e && !e.isFractionalPremiumWithNoStandardSub() && (0, r.YE)(e, T.PremiumTypes.TIER_2);
}
function v(e) {
    return R(I.bb.PREMIUM_COLLECTIBLES, e);
}
var P = n(832946),
    M = n(287809),
    U = n(615405),
    w = n(295405),
    G = n(97352),
    x = n(166403),
    k = n(739508),
    F = n(5377),
    B = n(927813),
    V = n(652215),
    H = n(580630),
    j = n(88001),
    W = n(818348),
    Y = n(792996),
    K = n(50302),
    $ = n(107198);
let X = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    z = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    q = new A.A("PremiumUtils.tsx");
function Z(e) {
    return e.items.find((e) => T.JM.has(e.planId));
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = w.A.defaultPaymentSourceId ?? void 0,
        s = x.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (a = s.paymentSourceId),
        et(e, t, n, { paymentSourceId: a, currency: i }, r)
    );
}
function J(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function ee(e, t, n) {
    let i = a.useMemo(
        () =>
            null == t || null == t.checkoutContext || null == t.checkoutContext.available_plans
                ? null
                : t.checkoutContext.available_plans,
        [t],
    );
    return a.useMemo(
        () => ({
            priceOptions: J(e, i),
            planPricesLoading: null != e.currency && null != t && t.currency !== e.currency && null == n,
        }),
        [e, t, i, n],
    );
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: a, currency: s, contextPlanPrices: l } = i;
    if (null != l) {
        let t = l[e],
            n = null != s && null != t && t.currency !== s;
        if (null != t && !n)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != G.A.get(e)) {
        let i = V.lid.DEFAULT;
        n ? (i = V.lid.GIFT) : t && (i = V.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: V.lid.DEFAULT },
                r = en(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    q.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let a = r.find((e) => e.currency === i.toLowerCase());
                return null != a
                    ? a
                    : null != t
                      ? en(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: a, purchaseType: i, currency: s });
        if (null == l) {
            let t = Error("Couldn't find price");
            throw (
                r &&
                    (0, k.pM)(t, {
                        extra: { paymentSourceId: a },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (r && (0, k.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function en(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: V.lid.DEFAULT },
        i = (function (e, t) {
            let n = G.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, k.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    q.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`)
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            (q.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                q.info(`prices: ${r}`));
            let a = Error("Missing prices for payment source on subscription plan");
            (0, k.pM)(a, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        q.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, k.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function ei(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function er(e, t, n) {
    let i,
        a,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        l = (0, f._1)(e);
    null != l && (i = T.hd[l.planId].premiumType);
    let o = (0, r.CC)(i, T.PremiumTypes.TIER_0),
        d = (0, r.CC)(i, T.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        ((a = T.pW.has(i.planId) ? d : !T.JM.has(i.planId) && o),
            (e = void 0 === n ? Q(i.planId, a, !1, t) : et(i.planId, a, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity));
    }
    return ei(s);
}
function ea(e, t, n, i) {
    return (
        null === t && (l()(null !== e, "Subscription can't be null"), (t = [])), er(null !== e ? eX(e, t) : ez(t), n, i)
    );
}
function es(e) {
    switch (e) {
        case T.Ff.MONTH:
            return Y.intl.string(Y.t.FPybU7);
        case T.Ff.YEAR:
            return Y.intl.string(Y.t.tfqrhj);
        case T.Ff.DAY:
        case T.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function el(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : T.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case T.WT.MONTH:
                if (i > 1)
                    return r
                        ? Y.intl.formatToPlainString(K.default.G1Q40N, { intervalCount: i })
                        : Y.intl.formatToPlainString(Y.t["0UlZnH"], { intervalCount: i });
                let s = Y.intl.formatToPlainString(a === T.PremiumTypes.TIER_0 ? Y.t.NPKsLz : Y.t.poEovT, {
                    timeInterval: Y.intl.string(Y.t.FPybU7),
                });
                return r ? s : Y.intl.string(Y.t.Mh9bTt);
            case T.WT.YEAR:
                let l = Y.intl.formatToPlainString(a === T.PremiumTypes.TIER_0 ? Y.t.NPKsLz : Y.t.poEovT, {
                    timeInterval: Y.intl.string(Y.t.tfqrhj),
                });
                return r ? l : Y.intl.string(Y.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case T.WT.MONTH:
            if (1 !== i) return Y.intl.formatToPlainString(Y.t["0UlZnH"], { intervalCount: i });
            return Y.intl.string(Y.t.DKzs96);
        case T.WT.YEAR:
            return Y.intl.string(Y.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function eo(e) {
    switch (e) {
        case T.WT.MONTH:
            return Y.intl.string(Y.t.FPybU7);
        case T.WT.YEAR:
            return Y.intl.string(Y.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function ed(e) {
    let t = T.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, k.pM)(n, { tags: { planId: e } }), n);
}
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case T.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? Y.intl.format(Y.t.TZXHNj, { duration: i })
                : n
                  ? Y.intl.string(Y.t["81iAgs"])
                  : Y.intl.string(Y.t["0efVPy"]);
        case T.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? Y.intl.format(Y.t.eqRhC7, { duration: i })
                : n
                  ? Y.intl.string(Y.t.UvzqY1)
                  : Y.intl.string(Y.t.eoVuBn);
        case T.gD.PREMIUM_MONTH_TIER_1:
            return n ? Y.intl.string(Y.t["g/dH5g"]) : Y.intl.string(Y.t["7O6qSq"]);
        case T.gD.PREMIUM_YEAR_TIER_1:
            return n ? Y.intl.string(Y.t.pdZJaq) : Y.intl.string(Y.t.Md5xbi);
        case T.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? Y.intl.format(Y.t.aI6QXz, { duration: i })
                : n
                  ? Y.intl.string(Y.t.SmVbHc)
                  : Y.intl.string(Y.t.FKYNC6);
        case T.gD.PREMIUM_GROUP_MONTH:
            return n
                ? Y.intl.string(Y.t.SmVbHc)
                : Y.intl.formatToPlainString($.default["8bPDtb"], { premiumGroupProductName: (0, j.DP)() });
        case T.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? Y.intl.format(Y.t["1wBcPi"], { duration: i })
                : n
                  ? Y.intl.string(Y.t.JIq4O1)
                  : Y.intl.string(Y.t["cfu/5d"]);
        case T.gD.PREMIUM_3_MONTH_TIER_2:
            return Y.intl.string(Y.t.wCbINr);
        case T.gD.PREMIUM_6_MONTH_TIER_2:
            return Y.intl.string(Y.t["e3/ArU"]);
        case T.gD.PREMIUM_MONTH_GUILD:
            return n ? Y.intl.string(Y.t["6ZR3By"]) : Y.intl.string(Y.t["h80cx/"]);
        case T.gD.PREMIUM_YEAR_GUILD:
            return n ? Y.intl.string(Y.t.YDpAzZ) : Y.intl.string(Y.t.ZHkls0);
        case T.gD.PREMIUM_3_MONTH_GUILD:
            return Y.intl.string(Y.t.EZHHB6);
        case T.gD.PREMIUM_6_MONTH_GUILD:
            return Y.intl.string(Y.t.X2KDO2);
        case T.gD.PREMIUM_MONTH_LEGACY:
            return Y.intl.string(Y.t.PD6k79);
        case T.gD.PREMIUM_YEAR_LEGACY:
            return Y.intl.string(Y.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, k.pM)(r, { tags: { planId: e } }), r);
}
function eu(e) {
    switch (e) {
        case T.pe.TIER_0:
            return Y.intl.string(Y.t["t9uG/o"]);
        case T.pe.TIER_1:
            return Y.intl.string(Y.t.FSOz78);
        case T.pe.TIER_2:
            return Y.intl.string(Y.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, k.pM)(t, { tags: { skuId: e } }), t);
}
function e_(e) {
    let t = T.hd[e]?.premiumType,
        n = null != t ? T.Mr[t] : null;
    if (null != n) return Y.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, k.pM)(i, { tags: { planId: e } }), i);
}
function eE(e, t) {
    if (e === T.WT.MONTH) return t;
    if (e === T.WT.YEAR) return 12 * t;
    throw Error(`${e} interval subscription period not implemented`);
}
function eA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case T.PremiumTypes.TIER_0:
            return t ? "Basic" : Y.intl.string(Y.t["t9uG/o"]);
        case T.PremiumTypes.TIER_1:
            return t ? "Classic" : Y.intl.string(Y.t.FSOz78);
        case T.PremiumTypes.TIER_2:
            return Y.intl.string(Y.t.lG6a5x);
    }
}
function eh(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoiceWithoutEntitlementsPreview: l,
            renewalInvoiceWithEntitlementsPreview: o,
            hasFractionalPremiumWithSub: c,
            fractionalPremiumInfo: _,
        } = e,
        E = T.hd[n],
        A = e3(Q(E.id), E.interval),
        h = null != o && 0 === o.subtotal,
        f =
            eG(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !M.default.getCurrentUser()?.hasFreePremium() &&
                !h),
        I = null != i && null == t.paymentGateway,
        p = t.status === V.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === V.lT7.OPEN,
        m = f ? V.Dmq.CANCELED : p ? V.Dmq.UNPAID : t.status,
        g = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        S = 2 + (r ? eg(t.additionalPlans) : 0),
        N = I
            ? g
                ? Y.intl.format(Y.t["cd+hqB"], { price: i })
                : Y.intl.format(Y.t.NUkcpF, { price: i })
            : Y.intl.string(Y.t.zYx3Y6),
        C = I
            ? g
                ? Y.intl.format(Y.t.VsKcFB, { price: i })
                : Y.intl.format(Y.t.hJ5xEX, { price: i })
            : Y.intl.string(Y.t["8rSipI"]),
        O = I
            ? g
                ? Y.intl.format(Y.t["jRy6/J"], { price: i, num: S })
                : Y.intl.format(Y.t.tTNE8M, { price: i, num: S })
            : Y.intl.format(Y.t["U+z/HJ"], { num: S });
    switch (n) {
        case T.gD.PREMIUM_MONTH_TIER_0:
        case T.gD.PREMIUM_YEAR_TIER_0:
            switch (m) {
                case V.Dmq.CANCELED:
                    return I
                        ? g
                            ? Y.intl.format(Y.t["USi/nc"], { price: i })
                            : Y.intl.format(Y.t["FS//l2"], { price: i })
                        : Y.intl.string(Y.t.JshLzq);
                case V.Dmq.ACCOUNT_HOLD:
                    return I
                        ? g
                            ? Y.intl.format(Y.t["5mv+2i"], { price: i })
                            : Y.intl.format(Y.t.nkAEfZ, { price: i })
                        : Y.intl.format(Y.t.SsLIXS, {});
                case V.Dmq.UNPAID:
                    return Y.intl.format(Y.t.cmkbFB, {});
                case V.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? d()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? Y.intl.format(Y.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : Y.intl.format(Y.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case V.Dmq.PAUSED:
                    if (c) return N;
                    return Y.intl.format(Y.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case V.Dmq.PAST_DUE:
                    return Y.intl.format(Y.t["d+0vwo"], {
                        endDate: (0, F.i$)(eR(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return N;
            }
        case T.gD.PREMIUM_MONTH_TIER_1:
        case T.gD.PREMIUM_YEAR_TIER_1:
            switch (m) {
                case V.Dmq.CANCELED:
                    return I
                        ? g
                            ? Y.intl.format(Y.t.cXy8Bp, { price: i })
                            : Y.intl.format(Y.t["C/XsHt"], { price: i })
                        : Y.intl.string(Y.t.K6tYFa);
                case V.Dmq.ACCOUNT_HOLD:
                    return I
                        ? g
                            ? Y.intl.format(Y.t.HBkIBi, { price: i })
                            : Y.intl.format(Y.t.ZsO1Sx, { price: i })
                        : Y.intl.format(Y.t["0+/WH7"], {});
                case V.Dmq.UNPAID:
                    return Y.intl.format(Y.t.McIzwj, {});
                case V.Dmq.PAUSE_PENDING:
                    let L = null != t.pauseEndsAt ? d()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != L
                        ? Y.intl.format(Y.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: L })
                        : Y.intl.format(Y.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case V.Dmq.PAUSED:
                    if (c) return C;
                    return Y.intl.format(Y.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case V.Dmq.PAST_DUE:
                    return Y.intl.format(Y.t["d+0vwo"], {
                        endDate: (0, F.i$)(eR(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return C;
            }
        case T.gD.PREMIUM_MONTH_TIER_2:
        case T.gD.PREMIUM_YEAR_TIER_2:
        case T.gD.PREMIUM_3_MONTH_TIER_2:
        case T.gD.PREMIUM_6_MONTH_TIER_2:
        case T.gD.PREMIUM_GROUP_MONTH:
            switch (m) {
                case V.Dmq.CANCELED:
                    return I
                        ? g
                            ? Y.intl.format(Y.t.xoFgRh, { price: i, num: S })
                            : Y.intl.format(Y.t.nXdbKo, { price: i, num: S })
                        : Y.intl.format(Y.t.EcSdRH, { num: S });
                case V.Dmq.ACCOUNT_HOLD:
                    return I
                        ? g
                            ? Y.intl.format(Y.t["5C/0QG"], { price: i, num: S })
                            : Y.intl.format(Y.t.xfYkhu, { price: i, num: S })
                        : Y.intl.format(Y.t.ivjxcn, { num: S });
                case V.Dmq.UNPAID:
                    return Y.intl.format(Y.t["0HopYf"], { num: S });
                case V.Dmq.PAUSE_PENDING:
                    let y = null != t.pauseEndsAt ? d()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != y
                        ? Y.intl.format(Y.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: y })
                        : Y.intl.format(Y.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case V.Dmq.PAUSED:
                    if (c) return O;
                    return Y.intl.format(Y.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case V.Dmq.BILLING_RETRY:
                    return Y.intl.format(Y.t["IlJ/HV"], { endDate: d()(t.currentPeriodStart).add(7, "days").toDate() });
                case V.Dmq.PAST_DUE:
                    return Y.intl.format(Y.t["d+0vwo"], {
                        endDate: (0, F.i$)(eR(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return a
                        ? n === T.gD.PREMIUM_YEAR_TIER_2
                            ? Y.intl.format(Y.t.z2oQtA, {
                                  percent: s?.percentage ?? 20,
                                  regularPrice: A,
                                  renewalDate: eL(t, _),
                              })
                            : g
                              ? Y.intl.formatToPlainString(Y.t["3ZiutU"], {
                                    percent: s?.percentage ?? 30,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? 1,
                                })
                              : Y.intl.formatToPlainString(Y.t["G6+XOT"], {
                                    percent: s?.percentage ?? 30,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? 1,
                                })
                        : O;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function ef(e) {
    var t, n, i;
    let r,
        a,
        {
            renewalInvoicePreview: s,
            renewalInvoiceWithEntitlementsPreview: o,
            subscription: d,
            planId: c,
            includePremiumGuilds: u = !1,
            hasDiscountApplied: _ = !1,
            activeDiscountInfo: E,
            hasFractionalPremiumWithSub: A = !1,
            fractionalPremiumInfo: h,
        } = e,
        f = G.A.get(c);
    return (
        l()(null != f, "Missing plan"),
        eh({
            subscription: d,
            planId: f.id,
            price:
                ((t = s),
                (n = d),
                (i = f),
                (a =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? et(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, H.CE)((0, H.$g)(a, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: u,
            hasDiscountApplied: _,
            activeDiscountInfo: E,
            renewalInvoiceWithoutEntitlementsPreview: s,
            renewalInvoiceWithEntitlementsPreview: o,
            hasFractionalPremiumWithSub: A,
            fractionalPremiumInfo: h,
        })
    );
}
function eI(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, P.m1)(t) ? null : ec(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return T.pW.has(t);
        }),
        a =
            r?.planId === T.gD.PREMIUM_MONTH_GUILD
                ? Y.t.Pi5yMJ
                : r?.planId === T.gD.PREMIUM_YEAR_GUILD
                  ? Y.t.H4KPuV
                  : null,
        s = null != a ? Y.intl.formatToPlainString(a, { num: r?.quantity }) : void 0;
    if (null != i && null != s)
        return Y.intl.formatToPlainString(Y.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: s });
    if (null != i) return i;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function ep(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i, isThreeMonthGiftingEnabled: r = !1 } = e;
    if (null == t || !n) return [];
    let a = void 0 !== i && t === T.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case T.pe.TIER_0:
            s = [T.gD.PREMIUM_YEAR_TIER_0, T.gD.PREMIUM_MONTH_TIER_0];
            break;
        case T.pe.TIER_1:
            s = [T.gD.PREMIUM_MONTH_TIER_1];
            break;
        case T.pe.TIER_2:
            s = r
                ? [T.gD.PREMIUM_YEAR_TIER_2, T.gD.PREMIUM_3_MONTH_TIER_2, T.gD.PREMIUM_MONTH_TIER_2]
                : [T.gD.PREMIUM_YEAR_TIER_2, T.gD.PREMIUM_MONTH_TIER_2];
            break;
        case T.pe.GUILD:
            return [];
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== a) {
        let e = s.indexOf(a);
        -1 !== e && (s.splice(e, 1), s.unshift(a));
    }
    return s;
}
function em(e) {
    let t = T.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, k.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eg(e) {
    let t = G.A.getPlanIdsForSkus([e5(T.pe.GUILD)]);
    l()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eT = new Set([
    T.gD.NONE_MONTH,
    T.gD.NONE_3_MONTH,
    T.gD.NONE_6_MONTH,
    T.gD.NONE_YEAR,
    T.gD.PREMIUM_MONTH_TIER_0,
    T.gD.PREMIUM_MONTH_TIER_1,
    T.gD.PREMIUM_MONTH_TIER_2,
    T.gD.PREMIUM_YEAR_TIER_0,
    T.gD.PREMIUM_YEAR_TIER_1,
    T.gD.PREMIUM_YEAR_TIER_2,
    T.gD.PREMIUM_3_MONTH_TIER_2,
    T.gD.PREMIUM_6_MONTH_TIER_2,
    T.gD.PREMIUM_GROUP_MONTH,
]);
function eS(e) {
    return eT.has(e);
}
function eN(e) {
    return T.pW.has(e);
}
function eC(e) {
    return eS(e) || eN(e);
}
function eO(e) {
    return null != e && e === T.gD.PREMIUM_GROUP_MONTH;
}
function eR(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = d()(e.metadata.apple_grace_period_expires_date);
        return { days: d().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = d()(e.metadata.google_grace_period_expires_date),
            n = d()(e.metadata.google_original_expires_date);
        return { days: d().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? 28 : 30;
        return { days: t, expiresDate: d()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: d()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: d()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? 3 : 30;
        return { days: t, expiresDate: d()(e.currentPeriodStart).add(t, "days") };
    }
}
function eL(e, t) {
    let n = new Date(e.currentPeriodEnd);
    return (null == t || e.isBoostOnly || e.hasAnyPremiumGroup || (n = ey(n, t.unactivatedUnits)), n);
}
function ey(e, t, n, i) {
    let r = d()(i ? void 0 : e);
    if (t.length > 0) {
        let e = e9(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = d()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function eD(e) {
    let t = e9(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === T.xc.NONE)) return "";
    let n = { days: Y.t.fYmirx, hours: Y.t["C3RO+g"], minutes: Y.t.r77oHc },
        i = (0, _.Vb)((0, F.Tf)(0, t * B.A.Millis.HOUR));
    return (0, F.uN)(i, n);
}
function eb(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === V.Dmq.PAST_DUE;
}
function ev(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? Y.intl.string(Y.t["0rzJ4J"]) : Y.intl.string(Y.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = Y.intl.string(Y.t.a9Mdb3)),
        t
    );
}
function eP(e) {
    if (null == e) return !1;
    let t = w.A.getPaymentSource(e);
    return null != t && W.AD.has(t.type);
}
function eM(e) {
    return e.isPurchasedExternally
        ? e.status === V.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = eg(n);
              return 0 === (null != t ? eg(t.additionalPlans) : null) && 0 !== r ? V.Dmq.CANCELED : i;
          })(e) === V.Dmq.CANCELED;
}
function eU(e) {
    let t,
        { subscription: n, user: i, price: r, renewalInvoicePreview: a, fractionalPremiumInfo: s } = e,
        { planId: o, additionalPlans: d, renewalMutations: c } = n,
        _ = G.A.get(o);
    l()(null != _, "Missing plan");
    let E = eg(d),
        A = c?.additionalPlans != null ? eg(c.additionalPlans) : E,
        h = Math.max(0, E - A),
        f = A > 0 && h > 0,
        I = !1;
    if (!n.isPurchasedExternally && null == (t = r)) {
        let e = null;
        if (null != a) {
            let t = a.invoiceItems.find((e) => T.pW.has(e.subscriptionPlanId));
            null != t && (e = t.amount);
        }
        if (null == e) {
            let t = f ? A : E;
            try {
                e = ek(n.planId, n.paymentSourceId, n.currency, i).amount * t;
            } catch {
                I = !0;
            }
        }
        t = null != e ? (0, H.$g)(e, n.currency) : void 0;
    }
    let p = n.isPurchasedExternally || I,
        m = null != t ? (0, H.CE)(t, _.interval, _.intervalCount) : "",
        g = a?.taxInclusive ?? n.latestInvoice?.taxInclusive ?? !0;
    if (eM(n))
        return p
            ? Y.intl.format(Y.t["3/WTrI"], { quantity: E })
            : g
              ? Y.intl.format(Y.t["0ozBSB"], { quantity: E, rate: m })
              : Y.intl.format(Y.t["yjsv/s"], { quantity: E, rate: m });
    switch (n.status) {
        case V.Dmq.ACCOUNT_HOLD:
            return p
                ? Y.intl.format(Y.t.Nlf3nc, { quantity: E, boostQuantity: E })
                : g
                  ? Y.intl.format(Y.t.oiRy7v, { quantity: E, boostQuantity: E, rate: m })
                  : Y.intl.format(Y.t["0QxOAi"], { quantity: E, boostQuantity: E, rate: m });
        case V.Dmq.PAUSE_PENDING:
        case V.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return Y.intl.string(Y.t.CduWAm);
            return Y.intl.format(Y.t["5iud9s"], { quantity: E });
        case V.Dmq.PAST_DUE:
            if (n.isBoostOnly)
                return Y.intl.format(Y.t["d+0vwo"], {
                    endDate: (0, F.i$)(eR(n).expiresDate, "LL"),
                    onClick: () => {
                        (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            if (f) {
                if (p) return Y.intl.format(Y.t["krRy+d"], { activeQuantity: A, pendingQuantity: h });
                let e = g ? Y.t["4nc7+E"] : Y.t.BmaudS;
                return Y.intl.format(e, { activeQuantity: A, pendingQuantity: h, rate: m });
            }
            return p
                ? Y.intl.format(Y.t["5iud9s"], { quantity: E })
                : g
                  ? Y.intl.format(Y.t.eDwrLA, { quantity: E, rate: m })
                  : Y.intl.format(Y.t.ijSDcI, { quantity: E, rate: m });
    }
}
function ew(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
    if (null != t)
        try {
            i = et(e.id, !1, r, t, a);
        } catch {
            i = Q(e.id, !1, r, void 0, a);
        }
    else i = Q(e.id, !1, r, void 0, a);
    let s = (0, H.$g)(i.amount, i.currency);
    return (e.currency !== W.Yr.USD && !0 === n && (s = s.concat("*")), s);
}
function eG(e) {
    let { status: t, renewalMutations: n } = e;
    return t === V.Dmq.CANCELED || (null != n && (0, P.m1)(n.planId) && !e.isPurchasedExternally);
}
function ex(e) {
    return e === V.Dmq.PAST_DUE || e === V.Dmq.ACCOUNT_HOLD || e === V.Dmq.BILLING_RETRY;
}
function ek(e, t, n, i) {
    let a = null != t ? { paymentSourceId: t, currency: n } : { country: U.A.ipCountryCodeWithFallback, currency: n },
        s = G.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, k.pM)(t, { tags: { planId: e } }), t);
    }
    let l = G.A.getForSkuAndInterval(e5(T.pe.GUILD), s.interval, s.intervalCount);
    if (null == l) {
        let t = Error("Unsupported plan");
        throw ((0, k.pM)(t, { tags: { planId: e } }), t);
    }
    return et(l.id, (0, r.ki)(i), !1, a);
}
function eF(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case T.gD.PREMIUM_MONTH_TIER_0:
                return Y.intl.string(Y.t["0ggVqN"]);
            case T.gD.PREMIUM_YEAR_TIER_0:
                return Y.intl.string(Y.t["jm+ZQw"]);
            case T.gD.PREMIUM_MONTH_TIER_1:
                return Y.intl.string(Y.t.uph4Jx);
            case T.gD.PREMIUM_YEAR_TIER_1:
                return Y.intl.string(Y.t["D/l7Yt"]);
            case T.gD.PREMIUM_MONTH_TIER_2:
            case T.gD.PREMIUM_GROUP_MONTH:
                return Y.intl.string(Y.t["5l1MuV"]);
            case T.gD.PREMIUM_YEAR_TIER_2:
                return Y.intl.string(Y.t.G0mISV);
        }
    switch (i) {
        case T.gD.PREMIUM_MONTH_TIER_0:
            return n ? Y.intl.string(Y.t.cRCCJ3) : Y.intl.string(Y.t["/G3aKw"]);
        case T.gD.PREMIUM_YEAR_TIER_0:
            return n ? Y.intl.string(Y.t.cRCCJ3) : Y.intl.string(Y.t["2eQpsL"]);
        case T.gD.PREMIUM_MONTH_TIER_1:
            return n ? Y.intl.string(Y.t.cRCCJ3) : Y.intl.string(Y.t.gueLg5);
        case T.gD.PREMIUM_YEAR_TIER_1:
            return n ? Y.intl.string(Y.t.cRCCJ3) : Y.intl.string(Y.t["MhH/vW"]);
        case T.gD.PREMIUM_MONTH_TIER_2:
            return n ? Y.intl.string(Y.t.cRCCJ3) : Y.intl.string(Y.t.LQVQIq);
        case T.gD.PREMIUM_GROUP_MONTH:
            return Y.intl.formatToPlainString($.default.LwdrNi, { premiumGroupProductName: (0, j.DP)() });
        case T.gD.PREMIUM_YEAR_TIER_2:
            return n ? Y.intl.string(Y.t.cRCCJ3) : Y.intl.string(Y.t["0nfg1x"]);
        case T.gD.PREMIUM_3_MONTH_TIER_2:
        case T.gD.PREMIUM_6_MONTH_TIER_2:
            return Y.intl.formatToPlainString(Y.t.BCD4fT, { intervalCount: t.intervalCount });
        case T.gD.NONE_MONTH:
        case T.gD.NONE_YEAR:
        case T.gD.NONE_3_MONTH:
        case T.gD.NONE_6_MONTH:
        case T.gD.PREMIUM_MONTH_GUILD:
        case T.gD.PREMIUM_YEAR_GUILD:
        case T.gD.PREMIUM_3_MONTH_GUILD:
        case T.gD.PREMIUM_6_MONTH_GUILD:
            return Y.intl.string(Y.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, k.pM)(r, { tags: { planId: i } }), r);
}
function eB(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = G.A.get(t);
    return (l()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount });
}
function eV() {
    let e = W.Yr.USD;
    try {
        e = Q(T.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eH(e) {
    let { intervalType: t = T.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case T.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? Y.intl.formatToPlainString(Y.t.fRNBRX, { weeks: n / 7 })
                    : Y.intl.formatToPlainString(Y.t.EIpHEj, { weeks: n / 7 });
            return i
                ? Y.intl.formatToPlainString(Y.t["6Cdzoy"], { days: n })
                : Y.intl.formatToPlainString(Y.t["kbBj/h"], { days: n });
        case T.WT.MONTH:
            return i
                ? Y.intl.formatToPlainString(Y.t.x5MgxS, { months: n })
                : Y.intl.formatToPlainString(Y.t["4SEnCZ"], { months: n });
        case T.WT.YEAR:
            return i
                ? Y.intl.formatToPlainString(Y.t["h+63yl"], { years: n })
                : Y.intl.formatToPlainString(Y.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ej(e) {
    let { intervalType: t = T.WT.MONTH, intervalCount: n = 1 } = e,
        i = eV(),
        r = (0, H.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case T.WT.DAY:
            if (n >= 7 && n % 7 == 0) return Y.intl.formatToPlainString(Y.t.C6i5Jt, { weeks: n / 7, price: r });
            return Y.intl.formatToPlainString(Y.t.cR9ifw, { days: n, price: r });
        case T.WT.MONTH:
            return Y.intl.formatToPlainString(Y.t["8FZfNo"], { months: n, price: r });
        case T.WT.YEAR:
            return Y.intl.formatToPlainString(Y.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eW(e, t) {
    if (null != e && null != e.subscriptionTrial && e.subscriptionTrial.skuId === t) {
        let t = e.subscriptionTrial;
        return ej({ intervalType: t.interval, intervalCount: t.intervalCount });
    }
    return null;
}
function eY(e) {
    let { intervalType: t = T.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case T.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? Y.intl.formatToPlainString(Y.t.iVZYyl, { weeks: n / 7 })
                    : Y.intl.formatToPlainString(Y.t.EmoBD2, { weeks: n / 7 });
            return i
                ? Y.intl.formatToPlainString(Y.t.jzH70Z, { days: n })
                : Y.intl.formatToPlainString(Y.t["k2UNz+"], { days: n });
        case T.WT.MONTH:
            return i
                ? Y.intl.formatToPlainString(Y.t.erUSmA, { months: n })
                : Y.intl.formatToPlainString(Y.t.kridzK, { months: n });
        case T.WT.YEAR:
            return i
                ? Y.intl.formatToPlainString(Y.t.IfYQVC, { years: n })
                : Y.intl.formatToPlainString(Y.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eK(e, t) {
    switch (e) {
        case V.kM_.APPLE_PARTNER:
        case V.kM_.APPLE_ADVANCED_COMMERCE:
        case V.kM_.APPLE:
            return X[t];
        case V.kM_.GOOGLE:
            return z[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function e$(e, t) {
    return (0, r.ki)(e) || ex(t?.status);
}
function eX(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => T.JM.has(e.planId));
    return (
        null != i && n.push(i),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function ez(e) {
    return e.filter((e) => !T.JM.has(e.planId));
}
function eq(e, t, n, i) {
    if (!i.has(t))
        throw new E.v({ message: "Expected planId in group", extraSentryInformation: { newPlanId: t, planGroup: i } });
    let r = !1,
        a = (e.renewalMutations?.items ?? e.items).map((e) =>
            i.has(e.planId) ? ((r = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!r) {
        let i = { planId: t, quantity: n },
            r = e.items.find((e) => e.planId === t);
        (null != r && (i.id = r.id), a.push(i));
    }
    return a.filter((e) => 0 !== e.quantity);
}
function eZ(e, t) {
    return eq(e, t, 1, T.JM);
}
function eQ(e, t, n) {
    return eq(e, n, t, T.pW);
}
function eJ(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => T.JM.has(e.planId));
    if (null != t) {
        let n = G.A.get(t.planId);
        (l()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = G.A.get(e.planId);
                if ((l()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = G.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return (l()(null != r, "Missing planForInterval"), { ...e, planId: r.id });
            })));
    }
    return e;
}
function e0(e) {
    return null == e ? null : e.items.find((e) => T.pW.has(e.planId));
}
function e1(e) {
    let t = null != e ? Z(e) : null;
    return null != t ? em(t.planId) : null;
}
function e2(e) {
    return null != e && Date.now() - e.createdAt.getTime() < 2592e6;
}
function e3(e, t) {
    let n = (0, H.$g)(e.amount, e.currency),
        i = eo(t);
    return `${n}/${i}`;
}
function e6(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = et(e.id);
    return (0, H.CE)((0, H.$g)(n.amount, n.currency), e.interval, t);
}
function e5(e) {
    return e;
}
function e4(e) {
    return "isNitroLocked" in e;
}
function e8() {
    let e = (0, c.bG)([M.default], () => M.default.getCurrentUser());
    return (0, r.YE)(e, T.PremiumTypes.TIER_2);
}
function e7(e) {
    var t;
    let n = T.Eg;
    if (null != (t = e) && "trialId" in t)
        switch (e.trialId) {
            case T.Tt:
                return T.h7;
            case T.yo:
                return T.CA;
        }
    else;
    return n;
}
function e9(e) {
    return te(e.map((e) => e.skuId));
}
function te(e) {
    return e.reduce((e, t) => {
        let [n, i] = T.NL[t],
            r = 1;
        switch (n) {
            case T.T.HOUR:
                r = 1;
                break;
            case T.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
function tt(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
        r = T.En[t.skuId];
    return null == r ? null : et(r, !1, n, i);
}
function tn(e) {
    let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
        a = T.XE[t];
    if (null != r) {
        let e = tr(r, n, i);
        null != e && (a = e);
    }
    return a;
}
function ti(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === T.WT.DAY || (t.interval === T.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = tt({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let a = t.interval === T.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * a;
}
function tr(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { interval: a, intervalCount: s } = e;
    if (a !== T.WT.MONTH && a !== T.WT.YEAR) return;
    let l = eE(a, s);
    if (!(l <= 1)) {
        try {
            if (((t = tt({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = et(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (t.amount * l)));
    }
}
function ta(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = ti({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == i || i <= 0) return null;
    let r = et(e.id, !1, t, n),
        a = i - r.amount;
    return a <= 0 ? null : { amount: a, currency: r.currency };
}
function ts(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== T.WT.YEAR) return null;
    let i = et(e.id, !1, t, n);
    return 0 === i.amount ? null : { amount: Math.round(i.amount / 12), currency: i.currency };
}
function tl(e) {
    return null == e ? 0 : Math.max((0, F.m_)(new Date(), new Date(e)), 0);
}
let to = Object.freeze({
    isNewUser: e2,
    isPremiumAtLeast: r.CC,
    isPremium: r.ki,
    isPremiumExactly: r.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: et,
    getDefaultPrice: Q,
    getInterval: function (e) {
        let t = T.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, k.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: el,
    getIntervalStringAsNoun: eo,
    getPremiumType: ed,
    getTierDisplayNameByPlanId: e_,
    getDisplayName: ec,
    getPremiumPlanOptions: ep,
    formatInterval: function (e) {
        if (e === T.WT.YEAR) return Y.intl.string(Y.t.tfqrhj);
        if (e === T.WT.MONTH) return Y.intl.string(Y.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: eh,
    isPremiumSku: function (e) {
        return e === T.pe.TIER_0 || e === T.pe.TIER_1 || e === T.pe.TIER_2;
    },
    getIntervalMonths: eE,
    getUserMaxFileSize: function (e) {
        return null == e
            ? V.TbF
            : e.isStaff() && !m.A.hasPremiumTypeOverride(e)
              ? V.mu
              : null != e.premiumType && (0, r.ki)(e)
                ? e.premiumType === T.PremiumTypes.TIER_2
                    ? (0, L.ew)({ location: "getUserMaxFileSize" })
                    : T.f5[e.premiumType].fileSize
                : V.TbF;
    },
    getSkuIdForPlan: em,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case T.PremiumTypes.TIER_0:
                return T.pe.TIER_0;
            case T.PremiumTypes.TIER_1:
                return T.pe.TIER_1;
            case T.PremiumTypes.TIER_2:
                return T.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return 2 * (ed(e) === T.PremiumTypes.TIER_2);
    },
    getBillingInformationString: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r =
                arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : {
                          isFractionalPremiumActive: !1,
                          fetched: !0,
                          fractionalState: T.xc.NONE,
                          startsAt: d()(0),
                          endsAt: d()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: d()(0),
                          unactivatedUnits: [],
                      },
            a = null !== n && e.status === V.Dmq.PAST_DUE ? n : t,
            s = i
                ? (0, H.$g)(
                      a.invoiceItems
                          .filter((e) => T.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      a.currency,
                  )
                : (0, H.$g)(a.total, a.currency);
        if (M.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return Y.intl.format(Y.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === V.Dmq.CANCELED) return Y.intl.format(Y.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === V.Dmq.PAUSE_PENDING)
            return Y.intl.format(Y.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === V.Dmq.PAUSED)
            return r.fractionalState !== T.xc.NONE
                ? Y.intl.format(Y.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: s })
                : null == e.pauseEndsAt
                  ? i
                      ? Y.intl.format(Y.t.KTYQCg, { planName: Y.intl.string(Y.t.Ipxkog), price: s })
                      : Y.intl.string(Y.t.fMz6Lg)
                  : i
                    ? Y.intl.format(Y.t.zcgtzf, {
                          planName: Y.intl.string(Y.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: s,
                      })
                    : Y.intl.format(Y.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === V.Dmq.PAST_DUE) {
            let t = eR(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = d()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = d()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? Y.intl.format(Y.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: W.qm[e.paymentGateway],
                      paymentSourceLink: eK(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : Y.intl.format(Y.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        if (e.status === V.Dmq.BILLING_RETRY || e.status === V.Dmq.ACCOUNT_HOLD) {
            let t = d()(e.currentPeriodStart)
                .add(e.status === V.Dmq.BILLING_RETRY ? 7 : 30, "days")
                .toDate();
            return e.isPurchasedExternally
                ? e.isPurchasedViaGoogle && (0, h.xv)()
                    ? Y.intl.format(Y.t["IlJ/HV"], { endDate: t })
                    : Y.intl.format(Y.t["dtcxw+"], {
                          endDate: t,
                          paymentGatewayName: W.qm[e.paymentGateway],
                          paymentSourceLink: eK(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                : Y.intl.format(Y.t.EMTLOT, { endDate: t, price: s });
        } else {
            var l;
            if (null != (l = e).paymentSourceId && eP(l.paymentSourceId))
                return Y.intl.format(Y.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === V.Dmq.UNPAID) return Y.intl.format(Y.t.CzTKom, { maxProcessingTimeInDays: 14 });
            if (e.isPurchasedExternally)
                return Y.intl.format(Y.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: W.qm[e.paymentGateway],
                    subscriptionManagementLink: eK(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = ey(n, r.unactivatedUnits)),
                i
                    ? Y.intl.format(Y.t.Vl3cED, { planName: Y.intl.string(Y.t.Ipxkog), renewalDate: n, price: s })
                    : Y.intl.format(Y.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    getExpectedRenewalDate: eL,
    extendDateWithUnconsumedFractionalPremium: ey,
    getUnactivatedFractionalPremiumDurationString: eD,
    isSwitchingPlansDisabled: eb,
    getSwitchingPlansDisabledMessage: ev,
    isNoneSubscription: P.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === V.Dmq.CANCELED || e.status === V.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eS(t);
        });
        return null == i ||
            (0, P.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === V.Dmq.CANCELED || e.status === V.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
                let { subscriptionPlanId: t } = e;
                return eS(t);
            }),
            r = e.isPurchasedExternally && null != e.renewalMutations;
        return ((null == i || (0, P.m1)(i.subscriptionPlanId)) && !r && (n = V.Dmq.CANCELED), n);
    },
    isBaseSubscriptionCanceled: eG,
    getPremiumGuildIntervalPrice: ek,
    hasAccountCredit: function (e) {
        return (
            null != e &&
            0 !== e.size &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
        );
    },
    hasUnconsumedGiftForSubscriptionPlan: function (e, t) {
        return (
            null != e &&
            0 !== e.size &&
            null != t &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: n, parentId: i, consumed: r } = e;
                return null != n && null != i && !r && n === t;
            })
        );
    },
    getBillingReviewSubheader: eF,
    getIntervalForInvoice: eB,
    getPremiumPlanItem: Z,
    getGuildBoostPlanItem: e0,
    isBoostOnlySubscription: function (e) {
        return null != e && null == Z(e) && null != e0(e);
    },
    getPremiumSkuIdForSubscription: e1,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = Z(e);
            if (null != t) return ed(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: e9,
    castPremiumSubscriptionAsSkuId: e5,
    calculateDiscountPercentageForPlan: tr,
    calculateYearlyPlanDollarSavingsAmount: ta,
    calculateYearlyPlanMonthlyRateAmount: ts,
    getDaysSincePremium: tl,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, F.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return R(I.bb.ANIMATED_EMOJIS, e);
    },
    canUseEmojisEverywhere: function (e) {
        return R(I.bb.EMOJIS_EVERYWHERE, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return R(I.bb.SOUNDBOARD_EVERYWHERE, e);
    },
    canUseCustomCallSounds: function (e) {
        return R(I.bb.CUSTOM_CALL_SOUNDS, e);
    },
    canUploadLargeFiles: function (e) {
        return R(I.bb.INCREASED_FILE_UPLOAD_SIZE, e);
    },
    canUseBadges: function (e) {
        return R(I.bb.PROFILE_BADGES, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return R(I.bb.INCREASED_VIDEO_UPLOAD_QUALITY, e);
    },
    canEditDiscriminator: function (e) {
        return R(I.bb.CUSTOM_DISCRIMINATOR, e);
    },
    hasBoostDiscount: function (e) {
        return R(I.bb.BOOST_DISCOUNT, e);
    },
    canUseAnimatedAvatar: function (e) {
        return R(I.bb.ANIMATED_AVATAR, e);
    },
    canInstallPremiumApplications: function (e) {
        return R(I.bb.INSTALL_PREMIUM_APPLICATIONS, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return R(I.bb.INCREASED_MESSAGE_LENGTH, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return R(I.bb.INCREASED_GUILD_LIMIT, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, r.YE)(e, T.PremiumTypes.TIER_2);
    },
    canUsePremiumProfileCustomization: function (e) {
        return R(I.bb.PROFILE_PREMIUM_FEATURES, e);
    },
    canUsePremiumAppIcons: function (e) {
        return R(I.bb.APP_ICONS, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return R(I.bb.PREMIUM_GUILD_MEMBER_PROFILE, e);
    },
    canUseClientThemes: function (e) {
        return R(I.bb.CLIENT_THEMES, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? R(I.bb.STREAM_HIGH_QUALITY, t) : R(I.bb.STREAM_MID_QUALITY, t);
    },
    canUseQuestOrbMultiplier: b,
    hasFreeBoosts: function (e) {
        return R(I.bb.FREE_BOOSTS, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return R(I.bb.STICKERS_EVERYWHERE, e);
    },
    canUseCustomBackgrounds: function (e) {
        return R(I.bb.VIDEO_FILTER_ASSETS, e);
    },
    canUseCollectibles: v,
    canUseMonthlyOrbs: function (e) {
        return (0, g.Nh)(e?.perks, I.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return (0, g.Nh)(e?.perks, I.bb.SHOP_DISCOUNTS) || v(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return (0, g.Nh)(e?.perks, I.bb.MORE_QUEST_ORBS) || b(e);
    },
    formatPriceString: e3,
    StreamQuality: y,
});
