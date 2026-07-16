"use strict";
n.d(t, {
    AK: () => G,
    GM: () => w,
    Ik: () => y,
    Kx: () => D,
    UJ: () => F,
    Vd: () => j,
    Vt: () => W,
    X6: () => v,
    YI: () => H,
    Zq: () => U,
    e7: () => P,
    eN: () => Y,
    e_: () => V,
    lo: () => L,
    n$: () => k,
    pF: () => M,
    tB: () => O,
    u1: () => B,
    v3: () => x,
}),
    n(801541);
var i,
    r = n(889137),
    a = n(607399),
    s = n(17928),
    l = n(178253),
    o = n(491509),
    d = n(419212),
    c = n(287809),
    u = n(174459),
    _ = n(403362),
    E = n(428262),
    A = n(257120),
    h = n(371794),
    I = n(652215),
    f = n(202541),
    p = n(375708);
let T = [
        A.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
        ...["discordapp.com/gifts", "discord.com/gifts"].map((e) => A.A.escape(e)),
    ].join("|"),
    m = RegExp(`(?: |^|https?://)(?:${T})/([a-z0-9-]+)`, "gi"),
    g = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => A.A.escape(e))].join("|"),
    S = RegExp(`(?: |^|https?://)(?:${g})(/|(/)?\\?code=)([a-z0-9-]+)`, "gi");
function N(e, t) {
    return Array(t)
        .fill(void 0)
        .map(() => `[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{${e}}`)
        .join("-?");
}
let C = [N(4, 4), N(4, 6), N(5, 3), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    R = RegExp(`^(WUMP-?)?(${C})$`);
var O =
    (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
    (i[(i.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
    i);
function L(e, t) {
    return a.Fr || a.v1 ? 0 : null != e || t ? 2 : 1;
}
function y(e) {
    return 0 !== L(e);
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return `${e}:${t ?? ""}:${n ?? ""}`;
}
function v(e) {
    let [t, n, i] = e.split(":");
    return {
        skuId: t,
        subscriptionPlanId: "" === n ? null : n,
        giftStyle: "" !== i && null != i ? Number.parseInt(i) : void 0,
    };
}
function b(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
function M(e) {
    return e?.type === I.lAJ.CUSTOM_GIFT && e?.embeds?.length === 1 && e?.embeds[0].type === I.Auw.GIFT;
}
function P(e) {
    let t;
    if (null == e) return [];
    let n = new Set();
    for (; null != (t = m.exec(e)) && n.size < 3; ) n.add(b(t[1]));
    for (; null != (t = S.exec(e)) && n.size < 3; ) n.add(b(t[t.length - 1]));
    return Array.from(n);
}
function U() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = `/${t}`) : ((n = location.host), (e = `/gifts/${t}`)), `${location.protocol}//${n}${e}`;
}
async function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let i = (
            await (0, h.aP)({
                url: I.Rsh.GIFT_CODE_RESOLVE(e),
                query: { with_application: t, with_subscription_plan: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        return (
            u.default.track(
                I.HAw.GIFT_CODE_RESOLVED,
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
        throw (u.default.track(I.HAw.GIFT_CODE_RESOLVED, { resolved: !1, gift_code: e }), new l.A(t));
    }
}
function G(e, t) {
    u.default.track(I.HAw.GIFT_CODE_COPIED, { ...(0, o.A)(t, !1, !1), ...e.analyticsData });
}
function x(e, t, n) {
    let { error: i, accepted: r, accepting: a, opened: s, isCustomGift: l } = n;
    return null == i && (r || a || null == e)
        ? !l || s || r || a
            ? r && (t.isSubscription || null != e)
                ? I.frR.SUCCESS
                : I.frR.CONFIRM
            : I.frR.OPEN
        : I.frR.ERROR;
}
function k(e, t, n) {
    switch (e) {
        case I.frR.ERROR:
            return p.intl.formatToMarkdownString(p.t.JUvC0s, {});
        case I.frR.SUCCESS:
            return t.isSubscription
                ? p.intl.formatToPlainString(p.t["1C2BG/"], { skuName: n.name })
                : p.intl.string(p.t["+BNMcF"]);
        case I.frR.CONFIRM:
        default:
            return t.isSubscription
                ? p.intl.formatToPlainString(p.t["2VN4N9"], { skuName: n.name })
                : p.intl.string(p.t.RmamAI);
    }
}
function F(e, t, n) {
    let { isCustomGift: i } = n;
    switch (e) {
        case I.frR.ERROR:
            return p.intl.string(p.t.w19zb6);
        case I.frR.SUCCESS:
            if (__OVERLAY__) return p.intl.string(p.t.zW87EM);
            if (t.isSubscription) return p.intl.string(p.t.ex5TKr);
            return p.intl.string(p.t.OOkjql);
        case I.frR.OPEN:
            return p.intl.string(p.t.F8ktci);
        case I.frR.CONFIRM:
        default:
            if (null != i && i) return p.intl.string(p.t.n6I6k4);
            if (null != t.giftStyle) return t.isClaimed ? p.intl.string(p.t.OgpR0c) : p.intl.string(p.t["2BWscv"]);
            return t.isSubscription ? p.intl.string(p.t.wQ1FHy) : p.intl.string(p.t.OgpR0c);
    }
}
function V(e) {
    let {
        step: t,
        sku: n,
        libraryApplication: i,
        error: a,
        accepted: s,
        accepting: l,
        onGoToLibrary: o,
        subscriptionPlan: d = null,
    } = e;
    switch (t) {
        case I.frR.ERROR:
            return B(i, a, s, l, o);
        case I.frR.SUCCESS:
            if (null != d)
                return (0, r.YW)(d)
                    .with({ interval: f.WT.MONTH, premiumSubscriptionType: f.PremiumTypes.TIER_2 }, () =>
                        p.intl.formatToPlainString(p.t["vFfV+J"], { timeInterval: p.intl.string(p.t.FPybU7) }),
                    )
                    .with({ interval: f.WT.YEAR, premiumSubscriptionType: f.PremiumTypes.TIER_2 }, () =>
                        p.intl.formatToPlainString(p.t["vFfV+J"], { timeInterval: p.intl.string(p.t.tfqrhj) }),
                    )
                    .with({ interval: f.WT.MONTH, premiumSubscriptionType: f.PremiumTypes.TIER_1 }, () =>
                        p.intl.formatToPlainString(p.t.gjKbF4, { intervalCount: d.intervalCount }),
                    )
                    .with({ interval: f.WT.YEAR, premiumSubscriptionType: f.PremiumTypes.TIER_1 }, () =>
                        p.intl.formatToPlainString(p.t.GIe7Bw, { intervalCount: d.intervalCount }),
                    )
                    .otherwise(() => p.intl.string(p.t["5ayf7w"]));
            return p.intl.formatToPlainString(p.t["3CPsbo"], { skuName: n.name });
        case I.frR.CONFIRM:
        default:
            if (null != d) {
                let e = d.interval === f.WT.MONTH ? p.t.P9eTKt : p.t.d8rUdy;
                return p.intl.format(e, { skuName: n.name, intervalCount: d.intervalCount });
            }
            return p.intl.formatToPlainString(p.t.l6Ea4Z, { skuName: n.name });
    }
}
function B(e, t, n, i, r) {
    let a = p.intl.format(p.t["5zyz9y"], { onGoToLibrary: r });
    return null != (n || i ? void 0 : e) ? a : null == t ? null : Y(t, c.default.getCurrentUser());
}
function H(e, t, n) {
    let i = t.applicationId,
        r = e.length > 0 ? e : [i],
        a = r.map((e) => n.getLibraryApplication(i, e, !0)).filter(_.Vq);
    return a.length === r.length ? a[0] : null;
}
function j(e) {
    let t = e.trim().split("/").pop().match(R);
    if (null == t) return null;
    let [n, i, r] = t;
    return null == r ? null : r.replace(/-/g, "");
}
function W(e, t) {
    return (0, s.bG)([d.A], () => {
        if (null == e || !t) return null;
        let n = d.A.getGiftCode(e);
        return null == n || "" === n ? null : n;
    });
}
function Y(e, t) {
    switch (e.code) {
        case I.t02.INVALID_GIFT_SELF_REDEMPTION:
            return p.intl.string(p.t.wa9h7F);
        case I.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return p.intl.string(p.t.Iw2TUW);
        case I.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return p.intl.string(p.t.mdLtb5);
        case I.t02.UNKNOWN_GIFT_CODE:
            return p.intl.string(p.t.roztIr);
        case I.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return p.intl.formatToPlainString(p.t["4YTHKw"], {
                planName: (0, E.YE)(t, f.PremiumTypes.TIER_2) ? p.intl.string(p.t.lG6a5x) : p.intl.string(p.t.FSOz78),
            });
        case I.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return p.intl.string(p.t["9i1J30"]);
        case I.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return p.intl.string(p.t["U26WX+"]);
        case I.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return p.intl.string(p.t.ypuSd8);
        case I.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return p.intl.string(p.t.mXMmWE);
        default:
            return p.intl.string(p.t["s9+XlB"]);
    }
}
