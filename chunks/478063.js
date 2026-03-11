"use strict";
a.d(t, { A: () => A });
var n = a(627968),
    i = a(64700),
    r = a(503698),
    s = a.n(r),
    l = a(97808),
    o = a(863610),
    c = a(397927),
    _ = a(573435);
a(883392);
var d = a(657323);
let u = {},
    f = 1 / 4;
function m(e) {
    let { height: t, fillColor: a } = e;
    return (0, n.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: a,
            height: t,
            width: 2.5 * t,
        },
        children: (0, n.jsx)(o.n, { className: d.r$, dotRadius: t * f }),
    });
}
function p(e) {
    let { isTyping: t, statusCoords: a, status: i } = e,
        r = (0, c.S31)(c.clD.ONLINE);
    return t
        ? (0, n.jsx)("div", {
              style: { position: "absolute", top: a.y, left: a.x },
              children: (0, n.jsx)(m, { height: a.height, fillColor: r }),
          })
        : null != i
          ? (0, n.jsx)(c.nW6, { size: a.height, status: i, style: { position: "absolute", top: a.y, left: a.x } })
          : null;
}
function g(e) {
    let { src: t, size: a } = e;
    return (0, n.jsx)("img", { className: d.tM, src: t, alt: "", width: a, height: a });
}
let h = {
        [c._3J.SIZE_16]: {
            default: _.hW.DIAGONAL_FACEPILE_16,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: _.hW.DIAGONAL_FACEPILE_BACK_16,
        },
        [c._3J.SIZE_20]: {
            default: _.hW.DIAGONAL_FACEPILE_20,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: _.hW.DIAGONAL_FACEPILE_BACK_20,
        },
        [c._3J.SIZE_24]: {
            default: _.hW.DIAGONAL_FACEPILE_24,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: _.hW.DIAGONAL_FACEPILE_BACK_24,
        },
        [c._3J.SIZE_32]: {
            default: _.hW.DIAGONAL_FACEPILE_32,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: _.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [c._3J.SIZE_40]: {
            default: _.hW.DIAGONAL_FACEPILE_32,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: _.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [c._3J.SIZE_48]: {
            default: _.hW.DIAGONAL_FACEPILE_40,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: _.hW.DIAGONAL_FACEPILE_BACK_40,
        },
        [c._3J.SIZE_56]: {
            default: _.hW.DIAGONAL_FACEPILE_56,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: _.hW.DIAGONAL_FACEPILE_BACK_56,
        },
        [c._3J.SIZE_72]: {
            default: _.hW.DIAGONAL_FACEPILE_72,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: _.hW.DIAGONAL_FACEPILE_BACK_72,
        },
        [c._3J.SIZE_80]: {
            default: _.hW.DIAGONAL_FACEPILE_80,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: _.hW.DIAGONAL_FACEPILE_BACK_80,
        },
        [c._3J.SIZE_96]: {
            default: _.hW.DIAGONAL_FACEPILE_96,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: _.hW.DIAGONAL_FACEPILE_BACK_96,
        },
        [c._3J.SIZE_120]: {
            default: _.hW.DIAGONAL_FACEPILE_120,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: _.hW.DIAGONAL_FACEPILE_BACK_120,
        },
    },
    A = function (e) {
        var t;
        let { backSrc: a, frontSrc: r, size: o, isTyping: f, status: m, style: A, className: b, ...I } = e,
            { size: C } = c.vCh[o],
            {
                statusCoords: v,
                frontAvatarOffsetPx: y,
                frontAvatarSizePx: x,
                backAvatarSizePx: E,
            } = i.useMemo(() => {
                let e,
                    t,
                    a,
                    n,
                    i,
                    r = `${C}-${f}`;
                return (
                    u[r] ??
                    ((a = +(t = (e = c.vCh[o]).size / 1.5)),
                    (n = 0.5 * t),
                    (i = {
                        statusCoords: (0, l.Rb)(e, c.clD.ONLINE, { isTyping: f, isMobile: !1, isVR: !1 }),
                        frontAvatarSizePx: a,
                        backAvatarSizePx: t,
                        frontAvatarOffsetPx: n,
                        frontAvatarCenter: n + a / 2,
                    }),
                    (u[r] = i),
                    i)
                );
            }, [C, f, o]),
            S = ((t = null != m), f ? h[o].typing : t ? h[o].status : h[o].default),
            T = h[o].back;
        return (0, n.jsxs)("div", {
            style: { width: C, height: C, ...A },
            "aria-label": I["aria-label"],
            "aria-hidden": I["aria-hidden"],
            className: s()(d.kL, b),
            children: [
                (0, n.jsxs)(_.Ay, {
                    mask: S,
                    height: C,
                    width: C,
                    children: [
                        (0, n.jsx)(_.Ay, {
                            mask: T,
                            height: C,
                            width: C,
                            children: (0, n.jsx)("img", { src: a, alt: "", width: E, height: E }),
                        }),
                        (0, n.jsx)("div", {
                            style: { position: "absolute", top: y, left: y },
                            children: (0, n.jsx)(g, { src: r, size: x, isTyping: f, status: m }),
                        }),
                    ],
                }),
                (0, n.jsx)(p, { statusCoords: v, status: m, isTyping: f }),
            ],
        });
    };
