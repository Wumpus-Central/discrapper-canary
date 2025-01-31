n.d(t, { Z: () => I });
var l = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    r = n(974674),
    o = n(438784),
    c = n(481060),
    u = n(686546),
    d = n(3682),
    _ = n(465669);
let h = {},
    f = 1 / 4;
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
            className: _.dots,
            dotRadius: t * f
        })
    });
}
function m(e) {
    let { isTyping: t, statusCoords: n, status: i } = e,
        a = (0, c.vjg)(c.Skl.ONLINE);
    return t
        ? (0, l.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, l.jsx)(g, {
                  height: n.height,
                  fillColor: a
              })
          })
        : null != i
          ? (0, l.jsx)(c.qbd, {
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
function E(e) {
    let { src: t, size: n } = e;
    return (0, l.jsx)('img', {
        className: _.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let p = {
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
    I = function (e) {
        var t;
        let { backSrc: n, frontSrc: a, size: o, isTyping: f, status: g, style: I, className: A, ...S } = e,
            { size: C } = c.ny6[o],
            {
                statusCoords: x,
                frontAvatarOffsetPx: b,
                frontAvatarSizePx: L,
                backAvatarSizePx: v
            } = i.useMemo(() => {
                var e;
                let t = ''.concat(C, '-').concat(f);
                return null !== (e = h[t]) && void 0 !== e
                    ? e
                    : (function (e, t, n) {
                          let l = c.ny6[e],
                              i = l.size / (d.z3 + d.o),
                              a = i * d.z3,
                              s = i * d.o,
                              o = {
                                  statusCoords: (0, r.Vq)(l, c.Skl.ONLINE, !1, t),
                                  frontAvatarSizePx: a,
                                  backAvatarSizePx: i,
                                  frontAvatarOffsetPx: s,
                                  frontAvatarCenter: s + a / 2
                              };
                          return (h[n] = o), o;
                      })(o, f, t);
            }, [C, f, o]),
            N = ((t = null != g), f ? p[o].typing : t ? p[o].status : p[o].default);
        return (0, l.jsxs)('div', {
            style: {
                width: C,
                height: C,
                ...I
            },
            'aria-label': S['aria-label'],
            'aria-hidden': S['aria-hidden'],
            className: s()(_.container, A),
            children: [
                (0, l.jsxs)(u.ZP, {
                    mask: N,
                    height: C,
                    width: C,
                    children: [
                        (0, l.jsx)('img', {
                            src: n,
                            alt: '',
                            width: v,
                            height: v
                        }),
                        (0, l.jsx)('div', {
                            style: {
                                position: 'absolute',
                                top: b,
                                left: b
                            },
                            children: (0, l.jsx)(E, {
                                src: a,
                                size: L,
                                isTyping: f,
                                status: g
                            })
                        })
                    ]
                }),
                (0, l.jsx)(m, {
                    statusCoords: x,
                    status: g,
                    isTyping: f
                })
            ]
        });
    };
