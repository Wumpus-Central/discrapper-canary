n.d(t, {
    N: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(775602),
    o = n(607470),
    l = n(579473),
    c = n(985018),
    u = n(545965);

function d(e) {
    var t, n, d;
    let {
            showVideo: f,
            showImage: p = !0,
            imageAsset: _,
            videoAsset: h,
            imageSize: m,
            onLoadComplete: g,
            assetRef: E,
        } = e,
        y = (0, a.bG)([s.A], () => s.A.useReducedMotion),
        b = null == _ || _.asset.isAnimated ? null : _.asset.url,
        O = null != h && h.asset.isAnimated ? h.asset.url : null,
        v = null == m ? void 0 : m.width,
        A = null == m ? void 0 : m.height,
        I = i.useMemo(() => {
            let e = null != v && null != A ? (0, l.Yt)(v, A) : null;
            return null != b
                ? (0, l.UX)(b, {
                      format: "webp",
                      width: null == e ? void 0 : e.width,
                      height: null == e ? void 0 : e.height,
                  })
                : null != O
                  ? (0, l.WV)(O, null != e ? e : void 0)
                  : null;
        }, [b, O, v, A]);
    if (null == I) return null;
    let S = !y && null != h && null != O && f;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (p || !S || !f) &&
                (0, r.jsx)("img", {
                    alt: null != (t = null == _ ? void 0 : _.alt) ? t : c.intl.string(c.t.P84bAD),
                    className: null != (n = null == _ ? void 0 : _.className) ? n : u.S,
                    src: I,
                    onLoad: g,
                    ref: S ? void 0 : E,
                }),
            S &&
                f &&
                (0, r.jsx)(o.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: I,
                    playsInline: !0,
                    className: h.className,
                    controls: !1,
                    onProgress: g,
                    ref: E,
                    "aria-label": h.alt,
                    children: (0, r.jsx)("source", {
                        src: h.asset.url,
                        type: null != (d = h.asset.mimetype) ? d : void 0,
                    }),
                }),
        ],
    });
}
