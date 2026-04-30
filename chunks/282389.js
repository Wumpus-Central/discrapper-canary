"use strict";
n.d(t, { A: () => a });
var i = n(503698),
    r = n.n(i),
    s = n(77157);
function a(e) {
    let t = (0, s.A)(e);
    return r()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": t?.layers.some((e) => {
            let { type: t, anchor: n } = e;
            return "staple" === t && "bottom" === n;
        }),
    });
}
