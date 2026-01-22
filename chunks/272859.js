n.d(t, {
    d: () => o,
});
var r = n(311907),
    i = n(800342),
    a = n(328968),
    s = n(652215);
let o = (0, r.UT)(a.A, {
    getQueryId: s.fic.STORE_LISTING,
    get: (e) => {
        var t;
        return null != e && null != (t = a.A.getForSKU(e)) ? t : null;
    },
    load: (e) => (null != e ? (0, i.QB)(e) : Promise.resolve()),
    getIsLoading: (e) => null != e && a.A.isFetchingForSKU(e),
});
