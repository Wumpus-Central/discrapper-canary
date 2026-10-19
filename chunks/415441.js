s.d(e, { N: () => d });
var t = s(477900),
    n = s(582128),
    u = s(17928),
    a = s(775602),
    r = s(607470),
    i = s(291749),
    o = s(105292),
    c = s(946747);
function d(l) {
    let {
            showVideo: e,
            showImage: s = !0,
            imageAsset: d,
            videoAsset: h,
            imageSize: p,
            onLoadComplete: m,
            assetRef: g,
            imageRef: b,
        } = l,
        w = (0, u.bG)([a.Ay], () => a.Ay.useReducedMotion),
        y = null == d || d.asset.isAnimated ? null : d.asset.url,
        A = null != h && h.asset.isAnimated ? h.asset.url : null,
        f = p?.width,
        N = p?.height,
        j = n.useMemo(() => {
            let l = null != f && null != N ? (0, i.Yt)(f, N) : null;
            return null != y
                ? (0, i.UX)(y, { format: "webp", width: l?.width, height: l?.height })
                : null != A
                  ? (0, i.WV)(A, l ?? void 0)
                  : null;
        }, [y, A, f, N]);
    if (null == j) return null;
    let k = !w && null != h && null != A && e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (s || !k) &&
                (0, t.jsx)("img", {
                    alt: d?.alt ?? o.intl.string(o.t.P84bAD),
                    className: d?.className ?? c.S,
                    src: j,
                    onLoad: m,
                    ref: (l) => {
                        (null != b && (b.current = l), k || null == g || (g.current = l));
                    },
                }),
            k &&
                (0, t.jsx)(r.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: j,
                    playsInline: !0,
                    className: h.className,
                    controls: !1,
                    onProgress: m,
                    ref: g,
                    "aria-label": h.alt,
                    children: (0, t.jsx)("source", { src: h.asset.url, type: h.asset.mimetype ?? void 0 }),
                }),
        ],
    });
}
