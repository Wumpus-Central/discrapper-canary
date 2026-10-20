(n.d(t, { QB: () => f, YE: () => I, aP: () => m, rW: () => T }), n(321073));
var i = n(975975),
    r = n.n(i),
    a = n(607399),
    s = n(636537),
    l = n(499979),
    o = n(277984),
    d = n(776231),
    c = n(280450),
    u = n(615405),
    _ = n(295405),
    E = n(166403),
    A = n(676279);
n(723702);
var h = n(652215);
(n(105292), r().shim());
let f = !a.Fr && !a.v1 && -1 !== (0, A.Z5)();
function I(e, t, n, i) {
    let r,
        a = window.GLOBAL_ENV.CDN_HOST;
    if (null == i)
        switch (
            (function (e) {
                if ("string" != typeof e) return "mimeType" in e ? e.mimeType : e.mime_type;
            })(t)
        ) {
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
    "webp" !== i || f || (i = "png");
    let s = "string" == typeof t ? t : t.id,
        l = "https:";
    return (
        (r =
            null != a
                ? `${l}//${a}/app-assets/${e}/store/${s}.${i}`
                : `${l}${window.GLOBAL_ENV.API_ENDPOINT}${h.Rsh.STORE_ASSET(e, s, i)}`),
        null != n && (r += `?size=${(0, d.kr)(n * (0, d.mZ)())}`),
        r
    );
}
async function p() {
    if (!E.A.hasFetchedSubscriptions()) {
        if (!u.A.isSubscriptionFetching) return void (await (0, o.hP)());
        for (; u.A.isSubscriptionFetching;) await (0, l.yy)(50);
    }
}
function T() {
    let e = [];
    return (
        _.A.hasFetchedPaymentSources || e.push(u.A.paymentSourcesFetchRequest ?? (0, o.$o)()),
        u.A.ipCountryCodeLoaded || e.push((0, o.xe)()),
        e.push(p()),
        Promise.allSettled(e)
    );
}
async function m(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && c.default.isAuthenticated() && (await Promise.race([T(), new Promise((e) => setTimeout(e, 1e4))]));
    let n = _.A.getDefaultBillingCountryCode(),
        i = _.A.defaultPaymentSource?.id ?? null,
        r = E.A.getPremiumTypeSubscription();
    (null != r && null != r.paymentSourceId && (i = r.paymentSourceId), null === n && (n = u.A.ipCountryCode ?? null));
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
