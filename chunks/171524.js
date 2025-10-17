n.d(t, { n: () => i });
var a = n(951288),
    l = n(73346),
    r = n(104869);
function i(e) {
    let { applicationId: t, backgroundImageAssetId: n } = e,
        i = null != n ? (0, l._W)(t, n, 1024) : null;
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: r.backgroundContainer,
              children: (0, a.jsx)("div", {
                  className: r.backgroundImage,
                  style: { backgroundImage: "url(".concat(i, ")") },
              }),
          });
}
