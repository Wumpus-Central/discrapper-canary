n.d(t, { Z: () => o }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(434650),
    s = n(353647);
function o(e) {
    let { userId: t, onAction: n } = e,
        [o, l] = (0, i.useState)(!1),
        u = (0, r.e7)([s.Z], () => s.Z.isFetchingUserOutbox(t)),
        c = (0, i.useCallback)(
            (e) => {
                e && (n({ action: 'VIEW' }), l(!0));
            },
            [n]
        );
    return (0, a.O)(c, void 0, !u && !o);
}
