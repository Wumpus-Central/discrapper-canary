a.d(t, { A: () => h });
var n = a(627968),
    i = a(64700),
    r = a(503698),
    l = a.n(r),
    o = a(97808),
    s = a(863610),
    _ = a(397927),
    c = a(573435);
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
        children: (0, n.jsx)(s.n, { className: d.r$, dotRadius: t * f }),
    });
}
function p(e) {
    let { isTyping: t, statusCoords: a, status: i } = e,
        r = (0, _.S31)(_.clD.ONLINE);
    return t
        ? (0, n.jsx)("div", {
              style: { position: "absolute", top: a.y, left: a.x },
              children: (0, n.jsx)(m, { height: a.height, fillColor: r }),
          })
        : null != i
          ? (0, n.jsx)(_.nW6, { size: a.height, status: i, style: { position: "absolute", top: a.y, left: a.x } })
          : null;
}
function A(e) {
    let { src: t, size: a } = e;
    return (0, n.jsx)("img", { className: d.tM, src: t, alt: "", width: a, height: a });
}
let g = {
        [_._3J.SIZE_16]: {
            default: c.hW.DIAGONAL_FACEPILE_16,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: c.hW.DIAGONAL_FACEPILE_BACK_16,
        },
        [_._3J.SIZE_20]: {
            default: c.hW.DIAGONAL_FACEPILE_20,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: c.hW.DIAGONAL_FACEPILE_BACK_20,
        },
        [_._3J.SIZE_24]: {
            default: c.hW.DIAGONAL_FACEPILE_24,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: c.hW.DIAGONAL_FACEPILE_BACK_24,
        },
        [_._3J.SIZE_32]: {
            default: c.hW.DIAGONAL_FACEPILE_32,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: c.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [_._3J.SIZE_40]: {
            default: c.hW.DIAGONAL_FACEPILE_32,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: c.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [_._3J.SIZE_48]: {
            default: c.hW.DIAGONAL_FACEPILE_40,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: c.hW.DIAGONAL_FACEPILE_BACK_40,
        },
        [_._3J.SIZE_56]: {
            default: c.hW.DIAGONAL_FACEPILE_56,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: c.hW.DIAGONAL_FACEPILE_BACK_56,
        },
        [_._3J.SIZE_72]: {
            default: c.hW.DIAGONAL_FACEPILE_72,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: c.hW.DIAGONAL_FACEPILE_BACK_72,
        },
        [_._3J.SIZE_80]: {
            default: c.hW.DIAGONAL_FACEPILE_80,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: c.hW.DIAGONAL_FACEPILE_BACK_80,
        },
        [_._3J.SIZE_96]: {
            default: c.hW.DIAGONAL_FACEPILE_96,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: c.hW.DIAGONAL_FACEPILE_BACK_96,
        },
        [_._3J.SIZE_120]: {
            default: c.hW.DIAGONAL_FACEPILE_120,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: c.hW.DIAGONAL_FACEPILE_BACK_120,
        },
    },
    h = function (e) {
        var t;
        let { backSrc: a, frontSrc: r, size: s, isTyping: f, status: m, style: h, className: b, ...I } = e,
            { size: C } = _.vCh[s],
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
                    ((a = +(t = (e = _.vCh[s]).size / 1.5)),
                    (n = 0.5 * t),
                    (i = {
                        statusCoords: (0, o.Rb)(e, _.clD.ONLINE, { isTyping: f, isMobile: !1, isVR: !1 }),
                        frontAvatarSizePx: a,
                        backAvatarSizePx: t,
                        frontAvatarOffsetPx: n,
                        frontAvatarCenter: n + a / 2,
                    }),
                    (u[r] = i),
                    i)
                );
            }, [C, f, s]),
            S = ((t = null != m), f ? g[s].typing : t ? g[s].status : g[s].default),
            L = g[s].back;
        return (0, n.jsxs)("div", {
            style: { width: C, height: C, ...h },
            "aria-label": I["aria-label"],
            "aria-hidden": I["aria-hidden"],
            className: l()(d.kL, b),
            children: [
                (0, n.jsxs)(c.Ay, {
                    mask: S,
                    height: C,
                    width: C,
                    children: [
                        (0, n.jsx)(c.Ay, {
                            mask: L,
                            height: C,
                            width: C,
                            children: (0, n.jsx)("img", { src: a, alt: "", width: E, height: E }),
                        }),
                        (0, n.jsx)("div", {
                            style: { position: "absolute", top: y, left: y },
                            children: (0, n.jsx)(A, { src: r, size: x, isTyping: f, status: m }),
                        }),
                    ],
                }),
                (0, n.jsx)(p, { statusCoords: v, status: m, isTyping: f }),
            ],
        });
    };
