function i(e, t) {
    var n, i, r, l, a, o, c;
    let s,
        u = null != (n = t.limit) ? n : 1 / 0,
        d = ((o = e), (c = null != (i = t.filterPredicates) ? i : []), o.filter((e) => c.every((t) => t(e))));
    return (function (e, t, n) {
        let i = [];
        for (let r of e) {
            let e = (function (e, t) {
                return e.sort((e, n) => {
                    for (let i of t) {
                        let t = i(e, n);
                        if (0 !== t) return t;
                    }
                    return 0;
                });
            })(r, t);
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
                  })(d, null != (r = t.bucketPredicates) ? r : [])
                : (function (e, t, n) {
                      let i = [],
                          r = e;
                      for (let e of t) {
                          let t = [],
                              l = [];
                          for (let n of r) e(n) ? l.push(n) : t.push(n);
                          if ((i.push(l), (r = t), i.reduce((e, t) => t.length + e, 0) >= n)) break;
                      }
                      return i;
                  })(d, null != (l = t.bucketPredicates) ? l : [], u)
            : [d],
        null != (a = t.sortComparers) ? a : [],
        u
    ).slice(0, u);
}
n.d(t, { N: () => i }), n(653041), n(47120), n(230036);
