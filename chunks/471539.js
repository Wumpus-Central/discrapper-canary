var i = n(627202),
    r = n(256098),
    a = n(730179),
    s = Math.max,
    o = Math.min;
function l(e, t, n) {
    var l = null == e ? 0 : e.length;
    if (!l) return -1;
    var u = l - 1;
    return void 0 !== n && ((u = a(n)), (u = n < 0 ? s(l + u, 0) : o(u, l - 1))), i(e, r(t, 3), u, !0);
}
e.exports = l;
