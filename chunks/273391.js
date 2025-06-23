n.d(t, { v: () => v }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(36793),
    s = n(481060),
    i = n(710845),
    o = n(197712),
    c = n(511004),
    u = n(598117),
    d = n(388032),
    p = n(917093);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
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
let m = new i.Z('ImageEditor'),
    f = {
        width: 256,
        height: 256
    },
    v = (e) => {
        let { file: t, imageUri: n, onUpdate: i } = e,
            v = a.useRef({
                x: 0,
                y: 0
            }),
            j = a.useRef(null),
            [E, N] = a.useState(1),
            [I, D] = a.useState(null),
            [S, y] = a.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [C, w] = a.useState(0),
            [A, M] = a.useState({
                x: 0,
                y: 0
            }),
            [k, R] = a.useState(!1),
            T = 'image/gif' === t.type,
            [L, P] = a.useState(null);
        a.useEffect(() => {
            (0, c.Z)();
        }, []);
        let z = a.useCallback(
                (e) => {
                    if (null == j.current) return;
                    let { x: t, y: n } = (0, o.U$)(e.x, e.y, S);
                    (v.current = {
                        x: t,
                        y: n
                    }),
                        (j.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(n, 'px, 0) rotate(').concat(C, 'deg)'));
                },
                [j, C, S]
            ),
            Z = a.useCallback(
                (e) => {
                    if (null == I) return;
                    let t = _(I, e, T),
                        { x: n, y: r } = v.current;
                    N(e),
                        y(t),
                        z({
                            x: n,
                            y: r
                        });
                },
                [I, z, T]
            ),
            G = a.useCallback(() => {
                if (null == j.current || null == I) return;
                let e = (C + 90) % 360,
                    t = -v.current.x,
                    n = v.current.y,
                    r = I.height,
                    a = I.width,
                    l = _(
                        {
                            width: r,
                            height: a
                        },
                        E,
                        T
                    );
                z({
                    x: n,
                    y: t
                }),
                    w(e),
                    D({
                        width: r,
                        height: a
                    }),
                    y(l);
            }, [I, C, z, E, T]),
            U = a.useCallback(() => {
                if (null == I) return {};
                let { height: e, width: t } = x(b(I, C), E);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [I, C, E]),
            B = a.useCallback((e) => {
                M({
                    x: e.clientX - v.current.x,
                    y: e.clientY - v.current.y
                }),
                    R(!0);
            }, []);
        a.useEffect(() => {
            let e = () => R(!1);
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, []);
        let W = a.useCallback(
            (e) => {
                let { x: t, y: n } = v.current;
                k &&
                    (e.clientX !== t || e.clientY !== n) &&
                    z({
                        x: (t = e.clientX - A.x),
                        y: (n = e.clientY - A.y)
                    });
            },
            [k, A, z]
        );
        a.useEffect(() => {
            if (k) return window.addEventListener('mousemove', W), () => window.removeEventListener('mousemove', W);
        }, [W, k]);
        let F = a.useRef(null),
            V = a.useCallback(async () => {
                let e;
                if (null == j.current || null == I) return;
                let n = Date.now(),
                    r = j.current,
                    a = {
                        height: u.eT,
                        width: u.eT
                    },
                    s = null;
                if ((null != F.current && (F.current(), (F.current = null)), T))
                    try {
                        let n = O(
                                {
                                    file: t,
                                    image: r,
                                    cropDimensions: f,
                                    cropOriginCoordinates: v.current,
                                    maxDimensions: a,
                                    imageRotation: C,
                                    resizeWidth: u.eT,
                                    resizeHeight: u.eT
                                },
                                I,
                                E
                            ),
                            { result: l, cancelFn: s } = await (0, o.$p)(n);
                        (F.current = s), (e = await l);
                    } catch (e) {
                        m.error('Error cropping GIF', e), (s = u.ze.GIF_CROPPING);
                    } finally {
                        var c;
                        null == (c = F.current) || c.call(F), (F.current = null);
                    }
                else
                    e = (0, l.PT)({
                        image: r,
                        cropDimensions: f,
                        cropOriginCoordinates: v.current,
                        maxDimensions: a,
                        imageRotation: C
                    });
                return (
                    i({
                        imageData: e,
                        imageDataTimestamp: n,
                        error: s,
                        loading: !1
                    }),
                    () => {
                        var e;
                        null == (e = F.current) || e.call(F), (F.current = null);
                    }
                );
            }, [t, C, T, i, I, E]);
        a.useEffect(() => {
            V();
        }, [V, C, I, k, E, L]);
        let H = a.useCallback(() => {
            if (null == j.current) return;
            let e = j.current.naturalWidth,
                t = j.current.naturalHeight;
            D({
                width: e,
                height: t
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            P(n),
                N(n),
                y(
                    _(
                        {
                            width: e,
                            height: t
                        },
                        n,
                        T
                    )
                );
        }, [T]);
        return (0, r.jsxs)('div', {
            className: p.imageEditor,
            children: [
                (0, r.jsxs)('div', {
                    className: p.editingContainer,
                    children: [
                        (0, r.jsx)('img', {
                            onLoad: H,
                            onError: () => {
                                i({
                                    error: u.ze.IMAGE_LOAD,
                                    loading: !1
                                });
                            },
                            style: h(
                                {
                                    opacity: +(null != I),
                                    transform: 'translate3d('.concat(v.current.x, 'px, ').concat(v.current.y, 'px, 0) rotate(').concat(C, 'deg)')
                                },
                                U()
                            ),
                            className: p.image,
                            src: n,
                            crossOrigin: 'anonymous',
                            alt: 'avatar',
                            ref: j,
                            onMouseDown: B,
                            draggable: !1
                        }),
                        (0, r.jsx)('div', {
                            className: p.overlay,
                            style: {
                                opacity: +(null != I),
                                width: f.width,
                                height: f.height
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: p.toolsContainer,
                    children: [
                        (0, r.jsx)(s.ua7, {
                            text: d.intl.string(d.t.E36Wd3),
                            'aria-label': d.intl.string(d.t.LzFiKC),
                            children: (e) => {
                                var { onClick: t } = e,
                                    n = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            a = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    a = {},
                                                    l = Object.keys(e);
                                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                                return a;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                                        }
                                        return a;
                                    })(e, ['onClick']);
                                return (0, r.jsx)(
                                    s.zxk,
                                    g(
                                        h(
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
                                            onClick: G,
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
                                null != L &&
                                    (0, r.jsx)(s.iRW, {
                                        className: p.slider,
                                        initialValue: L,
                                        minValue: 1,
                                        maxValue: 4,
                                        keyboardStep: 0.025,
                                        asValueChanges: Z,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        'aria-label': d.intl.string(d.t.dnvZSk)
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
    x = (e, t) => {
        let { width: n, height: r } = e,
            a = 256 * t,
            l = n / r;
        return (
            n > r ? (r = (n = a) / l) : (n = (r = a) * l),
            {
                width: n,
                height: r
            }
        );
    };
function _(e, t, n) {
    let { width: r, height: a } = x(e, t),
        l = Math.abs(256 - r) / 2,
        s = Math.abs(256 - a) / 2;
    return n && (r < 256 || a < 256)
        ? {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
          }
        : {
              top: s,
              bottom: -s,
              left: -l,
              right: l
          };
}
let O = (e, t, n) => {
    let { height: r, width: a } = x(t, n),
        l = (r = Math.min(r, 256)) / (a = Math.min(a, 256)),
        s = {
            height: r,
            width: a
        },
        i = Math.floor(l < 1 ? u.eT * l : u.eT / l),
        o = l < 1 ? i : u.eT,
        c = l > 1 ? i : u.eT;
    return g(h({}, e), {
        cropDimensions: s,
        resizeHeight: o,
        resizeWidth: c
    });
};
