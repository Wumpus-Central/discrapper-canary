var r = n(815329),
    i = n(699367),
    o = n(243647),
    a = n(744145),
    s = n(883367),
    l = n(163567),
    c = n(414235),
    u = n(511389),
    d = n(951575);
e.exports = function (e, t, n) {
    if (!d(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!l(t)) throw new r('Assertion failed: P is not a Property Key');
    var f = i(n) ? n : u(n);
    if (!i(f)) throw new r('Assertion failed: Desc is not a valid Property Descriptor');
    return o(s, c, a, e, t, f);
};
