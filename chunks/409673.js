r.d(n, {
    K_: function () {
        return B;
    },
    hU: function () {
        return U;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(91192),
    c = r(442837),
    d = r(846519),
    f = r(692547),
    _ = r(481060),
    h = r(596454),
    p = r(607070),
    m = r(745510),
    g = r(806966),
    E = r(409700),
    v = r(309006),
    I = r(631771),
    T = r(695346),
    b = r(594174),
    y = r(208049),
    S = r(763296),
    A = r(697426),
    N = r(242291),
    C = r(706667),
    R = r(286654),
    O = r(675654),
    D = r(388032),
    L = r(936811);
let x = '1',
    w = 0.01,
    P = 0.1,
    M = 0.01,
    k = 1000;
function U(e) {
    let { disabled: n = !1, onClick: r, text: i, children: s, tooltipPosition: o = 'top', refreshEnabled: u = !1 } = e;
    return (0, a.jsx)(_.Tooltip, {
        text: i,
        position: o,
        children: (e) =>
            (0, a.jsx)(_.Clickable, {
                ...e,
                'aria-label': i,
                className: l()(u ? L.secondaryButtonRefresh : L.secondaryButton, { [L.buttonDisabled]: n }),
                onClick: r,
                children: s
            })
    });
}
function B(e) {
    let { sound: n, previewSound: r, disabled: i = !1, tooltipPosition: s = 'top', refreshEnabled: o = !1 } = e;
    function l(e) {
        e.stopPropagation(), e.currentTarget.blur(), r();
    }
    return (0, a.jsx)(U, {
        tooltipPosition: s,
        disabled: i,
        onClick: l,
        text: D.intl.formatToPlainString(D.t['/8fYOz'], {
            emojiName: n.emojiName,
            soundName: n.name
        }),
        refreshEnabled: o,
        children: (0, a.jsx)(_.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: L.secondaryIcon
        })
    });
}
function G(e) {
    let { sound: n, refreshEnabled: r, disabled: i = !1 } = e,
        o = (0, c.e7)([S.Z], () => S.Z.isFavoriteSound(n.soundId), [n.soundId]),
        u = s.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), o ? (0, y.hs)(n.soundId) : (0, y.TB)(n.soundId);
            },
            [o, n.soundId]
        );
    return (0, a.jsx)(U, {
        disabled: i,
        onClick: u,
        text: D.intl.formatToPlainString(o ? D.t.lQLsjY : D.t.Y5DOs7, {
            emojiName: n.emojiName,
            soundName: n.name
        }),
        refreshEnabled: r,
        children: o
            ? (0, a.jsx)(_.StarIcon, {
                  size: 'xs',
                  className: l()(L.secondaryIcon, L.favoriteIconFavorite),
                  color: f.Z.unsafe_rawColors.GOLD.css
              })
            : (0, a.jsx)(_.StarOutlineIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  className: L.secondaryIcon
              })
    });
}
function F(e, n) {
    return s.useMemo(() => {
        if (null == n || e !== x)
            return {
                x: 0,
                y: 0
            };
        let r = n.getBoundingClientRect();
        return {
            x: r.left + r.width / 2,
            y: r.top + r.height / 2
        };
    }, [n, e]);
}
n.ZP = s.forwardRef(function (e, n) {
    var r, i, o, f, y, S, U, Z, V, j;
    let { sound: H, channel: Y, containerClassName: W, className: K, focused: z, forceSecondaryActions: q = !1, interactive: Q = !0, enableSecondaryActions: X = !1, suppressPlaySound: J, onMouseEnter: $, onSelectItem: ee, analyticsLocations: et, buttonOverlay: en = A.Pb.PLAY, showLockForDisabledSound: er = !0, inNitroLockedSection: ei = !1, refreshEnabled: ea = !1, isAnimated: es = !0, isPlayingSoundOverride: eo, isSoundmoji: el, soundmojiVisualEffectRef: eu, tooltipOverride: ec, tooltipClassName: ed, tooltipContentClassName: ef, ...e_ } = e,
        { name: eh, emojiId: ep, emojiName: em } = H,
        eg = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        eE = (0, R.z)(H, null == Y ? void 0 : Y.guild_id),
        { playSoundboardSound: ev, previewSound: eI, isPlayingSound: eT, isPreviewingSound: eb } = (0, C.Z)(H, null !== (y = null == Y ? void 0 : Y.id) && void 0 !== y ? y : null, null !== (S = el ? T.AY.getSetting() : null === (r = T.kU.getSetting()) || void 0 === r ? void 0 : r.volume) && void 0 !== S ? S : 100),
        { createMultipleConfettiAt: ey } = s.useContext(m.h),
        eS = s.useRef(null),
        eA = F(H.soundId, eS.current),
        eN = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        eC = s.useRef(w),
        eR = s.useRef(new d.Xp()),
        eO = H.soundId === x,
        eD = 'sound-'.concat(H.soundId),
        eL = (0, u.JA)(eD),
        ex = null != ep || null != em,
        ew = !(0, N.Nq)(eg, H, Y) && !el,
        eP = q || (X && !ew),
        eM = s.useRef(null),
        ek = (null !== (U = null === (i = eM.current) || void 0 === i ? void 0 : i.scrollHeight) && void 0 !== U ? U : 0) > (null !== (Z = null === (o = eM.current) || void 0 === o ? void 0 : o.offsetHeight) && void 0 !== Z ? Z : 0),
        eU = null !== (V = g.Wq.useStore().bottomPosition) && void 0 !== V ? V : 0,
        eB = (null !== (j = null === (f = eS.current) || void 0 === f ? void 0 : f.getBoundingClientRect().bottom) && void 0 !== j ? j : 0) + 50 > eU ? 'top' : 'bottom',
        [eG, eF] = s.useState(!1),
        eZ = ew && er,
        { enableInlineUpsell: eV } = I.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eZ });
    function ej() {
        !J && ev(et);
    }
    function eH() {
        if ((eO && !eN && ((eC.current = Math.min(eC.current + M, P)), Math.random() < eC.current && ey(eA.x, eA.y, void 0, void 0, { sprite: O.vv })), null != ee)) {
            ee();
            return;
        }
        ej();
    }
    let eY = B({
            sound: H,
            previewSound: eI,
            disabled: ew && !q,
            refreshEnabled: ea
        }),
        eW = (e) =>
            J || ew || ea
                ? ew && er && eV
                    ? (0, a.jsx)(_.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: l()(ea ? L.primaryIconRefresh : L.primaryIcon, L.lockIcon, e, { [L.hasEmoji]: ex })
                      })
                    : null
                : (0, a.jsx)(_.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: l()(L.primaryIcon, e)
                  }),
        eK = (0, a.jsx)(G, {
            sound: H,
            refreshEnabled: ea,
            disabled: !Q && !q
        }),
        ez = () =>
            eV && ew && er && !ei
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', { className: L.buttonOverlayBackground }),
                          eW(L.primaryIconTopLevel),
                          (0, a.jsx)('div', {
                              className: L.buttonOverlay,
                              children: (0, a.jsxs)('div', {
                                  className: ea ? L.buttonOverlayActionsRefresh : L.buttonOverlayActions,
                                  children: [eP && eY, eP && eK]
                              })
                          })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: L.buttonOverlay,
                      children: [
                          !ea && (0, a.jsx)('div', { className: l()({ [L.buttonOverlayBackground]: !J }) }),
                          (0, a.jsx)('div', {
                              className: ea ? L.buttonOverlayActionsRefresh : L.buttonOverlayActions,
                              children:
                                  en === A.Pb.SOUNDMOJI
                                      ? (0, a.jsx)(E.ZP, {
                                            sound: H,
                                            channel: Y,
                                            setTooltipShowing: eF
                                        })
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [eP && eY, eW(), eP && eK]
                                        })
                          })
                      ]
                  });
    function eq() {
        switch (en) {
            case A.Pb.ADD:
                return (0, a.jsxs)('div', {
                    className: L.addButtonOverlay,
                    children: [
                        (0, a.jsx)('div', { className: L.buttonOverlayBackground }),
                        (0, a.jsxs)('div', {
                            className: ea ? L.buttonOverlayActionsRefresh : L.buttonOverlayActions,
                            children: [
                                eY,
                                ea
                                    ? (0, a.jsx)('div', {
                                          className: L.primaryIconRefresh,
                                          children: (0, a.jsx)(_.PlusLargeIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: L.plusSign
                                          })
                                      })
                                    : (0, a.jsxs)('div', {
                                          className: L.addButton,
                                          children: [
                                              (0, a.jsx)(_.PlusSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: L.plusSign
                                              }),
                                              (0, a.jsx)(_.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-primary',
                                                  children: D.intl.string(D.t.QqqXLS)
                                              })
                                          ]
                                      }),
                                eP && eK
                            ]
                        })
                    ]
                });
            case A.Pb.NONE:
                return null;
            case A.Pb.PLAY:
            case A.Pb.SOUNDMOJI:
            default:
                return ez();
        }
    }
    s.useEffect(() => {
        let e = eR.current;
        return (
            eO &&
                e.start(k, () => {
                    eC.current = Math.max(eC.current - M, w);
                }),
            () => e.stop()
        );
    }, [eO]);
    let eQ = (0, v.a)(eS.current);
    return (0, a.jsxs)('li', {
        ref: n,
        className: l()(L.soundButtonWrapper, W),
        onMouseEnter: $,
        children: [
            (0, a.jsx)(_.Tooltip, {
                'aria-label': null != ec ? H.name : void 0,
                text: null != ec ? ec : H.name,
                tooltipClassName: ed,
                tooltipContentClassName: ef,
                position: eB,
                shouldShow: !eG,
                delay: 500,
                children: (e) =>
                    (0, a.jsxs)(_.ClickableContainer, {
                        ...e_,
                        buttonProps: {
                            ...eL,
                            id: eD,
                            role: 'button'
                        },
                        'aria-label': D.intl.formatToPlainString(D.t.tuMUJy, {
                            emojiName: H.emojiName,
                            soundName: H.name
                        }),
                        className: l()(
                            ea ? L.soundButtonRefresh : L.soundButton,
                            {
                                [L.animated]: es,
                                [L.playing]: null != eo ? eo : eT,
                                [L.previewing]: eb,
                                [L.hoverActiveBackground]: J && !ea,
                                [L.soundButtonInteractive]: Q && !ea,
                                [L.soundButtonInteractiveRefresh]: Q && ea,
                                [L.buttonDisabled]: !Q && !q,
                                [L.premiumDisabled]: ew && !q,
                                [L.premiumDisabledRefresh]: ew && ea,
                                [L.buttonDisabledSecondaryActionsEnabled]: !Q && q,
                                [L.focused]: Q && z
                            },
                            K
                        ),
                        ...e,
                        onClick: () => {
                            var n;
                            null == e || null === (n = e.onClick) || void 0 === n || n.call(e), null == eH || eH();
                        },
                        onContextMenu: X && !ew ? eE : void 0,
                        onMouseOver: () => {
                            var n;
                            return null != ec || (ek && ea && !0 !== el) ? (null === (n = e.onMouseEnter) || void 0 === n ? void 0 : n.call(e)) : null;
                        },
                        children: [
                            (0, a.jsxs)('div', {
                                className: l()(ea ? L.soundInfoRefresh : L.soundInfo, { [L.hasEmoji]: ex }),
                                'aria-hidden': !0,
                                ref: eS,
                                children: [
                                    ex &&
                                        (ea
                                            ? (0, a.jsx)('div', {
                                                  className: L.emojiCircle,
                                                  children: (0, a.jsx)(h.Z, {
                                                      emojiId: ep,
                                                      emojiName: em,
                                                      className: L.emoji
                                                  })
                                              })
                                            : (0, a.jsx)(h.Z, {
                                                  emojiId: ep,
                                                  emojiName: em,
                                                  className: L.emoji
                                              })),
                                    (0, a.jsx)(_.Text, {
                                        variant: 'text-xs/medium',
                                        color: Q ? void 0 : 'text-muted',
                                        className: l()(ea ? L.soundNameRefresh : L.soundName, { [L.hasEmoji]: ex }),
                                        ref: eM,
                                        children: eh
                                    })
                                ]
                            }),
                            eq()
                        ]
                    })
            }),
            !H.available &&
                (0, a.jsx)(_.Tooltip, {
                    text: D.intl.string(D.t.MDOXJS),
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: ea ? L.unavailableTooltipRefresh : L.unavailableTooltip,
                            ...e
                        })
                }),
            !0 === el &&
                (0, a.jsx)(v.Z, {
                    sound: H,
                    containerDimensions: eQ,
                    ref: eu
                })
        ]
    });
});
