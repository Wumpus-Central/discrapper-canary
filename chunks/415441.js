"use strict";
n.d(t, { N: () => d });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(775602),
    o = n(607470),
    l = n(579473),
    u = n(985018),
    c = n(840790);
function d(e) {
    let {
            showVideo: t,
            showImage: n = !0,
            imageAsset: d,
            videoAsset: _,
            imageSize: f,
            onLoadComplete: p,
            assetRef: h,
        } = e,
        E = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        m = null == d || d.asset.isAnimated ? null : d.asset.url,
        g = null != _ && _.asset.isAnimated ? _.asset.url : null,
        A = f?.width,
        I = f?.height,
        T = i.useMemo(() => {
            let e = null != A && null != I ? (0, l.Yt)(A, I) : null;
            return null != m
                ? (0, l.UX)(m, { format: "webp", width: e?.width, height: e?.height })
                : null != g
                  ? (0, l.WV)(g, e ?? void 0)
                  : null;
        }, [m, g, A, I]);
    if (null == T) return null;
    let S = !E && null != _ && null != g && t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (n || !S) &&
                (0, r.jsx)("img", {
                    alt: d?.alt ?? u.intl.string(u.t.P84bAD),
                    className: d?.className ?? c.S,
                    src: T,
                    onLoad: p,
                    ref: S ? void 0 : h,
                }),
            S &&
                (0, r.jsx)(o.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: T,
                    playsInline: !0,
                    className: _.className,
                    controls: !1,
                    onProgress: p,
                    ref: h,
                    "aria-label": _.alt,
                    children: (0, r.jsx)("source", { src: _.asset.url, type: _.asset.mimetype ?? void 0 }),
                }),
        ],
    });
}
