n.d(t, {
    x: function () {
        return o;
    }
});
var i = n(192379),
    r = n(442837),
    s = n(384275),
    a = n(881998),
    l = n(372460);
function o(e) {
    let { location: t } = e,
        n = (0, l.wn)({ location: t }),
        o = (0, r.e7)([a.Z], () => a.Z.getFetchState() !== a.M.NOT_FETCHED);
    return i.useCallback(() => {
        !o && n && s.Z.fetch();
    }, [o, n]);
}
