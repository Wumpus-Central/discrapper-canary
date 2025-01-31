n.d(r, { Z: () => t });
function t(e, r) {
    if (e.score === r.score) {
        var n, t, o, l, i, a;
        let u = null !== (l = null !== (o = e.sortable) && void 0 !== o ? o : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== l ? l : '',
            c = null !== (a = null !== (i = e.sortable) && void 0 !== i ? i : null === (t = r.comparator) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && void 0 !== a ? a : '';
        if (u < c) return -1;
        if (u > c) return 1;
    }
    return r.score - e.score;
}
