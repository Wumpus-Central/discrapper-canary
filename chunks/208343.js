"use strict";
n.d(t, { A: () => a });
var i = n(17928),
    r = n(531685),
    s = n(3137);
function a(e) {
    let t = (0, i.bG)([r.A], () => r.A.isFocused());
    return (0, i.bG)([s.A], () => (s.A.isEnabled({ shakeLocation: e }) && t ? s.A.shakeIntensity : 0));
}
