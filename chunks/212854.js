var e = n(28886),
    o = n(736849);
t.exports = function (t, r, n, i) {
    try {
        return i ? r(e(n)[0], n[1]) : r(n);
    } catch (r) {
        o(t, 'throw', r);
    }
};
