t.exports = function (t, r) {
    var e = r.length,
        n = t.length;
    if (n > e) return !1;
    if (n === e) return t === r;
    t: for (var o = 0, i = 0; o < n; o++) {
        for (var u = t.charCodeAt(o); i < e; ) if (r.charCodeAt(i++) === u) continue t;
        return !1;
    }
    return !0;
};
