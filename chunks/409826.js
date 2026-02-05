"use strict";
n.d(t, { o: () => l, z: () => o });
var r = n(947320),
    i = n(205693),
    a = n(824744),
    s = n(355097);
function o(e, t) {
    let n = t === i.x.STREAM ? r.i.STREAM : r.i.USER;
    return 1 > Math.abs((0, a.M)(n) - (0, a.M)(e)) ? n : e;
}
function l(e) {
    switch (e) {
        case i.x.DEFAULT:
            return s.W.USER;
        case i.x.STREAM:
            return s.W.STREAM;
        default:
            return;
    }
}
