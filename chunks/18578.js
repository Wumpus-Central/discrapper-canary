n.d(t, { K: () => f });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(607070),
    c = n(70097),
    u = n(475595),
    d = n(388032),
    _ = n(536087);
function f(e) {
    var t, n, a;
    let { videoActive: f, imageAsset: p, videoAsset: h, imageDimensions: m, onLoadComplete: g } = e,
        E = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        b = null == p || p.asset.isAnimated ? null : p.asset.url,
        y = null != h && h.asset.isAnimated ? h.asset.url : null,
        O = null == m ? void 0 : m.width,
        v = null == m ? void 0 : m.height,
        I = i.useMemo(() => {
            let e = null != O && null != v ? (0, u.nK)(O, v) : null;
            return null != b
                ? (0, u.sN)(b, {
                      format: 'webp',
                      width: null == e ? void 0 : e.width,
                      height: null == e ? void 0 : e.height
                  })
                : null != y
                  ? (0, u.f0)(y, null != e ? e : void 0)
                  : null;
        }, [b, y, O, v]);
    return null == I
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('img', {
                      alt: null != (t = null == p ? void 0 : p.alt) ? t : d.intl.string(d.t.P84bAA),
                      className: null != (n = null == p ? void 0 : p.className) ? n : _.image,
                      src: I,
                      onLoad: g
                  }),
                  !E &&
                      null != h &&
                      null != y &&
                      f &&
                      (0, r.jsx)(c.Z, {
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          preload: 'auto',
                          poster: I,
                          playsInline: !0,
                          className: o()(h.className, _.video, { [_.hidden]: !f }),
                          controls: !1,
                          onProgress: g,
                          children: (0, r.jsx)('source', {
                              src: h.asset.url,
                              type: null != (a = h.asset.mimetype) ? a : void 0
                          })
                      })
              ]
          });
}
