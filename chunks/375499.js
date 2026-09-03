n.d(t, { A: () => _, B: () => N });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(221877),
    o = n(17928),
    u = n(554146),
    c = n(939249),
    d = n(805901),
    h = n(683063),
    m = n(604121),
    f = n(866665),
    p = n(775602),
    g = n(131607),
    x = n(189551),
    A = n(526292),
    E = n(821589),
    C = n(49999),
    I = n(307731),
    y = n(375708),
    S = n(346089);
let N = { tension: 800, friction: 24 };
function v(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: s,
            onMouseEnter: u,
            onMouseLeave: h,
            onContextMenu: m,
            onFocus: f,
            spriteClassName: g,
            spriteSize: A,
            ref: C,
            ...y
        } = e,
        [v, _] = i.useState(!1),
        [T, j] = i.useState(50),
        b = v || s,
        R = (0, E.t)(S, "emojiButton", b ? "Hovered" : "Normal"),
        O = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(T, A),
        M = i.useCallback(() => {
            if (b) return;
            let e = Math.floor(77 * Math.random());
            _(!0), j(e), (0, x.K)(I.EmojiInteractionPoint.EmojiButtonMouseEntered);
        }, [b, _, j]),
        L = i.useCallback(() => {
            _(!1);
        }, [_]),
        k = i.useCallback(() => (0, x.K)(I.EmojiInteractionPoint.EmojiButtonFocused), []),
        w = (0, o.bG)([p.Ay], () => p.Ay.useReducedMotion);
    return (0, l.jsx)(c.D, {
        innerRef: C,
        className: r()(R, t),
        "aria-expanded": s,
        onMouseEnter: () => {
            M(), u?.();
        },
        onMouseOver: M,
        onMouseLeave: () => {
            L(), h?.();
        },
        onFocus: () => {
            k(), f?.();
        },
        onContextMenu: m,
        ...y,
        children:
            null != n
                ? n()
                : (0, l.jsx)(d.c, {
                      config: N,
                      to: { value: +!!b },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, l.jsxs)(a.animated.div, {
                              className: S.spriteContainer,
                              style: { ...O, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, l.jsx)("div", {
                                      className: r()(S.sprite, S.spriteColored, b ? S.active : S.inactive),
                                  }),
                                  (0, l.jsx)("div", {
                                      className: r()(
                                          S.sprite,
                                          S.spriteGreyscale,
                                          b ? S.inactive : S.active,
                                          { [S.reducedMotion]: w },
                                          g,
                                      ),
                                  }),
                              ],
                          });
                      },
                  }),
    });
}
function _(e) {
    let {
            "aria-label": t = y.intl.string(y.t.lPHwuQ),
            tooltipText: s,
            active: a,
            onClick: c,
            "aria-controls": d,
            ref: x,
            keyboardShortcut: E,
            canShowNUXPremiumTooltip: I = !1,
            ...N
        } = e,
        _ = (0, o.bG)([p.Ay], () => p.Ay.useReducedMotion),
        T = (0, A.k0)(),
        [j, b] = (0, g.kn)(T ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        R = I && j === u.M.TRIAL_NUX_EMOJI_BUTTON,
        O = !a && R,
        M = i.useRef(null),
        L = x ?? M;
    function k() {
        return (0, l.jsx)(v, {
            ref: L,
            onMouseLeave: () => {
                R && b(C.i.USER_DISMISS);
            },
            onClick: (e) => {
                c?.(e);
            },
            "aria-label": t,
            "aria-controls": d,
            active: a,
            spriteClassName: R ? S.spritePremiumColored : void 0,
            ...N,
        });
    }
    return null == s
        ? k()
        : O
          ? (0, l.jsx)(h.u, {
                targetElementRef: L,
                body: y.intl.format(y.t["/7R4q4"], {}),
                asset: (0, l.jsx)(m.a, {
                    className: r()(S.premiumUnlockAnimation, { [S.reducedMotion]: _ }),
                    loop: !1,
                    shouldAnimate: !_,
                    pauseAtFrame: _ ? 149 : void 0,
                    importData: () => n.e("131838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: k(),
            })
          : (0, l.jsx)(f.m, { targetElementRef: L, shouldShow: !0, text: s, keyboardShortcut: E, children: k() });
}
