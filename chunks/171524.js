t.d(n, { n: () => i });
var a = t(951288),
    l = t(73346),
    r = t(104869);
function i(e) {
    let { applicationId: n, backgroundImageAssetId: t } = e,
        i = null != t ? (0, l._W)(n, t, 1024) : null;
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
