function n(t, e, i, n) {
    var r = i ? i.call(n, t, e) : void 0;
    if (void 0 !== r) return !!r;
    if (t === e) return !0;
    if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
    var a = Object.keys(t),
        s = Object.keys(e);
    if (a.length !== s.length) return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(e), h = 0; h < a.length; h++) {
        var l = a[h];
        if (!o(l)) return !1;
        var c = t[l],
            u = e[l];
        if (!1 === (r = i ? i.call(n, c, u, l) : void 0) || (void 0 === r && c !== u)) return !1;
    }
    return !0;
}
i.d(e, { w: () => n });
