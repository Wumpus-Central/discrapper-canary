"use strict";
n.d(t, { A: () => R, B: () => C });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(311907),
    u = n(554146),
    c = n(435371),
    d = n(397927),
    _ = n(775602),
    f = n(379848),
    h = n(189551),
    p = n(526292),
    g = n(821589),
    E = n(49999),
    A = n(307731),
    I = n(985018),
    T = n(767091);
let y = 20,
    S = 18,
    v = 77,
    C = { tension: 800, friction: 24 };
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return {
        "--custom-emoji-sprite-size": `${t}px`,
        "--custom-emoji-sprite-row": Math.floor(e / y),
        "--custom-emoji-sprite-col": e % y,
    };
}
function N(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: a,
            onMouseEnter: u,
            onMouseLeave: c,
            onContextMenu: f,
            onFocus: p,
            spriteClassName: E,
            spriteSize: I,
            ref: y,
            ...S
        } = e,
        [N, R] = i.useState(!1),
        [O, D] = i.useState(50),
        L = N || a,
        w = (0, g.t)(T, "emojiButton", L ? "Hovered" : "Normal"),
        x = b(O, I),
        P = i.useCallback(() => {
            if (L) return;
            let e = Math.floor(Math.random() * v);
            R(!0), D(e), (0, h.K)(A.Vl.EmojiButtonMouseEntered);
        }, [L, R, D]),
        M = i.useCallback(() => {
            R(!1);
        }, [R]),
        k = i.useCallback(() => (0, h.K)(A.Vl.EmojiButtonFocused), []),
        U = (0, l.bG)([_.A], () => _.A.useReducedMotion);
    return (0, r.jsx)(d.DUT, {
        innerRef: y,
        className: s()(w, t),
        "aria-expanded": a,
        onMouseEnter: () => {
            P(), u?.();
        },
        onMouseOver: P,
        onMouseLeave: () => {
            M(), c?.();
        },
        onFocus: () => {
            k(), p?.();
        },
        onContextMenu: f,
        ...S,
        children:
            null != n
                ? n()
                : (0, r.jsx)(d.c7X, {
                      config: C,
                      to: { value: +!!L },
                      children: (e) => {
                          let { value: t } = e;
                          return (0, r.jsxs)(o.animated.div, {
                              className: T.spriteContainer,
                              style: { ...x, transform: t.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                              children: [
                                  (0, r.jsx)("div", {
                                      className: s()(T.sprite, T.spriteColored, L ? T.active : T.inactive),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: s()(
                                          T.sprite,
                                          T.spriteGreyscale,
                                          L ? T.inactive : T.active,
                                          { [T.reducedMotion]: U },
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
            "aria-label": t = I.intl.string(I.t.lPHwuQ),
            tooltipText: a,
            active: o,
            onClick: h,
            "aria-controls": g,
            ref: A,
            keyboardShortcut: y,
            canShowNUXPremiumTooltip: S = !1,
            ...v
        } = e,
        C = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        b = (0, p.k0)(),
        [R, O] = (0, f.kn)(b ? [u.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        D = S && R === u.M.TRIAL_NUX_EMOJI_BUTTON,
        L = !o && D,
        w = i.useRef(null),
        x = A ?? w,
        P = () =>
            (0, r.jsx)(N, {
                ref: x,
                onMouseLeave: () => {
                    D && O(E.i.USER_DISMISS);
                },
                onClick: (e) => {
                    h?.(e);
                },
                "aria-label": t,
                "aria-controls": g,
                active: o,
                spriteClassName: D ? T.spritePremiumColored : void 0,
                ...v,
            });
    return null == a
        ? P()
        : L
          ? (0, r.jsx)(c.un, {
                targetElementRef: x,
                body: I.intl.format(I.t["/7R4q4"], {}),
                asset: (0, r.jsx)(d.akl, {
                    className: s()(T.premiumUnlockAnimation, { [T.reducedMotion]: C }),
                    loop: !1,
                    shouldAnimate: !C,
                    pauseAtFrame: C ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: P(),
            })
          : (0, r.jsx)(c.m_, { targetElementRef: x, shouldShow: !0, text: a, keyboardShortcut: y, children: P() });
}
