"use strict";
n.d(t, {
    Gw: () => $,
    HW: () => K,
    K8: () => J,
    Mr: () => Z,
    UB: () => W,
    YX: () => Q,
    bo: () => z,
    jz: () => q,
    lw: () => Y,
    mn: () => X,
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(512750),
    o = n(158954),
    c = n(311907),
    d = n(116833),
    u = n(342494),
    h = n(775602),
    A = n(793574),
    m = n(688810),
    p = n(509536),
    g = n(987144),
    _ = n(976860),
    f = n(71393),
    x = n(204017),
    C = n(645619),
    E = n(379229),
    I = n(990208),
    N = n(864310),
    b = n(363487),
    S = n(828162),
    T = n(490557),
    v = n(306113),
    y = n(220628),
    j = n(867060),
    R = n(800007),
    O = n(568065),
    L = n(652215),
    M = n(746080),
    D = n(49999),
    G = n(738072),
    U = n(136708),
    P = n(985018),
    w = n(861236),
    k = n(75962),
    V = n(108432),
    B = n(581665),
    H = n(392438),
    F = n(20874);
function K(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: l } = e;
    return (0, i.jsx)(ee, {
        asset: (0, i.jsx)(T.b, { className: r()(w.Sl, w.SV) }),
        title: P.intl.formatToPlainString(U.default["Zg/m9K"], { perkName: n.title }),
        body: P.intl.formatToPlainString(U.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: s,
        markAsDismissed: l,
    });
}
function W(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: s } = e,
        l = (0, b.A)(t);
    return (0, i.jsx)(u.HZ, {
        targetElementRef: s,
        assetUrl: V.A,
        title: P.intl.string(U.default.QpQBPQ),
        body: P.intl.string(U.default["6hn0xF"]),
        action: {
            text: P.intl.string(P.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: l ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: l ? "top" : "center",
        caretConfig: l ? { align: "start" } : { align: "center" },
        onRequestClose: () => n?.(D.i.USER_DISMISS),
    });
}
function Y(e) {
    let { guildId: t, powerups: n, channelRowRef: s, markAsDismissed: l } = e,
        a = (0, c.bG)([f.A], () => f.A.getGuild(t)?.name),
        { onActivate: o, isLoading: d, error: u } = (0, y.A)(t, n[0]),
        h = (0, I.A)(n[0], !0);
    if (((0, j.A)(u), 0 === n.length)) return;
    let m =
            n.length >= 3
                ? P.intl.formatToPlainString(U.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? P.intl.formatToPlainString(U.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : P.intl.formatToPlainString(U.default.ZF8NT6, { perk: n[0].title }),
        p = 1 === n.length;
    return (0, i.jsx)(ee, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(T.b, { className: r()(w.Sl, w.SV) })
                : (0, i.jsx)("img", { alt: "", src: h, className: w.Sl }),
        title: P.intl.formatToPlainString(U.default.LmpChE, { guildName: a }),
        body: m,
        actions: [
            {
                text: p ? P.intl.string(U.default.gSxlHf) : P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), p ? o() : (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: d,
            },
        ],
        targetElementRef: s,
        markAsDismissed: l,
    });
}
function z(e) {
    let { guildId: t, powerups: n, channelRowRef: s, markAsDismissed: l } = e,
        r = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, i.jsx)(ee, {
            targetElementRef: s,
            title: P.intl.string(U.default.Ygpx4Q),
            body: P.intl.string(U.default.mmNkUA),
            size: "video",
            asset: F.A,
            actions: [
                {
                    text: P.intl.string(P.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, r.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let o = n.find((e) => O.m_.has(e.skuId));
    if (null != o)
        return (0, i.jsx)(ee, {
            targetElementRef: s,
            title: P.intl.string(U.default["kA2c+n"]),
            body: P.intl.string(U.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: H.A, className: w.Sl }),
            actions: [
                {
                    text: P.intl.string(P.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let c = n.find((e) => O.aH.has(e.skuId));
    return null != c
        ? (0, i.jsx)(ee, {
              targetElementRef: s,
              title: P.intl.string(U.default["kA2c+n"]),
              body: P.intl.string(U.default.TUilLj),
              asset: (0, i.jsx)("img", { alt: "", src: B.A, className: w.Sl }),
              actions: [
                  {
                      text: P.intl.string(P.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, c.skuId);
                      },
                  },
              ],
              markAsDismissed: l,
          })
        : null;
}
function q(e) {
    let { guildId: t, type: n, markAsDismissed: s, channelRowRef: l } = e,
        { available: r } = (0, N.A)(t),
        { gameName: a, gameName2: d } = (0, x.A)(),
        u = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(ee, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: P.intl.string(n === E.o.GAME_SERVER_HOSTING_AVAILABLE ? G.default.wXLChx : G.default["8z8RpY"]),
        body:
            n === E.o.GAME_SERVER_HOSTING_AVAILABLE
                ? P.intl.formatToPlainString(G.default["7KXp9J"], { gameName: a, gameName2: d })
                : P.intl.format(G.default["IQ1E+d"], { boostCount: r }),
        actions: [
            {
                text: P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: s,
    });
}
function X(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: s } = e,
        l = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(ee, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: l ? "SM_Main_Int" : "SM_Auto",
        }),
        title: P.intl.string(G.default["eX64+z"]),
        body: P.intl.string(G.default.NpgfEB),
        actions: [
            {
                text: P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(D.i.TAKE_ACTION), (0, _.pX)(L.BVt.CHANNEL(t, M.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function J(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: s } = e,
        { gameName: l, gameName2: r } = (0, x.A)(),
        a = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(ee, {
        size: "video",
        targetElementRef: s,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: P.intl.string(G.default.t3LNW1),
        body: P.intl.formatToPlainString(G.default.V9qFAU, { gameName: l, gameName2: r }),
        actions: [
            {
                text: P.intl.string(G.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(D.i.TAKE_ACTION),
                        (0, p.K)({
                            guildId: t,
                            location: { section: L.JJy.GUILD_HEADER, object: L.ZSU.BUTTON_CTA },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Q(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: s } = e,
        l = (0, b.A)(t);
    return (0, i.jsx)(ee, {
        targetElementRef: s,
        position: l ? "right" : "bottom",
        align: l ? "top" : "center",
        alignmentStrategy: "edge",
        caretConfig: l ? { align: "start" } : { align: "center" },
        asset: (0, i.jsx)("img", { alt: "", src: k.A, className: r()(w.Sl, w.RV) }),
        title: P.intl.string(G.default["wy+j5s"]),
        body: P.intl.formatToPlainString(G.default["7OETrT"], {
            gameName: "Necesse",
            gameName2: "V Rising",
            gameName3: "Factorio",
        }),
        actions: [
            {
                text: P.intl.string(G.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(D.i.TAKE_ACTION),
                        l
                            ? (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, R.W5)
                            : (0, p.K)({
                                  guildId: t,
                                  location: { section: L.JJy.GUILD_HEADER, object: L.ZSU.BUTTON_CTA },
                                  scrollToPowerupCards: !0,
                              });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function $(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: r } = e,
        { available: a } = (0, N.A)(t),
        o = n.cost - a,
        c = (0, I.A)(n, !0),
        { analyticsLocations: d } = (0, m.Ay)(A.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        u = (0, b.A)(t),
        h = s.useRef(null);
    return (0, i.jsx)(ee, {
        asset:
            n.type === O.o9.LEVEL
                ? (0, i.jsx)(v.n, { powerup: n, eventTargetRef: h, className: w.Lj })
                : (0, i.jsx)("img", { alt: "", src: c, className: w.Sl }),
        title: P.intl.string(U.default.n37JhA),
        body: P.intl.formatToPlainString(u || n.type === O.o9.LEVEL ? U.default.Yr1ogl : U.default["7MZ2tu"], {
            boostCount: o,
            perkName: n.title,
        }),
        actions: [
            {
                text: P.intl.string(P.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = f.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: L.liQ.GUILD_CHANNEL, section: L.JJy.GUILD_HEADER };
                    await (0, g.g)({
                        guild: e,
                        numberOfBoostsToAdd: o,
                        analyticsLocation: i,
                        analyticsLocations: d,
                        intent: n.type === O.o9.PERK ? O.Pn.PERK : void 0,
                    }),
                        r(D.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: l,
        markAsDismissed: r,
        position: u ? "right" : "bottom",
        align: u ? "top" : "center",
        caretConfig: u ? { align: "start" } : { align: "center" },
    });
}
function Z(e) {
    let { guildId: t, featuredExpiringPowerup: n, channelRowRef: l, markAsDismissed: r } = e,
        a = (0, c.bG)([C.A], () => C.A.getStateForGuild(t)),
        { analyticsLocations: d } = (0, m.Ay)(A.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        u = (0, b.A)(t),
        p = a?.allPowerups[n.skuId],
        _ = (0, I.A)(p, !0),
        x = s.useRef(null),
        E = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    if (null == p && !n.isGameServer) return null;
    let N = n.isGameServer
            ? P.intl.string(U.default["9L0pAN"])
            : P.intl.formatToPlainString(U.default.gG8bI8, { perkName: n.name }),
        S = 0 === n.daysUntilExpiry ? U.default.BNS5zl : U.default["Xla/TL"],
        T = P.intl.formatToPlainString(S, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, i.jsx)(ee, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, i.jsx)(o.E_w, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: w.Sl,
                  stateMachine: E ? "SM_Main_Int" : "SM_Auto",
              })
            : p?.type === O.o9.LEVEL
              ? (0, i.jsx)(v.n, { powerup: p, eventTargetRef: x, className: w.Lj })
              : (0, i.jsx)("img", { alt: "", src: _, className: w.Sl }),
        title: N,
        body: T,
        actions: [
            {
                text: P.intl.string(P.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = f.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: L.liQ.GUILD_CHANNEL, section: L.JJy.GUILD_HEADER };
                    await (0, g.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: i,
                        analyticsLocations: d,
                        intent: p?.type === O.o9.PERK || n.isGameServer ? O.Pn.PERK : void 0,
                    }),
                        r(D.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: l,
        markAsDismissed: r,
        position: u ? "right" : "bottom",
        align: u ? "top" : "center",
        caretConfig: u ? { align: "start" } : { align: "center" },
    });
}
function ee(e) {
    let {
        caretConfig: t = { align: "start" },
        position: n = "right",
        align: s = "top",
        alignmentStrategy: l = "edge",
        markAsDismissed: r,
        size: a = "lg",
        asset: o,
        ...c
    } = e;
    return (0, i.jsx)(u.AM, {
        ...c,
        graphic: {
            type: "dynamic",
            component: d.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
            props: { asset: o },
        },
        size: a,
        shouldShow: !0,
        position: n,
        caretConfig: t,
        alignmentStrategy: l,
        align: s,
        onRequestClose: () => r?.(D.i.USER_DISMISS),
    });
}
