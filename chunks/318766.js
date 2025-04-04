n.d(t, {
    Z: () => j,
    u: () => L
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
    _ = n(243778),
    p = n(255963),
    h = n(140465),
    m = n(125900),
    g = n(546424),
    E = n(626135),
    b = n(153066),
    y = n(981631),
    v = n(921944),
    O = n(185923),
    I = n(388032),
    S = n(3974);
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
    L = {
        tension: 800,
        friction: 24
    },
    x = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: S.premiumTooltipContainer,
            children: [
                (0, r.jsx)(u.Fmz, {
                    className: a()(S.premiumUnlockAnimation, { [S.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    className: S.premiumTooltipText,
                    children: I.NW.format(I.t['/7R4q6'], {})
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
function k(e, t) {
    let { tabIndex: n, className: o, renderButtonContents: T, active: A, onClick: R, 'aria-controls': P, focusProps: w, shouldShowSoundmojiCoachmark: k = !1 } = e,
        [j, U] = i.useState(!1),
        [G, B] = i.useState(50),
        F = j || A,
        V = (0, b.l)(S, 'emojiButton', F ? 'Hovered' : 'Normal'),
        Z = M(G, (0, f.Q3)('EmojiButton')),
        H = i.useCallback(() => {
            if (F) return;
            let e = Math.floor(Math.random() * D);
            U(!0), B(e), (0, p.x)(O.qR.EmojiButtonMouseEntered);
        }, [F, U, B]),
        W = i.useCallback(() => {
            U(!1);
        }, [U]),
        Y = i.useCallback(() => (0, p.x)(O.qR.EmojiButtonFocused), []),
        K = (0, h.B4)(),
        [z, q] = (0, _.US)(K ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        Q = z === c.z.TRIAL_NUX_EMOJI_BUTTON,
        X = !A && Q,
        J = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        er = (0, m.V2)({ location: 'EmojiButton' }),
        [ei, eo] = (0, _.US)(k && er ? [c.z.SOUNDMOJI_COACHMARK] : []),
        ea = !$ && ei === c.z.SOUNDMOJI_COACHMARK && !et;
    return (0, r.jsx)(u.yRy, {
        renderPopout: () => (0, r.jsx)(g.Z, { markAsDismissed: eo }),
        position: 'top',
        align: 'right',
        shouldShow: ea,
        animationPosition: 'bottom',
        onRequestClose: () => en(!0),
        children: (e) =>
            (0, r.jsx)(u.ua7, {
                text: () => (0, r.jsx)(x, {}),
                'aria-label': I.NW.formatToMarkdownString(I.t['/7R4q6'], {}),
                position: 'top',
                shouldShow: X,
                onTooltipHide: () => ee(!1),
                onTooltipShow: () => ee(X),
                tooltipClassName: S.premiumTooltip,
                tooltipContentClassName: S.premiumTooltipContainer,
                children: (i) =>
                    (0, r.jsx)(
                        u.zxk,
                        C(N({}, e), {
                            buttonRef: t,
                            look: u.zxk.Looks.BLANK,
                            size: u.zxk.Sizes.NONE,
                            tabIndex: n,
                            className: a()(V, o),
                            onMouseEnter: () => {
                                var e;
                                H(), null == (e = i.onMouseEnter) || e.call(i), E.default.track(y.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                            },
                            onMouseOver: H,
                            onMouseLeave: () => {
                                var e;
                                W(), null == (e = i.onMouseLeave) || e.call(i), Q && q(v.L.USER_DISMISS);
                            },
                            onFocus: Y,
                            onClick: (e) => {
                                var t;
                                null == R || R(e), null == (t = i.onClick) || t.call(i);
                            },
                            'aria-label': I.NW.string(I.t['59QgaG']),
                            'aria-controls': P,
                            'aria-expanded': A,
                            'aria-haspopup': 'dialog',
                            focusProps: w,
                            onContextMenu: i.onContextMenu,
                            children:
                                null != T
                                    ? T()
                                    : (0, r.jsx)(u.AMe, {
                                          config: L,
                                          to: { value: +!!F },
                                          children: (e) => {
                                              let { value: t } = e;
                                              return (0, r.jsxs)(s.animated.div, {
                                                  className: S.spriteContainer,
                                                  style: C(N({}, Z), {
                                                      transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                                  }),
                                                  children: [(0, r.jsx)('div', { className: a()(S.sprite, S.spriteColored, F ? S.active : S.inactive) }), (0, r.jsx)('div', { className: a()(S.sprite, Q ? S.spritePremiumColored : S.spriteGreyscale, F ? S.inactive : S.active, { [S.reducedMotion]: J }) })]
                                              });
                                          }
                                      })
                        })
                    )
            })
    });
}
let j = i.forwardRef(k);
