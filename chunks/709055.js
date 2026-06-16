"use strict";
n.d(t, { A: () => a });
var i = n(723702),
    r = n(19575),
    s = n(567249);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = s.A.getWindow(e);
    null == n || n.closed || (i.isPlatformEmbedded ? r.Ay.focus(e, t) : n.focus());
}
