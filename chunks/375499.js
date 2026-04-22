"use strict";
n.d(t, { A: () => b, B: () => y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(517738),
    o = n(311907),
    c = n(554146),
    u = n(459192),
    d = n(990078),
    h = n(939249),
    m = n(805901),
    p = n(604121),
    f = n(775602),
    g = n(932001),
    _ = n(189551),
    x = n(526292),
    A = n(821589),
    C = n(49999),
    E = n(307731),
    I = n(985018),
    v = n(356983);
let y = { tension: 800, friction: 24 };
function S(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: s,
            onMouseEnter: c,
            onMouseLeave: u,
            onContextMenu: d,
            onFocus: p,
            spriteClassName: g,
            spriteSize: x,
            ref: C,
            ...I
        } = e,
        [S, b] = l.useState(!1),
        [N, T] = l.useState(50),
        j = S || s,
        R = (0, A.t)(v, "emojiButton", j ? "Hovered" : "Normal"),
        w = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(N, x),
        L = l.useCallback(() => {
            if (j) return;
            let e = Math.floor(77 * Math.random());
            b(!0), T(e), (0, _.K)(E.EmojiInteractionPoint.EmojiButtonMouseEntered);
        }, [j, b, T]),
        M = l.useCallback(() => {
            b(!1);
        }, [b]),
        k = l.useCallback(() => (0, _.K)(E.EmojiInteractionPoint.EmojiButtonFocused), []),
        O = (0, o.bG)([f.A], () => f.A.useReducedMotion);
    return (0, i.jsx)(h.D, {
        innerRef: C,
        className: r()(R, t),
        "aria-expanded": s,
        onMouseEnter: () => {
            L(), c?.();
        },
        onMouseOver: L,
        onMouseLeave: () => {
            M(), u?.();
        },
        onFocus: () => {
            k(), p?.();
        },
        onContextMenu: d,
        ...I,
        children:
            null != n
                ? n()
                : (0, i.jsx)(m.c, {
                      config: y,
                      to: { value: +!!j },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, i.jsxs)(a.animated.div, {
                              className: v.spriteContainer,
                              style: { ...w, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, i.jsx)("div", {
                                      className: r()(v.sprite, v.spriteColored, j ? v.active : v.inactive),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: r()(
                                          v.sprite,
                                          v.spriteGreyscale,
                                          j ? v.inactive : v.active,
                                          { [v.reducedMotion]: O },
                                          g,
                                      ),
                                  }),
                              ],
                          });
                      },
                  }),
    });
}
function b(e) {
    let {
            "aria-label": t = I.intl.string(I.t.lPHwuQ),
            tooltipText: s,
            active: a,
            onClick: h,
            "aria-controls": m,
            ref: _,
            keyboardShortcut: A,
            canShowNUXPremiumTooltip: E = !1,
            ...y
        } = e,
        b = (0, o.bG)([f.A], () => f.A.useReducedMotion),
        N = (0, x.k0)(),
        [T, j] = (0, g.kn)(N ? [c.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        R = E && T === c.M.TRIAL_NUX_EMOJI_BUTTON,
        w = !a && R,
        L = l.useRef(null),
        M = _ ?? L,
        k = () =>
            (0, i.jsx)(S, {
                ref: M,
                onMouseLeave: () => {
                    R && j(C.i.USER_DISMISS);
                },
                onClick: (e) => {
                    h?.(e);
                },
                "aria-label": t,
                "aria-controls": m,
                active: a,
                spriteClassName: R ? v.spritePremiumColored : void 0,
                ...y,
            });
    return null == s
        ? k()
        : w
          ? (0, i.jsx)(u.u, {
                targetElementRef: M,
                body: I.intl.format(I.t["/7R4q4"], {}),
                asset: (0, i.jsx)(p.a, {
                    className: r()(v.premiumUnlockAnimation, { [v.reducedMotion]: b }),
                    loop: !1,
                    shouldAnimate: !b,
                    pauseAtFrame: b ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: k(),
            })
          : (0, i.jsx)(d.m, { targetElementRef: M, shouldShow: !0, text: s, keyboardShortcut: A, children: k() });
}
