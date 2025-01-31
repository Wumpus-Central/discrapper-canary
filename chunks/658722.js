function t(e, t) {
    var n = t.length,
        i = e.length;
    if (i > n) return !1;
    if (i === n) return e === t;
    t: for (var r = 0, a = 0; r < i; r++) {
        for (var s = e.charCodeAt(r); a < n; ) if (t.charCodeAt(a++) === s) continue t;
        return !1;
    }
    return !0;
}
e.exports = t;
