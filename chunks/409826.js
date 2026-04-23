"use strict";
n.d(t, { o: () => l, z: () => o });
var r = n(947320),
    i = n(205693),
    s = n(824744),
    a = n(355097);
function o(e, t) {
    let n = t === i.x.STREAM ? r.i.STREAM : r.i.USER;
    return 1 > Math.abs((0, s.M)(n) - (0, s.M)(e)) ? n : e;
}
function l(e) {
    switch (e) {
        case i.x.DEFAULT:
            return a.W.USER;
        case i.x.STREAM:
            return a.W.STREAM;
        default:
            return;
    }
}
