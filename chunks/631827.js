function l(e, t) {
    var n, l, i, r, a, o, s;
    let c,
        u = null != (n = t.limit) ? n : 1 / 0,
        d = ((o = e), (s = null != (l = t.filterPredicates) ? l : []), o.filter((e) => s.every((t) => t(e))));
    return (function (e, t, n) {
        let l = [];
        for (let i of e) {
            let e = (function (e, t) {
                return e.sort((e, n) => {
                    for (let l of t) {
                        let t = l(e, n);
                        if (0 !== t) return t;
                    }
                    return 0;
                });
            })(i, t);
            if ((l.push(...e), l.length >= n)) break;
        }
        return l;
    })(
        null != t.bucketPredicates && t.bucketPredicates.length > 0
            ? u >= d.length
                ? (function (e, t) {
                      let n = Array(t.length)
                          .fill(null)
                          .map(() => []);
                      for (let l of e)
                          for (let e = 0; e < t.length; e++)
                              if (t[e](l)) {
                                  n[e].push(l);
                                  break;
                              }
                      return n;
                  })(d, null != (i = t.bucketPredicates) ? i : [])
                : (function (e, t, n) {
                      let l = [],
                          i = e;
                      for (let e of t) {
                          let t = [],
                              r = [];
                          for (let n of i) e(n) ? r.push(n) : t.push(n);
                          if ((l.push(r), (i = t), l.reduce((e, t) => t.length + e, 0) >= n)) break;
                      }
                      return l;
                  })(d, null != (r = t.bucketPredicates) ? r : [], u)
            : [d],
        null != (a = t.sortComparers) ? a : [],
        u
    ).slice(0, u);
}
n.d(t, { N: () => l }), n(539854), n(388685), n(642613);
