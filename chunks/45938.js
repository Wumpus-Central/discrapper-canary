"use strict";
n.d(t, {
    AK: () => k,
    GM: () => U,
    Ik: () => C,
    Kx: () => b,
    UJ: () => V,
    Vd: () => Y,
    Vt: () => W,
    X6: () => D,
    YI: () => H,
    Zq: () => P,
    e7: () => M,
    eN: () => j,
    e_: () => F,
    lo: () => v,
    n$: () => G,
    pF: () => w,
    tB: () => R,
    u1: () => B,
    v3: () => x,
}),
    n(801541);
var r,
    i = n(889137),
    s = n(607399),
    a = n(311907),
    o = n(178253),
    l = n(491509),
    u = n(419212),
    d = n(287809),
    c = n(954571),
    _ = n(403362),
    f = n(927578),
    E = n(257120),
    h = n(371794),
    p = n(652215),
    m = n(788868),
    g = n(985018);
let A = [
        E.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
        ...["discordapp.com/gifts", "discord.com/gifts"].map((e) => E.A.escape(e)),
    ].join("|"),
    I = RegExp(`(?: |^|https?://)(?:${A})/([a-z0-9-]+)`, "gi"),
    T = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => E.A.escape(e))].join("|"),
    S = RegExp(`(?: |^|https?://)(?:${T})(/|(/)?\\?code=)([a-z0-9-]+)`, "gi"),
    y = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => `[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{${e}}`)
            .join("-?"),
    N = [y(4, 4), y(4, 6), y(5, 3), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    O = RegExp(`^(WUMP-?)?(${N})$`);
var R =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
    (r[(r.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
    r);
let v = (e, t) => (s.Fr || s.v1 ? 0 : null != e || t ? 2 : 1),
    C = (e) => 0 !== v(e);
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return `${e}:${t ?? ""}:${n ?? ""}`;
}
function D(e) {
    let [t, n, r] = e.split(":");
    return {
        skuId: t,
        subscriptionPlanId: "" === n ? null : n,
        giftStyle: "" !== r && null != r ? Number.parseInt(r) : void 0,
    };
}
function L(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
let w = (e) => e?.type === p.lAJ.CUSTOM_GIFT && e?.embeds?.length === 1 && e?.embeds[0].type === p.Auw.GIFT,
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
async function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (
            await (0, h.aP)({
                url: p.Rsh.GIFT_CODE_RESOLVE(e),
                query: { with_application: t, with_subscription_plan: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        return (
            c.default.track(
                p.HAw.GIFT_CODE_RESOLVED,
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
        throw (c.default.track(p.HAw.GIFT_CODE_RESOLVED, { resolved: !1, gift_code: e }), new o.A(t));
    }
}
function k(e, t) {
    c.default.track(p.HAw.GIFT_CODE_COPIED, { ...(0, l.A)(t, !1, !1), ...e.analyticsData });
}
function x(e, t, n) {
    let { error: r, accepted: i, accepting: s, opened: a, isCustomGift: o } = n;
    return null == r && (i || s || null == e)
        ? !o || a || i || s
            ? i && (t.isSubscription || null != e)
                ? p.frR.SUCCESS
                : p.frR.CONFIRM
            : p.frR.OPEN
        : p.frR.ERROR;
}
function G(e, t, n) {
    switch (e) {
        case p.frR.ERROR:
            return g.intl.formatToMarkdownString(g.t.JUvC0s, {});
        case p.frR.SUCCESS:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["1C2BG/"], { skuName: n.name })
                : g.intl.string(g.t["+BNMcF"]);
        case p.frR.CONFIRM:
        default:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["2VN4N9"], { skuName: n.name })
                : g.intl.string(g.t.RmamAI);
    }
}
function V(e, t, n) {
    let { isCustomGift: r } = n;
    switch (e) {
        case p.frR.ERROR:
            return g.intl.string(g.t.w19zb6);
        case p.frR.SUCCESS:
            if (__OVERLAY__) return g.intl.string(g.t.zW87EM);
            if (t.isSubscription) return g.intl.string(g.t.ex5TKr);
            return g.intl.string(g.t.OOkjql);
        case p.frR.OPEN:
            return g.intl.string(g.t.F8ktci);
        case p.frR.CONFIRM:
        default:
            if (null != r && r) return g.intl.string(g.t.n6I6k4);
            if (null != t.giftStyle) return t.isClaimed ? g.intl.string(g.t.OgpR0c) : g.intl.string(g.t["2BWscv"]);
            return t.isSubscription ? g.intl.string(g.t.wQ1FHy) : g.intl.string(g.t.OgpR0c);
    }
}
function F(e) {
    let {
        step: t,
        sku: n,
        libraryApplication: r,
        error: s,
        accepted: a,
        accepting: o,
        onGoToLibrary: l,
        subscriptionPlan: u = null,
    } = e;
    switch (t) {
        case p.frR.ERROR:
            return B(r, s, a, o, l);
        case p.frR.SUCCESS:
            if (null != u)
                return (0, i.YW)(u)
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
        case p.frR.CONFIRM:
        default:
            if (null != u) {
                let e = u.interval === m.WT.MONTH ? g.t.P9eTKt : g.t.d8rUdy;
                return g.intl.format(e, { skuName: n.name, intervalCount: u.intervalCount });
            }
            return g.intl.formatToPlainString(g.t.l6Ea4Z, { skuName: n.name });
    }
}
function B(e, t, n, r, i) {
    let s = g.intl.format(g.t["5zyz9y"], { onGoToLibrary: i });
    return null != (n || r ? void 0 : e) ? s : null == t ? null : j(t, d.default.getCurrentUser());
}
function H(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        s = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(_.Vq);
    return s.length === i.length ? s[0] : null;
}
function Y(e) {
    let t = e.trim().split("/").pop().match(O);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(/-/g, "");
}
let W = (e, t) =>
    (0, a.bG)([u.A], () => {
        if (null == e || !t) return null;
        let n = u.A.getGiftCode(e);
        return null == n || "" === n ? null : n;
    });
function j(e, t) {
    switch (e.code) {
        case p.t02.INVALID_GIFT_SELF_REDEMPTION:
            return g.intl.string(g.t.wa9h7F);
        case p.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return g.intl.string(g.t.Iw2TUW);
        case p.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return g.intl.string(g.t.mdLtb5);
        case p.t02.UNKNOWN_GIFT_CODE:
            return g.intl.string(g.t.roztIr);
        case p.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return g.intl.formatToPlainString(g.t["4YTHKw"], {
                planName: (0, f.YE)(t, m.PremiumTypes.TIER_2) ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t.FSOz78),
            });
        case p.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return g.intl.string(g.t["9i1J30"]);
        case p.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return g.intl.string(g.t["U26WX+"]);
        case p.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return g.intl.string(g.t.ypuSd8);
        case p.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return g.intl.string(g.t.mXMmWE);
        default:
            return g.intl.string(g.t["s9+XlB"]);
    }
}
