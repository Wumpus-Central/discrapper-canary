n.d(t, {
    Bg: () => k,
    E5: () => J,
    Fp: () => B,
    JT: () => X,
    L2: () => W,
    MY: () => P,
    Nz: () => F,
    Q_: () => Z,
    TO: () => H,
    Z0: () => U,
    bT: () => V,
    dM: () => j,
    dQ: () => Y,
    e$: () => q,
    iM: () => z,
    pO: () => M,
    xr: () => w,
    z2: () => Q
}),
    n(47120),
    n(757143),
    n(627341);
var i = n(278074),
    r = n(873546),
    a = n(442837),
    s = n(34756),
    o = n(100159),
    l = n(912788),
    u = n(594174),
    c = n(626135),
    d = n(823379),
    f = n(74538),
    _ = n(226951),
    p = n(73346),
    h = n(981631),
    m = n(474936),
    g = n(388032);
let E = ['discordapp.com/gifts', 'discord.com/gifts'],
    v = 3,
    y = [_.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...E.map((e) => _.Z.escape(e))].join('|'),
    I = RegExp('(?: |^|https?://)(?:'.concat(y, ')/([a-z0-9-]+)'), 'gi'),
    T = [...['discord.com/billing/promotions', 'promos.discord.gg'].map((e) => _.Z.escape(e))].join('|'),
    b = RegExp('(?: |^|https?://)(?:'.concat(T, ')(/|(/)?\\?code=)([a-z0-9-]+)'), 'gi'),
    S = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789',
    A = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => '['.concat(S, ']{').concat(e, '}'))
            .join('-?'),
    N = A(4, 4),
    C = A(4, 6),
    R = A(5, 3),
    O = 'WUMP-?',
    D = [N, C, R, '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}'].join('|'),
    L = new RegExp('^('.concat(O, ')?(').concat(D, ')$')),
    x = '-';
var w = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.CUSTOM_STYLE = 1)] = 'CUSTOM_STYLE'), (e[(e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD'), e;
})({});
let P = (e, t) => (r.tq || r.Em ? 0 : null != e || t ? 2 : 1),
    M = (e) => 0 !== P(e);
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(e, ':')
        .concat(null != t ? t : '', ':')
        .concat(null != n ? n : '');
}
function U(e) {
    let [t, n, i] = e.split(':');
    return {
        skuId: t,
        subscriptionPlanId: '' === n ? null : n,
        giftStyle: '' !== i && null != i ? Number.parseInt(i) : void 0
    };
}
function G(e) {
    return e.replace(/[^A-Za-z0-9]/g, '');
}
let B = (e) => (null == e ? void 0 : e.type) === h.uaV.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === h.hBH.GIFT,
    Z = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = I.exec(e)) && n.size < v; ) n.add(G(t[1]));
        for (; null != (t = b.exec(e)) && n.size < v; ) n.add(G(t[t.length - 1]));
        return Array.from(n);
    };
function F() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = '/'.concat(t)) : ((n = location.host), (e = '/gifts/'.concat(t))), ''.concat(location.protocol, '//').concat(n).concat(e);
}
async function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let i = (
            await (0, p.Kb)({
                url: h.ANM.GIFT_CODE_RESOLVE(e),
                query: {
                    with_application: t,
                    with_subscription_plan: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body;
        return (
            c.default.track(
                h.rMx.GIFT_CODE_RESOLVED,
                {
                    resolved: !0,
                    gift_code: i.code,
                    gift_code_max_uses: i.max_uses,
                    sku_id: i.store_listing.sku.id,
                    sku_type: i.store_listing.sku.type,
                    application_id: i.store_listing.sku.application_id,
                    store_title: i.store_listing.sku.name
                },
                { flush: !0 }
            ),
            i
        );
    } catch (t) {
        throw (
            (c.default.track(h.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }),
            new s.Z(t))
        );
    }
}
function j(e, t) {
    c.default.track(h.rMx.GIFT_CODE_COPIED, {
        ...(0, o.Z)(t, !1, !1),
        ...e.analyticsData
    });
}
function H(e, t, n, i, r, a, s) {
    return null == n && (i || r || null == e) ? (!s || a || i || r ? (i && (t.isSubscription || null != e) ? h.wZ8.SUCCESS : h.wZ8.CONFIRM) : h.wZ8.OPEN) : h.wZ8.ERROR;
}
function Y(e, t, n) {
    switch (e) {
        case h.wZ8.ERROR:
            return g.intl.formatToMarkdownString(g.t.JUvC0t, {});
        case h.wZ8.SUCCESS:
            return t.isSubscription ? g.intl.formatToPlainString(g.t['1C2BGx'], { skuName: n.name }) : g.intl.string(g.t['+BNMcH']);
        case h.wZ8.CONFIRM:
        default:
            return t.isSubscription ? g.intl.formatToPlainString(g.t['2VN4Nz'], { skuName: n.name }) : g.intl.string(g.t.RmamAA);
    }
}
function W(e, t, n) {
    switch (e) {
        case h.wZ8.ERROR:
            return g.intl.string(g.t.w19zb2);
        case h.wZ8.SUCCESS:
            if (__OVERLAY__) return g.intl.string(g.t.zW87EB);
            if (t.isSubscription) return g.intl.string(g.t.ex5TKi);
            return g.intl.string(g.t.OOkjqq);
        case h.wZ8.OPEN:
            return g.intl.string(g.t.F8ktcn);
        case h.wZ8.CONFIRM:
        default:
            if (null != n && n) return g.intl.string(g.t.n6I6k5);
            if (null != t.giftStyle) return t.isClaimed ? g.intl.string(g.t.OgpR0d) : g.intl.string(g.t['2BWscn']);
            return t.isSubscription ? g.intl.string(g.t.wQ1FHx) : g.intl.string(g.t.OgpR0d);
    }
}
function K(e) {
    return (0, i.EQ)(e)
        .with(
            {
                interval: m.rV.MONTH,
                premiumSubscriptionType: m.p9.TIER_2
            },
            () => g.intl.formatToPlainString(g.t['vFfV+P'], { timeInterval: g.intl.string(g.t.FPybU1) })
        )
        .with(
            {
                interval: m.rV.YEAR,
                premiumSubscriptionType: m.p9.TIER_2
            },
            () => g.intl.formatToPlainString(g.t['vFfV+P'], { timeInterval: g.intl.string(g.t.tfqrho) })
        )
        .with(
            {
                interval: m.rV.MONTH,
                premiumSubscriptionType: m.p9.TIER_1
            },
            () => g.intl.formatToPlainString(g.t.gjKbFx, { intervalCount: e.intervalCount })
        )
        .with(
            {
                interval: m.rV.YEAR,
                premiumSubscriptionType: m.p9.TIER_1
            },
            () => g.intl.formatToPlainString(g.t.GIe7Bw, { intervalCount: e.intervalCount })
        )
        .otherwise(() => g.intl.string(g.t['5ayf7+']));
}
function z(e) {
    let { step: t, sku: n, libraryApplication: i, error: r, accepted: a, accepting: s, onGoToLibrary: o, subscriptionPlan: l = null } = e;
    switch (t) {
        case h.wZ8.ERROR:
            return q(i, r, a, s, o);
        case h.wZ8.SUCCESS:
            if (null != l) return K(l);
            return g.intl.formatToPlainString(g.t['3CPsbm'], { skuName: n.name });
        case h.wZ8.CONFIRM:
        default:
            if (null != l) {
                let e = l.interval === m.rV.MONTH ? g.t.P9eTKi : g.t.d8rUd3;
                return g.intl.format(e, {
                    skuName: n.name,
                    intervalCount: l.intervalCount
                });
            }
            return g.intl.formatToPlainString(g.t.l6Ea4e, { skuName: n.name });
    }
}
function q(e, t, n, i, r) {
    let a = n || i ? void 0 : e,
        s = g.intl.format(g.t['5zyz9/'], { onGoToLibrary: r });
    return null != a ? s : null == t ? null : $(t, u.default.getCurrentUser());
}
function Q(e, t, n) {
    let i = t.applicationId,
        r = e.length > 0 ? e : [i],
        a = r.map((e) => n.getLibraryApplication(i, e, !0)).filter(d.lm);
    return a.length === r.length ? a[0] : null;
}
function X(e) {
    let t = e.trim().split('/').pop().match(L);
    if (null == t) return null;
    let [n, i, r] = t;
    return null == r ? null : r.replace(RegExp(x, 'g'), '');
}
let J = (e, t) =>
    (0, a.e7)([l.Z], () => {
        if (null == e || !t) return null;
        let n = l.Z.getGiftCode(e);
        return null == n || '' === n ? null : n;
    });
function $(e, t) {
    switch (e.code) {
        case h.evJ.INVALID_GIFT_SELF_REDEMPTION:
            return g.intl.string(g.t.wa9h7O);
        case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return g.intl.string(g.t.Iw2TUV);
        case h.evJ.INVALID_GIFT_REDEMPTION_OWNED:
            return g.intl.string(g.t.mdLtb2);
        case h.evJ.UNKNOWN_GIFT_CODE:
            return g.intl.string(g.t.roztIi);
        case h.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return g.intl.formatToPlainString(g.t['4YTHKy'], { planName: (0, f.M5)(t, m.p9.TIER_2) ? g.intl.string(g.t['lG6a5+']) : g.intl.string(g.t['FSOz7+']) });
        case h.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return g.intl.string(g.t['9i1J39']);
        case h.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return g.intl.string(g.t.U26WX1);
        case h.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return g.intl.string(g.t.ypuSd3);
        case h.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return g.intl.string(g.t.mXMmWF);
        default:
            return g.intl.string(g.t['s9+XlJ']);
    }
}
