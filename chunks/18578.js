n.d(t, { K: () => m });
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    l = n(607070),
    c = n(70097),
    d = n(475595),
    u = n(78826),
    p = n(536087);
function m(e) {
    let { videoActive: t, imageAsset: n, videoAsset: s, imageDimensions: m, onLoadComplete: f } = e,
        g = o.useRef(null),
        x = o.useRef(t),
        h = (0, i.e7)([l.Z], () => l.Z.useReducedMotion);
    o.useEffect(() => {
        var e;
        if (null != s && null != g.current) {
            if (!(null == (e = s.asset) ? void 0 : e.isAnimated) || h) {
                (g.current.currentTime = 0), g.current.pause();
                return;
            }
            t && !x.current ? g.current.play() : !t && x.current && ((g.current.currentTime = 0), g.current.pause()), (x.current = t);
        }
    }, [t, s, h]);
    let b = null != n && !n.asset.isAnimated,
        j = null != s && s.asset.isAnimated,
        v = null != m ? (0, d.nK)(m.width, m.height) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b &&
                (0, r.jsx)(u.Fl, {
                    id: n.assetId,
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: n.alt,
                            className: a()(n.className, { [p.hidden]: t && j }),
                            src: (0, d.sN)(n.asset.url, {
                                format: 'webp',
                                width: null == v ? void 0 : v.width,
                                height: null == v ? void 0 : v.height
                            }),
                            onLoad: f
                        })
                }),
            j &&
                (0, r.jsx)(u.Fl, {
                    id: s.assetId,
                    children: (e) => {
                        var o, i, l, d;
                        return (0, r.jsx)(c.Z, {
                            ref: (t) => {
                                (e.current = t), (g.current = t);
                            },
                            autoPlay: !h && t,
                            loop: !0,
                            muted: !0,
                            preload: b ? 'none' : 'auto',
                            poster: b ? (null == (o = n.asset) ? void 0 : o.url) : void 0,
                            playsInline: !0,
                            className: a()(s.className, { [p.hidden]: !t && b }),
                            controls: !1,
                            onProgress: f,
                            children: (0, r.jsx)('source', {
                                src: null == (i = s.asset) ? void 0 : i.url,
                                type: null != (d = null == (l = s.asset) ? void 0 : l.mimetype) ? d : void 0
                            })
                        });
                    }
                })
        ]
    });
}
