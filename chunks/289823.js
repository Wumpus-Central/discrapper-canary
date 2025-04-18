n.d(t, { Z: () => h });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(974674),
    c = n(438784),
    s = n(481060),
    u = n(686546),
    _ = n(3682),
    d = n(369025);
let f = {},
    m = 1 / 4;
function p(e) {
    let { height: t, fillColor: n } = e;
    return (0, r.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * _.jR
        },
        children: (0, r.jsx)(c.b, {
            className: d.dots,
            dotRadius: t * m
        })
    });
}
function g(e) {
    let { isTyping: t, statusCoords: n, status: a } = e,
        i = (0, s.vjg)(s.Skl.ONLINE);
    return t
        ? (0, r.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, r.jsx)(p, {
                  height: n.height,
                  fillColor: i
              })
          })
        : null != a
          ? (0, r.jsx)(s.qbd, {
                size: n.height,
                status: a,
                style: {
                    position: 'absolute',
                    top: n.y,
                    left: n.x
                }
            })
          : null;
}
function b(e) {
    let { src: t, size: n } = e;
    return (0, r.jsx)('img', {
        className: d.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let v = {
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
    h = function (e) {
        var t,
            { backSrc: n, frontSrc: i, size: c, isTyping: m, status: p, style: h, className: I } = e,
            y = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            a = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                }
                return a;
            })(e, ['backSrc', 'frontSrc', 'size', 'isTyping', 'status', 'style', 'className']);
        let { size: S } = s.ny6[c],
            {
                statusCoords: E,
                frontAvatarOffsetPx: C,
                frontAvatarSizePx: O,
                backAvatarSizePx: P
            } = a.useMemo(() => {
                var e;
                let t = ''.concat(S, '-').concat(m);
                return null != (e = f[t])
                    ? e
                    : (function (e, t, n) {
                          let r = s.ny6[e],
                              a = r.size / (_.z3 + _.o),
                              i = a * _.z3,
                              o = a * _.o,
                              c = {
                                  statusCoords: (0, l.Vq)(r, s.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: i,
                                  backAvatarSizePx: a,
                                  frontAvatarOffsetPx: o,
                                  frontAvatarCenter: o + i / 2
                              };
                          return (f[n] = c), c;
                      })(c, m, t);
            }, [S, m, c]),
            A = ((t = null != p), m ? v[c].typing : t ? v[c].status : v[c].default);
        return (0, r.jsxs)('div', {
            style: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    width: S,
                    height: S
                },
                h
            ),
            'aria-label': y['aria-label'],
            'aria-hidden': y['aria-hidden'],
            className: o()(d.container, I),
            children: [
                (0, r.jsxs)(u.ZP, {
                    mask: A,
                    height: S,
                    width: S,
                    children: [
                        (0, r.jsx)('img', {
                            src: n,
                            alt: '',
                            width: P,
                            height: P
                        }),
                        (0, r.jsx)('div', {
                            style: {
                                position: 'absolute',
                                top: C,
                                left: C
                            },
                            children: (0, r.jsx)(b, {
                                src: i,
                                size: O,
                                isTyping: m,
                                status: p
                            })
                        })
                    ]
                }),
                (0, r.jsx)(g, {
                    statusCoords: E,
                    status: p,
                    isTyping: m
                })
            ]
        });
    };
