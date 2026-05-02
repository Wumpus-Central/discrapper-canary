l.d(t, { N: () => c });
var n = l(627968),
    r = l(64700),
    s = l(17928),
    u = l(775602),
    a = l(607470),
    i = l(859387),
    o = l(375708),
    d = l(840790);
function c(e) {
    let {
            showVideo: t,
            showImage: l = !0,
            imageAsset: c,
            videoAsset: E,
            imageSize: v,
            onLoadComplete: m,
            assetRef: f,
        } = e,
        _ = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        g = null == c || c.asset.isAnimated ? null : c.asset.url,
        p = null != E && E.asset.isAnimated ? E.asset.url : null,
        T = v?.width,
        A = v?.height,
        L = r.useMemo(() => {
            let e = null != T && null != A ? (0, i.Yt)(T, A) : null;
            return null != g
                ? (0, i.UX)(g, { format: "webp", width: e?.width, height: e?.height })
                : null != p
                  ? (0, i.WV)(p, e ?? void 0)
                  : null;
        }, [g, p, T, A]);
    if (null == L) return null;
    let H = !_ && null != E && null != p && t;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (l || !H) &&
                (0, n.jsx)("img", {
                    alt: c?.alt ?? o.intl.string(o.t.P84bAD),
                    className: c?.className ?? d.S,
                    src: L,
                    onLoad: m,
                    ref: H ? void 0 : f,
                }),
            H &&
                (0, n.jsx)(a.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: L,
                    playsInline: !0,
                    className: E.className,
                    controls: !1,
                    onProgress: m,
                    ref: f,
                    "aria-label": E.alt,
                    children: (0, n.jsx)("source", { src: E.asset.url, type: E.asset.mimetype ?? void 0 }),
                }),
        ],
    });
}
