n.d(t, { N: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(775602),
    c = n(607470),
    u = n(579473),
    d = n(985018),
    f = n(545965);
function p(e) {
    var t, n, a;
    let { showVideo: p, imageAsset: _, videoAsset: h, imageSize: m, onLoadComplete: g, assetRef: E } = e,
        b = (0, o.bG)([l.A], () => l.A.useReducedMotion),
        y = null == _ || _.asset.isAnimated ? null : _.asset.url,
        O = null != h && h.asset.isAnimated ? h.asset.url : null,
        A = null == m ? void 0 : m.width,
        v = null == m ? void 0 : m.height,
        S = i.useMemo(() => {
            let e = null != A && null != v ? (0, u.Yt)(A, v) : null;
            return null != y
                ? (0, u.UX)(y, {
                      format: "webp",
                      width: null == e ? void 0 : e.width,
                      height: null == e ? void 0 : e.height,
                  })
                : null != O
                  ? (0, u.WV)(O, null != e ? e : void 0)
                  : null;
        }, [y, O, A, v]);
    if (null == S) return null;
    let I = !b && null != h && null != O && p;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                alt: null != (t = null == _ ? void 0 : _.alt) ? t : d.intl.string(d.t.P84bAD),
                className: null != (n = null == _ ? void 0 : _.className) ? n : f.Sl,
                src: S,
                onLoad: g,
                ref: I ? void 0 : E,
            }),
            I &&
                p &&
                (0, r.jsx)(c.A, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    preload: "auto",
                    poster: S,
                    playsInline: !0,
                    className: s()(h.className, f.Ki, { [f.R]: !p }),
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
