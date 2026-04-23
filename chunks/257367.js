e.d(n, { A: () => s });
var i = e(64700),
    l = e(172218),
    r = e(17928),
    a = e(517164);
function s(t) {
    let { userId: n, onAction: e } = t,
        [s, o] = (0, i.useState)(!1),
        c = (0, r.bG)([a.A], () => a.A.isFetchingUserOutbox(n)),
        u = (0, i.useCallback)(
            (t) => {
                t && (e({ action: "VIEW_ACTIVITY_CARD" }), o(!0));
            },
            [e],
        );
    return (0, l.K)(u, void 0, !c && !s);
}
