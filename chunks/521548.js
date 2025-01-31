function r(e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
    var o = Object.keys(e),
        a = Object.keys(t);
    if (o.length !== a.length) return !1;
    for (var u = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
        var s = o[c];
        if (!u(s)) return !1;
        var l = e[s],
            f = t[s];
        if (!1 === (i = n ? n.call(r, l, f, s) : void 0) || (void 0 === i && l !== f)) return !1;
    }
    return !0;
}
n.d(t, { w: () => r });
