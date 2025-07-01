t.d(r, { Z: () => n });
function n(e, r) {
    if (e.score === r.score) {
        var t, n, l, o, a, i;
        let c = null != (o = null != (l = e.sortable) ? l : null == (t = e.comparator) ? void 0 : t.toLocaleLowerCase()) ? o : '',
            u = null != (i = null != (a = e.sortable) ? a : null == (n = r.comparator) ? void 0 : n.toLocaleLowerCase()) ? i : '';
        if (c < u) return -1;
        if (c > u) return 1;
    }
    return r.score - e.score;
}
