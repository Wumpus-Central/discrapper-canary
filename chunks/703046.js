var e = n(921413),
    o = n(272763);
t.exports = function (t, r, n, i) {
    try {
        return i ? r(e(n)[0], n[1]) : r(n);
    } catch (r) {
        o(t, 'throw', r);
    }
};
