n.d(t, { o: () => o, z: () => l });
var i = n(947320),
    a = n(205693),
    r = n(824744),
    s = n(355097);
function l(e, t) {
    let n = t === a.x.STREAM ? i.i.STREAM : i.i.USER;
    return 1 > Math.abs((0, r.M)(n) - (0, r.M)(e)) ? n : e;
}
function o(e) {
    switch (e) {
        case a.x.DEFAULT:
            return s.W.USER;
        case a.x.STREAM:
            return s.W.STREAM;
        default:
            return;
    }
}
