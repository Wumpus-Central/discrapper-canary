"use strict";
n.d(t, { Ay: () => Y, dT: () => V });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(311907),
    u = n(451988),
    c = n(827734),
    d = n(990078),
    _ = n(397927),
    f = n(565645),
    p = n(775602),
    h = n(688810),
    m = n(21161),
    E = n(850992),
    g = n(105713),
    A = n(109638),
    I = n(253932),
    T = n(967198),
    S = n(287809),
    y = n(954571),
    v = n(796774),
    N = n(209932),
    C = n(807348),
    R = n(536432),
    O = n(792348),
    b = n(496502),
    D = n(652215),
    L = n(851110),
    w = n(257645),
    M = n(985018),
    P = n(757718);
let x = "1",
    k = 0.01,
    U = 0.1,
    G = 0.01,
    F = 1e3;
function V(e) {
    let { disabled: t = !1, onClick: n, text: i, children: s, tooltipPosition: o = "top", ref: l } = e;
    return (0, r.jsx)(d.m, {
        text: i,
        position: o,
        children: (0, r.jsx)(_.DUT, {
            innerRef: l,
            "aria-label": i,
            className: a()(P.zr, { [P.$9]: t }),
            onClick: n,
            children: s,
        }),
    });
}
function B(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: s = "top" } = e,
        a = (0, l.bG)([T.A], () => T.A.getGuildId());
    function o(e) {
        y.default.track(D.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
            sound_id: t.soundId,
            sound_name: t.name,
            sound_guild_id: t.guildId,
            location_guild_id: a,
        }),
            e.stopPropagation(),
            e.currentTarget.blur(),
            n();
    }
    return (0, r.jsx)(V, {
        tooltipPosition: s,
        disabled: i,
        onClick: o,
        text: M.intl.formatToPlainString(M.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: (0, r.jsx)(_.HKD, { size: "md", color: "currentColor", className: P.Wo }),
    });
}
function H(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, h.Ay)(),
        o = (0, l.bG)([N.A], () => N.A.isFavoriteSound(t.soundId), [t.soundId]),
        u = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    o
                        ? (0, v.eS)(t.soundId)
                        : ((0, R.Ni)({ sound: t, location: { ...s, object: D.ZSU.SOUNDBOARD_SOUND } }),
                          (0, v.Rp)(t.soundId));
            },
            [o, t, s],
        );
    return (0, r.jsx)(V, {
        disabled: n,
        onClick: u,
        text: M.intl.formatToPlainString(o ? M.t.lQLsjc : M.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: o
            ? (0, r.jsx)(_.Gg5, {
                  size: "xs",
                  className: a()(P.Wo, P.gj),
                  color: c.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, r.jsx)(_.yA2, { size: "xs", color: "currentColor", className: P.Wo }),
    });
}
function j(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== x) return { x: 0, y: 0 };
        let n = t.getBoundingClientRect();
        return { x: n.left + n.width / 2, y: n.top + n.height / 2 };
    }, [t, e]);
}
let Y = i.forwardRef(function (e, t) {
    let {
            sound: n,
            channel: s,
            containerClassName: c,
            className: h,
            focused: T,
            forceSecondaryActions: y = !1,
            interactive: v = !0,
            enableSecondaryActions: N = !1,
            suppressPlaySound: D,
            onMouseEnter: V,
            onSelectItem: Y,
            analyticsLocations: W,
            buttonOverlay: K = C.If.PLAY,
            showLockForDisabledSound: $ = !0,
            inNitroLockedSection: z = !1,
            isAnimated: q = !0,
            isPlayingSoundOverride: Z,
            isSoundmoji: X,
            soundmojiVisualEffectRef: Q,
            tooltipOverride: J,
            ...ee
        } = e,
        { name: et, emojiId: en, emojiName: er } = n,
        ei = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
        es = (0, b.v)(n, s?.guild_id),
        {
            playSoundboardSound: ea,
            previewSound: eo,
            isPlayingSound: el,
        } = (0, O.A)(
            n,
            s?.id ?? null,
            (X ? I.HO.getSetting() : I.dG.getSetting()?.volume) ?? 100,
            !X && s?.isVocal() ? w.a.VOICE : w.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eu } = i.useContext(m.x),
        ec = i.useRef(null),
        ed = j(n.soundId, ec.current),
        e_ = (0, l.bG)([p.A], () => p.A.useReducedMotion),
        ef = i.useRef(k),
        ep = i.useRef(new u.IX()),
        eh = n.soundId === x,
        em = `sound-${n.soundId}`,
        eE = (0, o.rm)(em),
        eg = null != en || null != er,
        eA = !(0, R.Ir)(ei, n, s) && !X,
        eI = y || (N && !eA),
        eT = E.LW.useStore().bottomPosition ?? 0,
        eS = (ec.current?.getBoundingClientRect().bottom ?? 0) + 50 > eT ? "top" : "bottom",
        [ey, ev] = i.useState(!1),
        eN = i.useCallback(() => {
            ev(!0);
        }, []),
        eC = i.useCallback(() => {
            ev(!1);
        }, []),
        eR = eA && $;
    function eO() {
        D || ea(W);
    }
    function eb(e) {
        (eh &&
            !e_ &&
            ((ef.current = Math.min(ef.current + G, U)),
            Math.random() < ef.current && eu(ed.x, ed.y, void 0, void 0, { sprite: L.dR })),
        null != Y)
            ? Y(e)
            : eO();
    }
    let eD = (0, r.jsx)("div", {
            onMouseEnter: eN,
            onMouseLeave: eC,
            children: B({ sound: n, previewSound: eo, disabled: eA && !y }),
        }),
        eL = (e) =>
            D || eA
                ? eR
                    ? (0, r.jsx)(_.XAi, {
                          size: "xs",
                          color: "currentColor",
                          className: a()(P.C4, P.hz, e, { [P.hn]: eg }),
                      })
                    : null
                : (0, r.jsx)(_.udU, { size: "xs", color: "currentColor", className: a()(P.C4, e) }),
        ew = (0, r.jsx)("div", {
            onMouseEnter: eN,
            onMouseLeave: eC,
            children: (0, r.jsx)(H, { sound: n, disabled: !v && !y }),
        }),
        eM = () =>
            eR && !z
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", { className: P.LQ }),
                          eL(P.B3),
                          (0, r.jsx)("div", {
                              className: P.d7,
                              children: (0, r.jsxs)("div", { className: P.O5, children: [eI && eD, eI && ew] }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: P.d7,
                      children: [
                          (0, r.jsx)("div", { className: a()({ [P.LQ]: !D }) }),
                          (0, r.jsx)("div", {
                              className: P.O5,
                              children:
                                  K === C.If.SOUNDMOJI
                                      ? (0, r.jsx)(g.Ay, { sound: n, channel: s, setTooltipShowing: ev })
                                      : (0, r.jsxs)(r.Fragment, { children: [eI && eD, eL(), eI && ew] }),
                          }),
                      ],
                  });
    function eP() {
        switch (K) {
            case C.If.ADD:
                return (0, r.jsxs)("div", {
                    className: P.ec,
                    children: [
                        (0, r.jsx)("div", { className: P.LQ }),
                        (0, r.jsxs)("div", {
                            className: P.O5,
                            children: [
                                eD,
                                (0, r.jsxs)("div", {
                                    className: P.c9,
                                    children: [
                                        (0, r.jsx)(_.j96, { size: "md", color: "currentColor", className: P.y_ }),
                                        (0, r.jsx)(_.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-strong",
                                            children: M.intl.string(M.t.QqqXLY),
                                        }),
                                    ],
                                }),
                                eI && ew,
                            ],
                        }),
                    ],
                });
            case C.If.NONE:
                return null;
            case C.If.PLAY:
            case C.If.SOUNDMOJI:
            default:
                return eM();
        }
    }
    i.useEffect(() => {
        let e = ep.current;
        return (
            eh &&
                e.start(F, () => {
                    ef.current = Math.max(ef.current - G, k);
                }),
            () => e.stop()
        );
    }, [eh]);
    let ex = (0, A.o)(ec.current);
    return (0, r.jsxs)("li", {
        ref: t,
        className: a()(P.H, c),
        onMouseEnter: V,
        children: [
            (0, r.jsx)(d.m, {
                "aria-label": null != J ? n.name : void 0,
                __unsupportedReactNodeAsText: J ?? n.name,
                position: eS,
                shouldShow: !ey,
                delay: 500,
                children: (0, r.jsxs)(_.sqX, {
                    ...ee,
                    buttonProps: { ...eE, id: em, role: "button" },
                    "aria-label": M.intl.formatToPlainString(M.t.tuMUJ2, { emojiName: n.emojiName, soundName: n.name }),
                    className: a()(
                        P.aG,
                        {
                            [P.CS]: q,
                            [P.he]: Z ?? el,
                            [P.ju]: D,
                            [P.wT]: v,
                            [P.$9]: !v && !y,
                            [P.Au]: eA && !y,
                            [P.fx]: !v && y,
                            [P.in]: v && T,
                        },
                        h,
                    ),
                    onClick: (e) => {
                        eb?.(e);
                    },
                    onContextMenu: N && !eA ? es : void 0,
                    children: [
                        (0, r.jsxs)("div", {
                            className: a()(P.KM, { [P.hn]: eg }),
                            "aria-hidden": !0,
                            ref: ec,
                            children: [
                                eg && (0, r.jsx)(f.A, { emojiId: en, emojiName: er, className: P.Zg }),
                                (0, r.jsx)(_.Text, {
                                    variant: "text-xs/medium",
                                    color: v ? void 0 : "text-muted",
                                    className: a()(P.TW, { [P.hn]: eg }),
                                    children: et,
                                }),
                            ],
                        }),
                        eP(),
                    ],
                }),
            }),
            !n.available &&
                (0, r.jsx)(d.m, {
                    text: M.intl.string(M.t.MDOXJR),
                    shouldShow: !ey,
                    children: (0, r.jsx)("div", {
                        className: P.ET,
                        children: !z && (0, r.jsxs)("div", { className: P.ld, children: [eD, ew] }),
                    }),
                }),
            !0 === X && (0, r.jsx)(A.A, { sound: n, containerDimensions: ex, ref: Q }),
        ],
    });
});
