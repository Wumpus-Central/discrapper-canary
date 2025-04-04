t.d(r, { Z: () => n });
function n(e, r) {
    if (e.score === r.score) {
        var t, n, o, l, a, i;
        let c = null != (l = null != (o = e.sortable) ? o : null == (t = e.comparator) ? void 0 : t.toLocaleLowerCase()) ? l : '',
            u = null != (i = null != (a = e.sortable) ? a : null == (n = r.comparator) ? void 0 : n.toLocaleLowerCase()) ? i : '';
        if (c < u) return -1;
        if (c > u) return 1;
    }
    return r.score - e.score;
}
