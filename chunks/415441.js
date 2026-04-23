"use strict";
n.d(t, { N: () => u });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(775602),
    o = n(607470),
    l = n(859387),
    d = n(985018),
    _ = n(840790);
function u(e) {
    let {
            showVideo: t,
            showImage: n = !0,
            imageAsset: u,
            videoAsset: c,
            imageSize: E,
            onLoadComplete: h,
            assetRef: m,
        } = e,
        f = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        g = null == u || u.asset.isAnimated ? null : u.asset.url,
        p = null != c && c.asset.isAnimated ? c.asset.url : null,
        A = E?.width,
        I = E?.height,
        T = r.useMemo(() => {
            let e = null != A && null != I ? (0, l.Yt)(A, I) : null;
            return null != g
                ? (0, l.UX)(g, { format: "webp", width: e?.width, height: e?.height })
                : null != p
                  ? (0, l.WV)(p, e ?? void 0)
                  : null;
        }, [g, p, A, I]);
    if (null == T) return null;
    let S = !f && null != c && null != p && t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (n || !S) &&
                (0, i.jsx)("img", {
                    alt: u?.alt ?? d.intl.string(d.t.P84bAD),
                    className: u?.className ?? _.S,
                    src: T,
                    onLoad: h,
                    ref: S ? void 0 : m,
                }),
            S &&
                (0, i.jsx)(o.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: T,
                    playsInline: !0,
                    className: c.className,
                    controls: !1,
                    onProgress: h,
                    ref: m,
                    "aria-label": c.alt,
                    children: (0, i.jsx)("source", { src: c.asset.url, type: c.asset.mimetype ?? void 0 }),
                }),
        ],
    });
}
