"use strict";
n.d(t, { A: () => s });
var r = n(430452),
    i = n(731854);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Ay;
    return e.supports(i.O5.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0;
}
