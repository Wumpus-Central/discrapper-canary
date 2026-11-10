n(321073);
var i = n(607399),
    r = n(620632),
    a = n(499979),
    s = n(669815),
    l = n(776231),
    o = n(46653),
    d = n(615405),
    c = n(295405),
    u = n(166403),
    _ = n(676279);
n(723702);
var E = n(652215);
n(792996);
let A = !i.Fr && !i.v1 && -1 !== (0, _.Z5)();
function f() {
    let e = [];
    return (
        c.A.hasFetchedPaymentSources || e.push(d.A.paymentSourcesFetchRequest ?? (0, s.$o)()),
        d.A.ipCountryCodeLoaded || e.push((0, s.xe)()),
        e.push(
            (async function () {
                if (!u.A.hasFetchedSubscriptions()) {
                    if (!d.A.isSubscriptionFetching) return void (await (0, s.hP)());
                    for (; d.A.isSubscriptionFetching;) await (0, a.yy)(50);
                }
            })(),
        ),
        Promise.allSettled(e)
    );
}
n.d(
    t,
    {},
    {
        QB: A,
        YE: function (e, t, n, i) {
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
            "webp" !== i || A || (i = "png");
            let s = "string" == typeof t ? t : t.id,
                o = "https:";
            return (
                (r =
                    null != a
                        ? `${o}//${a}/app-assets/${e}/store/${s}.${i}`
                        : `${o}${window.GLOBAL_ENV.API_ENDPOINT}${E.Rsh.STORE_ASSET(e, s, i)}`),
                null != n && (r += `?size=${(0, l.kr)(n * (0, l.mZ)())}`),
                r
            );
        },
        aP: async function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            t && o.default.isAuthenticated() && (await Promise.race([f(), new Promise((e) => setTimeout(e, 1e4))]));
            let n = c.A.getDefaultBillingCountryCode(),
                i = c.A.defaultPaymentSource?.id ?? null,
                a = u.A.getPremiumTypeSubscription();
            (null != a && null != a.paymentSourceId && (i = a.paymentSourceId),
                null === n && (n = d.A.ipCountryCode ?? null));
            let s = {};
            if ((null != n && (s.country_code = n), null != i && (s.payment_source_id = i), null != n || null != i)) {
                if (
                    ("string" == typeof e && (e = { url: e, oldFormErrors: !0, rejectWithError: !1 }),
                    "string" == typeof e.query)
                )
                    throw Error("string query not supported");
                e.query = { ...s, ...e.query };
            }
            return r.Bo.get(e);
        },
        rW: f,
    },
);
