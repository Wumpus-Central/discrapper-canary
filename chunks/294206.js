n.d(t, {
    ZP: () => W,
    hU: () => F
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    v = n(763296),
    O = n(697426),
    I = n(242291),
    S = n(830253),
    T = n(286654),
    N = n(675654),
    A = n(509571),
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let k = '1',
    j = 0.01,
    U = 0.1,
    G = 0.01,
    B = 1000;
function F(e) {
    let { disabled: t = !1, onClick: n, text: i, children: o, tooltipPosition: s = 'top', refreshEnabled: l = !1 } = e;
    return (0, r.jsx)(d.ua7, {
        text: i,
        position: s,
        children: (e) =>
            (0, r.jsx)(
                d.P3F,
                L(w({}, e), {
                    'aria-label': i,
                    className: a()(l ? R.secondaryButtonRefresh : R.secondaryButton, { [R.buttonDisabled]: t }),
                    onClick: n,
                    children: o
                })
            )
    });
}
function V(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: o = 'top', refreshEnabled: a = !1 } = e;
    function s(e) {
        e.stopPropagation(), e.currentTarget.blur(), n();
    }
    return (0, r.jsx)(F, {
        tooltipPosition: o,
        disabled: i,
        onClick: s,
        text: C.NW.formatToPlainString(C.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: a,
        children: (0, r.jsx)(d.gj8, {
            size: 'md',
            color: 'currentColor',
            className: R.secondaryIcon
        })
    });
}
function Z(e) {
    let { sound: t, refreshEnabled: n, disabled: o = !1 } = e,
        s = (0, l.e7)([v.Z], () => v.Z.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), s ? (0, y.hs)(t.soundId) : (0, y.TB)(t.soundId);
            },
            [s, t.soundId]
        );
    return (0, r.jsx)(F, {
        disabled: o,
        onClick: c,
        text: C.NW.formatToPlainString(s ? C.t.lQLsjY : C.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: n,
        children: s
            ? (0, r.jsx)(d.r7p, {
                  size: 'xs',
                  className: a()(R.secondaryIcon, R.favoriteIconFavorite),
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
let W = i.forwardRef(function (e, t) {
    var n,
        o,
        u,
        y,
        v,
        P,
        D,
        M,
        F,
        W,
        { sound: Y, channel: K, containerClassName: z, className: q, focused: Q, forceSecondaryActions: X = !1, interactive: J = !0, enableSecondaryActions: $ = !1, suppressPlaySound: ee, onMouseEnter: et, onSelectItem: en, analyticsLocations: er, buttonOverlay: ei = O.Pb.PLAY, showLockForDisabledSound: eo = !0, inNitroLockedSection: ea = !1, refreshEnabled: es = !1, isAnimated: el = !0, isPlayingSoundOverride: ec, isSoundmoji: eu, soundmojiVisualEffectRef: ed, tooltipOverride: ef, tooltipClassName: e_, tooltipContentClassName: ep } = e,
        eh = x(e, ['sound', 'channel', 'containerClassName', 'className', 'focused', 'forceSecondaryActions', 'interactive', 'enableSecondaryActions', 'suppressPlaySound', 'onMouseEnter', 'onSelectItem', 'analyticsLocations', 'buttonOverlay', 'showLockForDisabledSound', 'inNitroLockedSection', 'refreshEnabled', 'isAnimated', 'isPlayingSoundOverride', 'isSoundmoji', 'soundmojiVisualEffectRef', 'tooltipOverride', 'tooltipClassName', 'tooltipContentClassName']);
    let { name: em, emojiId: eg, emojiName: eE } = Y,
        eb = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        ey = (0, T.z)(Y, null == K ? void 0 : K.guild_id),
        { playSoundboardSound: ev, previewSound: eO, isPlayingSound: eI, isPreviewingSound: eS } = (0, S.Z)(Y, null != (v = null == K ? void 0 : K.id) ? v : null, null != (P = eu ? E.AY.getSetting() : null == (n = E.kU.getSetting()) ? void 0 : n.volume) ? P : 100, !eu && (null == K ? void 0 : K.isVocal()) ? A.w.VOICE : A.w.DEFAULT),
        { createMultipleConfettiAt: eT } = i.useContext(p.h),
        eN = i.useRef(null),
        eA = H(Y.soundId, eN.current),
        eC = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        eR = i.useRef(j),
        eP = i.useRef(new c.Xp()),
        ew = Y.soundId === k,
        eD = 'sound-'.concat(Y.soundId),
        eL = (0, s.JA)(eD),
        ex = null != eg || null != eE,
        eM = !(0, I.Nq)(eb, Y, K) && !eu,
        ek = X || ($ && !eM),
        ej = i.useRef(null),
        eU = (null != (D = null == (o = ej.current) ? void 0 : o.scrollHeight) ? D : 0) > (null != (M = null == (u = ej.current) ? void 0 : u.offsetHeight) ? M : 0),
        eG = null != (F = h.Wq.useStore().bottomPosition) ? F : 0,
        eB = (null != (W = null == (y = eN.current) ? void 0 : y.getBoundingClientRect().bottom) ? W : 0) + 50 > eG ? 'top' : 'bottom',
        [eF, eV] = i.useState(!1),
        eZ = eM && eo;
    function eH() {
        ee || ev(er);
    }
    function eW(e) {
        if ((ew && !eC && ((eR.current = Math.min(eR.current + G, U)), Math.random() < eR.current && eT(eA.x, eA.y, void 0, void 0, { sprite: N.vv })), null != en)) return void en(e);
        eH();
    }
    let eY = V({
            sound: Y,
            previewSound: eO,
            disabled: eM && !X,
            refreshEnabled: es
        }),
        eK = (e) =>
            ee || eM || es
                ? eZ
                    ? (0, r.jsx)(d.mBM, {
                          size: 'xs',
                          color: 'currentColor',
                          className: a()(es ? R.primaryIconRefresh : R.primaryIcon, R.lockIcon, e, { [R.hasEmoji]: ex })
                      })
                    : null
                : (0, r.jsx)(d.o1U, {
                      size: 'xs',
                      color: 'currentColor',
                      className: a()(R.primaryIcon, e)
                  }),
        ez = (0, r.jsx)(Z, {
            sound: Y,
            refreshEnabled: es,
            disabled: !J && !X
        }),
        eq = () =>
            eZ && !ea
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: R.buttonOverlayBackground }),
                          eK(R.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: R.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: es ? R.buttonOverlayActionsRefresh : R.buttonOverlayActions,
                                  children: [ek && eY, ek && ez]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: R.buttonOverlay,
                      children: [
                          !es && (0, r.jsx)('div', { className: a()({ [R.buttonOverlayBackground]: !ee }) }),
                          (0, r.jsx)('div', {
                              className: es ? R.buttonOverlayActionsRefresh : R.buttonOverlayActions,
                              children:
                                  ei === O.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(m.ZP, {
                                            sound: Y,
                                            channel: K,
                                            setTooltipShowing: eV
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [ek && eY, eK(), ek && ez]
                                        })
                          })
                      ]
                  });
    function eQ() {
        switch (ei) {
            case O.Pb.ADD:
                return (0, r.jsxs)('div', {
                    className: R.addButtonOverlay,
                    children: [
                        (0, r.jsx)('div', { className: R.buttonOverlayBackground }),
                        (0, r.jsxs)('div', {
                            className: es ? R.buttonOverlayActionsRefresh : R.buttonOverlayActions,
                            children: [
                                eY,
                                es
                                    ? (0, r.jsx)('div', {
                                          className: R.primaryIconRefresh,
                                          children: (0, r.jsx)(d.svS, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: R.plusSign
                                          })
                                      })
                                    : (0, r.jsxs)('div', {
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
                                                  children: C.NW.string(C.t.QqqXLS)
                                              })
                                          ]
                                      }),
                                ek && ez
                            ]
                        })
                    ]
                });
            case O.Pb.NONE:
                return null;
            case O.Pb.PLAY:
            case O.Pb.SOUNDMOJI:
            default:
                return eq();
        }
    }
    i.useEffect(() => {
        let e = eP.current;
        return (
            ew &&
                e.start(B, () => {
                    eR.current = Math.max(eR.current - G, j);
                }),
            () => e.stop()
        );
    }, [ew]);
    let eX = (0, g.a)(eN.current);
    return (0, r.jsxs)('li', {
        ref: t,
        className: a()(R.soundButtonWrapper, z),
        onMouseEnter: et,
        children: [
            (0, r.jsx)(d.ua7, {
                'aria-label': null != ef ? Y.name : void 0,
                text: null != ef ? ef : Y.name,
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
                                    'aria-label': C.NW.formatToPlainString(C.t.tuMUJy, {
                                        emojiName: Y.emojiName,
                                        soundName: Y.name
                                    }),
                                    className: a()(
                                        es ? R.soundButtonRefresh : R.soundButton,
                                        {
                                            [R.animated]: el,
                                            [R.playing]: null != ec ? ec : eI,
                                            [R.previewing]: eS,
                                            [R.hoverActiveBackground]: ee && !es,
                                            [R.soundButtonInteractive]: J && !es,
                                            [R.soundButtonInteractiveRefresh]: J && es,
                                            [R.buttonDisabled]: !J && !X,
                                            [R.premiumDisabled]: eM && !X,
                                            [R.premiumDisabledRefresh]: eM && es,
                                            [R.buttonDisabledSecondaryActionsEnabled]: !J && X,
                                            [R.focused]: J && Q
                                        },
                                        q
                                    )
                                }),
                                e
                            ),
                            {
                                onClick: (t) => {
                                    var n;
                                    null == e || null == (n = e.onClick) || n.call(e), null == eW || eW(t);
                                },
                                onContextMenu: $ && !eM ? ey : void 0,
                                onMouseOver: () => {
                                    var t;
                                    return null != ef || (eU && es && !0 !== eu) ? (null == (t = e.onMouseEnter) ? void 0 : t.call(e)) : null;
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: a()(es ? R.soundInfoRefresh : R.soundInfo, { [R.hasEmoji]: ex }),
                                        'aria-hidden': !0,
                                        ref: eN,
                                        children: [
                                            ex &&
                                                (es
                                                    ? (0, r.jsx)('div', {
                                                          className: R.emojiCircle,
                                                          children: (0, r.jsx)(f.Z, {
                                                              emojiId: eg,
                                                              emojiName: eE,
                                                              className: R.emoji
                                                          })
                                                      })
                                                    : (0, r.jsx)(f.Z, {
                                                          emojiId: eg,
                                                          emojiName: eE,
                                                          className: R.emoji
                                                      })),
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-xs/medium',
                                                color: J ? void 0 : 'text-muted',
                                                className: a()(es ? R.soundNameRefresh : R.soundName, { [R.hasEmoji]: ex }),
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
            !Y.available &&
                (0, r.jsx)(d.ua7, {
                    text: C.NW.string(C.t.MDOXJS),
                    children: (e) => (0, r.jsx)('div', w({ className: es ? R.unavailableTooltipRefresh : R.unavailableTooltip }, e))
                }),
            !0 === eu &&
                (0, r.jsx)(g.Z, {
                    sound: Y,
                    containerDimensions: eX,
                    ref: ed
                })
        ]
    });
});
