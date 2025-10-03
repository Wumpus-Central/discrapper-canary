t.d(n, { t: () => o });
var a = t(951288);
t(647438);
var l = t(120356),
    r = t.n(l),
    i = t(840724),
    d = t(180165);
function o(e) {
    let { applicationId: n, skuIds: t, isWide: l } = e;
    return null == t || 0 === t.length
        ? null
        : (0, a.jsx)("div", {
              className: r()(d.container, d.cardGrid, { [d.wideCardGrid]: l }),
              children: t.map((e, t) =>
                  (0, a.jsx)(
                      i.Z,
                      {
                          applicationId: n,
                          skuId: e,
                          isWide: l,
                      },
                      "".concat(e, "-").concat(t),
                  ),
              ),
          });
}
