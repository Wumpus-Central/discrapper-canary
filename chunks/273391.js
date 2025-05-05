r.d(t, { v: () => f }), r(388685);
var n = r(200651),
    i = r(192379),
    l = r(36793),
    a = r(481060),
    o = r(710845),
    s = r(197712),
    c = r(511004),
    u = r(535455),
    d = r(388032),
    h = r(917093);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let m = new o.Z('ImageEditor'),
    f = (e) => {
        let { file: t, imageUri: r, onUpdate: o } = e,
            f = i.useRef({
                x: 0,
                y: 0
            }),
            p = i.useRef(null),
            [O, y] = i.useState(1),
            [j, w] = i.useState(null),
            [x, _] = i.useState({
                width: 0,
                height: 0
            }),
            [E, v] = i.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [I, N] = i.useState(0),
            [C, S] = i.useState({
                x: 0,
                y: 0
            }),
            [A, P] = i.useState(!1),
            [M, R] = i.useState(0),
            T = 'image/gif' === t.type;
        i.useEffect(() => {
            (0, c.Z)();
        }, []);
        let k = i.useCallback(() => {
                if (null == p.current || O > 1) return;
                let { width: e, height: t } = p.current.getBoundingClientRect(),
                    r = Math.min(e, t),
                    n = {
                        width: r,
                        height: r
                    };
                w({
                    width: e,
                    height: t
                }),
                    _(n),
                    v((0, s.kH)(e, t, n));
            }, [O]),
            D = i.useCallback(
                (e) => {
                    if (null == p.current) return;
                    let { x: t, y: r } = (0, s.U$)(e.x, e.y, E);
                    (f.current = {
                        x: t,
                        y: r
                    }),
                        (p.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(r, 'px, 0) rotate(').concat(I, 'deg)')),
                        R(new Date().getTime());
                },
                [p, I, E]
            ),
            L = i.useCallback(
                (e) => {
                    if (null == j) return;
                    let { width: t, height: r } = j,
                        n = (0, s.kH)(t * e, r * e, x),
                        { x: i, y: l } = f.current;
                    y(e),
                        v(n),
                        D({
                            x: i,
                            y: l
                        });
                },
                [x, j, D]
            ),
            Z = i.useCallback(() => {
                if (null == p.current || null == j) return;
                let e = (I + 90) % 360,
                    t = -f.current.x,
                    r = f.current.y,
                    n = j.height,
                    i = j.width,
                    l = (0, s.kH)(n * O, i * O, x);
                D({
                    x: r,
                    y: t
                }),
                    N(e),
                    w({
                        width: n,
                        height: i
                    }),
                    v(l);
            }, [j, I, D, O, x]),
            G = i.useCallback(() => {
                if (null == j) return {};
                let { width: e, height: t } = b(j, I);
                return {
                    width: e * O,
                    minWidth: e * O,
                    height: t * O,
                    minHeight: t * O
                };
            }, [j, I, O]),
            z = i.useCallback((e) => {
                S({
                    x: e.clientX - f.current.x,
                    y: e.clientY - f.current.y
                }),
                    P(!0);
            }, []);
        i.useEffect(() => {
            let e = () => P(!1);
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, []);
        let B = i.useCallback(
            (e) => {
                let { x: t, y: r } = f.current;
                A &&
                    (e.clientX !== t || e.clientY !== r) &&
                    D({
                        x: (t = e.clientX - C.x),
                        y: (r = e.clientY - C.y)
                    });
            },
            [A, C, D]
        );
        i.useEffect(() => {
            if (A) return window.addEventListener('mousemove', B), () => window.removeEventListener('mousemove', B);
        }, [B, A]);
        let U = i.useRef(null),
            H = i.useCallback(async () => {
                let e;
                if (null == p.current) return;
                let r = Date.now(),
                    n = p.current,
                    i = {
                        height: u.eT,
                        width: u.eT
                    },
                    a = null;
                if ((null != U.current && (U.current(), (U.current = null)), T))
                    try {
                        let { result: r, cancelFn: l } = await (0, s.$p)({
                            file: t,
                            image: n,
                            cropDimensions: x,
                            cropOriginCoordinates: f.current,
                            maxDimensions: i,
                            imageRotation: I
                        });
                        (U.current = l), (e = await r);
                    } catch (e) {
                        m.error('Error cropping GIF: '.concat(e)), (a = u.ze.GIF_CROPPING);
                    } finally {
                        var c;
                        null == (c = U.current) || c.call(U), (U.current = null);
                    }
                else
                    e = (0, l.PT)({
                        image: n,
                        cropDimensions: x,
                        cropOriginCoordinates: f.current,
                        maxDimensions: i,
                        imageRotation: I
                    });
                return (
                    o({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: a,
                        loading: !1
                    }),
                    () => {
                        var e;
                        null == (e = U.current) || e.call(U), (U.current = null);
                    }
                );
            }, [x, t, I, T, o]);
        return (
            i.useEffect(() => {
                o({
                    error: null,
                    loading: !0
                });
                let e = setTimeout(H, 1000);
                return () => clearTimeout(e);
            }, [O, H, o, M]),
            (0, n.jsxs)('div', {
                className: h.imageEditor,
                children: [
                    (0, n.jsxs)('div', {
                        className: h.editingContainer,
                        children: [
                            (0, n.jsx)('img', {
                                onLoad: k,
                                onError: () => {
                                    o({
                                        error: u.ze.IMAGE_LOAD,
                                        loading: !1
                                    });
                                },
                                style: g(
                                    {
                                        opacity: +(null != j),
                                        transform: 'translate3d('.concat(f.current.x, 'px, ').concat(f.current.y, 'px, 0) rotate(').concat(I, 'deg)')
                                    },
                                    G()
                                ),
                                className: h.image,
                                src: r,
                                crossOrigin: 'anonymous',
                                alt: 'avatar',
                                ref: p,
                                onMouseDown: z,
                                draggable: !1
                            }),
                            (0, n.jsx)('div', {
                                className: h.overlay,
                                style: {
                                    opacity: +(null != j),
                                    width: x.width,
                                    height: x.height
                                }
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: h.toolsContainer,
                        children: [
                            (0, n.jsxs)('div', {
                                className: h.zoomControls,
                                children: [
                                    (0, n.jsx)(a.XBm, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        className: h.zoomIcon
                                    }),
                                    (0, n.jsx)(a.iRW, {
                                        className: h.slider,
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 2,
                                        keyboardStep: 0.025,
                                        asValueChanges: L,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        'aria-label': d.intl.string(d.t.dnvZSk)
                                    }),
                                    (0, n.jsx)(a.XBm, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: h.zoomIcon
                                    })
                                ]
                            }),
                            (0, n.jsx)(a.ua7, {
                                text: d.intl.string(d.t.E36Wd3),
                                'aria-label': d.intl.string(d.t.LzFiKC),
                                children: (e) => {
                                    var t,
                                        r,
                                        { onClick: i } = e,
                                        l = (function (e, t) {
                                            if (null == e) return {};
                                            var r,
                                                n,
                                                i = (function (e, t) {
                                                    if (null == e) return {};
                                                    var r,
                                                        n,
                                                        i = {},
                                                        l = Object.keys(e);
                                                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                                    return i;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                                            }
                                            return i;
                                        })(e, ['onClick']);
                                    return (0, n.jsx)(
                                        a.zxk,
                                        ((t = g(
                                            {
                                                className: h.rotateButton,
                                                look: a.zxk.Looks.BLANK,
                                                size: a.PhG.NONE,
                                                color: a.zxk.Colors.TRANSPARENT,
                                                grow: !1
                                            },
                                            l
                                        )),
                                        (r = r =
                                            {
                                                onClick: Z,
                                                children: (0, n.jsx)(a.Vk2, {
                                                    size: 'md',
                                                    color: 'currentColor'
                                                })
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                            : (function (e, t) {
                                                  var r = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      r.push.apply(r, n);
                                                  }
                                                  return r;
                                              })(Object(r)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                              }),
                                        t)
                                    );
                                }
                            })
                        ]
                    })
                ]
            })
        );
    },
    b = (e, t) => {
        let { width: r, height: n } = e;
        return t % 180 != 0
            ? {
                  width: n,
                  height: r
              }
            : {
                  width: r,
                  height: n
              };
    };
