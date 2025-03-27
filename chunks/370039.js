n.d(t, { a: () => c });
var r = n(192379),
    l = n(399606),
    a = n(594174),
    o = n(74538),
    s = n(1870),
    i = n(884697),
    d = n(724994);
let c = () => {
    let e = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        t = null != e && o.ZP.canUseCollectibles(e);
    return (0, r.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, d.U)(s.Z, e);
                      if (!(0, i.x6)(e) || (0, i.rN)(e) || n) return !0;
                      let r = (0, i.gc)(t),
                          l = (0, i.ql)(e, r);
                      if (null == l || 0 === l.amount) return !0;
                      let a = 0;
                      return (
                          null != e.bundledProducts &&
                              (a = e.bundledProducts.reduce((e, t) => {
                                  var n;
                                  let l = (0, i.ql)(t, r);
                                  return e + (null !== (n = null == l ? void 0 : l.amount) && void 0 !== n ? n : 0);
                              }, 0)),
                          l.amount < a
                      );
                  }),
        [t]
    );
};
