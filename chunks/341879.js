n.d(e, { A: () => o });
var l = n(582128),
    r = n(444927),
    i = n(938595),
    s = n(859226);
n(321073);
let a = [];
function o(t, e) {
    let n = (0, s.D)("collectibles_picker"),
        o = (0, r.A)(() => (n ? (i.A.getRecommendations()?.skuIds ?? a) : a));
    return (0, l.useMemo)(
        () =>
            0 === o.length
                ? t
                : t.map((t) => {
                      if (t.section !== e) return t;
                      let n = (function (t, e) {
                          if (t.length <= 1 || 0 === e.length) return t;
                          let n = new Map(t.map((t) => [t.skuId, t])),
                              l = [];
                          for (let t of e) {
                              let e = n.get(t);
                              null != e && (l.push(e), n.delete(t));
                          }
                          return l.length > 0 ? [...l, ...n.values()] : t;
                      })(t.items, o);
                      return n === t.items ? t : { ...t, items: n };
                  }),
        [e, o, t],
    );
}
