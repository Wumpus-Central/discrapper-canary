"use strict";
n.d(t, { N: () => d });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(775602),
    o = n(607470),
    l = n(579473),
    u = n(985018),
    c = n(545965);
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
        m = (0, a.bG)([s.A], () => s.A.useReducedMotion),
        g = null == d || d.asset.isAnimated ? null : d.asset.url,
        E = null != _ && _.asset.isAnimated ? _.asset.url : null,
        A = f?.width,
        I = f?.height,
        T = i.useMemo(() => {
            let e = null != A && null != I ? (0, l.Yt)(A, I) : null;
            return null != g
                ? (0, l.UX)(g, { format: "webp", width: e?.width, height: e?.height })
                : null != E
                  ? (0, l.WV)(E, e ?? void 0)
                  : null;
        }, [g, E, A, I]);
    if (null == T) return null;
    let y = !m && null != _ && null != E && t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (n || !y || !t) &&
                (0, r.jsx)("img", {
                    alt: d?.alt ?? u.intl.string(u.t.P84bAD),
                    className: d?.className ?? c.S,
                    src: T,
                    onLoad: p,
                    ref: y ? void 0 : h,
                }),
            y &&
                t &&
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
