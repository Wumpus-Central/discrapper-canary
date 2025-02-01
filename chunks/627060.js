var i = n(24033),
    r = n(776245);
e.exports = function (e, t, n, a) {
    try {
        return a ? t(i(n)[0], n[1]) : t(n);
    } catch (t) {
        r(e, 'throw', t);
    }
};
