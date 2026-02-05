"use strict";
n.d(t, { A: () => N, B: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(311907),
    u = n(554146),
    c = n(435371),
    d = n(397927),
    _ = n(775602),
    f = n(379848),
    p = n(189551),
    h = n(526292),
    m = n(821589),
    g = n(49999),
    E = n(307731),
    A = n(985018),
    I = n(767091);
let T = 20,
    y = 18,
    S = 77,
    v = { tension: 800, friction: 24 };
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
    return {
        "--custom-emoji-sprite-size": `${t}px`,
        "--custom-emoji-sprite-row": Math.floor(e / T),
        "--custom-emoji-sprite-col": e % T,
    };
}
function b(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: a,
            onMouseEnter: u,
            onMouseLeave: c,
            onContextMenu: f,
            onFocus: h,
            spriteClassName: g,
            spriteSize: A,
            ref: T,
            ...y
        } = e,
        [b, N] = i.useState(!1),
        [R, O] = i.useState(50),
        D = b || a,
        L = (0, m.t)(I, "emojiButton", D ? "Hovered" : "Normal"),
        w = C(R, A),
        x = i.useCallback(() => {
            if (D) return;
            let e = Math.floor(Math.random() * S);
            N(!0), O(e), (0, p.K)(E.Vl.EmojiButtonMouseEntered);
        }, [D, N, O]),
        P = i.useCallback(() => {
            N(!1);
        }, [N]),
        M = i.useCallback(() => (0, p.K)(E.Vl.EmojiButtonFocused), []),
        k = (0, l.bG)([_.A], () => _.A.useReducedMotion);
    return (0, r.jsx)(d.DUT, {
        innerRef: T,
        className: s()(L, t),
        "aria-expanded": a,
        onMouseEnter: () => {
            x(), u?.();
        },
        onMouseOver: x,
        onMouseLeave: () => {
            P(), c?.();
        },
        onFocus: () => {
            M(), h?.();
        },
        onContextMenu: f,
        ...y,
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
                                      className: s()(I.sprite, I.spriteColored, D ? I.active : I.inactive),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: s()(
                                          I.sprite,
                                          I.spriteGreyscale,
                                          D ? I.inactive : I.active,
                                          { [I.reducedMotion]: k },
                                          g,
                                      ),
                                  }),
                              ],
                          });
                      },
                  }),
    });
}
function N(e) {
    let {
            "aria-label": t = A.intl.string(A.t.lPHwuQ),
            tooltipText: a,
            active: o,
            onClick: p,
            "aria-controls": m,
            ref: E,
            keyboardShortcut: T,
            canShowNUXPremiumTooltip: y = !1,
            ...S
        } = e,
        v = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        C = (0, h.k0)(),
        [N, R] = (0, f.kn)(C ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        O = y && N === u.M.TRIAL_NUX_EMOJI_BUTTON,
        D = !o && O,
        L = i.useRef(null),
        w = E ?? L,
        x = () =>
            (0, r.jsx)(b, {
                ref: w,
                onMouseLeave: () => {
                    O && R(g.i.USER_DISMISS);
                },
                onClick: (e) => {
                    p?.(e);
                },
                "aria-label": t,
                "aria-controls": m,
                active: o,
                spriteClassName: O ? I.spritePremiumColored : void 0,
                ...S,
            });
    return null == a
        ? x()
        : D
          ? (0, r.jsx)(c.un, {
                targetElementRef: w,
                body: A.intl.format(A.t["/7R4q4"], {}),
                asset: (0, r.jsx)(d.akl, {
                    className: s()(I.premiumUnlockAnimation, { [I.reducedMotion]: v }),
                    loop: !1,
                    shouldAnimate: !v,
                    pauseAtFrame: v ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: x(),
            })
          : (0, r.jsx)(c.m_, { targetElementRef: w, shouldShow: !0, text: a, keyboardShortcut: T, children: x() });
}
