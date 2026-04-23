n.d(t, { o: () => l, z: () => _ });
var i = n(947320),
    r = n(205693),
    a = n(824744),
    s = n(355097);
function _(e, t) {
    let n = t === r.x.STREAM ? i.i.STREAM : i.i.USER;
    return 1 > Math.abs((0, a.M)(n) - (0, a.M)(e)) ? n : e;
}
function l(e) {
    switch (e) {
        case r.x.DEFAULT:
            return s.W.USER;
        case r.x.STREAM:
            return s.W.STREAM;
        default:
            return;
    }
}
