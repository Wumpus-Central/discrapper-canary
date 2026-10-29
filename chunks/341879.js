n.d(t, { A: () => o });
var l = n(582128),
    r = n(444927),
    i = n(938595),
    s = n(859226);
n(321073);
let a = [];
function o(e, t) {
    let n = (0, s.D)("collectibles_picker"),
        o = (0, r.A)(() => (n ? (i.A.getRecommendations()?.skuIds ?? a) : a));
    return (0, l.useMemo)(
        () =>
            0 === o.length
                ? e
                : e.map((e) => {
                      if (e.section !== t) return e;
                      let n = (function (e, t) {
                          if (e.length <= 1 || 0 === t.length) return e;
                          let n = new Map(e.map((e) => [e.skuId, e])),
                              l = [];
                          for (let e of t) {
                              let t = n.get(e);
                              null != t && (l.push(t), n.delete(e));
                          }
                          return l.length > 0 ? [...l, ...n.values()] : e;
                      })(e.items, o);
                      return n === e.items ? e : { ...e, items: n };
                  }),
        [t, o, e],
    );
}
