var i = r(176338),
    a = r(675717),
    o = '[object AsyncFunction]',
    s = '[object Function]',
    l = '[object GeneratorFunction]',
    u = '[object Proxy]';
function c(e) {
    if (!(0, a.Z)(e)) return !1;
    var n = (0, i.Z)(e);
    return n == s || n == l || n == o || n == u;
}
n.Z = c;
