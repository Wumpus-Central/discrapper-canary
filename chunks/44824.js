(t.d(l, { Z: () => u }), t(853839), t(570086), t(479048));
var r = t(255367),
    n = t(73800),
    i = t(70097),
    s = t(947849),
    a = t(981631),
    o = t(388032);
function d(e) {
    let { poster: l, src: t, width: s, height: o, naturalWidth: d, naturalHeight: u, play: c = !0, className: h, alt: m, responsive: p } = e,
        g = n.useRef(null);
    return (n.useEffect(() => {
        let { current: e } = g;
        null != e &&
            (c
                ? e.play().catch((e) => {
                      if (!(e instanceof DOMException) || 'NotAllowedError' !== e.name) throw e;
                  })
                : e.pause());
    }, [c]),
    (d <= a.N_j && u <= a.XKF) || (d <= a.XKF && u <= a.N_j))
        ? (0, r.jsx)(i.Z, {
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
        : (0, r.jsx)('img', {
              alt: '',
              src: l,
              width: s,
              height: o
          });
}
function u(e) {
    var { src: l, poster: t, naturalWidth: n, naturalHeight: i, responsive: a, autoPlay: u, className: c, playable: h = !0, renderImageComponent: m, alt: p = o.intl.string(o.t.I5gL2N), sourceMetadata: g } = e,
        b = (function (e, l) {
            if (null == e) return {};
            var t,
                r,
                n = (function (e, l) {
                    if (null == e) return {};
                    var t,
                        r,
                        n = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((t = i[r]), l.indexOf(t) >= 0 || (n[t] = e[t]));
                    return n;
                })(e, l);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((t = i[r]), !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]));
            }
            return n;
        })(e, ['src', 'poster', 'naturalWidth', 'naturalHeight', 'responsive', 'autoPlay', 'className', 'playable', 'renderImageComponent', 'alt', 'sourceMetadata']);
    return (0, r.jsx)(s.h.Consumer, {
        children: (e) => {
            var s, o;
            return m(
                ((s = (function (e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = null != arguments[l] ? arguments[l] : {},
                            r = Object.keys(t);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                })
                            )),
                            r.forEach(function (l) {
                                var r;
                                ((r = t[l]),
                                    l in e
                                        ? Object.defineProperty(e, l, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[l] = r));
                            }));
                    }
                    return e;
                })({}, b)),
                (o = o =
                    {
                        alt: p,
                        src: t,
                        containerClassName: c,
                        autoPlay: u,
                        animated: h,
                        responsive: a,
                        renderAccessory: e,
                        tabIndex: h ? 0 : -1,
                        dataSafeSrc: l,
                        children(e) {
                            let { src: t, size: s, animating: o, alt: u } = e;
                            return (0, r.jsx)(d, {
                                alt: u,
                                className: c,
                                poster: t,
                                src: l,
                                width: s.width,
                                height: s.height,
                                naturalWidth: n,
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
                              var r = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, r);
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
