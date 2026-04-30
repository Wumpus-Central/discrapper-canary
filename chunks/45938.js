n.d(t, {
    AK: () => v,
    GM: () => w,
    Ik: () => M,
    Kx: () => f,
    UJ: () => B,
    Vd: () => W,
    Vt: () => Y,
    X6: () => L,
    YI: () => V,
    Zq: () => b,
    e7: () => G,
    eN: () => j,
    e_: () => K,
    lo: () => P,
    n$: () => H,
    pF: () => D,
    tB: () => O,
    u1: () => k,
    v3: () => F,
}),
    n(801541);
var o,
    r = n(889137),
    a = n(607399),
    i = n(17928),
    l = n(178253),
    u = n(491509),
    s = n(419212),
    _ = n(287809),
    d = n(954571),
    C = n(403362),
    E = n(927578),
    p = n(257120),
    h = n(371794),
    c = n(652215),
    A = n(788868),
    y = n(985018);
let I = [
        p.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
        ...["discordapp.com/gifts", "discord.com/gifts"].map((e) => p.A.escape(e)),
    ].join("|"),
    m = RegExp(`(?: |^|https?://)(?:${I})/([a-z0-9-]+)`, "gi"),
    T = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => p.A.escape(e))].join("|"),
    S = RegExp(`(?: |^|https?://)(?:${T})(/|(/)?\\?code=)([a-z0-9-]+)`, "gi"),
    R = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => `[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{${e}}`)
            .join("-?"),
    N = [R(4, 4), R(4, 6), R(5, 3), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    g = RegExp(`^(WUMP-?)?(${N})$`);
var O =
    (((o = {})[(o.DEFAULT = 0)] = "DEFAULT"),
    (o[(o.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
    (o[(o.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
    o);
let P = (e, t) => (a.Fr || a.v1 ? 0 : null != e || t ? 2 : 1),
    M = (e) => 0 !== P(e);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return `${e}:${t ?? ""}:${n ?? ""}`;
}
function L(e) {
    let [t, n, o] = e.split(":");
    return {
        skuId: t,
        subscriptionPlanId: "" === n ? null : n,
        giftStyle: "" !== o && null != o ? Number.parseInt(o) : void 0,
    };
}
function U(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
let D = (e) => e?.type === c.lAJ.CUSTOM_GIFT && e?.embeds?.length === 1 && e?.embeds[0].type === c.Auw.GIFT,
    G = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = m.exec(e)) && n.size < 3; ) n.add(U(t[1]));
        for (; null != (t = S.exec(e)) && n.size < 3; ) n.add(U(t[t.length - 1]));
        return Array.from(n);
    };
function b() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = `/${t}`) : ((n = location.host), (e = `/gifts/${t}`)), `${location.protocol}//${n}${e}`;
}
async function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let o = (
            await (0, h.aP)({
                url: c.Rsh.GIFT_CODE_RESOLVE(e),
                query: { with_application: t, with_subscription_plan: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        return (
            d.default.track(
                c.HAw.GIFT_CODE_RESOLVED,
                {
                    resolved: !0,
                    gift_code: o.code,
                    gift_code_max_uses: o.max_uses,
                    sku_id: o.store_listing.sku.id,
                    sku_type: o.store_listing.sku.type,
                    application_id: o.store_listing.sku.application_id,
                    store_title: o.store_listing.sku.name,
                },
                { flush: !0 },
            ),
            o
        );
    } catch (t) {
        throw (d.default.track(c.HAw.GIFT_CODE_RESOLVED, { resolved: !1, gift_code: e }), new l.A(t));
    }
}
function v(e, t) {
    d.default.track(c.HAw.GIFT_CODE_COPIED, { ...(0, u.A)(t, !1, !1), ...e.analyticsData });
}
function F(e, t, n) {
    let { error: o, accepted: r, accepting: a, opened: i, isCustomGift: l } = n;
    return null == o && (r || a || null == e)
        ? !l || i || r || a
            ? r && (t.isSubscription || null != e)
                ? c.frR.SUCCESS
                : c.frR.CONFIRM
            : c.frR.OPEN
        : c.frR.ERROR;
}
function H(e, t, n) {
    switch (e) {
        case c.frR.ERROR:
            return y.intl.formatToMarkdownString(y.t.JUvC0s, {});
        case c.frR.SUCCESS:
            return t.isSubscription
                ? y.intl.formatToPlainString(y.t["1C2BG/"], { skuName: n.name })
                : y.intl.string(y.t["+BNMcF"]);
        case c.frR.CONFIRM:
        default:
            return t.isSubscription
                ? y.intl.formatToPlainString(y.t["2VN4N9"], { skuName: n.name })
                : y.intl.string(y.t.RmamAI);
    }
}
function B(e, t, n) {
    let { isCustomGift: o } = n;
    switch (e) {
        case c.frR.ERROR:
            return y.intl.string(y.t.w19zb6);
        case c.frR.SUCCESS:
            if (__OVERLAY__) return y.intl.string(y.t.zW87EM);
            if (t.isSubscription) return y.intl.string(y.t.ex5TKr);
            return y.intl.string(y.t.OOkjql);
        case c.frR.OPEN:
            return y.intl.string(y.t.F8ktci);
        case c.frR.CONFIRM:
        default:
            if (null != o && o) return y.intl.string(y.t.n6I6k4);
            if (null != t.giftStyle) return t.isClaimed ? y.intl.string(y.t.OgpR0c) : y.intl.string(y.t["2BWscv"]);
            return t.isSubscription ? y.intl.string(y.t.wQ1FHy) : y.intl.string(y.t.OgpR0c);
    }
}
function K(e) {
    let {
        step: t,
        sku: n,
        libraryApplication: o,
        error: a,
        accepted: i,
        accepting: l,
        onGoToLibrary: u,
        subscriptionPlan: s = null,
    } = e;
    switch (t) {
        case c.frR.ERROR:
            return k(o, a, i, l, u);
        case c.frR.SUCCESS:
            if (null != s)
                return (0, r.YW)(s)
                    .with({ interval: A.WT.MONTH, premiumSubscriptionType: A.PremiumTypes.TIER_2 }, () =>
                        y.intl.formatToPlainString(y.t["vFfV+J"], { timeInterval: y.intl.string(y.t.FPybU7) }),
                    )
                    .with({ interval: A.WT.YEAR, premiumSubscriptionType: A.PremiumTypes.TIER_2 }, () =>
                        y.intl.formatToPlainString(y.t["vFfV+J"], { timeInterval: y.intl.string(y.t.tfqrhj) }),
                    )
                    .with({ interval: A.WT.MONTH, premiumSubscriptionType: A.PremiumTypes.TIER_1 }, () =>
                        y.intl.formatToPlainString(y.t.gjKbF4, { intervalCount: s.intervalCount }),
                    )
                    .with({ interval: A.WT.YEAR, premiumSubscriptionType: A.PremiumTypes.TIER_1 }, () =>
                        y.intl.formatToPlainString(y.t.GIe7Bw, { intervalCount: s.intervalCount }),
                    )
                    .otherwise(() => y.intl.string(y.t["5ayf7w"]));
            return y.intl.formatToPlainString(y.t["3CPsbo"], { skuName: n.name });
        case c.frR.CONFIRM:
        default:
            if (null != s) {
                let e = s.interval === A.WT.MONTH ? y.t.P9eTKt : y.t.d8rUdy;
                return y.intl.format(e, { skuName: n.name, intervalCount: s.intervalCount });
            }
            return y.intl.formatToPlainString(y.t.l6Ea4Z, { skuName: n.name });
    }
}
function k(e, t, n, o, r) {
    let a = y.intl.format(y.t["5zyz9y"], { onGoToLibrary: r });
    return null != (n || o ? void 0 : e) ? a : null == t ? null : j(t, _.default.getCurrentUser());
}
function V(e, t, n) {
    let o = t.applicationId,
        r = e.length > 0 ? e : [o],
        a = r.map((e) => n.getLibraryApplication(o, e, !0)).filter(C.Vq);
    return a.length === r.length ? a[0] : null;
}
function W(e) {
    let t = e.trim().split("/").pop().match(g);
    if (null == t) return null;
    let [n, o, r] = t;
    return null == r ? null : r.replace(/-/g, "");
}
let Y = (e, t) =>
    (0, i.bG)([s.A], () => {
        if (null == e || !t) return null;
        let n = s.A.getGiftCode(e);
        return null == n || "" === n ? null : n;
    });
function j(e, t) {
    switch (e.code) {
        case c.t02.INVALID_GIFT_SELF_REDEMPTION:
            return y.intl.string(y.t.wa9h7F);
        case c.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return y.intl.string(y.t.Iw2TUW);
        case c.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return y.intl.string(y.t.mdLtb5);
        case c.t02.UNKNOWN_GIFT_CODE:
            return y.intl.string(y.t.roztIr);
        case c.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return y.intl.formatToPlainString(y.t["4YTHKw"], {
                planName: (0, E.YE)(t, A.PremiumTypes.TIER_2) ? y.intl.string(y.t.lG6a5x) : y.intl.string(y.t.FSOz78),
            });
        case c.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return y.intl.string(y.t["9i1J30"]);
        case c.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return y.intl.string(y.t["U26WX+"]);
        case c.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return y.intl.string(y.t.ypuSd8);
        case c.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return y.intl.string(y.t.mXMmWE);
        default:
            return y.intl.string(y.t["s9+XlB"]);
    }
}
