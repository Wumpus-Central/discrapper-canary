n.d(t, {
    r: () => o,
    z: () => l
});
var i = n(51407),
    r = n(46973),
    a = n(36703),
    s = n(526761);
function o(e, t) {
    let n = t === r.Yn.STREAM ? i.h.STREAM : i.h.USER;
    return 1 > Math.abs((0, a.P)(n) - (0, a.P)(e)) ? n : e;
}
function l(e) {
    switch (e) {
        case r.Yn.DEFAULT:
            return s.u0.USER;
        case r.Yn.STREAM:
            return s.u0.STREAM;
        default:
            return;
    }
}
