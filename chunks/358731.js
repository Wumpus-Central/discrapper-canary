"use strict";
n.d(t, { Ay: () => _, nY: () => c });
var r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(775602),
    l = n(454290),
    u = n(422362),
    c = (function (e) {
        return (e.DEFAULT = "DEFAULT"), (e.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (e.PINNED = "PINNED"), e;
    })({});
function d(e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: r } = (0, l.Q)(),
        i = (0, a.bG)([o.A], () => o.A.keyboardModeEnabled);
    return t(s()(u.E3, { [u.R]: r && !i && "PINNED" !== n, [u.rB]: "FOCUS_SENSITIVE" === n }));
}
let _ = r.memo(d);
