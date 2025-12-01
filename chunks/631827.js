function r(e, t) {
    var n, r, l, c, u;
    let d,
        f = null != (n = t.limit) ? n : 1 / 0,
        p = i(e, null != (r = t.filterPredicates) ? r : []);
    return s(
        (d =
            null != t.bucketPredicates && t.bucketPredicates.length > 0
                ? f >= p.length
                    ? o(p, null != (l = t.bucketPredicates) ? l : [])
                    : a(p, null != (c = t.bucketPredicates) ? c : [], f)
                : [p]),
        null != (u = t.sortComparers) ? u : [],
        f,
    ).slice(0, f);
}
function i(e, t) {
    return e.filter((e) => t.every((t) => t(e)));
}
function a(e, t, n) {
    let r = [],
        i = e;
    for (let e of t) {
        let t = [],
            a = [];
        for (let n of i) e(n) ? a.push(n) : t.push(n);
        if ((r.push(a), (i = t), r.reduce((e, t) => t.length + e, 0) >= n)) break;
    }
    return r;
}
function o(e, t) {
    let n = Array(t.length)
        .fill(null)
        .map(() => []);
    for (let r of e)
        for (let e = 0; e < t.length; e++)
            if (t[e](r)) {
                n[e].push(r);
                break;
            }
    return n;
}
function s(e, t, n) {
    let r = [];
    for (let i of e) {
        let e = l(i, t);
        if ((r.push(...e), r.length >= n)) break;
    }
    return r;
}
function l(e, t) {
    return e.sort((e, n) => {
        for (let r of t) {
            let t = r(e, n);
            if (0 !== t) return t;
        }
        return 0;
    });
}
n.d(t, { N: () => r }), n(539854), n(388685), n(642613);
