var i = n(200651),
    s = n(192379),
    a = n(120356),
    r = n.n(a),
    l = n(974674),
    o = n(438784),
    d = n(481060),
    c = n(686546),
    u = n(3682),
    _ = n(465669);
let A = {},
    I = 1 / 4;
function S(t) {
    let { height: e, fillColor: n } = t;
    return (0, i.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: e / 2,
            backgroundColor: n,
            height: e,
            width: e * u.jR
        },
        children: (0, i.jsx)(o.b, {
            className: _.dots,
            dotRadius: e * I
        })
    });
}
function h(t) {
    let { isTyping: e, statusCoords: n, status: s } = t,
        a = (0, d.useStatusFillColor)(d.StatusTypes.ONLINE);
    return e
        ? (0, i.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, i.jsx)(S, {
                  height: n.height,
                  fillColor: a
              })
          })
        : null != s
          ? (0, i.jsx)(d.Status, {
                size: n.height,
                status: s,
                style: {
                    position: 'absolute',
                    top: n.y,
                    left: n.x
                }
            })
          : null;
}
function m(t) {
    let { src: e, size: n } = t;
    return (0, i.jsx)('img', {
        className: _.circularImage,
        src: e,
        alt: '',
        width: n,
        height: n
    });
}
let g = {
    [d.AvatarSizes.SIZE_16]: {
        default: c.QS.DIAGONAL_FACEPILE_16,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_16,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_16
    },
    [d.AvatarSizes.SIZE_20]: {
        default: c.QS.DIAGONAL_FACEPILE_20,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_20,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_20
    },
    [d.AvatarSizes.SIZE_24]: {
        default: c.QS.DIAGONAL_FACEPILE_24,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_24,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_24
    },
    [d.AvatarSizes.SIZE_32]: {
        default: c.QS.DIAGONAL_FACEPILE_32,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [d.AvatarSizes.SIZE_40]: {
        default: c.QS.DIAGONAL_FACEPILE_32,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [d.AvatarSizes.SIZE_48]: {
        default: c.QS.DIAGONAL_FACEPILE_40,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_40,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_40
    },
    [d.AvatarSizes.SIZE_56]: {
        default: c.QS.DIAGONAL_FACEPILE_56,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_56,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_56
    },
    [d.AvatarSizes.SIZE_80]: {
        default: c.QS.DIAGONAL_FACEPILE_80,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_80,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_80
    },
    [d.AvatarSizes.SIZE_120]: {
        default: c.QS.DIAGONAL_FACEPILE_120,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_120,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_120
    }
};
e.Z = function (t) {
    var e, n, a;
    let { backSrc: o, frontSrc: I, size: S, isTyping: x, status: E, style: f, className: N, ...L } = t,
        { size: v } = d.AvatarSizeSpecs[S],
        {
            statusCoords: C,
            frontAvatarOffsetPx: j,
            frontAvatarSizePx: p,
            backAvatarSizePx: G
        } = s.useMemo(() => {
            var t;
            let e = ''.concat(v, '-').concat(x);
            return null !== (t = A[e]) && void 0 !== t
                ? t
                : (function (t, e, n) {
                      let i = d.AvatarSizeSpecs[t],
                          s = i.size / (u.z3 + u.o),
                          a = s * u.z3,
                          r = s * u.o,
                          o = {
                              statusCoords: (0, l.Vq)(i, d.StatusTypes.ONLINE, !1, e),
                              frontAvatarSizePx: a,
                              backAvatarSizePx: s,
                              frontAvatarOffsetPx: r,
                              frontAvatarCenter: r + a / 2
                          };
                      return (A[n] = o), o;
                  })(S, x, e);
        }, [v, x, S]);
    let T = ((e = null != E), (n = x), (a = S), n ? g[a].typing : e ? g[a].status : g[a].default);
    return (0, i.jsxs)('div', {
        style: {
            width: v,
            height: v,
            ...f
        },
        'aria-label': L['aria-label'],
        'aria-hidden': L['aria-hidden'],
        className: r()(_.container, N),
        children: [
            (0, i.jsxs)(c.ZP, {
                mask: T,
                height: v,
                width: v,
                children: [
                    (0, i.jsx)('img', {
                        src: o,
                        alt: '',
                        width: G,
                        height: G
                    }),
                    (0, i.jsx)('div', {
                        style: {
                            position: 'absolute',
                            top: j,
                            left: j
                        },
                        children: (0, i.jsx)(m, {
                            src: I,
                            size: p,
                            isTyping: x,
                            status: E
                        })
                    })
                ]
            }),
            (0, i.jsx)(h, {
                statusCoords: C,
                status: E,
                isTyping: x
            })
        ]
    });
};
