"use strict";
n.d(t, { A: () => R, B: () => C });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(4798),
    o = n(17928),
    d = n(554146),
    c = n(939249),
    u = n(805901),
    _ = n(459192),
    E = n(604121),
    A = n(866665),
    h = n(775602),
    I = n(131607),
    f = n(189551),
    p = n(526292),
    T = n(821589),
    m = n(49999),
    g = n(307731),
    S = n(375708),
    N = n(112412);
let C = { tension: 800, friction: 24 };
function O(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: a,
            onMouseEnter: d,
            onMouseLeave: _,
            onContextMenu: E,
            onFocus: A,
            spriteClassName: I,
            spriteSize: p,
            ref: m,
            ...S
        } = e,
        [O, R] = r.useState(!1),
        [L, y] = r.useState(50),
        D = O || a,
        v = (0, T.t)(N, "emojiButton", D ? "Hovered" : "Normal"),
        b = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(L, p),
        M = r.useCallback(() => {
            if (D) return;
            let e = Math.floor(77 * Math.random());
            R(!0), y(e), (0, f.K)(g.EmojiInteractionPoint.EmojiButtonMouseEntered);
        }, [D, R, y]),
        P = r.useCallback(() => {
            R(!1);
        }, [R]),
        U = r.useCallback(() => (0, f.K)(g.EmojiInteractionPoint.EmojiButtonFocused), []),
        w = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion);
    return (0, i.jsx)(c.D, {
        innerRef: m,
        className: s()(v, t),
        "aria-expanded": a,
        onMouseEnter: () => {
            M(), d?.();
        },
        onMouseOver: M,
        onMouseLeave: () => {
            P(), _?.();
        },
        onFocus: () => {
            U(), A?.();
        },
        onContextMenu: E,
        ...S,
        children:
            null != n
                ? n()
                : (0, i.jsx)(u.c, {
                      config: C,
                      to: { value: +!!D },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, i.jsxs)(l.animated.div, {
                              className: N.spriteContainer,
                              style: { ...b, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, i.jsx)("div", {
                                      className: s()(N.sprite, N.spriteColored, D ? N.active : N.inactive),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: s()(
                                          N.sprite,
                                          N.spriteGreyscale,
                                          D ? N.inactive : N.active,
                                          { [N.reducedMotion]: w },
                                          I,
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
            "aria-label": t = S.intl.string(S.t.lPHwuQ),
            tooltipText: a,
            active: l,
            onClick: c,
            "aria-controls": u,
            ref: f,
            keyboardShortcut: T,
            canShowNUXPremiumTooltip: g = !1,
            ...C
        } = e,
        R = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion),
        L = (0, p.k0)(),
        [y, D] = (0, I.kn)(L ? [d.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        v = g && y === d.M.TRIAL_NUX_EMOJI_BUTTON,
        b = !l && v,
        M = r.useRef(null),
        P = f ?? M;
    function U() {
        return (0, i.jsx)(O, {
            ref: P,
            onMouseLeave: () => {
                v && D(m.i.USER_DISMISS);
            },
            onClick: (e) => {
                c?.(e);
            },
            "aria-label": t,
            "aria-controls": u,
            active: l,
            spriteClassName: v ? N.spritePremiumColored : void 0,
            ...C,
        });
    }
    return null == a
        ? U()
        : b
          ? (0, i.jsx)(_.u, {
                targetElementRef: P,
                body: S.intl.format(S.t["/7R4q4"], {}),
                asset: (0, i.jsx)(E.a, {
                    className: s()(N.premiumUnlockAnimation, { [N.reducedMotion]: R }),
                    loop: !1,
                    shouldAnimate: !R,
                    pauseAtFrame: R ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: U(),
            })
          : (0, i.jsx)(A.m, { targetElementRef: P, shouldShow: !0, text: a, keyboardShortcut: T, children: U() });
}
