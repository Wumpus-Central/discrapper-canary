(n.d(t, {
    ZP: () => q,
    hU: () => Y
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
    _ = n(596454),
    f = n(607070),
    p = n(906732),
    h = n(745510),
    m = n(806966),
    g = n(409700),
    E = n(309006),
    b = n(695346),
    y = n(914010),
    O = n(594174),
    v = n(626135),
    I = n(208049),
    T = n(763296),
    S = n(697426),
    A = n(242291),
    N = n(830253),
    C = n(286654),
    R = n(981631),
    P = n(675654),
    w = n(509571),
    D = n(388032),
    L = n(419718);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            }));
    }
    return e;
}
function k(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = G(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let B = '1',
    V = 0.01,
    F = 0.1,
    Z = 0.01,
    H = 1000;
function Y(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: s = 'top', ref: l } = e;
    return (0, r.jsx)(d.ua7, {
        text: i,
        position: s,
        children: (e) =>
            (0, r.jsx)(
                d.P3F,
                j(M({}, e), {
                    innerRef: l,
                    'aria-label': i,
                    className: o()(L.secondaryButton, { [L.buttonDisabled]: t }),
                    onClick: n,
                    children: a
                })
            )
    });
}
function W(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top' } = e,
        o = (0, l.e7)([y.Z], () => y.Z.getGuildId());
    function s(e) {
        (v.default.track(R.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
            sound_id: t.soundId,
            sound_name: t.name,
            sound_guild_id: t.guildId,
            location_guild_id: o
        }),
            e.stopPropagation(),
            e.currentTarget.blur(),
            n());
    }
    return (0, r.jsx)(Y, {
        tooltipPosition: a,
        disabled: i,
        onClick: s,
        text: D.intl.formatToPlainString(D.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        children: (0, r.jsx)(d.gj8, {
            size: 'md',
            color: 'currentColor',
            className: L.secondaryIcon
        })
    });
}
function K(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: a } = (0, p.ZP)(),
        s = (0, l.e7)([T.Z], () => T.Z.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    s
                        ? (0, I.hs)(t.soundId)
                        : ((0, A.lF)({
                              sound: t,
                              location: j(M({}, a), { object: R.qAy.SOUNDBOARD_SOUND })
                          }),
                          (0, I.TB)(t.soundId)));
            },
            [s, t, a]
        );
    return (0, r.jsx)(Y, {
        disabled: n,
        onClick: c,
        text: D.intl.formatToPlainString(s ? D.t.lQLsjY : D.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        children: s
            ? (0, r.jsx)(d.r7p, {
                  size: 'xs',
                  className: o()(L.secondaryIcon, L.favoriteIconFavorite),
                  color: u.Z.unsafe_rawColors.GOLD.css
              })
            : (0, r.jsx)(d.vxU, {
                  size: 'xs',
                  color: 'currentColor',
                  className: L.secondaryIcon
              })
    });
}
function z(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== B)
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
let q = i.forwardRef(function (e, t) {
    var n,
        a,
        u,
        p,
        y,
        v,
        { sound: I, channel: T, containerClassName: R, className: x, focused: k, forceSecondaryActions: G = !1, interactive: Y = !0, enableSecondaryActions: q = !1, suppressPlaySound: X, onMouseEnter: Q, onSelectItem: J, analyticsLocations: $, buttonOverlay: ee = S.Pb.PLAY, showLockForDisabledSound: et = !0, inNitroLockedSection: en = !1, isAnimated: er = !0, isPlayingSoundOverride: ei, isSoundmoji: ea, soundmojiVisualEffectRef: eo, tooltipOverride: es, tooltipClassName: el, tooltipContentClassName: ec } = e,
        eu = U(e, ['sound', 'channel', 'containerClassName', 'className', 'focused', 'forceSecondaryActions', 'interactive', 'enableSecondaryActions', 'suppressPlaySound', 'onMouseEnter', 'onSelectItem', 'analyticsLocations', 'buttonOverlay', 'showLockForDisabledSound', 'inNitroLockedSection', 'isAnimated', 'isPlayingSoundOverride', 'isSoundmoji', 'soundmojiVisualEffectRef', 'tooltipOverride', 'tooltipClassName', 'tooltipContentClassName']);
    let { name: ed, emojiId: e_, emojiName: ef } = I,
        ep = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        eh = (0, C.z)(I, null == T ? void 0 : T.guild_id),
        { playSoundboardSound: em, previewSound: eg, isPlayingSound: eE } = (0, N.Z)(I, null != (u = null == T ? void 0 : T.id) ? u : null, null != (p = ea ? b.AY.getSetting() : null == (n = b.kU.getSetting()) ? void 0 : n.volume) ? p : 100, !ea && (null == T ? void 0 : T.isVocal()) ? w.w.VOICE : w.w.DEFAULT),
        { createMultipleConfettiAt: eb } = i.useContext(h.h),
        ey = i.useRef(null),
        eO = z(I.soundId, ey.current),
        ev = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        eI = i.useRef(V),
        eT = i.useRef(new c.Xp()),
        eS = I.soundId === B,
        eA = 'sound-'.concat(I.soundId),
        eN = (0, s.JA)(eA),
        eC = null != e_ || null != ef,
        eR = !(0, A.Nq)(ep, I, T) && !ea,
        eP = G || (q && !eR),
        ew = null != (y = m.Wq.useStore().bottomPosition) ? y : 0,
        eD = (null != (v = null == (a = ey.current) ? void 0 : a.getBoundingClientRect().bottom) ? v : 0) + 50 > ew ? 'top' : 'bottom',
        [eL, ex] = i.useState(!1),
        eM = eR && et;
    function ek() {
        X || em($);
    }
    function ej(e) {
        if ((eS && !ev && ((eI.current = Math.min(eI.current + Z, F)), Math.random() < eI.current && eb(eO.x, eO.y, void 0, void 0, { sprite: P.vv })), null != J)) return void J(e);
        ek();
    }
    let eU = W({
            sound: I,
            previewSound: eg,
            disabled: eR && !G
        }),
        eG = (e) =>
            X || eR
                ? eM
                    ? (0, r.jsx)(d.mBM, {
                          size: 'xs',
                          color: 'currentColor',
                          className: o()(L.primaryIcon, L.lockIcon, e, { [L.hasEmoji]: eC })
                      })
                    : null
                : (0, r.jsx)(d.o1U, {
                      size: 'xs',
                      color: 'currentColor',
                      className: o()(L.primaryIcon, e)
                  }),
        eB = (0, r.jsx)(K, {
            sound: I,
            disabled: !Y && !G
        }),
        eV = () =>
            eM && !en
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: L.buttonOverlayBackground }),
                          eG(L.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: L.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: L.buttonOverlayActions,
                                  children: [eP && eU, eP && eB]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: L.buttonOverlay,
                      children: [
                          (0, r.jsx)('div', { className: o()({ [L.buttonOverlayBackground]: !X }) }),
                          (0, r.jsx)('div', {
                              className: L.buttonOverlayActions,
                              children:
                                  ee === S.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(g.ZP, {
                                            sound: I,
                                            channel: T,
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
            case S.Pb.ADD:
                return (0, r.jsxs)('div', {
                    className: L.addButtonOverlay,
                    children: [
                        (0, r.jsx)('div', { className: L.buttonOverlayBackground }),
                        (0, r.jsxs)('div', {
                            className: L.buttonOverlayActions,
                            children: [
                                eU,
                                (0, r.jsxs)('div', {
                                    className: L.addButton,
                                    children: [
                                        (0, r.jsx)(d.qJs, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: L.plusSign
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'header-primary',
                                            children: D.intl.string(D.t.QqqXLS)
                                        })
                                    ]
                                }),
                                eP && eB
                            ]
                        })
                    ]
                });
            case S.Pb.NONE:
                return null;
            case S.Pb.PLAY:
            case S.Pb.SOUNDMOJI:
            default:
                return eV();
        }
    }
    i.useEffect(() => {
        let e = eT.current;
        return (
            eS &&
                e.start(H, () => {
                    eI.current = Math.max(eI.current - Z, V);
                }),
            () => e.stop()
        );
    }, [eS]);
    let eZ = (0, E.a)(ey.current);
    return (0, r.jsxs)('li', {
        ref: t,
        className: o()(L.soundButtonWrapper, R),
        onMouseEnter: Q,
        children: [
            (0, r.jsx)(d.ua7, {
                'aria-label': null != es ? I.name : void 0,
                text: null != es ? es : I.name,
                tooltipClassName: el,
                tooltipContentClassName: ec,
                position: eD,
                shouldShow: !eL,
                delay: 500,
                children: (e) =>
                    (0, r.jsxs)(
                        d.kL8,
                        j(
                            M(
                                j(M({}, eu), {
                                    buttonProps: j(M({}, eN), {
                                        id: eA,
                                        role: 'button'
                                    }),
                                    'aria-label': D.intl.formatToPlainString(D.t.tuMUJy, {
                                        emojiName: I.emojiName,
                                        soundName: I.name
                                    }),
                                    className: o()(
                                        L.soundButton,
                                        {
                                            [L.animated]: er,
                                            [L.playing]: null != ei ? ei : eE,
                                            [L.hoverActiveBackground]: X,
                                            [L.soundButtonInteractive]: Y,
                                            [L.buttonDisabled]: !Y && !G,
                                            [L.premiumDisabled]: eR && !G,
                                            [L.buttonDisabledSecondaryActionsEnabled]: !Y && G,
                                            [L.focused]: Y && k
                                        },
                                        x
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
                                        className: o()(L.soundInfo, { [L.hasEmoji]: eC }),
                                        'aria-hidden': !0,
                                        ref: ey,
                                        children: [
                                            eC &&
                                                (0, r.jsx)(_.Z, {
                                                    emojiId: e_,
                                                    emojiName: ef,
                                                    className: L.emoji
                                                }),
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-xs/medium',
                                                color: Y ? void 0 : 'text-muted',
                                                className: o()(L.soundName, { [L.hasEmoji]: eC }),
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
            !I.available &&
                (0, r.jsx)(d.ua7, {
                    text: D.intl.string(D.t.MDOXJS),
                    children: (e) => (0, r.jsx)('div', M({ className: L.unavailableTooltip }, e))
                }),
            !0 === ea &&
                (0, r.jsx)(E.Z, {
                    sound: I,
                    containerDimensions: eZ,
                    ref: eo
                })
        ]
    });
});
