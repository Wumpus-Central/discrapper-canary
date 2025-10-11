n.d(t, { a: () => d });
var r = n(647438),
    l = n(399606),
    i = n(594174),
    s = n(74538),
    o = n(1870),
    a = n(884697),
    c = n(330349),
    u = n(724994);
let d = () => {
    let e = (0, l.e7)([i.default], () => i.default.getCurrentUser()),
        t = null != e && s.ZP.canUseCollectibles(e);
    return (0, r.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, u.U)(o.Z, e);
                      if (!(0, a.x6)(e) || (0, a.rN)(e) || n) return !0;
                      let r = (0, a.gc)(t),
                          l = (0, a.ql)(e, r);
                      if (!(0, c.N)(e)) return !1;
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
