function r(e, t) {
    if (e.score === t.score) {
        var n, r, i, a, o, s;
        let l =
                null != (a = null != (i = e.sortable) ? i : null == (n = e.comparator) ? void 0 : n.toLocaleLowerCase())
                    ? a
                    : "",
            c =
                null != (s = null != (o = e.sortable) ? o : null == (r = t.comparator) ? void 0 : r.toLocaleLowerCase())
                    ? s
                    : "";
        if (l < c) return -1;
        if (l > c) return 1;
    }
    return t.score - e.score;
}
n.d(t, { Z: () => r });
