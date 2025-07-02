(n.d(t, { v: () => v }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(36793),
    i = n(481060),
    s = n(710845),
    o = n(197712),
    u = n(511004),
    c = n(598117),
    d = n(388032),
    h = n(917093);
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
function g(e, t) {
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
let m = new s.Z('ImageEditor'),
    f = {
        width: 256,
        height: 256
    },
    v = (e) => {
        let { file: t, imageUri: n, onUpdate: s } = e,
            v = l.useRef({
                x: 0,
                y: 0
            }),
            j = l.useRef(null),
            [E, N] = l.useState(1),
            [D, I] = l.useState(null),
            [C, y] = l.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [S, w] = l.useState(0),
            [A, k] = l.useState({
                x: 0,
                y: 0
            }),
            [M, T] = l.useState(!1),
            R = 'image/gif' === t.type,
            [P, L] = l.useState(null);
        l.useEffect(() => {
            (0, u.Z)();
        }, []);
        let z = l.useCallback(
                (e) => {
                    if (null == j.current) return;
                    let { x: t, y: n } = (0, o.U$)(e.x, e.y, C);
                    ((v.current = {
                        x: t,
                        y: n
                    }),
                        (j.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(n, 'px, 0) rotate(').concat(S, 'deg)')));
                },
                [j, S, C]
            ),
            Z = l.useCallback(
                (e) => {
                    if (null == D) return;
                    let t = _(D, e, R),
                        { x: n, y: r } = v.current;
                    (N(e),
                        y(t),
                        z({
                            x: n,
                            y: r
                        }));
                },
                [D, z, R]
            ),
            G = l.useCallback(() => {
                if (null == j.current || null == D) return;
                let e = (S + 90) % 360,
                    t = -v.current.x,
                    n = v.current.y,
                    r = D.height,
                    l = D.width,
                    a = _(
                        {
                            width: r,
                            height: l
                        },
                        E,
                        R
                    );
                (z({
                    x: n,
                    y: t
                }),
                    w(e),
                    I({
                        width: r,
                        height: l
                    }),
                    y(a));
            }, [D, S, z, E, R]),
            U = l.useCallback(() => {
                if (null == D) return {};
                let { height: e, width: t } = b(x(D, S), E);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [D, S, E]),
            W = l.useCallback((e) => {
                (k({
                    x: e.clientX - v.current.x,
                    y: e.clientY - v.current.y
                }),
                    T(!0));
            }, []);
        l.useEffect(() => {
            let e = () => T(!1);
            return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
        }, []);
        let B = l.useCallback(
            (e) => {
                let { x: t, y: n } = v.current;
                M &&
                    (e.clientX !== t || e.clientY !== n) &&
                    z({
                        x: (t = e.clientX - A.x),
                        y: (n = e.clientY - A.y)
                    });
            },
            [M, A, z]
        );
        l.useEffect(() => {
            if (M) return (window.addEventListener('mousemove', B), () => window.removeEventListener('mousemove', B));
        }, [B, M]);
        let F = l.useRef(null),
            V = l.useCallback(async () => {
                let e;
                if (null == j.current || null == D) return;
                let n = Date.now(),
                    r = j.current,
                    l = {
                        height: c.eT,
                        width: c.eT
                    },
                    i = null;
                if ((null != F.current && (F.current(), (F.current = null)), R))
                    try {
                        let n = O(
                                {
                                    file: t,
                                    image: r,
                                    cropDimensions: f,
                                    cropOriginCoordinates: v.current,
                                    maxDimensions: l,
                                    imageRotation: S,
                                    resizeWidth: c.eT,
                                    resizeHeight: c.eT
                                },
                                D,
                                E
                            ),
                            { result: a, cancelFn: i } = await (0, o.$p)(n);
                        ((F.current = i), (e = await a));
                    } catch (e) {
                        (m.error('Error cropping GIF', e), (i = c.ze.GIF_CROPPING));
                    } finally {
                        var u;
                        (null == (u = F.current) || u.call(F), (F.current = null));
                    }
                else
                    e = (0, a.PT)({
                        image: r,
                        cropDimensions: f,
                        cropOriginCoordinates: v.current,
                        maxDimensions: l,
                        imageRotation: S
                    });
                return (
                    s({
                        imageData: e,
                        imageDataTimestamp: n,
                        error: i,
                        loading: !1
                    }),
                    () => {
                        var e;
                        (null == (e = F.current) || e.call(F), (F.current = null));
                    }
                );
            }, [t, S, R, s, D, E]);
        l.useEffect(() => {
            V();
        }, [V, S, D, M, E, P]);
        let H = l.useCallback(() => {
            if (null == j.current) return;
            let e = j.current.naturalWidth,
                t = j.current.naturalHeight;
            I({
                width: e,
                height: t
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (L(n),
                N(n),
                y(
                    _(
                        {
                            width: e,
                            height: t
                        },
                        n,
                        R
                    )
                ));
        }, [R]);
        return (0, r.jsxs)('div', {
            className: h.imageEditor,
            children: [
                (0, r.jsxs)('div', {
                    className: h.editingContainer,
                    children: [
                        (0, r.jsx)('img', {
                            onLoad: H,
                            onError: () => {
                                s({
                                    error: c.ze.IMAGE_LOAD,
                                    loading: !1
                                });
                            },
                            style: p(
                                {
                                    opacity: +(null != D),
                                    transform: 'translate3d('.concat(v.current.x, 'px, ').concat(v.current.y, 'px, 0) rotate(').concat(S, 'deg)')
                                },
                                U()
                            ),
                            className: h.image,
                            src: n,
                            crossOrigin: 'anonymous',
                            alt: d.intl.string(d.t.EYR1FR),
                            ref: j,
                            onMouseDown: W,
                            draggable: !1
                        }),
                        (0, r.jsx)('div', {
                            className: h.overlay,
                            style: {
                                opacity: +(null != D),
                                width: f.width,
                                height: f.height
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: h.toolsContainer,
                    children: [
                        (0, r.jsx)(i.ua7, {
                            text: d.intl.string(d.t['oCs/+P']),
                            'aria-label': d.intl.string(d.t['oCs/+P']),
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
                                    i.zxk,
                                    g(
                                        p(
                                            {
                                                className: h.rotateButton,
                                                look: i.zxk.Looks.BLANK,
                                                size: i.PhG.NONE,
                                                color: i.zxk.Colors.TRANSPARENT,
                                                grow: !1
                                            },
                                            n
                                        ),
                                        {
                                            onClick: G,
                                            children: (0, r.jsx)(i.Vk2, {
                                                size: 'sm',
                                                color: i.TVs.colors.ICON_SECONDARY
                                            })
                                        }
                                    )
                                );
                            }
                        }),
                        (0, r.jsxs)('div', {
                            className: h.zoomControls,
                            children: [
                                (0, r.jsx)(i.BlJ, {
                                    color: i.TVs.colors.ICON_SECONDARY,
                                    size: 'sm'
                                }),
                                null != P &&
                                    (0, r.jsx)(i.iRW, {
                                        className: h.slider,
                                        initialValue: P,
                                        minValue: 1,
                                        maxValue: 4,
                                        keyboardStep: 0.025,
                                        asValueChanges: Z,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        'aria-label': d.intl.string(d.t['2hPcVF'])
                                    }),
                                (0, r.jsx)(i.OyE, {
                                    color: i.TVs.colors.ICON_SECONDARY,
                                    size: 'sm'
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    x = (e, t) => {
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
    b = (e, t) => {
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
function _(e, t, n) {
    let { width: r, height: l } = b(e, t),
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
    let { height: r, width: l } = b(t, n),
        a = (r = Math.min(r, 256)) / (l = Math.min(l, 256)),
        i = {
            height: r,
            width: l
        },
        s = Math.floor(a < 1 ? c.eT * a : c.eT / a),
        o = a < 1 ? s : c.eT,
        u = a > 1 ? s : c.eT;
    return g(p({}, e), {
        cropDimensions: i,
        resizeHeight: o,
        resizeWidth: u
    });
};
