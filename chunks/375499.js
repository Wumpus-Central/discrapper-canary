"use strict";
n.d(t, { A: () => R, B: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(382222),
    l = n(311907),
    u = n(554146),
    c = n(435371),
    d = n(397927),
    _ = n(775602),
    f = n(932001),
    p = n(189551),
    h = n(526292),
    m = n(821589),
    E = n(49999),
    g = n(307731),
    A = n(985018),
    I = n(467348);
let T = 20,
    S = 18,
    y = 77,
    v = { tension: 800, friction: 24 };
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return {
        "--custom-emoji-sprite-size": `${t}px`,
        "--custom-emoji-sprite-row": Math.floor(e / T),
        "--custom-emoji-sprite-col": e % T,
    };
}
function C(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: s,
            onMouseEnter: u,
            onMouseLeave: c,
            onContextMenu: f,
            onFocus: h,
            spriteClassName: E,
            spriteSize: A,
            ref: T,
            ...S
        } = e,
        [C, R] = i.useState(!1),
        [O, b] = i.useState(50),
        D = C || s,
        L = (0, m.t)(I, "emojiButton", D ? "Hovered" : "Normal"),
        w = N(O, A),
        M = i.useCallback(() => {
            if (D) return;
            let e = Math.floor(Math.random() * y);
            R(!0), b(e), (0, p.K)(g.Vl.EmojiButtonMouseEntered);
        }, [D, R, b]),
        P = i.useCallback(() => {
            R(!1);
        }, [R]),
        x = i.useCallback(() => (0, p.K)(g.Vl.EmojiButtonFocused), []),
        k = (0, l.bG)([_.A], () => _.A.useReducedMotion);
    return (0, r.jsx)(d.DUT, {
        innerRef: T,
        className: a()(L, t),
        "aria-expanded": s,
        onMouseEnter: () => {
            M(), u?.();
        },
        onMouseOver: M,
        onMouseLeave: () => {
            P(), c?.();
        },
        onFocus: () => {
            x(), h?.();
        },
        onContextMenu: f,
        ...S,
        children:
            null != n
                ? n()
                : (0, r.jsx)(d.c7X, {
                      config: v,
                      to: { value: +!!D },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, r.jsxs)(o.animated.div, {
                              className: I.spriteContainer,
                              style: { ...w, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, r.jsx)("div", {
                                      className: a()(I.sprite, I.spriteColored, D ? I.active : I.inactive),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: a()(
                                          I.sprite,
                                          I.spriteGreyscale,
                                          D ? I.inactive : I.active,
                                          { [I.reducedMotion]: k },
                                          E,
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
            "aria-label": t = A.intl.string(A.t.lPHwuQ),
            tooltipText: s,
            active: o,
            onClick: p,
            "aria-controls": m,
            ref: g,
            keyboardShortcut: T,
            canShowNUXPremiumTooltip: S = !1,
            ...y
        } = e,
        v = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        N = (0, h.k0)(),
        [R, O] = (0, f.kn)(N ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        b = S && R === u.M.TRIAL_NUX_EMOJI_BUTTON,
        D = !o && b,
        L = i.useRef(null),
        w = g ?? L,
        M = () =>
            (0, r.jsx)(C, {
                ref: w,
                onMouseLeave: () => {
                    b && O(E.i.USER_DISMISS);
                },
                onClick: (e) => {
                    p?.(e);
                },
                "aria-label": t,
                "aria-controls": m,
                active: o,
                spriteClassName: b ? I.spritePremiumColored : void 0,
                ...y,
            });
    return null == s
        ? M()
        : D
          ? (0, r.jsx)(c.un, {
                targetElementRef: w,
                body: A.intl.format(A.t["/7R4q4"], {}),
                asset: (0, r.jsx)(d.akl, {
                    className: a()(I.premiumUnlockAnimation, { [I.reducedMotion]: v }),
                    loop: !1,
                    shouldAnimate: !v,
                    pauseAtFrame: v ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: M(),
            })
          : (0, r.jsx)(c.m_, { targetElementRef: w, shouldShow: !0, text: s, keyboardShortcut: T, children: M() });
}
