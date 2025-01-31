function i(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = {},
        a = Object.keys(e);
    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
}
n.d(t, { Z: () => i });
