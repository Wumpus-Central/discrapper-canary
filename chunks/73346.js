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
        return L;
    },
    uF: function () {
        return P;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(998459);
var o = r(411104);
var l = r(789020);
var u = r(392711),
    c = r.n(u),
    d = r(913527),
    f = r.n(d),
    _ = r(991637),
    h = r.n(_),
    p = r(873546),
    m = r(544891),
    g = r(355467),
    E = r(134432),
    v = r(314897),
    I = r(351402),
    T = r(853872),
    b = r(78839),
    y = r(526167),
    S = r(630388),
    A = r(823379);
r(358085);
var N = r(709054),
    C = r(981631);
r(388032), h().shim();
let R = !p.tq && !p.Em && -1 !== (0, y.vu)(),
    O = 3;
function D(e, n) {
    let { analyticsSource: r, analyticsProperties: i, storeListingId: a, slug: s, channelId: o, guildId: l } = n,
        u = {
            state: {
                analyticsSource: r,
                analyticsProperties: i
            },
            search: null != a ? '?store_listing_id='.concat(a) : ''
        };
    return {
        pathname: null != o && null != l ? C.Z5c.CHANNEL(l, o, e) : C.Z5c.APPLICATION_STORE_LISTING_SKU(e, s),
        ...u
    };
}
function L(e, n, r, i) {
    var a;
    let s;
    let o = window.GLOBAL_ENV.CDN_HOST;
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
        (s =
            null != o
                ? ''.concat(u, '//').concat(o, '/app-assets/').concat(e, '/store/').concat(l, '.').concat(i)
                : ''
                      .concat(u)
                      .concat(window.GLOBAL_ENV.API_ENDPOINT)
                      .concat(C.ANM.STORE_ASSET(e, l, i))),
        null != r && (s += '?size='.concat((0, E.oO)(r * (0, E.x_)()))),
        s
    );
}
function x() {
    return new Promise(async (e) => {
        if (b.ZP.hasFetchedSubscriptions()) e();
        else if (I.Z.isSubscriptionFetching) {
            let n = () => {
                I.Z.isSubscriptionFetching ? setTimeout(n, 50) : e();
            };
            n();
        } else await (0, g.jg)(), e();
    });
}
async function w(e) {
    var n, r, i, a;
    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        o = v.default.isAuthenticated();
    if (s && o) {
        let e = [];
        !T.Z.hasFetchedPaymentSources && e.push(null !== (r = I.Z.paymentSourcesFetchRequest) && void 0 !== r ? r : (0, g.tZ)()), !I.Z.ipCountryCodeLoaded && e.push((0, g.GE)()), e.push(x()), await Promise.race([Promise.allSettled(e), new Promise((e) => setTimeout(e, 10000))]);
    }
    let l = T.Z.getDefaultBillingCountryCode(),
        u = null !== (i = null === (n = T.Z.defaultPaymentSource) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null,
        c = b.ZP.getPremiumTypeSubscription();
    null != c && null != c.paymentSourceId && (u = c.paymentSourceId), null === l && (l = null !== (a = I.Z.ipCountryCode) && void 0 !== a ? a : null);
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
        s = N.default
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
    return 0 === s.length
        ? null
        : {
              type: C.AzA.NOW_PLAYING,
              userInfo: s
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
              type: C.AzA.EVER_PLAYED,
              userInfo: a
          };
}
let U = [];
function B(e, n, r, i, a) {
    let s = n.get(e);
    if (null == s) return U;
    let o = s.applicationId,
        l = [],
        u = [],
        d = M(o, r, i);
    null != d &&
        (l.push(d),
        (u = d.userInfo.map((e) => {
            let { user: n } = e;
            return n.id;
        })));
    let f = a.getStatisticsForApplication(o);
    if (null != f) {
        let e = f.map((e) => e.user_id);
        if (c().difference(e, u).length > 0) {
            let e = k(o, r, a);
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
    let s = [];
    (0, S.yE)(i.flags, C.l4R.HAS_FREE_PREMIUM_CONTENT) && s.push({ type: C.AzA.HAS_FREE_PREMIUM_CONTENT });
    let o = i.releaseDate;
    return (
        null != o &&
            f()().diff(o, 'months') < O &&
            (i.accessType === C.kGb.EARLY_ACCESS
                ? s.push({
                      type: C.AzA.EARLY_ACCESS,
                      releaseDate: o
                  })
                : s.push({
                      type: C.AzA.RECENT_RELEASE_DATE,
                      releaseDate: o
                  })),
        null != a.flavorText &&
            s.push({
                type: C.AzA.FLAVOR_TEXT,
                flavorText: a.flavorText
            }),
        s
    );
}
