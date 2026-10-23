n.d(t, { Yf: () => o, kK: () => d });
var i = n(121401),
    r = n(909338),
    a = n(403362),
    s = n(167189);
let l = new Set([
    s.I.APP_DIRECTORY_PROFILE,
    s.I.ACTIVITY_BOOKMARK,
    s.I.APP_DIRECTORY_STOREFRONT,
    s.I.APP_DIRECTORY_STOREFRONT_SKU,
    s.I.APP_OAUTH2_LINK,
]);
function o(e) {
    return (0, a.Eo)(e, l);
}
function d(e, t, n) {
    switch (e) {
        case s.I.APP_DIRECTORY_PROFILE:
        case s.I.APP_OAUTH2_LINK:
        case s.I.APP_DIRECTORY_STOREFRONT:
            return { type: e, applicationId: t };
        case s.I.APP_DIRECTORY_STOREFRONT_SKU: {
            let n = (0, i.u)(t);
            if (null == n) return null;
            let { applicationId: r, skuId: a } = n;
            return { type: e, applicationId: r, skuId: a };
        }
        case s.I.ACTIVITY_BOOKMARK:
            return { type: e, applicationId: t, params: (0, r.N)(n) };
    }
}
(s.I.APP_DIRECTORY_PROFILE, s.I.ACTIVITY_BOOKMARK, s.I.APP_OAUTH2_LINK);
