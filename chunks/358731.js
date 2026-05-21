"use strict";
n.d(t, { Ay: () => _, nY: () => d });
var i,
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(775602),
    u = n(454290),
    c = n(555530),
    d = (((i = {}).DEFAULT = "DEFAULT"), (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (i.PINNED = "PINNED"), i);
let _ = r.memo(function (e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: i } = (0, u.Q)(),
        r = (0, o.bG)([l.A], () => l.A.keyboardModeEnabled);
    return t(a()(c.E3, { [c.R]: i && !r && "PINNED" !== n, [c.rB]: "FOCUS_SENSITIVE" === n }));
});
