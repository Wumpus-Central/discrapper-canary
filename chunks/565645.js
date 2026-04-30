n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    o = n.n(r),
    a = n(17928),
    l = n(724442),
    u = n(692051),
    d = n(415666),
    m = n(776231),
    h = n(830178),
    g = n(253932),
    c = n(256415),
    p = n(486020),
    b = n(690521),
    f = n(218394),
    C = n(732139);
let v = __OVERLAY__ ? () => (0, a.bG)([c.default], () => c.default.isInstanceFocused()) : f.j;
function N(e) {
    let {
            src: t,
            alt: n,
            className: r,
            emojiId: a,
            emojiName: u,
            channelId: h,
            messageId: c,
            animated: f,
            size: N = "default",
            isInteracting: A = !1,
            shouldAnimate: j,
            onMouseEnter: w,
            onMouseLeave: y,
            canSelect: S = !0,
            autoplay: x,
            registerInnerRef: R,
            registerAnimatedElementRef: k,
            surrogate: E,
            ...z
        } = e,
        [I, M] = s.useState(!1),
        [F, U] = s.useState(void 0),
        _ = s.useRef(void 0),
        { triggerAnimation: L, untriggerAnimation: V } = s.useContext(d.wE),
        B = g.Sf.useSetting(),
        T = v(),
        Y = null == x ? B : x,
        D = C.Ec[N],
        O = s.useRef(null),
        P = s.useMemo(() => {
            if (null != t) return t;
            if (null != a) {
                let e = !0 === j && Y;
                return p.Ay.getEmojiURL({ id: a, animated: T && !0 === f && (e || I || !0 === A), size: D });
            }
            if (null != u) return b.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
        }, [f, Y, a, u, D, T, I, A, j, t]),
        W = s.useCallback(() => {
            null != P &&
                (_.current = (0, m.yt)(P, (e) => {
                    e || U(Date.now());
                }));
        }, [P]),
        q = s.useCallback(
            (e) => {
                f && M(!0), null == a && L(u), w?.(e);
            },
            [f, u, w, L, a],
        ),
        G = s.useCallback(
            (e) => {
                f && M(!1), null == a && V(u), y?.(e);
            },
            [f, a, u, y, V],
        ),
        $ = s.useMemo(() => {
            let e = null != a && "" !== a ? { "data-id": a } : { "data-name": u };
            return {
                ...z,
                className: o()("emoji", r, { jumboable: "jumbo" === N }),
                onError: W,
                onMouseEnter: q,
                onMouseLeave: G,
                "data-type": "emoji",
                ...e,
            };
        }, [r, a, u, q, G, W, z, N]);
    s.useEffect(() => () => _.current?.(), []);
    let H = s.useCallback(
            (e) => {
                (O.current = e), R?.(e), k?.(e);
            },
            [R, k],
        ),
        J = (0, l.A)(O);
    return null == P || "" === P
        ? (0, i.jsx)("span", { ...$, ref: H, className: o()("emoji", "emoji-text"), children: E ?? u })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.q6, {
                      channelId: h,
                      messageId: c,
                      emojiName: u,
                      disable: !1 === Y || !1 === B,
                      emojiRef: J,
                  }),
                  S
                      ? (0, i.jsx)("img", { ...$, ref: H, src: P, alt: n ?? u ?? void 0, draggable: !1 }, F)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...$,
                                ref: H,
                                role: "img",
                                "aria-label": n ?? u ?? void 0,
                                style: {
                                    backgroundImage: `url(${P})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                },
                            },
                            F,
                        ),
              ],
          });
}
function A(e) {
    let { useThoughtfullyAnimated: t } = s.useContext(h.W),
        { animate: n, registerRef: r } = t(),
        { disableAnimations: o } = s.useContext(u.Y);
    return (0, i.jsx)(N, { ...e, registerAnimatedElementRef: r, shouldAnimate: n && !o });
}
function j(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, i.jsx)(A, { ...e })
          : (0, i.jsx)(N, { ...e });
}
