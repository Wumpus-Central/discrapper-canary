a.d(t, { N: () => u });
var n = a(627968),
    r = a(64700),
    i = a(311907),
    l = a(775602),
    o = a(607470),
    s = a(579473),
    d = a(985018),
    c = a(72662);
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
        _ = (0, i.bG)([l.A], () => l.A.useReducedMotion),
        g = null == u || u.asset.isAnimated ? null : u.asset.url,
        f = null != p && p.asset.isAnimated ? p.asset.url : null,
        b = m?.width,
        x = m?.height,
        E = r.useMemo(() => {
            let e = null != b && null != x ? (0, s.Yt)(b, x) : null;
            return null != g
                ? (0, s.UX)(g, { format: "webp", width: e?.width, height: e?.height })
                : null != f
                  ? (0, s.WV)(f, e ?? void 0)
                  : null;
        }, [g, f, b, x]);
    if (null == E) return null;
    let T = !_ && null != p && null != f && t;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (a || !T) &&
                (0, n.jsx)("img", {
                    alt: u?.alt ?? d.intl.string(d.t.P84bAD),
                    className: u?.className ?? c.S,
                    src: E,
                    onLoad: h,
                    ref: T ? void 0 : v,
                }),
            T &&
                (0, n.jsx)(o.A, {
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
                    children: (0, n.jsx)("source", { src: p.asset.url, type: p.asset.mimetype ?? void 0 }),
                }),
        ],
    });
}
