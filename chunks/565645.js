n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(724442),
    u = n(692051),
    d = n(129185),
    c = n(776231),
    m = n(830178),
    h = n(253932),
    p = n(256415),
    f = n(486020),
    g = n(690521),
    C = n(218394),
    y = n(732139);
let b = __OVERLAY__ ? () => (0, l.bG)([p.default], () => p.default.isInstanceFocused()) : C.j;
function v(e) {
    let {
            src: t,
            alt: n,
            className: r,
            emojiId: l,
            emojiName: u,
            channelId: m,
            messageId: p,
            animated: C,
            size: v = "default",
            isInteracting: x = !1,
            shouldAnimate: A,
            onMouseEnter: S,
            onMouseLeave: j,
            canSelect: E = !0,
            autoplay: N,
            registerInnerRef: R,
            registerAnimatedElementRef: w,
            surrogate: V,
            ...k
        } = e,
        [F, I] = s.useState(!1),
        [B, M] = s.useState(void 0),
        U = s.useRef(void 0),
        { triggerAnimation: _, untriggerAnimation: L } = s.useContext(d.wE),
        z = h.Sf.useSetting(),
        P = b(),
        T = null == N ? z : N,
        W = y.Ec[v],
        D = s.useRef(null),
        G = s.useMemo(() => {
            if (null != t) return t;
            if (null != l) {
                let e = !0 === A && T;
                return f.Ay.getEmojiURL({ id: l, animated: P && !0 === C && (e || F || !0 === x), size: W });
            }
            if (null != u) return g.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
        }, [C, T, l, u, W, P, F, x, A, t]),
        O = s.useCallback(() => {
            null != G &&
                (U.current = (0, c.yt)(G, (e) => {
                    e || M(Date.now());
                }));
        }, [G]),
        Y = s.useCallback(
            (e) => {
                C && I(!0), null == l && _(u), S?.(e);
            },
            [C, u, S, _, l],
        ),
        q = s.useCallback(
            (e) => {
                C && I(!1), null == l && L(u), j?.(e);
            },
            [C, l, u, j, L],
        ),
        H = s.useMemo(() => {
            let e = null != l && "" !== l ? { "data-id": l } : { "data-name": u };
            return {
                ...k,
                className: a()("emoji", r, { jumboable: "jumbo" === v }),
                onError: O,
                onMouseEnter: Y,
                onMouseLeave: q,
                "data-type": "emoji",
                ...e,
            };
        }, [r, l, u, Y, q, O, k, v]);
    s.useEffect(() => () => U.current?.(), []);
    let $ = s.useCallback(
            (e) => {
                (D.current = e), R?.(e), w?.(e);
            },
            [R, w],
        ),
        J = (0, o.A)(D);
    return null == G || "" === G
        ? (0, i.jsx)("span", { ...H, ref: $, className: a()("emoji", "emoji-text"), children: V ?? u })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.q6, {
                      channelId: m,
                      messageId: p,
                      emojiName: u,
                      disable: !1 === T || !1 === z,
                      emojiRef: J,
                  }),
                  E
                      ? (0, i.jsx)("img", { ...H, ref: $, src: G, alt: n ?? u ?? void 0, draggable: !1 }, B)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...H,
                                ref: $,
                                role: "img",
                                "aria-label": n ?? u ?? void 0,
                                style: {
                                    backgroundImage: `url(${G})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                },
                            },
                            B,
                        ),
              ],
          });
}
function x(e) {
    let { useThoughtfullyAnimated: t } = s.useContext(m.W),
        { animate: n, registerRef: r } = t(),
        { disableAnimations: a } = s.useContext(u.Y);
    return (0, i.jsx)(v, { ...e, registerAnimatedElementRef: r, shouldAnimate: n && !a });
}
function A(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, i.jsx)(x, { ...e })
          : (0, i.jsx)(v, { ...e });
}
