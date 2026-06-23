n.d(t, { p: () => g });
var s = n(64700),
    l = n(702841),
    r = n(287809),
    a = n(428262),
    i = n(4227),
    o = n(993408),
    u = n(623373),
    c = n(660653),
    d = n(466459);
function g() {
    let e = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        t = a.Ay.canUseShopDiscounts(e);
    return (0, s.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, d.o)(i.A, e);
                      if (!(0, o.aw)(e) || (0, o.tt)(e) || n) return !0;
                      if (!(0, c.uh)(e)) return !1;
                      if ((0, u.Ab)(e)) return null != (0, u.CW)({ product: e, hasShopDiscount: t });
                      let s = (0, o.l8)(t),
                          l = (0, o.yt)(e, s);
                      if (null == l || 0 === l.amount) return !0;
                      let r = 0;
                      return (
                          null != e.bundledProducts &&
                              (r = e.bundledProducts.reduce((e, t) => {
                                  let n = (0, o.yt)(t, s);
                                  return e + (n?.amount ?? 0);
                              }, 0)),
                          l.amount < r
                      );
                  }),
        [t],
    );
}
