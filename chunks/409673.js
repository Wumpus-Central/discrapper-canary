n.d(t, {
    ZP: () => G,
    hU: () => P
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(846519),
    c = n(692547),
    d = n(481060),
    f = n(596454),
    _ = n(607070),
    p = n(745510),
    h = n(806966),
    m = n(409700),
    g = n(309006),
    E = n(695346),
    v = n(594174),
    y = n(208049),
    I = n(763296),
    T = n(697426),
    b = n(242291),
    S = n(830253),
    A = n(286654),
    N = n(675654),
    C = n(388032),
    R = n(719028);
let O = '1',
    D = 0.01,
    L = 0.1,
    x = 0.01,
    w = 1000;
function P(e) {
    let { disabled: t = !1, onClick: n, text: r, children: a, tooltipPosition: o = 'top', refreshEnabled: l = !1 } = e;
    return (0, i.jsx)(d.ua7, {
        text: r,
        position: o,
        children: (e) =>
            (0, i.jsx)(d.P3F, {
                ...e,
                'aria-label': r,
                className: s()(l ? R.secondaryButtonRefresh : R.secondaryButton, { [R.buttonDisabled]: t }),
                onClick: n,
                children: a
            })
    });
}
function M(e) {
    let { sound: t, previewSound: n, disabled: r = !1, tooltipPosition: a = 'top', refreshEnabled: s = !1 } = e;
    function o(e) {
        e.stopPropagation(), e.currentTarget.blur(), n();
    }
    return (0, i.jsx)(P, {
        tooltipPosition: a,
        disabled: r,
        onClick: o,
        text: C.intl.formatToPlainString(C.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: s,
        children: (0, i.jsx)(d.gj8, {
            size: 'md',
            color: 'currentColor',
            className: R.secondaryIcon
        })
    });
}
function k(e) {
    let { sound: t, refreshEnabled: n, disabled: a = !1 } = e,
        o = (0, l.e7)([I.Z], () => I.Z.isFavoriteSound(t.soundId), [t.soundId]),
        u = r.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), o ? (0, y.hs)(t.soundId) : (0, y.TB)(t.soundId);
            },
            [o, t.soundId]
        );
    return (0, i.jsx)(P, {
        disabled: a,
        onClick: u,
        text: C.intl.formatToPlainString(o ? C.t.lQLsjY : C.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: n,
        children: o
            ? (0, i.jsx)(d.r7p, {
                  size: 'xs',
                  className: s()(R.secondaryIcon, R.favoriteIconFavorite),
                  color: c.Z.unsafe_rawColors.GOLD.css
              })
            : (0, i.jsx)(d.vxU, {
                  size: 'xs',
                  color: 'currentColor',
                  className: R.secondaryIcon
              })
    });
}
function U(e, t) {
    return r.useMemo(() => {
        if (null == t || e !== O)
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
let G = r.forwardRef(function (e, t) {
    var n, a, c, y, I, P, G, B, Z, F;
    let { sound: V, channel: j, containerClassName: H, className: Y, focused: W, forceSecondaryActions: K = !1, interactive: z = !0, enableSecondaryActions: q = !1, suppressPlaySound: Q, onMouseEnter: X, onSelectItem: J, analyticsLocations: $, buttonOverlay: ee = T.Pb.PLAY, showLockForDisabledSound: et = !0, inNitroLockedSection: en = !1, refreshEnabled: ei = !1, isAnimated: er = !0, isPlayingSoundOverride: ea, isSoundmoji: es, soundmojiVisualEffectRef: eo, tooltipOverride: el, tooltipClassName: eu, tooltipContentClassName: ec, ...ed } = e,
        { name: ef, emojiId: e_, emojiName: ep } = V,
        eh = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        em = (0, A.z)(V, null == j ? void 0 : j.guild_id),
        { playSoundboardSound: eg, previewSound: eE, isPlayingSound: ev, isPreviewingSound: ey } = (0, S.Z)(V, null !== (I = null == j ? void 0 : j.id) && void 0 !== I ? I : null, null !== (P = es ? E.AY.getSetting() : null === (n = E.kU.getSetting()) || void 0 === n ? void 0 : n.volume) && void 0 !== P ? P : 100),
        { createMultipleConfettiAt: eI } = r.useContext(p.h),
        eT = r.useRef(null),
        eb = U(V.soundId, eT.current),
        eS = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        eA = r.useRef(D),
        eN = r.useRef(new u.Xp()),
        eC = V.soundId === O,
        eR = 'sound-'.concat(V.soundId),
        eO = (0, o.JA)(eR),
        eD = null != e_ || null != ep,
        eL = !(0, b.Nq)(eh, V, j) && !es,
        ex = K || (q && !eL),
        ew = r.useRef(null),
        eP = (null !== (G = null === (a = ew.current) || void 0 === a ? void 0 : a.scrollHeight) && void 0 !== G ? G : 0) > (null !== (B = null === (c = ew.current) || void 0 === c ? void 0 : c.offsetHeight) && void 0 !== B ? B : 0),
        eM = null !== (Z = h.Wq.useStore().bottomPosition) && void 0 !== Z ? Z : 0,
        ek = (null !== (F = null === (y = eT.current) || void 0 === y ? void 0 : y.getBoundingClientRect().bottom) && void 0 !== F ? F : 0) + 50 > eM ? 'top' : 'bottom',
        [eU, eG] = r.useState(!1),
        eB = eL && et;
    function eZ() {
        Q || eg($);
    }
    function eF(e) {
        if ((eC && !eS && ((eA.current = Math.min(eA.current + x, L)), Math.random() < eA.current && eI(eb.x, eb.y, void 0, void 0, { sprite: N.vv })), null != J)) {
            J(e);
            return;
        }
        eZ();
    }
    let eV = M({
            sound: V,
            previewSound: eE,
            disabled: eL && !K,
            refreshEnabled: ei
        }),
        ej = (e) =>
            Q || eL || ei
                ? eB
                    ? (0, i.jsx)(d.mBM, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(ei ? R.primaryIconRefresh : R.primaryIcon, R.lockIcon, e, { [R.hasEmoji]: eD })
                      })
                    : null
                : (0, i.jsx)(d.o1U, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(R.primaryIcon, e)
                  }),
        eH = (0, i.jsx)(k, {
            sound: V,
            refreshEnabled: ei,
            disabled: !z && !K
        }),
        eY = () =>
            eB && !en
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('div', { className: R.buttonOverlayBackground }),
                          ej(R.primaryIconTopLevel),
                          (0, i.jsx)('div', {
                              className: R.buttonOverlay,
                              children: (0, i.jsxs)('div', {
                                  className: ei ? R.buttonOverlayActionsRefresh : R.buttonOverlayActions,
                                  children: [ex && eV, ex && eH]
                              })
                          })
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: R.buttonOverlay,
                      children: [
                          !ei && (0, i.jsx)('div', { className: s()({ [R.buttonOverlayBackground]: !Q }) }),
                          (0, i.jsx)('div', {
                              className: ei ? R.buttonOverlayActionsRefresh : R.buttonOverlayActions,
                              children:
                                  ee === T.Pb.SOUNDMOJI
                                      ? (0, i.jsx)(m.ZP, {
                                            sound: V,
                                            channel: j,
                                            setTooltipShowing: eG
                                        })
                                      : (0, i.jsxs)(i.Fragment, {
                                            children: [ex && eV, ej(), ex && eH]
                                        })
                          })
                      ]
                  });
    function eW() {
        switch (ee) {
            case T.Pb.ADD:
                return (0, i.jsxs)('div', {
                    className: R.addButtonOverlay,
                    children: [
                        (0, i.jsx)('div', { className: R.buttonOverlayBackground }),
                        (0, i.jsxs)('div', {
                            className: ei ? R.buttonOverlayActionsRefresh : R.buttonOverlayActions,
                            children: [
                                eV,
                                ei
                                    ? (0, i.jsx)('div', {
                                          className: R.primaryIconRefresh,
                                          children: (0, i.jsx)(d.svS, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: R.plusSign
                                          })
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: R.addButton,
                                          children: [
                                              (0, i.jsx)(d.qJs, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: R.plusSign
                                              }),
                                              (0, i.jsx)(d.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-primary',
                                                  children: C.intl.string(C.t.QqqXLS)
                                              })
                                          ]
                                      }),
                                ex && eH
                            ]
                        })
                    ]
                });
            case T.Pb.NONE:
                return null;
            case T.Pb.PLAY:
            case T.Pb.SOUNDMOJI:
            default:
                return eY();
        }
    }
    r.useEffect(() => {
        let e = eN.current;
        return (
            eC &&
                e.start(w, () => {
                    eA.current = Math.max(eA.current - x, D);
                }),
            () => e.stop()
        );
    }, [eC]);
    let eK = (0, g.a)(eT.current);
    return (0, i.jsxs)('li', {
        ref: t,
        className: s()(R.soundButtonWrapper, H),
        onMouseEnter: X,
        children: [
            (0, i.jsx)(d.ua7, {
                'aria-label': null != el ? V.name : void 0,
                text: null != el ? el : V.name,
                tooltipClassName: eu,
                tooltipContentClassName: ec,
                position: ek,
                shouldShow: !eU,
                delay: 500,
                children: (e) =>
                    (0, i.jsxs)(d.kL8, {
                        ...ed,
                        buttonProps: {
                            ...eO,
                            id: eR,
                            role: 'button'
                        },
                        'aria-label': C.intl.formatToPlainString(C.t.tuMUJy, {
                            emojiName: V.emojiName,
                            soundName: V.name
                        }),
                        className: s()(
                            ei ? R.soundButtonRefresh : R.soundButton,
                            {
                                [R.animated]: er,
                                [R.playing]: null != ea ? ea : ev,
                                [R.previewing]: ey,
                                [R.hoverActiveBackground]: Q && !ei,
                                [R.soundButtonInteractive]: z && !ei,
                                [R.soundButtonInteractiveRefresh]: z && ei,
                                [R.buttonDisabled]: !z && !K,
                                [R.premiumDisabled]: eL && !K,
                                [R.premiumDisabledRefresh]: eL && ei,
                                [R.buttonDisabledSecondaryActionsEnabled]: !z && K,
                                [R.focused]: z && W
                            },
                            Y
                        ),
                        ...e,
                        onClick: (t) => {
                            var n;
                            null == e || null === (n = e.onClick) || void 0 === n || n.call(e), null == eF || eF(t);
                        },
                        onContextMenu: q && !eL ? em : void 0,
                        onMouseOver: () => {
                            var t;
                            return null != el || (eP && ei && !0 !== es) ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                        },
                        children: [
                            (0, i.jsxs)('div', {
                                className: s()(ei ? R.soundInfoRefresh : R.soundInfo, { [R.hasEmoji]: eD }),
                                'aria-hidden': !0,
                                ref: eT,
                                children: [
                                    eD &&
                                        (ei
                                            ? (0, i.jsx)('div', {
                                                  className: R.emojiCircle,
                                                  children: (0, i.jsx)(f.Z, {
                                                      emojiId: e_,
                                                      emojiName: ep,
                                                      className: R.emoji
                                                  })
                                              })
                                            : (0, i.jsx)(f.Z, {
                                                  emojiId: e_,
                                                  emojiName: ep,
                                                  className: R.emoji
                                              })),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/medium',
                                        color: z ? void 0 : 'text-muted',
                                        className: s()(ei ? R.soundNameRefresh : R.soundName, { [R.hasEmoji]: eD }),
                                        ref: ew,
                                        children: ef
                                    })
                                ]
                            }),
                            eW()
                        ]
                    })
            }),
            !V.available &&
                (0, i.jsx)(d.ua7, {
                    text: C.intl.string(C.t.MDOXJS),
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: ei ? R.unavailableTooltipRefresh : R.unavailableTooltip,
                            ...e
                        })
                }),
            !0 === es &&
                (0, i.jsx)(g.Z, {
                    sound: V,
                    containerDimensions: eK,
                    ref: eo
                })
        ]
    });
});
