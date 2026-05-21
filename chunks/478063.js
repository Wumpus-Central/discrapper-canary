"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(97808),
    l = n(863610),
    u = n(778712),
    c = n(652215),
    d = n(133171),
    _ = n(573435);
n(883392);
var f = n(989822);
let h = {},
    p = 1 / 4;
function E(e) {
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
        children: (0, i.jsx)(l.n, { className: f.r$, dotRadius: t * p }),
    });
}
function m(e) {
    let { isTyping: t, statusCoords: n, status: r } = e,
        s = (0, d.S3)(c.clD.ONLINE);
    return t
        ? (0, i.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, i.jsx)(E, { height: n.height, fillColor: s }),
          })
        : null != r
          ? (0, i.jsx)(d.nW, { size: n.height, status: r, style: { position: "absolute", top: n.y, left: n.x } })
          : null;
}
function g(e) {
    let { src: t, size: n } = e;
    return (0, i.jsx)("img", { className: f.tM, src: t, alt: "", width: n, height: n });
}
let A = {
        [u._3.SIZE_16]: {
            default: _.hW.DIAGONAL_FACEPILE_16,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: _.hW.DIAGONAL_FACEPILE_BACK_16,
        },
        [u._3.SIZE_20]: {
            default: _.hW.DIAGONAL_FACEPILE_20,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: _.hW.DIAGONAL_FACEPILE_BACK_20,
        },
        [u._3.SIZE_24]: {
            default: _.hW.DIAGONAL_FACEPILE_24,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: _.hW.DIAGONAL_FACEPILE_BACK_24,
        },
        [u._3.SIZE_32]: {
            default: _.hW.DIAGONAL_FACEPILE_32,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: _.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [u._3.SIZE_40]: {
            default: _.hW.DIAGONAL_FACEPILE_32,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: _.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [u._3.SIZE_48]: {
            default: _.hW.DIAGONAL_FACEPILE_40,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: _.hW.DIAGONAL_FACEPILE_BACK_40,
        },
        [u._3.SIZE_56]: {
            default: _.hW.DIAGONAL_FACEPILE_56,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: _.hW.DIAGONAL_FACEPILE_BACK_56,
        },
        [u._3.SIZE_72]: {
            default: _.hW.DIAGONAL_FACEPILE_72,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: _.hW.DIAGONAL_FACEPILE_BACK_72,
        },
        [u._3.SIZE_80]: {
            default: _.hW.DIAGONAL_FACEPILE_80,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: _.hW.DIAGONAL_FACEPILE_BACK_80,
        },
        [u._3.SIZE_96]: {
            default: _.hW.DIAGONAL_FACEPILE_96,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: _.hW.DIAGONAL_FACEPILE_BACK_96,
        },
        [u._3.SIZE_120]: {
            default: _.hW.DIAGONAL_FACEPILE_120,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: _.hW.DIAGONAL_FACEPILE_BACK_120,
        },
    },
    I = function (e) {
        var t;
        let { backSrc: n, frontSrc: s, size: l, isTyping: d, status: p, style: E, className: I, ...T } = e,
            { size: S } = u.vC[l],
            {
                statusCoords: N,
                frontAvatarOffsetPx: y,
                frontAvatarSizePx: C,
                backAvatarSizePx: v,
            } = r.useMemo(() => {
                let e,
                    t,
                    n,
                    i,
                    r,
                    s = `${S}-${d}`;
                return (
                    h[s] ??
                    ((n = +(t = (e = u.vC[l]).size / 1.5)),
                    (i = 0.5 * t),
                    (r = {
                        statusCoords: (0, o.Rb)(e, c.clD.ONLINE, { isTyping: d, isMobile: !1, isVR: !1 }),
                        frontAvatarSizePx: n,
                        backAvatarSizePx: t,
                        frontAvatarOffsetPx: i,
                        frontAvatarCenter: i + n / 2,
                    }),
                    (h[s] = r),
                    r)
                );
            }, [S, d, l]),
            O = ((t = null != p), d ? A[l].typing : t ? A[l].status : A[l].default),
            R = A[l].back;
        return (0, i.jsxs)("div", {
            style: { width: S, height: S, ...E },
            "aria-label": T["aria-label"],
            "aria-hidden": T["aria-hidden"],
            className: a()(f.kL, I),
            children: [
                (0, i.jsxs)(_.Ay, {
                    mask: O,
                    height: S,
                    width: S,
                    children: [
                        (0, i.jsx)(_.Ay, {
                            mask: R,
                            height: S,
                            width: S,
                            children: (0, i.jsx)("img", { src: n, alt: "", width: v, height: v }),
                        }),
                        (0, i.jsx)("div", {
                            style: { position: "absolute", top: y, left: y },
                            children: (0, i.jsx)(g, { src: s, size: C, isTyping: d, status: p }),
                        }),
                    ],
                }),
                (0, i.jsx)(m, { statusCoords: N, status: p, isTyping: d }),
            ],
        });
    };
