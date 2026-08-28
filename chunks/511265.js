n.d(t, { p: () => d });
var r = n(582128),
    s = n(702841),
    l = n(287809),
    a = n(158045),
    i = n(4227),
    o = n(993408),
    u = n(623373),
    c = n(466459);
function d() {
    let e = (0, s.bG)([l.default], () => l.default.getCurrentUser()),
        t = a.Ay.canUseShopDiscounts(e);
    return (0, r.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, c.o)(i.A, e);
                      if (!(0, o.aw)(e) || (0, o.tt)(e) || n) return !0;
                      if ((0, u.Ab)(e)) return null != (0, u.CW)({ product: e, hasShopDiscount: t });
                      let r = (0, o.l8)(t),
                          s = (0, o.yt)(e, r);
                      if (null == s || 0 === s.amount) return !0;
                      let l = 0;
                      return (
                          null != e.bundledProducts &&
                              (l = e.bundledProducts.reduce((e, t) => {
                                  let n = (0, o.yt)(t, r);
                                  return e + (n?.amount ?? 0);
                              }, 0)),
                          s.amount < l
                      );
                  }),
        [t],
    );
}
