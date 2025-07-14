(n.d(t, {
    ZP: () => K,
    hU: () => Z
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(442837),
    c = n(846519),
    u = n(692547),
    d = n(481060),
    f = n(596454),
    _ = n(607070),
    p = n(906732),
    h = n(745510),
    m = n(806966),
    g = n(409700),
    E = n(309006),
    b = n(695346),
    y = n(594174),
    O = n(208049),
    v = n(763296),
    I = n(697426),
    T = n(242291),
    S = n(830253),
    A = n(286654),
    N = n(981631),
    C = n(675654),
    R = n(509571),
    P = n(388032),
    w = n(419718);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            }));
    }
    return e;
}
function x(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = j(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let U = '1',
    G = 0.01,
    B = 0.1,
    V = 0.01,
    F = 1000;
function Z(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: s = 'top', ref: l } = e;
    return (0, r.jsx)(d.ua7, {
        text: i,
        position: s,
        children: (e) =>
            (0, r.jsx)(
                d.P3F,
                k(L({}, e), {
                    innerRef: l,
                    'aria-label': i,
                    className: o()(w.secondaryButton, { [w.buttonDisabled]: t }),
                    onClick: n,
                    children: a
                })
            )
    });
}
function H(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top' } = e;
    function o(e) {
        (e.stopPropagation(), e.currentTarget.blur(), n());
    }
    return (0, r.jsx)(Z, {
        tooltipPosition: a,
        disabled: i,
        onClick: o,
        text: P.intl.formatToPlainString(P.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        children: (0, r.jsx)(d.gj8, {
            size: 'md',
            color: 'currentColor',
            className: w.secondaryIcon
        })
    });
}
function Y(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: a } = (0, p.ZP)(),
        s = (0, l.e7)([v.Z], () => v.Z.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    s
                        ? (0, O.hs)(t.soundId)
                        : ((0, T.lF)({
                              sound: t,
                              location: k(L({}, a), { object: N.qAy.SOUNDBOARD_SOUND })
                          }),
                          (0, O.TB)(t.soundId)));
            },
            [s, t, a]
        );
    return (0, r.jsx)(Z, {
        disabled: n,
        onClick: c,
        text: P.intl.formatToPlainString(s ? P.t.lQLsjY : P.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        children: s
            ? (0, r.jsx)(d.r7p, {
                  size: 'xs',
                  className: o()(w.secondaryIcon, w.favoriteIconFavorite),
                  color: u.Z.unsafe_rawColors.GOLD.css
              })
            : (0, r.jsx)(d.vxU, {
                  size: 'xs',
                  color: 'currentColor',
                  className: w.secondaryIcon
              })
    });
}
function W(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== U)
            return {
                x: 0,
                y: 0
            };
        let n = t.getBoundingClientRect();
        return {
            x: n.left + n.width / 2,
            y: n.top + n.height / 2
        };
    }, [t, e]);
}
let K = i.forwardRef(function (e, t) {
    var n,
        a,
        u,
        p,
        O,
        v,
        { sound: N, channel: D, containerClassName: x, className: j, focused: Z, forceSecondaryActions: K = !1, interactive: z = !0, enableSecondaryActions: q = !1, suppressPlaySound: X, onMouseEnter: Q, onSelectItem: J, analyticsLocations: $, buttonOverlay: ee = I.Pb.PLAY, showLockForDisabledSound: et = !0, inNitroLockedSection: en = !1, isAnimated: er = !0, isPlayingSoundOverride: ei, isSoundmoji: ea, soundmojiVisualEffectRef: eo, tooltipOverride: es, tooltipClassName: el, tooltipContentClassName: ec } = e,
        eu = M(e, ['sound', 'channel', 'containerClassName', 'className', 'focused', 'forceSecondaryActions', 'interactive', 'enableSecondaryActions', 'suppressPlaySound', 'onMouseEnter', 'onSelectItem', 'analyticsLocations', 'buttonOverlay', 'showLockForDisabledSound', 'inNitroLockedSection', 'isAnimated', 'isPlayingSoundOverride', 'isSoundmoji', 'soundmojiVisualEffectRef', 'tooltipOverride', 'tooltipClassName', 'tooltipContentClassName']);
    let { name: ed, emojiId: ef, emojiName: e_ } = N,
        ep = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
        eh = (0, A.z)(N, null == D ? void 0 : D.guild_id),
        { playSoundboardSound: em, previewSound: eg, isPlayingSound: eE } = (0, S.Z)(N, null != (u = null == D ? void 0 : D.id) ? u : null, null != (p = ea ? b.AY.getSetting() : null == (n = b.kU.getSetting()) ? void 0 : n.volume) ? p : 100, !ea && (null == D ? void 0 : D.isVocal()) ? R.w.VOICE : R.w.DEFAULT),
        { createMultipleConfettiAt: eb } = i.useContext(h.h),
        ey = i.useRef(null),
        eO = W(N.soundId, ey.current),
        ev = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        eI = i.useRef(G),
        eT = i.useRef(new c.Xp()),
        eS = N.soundId === U,
        eA = 'sound-'.concat(N.soundId),
        eN = (0, s.JA)(eA),
        eC = null != ef || null != e_,
        eR = !(0, T.Nq)(ep, N, D) && !ea,
        eP = K || (q && !eR),
        ew = null != (O = m.Wq.useStore().bottomPosition) ? O : 0,
        eD = (null != (v = null == (a = ey.current) ? void 0 : a.getBoundingClientRect().bottom) ? v : 0) + 50 > ew ? 'top' : 'bottom',
        [eL, ex] = i.useState(!1),
        ek = eR && et;
    function eM() {
        X || em($);
    }
    function ej(e) {
        if ((eS && !ev && ((eI.current = Math.min(eI.current + V, B)), Math.random() < eI.current && eb(eO.x, eO.y, void 0, void 0, { sprite: C.vv })), null != J)) return void J(e);
        eM();
    }
    let eU = H({
            sound: N,
            previewSound: eg,
            disabled: eR && !K
        }),
        eG = (e) =>
            X || eR
                ? ek
                    ? (0, r.jsx)(d.mBM, {
                          size: 'xs',
                          color: 'currentColor',
                          className: o()(w.primaryIcon, w.lockIcon, e, { [w.hasEmoji]: eC })
                      })
                    : null
                : (0, r.jsx)(d.o1U, {
                      size: 'xs',
                      color: 'currentColor',
                      className: o()(w.primaryIcon, e)
                  }),
        eB = (0, r.jsx)(Y, {
            sound: N,
            disabled: !z && !K
        }),
        eV = () =>
            ek && !en
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: w.buttonOverlayBackground }),
                          eG(w.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: w.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: w.buttonOverlayActions,
                                  children: [eP && eU, eP && eB]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: w.buttonOverlay,
                      children: [
                          (0, r.jsx)('div', { className: o()({ [w.buttonOverlayBackground]: !X }) }),
                          (0, r.jsx)('div', {
                              className: w.buttonOverlayActions,
                              children:
                                  ee === I.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(g.ZP, {
                                            sound: N,
                                            channel: D,
                                            setTooltipShowing: ex
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eP && eU, eG(), eP && eB]
                                        })
                          })
                      ]
                  });
    function eF() {
        switch (ee) {
            case I.Pb.ADD:
                return (0, r.jsxs)('div', {
                    className: w.addButtonOverlay,
                    children: [
                        (0, r.jsx)('div', { className: w.buttonOverlayBackground }),
                        (0, r.jsxs)('div', {
                            className: w.buttonOverlayActions,
                            children: [
                                eU,
                                (0, r.jsxs)('div', {
                                    className: w.addButton,
                                    children: [
                                        (0, r.jsx)(d.qJs, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: w.plusSign
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'header-primary',
                                            children: P.intl.string(P.t.QqqXLS)
                                        })
                                    ]
                                }),
                                eP && eB
                            ]
                        })
                    ]
                });
            case I.Pb.NONE:
                return null;
            case I.Pb.PLAY:
            case I.Pb.SOUNDMOJI:
            default:
                return eV();
        }
    }
    i.useEffect(() => {
        let e = eT.current;
        return (
            eS &&
                e.start(F, () => {
                    eI.current = Math.max(eI.current - V, G);
                }),
            () => e.stop()
        );
    }, [eS]);
    let eZ = (0, E.a)(ey.current);
    return (0, r.jsxs)('li', {
        ref: t,
        className: o()(w.soundButtonWrapper, x),
        onMouseEnter: Q,
        children: [
            (0, r.jsx)(d.ua7, {
                'aria-label': null != es ? N.name : void 0,
                text: null != es ? es : N.name,
                tooltipClassName: el,
                tooltipContentClassName: ec,
                position: eD,
                shouldShow: !eL,
                delay: 500,
                children: (e) =>
                    (0, r.jsxs)(
                        d.kL8,
                        k(
                            L(
                                k(L({}, eu), {
                                    buttonProps: k(L({}, eN), {
                                        id: eA,
                                        role: 'button'
                                    }),
                                    'aria-label': P.intl.formatToPlainString(P.t.tuMUJy, {
                                        emojiName: N.emojiName,
                                        soundName: N.name
                                    }),
                                    className: o()(
                                        w.soundButton,
                                        {
                                            [w.animated]: er,
                                            [w.playing]: null != ei ? ei : eE,
                                            [w.hoverActiveBackground]: X,
                                            [w.soundButtonInteractive]: z,
                                            [w.buttonDisabled]: !z && !K,
                                            [w.premiumDisabled]: eR && !K,
                                            [w.buttonDisabledSecondaryActionsEnabled]: !z && K,
                                            [w.focused]: z && Z
                                        },
                                        j
                                    )
                                }),
                                e
                            ),
                            {
                                onClick: (t) => {
                                    var n;
                                    (null == e || null == (n = e.onClick) || n.call(e), null == ej || ej(t));
                                },
                                onContextMenu: q && !eR ? eh : void 0,
                                onMouseOver: () => {
                                    var t;
                                    return null != es ? (null == (t = e.onMouseEnter) ? void 0 : t.call(e)) : null;
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: o()(w.soundInfo, { [w.hasEmoji]: eC }),
                                        'aria-hidden': !0,
                                        ref: ey,
                                        children: [
                                            eC &&
                                                (0, r.jsx)(f.Z, {
                                                    emojiId: ef,
                                                    emojiName: e_,
                                                    className: w.emoji
                                                }),
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-xs/medium',
                                                color: z ? void 0 : 'text-muted',
                                                className: o()(w.soundName, { [w.hasEmoji]: eC }),
                                                children: ed
                                            })
                                        ]
                                    }),
                                    eF()
                                ]
                            }
                        )
                    )
            }),
            !N.available &&
                (0, r.jsx)(d.ua7, {
                    text: P.intl.string(P.t.MDOXJS),
                    children: (e) => (0, r.jsx)('div', L({ className: w.unavailableTooltip }, e))
                }),
            !0 === ea &&
                (0, r.jsx)(E.Z, {
                    sound: N,
                    containerDimensions: eZ,
                    ref: eo
                })
        ]
    });
});
