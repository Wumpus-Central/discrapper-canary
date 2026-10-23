n.d(t, { p: () => d });
var r = n(582128),
    l = n(702841),
    s = n(287809),
    a = n(927578),
    o = n(4227),
    i = n(993408),
    u = n(623373),
    c = n(466459);
function d() {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        t = a.Ay.canUseShopDiscounts(e);
    return (0, r.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, c.o)(o.A, e);
                      if (!(0, i.aw)(e) || (0, i.tt)(e) || n) return !0;
                      if ((0, u.Ab)(e)) return null != (0, u.CW)({ product: e, hasShopDiscount: t });
                      let r = (0, i.l8)(t),
                          l = (0, i.yt)(e, r);
                      if (null == l || 0 === l.amount) return !0;
                      let s = 0;
                      return (
                          null != e.bundledProducts &&
                              (s = e.bundledProducts.reduce((e, t) => {
                                  let n = (0, i.yt)(t, r);
                                  return e + (n?.amount ?? 0);
                              }, 0)),
                          l.amount < s
                      );
                  }),
        [t],
    );
}
