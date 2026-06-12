"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(724442),
    u = n(692051),
    c = n(650336),
    d = n(776231),
    _ = n(830178),
    h = n(885386),
    f = n(184809),
    p = n(486020),
    E = n(690521),
    m = n(218394),
    g = n(732139);
let A = __OVERLAY__ ? () => (0, o.bG)([f.default], () => f.default.isInstanceFocused()) : m.j;
function I(e) {
    let {
            src: t,
            alt: n,
            className: s,
            emojiId: o,
            emojiName: u,
            channelId: _,
            messageId: f,
            animated: m,
            size: I = "default",
            isInteracting: T = !1,
            shouldAnimate: S,
            onMouseEnter: y,
            onMouseLeave: N,
            canSelect: v = !0,
            autoplay: C,
            registerInnerRef: R,
            registerAnimatedElementRef: O,
            surrogate: b,
            ...D
        } = e,
        [L, w] = r.useState(!1),
        [M, P] = r.useState(void 0),
        x = r.useRef(void 0),
        { triggerAnimation: k, untriggerAnimation: U } = r.useContext(c.wE),
        G = h.Sf.useSetting(),
        F = A(),
        V = null == C ? G : C,
        B = g.Ec[I],
        H = r.useRef(null),
        j = r.useMemo(() => {
            if (null != t) return t;
            if (null != o) {
                let e = !0 === S && V;
                return p.Ay.getEmojiURL({ id: o, animated: F && !0 === m && (e || L || !0 === T), size: B });
            }
            if (null != u) return E.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
        }, [m, V, o, u, B, F, L, T, S, t]),
        Y = r.useCallback(() => {
            null != j &&
                (x.current = (0, d.yt)(j, (e) => {
                    e || P(Date.now());
                }));
        }, [j]),
        W = r.useCallback(
            (e) => {
                m && w(!0), null == o && k(u), y?.(e);
            },
            [m, u, y, k, o],
        ),
        K = r.useCallback(
            (e) => {
                m && w(!1), null == o && U(u), N?.(e);
            },
            [m, o, u, N, U],
        ),
        $ = r.useMemo(() => {
            let e = null != o && "" !== o ? { "data-id": o } : { "data-name": u };
            return {
                ...D,
                className: a()("emoji", s, { jumboable: "jumbo" === I }),
                onError: Y,
                onMouseEnter: W,
                onMouseLeave: K,
                "data-type": "emoji",
                ...e,
            };
        }, [s, o, u, W, K, Y, D, I]);
    r.useEffect(() => () => x.current?.(), []);
    let z = r.useCallback(
            (e) => {
                (H.current = e), R?.(e), O?.(e);
            },
            [R, O],
        ),
        q = (0, l.A)(H);
    return null == j || "" === j
        ? (0, i.jsx)("span", { ...$, ref: z, className: a()("emoji", "emoji-text"), children: b ?? u })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.q6, {
                      channelId: _,
                      messageId: f,
                      emojiName: u,
                      disable: !1 === V || !1 === G,
                      emojiRef: q,
                  }),
                  v
                      ? (0, i.jsx)("img", { ...$, ref: z, src: j, alt: n ?? u ?? void 0, draggable: !1 }, M)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...$,
                                ref: z,
                                role: "img",
                                "aria-label": n ?? u ?? void 0,
                                style: {
                                    backgroundImage: `url(${j})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                },
                            },
                            M,
                        ),
              ],
          });
}
function T(e) {
    let { useThoughtfullyAnimated: t } = r.useContext(_.W),
        { animate: n, registerRef: s } = t(),
        { disableAnimations: a } = r.useContext(u.Y);
    return (0, i.jsx)(I, { ...e, registerAnimatedElementRef: s, shouldAnimate: n && !a });
}
function S(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, i.jsx)(T, { ...e })
          : (0, i.jsx)(I, { ...e });
}
