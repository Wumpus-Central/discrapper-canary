"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(724442),
    d = n(692051),
    _ = n(415666),
    u = n(776231),
    c = n(830178),
    E = n(253932),
    h = n(256415),
    m = n(486020),
    f = n(690521),
    g = n(218394),
    p = n(732139);
let A = __OVERLAY__ ? () => (0, o.bG)([h.default], () => h.default.isInstanceFocused()) : g.j;
function I(e) {
    let {
            src: t,
            alt: n,
            className: s,
            emojiId: o,
            emojiName: d,
            channelId: c,
            messageId: h,
            animated: g,
            size: I = "default",
            isInteracting: T = !1,
            shouldAnimate: S,
            onMouseEnter: N,
            onMouseLeave: C,
            canSelect: R = !0,
            autoplay: O,
            registerInnerRef: y,
            registerAnimatedElementRef: v,
            surrogate: D,
            ...L
        } = e,
        [b, w] = r.useState(!1),
        [P, k] = r.useState(void 0),
        M = r.useRef(void 0),
        { triggerAnimation: U, untriggerAnimation: x } = r.useContext(_.wE),
        G = E.Sf.useSetting(),
        V = A(),
        F = null == O ? G : O,
        B = p.Ec[I],
        H = r.useRef(null),
        j = r.useMemo(() => {
            if (null != t) return t;
            if (null != o) {
                let e = !0 === S && F;
                return m.Ay.getEmojiURL({ id: o, animated: V && !0 === g && (e || b || !0 === T), size: B });
            }
            if (null != d) return f.Ay.getURL(d);
            throw Error("Unknown Src for Emoji");
        }, [g, F, o, d, B, V, b, T, S, t]),
        W = r.useCallback(() => {
            null != j &&
                (M.current = (0, u.yt)(j, (e) => {
                    e || k(Date.now());
                }));
        }, [j]),
        Y = r.useCallback(
            (e) => {
                g && w(!0), null == o && U(d), N?.(e);
            },
            [g, d, N, U, o],
        ),
        K = r.useCallback(
            (e) => {
                g && w(!1), null == o && x(d), C?.(e);
            },
            [g, o, d, C, x],
        ),
        z = r.useMemo(() => {
            let e = null != o && "" !== o ? { "data-id": o } : { "data-name": d };
            return {
                ...L,
                className: a()("emoji", s, { jumboable: "jumbo" === I }),
                onError: W,
                onMouseEnter: Y,
                onMouseLeave: K,
                "data-type": "emoji",
                ...e,
            };
        }, [s, o, d, Y, K, W, L, I]);
    r.useEffect(() => () => M.current?.(), []);
    let $ = r.useCallback(
            (e) => {
                (H.current = e), y?.(e), v?.(e);
            },
            [y, v],
        ),
        q = (0, l.A)(H);
    return null == j || "" === j
        ? (0, i.jsx)("span", { ...z, ref: $, className: a()("emoji", "emoji-text"), children: D ?? d })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(_.q6, {
                      channelId: c,
                      messageId: h,
                      emojiName: d,
                      disable: !1 === F || !1 === G,
                      emojiRef: q,
                  }),
                  R
                      ? (0, i.jsx)("img", { ...z, ref: $, src: j, alt: n ?? d ?? void 0, draggable: !1 }, P)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...z,
                                ref: $,
                                role: "img",
                                "aria-label": n ?? d ?? void 0,
                                style: {
                                    backgroundImage: `url(${j})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                },
                            },
                            P,
                        ),
              ],
          });
}
function T(e) {
    let { useThoughtfullyAnimated: t } = r.useContext(c.W),
        { animate: n, registerRef: s } = t(),
        { disableAnimations: a } = r.useContext(d.Y);
    return (0, i.jsx)(I, { ...e, registerAnimatedElementRef: s, shouldAnimate: n && !a });
}
function S(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, i.jsx)(T, { ...e })
          : (0, i.jsx)(I, { ...e });
}
