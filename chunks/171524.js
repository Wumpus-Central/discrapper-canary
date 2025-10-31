l.d(n, { n: () => r });
var t = l(951288),
    i = l(73346),
    a = l(104869);
function r(e) {
    let { applicationId: n, backgroundImageAssetId: l } = e,
        r = null != l ? (0, i._W)(n, l, 1024) : null;
    return null == r
        ? null
        : (0, t.jsx)("div", {
              className: a.backgroundContainer,
              children: (0, t.jsx)("div", {
                  className: a.backgroundImage,
                  style: { backgroundImage: "url(".concat(r, ")") },
              }),
          });
}
