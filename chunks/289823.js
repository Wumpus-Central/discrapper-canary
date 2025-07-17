n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(974674),
    s = n(438784),
    c = n(481060),
    u = n(686546),
    d = n(3682),
    p = n(630403);
let m = {},
    f = 1 / 4;
function g(e) {
    let { height: t, fillColor: n } = e;
    return (0, r.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR
        },
        children: (0, r.jsx)(s.b, {
            className: p.dots,
            dotRadius: t * f
        })
    });
}
function h(e) {
    let { isTyping: t, statusCoords: n, status: i } = e,
        l = (0, c.vjg)(c.Skl.ONLINE);
    return t
        ? (0, r.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, r.jsx)(g, {
                  height: n.height,
                  fillColor: l
              })
          })
        : null != i
          ? (0, r.jsx)(c.qbd, {
                size: n.height,
                status: i,
                style: {
                    position: 'absolute',
                    top: n.y,
                    left: n.x
                }
            })
          : null;
}
function _(e) {
    let { src: t, size: n } = e;
    return (0, r.jsx)('img', {
        className: p.circularImage,
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
            { backSrc: n, frontSrc: l, size: s, isTyping: f, status: g, style: E, className: x } = e,
            C = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['backSrc', 'frontSrc', 'size', 'isTyping', 'status', 'style', 'className']);
        let { size: v } = c.ny6[s],
            {
                statusCoords: y,
                frontAvatarOffsetPx: O,
                frontAvatarSizePx: j,
                backAvatarSizePx: I
            } = i.useMemo(() => {
                var e;
                let t = ''.concat(v, '-').concat(f);
                return null != (e = m[t])
                    ? e
                    : (function (e, t, n) {
                          let r = c.ny6[e],
                              i = r.size / (d.z3 + d.o),
                              l = i * d.z3,
                              a = i * d.o,
                              s = {
                                  statusCoords: (0, o.Vq)(r, c.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: l,
                                  backAvatarSizePx: i,
                                  frontAvatarOffsetPx: a,
                                  frontAvatarCenter: a + l / 2
                              };
                          return ((m[n] = s), s);
                      })(s, f, t);
            }, [v, f, s]),
            S = ((t = null != g), f ? b[s].typing : t ? b[s].status : b[s].default);
        return (0, r.jsxs)('div', {
            style: (function (e) {
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
            })(
                {
                    width: v,
                    height: v
                },
                E
            ),
            'aria-label': C['aria-label'],
            'aria-hidden': C['aria-hidden'],
            className: a()(p.container, x),
            children: [
                (0, r.jsxs)(u.ZP, {
                    mask: S,
                    height: v,
                    width: v,
                    children: [
                        (0, r.jsx)('img', {
                            src: n,
                            alt: '',
                            width: I,
                            height: I
                        }),
                        (0, r.jsx)('div', {
                            style: {
                                position: 'absolute',
                                top: O,
                                left: O
                            },
                            children: (0, r.jsx)(_, {
                                src: l,
                                size: j,
                                isTyping: f,
                                status: g
                            })
                        })
                    ]
                }),
                (0, r.jsx)(h, {
                    statusCoords: y,
                    status: g,
                    isTyping: f
                })
            ]
        });
    };
