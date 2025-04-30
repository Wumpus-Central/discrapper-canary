n.d(t, {
    r: () => s,
    z: () => l
});
var r = n(51407),
    i = n(46973),
    o = n(36703),
    a = n(526761);
function s(e, t) {
    let n = t === i.Yn.STREAM ? r.h.STREAM : r.h.USER;
    return 1 > Math.abs((0, o.P)(n) - (0, o.P)(e)) ? n : e;
}
function l(e) {
    switch (e) {
        case i.Yn.DEFAULT:
            return a.u0.USER;
        case i.Yn.STREAM:
            return a.u0.STREAM;
        default:
            return;
    }
}
