r.d(t, { v: () => m }), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(36793),
    s = r(481060),
    l = r(710845),
    o = r(197712),
    c = r(511004),
    u = r(598117),
    d = r(388032),
    h = r(917093);
function p(e) {
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
let g = new l.Z('ImageEditor'),
    m = (e) => {
        let { file: t, imageUri: r, onUpdate: l } = e,
            m = a.useRef({
                x: 0,
                y: 0
            }),
            b = a.useRef(null),
            [v, x] = a.useState(1),
            [_, O] = a.useState(null),
            [j, E] = a.useState({
                width: 0,
                height: 0
            }),
            [D, N] = a.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [y, I] = a.useState(0),
            [C, w] = a.useState({
                x: 0,
                y: 0
            }),
            [S, A] = a.useState(!1),
            [k, M] = a.useState(0),
            R = 'image/gif' === t.type;
        a.useEffect(() => {
            (0, c.Z)();
        }, []);
        let T = a.useCallback(() => {
                if (null == b.current || v > 1) return;
                let { width: e, height: t } = b.current.getBoundingClientRect(),
                    r = Math.min(e, t),
                    n = {
                        width: r,
                        height: r
                    };
                O({
                    width: e,
                    height: t
                }),
                    E(n),
                    N((0, o.kH)(e, t, n));
            }, [v]),
            L = a.useCallback(
                (e) => {
                    if (null == b.current) return;
                    let { x: t, y: r } = (0, o.U$)(e.x, e.y, D);
                    (m.current = {
                        x: t,
                        y: r
                    }),
                        (b.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(r, 'px, 0) rotate(').concat(y, 'deg)')),
                        M(new Date().getTime());
                },
                [b, y, D]
            ),
            P = a.useCallback(
                (e) => {
                    if (null == _) return;
                    let { width: t, height: r } = _,
                        n = (0, o.kH)(t * e, r * e, j),
                        { x: a, y: i } = m.current;
                    x(e),
                        N(n),
                        L({
                            x: a,
                            y: i
                        });
                },
                [j, _, L]
            ),
            z = a.useCallback(() => {
                if (null == b.current || null == _) return;
                let e = (y + 90) % 360,
                    t = -m.current.x,
                    r = m.current.y,
                    n = _.height,
                    a = _.width,
                    i = (0, o.kH)(n * v, a * v, j);
                L({
                    x: r,
                    y: t
                }),
                    I(e),
                    O({
                        width: n,
                        height: a
                    }),
                    N(i);
            }, [_, y, L, v, j]),
            G = a.useCallback(() => {
                if (null == _) return {};
                let { width: e, height: t } = f(_, y);
                return {
                    width: e * v,
                    minWidth: e * v,
                    height: t * v,
                    minHeight: t * v
                };
            }, [_, y, v]),
            Z = a.useCallback((e) => {
                w({
                    x: e.clientX - m.current.x,
                    y: e.clientY - m.current.y
                }),
                    A(!0);
            }, []);
        a.useEffect(() => {
            let e = () => A(!1);
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, []);
        let B = a.useCallback(
            (e) => {
                let { x: t, y: r } = m.current;
                S &&
                    (e.clientX !== t || e.clientY !== r) &&
                    L({
                        x: (t = e.clientX - C.x),
                        y: (r = e.clientY - C.y)
                    });
            },
            [S, C, L]
        );
        a.useEffect(() => {
            if (S) return window.addEventListener('mousemove', B), () => window.removeEventListener('mousemove', B);
        }, [B, S]);
        let U = a.useRef(null),
            W = a.useCallback(async () => {
                let e;
                if (null == b.current) return;
                let r = Date.now(),
                    n = b.current,
                    a = {
                        height: u.eT,
                        width: u.eT
                    },
                    s = null;
                if ((null != U.current && (U.current(), (U.current = null)), R))
                    try {
                        let { result: r, cancelFn: i } = await (0, o.$p)({
                            file: t,
                            image: n,
                            cropDimensions: j,
                            cropOriginCoordinates: m.current,
                            maxDimensions: a,
                            imageRotation: y
                        });
                        (U.current = i), (e = await r);
                    } catch (e) {
                        g.error('Error cropping GIF: '.concat(e)), (s = u.ze.GIF_CROPPING);
                    } finally {
                        var c;
                        null == (c = U.current) || c.call(U), (U.current = null);
                    }
                else
                    e = (0, i.PT)({
                        image: n,
                        cropDimensions: j,
                        cropOriginCoordinates: m.current,
                        maxDimensions: a,
                        imageRotation: y
                    });
                return (
                    l({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: s,
                        loading: !1
                    }),
                    () => {
                        var e;
                        null == (e = U.current) || e.call(U), (U.current = null);
                    }
                );
            }, [j, t, y, R, l]);
        return (
            a.useEffect(() => {
                l({
                    error: null,
                    loading: !0
                });
                let e = setTimeout(W, 1000);
                return () => clearTimeout(e);
            }, [v, W, l, k]),
            (0, n.jsxs)('div', {
                className: h.imageEditor,
                children: [
                    (0, n.jsxs)('div', {
                        className: h.editingContainer,
                        children: [
                            (0, n.jsx)('img', {
                                onLoad: T,
                                onError: () => {
                                    l({
                                        error: u.ze.IMAGE_LOAD,
                                        loading: !1
                                    });
                                },
                                style: p(
                                    {
                                        opacity: +(null != _),
                                        transform: 'translate3d('.concat(m.current.x, 'px, ').concat(m.current.y, 'px, 0) rotate(').concat(y, 'deg)')
                                    },
                                    G()
                                ),
                                className: h.image,
                                src: r,
                                crossOrigin: 'anonymous',
                                alt: 'avatar',
                                ref: b,
                                onMouseDown: Z,
                                draggable: !1
                            }),
                            (0, n.jsx)('div', {
                                className: h.overlay,
                                style: {
                                    opacity: +(null != _),
                                    width: j.width,
                                    height: j.height
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
                                    (0, n.jsx)(s.XBm, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        className: h.zoomIcon
                                    }),
                                    (0, n.jsx)(s.iRW, {
                                        className: h.slider,
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 2,
                                        keyboardStep: 0.025,
                                        asValueChanges: P,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        'aria-label': d.intl.string(d.t.dnvZSk)
                                    }),
                                    (0, n.jsx)(s.XBm, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: h.zoomIcon
                                    })
                                ]
                            }),
                            (0, n.jsx)(s.ua7, {
                                text: d.intl.string(d.t.E36Wd3),
                                'aria-label': d.intl.string(d.t.LzFiKC),
                                children: (e) => {
                                    var t,
                                        r,
                                        { onClick: a } = e,
                                        i = (function (e, t) {
                                            if (null == e) return {};
                                            var r,
                                                n,
                                                a = (function (e, t) {
                                                    if (null == e) return {};
                                                    var r,
                                                        n,
                                                        a = {},
                                                        i = Object.keys(e);
                                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                                    return a;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var i = Object.getOwnPropertySymbols(e);
                                                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                                            }
                                            return a;
                                        })(e, ['onClick']);
                                    return (0, n.jsx)(
                                        s.zxk,
                                        ((t = p(
                                            {
                                                className: h.rotateButton,
                                                look: s.zxk.Looks.BLANK,
                                                size: s.PhG.NONE,
                                                color: s.zxk.Colors.TRANSPARENT,
                                                grow: !1
                                            },
                                            i
                                        )),
                                        (r = r =
                                            {
                                                onClick: z,
                                                children: (0, n.jsx)(s.Vk2, {
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
    f = (e, t) => {
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
