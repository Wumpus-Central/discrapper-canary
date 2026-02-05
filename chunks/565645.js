"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(724442),
    u = n(692051),
    c = n(129185),
    d = n(776231),
    _ = n(830178),
    f = n(253932),
    p = n(256415),
    h = n(486020),
    m = n(690521),
    g = n(218394),
    E = n(732139);
let A = __OVERLAY__ ? () => (0, o.bG)([p.default], () => p.default.isInstanceFocused()) : g.j;
function I(e) {
    let {
            src: t,
            alt: n,
            className: a,
            emojiId: o,
            emojiName: u,
            channelId: _,
            messageId: p,
            animated: g,
            size: I = "default",
            isInteracting: T = !1,
            shouldAnimate: y,
            onMouseEnter: S,
            onMouseLeave: v,
            canSelect: C = !0,
            autoplay: b,
            registerInnerRef: N,
            registerAnimatedElementRef: R,
            surrogate: O,
            ...D
        } = e,
        [L, w] = i.useState(!1),
        [x, P] = i.useState(void 0),
        M = i.useRef(void 0),
        { triggerAnimation: k, untriggerAnimation: U } = i.useContext(c.wE),
        G = f.Sf.useSetting(),
        V = A(),
        F = null == b ? G : b,
        B = E.Ec[I],
        j = i.useRef(null),
        H = i.useMemo(() => {
            if (null != t) return t;
            if (null != o) {
                let e = !0 === y && F;
                return h.Ay.getEmojiURL({ id: o, animated: V && !0 === g && (e || L || !0 === T), size: B });
            }
            if (null != u) return m.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
        }, [g, F, o, u, B, V, L, T, y, t]),
        Y = i.useCallback(() => {
            null != H &&
                (M.current = (0, d.yt)(H, (e) => {
                    e || P(Date.now());
                }));
        }, [H]),
        W = i.useCallback(
            (e) => {
                g && w(!0), null == o && k(u), S?.(e);
            },
            [g, u, S, k, o],
        ),
        K = i.useCallback(
            (e) => {
                g && w(!1), null == o && U(u), v?.(e);
            },
            [g, o, u, v, U],
        ),
        z = i.useMemo(() => {
            let e = null != o && "" !== o ? { "data-id": o } : { "data-name": u };
            return {
                ...D,
                className: s()("emoji", a, { jumboable: "jumbo" === I }),
                onError: Y,
                onMouseEnter: W,
                onMouseLeave: K,
                "data-type": "emoji",
                ...e,
            };
        }, [a, o, u, W, K, Y, D, I]);
    i.useEffect(() => () => M.current?.(), []);
    let $ = i.useCallback(
            (e) => {
                (j.current = e), N?.(e), R?.(e);
            },
            [N, R],
        ),
        q = (0, l.A)(j);
    return null == H || "" === H
        ? (0, r.jsx)("span", { ...z, ref: $, className: s()("emoji", "emoji-text"), children: O ?? u })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.q6, {
                      channelId: _,
                      messageId: p,
                      emojiName: u,
                      disable: !1 === F || !1 === G,
                      emojiRef: q,
                  }),
                  C
                      ? (0, r.jsx)("img", { ...z, ref: $, src: H, alt: n ?? u ?? void 0, draggable: !1 }, x)
                      : (0, r.jsx)(
                            "div",
                            {
                                ...z,
                                ref: $,
                                role: "img",
                                "aria-label": n ?? u ?? void 0,
                                style: {
                                    backgroundImage: `url(${H})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                },
                            },
                            x,
                        ),
              ],
          });
}
function T(e) {
    let { useThoughtfullyAnimated: t } = i.useContext(_.W),
        { animate: n, registerRef: a } = t(),
        { disableAnimations: s } = i.useContext(u.Y);
    return (0, r.jsx)(I, { ...e, registerAnimatedElementRef: a, shouldAnimate: n && !s });
}
function y(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, r.jsx)(T, { ...e })
          : (0, r.jsx)(I, { ...e });
}
