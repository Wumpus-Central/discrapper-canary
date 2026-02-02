n.d(t, {
    A: () => b,
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(97808),
    o = n(863610),
    c = n(397927),
    u = n(573435);
n(883392);
var p = n(657323);
let d = {},
    f = 1 / 4;

function A(e) {
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
            className: p.r$,
            dotRadius: t * f,
        }),
    });
}

function h(e) {
    let { isTyping: t, statusCoords: n, status: l } = e,
        a = (0, c.S31)(c.clD.ONLINE);
    return t
        ? (0, r.jsx)("div", {
              style: {
                  position: "absolute",
                  top: n.y,
                  left: n.x,
              },
              children: (0, r.jsx)(A, {
                  height: n.height,
                  fillColor: a,
              }),
          })
        : null != l
          ? (0, r.jsx)(c.nW6, {
                size: n.height,
                status: l,
                style: {
                    position: "absolute",
                    top: n.y,
                    left: n.x,
                },
            })
          : null;
}

function O(e) {
    let { src: t, size: n } = e;
    return (0, r.jsx)("img", {
        className: p.tM,
        src: t,
        alt: "",
        width: n,
        height: n,
    });
}
let y = {
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
        let { backSrc: n, frontSrc: a, size: o, isTyping: f, status: A, style: b, className: g } = e,
            _ = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l,
                    a = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                        (r = n[l]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    return a;
                }
                if (
                    ((a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            a = Object.getOwnPropertyNames(e);
                        for (r = 0; r < a.length; r++)
                            (n = a[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (l[n] = e[n]);
                        return l;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                        (r = n[l]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                return a;
            })(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]),
            { size: m } = c.vCh[o],
            {
                statusCoords: E,
                frontAvatarOffsetPx: I,
                frontAvatarSizePx: j,
                backAvatarSizePx: P,
            } = l.useMemo(() => {
                var e;
                let t,
                    n,
                    r,
                    l,
                    a,
                    i = "".concat(m, "-").concat(f);
                return null != (e = d[i])
                    ? e
                    : ((r = +(n = (t = c.vCh[o]).size / 1.5)),
                      (l = 0.5 * n),
                      (a = {
                          statusCoords: (0, s.Rb)(t, c.clD.ONLINE, {
                              isTyping: f,
                              isMobile: !1,
                              isVR: !1,
                          }),
                          frontAvatarSizePx: r,
                          backAvatarSizePx: n,
                          frontAvatarOffsetPx: l,
                          frontAvatarCenter: l + r / 2,
                      }),
                      (d[i] = a),
                      a);
            }, [m, f, o]),
            N = ((t = null != A), f ? y[o].typing : t ? y[o].status : y[o].default),
            L = y[o].back;
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
                    width: m,
                    height: m,
                },
                b,
            ),
            "aria-label": _["aria-label"],
            "aria-hidden": _["aria-hidden"],
            className: i()(p.kL, g),
            children: [
                (0, r.jsxs)(u.Ay, {
                    mask: N,
                    height: m,
                    width: m,
                    children: [
                        (0, r.jsx)(u.Ay, {
                            mask: L,
                            height: m,
                            width: m,
                            children: (0, r.jsx)("img", {
                                src: n,
                                alt: "",
                                width: P,
                                height: P,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: I,
                                left: I,
                            },
                            children: (0, r.jsx)(O, {
                                src: a,
                                size: j,
                                isTyping: f,
                                status: A,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(h, {
                    statusCoords: E,
                    status: A,
                    isTyping: f,
                }),
            ],
        });
    };
