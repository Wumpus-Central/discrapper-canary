"use strict";
n.d(t, { A: () => v, B: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(17928),
    u = n(554146),
    d = n(459192),
    c = n(990078),
    _ = n(939249),
    h = n(805901),
    f = n(604121),
    E = n(775602),
    p = n(131607),
    m = n(189551),
    g = n(526292),
    A = n(821589),
    I = n(49999),
    T = n(307731),
    S = n(375708),
    N = n(579364);
let C = { tension: 800, friction: 24 };
function y(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: s,
            onMouseEnter: u,
            onMouseLeave: d,
            onContextMenu: c,
            onFocus: f,
            spriteClassName: p,
            spriteSize: g,
            ref: I,
            ...S
        } = e,
        [y, v] = r.useState(!1),
        [R, O] = r.useState(50),
        b = y || s,
        L = (0, A.t)(N, "emojiButton", b ? "Hovered" : "Normal"),
        D = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(R, g),
        P = r.useCallback(() => {
            if (b) return;
            let e = Math.floor(77 * Math.random());
            v(!0), O(e), (0, m.K)(T.EmojiInteractionPoint.EmojiButtonMouseEntered);
        }, [b, v, O]),
        w = r.useCallback(() => {
            v(!1);
        }, [v]),
        M = r.useCallback(() => (0, m.K)(T.EmojiInteractionPoint.EmojiButtonFocused), []),
        x = (0, l.bG)([E.Ay], () => E.Ay.useReducedMotion);
    return (0, i.jsx)(_.D, {
        innerRef: I,
        className: a()(L, t),
        "aria-expanded": s,
        onMouseEnter: () => {
            P(), u?.();
        },
        onMouseOver: P,
        onMouseLeave: () => {
            w(), d?.();
        },
        onFocus: () => {
            M(), f?.();
        },
        onContextMenu: c,
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
                              className: N.spriteContainer,
                              style: { ...D, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, i.jsx)("div", {
                                      className: a()(N.sprite, N.spriteColored, b ? N.active : N.inactive),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: a()(
                                          N.sprite,
                                          N.spriteGreyscale,
                                          b ? N.inactive : N.active,
                                          { [N.reducedMotion]: x },
                                          p,
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
        v = (0, l.bG)([E.Ay], () => E.Ay.useReducedMotion),
        R = (0, g.k0)(),
        [O, b] = (0, p.kn)(R ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        L = T && O === u.M.TRIAL_NUX_EMOJI_BUTTON,
        D = !o && L,
        P = r.useRef(null),
        w = m ?? P;
    function M() {
        return (0, i.jsx)(y, {
            ref: w,
            onMouseLeave: () => {
                L && b(I.i.USER_DISMISS);
            },
            onClick: (e) => {
                _?.(e);
            },
            "aria-label": t,
            "aria-controls": h,
            active: o,
            spriteClassName: L ? N.spritePremiumColored : void 0,
            ...C,
        });
    }
    return null == s
        ? M()
        : D
          ? (0, i.jsx)(d.u, {
                targetElementRef: w,
                body: S.intl.format(S.t["/7R4q4"], {}),
                asset: (0, i.jsx)(f.a, {
                    className: a()(N.premiumUnlockAnimation, { [N.reducedMotion]: v }),
                    loop: !1,
                    shouldAnimate: !v,
                    pauseAtFrame: v ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: M(),
            })
          : (0, i.jsx)(c.m, { targetElementRef: w, shouldShow: !0, text: s, keyboardShortcut: A, children: M() });
}
