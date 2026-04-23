l.d(e, { d: () => a });
var n = l(17928),
    r = l(800342),
    s = l(328968),
    i = l(652215);
let a = (0, n.UT)(s.A, {
    getQueryId: i.fic.STORE_LISTING,
    get: (t) => (null != t ? (s.A.getForSKU(t) ?? null) : null),
    load: (t) => (null != t ? (0, r.QB)(t) : Promise.resolve()),
    getIsLoading: (t) => null != t && s.A.isFetchingForSKU(t),
});
