"use strict";
n.d(t, { Ay: () => _, nY: () => u });
var i,
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(775602),
    d = n(454290),
    c = n(849610),
    u = (((i = {}).DEFAULT = "DEFAULT"), (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (i.PINNED = "PINNED"), i);
let _ = r.memo(function (e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: i } = (0, d.Q)(),
        r = (0, l.bG)([o.Ay], () => o.Ay.keyboardModeEnabled);
    return t(s()(c.E3, { [c.R]: i && !r && "PINNED" !== n, [c.rB]: "FOCUS_SENSITIVE" === n }));
});
