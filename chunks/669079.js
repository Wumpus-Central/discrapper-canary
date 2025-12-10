n.d(t, {
    Bg: () => U,
    E5: () => ee,
    Fp: () => B,
    JT: () => $,
    L2: () => z,
    MY: () => M,
    Nz: () => V,
    QW: () => et,
    Q_: () => F,
    TO: () => W,
    Z0: () => G,
    bT: () => H,
    dM: () => Y,
    dQ: () => K,
    e$: () => X,
    iM: () => Q,
    pO: () => k,
    xr: () => j,
    z2: () => J,
}),
    n(388685),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(314940),
    n(781311);
var r = n(278074),
    i = n(873546),
    a = n(442837),
    o = n(34756),
    s = n(100159),
    l = n(912788),
    c = n(594174),
    u = n(626135),
    d = n(823379),
    f = n(74538),
    p = n(226951),
    _ = n(73346),
    m = n(981631),
    h = n(474936),
    g = n(388032);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
let y = ["discordapp.com/gifts", "discord.com/gifts"],
    O = 3,
    v = [p.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...y.map((e) => p.Z.escape(e))].join("|"),
    S = RegExp("(?: |^|https?://)(?:".concat(v, ")/([a-z0-9-]+)"), "gi"),
    I = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => p.Z.escape(e))].join("|"),
    T = RegExp("(?: |^|https?://)(?:".concat(I, ")(/|(/)?\\?code=)([a-z0-9-]+)"), "gi"),
    C = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789",
    A = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => "[".concat(C, "]{").concat(e, "}"))
            .join("-?"),
    N = A(4, 4),
    P = A(4, 6),
    R = A(5, 3),
    D = "WUMP-?",
    w = [N, P, R, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    x = new RegExp("^(".concat(D, ")?(").concat(w, ")$")),
    L = "-";
var j = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
        (e[(e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
        e
    );
})({});
let M = (e, t) => (i.tq || i.Em ? 0 : null != e || t ? 2 : 1),
    k = (e) => 0 !== M(e);
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ""
        .concat(e, ":")
        .concat(null != t ? t : "", ":")
        .concat(null != n ? n : "");
}
function G(e) {
    let [t, n, r] = e.split(":");
    return {
        skuId: t,
        subscriptionPlanId: "" === n ? null : n,
        giftStyle: "" !== r && null != r ? Number.parseInt(r) : void 0,
    };
}
function Z(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
let B = (e) => {
        var t;
        return (
            (null == e ? void 0 : e.type) === m.uaV.CUSTOM_GIFT &&
            (null == e || null == (t = e.embeds) ? void 0 : t.length) === 1 &&
            (null == e ? void 0 : e.embeds[0].type) === m.hBH.GIFT
        );
    },
    F = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = S.exec(e)) && n.size < O; ) n.add(Z(t[1]));
        for (; null != (t = T.exec(e)) && n.size < O; ) n.add(Z(t[t.length - 1]));
        return Array.from(n);
    };
function V() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return (
        null != n ? (e = "/".concat(t)) : ((n = location.host), (e = "/gifts/".concat(t))),
        "".concat(location.protocol, "//").concat(n).concat(e)
    );
}
async function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (
            await (0, _.Kb)({
                url: m.ANM.GIFT_CODE_RESOLVE(e),
                query: {
                    with_application: t,
                    with_subscription_plan: n,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        return (
            u.default.track(
                m.rMx.GIFT_CODE_RESOLVED,
                {
                    resolved: !0,
                    gift_code: r.code,
                    gift_code_max_uses: r.max_uses,
                    sku_id: r.store_listing.sku.id,
                    sku_type: r.store_listing.sku.type,
                    application_id: r.store_listing.sku.application_id,
                    store_title: r.store_listing.sku.name,
                },
                { flush: !0 },
            ),
            r
        );
    } catch (t) {
        throw (
            (u.default.track(m.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e,
            }),
            new o.Z(t))
        );
    }
}
function Y(e, t) {
    u.default.track(m.rMx.GIFT_CODE_COPIED, b({}, (0, s.Z)(t, !1, !1), e.analyticsData));
}
function W(e, t, n) {
    let { error: r, accepted: i, accepting: a, opened: o, isCustomGift: s } = n;
    return null == r && (i || a || null == e)
        ? !s || o || i || a
            ? i && (t.isSubscription || null != e)
                ? m.wZ8.SUCCESS
                : m.wZ8.CONFIRM
            : m.wZ8.OPEN
        : m.wZ8.ERROR;
}
function K(e, t, n) {
    switch (e) {
        case m.wZ8.ERROR:
            return g.intl.formatToMarkdownString(g.t.JUvC0s, {});
        case m.wZ8.SUCCESS:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["1C2BG/"], { skuName: n.name })
                : g.intl.string(g.t["+BNMcF"]);
        case m.wZ8.CONFIRM:
        default:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["2VN4N9"], { skuName: n.name })
                : g.intl.string(g.t.RmamAI);
    }
}
function z(e, t, n) {
    let { isCustomGift: r } = n;
    switch (e) {
        case m.wZ8.ERROR:
            return g.intl.string(g.t.w19zb6);
        case m.wZ8.SUCCESS:
            if (__OVERLAY__) return g.intl.string(g.t.zW87EM);
            if (t.isSubscription) return g.intl.string(g.t.ex5TKr);
            return g.intl.string(g.t.OOkjql);
        case m.wZ8.OPEN:
            return g.intl.string(g.t.F8ktci);
        case m.wZ8.CONFIRM:
        default:
            if (null != r && r) return g.intl.string(g.t.n6I6k4);
            if (null != t.giftStyle) return t.isClaimed ? g.intl.string(g.t.OgpR0c) : g.intl.string(g.t["2BWscv"]);
            return t.isSubscription ? g.intl.string(g.t.wQ1FHy) : g.intl.string(g.t.OgpR0c);
    }
}
function q(e) {
    return (0, r.EQ)(e)
        .with(
            {
                interval: h.rV.MONTH,
                premiumSubscriptionType: h.PremiumTypes.TIER_2,
            },
            () => g.intl.formatToPlainString(g.t["vFfV+J"], { timeInterval: g.intl.string(g.t.FPybU7) }),
        )
        .with(
            {
                interval: h.rV.YEAR,
                premiumSubscriptionType: h.PremiumTypes.TIER_2,
            },
            () => g.intl.formatToPlainString(g.t["vFfV+J"], { timeInterval: g.intl.string(g.t.tfqrhj) }),
        )
        .with(
            {
                interval: h.rV.MONTH,
                premiumSubscriptionType: h.PremiumTypes.TIER_1,
            },
            () => g.intl.formatToPlainString(g.t.gjKbF4, { intervalCount: e.intervalCount }),
        )
        .with(
            {
                interval: h.rV.YEAR,
                premiumSubscriptionType: h.PremiumTypes.TIER_1,
            },
            () => g.intl.formatToPlainString(g.t.GIe7Bw, { intervalCount: e.intervalCount }),
        )
        .otherwise(() => g.intl.string(g.t["5ayf7w"]));
}
function Q(e) {
    let {
        step: t,
        sku: n,
        libraryApplication: r,
        error: i,
        accepted: a,
        accepting: o,
        onGoToLibrary: s,
        subscriptionPlan: l = null,
    } = e;
    switch (t) {
        case m.wZ8.ERROR:
            return X(r, i, a, o, s);
        case m.wZ8.SUCCESS:
            if (null != l) return q(l);
            return g.intl.formatToPlainString(g.t["3CPsbo"], { skuName: n.name });
        case m.wZ8.CONFIRM:
        default:
            if (null != l) {
                let e = l.interval === h.rV.MONTH ? g.t.P9eTKt : g.t.d8rUdy;
                return g.intl.format(e, {
                    skuName: n.name,
                    intervalCount: l.intervalCount,
                });
            }
            return g.intl.formatToPlainString(g.t.l6Ea4Z, { skuName: n.name });
    }
}
function X(e, t, n, r, i) {
    let a = n || r ? void 0 : e,
        o = g.intl.format(g.t["5zyz9y"], { onGoToLibrary: i });
    return null != a ? o : null == t ? null : et(t, c.default.getCurrentUser());
}
function J(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        a = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(d.lm);
    return a.length === i.length ? a[0] : null;
}
function $(e) {
    let t = e.trim().split("/").pop().match(x);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(RegExp(L, "g"), "");
}
let ee = (e, t) =>
    (0, a.e7)([l.Z], () => {
        if (null == e || !t) return null;
        let n = l.Z.getGiftCode(e);
        return null == n || "" === n ? null : n;
    });
function et(e, t) {
    switch (e.code) {
        case m.evJ.INVALID_GIFT_SELF_REDEMPTION:
            return g.intl.string(g.t.wa9h7F);
        case m.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return g.intl.string(g.t.Iw2TUW);
        case m.evJ.INVALID_GIFT_REDEMPTION_OWNED:
            return g.intl.string(g.t.mdLtb5);
        case m.evJ.UNKNOWN_GIFT_CODE:
            return g.intl.string(g.t.roztIr);
        case m.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return g.intl.formatToPlainString(g.t["4YTHKw"], {
                planName: (0, f.M5)(t, h.PremiumTypes.TIER_2) ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t.FSOz78),
            });
        case m.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return g.intl.string(g.t["9i1J30"]);
        case m.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return g.intl.string(g.t["U26WX+"]);
        case m.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return g.intl.string(g.t.ypuSd8);
        case m.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return g.intl.string(g.t.mXMmWE);
        default:
            return g.intl.string(g.t["s9+XlB"]);
    }
}
