"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(724442),
    u = n(692051),
    c = n(129185),
    d = n(776231),
    _ = n(830178),
    f = n(253932),
    p = n(256415),
    h = n(486020),
    E = n(690521),
    m = n(218394),
    g = n(732139);
let A = __OVERLAY__ ? () => (0, o.bG)([p.default], () => p.default.isInstanceFocused()) : m.j;
function I(e) {
    let {
            src: t,
            alt: n,
            className: s,
            emojiId: o,
            emojiName: u,
            channelId: _,
            messageId: p,
            animated: m,
            size: I = "default",
            isInteracting: T = !1,
            shouldAnimate: S,
            onMouseEnter: y,
            onMouseLeave: N,
            canSelect: v = !0,
            autoplay: C,
            registerInnerRef: O,
            registerAnimatedElementRef: R,
            surrogate: b,
            ...D
        } = e,
        [L, w] = i.useState(!1),
        [M, P] = i.useState(void 0),
        x = i.useRef(void 0),
        { triggerAnimation: k, untriggerAnimation: U } = i.useContext(c.wE),
        G = f.Sf.useSetting(),
        F = A(),
        V = null == C ? G : C,
        B = g.Ec[I],
        H = i.useRef(null),
        j = i.useMemo(() => {
            if (null != t) return t;
            if (null != o) {
                let e = !0 === S && V;
                return h.Ay.getEmojiURL({ id: o, animated: F && !0 === m && (e || L || !0 === T), size: B });
            }
            if (null != u) return E.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
        }, [m, V, o, u, B, F, L, T, S, t]),
        Y = i.useCallback(() => {
            null != j &&
                (x.current = (0, d.yt)(j, (e) => {
                    e || P(Date.now());
                }));
        }, [j]),
        W = i.useCallback(
            (e) => {
                m && w(!0), null == o && k(u), y?.(e);
            },
            [m, u, y, k, o],
        ),
        K = i.useCallback(
            (e) => {
                m && w(!1), null == o && U(u), N?.(e);
            },
            [m, o, u, N, U],
        ),
        $ = i.useMemo(() => {
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
    i.useEffect(() => () => x.current?.(), []);
    let z = i.useCallback(
            (e) => {
                (H.current = e), O?.(e), R?.(e);
            },
            [O, R],
        ),
        q = (0, l.A)(H);
    return null == j || "" === j
        ? (0, r.jsx)("span", { ...$, ref: z, className: a()("emoji", "emoji-text"), children: b ?? u })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.q6, {
                      channelId: _,
                      messageId: p,
                      emojiName: u,
                      disable: !1 === V || !1 === G,
                      emojiRef: q,
                  }),
                  v
                      ? (0, r.jsx)("img", { ...$, ref: z, src: j, alt: n ?? u ?? void 0, draggable: !1 }, M)
                      : (0, r.jsx)(
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
    let { useThoughtfullyAnimated: t } = i.useContext(_.W),
        { animate: n, registerRef: s } = t(),
        { disableAnimations: a } = i.useContext(u.Y);
    return (0, r.jsx)(I, { ...e, registerAnimatedElementRef: s, shouldAnimate: n && !a });
}
function S(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, r.jsx)(T, { ...e })
          : (0, r.jsx)(I, { ...e });
}
