a.d(t, { N: () => u });
var r = a(627968),
    n = a(64700),
    i = a(17928),
    l = a(775602),
    o = a(607470),
    s = a(859387),
    d = a(985018),
    c = a(840790);
function u(e) {
    let {
            showVideo: t,
            showImage: a = !0,
            imageAsset: u,
            videoAsset: p,
            imageSize: m,
            onLoadComplete: h,
            assetRef: v,
        } = e,
        g = (0, i.bG)([l.A], () => l.A.useReducedMotion),
        _ = null == u || u.asset.isAnimated ? null : u.asset.url,
        f = null != p && p.asset.isAnimated ? p.asset.url : null,
        x = m?.width,
        b = m?.height,
        E = n.useMemo(() => {
            let e = null != x && null != b ? (0, s.Yt)(x, b) : null;
            return null != _
                ? (0, s.UX)(_, { format: "webp", width: e?.width, height: e?.height })
                : null != f
                  ? (0, s.WV)(f, e ?? void 0)
                  : null;
        }, [_, f, x, b]);
    if (null == E) return null;
    let T = !g && null != p && null != f && t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (a || !T) &&
                (0, r.jsx)("img", {
                    alt: u?.alt ?? d.intl.string(d.t.P84bAD),
                    className: u?.className ?? c.S,
                    src: E,
                    onLoad: h,
                    ref: T ? void 0 : v,
                }),
            T &&
                (0, r.jsx)(o.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: E,
                    playsInline: !0,
                    className: p.className,
                    controls: !1,
                    onProgress: h,
                    ref: v,
                    "aria-label": p.alt,
                    children: (0, r.jsx)("source", { src: p.asset.url, type: p.asset.mimetype ?? void 0 }),
                }),
        ],
    });
}
