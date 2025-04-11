n.d(t, { Z: () => v });
var a = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(974674),
    c = n(438784),
    s = n(481060),
    u = n(686546),
    _ = n(3682),
    d = n(630403);
let f = {},
    p = 1 / 4;
function m(e) {
    let { height: t, fillColor: n } = e;
    return (0, a.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * _.jR
        },
        children: (0, a.jsx)(c.b, {
            className: d.dots,
            dotRadius: t * p
        })
    });
}
function g(e) {
    let { isTyping: t, statusCoords: n, status: r } = e,
        i = (0, s.vjg)(s.Skl.ONLINE);
    return t
        ? (0, a.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, a.jsx)(m, {
                  height: n.height,
                  fillColor: i
              })
          })
        : null != r
          ? (0, a.jsx)(s.qbd, {
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
function I(e) {
    let { src: t, size: n } = e;
    return (0, a.jsx)('img', {
        className: d.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let h = {
        [s.EFr.SIZE_16]: {
            default: u.QS.DIAGONAL_FACEPILE_16,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_16
        },
        [s.EFr.SIZE_20]: {
            default: u.QS.DIAGONAL_FACEPILE_20,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_20
        },
        [s.EFr.SIZE_24]: {
            default: u.QS.DIAGONAL_FACEPILE_24,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_24
        },
        [s.EFr.SIZE_32]: {
            default: u.QS.DIAGONAL_FACEPILE_32,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [s.EFr.SIZE_40]: {
            default: u.QS.DIAGONAL_FACEPILE_32,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [s.EFr.SIZE_48]: {
            default: u.QS.DIAGONAL_FACEPILE_40,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_40
        },
        [s.EFr.SIZE_56]: {
            default: u.QS.DIAGONAL_FACEPILE_56,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_56
        },
        [s.EFr.SIZE_80]: {
            default: u.QS.DIAGONAL_FACEPILE_80,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_80
        },
        [s.EFr.SIZE_120]: {
            default: u.QS.DIAGONAL_FACEPILE_120,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_120
        }
    },
    v = function (e) {
        var t,
            { backSrc: n, frontSrc: i, size: c, isTyping: p, status: m, style: v, className: b } = e,
            y = (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            r = {},
                            i = Object.keys(e);
                        for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ['backSrc', 'frontSrc', 'size', 'isTyping', 'status', 'style', 'className']);
        let { size: S } = s.ny6[c],
            {
                statusCoords: E,
                frontAvatarOffsetPx: C,
                frontAvatarSizePx: A,
                backAvatarSizePx: N
            } = r.useMemo(() => {
                var e;
                let t = ''.concat(S, '-').concat(p);
                return null != (e = f[t])
                    ? e
                    : (function (e, t, n) {
                          let a = s.ny6[e],
                              r = a.size / (_.z3 + _.o),
                              i = r * _.z3,
                              o = r * _.o,
                              c = {
                                  statusCoords: (0, l.Vq)(a, s.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: i,
                                  backAvatarSizePx: r,
                                  frontAvatarOffsetPx: o,
                                  frontAvatarCenter: o + i / 2
                              };
                          return (f[n] = c), c;
                      })(c, p, t);
            }, [S, p, c]),
            P = ((t = null != m), p ? h[c].typing : t ? h[c].status : h[c].default);
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
                    width: S,
                    height: S
                },
                v
            ),
            'aria-label': y['aria-label'],
            'aria-hidden': y['aria-hidden'],
            className: o()(d.container, b),
            children: [
                (0, a.jsxs)(u.ZP, {
                    mask: P,
                    height: S,
                    width: S,
                    children: [
                        (0, a.jsx)('img', {
                            src: n,
                            alt: '',
                            width: N,
                            height: N
                        }),
                        (0, a.jsx)('div', {
                            style: {
                                position: 'absolute',
                                top: C,
                                left: C
                            },
                            children: (0, a.jsx)(I, {
                                src: i,
                                size: A,
                                isTyping: p,
                                status: m
                            })
                        })
                    ]
                }),
                (0, a.jsx)(g, {
                    statusCoords: E,
                    status: m,
                    isTyping: p
                })
            ]
        });
    };
