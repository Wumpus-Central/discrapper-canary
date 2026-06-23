s.d(t, { p: () => g });
var l = s(64700),
    r = s(702841),
    n = s(287809),
    a = s(428262),
    i = s(4227),
    o = s(993408),
    u = s(623373),
    c = s(660653),
    d = s(466459);
let g = () => {
    let e = (0, r.bG)([n.default], () => n.default.getCurrentUser()),
        t = a.Ay.canUseShopDiscounts(e);
    return (0, l.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: s } = (0, d.o)(i.A, e);
                      if (!(0, o.aw)(e) || (0, o.tt)(e) || s) return !0;
                      if (!(0, c.uh)(e)) return !1;
                      if ((0, u.Ab)(e)) return null != (0, u.CW)({ product: e, hasShopDiscount: t });
                      let l = (0, o.l8)(t),
                          r = (0, o.yt)(e, l);
                      if (null == r || 0 === r.amount) return !0;
                      let n = 0;
                      return (
                          null != e.bundledProducts &&
                              (n = e.bundledProducts.reduce((e, t) => {
                                  let s = (0, o.yt)(t, l);
                                  return e + (s?.amount ?? 0);
                              }, 0)),
                          r.amount < n
                      );
                  }),
        [t],
    );
};
