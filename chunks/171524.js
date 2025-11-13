t.d(n, { n: () => r });
var l = t(951288),
    i = t(73346),
    a = t(104869);
function r(e) {
    let { applicationId: n, backgroundImageAssetId: t } = e,
        r = null != t ? (0, i._W)(n, t, 1024) : null;
    return null == r
        ? null
        : (0, l.jsx)("div", {
              className: a.backgroundContainer,
              children: (0, l.jsx)("div", {
                  className: a.backgroundImage,
                  style: { backgroundImage: "url(".concat(r, ")") },
              }),
          });
}
