a.d(t, { A: () => m });
var i = a(627968),
    r = a(64700),
    l = a(503698),
    n = a.n(l),
    s = a(97808),
    o = a(863610),
    c = a(778712),
    d = a(652215),
    _ = a(935154),
    u = a(573435);
a(883392);
var h = a(95806);
let A = {},
    p = 1 / 4;
function g(e) {
    let { height: t, fillColor: a } = e;
    return (0, i.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: a,
            height: t,
            width: 2.5 * t,
        },
        children: (0, i.jsx)(o.n, { className: h.r$, dotRadius: t * p }),
    });
}
function E(e) {
    let { isTyping: t, statusCoords: a, status: r } = e,
        l = (0, _.S3)(d.clD.ONLINE);
    return t
        ? (0, i.jsx)("div", {
              style: { position: "absolute", top: a.y, left: a.x },
              children: (0, i.jsx)(g, { height: a.height, fillColor: l }),
          })
        : null != r
          ? (0, i.jsx)(_.nW, { size: a.height, status: r, style: { position: "absolute", top: a.y, left: a.x } })
          : null;
}
function I(e) {
    let { src: t, size: a } = e;
    return (0, i.jsx)("img", { className: h.tM, src: t, alt: "", width: a, height: a });
}
let f = {
        [c._3.SIZE_16]: {
            default: u.hW.DIAGONAL_FACEPILE_16,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: u.hW.DIAGONAL_FACEPILE_BACK_16,
        },
        [c._3.SIZE_20]: {
            default: u.hW.DIAGONAL_FACEPILE_20,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: u.hW.DIAGONAL_FACEPILE_BACK_20,
        },
        [c._3.SIZE_24]: {
            default: u.hW.DIAGONAL_FACEPILE_24,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: u.hW.DIAGONAL_FACEPILE_BACK_24,
        },
        [c._3.SIZE_32]: {
            default: u.hW.DIAGONAL_FACEPILE_32,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: u.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [c._3.SIZE_40]: {
            default: u.hW.DIAGONAL_FACEPILE_32,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: u.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [c._3.SIZE_48]: {
            default: u.hW.DIAGONAL_FACEPILE_40,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: u.hW.DIAGONAL_FACEPILE_BACK_40,
        },
        [c._3.SIZE_56]: {
            default: u.hW.DIAGONAL_FACEPILE_56,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: u.hW.DIAGONAL_FACEPILE_BACK_56,
        },
        [c._3.SIZE_72]: {
            default: u.hW.DIAGONAL_FACEPILE_72,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: u.hW.DIAGONAL_FACEPILE_BACK_72,
        },
        [c._3.SIZE_80]: {
            default: u.hW.DIAGONAL_FACEPILE_80,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: u.hW.DIAGONAL_FACEPILE_BACK_80,
        },
        [c._3.SIZE_96]: {
            default: u.hW.DIAGONAL_FACEPILE_96,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: u.hW.DIAGONAL_FACEPILE_BACK_96,
        },
        [c._3.SIZE_120]: {
            default: u.hW.DIAGONAL_FACEPILE_120,
            typing: u.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: u.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: u.hW.DIAGONAL_FACEPILE_BACK_120,
        },
    },
    m = function (e) {
        var t;
        let { backSrc: a, frontSrc: l, size: o, isTyping: _, status: p, style: g, className: m, ...C } = e,
            { size: b } = c.vC[o],
            {
                statusCoords: T,
                frontAvatarOffsetPx: v,
                frontAvatarSizePx: L,
                backAvatarSizePx: N,
            } = r.useMemo(() => {
                let e,
                    t,
                    a,
                    i,
                    r,
                    l = `${b}-${_}`;
                return (
                    A[l] ??
                    ((a = +(t = (e = c.vC[o]).size / 1.5)),
                    (i = 0.5 * t),
                    (r = {
                        statusCoords: (0, s.Rb)(e, d.clD.ONLINE, { isTyping: _, isMobile: !1, isVR: !1 }),
                        frontAvatarSizePx: a,
                        backAvatarSizePx: t,
                        frontAvatarOffsetPx: i,
                        frontAvatarCenter: i + a / 2,
                    }),
                    (A[l] = r),
                    r)
                );
            }, [b, _, o]),
            S = ((t = null != p), _ ? f[o].typing : t ? f[o].status : f[o].default),
            y = f[o].back;
        return (0, i.jsxs)("div", {
            style: { width: b, height: b, ...g },
            "aria-label": C["aria-label"],
            "aria-hidden": C["aria-hidden"],
            className: n()(h.kL, m),
            children: [
                (0, i.jsxs)(u.Ay, {
                    mask: S,
                    height: b,
                    width: b,
                    children: [
                        (0, i.jsx)(u.Ay, {
                            mask: y,
                            height: b,
                            width: b,
                            children: (0, i.jsx)("img", { src: a, alt: "", width: N, height: N }),
                        }),
                        (0, i.jsx)("div", {
                            style: { position: "absolute", top: v, left: v },
                            children: (0, i.jsx)(I, { src: l, size: L, isTyping: _, status: p }),
                        }),
                    ],
                }),
                (0, i.jsx)(E, { statusCoords: T, status: p, isTyping: _ }),
            ],
        });
    };
