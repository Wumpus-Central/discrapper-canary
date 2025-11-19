l.d(n, { n: () => r });
var t = l(54381),
    i = l(73346),
    a = l(104869);
function r(e) {
    let { applicationId: n, backgroundImageAssetId: l } = e,
        r = null != l ? (0, i._W)(n, l, 1024) : null;
    return (0, t.jsx)("div", {
        className: a.backgroundContainer,
        children:
            null != r
                ? (0, t.jsx)("div", {
                      className: a.backgroundImage,
                      style: { backgroundImage: "url(".concat(r, ")") },
                  })
                : null,
    });
}
