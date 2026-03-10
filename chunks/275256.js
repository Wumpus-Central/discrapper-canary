s.r(e), s.d(e, { default: () => u });
var r = s(627968);
s(64700);
var l = s(503698),
    n = s.n(l),
    c = s(366523),
    m = s(706522);
function u(a) {
    let { imageUrl: e, backgroundImageUrl: s, altText: l, overlayImageUrl: u, customClassNames: d } = a;
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              className: m.LZ,
              children: [
                  (0, r.jsx)(c.A, {
                      cardImage: e,
                      cardBackgroundImage: s,
                      altText: l,
                      shape: null != d ? "custom" : "square",
                      containerClassName: n()(d?.containerClassName ?? m.wP, null != u && m.rs),
                      backgroundImageClassName: d?.backgroundImageClassName,
                      foregroundImageClassName: d?.foregroundImageClassName,
                  }),
                  null != u && (0, r.jsx)("img", { src: u, alt: "", className: m.CQ }),
              ],
          });
}
