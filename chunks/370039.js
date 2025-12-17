n.d(t, { a: () => f });
var r = n(473749),
    l = n(399606),
    a = n(594174),
    s = n(74538),
    o = n(1870),
    i = n(884697),
    c = n(27123),
    u = n(330349),
    d = n(724994);
let f = () => {
    let e = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        t = null != e && s.ZP.canUseCollectibles(e);
    return (0, r.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, d.U)(o.Z, e);
                      if (!(0, i.x6)(e) || (0, i.rN)(e) || n) return !0;
                      if (!(0, u.N)(e)) return !1;
                      if ((0, c.r1)(e))
                          return (
                              null !=
                              (0, c.T4)({
                                  product: e,
                                  isPremiumUser: t,
                              })
                          );
                      let r = (0, i.gc)(t),
                          l = (0, i.ql)(e, r);
                      if (null == l || 0 === l.amount) return !0;
                      let a = 0;
                      return (
                          null != e.bundledProducts &&
                              (a = e.bundledProducts.reduce((e, t) => {
                                  var n;
                                  let l = (0, i.ql)(t, r);
                                  return e + (null != (n = null == l ? void 0 : l.amount) ? n : 0);
                              }, 0)),
                          l.amount < a
                      );
                  }),
        [t],
    );
};
