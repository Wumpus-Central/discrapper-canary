n.d(t, {
    Bg: () => U,
    E5: () => ee,
    Fp: () => F,
    JT: () => $,
    L2: () => z,
    MY: () => k,
    Nz: () => Z,
    Q_: () => V,
    TO: () => Y,
    Z0: () => G,
    bT: () => H,
    dM: () => W,
    dQ: () => K,
    e$: () => X,
    iM: () => Q,
    pO: () => j,
    xr: () => M,
    z2: () => J
}),
    n(47120),
    n(474991),
    n(398202),
    n(301563),
    n(757143),
    n(627341),
    n(566702);
var r = n(278074),
    i = n(873546),
    o = n(442837),
    a = n(34756),
    s = n(100159),
    l = n(912788),
    c = n(594174),
    u = n(626135),
    d = n(823379),
    f = n(74538),
    _ = n(226951),
    p = n(73346),
    h = n(981631),
    m = n(474936),
    g = n(388032);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
let y = ['discordapp.com/gifts', 'discord.com/gifts'],
    v = 3,
    O = [_.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...y.map((e) => _.Z.escape(e))].join('|'),
    I = RegExp('(?: |^|https?://)(?:'.concat(O, ')/([a-z0-9-]+)'), 'gi'),
    S = [...['discord.com/billing/promotions', 'promos.discord.gg'].map((e) => _.Z.escape(e))].join('|'),
    T = RegExp('(?: |^|https?://)(?:'.concat(S, ')(/|(/)?\\?code=)([a-z0-9-]+)'), 'gi'),
    N = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789',
    A = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => '['.concat(N, ']{').concat(e, '}'))
            .join('-?'),
    C = A(4, 4),
    R = A(4, 6),
    P = A(5, 3),
    w = 'WUMP-?',
    D = [C, R, P, '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}'].join('|'),
    L = new RegExp('^('.concat(w, ')?(').concat(D, ')$')),
    x = '-';
var M = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.CUSTOM_STYLE = 1)] = 'CUSTOM_STYLE'), (e[(e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD'), e;
})({});
let k = (e, t) => (i.tq || i.Em ? 0 : null != e || t ? 2 : 1),
    j = (e) => 0 !== k(e);
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(e, ':')
        .concat(null != t ? t : '', ':')
        .concat(null != n ? n : '');
}
function G(e) {
    let [t, n, r] = e.split(':');
    return {
        skuId: t,
        subscriptionPlanId: '' === n ? null : n,
        giftStyle: '' !== r && null != r ? Number.parseInt(r) : void 0
    };
}
function B(e) {
    return e.replace(/[^A-Za-z0-9]/g, '');
}
let F = (e) => (null == e ? void 0 : e.type) === h.uaV.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === h.hBH.GIFT,
    V = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = I.exec(e)) && n.size < v; ) n.add(B(t[1]));
        for (; null != (t = T.exec(e)) && n.size < v; ) n.add(B(t[t.length - 1]));
        return Array.from(n);
    };
function Z() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = '/'.concat(t)) : ((n = location.host), (e = '/gifts/'.concat(t))), ''.concat(location.protocol, '//').concat(n).concat(e);
}
async function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (
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
            u.default.track(
                h.rMx.GIFT_CODE_RESOLVED,
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
            (u.default.track(h.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }),
            new a.Z(t))
        );
    }
}
function W(e, t) {
    u.default.track(h.rMx.GIFT_CODE_COPIED, b({}, (0, s.Z)(t, !1, !1), e.analyticsData));
}
function Y(e, t, n, r, i, o, a) {
    return null == n && (r || i || null == e) ? (!a || o || r || i ? (r && (t.isSubscription || null != e) ? h.wZ8.SUCCESS : h.wZ8.CONFIRM) : h.wZ8.OPEN) : h.wZ8.ERROR;
}
function K(e, t, n) {
    switch (e) {
        case h.wZ8.ERROR:
            return g.NW.formatToMarkdownString(g.t.JUvC0t, {});
        case h.wZ8.SUCCESS:
            return t.isSubscription ? g.NW.formatToPlainString(g.t['1C2BGx'], { skuName: n.name }) : g.NW.string(g.t['+BNMcH']);
        case h.wZ8.CONFIRM:
        default:
            return t.isSubscription ? g.NW.formatToPlainString(g.t['2VN4Nz'], { skuName: n.name }) : g.NW.string(g.t.RmamAA);
    }
}
function z(e, t, n) {
    switch (e) {
        case h.wZ8.ERROR:
            return g.NW.string(g.t.w19zb2);
        case h.wZ8.SUCCESS:
            if (__OVERLAY__) return g.NW.string(g.t.zW87EB);
            if (t.isSubscription) return g.NW.string(g.t.ex5TKi);
            return g.NW.string(g.t.OOkjqq);
        case h.wZ8.OPEN:
            return g.NW.string(g.t.F8ktcn);
        case h.wZ8.CONFIRM:
        default:
            if (null != n && n) return g.NW.string(g.t.n6I6k5);
            if (null != t.giftStyle) return t.isClaimed ? g.NW.string(g.t.OgpR0d) : g.NW.string(g.t['2BWscn']);
            return t.isSubscription ? g.NW.string(g.t.wQ1FHx) : g.NW.string(g.t.OgpR0d);
    }
}
function q(e) {
    return (0, r.EQ)(e)
        .with(
            {
                interval: m.rV.MONTH,
                premiumSubscriptionType: m.p9.TIER_2
            },
            () => g.NW.formatToPlainString(g.t['vFfV+P'], { timeInterval: g.NW.string(g.t.FPybU1) })
        )
        .with(
            {
                interval: m.rV.YEAR,
                premiumSubscriptionType: m.p9.TIER_2
            },
            () => g.NW.formatToPlainString(g.t['vFfV+P'], { timeInterval: g.NW.string(g.t.tfqrho) })
        )
        .with(
            {
                interval: m.rV.MONTH,
                premiumSubscriptionType: m.p9.TIER_1
            },
            () => g.NW.formatToPlainString(g.t.gjKbFx, { intervalCount: e.intervalCount })
        )
        .with(
            {
                interval: m.rV.YEAR,
                premiumSubscriptionType: m.p9.TIER_1
            },
            () => g.NW.formatToPlainString(g.t.GIe7Bw, { intervalCount: e.intervalCount })
        )
        .otherwise(() => g.NW.string(g.t['5ayf7+']));
}
function Q(e) {
    let { step: t, sku: n, libraryApplication: r, error: i, accepted: o, accepting: a, onGoToLibrary: s, subscriptionPlan: l = null } = e;
    switch (t) {
        case h.wZ8.ERROR:
            return X(r, i, o, a, s);
        case h.wZ8.SUCCESS:
            if (null != l) return q(l);
            return g.NW.formatToPlainString(g.t['3CPsbm'], { skuName: n.name });
        case h.wZ8.CONFIRM:
        default:
            if (null != l) {
                let e = l.interval === m.rV.MONTH ? g.t.P9eTKi : g.t.d8rUd3;
                return g.NW.format(e, {
                    skuName: n.name,
                    intervalCount: l.intervalCount
                });
            }
            return g.NW.formatToPlainString(g.t.l6Ea4e, { skuName: n.name });
    }
}
function X(e, t, n, r, i) {
    let o = n || r ? void 0 : e,
        a = g.NW.format(g.t['5zyz9/'], { onGoToLibrary: i });
    return null != o ? a : null == t ? null : et(t, c.default.getCurrentUser());
}
function J(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        o = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(d.lm);
    return o.length === i.length ? o[0] : null;
}
function $(e) {
    let t = e.trim().split('/').pop().match(L);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(RegExp(x, 'g'), '');
}
let ee = (e, t) =>
    (0, o.e7)([l.Z], () => {
        if (null == e || !t) return null;
        let n = l.Z.getGiftCode(e);
        return null == n || '' === n ? null : n;
    });
function et(e, t) {
    switch (e.code) {
        case h.evJ.INVALID_GIFT_SELF_REDEMPTION:
            return g.NW.string(g.t.wa9h7O);
        case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return g.NW.string(g.t.Iw2TUV);
        case h.evJ.INVALID_GIFT_REDEMPTION_OWNED:
            return g.NW.string(g.t.mdLtb2);
        case h.evJ.UNKNOWN_GIFT_CODE:
            return g.NW.string(g.t.roztIi);
        case h.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return g.NW.formatToPlainString(g.t['4YTHKy'], { planName: (0, f.M5)(t, m.p9.TIER_2) ? g.NW.string(g.t['lG6a5+']) : g.NW.string(g.t['FSOz7+']) });
        case h.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return g.NW.string(g.t['9i1J39']);
        case h.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return g.NW.string(g.t.U26WX1);
        case h.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return g.NW.string(g.t.ypuSd3);
        case h.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return g.NW.string(g.t.mXMmWF);
        default:
            return g.NW.string(g.t['s9+XlJ']);
    }
}
