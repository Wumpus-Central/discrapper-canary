"use strict";
n.d(t, { o: () => l, z: () => o });
var i = n(947320),
    r = n(459838),
    s = n(824744),
    a = n(355097);
function o(e, t) {
    let n = t === r.x.STREAM ? i.i.STREAM : i.i.USER;
    return 1 > Math.abs((0, s.M)(n) - (0, s.M)(e)) ? n : e;
}
function l(e) {
    switch (e) {
        case r.x.DEFAULT:
            return a.W.USER;
        case r.x.STREAM:
            return a.W.STREAM;
        default:
            return;
    }
}
