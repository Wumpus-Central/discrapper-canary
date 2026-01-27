n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(97808),
    o = n(863610),
    c = n(397927),
    u = n(573435);
n(883392);
var d = n(657323);
let p = {},
    f = 1 / 4;

function m(e) {
    let { height: t, fillColor: n } = e;
    return (0, r.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: 2.5 * t,
        },
        children: (0, r.jsx)(o.n, {
            className: d.r$,
            dotRadius: t * f,
        }),
    });
}

function g(e) {
    let { isTyping: t, statusCoords: n, status: i } = e,
        l = (0, c.S31)(c.clD.ONLINE);
    return t
        ? (0, r.jsx)("div", {
              style: {
                  position: "absolute",
                  top: n.y,
                  left: n.x,
              },
              children: (0, r.jsx)(m, {
                  height: n.height,
                  fillColor: l,
              }),
          })
        : null != i
          ? (0, r.jsx)(c.nW6, {
                size: n.height,
                status: i,
                style: {
                    position: "absolute",
                    top: n.y,
                    left: n.x,
                },
            })
          : null;
}

function y(e) {
    let { src: t, size: n } = e;
    return (0, r.jsx)("img", {
        className: d.tM,
        src: t,
        alt: "",
        width: n,
        height: n,
    });
}
let _ = {
        [c._3J.SIZE_16]: {
            default: u.hW.DIAGONAL_FACEPILE_16,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: u.hW.DIAGONAL_FACEPILE_BACK_16,
        },
        [c._3J.SIZE_20]: {
            default: u.hW.DIAGONAL_FACEPILE_20,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: u.hW.DIAGONAL_FACEPILE_BACK_20,
        },
        [c._3J.SIZE_24]: {
            default: u.hW.DIAGONAL_FACEPILE_24,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: u.hW.DIAGONAL_FACEPILE_BACK_24,
        },
        [c._3J.SIZE_32]: {
            default: u.hW.DIAGONAL_FACEPILE_32,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: u.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [c._3J.SIZE_40]: {
            default: u.hW.DIAGONAL_FACEPILE_32,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: u.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [c._3J.SIZE_48]: {
            default: u.hW.DIAGONAL_FACEPILE_40,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: u.hW.DIAGONAL_FACEPILE_BACK_40,
        },
        [c._3J.SIZE_56]: {
            default: u.hW.DIAGONAL_FACEPILE_56,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: u.hW.DIAGONAL_FACEPILE_BACK_56,
        },
        [c._3J.SIZE_72]: {
            default: u.hW.DIAGONAL_FACEPILE_72,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: u.hW.DIAGONAL_FACEPILE_BACK_72,
        },
        [c._3J.SIZE_80]: {
            default: u.hW.DIAGONAL_FACEPILE_80,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: u.hW.DIAGONAL_FACEPILE_BACK_80,
        },
        [c._3J.SIZE_96]: {
            default: u.hW.DIAGONAL_FACEPILE_96,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: u.hW.DIAGONAL_FACEPILE_BACK_96,
        },
        [c._3J.SIZE_120]: {
            default: u.hW.DIAGONAL_FACEPILE_120,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: u.hW.DIAGONAL_FACEPILE_BACK_120,
        },
    },
    b = function (e) {
        var t;
        let { backSrc: n, frontSrc: l, size: o, isTyping: f, status: m, style: b, className: A } = e,
            h = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]),
            { size: v } = c.vCh[o],
            {
                statusCoords: O,
                frontAvatarOffsetPx: j,
                frontAvatarSizePx: S,
                backAvatarSizePx: I,
            } = i.useMemo(() => {
                var e;
                let t,
                    n,
                    r,
                    i,
                    l,
                    a = "".concat(v, "-").concat(f);
                return null != (e = p[a])
                    ? e
                    : ((r = +(n = (t = c.vCh[o]).size / 1.5)),
                      (i = 0.5 * n),
                      (l = {
                          statusCoords: (0, s.Rb)(t, c.clD.ONLINE, !1, f),
                          frontAvatarSizePx: r,
                          backAvatarSizePx: n,
                          frontAvatarOffsetPx: i,
                          frontAvatarCenter: i + r / 2,
                      }),
                      (p[a] = l),
                      l);
            }, [v, f, o]),
            x = ((t = null != m), f ? _[o].typing : t ? _[o].status : _[o].default),
            E = _[o].back;
        return (0, r.jsxs)("div", {
            style: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    width: v,
                    height: v,
                },
                b,
            ),
            "aria-label": h["aria-label"],
            "aria-hidden": h["aria-hidden"],
            className: a()(d.kL, A),
            children: [
                (0, r.jsxs)(u.Ay, {
                    mask: x,
                    height: v,
                    width: v,
                    children: [
                        (0, r.jsx)(u.Ay, {
                            mask: E,
                            height: v,
                            width: v,
                            children: (0, r.jsx)("img", {
                                src: n,
                                alt: "",
                                width: I,
                                height: I,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: j,
                                left: j,
                            },
                            children: (0, r.jsx)(y, {
                                src: l,
                                size: S,
                                isTyping: f,
                                status: m,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(g, {
                    statusCoords: O,
                    status: m,
                    isTyping: f,
                }),
            ],
        });
    };
