o.d(t, { A: () => R, B: () => N });
var i = o(477900),
    n = o(582128),
    s = o(503698),
    a = o.n(s),
    r = o(202091),
    l = o(17928),
    u = o(554146),
    c = o(939249),
    d = o(805901),
    m = o(683063),
    p = o(604121),
    h = o(866665),
    v = o(775602),
    M = o(131607),
    j = o(189551),
    f = o(526292),
    x = o(821589),
    b = o(49999),
    C = o(307731),
    k = o(375708),
    E = o(346089);
let N = { tension: 800, friction: 24 };
function A(e) {
    let {
            className: t,
            renderButtonContents: o,
            active: s,
            onMouseEnter: u,
            onMouseLeave: m,
            onContextMenu: p,
            onFocus: h,
            spriteClassName: M,
            spriteSize: f,
            ref: b,
            ...k
        } = e,
        [A, R] = n.useState(!1),
        [S, y] = n.useState(50),
        _ = A || s,
        g = (0, x.t)(E, "emojiButton", _ ? "Hovered" : "Normal"),
        I = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(S, f),
        w = n.useCallback(() => {
            if (_) return;
            let e = Math.floor(77 * Math.random());
            (R(!0), y(e), (0, j.K)(C.EmojiInteractionPoint.EmojiButtonMouseEntered));
        }, [_, R, y]),
        B = n.useCallback(() => {
            R(!1);
        }, [R]),
        T = n.useCallback(() => (0, j.K)(C.EmojiInteractionPoint.EmojiButtonFocused), []),
        U = (0, l.bG)([v.Ay], () => v.Ay.useReducedMotion);
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
                      config: N,
                      to: { value: +!!_ },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, i.jsxs)(r.animated.div, {
                              className: E.spriteContainer,
                              style: { ...I, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, i.jsx)("div", {
                                      className: a()(E.sprite, E.spriteColored, _ ? E.active : E.inactive),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: a()(
                                          E.sprite,
                                          E.spriteGreyscale,
                                          _ ? E.inactive : E.active,
                                          { [E.reducedMotion]: U },
                                          M,
                                      ),
                                  }),
                              ],
                          });
                      },
                  }),
    });
}
function R(e) {
    let {
            "aria-label": t = k.intl.string(k.t.lPHwuQ),
            tooltipText: s,
            active: r,
            onClick: c,
            "aria-controls": d,
            ref: j,
            keyboardShortcut: x,
            canShowNUXPremiumTooltip: C = !1,
            ...N
        } = e,
        R = (0, l.bG)([v.Ay], () => v.Ay.useReducedMotion),
        S = (0, f.k0)(),
        [y, _] = (0, M.kn)(S ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        g = C && y === u.M.TRIAL_NUX_EMOJI_BUTTON,
        I = !r && g,
        w = n.useRef(null),
        B = j ?? w;
    function T() {
        return (0, i.jsx)(A, {
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
            spriteClassName: g ? E.spritePremiumColored : void 0,
            ...N,
        });
    }
    return null == s
        ? T()
        : I
          ? (0, i.jsx)(m.u, {
                targetElementRef: B,
                body: k.intl.format(k.t["/7R4q4"], {}),
                asset: (0, i.jsx)(p.a, {
                    className: a()(E.premiumUnlockAnimation, { [E.reducedMotion]: R }),
                    loop: !1,
                    shouldAnimate: !R,
                    pauseAtFrame: R ? 149 : void 0,
                    importData: () => o.e("131838").then(o.t.bind(o, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: T(),
            })
          : (0, i.jsx)(h.m, { targetElementRef: B, shouldShow: !0, text: s, keyboardShortcut: x, children: T() });
}
