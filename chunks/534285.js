e.exports = function (e, t, n, r) {
    for (var i = -1, s = null == e ? 0 : e.length; ++i < s; ) {
        var a = e[i];
        t(r, a, n(a), e);
    }
    return r;
};
