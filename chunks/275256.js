"use strict";
n.r(t), n.d(t, { default: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(499373),
    o = n(607470),
    l = n(366523),
    u = n(531691);
function c(e) {
    var t;
    let { imageUrl: n, backgroundImageUrl: r, altText: c, customClassNames: d, rewardGraphic: _ } = e;
    if (null == n) return null;
    let h =
            ((t = _),
            t?.type === "image"
                ? (0, i.jsx)("img", { src: t.url, alt: t.alt, className: s()(u.wP, u.Mc) })
                : t?.type === "video"
                  ? (0, i.jsx)(o.A, {
                        src: t.url,
                        alt: t.alt,
                        className: s()(u.wP, u.Mc),
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                    })
                  : null),
        { containerClassName: f = u.wP, backgroundImageClassName: p, foregroundImageClassName: E } = d ?? {};
    return (0, i.jsxs)("div", {
        className: s()(u.LZ, { [u.Mc]: null != h }),
        children: [
            (0, i.jsx)(l.A, {
                cardImage: n,
                cardBackgroundImage: r,
                altText: c,
                shape: null != d ? "custom" : "square",
                containerClassName: s()(f, { [u.Mc]: null != h }),
                backgroundImageClassName: p,
                foregroundImageClassName: E,
            }),
            null != h && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(a.T, { size: "xs" }), h] }),
        ],
    });
}
