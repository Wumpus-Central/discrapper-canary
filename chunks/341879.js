n.d(t, { A: () => a });
var l = n(582128),
    r = n(444927),
    i = n(938595),
    o = n(859226);
n(321073);
let s = [];
function a(e, t) {
    let n = (0, o.D)("collectibles_picker"),
        a = (0, r.A)(() => (n ? (i.A.getRecommendations()?.skuIds ?? s) : s));
    return (0, l.useMemo)(
        () =>
            0 === a.length
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
                      })(e.items, a);
                      return n === e.items ? e : { ...e, items: n };
                  }),
        [t, a, e],
    );
}
