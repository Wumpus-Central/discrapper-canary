r.d(n, {
    K_: function () {
        return U;
    },
    hU: function () {
        return k;
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
    T = r(594174),
    b = r(208049),
    y = r(763296),
    S = r(697426),
    A = r(242291),
    N = r(706667),
    C = r(286654),
    R = r(675654),
    O = r(388032),
    D = r(965965);
let L = '1',
    x = 0.01,
    w = 0.1,
    P = 0.01,
    M = 1000;
function k(e) {
    let { disabled: n = !1, onClick: r, text: i, children: s, tooltipPosition: o = 'top', refreshEnabled: u = !1 } = e;
    return (0, a.jsx)(_.Tooltip, {
        text: i,
        position: o,
        children: (e) =>
            (0, a.jsx)(_.Clickable, {
                ...e,
                'aria-label': i,
                className: l()(u ? D.secondaryButtonRefresh : D.secondaryButton, { [D.buttonDisabled]: n }),
                onClick: r,
                children: s
            })
    });
}
function U(e) {
    let { sound: n, previewSound: r, disabled: i = !1, tooltipPosition: s = 'top', refreshEnabled: o = !1 } = e;
    function l(e) {
        e.stopPropagation(), e.currentTarget.blur(), r();
    }
    return (0, a.jsx)(k, {
        tooltipPosition: s,
        disabled: i,
        onClick: l,
        text: O.intl.formatToPlainString(O.t['/8fYOz'], {
            emojiName: n.emojiName,
            soundName: n.name
        }),
        refreshEnabled: o,
        children: (0, a.jsx)(_.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: D.secondaryIcon
        })
    });
}
function B(e) {
    let { sound: n, refreshEnabled: r, disabled: i = !1 } = e,
        o = (0, c.e7)([y.Z], () => y.Z.isFavoriteSound(n.soundId), [n.soundId]),
        u = s.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), o ? (0, b.hs)(n.soundId) : (0, b.TB)(n.soundId);
            },
            [o, n.soundId]
        );
    return (0, a.jsx)(k, {
        disabled: i,
        onClick: u,
        text: O.intl.formatToPlainString(o ? O.t.lQLsjY : O.t.Y5DOs7, {
            emojiName: n.emojiName,
            soundName: n.name
        }),
        refreshEnabled: r,
        children: o
            ? (0, a.jsx)(_.StarIcon, {
                  size: 'xs',
                  className: l()(D.secondaryIcon, D.favoriteIconFavorite),
                  color: f.Z.unsafe_rawColors.GOLD.css
              })
            : (0, a.jsx)(_.StarOutlineIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  className: D.secondaryIcon
              })
    });
}
function G(e, n) {
    return s.useMemo(() => {
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
n.ZP = s.forwardRef(function (e, n) {
    var r, i, o, f, b, y, k, F;
    let { sound: Z, channel: V, containerClassName: j, className: H, focused: Y, forceSecondaryActions: W = !1, interactive: K = !0, enableSecondaryActions: z = !1, suppressPlaySound: q, onMouseEnter: Q, onSelectItem: X, analyticsLocations: J, buttonOverlay: $ = S.Pb.PLAY, showLockForDisabledSound: ee = !0, inNitroLockedSection: et = !1, refreshEnabled: en = !1, isAnimated: er = !0, isPlayingSoundOverride: ei, isSoundmoji: ea, soundmojiVisualEffectRef: es, tooltipOverride: eo, tooltipClassName: el, tooltipContentClassName: eu, ...ec } = e,
        { name: ed, emojiId: ef, emojiName: e_ } = Z,
        eh = (0, c.e7)([T.default], () => T.default.getCurrentUser()),
        ep = (0, C.z)(Z, null == V ? void 0 : V.guild_id),
        { playSoundboardSound: em, previewSound: eg, isPlayingSound: eE, isPreviewingSound: ev } = (0, N.Z)(Z, null !== (f = null == V ? void 0 : V.id) && void 0 !== f ? f : null),
        { createMultipleConfettiAt: eI } = s.useContext(m.h),
        eT = s.useRef(null),
        eb = G(Z.soundId, eT.current),
        ey = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        eS = s.useRef(x),
        eA = s.useRef(new d.Xp()),
        eN = Z.soundId === L,
        eC = 'sound-'.concat(Z.soundId),
        eR = (0, u.JA)(eC),
        eO = null != ef || null != e_,
        eD = !(0, A.Nq)(eh, Z, V) && !ea,
        eL = W || (z && !eD),
        ex = s.useRef(null),
        ew = (null !== (b = null === (r = ex.current) || void 0 === r ? void 0 : r.scrollHeight) && void 0 !== b ? b : 0) > (null !== (y = null === (i = ex.current) || void 0 === i ? void 0 : i.offsetHeight) && void 0 !== y ? y : 0),
        eP = null !== (k = g.Wq.useStore().bottomPosition) && void 0 !== k ? k : 0,
        eM = (null !== (F = null === (o = eT.current) || void 0 === o ? void 0 : o.getBoundingClientRect().bottom) && void 0 !== F ? F : 0) + 50 > eP ? 'top' : 'bottom',
        [ek, eU] = s.useState(!1),
        eB = eD && ee,
        { enableInlineUpsell: eG } = I.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eB });
    function eF() {
        !q && em(J);
    }
    function eZ() {
        if ((eN && !ey && ((eS.current = Math.min(eS.current + P, w)), Math.random() < eS.current && eI(eb.x, eb.y, void 0, void 0, { sprite: R.vv })), null != X)) {
            X();
            return;
        }
        eF();
    }
    let eV = U({
            sound: Z,
            previewSound: eg,
            disabled: eD && !W,
            refreshEnabled: en
        }),
        ej = (e) =>
            q || eD || en
                ? eD && ee && eG
                    ? (0, a.jsx)(_.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: l()(en ? D.primaryIconRefresh : D.primaryIcon, D.lockIcon, e, { [D.hasEmoji]: eO })
                      })
                    : null
                : (0, a.jsx)(_.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: l()(D.primaryIcon, e)
                  }),
        eH = (0, a.jsx)(B, {
            sound: Z,
            refreshEnabled: en,
            disabled: !K && !W
        }),
        eY = () =>
            eG && eD && ee && !et
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', { className: D.buttonOverlayBackground }),
                          ej(D.primaryIconTopLevel),
                          (0, a.jsx)('div', {
                              className: D.buttonOverlay,
                              children: (0, a.jsxs)('div', {
                                  className: en ? D.buttonOverlayActionsRefresh : D.buttonOverlayActions,
                                  children: [eL && eV, eL && eH]
                              })
                          })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: D.buttonOverlay,
                      children: [
                          !en && (0, a.jsx)('div', { className: l()({ [D.buttonOverlayBackground]: !q }) }),
                          (0, a.jsx)('div', {
                              className: en ? D.buttonOverlayActionsRefresh : D.buttonOverlayActions,
                              children:
                                  $ === S.Pb.SOUNDMOJI
                                      ? (0, a.jsx)(E.ZP, {
                                            sound: Z,
                                            channel: V,
                                            setTooltipShowing: eU
                                        })
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [eL && eV, ej(), eL && eH]
                                        })
                          })
                      ]
                  });
    function eW() {
        switch ($) {
            case S.Pb.ADD:
                return (0, a.jsxs)('div', {
                    className: D.addButtonOverlay,
                    children: [
                        (0, a.jsx)('div', { className: D.buttonOverlayBackground }),
                        (0, a.jsxs)('div', {
                            className: en ? D.buttonOverlayActionsRefresh : D.buttonOverlayActions,
                            children: [
                                eV,
                                en
                                    ? (0, a.jsx)('div', {
                                          className: D.primaryIconRefresh,
                                          children: (0, a.jsx)(_.PlusLargeIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: D.plusSign
                                          })
                                      })
                                    : (0, a.jsxs)('div', {
                                          className: D.addButton,
                                          children: [
                                              (0, a.jsx)(_.PlusSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: D.plusSign
                                              }),
                                              (0, a.jsx)(_.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-primary',
                                                  children: O.intl.string(O.t.QqqXLS)
                                              })
                                          ]
                                      }),
                                eL && eH
                            ]
                        })
                    ]
                });
            case S.Pb.NONE:
                return null;
            case S.Pb.PLAY:
            case S.Pb.SOUNDMOJI:
            default:
                return eY();
        }
    }
    s.useEffect(() => {
        let e = eA.current;
        return (
            eN &&
                e.start(M, () => {
                    eS.current = Math.max(eS.current - P, x);
                }),
            () => e.stop()
        );
    }, [eN]);
    let eK = (0, v.a)(eT.current);
    return (0, a.jsxs)('li', {
        ref: n,
        className: l()(D.soundButtonWrapper, j),
        onMouseEnter: Q,
        children: [
            (0, a.jsx)(_.Tooltip, {
                'aria-label': null != eo ? Z.name : void 0,
                text: null != eo ? eo : Z.name,
                tooltipClassName: el,
                tooltipContentClassName: eu,
                position: eM,
                shouldShow: !ek,
                delay: 500,
                children: (e) =>
                    (0, a.jsxs)(_.ClickableContainer, {
                        ...ec,
                        buttonProps: {
                            ...eR,
                            id: eC,
                            role: 'button'
                        },
                        'aria-label': O.intl.formatToPlainString(O.t.tuMUJy, {
                            emojiName: Z.emojiName,
                            soundName: Z.name
                        }),
                        className: l()(
                            en ? D.soundButtonRefresh : D.soundButton,
                            {
                                [D.animated]: er,
                                [D.playing]: null != ei ? ei : eE,
                                [D.previewing]: ev,
                                [D.hoverActiveBackground]: q && !en,
                                [D.soundButtonInteractive]: K && !en,
                                [D.soundButtonInteractiveRefresh]: K && en,
                                [D.buttonDisabled]: !K && !W,
                                [D.premiumDisabled]: eD && !W,
                                [D.premiumDisabledRefresh]: eD && en,
                                [D.buttonDisabledSecondaryActionsEnabled]: !K && W,
                                [D.focused]: K && Y
                            },
                            H
                        ),
                        ...e,
                        onClick: () => {
                            var n;
                            null == e || null === (n = e.onClick) || void 0 === n || n.call(e), null == eZ || eZ();
                        },
                        onContextMenu: z && !eD ? ep : void 0,
                        onMouseOver: () => {
                            var n;
                            return null != eo || (ew && en && !0 !== ea) ? (null === (n = e.onMouseEnter) || void 0 === n ? void 0 : n.call(e)) : null;
                        },
                        children: [
                            (0, a.jsxs)('div', {
                                className: l()(en ? D.soundInfoRefresh : D.soundInfo, { [D.hasEmoji]: eO }),
                                'aria-hidden': !0,
                                ref: eT,
                                children: [
                                    eO &&
                                        (en
                                            ? (0, a.jsx)('div', {
                                                  className: D.emojiCircle,
                                                  children: (0, a.jsx)(h.Z, {
                                                      emojiId: ef,
                                                      emojiName: e_,
                                                      className: D.emoji
                                                  })
                                              })
                                            : (0, a.jsx)(h.Z, {
                                                  emojiId: ef,
                                                  emojiName: e_,
                                                  className: D.emoji
                                              })),
                                    (0, a.jsx)(_.Text, {
                                        variant: 'text-xs/medium',
                                        color: K ? void 0 : 'text-muted',
                                        className: l()(en ? D.soundNameRefresh : D.soundName, { [D.hasEmoji]: eO }),
                                        ref: ex,
                                        children: ed
                                    })
                                ]
                            }),
                            eW()
                        ]
                    })
            }),
            !Z.available &&
                (0, a.jsx)(_.Tooltip, {
                    text: O.intl.string(O.t.MDOXJS),
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: en ? D.unavailableTooltipRefresh : D.unavailableTooltip,
                            ...e
                        })
                }),
            !0 === ea &&
                (0, a.jsx)(v.Z, {
                    sound: Z,
                    containerDimensions: eK,
                    ref: es
                })
        ]
    });
});
