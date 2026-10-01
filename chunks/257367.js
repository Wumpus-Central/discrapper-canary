e.d(n, { A: () => s });
var l = e(582128),
    i = e(172218),
    r = e(17928),
    a = e(517164);
function s(t) {
    let { userId: n, onAction: e } = t,
        [s, o] = (0, l.useState)(!1),
        c = (0, r.bG)([a.A], () => a.A.isFetchingUserOutbox(n)),
        u = (0, l.useCallback)(
            (t) => {
                t && (e({ action: "VIEW_ACTIVITY_CARD" }), o(!0));
            },
            [e],
        );
    return (0, i.K)(u, void 0, !c && !s);
}
