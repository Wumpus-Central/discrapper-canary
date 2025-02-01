var i = n(703284),
    r = n(771701),
    a = n(830911),
    s = n(706627);
function o(e, t, n) {
    if (!s(n)) return !1;
    var o = typeof t;
    return ('number' == o ? !!(r(n) && a(t, n.length)) : 'string' == o && t in n) && i(n[t], e);
}
e.exports = o;
