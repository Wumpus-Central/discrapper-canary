"use strict";
n.d(t, {
    AK: () => U,
    GM: () => x,
    Ik: () => R,
    Kx: () => b,
    UJ: () => F,
    Vd: () => j,
    Vt: () => Y,
    X6: () => D,
    YI: () => H,
    Zq: () => P,
    e7: () => M,
    eN: () => W,
    e_: () => V,
    lo: () => O,
    n$: () => G,
    pF: () => w,
    tB: () => v,
    u1: () => B,
    v3: () => k,
}),
    n(801541);
var i,
    r = n(889137),
    s = n(607399),
    a = n(17928),
    o = n(178253),
    l = n(491509),
    u = n(419212),
    c = n(287809),
    d = n(174459),
    _ = n(403362),
    f = n(927578),
    h = n(257120),
    p = n(371794),
    E = n(652215),
    m = n(788868),
    g = n(375708);
let A = [
        h.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
        ...["discordapp.com/gifts", "discord.com/gifts"].map((e) => h.A.escape(e)),
    ].join("|"),
    I = RegExp(`(?: |^|https?://)(?:${A})/([a-z0-9-]+)`, "gi"),
    T = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => h.A.escape(e))].join("|"),
    S = RegExp(`(?: |^|https?://)(?:${T})(/|(/)?\\?code=)([a-z0-9-]+)`, "gi"),
    N = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => `[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{${e}}`)
            .join("-?"),
    y = [N(4, 4), N(4, 6), N(5, 3), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    C = RegExp(`^(WUMP-?)?(${y})$`);
var v =
    (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
    (i[(i.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
    i);
let O = (e, t) => (s.Fr || s.v1 ? 0 : null != e || t ? 2 : 1),
    R = (e) => 0 !== O(e);
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return `${e}:${t ?? ""}:${n ?? ""}`;
}
function D(e) {
    let [t, n, i] = e.split(":");
    return {
        skuId: t,
        subscriptionPlanId: "" === n ? null : n,
        giftStyle: "" !== i && null != i ? Number.parseInt(i) : void 0,
    };
}
function L(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
let w = (e) => e?.type === E.lAJ.CUSTOM_GIFT && e?.embeds?.length === 1 && e?.embeds[0].type === E.Auw.GIFT,
    M = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = I.exec(e)) && n.size < 3; ) n.add(L(t[1]));
        for (; null != (t = S.exec(e)) && n.size < 3; ) n.add(L(t[t.length - 1]));
        return Array.from(n);
    };
function P() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = `/${t}`) : ((n = location.host), (e = `/gifts/${t}`)), `${location.protocol}//${n}${e}`;
}
async function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let i = (
            await (0, p.aP)({
                url: E.Rsh.GIFT_CODE_RESOLVE(e),
                query: { with_application: t, with_subscription_plan: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        return (
            d.default.track(
                E.HAw.GIFT_CODE_RESOLVED,
                {
                    resolved: !0,
                    gift_code: i.code,
                    gift_code_max_uses: i.max_uses,
                    sku_id: i.store_listing.sku.id,
                    sku_type: i.store_listing.sku.type,
                    application_id: i.store_listing.sku.application_id,
                    store_title: i.store_listing.sku.name,
                },
                { flush: !0 },
            ),
            i
        );
    } catch (t) {
        throw (d.default.track(E.HAw.GIFT_CODE_RESOLVED, { resolved: !1, gift_code: e }), new o.A(t));
    }
}
function U(e, t) {
    d.default.track(E.HAw.GIFT_CODE_COPIED, { ...(0, l.A)(t, !1, !1), ...e.analyticsData });
}
function k(e, t, n) {
    let { error: i, accepted: r, accepting: s, opened: a, isCustomGift: o } = n;
    return null == i && (r || s || null == e)
        ? !o || a || r || s
            ? r && (t.isSubscription || null != e)
                ? E.frR.SUCCESS
                : E.frR.CONFIRM
            : E.frR.OPEN
        : E.frR.ERROR;
}
function G(e, t, n) {
    switch (e) {
        case E.frR.ERROR:
            return g.intl.formatToMarkdownString(g.t.JUvC0s, {});
        case E.frR.SUCCESS:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["1C2BG/"], { skuName: n.name })
                : g.intl.string(g.t["+BNMcF"]);
        case E.frR.CONFIRM:
        default:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["2VN4N9"], { skuName: n.name })
                : g.intl.string(g.t.RmamAI);
    }
}
function F(e, t, n) {
    let { isCustomGift: i } = n;
    switch (e) {
        case E.frR.ERROR:
            return g.intl.string(g.t.w19zb6);
        case E.frR.SUCCESS:
            if (__OVERLAY__) return g.intl.string(g.t.zW87EM);
            if (t.isSubscription) return g.intl.string(g.t.ex5TKr);
            return g.intl.string(g.t.OOkjql);
        case E.frR.OPEN:
            return g.intl.string(g.t.F8ktci);
        case E.frR.CONFIRM:
        default:
            if (null != i && i) return g.intl.string(g.t.n6I6k4);
            if (null != t.giftStyle) return t.isClaimed ? g.intl.string(g.t.OgpR0c) : g.intl.string(g.t["2BWscv"]);
            return t.isSubscription ? g.intl.string(g.t.wQ1FHy) : g.intl.string(g.t.OgpR0c);
    }
}
function V(e) {
    let {
        step: t,
        sku: n,
        libraryApplication: i,
        error: s,
        accepted: a,
        accepting: o,
        onGoToLibrary: l,
        subscriptionPlan: u = null,
    } = e;
    switch (t) {
        case E.frR.ERROR:
            return B(i, s, a, o, l);
        case E.frR.SUCCESS:
            if (null != u)
                return (0, r.YW)(u)
                    .with({ interval: m.WT.MONTH, premiumSubscriptionType: m.PremiumTypes.TIER_2 }, () =>
                        g.intl.formatToPlainString(g.t["vFfV+J"], { timeInterval: g.intl.string(g.t.FPybU7) }),
                    )
                    .with({ interval: m.WT.YEAR, premiumSubscriptionType: m.PremiumTypes.TIER_2 }, () =>
                        g.intl.formatToPlainString(g.t["vFfV+J"], { timeInterval: g.intl.string(g.t.tfqrhj) }),
                    )
                    .with({ interval: m.WT.MONTH, premiumSubscriptionType: m.PremiumTypes.TIER_1 }, () =>
                        g.intl.formatToPlainString(g.t.gjKbF4, { intervalCount: u.intervalCount }),
                    )
                    .with({ interval: m.WT.YEAR, premiumSubscriptionType: m.PremiumTypes.TIER_1 }, () =>
                        g.intl.formatToPlainString(g.t.GIe7Bw, { intervalCount: u.intervalCount }),
                    )
                    .otherwise(() => g.intl.string(g.t["5ayf7w"]));
            return g.intl.formatToPlainString(g.t["3CPsbo"], { skuName: n.name });
        case E.frR.CONFIRM:
        default:
            if (null != u) {
                let e = u.interval === m.WT.MONTH ? g.t.P9eTKt : g.t.d8rUdy;
                return g.intl.format(e, { skuName: n.name, intervalCount: u.intervalCount });
            }
            return g.intl.formatToPlainString(g.t.l6Ea4Z, { skuName: n.name });
    }
}
function B(e, t, n, i, r) {
    let s = g.intl.format(g.t["5zyz9y"], { onGoToLibrary: r });
    return null != (n || i ? void 0 : e) ? s : null == t ? null : W(t, c.default.getCurrentUser());
}
function H(e, t, n) {
    let i = t.applicationId,
        r = e.length > 0 ? e : [i],
        s = r.map((e) => n.getLibraryApplication(i, e, !0)).filter(_.Vq);
    return s.length === r.length ? s[0] : null;
}
function j(e) {
    let t = e.trim().split("/").pop().match(C);
    if (null == t) return null;
    let [n, i, r] = t;
    return null == r ? null : r.replace(/-/g, "");
}
let Y = (e, t) =>
    (0, a.bG)([u.A], () => {
        if (null == e || !t) return null;
        let n = u.A.getGiftCode(e);
        return null == n || "" === n ? null : n;
    });
function W(e, t) {
    switch (e.code) {
        case E.t02.INVALID_GIFT_SELF_REDEMPTION:
            return g.intl.string(g.t.wa9h7F);
        case E.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return g.intl.string(g.t.Iw2TUW);
        case E.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return g.intl.string(g.t.mdLtb5);
        case E.t02.UNKNOWN_GIFT_CODE:
            return g.intl.string(g.t.roztIr);
        case E.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return g.intl.formatToPlainString(g.t["4YTHKw"], {
                planName: (0, f.YE)(t, m.PremiumTypes.TIER_2) ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t.FSOz78),
            });
        case E.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return g.intl.string(g.t["9i1J30"]);
        case E.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return g.intl.string(g.t["U26WX+"]);
        case E.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return g.intl.string(g.t.ypuSd8);
        case E.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return g.intl.string(g.t.mXMmWE);
        default:
            return g.intl.string(g.t["s9+XlB"]);
    }
}
