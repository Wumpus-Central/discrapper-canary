"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(172218),
    s = n(17928),
    a = n(517164);
function o(e) {
    let { userId: t, onAction: n } = e,
        [o, l] = (0, i.useState)(!1),
        u = (0, s.bG)([a.A], () => a.A.isFetchingUserOutbox(t)),
        c = (0, i.useCallback)(
            (e) => {
                e && (n({ action: "VIEW_ACTIVITY_CARD" }), l(!0));
            },
            [n],
        );
    return (0, r.K)(c, void 0, !u && !o);
}
