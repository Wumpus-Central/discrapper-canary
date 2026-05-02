n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(17928),
    o = n(724442),
    u = n(692051),
    c = n(868132),
    d = n(776231),
    m = n(830178),
    g = n(885386),
    f = n(184809),
    h = n(486020),
    p = n(690521),
    b = n(218394),
    C = n(732139);
let x = __OVERLAY__ ? () => (0, l.bG)([f.default], () => f.default.isInstanceFocused()) : b.j;
function v(e) {
    let {
            src: t,
            alt: n,
            className: s,
            emojiId: l,
            emojiName: u,
            channelId: m,
            messageId: f,
            animated: b,
            size: v = "default",
            isInteracting: A = !1,
            shouldAnimate: y,
            onMouseEnter: j,
            onMouseLeave: N,
            canSelect: R = !0,
            autoplay: E,
            registerInnerRef: S,
            registerAnimatedElementRef: w,
            surrogate: V,
            ...k
        } = e,
        [M, _] = r.useState(!1),
        [I, z] = r.useState(void 0),
        B = r.useRef(void 0),
        { triggerAnimation: T, untriggerAnimation: F } = r.useContext(c.wE),
        U = g.Sf.useSetting(),
        O = x(),
        L = null == E ? U : E,
        P = C.Ec[v],
        W = r.useRef(null),
        Y = r.useMemo(() => {
            if (null != t) return t;
            if (null != l) {
                let e = !0 === y && L;
                return h.Ay.getEmojiURL({ id: l, animated: O && !0 === b && (e || M || !0 === A), size: P });
            }
            if (null != u) return p.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
        }, [b, L, l, u, P, O, M, A, y, t]),
        D = r.useCallback(() => {
            null != Y &&
                (B.current = (0, d.yt)(Y, (e) => {
                    e || z(Date.now());
                }));
        }, [Y]),
        G = r.useCallback(
            (e) => {
                b && _(!0), null == l && T(u), j?.(e);
            },
            [b, u, j, T, l],
        ),
        q = r.useCallback(
            (e) => {
                b && _(!1), null == l && F(u), N?.(e);
            },
            [b, l, u, N, F],
        ),
        H = r.useMemo(() => {
            let e = null != l && "" !== l ? { "data-id": l } : { "data-name": u };
            return {
                ...k,
                className: a()("emoji", s, { jumboable: "jumbo" === v }),
                onError: D,
                onMouseEnter: G,
                onMouseLeave: q,
                "data-type": "emoji",
                ...e,
            };
        }, [s, l, u, G, q, D, k, v]);
    r.useEffect(() => () => B.current?.(), []);
    let $ = r.useCallback(
            (e) => {
                (W.current = e), S?.(e), w?.(e);
            },
            [S, w],
        ),
        J = (0, o.A)(W);
    return null == Y || "" === Y
        ? (0, i.jsx)("span", { ...H, ref: $, className: a()("emoji", "emoji-text"), children: V ?? u })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.q6, {
                      channelId: m,
                      messageId: f,
                      emojiName: u,
                      disable: !1 === L || !1 === U,
                      emojiRef: J,
                  }),
                  R
                      ? (0, i.jsx)("img", { ...H, ref: $, src: Y, alt: n ?? u ?? void 0, draggable: !1 }, I)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...H,
                                ref: $,
                                role: "img",
                                "aria-label": n ?? u ?? void 0,
                                style: {
                                    backgroundImage: `url(${Y})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                },
                            },
                            I,
                        ),
              ],
          });
}
function A(e) {
    let { useThoughtfullyAnimated: t } = r.useContext(m.W),
        { animate: n, registerRef: s } = t(),
        { disableAnimations: a } = r.useContext(u.Y);
    return (0, i.jsx)(v, { ...e, registerAnimatedElementRef: s, shouldAnimate: n && !a });
}
function y(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, i.jsx)(A, { ...e })
          : (0, i.jsx)(v, { ...e });
}
