n.d(t, {
    Z: () => x,
    u: () => O
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(607070),
    f = n(540059),
    _ = n(243778),
    p = n(255963),
    h = n(140465),
    m = n(125900),
    g = n(546424),
    E = n(626135),
    v = n(153066),
    y = n(981631),
    I = n(921944),
    T = n(185923),
    b = n(388032),
    S = n(520008);
let A = 20,
    N = 24,
    C = 18,
    R = 77,
    O = {
        tension: 800,
        friction: 24
    },
    D = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, i.jsxs)('div', {
            className: S.premiumTooltipContainer,
            children: [
                (0, i.jsx)(c.Fmz, {
                    className: s()(S.premiumUnlockAnimation, { [S.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    className: S.premiumTooltipText,
                    children: b.intl.format(b.t['/7R4q6'], {})
                })
            ]
        });
    };
function L(e, t) {
    return {
        '--custom-emoji-sprite-size': ''.concat(t ? C : N, 'px'),
        '--custom-emoji-sprite-row': Math.floor(e / A),
        '--custom-emoji-sprite-col': e % A
    };
}
let x = function (e) {
    let { tabIndex: t, className: n, renderButtonContents: a, active: A, onClick: N, 'aria-controls': C, focusProps: x, shouldShowSoundmojiCoachmark: P = !1 } = e,
        [w, M] = r.useState(!1),
        [k, U] = r.useState(50),
        G = w || A,
        B = (0, v.l)(S, 'emojiButton', G ? 'Hovered' : 'Normal'),
        Z = L(k, (0, f.Q3)('EmojiButton')),
        F = r.useCallback(() => {
            if (G) return;
            let e = Math.floor(Math.random() * R);
            M(!0), U(e), (0, p.x)(T.qR.EmojiButtonMouseEntered);
        }, [G, M, U]),
        V = r.useCallback(() => {
            M(!1);
        }, [M]),
        j = r.useCallback(() => (0, p.x)(T.qR.EmojiButtonFocused), []),
        H = (0, h.B4)({ location: 'EmojiButton' }),
        [Y, W] = (0, _.US)(H ? [u.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        K = Y === u.z.TRIAL_NUX_EMOJI_BUTTON,
        z = !A && K,
        q = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [Q, X] = r.useState(!1),
        [J, $] = r.useState(!1),
        ee = (0, m.V2)({ location: 'EmojiButton' }),
        [et, en] = (0, _.US)(P && ee ? [u.z.SOUNDMOJI_COACHMARK] : []),
        ei = !Q && et === u.z.SOUNDMOJI_COACHMARK && !J;
    return (0, i.jsx)(c.yRy, {
        renderPopout: () => (0, i.jsx)(g.Z, { markAsDismissed: en }),
        position: 'top',
        align: 'right',
        shouldShow: ei,
        animationPosition: 'bottom',
        onRequestClose: () => $(!0),
        children: (e) =>
            (0, i.jsx)(c.ua7, {
                text: () => (0, i.jsx)(D, {}),
                'aria-label': b.intl.formatToMarkdownString(b.t['/7R4q6'], {}),
                position: 'top',
                shouldShow: z,
                onTooltipHide: () => X(!1),
                onTooltipShow: () => X(z),
                tooltipClassName: S.premiumTooltip,
                tooltipContentClassName: S.premiumTooltipContainer,
                children: (r) =>
                    (0, i.jsx)(c.zxk, {
                        ...e,
                        look: c.zxk.Looks.BLANK,
                        size: c.zxk.Sizes.NONE,
                        tabIndex: t,
                        className: s()(B, n),
                        onMouseEnter: () => {
                            var e;
                            F(), null === (e = r.onMouseEnter) || void 0 === e || e.call(r), E.default.track(y.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                        },
                        onMouseOver: F,
                        onMouseLeave: () => {
                            var e;
                            V(), null === (e = r.onMouseLeave) || void 0 === e || e.call(r), K && W(I.L.USER_DISMISS);
                        },
                        onFocus: j,
                        onClick: (e) => {
                            var t;
                            null == N || N(e), null === (t = r.onClick) || void 0 === t || t.call(r);
                        },
                        'aria-label': b.intl.string(b.t['59QgaG']),
                        'aria-controls': C,
                        'aria-expanded': A,
                        'aria-haspopup': 'dialog',
                        focusProps: x,
                        onContextMenu: r.onContextMenu,
                        children:
                            null != a
                                ? a()
                                : (0, i.jsx)(c.AMe, {
                                      config: O,
                                      to: { value: G ? 1 : 0 },
                                      children: (e) => {
                                          let { value: t } = e;
                                          return (0, i.jsxs)(o.animated.div, {
                                              className: S.spriteContainer,
                                              style: {
                                                  ...Z,
                                                  transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                              },
                                              children: [(0, i.jsx)('div', { className: s()(S.sprite, S.spriteColored, G ? S.active : S.inactive) }), (0, i.jsx)('div', { className: s()(S.sprite, K ? S.spritePremiumColored : S.spriteGreyscale, G ? S.inactive : S.active, { [S.reducedMotion]: q }) })]
                                          });
                                      }
                                  })
                    })
            })
    });
};
