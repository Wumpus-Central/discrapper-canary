n.d(t, { Z: () => r });
var i = n(670097);
let r = function (e, t) {
    return function (n, r) {
        if (null == n) return n;
        if (!(0, i.Z)(n)) return e(n, r);
        for (var a = n.length, s = t ? a : -1, o = Object(n); (t ? s-- : ++s < a) && !1 !== r(o[s], s, o); );
        return n;
    };
};
