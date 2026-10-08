n.d(t, { A: () => S });
var i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    l = n(17928),
    o = n(724442),
    u = n(692051),
    c = n(868132),
    d = n(498924),
    m = n(776231),
    h = n(830178),
    p = n(885386),
    f = n(532294),
    g = n(486020),
    C = n(690521),
    y = n(218394),
    b = n(732139);
let v = __OVERLAY__ ? () => (0, l.bG)([f.default], () => f.default.isInstanceFocused()) : y.j;
function x(e) {
    let {
            src: t,
            alt: n,
            className: r,
            emojiId: l,
            emojiName: u,
            channelId: h,
            messageId: f,
            animated: y,
            size: x = "default",
            isInteracting: A = !1,
            shouldAnimate: S,
            onMouseEnter: j,
            onMouseLeave: N,
            canSelect: E = !0,
            autoplay: R,
            registerInnerRef: w,
            registerAnimatedElementRef: V,
            surrogate: k,
            ...F
        } = e,
        [B, M] = s.useState(!1),
        [U, _] = s.useState(void 0),
        I = s.useRef(void 0),
        { triggerAnimation: z, untriggerAnimation: L } = s.useContext(d.w),
        P = p.Sf.useSetting(),
        T = v(),
        W = null == R ? P : R,
        D = b.Ec[x],
        G = s.useRef(null),
        O = s.useMemo(() => {
            if (null != t) return t;
            if (null != l) {
                let e = !0 === S && W;
                return g.Ay.getEmojiURL({ id: l, animated: T && !0 === y && (e || B || !0 === A), size: D });
            }
            if (null != u) return C.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
        }, [y, W, l, u, D, T, B, A, S, t]),
        Y = s.useCallback(() => {
            null != O &&
                (I.current = (0, m.yt)(O, (e) => {
                    e || _(Date.now());
                }));
        }, [O]),
        H = s.useCallback(
            (e) => {
                (y && M(!0), null == l && z(u), j?.(e));
            },
            [y, u, j, z, l],
        ),
        q = s.useCallback(
            (e) => {
                (y && M(!1), null == l && L(u), N?.(e));
            },
            [y, l, u, N, L],
        ),
        $ = s.useMemo(() => {
            let e = null != l && "" !== l ? { "data-id": l } : { "data-name": u };
            return {
                ...F,
                className: a()("emoji", r, { jumboable: "jumbo" === x }),
                onError: Y,
                onMouseEnter: H,
                onMouseLeave: q,
                "data-type": "emoji",
                ...e,
            };
        }, [r, l, u, H, q, Y, F, x]);
    s.useEffect(() => () => I.current?.(), []);
    let J = s.useCallback(
            (e) => {
                ((G.current = e), w?.(e), V?.(e));
            },
            [w, V],
        ),
        K = (0, o.A)(G);
    return null == O || "" === O
        ? (0, i.jsx)("span", { ...$, ref: J, className: a()("emoji", "emoji-text"), children: k ?? u })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.q, {
                      channelId: h,
                      messageId: f,
                      emojiName: u,
                      disable: !1 === W || !1 === P,
                      emojiRef: K,
                  }),
                  E
                      ? (0, i.jsx)("img", { ...$, ref: J, src: O, alt: n ?? u ?? void 0, draggable: !1 }, U)
                      : (0, i.jsx)(
                            "div",
                            {
                                ...$,
                                ref: J,
                                role: "img",
                                "aria-label": n ?? u ?? void 0,
                                style: {
                                    backgroundImage: `url(${O})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                },
                            },
                            U,
                        ),
              ],
          });
}
function A(e) {
    let { useThoughtfullyAnimated: t } = s.useContext(h.W),
        { animate: n, registerRef: r } = t(),
        { disableAnimations: a } = s.useContext(u.Y);
    return (0, i.jsx)(x, { ...e, registerAnimatedElementRef: r, shouldAnimate: n && !a });
}
function S(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, i.jsx)(A, { ...e })
          : (0, i.jsx)(x, { ...e });
}
