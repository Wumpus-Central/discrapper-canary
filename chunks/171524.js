n.d(t, { n: () => i });
var a = n(951288),
    r = n(73346),
    l = n(104869);
function i(e) {
    let { applicationId: t, backgroundImageAssetId: n } = e,
        i = null != n ? (0, r._W)(t, n, 1024) : null;
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: l.backgroundContainer,
              children: (0, a.jsx)("div", {
                  className: l.backgroundImage,
                  style: { backgroundImage: "url(".concat(i, ")") },
              }),
          });
}
