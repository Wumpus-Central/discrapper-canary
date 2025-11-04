t.d(e, { t: () => o });
var l = t(951288);
t(647438);
var i = t(120356),
    a = t.n(i),
    r = t(840724),
    d = t(180165);
function o(n) {
    let { applicationId: e, skuIds: t, variant: i = r.Z.SMALL, guildId: o } = n;
    return null == t || 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: a()(d.container, d.cardGrid, { [d.mediumCardGrid]: i === r.Z.MEDIUM }),
              children: t.map((n, t) =>
                  (0, l.jsx)(
                      r.C,
                      {
                          applicationId: e,
                          skuId: n,
                          variant: i,
                          guildId: o,
                      },
                      "".concat(n, "-").concat(t),
                  ),
              ),
          });
}
