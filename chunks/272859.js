n.d(t, { d: () => i });
var l = n(311907),
    a = n(800342),
    r = n(328968),
    s = n(652215);
let i = (0, l.UT)(r.A, {
    getQueryId: s.fic.STORE_LISTING,
    get: (e) => (null != e ? (r.A.getForSKU(e) ?? null) : null),
    load: (e) => (null != e ? (0, a.QB)(e) : Promise.resolve()),
    getIsLoading: (e) => null != e && r.A.isFetchingForSKU(e),
});
