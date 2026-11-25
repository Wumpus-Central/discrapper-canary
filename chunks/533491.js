t.d(n, { PI: () => Z, dT: () => X, Ay: () => et });
var l = t(477900),
    s = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(837381),
    o = t(855986),
    u = t(451988),
    c = t(646514),
    d = t(866665),
    m = t(939249),
    x = t(342073),
    h = t(983851),
    p = t(27232),
    j = t(505930),
    g = t(782134),
    f = t(194261),
    v = t(307301),
    N = t(834730),
    I = t(890856),
    b = t(565645),
    E = t(775602),
    A = t(688810),
    C = t(21161),
    T = t(850992),
    y = t(456086),
    _ = t(435558),
    S = t(115560),
    O = t(716365),
    R = t(407781),
    M = t(287809),
    k = t(194486),
    G = t(178226);
function P(e) {
    let { sound: n, containerDimensions: t, ref: a } = e,
        i = (0, o.bG)([M.default], () => M.default.getCurrentUser()),
        r = (0, o.bG)([E.Ay], () => E.Ay.useReducedMotion),
        [u, c] = s.useState([]),
        d = u.length < 50,
        m = n?.emojiId != null || n?.emojiName != null,
        x = s.useCallback(() => {
            if (!r && d && m && null != i) {
                let e = (0, O.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    l = k.B.PREMIUM,
                    s = (0, _.random)(O.Bf[l].length, !1),
                    a = { id: (0, S.A)(), animationId: s, animationType: l, shouldResize: t, url: e, userId: i.id };
                c((e) => [...e, a]);
            }
        }, [r, d, m, i, n]);
    s.useImperativeHandle(a, () => ({ addAnimation: x }));
    let h = s.useCallback((e) => {
        c((n) => {
            let t = [...n],
                l = t.findIndex((n) => n.id === e);
            return (t.splice(l, 1), t);
        });
    }, []);
    return r || !m
        ? null
        : (0, l.jsx)("div", {
              className: G.z,
              style: { width: t.width, height: t.height },
              children: u.map((e) => (0, l.jsx)(R.A, { containerDimensions: t, effect: e, onComplete: h }, e.id)),
          });
}
var D = t(253932),
    w = t(967198),
    L = t(129230),
    U = t(796774),
    B = t(209932),
    z = t(807348),
    V = t(458976),
    W = t(792348),
    F = t(340368),
    H = t(496502),
    J = t(652215),
    K = t(77183),
    $ = t(257645),
    q = t(792996),
    Y = t(948611);
function X(e) {
    let { disabled: n = !1, onClick: t, text: s, children: a, tooltipPosition: r = "top", ref: o } = e;
    return (0, l.jsx)(d.m, {
        text: s,
        position: r,
        children: (0, l.jsx)(m.D, {
            innerRef: o,
            "aria-label": s,
            className: i()(Y.zr, { [Y.$9]: n }),
            onClick: t,
            children: a,
        }),
    });
}
function Z(e) {
    let { sound: n, previewSound: t, disabled: a = !1, tooltipPosition: i = "top", analyticsLocations: r } = e,
        u = (0, o.bG)([w.A], () => w.A.getGuildId()),
        c = (0, F._)("PreviewButton"),
        d = s.useMemo(
            () =>
                c
                    ? (0, l.jsx)(x.WaveformIcon, { size: "md", color: "currentColor", className: Y.Wo })
                    : (0, l.jsx)(h.VoiceNormalIcon, { size: "md", color: "currentColor", className: Y.Wo }),
            [c],
        );
    return (0, l.jsx)(X, {
        tooltipPosition: i,
        disabled: a,
        onClick: function (e) {
            (L.default.track(J.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: n.soundId,
                sound_name: n.name,
                sound_guild_id: n.guildId,
                location_guild_id: u,
                location_stack: r,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                t());
        },
        text: q.intl.formatToPlainString(q.t["/8fYO5"], { emojiName: n.emojiName, soundName: n.name }),
        children: d,
    });
}
function Q(e) {
    let { sound: n, disabled: t = !1 } = e,
        { analyticsLocations: a } = (0, A.Ay)(),
        r = (0, o.bG)([B.A], () => B.A.isFavoriteSound(n.soundId), [n.soundId]),
        u = s.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, U.eS)(n.soundId)
                        : ((0, V.Ni)({ sound: n, location: { ...a, object: J.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(n.soundId)));
            },
            [r, n, a],
        );
    return (0, l.jsx)(X, {
        disabled: t,
        onClick: u,
        text: q.intl.formatToPlainString(r ? q.t.lQLsjc : q.t.Y5DOs4, { emojiName: n.emojiName, soundName: n.name }),
        children: r
            ? (0, l.jsx)(p.StarIcon, {
                  size: "xs",
                  className: i()(Y.Wo, Y.gj),
                  color: c.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, l.jsx)(j.StarOutlineIcon, { size: "xs", color: "currentColor", className: Y.Wo }),
    });
}
function ee(e) {
    var n, t, a;
    let c,
        {
            sound: m,
            channel: x,
            containerClassName: h,
            className: p,
            focused: j,
            forceSecondaryActions: A = !1,
            interactive: _ = !0,
            enableSecondaryActions: S = !1,
            suppressPlaySound: O,
            onMouseEnter: R,
            onSelectItem: k,
            analyticsLocations: G,
            buttonOverlay: w = z.If.PLAY,
            showLockForDisabledSound: L = !0,
            inNitroLockedSection: U = !1,
            isAnimated: B = !0,
            isPlayingSoundOverride: F,
            isSoundmoji: J,
            soundmojiVisualEffectRef: X,
            tooltipOverride: ee,
            isNew: et = !1,
            ref: el,
            ...es
        } = e,
        { name: ea, emojiId: ei, emojiName: er } = m,
        eo = (0, o.bG)([M.default], () => M.default.getCurrentUser()),
        eu = (0, H.v)(m, x?.guild_id),
        {
            playSoundboardSound: ec,
            previewSound: ed,
            isPlayingSound: em,
        } = (0, W.A)(
            m,
            x?.id ?? null,
            (J ? D.HO.getSetting() : D.dG.getSetting()?.volume) ?? 100,
            !J && x?.isVocal() ? $.a.VOICE : $.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ex } = s.useContext(C.x),
        eh = s.useRef(null),
        ep =
            ((n = m.soundId),
            (t = eh.current),
            s.useMemo(() => {
                if (null == t || "1" !== n) return { x: 0, y: 0 };
                let e = t.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [t, n])),
        ej = (0, o.bG)([E.Ay], () => E.Ay.useReducedMotion),
        eg = s.useRef(0.01),
        ef = s.useRef(new u.IX()),
        ev = "1" === m.soundId,
        eN = `sound-${m.soundId}`,
        eI = (0, r.rm)(eN),
        eb = null != ei || null != er,
        eE = !(0, V.Ir)(eo, m, x) && !J,
        eA = A || (S && !eE),
        eC = T.LW.useStore().bottomPosition ?? 0,
        eT = eh.current?.getBoundingClientRect().bottom ?? 0,
        [ey, e_] = s.useState(!1),
        eS = s.useCallback(() => {
            e_(!0);
        }, []),
        eO = s.useCallback(() => {
            e_(!1);
        }, []),
        eR = eE && L;
    function eM(e) {
        (ev &&
            !ej &&
            ((eg.current = Math.min(eg.current + 0.01, 0.1)),
            Math.random() < eg.current && ex(ep.x, ep.y, void 0, void 0, { sprite: K.dR })),
        null != k)
            ? k(e)
            : O || ec(G);
    }
    let ek = (0, l.jsx)("div", {
        onMouseEnter: eS,
        onMouseLeave: eO,
        children: Z({ sound: m, previewSound: ed, disabled: eE && !A, analyticsLocations: G }),
    });
    function eG(e) {
        return O || eE
            ? eR
                ? (0, l.jsx)(f.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: i()(Y.C4, Y.hz, e, { [Y.hn]: eb }),
                  })
                : null
            : (0, l.jsx)(g.PlayIcon, { size: "xs", color: "currentColor", className: i()(Y.C4, e) });
    }
    let eP = (0, l.jsx)("div", {
        onMouseEnter: eS,
        onMouseLeave: eO,
        children: (0, l.jsx)(Q, { sound: m, disabled: !_ && !A }),
    });
    s.useEffect(() => {
        let e = ef.current;
        return (
            ev &&
                e.start(1e3, () => {
                    eg.current = Math.max(eg.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [ev]);
    let eD =
            ((a = eh.current),
            null == (c = a?.parentElement?.getBoundingClientRect())
                ? { width: 0, height: 0 }
                : { width: c.width, height: c.height }),
        ew = q.intl.formatToPlainString(q.t.tuMUJ2, { emojiName: m.emojiName, soundName: m.name });
    return (0, l.jsxs)("li", {
        ref: el,
        className: i()(Y.H, h),
        onMouseEnter: R,
        children: [
            (0, l.jsx)(d.m, {
                "aria-label": null != ee ? m.name : void 0,
                __unsupportedReactNodeAsText: ee ?? m.name,
                position: eT + 50 > eC ? "top" : "bottom",
                shouldShow: !ey,
                delay: 500,
                children: (0, l.jsxs)(I.s, {
                    ...es,
                    buttonProps: { ...eI, id: eN, role: "button" },
                    "aria-label": et ? `${ew}, ${q.intl.string(q.t.y2b7CA)}` : ew,
                    className: i()(
                        Y.aG,
                        {
                            [Y.CS]: B,
                            [Y.he]: F ?? em,
                            [Y.ju]: O,
                            [Y.wT]: _,
                            [Y.$9]: !_ && !A,
                            [Y.Au]: eE && !A,
                            [Y.fx]: !_ && A,
                            [Y.in]: _ && j,
                            [Y.ox]: et,
                        },
                        p,
                    ),
                    onClick: (e) => {
                        eM?.(e);
                    },
                    onContextMenu: S && !eE ? eu : void 0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: i()(Y.KM, { [Y.hn]: eb }),
                            "aria-hidden": !0,
                            ref: eh,
                            children: [
                                eb && (0, l.jsx)(b.A, { emojiId: ei, emojiName: er, className: Y.Zg }),
                                (0, l.jsx)(N.E, {
                                    variant: "body-xs/medium",
                                    color: _ ? void 0 : "text-muted",
                                    className: i()(Y.TW, { [Y.hn]: eb }),
                                    children: ea,
                                }),
                            ],
                        }),
                        et && !ej && (0, l.jsx)("span", { className: Y.wO, "aria-hidden": !0 }),
                        (function () {
                            switch (w) {
                                case z.If.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: Y.ec,
                                        children: [
                                            (0, l.jsx)("div", { className: Y.LQ }),
                                            (0, l.jsxs)("div", {
                                                className: Y.O5,
                                                children: [
                                                    ek,
                                                    (0, l.jsxs)("div", {
                                                        className: Y.c9,
                                                        children: [
                                                            (0, l.jsx)(v.PlusSmallIcon, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: Y.y_,
                                                            }),
                                                            (0, l.jsx)(N.E, {
                                                                variant: "body-xs/medium",
                                                                color: "text-strong",
                                                                children: q.intl.string(q.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eA && eP,
                                                ],
                                            }),
                                        ],
                                    });
                                case z.If.NONE:
                                    return null;
                                case z.If.PLAY:
                                case z.If.SOUNDMOJI:
                                default:
                                    return eR && !U
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("div", { className: Y.LQ }),
                                                  eG(Y.B3),
                                                  (0, l.jsx)("div", {
                                                      className: Y.d7,
                                                      children: (0, l.jsxs)("div", {
                                                          className: Y.O5,
                                                          children: [eA && ek, eA && eP],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: Y.d7,
                                              children: [
                                                  (0, l.jsx)("div", { className: i()({ [Y.LQ]: !O }) }),
                                                  (0, l.jsx)("div", {
                                                      className: Y.O5,
                                                      children:
                                                          w === z.If.SOUNDMOJI
                                                              ? (0, l.jsx)(y.Ay, {
                                                                    sound: m,
                                                                    channel: x,
                                                                    setTooltipShowing: e_,
                                                                    renderSoundButton: en,
                                                                })
                                                              : (0, l.jsxs)(l.Fragment, {
                                                                    children: [eA && ek, eG(), eA && eP],
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
                (0, l.jsx)(d.m, {
                    text: q.intl.string(q.t.MDOXJR),
                    shouldShow: !ey,
                    children: (0, l.jsx)("div", {
                        className: Y.ET,
                        children: !U && (0, l.jsxs)("div", { className: Y.ld, children: [ek, eP] }),
                    }),
                }),
            !0 === J && (0, l.jsx)(P, { sound: m, containerDimensions: eD, ref: X }),
        ],
    });
}
function en(e) {
    return (0, l.jsx)(ee, { ...e });
}
let et = ee;
