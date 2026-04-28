n.d(t, {
    YX: () => $,
    Mr: () => et,
    Ns: () => Q,
    mn: () => Z,
    HW: () => z,
    K8: () => J,
    jz: () => X,
    bo: () => q,
    Gw: () => ee,
    UB: () => W,
    lw: () => Y,
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(512750),
    o = n(289704),
    d = n(17928),
    c = n(116833),
    u = n(338854),
    h = n(43105),
    A = n(775602),
    g = n(793574),
    m = n(688810),
    p = n(509536),
    f = n(987144),
    C = n(976860),
    E = n(71393),
    x = n(881756),
    N = n(414196),
    S = n(297930),
    _ = n(645619),
    I = n(379229),
    b = n(990208),
    G = n(864310),
    v = n(363487),
    j = n(828162),
    R = n(490557),
    M = n(565553),
    y = n(168900),
    T = n(285828);
function L(e) {
    let { powerup: t, eventTargetRef: n, className: i } = e,
        s = { eventTargetRef: n, fit: "contain", className: i };
    switch (t.skuId) {
        case a.ec:
            return (0, l.jsx)(M.t, { ...s });
        case a.RV:
            return (0, l.jsx)(y.J, { ...s });
        case a.YG:
            return (0, l.jsx)(T.z, { ...s });
        default:
            return null;
    }
}
var U = n(249286),
    D = n(867060),
    P = n(800007),
    O = n(568065),
    V = n(652215),
    w = n(746080),
    H = n(49999),
    B = n(576709),
    k = n(853513),
    F = n(985018),
    K = n(945915);
function z(e) {
    let { guildId: t, powerup: n, channelRowRef: i, markAsDismissed: s } = e;
    return (0, l.jsx)(en, {
        asset: (0, l.jsx)(R.b, { className: r()(K.Sl, K.SV) }),
        title: F.intl.formatToPlainString(k.default["Zg/m9K"], { perkName: n.title }),
        body: F.intl.formatToPlainString(k.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: i,
        markAsDismissed: s,
    });
}
function W(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i, ...s } = e;
    return (0, l.jsx)(u.H, {
        targetElementRef: i,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        ...s,
        assetUrl:
            "https://cdn.discordapp.com/assets/content/ec10ea6e7609350fe848bf7497aba0ab1748521370f7e1f5fd257df714ff9c4c.gif",
        title: F.intl.string(k.default.QpQBPQ),
        body: F.intl.string(k.default["6hn0xF"]),
        action: {
            text: F.intl.string(F.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        onRequestClose: () => n?.(H.i.USER_DISMISS),
    });
}
function Y(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: s } = e,
        a = (0, d.bG)([E.A], () => E.A.getGuild(t)?.name),
        { onActivate: o, isLoading: c, error: u } = (0, U.A)(t, n[0]),
        h = (0, b.A)(n[0], !0);
    if (((0, D.A)(u), 0 === n.length)) return;
    let A =
            n.length >= 3
                ? F.intl.formatToPlainString(k.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? F.intl.formatToPlainString(k.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : F.intl.formatToPlainString(k.default.ZF8NT6, { perk: n[0].title }),
        m = 1 === n.length;
    return (0, l.jsx)(en, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, l.jsx)(R.b, { className: r()(K.Sl, K.SV) })
                : (0, l.jsx)("img", { alt: "", src: h, className: K.Sl }),
        title: F.intl.formatToPlainString(k.default.LmpChE, { guildName: a }),
        body: A,
        actions: [
            {
                text: m ? F.intl.string(k.default.gSxlHf) : F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), m ? o() : (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: i,
        markAsDismissed: s,
    });
}
function q(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: s } = e,
        r = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, l.jsx)(en, {
            targetElementRef: i,
            title: F.intl.string(k.default.Ygpx4Q),
            body: F.intl.string(k.default.mmNkUA),
            size: "video",
            asset: "https://cdn.discordapp.com/assets/content/6ffaa21345f63322cf7ff8725e4e087b8c32968b8b7ba55822f0c369d7f0c03b.gif",
            actions: [
                {
                    text: F.intl.string(F.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, r.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => O.m_.has(e.skuId));
    if (null != o)
        return (0, l.jsx)(en, {
            targetElementRef: i,
            title: F.intl.string(k.default["kA2c+n"]),
            body: F.intl.string(k.default.TUilLj),
            asset: (0, l.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/196e929b196180fe33dc1fca35f40478270ff03434e24f72ca3cc64ee94222b4.png",
                className: K.Sl,
            }),
            actions: [
                {
                    text: F.intl.string(F.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let d = n.find((e) => O.aH.has(e.skuId));
    if (null != d)
        return (0, l.jsx)(en, {
            targetElementRef: i,
            title: F.intl.string(k.default["kA2c+n"]),
            body: F.intl.string(k.default.TUilLj),
            asset: (0, l.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/477c3ad9764f37e0991cbcd8a222b8270988e9dd81e5bb3a88f47944fd5e1c4d.gif",
                className: K.Sl,
            }),
            actions: [
                {
                    text: F.intl.string(F.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let c = n.find((e) => e.skuId === a.zY);
    return null != c
        ? (0, l.jsx)(en, {
              targetElementRef: i,
              title: F.intl.string(k.default.rp0Ff1),
              body: F.intl.string(k.default["3L/DZq"]),
              size: "video",
              asset: (0, l.jsx)("img", {
                  alt: "",
                  src: "https://cdn.discordapp.com/assets/content/838731e8db0e1b209bb8b20d5acefb9effe09952f60a13067ab7ad92887b39ad.png",
                  className: K.Sl,
              }),
              actions: [
                  {
                      text: F.intl.string(F.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, c.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function X(e) {
    let { guildId: t, type: n, markAsDismissed: i, channelRowRef: s } = e,
        { available: r } = (0, G.A)(t),
        { gameName: a, gameName2: c } = (0, x.A)(),
        u = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, l.jsx)(en, {
        size: "video",
        targetElementRef: s,
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: K.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(n === I.o.GAME_SERVER_HOSTING_AVAILABLE ? B.default.wXLChx : B.default["8z8RpY"]),
        body:
            n === I.o.GAME_SERVER_HOSTING_AVAILABLE
                ? F.intl.formatToPlainString(B.default["7KXp9J"], { gameName: a, gameName2: c })
                : F.intl.format(B.default["IQ1E+d"], { boostCount: r }),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: i,
    });
}
function Z(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        s = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, l.jsx)(en, {
        size: "video",
        targetElementRef: i,
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: K.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(B.default["eX64+z"]),
        body: F.intl.string(B.default.NpgfEB),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(H.i.TAKE_ACTION), (0, C.pX)(V.BVt.CHANNEL(t, w.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function J(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        { gameName: s, gameName2: r } = (0, x.A)(),
        a = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, l.jsx)(en, {
        size: "video",
        targetElementRef: i,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: K.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(B.default.t3LNW1),
        body: F.intl.formatToPlainString(B.default.V9qFAU, { gameName: s, gameName2: r }),
        actions: [
            {
                text: F.intl.string(B.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(H.i.TAKE_ACTION),
                        (0, p.K4)({
                            guildId: t,
                            location: { section: V.JJy.GUILD_HEADER, object: V.ZSU.BUTTON_CTA },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function $(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i, ...s } = e,
        r = (0, v.A)(t),
        a = (0, N.A)(t, !0);
    if (a.length < P.js) return null;
    let o = a[0].gameId,
        d = a[0].name,
        c = a[1].name,
        u = a[2].name;
    return (0, l.jsx)(en, {
        targetElementRef: i,
        ...s,
        asset: (0, l.jsx)(S.default, { gameId: o }),
        aspectRatio: "6/4",
        title: F.intl.string(B.default["wy+j5s"]),
        body: F.intl.formatToPlainString(B.default["7OETrT"], {
            gameName: d ?? "",
            gameName2: c ?? "",
            gameName3: u ?? "",
        }),
        actions: [
            {
                text: F.intl.string(B.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(H.i.TAKE_ACTION),
                        r
                            ? (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, P.W5)
                            : (0, p.K4)({
                                  guildId: t,
                                  location: { section: V.JJy.GUILD_HEADER, object: V.ZSU.BUTTON_CTA },
                                  scrollToPowerupCards: !0,
                              });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Q(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i, ...s } = e,
        r = (0, v.A)(t),
        a = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, l.jsx)(en, {
        size: "video",
        targetElementRef: i,
        ...s,
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: K.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(B.default.Jkx0sf),
        body: F.intl.string(B.default.WhPKFP),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    r
                        ? (0, j.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_PRICING_CHANGE, P.W5)
                        : (n(H.i.TAKE_ACTION),
                          (0, p.K4)({
                              guildId: t,
                              location: { section: V.JJy.GUILD_HEADER, object: V.ZSU.BUTTON_CTA },
                              scrollToPowerupCards: !0,
                          }));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function ee(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: r, ...a } = e,
        { available: o } = (0, G.A)(t),
        d = n.cost - o,
        c = (0, b.A)(n, !0),
        { analyticsLocations: u } = (0, m.Ay)(g.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        h = (0, v.A)(t),
        A = i.useRef(null);
    return (0, l.jsx)(en, {
        asset:
            n.type === O.o9.LEVEL
                ? (0, l.jsx)(L, { powerup: n, eventTargetRef: A, className: K.Lj })
                : (0, l.jsx)("img", { alt: "", src: c, className: K.Sl }),
        title: F.intl.string(k.default.n37JhA),
        body: F.intl.formatToPlainString(h || n.type === O.o9.LEVEL ? k.default.Yr1ogl : k.default["7MZ2tu"], {
            boostCount: d,
            perkName: n.title,
        }),
        actions: [
            {
                text: F.intl.string(F.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = E.A.getGuild(t);
                    if (null == e) return;
                    let l = { page: V.liQ.GUILD_CHANNEL, section: V.JJy.GUILD_HEADER };
                    await (0, f.g)({
                        guild: e,
                        numberOfBoostsToAdd: d,
                        analyticsLocation: l,
                        analyticsLocations: u,
                        intent: n.type === O.o9.PERK ? O.Pn.PERK : void 0,
                    }),
                        r(H.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: r,
        ...a,
    });
}
function et(e) {
    let { guildId: t, featuredExpiringPowerup: n, channelRowRef: s, markAsDismissed: r, ...a } = e,
        c = (0, d.bG)([_.A], () => _.A.getStateForGuild(t)),
        { analyticsLocations: u } = (0, m.Ay)(g.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        h = c?.allPowerups[n.skuId],
        p = (0, b.A)(h, !0),
        C = i.useRef(null),
        x = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    if (null == h && !n.isGameServer) return null;
    let N = n.isGameServer
            ? F.intl.string(k.default["9L0pAN"])
            : F.intl.formatToPlainString(k.default.gG8bI8, { perkName: n.name }),
        S = 0 === n.daysUntilExpiry ? k.default.BNS5zl : k.default["Xla/TL"],
        I = F.intl.formatToPlainString(S, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, l.jsx)(en, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, l.jsx)(o.E, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: K.Sl,
                  stateMachine: x ? "SM_Main_Int" : "SM_Auto",
              })
            : h?.type === O.o9.LEVEL
              ? (0, l.jsx)(L, { powerup: h, eventTargetRef: C, className: K.Lj })
              : (0, l.jsx)("img", { alt: "", src: p, className: K.Sl }),
        title: N,
        body: I,
        actions: [
            {
                text: F.intl.string(F.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = E.A.getGuild(t);
                    if (null == e) return;
                    let l = { page: V.liQ.GUILD_CHANNEL, section: V.JJy.GUILD_HEADER };
                    await (0, f.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: l,
                        analyticsLocations: u,
                        intent: h?.type === O.o9.PERK || n.isGameServer ? O.Pn.PERK : void 0,
                    }),
                        r(H.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: r,
        ...a,
    });
}
function en(e) {
    let {
        caretConfig: t = { align: "start" },
        position: n = "right",
        align: i = "top",
        alignmentStrategy: s = "edge",
        markAsDismissed: r,
        size: a = "lg",
        asset: o,
        aspectRatio: d,
        ...u
    } = e;
    return (0, l.jsx)(h.A, {
        ...u,
        gradientColor: "pink",
        graphic: {
            type: "dynamic",
            component: c.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
            props: { asset: o },
            aspectRatio: d,
        },
        size: a,
        shouldShow: !0,
        position: n,
        caretConfig: t,
        alignmentStrategy: s,
        align: i,
        onRequestClose: () => r?.(H.i.USER_DISMISS),
    });
}
