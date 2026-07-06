s.r(l), s.d(l, { default: () => i });
var e = s(627968);
s(64700);
var r = s(503698),
    n = s.n(r),
    u = s(499373),
    c = s(607470),
    t = s(366523),
    d = s(161515);
function i(a) {
    var l;
    let { imageUrl: s, backgroundImageUrl: r, altText: i, customClassNames: m, rewardGraphic: o } = a;
    if (null == s) return null;
    let p =
            ((l = o),
            l?.type === "image"
                ? (0, e.jsx)("img", { src: l.url, alt: l.alt, className: n()(d.wP, d.Mc) })
                : l?.type === "video"
                  ? (0, e.jsx)(c.A, {
                        src: l.url,
                        alt: l.alt,
                        className: n()(d.wP, d.Mc),
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                    })
                  : null),
        { containerClassName: g = d.wP, backgroundImageClassName: h, foregroundImageClassName: x } = m ?? {};
    return (0, e.jsxs)("div", {
        className: n()(d.LZ, { [d.Mc]: null != p }),
        children: [
            (0, e.jsx)(t.A, {
                cardImage: s,
                cardBackgroundImage: r,
                altText: i,
                shape: null != m ? "custom" : "square",
                containerClassName: n()(g, { [d.Mc]: null != p }),
                backgroundImageClassName: h,
                foregroundImageClassName: x,
            }),
            null != p && (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(u.T, { size: "xs" }), p] }),
        ],
    });
}
