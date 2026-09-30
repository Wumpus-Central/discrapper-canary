n.d(t, { A: () => j });
var i = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    l = n(17928),
    o = n(724442),
    u = n(692051),
    c = n(868132),
    d = n(498924),
    m = n(776231),
    g = n(830178),
    f = n(885386),
    h = n(309913),
    p = n(486020),
    b = n(690521),
    C = n(218394),
    x = n(732139);
let v = __OVERLAY__ ? () => (0, l.bG)([h.default], () => h.default.isInstanceFocused()) : C.j;
function y(e) {
    let {
            src: t,
            alt: n,
            className: s,
            emojiId: l,
            emojiName: u,
            channelId: g,
            messageId: h,
            animated: C,
            size: y = "default",
            isInteracting: A = !1,
            shouldAnimate: j,
            onMouseEnter: N,
            onMouseLeave: w,
            canSelect: R = !0,
            autoplay: E,
            registerInnerRef: S,
            registerAnimatedElementRef: V,
            surrogate: k,
            ...M
        } = e,
        [_, I] = r.useState(!1),
        [z, B] = r.useState(void 0),
        T = r.useRef(void 0),
        { triggerAnimation: F, untriggerAnimation: U } = r.useContext(d.w),
        O = f.Sf.useSetting(),
        L = v(),
        P = null == E ? O : E,
        W = x.Ec[y],
        Y = r.useRef(null),
        D = r.useMemo(() => {
            if (null != t) return t;
            if (null != l) {
                let e = !0 === j && P;
                return p.Ay.getEmojiURL({ id: l, animated: L && !0 === C && (e || _ || !0 === A), size: W });
            }
            if (null != u) return b.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
        }, [C, P, l, u, W, L, _, A, j, t]),
        G = r.useCallback(() => {
            null != D &&
                (T.current = (0, m.yt)(D, (e) => {
                    e || B(Date.now());
                }));
        }, [D]),
        H = r.useCallback(
            (e) => {
                (C && I(!0), null == l && F(u), N?.(e));
            },
            [C, u, N, F, l],
        ),
        q = r.useCallback(
            (e) => {
                (C && I(!1), null == l && U(u), w?.(e));
            },
            [C, l, u, w, U],
        ),
        $ = r.useMemo(() => {
            let e = null != l && "" !== l ? { "data-id": l } : { "data-name": u };
            return {
                ...M,
                className: a()("emoji", s, { jumboable: "jumbo" === y }),
                onError: G,
                onMouseEnter: H,
                onMouseLeave: q,
                "data-type": "emoji",
                ...e,
            };
        }, [s, l, u, H, q, G, M, y]);
    r.useEffect(() => () => T.current?.(), []);
    let J = r.useCallback(
            (e) => {
                ((Y.current = e), S?.(e), V?.(e));
            },
            [S, V],
        ),
        K = (0, o.A)(Y);
    return null == D || "" === D
        ? (0, i.jsx)("span", { ...$, ref: J, className: a()("emoji", "emoji-text"), children: k ?? u })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.q, {
                      channelId: g,
                      messageId: h,
                      emojiName: u,
                      disable: !1 === P || !1 === O,
                      emojiRef: K,
                  }),
                  R
                      ? (0, i.jsx)("img", { ...$, ref: J, src: D, alt: n ?? u ?? void 0, draggable: !1 }, z)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...$,
                                ref: J,
                                role: "img",
                                "aria-label": n ?? u ?? void 0,
                                style: {
                                    backgroundImage: `url(${D})`,
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
function A(e) {
    let { useThoughtfullyAnimated: t } = r.useContext(g.W),
        { animate: n, registerRef: s } = t(),
        { disableAnimations: a } = r.useContext(u.Y);
    return (0, i.jsx)(y, { ...e, registerAnimatedElementRef: s, shouldAnimate: n && !a });
}
function j(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, i.jsx)(A, { ...e })
          : (0, i.jsx)(y, { ...e });
}
