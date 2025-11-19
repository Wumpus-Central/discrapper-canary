l.d(e, { t: () => o });
var t = l(54381);
l(473749);
var i = l(120356),
    a = l.n(i),
    d = l(840724),
    r = l(301790);
function o(n) {
    let { applicationId: e, skuIds: l, variant: i = d.Z.SMALL, guildId: o } = n;
    return null == l || 0 === l.length
        ? null
        : (0, t.jsx)("div", {
              className: a()(r.container, r.cardGrid, { [r.mediumCardGrid]: i === d.Z.MEDIUM }),
              children: l.map((n, l) =>
                  (0, t.jsx)(
                      d.C,
                      {
                          applicationId: e,
                          skuId: n,
                          variant: i,
                          guildId: o,
                      },
                      "".concat(n, "-").concat(l),
                  ),
              ),
          });
}
