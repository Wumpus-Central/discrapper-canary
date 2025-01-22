function n(e, n, r, i) {
    var a = -1,
        o = null == e ? 0 : e.length;
    for (i && o && (r = e[++a]); ++a < o; ) r = n(r, e[a], a, e);
    return r;
}
e.exports = n;
