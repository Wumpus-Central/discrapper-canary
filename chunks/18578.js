n.d(t, { K: () => p });
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    l = n(607070),
    c = n(70097),
    d = n(78826),
    u = n(536087);
function p(e) {
    let { videoActive: t, imageAsset: n, videoAsset: s, onLoadComplete: p } = e,
        m = o.useRef(null),
        f = o.useRef(t),
        g = (0, i.e7)([l.Z], () => l.Z.useReducedMotion);
    o.useEffect(() => {
        var e;
        if (null != s && null != m.current) {
            if (!(null == (e = s.asset) ? void 0 : e.isAnimated) || g) {
                (m.current.currentTime = 0), m.current.pause();
                return;
            }
            t && !f.current ? m.current.play() : !t && f.current && ((m.current.currentTime = 0), m.current.pause()), (f.current = t);
        }
    }, [t, s, g]);
    let x = null != n && !n.asset.isAnimated,
        h = null != s && s.asset.isAnimated;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            x &&
                (0, r.jsx)(d.Fl, {
                    id: n.assetId,
                    children: (e) => {
                        var o;
                        return (0, r.jsx)('img', {
                            ref: e,
                            alt: n.alt,
                            className: a()(n.className, { [u.hidden]: t && h }),
                            src: null == (o = n.asset) ? void 0 : o.url,
                            onLoad: p
                        });
                    }
                }),
            h &&
                (0, r.jsx)(d.Fl, {
                    id: s.assetId,
                    children: (e) => {
                        var o, i, l, d;
                        return (0, r.jsx)(c.Z, {
                            ref: (t) => {
                                (e.current = t), (m.current = t);
                            },
                            autoPlay: !g && t,
                            loop: !0,
                            muted: !0,
                            preload: x ? 'none' : 'auto',
                            poster: x ? (null == (o = n.asset) ? void 0 : o.url) : void 0,
                            playsInline: !0,
                            className: a()(s.className, { [u.hidden]: !t && x }),
                            controls: !1,
                            onProgress: p,
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
