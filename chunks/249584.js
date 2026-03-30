"use strict";
n.d(t, {
    Gw: () => ee,
    HW: () => W,
    K8: () => J,
    Mr: () => et,
    Ns: () => Z,
    UB: () => Y,
    YX: () => $,
    bo: () => q,
    jz: () => X,
    lw: () => z,
    mn: () => Q,
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(512750),
    o = n(158954),
    c = n(311907),
    d = n(116833),
    u = n(342494),
    h = n(775602),
    A = n(793574),
    m = n(688810),
    _ = n(509536),
    g = n(987144),
    p = n(976860),
    f = n(71393),
    x = n(297930),
    E = n(204017),
    C = n(645619),
    I = n(379229),
    N = n(990208),
    S = n(864310),
    b = n(363487),
    T = n(828162),
    v = n(490557),
    y = n(306113),
    j = n(220628),
    R = n(867060),
    O = n(800007),
    L = n(568065),
    M = n(652215),
    D = n(746080),
    G = n(49999),
    U = n(294726),
    P = n(333354),
    w = n(985018),
    k = n(168363),
    V = n(570890),
    B = n(108432),
    H = n(581665),
    F = n(392438),
    K = n(20874);
function W(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: l } = e;
    return (0, i.jsx)(en, {
        asset: (0, i.jsx)(v.b, { className: a()(k.Sl, k.SV) }),
        title: w.intl.formatToPlainString(P.default["Zg/m9K"], { perkName: n.title }),
        body: w.intl.formatToPlainString(P.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: w.intl.string(w.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: s,
        markAsDismissed: l,
    });
}
function Y(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: s, ...l } = e;
    return (0, i.jsx)(u.HZ, {
        targetElementRef: s,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        ...l,
        assetUrl: B.A,
        title: w.intl.string(P.default.QpQBPQ),
        body: w.intl.string(P.default["6hn0xF"]),
        action: {
            text: w.intl.string(w.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        onRequestClose: () => n?.(G.i.USER_DISMISS),
    });
}
function z(e) {
    let { guildId: t, powerups: n, channelRowRef: s, markAsDismissed: l } = e,
        r = (0, c.bG)([f.A], () => f.A.getGuild(t)?.name),
        { onActivate: o, isLoading: d, error: u } = (0, j.A)(t, n[0]),
        h = (0, N.A)(n[0], !0);
    if (((0, R.A)(u), 0 === n.length)) return;
    let m =
            n.length >= 3
                ? w.intl.formatToPlainString(P.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? w.intl.formatToPlainString(P.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : w.intl.formatToPlainString(P.default.ZF8NT6, { perk: n[0].title }),
        _ = 1 === n.length;
    return (0, i.jsx)(en, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(v.b, { className: a()(k.Sl, k.SV) })
                : (0, i.jsx)("img", { alt: "", src: h, className: k.Sl }),
        title: w.intl.formatToPlainString(P.default.LmpChE, { guildName: r }),
        body: m,
        actions: [
            {
                text: _ ? w.intl.string(P.default.gSxlHf) : w.intl.string(w.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), _ ? o() : (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: d,
            },
        ],
        targetElementRef: s,
        markAsDismissed: l,
    });
}
function q(e) {
    let { guildId: t, powerups: n, channelRowRef: s, markAsDismissed: l } = e,
        a = n.find((e) => e.skuId === r.FB);
    if (null != a)
        return (0, i.jsx)(en, {
            targetElementRef: s,
            title: w.intl.string(P.default.Ygpx4Q),
            body: w.intl.string(P.default.mmNkUA),
            size: "video",
            asset: K.A,
            actions: [
                {
                    text: w.intl.string(w.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let o = n.find((e) => L.m_.has(e.skuId));
    if (null != o)
        return (0, i.jsx)(en, {
            targetElementRef: s,
            title: w.intl.string(P.default["kA2c+n"]),
            body: w.intl.string(P.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: F.A, className: k.Sl }),
            actions: [
                {
                    text: w.intl.string(w.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let c = n.find((e) => L.aH.has(e.skuId));
    if (null != c)
        return (0, i.jsx)(en, {
            targetElementRef: s,
            title: w.intl.string(P.default["kA2c+n"]),
            body: w.intl.string(P.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: H.A, className: k.Sl }),
            actions: [
                {
                    text: w.intl.string(w.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, c.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let d = n.find((e) => e.skuId === r.zY);
    return null != d
        ? (0, i.jsx)(en, {
              targetElementRef: s,
              title: w.intl.string(P.default.rp0Ff1),
              body: w.intl.string(P.default["3L/DZq"]),
              size: "video",
              asset: (0, i.jsx)("img", { alt: "", src: V.A, className: k.Sl }),
              actions: [
                  {
                      text: w.intl.string(w.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                      },
                  },
              ],
              markAsDismissed: l,
          })
        : null;
}
function X(e) {
    let { guildId: t, type: n, markAsDismissed: s, channelRowRef: l } = e,
        { available: a } = (0, S.A)(t),
        { gameName: r, gameName2: d } = (0, E.A)(),
        u = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: k.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: w.intl.string(n === I.o.GAME_SERVER_HOSTING_AVAILABLE ? U.default.wXLChx : U.default["8z8RpY"]),
        body:
            n === I.o.GAME_SERVER_HOSTING_AVAILABLE
                ? w.intl.formatToPlainString(U.default["7KXp9J"], { gameName: r, gameName2: d })
                : w.intl.format(U.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: w.intl.string(w.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: s,
    });
}
function Q(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: s } = e,
        l = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: k.Sl,
            stateMachine: l ? "SM_Main_Int" : "SM_Auto",
        }),
        title: w.intl.string(U.default["eX64+z"]),
        body: w.intl.string(U.default.NpgfEB),
        actions: [
            {
                text: w.intl.string(w.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(G.i.TAKE_ACTION), (0, p.pX)(M.BVt.CHANNEL(t, D.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function J(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: s } = e,
        { gameName: l, gameName2: a } = (0, E.A)(),
        r = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: s,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: k.Sl,
            stateMachine: r ? "SM_Main_Int" : "SM_Auto",
        }),
        title: w.intl.string(U.default.t3LNW1),
        body: w.intl.formatToPlainString(U.default.V9qFAU, { gameName: l, gameName2: a }),
        actions: [
            {
                text: w.intl.string(U.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(G.i.TAKE_ACTION),
                        (0, _.K4)({
                            guildId: t,
                            location: { section: M.JJy.GUILD_HEADER, object: M.ZSU.BUTTON_CTA },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function $(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: s, ...l } = e,
        a = (0, b.A)(t);
    return (0, i.jsx)(en, {
        targetElementRef: s,
        ...l,
        asset: (0, i.jsx)(x.default, { gameId: O.YJ }),
        aspectRatio: "6/4",
        title: w.intl.string(U.default["wy+j5s"]),
        body: w.intl.formatToPlainString(U.default["7OETrT"], {
            gameName: "RuneScape",
            gameName2: "Necesse",
            gameName3: "Factorio",
        }),
        actions: [
            {
                text: w.intl.string(U.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(G.i.TAKE_ACTION),
                        a
                            ? (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, O.W5)
                            : (0, _.K4)({
                                  guildId: t,
                                  location: { section: M.JJy.GUILD_HEADER, object: M.ZSU.BUTTON_CTA },
                                  scrollToPowerupCards: !0,
                              });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Z(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: s, ...l } = e,
        a = (0, b.A)(t),
        r = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: s,
        ...l,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: k.Sl,
            stateMachine: r ? "SM_Main_Int" : "SM_Auto",
        }),
        title: w.intl.string(U.default.Jkx0sf),
        body: w.intl.string(U.default.WhPKFP),
        actions: [
            {
                text: w.intl.string(w.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    a
                        ? (0, T.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_PRICING_CHANGE, O.W5)
                        : (n(G.i.TAKE_ACTION),
                          (0, _.K4)({
                              guildId: t,
                              location: { section: M.JJy.GUILD_HEADER, object: M.ZSU.BUTTON_CTA },
                              scrollToPowerupCards: !0,
                          }));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function ee(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: a, ...r } = e,
        { available: o } = (0, S.A)(t),
        c = n.cost - o,
        d = (0, N.A)(n, !0),
        { analyticsLocations: u } = (0, m.Ay)(A.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        h = (0, b.A)(t),
        _ = s.useRef(null);
    return (0, i.jsx)(en, {
        asset:
            n.type === L.o9.LEVEL
                ? (0, i.jsx)(y.n, { powerup: n, eventTargetRef: _, className: k.Lj })
                : (0, i.jsx)("img", { alt: "", src: d, className: k.Sl }),
        title: w.intl.string(P.default.n37JhA),
        body: w.intl.formatToPlainString(h || n.type === L.o9.LEVEL ? P.default.Yr1ogl : P.default["7MZ2tu"], {
            boostCount: c,
            perkName: n.title,
        }),
        actions: [
            {
                text: w.intl.string(w.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = f.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: M.liQ.GUILD_CHANNEL, section: M.JJy.GUILD_HEADER };
                    await (0, g.g)({
                        guild: e,
                        numberOfBoostsToAdd: c,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: n.type === L.o9.PERK ? L.Pn.PERK : void 0,
                    }),
                        a(G.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
        ...r,
    });
}
function et(e) {
    let { guildId: t, featuredExpiringPowerup: n, channelRowRef: l, markAsDismissed: a, ...r } = e,
        d = (0, c.bG)([C.A], () => C.A.getStateForGuild(t)),
        { analyticsLocations: u } = (0, m.Ay)(A.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        _ = d?.allPowerups[n.skuId],
        p = (0, N.A)(_, !0),
        x = s.useRef(null),
        E = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    if (null == _ && !n.isGameServer) return null;
    let I = n.isGameServer
            ? w.intl.string(P.default["9L0pAN"])
            : w.intl.formatToPlainString(P.default.gG8bI8, { perkName: n.name }),
        S = 0 === n.daysUntilExpiry ? P.default.BNS5zl : P.default["Xla/TL"],
        b = w.intl.formatToPlainString(S, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, i.jsx)(en, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, i.jsx)(o.E_w, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: k.Sl,
                  stateMachine: E ? "SM_Main_Int" : "SM_Auto",
              })
            : _?.type === L.o9.LEVEL
              ? (0, i.jsx)(y.n, { powerup: _, eventTargetRef: x, className: k.Lj })
              : (0, i.jsx)("img", { alt: "", src: p, className: k.Sl }),
        title: I,
        body: b,
        actions: [
            {
                text: w.intl.string(w.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = f.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: M.liQ.GUILD_CHANNEL, section: M.JJy.GUILD_HEADER };
                    await (0, g.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: _?.type === L.o9.PERK || n.isGameServer ? L.Pn.PERK : void 0,
                    }),
                        a(G.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
        ...r,
    });
}
function en(e) {
    let {
        caretConfig: t = { align: "start" },
        position: n = "right",
        align: s = "top",
        alignmentStrategy: l = "edge",
        markAsDismissed: a,
        size: r = "lg",
        asset: o,
        aspectRatio: c,
        ...h
    } = e;
    return (0, i.jsx)(u.AM, {
        ...h,
        gradientColor: "pink",
        graphic: {
            type: "dynamic",
            component: d.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
            props: { asset: o },
            aspectRatio: c,
        },
        size: r,
        shouldShow: !0,
        position: n,
        caretConfig: t,
        alignmentStrategy: l,
        align: s,
        onRequestClose: () => a?.(G.i.USER_DISMISS),
    });
}
