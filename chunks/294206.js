n.d(t, {
    ZP: () => X,
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
    _ = n(596454),
    p = n(607070),
    h = n(906732),
    m = n(745510),
    g = n(806966),
    E = n(409700),
    b = n(309006),
    y = n(695346),
    O = n(914010),
    v = n(594174),
    I = n(626135),
    T = n(208049),
    S = n(763296),
    A = n(697426),
    C = n(242291),
    N = n(830253),
    R = n(286654),
    P = n(981631),
    D = n(675654),
    w = n(509571),
    L = n(388032),
    x = n(620209);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = B(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let Z = "1",
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
            className: o()(x.secondaryButton, { [x.buttonDisabled]: t }),
            onClick: n,
            children: a,
        }),
    });
}
function K(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = "top" } = e,
        o = (0, l.e7)([O.Z], () => O.Z.getGuildId());
    function s(e) {
        I.default.track(P.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
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
        text: L.intl.formatToPlainString(L.t["/8fYO5"], {
            emojiName: t.emojiName,
            soundName: t.name,
        }),
        children: (0, r.jsx)(f.gj8, {
            size: "md",
            color: "currentColor",
            className: x.secondaryIcon,
        }),
    });
}
function z(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: a } = (0, h.ZP)(),
        s = (0, l.e7)([S.Z], () => S.Z.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    s
                        ? (0, T.hs)(t.soundId)
                        : ((0, C.lF)({
                              sound: t,
                              location: U(k({}, a), { object: P.qAy.SOUNDBOARD_SOUND }),
                          }),
                          (0, T.TB)(t.soundId));
            },
            [s, t, a],
        );
    return (0, r.jsx)(W, {
        disabled: n,
        onClick: c,
        text: L.intl.formatToPlainString(s ? L.t.lQLsjc : L.t.Y5DOs4, {
            emojiName: t.emojiName,
            soundName: t.name,
        }),
        children: s
            ? (0, r.jsx)(f.r7p, {
                  size: "xs",
                  className: o()(x.secondaryIcon, x.favoriteIconFavorite),
                  color: u.Z.unsafe_rawColors.GOLD.css,
              })
            : (0, r.jsx)(f.vxU, {
                  size: "xs",
                  color: "currentColor",
                  className: x.secondaryIcon,
              }),
    });
}
function q(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== Z)
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
let X = i.forwardRef(function (e, t) {
    var n,
        a,
        u,
        h,
        O,
        I,
        {
            sound: T,
            channel: S,
            containerClassName: P,
            className: M,
            focused: j,
            forceSecondaryActions: B = !1,
            interactive: W = !0,
            enableSecondaryActions: X = !1,
            suppressPlaySound: Q,
            onMouseEnter: J,
            onSelectItem: $,
            analyticsLocations: ee,
            buttonOverlay: et = A.Pb.PLAY,
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
    let { name: eu, emojiId: ed, emojiName: ef } = T,
        e_ = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        ep = (0, R.z)(T, null == S ? void 0 : S.guild_id),
        {
            playSoundboardSound: eh,
            previewSound: em,
            isPlayingSound: eg,
        } = (0, N.Z)(
            T,
            null != (u = null == S ? void 0 : S.id) ? u : null,
            null != (h = eo ? y.AY.getSetting() : null == (n = y.kU.getSetting()) ? void 0 : n.volume) ? h : 100,
            !eo && (null == S ? void 0 : S.isVocal()) ? w.w.VOICE : w.w.DEFAULT,
        ),
        { createMultipleConfettiAt: eE } = i.useContext(m.h),
        eb = i.useRef(null),
        ey = q(T.soundId, eb.current),
        eO = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        ev = i.useRef(F),
        eI = i.useRef(new c.Xp()),
        eT = T.soundId === Z,
        eS = "sound-".concat(T.soundId),
        eA = (0, s.JA)(eS),
        eC = null != ed || null != ef,
        eN = !(0, C.Nq)(e_, T, S) && !eo,
        eR = B || (X && !eN),
        eP = null != (O = g.Wq.useStore().bottomPosition) ? O : 0,
        eD =
            (null != (I = null == (a = eb.current) ? void 0 : a.getBoundingClientRect().bottom) ? I : 0) + 50 > eP
                ? "top"
                : "bottom",
        [ew, eL] = i.useState(!1),
        ex = i.useCallback(() => {
            eL(!0);
        }, []),
        eM = i.useCallback(() => {
            eL(!1);
        }, []),
        ek = eN && en;
    function ej() {
        Q || eh(ee);
    }
    function eU(e) {
        if (
            (eT &&
                !eO &&
                ((ev.current = Math.min(ev.current + H, V)),
                Math.random() < ev.current && eE(ey.x, ey.y, void 0, void 0, { sprite: D.vv })),
            null != $)
        )
            return void $(e);
        ej();
    }
    let eG = (0, r.jsx)("div", {
            onMouseEnter: ex,
            onMouseLeave: eM,
            children: K({
                sound: T,
                previewSound: em,
                disabled: eN && !B,
            }),
        }),
        eB = (e) =>
            Q || eN
                ? ek
                    ? (0, r.jsx)(f.mBM, {
                          size: "xs",
                          color: "currentColor",
                          className: o()(x.primaryIcon, x.lockIcon, e, { [x.hasEmoji]: eC }),
                      })
                    : null
                : (0, r.jsx)(f.o1U, {
                      size: "xs",
                      color: "currentColor",
                      className: o()(x.primaryIcon, e),
                  }),
        eZ = (0, r.jsx)("div", {
            onMouseEnter: ex,
            onMouseLeave: eM,
            children: (0, r.jsx)(z, {
                sound: T,
                disabled: !W && !B,
            }),
        }),
        eF = () =>
            ek && !er
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", { className: x.buttonOverlayBackground }),
                          eB(x.primaryIconTopLevel),
                          (0, r.jsx)("div", {
                              className: x.buttonOverlay,
                              children: (0, r.jsxs)("div", {
                                  className: x.buttonOverlayActions,
                                  children: [eR && eG, eR && eZ],
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: x.buttonOverlay,
                      children: [
                          (0, r.jsx)("div", { className: o()({ [x.buttonOverlayBackground]: !Q }) }),
                          (0, r.jsx)("div", {
                              className: x.buttonOverlayActions,
                              children:
                                  et === A.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(E.ZP, {
                                            sound: T,
                                            channel: S,
                                            setTooltipShowing: eL,
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eR && eG, eB(), eR && eZ],
                                        }),
                          }),
                      ],
                  });
    function eV() {
        switch (et) {
            case A.Pb.ADD:
                return (0, r.jsxs)("div", {
                    className: x.addButtonOverlay,
                    children: [
                        (0, r.jsx)("div", { className: x.buttonOverlayBackground }),
                        (0, r.jsxs)("div", {
                            className: x.buttonOverlayActions,
                            children: [
                                eG,
                                (0, r.jsxs)("div", {
                                    className: x.addButton,
                                    children: [
                                        (0, r.jsx)(f.qJs, {
                                            size: "md",
                                            color: "currentColor",
                                            className: x.plusSign,
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-primary",
                                            children: L.intl.string(L.t.QqqXLY),
                                        }),
                                    ],
                                }),
                                eR && eZ,
                            ],
                        }),
                    ],
                });
            case A.Pb.NONE:
                return null;
            case A.Pb.PLAY:
            case A.Pb.SOUNDMOJI:
            default:
                return eF();
        }
    }
    i.useEffect(() => {
        let e = eI.current;
        return (
            eT &&
                e.start(Y, () => {
                    ev.current = Math.max(ev.current - H, F);
                }),
            () => e.stop()
        );
    }, [eT]);
    let eH = (0, b.a)(eb.current);
    return (0, r.jsxs)("li", {
        ref: t,
        className: o()(x.soundButtonWrapper, P),
        onMouseEnter: J,
        children: [
            (0, r.jsx)(d.u, {
                "aria-label": null != el ? T.name : void 0,
                __unsupportedReactNodeAsText: null != el ? el : T.name,
                position: eD,
                shouldShow: !ew,
                delay: 500,
                children: (0, r.jsxs)(
                    f.kL8,
                    U(k({}, ec), {
                        buttonProps: U(k({}, eA), {
                            id: eS,
                            role: "button",
                        }),
                        "aria-label": L.intl.formatToPlainString(L.t.tuMUJ2, {
                            emojiName: T.emojiName,
                            soundName: T.name,
                        }),
                        className: o()(
                            x.soundButton,
                            {
                                [x.animated]: ei,
                                [x.playing]: null != ea ? ea : eg,
                                [x.hoverActiveBackground]: Q,
                                [x.soundButtonInteractive]: W,
                                [x.buttonDisabled]: !W && !B,
                                [x.premiumDisabled]: eN && !B,
                                [x.buttonDisabledSecondaryActionsEnabled]: !W && B,
                                [x.focused]: W && j,
                            },
                            M,
                        ),
                        onClick: (e) => {
                            null == eU || eU(e);
                        },
                        onContextMenu: X && !eN ? ep : void 0,
                        children: [
                            (0, r.jsxs)("div", {
                                className: o()(x.soundInfo, { [x.hasEmoji]: eC }),
                                "aria-hidden": !0,
                                ref: eb,
                                children: [
                                    eC &&
                                        (0, r.jsx)(_.Z, {
                                            emojiId: ed,
                                            emojiName: ef,
                                            className: x.emoji,
                                        }),
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-xs/medium",
                                        color: W ? void 0 : "text-muted",
                                        className: o()(x.soundName, { [x.hasEmoji]: eC }),
                                        children: eu,
                                    }),
                                ],
                            }),
                            eV(),
                        ],
                    }),
                ),
            }),
            !T.available &&
                (0, r.jsx)(d.u, {
                    text: L.intl.string(L.t.MDOXJR),
                    children: (0, r.jsx)("div", { className: x.unavailableTooltip }),
                }),
            !0 === eo &&
                (0, r.jsx)(b.Z, {
                    sound: T,
                    containerDimensions: eH,
                    ref: es,
                }),
        ],
    });
});
