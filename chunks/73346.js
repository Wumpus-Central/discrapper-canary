n.d(t, {
    Gg: () => x,
    Kb: () => C,
    Ww: () => P,
    ZI: () => S,
    _W: () => A,
    uF: () => R
}),
    n(653041),
    n(47120),
    n(998459),
    n(411104),
    n(789020);
var i = n(392711),
    r = n.n(i),
    a = n(913527),
    s = n.n(a),
    o = n(991637),
    l = n.n(o),
    u = n(873546),
    c = n(544891),
    d = n(355467),
    f = n(134432),
    _ = n(314897),
    p = n(351402),
    h = n(853872),
    m = n(78839),
    g = n(526167),
    E = n(630388),
    v = n(823379);
n(358085);
var y = n(709054),
    I = n(981631);
n(388032), l().shim();
let T = !u.tq && !u.Em && -1 !== (0, g.vu)(),
    b = 3;
function S(e, t) {
    let { analyticsSource: n, analyticsProperties: i, storeListingId: r, slug: a, channelId: s, guildId: o } = t,
        l = {
            state: {
                analyticsSource: n,
                analyticsProperties: i
            },
            search: null != r ? '?store_listing_id='.concat(r) : ''
        };
    return {
        pathname: null != s && null != o ? I.Z5c.CHANNEL(o, s, e) : I.Z5c.APPLICATION_STORE_LISTING_SKU(e, a),
        ...l
    };
}
function A(e, t, n, i) {
    var r;
    let a;
    let s = window.GLOBAL_ENV.CDN_HOST;
    if (null == i)
        switch (t.mimeType || t.mime_type) {
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
    'webp' !== i || T || (i = 'png');
    let o = 'string' == typeof t ? t : t.id,
        l = ((r = 'https:'), 'https:');
    return (
        (a =
            null != s
                ? ''.concat(l, '//').concat(s, '/app-assets/').concat(e, '/store/').concat(o, '.').concat(i)
                : ''
                      .concat(l)
                      .concat(window.GLOBAL_ENV.API_ENDPOINT)
                      .concat(I.ANM.STORE_ASSET(e, o, i))),
        null != n && (a += '?size='.concat((0, f.oO)(n * (0, f.x_)()))),
        a
    );
}
function N() {
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
async function C(e) {
    var t, n, i, r;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = _.default.isAuthenticated();
    if (a && s) {
        let e = [];
        h.Z.hasFetchedPaymentSources || e.push(null !== (n = p.Z.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, d.tZ)()), p.Z.ipCountryCodeLoaded || e.push((0, d.GE)()), e.push(N()), await Promise.race([Promise.allSettled(e), new Promise((e) => setTimeout(e, 10000))]);
    }
    let o = h.Z.getDefaultBillingCountryCode(),
        l = null !== (i = null === (t = h.Z.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null,
        u = m.ZP.getPremiumTypeSubscription();
    null != u && null != u.paymentSourceId && (l = u.paymentSourceId), null === o && (o = null !== (r = p.Z.ipCountryCode) && void 0 !== r ? r : null);
    let f = {};
    if ((null != o && (f.country_code = o), null != l && (f.payment_source_id = l), null != o || null != l)) {
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
            ...f,
            ...e.query
        };
    }
    return c.tn.get(e);
}
function R(e, t, n) {
    let i = t.getApplication(e);
    return null == i || null == i.primarySkuId ? null : n.get(i.primarySkuId);
}
function O(e, t, n) {
    var i;
    let r = null !== (i = n.getNowPlaying(e)) && void 0 !== i ? i : {},
        a = y.default
            .keys(r)
            .map((e) => {
                let n = t.getUser(e);
                return null == n
                    ? null
                    : {
                          user: n,
                          startTime: r[n.id].startedPlaying
                      };
            })
            .filter(v.lm)
            .sort((e, t) => t.startTime - e.startTime);
    return 0 === a.length
        ? null
        : {
              type: I.AzA.NOW_PLAYING,
              userInfo: a
          };
}
function D(e, t, n) {
    let i = n.getStatisticsForApplication(e);
    if (null == i) return null;
    let r = i
        .map((e) => {
            let n = t.getUser(e.user_id);
            return null == n
                ? null
                : {
                      user: n,
                      endTime: Date.parse(e.last_played_at)
                  };
        })
        .filter(v.lm)
        .sort((e, t) => t.endTime - e.endTime);
    return 0 === r.length
        ? null
        : {
              type: I.AzA.EVER_PLAYED,
              userInfo: r
          };
}
let L = [];
function x(e, t, n, i, a) {
    let s = t.get(e);
    if (null == s) return L;
    let o = s.applicationId,
        l = [],
        u = [],
        c = O(o, n, i);
    null != c &&
        (l.push(c),
        (u = c.userInfo.map((e) => {
            let { user: t } = e;
            return t.id;
        })));
    let d = a.getStatisticsForApplication(o);
    if (null != d) {
        let e = d.map((e) => e.user_id);
        if (r().difference(e, u).length > 0) {
            let e = D(o, n, a);
            null != e && l.push(e);
        }
    }
    return l;
}
let w = [];
function P(e, t, n) {
    let i = t.get(e),
        r = n.getForSKU(e);
    if (null == i || null == r) return w;
    let a = [];
    (0, E.yE)(i.flags, I.l4R.HAS_FREE_PREMIUM_CONTENT) && a.push({ type: I.AzA.HAS_FREE_PREMIUM_CONTENT });
    let o = i.releaseDate;
    return (
        null != o &&
            s()().diff(o, 'months') < b &&
            (i.accessType === I.kGb.EARLY_ACCESS
                ? a.push({
                      type: I.AzA.EARLY_ACCESS,
                      releaseDate: o
                  })
                : a.push({
                      type: I.AzA.RECENT_RELEASE_DATE,
                      releaseDate: o
                  })),
        null != r.flavorText &&
            a.push({
                type: I.AzA.FLAVOR_TEXT,
                flavorText: r.flavorText
            }),
        a
    );
}
