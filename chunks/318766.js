r.d(n, {
    u: function () {
        return x;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(442837),
    d = r(704215),
    f = r(481060),
    p = r(607070),
    h = r(540059),
    _ = r(243778),
    m = r(255963),
    g = r(140465),
    E = r(125900),
    v = r(546424),
    y = r(626135),
    b = r(153066),
    I = r(981631),
    T = r(921944),
    S = r(185923),
    A = r(388032),
    C = r(659650);
let N = 20,
    R = 24,
    O = 18,
    D = 77,
    x = {
        tension: 800,
        friction: 24
    },
    L = () => {
        let e = (0, c.e7)([p.Z], () => p.Z.useReducedMotion);
        return (0, a.jsxs)('div', {
            className: C.premiumTooltipContainer,
            children: [
                (0, a.jsx)(f.LottieAnimation, {
                    className: l()(C.premiumUnlockAnimation, { [C.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => r.e('21812').then(r.t.bind(r, 741855, 19))
                }),
                (0, a.jsx)(f.Text, {
                    variant: 'text-sm/medium',
                    className: C.premiumTooltipText,
                    children: A.intl.format(A.t['/7R4q6'], {})
                })
            ]
        });
    };
function w(e, n) {
    return {
        '--custom-emoji-sprite-size': ''.concat(n ? O : R, 'px'),
        '--custom-emoji-sprite-row': Math.floor(e / N),
        '--custom-emoji-sprite-col': e % N
    };
}
function P(e) {
    let { tabIndex: n, className: r, renderButtonContents: i, active: s, onClick: N, 'aria-controls': R, focusProps: O, shouldShowSoundmojiCoachmark: P = !1 } = e,
        [M, k] = o.useState(!1),
        [U, B] = o.useState(50),
        G = M || s,
        Z = (0, b.l)(C, 'emojiButton', G ? 'Hovered' : 'Normal'),
        F = w(U, (0, h.Q3)('EmojiButton')),
        V = o.useCallback(() => {
            if (G) return;
            let e = Math.floor(Math.random() * D);
            k(!0), B(e), (0, m.x)(S.qR.EmojiButtonMouseEntered);
        }, [G, k, B]),
        j = o.useCallback(() => {
            k(!1);
        }, [k]),
        H = o.useCallback(() => (0, m.x)(S.qR.EmojiButtonFocused), []),
        Y = (0, g.B4)({ location: 'EmojiButton' }),
        [W, K] = (0, _.US)(Y ? [d.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        z = W === d.z.TRIAL_NUX_EMOJI_BUTTON,
        q = !s && z,
        Q = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        [X, J] = o.useState(!1),
        [$, ee] = o.useState(!1),
        et = (0, E.V2)({ location: 'EmojiButton' }),
        [en, er] = (0, _.US)(P && et ? [d.z.SOUNDMOJI_COACHMARK] : []),
        ei = !X && en === d.z.SOUNDMOJI_COACHMARK && !$;
    return (0, a.jsx)(f.Popout, {
        renderPopout: () => (0, a.jsx)(v.Z, { markAsDismissed: er }),
        position: 'top',
        align: 'right',
        shouldShow: ei,
        animationPosition: 'bottom',
        onRequestClose: () => ee(!0),
        children: (e) =>
            (0, a.jsx)(f.Tooltip, {
                text: () => (0, a.jsx)(L, {}),
                'aria-label': A.intl.formatToMarkdownString(A.t['/7R4q6'], {}),
                position: 'top',
                shouldShow: q,
                onTooltipHide: () => J(!1),
                onTooltipShow: () => J(q),
                tooltipClassName: C.premiumTooltip,
                tooltipContentClassName: C.premiumTooltipContainer,
                children: (o) =>
                    (0, a.jsx)(f.Button, {
                        ...e,
                        look: f.Button.Looks.BLANK,
                        size: f.Button.Sizes.NONE,
                        tabIndex: n,
                        className: l()(Z, r),
                        onMouseEnter: () => {
                            var e;
                            V(), null === (e = o.onMouseEnter) || void 0 === e || e.call(o), y.default.track(I.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                        },
                        onMouseOver: V,
                        onMouseLeave: () => {
                            var e;
                            j(), null === (e = o.onMouseLeave) || void 0 === e || e.call(o), z && K(T.L.USER_DISMISS);
                        },
                        onFocus: H,
                        onClick: (e) => {
                            var n;
                            null == N || N(e), null === (n = o.onClick) || void 0 === n || n.call(o);
                        },
                        'aria-label': A.intl.string(A.t['59QgaG']),
                        'aria-controls': R,
                        'aria-expanded': s,
                        'aria-haspopup': 'dialog',
                        focusProps: O,
                        onContextMenu: o.onContextMenu,
                        children:
                            null != i
                                ? i()
                                : (0, a.jsx)(f.Spring, {
                                      config: x,
                                      to: { value: G ? 1 : 0 },
                                      children: (e) => {
                                          let { value: n } = e;
                                          return (0, a.jsxs)(u.animated.div, {
                                              className: C.spriteContainer,
                                              style: {
                                                  ...F,
                                                  transform: n.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                              },
                                              children: [(0, a.jsx)('div', { className: l()(C.sprite, C.spriteColored, G ? C.active : C.inactive) }), (0, a.jsx)('div', { className: l()(C.sprite, z ? C.spritePremiumColored : C.spriteGreyscale, G ? C.inactive : C.active, { [C.reducedMotion]: Q }) })]
                                          });
                                      }
                                  })
                    })
            })
    });
}
n.Z = P;
