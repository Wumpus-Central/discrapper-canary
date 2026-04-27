"use strict";
r.d(t, { A: () => l });
var n = r(503698),
    i = r.n(n),
    a = r(77157);
function l(e) {
    let t = (0, a.A)(e);
    return i()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": t?.layers.some((e) => {
            let { type: t, anchor: r } = e;
            return "staple" === t && "bottom" === r;
        }),
    });
}
