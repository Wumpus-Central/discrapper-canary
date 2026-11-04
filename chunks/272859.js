var e = t(855986),
    i = t(800342),
    n = t(328968),
    r = t(652215);
let a = (0, e.UT)(n.A, {
    getQueryId: r.fic.STORE_LISTING,
    get: (s) => (null != s ? (n.A.getForSKU(s) ?? null) : null),
    load: (s) => (null != s ? (0, i.QB)(s) : Promise.resolve()),
    getIsLoading: (s) => null != s && n.A.isFetchingForSKU(s),
});
t.d(l, {}, { d: a });
