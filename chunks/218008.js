e.exports = function (e, t, n, r) {
    for (var i = -1, a = null == e ? 0 : e.length; ++i < a; ) {
        var s = e[i];
        t(r, s, n(s), e);
    }
    return r;
};
