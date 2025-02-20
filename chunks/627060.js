var r = n(24033),
    i = n(776245);
e.exports = function (e, t, n, o) {
    try {
        return o ? t(r(n)[0], n[1]) : t(n);
    } catch (t) {
        i(e, 'throw', t);
    }
};
