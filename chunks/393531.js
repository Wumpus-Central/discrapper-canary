t.exports = function (t, e) {
    for (var a = -1, r = null == t ? 0 : t.length; ++a < r; ) if (e(t[a], a, t)) return !0;
    return !1;
};
