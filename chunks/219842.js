function r(e, n) {
    for (var r = -1, i = null == e ? 0 : e.length, a = 0, o = []; ++r < i; ) {
        var s = e[r];
        n(s, r, e) && (o[a++] = s);
    }
    return o;
}
n.Z = r;
