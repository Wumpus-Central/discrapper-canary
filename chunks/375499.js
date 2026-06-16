"use strict";
n.d(t, { A: () => v, B: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(922139),
    l = n(17928),
    u = n(554146),
    c = n(459192),
    d = n(990078),
    _ = n(939249),
    h = n(805901),
    f = n(604121),
    p = n(775602),
    E = n(131607),
    m = n(189551),
    g = n(526292),
    A = n(821589),
    I = n(49999),
    T = n(307731),
    S = n(375708),
    y = n(579364);
let C = { tension: 800, friction: 24 };
function N(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: s,
            onMouseEnter: u,
            onMouseLeave: c,
            onContextMenu: d,
            onFocus: f,
            spriteClassName: E,
            spriteSize: g,
            ref: I,
            ...S
        } = e,
        [N, v] = r.useState(!1),
        [R, O] = r.useState(50),
        b = N || s,
        D = (0, A.t)(y, "emojiButton", b ? "Hovered" : "Normal"),
        L = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(R, g),
        w = r.useCallback(() => {
            if (b) return;
            let e = Math.floor(77 * Math.random());
            v(!0), O(e), (0, m.K)(T.EmojiInteractionPoint.EmojiButtonMouseEntered);
        }, [b, v, O]),
        M = r.useCallback(() => {
            v(!1);
        }, [v]),
        P = r.useCallback(() => (0, m.K)(T.EmojiInteractionPoint.EmojiButtonFocused), []),
        x = (0, l.bG)([p.Ay], () => p.Ay.useReducedMotion);
    return (0, i.jsx)(_.D, {
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
            P(), f?.();
        },
        onContextMenu: d,
        ...S,
        children:
            null != n
                ? n()
                : (0, i.jsx)(h.c, {
                      config: C,
                      to: { value: +!!b },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, i.jsxs)(o.animated.div, {
                              className: y.spriteContainer,
                              style: { ...L, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, i.jsx)("div", {
                                      className: a()(y.sprite, y.spriteColored, b ? y.active : y.inactive),
                                  }),
                                  (0, i.jsx)("div", {
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
function v(e) {
    let {
            "aria-label": t = S.intl.string(S.t.lPHwuQ),
            tooltipText: s,
            active: o,
            onClick: _,
            "aria-controls": h,
            ref: m,
            keyboardShortcut: A,
            canShowNUXPremiumTooltip: T = !1,
            ...C
        } = e,
        v = (0, l.bG)([p.Ay], () => p.Ay.useReducedMotion),
        R = (0, g.k0)(),
        [O, b] = (0, E.kn)(R ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        D = T && O === u.M.TRIAL_NUX_EMOJI_BUTTON,
        L = !o && D,
        w = r.useRef(null),
        M = m ?? w,
        P = () =>
            (0, i.jsx)(N, {
                ref: M,
                onMouseLeave: () => {
                    D && b(I.i.USER_DISMISS);
                },
                onClick: (e) => {
                    _?.(e);
                },
                "aria-label": t,
                "aria-controls": h,
                active: o,
                spriteClassName: D ? y.spritePremiumColored : void 0,
                ...C,
            });
    return null == s
        ? P()
        : L
          ? (0, i.jsx)(c.u, {
                targetElementRef: M,
                body: S.intl.format(S.t["/7R4q4"], {}),
                asset: (0, i.jsx)(f.a, {
                    className: a()(y.premiumUnlockAnimation, { [y.reducedMotion]: v }),
                    loop: !1,
                    shouldAnimate: !v,
                    pauseAtFrame: v ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: P(),
            })
          : (0, i.jsx)(d.m, { targetElementRef: M, shouldShow: !0, text: s, keyboardShortcut: A, children: P() });
}
