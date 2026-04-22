"use strict";
n.d(t, { Ay: () => K, dT: () => H });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(311907),
    c = n(451988),
    u = n(827734),
    d = n(990078),
    h = n(939249),
    m = n(983851),
    p = n(27232),
    f = n(505930),
    g = n(782134),
    _ = n(194261),
    x = n(307301),
    A = n(834730),
    C = n(890856),
    E = n(565645),
    I = n(775602),
    v = n(688810),
    y = n(21161),
    S = n(850992),
    b = n(105713),
    N = n(109638),
    T = n(253932),
    j = n(967198),
    R = n(287809),
    w = n(954571),
    L = n(796774),
    M = n(209932),
    k = n(807348),
    O = n(536432),
    P = n(792348),
    D = n(496502),
    U = n(652215),
    V = n(851110),
    G = n(257645),
    F = n(985018),
    B = n(757718);
function H(e) {
    let { disabled: t = !1, onClick: n, text: l, children: s, tooltipPosition: a = "top", ref: o } = e;
    return (0, i.jsx)(d.m, {
        text: l,
        position: a,
        children: (0, i.jsx)(h.D, {
            innerRef: o,
            "aria-label": l,
            className: r()(B.zr, { [B.$9]: t }),
            onClick: n,
            children: s,
        }),
    });
}
function W(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, v.Ay)(),
        a = (0, o.bG)([M.A], () => M.A.isFavoriteSound(t.soundId), [t.soundId]),
        c = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    a
                        ? (0, L.eS)(t.soundId)
                        : ((0, O.Ni)({ sound: t, location: { ...s, object: U.ZSU.SOUNDBOARD_SOUND } }),
                          (0, L.Rp)(t.soundId));
            },
            [a, t, s],
        );
    return (0, i.jsx)(H, {
        disabled: n,
        onClick: c,
        text: F.intl.formatToPlainString(a ? F.t.lQLsjc : F.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: a
            ? (0, i.jsx)(p.G, { size: "xs", className: r()(B.Wo, B.gj), color: u.A.unsafe_rawColors.PLATFORM_GOLD.css })
            : (0, i.jsx)(f.y, { size: "xs", color: "currentColor", className: B.Wo }),
    });
}
let K = l.forwardRef(function (e, t) {
    var n, s;
    let {
            sound: u,
            channel: h,
            containerClassName: p,
            className: f,
            focused: v,
            forceSecondaryActions: L = !1,
            interactive: M = !0,
            enableSecondaryActions: K = !1,
            suppressPlaySound: z,
            onMouseEnter: Z,
            onSelectItem: q,
            analyticsLocations: Y,
            buttonOverlay: J = k.If.PLAY,
            showLockForDisabledSound: $ = !0,
            inNitroLockedSection: X = !1,
            isAnimated: Q = !0,
            isPlayingSoundOverride: ee,
            isSoundmoji: et,
            soundmojiVisualEffectRef: en,
            tooltipOverride: ei,
            ...el
        } = e,
        { name: es, emojiId: er, emojiName: ea } = u,
        eo = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        ec = (0, D.v)(u, h?.guild_id),
        {
            playSoundboardSound: eu,
            previewSound: ed,
            isPlayingSound: eh,
        } = (0, P.A)(
            u,
            h?.id ?? null,
            (et ? T.HO.getSetting() : T.dG.getSetting()?.volume) ?? 100,
            !et && h?.isVocal() ? G.a.VOICE : G.a.DEFAULT,
        ),
        { createMultipleConfettiAt: em } = l.useContext(y.x),
        ep = l.useRef(null),
        ef =
            ((n = u.soundId),
            (s = ep.current),
            l.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        eg = (0, o.bG)([I.A], () => I.A.useReducedMotion),
        e_ = l.useRef(0.01),
        ex = l.useRef(new c.IX()),
        eA = "1" === u.soundId,
        eC = `sound-${u.soundId}`,
        eE = (0, a.rm)(eC),
        eI = null != er || null != ea,
        ev = !(0, O.Ir)(eo, u, h) && !et,
        ey = L || (K && !ev),
        eS = S.LW.useStore().bottomPosition ?? 0,
        eb = ep.current?.getBoundingClientRect().bottom ?? 0,
        [eN, eT] = l.useState(!1),
        ej = l.useCallback(() => {
            eT(!0);
        }, []),
        eR = l.useCallback(() => {
            eT(!1);
        }, []),
        ew = ev && $;
    function eL(e) {
        (eA &&
            !eg &&
            ((e_.current = Math.min(e_.current + 0.01, 0.1)),
            Math.random() < e_.current && em(ef.x, ef.y, void 0, void 0, { sprite: V.dR })),
        null != q)
            ? q(e)
            : z || eu(Y);
    }
    let eM = (0, i.jsx)("div", {
            onMouseEnter: ej,
            onMouseLeave: eR,
            children: (function (e) {
                let { sound: t, previewSound: n, disabled: l = !1, tooltipPosition: s = "top" } = e,
                    r = (0, o.bG)([j.A], () => j.A.getGuildId());
                return (0, i.jsx)(H, {
                    tooltipPosition: s,
                    disabled: l,
                    onClick: function (e) {
                        w.default.track(U.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                            sound_id: t.soundId,
                            sound_name: t.name,
                            sound_guild_id: t.guildId,
                            location_guild_id: r,
                        }),
                            e.stopPropagation(),
                            e.currentTarget.blur(),
                            n();
                    },
                    text: F.intl.formatToPlainString(F.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
                    children: (0, i.jsx)(m.H, { size: "md", color: "currentColor", className: B.Wo }),
                });
            })({ sound: u, previewSound: ed, disabled: ev && !L }),
        }),
        ek = (e) =>
            z || ev
                ? ew
                    ? (0, i.jsx)(_.X, {
                          size: "xs",
                          color: "currentColor",
                          className: r()(B.C4, B.hz, e, { [B.hn]: eI }),
                      })
                    : null
                : (0, i.jsx)(g.u, { size: "xs", color: "currentColor", className: r()(B.C4, e) }),
        eO = (0, i.jsx)("div", {
            onMouseEnter: ej,
            onMouseLeave: eR,
            children: (0, i.jsx)(W, { sound: u, disabled: !M && !L }),
        });
    l.useEffect(() => {
        let e = ex.current;
        return (
            eA &&
                e.start(1e3, () => {
                    e_.current = Math.max(e_.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eA]);
    let eP = (0, N.o)(ep.current);
    return (0, i.jsxs)("li", {
        ref: t,
        className: r()(B.H, p),
        onMouseEnter: Z,
        children: [
            (0, i.jsx)(d.m, {
                "aria-label": null != ei ? u.name : void 0,
                __unsupportedReactNodeAsText: ei ?? u.name,
                position: eb + 50 > eS ? "top" : "bottom",
                shouldShow: !eN,
                delay: 500,
                children: (0, i.jsxs)(C.s, {
                    ...el,
                    buttonProps: { ...eE, id: eC, role: "button" },
                    "aria-label": F.intl.formatToPlainString(F.t.tuMUJ2, { emojiName: u.emojiName, soundName: u.name }),
                    className: r()(
                        B.aG,
                        {
                            [B.CS]: Q,
                            [B.he]: ee ?? eh,
                            [B.ju]: z,
                            [B.wT]: M,
                            [B.$9]: !M && !L,
                            [B.Au]: ev && !L,
                            [B.fx]: !M && L,
                            [B.in]: M && v,
                        },
                        f,
                    ),
                    onClick: (e) => {
                        eL?.(e);
                    },
                    onContextMenu: K && !ev ? ec : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: r()(B.KM, { [B.hn]: eI }),
                            "aria-hidden": !0,
                            ref: ep,
                            children: [
                                eI && (0, i.jsx)(E.A, { emojiId: er, emojiName: ea, className: B.Zg }),
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/medium",
                                    color: M ? void 0 : "text-muted",
                                    className: r()(B.TW, { [B.hn]: eI }),
                                    children: es,
                                }),
                            ],
                        }),
                        (function () {
                            switch (J) {
                                case k.If.ADD:
                                    return (0, i.jsxs)("div", {
                                        className: B.ec,
                                        children: [
                                            (0, i.jsx)("div", { className: B.LQ }),
                                            (0, i.jsxs)("div", {
                                                className: B.O5,
                                                children: [
                                                    eM,
                                                    (0, i.jsxs)("div", {
                                                        className: B.c9,
                                                        children: [
                                                            (0, i.jsx)(x.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: B.y_,
                                                            }),
                                                            (0, i.jsx)(A.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: F.intl.string(F.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    ey && eO,
                                                ],
                                            }),
                                        ],
                                    });
                                case k.If.NONE:
                                    return null;
                                case k.If.PLAY:
                                case k.If.SOUNDMOJI:
                                default:
                                    return ew && !X
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: B.LQ }),
                                                  ek(B.B3),
                                                  (0, i.jsx)("div", {
                                                      className: B.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: B.O5,
                                                          children: [ey && eM, ey && eO],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: B.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: r()({ [B.LQ]: !z }) }),
                                                  (0, i.jsx)("div", {
                                                      className: B.O5,
                                                      children:
                                                          J === k.If.SOUNDMOJI
                                                              ? (0, i.jsx)(b.Ay, {
                                                                    sound: u,
                                                                    channel: h,
                                                                    setTooltipShowing: eT,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [ey && eM, ek(), ey && eO],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !u.available &&
                (0, i.jsx)(d.m, {
                    text: F.intl.string(F.t.MDOXJR),
                    shouldShow: !eN,
                    children: (0, i.jsx)("div", {
                        className: B.ET,
                        children: !X && (0, i.jsxs)("div", { className: B.ld, children: [eM, eO] }),
                    }),
                }),
            !0 === et && (0, i.jsx)(N.A, { sound: u, containerDimensions: eP, ref: en }),
        ],
    });
});
