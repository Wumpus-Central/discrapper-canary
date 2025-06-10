n.d(t, {
    ZP: () => Y,
    hU: () => F
}),
    n(388685);
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
    p = n(745510),
    h = n(806966),
    m = n(409700),
    g = n(309006),
    E = n(695346),
    b = n(594174),
    y = n(208049),
    O = n(763296),
    v = n(697426),
    I = n(242291),
    T = n(830253),
    S = n(286654),
    A = n(675654),
    N = n(509571),
    C = n(388032),
    R = n(419718);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = M(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let k = '1',
    j = 0.01,
    U = 0.1,
    G = 0.01,
    B = 1000;
function F(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: s = 'top', ref: l } = e;
    return (0, r.jsx)(d.ua7, {
        text: i,
        position: s,
        children: (e) =>
            (0, r.jsx)(
                d.P3F,
                L(w({}, e), {
                    innerRef: l,
                    'aria-label': i,
                    className: o()(R.secondaryButton, { [R.buttonDisabled]: t }),
                    onClick: n,
                    children: a
                })
            )
    });
}
function V(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top' } = e;
    function o(e) {
        e.stopPropagation(), e.currentTarget.blur(), n();
    }
    return (0, r.jsx)(F, {
        tooltipPosition: a,
        disabled: i,
        onClick: o,
        text: C.intl.formatToPlainString(C.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        children: (0, r.jsx)(d.gj8, {
            size: 'md',
            color: 'currentColor',
            className: R.secondaryIcon
        })
    });
}
function Z(e) {
    let { sound: t, disabled: n = !1 } = e,
        a = (0, l.e7)([O.Z], () => O.Z.isFavoriteSound(t.soundId), [t.soundId]),
        s = i.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), a ? (0, y.hs)(t.soundId) : (0, y.TB)(t.soundId);
            },
            [a, t.soundId]
        );
    return (0, r.jsx)(F, {
        disabled: n,
        onClick: s,
        text: C.intl.formatToPlainString(a ? C.t.lQLsjY : C.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        children: a
            ? (0, r.jsx)(d.r7p, {
                  size: 'xs',
                  className: o()(R.secondaryIcon, R.favoriteIconFavorite),
                  color: u.Z.unsafe_rawColors.GOLD.css
              })
            : (0, r.jsx)(d.vxU, {
                  size: 'xs',
                  color: 'currentColor',
                  className: R.secondaryIcon
              })
    });
}
function H(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== k)
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
let Y = i.forwardRef(function (e, t) {
    var n,
        a,
        u,
        y,
        O,
        P,
        { sound: D, channel: M, containerClassName: F, className: Y, focused: W, forceSecondaryActions: K = !1, interactive: z = !0, enableSecondaryActions: q = !1, suppressPlaySound: X, onMouseEnter: Q, onSelectItem: J, analyticsLocations: $, buttonOverlay: ee = v.Pb.PLAY, showLockForDisabledSound: et = !0, inNitroLockedSection: en = !1, isAnimated: er = !0, isPlayingSoundOverride: ei, isSoundmoji: ea, soundmojiVisualEffectRef: eo, tooltipOverride: es, tooltipClassName: el, tooltipContentClassName: ec } = e,
        eu = x(e, ['sound', 'channel', 'containerClassName', 'className', 'focused', 'forceSecondaryActions', 'interactive', 'enableSecondaryActions', 'suppressPlaySound', 'onMouseEnter', 'onSelectItem', 'analyticsLocations', 'buttonOverlay', 'showLockForDisabledSound', 'inNitroLockedSection', 'isAnimated', 'isPlayingSoundOverride', 'isSoundmoji', 'soundmojiVisualEffectRef', 'tooltipOverride', 'tooltipClassName', 'tooltipContentClassName']);
    let { name: ed, emojiId: ef, emojiName: e_ } = D,
        ep = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        eh = (0, S.z)(D, null == M ? void 0 : M.guild_id),
        { playSoundboardSound: em, previewSound: eg, isPlayingSound: eE } = (0, T.Z)(D, null != (u = null == M ? void 0 : M.id) ? u : null, null != (y = ea ? E.AY.getSetting() : null == (n = E.kU.getSetting()) ? void 0 : n.volume) ? y : 100, !ea && (null == M ? void 0 : M.isVocal()) ? N.w.VOICE : N.w.DEFAULT),
        { createMultipleConfettiAt: eb } = i.useContext(p.h),
        ey = i.useRef(null),
        eO = H(D.soundId, ey.current),
        ev = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        eI = i.useRef(j),
        eT = i.useRef(new c.Xp()),
        eS = D.soundId === k,
        eA = 'sound-'.concat(D.soundId),
        eN = (0, s.JA)(eA),
        eC = null != ef || null != e_,
        eR = !(0, I.Nq)(ep, D, M) && !ea,
        eP = K || (q && !eR),
        ew = null != (O = h.Wq.useStore().bottomPosition) ? O : 0,
        eD = (null != (P = null == (a = ey.current) ? void 0 : a.getBoundingClientRect().bottom) ? P : 0) + 50 > ew ? 'top' : 'bottom',
        [eL, ex] = i.useState(!1),
        eM = eR && et;
    function ek() {
        X || em($);
    }
    function ej(e) {
        if ((eS && !ev && ((eI.current = Math.min(eI.current + G, U)), Math.random() < eI.current && eb(eO.x, eO.y, void 0, void 0, { sprite: A.vv })), null != J)) return void J(e);
        ek();
    }
    let eU = V({
            sound: D,
            previewSound: eg,
            disabled: eR && !K
        }),
        eG = (e) =>
            X || eR
                ? eM
                    ? (0, r.jsx)(d.mBM, {
                          size: 'xs',
                          color: 'currentColor',
                          className: o()(R.primaryIcon, R.lockIcon, e, { [R.hasEmoji]: eC })
                      })
                    : null
                : (0, r.jsx)(d.o1U, {
                      size: 'xs',
                      color: 'currentColor',
                      className: o()(R.primaryIcon, e)
                  }),
        eB = (0, r.jsx)(Z, {
            sound: D,
            disabled: !z && !K
        }),
        eF = () =>
            eM && !en
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: R.buttonOverlayBackground }),
                          eG(R.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: R.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: R.buttonOverlayActions,
                                  children: [eP && eU, eP && eB]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: R.buttonOverlay,
                      children: [
                          (0, r.jsx)('div', { className: o()({ [R.buttonOverlayBackground]: !X }) }),
                          (0, r.jsx)('div', {
                              className: R.buttonOverlayActions,
                              children:
                                  ee === v.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(m.ZP, {
                                            sound: D,
                                            channel: M,
                                            setTooltipShowing: ex
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eP && eU, eG(), eP && eB]
                                        })
                          })
                      ]
                  });
    function eV() {
        switch (ee) {
            case v.Pb.ADD:
                return (0, r.jsxs)('div', {
                    className: R.addButtonOverlay,
                    children: [
                        (0, r.jsx)('div', { className: R.buttonOverlayBackground }),
                        (0, r.jsxs)('div', {
                            className: R.buttonOverlayActions,
                            children: [
                                eU,
                                (0, r.jsxs)('div', {
                                    className: R.addButton,
                                    children: [
                                        (0, r.jsx)(d.qJs, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: R.plusSign
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'header-primary',
                                            children: C.intl.string(C.t.QqqXLS)
                                        })
                                    ]
                                }),
                                eP && eB
                            ]
                        })
                    ]
                });
            case v.Pb.NONE:
                return null;
            case v.Pb.PLAY:
            case v.Pb.SOUNDMOJI:
            default:
                return eF();
        }
    }
    i.useEffect(() => {
        let e = eT.current;
        return (
            eS &&
                e.start(B, () => {
                    eI.current = Math.max(eI.current - G, j);
                }),
            () => e.stop()
        );
    }, [eS]);
    let eZ = (0, g.a)(ey.current);
    return (0, r.jsxs)('li', {
        ref: t,
        className: o()(R.soundButtonWrapper, F),
        onMouseEnter: Q,
        children: [
            (0, r.jsx)(d.ua7, {
                'aria-label': null != es ? D.name : void 0,
                text: null != es ? es : D.name,
                tooltipClassName: el,
                tooltipContentClassName: ec,
                position: eD,
                shouldShow: !eL,
                delay: 500,
                children: (e) =>
                    (0, r.jsxs)(
                        d.kL8,
                        L(
                            w(
                                L(w({}, eu), {
                                    buttonProps: L(w({}, eN), {
                                        id: eA,
                                        role: 'button'
                                    }),
                                    'aria-label': C.intl.formatToPlainString(C.t.tuMUJy, {
                                        emojiName: D.emojiName,
                                        soundName: D.name
                                    }),
                                    className: o()(
                                        R.soundButton,
                                        {
                                            [R.animated]: er,
                                            [R.playing]: null != ei ? ei : eE,
                                            [R.hoverActiveBackground]: X,
                                            [R.soundButtonInteractive]: z,
                                            [R.buttonDisabled]: !z && !K,
                                            [R.premiumDisabled]: eR && !K,
                                            [R.buttonDisabledSecondaryActionsEnabled]: !z && K,
                                            [R.focused]: z && W
                                        },
                                        Y
                                    )
                                }),
                                e
                            ),
                            {
                                onClick: (t) => {
                                    var n;
                                    null == e || null == (n = e.onClick) || n.call(e), null == ej || ej(t);
                                },
                                onContextMenu: q && !eR ? eh : void 0,
                                onMouseOver: () => {
                                    var t;
                                    return null != es ? (null == (t = e.onMouseEnter) ? void 0 : t.call(e)) : null;
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: o()(R.soundInfo, { [R.hasEmoji]: eC }),
                                        'aria-hidden': !0,
                                        ref: ey,
                                        children: [
                                            eC &&
                                                (0, r.jsx)(f.Z, {
                                                    emojiId: ef,
                                                    emojiName: e_,
                                                    className: R.emoji
                                                }),
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-xs/medium',
                                                color: z ? void 0 : 'text-muted',
                                                className: o()(R.soundName, { [R.hasEmoji]: eC }),
                                                children: ed
                                            })
                                        ]
                                    }),
                                    eV()
                                ]
                            }
                        )
                    )
            }),
            !D.available &&
                (0, r.jsx)(d.ua7, {
                    text: C.intl.string(C.t.MDOXJS),
                    children: (e) => (0, r.jsx)('div', w({ className: R.unavailableTooltip }, e))
                }),
            !0 === ea &&
                (0, r.jsx)(g.Z, {
                    sound: D,
                    containerDimensions: eZ,
                    ref: eo
                })
        ]
    });
});
