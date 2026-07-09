r.d(t, { N: () => d });
var l = r(627968),
    n = r(64700),
    s = r(17928),
    u = r(775602),
    a = r(607470),
    i = r(46948),
    o = r(375708),
    c = r(72662);
function d(e) {
    let {
            showVideo: t,
            showImage: r = !0,
            imageAsset: d,
            videoAsset: m,
            imageSize: v,
            onLoadComplete: f,
            assetRef: g,
            imageRef: E,
        } = e,
        L = (0, s.bG)([u.Ay], () => u.Ay.useReducedMotion),
        h = null == d || d.asset.isAnimated ? null : d.asset.url,
        A = null != m && m.asset.isAnimated ? m.asset.url : null,
        p = v?.width,
        M = v?.height,
        q = n.useMemo(() => {
            let e = null != p && null != M ? (0, i.Yt)(p, M) : null;
            return null != h
                ? (0, i.UX)(h, { format: "webp", width: e?.width, height: e?.height })
                : null != A
                  ? (0, i.WV)(A, e ?? void 0)
                  : null;
        }, [h, A, p, M]);
    if (null == q) return null;
    let w = !L && null != m && null != A && t;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (r || !w) &&
                (0, l.jsx)("img", {
                    alt: d?.alt ?? o.intl.string(o.t.P84bAD),
                    className: d?.className ?? c.S,
                    src: q,
                    onLoad: f,
                    ref: (e) => {
                        null != E && (E.current = e), w || null == g || (g.current = e);
                    },
                }),
            w &&
                (0, l.jsx)(a.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: q,
                    playsInline: !0,
                    className: m.className,
                    controls: !1,
                    onProgress: f,
                    ref: g,
                    "aria-label": m.alt,
                    children: (0, l.jsx)("source", { src: m.asset.url, type: m.asset.mimetype ?? void 0 }),
                }),
        ],
    });
}
