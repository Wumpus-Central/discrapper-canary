var r = n(627202),
    i = n(256098),
    o = n(730179),
    a = Math.max,
    s = Math.min;
e.exports = function (e, t, n) {
    var l = null == e ? 0 : e.length;
    if (!l) return -1;
    var c = l - 1;
    return void 0 !== n && ((c = o(n)), (c = n < 0 ? a(l + c, 0) : s(c, l - 1))), r(e, i(t, 3), c, !0);
};
