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
    g = n(917093);
function m(e) {
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
function p(e, t) {
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
            N = l.useRef(null),
            [E, I] = l.useState(1),
            [D, C] = l.useState(null),
            [y, S] = l.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [w, T] = l.useState(0),
            [A, k] = l.useState({
                x: 0,
                y: 0
            }),
            [M, P] = l.useState(!1),
            R = 'image/gif' === t.type,
            L = (0, i.v)(t.type),
            Z = L && !R,
            [z, G] = l.useState(null);
        l.useEffect(() => {
            (0, u.Z)();
        }, []);
        let U = l.useCallback(
                (e) => {
                    if (null == N.current) return;
                    let { x: t, y: n } = (0, c.U$)(e.x, e.y, y);
                    ((x.current = {
                        x: t,
                        y: n
                    }),
                        (N.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(n, 'px, 0) rotate(').concat(w, 'deg)')));
                },
                [N, w, y]
            ),
            W = l.useCallback(
                (e) => {
                    if (null == D) return;
                    let t = j(D, e, L),
                        { x: n, y: r } = x.current;
                    (I(e),
                        S(t),
                        U({
                            x: n,
                            y: r
                        }));
                },
                [D, U, L]
            ),
            B = l.useCallback(() => {
                if (null == N.current || null == D) return;
                let e = (w + 90) % 360,
                    t = -x.current.x,
                    n = x.current.y,
                    r = D.height,
                    l = D.width,
                    a = j(
                        {
                            width: r,
                            height: l
                        },
                        E,
                        L
                    );
                (U({
                    x: n,
                    y: t
                }),
                    T(e),
                    C({
                        width: r,
                        height: l
                    }),
                    S(a));
            }, [D, w, U, E, L]),
            F = l.useCallback(() => {
                if (null == D) return {};
                let { height: e, width: t } = _(b(D, w), E);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [D, w, E]),
            H = l.useCallback((e) => {
                (k({
                    x: e.clientX - x.current.x,
                    y: e.clientY - x.current.y
                }),
                    P(!0));
            }, []);
        l.useEffect(() => {
            let e = () => P(!1);
            return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
        }, []);
        let V = l.useCallback(
            (e) => {
                let { x: t, y: n } = x.current;
                M &&
                    (e.clientX !== t || e.clientY !== n) &&
                    U({
                        x: (t = e.clientX - A.x),
                        y: (n = e.clientY - A.y)
                    });
            },
            [M, A, U]
        );
        l.useEffect(() => {
            if (M) return (window.addEventListener('mousemove', V), () => window.removeEventListener('mousemove', V));
        }, [V, M]);
        let Y = l.useRef(null),
            J = l.useCallback(async () => {
                let e;
                if (null == N.current || null == D) return;
                let r = Date.now(),
                    l = N.current,
                    i = {
                        height: d.eT,
                        width: d.eT
                    },
                    s = null;
                if ((null != Y.current && (Y.current(), (Y.current = null)), R))
                    try {
                        let n = O(
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
                                D,
                                E
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
                    e = Z
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
            }, [t, w, R, Z, o, D, E, n]);
        l.useEffect(() => {
            J();
        }, [J, w, D, M, E, z]);
        let K = l.useCallback(() => {
            if (null == N.current) return;
            let e = N.current.naturalWidth,
                t = N.current.naturalHeight;
            C({
                width: e,
                height: t
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (G(n),
                I(n),
                S(
                    j(
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
            className: g.imageEditor,
            children: [
                (0, r.jsxs)('div', {
                    className: g.editingContainer,
                    children: [
                        (0, r.jsx)('img', {
                            onLoad: K,
                            onError: () => {
                                o({
                                    error: d.ze.IMAGE_LOAD,
                                    loading: !1
                                });
                            },
                            style: m(
                                {
                                    opacity: +(null != D),
                                    transform: 'translate3d('.concat(x.current.x, 'px, ').concat(x.current.y, 'px, 0) rotate(').concat(w, 'deg)')
                                },
                                F()
                            ),
                            className: g.image,
                            src: n,
                            crossOrigin: 'anonymous',
                            alt: h.intl.string(h.t.EYR1FR),
                            ref: N,
                            onMouseDown: H,
                            draggable: !1
                        }),
                        !Z &&
                            (0, r.jsx)('div', {
                                className: g.overlay,
                                style: {
                                    opacity: +(null != D),
                                    width: v.width,
                                    height: v.height
                                }
                            })
                    ]
                }),
                Z
                    ? (0, r.jsx)('div', {
                          className: g.animatedInfoContainer,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-muted',
                              children: h.intl.string(h.t['5XCxio'])
                          })
                      })
                    : (0, r.jsxs)('div', {
                          className: g.toolsContainer,
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
                                          p(
                                              m(
                                                  {
                                                      className: g.rotateButton,
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
                                  className: g.zoomControls,
                                  children: [
                                      (0, r.jsx)(s.BlJ, {
                                          color: s.TVs.colors.ICON_SECONDARY,
                                          size: 'sm'
                                      }),
                                      null != z &&
                                          (0, r.jsx)(s.iRW, {
                                              className: g.slider,
                                              initialValue: z,
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
function j(e, t, n) {
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
let O = (e, t, n) => {
    let { height: r, width: l } = _(t, n),
        a = (r = Math.min(r, 256)) / (l = Math.min(l, 256)),
        i = {
            height: r,
            width: l
        },
        s = Math.floor(a < 1 ? d.eT * a : d.eT / a),
        o = a < 1 ? s : d.eT,
        c = a > 1 ? s : d.eT;
    return p(m({}, e), {
        cropDimensions: i,
        resizeHeight: o,
        resizeWidth: c
    });
};
