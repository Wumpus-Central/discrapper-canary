var i = n(964598),
    r = n(876666),
    s = n(89582),
    a = Math.max,
    o = Math.min;
e.exports = function (e, t, n) {
    var l = null == e ? 0 : e.length;
    if (!l) return -1;
    var u = l - 1;
    return void 0 !== n && ((u = s(n)), (u = n < 0 ? a(l + u, 0) : o(u, l - 1))), i(e, r(t, 3), u, !0);
};
