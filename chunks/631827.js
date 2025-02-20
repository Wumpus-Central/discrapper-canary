function i(e, t) {
    var n, i, l, r, o, a, s;
    let c;
    let u = null !== (n = t.limit) && void 0 !== n ? n : 1 / 0,
        d = ((a = e), (s = null !== (i = t.filterPredicates) && void 0 !== i ? i : []), a.filter((e) => s.every((t) => t(e))));
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
            ? u >= d.length
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
                  })(d, null !== (l = t.bucketPredicates) && void 0 !== l ? l : [])
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
                  })(d, null !== (r = t.bucketPredicates) && void 0 !== r ? r : [], u)
            : [d],
        null !== (o = t.sortComparers) && void 0 !== o ? o : [],
        u
    ).slice(0, u);
}
n.d(t, { N: () => i }), n(653041), n(47120), n(230036);
