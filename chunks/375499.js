"use strict";
n.d(t, { A: () => C, B: () => N });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(311907),
    u = n(554146),
    c = n(459192),
    d = n(990078),
    _ = n(939249),
    f = n(805901),
    p = n(604121),
    h = n(775602),
    E = n(932001),
    m = n(189551),
    g = n(526292),
    A = n(821589),
    I = n(49999),
    T = n(307731),
    S = n(985018),
    y = n(356983);
let N = { tension: 800, friction: 24 };
function v(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: s,
            onMouseEnter: u,
            onMouseLeave: c,
            onContextMenu: d,
            onFocus: p,
            spriteClassName: E,
            spriteSize: g,
            ref: I,
            ...S
        } = e,
        [v, C] = i.useState(!1),
        [O, R] = i.useState(50),
        b = v || s,
        D = (0, A.t)(y, "emojiButton", b ? "Hovered" : "Normal"),
        L = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(O, g),
        w = i.useCallback(() => {
            if (b) return;
            let e = Math.floor(77 * Math.random());
            C(!0), R(e), (0, m.K)(T.EmojiInteractionPoint.EmojiButtonMouseEntered);
        }, [b, C, R]),
        M = i.useCallback(() => {
            C(!1);
        }, [C]),
        P = i.useCallback(() => (0, m.K)(T.EmojiInteractionPoint.EmojiButtonFocused), []),
        x = (0, l.bG)([h.A], () => h.A.useReducedMotion);
    return (0, r.jsx)(_.D, {
        innerRef: I,
        className: a()(D, t),
        "aria-expanded": s,
        onMouseEnter: () => {
            w(), u?.();
        },
        onMouseOver: w,
        onMouseLeave: () => {
            M(), c?.();
        },
        onFocus: () => {
            P(), p?.();
        },
        onContextMenu: d,
        ...S,
        children:
            null != n
                ? n()
                : (0, r.jsx)(f.c, {
                      config: N,
                      to: { value: +!!b },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, r.jsxs)(o.animated.div, {
                              className: y.spriteContainer,
                              style: { ...L, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, r.jsx)("div", {
                                      className: a()(y.sprite, y.spriteColored, b ? y.active : y.inactive),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: a()(
                                          y.sprite,
                                          y.spriteGreyscale,
                                          b ? y.inactive : y.active,
                                          { [y.reducedMotion]: x },
                                          E,
                                      ),
                                  }),
                              ],
                          });
                      },
                  }),
    });
}
function C(e) {
    let {
            "aria-label": t = S.intl.string(S.t.lPHwuQ),
            tooltipText: s,
            active: o,
            onClick: _,
            "aria-controls": f,
            ref: m,
            keyboardShortcut: A,
            canShowNUXPremiumTooltip: T = !1,
            ...N
        } = e,
        C = (0, l.bG)([h.A], () => h.A.useReducedMotion),
        O = (0, g.k0)(),
        [R, b] = (0, E.kn)(O ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        D = T && R === u.M.TRIAL_NUX_EMOJI_BUTTON,
        L = !o && D,
        w = i.useRef(null),
        M = m ?? w,
        P = () =>
            (0, r.jsx)(v, {
                ref: M,
                onMouseLeave: () => {
                    D && b(I.i.USER_DISMISS);
                },
                onClick: (e) => {
                    _?.(e);
                },
                "aria-label": t,
                "aria-controls": f,
                active: o,
                spriteClassName: D ? y.spritePremiumColored : void 0,
                ...N,
            });
    return null == s
        ? P()
        : L
          ? (0, r.jsx)(c.u, {
                targetElementRef: M,
                body: S.intl.format(S.t["/7R4q4"], {}),
                asset: (0, r.jsx)(p.a, {
                    className: a()(y.premiumUnlockAnimation, { [y.reducedMotion]: C }),
                    loop: !1,
                    shouldAnimate: !C,
                    pauseAtFrame: C ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: P(),
            })
          : (0, r.jsx)(d.m, { targetElementRef: M, shouldShow: !0, text: s, keyboardShortcut: A, children: P() });
}
