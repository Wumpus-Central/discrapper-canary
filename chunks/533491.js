t.d(n, { PI: () => Z, dT: () => $, Ay: () => et });
var s = t(477900),
    i = t(582128),
    l = t(503698),
    a = t.n(l),
    r = t(837381),
    o = t(855986),
    c = t(451988),
    d = t(646514),
    u = t(866665),
    m = t(939249),
    h = t(342073),
    x = t(983851),
    j = t(27232),
    g = t(505930),
    p = t(782134),
    b = t(194261),
    N = t(307301),
    I = t(834730),
    f = t(890856),
    v = t(565645),
    C = t(775602),
    A = t(688810),
    E = t(21161),
    S = t(850992),
    y = t(456086),
    O = t(435558),
    T = t(115560),
    k = t(716365),
    _ = t(407781),
    R = t(287809),
    G = t(194486),
    P = t(178226);
function L(e) {
    let { sound: n, containerDimensions: t, ref: l } = e,
        a = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        r = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        [c, d] = i.useState([]),
        u = c.length < 50,
        m = n?.emojiId != null || n?.emojiName != null,
        h = i.useCallback(() => {
            if (!r && u && m && null != a) {
                let e = (0, k.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    s = G.B.PREMIUM,
                    i = (0, O.random)(k.Bf[s].length, !1),
                    l = { id: (0, T.A)(), animationId: i, animationType: s, shouldResize: t, url: e, userId: a.id };
                d((e) => [...e, l]);
            }
        }, [r, u, m, a, n]);
    i.useImperativeHandle(l, () => ({ addAnimation: h }));
    let x = i.useCallback((e) => {
        d((n) => {
            let t = [...n],
                s = t.findIndex((n) => n.id === e);
            return (t.splice(s, 1), t);
        });
    }, []);
    return r || !m
        ? null
        : (0, s.jsx)("div", {
              className: P.z,
              style: { width: t.width, height: t.height },
              children: c.map((e) => (0, s.jsx)(_.A, { containerDimensions: t, effect: e, onComplete: x }, e.id)),
          });
}
var M = t(253932),
    w = t(967198),
    D = t(129230),
    U = t(796774),
    z = t(209932),
    V = t(807348),
    B = t(458976),
    K = t(792348),
    J = t(340368),
    W = t(496502),
    H = t(652215),
    F = t(77183),
    q = t(257645),
    X = t(792996),
    Y = t(948611);
function $(e) {
    let { disabled: n = !1, onClick: t, text: i, children: l, tooltipPosition: r = "top", ref: o } = e;
    return (0, s.jsx)(u.m, {
        text: i,
        position: r,
        children: (0, s.jsx)(m.D, {
            innerRef: o,
            "aria-label": i,
            className: a()(Y.zr, { [Y.$9]: n }),
            onClick: t,
            children: l,
        }),
    });
}
function Z(e) {
    let { sound: n, previewSound: t, disabled: l = !1, tooltipPosition: a = "top", analyticsLocations: r } = e,
        c = (0, o.bG)([w.A], () => w.A.getGuildId()),
        d = (0, J._)("PreviewButton"),
        u = i.useMemo(
            () =>
                d
                    ? (0, s.jsx)(h.WaveformIcon, { size: "md", color: "currentColor", className: Y.Wo })
                    : (0, s.jsx)(x.VoiceNormalIcon, { size: "md", color: "currentColor", className: Y.Wo }),
            [d],
        );
    return (0, s.jsx)($, {
        tooltipPosition: a,
        disabled: l,
        onClick: function (e) {
            (D.default.track(H.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: n.soundId,
                sound_name: n.name,
                sound_guild_id: n.guildId,
                location_guild_id: c,
                location_stack: r,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                t());
        },
        text: X.intl.formatToPlainString(X.t["/8fYO5"], { emojiName: n.emojiName, soundName: n.name }),
        children: u,
    });
}
function Q(e) {
    let { sound: n, disabled: t = !1 } = e,
        { analyticsLocations: l } = (0, A.Ay)(),
        r = (0, o.bG)([z.A], () => z.A.isFavoriteSound(n.soundId), [n.soundId]),
        c = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, U.eS)(n.soundId)
                        : ((0, B.Ni)({ sound: n, location: { ...l, object: H.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(n.soundId)));
            },
            [r, n, l],
        );
    return (0, s.jsx)($, {
        disabled: t,
        onClick: c,
        text: X.intl.formatToPlainString(r ? X.t.lQLsjc : X.t.Y5DOs4, { emojiName: n.emojiName, soundName: n.name }),
        children: r
            ? (0, s.jsx)(j.StarIcon, {
                  size: "xs",
                  className: a()(Y.Wo, Y.gj),
                  color: d.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, s.jsx)(g.StarOutlineIcon, { size: "xs", color: "currentColor", className: Y.Wo }),
    });
}
function ee(e) {
    var n, t, l;
    let d,
        {
            sound: m,
            channel: h,
            containerClassName: x,
            className: j,
            focused: g,
            forceSecondaryActions: A = !1,
            interactive: O = !0,
            enableSecondaryActions: T = !1,
            suppressPlaySound: k,
            onMouseEnter: _,
            onSelectItem: G,
            analyticsLocations: P,
            buttonOverlay: w = V.If.PLAY,
            showLockForDisabledSound: D = !0,
            inNitroLockedSection: U = !1,
            isAnimated: z = !0,
            isPlayingSoundOverride: J,
            isSoundmoji: H,
            soundmojiVisualEffectRef: $,
            tooltipOverride: ee,
            isNew: et = !1,
            ref: es,
            ...ei
        } = e,
        { name: el, emojiId: ea, emojiName: er } = m,
        eo = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        ec = (0, W.v)(m, h?.guild_id),
        {
            playSoundboardSound: ed,
            previewSound: eu,
            isPlayingSound: em,
        } = (0, K.A)(
            m,
            h?.id ?? null,
            (H ? M.HO.getSetting() : M.dG.getSetting()?.volume) ?? 100,
            !H && h?.isVocal() ? q.a.VOICE : q.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eh } = i.useContext(E.x),
        ex = i.useRef(null),
        ej =
            ((n = m.soundId),
            (t = ex.current),
            i.useMemo(() => {
                if (null == t || "1" !== n) return { x: 0, y: 0 };
                let e = t.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [t, n])),
        eg = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        ep = i.useRef(0.01),
        eb = i.useRef(new c.IX()),
        eN = "1" === m.soundId,
        eI = `sound-${m.soundId}`,
        ef = (0, r.rm)(eI),
        ev = null != ea || null != er,
        eC = !(0, B.Ir)(eo, m, h) && !H,
        eA = A || (T && !eC),
        eE = S.LW.useStore().bottomPosition ?? 0,
        eS = ex.current?.getBoundingClientRect().bottom ?? 0,
        [ey, eO] = i.useState(!1),
        eT = i.useCallback(() => {
            eO(!0);
        }, []),
        ek = i.useCallback(() => {
            eO(!1);
        }, []),
        e_ = eC && D;
    function eR(e) {
        (eN &&
            !eg &&
            ((ep.current = Math.min(ep.current + 0.01, 0.1)),
            Math.random() < ep.current && eh(ej.x, ej.y, void 0, void 0, { sprite: F.dR })),
        null != G)
            ? G(e)
            : k || ed(P);
    }
    let eG = (0, s.jsx)("div", {
        onMouseEnter: eT,
        onMouseLeave: ek,
        children: Z({ sound: m, previewSound: eu, disabled: eC && !A, analyticsLocations: P }),
    });
    function eP(e) {
        return k || eC
            ? e_
                ? (0, s.jsx)(b.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(Y.C4, Y.hz, e, { [Y.hn]: ev }),
                  })
                : null
            : (0, s.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: a()(Y.C4, e) });
    }
    let eL = (0, s.jsx)("div", {
        onMouseEnter: eT,
        onMouseLeave: ek,
        children: (0, s.jsx)(Q, { sound: m, disabled: !O && !A }),
    });
    i.useEffect(() => {
        let e = eb.current;
        return (
            eN &&
                e.start(1e3, () => {
                    ep.current = Math.max(ep.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eN]);
    let eM =
            ((l = ex.current),
            null == (d = l?.parentElement?.getBoundingClientRect())
                ? { width: 0, height: 0 }
                : { width: d.width, height: d.height }),
        ew = X.intl.formatToPlainString(X.t.tuMUJ2, { emojiName: m.emojiName, soundName: m.name });
    return (0, s.jsxs)("li", {
        ref: es,
        className: a()(Y.H, x),
        onMouseEnter: _,
        children: [
            (0, s.jsx)(u.m, {
                "aria-label": null != ee ? m.name : void 0,
                __unsupportedReactNodeAsText: ee ?? m.name,
                position: eS + 50 > eE ? "top" : "bottom",
                shouldShow: !ey,
                delay: 500,
                children: (0, s.jsxs)(f.s, {
                    ...ei,
                    buttonProps: { ...ef, id: eI, role: "button" },
                    "aria-label": et ? `${ew}, ${X.intl.string(X.t.y2b7CA)}` : ew,
                    className: a()(
                        Y.aG,
                        {
                            [Y.CS]: z,
                            [Y.he]: J ?? em,
                            [Y.ju]: k,
                            [Y.wT]: O,
                            [Y.$9]: !O && !A,
                            [Y.Au]: eC && !A,
                            [Y.fx]: !O && A,
                            [Y.in]: O && g,
                            [Y.ox]: et,
                        },
                        j,
                    ),
                    onClick: (e) => {
                        eR?.(e);
                    },
                    onContextMenu: T && !eC ? ec : void 0,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(Y.KM, { [Y.hn]: ev }),
                            "aria-hidden": !0,
                            ref: ex,
                            children: [
                                ev && (0, s.jsx)(v.A, { emojiId: ea, emojiName: er, className: Y.Zg }),
                                (0, s.jsx)(I.E, {
                                    variant: "body-xs/medium",
                                    color: O ? void 0 : "text-muted",
                                    className: a()(Y.TW, { [Y.hn]: ev }),
                                    children: el,
                                }),
                            ],
                        }),
                        et && !eg && (0, s.jsx)("span", { className: Y.wO, "aria-hidden": !0 }),
                        (function () {
                            switch (w) {
                                case V.If.ADD:
                                    return (0, s.jsxs)("div", {
                                        className: Y.ec,
                                        children: [
                                            (0, s.jsx)("div", { className: Y.LQ }),
                                            (0, s.jsxs)("div", {
                                                className: Y.O5,
                                                children: [
                                                    eG,
                                                    (0, s.jsxs)("div", {
                                                        className: Y.c9,
                                                        children: [
                                                            (0, s.jsx)(N.PlusSmallIcon, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: Y.y_,
                                                            }),
                                                            (0, s.jsx)(I.E, {
                                                                variant: "body-xs/medium",
                                                                color: "text-strong",
                                                                children: X.intl.string(X.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eA && eL,
                                                ],
                                            }),
                                        ],
                                    });
                                case V.If.NONE:
                                    return null;
                                case V.If.PLAY:
                                case V.If.SOUNDMOJI:
                                default:
                                    return e_ && !U
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("div", { className: Y.LQ }),
                                                  eP(Y.B3),
                                                  (0, s.jsx)("div", {
                                                      className: Y.d7,
                                                      children: (0, s.jsxs)("div", {
                                                          className: Y.O5,
                                                          children: [eA && eG, eA && eL],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)("div", {
                                              className: Y.d7,
                                              children: [
                                                  (0, s.jsx)("div", { className: a()({ [Y.LQ]: !k }) }),
                                                  (0, s.jsx)("div", {
                                                      className: Y.O5,
                                                      children:
                                                          w === V.If.SOUNDMOJI
                                                              ? (0, s.jsx)(y.Ay, {
                                                                    sound: m,
                                                                    channel: h,
                                                                    setTooltipShowing: eO,
                                                                    renderSoundButton: en,
                                                                })
                                                              : (0, s.jsxs)(s.Fragment, {
                                                                    children: [eA && eG, eP(), eA && eL],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !m.available &&
                (0, s.jsx)(u.m, {
                    text: X.intl.string(X.t.MDOXJR),
                    shouldShow: !ey,
                    children: (0, s.jsx)("div", {
                        className: Y.ET,
                        children: !U && (0, s.jsxs)("div", { className: Y.ld, children: [eG, eL] }),
                    }),
                }),
            !0 === H && (0, s.jsx)(L, { sound: m, containerDimensions: eM, ref: $ }),
        ],
    });
}
function en(e) {
    return (0, s.jsx)(ee, { ...e });
}
let et = ee;
