n.d(t, { Z: () => E });
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(974674),
    o = n(438784),
    c = n(481060),
    u = n(686546),
    d = n(3682),
    f = n(630403);
let h = {},
    _ = 1 / 4;
function g(e) {
    let { height: t, fillColor: n } = e;
    return (0, l.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR
        },
        children: (0, l.jsx)(o.b, {
            className: f.dots,
            dotRadius: t * _
        })
    });
}
function m(e) {
    let { isTyping: t, statusCoords: n, status: r } = e,
        i = (0, c.vjg)(c.Skl.ONLINE);
    return t
        ? (0, l.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, l.jsx)(g, {
                  height: n.height,
                  fillColor: i
              })
          })
        : null != r
          ? (0, l.jsx)(c.qbd, {
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
function p(e) {
    let { src: t, size: n } = e;
    return (0, l.jsx)('img', {
        className: f.circularImage,
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
    E = function (e) {
        var t,
            { backSrc: n, frontSrc: i, size: o, isTyping: _, status: g, style: E, className: y } = e,
            I = (function (e, t) {
                if (null == e) return {};
                var n,
                    l,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            l,
                            r = {},
                            i = Object.keys(e);
                        for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ['backSrc', 'frontSrc', 'size', 'isTyping', 'status', 'style', 'className']);
        let { size: S } = c.ny6[o],
            {
                statusCoords: A,
                frontAvatarOffsetPx: O,
                frontAvatarSizePx: v,
                backAvatarSizePx: x
            } = r.useMemo(() => {
                var e;
                let t = ''.concat(S, '-').concat(_);
                return null != (e = h[t])
                    ? e
                    : (function (e, t, n) {
                          let l = c.ny6[e],
                              r = l.size / (d.z3 + d.o),
                              i = r * d.z3,
                              a = r * d.o,
                              o = {
                                  statusCoords: (0, s.Vq)(l, c.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: i,
                                  backAvatarSizePx: r,
                                  frontAvatarOffsetPx: a,
                                  frontAvatarCenter: a + i / 2
                              };
                          return (h[n] = o), o;
                      })(o, _, t);
            }, [S, _, o]),
            C = ((t = null != g), _ ? b[o].typing : t ? b[o].status : b[o].default);
        return (0, l.jsxs)('div', {
            style: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })(
                {
                    width: S,
                    height: S
                },
                E
            ),
            'aria-label': I['aria-label'],
            'aria-hidden': I['aria-hidden'],
            className: a()(f.container, y),
            children: [
                (0, l.jsxs)(u.ZP, {
                    mask: C,
                    height: S,
                    width: S,
                    children: [
                        (0, l.jsx)('img', {
                            src: n,
                            alt: '',
                            width: x,
                            height: x
                        }),
                        (0, l.jsx)('div', {
                            style: {
                                position: 'absolute',
                                top: O,
                                left: O
                            },
                            children: (0, l.jsx)(p, {
                                src: i,
                                size: v,
                                isTyping: _,
                                status: g
                            })
                        })
                    ]
                }),
                (0, l.jsx)(m, {
                    statusCoords: A,
                    status: g,
                    isTyping: _
                })
            ]
        });
    };
