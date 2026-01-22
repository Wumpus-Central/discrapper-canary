e.exports = function (e, t, n, r) {
    for (var i = 65535 & e, a = (e >>> 16) & 65535, s = 0; 0 !== n; ) {
        (s = n > 2e3 ? 2e3 : n), (n -= s);
        do a = (a + (i = (i + t[r++]) | 0)) | 0;
        while (--s);
        (i %= 65521), (a %= 65521);
    }
    return i | (a << 16);
};
