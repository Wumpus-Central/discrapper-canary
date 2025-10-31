n.d(t, {
    Bg: () => U,
    E5: () => ee,
    Fp: () => Z,
    JT: () => $,
    L2: () => z,
    MY: () => j,
    Nz: () => V,
    QW: () => et,
    Q_: () => F,
    TO: () => W,
    Z0: () => G,
    bT: () => H,
    dM: () => Y,
    dQ: () => K,
    e$: () => Q,
    iM: () => X,
    pO: () => k,
    xr: () => M,
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
    _ = n(226951),
    p = n(73346),
    h = n(981631),
    m = n(474936),
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
    v = [_.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...y.map((e) => _.Z.escape(e))].join("|"),
    I = RegExp("(?: |^|https?://)(?:".concat(v, ")/([a-z0-9-]+)"), "gi"),
    T = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => _.Z.escape(e))].join("|"),
    S = RegExp("(?: |^|https?://)(?:".concat(T, ")(/|(/)?\\?code=)([a-z0-9-]+)"), "gi"),
    A = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789",
    C = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => "[".concat(A, "]{").concat(e, "}"))
            .join("-?"),
    N = C(4, 4),
    R = C(4, 6),
    P = C(5, 3),
    w = "WUMP-?",
    D = [N, R, P, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    x = new RegExp("^(".concat(w, ")?(").concat(D, ")$")),
    L = "-";
var M = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
        (e[(e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
        e
    );
})({});
let j = (e, t) => (i.tq || i.Em ? 0 : null != e || t ? 2 : 1),
    k = (e) => 0 !== j(e);
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
function B(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
let Z = (e) => {
        var t;
        return (
            (null == e ? void 0 : e.type) === h.uaV.CUSTOM_GIFT &&
            (null == e || null == (t = e.embeds) ? void 0 : t.length) === 1 &&
            (null == e ? void 0 : e.embeds[0].type) === h.hBH.GIFT
        );
    },
    F = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = I.exec(e)) && n.size < O; ) n.add(B(t[1]));
        for (; null != (t = S.exec(e)) && n.size < O; ) n.add(B(t[t.length - 1]));
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
            await (0, p.Kb)({
                url: h.ANM.GIFT_CODE_RESOLVE(e),
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
                h.rMx.GIFT_CODE_RESOLVED,
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
            (u.default.track(h.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e,
            }),
            new o.Z(t))
        );
    }
}
function Y(e, t) {
    u.default.track(h.rMx.GIFT_CODE_COPIED, b({}, (0, s.Z)(t, !1, !1), e.analyticsData));
}
function W(e, t, n) {
    let { error: r, accepted: i, accepting: a, opened: o, isCustomGift: s } = n;
    return null == r && (i || a || null == e)
        ? !s || o || i || a
            ? i && (t.isSubscription || null != e)
                ? h.wZ8.SUCCESS
                : h.wZ8.CONFIRM
            : h.wZ8.OPEN
        : h.wZ8.ERROR;
}
function K(e, t, n) {
    switch (e) {
        case h.wZ8.ERROR:
            return g.intl.formatToMarkdownString(g.t.JUvC0s, {});
        case h.wZ8.SUCCESS:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["1C2BG/"], { skuName: n.name })
                : g.intl.string(g.t["+BNMcF"]);
        case h.wZ8.CONFIRM:
        default:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["2VN4N9"], { skuName: n.name })
                : g.intl.string(g.t.RmamAI);
    }
}
function z(e, t, n) {
    let { isCustomGift: r } = n;
    switch (e) {
        case h.wZ8.ERROR:
            return g.intl.string(g.t.w19zb6);
        case h.wZ8.SUCCESS:
            if (__OVERLAY__) return g.intl.string(g.t.zW87EM);
            if (t.isSubscription) return g.intl.string(g.t.ex5TKr);
            return g.intl.string(g.t.OOkjql);
        case h.wZ8.OPEN:
            return g.intl.string(g.t.F8ktci);
        case h.wZ8.CONFIRM:
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
                interval: m.rV.MONTH,
                premiumSubscriptionType: m.PremiumTypes.TIER_2,
            },
            () => g.intl.formatToPlainString(g.t["vFfV+J"], { timeInterval: g.intl.string(g.t.FPybU7) }),
        )
        .with(
            {
                interval: m.rV.YEAR,
                premiumSubscriptionType: m.PremiumTypes.TIER_2,
            },
            () => g.intl.formatToPlainString(g.t["vFfV+J"], { timeInterval: g.intl.string(g.t.tfqrhj) }),
        )
        .with(
            {
                interval: m.rV.MONTH,
                premiumSubscriptionType: m.PremiumTypes.TIER_1,
            },
            () => g.intl.formatToPlainString(g.t.gjKbF4, { intervalCount: e.intervalCount }),
        )
        .with(
            {
                interval: m.rV.YEAR,
                premiumSubscriptionType: m.PremiumTypes.TIER_1,
            },
            () => g.intl.formatToPlainString(g.t.GIe7Bw, { intervalCount: e.intervalCount }),
        )
        .otherwise(() => g.intl.string(g.t["5ayf7w"]));
}
function X(e) {
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
        case h.wZ8.ERROR:
            return Q(r, i, a, o, s);
        case h.wZ8.SUCCESS:
            if (null != l) return q(l);
            return g.intl.formatToPlainString(g.t["3CPsbo"], { skuName: n.name });
        case h.wZ8.CONFIRM:
        default:
            if (null != l) {
                let e = l.interval === m.rV.MONTH ? g.t.P9eTKt : g.t.d8rUdy;
                return g.intl.format(e, {
                    skuName: n.name,
                    intervalCount: l.intervalCount,
                });
            }
            return g.intl.formatToPlainString(g.t.l6Ea4Z, { skuName: n.name });
    }
}
function Q(e, t, n, r, i) {
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
        case h.evJ.INVALID_GIFT_SELF_REDEMPTION:
            return g.intl.string(g.t.wa9h7F);
        case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return g.intl.string(g.t.Iw2TUW);
        case h.evJ.INVALID_GIFT_REDEMPTION_OWNED:
            return g.intl.string(g.t.mdLtb5);
        case h.evJ.UNKNOWN_GIFT_CODE:
            return g.intl.string(g.t.roztIr);
        case h.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return g.intl.formatToPlainString(g.t["4YTHKw"], {
                planName: (0, f.M5)(t, m.PremiumTypes.TIER_2) ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t.FSOz78),
            });
        case h.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return g.intl.string(g.t["9i1J30"]);
        case h.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return g.intl.string(g.t["U26WX+"]);
        case h.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return g.intl.string(g.t.ypuSd8);
        case h.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return g.intl.string(g.t.mXMmWE);
        default:
            return g.intl.string(g.t["s9+XlB"]);
    }
}
