n.d(t, {
    p: () => g,
});
var r = n(64700),
    l = n(417597),
    s = n(287809),
    a = n(927578),
    i = n(4227),
    o = n(993408),
    c = n(623373),
    u = n(660653),
    d = n(466459);
let g = () => {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        t = null != e && a.Ay.canUseCollectibles(e);
    return (0, r.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, d.o)(i.A, e);
                      if (!(0, o.aw)(e) || (0, o.tt)(e) || n) return !0;
                      if (!(0, u.uh)(e)) return !1;
                      if ((0, c.Ab)(e))
                          return (
                              null !=
                              (0, c.CW)({
                                  product: e,
                                  isPremiumUser: t,
                              })
                          );
                      let r = (0, o.l8)(t),
                          l = (0, o.yt)(e, r);
                      if (null == l || 0 === l.amount) return !0;
                      let s = 0;
                      return (
                          null != e.bundledProducts &&
                              (s = e.bundledProducts.reduce((e, t) => {
                                  var n;
                                  let l = (0, o.yt)(t, r);
                                  return e + (null != (n = null == l ? void 0 : l.amount) ? n : 0);
                              }, 0)),
                          l.amount < s
                      );
                  }),
        [t],
    );
};
