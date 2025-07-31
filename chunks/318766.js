(n.d(t, {
    Z: () => P,
    u: () => N
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(855659),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(607070),
    _ = n(243778),
    f = n(255963),
    p = n(140465),
    h = n(153066),
    m = n(921944),
    g = n(185923),
    E = n(388032),
    b = n(3974);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 20,
    S = 18,
    A = 77,
    N = {
        tension: 800,
        friction: 24
    },
    C = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: b.premiumTooltipContainer,
            children: [
                (0, r.jsx)(u.Fmz, {
                    className: o()(b.premiumUnlockAnimation, { [b.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    className: b.premiumTooltipText,
                    children: E.intl.format(E.t['/7R4q6'], {})
                })
            ]
        });
    };
function R(e) {
    return {
        '--custom-emoji-sprite-size': ''.concat(S, 'px'),
        '--custom-emoji-sprite-row': Math.floor(e / T),
        '--custom-emoji-sprite-col': e % T
    };
}
let P = function (e) {
    let { tabIndex: t, className: n, renderButtonContents: a, active: y, onClick: v, 'aria-controls': T, focusProps: S, ref: P } = e,
        [w, D] = i.useState(!1),
        [L, x] = i.useState(50),
        k = w || y,
        M = (0, h.l)(b, 'emojiButton', k ? 'Hovered' : 'Normal'),
        j = R(L),
        U = i.useCallback(() => {
            if (k) return;
            let e = Math.floor(Math.random() * A);
            (D(!0), x(e), (0, f.x)(g.qR.EmojiButtonMouseEntered));
        }, [k, D, x]),
        G = i.useCallback(() => {
            D(!1);
        }, [D]),
        B = i.useCallback(() => (0, f.x)(g.qR.EmojiButtonFocused), []),
        V = (0, p.B4)(),
        [F, Z] = (0, _.US)(V ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        H = F === c.z.TRIAL_NUX_EMOJI_BUTTON,
        Y = !y && H,
        W = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        K = i.useRef(null),
        z = null != P ? P : K;
    return (0, r.jsx)(u.ua7, {
        targetElementRef: z,
        text: () => (0, r.jsx)(C, {}),
        'aria-label': E.intl.formatToMarkdownString(E.t['/7R4q6'], {}),
        position: 'top',
        shouldShow: Y,
        tooltipClassName: b.premiumTooltip,
        tooltipContentClassName: b.premiumTooltipContainer,
        children: (e) =>
            (0, r.jsx)(u.P3F, {
                innerRef: z,
                tabIndex: t,
                className: o()(M, n),
                onMouseEnter: () => {
                    var t;
                    (U(), null == (t = e.onMouseEnter) || t.call(e));
                },
                onMouseOver: U,
                onMouseLeave: () => {
                    var t;
                    (G(), null == (t = e.onMouseLeave) || t.call(e), H && Z(m.L.USER_DISMISS));
                },
                onFocus: B,
                onClick: (t) => {
                    var n;
                    (null == v || v(t), null == (n = e.onClick) || n.call(e));
                },
                'aria-label': E.intl.string(E.t['59QgaG']),
                'aria-controls': T,
                'aria-expanded': y,
                'aria-haspopup': 'dialog',
                focusProps: S,
                onContextMenu: e.onContextMenu,
                children:
                    null != a
                        ? a()
                        : (0, r.jsx)(u.AMe, {
                              config: N,
                              to: { value: +!!k },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(s.animated.div, {
                                      className: b.spriteContainer,
                                      style: I(O({}, j), {
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                      }),
                                      children: [(0, r.jsx)('div', { className: o()(b.sprite, b.spriteColored, k ? b.active : b.inactive) }), (0, r.jsx)('div', { className: o()(b.sprite, H ? b.spritePremiumColored : b.spriteGreyscale, k ? b.inactive : b.active, { [b.reducedMotion]: W }) })]
                                  });
                              }
                          })
            })
    });
};
