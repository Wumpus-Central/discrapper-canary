(n.d(t, { v: () => j }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(36793),
    o = n(33309),
    c = n(755721),
    u = n(481060),
    d = n(710845),
    m = n(197712),
    p = n(511004),
    g = n(598117),
    h = n(388032),
    f = n(917093);
function x(e) {
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
function v(e, t) {
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
let b = new d.Z('ImageEditor'),
    _ = {
        width: 240,
        height: 240
    },
    j = (e) => {
        let { file: t, imageUri: n, onUpdate: a } = e,
            d = l.useRef({
                x: 0,
                y: 0
            }),
            [j, y] = l.useState({
                x: 0,
                y: 0
            }),
            D = l.useRef(null),
            [I, S] = l.useState(1),
            [w, T] = l.useState(null),
            [A, M] = l.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [k, P] = l.useState(0),
            [R, L] = l.useState({
                x: 0,
                y: 0
            }),
            [Z, z] = l.useState(!1),
            G = 'image/gif' === t.type,
            U = (0, o.v)(t.type),
            W = U && !G,
            [B, F] = l.useState(null);
        l.useEffect(() => {
            (0, p.Z)();
        }, []);
        let H = l.useCallback(
                (e) => {
                    if (null == D.current) return;
                    let { x: t, y: n } = (0, m.U$)(e.x, e.y, A);
                    ((d.current = {
                        x: t,
                        y: n
                    }),
                        (D.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(n, 'px, 0) rotate(').concat(k, 'deg)')),
                        y({
                            x: t,
                            y: n
                        }));
                },
                [D, k, A]
            ),
            V = l.useCallback(
                (e) => {
                    if (null == w) return;
                    let t = E(w, e, U),
                        { x: n, y: r } = d.current;
                    (S(e),
                        M(t),
                        H({
                            x: n,
                            y: r
                        }));
                },
                [w, H, U]
            ),
            J = l.useCallback(() => {
                if (null == D.current || null == w) return;
                let e = (k + 90) % 360,
                    t = -d.current.x,
                    n = d.current.y,
                    r = w.height,
                    l = w.width,
                    a = E(
                        {
                            width: r,
                            height: l
                        },
                        I,
                        U
                    );
                (H({
                    x: n,
                    y: t
                }),
                    P(e),
                    T({
                        width: r,
                        height: l
                    }),
                    M(a));
            }, [w, k, H, I, U]),
            Y = l.useCallback(() => {
                if (null == w) return {};
                let { height: e, width: t } = N(O(w, k), I);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [w, k, I]),
            K = l.useCallback((e) => {
                (L({
                    x: e.clientX - d.current.x,
                    y: e.clientY - d.current.y
                }),
                    z(!0));
            }, []);
        l.useEffect(() => {
            let e = () => z(!1);
            return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
        }, []);
        let X = l.useCallback(
            (e) => {
                let { x: t, y: n } = d.current;
                Z &&
                    (e.clientX !== t || e.clientY !== n) &&
                    H({
                        x: (t = e.clientX - R.x),
                        y: (n = e.clientY - R.y)
                    });
            },
            [Z, R, H]
        );
        l.useEffect(() => {
            if (Z) return (window.addEventListener('mousemove', X), () => window.removeEventListener('mousemove', X));
        }, [X, Z]);
        let q = l.useRef(null),
            $ = l.useCallback(async () => {
                let e;
                if (null == D.current || null == w) return;
                let r = Date.now(),
                    l = D.current,
                    i = {
                        height: g.eT,
                        width: g.eT
                    },
                    o = null;
                if ((null != q.current && (q.current(), (q.current = null)), G))
                    try {
                        let n = C(
                                {
                                    file: t,
                                    image: l,
                                    cropDimensions: _,
                                    cropOriginCoordinates: d.current,
                                    maxDimensions: i,
                                    imageRotation: k,
                                    resizeWidth: g.eT,
                                    resizeHeight: g.eT
                                },
                                w,
                                I
                            ),
                            { result: r, cancelFn: a } = await (0, m.$p)(n);
                        ((q.current = a), (e = await r));
                    } catch (e) {
                        (b.error('Error cropping GIF', e), (o = g.ze.GIF_CROPPING));
                    } finally {
                        var c;
                        (null == (c = q.current) || c.call(q), (q.current = null));
                    }
                else
                    e = W
                        ? n
                        : (0, s.PT)({
                              image: l,
                              cropDimensions: _,
                              cropOriginCoordinates: d.current,
                              maxDimensions: i,
                              imageRotation: k
                          });
                return (
                    a({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: o,
                        loading: !1
                    }),
                    () => {
                        var e;
                        (null == (e = q.current) || e.call(q), (q.current = null));
                    }
                );
            }, [t, k, G, W, a, w, I, n]);
        l.useEffect(() => {
            $();
        }, [$, j, k, w, Z, I, B]);
        let Q = l.useCallback(() => {
            if (null == D.current) return;
            let e = D.current.naturalWidth,
                t = D.current.naturalHeight;
            T({
                width: e,
                height: t
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (F(n),
                S(n),
                M(
                    E(
                        {
                            width: e,
                            height: t
                        },
                        n,
                        U
                    )
                ));
        }, [U]);
        return (0, r.jsxs)('div', {
            className: i()(f.imageEditor, { [f.isDragging]: Z }),
            style: { '--custom-image-editor-size': ''.concat(240, 'px') },
            children: [
                (0, r.jsxs)('div', {
                    className: f.editingContainer,
                    children: [
                        (0, r.jsx)('img', {
                            onLoad: Q,
                            onError: () => {
                                a({
                                    error: g.ze.IMAGE_LOAD,
                                    loading: !1
                                });
                            },
                            style: x(
                                {
                                    opacity: +(null != w),
                                    transform: 'translate3d('.concat(d.current.x, 'px, ').concat(d.current.y, 'px, 0) rotate(').concat(k, 'deg)')
                                },
                                Y()
                            ),
                            className: f.image,
                            src: n,
                            crossOrigin: 'anonymous',
                            alt: h.intl.string(h.t.EYR1FR),
                            ref: D,
                            onMouseDown: K,
                            draggable: !1
                        }),
                        !W &&
                            (0, r.jsx)('div', {
                                className: f.overlay,
                                style: {
                                    opacity: +(null != w),
                                    width: _.width,
                                    height: _.height
                                },
                                children: (0, r.jsx)(u.Text, {
                                    className: f.panHint,
                                    variant: 'text-xs/normal',
                                    color: 'text-primary',
                                    children: h.intl.string(h.t.oBPhdH)
                                })
                            })
                    ]
                }),
                W
                    ? (0, r.jsx)('div', {
                          className: f.animatedInfoContainer,
                          children: (0, r.jsx)(u.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-muted',
                              children: h.intl.string(h.t['5XCxio'])
                          })
                      })
                    : (0, r.jsxs)('div', {
                          className: f.toolsContainer,
                          children: [
                              (0, r.jsx)(u.ua7, {
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
                                          c.zx,
                                          v(
                                              x(
                                                  {
                                                      className: f.toolButton,
                                                      look: c.zx.Looks.BLANK,
                                                      size: c.Ph.NONE,
                                                      color: c.zx.Colors.TRANSPARENT,
                                                      grow: !1
                                                  },
                                                  n
                                              ),
                                              {
                                                  onClick: J,
                                                  children: (0, r.jsx)(u.Vk2, {
                                                      size: 'sm',
                                                      color: 'currentColor'
                                                  })
                                              }
                                          )
                                      );
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: f.zoomControls,
                                  children: [
                                      (0, r.jsx)(u.BlJ, {
                                          color: u.TVs.colors.ICON_SECONDARY,
                                          size: 'sm'
                                      }),
                                      null != B &&
                                          (0, r.jsx)(u.iRW, {
                                              className: f.slider,
                                              initialValue: B,
                                              minValue: 1,
                                              maxValue: 4,
                                              keyboardStep: 0.025,
                                              asValueChanges: V,
                                              equidistant: !0,
                                              hideBubble: !0,
                                              'aria-label': h.intl.string(h.t['2hPcVF'])
                                          }),
                                      (0, r.jsx)(u.OyE, {
                                          color: u.TVs.colors.ICON_SECONDARY,
                                          size: 'sm'
                                      })
                                  ]
                              })
                          ]
                      })
            ]
        });
    },
    O = (e, t) => {
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
    N = (e, t) => {
        let { width: n, height: r } = e,
            l = 240 * t,
            a = n / r;
        return (
            n > r ? (r = (n = l) / a) : (n = (r = l) * a),
            {
                width: n,
                height: r
            }
        );
    };
function E(e, t, n) {
    let { width: r, height: l } = N(e, t),
        a = Math.abs(240 - r) / 2,
        i = Math.abs(240 - l) / 2;
    return n && (r < 240 || l < 240)
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
let C = (e, t, n) => {
    let { height: r, width: l } = N(t, n),
        a = (r = Math.min(r, 240)) / (l = Math.min(l, 240)),
        i = {
            height: r,
            width: l
        },
        s = Math.floor(a < 1 ? g.eT * a : g.eT / a),
        o = a < 1 ? s : g.eT,
        c = a > 1 ? s : g.eT;
    return v(x({}, e), {
        cropDimensions: i,
        resizeHeight: o,
        resizeWidth: c
    });
};
