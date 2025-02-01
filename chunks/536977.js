var i = n(771701);
function r(e, t) {
    return function (n, r) {
        if (null == n) return n;
        if (!i(n)) return e(n, r);
        for (var a = n.length, s = t ? a : -1, o = Object(n); (t ? s-- : ++s < a) && !1 !== r(o[s], s, o); );
        return n;
    };
}
e.exports = r;
