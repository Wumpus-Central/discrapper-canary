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
    S = n(830253),
    T = n(286654),
    A = n(675654),
    N = n(509571),
    C = n(388032),
    P = n(909937);
function R(e, t, n) {
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
                R(e, t, n[t]);
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
        i = k(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let M = '1',
    j = 0.01,
    U = 0.1,
    G = 0.01,
    B = 1000;
function F(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: s = 'top', refreshEnabled: l = !1, ref: c } = e;
    return (0, r.jsx)(d.ua7, {
        text: i,
        position: s,
        children: (e) =>
            (0, r.jsx)(
                d.P3F,
                L(w({}, e), {
                    innerRef: c,
                    'aria-label': i,
                    className: o()(l ? P.secondaryButtonRefresh : P.secondaryButton, { [P.buttonDisabled]: t }),
                    onClick: n,
                    children: a
                })
            )
    });
}
function V(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top', refreshEnabled: o = !1 } = e;
    function s(e) {
        e.stopPropagation(), e.currentTarget.blur(), n();
    }
    return (0, r.jsx)(F, {
        tooltipPosition: a,
        disabled: i,
        onClick: s,
        text: C.intl.formatToPlainString(C.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: o,
        children: (0, r.jsx)(d.gj8, {
            size: 'md',
            color: 'currentColor',
            className: P.secondaryIcon
        })
    });
}
function Z(e) {
    let { sound: t, refreshEnabled: n, disabled: a = !1 } = e,
        s = (0, l.e7)([O.Z], () => O.Z.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), s ? (0, y.hs)(t.soundId) : (0, y.TB)(t.soundId);
            },
            [s, t.soundId]
        );
    return (0, r.jsx)(F, {
        disabled: a,
        onClick: c,
        text: C.intl.formatToPlainString(s ? C.t.lQLsjY : C.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: n,
        children: s
            ? (0, r.jsx)(d.r7p, {
                  size: 'xs',
                  className: o()(P.secondaryIcon, P.favoriteIconFavorite),
                  color: u.Z.unsafe_rawColors.GOLD.css
              })
            : (0, r.jsx)(d.vxU, {
                  size: 'xs',
                  color: 'currentColor',
                  className: P.secondaryIcon
              })
    });
}
function H(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== M)
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
        R,
        D,
        k,
        F,
        Y,
        { sound: W, channel: K, containerClassName: z, className: q, focused: Q, forceSecondaryActions: X = !1, interactive: J = !0, enableSecondaryActions: $ = !1, suppressPlaySound: ee, onMouseEnter: et, onSelectItem: en, analyticsLocations: er, buttonOverlay: ei = v.Pb.PLAY, showLockForDisabledSound: ea = !0, inNitroLockedSection: eo = !1, refreshEnabled: es = !1, isAnimated: el = !0, isPlayingSoundOverride: ec, isSoundmoji: eu, soundmojiVisualEffectRef: ed, tooltipOverride: ef, tooltipClassName: e_, tooltipContentClassName: ep } = e,
        eh = x(e, ['sound', 'channel', 'containerClassName', 'className', 'focused', 'forceSecondaryActions', 'interactive', 'enableSecondaryActions', 'suppressPlaySound', 'onMouseEnter', 'onSelectItem', 'analyticsLocations', 'buttonOverlay', 'showLockForDisabledSound', 'inNitroLockedSection', 'refreshEnabled', 'isAnimated', 'isPlayingSoundOverride', 'isSoundmoji', 'soundmojiVisualEffectRef', 'tooltipOverride', 'tooltipClassName', 'tooltipContentClassName']);
    let { name: em, emojiId: eg, emojiName: eE } = W,
        eb = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        ey = (0, T.z)(W, null == K ? void 0 : K.guild_id),
        { playSoundboardSound: eO, previewSound: ev, isPlayingSound: eI, isPreviewingSound: eS } = (0, S.Z)(W, null != (O = null == K ? void 0 : K.id) ? O : null, null != (R = eu ? E.AY.getSetting() : null == (n = E.kU.getSetting()) ? void 0 : n.volume) ? R : 100, !eu && (null == K ? void 0 : K.isVocal()) ? N.w.VOICE : N.w.DEFAULT),
        { createMultipleConfettiAt: eT } = i.useContext(p.h),
        eA = i.useRef(null),
        eN = H(W.soundId, eA.current),
        eC = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        eP = i.useRef(j),
        eR = i.useRef(new c.Xp()),
        ew = W.soundId === M,
        eD = 'sound-'.concat(W.soundId),
        eL = (0, s.JA)(eD),
        ex = null != eg || null != eE,
        ek = !(0, I.Nq)(eb, W, K) && !eu,
        eM = X || ($ && !ek),
        ej = i.useRef(null),
        eU = (null != (D = null == (a = ej.current) ? void 0 : a.scrollHeight) ? D : 0) > (null != (k = null == (u = ej.current) ? void 0 : u.offsetHeight) ? k : 0),
        eG = null != (F = h.Wq.useStore().bottomPosition) ? F : 0,
        eB = (null != (Y = null == (y = eA.current) ? void 0 : y.getBoundingClientRect().bottom) ? Y : 0) + 50 > eG ? 'top' : 'bottom',
        [eF, eV] = i.useState(!1),
        eZ = ek && ea;
    function eH() {
        ee || eO(er);
    }
    function eY(e) {
        if ((ew && !eC && ((eP.current = Math.min(eP.current + G, U)), Math.random() < eP.current && eT(eN.x, eN.y, void 0, void 0, { sprite: A.vv })), null != en)) return void en(e);
        eH();
    }
    let eW = V({
            sound: W,
            previewSound: ev,
            disabled: ek && !X,
            refreshEnabled: es
        }),
        eK = (e) =>
            ee || ek || es
                ? eZ
                    ? (0, r.jsx)(d.mBM, {
                          size: 'xs',
                          color: 'currentColor',
                          className: o()(es ? P.primaryIconRefresh : P.primaryIcon, P.lockIcon, e, { [P.hasEmoji]: ex })
                      })
                    : null
                : (0, r.jsx)(d.o1U, {
                      size: 'xs',
                      color: 'currentColor',
                      className: o()(P.primaryIcon, e)
                  }),
        ez = (0, r.jsx)(Z, {
            sound: W,
            refreshEnabled: es,
            disabled: !J && !X
        }),
        eq = () =>
            eZ && !eo
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: P.buttonOverlayBackground }),
                          eK(P.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: P.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: es ? P.buttonOverlayActionsRefresh : P.buttonOverlayActions,
                                  children: [eM && eW, eM && ez]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: P.buttonOverlay,
                      children: [
                          !es && (0, r.jsx)('div', { className: o()({ [P.buttonOverlayBackground]: !ee }) }),
                          (0, r.jsx)('div', {
                              className: es ? P.buttonOverlayActionsRefresh : P.buttonOverlayActions,
                              children:
                                  ei === v.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(m.ZP, {
                                            sound: W,
                                            channel: K,
                                            setTooltipShowing: eV
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eM && eW, eK(), eM && ez]
                                        })
                          })
                      ]
                  });
    function eQ() {
        switch (ei) {
            case v.Pb.ADD:
                return (0, r.jsxs)('div', {
                    className: P.addButtonOverlay,
                    children: [
                        (0, r.jsx)('div', { className: P.buttonOverlayBackground }),
                        (0, r.jsxs)('div', {
                            className: es ? P.buttonOverlayActionsRefresh : P.buttonOverlayActions,
                            children: [
                                eW,
                                es
                                    ? (0, r.jsx)('div', {
                                          className: P.primaryIconRefresh,
                                          children: (0, r.jsx)(d.svS, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: P.plusSign
                                          })
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: P.addButton,
                                          children: [
                                              (0, r.jsx)(d.qJs, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: P.plusSign
                                              }),
                                              (0, r.jsx)(d.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-primary',
                                                  children: C.intl.string(C.t.QqqXLS)
                                              })
                                          ]
                                      }),
                                eM && ez
                            ]
                        })
                    ]
                });
            case v.Pb.NONE:
                return null;
            case v.Pb.PLAY:
            case v.Pb.SOUNDMOJI:
            default:
                return eq();
        }
    }
    i.useEffect(() => {
        let e = eR.current;
        return (
            ew &&
                e.start(B, () => {
                    eP.current = Math.max(eP.current - G, j);
                }),
            () => e.stop()
        );
    }, [ew]);
    let eX = (0, g.a)(eA.current);
    return (0, r.jsxs)('li', {
        ref: t,
        className: o()(P.soundButtonWrapper, z),
        onMouseEnter: et,
        children: [
            (0, r.jsx)(d.ua7, {
                'aria-label': null != ef ? W.name : void 0,
                text: null != ef ? ef : W.name,
                tooltipClassName: e_,
                tooltipContentClassName: ep,
                position: eB,
                shouldShow: !eF,
                delay: 500,
                children: (e) =>
                    (0, r.jsxs)(
                        d.kL8,
                        L(
                            w(
                                L(w({}, eh), {
                                    buttonProps: L(w({}, eL), {
                                        id: eD,
                                        role: 'button'
                                    }),
                                    'aria-label': C.intl.formatToPlainString(C.t.tuMUJy, {
                                        emojiName: W.emojiName,
                                        soundName: W.name
                                    }),
                                    className: o()(
                                        es ? P.soundButtonRefresh : P.soundButton,
                                        {
                                            [P.animated]: el,
                                            [P.playing]: null != ec ? ec : eI,
                                            [P.previewing]: eS,
                                            [P.hoverActiveBackground]: ee && !es,
                                            [P.soundButtonInteractive]: J && !es,
                                            [P.soundButtonInteractiveRefresh]: J && es,
                                            [P.buttonDisabled]: !J && !X,
                                            [P.premiumDisabled]: ek && !X,
                                            [P.premiumDisabledRefresh]: ek && es,
                                            [P.buttonDisabledSecondaryActionsEnabled]: !J && X,
                                            [P.focused]: J && Q
                                        },
                                        q
                                    )
                                }),
                                e
                            ),
                            {
                                onClick: (t) => {
                                    var n;
                                    null == e || null == (n = e.onClick) || n.call(e), null == eY || eY(t);
                                },
                                onContextMenu: $ && !ek ? ey : void 0,
                                onMouseOver: () => {
                                    var t;
                                    return null != ef || (eU && es && !0 !== eu) ? (null == (t = e.onMouseEnter) ? void 0 : t.call(e)) : null;
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: o()(es ? P.soundInfoRefresh : P.soundInfo, { [P.hasEmoji]: ex }),
                                        'aria-hidden': !0,
                                        ref: eA,
                                        children: [
                                            ex &&
                                                (es
                                                    ? (0, r.jsx)('div', {
                                                          className: P.emojiCircle,
                                                          children: (0, r.jsx)(f.Z, {
                                                              emojiId: eg,
                                                              emojiName: eE,
                                                              className: P.emoji
                                                          })
                                                      })
                                                    : (0, r.jsx)(f.Z, {
                                                          emojiId: eg,
                                                          emojiName: eE,
                                                          className: P.emoji
                                                      })),
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-xs/medium',
                                                color: J ? void 0 : 'text-muted',
                                                className: o()(es ? P.soundNameRefresh : P.soundName, { [P.hasEmoji]: ex }),
                                                ref: ej,
                                                children: em
                                            })
                                        ]
                                    }),
                                    eQ()
                                ]
                            }
                        )
                    )
            }),
            !W.available &&
                (0, r.jsx)(d.ua7, {
                    text: C.intl.string(C.t.MDOXJS),
                    children: (e) => (0, r.jsx)('div', w({ className: es ? P.unavailableTooltipRefresh : P.unavailableTooltip }, e))
                }),
            !0 === eu &&
                (0, r.jsx)(g.Z, {
                    sound: W,
                    containerDimensions: eX,
                    ref: ed
                })
        ]
    });
});
