n.d(t, {
    Gw: () => et,
    HW: () => K,
    K8: () => J,
    Mr: () => en,
    Ns: () => ee,
    UB: () => z,
    YX: () => $,
    bo: () => X,
    jz: () => Q,
    lw: () => q,
    mn: () => Z,
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(512750),
    o = n(320176),
    d = n(311907),
    c = n(116833),
    u = n(206248),
    h = n(265486),
    A = n(775602),
    _ = n(793574),
    m = n(688810),
    g = n(509536),
    p = n(987144),
    f = n(976860),
    E = n(71393),
    x = n(881756),
    I = n(297930),
    C = n(645619),
    b = n(379229),
    N = n(990208),
    S = n(864310),
    v = n(363487),
    T = n(828162),
    y = n(490557),
    j = n(306113),
    R = n(220628),
    L = n(867060),
    O = n(800007),
    G = n(568065),
    M = n(652215),
    D = n(746080),
    U = n(49999),
    P = n(576709),
    w = n(853513),
    k = n(985018),
    V = n(945915),
    B = n(570890),
    H = n(108432),
    F = n(581665),
    W = n(392438),
    Y = n(20874);
function K(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: s } = e;
    return (0, i.jsx)(ei, {
        asset: (0, i.jsx)(y.b, { className: a()(V.Sl, V.SV) }),
        title: k.intl.formatToPlainString(w.default["Zg/m9K"], { perkName: n.title }),
        body: k.intl.formatToPlainString(w.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function z(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e;
    return (0, i.jsx)(u.H, {
        targetElementRef: l,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        ...s,
        assetUrl: H.A,
        title: k.intl.string(w.default.QpQBPQ),
        body: k.intl.string(w.default["6hn0xF"]),
        action: {
            text: k.intl.string(k.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        onRequestClose: () => n?.(U.i.USER_DISMISS),
    });
}
function q(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        r = (0, d.bG)([E.A], () => E.A.getGuild(t)?.name),
        { onActivate: o, isLoading: c, error: u } = (0, R.A)(t, n[0]),
        h = (0, N.A)(n[0], !0);
    if (((0, L.A)(u), 0 === n.length)) return;
    let A =
            n.length >= 3
                ? k.intl.formatToPlainString(w.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? k.intl.formatToPlainString(w.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : k.intl.formatToPlainString(w.default.ZF8NT6, { perk: n[0].title }),
        m = 1 === n.length;
    return (0, i.jsx)(ei, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(y.b, { className: a()(V.Sl, V.SV) })
                : (0, i.jsx)("img", { alt: "", src: h, className: V.Sl }),
        title: k.intl.formatToPlainString(w.default.LmpChE, { guildName: r }),
        body: A,
        actions: [
            {
                text: m ? k.intl.string(w.default.gSxlHf) : k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), m ? o() : (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function X(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        a = n.find((e) => e.skuId === r.FB);
    if (null != a)
        return (0, i.jsx)(ei, {
            targetElementRef: l,
            title: k.intl.string(w.default.Ygpx4Q),
            body: k.intl.string(w.default.mmNkUA),
            size: "video",
            asset: Y.A,
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => G.m_.has(e.skuId));
    if (null != o)
        return (0, i.jsx)(ei, {
            targetElementRef: l,
            title: k.intl.string(w.default["kA2c+n"]),
            body: k.intl.string(w.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: W.A, className: V.Sl }),
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let d = n.find((e) => G.aH.has(e.skuId));
    if (null != d)
        return (0, i.jsx)(ei, {
            targetElementRef: l,
            title: k.intl.string(w.default["kA2c+n"]),
            body: k.intl.string(w.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: F.A, className: V.Sl }),
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let c = n.find((e) => e.skuId === r.zY);
    return null != c
        ? (0, i.jsx)(ei, {
              targetElementRef: l,
              title: k.intl.string(w.default.rp0Ff1),
              body: k.intl.string(w.default["3L/DZq"]),
              size: "video",
              asset: (0, i.jsx)("img", { alt: "", src: B.A, className: V.Sl }),
              actions: [
                  {
                      text: k.intl.string(k.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, c.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function Q(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: a } = (0, S.A)(t),
        { gameName: r, gameName2: c } = (0, x.A)(),
        u = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, i.jsx)(ei, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: V.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(n === b.o.GAME_SERVER_HOSTING_AVAILABLE ? P.default.wXLChx : P.default["8z8RpY"]),
        body:
            n === b.o.GAME_SERVER_HOSTING_AVAILABLE
                ? k.intl.formatToPlainString(P.default["7KXp9J"], { gameName: r, gameName2: c })
                : k.intl.format(P.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function Z(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, i.jsx)(ei, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: V.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(P.default["eX64+z"]),
        body: k.intl.string(P.default.NpgfEB),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(U.i.TAKE_ACTION), (0, f.pX)(M.BVt.CHANNEL(t, D.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function J(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: a } = (0, x.A)(),
        r = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, i.jsx)(ei, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: V.Sl,
            stateMachine: r ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(P.default.t3LNW1),
        body: k.intl.formatToPlainString(P.default.V9qFAU, { gameName: s, gameName2: a }),
        actions: [
            {
                text: k.intl.string(P.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(U.i.TAKE_ACTION),
                        (0, g.K4)({
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
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e,
        a = (0, v.A)(t);
    return (0, i.jsx)(ei, {
        targetElementRef: l,
        ...s,
        asset: (0, i.jsx)(I.default, { gameId: O.YJ }),
        aspectRatio: "6/4",
        title: k.intl.string(P.default["wy+j5s"]),
        body: k.intl.formatToPlainString(P.default["7OETrT"], {
            gameName: "RuneScape",
            gameName2: "Necesse",
            gameName3: "Factorio",
        }),
        actions: [
            {
                text: k.intl.string(P.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(U.i.TAKE_ACTION),
                        a
                            ? (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, O.W5)
                            : (0, g.K4)({
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
function ee(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e,
        a = (0, v.A)(t),
        r = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, i.jsx)(ei, {
        size: "video",
        targetElementRef: l,
        ...s,
        asset: (0, i.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: V.Sl,
            stateMachine: r ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(P.default.Jkx0sf),
        body: k.intl.string(P.default.WhPKFP),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    a
                        ? (0, T.A)(t, _.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_PRICING_CHANGE, O.W5)
                        : (n(U.i.TAKE_ACTION),
                          (0, g.K4)({
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
function et(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: a, ...r } = e,
        { available: o } = (0, S.A)(t),
        d = n.cost - o,
        c = (0, N.A)(n, !0),
        { analyticsLocations: u } = (0, m.Ay)(_.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        h = (0, v.A)(t),
        A = l.useRef(null);
    return (0, i.jsx)(ei, {
        asset:
            n.type === G.o9.LEVEL
                ? (0, i.jsx)(j.n, { powerup: n, eventTargetRef: A, className: V.Lj })
                : (0, i.jsx)("img", { alt: "", src: c, className: V.Sl }),
        title: k.intl.string(w.default.n37JhA),
        body: k.intl.formatToPlainString(h || n.type === G.o9.LEVEL ? w.default.Yr1ogl : w.default["7MZ2tu"], {
            boostCount: d,
            perkName: n.title,
        }),
        actions: [
            {
                text: k.intl.string(k.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = E.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: M.liQ.GUILD_CHANNEL, section: M.JJy.GUILD_HEADER };
                    await (0, p.g)({
                        guild: e,
                        numberOfBoostsToAdd: d,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: n.type === G.o9.PERK ? G.Pn.PERK : void 0,
                    }),
                        a(U.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: a,
        ...r,
    });
}
function en(e) {
    let { guildId: t, featuredExpiringPowerup: n, channelRowRef: s, markAsDismissed: a, ...r } = e,
        c = (0, d.bG)([C.A], () => C.A.getStateForGuild(t)),
        { analyticsLocations: u } = (0, m.Ay)(_.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        h = c?.allPowerups[n.skuId],
        g = (0, N.A)(h, !0),
        f = l.useRef(null),
        x = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    if (null == h && !n.isGameServer) return null;
    let I = n.isGameServer
            ? k.intl.string(w.default["9L0pAN"])
            : k.intl.formatToPlainString(w.default.gG8bI8, { perkName: n.name }),
        b = 0 === n.daysUntilExpiry ? w.default.BNS5zl : w.default["Xla/TL"],
        S = k.intl.formatToPlainString(b, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, i.jsx)(ei, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, i.jsx)(o.E, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: V.Sl,
                  stateMachine: x ? "SM_Main_Int" : "SM_Auto",
              })
            : h?.type === G.o9.LEVEL
              ? (0, i.jsx)(j.n, { powerup: h, eventTargetRef: f, className: V.Lj })
              : (0, i.jsx)("img", { alt: "", src: g, className: V.Sl }),
        title: I,
        body: S,
        actions: [
            {
                text: k.intl.string(k.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = E.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: M.liQ.GUILD_CHANNEL, section: M.JJy.GUILD_HEADER };
                    await (0, p.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: h?.type === G.o9.PERK || n.isGameServer ? G.Pn.PERK : void 0,
                    }),
                        a(U.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: a,
        ...r,
    });
}
function ei(e) {
    let {
        caretConfig: t = { align: "start" },
        position: n = "right",
        align: l = "top",
        alignmentStrategy: s = "edge",
        markAsDismissed: a,
        size: r = "lg",
        asset: o,
        aspectRatio: d,
        ...u
    } = e;
    return (0, i.jsx)(h.A, {
        ...u,
        gradientColor: "pink",
        graphic: {
            type: "dynamic",
            component: c.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
            props: { asset: o },
            aspectRatio: d,
        },
        size: r,
        shouldShow: !0,
        position: n,
        caretConfig: t,
        alignmentStrategy: s,
        align: l,
        onRequestClose: () => a?.(U.i.USER_DISMISS),
    });
}
