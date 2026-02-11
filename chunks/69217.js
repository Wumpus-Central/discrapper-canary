"use strict";
n.d(t, { Ay: () => W, dT: () => B });
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
    h = n(775602),
    p = n(688810),
    g = n(21161),
    E = n(850992),
    A = n(105713),
    I = n(109638),
    T = n(253932),
    y = n(967198),
    S = n(287809),
    v = n(954571),
    C = n(796774),
    b = n(209932),
    N = n(807348),
    R = n(536432),
    O = n(792348),
    D = n(496502),
    L = n(652215),
    w = n(851110),
    x = n(257645),
    P = n(985018),
    M = n(125049);
let k = "1",
    U = 0.01,
    G = 0.1,
    F = 0.01,
    V = 1e3;
function B(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: o = "top", ref: l } = e;
    return (0, r.jsx)(d.m, {
        text: i,
        position: o,
        children: (0, r.jsx)(_.DUT, {
            innerRef: l,
            "aria-label": i,
            className: s()(M.zr, { [M.$9]: t }),
            onClick: n,
            children: a,
        }),
    });
}
function j(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = "top" } = e,
        s = (0, l.bG)([y.A], () => y.A.getGuildId());
    function o(e) {
        v.default.track(L.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
            sound_id: t.soundId,
            sound_name: t.name,
            sound_guild_id: t.guildId,
            location_guild_id: s,
        }),
            e.stopPropagation(),
            e.currentTarget.blur(),
            n();
    }
    return (0, r.jsx)(B, {
        tooltipPosition: a,
        disabled: i,
        onClick: o,
        text: P.intl.formatToPlainString(P.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: (0, r.jsx)(_.HKD, { size: "md", color: "currentColor", className: M.Wo }),
    });
}
function H(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: a } = (0, p.Ay)(),
        o = (0, l.bG)([b.A], () => b.A.isFavoriteSound(t.soundId), [t.soundId]),
        u = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    o
                        ? (0, C.eS)(t.soundId)
                        : ((0, R.Ni)({ sound: t, location: { ...a, object: L.ZSU.SOUNDBOARD_SOUND } }),
                          (0, C.Rp)(t.soundId));
            },
            [o, t, a],
        );
    return (0, r.jsx)(B, {
        disabled: n,
        onClick: u,
        text: P.intl.formatToPlainString(o ? P.t.lQLsjc : P.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: o
            ? (0, r.jsx)(_.Gg5, { size: "xs", className: s()(M.Wo, M.gj), color: c.A.unsafe_rawColors.GOLD.css })
            : (0, r.jsx)(_.yA2, { size: "xs", color: "currentColor", className: M.Wo }),
    });
}
function Y(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== k) return { x: 0, y: 0 };
        let n = t.getBoundingClientRect();
        return { x: n.left + n.width / 2, y: n.top + n.height / 2 };
    }, [t, e]);
}
let W = i.forwardRef(function (e, t) {
    let {
            sound: n,
            channel: a,
            containerClassName: c,
            className: p,
            focused: y,
            forceSecondaryActions: v = !1,
            interactive: C = !0,
            enableSecondaryActions: b = !1,
            suppressPlaySound: L,
            onMouseEnter: B,
            onSelectItem: W,
            analyticsLocations: K,
            buttonOverlay: $ = N.If.PLAY,
            showLockForDisabledSound: z = !0,
            inNitroLockedSection: q = !1,
            isAnimated: X = !0,
            isPlayingSoundOverride: Z,
            isSoundmoji: Q,
            soundmojiVisualEffectRef: J,
            tooltipOverride: ee,
            ...et
        } = e,
        { name: en, emojiId: er, emojiName: ei } = n,
        ea = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
        es = (0, D.v)(n, a?.guild_id),
        {
            playSoundboardSound: eo,
            previewSound: el,
            isPlayingSound: eu,
        } = (0, O.A)(
            n,
            a?.id ?? null,
            (Q ? T.HO.getSetting() : T.dG.getSetting()?.volume) ?? 100,
            !Q && a?.isVocal() ? x.a.VOICE : x.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ec } = i.useContext(g.x),
        ed = i.useRef(null),
        e_ = Y(n.soundId, ed.current),
        ef = (0, l.bG)([h.A], () => h.A.useReducedMotion),
        eh = i.useRef(U),
        ep = i.useRef(new u.IX()),
        em = n.soundId === k,
        eg = `sound-${n.soundId}`,
        eE = (0, o.rm)(eg),
        eA = null != er || null != ei,
        eI = !(0, R.Ir)(ea, n, a) && !Q,
        eT = v || (b && !eI),
        ey = E.LW.useStore().bottomPosition ?? 0,
        eS = (ed.current?.getBoundingClientRect().bottom ?? 0) + 50 > ey ? "top" : "bottom",
        [ev, eC] = i.useState(!1),
        eb = i.useCallback(() => {
            eC(!0);
        }, []),
        eN = i.useCallback(() => {
            eC(!1);
        }, []),
        eR = eI && z;
    function eO() {
        L || eo(K);
    }
    function eD(e) {
        (em &&
            !ef &&
            ((eh.current = Math.min(eh.current + F, G)),
            Math.random() < eh.current && ec(e_.x, e_.y, void 0, void 0, { sprite: w.dR })),
        null != W)
            ? W(e)
            : eO();
    }
    let eL = (0, r.jsx)("div", {
            onMouseEnter: eb,
            onMouseLeave: eN,
            children: j({ sound: n, previewSound: el, disabled: eI && !v }),
        }),
        ew = (e) =>
            L || eI
                ? eR
                    ? (0, r.jsx)(_.XAi, {
                          size: "xs",
                          color: "currentColor",
                          className: s()(M.C4, M.hz, e, { [M.hn]: eA }),
                      })
                    : null
                : (0, r.jsx)(_.udU, { size: "xs", color: "currentColor", className: s()(M.C4, e) }),
        ex = (0, r.jsx)("div", {
            onMouseEnter: eb,
            onMouseLeave: eN,
            children: (0, r.jsx)(H, { sound: n, disabled: !C && !v }),
        }),
        eP = () =>
            eR && !q
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", { className: M.LQ }),
                          ew(M.B3),
                          (0, r.jsx)("div", {
                              className: M.d7,
                              children: (0, r.jsxs)("div", { className: M.O5, children: [eT && eL, eT && ex] }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: M.d7,
                      children: [
                          (0, r.jsx)("div", { className: s()({ [M.LQ]: !L }) }),
                          (0, r.jsx)("div", {
                              className: M.O5,
                              children:
                                  $ === N.If.SOUNDMOJI
                                      ? (0, r.jsx)(A.Ay, { sound: n, channel: a, setTooltipShowing: eC })
                                      : (0, r.jsxs)(r.Fragment, { children: [eT && eL, ew(), eT && ex] }),
                          }),
                      ],
                  });
    function eM() {
        switch ($) {
            case N.If.ADD:
                return (0, r.jsxs)("div", {
                    className: M.ec,
                    children: [
                        (0, r.jsx)("div", { className: M.LQ }),
                        (0, r.jsxs)("div", {
                            className: M.O5,
                            children: [
                                eL,
                                (0, r.jsxs)("div", {
                                    className: M.c9,
                                    children: [
                                        (0, r.jsx)(_.j96, { size: "md", color: "currentColor", className: M.y_ }),
                                        (0, r.jsx)(_.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-strong",
                                            children: P.intl.string(P.t.QqqXLY),
                                        }),
                                    ],
                                }),
                                eT && ex,
                            ],
                        }),
                    ],
                });
            case N.If.NONE:
                return null;
            case N.If.PLAY:
            case N.If.SOUNDMOJI:
            default:
                return eP();
        }
    }
    i.useEffect(() => {
        let e = ep.current;
        return (
            em &&
                e.start(V, () => {
                    eh.current = Math.max(eh.current - F, U);
                }),
            () => e.stop()
        );
    }, [em]);
    let ek = (0, I.o)(ed.current);
    return (0, r.jsxs)("li", {
        ref: t,
        className: s()(M.H, c),
        onMouseEnter: B,
        children: [
            (0, r.jsx)(d.m, {
                "aria-label": null != ee ? n.name : void 0,
                __unsupportedReactNodeAsText: ee ?? n.name,
                position: eS,
                shouldShow: !ev,
                delay: 500,
                children: (0, r.jsxs)(_.sqX, {
                    ...et,
                    buttonProps: { ...eE, id: eg, role: "button" },
                    "aria-label": P.intl.formatToPlainString(P.t.tuMUJ2, { emojiName: n.emojiName, soundName: n.name }),
                    className: s()(
                        M.aG,
                        {
                            [M.CS]: X,
                            [M.he]: Z ?? eu,
                            [M.ju]: L,
                            [M.wT]: C,
                            [M.$9]: !C && !v,
                            [M.Au]: eI && !v,
                            [M.fx]: !C && v,
                            [M.in]: C && y,
                        },
                        p,
                    ),
                    onClick: (e) => {
                        eD?.(e);
                    },
                    onContextMenu: b && !eI ? es : void 0,
                    children: [
                        (0, r.jsxs)("div", {
                            className: s()(M.KM, { [M.hn]: eA }),
                            "aria-hidden": !0,
                            ref: ed,
                            children: [
                                eA && (0, r.jsx)(f.A, { emojiId: er, emojiName: ei, className: M.Zg }),
                                (0, r.jsx)(_.Text, {
                                    variant: "text-xs/medium",
                                    color: C ? void 0 : "text-muted",
                                    className: s()(M.TW, { [M.hn]: eA }),
                                    children: en,
                                }),
                            ],
                        }),
                        eM(),
                    ],
                }),
            }),
            !n.available &&
                (0, r.jsx)(d.m, {
                    text: P.intl.string(P.t.MDOXJR),
                    shouldShow: !ev,
                    children: (0, r.jsx)("div", {
                        className: M.ET,
                        children: !q && (0, r.jsxs)("div", { className: M.ld, children: [eL, ex] }),
                    }),
                }),
            !0 === Q && (0, r.jsx)(I.A, { sound: n, containerDimensions: ek, ref: J }),
        ],
    });
});
