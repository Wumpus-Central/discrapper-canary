"use strict";
n.d(t, { A: () => O, B: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(17928),
    d = n(554146),
    _ = n(459192),
    u = n(990078),
    c = n(939249),
    E = n(805901),
    h = n(604121),
    m = n(775602),
    f = n(932001),
    g = n(189551),
    p = n(526292),
    A = n(821589),
    I = n(49999),
    T = n(307731),
    S = n(985018),
    N = n(579364);
let C = { tension: 800, friction: 24 };
function R(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: s,
            onMouseEnter: d,
            onMouseLeave: _,
            onContextMenu: u,
            onFocus: h,
            spriteClassName: f,
            spriteSize: p,
            ref: I,
            ...S
        } = e,
        [R, O] = r.useState(!1),
        [y, v] = r.useState(50),
        D = R || s,
        L = (0, A.t)(N, "emojiButton", D ? "Hovered" : "Normal"),
        b = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return {
                "--custom-emoji-sprite-size": `${t}px`,
                "--custom-emoji-sprite-row": Math.floor(e / 20),
                "--custom-emoji-sprite-col": e % 20,
            };
        })(y, p),
        w = r.useCallback(() => {
            if (D) return;
            let e = Math.floor(77 * Math.random());
            O(!0), v(e), (0, g.K)(T.EmojiInteractionPoint.EmojiButtonMouseEntered);
        }, [D, O, v]),
        P = r.useCallback(() => {
            O(!1);
        }, [O]),
        k = r.useCallback(() => (0, g.K)(T.EmojiInteractionPoint.EmojiButtonFocused), []),
        M = (0, l.bG)([m.A], () => m.A.useReducedMotion);
    return (0, i.jsx)(c.D, {
        innerRef: I,
        className: a()(L, t),
        "aria-expanded": s,
        onMouseEnter: () => {
            w(), d?.();
        },
        onMouseOver: w,
        onMouseLeave: () => {
            P(), _?.();
        },
        onFocus: () => {
            k(), h?.();
        },
        onContextMenu: u,
        ...S,
        children:
            null != n
                ? n()
                : (0, i.jsx)(E.c, {
                      config: C,
                      to: { value: +!!D },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, i.jsxs)(o.animated.div, {
                              className: N.spriteContainer,
                              style: { ...b, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, i.jsx)("div", {
                                      className: a()(N.sprite, N.spriteColored, D ? N.active : N.inactive),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: a()(
                                          N.sprite,
                                          N.spriteGreyscale,
                                          D ? N.inactive : N.active,
                                          { [N.reducedMotion]: M },
                                          f,
                                      ),
                                  }),
                              ],
                          });
                      },
                  }),
    });
}
function O(e) {
    let {
            "aria-label": t = S.intl.string(S.t.lPHwuQ),
            tooltipText: s,
            active: o,
            onClick: c,
            "aria-controls": E,
            ref: g,
            keyboardShortcut: A,
            canShowNUXPremiumTooltip: T = !1,
            ...C
        } = e,
        O = (0, l.bG)([m.A], () => m.A.useReducedMotion),
        y = (0, p.k0)(),
        [v, D] = (0, f.kn)(y ? [d.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        L = T && v === d.M.TRIAL_NUX_EMOJI_BUTTON,
        b = !o && L,
        w = r.useRef(null),
        P = g ?? w,
        k = () =>
            (0, i.jsx)(R, {
                ref: P,
                onMouseLeave: () => {
                    L && D(I.i.USER_DISMISS);
                },
                onClick: (e) => {
                    c?.(e);
                },
                "aria-label": t,
                "aria-controls": E,
                active: o,
                spriteClassName: L ? N.spritePremiumColored : void 0,
                ...C,
            });
    return null == s
        ? k()
        : b
          ? (0, i.jsx)(_.u, {
                targetElementRef: P,
                body: S.intl.format(S.t["/7R4q4"], {}),
                asset: (0, i.jsx)(h.a, {
                    className: a()(N.premiumUnlockAnimation, { [N.reducedMotion]: O }),
                    loop: !1,
                    shouldAnimate: !O,
                    pauseAtFrame: O ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: k(),
            })
          : (0, i.jsx)(u.m, { targetElementRef: P, shouldShow: !0, text: s, keyboardShortcut: A, children: k() });
}
