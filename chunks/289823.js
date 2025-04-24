n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(974674),
    u = n(438784),
    c = n(481060),
    s = n(686546),
    d = n(3682),
    p = n(630403);
let E = {},
    f = 1 / 4;
function _(e) {
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
        children: (0, r.jsx)(u.b, {
            className: p.dots,
            dotRadius: t * f
        })
    });
}
function S(e) {
    let { isTyping: t, statusCoords: n, status: i } = e,
        l = (0, c.vjg)(c.Skl.ONLINE);
    return t
        ? (0, r.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, r.jsx)(_, {
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
function O(e) {
    let { src: t, size: n } = e;
    return (0, r.jsx)('img', {
        className: p.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let I = {
        [c.EFr.SIZE_16]: {
            default: s.QS.DIAGONAL_FACEPILE_16,
            typing: s.QS.DIAGONAL_FACEPILE_TYPING_16,
            status: s.QS.DIAGONAL_FACEPILE_STATUS_16
        },
        [c.EFr.SIZE_20]: {
            default: s.QS.DIAGONAL_FACEPILE_20,
            typing: s.QS.DIAGONAL_FACEPILE_TYPING_20,
            status: s.QS.DIAGONAL_FACEPILE_STATUS_20
        },
        [c.EFr.SIZE_24]: {
            default: s.QS.DIAGONAL_FACEPILE_24,
            typing: s.QS.DIAGONAL_FACEPILE_TYPING_24,
            status: s.QS.DIAGONAL_FACEPILE_STATUS_24
        },
        [c.EFr.SIZE_32]: {
            default: s.QS.DIAGONAL_FACEPILE_32,
            typing: s.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: s.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [c.EFr.SIZE_40]: {
            default: s.QS.DIAGONAL_FACEPILE_32,
            typing: s.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: s.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [c.EFr.SIZE_48]: {
            default: s.QS.DIAGONAL_FACEPILE_40,
            typing: s.QS.DIAGONAL_FACEPILE_TYPING_40,
            status: s.QS.DIAGONAL_FACEPILE_STATUS_40
        },
        [c.EFr.SIZE_56]: {
            default: s.QS.DIAGONAL_FACEPILE_56,
            typing: s.QS.DIAGONAL_FACEPILE_TYPING_56,
            status: s.QS.DIAGONAL_FACEPILE_STATUS_56
        },
        [c.EFr.SIZE_80]: {
            default: s.QS.DIAGONAL_FACEPILE_80,
            typing: s.QS.DIAGONAL_FACEPILE_TYPING_80,
            status: s.QS.DIAGONAL_FACEPILE_STATUS_80
        },
        [c.EFr.SIZE_120]: {
            default: s.QS.DIAGONAL_FACEPILE_120,
            typing: s.QS.DIAGONAL_FACEPILE_TYPING_120,
            status: s.QS.DIAGONAL_FACEPILE_STATUS_120
        }
    },
    g = function (e) {
        var t,
            { backSrc: n, frontSrc: l, size: u, isTyping: f, status: _, style: g, className: T } = e,
            b = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['backSrc', 'frontSrc', 'size', 'isTyping', 'status', 'style', 'className']);
        let { size: h } = c.ny6[u],
            {
                statusCoords: C,
                frontAvatarOffsetPx: y,
                frontAvatarSizePx: N,
                backAvatarSizePx: P
            } = i.useMemo(() => {
                var e;
                let t = ''.concat(h, '-').concat(f);
                return null != (e = E[t])
                    ? e
                    : (function (e, t, n) {
                          let r = c.ny6[e],
                              i = r.size / (d.z3 + d.o),
                              l = i * d.z3,
                              o = i * d.o,
                              u = {
                                  statusCoords: (0, a.Vq)(r, c.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: l,
                                  backAvatarSizePx: i,
                                  frontAvatarOffsetPx: o,
                                  frontAvatarCenter: o + l / 2
                              };
                          return (E[n] = u), u;
                      })(u, f, t);
            }, [h, f, u]),
            m = ((t = null != _), f ? I[u].typing : t ? I[u].status : I[u].default);
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
                    width: h,
                    height: h
                },
                g
            ),
            'aria-label': b['aria-label'],
            'aria-hidden': b['aria-hidden'],
            className: o()(p.container, T),
            children: [
                (0, r.jsxs)(s.ZP, {
                    mask: m,
                    height: h,
                    width: h,
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
                                top: y,
                                left: y
                            },
                            children: (0, r.jsx)(O, {
                                src: l,
                                size: N,
                                isTyping: f,
                                status: _
                            })
                        })
                    ]
                }),
                (0, r.jsx)(S, {
                    statusCoords: C,
                    status: _,
                    isTyping: f
                })
            ]
        });
    };
