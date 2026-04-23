n.d(t, {
    AK: () => G,
    GM: () => D,
    Ik: () => O,
    Kx: () => P,
    UJ: () => B,
    Vd: () => H,
    Vt: () => K,
    X6: () => b,
    YI: () => V,
    Zq: () => U,
    e7: () => v,
    eN: () => W,
    e_: () => F,
    lo: () => L,
    n$: () => w,
    pF: () => x,
    tB: () => R,
    u1: () => k,
    v3: () => j,
}),
    n(801541);
var r,
    a = n(889137),
    i = n(607399),
    o = n(17928),
    l = n(178253),
    s = n(491509),
    d = n(419212),
    u = n(287809),
    c = n(954571),
    _ = n(403362),
    p = n(927578),
    C = n(257120),
    h = n(371794),
    E = n(652215),
    m = n(788868),
    A = n(985018);
let I = [
        C.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
        ...["discordapp.com/gifts", "discord.com/gifts"].map((e) => C.A.escape(e)),
    ].join("|"),
    T = RegExp(`(?: |^|https?://)(?:${I})/([a-z0-9-]+)`, "gi"),
    y = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => C.A.escape(e))].join("|"),
    g = RegExp(`(?: |^|https?://)(?:${y})(/|(/)?\\?code=)([a-z0-9-]+)`, "gi"),
    S = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => `[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{${e}}`)
            .join("-?"),
    N = [S(4, 4), S(4, 6), S(5, 3), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    f = RegExp(`^(WUMP-?)?(${N})$`);
var R =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
    (r[(r.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
    r);
let L = (e, t) => (i.Fr || i.v1 ? 0 : null != e || t ? 2 : 1),
    O = (e) => 0 !== L(e);
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return `${e}:${t ?? ""}:${n ?? ""}`;
}
function b(e) {
    let [t, n, r] = e.split(":");
    return {
        skuId: t,
        subscriptionPlanId: "" === n ? null : n,
        giftStyle: "" !== r && null != r ? Number.parseInt(r) : void 0,
    };
}
function M(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
let x = (e) => e?.type === E.lAJ.CUSTOM_GIFT && e?.embeds?.length === 1 && e?.embeds[0].type === E.Auw.GIFT,
    v = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = T.exec(e)) && n.size < 3; ) n.add(M(t[1]));
        for (; null != (t = g.exec(e)) && n.size < 3; ) n.add(M(t[t.length - 1]));
        return Array.from(n);
    };
function U() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = `/${t}`) : ((n = location.host), (e = `/gifts/${t}`)), `${location.protocol}//${n}${e}`;
}
async function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (
            await (0, h.aP)({
                url: E.Rsh.GIFT_CODE_RESOLVE(e),
                query: { with_application: t, with_subscription_plan: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        return (
            c.default.track(
                E.HAw.GIFT_CODE_RESOLVED,
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
        throw (c.default.track(E.HAw.GIFT_CODE_RESOLVED, { resolved: !1, gift_code: e }), new l.A(t));
    }
}
function G(e, t) {
    c.default.track(E.HAw.GIFT_CODE_COPIED, { ...(0, s.A)(t, !1, !1), ...e.analyticsData });
}
function j(e, t, n) {
    let { error: r, accepted: a, accepting: i, opened: o, isCustomGift: l } = n;
    return null == r && (a || i || null == e)
        ? !l || o || a || i
            ? a && (t.isSubscription || null != e)
                ? E.frR.SUCCESS
                : E.frR.CONFIRM
            : E.frR.OPEN
        : E.frR.ERROR;
}
function w(e, t, n) {
    switch (e) {
        case E.frR.ERROR:
            return A.intl.formatToMarkdownString(A.t.JUvC0s, {});
        case E.frR.SUCCESS:
            return t.isSubscription
                ? A.intl.formatToPlainString(A.t["1C2BG/"], { skuName: n.name })
                : A.intl.string(A.t["+BNMcF"]);
        case E.frR.CONFIRM:
        default:
            return t.isSubscription
                ? A.intl.formatToPlainString(A.t["2VN4N9"], { skuName: n.name })
                : A.intl.string(A.t.RmamAI);
    }
}
function B(e, t, n) {
    let { isCustomGift: r } = n;
    switch (e) {
        case E.frR.ERROR:
            return A.intl.string(A.t.w19zb6);
        case E.frR.SUCCESS:
            if (__OVERLAY__) return A.intl.string(A.t.zW87EM);
            if (t.isSubscription) return A.intl.string(A.t.ex5TKr);
            return A.intl.string(A.t.OOkjql);
        case E.frR.OPEN:
            return A.intl.string(A.t.F8ktci);
        case E.frR.CONFIRM:
        default:
            if (null != r && r) return A.intl.string(A.t.n6I6k4);
            if (null != t.giftStyle) return t.isClaimed ? A.intl.string(A.t.OgpR0c) : A.intl.string(A.t["2BWscv"]);
            return t.isSubscription ? A.intl.string(A.t.wQ1FHy) : A.intl.string(A.t.OgpR0c);
    }
}
function F(e) {
    let {
        step: t,
        sku: n,
        libraryApplication: r,
        error: i,
        accepted: o,
        accepting: l,
        onGoToLibrary: s,
        subscriptionPlan: d = null,
    } = e;
    switch (t) {
        case E.frR.ERROR:
            return k(r, i, o, l, s);
        case E.frR.SUCCESS:
            if (null != d)
                return (0, a.YW)(d)
                    .with({ interval: m.WT.MONTH, premiumSubscriptionType: m.PremiumTypes.TIER_2 }, () =>
                        A.intl.formatToPlainString(A.t["vFfV+J"], { timeInterval: A.intl.string(A.t.FPybU7) }),
                    )
                    .with({ interval: m.WT.YEAR, premiumSubscriptionType: m.PremiumTypes.TIER_2 }, () =>
                        A.intl.formatToPlainString(A.t["vFfV+J"], { timeInterval: A.intl.string(A.t.tfqrhj) }),
                    )
                    .with({ interval: m.WT.MONTH, premiumSubscriptionType: m.PremiumTypes.TIER_1 }, () =>
                        A.intl.formatToPlainString(A.t.gjKbF4, { intervalCount: d.intervalCount }),
                    )
                    .with({ interval: m.WT.YEAR, premiumSubscriptionType: m.PremiumTypes.TIER_1 }, () =>
                        A.intl.formatToPlainString(A.t.GIe7Bw, { intervalCount: d.intervalCount }),
                    )
                    .otherwise(() => A.intl.string(A.t["5ayf7w"]));
            return A.intl.formatToPlainString(A.t["3CPsbo"], { skuName: n.name });
        case E.frR.CONFIRM:
        default:
            if (null != d) {
                let e = d.interval === m.WT.MONTH ? A.t.P9eTKt : A.t.d8rUdy;
                return A.intl.format(e, { skuName: n.name, intervalCount: d.intervalCount });
            }
            return A.intl.formatToPlainString(A.t.l6Ea4Z, { skuName: n.name });
    }
}
function k(e, t, n, r, a) {
    let i = A.intl.format(A.t["5zyz9y"], { onGoToLibrary: a });
    return null != (n || r ? void 0 : e) ? i : null == t ? null : W(t, u.default.getCurrentUser());
}
function V(e, t, n) {
    let r = t.applicationId,
        a = e.length > 0 ? e : [r],
        i = a.map((e) => n.getLibraryApplication(r, e, !0)).filter(_.Vq);
    return i.length === a.length ? i[0] : null;
}
function H(e) {
    let t = e.trim().split("/").pop().match(f);
    if (null == t) return null;
    let [n, r, a] = t;
    return null == a ? null : a.replace(/-/g, "");
}
let K = (e, t) =>
    (0, o.bG)([d.A], () => {
        if (null == e || !t) return null;
        let n = d.A.getGiftCode(e);
        return null == n || "" === n ? null : n;
    });
function W(e, t) {
    switch (e.code) {
        case E.t02.INVALID_GIFT_SELF_REDEMPTION:
            return A.intl.string(A.t.wa9h7F);
        case E.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return A.intl.string(A.t.Iw2TUW);
        case E.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return A.intl.string(A.t.mdLtb5);
        case E.t02.UNKNOWN_GIFT_CODE:
            return A.intl.string(A.t.roztIr);
        case E.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return A.intl.formatToPlainString(A.t["4YTHKw"], {
                planName: (0, p.YE)(t, m.PremiumTypes.TIER_2) ? A.intl.string(A.t.lG6a5x) : A.intl.string(A.t.FSOz78),
            });
        case E.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return A.intl.string(A.t["9i1J30"]);
        case E.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return A.intl.string(A.t["U26WX+"]);
        case E.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return A.intl.string(A.t.ypuSd8);
        case E.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return A.intl.string(A.t.mXMmWE);
        default:
            return A.intl.string(A.t["s9+XlB"]);
    }
}
