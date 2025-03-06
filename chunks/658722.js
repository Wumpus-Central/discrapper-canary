function t(e, t) {
    var n = t.length,
        r = e.length;
    if (r > n) return !1;
    if (r === n) return e === t;
    n: for (var i = 0, o = 0; i < r; i++) {
        for (var a = e.charCodeAt(i); o < n; ) if (t.charCodeAt(o++) === a) continue n;
        return !1;
    }
    return !0;
}
e.exports = t;
