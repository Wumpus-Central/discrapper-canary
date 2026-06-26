"use strict";
n.d(t, { N: () => d });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(775602),
    o = n(607470),
    l = n(46948),
    u = n(375708),
    c = n(72662);
function d(e) {
    let {
            showVideo: t,
            showImage: n = !0,
            imageAsset: d,
            videoAsset: _,
            imageSize: h,
            onLoadComplete: f,
            assetRef: p,
        } = e,
        E = (0, s.bG)([a.Ay], () => a.Ay.useReducedMotion),
        m = null == d || d.asset.isAnimated ? null : d.asset.url,
        g = null != _ && _.asset.isAnimated ? _.asset.url : null,
        A = h?.width,
        I = h?.height,
        T = r.useMemo(() => {
            let e = null != A && null != I ? (0, l.Yt)(A, I) : null;
            return null != m
                ? (0, l.UX)(m, { format: "webp", width: e?.width, height: e?.height })
                : null != g
                  ? (0, l.WV)(g, e ?? void 0)
                  : null;
        }, [m, g, A, I]);
    if (null == T) return null;
    let S = !E && null != _ && null != g && t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (n || !S) &&
                (0, i.jsx)("img", {
                    alt: d?.alt ?? u.intl.string(u.t.P84bAD),
                    className: d?.className ?? c.S,
                    src: T,
                    onLoad: f,
                    ref: S ? void 0 : p,
                }),
            S &&
                (0, i.jsx)(o.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: T,
                    playsInline: !0,
                    className: _.className,
                    controls: !1,
                    onProgress: f,
                    ref: p,
                    "aria-label": _.alt,
                    children: (0, i.jsx)("source", { src: _.asset.url, type: _.asset.mimetype ?? void 0 }),
                }),
        ],
    });
}
