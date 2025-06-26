var n = r(179122),
    i = r(709369);
t.exports = function (t, e, r, s) {
    try {
        return s ? e(n(r)[0], r[1]) : e(r);
    } catch (e) {
        i(t, 'throw', e);
    }
};
