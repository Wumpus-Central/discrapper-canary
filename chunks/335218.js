e.exports = function (e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
    var o = Object.keys(e),
        a = Object.keys(t);
    if (o.length !== a.length) return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
        var c = o[l];
        if (!s(c)) return !1;
        var u = e[c],
            d = t[c];
        if (!1 === (i = n ? n.call(r, u, d, c) : void 0) || (void 0 === i && u !== d)) return !1;
    }
    return !0;
};
