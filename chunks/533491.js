t.d(n, { PI: () => Z, dT: () => $, Ay: () => et });
var s = t(477900),
    i = t(582128),
    l = t(503698),
    a = t.n(l),
    r = t(837381),
    o = t(855986),
    d = t(451988),
    c = t(646514),
    u = t(866665),
    m = t(939249),
    h = t(342073),
    x = t(983851),
    j = t(27232),
    g = t(505930),
    p = t(782134),
    b = t(194261),
    N = t(307301),
    f = t(834730),
    I = t(890856),
    v = t(565645),
    C = t(775602),
    A = t(688810),
    E = t(21161),
    y = t(850992),
    S = t(456086),
    O = t(435558),
    T = t(115560),
    k = t(716365),
    _ = t(407781),
    R = t(287809),
    L = t(194486),
    G = t(178226);
function P(e) {
    let { sound: n, containerDimensions: t, ref: l } = e,
        a = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        r = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        [d, c] = i.useState([]),
        u = d.length < 50,
        m = n?.emojiId != null || n?.emojiName != null,
        h = i.useCallback(() => {
            if (!r && u && m && null != a) {
                let e = (0, k.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    s = L.B.PREMIUM,
                    i = (0, O.random)(k.Bf[s].length, !1),
                    l = { id: (0, T.A)(), animationId: i, animationType: s, shouldResize: t, url: e, userId: a.id };
                c((e) => [...e, l]);
            }
        }, [r, u, m, a, n]);
    i.useImperativeHandle(l, () => ({ addAnimation: h }));
    let x = i.useCallback((e) => {
        c((n) => {
            let t = [...n],
                s = t.findIndex((n) => n.id === e);
            return (t.splice(s, 1), t);
        });
    }, []);
    return r || !m
        ? null
        : (0, s.jsx)("div", {
              className: G.z,
              style: { width: t.width, height: t.height },
              children: d.map((e) => (0, s.jsx)(_.A, { containerDimensions: t, effect: e, onComplete: x }, e.id)),
          });
}
var M = t(253932),
    w = t(967198),
    D = t(129230),
    U = t(796774),
    z = t(209932),
    B = t(807348),
    K = t(458976),
    J = t(792348),
    V = t(340368),
    H = t(496502),
    W = t(652215),
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
        d = (0, o.bG)([w.A], () => w.A.getGuildId()),
        c = (0, V._)("PreviewButton"),
        u = i.useMemo(
            () =>
                c
                    ? (0, s.jsx)(h.L, { size: "md", color: "currentColor", className: Y.Wo })
                    : (0, s.jsx)(x.H, { size: "md", color: "currentColor", className: Y.Wo }),
            [c],
        );
    return (0, s.jsx)($, {
        tooltipPosition: a,
        disabled: l,
        onClick: function (e) {
            (D.default.track(W.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: n.soundId,
                sound_name: n.name,
                sound_guild_id: n.guildId,
                location_guild_id: d,
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
        d = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, U.eS)(n.soundId)
                        : ((0, K.Ni)({ sound: n, location: { ...l, object: W.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(n.soundId)));
            },
            [r, n, l],
        );
    return (0, s.jsx)($, {
        disabled: t,
        onClick: d,
        text: X.intl.formatToPlainString(r ? X.t.lQLsjc : X.t.Y5DOs4, { emojiName: n.emojiName, soundName: n.name }),
        children: r
            ? (0, s.jsx)(j.StarIcon, {
                  size: "xs",
                  className: a()(Y.Wo, Y.gj),
                  color: c.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, s.jsx)(g.y, { size: "xs", color: "currentColor", className: Y.Wo }),
    });
}
function ee(e) {
    var n, t, l;
    let c,
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
            onSelectItem: L,
            analyticsLocations: G,
            buttonOverlay: w = B.If.PLAY,
            showLockForDisabledSound: D = !0,
            inNitroLockedSection: U = !1,
            isAnimated: z = !0,
            isPlayingSoundOverride: V,
            isSoundmoji: W,
            soundmojiVisualEffectRef: $,
            tooltipOverride: ee,
            isNew: et = !1,
            ref: es,
            ...ei
        } = e,
        { name: el, emojiId: ea, emojiName: er } = m,
        eo = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        ed = (0, H.v)(m, h?.guild_id),
        {
            playSoundboardSound: ec,
            previewSound: eu,
            isPlayingSound: em,
        } = (0, J.A)(
            m,
            h?.id ?? null,
            (W ? M.HO.getSetting() : M.dG.getSetting()?.volume) ?? 100,
            !W && h?.isVocal() ? q.a.VOICE : q.a.DEFAULT,
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
        eb = i.useRef(new d.IX()),
        eN = "1" === m.soundId,
        ef = `sound-${m.soundId}`,
        eI = (0, r.rm)(ef),
        ev = null != ea || null != er,
        eC = !(0, K.Ir)(eo, m, h) && !W,
        eA = A || (T && !eC),
        eE = y.LW.useStore().bottomPosition ?? 0,
        ey = ex.current?.getBoundingClientRect().bottom ?? 0,
        [eS, eO] = i.useState(!1),
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
        null != L)
            ? L(e)
            : k || ec(G);
    }
    let eL = (0, s.jsx)("div", {
        onMouseEnter: eT,
        onMouseLeave: ek,
        children: Z({ sound: m, previewSound: eu, disabled: eC && !A, analyticsLocations: G }),
    });
    function eG(e) {
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
    let eP = (0, s.jsx)("div", {
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
            null == (c = l?.parentElement?.getBoundingClientRect())
                ? { width: 0, height: 0 }
                : { width: c.width, height: c.height }),
        ew = X.intl.formatToPlainString(X.t.tuMUJ2, { emojiName: m.emojiName, soundName: m.name });
    return (0, s.jsxs)("li", {
        ref: es,
        className: a()(Y.H, x),
        onMouseEnter: _,
        children: [
            (0, s.jsx)(u.m, {
                "aria-label": null != ee ? m.name : void 0,
                __unsupportedReactNodeAsText: ee ?? m.name,
                position: ey + 50 > eE ? "top" : "bottom",
                shouldShow: !eS,
                delay: 500,
                children: (0, s.jsxs)(I.s, {
                    ...ei,
                    buttonProps: { ...eI, id: ef, role: "button" },
                    "aria-label": et ? `${ew}, ${X.intl.string(X.t.y2b7CA)}` : ew,
                    className: a()(
                        Y.aG,
                        {
                            [Y.CS]: z,
                            [Y.he]: V ?? em,
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
                    onContextMenu: T && !eC ? ed : void 0,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(Y.KM, { [Y.hn]: ev }),
                            "aria-hidden": !0,
                            ref: ex,
                            children: [
                                ev && (0, s.jsx)(v.A, { emojiId: ea, emojiName: er, className: Y.Zg }),
                                (0, s.jsx)(f.E, {
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
                                case B.If.ADD:
                                    return (0, s.jsxs)("div", {
                                        className: Y.ec,
                                        children: [
                                            (0, s.jsx)("div", { className: Y.LQ }),
                                            (0, s.jsxs)("div", {
                                                className: Y.O5,
                                                children: [
                                                    eL,
                                                    (0, s.jsxs)("div", {
                                                        className: Y.c9,
                                                        children: [
                                                            (0, s.jsx)(N.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: Y.y_,
                                                            }),
                                                            (0, s.jsx)(f.E, {
                                                                variant: "body-xs/medium",
                                                                color: "text-strong",
                                                                children: X.intl.string(X.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eA && eP,
                                                ],
                                            }),
                                        ],
                                    });
                                case B.If.NONE:
                                    return null;
                                case B.If.PLAY:
                                case B.If.SOUNDMOJI:
                                default:
                                    return e_ && !U
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("div", { className: Y.LQ }),
                                                  eG(Y.B3),
                                                  (0, s.jsx)("div", {
                                                      className: Y.d7,
                                                      children: (0, s.jsxs)("div", {
                                                          className: Y.O5,
                                                          children: [eA && eL, eA && eP],
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
                                                          w === B.If.SOUNDMOJI
                                                              ? (0, s.jsx)(S.Ay, {
                                                                    sound: m,
                                                                    channel: h,
                                                                    setTooltipShowing: eO,
                                                                    renderSoundButton: en,
                                                                })
                                                              : (0, s.jsxs)(s.Fragment, {
                                                                    children: [eA && eL, eG(), eA && eP],
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
                    shouldShow: !eS,
                    children: (0, s.jsx)("div", {
                        className: Y.ET,
                        children: !U && (0, s.jsxs)("div", { className: Y.ld, children: [eL, eP] }),
                    }),
                }),
            !0 === W && (0, s.jsx)(P, { sound: m, containerDimensions: eM, ref: $ }),
        ],
    });
}
function en(e) {
    return (0, s.jsx)(ee, { ...e });
}
let et = ee;
