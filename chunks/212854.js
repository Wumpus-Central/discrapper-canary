var i = n(28886),
    r = n(736849);
e.exports = function (e, t, n, a) {
    try {
        return a ? t(i(n)[0], n[1]) : t(n);
    } catch (t) {
        r(e, 'throw', t);
    }
};
