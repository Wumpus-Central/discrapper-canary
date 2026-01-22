n.d(t, {
    A: () => I,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(97808),
    l = n(863610),
    c = n(397927),
    u = n(573435);
n(883392);
var d = n(657323);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = {};

function g(e, t, n) {
    let r = c.vCh[e],
        i = r.size / 1.5,
        a = +i,
        s = 0.5 * i,
        l = s + a / 2,
        u = {
            statusCoords: (0, o.Rb)(r, c.clD.ONLINE, !1, t),
            frontAvatarSizePx: a,
            backAvatarSizePx: i,
            frontAvatarOffsetPx: s,
            frontAvatarCenter: l,
        };
    return (m[n] = u), u;
}
let E = 1 / 4;

function b(e) {
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
        children: (0, r.jsx)(l.n, {
            className: d.r$,
            dotRadius: t * E,
        }),
    });
}

function y(e) {
    let { isTyping: t, statusCoords: n, status: i } = e,
        a = (0, c.S31)(c.clD.ONLINE);
    return t
        ? (0, r.jsx)("div", {
              style: {
                  position: "absolute",
                  top: n.y,
                  left: n.x,
              },
              children: (0, r.jsx)(b, {
                  height: n.height,
                  fillColor: a,
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

function O(e) {
    let { src: t, size: n } = e;
    return (0, r.jsx)("img", {
        className: d.tM,
        src: t,
        alt: "",
        width: n,
        height: n,
    });
}
let A = {
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
};

function v(e) {
    return A[e].back;
}

function S(e, t, n) {
    return t ? A[n].typing : e ? A[n].status : A[n].default;
}
let I = function (e) {
    let { backSrc: t, frontSrc: n, size: a, isTyping: o, status: l, style: f, className: h } = e,
        E = _(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]),
        { size: b } = c.vCh[a],
        {
            statusCoords: A,
            frontAvatarOffsetPx: I,
            frontAvatarSizePx: T,
            backAvatarSizePx: C,
        } = i.useMemo(() => {
            var e;
            let t = "".concat(b, "-").concat(o);
            return null != (e = m[t]) ? e : g(a, o, t);
        }, [b, o, a]),
        N = S(null != l, o, a),
        R = v(a);
    return (0, r.jsxs)("div", {
        style: p(
            {
                width: b,
                height: b,
            },
            f,
        ),
        "aria-label": E["aria-label"],
        "aria-hidden": E["aria-hidden"],
        className: s()(d.kL, h),
        children: [
            (0, r.jsxs)(u.Ay, {
                mask: N,
                height: b,
                width: b,
                children: [
                    (0, r.jsx)(u.Ay, {
                        mask: R,
                        height: b,
                        width: b,
                        children: (0, r.jsx)("img", {
                            src: t,
                            alt: "",
                            width: C,
                            height: C,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        style: {
                            position: "absolute",
                            top: I,
                            left: I,
                        },
                        children: (0, r.jsx)(O, {
                            src: n,
                            size: T,
                            isTyping: o,
                            status: l,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(y, {
                statusCoords: A,
                status: l,
                isTyping: o,
            }),
        ],
    });
};
