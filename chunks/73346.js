n.d(t, {
    Gg: () => x,
    Kb: () => R,
    Ww: () => k,
    ZI: () => N,
    _W: () => A,
    uF: () => P
}),
    n(653041),
    n(47120),
    n(998459),
    n(411104),
    n(230036),
    n(789020);
var r = n(392711),
    i = n.n(r),
    o = n(913527),
    a = n.n(o),
    s = n(991637),
    l = n.n(s),
    c = n(873546),
    u = n(544891),
    d = n(355467),
    f = n(134432),
    _ = n(314897),
    p = n(351402),
    h = n(853872),
    m = n(78839),
    g = n(526167),
    E = n(630388),
    b = n(823379);
n(358085);
var y = n(709054),
    v = n(981631);
function O(e, t, n) {
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
function I(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
n(388032), l().shim();
let S = !c.tq && !c.Em && -1 !== (0, g.vu)(),
    T = 3;
function N(e, t) {
    let { analyticsSource: n, analyticsProperties: r, storeListingId: i, slug: o, channelId: a, guildId: s } = t,
        l = {
            state: {
                analyticsSource: n,
                analyticsProperties: r
            },
            search: null != i ? '?store_listing_id='.concat(i) : ''
        };
    return I({ pathname: null != a && null != s ? v.Z5c.CHANNEL(s, a, e) : v.Z5c.APPLICATION_STORE_LISTING_SKU(e, o) }, l);
}
function A(e, t, n, r) {
    var i;
    let o,
        a = window.GLOBAL_ENV.CDN_HOST;
    if (null == r)
        switch (t.mimeType || t.mime_type) {
            case 'video/quicktime':
            case 'video/mp4':
                r = 'mp4';
                break;
            case 'image/gif':
                r = 'gif';
                break;
            default:
                r = 'webp';
        }
    'webp' !== r || S || (r = 'png');
    let s = 'string' == typeof t ? t : t.id,
        l = (i = 'https:');
    return (
        (o =
            null != a
                ? ''.concat(l, '//').concat(a, '/app-assets/').concat(e, '/store/').concat(s, '.').concat(r)
                : ''
                      .concat(l)
                      .concat(window.GLOBAL_ENV.API_ENDPOINT)
                      .concat(v.ANM.STORE_ASSET(e, s, r))),
        null != n && (o += '?size='.concat((0, f.oO)(n * (0, f.x_)()))),
        o
    );
}
function C() {
    return new Promise(async (e) => {
        if (m.ZP.hasFetchedSubscriptions()) e();
        else if (p.Z.isSubscriptionFetching) {
            let t = () => {
                p.Z.isSubscriptionFetching ? setTimeout(t, 50) : e();
            };
            t();
        } else await (0, d.jg)(), e();
    });
}
async function R(e) {
    var t, n, r, i;
    let o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = _.default.isAuthenticated();
    if (o && a) {
        let e = [];
        h.Z.hasFetchedPaymentSources || e.push(null != (n = p.Z.paymentSourcesFetchRequest) ? n : (0, d.tZ)()), p.Z.ipCountryCodeLoaded || e.push((0, d.GE)()), e.push(C()), await Promise.race([Promise.allSettled(e), new Promise((e) => setTimeout(e, 10000))]);
    }
    let s = h.Z.getDefaultBillingCountryCode(),
        l = null != (r = null == (t = h.Z.defaultPaymentSource) ? void 0 : t.id) ? r : null,
        c = m.ZP.getPremiumTypeSubscription();
    null != c && null != c.paymentSourceId && (l = c.paymentSourceId), null === s && (s = null != (i = p.Z.ipCountryCode) ? i : null);
    let f = {};
    if ((null != s && (f.country_code = s), null != l && (f.payment_source_id = l), null != s || null != l)) {
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
        e.query = I({}, f, e.query);
    }
    return u.tn.get(e);
}
function P(e, t, n) {
    let r = t.getApplication(e);
    return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId);
}
function w(e, t, n) {
    var r;
    let i = null != (r = n.getNowPlaying(e)) ? r : {},
        o = y.default
            .keys(i)
            .map((e) => {
                let n = t.getUser(e);
                return null == n
                    ? null
                    : {
                          user: n,
                          startTime: i[n.id].startedPlaying
                      };
            })
            .filter(b.lm)
            .sort((e, t) => t.startTime - e.startTime);
    return 0 === o.length
        ? null
        : {
              type: v.AzA.NOW_PLAYING,
              userInfo: o
          };
}
function D(e, t, n) {
    let r = n.getStatisticsForApplication(e);
    if (null == r) return null;
    let i = r
        .map((e) => {
            let n = t.getUser(e.user_id);
            return null == n
                ? null
                : {
                      user: n,
                      endTime: Date.parse(e.last_played_at)
                  };
        })
        .filter(b.lm)
        .sort((e, t) => t.endTime - e.endTime);
    return 0 === i.length
        ? null
        : {
              type: v.AzA.EVER_PLAYED,
              userInfo: i
          };
}
let L = [];
function x(e, t, n, r, o) {
    let a = t.get(e);
    if (null == a) return L;
    let s = a.applicationId,
        l = [],
        c = [],
        u = w(s, n, r);
    null != u &&
        (l.push(u),
        (c = u.userInfo.map((e) => {
            let { user: t } = e;
            return t.id;
        })));
    let d = o.getStatisticsForApplication(s);
    if (null != d) {
        let e = d.map((e) => e.user_id);
        if (i().difference(e, c).length > 0) {
            let e = D(s, n, o);
            null != e && l.push(e);
        }
    }
    return l;
}
let M = [];
function k(e, t, n) {
    let r = t.get(e),
        i = n.getForSKU(e);
    if (null == r || null == i) return M;
    let o = [];
    (0, E.yE)(r.flags, v.l4R.HAS_FREE_PREMIUM_CONTENT) && o.push({ type: v.AzA.HAS_FREE_PREMIUM_CONTENT });
    let s = r.releaseDate;
    return (
        null != s &&
            a()().diff(s, 'months') < T &&
            (r.accessType === v.kGb.EARLY_ACCESS
                ? o.push({
                      type: v.AzA.EARLY_ACCESS,
                      releaseDate: s
                  })
                : o.push({
                      type: v.AzA.RECENT_RELEASE_DATE,
                      releaseDate: s
                  })),
        null != i.flavorText &&
            o.push({
                type: v.AzA.FLAVOR_TEXT,
                flavorText: i.flavorText
            }),
        o
    );
}
