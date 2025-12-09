n.d(t, {
    $k: () => I,
    Gg: () => L,
    Kb: () => P,
    Ww: () => M,
    ZI: () => A,
    _W: () => C,
    uF: () => R,
}),
    n(539854),
    n(388685),
    n(993155),
    n(415506),
    n(642613),
    n(997841);
var r = n(392711),
    i = n.n(r),
    a = n(913527),
    o = n.n(a),
    s = n(991637),
    l = n.n(s),
    c = n(873546),
    u = n(95015),
    d = n(544891),
    f = n(355467),
    p = n(134432),
    _ = n(314897),
    m = n(351402),
    h = n(853872),
    g = n(78839),
    E = n(526167),
    b = n(823379);
n(358085);
var y = n(709054),
    O = n(981631);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
n(388032), l().shim();
let I = !c.tq && !c.Em && -1 !== (0, E.vu)(),
    T = 3;
function A(e, t) {
    let { analyticsSource: n, analyticsProperties: r, storeListingId: i, slug: a, channelId: o, guildId: s } = t,
        l = {
            state: {
                analyticsSource: n,
                analyticsProperties: r,
            },
            search: null != i ? "?store_listing_id=".concat(i) : "",
        };
    return S(
        { pathname: null != o && null != s ? O.Z5c.CHANNEL(s, o, e) : O.Z5c.APPLICATION_STORE_LISTING_SKU(e, a) },
        l,
    );
}
function C(e, t, n, r) {
    var i;
    let a,
        o = window.GLOBAL_ENV.CDN_HOST;
    if (null == r)
        switch (t.mimeType || t.mime_type) {
            case "video/quicktime":
            case "video/mp4":
                r = "mp4";
                break;
            case "image/gif":
                r = "gif";
                break;
            default:
                r = "webp";
        }
    "webp" !== r || I || (r = "png");
    let s = "string" == typeof t ? t : t.id,
        l = (i = "https:");
    return (
        (a =
            null != o
                ? "".concat(l, "//").concat(o, "/app-assets/").concat(e, "/store/").concat(s, ".").concat(r)
                : ""
                      .concat(l)
                      .concat(window.GLOBAL_ENV.API_ENDPOINT)
                      .concat(O.ANM.STORE_ASSET(e, s, r))),
        null != n && (a += "?size=".concat((0, p.oO)(n * (0, p.x_)()))),
        a
    );
}
function N() {
    return new Promise(async (e) => {
        if (g.Z.hasFetchedSubscriptions()) e();
        else if (m.Z.isSubscriptionFetching) {
            let t = () => {
                m.Z.isSubscriptionFetching ? setTimeout(t, 50) : e();
            };
            t();
        } else await (0, f.jg)(), e();
    });
}
async function P(e) {
    var t, n, r, i;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        o = _.default.isAuthenticated();
    if (a && o) {
        let e = [];
        h.Z.hasFetchedPaymentSources || e.push(null != (n = m.Z.paymentSourcesFetchRequest) ? n : (0, f.tZ)()),
            m.Z.ipCountryCodeLoaded || e.push((0, f.GE)()),
            e.push(N()),
            await Promise.race([Promise.allSettled(e), new Promise((e) => setTimeout(e, 10000))]);
    }
    let s = h.Z.getDefaultBillingCountryCode(),
        l = null != (r = null == (t = h.Z.defaultPaymentSource) ? void 0 : t.id) ? r : null,
        c = g.Z.getPremiumTypeSubscription();
    null != c && null != c.paymentSourceId && (l = c.paymentSourceId),
        null === s && (s = null != (i = m.Z.ipCountryCode) ? i : null);
    let u = {};
    if ((null != s && (u.country_code = s), null != l && (u.payment_source_id = l), null != s || null != l)) {
        if (
            ("string" == typeof e &&
                (e = {
                    url: e,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }),
            "string" == typeof e.query)
        )
            throw Error("string query not supported");
        e.query = S({}, u, e.query);
    }
    return d.tn.get(e);
}
function R(e, t, n) {
    let r = t.getApplication(e);
    return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId);
}
function D(e, t, n) {
    var r;
    let i = null != (r = n.getNowPlaying(e)) ? r : {},
        a = y.default
            .keys(i)
            .map((e) => {
                let n = t.getUser(e);
                return null == n
                    ? null
                    : {
                          user: n,
                          startTime: i[n.id].startedPlaying,
                      };
            })
            .filter(b.lm)
            .sort((e, t) => t.startTime - e.startTime);
    return 0 === a.length
        ? null
        : {
              type: O.AzA.NOW_PLAYING,
              userInfo: a,
          };
}
function w(e, t, n) {
    let r = n.getStatisticsForApplication(e);
    if (null == r) return null;
    let i = r
        .map((e) => {
            let n = t.getUser(e.user_id);
            return null == n
                ? null
                : {
                      user: n,
                      endTime: Date.parse(e.last_played_at),
                  };
        })
        .filter(b.lm)
        .sort((e, t) => t.endTime - e.endTime);
    return 0 === i.length
        ? null
        : {
              type: O.AzA.EVER_PLAYED,
              userInfo: i,
          };
}
let x = [];
function L(e, t, n, r, a) {
    let o = t.get(e);
    if (null == o) return x;
    let s = o.applicationId,
        l = [],
        c = [],
        u = D(s, n, r);
    null != u &&
        (l.push(u),
        (c = u.userInfo.map((e) => {
            let { user: t } = e;
            return t.id;
        })));
    let d = a.getStatisticsForApplication(s);
    if (null != d) {
        let e = d.map((e) => e.user_id);
        if (i().difference(e, c).length > 0) {
            let e = w(s, n, a);
            null != e && l.push(e);
        }
    }
    return l;
}
let j = [];
function M(e, t, n) {
    let r = t.get(e),
        i = n.getForSKU(e);
    if (null == r || null == i) return j;
    let a = [];
    (0, u.yE)(r.flags, O.l4R.HAS_FREE_PREMIUM_CONTENT) && a.push({ type: O.AzA.HAS_FREE_PREMIUM_CONTENT });
    let s = r.releaseDate;
    return (
        null != s &&
            o()().diff(s, "months") < T &&
            (r.accessType === O.kGb.EARLY_ACCESS
                ? a.push({
                      type: O.AzA.EARLY_ACCESS,
                      releaseDate: s,
                  })
                : a.push({
                      type: O.AzA.RECENT_RELEASE_DATE,
                      releaseDate: s,
                  })),
        null != i.flavorText &&
            a.push({
                type: O.AzA.FLAVOR_TEXT,
                flavorText: i.flavorText,
            }),
        a
    );
}
