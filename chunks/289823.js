var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(974674),
    o = n(438784),
    c = n(481060),
    u = n(686546),
    d = n(3682),
    h = n(465669);
let f = {},
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
            className: h.dots,
            dotRadius: t * _
        })
    });
}
function m(e) {
    let { isTyping: t, statusCoords: n, status: i } = e,
        a = (0, c.useStatusFillColor)(c.StatusTypes.ONLINE);
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
          ? (0, l.jsx)(c.Status, {
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
        className: h.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let I = {
    [c.AvatarSizes.SIZE_16]: {
        default: u.QS.DIAGONAL_FACEPILE_16,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_16
    },
    [c.AvatarSizes.SIZE_20]: {
        default: u.QS.DIAGONAL_FACEPILE_20,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_20
    },
    [c.AvatarSizes.SIZE_24]: {
        default: u.QS.DIAGONAL_FACEPILE_24,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_24
    },
    [c.AvatarSizes.SIZE_32]: {
        default: u.QS.DIAGONAL_FACEPILE_32,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [c.AvatarSizes.SIZE_40]: {
        default: u.QS.DIAGONAL_FACEPILE_32,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [c.AvatarSizes.SIZE_48]: {
        default: u.QS.DIAGONAL_FACEPILE_40,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_40
    },
    [c.AvatarSizes.SIZE_56]: {
        default: u.QS.DIAGONAL_FACEPILE_56,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_56
    },
    [c.AvatarSizes.SIZE_80]: {
        default: u.QS.DIAGONAL_FACEPILE_80,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_80
    },
    [c.AvatarSizes.SIZE_120]: {
        default: u.QS.DIAGONAL_FACEPILE_120,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_120
    }
};
t.Z = function (e) {
    var t, n, a;
    let { backSrc: o, frontSrc: _, size: g, isTyping: p, status: S, style: A, className: C, ...v } = e,
        { size: L } = c.AvatarSizeSpecs[g],
        {
            statusCoords: b,
            frontAvatarOffsetPx: N,
            frontAvatarSizePx: T,
            backAvatarSizePx: x
        } = i.useMemo(() => {
            var e;
            let t = ''.concat(L, '-').concat(p);
            return null !== (e = f[t]) && void 0 !== e
                ? e
                : (function (e, t, n) {
                      let l = c.AvatarSizeSpecs[e],
                          i = l.size / (d.z3 + d.o),
                          a = i * d.z3,
                          r = i * d.o,
                          o = {
                              statusCoords: (0, s.Vq)(l, c.StatusTypes.ONLINE, !1, t),
                              frontAvatarSizePx: a,
                              backAvatarSizePx: i,
                              frontAvatarOffsetPx: r,
                              frontAvatarCenter: r + a / 2
                          };
                      return (f[n] = o), o;
                  })(g, p, t);
        }, [L, p, g]);
    let y = ((t = null != S), (n = p), (a = g), n ? I[a].typing : t ? I[a].status : I[a].default);
    return (0, l.jsxs)('div', {
        style: {
            width: L,
            height: L,
            ...A
        },
        'aria-label': v['aria-label'],
        'aria-hidden': v['aria-hidden'],
        className: r()(h.container, C),
        children: [
            (0, l.jsxs)(u.ZP, {
                mask: y,
                height: L,
                width: L,
                children: [
                    (0, l.jsx)('img', {
                        src: o,
                        alt: '',
                        width: x,
                        height: x
                    }),
                    (0, l.jsx)('div', {
                        style: {
                            position: 'absolute',
                            top: N,
                            left: N
                        },
                        children: (0, l.jsx)(E, {
                            src: _,
                            size: T,
                            isTyping: p,
                            status: S
                        })
                    })
                ]
            }),
            (0, l.jsx)(m, {
                statusCoords: b,
                status: S,
                isTyping: p
            })
        ]
    });
};
