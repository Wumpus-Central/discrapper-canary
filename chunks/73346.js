r.d(n, {
    Gg: function () {
        return B;
    },
    Kb: function () {
        return w;
    },
    Ww: function () {
        return Z;
    },
    ZI: function () {
        return D;
    },
    _W: function () {
        return x;
    },
    uF: function () {
        return P;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(998459);
var s = r(411104);
var l = r(789020);
var u = r(392711),
    c = r.n(u),
    d = r(913527),
    f = r.n(d),
    p = r(991637),
    h = r.n(p),
    _ = r(873546),
    m = r(544891),
    g = r(355467),
    E = r(134432),
    v = r(314897),
    y = r(351402),
    b = r(853872),
    I = r(78839),
    T = r(526167),
    S = r(630388),
    A = r(823379);
r(358085);
var C = r(709054),
    N = r(981631);
r(388032), h().shim();
let R = !_.tq && !_.Em && -1 !== (0, T.vu)(),
    O = 3;
function D(e, n) {
    let { analyticsSource: r, analyticsProperties: i, storeListingId: a, slug: o, channelId: s, guildId: l } = n,
        u = {
            state: {
                analyticsSource: r,
                analyticsProperties: i
            },
            search: null != a ? '?store_listing_id='.concat(a) : ''
        };
    return {
        pathname: null != s && null != l ? N.Z5c.CHANNEL(l, s, e) : N.Z5c.APPLICATION_STORE_LISTING_SKU(e, o),
        ...u
    };
}
function x(e, n, r, i) {
    var a;
    let o;
    let s = window.GLOBAL_ENV.CDN_HOST;
    if (null == i)
        switch (n.mimeType || n.mime_type) {
            case 'video/quicktime':
            case 'video/mp4':
                i = 'mp4';
                break;
            case 'image/gif':
                i = 'gif';
                break;
            default:
                i = 'webp';
        }
    'webp' === i && !R && (i = 'png');
    let l = 'string' == typeof n ? n : n.id,
        u = ((a = 'https:'), 'https:');
    return (
        (o =
            null != s
                ? ''.concat(u, '//').concat(s, '/app-assets/').concat(e, '/store/').concat(l, '.').concat(i)
                : ''
                      .concat(u)
                      .concat(window.GLOBAL_ENV.API_ENDPOINT)
                      .concat(N.ANM.STORE_ASSET(e, l, i))),
        null != r && (o += '?size='.concat((0, E.oO)(r * (0, E.x_)()))),
        o
    );
}
function L() {
    return new Promise(async (e) => {
        if (I.ZP.hasFetchedSubscriptions()) e();
        else if (y.Z.isSubscriptionFetching) {
            let n = () => {
                y.Z.isSubscriptionFetching ? setTimeout(n, 50) : e();
            };
            n();
        } else await (0, g.jg)(), e();
    });
}
async function w(e) {
    var n, r, i, a;
    let o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = v.default.isAuthenticated();
    if (o && s) {
        let e = [];
        !b.Z.hasFetchedPaymentSources && e.push(null !== (r = y.Z.paymentSourcesFetchRequest) && void 0 !== r ? r : (0, g.tZ)()), !y.Z.ipCountryCodeLoaded && e.push((0, g.GE)()), e.push(L()), await Promise.race([Promise.allSettled(e), new Promise((e) => setTimeout(e, 10000))]);
    }
    let l = b.Z.getDefaultBillingCountryCode(),
        u = null !== (i = null === (n = b.Z.defaultPaymentSource) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null,
        c = I.ZP.getPremiumTypeSubscription();
    null != c && null != c.paymentSourceId && (u = c.paymentSourceId), null === l && (l = null !== (a = y.Z.ipCountryCode) && void 0 !== a ? a : null);
    let d = {};
    if ((null != l && (d.country_code = l), null != u && (d.payment_source_id = u), null != l || null != u)) {
        if (
            ('string' == typeof e &&
                (e = {
                    url: e,
                    oldFormErrors: !0,
                    rejectWithError: !1
                }),
            'string' == typeof e.query)
        )
            throw Error('string query not supported');
        e.query = {
            ...d,
            ...e.query
        };
    }
    return m.tn.get(e);
}
function P(e, n, r) {
    let i = n.getApplication(e);
    return null == i || null == i.primarySkuId ? null : r.get(i.primarySkuId);
}
function M(e, n, r) {
    var i;
    let a = null !== (i = r.getNowPlaying(e)) && void 0 !== i ? i : {},
        o = C.default
            .keys(a)
            .map((e) => {
                let r = n.getUser(e);
                return null == r
                    ? null
                    : {
                          user: r,
                          startTime: a[r.id].startedPlaying
                      };
            })
            .filter(A.lm)
            .sort((e, n) => n.startTime - e.startTime);
    return 0 === o.length
        ? null
        : {
              type: N.AzA.NOW_PLAYING,
              userInfo: o
          };
}
function k(e, n, r) {
    let i = r.getStatisticsForApplication(e);
    if (null == i) return null;
    let a = i
        .map((e) => {
            let r = n.getUser(e.user_id);
            return null == r
                ? null
                : {
                      user: r,
                      endTime: Date.parse(e.last_played_at)
                  };
        })
        .filter(A.lm)
        .sort((e, n) => n.endTime - e.endTime);
    return 0 === a.length
        ? null
        : {
              type: N.AzA.EVER_PLAYED,
              userInfo: a
          };
}
let U = [];
function B(e, n, r, i, a) {
    let o = n.get(e);
    if (null == o) return U;
    let s = o.applicationId,
        l = [],
        u = [],
        d = M(s, r, i);
    null != d &&
        (l.push(d),
        (u = d.userInfo.map((e) => {
            let { user: n } = e;
            return n.id;
        })));
    let f = a.getStatisticsForApplication(s);
    if (null != f) {
        let e = f.map((e) => e.user_id);
        if (c().difference(e, u).length > 0) {
            let e = k(s, r, a);
            null != e && l.push(e);
        }
    }
    return l;
}
let G = [];
function Z(e, n, r) {
    let i = n.get(e),
        a = r.getForSKU(e);
    if (null == i || null == a) return G;
    let o = [];
    (0, S.yE)(i.flags, N.l4R.HAS_FREE_PREMIUM_CONTENT) && o.push({ type: N.AzA.HAS_FREE_PREMIUM_CONTENT });
    let s = i.releaseDate;
    return (
        null != s &&
            f()().diff(s, 'months') < O &&
            (i.accessType === N.kGb.EARLY_ACCESS
                ? o.push({
                      type: N.AzA.EARLY_ACCESS,
                      releaseDate: s
                  })
                : o.push({
                      type: N.AzA.RECENT_RELEASE_DATE,
                      releaseDate: s
                  })),
        null != a.flavorText &&
            o.push({
                type: N.AzA.FLAVOR_TEXT,
                flavorText: a.flavorText
            }),
        o
    );
}
