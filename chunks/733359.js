var n = r(581079),
    i = /[\uD800-\uDFFF]/;
function o(t) {
    return 55296 <= t && t <= 57343;
}
function a(t) {
    return i.test(t);
}
function u(t, e) {
    return 1 + o(t.charCodeAt(e));
}
function s(t, e, r) {
    if (((e = e || 0), (r = void 0 === r ? 1 / 0 : r || 0), !a(t))) return t.substr(e, r);
    var n = t.length;
    if (n <= 0 || e > n || r <= 0) return '';
    var i = 0;
    if (e > 0) {
        for (; e > 0 && i < n; e--) i += u(t, i);
        if (i >= n) return '';
    } else if (e < 0) {
        for (i = n; e < 0 && 0 < i; e++) i -= u(t, i - 1);
        i < 0 && (i = 0);
    }
    var o = n;
    if (r < n) for (o = i; r > 0 && o < n; r--) o += u(t, o);
    return t.substring(i, o);
}
t.exports = {
    getCodePoints: function (t) {
        for (var e = [], r = 0; r < t.length; r += u(t, r)) e.push(t.codePointAt(r));
        return e;
    },
    getUTF16Length: u,
    hasSurrogateUnit: a,
    isCodeUnitInSurrogateRange: o,
    isSurrogatePair: function (t, e) {
        if (((0 <= e && e < t.length) || n(!1), e + 1 === t.length)) return !1;
        var r = t.charCodeAt(e),
            i = t.charCodeAt(e + 1);
        return 55296 <= r && r <= 56319 && 56320 <= i && i <= 57343;
    },
    strlen: function (t) {
        if (!a(t)) return t.length;
        for (var e = 0, r = 0; r < t.length; r += u(t, r)) e++;
        return e;
    },
    substring: function (t, e, r) {
        (e = e || 0) < 0 && (e = 0), (r = void 0 === r ? 1 / 0 : r || 0) < 0 && (r = 0);
        var n = Math.abs(r - e);
        return s(t, (e = e < r ? e : r), n);
    },
    substr: s
};
