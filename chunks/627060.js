var i = r(24033),
    a = r(776245);
e.exports = function (e, n, r, o) {
    try {
        return o ? n(i(r)[0], r[1]) : n(r);
    } catch (n) {
        a(e, 'throw', n);
    }
};
