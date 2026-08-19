"use strict";
n.d(t, { A: () => a });
var i = n(453028),
    r = n(731854);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Ay;
    return e.supports(r.O5.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0;
}
