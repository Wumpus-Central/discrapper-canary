n.d(t, { t: () => d });
var a = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    i = n(840724),
    o = n(180165);
function d(e) {
    let { applicationId: t, skuIds: n, variant: r = i.Z.SMALL, guildId: d } = e;
    return null == n || 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: l()(o.container, o.cardGrid, {
                  [o.mediumCardGrid]: r === i.Z.MEDIUM,
                  [o.largeCardGrid]: r === i.Z.LARGE,
              }),
              children: n.map((e, n) =>
                  (0, a.jsx)(
                      i.C,
                      {
                          applicationId: t,
                          skuId: e,
                          variant: r,
                          guildId: d,
                      },
                      "".concat(e, "-").concat(n),
                  ),
              ),
          });
}
