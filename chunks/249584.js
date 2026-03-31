n.d(t, {
    Gw: () => ee,
    HW: () => W,
    K8: () => Q,
    Mr: () => et,
    Ns: () => Z,
    UB: () => Y,
    YX: () => $,
    bo: () => q,
    jz: () => X,
    lw: () => z,
    mn: () => J,
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(512750),
    o = n(158954),
    c = n(311907),
    d = n(116833),
    u = n(342494),
    h = n(775602),
    A = n(793574),
    _ = n(688810),
    m = n(509536),
    g = n(987144),
    p = n(976860),
    f = n(71393),
    x = n(881756),
    E = n(297930),
    I = n(645619),
    C = n(379229),
    N = n(990208),
    T = n(864310),
    S = n(363487),
    b = n(828162),
    y = n(490557),
    v = n(306113),
    j = n(220628),
    R = n(867060),
    O = n(800007),
    L = n(568065),
    M = n(652215),
    D = n(746080),
    U = n(49999),
    G = n(294726),
    P = n(333354),
    k = n(985018),
    w = n(168363),
    B = n(570890),
    V = n(108432),
    H = n(581665),
    F = n(392438),
    K = n(20874);
function W(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: s } = e;
    return (0, i.jsx)(en, {
        asset: (0, i.jsx)(y.b, { className: a()(w.Sl, w.SV) }),
        title: k.intl.formatToPlainString(P.default["Zg/m9K"], { perkName: n.title }),
        body: k.intl.formatToPlainString(P.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function Y(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e;
    return (0, i.jsx)(u.HZ, {
        targetElementRef: l,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        ...s,
        assetUrl: V.A,
        title: k.intl.string(P.default.QpQBPQ),
        body: k.intl.string(P.default["6hn0xF"]),
        action: {
            text: k.intl.string(k.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        onRequestClose: () => n?.(U.i.USER_DISMISS),
    });
}
function z(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        r = (0, c.bG)([f.A], () => f.A.getGuild(t)?.name),
        { onActivate: o, isLoading: d, error: u } = (0, j.A)(t, n[0]),
        h = (0, N.A)(n[0], !0);
    if (((0, R.A)(u), 0 === n.length)) return;
    let _ =
            n.length >= 3
                ? k.intl.formatToPlainString(P.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? k.intl.formatToPlainString(P.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : k.intl.formatToPlainString(P.default.ZF8NT6, { perk: n[0].title }),
        m = 1 === n.length;
    return (0, i.jsx)(en, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(y.b, { className: a()(w.Sl, w.SV) })
                : (0, i.jsx)("img", { alt: "", src: h, className: w.Sl }),
        title: k.intl.formatToPlainString(P.default.LmpChE, { guildName: r }),
        body: _,
        actions: [
            {
                text: m ? k.intl.string(P.default.gSxlHf) : k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), m ? o() : (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: d,
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function q(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        a = n.find((e) => e.skuId === r.FB);
    if (null != a)
        return (0, i.jsx)(en, {
            targetElementRef: l,
            title: k.intl.string(P.default.Ygpx4Q),
            body: k.intl.string(P.default.mmNkUA),
            size: "video",
            asset: K.A,
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => L.m_.has(e.skuId));
    if (null != o)
        return (0, i.jsx)(en, {
            targetElementRef: l,
            title: k.intl.string(P.default["kA2c+n"]),
            body: k.intl.string(P.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: F.A, className: w.Sl }),
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let c = n.find((e) => L.aH.has(e.skuId));
    if (null != c)
        return (0, i.jsx)(en, {
            targetElementRef: l,
            title: k.intl.string(P.default["kA2c+n"]),
            body: k.intl.string(P.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: H.A, className: w.Sl }),
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, c.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let d = n.find((e) => e.skuId === r.zY);
    return null != d
        ? (0, i.jsx)(en, {
              targetElementRef: l,
              title: k.intl.string(P.default.rp0Ff1),
              body: k.intl.string(P.default["3L/DZq"]),
              size: "video",
              asset: (0, i.jsx)("img", { alt: "", src: B.A, className: w.Sl }),
              actions: [
                  {
                      text: k.intl.string(k.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function X(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: a } = (0, T.A)(t),
        { gameName: r, gameName2: d } = (0, x.A)(),
        u = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(n === C.o.GAME_SERVER_HOSTING_AVAILABLE ? G.default.wXLChx : G.default["8z8RpY"]),
        body:
            n === C.o.GAME_SERVER_HOSTING_AVAILABLE
                ? k.intl.formatToPlainString(G.default["7KXp9J"], { gameName: r, gameName2: d })
                : k.intl.format(G.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function J(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(G.default["eX64+z"]),
        body: k.intl.string(G.default.NpgfEB),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(U.i.TAKE_ACTION), (0, p.pX)(M.BVt.CHANNEL(t, D.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Q(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: a } = (0, x.A)(),
        r = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: r ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(G.default.t3LNW1),
        body: k.intl.formatToPlainString(G.default.V9qFAU, { gameName: s, gameName2: a }),
        actions: [
            {
                text: k.intl.string(G.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(U.i.TAKE_ACTION),
                        (0, m.K4)({
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
        a = (0, S.A)(t);
    return (0, i.jsx)(en, {
        targetElementRef: l,
        ...s,
        asset: (0, i.jsx)(E.default, { gameId: O.YJ }),
        aspectRatio: "6/4",
        title: k.intl.string(G.default["wy+j5s"]),
        body: k.intl.formatToPlainString(G.default["7OETrT"], {
            gameName: "RuneScape",
            gameName2: "Necesse",
            gameName3: "Factorio",
        }),
        actions: [
            {
                text: k.intl.string(G.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(U.i.TAKE_ACTION),
                        a
                            ? (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, O.W5)
                            : (0, m.K4)({
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
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e,
        a = (0, S.A)(t),
        r = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: l,
        ...s,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: r ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(G.default.Jkx0sf),
        body: k.intl.string(G.default.WhPKFP),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    a
                        ? (0, b.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_PRICING_CHANGE, O.W5)
                        : (n(U.i.TAKE_ACTION),
                          (0, m.K4)({
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
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: a, ...r } = e,
        { available: o } = (0, T.A)(t),
        c = n.cost - o,
        d = (0, N.A)(n, !0),
        { analyticsLocations: u } = (0, _.Ay)(A.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        h = (0, S.A)(t),
        m = l.useRef(null);
    return (0, i.jsx)(en, {
        asset:
            n.type === L.o9.LEVEL
                ? (0, i.jsx)(v.n, { powerup: n, eventTargetRef: m, className: w.Lj })
                : (0, i.jsx)("img", { alt: "", src: d, className: w.Sl }),
        title: k.intl.string(P.default.n37JhA),
        body: k.intl.formatToPlainString(h || n.type === L.o9.LEVEL ? P.default.Yr1ogl : P.default["7MZ2tu"], {
            boostCount: c,
            perkName: n.title,
        }),
        actions: [
            {
                text: k.intl.string(k.t.oPAx73),
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
                        a(U.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: a,
        ...r,
    });
}
function et(e) {
    let { guildId: t, featuredExpiringPowerup: n, channelRowRef: s, markAsDismissed: a, ...r } = e,
        d = (0, c.bG)([I.A], () => I.A.getStateForGuild(t)),
        { analyticsLocations: u } = (0, _.Ay)(A.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        m = d?.allPowerups[n.skuId],
        p = (0, N.A)(m, !0),
        x = l.useRef(null),
        E = (0, c.bG)([h.A], () => h.A.useReducedMotion);
    if (null == m && !n.isGameServer) return null;
    let C = n.isGameServer
            ? k.intl.string(P.default["9L0pAN"])
            : k.intl.formatToPlainString(P.default.gG8bI8, { perkName: n.name }),
        T = 0 === n.daysUntilExpiry ? P.default.BNS5zl : P.default["Xla/TL"],
        S = k.intl.formatToPlainString(T, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, i.jsx)(en, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, i.jsx)(o.E_w, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: w.Sl,
                  stateMachine: E ? "SM_Main_Int" : "SM_Auto",
              })
            : m?.type === L.o9.LEVEL
              ? (0, i.jsx)(v.n, { powerup: m, eventTargetRef: x, className: w.Lj })
              : (0, i.jsx)("img", { alt: "", src: p, className: w.Sl }),
        title: C,
        body: S,
        actions: [
            {
                text: k.intl.string(k.t.oPAx73),
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
                        intent: m?.type === L.o9.PERK || n.isGameServer ? L.Pn.PERK : void 0,
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
    let {
        caretConfig: t = { align: "start" },
        position: n = "right",
        align: l = "top",
        alignmentStrategy: s = "edge",
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
        alignmentStrategy: s,
        align: l,
        onRequestClose: () => a?.(U.i.USER_DISMISS),
    });
}
