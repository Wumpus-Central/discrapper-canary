var r = a(620014),
    n = a(733892);
t.exports = function (t, e, a, o) {
    var _ = a.length,
        i = _,
        c = !o;
    if (null == t) return !i;
    for (t = Object(t); _--; ) {
        var s = a[_];
        if (c && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
    }
    for (; ++_ < i; ) {
        var E = (s = a[_])[0],
            l = t[E],
            u = s[1];
        if (c && s[2]) {
            if (void 0 === l && !(E in t)) return !1;
        } else {
            var I = new r();
            if (o) var R = o(l, u, E, t, e, I);
            if (!(void 0 === R ? n(u, l, 3, o, I) : R)) return !1;
        }
    }
    return !0;
};
