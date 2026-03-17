"use strict";
n.d(t, { QB: () => h, YE: () => m, aP: () => g }), n(321073);
var r = n(975975),
    i = n.n(r),
    s = n(607399),
    a = n(562465),
    o = n(384904),
    l = n(776231),
    u = n(961350),
    c = n(615405),
    d = n(295405),
    _ = n(166403),
    f = n(676279);
n(723702);
var p = n(652215);
n(985018), i().shim();
let h = !s.Fr && !s.v1 && -1 !== (0, f.Z5)();
function m(e, t, n, r) {
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
                : `${o}${window.GLOBAL_ENV.API_ENDPOINT}${p.Rsh.STORE_ASSET(e, a, r)}`),
        null != n && (i += `?size=${(0, l.kr)(n * (0, l.mZ)())}`),
        i
    );
}
function E() {
    return new Promise(async (e) => {
        if (_.A.hasFetchedSubscriptions()) e();
        else if (c.A.isSubscriptionFetching) {
            let t = () => {
                c.A.isSubscriptionFetching ? setTimeout(t, 50) : e();
            };
            t();
        } else await (0, o.hP)(), e();
    });
}
async function g(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = u.default.isAuthenticated();
    if (t && n) {
        let e = [];
        d.A.hasFetchedPaymentSources || e.push(c.A.paymentSourcesFetchRequest ?? (0, o.$o)()),
            c.A.ipCountryCodeLoaded || e.push((0, o.xe)()),
            e.push(E()),
            await Promise.race([Promise.allSettled(e), new Promise((e) => setTimeout(e, 1e4))]);
    }
    let r = d.A.getDefaultBillingCountryCode(),
        i = d.A.defaultPaymentSource?.id ?? null,
        s = _.A.getPremiumTypeSubscription();
    null != s && null != s.paymentSourceId && (i = s.paymentSourceId), null === r && (r = c.A.ipCountryCode ?? null);
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
