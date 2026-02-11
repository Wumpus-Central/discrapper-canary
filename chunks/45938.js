"use strict";
n.d(t, {
    AK: () => Y,
    GM: () => H,
    Ik: () => k,
    Kx: () => U,
    UJ: () => $,
    Vd: () => Q,
    Vt: () => J,
    X6: () => G,
    YI: () => Z,
    Zq: () => j,
    e7: () => B,
    eN: () => ee,
    e_: () => q,
    lo: () => M,
    n$: () => K,
    pF: () => V,
    tB: () => P,
    u1: () => X,
    v3: () => W,
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
    h = n(371794),
    p = n(652215),
    g = n(788868),
    E = n(985018);
let A = ["discordapp.com/gifts", "discord.com/gifts"],
    I = 3,
    T = [f.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...A.map((e) => f.A.escape(e))].join("|"),
    y = RegExp(`(?: |^|https?://)(?:${T})/([a-z0-9-]+)`, "gi"),
    S = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => f.A.escape(e))].join("|"),
    v = RegExp(`(?: |^|https?://)(?:${S})(/|(/)?\\?code=)([a-z0-9-]+)`, "gi"),
    C = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789",
    b = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => `[${C}]{${e}}`)
            .join("-?"),
    N = b(4, 4),
    R = b(4, 6),
    O = b(5, 3),
    D = "WUMP-?",
    L = [N, R, O, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    w = RegExp(`^(${D})?(${L})$`),
    x = "-";
var P = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
        (e[(e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
        e
    );
})({});
let M = (e, t) => (i.Fr || i.v1 ? 0 : null != e || t ? 2 : 1),
    k = (e) => 0 !== M(e);
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return `${e}:${t ?? ""}:${n ?? ""}`;
}
function G(e) {
    let [t, n, r] = e.split(":");
    return {
        skuId: t,
        subscriptionPlanId: "" === n ? null : n,
        giftStyle: "" !== r && null != r ? Number.parseInt(r) : void 0,
    };
}
function F(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
let V = (e) => e?.type === p.lAJ.CUSTOM_GIFT && e?.embeds?.length === 1 && e?.embeds[0].type === p.Auw.GIFT,
    B = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = y.exec(e)) && n.size < I; ) n.add(F(t[1]));
        for (; null != (t = v.exec(e)) && n.size < I; ) n.add(F(t[t.length - 1]));
        return Array.from(n);
    };
function j() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = `/${t}`) : ((n = location.host), (e = `/gifts/${t}`)), `${location.protocol}//${n}${e}`;
}
async function H(e) {
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
        throw (c.default.track(p.HAw.GIFT_CODE_RESOLVED, { resolved: !1, gift_code: e }), new s.A(t));
    }
}
function Y(e, t) {
    c.default.track(p.HAw.GIFT_CODE_COPIED, { ...(0, o.A)(t, !1, !1), ...e.analyticsData });
}
function W(e, t, n) {
    let { error: r, accepted: i, accepting: a, opened: s, isCustomGift: o } = n;
    return null == r && (i || a || null == e)
        ? !o || s || i || a
            ? i && (t.isSubscription || null != e)
                ? p.frR.SUCCESS
                : p.frR.CONFIRM
            : p.frR.OPEN
        : p.frR.ERROR;
}
function K(e, t, n) {
    switch (e) {
        case p.frR.ERROR:
            return E.intl.formatToMarkdownString(E.t.JUvC0s, {});
        case p.frR.SUCCESS:
            return t.isSubscription
                ? E.intl.formatToPlainString(E.t["1C2BG/"], { skuName: n.name })
                : E.intl.string(E.t["+BNMcF"]);
        case p.frR.CONFIRM:
        default:
            return t.isSubscription
                ? E.intl.formatToPlainString(E.t["2VN4N9"], { skuName: n.name })
                : E.intl.string(E.t.RmamAI);
    }
}
function $(e, t, n) {
    let { isCustomGift: r } = n;
    switch (e) {
        case p.frR.ERROR:
            return E.intl.string(E.t.w19zb6);
        case p.frR.SUCCESS:
            if (__OVERLAY__) return E.intl.string(E.t.zW87EM);
            if (t.isSubscription) return E.intl.string(E.t.ex5TKr);
            return E.intl.string(E.t.OOkjql);
        case p.frR.OPEN:
            return E.intl.string(E.t.F8ktci);
        case p.frR.CONFIRM:
        default:
            if (null != r && r) return E.intl.string(E.t.n6I6k4);
            if (null != t.giftStyle) return t.isClaimed ? E.intl.string(E.t.OgpR0c) : E.intl.string(E.t["2BWscv"]);
            return t.isSubscription ? E.intl.string(E.t.wQ1FHy) : E.intl.string(E.t.OgpR0c);
    }
}
function z(e) {
    return (0, r.YW)(e)
        .with({ interval: g.WT.MONTH, premiumSubscriptionType: g.PremiumTypes.TIER_2 }, () =>
            E.intl.formatToPlainString(E.t["vFfV+J"], { timeInterval: E.intl.string(E.t.FPybU7) }),
        )
        .with({ interval: g.WT.YEAR, premiumSubscriptionType: g.PremiumTypes.TIER_2 }, () =>
            E.intl.formatToPlainString(E.t["vFfV+J"], { timeInterval: E.intl.string(E.t.tfqrhj) }),
        )
        .with({ interval: g.WT.MONTH, premiumSubscriptionType: g.PremiumTypes.TIER_1 }, () =>
            E.intl.formatToPlainString(E.t.gjKbF4, { intervalCount: e.intervalCount }),
        )
        .with({ interval: g.WT.YEAR, premiumSubscriptionType: g.PremiumTypes.TIER_1 }, () =>
            E.intl.formatToPlainString(E.t.GIe7Bw, { intervalCount: e.intervalCount }),
        )
        .otherwise(() => E.intl.string(E.t["5ayf7w"]));
}
function q(e) {
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
        case p.frR.ERROR:
            return X(r, i, a, s, o);
        case p.frR.SUCCESS:
            if (null != l) return z(l);
            return E.intl.formatToPlainString(E.t["3CPsbo"], { skuName: n.name });
        case p.frR.CONFIRM:
        default:
            if (null != l) {
                let e = l.interval === g.WT.MONTH ? E.t.P9eTKt : E.t.d8rUdy;
                return E.intl.format(e, { skuName: n.name, intervalCount: l.intervalCount });
            }
            return E.intl.formatToPlainString(E.t.l6Ea4Z, { skuName: n.name });
    }
}
function X(e, t, n, r, i) {
    let a = n || r ? void 0 : e,
        s = E.intl.format(E.t["5zyz9y"], { onGoToLibrary: i });
    return null != a ? s : null == t ? null : ee(t, u.default.getCurrentUser());
}
function Z(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        a = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(d.Vq);
    return a.length === i.length ? a[0] : null;
}
function Q(e) {
    let t = e.trim().split("/").pop().match(w);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(RegExp(x, "g"), "");
}
let J = (e, t) =>
    (0, a.bG)([l.A], () => {
        if (null == e || !t) return null;
        let n = l.A.getGiftCode(e);
        return null == n || "" === n ? null : n;
    });
function ee(e, t) {
    switch (e.code) {
        case p.t02.INVALID_GIFT_SELF_REDEMPTION:
            return E.intl.string(E.t.wa9h7F);
        case p.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return E.intl.string(E.t.Iw2TUW);
        case p.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return E.intl.string(E.t.mdLtb5);
        case p.t02.UNKNOWN_GIFT_CODE:
            return E.intl.string(E.t.roztIr);
        case p.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return E.intl.formatToPlainString(E.t["4YTHKw"], {
                planName: (0, _.YE)(t, g.PremiumTypes.TIER_2) ? E.intl.string(E.t.lG6a5x) : E.intl.string(E.t.FSOz78),
            });
        case p.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return E.intl.string(E.t["9i1J30"]);
        case p.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return E.intl.string(E.t["U26WX+"]);
        case p.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return E.intl.string(E.t.ypuSd8);
        case p.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return E.intl.string(E.t.mXMmWE);
        default:
            return E.intl.string(E.t["s9+XlB"]);
    }
}
