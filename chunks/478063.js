"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(97808),
    o = n(863610),
    d = n(778712),
    c = n(652215),
    u = n(133171),
    _ = n(573435);
n(883392);
var E = n(989822);
let A = {},
    h = 1 / 4;
function I(e) {
    let { height: t, fillColor: n } = e;
    return (0, i.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: 2.5 * t,
        },
        children: (0, i.jsx)(o.n, { className: E.r$, dotRadius: t * h }),
    });
}
function f(e) {
    let { isTyping: t, statusCoords: n, status: r } = e,
        a = (0, u.S3)(c.clD.ONLINE);
    return t
        ? (0, i.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, i.jsx)(I, { height: n.height, fillColor: a }),
          })
        : null != r
          ? (0, i.jsx)(u.nW, { size: n.height, status: r, style: { position: "absolute", top: n.y, left: n.x } })
          : null;
}
function p(e) {
    let { src: t, size: n } = e;
    return (0, i.jsx)("img", { className: E.tM, src: t, alt: "", width: n, height: n });
}
let T = {
        [d._3.SIZE_16]: {
            default: _.hW.DIAGONAL_FACEPILE_16,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: _.hW.DIAGONAL_FACEPILE_BACK_16,
        },
        [d._3.SIZE_20]: {
            default: _.hW.DIAGONAL_FACEPILE_20,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: _.hW.DIAGONAL_FACEPILE_BACK_20,
        },
        [d._3.SIZE_24]: {
            default: _.hW.DIAGONAL_FACEPILE_24,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: _.hW.DIAGONAL_FACEPILE_BACK_24,
        },
        [d._3.SIZE_32]: {
            default: _.hW.DIAGONAL_FACEPILE_32,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: _.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [d._3.SIZE_40]: {
            default: _.hW.DIAGONAL_FACEPILE_32,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: _.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [d._3.SIZE_48]: {
            default: _.hW.DIAGONAL_FACEPILE_40,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: _.hW.DIAGONAL_FACEPILE_BACK_40,
        },
        [d._3.SIZE_56]: {
            default: _.hW.DIAGONAL_FACEPILE_56,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: _.hW.DIAGONAL_FACEPILE_BACK_56,
        },
        [d._3.SIZE_72]: {
            default: _.hW.DIAGONAL_FACEPILE_72,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: _.hW.DIAGONAL_FACEPILE_BACK_72,
        },
        [d._3.SIZE_80]: {
            default: _.hW.DIAGONAL_FACEPILE_80,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: _.hW.DIAGONAL_FACEPILE_BACK_80,
        },
        [d._3.SIZE_96]: {
            default: _.hW.DIAGONAL_FACEPILE_96,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: _.hW.DIAGONAL_FACEPILE_BACK_96,
        },
        [d._3.SIZE_120]: {
            default: _.hW.DIAGONAL_FACEPILE_120,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: _.hW.DIAGONAL_FACEPILE_BACK_120,
        },
    },
    m = function (e) {
        var t;
        let { backSrc: n, frontSrc: a, size: o, isTyping: u, status: h, style: I, className: m, ...g } = e,
            { size: S } = d.vC[o],
            {
                statusCoords: N,
                frontAvatarOffsetPx: C,
                frontAvatarSizePx: R,
                backAvatarSizePx: O,
            } = r.useMemo(() => {
                let e,
                    t,
                    n,
                    i,
                    r,
                    a = `${S}-${u}`;
                return (
                    A[a] ??
                    ((n = +(t = (e = d.vC[o]).size / 1.5)),
                    (i = 0.5 * t),
                    (r = {
                        statusCoords: (0, l.Rb)(e, c.clD.ONLINE, { isTyping: u, isMobile: !1, isVR: !1 }),
                        frontAvatarSizePx: n,
                        backAvatarSizePx: t,
                        frontAvatarOffsetPx: i,
                        frontAvatarCenter: i + n / 2,
                    }),
                    (A[a] = r),
                    r)
                );
            }, [S, u, o]),
            L = ((t = null != h), u ? T[o].typing : t ? T[o].status : T[o].default),
            y = T[o].back;
        return (0, i.jsxs)("div", {
            style: { width: S, height: S, ...I },
            "aria-label": g["aria-label"],
            "aria-hidden": g["aria-hidden"],
            className: s()(E.kL, m),
            children: [
                (0, i.jsxs)(_.Ay, {
                    mask: L,
                    height: S,
                    width: S,
                    children: [
                        (0, i.jsx)(_.Ay, {
                            mask: y,
                            height: S,
                            width: S,
                            children: (0, i.jsx)("img", { src: n, alt: "", width: O, height: O }),
                        }),
                        (0, i.jsx)("div", {
                            style: { position: "absolute", top: C, left: C },
                            children: (0, i.jsx)(p, { src: a, size: R, isTyping: u, status: h }),
                        }),
                    ],
                }),
                (0, i.jsx)(f, { statusCoords: N, status: h, isTyping: u }),
            ],
        });
    };
