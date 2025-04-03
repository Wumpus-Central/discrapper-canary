n.d(t, { Z: () => y });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(974674),
    c = n(438784),
    o = n(481060),
    u = n(686546),
    d = n(3682),
    f = n(630403);
let p = {},
    b = 1 / 4;
function I(e) {
    let { height: t, fillColor: n } = e;
    return (0, i.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR
        },
        children: (0, i.jsx)(c.b, {
            className: f.dots,
            dotRadius: t * b
        })
    });
}
function E(e) {
    let { isTyping: t, statusCoords: n, status: r } = e,
        a = (0, o.vjg)(o.Skl.ONLINE);
    return t
        ? (0, i.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, i.jsx)(I, {
                  height: n.height,
                  fillColor: a
              })
          })
        : null != r
          ? (0, i.jsx)(o.qbd, {
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
function _(e) {
    let { src: t, size: n } = e;
    return (0, i.jsx)('img', {
        className: f.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let g = {
        [o.EFr.SIZE_16]: {
            default: u.QS.DIAGONAL_FACEPILE_16,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_16
        },
        [o.EFr.SIZE_20]: {
            default: u.QS.DIAGONAL_FACEPILE_20,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_20
        },
        [o.EFr.SIZE_24]: {
            default: u.QS.DIAGONAL_FACEPILE_24,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_24
        },
        [o.EFr.SIZE_32]: {
            default: u.QS.DIAGONAL_FACEPILE_32,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [o.EFr.SIZE_40]: {
            default: u.QS.DIAGONAL_FACEPILE_32,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [o.EFr.SIZE_48]: {
            default: u.QS.DIAGONAL_FACEPILE_40,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_40
        },
        [o.EFr.SIZE_56]: {
            default: u.QS.DIAGONAL_FACEPILE_56,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_56
        },
        [o.EFr.SIZE_80]: {
            default: u.QS.DIAGONAL_FACEPILE_80,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_80
        },
        [o.EFr.SIZE_120]: {
            default: u.QS.DIAGONAL_FACEPILE_120,
            typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
            status: u.QS.DIAGONAL_FACEPILE_STATUS_120
        }
    },
    y = function (e) {
        var t,
            { backSrc: n, frontSrc: a, size: c, isTyping: b, status: I, style: y, className: S } = e,
            A = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            a = Object.keys(e);
                        for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++) (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ['backSrc', 'frontSrc', 'size', 'isTyping', 'status', 'style', 'className']);
        let { size: O } = o.ny6[c],
            {
                statusCoords: h,
                frontAvatarOffsetPx: m,
                frontAvatarSizePx: j,
                backAvatarSizePx: L
            } = r.useMemo(() => {
                var e;
                let t = ''.concat(O, '-').concat(b);
                return null != (e = p[t])
                    ? e
                    : (function (e, t, n) {
                          let i = o.ny6[e],
                              r = i.size / (d.z3 + d.o),
                              a = r * d.z3,
                              l = r * d.o,
                              c = {
                                  statusCoords: (0, s.Vq)(i, o.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: a,
                                  backAvatarSizePx: r,
                                  frontAvatarOffsetPx: l,
                                  frontAvatarCenter: l + a / 2
                              };
                          return (p[n] = c), c;
                      })(c, b, t);
            }, [O, b, c]),
            P = ((t = null != I), b ? g[c].typing : t ? g[c].status : g[c].default);
        return (0, i.jsxs)('div', {
            style: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })(
                {
                    width: O,
                    height: O
                },
                y
            ),
            'aria-label': A['aria-label'],
            'aria-hidden': A['aria-hidden'],
            className: l()(f.container, S),
            children: [
                (0, i.jsxs)(u.ZP, {
                    mask: P,
                    height: O,
                    width: O,
                    children: [
                        (0, i.jsx)('img', {
                            src: n,
                            alt: '',
                            width: L,
                            height: L
                        }),
                        (0, i.jsx)('div', {
                            style: {
                                position: 'absolute',
                                top: m,
                                left: m
                            },
                            children: (0, i.jsx)(_, {
                                src: a,
                                size: j,
                                isTyping: b,
                                status: I
                            })
                        })
                    ]
                }),
                (0, i.jsx)(E, {
                    statusCoords: h,
                    status: I,
                    isTyping: b
                })
            ]
        });
    };
