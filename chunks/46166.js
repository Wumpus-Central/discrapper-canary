var r = a(620014),
    n = a(733892);
t.exports = function (t, e, a, _) {
    var o = a.length,
        i = o,
        c = !_;
    if (null == t) return !i;
    for (t = Object(t); o--; ) {
        var s = a[o];
        if (c && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
    }
    for (; ++o < i; ) {
        var E = (s = a[o])[0],
            l = t[E],
            u = s[1];
        if (c && s[2]) {
            if (void 0 === l && !(E in t)) return !1;
        } else {
            var I = new r();
            if (_) var R = _(l, u, E, t, e, I);
            if (!(void 0 === R ? n(u, l, 3, _, I) : R)) return !1;
        }
    }
    return !0;
};
