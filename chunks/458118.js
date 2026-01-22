var r = n(964598),
    i = n(876666),
    a = n(89582),
    s = Math.max,
    o = Math.min;
e.exports = function (e, t, n) {
    var l = null == e ? 0 : e.length;
    if (!l) return -1;
    var c = l - 1;
    return void 0 !== n && ((c = a(n)), (c = n < 0 ? s(l + c, 0) : o(c, l - 1))), r(e, i(t, 3), c, !0);
};
