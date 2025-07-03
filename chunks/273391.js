(n.d(t, { v: () => x }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(36793),
    i = n(33309),
    s = n(481060),
    o = n(710845),
    c = n(197712),
    u = n(511004),
    d = n(598117),
    h = n(388032),
    p = n(917093);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = new o.Z('ImageEditor'),
    v = {
        width: 256,
        height: 256
    },
    x = (e) => {
        let { file: t, imageUri: n, onUpdate: o } = e,
            x = l.useRef({
                x: 0,
                y: 0
            }),
            E = l.useRef(null),
            [N, D] = l.useState(1),
            [I, C] = l.useState(null),
            [y, S] = l.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [w, A] = l.useState(0),
            [k, M] = l.useState({
                x: 0,
                y: 0
            }),
            [T, R] = l.useState(!1),
            P = 'image/gif' === t.type,
            L = (0, i.v)(t.type),
            z = L && !P,
            [Z, G] = l.useState(null);
        l.useEffect(() => {
            (0, u.Z)();
        }, []);
        let U = l.useCallback(
                (e) => {
                    if (null == E.current) return;
                    let { x: t, y: n } = (0, c.U$)(e.x, e.y, y);
                    ((x.current = {
                        x: t,
                        y: n
                    }),
                        (E.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(n, 'px, 0) rotate(').concat(w, 'deg)')));
                },
                [E, w, y]
            ),
            W = l.useCallback(
                (e) => {
                    if (null == I) return;
                    let t = O(I, e, L),
                        { x: n, y: r } = x.current;
                    (D(e),
                        S(t),
                        U({
                            x: n,
                            y: r
                        }));
                },
                [I, U, L]
            ),
            B = l.useCallback(() => {
                if (null == E.current || null == I) return;
                let e = (w + 90) % 360,
                    t = -x.current.x,
                    n = x.current.y,
                    r = I.height,
                    l = I.width,
                    a = O(
                        {
                            width: r,
                            height: l
                        },
                        N,
                        L
                    );
                (U({
                    x: n,
                    y: t
                }),
                    A(e),
                    C({
                        width: r,
                        height: l
                    }),
                    S(a));
            }, [I, w, U, N, L]),
            F = l.useCallback(() => {
                if (null == I) return {};
                let { height: e, width: t } = _(b(I, w), N);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [I, w, N]),
            V = l.useCallback((e) => {
                (M({
                    x: e.clientX - x.current.x,
                    y: e.clientY - x.current.y
                }),
                    R(!0));
            }, []);
        l.useEffect(() => {
            let e = () => R(!1);
            return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
        }, []);
        let H = l.useCallback(
            (e) => {
                let { x: t, y: n } = x.current;
                T &&
                    (e.clientX !== t || e.clientY !== n) &&
                    U({
                        x: (t = e.clientX - k.x),
                        y: (n = e.clientY - k.y)
                    });
            },
            [T, k, U]
        );
        l.useEffect(() => {
            if (T) return (window.addEventListener('mousemove', H), () => window.removeEventListener('mousemove', H));
        }, [H, T]);
        let Y = l.useRef(null),
            J = l.useCallback(async () => {
                let e;
                if (null == E.current || null == I) return;
                let r = Date.now(),
                    l = E.current,
                    i = {
                        height: d.eT,
                        width: d.eT
                    },
                    s = null;
                if ((null != Y.current && (Y.current(), (Y.current = null)), P))
                    try {
                        let n = j(
                                {
                                    file: t,
                                    image: l,
                                    cropDimensions: v,
                                    cropOriginCoordinates: x.current,
                                    maxDimensions: i,
                                    imageRotation: w,
                                    resizeWidth: d.eT,
                                    resizeHeight: d.eT
                                },
                                I,
                                N
                            ),
                            { result: r, cancelFn: a } = await (0, c.$p)(n);
                        ((Y.current = a), (e = await r));
                    } catch (e) {
                        (f.error('Error cropping GIF', e), (s = d.ze.GIF_CROPPING));
                    } finally {
                        var u;
                        (null == (u = Y.current) || u.call(Y), (Y.current = null));
                    }
                else
                    e = z
                        ? n
                        : (0, a.PT)({
                              image: l,
                              cropDimensions: v,
                              cropOriginCoordinates: x.current,
                              maxDimensions: i,
                              imageRotation: w
                          });
                return (
                    o({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: s,
                        loading: !1
                    }),
                    () => {
                        var e;
                        (null == (e = Y.current) || e.call(Y), (Y.current = null));
                    }
                );
            }, [t, w, P, z, o, I, N, n]);
        l.useEffect(() => {
            J();
        }, [J, w, I, T, N, Z]);
        let K = l.useCallback(() => {
            if (null == E.current) return;
            let e = E.current.naturalWidth,
                t = E.current.naturalHeight;
            C({
                width: e,
                height: t
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (G(n),
                D(n),
                S(
                    O(
                        {
                            width: e,
                            height: t
                        },
                        n,
                        L
                    )
                ));
        }, [L]);
        return (0, r.jsxs)('div', {
            className: p.imageEditor,
            children: [
                (0, r.jsxs)('div', {
                    className: p.editingContainer,
                    children: [
                        (0, r.jsx)('img', {
                            onLoad: K,
                            onError: () => {
                                o({
                                    error: d.ze.IMAGE_LOAD,
                                    loading: !1
                                });
                            },
                            style: g(
                                {
                                    opacity: +(null != I),
                                    transform: 'translate3d('.concat(x.current.x, 'px, ').concat(x.current.y, 'px, 0) rotate(').concat(w, 'deg)')
                                },
                                F()
                            ),
                            className: p.image,
                            src: n,
                            crossOrigin: 'anonymous',
                            alt: h.intl.string(h.t.EYR1FR),
                            ref: E,
                            onMouseDown: V,
                            draggable: !1
                        }),
                        !z &&
                            (0, r.jsx)('div', {
                                className: p.overlay,
                                style: {
                                    opacity: +(null != I),
                                    width: v.width,
                                    height: v.height
                                }
                            })
                    ]
                }),
                z
                    ? (0, r.jsx)('div', {
                          className: p.animatedInfoContainer,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-muted',
                              children: h.intl.string(h.t['5XCxio'])
                          })
                      })
                    : (0, r.jsxs)('div', {
                          className: p.toolsContainer,
                          children: [
                              (0, r.jsx)(s.ua7, {
                                  text: h.intl.string(h.t['oCs/+P']),
                                  'aria-label': h.intl.string(h.t['oCs/+P']),
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = (function (e, t) {
                                              if (null == e) return {};
                                              var n,
                                                  r,
                                                  l = (function (e, t) {
                                                      if (null == e) return {};
                                                      var n,
                                                          r,
                                                          l = {},
                                                          a = Object.keys(e);
                                                      for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                                                      return l;
                                                  })(e, t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var a = Object.getOwnPropertySymbols(e);
                                                  for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                                              }
                                              return l;
                                          })(e, ['onClick']);
                                      return (0, r.jsx)(
                                          s.zxk,
                                          m(
                                              g(
                                                  {
                                                      className: p.rotateButton,
                                                      look: s.zxk.Looks.BLANK,
                                                      size: s.PhG.NONE,
                                                      color: s.zxk.Colors.TRANSPARENT,
                                                      grow: !1
                                                  },
                                                  n
                                              ),
                                              {
                                                  onClick: B,
                                                  children: (0, r.jsx)(s.Vk2, {
                                                      size: 'sm',
                                                      color: s.TVs.colors.ICON_SECONDARY
                                                  })
                                              }
                                          )
                                      );
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: p.zoomControls,
                                  children: [
                                      (0, r.jsx)(s.BlJ, {
                                          color: s.TVs.colors.ICON_SECONDARY,
                                          size: 'sm'
                                      }),
                                      null != Z &&
                                          (0, r.jsx)(s.iRW, {
                                              className: p.slider,
                                              initialValue: Z,
                                              minValue: 1,
                                              maxValue: 4,
                                              keyboardStep: 0.025,
                                              asValueChanges: W,
                                              equidistant: !0,
                                              hideBubble: !0,
                                              'aria-label': h.intl.string(h.t['2hPcVF'])
                                          }),
                                      (0, r.jsx)(s.OyE, {
                                          color: s.TVs.colors.ICON_SECONDARY,
                                          size: 'sm'
                                      })
                                  ]
                              })
                          ]
                      })
            ]
        });
    },
    b = (e, t) => {
        let { width: n, height: r } = e;
        return t % 180 != 0
            ? {
                  width: r,
                  height: n
              }
            : {
                  width: n,
                  height: r
              };
    },
    _ = (e, t) => {
        let { width: n, height: r } = e,
            l = 256 * t,
            a = n / r;
        return (
            n > r ? (r = (n = l) / a) : (n = (r = l) * a),
            {
                width: n,
                height: r
            }
        );
    };
function O(e, t, n) {
    let { width: r, height: l } = _(e, t),
        a = Math.abs(256 - r) / 2,
        i = Math.abs(256 - l) / 2;
    return n && (r < 256 || l < 256)
        ? {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
          }
        : {
              top: i,
              bottom: -i,
              left: -a,
              right: a
          };
}
let j = (e, t, n) => {
    let { height: r, width: l } = _(t, n),
        a = (r = Math.min(r, 256)) / (l = Math.min(l, 256)),
        i = {
            height: r,
            width: l
        },
        s = Math.floor(a < 1 ? d.eT * a : d.eT / a),
        o = a < 1 ? s : d.eT,
        c = a > 1 ? s : d.eT;
    return m(g({}, e), {
        cropDimensions: i,
        resizeHeight: o,
        resizeWidth: c
    });
};
