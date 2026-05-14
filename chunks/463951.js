"use strict";
n.d(t, { A: () => s });
var i = n(235058),
    r = n(731854);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Ay;
    return e.supports(r.O5.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0;
}
