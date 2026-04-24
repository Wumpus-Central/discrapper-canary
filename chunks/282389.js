"use strict";
n.d(t, { A: () => r });
var a = n(503698),
    i = n.n(a),
    l = n(77157);
function r(e) {
    let t = (0, l.A)(e);
    return i()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": t?.layers.some((e) => {
            let { type: t, anchor: n } = e;
            return "staple" === t && "bottom" === n;
        }),
    });
}
