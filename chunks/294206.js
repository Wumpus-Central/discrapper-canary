n.d(t, {
    ZP: () => q,
    hU: () => Y,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(91192),
    l = n(442837),
    c = n(846519),
    u = n(692547),
    d = n(481060),
    f = n(596454),
    _ = n(607070),
    p = n(906732),
    h = n(745510),
    m = n(806966),
    g = n(409700),
    E = n(309006),
    b = n(695346),
    y = n(914010),
    O = n(594174),
    v = n(626135),
    I = n(208049),
    T = n(763296),
    S = n(697426),
    A = n(242291),
    N = n(830253),
    C = n(286654),
    R = n(981631),
    P = n(675654),
    w = n(509571),
    D = n(388032),
    L = n(463063);
function x(e, t, n) {
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
                x(e, t, n[t]);
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
function k(e, t) {
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
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = G(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let B = "1",
    Z = 0.01,
    F = 0.1,
    V = 0.01,
    H = 1000;
function Y(e) {
    let { disabled: t = !1, onClick: n, text: i, children: o, tooltipPosition: s = "top", ref: l } = e;
    return (0, r.jsx)(d.ua7, {
        text: i,
        position: s,
        children: (e) =>
            (0, r.jsx)(
                d.P3F,
                k(M({}, e), {
                    innerRef: l,
                    "aria-label": i,
                    className: a()(L.secondaryButton, { [L.buttonDisabled]: t }),
                    onClick: n,
                    children: o,
                }),
            ),
    });
}
function W(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: o = "top" } = e,
        a = (0, l.e7)([y.Z], () => y.Z.getGuildId());
    function s(e) {
        v.default.track(R.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
            sound_id: t.soundId,
            sound_name: t.name,
            sound_guild_id: t.guildId,
            location_guild_id: a,
        }),
            e.stopPropagation(),
            e.currentTarget.blur(),
            n();
    }
    return (0, r.jsx)(Y, {
        tooltipPosition: o,
        disabled: i,
        onClick: s,
        text: D.intl.formatToPlainString(D.t["/8fYOz"], {
            emojiName: t.emojiName,
            soundName: t.name,
        }),
        children: (0, r.jsx)(d.gj8, {
            size: "md",
            color: "currentColor",
            className: L.secondaryIcon,
        }),
    });
}
function K(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: o } = (0, p.ZP)(),
        s = (0, l.e7)([T.Z], () => T.Z.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    s
                        ? (0, I.hs)(t.soundId)
                        : ((0, A.lF)({
                              sound: t,
                              location: k(M({}, o), { object: R.qAy.SOUNDBOARD_SOUND }),
                          }),
                          (0, I.TB)(t.soundId));
            },
            [s, t, o],
        );
    return (0, r.jsx)(Y, {
        disabled: n,
        onClick: c,
        text: D.intl.formatToPlainString(s ? D.t.lQLsjY : D.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name,
        }),
        children: s
            ? (0, r.jsx)(d.r7p, {
                  size: "xs",
                  className: a()(L.secondaryIcon, L.favoriteIconFavorite),
                  color: u.Z.unsafe_rawColors.GOLD.css,
              })
            : (0, r.jsx)(d.vxU, {
                  size: "xs",
                  color: "currentColor",
                  className: L.secondaryIcon,
              }),
    });
}
function z(e, t) {
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
let q = i.forwardRef(function (e, t) {
    var n,
        o,
        u,
        p,
        y,
        v,
        {
            sound: I,
            channel: T,
            containerClassName: R,
            className: x,
            focused: j,
            forceSecondaryActions: G = !1,
            interactive: Y = !0,
            enableSecondaryActions: q = !1,
            suppressPlaySound: X,
            onMouseEnter: Q,
            onSelectItem: J,
            analyticsLocations: $,
            buttonOverlay: ee = S.Pb.PLAY,
            showLockForDisabledSound: et = !0,
            inNitroLockedSection: en = !1,
            isAnimated: er = !0,
            isPlayingSoundOverride: ei,
            isSoundmoji: eo,
            soundmojiVisualEffectRef: ea,
            tooltipOverride: es,
            tooltipClassName: el,
            tooltipContentClassName: ec,
        } = e,
        eu = U(e, [
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
            "tooltipClassName",
            "tooltipContentClassName",
        ]);
    let { name: ed, emojiId: ef, emojiName: e_ } = I,
        ep = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        eh = (0, C.z)(I, null == T ? void 0 : T.guild_id),
        {
            playSoundboardSound: em,
            previewSound: eg,
            isPlayingSound: eE,
        } = (0, N.Z)(
            I,
            null != (u = null == T ? void 0 : T.id) ? u : null,
            null != (p = eo ? b.AY.getSetting() : null == (n = b.kU.getSetting()) ? void 0 : n.volume) ? p : 100,
            !eo && (null == T ? void 0 : T.isVocal()) ? w.w.VOICE : w.w.DEFAULT,
        ),
        { createMultipleConfettiAt: eb } = i.useContext(h.h),
        ey = i.useRef(null),
        eO = z(I.soundId, ey.current),
        ev = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        eI = i.useRef(Z),
        eT = i.useRef(new c.Xp()),
        eS = I.soundId === B,
        eA = "sound-".concat(I.soundId),
        eN = (0, s.JA)(eA),
        eC = null != ef || null != e_,
        eR = !(0, A.Nq)(ep, I, T) && !eo,
        eP = G || (q && !eR),
        ew = null != (y = m.Wq.useStore().bottomPosition) ? y : 0,
        eD =
            (null != (v = null == (o = ey.current) ? void 0 : o.getBoundingClientRect().bottom) ? v : 0) + 50 > ew
                ? "top"
                : "bottom",
        [eL, ex] = i.useState(!1),
        eM = eR && et;
    function ej() {
        X || em($);
    }
    function ek(e) {
        if (
            (eS &&
                !ev &&
                ((eI.current = Math.min(eI.current + V, F)),
                Math.random() < eI.current && eb(eO.x, eO.y, void 0, void 0, { sprite: P.vv })),
            null != J)
        )
            return void J(e);
        ej();
    }
    let eU = W({
            sound: I,
            previewSound: eg,
            disabled: eR && !G,
        }),
        eG = (e) =>
            X || eR
                ? eM
                    ? (0, r.jsx)(d.mBM, {
                          size: "xs",
                          color: "currentColor",
                          className: a()(L.primaryIcon, L.lockIcon, e, { [L.hasEmoji]: eC }),
                      })
                    : null
                : (0, r.jsx)(d.o1U, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(L.primaryIcon, e),
                  }),
        eB = (0, r.jsx)(K, {
            sound: I,
            disabled: !Y && !G,
        }),
        eZ = () =>
            eM && !en
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", { className: L.buttonOverlayBackground }),
                          eG(L.primaryIconTopLevel),
                          (0, r.jsx)("div", {
                              className: L.buttonOverlay,
                              children: (0, r.jsxs)("div", {
                                  className: L.buttonOverlayActions,
                                  children: [eP && eU, eP && eB],
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: L.buttonOverlay,
                      children: [
                          (0, r.jsx)("div", { className: a()({ [L.buttonOverlayBackground]: !X }) }),
                          (0, r.jsx)("div", {
                              className: L.buttonOverlayActions,
                              children:
                                  ee === S.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(g.ZP, {
                                            sound: I,
                                            channel: T,
                                            setTooltipShowing: ex,
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eP && eU, eG(), eP && eB],
                                        }),
                          }),
                      ],
                  });
    function eF() {
        switch (ee) {
            case S.Pb.ADD:
                return (0, r.jsxs)("div", {
                    className: L.addButtonOverlay,
                    children: [
                        (0, r.jsx)("div", { className: L.buttonOverlayBackground }),
                        (0, r.jsxs)("div", {
                            className: L.buttonOverlayActions,
                            children: [
                                eU,
                                (0, r.jsxs)("div", {
                                    className: L.addButton,
                                    children: [
                                        (0, r.jsx)(d.qJs, {
                                            size: "md",
                                            color: "currentColor",
                                            className: L.plusSign,
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-primary",
                                            children: D.intl.string(D.t.QqqXLS),
                                        }),
                                    ],
                                }),
                                eP && eB,
                            ],
                        }),
                    ],
                });
            case S.Pb.NONE:
                return null;
            case S.Pb.PLAY:
            case S.Pb.SOUNDMOJI:
            default:
                return eZ();
        }
    }
    i.useEffect(() => {
        let e = eT.current;
        return (
            eS &&
                e.start(H, () => {
                    eI.current = Math.max(eI.current - V, Z);
                }),
            () => e.stop()
        );
    }, [eS]);
    let eV = (0, E.a)(ey.current);
    return (0, r.jsxs)("li", {
        ref: t,
        className: a()(L.soundButtonWrapper, R),
        onMouseEnter: Q,
        children: [
            (0, r.jsx)(d.ua7, {
                "aria-label": null != es ? I.name : void 0,
                text: null != es ? es : I.name,
                tooltipClassName: el,
                tooltipContentClassName: ec,
                position: eD,
                shouldShow: !eL,
                delay: 500,
                children: (e) =>
                    (0, r.jsxs)(
                        d.kL8,
                        k(
                            M(
                                k(M({}, eu), {
                                    buttonProps: k(M({}, eN), {
                                        id: eA,
                                        role: "button",
                                    }),
                                    "aria-label": D.intl.formatToPlainString(D.t.tuMUJy, {
                                        emojiName: I.emojiName,
                                        soundName: I.name,
                                    }),
                                    className: a()(
                                        L.soundButton,
                                        {
                                            [L.animated]: er,
                                            [L.playing]: null != ei ? ei : eE,
                                            [L.hoverActiveBackground]: X,
                                            [L.soundButtonInteractive]: Y,
                                            [L.buttonDisabled]: !Y && !G,
                                            [L.premiumDisabled]: eR && !G,
                                            [L.buttonDisabledSecondaryActionsEnabled]: !Y && G,
                                            [L.focused]: Y && j,
                                        },
                                        x,
                                    ),
                                }),
                                e,
                            ),
                            {
                                onClick: (t) => {
                                    var n;
                                    null == e || null == (n = e.onClick) || n.call(e), null == ek || ek(t);
                                },
                                onContextMenu: q && !eR ? eh : void 0,
                                onMouseOver: () => {
                                    var t;
                                    return null != es ? (null == (t = e.onMouseEnter) ? void 0 : t.call(e)) : null;
                                },
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: a()(L.soundInfo, { [L.hasEmoji]: eC }),
                                        "aria-hidden": !0,
                                        ref: ey,
                                        children: [
                                            eC &&
                                                (0, r.jsx)(f.Z, {
                                                    emojiId: ef,
                                                    emojiName: e_,
                                                    className: L.emoji,
                                                }),
                                            (0, r.jsx)(d.Text, {
                                                variant: "text-xs/medium",
                                                color: Y ? void 0 : "text-muted",
                                                className: a()(L.soundName, { [L.hasEmoji]: eC }),
                                                children: ed,
                                            }),
                                        ],
                                    }),
                                    eF(),
                                ],
                            },
                        ),
                    ),
            }),
            !I.available &&
                (0, r.jsx)(d.ua7, {
                    text: D.intl.string(D.t.MDOXJS),
                    children: (e) => (0, r.jsx)("div", M({ className: L.unavailableTooltip }, e)),
                }),
            !0 === eo &&
                (0, r.jsx)(E.Z, {
                    sound: I,
                    containerDimensions: eV,
                    ref: ea,
                }),
        ],
    });
});
