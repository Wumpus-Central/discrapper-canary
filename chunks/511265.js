"use strict";
s.d(t, { p: () => g });
var n = s(64700),
    l = s(417597),
    r = s(287809),
    a = s(927578),
    i = s(4227),
    o = s(993408),
    c = s(623373),
    d = s(660653),
    u = s(466459);
let g = () => {
    let e = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        t = null != e && a.Ay.canUseCollectibles(e);
    return (0, n.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: s } = (0, u.o)(i.A, e);
                      if (!(0, o.aw)(e) || (0, o.tt)(e) || s) return !0;
                      if (!(0, d.uh)(e)) return !1;
                      if ((0, c.Ab)(e)) return null != (0, c.CW)({ product: e, isPremiumUser: t });
                      let n = (0, o.l8)(t),
                          l = (0, o.yt)(e, n);
                      if (null == l || 0 === l.amount) return !0;
                      let r = 0;
                      return (
                          null != e.bundledProducts &&
                              (r = e.bundledProducts.reduce((e, t) => {
                                  let s = (0, o.yt)(t, n);
                                  return e + (s?.amount ?? 0);
                              }, 0)),
                          l.amount < r
                      );
                  }),
        [t],
    );
};
