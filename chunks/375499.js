o.d(t, { A: () => y, B: () => E });
var i = o(477900),
    n = o(582128),
    s = o(503698),
    a = o.n(s),
    r = o(399513),
    l = o(17928),
    u = o(554146),
    c = o(939249),
    d = o(805901),
    m = o(683063),
    p = o(604121),
    h = o(866665),
    M = o(775602),
    j = o(131607),
    v = o(189551),
    f = o(526292),
    x = o(821589),
    b = o(49999),
    C = o(307731),
    k = o(105292),
    A = o(346089);
let E = { tension: 800, friction: 24 };
function N(e) {
    let {
            className: t,
            renderButtonContents: o,
            active: s,
            onMouseEnter: u,
            onMouseLeave: m,
            onContextMenu: p,
            onFocus: h,
            spriteClassName: j,
            spriteSize: f,
            ref: b,
            ...k
        } = e,
        [N, y] = n.useState(!1),
        [R, S] = n.useState(50),
        _ = N || s,
        g = (0, x.t)(A, "emojiButton", _ ? "Hovered" : "Normal"),
        I = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(R, f),
        w = n.useCallback(() => {
            if (_) return;
            let e = Math.floor(77 * Math.random());
            (y(!0), S(e), (0, v.K)(C.EmojiInteractionPoint.EmojiButtonMouseEntered));
        }, [_, y, S]),
        B = n.useCallback(() => {
            y(!1);
        }, [y]),
        T = n.useCallback(() => (0, v.K)(C.EmojiInteractionPoint.EmojiButtonFocused), []),
        U = (0, l.bG)([M.Ay], () => M.Ay.useReducedMotion);
    return (0, i.jsx)(c.D, {
        innerRef: b,
        className: a()(g, t),
        "aria-expanded": s,
        onMouseEnter: () => {
            (w(), u?.());
        },
        onMouseOver: w,
        onMouseLeave: () => {
            (B(), m?.());
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
                      config: E,
                      to: { value: +!!_ },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, i.jsxs)(r.animated.div, {
                              className: A.spriteContainer,
                              style: { ...I, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
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
                                          j,
                                      ),
                                  }),
                              ],
                          });
                      },
                  }),
    });
}
function y(e) {
    let {
            "aria-label": t = k.intl.string(k.t.lPHwuQ),
            tooltipText: s,
            active: r,
            onClick: c,
            "aria-controls": d,
            ref: v,
            keyboardShortcut: x,
            canShowNUXPremiumTooltip: C = !1,
            ...E
        } = e,
        y = (0, l.bG)([M.Ay], () => M.Ay.useReducedMotion),
        R = (0, f.k0)(),
        [S, _] = (0, j.kn)(R ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], { bypassAutoDismiss: !0 }),
        g = C && S === u.M.TRIAL_NUX_EMOJI_BUTTON,
        I = !r && g,
        w = n.useRef(null),
        B = v ?? w;
    function T() {
        return (0, i.jsx)(N, {
            ref: B,
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
            ...E,
        });
    }
    return null == s
        ? T()
        : I
          ? (0, i.jsx)(m.u, {
                targetElementRef: B,
                body: k.intl.format(k.t["/7R4q4"], {}),
                asset: (0, i.jsx)(p.a, {
                    className: a()(A.premiumUnlockAnimation, { [A.reducedMotion]: y }),
                    loop: !1,
                    shouldAnimate: !y,
                    pauseAtFrame: y ? 149 : void 0,
                    importData: () => o.e("131838").then(o.t.bind(o, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: T(),
            })
          : (0, i.jsx)(h.m, { targetElementRef: B, shouldShow: !0, text: s, keyboardShortcut: x, children: T() });
}
