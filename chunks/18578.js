n.d(t, { K: () => p });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(607070),
    c = n(70097),
    u = n(475595),
    d = n(388032),
    f = n(633515);
function p(e) {
    var t, n, a;
    let { showVideo: p, imageAsset: _, videoAsset: m, imageSize: h, onLoadComplete: g, assetRef: E } = e,
        b = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        y = null == _ || _.asset.isAnimated ? null : _.asset.url,
        O = null != m && m.asset.isAnimated ? m.asset.url : null,
        v = null == h ? void 0 : h.width,
        S = null == h ? void 0 : h.height,
        I = i.useMemo(() => {
            let e = null != v && null != S ? (0, u.nK)(v, S) : null;
            return null != y
                ? (0, u.sN)(y, {
                      format: "webp",
                      width: null == e ? void 0 : e.width,
                      height: null == e ? void 0 : e.height,
                  })
                : null != O
                  ? (0, u.f0)(O, null != e ? e : void 0)
                  : null;
        }, [y, O, v, S]);
    if (null == I) return null;
    let T = !b && null != m && null != O && p;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                alt: null != (t = null == _ ? void 0 : _.alt) ? t : d.intl.string(d.t.P84bAD),
                className: null != (n = null == _ ? void 0 : _.className) ? n : f.image,
                src: I,
                onLoad: g,
                ref: T ? void 0 : E,
            }),
            T &&
                p &&
                (0, r.jsx)(c.Z, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: I,
                    playsInline: !0,
                    className: o()(m.className, f.video, { [f.hidden]: !p }),
                    controls: !1,
                    onProgress: g,
                    ref: E,
                    children: (0, r.jsx)("source", {
                        src: m.asset.url,
                        type: null != (a = m.asset.mimetype) ? a : void 0,
                    }),
                }),
        ],
    });
}
