n.d(t, { A: () => s });
var l = n(582128),
    r = n(444927),
    i = n(938595);
n(321073);
let o = [];
function s(e, t) {
    let n = (0, r.A)(() => i.A.getRecommendations()?.skuIds ?? o);
    return (0, l.useMemo)(
        () =>
            0 === n.length
                ? e
                : e.map((e) => {
                      if (e.section !== t) return e;
                      let l = (function (e, t) {
                          if (e.length <= 1 || 0 === t.length) return e;
                          let n = new Map(e.map((e) => [e.skuId, e])),
                              l = [];
                          for (let e of t) {
                              let t = n.get(e);
                              null != t && (l.push(t), n.delete(e));
                          }
                          return l.length > 0 ? [...l, ...n.values()] : e;
                      })(e.items, n);
                      return l === e.items ? e : { ...e, items: l };
                  }),
        [t, n, e],
    );
}
