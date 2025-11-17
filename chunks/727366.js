t.d(n, { t: () => o });
var l = t(54381);
t(473749);
var i = t(120356),
    a = t.n(i),
    r = t(840724),
    d = t(180165);
function o(e) {
    let { applicationId: n, skuIds: t, variant: i = r.Z.SMALL, guildId: o } = e;
    return null == t || 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: a()(d.container, d.cardGrid, { [d.mediumCardGrid]: i === r.Z.MEDIUM }),
              children: t.map((e, t) =>
                  (0, l.jsx)(
                      r.C,
                      {
                          applicationId: n,
                          skuId: e,
                          variant: i,
                          guildId: o,
                      },
                      "".concat(e, "-").concat(t),
                  ),
              ),
          });
}
