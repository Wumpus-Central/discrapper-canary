l.d(t, { Z: () => u });
var r = l(200651),
    n = l(192379),
    i = l(70097),
    s = l(947849),
    o = l(981631),
    a = l(388032);
function d(e) {
    let { poster: t, src: l, width: s, height: a, naturalWidth: d, naturalHeight: u, play: c = !0, className: h, alt: m, responsive: p } = e,
        g = n.useRef(null);
    return (n.useEffect(() => {
        let { current: e } = g;
        null != e && (c ? e.play() : e.pause());
    }, [c]),
    (d <= o.N_j && u <= o.XKF) || (d <= o.XKF && u <= o.N_j))
        ? (0, r.jsx)(i.Z, {
              ref: g,
              className: h,
              poster: t,
              src: l,
              width: s,
              height: a,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: c,
              preload: 'none',
              'aria-label': m
          })
        : (0, r.jsx)('img', {
              alt: '',
              src: t,
              width: s,
              height: a
          });
}
function u(e) {
    var { src: t, poster: l, naturalWidth: n, naturalHeight: i, responsive: o, autoPlay: u, className: c, playable: h = !0, renderImageComponent: m, alt: p = a.NW.string(a.t.I5gL2N), sourceMetadata: g } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var l,
                r,
                n = (function (e, t) {
                    if (null == e) return {};
                    var l,
                        r,
                        n = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (l = i[r]), t.indexOf(l) >= 0 || (n[l] = e[l]);
                    return n;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (l = i[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
            }
            return n;
        })(e, ['src', 'poster', 'naturalWidth', 'naturalHeight', 'responsive', 'autoPlay', 'className', 'playable', 'renderImageComponent', 'alt', 'sourceMetadata']);
    return (0, r.jsx)(s.h.Consumer, {
        children: (e) => {
            var s, a;
            return m(
                ((s = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(l);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = l[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, b)),
                (a = a =
                    {
                        alt: p,
                        src: l,
                        containerClassName: c,
                        autoPlay: u,
                        animated: h,
                        responsive: o,
                        renderAccessory: e,
                        tabIndex: h ? 0 : -1,
                        dataSafeSrc: t,
                        children(e) {
                            let { src: l, size: s, animating: a, alt: u } = e;
                            return (0, r.jsx)(d, {
                                alt: u,
                                className: c,
                                poster: l,
                                src: t,
                                width: s.width,
                                height: s.height,
                                naturalWidth: n,
                                naturalHeight: i,
                                responsive: o,
                                play: h && a
                            });
                        },
                        sourceMetadata: g,
                        analyticsSource: 'LazyGIFV'
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var l = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              l.push.apply(l, r);
                          }
                          return l;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                s)
            );
        }
    });
}
