function t(e, t, n, i) {
    for (var r = e.length, a = n + (i ? 1 : -1); i ? a-- : ++a < r; ) if (t(e[a], a, e)) return a;
    return -1;
}
e.exports = t;
