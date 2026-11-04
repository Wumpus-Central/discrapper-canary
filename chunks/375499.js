var i = o(477900),
    s = o(582128),
    n = o(503698),
    a = o.n(n),
    r = o(736819),
    l = o(855986),
    u = o(554146),
    c = o(939249),
    d = o(805901),
    m = o(683063),
    p = o(604121),
    h = o(866665),
    M = o(775602),
    v = o(263775),
    f = o(189551),
    j = o(526292),
    x = o(821589),
    b = o(49999),
    C = o(307731),
    k = o(792996),
    A = o(346089);
let N = { tension: 800, friction: 24 };
function y(e) {
    let {
            className: t,
            renderButtonContents: o,
            active: n,
            onMouseEnter: u,
            onMouseLeave: m,
            onContextMenu: p,
            onFocus: h,
            spriteClassName: v,
            spriteSize: j,
            ref: b,
            ...k
        } = e,
        [y, R] = s.useState(!1),
        [S, E] = s.useState(50),
        _ = y || n,
        g = (0, x.t)(A, "emojiButton", _ ? "Hovered" : "Normal"),
        w = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(S, j),
        B = s.useCallback(() => {
            if (_) return;
            let e = Math.floor(77 * Math.random());
            (R(!0), E(e), (0, f.K)(C.Vl.EmojiButtonMouseEntered));
        }, [_, R, E]),
        I = s.useCallback(() => {
            R(!1);
        }, [R]),
        T = s.useCallback(() => (0, f.K)(C.Vl.EmojiButtonFocused), []),
        U = (0, l.bG)([M.Ay], () => M.Ay.useReducedMotion);
    return (0, i.jsx)(c.D, {
        innerRef: b,
        className: a()(g, t),
        "aria-expanded": n,
        onMouseEnter: () => {
            (B(), u?.());
        },
        onMouseOver: B,
        onMouseLeave: () => {
            (I(), m?.());
        },
        onFocus: () => {
            (T(), h?.());
        },
        onContextMenu: p,
        ...k,
        children:
            null != o
                ? o()
                : (0, i.jsx)(d.c, {
                      config: N,
                      to: { value: +!!_ },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, i.jsxs)(r.animated.div, {
                              className: A.spriteContainer,
                              style: { ...w, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, i.jsx)("div", {
                                      className: a()(A.sprite, A.spriteColored, _ ? A.active : A.inactive),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: a()(
                                          A.sprite,
                                          A.spriteGreyscale,
                                          _ ? A.inactive : A.active,
                                          { [A.reducedMotion]: U },
                                          v,
                                      ),
                                  }),
                              ],
                          });
                      },
                  }),
    });
}
o.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    "aria-label": t = k.intl.string(k.t.lPHwuQ),
                    tooltipText: n,
                    active: r,
                    onClick: c,
                    "aria-controls": d,
                    ref: f,
                    keyboardShortcut: x,
                    canShowNUXPremiumTooltip: C = !1,
                    ...N
                } = e,
                R = (0, l.bG)([M.Ay], () => M.Ay.useReducedMotion),
                S = (0, j.k0)(),
                [E, _] = (0, v.kn)(S ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], { bypassAutoDismiss: !0 }),
                g = C && E === u.M.TRIAL_NUX_EMOJI_BUTTON,
                w = !r && g,
                B = s.useRef(null),
                I = f ?? B;
            function T() {
                return (0, i.jsx)(y, {
                    ref: I,
                    onMouseLeave: () => {
                        g && _(b.i.USER_DISMISS);
                    },
                    onClick: (e) => {
                        c?.(e);
                    },
                    "aria-label": t,
                    "aria-controls": d,
                    active: r,
                    spriteClassName: g ? A.spritePremiumColored : void 0,
                    ...N,
                });
            }
            return null == n
                ? T()
                : w
                  ? (0, i.jsx)(m.u, {
                        targetElementRef: I,
                        body: k.intl.format(k.t["/7R4q4"], {}),
                        asset: (0, i.jsx)(p.a, {
                            className: a()(A.premiumUnlockAnimation, { [A.reducedMotion]: R }),
                            loop: !1,
                            shouldAnimate: !R,
                            pauseAtFrame: R ? 149 : void 0,
                            importData: () => o.e(131838).then(o.t.bind(o, 650125, 19)),
                        }),
                        position: "top",
                        shouldShow: !0,
                        children: T(),
                    })
                  : (0, i.jsx)(h.m, {
                        targetElementRef: I,
                        shouldShow: !0,
                        text: n,
                        keyboardShortcut: x,
                        children: T(),
                    });
        },
        B: N,
    },
);
