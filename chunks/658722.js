e.exports = function (e, t) {
    var n = t.length,
        r = e.length;
    if (r > n) return !1;
    if (r === n) return e === t;
    n: for (var i = 0, a = 0; i < r; i++) {
        for (var o = e.charCodeAt(i); a < n; ) if (t.charCodeAt(a++) === o) continue n;
        return !1;
    }
    return !0;
};
