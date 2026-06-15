n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    u = n.n(l),
    a = n(17928),
    s = n(724442),
    o = n(692051),
    c = n(650336),
    d = n(776231),
    m = n(830178),
    f = n(885386),
    g = n(184809),
    x = n(486020),
    p = n(690521),
    y = n(218394),
    A = n(732139);
let j = __OVERLAY__ ? () => (0, a.bG)([g.default], () => g.default.isInstanceFocused()) : y.j;
function h(e) {
    let {
            src: t,
            alt: n,
            className: l,
            emojiId: a,
            emojiName: o,
            channelId: m,
            messageId: g,
            animated: y,
            size: h = "default",
            isInteracting: C = !1,
            shouldAnimate: v,
            onMouseEnter: b,
            onMouseLeave: E,
            canSelect: R = !0,
            autoplay: k,
            registerInnerRef: V,
            registerAnimatedElementRef: S,
            surrogate: w,
            ...I
        } = e,
        [_, N] = i.useState(!1),
        [B, M] = i.useState(void 0),
        T = i.useRef(void 0),
        { triggerAnimation: z, untriggerAnimation: L } = i.useContext(c.wE),
        F = f.Sf.useSetting(),
        O = j(),
        U = null == k ? F : k,
        P = A.Ec[h],
        Y = i.useRef(null),
        D = i.useMemo(() => {
            if (null != t) return t;
            if (null != a) {
                let e = !0 === v && U;
                return x.Ay.getEmojiURL({ id: a, animated: O && !0 === y && (e || _ || !0 === C), size: P });
            }
            if (null != o) return p.Ay.getURL(o);
            throw Error("Unknown Src for Emoji");
        }, [y, U, a, o, P, O, _, C, v, t]),
        G = i.useCallback(() => {
            null != D &&
                (T.current = (0, d.yt)(D, (e) => {
                    e || M(Date.now());
                }));
        }, [D]),
        W = i.useCallback(
            (e) => {
                y && N(!0), null == a && z(o), b?.(e);
            },
            [y, o, b, z, a],
        ),
        q = i.useCallback(
            (e) => {
                y && N(!1), null == a && L(o), E?.(e);
            },
            [y, a, o, E, L],
        ),
        H = i.useMemo(() => {
            let e = null != a && "" !== a ? { "data-id": a } : { "data-name": o };
            return {
                ...I,
                className: u()("emoji", l, { jumboable: "jumbo" === h }),
                onError: G,
                onMouseEnter: W,
                onMouseLeave: q,
                "data-type": "emoji",
                ...e,
            };
        }, [l, a, o, W, q, G, I, h]);
    i.useEffect(() => () => T.current?.(), []);
    let $ = i.useCallback(
            (e) => {
                (Y.current = e), V?.(e), S?.(e);
            },
            [V, S],
        ),
        J = (0, s.A)(Y);
    return null == D || "" === D
        ? (0, r.jsx)("span", { ...H, ref: $, className: u()("emoji", "emoji-text"), children: w ?? o })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.q6, {
                      channelId: m,
                      messageId: g,
                      emojiName: o,
                      disable: !1 === U || !1 === F,
                      emojiRef: J,
                  }),
                  R
                      ? (0, r.jsx)("img", { ...H, ref: $, src: D, alt: n ?? o ?? void 0, draggable: !1 }, B)
                      : (0, r.jsx)(
                            "div",
                            {
                                ...H,
                                ref: $,
                                role: "img",
                                "aria-label": n ?? o ?? void 0,
                                style: {
                                    backgroundImage: `url(${D})`,
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
function C(e) {
    let { useThoughtfullyAnimated: t } = i.useContext(m.W),
        { animate: n, registerRef: l } = t(),
        { disableAnimations: u } = i.useContext(o.Y);
    return (0, r.jsx)(h, { ...e, registerAnimatedElementRef: l, shouldAnimate: n && !u });
}
function v(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, r.jsx)(C, { ...e })
          : (0, r.jsx)(h, { ...e });
}
