s.r(e), s.d(e, { default: () => c });
var r = s(627968);
s(64700);
var n = s(366523),
    u = s(706522);
function c(a) {
    let { imageUrl: e, backgroundImageUrl: s, altText: c, customClassNames: l } = a;
    return null == e
        ? null
        : (0, r.jsx)(n.A, {
              cardImage: e,
              cardBackgroundImage: s,
              altText: c,
              shape: null != l ? "custom" : "square",
              containerClassName: l?.containerClassName ?? u.w,
              backgroundImageClassName: l?.backgroundImageClassName,
              foregroundImageClassName: l?.foregroundImageClassName,
          });
}
