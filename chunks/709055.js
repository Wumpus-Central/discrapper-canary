"use strict";
n.d(t, { A: () => a });
var r = n(723702),
    i = n(837921),
    s = n(87001);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = s.A.getWindow(e);
    null == n || n.closed || (r.isPlatformEmbedded ? i.Ay.focus(e, t) : n.focus());
}
