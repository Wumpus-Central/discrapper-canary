"use strict";
n.d(t, { N: () => d });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(775602),
    o = n(607470),
    l = n(46948),
    u = n(375708),
    c = n(840790);
function d(e) {
    let {
            showVideo: t,
            showImage: n = !0,
            imageAsset: d,
            videoAsset: _,
            imageSize: h,
            onLoadComplete: f,
            assetRef: p,
            imageRef: E,
        } = e,
        m = (0, s.bG)([a.Ay], () => a.Ay.useReducedMotion),
        g = null == d || d.asset.isAnimated ? null : d.asset.url,
        A = null != _ && _.asset.isAnimated ? _.asset.url : null,
        I = h?.width,
        T = h?.height,
        S = r.useMemo(() => {
            let e = null != I && null != T ? (0, l.Yt)(I, T) : null;
            return null != g
                ? (0, l.UX)(g, { format: "webp", width: e?.width, height: e?.height })
                : null != A
                  ? (0, l.WV)(A, e ?? void 0)
                  : null;
        }, [g, A, I, T]);
    if (null == S) return null;
    let y = !m && null != _ && null != A && t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (n || !y) &&
                (0, i.jsx)("img", {
                    alt: d?.alt ?? u.intl.string(u.t.P84bAD),
                    className: d?.className ?? c.S,
                    src: S,
                    onLoad: f,
                    ref: (e) => {
                        null != E && (E.current = e), y || null == p || (p.current = e);
                    },
                }),
            y &&
                (0, i.jsx)(o.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: S,
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
