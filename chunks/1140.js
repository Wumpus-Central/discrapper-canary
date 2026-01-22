var r = n(797686),
    i = 55296,
    a = 56319,
    s = 56320,
    o = 57343,
    l = /[\uD800-\uDFFF]/;
function c(e) {
    return i <= e && e <= o;
}
function u(e) {
    return l.test(e);
}
function d(e, t) {
    return 1 + c(e.charCodeAt(t));
}
function f(e) {
    if (!u(e)) return e.length;
    for (var t = 0, n = 0; n < e.length; n += d(e, n)) t++;
    return t;
}
function p(e, t, n) {
    if (((t = t || 0), (n = void 0 === n ? 1 / 0 : n || 0), !u(e))) return e.substr(t, n);
    var r = e.length;
    if (r <= 0 || t > r || n <= 0) return "";
    var i = 0;
    if (t > 0) {
        for (; t > 0 && i < r; t--) i += d(e, i);
        if (i >= r) return "";
    } else if (t < 0) {
        for (i = r; t < 0 && 0 < i; t++) i -= d(e, i - 1);
        i < 0 && (i = 0);
    }
    var a = r;
    if (n < r) for (a = i; n > 0 && a < r; n--) a += d(e, a);
    return e.substring(i, a);
}
e.exports = {
    getCodePoints: function (e) {
        for (var t = [], n = 0; n < e.length; n += d(e, n)) t.push(e.codePointAt(n));
        return t;
    },
    getUTF16Length: d,
    hasSurrogateUnit: u,
    isCodeUnitInSurrogateRange: c,
    isSurrogatePair: function (e, t) {
        if (((0 <= t && t < e.length) || r(!1), t + 1 === e.length)) return !1;
        var n = e.charCodeAt(t),
            l = e.charCodeAt(t + 1);
        return i <= n && n <= a && s <= l && l <= o;
    },
    strlen: f,
    substring: function (e, t, n) {
        (t = t || 0) < 0 && (t = 0), (n = void 0 === n ? 1 / 0 : n || 0) < 0 && (n = 0);
        var r = Math.abs(n - t);
        return p(e, (t = t < n ? t : n), r);
    },
    substr: p,
};
