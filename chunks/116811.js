"use strict";
n.d(t, { A: () => o });
var r = n(643479),
    i = n(801765),
    a = n(105423);
let s = 27,
    o = { read: l, SHOT_INFO_AUTO_ROTATE: 27 };
function l(e, t, n, s, o) {
    let l = (0, i.y)(e, a.lt, t, t + n, s, o);
    return l.ShotInfo && ((l = (0, r.dP)({}, l, u(l.ShotInfo.value))), delete l.ShotInfo), l;
}
function u(e) {
    let t = {};
    return void 0 !== e[s] && (t.AutoRotate = { value: e[s], description: c(e[s]) }), t;
}
function c(e) {
    return 0 === e ? "None" : 1 === e ? "Rotate 90 CW" : 2 === e ? "Rotate 180" : 3 === e ? "Rotate 270 CW" : "Unknown";
}
