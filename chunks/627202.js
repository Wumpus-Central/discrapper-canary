function t(e, t, n, r) {
    for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (t(e[o], o, e)) return o;
    return -1;
}
e.exports = t;
