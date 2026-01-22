n.d(t, {
    QB: () => S,
    VH: () => w,
    YE: () => C,
    ZH: () => M,
    aP: () => R,
    my: () => L,
    vy: () => T,
}),
    n(321073),
    n(896048),
    n(848778),
    n(65821),
    n(638769),
    n(938796);
var r = n(735438),
    i = n.n(r),
    a = n(989349),
    s = n.n(a),
    o = n(975975),
    l = n.n(o),
    c = n(607399),
    u = n(665260),
    d = n(562465),
    f = n(384904),
    p = n(776231),
    _ = n(961350),
    h = n(615405),
    m = n(295405),
    g = n(166403),
    E = n(676279),
    b = n(403362);
n(723702);
var y = n(661191),
    O = n(652215);

function A(e, t, n) {
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

function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
n(985018), l().shim();
let S = !c.Fr && !c.v1 && -1 !== (0, E.Z5)(),
    I = 3;

function T(e, t) {
    let { analyticsSource: n, analyticsProperties: r, storeListingId: i, slug: a, channelId: s, guildId: o } = t,
        l = {
            state: {
                analyticsSource: n,
                analyticsProperties: r,
            },
            search: null != i ? "?store_listing_id=".concat(i) : "",
        };
    return v(
        {
            pathname: null != s && null != o ? O.BVt.CHANNEL(o, s, e) : O.BVt.APPLICATION_STORE_LISTING_SKU(e, a),
        },
        l,
    );
}

function C(e, t, n, r) {
    var i;
    let a,
        s = window.GLOBAL_ENV.CDN_HOST;
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
    "webp" !== r || S || (r = "png");
    let o = "string" == typeof t ? t : t.id,
        l = (i = "https:");
    return (
        (a =
            null != s
                ? "".concat(l, "//").concat(s, "/app-assets/").concat(e, "/store/").concat(o, ".").concat(r)
                : ""
                      .concat(l)
                      .concat(window.GLOBAL_ENV.API_ENDPOINT)
                      .concat(O.Rsh.STORE_ASSET(e, o, r))),
        null != n && (a += "?size=".concat((0, p.kr)(n * (0, p.mZ)()))),
        a
    );
}

function N() {
    return new Promise(async (e) => {
        if (g.A.hasFetchedSubscriptions()) e();
        else if (h.A.isSubscriptionFetching) {
            let t = () => {
                h.A.isSubscriptionFetching ? setTimeout(t, 50) : e();
            };
            t();
        } else await (0, f.hP)(), e();
    });
}
async function R(e) {
    var t, n, r, i;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = _.default.isAuthenticated();
    if (a && s) {
        let e = [];
        m.A.hasFetchedPaymentSources || e.push(null != (r = h.A.paymentSourcesFetchRequest) ? r : (0, f.$o)()),
            h.A.ipCountryCodeLoaded || e.push((0, f.xe)()),
            e.push(N()),
            await Promise.race([Promise.allSettled(e), new Promise((e) => setTimeout(e, 1e4))]);
    }
    let o = m.A.getDefaultBillingCountryCode(),
        l = null != (t = null == (n = m.A.defaultPaymentSource) ? void 0 : n.id) ? t : null,
        c = g.A.getPremiumTypeSubscription();
    null != c && null != c.paymentSourceId && (l = c.paymentSourceId),
        null === o && (o = null != (i = h.A.ipCountryCode) ? i : null);
    let u = {};
    if ((null != o && (u.country_code = o), null != l && (u.payment_source_id = l), null != o || null != l)) {
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
        e.query = v({}, u, e.query);
    }
    return d.Bo.get(e);
}

function w(e, t, n) {
    let r = t.getApplication(e);
    return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId);
}

function P(e, t, n) {
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
            .filter(b.Vq)
            .sort((e, t) => t.startTime - e.startTime);
    return 0 === a.length
        ? null
        : {
              type: O.g_B.NOW_PLAYING,
              userInfo: a,
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
                      endTime: Date.parse(e.last_played_at),
                  };
        })
        .filter(b.Vq)
        .sort((e, t) => t.endTime - e.endTime);
    return 0 === i.length
        ? null
        : {
              type: O.g_B.EVER_PLAYED,
              userInfo: i,
          };
}
let x = [];

function L(e, t, n, r, a) {
    let s = t.get(e);
    if (null == s) return x;
    let o = s.applicationId,
        l = [],
        c = [],
        u = P(o, n, r);
    null != u &&
        (l.push(u),
        (c = u.userInfo.map((e) => {
            let { user: t } = e;
            return t.id;
        })));
    let d = a.getStatisticsForApplication(o);
    if (null != d) {
        let e = d.map((e) => e.user_id);
        if (i().difference(e, c).length > 0) {
            let e = D(o, n, a);
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
    (0, u.Lt)(r.flags, O.d68.HAS_FREE_PREMIUM_CONTENT) &&
        a.push({
            type: O.g_B.HAS_FREE_PREMIUM_CONTENT,
        });
    let o = r.releaseDate;
    return (
        null != o &&
            s()().diff(o, "months") < I &&
            (r.accessType === O.ds3.EARLY_ACCESS
                ? a.push({
                      type: O.g_B.EARLY_ACCESS,
                      releaseDate: o,
                  })
                : a.push({
                      type: O.g_B.RECENT_RELEASE_DATE,
                      releaseDate: o,
                  })),
        null != i.flavorText &&
            a.push({
                type: O.g_B.FLAVOR_TEXT,
                flavorText: i.flavorText,
            }),
        a
    );
}
