"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(172218),
    a = n(17928),
    s = n(517164);
function l(e) {
    let { userId: t, onAction: n } = e,
        [l, o] = (0, i.useState)(!1),
        d = (0, a.bG)([s.A], () => s.A.isFetchingUserOutbox(t)),
        c = (0, i.useCallback)(
            (e) => {
                e && (n({ action: "VIEW_ACTIVITY_CARD" }), o(!0));
            },
            [n],
        );
    return (0, r.K)(c, void 0, !d && !l);
}
