n.d(t, {
    ZP: () => Q,
    hU: () => W,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(442837),
    c = n(846519),
    u = n(692547),
    d = n(28664),
    f = n(481060),
    p = n(596454),
    _ = n(607070),
    m = n(906732),
    h = n(745510),
    g = n(806966),
    E = n(409700),
    b = n(309006),
    y = n(695346),
    O = n(914010),
    v = n(594174),
    S = n(626135),
    I = n(208049),
    T = n(763296),
    C = n(697426),
    A = n(242291),
    N = n(830253),
    P = n(286654),
    R = n(981631),
    D = n(675654),
    w = n(509571),
    x = n(388032),
    L = n(463063);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function U(e, t) {
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
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let B = "1",
    F = 0.01,
    V = 0.1,
    H = 0.01,
    Y = 1000;
function W(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: s = "top", ref: l } = e;
    return (0, r.jsx)(d.u, {
        text: i,
        position: s,
        children: (0, r.jsx)(f.P3F, {
            innerRef: l,
            "aria-label": i,
            className: o()(L.secondaryButton, { [L.buttonDisabled]: t }),
            onClick: n,
            children: a,
        }),
    });
}
function K(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = "top" } = e,
        o = (0, l.e7)([O.Z], () => O.Z.getGuildId());
    function s(e) {
        S.default.track(R.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
            sound_id: t.soundId,
            sound_name: t.name,
            sound_guild_id: t.guildId,
            location_guild_id: o,
        }),
            e.stopPropagation(),
            e.currentTarget.blur(),
            n();
    }
    return (0, r.jsx)(W, {
        tooltipPosition: a,
        disabled: i,
        onClick: s,
        text: x.intl.formatToPlainString(x.t["/8fYO5"], {
            emojiName: t.emojiName,
            soundName: t.name,
        }),
        children: (0, r.jsx)(f.gj8, {
            size: "md",
            color: "currentColor",
            className: L.secondaryIcon,
        }),
    });
}
function z(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: a } = (0, m.ZP)(),
        s = (0, l.e7)([T.Z], () => T.Z.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    s
                        ? (0, I.hs)(t.soundId)
                        : ((0, A.lF)({
                              sound: t,
                              location: U(M({}, a), { object: R.qAy.SOUNDBOARD_SOUND }),
                          }),
                          (0, I.TB)(t.soundId));
            },
            [s, t, a],
        );
    return (0, r.jsx)(W, {
        disabled: n,
        onClick: c,
        text: x.intl.formatToPlainString(s ? x.t.lQLsjc : x.t.Y5DOs4, {
            emojiName: t.emojiName,
            soundName: t.name,
        }),
        children: s
            ? (0, r.jsx)(f.r7p, {
                  size: "xs",
                  className: o()(L.secondaryIcon, L.favoriteIconFavorite),
                  color: u.Z.unsafe_rawColors.GOLD.css,
              })
            : (0, r.jsx)(f.vxU, {
                  size: "xs",
                  color: "currentColor",
                  className: L.secondaryIcon,
              }),
    });
}
function q(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== B)
            return {
                x: 0,
                y: 0,
            };
        let n = t.getBoundingClientRect();
        return {
            x: n.left + n.width / 2,
            y: n.top + n.height / 2,
        };
    }, [t, e]);
}
let Q = i.forwardRef(function (e, t) {
    var n,
        a,
        u,
        m,
        O,
        S,
        {
            sound: I,
            channel: T,
            containerClassName: R,
            className: j,
            focused: k,
            forceSecondaryActions: Z = !1,
            interactive: W = !0,
            enableSecondaryActions: Q = !1,
            suppressPlaySound: X,
            onMouseEnter: J,
            onSelectItem: $,
            analyticsLocations: ee,
            buttonOverlay: et = C.Pb.PLAY,
            showLockForDisabledSound: en = !0,
            inNitroLockedSection: er = !1,
            isAnimated: ei = !0,
            isPlayingSoundOverride: ea,
            isSoundmoji: eo,
            soundmojiVisualEffectRef: es,
            tooltipOverride: el,
        } = e,
        ec = G(e, [
            "sound",
            "channel",
            "containerClassName",
            "className",
            "focused",
            "forceSecondaryActions",
            "interactive",
            "enableSecondaryActions",
            "suppressPlaySound",
            "onMouseEnter",
            "onSelectItem",
            "analyticsLocations",
            "buttonOverlay",
            "showLockForDisabledSound",
            "inNitroLockedSection",
            "isAnimated",
            "isPlayingSoundOverride",
            "isSoundmoji",
            "soundmojiVisualEffectRef",
            "tooltipOverride",
        ]);
    let { name: eu, emojiId: ed, emojiName: ef } = I,
        ep = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        e_ = (0, P.z)(I, null == T ? void 0 : T.guild_id),
        {
            playSoundboardSound: em,
            previewSound: eh,
            isPlayingSound: eg,
        } = (0, N.Z)(
            I,
            null != (u = null == T ? void 0 : T.id) ? u : null,
            null != (m = eo ? y.AY.getSetting() : null == (n = y.kU.getSetting()) ? void 0 : n.volume) ? m : 100,
            !eo && (null == T ? void 0 : T.isVocal()) ? w.w.VOICE : w.w.DEFAULT,
        ),
        { createMultipleConfettiAt: eE } = i.useContext(h.h),
        eb = i.useRef(null),
        ey = q(I.soundId, eb.current),
        eO = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        ev = i.useRef(F),
        eS = i.useRef(new c.Xp()),
        eI = I.soundId === B,
        eT = "sound-".concat(I.soundId),
        eC = (0, s.JA)(eT),
        eA = null != ed || null != ef,
        eN = !(0, A.Nq)(ep, I, T) && !eo,
        eP = Z || (Q && !eN),
        eR = null != (O = g.Wq.useStore().bottomPosition) ? O : 0,
        eD =
            (null != (S = null == (a = eb.current) ? void 0 : a.getBoundingClientRect().bottom) ? S : 0) + 50 > eR
                ? "top"
                : "bottom",
        [ew, ex] = i.useState(!1),
        eL = i.useCallback(() => {
            ex(!0);
        }, []),
        ej = i.useCallback(() => {
            ex(!1);
        }, []),
        eM = eN && en;
    function ek() {
        X || em(ee);
    }
    function eU(e) {
        if (
            (eI &&
                !eO &&
                ((ev.current = Math.min(ev.current + H, V)),
                Math.random() < ev.current && eE(ey.x, ey.y, void 0, void 0, { sprite: D.vv })),
            null != $)
        )
            return void $(e);
        ek();
    }
    let eG = (0, r.jsx)("div", {
            onMouseEnter: eL,
            onMouseLeave: ej,
            children: K({
                sound: I,
                previewSound: eh,
                disabled: eN && !Z,
            }),
        }),
        eZ = (e) =>
            X || eN
                ? eM
                    ? (0, r.jsx)(f.mBM, {
                          size: "xs",
                          color: "currentColor",
                          className: o()(L.primaryIcon, L.lockIcon, e, { [L.hasEmoji]: eA }),
                      })
                    : null
                : (0, r.jsx)(f.o1U, {
                      size: "xs",
                      color: "currentColor",
                      className: o()(L.primaryIcon, e),
                  }),
        eB = (0, r.jsx)("div", {
            onMouseEnter: eL,
            onMouseLeave: ej,
            children: (0, r.jsx)(z, {
                sound: I,
                disabled: !W && !Z,
            }),
        }),
        eF = () =>
            eM && !er
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", { className: L.buttonOverlayBackground }),
                          eZ(L.primaryIconTopLevel),
                          (0, r.jsx)("div", {
                              className: L.buttonOverlay,
                              children: (0, r.jsxs)("div", {
                                  className: L.buttonOverlayActions,
                                  children: [eP && eG, eP && eB],
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: L.buttonOverlay,
                      children: [
                          (0, r.jsx)("div", { className: o()({ [L.buttonOverlayBackground]: !X }) }),
                          (0, r.jsx)("div", {
                              className: L.buttonOverlayActions,
                              children:
                                  et === C.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(E.ZP, {
                                            sound: I,
                                            channel: T,
                                            setTooltipShowing: ex,
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eP && eG, eZ(), eP && eB],
                                        }),
                          }),
                      ],
                  });
    function eV() {
        switch (et) {
            case C.Pb.ADD:
                return (0, r.jsxs)("div", {
                    className: L.addButtonOverlay,
                    children: [
                        (0, r.jsx)("div", { className: L.buttonOverlayBackground }),
                        (0, r.jsxs)("div", {
                            className: L.buttonOverlayActions,
                            children: [
                                eG,
                                (0, r.jsxs)("div", {
                                    className: L.addButton,
                                    children: [
                                        (0, r.jsx)(f.qJs, {
                                            size: "md",
                                            color: "currentColor",
                                            className: L.plusSign,
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-primary",
                                            children: x.intl.string(x.t.QqqXLY),
                                        }),
                                    ],
                                }),
                                eP && eB,
                            ],
                        }),
                    ],
                });
            case C.Pb.NONE:
                return null;
            case C.Pb.PLAY:
            case C.Pb.SOUNDMOJI:
            default:
                return eF();
        }
    }
    i.useEffect(() => {
        let e = eS.current;
        return (
            eI &&
                e.start(Y, () => {
                    ev.current = Math.max(ev.current - H, F);
                }),
            () => e.stop()
        );
    }, [eI]);
    let eH = (0, b.a)(eb.current);
    return (0, r.jsxs)("li", {
        ref: t,
        className: o()(L.soundButtonWrapper, R),
        onMouseEnter: J,
        children: [
            (0, r.jsx)(d.u, {
                "aria-label": null != el ? I.name : void 0,
                __unsupportedReactNodeAsText: null != el ? el : I.name,
                position: eD,
                shouldShow: !ew,
                delay: 500,
                children: (0, r.jsxs)(
                    f.kL8,
                    U(M({}, ec), {
                        buttonProps: U(M({}, eC), {
                            id: eT,
                            role: "button",
                        }),
                        "aria-label": x.intl.formatToPlainString(x.t.tuMUJ2, {
                            emojiName: I.emojiName,
                            soundName: I.name,
                        }),
                        className: o()(
                            L.soundButton,
                            {
                                [L.animated]: ei,
                                [L.playing]: null != ea ? ea : eg,
                                [L.hoverActiveBackground]: X,
                                [L.soundButtonInteractive]: W,
                                [L.buttonDisabled]: !W && !Z,
                                [L.premiumDisabled]: eN && !Z,
                                [L.buttonDisabledSecondaryActionsEnabled]: !W && Z,
                                [L.focused]: W && k,
                            },
                            j,
                        ),
                        onClick: (e) => {
                            null == eU || eU(e);
                        },
                        onContextMenu: Q && !eN ? e_ : void 0,
                        children: [
                            (0, r.jsxs)("div", {
                                className: o()(L.soundInfo, { [L.hasEmoji]: eA }),
                                "aria-hidden": !0,
                                ref: eb,
                                children: [
                                    eA &&
                                        (0, r.jsx)(p.Z, {
                                            emojiId: ed,
                                            emojiName: ef,
                                            className: L.emoji,
                                        }),
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-xs/medium",
                                        color: W ? void 0 : "text-muted",
                                        className: o()(L.soundName, { [L.hasEmoji]: eA }),
                                        children: eu,
                                    }),
                                ],
                            }),
                            eV(),
                        ],
                    }),
                ),
            }),
            !I.available &&
                (0, r.jsx)(d.u, {
                    text: x.intl.string(x.t.MDOXJR),
                    shouldShow: !ew,
                    children: (0, r.jsx)("div", {
                        className: L.unavailableTooltip,
                        children:
                            !er &&
                            (0, r.jsxs)("div", {
                                className: L.unavailableTooltipActions,
                                children: [eG, eB],
                            }),
                    }),
                }),
            !0 === eo &&
                (0, r.jsx)(b.Z, {
                    sound: I,
                    containerDimensions: eH,
                    ref: es,
                }),
        ],
    });
});
