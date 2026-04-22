"use strict";
n.d(t, { QB: () => h, YE: () => p, aP: () => m }), n(321073);
var r = n(975975),
    i = n.n(r),
    s = n(607399),
    a = n(562465),
    o = n(323082),
    l = n(776231),
    u = n(961350),
    d = n(615405),
    c = n(295405),
    _ = n(166403),
    f = n(676279);
n(723702);
var E = n(652215);
n(985018), i().shim();
let h = !s.Fr && !s.v1 && -1 !== (0, f.Z5)();
function p(e, t, n, r) {
    let i,
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
    "webp" !== r || h || (r = "png");
    let a = "string" == typeof t ? t : t.id,
        o = "https:";
    return (
        (i =
            null != s
                ? `${o}//${s}/app-assets/${e}/store/${a}.${r}`
                : `${o}${window.GLOBAL_ENV.API_ENDPOINT}${E.Rsh.STORE_ASSET(e, a, r)}`),
        null != n && (i += `?size=${(0, l.kr)(n * (0, l.mZ)())}`),
        i
    );
}
async function m(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = u.default.isAuthenticated();
    if (t && n) {
        let e = [];
        c.A.hasFetchedPaymentSources || e.push(d.A.paymentSourcesFetchRequest ?? (0, o.$o)()),
            d.A.ipCountryCodeLoaded || e.push((0, o.xe)()),
            e.push(
                new Promise(async (e) => {
                    if (_.A.hasFetchedSubscriptions()) e();
                    else if (d.A.isSubscriptionFetching) {
                        let t = () => {
                            d.A.isSubscriptionFetching ? setTimeout(t, 50) : e();
                        };
                        t();
                    } else await (0, o.hP)(), e();
                }),
            ),
            await Promise.race([Promise.allSettled(e), new Promise((e) => setTimeout(e, 1e4))]);
    }
    let r = c.A.getDefaultBillingCountryCode(),
        i = c.A.defaultPaymentSource?.id ?? null,
        s = _.A.getPremiumTypeSubscription();
    null != s && null != s.paymentSourceId && (i = s.paymentSourceId), null === r && (r = d.A.ipCountryCode ?? null);
    let l = {};
    if ((null != r && (l.country_code = r), null != i && (l.payment_source_id = i), null != r || null != i)) {
        if (
            ("string" == typeof e && (e = { url: e, oldFormErrors: !0, rejectWithError: !1 }),
            "string" == typeof e.query)
        )
            throw Error("string query not supported");
        e.query = { ...l, ...e.query };
    }
    return a.Bo.get(e);
}
