l.d(t, { d: () => a });
var e = l(17928),
    i = l(800342),
    n = l(328968),
    r = l(652215);
let a = (0, e.UT)(n.A, {
    getQueryId: r.fic.STORE_LISTING,
    get: (s) => (null != s ? (n.A.getForSKU(s) ?? null) : null),
    load: (s) => (null != s ? (0, i.QB)(s) : Promise.resolve()),
    getIsLoading: (s) => null != s && n.A.isFetchingForSKU(s),
});
