var r = n(752909);
e.exports = function (e, t) {
    return function (n, i) {
        if (null == n) return n;
        if (!r(n)) return e(n, i);
        for (var a = n.length, s = t ? a : -1, o = Object(n); (t ? s-- : ++s < a) && !1 !== i(o[s], s, o); );
        return n;
    };
};
