"use strict";
n.d(t, { Ay: () => W, dT: () => j });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(311907),
    u = n(451988),
    c = n(827734),
    d = n(990078),
    _ = n(939249),
    f = n(983851),
    p = n(27232),
    h = n(505930),
    E = n(782134),
    m = n(194261),
    g = n(307301),
    A = n(834730),
    I = n(890856),
    T = n(565645),
    S = n(775602),
    y = n(688810),
    N = n(21161),
    v = n(850992),
    C = n(105713),
    O = n(109638),
    R = n(253932),
    b = n(967198),
    D = n(287809),
    L = n(954571),
    w = n(796774),
    M = n(209932),
    P = n(807348),
    x = n(536432),
    k = n(792348),
    U = n(496502),
    G = n(652215),
    F = n(851110),
    V = n(257645),
    B = n(985018),
    H = n(757718);
function j(e) {
    let { disabled: t = !1, onClick: n, text: i, children: s, tooltipPosition: o = "top", ref: l } = e;
    return (0, r.jsx)(d.m, {
        text: i,
        position: o,
        children: (0, r.jsx)(_.D, {
            innerRef: l,
            "aria-label": i,
            className: a()(H.zr, { [H.$9]: t }),
            onClick: n,
            children: s,
        }),
    });
}
function Y(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, y.Ay)(),
        o = (0, l.bG)([M.A], () => M.A.isFavoriteSound(t.soundId), [t.soundId]),
        u = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    o
                        ? (0, w.eS)(t.soundId)
                        : ((0, x.Ni)({ sound: t, location: { ...s, object: G.ZSU.SOUNDBOARD_SOUND } }),
                          (0, w.Rp)(t.soundId));
            },
            [o, t, s],
        );
    return (0, r.jsx)(j, {
        disabled: n,
        onClick: u,
        text: B.intl.formatToPlainString(o ? B.t.lQLsjc : B.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: o
            ? (0, r.jsx)(p.G, { size: "xs", className: a()(H.Wo, H.gj), color: c.A.unsafe_rawColors.PLATFORM_GOLD.css })
            : (0, r.jsx)(h.y, { size: "xs", color: "currentColor", className: H.Wo }),
    });
}
let W = i.forwardRef(function (e, t) {
    var n, s;
    let {
            sound: c,
            channel: _,
            containerClassName: p,
            className: h,
            focused: y,
            forceSecondaryActions: w = !1,
            interactive: M = !0,
            enableSecondaryActions: W = !1,
            suppressPlaySound: K,
            onMouseEnter: $,
            onSelectItem: z,
            analyticsLocations: q,
            buttonOverlay: X = P.If.PLAY,
            showLockForDisabledSound: Q = !0,
            inNitroLockedSection: Z = !1,
            isAnimated: J = !0,
            isPlayingSoundOverride: ee,
            isSoundmoji: et,
            soundmojiVisualEffectRef: en,
            tooltipOverride: er,
            ...ei
        } = e,
        { name: es, emojiId: ea, emojiName: eo } = c,
        el = (0, l.bG)([D.default], () => D.default.getCurrentUser()),
        eu = (0, U.v)(c, _?.guild_id),
        {
            playSoundboardSound: ec,
            previewSound: ed,
            isPlayingSound: e_,
        } = (0, k.A)(
            c,
            _?.id ?? null,
            (et ? R.HO.getSetting() : R.dG.getSetting()?.volume) ?? 100,
            !et && _?.isVocal() ? V.a.VOICE : V.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ef } = i.useContext(N.x),
        ep = i.useRef(null),
        eh =
            ((n = c.soundId),
            (s = ep.current),
            i.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        eE = (0, l.bG)([S.A], () => S.A.useReducedMotion),
        em = i.useRef(0.01),
        eg = i.useRef(new u.IX()),
        eA = "1" === c.soundId,
        eI = `sound-${c.soundId}`,
        eT = (0, o.rm)(eI),
        eS = null != ea || null != eo,
        ey = !(0, x.Ir)(el, c, _) && !et,
        eN = w || (W && !ey),
        ev = v.LW.useStore().bottomPosition ?? 0,
        eC = ep.current?.getBoundingClientRect().bottom ?? 0,
        [eO, eR] = i.useState(!1),
        eb = i.useCallback(() => {
            eR(!0);
        }, []),
        eD = i.useCallback(() => {
            eR(!1);
        }, []),
        eL = ey && Q;
    function ew(e) {
        (eA &&
            !eE &&
            ((em.current = Math.min(em.current + 0.01, 0.1)),
            Math.random() < em.current && ef(eh.x, eh.y, void 0, void 0, { sprite: F.dR })),
        null != z)
            ? z(e)
            : K || ec(q);
    }
    let eM = (0, r.jsx)("div", {
            onMouseEnter: eb,
            onMouseLeave: eD,
            children: (function (e) {
                let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: s = "top" } = e,
                    a = (0, l.bG)([b.A], () => b.A.getGuildId());
                return (0, r.jsx)(j, {
                    tooltipPosition: s,
                    disabled: i,
                    onClick: function (e) {
                        L.default.track(G.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                            sound_id: t.soundId,
                            sound_name: t.name,
                            sound_guild_id: t.guildId,
                            location_guild_id: a,
                        }),
                            e.stopPropagation(),
                            e.currentTarget.blur(),
                            n();
                    },
                    text: B.intl.formatToPlainString(B.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
                    children: (0, r.jsx)(f.H, { size: "md", color: "currentColor", className: H.Wo }),
                });
            })({ sound: c, previewSound: ed, disabled: ey && !w }),
        }),
        eP = (e) =>
            K || ey
                ? eL
                    ? (0, r.jsx)(m.X, {
                          size: "xs",
                          color: "currentColor",
                          className: a()(H.C4, H.hz, e, { [H.hn]: eS }),
                      })
                    : null
                : (0, r.jsx)(E.u, { size: "xs", color: "currentColor", className: a()(H.C4, e) }),
        ex = (0, r.jsx)("div", {
            onMouseEnter: eb,
            onMouseLeave: eD,
            children: (0, r.jsx)(Y, { sound: c, disabled: !M && !w }),
        });
    i.useEffect(() => {
        let e = eg.current;
        return (
            eA &&
                e.start(1e3, () => {
                    em.current = Math.max(em.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eA]);
    let ek = (0, O.o)(ep.current);
    return (0, r.jsxs)("li", {
        ref: t,
        className: a()(H.H, p),
        onMouseEnter: $,
        children: [
            (0, r.jsx)(d.m, {
                "aria-label": null != er ? c.name : void 0,
                __unsupportedReactNodeAsText: er ?? c.name,
                position: eC + 50 > ev ? "top" : "bottom",
                shouldShow: !eO,
                delay: 500,
                children: (0, r.jsxs)(I.s, {
                    ...ei,
                    buttonProps: { ...eT, id: eI, role: "button" },
                    "aria-label": B.intl.formatToPlainString(B.t.tuMUJ2, { emojiName: c.emojiName, soundName: c.name }),
                    className: a()(
                        H.aG,
                        {
                            [H.CS]: J,
                            [H.he]: ee ?? e_,
                            [H.ju]: K,
                            [H.wT]: M,
                            [H.$9]: !M && !w,
                            [H.Au]: ey && !w,
                            [H.fx]: !M && w,
                            [H.in]: M && y,
                        },
                        h,
                    ),
                    onClick: (e) => {
                        ew?.(e);
                    },
                    onContextMenu: W && !ey ? eu : void 0,
                    children: [
                        (0, r.jsxs)("div", {
                            className: a()(H.KM, { [H.hn]: eS }),
                            "aria-hidden": !0,
                            ref: ep,
                            children: [
                                eS && (0, r.jsx)(T.A, { emojiId: ea, emojiName: eo, className: H.Zg }),
                                (0, r.jsx)(A.E, {
                                    variant: "text-xs/medium",
                                    color: M ? void 0 : "text-muted",
                                    className: a()(H.TW, { [H.hn]: eS }),
                                    children: es,
                                }),
                            ],
                        }),
                        (function () {
                            switch (X) {
                                case P.If.ADD:
                                    return (0, r.jsxs)("div", {
                                        className: H.ec,
                                        children: [
                                            (0, r.jsx)("div", { className: H.LQ }),
                                            (0, r.jsxs)("div", {
                                                className: H.O5,
                                                children: [
                                                    eM,
                                                    (0, r.jsxs)("div", {
                                                        className: H.c9,
                                                        children: [
                                                            (0, r.jsx)(g.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: H.y_,
                                                            }),
                                                            (0, r.jsx)(A.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: B.intl.string(B.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eN && ex,
                                                ],
                                            }),
                                        ],
                                    });
                                case P.If.NONE:
                                    return null;
                                case P.If.PLAY:
                                case P.If.SOUNDMOJI:
                                default:
                                    return eL && !Z
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("div", { className: H.LQ }),
                                                  eP(H.B3),
                                                  (0, r.jsx)("div", {
                                                      className: H.d7,
                                                      children: (0, r.jsxs)("div", {
                                                          className: H.O5,
                                                          children: [eN && eM, eN && ex],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: H.d7,
                                              children: [
                                                  (0, r.jsx)("div", { className: a()({ [H.LQ]: !K }) }),
                                                  (0, r.jsx)("div", {
                                                      className: H.O5,
                                                      children:
                                                          X === P.If.SOUNDMOJI
                                                              ? (0, r.jsx)(C.Ay, {
                                                                    sound: c,
                                                                    channel: _,
                                                                    setTooltipShowing: eR,
                                                                })
                                                              : (0, r.jsxs)(r.Fragment, {
                                                                    children: [eN && eM, eP(), eN && ex],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !c.available &&
                (0, r.jsx)(d.m, {
                    text: B.intl.string(B.t.MDOXJR),
                    shouldShow: !eO,
                    children: (0, r.jsx)("div", {
                        className: H.ET,
                        children: !Z && (0, r.jsxs)("div", { className: H.ld, children: [eM, ex] }),
                    }),
                }),
            !0 === et && (0, r.jsx)(O.A, { sound: c, containerDimensions: ek, ref: en }),
        ],
    });
});
