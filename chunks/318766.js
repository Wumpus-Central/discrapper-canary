n.d(t, {
    Z: () => k,
    u: () => x
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(607070),
    f = n(540059),
    p = n(243778),
    _ = n(255963),
    h = n(140465),
    m = n(125900),
    g = n(546424),
    E = n(626135),
    v = n(153066),
    b = n(981631),
    y = n(921944),
    O = n(185923),
    S = n(388032),
    I = n(139626);
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
function N(e) {
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
function C(e, t) {
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
let R = 20,
    P = 24,
    w = 18,
    D = 77,
    x = {
        tension: 800,
        friction: 24
    },
    L = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: I.premiumTooltipContainer,
            children: [
                (0, r.jsx)(u.Fmz, {
                    className: a()(I.premiumUnlockAnimation, { [I.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    className: I.premiumTooltipText,
                    children: S.NW.format(S.t['/7R4q6'], {})
                })
            ]
        });
    };
function M(e, t) {
    return {
        '--custom-emoji-sprite-size': ''.concat(t ? w : P, 'px'),
        '--custom-emoji-sprite-row': Math.floor(e / R),
        '--custom-emoji-sprite-col': e % R
    };
}
let k = function (e) {
    let { tabIndex: t, className: n, renderButtonContents: o, active: T, onClick: A, 'aria-controls': R, focusProps: P, shouldShowSoundmojiCoachmark: w = !1 } = e,
        [k, j] = i.useState(!1),
        [U, G] = i.useState(50),
        B = k || T,
        Z = (0, v.l)(I, 'emojiButton', B ? 'Hovered' : 'Normal'),
        F = M(U, (0, f.Q3)('EmojiButton')),
        V = i.useCallback(() => {
            if (B) return;
            let e = Math.floor(Math.random() * D);
            j(!0), G(e), (0, _.x)(O.qR.EmojiButtonMouseEntered);
        }, [B, j, G]),
        H = i.useCallback(() => {
            j(!1);
        }, [j]),
        W = i.useCallback(() => (0, _.x)(O.qR.EmojiButtonFocused), []),
        Y = (0, h.B4)({ location: 'EmojiButton' }),
        [K, z] = (0, p.US)(Y ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        q = K === c.z.TRIAL_NUX_EMOJI_BUTTON,
        Q = !T && q,
        X = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [J, $] = i.useState(!1),
        [ee, et] = i.useState(!1),
        en = (0, m.V2)({ location: 'EmojiButton' }),
        [er, ei] = (0, p.US)(w && en ? [c.z.SOUNDMOJI_COACHMARK] : []),
        eo = !J && er === c.z.SOUNDMOJI_COACHMARK && !ee;
    return (0, r.jsx)(u.yRy, {
        renderPopout: () => (0, r.jsx)(g.Z, { markAsDismissed: ei }),
        position: 'top',
        align: 'right',
        shouldShow: eo,
        animationPosition: 'bottom',
        onRequestClose: () => et(!0),
        children: (e) =>
            (0, r.jsx)(u.ua7, {
                text: () => (0, r.jsx)(L, {}),
                'aria-label': S.NW.formatToMarkdownString(S.t['/7R4q6'], {}),
                position: 'top',
                shouldShow: Q,
                onTooltipHide: () => $(!1),
                onTooltipShow: () => $(Q),
                tooltipClassName: I.premiumTooltip,
                tooltipContentClassName: I.premiumTooltipContainer,
                children: (i) =>
                    (0, r.jsx)(
                        u.zxk,
                        C(N({}, e), {
                            look: u.zxk.Looks.BLANK,
                            size: u.zxk.Sizes.NONE,
                            tabIndex: t,
                            className: a()(Z, n),
                            onMouseEnter: () => {
                                var e;
                                V(), null === (e = i.onMouseEnter) || void 0 === e || e.call(i), E.default.track(b.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                            },
                            onMouseOver: V,
                            onMouseLeave: () => {
                                var e;
                                H(), null === (e = i.onMouseLeave) || void 0 === e || e.call(i), q && z(y.L.USER_DISMISS);
                            },
                            onFocus: W,
                            onClick: (e) => {
                                var t;
                                null == A || A(e), null === (t = i.onClick) || void 0 === t || t.call(i);
                            },
                            'aria-label': S.NW.string(S.t['59QgaG']),
                            'aria-controls': R,
                            'aria-expanded': T,
                            'aria-haspopup': 'dialog',
                            focusProps: P,
                            onContextMenu: i.onContextMenu,
                            children:
                                null != o
                                    ? o()
                                    : (0, r.jsx)(u.AMe, {
                                          config: x,
                                          to: { value: +!!B },
                                          children: (e) => {
                                              let { value: t } = e;
                                              return (0, r.jsxs)(s.animated.div, {
                                                  className: I.spriteContainer,
                                                  style: C(N({}, F), {
                                                      transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                                  }),
                                                  children: [(0, r.jsx)('div', { className: a()(I.sprite, I.spriteColored, B ? I.active : I.inactive) }), (0, r.jsx)('div', { className: a()(I.sprite, q ? I.spritePremiumColored : I.spriteGreyscale, B ? I.inactive : I.active, { [I.reducedMotion]: X }) })]
                                              });
                                          }
                                      })
                        })
                    )
            })
    });
};
