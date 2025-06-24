n.d(t, { K: () => m });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(442837),
    l = n(607070),
    c = n(70097),
    u = n(475595),
    d = n(78826),
    p = n(536087);
function m(e) {
    let { videoActive: t, imageAsset: n, videoAsset: o, imageDimensions: m, onLoadComplete: f } = e,
        g = s.useRef(null),
        x = s.useRef(t),
        h = (0, i.e7)([l.Z], () => l.Z.useReducedMotion);
    s.useEffect(() => {
        var e;
        if (null != o && null != g.current) {
            if (!(null == (e = o.asset) ? void 0 : e.isAnimated) || h) {
                (g.current.currentTime = 0), g.current.pause();
                return;
            }
            t && !x.current ? g.current.play() : !t && x.current && ((g.current.currentTime = 0), g.current.pause()), (x.current = t);
        }
    }, [t, o, h]);
    let b = null != n && !n.asset.isAnimated,
        j = null != o && o.asset.isAnimated,
        _ = null != m ? (0, u.nK)(m.width, m.height) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b &&
                (0, r.jsx)(d.Fl, {
                    id: n.assetId,
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: n.alt,
                            className: a()(n.className, { [p.hidden]: t && j }),
                            src: (0, u.sN)(n.asset.url, {
                                format: 'webp',
                                width: null == _ ? void 0 : _.width,
                                height: null == _ ? void 0 : _.height
                            }),
                            onLoad: f
                        })
                }),
            j &&
                (0, r.jsx)(d.Fl, {
                    id: o.assetId,
                    children: (e) => {
                        var s, i, l, u;
                        return (0, r.jsx)(c.Z, {
                            ref: (t) => {
                                (e.current = t), (g.current = t);
                            },
                            autoPlay: !h && t,
                            loop: !0,
                            muted: !0,
                            preload: b ? 'none' : 'auto',
                            poster: b ? (null == (s = n.asset) ? void 0 : s.url) : void 0,
                            playsInline: !0,
                            className: a()(o.className, { [p.hidden]: !t && b }),
                            controls: !1,
                            onProgress: f,
                            children: (0, r.jsx)('source', {
                                src: null == (i = o.asset) ? void 0 : i.url,
                                type: null != (u = null == (l = o.asset) ? void 0 : l.mimetype) ? u : void 0
                            })
                        });
                    }
                })
        ]
    });
}
