r.d(t, { p: () => d });
var n = r(582128),
    l = r(702841),
    s = r(287809),
    a = r(158045),
    i = r(4227),
    o = r(993408),
    u = r(623373),
    c = r(466459);
function d() {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        t = a.Ay.canUseShopDiscounts(e);
    return (0, n.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: r } = (0, c.o)(i.A, e);
                      if (!(0, o.aw)(e) || (0, o.tt)(e) || r) return !0;
                      if ((0, u.Ab)(e)) return null != (0, u.CW)({ product: e, hasShopDiscount: t });
                      let n = (0, o.l8)(t),
                          l = (0, o.yt)(e, n);
                      if (null == l || 0 === l.amount) return !0;
                      let s = 0;
                      return (
                          null != e.bundledProducts &&
                              (s = e.bundledProducts.reduce((e, t) => {
                                  let r = (0, o.yt)(t, n);
                                  return e + (r?.amount ?? 0);
                              }, 0)),
                          l.amount < s
                      );
                  }),
        [t],
    );
}
