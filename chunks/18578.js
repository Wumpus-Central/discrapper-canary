n.d(t, { K: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(607070),
    c = n(70097),
    u = n(475595),
    d = n(388032),
    f = n(288872);
function _(e) {
    var t, n, a;
    let { showVideo: _, imageAsset: p, videoAsset: h, imageSize: m, onLoadComplete: g, assetRef: E } = e,
        b = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        y = null == p || p.asset.isAnimated ? null : p.asset.url,
        O = null != h && h.asset.isAnimated ? h.asset.url : null,
        v = null == m ? void 0 : m.width,
        I = null == m ? void 0 : m.height,
        T = i.useMemo(() => {
            let e = null != v && null != I ? (0, u.nK)(v, I) : null;
            return null != y
                ? (0, u.sN)(y, {
                      format: "webp",
                      width: null == e ? void 0 : e.width,
                      height: null == e ? void 0 : e.height,
                  })
                : null != O
                  ? (0, u.f0)(O, null != e ? e : void 0)
                  : null;
        }, [y, O, v, I]);
    if (null == T) return null;
    let S = !b && null != h && null != O && _;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                alt: null != (t = null == p ? void 0 : p.alt) ? t : d.intl.string(d.t.P84bAD),
                className: null != (n = null == p ? void 0 : p.className) ? n : f.image,
                src: T,
                onLoad: g,
                ref: S ? void 0 : E,
            }),
            S &&
                _ &&
                (0, r.jsx)(c.Z, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: T,
                    playsInline: !0,
                    className: o()(h.className, f.video, { [f.hidden]: !_ }),
                    controls: !1,
                    onProgress: g,
                    ref: E,
                    children: (0, r.jsx)("source", {
                        src: h.asset.url,
                        type: null != (a = h.asset.mimetype) ? a : void 0,
                    }),
                }),
        ],
    });
}
