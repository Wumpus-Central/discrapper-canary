n.d(e, { A: () => s });
var l = n(582128),
    i = n(172218),
    a = n(17928),
    r = n(517164);
function s(t) {
    let { userId: e, onAction: n } = t,
        [s, o] = (0, l.useState)(!1),
        c = (0, a.bG)([r.A], () => r.A.isFetchingUserOutbox(e)),
        u = (0, l.useCallback)(
            (t) => {
                t && (n({ action: "VIEW_ACTIVITY_CARD" }), o(!0));
            },
            [n],
        );
    return (0, i.K)(u, void 0, !c && !s);
}
