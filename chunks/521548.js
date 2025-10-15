function r(e, n, t, r) {
    var i = t ? t.call(r, e, n) : void 0;
    if (void 0 !== i) return !!i;
    if (e === n) return !0;
    if ("object" != typeof e || !e || "object" != typeof n || !n) return !1;
    var a = Object.keys(e),
        o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (var c = Object.prototype.hasOwnProperty.bind(n), s = 0; s < a.length; s++) {
        var l = a[s];
        if (!c(l)) return !1;
        var u = e[l],
            d = n[l];
        if (!1 === (i = t ? t.call(r, u, d, l) : void 0) || (void 0 === i && u !== d)) return !1;
    }
    return !0;
}
t.d(n, { w: () => r });
