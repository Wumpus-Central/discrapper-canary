t.d(n, { n: () => s });
var l = t(54381),
    i = t(73346),
    a = t(164670),
    o = t(104869);
function s(e) {
    let { applicationId: n, backgroundImageAssetId: t } = e,
        s = null != t ? (0, i._W)(n, t, 1024, a._Z) : null;
    return (0, l.jsx)("div", {
        className: o.backgroundContainer,
        children:
            null != s
                ? (0, l.jsx)("div", {
                      className: o.backgroundImage,
                      style: { backgroundImage: "url(".concat(s, ")") },
                  })
                : null,
    });
}
