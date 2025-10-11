function i(e, t) {
    var n, i, l, r, a, o, s;
    let c = null != (n = t.limit) ? n : 1 / 0,
        u = ((o = e), (s = null != (i = t.filterPredicates) ? i : []), o.filter((e) => s.every((t) => t(e))));
    return (function (e, t, n) {
        let i = [];
        for (let l of e) {
            let e = (function (e, t) {
                return e.sort((e, n) => {
                    for (let i of t) {
                        let t = i(e, n);
                        if (0 !== t) return t;
                    }
                    return 0;
                });
            })(l, t);
            if ((i.push(...e), i.length >= n)) break;
        }
        return i;
    })(
        null != t.bucketPredicates && t.bucketPredicates.length > 0
            ? c >= u.length
                ? (function (e, t) {
                      let n = Array(t.length)
                          .fill(null)
                          .map(() => []);
                      for (let i of e)
                          for (let e = 0; e < t.length; e++)
                              if (t[e](i)) {
                                  n[e].push(i);
                                  break;
                              }
                      return n;
                  })(u, null != (l = t.bucketPredicates) ? l : [])
                : (function (e, t, n) {
                      let i = [],
                          l = e;
                      for (let e of t) {
                          let t = [],
                              r = [];
                          for (let n of l) e(n) ? r.push(n) : t.push(n);
                          if ((i.push(r), (l = t), i.reduce((e, t) => t.length + e, 0) >= n)) break;
                      }
                      return i;
                  })(u, null != (r = t.bucketPredicates) ? r : [], c)
            : [u],
        null != (a = t.sortComparers) ? a : [],
        c,
    ).slice(0, c);
}
n.d(t, { N: () => i }), n(539854), n(388685), n(642613);
