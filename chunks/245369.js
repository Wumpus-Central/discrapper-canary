r.d(t, { Z: () => o });
var n = r(670097);
let o = function (e, t) {
    return function (r, o) {
        if (null == r) return r;
        if (!(0, n.Z)(r)) return e(r, o);
        for (var a = r.length, i = t ? a : -1, l = Object(r); (t ? i-- : ++i < a) && !1 !== o(l[i], i, l); );
        return r;
    };
};
