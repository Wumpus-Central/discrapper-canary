var l = n(582128),
    r = n(164636),
    s = n(287809),
    a = n(722178),
    i = n(4227),
    o = n(993408),
    u = n(623373),
    c = n(466459);
n.d(
    t,
    {},
    {
        p: function () {
            let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
                t = a.Ay.canUseShopDiscounts(e);
            return (0, l.useCallback)(
                (e) =>
                    null == e || 0 === e.length
                        ? e
                        : e.filter((e) => {
                              let { isPurchased: n } = (0, c.o)(i.A, e);
                              if (!(0, o.aw)(e) || (0, o.tt)(e) || n) return !0;
                              if ((0, u.Ab)(e)) return null != (0, u.CW)({ product: e, hasShopDiscount: t });
                              let l = (0, o.l8)(t),
                                  r = (0, o.yt)(e, l);
                              if (null == r || 0 === r.amount) return !0;
                              let s = 0;
                              return (
                                  null != e.bundledProducts &&
                                      (s = e.bundledProducts.reduce((e, t) => {
                                          let n = (0, o.yt)(t, l);
                                          return e + (n?.amount ?? 0);
                                      }, 0)),
                                  r.amount < s
                              );
                          }),
                [t],
            );
        },
    },
);
