t.d(n, { t: () => r });
var l = t(54381);
t(473749);
var i = t(120356),
    a = t.n(i),
    o = t(840724),
    s = t(332873);
function r(e) {
    let { applicationId: n, skuIds: t, variant: i = o.Zp.SMALL, guildId: r, analyticsLocations: d } = e;
    return null == t || 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: a()(s.container, s.cardGrid, { [s.mediumCardGrid]: i === o.Zp.MEDIUM }),
              children: t.map((e, t) =>
                  (0, l.jsx)(
                      o.ZP,
                      {
                          positionInSection: t,
                          applicationId: n,
                          skuId: e,
                          variant: i,
                          guildId: r,
                          analyticsLocations: d,
                      },
                      "".concat(e, "-").concat(t),
                  ),
              ),
          });
}
