s.d(e, { A: () => N });
var _ = s(627968),
    i = s(64700),
    a = s(503698),
    A = s.n(a),
    n = s(97808),
    r = s(863610),
    l = s(397927),
    I = s(573435);
s(883392);
var E = s(657323);
let o = {},
    d = 1 / 4;
function u(t) {
    let { height: e, fillColor: s } = t;
    return (0, _.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: e / 2,
            backgroundColor: s,
            height: e,
            width: 2.5 * e,
        },
        children: (0, _.jsx)(r.n, { className: E.r$, dotRadius: e * d }),
    });
}
function h(t) {
    let { isTyping: e, statusCoords: s, status: i } = t,
        a = (0, l.S31)(l.clD.ONLINE);
    return e
        ? (0, _.jsx)("div", {
              style: { position: "absolute", top: s.y, left: s.x },
              children: (0, _.jsx)(u, { height: s.height, fillColor: a }),
          })
        : null != i
          ? (0, _.jsx)(l.nW6, { size: s.height, status: i, style: { position: "absolute", top: s.y, left: s.x } })
          : null;
}
function L(t) {
    let { src: e, size: s } = t;
    return (0, _.jsx)("img", { className: E.tM, src: e, alt: "", width: s, height: s });
}
let c = {
        [l._3J.SIZE_16]: {
            default: I.hW.DIAGONAL_FACEPILE_16,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: I.hW.DIAGONAL_FACEPILE_BACK_16,
        },
        [l._3J.SIZE_20]: {
            default: I.hW.DIAGONAL_FACEPILE_20,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: I.hW.DIAGONAL_FACEPILE_BACK_20,
        },
        [l._3J.SIZE_24]: {
            default: I.hW.DIAGONAL_FACEPILE_24,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: I.hW.DIAGONAL_FACEPILE_BACK_24,
        },
        [l._3J.SIZE_32]: {
            default: I.hW.DIAGONAL_FACEPILE_32,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: I.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [l._3J.SIZE_40]: {
            default: I.hW.DIAGONAL_FACEPILE_32,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: I.hW.DIAGONAL_FACEPILE_BACK_32,
        },
        [l._3J.SIZE_48]: {
            default: I.hW.DIAGONAL_FACEPILE_40,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: I.hW.DIAGONAL_FACEPILE_BACK_40,
        },
        [l._3J.SIZE_56]: {
            default: I.hW.DIAGONAL_FACEPILE_56,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: I.hW.DIAGONAL_FACEPILE_BACK_56,
        },
        [l._3J.SIZE_72]: {
            default: I.hW.DIAGONAL_FACEPILE_72,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: I.hW.DIAGONAL_FACEPILE_BACK_72,
        },
        [l._3J.SIZE_80]: {
            default: I.hW.DIAGONAL_FACEPILE_80,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: I.hW.DIAGONAL_FACEPILE_BACK_80,
        },
        [l._3J.SIZE_96]: {
            default: I.hW.DIAGONAL_FACEPILE_96,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: I.hW.DIAGONAL_FACEPILE_BACK_96,
        },
        [l._3J.SIZE_120]: {
            default: I.hW.DIAGONAL_FACEPILE_120,
            typing: I.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: I.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: I.hW.DIAGONAL_FACEPILE_BACK_120,
        },
    },
    N = function (t) {
        var e;
        let { backSrc: s, frontSrc: a, size: r, isTyping: d, status: u, style: N, className: C, ...O } = t,
            { size: G } = l.vCh[r],
            {
                statusCoords: f,
                frontAvatarOffsetPx: g,
                frontAvatarSizePx: P,
                backAvatarSizePx: D,
            } = i.useMemo(() => {
                let t,
                    e,
                    s,
                    _,
                    i,
                    a = `${G}-${d}`;
                return (
                    o[a] ??
                    ((s = +(e = (t = l.vCh[r]).size / 1.5)),
                    (_ = 0.5 * e),
                    (i = {
                        statusCoords: (0, n.Rb)(t, l.clD.ONLINE, { isTyping: d, isMobile: !1, isVR: !1 }),
                        frontAvatarSizePx: s,
                        backAvatarSizePx: e,
                        frontAvatarOffsetPx: _,
                        frontAvatarCenter: _ + s / 2,
                    }),
                    (o[a] = i),
                    i)
                );
            }, [G, d, r]),
            m = ((e = null != u), d ? c[r].typing : e ? c[r].status : c[r].default),
            T = c[r].back;
        return (0, _.jsxs)("div", {
            style: { width: G, height: G, ...N },
            "aria-label": O["aria-label"],
            "aria-hidden": O["aria-hidden"],
            className: A()(E.kL, C),
            children: [
                (0, _.jsxs)(I.Ay, {
                    mask: m,
                    height: G,
                    width: G,
                    children: [
                        (0, _.jsx)(I.Ay, {
                            mask: T,
                            height: G,
                            width: G,
                            children: (0, _.jsx)("img", { src: s, alt: "", width: D, height: D }),
                        }),
                        (0, _.jsx)("div", {
                            style: { position: "absolute", top: g, left: g },
                            children: (0, _.jsx)(L, { src: a, size: P, isTyping: d, status: u }),
                        }),
                    ],
                }),
                (0, _.jsx)(h, { statusCoords: f, status: u, isTyping: d }),
            ],
        });
    };
