r.d(t, { v: () => f }), r(388685);
var n = r(255367),
    a = r(73800),
    s = r(36793),
    i = r(481060),
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
    m = {
        width: 400,
        height: 400
    },
    f = (e) => {
        let { file: t, imageUri: r, onUpdate: l } = e,
            f = a.useRef({
                x: 0,
                y: 0
            }),
            _ = a.useRef(null),
            [O, j] = a.useState(1),
            [E, D] = a.useState(null),
            [N, y] = a.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [I, C] = a.useState(0),
            [w, S] = a.useState({
                x: 0,
                y: 0
            }),
            [A, k] = a.useState(!1),
            [M, T] = a.useState(0),
            R = 'image/gif' === t.type;
        a.useEffect(() => {
            (0, c.Z)();
        }, []);
        let L = a.useCallback(() => {
                if (null == _.current) return;
                let e = _.current.naturalWidth,
                    t = _.current.naturalHeight;
                D({
                    width: e,
                    height: t
                }),
                    y(
                        x(
                            {
                                width: e,
                                height: t
                            },
                            1
                        )
                    );
            }, []),
            P = a.useCallback(
                (e) => {
                    if (null == _.current) return;
                    let { x: t, y: r } = (0, o.U$)(e.x, e.y, N);
                    (f.current = {
                        x: t,
                        y: r
                    }),
                        (_.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(r, 'px, 0) rotate(').concat(I, 'deg)')),
                        T(new Date().getTime());
                },
                [_, I, N]
            ),
            z = a.useCallback(
                (e) => {
                    if (null == E) return;
                    let t = x(E, e),
                        { x: r, y: n } = f.current;
                    j(e),
                        y(t),
                        P({
                            x: r,
                            y: n
                        });
                },
                [E, P]
            ),
            G = a.useCallback(() => {
                if (null == _.current || null == E) return;
                let e = (I + 90) % 360,
                    t = -f.current.x,
                    r = f.current.y,
                    n = E.height,
                    a = E.width,
                    s = x(
                        {
                            width: n,
                            height: a
                        },
                        O
                    );
                P({
                    x: r,
                    y: t
                }),
                    C(e),
                    D({
                        width: n,
                        height: a
                    }),
                    y(s);
            }, [E, I, P, O]),
            Z = a.useCallback(() => {
                if (null == E) return {};
                let { height: e, width: t } = v(b(E, I), O);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [E, I, O]),
            U = a.useCallback((e) => {
                S({
                    x: e.clientX - f.current.x,
                    y: e.clientY - f.current.y
                }),
                    k(!0);
            }, []);
        a.useEffect(() => {
            let e = () => k(!1);
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, []);
        let B = a.useCallback(
            (e) => {
                let { x: t, y: r } = f.current;
                A &&
                    (e.clientX !== t || e.clientY !== r) &&
                    P({
                        x: (t = e.clientX - w.x),
                        y: (r = e.clientY - w.y)
                    });
            },
            [A, w, P]
        );
        a.useEffect(() => {
            if (A) return window.addEventListener('mousemove', B), () => window.removeEventListener('mousemove', B);
        }, [B, A]);
        let W = a.useRef(null),
            F = a.useCallback(async () => {
                let e;
                if (null == _.current) return;
                let r = Date.now(),
                    n = _.current,
                    a = {
                        height: u.eT,
                        width: u.eT
                    },
                    i = null;
                if ((null != W.current && (W.current(), (W.current = null)), R))
                    try {
                        let { result: r, cancelFn: s } = await (0, o.$p)({
                            file: t,
                            image: n,
                            cropDimensions: m,
                            cropOriginCoordinates: f.current,
                            maxDimensions: a,
                            imageRotation: I
                        });
                        (W.current = s), (e = await r);
                    } catch (e) {
                        g.error('Error cropping GIF: '.concat(e)), (i = u.ze.GIF_CROPPING);
                    } finally {
                        var c;
                        null == (c = W.current) || c.call(W), (W.current = null);
                    }
                else
                    e = (0, s.PT)({
                        image: n,
                        cropDimensions: m,
                        cropOriginCoordinates: f.current,
                        maxDimensions: a,
                        imageRotation: I
                    });
                return (
                    l({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: i,
                        loading: !1
                    }),
                    () => {
                        var e;
                        null == (e = W.current) || e.call(W), (W.current = null);
                    }
                );
            }, [t, I, R, l]);
        return (
            a.useEffect(() => {
                l({
                    error: null,
                    loading: !0
                });
                let e = setTimeout(F, 1000);
                return () => clearTimeout(e);
            }, [O, F, l, M]),
            (0, n.jsxs)('div', {
                className: h.imageEditor,
                children: [
                    (0, n.jsxs)('div', {
                        className: h.editingContainer,
                        children: [
                            (0, n.jsx)('img', {
                                onLoad: L,
                                onError: () => {
                                    l({
                                        error: u.ze.IMAGE_LOAD,
                                        loading: !1
                                    });
                                },
                                style: p(
                                    {
                                        opacity: +(null != E),
                                        transform: 'translate3d('.concat(f.current.x, 'px, ').concat(f.current.y, 'px, 0) rotate(').concat(I, 'deg)')
                                    },
                                    Z()
                                ),
                                className: h.image,
                                src: r,
                                crossOrigin: 'anonymous',
                                alt: 'avatar',
                                ref: _,
                                onMouseDown: U,
                                draggable: !1
                            }),
                            (0, n.jsx)('div', {
                                className: h.overlay,
                                style: {
                                    opacity: +(null != E),
                                    width: m.width,
                                    height: m.height
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
                                    (0, n.jsx)(i.XBm, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        className: h.zoomIcon
                                    }),
                                    (0, n.jsx)(i.iRW, {
                                        className: h.slider,
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 4,
                                        keyboardStep: 0.025,
                                        asValueChanges: z,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        'aria-label': d.intl.string(d.t.dnvZSk)
                                    }),
                                    (0, n.jsx)(i.XBm, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: h.zoomIcon
                                    })
                                ]
                            }),
                            (0, n.jsx)(i.ua7, {
                                text: d.intl.string(d.t.E36Wd3),
                                'aria-label': d.intl.string(d.t.LzFiKC),
                                children: (e) => {
                                    var t,
                                        r,
                                        { onClick: a } = e,
                                        s = (function (e, t) {
                                            if (null == e) return {};
                                            var r,
                                                n,
                                                a = (function (e, t) {
                                                    if (null == e) return {};
                                                    var r,
                                                        n,
                                                        a = {},
                                                        s = Object.keys(e);
                                                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                                    return a;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var s = Object.getOwnPropertySymbols(e);
                                                for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                                            }
                                            return a;
                                        })(e, ['onClick']);
                                    return (0, n.jsx)(
                                        i.zxk,
                                        ((t = p(
                                            {
                                                className: h.rotateButton,
                                                look: i.zxk.Looks.BLANK,
                                                size: i.PhG.NONE,
                                                color: i.zxk.Colors.TRANSPARENT,
                                                grow: !1
                                            },
                                            s
                                        )),
                                        (r = r =
                                            {
                                                onClick: G,
                                                children: (0, n.jsx)(i.Vk2, {
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
    },
    v = (e, t) => {
        let { width: r, height: n } = e,
            a = 400 * t,
            s = r / n;
        return (
            r > n ? (n = (r = a) / s) : (r = (n = a) * s),
            {
                width: r,
                height: n
            }
        );
    };
function x(e, t) {
    let { width: r, height: n } = v(e, t),
        a = Math.abs(400 - r) / 2,
        s = Math.abs(400 - n) / 2;
    return {
        top: s,
        bottom: -s,
        left: -a,
        right: a
    };
}
