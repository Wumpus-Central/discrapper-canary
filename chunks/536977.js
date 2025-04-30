var r = n(771701);
e.exports = function (e, t) {
    return function (n, i) {
        if (null == n) return n;
        if (!r(n)) return e(n, i);
        for (var o = n.length, a = t ? o : -1, s = Object(n); (t ? a-- : ++a < o) && !1 !== i(s[a], a, s); );
        return n;
    };
};
