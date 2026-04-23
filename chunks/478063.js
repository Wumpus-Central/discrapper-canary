n.d(t, { A: () => p });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(97808),
    i = n(863610),
    c = n(778712),
    d = n(652215),
    _ = n(935154),
    u = n(573435);
n(883392);
var A = n(989822);
let E = {},
    C = 1 / 4;
function h(e) {
    let { height: t, fillColor: n } = e;
    return (0, a.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: 2.5 * t,
        },
        children: (0, a.jsx)(i.n, { className: A.r$, dotRadius: t * C }),
    });
}
function m(e) {
    let { isTyping: t, statusCoords: n, status: r } = e,
        l = (0, _.S3)(d.clD.ONLINE);
    return t
        ? (0, a.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, a.jsx)(h, { height: n.height, fillColor: l }),
          })
        : null != r
          ? (0, a.jsx)(_.nW, { size: n.height, status: r, style: { position: "absolute", top: n.y, left: n.x } })
          : null;
}
function I(e) {
    let { src: t, size: n } = e;
    return (0, a.jsx)("img", { className: A.tM, src: t, alt: "", width: n, height: n });
}
let N = {
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
    p = function (e) {
        var t;
        let { backSrc: n, frontSrc: l, size: i, isTyping: _, status: C, style: h, className: p, ...f } = e,
            { size: g } = c.vC[i],
            {
                statusCoords: O,
                frontAvatarOffsetPx: T,
                frontAvatarSizePx: P,
                backAvatarSizePx: b,
            } = r.useMemo(() => {
                let e,
                    t,
                    n,
                    a,
                    r,
                    l = `${g}-${_}`;
                return (
                    E[l] ??
                    ((n = +(t = (e = c.vC[i]).size / 1.5)),
                    (a = 0.5 * t),
                    (r = {
                        statusCoords: (0, o.Rb)(e, d.clD.ONLINE, { isTyping: _, isMobile: !1, isVR: !1 }),
                        frontAvatarSizePx: n,
                        backAvatarSizePx: t,
                        frontAvatarOffsetPx: a,
                        frontAvatarCenter: a + n / 2,
                    }),
                    (E[l] = r),
                    r)
                );
            }, [g, _, i]),
            R = ((t = null != C), _ ? N[i].typing : t ? N[i].status : N[i].default),
            S = N[i].back;
        return (0, a.jsxs)("div", {
            style: { width: g, height: g, ...h },
            "aria-label": f["aria-label"],
            "aria-hidden": f["aria-hidden"],
            className: s()(A.kL, p),
            children: [
                (0, a.jsxs)(u.Ay, {
                    mask: R,
                    height: g,
                    width: g,
                    children: [
                        (0, a.jsx)(u.Ay, {
                            mask: S,
                            height: g,
                            width: g,
                            children: (0, a.jsx)("img", { src: n, alt: "", width: b, height: b }),
                        }),
                        (0, a.jsx)("div", {
                            style: { position: "absolute", top: T, left: T },
                            children: (0, a.jsx)(I, { src: l, size: P, isTyping: _, status: C }),
                        }),
                    ],
                }),
                (0, a.jsx)(m, { statusCoords: O, status: C, isTyping: _ }),
            ],
        });
    };
