n.d(r, { Z: () => t });
function t(e, r) {
    if (e.score === r.score) {
        var n, t, l, o, i, a;
        let s =
                null != (o = null != (l = e.sortable) ? l : null == (n = e.comparator) ? void 0 : n.toLocaleLowerCase())
                    ? o
                    : "",
            c =
                null != (a = null != (i = e.sortable) ? i : null == (t = r.comparator) ? void 0 : t.toLocaleLowerCase())
                    ? a
                    : "";
        if (s < c) return -1;
        if (s > c) return 1;
    }
    return r.score - e.score;
}
