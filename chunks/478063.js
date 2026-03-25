n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(97808),
    o = n(863610),
    c = n(397927),
    u = n(573435);
n(883392);
var d = n(657323);
let _ = {},
    E = 1 / 4;
function A(e) {
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
        children: (0, i.jsx)(o.n, { className: d.r$, dotRadius: t * E }),
    });
}
function T(e) {
    let { isTyping: t, statusCoords: n, status: l } = e,
        r = (0, c.S31)(c.clD.ONLINE);
    return t
        ? (0, i.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, i.jsx)(A, { height: n.height, fillColor: r }),
          })
        : null != l
          ? (0, i.jsx)(c.nW6, { size: n.height, status: l, style: { position: "absolute", top: n.y, left: n.x } })
          : null;
}
function I(e) {
    let { src: t, size: n } = e;
    return (0, i.jsx)("img", { className: d.tM, src: t, alt: "", width: n, height: n });
}
let N = {
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
    p = function (e) {
        var t;
        let { backSrc: n, frontSrc: r, size: o, isTyping: E, status: A, style: p, className: h, ...m } = e,
            { size: S } = c.vCh[o],
            {
                statusCoords: C,
                frontAvatarOffsetPx: R,
                frontAvatarSizePx: g,
                backAvatarSizePx: O,
            } = l.useMemo(() => {
                let e,
                    t,
                    n,
                    i,
                    l,
                    r = `${S}-${E}`;
                return (
                    _[r] ??
                    ((n = +(t = (e = c.vCh[o]).size / 1.5)),
                    (i = 0.5 * t),
                    (l = {
                        statusCoords: (0, a.Rb)(e, c.clD.ONLINE, { isTyping: E, isMobile: !1, isVR: !1 }),
                        frontAvatarSizePx: n,
                        backAvatarSizePx: t,
                        frontAvatarOffsetPx: i,
                        frontAvatarCenter: i + n / 2,
                    }),
                    (_[r] = l),
                    l)
                );
            }, [S, E, o]),
            y = ((t = null != A), E ? N[o].typing : t ? N[o].status : N[o].default),
            x = N[o].back;
        return (0, i.jsxs)("div", {
            style: { width: S, height: S, ...p },
            "aria-label": m["aria-label"],
            "aria-hidden": m["aria-hidden"],
            className: s()(d.kL, h),
            children: [
                (0, i.jsxs)(u.Ay, {
                    mask: y,
                    height: S,
                    width: S,
                    children: [
                        (0, i.jsx)(u.Ay, {
                            mask: x,
                            height: S,
                            width: S,
                            children: (0, i.jsx)("img", { src: n, alt: "", width: O, height: O }),
                        }),
                        (0, i.jsx)("div", {
                            style: { position: "absolute", top: R, left: R },
                            children: (0, i.jsx)(I, { src: r, size: g, isTyping: E, status: A }),
                        }),
                    ],
                }),
                (0, i.jsx)(T, { statusCoords: C, status: A, isTyping: E }),
            ],
        });
    };
