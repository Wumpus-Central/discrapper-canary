r.d(t, { v: () => v }), r(388685);
var n = r(255367),
    a = r(73800),
    l = r(36793),
    s = r(481060),
    i = r(710845),
    o = r(197712),
    c = r(511004),
    u = r(598117),
    d = r(388032),
    p = r(917093);
function h(e) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let m = new i.Z('ImageEditor'),
    f = {
        width: 400,
        height: 400
    },
    v = (e) => {
        let { file: t, imageUri: r, onUpdate: i } = e,
            v = a.useRef({
                x: 0,
                y: 0
            }),
            O = a.useRef(null),
            [N, E] = a.useState(1),
            [I, D] = a.useState(null),
            [y, C] = a.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }),
            [w, S] = a.useState(0),
            [A, k] = a.useState({
                x: 0,
                y: 0
            }),
            [T, M] = a.useState(!1),
            R = 'image/gif' === t.type;
        a.useEffect(() => {
            (0, c.Z)();
        }, []);
        let L = a.useCallback(() => {
                if (null == O.current) return;
                let e = O.current.naturalWidth,
                    t = O.current.naturalHeight;
                D({
                    width: e,
                    height: t
                }),
                    C(
                        _(
                            {
                                width: e,
                                height: t
                            },
                            1,
                            R
                        )
                    );
            }, [R]),
            P = a.useCallback(
                (e) => {
                    if (null == O.current) return;
                    let { x: t, y: r } = (0, o.U$)(e.x, e.y, y);
                    (v.current = {
                        x: t,
                        y: r
                    }),
                        (O.current.style.transform = 'translate3d('.concat(t, 'px, ').concat(r, 'px, 0) rotate(').concat(w, 'deg)'));
                },
                [O, w, y]
            ),
            z = a.useCallback(
                (e) => {
                    if (null == I) return;
                    let t = _(I, e, R),
                        { x: r, y: n } = v.current;
                    E(e),
                        C(t),
                        P({
                            x: r,
                            y: n
                        });
                },
                [I, P, R]
            ),
            G = a.useCallback(() => {
                if (null == O.current || null == I) return;
                let e = (w + 90) % 360,
                    t = -v.current.x,
                    r = v.current.y,
                    n = I.height,
                    a = I.width,
                    l = _(
                        {
                            width: n,
                            height: a
                        },
                        N,
                        R
                    );
                P({
                    x: r,
                    y: t
                }),
                    S(e),
                    D({
                        width: n,
                        height: a
                    }),
                    C(l);
            }, [I, w, P, N, R]),
            Z = a.useCallback(() => {
                if (null == I) return {};
                let { height: e, width: t } = x(b(I, w), N);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t
                };
            }, [I, w, N]),
            U = a.useCallback((e) => {
                k({
                    x: e.clientX - v.current.x,
                    y: e.clientY - v.current.y
                }),
                    M(!0);
            }, []);
        a.useEffect(() => {
            let e = () => M(!1);
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, []);
        let B = a.useCallback(
            (e) => {
                let { x: t, y: r } = v.current;
                T &&
                    (e.clientX !== t || e.clientY !== r) &&
                    P({
                        x: (t = e.clientX - A.x),
                        y: (r = e.clientY - A.y)
                    });
            },
            [T, A, P]
        );
        a.useEffect(() => {
            if (T) return window.addEventListener('mousemove', B), () => window.removeEventListener('mousemove', B);
        }, [B, T]);
        let W = a.useRef(null),
            F = a.useCallback(async () => {
                let e;
                if (null == O.current || null == I) return;
                let r = Date.now(),
                    n = O.current,
                    a = {
                        height: u.eT,
                        width: u.eT
                    },
                    s = null;
                if ((null != W.current && (W.current(), (W.current = null)), R))
                    try {
                        let r = j(
                                {
                                    file: t,
                                    image: n,
                                    cropDimensions: f,
                                    cropOriginCoordinates: v.current,
                                    maxDimensions: a,
                                    imageRotation: w,
                                    resizeWidth: u.eT,
                                    resizeHeight: u.eT
                                },
                                I,
                                N
                            ),
                            { result: l, cancelFn: s } = await (0, o.$p)(r);
                        (W.current = s), (e = await l);
                    } catch (e) {
                        m.error('Error cropping GIF', e), (s = u.ze.GIF_CROPPING);
                    } finally {
                        var c;
                        null == (c = W.current) || c.call(W), (W.current = null);
                    }
                else
                    e = (0, l.PT)({
                        image: n,
                        cropDimensions: f,
                        cropOriginCoordinates: v.current,
                        maxDimensions: a,
                        imageRotation: w
                    });
                return (
                    i({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: s,
                        loading: !1
                    }),
                    () => {
                        var e;
                        null == (e = W.current) || e.call(W), (W.current = null);
                    }
                );
            }, [t, w, R, i, I, N]);
        return (
            a.useEffect(() => {
                F();
            }, [F, w, I, T, N]),
            (0, n.jsxs)('div', {
                className: p.imageEditor,
                children: [
                    (0, n.jsxs)('div', {
                        className: p.editingContainer,
                        children: [
                            (0, n.jsx)('img', {
                                onLoad: L,
                                onError: () => {
                                    i({
                                        error: u.ze.IMAGE_LOAD,
                                        loading: !1
                                    });
                                },
                                style: h(
                                    {
                                        opacity: +(null != I),
                                        transform: 'translate3d('.concat(v.current.x, 'px, ').concat(v.current.y, 'px, 0) rotate(').concat(w, 'deg)')
                                    },
                                    Z()
                                ),
                                className: p.image,
                                src: r,
                                crossOrigin: 'anonymous',
                                alt: 'avatar',
                                ref: O,
                                onMouseDown: U,
                                draggable: !1
                            }),
                            (0, n.jsx)('div', {
                                className: p.overlay,
                                style: {
                                    opacity: +(null != I),
                                    width: f.width,
                                    height: f.height
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
                                    (0, n.jsx)(s.XBm, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        className: p.zoomIcon
                                    }),
                                    (0, n.jsx)(s.iRW, {
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
                                    (0, n.jsx)(s.XBm, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: p.zoomIcon
                                    })
                                ]
                            }),
                            (0, n.jsx)(s.ua7, {
                                text: d.intl.string(d.t.E36Wd3),
                                'aria-label': d.intl.string(d.t.LzFiKC),
                                children: (e) => {
                                    var { onClick: t } = e,
                                        r = (function (e, t) {
                                            if (null == e) return {};
                                            var r,
                                                n,
                                                a = (function (e, t) {
                                                    if (null == e) return {};
                                                    var r,
                                                        n,
                                                        a = {},
                                                        l = Object.keys(e);
                                                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                                    return a;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                                            }
                                            return a;
                                        })(e, ['onClick']);
                                    return (0, n.jsx)(
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
                                                r
                                            ),
                                            {
                                                onClick: G,
                                                children: (0, n.jsx)(s.Vk2, {
                                                    size: 'md',
                                                    color: 'currentColor'
                                                })
                                            }
                                        )
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
    x = (e, t) => {
        let { width: r, height: n } = e,
            a = 400 * t,
            l = r / n;
        return (
            r > n ? (n = (r = a) / l) : (r = (n = a) * l),
            {
                width: r,
                height: n
            }
        );
    };
function _(e, t, r) {
    let { width: n, height: a } = x(e, t),
        l = Math.abs(400 - n) / 2,
        s = Math.abs(400 - a) / 2;
    return r && (n < 400 || a < 400)
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
let j = (e, t, r) => {
    let { height: n, width: a } = x(t, r),
        l = (n = Math.min(n, 400)) / (a = Math.min(a, 400)),
        s = {
            height: n,
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
