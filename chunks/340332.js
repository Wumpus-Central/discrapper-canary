r.d(n, {
    r: function () {
        return l;
    },
    z: function () {
        return u;
    }
});
var i = r(51407),
    a = r(46973),
    o = r(36703),
    s = r(526761);
function l(e, n) {
    let r = n === a.Yn.STREAM ? i.h.STREAM : i.h.USER;
    return 1 > Math.abs((0, o.P)(r) - (0, o.P)(e)) ? r : e;
}
function u(e) {
    switch (e) {
        case a.Yn.DEFAULT:
            return s.u0.USER;
        case a.Yn.STREAM:
            return s.u0.STREAM;
        default:
            return;
    }
}
