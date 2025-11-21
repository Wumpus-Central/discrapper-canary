l.d(n, { t: () => r });
var t = l(54381);
l(473749);
var i = l(120356),
    a = l.n(i),
    o = l(840724),
    d = l(180165);
function r(e) {
    let { applicationId: n, skuIds: l, variant: i = o.Z.SMALL, guildId: r, analyticsLocations: s } = e;
    return null == l || 0 === l.length
        ? null
        : (0, t.jsx)("div", {
              className: a()(d.container, d.cardGrid, { [d.mediumCardGrid]: i === o.Z.MEDIUM }),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      o.C,
                      {
                          positionInSection: l,
                          applicationId: n,
                          skuId: e,
                          variant: i,
                          guildId: r,
                          analyticsLocations: s,
                      },
                      "".concat(e, "-").concat(l),
                  ),
              ),
          });
}
