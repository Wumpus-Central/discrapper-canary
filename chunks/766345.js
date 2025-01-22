function r(e, n) {
    for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== n(e[r], r, e); );
    return e;
}
n.Z = r;
