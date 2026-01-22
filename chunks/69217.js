n.d(t, {
    Ay: () => Z,
    dT: () => K,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(311907),
    c = n(451988),
    u = n(827734),
    d = n(990078),
    f = n(397927),
    p = n(565645),
    _ = n(775602),
    h = n(688810),
    m = n(21161),
    g = n(850992),
    E = n(105713),
    b = n(109638),
    y = n(253932),
    O = n(967198),
    A = n(287809),
    v = n(954571),
    S = n(796774),
    I = n(209932),
    T = n(807348),
    C = n(536432),
    N = n(792348),
    R = n(496502),
    w = n(652215),
    P = n(851110),
    D = n(257645),
    x = n(985018),
    L = n(125049);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = V(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let F = "1",
    B = 0.01,
    H = 0.1,
    Y = 0.01,
    W = 1000;
function K(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: o = "top", ref: l } = e;
    return (0, r.jsx)(d.m, {
        text: i,
        position: o,
        children: (0, r.jsx)(f.DUT, {
            innerRef: l,
            "aria-label": i,
            className: s()(L.zr, { [L.$9]: t }),
            onClick: n,
            children: a,
        }),
    });
}
function z(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = "top" } = e,
        s = (0, l.bG)([O.A], () => O.A.getGuildId());
    function o(e) {
        v.default.track(w.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
            sound_id: t.soundId,
            sound_name: t.name,
            sound_guild_id: t.guildId,
            location_guild_id: s,
        }),
            e.stopPropagation(),
            e.currentTarget.blur(),
            n();
    }
    return (0, r.jsx)(K, {
        tooltipPosition: a,
        disabled: i,
        onClick: o,
        text: x.intl.formatToPlainString(x.t["/8fYO5"], {
            emojiName: t.emojiName,
            soundName: t.name,
        }),
        children: (0, r.jsx)(f.HKD, {
            size: "md",
            color: "currentColor",
            className: L.Wo,
        }),
    });
}
function q(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: a } = (0, h.Ay)(),
        o = (0, l.bG)([I.A], () => I.A.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    o
                        ? (0, S.eS)(t.soundId)
                        : ((0, C.Ni)({
                              sound: t,
                              location: U(M({}, a), { object: w.ZSU.SOUNDBOARD_SOUND }),
                          }),
                          (0, S.Rp)(t.soundId));
            },
            [o, t, a],
        );
    return (0, r.jsx)(K, {
        disabled: n,
        onClick: c,
        text: x.intl.formatToPlainString(o ? x.t.lQLsjc : x.t.Y5DOs4, {
            emojiName: t.emojiName,
            soundName: t.name,
        }),
        children: o
            ? (0, r.jsx)(f.Gg5, {
                  size: "xs",
                  className: s()(L.Wo, L.gj),
                  color: u.A.unsafe_rawColors.GOLD.css,
              })
            : (0, r.jsx)(f.yA2, {
                  size: "xs",
                  color: "currentColor",
                  className: L.Wo,
              }),
    });
}
function X(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== F)
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
let Z = i.forwardRef(function (e, t) {
    var n, a, u, h, O, v;
    let [S, ...I] = [e, t],
        {
            sound: w,
            channel: j,
            containerClassName: k,
            className: V,
            focused: K,
            forceSecondaryActions: Z = !1,
            interactive: Q = !0,
            enableSecondaryActions: $ = !1,
            suppressPlaySound: J,
            onMouseEnter: ee,
            onSelectItem: et,
            analyticsLocations: en,
            buttonOverlay: er = T.If.PLAY,
            showLockForDisabledSound: ei = !0,
            inNitroLockedSection: ea = !1,
            isAnimated: es = !0,
            isPlayingSoundOverride: eo,
            isSoundmoji: el,
            soundmojiVisualEffectRef: ec,
            tooltipOverride: eu,
        } = S,
        ed = G(S, [
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
        ]),
        [ef] = I,
        { name: ep, emojiId: e_, emojiName: eh } = w,
        em = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        eg = (0, R.v)(w, null == j ? void 0 : j.guild_id),
        {
            playSoundboardSound: eE,
            previewSound: eb,
            isPlayingSound: ey,
        } = (0, N.A)(
            w,
            null != (n = null == j ? void 0 : j.id) ? n : null,
            null != (a = el ? y.HO.getSetting() : null == (O = y.dG.getSetting()) ? void 0 : O.volume) ? a : 100,
            !el && (null == j ? void 0 : j.isVocal()) ? D.a.VOICE : D.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eO } = i.useContext(m.x),
        eA = i.useRef(null),
        ev = X(w.soundId, eA.current),
        eS = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        eI = i.useRef(B),
        eT = i.useRef(new c.IX()),
        eC = w.soundId === F,
        eN = "sound-".concat(w.soundId),
        eR = (0, o.rm)(eN),
        ew = null != e_ || null != eh,
        eP = !(0, C.Ir)(em, w, j) && !el,
        eD = Z || ($ && !eP),
        ex = null != (u = g.LW.useStore().bottomPosition) ? u : 0,
        eL =
            (null != (h = null == (v = eA.current) ? void 0 : v.getBoundingClientRect().bottom) ? h : 0) + 50 > ex
                ? "top"
                : "bottom",
        [ej, eM] = i.useState(!1),
        ek = i.useCallback(() => {
            eM(!0);
        }, []),
        eU = i.useCallback(() => {
            eM(!1);
        }, []),
        eG = eP && ei;
    function eV() {
        J || eE(en);
    }
    function eF(e) {
        (eC &&
            !eS &&
            ((eI.current = Math.min(eI.current + Y, H)),
            Math.random() < eI.current && eO(ev.x, ev.y, void 0, void 0, { sprite: P.dR })),
        null != et)
            ? et(e)
            : eV();
    }
    let eB = (0, r.jsx)("div", {
            onMouseEnter: ek,
            onMouseLeave: eU,
            children: z({
                sound: w,
                previewSound: eb,
                disabled: eP && !Z,
            }),
        }),
        eH = (e) =>
            J || eP
                ? eG
                    ? (0, r.jsx)(f.XAi, {
                          size: "xs",
                          color: "currentColor",
                          className: s()(L.C4, L.hz, e, { [L.hn]: ew }),
                      })
                    : null
                : (0, r.jsx)(f.udU, {
                      size: "xs",
                      color: "currentColor",
                      className: s()(L.C4, e),
                  }),
        eY = (0, r.jsx)("div", {
            onMouseEnter: ek,
            onMouseLeave: eU,
            children: (0, r.jsx)(q, {
                sound: w,
                disabled: !Q && !Z,
            }),
        }),
        eW = () =>
            eG && !ea
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", { className: L.LQ }),
                          eH(L.B3),
                          (0, r.jsx)("div", {
                              className: L.d7,
                              children: (0, r.jsxs)("div", {
                                  className: L.O5,
                                  children: [eD && eB, eD && eY],
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: L.d7,
                      children: [
                          (0, r.jsx)("div", { className: s()({ [L.LQ]: !J }) }),
                          (0, r.jsx)("div", {
                              className: L.O5,
                              children:
                                  er === T.If.SOUNDMOJI
                                      ? (0, r.jsx)(E.Ay, {
                                            sound: w,
                                            channel: j,
                                            setTooltipShowing: eM,
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eD && eB, eH(), eD && eY],
                                        }),
                          }),
                      ],
                  });
    function eK() {
        switch (er) {
            case T.If.ADD:
                return (0, r.jsxs)("div", {
                    className: L.ec,
                    children: [
                        (0, r.jsx)("div", { className: L.LQ }),
                        (0, r.jsxs)("div", {
                            className: L.O5,
                            children: [
                                eB,
                                (0, r.jsxs)("div", {
                                    className: L.c9,
                                    children: [
                                        (0, r.jsx)(f.j96, {
                                            size: "md",
                                            color: "currentColor",
                                            className: L.y_,
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-strong",
                                            children: x.intl.string(x.t.QqqXLY),
                                        }),
                                    ],
                                }),
                                eD && eY,
                            ],
                        }),
                    ],
                });
            case T.If.NONE:
                return null;
            case T.If.PLAY:
            case T.If.SOUNDMOJI:
            default:
                return eW();
        }
    }
    i.useEffect(() => {
        let e = eT.current;
        return (
            eC &&
                e.start(W, () => {
                    eI.current = Math.max(eI.current - Y, B);
                }),
            () => e.stop()
        );
    }, [eC]);
    let ez = (0, b.o)(eA.current);
    return (0, r.jsxs)("li", {
        ref: ef,
        className: s()(L.H, k),
        onMouseEnter: ee,
        children: [
            (0, r.jsx)(d.m, {
                "aria-label": null != eu ? w.name : void 0,
                __unsupportedReactNodeAsText: null != eu ? eu : w.name,
                position: eL,
                shouldShow: !ej,
                delay: 500,
                children: (0, r.jsxs)(
                    f.sqX,
                    U(M({}, ed), {
                        buttonProps: U(M({}, eR), {
                            id: eN,
                            role: "button",
                        }),
                        "aria-label": x.intl.formatToPlainString(x.t.tuMUJ2, {
                            emojiName: w.emojiName,
                            soundName: w.name,
                        }),
                        className: s()(
                            L.aG,
                            {
                                [L.CS]: es,
                                [L.he]: null != eo ? eo : ey,
                                [L.ju]: J,
                                [L.wT]: Q,
                                [L.$9]: !Q && !Z,
                                [L.Au]: eP && !Z,
                                [L.fx]: !Q && Z,
                                [L.in]: Q && K,
                            },
                            V,
                        ),
                        onClick: (e) => {
                            null == eF || eF(e);
                        },
                        onContextMenu: $ && !eP ? eg : void 0,
                        children: [
                            (0, r.jsxs)("div", {
                                className: s()(L.KM, { [L.hn]: ew }),
                                "aria-hidden": !0,
                                ref: eA,
                                children: [
                                    ew &&
                                        (0, r.jsx)(p.A, {
                                            emojiId: e_,
                                            emojiName: eh,
                                            className: L.Zg,
                                        }),
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-xs/medium",
                                        color: Q ? void 0 : "text-muted",
                                        className: s()(L.TW, { [L.hn]: ew }),
                                        children: ep,
                                    }),
                                ],
                            }),
                            eK(),
                        ],
                    }),
                ),
            }),
            !w.available &&
                (0, r.jsx)(d.m, {
                    text: x.intl.string(x.t.MDOXJR),
                    shouldShow: !ej,
                    children: (0, r.jsx)("div", {
                        className: L.ET,
                        children:
                            !ea &&
                            (0, r.jsxs)("div", {
                                className: L.ld,
                                children: [eB, eY],
                            }),
                    }),
                }),
            !0 === el &&
                (0, r.jsx)(b.A, {
                    sound: w,
                    containerDimensions: ez,
                    ref: ec,
                }),
        ],
    });
});
