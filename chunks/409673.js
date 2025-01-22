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
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(91192),
    c = r(442837),
    d = r(846519),
    f = r(692547),
    p = r(481060),
    h = r(596454),
    _ = r(607070),
    m = r(745510),
    g = r(806966),
    E = r(409700),
    v = r(309006),
    y = r(631771),
    b = r(695346),
    I = r(594174),
    T = r(208049),
    S = r(763296),
    A = r(697426),
    C = r(242291),
    N = r(706667),
    R = r(286654),
    O = r(675654),
    D = r(388032),
    x = r(965965);
let L = '1',
    w = 0.01,
    P = 0.1,
    M = 0.01,
    k = 1000;
function U(e) {
    let { disabled: n = !1, onClick: r, text: i, children: o, tooltipPosition: s = 'top', refreshEnabled: u = !1 } = e;
    return (0, a.jsx)(p.Tooltip, {
        text: i,
        position: s,
        children: (e) =>
            (0, a.jsx)(p.Clickable, {
                ...e,
                'aria-label': i,
                className: l()(u ? x.secondaryButtonRefresh : x.secondaryButton, { [x.buttonDisabled]: n }),
                onClick: r,
                children: o
            })
    });
}
function B(e) {
    let { sound: n, previewSound: r, disabled: i = !1, tooltipPosition: o = 'top', refreshEnabled: s = !1 } = e;
    function l(e) {
        e.stopPropagation(), e.currentTarget.blur(), r();
    }
    return (0, a.jsx)(U, {
        tooltipPosition: o,
        disabled: i,
        onClick: l,
        text: D.intl.formatToPlainString(D.t['/8fYOz'], {
            emojiName: n.emojiName,
            soundName: n.name
        }),
        refreshEnabled: s,
        children: (0, a.jsx)(p.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: x.secondaryIcon
        })
    });
}
function G(e) {
    let { sound: n, refreshEnabled: r, disabled: i = !1 } = e,
        s = (0, c.e7)([S.Z], () => S.Z.isFavoriteSound(n.soundId), [n.soundId]),
        u = o.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), s ? (0, T.hs)(n.soundId) : (0, T.TB)(n.soundId);
            },
            [s, n.soundId]
        );
    return (0, a.jsx)(U, {
        disabled: i,
        onClick: u,
        text: D.intl.formatToPlainString(s ? D.t.lQLsjY : D.t.Y5DOs7, {
            emojiName: n.emojiName,
            soundName: n.name
        }),
        refreshEnabled: r,
        children: s
            ? (0, a.jsx)(p.StarIcon, {
                  size: 'xs',
                  className: l()(x.secondaryIcon, x.favoriteIconFavorite),
                  color: f.Z.unsafe_rawColors.GOLD.css
              })
            : (0, a.jsx)(p.StarOutlineIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  className: x.secondaryIcon
              })
    });
}
function Z(e, n) {
    return o.useMemo(() => {
        if (null == n || e !== L)
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
n.ZP = o.forwardRef(function (e, n) {
    var r, i, s, f, T, S, U, F, V, j;
    let { sound: H, channel: Y, containerClassName: W, className: K, focused: z, forceSecondaryActions: q = !1, interactive: Q = !0, enableSecondaryActions: X = !1, suppressPlaySound: J, onMouseEnter: $, onSelectItem: ee, analyticsLocations: et, buttonOverlay: en = A.Pb.PLAY, showLockForDisabledSound: er = !0, inNitroLockedSection: ei = !1, refreshEnabled: ea = !1, isAnimated: eo = !0, isPlayingSoundOverride: es, isSoundmoji: el, soundmojiVisualEffectRef: eu, tooltipOverride: ec, tooltipClassName: ed, tooltipContentClassName: ef, ...ep } = e,
        { name: eh, emojiId: e_, emojiName: em } = H,
        eg = (0, c.e7)([I.default], () => I.default.getCurrentUser()),
        eE = (0, R.z)(H, null == Y ? void 0 : Y.guild_id),
        { playSoundboardSound: ev, previewSound: ey, isPlayingSound: eb, isPreviewingSound: eI } = (0, N.Z)(H, null !== (T = null == Y ? void 0 : Y.id) && void 0 !== T ? T : null, null !== (S = el ? b.AY.getSetting() : null === (r = b.kU.getSetting()) || void 0 === r ? void 0 : r.volume) && void 0 !== S ? S : 100),
        { createMultipleConfettiAt: eT } = o.useContext(m.h),
        eS = o.useRef(null),
        eA = Z(H.soundId, eS.current),
        eC = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
        eN = o.useRef(w),
        eR = o.useRef(new d.Xp()),
        eO = H.soundId === L,
        eD = 'sound-'.concat(H.soundId),
        ex = (0, u.JA)(eD),
        eL = null != e_ || null != em,
        ew = !(0, C.Nq)(eg, H, Y) && !el,
        eP = q || (X && !ew),
        eM = o.useRef(null),
        ek = (null !== (U = null === (i = eM.current) || void 0 === i ? void 0 : i.scrollHeight) && void 0 !== U ? U : 0) > (null !== (F = null === (s = eM.current) || void 0 === s ? void 0 : s.offsetHeight) && void 0 !== F ? F : 0),
        eU = null !== (V = g.Wq.useStore().bottomPosition) && void 0 !== V ? V : 0,
        eB = (null !== (j = null === (f = eS.current) || void 0 === f ? void 0 : f.getBoundingClientRect().bottom) && void 0 !== j ? j : 0) + 50 > eU ? 'top' : 'bottom',
        [eG, eZ] = o.useState(!1),
        eF = ew && er,
        { enableInlineUpsell: eV } = y.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eF });
    function ej() {
        !J && ev(et);
    }
    function eH() {
        if ((eO && !eC && ((eN.current = Math.min(eN.current + M, P)), Math.random() < eN.current && eT(eA.x, eA.y, void 0, void 0, { sprite: O.vv })), null != ee)) {
            ee();
            return;
        }
        ej();
    }
    let eY = B({
            sound: H,
            previewSound: ey,
            disabled: ew && !q,
            refreshEnabled: ea
        }),
        eW = (e) =>
            J || ew || ea
                ? ew && er && eV
                    ? (0, a.jsx)(p.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: l()(ea ? x.primaryIconRefresh : x.primaryIcon, x.lockIcon, e, { [x.hasEmoji]: eL })
                      })
                    : null
                : (0, a.jsx)(p.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: l()(x.primaryIcon, e)
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
                          (0, a.jsx)('div', { className: x.buttonOverlayBackground }),
                          eW(x.primaryIconTopLevel),
                          (0, a.jsx)('div', {
                              className: x.buttonOverlay,
                              children: (0, a.jsxs)('div', {
                                  className: ea ? x.buttonOverlayActionsRefresh : x.buttonOverlayActions,
                                  children: [eP && eY, eP && eK]
                              })
                          })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: x.buttonOverlay,
                      children: [
                          !ea && (0, a.jsx)('div', { className: l()({ [x.buttonOverlayBackground]: !J }) }),
                          (0, a.jsx)('div', {
                              className: ea ? x.buttonOverlayActionsRefresh : x.buttonOverlayActions,
                              children:
                                  en === A.Pb.SOUNDMOJI
                                      ? (0, a.jsx)(E.ZP, {
                                            sound: H,
                                            channel: Y,
                                            setTooltipShowing: eZ
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
                    className: x.addButtonOverlay,
                    children: [
                        (0, a.jsx)('div', { className: x.buttonOverlayBackground }),
                        (0, a.jsxs)('div', {
                            className: ea ? x.buttonOverlayActionsRefresh : x.buttonOverlayActions,
                            children: [
                                eY,
                                ea
                                    ? (0, a.jsx)('div', {
                                          className: x.primaryIconRefresh,
                                          children: (0, a.jsx)(p.PlusLargeIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: x.plusSign
                                          })
                                      })
                                    : (0, a.jsxs)('div', {
                                          className: x.addButton,
                                          children: [
                                              (0, a.jsx)(p.PlusSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: x.plusSign
                                              }),
                                              (0, a.jsx)(p.Text, {
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
    o.useEffect(() => {
        let e = eR.current;
        return (
            eO &&
                e.start(k, () => {
                    eN.current = Math.max(eN.current - M, w);
                }),
            () => e.stop()
        );
    }, [eO]);
    let eQ = (0, v.a)(eS.current);
    return (0, a.jsxs)('li', {
        ref: n,
        className: l()(x.soundButtonWrapper, W),
        onMouseEnter: $,
        children: [
            (0, a.jsx)(p.Tooltip, {
                'aria-label': null != ec ? H.name : void 0,
                text: null != ec ? ec : H.name,
                tooltipClassName: ed,
                tooltipContentClassName: ef,
                position: eB,
                shouldShow: !eG,
                delay: 500,
                children: (e) =>
                    (0, a.jsxs)(p.ClickableContainer, {
                        ...ep,
                        buttonProps: {
                            ...ex,
                            id: eD,
                            role: 'button'
                        },
                        'aria-label': D.intl.formatToPlainString(D.t.tuMUJy, {
                            emojiName: H.emojiName,
                            soundName: H.name
                        }),
                        className: l()(
                            ea ? x.soundButtonRefresh : x.soundButton,
                            {
                                [x.animated]: eo,
                                [x.playing]: null != es ? es : eb,
                                [x.previewing]: eI,
                                [x.hoverActiveBackground]: J && !ea,
                                [x.soundButtonInteractive]: Q && !ea,
                                [x.soundButtonInteractiveRefresh]: Q && ea,
                                [x.buttonDisabled]: !Q && !q,
                                [x.premiumDisabled]: ew && !q,
                                [x.premiumDisabledRefresh]: ew && ea,
                                [x.buttonDisabledSecondaryActionsEnabled]: !Q && q,
                                [x.focused]: Q && z
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
                                className: l()(ea ? x.soundInfoRefresh : x.soundInfo, { [x.hasEmoji]: eL }),
                                'aria-hidden': !0,
                                ref: eS,
                                children: [
                                    eL &&
                                        (ea
                                            ? (0, a.jsx)('div', {
                                                  className: x.emojiCircle,
                                                  children: (0, a.jsx)(h.Z, {
                                                      emojiId: e_,
                                                      emojiName: em,
                                                      className: x.emoji
                                                  })
                                              })
                                            : (0, a.jsx)(h.Z, {
                                                  emojiId: e_,
                                                  emojiName: em,
                                                  className: x.emoji
                                              })),
                                    (0, a.jsx)(p.Text, {
                                        variant: 'text-xs/medium',
                                        color: Q ? void 0 : 'text-muted',
                                        className: l()(ea ? x.soundNameRefresh : x.soundName, { [x.hasEmoji]: eL }),
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
                (0, a.jsx)(p.Tooltip, {
                    text: D.intl.string(D.t.MDOXJS),
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: ea ? x.unavailableTooltipRefresh : x.unavailableTooltip,
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
