n.d(t, { a: () => g });
var r = n(473749),
    l = n(399606),
    i = n(594174),
    o = n(74538),
    s = n(1870),
    a = n(884697),
    c = n(27123),
    u = n(330349),
    d = n(724994);
let g = () => {
    let e = (0, l.e7)([i.default], () => i.default.getCurrentUser()),
        t = null != e && o.ZP.canUseCollectibles(e);
    return (0, r.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, d.U)(s.Z, e);
                      if (!(0, a.x6)(e) || (0, a.rN)(e) || n) return !0;
                      if (!(0, u.N)(e)) return !1;
                      if ((0, c.r1)(e))
                          return (
                              null !=
                              (0, c.T4)({
                                  product: e,
                                  isPremiumUser: t,
                              })
                          );
                      let r = (0, a.gc)(t),
                          l = (0, a.ql)(e, r);
                      if (null == l || 0 === l.amount) return !0;
                      let i = 0;
                      return (
                          null != e.bundledProducts &&
                              (i = e.bundledProducts.reduce((e, t) => {
                                  var n;
                                  let l = (0, a.ql)(t, r);
                                  return e + (null != (n = null == l ? void 0 : l.amount) ? n : 0);
                              }, 0)),
                          l.amount < i
                      );
                  }),
        [t],
    );
};
