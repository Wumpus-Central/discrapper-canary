(n.d(t, { v: () => E }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(36793),
    o = n(33309),
    u = n(755721),
    c = n(481060),
    d = n(638730),
    m = n(710845),
    h = n(197712),
    g = n(511004),
    p = n(598117),
    f = n(231338),
    x = n(388032),
    v = n(917093);
function b(e) {
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
function _(e, t) {
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
let j = new m.Z('ImageEditor'),
    O = {
        width: 240,
        height: 240
    },
    E = (e) => {
        let { file: t, imageUri: n, onUpdate: a, onThrottledEdit: m } = e,
            E = l.useRef({
                x: 0,
                y: 0
            }),
            [I, S] = l.useState({
                x: 0,
                y: 0
            }),
            w = l.useRef(null),
            [T, A] = l.useState(1),
            [k, M] = l.useState(null),
            [R, P] = l.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [L, Z] = l.useState(0),
            [z, G] = l.useState({
                x: 0,
                y: 0
            }),
            [U, W] = l.useState(!1),
            B = 'image/gif' === t.type,
            F = (0, o.v)(t.type),
            H = F && !B,
            [V, J] = l.useState(null),
            Y = (0, d.h)(null != m ? m : f.dG, 500);
        l.useEffect(() => {
            (0, g.Z)();
        }, []);
        let K = l.useCallback(
                (e) => {
                    if (null == w.current) return;
                    let { x: t, y: n } = (0, h.U$)(e.x, e.y, R);
                    ((E.current = {
                        x: t,
                        y: n
                    }),
                        (w.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(n, 'px, 0) rotate(').concat(L, 'deg)')),
                        S({
                            x: t,
                            y: n
                        }));
                },
                [w, L, R]
            ),
            X = l.useCallback(
                (e) => {
                    if (null == k) return;
                    let t = D(k, e, F),
                        { x: n, y: r } = E.current;
                    (A(e),
                        P(t),
                        K({
                            x: n,
                            y: r
                        }),
                        null == Y || Y());
                },
                [k, K, F, Y]
            ),
            q = l.useCallback(() => {
                if (null == w.current || null == k) return;
                let e = (L + 90) % 360,
                    t = -E.current.x,
                    n = E.current.y,
                    r = k.height,
                    l = k.width,
                    a = D(
                        {
                            width: r,
                            height: l
                        },
                        T,
                        F
                    );
                (K({
                    x: n,
                    y: t
                }),
                    Z(e),
                    M({
                        width: r,
                        height: l
                    }),
                    P(a),
                    null == Y || Y());
            }, [k, L, K, T, F, Y]),
            $ = l.useCallback(() => {
                if (null == k) return {};
                let { height: e, width: t } = C(N(k, L), T);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [k, L, T]),
            Q = l.useCallback((e) => {
                (G({
                    x: e.clientX - E.current.x,
                    y: e.clientY - E.current.y
                }),
                    W(!0));
            }, []);
        l.useEffect(() => {
            let e = () => W(!1);
            return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
        }, []);
        let ee = l.useCallback(
            (e) => {
                let { x: t, y: n } = E.current;
                U &&
                    (e.clientX !== t || e.clientY !== n) &&
                    (K({
                        x: (t = e.clientX - z.x),
                        y: (n = e.clientY - z.y)
                    }),
                    null == Y || Y());
            },
            [U, z, K, Y]
        );
        l.useEffect(() => {
            if (U) return (window.addEventListener('mousemove', ee), () => window.removeEventListener('mousemove', ee));
        }, [ee, U]);
        let et = l.useRef(null),
            en = l.useCallback(async () => {
                let e;
                if (null == w.current || null == k) return;
                let r = Date.now(),
                    l = w.current,
                    i = {
                        height: p.eT,
                        width: p.eT
                    },
                    o = null;
                if ((null != et.current && (et.current(), (et.current = null)), B))
                    try {
                        let n = y(
                                {
                                    file: t,
                                    image: l,
                                    cropDimensions: O,
                                    cropOriginCoordinates: E.current,
                                    maxDimensions: i,
                                    imageRotation: L,
                                    resizeWidth: p.eT,
                                    resizeHeight: p.eT
                                },
                                k,
                                T
                            ),
                            { result: r, cancelFn: a } = await (0, h.$p)(n);
                        ((et.current = a), (e = await r));
                    } catch (e) {
                        (j.error('Error cropping GIF', e), (o = p.ze.GIF_CROPPING));
                    } finally {
                        var u;
                        (null == (u = et.current) || u.call(et), (et.current = null));
                    }
                else
                    e = H
                        ? n
                        : (0, s.PT)({
                              image: l,
                              cropDimensions: O,
                              cropOriginCoordinates: E.current,
                              maxDimensions: i,
                              imageRotation: L
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
                        (null == (e = et.current) || e.call(et), (et.current = null));
                    }
                );
            }, [t, L, B, H, a, k, T, n]);
        l.useEffect(() => {
            en();
        }, [en, I, L, k, U, T, V]);
        let er = l.useCallback(() => {
            if (null == w.current) return;
            let e = w.current.naturalWidth,
                t = w.current.naturalHeight;
            M({
                width: e,
                height: t
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (J(n),
                A(n),
                P(
                    D(
                        {
                            width: e,
                            height: t
                        },
                        n,
                        F
                    )
                ));
        }, [F]);
        return (0, r.jsxs)('div', {
            className: i()(v.imageEditor, { [v.isDragging]: U }),
            style: { '--custom-image-editor-size': ''.concat(240, 'px') },
            children: [
                (0, r.jsxs)('div', {
                    className: v.editingContainer,
                    children: [
                        (0, r.jsx)('img', {
                            onLoad: er,
                            onError: () => {
                                a({
                                    error: p.ze.IMAGE_LOAD,
                                    loading: !1
                                });
                            },
                            style: b(
                                {
                                    opacity: +(null != k),
                                    transform: 'translate3d('.concat(E.current.x, 'px, ').concat(E.current.y, 'px, 0) rotate(').concat(L, 'deg)')
                                },
                                $()
                            ),
                            className: v.image,
                            src: n,
                            crossOrigin: 'anonymous',
                            alt: x.intl.string(x.t.EYR1FR),
                            ref: w,
                            onMouseDown: Q,
                            draggable: !1
                        }),
                        !H &&
                            (0, r.jsx)('div', {
                                className: v.overlay,
                                style: {
                                    opacity: +(null != k),
                                    width: O.width,
                                    height: O.height
                                },
                                children: (0, r.jsx)(c.Text, {
                                    className: v.panHint,
                                    variant: 'text-xs/normal',
                                    color: 'text-primary',
                                    children: x.intl.string(x.t.oBPhdH)
                                })
                            })
                    ]
                }),
                H
                    ? (0, r.jsx)('div', {
                          className: v.animatedInfoContainer,
                          children: (0, r.jsx)(c.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-muted',
                              children: x.intl.string(x.t['5XCxio'])
                          })
                      })
                    : (0, r.jsxs)('div', {
                          className: v.toolsContainer,
                          children: [
                              (0, r.jsx)(c.ua7, {
                                  text: x.intl.string(x.t['oCs/+P']),
                                  'aria-label': x.intl.string(x.t['oCs/+P']),
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
                                          u.zx,
                                          _(
                                              b(
                                                  {
                                                      className: v.toolButton,
                                                      look: u.zx.Looks.BLANK,
                                                      size: u.Ph.NONE,
                                                      color: u.zx.Colors.TRANSPARENT,
                                                      grow: !1
                                                  },
                                                  n
                                              ),
                                              {
                                                  onClick: q,
                                                  children: (0, r.jsx)(c.Vk2, {
                                                      size: 'sm',
                                                      color: 'currentColor'
                                                  })
                                              }
                                          )
                                      );
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: v.zoomControls,
                                  children: [
                                      (0, r.jsx)(c.BlJ, {
                                          color: c.TVs.colors.ICON_SECONDARY,
                                          size: 'sm'
                                      }),
                                      null != V &&
                                          (0, r.jsx)(c.iRW, {
                                              className: v.slider,
                                              initialValue: V,
                                              minValue: 1,
                                              maxValue: 4,
                                              keyboardStep: 0.025,
                                              asValueChanges: X,
                                              equidistant: !0,
                                              hideBubble: !0,
                                              'aria-label': x.intl.string(x.t['2hPcVF'])
                                          }),
                                      (0, r.jsx)(c.OyE, {
                                          color: c.TVs.colors.ICON_SECONDARY,
                                          size: 'sm'
                                      })
                                  ]
                              })
                          ]
                      })
            ]
        });
    },
    N = (e, t) => {
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
    C = (e, t) => {
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
function D(e, t, n) {
    let { width: r, height: l } = C(e, t),
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
let y = (e, t, n) => {
    let { height: r, width: l } = C(t, n),
        a = (r = Math.min(r, 240)) / (l = Math.min(l, 240)),
        i = {
            height: r,
            width: l
        },
        s = Math.floor(a < 1 ? p.eT * a : p.eT / a),
        o = a < 1 ? s : p.eT,
        u = a > 1 ? s : p.eT;
    return _(b({}, e), {
        cropDimensions: i,
        resizeHeight: o,
        resizeWidth: u
    });
};
