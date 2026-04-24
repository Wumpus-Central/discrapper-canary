n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    l = n(724442),
    u = n(692051),
    d = n(415666),
    h = n(776231),
    m = n(830178),
    c = n(253932),
    p = n(256415),
    g = n(486020),
    f = n(690521),
    b = n(218394),
    C = n(732139);
let v = __OVERLAY__ ? () => (0, o.bG)([p.default], () => p.default.isInstanceFocused()) : b.j;
function S(e) {
    let {
            src: t,
            alt: n,
            className: a,
            emojiId: o,
            emojiName: u,
            channelId: m,
            messageId: p,
            animated: b,
            size: S = "default",
            isInteracting: N = !1,
            shouldAnimate: y,
            onMouseEnter: A,
            onMouseLeave: E,
            canSelect: j = !0,
            autoplay: w,
            registerInnerRef: x,
            registerAnimatedElementRef: R,
            surrogate: F,
            ...k
        } = e,
        [U, L] = s.useState(!1),
        [z, I] = s.useState(void 0),
        M = s.useRef(void 0),
        { triggerAnimation: P, untriggerAnimation: D } = s.useContext(d.wE),
        W = c.Sf.useSetting(),
        B = v(),
        _ = null == w ? W : w,
        G = C.Ec[S],
        V = s.useRef(null),
        T = s.useMemo(() => {
            if (null != t) return t;
            if (null != o) {
                let e = !0 === y && _;
                return g.Ay.getEmojiURL({ id: o, animated: B && !0 === b && (e || U || !0 === N), size: G });
            }
            if (null != u) return f.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
        }, [b, _, o, u, G, B, U, N, y, t]),
        Y = s.useCallback(() => {
            null != T &&
                (M.current = (0, h.yt)(T, (e) => {
                    e || I(Date.now());
                }));
        }, [T]),
        O = s.useCallback(
            (e) => {
                b && L(!0), null == o && P(u), A?.(e);
            },
            [b, u, A, P, o],
        ),
        q = s.useCallback(
            (e) => {
                b && L(!1), null == o && D(u), E?.(e);
            },
            [b, o, u, E, D],
        ),
        $ = s.useMemo(() => {
            let e = null != o && "" !== o ? { "data-id": o } : { "data-name": u };
            return {
                ...k,
                className: r()("emoji", a, { jumboable: "jumbo" === S }),
                onError: Y,
                onMouseEnter: O,
                onMouseLeave: q,
                "data-type": "emoji",
                ...e,
            };
        }, [a, o, u, O, q, Y, k, S]);
    s.useEffect(() => () => M.current?.(), []);
    let H = s.useCallback(
            (e) => {
                (V.current = e), x?.(e), R?.(e);
            },
            [x, R],
        ),
        J = (0, l.A)(V);
    return null == T || "" === T
        ? (0, i.jsx)("span", { ...$, ref: H, className: r()("emoji", "emoji-text"), children: F ?? u })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.q6, {
                      channelId: m,
                      messageId: p,
                      emojiName: u,
                      disable: !1 === _ || !1 === W,
                      emojiRef: J,
                  }),
                  j
                      ? (0, i.jsx)("img", { ...$, ref: H, src: T, alt: n ?? u ?? void 0, draggable: !1 }, z)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...$,
                                ref: H,
                                role: "img",
                                "aria-label": n ?? u ?? void 0,
                                style: {
                                    backgroundImage: `url(${T})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                },
                            },
                            z,
                        ),
              ],
          });
}
function N(e) {
    let { useThoughtfullyAnimated: t } = s.useContext(m.W),
        { animate: n, registerRef: a } = t(),
        { disableAnimations: r } = s.useContext(u.Y);
    return (0, i.jsx)(S, { ...e, registerAnimatedElementRef: a, shouldAnimate: n && !r });
}
function y(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, i.jsx)(N, { ...e })
          : (0, i.jsx)(S, { ...e });
}
