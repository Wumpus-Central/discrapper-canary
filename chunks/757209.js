var r = n(703284),
    i = n(771701),
    a = n(830911),
    o = n(706627);
e.exports = function (e, t, n) {
    if (!o(n)) return !1;
    var s = typeof t;
    return ('number' == s ? !!(i(n) && a(t, n.length)) : 'string' == s && t in n) && r(n[t], e);
};
