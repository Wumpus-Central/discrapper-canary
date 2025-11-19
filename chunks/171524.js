l.d(e, { n: () => d });
var t = l(54381),
    i = l(73346),
    a = l(835388);
function d(n) {
    let { applicationId: e, backgroundImageAssetId: l } = n,
        d = null != l ? (0, i._W)(e, l, 1024) : null;
    return null == d
        ? null
        : (0, t.jsx)("div", {
              className: a.backgroundContainer,
              children: (0, t.jsx)("div", {
                  className: a.backgroundImage,
                  style: { backgroundImage: "url(".concat(d, ")") },
              }),
          });
}
