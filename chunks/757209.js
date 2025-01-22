var i = r(703284),
    a = r(771701),
    o = r(830911),
    s = r(706627);
function l(e, n, r) {
    if (!s(r)) return !1;
    var l = typeof n;
    return ('number' == l ? !!(a(r) && o(n, r.length)) : 'string' == l && n in r) && i(r[n], e);
}
e.exports = l;
