"use strict";
n.d(t, { A: () => S, B: () => y });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(123924),
    o = n(17928),
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
    C = n(821589),
    A = n(49999),
    E = n(307731),
    I = n(985018),
    v = n(579364);
let y = { tension: 800, friction: 24 };
function b(e) {
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
            ref: A,
            ...I
        } = e,
        [b, S] = i.useState(!1),
        [N, j] = i.useState(50),
        T = b || s,
        w = (0, C.t)(v, "emojiButton", T ? "Hovered" : "Normal"),
        R = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(N, x),
        L = i.useCallback(() => {
            if (T) return;
            let e = Math.floor(77 * Math.random());
            S(!0), j(e), (0, _.K)(E.EmojiInteractionPoint.EmojiButtonMouseEntered);
        }, [T, S, j]),
        k = i.useCallback(() => {
            S(!1);
        }, [S]),
        O = i.useCallback(() => (0, _.K)(E.EmojiInteractionPoint.EmojiButtonFocused), []),
        M = (0, o.bG)([f.A], () => f.A.useReducedMotion);
    return (0, l.jsx)(h.D, {
        innerRef: A,
        className: a()(w, t),
        "aria-expanded": s,
        onMouseEnter: () => {
            L(), c?.();
        },
        onMouseOver: L,
        onMouseLeave: () => {
            k(), u?.();
        },
        onFocus: () => {
            O(), p?.();
        },
        onContextMenu: d,
        ...I,
        children:
            null != n
                ? n()
                : (0, l.jsx)(m.c, {
                      config: y,
                      to: { value: +!!T },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, l.jsxs)(r.animated.div, {
                              className: v.spriteContainer,
                              style: { ...R, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, l.jsx)("div", {
                                      className: a()(v.sprite, v.spriteColored, T ? v.active : v.inactive),
                                  }),
                                  (0, l.jsx)("div", {
                                      className: a()(
                                          v.sprite,
                                          v.spriteGreyscale,
                                          T ? v.inactive : v.active,
                                          { [v.reducedMotion]: M },
                                          g,
                                      ),
                                  }),
                              ],
                          });
                      },
                  }),
    });
}
function S(e) {
    let {
            "aria-label": t = I.intl.string(I.t.lPHwuQ),
            tooltipText: s,
            active: r,
            onClick: h,
            "aria-controls": m,
            ref: _,
            keyboardShortcut: C,
            canShowNUXPremiumTooltip: E = !1,
            ...y
        } = e,
        S = (0, o.bG)([f.A], () => f.A.useReducedMotion),
        N = (0, x.k0)(),
        [j, T] = (0, g.kn)(N ? [c.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        w = E && j === c.M.TRIAL_NUX_EMOJI_BUTTON,
        R = !r && w,
        L = i.useRef(null),
        k = _ ?? L,
        O = () =>
            (0, l.jsx)(b, {
                ref: k,
                onMouseLeave: () => {
                    w && T(A.i.USER_DISMISS);
                },
                onClick: (e) => {
                    h?.(e);
                },
                "aria-label": t,
                "aria-controls": m,
                active: r,
                spriteClassName: w ? v.spritePremiumColored : void 0,
                ...y,
            });
    return null == s
        ? O()
        : R
          ? (0, l.jsx)(u.u, {
                targetElementRef: k,
                body: I.intl.format(I.t["/7R4q4"], {}),
                asset: (0, l.jsx)(p.a, {
                    className: a()(v.premiumUnlockAnimation, { [v.reducedMotion]: S }),
                    loop: !1,
                    shouldAnimate: !S,
                    pauseAtFrame: S ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: O(),
            })
          : (0, l.jsx)(d.m, { targetElementRef: k, shouldShow: !0, text: s, keyboardShortcut: C, children: O() });
}
