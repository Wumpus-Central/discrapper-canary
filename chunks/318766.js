n.d(t, {
    Z: () => x,
    u: () => w
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(695469),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(607070),
    f = n(243778),
    _ = n(255963),
    p = n(140465),
    h = n(125900),
    m = n(546424),
    g = n(626135),
    E = n(153066),
    b = n(981631),
    y = n(921944),
    O = n(185923),
    v = n(388032),
    I = n(3974);
function T(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 20,
    R = 18,
    P = 77,
    w = {
        tension: 800,
        friction: 24
    },
    D = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: I.premiumTooltipContainer,
            children: [
                (0, r.jsx)(u.Fmz, {
                    className: o()(I.premiumUnlockAnimation, { [I.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    className: I.premiumTooltipText,
                    children: v.intl.format(v.t['/7R4q6'], {})
                })
            ]
        });
    };
function L(e) {
    return {
        '--custom-emoji-sprite-size': ''.concat(R, 'px'),
        '--custom-emoji-sprite-row': Math.floor(e / C),
        '--custom-emoji-sprite-col': e % C
    };
}
let x = function (e) {
    let { tabIndex: t, className: n, renderButtonContents: a, active: T, onClick: A, 'aria-controls': C, focusProps: R, shouldShowSoundmojiCoachmark: x = !1, ref: k } = e,
        [M, j] = i.useState(!1),
        [U, G] = i.useState(50),
        B = M || T,
        V = (0, E.l)(I, 'emojiButton', B ? 'Hovered' : 'Normal'),
        F = L(U),
        Z = i.useCallback(() => {
            if (B) return;
            let e = Math.floor(Math.random() * P);
            j(!0), G(e), (0, _.x)(O.qR.EmojiButtonMouseEntered);
        }, [B, j, G]),
        H = i.useCallback(() => {
            j(!1);
        }, [j]),
        Y = i.useCallback(() => (0, _.x)(O.qR.EmojiButtonFocused), []),
        W = (0, p.B4)(),
        [K, z] = (0, f.US)(W ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        q = K === c.z.TRIAL_NUX_EMOJI_BUTTON,
        X = !T && q,
        Q = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [J, $] = i.useState(!1),
        [ee, et] = i.useState(!1),
        en = (0, h.V2)({ location: 'EmojiButton' }),
        [er, ei] = (0, f.US)(x && en ? [c.z.SOUNDMOJI_COACHMARK] : []),
        ea = !J && er === c.z.SOUNDMOJI_COACHMARK && !ee,
        eo = i.useRef(null),
        es = null != k ? k : eo;
    return (0, r.jsx)(u.yRy, {
        targetElementRef: es,
        renderPopout: () => (0, r.jsx)(m.Z, { markAsDismissed: ei }),
        position: 'top',
        align: 'right',
        shouldShow: ea,
        animationPosition: 'bottom',
        onRequestClose: () => et(!0),
        children: (e) =>
            (0, r.jsx)(u.ua7, {
                targetElementRef: es,
                text: () => (0, r.jsx)(D, {}),
                'aria-label': v.intl.formatToMarkdownString(v.t['/7R4q6'], {}),
                position: 'top',
                shouldShow: X,
                onTooltipHide: () => $(!1),
                onTooltipShow: () => $(X),
                tooltipClassName: I.premiumTooltip,
                tooltipContentClassName: I.premiumTooltipContainer,
                children: (i) =>
                    (0, r.jsx)(
                        u.zxk,
                        N(S({}, e), {
                            buttonRef: es,
                            look: u.zxk.Looks.BLANK,
                            size: u.zxk.Sizes.NONE,
                            tabIndex: t,
                            className: o()(V, n),
                            onMouseEnter: () => {
                                var e;
                                Z(), null == (e = i.onMouseEnter) || e.call(i), g.default.track(b.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                            },
                            onMouseOver: Z,
                            onMouseLeave: () => {
                                var e;
                                H(), null == (e = i.onMouseLeave) || e.call(i), q && z(y.L.USER_DISMISS);
                            },
                            onFocus: Y,
                            onClick: (e) => {
                                var t;
                                null == A || A(e), null == (t = i.onClick) || t.call(i);
                            },
                            'aria-label': v.intl.string(v.t['59QgaG']),
                            'aria-controls': C,
                            'aria-expanded': T,
                            'aria-haspopup': 'dialog',
                            focusProps: R,
                            onContextMenu: i.onContextMenu,
                            children:
                                null != a
                                    ? a()
                                    : (0, r.jsx)(u.AMe, {
                                          config: w,
                                          to: { value: +!!B },
                                          children: (e) => {
                                              let { value: t } = e;
                                              return (0, r.jsxs)(s.animated.div, {
                                                  className: I.spriteContainer,
                                                  style: N(S({}, F), {
                                                      transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                                  }),
                                                  children: [(0, r.jsx)('div', { className: o()(I.sprite, I.spriteColored, B ? I.active : I.inactive) }), (0, r.jsx)('div', { className: o()(I.sprite, q ? I.spritePremiumColored : I.spriteGreyscale, B ? I.inactive : I.active, { [I.reducedMotion]: Q }) })]
                                              });
                                          }
                                      })
                        })
                    )
            })
    });
};
