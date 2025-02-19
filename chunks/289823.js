n.d(t, { Z: () => y });
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(974674),
    o = n(438784),
    c = n(481060),
    u = n(686546),
    d = n(3682),
    m = n(78023);
let p = {},
    h = 1 / 4;
function g(e) {
    let { height: t, fillColor: n } = e;
    return (0, a.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR
        },
        children: (0, a.jsx)(o.b, {
            className: m.dots,
            dotRadius: t * h
        })
    });
}
function _(e) {
    let { isTyping: t, statusCoords: n, status: r } = e,
        l = (0, c.vjg)(c.Skl.ONLINE);
    return t
        ? (0, a.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, a.jsx)(g, {
                  height: n.height,
                  fillColor: l
              })
          })
        : null != r
          ? (0, a.jsx)(c.qbd, {
                size: n.height,
                status: r,
                style: {
                    position: 'absolute',
                    top: n.y,
                    left: n.x
                }
            })
          : null;
}
function f(e) {
    let { src: t, size: n } = e;
    return (0, a.jsx)('img', {
        className: m.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let b = {
        [c.EFr.SIZE_16]: {
            default: u.QS.DIAGONAL_FACEPILE_16,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_16
        },
        [c.EFr.SIZE_20]: {
            default: u.QS.DIAGONAL_FACEPILE_20,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_20
        },
        [c.EFr.SIZE_24]: {
            default: u.QS.DIAGONAL_FACEPILE_24,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_24
        },
        [c.EFr.SIZE_32]: {
            default: u.QS.DIAGONAL_FACEPILE_32,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [c.EFr.SIZE_40]: {
            default: u.QS.DIAGONAL_FACEPILE_32,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [c.EFr.SIZE_48]: {
            default: u.QS.DIAGONAL_FACEPILE_40,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_40
        },
        [c.EFr.SIZE_56]: {
            default: u.QS.DIAGONAL_FACEPILE_56,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_56
        },
        [c.EFr.SIZE_80]: {
            default: u.QS.DIAGONAL_FACEPILE_80,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_80
        },
        [c.EFr.SIZE_120]: {
            default: u.QS.DIAGONAL_FACEPILE_120,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_120
        }
    },
    y = function (e) {
        var t,
            { backSrc: n, frontSrc: l, size: o, isTyping: h, status: g, style: y, className: E } = e,
            I = (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            r = {},
                            l = Object.keys(e);
                        for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < l.length; a++) (n = l[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ['backSrc', 'frontSrc', 'size', 'isTyping', 'status', 'style', 'className']);
        let { size: v } = c.ny6[o],
            {
                statusCoords: S,
                frontAvatarOffsetPx: C,
                frontAvatarSizePx: O,
                backAvatarSizePx: x
            } = r.useMemo(() => {
                var e;
                let t = ''.concat(v, '-').concat(h);
                return null !== (e = p[t]) && void 0 !== e
                    ? e
                    : (function (e, t, n) {
                          let a = c.ny6[e],
                              r = a.size / (d.z3 + d.o),
                              l = r * d.z3,
                              i = r * d.o,
                              o = {
                                  statusCoords: (0, s.Vq)(a, c.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: l,
                                  backAvatarSizePx: r,
                                  frontAvatarOffsetPx: i,
                                  frontAvatarCenter: i + l / 2
                              };
                          return (p[n] = o), o;
                      })(o, h, t);
            }, [v, h, o]),
            A = ((t = null != g), h ? b[o].typing : t ? b[o].status : b[o].default);
        return (0, a.jsxs)('div', {
            style: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        a.forEach(function (t) {
                            var a;
                            (a = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = a);
                        });
                }
                return e;
            })(
                {
                    width: v,
                    height: v
                },
                y
            ),
            'aria-label': I['aria-label'],
            'aria-hidden': I['aria-hidden'],
            className: i()(m.container, E),
            children: [
                (0, a.jsxs)(u.ZP, {
                    mask: A,
                    height: v,
                    width: v,
                    children: [
                        (0, a.jsx)('img', {
                            src: n,
                            alt: '',
                            width: x,
                            height: x
                        }),
                        (0, a.jsx)('div', {
                            style: {
                                position: 'absolute',
                                top: C,
                                left: C
                            },
                            children: (0, a.jsx)(f, {
                                src: l,
                                size: O,
                                isTyping: h,
                                status: g
                            })
                        })
                    ]
                }),
                (0, a.jsx)(_, {
                    statusCoords: S,
                    status: g,
                    isTyping: h
                })
            ]
        });
    };
