r.d(n, {
    Bg: function () {
        return F;
    },
    E5: function () {
        return er;
    },
    Fp: function () {
        return H;
    },
    JT: function () {
        return en;
    },
    L2: function () {
        return X;
    },
    MY: function () {
        return G;
    },
    Nz: function () {
        return W;
    },
    Q_: function () {
        return Y;
    },
    TO: function () {
        return q;
    },
    Z0: function () {
        return V;
    },
    bT: function () {
        return K;
    },
    dM: function () {
        return z;
    },
    dQ: function () {
        return Q;
    },
    e$: function () {
        return ee;
    },
    iM: function () {
        return $;
    },
    pO: function () {
        return Z;
    },
    xr: function () {
        return i;
    },
    z2: function () {
        return et;
    }
});
var i,
    a = r(47120);
var s = r(757143);
var o = r(627341);
var l = r(278074),
    u = r(873546),
    c = r(442837),
    d = r(34756),
    f = r(100159),
    _ = r(912788),
    h = r(594174),
    p = r(626135),
    m = r(823379),
    g = r(74538),
    E = r(226951),
    v = r(73346),
    I = r(981631),
    T = r(474936),
    b = r(388032);
let y = ['discordapp.com/gifts', 'discord.com/gifts'],
    S = 3,
    A = E.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
    N = [A, ...y.map((e) => E.Z.escape(e))].join('|'),
    C = RegExp('(?: |^|https?://)(?:'.concat(N, ')/([a-z0-9-]+)'), 'gi'),
    R = [...['discord.com/billing/promotions', 'promos.discord.gg'].map((e) => E.Z.escape(e))].join('|'),
    O = RegExp('(?: |^|https?://)(?:'.concat(R, ')(/|(/)?\\?code=)([a-z0-9-]+)'), 'gi'),
    D = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789',
    L = (e, n) =>
        Array(n)
            .fill(void 0)
            .map(() => '['.concat(D, ']{').concat(e, '}'))
            .join('-?'),
    x = L(4, 4),
    w = L(4, 6),
    P = L(5, 3),
    M = 'WUMP-?',
    k = [x, w, P, '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}'].join('|'),
    U = new RegExp('^('.concat(M, ')?(').concat(k, ')$')),
    B = '-';
!(function (e) {
    (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.CUSTOM_STYLE = 1)] = 'CUSTOM_STYLE'), (e[(e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD');
})(i || (i = {}));
let G = (e, n) => (u.tq || u.Em ? 0 : null != e || n ? 2 : 1),
    Z = (e) => 0 !== G(e);
function F(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        r = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(e, ':')
        .concat(null != n ? n : '', ':')
        .concat(null != r ? r : '');
}
function V(e) {
    let [n, r, i] = e.split(':');
    return {
        skuId: n,
        subscriptionPlanId: '' === r ? null : r,
        giftStyle: '' !== i && null != i ? Number.parseInt(i) : void 0
    };
}
function j(e) {
    return e.replace(/[^A-Za-z0-9]/g, '');
}
let H = (e) => (null == e ? void 0 : e.type) === I.uaV.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === I.hBH.GIFT,
    Y = (e) => {
        let n;
        if (null == e) return [];
        let r = new Set();
        for (; null != (n = C.exec(e)) && r.size < S; ) r.add(j(n[1]));
        for (; null != (n = O.exec(e)) && r.size < S; ) r.add(j(n[n.length - 1]));
        return Array.from(r);
    };
function W() {
    let e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        r = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != r ? (e = '/'.concat(n)) : ((r = location.host), (e = '/gifts/'.concat(n))), ''.concat(location.protocol, '//').concat(r).concat(e);
}
async function K(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let i = (
            await (0, v.Kb)({
                url: I.ANM.GIFT_CODE_RESOLVE(e),
                query: {
                    with_application: n,
                    with_subscription_plan: r
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body;
        return (
            p.default.track(
                I.rMx.GIFT_CODE_RESOLVED,
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
    } catch (n) {
        throw (
            (p.default.track(I.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }),
            new d.Z(n))
        );
    }
}
function z(e, n) {
    p.default.track(I.rMx.GIFT_CODE_COPIED, {
        ...(0, f.Z)(n, !1, !1),
        ...e.analyticsData
    });
}
function q(e, n, r, i, a, s, o) {
    return null == r && (i || a || null == e) ? (!o || s || i || a ? (i && (n.isSubscription || null != e) ? I.wZ8.SUCCESS : I.wZ8.CONFIRM) : I.wZ8.OPEN) : I.wZ8.ERROR;
}
function Q(e, n, r) {
    switch (e) {
        case I.wZ8.ERROR:
            return b.intl.formatToMarkdownString(b.t.JUvC0t, {});
        case I.wZ8.SUCCESS:
            return n.isSubscription ? b.intl.formatToPlainString(b.t['1C2BGx'], { skuName: r.name }) : b.intl.string(b.t['+BNMcH']);
        case I.wZ8.CONFIRM:
        default:
            return n.isSubscription ? b.intl.formatToPlainString(b.t['2VN4Nz'], { skuName: r.name }) : b.intl.string(b.t.RmamAA);
    }
}
function X(e, n, r) {
    switch (e) {
        case I.wZ8.ERROR:
            return b.intl.string(b.t.w19zb2);
        case I.wZ8.SUCCESS:
            if (__OVERLAY__) return b.intl.string(b.t.zW87EB);
            if (n.isSubscription) return b.intl.string(b.t.ex5TKi);
            return b.intl.string(b.t.OOkjqq);
        case I.wZ8.OPEN:
            return b.intl.string(b.t.F8ktcn);
        case I.wZ8.CONFIRM:
        default:
            if (null != r && r) return b.intl.string(b.t.n6I6k5);
            if (null != n.giftStyle) return n.isClaimed ? b.intl.string(b.t.OgpR0d) : b.intl.string(b.t['2BWscn']);
            return n.isSubscription ? b.intl.string(b.t.wQ1FHx) : b.intl.string(b.t.OgpR0d);
    }
}
function J(e) {
    return (0, l.EQ)(e)
        .with(
            {
                interval: T.rV.MONTH,
                premiumSubscriptionType: T.p9.TIER_2
            },
            () => b.intl.formatToPlainString(b.t['vFfV+P'], { timeInterval: b.intl.string(b.t.FPybU1) })
        )
        .with(
            {
                interval: T.rV.YEAR,
                premiumSubscriptionType: T.p9.TIER_2
            },
            () => b.intl.formatToPlainString(b.t['vFfV+P'], { timeInterval: b.intl.string(b.t.tfqrho) })
        )
        .with(
            {
                interval: T.rV.MONTH,
                premiumSubscriptionType: T.p9.TIER_1
            },
            () => b.intl.formatToPlainString(b.t.gjKbFx, { intervalCount: e.intervalCount })
        )
        .with(
            {
                interval: T.rV.YEAR,
                premiumSubscriptionType: T.p9.TIER_1
            },
            () => b.intl.formatToPlainString(b.t.GIe7Bw, { intervalCount: e.intervalCount })
        )
        .otherwise(() => b.intl.string(b.t['5ayf7+']));
}
function $(e) {
    let { step: n, sku: r, libraryApplication: i, error: a, accepted: s, accepting: o, onGoToLibrary: l, subscriptionPlan: u = null } = e;
    switch (n) {
        case I.wZ8.ERROR:
            return ee(i, a, s, o, l);
        case I.wZ8.SUCCESS:
            if (null != u) return J(u);
            return b.intl.formatToPlainString(b.t['3CPsbm'], { skuName: r.name });
        case I.wZ8.CONFIRM:
        default:
            if (null != u) {
                let e = u.interval === T.rV.MONTH ? b.t.P9eTKi : b.t.d8rUd3;
                return b.intl.format(e, {
                    skuName: r.name,
                    intervalCount: u.intervalCount
                });
            }
            return b.intl.formatToPlainString(b.t.l6Ea4e, { skuName: r.name });
    }
}
function ee(e, n, r, i, a) {
    let s = r || i ? void 0 : e,
        o = b.intl.format(b.t['5zyz9/'], { onGoToLibrary: a });
    return null != s ? o : null == n ? null : ei(n, h.default.getCurrentUser());
}
function et(e, n, r) {
    let i = n.applicationId,
        a = e.length > 0 ? e : [i],
        s = a.map((e) => r.getLibraryApplication(i, e, !0)).filter(m.lm);
    return s.length === a.length ? s[0] : null;
}
function en(e) {
    let n = e.trim().split('/').pop().match(U);
    if (null == n) return null;
    let [r, i, a] = n;
    return null == a ? null : a.replace(RegExp(B, 'g'), '');
}
let er = (e, n) =>
    (0, c.e7)([_.Z], () => {
        if (null == e || !n) return null;
        let r = _.Z.getGiftCode(e);
        return null == r || '' === r ? null : r;
    });
function ei(e, n) {
    switch (e.code) {
        case I.evJ.INVALID_GIFT_SELF_REDEMPTION:
            return b.intl.string(b.t.wa9h7O);
        case I.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return b.intl.string(b.t.Iw2TUV);
        case I.evJ.INVALID_GIFT_REDEMPTION_OWNED:
            return b.intl.string(b.t.mdLtb2);
        case I.evJ.UNKNOWN_GIFT_CODE:
            return b.intl.string(b.t.roztIi);
        case I.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return b.intl.formatToPlainString(b.t['4YTHKy'], { planName: (0, g.M5)(n, T.p9.TIER_2) ? b.intl.string(b.t['lG6a5+']) : b.intl.string(b.t['FSOz7+']) });
        case I.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return b.intl.string(b.t['9i1J39']);
        case I.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return b.intl.string(b.t.U26WX1);
        case I.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return b.intl.string(b.t.ypuSd3);
        case I.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return b.intl.string(b.t.mXMmWF);
        default:
            return b.intl.string(b.t['s9+XlJ']);
    }
}
