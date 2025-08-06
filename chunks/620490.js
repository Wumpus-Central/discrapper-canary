function r(e, t) {
    if (e.score === t.score) {
        var n, r, i, o, a, s;
        let l =
                null != (o = null != (i = e.sortable) ? i : null == (n = e.comparator) ? void 0 : n.toLocaleLowerCase())
                    ? o
                    : "",
            c =
                null != (s = null != (a = e.sortable) ? a : null == (r = t.comparator) ? void 0 : r.toLocaleLowerCase())
                    ? s
                    : "";
        if (l < c) return -1;
        if (l > c) return 1;
    }
    return t.score - e.score;
}
n.d(t, { Z: () => r });
