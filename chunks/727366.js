n.d(t, { t: () => d });
var a = n(951288);
n(647438);
var l = n(120356),
    r = n.n(l),
    i = n(840724),
    o = n(180165);
function d(e) {
    let { applicationId: t, skuIds: n, variant: l = i.Z.SMALL, guildId: d } = e;
    return null == n || 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: r()(o.container, o.cardGrid, {
                  [o.mediumCardGrid]: l === i.Z.MEDIUM,
                  [o.largeCardGrid]: l === i.Z.LARGE,
              }),
              children: n.map((e, n) =>
                  (0, a.jsx)(
                      i.C,
                      {
                          applicationId: t,
                          skuId: e,
                          variant: l,
                          guildId: d,
                      },
                      "".concat(e, "-").concat(n),
                  ),
              ),
          });
}
