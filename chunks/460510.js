e.exports = function (e, t, n) {
    for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) if (n(t, e[r])) return !0;
    return !1;
};
