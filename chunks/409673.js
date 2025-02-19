n.d(t, {
    ZP: () => H,
    hU: () => B
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
    p = n(607070),
    _ = n(745510),
    h = n(806966),
    m = n(409700),
    g = n(309006),
    E = n(695346),
    v = n(594174),
    b = n(208049),
    y = n(763296),
    O = n(697426),
    S = n(242291),
    I = n(830253),
    T = n(286654),
    N = n(675654),
    A = n(388032),
    C = n(879580);
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
function P(e) {
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
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let M = '1',
    k = 0.01,
    j = 0.1,
    U = 0.01,
    G = 1000;
function B(e) {
    let { disabled: t = !1, onClick: n, text: i, children: o, tooltipPosition: s = 'top', refreshEnabled: l = !1 } = e;
    return (0, r.jsx)(d.ua7, {
        text: i,
        position: s,
        children: (e) =>
            (0, r.jsx)(
                d.P3F,
                D(P({}, e), {
                    'aria-label': i,
                    className: a()(l ? C.secondaryButtonRefresh : C.secondaryButton, { [C.buttonDisabled]: t }),
                    onClick: n,
                    children: o
                })
            )
    });
}
function Z(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: o = 'top', refreshEnabled: a = !1 } = e;
    function s(e) {
        e.stopPropagation(), e.currentTarget.blur(), n();
    }
    return (0, r.jsx)(B, {
        tooltipPosition: o,
        disabled: i,
        onClick: s,
        text: A.NW.formatToPlainString(A.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: a,
        children: (0, r.jsx)(d.gj8, {
            size: 'md',
            color: 'currentColor',
            className: C.secondaryIcon
        })
    });
}
function F(e) {
    let { sound: t, refreshEnabled: n, disabled: o = !1 } = e,
        s = (0, l.e7)([y.Z], () => y.Z.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), s ? (0, b.hs)(t.soundId) : (0, b.TB)(t.soundId);
            },
            [s, t.soundId]
        );
    return (0, r.jsx)(B, {
        disabled: o,
        onClick: c,
        text: A.NW.formatToPlainString(s ? A.t.lQLsjY : A.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: n,
        children: s
            ? (0, r.jsx)(d.r7p, {
                  size: 'xs',
                  className: a()(C.secondaryIcon, C.favoriteIconFavorite),
                  color: u.Z.unsafe_rawColors.GOLD.css
              })
            : (0, r.jsx)(d.vxU, {
                  size: 'xs',
                  color: 'currentColor',
                  className: C.secondaryIcon
              })
    });
}
function V(e, t) {
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
let H = i.forwardRef(function (e, t) {
    var n,
        o,
        u,
        b,
        y,
        R,
        w,
        L,
        B,
        H,
        { sound: W, channel: Y, containerClassName: K, className: z, focused: q, forceSecondaryActions: Q = !1, interactive: X = !0, enableSecondaryActions: J = !1, suppressPlaySound: $, onMouseEnter: ee, onSelectItem: et, analyticsLocations: en, buttonOverlay: er = O.Pb.PLAY, showLockForDisabledSound: ei = !0, inNitroLockedSection: eo = !1, refreshEnabled: ea = !1, isAnimated: es = !0, isPlayingSoundOverride: el, isSoundmoji: ec, soundmojiVisualEffectRef: eu, tooltipOverride: ed, tooltipClassName: ef, tooltipContentClassName: ep } = e,
        e_ = x(e, ['sound', 'channel', 'containerClassName', 'className', 'focused', 'forceSecondaryActions', 'interactive', 'enableSecondaryActions', 'suppressPlaySound', 'onMouseEnter', 'onSelectItem', 'analyticsLocations', 'buttonOverlay', 'showLockForDisabledSound', 'inNitroLockedSection', 'refreshEnabled', 'isAnimated', 'isPlayingSoundOverride', 'isSoundmoji', 'soundmojiVisualEffectRef', 'tooltipOverride', 'tooltipClassName', 'tooltipContentClassName']);
    let { name: eh, emojiId: em, emojiName: eg } = W,
        eE = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        ev = (0, T.z)(W, null == Y ? void 0 : Y.guild_id),
        { playSoundboardSound: eb, previewSound: ey, isPlayingSound: eO, isPreviewingSound: eS } = (0, I.Z)(W, null !== (y = null == Y ? void 0 : Y.id) && void 0 !== y ? y : null, null !== (R = ec ? E.AY.getSetting() : null === (n = E.kU.getSetting()) || void 0 === n ? void 0 : n.volume) && void 0 !== R ? R : 100),
        { createMultipleConfettiAt: eI } = i.useContext(_.h),
        eT = i.useRef(null),
        eN = V(W.soundId, eT.current),
        eA = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        eC = i.useRef(k),
        eR = i.useRef(new c.Xp()),
        eP = W.soundId === M,
        ew = 'sound-'.concat(W.soundId),
        eD = (0, s.JA)(ew),
        ex = null != em || null != eg,
        eL = !(0, S.Nq)(eE, W, Y) && !ec,
        eM = Q || (J && !eL),
        ek = i.useRef(null),
        ej = (null !== (w = null === (o = ek.current) || void 0 === o ? void 0 : o.scrollHeight) && void 0 !== w ? w : 0) > (null !== (L = null === (u = ek.current) || void 0 === u ? void 0 : u.offsetHeight) && void 0 !== L ? L : 0),
        eU = null !== (B = h.Wq.useStore().bottomPosition) && void 0 !== B ? B : 0,
        eG = (null !== (H = null === (b = eT.current) || void 0 === b ? void 0 : b.getBoundingClientRect().bottom) && void 0 !== H ? H : 0) + 50 > eU ? 'top' : 'bottom',
        [eB, eZ] = i.useState(!1),
        eF = eL && ei;
    function eV() {
        $ || eb(en);
    }
    function eH(e) {
        if ((eP && !eA && ((eC.current = Math.min(eC.current + U, j)), Math.random() < eC.current && eI(eN.x, eN.y, void 0, void 0, { sprite: N.vv })), null != et)) {
            et(e);
            return;
        }
        eV();
    }
    let eW = Z({
            sound: W,
            previewSound: ey,
            disabled: eL && !Q,
            refreshEnabled: ea
        }),
        eY = (e) =>
            $ || eL || ea
                ? eF
                    ? (0, r.jsx)(d.mBM, {
                          size: 'xs',
                          color: 'currentColor',
                          className: a()(ea ? C.primaryIconRefresh : C.primaryIcon, C.lockIcon, e, { [C.hasEmoji]: ex })
                      })
                    : null
                : (0, r.jsx)(d.o1U, {
                      size: 'xs',
                      color: 'currentColor',
                      className: a()(C.primaryIcon, e)
                  }),
        eK = (0, r.jsx)(F, {
            sound: W,
            refreshEnabled: ea,
            disabled: !X && !Q
        }),
        ez = () =>
            eF && !eo
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: C.buttonOverlayBackground }),
                          eY(C.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: C.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: ea ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                                  children: [eM && eW, eM && eK]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: C.buttonOverlay,
                      children: [
                          !ea && (0, r.jsx)('div', { className: a()({ [C.buttonOverlayBackground]: !$ }) }),
                          (0, r.jsx)('div', {
                              className: ea ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                              children:
                                  er === O.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(m.ZP, {
                                            sound: W,
                                            channel: Y,
                                            setTooltipShowing: eZ
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eM && eW, eY(), eM && eK]
                                        })
                          })
                      ]
                  });
    function eq() {
        switch (er) {
            case O.Pb.ADD:
                return (0, r.jsxs)('div', {
                    className: C.addButtonOverlay,
                    children: [
                        (0, r.jsx)('div', { className: C.buttonOverlayBackground }),
                        (0, r.jsxs)('div', {
                            className: ea ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                            children: [
                                eW,
                                ea
                                    ? (0, r.jsx)('div', {
                                          className: C.primaryIconRefresh,
                                          children: (0, r.jsx)(d.svS, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: C.plusSign
                                          })
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: C.addButton,
                                          children: [
                                              (0, r.jsx)(d.qJs, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: C.plusSign
                                              }),
                                              (0, r.jsx)(d.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-primary',
                                                  children: A.NW.string(A.t.QqqXLS)
                                              })
                                          ]
                                      }),
                                eM && eK
                            ]
                        })
                    ]
                });
            case O.Pb.NONE:
                return null;
            case O.Pb.PLAY:
            case O.Pb.SOUNDMOJI:
            default:
                return ez();
        }
    }
    i.useEffect(() => {
        let e = eR.current;
        return (
            eP &&
                e.start(G, () => {
                    eC.current = Math.max(eC.current - U, k);
                }),
            () => e.stop()
        );
    }, [eP]);
    let eQ = (0, g.a)(eT.current);
    return (0, r.jsxs)('li', {
        ref: t,
        className: a()(C.soundButtonWrapper, K),
        onMouseEnter: ee,
        children: [
            (0, r.jsx)(d.ua7, {
                'aria-label': null != ed ? W.name : void 0,
                text: null != ed ? ed : W.name,
                tooltipClassName: ef,
                tooltipContentClassName: ep,
                position: eG,
                shouldShow: !eB,
                delay: 500,
                children: (e) =>
                    (0, r.jsxs)(
                        d.kL8,
                        D(
                            P(
                                D(P({}, e_), {
                                    buttonProps: D(P({}, eD), {
                                        id: ew,
                                        role: 'button'
                                    }),
                                    'aria-label': A.NW.formatToPlainString(A.t.tuMUJy, {
                                        emojiName: W.emojiName,
                                        soundName: W.name
                                    }),
                                    className: a()(
                                        ea ? C.soundButtonRefresh : C.soundButton,
                                        {
                                            [C.animated]: es,
                                            [C.playing]: null != el ? el : eO,
                                            [C.previewing]: eS,
                                            [C.hoverActiveBackground]: $ && !ea,
                                            [C.soundButtonInteractive]: X && !ea,
                                            [C.soundButtonInteractiveRefresh]: X && ea,
                                            [C.buttonDisabled]: !X && !Q,
                                            [C.premiumDisabled]: eL && !Q,
                                            [C.premiumDisabledRefresh]: eL && ea,
                                            [C.buttonDisabledSecondaryActionsEnabled]: !X && Q,
                                            [C.focused]: X && q
                                        },
                                        z
                                    )
                                }),
                                e
                            ),
                            {
                                onClick: (t) => {
                                    var n;
                                    null == e || null === (n = e.onClick) || void 0 === n || n.call(e), null == eH || eH(t);
                                },
                                onContextMenu: J && !eL ? ev : void 0,
                                onMouseOver: () => {
                                    var t;
                                    return null != ed || (ej && ea && !0 !== ec) ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: a()(ea ? C.soundInfoRefresh : C.soundInfo, { [C.hasEmoji]: ex }),
                                        'aria-hidden': !0,
                                        ref: eT,
                                        children: [
                                            ex &&
                                                (ea
                                                    ? (0, r.jsx)('div', {
                                                          className: C.emojiCircle,
                                                          children: (0, r.jsx)(f.Z, {
                                                              emojiId: em,
                                                              emojiName: eg,
                                                              className: C.emoji
                                                          })
                                                      })
                                                    : (0, r.jsx)(f.Z, {
                                                          emojiId: em,
                                                          emojiName: eg,
                                                          className: C.emoji
                                                      })),
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-xs/medium',
                                                color: X ? void 0 : 'text-muted',
                                                className: a()(ea ? C.soundNameRefresh : C.soundName, { [C.hasEmoji]: ex }),
                                                ref: ek,
                                                children: eh
                                            })
                                        ]
                                    }),
                                    eq()
                                ]
                            }
                        )
                    )
            }),
            !W.available &&
                (0, r.jsx)(d.ua7, {
                    text: A.NW.string(A.t.MDOXJS),
                    children: (e) => (0, r.jsx)('div', P({ className: ea ? C.unavailableTooltipRefresh : C.unavailableTooltip }, e))
                }),
            !0 === ec &&
                (0, r.jsx)(g.Z, {
                    sound: W,
                    containerDimensions: eQ,
                    ref: eu
                })
        ]
    });
});
