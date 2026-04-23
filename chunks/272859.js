n.d(t, { d: () => s });
var a = n(311907),
    l = n(800342),
    r = n(328968),
    i = n(652215);
let s = (0, a.UT)(r.A, {
    getQueryId: i.fic.STORE_LISTING,
    get: (e) => (null != e ? (r.A.getForSKU(e) ?? null) : null),
    load: (e) => (null != e ? (0, l.QB)(e) : Promise.resolve()),
    getIsLoading: (e) => null != e && r.A.isFetchingForSKU(e),
});
