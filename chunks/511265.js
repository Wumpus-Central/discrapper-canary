l.d(t, {
    p: () => f,
});
var n = l(64700),
    r = l(417597),
    s = l(287809),
    a = l(927578),
    i = l(4227),
    o = l(993408),
    c = l(623373),
    u = l(660653),
    d = l(466459);
let f = () => {
    let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        t = null != e && a.Ay.canUseCollectibles(e);
    return (0, n.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: l } = (0, d.o)(i.A, e);
                      if (!(0, o.aw)(e) || (0, o.tt)(e) || l) return !0;
                      if (!(0, u.u)(e)) return !1;
                      if ((0, c.Ab)(e))
                          return (
                              null !=
                              (0, c.CW)({
                                  product: e,
                                  isPremiumUser: t,
                              })
                          );
                      let n = (0, o.l8)(t),
                          r = (0, o.yt)(e, n);
                      if (null == r || 0 === r.amount) return !0;
                      let s = 0;
                      return (
                          null != e.bundledProducts &&
                              (s = e.bundledProducts.reduce((e, t) => {
                                  var l;
                                  let r = (0, o.yt)(t, n);
                                  return e + (null != (l = null == r ? void 0 : r.amount) ? l : 0);
                              }, 0)),
                          r.amount < s
                      );
                  }),
        [t],
    );
};
