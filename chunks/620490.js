t.d(r, { Z: () => n });
function n(e, r) {
    if (e.score === r.score) {
        var t, n, o, l, i, u;
        let c = null !== (l = null !== (o = e.sortable) && void 0 !== o ? o : null === (t = e.comparator) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && void 0 !== l ? l : '',
            a = null !== (u = null !== (i = e.sortable) && void 0 !== i ? i : null === (n = r.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== u ? u : '';
        if (c < a) return -1;
        if (c > a) return 1;
    }
    return r.score - e.score;
}
