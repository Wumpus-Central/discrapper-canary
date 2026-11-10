n(801541);
var i,
    r = n(889137),
    a = n(607399),
    s = n(855986),
    l = n(178253),
    o = n(491509),
    d = n(419212),
    c = n(287809),
    u = n(129230),
    _ = n(403362),
    E = n(448645),
    A = n(257120),
    f = n(371794),
    h = n(652215),
    I = n(682901),
    p = n(792996);
let m = [
        A.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
        ...["discordapp.com/gifts", "discord.com/gifts"].map((e) => A.A.escape(e)),
    ].join("|"),
    T = RegExp(`(?: |^|https?://)(?:${m})/([a-z0-9-]+)`, "gi"),
    g = [...["discord.com/billing/promotions", "promos.discord.gg"].map((e) => A.A.escape(e))].join("|"),
    S = RegExp(`(?: |^|https?://)(?:${g})(/|(/)?\\?code=)([a-z0-9-]+)`, "gi");
function N(e, t) {
    return Array(t)
        .fill(void 0)
        .map(() => `[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{${e}}`)
        .join("-?");
}
let C = [N(4, 4), N(4, 6), N(5, 3), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    O = RegExp(`^(WUMP-?)?(${C})$`);
var R =
    (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
    (i[(i.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
    i);
function L(e, t) {
    return a.Fr || a.v1 ? 0 : null != e || t ? 2 : 1;
}
function y(e) {
    return e.replace(/[^A-Za-z0-9]/g, "");
}
function D(e, t, n, i, r) {
    let a = p.intl.format(p.t["5zyz9y"], { onGoToLibrary: r });
    return null != (n || i ? void 0 : e) ? a : null == t ? null : b(t, c.default.getCurrentUser());
}
function b(e, t) {
    switch (e.code) {
        case h.t02.INVALID_GIFT_SELF_REDEMPTION:
            return p.intl.string(p.t.wa9h7F);
        case h.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return p.intl.string(p.t.Iw2TUW);
        case h.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return p.intl.string(p.t.mdLtb5);
        case h.t02.UNKNOWN_GIFT_CODE:
            return p.intl.string(p.t.roztIr);
        case h.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return p.intl.formatToPlainString(p.t["4YTHKw"], {
                planName: (0, E.YE)(t, I.PremiumTypes.TIER_2) ? p.intl.string(p.t.lG6a5x) : p.intl.string(p.t.FSOz78),
            });
        case h.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return p.intl.string(p.t["9i1J30"]);
        case h.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return p.intl.string(p.t["U26WX+"]);
        case h.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return p.intl.string(p.t.ypuSd8);
        case h.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return p.intl.string(p.t.mXMmWE);
        default:
            return p.intl.string(p.t["s9+XlB"]);
    }
}
n.d(
    t,
    {},
    {
        AK: function (e, t) {
            u.default.track(h.HAw.GIFT_CODE_COPIED, { ...(0, o.A)(t, !1, !1), ...e.analyticsData });
        },
        GM: async function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            try {
                let i = (
                    await (0, f.aP)({
                        url: h.Rsh.GIFT_CODE_RESOLVE(e),
                        query: { with_application: t, with_subscription_plan: n },
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    })
                ).body;
                return (
                    u.default.track(
                        h.HAw.GIFT_CODE_RESOLVED,
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
                throw (u.default.track(h.HAw.GIFT_CODE_RESOLVED, { resolved: !1, gift_code: e }), new l.A(t));
            }
        },
        Ik: function (e) {
            return 0 !== L(e);
        },
        Kx: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 ? arguments[2] : void 0;
            return `${e}:${t ?? ""}:${n ?? ""}`;
        },
        UJ: function (e, t, n) {
            let { isCustomGift: i } = n;
            switch (e) {
                case h.frR.ERROR:
                    return p.intl.string(p.t.w19zb6);
                case h.frR.SUCCESS:
                    if (__OVERLAY__) return p.intl.string(p.t.zW87EM);
                    if (t.isSubscription) return p.intl.string(p.t.ex5TKr);
                    return p.intl.string(p.t.OOkjql);
                case h.frR.OPEN:
                    return p.intl.string(p.t.F8ktci);
                case h.frR.CONFIRM:
                default:
                    if (null != i && i) return p.intl.string(p.t.n6I6k4);
                    if (null != t.giftStyle)
                        return t.isClaimed ? p.intl.string(p.t.OgpR0c) : p.intl.string(p.t["2BWscv"]);
                    return t.isSubscription ? p.intl.string(p.t.wQ1FHy) : p.intl.string(p.t.OgpR0c);
            }
        },
        Vd: function (e) {
            let t = e.trim().split("/").pop(),
                n = t?.match(O);
            if (null == n) return null;
            let [i, r, a] = n;
            return null == a ? null : a.replace(/-/g, "");
        },
        Vt: function (e, t) {
            return (0, s.bG)([d.A], () => {
                if (null == e || !t) return null;
                let n = d.A.getGiftCode(e);
                return null == n || "" === n ? null : n;
            });
        },
        X6: function (e) {
            let [t, n, i] = e.split(":");
            return {
                skuId: t,
                subscriptionPlanId: "" === n ? null : n,
                giftStyle: "" !== i && null != i ? Number.parseInt(i) : void 0,
            };
        },
        YI: function (e, t, n) {
            let i = t.applicationId,
                r = e.length > 0 ? e : [i],
                a = r.map((e) => n.getLibraryApplication(i, e, !0)).filter(_.Vq);
            return a.length === r.length ? a[0] : null;
        },
        Zq: function () {
            let e,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = window.GLOBAL_ENV.GIFT_CODE_HOST;
            return (
                null != n ? (e = `/${t}`) : ((n = location.host), (e = `/gifts/${t}`)), `${location.protocol}//${n}${e}`
            );
        },
        e7: function (e) {
            let t;
            if (null == e) return [];
            let n = new Set();
            for (; null != (t = T.exec(e)) && n.size < 3;) n.add(y(t[1]));
            for (; null != (t = S.exec(e)) && n.size < 3;) n.add(y(t[t.length - 1]));
            return Array.from(n);
        },
        eN: b,
        e_: function (e) {
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
                case h.frR.ERROR:
                    return D(i, a, s, l, o);
                case h.frR.SUCCESS:
                    if (null != d)
                        return (0, r.YW)(d)
                            .with({ interval: I.WT.MONTH, premiumSubscriptionType: I.PremiumTypes.TIER_2 }, () =>
                                p.intl.formatToPlainString(p.t.O2bEOt, { intervalCount: d.intervalCount }),
                            )
                            .with({ interval: I.WT.YEAR, premiumSubscriptionType: I.PremiumTypes.TIER_2 }, () =>
                                p.intl.formatToPlainString(p.t["ZEvHF+"], { intervalCount: d.intervalCount }),
                            )
                            .with({ interval: I.WT.MONTH, premiumSubscriptionType: I.PremiumTypes.TIER_1 }, () =>
                                p.intl.formatToPlainString(p.t.gjKbF4, { intervalCount: d.intervalCount }),
                            )
                            .with({ interval: I.WT.YEAR, premiumSubscriptionType: I.PremiumTypes.TIER_1 }, () =>
                                p.intl.formatToPlainString(p.t.GIe7Bw, { intervalCount: d.intervalCount }),
                            )
                            .otherwise(() => p.intl.string(p.t["5ayf7w"]));
                    return p.intl.formatToPlainString(p.t["3CPsbo"], { skuName: n.name });
                case h.frR.CONFIRM:
                default:
                    if (null != d) {
                        let e = d.interval === I.WT.MONTH ? p.t.P9eTKt : p.t.d8rUdy;
                        return p.intl.format(e, { skuName: n.name, intervalCount: d.intervalCount });
                    }
                    return p.intl.formatToPlainString(p.t.l6Ea4Z, { skuName: n.name });
            }
        },
        lo: L,
        n$: function (e, t, n) {
            switch (e) {
                case h.frR.ERROR:
                    return p.intl.formatToMarkdownString(p.t.JUvC0s, {});
                case h.frR.SUCCESS:
                    return t.isSubscription
                        ? p.intl.formatToPlainString(p.t["1C2BG/"], { skuName: n.name })
                        : p.intl.string(p.t["+BNMcF"]);
                case h.frR.CONFIRM:
                default:
                    return t.isSubscription
                        ? p.intl.formatToPlainString(p.t["2VN4N9"], { skuName: n.name })
                        : p.intl.string(p.t.RmamAI);
            }
        },
        pF: function (e) {
            return e?.type === h.lAJ.CUSTOM_GIFT && e?.embeds?.length === 1 && e?.embeds[0].type === h.Auw.GIFT;
        },
        tB: R,
        u1: D,
        v3: function (e, t, n) {
            let { error: i, accepted: r, accepting: a, opened: s, isCustomGift: l } = n;
            return null == i && (r || a || null == e)
                ? !l || s || r || a
                    ? r && (t.isSubscription || null != e)
                        ? h.frR.SUCCESS
                        : h.frR.CONFIRM
                    : h.frR.OPEN
                : h.frR.ERROR;
        },
    },
);
