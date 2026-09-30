(n.d(t, { QB: () => h, YE: () => I, aP: () => p, rW: () => f }), n(321073));
var i = n(975975),
    r = n.n(i),
    a = n(607399),
    s = n(636537),
    l = n(277984),
    o = n(776231),
    d = n(280450),
    c = n(615405),
    u = n(295405),
    _ = n(166403),
    E = n(676279);
n(723702);
var A = n(652215);
(n(375708), r().shim());
let h = !a.Fr && !a.v1 && -1 !== (0, E.Z5)();
function I(e, t, n, i) {
    let r,
        a = window.GLOBAL_ENV.CDN_HOST;
    if (null == i)
        switch (t.mimeType || t.mime_type) {
            case "video/quicktime":
            case "video/mp4":
                i = "mp4";
                break;
            case "image/gif":
                i = "gif";
                break;
            default:
                i = "webp";
        }
    "webp" !== i || h || (i = "png");
    let s = "string" == typeof t ? t : t.id,
        l = "https:";
    return (
        (r =
            null != a
                ? `${l}//${a}/app-assets/${e}/store/${s}.${i}`
                : `${l}${window.GLOBAL_ENV.API_ENDPOINT}${A.Rsh.STORE_ASSET(e, s, i)}`),
        null != n && (r += `?size=${(0, o.kr)(n * (0, o.mZ)())}`),
        r
    );
}
function f() {
    let e = [];
    return (
        u.A.hasFetchedPaymentSources || e.push(c.A.paymentSourcesFetchRequest ?? (0, l.$o)()),
        c.A.ipCountryCodeLoaded || e.push((0, l.xe)()),
        e.push(
            new Promise(async (e) => {
                _.A.hasFetchedSubscriptions()
                    ? e()
                    : c.A.isSubscriptionFetching
                      ? (function t() {
                            c.A.isSubscriptionFetching ? setTimeout(t, 50) : e();
                        })()
                      : (await (0, l.hP)(), e());
            }),
        ),
        Promise.allSettled(e)
    );
}
async function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && d.default.isAuthenticated() && (await Promise.race([f(), new Promise((e) => setTimeout(e, 1e4))]));
    let n = u.A.getDefaultBillingCountryCode(),
        i = u.A.defaultPaymentSource?.id ?? null,
        r = _.A.getPremiumTypeSubscription();
    (null != r && null != r.paymentSourceId && (i = r.paymentSourceId), null === n && (n = c.A.ipCountryCode ?? null));
    let a = {};
    if ((null != n && (a.country_code = n), null != i && (a.payment_source_id = i), null != n || null != i)) {
        if (
            ("string" == typeof e && (e = { url: e, oldFormErrors: !0, rejectWithError: !1 }),
            "string" == typeof e.query)
        )
            throw Error("string query not supported");
        e.query = { ...a, ...e.query };
    }
    return s.Bo.get(e);
}
