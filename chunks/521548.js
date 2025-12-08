n.d(t, { w: () => r });
function r(e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var l = Object.keys(e),
        a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(t), c = 0; c < l.length; c++) {
        var s = l[c];
        if (!o(s)) return !1;
        var u = e[s],
            d = t[s];
        if (!1 === (i = n ? n.call(r, u, d, s) : void 0) || (void 0 === i && u !== d)) return !1;
    }
    return !0;
}
