n.d(t, {
    K_: () => k,
    ZP: () => B,
    hU: () => M
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
    E = n(631771),
    v = n(695346),
    y = n(594174),
    I = n(208049),
    b = n(763296),
    T = n(697426),
    S = n(242291),
    A = n(706667),
    N = n(286654),
    C = n(675654),
    R = n(388032),
    O = n(965965);
let D = '1',
    x = 0.01,
    L = 0.1,
    P = 0.01,
    w = 1000;
function M(e) {
    let { disabled: t = !1, onClick: n, text: r, children: a, tooltipPosition: o = 'top', refreshEnabled: l = !1 } = e;
    return (0, i.jsx)(d.ua7, {
        text: r,
        position: o,
        children: (e) =>
            (0, i.jsx)(d.P3F, {
                ...e,
                'aria-label': r,
                className: s()(l ? O.secondaryButtonRefresh : O.secondaryButton, { [O.buttonDisabled]: t }),
                onClick: n,
                children: a
            })
    });
}
function k(e) {
    let { sound: t, previewSound: n, disabled: r = !1, tooltipPosition: a = 'top', refreshEnabled: s = !1 } = e;
    function o(e) {
        e.stopPropagation(), e.currentTarget.blur(), n();
    }
    return (0, i.jsx)(M, {
        tooltipPosition: a,
        disabled: r,
        onClick: o,
        text: R.intl.formatToPlainString(R.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: s,
        children: (0, i.jsx)(d.gj8, {
            size: 'md',
            color: 'currentColor',
            className: O.secondaryIcon
        })
    });
}
function U(e) {
    let { sound: t, refreshEnabled: n, disabled: a = !1 } = e,
        o = (0, l.e7)([b.Z], () => b.Z.isFavoriteSound(t.soundId), [t.soundId]),
        u = r.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), o ? (0, I.hs)(t.soundId) : (0, I.TB)(t.soundId);
            },
            [o, t.soundId]
        );
    return (0, i.jsx)(M, {
        disabled: a,
        onClick: u,
        text: R.intl.formatToPlainString(o ? R.t.lQLsjY : R.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: n,
        children: o
            ? (0, i.jsx)(d.r7p, {
                  size: 'xs',
                  className: s()(O.secondaryIcon, O.favoriteIconFavorite),
                  color: c.Z.unsafe_rawColors.GOLD.css
              })
            : (0, i.jsx)(d.vxU, {
                  size: 'xs',
                  color: 'currentColor',
                  className: O.secondaryIcon
              })
    });
}
function G(e, t) {
    return r.useMemo(() => {
        if (null == t || e !== D)
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
let B = r.forwardRef(function (e, t) {
    var n, a, c, I, b, M, B, Z, F, V;
    let { sound: j, channel: H, containerClassName: Y, className: W, focused: K, forceSecondaryActions: z = !1, interactive: q = !0, enableSecondaryActions: Q = !1, suppressPlaySound: X, onMouseEnter: J, onSelectItem: $, analyticsLocations: ee, buttonOverlay: et = T.Pb.PLAY, showLockForDisabledSound: en = !0, inNitroLockedSection: ei = !1, refreshEnabled: er = !1, isAnimated: ea = !0, isPlayingSoundOverride: es, isSoundmoji: eo, soundmojiVisualEffectRef: el, tooltipOverride: eu, tooltipClassName: ec, tooltipContentClassName: ed, ...ef } = e,
        { name: e_, emojiId: ep, emojiName: eh } = j,
        em = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
        eg = (0, N.z)(j, null == H ? void 0 : H.guild_id),
        { playSoundboardSound: eE, previewSound: ev, isPlayingSound: ey, isPreviewingSound: eI } = (0, A.Z)(j, null !== (b = null == H ? void 0 : H.id) && void 0 !== b ? b : null, null !== (M = eo ? v.AY.getSetting() : null === (n = v.kU.getSetting()) || void 0 === n ? void 0 : n.volume) && void 0 !== M ? M : 100),
        { createMultipleConfettiAt: eb } = r.useContext(p.h),
        eT = r.useRef(null),
        eS = G(j.soundId, eT.current),
        eA = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        eN = r.useRef(x),
        eC = r.useRef(new u.Xp()),
        eR = j.soundId === D,
        eO = 'sound-'.concat(j.soundId),
        eD = (0, o.JA)(eO),
        ex = null != ep || null != eh,
        eL = !(0, S.Nq)(em, j, H) && !eo,
        eP = z || (Q && !eL),
        ew = r.useRef(null),
        eM = (null !== (B = null === (a = ew.current) || void 0 === a ? void 0 : a.scrollHeight) && void 0 !== B ? B : 0) > (null !== (Z = null === (c = ew.current) || void 0 === c ? void 0 : c.offsetHeight) && void 0 !== Z ? Z : 0),
        ek = null !== (F = h.Wq.useStore().bottomPosition) && void 0 !== F ? F : 0,
        eU = (null !== (V = null === (I = eT.current) || void 0 === I ? void 0 : I.getBoundingClientRect().bottom) && void 0 !== V ? V : 0) + 50 > ek ? 'top' : 'bottom',
        [eG, eB] = r.useState(!1),
        eZ = eL && en,
        { enableInlineUpsell: eF } = E.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eZ });
    function eV() {
        X || eE(ee);
    }
    function ej(e) {
        if ((eR && !eA && ((eN.current = Math.min(eN.current + P, L)), Math.random() < eN.current && eb(eS.x, eS.y, void 0, void 0, { sprite: C.vv })), null != $)) {
            $(e);
            return;
        }
        eV();
    }
    let eH = k({
            sound: j,
            previewSound: ev,
            disabled: eL && !z,
            refreshEnabled: er
        }),
        eY = (e) =>
            X || eL || er
                ? eL && en && eF
                    ? (0, i.jsx)(d.mBM, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(er ? O.primaryIconRefresh : O.primaryIcon, O.lockIcon, e, { [O.hasEmoji]: ex })
                      })
                    : null
                : (0, i.jsx)(d.o1U, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(O.primaryIcon, e)
                  }),
        eW = (0, i.jsx)(U, {
            sound: j,
            refreshEnabled: er,
            disabled: !q && !z
        }),
        eK = () =>
            eF && eL && en && !ei
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('div', { className: O.buttonOverlayBackground }),
                          eY(O.primaryIconTopLevel),
                          (0, i.jsx)('div', {
                              className: O.buttonOverlay,
                              children: (0, i.jsxs)('div', {
                                  className: er ? O.buttonOverlayActionsRefresh : O.buttonOverlayActions,
                                  children: [eP && eH, eP && eW]
                              })
                          })
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: O.buttonOverlay,
                      children: [
                          !er && (0, i.jsx)('div', { className: s()({ [O.buttonOverlayBackground]: !X }) }),
                          (0, i.jsx)('div', {
                              className: er ? O.buttonOverlayActionsRefresh : O.buttonOverlayActions,
                              children:
                                  et === T.Pb.SOUNDMOJI
                                      ? (0, i.jsx)(m.ZP, {
                                            sound: j,
                                            channel: H,
                                            setTooltipShowing: eB
                                        })
                                      : (0, i.jsxs)(i.Fragment, {
                                            children: [eP && eH, eY(), eP && eW]
                                        })
                          })
                      ]
                  });
    function ez() {
        switch (et) {
            case T.Pb.ADD:
                return (0, i.jsxs)('div', {
                    className: O.addButtonOverlay,
                    children: [
                        (0, i.jsx)('div', { className: O.buttonOverlayBackground }),
                        (0, i.jsxs)('div', {
                            className: er ? O.buttonOverlayActionsRefresh : O.buttonOverlayActions,
                            children: [
                                eH,
                                er
                                    ? (0, i.jsx)('div', {
                                          className: O.primaryIconRefresh,
                                          children: (0, i.jsx)(d.svS, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: O.plusSign
                                          })
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: O.addButton,
                                          children: [
                                              (0, i.jsx)(d.qJs, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: O.plusSign
                                              }),
                                              (0, i.jsx)(d.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-primary',
                                                  children: R.intl.string(R.t.QqqXLS)
                                              })
                                          ]
                                      }),
                                eP && eW
                            ]
                        })
                    ]
                });
            case T.Pb.NONE:
                return null;
            case T.Pb.PLAY:
            case T.Pb.SOUNDMOJI:
            default:
                return eK();
        }
    }
    r.useEffect(() => {
        let e = eC.current;
        return (
            eR &&
                e.start(w, () => {
                    eN.current = Math.max(eN.current - P, x);
                }),
            () => e.stop()
        );
    }, [eR]);
    let eq = (0, g.a)(eT.current);
    return (0, i.jsxs)('li', {
        ref: t,
        className: s()(O.soundButtonWrapper, Y),
        onMouseEnter: J,
        children: [
            (0, i.jsx)(d.ua7, {
                'aria-label': null != eu ? j.name : void 0,
                text: null != eu ? eu : j.name,
                tooltipClassName: ec,
                tooltipContentClassName: ed,
                position: eU,
                shouldShow: !eG,
                delay: 500,
                children: (e) =>
                    (0, i.jsxs)(d.kL8, {
                        ...ef,
                        buttonProps: {
                            ...eD,
                            id: eO,
                            role: 'button'
                        },
                        'aria-label': R.intl.formatToPlainString(R.t.tuMUJy, {
                            emojiName: j.emojiName,
                            soundName: j.name
                        }),
                        className: s()(
                            er ? O.soundButtonRefresh : O.soundButton,
                            {
                                [O.animated]: ea,
                                [O.playing]: null != es ? es : ey,
                                [O.previewing]: eI,
                                [O.hoverActiveBackground]: X && !er,
                                [O.soundButtonInteractive]: q && !er,
                                [O.soundButtonInteractiveRefresh]: q && er,
                                [O.buttonDisabled]: !q && !z,
                                [O.premiumDisabled]: eL && !z,
                                [O.premiumDisabledRefresh]: eL && er,
                                [O.buttonDisabledSecondaryActionsEnabled]: !q && z,
                                [O.focused]: q && K
                            },
                            W
                        ),
                        ...e,
                        onClick: (t) => {
                            var n;
                            null == e || null === (n = e.onClick) || void 0 === n || n.call(e), null == ej || ej(t);
                        },
                        onContextMenu: Q && !eL ? eg : void 0,
                        onMouseOver: () => {
                            var t;
                            return null != eu || (eM && er && !0 !== eo) ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                        },
                        children: [
                            (0, i.jsxs)('div', {
                                className: s()(er ? O.soundInfoRefresh : O.soundInfo, { [O.hasEmoji]: ex }),
                                'aria-hidden': !0,
                                ref: eT,
                                children: [
                                    ex &&
                                        (er
                                            ? (0, i.jsx)('div', {
                                                  className: O.emojiCircle,
                                                  children: (0, i.jsx)(f.Z, {
                                                      emojiId: ep,
                                                      emojiName: eh,
                                                      className: O.emoji
                                                  })
                                              })
                                            : (0, i.jsx)(f.Z, {
                                                  emojiId: ep,
                                                  emojiName: eh,
                                                  className: O.emoji
                                              })),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/medium',
                                        color: q ? void 0 : 'text-muted',
                                        className: s()(er ? O.soundNameRefresh : O.soundName, { [O.hasEmoji]: ex }),
                                        ref: ew,
                                        children: e_
                                    })
                                ]
                            }),
                            ez()
                        ]
                    })
            }),
            !j.available &&
                (0, i.jsx)(d.ua7, {
                    text: R.intl.string(R.t.MDOXJS),
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: er ? O.unavailableTooltipRefresh : O.unavailableTooltip,
                            ...e
                        })
                }),
            !0 === eo &&
                (0, i.jsx)(g.Z, {
                    sound: j,
                    containerDimensions: eq,
                    ref: el
                })
        ]
    });
});
