n.d(t, { Z: () => C });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(974674),
    o = n(438784),
    c = n(481060),
    d = n(686546),
    u = n(3682),
    m = n(172418);
let _ = {},
    h = 1 / 4;
function p(e) {
    let { height: t, fillColor: n } = e;
    return (0, i.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * u.jR
        },
        children: (0, i.jsx)(o.b, {
            className: m.dots,
            dotRadius: t * h
        })
    });
}
function g(e) {
    let { isTyping: t, statusCoords: n, status: l } = e,
        a = (0, c.vjg)(c.Skl.ONLINE);
    return t
        ? (0, i.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, i.jsx)(p, {
                  height: n.height,
                  fillColor: a
              })
          })
        : null != l
          ? (0, i.jsx)(c.qbd, {
                size: n.height,
                status: l,
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
    return (0, i.jsx)('img', {
        className: m.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let x = {
        [c.EFr.SIZE_16]: {
            default: d.QS.DIAGONAL_FACEPILE_16,
            typing: d.QS.DIAGONAL_FACEPILE_TYPING_16,
            status: d.QS.DIAGONAL_FACEPILE_STATUS_16
        },
        [c.EFr.SIZE_20]: {
            default: d.QS.DIAGONAL_FACEPILE_20,
            typing: d.QS.DIAGONAL_FACEPILE_TYPING_20,
            status: d.QS.DIAGONAL_FACEPILE_STATUS_20
        },
        [c.EFr.SIZE_24]: {
            default: d.QS.DIAGONAL_FACEPILE_24,
            typing: d.QS.DIAGONAL_FACEPILE_TYPING_24,
            status: d.QS.DIAGONAL_FACEPILE_STATUS_24
        },
        [c.EFr.SIZE_32]: {
            default: d.QS.DIAGONAL_FACEPILE_32,
            typing: d.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: d.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [c.EFr.SIZE_40]: {
            default: d.QS.DIAGONAL_FACEPILE_32,
            typing: d.QS.DIAGONAL_FACEPILE_TYPING_32,
            status: d.QS.DIAGONAL_FACEPILE_STATUS_32
        },
        [c.EFr.SIZE_48]: {
            default: d.QS.DIAGONAL_FACEPILE_40,
            typing: d.QS.DIAGONAL_FACEPILE_TYPING_40,
            status: d.QS.DIAGONAL_FACEPILE_STATUS_40
        },
        [c.EFr.SIZE_56]: {
            default: d.QS.DIAGONAL_FACEPILE_56,
            typing: d.QS.DIAGONAL_FACEPILE_TYPING_56,
            status: d.QS.DIAGONAL_FACEPILE_STATUS_56
        },
        [c.EFr.SIZE_80]: {
            default: d.QS.DIAGONAL_FACEPILE_80,
            typing: d.QS.DIAGONAL_FACEPILE_TYPING_80,
            status: d.QS.DIAGONAL_FACEPILE_STATUS_80
        },
        [c.EFr.SIZE_120]: {
            default: d.QS.DIAGONAL_FACEPILE_120,
            typing: d.QS.DIAGONAL_FACEPILE_TYPING_120,
            status: d.QS.DIAGONAL_FACEPILE_STATUS_120
        }
    },
    C = function (e) {
        var t;
        let { backSrc: n, frontSrc: a, size: o, isTyping: h, status: p, style: C, className: v, ...E } = e,
            { size: I } = c.ny6[o],
            {
                statusCoords: N,
                frontAvatarOffsetPx: S,
                frontAvatarSizePx: T,
                backAvatarSizePx: b
            } = l.useMemo(() => {
                var e;
                let t = ''.concat(I, '-').concat(h);
                return null !== (e = _[t]) && void 0 !== e
                    ? e
                    : (function (e, t, n) {
                          let i = c.ny6[e],
                              l = i.size / (u.z3 + u.o),
                              a = l * u.z3,
                              r = l * u.o,
                              o = {
                                  statusCoords: (0, s.Vq)(i, c.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: a,
                                  backAvatarSizePx: l,
                                  frontAvatarOffsetPx: r,
                                  frontAvatarCenter: r + a / 2
                              };
                          return (_[n] = o), o;
                      })(o, h, t);
            }, [I, h, o]),
            A = ((t = null != p), h ? x[o].typing : t ? x[o].status : x[o].default);
        return (0, i.jsxs)('div', {
            style: {
                width: I,
                height: I,
                ...C
            },
            'aria-label': E['aria-label'],
            'aria-hidden': E['aria-hidden'],
            className: r()(m.container, v),
            children: [
                (0, i.jsxs)(d.ZP, {
                    mask: A,
                    height: I,
                    width: I,
                    children: [
                        (0, i.jsx)('img', {
                            src: n,
                            alt: '',
                            width: b,
                            height: b
                        }),
                        (0, i.jsx)('div', {
                            style: {
                                position: 'absolute',
                                top: S,
                                left: S
                            },
                            children: (0, i.jsx)(f, {
                                src: a,
                                size: T,
                                isTyping: h,
                                status: p
                            })
                        })
                    ]
                }),
                (0, i.jsx)(g, {
                    statusCoords: N,
                    status: p,
                    isTyping: h
                })
            ]
        });
    };
