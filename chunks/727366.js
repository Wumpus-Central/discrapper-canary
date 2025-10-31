l.d(n, { t: () => o });
var t = l(951288);
l(647438);
var i = l(120356),
    a = l.n(i),
    r = l(840724),
    d = l(180165);
function o(e) {
    let { applicationId: n, skuIds: l, variant: i = r.Z.SMALL, guildId: o } = e;
    return null == l || 0 === l.length
        ? null
        : (0, t.jsx)("div", {
              className: a()(d.container, d.cardGrid, {
                  [d.mediumCardGrid]: i === r.Z.MEDIUM,
                  [d.largeCardGrid]: i === r.Z.LARGE,
              }),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      r.C,
                      {
                          applicationId: n,
                          skuId: e,
                          variant: i,
                          guildId: o,
                      },
                      "".concat(e, "-").concat(l),
                  ),
              ),
          });
}
