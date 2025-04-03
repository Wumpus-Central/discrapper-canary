e.exports = function (e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); );
    return e;
};
