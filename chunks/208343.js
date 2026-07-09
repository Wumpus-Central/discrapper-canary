"use strict";
n.d(t, { A: () => s });
var i = n(17928),
    r = n(531685),
    a = n(3137);
function s(e) {
    let t = (0, i.bG)([r.A], () => r.A.isFocused());
    return (0, i.bG)([a.A], () => (a.A.isEnabled({ shakeLocation: e }) && t ? a.A.shakeIntensity : 0));
}
