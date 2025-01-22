function n(e, n, r, i) {
    for (var a = (65535 & e) | 0, o = ((e >>> 16) & 65535) | 0, s = 0; 0 !== r; ) {
        (s = r > 2000 ? 2000 : r), (r -= s);
        do o = (o + (a = (a + n[i++]) | 0)) | 0;
        while (--s);
        (a %= 65521), (o %= 65521);
    }
    return a | (o << 16) | 0;
}
e.exports = n;
