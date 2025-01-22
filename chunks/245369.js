var i = r(670097);
function a(e, n) {
    return function (r, a) {
        if (null == r) return r;
        if (!(0, i.Z)(r)) return e(r, a);
        for (var o = r.length, s = n ? o : -1, l = Object(r); (n ? s-- : ++s < o) && !1 !== a(l[s], s, l); );
        return r;
    };
}
n.Z = a;
