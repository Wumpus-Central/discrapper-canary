"use strict";
n.d(t, { A: () => S });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(724442),
    d = n(692051),
    c = n(868132),
    u = n(597098),
    _ = n(830178),
    E = n(885386),
    A = n(184809),
    h = n(486020),
    I = n(690521),
    f = n(218394),
    p = n(732139);
let T = __OVERLAY__ ? () => (0, l.bG)([A.default], () => A.default.isInstanceFocused()) : f.j;
function m(e) {
    let {
            src: t,
            alt: n,
            className: a,
            emojiId: l,
            emojiName: d,
            channelId: _,
            messageId: A,
            animated: f,
            size: m = "default",
            isInteracting: g = !1,
            shouldAnimate: S,
            onMouseEnter: N,
            onMouseLeave: C,
            canSelect: O = !0,
            autoplay: R,
            registerInnerRef: L,
            registerAnimatedElementRef: y,
            surrogate: D,
            ...v
        } = e,
        [b, M] = r.useState(!1),
        [P, U] = r.useState(void 0),
        w = r.useRef(void 0),
        { triggerAnimation: G, untriggerAnimation: x } = r.useContext(c.wE),
        k = E.Sf.useSetting(),
        F = T(),
        V = null == R ? k : R,
        B = p.Ec[m],
        H = r.useRef(null),
        j = r.useMemo(() => {
            if (null != t) return t;
            if (null != l) {
                let e = !0 === S && V;
                return h.Ay.getEmojiURL({ id: l, animated: F && !0 === f && (e || b || !0 === g), size: B });
            }
            if (null != d) return I.Ay.getURL(d);
            throw Error("Unknown Src for Emoji");
        }, [f, V, l, d, B, F, b, g, S, t]),
        W = r.useCallback(() => {
            null != j &&
                (w.current = (0, u.yt)(j, (e) => {
                    e || U(Date.now());
                }));
        }, [j]),
        Y = r.useCallback(
            (e) => {
                f && M(!0), null == l && G(d), N?.(e);
            },
            [f, d, N, G, l],
        ),
        K = r.useCallback(
            (e) => {
                f && M(!1), null == l && x(d), C?.(e);
            },
            [f, l, d, C, x],
        ),
        $ = r.useMemo(() => {
            let e = null != l && "" !== l ? { "data-id": l } : { "data-name": d };
            return {
                ...v,
                className: s()("emoji", a, { jumboable: "jumbo" === m }),
                onError: W,
                onMouseEnter: Y,
                onMouseLeave: K,
                "data-type": "emoji",
                ...e,
            };
        }, [a, l, d, Y, K, W, v, m]);
    r.useEffect(() => () => w.current?.(), []);
    let z = r.useCallback(
            (e) => {
                (H.current = e), L?.(e), y?.(e);
            },
            [L, y],
        ),
        q = (0, o.A)(H);
    return null == j || "" === j
        ? (0, i.jsx)("span", { ...$, ref: z, className: s()("emoji", "emoji-text"), children: D ?? d })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.q6, {
                      channelId: _,
                      messageId: A,
                      emojiName: d,
                      disable: !1 === V || !1 === k,
                      emojiRef: q,
                  }),
                  O
                      ? (0, i.jsx)("img", { ...$, ref: z, src: j, alt: n ?? d ?? void 0, draggable: !1 }, P)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...$,
                                ref: z,
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
function g(e) {
    let { useThoughtfullyAnimated: t } = r.useContext(_.W),
        { animate: n, registerRef: a } = t(),
        { disableAnimations: s } = r.useContext(d.Y);
    return (0, i.jsx)(m, { ...e, registerAnimatedElementRef: a, shouldAnimate: n && !s });
}
function S(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, i.jsx)(g, { ...e })
          : (0, i.jsx)(m, { ...e });
}
