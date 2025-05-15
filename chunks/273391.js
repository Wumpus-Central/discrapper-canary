r.d(t, { v: () => f }), r(388685);
var n = r(255367),
    l = r(73800),
    i = r(36793),
    a = r(481060),
    o = r(710845),
    s = r(197712),
    c = r(511004),
    u = r(598117),
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
            f = l.useRef({
                x: 0,
                y: 0
            }),
            b = l.useRef(null),
            [O, y] = l.useState(1),
            [j, x] = l.useState(null),
            [w, _] = l.useState({
                width: 0,
                height: 0
            }),
            [E, v] = l.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [I, N] = l.useState(0),
            [C, A] = l.useState({
                x: 0,
                y: 0
            }),
            [S, P] = l.useState(!1),
            [R, M] = l.useState(0),
            k = 'image/gif' === t.type;
        l.useEffect(() => {
            (0, c.Z)();
        }, []);
        let T = l.useCallback(() => {
                if (null == b.current || O > 1) return;
                let { width: e, height: t } = b.current.getBoundingClientRect(),
                    r = Math.min(e, t),
                    n = {
                        width: r,
                        height: r
                    };
                x({
                    width: e,
                    height: t
                }),
                    _(n),
                    v((0, s.kH)(e, t, n));
            }, [O]),
            D = l.useCallback(
                (e) => {
                    if (null == b.current) return;
                    let { x: t, y: r } = (0, s.U$)(e.x, e.y, E);
                    (f.current = {
                        x: t,
                        y: r
                    }),
                        (b.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(r, 'px, 0) rotate(').concat(I, 'deg)')),
                        M(new Date().getTime());
                },
                [b, I, E]
            ),
            L = l.useCallback(
                (e) => {
                    if (null == j) return;
                    let { width: t, height: r } = j,
                        n = (0, s.kH)(t * e, r * e, w),
                        { x: l, y: i } = f.current;
                    y(e),
                        v(n),
                        D({
                            x: l,
                            y: i
                        });
                },
                [w, j, D]
            ),
            Z = l.useCallback(() => {
                if (null == b.current || null == j) return;
                let e = (I + 90) % 360,
                    t = -f.current.x,
                    r = f.current.y,
                    n = j.height,
                    l = j.width,
                    i = (0, s.kH)(n * O, l * O, w);
                D({
                    x: r,
                    y: t
                }),
                    N(e),
                    x({
                        width: n,
                        height: l
                    }),
                    v(i);
            }, [j, I, D, O, w]),
            G = l.useCallback(() => {
                if (null == j) return {};
                let { width: e, height: t } = p(j, I);
                return {
                    width: e * O,
                    minWidth: e * O,
                    height: t * O,
                    minHeight: t * O
                };
            }, [j, I, O]),
            z = l.useCallback((e) => {
                A({
                    x: e.clientX - f.current.x,
                    y: e.clientY - f.current.y
                }),
                    P(!0);
            }, []);
        l.useEffect(() => {
            let e = () => P(!1);
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, []);
        let B = l.useCallback(
            (e) => {
                let { x: t, y: r } = f.current;
                S &&
                    (e.clientX !== t || e.clientY !== r) &&
                    D({
                        x: (t = e.clientX - C.x),
                        y: (r = e.clientY - C.y)
                    });
            },
            [S, C, D]
        );
        l.useEffect(() => {
            if (S) return window.addEventListener('mousemove', B), () => window.removeEventListener('mousemove', B);
        }, [B, S]);
        let U = l.useRef(null),
            H = l.useCallback(async () => {
                let e;
                if (null == b.current) return;
                let r = Date.now(),
                    n = b.current,
                    l = {
                        height: u.eT,
                        width: u.eT
                    },
                    a = null;
                if ((null != U.current && (U.current(), (U.current = null)), k))
                    try {
                        let { result: r, cancelFn: i } = await (0, s.$p)({
                            file: t,
                            image: n,
                            cropDimensions: w,
                            cropOriginCoordinates: f.current,
                            maxDimensions: l,
                            imageRotation: I
                        });
                        (U.current = i), (e = await r);
                    } catch (e) {
                        m.error('Error cropping GIF: '.concat(e)), (a = u.ze.GIF_CROPPING);
                    } finally {
                        var c;
                        null == (c = U.current) || c.call(U), (U.current = null);
                    }
                else
                    e = (0, i.PT)({
                        image: n,
                        cropDimensions: w,
                        cropOriginCoordinates: f.current,
                        maxDimensions: l,
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
            }, [w, t, I, k, o]);
        return (
            l.useEffect(() => {
                o({
                    error: null,
                    loading: !0
                });
                let e = setTimeout(H, 1000);
                return () => clearTimeout(e);
            }, [O, H, o, R]),
            (0, n.jsxs)('div', {
                className: h.imageEditor,
                children: [
                    (0, n.jsxs)('div', {
                        className: h.editingContainer,
                        children: [
                            (0, n.jsx)('img', {
                                onLoad: T,
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
                                ref: b,
                                onMouseDown: z,
                                draggable: !1
                            }),
                            (0, n.jsx)('div', {
                                className: h.overlay,
                                style: {
                                    opacity: +(null != j),
                                    width: w.width,
                                    height: w.height
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
                                        { onClick: l } = e,
                                        i = (function (e, t) {
                                            if (null == e) return {};
                                            var r,
                                                n,
                                                l = (function (e, t) {
                                                    if (null == e) return {};
                                                    var r,
                                                        n,
                                                        l = {},
                                                        i = Object.keys(e);
                                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                                                    return l;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var i = Object.getOwnPropertySymbols(e);
                                                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                                            }
                                            return l;
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
                                            i
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
    p = (e, t) => {
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
