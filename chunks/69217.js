"use strict";
n.d(t, { Ay: () => Y, dT: () => F });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(850992),
    E = n(105713),
    A = n(109638),
    I = n(253932),
    T = n(967198),
    y = n(287809),
    S = n(954571),
    v = n(796774),
    C = n(209932),
    b = n(807348),
    N = n(536432),
    R = n(792348),
    O = n(496502),
    D = n(652215),
    L = n(851110),
    w = n(257645),
    x = n(985018),
    P = n(125049);
let M = "1",
    k = 0.01,
    U = 0.1,
    G = 0.01,
    V = 1e3;
function F(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: o = "top", ref: l } = e;
    return (0, r.jsx)(d.m, {
        text: i,
        position: o,
        children: (0, r.jsx)(_.DUT, {
            innerRef: l,
            "aria-label": i,
            className: s()(P.zr, { [P.$9]: t }),
            onClick: n,
            children: a,
        }),
    });
}
function B(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = "top" } = e,
        s = (0, l.bG)([T.A], () => T.A.getGuildId());
    function o(e) {
        S.default.track(D.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
            sound_id: t.soundId,
            sound_name: t.name,
            sound_guild_id: t.guildId,
            location_guild_id: s,
        }),
            e.stopPropagation(),
            e.currentTarget.blur(),
            n();
    }
    return (0, r.jsx)(F, {
        tooltipPosition: a,
        disabled: i,
        onClick: o,
        text: x.intl.formatToPlainString(x.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: (0, r.jsx)(_.HKD, { size: "md", color: "currentColor", className: P.Wo }),
    });
}
function j(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: a } = (0, h.Ay)(),
        o = (0, l.bG)([C.A], () => C.A.isFavoriteSound(t.soundId), [t.soundId]),
        u = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    o
                        ? (0, v.eS)(t.soundId)
                        : ((0, N.Ni)({ sound: t, location: { ...a, object: D.ZSU.SOUNDBOARD_SOUND } }),
                          (0, v.Rp)(t.soundId));
            },
            [o, t, a],
        );
    return (0, r.jsx)(F, {
        disabled: n,
        onClick: u,
        text: x.intl.formatToPlainString(o ? x.t.lQLsjc : x.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: o
            ? (0, r.jsx)(_.Gg5, { size: "xs", className: s()(P.Wo, P.gj), color: c.A.unsafe_rawColors.GOLD.css })
            : (0, r.jsx)(_.yA2, { size: "xs", color: "currentColor", className: P.Wo }),
    });
}
function H(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== M) return { x: 0, y: 0 };
        let n = t.getBoundingClientRect();
        return { x: n.left + n.width / 2, y: n.top + n.height / 2 };
    }, [t, e]);
}
let Y = i.forwardRef(function (e, t) {
    let {
            sound: n,
            channel: a,
            containerClassName: c,
            className: h,
            focused: T,
            forceSecondaryActions: S = !1,
            interactive: v = !0,
            enableSecondaryActions: C = !1,
            suppressPlaySound: D,
            onMouseEnter: F,
            onSelectItem: Y,
            analyticsLocations: W,
            buttonOverlay: K = b.If.PLAY,
            showLockForDisabledSound: z = !0,
            inNitroLockedSection: $ = !1,
            isAnimated: q = !0,
            isPlayingSoundOverride: Z,
            isSoundmoji: Q,
            soundmojiVisualEffectRef: X,
            tooltipOverride: J,
            ...ee
        } = e,
        { name: et, emojiId: en, emojiName: er } = n,
        ei = (0, l.bG)([y.default], () => y.default.getCurrentUser()),
        ea = (0, O.v)(n, a?.guild_id),
        {
            playSoundboardSound: es,
            previewSound: eo,
            isPlayingSound: el,
        } = (0, R.A)(
            n,
            a?.id ?? null,
            (Q ? I.HO.getSetting() : I.dG.getSetting()?.volume) ?? 100,
            !Q && a?.isVocal() ? w.a.VOICE : w.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eu } = i.useContext(m.x),
        ec = i.useRef(null),
        ed = H(n.soundId, ec.current),
        e_ = (0, l.bG)([p.A], () => p.A.useReducedMotion),
        ef = i.useRef(k),
        ep = i.useRef(new u.IX()),
        eh = n.soundId === M,
        em = `sound-${n.soundId}`,
        eg = (0, o.rm)(em),
        eE = null != en || null != er,
        eA = !(0, N.Ir)(ei, n, a) && !Q,
        eI = S || (C && !eA),
        eT = g.LW.useStore().bottomPosition ?? 0,
        ey = (ec.current?.getBoundingClientRect().bottom ?? 0) + 50 > eT ? "top" : "bottom",
        [eS, ev] = i.useState(!1),
        eC = i.useCallback(() => {
            ev(!0);
        }, []),
        eb = i.useCallback(() => {
            ev(!1);
        }, []),
        eN = eA && z;
    function eR() {
        D || es(W);
    }
    function eO(e) {
        (eh &&
            !e_ &&
            ((ef.current = Math.min(ef.current + G, U)),
            Math.random() < ef.current && eu(ed.x, ed.y, void 0, void 0, { sprite: L.dR })),
        null != Y)
            ? Y(e)
            : eR();
    }
    let eD = (0, r.jsx)("div", {
            onMouseEnter: eC,
            onMouseLeave: eb,
            children: B({ sound: n, previewSound: eo, disabled: eA && !S }),
        }),
        eL = (e) =>
            D || eA
                ? eN
                    ? (0, r.jsx)(_.XAi, {
                          size: "xs",
                          color: "currentColor",
                          className: s()(P.C4, P.hz, e, { [P.hn]: eE }),
                      })
                    : null
                : (0, r.jsx)(_.udU, { size: "xs", color: "currentColor", className: s()(P.C4, e) }),
        ew = (0, r.jsx)("div", {
            onMouseEnter: eC,
            onMouseLeave: eb,
            children: (0, r.jsx)(j, { sound: n, disabled: !v && !S }),
        }),
        ex = () =>
            eN && !$
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
                          (0, r.jsx)("div", { className: s()({ [P.LQ]: !D }) }),
                          (0, r.jsx)("div", {
                              className: P.O5,
                              children:
                                  K === b.If.SOUNDMOJI
                                      ? (0, r.jsx)(E.Ay, { sound: n, channel: a, setTooltipShowing: ev })
                                      : (0, r.jsxs)(r.Fragment, { children: [eI && eD, eL(), eI && ew] }),
                          }),
                      ],
                  });
    function eP() {
        switch (K) {
            case b.If.ADD:
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
                                            children: x.intl.string(x.t.QqqXLY),
                                        }),
                                    ],
                                }),
                                eI && ew,
                            ],
                        }),
                    ],
                });
            case b.If.NONE:
                return null;
            case b.If.PLAY:
            case b.If.SOUNDMOJI:
            default:
                return ex();
        }
    }
    i.useEffect(() => {
        let e = ep.current;
        return (
            eh &&
                e.start(V, () => {
                    ef.current = Math.max(ef.current - G, k);
                }),
            () => e.stop()
        );
    }, [eh]);
    let eM = (0, A.o)(ec.current);
    return (0, r.jsxs)("li", {
        ref: t,
        className: s()(P.H, c),
        onMouseEnter: F,
        children: [
            (0, r.jsx)(d.m, {
                "aria-label": null != J ? n.name : void 0,
                __unsupportedReactNodeAsText: J ?? n.name,
                position: ey,
                shouldShow: !eS,
                delay: 500,
                children: (0, r.jsxs)(_.sqX, {
                    ...ee,
                    buttonProps: { ...eg, id: em, role: "button" },
                    "aria-label": x.intl.formatToPlainString(x.t.tuMUJ2, { emojiName: n.emojiName, soundName: n.name }),
                    className: s()(
                        P.aG,
                        {
                            [P.CS]: q,
                            [P.he]: Z ?? el,
                            [P.ju]: D,
                            [P.wT]: v,
                            [P.$9]: !v && !S,
                            [P.Au]: eA && !S,
                            [P.fx]: !v && S,
                            [P.in]: v && T,
                        },
                        h,
                    ),
                    onClick: (e) => {
                        eO?.(e);
                    },
                    onContextMenu: C && !eA ? ea : void 0,
                    children: [
                        (0, r.jsxs)("div", {
                            className: s()(P.KM, { [P.hn]: eE }),
                            "aria-hidden": !0,
                            ref: ec,
                            children: [
                                eE && (0, r.jsx)(f.A, { emojiId: en, emojiName: er, className: P.Zg }),
                                (0, r.jsx)(_.Text, {
                                    variant: "text-xs/medium",
                                    color: v ? void 0 : "text-muted",
                                    className: s()(P.TW, { [P.hn]: eE }),
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
                    text: x.intl.string(x.t.MDOXJR),
                    shouldShow: !eS,
                    children: (0, r.jsx)("div", {
                        className: P.ET,
                        children: !$ && (0, r.jsxs)("div", { className: P.ld, children: [eD, ew] }),
                    }),
                }),
            !0 === Q && (0, r.jsx)(A.A, { sound: n, containerDimensions: eM, ref: X }),
        ],
    });
});
