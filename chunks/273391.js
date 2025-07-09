(n.d(t, { v: () => b }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(36793),
    i = n(33309),
    s = n(755721),
    o = n(481060),
    c = n(710845),
    u = n(197712),
    d = n(511004),
    h = n(598117),
    m = n(388032),
    g = n(917093);
function p(e) {
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
function f(e, t) {
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
let v = new c.Z('ImageEditor'),
    x = {
        width: 256,
        height: 256
    },
    b = (e) => {
        let { file: t, imageUri: n, onUpdate: c } = e,
            b = l.useRef({
                x: 0,
                y: 0
            }),
            E = l.useRef(null),
            [I, D] = l.useState(1),
            [C, y] = l.useState(null),
            [S, w] = l.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [T, A] = l.useState(0),
            [M, k] = l.useState({
                x: 0,
                y: 0
            }),
            [P, R] = l.useState(!1),
            L = 'image/gif' === t.type,
            Z = (0, i.v)(t.type),
            z = Z && !L,
            [G, U] = l.useState(null);
        l.useEffect(() => {
            (0, d.Z)();
        }, []);
        let W = l.useCallback(
                (e) => {
                    if (null == E.current) return;
                    let { x: t, y: n } = (0, u.U$)(e.x, e.y, S);
                    ((b.current = {
                        x: t,
                        y: n
                    }),
                        (E.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(n, 'px, 0) rotate(').concat(T, 'deg)')));
                },
                [E, T, S]
            ),
            B = l.useCallback(
                (e) => {
                    if (null == C) return;
                    let t = O(C, e, Z),
                        { x: n, y: r } = b.current;
                    (D(e),
                        w(t),
                        W({
                            x: n,
                            y: r
                        }));
                },
                [C, W, Z]
            ),
            F = l.useCallback(() => {
                if (null == E.current || null == C) return;
                let e = (T + 90) % 360,
                    t = -b.current.x,
                    n = b.current.y,
                    r = C.height,
                    l = C.width,
                    a = O(
                        {
                            width: r,
                            height: l
                        },
                        I,
                        Z
                    );
                (W({
                    x: n,
                    y: t
                }),
                    A(e),
                    y({
                        width: r,
                        height: l
                    }),
                    w(a));
            }, [C, T, W, I, Z]),
            H = l.useCallback(() => {
                if (null == C) return {};
                let { height: e, width: t } = j(_(C, T), I);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [C, T, I]),
            V = l.useCallback((e) => {
                (k({
                    x: e.clientX - b.current.x,
                    y: e.clientY - b.current.y
                }),
                    R(!0));
            }, []);
        l.useEffect(() => {
            let e = () => R(!1);
            return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
        }, []);
        let Y = l.useCallback(
            (e) => {
                let { x: t, y: n } = b.current;
                P &&
                    (e.clientX !== t || e.clientY !== n) &&
                    W({
                        x: (t = e.clientX - M.x),
                        y: (n = e.clientY - M.y)
                    });
            },
            [P, M, W]
        );
        l.useEffect(() => {
            if (P) return (window.addEventListener('mousemove', Y), () => window.removeEventListener('mousemove', Y));
        }, [Y, P]);
        let J = l.useRef(null),
            K = l.useCallback(async () => {
                let e;
                if (null == E.current || null == C) return;
                let r = Date.now(),
                    l = E.current,
                    i = {
                        height: h.eT,
                        width: h.eT
                    },
                    s = null;
                if ((null != J.current && (J.current(), (J.current = null)), L))
                    try {
                        let n = N(
                                {
                                    file: t,
                                    image: l,
                                    cropDimensions: x,
                                    cropOriginCoordinates: b.current,
                                    maxDimensions: i,
                                    imageRotation: T,
                                    resizeWidth: h.eT,
                                    resizeHeight: h.eT
                                },
                                C,
                                I
                            ),
                            { result: r, cancelFn: a } = await (0, u.$p)(n);
                        ((J.current = a), (e = await r));
                    } catch (e) {
                        (v.error('Error cropping GIF', e), (s = h.ze.GIF_CROPPING));
                    } finally {
                        var o;
                        (null == (o = J.current) || o.call(J), (J.current = null));
                    }
                else
                    e = z
                        ? n
                        : (0, a.PT)({
                              image: l,
                              cropDimensions: x,
                              cropOriginCoordinates: b.current,
                              maxDimensions: i,
                              imageRotation: T
                          });
                return (
                    c({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: s,
                        loading: !1
                    }),
                    () => {
                        var e;
                        (null == (e = J.current) || e.call(J), (J.current = null));
                    }
                );
            }, [t, T, L, z, c, C, I, n]);
        l.useEffect(() => {
            K();
        }, [K, T, C, P, I, G]);
        let X = l.useCallback(() => {
            if (null == E.current) return;
            let e = E.current.naturalWidth,
                t = E.current.naturalHeight;
            y({
                width: e,
                height: t
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (U(n),
                D(n),
                w(
                    O(
                        {
                            width: e,
                            height: t
                        },
                        n,
                        Z
                    )
                ));
        }, [Z]);
        return (0, r.jsxs)('div', {
            className: g.imageEditor,
            children: [
                (0, r.jsxs)('div', {
                    className: g.editingContainer,
                    children: [
                        (0, r.jsx)('img', {
                            onLoad: X,
                            onError: () => {
                                c({
                                    error: h.ze.IMAGE_LOAD,
                                    loading: !1
                                });
                            },
                            style: p(
                                {
                                    opacity: +(null != C),
                                    transform: 'translate3d('.concat(b.current.x, 'px, ').concat(b.current.y, 'px, 0) rotate(').concat(T, 'deg)')
                                },
                                H()
                            ),
                            className: g.image,
                            src: n,
                            crossOrigin: 'anonymous',
                            alt: m.intl.string(m.t.EYR1FR),
                            ref: E,
                            onMouseDown: V,
                            draggable: !1
                        }),
                        !z &&
                            (0, r.jsx)('div', {
                                className: g.overlay,
                                style: {
                                    opacity: +(null != C),
                                    width: x.width,
                                    height: x.height
                                }
                            })
                    ]
                }),
                z
                    ? (0, r.jsx)('div', {
                          className: g.animatedInfoContainer,
                          children: (0, r.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-muted',
                              children: m.intl.string(m.t['5XCxio'])
                          })
                      })
                    : (0, r.jsxs)('div', {
                          className: g.toolsContainer,
                          children: [
                              (0, r.jsx)(o.ua7, {
                                  text: m.intl.string(m.t['oCs/+P']),
                                  'aria-label': m.intl.string(m.t['oCs/+P']),
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
                                          s.zx,
                                          f(
                                              p(
                                                  {
                                                      className: g.rotateButton,
                                                      look: s.zx.Looks.BLANK,
                                                      size: s.Ph.NONE,
                                                      color: s.zx.Colors.TRANSPARENT,
                                                      grow: !1
                                                  },
                                                  n
                                              ),
                                              {
                                                  onClick: F,
                                                  children: (0, r.jsx)(o.Vk2, {
                                                      size: 'sm',
                                                      color: o.TVs.colors.ICON_SECONDARY
                                                  })
                                              }
                                          )
                                      );
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: g.zoomControls,
                                  children: [
                                      (0, r.jsx)(o.BlJ, {
                                          color: o.TVs.colors.ICON_SECONDARY,
                                          size: 'sm'
                                      }),
                                      null != G &&
                                          (0, r.jsx)(o.iRW, {
                                              className: g.slider,
                                              initialValue: G,
                                              minValue: 1,
                                              maxValue: 4,
                                              keyboardStep: 0.025,
                                              asValueChanges: B,
                                              equidistant: !0,
                                              hideBubble: !0,
                                              'aria-label': m.intl.string(m.t['2hPcVF'])
                                          }),
                                      (0, r.jsx)(o.OyE, {
                                          color: o.TVs.colors.ICON_SECONDARY,
                                          size: 'sm'
                                      })
                                  ]
                              })
                          ]
                      })
            ]
        });
    },
    _ = (e, t) => {
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
    j = (e, t) => {
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
    let { width: r, height: l } = j(e, t),
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
let N = (e, t, n) => {
    let { height: r, width: l } = j(t, n),
        a = (r = Math.min(r, 256)) / (l = Math.min(l, 256)),
        i = {
            height: r,
            width: l
        },
        s = Math.floor(a < 1 ? h.eT * a : h.eT / a),
        o = a < 1 ? s : h.eT,
        c = a > 1 ? s : h.eT;
    return f(p({}, e), {
        cropDimensions: i,
        resizeHeight: o,
        resizeWidth: c
    });
};
