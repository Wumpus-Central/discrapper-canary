s.r(e), s.d(e, { default: () => u });
var l = s(627968);
s(64700);
var r = s(366523),
    n = s(706522);
function u(a) {
    var e;
    let { imageUrl: s, backgroundImageUrl: u, altText: d, customClassNames: o } = a;
    return null == s
        ? null
        : (0, l.jsx)(r.A, {
              cardImage: s,
              cardBackgroundImage: u,
              altText: d,
              shape: null != o ? "custom" : "square",
              containerClassName: null != (e = null == o ? void 0 : o.containerClassName) ? e : n.w,
              backgroundImageClassName: null == o ? void 0 : o.backgroundImageClassName,
              foregroundImageClassName: null == o ? void 0 : o.foregroundImageClassName,
          });
}
