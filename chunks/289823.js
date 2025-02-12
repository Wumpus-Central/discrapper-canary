n.d(t, { Z: () => I });
var a = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    r = n(974674),
    o = n(438784),
    c = n(481060),
    d = n(686546),
    u = n(3682),
    m = n(974193);
let _ = {},
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
            width: t * u.jR
        },
        children: (0, a.jsx)(o.b, {
            className: m.dots,
            dotRadius: t * h
        })
    });
}
function p(e) {
    let { isTyping: t, statusCoords: n, status: l } = e,
        i = (0, c.vjg)(c.Skl.ONLINE);
    return t
        ? (0, a.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, a.jsx)(g, {
                  height: n.height,
                  fillColor: i
              })
          })
        : null != l
          ? (0, a.jsx)(c.qbd, {
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
    return (0, a.jsx)('img', {
        className: m.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let E = {
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
    I = function (e) {
        var t;
        let { backSrc: n, frontSrc: i, size: o, isTyping: h, status: g, style: I, className: C, ...x } = e,
            { size: A } = c.ny6[o],
            {
                statusCoords: S,
                frontAvatarOffsetPx: T,
                frontAvatarSizePx: v,
                backAvatarSizePx: b
            } = l.useMemo(() => {
                var e;
                let t = ''.concat(A, '-').concat(h);
                return null !== (e = _[t]) && void 0 !== e
                    ? e
                    : (function (e, t, n) {
                          let a = c.ny6[e],
                              l = a.size / (u.z3 + u.o),
                              i = l * u.z3,
                              s = l * u.o,
                              o = {
                                  statusCoords: (0, r.Vq)(a, c.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: i,
                                  backAvatarSizePx: l,
                                  frontAvatarOffsetPx: s,
                                  frontAvatarCenter: s + i / 2
                              };
                          return (_[n] = o), o;
                      })(o, h, t);
            }, [A, h, o]),
            L = ((t = null != g), h ? E[o].typing : t ? E[o].status : E[o].default);
        return (0, a.jsxs)('div', {
            style: {
                width: A,
                height: A,
                ...I
            },
            'aria-label': x['aria-label'],
            'aria-hidden': x['aria-hidden'],
            className: s()(m.container, C),
            children: [
                (0, a.jsxs)(d.ZP, {
                    mask: L,
                    height: A,
                    width: A,
                    children: [
                        (0, a.jsx)('img', {
                            src: n,
                            alt: '',
                            width: b,
                            height: b
                        }),
                        (0, a.jsx)('div', {
                            style: {
                                position: 'absolute',
                                top: T,
                                left: T
                            },
                            children: (0, a.jsx)(f, {
                                src: i,
                                size: v,
                                isTyping: h,
                                status: g
                            })
                        })
                    ]
                }),
                (0, a.jsx)(p, {
                    statusCoords: S,
                    status: g,
                    isTyping: h
                })
            ]
        });
    };
