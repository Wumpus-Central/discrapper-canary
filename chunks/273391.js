r.d(t, { v: () => f }), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(36793),
    l = r(481060),
    s = r(710845),
    o = r(197712),
    c = r(511004),
    u = r(598117),
    d = r(388032),
    p = r(917093);
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
let h = new s.Z('ImageEditor'),
    m = {
        width: 400,
        height: 400
    },
    f = (e) => {
        let { file: t, imageUri: r, onUpdate: s } = e,
            f = a.useRef({
                x: 0,
                y: 0
            }),
            _ = a.useRef(null),
            [O, j] = a.useState(1),
            [E, D] = a.useState(null),
            [N, I] = a.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [y, C] = a.useState(0),
            [S, w] = a.useState({
                x: 0,
                y: 0
            }),
            [A, k] = a.useState(!1),
            [M, L] = a.useState(0),
            T = 'image/gif' === t.type;
        a.useEffect(() => {
            (0, c.Z)();
        }, []);
        let R = a.useCallback(() => {
                if (null == _.current) return;
                let e = _.current.naturalWidth,
                    t = _.current.naturalHeight;
                D({
                    width: e,
                    height: t
                }),
                    I(
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
                        (_.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(r, 'px, 0) rotate(').concat(y, 'deg)')),
                        L(new Date().getTime());
                },
                [_, y, N]
            ),
            z = a.useCallback(
                (e) => {
                    if (null == E) return;
                    let t = x(E, e),
                        { x: r, y: n } = f.current;
                    j(e),
                        I(t),
                        P({
                            x: r,
                            y: n
                        });
                },
                [E, P]
            ),
            G = a.useCallback(() => {
                if (null == _.current || null == E) return;
                let e = (y + 90) % 360,
                    t = -f.current.x,
                    r = f.current.y,
                    n = E.height,
                    a = E.width,
                    i = x(
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
                    I(i);
            }, [E, y, P, O]),
            Z = a.useCallback(() => {
                if (null == E) return {};
                let { height: e, width: t } = v(b(E, y), O);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [E, y, O]),
            U = a.useCallback((e) => {
                w({
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
                        x: (t = e.clientX - S.x),
                        y: (r = e.clientY - S.y)
                    });
            },
            [A, S, P]
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
                    l = null;
                if ((null != W.current && (W.current(), (W.current = null)), T))
                    try {
                        let { result: r, cancelFn: i } = await (0, o.$p)({
                            file: t,
                            image: n,
                            cropDimensions: m,
                            cropOriginCoordinates: f.current,
                            maxDimensions: a,
                            imageRotation: y
                        });
                        (W.current = i), (e = await r);
                    } catch (e) {
                        h.error('Error cropping GIF: '.concat(e)), (l = u.ze.GIF_CROPPING);
                    } finally {
                        var c;
                        null == (c = W.current) || c.call(W), (W.current = null);
                    }
                else
                    e = (0, i.PT)({
                        image: n,
                        cropDimensions: m,
                        cropOriginCoordinates: f.current,
                        maxDimensions: a,
                        imageRotation: y
                    });
                return (
                    s({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: l,
                        loading: !1
                    }),
                    () => {
                        var e;
                        null == (e = W.current) || e.call(W), (W.current = null);
                    }
                );
            }, [t, y, T, s]);
        return (
            a.useEffect(() => {
                s({
                    error: null,
                    loading: !0
                });
                let e = setTimeout(F, 1000);
                return () => clearTimeout(e);
            }, [O, F, s, M]),
            (0, n.jsxs)('div', {
                className: p.imageEditor,
                children: [
                    (0, n.jsxs)('div', {
                        className: p.editingContainer,
                        children: [
                            (0, n.jsx)('img', {
                                onLoad: R,
                                onError: () => {
                                    s({
                                        error: u.ze.IMAGE_LOAD,
                                        loading: !1
                                    });
                                },
                                style: g(
                                    {
                                        opacity: +(null != E),
                                        transform: 'translate3d('.concat(f.current.x, 'px, ').concat(f.current.y, 'px, 0) rotate(').concat(y, 'deg)')
                                    },
                                    Z()
                                ),
                                className: p.image,
                                src: r,
                                crossOrigin: 'anonymous',
                                alt: 'avatar',
                                ref: _,
                                onMouseDown: U,
                                draggable: !1
                            }),
                            (0, n.jsx)('div', {
                                className: p.overlay,
                                style: {
                                    opacity: +(null != E),
                                    width: m.width,
                                    height: m.height
                                }
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: p.toolsContainer,
                        children: [
                            (0, n.jsxs)('div', {
                                className: p.zoomControls,
                                children: [
                                    (0, n.jsx)(l.XBm, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        className: p.zoomIcon
                                    }),
                                    (0, n.jsx)(l.iRW, {
                                        className: p.slider,
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 4,
                                        keyboardStep: 0.025,
                                        asValueChanges: z,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        'aria-label': d.intl.string(d.t.dnvZSk)
                                    }),
                                    (0, n.jsx)(l.XBm, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: p.zoomIcon
                                    })
                                ]
                            }),
                            (0, n.jsx)(l.ua7, {
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
                                        l.zxk,
                                        ((t = g(
                                            {
                                                className: p.rotateButton,
                                                look: l.zxk.Looks.BLANK,
                                                size: l.PhG.NONE,
                                                color: l.zxk.Colors.TRANSPARENT,
                                                grow: !1
                                            },
                                            i
                                        )),
                                        (r = r =
                                            {
                                                onClick: G,
                                                children: (0, n.jsx)(l.Vk2, {
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
            i = r / n;
        return (
            r > n ? (n = (r = a) / i) : (r = (n = a) * i),
            {
                width: r,
                height: n
            }
        );
    };
function x(e, t) {
    let { width: r, height: n } = v(e, t),
        a = Math.abs(400 - r) / 2,
        i = Math.abs(400 - n) / 2;
    return {
        top: i,
        bottom: -i,
        left: -a,
        right: a
    };
}
