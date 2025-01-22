e.exports = function (e, n, r, i) {
    var a = r ? r.call(i, e, n) : void 0;
    if (void 0 !== a) return !!a;
    if (e === n) return !0;
    if ('object' != typeof e || !e || 'object' != typeof n || !n) return !1;
    var o = Object.keys(e),
        s = Object.keys(n);
    if (o.length !== s.length) return !1;
    for (var l = Object.prototype.hasOwnProperty.bind(n), u = 0; u < o.length; u++) {
        var c = o[u];
        if (!l(c)) return !1;
        var d = e[c],
            f = n[c];
        if (!1 === (a = r ? r.call(i, d, f, c) : void 0) || (void 0 === a && d !== f)) return !1;
    }
    return !0;
};
