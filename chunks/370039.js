n.d(t, { a: () => u });
var r = n(192379),
    l = n(399606),
    a = n(594174),
    o = n(74538),
    i = n(1870),
    s = n(884697),
    c = n(724994);
let u = () => {
    let e = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        t = null != e && o.ZP.canUseCollectibles(e);
    return (0, r.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, c.U)(i.Z, e);
                      if (!(0, s.x6)(e) || (0, s.rN)(e) || n) return !0;
                      let r = (0, s.gc)(t),
                          l = (0, s.ql)(e, r);
                      if (null == l || 0 === l.amount) return !0;
                      let a = 0;
                      return (
                          null != e.bundledProducts &&
                              (a = e.bundledProducts.reduce((e, t) => {
                                  var n;
                                  let l = (0, s.ql)(t, r);
                                  return e + (null != (n = null == l ? void 0 : l.amount) ? n : 0);
                              }, 0)),
                          l.amount < a
                      );
                  }),
        [t]
    );
};
