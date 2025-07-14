r.d(t, { a: () => u });
var n = r(73800),
    l = r(399606),
    o = r(594174),
    i = r(74538),
    a = r(1870),
    s = r(884697),
    c = r(724994);
let u = () => {
    let e = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        t = null != e && i.ZP.canUseCollectibles(e);
    return (0, n.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: r } = (0, c.U)(a.Z, e);
                      if (!(0, s.x6)(e) || (0, s.rN)(e) || r) return !0;
                      let n = (0, s.gc)(t),
                          l = (0, s.ql)(e, n);
                      if (null == l || 0 === l.amount) return !0;
                      let o = 0;
                      return (
                          null != e.bundledProducts &&
                              (o = e.bundledProducts.reduce((e, t) => {
                                  var r;
                                  let l = (0, s.ql)(t, n);
                                  return e + (null != (r = null == l ? void 0 : l.amount) ? r : 0);
                              }, 0)),
                          l.amount < o
                      );
                  }),
        [t]
    );
};
