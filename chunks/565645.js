"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(724442),
    u = n(692051),
    c = n(868132),
    d = n(776231),
    _ = n(830178),
    f = n(885386),
    h = n(184809),
    p = n(486020),
    E = n(690521),
    m = n(218394),
    g = n(732139);
let A = __OVERLAY__ ? () => (0, o.bG)([h.default], () => h.default.isInstanceFocused()) : m.j;
function I(e) {
    let {
            src: t,
            alt: n,
            className: s,
            emojiId: o,
            emojiName: u,
            channelId: _,
            messageId: h,
            animated: m,
            size: I = "default",
            isInteracting: T = !1,
            shouldAnimate: S,
            onMouseEnter: N,
            onMouseLeave: y,
            canSelect: C = !0,
            autoplay: v,
            registerInnerRef: O,
            registerAnimatedElementRef: R,
            surrogate: b,
            ...D
        } = e,
        [L, w] = r.useState(!1),
        [M, P] = r.useState(void 0),
        x = r.useRef(void 0),
        { triggerAnimation: U, untriggerAnimation: k } = r.useContext(c.wE),
        G = f.Sf.useSetting(),
        F = A(),
        V = null == v ? G : v,
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
                m && w(!0), null == o && U(u), N?.(e);
            },
            [m, u, N, U, o],
        ),
        K = r.useCallback(
            (e) => {
                m && w(!1), null == o && k(u), y?.(e);
            },
            [m, o, u, y, k],
        ),
        z = r.useMemo(() => {
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
    let $ = r.useCallback(
            (e) => {
                (H.current = e), O?.(e), R?.(e);
            },
            [O, R],
        ),
        q = (0, l.A)(H);
    return null == j || "" === j
        ? (0, i.jsx)("span", { ...z, ref: $, className: a()("emoji", "emoji-text"), children: b ?? u })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.q6, {
                      channelId: _,
                      messageId: h,
                      emojiName: u,
                      disable: !1 === V || !1 === G,
                      emojiRef: q,
                  }),
                  C
                      ? (0, i.jsx)("img", { ...z, ref: $, src: j, alt: n ?? u ?? void 0, draggable: !1 }, M)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...z,
                                ref: $,
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
