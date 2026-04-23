"use strict";
a.d(t, { A: () => E });
var r = a(627968),
    i = a(64700),
    n = a(503698),
    s = a.n(n),
    l = a(97808),
    o = a(863610),
    d = a(778712),
    c = a(652215),
    _ = a(935154),
    u = a(573435);
a(883392);
var h = a(989822);
let b = {},
    m = 1 / 4;
function p(e) {
    let { height: t, fillColor: a } = e;
    return (0, r.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: a,
            height: t,
            width: 2.5 * t,
        },
        children: (0, r.jsx)(o.n, { className: h.r$, dotRadius: t * m }),
    });
}
function f(e) {
    let { isTyping: t, statusCoords: a, status: i } = e,
        n = (0, _.S3)(c.clD.ONLINE);
    return t
        ? (0, r.jsx)("div", {
              style: { position: "absolute", top: a.y, left: a.x },
              children: (0, r.jsx)(p, { height: a.height, fillColor: n }),
          })
        : null != i
          ? (0, r.jsx)(_.nW, { size: a.height, status: i, style: { position: "absolute", top: a.y, left: a.x } })
          : null;
}
function A(e) {
    let { src: t, size: a } = e;
    return (0, r.jsx)("img", { className: h.tM, src: t, alt: "", width: a, height: a });
}
let g = {
        [d._3.SIZE_16]: {
            default: u.hW.DIAGONAL_FACEPILE_16,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: u.hW.DIAGONAL_FACEPILE_BACK_16,
        },
        [d._3.SIZE_20]: {
            default: u.hW.DIAGONAL_FACEPILE_20,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: u.hW.DIAGONAL_FACEPILE_BACK_20,
        },
        [d._3.SIZE_24]: {
            default: u.hW.DIAGONAL_FACEPILE_24,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: u.hW.DIAGONAL_FACEPILE_BACK_24,
        },
        [d._3.SIZE_32]: {
            default: u.hW.DIAGONAL_FACEPILE_32,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: u.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [d._3.SIZE_40]: {
            default: u.hW.DIAGONAL_FACEPILE_32,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: u.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [d._3.SIZE_48]: {
            default: u.hW.DIAGONAL_FACEPILE_40,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: u.hW.DIAGONAL_FACEPILE_BACK_40,
        },
        [d._3.SIZE_56]: {
            default: u.hW.DIAGONAL_FACEPILE_56,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: u.hW.DIAGONAL_FACEPILE_BACK_56,
        },
        [d._3.SIZE_72]: {
            default: u.hW.DIAGONAL_FACEPILE_72,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: u.hW.DIAGONAL_FACEPILE_BACK_72,
        },
        [d._3.SIZE_80]: {
            default: u.hW.DIAGONAL_FACEPILE_80,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: u.hW.DIAGONAL_FACEPILE_BACK_80,
        },
        [d._3.SIZE_96]: {
            default: u.hW.DIAGONAL_FACEPILE_96,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: u.hW.DIAGONAL_FACEPILE_BACK_96,
        },
        [d._3.SIZE_120]: {
            default: u.hW.DIAGONAL_FACEPILE_120,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: u.hW.DIAGONAL_FACEPILE_BACK_120,
        },
    },
    E = function (e) {
        var t;
        let { backSrc: a, frontSrc: n, size: o, isTyping: _, status: m, style: p, className: E, ...I } = e,
            { size: T } = d.vC[o],
            {
                statusCoords: x,
                frontAvatarOffsetPx: C,
                frontAvatarSizePx: v,
                backAvatarSizePx: S,
            } = i.useMemo(() => {
                let e,
                    t,
                    a,
                    r,
                    i,
                    n = `${T}-${_}`;
                return (
                    b[n] ??
                    ((a = +(t = (e = d.vC[o]).size / 1.5)),
                    (r = 0.5 * t),
                    (i = {
                        statusCoords: (0, l.Rb)(e, c.clD.ONLINE, { isTyping: _, isMobile: !1, isVR: !1 }),
                        frontAvatarSizePx: a,
                        backAvatarSizePx: t,
                        frontAvatarOffsetPx: r,
                        frontAvatarCenter: r + a / 2,
                    }),
                    (b[n] = i),
                    i)
                );
            }, [T, _, o]),
            L = ((t = null != m), _ ? g[o].typing : t ? g[o].status : g[o].default),
            N = g[o].back;
        return (0, r.jsxs)("div", {
            style: { width: T, height: T, ...p },
            "aria-label": I["aria-label"],
            "aria-hidden": I["aria-hidden"],
            className: s()(h.kL, E),
            children: [
                (0, r.jsxs)(u.Ay, {
                    mask: L,
                    height: T,
                    width: T,
                    children: [
                        (0, r.jsx)(u.Ay, {
                            mask: N,
                            height: T,
                            width: T,
                            children: (0, r.jsx)("img", { src: a, alt: "", width: S, height: S }),
                        }),
                        (0, r.jsx)("div", {
                            style: { position: "absolute", top: C, left: C },
                            children: (0, r.jsx)(A, { src: n, size: v, isTyping: _, status: m }),
                        }),
                    ],
                }),
                (0, r.jsx)(f, { statusCoords: x, status: m, isTyping: _ }),
            ],
        });
    };
