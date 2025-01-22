r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(434650),
    l = r(353647);
function u(e) {
    let { userId: n, onAction: r } = e,
        [i, u] = (0, a.useState)(!1),
        c = (0, o.e7)([l.Z], () => l.Z.isFetchingUserOutbox(n)),
        d = (0, a.useCallback)(
            (e) => {
                e && (r({ action: 'VIEW' }), u(!0));
            },
            [r]
        );
    return (0, s.O)(d, void 0, !c && !i);
}
