e.exports = function (e, t, n, r) {
    for (var i = (65535 & e) | 0, a = ((e >>> 16) & 65535) | 0, o = 0; 0 !== n; ) {
        (o = n > 2000 ? 2000 : n), (n -= o);
        do a = (a + (i = (i + t[r++]) | 0)) | 0;
        while (--o);
        (i %= 65521), (a %= 65521);
    }
    return i | (a << 16) | 0;
};
