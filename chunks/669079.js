n.d(t, {
    Bg: () => G,
    E5: () => et,
    Fp: () => F,
    JT: () => ee,
    L2: () => q,
    MY: () => j,
    Nz: () => H,
    Q_: () => Z,
    TO: () => K,
    Z0: () => B,
    bT: () => Y,
    dM: () => W,
    dQ: () => z,
    e$: () => J,
    iM: () => Q,
    pO: () => U,
    xr: () => k,
    z2: () => $
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
    l = n(268445),
    c = n(912788),
    u = n(594174),
    d = n(626135),
    _ = n(823379),
    f = n(74538),
    p = n(226951),
    h = n(73346),
    m = n(981631),
    g = n(474936),
    E = n(388032);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = ['discordapp.com/gifts', 'discord.com/gifts'],
    v = 3,
    I = [p.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...O.map((e) => p.Z.escape(e))].join('|'),
    T = RegExp('(?: |^|https?://)(?:'.concat(I, ')/([a-z0-9-]+)'), 'gi'),
    S = [...['discord.com/billing/promotions', 'promos.discord.gg'].map((e) => p.Z.escape(e))].join('|'),
    A = RegExp('(?: |^|https?://)(?:'.concat(S, ')(/|(/)?\\?code=)([a-z0-9-]+)'), 'gi'),
    N = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789',
    C = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => '['.concat(N, ']{').concat(e, '}'))
            .join('-?'),
    R = C(4, 4),
    P = C(4, 6),
    w = C(5, 3),
    D = 'WUMP-?',
    L = [R, P, w, '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}'].join('|'),
    x = new RegExp('^('.concat(D, ')?(').concat(L, ')$')),
    M = '-';
var k = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.CUSTOM_STYLE = 1)] = 'CUSTOM_STYLE'), (e[(e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD'), e;
})({});
let j = (e, t) => (i.tq || i.Em ? 0 : null != e || t ? 2 : 1),
    U = (e) => 0 !== j(e);
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(e, ':')
        .concat(null != t ? t : '', ':')
        .concat(null != n ? n : '');
}
function B(e) {
    let [t, n, r] = e.split(':');
    return {
        skuId: t,
        subscriptionPlanId: '' === n ? null : n,
        giftStyle: '' !== r && null != r ? Number.parseInt(r) : void 0
    };
}
function V(e) {
    return e.replace(/[^A-Za-z0-9]/g, '');
}
let F = (e) => (null == e ? void 0 : e.type) === m.uaV.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === m.hBH.GIFT,
    Z = (e) => {
        let t;
        if (null == e || l.l.getCurrentConfig({ location: 'findGiftCodes' }).enabled) return [];
        let n = new Set();
        for (; null != (t = T.exec(e)) && n.size < v; ) n.add(V(t[1]));
        for (; null != (t = A.exec(e)) && n.size < v; ) n.add(V(t[t.length - 1]));
        return Array.from(n);
    };
function H() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = '/'.concat(t)) : ((n = location.host), (e = '/gifts/'.concat(t))), ''.concat(location.protocol, '//').concat(n).concat(e);
}
async function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (
            await (0, h.Kb)({
                url: m.ANM.GIFT_CODE_RESOLVE(e),
                query: {
                    with_application: t,
                    with_subscription_plan: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body;
        return (
            d.default.track(
                m.rMx.GIFT_CODE_RESOLVED,
                {
                    resolved: !0,
                    gift_code: r.code,
                    gift_code_max_uses: r.max_uses,
                    sku_id: r.store_listing.sku.id,
                    sku_type: r.store_listing.sku.type,
                    application_id: r.store_listing.sku.application_id,
                    store_title: r.store_listing.sku.name
                },
                { flush: !0 }
            ),
            r
        );
    } catch (t) {
        throw (
            (d.default.track(m.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }),
            new o.Z(t))
        );
    }
}
function W(e, t) {
    d.default.track(m.rMx.GIFT_CODE_COPIED, y({}, (0, s.Z)(t, !1, !1), e.analyticsData));
}
function K(e, t, n, r, i, a, o) {
    return null == n && (r || i || null == e) ? (!o || a || r || i ? (r && (t.isSubscription || null != e) ? m.wZ8.SUCCESS : m.wZ8.CONFIRM) : m.wZ8.OPEN) : m.wZ8.ERROR;
}
function z(e, t, n) {
    switch (e) {
        case m.wZ8.ERROR:
            return E.intl.formatToMarkdownString(E.t.JUvC0t, {});
        case m.wZ8.SUCCESS:
            return t.isSubscription ? E.intl.formatToPlainString(E.t['1C2BGx'], { skuName: n.name }) : E.intl.string(E.t['+BNMcH']);
        case m.wZ8.CONFIRM:
        default:
            return t.isSubscription ? E.intl.formatToPlainString(E.t['2VN4Nz'], { skuName: n.name }) : E.intl.string(E.t.RmamAA);
    }
}
function q(e, t, n) {
    switch (e) {
        case m.wZ8.ERROR:
            return E.intl.string(E.t.w19zb2);
        case m.wZ8.SUCCESS:
            if (__OVERLAY__) return E.intl.string(E.t.zW87EB);
            if (t.isSubscription) return E.intl.string(E.t.ex5TKi);
            return E.intl.string(E.t.OOkjqq);
        case m.wZ8.OPEN:
            return E.intl.string(E.t.F8ktcn);
        case m.wZ8.CONFIRM:
        default:
            if (null != n && n) return E.intl.string(E.t.n6I6k5);
            if (null != t.giftStyle) return t.isClaimed ? E.intl.string(E.t.OgpR0d) : E.intl.string(E.t['2BWscn']);
            return t.isSubscription ? E.intl.string(E.t.wQ1FHx) : E.intl.string(E.t.OgpR0d);
    }
}
function X(e) {
    return (0, r.EQ)(e)
        .with(
            {
                interval: g.rV.MONTH,
                premiumSubscriptionType: g.p9.TIER_2
            },
            () => E.intl.formatToPlainString(E.t['vFfV+P'], { timeInterval: E.intl.string(E.t.FPybU1) })
        )
        .with(
            {
                interval: g.rV.YEAR,
                premiumSubscriptionType: g.p9.TIER_2
            },
            () => E.intl.formatToPlainString(E.t['vFfV+P'], { timeInterval: E.intl.string(E.t.tfqrho) })
        )
        .with(
            {
                interval: g.rV.MONTH,
                premiumSubscriptionType: g.p9.TIER_1
            },
            () => E.intl.formatToPlainString(E.t.gjKbFx, { intervalCount: e.intervalCount })
        )
        .with(
            {
                interval: g.rV.YEAR,
                premiumSubscriptionType: g.p9.TIER_1
            },
            () => E.intl.formatToPlainString(E.t.GIe7Bw, { intervalCount: e.intervalCount })
        )
        .otherwise(() => E.intl.string(E.t['5ayf7+']));
}
function Q(e) {
    let { step: t, sku: n, libraryApplication: r, error: i, accepted: a, accepting: o, onGoToLibrary: s, subscriptionPlan: l = null } = e;
    switch (t) {
        case m.wZ8.ERROR:
            return J(r, i, a, o, s);
        case m.wZ8.SUCCESS:
            if (null != l) return X(l);
            return E.intl.formatToPlainString(E.t['3CPsbm'], { skuName: n.name });
        case m.wZ8.CONFIRM:
        default:
            if (null != l) {
                let e = l.interval === g.rV.MONTH ? E.t.P9eTKi : E.t.d8rUd3;
                return E.intl.format(e, {
                    skuName: n.name,
                    intervalCount: l.intervalCount
                });
            }
            return E.intl.formatToPlainString(E.t.l6Ea4e, { skuName: n.name });
    }
}
function J(e, t, n, r, i) {
    let a = n || r ? void 0 : e,
        o = E.intl.format(E.t['5zyz9/'], { onGoToLibrary: i });
    return null != a ? o : null == t ? null : en(t, u.default.getCurrentUser());
}
function $(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        a = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(_.lm);
    return a.length === i.length ? a[0] : null;
}
function ee(e) {
    let t = e.trim().split('/').pop().match(x);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(RegExp(M, 'g'), '');
}
let et = (e, t) =>
    (0, a.e7)([c.Z], () => {
        if (null == e || !t) return null;
        let n = c.Z.getGiftCode(e);
        return null == n || '' === n ? null : n;
    });
function en(e, t) {
    switch (e.code) {
        case m.evJ.INVALID_GIFT_SELF_REDEMPTION:
            return E.intl.string(E.t.wa9h7O);
        case m.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return E.intl.string(E.t.Iw2TUV);
        case m.evJ.INVALID_GIFT_REDEMPTION_OWNED:
            return E.intl.string(E.t.mdLtb2);
        case m.evJ.UNKNOWN_GIFT_CODE:
            return E.intl.string(E.t.roztIi);
        case m.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return E.intl.formatToPlainString(E.t['4YTHKy'], { planName: (0, f.M5)(t, g.p9.TIER_2) ? E.intl.string(E.t['lG6a5+']) : E.intl.string(E.t['FSOz7+']) });
        case m.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return E.intl.string(E.t['9i1J39']);
        case m.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return E.intl.string(E.t.U26WX1);
        case m.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return E.intl.string(E.t.ypuSd3);
        case m.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return E.intl.string(E.t.mXMmWF);
        default:
            return E.intl.string(E.t['s9+XlJ']);
    }
}
