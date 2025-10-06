n.d(t, { t: () => o });
var a = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    i = n(840724),
    d = n(301790);
function o(e) {
    let { applicationId: t, skuIds: n, isWide: r, guildId: o } = e;
    return null == n || 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: l()(d.container, d.cardGrid, { [d.wideCardGrid]: r }),
              children: n.map((e, n) =>
                  (0, a.jsx)(
                      i.Z,
                      {
                          applicationId: t,
                          skuId: e,
                          isWide: r,
                          guildId: o,
                      },
                      "".concat(e, "-").concat(n),
                  ),
              ),
          });
}
