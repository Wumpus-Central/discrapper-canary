t.d(l, { Z: () => d }), t(866573), t(642549), t(787622);
var n = t(200651),
    r = t(192379),
    i = t(70097),
    s = t(947849),
    a = t(981631),
    o = t(388032);
function u(e) {
    let { poster: l, src: t, width: s, height: o, naturalWidth: u, naturalHeight: d, play: c = !0, className: h, alt: m, responsive: p } = e,
        g = r.useRef(null);
    return (r.useEffect(() => {
        let { current: e } = g;
        null != e &&
            (c
                ? e.play().catch((e) => {
                      if (!(e instanceof DOMException) || 'NotAllowedError' !== e.name) throw e;
                  })
                : e.pause());
    }, [c]),
    (u <= a.N_j && d <= a.XKF) || (u <= a.XKF && d <= a.N_j))
        ? (0, n.jsx)(i.Z, {
              ref: g,
              className: h,
              poster: l,
              src: t,
              width: s,
              height: o,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: c,
              playsInline: !0,
              preload: 'none',
              'aria-label': m
          })
        : (0, n.jsx)('img', {
              alt: '',
              src: l,
              width: s,
              height: o
          });
}
function d(e) {
    var { src: l, poster: t, naturalWidth: r, naturalHeight: i, responsive: a, autoPlay: d, className: c, playable: h = !0, renderImageComponent: m, alt: p = o.NW.string(o.t.I5gL2N), sourceMetadata: g } = e,
        b = (function (e, l) {
            if (null == e) return {};
            var t,
                n,
                r = (function (e, l) {
                    if (null == e) return {};
                    var t,
                        n,
                        r = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (t = i[n]), l.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, l);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (t = i[n]), !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['src', 'poster', 'naturalWidth', 'naturalHeight', 'responsive', 'autoPlay', 'className', 'playable', 'renderImageComponent', 'alt', 'sourceMetadata']);
    return (0, n.jsx)(s.h.Consumer, {
        children: (e) => {
            var s, o;
            return m(
                ((s = (function (e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = null != arguments[l] ? arguments[l] : {},
                            n = Object.keys(t);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                })
                            )),
                            n.forEach(function (l) {
                                var n;
                                (n = t[l]),
                                    l in e
                                        ? Object.defineProperty(e, l, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[l] = n);
                            });
                    }
                    return e;
                })({}, b)),
                (o = o =
                    {
                        alt: p,
                        src: t,
                        containerClassName: c,
                        autoPlay: d,
                        animated: h,
                        responsive: a,
                        renderAccessory: e,
                        tabIndex: h ? 0 : -1,
                        dataSafeSrc: l,
                        children(e) {
                            let { src: t, size: s, animating: o, alt: d } = e;
                            return (0, n.jsx)(u, {
                                alt: d,
                                className: c,
                                poster: t,
                                src: l,
                                width: s.width,
                                height: s.height,
                                naturalWidth: r,
                                naturalHeight: i,
                                responsive: a,
                                play: h && o
                            });
                        },
                        sourceMetadata: g,
                        analyticsSource: 'LazyGIFV'
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o))
                    : (function (e, l) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, n);
                          }
                          return t;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                s)
            );
        }
    });
}
