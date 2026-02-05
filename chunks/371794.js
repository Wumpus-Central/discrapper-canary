"use strict";
n.d(t, { QB: () => y, VH: () => R, YE: () => C, ZH: () => P, aP: () => N, my: () => w, vy: () => v }),
    n(321073),
    n(938796);
var r = n(735438),
    i = n.n(r),
    a = n(989349),
    s = n.n(a),
    o = n(975975),
    l = n.n(o),
    u = n(607399),
    c = n(665260),
    d = n(562465),
    _ = n(384904),
    f = n(776231),
    p = n(961350),
    h = n(615405),
    m = n(295405),
    g = n(166403),
    E = n(676279),
    A = n(403362);
n(723702);
var I = n(661191),
    T = n(652215);
n(985018), l().shim();
let y = !u.Fr && !u.v1 && -1 !== (0, E.Z5)(),
    S = 3;
function v(e, t) {
    let { analyticsSource: n, analyticsProperties: r, storeListingId: i, slug: a, channelId: s, guildId: o } = t,
        l = {
            state: { analyticsSource: n, analyticsProperties: r },
            search: null != i ? `?store_listing_id=${i}` : "",
        };
    return {
        pathname: null != s && null != o ? T.BVt.CHANNEL(o, s, e) : T.BVt.APPLICATION_STORE_LISTING_SKU(e, a),
        ...l,
    };
}
function C(e, t, n, r) {
    let i,
        a = window.GLOBAL_ENV.CDN_HOST;
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
    "webp" !== r || y || (r = "png");
    let s = "string" == typeof t ? t : t.id,
        o = "https:";
    return (
        (i =
            null != a
                ? `${o}//${a}/app-assets/${e}/store/${s}.${r}`
                : `${o}${window.GLOBAL_ENV.API_ENDPOINT}${T.Rsh.STORE_ASSET(e, s, r)}`),
        null != n && (i += `?size=${(0, f.kr)(n * (0, f.mZ)())}`),
        i
    );
}
function b() {
    return new Promise(async (e) => {
        if (g.A.hasFetchedSubscriptions()) e();
        else if (h.A.isSubscriptionFetching) {
            let t = () => {
                h.A.isSubscriptionFetching ? setTimeout(t, 50) : e();
            };
            t();
        } else await (0, _.hP)(), e();
    });
}
async function N(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = p.default.isAuthenticated();
    if (t && n) {
        let e = [];
        m.A.hasFetchedPaymentSources || e.push(h.A.paymentSourcesFetchRequest ?? (0, _.$o)()),
            h.A.ipCountryCodeLoaded || e.push((0, _.xe)()),
            e.push(b()),
            await Promise.race([Promise.allSettled(e), new Promise((e) => setTimeout(e, 1e4))]);
    }
    let r = m.A.getDefaultBillingCountryCode(),
        i = m.A.defaultPaymentSource?.id ?? null,
        a = g.A.getPremiumTypeSubscription();
    null != a && null != a.paymentSourceId && (i = a.paymentSourceId), null === r && (r = h.A.ipCountryCode ?? null);
    let s = {};
    if ((null != r && (s.country_code = r), null != i && (s.payment_source_id = i), null != r || null != i)) {
        if (
            ("string" == typeof e && (e = { url: e, oldFormErrors: !0, rejectWithError: !1 }),
            "string" == typeof e.query)
        )
            throw Error("string query not supported");
        e.query = { ...s, ...e.query };
    }
    return d.Bo.get(e);
}
function R(e, t, n) {
    let r = t.getApplication(e);
    return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId);
}
function O(e, t, n) {
    let r = n.getNowPlaying(e) ?? {},
        i = I.default
            .keys(r)
            .map((e) => {
                let n = t.getUser(e);
                return null == n ? null : { user: n, startTime: r[n.id].startedPlaying };
            })
            .filter(A.Vq)
            .sort((e, t) => t.startTime - e.startTime);
    return 0 === i.length ? null : { type: T.g_B.NOW_PLAYING, userInfo: i };
}
function D(e, t, n) {
    let r = n.getStatisticsForApplication(e);
    if (null == r) return null;
    let i = r
        .map((e) => {
            let n = t.getUser(e.user_id);
            return null == n ? null : { user: n, endTime: Date.parse(e.last_played_at) };
        })
        .filter(A.Vq)
        .sort((e, t) => t.endTime - e.endTime);
    return 0 === i.length ? null : { type: T.g_B.EVER_PLAYED, userInfo: i };
}
let L = [];
function w(e, t, n, r, a) {
    let s = t.get(e);
    if (null == s) return L;
    let o = s.applicationId,
        l = [],
        u = [],
        c = O(o, n, r);
    null != c &&
        (l.push(c),
        (u = c.userInfo.map((e) => {
            let { user: t } = e;
            return t.id;
        })));
    let d = a.getStatisticsForApplication(o);
    if (null != d) {
        let e = d.map((e) => e.user_id);
        if (i().difference(e, u).length > 0) {
            let e = D(o, n, a);
            null != e && l.push(e);
        }
    }
    return l;
}
let x = [];
function P(e, t, n) {
    let r = t.get(e),
        i = n.getForSKU(e);
    if (null == r || null == i) return x;
    let a = [];
    (0, c.Lt)(r.flags, T.d68.HAS_FREE_PREMIUM_CONTENT) && a.push({ type: T.g_B.HAS_FREE_PREMIUM_CONTENT });
    let o = r.releaseDate;
    return (
        null != o &&
            s()().diff(o, "months") < S &&
            (r.accessType === T.ds3.EARLY_ACCESS
                ? a.push({ type: T.g_B.EARLY_ACCESS, releaseDate: o })
                : a.push({ type: T.g_B.RECENT_RELEASE_DATE, releaseDate: o })),
        null != i.flavorText && a.push({ type: T.g_B.FLAVOR_TEXT, flavorText: i.flavorText }),
        a
    );
}
