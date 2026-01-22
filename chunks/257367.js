n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(64700),
    i = n(172218),
    a = n(311907),
    s = n(517164);

function o(e) {
    let { userId: t, onAction: n } = e,
        [o, l] = (0, r.useState)(!1),
        c = (0, a.bG)([s.A], () => s.A.isFetchingUserOutbox(t)),
        u = (0, r.useCallback)(
            (e) => {
                e &&
                    (n({
                        action: "VIEW_ACTIVITY_CARD",
                    }),
                    l(!0));
            },
            [n],
        );
    return (0, i.K)(u, void 0, !c && !o);
}
