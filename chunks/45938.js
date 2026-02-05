"use strict";
n.d(t, {
    AK: () => H,
    GM: () => j,
    Ik: () => M,
    Kx: () => k,
    UJ: () => K,
    Vd: () => Q,
    Vt: () => X,
    X6: () => U,
    YI: () => Z,
    Zq: () => B,
    e7: () => F,
    eN: () => J,
    e_: () => $,
    lo: () => P,
    n$: () => W,
    pF: () => V,
    tB: () => x,
    u1: () => q,
    v3: () => Y,
}),
    n(801541);
var r = n(889137),
    i = n(607399),
    a = n(311907),
    s = n(178253),
    o = n(491509),
    l = n(419212),
    u = n(287809),
    c = n(954571),
    d = n(403362),
    _ = n(927578),
    f = n(257120),
    p = n(371794),
    h = n(652215),
    m = n(788868),
    g = n(985018);
let E = ["discordapp.com/gifts", "discord.com/gifts"],
    A = 3,
    I = [f.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...E.map((e) => f.A.escape(e))].join("|"),
    T = RegExp(`(?: |^|https?://)(?:${I})/([a-z0-9-]+)`, "gi"),
    y = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => f.A.escape(e))].join("|"),
    S = RegExp(`(?: |^|https?://)(?:${y})(/|(/)?\\?code=)([a-z0-9-]+)`, "gi"),
    v = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789",
    C = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => `[${v}]{${e}}`)
            .join("-?"),
    b = C(4, 4),
    N = C(4, 6),
    R = C(5, 3),
    O = "WUMP-?",
    D = [b, N, R, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    L = RegExp(`^(${O})?(${D})$`),
    w = "-";
var x = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
        (e[(e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
        e
    );
})({});
let P = (e, t) => (i.Fr || i.v1 ? 0 : null != e || t ? 2 : 1),
    M = (e) => 0 !== P(e);
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return `${e}:${t ?? ""}:${n ?? ""}`;
}
function U(e) {
    let [t, n, r] = e.split(":");
    return {
        skuId: t,
        subscriptionPlanId: "" === n ? null : n,
        giftStyle: "" !== r && null != r ? Number.parseInt(r) : void 0,
    };
}
function G(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
let V = (e) => e?.type === h.lAJ.CUSTOM_GIFT && e?.embeds?.length === 1 && e?.embeds[0].type === h.Auw.GIFT,
    F = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = T.exec(e)) && n.size < A; ) n.add(G(t[1]));
        for (; null != (t = S.exec(e)) && n.size < A; ) n.add(G(t[t.length - 1]));
        return Array.from(n);
    };
function B() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = `/${t}`) : ((n = location.host), (e = `/gifts/${t}`)), `${location.protocol}//${n}${e}`;
}
async function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (
            await (0, p.aP)({
                url: h.Rsh.GIFT_CODE_RESOLVE(e),
                query: { with_application: t, with_subscription_plan: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        return (
            c.default.track(
                h.HAw.GIFT_CODE_RESOLVED,
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
        throw (c.default.track(h.HAw.GIFT_CODE_RESOLVED, { resolved: !1, gift_code: e }), new s.A(t));
    }
}
function H(e, t) {
    c.default.track(h.HAw.GIFT_CODE_COPIED, { ...(0, o.A)(t, !1, !1), ...e.analyticsData });
}
function Y(e, t, n) {
    let { error: r, accepted: i, accepting: a, opened: s, isCustomGift: o } = n;
    return null == r && (i || a || null == e)
        ? !o || s || i || a
            ? i && (t.isSubscription || null != e)
                ? h.frR.SUCCESS
                : h.frR.CONFIRM
            : h.frR.OPEN
        : h.frR.ERROR;
}
function W(e, t, n) {
    switch (e) {
        case h.frR.ERROR:
            return g.intl.formatToMarkdownString(g.t.JUvC0s, {});
        case h.frR.SUCCESS:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["1C2BG/"], { skuName: n.name })
                : g.intl.string(g.t["+BNMcF"]);
        case h.frR.CONFIRM:
        default:
            return t.isSubscription
                ? g.intl.formatToPlainString(g.t["2VN4N9"], { skuName: n.name })
                : g.intl.string(g.t.RmamAI);
    }
}
function K(e, t, n) {
    let { isCustomGift: r } = n;
    switch (e) {
        case h.frR.ERROR:
            return g.intl.string(g.t.w19zb6);
        case h.frR.SUCCESS:
            if (__OVERLAY__) return g.intl.string(g.t.zW87EM);
            if (t.isSubscription) return g.intl.string(g.t.ex5TKr);
            return g.intl.string(g.t.OOkjql);
        case h.frR.OPEN:
            return g.intl.string(g.t.F8ktci);
        case h.frR.CONFIRM:
        default:
            if (null != r && r) return g.intl.string(g.t.n6I6k4);
            if (null != t.giftStyle) return t.isClaimed ? g.intl.string(g.t.OgpR0c) : g.intl.string(g.t["2BWscv"]);
            return t.isSubscription ? g.intl.string(g.t.wQ1FHy) : g.intl.string(g.t.OgpR0c);
    }
}
function z(e) {
    return (0, r.YW)(e)
        .with({ interval: m.WT.MONTH, premiumSubscriptionType: m.PremiumTypes.TIER_2 }, () =>
            g.intl.formatToPlainString(g.t["vFfV+J"], { timeInterval: g.intl.string(g.t.FPybU7) }),
        )
        .with({ interval: m.WT.YEAR, premiumSubscriptionType: m.PremiumTypes.TIER_2 }, () =>
            g.intl.formatToPlainString(g.t["vFfV+J"], { timeInterval: g.intl.string(g.t.tfqrhj) }),
        )
        .with({ interval: m.WT.MONTH, premiumSubscriptionType: m.PremiumTypes.TIER_1 }, () =>
            g.intl.formatToPlainString(g.t.gjKbF4, { intervalCount: e.intervalCount }),
        )
        .with({ interval: m.WT.YEAR, premiumSubscriptionType: m.PremiumTypes.TIER_1 }, () =>
            g.intl.formatToPlainString(g.t.GIe7Bw, { intervalCount: e.intervalCount }),
        )
        .otherwise(() => g.intl.string(g.t["5ayf7w"]));
}
function $(e) {
    let {
        step: t,
        sku: n,
        libraryApplication: r,
        error: i,
        accepted: a,
        accepting: s,
        onGoToLibrary: o,
        subscriptionPlan: l = null,
    } = e;
    switch (t) {
        case h.frR.ERROR:
            return q(r, i, a, s, o);
        case h.frR.SUCCESS:
            if (null != l) return z(l);
            return g.intl.formatToPlainString(g.t["3CPsbo"], { skuName: n.name });
        case h.frR.CONFIRM:
        default:
            if (null != l) {
                let e = l.interval === m.WT.MONTH ? g.t.P9eTKt : g.t.d8rUdy;
                return g.intl.format(e, { skuName: n.name, intervalCount: l.intervalCount });
            }
            return g.intl.formatToPlainString(g.t.l6Ea4Z, { skuName: n.name });
    }
}
function q(e, t, n, r, i) {
    let a = n || r ? void 0 : e,
        s = g.intl.format(g.t["5zyz9y"], { onGoToLibrary: i });
    return null != a ? s : null == t ? null : J(t, u.default.getCurrentUser());
}
function Z(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        a = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(d.Vq);
    return a.length === i.length ? a[0] : null;
}
function Q(e) {
    let t = e.trim().split("/").pop().match(L);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(RegExp(w, "g"), "");
}
let X = (e, t) =>
    (0, a.bG)([l.A], () => {
        if (null == e || !t) return null;
        let n = l.A.getGiftCode(e);
        return null == n || "" === n ? null : n;
    });
function J(e, t) {
    switch (e.code) {
        case h.t02.INVALID_GIFT_SELF_REDEMPTION:
            return g.intl.string(g.t.wa9h7F);
        case h.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return g.intl.string(g.t.Iw2TUW);
        case h.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return g.intl.string(g.t.mdLtb5);
        case h.t02.UNKNOWN_GIFT_CODE:
            return g.intl.string(g.t.roztIr);
        case h.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return g.intl.formatToPlainString(g.t["4YTHKw"], {
                planName: (0, _.YE)(t, m.PremiumTypes.TIER_2) ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t.FSOz78),
            });
        case h.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return g.intl.string(g.t["9i1J30"]);
        case h.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return g.intl.string(g.t["U26WX+"]);
        case h.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return g.intl.string(g.t.ypuSd8);
        case h.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return g.intl.string(g.t.mXMmWE);
        default:
            return g.intl.string(g.t["s9+XlB"]);
    }
}
