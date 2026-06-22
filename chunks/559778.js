"use strict";
n.d(t, { Y: () => a });
var i = n(627968);
n(64700);
var r = n(403581),
    s = n(262427);
function a(e) {
    let { Icon: t = r.t, iconSize: n, customGraphic: a, gradientColor: o = "nitro-pink", ...l } = e;
    return (0, i.jsx)(s.J, {
        gradientColor: o,
        ...(null != a ? { customGraphic: a } : { Icon: t, iconSize: n }),
        ...l,
    });
}
