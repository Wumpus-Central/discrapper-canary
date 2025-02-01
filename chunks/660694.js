function t(e, t, n, i) {
    for (var r = (65535 & e) | 0, a = ((e >>> 16) & 65535) | 0, s = 0; 0 !== n; ) {
        (s = n > 2000 ? 2000 : n), (n -= s);
        do a = (a + (r = (r + t[i++]) | 0)) | 0;
        while (--s);
        (r %= 65521), (a %= 65521);
    }
    return r | (a << 16) | 0;
}
e.exports = t;
