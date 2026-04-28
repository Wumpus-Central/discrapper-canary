"use strict";
n.d(t, { A: () => l });
var r = n(503698),
    a = n.n(r),
    i = n(77157);
function l(e) {
    let t = (0, i.A)(e);
    return a()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": t?.layers.some((e) => {
            let { type: t, anchor: n } = e;
            return "staple" === t && "bottom" === n;
        }),
    });
}
