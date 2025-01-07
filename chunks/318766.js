r.d(n, {
    u: function () {
        return L;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
    c = r(442837),
    d = r(704215),
    f = r(481060),
    _ = r(607070),
    h = r(540059),
    p = r(243778),
    m = r(255963),
    g = r(140465),
    E = r(125900),
    v = r(546424),
    I = r(626135),
    T = r(153066),
    b = r(981631),
    y = r(921944),
    S = r(185923),
    A = r(388032),
    N = r(659650);
let C = 20,
    R = 24,
    O = 18,
    D = 77,
    L = {
        tension: 800,
        friction: 24
    },
    x = () => {
        let e = (0, c.e7)([_.Z], () => _.Z.useReducedMotion);
        return (0, a.jsxs)('div', {
            className: N.premiumTooltipContainer,
            children: [
                (0, a.jsx)(f.LottieAnimation, {
                    className: l()(N.premiumUnlockAnimation, { [N.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => r.e('21812').then(r.t.bind(r, 741855, 19))
                }),
                (0, a.jsx)(f.Text, {
                    variant: 'text-sm/medium',
                    className: N.premiumTooltipText,
                    children: A.intl.format(A.t['/7R4q6'], {})
                })
            ]
        });
    };
function w(e, n) {
    return {
        '--custom-emoji-sprite-size': ''.concat(n ? O : R, 'px'),
        '--custom-emoji-sprite-row': Math.floor(e / C),
        '--custom-emoji-sprite-col': e % C
    };
}
function P(e) {
    let { tabIndex: n, className: r, renderButtonContents: i, active: o, onClick: C, 'aria-controls': R, focusProps: O, shouldShowSoundmojiCoachmark: P = !1 } = e,
        [M, k] = s.useState(!1),
        [U, B] = s.useState(50),
        G = M || o,
        Z = (0, T.l)(N, 'emojiButton', G ? 'Hovered' : 'Normal'),
        F = w(U, (0, h.Q3)('EmojiButton')),
        V = s.useCallback(() => {
            if (G) return;
            let e = Math.floor(Math.random() * D);
            k(!0), B(e), (0, m.x)(S.qR.EmojiButtonMouseEntered);
        }, [G, k, B]),
        j = s.useCallback(() => {
            k(!1);
        }, [k]),
        H = s.useCallback(() => (0, m.x)(S.qR.EmojiButtonFocused), []),
        Y = (0, g.B4)({ location: 'EmojiButton' }),
        [W, K] = (0, p.US)(Y ? [d.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        z = W === d.z.TRIAL_NUX_EMOJI_BUTTON,
        q = !o && z,
        Q = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
        [X, J] = s.useState(!1),
        [$, ee] = s.useState(!1),
        et = (0, E.V2)({ location: 'EmojiButton' }),
        [en, er] = (0, p.US)(P && et ? [d.z.SOUNDMOJI_COACHMARK] : []),
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
                text: () => (0, a.jsx)(x, {}),
                'aria-label': A.intl.formatToMarkdownString(A.t['/7R4q6'], {}),
                position: 'top',
                shouldShow: q,
                onTooltipHide: () => J(!1),
                onTooltipShow: () => J(q),
                tooltipClassName: N.premiumTooltip,
                tooltipContentClassName: N.premiumTooltipContainer,
                children: (s) =>
                    (0, a.jsx)(f.Button, {
                        ...e,
                        look: f.Button.Looks.BLANK,
                        size: f.Button.Sizes.NONE,
                        tabIndex: n,
                        className: l()(Z, r),
                        onMouseEnter: () => {
                            var e;
                            V(), null === (e = s.onMouseEnter) || void 0 === e || e.call(s), I.default.track(b.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                        },
                        onMouseOver: V,
                        onMouseLeave: () => {
                            var e;
                            j(), null === (e = s.onMouseLeave) || void 0 === e || e.call(s), z && K(y.L.USER_DISMISS);
                        },
                        onFocus: H,
                        onClick: (e) => {
                            var n;
                            null == C || C(e), null === (n = s.onClick) || void 0 === n || n.call(s);
                        },
                        'aria-label': A.intl.string(A.t['59QgaG']),
                        'aria-controls': R,
                        'aria-expanded': o,
                        'aria-haspopup': 'dialog',
                        focusProps: O,
                        onContextMenu: s.onContextMenu,
                        children:
                            null != i
                                ? i()
                                : (0, a.jsx)(f.Spring, {
                                      config: L,
                                      to: { value: G ? 1 : 0 },
                                      children: (e) => {
                                          let { value: n } = e;
                                          return (0, a.jsxs)(u.animated.div, {
                                              className: N.spriteContainer,
                                              style: {
                                                  ...F,
                                                  transform: n.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                              },
                                              children: [(0, a.jsx)('div', { className: l()(N.sprite, N.spriteColored, G ? N.active : N.inactive) }), (0, a.jsx)('div', { className: l()(N.sprite, z ? N.spritePremiumColored : N.spriteGreyscale, G ? N.inactive : N.active, { [N.reducedMotion]: Q }) })]
                                          });
                                      }
                                  })
                    })
            })
    });
}
n.Z = P;
