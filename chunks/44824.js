t.d(l, { Z: () => u });
var n = t(200651),
    i = t(192379),
    r = t(70097),
    s = t(947849),
    a = t(981631),
    o = t(388032);
function d(e) {
    let { poster: l, src: t, width: s, height: o, naturalWidth: d, naturalHeight: u, play: h = !0, className: m, alt: c, responsive: p } = e,
        g = i.useRef(null);
    return (i.useEffect(() => {
        let { current: e } = g;
        null != e && (h ? e.play() : e.pause());
    }, [h]),
    (d <= a.N_j && u <= a.XKF) || (d <= a.XKF && u <= a.N_j))
        ? (0, n.jsx)(r.Z, {
              ref: g,
              className: m,
              poster: l,
              src: t,
              width: s,
              height: o,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: h,
              preload: 'none',
              'aria-label': c
          })
        : (0, n.jsx)('img', {
              alt: '',
              src: l,
              width: s,
              height: o
          });
}
function u(e) {
    let { src: l, poster: t, naturalWidth: i, naturalHeight: r, responsive: a, autoPlay: u, className: h, playable: m = !0, renderImageComponent: c, alt: p = o.intl.string(o.t.I5gL2N), sourceMetadata: g, ...v } = e;
    return (0, n.jsx)(s.h.Consumer, {
        children: (e) =>
            c({
                ...v,
                alt: p,
                src: t,
                containerClassName: h,
                autoPlay: u,
                animated: m,
                responsive: a,
                renderAccessory: e,
                tabIndex: m ? 0 : -1,
                dataSafeSrc: l,
                children(e) {
                    let { src: t, size: s, animating: o, alt: u } = e;
                    return (0, n.jsx)(d, {
                        alt: u,
                        className: h,
                        poster: t,
                        src: l,
                        width: s.width,
                        height: s.height,
                        naturalWidth: i,
                        naturalHeight: r,
                        responsive: a,
                        play: m && o
                    });
                },
                sourceMetadata: g,
                analyticsSource: 'LazyGIFV'
            })
    });
}
