n.d(t, { Z: () => s }), n(388685);
var r = n(73800),
    i = n(442837),
    a = n(434650),
    o = n(353647);
function s(e) {
    let { userId: t, onAction: n } = e,
        [s, l] = (0, r.useState)(!1),
        c = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t)),
        u = (0, r.useCallback)(
            (e) => {
                e && (n({ action: 'VIEW' }), l(!0));
            },
            [n]
        );
    return (0, a.O)(u, void 0, !c && !s);
}
